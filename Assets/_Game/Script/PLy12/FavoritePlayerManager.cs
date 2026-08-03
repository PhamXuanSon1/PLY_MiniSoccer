using System.Collections.Generic;
using UnityEngine;
using DG.Tweening; // Thư viện DOTween
using Luna.Unity; // Thư viện Luna để ra Store

public class FavoritePlayerManager : MonoBehaviour
{
    // Singleton để các Slot dễ dàng gọi hàm mà không cần FindObject
    public static FavoritePlayerManager Instance { get; private set; }

    [Header("Cài đặt Slot trên màn hình")]
    [Tooltip("Layer chứa các Slot để bắt sự kiện click 3D (Ví dụ bạn tạo layer tên 'Slot' và gán vào đây)")]
    public LayerMask slotLayerMask;

    [Tooltip("Kéo Object Slot 1 vào đây")]
    public PlayerSlot slotA;
    [Tooltip("Kéo Object Slot 2 vào đây")]
    public PlayerSlot slotB;

    [Space(10)]
    [Header("Âm thanh (Audio)")]
    [Tooltip("Kéo Component AudioSource vào đây (Nếu để trống code tự tạo 1 cái)")]
    public AudioSource audioSource;
    [Tooltip("Âm thanh đọc chữ 'OR' (Hoặc)")]
    public AudioClip orAudio;
    [Tooltip("Âm thanh Ting (Khi người chơi bấm chọn thẻ)")]
    public AudioClip clickAudio;

    [Header("Danh sách Cầu thủ tham gia")]
    [Tooltip("Kéo toàn bộ ScriptableObject cầu thủ (FavoritePlayerCard) vào đây")]
    public List<FavoritePlayerCard> playerList;

    [Header("Màn hình Kết Thúc (Endcard)")]
    [Tooltip("Kéo script Endcard vào đây")]
    public FavoritePlayerEndcard endcardUI;

    [Header("--- CÀI ĐẶT HIỆU ỨNG THÙNG RÁC (SLOT BỊ LOẠI) ---")]
    [Space(5)]
    [Header("1. Quỹ đạo bay (DOTween)")]
    [Tooltip("Điểm đến (Thùng rác) của lá bài bị loại")]
    public Transform discardTarget;
    [Tooltip("Thời gian bay ra góc")]
    public float moveDuration = 0.5f;
    [Tooltip("Độ cong của vòng cung (Số càng lớn bay càng vút lên cao)")]
    public float arcHeight = 3f;

    [Space(5)]
    [Header("2. Phóng to (Scale Up)")]
    [Tooltip("Độ to khi phóng ra (1.1 = to hơn 10%)")]
    public float scaleUpSize = 1.1f;
    [Tooltip("Thời gian phóng to")]
    public float scaleUpDuration = 0.15f;

    [Space(5)]
    [Header("3. Thu nhỏ & Biến mất (Scale Down)")]
    [Tooltip("Thời gian thu nhỏ dần về 0 và biến mất")]
    public float scaleDownDuration = 0.2f;

    [Space(5)]
    [Header("4. Hồi sinh (Slot mới xuất hiện)")]
    [Tooltip("Kích thước lúc bắt đầu hiện ra (0.8 = 80%)")]
    public float appearStartScale = 0.8f;
    [Tooltip("Kích thước phình to cực đại (1.1 = 110%)")]
    public float appearMaxScale = 1.1f;
    [Tooltip("Thời gian phình to")]
    public float appearUpDuration = 0.15f;
    [Tooltip("Thời gian nảy thu về kích thước chuẩn (1.0)")]
    public float appearDownDuration = 0.1f;

    [Space(10)]
    [Header("--- CÀI ĐẶT HIỆU ỨNG CLICK (SLOT ĐƯỢC CHỌN) ---")]
    [Space(5)]
    [Tooltip("Mức độ phóng to khi click (1.1 = 110% kích thước gốc)")]
    public float clickScaleSize = 1.1f;
    [Tooltip("Thời gian nhún xuống")]
    public float clickDownDuration = 0.1f;
    [Tooltip("Thời gian nảy lên lại")]
    public float clickUpDuration = 0.15f;

    private bool isAnimating = false; // Cờ khoá click bậy lúc đang chạy hiệu ứng

