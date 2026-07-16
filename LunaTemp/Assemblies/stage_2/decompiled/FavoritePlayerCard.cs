using UnityEngine;

[CreateAssetMenu(fileName = "New Favorite Player", menuName = "Data/Favorite Player Card")]
public class FavoritePlayerCard : ScriptableObject
{
	[Tooltip("Tên cầu thủ (có thể để trống nếu không cần hiện chữ)")]
	public string playerName;

	[Tooltip("Ảnh bán thân (Dùng để hiện 2 bên lúc chọn lựa)")]
	public Sprite halfBodySprite;

	[Tooltip("Ảnh toàn thân (Dùng để bung ra lúc ăn mừng Endcard)")]
	public Sprite fullBodySprite;

	[Tooltip("Âm thanh đọc tên cầu thủ này")]
	public AudioClip nameAudio;
}
