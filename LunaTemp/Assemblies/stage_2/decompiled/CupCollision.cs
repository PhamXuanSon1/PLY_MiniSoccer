using UnityEngine;

public class CupCollision : MonoBehaviour
{
	[Header("Cài đặt va chạm")]
	[Tooltip("Tag của thanh Base (nhớ gán Tag này cho các object con của Base)")]
	public string baseTag = "Base";

	[Tooltip("Kéo thả object bạn muốn bật (hiển thị lên) vào đây")]
	public GameObject objectToActivate;

	private void OnCollisionEnter2D(Collision2D collision)
	{
		if (collision.gameObject.CompareTag(baseTag) && objectToActivate != null)
		{
			objectToActivate.SetActive(true);
		}
	}
}
