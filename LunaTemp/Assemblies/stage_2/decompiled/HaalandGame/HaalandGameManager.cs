using System.Collections;
using System.Collections.Generic;
using Luna.Unity;
using UnityEngine;
using UnityEngine.Events;

namespace HaalandGame
{
	public class HaalandGameManager : MonoBehaviour
	{
		private struct TransformState
		{
			public Transform transform;

			public Vector3 localPosition;

			public Quaternion localRotation;

			public Vector3 localScale;
		}

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

		[VnLabel("Tốc độ anim Messi xoạc bóng")]
		[Tooltip("Hệ số tốc độ animation Messi chạy xoạc (1.0 = bình thường, 0.75 = chạy chậm lại để nhìn rõ cú xoạc)")]
		public float messiTackleSpeed = 0.75f;

		[VnLabel("Độ trễ trước khi xoạc bóng (s)")]
		[Tooltip("Thời gian chờ (delay) trước khi phát animation xoạc bóng (mặc định 1.0s)")]
		public float tackleAnimDelay = 1f;

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

		[VnLabel("Object Cầu thủ Win (khi Chọn Đúng)")]
		[Tooltip("GameObject bật lên NGAY LẬP TỨC khi chọn ĐÚNG Ronaldo (đồng thời tắt Cầu thủ bị đau). Khác với Object Cầu thủ khi Thắng xuất hiện sau 3s.")]
		public GameObject haalandWinOnCorrect;

		[VnLabel("Object Cầu thủ khi Thắng")]
		[Tooltip("GameObject bật lên khi người chơi chọn ĐÚNG (Đồng thời tắt Object Cầu thủ bị đau)")]
		public GameObject haalandWin;

		[VnLabel("Độ trễ hiện Cầu thủ khi Thắng (s)")]
		[Tooltip("Thời gian chờ (giây) kể từ khi chọn ĐÚNG đến khi hiện Object Cầu thủ khi Thắng (mặc định 3.0s)")]
		public float winPlayerDelay = 3f;

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
		[Tooltip("Thời gian ẩn Ronaldo xoạc bóng (mặc định 0.5s)")]
		public float tackleHideDelay = 0.5f;

		[HideInInspector]
		public float impactCloudDelay = 0.2f;

		[VnLabel("Độ trễ ẩn xoạc bóng Messi (s)")]
		[Tooltip("Thời gian ẩn Messi xoạc bóng khi replay (mặc định 0.7s - tăng lên khi Messi chạy chậm)")]
		public float messiTackleHideDelay = 0.7f;

		[VnLabel("Thời điểm va chạm mây khói Messi (s)")]
		[Tooltip("Thời điểm va chạm bật mây khói tính từ lúc Messi bắt đầu xoạc khi replay (mặc định 0.45s - tăng lên khi Messi chạy chậm)")]
		public float messiImpactCloudDelay = 0.45f;

		[VnLabel("Độ trễ Cầu thủ bị đau (s)")]
		[Tooltip("Sau bao nhiêu giây kể từ khi bật Mây khói thì kích hoạt Cầu thủ chính ôm chân nằm sân")]
		public float haalandHurtDelay = 2f;

		[VnLabel("Thời lượng mây khói (s)")]
		[Tooltip("Thời gian tồn tại của mây khói trước khi tan và dàn cầu thủ bước vào")]
		public float cloudDuration = 3f;

		[VnLabel("Độ trễ anim Trọng tài (s)")]
		[Tooltip("Sau bao nhiêu giây kể từ khi bật dàn cầu thủ thì Trọng tài bắt đầu quay đầu nhìn qua lại")]
		public float refereeAnimDelay = 0.5f;

		[VnLabel("Thời gian chờ kết quả (s)")]
		[Tooltip("Thời gian chờ sau khi người chơi chọn xong (hiện UI Thắng/Thua) trước khi chuyển sang Level 2/Replay")]
		public float nextActionDelay = 2f;

		[VnLabel("Độ trễ Rê bóng -> Xoạc (s)")]
		[Tooltip("Sau bao nhiêu giây kể từ khi Haaland rê bóng lại thì Messi mới kích hoạt xoạc bóng")]
		public float dribbleToTackleDelay = 0.5f;

