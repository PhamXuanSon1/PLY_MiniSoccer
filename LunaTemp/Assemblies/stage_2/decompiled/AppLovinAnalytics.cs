using UnityEngine;

public static class AppLovinAnalytics
{
	public static void Track(ALEvent evt)
	{
		Debug.Log("[ALPlayableEvent] " + evt);
	}
}
