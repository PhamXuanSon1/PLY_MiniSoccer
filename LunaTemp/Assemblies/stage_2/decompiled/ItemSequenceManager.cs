using System;
using System.Collections;
using System.Collections.Generic;
using DG.Tweening;
using Luna.Unity;
using UnityEngine;

public class ItemSequenceManager : MonoBehaviour
{
	[Header("Sequence Items")]
	[Tooltip("Kéo 4 GameObject món đồ theo thứ tự xuất hiện vào đây")]
	public List<DraggableItem> itemList = new List<DraggableItem>();

	[Header("Positions")]
	[Tooltip("Vị trí xuất phát (ví dụ: ở ngoài màn hình phía dưới)")]
	public Transform spawnPoint;

	[Tooltip("Vị trí giữa màn hình món đồ sẽ di chuyển tới")]
	public Transform targetPoint;

	[Header("Animation Settings")]
	public float moveDuration = 0.6f;

	public Ease moveEase = Ease.OutBack;

	public float delayBetweenItems = 0.3f;

	[Header("Characters")]
	[Tooltip("Kéo 4 CharacterDropZone của 4 nhân vật vào đây (hoặc để trống code tự tìm)")]
	public List<CharacterDropZone> characterList = new List<CharacterDropZone>();

	[Header("Result Objects (Win / Lose)")]
	[Tooltip("Sẽ tự động cập nhật: Thắng nếu 4 nhân vật nhận đúng đồ, Thua nếu có nhân vật nhận sai đồ")]
	public bool isWin = true;

	[Tooltip("GameObject hiển thị chữ YOU WIN")]
	public GameObject winObject;

	[Tooltip("Âm thanh phát khi hiện chữ YOU WIN")]
	public FxType winFxType = FxType.Siuu;

	[Tooltip("GameObject hiển thị chữ YOU LOSE")]
	public GameObject loseObject;

	[Tooltip("Âm thanh phát khi hiện chữ YOU LOSE")]
	public FxType loseFxType = FxType.Cry;

	[Tooltip("Thời gian chờ N giây trước khi hiện chữ Win / Lose")]
	public float resultTextDelay = 0.5f;

	[Header("End Game Objects")]
	[Tooltip("GameObject Gameplay (sẽ bị tắt khi hoàn thành 4 đồ)")]
	public GameObject gameplayObject;

	[Tooltip("GameObject Endcard (sẽ được bật lên khi hoàn thành 4 đồ)")]
	public GameObject endcardObject;

	[Header("First Drag Settings")]
	[Tooltip("GameObject sẽ bị tắt ngay khi người chơi chạm/kéo món đồ đầu tiên (VD: Bàn tay hướng dẫn)")]
	public GameObject objectToHideOnFirstDrag;

	public float endcardDelay = 0.5f;

	private int currentItemIndex = 0;

	private bool hasTrackedFirstClick = false;

	private bool hasDraggedFirstItem = false;

	[HideInInspector]
	public bool isFailedMode = false;

	public static ItemSequenceManager Instance { get; private set; }

	public bool isItemReady { get; private set; } = false;


	public void OnFirstItemDragged()
	{
		if (!hasDraggedFirstItem)
		{
			hasDraggedFirstItem = true;
			if (objectToHideOnFirstDrag != null)
			{
				objectToHideOnFirstDrag.SetActive(false);
			}
		}
	}

	public DraggableItem GetCurrentActiveItem()
	{
		if (currentItemIndex >= 0 && currentItemIndex < itemList.Count)
		{
			return itemList[currentItemIndex];
		}
		return null;
	}

	private void Awake()
	{
		if (Instance == null)
		{
			Instance = this;
		}
		else
		{
			UnityEngine.Object.Destroy(base.gameObject);
		}
		AppLovinAnalytics.Track(ALEvent.LOADING);
	}

	private void Update()
	{
		if (!hasTrackedFirstClick && Input.GetMouseButtonDown(0))
		{
			hasTrackedFirstClick = true;
			TrackFirstClick();
		}
		if (isFailedMode && Input.GetMouseButtonDown(0))
		{
			OpenStore();
		}
	}

	public void OpenStore()
	{
		Debug.Log("CLICK IN FAILED MODE -> CHUYEN HUONG RA STORE!");
		try
		{
			AppLovinAnalytics.Track(ALEvent.CTA_CLICKED);
			LifeCycle.GameEnded();
			Playable.InstallFullGame();
		}
		catch (Exception e)
		{
			Debug.LogWarning("Luna Playable SDK Exception: " + e.Message);
		}
	}

	private void TrackFirstClick()
	{
		if (hasTrackedFirstClick)
		{
			return;
		}
		hasTrackedFirstClick = true;
		try
		{
			AppLovinAnalytics.Track(ALEvent.CHALLENGE_STARTED);
		}
		catch (Exception e)
		{
			Debug.LogWarning("AppLovinAnalytics Track Exception: " + e.Message);
		}
	}

	private void Start()
	{
		AppLovinAnalytics.Track(ALEvent.LOADED);
		AppLovinAnalytics.Track(ALEvent.DISPLAYED);
		foreach (DraggableItem item in itemList)
		{
			if (item != null)
			{
				item.gameObject.SetActive(false);
			}
		}
		if (winObject != null)
		{
			winObject.SetActive(false);
		}
		if (loseObject != null)
		{
			loseObject.SetActive(false);
		}
		if (itemList.Count > 0)
		{
			SpawnNextItem();
		}
	}

