using UnityEngine;
using DG.Tweening;
using Luna.Unity;

public class HairCutController : MonoBehaviour
{
    [Header("=== Cây kéo ===")]
    [Tooltip("Kéo thả con kéo vào đây")]
    public Transform scissors;

    [Tooltip("Animator trên con kéo")]
    public Animator scissorsAnimator;

    [Tooltip("Animator của GameObject cần TẮT khi click vào màn hình")]
    public Animator targetAnimatorToDisable;

    [Tooltip("Điểm A của line (mép trái đường cắt)")]
    public Transform linePointA;

    [Tooltip("Điểm B của line (mép phải đường cắt)")]
    public Transform linePointB;

    [Tooltip("Thời gian kéo chạy từ A → B (giây)")]
    public float scissorMoveDuration = 0.5f;

    [Header("=== Sprite Masks (bật lên khi cắt) ===")]
    [Tooltip("Kéo thả TẤT CẢ mask con vào đây")]
    public SpriteMask[] allMasks;

    [Header("=== Tóc rơi xuống ===")]
    [Tooltip("Kéo thả GameObject 'Tóc rơi xuống' vào đây")]
    public Transform fallingHairParent;

    [Tooltip("Kéo thả TẤT CẢ SpriteRenderer bên trong 'Tóc rơi xuống' vào đây")]
    public SpriteRenderer[] fallingHairRenderers;

    [Header("=== Win / Loss Settings ===")]
    [Tooltip("BoxCollider2D trên con kéo (Keo)")]
    public Collider2D scissorsCollider;

    [Tooltip("BoxCollider2D của Arrow 218")]
    public Collider2D targetCollider;

    [Header("--- WIN Settings ---")]
    [Tooltip("GameObject cần BẬT khi WIN")]
    public GameObject winObjectToEnable;

    [Tooltip("Danh sách các GameObject cần BẬT khi WIN (Confetti, UI Thắng, Sound, v.v.)")]
    public GameObject[] winObjectsToEnable;

    [Tooltip("GameObject cần TẮT khi WIN")]
    public GameObject winObjectToDisable;

    [Tooltip("Danh sách các GameObject cần TẮT khi WIN (UI Hướng dẫn, Nút Hold To Shoot, v.v.)")]
    public GameObject[] winObjectsToDisable;

    [Header("--- LOSS Settings ---")]
    [Tooltip("SpriteRenderer cần đổi hình khi bị LOSS (ví dụ: thân/mặt nhân vật)")]
    public SpriteRenderer lossSpriteRenderer;

    [Tooltip("Sprite mới khi bị LOSS (ví dụ: sprite halaand-loss)")]
    public Sprite lossSprite;

    [Tooltip("GameObject cần BẬT (SetActive = true) khi bị LOSS (ví dụ: Popup Thua, UI Try Again, v.v.)")]
    public GameObject lossObjectToEnable;

    [Tooltip("Danh sách nhiều GameObject cần BẬT khi bị LOSS")]
    public GameObject[] lossObjectsToEnable;

    [Header("=== End Game (Sau 3s) ===")]
    [Tooltip("Thời gian chờ trước khi chuyển sang End Game & Click To Store (mặc định 3s)")]
    public float endDelay = 3f;

    [Tooltip("Nếu tích chọn: Khi LOSS sẽ thực hiện End Game ngay lập tức (không chờ 3s)")]
    public bool immediateEndGameOnLoss = false;

    [Tooltip("Danh sách GameObject cần TẮT sau khi kết thúc")]
    public GameObject[] afterEndDisableObjects;

    [Tooltip("Danh sách GameObject cần BẬT sau khi kết thúc (End Card, UI Store, Overlay...)")]
    public GameObject[] afterEndEnableObjects;

    [Header("=== Step 1 (Tap Lần 1) ===")]
    [Tooltip("GameObject Tutorial / Hướng dẫn cần ẨN khi người chơi Tap lần 1")]
    public GameObject tutObject;

    [Tooltip("Animator cần BẬT (enabled = true) khi Tap lần 1")]
    public Animator animatorToEnableOnFirstTap;

    [Tooltip("Tên Trigger parameter của Animation cần chạy khi Tap lần 1 (để trống nếu không dùng)")]
    public string firstTapTriggerName;

    [Header("=== Cấu hình ===")]
    [Tooltip("GameObject cần TẮT (SetActive = false) khi kéo đã chạy xong tới điểm B")]
    public GameObject objectToDisableOnComplete;

    [Tooltip("Danh sách các GameObject cần TẮT nếu bạn muốn tắt nhiều hơn 1 object")]
    public GameObject[] objectsToDisableOnComplete;

