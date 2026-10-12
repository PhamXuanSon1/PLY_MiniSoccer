#if UNITY_EDITOR
using System;
using System.Collections.Generic;
using System.Linq;
using UnityEditor;
using UnityEditor.SceneManagement;
using UnityEngine;

/// <summary>
/// Tool setup nhanh nhân vật + món đồ: Tools ▸ Playable ▸ Quick Setup.
/// 1) Khai báo danh sách Item (ID, object, sprite)  2) Khai báo từng nhân vật (root, đáp án, sprite theo từng item)
/// 3) Bấm Apply ➔ tự tạo node con, collider, component, gán vào ItemSequenceManager.
/// </summary>
public class QuickSetupWindow : EditorWindow
{
    [Serializable]
    private class ItemEntry
    {
        public string id = "";
        public GameObject obj;
        public Sprite sprite;
    }

    [Serializable]
    private class CharacterEntry
    {
        public GameObject root;
        public Sprite normalSprite;
        public string correctItemID = "";
        public FxType defaultSound = FxType.Siuu;
        public List<Sprite> sprites = new List<Sprite>();   // song song với danh sách item
        public List<FxType> fx = new List<FxType>();        // song song với danh sách item
        public bool foldout = true;
    }

    [SerializeField] private List<ItemEntry> items = new List<ItemEntry>();
    [SerializeField] private List<CharacterEntry> characters = new List<CharacterEntry>();
    [SerializeField] private bool setItemLayer = true;
    private Vector2 scroll;

    [MenuItem("Tools/Playable/Quick Setup")]
    private static void Open()
    {
        var w = GetWindow<QuickSetupWindow>("Quick Setup");
        w.minSize = new Vector2(420, 400);
    }

    private void OnEnable()
    {
        if (items.Count == 0 && characters.Count == 0) LoadFromScene();
    }

    // ───────────────────────────── GUI ─────────────────────────────
    private const float Thumb = 72f;

    private static GUIStyle headerStyle, centerLabel, cardTitle;

    private static void InitStyles()
    {
        if (headerStyle != null) return;
        headerStyle = new GUIStyle(EditorStyles.boldLabel) { fontSize = 13, padding = new RectOffset(4, 4, 6, 2) };
        centerLabel = new GUIStyle(EditorStyles.miniBoldLabel) { alignment = TextAnchor.MiddleCenter };
        cardTitle = new GUIStyle(EditorStyles.boldLabel) { fontSize = 12 };
    }

    private void OnGUI()
    {
        InitStyles();

        // Thanh công cụ cố định ở trên
        using (new EditorGUILayout.HorizontalScope(EditorStyles.toolbar))
        {
            if (GUILayout.Button("↻ Load từ Scene", EditorStyles.toolbarButton, GUILayout.Width(120))) LoadFromScene();
            GUILayout.FlexibleSpace();
            var old = GUI.backgroundColor;
            GUI.backgroundColor = new Color(0.45f, 0.9f, 0.5f);
            if (GUILayout.Button("✔ APPLY TẤT CẢ", EditorStyles.toolbarButton, GUILayout.Width(130))) ApplyAll();
            GUI.backgroundColor = old;
        }

        scroll = EditorGUILayout.BeginScrollView(scroll);
        DrawItems();
        DrawCharacters();
        EditorGUILayout.Space(10);
        EditorGUILayout.EndScrollView();
    }