	public void OnItemCompleted()
	{
		currentItemIndex++;
		if (currentItemIndex == 1)
		{
			TrackFirstClick();
		}
		TrackProgressAnalytics(currentItemIndex);
		if (currentItemIndex < itemList.Count)
		{
			StartCoroutine(SpawnNextItemWithDelay(delayBetweenItems));
			return;
		}
		Debug.Log("DA HOAN THANH XONG TAT CA MON DO!");
		StartCoroutine(ShowResultAndEndcardRoutine());
	}

	private void TrackProgressAnalytics(int count)
	{
		switch (count)
		{
		case 1:
			AppLovinAnalytics.Track(ALEvent.CHALLENGE_PASS_25);
			break;
		case 2:
			AppLovinAnalytics.Track(ALEvent.CHALLENGE_PASS_50);
			break;
		case 3:
			AppLovinAnalytics.Track(ALEvent.CHALLENGE_PASS_75);
			break;
		}
	}

	private IEnumerator ShowResultAndEndcardRoutine()
	{
		yield return new WaitForSeconds(resultTextDelay);
		bool allCorrect = true;
		if (characterList != null)
		{
			foreach (CharacterDropZone zone in characterList)
			{
				if (zone != null && !zone.isCorrectItemReceived)
				{
					allCorrect = false;
					break;
				}
			}
		}
		isWin = allCorrect;
		if (isWin)
		{
			Debug.Log("TAT CA NHAN VAT DEU NHAN DUNG DO -> YOU WIN!");
			if (winObject != null)
			{
				winObject.SetActive(true);
			}
			if (loseObject != null)
			{
				loseObject.SetActive(false);
			}
			if (Ply_Singleton<Ply_SoundManager>.Ins != null)
			{
				Ply_Singleton<Ply_SoundManager>.Ins.PlayFx(winFxType);
			}
			try
			{
				Debug.Log("AppLovinAnalytics -> CHALLENGE_SOLVED");
				AppLovinAnalytics.Track(ALEvent.CHALLENGE_SOLVED);
			}
			catch (Exception e)
			{
				Debug.LogWarning("Analytics Track Exception: " + e.Message);
			}
			yield return new WaitForSeconds(endcardDelay);
			if (gameplayObject != null)
			{
				gameplayObject.SetActive(false);
			}
			if (endcardObject != null)
			{
				endcardObject.SetActive(true);
				if (objectToHideOnFirstDrag != null)
				{
					objectToHideOnFirstDrag.SetActive(true);
				}
				try
				{
					Debug.Log("AppLovinAnalytics -> ENDCARD_SHOWN");
					AppLovinAnalytics.Track(ALEvent.ENDCARD_SHOWN);
				}
				catch (Exception e3)
				{
					Debug.LogWarning("Analytics Track Exception: " + e3.Message);
				}
				if (endcardObject.GetComponent<EndcardClickToStore>() == null)
				{
					endcardObject.AddComponent<EndcardClickToStore>();
				}
			}
			yield break;
		}
		Debug.Log("CO NHAN VAT NHAN SAI DO -> YOU LOSE!");
		if (loseObject != null)
		{
			loseObject.SetActive(true);
		}
		if (winObject != null)
		{
			winObject.SetActive(false);
		}
		if (Ply_Singleton<Ply_SoundManager>.Ins != null)
		{
			Ply_Singleton<Ply_SoundManager>.Ins.PlayFx(loseFxType);
		}
		try
		{
			Debug.Log("AppLovinAnalytics -> CHALLENGE_FAILED");
			AppLovinAnalytics.Track(ALEvent.CHALLENGE_FAILED);
		}
		catch (Exception e2)
		{
			Debug.LogWarning("Analytics Track Exception: " + e2.Message);
		}
		yield return new WaitForSeconds(endcardDelay);
		if (loseObject != null)
		{
			loseObject.SetActive(false);
		}
		if (characterList != null)
		{
			foreach (CharacterDropZone character in characterList)
			{
				if (character != null)
				{
					character.ResetCharacter(false);
				}
			}
		}
		if (objectToHideOnFirstDrag != null)
		{
			objectToHideOnFirstDrag.SetActive(true);
		}
		currentItemIndex = 0;
		foreach (DraggableItem item in itemList)
		{
			if (item != null)
			{
				item.gameObject.SetActive(false);
			}
		}
		SpawnNextItem();
		isFailedMode = true;
	}

	private IEnumerator SpawnNextItemWithDelay(float delay)
	{
		yield return new WaitForSeconds(delay);
		SpawnNextItem();
	}

	private void SpawnNextItem()
	{
		if (currentItemIndex >= itemList.Count)
		{
			return;
		}
		DraggableItem currentItem = itemList[currentItemIndex];
		if (currentItem == null)
		{
			return;
		}
		Vector3 startPos = ((spawnPoint != null) ? spawnPoint.position : new Vector3(0f, -8f, 0f));
		Vector3 endPos = ((targetPoint != null) ? targetPoint.position : Vector3.zero);
		Collider itemCollider = currentItem.GetComponent<Collider>();
		isItemReady = false;
		currentItem.transform.position = startPos;
		currentItem.gameObject.SetActive(true);
		if (itemCollider != null)
		{
			itemCollider.enabled = false;
		}
		currentItem.transform.DOMove(endPos, moveDuration).SetEase(moveEase).OnComplete(delegate
		{
			if (itemCollider != null)
			{
				itemCollider.enabled = true;
			}
			isItemReady = true;
		});
	}
}
