using UnityEngine;
using System.Collections.Generic;

[System.Serializable]
public struct ItemSpriteMapping
{
    public string itemID;
    [Tooltip("Ảnh nhân vật hiển thị khi cầm Item này")]
    public Sprite spriteWithItem;
    [Tooltip("Loại âm thanh FxType trong Ply_SoundManager")]
    public FxType fxType;
}

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

    public bool IsCorrectItem(string itemID)
    {
        return !string.IsNullOrEmpty(correctItemID) && string.Equals(correctItemID, itemID, System.StringComparison.OrdinalIgnoreCase);
    }
    
    [Header("Item Interactions")]
    [Tooltip("Danh sách các Item và ảnh/âm thanh tương ứng khi nhân vật cầm")]
    public List<ItemSpriteMapping> itemInteractions = new List<ItemSpriteMapping>();

    // Hàm lấy ảnh tương ứng với item được thả vào
    public Sprite GetSpriteForItem(string itemID)
    {
        foreach (var mapping in itemInteractions)
        {
            if (string.Equals(mapping.itemID, itemID, System.StringComparison.OrdinalIgnoreCase))
            {
                return mapping.spriteWithItem;
            }
        }
        return null;
    }

    // Hàm lấy FxType âm thanh tương ứng với item được thả vào
    public FxType GetFxTypeForItem(string itemID)
    {
        foreach (var mapping in itemInteractions)
        {
            if (string.Equals(mapping.itemID, itemID, System.StringComparison.OrdinalIgnoreCase))
            {
                return mapping.fxType;
            }
        }
        return characterSound;
    }
}
