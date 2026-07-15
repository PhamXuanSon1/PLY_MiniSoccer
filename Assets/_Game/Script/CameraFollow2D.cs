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

    // Phải dùng LateUpdate thay vì Update để đảm bảo target đã di chuyển xong mới tính toán vị trí Camera
    void LateUpdate()
    {
        if (target == null)
        {
            return;
        }

        // Tính toán vị trí đích đến của Camera
        Vector3 targetPosition = target.position + offset;

        // Nếu không cho phép chạy lên xuống (followY = false), khoá chết trục Y của Camera ở vị trí hiện tại
        if (!followY)
        {
            targetPosition.y = transform.position.y;
        }

        // Nội suy mượt mà từ vị trí hiện tại đến vị trí đích (bằng hàm SmoothDamp chuyên dụng của Unity)
        transform.position = Vector3.SmoothDamp(transform.position, targetPosition, ref velocity, smoothTime);
    }
}
