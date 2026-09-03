using UnityEngine;
using Luna.Unity;

namespace HaalandGame
{
    public class HaalandGameManager : MonoBehaviour
    {
        public static HaalandGameManager Instance { get; private set; }

        [Header("=== 1. HƯỚNG DẪN TAP TO PLAY ===")]
        [VnLabel("UI Hướng dẫn (Tap To Play)")]
        [Tooltip("GameObject TAP TO PLAY (Click lần đầu để ẩn)")]
        public GameObject tutUI;

        [Header("=== 2. XOẠC BÓNG (RONALDO / MESSI) ===")]
        [VnLabel("Object Ronaldo xoạc bóng")]
        [Tooltip("GameObject Ronaldo xoạc bóng")]
        public GameObject ronaldoTackle;
        [VnLabel("Animator Ronaldo xoạc bóng")]
        public Animator ronaldoTackleAnimator;
        [VnLabel("Trigger Ronaldo xoạc bóng")]
        public string startRonaldoTackleTrigger = "StartRonaldoTackle";

        [VnLabel("Object Messi xoạc bóng")]
        [Tooltip("GameObject Messi xoạc bóng (Lv2 / Replay)")]
        public GameObject messiTackle;
        [VnLabel("Animator Messi xoạc bóng")]
        public Animator messiTackleAnimator;
        [VnLabel("Trigger Messi xoạc bóng")]
        public string startMessiTackleTrigger = "StartMessiTackle";

        [VnLabel("Độ trễ trước khi xoạc bóng (s)")]
        [Tooltip("Thời gian chờ (delay) trước khi phát animation xoạc bóng (mặc định 1.0s)")]
        public float tackleAnimDelay = 1.0f;

        [Header("=== 3. CẦU THỦ CHÍNH & KHÓI (MAIN PLAYER & FIGHTING CLOUD) ===")]
        [VnLabel("Ảnh Cầu thủ rê bóng")]
        [Tooltip("Obj ảnh rê bóng của Cầu thủ chính (Haaland/Yamal...) - sẽ tắt khi va chạm")]
        public GameObject haalandDribbleImage;

        [VnLabel("Animator Cầu thủ rê bóng")]
        [Tooltip("Animator của Cầu thủ chính rê bóng (phát khi người chơi click lần đầu)")]
        public Animator haalandDribbleAnimator;

        [VnLabel("Trigger Cầu thủ rê bóng")]
        public string startHaalandDribbleTrigger = "StartHaalandDribble";

        [VnLabel("Object Mây khói va chạm")]
        [Tooltip("GameObject FightingCloud (Bật khi va chạm, tắt sau 3s)")]
        public GameObject fightingCloud;

        [VnLabel("Object Cầu thủ bị đau")]
        [Tooltip("GameObject Cầu thủ chính bị đau/chấn thương (Bật khi tắt FightingCloud)")]
        public GameObject haalandHurt;

        [VnLabel("Object Cầu thủ khi Thắng")]
        [Tooltip("GameObject bật lên khi người chơi chọn ĐÚNG (Đồng thời tắt Object Cầu thủ bị đau)")]
        public GameObject haalandWin;

        [VnLabel("Độ trễ hiện Cầu thủ khi Thắng (s)")]
        [Tooltip("Thời gian chờ (giây) kể từ khi chọn ĐÚNG đến khi hiện Object Cầu thủ khi Thắng (mặc định 3.0s)")]
        public float winPlayerDelay = 3.0f;

        [Header("=== 4. CẦU THỦ BƯỚC VÀO (STAND PLAYER) ===")]
        [VnLabel("Object Dàn cầu thủ & Trọng tài")]
        [Tooltip("GameObject StandPlayer chứa các cầu thủ & trọng tài")]
        public GameObject standPlayers;
        [VnLabel("Animator Dàn cầu thủ")]
        public Animator standPlayersAnimator;
        [VnLabel("Trigger Cầu thủ bước vào")]
        public string standPlayerEnterTrigger = "playerEnter";

        [Header("=== 5. TRỌNG TÀI & CÂU HỎI (QUESTION UI & REFEREE) ===")]
        [VnLabel("UI Câu hỏi")]
        [Tooltip("UI câu hỏi 'Who fouled Haaland?'")]
        public GameObject questionUI;

        [VnLabel("UI Chọn SAI")]
        [Tooltip("UI bật khi chọn SAI (khi Ronaldo cười nham hiểm)")]
        public GameObject wrongChoiceUI;

        [VnLabel("UI Chọn ĐÚNG")]
        [Tooltip("UI bật khi chọn ĐÚNG (khi chọn đúng Ronaldo)")]
        public GameObject winChoiceUI;

        [VnLabel("Object phụ Win 1")]
        [Tooltip("Object phụ 1 bật cùng Win Choice UI")]
        public GameObject winExtraObj1;

        [VnLabel("Object phụ Win 2")]
        [Tooltip("Object phụ 2 bật cùng Win Choice UI")]
        public GameObject winExtraObj2;

        [VnLabel("UI Danh sách 4 Icon")]
        [Tooltip("UI 4 Icon chọn cầu thủ")]
        public GameObject iconListUI;

