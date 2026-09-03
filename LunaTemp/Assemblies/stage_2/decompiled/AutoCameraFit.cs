using UnityEngine;

[ExecuteAlways]
[RequireComponent(typeof(Camera))]
[DefaultExecutionOrder(-50)]
public class AutoCameraFit : MonoBehaviour
{
	[Header("=== 1. CHẾ ĐỘ FIT CAMERA ===")]
	[VnLabel("Chế độ Fit Camera")]
	public CameraFitMode fitMode = CameraFitMode.ReferenceScreen;

	[Header("=== 2. CÀI ĐẶT MÀN HÌNH CHUẨN (REFERENCE SCREEN) ===")]
	[VnLabel("Độ phân giải chuẩn (Reference Res)")]
	[Tooltip("Độ phân giải màn hình bạn đã căn chỉnh game vừa vặn đẹp nhất (Mặc định: 1080 x 1920 hoặc tỉ lệ 9 x 16)")]
	public Vector2 referenceResolution = new Vector2(1080f, 1920f);

	[VnLabel("Camera Size ở màn chuẩn")]
	[Tooltip("Orthographic Size của Camera ở màn hình chuẩn bạn đã căn chỉnh (VD: 12.18). Khi đổi sang màn khác, Camera sẽ tự động tính toán từ số này để chiều rộng luôn vừa khít.")]
	public float referenceOrthographicSize = 12.175557f;

	[VnLabel("Cách khớp chiều rộng")]
	[Tooltip("ExpandOnNarrowScreens (Khuyên dùng): Khi gặp màn hình dài/hẹp hơn màn chuẩn (như iPhone dài, Samsung), Camera sẽ tự động zoom out để chiều rộng KHÔNG BAO GIỜ BỊ TRÀN 2 VIỀN TRÁI/PHẢI!\nAlwaysMatchWidth: Luôn luôn ép vừa khít chiều rộng trong mọi tỉ lệ màn hình.")]
	public MatchWidthMode widthMode = MatchWidthMode.ExpandOnNarrowScreens;

	[Header("=== 3. CÀI ĐẶT CŨ THEO BOUNDS (TARGET AREA) ===")]
	[SerializeField]
	private Transform targetArea;

	[SerializeField]
	private float paddingLandscape = 0.6f;

	[SerializeField]
	private float paddingPortrait = 0.22f;

	[SerializeField]
	private float extraPaddingSmallScreen = 0.12f;

	[SerializeField]
	private int smallScreenThreshold = 720;

	[Header("=== 4. TỰ ĐỘNG CẬP NHẬT ===")]
	[SerializeField]
	private bool autoUpdateOnResize = true;

	[SerializeField]
	private bool adjustInEditMode = true;

	[Header("Tall Screen Adjustments (Legacy)")]
	public Transform tallScreenObject;

	public float tallScreenRatioThreshold = 0.49f;

	public float tallScreenYOffset = 1f;

	private float originalObjectY;

	private bool hasOriginalObjectY = false;

	private Camera cam;

	private int lastScreenWidth;

	private int lastScreenHeight;

	public GameObject canvasBtn;

	private void Awake()
	{
		cam = GetComponent<Camera>();
		UpdateCameraNow();
	}

	private void Start()
	{
		UpdateCameraNow();
	}

	private void Update()
	{
		if ((Application.isPlaying || adjustInEditMode) && autoUpdateOnResize && (Screen.width != lastScreenWidth || Screen.height != lastScreenHeight))
		{
			UpdateCameraNow();
		}
	}

	[ContextMenu("1. Lấy Màn hình & Camera hiện tại làm Màn hình chuẩn")]
	public void CaptureCurrentAsReference()
	{
		if (cam == null)
		{
			cam = GetComponent<Camera>();
		}
		referenceResolution = new Vector2(Screen.width, Screen.height);
		if (cam != null)
		{
			referenceOrthographicSize = cam.orthographicSize;
		}
		Debug.Log($"[AutoCameraFit] ĐÃ LƯU MÀN HÌNH CHUẨN: {referenceResolution.x}x{referenceResolution.y}, OrthoSize: {referenceOrthographicSize}");
	}

	[ContextMenu("2. Đặt chuẩn màn dọc phổ thông (1080 x 1920)")]
	public void SetDefaultPortraitReference()
	{
		if (cam == null)
		{
			cam = GetComponent<Camera>();
		}
		referenceResolution = new Vector2(1080f, 1920f);
		if (cam != null)
		{
			referenceOrthographicSize = cam.orthographicSize;
		}
		Debug.Log($"[AutoCameraFit] Đã đặt chuẩn 1080x1920, OrthoSize: {referenceOrthographicSize}");
	}

	[ContextMenu("Update Camera Fit")]
	public void UpdateCameraNow()
	{
		if (cam == null)
		{
			cam = GetComponent<Camera>();
		}
		if (!(cam == null))
		{
			if (fitMode == CameraFitMode.ReferenceScreen)
			{
				FitToReferenceScreen();
			}
			else
			{
				FitToTargetAreaBounds();
			}
			lastScreenWidth = Screen.width;
			lastScreenHeight = Screen.height;
		}
	}

	private void FitToReferenceScreen()
	{
		if (!(referenceResolution.x <= 0f) && !(referenceResolution.y <= 0f) && Screen.width > 0 && Screen.height > 0)
		{
			float refAspect = referenceResolution.x / referenceResolution.y;
			float currentAspect = (float)Screen.width / (float)Screen.height;
			if (widthMode == MatchWidthMode.AlwaysMatchWidth)
			{
				cam.orthographicSize = referenceOrthographicSize * (refAspect / currentAspect);
			}
			else if (currentAspect < refAspect)
			{
				cam.orthographicSize = referenceOrthographicSize * (refAspect / currentAspect);
			}
			else
			{
				cam.orthographicSize = referenceOrthographicSize;
			}
		}
	}

	private void FitToTargetAreaBounds()
	{
		if (targetArea == null)
		{
			return;
		}
		Renderer[] renderers = targetArea.GetComponentsInChildren<Renderer>();
		if (renderers.Length == 0)
		{
			return;
		}
		float padding = ((Screen.width > Screen.height) ? paddingLandscape : paddingPortrait);
		if (Screen.height < smallScreenThreshold || Screen.width < smallScreenThreshold)
		{
			padding += extraPaddingSmallScreen;
		}
		Bounds bounds = renderers[0].bounds;
		Renderer[] array = renderers;
		foreach (Renderer r in array)
		{
			bounds.Encapsulate(r.bounds);
		}
		float screenRatio = (float)Screen.width / (float)Screen.height;
		float targetRatio = bounds.size.x / bounds.size.y;
		if (screenRatio >= targetRatio)
		{
			cam.orthographicSize = bounds.size.y / 2f + padding;
		}
		else
		{
			float differenceInSize = targetRatio / screenRatio;
			cam.orthographicSize = bounds.size.y / 2f * differenceInSize + padding;
		}
		if (tallScreenObject != null)
		{
			if (!hasOriginalObjectY)
			{
				originalObjectY = tallScreenObject.localPosition.y;
				hasOriginalObjectY = true;
			}
			if (screenRatio <= tallScreenRatioThreshold)
			{
				tallScreenObject.localPosition = new Vector3(tallScreenObject.localPosition.x, originalObjectY + tallScreenYOffset, tallScreenObject.localPosition.z);
			}
			else
			{
				tallScreenObject.localPosition = new Vector3(tallScreenObject.localPosition.x, originalObjectY, tallScreenObject.localPosition.z);
			}
		}
	}
}