    private void DrawItems()
    {
        EditorGUILayout.LabelField("1. ITEMS", headerStyle);
        EditorGUILayout.HelpBox("Thứ tự từ trên xuống = thứ tự món đồ xuất hiện trong game.", MessageType.None);

        using (new EditorGUILayout.VerticalScope(EditorStyles.helpBox))
        {
            // Hàng tiêu đề cột
            using (new EditorGUILayout.HorizontalScope())
            {
                GUILayout.Label("#", EditorStyles.miniBoldLabel, GUILayout.Width(18));
                GUILayout.Label("ID", EditorStyles.miniBoldLabel, GUILayout.Width(70));
                GUILayout.Label("Object trong Scene", EditorStyles.miniBoldLabel);
                GUILayout.Label("Ảnh", EditorStyles.miniBoldLabel, GUILayout.Width(Thumb));
                GUILayout.Space(24);
            }

            int remove = -1;
            for (int i = 0; i < items.Count; i++)
            {
                var it = items[i];
                using (new EditorGUILayout.HorizontalScope())
                {
                    GUILayout.Label((i + 1).ToString(), GUILayout.Width(18), GUILayout.Height(Thumb));
                    using (new EditorGUILayout.VerticalScope(GUILayout.Width(70)))
                    {
                        GUILayout.Space(Thumb / 2 - 9);
                        it.id = EditorGUILayout.TextField(it.id);
                    }
                    using (new EditorGUILayout.VerticalScope())
                    {
                        GUILayout.Space(Thumb / 2 - 9);
                        it.obj = (GameObject)EditorGUILayout.ObjectField(it.obj, typeof(GameObject), true);
                    }
                    it.sprite = (Sprite)EditorGUILayout.ObjectField(it.sprite, typeof(Sprite), false,
                        GUILayout.Width(Thumb), GUILayout.Height(Thumb));
                    using (new EditorGUILayout.VerticalScope(GUILayout.Width(24)))
                    {
                        GUILayout.Space(Thumb / 2 - 9);
                        if (GUILayout.Button("✕", GUILayout.Width(22))) remove = i;
                    }
                }
                if (i < items.Count - 1) GUILayout.Box(GUIContent.none, GUILayout.ExpandWidth(true), GUILayout.Height(1));
            }
            if (remove >= 0) RemoveItem(remove);

            if (GUILayout.Button("+ Thêm Item")) AddItem(new ItemEntry());
        }

        setItemLayer = EditorGUILayout.ToggleLeft("Đặt Layer 'Item' cho các món đồ", setItemLayer);
    }

    private void DrawCharacters()
    {
        EditorGUILayout.Space(8);
        EditorGUILayout.LabelField("2. CHARACTERS", headerStyle);

        int remove = -1;
        for (int c = 0; c < characters.Count; c++)
        {
            var ch = characters[c];
            SyncLists(ch);

            using (new EditorGUILayout.VerticalScope(EditorStyles.helpBox))
            {
                // Tiêu đề thẻ
                using (new EditorGUILayout.HorizontalScope())
                {
                    ch.foldout = EditorGUILayout.Foldout(ch.foldout, GUIContent.none, true);
                    GUILayout.Label(ch.root != null ? ch.root.name : "(chưa chọn node cha)", cardTitle);
                    GUILayout.FlexibleSpace();
                    GUILayout.Label(string.IsNullOrEmpty(ch.correctItemID) ? "chưa chọn đáp án" : "Đáp án: " + ch.correctItemID,
                        EditorStyles.miniLabel);
                    if (GUILayout.Button("✕", GUILayout.Width(22))) remove = c;
                }
                if (!ch.foldout) continue;

                EditorGUI.BeginChangeCheck();
                using (new EditorGUILayout.HorizontalScope())
                {
                    ch.root = (GameObject)EditorGUILayout.ObjectField("Node cha", ch.root, typeof(GameObject), true);
                    if (GUILayout.Button("Chọn", GUILayout.Width(50)) && ch.root != null) { Selection.activeGameObject = ch.root; EditorGUIUtility.PingObject(ch.root); }
                }
                ch.defaultSound = (FxType)EditorGUILayout.EnumPopup("Âm mặc định", ch.defaultSound);
                bool headerChanged = EditorGUI.EndChangeCheck();
                EditorGUILayout.Space(2);

                string sigBefore = Signature(ch);

                // Hàng các ô ảnh: Normal + từng item, mỗi cột có tên / ảnh / âm thanh / tick đáp án đúng
                using (new EditorGUILayout.HorizontalScope())
                {
                    // Cột Normal
                    using (new EditorGUILayout.VerticalScope(GUILayout.Width(Thumb + 6)))
                    {
                        if (GUILayout.Button("▶ Normal", EditorStyles.miniButton, GUILayout.Width(Thumb))) PreviewState(ch, "Normal");
                        ch.normalSprite = (Sprite)EditorGUILayout.ObjectField(ch.normalSprite, typeof(Sprite), false,
                            GUILayout.Width(Thumb), GUILayout.Height(Thumb));
                    }

                    // Cột từng item
                    for (int i = 0; i < items.Count; i++)
                    {
                        bool isCorrect = ch.correctItemID == items[i].id && !string.IsNullOrEmpty(items[i].id);
                        using (new EditorGUILayout.VerticalScope(GUILayout.Width(Thumb + 6)))
                        {
                            var old = GUI.color;
                            if (isCorrect) GUI.color = new Color(0.5f, 1f, 0.55f);
                            if (GUILayout.Button("▶ " + (string.IsNullOrEmpty(items[i].id) ? "?" : items[i].id), EditorStyles.miniButton, GUILayout.Width(Thumb)))
                                PreviewState(ch, items[i].id);
                            ch.sprites[i] = (Sprite)EditorGUILayout.ObjectField(ch.sprites[i], typeof(Sprite), false,
                                GUILayout.Width(Thumb), GUILayout.Height(Thumb));
                            GUI.color = old;

                            ch.fx[i] = (FxType)EditorGUILayout.EnumPopup(ch.fx[i], GUILayout.Width(Thumb));
                            bool tick = EditorGUILayout.ToggleLeft("Đúng", isCorrect, GUILayout.Width(Thumb));
                            if (tick && !isCorrect) ch.correctItemID = items[i].id;
                            else if (!tick && isCorrect) ch.correctItemID = "";
                        }
                    }
                    GUILayout.FlexibleSpace();
                }

                // Sửa đáp án / âm thanh / ảnh ➔ ghi thẳng vào nhân vật trong Scene
                if (headerChanged || Signature(ch) != sigBefore) ApplyLive(ch);
            }
        }
        if (remove >= 0) characters.RemoveAt(remove);

        using (new EditorGUILayout.HorizontalScope())
        {
            if (GUILayout.Button("+ Thêm Character")) { var ch = new CharacterEntry(); SyncLists(ch); characters.Add(ch); }
            if (GUILayout.Button("+ Từ object đang chọn"))
            {
                foreach (var go in Selection.gameObjects)
                {
                    var ch = new CharacterEntry { root = go };
                    SyncLists(ch);
                    characters.Add(ch);
                }
            }
        }
    }