        [VnLabel("Animator Trọng Tài")]
        [Tooltip("Animator Trọng Tài")]
        public Animator refereeAnimator;
        [VnLabel("Trigger Trọng tài ngó nghiêng")]
        public string refereeLookAroundTrigger = "TriggerTurnLeftRight";

        [Header("=== 6. TÙY CHỌN ĐẾM GIỜ TỰ ĐỘNG (AUTO TIMERS) ===")]
        [VnLabel("Tự động đếm giờ (Auto Timers)")]
        [Tooltip("Tự động chạy chuỗi thời gian nếu không đặt Animation Event trên timeline")]
        public bool useAutoTimers = true;

        [VnLabel("Độ trễ ẩn xoạc bóng (s)")]
        [Tooltip("Thời gian ẩn cầu thủ xoạc bóng (mặc định 0.5s)")]
        public float tackleHideDelay = 0.5f;   // Sau 0.5s tắt xoạc bóng

        [VnLabel("Thời điểm va chạm mây khói (s)")]
        [Tooltip("Thời điểm va chạm bật mây khói tính từ lúc bắt đầu xoạc (mặc định 0.2s - 0.3s)")]
        public float impactCloudDelay = 0.3f;  // Thời điểm va chạm bật cloud

        [VnLabel("Độ trễ Cầu thủ bị đau (s)")]
        [Tooltip("Sau bao nhiêu giây kể từ khi bật Mây khói thì kích hoạt Cầu thủ chính ôm chân nằm sân")]
        public float haalandHurtDelay = 2.0f;  // Sau 2.0s kể từ khi bật Cloud -> Bật Haaland bị đau

        [VnLabel("Thời lượng mây khói (s)")]
        [Tooltip("Thời gian tồn tại của mây khói trước khi tan và dàn cầu thủ bước vào")]
        public float cloudDuration = 3.0f;     // Hết 3.0s mây khói tắt -> Bật StandPlayer

        [VnLabel("Độ trễ anim Trọng tài (s)")]
        [Tooltip("Sau bao nhiêu giây kể từ khi bật dàn cầu thủ thì Trọng tài bắt đầu quay đầu nhìn qua lại")]
        public float refereeAnimDelay = 0.5f;  // Sau 0.5s kể từ khi bật StandPlayer -> Phát Anim trọng tài

        [VnLabel("Thời gian chờ kết quả (s)")]
        [Tooltip("Thời gian chờ sau khi người chơi chọn xong (hiện UI Thắng/Thua) trước khi chuyển sang Level 2/Replay")]
        public float nextActionDelay = 2.0f;   // Sau 2.0s kể từ khi hiện Win/Wrong UI -> Bật lại Dribble

        [VnLabel("Độ trễ Rê bóng -> Xoạc (s)")]
        [Tooltip("Sau bao nhiêu giây kể từ khi Haaland rê bóng lại thì Messi mới kích hoạt xoạc bóng")]
        public float dribbleToTackleDelay = 0.5f; // Sau 0.5s kể từ khi bật Dribble -> Mới kích hoạt Messi xoạc bóng

        [VnLabel("Độ trễ âm thanh xoạc bóng (s)")]
        [Tooltip("Độ trễ phát âm thanh xoạc bóng kể từ khi kích hoạt xoạc")]
        public float tackleSoundDelay = 0.2f;  // Độ trễ phát sound xoạc bóng kể từ khi kích hoạt xoạc

        [Header("=== 7. CHAT BUBBLES CẦU THỦ ===")]

        [VnLabel("Chat Bubble Ronaldo")]
        [Tooltip("Chat Bubble Ronaldo ('You got me')")]
        public GameObject ronaldoChatBubble;

        [VnLabel("Chat Bubble Messi")]
        [Tooltip("Chat Bubble Messi ('I will tell my Father')")]
        public GameObject messiChatBubble;

        [VnLabel("Chat Bubble Vini")]
        [Tooltip("Chat Bubble Vini ('It's not me')")]
        public GameObject viniChatBubble;

        [VnLabel("Chat Bubble Mbappe")]
        [Tooltip("Chat Bubble Mbappe ('It's not me')")]
        public GameObject mbappeChatBubble;

        [Header("=== 8. PLAYER SPRITE REACTIONS ===")]
        [VnLabel("SpriteRenderer Ronaldo")]
        [Tooltip("SpriteRenderer của Ronaldo Stand")]
        public SpriteRenderer ronaldoSpriteRenderer;
        [VnLabel("Sprite Ronaldo buồn (ĐÚNG)")]
        [Tooltip("Sprite Ronaldo buồn (Khi chọn ĐÚNG Ronaldo)")]
        public Sprite ronaldoSadSprite;
        [VnLabel("Sprite Ronaldo cười (SAI)")]
        [Tooltip("Sprite Ronaldo cười nham hiểm (Khi chọn SAI người khác)")]
        public Sprite ronaldoEvilLaughSprite;

