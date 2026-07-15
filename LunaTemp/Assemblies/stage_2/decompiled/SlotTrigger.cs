using System.Collections;
using UnityEngine;

[RequireComponent(typeof(BoxCollider2D))]
public class SlotTrigger : MonoBehaviour
{
	[Header("Dữ liệu Thẻ Cầu Thủ")]
	[Tooltip("Kéo thả file Scriptable Object PlayerCardData vào đây (ví dụ: thẻ Messi)")]
	public PlayerCardData cardData;

	[Header("Cài đặt Va chạm")]
	[Tooltip("Tag của quả Cúp")]
	public string targetTag = "Cup";

	[Header("Cài đặt Hiệu ứng Bay lên")]
	[Tooltip("Tạo 1 Empty GameObject đặt ở vị trí muốn bay lên và kéo nó vào đây (để lấy trục Y)")]
	public Transform yAnchor;

	[Tooltip("Tốc độ Slot bay lên màn hình")]
	public float moveSpeed = 10f;

	private bool isTriggered = false;

	private void Start()
	{
		Collider2D col = GetComponent<Collider2D>();
		if (col != null)
		{
			col.isTrigger = true;
		}
	}

	private void OnTriggerEnter2D(Collider2D collision)
	{
		if (!isTriggered && collision.gameObject.CompareTag(targetTag))
		{
			isTriggered = true;
			Rigidbody2D cupRb = collision.gameObject.GetComponent<Rigidbody2D>();
			if (cupRb != null)
			{
				cupRb.linearVelocity = Vector2.zero;
				cupRb.angularVelocity = 0f;
				cupRb.bodyType = RigidbodyType2D.Static;
			}
			if (yAnchor != null)
			{
				StartCoroutine(FlyAndShowUI());
				return;
			}
			Debug.LogWarning("Bạn chưa gán vật thể Anchor cho yAnchor! Hệ thống sẽ bật UI ngay lập tức.");
			ShowUI();
		}
	}

	private IEnumerator FlyAndShowUI()
	{
		Camera mainCam = Camera.main;
		float targetX = ((mainCam != null) ? mainCam.transform.position.x : base.transform.position.x);
		float targetY = yAnchor.position.y;
		Vector3 targetPosition = new Vector3(targetX, targetY, base.transform.position.z);
		while (Vector3.Distance(base.transform.position, targetPosition) > 0.01f)
		{
			base.transform.position = Vector3.MoveTowards(base.transform.position, targetPosition, moveSpeed * Time.deltaTime);
			yield return null;
		}
		base.transform.position = targetPosition;
		ShowUI();
	}

	private void ShowUI()
	{
		if (PlayerCardUIManager.Instance != null)
		{
			PlayerCardUIManager.Instance.ShowPlayerCard(cardData);
			base.gameObject.SetActive(false);
		}
		else
		{
			Debug.LogWarning("Không tìm thấy PlayerCardUIManager trong Scene. Hãy chắc chắn bạn đã tạo UI Manager.");
		}
	}
}
