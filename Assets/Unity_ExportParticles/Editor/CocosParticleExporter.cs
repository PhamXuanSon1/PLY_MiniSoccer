// -----------------------------------------------------------------------------
//  CocosParticleExporter.cs
//  Ties the pieces together: build the JSON document, write the side-car assets,
//  drop a human-readable report next to them.
//
//  Also exposes a batch entry point so effects can be exported from CI or from a
//  one-liner in the console.
// -----------------------------------------------------------------------------
using System.Collections.Generic;
using System.IO;
using System.Text;
using UnityEditor;
using UnityEngine;

namespace CocosParticleExport
{
    public static class CocosParticleExporter
    {
        /// <summary>
        /// Exports one effect root. Returns a one-line summary for the tool window.
        /// </summary>
        public static string Export(GameObject root, string outputRoot, CocosExportSettings settings)
        {
            if (root == null) throw new System.ArgumentNullException("root");
            if (string.IsNullOrEmpty(outputRoot)) throw new System.ArgumentException("Output folder is empty.");

            // A ToolExportEffect marker, when present, overrides name and scale.
            var tag = root.GetComponent<ToolExportEffect>();
            if (tag != null && tag.skip)
                return "· " + root.name + " — skipped (ToolExportEffect.skip)";

            if (tag != null && tag.unitScale > 0f && !Mathf.Approximately(tag.unitScale, 1f))
            {
                settings = Clone(settings);
                settings.unitScale = tag.unitScale;
            }

            string effectName = CocosMaterialAnalyzer.SanitizeName(tag != null ? tag.ResolvedName : root.name);
            string dir = Path.Combine(outputRoot, effectName);
            Directory.CreateDirectory(dir);

            var warnings = new List<string>();
            var compensations = new List<string>();

            var assets = new CocosAssetExporter(dir, effectName, warnings);
            var converter = new CocosParticleConverter(settings, assets, warnings, compensations);

            JObj doc = converter.Convert(root);

            string jsonPath = Path.Combine(dir, effectName + ".uparticle.json");
            File.WriteAllText(jsonPath, CocosJson.Write(doc), new UTF8Encoding(false));

            WriteReport(dir, effectName, root, warnings, compensations, assets,
                        tag != null ? tag.notes : null);

            int texCount = 0;
            foreach (var t in assets.ExportedTextures) if (t != null) texCount++;

            string status = warnings.Count == 0 ? "✓" : "▲";
            return status + " " + root.name + " → " + effectName + "/  (" + texCount + " texture(s), " +
                   compensations.Count + " compensated, " + warnings.Count + " warning(s))";
        }

        static CocosExportSettings Clone(CocosExportSettings s)
        {
            return new CocosExportSettings
            {
                unitScale = s.unitScale,
                convertHandedness = s.convertHandedness,
                bakeSpeedModules = s.bakeSpeedModules,
                exportSubEmitters = s.exportSubEmitters,
                foldMaterialTintIntoColor = s.foldMaterialTintIntoColor,
                includeInactive = s.includeInactive,
                speedBakeSamples = s.speedBakeSamples,
                meshFormat = s.meshFormat,
            };
        }

