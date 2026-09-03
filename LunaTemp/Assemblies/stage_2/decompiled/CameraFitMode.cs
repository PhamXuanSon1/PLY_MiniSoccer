using UnityEngine;

public enum CameraFitMode
{
	[InspectorName("1. Theo Màn hình chuẩn (Reference Screen - Khuyên dùng)")]
	ReferenceScreen,
	[InspectorName("2. Theo Vùng đối tượng (Target Area Bounds)")]
	TargetAreaBounds
}