        [Header("--- Messi Stand ---")]
        [VnLabel("SpriteRenderer Messi")]
        public SpriteRenderer messiSpriteRenderer;
        [VnLabel("Sprite Messi buồn (SAI)")]
        [Tooltip("Sprite Messi buồn/phản đối (Khi chọn SAI Messi)")]
        public Sprite messiSadSprite;

        [Header("--- Vini Stand ---")]
        [VnLabel("SpriteRenderer Vini")]
        public SpriteRenderer viniSpriteRenderer;
        [VnLabel("Sprite Vini buồn (SAI)")]
        [Tooltip("Sprite Vini buồn/phản đối (Khi chọn SAI Vini)")]
        public Sprite viniSadSprite;

        [Header("--- Mbappe Stand ---")]
        [VnLabel("SpriteRenderer Mbappe")]
        public SpriteRenderer mbappeSpriteRenderer;
        [VnLabel("Sprite Mbappe buồn (SAI)")]
        [Tooltip("Sprite Mbappe buồn/phản đối (Khi chọn SAI Mbappe)")]
        public Sprite mbappeSadSprite;

        [Header("--- Trọng Tài Stand ---")]
        [VnLabel("SpriteRenderer Trọng tài")]
        public SpriteRenderer refereeSpriteRenderer;
        [VnLabel("Sprite Trọng tài chú ý")]
        [Tooltip("Sprite Trọng Tài khi chọn xong cầu thủ")]
        public Sprite refereeReactionSprite;

        [Header("=== 9. DOTWEEN ICON ANIMATION ===")]
        [VnLabel("Icon List Animator")]
        public IconListAnimator iconListAnimator;

        public int currentLevel = 1;
        private bool isTackleStarted = false;
        private bool isChoiceMade = false;
        private bool isStandPlayerEntered = false;
        private bool isGameWon = false;
        private bool canClickToStore = false;

        private Sprite originalRonaldoSprite;
        private Sprite originalMessiSprite;
        private Sprite originalViniSprite;
        private Sprite originalMbappeSprite;
        private Sprite originalRefereeSprite;

        private struct TransformState
        {
            public Transform transform;
            public Vector3 localPosition;
            public Quaternion localRotation;
            public Vector3 localScale;
        }

        private System.Collections.Generic.List<TransformState> haalandDribbleOriginalStates = new System.Collections.Generic.List<TransformState>();

        private void Awake()
        {
            if (Instance == null) Instance = this;
            else Destroy(gameObject);
            
            // Analytics: Game is loading
            AppLovinAnalytics.Track(ALEvent.LOADING);
        }

        private void Start()
        {
            if (ronaldoSpriteRenderer != null) originalRonaldoSprite = ronaldoSpriteRenderer.sprite;
            if (messiSpriteRenderer != null) originalMessiSprite = messiSpriteRenderer.sprite;
            if (viniSpriteRenderer != null) originalViniSprite = viniSpriteRenderer.sprite;
            if (mbappeSpriteRenderer != null) originalMbappeSprite = mbappeSpriteRenderer.sprite;
            if (refereeSpriteRenderer != null) originalRefereeSprite = refereeSpriteRenderer.sprite;

            // Lưu giữ vị trí, góc xoay, scale ban đầu của haalandDribbleImage và tất cả child objects (như 're bong')
            if (haalandDribbleImage != null)
            {
                haalandDribbleOriginalStates.Clear();
                foreach (Transform t in haalandDribbleImage.GetComponentsInChildren<Transform>(true))
                {
                    if (t != null)
                    {
                        haalandDribbleOriginalStates.Add(new TransformState
                        {
                            transform = t,
                            localPosition = t.localPosition,
                            localRotation = t.localRotation,
                            localScale = t.localScale
                        });
                    }
                }
            }

            InitLevel();
            
            // Analytics: Game is loaded
            AppLovinAnalytics.Track(ALEvent.LOADED);
            // Analytics: Game is displayed
            AppLovinAnalytics.Track(ALEvent.DISPLAYED);
        }