        static void WriteReport(string dir, string effectName, GameObject root,
                                List<string> warnings, List<string> compensations,
                                CocosAssetExporter assets, string notes)
        {
            var sb = new StringBuilder();
            sb.AppendLine("# " + effectName);
            sb.AppendLine();
            if (!string.IsNullOrEmpty(notes))
            {
                sb.AppendLine("> " + notes.Replace("\n", "\n> "));
                sb.AppendLine();
            }
            sb.AppendLine("Exported from Unity " + Application.unityVersion + " on " +
                          System.DateTime.Now.ToString("yyyy-MM-dd HH:mm"));
            sb.AppendLine("Source GameObject: " + root.name);
            sb.AppendLine();
            sb.AppendLine("## Files");
            sb.AppendLine("- `" + effectName + ".uparticle.json` — all particle module data");
            sb.AppendLine("- `" + assets.TextureFolderName + "/` — textures referenced by the effect");
            if (assets.HasMeshes) sb.AppendLine("- `" + assets.MeshFolderName + "/` — meshes for mesh-rendered particles");
            sb.AppendLine();

            sb.AppendLine("## How to import");
            sb.AppendLine("1. Copy this whole folder into your Cocos project (anywhere under `assets/`).");
            sb.AppendLine("2. In the Cocos editor: **Unity Particle → Import…**, pick the `.uparticle.json`.");
            sb.AppendLine("3. The importer builds the nodes, materials and texture references for you.");
            sb.AppendLine();

            if (compensations.Count > 0)
            {
                sb.AppendLine("## Compensated (Unity-only features approximated in Cocos)");
                foreach (var c in compensations) sb.AppendLine("- " + c);
                sb.AppendLine();
            }

            if (warnings.Count > 0)
            {
                sb.AppendLine("## Warnings (differences you may need to art-direct around)");
                foreach (var w in warnings) sb.AppendLine("- " + w);
                sb.AppendLine();
            }
            else
            {
                sb.AppendLine("No warnings — every module used has a direct Cocos equivalent.");
                sb.AppendLine();
            }

            File.WriteAllText(Path.Combine(dir, "README.md"), sb.ToString(), new UTF8Encoding(false));
        }

        // ---------------------------------------------------------------- batch

        /// <summary>
        /// Exports every prefab under <paramref name="assetFolder"/> that contains a
        /// ParticleSystem. Handy for a whole effects library in one go.
        /// </summary>
        public static void ExportPrefabFolder(string assetFolder, string outputRoot, CocosExportSettings settings)
        {
            string[] guids = AssetDatabase.FindAssets("t:Prefab", new[] { assetFolder });
            int ok = 0, fail = 0;

            try
            {
                for (int i = 0; i < guids.Length; i++)
                {
                    string path = AssetDatabase.GUIDToAssetPath(guids[i]);
                    var prefab = AssetDatabase.LoadAssetAtPath<GameObject>(path);
                    if (prefab == null || prefab.GetComponentInChildren<ParticleSystem>(true) == null) continue;

                    EditorUtility.DisplayProgressBar("Cocos Particle Export", path, (float)i / guids.Length);

                    // Instantiating gives the converter a live hierarchy to walk, which
                    // matters for prefab variants and nested prefabs.
                    GameObject instance = (GameObject)PrefabUtility.InstantiatePrefab(prefab);
                    try
                    {
                        Debug.Log("[CocosParticleExport] " + Export(instance, outputRoot, settings));
                        ok++;
                    }
                    catch (System.Exception e)
                    {
                        Debug.LogError("[CocosParticleExport] " + path + " failed: " + e.Message);
                        fail++;
                    }
                    finally
                    {
                        Object.DestroyImmediate(instance);
                    }
                }
            }
            finally
            {
                EditorUtility.ClearProgressBar();
            }

            Debug.Log("[CocosParticleExport] Batch finished: " + ok + " exported, " + fail + " failed → " + outputRoot);
        }

        [MenuItem("Tools/Cocos Particle/Export Prefab Folder…", false, 2)]
        static void ExportPrefabFolderCommand()
        {
            string folder = "Assets";
            var sel = Selection.activeObject;
            if (sel != null)
            {
                string p = AssetDatabase.GetAssetPath(sel);
                if (!string.IsNullOrEmpty(p) && AssetDatabase.IsValidFolder(p)) folder = p;
            }

            string outputRoot = EditorUtility.SaveFolderPanel("Export destination",
                EditorPrefs.GetString("CocosParticleExport.OutputDir", ""), "");
            if (string.IsNullOrEmpty(outputRoot)) return;

            EditorPrefs.SetString("CocosParticleExport.OutputDir", outputRoot);
            ExportPrefabFolder(folder, outputRoot, new CocosExportSettings());
            EditorUtility.RevealInFinder(outputRoot);
        }
    }
}
