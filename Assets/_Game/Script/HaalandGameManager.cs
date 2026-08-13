using UnityEngine;
using Luna.Unity;

namespace HaalandGame
{
    public class HaalandGameManager : MonoBehaviour
    {
        public static HaalandGameManager Instance { get; private set; }

        [Header("=== 1. HƯỚNG DẪN TAP TO PLAY ===")]
        [Tooltip("GameObject TAP TO PLAY (Click lần đầu để ẩn)")]
        public GameObject tutUI;

        [Header("=== 2. XOẠC BÓNG (RONALDO / MESSI) ===")]
        [Tooltip("GameObject Ronaldo xoạc bóng")]
        public GameObject ronaldoTackle;
        public Animator ronaldoTackleAnimator;
        public string startRonaldoTackleTrigger = "StartRonaldoTackle";

        [Tooltip("GameObject Messi xoạc bóng (Lv2 / Replay)")]
        public GameObject messiTackle;
        public Animator messiTackleAnimator;
        public string startMessiTackleTrigger = "StartMessiTackle";

        [Header("=== 3. HAALAND RÊ BÓNG & KHÓI (FIGHTING CLOUD) ===")]
        [Tooltip("Obj ảnh 're bong' (con của Haaland rê bóng) - sẽ tắt khi va chạm")]
        public GameObject haalandDribbleImage;

        [Tooltip("GameObject FightingCloud (Bật khi va chạm, tắt sau 3s)")]
        public GameObject fightingCloud;

        [Tooltip("GameObject Haaland Dau (Bật khi tắt FightingCloud)")]
        public GameObject haalandHurt;

        [Header("=== 4. CẦU THỦ BƯỚC VÀO (STAND PLAYER) ===")]
        [Tooltip("GameObject StandPlayer chứa các cầu thủ & trọng tài")]
        public GameObject standPlayers;
        public Animator standPlayersAnimator;
        public string standPlayerEnterTrigger = "playerEnter";

        [Header("=== 5. TRỌNG TÀI & CÂU HỎI (QUESTION UI & REFEREE) ===")]
        [Tooltip("UI câu hỏi 'Who fouled Haaland?'")]
        public GameObject questionUI;

        [Tooltip("UI bật khi chọn SAI (khi Ronaldo cười nham hiểm)")]
        public GameObject wrongChoiceUI;

        [Tooltip("UI bật khi chọn ĐÚNG (khi chọn đúng Ronaldo)")]
        public GameObject winChoiceUI;

        [Tooltip("Object phụ 1 bật cùng Win Choice UI")]
        public GameObject winExtraObj1;

        [Tooltip("Object phụ 2 bật cùng Win Choice UI")]
        public GameObject winExtraObj2;

        [Tooltip("UI 4 Icon chọn cầu thủ")]
        public GameObject iconListUI;

        [Tooltip("Animator Trọng Tài")]
        public Animator refereeAnimator;
        public string refereeLookAroundTrigger = "TriggerTurnLeftRight";

        [Header("=== 6. TÙY CHỌN ĐẾM GIỜ TỰ ĐỘNG (AUTO TIMERS) ===")]
        [Tooltip("Tự động chạy chuỗi thời gian nếu không đặt Animation Event trên timeline")]
        public bool useAutoTimers = true;
        public float tackleHideDelay = 0.5f;   // Sau 0.5s tắt xoạc bóng
        public float impactCloudDelay = 0.3f;  // Thời điểm va chạm bật cloud
        public float haalandHurtDelay = 2.0f;  // Sau 2.0s kể từ khi bật Cloud -> Bật Haaland bị đau
        public float cloudDuration = 3.0f;     // Hết 3.0s mây khói tắt -> Bật StandPlayer
        public float refereeAnimDelay = 0.5f;  // Sau 0.5s kể từ khi bật StandPlayer -> Phát Anim trọng tài
        public float nextActionDelay = 2.0f;   // Sau 2.0s kể từ khi hiện Win/Wrong UI -> Bật lại Dribble
        public float dribbleToTackleDelay = 0.5f; // Sau 0.5s kể từ khi bật Dribble -> Mới kích hoạt Messi xoạc bóng

        [Header("=== 7. CHỌN CẦU THỦ & CHAT BUBBLES ===")]
        public Animator ronaldoStandAnimator;
        public Animator viniStandAnimator;
        public Animator messiStandAnimator;
        public Animator mbappeStandAnimator;

        [Tooltip("Chat Bubble Ronaldo ('You got me')")]
        public GameObject ronaldoChatBubble;

        [Tooltip("Chat Bubble Messi ('I will tell my Father')")]
        public GameObject messiChatBubble;

        [Tooltip("Chat Bubble Vini ('It's not me')")]
        public GameObject viniChatBubble;

        [Tooltip("Chat Bubble Mbappe ('It's not me')")]
        public GameObject mbappeChatBubble;

