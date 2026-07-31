using System;
using System.Collections.Generic;
using UnityEngine;

[CreateAssetMenu(fileName = "CharacterItemData", menuName = "ScriptableObjects/CharacterItemData", order = 1)]
public class CharacterItemData : ScriptableObject
{
	[Header("Character Information")]
	public string characterName;

	public Sprite normalSprite;

	[Tooltip("Âm thanh riêng mặc định của nhân vật (Angry, Cry, Hehe, Huh, RoarTiger, Siuu...)")]
	public FxType characterSound = FxType.Siuu;

	[Header("Win Condition")]
	[Tooltip("ID của món đồ ĐÚNG dành cho nhân vật này (VD: WC, Euro, Bong, Steak)")]
	public string correctItemID;

	[Header("Item Interactions")]
	[Tooltip("Danh sách các Item và ảnh/âm thanh tương ứng khi nhân vật cầm")]
	public List<ItemSpriteMapping> itemInteractions = new List<ItemSpriteMapping>();

	public bool IsCorrectItem(string itemID)
	{
		return !string.IsNullOrEmpty(correctItemID) && string.Equals(correctItemID, itemID, StringComparison.OrdinalIgnoreCase);
	}

	public Sprite GetSpriteForItem(string itemID)
	{
		foreach (ItemSpriteMapping mapping in itemInteractions)
		{
			if (string.Equals(mapping.itemID, itemID, StringComparison.OrdinalIgnoreCase))
			{
				return mapping.spriteWithItem;
			}
		}
		return null;
	}

	public FxType GetFxTypeForItem(string itemID)
	{
		foreach (ItemSpriteMapping mapping in itemInteractions)
		{
			if (string.Equals(mapping.itemID, itemID, StringComparison.OrdinalIgnoreCase))
			{
				return mapping.fxType;
			}
		}
		return characterSound;
	}
}
