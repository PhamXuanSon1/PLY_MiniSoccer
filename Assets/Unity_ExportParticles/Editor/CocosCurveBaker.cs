// -----------------------------------------------------------------------------
//  CocosCurveBaker.cs
//  Converts Unity ParticleSystem.MinMaxCurve / MinMaxGradient into the JSON
//  shape the Cocos importer feeds straight into cc.CurveRange / cc.GradientRange.
//
//  Cocos and Unity share the same mode enums, so the numbers below map 1:1:
//     CurveRange.Mode    : Constant=0 Curve=1 TwoCurves=2 TwoConstants=3
//     GradientRange.Mode : Color=0 Gradient=1 TwoColors=2 TwoGradients=3 Random=4
//  The only real work is translating AnimationCurve keyframes (tangents, weights,
//  stepped keys) into cc.RealKeyframeValue, which the importer rebuilds exactly.
// -----------------------------------------------------------------------------
using UnityEngine;

namespace CocosParticleExport
{
    public static class CocosCurveBaker
    {
        // ---------------------------------------------------------------- curves

        /// <param name="scale">Extra multiplier folded into the curve (unit
        /// conversion / handedness flip). Applied to constants and multipliers so
        /// the curve shape itself stays untouched.</param>
        public static JObj Curve(ParticleSystem.MinMaxCurve c, float scale = 1f)
        {
            var o = new JObj();
            o.Set("mode", (int)c.mode);

            switch (c.mode)
            {
                case ParticleSystemCurveMode.Constant:
                    o.Set("constant", c.constant * scale);
                    o.Set("multiplier", 1f);
                    break;

                case ParticleSystemCurveMode.TwoConstants:
                    // Cocos stores the pair as constantMin/constantMax; a negative
                    // scale would invert the ordering, so re-sort after scaling.
                    float a = c.constantMin * scale, b = c.constantMax * scale;
                    o.Set("constantMin", Mathf.Min(a, b));
                    o.Set("constantMax", Mathf.Max(a, b));
                    o.Set("multiplier", 1f);
                    break;

                case ParticleSystemCurveMode.Curve:
                    o.Set("multiplier", c.curveMultiplier * scale);
                    o.Set("curve", Keys(c.curve));
                    break;

                case ParticleSystemCurveMode.TwoCurves:
                    o.Set("multiplier", c.curveMultiplier * scale);
                    o.Set("curveMin", Keys(c.curveMin));
                    o.Set("curveMax", Keys(c.curveMax));
                    break;
            }
            return o;
        }

        /// <summary>Constant curve helper (used when compensating Unity-only modules).</summary>
        public static JObj ConstantCurve(float value)
        {
            return new JObj().Set("mode", 0).Set("constant", value).Set("multiplier", 1f);
        }

        /// <summary>Builds a Curve-mode CurveRange from values sampled evenly over [0,1].</summary>
        public static JObj CurveFromSamples(float[] samples, float multiplier)
        {
            var keys = new JArr();
            int n = samples.Length;
            for (int i = 0; i < n; i++)
            {
                float t = n == 1 ? 0f : (float)i / (n - 1);
                // Central-difference tangent keeps the resampled curve smooth.
                float tan = 0f;
                if (n > 1)
                {
                    int i0 = Mathf.Max(0, i - 1), i1 = Mathf.Min(n - 1, i + 1);
                    float dt = (i1 - i0) / (float)(n - 1);
                    if (dt > 1e-6f) tan = (samples[i1] - samples[i0]) / dt;
                }
                keys.Add(Key(t, samples[i], tan, tan, 1f / 3f, 1f / 3f, "none", false));
            }
            return new JObj().Set("mode", 1).Set("multiplier", multiplier)
                             .Set("curve", new JObj().Set("keys", keys));
        }

        static JObj Keys(AnimationCurve curve)
        {
            var keys = new JArr();
            if (curve == null || curve.length == 0)
            {
                keys.Add(Key(0f, 0f, 0f, 0f, 1f / 3f, 1f / 3f, "none", false));
            }
            else
            {
                for (int i = 0; i < curve.length; i++)
                {
                    Keyframe k = curve[i];
                    string weighted;
                    switch (k.weightedMode)
                    {
                        case WeightedMode.In: weighted = "in"; break;
                        case WeightedMode.Out: weighted = "out"; break;
                        case WeightedMode.Both: weighted = "both"; break;
                        default: weighted = "none"; break;
                    }
                    // Unity marks a stepped key with an infinite tangent; the importer
                    // turns that into cc.RealInterpolationMode.CONSTANT.
                    bool stepped = float.IsInfinity(k.inTangent) || float.IsInfinity(k.outTangent);
                    keys.Add(Key(k.time, k.value, k.inTangent, k.outTangent,
                                 k.inWeight, k.outWeight, weighted, stepped));
                }
            }
            return new JObj().Set("keys", keys);
        }

