using UnityEngine;
using UnityEditor;
using System.IO;

public class ImageResizerTool : EditorWindow
{
    private int targetWidth = 250;
    private int targetHeight = 300;

    [MenuItem("Tools/Image Resizer (Cắt Ảnh)")]
    public static void ShowWindow()
    {
        GetWindow<ImageResizerTool>("Cắt Ảnh Hàng Loạt");
    }

    private void OnGUI()
    {
        GUILayout.Label("Cài đặt Kích thước mới", EditorStyles.boldLabel);
        
        targetWidth = EditorGUILayout.IntField("Chiều rộng (Width)", targetWidth);
        targetHeight = EditorGUILayout.IntField("Chiều cao (Height)", targetHeight);

        GUILayout.Space(10);
        
        if (GUILayout.Button("Resize Các Ảnh Đang Chọn", GUILayout.Height(30)))
        {
            ResizeSelectedImages();
        }
        
        GUILayout.Space(10);
        EditorGUILayout.HelpBox("LƯU Ý QUAN TRỌNG:\nHành động này sẽ thay đổi VĨNH VIỄN file gốc (PNG/JPG) của bạn. Hệ thống sẽ bóp/giãn ảnh để vừa với khung hình.\nHãy copy thư mục ảnh ra chỗ khác để backup trước khi bấm nút nếu bạn không chắc chắn!", MessageType.Warning);
    }

    private void ResizeSelectedImages()
    {
        // Lấy tất cả các file Texture2D đang được chọn ở cửa sổ Project
        Object[] selectedObjects = Selection.GetFiltered(typeof(Texture2D), SelectionMode.Assets);
        
        if (selectedObjects.Length == 0)
        {
            Debug.LogWarning("Vui lòng bôi đen ít nhất 1 ảnh trong cửa sổ Project!");
            return;
        }

        int count = 0;
        foreach (Object obj in selectedObjects)
        {
            string path = AssetDatabase.GetAssetPath(obj);
            
            TextureImporter importer = AssetImporter.GetAtPath(path) as TextureImporter;
            if (importer != null)
            {
                // Bật tính năng Read/Write để code có thể đọc được pixel của ảnh
                bool wasReadable = importer.isReadable;
                if (!wasReadable)
                {
                    importer.isReadable = true;
                    importer.SaveAndReimport();
                }

                Texture2D originalTex = obj as Texture2D;
                if (originalTex != null)
                {
                    // Tạo ảnh mới với size được chỉ định
                    Texture2D resizedTex = ResizeTexture(originalTex, targetWidth, targetHeight);
                    
                    // Chuyển thành file PNG
                    byte[] bytes = resizedTex.EncodeToPNG();
                    
                    // Ghi đè file cũ
                    File.WriteAllBytes(path, bytes);
                    count++;
                }

                // Trả lại trạng thái Read/Write như cũ
                if (!wasReadable)
                {
                    importer.isReadable = false;
                    importer.SaveAndReimport();
                }
            }
        }
        
        // Refresh lại Unity để nó load lại file ảnh mới thay thế
        AssetDatabase.Refresh();
        Debug.Log($"✅ Đã bóp/giãn thành công {count} ảnh về kích thước {targetWidth}x{targetHeight}!");
    }

    // Hàm lõi dùng GPU (Graphics) để nội suy pixel giúp ảnh mượt mà nhất có thể
    private Texture2D ResizeTexture(Texture2D source, int newWidth, int newHeight)
    {
        source.filterMode = FilterMode.Bilinear;
        RenderTexture rt = RenderTexture.GetTemporary(newWidth, newHeight);
        rt.filterMode = FilterMode.Bilinear;
        
        RenderTexture.active = rt;
        Graphics.Blit(source, rt);
        
        Texture2D nTex = new Texture2D(newWidth, newHeight, TextureFormat.RGBA32, false);
        nTex.ReadPixels(new Rect(0, 0, newWidth, newHeight), 0, 0);
        nTex.Apply();
        
        RenderTexture.active = null;
        RenderTexture.ReleaseTemporary(rt);
        
        return nTex;
    }
}
