using UnityEngine;
using UnityEngine.UI;
using TMPro;

public class PlayerCardUIManager : MonoBehaviour
{
    // Singleton để các SlotTrigger dễ dàng tìm thấy mà không cần GetComponent phức tạp
    public static PlayerCardUIManager Instance { get; private set; }

    [Header("UI Panels")]
    [Tooltip("Panel chính chứa giao diện hiển thị (Dùng để bật/tắt toàn bộ popup)")]
    public GameObject cardPanel;

    [Header("UI Elements (Kéo thả từ Canvas vào đây)")]
    public TMP_Text nationalityText;
    public Image playerImage;
    public Image flagImage;

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

    private void Start()
    {
        // Tự động ẩn UI khi mới bắt đầu game
        HideCard();
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
    }

    // Gắn hàm này vào một Button (Nút Đóng) trên UI để tắt popup
    public void HideCard()
    {
        if (cardPanel != null)
        {
            cardPanel.SetActive(false);
        }
    }
}
