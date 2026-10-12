using System;
using System.Collections.Generic;
using UnityEngine;
using DG.Tweening;

[Serializable]
public class CharacterItemVisual
{
    [Tooltip("ID của món đồ (phải khớp DraggableItem.itemID)")]
    public string itemID;
    [Tooltip("Node con hiển thị nhân vật khi cầm món đồ này")]
    public GameObject visual;
    [Tooltip("Âm thanh phát khi nhân vật nhận món đồ này")]
    public FxType fxType = FxType.Siuu;
}

/// <summary>
/// Nhân vật gồm 1 node cha (chứa Collider) + các node con (mỗi node con là 1 trạng thái ảnh,
/// tự chỉnh vị trí/scale/sorting riêng). Tại 1 thời điểm chỉ bật 1 node con.
/// </summary>
[RequireComponent(typeof(Collider))]
public class CharacterSlot : MonoBehaviour
{
    [Header("Visuals (node con)")]
    [Tooltip("Node con hiển thị lúc bình thường (chưa nhận đồ)")]
    public GameObject normalVisual;
    [Tooltip("Node con ứng với từng món đồ")]
    public List<CharacterItemVisual> itemVisuals = new List<CharacterItemVisual>();

    [Header("Win Condition")]
    [Tooltip("ID món đồ ĐÚNG của nhân vật này (VD: WC, Euro, Bong, Steak)")]
    public string correctItemID;
    [Tooltip("Âm thanh mặc định nếu món đồ không có cấu hình riêng")]
    public FxType defaultSound = FxType.Siuu;

    [Header("Animation Settings")]
    [Tooltip("Điểm món đồ bay tới. Để trống = vị trí node cha")]
    public Transform flyTarget;
    public float flyToCharacterDuration = 0.35f;
    public Ease flyEase = Ease.InQuad;

    [HideInInspector] public bool hasReceivedItem = false;
    [HideInInspector] public bool isCorrectItemReceived = false;

    private Collider cachedCollider;

    /// <summary>Lưu collider và đặt nhân vật về hình ảnh bình thường khi khởi tạo.</summary>
    private void Awake()
    {
        cachedCollider = GetComponent<Collider>();
        ShowVisual(normalVisual);
    }

    /// <summary>Chỉ bật hình ảnh tương ứng với trạng thái hiện tại của nhân vật.</summary>
    private void ShowVisual(GameObject target)
    {
        if (normalVisual != null) normalVisual.SetActive(normalVisual == target);
        foreach (var v in itemVisuals)
        {
            if (v.visual != null) v.visual.SetActive(v.visual == target);
        }
    }

    /// <summary>Tìm cấu hình hình ảnh và âm thanh theo mã vật phẩm.</summary>
    private CharacterItemVisual FindVisual(string itemID)
    {
        foreach (var v in itemVisuals)
        {
            if (string.Equals(v.itemID, itemID, StringComparison.OrdinalIgnoreCase)) return v;
        }
        return null;
    }

    /// <summary>Đặt lại trạng thái nhân vật và tùy chọn bật lại collider.</summary>
    public void ResetCharacter(bool enableCollider = true)
    {
        hasReceivedItem = false;
        isCorrectItemReceived = false;
        ShowVisual(normalVisual);

        if (cachedCollider == null) cachedCollider = GetComponent<Collider>();
        cachedCollider.enabled = enableCollider;
    }

    /// <summary>Xử lý thao tác chạm nhân vật để mở cửa hàng hoặc nhận vật phẩm hiện tại.</summary>
    private void OnMouseDown()
    {
        // Đã thua ➔ tap bất kỳ nhân vật nào cũng ra Store
        if (ItemSequenceManager.Instance != null && ItemSequenceManager.Instance.isFailedMode)
        {
            ItemSequenceManager.Instance.OpenStore();
            return;
        }

        if (hasReceivedItem) return;

        if (ItemSequenceManager.Instance != null && ItemSequenceManager.Instance.isItemReady)
        {
            ItemSequenceManager.Instance.OnFirstItemDragged();

            DraggableItem currentItem = ItemSequenceManager.Instance.GetCurrentActiveItem();
            if (currentItem != null) OnItemDropped(currentItem);
        }
    }

    /// <summary>Nhận vật phẩm, xác định đáp án và phát hoạt ảnh cùng hiệu ứng hoàn tất.</summary>
    public bool OnItemDropped(DraggableItem item)
    {
        if (hasReceivedItem || item == null) return false;

        hasReceivedItem = true;
        isCorrectItemReceived = !string.IsNullOrEmpty(correctItemID) &&
                                string.Equals(correctItemID, item.itemID, StringComparison.OrdinalIgnoreCase);

        if (cachedCollider == null) cachedCollider = GetComponent<Collider>();
        cachedCollider.enabled = false;

        Collider itemCollider = item.GetComponent<Collider>();
        if (itemCollider != null) itemCollider.enabled = false;

        Vector3 targetPos = flyTarget != null ? flyTarget.position : transform.position;

        item.transform.DOMove(targetPos, flyToCharacterDuration)
            .SetEase(flyEase)
            .OnComplete(() =>
            {
                item.gameObject.SetActive(false);

                CharacterItemVisual entry = FindVisual(item.itemID);
                if (entry != null && entry.visual != null) ShowVisual(entry.visual);

                if (Ply_SoundManager.Ins != null)
                {
                    Ply_SoundManager.Ins.PlayFx(entry != null ? entry.fxType : defaultSound);
                }

                if (ItemSequenceManager.Instance != null)
                {
                    ItemSequenceManager.Instance.OnItemCompleted();
                }
            });

        return true;
    }
}