        public void InitLevel()
        {
            isTackleStarted = false;
            isChoiceMade = false;
            isStandPlayerEntered = false;
            isGameWon = false;
            canClickToStore = false;
            CancelInvoke();

            // Chỉ bật Tap To Play ở Level 1 (lần đầu tiên). Khi Replay (Lose) hoặc sang Level 2 sẽ KHÔNG hiện lại
            if (tutUI != null) tutUI.SetActive(currentLevel == 1);
            if (questionUI != null) questionUI.SetActive(false);
            if (wrongChoiceUI != null) wrongChoiceUI.SetActive(false);
            if (winChoiceUI != null) winChoiceUI.SetActive(false);
            if (winExtraObj1 != null) winExtraObj1.SetActive(false);
            if (winExtraObj2 != null) winExtraObj2.SetActive(false);
            if (iconListUI != null) iconListUI.SetActive(false);

            if (haalandDribbleImage != null)
            {
                // Khôi phục lại vị trí, góc xoay, scale ban đầu TRƯỚC KHI Active lại GameObject (tránh giật 1 frame ở V3(0,0,0))
                foreach (var state in haalandDribbleOriginalStates)
                {
                    if (state.transform != null)
                    {
                        state.transform.localPosition = state.localPosition;
                        state.transform.localRotation = state.localRotation;
                        state.transform.localScale = state.localScale;
                    }
                }

                Animator anim = haalandDribbleAnimator != null ? haalandDribbleAnimator : haalandDribbleImage.GetComponentInChildren<Animator>(true);
                if (anim != null)
                {
                    anim.enabled = true;
                    anim.Play(0, 0, 0f);
                    anim.Update(0f);
                }

                // SAU ĐÓ MỚI ACTIVE GAME OBJECT
                haalandDribbleImage.SetActive(true);
            }
            if (fightingCloud != null) fightingCloud.SetActive(false);
            if (haalandHurt != null) haalandHurt.SetActive(false);
            if (haalandWin != null) haalandWin.SetActive(false);
            DisableStandPlayers();

            if (ronaldoTackle != null) ronaldoTackle.SetActive(false);
            if (messiTackle != null) messiTackle.SetActive(false);

            if (ronaldoChatBubble != null) ronaldoChatBubble.SetActive(false);
            if (messiChatBubble != null) messiChatBubble.SetActive(false);
            if (viniChatBubble != null) viniChatBubble.SetActive(false);
            if (mbappeChatBubble != null) mbappeChatBubble.SetActive(false);

            // Reset Sprite tất cả cầu thủ & Trọng tài về origin
            ResetPlayerSpritesToOrigin();

            if (refereeAnimator != null)
            {
                refereeAnimator.enabled = true;
                PlayOrTriggerAnimation(refereeAnimator, refereeLookAroundTrigger, "Trongtai_LeftRight");
                refereeAnimator.transform.localEulerAngles = Vector3.zero;

                foreach (Transform child in refereeAnimator.GetComponentsInChildren<Transform>(true))
                {
                    if (child != refereeAnimator.transform)
                    {
                        child.localEulerAngles = Vector3.zero;
                    }
                }
            }
        }

        private void ResetPlayerSpritesToOrigin()
        {
            if (ronaldoSpriteRenderer != null && originalRonaldoSprite != null) ronaldoSpriteRenderer.sprite = originalRonaldoSprite;
            if (messiSpriteRenderer != null && originalMessiSprite != null) messiSpriteRenderer.sprite = originalMessiSprite;
            if (viniSpriteRenderer != null && originalViniSprite != null) viniSpriteRenderer.sprite = originalViniSprite;
            if (mbappeSpriteRenderer != null && originalMbappeSprite != null) mbappeSpriteRenderer.sprite = originalMbappeSprite;
            if (refereeSpriteRenderer != null && originalRefereeSprite != null) refereeSpriteRenderer.sprite = originalRefereeSprite;
        }

        // Helper methods cho UI Icon Buttons OnClick () trong Inspector
        public void SelectRonaldo() => OnPlayerSelected(PlayerType.Ronaldo);
        public void SelectMessi() => OnPlayerSelected(PlayerType.Messi);
        public void SelectVini() => OnPlayerSelected(PlayerType.Vini);
        public void SelectMbappe() => OnPlayerSelected(PlayerType.Mbappe);

        public void SelectPlayerByIndex(int index)
        {
            switch (index)
            {
                case 0: OnPlayerSelected(PlayerType.Ronaldo); break;
                case 1: OnPlayerSelected(PlayerType.Messi); break;
                case 2: OnPlayerSelected(PlayerType.Vini); break;
                case 3: OnPlayerSelected(PlayerType.Mbappe); break;
                default: Debug.LogWarning($"[HaalandGameManager] Unknown player index: {index}"); break;
            }
        }

