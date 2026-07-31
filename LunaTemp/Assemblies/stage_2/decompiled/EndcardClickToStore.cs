using System;
using Luna.Unity;
using UnityEngine;

public class EndcardClickToStore : MonoBehaviour
{
	private void Update()
	{
		if (Input.GetMouseButtonDown(0))
		{
			OpenStore();
		}
	}

	public void OpenStore()
	{
		Debug.Log("CLICK ENDCARD -> CHUYEN HUONG RA STORE!");
		try
		{
			AppLovinAnalytics.Track(ALEvent.CTA_CLICKED);
			LifeCycle.GameEnded();
			Playable.InstallFullGame();
		}
		catch (Exception e)
		{
			Debug.LogWarning("Luna Playable SDK Exception: " + e.Message);
		}
	}
}