    // ───────────────────────────── Live preview / live edit ─────────────────────────────
    private static string Signature(CharacterEntry ch)
    {
        string s = ch.correctItemID + "|" + ch.defaultSound + "|" + (ch.normalSprite != null ? ch.normalSprite.GetInstanceID() : 0);
        for (int i = 0; i < ch.sprites.Count; i++)
            s += "|" + (ch.sprites[i] != null ? ch.sprites[i].GetInstanceID() : 0) + ":" + ch.fx[i];
        return s;
    }

    /// <summary>Bật đúng node con của trạng thái đã chọn trên Scene (các node khác tắt).</summary>
    private void PreviewState(CharacterEntry ch, string stateName)
    {
        if (ch.root == null) return;
        var names = new List<string> { "Normal" };
        names.AddRange(items.Select(i => i.id));

        foreach (var n in names)
        {
            Transform t = string.IsNullOrEmpty(n) ? null : ch.root.transform.Find(n);
            if (t == null) continue;
            Undo.RecordObject(t.gameObject, "Preview State");
            t.gameObject.SetActive(n == stateName);
        }
        EditorSceneManager.MarkSceneDirty(ch.root.scene);
        SceneView.RepaintAll();
    }

    /// <summary>Cập nhật những gì đã có sẵn trên Scene mà không tạo thêm object.</summary>
    private void ApplyLive(CharacterEntry ch)
    {
        if (ch.root == null) return;
        var slot = ch.root.GetComponent<CharacterSlot>();
        if (slot == null) return;   // chưa setup ➔ chờ bấm Apply

        Undo.RecordObject(slot, "Edit Character");
        slot.correctItemID = ch.correctItemID;
        slot.defaultSound = ch.defaultSound;

        SetSprite(ch.root.transform, "Normal", ch.normalSprite);
        for (int i = 0; i < items.Count; i++)
        {
            var entry = slot.itemVisuals.Find(v => string.Equals(v.itemID, items[i].id, StringComparison.OrdinalIgnoreCase));
            if (entry != null) entry.fxType = ch.fx[i];
            SetSprite(ch.root.transform, items[i].id, ch.sprites[i]);
        }

        EditorUtility.SetDirty(slot);
        EditorSceneManager.MarkSceneDirty(ch.root.scene);
        SceneView.RepaintAll();
    }

