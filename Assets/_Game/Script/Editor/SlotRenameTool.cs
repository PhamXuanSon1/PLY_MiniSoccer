using UnityEngine;
using UnityEditor;

public class SlotRenameTool
{
    // Thêm chức năng vào menu chuột phải và menu Tools ở trên cùng
    [MenuItem("GameObject/Rename Slot by Nationality (Đổi tên theo Quốc gia)", false, 0)]
    [MenuItem("Tools/Rename Slot by Nationality")]
    public static void RenameSelectedSlots()
    {
        // Lấy tất cả các object đang được bôi đen (chọn) ở Hierarchy
        GameObject[] selectedObjects = Selection.gameObjects;

        if (selectedObjects.Length == 0)
        {
            Debug.LogWarning("Vui lòng chọn ít nhất 1 object (Slot) trên Hierarchy để đổi tên.");
            return;
        }

        int count = 0;
        foreach (GameObject obj in selectedObjects)
        {
            // Kiểm tra xem object này có gắn script SlotTrigger không
            SlotTrigger slot = obj.GetComponent<SlotTrigger>();
            
            // Đảm bảo nó có SlotTrigger và đã được gán file Data
            if (slot != null && slot.cardData != null)
            {
                // Lưu lại trạng thái để có thể Undo (Bấm Ctrl+Z để hoàn tác nếu lỡ đổi nhầm)
                Undo.RecordObject(obj, "Rename Slot");
                
                // Lấy quốc tịch từ file Data ra và gắp thêm chữ "Slot"
                string newName = slot.cardData.nationality + "Slot";
                
                // Bạn có thể dùng hàm Replace(" ", "") nếu muốn xoá dấu cách:
                // newName = newName.Replace(" ", ""); 

                obj.name = newName;
                count++;
            }
        }

        if (count > 0)
        {
            Debug.Log("✅ Đã đổi tên thành công " + count + " Slot theo Quốc gia!");
        }
        else
        {
            Debug.LogWarning("❌ Không tìm thấy Slot nào hợp lệ. Đảm bảo bạn đã gắn SlotTrigger và kéo Data vào nó nhé.");
        }
    }
}