    [Header("UI Panels & Effects")]
    [Tooltip("Các object muốn BẬT LÊN NGAY LẬP TỨC cùng lúc với Endcard")]
    public GameObject[] extraObjectsToActivate;

    [Tooltip("Các object muốn TẮT ĐI NGAY LẬP TỨC cùng lúc với Endcard")]
    public GameObject[] extraObjectsToDeactivate;

    [Header("Hành động đếm ngược (Ví dụ: Đợi 3 giây)")]
    [Tooltip("Thời gian đếm ngược (tính bằng giây)")]
    public float waitTime = 3f;
    
    [Tooltip("Các object sẽ tự động BẬT LÊN sau khi hết thời gian đếm ngược")]
    public GameObject[] objectsToTurnOnAfterWait;
    
    [Tooltip("Các object sẽ tự động TẮT ĐI sau khi hết thời gian đếm ngược")]
    public GameObject[] objectsToTurnOffAfterWait;

    private int currentIndex = 0; // Đánh dấu xem đã lôi đến cầu thủ thứ mấy ra rồi
    private bool canClickToStoreGlobal = false; // Cờ theo dõi click ra Store toàn cục

    private Sequence globalIdleSeq; // Chuỗi hiệu ứng thở luân phiên cho 2 Slot
    private Coroutine nameSequenceRoutine; // Biến lưu trữ tiến trình đọc tên
    private bool isGameStarted = false; // Đánh dấu xem người chơi đã click lần đầu (Tap to play) chưa
    private bool challenge25Tracked = false;
    private bool challenge50Tracked = false;
    private bool challenge75Tracked = false;

    private void Awake()
    {
        AppLovinAnalytics.Track(ALEvent.LOADING);
        if (Instance == null) Instance = this;
        else Destroy(gameObject);

        // Nếu chưa gán AudioSource thì tự động tạo 1 cái
        if (audioSource == null)
        {
            audioSource = gameObject.AddComponent<AudioSource>();
        }
    }

    private void Update()
    {
        if (Input.GetMouseButtonDown(0) && !isGameStarted && !canClickToStoreGlobal)
        {
            isGameStarted = true;
            AppLovinAnalytics.Track(ALEvent.CHALLENGE_STARTED);
        }

        // 1. Kiểm tra click toàn cục ra Store (chỉ xảy ra khi game đã kết thúc và đếm ngược xong)
        if (canClickToStoreGlobal && Input.GetMouseButtonDown(0))
        {
            canClickToStoreGlobal = false; // Chỉ chạy 1 lần
            Debug.Log("🎉 Chuyển hướng ra Store tải game!");
            AppLovinAnalytics.Track(ALEvent.CTA_CLICKED);
            LifeCycle.GameEnded();
            Playable.InstallFullGame();
            return; // Đã ra store thì ngưng xử lý bên dưới
        }

        // 2. Bắn Raycast 3D để chọn Slot (khi game vẫn đang chơi và không bị khoá animation)
        if (!isAnimating && !canClickToStoreGlobal && Input.GetMouseButtonDown(0))
        {
            // Bắn một tia từ màn hình vào camera
            Ray ray = Camera.main.ScreenPointToRay(Input.mousePosition);
            RaycastHit hit;

            // Kiểm tra xem tia đó có đụng trúng cái Collider 3D nào thuộc lớp (Layer) slotLayerMask hay không
            if (Physics.Raycast(ray, out hit, 100f, slotLayerMask))
            {
                // Nếu đụng trúng, lấy component PlayerSlot từ vật thể đó ra
                PlayerSlot clickedSlot = hit.collider.GetComponent<PlayerSlot>();
                if (clickedSlot != null && clickedSlot.currentData != null)
                {
                    OnPlayerSelected(clickedSlot);
                }
            }
        }
    }

    private void Start()
    {
        AppLovinAnalytics.Track(ALEvent.LOADED);
        AppLovinAnalytics.Track(ALEvent.DISPLAYED);

        // Khởi tạo 2 cầu thủ đầu tiên ra sân nếu danh sách đủ dài
        if (playerList != null && playerList.Count >= 2)
        {
            slotA.SetupSlot(playerList[0]);
            slotB.SetupSlot(playerList[1]);
            currentIndex = 2; // Đã dùng 2 người đầu (index 0 và 1), người tiếp theo đợi sẵn là index 2

            // Bắt đầu nhịp thở luân phiên
            PlayGlobalIdleAnimation();

            // Tự động đọc tên 2 cầu thủ đầu tiên khi bắt đầu game
            PlayNameSequence(slotA.currentData.nameAudio, slotB.currentData.nameAudio);
        }
        else
        {
            AppLovinAnalytics.Track(ALEvent.CHALLENGE_FAILED);
            Debug.LogError("LỖI: Danh sách cầu thủ phải có ít nhất 2 người trở lên!");
        }
    }

