using UnityEngine;

public class PlaySoundOnEnable : MonoBehaviour
{
	[Tooltip("Âm thanh mà bạn muốn phát khi Object này được bật (Active)")]
	public AudioClip soundClip;

	[Tooltip("Nguồn phát âm thanh. Nếu để trống, tự động tạo 1 cái trên Object này.")]
	public AudioSource audioSource;

	private void Awake()
	{
		if (audioSource == null)
		{
			audioSource = base.gameObject.AddComponent<AudioSource>();
			audioSource.playOnAwake = false;
		}
	}

	private void OnEnable()
	{
		if (audioSource != null && soundClip != null)
		{
			audioSource.PlayOneShot(soundClip);
		}
	}
}
