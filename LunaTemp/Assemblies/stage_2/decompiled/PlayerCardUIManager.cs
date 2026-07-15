using System.Collections;
using Luna.Unity;
using TMPro;
using UnityEngine;
using UnityEngine.UI;

public class PlayerCardUIManager : MonoBehaviour
{
	[Header("UI Panels")]
	[Tooltip("Panel chính chứa giao diện hiển thị (Dùng để bật/tắt toàn bộ popup)")]
	public GameObject cardPanel;

	[Tooltip("Kéo thả các object khác muốn BẬT LÊN cùng lúc với Card Panel vào danh sách này")]
	public GameObject[] extraObjectsToActivate;

	[Header("Hành động đếm ngược (Ví dụ: Đợi 3 giây)")]
	[Tooltip("Thời gian đếm ngược (tính bằng giây)")]
	public float waitTime = 3f;

	[Tooltip("Các object sẽ tự động BẬT LÊN sau khi hết thời gian đếm ngược")]
	public GameObject[] objectsToTurnOnAfterWait;

	[Tooltip("Các object sẽ tự động TẮT ĐI sau khi hết thời gian đếm ngược")]
	public GameObject[] objectsToTurnOffAfterWait;

	[Header("UI Elements (Kéo thả từ Canvas vào đây)")]
	public TMP_Text nationalityText;

	public Image playerImage;

	public Image flagImage;

	private bool canClickToStore = false;

	public static PlayerCardUIManager Instance { get; private set; }

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
	}

	public void GotoStore()
	{
		LifeCycle.GameEnded();
		Playable.InstallFullGame();
	}

	private void Start()
	{
		HideCard();
	}

	private void Update()
	{
		if (canClickToStore && Input.GetMouseButtonDown(0))
		{
			canClickToStore = false;
			GotoStore();
		}
	}

	public void ShowPlayerCard(PlayerCardData data)
	{
		if (data == null)
		{
			Debug.LogWarning("Không có dữ liệu thẻ cầu thủ được truyền vào!");
			return;
		}
		if (nationalityText != null)
		{
			nationalityText.text = data.nationality;
		}
		if (playerImage != null)
		{
			playerImage.sprite = data.playerSprite;
		}
		if (flagImage != null)
		{
			flagImage.sprite = data.flagSprite;
		}
		if (cardPanel != null)
		{
			cardPanel.SetActive(true);
		}
		if (extraObjectsToActivate != null)
		{
			GameObject[] array = extraObjectsToActivate;
			foreach (GameObject obj in array)
			{
				if (obj != null)
				{
					obj.SetActive(true);
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
		canClickToStore = true;
	}

	public void HideCard()
	{
		if (cardPanel != null)
		{
			cardPanel.SetActive(false);
		}
		if (extraObjectsToActivate == null)
		{
			return;
		}
		GameObject[] array = extraObjectsToActivate;
		foreach (GameObject obj in array)
		{
			if (obj != null)
			{
				obj.SetActive(false);
			}
		}
	}
}
