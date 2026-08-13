using UnityEngine;

namespace HaalandGame
{
	public class AnimationEventBridge : MonoBehaviour
	{
		public void OnTackleFinished()
		{
			Debug.Log("[AnimationEventBridge] Event: OnTackleFinished");
			if (HaalandGameManager.Instance != null)
			{
				HaalandGameManager.Instance.OnTackleFinished();
			}
		}

		public void OnImpactCloudStart()
		{
			Debug.Log("[AnimationEventBridge] Event: OnImpactCloudStart");
			if (HaalandGameManager.Instance != null)
			{
				HaalandGameManager.Instance.OnImpactCloudStart();
			}
		}

		public void ShowHaalandHurt()
		{
			Debug.Log("[AnimationEventBridge] Event: ShowHaalandHurt");
			if (HaalandGameManager.Instance != null)
			{
				HaalandGameManager.Instance.ShowHaalandHurt();
			}
		}

		public void OnCloudFinished()
		{
			Debug.Log("[AnimationEventBridge] Event: OnCloudFinished");
			if (HaalandGameManager.Instance != null)
			{
				HaalandGameManager.Instance.OnCloudFinished();
			}
		}

		public void PlayRefereeAnimation()
		{
			Debug.Log("[AnimationEventBridge] Event: PlayRefereeAnimation");
			if (HaalandGameManager.Instance != null)
			{
				HaalandGameManager.Instance.PlayRefereeAnimation();
			}
		}

		public void OnLineupComplete()
		{
			Debug.Log("[AnimationEventBridge] Event: OnLineupComplete");
			if (HaalandGameManager.Instance != null)
			{
				HaalandGameManager.Instance.OnLineupComplete();
			}
		}

		public void OnRedCardFinished()
		{
			Debug.Log("[AnimationEventBridge] Event: OnRedCardFinished");
			if (HaalandGameManager.Instance != null)
			{
				HaalandGameManager.Instance.OnRedCardFinished();
			}
		}
	}
}
