using Luna.Unity;
using UnityEngine;

public class ClickToStore : MonoBehaviour
{
	private void OnMouseDown()
	{
		Debug.Log("Đã click vào Item -> Chuyển hướng ra Store!");
		AppLovinAnalytics.Track(ALEvent.CTA_CLICKED);
		LifeCycle.GameEnded();
		Playable.InstallFullGame();
	}
}
