using DG.Tweening;
using Luna.Unity;
using UnityEngine;
using UnityEngine.UI;

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

	private int tapState = 0;

	private Vector3 initialScissorsPos;

	private Sprite initialLossSprite;

	private void Start()
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

	private void Update()
	{
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
		if (isMovingScissor)
		{
			CheckOverlapDuringMove();
		}
		if (Input.GetMouseButtonDown(0) || (Input.touchCount > 0 && Input.GetTouch(0).phase == TouchPhase.Began))
		{
			if (tapState == 0)
			{
				tapState = 1;
				HandleFirstTap();
			}
			else if (tapState == 1 && !hasCut)
			{
				tapState = 2;
				hasCut = true;
				StartScissorCut();
			}
		}
	}

	private void HandleFirstTap()
	{
		Debug.Log("[HairCutController] TAP LẦN 1: Ẩn Tutorial & Bật Animation!");
		if (tutObject != null)
		{
			tutObject.SetActive(false);
		}
		if (animatorToEnableOnFirstTap != null)
		{
			animatorToEnableOnFirstTap.enabled = true;
			if (!string.IsNullOrEmpty(firstTapTriggerName))
			{
				animatorToEnableOnFirstTap.SetTrigger(firstTapTriggerName);
			}
		}
	}

	private void StartScissorCut()
	{
		if (Ply_Singleton<Ply_SoundManager>.Ins != null)
		{
			Ply_Singleton<Ply_SoundManager>.Ins.PlayFx(FxType.Keo);
		}
		if (targetAnimatorToDisable != null)
		{
			targetAnimatorToDisable.enabled = false;
		}
		hasHitTarget = false;
		if (scissors != null)
		{
			scissors.DOKill();
			if (linePointA != null)
			{
				scissors.position = linePointA.position;
			}
			if (scissorsAnimator != null)
			{
				scissorsAnimator.SetTrigger("Keo");
			}
			Vector3 targetB = ((linePointB != null) ? linePointB.position : scissors.position);
			isMovingScissor = true;
			scissors.DOMove(targetB, scissorMoveDuration).SetEase(Ease.Linear).OnUpdate(delegate
			{
				CheckOverlapDuringMove();
			})
				.OnComplete(delegate
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

	private void CheckOverlapDuringMove()
	{
		if (!hasHitTarget && scissorsCollider != null && targetCollider != null && (scissorsCollider.bounds.Intersects(targetCollider.bounds) || scissorsCollider.IsTouching(targetCollider)))
		{
			hasHitTarget = true;
			Debug.Log($"<color=cyan>[Va Chạm]</color> Kéo đã chạm vào Arrow 218 tại vị trí X = {scissors.position.x}");
		}
	}

	private void PerformCut()
	{
		if (hasHitTarget)
		{
			Debug.Log("<color=green><b>WIN</b></color> (Kéo đã đi qua và chạm vào Arrow 218!)");
			DOVirtual.DelayedCall(fallDuration, delegate
			{
				if (Ply_Singleton<Ply_SoundManager>.Ins != null)
				{
					Ply_Singleton<Ply_SoundManager>.Ins.PlayFx(FxType.Confetti);
					Ply_Singleton<Ply_SoundManager>.Ins.PlayFx(FxType.Confetti);
				}
				if (winObjectToEnable != null)
				{
					winObjectToEnable.SetActive(true);
				}
				if (winObjectsToEnable != null && winObjectsToEnable.Length != 0)
				{
					GameObject[] array5 = winObjectsToEnable;
					foreach (GameObject gameObject in array5)
					{
						if (gameObject != null)
						{
							gameObject.SetActive(true);
						}
					}
				}
				if (winObjectToDisable != null)
				{
					winObjectToDisable.SetActive(false);
				}
				if (winObjectsToDisable != null && winObjectsToDisable.Length != 0)
				{
					GameObject[] array6 = winObjectsToDisable;
					foreach (GameObject gameObject2 in array6)
					{
						if (gameObject2 != null)
						{
							gameObject2.SetActive(false);
						}
					}
				}
			});
		}
		else
		{
			Debug.Log("<color=red><b>LOSS</b></color> (Kéo không chạm vào Arrow 218!)");
			if (lossSpriteRenderer != null && lossSprite != null)
			{
				lossSpriteRenderer.sprite = lossSprite;
				if (Ply_Singleton<Ply_SoundManager>.Ins != null)
				{
					Ply_Singleton<Ply_SoundManager>.Ins.PlayFx(FxType.Lose2);
				}
			}
			if (lossObjectToEnable != null)
			{
				lossObjectToEnable.SetActive(true);
			}
			if (lossObjectsToEnable != null && lossObjectsToEnable.Length != 0)
			{
				GameObject[] array = lossObjectsToEnable;
				foreach (GameObject obj2 in array)
				{
					if (obj2 != null)
					{
						obj2.SetActive(true);
					}
				}
			}
		}
		if (objectToDisableOnComplete != null)
		{
			objectToDisableOnComplete.SetActive(false);
		}
		if (objectsToDisableOnComplete != null && objectsToDisableOnComplete.Length != 0)
		{
			GameObject[] array2 = objectsToDisableOnComplete;
			foreach (GameObject obj in array2)
			{
				if (obj != null)
				{
					obj.SetActive(false);
				}
			}
		}
		float cutY = ((linePointA != null) ? linePointA.position.y : scissors.position.y);
		SpriteMask[] array3 = allMasks;
		foreach (SpriteMask mask in array3)
		{
			if (mask != null)
			{
				Vector3 maskPos = mask.transform.position;
				maskPos.y = cutY;
				mask.transform.position = maskPos;
				mask.gameObject.SetActive(true);
			}
		}
		if (fallingHairParent != null)
		{
			fallingHairParent.DOMove(fallingHairParent.position + Vector3.down * fallDistance, fallDuration).SetEase(Ease.InQuad);
			if (fallingHairRenderers != null)
			{
				SpriteRenderer[] array4 = fallingHairRenderers;
				foreach (SpriteRenderer sr in array4)
				{
					if (sr != null)
					{
						sr.DOFade(0f, fadeDuration).SetDelay(fallDuration * 0.3f);
					}
				}
			}
		}
		if (hasHitTarget)
		{
			DOVirtual.DelayedCall(endDelay, delegate
			{
				TriggerWinEndGame();
			});
		}
		else
		{
			DOVirtual.DelayedCall(endDelay, delegate
			{
				TriggerLossEndGame();
			});
		}
	}

	public void TriggerWinEndGame()
	{
		Debug.Log("[HairCutController] Kích hoạt WIN END GAME!");
		if (afterEndDisableObjects != null)
		{
			GameObject[] array = afterEndDisableObjects;
			foreach (GameObject obj2 in array)
			{
				if (obj2 != null)
				{
					if (obj2 == base.gameObject)
					{
						Debug.LogWarning("[HairCutController] ⚠\ufe0f CẢNH BÁO: Bạn đang đưa GameObject chứa HairCutController vào AfterEndDisableObjects! Vui lòng bỏ GameObject chứa script này ra khỏi danh sách!");
					}
					else
					{
						obj2.SetActive(false);
					}
				}
			}
		}
		if (afterEndEnableObjects != null)
		{
			GameObject[] array2 = afterEndEnableObjects;
			foreach (GameObject obj in array2)
			{
				if (obj != null)
				{
					obj.SetActive(true);
					Button btn = obj.GetComponent<Button>();
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

	public void TriggerLossEndGame()
	{
		Debug.Log("[HairCutController] Kích hoạt LOSS END GAME (Hết endDelay)!");
		if (allMasks != null)
		{
			SpriteMask[] array = allMasks;
			foreach (SpriteMask mask in array)
			{
				if (mask != null)
				{
					mask.gameObject.SetActive(false);
				}
			}
		}
		if (objectToDisableOnComplete != null)
		{
			objectToDisableOnComplete.SetActive(true);
		}
		if (objectsToDisableOnComplete != null && objectsToDisableOnComplete.Length != 0)
		{
			GameObject[] array2 = objectsToDisableOnComplete;
			foreach (GameObject obj2 in array2)
			{
				if (obj2 != null)
				{
					obj2.SetActive(true);
				}
			}
		}
		if (targetAnimatorToDisable != null)
		{
			targetAnimatorToDisable.enabled = true;
		}
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
		if (lossObjectToEnable != null)
		{
			lossObjectToEnable.SetActive(false);
		}
		if (lossObjectsToEnable != null && lossObjectsToEnable.Length != 0)
		{
			GameObject[] array3 = lossObjectsToEnable;
			foreach (GameObject obj in array3)
			{
				if (obj != null)
				{
					obj.SetActive(false);
				}
			}
		}
		if (lossSpriteRenderer != null && initialLossSprite != null)
		{
			lossSpriteRenderer.sprite = initialLossSprite;
		}
		isStoreRedirectActive = true;
		Debug.Log("[HairCutController] LOSS -> ĐÃ KÍCH HOẠT: Kéo về vị trí cũ, Khôi phục Sprite ban đầu & Click màn hình bất kỳ lúc nào cũng ra Store!");
	}

	public void OpenStore()
	{
		Debug.Log("[HairCutController] Chuyển hướng mở Store Luna!");
		LifeCycle.GameEnded();
		Playable.InstallFullGame();
	}
}
