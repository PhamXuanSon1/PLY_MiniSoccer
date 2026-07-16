using UnityEngine;
using Luna.Unity; // Thư viện của Luna Playable

// Tự động yêu cầu Collider 3D
[RequireComponent(typeof(Collider))]
public class ClickToStore : MonoBehaviour
{
    private void Update()
    {
        if (Input.GetMouseButtonDown(0))
        {
            // Bắn tia Raycast 3D từ camera
            Ray ray = Camera.main.ScreenPointToRay(Input.mousePosition);
            
            // Nếu đụng trúng một vật thể
            if (Physics.Raycast(ray, out RaycastHit hit))
            {
                // Kiểm tra xem vật thể đó có phải là chính object mang script này không
                if (hit.collider.gameObject == this.gameObject)
                {
                    Debug.Log("Đã click vào Item -> Chuyển hướng ra Store!");
                    
                    // Gọi lệnh kết thúc game và mở Store của Luna
                    LifeCycle.GameEnded();
                    Playable.InstallFullGame();
                }
            }
        }
    }
}
