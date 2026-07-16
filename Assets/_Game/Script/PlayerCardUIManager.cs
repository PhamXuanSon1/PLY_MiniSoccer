using UnityEngine;
using UnityEngine.UI;
using TMPro;
using Luna.Unity;

public class PlayerCardUIManager : MonoBehaviour
{
    // Singleton để các SlotTrigger dễ dàng tìm thấy mà không cần GetComponent phức tạp
    public static PlayerCardUIManager Instance { get; private set; }

    [Header("UI Panels")]
    [Tooltip("Panel chính chứa giao diện hiển thị (Dùng để bật/tắt toàn bộ popup)")]
    public GameObject cardPanel;

    [Tooltip("Kéo thả các object khác muốn BẬT LÊN cùng lúc với Card Panel vào danh sách này")]
    public GameObject[] extraObjectsToActivate;

    [Header("Hành động đếm ngược (Ví dụ: Đợi 3 giây)")]
    [Tooltip("Thời gian đếm ngược (tính bằng giây)")]
    public float waitTime = 3f;
    
    [Tooltip("Các object sẽ tự động BẬT LÊN sau khi hết thời gian đếm ngược")]
    public GameObject[] objectsToTurnOnAfterWait;
    
    [Tooltip("Các object sẽ tự động TẮT ĐI sau khi hết thời gian đếm ngược")]
    public GameObject[] objectsToTurnOffAfterWait;

    [Header("UI Elements (Kéo thả từ Canvas vào đây)")]
    public TMP_Text nationalityText;
    public SpriteRenderer playerImage;
    public SpriteRenderer flagImage;

    private bool canClickToStore = false;

    private void Awake()
    {
        // Khởi tạo Singleton
        if (Instance == null)
        {
            Instance = this;
        }
        else
        {
            Destroy(gameObject);
        }
    }

    public void GotoStore()
    {
        LifeCycle.GameEnded();

        Playable.InstallFullGame();
    }
    private void Start()
    {
        // Tự động ẩn UI khi mới bắt đầu game
        HideCard();
    }

    private void Update()
    {
        // Nếu cờ canClickToStore được bật và người chơi bấm chuột/chạm màn hình
        if (canClickToStore && Input.GetMouseButtonDown(0))
        {
            canClickToStore = false; // Tắt đi để chỉ gọi 1 lần duy nhất
            GotoStore();
        }
    }

    // Hàm này sẽ được gọi bởi SlotTrigger khi Cup rơi vào ô
    public void ShowPlayerCard(PlayerCardData data)
    {
        if (data == null)
        {
            Debug.LogWarning("Không có dữ liệu thẻ cầu thủ được truyền vào!");
            return;
        }

        // Cập nhật thông tin lên giao diện
        if (nationalityText != null) nationalityText.text = data.nationality;
        
        if (playerImage != null) playerImage.sprite = data.playerSprite;
        if (flagImage != null) flagImage.sprite = data.flagSprite;

        // Bật Panel hiển thị
        if (cardPanel != null)
        {
            cardPanel.SetActive(true);
        }

        // Bật luôn các object phụ đi kèm (nếu bạn có kéo vào)
        if (extraObjectsToActivate != null)
        {
            foreach (GameObject obj in extraObjectsToActivate)
            {
                if (obj != null) obj.SetActive(true);
            }
        }

        // Huỷ bỏ bộ đếm giờ cũ (nếu có) và bắt đầu đếm giờ mới
        StopAllCoroutines();
        StartCoroutine(WaitAndTriggerObjects());
    }

    private System.Collections.IEnumerator WaitAndTriggerObjects()
    {
        // Chờ đúng số giây bạn đã cài (mặc định 3s)
        yield return new WaitForSeconds(waitTime);

        // Hết giờ -> Bật các object mới lên
        if (objectsToTurnOnAfterWait != null)
        {
            foreach (GameObject obj in objectsToTurnOnAfterWait)
            {
                if (obj != null) obj.SetActive(true);
            }
        }

        // Hết giờ -> Tắt các object chỉ định đi
        if (objectsToTurnOffAfterWait != null)
        {
            foreach (GameObject obj in objectsToTurnOffAfterWait)
            {
                if (obj != null) obj.SetActive(false);
            }
        }

        // Sau khi đã bật/tắt các object xong, cho phép người chơi click bất cứ đâu để ra Store
        canClickToStore = true;
    }

    // Gắn hàm này vào một Button (Nút Đóng) trên UI để tắt popup
    public void HideCard()
    {
        if (cardPanel != null)
        {
            cardPanel.SetActive(false);
        }

        // Tắt luôn các object phụ đi kèm
        if (extraObjectsToActivate != null)
        {
            foreach (GameObject obj in extraObjectsToActivate)
            {
                if (obj != null) obj.SetActive(false);
            }
        }
    }
}