    public float fallDistance = 5f;
    public float fallDuration = 1.5f;
    public float fadeDuration = 1f;

    private bool hasCut = false;
    private bool isMovingScissor = false;
    private bool hasHitTarget = false;
    private bool isStoreRedirectActive = false;

    private int tapState = 0; // 0: Chờ Tap 1, 1: Chờ Tap 2, 2: Đang cắt
    private Vector3 initialScissorsPos;
    private Sprite initialLossSprite;

    void Start()
    {
        if (scissors != null)
        {
            initialScissorsPos = scissors.position;
        }

        if (lossSpriteRenderer != null)
        {
            initialLossSprite = lossSpriteRenderer.sprite;
        }
    }

    void Update()
    {
        // Khi game đã kết thúc: Bất kỳ click/tap nào trên màn hình đều mở Store
        if (isStoreRedirectActive)
        {
            if (Input.GetMouseButtonDown(0) || (Input.touchCount > 0 && Input.GetTouch(0).phase == TouchPhase.Began))
            {
                Debug.Log("[HairCutController] Người chơi click màn hình -> Mở Store (Luna)!");
                LifeCycle.GameEnded();
                Playable.InstallFullGame();
            }
            return;
        }

        // Kiểm tra va chạm liên tục trong lúc con kéo đang di chuyển từ A -> B
        if (isMovingScissor)
        {
            CheckOverlapDuringMove();
        }

        // Xử lý logic 2 lần Tap
        if (Input.GetMouseButtonDown(0) || (Input.touchCount > 0 && Input.GetTouch(0).phase == TouchPhase.Began))
        {
            if (tapState == 0)
            {
                // TAP LẦN 1: Ẩn TUT + Bật Animation
                tapState = 1;
                HandleFirstTap();
            }
            else if (tapState == 1 && !hasCut)
            {
                // TAP LẦN 2: Cắt tóc
                tapState = 2;
                hasCut = true;
                StartScissorCut();
            }
        }
    }

    /// <summary>
    /// Tap Lần 1: Ẩn Tutorial + Bật Animation của Object được gán
    /// </summary>
    void HandleFirstTap()
    {
        Debug.Log("[HairCutController] TAP LẦN 1: Ẩn Tutorial & Bật Animation!");

        // 1. Ẩn Tutorial / TUT Object
        if (tutObject != null)
        {
            tutObject.SetActive(false);
        }

        // 2. Bật Animation của Object
        if (animatorToEnableOnFirstTap != null)
        {
            animatorToEnableOnFirstTap.enabled = true;

            if (!string.IsNullOrEmpty(firstTapTriggerName))
            {
                animatorToEnableOnFirstTap.SetTrigger(firstTapTriggerName);
            }
        }
    }

    /// <summary>
    /// Click → Kéo di chuyển từ A → B. Trong lúc di chuyển sẽ quét va chạm liên tục với Arrow 218.
    /// </summary>
    void StartScissorCut()
    {
        // Phát âm thanh Kéo trong Ply_SoundManager (nếu có)
        if (Ply_SoundManager.Ins != null)
        {
            Ply_SoundManager.Ins.PlayFx(FxType.Keo);
        }

        // Tắt Animation của Object được gán (nếu có)
        if (targetAnimatorToDisable != null)
        {
            targetAnimatorToDisable.enabled = false;
        }

        hasHitTarget = false;

        if (scissors != null)
        {
            // Dừng tất cả tween cũ đang chạy trên con kéo
            scissors.DOKill();

            // Đặt kéo về vị trí A
            if (linePointA != null)
            {
                scissors.position = linePointA.position;
            }

            // Bật animation kéo cắt
            if (scissorsAnimator != null)
            {
                scissorsAnimator.SetTrigger("Keo");
            }

            Vector3 targetB = linePointB != null ? linePointB.position : scissors.position;

            // Bật cờ bắt đầu di chuyển để Update() quét va chạm
            isMovingScissor = true;
            
            scissors.DOMove(targetB, scissorMoveDuration)
                    .SetEase(Ease.Linear)
                    .OnUpdate(() =>
                    {
                        CheckOverlapDuringMove();
                    })
                    .OnComplete(() =>
                    {
                        isMovingScissor = false;
                        Debug.Log("[HairCutController] Kéo đã hoàn thành di chuyển từ A -> B!");
                        PerformCut();
                    });
        }
        else
        {
            PerformCut();
        }
    }

