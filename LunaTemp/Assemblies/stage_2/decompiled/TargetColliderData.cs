using System;
using UnityEngine;

[Serializable]
public class TargetColliderData
{
	[Tooltip("Collider 2D của vùng mục tiêu")]
	public Collider2D collider;

	[Tooltip("Sprite hiển thị cho nhân vật khi con kéo đi vào vùng này cuối cùng")]
	public Sprite resultSprite;

	[Tooltip("Có phải vùng WIN hay không? (Tích chọn = WIN, Bỏ tích = LOSS)")]
	public bool isWin;
}
