using UnityEngine;
using Luna.Unity; // Thư viện của Luna Playable

public class ClickToStore : MonoBehaviour
{
    private static bool gameEndedSent = false; // LifeCycle.GameEnded chỉ gọi 1 lần

    // Hàm này tự động được gọi khi người chơi click/chạm vào Collider của Object này
    private void OnMouseDown()
    {
        Debug.Log("Đã click vào Item -> Chuyển hướng ra Store!");
        
        // Gọi lệnh kết thúc game và mở Store của Luna
        if (!gameEndedSent)
        {
            gameEndedSent = true;
        }
            LifeCycle.GameEnded();

        Playable.InstallFullGame();
    }
}
