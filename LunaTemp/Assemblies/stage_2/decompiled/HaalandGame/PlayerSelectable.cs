using UnityEngine;

namespace HaalandGame
{
	public class PlayerSelectable : MonoBehaviour
	{
		[Tooltip("Loại cầu thủ (Ronaldo, Vini, Messi, Mbappe)")]
		public PlayerType playerType;

		[Tooltip("Layer yêu cầu để nhận diện click (Mặc định: Player)")]
		public string targetLayerName = "Player";

		private void OnMouseDown()
		{
			int targetLayer = LayerMask.NameToLayer(targetLayerName);
			if (targetLayer == -1 || base.gameObject.layer != targetLayer)
			{
				Debug.LogWarning($"[PlayerSelectable] Bỏ qua click trên '{base.gameObject.name}'. Layer hiện tại: '{LayerMask.LayerToName(base.gameObject.layer)}', Layer yêu cầu: '{targetLayerName}' (Index: {targetLayer}).");
			}
			else
			{
				Debug.Log($"[PlayerSelectable] Clicked on player: {playerType} (Layer: {LayerMask.LayerToName(base.gameObject.layer)})");
				if (HaalandGameManager.Instance != null)
				{
					HaalandGameManager.Instance.OnPlayerSelected(playerType);
				}
			}
		}
	}
}
