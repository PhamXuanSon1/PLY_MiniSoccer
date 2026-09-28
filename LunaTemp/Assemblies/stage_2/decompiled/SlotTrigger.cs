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

	[Header("Hiệu ứng Bay xuống (Tuỳ chọn)")]
	[Tooltip("Object nào đó sẽ bay xuống cùng lúc với Slot bay lên (Ví dụ: cái búa, màn chắn...)")]
	public Transform objectToMoveDown;

	[Tooltip("Vị trí đích đến theo chiều dọc màn hình (0 là dưới cùng, 1 là trên cùng). 2/10 màn hình = 0.2")]
	[Range(0f, 1f)]
	public float targetScreenYRatio = 0.2f;

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
		Vector3 slotStartPos = base.transform.position;
		Vector3 slotTargetPos = new Vector3(targetX, targetY, base.transform.position.z);
		Vector3 extraStartPos = Vector3.zero;
		Vector3 extraTargetPos = Vector3.zero;
		if (objectToMoveDown != null && mainCam != null)
		{
			extraStartPos = objectToMoveDown.position;
			Vector3 screenPos = new Vector3((float)Screen.width / 2f, (float)Screen.height * targetScreenYRatio, 10f);
			Vector3 worldPos = mainCam.ScreenToWorldPoint(screenPos);
			extraTargetPos = new Vector3(extraStartPos.x, worldPos.y, extraStartPos.z);
		}
		float totalDistance = Vector3.Distance(slotStartPos, slotTargetPos);
		float duration = totalDistance / moveSpeed;
		float elapsedTime = 0f;
		while (elapsedTime < duration)
		{
			elapsedTime += Time.deltaTime;
			float t = elapsedTime / duration;
			base.transform.position = Vector3.Lerp(slotStartPos, slotTargetPos, t);
			if (objectToMoveDown != null)
			{
				objectToMoveDown.position = Vector3.Lerp(extraStartPos, extraTargetPos, t);
			}
			yield return null;
		}
		base.transform.position = slotTargetPos;
		if (objectToMoveDown != null)
		{
			objectToMoveDown.position = extraTargetPos;
		}
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