    // --- QUẢN LÝ HIỆU ỨNG THỞ LUÂN PHIÊN ---
    private void PlayGlobalIdleAnimation()
    {
        if (globalIdleSeq != null && globalIdleSeq.IsActive()) return;

        // Trả về kích thước chuẩn trước khi chạy vòng lặp mới
        if (slotA != null) slotA.transform.localScale = slotA.originalScale;
        if (slotB != null) slotB.transform.localScale = slotB.originalScale;

        globalIdleSeq = DOTween.Sequence();
        
        // Thở Slot A (co lại rồi nảy ra)
        if (slotA != null)
        {
            globalIdleSeq.Append(slotA.transform.DOScale(slotA.originalScale * slotA.idleScale, slotA.idleDuration).SetLoops(2, LoopType.Yoyo).SetEase(Ease.InOutSine));
        }

        // Sau khi Slot A thở xong, tới lượt Slot B thở
        if (slotB != null)
        {
            globalIdleSeq.Append(slotB.transform.DOScale(slotB.originalScale * slotB.idleScale, slotB.idleDuration).SetLoops(2, LoopType.Yoyo).SetEase(Ease.InOutSine));
        }

        // Lặp vô hạn cả cái chuỗi A thở -> B thở
        globalIdleSeq.SetLoops(-1);
    }

    private void StopGlobalIdleAnimation()
    {
        if (globalIdleSeq != null)
        {
            globalIdleSeq.Kill();
            globalIdleSeq = null;
        }

        // Đảm bảo không bị méo hình khi ngắt ngang
        if (slotA != null) slotA.transform.localScale = slotA.originalScale;
        if (slotB != null) slotB.transform.localScale = slotB.originalScale;
    }

    // --- QUẢN LÝ ÂM THANH ---
    private void PlayNameSequence(AudioClip clipA, AudioClip clipB)
    {
        if (nameSequenceRoutine != null) StopCoroutine(nameSequenceRoutine);
        nameSequenceRoutine = StartCoroutine(NameSequenceRoutine(clipA, clipB));
    }

    private System.Collections.IEnumerator NameSequenceRoutine(AudioClip clipA, AudioClip clipB)
    {
        if (audioSource == null) yield break;

        // Đọc tên người A
        if (clipA != null)
        {
            audioSource.PlayOneShot(clipA);
            yield return new WaitForSeconds(clipA.length);
        }

        // Đọc chữ OR
        if (orAudio != null)
        {
            audioSource.PlayOneShot(orAudio);
            yield return new WaitForSeconds(orAudio.length);
        }

        // Đọc tên người B
        if (clipB != null)
        {
            audioSource.PlayOneShot(clipB);
        }
    }

