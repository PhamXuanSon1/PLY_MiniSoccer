using System;
using UnityEngine;
using UnityEngine.Events;

namespace HaalandGame
{
	[Serializable]
	public class PostWinTimedObject
	{
		[VnLabel("Mô tả / Tên")]
		public string label = "Object";

		[VnLabel("GameObject")]
		[Tooltip("Kéo GameObject cần bật/tắt vào đây (có thể để trống nếu chỉ dùng Event)")]
		public GameObject targetObject;

		[VnLabel("Thời điểm BẬT (s)")]
		[Tooltip("Mốc thời gian (giây) kể từ khi hiện Cầu thủ Thắng để BẬT object này. Nhập số âm (< 0) nếu không cần bật.")]
		public float enableDelay = 1f;

		[VnLabel("Thời điểm TẮT (s)")]
		[Tooltip("Mốc thời gian (giây) kể từ khi hiện Cầu thủ Thắng để TẮT object này. Nhập số <= 0 nếu muốn giữ nguyên (không tắt).")]
		public float disableDelay = -1f;

		[VnLabel("Âm thanh khi BẬT (AudioClip)")]
		[Tooltip("Kéo file âm thanh (.mp3, .wav) vào đây để phát đúng mốc thời gian BẬT (để trống nếu không cần)")]
		public AudioClip soundClip;

		[VnLabel("Sự kiện khi BẬT (Event)")]
		public UnityEvent onEnabled;

		[VnLabel("Sự kiện khi TẮT (Event)")]
		public UnityEvent onDisabled;
	}
}
