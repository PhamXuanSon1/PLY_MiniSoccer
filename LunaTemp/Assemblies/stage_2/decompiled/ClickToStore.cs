using Luna.Unity;
using UnityEngine;

public class ClickToStore : MonoBehaviour
{
	private static bool gameEndedSent;

	private void OnMouseDown()
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