    private static void SetSprite(Transform parent, string childName, Sprite sprite)
    {
        if (string.IsNullOrEmpty(childName) || sprite == null) return;
        var t = parent.Find(childName);
        var sr = t != null ? t.GetComponent<SpriteRenderer>() : null;
        if (sr == null || sr.sprite == sprite) return;
        Undo.RecordObject(sr, "Edit Sprite");
        sr.sprite = sprite;
    }

    // ───────────────────────────── Danh sách ─────────────────────────────
    private void AddItem(ItemEntry e)
    {
        items.Add(e);
        foreach (var ch in characters) SyncLists(ch);
    }

    private void RemoveItem(int index)
    {
        items.RemoveAt(index);
        foreach (var ch in characters)
        {
            if (index < ch.sprites.Count) ch.sprites.RemoveAt(index);
            if (index < ch.fx.Count) ch.fx.RemoveAt(index);
        }
    }

    private void SyncLists(CharacterEntry ch)
    {
        while (ch.sprites.Count < items.Count) ch.sprites.Add(null);
        while (ch.fx.Count < items.Count) ch.fx.Add(FxType.Siuu);
    }

    // ───────────────────────────── Load ─────────────────────────────
    private void LoadFromScene()
    {
        items.Clear();
        characters.Clear();

        var manager = FindFirstObjectByType<ItemSequenceManager>(FindObjectsInactive.Include);
        if (manager != null)
        {
            foreach (var d in manager.itemList)
            {
                if (d == null) continue;
                var sr = d.GetComponent<SpriteRenderer>();
                items.Add(new ItemEntry { id = d.itemID, obj = d.gameObject, sprite = sr != null ? sr.sprite : null });
            }
        }

        foreach (var slot in FindObjectsByType<CharacterSlot>(FindObjectsInactive.Include, FindObjectsSortMode.None)
                     .OrderBy(s => s.transform.GetSiblingIndex()))
        {
            var ch = new CharacterEntry
            {
                root = slot.gameObject,
                correctItemID = slot.correctItemID,
                defaultSound = slot.defaultSound,
                normalSprite = SpriteOf(slot.normalVisual)
            };
            SyncLists(ch);
            for (int i = 0; i < items.Count; i++)
            {
                var v = slot.itemVisuals.Find(x => string.Equals(x.itemID, items[i].id, StringComparison.OrdinalIgnoreCase));
                if (v == null) continue;
                ch.sprites[i] = SpriteOf(v.visual);
                ch.fx[i] = v.fxType;
            }
            characters.Add(ch);
        }
        Repaint();
    }

    private static Sprite SpriteOf(GameObject go)
    {
        if (go == null) return null;
        var sr = go.GetComponent<SpriteRenderer>();
        return sr != null ? sr.sprite : null;
    }

    // ───────────────────────────── Apply ─────────────────────────────
    private void ApplyAll()
    {
        var manager = FindFirstObjectByType<ItemSequenceManager>(FindObjectsInactive.Include);
        Undo.IncrementCurrentGroup();

        var draggables = new List<DraggableItem>();
        foreach (var it in items)
        {
            var d = ApplyItem(it);
            if (d != null) draggables.Add(d);
        }

        var slots = new List<CharacterSlot>();
        foreach (var ch in characters)
        {
            var s = ApplyCharacter(ch);
            if (s != null) slots.Add(s);
        }

        if (manager != null)
        {
            Undo.RecordObject(manager, "Quick Setup");
            manager.itemList = draggables;
            manager.characterList = slots;
            EditorUtility.SetDirty(manager);
        }
        else
        {
            Debug.LogWarning("[QuickSetup] Không tìm thấy ItemSequenceManager trong scene ➔ chưa gán danh sách.");
        }

        EditorSceneManager.MarkSceneDirty(EditorSceneManager.GetActiveScene());
        Debug.Log($"[QuickSetup] Xong: {draggables.Count} item, {slots.Count} nhân vật. Nhớ Ctrl+S để lưu scene.");
    }

