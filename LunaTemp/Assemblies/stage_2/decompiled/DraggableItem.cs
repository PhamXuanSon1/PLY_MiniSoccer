using UnityEngine;

[RequireComponent(typeof(Collider))]
public class DraggableItem : MonoBehaviour
{
	[Header("Item Data")]
	public string itemID;

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
		if (itemLayer.value != 0)
		{
			return ((1 << base.gameObject.layer) & itemLayer.value) != 0;
		}
		int defaultItemLayer = LayerMask.NameToLayer("Item");
		if (defaultItemLayer != -1)
		{
			return base.gameObject.layer == defaultItemLayer;
		}
		return true;
	}

	private void OnMouseDown()
	{
		if (IsValidItemLayer() && (!(ItemSequenceManager.Instance != null) || ItemSequenceManager.Instance.isItemReady))
		{
			isDragging = true;
			originalPosition = base.transform.position;
			if (mainCamera == null)
			{
				mainCamera = Camera.main;
			}
			Vector3 mouseWorldPos = GetMouseWorldPos();
			offset = base.transform.position - mouseWorldPos;
			if (spriteRenderer != null)
			{
				originalSortingOrder = spriteRenderer.sortingOrder;
				spriteRenderer.sortingOrder = 100;
			}
			if (ItemSequenceManager.Instance != null)
			{
				ItemSequenceManager.Instance.OnFirstItemDragged();
			}
		}
	}

	private void OnMouseDrag()
	{
		if (isDragging)
		{
			Vector3 mouseWorldPos = GetMouseWorldPos();
			base.transform.position = mouseWorldPos + offset;
		}
	}

	private void OnMouseUp()
	{
		if (!isDragging)
		{
			return;
		}
		isDragging = false;
		if (spriteRenderer != null)
		{
			spriteRenderer.sortingOrder = originalSortingOrder;
		}
		Ray ray = mainCamera.ScreenPointToRay(Input.mousePosition);
		RaycastHit[] hits = Physics.RaycastAll(ray);
		bool droppedOnTarget = false;
		RaycastHit[] array = hits;
		for (int i = 0; i < array.Length; i++)
		{
			RaycastHit hit = array[i];
			if (hit.collider.gameObject == base.gameObject)
			{
				continue;
			}
			CharacterDropZone dropZone = hit.collider.GetComponent<CharacterDropZone>();
			if (dropZone != null)
			{
				droppedOnTarget = dropZone.OnItemDropped(this);
				if (droppedOnTarget)
				{
					break;
				}
			}
		}
		if (!droppedOnTarget)
		{
			base.transform.position = originalPosition;
		}
	}

	private Vector3 GetMouseWorldPos()
	{
		Vector3 mouseScreenPos = Input.mousePosition;
		mouseScreenPos.z = Mathf.Abs(mainCamera.transform.position.z - base.transform.position.z);
		return mainCamera.ScreenToWorldPoint(mouseScreenPos);
	}
}
