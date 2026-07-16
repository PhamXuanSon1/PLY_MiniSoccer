using UnityEngine;
using DG.Tweening;

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
            // Ép vị trí lúc mới vào game nằm đúng ở điểm A
            transform.position = pointA.position;

            // DOTWEEN LOGIC: 
            // 1. DOMove: Di chuyển đến vị trí của B trong thời gian 'duration'
            // 2. SetEase(Ease.Linear): Tốc độ di chuyển đều đặn, không bị chậm lại ở hai đầu
            // 3. SetLoops(-1, LoopType.Restart): -1 là lặp vô hạn. Restart là đi tới B xong biến ngay về A để đi tiếp.
            transform.DOMove(pointB.position, duration)
                     .SetEase(Ease.Linear)
                     .SetLoops(-1, LoopType.Restart);
        }
        else
        {
            Debug.LogWarning("Chưa gán Điểm A hoặc Điểm B cho script MoveBetweenPoints!");
        }
    }
}
