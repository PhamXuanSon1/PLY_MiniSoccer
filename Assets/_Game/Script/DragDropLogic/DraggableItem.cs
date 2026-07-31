using UnityEngine;

[RequireComponent(typeof(Collider))]
public class DraggableItem : MonoBehaviour
{
    [Header("Item Data")]
    public string itemID; // ID của vật phẩm (vd: "Cup", "Ball", "Whistle", "Shoe")

    [Header("Layer Settings")]
    [Tooltip("LayerMask cho phép kéo (mặc định kiểm tra Layer 'Item')")]
    public LayerMask itemLayer;

    private Vector3 originalPosition;
    private Vector3 offset;
    private Camera mainCamera;
    private SpriteRenderer spriteRenderer;
    private int originalSortingOrder;
    private bool isDragging = false;

    private void Awake()
    {
        mainCamera = Camera.main;
        spriteRenderer = GetComponent<SpriteRenderer>();
    }

    private bool IsValidItemLayer()
    {
        // Nếu gán itemLayer trong Inspector ➔ Kiểm tra theo LayerMask
        if (itemLayer.value != 0)
        {
            return ((1 << gameObject.layer) & itemLayer.value) != 0;
        }

        // Nếu để mặc định ➔ Kiểm tra xem GameObject này có ở Layer 'Item' không
        int defaultItemLayer = LayerMask.NameToLayer("Item");
        if (defaultItemLayer != -1)
        {
            return gameObject.layer == defaultItemLayer;
        }

        return true;
    }

    private void OnMouseDown()
    {
        // Chỉ cho phép kéo nếu GameObject thuộc Layer Item hợp lệ
        if (!IsValidItemLayer()) return;

        // Chỉ cho phép kéo khi món đồ đã hoàn thành di chuyển tới vị trí target
        if (ItemSequenceManager.Instance != null && !ItemSequenceManager.Instance.isItemReady) return;

        isDragging = true;
        originalPosition = transform.position;
        
        if (mainCamera == null) mainCamera = Camera.main;
        
        // Tính offset giữa vị trí chuột và vị trí vật phẩm trong 3D
        Vector3 mouseWorldPos = GetMouseWorldPos();
        offset = transform.position - mouseWorldPos;

        // Đưa item nổi lên phía trên khi kéo (nếu có SpriteRenderer)
        if (spriteRenderer != null)
        {
            originalSortingOrder = spriteRenderer.sortingOrder;
            spriteRenderer.sortingOrder = 100;
        }

        // Báo cho ItemSequenceManager khi bắt đầu kéo món đồ
        if (ItemSequenceManager.Instance != null)
        {
            ItemSequenceManager.Instance.OnFirstItemDragged();
        }
    }

    private void OnMouseDrag()
    {
        if (!isDragging) return;

        Vector3 mouseWorldPos = GetMouseWorldPos();
        transform.position = mouseWorldPos + offset;
    }

    private void OnMouseUp()
    {
        if (!isDragging) return;
        isDragging = false;

        // Trả lại sorting order cũ
        if (spriteRenderer != null)
        {
            spriteRenderer.sortingOrder = originalSortingOrder;
        }

        // Bắn Raycast 3D từ camera tại vị trí chuột
        Ray ray = mainCamera.ScreenPointToRay(Input.mousePosition);
        RaycastHit[] hits = Physics.RaycastAll(ray);

        bool droppedOnTarget = false;

        foreach (var hit in hits)
        {
            // Bỏ qua collider 3D của chính món đồ đang kéo
            if (hit.collider.gameObject == gameObject) continue;

            CharacterDropZone dropZone = hit.collider.GetComponent<CharacterDropZone>();
            if (dropZone != null)
            {
                droppedOnTarget = dropZone.OnItemDropped(this);
                if (droppedOnTarget) break;
            }
        }

        // Nếu không thả vào nhân vật phù hợp ➔ Snap quay về vị trí ban đầu
        if (!droppedOnTarget)
        {
            transform.position = originalPosition;
        }
    }

    private Vector3 GetMouseWorldPos()
    {
        Vector3 mouseScreenPos = Input.mousePosition;
        // Giữ nguyên khoảng cách z so với camera
        mouseScreenPos.z = Mathf.Abs(mainCamera.transform.position.z - transform.position.z);
        return mainCamera.ScreenToWorldPoint(mouseScreenPos);
    }
}

