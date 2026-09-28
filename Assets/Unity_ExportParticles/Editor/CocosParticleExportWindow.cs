// -----------------------------------------------------------------------------
//  CocosParticleExportWindow.cs
//  Tools > Cocos Particle > Export Window
//
//  Each exported effect produces a self-contained folder:
//     <Output>/<EffectName>/
//         <EffectName>.uparticle.json     all module data + material descriptions
//         <EffectName>_Textures/          every texture the effect references
//         <EffectName>_Meshes/            .obj files, only for mesh particles
//  Drop that folder anywhere under the Cocos project's assets/ and run
//  "Unity Particle > Import" from the Cocos editor.
// -----------------------------------------------------------------------------
using System.Collections.Generic;
using System.IO;
using UnityEditor;
using UnityEngine;

namespace CocosParticleExport
{
    public sealed class CocosParticleExportWindow : EditorWindow
    {
        const string PrefOutput = "CocosParticleExport.OutputDir";

        readonly List<GameObject> _targets = new List<GameObject>();
        string _outputDir = "";
        Vector2 _scroll;
        Vector2 _logScroll;
        readonly List<string> _log = new List<string>();

        readonly CocosExportSettings _settings = new CocosExportSettings();
        bool _showAdvanced;

        [MenuItem("Tools/Cocos Particle/Export Window", false, 0)]
        public static void Open()
        {
            var w = GetWindow<CocosParticleExportWindow>(false, "Cocos Particle Export");
            w.minSize = new Vector2(430f, 480f);
            w.Show();
        }

        [MenuItem("Tools/Cocos Particle/Export Selected", false, 1)]
        public static void ExportSelectionCommand()
        {
            var w = GetWindow<CocosParticleExportWindow>(false, "Cocos Particle Export");
            w.Show();
            w.PullSelection();
        }

        [MenuItem("Tools/Cocos Particle/Export Selected", true)]
        static bool ExportSelectionValidate()
        {
            foreach (var go in Selection.gameObjects)
                if (go.GetComponentInChildren<ParticleSystem>(true) != null) return true;
            return false;
        }

        void OnEnable()
        {
            _outputDir = EditorPrefs.GetString(PrefOutput, "");
            if (string.IsNullOrEmpty(_outputDir))
                _outputDir = Path.Combine(Directory.GetParent(Application.dataPath).FullName, "CocosParticleExport");
            PullSelection();
        }

        void PullSelection()
        {
            _targets.Clear();
            foreach (var go in Selection.gameObjects)
                if (go.GetComponentInChildren<ParticleSystem>(true) != null) _targets.Add(go);
            Repaint();
        }

        /// <summary>Gathers every ToolExportEffect in the open scenes.</summary>
        void CollectTagged()
        {
            _targets.Clear();
            foreach (var tag in Object.FindObjectsByType<ToolExportEffect>(FindObjectsInactive.Include, FindObjectsSortMode.None))
            {
                if (tag.skip) continue;
                if (tag.GetComponentInChildren<ParticleSystem>(true) == null) continue;
                if (!_targets.Contains(tag.gameObject)) _targets.Add(tag.gameObject);
            }
            if (_targets.Count == 0)
                _log.Add("No ToolExportEffect components found in the open scenes.");
            Repaint();
        }

        void OnSelectionChange()
        {
            if (_targets.Count == 0) PullSelection();
        }

