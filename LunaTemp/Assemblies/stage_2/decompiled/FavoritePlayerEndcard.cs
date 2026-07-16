using Luna.Unity;
using TMPro;
using UnityEngine;

public class FavoritePlayerEndcard : MonoBehaviour
{
	[Tooltip("Kéo Component SpriteRenderer của Endcard vào đây (để hiển thị ảnh Full Body)")]
	public SpriteRenderer fullBodyRenderer;

	[Tooltip("Kéo Component TextMeshPro của Endcard vào đây (để hiển thị Tên)")]
	public TMP_Text nameText;

	[Tooltip("Kéo Object cha chứa toàn bộ UI Endcard vào đây (để bật/tắt lúc cần)")]
	public GameObject endcardPanel;

	private bool canClickToStore = false;

	private void Start()
	{
		if (endcardPanel != null)
		{
			endcardPanel.SetActive(false);
		}
	}

	public void ShowEndcard(FavoritePlayerCard winnerData)
	{
		if (!(winnerData == null))
		{
			if (fullBodyRenderer != null)
			{
				fullBodyRenderer.sprite = winnerData.fullBodySprite;
			}
			if (nameText != null)
			{
				nameText.text = winnerData.playerName;
			}
			if (endcardPanel != null)
			{
				endcardPanel.SetActive(true);
			}
		}
	}

	public void EnableClickToStore()
	{
		Debug.Log("⏳ Đã hết thời gian chờ. BẬT TÍNH NĂNG CLICK RA STORE!");
		canClickToStore = true;
	}

	private void Update()
	{
		if (canClickToStore && Input.GetMouseButtonDown(0))
		{
			canClickToStore = false;
			GotoStore();
		}
	}

	public void GotoStore()
	{
		Debug.Log("\ud83c\udf89 Chuyển hướng ra Store tải game!");
		LifeCycle.GameEnded();
		Playable.InstallFullGame();
	}
}
