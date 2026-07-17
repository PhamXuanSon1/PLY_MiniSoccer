using UnityEngine;

public class PlaySoundOnEnable : MonoBehaviour
{
    [Tooltip("Âm thanh mà bạn muốn phát khi Object này được bật (Active)")]
    public AudioClip soundClip;

    [Tooltip("Nguồn phát âm thanh. Nếu để trống, tự động tạo 1 cái trên Object này.")]
    public AudioSource audioSource;

    private void Awake()
    {
        // Nếu bạn không kéo AudioSource nào vào, tự động thêm Component AudioSource
        if (audioSource == null)
        {
            audioSource = gameObject.AddComponent<AudioSource>();
            audioSource.playOnAwake = false; // Tắt tính năng tự phát mặc định của Unity
        }
    }

    // Hàm OnEnable tự động được gọi mỗi khi GameObject này được bật lên (SetActive(true))
    private void OnEnable()
    {
        if (audioSource != null && soundClip != null)
        {
            audioSource.PlayOneShot(soundClip);
        }
    }
}
