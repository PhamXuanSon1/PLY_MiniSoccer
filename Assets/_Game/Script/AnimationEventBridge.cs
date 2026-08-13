using UnityEngine;

namespace HaalandGame
{
    /// <summary>
    /// Component cầu nối để Animator nhận Animation Events và chuyển trực tiếp tới HaalandGameManager.
    /// Gắn script này vào các GameObject có Animator (VD: Ronaldo xoạc bóng, StandPlayer, Referee).
    /// </summary>
    public class AnimationEventBridge : MonoBehaviour
    {
        // Event khi Anim xoạc bóng chạy được 0.5s / kết thúc xoạc -> Ẩn Obj Xoạc bóng
        public void OnTackleFinished()
        {
            Debug.Log("[AnimationEventBridge] Event: OnTackleFinished");
            if (HaalandGameManager.Instance != null)
            {
                HaalandGameManager.Instance.OnTackleFinished();
            }
        }

        // Event khi va chạm -> Tắt ảnh Haaland rê bóng + Bật FightingCloud
        public void OnImpactCloudStart()
        {
            Debug.Log("[AnimationEventBridge] Event: OnImpactCloudStart");
            if (HaalandGameManager.Instance != null)
            {
                HaalandGameManager.Instance.OnImpactCloudStart();
            }
        }

        // Event sau 2s mây khói -> Bật Haaland Đau
        public void ShowHaalandHurt()
        {
            Debug.Log("[AnimationEventBridge] Event: ShowHaalandHurt");
            if (HaalandGameManager.Instance != null)
            {
                HaalandGameManager.Instance.ShowHaalandHurt();
            }
        }

        // Event sau 3s mây khói / hết cloud -> Tắt FightingCloud, Active StandPlayer & trigger di chuyển
        public void OnCloudFinished()
        {
            Debug.Log("[AnimationEventBridge] Event: OnCloudFinished");
            if (HaalandGameManager.Instance != null)
            {
                HaalandGameManager.Instance.OnCloudFinished();
            }
        }

        // Event phát animation Trọng tài
        public void PlayRefereeAnimation()
        {
            Debug.Log("[AnimationEventBridge] Event: PlayRefereeAnimation");
            if (HaalandGameManager.Instance != null)
            {
                HaalandGameManager.Instance.PlayRefereeAnimation();
            }
        }

        // Event khi StandPlayer hoàn tất di chuyển vào vị trí
        public void OnLineupComplete()
        {
            Debug.Log("[AnimationEventBridge] Event: OnLineupComplete");
            if (HaalandGameManager.Instance != null)
            {
                HaalandGameManager.Instance.OnLineupComplete();
            }
        }

        // Event khi Trọng tài kết thúc anim giơ thẻ đỏ
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
