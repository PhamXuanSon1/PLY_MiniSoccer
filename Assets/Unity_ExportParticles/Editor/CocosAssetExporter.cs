// -----------------------------------------------------------------------------
//  CocosAssetExporter.cs
//  Writes the binary side-car assets of an export: every texture used by the
//  effect goes into its own "<EffectName>_Textures" folder, meshes (for
//  RenderMode.Mesh) into "<EffectName>_Meshes".
//
//  Both kinds of asset prefer copying the original source file, so nothing is
//  lost to re-encoding: textures keep their exact pixels without needing
//  Read/Write enabled, and an .fbx-backed mesh keeps its authored normals, UV
//  sets and smoothing groups. Procedural or built-in assets, which have no source
//  file, are regenerated instead - textures through a GPU readback, meshes
//  through Unity's FBX Exporter package or the bundled ASCII FBX writer.
// -----------------------------------------------------------------------------
using System.Collections.Generic;
using System.IO;
using UnityEditor;
using UnityEngine;

namespace CocosParticleExport
{
    public sealed class CocosAssetExporter
    {
        readonly string _textureDir;
        readonly string _meshDir;
        readonly List<string> _warnings;

        // Texture instance -> emitted file name, so a texture shared by several
        // materials is written once.
        readonly Dictionary<Texture, string> _textures = new Dictionary<Texture, string>();
        readonly Dictionary<Mesh, string> _meshes = new Dictionary<Mesh, string>();
        readonly HashSet<string> _usedNames = new HashSet<string>();

        public string TextureFolderName { get; private set; }
        public string MeshFolderName { get; private set; }

        public CocosAssetExporter(string rootDir, string effectName, List<string> warnings)
        {
            _warnings = warnings;
            TextureFolderName = effectName + "_Textures";
            MeshFolderName = effectName + "_Meshes";
            _textureDir = Path.Combine(rootDir, TextureFolderName);
            _meshDir = Path.Combine(rootDir, MeshFolderName);
        }

        public IEnumerable<string> ExportedTextures { get { return _textures.Values; } }
        public bool HasMeshes { get { return _meshes.Count > 0; } }

        /// <summary>
        /// Per-texture import hints so Cocos reproduces Unity's sampler state.
        /// Without this a tiled/scrolling texture clamps instead of repeating.
        /// </summary>
        public JArr TexturesJson()
        {
            var arr = new JArr();
            foreach (var kv in _textures)
            {
                if (kv.Value == null) continue;
                Texture tex = kv.Key;

                string wrap;
                switch (tex.wrapMode)
                {
                    case TextureWrapMode.Repeat: wrap = "repeat"; break;
                    case TextureWrapMode.Mirror:
                    case TextureWrapMode.MirrorOnce: wrap = "mirrored-repeat"; break;
                    default: wrap = "clamp-to-edge"; break;
                }

                string filter = tex.filterMode == FilterMode.Point ? "nearest" : "linear";

                bool mipmaps = false;
                var t2d = tex as Texture2D;
                if (t2d != null) mipmaps = t2d.mipmapCount > 1;

                arr.Add(new JObj()
                    .Set("file", kv.Value)
                    .Set("wrapMode", wrap)
                    .Set("filterMode", filter)
                    .Set("mipmaps", mipmaps)
                    .Set("width", tex.width)
                    .Set("height", tex.height));
            }
            return arr;
        }

        // ---------------------------------------------------------------- textures

        /// <summary>Copies the texture into the texture folder; returns its file name.</summary>
        public string RegisterTexture(Texture tex)
        {
            if (tex == null) return null;

            string existing;
            if (_textures.TryGetValue(tex, out existing)) return existing;

            Directory.CreateDirectory(_textureDir);

            string srcPath = AssetDatabase.GetAssetPath(tex);
            string fileName;

            bool copyable = !string.IsNullOrEmpty(srcPath)
                            && File.Exists(srcPath)
                            && !srcPath.StartsWith("Library/")
                            && !srcPath.StartsWith("Resources/unity_builtin");

            if (copyable)
            {
                string ext = Path.GetExtension(srcPath).ToLowerInvariant();
                // Cocos imports png/jpg/webp/bmp directly; anything else is re-encoded.
                if (ext == ".png" || ext == ".jpg" || ext == ".jpeg" || ext == ".webp" || ext == ".bmp")
                {
                    fileName = UniqueName(CocosMaterialAnalyzer.SanitizeName(Path.GetFileNameWithoutExtension(srcPath)), ext);
                    File.Copy(srcPath, Path.Combine(_textureDir, fileName), true);
                    _textures[tex] = fileName;
                    return fileName;
                }
            }

            // .psd/.tga/.exr/procedural/built-in -> re-encode as PNG through the GPU.
            fileName = UniqueName(CocosMaterialAnalyzer.SanitizeName(tex.name), ".png");
            if (EncodePng(tex, Path.Combine(_textureDir, fileName)))
            {
                _textures[tex] = fileName;
                return fileName;
            }

            _warnings.Add("Could not export texture '" + tex.name + "'; assign it by hand in Cocos.");
            _textures[tex] = null;
            return null;
        }

