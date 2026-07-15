using UnityEngine;

[RequireComponent(typeof(Rigidbody2D))]
public class BatStrikeController : MonoBehaviour
{
    [Header("Charge Settings")]
    [Tooltip("Tốc độ gậy lùi về bên trái khi đang giữ màn hình.")]
    public float pullSpeed = 2f;
    
    [Tooltip("Khoảng cách lùi tối đa (đơn vị Unity).")]
    public float maxPullDistance = 3f;
    
    [Tooltip("Thời gian giữ chạm tối thiểu để tính là Kéo (giây). Nếu chỉ chạm (tap) nhanh hơn số này thì sẽ bị bỏ qua.")]
    public float minHoldTime = 0.15f;

    [Tooltip("Lực đánh văng về bên phải tối đa.")]
    public float strikeForce = 50f;
    
    [Header("Collision Settings")]
    [Tooltip("Tag của object Cup (Nhớ gán Tag 'Cup' cho Cup trong Unity).")]
    public string targetTag = "Cup";

    private Vector3 initialPosition;
    private bool hasFired = false;
    private Rigidbody2D rb;
    private float holdTime = 0f;

    void Start()
    {
        initialPosition = transform.position;
        rb = GetComponent<Rigidbody2D>();
        
        // Đảm bảo lúc đầu gậy ở trạng thái Kinematic để không bị rơi hoặc bật văng lung tung
        rb.bodyType = RigidbodyType2D.Kinematic;
    }

    void Update()
    {
        if (hasFired) return; // Nếu đã bắn rồi thì không cho thao tác nữa

        // Đang giữ chạm chuột trái (trên mobile là chạm ngón tay)
        if (Input.GetMouseButton(0))
        {
            holdTime += Time.deltaTime; // Tăng bộ đếm thời gian giữ
            
            // Nếu thời gian giữ lớn hơn mức quy định thì mới bắt đầu kéo gậy lùi lại
            if (holdTime >= minHoldTime)
            {
                ChargeBat();
            }
        }
        
        // Khi thả tay ra
        if (Input.GetMouseButtonUp(0))
        {
            // Kiểm tra xem lúc nãy có giữ đủ lâu để tính là Kéo không
            if (holdTime >= minHoldTime)
            {
                FireBat();
            }
            else
            {
                // Nếu chỉ là Tap nhanh, reset lại bộ đếm để người chơi có thể giữ lại từ đầu
                holdTime = 0f;
                transform.position = initialPosition; // Trả gậy về vị trí gốc lỡ có bị xê dịch tí ti
            }
        }
    }

    private void ChargeBat()
    {
        // Tính toán khoảng cách đã lùi so với vị trí ban đầu
        float currentDistance = Vector3.Distance(initialPosition, transform.position);

        if (currentDistance < maxPullDistance)
        {
            // Di chuyển gậy từ từ về bên trái
            transform.Translate(Vector3.left * pullSpeed * Time.deltaTime);
            
            // Ép (Clamp) vị trí để gậy không bao giờ lùi quá maxPullDistance
            if (Vector3.Distance(initialPosition, transform.position) > maxPullDistance)
            {
                transform.position = initialPosition + (Vector3.left * maxPullDistance);
            }
        }
    }

    private void FireBat()
    {
        hasFired = true; // Đánh dấu đã bắn

        // Chuyển sang Dynamic để nhận lực vật lý (AddForce)
        rb.bodyType = RigidbodyType2D.Dynamic;

        // Tính tỷ lệ lực dựa trên khoảng cách đã kéo (kéo càng sâu bắn càng mạnh)
        float pullDistance = Vector3.Distance(initialPosition, transform.position);
        
        // Tránh chia cho 0 nếu maxPullDistance = 0 (dù trường hợp này hiếm)
        float forceMultiplier = maxPullDistance > 0 ? pullDistance / maxPullDistance : 1f; 
        
        // Đảm bảo có một lực tác động tối thiểu kể cả khi người chơi vừa nhấp đã nhả tay ngay lập tức
        forceMultiplier = Mathf.Clamp(forceMultiplier, 0.2f, 1f);

        float finalForce = strikeForce * forceMultiplier;

        // Đẩy gậy về bên phải (Vector2.right) bằng 1 lực Impulse
        rb.AddForce(Vector2.right * finalForce, ForceMode2D.Impulse);
    }

    void OnCollisionEnter2D(Collision2D collision)
    {
        // Nếu gậy va chạm với object có Tag là targetTag (ví dụ: "Cup")
        if (collision.gameObject.CompareTag(targetTag))
        {
            // Dừng ngay lập tức toàn bộ vận tốc của Gậy
            rb.linearVelocity = Vector2.zero;
            rb.angularVelocity = 0f;

            // Đổi bodyType lại thành Kinematic để Gậy hoàn toàn đứng yên tại chỗ
            rb.bodyType = RigidbodyType2D.Kinematic;
        }
    }
}
