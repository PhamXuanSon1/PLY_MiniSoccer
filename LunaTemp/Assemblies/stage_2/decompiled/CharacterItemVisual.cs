using System;
using UnityEngine;

[Serializable]
public class CharacterItemVisual
{
	[Tooltip("ID của món đồ (phải khớp DraggableItem.itemID)")]
	public string itemID;

	[Tooltip("Node con hiển thị nhân vật khi cầm món đồ này")]
	public GameObject visual;

	[Tooltip("Âm thanh phát khi nhân vật nhận món đồ này")]
	public FxType fxType = FxType.Siuu;
}
