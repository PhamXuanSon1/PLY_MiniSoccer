using System;
using UnityEngine;

[Serializable]
public struct ItemSpriteMapping
{
	public string itemID;

	[Tooltip("Ảnh nhân vật hiển thị khi cầm Item này")]
	public Sprite spriteWithItem;

	[Tooltip("Loại âm thanh FxType trong Ply_SoundManager")]
	public FxType fxType;
}