        // 7. Khi người chơi chọn Cầu thủ (qua Collider 3D hoặc UI Icon)
        public void OnPlayerSelected(PlayerType selectedPlayer)
        {
            Debug.Log($"[HaalandGameManager] OnPlayerSelected: Player selected = {selectedPlayer} (Level = {currentLevel})");

            // TH1 & TH2 ở Level 2 (Messi xoạc bóng): Mọi người bước vào, click -> Store
            if (currentLevel == 2)
            {
                OpenStore();
                return;
            }

            if (isChoiceMade) return;
            isChoiceMade = true;
            
            // Analytics: Player selection progression
            AppLovinAnalytics.Track(ALEvent.CHALLENGE_PASS_25);
            AppLovinAnalytics.Track(ALEvent.CHALLENGE_PASS_50);
            AppLovinAnalytics.Track(ALEvent.CHALLENGE_PASS_75);

            // Đổi Sprite Trọng Tài sang refereeReactionSprite (nếu được gán)
            if (refereeSpriteRenderer != null && refereeReactionSprite != null)
            {
                refereeSpriteRenderer.sprite = refereeReactionSprite;
            }

            // Phát Sound tương ứng khi chọn cầu thủ
            if (selectedPlayer == PlayerType.Vini)
            {
                if (Ply_SoundManager.Instance != null) Ply_SoundManager.Instance.PlayFx(FxType.SelectVini);
            }
            else if (selectedPlayer == PlayerType.Messi || selectedPlayer == PlayerType.Mbappe)
            {
                if (Ply_SoundManager.Instance != null) Ply_SoundManager.Instance.PlayFx(FxType.SelectMessiMbappe);
            }

            // Dừng animation xoay đầu của trọng tài, rewind về frame 0, reset child transform và xoay root về hướng cầu thủ được chọn (Tương thích tốt với Luna)
            if (refereeAnimator != null)
            {
                refereeAnimator.enabled = true;
                refereeAnimator.Play(0, 0, 0f);
                refereeAnimator.Update(0f);
                refereeAnimator.enabled = false; // Dừng animation

                foreach (Transform child in refereeAnimator.GetComponentsInChildren<Transform>(true))
                {
                    if (child != refereeAnimator.transform)
                    {
                        child.localEulerAngles = Vector3.zero;
                    }
                }

                float targetY = (selectedPlayer == PlayerType.Ronaldo || selectedPlayer == PlayerType.Vini) ? 0f : 180f;

                Debug.Log($"[HaalandGameManager] Rotating Referee '{refereeAnimator.gameObject.name}' to Y={targetY} for {selectedPlayer}");

                refereeAnimator.transform.localEulerAngles = new Vector3(0f, targetY, 0f);
            }

            if (selectedPlayer == PlayerType.Ronaldo)
            {
                // === TH1: CHỌN ĐÚNG (RONALDO) - CHIẾN THẮNG ===
                Debug.Log("[HaalandGameManager] Correct Choice: Ronaldo! Game Won.");
                
                // Analytics: Challenge solved
                AppLovinAnalytics.Track(ALEvent.CHALLENGE_SOLVED);

                isGameWon = true;
                canClickToStore = false; // Tuyệt đối KHÔNG mở store ngay khi vừa click chọn Ronaldo

                // Tắt Question UI & Wrong Choice UI
                if (questionUI != null) questionUI.SetActive(false);
                if (wrongChoiceUI != null) wrongChoiceUI.SetActive(false);

                // Ẩn 4 Icon chọn nhưng bảo toàn Canvas cha nếu winChoiceUI nằm trong đó
                if (iconListUI != null)
                {
                    if (winChoiceUI != null && winChoiceUI.transform.IsChildOf(iconListUI.transform))
                    {
                        iconListUI.SetActive(true);
                        foreach (Transform child in iconListUI.transform)
                        {
                            if (child.gameObject != winChoiceUI && 
                                (winExtraObj1 == null || child.gameObject != winExtraObj1) && 
                                (winExtraObj2 == null || child.gameObject != winExtraObj2))
                            {
                                child.gameObject.SetActive(false);
                            }
                        }
                    }
                    else
                    {
                        iconListUI.SetActive(false);
                    }
                }

                // BẬT NGAY LẬP TỨC: UI Chọn đúng (You Win) & Object phụ (Pháo hoa Confetti)
                if (winChoiceUI != null)
                {
                    Transform p = winChoiceUI.transform.parent;
                    while (p != null)
                    {
                        p.gameObject.SetActive(true);
                        p = p.parent;
                    }
                    winChoiceUI.SetActive(true);
                }
                if (winExtraObj1 != null) winExtraObj1.SetActive(true);
                if (winExtraObj2 != null) winExtraObj2.SetActive(true);

                // Sound Confetti khi người chơi chọn đúng
                if (Ply_SoundManager.Instance != null) Ply_SoundManager.Instance.PlayFx(FxType.Confetti);

                // 1. Đổi Sprite Ronaldo -> Sad (Buồn)
                if (ronaldoSpriteRenderer != null && ronaldoSadSprite != null)
                {
                    ronaldoSpriteRenderer.sprite = ronaldoSadSprite;
                }

                // Ronaldo buồn + Chat 'You got me'
                if (ronaldoChatBubble != null) ronaldoChatBubble.SetActive(true);

                // Chờ sau winPlayerDelay (mặc định 3s) mới hiện Object Cầu thủ khi Thắng và tắt dàn cầu thủ
                if (winPlayerDelay > 0f)
                {
                    Invoke(nameof(ShowWinPlayerObject), winPlayerDelay);
                }
                else
                {
                    ShowWinPlayerObject();
                }
            }
            else
            {
                // === TH2: CHỌN SAI (VINI / MESSI / MBAPPE) ===
                Debug.Log($"[HaalandGameManager] Wrong Choice: {selectedPlayer}!");
                
                // Analytics: Challenge failed
                AppLovinAnalytics.Track(ALEvent.CHALLENGE_FAILED);

                // 1. Đổi Sprite Ronaldo -> Evil Laugh (Cười nham hiểm)
                if (ronaldoSpriteRenderer != null && ronaldoEvilLaughSprite != null)
                {
                    ronaldoSpriteRenderer.sprite = ronaldoEvilLaughSprite;
                }

                // Tắt Question UI & Win Choice UI & 2 obj phụ -> Bật Wrong Choice UI
                if (questionUI != null) questionUI.SetActive(false);
                if (winChoiceUI != null) winChoiceUI.SetActive(false);
                if (winExtraObj1 != null) winExtraObj1.SetActive(false);
                if (winExtraObj2 != null) winExtraObj2.SetActive(false);
                if (wrongChoiceUI != null) wrongChoiceUI.SetActive(true);

                // Sound Lose2 khi hiện Wrong Choice UI
                if (Ply_SoundManager.Instance != null) Ply_SoundManager.Instance.PlayFx(FxType.Lose2);

                // 2. Đổi Sprite của Cầu thủ được chọn thành Sprite Sad (Buồn/Phản đối) + Chat
                if (selectedPlayer == PlayerType.Messi)
                {
                    if (messiSpriteRenderer != null && messiSadSprite != null) messiSpriteRenderer.sprite = messiSadSprite;
                    if (messiChatBubble != null) messiChatBubble.SetActive(true);
                }
                else if (selectedPlayer == PlayerType.Vini)
                {
                    if (viniSpriteRenderer != null && viniSadSprite != null) viniSpriteRenderer.sprite = viniSadSprite;
                    if (viniChatBubble != null) viniChatBubble.SetActive(true);
                }
                else if (selectedPlayer == PlayerType.Mbappe)
                {
                    if (mbappeSpriteRenderer != null && mbappeSadSprite != null) mbappeSpriteRenderer.sprite = mbappeSadSprite;
                    if (mbappeChatBubble != null) mbappeChatBubble.SetActive(true);
                }

                // Sau khi hiện Wrong UI -> Chơi lại (TH1: Replay Messi xoạc L->R + Tackle)
                Invoke(nameof(ReplayLevel1), nextActionDelay);
            }
        }

