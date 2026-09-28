// -----------------------------------------------------------------------------
//  CocosParticleConverter.cs
//  Reads every Shuriken module off a ParticleSystem and emits the JSON document
//  the Cocos Creator 3.x importer consumes.
//
//  Coordinate systems
//    Unity is left-handed (+Z into the screen), Cocos Creator 3.x is right-handed
//    (+Z towards the viewer). Every position, direction and rotation is mirrored
//    across the XY plane: p -> (x, y, -z) and q -> (-x, -y, z, w).
//
//  Units and angles
//    Unity's *scripting* API returns particle rotations in RADIANS even though
//    the inspector shows degrees. Cocos does exactly the same: startRotationX/Y/Z
//    and rotationOvertimeModule.x/y/z are tagged @radian in the engine, stored as
//    radians and displayed as degrees. So those values pass straight through with
//    no unit conversion at all - converting here is what makes a Cocos effect spin
//    57x too fast.
//    ShapeModule.angle / .arc are the exception: they are public accessors that
//    take DEGREES and convert internally, so they keep Unity's degree values.
// -----------------------------------------------------------------------------
using System.Collections.Generic;
using UnityEngine;

namespace CocosParticleExport
{
    /// <summary>File format for meshes used by RenderMode.Mesh particles.</summary>
    public enum CocosMeshFormat
    {
        Fbx,    // copy the source .fbx when there is one, otherwise generate one
        Obj,    // Wavefront .obj
    }

    public sealed class CocosExportSettings
    {
        public CocosMeshFormat meshFormat = CocosMeshFormat.Fbx;
        public float unitScale = 1f;              // multiplies every distance/speed
        public bool convertHandedness = true;     // mirror Z (Unity LH -> Cocos RH)
        public bool bakeSpeedModules = true;      // size/color/rotation by speed
        public bool exportSubEmitters = true;     // sub-emitters become child systems
        public bool foldMaterialTintIntoColor = true;
        public bool includeInactive = true;
        public int speedBakeSamples = 16;
    }

    public sealed class CocosParticleConverter
    {
        readonly CocosExportSettings _s;
        readonly CocosAssetExporter _assets;
        readonly List<string> _warnings;
        readonly List<string> _compensations;
        readonly Dictionary<string, CocosMaterialDesc> _materials = new Dictionary<string, CocosMaterialDesc>();

        // Systems reachable as sub-emitters, so they are not also exported as
        // ordinary hierarchy children.
        readonly HashSet<ParticleSystem> _subEmitterSystems = new HashSet<ParticleSystem>();

        float Z { get { return _s.convertHandedness ? -1f : 1f; } }

        public CocosParticleConverter(CocosExportSettings settings, CocosAssetExporter assets,
                                      List<string> warnings, List<string> compensations)
        {
            _s = settings;
            _assets = assets;
            _warnings = warnings;
            _compensations = compensations;
        }

        // =====================================================================
        //  Entry point
        // =====================================================================

