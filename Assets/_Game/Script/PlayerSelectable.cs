using UnityEngine;

namespace HaalandGame
{
    /// <summary>
    /// Gắn script này vào các GameObject cầu thủ đứng (Rolnaldo Stand, Vini Stand, Messi Stand, Mbappe Stand).
    /// Yêu cầu GameObject phải có Collider (BoxCollider 3D hoặc BoxCollider 2D).
    /// </summary>
    public class PlayerSelectable : MonoBehaviour
    {
        [Tooltip("Loại cầu thủ (Ronaldo, Vini, Messi, Mbappe)")]
        public PlayerType playerType;

        [Tooltip("Layer yêu cầu để nhận diện click (Mặc định: Player)")]
        public string targetLayerName = "Player";

        private void OnMouseDown()
        {
            int targetLayer = LayerMask.NameToLayer(targetLayerName);

            // Bắt buộc Layer của GameObject phải trùng khớp với targetLayerName (Player)
            if (targetLayer == -1 || gameObject.layer != targetLayer)
            {
                Debug.LogWarning($"[PlayerSelectable] Bỏ qua click trên '{gameObject.name}'. Layer hiện tại: '{LayerMask.LayerToName(gameObject.layer)}', Layer yêu cầu: '{targetLayerName}' (Index: {targetLayer}).");
                return;
            }

            Debug.Log($"[PlayerSelectable] Clicked on player: {playerType} (Layer: {LayerMask.LayerToName(gameObject.layer)})");
            if (HaalandGameManager.Instance != null)
            {
                HaalandGameManager.Instance.OnPlayerSelected(playerType);
            }
        }
    }
}