        public void DisableStandPlayers()
        {
            if (standPlayers == null) return;
            ResetStandPlayersToFrameZero();
            standPlayers.SetActive(false);
        }

        public void ResetStandPlayersToFrameZero()
        {
            if (standPlayers == null) return;

            if (standPlayersAnimator != null)
            {
                // Nếu standPlayers đang active: tua ngay về frame 0 của playerEnter và ép cập nhật Transform
                if (standPlayers.activeSelf)
                {
                    standPlayersAnimator.Play("playerEnter", 0, 0f);
                    standPlayersAnimator.Update(0f);
                }
                else
                {
                    // Nếu đang bị tắt: bật tạm lên 1 tích tắc để Animator ghi nhận frame 0 vào các transform con rồi tắt lại
                    standPlayers.SetActive(true);
                    standPlayersAnimator.Play("playerEnter", 0, 0f);
                    standPlayersAnimator.Update(0f);
                    standPlayers.SetActive(false);
                }
            }
        }

        public void ShowWinPlayerObject()
        {
            Debug.Log("[HaalandGameManager] ShowWinPlayerObject: Showing win player object, showing TapToPlay, and hiding winChoiceUI.");

            // Tắt các object cũ: Cầu thủ bị đau, Dàn cầu thủ & Chat bubble
            if (haalandHurt != null) haalandHurt.SetActive(false);
            DisableStandPlayers();
            if (ronaldoChatBubble != null) ronaldoChatBubble.SetActive(false);

            // TẮT UI Chọn đúng (You Win)
            if (winChoiceUI != null) winChoiceUI.SetActive(false);

            // BẬT Object Cầu thủ khi Thắng
            if (haalandWin != null) haalandWin.SetActive(true);

            // HIỆN LẠI Object TapToPlay (kêu gọi click tải game)
            if (tutUI != null) tutUI.SetActive(true);

            // Hiệu ứng pháo hoa (nếu có gán)
            if (winExtraObj1 != null) winExtraObj1.SetActive(true);
            if (winExtraObj2 != null) winExtraObj2.SetActive(true);

            // Kích hoạt cho phép người chơi click tiếp theo để mở Store
            StartCoroutine(EnableClickToStoreRoutine());
        }

        private System.Collections.IEnumerator EnableClickToStoreRoutine()
        {
            // Đợi người chơi nhả chuột/tay hiện tại ra trước
            yield return null;
            while (Input.GetMouseButton(0))
            {
                yield return null;
            }
            yield return new WaitForSeconds(0.2f);
            canClickToStore = true;
            Debug.Log("[HaalandGameManager] Đã kích hoạt: Chạm màn hình bất kỳ đâu để ra Store!");
        }

        private void GoToLevel2()
        {
            Debug.Log("[HaalandGameManager] GoToLevel2: Transitioning to Level 2 (Messi Tackle).");
            currentLevel = 2;
            InitLevel();
            if (tutUI != null) tutUI.SetActive(false);
            Invoke(nameof(StartTackleAfterDelay), dribbleToTackleDelay);
        }

        private void ReplayLevel1()
        {
            Debug.Log("[HaalandGameManager] ReplayLevel1: Replaying Level 1 with Messi Tackle.");
            
            // Analytics: Challenge retry
            AppLovinAnalytics.Track(ALEvent.CHALLENGE_RETRY);
            
            currentLevel = 2; // Chạy Messi xoạc theo sơ đồ Replay
            InitLevel();
            if (tutUI != null) tutUI.SetActive(false);
            Invoke(nameof(StartTackleAfterDelay), dribbleToTackleDelay);
        }

