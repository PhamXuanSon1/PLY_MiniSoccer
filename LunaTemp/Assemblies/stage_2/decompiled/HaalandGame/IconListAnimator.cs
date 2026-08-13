using System.Collections.Generic;
using DG.Tweening;
using UnityEngine;

namespace HaalandGame
{
	public class IconListAnimator : MonoBehaviour
	{
		[Header("=== DOTWEEN ICON LOOP PULSE ===")]
		[Tooltip("Danh sách 4 icon (RoIcon, ViniIcon, MessiIcon, MbappeIcon). Để trống sẽ tự động lấy các transform con.")]
		public RectTransform[] iconTransforms;

		[Header("=== TÙY CHỈNH KÍCH THƯỚC & THỜI GIAN ===")]
		[Tooltip("Độ trễ chờ sau khi Icon List active rồi mới bắt đầu nẩy (mặc định 1.0s)")]
		public float initialDelay = 1f;

		[Tooltip("Tỷ lệ phóng to khi nhô lên (ví dụ 1.25 là phóng to 125%)")]
		public float targetScaleMult = 1.25f;

		[Tooltip("Thời gian phóng to lên / thu nhỏ xuống của mỗi icon (giây)")]
		public float pulseDuration = 0.22f;

		[Tooltip("Khoảng nghỉ giữa icon này và icon tiếp theo (giây)")]
		public float delayBetweenIcons = 0.08f;

		[Tooltip("Khoảng nghỉ sau khi hoàn thành cả 4 icon trước khi lặp lại vòng mới (giây)")]
		public float delayBetweenLoops = 0.4f;

		private Sequence loopSequence;

		private void Awake()
		{
			AutoAssignIconsIfEmpty();
		}

		private void OnEnable()
		{
			TriggerStartWithDelay();
		}

		private void OnDisable()
		{
			StopAnimation();
		}

		private void OnDestroy()
		{
			StopAnimation();
		}

		public void TriggerStartWithDelay()
		{
			StopAnimation();
			if (initialDelay > 0f)
			{
				Invoke("PlayLoopPulseAnimation", initialDelay);
			}
			else
			{
				PlayLoopPulseAnimation();
			}
		}

		public void AutoAssignIconsIfEmpty()
		{
			if (iconTransforms != null && iconTransforms.Length != 0)
			{
				return;
			}
			List<RectTransform> list = new List<RectTransform>();
			foreach (Transform child in base.transform)
			{
				if (child is RectTransform rt)
				{
					list.Add(rt);
				}
				else if (child != null)
				{
					RectTransform childRt = child.GetComponent<RectTransform>();
					if (childRt != null)
					{
						list.Add(childRt);
					}
				}
			}
			iconTransforms = list.ToArray();
		}

		public void PlayLoopPulseAnimation()
		{
			AutoAssignIconsIfEmpty();
			StopAnimation();
			if (iconTransforms == null || iconTransforms.Length == 0)
			{
				return;
			}
			RectTransform[] array = iconTransforms;
			foreach (RectTransform icon in array)
			{
				if (icon != null)
				{
					icon.DOKill();
					icon.localScale = Vector3.one;
				}
			}
			loopSequence = DOTween.Sequence();
			for (int i = 0; i < iconTransforms.Length; i++)
			{
				RectTransform icon2 = iconTransforms[i];
				if (!(icon2 == null))
				{
					Vector3 originalScale = Vector3.one;
					Vector3 pulsedScale = originalScale * targetScaleMult;
					Sequence pulseSeq = DOTween.Sequence();
					pulseSeq.Append(icon2.DOScale(pulsedScale, pulseDuration).SetEase(Ease.OutQuad));
					pulseSeq.Append(icon2.DOScale(originalScale, pulseDuration).SetEase(Ease.InQuad));
					loopSequence.Append(pulseSeq);
					if (delayBetweenIcons > 0f)
					{
						loopSequence.AppendInterval(delayBetweenIcons);
					}
				}
			}
			if (delayBetweenLoops > 0f)
			{
				loopSequence.AppendInterval(delayBetweenLoops);
			}
			loopSequence.SetLoops(-1, LoopType.Restart);
		}

		public void StopAnimation()
		{
			CancelInvoke();
			if (loopSequence != null)
			{
				loopSequence.Kill();
				loopSequence = null;
			}
			if (iconTransforms == null)
			{
				return;
			}
			RectTransform[] array = iconTransforms;
			foreach (RectTransform icon in array)
			{
				if (icon != null)
				{
					icon.DOKill();
					icon.localScale = Vector3.one;
				}
			}
		}

		public void PlayGrowAnimation()
		{
			TriggerStartWithDelay();
		}
	}
}
