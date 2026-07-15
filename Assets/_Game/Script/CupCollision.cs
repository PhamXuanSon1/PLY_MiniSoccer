using UnityEngine;

public class CupCollision : MonoBehaviour
{
    [Header("Cài đặt va chạm")]
    [Tooltip("Tag của thanh Base (nhớ gán Tag này cho các object con của Base)")]
    public string baseTag = "Base";

    [Tooltip("Kéo thả object bạn muốn bật (hiển thị lên) vào đây")]
    public GameObject objectToActivate;

    // Hàm này tự động gọi khi Cup va chạm với 1 vật khác
    void OnCollisionEnter2D(Collision2D collision)
    {
        // Kiểm tra bằng Tag thay vì tên
        if (collision.gameObject.CompareTag(baseTag))
        {
            // Nếu có object được gán vào thì bật nó lên
            if (objectToActivate != null)
            {
                objectToActivate.SetActive(true);
            }
        }
    }
}