        static JObj Key(float time, float value, float inTan, float outTan,
                        float inWeight, float outWeight, string weighted, bool stepped)
        {
            return new JObj()
                .Set("time", time)
                .Set("value", value)
                .Set("inTangent", float.IsInfinity(inTan) ? 0f : inTan)
                .Set("outTangent", float.IsInfinity(outTan) ? 0f : outTan)
                .Set("inWeight", inWeight)
                .Set("outWeight", outWeight)
                .Set("weighted", weighted)
                .Set("stepped", stepped);
        }

        // ------------------------------------------------------------- gradients

        public static JObj Gradient(ParticleSystem.MinMaxGradient g, Color tint)
        {
            var o = new JObj();
            o.Set("mode", (int)g.mode);

            switch (g.mode)
            {
                case ParticleSystemGradientMode.Color:
                    o.Set("color", Col(g.color * tint));
                    break;
                case ParticleSystemGradientMode.TwoColors:
                    o.Set("colorMin", Col(g.colorMin * tint));
                    o.Set("colorMax", Col(g.colorMax * tint));
                    break;
                case ParticleSystemGradientMode.RandomColor:
                    o.Set("gradient", Grad(g.gradient, tint));
                    break;
                case ParticleSystemGradientMode.Gradient:
                    o.Set("gradient", Grad(g.gradient, tint));
                    break;
                case ParticleSystemGradientMode.TwoGradients:
                    o.Set("gradientMin", Grad(g.gradientMin, tint));
                    o.Set("gradientMax", Grad(g.gradientMax, tint));
                    break;
            }
            return o;
        }

        public static JObj SolidGradient(Color c)
        {
            return new JObj().Set("mode", 0).Set("color", Col(c));
        }

        static JObj Grad(Gradient g, Color tint)
        {
            var colorKeys = new JArr();
            var alphaKeys = new JArr();

            if (g == null)
            {
                colorKeys.Add(new JObj().Set("time", 0f).Set("color", Col(tint)));
                alphaKeys.Add(new JObj().Set("time", 0f).Set("alpha", 255));
            }
            else
            {
                foreach (var ck in g.colorKeys)
                {
                    Color c = ck.color * tint;
                    c.a = 1f;
                    colorKeys.Add(new JObj().Set("time", ck.time).Set("color", Col(c)));
                }
                foreach (var ak in g.alphaKeys)
                {
                    int alpha = Mathf.Clamp(Mathf.RoundToInt(Mathf.Clamp01(ak.alpha * tint.a) * 255f), 0, 255);
                    alphaKeys.Add(new JObj().Set("time", ak.time).Set("alpha", alpha));
                }
            }

            return new JObj()
                // cc.Gradient.Mode and UnityEngine.GradientMode agree: Blend = 0, Fixed = 1
                .Set("gradientMode", (g != null && g.mode == GradientMode.Fixed) ? 1 : 0)
                .Set("colorKeys", colorKeys)
                .Set("alphaKeys", alphaKeys);
        }

        /// <summary>cc.Color is 0-255 gamma space, same convention as the Unity inspector.</summary>
        public static JArr Col(Color c)
        {
            return JArr.Of(
                Mathf.Clamp(Mathf.RoundToInt(c.r * 255f), 0, 255),
                Mathf.Clamp(Mathf.RoundToInt(c.g * 255f), 0, 255),
                Mathf.Clamp(Mathf.RoundToInt(c.b * 255f), 0, 255),
                Mathf.Clamp(Mathf.RoundToInt(c.a * 255f), 0, 255));
        }

        // ------------------------------------------------------- curve evaluation

        /// <summary>Mean value of a MinMaxCurve at normalised time t (used when baking).</summary>
        public static float EvalAvg(ParticleSystem.MinMaxCurve c, float t)
        {
            switch (c.mode)
            {
                case ParticleSystemCurveMode.Constant:
                    return c.constant;
                case ParticleSystemCurveMode.TwoConstants:
                    return (c.constantMin + c.constantMax) * 0.5f;
                case ParticleSystemCurveMode.Curve:
                    return (c.curve != null ? c.curve.Evaluate(t) : 0f) * c.curveMultiplier;
                case ParticleSystemCurveMode.TwoCurves:
                    float lo = c.curveMin != null ? c.curveMin.Evaluate(t) : 0f;
                    float hi = c.curveMax != null ? c.curveMax.Evaluate(t) : 0f;
                    return (lo + hi) * 0.5f * c.curveMultiplier;
            }
            return 0f;
        }
    }
}
