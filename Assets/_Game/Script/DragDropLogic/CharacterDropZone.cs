using UnityEngine;

[RequireComponent(typeof(SpriteRenderer))]
[RequireComponent(typeof(Collider))]
public class CharacterDropZone : MonoBehaviour
{
    [Header("Character Data (ScriptableObject)")]
    public CharacterItemData characterData;

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

        // Snap item về vị trí nhân vật
        item.transform.position = transform.position;

        // Ẩn món đồ đi (vì nhân vật đã cầm nó)
        item.gameObject.SetActive(false);

        // Đổi ảnh nhân vật sang ảnh mới khi cầm đồ (nếu tìm thấy sprite trong Data)
        Sprite newSprite = characterData.GetSpriteForItem(item.itemID);
        if (newSprite != null)
        {
            spriteRenderer.sprite = newSprite;
        }

        // Lấy âm thanh FxType được chọn cho nhân vật/món đồ này trong ScriptableObject
        FxType fxType = characterData.GetFxTypeForItem(item.itemID);

        // Phát âm thanh thông qua Ply_SoundManager
        if (Ply_SoundManager.Ins != null)
        {
            // 1. Phát âm thanh riêng của nhân vật được chọn trong Data (Siuu, Angry, Cry, Hehe, Huh, RoarTiger...)
            Ply_SoundManager.Ins.PlayFx(fxType);

            // 2. Phát âm thanh True / False tương ứng với việc chọn ĐÚNG hay SAI đồ
            // FxType resultFx = isCorrectItemReceived ? FxType.True : FxType.False;
            // Ply_SoundManager.Ins.PlayFx(resultFx);
        }

        // Báo cho ItemSequenceManager biết để chuyển sang món đồ tiếp theo
        if (ItemSequenceManager.Instance != null)
        {
            ItemSequenceManager.Instance.OnItemCompleted();
        }

        return true;
    }
}

