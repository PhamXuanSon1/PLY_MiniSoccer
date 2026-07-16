using UnityEngine;
using Luna.Unity; // Thư viện của Luna để đi ra Store
using TMPro; // Thư viện cho TextMeshPro

public class FavoritePlayerEndcard : MonoBehaviour
{
    [Tooltip("Kéo Component SpriteRenderer của Endcard vào đây (để hiển thị ảnh Full Body)")]
    public SpriteRenderer fullBodyRenderer;

    [Tooltip("Kéo Component TextMeshPro của Endcard vào đây (để hiển thị Tên)")]
    public TMP_Text nameText;

    [Tooltip("Kéo Object cha chứa toàn bộ UI Endcard vào đây (để bật/tắt lúc cần)")]
    public GameObject endcardPanel;

    private bool canClickToStore = false;

    private void Start()
    {
        // Tự động giấu màn hình Endcard đi khi game mới bắt đầu
        if (endcardPanel != null)
        {
            endcardPanel.SetActive(false);
        }
    }

    // Hàm này được Manager gọi khi tìm ra quán quân
    public void ShowEndcard(FavoritePlayerCard winnerData)
    {
        if (winnerData == null) return;

        // Đổi ảnh Fullbody của Quán quân
        if (fullBodyRenderer != null)
        {
            fullBodyRenderer.sprite = winnerData.fullBodySprite;
        }

        // Đổi tên Quán quân
        if (nameText != null)
        {
            nameText.text = winnerData.playerName;
        }

        // Bật màn hình Endcard lên
        if (endcardPanel != null)
        {
            endcardPanel.SetActive(true);
        }
    }

    // Manager sẽ gọi hàm này sau khi đếm ngược xong
    public void EnableClickToStore()
    {
        Debug.Log("⏳ Đã hết thời gian chờ. BẬT TÍNH NĂNG CLICK RA STORE!");
        canClickToStore = true;
    }

    private void Update()
    {
        // Nếu màn hình Endcard đã hiện và người chơi bấm chuột/chạm màn hình
        if (canClickToStore && Input.GetMouseButtonDown(0))
        {
            canClickToStore = false; // Tắt đi để chỉ chạy 1 lần duy nhất
            GotoStore();
        }
    }

    // Lệnh gọi ra Store
    public void GotoStore()
    {
        Debug.Log("🎉 Chuyển hướng ra Store tải game!");
        LifeCycle.GameEnded();
        Playable.InstallFullGame();
    }
}
