using UnityEngine;
using System.Collections;
using System.Collections.Generic;
using DG.Tweening;

public class ItemSequenceManager : MonoBehaviour
{
    public static ItemSequenceManager Instance { get; private set; }

    [Header("Sequence Items")]
    [Tooltip("Kéo 4 GameObject món đồ theo thứ tự xuất hiện vào đây")]
    public List<DraggableItem> itemList = new List<DraggableItem>();

    [Header("Positions")]
    [Tooltip("Vị trí xuất phát (ví dụ: ở ngoài màn hình phía dưới)")]
    public Transform spawnPoint;

    [Tooltip("Vị trí giữa màn hình món đồ sẽ di chuyển tới")]
    public Transform targetPoint;

    [Header("Animation Settings")]
    public float moveDuration = 0.6f;
    public Ease moveEase = Ease.OutBack;
    public float delayBetweenItems = 0.3f;
    [Header("Characters")]
    [Tooltip("Kéo 4 CharacterDropZone của 4 nhân vật vào đây (hoặc để trống code tự tìm)")]
    public List<CharacterDropZone> characterList = new List<CharacterDropZone>();

    [Header("Result Objects (Win / Lose)")]
    [Tooltip("Sẽ tự động cập nhật: Thắng nếu 4 nhân vật nhận đúng đồ, Thua nếu có nhân vật nhận sai đồ")]
    public bool isWin = true;

    [Tooltip("GameObject hiển thị chữ YOU WIN")]
    public GameObject winObject;
    [Tooltip("Âm thanh phát khi hiện chữ YOU WIN")]
    public FxType winFxType = FxType.Siuu;

    [Tooltip("GameObject hiển thị chữ YOU LOSE")]
    public GameObject loseObject;
    [Tooltip("Âm thanh phát khi hiện chữ YOU LOSE")]
    public FxType loseFxType = FxType.Cry;

    [Tooltip("Thời gian chờ N giây trước khi hiện chữ Win / Lose")]
    public float resultTextDelay = 0.5f;

    [Header("End Game Objects")]
    [Tooltip("GameObject Gameplay (sẽ bị tắt khi hoàn thành 4 đồ)")]
    public GameObject gameplayObject;

    [Tooltip("GameObject Endcard (sẽ được bật lên khi hoàn thành 4 đồ)")]
    public GameObject endcardObject;

    [Header("First Drag Settings")]
    [Tooltip("GameObject sẽ bị tắt ngay khi người chơi chạm/kéo món đồ đầu tiên (VD: Bàn tay hướng dẫn)")]
    public GameObject objectToHideOnFirstDrag;

    public float endcardDelay = 0.5f;

    private int currentItemIndex = 0;
    private bool hasTrackedFirstClick = false;
    private bool hasDraggedFirstItem = false;

    public bool isItemReady { get; private set; } = false;

    public void OnFirstItemDragged()
    {
        if (!hasDraggedFirstItem)
        {
            hasDraggedFirstItem = true;
            if (objectToHideOnFirstDrag != null)
            {
                objectToHideOnFirstDrag.SetActive(false);
            }
        }
    }

    public DraggableItem GetCurrentActiveItem()
    {
        if (currentItemIndex >= 0 && currentItemIndex < itemList.Count)
        {
            return itemList[currentItemIndex];
        }
        return null;
    }

    private void Awake()
    {
        if (Instance == null) Instance = this;
        else Destroy(gameObject);
            AppLovinAnalytics.Track(ALEvent.LOADING);
    }

    [HideInInspector] public bool isFailedMode = false;

    private void Update()
    {
        if (!hasTrackedFirstClick && Input.GetMouseButtonDown(0))
        {
            hasTrackedFirstClick = true;
            TrackFirstClick();
        }

        // Nếu đã từng LOSE ➔ từ thời điểm đó click bất kỳ đâu cũng ra Store!
        if (isFailedMode && Input.GetMouseButtonDown(0))
        {
            OpenStore();
        }
    }

