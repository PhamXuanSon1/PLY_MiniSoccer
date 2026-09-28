// -----------------------------------------------------------------------------
//  CocosFbxWriter.cs
//  Writes a UnityEngine.Mesh as an ASCII FBX 7.4 file.
//
//  Used only when the mesh has no .fbx source file to copy and Unity's FBX
//  Exporter package is not installed, so it stays deliberately small: one
//  Geometry + one Model, positions / normals / UVs / vertex colours. That is
//  everything a particle mesh can carry - Cocos' mesh particles have no skinning,
//  no blend shapes and no animation.
//
//  Units and axes
//    Vertices are written in metres with UnitScaleFactor = 100 (i.e. "1 unit is
//    1 metre"), the convention Unity and Cocos both use.
//    The axis system is declared right-handed Y-up / +Z front, which is what
//    Cocos' importer expects, and the vertex data is mirrored on Z (plus reversed
//    winding) on the way out so it arrives correctly oriented.
// -----------------------------------------------------------------------------
using System.Globalization;
using System.IO;
using System.Text;
using UnityEngine;

namespace CocosParticleExport
{
    public static class CocosFbxWriter
    {
        const long GeometryId = 1000000L;
        const long ModelId = 2000000L;

        /// <summary>FBX scene units are centimetres; our vertices are metres.</summary>
        const int UnitScaleFactor = 100;