        [Header("=== 8. PLAYER SPRITE REACTIONS ===")]
        [Tooltip("SpriteRenderer của Ronaldo Stand")]
        public SpriteRenderer ronaldoSpriteRenderer;
        [Tooltip("Sprite Ronaldo buồn (Khi chọn ĐÚNG Ronaldo)")]
        public Sprite ronaldoSadSprite;
        [Tooltip("Sprite Ronaldo cười nham hiểm (Khi chọn SAI người khác)")]
        public Sprite ronaldoEvilLaughSprite;

        [Header("--- Messi Stand ---")]
        public SpriteRenderer messiSpriteRenderer;
        [Tooltip("Sprite Messi buồn/phản đối (Khi chọn SAI Messi)")]
        public Sprite messiSadSprite;

        [Header("--- Vini Stand ---")]
        public SpriteRenderer viniSpriteRenderer;
        [Tooltip("Sprite Vini buồn/phản đối (Khi chọn SAI Vini)")]
        public Sprite viniSadSprite;

        [Header("--- Mbappe Stand ---")]
        public SpriteRenderer mbappeSpriteRenderer;
        [Tooltip("Sprite Mbappe buồn/phản đối (Khi chọn SAI Mbappe)")]
        public Sprite mbappeSadSprite;

        [Header("--- Trọng Tài Stand ---")]
        public SpriteRenderer refereeSpriteRenderer;
        [Tooltip("Sprite Trọng Tài khi chọn xong cầu thủ")]
        public Sprite refereeReactionSprite;

        public int currentLevel = 1;
        private bool isTackleStarted = false;
        private bool isChoiceMade = false;
        private bool isStandPlayerEntered = false;

        private Sprite originalRonaldoSprite;
        private Sprite originalMessiSprite;
        private Sprite originalViniSprite;
        private Sprite originalMbappeSprite;
        private Sprite originalRefereeSprite;

        private void Awake()
        {
            if (Instance == null) Instance = this;
            else Destroy(gameObject);
        }

        private void Start()
        {
            if (ronaldoSpriteRenderer != null) originalRonaldoSprite = ronaldoSpriteRenderer.sprite;
            if (messiSpriteRenderer != null) originalMessiSprite = messiSpriteRenderer.sprite;
            if (viniSpriteRenderer != null) originalViniSprite = viniSpriteRenderer.sprite;
            if (mbappeSpriteRenderer != null) originalMbappeSprite = mbappeSpriteRenderer.sprite;
            if (refereeSpriteRenderer != null) originalRefereeSprite = refereeSpriteRenderer.sprite;

            InitLevel();
        }

        public void InitLevel()
        {
            isTackleStarted = false;
            isChoiceMade = false;
            isStandPlayerEntered = false;
            CancelInvoke();

            if (tutUI != null) tutUI.SetActive(true);
            if (questionUI != null) questionUI.SetActive(false);
            if (wrongChoiceUI != null) wrongChoiceUI.SetActive(false);
            if (winChoiceUI != null) winChoiceUI.SetActive(false);
            if (winExtraObj1 != null) winExtraObj1.SetActive(false);
            if (winExtraObj2 != null) winExtraObj2.SetActive(false);
            if (iconListUI != null) iconListUI.SetActive(false);

            if (haalandDribbleImage != null) haalandDribbleImage.SetActive(true);
            if (fightingCloud != null) fightingCloud.SetActive(false);
            if (haalandHurt != null) haalandHurt.SetActive(false);
            if (standPlayers != null) standPlayers.SetActive(false);

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

            // Đổi Sprite Trọng Tài sang refereeReactionSprite (nếu được gán)
            if (refereeSpriteRenderer != null && refereeReactionSprite != null)
            {
                refereeSpriteRenderer.sprite = refereeReactionSprite;
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
                // === TH1: CHỌN ĐÚNG (RONALDO) ===
                Debug.Log("[HaalandGameManager] Correct Choice: Ronaldo!");

                // Tắt Question UI & Wrong Choice UI -> Bật Win Choice UI và 2 obj phụ
                if (questionUI != null) questionUI.SetActive(false);
                if (wrongChoiceUI != null) wrongChoiceUI.SetActive(false);
                if (winChoiceUI != null) winChoiceUI.SetActive(true);
                if (winExtraObj1 != null) winExtraObj1.SetActive(true);
                if (winExtraObj2 != null) winExtraObj2.SetActive(true);

                // Sound Confetti khi hiện Win Choice UI
                if (Ply_SoundManager.Instance != null) Ply_SoundManager.Instance.PlayFx(FxType.Confetti);

                // 1. Đổi Sprite Ronaldo -> Sad (Buồn)
                if (ronaldoSpriteRenderer != null && ronaldoSadSprite != null)
                {
                    ronaldoSpriteRenderer.sprite = ronaldoSadSprite;
                }

                // Ronaldo buồn + Chat 'You got me'
                if (ronaldoStandAnimator != null)
                {
                    PlayOrTriggerAnimation(ronaldoStandAnimator, "Sad", "Sad");
                }
                if (ronaldoChatBubble != null) ronaldoChatBubble.SetActive(true);

                // Sau khi hiện Win UI -> Sang Level 2 (TH2: Messi xoạc L->R nhanh)
                Invoke(nameof(GoToLevel2), nextActionDelay);
            }
            else
            {
                // === TH2: CHỌN SAI (VINI / MESSI / MBAPPE) ===
                Debug.Log($"[HaalandGameManager] Wrong Choice: {selectedPlayer}!");

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

                // Ronaldo cười
                if (ronaldoStandAnimator != null)
                {
                    PlayOrTriggerAnimation(ronaldoStandAnimator, "Laugh", "Laugh");
                }

                // 2. Đổi Sprite của Cầu thủ được chọn thành Sprite Sad (Buồn/Phản đối) + Chat
                if (selectedPlayer == PlayerType.Messi)
                {
                    if (messiSpriteRenderer != null && messiSadSprite != null) messiSpriteRenderer.sprite = messiSadSprite;
                    if (messiStandAnimator != null) PlayOrTriggerAnimation(messiStandAnimator, "Protest", "Protest");
                    if (messiChatBubble != null) messiChatBubble.SetActive(true);
                }
                else if (selectedPlayer == PlayerType.Vini)
                {
                    if (viniSpriteRenderer != null && viniSadSprite != null) viniSpriteRenderer.sprite = viniSadSprite;
                    if (viniStandAnimator != null) PlayOrTriggerAnimation(viniStandAnimator, "Protest", "Protest");
                    if (viniChatBubble != null) viniChatBubble.SetActive(true);
                }
                else if (selectedPlayer == PlayerType.Mbappe)
                {
                    if (mbappeSpriteRenderer != null && mbappeSadSprite != null) mbappeSpriteRenderer.sprite = mbappeSadSprite;
                    if (mbappeStandAnimator != null) PlayOrTriggerAnimation(mbappeStandAnimator, "Protest", "Protest");
                    if (mbappeChatBubble != null) mbappeChatBubble.SetActive(true);
                }

                // Sau khi hiện Wrong UI -> Chơi lại (TH1: Replay Messi xoạc L->R + Tackle)
                Invoke(nameof(ReplayLevel1), nextActionDelay);
            }
        }

