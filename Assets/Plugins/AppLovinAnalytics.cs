using System.Runtime.InteropServices;
using UnityEngine;

// All events defined by AppLovin Playable Analytics
// Docs: https://support.applovin.com/en/growth/promoting-your-apps/welcome-to-applovin/playable-analytics-integration
public enum ALEvent
{
    LOADING, // trong awake
    LOADED, // khi start
    DISPLAYED, // khi start
    CHALLENGE_STARTED, // khi click vào màn hình lần đầu tiên
    CHALLENGE_FAILED, // chọn sai player ko phải rolnaldo
    CHALLENGE_RETRY, 
    CHALLENGE_PASS_25, // sau khi chọn 1 player (không phải sau click đầu tiên)
    CHALLENGE_PASS_50, // sau khi gọi CHALLENGE_PASS_25 vì game này chỉ chơi 1 item
    CHALLENGE_PASS_75, // sau khi gọi CHALLENGE_PASS_50 vì game này chỉ chơi 1 item
    CHALLENGE_SOLVED, // sau khi gọi CHALLENGE_PASS_75 vì game này chỉ chơi 1 item
    CTA_CLICKED, // cho button để ra stores    ENDCARD_SHOWN
}

public static class AppLovinAnalytics
{
#if UNITY_WEBGL && !UNITY_EDITOR
    [DllImport("__Internal")]
    private static extern void ALTrackEvent(string eventName);
#endif

    public static void Track(ALEvent evt)
    {
#if UNITY_WEBGL && !UNITY_EDITOR
        ALTrackEvent(evt.ToString());
#else
        // In Editor, mirror what the jslib does so you can test with Console filter
        Debug.Log("[ALPlayableEvent] " + evt.ToString());
#endif
    }
}
