using Luna.Unity;
using UnityEngine;

[RequireComponent(typeof(Collider))]
public class ClickToStore : MonoBehaviour
{
	private void Update()
	{
		if (Input.GetMouseButtonDown(0))
		{
			Ray ray = Camera.main.ScreenPointToRay(Input.mousePosition);
			if (Physics.Raycast(ray, out var hit) && hit.collider.gameObject == base.gameObject)
			{
				Debug.Log("Đã click vào Item -> Chuyển hướng ra Store!");
				LifeCycle.GameEnded();
				Playable.InstallFullGame();
			}
		}
	}
}
