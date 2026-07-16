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

    // Sử dụng LateUpdate là BẮT BUỘC để tránh giật hình, vì nó chạy SAU khi vật lý (Rigidbody) đã tính toán xong vị trí
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

        // Dùng Vector3.Lerp tiêu chuẩn để bám theo mượt mà
        transform.position = Vector3.Lerp(transform.position, targetPosition, smoothSpeed * Time.deltaTime);
    }
}
