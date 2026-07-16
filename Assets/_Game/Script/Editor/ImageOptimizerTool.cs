using UnityEngine;
using UnityEditor;

public class ImageOptimizerTool : EditorWindow
{
    private int targetMaxSize = 512;
    private bool useCrunchCompression = true;

    [MenuItem("Tools/Giảm Size Ảnh (Image Optimizer)")]
    public static void ShowWindow()
    {
        GetWindow<ImageOptimizerTool>("Giảm Size Ảnh");
    }

    private void OnGUI()
    {
        GUILayout.Label("Công cụ Tối ưu Dung lượng Ảnh", EditorStyles.boldLabel);
        EditorGUILayout.Space();

        GUILayout.Label("Cách dùng:", EditorStyles.boldLabel);
        GUILayout.Label("1. Quét chọn các ảnh cần giảm size ở trong cửa sổ Project (bôi đen nhiều ảnh).", EditorStyles.wordWrappedLabel);
        GUILayout.Label("2. Chọn kích thước Max Size bên dưới.", EditorStyles.wordWrappedLabel);
        GUILayout.Label("3. Bấm 'Áp dụng'. Tool sẽ tự động nén toàn bộ ảnh được chọn.", EditorStyles.wordWrappedLabel);
        EditorGUILayout.Space();

        targetMaxSize = EditorGUILayout.IntPopup("Max Size (Kích thước)", targetMaxSize, 
            new string[] { "128", "256", "512", "1024", "2048" }, 
            new int[] { 128, 256, 512, 1024, 2048 });

        useCrunchCompression = EditorGUILayout.Toggle("Bật Nén Crunch (Rất nhẹ)", useCrunchCompression);

        EditorGUILayout.Space();
        EditorGUILayout.Space();

        GUI.backgroundColor = Color.green;
        if (GUILayout.Button("Áp Dụng Giảm Dung Lượng Các Ảnh Đã Chọn", GUILayout.Height(40)))
        {
            OptimizeSelectedTextures();
        }
        GUI.backgroundColor = Color.white;

        EditorGUILayout.Space();
        EditorGUILayout.Space();
        GUILayout.Label("--- TÍNH NĂNG MẠNH HƠN ---", EditorStyles.boldLabel);
        GUILayout.Label("Thu nhỏ vĩnh viễn kích thước (Resolution) của file ảnh gốc. Dành cho việc ép file cực nhỏ.", EditorStyles.wordWrappedLabel);
        
        GUI.backgroundColor = Color.yellow;
        if (GUILayout.Button("Thu nhỏ kích thước File Gốc còn 50%", GUILayout.Height(40)))
        {
            if (EditorUtility.DisplayDialog("Cảnh Báo", "Hành động này sẽ ghi đè trực tiếp lên file ảnh gốc và KHÔNG THỂ Undo (Ctrl+Z). Bạn có chắc chắn muốn thu nhỏ các ảnh được chọn còn 50% không?", "Có, hãy thu nhỏ", "Huỷ"))
            {
                ResizeSourceTextures(0.5f);
            }
        }
        
        EditorGUILayout.Space();
        
        GUI.backgroundColor = new Color(1f, 0.5f, 0f); // Màu cam
        if (GUILayout.Button("Phóng to kích thước File Gốc lên 200% (Bị mờ)", GUILayout.Height(30)))
        {
            if (EditorUtility.DisplayDialog("Cảnh Báo", "Việc phóng to sẽ làm tăng kích thước ảnh lên gấp đôi, nhưng ảnh sẽ BỊ MỜ đi do dữ liệu gốc đã mất. Bạn có muốn tiếp tục?", "Phóng to", "Huỷ"))
            {
                ResizeSourceTextures(2.0f);
            }
        }
        GUI.backgroundColor = Color.white;
    }

