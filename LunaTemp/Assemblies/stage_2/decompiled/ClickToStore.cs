using Luna.Unity;
using UnityEngine;

public class ClickToStore : MonoBehaviour
{
	private void OnMouseDown()
	{
		Debug.Log("Đã click vào Item -> Chuyển hướng ra Store!");
		LifeCycle.GameEnded();
		Playable.InstallFullGame();
	}
}
