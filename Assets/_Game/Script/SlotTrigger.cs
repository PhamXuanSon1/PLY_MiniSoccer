using UnityEngine;
using System.Collections;

// Tự động yêu cầu BoxCollider2D nếu chưa có
[RequireComponent(typeof(BoxCollider2D))]
public class SlotTrigger : MonoBehaviour
{
    [Header("Dữ liệu Thẻ Cầu Thủ")]
    [Tooltip("Kéo thả file Scriptable Object PlayerCardData vào đây (ví dụ: thẻ Messi)")]
    public PlayerCardData cardData;

    [Header("Cài đặt Va chạm")]
    [Tooltip("Tag của quả Cúp")]
    public string targetTag = "Cup";

    [Header("Cài đặt Hiệu ứng Bay lên")]
    [Tooltip("Tạo 1 Empty GameObject đặt ở vị trí muốn bay lên và kéo nó vào đây (để lấy trục Y)")]
    public Transform yAnchor;
    
    [Tooltip("Tốc độ Slot bay lên màn hình")]
    public float moveSpeed = 10f;

    private bool isTriggered = false;

    private void Start()
    {
        // Tự động đảm bảo Collider là dạng Trigger để Cúp lọt qua mà vẫn nhận diện được
        Collider2D col = GetComponent<Collider2D>();
        if (col != null)
        {
            col.isTrigger = true;
        }
    }

    // Khi Cúp đụng vào vùng này
    private void OnTriggerEnter2D(Collider2D collision)
    {
        // Kiểm tra xem vật rơi vào có phải là Cúp không và chỉ cho chạy 1 lần duy nhất
        if (!isTriggered && collision.gameObject.CompareTag(targetTag))
        {
            isTriggered = true; // Khóa lại, Cúp đập thêm nữa cũng không kích hoạt

            // 1. Đóng băng quả Cúp (bắt Cúp dừng lại tĩnh luôn tại chỗ)
            Rigidbody2D cupRb = collision.gameObject.GetComponent<Rigidbody2D>();
            if (cupRb != null)
            {
                cupRb.linearVelocity = Vector2.zero;
                cupRb.angularVelocity = 0f;
                cupRb.bodyType = RigidbodyType2D.Static;
            }

            // 2. Chạy Coroutine hiệu ứng cho Slot bay lên
            if (yAnchor != null)
            {
                StartCoroutine(FlyAndShowUI());
            }
            else
            {
                Debug.LogWarning("Bạn chưa gán vật thể Anchor cho yAnchor! Hệ thống sẽ bật UI ngay lập tức.");
                ShowUI();
            }
        }
    }

    private IEnumerator FlyAndShowUI()
    {
        // Tính toán Tọa độ đích đến:
        // X = vị trí giữa màn hình theo Camera chính.
        // Y = chiều cao của vật thể yAnchor.
        Camera mainCam = Camera.main;
        float targetX = (mainCam != null) ? mainCam.transform.position.x : transform.position.x;
        float targetY = yAnchor.position.y;
        
        Vector3 targetPosition = new Vector3(targetX, targetY, transform.position.z);

        // Di chuyển Slot từ từ lên đích (dùng hàm MoveTowards rất mượt)
        while (Vector3.Distance(transform.position, targetPosition) > 0.01f)
        {
            transform.position = Vector3.MoveTowards(transform.position, targetPosition, moveSpeed * Time.deltaTime);
            yield return null; // Tạm dừng tại đây, đợi đến frame (khung hình) tiếp theo mới chạy tiếp
        }

        // Bám chuẩn xác tọa độ điểm đến khi vòng lặp kết thúc
        transform.position = targetPosition;

        // 3. Sau khi Slot bay đến nơi xong xuôi -> Gọi UI hiện lên
        ShowUI();
    }

    private void ShowUI()
    {
        // Kiểm tra xem đã cấu hình UI chưa
        if (PlayerCardUIManager.Instance != null)
        {
            // Truyền dữ liệu của ô này cho UI Manager để nó hiện lên
            PlayerCardUIManager.Instance.ShowPlayerCard(cardData);
            
            // Tắt (ẩn) cục Slot đi sau khi nó bay tới nơi
            gameObject.SetActive(false);
        }
        else
        {
            Debug.LogWarning("Không tìm thấy PlayerCardUIManager trong Scene. Hãy chắc chắn bạn đã tạo UI Manager.");
        }
    }
}