        void OnGUI()
        {
            EditorGUILayout.Space(4f);
            EditorGUILayout.LabelField("Unity → Cocos Creator 3.x particle export", EditorStyles.boldLabel);
            EditorGUILayout.HelpBox(
                "Pick one or more roots that contain ParticleSystem components. Each root is written " +
                "as its own folder with a JSON data file plus a textures folder.", MessageType.None);

            // ---- targets -------------------------------------------------------
            EditorGUILayout.Space(6f);
            using (new EditorGUILayout.HorizontalScope())
            {
                EditorGUILayout.LabelField("Effects (" + _targets.Count + ")", EditorStyles.boldLabel);
                if (GUILayout.Button("Use Selection", GUILayout.Width(100f))) PullSelection();
                if (GUILayout.Button("Collect Tagged", GUILayout.Width(105f))) CollectTagged();
                if (GUILayout.Button("Clear", GUILayout.Width(50f))) _targets.Clear();
            }

            _scroll = EditorGUILayout.BeginScrollView(_scroll, GUILayout.Height(120f));
            for (int i = 0; i < _targets.Count; i++)
            {
                using (new EditorGUILayout.HorizontalScope())
                {
                    _targets[i] = (GameObject)EditorGUILayout.ObjectField(_targets[i], typeof(GameObject), true);
                    if (GUILayout.Button("−", GUILayout.Width(24f))) { _targets.RemoveAt(i); i--; }
                }
            }
            var dropped = (GameObject)EditorGUILayout.ObjectField("Add", null, typeof(GameObject), true);
            if (dropped != null && !_targets.Contains(dropped)) _targets.Add(dropped);
            EditorGUILayout.EndScrollView();

            // ---- output --------------------------------------------------------
            EditorGUILayout.Space(6f);
            using (new EditorGUILayout.HorizontalScope())
            {
                _outputDir = EditorGUILayout.TextField("Output folder", _outputDir);
                if (GUILayout.Button("…", GUILayout.Width(28f)))
                {
                    string picked = EditorUtility.SaveFolderPanel("Export destination", _outputDir, "");
                    if (!string.IsNullOrEmpty(picked)) _outputDir = picked;
                }
            }

            // ---- settings ------------------------------------------------------
            EditorGUILayout.Space(6f);
            _settings.unitScale = EditorGUILayout.FloatField(
                new GUIContent("Unit scale", "Multiplies every distance and speed. Leave at 1 for a 3D Cocos scene; " +
                                             "raise it if your Cocos scene works in pixel-ish units."), _settings.unitScale);
            _settings.convertHandedness = EditorGUILayout.Toggle(
                new GUIContent("Convert handedness", "Unity is left-handed, Cocos right-handed. Mirrors Z on positions, " +
                                                     "directions and rotations. Keep this on."), _settings.convertHandedness);

            _showAdvanced = EditorGUILayout.Foldout(_showAdvanced, "Fidelity options", true);
            if (_showAdvanced)
            {
                EditorGUI.indentLevel++;
                _settings.bakeSpeedModules = EditorGUILayout.Toggle(
                    new GUIContent("Bake *-by-Speed modules", "Cocos has no Size/Color/Rotation by Speed. When on, the " +
                                   "exporter estimates the speed profile over a particle's life and folds those modules " +
                                   "into the matching over-lifetime curves."), _settings.bakeSpeedModules);
                _settings.exportSubEmitters = EditorGUILayout.Toggle(
                    new GUIContent("Export sub-emitters", "Cocos has no sub-emitter module. When on, each sub-emitter " +
                                   "becomes a child particle node; Death types get a matching start delay."), _settings.exportSubEmitters);
                _settings.foldMaterialTintIntoColor = EditorGUILayout.Toggle(
                    new GUIContent("Fold material tint into color", "Multiplies the shader's _TintColor/_BaseColor into " +
                                   "the start color so brightness matches."), _settings.foldMaterialTintIntoColor);
                _settings.meshFormat = (CocosMeshFormat)EditorGUILayout.EnumPopup(
                    new GUIContent("Mesh format", "Format for RenderMode.Mesh particles. FBX copies the mesh's " +
                                   "own .fbx source when it has one, otherwise it writes a new FBX."), _settings.meshFormat);
                _settings.includeInactive = EditorGUILayout.Toggle("Include inactive children", _settings.includeInactive);
                _settings.speedBakeSamples = EditorGUILayout.IntSlider("Bake resolution", _settings.speedBakeSamples, 4, 32);
                EditorGUI.indentLevel--;
            }

            // ---- action --------------------------------------------------------
            EditorGUILayout.Space(10f);
            using (new EditorGUI.DisabledScope(_targets.Count == 0 || string.IsNullOrEmpty(_outputDir)))
            {
                if (GUILayout.Button("Export " + _targets.Count + " effect(s)", GUILayout.Height(32f)))
                    RunExport();
            }

            if (_log.Count > 0)
            {
                EditorGUILayout.Space(8f);
                using (new EditorGUILayout.HorizontalScope())
                {
                    EditorGUILayout.LabelField("Report", EditorStyles.boldLabel);
                    if (GUILayout.Button("Open folder", GUILayout.Width(90f)))
                        EditorUtility.RevealInFinder(_outputDir);
                    if (GUILayout.Button("Clear", GUILayout.Width(60f))) _log.Clear();
                }
                _logScroll = EditorGUILayout.BeginScrollView(_logScroll, GUILayout.ExpandHeight(true));
                foreach (var line in _log)
                    EditorGUILayout.LabelField(line, EditorStyles.wordWrappedMiniLabel);
                EditorGUILayout.EndScrollView();
            }
        }

        void RunExport()
        {
            _log.Clear();
            EditorPrefs.SetString(PrefOutput, _outputDir);

            int ok = 0;
            try
            {
                for (int i = 0; i < _targets.Count; i++)
                {
                    GameObject go = _targets[i];
                    if (go == null) continue;

                    EditorUtility.DisplayProgressBar("Cocos Particle Export", go.name,
                        (float)i / Mathf.Max(1, _targets.Count));

                    try
                    {
                        string report = CocosParticleExporter.Export(go, _outputDir, _settings);
                        _log.Add(report);
                        ok++;
                    }
                    catch (System.Exception e)
                    {
                        _log.Add("✗ " + go.name + " — " + e.Message);
                        Debug.LogException(e);
                    }
                }
            }
            finally
            {
                EditorUtility.ClearProgressBar();
            }

            _log.Insert(0, "Exported " + ok + "/" + _targets.Count + " effect(s) to " + _outputDir);
            Debug.Log("[CocosParticleExport] " + _log[0]);
        }
    }
}
