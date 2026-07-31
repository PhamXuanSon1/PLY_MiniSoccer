using DG.Tweening;
using UnityEngine;

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

	[HideInInspector]
	public bool hasReceivedItem = false;

	[HideInInspector]
	public bool isCorrectItemReceived = false;

	private void Awake()
	{
		spriteRenderer = GetComponent<SpriteRenderer>();
		if (characterData != null && characterData.normalSprite != null)
		{
			spriteRenderer.sprite = characterData.normalSprite;
		}
	}

	public void ResetCharacter(bool enableCollider = true)
	{
		hasReceivedItem = false;
		isCorrectItemReceived = false;
		if (characterData != null && characterData.normalSprite != null)
		{
			if (spriteRenderer == null)
			{
				spriteRenderer = GetComponent<SpriteRenderer>();
			}
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
		if (hasReceivedItem || item == null || characterData == null)
		{
			return false;
		}
		hasReceivedItem = true;
		isCorrectItemReceived = characterData.IsCorrectItem(item.itemID);
		Collider charCollider = GetComponent<Collider>();
		if (charCollider != null)
		{
			charCollider.enabled = false;
		}
		Collider itemCollider = item.GetComponent<Collider>();
		if (itemCollider != null)
		{
			itemCollider.enabled = false;
		}
		item.transform.DOMove(base.transform.position, flyToCharacterDuration).SetEase(flyEase).OnComplete(delegate
		{
			item.gameObject.SetActive(false);
			Sprite spriteForItem = characterData.GetSpriteForItem(item.itemID);
			if (spriteForItem != null)
			{
				spriteRenderer.sprite = spriteForItem;
			}
			if (Ply_Singleton<Ply_SoundManager>.Ins != null)
			{
				FxType fxTypeForItem = characterData.GetFxTypeForItem(item.itemID);
				Ply_Singleton<Ply_SoundManager>.Ins.PlayFx(fxTypeForItem);
			}
			if (ItemSequenceManager.Instance != null)
			{
				ItemSequenceManager.Instance.OnItemCompleted();
			}
		});
		return true;
	}
}
