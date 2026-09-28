using UnityEngine;
using Luna.Unity;

/// <summary>
/// Helper dùng chung để chuyển hướng ra Store cho mọi network (Mintegral, Unity, IronSource...).
/// - LifeCycle.GameEnded() chỉ được gọi ĐÚNG 1 LẦN (Mintegral yêu cầu gameEnd() gọi 1 lần duy nhất,
///   gọi lặp lại sẽ làm install() sau đó bị bỏ qua khi user quay về từ Store).
/// - Playable.InstallFullGame() được gọi mỗi lần user tap (có debounce chống double-tap).
/// </summary>
public static class StoreRedirect
{
    private static bool gameEndedSent = false;
    private static float lastInstallTime = -10f;
    private const float InstallDebounce = 0.3f;

    /// <summary>Báo Luna game đã kết thúc. Gọi bao nhiêu lần cũng chỉ gửi 1 lần.</summary>
    public static void EndGameOnce()
    {
        if (gameEndedSent) return;
        gameEndedSent = true;
        LifeCycle.GameEnded();
    }

    /// <summary>Mở Store. Tự động gửi GameEnded (1 lần) trước khi install.</summary>
    public static void Install()
    {
        
        LifeCycle.GameEnded();

        Playable.InstallFullGame();
    }

    /// <summary>
    /// Có tap trong frame này không? Bắt cả Down lẫn Up: sau khi user quay về từ Store,
    /// trình duyệt thường bị "kẹt" trạng thái giữ chuột (không có touchend) nên Down không nổ nữa,
    /// lúc đó Up sẽ bắt được tap kế tiếp.
    /// </summary>
    public static bool TappedThisFrame()
    {
        if (Input.GetMouseButtonDown(0) || Input.GetMouseButtonUp(0)) return true;

        for (int i = 0; i < Input.touchCount; i++)
        {
            TouchPhase p = Input.GetTouch(i).phase;
            if (p == TouchPhase.Began || p == TouchPhase.Ended) return true;
        }
        return false;
    }
}
