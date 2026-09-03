using UnityEngine;

public enum CameraFitMode
{
    [InspectorName("1. Theo Màn hình chuẩn (Reference Screen - Khuyên dùng)")]
    ReferenceScreen = 0,
    [InspectorName("2. Theo Vùng đối tượng (Target Area Bounds)")]
    TargetAreaBounds = 1
}

public enum MatchWidthMode
{
    [InspectorName("Chỉ mở rộng khi màn hẹp/dài hơn (Expand On Narrow - Khuyên dùng)")]
    ExpandOnNarrowScreens = 0,
    [InspectorName("Luôn khớp vừa khít chiều rộng (Always Match Width)")]
    AlwaysMatchWidth = 1
}

[ExecuteAlways]
[RequireComponent(typeof(Camera))]
[DefaultExecutionOrder(-50)] // Chạy trước các script neo vị trí (Screen Anchor) để Camera tính xong size trước
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

    [Header("=== 3. CÀI ĐẶT FIT CANVAS (UI) ===")]
    [VnLabel("Tự động Fit Canvas UI")]
    [Tooltip("Tự động đồng bộ các CanvasScaler để các Object UI trong Canvas không bao giờ bị tràn viền 2 bên!")]
    public bool autoFitCanvases = true;

    [VnLabel("Danh sách CanvasScaler")]
    [Tooltip("Nếu để trống, script sẽ tự động tìm và đồng bộ tất cả CanvasScaler trong Scene")]
    public UnityEngine.UI.CanvasScaler[] targetCanvasScalers;

    [Header("=== 4. CÀI ĐẶT CŨ THEO BOUNDS (TARGET AREA) ===")]
    [SerializeField] private Transform targetArea;
    [SerializeField] private float paddingLandscape = 0.6f;
    [SerializeField] private float paddingPortrait = 0.22f;
    [SerializeField] private float extraPaddingSmallScreen = 0.12f;
    [SerializeField] private int smallScreenThreshold = 720;

    [Header("=== 4. TỰ ĐỘNG CẬP NHẬT ===")]
    [SerializeField] private bool autoUpdateOnResize = true;
    [SerializeField] private bool adjustInEditMode = true;

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
        if (!Application.isPlaying && !adjustInEditMode) return;

        if (autoUpdateOnResize)
        {
            if (Screen.width != lastScreenWidth || Screen.height != lastScreenHeight)
            {
                UpdateCameraNow();
            }
        }
    }

    [ContextMenu("1. Lấy Màn hình & Camera hiện tại làm Màn hình chuẩn")]
    public void CaptureCurrentAsReference()
    {
        if (cam == null) cam = GetComponent<Camera>();
        referenceResolution = new Vector2(Screen.width, Screen.height);
        if (cam != null)
        {
            referenceOrthographicSize = cam.orthographicSize;
        }
        UpdateCameraNow();
        Debug.Log($"[AutoCameraFit] ĐÃ LƯU MÀN HÌNH CHUẨN: {referenceResolution.x}x{referenceResolution.y}, OrthoSize: {referenceOrthographicSize}");
    }

    [ContextMenu("2. Đặt chuẩn màn dọc phổ thông (1080 x 1920)")]
    public void SetDefaultPortraitReference()
    {
        if (cam == null) cam = GetComponent<Camera>();
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
        if (cam == null) cam = GetComponent<Camera>();
        if (cam == null) return;

        if (fitMode == CameraFitMode.ReferenceScreen)
        {
            FitToReferenceScreen();
        }
        else
        {
            FitToTargetAreaBounds();
        }

        if (autoFitCanvases)
        {
            UpdateCanvasesFit();
        }

        lastScreenWidth = Screen.width;
        lastScreenHeight = Screen.height;
    }

    public void UpdateCanvasesFit()
    {
        if (referenceResolution.x <= 0f || referenceResolution.y <= 0f) return;
        if (Screen.width <= 0 || Screen.height <= 0) return;

        if (targetCanvasScalers == null || targetCanvasScalers.Length == 0)
        {
            targetCanvasScalers = FindObjectsOfType<UnityEngine.UI.CanvasScaler>();
        }

        var scalers = targetCanvasScalers;
        if (scalers == null || scalers.Length == 0) return;

        float refAspect = referenceResolution.x / referenceResolution.y;
        float currentAspect = (float)Screen.width / Screen.height;

        float targetMatch = 1f; // Mặc định match Height nếu màn rộng hơn
        if (widthMode == MatchWidthMode.AlwaysMatchWidth)
        {
            targetMatch = 0f; // Luôn luôn match Width (0f) để UI co nhỏ theo chiều ngang
        }
        else // ExpandOnNarrowScreens
        {
            // Nếu màn hình hẹp hơn màn chuẩn (như iPhone dài, màn 9:19.5, 9:20):
            // Ép Match Width (0f) để Canvas co lại vừa khít 2 bên viền, KHÔNG BỊ TRÀN!
            // Nếu màn rộng hơn (như iPad, màn ngang): Match Height (1f) để UI không bị phình to
            targetMatch = (currentAspect < refAspect) ? 0f : 1f;
        }

        foreach (var scaler in scalers)
        {
            if (scaler == null) continue;

            if (scaler.uiScaleMode == UnityEngine.UI.CanvasScaler.ScaleMode.ScaleWithScreenSize)
            {
                scaler.referenceResolution = referenceResolution;
                scaler.screenMatchMode = UnityEngine.UI.CanvasScaler.ScreenMatchMode.MatchWidthOrHeight;
                scaler.matchWidthOrHeight = targetMatch;
            }
        }
    }

    private void FitToReferenceScreen()
    {
        if (referenceResolution.x <= 0f || referenceResolution.y <= 0f) return;
        if (Screen.width <= 0 || Screen.height <= 0) return;

        float refAspect = referenceResolution.x / referenceResolution.y;
        float currentAspect = (float)Screen.width / Screen.height;

        if (widthMode == MatchWidthMode.AlwaysMatchWidth)
        {
            cam.orthographicSize = referenceOrthographicSize * (refAspect / currentAspect);
        }
        else // ExpandOnNarrowScreens
        {
            // Nếu màn hình hiện tại hẹp ngang hơn màn chuẩn (currentAspect < refAspect)
            // Ta tăng orthographicSize để chiều rộng nhìn thấy (Visible Width) không bị co lại,
            // giữ cho tất cả các object không bao giờ bị tràn khỏi viền trái/phải!
            if (currentAspect < refAspect)
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
        if (targetArea == null) return;
        var renderers = targetArea.GetComponentsInChildren<Renderer>();
        if (renderers.Length == 0) return;

        bool isLandscape = Screen.width > Screen.height;
        float padding = isLandscape ? paddingLandscape : paddingPortrait;

        if (Screen.height < smallScreenThreshold || Screen.width < smallScreenThreshold)
        {
            padding += extraPaddingSmallScreen;
        }

        Bounds bounds = renderers[0].bounds;
        foreach (var r in renderers)
            bounds.Encapsulate(r.bounds);

        float screenRatio = (float)Screen.width / Screen.height;
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
                tallScreenObject.localPosition = new Vector3(
                    tallScreenObject.localPosition.x, 
                    originalObjectY + tallScreenYOffset, 
                    tallScreenObject.localPosition.z);
            }
            else
            {
                tallScreenObject.localPosition = new Vector3(
                    tallScreenObject.localPosition.x, 
                    originalObjectY, 
                    tallScreenObject.localPosition.z);
            }
        }

#if UNITY_EDITOR
        cam.transform.position = new Vector3(
            bounds.center.x,
            bounds.center.y,
            cam.transform.position.z
        );
#endif
    }
}
