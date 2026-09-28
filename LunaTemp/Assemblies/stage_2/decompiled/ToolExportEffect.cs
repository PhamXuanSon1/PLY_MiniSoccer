using UnityEngine;

[DisallowMultipleComponent]
public sealed class ToolExportEffect : MonoBehaviour
{
	[Tooltip("Folder name to export into. Leave empty to use the GameObject name.")]
	public string exportName = "";

	[Tooltip("Multiplies every distance and speed on export. 1 suits a metric Cocos scene.")]
	public float unitScale = 1f;

	[Tooltip("Skip this effect during a batch export.")]
	public bool skip = false;

	[TextArea(2, 5)]
	[Tooltip("Free-form note carried into the generated README (e.g. where the effect is used).")]
	public string notes = "";

	public string ResolvedName => string.IsNullOrEmpty(exportName) ? base.gameObject.name : exportName;
}