        public static void Write(Mesh mesh, string destPath, bool mirrorZ)
        {
            Vector3[] verts = mesh.vertices;
            Vector3[] normals = mesh.normals;
            Vector2[] uvs = mesh.uv;
            Color[] colors = mesh.colors;

            bool hasNormals = normals != null && normals.Length == verts.Length;
            bool hasUvs = uvs != null && uvs.Length == verts.Length;
            bool hasColors = colors != null && colors.Length == verts.Length;

            float z = mirrorZ ? -1f : 1f;
            string name = SafeName(mesh.name);

            var sb = new StringBuilder(verts.Length * 96);

            WriteHeader(sb);
            WriteGlobalSettings(sb);
            WriteDefinitions(sb);

            sb.Append("Objects:  {\n");
            sb.AppendFormat("\tGeometry: {0}, \"Geometry::{1}\", \"Mesh\" {{\n", GeometryId, name);

            // --- positions -------------------------------------------------------
            var pos = new float[verts.Length * 3];
            for (int i = 0; i < verts.Length; i++)
            {
                pos[i * 3 + 0] = verts[i].x;
                pos[i * 3 + 1] = verts[i].y;
                pos[i * 3 + 2] = verts[i].z * z;
            }
            WriteArray(sb, 2, "Vertices", pos);

            // --- polygons --------------------------------------------------------
            // Mirroring Z flips the handedness, so triangles are emitted as (a, c, b)
            // to keep their faces pointing outwards. FBX marks the last index of a
            // polygon by storing its bitwise complement.
            var corners = new System.Collections.Generic.List<int>(mesh.triangles.Length);
            for (int sub = 0; sub < mesh.subMeshCount; sub++)
            {
                int[] tris = mesh.GetTriangles(sub);
                for (int i = 0; i + 2 < tris.Length; i += 3)
                {
                    corners.Add(tris[i]);
                    corners.Add(mirrorZ ? tris[i + 2] : tris[i + 1]);
                    corners.Add(mirrorZ ? tris[i + 1] : tris[i + 2]);
                }
            }

            var polyIdx = new int[corners.Count];
            for (int i = 0; i < corners.Count; i++)
            {
                // Every third corner closes a triangle.
                polyIdx[i] = (i % 3 == 2) ? ~corners[i] : corners[i];
            }
            WriteArray(sb, 2, "PolygonVertexIndex", polyIdx);
            sb.Append("\t\tGeometryVersion: 124\n");

            // --- layers ----------------------------------------------------------
            if (hasNormals)
            {
                var n = new float[corners.Count * 3];
                for (int i = 0; i < corners.Count; i++)
                {
                    Vector3 v = normals[corners[i]];
                    n[i * 3 + 0] = v.x;
                    n[i * 3 + 1] = v.y;
                    n[i * 3 + 2] = v.z * z;
                }
                sb.Append("\t\tLayerElementNormal: 0 {\n");
                sb.Append("\t\t\tVersion: 102\n\t\t\tName: \"\"\n");
                sb.Append("\t\t\tMappingInformationType: \"ByPolygonVertex\"\n");
                sb.Append("\t\t\tReferenceInformationType: \"Direct\"\n");
                WriteArray(sb, 3, "Normals", n);
                sb.Append("\t\t}\n");
            }

            if (hasUvs)
            {
                var uv = new float[corners.Count * 2];
                for (int i = 0; i < corners.Count; i++)
                {
                    Vector2 v = uvs[corners[i]];
                    uv[i * 2 + 0] = v.x;
                    uv[i * 2 + 1] = v.y;
                }
                sb.Append("\t\tLayerElementUV: 0 {\n");
                sb.Append("\t\t\tVersion: 101\n\t\t\tName: \"UVMap\"\n");
                sb.Append("\t\t\tMappingInformationType: \"ByPolygonVertex\"\n");
                sb.Append("\t\t\tReferenceInformationType: \"Direct\"\n");
                WriteArray(sb, 3, "UV", uv);
                sb.Append("\t\t}\n");
            }

            if (hasColors)
            {
                var c = new float[corners.Count * 4];
                for (int i = 0; i < corners.Count; i++)
                {
                    Color v = colors[corners[i]];
                    c[i * 4 + 0] = v.r;
                    c[i * 4 + 1] = v.g;
                    c[i * 4 + 2] = v.b;
                    c[i * 4 + 3] = v.a;
                }
                sb.Append("\t\tLayerElementColor: 0 {\n");
                sb.Append("\t\t\tVersion: 101\n\t\t\tName: \"Col\"\n");
                sb.Append("\t\t\tMappingInformationType: \"ByPolygonVertex\"\n");
                sb.Append("\t\t\tReferenceInformationType: \"Direct\"\n");
                WriteArray(sb, 3, "Colors", c);
                sb.Append("\t\t}\n");
            }

            sb.Append("\t\tLayer: 0 {\n\t\t\tVersion: 100\n");
            if (hasNormals) WriteLayerElement(sb, "LayerElementNormal");
            if (hasUvs) WriteLayerElement(sb, "LayerElementUV");
            if (hasColors) WriteLayerElement(sb, "LayerElementColor");
            sb.Append("\t\t}\n");
            sb.Append("\t}\n");

            // --- model node ------------------------------------------------------
            sb.AppendFormat("\tModel: {0}, \"Model::{1}\", \"Mesh\" {{\n", ModelId, name);
            sb.Append("\t\tVersion: 232\n");
            sb.Append("\t\tProperties70:  {\n");
            sb.Append("\t\t\tP: \"DefaultAttributeIndex\", \"int\", \"Integer\", \"\",0\n");
            sb.Append("\t\t}\n");
            sb.Append("\t\tShading: T\n");
            sb.Append("\t\tCulling: \"CullingOff\"\n");
            sb.Append("\t}\n");
            sb.Append("}\n\n");

            // --- connections -----------------------------------------------------
            sb.Append("Connections:  {\n");
            sb.AppendFormat("\tC: \"OO\",{0},{1}\n", GeometryId, ModelId);
            sb.AppendFormat("\tC: \"OO\",{0},0\n", ModelId);
            sb.Append("}\n");

            File.WriteAllText(destPath, sb.ToString(), new UTF8Encoding(false));
        }

        // ------------------------------------------------------------------ parts

        static void WriteHeader(StringBuilder sb)
        {
            sb.Append("; FBX 7.4.0 project file\n");
            sb.Append("; Generated by the Unity -> Cocos Creator particle exporter\n");
            sb.Append("; ----------------------------------------------------\n\n");
            sb.Append("FBXHeaderExtension:  {\n");
            sb.Append("\tFBXHeaderVersion: 1003\n");
            sb.Append("\tFBXVersion: 7400\n");
            sb.Append("\tCreator: \"Unity CocosParticleExport\"\n");
            sb.Append("}\n");
            sb.Append("Creator: \"Unity CocosParticleExport\"\n\n");
        }