    public void OpenStore()
    {
        Debug.Log("CLICK IN FAILED MODE -> CHUYEN HUONG RA STORE!");
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

    private void TrackFirstClick()
    {
        // Debug.Log("FIRST CLICK DETECTED -> AppLovinAnalytics.Track(ALEvent.CHALLENGE_STARTED)");
        try
        {
            AppLovinAnalytics.Track(ALEvent.CHALLENGE_STARTED);
        }
        catch (System.Exception e)
        {
            Debug.LogWarning("AppLovinAnalytics Track Exception: " + e.Message);
        }
    }

    private void Start()
    {
        AppLovinAnalytics.Track(ALEvent.LOADED);
        AppLovinAnalytics.Track(ALEvent.DISPLAYED);
        // Ẩn tất cả món đồ ban đầu
        foreach (var item in itemList)
        {
            if (item != null)
            {
                item.gameObject.SetActive(false);
            }
        }

        // Ẩn trước cả Win / Lose text nếu có
        if (winObject != null) winObject.SetActive(false);
        if (loseObject != null) loseObject.SetActive(false);

        // Bắt đầu item đầu tiên (di chuyển từ spawnPoint tới targetPoint)
        if (itemList.Count > 0)
        {
            SpawnNextItem();
        }
    }

    // Độc giả gọi khi 1 món đồ được thả thành công vào nhân vật
    public void OnItemCompleted()
    {
        currentItemIndex++;

        // Bắn sự kiện Analytics tiến độ 25%, 50%, 75%
        TrackProgressAnalytics(currentItemIndex);

        if (currentItemIndex < itemList.Count)
        {
            StartCoroutine(SpawnNextItemWithDelay(delayBetweenItems));
        }
        else
        {
            Debug.Log("DA HOAN THANH XONG TAT CA MON DO!");
            StartCoroutine(ShowResultAndEndcardRoutine());
        }
    }

    private void TrackProgressAnalytics(int count)
    {
         
            if (count == 1)
            {
                AppLovinAnalytics.Track(ALEvent.CHALLENGE_PASS_25);
            }
            else if (count == 2)
            {
                // Debug.Log("AppLovinAnalytics -> CHALLENGE_PASS_50");
                AppLovinAnalytics.Track(ALEvent.CHALLENGE_PASS_50);
            }
            else if (count == 3)
            {
                // Debug.Log("AppLovinAnalytics -> CHALLENGE_PASS_75");
                AppLovinAnalytics.Track(ALEvent.CHALLENGE_PASS_75);
            }
    }

    private IEnumerator ShowResultAndEndcardRoutine()
    {
        // 1. Chờ N giây rồi kiểm tra điều kiện Win/Lose và hiện text tương ứng
        yield return new WaitForSeconds(resultTextDelay);

        bool allCorrect = true;
        if (characterList != null)
        {
            foreach (var zone in characterList)
            {
                if (zone != null && !zone.isCorrectItemReceived)
                {
                    allCorrect = false;
                    break;
                }
            }
        }

        isWin = allCorrect;

        if (isWin)
        {
            Debug.Log("TAT CA NHAN VAT DEU NHAN DUNG DO -> YOU WIN!");
            if (winObject != null) winObject.SetActive(true);
            if (loseObject != null) loseObject.SetActive(false);

            // Phát âm thanh WIN
            if (Ply_SoundManager.Ins != null)
            {
                Ply_SoundManager.Ins.PlayFx(winFxType);
            }

            try
            {
                Debug.Log("AppLovinAnalytics -> CHALLENGE_SOLVED");
                AppLovinAnalytics.Track(ALEvent.CHALLENGE_SOLVED);
            }
            catch (System.Exception e)
            {
                Debug.LogWarning("Analytics Track Exception: " + e.Message);
            }

            // 2. Chờ tiếp endcardDelay giây rồi ẩn Gameplay và mở Endcard
            yield return new WaitForSeconds(endcardDelay);

            if (gameplayObject != null)
            {
                gameplayObject.SetActive(false);
            }

            if (endcardObject != null)
            {
                endcardObject.SetActive(true);

                // Active lại GameObject hướng dẫn (ví dụ: TapToCossplay) khi hiện Endcard
                if (objectToHideOnFirstDrag != null)
                {
                    objectToHideOnFirstDrag.SetActive(true);
                }

                try
                {
                    Debug.Log("AppLovinAnalytics -> ENDCARD_SHOWN");
                    AppLovinAnalytics.Track(ALEvent.ENDCARD_SHOWN);
                }
                catch (System.Exception e)
                {
                    Debug.LogWarning("Analytics Track Exception: " + e.Message);
                }

                // Tự động gắn EndcardClickToStore để click bất kỳ vị trí nào cũng mở Store
                if (endcardObject.GetComponent<EndcardClickToStore>() == null)
                {
                    endcardObject.AddComponent<EndcardClickToStore>();
                }
            }
        }
        else
        {
            Debug.Log("CO NHAN VAT NHAN SAI DO -> YOU LOSE!");
            if (loseObject != null) loseObject.SetActive(true);
            if (winObject != null) winObject.SetActive(false);

            // Phát âm thanh LOSE
            if (Ply_SoundManager.Ins != null)
            {
                Ply_SoundManager.Ins.PlayFx(loseFxType);
            }

            try
            {
                Debug.Log("AppLovinAnalytics -> CHALLENGE_FAILED");
                AppLovinAnalytics.Track(ALEvent.CHALLENGE_FAILED);
            }
            catch (System.Exception e)
            {
                Debug.LogWarning("Analytics Track Exception: " + e.Message);
            }

            // NẾU LOSE:
            // 1. Chờ endcardDelay giây
            yield return new WaitForSeconds(endcardDelay);

            // 2. Ẩn chữ YOU LOSE
            if (loseObject != null) loseObject.SetActive(false);

            // 3. Reset các nhân vật về trạng thái ban đầu lúc mới vào game (trở về normalSprite và tắt collider)
            if (characterList != null)
            {
                foreach (var character in characterList)
                {
                    if (character != null)
                    {
                        character.ResetCharacter(enableCollider: false);
                    }
                }
            }

            // 4. Bật lại GameObject hướng dẫn (TapToCossplay) nếu cần
            if (objectToHideOnFirstDrag != null)
            {
                objectToHideOnFirstDrag.SetActive(true);
            }

            // 5. Reset danh sách item và load lại từ Item 1
            currentItemIndex = 0;
            foreach (var item in itemList)
            {
                if (item != null)
                {
                    item.gameObject.SetActive(false);
                }
            }
            SpawnNextItem();

            // 6. Bật chế độ isFailedMode = true -> Từ thời điểm này click bất kỳ đâu cũng ra Store!
            isFailedMode = true;
        }
    }

    private IEnumerator SpawnNextItemWithDelay(float delay)
    {
        yield return new WaitForSeconds(delay);
        SpawnNextItem();
    }

    private void SpawnNextItem()
    {
        if (currentItemIndex >= itemList.Count) return;

        DraggableItem currentItem = itemList[currentItemIndex];
        if (currentItem == null) return;

        Vector3 startPos = (spawnPoint != null) ? spawnPoint.position : new Vector3(0, -8f, 0);
        Vector3 endPos = (targetPoint != null) ? targetPoint.position : Vector3.zero;

        Collider itemCollider = currentItem.GetComponent<Collider>();

        // Tất cả các item (kể cả item 1) đều di chuyển từ spawnPoint tới targetPoint
        isItemReady = false;
        currentItem.transform.position = startPos;
        currentItem.gameObject.SetActive(true);

        if (itemCollider != null)
        {
            itemCollider.enabled = false;
        }

        currentItem.transform.DOMove(endPos, moveDuration)
            .SetEase(moveEase)
            .OnComplete(() =>
            {
                if (itemCollider != null)
                {
                    itemCollider.enabled = true;
                }
                isItemReady = true;
            });
    }
}
