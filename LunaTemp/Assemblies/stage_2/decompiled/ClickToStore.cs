using Luna.Unity;
using UnityEngine;

[RequireComponent(typeof(Collider))]
public class ClickToStore : MonoBehaviour
{
	private static bool gameEndedSent;

	private void Update()
	{
		if (!Input.GetMouseButtonDown(0))
		{
			return;
		}
		Ray ray = Camera.main.ScreenPointToRay(Input.mousePosition);
		if (Physics.Raycast(ray, out var hit) && hit.collider.gameObject == base.gameObject)
		{
			Debug.Log("Đã click vào Item -> Chuyển hướng ra Store!");
			if (!gameEndedSent)
			{
				gameEndedSent = true;
			}
			LifeCycle.GameEnded();
			Playable.InstallFullGame();
		}
	}
}