    /// <summary>
    /// Quét va chạm giữa BoxCollider2D của Kéo và Arrow 218 trong suốt quá trình di chuyển
    /// </summary>
    private void CheckOverlapDuringMove()
    {
        if (hasHitTarget) return; // Nếu đã chạm rồi thì không cần quét nữa

        if (scissorsCollider != null && targetCollider != null)
        {
            bool isIntersecting = scissorsCollider.bounds.Intersects(targetCollider.bounds) || scissorsCollider.IsTouching(targetCollider);

            if (isIntersecting)
            {
                hasHitTarget = true;
                Debug.Log($"<color=cyan>[Va Chạm]</color> Kéo đã chạm vào Arrow 218 tại vị trí X = {scissors.position.x}");
            }
        }
    }

    /// <summary>
    /// Khi kéo tới B: kết luận Win/Loss + bật mask + tóc rơi xuống + fade + tắt object chỉ định
    /// </summary>
    void PerformCut()
    {
        // --- 0. Kết luận Win hay Loss ---
        if (hasHitTarget)
        {
            Debug.Log("<color=green><b>WIN</b></color> (Kéo đã đi qua và chạm vào Arrow 218!)");

            if (Ply_SoundManager.Ins != null)
            {
                Ply_SoundManager.Ins.PlayFx(FxType.Win);
            }

            // Chờ tóc rơi xong (fallDuration) rồi mới bật/tắt WIN objects
            DOVirtual.DelayedCall(fallDuration, () =>
            {
                // Bật GameObject khi WIN
                if (winObjectToEnable != null)
                {
                    winObjectToEnable.SetActive(true);
                }

                if (winObjectsToEnable != null && winObjectsToEnable.Length > 0)
                {
                    foreach (GameObject obj in winObjectsToEnable)
                    {
                        if (obj != null) obj.SetActive(true);
                    }
                }

                // Tắt GameObject khi WIN
                if (winObjectToDisable != null)
                {
                    winObjectToDisable.SetActive(false);
                }

                if (winObjectsToDisable != null && winObjectsToDisable.Length > 0)
                {
                    foreach (GameObject obj in winObjectsToDisable)
                    {
                        if (obj != null) obj.SetActive(false);
                    }
                }
            });
        }
        else
        {
            Debug.Log("<color=red><b>LOSS</b></color> (Kéo không chạm vào Arrow 218!)");

            if (Ply_SoundManager.Ins != null)
            {
                Ply_SoundManager.Ins.PlayFx(FxType.Loss);
            }

            // Đổi Sprite khi bị LOSS
            if (lossSpriteRenderer != null && lossSprite != null)
            {
                lossSpriteRenderer.sprite = lossSprite;
            }

            // Bật GameObject khi bị LOSS
            if (lossObjectToEnable != null)
            {
                lossObjectToEnable.SetActive(true);
            }

            if (lossObjectsToEnable != null && lossObjectsToEnable.Length > 0)
            {
                foreach (GameObject obj in lossObjectsToEnable)
                {
                    if (obj != null) obj.SetActive(true);
                }
            }
        }

        // --- 1. Tắt GameObject khi kéo chạy tới B ---
        if (objectToDisableOnComplete != null)
        {
            objectToDisableOnComplete.SetActive(false);
        }

        if (objectsToDisableOnComplete != null && objectsToDisableOnComplete.Length > 0)
        {
            foreach (GameObject obj in objectsToDisableOnComplete)
            {
                if (obj != null) obj.SetActive(false);
            }
        }

        // --- 2. Lấy vị trí Y của đường cắt ---
        float cutY = linePointA != null ? linePointA.position.y : scissors.position.y;

        // --- 3. Bật tất cả Sprite Mask ---
        foreach (SpriteMask mask in allMasks)
        {
            if (mask != null)
            {
                Vector3 maskPos = mask.transform.position;
                maskPos.y = cutY;
                mask.transform.position = maskPos;
                mask.gameObject.SetActive(true);
            }
        }

        // --- 4. Tóc rơi xuống: di chuyển xuống + fade alpha về 0 ---
        if (fallingHairParent != null)
        {
            fallingHairParent.DOMove(
                fallingHairParent.position + Vector3.down * fallDistance,
                fallDuration
            ).SetEase(Ease.InQuad);

            if (fallingHairRenderers != null)
            {
                foreach (SpriteRenderer sr in fallingHairRenderers)
                {
                    if (sr != null)
                    {
                        sr.DOFade(0f, fadeDuration)
                          .SetDelay(fallDuration * 0.3f);
                    }
                }
            }
        }

        // --- 5. Thực hiện End Game ---
        if (hasHitTarget)
        {
            // WIN: Chờ endDelay (3s/4s) rồi End Game dành riêng cho WIN (tắt/bật afterEnd objects + click ra store)
            DOVirtual.DelayedCall(endDelay, () =>
            {
                TriggerWinEndGame();
            });
        }
        else
        {
            // LOSS: Chờ endDelay (4s) -> tắt masks, bật lại objectToDisableOnComplete & targetAnimatorToDisable, sau đó click đâu cũng ra store
            DOVirtual.DelayedCall(endDelay, () =>
            {
                TriggerLossEndGame();
            });
        }
    }

