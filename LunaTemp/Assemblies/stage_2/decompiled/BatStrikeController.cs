using UnityEngine;

[RequireComponent(typeof(Rigidbody2D))]
public class BatStrikeController : MonoBehaviour
{
	[Header("Charge Settings")]
	[Tooltip("Tốc độ gậy lùi về bên trái khi đang giữ màn hình.")]
	public float pullSpeed = 2f;

	[Tooltip("Khoảng cách lùi tối đa (đơn vị Unity).")]
	public float maxPullDistance = 3f;

	[Tooltip("Lực đánh văng về bên phải tối đa.")]
	public float strikeForce = 50f;

	[Header("Collision Settings")]
	[Tooltip("Tag của object Cup (Nhớ gán Tag 'Cup' cho Cup trong Unity).")]
	public string targetTag = "Cup";

	private Vector3 initialPosition;

	private bool hasFired = false;

	private Rigidbody2D rb;

	private void Start()
	{
		initialPosition = base.transform.position;
		rb = GetComponent<Rigidbody2D>();
		rb.bodyType = RigidbodyType2D.Kinematic;
	}

	private void Update()
	{
		if (!hasFired)
		{
			if (Input.GetMouseButton(0))
			{
				ChargeBat();
			}
			if (Input.GetMouseButtonUp(0))
			{
				FireBat();
			}
		}
	}

	private void ChargeBat()
	{
		float currentDistance = Vector3.Distance(initialPosition, base.transform.position);
		if (currentDistance < maxPullDistance)
		{
			base.transform.Translate(Vector3.left * pullSpeed * Time.deltaTime);
			if (Vector3.Distance(initialPosition, base.transform.position) > maxPullDistance)
			{
				base.transform.position = initialPosition + Vector3.left * maxPullDistance;
			}
		}
	}

	private void FireBat()
	{
		hasFired = true;
		rb.bodyType = RigidbodyType2D.Dynamic;
		float pullDistance = Vector3.Distance(initialPosition, base.transform.position);
		float forceMultiplier = ((maxPullDistance > 0f) ? (pullDistance / maxPullDistance) : 1f);
		forceMultiplier = Mathf.Clamp(forceMultiplier, 0.2f, 1f);
		float finalForce = strikeForce * forceMultiplier;
		rb.AddForce(Vector2.right * finalForce, ForceMode2D.Impulse);
	}

	private void OnCollisionEnter2D(Collision2D collision)
	{
		if (collision.gameObject.CompareTag(targetTag))
		{
			rb.linearVelocity = Vector2.zero;
			rb.angularVelocity = 0f;
			rb.bodyType = RigidbodyType2D.Kinematic;
		}
	}
}