        static void WriteGlobalSettings(StringBuilder sb)
        {
            sb.Append("GlobalSettings:  {\n");
            sb.Append("\tVersion: 1000\n");
            sb.Append("\tProperties70:  {\n");
            // Right-handed, Y up, +Z front, +X right - the orientation Cocos expects.
            sb.Append("\t\tP: \"UpAxis\", \"int\", \"Integer\", \"\",1\n");
            sb.Append("\t\tP: \"UpAxisSign\", \"int\", \"Integer\", \"\",1\n");
            sb.Append("\t\tP: \"FrontAxis\", \"int\", \"Integer\", \"\",2\n");
            sb.Append("\t\tP: \"FrontAxisSign\", \"int\", \"Integer\", \"\",1\n");
            sb.Append("\t\tP: \"CoordAxis\", \"int\", \"Integer\", \"\",0\n");
            sb.Append("\t\tP: \"CoordAxisSign\", \"int\", \"Integer\", \"\",1\n");
            sb.Append("\t\tP: \"OriginalUpAxis\", \"int\", \"Integer\", \"\",1\n");
            sb.Append("\t\tP: \"OriginalUpAxisSign\", \"int\", \"Integer\", \"\",1\n");
            sb.AppendFormat("\t\tP: \"UnitScaleFactor\", \"double\", \"Number\", \"\",{0}\n", UnitScaleFactor);
            sb.AppendFormat("\t\tP: \"OriginalUnitScaleFactor\", \"double\", \"Number\", \"\",{0}\n", UnitScaleFactor);
            sb.Append("\t}\n");
            sb.Append("}\n\n");
        }

        static void WriteDefinitions(StringBuilder sb)
        {
            sb.Append("Definitions:  {\n");
            sb.Append("\tVersion: 100\n");
            sb.Append("\tCount: 3\n");
            sb.Append("\tObjectType: \"GlobalSettings\" {\n\t\tCount: 1\n\t}\n");
            sb.Append("\tObjectType: \"Geometry\" {\n\t\tCount: 1\n\t}\n");
            sb.Append("\tObjectType: \"Model\" {\n\t\tCount: 1\n\t}\n");
            sb.Append("}\n\n");
        }

        static void WriteLayerElement(StringBuilder sb, string type)
        {
            sb.Append("\t\t\tLayerElement:  {\n");
            sb.AppendFormat("\t\t\t\tType: \"{0}\"\n", type);
            sb.Append("\t\t\t\tTypedIndex: 0\n");
            sb.Append("\t\t\t}\n");
        }

        // ----------------------------------------------------------------- arrays

        static void WriteArray(StringBuilder sb, int depth, string name, float[] values)
        {
            Indent(sb, depth);
            sb.AppendFormat("{0}: *{1} {{\n", name, values.Length);
            Indent(sb, depth + 1);
            sb.Append("a: ");
            for (int i = 0; i < values.Length; i++)
            {
                if (i > 0) sb.Append(',');
                // Long arrays on one line are valid but unreadable; wrap them.
                if (i > 0 && i % 3000 == 0) { sb.Append('\n'); Indent(sb, depth + 1); }
                sb.Append(Num(values[i]));
            }
            sb.Append('\n');
            Indent(sb, depth);
            sb.Append("}\n");
        }

        static void WriteArray(StringBuilder sb, int depth, string name, int[] values)
        {
            Indent(sb, depth);
            sb.AppendFormat("{0}: *{1} {{\n", name, values.Length);
            Indent(sb, depth + 1);
            sb.Append("a: ");
            for (int i = 0; i < values.Length; i++)
            {
                if (i > 0) sb.Append(',');
                if (i > 0 && i % 3000 == 0) { sb.Append('\n'); Indent(sb, depth + 1); }
                sb.Append(values[i].ToString(CultureInfo.InvariantCulture));
            }
            sb.Append('\n');
            Indent(sb, depth);
            sb.Append("}\n");
        }

        static void Indent(StringBuilder sb, int depth)
        {
            for (int i = 0; i < depth; i++) sb.Append('\t');
        }

        static string Num(float f)
        {
            if (float.IsNaN(f) || float.IsInfinity(f)) return "0";
            return System.Math.Round(f, 6).ToString("0.######", CultureInfo.InvariantCulture);
        }

        static string SafeName(string s)
        {
            return string.IsNullOrEmpty(s) ? "mesh" : s.Replace("\"", "_").Replace(":", "_");
        }
    }
}
