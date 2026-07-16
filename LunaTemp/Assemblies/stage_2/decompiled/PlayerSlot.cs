using UnityEngine;

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
		originalPosition = base.transform.position;
		originalScale = base.transform.localScale;
		if (lightEffect != null)
		{
			lightEffect.SetActive(false);
		}
	}

	public void SetupSlot(FavoritePlayerCard data)
	{
		currentData = data;
		if (spriteRenderer != null && data != null)
		{
			spriteRenderer.sprite = data.halfBodySprite;
		}
	}
}
