using UnityEngine;

public class ItemMovementController : MonoBehaviour
{
    [Header("Settings")]
    [Tooltip("Select 'Item' Layer here in the Inspector")]
    public LayerMask itemLayer; 
    
    private Transform selectedItem;
    private Vector3 offset;
    private Camera mainCamera;

    void Start()
    {
        mainCamera = Camera.main; 
    }

    void Update()
    {
        HandleItemMovement();
    }

    private void HandleItemMovement()
    {
        Vector3 mousePosition = mainCamera.ScreenToWorldPoint(Input.mousePosition);
        mousePosition.z = 0f; 

        if (Input.GetMouseButtonDown(0))
        {
            RaycastHit2D hit = Physics2D.Raycast(mousePosition, Vector2.zero, Mathf.Infinity, itemLayer);

            if (hit.collider != null && hit.collider is BoxCollider2D)
            {
                selectedItem = hit.transform;
                offset = selectedItem.position - mousePosition; 
            }
        }

        if (Input.GetMouseButton(0) && selectedItem != null)
        {
            selectedItem.position = mousePosition + offset;
        }

        if (Input.GetMouseButtonUp(0) && selectedItem != null)
        {
            selectedItem = null;
        }
    }
}
