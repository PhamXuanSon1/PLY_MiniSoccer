using UnityEngine;

// Dòng này giúp bạn có thể click chuột phải trong cửa sổ Project -> Create -> Game Data -> Player Card
[CreateAssetMenu(fileName = "NewPlayerCard", menuName = "Game Data/Player Card")]
public class PlayerCardData : ScriptableObject
{
    [Header("Thông tin cầu thủ")]
    public string playerName;

    [Header("Hình ảnh")]
    public Sprite playerSprite;
}
