// -----------------------------------------------------------------------------
//  CocosMaterialAnalyzer.cs
//  Reduces an arbitrary Unity particle material to the handful of facts the Cocos
//  builtin-particle effect can actually reproduce: blend equation, cull/depth
//  state, main texture, tiling/offset and tint. The Cocos importer turns this
//  description into a real .mtl asset - no runtime script involved.
// -----------------------------------------------------------------------------
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Rendering;

namespace CocosParticleExport
{
    /// <summary>Blend presets understood by the Cocos side of the tool.</summary>
    public enum CocosBlend
    {
        Additive,           // SRC_ALPHA, ONE
        AdditivePremul,     // ONE, ONE
        AlphaBlend,         // SRC_ALPHA, ONE_MINUS_SRC_ALPHA
        Premultiplied,      // ONE, ONE_MINUS_SRC_ALPHA
        Multiply,           // DST_COLOR, ZERO
        Subtractive,        // SRC_ALPHA, ONE  with reverse-subtract equation
        Opaque              // blending off
    }

    public sealed class CocosMaterialDesc
    {
        public string name;
        public string sourceShader;
        public CocosBlend blend = CocosBlend.AlphaBlend;
        public string mainTexture;          // file name inside the Textures folder
        public Vector4 tilingOffset = new Vector4(1f, 1f, 0f, 0f);
        public Color tint = Color.white;    // folded into startColor as well
        public bool depthWrite;
        public bool depthTest = true;
        public int cullMode;                // 0 = none, 1 = front, 2 = back (cc.gfx.CullMode)
        public bool alphaTest;
        public float alphaCutoff = 0.5f;
        public bool softParticles;
        public string key;                  // dedupe key, one .mtl per distinct key

        public JObj ToJson()
        {
            return new JObj()
                .Set("name", name)
                .Set("key", key)
                .Set("sourceShader", sourceShader)
                .Set("blend", blend.ToString())
                .Set("mainTexture", mainTexture)
                .Set("tilingOffset", JArr.Of(tilingOffset.x, tilingOffset.y, tilingOffset.z, tilingOffset.w))
                .Set("tintColor", CocosCurveBaker.Col(tint))
                .Set("depthWrite", depthWrite)
                .Set("depthTest", depthTest)
                .Set("cullMode", cullMode)
                .Set("alphaTest", alphaTest)
                .Set("alphaCutoff", alphaCutoff)
                .Set("softParticles", softParticles);
        }
    }

