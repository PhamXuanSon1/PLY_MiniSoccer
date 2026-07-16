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

    [Header("Hiệu ứng Bay xuống (Tuỳ chọn)")]
    [Tooltip("Object nào đó sẽ bay xuống cùng lúc với Slot bay lên (Ví dụ: cái búa, màn chắn...)")]
    public Transform objectToMoveDown;
    
    [Tooltip("Vị trí đích đến theo chiều dọc màn hình (0 là dưới cùng, 1 là trên cùng). 2/10 màn hình = 0.2")]
    [Range(0f, 1f)]
    public float targetScreenYRatio = 0.2f;

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
        
        Vector3 slotStartPos = transform.position;
        Vector3 slotTargetPos = new Vector3(targetX, targetY, transform.position.z);

        // Tính toán tọa độ cho object phụ bay xuống (nếu có gán)
        Vector3 extraStartPos = Vector3.zero;
        Vector3 extraTargetPos = Vector3.zero;
        if (objectToMoveDown != null && mainCam != null)
        {
            extraStartPos = objectToMoveDown.position;
            
            // Tính toạ độ Y trên màn hình (Ví dụ: Screen.height * 0.2)
            Vector3 screenPos = new Vector3(Screen.width / 2f, Screen.height * targetScreenYRatio, 10f); // 10f là z khoảng cách tới camera
            Vector3 worldPos = mainCam.ScreenToWorldPoint(screenPos);
            
            // Giữ nguyên X và Z của object phụ, chỉ thay đổi Y theo màn hình
            extraTargetPos = new Vector3(extraStartPos.x, worldPos.y, extraStartPos.z);
        }

        // Tính toán tổng thời gian bay (dựa trên quãng đường và tốc độ của Slot)
        float totalDistance = Vector3.Distance(slotStartPos, slotTargetPos);
        float duration = totalDistance / moveSpeed;
        float elapsedTime = 0f;

        // Dùng Lerp để đảm bảo cả 2 object chạy từ đầu tới đích trong CÙNG MỘT KHOẢNG THỜI GIAN
        while (elapsedTime < duration)
        {
            elapsedTime += Time.deltaTime;
            float t = elapsedTime / duration; // t sẽ chạy từ 0 đến 1

            // Slot bay lên
            transform.position = Vector3.Lerp(slotStartPos, slotTargetPos, t);
            
            // Object phụ bay xuống (chắc chắn sẽ đến nơi cùng lúc với Slot)
            if (objectToMoveDown != null)
            {
                objectToMoveDown.position = Vector3.Lerp(extraStartPos, extraTargetPos, t);
            }

            yield return null; // Đợi đến frame tiếp theo
        }

        // Bám chuẩn xác tọa độ điểm đến khi vòng lặp kết thúc
        transform.position = slotTargetPos;
        if (objectToMoveDown != null) objectToMoveDown.position = extraTargetPos;

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
