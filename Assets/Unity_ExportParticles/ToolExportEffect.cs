using UnityEngine;

/// <summary>
/// Optional marker for effects that should ship to Cocos Creator.
///
/// Drop this on the root of a particle effect and it shows up in
/// <c>Tools ▸ Cocos Particle ▸ Export Window</c> via "Collect Tagged", so a whole
/// library can be re-exported without hand-picking objects every time.
/// Purely metadata — it does nothing at runtime and is never exported.
/// </summary>
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

    public string ResolvedName
    {
        get { return string.IsNullOrEmpty(exportName) ? gameObject.name : exportName; }
    }
}
