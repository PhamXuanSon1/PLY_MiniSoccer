using UnityEngine;
using UnityEngine.UI;

[ExecuteAlways]
[DisallowMultipleComponent]
public class SpriteSizeAdapter : MonoBehaviour
{
	public enum FitMode
	{
		[Tooltip("Giữ nguyên tỉ lệ ảnh, thu phóng sao cho toàn bộ ảnh nằm gọn bên trong khung (Không bị méo)")]
		FitInside,
		[Tooltip("Giữ nguyên tỉ lệ ảnh, thu phóng phủ kín toàn bộ khung (Phù hợp khi có Mask cắt phần thừa)")]
		Envelope,
		[Tooltip("Kéo giãn ảnh vừa đúng kích thước khung (Có thể bị méo tỉ lệ)")]
		ExactStretch
	}

	[Header("Cấu hình kích thước mục tiêu")]
	[Tooltip("Kích thước chuẩn mong muốn (Width, Height).\n- Với SpriteRenderer: tính theo đơn vị Unity Unit (vd: 2 x 3).\n- Với UI Image: tính theo đơn vị Pixel (vd: 200 x 300).")]
	public Vector2 targetSize = new Vector2(2f, 2f);

	[Tooltip("Chế độ căn chỉnh hình ảnh")]
	public FitMode fitMode = FitMode.FitInside;

	[Header("Tự động")]
	[Tooltip("Tự động căn chỉnh khi chạy game hoặc khi có thay đổi trong Inspector")]
	public bool autoFitOnStart = true;

	[Header("Gizmos (Hỗ trợ căn chỉnh trong Scene)")]
	public bool showGizmos = true;

	public Color gizmoColor = new Color(0f, 1f, 0.4f, 0.6f);

	private SpriteRenderer _spriteRenderer;

	private Image _uiImage;

	private RectTransform _rectTransform;

	private void Awake()
	{
		CacheComponents();
	}

	private void Start()
	{
		if (autoFitOnStart)
		{
			ApplyFit();
		}
	}

	private void CacheComponents()
	{
		if (_spriteRenderer == null)
		{
			_spriteRenderer = GetComponent<SpriteRenderer>();
		}
		if (_uiImage == null)
		{
			_uiImage = GetComponent<Image>();
		}
		if (_rectTransform == null)
		{
			_rectTransform = GetComponent<RectTransform>();
		}
	}

	public void SetSprite(Sprite newSprite)
	{
		CacheComponents();
		if (_spriteRenderer != null)
		{
			_spriteRenderer.sprite = newSprite;
		}
		else if (_uiImage != null)
		{
			_uiImage.sprite = newSprite;
		}
		ApplyFit();
	}

	[ContextMenu("Apply Fit Now")]
	public void ApplyFit()
	{
		CacheComponents();
		if (_spriteRenderer != null)
		{
			FitSpriteRenderer();
		}
		else if (_uiImage != null)
		{
			FitUIImage();
		}
	}

	private void FitSpriteRenderer()
	{
		if (_spriteRenderer == null || _spriteRenderer.sprite == null || targetSize.x <= 0f || targetSize.y <= 0f)
		{
			return;
		}
		Vector2 spriteOriginalSize = _spriteRenderer.sprite.bounds.size;
		if (!(spriteOriginalSize.x <= 0f) && !(spriteOriginalSize.y <= 0f))
		{
			float scaleX = targetSize.x / spriteOriginalSize.x;
			float scaleY = targetSize.y / spriteOriginalSize.y;
			switch (fitMode)
			{
			case FitMode.FitInside:
			{
				float minScale = Mathf.Min(scaleX, scaleY);
				base.transform.localScale = new Vector3(minScale, minScale, 1f);
				break;
			}
			case FitMode.Envelope:
			{
				float maxScale = Mathf.Max(scaleX, scaleY);
				base.transform.localScale = new Vector3(maxScale, maxScale, 1f);
				break;
			}
			case FitMode.ExactStretch:
				base.transform.localScale = new Vector3(scaleX, scaleY, 1f);
				break;
			}
		}
	}

	private void FitUIImage()
	{
		if (_uiImage == null || _uiImage.sprite == null || _rectTransform == null || targetSize.x <= 0f || targetSize.y <= 0f)
		{
			return;
		}
		Rect spriteRect = _uiImage.sprite.rect;
		if (spriteRect.width <= 0f || spriteRect.height <= 0f)
		{
			return;
		}
		float aspect = spriteRect.width / spriteRect.height;
		float targetAspect = targetSize.x / targetSize.y;
		switch (fitMode)
		{
		case FitMode.FitInside:
			if (aspect > targetAspect)
			{
				_rectTransform.sizeDelta = new Vector2(targetSize.x, targetSize.x / aspect);
			}
			else
			{
				_rectTransform.sizeDelta = new Vector2(targetSize.y * aspect, targetSize.y);
			}
			break;
		case FitMode.Envelope:
			if (aspect > targetAspect)
			{
				_rectTransform.sizeDelta = new Vector2(targetSize.y * aspect, targetSize.y);
			}
			else
			{
				_rectTransform.sizeDelta = new Vector2(targetSize.x, targetSize.x / aspect);
			}
			break;
		case FitMode.ExactStretch:
			_rectTransform.sizeDelta = targetSize;
			break;
		}
	}

	private void OnDrawGizmosSelected()
	{
		if (showGizmos && !(targetSize.x <= 0f) && !(targetSize.y <= 0f))
		{
			Gizmos.color = gizmoColor;
			if (GetComponent<SpriteRenderer>() != null)
			{
				Vector3 center = base.transform.position;
				Vector3 size = new Vector3(targetSize.x, targetSize.y, 0.05f);
				Gizmos.DrawWireCube(center, size);
			}
		}
	}

	public static void SetSpriteRendererSize(SpriteRenderer sr, Sprite sprite, Vector2 targetSize, FitMode mode = FitMode.FitInside)
	{
		if (sr == null)
		{
			return;
		}
		sr.sprite = sprite;
		if (sprite == null || targetSize.x <= 0f || targetSize.y <= 0f)
		{
			return;
		}
		Vector2 size = sprite.bounds.size;
		if (!(size.x <= 0f) && !(size.y <= 0f))
		{
			float scaleX = targetSize.x / size.x;
			float scaleY = targetSize.y / size.y;
			float num;
			switch (mode)
			{
			default:
				num = scaleX;
				break;
			case FitMode.Envelope:
				num = Mathf.Max(scaleX, scaleY);
				break;
			case FitMode.FitInside:
				num = Mathf.Min(scaleX, scaleY);
				break;
			}
			float chosenScale = num;
			if (mode == FitMode.ExactStretch)
			{
				sr.transform.localScale = new Vector3(scaleX, scaleY, 1f);
			}
			else
			{
				sr.transform.localScale = new Vector3(chosenScale, chosenScale, 1f);
			}
		}
	}
}
