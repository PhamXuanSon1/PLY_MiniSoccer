using UnityEngine;

public class CameraFollow2D : MonoBehaviour
{
	[Header("Cài đặt Target")]
	[Tooltip("Kéo vật thể mà Camera cần đi theo (Ví dụ: Cup) vào đây")]
	public Transform target;

	[Header("Độ mượt & Khoảng cách")]
	[Tooltip("Thời gian trễ để Camera đuổi kịp. Càng nhỏ camera bám càng sát và nhanh, số to sẽ mượt nhưng chậm.")]
	public float smoothTime = 0.25f;

	[Tooltip("Vị trí bù trừ của Camera so với Target. Trục Z luôn phải là số âm để nhìn thấy cảnh (VD: -10).")]
	public Vector3 offset = new Vector3(0f, 0f, -10f);

	[Tooltip("Bỏ tick nếu bạn chỉ muốn Camera chạy ngang, không chạy lên xuống")]
	public bool followY = false;

	private Vector3 velocity = Vector3.zero;

	private void LateUpdate()
	{
		if (!(target == null))
		{
			Vector3 targetPosition = target.position + offset;
			if (!followY)
			{
				targetPosition.y = base.transform.position.y;
			}
			base.transform.position = Vector3.SmoothDamp(base.transform.position, targetPosition, ref velocity, smoothTime);
		}
	}
}
