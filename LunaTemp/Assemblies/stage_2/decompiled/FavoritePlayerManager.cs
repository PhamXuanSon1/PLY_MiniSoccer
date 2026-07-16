using System.Collections;
using System.Collections.Generic;
using DG.Tweening;
using Luna.Unity;
using UnityEngine;

public class FavoritePlayerManager : MonoBehaviour
{
	[Header("Cài đặt Slot trên màn hình")]
	[Tooltip("Layer chứa các Slot để bắt sự kiện click 3D (Ví dụ bạn tạo layer tên 'Slot' và gán vào đây)")]
	public LayerMask slotLayerMask;

	[Tooltip("Kéo Object Slot 1 vào đây")]
	public PlayerSlot slotA;

	[Tooltip("Kéo Object Slot 2 vào đây")]
	public PlayerSlot slotB;

	[Space(10f)]
	[Header("Âm thanh (Audio)")]
	[Tooltip("Kéo Component AudioSource vào đây (Nếu để trống code tự tạo 1 cái)")]
	public AudioSource audioSource;

	[Tooltip("Âm thanh đọc chữ 'OR' (Hoặc)")]
	public AudioClip orAudio;

	[Header("Danh sách Cầu thủ tham gia")]
	[Tooltip("Kéo toàn bộ ScriptableObject cầu thủ (FavoritePlayerCard) vào đây")]
	public List<FavoritePlayerCard> playerList;

	[Header("Màn hình Kết Thúc (Endcard)")]
	[Tooltip("Kéo script Endcard vào đây")]
	public FavoritePlayerEndcard endcardUI;

	[Header("--- CÀI ĐẶT HIỆU ỨNG THÙNG RÁC (SLOT BỊ LOẠI) ---")]
	[Space(5f)]
	[Header("1. Quỹ đạo bay (DOTween)")]
	[Tooltip("Điểm đến (Thùng rác) của lá bài bị loại")]
	public Transform discardTarget;

	[Tooltip("Thời gian bay ra góc")]
	public float moveDuration = 0.5f;

	[Tooltip("Độ cong của vòng cung (Số càng lớn bay càng vút lên cao)")]
	public float arcHeight = 3f;

	[Space(5f)]
	[Header("2. Phóng to (Scale Up)")]
	[Tooltip("Độ to khi phóng ra (1.1 = to hơn 10%)")]
	public float scaleUpSize = 1.1f;

	[Tooltip("Thời gian phóng to")]
	public float scaleUpDuration = 0.15f;

	[Space(5f)]
	[Header("3. Thu nhỏ & Biến mất (Scale Down)")]
	[Tooltip("Thời gian thu nhỏ dần về 0 và biến mất")]
	public float scaleDownDuration = 0.2f;

	[Space(5f)]
	[Header("4. Hồi sinh (Slot mới xuất hiện)")]
	[Tooltip("Kích thước lúc bắt đầu hiện ra (0.8 = 80%)")]
	public float appearStartScale = 0.8f;

	[Tooltip("Kích thước phình to cực đại (1.1 = 110%)")]
	public float appearMaxScale = 1.1f;

	[Tooltip("Thời gian phình to")]
	public float appearUpDuration = 0.15f;

	[Tooltip("Thời gian nảy thu về kích thước chuẩn (1.0)")]
	public float appearDownDuration = 0.1f;

	[Space(10f)]
	[Header("--- CÀI ĐẶT HIỆU ỨNG CLICK (SLOT ĐƯỢC CHỌN) ---")]
	[Space(5f)]
	[Tooltip("Mức độ thu nhỏ khi click (0.9 = 90% kích thước gốc)")]
	public float clickScaleSize = 0.9f;

	[Tooltip("Thời gian nhún xuống")]
	public float clickDownDuration = 0.1f;

	[Tooltip("Thời gian nảy lên lại")]
	public float clickUpDuration = 0.15f;

	private bool isAnimating = false;

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

	private int currentIndex = 0;

	private bool canClickToStoreGlobal = false;

	private Sequence globalIdleSeq;

	private Coroutine nameSequenceRoutine;