    public static class CocosMaterialAnalyzer
    {
        /// <summary>
        /// Inspect a Unity material. <paramref name="registerTexture"/> is called with
        /// the main texture and returns the file name it was written out as.
        /// </summary>
        public static CocosMaterialDesc Analyze(Material mat, System.Func<Texture, string> registerTexture,
                                                List<string> warnings)
        {
            var d = new CocosMaterialDesc();

            if (mat == null)
            {
                d.name = "particle_default";
                d.sourceShader = "<none>";
                d.key = "default|AlphaBlend||1,1,0,0|255,255,255,255|0|2|0";
                warnings.Add("A renderer had no material; a plain alpha-blended material was emitted instead.");
                return d;
            }

            d.name = SanitizeName(mat.name);
            Shader sh = mat.shader;
            d.sourceShader = sh != null ? sh.name : "<missing>";

            // --- main texture -----------------------------------------------------
            Texture tex = FindMainTexture(mat);
            if (tex != null)
            {
                d.mainTexture = registerTexture(tex);
                string texProp = mat.HasProperty("_MainTex") && mat.GetTexture("_MainTex") == tex ? "_MainTex" : "_BaseMap";
                if (mat.HasProperty(texProp))
                {
                    Vector2 s = mat.GetTextureScale(texProp);
                    Vector2 o = mat.GetTextureOffset(texProp);
                    d.tilingOffset = new Vector4(s.x, s.y, o.x, o.y);
                }
            }
            else
            {
                warnings.Add("Material '" + mat.name + "' has no main texture; particles will render untextured.");
            }

            // --- tint -------------------------------------------------------------
            // Legacy particle shaders modulate by _TintColor, URP/Standard by _BaseColor
            // or _Color. Folding it here keeps the Cocos result at the same brightness.
            foreach (string p in new[] { "_TintColor", "_BaseColor", "_Color" })
            {
                if (mat.HasProperty(p)) { d.tint = mat.GetColor(p); break; }
            }
            // Unity's legacy additive/alpha-blended particle shaders multiply the tint
            // by 2 in the shader itself; mirror that so brightness matches.
            if (d.sourceShader.Contains("Particles/Additive") ||
                d.sourceShader.Contains("Particles/Alpha Blended") ||
                d.sourceShader.Contains("Particles/VertexLit") ||
                d.sourceShader.Contains("Particles/Multiply"))
            {
                d.tint = new Color(Mathf.Min(d.tint.r * 2f, 1f), Mathf.Min(d.tint.g * 2f, 1f),
                                   Mathf.Min(d.tint.b * 2f, 1f), Mathf.Min(d.tint.a * 2f, 1f));
            }

            // --- render state -----------------------------------------------------
            d.blend = DetectBlend(mat, d.sourceShader);
            d.depthWrite = mat.HasProperty("_ZWrite") ? mat.GetFloat("_ZWrite") > 0.5f : false;
            d.depthTest = mat.HasProperty("_ZTest") ? (CompareFunction)(int)mat.GetFloat("_ZTest") != CompareFunction.Always : true;

            if (mat.HasProperty("_Cull"))
            {
                // Unity CullMode: Off=0 Front=1 Back=2 -> cc.gfx.CullMode: NONE=0 FRONT=1 BACK=2
                d.cullMode = Mathf.Clamp((int)mat.GetFloat("_Cull"), 0, 2);
            }
            else
            {
                d.cullMode = 0; // particle quads are double sided by default
            }

            d.alphaTest = mat.IsKeywordEnabled("_ALPHATEST_ON") ||
                          d.sourceShader.Contains("Cutout") ||
                          (mat.HasProperty("_Mode") && Mathf.Approximately(mat.GetFloat("_Mode"), 1f));
            if (mat.HasProperty("_Cutoff")) d.alphaCutoff = mat.GetFloat("_Cutoff");
            d.softParticles = mat.IsKeywordEnabled("_SOFTPARTICLES_ON") || mat.IsKeywordEnabled("SOFTPARTICLES_ON");

            if (d.softParticles)
                warnings.Add("Material '" + mat.name + "' uses Soft Particles, which builtin-particle does not implement; the edge fade will be missing.");

            // Distortion / grab-pass style shaders have no Cocos equivalent at all.
            if (d.sourceShader.Contains("Distort") || d.sourceShader.Contains("Refract") || d.sourceShader.Contains("Grab"))
                warnings.Add("Material '" + mat.name + "' looks like a distortion/refraction shader; Cocos will render it as a plain textured quad.");

            d.key = string.Join("|", new[]
            {
                d.name, d.blend.ToString(), d.mainTexture ?? "",
                d.tilingOffset.ToString("F3"), d.tint.ToString("F3"),
                d.depthWrite ? "1" : "0", d.cullMode.ToString(),
                d.alphaTest ? d.alphaCutoff.ToString("F2") : "0"
            });
            return d;
        }

        static Texture FindMainTexture(Material mat)
        {
            foreach (string p in new[] { "_MainTex", "_BaseMap", "_BaseTexture", "_MainTexture", "_Texture", "_Albedo" })
            {
                if (mat.HasProperty(p))
                {
                    Texture t = mat.GetTexture(p);
                    if (t != null) return t;
                }
            }
            // Fall back to whatever texture slot the shader exposes first.
            Shader sh = mat.shader;
            if (sh == null) return null;
            int count = UnityEditor.ShaderUtil.GetPropertyCount(sh);
            for (int i = 0; i < count; i++)
            {
                if (UnityEditor.ShaderUtil.GetPropertyType(sh, i) != UnityEditor.ShaderUtil.ShaderPropertyType.TexEnv) continue;
                Texture t = mat.GetTexture(UnityEditor.ShaderUtil.GetPropertyName(sh, i));
                if (t != null) return t;
            }
            return null;
        }