    private void OptimizeSelectedTextures()
    {
        Object[] selectedObjects = Selection.GetFiltered(typeof(Texture2D), SelectionMode.DeepAssets);
        if (selectedObjects.Length == 0)
        {
            EditorUtility.DisplayDialog("Cảnh báo", "Vui lòng chọn ít nhất 1 tấm ảnh trong Project (hoặc bôi đen nhiều ảnh) trước khi bấm!", "Đã hiểu");
            return;
        }

        int count = 0;
        foreach (Object obj in selectedObjects)
        {
            string path = AssetDatabase.GetAssetPath(obj);
            TextureImporter importer = AssetImporter.GetAtPath(path) as TextureImporter;

            if (importer != null)
            {
                // Cài đặt Max Size
                importer.maxTextureSize = targetMaxSize;
                
                // Cài đặt Nén (Compression)
                if (useCrunchCompression)
                {
                    importer.textureCompression = TextureImporterCompression.Compressed;
                    importer.crunchedCompression = true;
                    importer.compressionQuality = 50; // Nén trung bình
                }
                else
                {
                    importer.textureCompression = TextureImporterCompression.Uncompressed;
                }
                
                importer.SaveAndReimport();
                count++;
            }
        }

        EditorUtility.DisplayDialog("Thành công!", $"Đã nén và giảm dung lượng thành công cho {count} tấm ảnh!", "Tuyệt vời");
    }

    private void ResizeSourceTextures(float scaleFactor)
    {
        Object[] selectedObjects = Selection.GetFiltered(typeof(Texture2D), SelectionMode.DeepAssets);
        if (selectedObjects.Length == 0)
        {
            EditorUtility.DisplayDialog("Cảnh báo", "Vui lòng chọn ít nhất 1 tấm ảnh trong Project!", "OK");
            return;
        }

        int count = 0;
        foreach (Object obj in selectedObjects)
        {
            Texture2D tex = obj as Texture2D;
            string path = AssetDatabase.GetAssetPath(tex);
            TextureImporter importer = AssetImporter.GetAtPath(path) as TextureImporter;

            if (importer != null)
            {
                // Phải bật Read/Write để lấy pixel
                bool wasReadable = importer.isReadable;
                TextureImporterCompression oldCompression = importer.textureCompression;
                
                if (!wasReadable || oldCompression != TextureImporterCompression.Uncompressed)
                {
                    importer.isReadable = true;
                    importer.textureCompression = TextureImporterCompression.Uncompressed; // Tránh lỗi nén khi đọc pixel
                    importer.SaveAndReimport();
                }

                // Cần load lại texture sau khi reimport
                Texture2D readableTex = AssetDatabase.LoadAssetAtPath<Texture2D>(path);

                int newWidth = Mathf.Max(1, Mathf.RoundToInt(readableTex.width * scaleFactor));
                int newHeight = Mathf.Max(1, Mathf.RoundToInt(readableTex.height * scaleFactor));

                // Tạo texture mới với kích thước nhỏ hơn
                Texture2D scaledTex = new Texture2D(newWidth, newHeight, TextureFormat.RGBA32, false);
                Color[] newPixels = new Color[newWidth * newHeight];
                
                for (int y = 0; y < newHeight; y++)
                {
                    for (int x = 0; x < newWidth; x++)
                    {
                        float u = (float)x / newWidth;
                        float v = (float)y / newHeight;
                        newPixels[y * newWidth + x] = readableTex.GetPixelBilinear(u, v);
                    }
                }
                
                scaledTex.SetPixels(newPixels);
                scaledTex.Apply();

                // Lưu đè file
                byte[] bytes = scaledTex.EncodeToPNG();
                System.IO.File.WriteAllBytes(path, bytes);

                // Trả lại cài đặt cũ
                importer.isReadable = wasReadable;
                importer.textureCompression = oldCompression;
                importer.SaveAndReimport();
                
                count++;
            }
        }
        EditorUtility.DisplayDialog("Hoàn tất", $"Đã bóp nhỏ độ phân giải gốc thành công cho {count} tấm ảnh!", "Tuyệt vời");
    }
}
