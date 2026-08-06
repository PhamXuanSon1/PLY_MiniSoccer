using UnityEngine;

[CreateAssetMenu(fileName = "NewPlayerCard", menuName = "Game Data/Player Card")]
public class PlayerCardData : ScriptableObject
{
	[Header("Thông tin cầu thủ")]
	public string playerName;

	[Header("Hình ảnh")]
	public Sprite playerSprite;
}
