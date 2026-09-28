using UnityEngine;

public class CameraFollow2D : MonoBehaviour
{
	[Header("Cài đặt Target")]
	[Tooltip("Kéo vật thể mà Camera cần đi theo (Ví dụ: Cup) vào đây")]
	public Transform target;

	[Header("Độ mượt & Khoảng cách")]
	[Tooltip("Tốc độ bám theo (Số càng lớn bám càng sát). Khuyến nghị: 5 đến 10")]
	public float smoothSpeed = 10f;

	[Tooltip("Vị trí bù trừ của Camera so với Target. Trục Z luôn phải là số âm để nhìn thấy cảnh (VD: -10).")]
	public Vector3 offset = new Vector3(0f, 0f, -10f);

	[Tooltip("Bỏ tick nếu bạn chỉ muốn Camera chạy ngang, không chạy lên xuống")]
	public bool followY = false;

	private void LateUpdate()
	{
		if (!(target == null))
		{
			Vector3 targetPosition = target.position + offset;
			if (!followY)
			{
				targetPosition.y = base.transform.position.y;
			}
			base.transform.position = Vector3.Lerp(base.transform.position, targetPosition, smoothSpeed * Time.deltaTime);
		}
	}
}
