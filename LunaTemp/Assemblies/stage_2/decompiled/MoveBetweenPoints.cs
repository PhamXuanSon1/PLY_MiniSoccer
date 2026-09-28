using DG.Tweening;
using UnityEngine;

public class MoveBetweenPoints : MonoBehaviour
{
	[Tooltip("Kéo thả vật thể làm mốc Điểm A (Xuất phát) vào đây")]
	public Transform pointA;

	[Tooltip("Kéo thả vật thể làm mốc Điểm B (Đích đến) vào đây")]
	public Transform pointB;

	[Tooltip("Thời gian chạy từ A tới B (tính bằng giây). Số càng nhỏ chạy càng nhanh.")]
	public float duration = 2f;

	private void Start()
	{
		if (pointA != null && pointB != null)
		{
			base.transform.position = pointA.position;
			base.transform.DOMove(pointB.position, duration).SetEase(Ease.Linear).SetLoops(-1, LoopType.Restart);
		}
		else
		{
			Debug.LogWarning("Chưa gán Điểm A hoặc Điểm B cho script MoveBetweenPoints!");
		}
	}
}
