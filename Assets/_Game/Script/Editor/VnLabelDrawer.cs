using UnityEditor;
using UnityEngine;

[CustomPropertyDrawer(typeof(VnLabelAttribute))]
public class VnLabelDrawer : PropertyDrawer
{
    public override void OnGUI(Rect position, SerializedProperty property, GUIContent label)
    {
        VnLabelAttribute vn = (VnLabelAttribute)attribute;
        label.text = vn.Label;
        EditorGUI.PropertyField(position, property, label, true);
    }

    public override float GetPropertyHeight(SerializedProperty property, GUIContent label)
    {
        return EditorGUI.GetPropertyHeight(property, label, true);
    }
}