        /// <summary>Blits any texture into a temporary RenderTexture and saves it as PNG.</summary>
        static bool EncodePng(Texture tex, string destPath)
        {
            RenderTexture rt = null;
            RenderTexture prev = RenderTexture.active;
            try
            {
                // Textures authored for particles are colour data, so read back through
                // an sRGB target to preserve the values the artist saw in Unity.
                rt = RenderTexture.GetTemporary(tex.width, tex.height, 0,
                                                RenderTextureFormat.ARGB32,
                                                RenderTextureReadWrite.sRGB);
                Graphics.Blit(tex, rt);
                RenderTexture.active = rt;

                var readable = new Texture2D(tex.width, tex.height, TextureFormat.RGBA32, false, false);
                readable.ReadPixels(new Rect(0, 0, tex.width, tex.height), 0, 0);
                readable.Apply();

                File.WriteAllBytes(destPath, readable.EncodeToPNG());
                Object.DestroyImmediate(readable);
                return true;
            }
            catch (System.Exception e)
            {
                Debug.LogWarning("[CocosParticleExport] PNG readback failed for " + tex.name + ": " + e.Message);
                return false;
            }
            finally
            {
                RenderTexture.active = prev;
                if (rt != null) RenderTexture.ReleaseTemporary(rt);
            }
        }

        // ------------------------------------------------------------------- mesh

        /// <summary>
        /// Writes a particle mesh into the mesh folder and returns the file name.
        ///
        /// FBX is produced by whichever of these works first:
        ///   1. copy the mesh's own .fbx source file - lossless, and keeps the
        ///      original normals, UV sets, smoothing groups and object names;
        ///   2. Unity's FBX Exporter package, if the project has it installed;
        ///   3. the built-in ASCII FBX writer.
        /// </summary>
        public string RegisterMesh(Mesh mesh, CocosMeshFormat format, bool mirrorZ)
        {
            if (mesh == null) return null;

            string existing;
            if (_meshes.TryGetValue(mesh, out existing)) return existing;

            if (format == CocosMeshFormat.Obj) return RegisterMeshObj(mesh, mirrorZ);

            Directory.CreateDirectory(_meshDir);
            string baseName = CocosMaterialAnalyzer.SanitizeName(mesh.name);
            string srcPath = AssetDatabase.GetAssetPath(mesh);

            // 1. The mesh already lives in an .fbx - copy it verbatim.
            if (!string.IsNullOrEmpty(srcPath) && File.Exists(srcPath) &&
                Path.GetExtension(srcPath).ToLowerInvariant() == ".fbx")
            {
                string copyName = UniqueName(
                    CocosMaterialAnalyzer.SanitizeName(Path.GetFileNameWithoutExtension(srcPath)), ".fbx");
                try
                {
                    File.Copy(srcPath, Path.Combine(_meshDir, copyName), true);
                    _meshes[mesh] = copyName;

                    // The source file keeps whatever axis system it was authored in,
                    // so Cocos - not this exporter - decides the final orientation.
                    _warnings.Add("Mesh '" + mesh.name + "' was copied straight from " + Path.GetFileName(srcPath) +
                                  ". Its axis conversion is left to Cocos, so check the facing if the mesh is not symmetrical.");
                    return copyName;
                }
                catch (System.Exception e)
                {
                    _warnings.Add("Could not copy " + srcPath + ": " + e.Message + " — regenerating the mesh instead.");
                }
            }

            string fbxName = UniqueName(baseName, ".fbx");

            // 2. Unity's own FBX Exporter, when the package is present.
            if (TryExportWithFbxPackage(mesh, Path.Combine(_meshDir, fbxName)))
            {
                _meshes[mesh] = fbxName;
                return fbxName;
            }

            // 3. Built-in ASCII FBX writer.
            try
            {
                CocosFbxWriter.Write(mesh, Path.Combine(_meshDir, fbxName), mirrorZ);
                _meshes[mesh] = fbxName;
                return fbxName;
            }
            catch (System.Exception e)
            {
                _warnings.Add("Could not write FBX for '" + mesh.name + "': " + e.Message + " — falling back to .obj.");
                return RegisterMeshObj(mesh, mirrorZ);
            }
        }