        private void GoToLevel2()
        {
            Debug.Log("[HaalandGameManager] GoToLevel2: Transitioning to Level 2 (Messi Tackle).");
            currentLevel = 2;
            InitLevel();
            Invoke(nameof(StartTackleAfterDelay), dribbleToTackleDelay);
        }

        private void ReplayLevel1()
        {
            Debug.Log("[HaalandGameManager] ReplayLevel1: Replaying Level 1 with Messi Tackle.");
            currentLevel = 2; // Chạy Messi xoạc theo sơ đồ Replay
            InitLevel();
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
            Debug.Log("[HaalandGameManager] OnUserTapStart: Game started, triggering tackle.");

            // Ẩn tutUI ("TAP TO PLAY")
            if (tutUI != null) tutUI.SetActive(false);

            // Bật GameObject xoạc bóng và phát Trigger xoạc bóng
            if (currentLevel == 1)
            {
                if (ronaldoTackle != null) ronaldoTackle.SetActive(true);
                PlayOrTriggerAnimation(ronaldoTackleAnimator, startRonaldoTackleTrigger, "StartRonaldoTackle");
            }
            else
            {
                // Reset Sprite tất cả cầu thủ về origin khi Messi bắt đầu xoạc bóng
                ResetPlayerSpritesToOrigin();

                // Tắt UI chọn sai & Win Choice UI & 2 obj phụ -> Bật lại Question UI khi Messi xoạc bóng lại
                if (wrongChoiceUI != null) wrongChoiceUI.SetActive(false);
                if (winChoiceUI != null) winChoiceUI.SetActive(false);
                if (winExtraObj1 != null) winExtraObj1.SetActive(false);
                if (winExtraObj2 != null) winExtraObj2.SetActive(false);
                if (questionUI != null) questionUI.SetActive(true);

                if (messiTackle != null) messiTackle.SetActive(true);
                PlayOrTriggerAnimation(messiTackleAnimator, startMessiTackleTrigger, "StartMessiTackle");
            }

            // Tự động đếm giờ theo các mốc thời gian nếu useAutoTimers = true
            if (useAutoTimers)
            {
                Invoke(nameof(OnTackleFinished), tackleHideDelay);
                Invoke(nameof(OnImpactCloudStart), impactCloudDelay);
                Invoke(nameof(ShowHaalandHurt), impactCloudDelay + haalandHurtDelay);
                Invoke(nameof(OnCloudFinished), impactCloudDelay + cloudDuration);
            }
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

            // Bật UI Câu hỏi (Question UI) & 4 Icon chọn cầu thủ (Icon List UI) cùng lúc với StandPlayer
            if (questionUI != null) questionUI.SetActive(true);
            if (iconListUI != null) iconListUI.SetActive(true);

            // Active GameObject StandPlayer và phát Trigger di chuyển vào của nó (standPlayerEnterTrigger)
            if (standPlayers != null)
            {
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
            OpenStore();
        }

        public void OpenStore()
        {
            Debug.Log("[HaalandGameManager] OpenStore: Redirecting to Store.");
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
