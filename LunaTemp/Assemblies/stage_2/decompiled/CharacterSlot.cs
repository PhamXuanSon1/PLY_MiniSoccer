using System;
using System.Collections.Generic;
using DG.Tweening;
using UnityEngine;

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

	[HideInInspector]
	public bool hasReceivedItem = false;

	[HideInInspector]
	public bool isCorrectItemReceived = false;

	private Collider cachedCollider;

	private void Awake()
	{
		cachedCollider = GetComponent<Collider>();
		ShowVisual(normalVisual);
	}

	private void ShowVisual(GameObject target)
	{
		if (normalVisual != null)
		{
			normalVisual.SetActive(normalVisual == target);
		}
		foreach (CharacterItemVisual v in itemVisuals)
		{
			if (v.visual != null)
			{
				v.visual.SetActive(v.visual == target);
			}
		}
	}

	private CharacterItemVisual FindVisual(string itemID)
	{
		foreach (CharacterItemVisual v in itemVisuals)
		{
			if (string.Equals(v.itemID, itemID, StringComparison.OrdinalIgnoreCase))
			{
				return v;
			}
		}
		return null;
	}

	public void ResetCharacter(bool enableCollider = true)
	{
		hasReceivedItem = false;
		isCorrectItemReceived = false;
		ShowVisual(normalVisual);
		if (cachedCollider == null)
		{
			cachedCollider = GetComponent<Collider>();
		}
		cachedCollider.enabled = enableCollider;
	}

	private void OnMouseDown()
	{
		if (ItemSequenceManager.Instance != null && ItemSequenceManager.Instance.isFailedMode)
		{
			ItemSequenceManager.Instance.OpenStore();
		}
		else if (!hasReceivedItem && ItemSequenceManager.Instance != null && ItemSequenceManager.Instance.isItemReady)
		{
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
		if (hasReceivedItem || item == null)
		{
			return false;
		}
		hasReceivedItem = true;
		isCorrectItemReceived = !string.IsNullOrEmpty(correctItemID) && string.Equals(correctItemID, item.itemID, StringComparison.OrdinalIgnoreCase);
		if (cachedCollider == null)
		{
			cachedCollider = GetComponent<Collider>();
		}
		cachedCollider.enabled = false;
		Collider itemCollider = item.GetComponent<Collider>();
		if (itemCollider != null)
		{
			itemCollider.enabled = false;
		}
		Vector3 targetPos = ((flyTarget != null) ? flyTarget.position : base.transform.position);
		item.transform.DOMove(targetPos, flyToCharacterDuration).SetEase(flyEase).OnComplete(delegate
		{
			item.gameObject.SetActive(false);
			CharacterItemVisual characterItemVisual = FindVisual(item.itemID);
			if (characterItemVisual != null && characterItemVisual.visual != null)
			{
				ShowVisual(characterItemVisual.visual);
			}
			if (Ply_Singleton<Ply_SoundManager>.Ins != null)
			{
				Ply_Singleton<Ply_SoundManager>.Ins.PlayFx(characterItemVisual?.fxType ?? defaultSound);
			}
			if (ItemSequenceManager.Instance != null)
			{
				ItemSequenceManager.Instance.OnItemCompleted();
			}
		});
		return true;
	}
}