        /// <summary>
        /// Uses com.unity.formats.fbx if it is installed. Reflection keeps the tool
        /// compiling in projects that do not have the package.
        /// </summary>
        bool TryExportWithFbxPackage(Mesh mesh, string destPath)
        {
            var exporterType = System.Type.GetType("UnityEditor.Formats.Fbx.Exporter.ModelExporter, Unity.Formats.Fbx.Editor");
            if (exporterType == null) return false;

            var method = exporterType.GetMethod("ExportObject",
                System.Reflection.BindingFlags.Public | System.Reflection.BindingFlags.Static,
                null, new[] { typeof(string), typeof(Object) }, null);
            if (method == null) return false;

            // ExportObject wants a scene object, so wrap the mesh in a throwaway one.
            GameObject temp = null;
            try
            {
                temp = new GameObject(mesh.name);
                temp.hideFlags = HideFlags.HideAndDontSave;
                temp.AddComponent<MeshFilter>().sharedMesh = mesh;
                temp.AddComponent<MeshRenderer>();

                object result = method.Invoke(null, new object[] { destPath, temp });
                return result != null && File.Exists(destPath);
            }
            catch (System.Exception e)
            {
                Debug.LogWarning("[CocosParticleExport] Unity FBX Exporter failed for " + mesh.name + ": " + e.Message);
                return false;
            }
            finally
            {
                if (temp != null) Object.DestroyImmediate(temp);
            }
        }

        /// <summary>Wavefront .obj fallback - positions, normals and one UV set.</summary>
        string RegisterMeshObj(Mesh mesh, bool mirrorZ)
        {
            string existing;
            if (_meshes.TryGetValue(mesh, out existing)) return existing;

            Directory.CreateDirectory(_meshDir);
            string fileName = UniqueName(CocosMaterialAnalyzer.SanitizeName(mesh.name), ".obj");
            float z = mirrorZ ? -1f : 1f;

            try
            {
                Vector3[] verts = mesh.vertices;
                Vector3[] normals = mesh.normals;
                Vector2[] uvs = mesh.uv;

                var sb = new System.Text.StringBuilder(verts.Length * 48);
                sb.Append("# Exported from Unity for Cocos Creator\no ").Append(mesh.name).Append('\n');

                // Unity is left-handed, Cocos right-handed: mirror Z and flip winding.
                foreach (var v in verts)
                    sb.AppendFormat(System.Globalization.CultureInfo.InvariantCulture, "v {0} {1} {2}\n", v.x, v.y, v.z * z);
                foreach (var uv in uvs)
                    sb.AppendFormat(System.Globalization.CultureInfo.InvariantCulture, "vt {0} {1}\n", uv.x, uv.y);
                foreach (var n in normals)
                    sb.AppendFormat(System.Globalization.CultureInfo.InvariantCulture, "vn {0} {1} {2}\n", n.x, n.y, n.z * z);

                bool hasUv = uvs.Length == verts.Length;
                bool hasN = normals.Length == verts.Length;

                for (int sub = 0; sub < mesh.subMeshCount; sub++)
                {
                    int[] tris = mesh.GetTriangles(sub);
                    for (int i = 0; i < tris.Length; i += 3)
                    {
                        // Reversed winding (a, c, b) keeps faces front-facing after the Z mirror.
                        sb.Append("f ")
                          .Append(Face(tris[i] + 1, hasUv, hasN)).Append(' ')
                          .Append(Face(tris[i + 2] + 1, hasUv, hasN)).Append(' ')
                          .Append(Face(tris[i + 1] + 1, hasUv, hasN)).Append('\n');
                    }
                }

                File.WriteAllText(Path.Combine(_meshDir, fileName), sb.ToString());
                _meshes[mesh] = fileName;
                return fileName;
            }
            catch (System.Exception e)
            {
                _warnings.Add("Could not export mesh '" + mesh.name + "': " + e.Message);
                _meshes[mesh] = null;
                return null;
            }
        }

        static string Face(int idx, bool hasUv, bool hasN)
        {
            if (hasUv && hasN) return idx + "/" + idx + "/" + idx;
            if (hasUv) return idx + "/" + idx;
            if (hasN) return idx + "//" + idx;
            return idx.ToString();
        }

        // ------------------------------------------------------------------ names

        string UniqueName(string baseName, string ext)
        {
            string candidate = baseName + ext;
            int i = 1;
            while (_usedNames.Contains(candidate.ToLowerInvariant()))
                candidate = baseName + "_" + (i++) + ext;
            _usedNames.Add(candidate.ToLowerInvariant());
            return candidate;
        }
    }
}
