using UnityEngine;

public class EndcardClickToStore : MonoBehaviour
{
    private void Update()
    { 
        // Khi Endcard active, bất kỳ cú click/chạm nào trên màn hình cũng chuyển hướng ra Store (kể cả khi từ store quay lại game)
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
            Luna.Unity.LifeCycle.GameEnded();
            Luna.Unity.Playable.InstallFullGame();
        }
        catch (System.Exception e)
        {
            Debug.LogWarning("Luna Playable SDK Exception: " + e.Message);
        }
    }
}