	public static FavoritePlayerManager Instance { get; private set; }

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
		if (audioSource == null)
		{
			audioSource = base.gameObject.AddComponent<AudioSource>();
		}
	}

	private void Update()
	{
		if (canClickToStoreGlobal && Input.GetMouseButtonDown(0))
		{
			canClickToStoreGlobal = false;
			Debug.Log("\ud83c\udf89 Chuyển hướng ra Store tải game!");
			LifeCycle.GameEnded();
			Playable.InstallFullGame();
		}
		else
		{
			if (isAnimating || canClickToStoreGlobal || !Input.GetMouseButtonDown(0))
			{
				return;
			}
			Ray ray = Camera.main.ScreenPointToRay(Input.mousePosition);
			if (Physics.Raycast(ray, out var hit, 100f, slotLayerMask))
			{
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
		if (playerList != null && playerList.Count >= 2)
		{
			slotA.SetupSlot(playerList[0]);
			slotB.SetupSlot(playerList[1]);
			currentIndex = 2;
			PlayGlobalIdleAnimation();
			PlayNameSequence(slotA.currentData.nameAudio, slotB.currentData.nameAudio);
		}
		else
		{
			Debug.LogError("LỖI: Danh sách cầu thủ phải có ít nhất 2 người trở lên!");
		}
	}

	private void PlayGlobalIdleAnimation()
	{
		if (globalIdleSeq == null || !globalIdleSeq.IsActive())
		{
			if (slotA != null)
			{
				slotA.transform.localScale = slotA.originalScale;
			}
			if (slotB != null)
			{
				slotB.transform.localScale = slotB.originalScale;
			}
			globalIdleSeq = DOTween.Sequence();
			if (slotA != null)
			{
				globalIdleSeq.Append(slotA.transform.DOScale(slotA.originalScale * slotA.idleScale, slotA.idleDuration).SetLoops(2, LoopType.Yoyo).SetEase(Ease.InOutSine));
			}
			if (slotB != null)
			{
				globalIdleSeq.Append(slotB.transform.DOScale(slotB.originalScale * slotB.idleScale, slotB.idleDuration).SetLoops(2, LoopType.Yoyo).SetEase(Ease.InOutSine));
			}
			globalIdleSeq.SetLoops(-1);
		}
	}

	private void StopGlobalIdleAnimation()
	{
		if (globalIdleSeq != null)
		{
			globalIdleSeq.Kill();
			globalIdleSeq = null;
		}
		if (slotA != null)
		{
			slotA.transform.localScale = slotA.originalScale;
		}
		if (slotB != null)
		{
			slotB.transform.localScale = slotB.originalScale;
		}
	}

	private void PlayNameSequence(AudioClip clipA, AudioClip clipB)
	{
		if (nameSequenceRoutine != null)
		{
			StopCoroutine(nameSequenceRoutine);
		}
		nameSequenceRoutine = StartCoroutine(NameSequenceRoutine(clipA, clipB));
	}

	private IEnumerator NameSequenceRoutine(AudioClip clipA, AudioClip clipB)
	{
		if (!(audioSource == null))
		{
			if (clipA != null)
			{
				audioSource.PlayOneShot(clipA);
				yield return new WaitForSeconds(clipA.length);
			}
			if (orAudio != null)
			{
				audioSource.PlayOneShot(orAudio);
				yield return new WaitForSeconds(orAudio.length);
			}
			if (clipB != null)
			{
				audioSource.PlayOneShot(clipB);
			}
		}
	}

	public void OnPlayerSelected(PlayerSlot chosenSlot)
	{
		if (isAnimating)
		{
			return;
		}
		isAnimating = true;
		StopGlobalIdleAnimation();
		if (nameSequenceRoutine != null)
		{
			StopCoroutine(nameSequenceRoutine);
			nameSequenceRoutine = null;
		}
		if (audioSource != null)
		{
			audioSource.Stop();
			if (chosenSlot.currentData != null && chosenSlot.currentData.nameAudio != null)
			{
				audioSource.PlayOneShot(chosenSlot.currentData.nameAudio);
			}
		}
		Sequence clickSeq = DOTween.Sequence();
		clickSeq.Append(chosenSlot.transform.DOScale(chosenSlot.originalScale * clickScaleSize, clickDownDuration));
		clickSeq.Append(chosenSlot.transform.DOScale(chosenSlot.originalScale, clickUpDuration));
		clickSeq.OnComplete(delegate
		{
			if (chosenSlot.lightEffect != null)
			{
				chosenSlot.lightEffect.SetActive(false);
			}
		});
		PlayerSlot loserSlot = ((chosenSlot == slotA) ? slotB : slotA);
		if (chosenSlot.lightEffect != null)
		{
			chosenSlot.lightEffect.SetActive(true);
		}
		if (loserSlot.lightEffect != null)
		{
			loserSlot.lightEffect.SetActive(false);
		}
		Sequence seq = DOTween.Sequence();
		seq.Append(loserSlot.transform.DOJump(discardTarget.position, arcHeight, 1, moveDuration));
		seq.Append(loserSlot.transform.DOScale(loserSlot.originalScale * scaleUpSize, scaleUpDuration));
		seq.Append(loserSlot.transform.DOScale(0f, scaleDownDuration));
		seq.Join(loserSlot.spriteRenderer.DOFade(0f, scaleDownDuration));
		seq.OnComplete(delegate
		{
			if (loserSlot.lightEffect != null)
			{
				loserSlot.lightEffect.SetActive(false);
			}
			if (currentIndex < playerList.Count)
			{
				loserSlot.transform.position = loserSlot.originalPosition;
				loserSlot.transform.localScale = loserSlot.originalScale * appearStartScale;
				Color color = loserSlot.spriteRenderer.color;
				color.a = 0f;
				loserSlot.spriteRenderer.color = color;
				loserSlot.SetupSlot(playerList[currentIndex]);
				currentIndex++;
				Sequence sequence = DOTween.Sequence();
				sequence.Append(loserSlot.transform.DOScale(loserSlot.originalScale * appearMaxScale, appearUpDuration));
				sequence.Join(loserSlot.spriteRenderer.DOFade(1f, appearUpDuration));
				sequence.Append(loserSlot.transform.DOScale(loserSlot.originalScale, appearDownDuration));
				sequence.OnComplete(delegate
				{
					isAnimating = false;
					PlayGlobalIdleAnimation();
					PlayNameSequence(slotA.currentData.nameAudio, slotB.currentData.nameAudio);
				});
			}
			else
			{
				isAnimating = false;
				DOTween.Sequence().Append(chosenSlot.transform.DOScale(chosenSlot.originalScale * chosenSlot.idleScale, chosenSlot.idleDuration).SetLoops(2, LoopType.Yoyo).SetEase(Ease.InOutSine)).SetLoops(-1);
				ShowWinner(chosenSlot.currentData);
			}
		});
	}

	private void ShowWinner(FavoritePlayerCard winnerData)
	{
		Debug.Log("\ud83c\udf89 TÌM RA NGƯỜI CHIẾN THẮNG: " + winnerData.playerName);
		if (slotA != null)
		{
			slotA.gameObject.SetActive(false);
		}
		if (slotB != null)
		{
			slotB.gameObject.SetActive(false);
		}
		if (endcardUI != null)
		{
			endcardUI.ShowEndcard(winnerData);
		}
		else
		{
			Debug.LogWarning("Chưa gán FavoritePlayerEndcard vào Manager!");
		}
		if (extraObjectsToActivate != null)
		{
			GameObject[] array = extraObjectsToActivate;
			foreach (GameObject obj2 in array)
			{
				if (obj2 != null)
				{
					obj2.SetActive(true);
				}
			}
		}
		if (extraObjectsToDeactivate != null)
		{
			GameObject[] array2 = extraObjectsToDeactivate;
			foreach (GameObject obj in array2)
			{
				if (obj != null)
				{
					obj.SetActive(false);
				}
			}
		}
		StopAllCoroutines();
		StartCoroutine(WaitAndTriggerObjects());
	}

	private IEnumerator WaitAndTriggerObjects()
	{
		yield return new WaitForSeconds(waitTime);
		if (objectsToTurnOnAfterWait != null)
		{
			GameObject[] array = objectsToTurnOnAfterWait;
			foreach (GameObject obj2 in array)
			{
				if (obj2 != null)
				{
					obj2.SetActive(true);
				}
			}
		}
		if (objectsToTurnOffAfterWait != null)
		{
			GameObject[] array2 = objectsToTurnOffAfterWait;
			foreach (GameObject obj in array2)
			{
				if (obj != null)
				{
					obj.SetActive(false);
				}
			}
		}
		Debug.Log("⏳ Đã hết thời gian chờ. BẬT TÍNH NĂNG CLICK RA STORE (TỪ MANAGER)!");
		canClickToStoreGlobal = true;
	}
}