        public JObj Convert(GameObject root)
        {
            var all = new List<ParticleSystem>(root.GetComponentsInChildren<ParticleSystem>(_s.includeInactive));
            if (all.Count == 0)
                throw new System.InvalidOperationException("'" + root.name + "' contains no ParticleSystem component.");

            // Pre-scan: any system referenced as a sub-emitter is re-parented by the
            // sub-emitter pass instead of being emitted twice.
            if (_s.exportSubEmitters)
            {
                foreach (var ps in all)
                {
                    var sub = ps.subEmitters;
                    if (!sub.enabled) continue;
                    for (int i = 0; i < sub.subEmittersCount; i++)
                    {
                        var child = sub.GetSubEmitterSystem(i);
                        if (child != null) _subEmitterSystems.Add(child);
                    }
                }
            }

            var systems = new JArr();
            foreach (var ps in all)
            {
                if (_subEmitterSystems.Contains(ps)) continue;
                systems.Add(BuildSystem(ps, root, null, null));
            }

            // Sub-emitters are appended after their owner so the importer can look
            // the parent path up by the time it reaches them.
            if (_s.exportSubEmitters)
            {
                foreach (var ps in all)
                {
                    if (_subEmitterSystems.Contains(ps)) continue;
                    AppendSubEmitters(ps, root, systems);
                }
            }

            var materials = new JArr();
            foreach (var kv in _materials) materials.Add(kv.Value.ToJson());

            var doc = new JObj()
                .Set("format", "unity-particle-export")
                .Set("version", 1)
                .Set("target", "cocos-creator-3.x")
                .Set("rootName", root.name)
                .Set("unityVersion", Application.unityVersion)
                .Set("exportedAt", System.DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss"))
                .Set("colorSpace", QualitySettings.activeColorSpace.ToString())
                .Set("textureFolder", _assets.TextureFolderName)
                .Set("meshFolder", _assets.HasMeshes ? _assets.MeshFolderName : null)
                .Set("settings", new JObj()
                    .Set("unitScale", _s.unitScale)
                    .Set("convertHandedness", _s.convertHandedness)
                    .Set("bakeSpeedModules", _s.bakeSpeedModules)
                    .Set("exportSubEmitters", _s.exportSubEmitters)
                    // The importer needs this to decide whether the tint belongs on
                    // the material or has already been folded into startColor.
                    .Set("foldMaterialTintIntoColor", _s.foldMaterialTintIntoColor))
                .Set("textures", _assets.TexturesJson())
                .Set("materials", materials)
                .Set("systems", systems);

            var warn = new JArr();
            foreach (var w in Distinct(_warnings)) warn.Add(w);
            var comp = new JArr();
            foreach (var c in Distinct(_compensations)) comp.Add(c);
            doc.Set("compensations", comp);
            doc.Set("warnings", warn);
            return doc;
        }

        static IEnumerable<string> Distinct(List<string> src)
        {
            var seen = new HashSet<string>();
            foreach (var s in src) if (seen.Add(s)) yield return s;
        }

        void AppendSubEmitters(ParticleSystem owner, GameObject root, JArr systems)
        {
            var sub = owner.subEmitters;
            if (!sub.enabled || sub.subEmittersCount == 0) return;

            string ownerPath = PathOf(owner.transform, root.transform);

            for (int i = 0; i < sub.subEmittersCount; i++)
            {
                var child = sub.GetSubEmitterSystem(i);
                if (child == null) continue;

                ParticleSystemSubEmitterType type = sub.GetSubEmitterType(i);
                var meta = new JObj()
                    .Set("type", type.ToString())
                    .Set("owner", ownerPath)
                    .Set("probability", sub.GetSubEmitterEmitProbability(i))
                    .Set("inheritColor", (sub.GetSubEmitterProperties(i) & ParticleSystemSubEmitterProperties.InheritColor) != 0);

                systems.Add(BuildSystem(child, root, ownerPath, meta));

                _compensations.Add("Sub-emitter '" + child.name + "' (" + type +
                    ") was exported as a standalone child system. Cocos has no sub-emitter module, so it plays alongside its owner" +
                    (type == ParticleSystemSubEmitterType.Death ? " with a start delay equal to the owner's lifetime." :
                     type == ParticleSystemSubEmitterType.Birth ? " from t=0." :
                     "; collision/trigger spawning cannot be reproduced without a script."));

                if (type == ParticleSystemSubEmitterType.Collision || type == ParticleSystemSubEmitterType.Trigger)
                    _warnings.Add("Sub-emitter '" + child.name + "' fires on " + type +
                                  ", which depends on physics; the Cocos copy simply plays with the owner.");

                // Nested sub-emitters.
                AppendSubEmitters(child, root, systems);
            }
        }

        // =====================================================================
        //  One ParticleSystem -> one JSON node
        // =====================================================================

        JObj BuildSystem(ParticleSystem ps, GameObject root, string subEmitterOwner, JObj subEmitterMeta)
        {
            var t = ps.transform;
            Transform rt = root.transform;
            bool isRoot = t == rt;

            // Every system is emitted with a transform relative to the export root and
            // is re-parented directly under the root node in Cocos. Flattening this way
            // keeps the exact world placement even when intermediate GameObjects in the
            // Unity hierarchy carry no ParticleSystem and are therefore not exported.
            Vector3 lp = isRoot ? Vector3.zero : rt.InverseTransformPoint(t.position);
            Quaternion lr = isRoot ? Quaternion.identity : Quaternion.Inverse(rt.rotation) * t.rotation;
            Vector3 ls = isRoot ? rt.localScale : RelativeScale(t, rt);

            var node = new JObj()
                .Set("name", ps.gameObject.name)
                .Set("path", PathOf(t, rt))
                .Set("parent", isRoot ? null : PathOf(t.parent, rt))
                .Set("subEmitterOwner", subEmitterOwner)
                .Set("subEmitter", subEmitterMeta)
                .Set("active", IsActiveUnderRoot(t, rt))
                .Set("position", Vec3(lp * _s.unitScale))
                .Set("rotation", Quat(lr))
                // EulerFor already mirrors for handedness; do not run it through Vec3.
                .Set("eulerAngles", Vec3Raw(EulerFor(lr)))
                .Set("scale", JArr.Of(ls.x, ls.y, ls.z));

            node.Set("main", Main(ps, subEmitterMeta, root));
            node.Set("emission", Emission(ps));
            node.Set("shape", Shape(ps));
            node.Set("velocityOverLifetime", VelocityOverLifetime(ps));
            node.Set("limitVelocityOverLifetime", LimitVelocity(ps));
            node.Set("forceOverLifetime", ForceOverLifetime(ps));
            node.Set("colorOverLifetime", ColorOverLifetime(ps));
            node.Set("sizeOverLifetime", SizeOverLifetime(ps));
            node.Set("rotationOverLifetime", RotationOverLifetime(ps));
            node.Set("textureAnimation", TextureAnimation(ps));
            node.Set("noise", Noise(ps));
            node.Set("trail", Trail(ps));
            node.Set("renderer", Renderer(ps));

            ReportUnsupported(ps);
            return node;
        }

        // ------------------------------------------------------------------ main

        JObj Main(ParticleSystem ps, JObj subEmitterMeta, GameObject root)
        {
            var m = ps.main;

            // Unity gravityModifier scales Physics.gravity; Cocos scales a fixed 9.8.
            float gravityRatio = Mathf.Abs(Physics.gravity.y) / 9.8f;

            var o = new JObj()
                .Set("duration", m.duration)
                .Set("loop", m.loop)
                .Set("prewarm", m.prewarm)
                .Set("playOnAwake", m.playOnAwake)
                .Set("startDelay", CocosCurveBaker.Curve(m.startDelay))
                .Set("startLifetime", CocosCurveBaker.Curve(m.startLifetime))
                .Set("startSpeed", CocosCurveBaker.Curve(m.startSpeed, _s.unitScale))
                .Set("startSize3D", m.startSize3D)
                .Set("startSizeX", CocosCurveBaker.Curve(m.startSize3D ? m.startSizeX : m.startSize, _s.unitScale))
                .Set("startSizeY", CocosCurveBaker.Curve(m.startSize3D ? m.startSizeY : m.startSize, _s.unitScale))
                .Set("startSizeZ", CocosCurveBaker.Curve(m.startSize3D ? m.startSizeZ : m.startSize, _s.unitScale))
                .Set("startRotation3D", m.startRotation3D)
                // Radians on both sides — pass through, only mirroring Z.
                .Set("startRotationX", CocosCurveBaker.Curve(m.startRotation3D ? m.startRotationX : m.startRotation))
                .Set("startRotationY", CocosCurveBaker.Curve(m.startRotation3D ? m.startRotationY : m.startRotation))
                .Set("startRotationZ", CocosCurveBaker.Curve(m.startRotation3D ? m.startRotationZ : m.startRotation, Z))
                .Set("startColor", CocosCurveBaker.Gradient(m.startColor, Color.white))
                .Set("gravityModifier", CocosCurveBaker.Curve(m.gravityModifier, gravityRatio))
                // Unity Space: Local=0 World=1 Custom=2   |   Cocos Space: World=0 Local=1 Custom=2
                .Set("simulationSpace", SpaceToCocos(m.simulationSpace))
                .Set("simulationSpeed", m.simulationSpeed)
                .Set("scaleSpace", m.scalingMode == ParticleSystemScalingMode.Hierarchy ? 0 : 1)
                .Set("capacity", m.maxParticles)
                .Set("useUnscaledTime", m.useUnscaledTime);

            if (m.simulationSpace == ParticleSystemSimulationSpace.Custom)
                _warnings.Add("'" + ps.name + "' simulates in a Custom space; Cocos supports Custom too but the reference node must be assigned by hand.");

            if (m.scalingMode == ParticleSystemScalingMode.Shape)
                _warnings.Add("'" + ps.name + "' uses Scaling Mode = Shape, which Cocos lacks; exported as Local.");

            // A Death sub-emitter must not fire until the owner's particles expire,
            // so shift it by the owner's average lifetime.
            if (subEmitterMeta != null && StringValue(subEmitterMeta, "type") == "Death")
            {
                var owner = FindByPath(root.transform, StringValue(subEmitterMeta, "owner"));
                var ownerPs = owner != null ? owner.GetComponent<ParticleSystem>() : null;
                if (ownerPs != null)
                    o.Set("extraStartDelay", CocosCurveBaker.EvalAvg(ownerPs.main.startLifetime, 0.5f));
            }
            return o;
        }

        static string StringValue(JObj o, string key)
        {
            foreach (var kv in o.Items) if (kv.Key == key) return kv.Value as string;
            return null;
        }

        static int SpaceToCocos(ParticleSystemSimulationSpace s)
        {
            switch (s)
            {
                case ParticleSystemSimulationSpace.World: return 0;   // cc Space.World
                case ParticleSystemSimulationSpace.Local: return 1;   // cc Space.Local
                default: return 2;                                    // cc Space.Custom
            }
        }

        // -------------------------------------------------------------- emission

        JObj Emission(ParticleSystem ps)
        {
            var e = ps.emission;
            var bursts = new JArr();

            if (e.enabled && e.burstCount > 0)
            {
                var arr = new ParticleSystem.Burst[e.burstCount];
                e.GetBursts(arr);
                foreach (var b in arr)
                {
                    // cc.Burst.repeatCount is the number of times the burst FIRES
                    // (default 1), not a repeat count on top of a first shot. Writing
                    // cycleCount-1 here leaves 0 for a one-shot burst, and Cocos then
                    // never emits at all.
                    int repeatCount;
                    if (b.cycleCount > 0)
                    {
                        repeatCount = b.cycleCount;
                    }
                    else
                    {
                        // Unity treats 0 as "repeat forever". Cocos has no infinite
                        // option but re-arms a burst once it is exhausted, so filling
                        // one duration reproduces the same cadence.
                        float interval = Mathf.Max(b.repeatInterval, 0.0001f);
                        repeatCount = Mathf.Max(1, Mathf.CeilToInt(ps.main.duration / interval));
                    }

                    bursts.Add(new JObj()
                        .Set("time", b.time)
                        .Set("repeatCount", repeatCount)
                        .Set("repeatInterval", Mathf.Max(b.repeatInterval, 0.0001f))
                        .Set("count", CocosCurveBaker.Curve(b.count)));

                    if (b.probability < 1f)
                        _warnings.Add("A burst on '" + ps.name + "' has probability " + b.probability.ToString("0.##") +
                                      "; Cocos bursts always fire, so it will emit more often.");
                }
            }

            return new JObj()
                .Set("enabled", e.enabled)
                .Set("rateOverTime", CocosCurveBaker.Curve(e.enabled ? e.rateOverTime : new ParticleSystem.MinMaxCurve(0f)))
                .Set("rateOverDistance", CocosCurveBaker.Curve(e.enabled ? e.rateOverDistance : new ParticleSystem.MinMaxCurve(0f)))
                .Set("bursts", bursts);
        }

        // ----------------------------------------------------------------- shape

        JObj Shape(ParticleSystem ps)
        {
            var sh = ps.shape;
            if (!sh.enabled) return new JObj().Set("enabled", false);

            // cc ShapeType : Box=0 Circle=1 Cone=2 Sphere=3 Hemisphere=4
            // cc EmitLocation: Base=0 Edge=1 Shell=2 Volume=3
            int shapeType, emitFrom;
            Vector3 boxThickness = sh.boxThickness;
            float radiusThickness = sh.radiusThickness;

            // The *Shell variants are deprecated in current Unity but still appear on
            // effects authored years ago, which is exactly what gets ported.
#pragma warning disable 618
            switch (sh.shapeType)
            {
                case ParticleSystemShapeType.Sphere: shapeType = 3; emitFrom = 3; break;
                case ParticleSystemShapeType.SphereShell: shapeType = 3; emitFrom = 2; radiusThickness = 0f; break;
                case ParticleSystemShapeType.Hemisphere: shapeType = 4; emitFrom = 3; break;
                case ParticleSystemShapeType.HemisphereShell: shapeType = 4; emitFrom = 2; radiusThickness = 0f; break;

                case ParticleSystemShapeType.Cone: shapeType = 2; emitFrom = 0; break;
                case ParticleSystemShapeType.ConeShell: shapeType = 2; emitFrom = 2; radiusThickness = 0f; break;
                case ParticleSystemShapeType.ConeVolume: shapeType = 2; emitFrom = 3; break;
                case ParticleSystemShapeType.ConeVolumeShell: shapeType = 2; emitFrom = 3; radiusThickness = 0f; break;

                case ParticleSystemShapeType.Box: shapeType = 0; emitFrom = 3; break;
                case ParticleSystemShapeType.BoxShell: shapeType = 0; emitFrom = 2; break;
                case ParticleSystemShapeType.BoxEdge: shapeType = 0; emitFrom = 1; break;

                case ParticleSystemShapeType.Circle: shapeType = 1; emitFrom = 3; break;
                case ParticleSystemShapeType.CircleEdge: shapeType = 1; emitFrom = 1; radiusThickness = 0f; break;

                case ParticleSystemShapeType.Rectangle:
                    // A flat box reproduces Unity's 2D rectangle emitter exactly.
                    shapeType = 0; emitFrom = 3;
                    boxThickness = new Vector3(sh.boxThickness.x, sh.boxThickness.y, 1f);
                    _compensations.Add("'" + ps.name + "' uses a Rectangle shape; exported as a Box with zero depth.");
                    break;

                case ParticleSystemShapeType.SingleSidedEdge:
                    shapeType = 0; emitFrom = 3;
                    boxThickness = new Vector3(0f, 1f, 1f);
                    _compensations.Add("'" + ps.name + "' uses an Edge shape; exported as a razor-thin Box of the same length.");
                    break;

                case ParticleSystemShapeType.Donut:
                    shapeType = 1; emitFrom = 3;
                    // Donut thickness maps onto the circle's radiusThickness band.
                    radiusThickness = sh.radius > 1e-4f ? Mathf.Clamp01(sh.donutRadius / sh.radius) : 1f;
                    _compensations.Add("'" + ps.name + "' uses a Donut shape; exported as a ring-shaped Circle (radiusThickness " +
                                       radiusThickness.ToString("0.##") + ").");
                    break;

                default:
                    // Mesh / MeshRenderer / SkinnedMeshRenderer / Sprite emitters.
                    shapeType = 3; emitFrom = 3;
                    _warnings.Add("'" + ps.name + "' emits from a " + sh.shapeType +
                                  ", which Cocos cannot express; a Sphere of the same radius was used instead.");
                    break;
            }
#pragma warning restore 618

            var o = new JObj()
                .Set("enabled", true)
                .Set("shapeType", shapeType)
                .Set("emitFrom", emitFrom)
                .Set("position", Vec3(sh.position * _s.unitScale))
                // ShapeEuler already mirrors for handedness; do not run it through Vec3.
                .Set("rotation", Vec3Raw(ShapeEuler(sh.rotation)))
                .Set("scale", JArr.Of(sh.scale.x, sh.scale.y, sh.scale.z))
                .Set("radius", sh.radius * _s.unitScale)
                .Set("radiusThickness", radiusThickness)
                .Set("angle", sh.angle)                       // degrees on both sides
                .Set("length", sh.length * _s.unitScale)
                .Set("boxThickness", JArr.Of(boxThickness.x, boxThickness.y, boxThickness.z))
                .Set("arc", sh.arc)
                .Set("arcMode", ArcMode(sh.arcMode, ps))
                .Set("arcSpread", sh.arcSpread)
                .Set("arcSpeed", CocosCurveBaker.Curve(sh.arcSpeed))
                .Set("alignToDirection", sh.alignToDirection)
                .Set("randomDirectionAmount", sh.randomDirectionAmount)
                .Set("sphericalDirectionAmount", sh.sphericalDirectionAmount)
                .Set("randomPositionAmount", sh.randomPositionAmount * _s.unitScale);
            return o;
        }

        int ArcMode(ParticleSystemShapeMultiModeValue m, ParticleSystem ps)
        {
            // cc ArcMode: Random=0 Loop=1 PingPong=2
            switch (m)
            {
                case ParticleSystemShapeMultiModeValue.Random: return 0;
                case ParticleSystemShapeMultiModeValue.Loop: return 1;
                case ParticleSystemShapeMultiModeValue.PingPong: return 2;
                default:
                    _warnings.Add("'" + ps.name + "' uses Arc Mode = Burst Spread, which Cocos lacks; exported as Loop.");
                    return 1;
            }
        }

        // ------------------------------------------------------------- velocity

        JObj VelocityOverLifetime(ParticleSystem ps)
        {
            var v = ps.velocityOverLifetime;
            if (!v.enabled) return new JObj().Set("enabled", false);

            if (HasAnyValue(v.orbitalX) || HasAnyValue(v.orbitalY) || HasAnyValue(v.orbitalZ))
                _warnings.Add("'" + ps.name + "' uses Orbital Velocity, which Cocos has no equivalent for; the swirl will be missing.");

            // Radial velocity pushes particles along their emission direction, which for
            // sphere/circle/cone emitters is exactly the start direction - so folding it
            // into startSpeed reproduces it closely.
            float radial = CocosCurveBaker.EvalAvg(v.radial, 0.5f);
            if (Mathf.Abs(radial) > 1e-4f)
                _compensations.Add("'" + ps.name + "' has Radial velocity " + radial.ToString("0.##") +
                                   "; it was folded into Start Speed (accurate for sphere/circle/cone emitters).");

            return new JObj()
                .Set("enabled", true)
                .Set("x", CocosCurveBaker.Curve(v.x, _s.unitScale))
                .Set("y", CocosCurveBaker.Curve(v.y, _s.unitScale))
                .Set("z", CocosCurveBaker.Curve(v.z, _s.unitScale * Z))
                .Set("speedModifier", CocosCurveBaker.Curve(v.speedModifier))
                .Set("space", SpaceToCocos(v.space))
                .Set("radialFoldedIntoStartSpeed", radial * _s.unitScale);
        }

        JObj LimitVelocity(ParticleSystem ps)
        {
            var l = ps.limitVelocityOverLifetime;
            if (!l.enabled) return new JObj().Set("enabled", false);

            var o = new JObj()
                .Set("enabled", true)
                .Set("separateAxes", l.separateAxes)
                .Set("limit", CocosCurveBaker.Curve(l.separateAxes ? l.limitX : l.limit, _s.unitScale))
                .Set("limitX", CocosCurveBaker.Curve(l.separateAxes ? l.limitX : l.limit, _s.unitScale))
                .Set("limitY", CocosCurveBaker.Curve(l.separateAxes ? l.limitY : l.limit, _s.unitScale))
                .Set("limitZ", CocosCurveBaker.Curve(l.separateAxes ? l.limitZ : l.limit, _s.unitScale))
                .Set("dampen", l.dampen)
                .Set("space", SpaceToCocos(l.space))
                .Set("drag", CocosCurveBaker.Curve(l.drag, _s.unitScale))
                .Set("multiplyDragByParticleSize", l.multiplyDragByParticleSize)
                .Set("multiplyDragByParticleVelocity", l.multiplyDragByParticleVelocity);
            return o;
        }

        JObj ForceOverLifetime(ParticleSystem ps)
        {
            var f = ps.forceOverLifetime;
            if (!f.enabled) return new JObj().Set("enabled", false);

            if (f.randomized)
                _warnings.Add("'" + ps.name + "' uses Randomize on Force over Lifetime; Cocos re-rolls per frame differently, so the jitter will not match exactly.");

            return new JObj()
                .Set("enabled", true)
                .Set("x", CocosCurveBaker.Curve(f.x, _s.unitScale))
                .Set("y", CocosCurveBaker.Curve(f.y, _s.unitScale))
                .Set("z", CocosCurveBaker.Curve(f.z, _s.unitScale * Z))
                .Set("space", SpaceToCocos(f.space));
        }

        // -------------------------------------------------- over-lifetime modules

        JObj ColorOverLifetime(ParticleSystem ps)
        {
            var c = ps.colorOverLifetime;
            var bySpeed = ps.colorBySpeed;

            if (!c.enabled && !(bySpeed.enabled && _s.bakeSpeedModules))
                return new JObj().Set("enabled", false);

            // Color by Speed has no Cocos module. Estimate the speed profile over a
            // particle's life, sample the by-speed gradient along it and multiply the
            // result into the over-lifetime gradient.
            if (bySpeed.enabled && _s.bakeSpeedModules)
            {
                Gradient baked = BakeColorBySpeed(ps, c, bySpeed);
                _compensations.Add("'" + ps.name + "' uses Color by Speed; it was baked into Color over Lifetime using the estimated speed profile.");
                var mm = new ParticleSystem.MinMaxGradient(baked);
                return new JObj().Set("enabled", true).Set("color", CocosCurveBaker.Gradient(mm, Color.white));
            }

            return new JObj().Set("enabled", true).Set("color", CocosCurveBaker.Gradient(c.color, Color.white));
        }

        JObj SizeOverLifetime(ParticleSystem ps)
        {
            var s = ps.sizeOverLifetime;
            var bySpeed = ps.sizeBySpeed;
            bool bake = bySpeed.enabled && _s.bakeSpeedModules;

            if (!s.enabled && !bake) return new JObj().Set("enabled", false);

            if (bake)
            {
                float[] samples = BakeScalarBySpeed(ps, s.enabled ? s.size : new ParticleSystem.MinMaxCurve(1f),
                                                    bySpeed.size, bySpeed.range, s.enabled);
                _compensations.Add("'" + ps.name + "' uses Size by Speed; it was multiplied into Size over Lifetime using the estimated speed profile.");
                var curve = CocosCurveBaker.CurveFromSamples(samples, 1f);
                return new JObj().Set("enabled", true).Set("separateAxes", false)
                                 .Set("size", curve).Set("x", curve).Set("y", curve).Set("z", curve);
            }

            return new JObj()
                .Set("enabled", true)
                .Set("separateAxes", s.separateAxes)
                .Set("size", CocosCurveBaker.Curve(s.separateAxes ? s.x : s.size))
                .Set("x", CocosCurveBaker.Curve(s.separateAxes ? s.x : s.size))
                .Set("y", CocosCurveBaker.Curve(s.separateAxes ? s.y : s.size))
                .Set("z", CocosCurveBaker.Curve(s.separateAxes ? s.z : s.size));
        }

        JObj RotationOverLifetime(ParticleSystem ps)
        {
            var r = ps.rotationOverLifetime;
            var bySpeed = ps.rotationBySpeed;
            bool bake = bySpeed.enabled && _s.bakeSpeedModules;

            if (!r.enabled && !bake) return new JObj().Set("enabled", false);

            if (bake)
            {
                // Both modules are angular velocity, so they simply add.
                float[] samples = BakeAngularBySpeed(ps, r, bySpeed);
                _compensations.Add("'" + ps.name + "' uses Rotation by Speed; it was added into Rotation over Lifetime using the estimated speed profile.");
                var curve = CocosCurveBaker.CurveFromSamples(samples, 1f);
                return new JObj().Set("enabled", true).Set("separateAxes", false)
                                 .Set("x", CocosCurveBaker.ConstantCurve(0f))
                                 .Set("y", CocosCurveBaker.ConstantCurve(0f))
                                 .Set("z", curve);
            }

            return new JObj()
                .Set("enabled", true)
                .Set("separateAxes", r.separateAxes)
                // Radians/second on both sides — pass through, only mirroring Z.
                .Set("x", CocosCurveBaker.Curve(r.separateAxes ? r.x : new ParticleSystem.MinMaxCurve(0f)))
                .Set("y", CocosCurveBaker.Curve(r.separateAxes ? r.y : new ParticleSystem.MinMaxCurve(0f)))
                .Set("z", CocosCurveBaker.Curve(r.z, Z));
        }

        // --------------------------------------------------------- texture sheet

        JObj TextureAnimation(ParticleSystem ps)
        {
            var a = ps.textureSheetAnimation;
            if (!a.enabled) return new JObj().Set("enabled", false);

            if (a.mode != ParticleSystemAnimationMode.Grid)
            {
                _warnings.Add("'" + ps.name + "' animates from a Sprite list, which Cocos cannot do; pack the sprites into a grid atlas and re-export.");
                return new JObj().Set("enabled", false);
            }

            if (a.timeMode != ParticleSystemAnimationTimeMode.Lifetime)
                _warnings.Add("'" + ps.name + "' drives its flipbook by " + a.timeMode +
                              "; Cocos only supports Lifetime, so playback speed will differ.");

            return new JObj()
                .Set("enabled", true)
                .Set("mode", 0)                                   // cc Grid
                .Set("numTilesX", a.numTilesX)
                .Set("numTilesY", a.numTilesY)
                .Set("animation", a.animation == ParticleSystemAnimationType.SingleRow ? 1 : 0)
                .Set("frameOverTime", CocosCurveBaker.Curve(a.frameOverTime))
                .Set("startFrame", CocosCurveBaker.Curve(a.startFrame))
                .Set("cycleCount", a.cycleCount)
                .Set("randomRow", a.rowMode == ParticleSystemAnimationRowMode.Random)
                .Set("rowIndex", a.rowIndex);
        }

        // ----------------------------------------------------------------- noise

        JObj Noise(ParticleSystem ps)
        {
            var n = ps.noise;
            if (!n.enabled) return new JObj().Set("enabled", false);

            // Cocos noise takes plain floats where Unity takes curves, so sample the mean.
            float sx = n.separateAxes ? CocosCurveBaker.EvalAvg(n.strengthX, 0.5f) : CocosCurveBaker.EvalAvg(n.strength, 0.5f);
            float sy = n.separateAxes ? CocosCurveBaker.EvalAvg(n.strengthY, 0.5f) : sx;
            float sz = n.separateAxes ? CocosCurveBaker.EvalAvg(n.strengthZ, 0.5f) : sx;
            float scroll = CocosCurveBaker.EvalAvg(n.scrollSpeed, 0.5f);

            if (n.damping)
                _compensations.Add("'" + ps.name + "' has Noise Damping on; Cocos does not scale strength by frequency, so strength was pre-divided by the frequency.");
            float damp = n.damping && n.frequency > 1e-4f ? 1f / n.frequency : 1f;

            // positionAmount / rotationAmount / sizeAmount are MinMaxCurves in Unity;
            // Cocos folds the whole thing into a single strength value per axis.
            float posAmount = CocosCurveBaker.EvalAvg(n.positionAmount, 0.5f);
            float rotAmount = CocosCurveBaker.EvalAvg(n.rotationAmount, 0.5f);
            float sizeAmount = CocosCurveBaker.EvalAvg(n.sizeAmount, 0.5f);

            if (Mathf.Abs(rotAmount) > 1e-4f || Mathf.Abs(sizeAmount) > 1e-4f)
                _warnings.Add("'" + ps.name + "' applies noise to rotation/size; Cocos noise only affects position, so those wobbles will be missing.");

            float remapX = n.remapEnabled ? CocosCurveBaker.EvalAvg(n.separateAxes ? n.remapX : n.remap, 1f) : 1f;
            float remapY = n.remapEnabled ? CocosCurveBaker.EvalAvg(n.separateAxes ? n.remapY : n.remap, 1f) : 1f;
            float remapZ = n.remapEnabled ? CocosCurveBaker.EvalAvg(n.separateAxes ? n.remapZ : n.remap, 1f) : 1f;

            return new JObj()
                .Set("enabled", true)
                .Set("strengthX", sx * posAmount * damp * _s.unitScale)
                .Set("strengthY", sy * posAmount * damp * _s.unitScale)
                .Set("strengthZ", sz * posAmount * damp * _s.unitScale)
                .Set("noiseSpeedX", scroll)
                .Set("noiseSpeedY", scroll)
                .Set("noiseSpeedZ", scroll)
                .Set("noiseFrequency", n.frequency)
                .Set("remapEnable", n.remapEnabled)
                .Set("remapX", remapX)
                .Set("remapY", remapY)
                .Set("remapZ", remapZ)
                .Set("octaves", n.octaveCount)
                .Set("octaveMultiplier", n.octaveMultiplier)
                .Set("octaveScale", n.octaveScale);
        }

        // ----------------------------------------------------------------- trail

        JObj Trail(ParticleSystem ps)
        {
            var tr = ps.trails;
            if (!tr.enabled) return new JObj().Set("enabled", false);

            if (tr.mode == ParticleSystemTrailMode.Ribbon)
                _warnings.Add("'" + ps.name + "' uses Ribbon trails; Cocos only implements per-particle trails, so the shape will differ.");

            return new JObj()
                .Set("enabled", true)
                .Set("mode", 0)                                   // cc TrailModule only has Particles mode
                .Set("lifeTime", CocosCurveBaker.Curve(tr.lifetime))
                .Set("ratio", tr.ratio)
                .Set("minParticleDistance", tr.minVertexDistance * _s.unitScale)
                .Set("existWithParticles", tr.dieWithParticles)
                .Set("space", tr.worldSpace ? 0 : 1)              // cc Space World=0 Local=1
                // cc TrailModule.TextureMode only offers Stretch (0) and Repeat (1)
                .Set("textureMode", tr.textureMode == ParticleSystemTrailTextureMode.Stretch ? 0 : 1)
                .Set("widthFromParticle", tr.sizeAffectsWidth)
                .Set("widthRatio", CocosCurveBaker.Curve(tr.widthOverTrail))
                .Set("colorFromParticle", tr.inheritParticleColor)
                .Set("colorOverTrail", CocosCurveBaker.Gradient(tr.colorOverTrail, Color.white))
                .Set("colorOvertime", CocosCurveBaker.Gradient(tr.colorOverLifetime, Color.white));
        }

        // -------------------------------------------------------------- renderer

        JObj Renderer(ParticleSystem ps)
        {
            var r = ps.GetComponent<ParticleSystemRenderer>();
            if (r == null) return new JObj().Set("enabled", false);

            var o = new JObj().Set("enabled", r.enabled);

            // cc RenderMode: Billboard=0 StretchedBillboard=1 Horizontal=2 Vertical=3 Mesh=4
            int mode;
            switch (r.renderMode)
            {
                case ParticleSystemRenderMode.Billboard: mode = 0; break;
                case ParticleSystemRenderMode.Stretch: mode = 1; break;
                case ParticleSystemRenderMode.HorizontalBillboard: mode = 2; break;
                case ParticleSystemRenderMode.VerticalBillboard: mode = 3; break;
                case ParticleSystemRenderMode.Mesh: mode = 4; break;
                default:
                    mode = 0;
                    _warnings.Add("'" + ps.name + "' has Render Mode = None; exported as Billboard with the renderer disabled.");
                    o.Set("enabled", false);
                    break;
            }
            o.Set("renderMode", mode);
            o.Set("velocityScale", r.velocityScale);
            o.Set("lengthScale", r.lengthScale);

            if (r.renderMode == ParticleSystemRenderMode.Mesh)
            {
                Mesh mesh = r.mesh;
                o.Set("mesh", mesh != null
                    ? _assets.RegisterMesh(mesh, _s.meshFormat, _s.convertHandedness)
                    : null);
                if (r.meshCount > 1)
                    _warnings.Add("'" + ps.name + "' renders " + r.meshCount + " meshes; Cocos supports one, so only the first was exported.");
            }
            else
            {
                o.Set("mesh", null);
            }

            // Material -> one shared .mtl per distinct render state.
            var desc = RegisterMaterial(r.sharedMaterial);
            o.Set("materialKey", desc != null ? desc.key : null);

            CocosMaterialDesc trailDesc = null;
            if (ps.trails.enabled && r.trailMaterial != null)
                trailDesc = RegisterMaterial(r.trailMaterial);
            o.Set("trailMaterialKey", trailDesc != null ? trailDesc.key : null);

            // Fold the shader tint into startColor so brightness matches even though
            // Cocos' builtin-particle does not expose a separate tint slot per mode.
            o.Set("materialTint", desc != null && _s.foldMaterialTintIntoColor
                ? CocosCurveBaker.Col(desc.tint) : CocosCurveBaker.Col(Color.white));

            o.Set("sortingFudge", r.sortingFudge);
            // Alignment space. The two engines disagree on what "Local" means:
            //   Unity  Local -> orient by the emitter transform's axes, i.e. its
            //                   orientation in the world (transform.rotation).
            //   Cocos  Local -> node.getRotation(), the rotation relative to the
            //                   PARENT only, so rotating a parent container does
            //                   nothing. Cocos' World uses node.getWorldRotation(),
            //                   which is what Unity actually means.
            // Mapping Unity Local onto cc World is therefore the faithful choice.
            // cc AlignmentSpace: World = 0, Local = 1, View = 2
            int alignSpace;
            switch (r.alignment)
            {
                case ParticleSystemRenderSpace.Local:
                    alignSpace = 0;
                    break;
                case ParticleSystemRenderSpace.World:
                    // Unity aligns to the world axes no matter how the emitter is
                    // rotated; Cocos always folds in the node's world rotation.
                    alignSpace = 0;
                    if (ps.transform.rotation != Quaternion.identity)
                        _warnings.Add("'" + ps.name + "' uses World alignment on a rotated emitter; Cocos has no " +
                                      "world-axis-locked option, so the particles will follow the node's rotation.");
                    break;
                case ParticleSystemRenderSpace.Velocity:
                    alignSpace = 2;
                    _warnings.Add("'" + ps.name + "' aligns particles to their velocity; Cocos has no such option — " +
                                  "switch Render Mode to Stretched Billboard for a similar look.");
                    break;
                default:   // View, Facing
                    alignSpace = 2;
                    break;
            }
            o.Set("alignSpace", alignSpace);

            if (r.minParticleSize > 0f || r.maxParticleSize < 0.5f)
                _warnings.Add("'" + ps.name + "' clamps particle size in screen space (min " + r.minParticleSize +
                              " / max " + r.maxParticleSize + "); Cocos has no such clamp, so very close/far particles will look different.");

            if (r.pivot != Vector3.zero)
                _warnings.Add("'" + ps.name + "' offsets the billboard pivot to " + r.pivot +
                              "; Cocos always pivots at the centre.");

            if (r.flip != Vector3.zero)
                _warnings.Add("'" + ps.name + "' randomly flips particles; Cocos has no Flip option.");

            if (r.sortMode != ParticleSystemSortMode.None)
                o.Set("sortMode", r.sortMode.ToString());

            return o;
        }

        CocosMaterialDesc RegisterMaterial(Material mat)
        {
            var desc = CocosMaterialAnalyzer.Analyze(mat, _assets.RegisterTexture, _warnings);
            CocosMaterialDesc existing;
            if (_materials.TryGetValue(desc.key, out existing)) return existing;
            _materials[desc.key] = desc;
            return desc;
        }

        // ==================================================================
        //  Speed-profile estimation used by the "by speed" bake
        // ==================================================================

        /// <summary>
        /// Rough speed of an average particle at normalised age t. Accounts for start
        /// speed, gravity and velocity-over-lifetime; ignores collisions and noise.
        /// </summary>
        float[] SpeedProfile(ParticleSystem ps, int samples)
        {
            var m = ps.main;
            var v = ps.velocityOverLifetime;
            float life = Mathf.Max(0.0001f, CocosCurveBaker.EvalAvg(m.startLifetime, 0.5f));
            float v0 = CocosCurveBaker.EvalAvg(m.startSpeed, 0.5f);

            var result = new float[samples];
            for (int i = 0; i < samples; i++)
            {
                float t = samples == 1 ? 0f : (float)i / (samples - 1);
                float g = CocosCurveBaker.EvalAvg(m.gravityModifier, t) * Physics.gravity.y;
                float speed = Mathf.Abs(v0 + g * t * life);

                if (v.enabled)
                {
                    float vx = CocosCurveBaker.EvalAvg(v.x, t);
                    float vy = CocosCurveBaker.EvalAvg(v.y, t);
                    float vz = CocosCurveBaker.EvalAvg(v.z, t);
                    speed += new Vector3(vx, vy, vz).magnitude;
                    speed *= Mathf.Max(0f, CocosCurveBaker.EvalAvg(v.speedModifier, t));
                }
                result[i] = speed;
            }
            return result;
        }

        float[] BakeScalarBySpeed(ParticleSystem ps, ParticleSystem.MinMaxCurve baseCurve,
                                  ParticleSystem.MinMaxCurve bySpeedCurve, Vector2 range, bool baseEnabled)
        {
            int n = Mathf.Max(2, _s.speedBakeSamples);
            float[] speed = SpeedProfile(ps, n);
            var outv = new float[n];
            for (int i = 0; i < n; i++)
            {
                float t = (float)i / (n - 1);
                float k = Mathf.Approximately(range.y, range.x)
                    ? 0f : Mathf.Clamp01((speed[i] - range.x) / (range.y - range.x));
                float b = baseEnabled ? CocosCurveBaker.EvalAvg(baseCurve, t) : 1f;
                outv[i] = b * CocosCurveBaker.EvalAvg(bySpeedCurve, k);
            }
            return outv;
        }

        float[] BakeAngularBySpeed(ParticleSystem ps, ParticleSystem.RotationOverLifetimeModule rol,
                                   ParticleSystem.RotationBySpeedModule rbs)
        {
            int n = Mathf.Max(2, _s.speedBakeSamples);
            float[] speed = SpeedProfile(ps, n);
            var outv = new float[n];
            Vector2 range = rbs.range;
            for (int i = 0; i < n; i++)
            {
                float t = (float)i / (n - 1);
                float k = Mathf.Approximately(range.y, range.x)
                    ? 0f : Mathf.Clamp01((speed[i] - range.x) / (range.y - range.x));
                float baseRot = rol.enabled ? CocosCurveBaker.EvalAvg(rol.z, t) : 0f;
                // Radians/second in Unity and in Cocos alike; only mirror Z.
                outv[i] = (baseRot + CocosCurveBaker.EvalAvg(rbs.z, k)) * Z;
            }
            return outv;
        }

        Gradient BakeColorBySpeed(ParticleSystem ps, ParticleSystem.ColorOverLifetimeModule col,
                                  ParticleSystem.ColorBySpeedModule bySpeed)
        {
            int n = Mathf.Clamp(_s.speedBakeSamples, 2, 8);   // UnityEngine.Gradient allows max 8 keys
            float[] speed = SpeedProfile(ps, n);
            Vector2 range = bySpeed.range;

            var ck = new GradientColorKey[n];
            var ak = new GradientAlphaKey[n];
            for (int i = 0; i < n; i++)
            {
                float t = (float)i / (n - 1);
                float k = Mathf.Approximately(range.y, range.x)
                    ? 0f : Mathf.Clamp01((speed[i] - range.x) / (range.y - range.x));
                Color a = col.enabled ? EvalGradient(col.color, t) : Color.white;
                Color b = EvalGradient(bySpeed.color, k);
                Color c = a * b;
                ck[i] = new GradientColorKey(new Color(c.r, c.g, c.b, 1f), t);
                ak[i] = new GradientAlphaKey(c.a, t);
            }
            var g = new Gradient();
            g.SetKeys(ck, ak);
            return g;
        }

        static Color EvalGradient(ParticleSystem.MinMaxGradient g, float t)
        {
            switch (g.mode)
            {
                case ParticleSystemGradientMode.Color: return g.color;
                case ParticleSystemGradientMode.TwoColors: return Color.Lerp(g.colorMin, g.colorMax, 0.5f);
                case ParticleSystemGradientMode.Gradient:
                case ParticleSystemGradientMode.RandomColor:
                    return g.gradient != null ? g.gradient.Evaluate(t) : Color.white;
                case ParticleSystemGradientMode.TwoGradients:
                    Color lo = g.gradientMin != null ? g.gradientMin.Evaluate(t) : Color.white;
                    Color hi = g.gradientMax != null ? g.gradientMax.Evaluate(t) : Color.white;
                    return Color.Lerp(lo, hi, 0.5f);
            }
            return Color.white;
        }

        // ==================================================================
        //  Diagnostics for modules Cocos simply does not have
        // ==================================================================

        void ReportUnsupported(ParticleSystem ps)
        {
            if (ps.inheritVelocity.enabled)
                _warnings.Add("'" + ps.name + "' uses Inherit Velocity, which needs a moving emitter; Cocos has no such module.");
            if (ps.collision.enabled)
                _warnings.Add("'" + ps.name + "' uses the Collision module; Cocos particles do not collide.");
            if (ps.trigger.enabled)
                _warnings.Add("'" + ps.name + "' uses Triggers; not available in Cocos.");
            if (ps.lights.enabled)
                _warnings.Add("'" + ps.name + "' spawns Lights; not available in Cocos.");
            if (ps.externalForces.enabled)
                _warnings.Add("'" + ps.name + "' reacts to External Forces (wind zones); Cocos has no equivalent - use Force over Lifetime instead.");
            if (ps.customData.enabled)
                _warnings.Add("'" + ps.name + "' writes Custom Data streams; these are shader-specific and were dropped.");
            if (ps.main.ringBufferMode != ParticleSystemRingBufferMode.Disabled)
                _warnings.Add("'" + ps.name + "' uses Ring Buffer mode; Cocos always recycles by lifetime.");
            if (ps.main.emitterVelocityMode != ParticleSystemEmitterVelocityMode.Transform)
                _warnings.Add("'" + ps.name + "' overrides Emitter Velocity mode; ignored on export.");
        }

        // ==================================================================
        //  Small helpers
        // ==================================================================

        /// <summary>Position/direction: mirrored across XY when converting handedness.</summary>
        JArr Vec3(Vector3 v)
        {
            return JArr.Of(v.x, v.y, v.z * Z);
        }

        /// <summary>Verbatim, for values that were already mirrored (euler angles).</summary>
        static JArr Vec3Raw(Vector3 v)
        {
            return JArr.Of(v.x, v.y, v.z);
        }

        /// <summary>Mirrors a rotation across XY when converting handedness.</summary>
        JArr Quat(Quaternion q)
        {
            return _s.convertHandedness
                ? JArr.Of(-q.x, -q.y, q.z, q.w)
                : JArr.Of(q.x, q.y, q.z, q.w);
        }

        Vector3 EulerFor(Quaternion q)
        {
            Vector3 e = q.eulerAngles;
            return _s.convertHandedness ? new Vector3(-e.x, -e.y, e.z) : e;
        }

        /// <summary>Shape rotation is authored in degrees; mirror pitch/yaw for RH.</summary>
        Vector3 ShapeEuler(Vector3 e)
        {
            return _s.convertHandedness ? new Vector3(-e.x, -e.y, e.z) : e;
        }

        static bool HasAnyValue(ParticleSystem.MinMaxCurve c)
        {
            return Mathf.Abs(CocosCurveBaker.EvalAvg(c, 0f)) > 1e-4f ||
                   Mathf.Abs(CocosCurveBaker.EvalAvg(c, 0.5f)) > 1e-4f ||
                   Mathf.Abs(CocosCurveBaker.EvalAvg(c, 1f)) > 1e-4f;
        }

        /// <summary>Scale of <paramref name="t"/> expressed relative to the export root.</summary>
        static Vector3 RelativeScale(Transform t, Transform root)
        {
            Vector3 a = t.lossyScale, b = root.lossyScale;
            return new Vector3(
                Mathf.Abs(b.x) > 1e-6f ? a.x / b.x : a.x,
                Mathf.Abs(b.y) > 1e-6f ? a.y / b.y : a.y,
                Mathf.Abs(b.z) > 1e-6f ? a.z / b.z : a.z);
        }

        /// <summary>A node counts as inactive if anything between it and the root is off.</summary>
        static bool IsActiveUnderRoot(Transform t, Transform root)
        {
            for (Transform cur = t; cur != null; cur = cur.parent)
            {
                if (!cur.gameObject.activeSelf) return false;
                if (cur == root) break;
            }
            return true;
        }

        static string PathOf(Transform t, Transform root)
        {
            if (t == root) return "";
            var stack = new List<string>();
            Transform cur = t;
            while (cur != null && cur != root)
            {
                stack.Add(cur.name);
                cur = cur.parent;
            }
            stack.Reverse();
            return string.Join("/", stack.ToArray());
        }

        static Transform FindByPath(Transform root, string path)
        {
            if (string.IsNullOrEmpty(path)) return root;
            return root.Find(path);
        }
    }
}
