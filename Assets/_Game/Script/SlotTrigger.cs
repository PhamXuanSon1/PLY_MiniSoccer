using UnityEngine;

// Tự động yêu cầu BoxCollider2D nếu chưa có
[RequireComponent(typeof(BoxCollider2D))]
public class SlotTrigger : MonoBehaviour
{
    [Tooltip("Kéo thả file Scriptable Object PlayerCardData vào đây (ví dụ: thẻ Messi)")]
    public PlayerCardData cardData;

    [Tooltip("Tag của object rơi vào ô (ví dụ: 'Cup')")]
    public string targetTag = "Cup";

    private void Start()
    {
        // Tự động đảm bảo Collider là dạng Trigger để Cup lọt qua mà vẫn nhận diện được
        Collider2D col = GetComponent<Collider2D>();
        if (col != null)
        {
            col.isTrigger = true;
        }
    }

    // Khi có một vật thể (IsTrigger = false) đụng vào vùng này (IsTrigger = true)
    private void OnTriggerEnter2D(Collider2D collision)
    {
        // Kiểm tra xem vật rơi vào có phải là Cúp không
        if (collision.gameObject.CompareTag(targetTag))
        {
            // Kiểm tra xem đã cấu hình UI chưa
            if (PlayerCardUIManager.Instance != null)
            {
                // Truyền dữ liệu của ô này cho UI Manager để nó hiện lên
                PlayerCardUIManager.Instance.ShowPlayerCard(cardData);
            }
            else
            {
                Debug.LogWarning("Không tìm thấy PlayerCardUIManager trong Scene. Hãy chắc chắn bạn đã tạo UI Manager.");
            }
        }
    }
}