    // Hàm này được gọi bởi Slot khi người chơi bấm chọn nó
    public void OnPlayerSelected(PlayerSlot chosenSlot)
    {
        if (isAnimating) return; // Nếu đang chạy hiệu ứng thì không cho bấm liên tiếp

        // Khoá click ngay lập tức
        isAnimating = true;

        // BẮT BUỘC DỪNG HIỆU ỨNG THỞ LUÂN PHIÊN KHI CÓ CLICK
        StopGlobalIdleAnimation();

        // NGẮT ÂM THANH ĐANG ĐỌC (NẾU CÓ) VÀ PHÁT ÂM THANH CỦA THẺ VỪA CHỌN
        if (nameSequenceRoutine != null)
        {
            StopCoroutine(nameSequenceRoutine);
            nameSequenceRoutine = null;
        }
        if (audioSource != null)
        {
            audioSource.Stop(); // Câm tiếng cũ

            // Phát tiếng Ting khi click
            if (clickAudio != null)
            {
                audioSource.PlayOneShot(clickAudio);
            }
        }

        // Hiệu ứng nhún (Feedback) cho Slot ĐƯỢC CHỌN
        Sequence clickSeq = DOTween.Sequence();
        clickSeq.Append(chosenSlot.transform.DOScale(chosenSlot.originalScale * clickScaleSize, clickDownDuration));
        clickSeq.Append(chosenSlot.transform.DOScale(chosenSlot.originalScale, clickUpDuration));

        // Tắt đèn của thẻ vừa được chọn ngay khi hiệu ứng nảy (click) kết thúc
        clickSeq.OnComplete(() =>
        {
            if (chosenSlot.lightEffect != null) chosenSlot.lightEffect.SetActive(false);
        });

        // Xác định xem slot nào là slot BỊ LOẠI (slot không được chọn)
        PlayerSlot loserSlot = (chosenSlot == slotA) ? slotB : slotA;

        // Bật viền sáng cho Slot ĐƯỢC CHỌN + Đổi Sprite theo data cầu thủ
        if (chosenSlot.lightEffect != null)
        {
            chosenSlot.lightEffect.SetActive(true);

            // Đổi ảnh Sprite của lightEffect theo data riêng của cầu thủ được chọn
            if (chosenSlot.currentData != null && chosenSlot.currentData.lightEffectSprite != null)
            {
                SpriteRenderer glowRenderer = chosenSlot.lightEffect.GetComponent<SpriteRenderer>();
                if (glowRenderer != null)
                {
                    glowRenderer.sprite = chosenSlot.currentData.lightEffectSprite;
                }
            }
        }

        // TẮT viền sáng cho Slot BỊ LOẠI (đề phòng nó đang bật)
        if (loserSlot.lightEffect != null)
        {
            loserSlot.lightEffect.SetActive(false);
        }

        // 2. Tạo chuỗi hiệu ứng bay (Sequence)
        Sequence seq = DOTween.Sequence();
        
        // - Bay đến target theo hình vòng cung (DOJump)
        seq.Append(loserSlot.transform.DOJump(discardTarget.position, arcHeight, 1, moveDuration));
        
        // - Phóng to lên 1 chút khi vừa rớt xuống (Nhân với Scale gốc)
        seq.Append(loserSlot.transform.DOScale(loserSlot.originalScale * scaleUpSize, scaleUpDuration));

        // - Thu nhỏ dần về 0, ĐỒNG THỜI mờ dần đi
        seq.Append(loserSlot.transform.DOScale(0f, scaleDownDuration));
        seq.Join(loserSlot.spriteRenderer.DOFade(0f, scaleDownDuration)); // Join để chạy song song

        // - Khi bay, phóng to, thu nhỏ xong xuôi -> Kiểm tra xem game kết thúc chưa
        seq.OnComplete(() =>
        {
            // Tắt viền sáng
            if (loserSlot.lightEffect != null) loserSlot.lightEffect.SetActive(false);

            if (currentIndex < playerList.Count)
            {
                // VẪN CÒN NGƯỜI -> Khôi phục Slot và đổi hình
                loserSlot.transform.position = loserSlot.originalPosition;
                
                // Chuẩn bị trạng thái ban đầu
                loserSlot.transform.localScale = loserSlot.originalScale * appearStartScale;
                
                // Bắt buộc ép Alpha về 0 (0/255) trước khi hiện lên để chắc chắn nó tàng hình
                Color c = loserSlot.spriteRenderer.color;
                c.a = 0f;
                loserSlot.spriteRenderer.color = c;

                loserSlot.SetupSlot(playerList[currentIndex]);
                currentIndex++;
                TrackChallengeProgress();

                // Tạo chuỗi xuất hiện (Appear Sequence)
                Sequence appearSeq = DOTween.Sequence();
                
                // Phóng to lên cực đại ĐỒNG THỜI hiện rõ dần lên
                appearSeq.Append(loserSlot.transform.DOScale(loserSlot.originalScale * appearMaxScale, appearUpDuration));
                appearSeq.Join(loserSlot.spriteRenderer.DOFade(1f, appearUpDuration));
                
                // Sau đó nảy nhẹ về lại chuẩn (1.0)
                appearSeq.Append(loserSlot.transform.DOScale(loserSlot.originalScale, appearDownDuration));

                appearSeq.OnComplete(() =>
                {
                    // Chạy xong hết thì mở khoá cho chơi tiếp
                    isAnimating = false;
                    
                    // KÍCH HOẠT LẠI HIỆU ỨNG THỞ LUÂN PHIÊN
                    PlayGlobalIdleAnimation();

                    // ĐỌC LẠI TÊN CỦA 2 THẺ MỚI TRÊN SÂN
                    PlayNameSequence(slotA.currentData.nameAudio, slotB.currentData.nameAudio);
                });
            }
            else
            {
                // HẾT NGƯỜI -> Game kết thúc
                // Giữ nguyên trạng thái tàng hình của loserSlot, và bung Endcard
                isAnimating = false;
                
                // Cố tình tạo hiệu ứng thở vô hạn cho kẻ chiến thắng cuối cùng
                DOTween.Sequence()
                    .Append(chosenSlot.transform.DOScale(chosenSlot.originalScale * chosenSlot.idleScale, chosenSlot.idleDuration).SetLoops(2, LoopType.Yoyo).SetEase(Ease.InOutSine))
                    .SetLoops(-1);

                ShowWinner(chosenSlot.currentData);
            }
        });
    }

