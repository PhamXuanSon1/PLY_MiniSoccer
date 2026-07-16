using UnityEngine;

public class HideOnFirstClick : MonoBehaviour
{
    [Tooltip("Kéo thả object bạn muốn tắt vào đây (Ví dụ: bàn tay hướng dẫn). Nếu để trống thì nó sẽ tự tắt chính nó.")]
    public GameObject objectToHide;

    private void Start()
    {
        // Nếu bạn lười không kéo gì vào, nó sẽ lấy luôn object đang gắn script này
        if (objectToHide == null)
        {
            objectToHide = gameObject;
        }
    }

    private void Update()
    {
        // Nhận diện lần chạm/click chuột đầu tiên
        if (Input.GetMouseButtonDown(0))
        {
            if (objectToHide != null)
            {
                objectToHide.SetActive(false); // Tắt object đi
            }
            
            // Tắt luôn cái script này đi để nó không phải chạy hàm Update kiểm tra click liên tục nữa (tối ưu game)
            enabled = false; 
        }
    }
}