		[VnLabel("Độ trễ âm thanh xoạc bóng (s)")]
		[Tooltip("Độ trễ phát âm thanh xoạc bóng kể từ khi kích hoạt xoạc")]
		public float tackleSoundDelay = 0.2f;

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

		[Header("=== 10. DANH SÁCH OBJECT & EVENT THEO MỐC THỜI GIAN SAU THẮNG ===")]
		[VnLabel("Âm thanh sau Thắng (AudioClip)")]
		[Tooltip("Âm thanh phát ngay khi hiện Cầu thủ Thắng / bắt đầu chuỗi (để trống nếu không cần)")]
		public AudioClip postWinAudioClip;

		[VnLabel("Chuỗi Object theo mốc thời gian")]
		[Tooltip("Mỗi phần tử cho phép cấu hình thời điểm BẬT và thời điểm TẮT riêng biệt")]
		public List<PostWinTimedObject> postWinTimeline = new List<PostWinTimedObject>();

		[VnLabel("Sự kiện chung sau khi Thắng (Event)")]
		[Tooltip("UnityEvent chung được gọi cùng thời điểm Cầu thủ Thắng xuất hiện")]
		public UnityEvent onPostWinTriggered;

		[HideInInspector]
		public float postWinDelay = 1f;

		[HideInInspector]
		public List<GameObject> postWinObjects = new List<GameObject>();

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

		private List<TransformState> haalandDribbleOriginalStates = new List<TransformState>();

		private AudioSource customAudioSource;

		public static HaalandGameManager Instance { get; private set; }

		private void Awake()
		{
			if (Instance == null)
			{
				Instance = this;
			}
			else
			{
				Object.Destroy(base.gameObject);
			}
			AppLovinAnalytics.Track(ALEvent.LOADING);
		}

