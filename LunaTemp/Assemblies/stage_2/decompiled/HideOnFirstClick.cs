using UnityEngine;

public class HideOnFirstClick : MonoBehaviour
{
	[Tooltip("Kéo thả object bạn muốn tắt vào đây (Ví dụ: bàn tay hướng dẫn). Nếu để trống thì nó sẽ tự tắt chính nó.")]
	public GameObject objectToHide;

	private void Start()
	{
		if (objectToHide == null)
		{
			objectToHide = base.gameObject;
		}
	}

	private void Update()
	{
		if (Input.GetMouseButtonDown(0))
		{
			if (objectToHide != null)
			{
				objectToHide.SetActive(false);
			}
			base.enabled = false;
		}
	}
}
