using UnityEngine;
using DG.Tweening;

[RequireComponent(typeof(SpriteRenderer))]
[RequireComponent(typeof(Collider))]
public class CharacterDropZone : MonoBehaviour
{
    [Header("Character Data (ScriptableObject)")]
    public CharacterItemData characterData;

    [Header("Animation Settings")]
    [Tooltip("Thời gian món đồ bay từ targetPoint về vị trí nhân vật")]
    public float flyToCharacterDuration = 0.35f;
    public Ease flyEase = Ease.InQuad;

    private SpriteRenderer spriteRenderer;

    private void Awake()
    {
        spriteRenderer = GetComponent<SpriteRenderer>();

        // Khởi tạo sprite mặc định từ ScriptableObject
        if (characterData != null && characterData.normalSprite != null)
        {
            spriteRenderer.sprite = characterData.normalSprite;
        }
    }

    [HideInInspector] public bool hasReceivedItem = false;
    [HideInInspector] public bool isCorrectItemReceived = false;

    public void ResetCharacter(bool enableCollider = true)
    {
        hasReceivedItem = false;
        isCorrectItemReceived = false;

        if (characterData != null && characterData.normalSprite != null)
        {
            if (spriteRenderer == null) spriteRenderer = GetComponent<SpriteRenderer>();
            spriteRenderer.sprite = characterData.normalSprite;
        }

        Collider charCollider = GetComponent<Collider>();
        if (charCollider != null)
        {
            charCollider.enabled = enableCollider;
        }
    }

    private void OnMouseDown()
    {
        // Nếu đã từng thua (isFailedMode = true) ➔ Tap bất kỳ nhân vật nào cũng chuyển hướng ra Store ngay
        if (ItemSequenceManager.Instance != null && ItemSequenceManager.Instance.isFailedMode)
        {
            ItemSequenceManager.Instance.OpenStore();
            return;
        }

        if (hasReceivedItem) return;

        // Chỉ cho phép nhận đồ khi món đồ đã di chuyển tới vị trí target xong
        if (ItemSequenceManager.Instance != null && ItemSequenceManager.Instance.isItemReady)
        {
            // Tắt bàn tay hướng dẫn khi tap
            ItemSequenceManager.Instance.OnFirstItemDragged();

            DraggableItem currentItem = ItemSequenceManager.Instance.GetCurrentActiveItem();
            if (currentItem != null)
            {
                OnItemDropped(currentItem);
            }
        }
    }

    public bool OnItemDropped(DraggableItem item)
    {
        if (hasReceivedItem || item == null || characterData == null) return false;

        // Đánh dấu nhân vật đã nhận đồ & kiểm tra xem món đồ đó có ĐÚNG với nhân vật không
        hasReceivedItem = true;
        isCorrectItemReceived = characterData.IsCorrectItem(item.itemID);

        Collider charCollider = GetComponent<Collider>();
        if (charCollider != null)
        {
            charCollider.enabled = false;
        }

        // Tắt collider của món đồ trong lúc di chuyển
        Collider itemCollider = item.GetComponent<Collider>();
        if (itemCollider != null)
        {
            itemCollider.enabled = false;
        }

        // 1. Món đồ bay từ vị trí targetPoint đến vị trí nhân vật
        item.transform.DOMove(transform.position, flyToCharacterDuration)
            .SetEase(flyEase)
            .OnComplete(() =>
            {
                // 2. Khi món đồ bay tới nhân vật ➔ Ẩn món đồ & đổi ảnh nhân vật
                item.gameObject.SetActive(false);

                Sprite newSprite = characterData.GetSpriteForItem(item.itemID);
                if (newSprite != null)
                {
                    spriteRenderer.sprite = newSprite;
                }

                // Phát âm thanh thông qua Ply_SoundManager
                if (Ply_SoundManager.Ins != null)
                {
                    // Phát duy nhất âm thanh được chọn cho nhân vật/món đồ trong Data (Siuu, Angry, Cry, Hehe, Huh, RoarTiger...)
                    FxType fxType = characterData.GetFxTypeForItem(item.itemID);
                    Ply_SoundManager.Ins.PlayFx(fxType);
                }

                // 3. Báo cho ItemSequenceManager biết để spawn món đồ tiếp theo
                if (ItemSequenceManager.Instance != null)
                {
                    ItemSequenceManager.Instance.OnItemCompleted();
                }
            });

        return true;
    }
}

