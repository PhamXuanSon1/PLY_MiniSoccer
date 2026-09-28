using Luna.Unity;
using UnityEngine;

public static class StoreRedirect
{
	private static bool gameEndedSent = false;

	private static float lastInstallTime = -10f;

	private const float InstallDebounce = 0.3f;

	public static void EndGameOnce()
	{
		if (!gameEndedSent)
		{
			gameEndedSent = true;
			LifeCycle.GameEnded();
		}
	}

	public static void Install()
	{
		LifeCycle.GameEnded();
		Playable.InstallFullGame();
	}

	public static bool TappedThisFrame()
	{
		if (Input.GetMouseButtonDown(0) || Input.GetMouseButtonUp(0))
		{
			return true;
		}
		for (int i = 0; i < Input.touchCount; i++)
		{
			TouchPhase p = Input.GetTouch(i).phase;
			if (p == TouchPhase.Began || p == TouchPhase.Ended)
			{
				return true;
			}
		}
		return false;
	}
}