		private void Start()
		{
			if (ronaldoSpriteRenderer != null)
			{
				originalRonaldoSprite = ronaldoSpriteRenderer.sprite;
			}
			if (messiSpriteRenderer != null)
			{
				originalMessiSprite = messiSpriteRenderer.sprite;
			}
			if (viniSpriteRenderer != null)
			{
				originalViniSprite = viniSpriteRenderer.sprite;
			}
			if (mbappeSpriteRenderer != null)
			{
				originalMbappeSprite = mbappeSpriteRenderer.sprite;
			}
			if (refereeSpriteRenderer != null)
			{
				originalRefereeSprite = refereeSpriteRenderer.sprite;
			}
			if (haalandDribbleImage != null)
			{
				haalandDribbleOriginalStates.Clear();
				Transform[] componentsInChildren = haalandDribbleImage.GetComponentsInChildren<Transform>(true);
				foreach (Transform t in componentsInChildren)
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
			AppLovinAnalytics.Track(ALEvent.LOADED);
			AppLovinAnalytics.Track(ALEvent.DISPLAYED);
		}

		public void InitLevel()
		{
			isTackleStarted = false;
			isChoiceMade = false;
			isStandPlayerEntered = false;
			isGameWon = false;
			canClickToStore = false;
			StopAllCoroutines();
			CancelInvoke();
			if (tutUI != null)
			{
				tutUI.SetActive(currentLevel == 1);
			}
			if (questionUI != null)
			{
				questionUI.SetActive(false);
			}
			if (wrongChoiceUI != null)
			{
				wrongChoiceUI.SetActive(false);
			}
			if (winChoiceUI != null)
			{
				winChoiceUI.SetActive(false);
			}
			if (winExtraObj1 != null)
			{
				winExtraObj1.SetActive(false);
			}
			if (winExtraObj2 != null)
			{
				winExtraObj2.SetActive(false);
			}
			if (iconListUI != null)
			{
				foreach (Transform child2 in iconListUI.transform)
				{
					if (child2.gameObject != winChoiceUI && child2.gameObject != wrongChoiceUI)
					{
						child2.gameObject.SetActive(true);
					}
				}
				iconListUI.SetActive(false);
			}
			if (postWinTimeline != null)
			{
				foreach (PostWinTimedObject item in postWinTimeline)
				{
					if (item != null && item.targetObject != null)
					{
						item.targetObject.SetActive(false);
					}
				}
			}
			if (postWinObjects != null)
			{
				foreach (GameObject obj in postWinObjects)
				{
					if (obj != null)
					{
						obj.SetActive(false);
					}
				}
			}
			if (haalandDribbleImage != null)
			{
				foreach (TransformState state in haalandDribbleOriginalStates)
				{
					if (state.transform != null)
					{
						state.transform.localPosition = state.localPosition;
						state.transform.localRotation = state.localRotation;
						state.transform.localScale = state.localScale;
					}
				}
				Animator anim = ((haalandDribbleAnimator != null) ? haalandDribbleAnimator : haalandDribbleImage.GetComponentInChildren<Animator>(true));
				if (anim != null)
				{
					anim.enabled = true;
					anim.Play(0, 0, 0f);
					anim.Update(0f);
				}
				haalandDribbleImage.SetActive(true);
			}
			if (fightingCloud != null)
			{
				fightingCloud.SetActive(false);
			}
			if (haalandHurt != null)
			{
				haalandHurt.SetActive(false);
			}
			if (haalandWinOnCorrect != null)
			{
				haalandWinOnCorrect.SetActive(false);
			}
			if (haalandWin != null)
			{
				haalandWin.SetActive(false);
			}
			DisableStandPlayers();
			if (ronaldoTackle != null)
			{
				ronaldoTackle.SetActive(false);
			}
			if (messiTackle != null)
			{
				messiTackle.SetActive(false);
			}
			if (ronaldoChatBubble != null)
			{
				ronaldoChatBubble.SetActive(false);
			}
			if (messiChatBubble != null)
			{
				messiChatBubble.SetActive(false);
			}
			if (viniChatBubble != null)
			{
				viniChatBubble.SetActive(false);
			}
			if (mbappeChatBubble != null)
			{
				mbappeChatBubble.SetActive(false);
			}
			ResetPlayerSpritesToOrigin();
			if (!(refereeAnimator != null))
			{
				return;
			}
			refereeAnimator.enabled = true;
			PlayOrTriggerAnimation(refereeAnimator, refereeLookAroundTrigger, "Trongtai_LeftRight");
			refereeAnimator.transform.localEulerAngles = Vector3.zero;
			Transform[] componentsInChildren = refereeAnimator.GetComponentsInChildren<Transform>(true);
			foreach (Transform child in componentsInChildren)
			{
				if (child != refereeAnimator.transform)
				{
					child.localEulerAngles = Vector3.zero;
				}
			}
		}

		private void ResetPlayerSpritesToOrigin()
		{
			if (ronaldoSpriteRenderer != null && originalRonaldoSprite != null)
			{
				ronaldoSpriteRenderer.sprite = originalRonaldoSprite;
			}
			if (messiSpriteRenderer != null && originalMessiSprite != null)
			{
				messiSpriteRenderer.sprite = originalMessiSprite;
			}
			if (viniSpriteRenderer != null && originalViniSprite != null)
			{
				viniSpriteRenderer.sprite = originalViniSprite;
			}
			if (mbappeSpriteRenderer != null && originalMbappeSprite != null)
			{
				mbappeSpriteRenderer.sprite = originalMbappeSprite;
			}
			if (refereeSpriteRenderer != null && originalRefereeSprite != null)
			{
				refereeSpriteRenderer.sprite = originalRefereeSprite;
			}
		}

		public void SelectRonaldo()
		{
			OnPlayerSelected(PlayerType.Ronaldo);
		}

		public void SelectMessi()
		{
			OnPlayerSelected(PlayerType.Messi);
		}

		public void SelectVini()
		{
			OnPlayerSelected(PlayerType.Vini);
		}

		public void SelectMbappe()
		{
			OnPlayerSelected(PlayerType.Mbappe);
		}

		public void SelectPlayerByIndex(int index)
		{
			switch (index)
			{
			case 0:
				OnPlayerSelected(PlayerType.Ronaldo);
				break;
			case 1:
				OnPlayerSelected(PlayerType.Messi);
				break;
			case 2:
				OnPlayerSelected(PlayerType.Vini);
				break;
			case 3:
				OnPlayerSelected(PlayerType.Mbappe);
				break;
			default:
				Debug.LogWarning($"[HaalandGameManager] Unknown player index: {index}");
				break;
			}
		}

		public void OnPlayerSelected(PlayerType selectedPlayer)
		{
			Debug.Log($"[HaalandGameManager] OnPlayerSelected: Player selected = {selectedPlayer} (Level = {currentLevel})");
			if (currentLevel == 2)
			{
				OpenStore();
			}
			else
			{
				if (isChoiceMade)
				{
					return;
				}
				isChoiceMade = true;
				AppLovinAnalytics.Track(ALEvent.CHALLENGE_PASS_25);
				AppLovinAnalytics.Track(ALEvent.CHALLENGE_PASS_50);
				AppLovinAnalytics.Track(ALEvent.CHALLENGE_PASS_75);
				if (refereeSpriteRenderer != null && refereeReactionSprite != null)
				{
					refereeSpriteRenderer.sprite = refereeReactionSprite;
				}
				if (selectedPlayer == PlayerType.Vini)
				{
					if (Ply_Singleton<Ply_SoundManager>.Instance != null)
					{
						Ply_Singleton<Ply_SoundManager>.Instance.PlayFx(FxType.SelectVini);
					}
				}
				else if ((selectedPlayer == PlayerType.Messi || selectedPlayer == PlayerType.Mbappe) && Ply_Singleton<Ply_SoundManager>.Instance != null)
				{
					Ply_Singleton<Ply_SoundManager>.Instance.PlayFx(FxType.SelectMessiMbappe);
				}
				if (refereeAnimator != null)
				{
					refereeAnimator.enabled = true;
					refereeAnimator.Play(0, 0, 0f);
					refereeAnimator.Update(0f);
					refereeAnimator.enabled = false;
					Transform[] componentsInChildren = refereeAnimator.GetComponentsInChildren<Transform>(true);
					foreach (Transform child in componentsInChildren)
					{
						if (child != refereeAnimator.transform)
						{
							child.localEulerAngles = Vector3.zero;
						}
					}
					float targetY = ((selectedPlayer == PlayerType.Ronaldo || selectedPlayer == PlayerType.Vini) ? 0f : 180f);
					Debug.Log($"[HaalandGameManager] Rotating Referee '{refereeAnimator.gameObject.name}' to Y={targetY} for {selectedPlayer}");
					refereeAnimator.transform.localEulerAngles = new Vector3(0f, targetY, 0f);
				}
				if (selectedPlayer == PlayerType.Ronaldo)
				{
					Debug.Log("[HaalandGameManager] Correct Choice: Ronaldo! Game Won.");
					AppLovinAnalytics.Track(ALEvent.CHALLENGE_SOLVED);
					isGameWon = true;
					canClickToStore = false;
					if (haalandHurt != null)
					{
						haalandHurt.SetActive(false);
					}
					if (haalandWinOnCorrect != null)
					{
						haalandWinOnCorrect.SetActive(true);
					}
					if (wrongChoiceUI != null)
					{
						wrongChoiceUI.SetActive(false);
					}
					HideQuestionAndIcons(winChoiceUI);
					if (winChoiceUI != null)
					{
						Transform p2 = winChoiceUI.transform.parent;
						while (p2 != null)
						{
							p2.gameObject.SetActive(true);
							p2 = p2.parent;
						}
						winChoiceUI.SetActive(true);
					}
					if (winExtraObj1 != null)
					{
						winExtraObj1.SetActive(true);
					}
					if (winExtraObj2 != null)
					{
						winExtraObj2.SetActive(true);
					}
					if (Ply_Singleton<Ply_SoundManager>.Instance != null)
					{
						Ply_Singleton<Ply_SoundManager>.Instance.PlayFx(FxType.Confetti);
					}
					if (ronaldoSpriteRenderer != null && ronaldoSadSprite != null)
					{
						ronaldoSpriteRenderer.sprite = ronaldoSadSprite;
					}
					if (ronaldoChatBubble != null)
					{
						ronaldoChatBubble.SetActive(true);
					}
					if (winPlayerDelay > 0f)
					{
						Invoke("ShowWinPlayerObject", winPlayerDelay);
					}
					else
					{
						ShowWinPlayerObject();
					}
					return;
				}
				Debug.Log($"[HaalandGameManager] Wrong Choice: {selectedPlayer}!");
				AppLovinAnalytics.Track(ALEvent.CHALLENGE_FAILED);
				if (ronaldoSpriteRenderer != null && ronaldoEvilLaughSprite != null)
				{
					ronaldoSpriteRenderer.sprite = ronaldoEvilLaughSprite;
				}
				if (winChoiceUI != null)
				{
					winChoiceUI.SetActive(false);
				}
				if (winExtraObj1 != null)
				{
					winExtraObj1.SetActive(false);
				}
				if (winExtraObj2 != null)
				{
					winExtraObj2.SetActive(false);
				}
				HideQuestionAndIcons(wrongChoiceUI);
				if (wrongChoiceUI != null)
				{
					Transform p = wrongChoiceUI.transform.parent;
					while (p != null)
					{
						p.gameObject.SetActive(true);
						p = p.parent;
					}
					wrongChoiceUI.SetActive(true);
				}
				if (Ply_Singleton<Ply_SoundManager>.Instance != null)
				{
					Ply_Singleton<Ply_SoundManager>.Instance.PlayFx(FxType.Lose2);
				}
				switch (selectedPlayer)
				{
				case PlayerType.Messi:
					if (messiSpriteRenderer != null && messiSadSprite != null)
					{
						messiSpriteRenderer.sprite = messiSadSprite;
					}
					if (messiChatBubble != null)
					{
						messiChatBubble.SetActive(true);
					}
					break;
				case PlayerType.Vini:
					if (viniSpriteRenderer != null && viniSadSprite != null)
					{
						viniSpriteRenderer.sprite = viniSadSprite;
					}
					if (viniChatBubble != null)
					{
						viniChatBubble.SetActive(true);
					}
					break;
				case PlayerType.Mbappe:
					if (mbappeSpriteRenderer != null && mbappeSadSprite != null)
					{
						mbappeSpriteRenderer.sprite = mbappeSadSprite;
					}
					if (mbappeChatBubble != null)
					{
						mbappeChatBubble.SetActive(true);
					}
					break;
				}
				Invoke("ReplayLevel1", nextActionDelay);
			}
		}

		public void HideQuestionAndIcons(GameObject popupToKeep = null)
		{
			if (questionUI != null)
			{
				questionUI.SetActive(false);
			}
			if (!(iconListUI != null))
			{
				return;
			}
			if (popupToKeep != null && popupToKeep.transform.IsChildOf(iconListUI.transform))
			{
				iconListUI.SetActive(true);
				{
					foreach (Transform child in iconListUI.transform)
					{
						if (child.gameObject != popupToKeep && (winExtraObj1 == null || child.gameObject != winExtraObj1) && (winExtraObj2 == null || child.gameObject != winExtraObj2))
						{
							child.gameObject.SetActive(false);
						}
					}
					return;
				}
			}
			iconListUI.SetActive(false);
		}

		public void ShowIconList(bool show = true)
		{
			if (iconListUI == null)
			{
				return;
			}
			iconListUI.SetActive(show);
			if (!show)
			{
				return;
			}
			foreach (Transform child in iconListUI.transform)
			{
				if (child.gameObject != winChoiceUI && child.gameObject != wrongChoiceUI)
				{
					child.gameObject.SetActive(true);
				}
			}
			if (iconListAnimator != null)
			{
				iconListAnimator.PlayGrowAnimation();
				return;
			}
			IconListAnimator anim = iconListUI.GetComponentInChildren<IconListAnimator>(true);
			if (anim != null)
			{
				anim.PlayGrowAnimation();
			}
		}

		public void DisableStandPlayers()
		{
			if (!(standPlayers == null))
			{
				ResetStandPlayersToFrameZero();
				standPlayers.SetActive(false);
			}
		}

		public void ResetStandPlayersToFrameZero()
		{
			if (!(standPlayers == null) && standPlayersAnimator != null)
			{
				if (standPlayers.activeSelf)
				{
					standPlayersAnimator.Play("playerEnter", 0, 0f);
					standPlayersAnimator.Update(0f);
					return;
				}
				standPlayers.SetActive(true);
				standPlayersAnimator.Play("playerEnter", 0, 0f);
				standPlayersAnimator.Update(0f);
				standPlayers.SetActive(false);
			}
		}

		public void ShowWinPlayerObject()
		{
			Debug.Log("[HaalandGameManager] ShowWinPlayerObject: Showing win player object and hiding winChoiceUI.");
			if (haalandHurt != null)
			{
				haalandHurt.SetActive(false);
			}
			if (haalandWinOnCorrect != null)
			{
				haalandWinOnCorrect.SetActive(false);
			}
			DisableStandPlayers();
			if (ronaldoChatBubble != null)
			{
				ronaldoChatBubble.SetActive(false);
			}
			if (winChoiceUI != null)
			{
				winChoiceUI.SetActive(false);
			}
			if (haalandWin != null)
			{
				haalandWin.SetActive(true);
			}
			if (postWinAudioClip != null)
			{
				PlaySound(postWinAudioClip);
			}
			if (winExtraObj1 != null)
			{
				winExtraObj1.SetActive(true);
			}
			if (winExtraObj2 != null)
			{
				winExtraObj2.SetActive(true);
			}
			onPostWinTriggered?.Invoke();
			StartCoroutine(RunPostWinTimelineRoutine());
		}

		public void PlaySound(AudioClip clip)
		{
			if (!(clip == null))
			{
				if (customAudioSource == null)
				{
					customAudioSource = base.gameObject.AddComponent<AudioSource>();
					customAudioSource.playOnAwake = false;
					customAudioSource.spatialBlend = 0f;
				}
				customAudioSource.PlayOneShot(clip);
			}
		}

		public void PlaySoundFx(AudioClip clip)
		{
			PlaySound(clip);
		}

		private IEnumerator RunPostWinTimelineRoutine()
		{
			float maxTime = 0.5f;
			if (postWinTimeline != null && postWinTimeline.Count > 0)
			{
				foreach (PostWinTimedObject item in postWinTimeline)
				{
					if (item != null)
					{
						if (item.enableDelay > maxTime)
						{
							maxTime = item.enableDelay;
						}
						if (item.disableDelay > maxTime)
						{
							maxTime = item.disableDelay;
						}
						if (item.enableDelay >= 0f)
						{
							StartCoroutine(TriggerTimedItemEnable(item));
						}
						if (item.disableDelay > 0f)
						{
							StartCoroutine(TriggerTimedItemDisable(item));
						}
					}
				}
			}
			if (postWinObjects != null && postWinObjects.Count > 0)
			{
				yield return new WaitForSeconds(postWinDelay);
				foreach (GameObject obj in postWinObjects)
				{
					if (obj != null)
					{
						obj.SetActive(true);
					}
				}
				if (postWinDelay > maxTime)
				{
					maxTime = postWinDelay;
				}
			}
			yield return new WaitForSeconds(maxTime + 0.2f);
			StartCoroutine(EnableClickToStoreRoutine());
		}

		private IEnumerator TriggerTimedItemEnable(PostWinTimedObject item)
		{
			if (item.enableDelay > 0f)
			{
				yield return new WaitForSeconds(item.enableDelay);
			}
			if (item.targetObject != null)
			{
				item.targetObject.SetActive(true);
				Debug.Log($"[HaalandGameManager] Đã BẬT '{item.targetObject.name}' ở mốc {item.enableDelay}s.");
			}
			if (item.soundClip != null)
			{
				PlaySound(item.soundClip);
			}
			item.onEnabled?.Invoke();
		}

		private IEnumerator TriggerTimedItemDisable(PostWinTimedObject item)
		{
			if (item.disableDelay > 0f)
			{
				yield return new WaitForSeconds(item.disableDelay);
			}
			if (item.targetObject != null)
			{
				item.targetObject.SetActive(false);
				Debug.Log($"[HaalandGameManager] Đã TẮT '{item.targetObject.name}' ở mốc {item.disableDelay}s.");
			}
			item.onDisabled?.Invoke();
		}

		private IEnumerator EnableClickToStoreRoutine()
		{
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
			if (tutUI != null)
			{
				tutUI.SetActive(false);
			}
			Invoke("StartTackleAfterDelay", dribbleToTackleDelay);
		}

		private void ReplayLevel1()
		{
			Debug.Log("[HaalandGameManager] ReplayLevel1: Replaying Level 1 with Messi Tackle.");
			AppLovinAnalytics.Track(ALEvent.CHALLENGE_RETRY);
			currentLevel = 2;
			InitLevel();
			if (tutUI != null)
			{
				tutUI.SetActive(false);
			}
			Invoke("StartTackleAfterDelay", dribbleToTackleDelay);
		}

		private void StartTackleAfterDelay()
		{
			OnUserTapStart();
		}

		public void OnUserTapStart()
		{
			if (isTackleStarted)
			{
				return;
			}
			isTackleStarted = true;
			Debug.Log("[HaalandGameManager] OnUserTapStart: Game started.");
			AppLovinAnalytics.Track(ALEvent.CHALLENGE_STARTED);
			if (tutUI != null)
			{
				tutUI.SetActive(false);
			}
			if (haalandDribbleAnimator != null)
			{
				PlayOrTriggerAnimation(haalandDribbleAnimator, startHaalandDribbleTrigger, "StartHaalandDribble");
			}
			if (currentLevel != 1)
			{
				ResetPlayerSpritesToOrigin();
				if (wrongChoiceUI != null)
				{
					wrongChoiceUI.SetActive(false);
				}
				if (winChoiceUI != null)
				{
					winChoiceUI.SetActive(false);
				}
				if (winExtraObj1 != null)
				{
					winExtraObj1.SetActive(false);
				}
				if (winExtraObj2 != null)
				{
					winExtraObj2.SetActive(false);
				}
				if (questionUI != null)
				{
					questionUI.SetActive(true);
				}
			}
			if (tackleAnimDelay > 0f)
			{
				Invoke("PlayTackleAnimationAndTimers", tackleAnimDelay);
			}
			else
			{
				PlayTackleAnimationAndTimers();
			}
		}

		private void PlayTackleAnimationAndTimers()
		{
			Debug.Log("[HaalandGameManager] PlayTackleAnimationAndTimers: Triggering tackle animation.");
			if (currentLevel == 1)
			{
				if (ronaldoTackle != null)
				{
					ronaldoTackle.SetActive(true);
				}
				PlayOrTriggerAnimation(ronaldoTackleAnimator, startRonaldoTackleTrigger, "StartRonaldoTackle");
			}
			else
			{
				if (messiTackle != null)
				{
					if (messiTackleAnimator != null && messiTackleSpeed > 0f)
					{
						messiTackleAnimator.speed = messiTackleSpeed;
					}
					messiTackle.SetActive(true);
				}
				PlayOrTriggerAnimation(messiTackleAnimator, startMessiTackleTrigger, "StartMessiTackle");
			}
			if (useAutoTimers)
			{
				float currentImpactDelay = ((currentLevel == 1) ? impactCloudDelay : messiImpactCloudDelay);
				float currentTackleHideDelay = ((currentLevel == 1) ? tackleHideDelay : messiTackleHideDelay);
				Invoke("PlayTackleSound", tackleSoundDelay);
				Invoke("OnTackleFinished", currentTackleHideDelay);
				Invoke("OnImpactCloudStart", currentImpactDelay);
				Invoke("ShowHaalandHurt", currentImpactDelay + haalandHurtDelay);
				Invoke("OnCloudFinished", currentImpactDelay + cloudDuration);
			}
			else
			{
				PlayTackleSound();
			}
		}

		private void PlayTackleSound()
		{
			if (Ply_Singleton<Ply_SoundManager>.Instance != null)
			{
				Ply_Singleton<Ply_SoundManager>.Instance.PlayFx(FxType.Tackle);
			}
		}

		public void OnTackleFinished()
		{
			Debug.Log("[HaalandGameManager] OnTackleFinished: Hiding tackle object.");
			if (ronaldoTackle != null)
			{
				ronaldoTackle.SetActive(false);
			}
			if (messiTackle != null)
			{
				messiTackle.SetActive(false);
			}
			if (winExtraObj1 != null)
			{
				winExtraObj1.SetActive(false);
			}
			if (winExtraObj2 != null)
			{
				winExtraObj2.SetActive(false);
			}
			if (haalandWin != null)
			{
				haalandWin.SetActive(false);
			}
			if (haalandWinOnCorrect != null)
			{
				haalandWinOnCorrect.SetActive(false);
			}
		}

		public void OnImpactCloudStart()
		{
			Debug.Log("[HaalandGameManager] OnImpactCloudStart: Dribble image hidden, FightingCloud activated.");
			if (haalandDribbleImage != null)
			{
				haalandDribbleImage.SetActive(false);
			}
			if (fightingCloud != null)
			{
				fightingCloud.SetActive(true);
			}
		}

		public void ShowHaalandHurt()
		{
			Debug.Log("[HaalandGameManager] ShowHaalandHurt: 2s after Cloud -> HaalandHurt activated.");
			if (haalandHurt != null)
			{
				haalandHurt.SetActive(true);
			}
		}

		public void OnCloudFinished()
		{
			Debug.Log("[HaalandGameManager] OnCloudFinished: 3s reached -> FightingCloud hidden, StandPlayer & QuestionUI & IconListUI activated.");
			isStandPlayerEntered = true;
			if (fightingCloud != null)
			{
				fightingCloud.SetActive(false);
			}
			if (haalandHurt != null)
			{
				haalandHurt.SetActive(true);
			}
			if (Ply_Singleton<Ply_SoundManager>.Instance != null)
			{
				Ply_Singleton<Ply_SoundManager>.Instance.PlayFx(FxType.HaalandHurt);
			}
			if (questionUI != null)
			{
				questionUI.SetActive(true);
			}
			ShowIconList();
			if (standPlayers != null)
			{
				if (standPlayersAnimator != null)
				{
					standPlayersAnimator.Play("playerEnter", 0, 0f);
				}
				standPlayers.SetActive(true);
				PlayOrTriggerAnimation(standPlayersAnimator, standPlayerEnterTrigger, "playerEnter");
			}
			if (useAutoTimers)
			{
				Invoke("PlayRefereeAnimation", refereeAnimDelay);
			}
		}

		public void PlayRefereeAnimation()
		{
			Debug.Log("[HaalandGameManager] PlayRefereeAnimation: Playing referee animation.");
			if (refereeAnimator != null)
			{
				PlayOrTriggerAnimation(refereeAnimator, refereeLookAroundTrigger, "Trongtai_LeftRight");
			}
		}

		public void OnLineupComplete()
		{
			Debug.Log("[HaalandGameManager] OnLineupComplete: StandPlayer lineup complete.");
			isStandPlayerEntered = true;
			if (questionUI != null)
			{
				questionUI.SetActive(true);
			}
			ShowIconList();
			PlayRefereeAnimation();
		}

		public void OnRedCardFinished()
		{
			Debug.Log("[HaalandGameManager] OnRedCardFinished: Referee Red Card animation finished.");
		}

		public void GoToStore()
		{
			if (isGameWon && !canClickToStore)
			{
				Debug.Log("[HaalandGameManager] GoToStore: Bỏ qua click vì đang trong thời gian mừng chiến thắng.");
			}
			else
			{
				OpenStore();
			}
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
			if (!isTackleStarted && Input.GetMouseButtonDown(0))
			{
				OnUserTapStart();
			}
			else if (canClickToStore && Input.GetMouseButtonDown(0))
			{
				canClickToStore = false;
				OpenStore();
			}
			else if (currentLevel == 2 && isStandPlayerEntered && !isChoiceMade && Input.GetMouseButtonDown(0))
			{
				isChoiceMade = true;
				OpenStore();
			}
		}

		private void PlayOrTriggerAnimation(Animator anim, string triggerName, string defaultStateName)
		{
			if (anim == null)
			{
				return;
			}
			anim.enabled = true;
			if (!string.IsNullOrEmpty(triggerName))
			{
				anim.SetTrigger(triggerName);
			}
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
