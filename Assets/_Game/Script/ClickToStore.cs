using UnityEngine;
using Luna.Unity; // Thư viện của Luna Playable

public class ClickToStore : MonoBehaviour
{
    // Hàm này tự động được gọi khi người chơi click/chạm vào Collider của Object này
    private void OnMouseDown()
    {
        Debug.Log("Đã click vào Item -> Chuyển hướng ra Store!");
        
        // Gọi lệnh kết thúc game và mở Store của Luna
        LifeCycle.GameEnded();
        Playable.InstallFullGame();
    }
}