    private DraggableItem ApplyItem(ItemEntry it)
    {
        if (it.obj == null || string.IsNullOrEmpty(it.id)) return null;
        var go = it.obj;
        Undo.RegisterFullObjectHierarchyUndo(go, "Setup Item");

        var sr = go.GetComponent<SpriteRenderer>() ?? Undo.AddComponent<SpriteRenderer>(go);
        if (it.sprite != null) sr.sprite = it.sprite;

        var col = go.GetComponent<Collider>();
        if (col == null) { col = Undo.AddComponent<BoxCollider>(go); FitCollider((BoxCollider)col, go.transform, sr); }

        var d = go.GetComponent<DraggableItem>() ?? Undo.AddComponent<DraggableItem>(go);
        d.itemID = it.id;

        if (setItemLayer)
        {
            int layer = LayerMask.NameToLayer("Item");
            if (layer != -1) go.layer = layer;
        }
        EditorUtility.SetDirty(go);
        return d;
    }

    private CharacterSlot ApplyCharacter(CharacterEntry ch)
    {
        if (ch.root == null) return null;
        var go = ch.root;
        Undo.RegisterFullObjectHierarchyUndo(go, "Setup Character");

        var slot = go.GetComponent<CharacterSlot>();
        if (slot == null)
        {
            // Collider phải có trước vì CharacterSlot [RequireComponent(Collider)]
            if (go.GetComponent<Collider>() == null) Undo.AddComponent<BoxCollider>(go);
            slot = Undo.AddComponent<CharacterSlot>(go);
        }

        slot.correctItemID = ch.correctItemID;
        slot.defaultSound = ch.defaultSound;

        // Node con: dùng lại nếu đã có (giữ nguyên vị trí đã chỉnh), chưa có thì tạo mới
        slot.normalVisual = GetOrCreateVisual(go.transform, "Normal", ch.normalSprite, true);
        slot.itemVisuals.Clear();
        for (int i = 0; i < items.Count; i++)
        {
            if (string.IsNullOrEmpty(items[i].id)) continue;
            slot.itemVisuals.Add(new CharacterItemVisual
            {
                itemID = items[i].id,
                fxType = ch.fx[i],
                visual = GetOrCreateVisual(go.transform, items[i].id, ch.sprites[i], false)
            });
        }

        // Ảnh nằm ở node con ➔ bỏ SpriteRenderer thừa trên node cha (nếu có)
        var parentSr = go.GetComponent<SpriteRenderer>();
        if (parentSr != null) Undo.DestroyObjectImmediate(parentSr);

        // Collider theo ảnh Normal nếu vừa tạo mới
        var box = go.GetComponent<BoxCollider>();
        var normalSr = slot.normalVisual != null ? slot.normalVisual.GetComponent<SpriteRenderer>() : null;
        if (box != null && box.size == Vector3.one && normalSr != null && normalSr.sprite != null)
            FitCollider(box, go.transform, normalSr);

        EditorUtility.SetDirty(slot);
        return slot;
    }

    private static GameObject GetOrCreateVisual(Transform parent, string name, Sprite sprite, bool visible)
    {
        Transform t = parent.Find(name);
        GameObject child;
        if (t != null) child = t.gameObject;
        else
        {
            child = new GameObject(name);
            Undo.RegisterCreatedObjectUndo(child, "Create Visual");
            child.transform.SetParent(parent, false);
            child.layer = parent.gameObject.layer;
        }

        var sr = child.GetComponent<SpriteRenderer>() ?? Undo.AddComponent<SpriteRenderer>(child);
        if (sprite != null) sr.sprite = sprite;
        child.SetActive(visible);
        return child;
    }

    private static void FitCollider(BoxCollider box, Transform root, SpriteRenderer sr)
    {
        if (sr == null || sr.sprite == null) return;
        Bounds b = sr.bounds;                       // world bounds
        Vector3 s = root.lossyScale;
        box.center = root.InverseTransformPoint(b.center);
        box.size = new Vector3(b.size.x / Mathf.Max(0.0001f, Mathf.Abs(s.x)),
                               b.size.y / Mathf.Max(0.0001f, Mathf.Abs(s.y)),
                               0.1f);
    }
}
#endif
