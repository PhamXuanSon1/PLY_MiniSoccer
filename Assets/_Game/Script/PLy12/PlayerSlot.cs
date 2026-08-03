using UnityEngine;
using DG.Tweening; // Thư viện DOTween

// Tự động yêu cầu phải có Collider 3D để nhận Raycast
[RequireComponent(typeof(Collider))] 
public class PlayerSlot : MonoBehaviour
{
    [Tooltip("Kéo component SpriteRenderer của Slot này vào đây (để đổi ảnh)")]
    public SpriteRenderer spriteRenderer;

    [Tooltip("Kéo Object viền sáng/hiệu ứng của lá bài vào đây")]
    public GameObject lightEffect;

    [Header("Idle Animation (Lúc chờ bấm)")]
    [Tooltip("Độ co giãn khi thở (0.95 = 95%)")]
    public float idleScale = 0.95f;
    [Tooltip("Thời gian co lại (giây)")]
    public float idleDuration = 0.5f;

    [HideInInspector]
    public Vector3 originalPosition;
    [HideInInspector]
    public Vector3 originalScale;

    [HideInInspector]
    public FavoritePlayerCard currentData;

    private void Start()
    {
        // Lưu lại toạ độ và kích thước gốc để sau này biến về
        originalPosition = transform.position;
        originalScale = transform.localScale;

        // Tắt hiệu ứng sáng lúc mới vào game
        if (lightEffect != null)
        {
            lightEffect.SetActive(false);
        }
    }

    // Quản lý sẽ gọi hàm này để nạp data mới vào Slot
    public void SetupSlot(FavoritePlayerCard data)
    {
        currentData = data;
        if (data != null)
        {
            if (spriteRenderer != null)
            {
                // Hiển thị ảnh bán thân của cầu thủ lên Slot
                spriteRenderer.sprite = data.halfBodySprite;
            }

            // Đổi Sprite của lightEffect theo data cầu thủ (nếu có)
            if (lightEffect != null && data.lightEffectSprite != null)
            {
                SpriteRenderer glowRenderer = lightEffect.GetComponent<SpriteRenderer>();
                if (glowRenderer != null)
                {
                    glowRenderer.sprite = data.lightEffectSprite;
                }
            }
        }
    }

    // Xoá OnMouseDown cũ vì giờ Manager sẽ tự quét bằng Raycast 3D
}
