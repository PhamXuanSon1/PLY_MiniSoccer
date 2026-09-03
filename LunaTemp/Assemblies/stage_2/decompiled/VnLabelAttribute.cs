using UnityEngine;

public class VnLabelAttribute : PropertyAttribute
{
	public string Label { get; }

	public VnLabelAttribute(string label)
	{
		Label = label;
	}
}