        static CocosBlend DetectBlend(Material mat, string shaderName)
        {
            // 1. Explicit blend factors win - they describe exactly what the GPU does.
            if (mat.HasProperty("_SrcBlend") && mat.HasProperty("_DstBlend"))
            {
                var src = (BlendMode)(int)mat.GetFloat("_SrcBlend");
                var dst = (BlendMode)(int)mat.GetFloat("_DstBlend");
                CocosBlend? mapped = FromFactors(src, dst);
                if (mapped.HasValue)
                {
                    // Particles/Standard Unlit encodes subtractive as a blend op, not factors.
                    if (mat.HasProperty("_BlendOp") && (BlendOp)(int)mat.GetFloat("_BlendOp") == BlendOp.ReverseSubtract)
                        return CocosBlend.Subtractive;
                    return mapped.Value;
                }
            }

            // 2. Particles/Standard Unlit + Surface exposes a _Mode enum.
            if (mat.HasProperty("_Mode"))
            {
                switch (Mathf.RoundToInt(mat.GetFloat("_Mode")))
                {
                    case 0: return CocosBlend.Opaque;
                    case 1: return CocosBlend.AlphaBlend;   // cutout, handled via alphaTest
                    case 2: return CocosBlend.AlphaBlend;   // fade
                    case 3: return CocosBlend.Premultiplied;
                    case 4: return CocosBlend.Additive;
                    case 5: return CocosBlend.Subtractive;
                    case 6: return CocosBlend.Multiply;
                }
            }

            // 3. Fall back to reading the shader name.
            string n = shaderName.ToLowerInvariant();
            if (n.Contains("premultiply")) return CocosBlend.Premultiplied;
            if (n.Contains("additive") || n.Contains("~additive") || n.Contains("add")) return CocosBlend.Additive;
            if (n.Contains("multiply") || n.Contains("modulate")) return CocosBlend.Multiply;
            if (n.Contains("subtract")) return CocosBlend.Subtractive;
            if (n.Contains("alpha blend") || n.Contains("transparent") || n.Contains("particle")) return CocosBlend.AlphaBlend;

            return mat.renderQueue >= 3000 ? CocosBlend.AlphaBlend : CocosBlend.Opaque;
        }

        static CocosBlend? FromFactors(BlendMode src, BlendMode dst)
        {
            if (src == BlendMode.One && dst == BlendMode.Zero) return CocosBlend.Opaque;
            if (src == BlendMode.SrcAlpha && dst == BlendMode.One) return CocosBlend.Additive;
            if (src == BlendMode.One && dst == BlendMode.One) return CocosBlend.AdditivePremul;
            if (src == BlendMode.SrcAlpha && dst == BlendMode.OneMinusSrcAlpha) return CocosBlend.AlphaBlend;
            if (src == BlendMode.One && dst == BlendMode.OneMinusSrcAlpha) return CocosBlend.Premultiplied;
            if (src == BlendMode.DstColor && dst == BlendMode.Zero) return CocosBlend.Multiply;
            if (src == BlendMode.Zero && dst == BlendMode.SrcColor) return CocosBlend.Multiply;
            return null;
        }

        public static string SanitizeName(string s)
        {
            if (string.IsNullOrEmpty(s)) return "unnamed";
            var sb = new System.Text.StringBuilder(s.Length);
            foreach (char c in s)
                sb.Append(char.IsLetterOrDigit(c) || c == '_' || c == '-' ? c : '_');
            return sb.ToString();
        }
    }
}