    /// <summary>
    /// Hàm thực hiện End Game dành riêng cho WIN
    /// </summary>
    public void TriggerWinEndGame()
    {
        Debug.Log("[HairCutController] Kích hoạt WIN END GAME!");

        // Tắt danh sách object sau khi WIN
        if (afterEndDisableObjects != null)
        {
            foreach (GameObject obj in afterEndDisableObjects)
            {
                if (obj != null)
                {
                    if (obj == this.gameObject)
                    {
                        Debug.LogWarning("[HairCutController] ⚠️ CẢNH BÁO: Bạn đang đưa GameObject chứa HairCutController vào AfterEndDisableObjects! Vui lòng bỏ GameObject chứa script này ra khỏi danh sách!");
                        continue;
                    }
                    obj.SetActive(false);
                }
            }
        }

        // Bật danh sách object sau khi WIN (End Card...)
        if (afterEndEnableObjects != null)
        {
            foreach (GameObject obj in afterEndEnableObjects)
            {
                if (obj != null)
                {
                    obj.SetActive(true);

                    // Gắn thêm ClickToStore / Button listener nếu là UI Button/Panel
                    UnityEngine.UI.Button btn = obj.GetComponent<UnityEngine.UI.Button>();
                    if (btn != null)
                    {
                        btn.onClick.RemoveAllListeners();
                        btn.onClick.AddListener(OpenStore);
                    }
                }
            }
        }

        isStoreRedirectActive = true;
        Debug.Log("[HairCutController] WIN -> ĐÃ KÍCH HOẠT: Click màn hình bất kỳ lúc nào cũng ra Store!");
    }

    /// <summary>
    /// Hàm thực hiện End Game dành riêng cho LOSS (Sau endDelay)
    /// </summary>
    public void TriggerLossEndGame()
    {
        Debug.Log("[HairCutController] Kích hoạt LOSS END GAME (Hết endDelay)!");

        // 1. Disactive tất cả Masks
        if (allMasks != null)
        {
            foreach (SpriteMask mask in allMasks)
            {
                if (mask != null)
                {
                    mask.gameObject.SetActive(false);
                }
            }
        }

        // 2. Bật lại objectToDisableOnComplete & objectsToDisableOnComplete
        if (objectToDisableOnComplete != null)
        {
            objectToDisableOnComplete.SetActive(true);
        }

        if (objectsToDisableOnComplete != null && objectsToDisableOnComplete.Length > 0)
        {
            foreach (GameObject obj in objectsToDisableOnComplete)
            {
                if (obj != null)
                {
                    obj.SetActive(true);
                }
            }
        }

        // 3. Bật lại Animator targetAnimatorToDisable
        if (targetAnimatorToDisable != null)
        {
            targetAnimatorToDisable.enabled = true;
        }

        // 4. Đưa Kéo về lại vị trí ban đầu
        if (scissors != null)
        {
            scissors.DOKill();
            if (linePointA != null)
            {
                scissors.position = linePointA.position;
            }
            else
            {
                scissors.position = initialScissorsPos;
            }
        }

        // 5. Tắt lossObjectToEnable & lossObjectsToEnable
        if (lossObjectToEnable != null)
        {
            lossObjectToEnable.SetActive(false);
        }

        if (lossObjectsToEnable != null && lossObjectsToEnable.Length > 0)
        {
            foreach (GameObject obj in lossObjectsToEnable)
            {
                if (obj != null)
                {
                    obj.SetActive(false);
                }
            }
        }

        // 6. Đổi Loss SpriteRenderer về lại sprite ban đầu
        if (lossSpriteRenderer != null && initialLossSprite != null)
        {
            lossSpriteRenderer.sprite = initialLossSprite;
        }

        // 7. Kích hoạt click đâu cũng ra Store
        isStoreRedirectActive = true;
        Debug.Log("[HairCutController] LOSS -> ĐÃ KÍCH HOẠT: Kéo về vị trí cũ, Khôi phục Sprite ban đầu & Click màn hình bất kỳ lúc nào cũng ra Store!");
    }

    /// <summary>
    /// Hàm mở Store trực tiếp (Có thể gán vào OnClick của UI Button / End Card)
    /// </summary>
    public void OpenStore()
    {
        Debug.Log("[HairCutController] Chuyển hướng mở Store Luna!");
        LifeCycle.GameEnded();
        Playable.InstallFullGame();
    }
}