        private void StartTackleAfterDelay()
        {
            OnUserTapStart();
        }

        // 1. Click đầu tiên (OnUserTapStart)
        public void OnUserTapStart()
        {
            if (isTackleStarted) return;
            isTackleStarted = true;
            Debug.Log("[HaalandGameManager] OnUserTapStart: Game started.");
            
            // Analytics: Challenge started
            AppLovinAnalytics.Track(ALEvent.CHALLENGE_STARTED);

            // Ẩn tutUI ("TAP TO PLAY")
            if (tutUI != null) tutUI.SetActive(false);

            // SetTrigger cho Haaland rê bóng di chuyển ngay khi người chơi click lần đầu
            if (haalandDribbleAnimator != null)
            {
                PlayOrTriggerAnimation(haalandDribbleAnimator, startHaalandDribbleTrigger, "StartHaalandDribble");
            }

            if (currentLevel != 1)
            {
                // Reset Sprite tất cả cầu thủ về origin khi Messi chuẩn bị xoạc bóng
                ResetPlayerSpritesToOrigin();

                // Tắt UI chọn sai & Win Choice UI & 2 obj phụ -> Bật lại Question UI khi Messi xoạc bóng lại
                if (wrongChoiceUI != null) wrongChoiceUI.SetActive(false);
                if (winChoiceUI != null) winChoiceUI.SetActive(false);
                if (winExtraObj1 != null) winExtraObj1.SetActive(false);
                if (winExtraObj2 != null) winExtraObj2.SetActive(false);
                if (questionUI != null) questionUI.SetActive(true);
            }

            if (tackleAnimDelay > 0f)
            {
                Invoke(nameof(PlayTackleAnimationAndTimers), tackleAnimDelay);
            }
            else
            {
                PlayTackleAnimationAndTimers();
            }
        }

        private void PlayTackleAnimationAndTimers()
        {
            Debug.Log("[HaalandGameManager] PlayTackleAnimationAndTimers: Triggering tackle animation.");

            // Bật GameObject xoạc bóng và phát Trigger xoạc bóng
            if (currentLevel == 1)
            {
                if (ronaldoTackle != null) ronaldoTackle.SetActive(true);
                PlayOrTriggerAnimation(ronaldoTackleAnimator, startRonaldoTackleTrigger, "StartRonaldoTackle");
            }
            else
            {
                if (messiTackle != null) messiTackle.SetActive(true);
                PlayOrTriggerAnimation(messiTackleAnimator, startMessiTackleTrigger, "StartMessiTackle");
            }

            // Tự động đếm giờ theo các mốc thời gian nếu useAutoTimers = true
            if (useAutoTimers)
            {
                Invoke(nameof(PlayTackleSound), tackleSoundDelay);
                Invoke(nameof(OnTackleFinished), tackleHideDelay);
                Invoke(nameof(OnImpactCloudStart), impactCloudDelay);
                Invoke(nameof(ShowHaalandHurt), impactCloudDelay + haalandHurtDelay);
                Invoke(nameof(OnCloudFinished), impactCloudDelay + cloudDuration);
            }
            else
            {
                PlayTackleSound();
            }
        }

        private void PlayTackleSound()
        {
            if (Ply_SoundManager.Instance != null) Ply_SoundManager.Instance.PlayFx(FxType.Tackle);
        }

        // 2. Sau 0.5s (OnTackleFinished)
        public void OnTackleFinished()
        {
            Debug.Log("[HaalandGameManager] OnTackleFinished: Hiding tackle object.");
            // Tắt GameObject Rolnaldo xoạc bóng (hoặc Messi xoạc bóng)
            if (ronaldoTackle != null) ronaldoTackle.SetActive(false);
            if (messiTackle != null) messiTackle.SetActive(false);

            // Tắt 2 obj phụ của win choice sau khi Messi tackle xong
            if (winExtraObj1 != null) winExtraObj1.SetActive(false);
            if (winExtraObj2 != null) winExtraObj2.SetActive(false);
            if (haalandWin != null) haalandWin.SetActive(false);
        }

        // 3. Va chạm (OnImpactCloudStart)
        public void OnImpactCloudStart()
        {
            Debug.Log("[HaalandGameManager] OnImpactCloudStart: Dribble image hidden, FightingCloud activated.");
            // Tắt GameObject ảnh re bong (con của Haaland rê bóng)
            if (haalandDribbleImage != null) haalandDribbleImage.SetActive(false);

            // Đồng thời BẬT GameObject FightingCloud
            if (fightingCloud != null) fightingCloud.SetActive(true);
        }

        // 4. Sau 2.0s từ khi bật Cloud (ShowHaalandHurt)
        public void ShowHaalandHurt()
        {
            Debug.Log("[HaalandGameManager] ShowHaalandHurt: 2s after Cloud -> HaalandHurt activated.");
            if (haalandHurt != null) haalandHurt.SetActive(true);
        }