    private void TrackChallengeProgress()
    {
        if (playerList == null || playerList.Count <= 2) return;

        int totalSelections = playerList.Count - 2;
        if (totalSelections <= 0) return;

        int completedSelections = Mathf.Max(0, currentIndex - 2);
        float progressPercent = (completedSelections * 100f) / totalSelections;

        if (!challenge25Tracked && progressPercent >= 25f)
        {
            challenge25Tracked = true;
            AppLovinAnalytics.Track(ALEvent.CHALLENGE_PASS_25);
        }

        if (!challenge50Tracked && progressPercent >= 50f)
        {
            challenge50Tracked = true;
            AppLovinAnalytics.Track(ALEvent.CHALLENGE_PASS_50);
        }

        if (!challenge75Tracked && progressPercent >= 75f)
        {
            challenge75Tracked = true;
            AppLovinAnalytics.Track(ALEvent.CHALLENGE_PASS_75);
        }
    }

    private void ShowWinner(FavoritePlayerCard winnerData)
    {
        Debug.Log("🎉 TÌM RA NGƯỜI CHIẾN THẮNG: " + winnerData.playerName);
        AppLovinAnalytics.Track(ALEvent.CHALLENGE_SOLVED);

        // Tắt 2 slot chọn lựa đi cho đỡ vướng màn hình
        if (slotA != null) slotA.gameObject.SetActive(false);
        if (slotB != null) slotB.gameObject.SetActive(false);

        // Bật màn hình Endcard lên và truyền dữ liệu người chiến thắng vào
        if (endcardUI != null)
        {
            AppLovinAnalytics.Track(ALEvent.ENDCARD_SHOWN);
            endcardUI.ShowEndcard(winnerData);
        }
        else
        {
            Debug.LogWarning("Chưa gán FavoritePlayerEndcard vào Manager!");
        }

        // Bật luôn các object phụ đi kèm
        if (extraObjectsToActivate != null)
        {
            foreach (GameObject obj in extraObjectsToActivate)
            {
                if (obj != null) obj.SetActive(true);
            }
        }

        // Tắt luôn các object phụ đi kèm
        if (extraObjectsToDeactivate != null)
        {
            foreach (GameObject obj in extraObjectsToDeactivate)
            {
                if (obj != null) obj.SetActive(false);
            }
        }

        // Bắt đầu đếm giờ
        StopAllCoroutines();
        StartCoroutine(WaitAndTriggerObjects());
    }

    private System.Collections.IEnumerator WaitAndTriggerObjects()
    {
        // Chờ đúng số giây bạn đã cài
        yield return new WaitForSeconds(waitTime);

        // Hết giờ -> Bật các object mới lên
        if (objectsToTurnOnAfterWait != null)
        {
            foreach (GameObject obj in objectsToTurnOnAfterWait)
            {
                if (obj != null) obj.SetActive(true);
            }
        }

        // Hết giờ -> Tắt các object chỉ định đi
        if (objectsToTurnOffAfterWait != null)
        {
            foreach (GameObject obj in objectsToTurnOffAfterWait)
            {
                if (obj != null) obj.SetActive(false);
            }
        }

        // Bật tính năng click ra Store tại Manager
        Debug.Log("⏳ Đã hết thời gian chờ. BẬT TÍNH NĂNG CLICK RA STORE (TỪ MANAGER)!");
        canClickToStoreGlobal = true;
    }
}
