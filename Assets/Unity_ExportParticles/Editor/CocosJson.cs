// -----------------------------------------------------------------------------
//  CocosJson.cs
//  Minimal ordered-JSON writer used by the Unity -> Cocos Creator particle
//  exporter. Kept dependency free so the tool works on any Unity 2019+ project.
// -----------------------------------------------------------------------------
using System;
using System.Collections;
using System.Collections.Generic;
using System.Globalization;
using System.Text;

namespace CocosParticleExport
{
    /// <summary>JSON object that preserves insertion order (stable diffs).</summary>
    public sealed class JObj : IEnumerable
    {
        readonly List<KeyValuePair<string, object>> _items = new List<KeyValuePair<string, object>>();

        public JObj Set(string key, object value)
        {
            _items.Add(new KeyValuePair<string, object>(key, value));
            return this;
        }

        // Enables collection-initializer syntax: new JObj { { "a", 1 } }
        public void Add(string key, object value) { Set(key, value); }

        public IList<KeyValuePair<string, object>> Items { get { return _items; } }
        public IEnumerator GetEnumerator() { return _items.GetEnumerator(); }
    }

    /// <summary>JSON array.</summary>
    public sealed class JArr : IEnumerable
    {
        readonly List<object> _items = new List<object>();

        public JArr Add(object value) { _items.Add(value); return this; }
        public int Count { get { return _items.Count; } }
        public IList<object> Items { get { return _items; } }
        public IEnumerator GetEnumerator() { return _items.GetEnumerator(); }

        public static JArr Of(params object[] values)
        {
            var a = new JArr();
            for (int i = 0; i < values.Length; i++) a.Add(values[i]);
            return a;
        }
    }

    public static class CocosJson
    {
        /// <summary>Serialise a JObj/JArr tree to indented JSON text.</summary>
        public static string Write(object root, bool pretty = true)
        {
            var sb = new StringBuilder(64 * 1024);
            WriteValue(sb, root, pretty, 0);
            sb.Append('\n');
            return sb.ToString();
        }

        static void Indent(StringBuilder sb, int depth)
        {
            for (int i = 0; i < depth; i++) sb.Append("  ");
        }

        static void WriteValue(StringBuilder sb, object v, bool pretty, int depth)
        {
            if (v == null) { sb.Append("null"); return; }

            var obj = v as JObj;
            if (obj != null) { WriteObject(sb, obj, pretty, depth); return; }

            var arr = v as JArr;
            if (arr != null) { WriteArray(sb, arr, pretty, depth); return; }

            var s = v as string;
            if (s != null) { WriteString(sb, s); return; }

            if (v is bool) { sb.Append(((bool)v) ? "true" : "false"); return; }

            if (v is float) { WriteNumber(sb, (float)v); return; }
            if (v is double) { WriteNumber(sb, (double)v); return; }
            if (v is int) { sb.Append(((int)v).ToString(CultureInfo.InvariantCulture)); return; }
            if (v is long) { sb.Append(((long)v).ToString(CultureInfo.InvariantCulture)); return; }
            if (v is Enum) { sb.Append(Convert.ToInt32(v).ToString(CultureInfo.InvariantCulture)); return; }

            WriteString(sb, v.ToString());
        }

        static void WriteNumber(StringBuilder sb, double d)
        {
            if (double.IsNaN(d)) { sb.Append('0'); return; }
            // Unity uses +/-Infinity tangents for stepped keys; JSON has no such
            // literal, so clamp to a large finite value the importer recognises.
            if (double.IsPositiveInfinity(d)) { sb.Append("1e30"); return; }
            if (double.IsNegativeInfinity(d)) { sb.Append("-1e30"); return; }

            // Trim float noise: 6 decimals is well below particle visual precision.
            double r = Math.Round(d, 6);
            if (r == 0d) r = 0d; // kill "-0"
            string text = r.ToString("R", CultureInfo.InvariantCulture);
            if (text.IndexOf('E') >= 0 || text.IndexOf('e') >= 0)
                text = r.ToString("0.######", CultureInfo.InvariantCulture);
            sb.Append(text);
        }

        static void WriteString(StringBuilder sb, string s)
        {
            sb.Append('"');
            for (int i = 0; i < s.Length; i++)
            {
                char c = s[i];
                switch (c)
                {
                    case '"': sb.Append("\\\""); break;
                    case '\\': sb.Append("\\\\"); break;
                    case '\n': sb.Append("\\n"); break;
                    case '\r': sb.Append("\\r"); break;
                    case '\t': sb.Append("\\t"); break;
                    case '\b': sb.Append("\\b"); break;
                    case '\f': sb.Append("\\f"); break;
                    default:
                        if (c < 0x20 || c > 0x7E) sb.Append("\\u").Append(((int)c).ToString("x4"));
                        else sb.Append(c);
                        break;
                }
            }
            sb.Append('"');
        }

        static void WriteObject(StringBuilder sb, JObj o, bool pretty, int depth)
        {
            if (o.Items.Count == 0) { sb.Append("{}"); return; }
            sb.Append('{');
            for (int i = 0; i < o.Items.Count; i++)
            {
                if (i > 0) sb.Append(',');
                if (pretty) { sb.Append('\n'); Indent(sb, depth + 1); }
                WriteString(sb, o.Items[i].Key);
                sb.Append(pretty ? ": " : ":");
                WriteValue(sb, o.Items[i].Value, pretty, depth + 1);
            }
            if (pretty) { sb.Append('\n'); Indent(sb, depth); }
            sb.Append('}');
        }

        static void WriteArray(StringBuilder sb, JArr a, bool pretty, int depth)
        {
            if (a.Count == 0) { sb.Append("[]"); return; }

            // Short numeric arrays (vectors, colors) stay on one line for readability.
            bool scalarOnly = true;
            for (int i = 0; i < a.Count; i++)
            {
                object it = a.Items[i];
                if (it is JObj || it is JArr) { scalarOnly = false; break; }
            }

            if (scalarOnly && a.Count <= 8)
            {
                sb.Append('[');
                for (int i = 0; i < a.Count; i++)
                {
                    if (i > 0) sb.Append(", ");
                    WriteValue(sb, a.Items[i], false, depth);
                }
                sb.Append(']');
                return;
            }

            sb.Append('[');
            for (int i = 0; i < a.Count; i++)
            {
                if (i > 0) sb.Append(',');
                if (pretty) { sb.Append('\n'); Indent(sb, depth + 1); }
                WriteValue(sb, a.Items[i], pretty, depth + 1);
            }
            if (pretty) { sb.Append('\n'); Indent(sb, depth); }
            sb.Append(']');
        }
    }
}