        // 5. Sau 3.0s mây khói (OnCloudFinished)
        public void OnCloudFinished()
        {
            Debug.Log("[HaalandGameManager] OnCloudFinished: 3s reached -> FightingCloud hidden, StandPlayer & QuestionUI & IconListUI activated.");
            isStandPlayerEntered = true; 

            // TẮT GameObject FightingCloud
            if (fightingCloud != null) fightingCloud.SetActive(false);

            // Đảm bảo BẬT GameObject Haaland Dau
            if (haalandHurt != null) haalandHurt.SetActive(true);

            // Sound sau khi hết khói và cầu thủ bị chấn thương
            if (Ply_SoundManager.Instance != null) Ply_SoundManager.Instance.PlayFx(FxType.HaalandHurt);

            // Bật UI Câu hỏi (Question UI) & 4 Icon chọn cầu thủ (Icon List UI) cùng lúc với StandPlayer
            if (questionUI != null) questionUI.SetActive(true);
            if (iconListUI != null) iconListUI.SetActive(true);

            if (iconListAnimator != null) iconListAnimator.PlayGrowAnimation();
            else if (iconListUI != null)
            {
                var anim = iconListUI.GetComponent<IconListAnimator>();
                if (anim != null) anim.PlayGrowAnimation();
            }

            // Active GameObject StandPlayer và phát Trigger di chuyển vào của nó (standPlayerEnterTrigger)
            if (standPlayers != null)
            {
                if (standPlayersAnimator != null)
                {
                    standPlayersAnimator.Play("playerEnter", 0, 0f);
                }
                standPlayers.SetActive(true);
                PlayOrTriggerAnimation(standPlayersAnimator, standPlayerEnterTrigger, "playerEnter");
            }

            // Hẹn giờ 0.5s sau khi active StandPlayer -> Phát animation của Trọng tài
            if (useAutoTimers)
            {
                Invoke(nameof(PlayRefereeAnimation), refereeAnimDelay);
            }
        }

        // Sau 0.5s từ khi active StandPlayer -> Phát animation Trọng tài (PlayRefereeAnimation)
        public void PlayRefereeAnimation()
        {
            Debug.Log("[HaalandGameManager] PlayRefereeAnimation: Playing referee animation.");
            if (refereeAnimator != null)
            {
                PlayOrTriggerAnimation(refereeAnimator, refereeLookAroundTrigger, "Trongtai_LeftRight");
            }
        }

        // Khi StandPlayer di chuyển xong (OnLineupComplete)
        public void OnLineupComplete()
        {
            Debug.Log("[HaalandGameManager] OnLineupComplete: StandPlayer lineup complete.");
            isStandPlayerEntered = true;
            if (questionUI != null) questionUI.SetActive(true);
            if (iconListUI != null) iconListUI.SetActive(true);
            PlayRefereeAnimation();
        }

        // 6. Khi Trọng tài kết thúc anim giơ thẻ đỏ (OnRedCardFinished)
        public void OnRedCardFinished()
        {
            Debug.Log("[HaalandGameManager] OnRedCardFinished: Referee Red Card animation finished.");
        }

        public void GoToStore()
        {
            if (isGameWon && !canClickToStore)
            {
                Debug.Log("[HaalandGameManager] GoToStore: Bỏ qua click vì đang trong thời gian mừng chiến thắng.");
                return;
            }
            OpenStore();
        }

        public void OpenStore()
        {
            Debug.Log("[HaalandGameManager] OpenStore: Redirecting to Store.");
            AppLovinAnalytics.Track(ALEvent.CTA_CLICKED);
            LifeCycle.GameEnded();
            Playable.InstallFullGame();
        }

        private void Update()
        {
            // 1. Tự động kích hoạt khi người chơi click lần đầu (Tap to play)
            if (!isTackleStarted && Input.GetMouseButtonDown(0))
            {
                OnUserTapStart();
                return;
            }

            // 2. Sau khi đã hiện Cầu thủ Thắng & TapToPlay, người chơi click tiếp theo mới mở Store
            if (canClickToStore && Input.GetMouseButtonDown(0))
            {
                canClickToStore = false;
                OpenStore();
                return;
            }

            // Ở Level 2 (Messi xoạc bóng), khi mọi người đã bước vào, click bất kỳ đâu trên màn hình sẽ mở Store
            if (currentLevel == 2 && isStandPlayerEntered && !isChoiceMade && Input.GetMouseButtonDown(0))
            {
                isChoiceMade = true;
                OpenStore();
            }
        }

        private void PlayOrTriggerAnimation(Animator anim, string triggerName, string defaultStateName)
        {
            if (anim == null) return;

            anim.enabled = true;

            // 1. SetTrigger nếu có triggerName
            if (!string.IsNullOrEmpty(triggerName))
            {
                anim.SetTrigger(triggerName);
            }

            // 2. Chỉ gọi anim.Play nếu Animator thực sự có State tên defaultStateName
            if (!string.IsNullOrEmpty(defaultStateName))
            {
                int stateHash = Animator.StringToHash(defaultStateName);
                if (anim.HasState(0, stateHash))
                {
                    anim.Play(stateHash, 0, 0f);
                }
            }
        }
    }
}
