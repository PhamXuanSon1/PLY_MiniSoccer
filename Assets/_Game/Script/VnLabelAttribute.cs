using UnityEngine;

/// <summary>
/// Thuộc tính tùy chỉnh để hiển thị nhãn tiếng Việt trên Inspector của Unity
/// mà không làm thay đổi tên biến (giúp giữ nguyên dữ liệu đã cài đặt).
/// </summary>
public class VnLabelAttribute : PropertyAttribute
{
    public string Label { get; }

    public VnLabelAttribute(string label)
    {
        Label = label;
    }
}
