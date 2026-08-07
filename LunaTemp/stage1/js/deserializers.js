var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i2710 = root || request.c( 'UnityEngine.JointSpring' )
  var i2711 = data
  i2710.spring = i2711[0]
  i2710.damper = i2711[1]
  i2710.targetPosition = i2711[2]
  return i2710
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i2712 = root || request.c( 'UnityEngine.JointMotor' )
  var i2713 = data
  i2712.m_TargetVelocity = i2713[0]
  i2712.m_Force = i2713[1]
  i2712.m_FreeSpin = i2713[2]
  return i2712
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i2714 = root || request.c( 'UnityEngine.JointLimits' )
  var i2715 = data
  i2714.m_Min = i2715[0]
  i2714.m_Max = i2715[1]
  i2714.m_Bounciness = i2715[2]
  i2714.m_BounceMinVelocity = i2715[3]
  i2714.m_ContactDistance = i2715[4]
  i2714.minBounce = i2715[5]
  i2714.maxBounce = i2715[6]
  return i2714
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i2716 = root || request.c( 'UnityEngine.JointDrive' )
  var i2717 = data
  i2716.m_PositionSpring = i2717[0]
  i2716.m_PositionDamper = i2717[1]
  i2716.m_MaximumForce = i2717[2]
  i2716.m_UseAcceleration = i2717[3]
  return i2716
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i2718 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i2719 = data
  i2718.m_Spring = i2719[0]
  i2718.m_Damper = i2719[1]
  return i2718
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i2720 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i2721 = data
  i2720.m_Limit = i2721[0]
  i2720.m_Bounciness = i2721[1]
  i2720.m_ContactDistance = i2721[2]
  return i2720
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i2722 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i2723 = data
  i2722.m_ExtremumSlip = i2723[0]
  i2722.m_ExtremumValue = i2723[1]
  i2722.m_AsymptoteSlip = i2723[2]
  i2722.m_AsymptoteValue = i2723[3]
  i2722.m_Stiffness = i2723[4]
  return i2722
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i2724 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i2725 = data
  i2724.m_LowerAngle = i2725[0]
  i2724.m_UpperAngle = i2725[1]
  return i2724
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i2726 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i2727 = data
  i2726.m_MotorSpeed = i2727[0]
  i2726.m_MaximumMotorTorque = i2727[1]
  return i2726
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i2728 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i2729 = data
  i2728.m_DampingRatio = i2729[0]
  i2728.m_Frequency = i2729[1]
  i2728.m_Angle = i2729[2]
  return i2728
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i2730 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i2731 = data
  i2730.m_LowerTranslation = i2731[0]
  i2730.m_UpperTranslation = i2731[1]
  return i2730
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i2732 = root || new pc.UnityMaterial()
  var i2733 = data
  i2732.name = i2733[0]
  request.r(i2733[1], i2733[2], 0, i2732, 'shader')
  i2732.renderQueue = i2733[3]
  i2732.enableInstancing = !!i2733[4]
  var i2735 = i2733[5]
  var i2734 = []
  for(var i = 0; i < i2735.length; i += 1) {
    i2734.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i2735[i + 0]) );
  }
  i2732.floatParameters = i2734
  var i2737 = i2733[6]
  var i2736 = []
  for(var i = 0; i < i2737.length; i += 1) {
    i2736.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i2737[i + 0]) );
  }
  i2732.colorParameters = i2736
  var i2739 = i2733[7]
  var i2738 = []
  for(var i = 0; i < i2739.length; i += 1) {
    i2738.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i2739[i + 0]) );
  }
  i2732.vectorParameters = i2738
  var i2741 = i2733[8]
  var i2740 = []
  for(var i = 0; i < i2741.length; i += 1) {
    i2740.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i2741[i + 0]) );
  }
  i2732.textureParameters = i2740
  var i2743 = i2733[9]
  var i2742 = []
  for(var i = 0; i < i2743.length; i += 1) {
    i2742.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i2743[i + 0]) );
  }
  i2732.materialFlags = i2742
  return i2732
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i2746 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i2747 = data
  i2746.name = i2747[0]
  i2746.value = i2747[1]
  return i2746
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i2750 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i2751 = data
  i2750.name = i2751[0]
  i2750.value = new pc.Color(i2751[1], i2751[2], i2751[3], i2751[4])
  return i2750
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i2754 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i2755 = data
  i2754.name = i2755[0]
  i2754.value = new pc.Vec4( i2755[1], i2755[2], i2755[3], i2755[4] )
  return i2754
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i2758 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i2759 = data
  i2758.name = i2759[0]
  request.r(i2759[1], i2759[2], 0, i2758, 'value')
  return i2758
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i2762 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i2763 = data
  i2762.name = i2763[0]
  i2762.enabled = !!i2763[1]
  return i2762
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i2764 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i2765 = data
  i2764.name = i2765[0]
  i2764.width = i2765[1]
  i2764.height = i2765[2]
  i2764.mipmapCount = i2765[3]
  i2764.anisoLevel = i2765[4]
  i2764.filterMode = i2765[5]
  i2764.hdr = !!i2765[6]
  i2764.format = i2765[7]
  i2764.wrapMode = i2765[8]
  i2764.alphaIsTransparency = !!i2765[9]
  i2764.alphaSource = i2765[10]
  i2764.graphicsFormat = i2765[11]
  i2764.sRGBTexture = !!i2765[12]
  i2764.desiredColorSpace = i2765[13]
  i2764.wrapU = i2765[14]
  i2764.wrapV = i2765[15]
  return i2764
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i2766 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i2767 = data
  i2766.name = i2767[0]
  i2766.halfPrecision = !!i2767[1]
  i2766.useSimplification = !!i2767[2]
  i2766.useUInt32IndexFormat = !!i2767[3]
  i2766.vertexCount = i2767[4]
  i2766.aabb = i2767[5]
  var i2769 = i2767[6]
  var i2768 = []
  for(var i = 0; i < i2769.length; i += 1) {
    i2768.push( !!i2769[i + 0] );
  }
  i2766.streams = i2768
  i2766.vertices = i2767[7]
  var i2771 = i2767[8]
  var i2770 = []
  for(var i = 0; i < i2771.length; i += 1) {
    i2770.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i2771[i + 0]) );
  }
  i2766.subMeshes = i2770
  var i2773 = i2767[9]
  var i2772 = []
  for(var i = 0; i < i2773.length; i += 16) {
    i2772.push( new pc.Mat4().setData(i2773[i + 0], i2773[i + 1], i2773[i + 2], i2773[i + 3],  i2773[i + 4], i2773[i + 5], i2773[i + 6], i2773[i + 7],  i2773[i + 8], i2773[i + 9], i2773[i + 10], i2773[i + 11],  i2773[i + 12], i2773[i + 13], i2773[i + 14], i2773[i + 15]) );
  }
  i2766.bindposes = i2772
  var i2775 = i2767[10]
  var i2774 = []
  for(var i = 0; i < i2775.length; i += 1) {
    i2774.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i2775[i + 0]) );
  }
  i2766.blendShapes = i2774
  return i2766
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i2780 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i2781 = data
  i2780.triangles = i2781[0]
  return i2780
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i2786 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i2787 = data
  i2786.name = i2787[0]
  var i2789 = i2787[1]
  var i2788 = []
  for(var i = 0; i < i2789.length; i += 1) {
    i2788.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i2789[i + 0]) );
  }
  i2786.frames = i2788
  return i2786
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i2790 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i2791 = data
  i2790.name = i2791[0]
  i2790.index = i2791[1]
  i2790.startup = !!i2791[2]
  return i2790
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i2792 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i2793 = data
  i2792.aspect = i2793[0]
  i2792.orthographic = !!i2793[1]
  i2792.orthographicSize = i2793[2]
  i2792.backgroundColor = new pc.Color(i2793[3], i2793[4], i2793[5], i2793[6])
  i2792.nearClipPlane = i2793[7]
  i2792.farClipPlane = i2793[8]
  i2792.fieldOfView = i2793[9]
  i2792.depth = i2793[10]
  i2792.clearFlags = i2793[11]
  i2792.cullingMask = i2793[12]
  i2792.rect = i2793[13]
  request.r(i2793[14], i2793[15], 0, i2792, 'targetTexture')
  i2792.usePhysicalProperties = !!i2793[16]
  i2792.focalLength = i2793[17]
  i2792.sensorSize = new pc.Vec2( i2793[18], i2793[19] )
  i2792.lensShift = new pc.Vec2( i2793[20], i2793[21] )
  i2792.gateFit = i2793[22]
  i2792.commandBufferCount = i2793[23]
  i2792.cameraType = i2793[24]
  i2792.enabled = !!i2793[25]
  return i2792
}

Deserializers["CameraFollow2D"] = function (request, data, root) {
  var i2794 = root || request.c( 'CameraFollow2D' )
  var i2795 = data
  request.r(i2795[0], i2795[1], 0, i2794, 'target')
  i2794.smoothSpeed = i2795[2]
  i2794.offset = new pc.Vec3( i2795[3], i2795[4], i2795[5] )
  i2794.followY = !!i2795[6]
  return i2794
}

Deserializers["AutoCameraFit"] = function (request, data, root) {
  var i2796 = root || request.c( 'AutoCameraFit' )
  var i2797 = data
  request.r(i2797[0], i2797[1], 0, i2796, 'tallScreenObject')
  i2796.tallScreenRatioThreshold = i2797[2]
  i2796.tallScreenYOffset = i2797[3]
  request.r(i2797[4], i2797[5], 0, i2796, 'canvasBtn')
  request.r(i2797[6], i2797[7], 0, i2796, 'targetArea')
  i2796.paddingLandscape = i2797[8]
  i2796.paddingPortrait = i2797[9]
  i2796.extraPaddingSmallScreen = i2797[10]
  i2796.smallScreenThreshold = i2797[11]
  i2796.autoUpdateOnResize = !!i2797[12]
  i2796.adjustInEditMode = !!i2797[13]
  return i2796
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i2798 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i2799 = data
  i2798.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i2799[0], i2798.main)
  i2798.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i2799[1], i2798.colorBySpeed)
  i2798.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i2799[2], i2798.colorOverLifetime)
  i2798.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i2799[3], i2798.emission)
  i2798.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i2799[4], i2798.rotationBySpeed)
  i2798.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i2799[5], i2798.rotationOverLifetime)
  i2798.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i2799[6], i2798.shape)
  i2798.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i2799[7], i2798.sizeBySpeed)
  i2798.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i2799[8], i2798.sizeOverLifetime)
  i2798.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i2799[9], i2798.textureSheetAnimation)
  i2798.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i2799[10], i2798.velocityOverLifetime)
  i2798.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i2799[11], i2798.noise)
  i2798.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i2799[12], i2798.inheritVelocity)
  i2798.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i2799[13], i2798.forceOverLifetime)
  i2798.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i2799[14], i2798.limitVelocityOverLifetime)
  i2798.useAutoRandomSeed = !!i2799[15]
  i2798.randomSeed = i2799[16]
  return i2798
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i2800 = root || new pc.ParticleSystemMain()
  var i2801 = data
  i2800.duration = i2801[0]
  i2800.loop = !!i2801[1]
  i2800.prewarm = !!i2801[2]
  i2800.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2801[3], i2800.startDelay)
  i2800.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2801[4], i2800.startLifetime)
  i2800.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2801[5], i2800.startSpeed)
  i2800.startSize3D = !!i2801[6]
  i2800.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2801[7], i2800.startSizeX)
  i2800.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2801[8], i2800.startSizeY)
  i2800.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2801[9], i2800.startSizeZ)
  i2800.startRotation3D = !!i2801[10]
  i2800.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2801[11], i2800.startRotationX)
  i2800.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2801[12], i2800.startRotationY)
  i2800.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2801[13], i2800.startRotationZ)
  i2800.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2801[14], i2800.startColor)
  i2800.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2801[15], i2800.gravityModifier)
  i2800.simulationSpace = i2801[16]
  request.r(i2801[17], i2801[18], 0, i2800, 'customSimulationSpace')
  i2800.simulationSpeed = i2801[19]
  i2800.useUnscaledTime = !!i2801[20]
  i2800.scalingMode = i2801[21]
  i2800.playOnAwake = !!i2801[22]
  i2800.maxParticles = i2801[23]
  i2800.emitterVelocityMode = i2801[24]
  i2800.stopAction = i2801[25]
  return i2800
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i2802 = root || new pc.MinMaxCurve()
  var i2803 = data
  i2802.mode = i2803[0]
  i2802.curveMin = new pc.AnimationCurve( { keys_flow: i2803[1] } )
  i2802.curveMax = new pc.AnimationCurve( { keys_flow: i2803[2] } )
  i2802.curveMultiplier = i2803[3]
  i2802.constantMin = i2803[4]
  i2802.constantMax = i2803[5]
  return i2802
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i2804 = root || new pc.MinMaxGradient()
  var i2805 = data
  i2804.mode = i2805[0]
  i2804.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2805[1], i2804.gradientMin)
  i2804.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2805[2], i2804.gradientMax)
  i2804.colorMin = new pc.Color(i2805[3], i2805[4], i2805[5], i2805[6])
  i2804.colorMax = new pc.Color(i2805[7], i2805[8], i2805[9], i2805[10])
  return i2804
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i2806 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i2807 = data
  i2806.mode = i2807[0]
  var i2809 = i2807[1]
  var i2808 = []
  for(var i = 0; i < i2809.length; i += 1) {
    i2808.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i2809[i + 0]) );
  }
  i2806.colorKeys = i2808
  var i2811 = i2807[2]
  var i2810 = []
  for(var i = 0; i < i2811.length; i += 1) {
    i2810.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i2811[i + 0]) );
  }
  i2806.alphaKeys = i2810
  return i2806
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i2812 = root || new pc.ParticleSystemColorBySpeed()
  var i2813 = data
  i2812.enabled = !!i2813[0]
  i2812.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2813[1], i2812.color)
  i2812.range = new pc.Vec2( i2813[2], i2813[3] )
  return i2812
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i2816 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i2817 = data
  i2816.color = new pc.Color(i2817[0], i2817[1], i2817[2], i2817[3])
  i2816.time = i2817[4]
  return i2816
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i2820 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i2821 = data
  i2820.alpha = i2821[0]
  i2820.time = i2821[1]
  return i2820
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i2822 = root || new pc.ParticleSystemColorOverLifetime()
  var i2823 = data
  i2822.enabled = !!i2823[0]
  i2822.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2823[1], i2822.color)
  return i2822
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i2824 = root || new pc.ParticleSystemEmitter()
  var i2825 = data
  i2824.enabled = !!i2825[0]
  i2824.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2825[1], i2824.rateOverTime)
  i2824.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2825[2], i2824.rateOverDistance)
  var i2827 = i2825[3]
  var i2826 = []
  for(var i = 0; i < i2827.length; i += 1) {
    i2826.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i2827[i + 0]) );
  }
  i2824.bursts = i2826
  return i2824
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i2830 = root || new pc.ParticleSystemBurst()
  var i2831 = data
  i2830.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2831[0], i2830.count)
  i2830.cycleCount = i2831[1]
  i2830.minCount = i2831[2]
  i2830.maxCount = i2831[3]
  i2830.repeatInterval = i2831[4]
  i2830.time = i2831[5]
  return i2830
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i2832 = root || new pc.ParticleSystemRotationBySpeed()
  var i2833 = data
  i2832.enabled = !!i2833[0]
  i2832.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2833[1], i2832.x)
  i2832.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2833[2], i2832.y)
  i2832.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2833[3], i2832.z)
  i2832.separateAxes = !!i2833[4]
  i2832.range = new pc.Vec2( i2833[5], i2833[6] )
  return i2832
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i2834 = root || new pc.ParticleSystemRotationOverLifetime()
  var i2835 = data
  i2834.enabled = !!i2835[0]
  i2834.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2835[1], i2834.x)
  i2834.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2835[2], i2834.y)
  i2834.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2835[3], i2834.z)
  i2834.separateAxes = !!i2835[4]
  return i2834
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i2836 = root || new pc.ParticleSystemShape()
  var i2837 = data
  i2836.enabled = !!i2837[0]
  i2836.shapeType = i2837[1]
  i2836.randomDirectionAmount = i2837[2]
  i2836.sphericalDirectionAmount = i2837[3]
  i2836.randomPositionAmount = i2837[4]
  i2836.alignToDirection = !!i2837[5]
  i2836.radius = i2837[6]
  i2836.radiusMode = i2837[7]
  i2836.radiusSpread = i2837[8]
  i2836.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2837[9], i2836.radiusSpeed)
  i2836.radiusThickness = i2837[10]
  i2836.angle = i2837[11]
  i2836.length = i2837[12]
  i2836.boxThickness = new pc.Vec3( i2837[13], i2837[14], i2837[15] )
  i2836.meshShapeType = i2837[16]
  request.r(i2837[17], i2837[18], 0, i2836, 'mesh')
  request.r(i2837[19], i2837[20], 0, i2836, 'meshRenderer')
  request.r(i2837[21], i2837[22], 0, i2836, 'skinnedMeshRenderer')
  i2836.useMeshMaterialIndex = !!i2837[23]
  i2836.meshMaterialIndex = i2837[24]
  i2836.useMeshColors = !!i2837[25]
  i2836.normalOffset = i2837[26]
  i2836.arc = i2837[27]
  i2836.arcMode = i2837[28]
  i2836.arcSpread = i2837[29]
  i2836.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2837[30], i2836.arcSpeed)
  i2836.donutRadius = i2837[31]
  i2836.position = new pc.Vec3( i2837[32], i2837[33], i2837[34] )
  i2836.rotation = new pc.Vec3( i2837[35], i2837[36], i2837[37] )
  i2836.scale = new pc.Vec3( i2837[38], i2837[39], i2837[40] )
  return i2836
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i2838 = root || new pc.ParticleSystemSizeBySpeed()
  var i2839 = data
  i2838.enabled = !!i2839[0]
  i2838.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2839[1], i2838.x)
  i2838.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2839[2], i2838.y)
  i2838.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2839[3], i2838.z)
  i2838.separateAxes = !!i2839[4]
  i2838.range = new pc.Vec2( i2839[5], i2839[6] )
  return i2838
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i2840 = root || new pc.ParticleSystemSizeOverLifetime()
  var i2841 = data
  i2840.enabled = !!i2841[0]
  i2840.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2841[1], i2840.x)
  i2840.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2841[2], i2840.y)
  i2840.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2841[3], i2840.z)
  i2840.separateAxes = !!i2841[4]
  return i2840
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i2842 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i2843 = data
  i2842.enabled = !!i2843[0]
  i2842.mode = i2843[1]
  i2842.animation = i2843[2]
  i2842.numTilesX = i2843[3]
  i2842.numTilesY = i2843[4]
  i2842.useRandomRow = !!i2843[5]
  i2842.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2843[6], i2842.frameOverTime)
  i2842.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2843[7], i2842.startFrame)
  i2842.cycleCount = i2843[8]
  i2842.rowIndex = i2843[9]
  i2842.flipU = i2843[10]
  i2842.flipV = i2843[11]
  i2842.spriteCount = i2843[12]
  var i2845 = i2843[13]
  var i2844 = []
  for(var i = 0; i < i2845.length; i += 2) {
  request.r(i2845[i + 0], i2845[i + 1], 2, i2844, '')
  }
  i2842.sprites = i2844
  return i2842
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i2848 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i2849 = data
  i2848.enabled = !!i2849[0]
  i2848.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2849[1], i2848.x)
  i2848.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2849[2], i2848.y)
  i2848.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2849[3], i2848.z)
  i2848.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2849[4], i2848.radial)
  i2848.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2849[5], i2848.speedModifier)
  i2848.space = i2849[6]
  i2848.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2849[7], i2848.orbitalX)
  i2848.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2849[8], i2848.orbitalY)
  i2848.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2849[9], i2848.orbitalZ)
  i2848.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2849[10], i2848.orbitalOffsetX)
  i2848.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2849[11], i2848.orbitalOffsetY)
  i2848.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2849[12], i2848.orbitalOffsetZ)
  return i2848
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i2850 = root || new pc.ParticleSystemNoise()
  var i2851 = data
  i2850.enabled = !!i2851[0]
  i2850.separateAxes = !!i2851[1]
  i2850.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2851[2], i2850.strengthX)
  i2850.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2851[3], i2850.strengthY)
  i2850.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2851[4], i2850.strengthZ)
  i2850.frequency = i2851[5]
  i2850.damping = !!i2851[6]
  i2850.octaveCount = i2851[7]
  i2850.octaveMultiplier = i2851[8]
  i2850.octaveScale = i2851[9]
  i2850.quality = i2851[10]
  i2850.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2851[11], i2850.scrollSpeed)
  i2850.scrollSpeedMultiplier = i2851[12]
  i2850.remapEnabled = !!i2851[13]
  i2850.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2851[14], i2850.remapX)
  i2850.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2851[15], i2850.remapY)
  i2850.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2851[16], i2850.remapZ)
  i2850.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2851[17], i2850.positionAmount)
  i2850.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2851[18], i2850.rotationAmount)
  i2850.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2851[19], i2850.sizeAmount)
  return i2850
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i2852 = root || new pc.ParticleSystemInheritVelocity()
  var i2853 = data
  i2852.enabled = !!i2853[0]
  i2852.mode = i2853[1]
  i2852.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2853[2], i2852.curve)
  return i2852
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i2854 = root || new pc.ParticleSystemForceOverLifetime()
  var i2855 = data
  i2854.enabled = !!i2855[0]
  i2854.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2855[1], i2854.x)
  i2854.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2855[2], i2854.y)
  i2854.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2855[3], i2854.z)
  i2854.space = i2855[4]
  i2854.randomized = !!i2855[5]
  return i2854
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i2856 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i2857 = data
  i2856.enabled = !!i2857[0]
  i2856.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2857[1], i2856.limit)
  i2856.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2857[2], i2856.limitX)
  i2856.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2857[3], i2856.limitY)
  i2856.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2857[4], i2856.limitZ)
  i2856.dampen = i2857[5]
  i2856.separateAxes = !!i2857[6]
  i2856.space = i2857[7]
  i2856.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2857[8], i2856.drag)
  i2856.multiplyDragByParticleSize = !!i2857[9]
  i2856.multiplyDragByParticleVelocity = !!i2857[10]
  return i2856
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i2858 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i2859 = data
  request.r(i2859[0], i2859[1], 0, i2858, 'mesh')
  i2858.meshCount = i2859[2]
  i2858.activeVertexStreamsCount = i2859[3]
  i2858.alignment = i2859[4]
  i2858.renderMode = i2859[5]
  i2858.sortMode = i2859[6]
  i2858.lengthScale = i2859[7]
  i2858.velocityScale = i2859[8]
  i2858.cameraVelocityScale = i2859[9]
  i2858.normalDirection = i2859[10]
  i2858.sortingFudge = i2859[11]
  i2858.minParticleSize = i2859[12]
  i2858.maxParticleSize = i2859[13]
  i2858.pivot = new pc.Vec3( i2859[14], i2859[15], i2859[16] )
  request.r(i2859[17], i2859[18], 0, i2858, 'trailMaterial')
  i2858.applyActiveColorSpace = !!i2859[19]
  i2858.enabled = !!i2859[20]
  request.r(i2859[21], i2859[22], 0, i2858, 'sharedMaterial')
  var i2861 = i2859[23]
  var i2860 = []
  for(var i = 0; i < i2861.length; i += 2) {
  request.r(i2861[i + 0], i2861[i + 1], 2, i2860, '')
  }
  i2858.sharedMaterials = i2860
  i2858.receiveShadows = !!i2859[24]
  i2858.shadowCastingMode = i2859[25]
  i2858.sortingLayerID = i2859[26]
  i2858.sortingOrder = i2859[27]
  i2858.lightmapIndex = i2859[28]
  i2858.lightmapSceneIndex = i2859[29]
  i2858.lightmapScaleOffset = new pc.Vec4( i2859[30], i2859[31], i2859[32], i2859[33] )
  i2858.lightProbeUsage = i2859[34]
  i2858.reflectionProbeUsage = i2859[35]
  return i2858
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i2864 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i2865 = data
  i2864.name = i2865[0]
  i2864.tagId = i2865[1]
  i2864.enabled = !!i2865[2]
  i2864.isStatic = !!i2865[3]
  i2864.layer = i2865[4]
  return i2864
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i2866 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i2867 = data
  i2866.color = new pc.Color(i2867[0], i2867[1], i2867[2], i2867[3])
  request.r(i2867[4], i2867[5], 0, i2866, 'sprite')
  i2866.flipX = !!i2867[6]
  i2866.flipY = !!i2867[7]
  i2866.drawMode = i2867[8]
  i2866.size = new pc.Vec2( i2867[9], i2867[10] )
  i2866.tileMode = i2867[11]
  i2866.adaptiveModeThreshold = i2867[12]
  i2866.maskInteraction = i2867[13]
  i2866.spriteSortPoint = i2867[14]
  i2866.enabled = !!i2867[15]
  request.r(i2867[16], i2867[17], 0, i2866, 'sharedMaterial')
  var i2869 = i2867[18]
  var i2868 = []
  for(var i = 0; i < i2869.length; i += 2) {
  request.r(i2869[i + 0], i2869[i + 1], 2, i2868, '')
  }
  i2866.sharedMaterials = i2868
  i2866.receiveShadows = !!i2867[19]
  i2866.shadowCastingMode = i2867[20]
  i2866.sortingLayerID = i2867[21]
  i2866.sortingOrder = i2867[22]
  i2866.lightmapIndex = i2867[23]
  i2866.lightmapSceneIndex = i2867[24]
  i2866.lightmapScaleOffset = new pc.Vec4( i2867[25], i2867[26], i2867[27], i2867[28] )
  i2866.lightProbeUsage = i2867[29]
  i2866.reflectionProbeUsage = i2867[30]
  return i2866
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i2870 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i2871 = data
  request.r(i2871[0], i2871[1], 0, i2870, 'animatorController')
  request.r(i2871[2], i2871[3], 0, i2870, 'avatar')
  i2870.updateMode = i2871[4]
  i2870.hasTransformHierarchy = !!i2871[5]
  i2870.applyRootMotion = !!i2871[6]
  var i2873 = i2871[7]
  var i2872 = []
  for(var i = 0; i < i2873.length; i += 2) {
  request.r(i2873[i + 0], i2873[i + 1], 2, i2872, '')
  }
  i2870.humanBones = i2872
  i2870.enabled = !!i2871[8]
  return i2870
}

Deserializers["MoveBetweenPoints"] = function (request, data, root) {
  var i2876 = root || request.c( 'MoveBetweenPoints' )
  var i2877 = data
  request.r(i2877[0], i2877[1], 0, i2876, 'pointA')
  request.r(i2877[2], i2877[3], 0, i2876, 'pointB')
  i2876.duration = i2877[4]
  return i2876
}

Deserializers["PlayerCardUIManager"] = function (request, data, root) {
  var i2878 = root || request.c( 'PlayerCardUIManager' )
  var i2879 = data
  request.r(i2879[0], i2879[1], 0, i2878, 'cardPanel')
  var i2881 = i2879[2]
  var i2880 = []
  for(var i = 0; i < i2881.length; i += 2) {
  request.r(i2881[i + 0], i2881[i + 1], 2, i2880, '')
  }
  i2878.extraObjectsToActivate = i2880
  i2878.waitTime = i2879[3]
  var i2883 = i2879[4]
  var i2882 = []
  for(var i = 0; i < i2883.length; i += 2) {
  request.r(i2883[i + 0], i2883[i + 1], 2, i2882, '')
  }
  i2878.objectsToTurnOnAfterWait = i2882
  var i2885 = i2879[5]
  var i2884 = []
  for(var i = 0; i < i2885.length; i += 2) {
  request.r(i2885[i + 0], i2885[i + 1], 2, i2884, '')
  }
  i2878.objectsToTurnOffAfterWait = i2884
  request.r(i2879[6], i2879[7], 0, i2878, 'playerNameText')
  request.r(i2879[8], i2879[9], 0, i2878, 'playerImage')
  return i2878
}

Deserializers["Ply_SoundManager"] = function (request, data, root) {
  var i2888 = root || request.c( 'Ply_SoundManager' )
  var i2889 = data
  i2888.fxAudio = request.d('FxAudio', i2889[0], i2888.fxAudio)
  request.r(i2889[1], i2889[2], 0, i2888, 'bgm1')
  return i2888
}

Deserializers["FxAudio"] = function (request, data, root) {
  var i2890 = root || request.c( 'FxAudio' )
  var i2891 = data
  i2890.ClickBox = request.d('SoundData', i2891[0], i2890.ClickBox)
  i2890.Happy = request.d('SoundData', i2891[1], i2890.Happy)
  i2890.Wrong = request.d('SoundData', i2891[2], i2890.Wrong)
  i2890.Spray = request.d('SoundData', i2891[3], i2890.Spray)
  i2890.Brush = request.d('SoundData', i2891[4], i2890.Brush)
  i2890.Keo = request.d('SoundData', i2891[5], i2890.Keo)
  i2890.Confetti = request.d('SoundData', i2891[6], i2890.Confetti)
  i2890.Lose2 = request.d('SoundData', i2891[7], i2890.Lose2)
  return i2890
}

Deserializers["SoundData"] = function (request, data, root) {
  var i2892 = root || request.c( 'SoundData' )
  var i2893 = data
  request.r(i2893[0], i2893[1], 0, i2892, 'clip')
  i2892.repeatCount = i2893[2]
  return i2892
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i2894 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i2895 = data
  request.r(i2895[0], i2895[1], 0, i2894, 'clip')
  request.r(i2895[2], i2895[3], 0, i2894, 'outputAudioMixerGroup')
  i2894.playOnAwake = !!i2895[4]
  i2894.loop = !!i2895[5]
  i2894.time = i2895[6]
  i2894.volume = i2895[7]
  i2894.pitch = i2895[8]
  i2894.enabled = !!i2895[9]
  return i2894
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i2896 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i2897 = data
  i2896.pivot = new pc.Vec2( i2897[0], i2897[1] )
  i2896.anchorMin = new pc.Vec2( i2897[2], i2897[3] )
  i2896.anchorMax = new pc.Vec2( i2897[4], i2897[5] )
  i2896.sizeDelta = new pc.Vec2( i2897[6], i2897[7] )
  i2896.anchoredPosition3D = new pc.Vec3( i2897[8], i2897[9], i2897[10] )
  i2896.rotation = new pc.Quat(i2897[11], i2897[12], i2897[13], i2897[14])
  i2896.scale = new pc.Vec3( i2897[15], i2897[16], i2897[17] )
  return i2896
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i2898 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i2899 = data
  i2898.planeDistance = i2899[0]
  i2898.referencePixelsPerUnit = i2899[1]
  i2898.isFallbackOverlay = !!i2899[2]
  i2898.renderMode = i2899[3]
  i2898.renderOrder = i2899[4]
  i2898.sortingLayerName = i2899[5]
  i2898.sortingOrder = i2899[6]
  i2898.scaleFactor = i2899[7]
  request.r(i2899[8], i2899[9], 0, i2898, 'worldCamera')
  i2898.overrideSorting = !!i2899[10]
  i2898.pixelPerfect = !!i2899[11]
  i2898.targetDisplay = i2899[12]
  i2898.overridePixelPerfect = !!i2899[13]
  i2898.enabled = !!i2899[14]
  return i2898
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i2900 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i2901 = data
  i2900.m_UiScaleMode = i2901[0]
  i2900.m_ReferencePixelsPerUnit = i2901[1]
  i2900.m_ScaleFactor = i2901[2]
  i2900.m_ReferenceResolution = new pc.Vec2( i2901[3], i2901[4] )
  i2900.m_ScreenMatchMode = i2901[5]
  i2900.m_MatchWidthOrHeight = i2901[6]
  i2900.m_PhysicalUnit = i2901[7]
  i2900.m_FallbackScreenDPI = i2901[8]
  i2900.m_DefaultSpriteDPI = i2901[9]
  i2900.m_DynamicPixelsPerUnit = i2901[10]
  i2900.m_PresetInfoIsWorld = !!i2901[11]
  return i2900
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i2902 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i2903 = data
  i2902.m_IgnoreReversedGraphics = !!i2903[0]
  i2902.m_BlockingObjects = i2903[1]
  i2902.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i2903[2] )
  return i2902
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i2904 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i2905 = data
  i2904.cullTransparentMesh = !!i2905[0]
  return i2904
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i2906 = root || request.c( 'UnityEngine.UI.Image' )
  var i2907 = data
  request.r(i2907[0], i2907[1], 0, i2906, 'm_Sprite')
  i2906.m_Type = i2907[2]
  i2906.m_PreserveAspect = !!i2907[3]
  i2906.m_FillCenter = !!i2907[4]
  i2906.m_FillMethod = i2907[5]
  i2906.m_FillAmount = i2907[6]
  i2906.m_FillClockwise = !!i2907[7]
  i2906.m_FillOrigin = i2907[8]
  i2906.m_UseSpriteMesh = !!i2907[9]
  i2906.m_PixelsPerUnitMultiplier = i2907[10]
  request.r(i2907[11], i2907[12], 0, i2906, 'm_Material')
  i2906.m_Maskable = !!i2907[13]
  i2906.m_Color = new pc.Color(i2907[14], i2907[15], i2907[16], i2907[17])
  i2906.m_RaycastTarget = !!i2907[18]
  i2906.m_RaycastPadding = new pc.Vec4( i2907[19], i2907[20], i2907[21], i2907[22] )
  return i2906
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i2908 = root || request.c( 'UnityEngine.UI.Button' )
  var i2909 = data
  i2908.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i2909[0], i2908.m_OnClick)
  i2908.m_Navigation = request.d('UnityEngine.UI.Navigation', i2909[1], i2908.m_Navigation)
  i2908.m_Transition = i2909[2]
  i2908.m_Colors = request.d('UnityEngine.UI.ColorBlock', i2909[3], i2908.m_Colors)
  i2908.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i2909[4], i2908.m_SpriteState)
  i2908.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i2909[5], i2908.m_AnimationTriggers)
  i2908.m_Interactable = !!i2909[6]
  request.r(i2909[7], i2909[8], 0, i2908, 'm_TargetGraphic')
  return i2908
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i2910 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i2911 = data
  i2910.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2911[0], i2910.m_PersistentCalls)
  return i2910
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i2912 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i2913 = data
  var i2915 = i2913[0]
  var i2914 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i2915.length; i += 1) {
    i2914.add(request.d('UnityEngine.Events.PersistentCall', i2915[i + 0]));
  }
  i2912.m_Calls = i2914
  return i2912
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i2918 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i2919 = data
  request.r(i2919[0], i2919[1], 0, i2918, 'm_Target')
  i2918.m_TargetAssemblyTypeName = i2919[2]
  i2918.m_MethodName = i2919[3]
  i2918.m_Mode = i2919[4]
  i2918.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i2919[5], i2918.m_Arguments)
  i2918.m_CallState = i2919[6]
  return i2918
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i2920 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i2921 = data
  request.r(i2921[0], i2921[1], 0, i2920, 'm_ObjectArgument')
  i2920.m_ObjectArgumentAssemblyTypeName = i2921[2]
  i2920.m_IntArgument = i2921[3]
  i2920.m_FloatArgument = i2921[4]
  i2920.m_StringArgument = i2921[5]
  i2920.m_BoolArgument = !!i2921[6]
  return i2920
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i2922 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i2923 = data
  i2922.m_Mode = i2923[0]
  i2922.m_WrapAround = !!i2923[1]
  request.r(i2923[2], i2923[3], 0, i2922, 'm_SelectOnUp')
  request.r(i2923[4], i2923[5], 0, i2922, 'm_SelectOnDown')
  request.r(i2923[6], i2923[7], 0, i2922, 'm_SelectOnLeft')
  request.r(i2923[8], i2923[9], 0, i2922, 'm_SelectOnRight')
  return i2922
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i2924 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i2925 = data
  i2924.m_NormalColor = new pc.Color(i2925[0], i2925[1], i2925[2], i2925[3])
  i2924.m_HighlightedColor = new pc.Color(i2925[4], i2925[5], i2925[6], i2925[7])
  i2924.m_PressedColor = new pc.Color(i2925[8], i2925[9], i2925[10], i2925[11])
  i2924.m_SelectedColor = new pc.Color(i2925[12], i2925[13], i2925[14], i2925[15])
  i2924.m_DisabledColor = new pc.Color(i2925[16], i2925[17], i2925[18], i2925[19])
  i2924.m_ColorMultiplier = i2925[20]
  i2924.m_FadeDuration = i2925[21]
  return i2924
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i2926 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i2927 = data
  request.r(i2927[0], i2927[1], 0, i2926, 'm_HighlightedSprite')
  request.r(i2927[2], i2927[3], 0, i2926, 'm_PressedSprite')
  request.r(i2927[4], i2927[5], 0, i2926, 'm_SelectedSprite')
  request.r(i2927[6], i2927[7], 0, i2926, 'm_DisabledSprite')
  return i2926
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i2928 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i2929 = data
  i2928.m_NormalTrigger = i2929[0]
  i2928.m_HighlightedTrigger = i2929[1]
  i2928.m_PressedTrigger = i2929[2]
  i2928.m_SelectedTrigger = i2929[3]
  i2928.m_DisabledTrigger = i2929[4]
  return i2928
}

Deserializers["HairCutController"] = function (request, data, root) {
  var i2930 = root || request.c( 'HairCutController' )
  var i2931 = data
  request.r(i2931[0], i2931[1], 0, i2930, 'scissors')
  request.r(i2931[2], i2931[3], 0, i2930, 'scissorsAnimator')
  request.r(i2931[4], i2931[5], 0, i2930, 'targetAnimatorToDisable')
  request.r(i2931[6], i2931[7], 0, i2930, 'linePointA')
  request.r(i2931[8], i2931[9], 0, i2930, 'linePointB')
  i2930.scissorMoveDuration = i2931[10]
  var i2933 = i2931[11]
  var i2932 = []
  for(var i = 0; i < i2933.length; i += 2) {
  request.r(i2933[i + 0], i2933[i + 1], 2, i2932, '')
  }
  i2930.allMasks = i2932
  request.r(i2931[12], i2931[13], 0, i2930, 'fallingHairParent')
  var i2935 = i2931[14]
  var i2934 = []
  for(var i = 0; i < i2935.length; i += 2) {
  request.r(i2935[i + 0], i2935[i + 1], 2, i2934, '')
  }
  i2930.fallingHairRenderers = i2934
  request.r(i2931[15], i2931[16], 0, i2930, 'scissorsCollider')
  request.r(i2931[17], i2931[18], 0, i2930, 'targetCollider')
  request.r(i2931[19], i2931[20], 0, i2930, 'winObjectToEnable')
  var i2937 = i2931[21]
  var i2936 = []
  for(var i = 0; i < i2937.length; i += 2) {
  request.r(i2937[i + 0], i2937[i + 1], 2, i2936, '')
  }
  i2930.winObjectsToEnable = i2936
  request.r(i2931[22], i2931[23], 0, i2930, 'winObjectToDisable')
  var i2939 = i2931[24]
  var i2938 = []
  for(var i = 0; i < i2939.length; i += 2) {
  request.r(i2939[i + 0], i2939[i + 1], 2, i2938, '')
  }
  i2930.winObjectsToDisable = i2938
  request.r(i2931[25], i2931[26], 0, i2930, 'lossSpriteRenderer')
  request.r(i2931[27], i2931[28], 0, i2930, 'lossSprite')
  request.r(i2931[29], i2931[30], 0, i2930, 'lossObjectToEnable')
  var i2941 = i2931[31]
  var i2940 = []
  for(var i = 0; i < i2941.length; i += 2) {
  request.r(i2941[i + 0], i2941[i + 1], 2, i2940, '')
  }
  i2930.lossObjectsToEnable = i2940
  i2930.endDelay = i2931[32]
  i2930.immediateEndGameOnLoss = !!i2931[33]
  var i2943 = i2931[34]
  var i2942 = []
  for(var i = 0; i < i2943.length; i += 2) {
  request.r(i2943[i + 0], i2943[i + 1], 2, i2942, '')
  }
  i2930.afterEndDisableObjects = i2942
  var i2945 = i2931[35]
  var i2944 = []
  for(var i = 0; i < i2945.length; i += 2) {
  request.r(i2945[i + 0], i2945[i + 1], 2, i2944, '')
  }
  i2930.afterEndEnableObjects = i2944
  request.r(i2931[36], i2931[37], 0, i2930, 'tutObject')
  request.r(i2931[38], i2931[39], 0, i2930, 'animatorToEnableOnFirstTap')
  i2930.firstTapTriggerName = i2931[40]
  request.r(i2931[41], i2931[42], 0, i2930, 'objectToDisableOnComplete')
  var i2947 = i2931[43]
  var i2946 = []
  for(var i = 0; i < i2947.length; i += 2) {
  request.r(i2947[i + 0], i2947[i + 1], 2, i2946, '')
  }
  i2930.objectsToDisableOnComplete = i2946
  i2930.fallDistance = i2931[44]
  i2930.fallDuration = i2931[45]
  i2930.fadeDuration = i2931[46]
  return i2930
}

Deserializers["HideOnFirstClick"] = function (request, data, root) {
  var i2952 = root || request.c( 'HideOnFirstClick' )
  var i2953 = data
  request.r(i2953[0], i2953[1], 0, i2952, 'objectToHide')
  return i2952
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteMask"] = function (request, data, root) {
  var i2954 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteMask' )
  var i2955 = data
  i2954.frontSortingLayerID = i2955[0]
  i2954.frontSortingOrder = i2955[1]
  i2954.backSortingLayerID = i2955[2]
  i2954.backSortingOrder = i2955[3]
  i2954.alphaCutoff = i2955[4]
  request.r(i2955[5], i2955[6], 0, i2954, 'sprite')
  i2954.tileMode = i2955[7]
  i2954.isCustomRangeActive = !!i2955[8]
  i2954.spriteSortPoint = i2955[9]
  i2954.enabled = !!i2955[10]
  request.r(i2955[11], i2955[12], 0, i2954, 'sharedMaterial')
  var i2957 = i2955[13]
  var i2956 = []
  for(var i = 0; i < i2957.length; i += 2) {
  request.r(i2957[i + 0], i2957[i + 1], 2, i2956, '')
  }
  i2954.sharedMaterials = i2956
  i2954.receiveShadows = !!i2955[14]
  i2954.shadowCastingMode = i2955[15]
  i2954.sortingLayerID = i2955[16]
  i2954.sortingOrder = i2955[17]
  i2954.lightmapIndex = i2955[18]
  i2954.lightmapSceneIndex = i2955[19]
  i2954.lightmapScaleOffset = new pc.Vec4( i2955[20], i2955[21], i2955[22], i2955[23] )
  i2954.lightProbeUsage = i2955[24]
  i2954.reflectionProbeUsage = i2955[25]
  return i2954
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i2958 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i2959 = data
  i2958.usedByComposite = !!i2959[0]
  i2958.autoTiling = !!i2959[1]
  i2958.size = new pc.Vec2( i2959[2], i2959[3] )
  i2958.edgeRadius = i2959[4]
  i2958.enabled = !!i2959[5]
  i2958.isTrigger = !!i2959[6]
  i2958.usedByEffector = !!i2959[7]
  i2958.density = i2959[8]
  i2958.offset = new pc.Vec2( i2959[9], i2959[10] )
  request.r(i2959[11], i2959[12], 0, i2958, 'material')
  return i2958
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i2960 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i2961 = data
  request.r(i2961[0], i2961[1], 0, i2960, 'm_FirstSelected')
  i2960.m_sendNavigationEvents = !!i2961[2]
  i2960.m_DragThreshold = i2961[3]
  return i2960
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i2962 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i2963 = data
  i2962.m_HorizontalAxis = i2963[0]
  i2962.m_VerticalAxis = i2963[1]
  i2962.m_SubmitButton = i2963[2]
  i2962.m_CancelButton = i2963[3]
  i2962.m_InputActionsPerSecond = i2963[4]
  i2962.m_RepeatDelay = i2963[5]
  i2962.m_ForceModuleActive = !!i2963[6]
  i2962.m_SendPointerHoverToParent = !!i2963[7]
  return i2962
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i2964 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i2965 = data
  i2964.ambientIntensity = i2965[0]
  i2964.reflectionIntensity = i2965[1]
  i2964.ambientMode = i2965[2]
  i2964.ambientLight = new pc.Color(i2965[3], i2965[4], i2965[5], i2965[6])
  i2964.ambientSkyColor = new pc.Color(i2965[7], i2965[8], i2965[9], i2965[10])
  i2964.ambientGroundColor = new pc.Color(i2965[11], i2965[12], i2965[13], i2965[14])
  i2964.ambientEquatorColor = new pc.Color(i2965[15], i2965[16], i2965[17], i2965[18])
  i2964.fogColor = new pc.Color(i2965[19], i2965[20], i2965[21], i2965[22])
  i2964.fogEndDistance = i2965[23]
  i2964.fogStartDistance = i2965[24]
  i2964.fogDensity = i2965[25]
  i2964.fog = !!i2965[26]
  request.r(i2965[27], i2965[28], 0, i2964, 'skybox')
  i2964.fogMode = i2965[29]
  var i2967 = i2965[30]
  var i2966 = []
  for(var i = 0; i < i2967.length; i += 1) {
    i2966.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i2967[i + 0]) );
  }
  i2964.lightmaps = i2966
  i2964.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i2965[31], i2964.lightProbes)
  i2964.lightmapsMode = i2965[32]
  i2964.mixedBakeMode = i2965[33]
  i2964.environmentLightingMode = i2965[34]
  i2964.ambientProbe = new pc.SphericalHarmonicsL2(i2965[35])
  i2964.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i2965[36])
  i2964.useReferenceAmbientProbe = !!i2965[37]
  request.r(i2965[38], i2965[39], 0, i2964, 'customReflection')
  request.r(i2965[40], i2965[41], 0, i2964, 'defaultReflection')
  i2964.defaultReflectionMode = i2965[42]
  i2964.defaultReflectionResolution = i2965[43]
  i2964.sunLightObjectId = i2965[44]
  i2964.pixelLightCount = i2965[45]
  i2964.defaultReflectionHDR = !!i2965[46]
  i2964.hasLightDataAsset = !!i2965[47]
  i2964.hasManualGenerate = !!i2965[48]
  return i2964
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i2970 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i2971 = data
  request.r(i2971[0], i2971[1], 0, i2970, 'lightmapColor')
  request.r(i2971[2], i2971[3], 0, i2970, 'lightmapDirection')
  request.r(i2971[4], i2971[5], 0, i2970, 'shadowMask')
  return i2970
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i2972 = root || new UnityEngine.LightProbes()
  var i2973 = data
  return i2972
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i2980 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i2981 = data
  var i2983 = i2981[0]
  var i2982 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i2983.length; i += 1) {
    i2982.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i2983[i + 0]));
  }
  i2980.ShaderCompilationErrors = i2982
  i2980.name = i2981[1]
  i2980.guid = i2981[2]
  var i2985 = i2981[3]
  var i2984 = []
  for(var i = 0; i < i2985.length; i += 1) {
    i2984.push( i2985[i + 0] );
  }
  i2980.shaderDefinedKeywords = i2984
  var i2987 = i2981[4]
  var i2986 = []
  for(var i = 0; i < i2987.length; i += 1) {
    i2986.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i2987[i + 0]) );
  }
  i2980.passes = i2986
  var i2989 = i2981[5]
  var i2988 = []
  for(var i = 0; i < i2989.length; i += 1) {
    i2988.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i2989[i + 0]) );
  }
  i2980.usePasses = i2988
  var i2991 = i2981[6]
  var i2990 = []
  for(var i = 0; i < i2991.length; i += 1) {
    i2990.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i2991[i + 0]) );
  }
  i2980.defaultParameterValues = i2990
  request.r(i2981[7], i2981[8], 0, i2980, 'unityFallbackShader')
  i2980.readDepth = !!i2981[9]
  i2980.hasDepthOnlyPass = !!i2981[10]
  i2980.isCreatedByShaderGraph = !!i2981[11]
  i2980.disableBatching = !!i2981[12]
  i2980.compiled = !!i2981[13]
  return i2980
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i2994 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i2995 = data
  i2994.shaderName = i2995[0]
  i2994.errorMessage = i2995[1]
  return i2994
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i3000 = root || new pc.UnityShaderPass()
  var i3001 = data
  i3000.id = i3001[0]
  i3000.subShaderIndex = i3001[1]
  i3000.name = i3001[2]
  i3000.passType = i3001[3]
  i3000.grabPassTextureName = i3001[4]
  i3000.usePass = !!i3001[5]
  i3000.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3001[6], i3000.zTest)
  i3000.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3001[7], i3000.zWrite)
  i3000.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3001[8], i3000.culling)
  i3000.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i3001[9], i3000.blending)
  i3000.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i3001[10], i3000.alphaBlending)
  i3000.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3001[11], i3000.colorWriteMask)
  i3000.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3001[12], i3000.offsetUnits)
  i3000.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3001[13], i3000.offsetFactor)
  i3000.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3001[14], i3000.stencilRef)
  i3000.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3001[15], i3000.stencilReadMask)
  i3000.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3001[16], i3000.stencilWriteMask)
  i3000.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3001[17], i3000.stencilOp)
  i3000.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3001[18], i3000.stencilOpFront)
  i3000.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3001[19], i3000.stencilOpBack)
  var i3003 = i3001[20]
  var i3002 = []
  for(var i = 0; i < i3003.length; i += 1) {
    i3002.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i3003[i + 0]) );
  }
  i3000.tags = i3002
  var i3005 = i3001[21]
  var i3004 = []
  for(var i = 0; i < i3005.length; i += 1) {
    i3004.push( i3005[i + 0] );
  }
  i3000.passDefinedKeywords = i3004
  var i3007 = i3001[22]
  var i3006 = []
  for(var i = 0; i < i3007.length; i += 1) {
    i3006.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i3007[i + 0]) );
  }
  i3000.passDefinedKeywordGroups = i3006
  var i3009 = i3001[23]
  var i3008 = []
  for(var i = 0; i < i3009.length; i += 1) {
    i3008.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i3009[i + 0]) );
  }
  i3000.variants = i3008
  var i3011 = i3001[24]
  var i3010 = []
  for(var i = 0; i < i3011.length; i += 1) {
    i3010.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i3011[i + 0]) );
  }
  i3000.excludedVariants = i3010
  i3000.hasDepthReader = !!i3001[25]
  return i3000
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i3012 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i3013 = data
  i3012.val = i3013[0]
  i3012.name = i3013[1]
  return i3012
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i3014 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i3015 = data
  i3014.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3015[0], i3014.src)
  i3014.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3015[1], i3014.dst)
  i3014.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3015[2], i3014.op)
  return i3014
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i3016 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i3017 = data
  i3016.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3017[0], i3016.pass)
  i3016.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3017[1], i3016.fail)
  i3016.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3017[2], i3016.zFail)
  i3016.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3017[3], i3016.comp)
  return i3016
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i3020 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i3021 = data
  i3020.name = i3021[0]
  i3020.value = i3021[1]
  return i3020
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i3024 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i3025 = data
  var i3027 = i3025[0]
  var i3026 = []
  for(var i = 0; i < i3027.length; i += 1) {
    i3026.push( i3027[i + 0] );
  }
  i3024.keywords = i3026
  i3024.hasDiscard = !!i3025[1]
  return i3024
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i3030 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i3031 = data
  i3030.passId = i3031[0]
  i3030.subShaderIndex = i3031[1]
  var i3033 = i3031[2]
  var i3032 = []
  for(var i = 0; i < i3033.length; i += 1) {
    i3032.push( i3033[i + 0] );
  }
  i3030.keywords = i3032
  i3030.vertexProgram = i3031[3]
  i3030.fragmentProgram = i3031[4]
  i3030.exportedForWebGl2 = !!i3031[5]
  i3030.readDepth = !!i3031[6]
  return i3030
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i3036 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i3037 = data
  request.r(i3037[0], i3037[1], 0, i3036, 'shader')
  i3036.pass = i3037[2]
  return i3036
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i3040 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i3041 = data
  i3040.name = i3041[0]
  i3040.type = i3041[1]
  i3040.value = new pc.Vec4( i3041[2], i3041[3], i3041[4], i3041[5] )
  i3040.textureValue = i3041[6]
  i3040.shaderPropertyFlag = i3041[7]
  return i3040
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i3042 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i3043 = data
  i3042.name = i3043[0]
  request.r(i3043[1], i3043[2], 0, i3042, 'texture')
  i3042.aabb = i3043[3]
  i3042.vertices = i3043[4]
  i3042.triangles = i3043[5]
  i3042.textureRect = UnityEngine.Rect.MinMaxRect(i3043[6], i3043[7], i3043[8], i3043[9])
  i3042.packedRect = UnityEngine.Rect.MinMaxRect(i3043[10], i3043[11], i3043[12], i3043[13])
  i3042.border = new pc.Vec4( i3043[14], i3043[15], i3043[16], i3043[17] )
  i3042.transparency = i3043[18]
  i3042.bounds = i3043[19]
  i3042.pixelsPerUnit = i3043[20]
  i3042.textureWidth = i3043[21]
  i3042.textureHeight = i3043[22]
  i3042.nativeSize = new pc.Vec2( i3043[23], i3043[24] )
  i3042.pivot = new pc.Vec2( i3043[25], i3043[26] )
  i3042.textureRectOffset = new pc.Vec2( i3043[27], i3043[28] )
  return i3042
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i3044 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i3045 = data
  i3044.name = i3045[0]
  return i3044
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i3046 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i3047 = data
  i3046.name = i3047[0]
  i3046.wrapMode = i3047[1]
  i3046.isLooping = !!i3047[2]
  i3046.length = i3047[3]
  var i3049 = i3047[4]
  var i3048 = []
  for(var i = 0; i < i3049.length; i += 1) {
    i3048.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i3049[i + 0]) );
  }
  i3046.curves = i3048
  var i3051 = i3047[5]
  var i3050 = []
  for(var i = 0; i < i3051.length; i += 1) {
    i3050.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i3051[i + 0]) );
  }
  i3046.events = i3050
  i3046.halfPrecision = !!i3047[6]
  i3046._frameRate = i3047[7]
  i3046.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i3047[8], i3046.localBounds)
  i3046.hasMuscleCurves = !!i3047[9]
  var i3053 = i3047[10]
  var i3052 = []
  for(var i = 0; i < i3053.length; i += 1) {
    i3052.push( i3053[i + 0] );
  }
  i3046.clipMuscleConstant = i3052
  i3046.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i3047[11], i3046.clipBindingConstant)
  return i3046
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i3056 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i3057 = data
  i3056.path = i3057[0]
  i3056.hash = i3057[1]
  i3056.componentType = i3057[2]
  i3056.property = i3057[3]
  i3056.keys = i3057[4]
  var i3059 = i3057[5]
  var i3058 = []
  for(var i = 0; i < i3059.length; i += 1) {
    i3058.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i3059[i + 0]) );
  }
  i3056.objectReferenceKeys = i3058
  return i3056
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i3062 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i3063 = data
  i3062.time = i3063[0]
  request.r(i3063[1], i3063[2], 0, i3062, 'value')
  return i3062
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i3066 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i3067 = data
  i3066.functionName = i3067[0]
  i3066.floatParameter = i3067[1]
  i3066.intParameter = i3067[2]
  i3066.stringParameter = i3067[3]
  request.r(i3067[4], i3067[5], 0, i3066, 'objectReferenceParameter')
  i3066.time = i3067[6]
  return i3066
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i3068 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i3069 = data
  i3068.center = new pc.Vec3( i3069[0], i3069[1], i3069[2] )
  i3068.extends = new pc.Vec3( i3069[3], i3069[4], i3069[5] )
  return i3068
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i3072 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i3073 = data
  var i3075 = i3073[0]
  var i3074 = []
  for(var i = 0; i < i3075.length; i += 1) {
    i3074.push( i3075[i + 0] );
  }
  i3072.genericBindings = i3074
  var i3077 = i3073[1]
  var i3076 = []
  for(var i = 0; i < i3077.length; i += 1) {
    i3076.push( i3077[i + 0] );
  }
  i3072.pptrCurveMapping = i3076
  return i3072
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i3078 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i3079 = data
  i3078.name = i3079[0]
  var i3081 = i3079[1]
  var i3080 = []
  for(var i = 0; i < i3081.length; i += 1) {
    i3080.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i3081[i + 0]) );
  }
  i3078.layers = i3080
  var i3083 = i3079[2]
  var i3082 = []
  for(var i = 0; i < i3083.length; i += 1) {
    i3082.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i3083[i + 0]) );
  }
  i3078.parameters = i3082
  i3078.animationClips = i3079[3]
  i3078.avatarUnsupported = i3079[4]
  return i3078
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i3086 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i3087 = data
  i3086.name = i3087[0]
  i3086.defaultWeight = i3087[1]
  i3086.blendingMode = i3087[2]
  i3086.avatarMask = i3087[3]
  i3086.syncedLayerIndex = i3087[4]
  i3086.syncedLayerAffectsTiming = !!i3087[5]
  i3086.syncedLayers = i3087[6]
  i3086.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i3087[7], i3086.stateMachine)
  return i3086
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i3088 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i3089 = data
  i3088.id = i3089[0]
  i3088.name = i3089[1]
  i3088.path = i3089[2]
  var i3091 = i3089[3]
  var i3090 = []
  for(var i = 0; i < i3091.length; i += 1) {
    i3090.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i3091[i + 0]) );
  }
  i3088.states = i3090
  var i3093 = i3089[4]
  var i3092 = []
  for(var i = 0; i < i3093.length; i += 1) {
    i3092.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i3093[i + 0]) );
  }
  i3088.machines = i3092
  var i3095 = i3089[5]
  var i3094 = []
  for(var i = 0; i < i3095.length; i += 1) {
    i3094.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i3095[i + 0]) );
  }
  i3088.entryStateTransitions = i3094
  var i3097 = i3089[6]
  var i3096 = []
  for(var i = 0; i < i3097.length; i += 1) {
    i3096.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i3097[i + 0]) );
  }
  i3088.exitStateTransitions = i3096
  var i3099 = i3089[7]
  var i3098 = []
  for(var i = 0; i < i3099.length; i += 1) {
    i3098.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i3099[i + 0]) );
  }
  i3088.anyStateTransitions = i3098
  i3088.defaultStateId = i3089[8]
  return i3088
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i3102 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i3103 = data
  i3102.id = i3103[0]
  i3102.name = i3103[1]
  i3102.cycleOffset = i3103[2]
  i3102.cycleOffsetParameter = i3103[3]
  i3102.cycleOffsetParameterActive = !!i3103[4]
  i3102.mirror = !!i3103[5]
  i3102.mirrorParameter = i3103[6]
  i3102.mirrorParameterActive = !!i3103[7]
  i3102.motionId = i3103[8]
  i3102.nameHash = i3103[9]
  i3102.fullPathHash = i3103[10]
  i3102.speed = i3103[11]
  i3102.speedParameter = i3103[12]
  i3102.speedParameterActive = !!i3103[13]
  i3102.tag = i3103[14]
  i3102.tagHash = i3103[15]
  i3102.writeDefaultValues = !!i3103[16]
  var i3105 = i3103[17]
  var i3104 = []
  for(var i = 0; i < i3105.length; i += 2) {
  request.r(i3105[i + 0], i3105[i + 1], 2, i3104, '')
  }
  i3102.behaviours = i3104
  var i3107 = i3103[18]
  var i3106 = []
  for(var i = 0; i < i3107.length; i += 1) {
    i3106.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i3107[i + 0]) );
  }
  i3102.transitions = i3106
  return i3102
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i3112 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i3113 = data
  i3112.fullPath = i3113[0]
  i3112.canTransitionToSelf = !!i3113[1]
  i3112.duration = i3113[2]
  i3112.exitTime = i3113[3]
  i3112.hasExitTime = !!i3113[4]
  i3112.hasFixedDuration = !!i3113[5]
  i3112.interruptionSource = i3113[6]
  i3112.offset = i3113[7]
  i3112.orderedInterruption = !!i3113[8]
  i3112.destinationStateId = i3113[9]
  i3112.isExit = !!i3113[10]
  i3112.mute = !!i3113[11]
  i3112.solo = !!i3113[12]
  var i3115 = i3113[13]
  var i3114 = []
  for(var i = 0; i < i3115.length; i += 1) {
    i3114.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i3115[i + 0]) );
  }
  i3112.conditions = i3114
  return i3112
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i3120 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i3121 = data
  i3120.destinationStateId = i3121[0]
  i3120.isExit = !!i3121[1]
  i3120.mute = !!i3121[2]
  i3120.solo = !!i3121[3]
  var i3123 = i3121[4]
  var i3122 = []
  for(var i = 0; i < i3123.length; i += 1) {
    i3122.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i3123[i + 0]) );
  }
  i3120.conditions = i3122
  return i3120
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i3126 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i3127 = data
  i3126.defaultBool = !!i3127[0]
  i3126.defaultFloat = i3127[1]
  i3126.defaultInt = i3127[2]
  i3126.name = i3127[3]
  i3126.nameHash = i3127[4]
  i3126.type = i3127[5]
  return i3126
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i3130 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i3131 = data
  i3130.mode = i3131[0]
  i3130.parameter = i3131[1]
  i3130.threshold = i3131[2]
  return i3130
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i3132 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i3133 = data
  i3132.name = i3133[0]
  i3132.bytes64 = i3133[1]
  i3132.data = i3133[2]
  return i3132
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i3134 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i3135 = data
  i3134.useSafeMode = !!i3135[0]
  i3134.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i3135[1], i3134.safeModeOptions)
  i3134.timeScale = i3135[2]
  i3134.unscaledTimeScale = i3135[3]
  i3134.useSmoothDeltaTime = !!i3135[4]
  i3134.maxSmoothUnscaledTime = i3135[5]
  i3134.rewindCallbackMode = i3135[6]
  i3134.showUnityEditorReport = !!i3135[7]
  i3134.logBehaviour = i3135[8]
  i3134.drawGizmos = !!i3135[9]
  i3134.defaultRecyclable = !!i3135[10]
  i3134.defaultAutoPlay = i3135[11]
  i3134.defaultUpdateType = i3135[12]
  i3134.defaultTimeScaleIndependent = !!i3135[13]
  i3134.defaultEaseType = i3135[14]
  i3134.defaultEaseOvershootOrAmplitude = i3135[15]
  i3134.defaultEasePeriod = i3135[16]
  i3134.defaultAutoKill = !!i3135[17]
  i3134.defaultLoopType = i3135[18]
  i3134.debugMode = !!i3135[19]
  i3134.debugStoreTargetId = !!i3135[20]
  i3134.showPreviewPanel = !!i3135[21]
  i3134.storeSettingsLocation = i3135[22]
  i3134.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i3135[23], i3134.modules)
  i3134.createASMDEF = !!i3135[24]
  i3134.showPlayingTweens = !!i3135[25]
  i3134.showPausedTweens = !!i3135[26]
  return i3134
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i3136 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i3137 = data
  i3136.logBehaviour = i3137[0]
  i3136.nestedTweenFailureBehaviour = i3137[1]
  return i3136
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i3138 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i3139 = data
  i3138.showPanel = !!i3139[0]
  i3138.audioEnabled = !!i3139[1]
  i3138.physicsEnabled = !!i3139[2]
  i3138.physics2DEnabled = !!i3139[3]
  i3138.spriteEnabled = !!i3139[4]
  i3138.uiEnabled = !!i3139[5]
  i3138.uiToolkitEnabled = !!i3139[6]
  i3138.textMeshProEnabled = !!i3139[7]
  i3138.tk2DEnabled = !!i3139[8]
  i3138.deAudioEnabled = !!i3139[9]
  i3138.deUnityExtendedEnabled = !!i3139[10]
  i3138.epoOutlineEnabled = !!i3139[11]
  return i3138
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i3140 = root || request.c( 'TMPro.TMP_Settings' )
  var i3141 = data
  i3140.assetVersion = i3141[0]
  i3140.m_TextWrappingMode = i3141[1]
  i3140.m_enableKerning = !!i3141[2]
  var i3143 = i3141[3]
  var i3142 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i3143.length; i += 1) {
    i3142.add(i3143[i + 0]);
  }
  i3140.m_ActiveFontFeatures = i3142
  i3140.m_enableExtraPadding = !!i3141[4]
  i3140.m_enableTintAllSprites = !!i3141[5]
  i3140.m_enableParseEscapeCharacters = !!i3141[6]
  i3140.m_EnableRaycastTarget = !!i3141[7]
  i3140.m_GetFontFeaturesAtRuntime = !!i3141[8]
  i3140.m_missingGlyphCharacter = i3141[9]
  i3140.m_ClearDynamicDataOnBuild = !!i3141[10]
  i3140.m_warningsDisabled = !!i3141[11]
  request.r(i3141[12], i3141[13], 0, i3140, 'm_defaultFontAsset')
  i3140.m_defaultFontAssetPath = i3141[14]
  i3140.m_defaultFontSize = i3141[15]
  i3140.m_defaultAutoSizeMinRatio = i3141[16]
  i3140.m_defaultAutoSizeMaxRatio = i3141[17]
  i3140.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i3141[18], i3141[19] )
  i3140.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i3141[20], i3141[21] )
  i3140.m_autoSizeTextContainer = !!i3141[22]
  i3140.m_IsTextObjectScaleStatic = !!i3141[23]
  var i3145 = i3141[24]
  var i3144 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i3145.length; i += 2) {
  request.r(i3145[i + 0], i3145[i + 1], 1, i3144, '')
  }
  i3140.m_fallbackFontAssets = i3144
  i3140.m_matchMaterialPreset = !!i3141[25]
  i3140.m_HideSubTextObjects = !!i3141[26]
  request.r(i3141[27], i3141[28], 0, i3140, 'm_defaultSpriteAsset')
  i3140.m_defaultSpriteAssetPath = i3141[29]
  i3140.m_enableEmojiSupport = !!i3141[30]
  i3140.m_MissingCharacterSpriteUnicode = i3141[31]
  var i3147 = i3141[32]
  var i3146 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i3147.length; i += 2) {
  request.r(i3147[i + 0], i3147[i + 1], 1, i3146, '')
  }
  i3140.m_EmojiFallbackTextAssets = i3146
  i3140.m_defaultColorGradientPresetsPath = i3141[33]
  request.r(i3141[34], i3141[35], 0, i3140, 'm_defaultStyleSheet')
  i3140.m_StyleSheetsResourcePath = i3141[36]
  request.r(i3141[37], i3141[38], 0, i3140, 'm_leadingCharacters')
  request.r(i3141[39], i3141[40], 0, i3140, 'm_followingCharacters')
  i3140.m_UseModernHangulLineBreakingRules = !!i3141[41]
  return i3140
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i3154 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i3155 = data
  request.r(i3155[0], i3155[1], 0, i3154, 'spriteSheet')
  var i3157 = i3155[2]
  var i3156 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i3157.length; i += 1) {
    i3156.add(request.d('TMPro.TMP_Sprite', i3157[i + 0]));
  }
  i3154.spriteInfoList = i3156
  var i3159 = i3155[3]
  var i3158 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i3159.length; i += 2) {
  request.r(i3159[i + 0], i3159[i + 1], 1, i3158, '')
  }
  i3154.fallbackSpriteAssets = i3158
  var i3161 = i3155[4]
  var i3160 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i3161.length; i += 1) {
    i3160.add(request.d('TMPro.TMP_SpriteCharacter', i3161[i + 0]));
  }
  i3154.m_SpriteCharacterTable = i3160
  var i3163 = i3155[5]
  var i3162 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i3163.length; i += 1) {
    i3162.add(request.d('TMPro.TMP_SpriteGlyph', i3163[i + 0]));
  }
  i3154.m_GlyphTable = i3162
  i3154.m_Version = i3155[6]
  i3154.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i3155[7], i3154.m_FaceInfo)
  request.r(i3155[8], i3155[9], 0, i3154, 'm_Material')
  return i3154
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i3166 = root || request.c( 'TMPro.TMP_Sprite' )
  var i3167 = data
  i3166.name = i3167[0]
  i3166.hashCode = i3167[1]
  i3166.unicode = i3167[2]
  i3166.pivot = new pc.Vec2( i3167[3], i3167[4] )
  request.r(i3167[5], i3167[6], 0, i3166, 'sprite')
  i3166.id = i3167[7]
  i3166.x = i3167[8]
  i3166.y = i3167[9]
  i3166.width = i3167[10]
  i3166.height = i3167[11]
  i3166.xOffset = i3167[12]
  i3166.yOffset = i3167[13]
  i3166.xAdvance = i3167[14]
  i3166.scale = i3167[15]
  return i3166
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i3172 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i3173 = data
  i3172.m_Name = i3173[0]
  i3172.m_ElementType = i3173[1]
  i3172.m_Unicode = i3173[2]
  i3172.m_GlyphIndex = i3173[3]
  i3172.m_Scale = i3173[4]
  return i3172
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i3176 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i3177 = data
  request.r(i3177[0], i3177[1], 0, i3176, 'sprite')
  i3176.m_Index = i3177[2]
  i3176.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i3177[3], i3176.m_Metrics)
  i3176.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i3177[4], i3176.m_GlyphRect)
  i3176.m_Scale = i3177[5]
  i3176.m_AtlasIndex = i3177[6]
  i3176.m_ClassDefinitionType = i3177[7]
  return i3176
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i3178 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i3179 = data
  i3178.m_Width = i3179[0]
  i3178.m_Height = i3179[1]
  i3178.m_HorizontalBearingX = i3179[2]
  i3178.m_HorizontalBearingY = i3179[3]
  i3178.m_HorizontalAdvance = i3179[4]
  return i3178
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i3180 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i3181 = data
  i3180.m_X = i3181[0]
  i3180.m_Y = i3181[1]
  i3180.m_Width = i3181[2]
  i3180.m_Height = i3181[3]
  return i3180
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i3182 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i3183 = data
  i3182.m_FaceIndex = i3183[0]
  i3182.m_FamilyName = i3183[1]
  i3182.m_StyleName = i3183[2]
  i3182.m_PointSize = i3183[3]
  i3182.m_Scale = i3183[4]
  i3182.m_UnitsPerEM = i3183[5]
  i3182.m_LineHeight = i3183[6]
  i3182.m_AscentLine = i3183[7]
  i3182.m_CapLine = i3183[8]
  i3182.m_MeanLine = i3183[9]
  i3182.m_Baseline = i3183[10]
  i3182.m_DescentLine = i3183[11]
  i3182.m_SuperscriptOffset = i3183[12]
  i3182.m_SuperscriptSize = i3183[13]
  i3182.m_SubscriptOffset = i3183[14]
  i3182.m_SubscriptSize = i3183[15]
  i3182.m_UnderlineOffset = i3183[16]
  i3182.m_UnderlineThickness = i3183[17]
  i3182.m_StrikethroughOffset = i3183[18]
  i3182.m_StrikethroughThickness = i3183[19]
  i3182.m_TabWidth = i3183[20]
  return i3182
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i3184 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i3185 = data
  var i3187 = i3185[0]
  var i3186 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i3187.length; i += 1) {
    i3186.add(request.d('TMPro.TMP_Style', i3187[i + 0]));
  }
  i3184.m_StyleList = i3186
  return i3184
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i3190 = root || request.c( 'TMPro.TMP_Style' )
  var i3191 = data
  i3190.m_Name = i3191[0]
  i3190.m_HashCode = i3191[1]
  i3190.m_OpeningDefinition = i3191[2]
  i3190.m_ClosingDefinition = i3191[3]
  i3190.m_OpeningTagArray = i3191[4]
  i3190.m_ClosingTagArray = i3191[5]
  return i3190
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i3192 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i3193 = data
  var i3195 = i3193[0]
  var i3194 = []
  for(var i = 0; i < i3195.length; i += 1) {
    i3194.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i3195[i + 0]) );
  }
  i3192.files = i3194
  i3192.componentToPrefabIds = i3193[1]
  return i3192
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i3198 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i3199 = data
  i3198.path = i3199[0]
  request.r(i3199[1], i3199[2], 0, i3198, 'unityObject')
  return i3198
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i3200 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i3201 = data
  var i3203 = i3201[0]
  var i3202 = []
  for(var i = 0; i < i3203.length; i += 1) {
    i3202.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i3203[i + 0]) );
  }
  i3200.scriptsExecutionOrder = i3202
  var i3205 = i3201[1]
  var i3204 = []
  for(var i = 0; i < i3205.length; i += 1) {
    i3204.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i3205[i + 0]) );
  }
  i3200.sortingLayers = i3204
  var i3207 = i3201[2]
  var i3206 = []
  for(var i = 0; i < i3207.length; i += 1) {
    i3206.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i3207[i + 0]) );
  }
  i3200.cullingLayers = i3206
  i3200.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i3201[3], i3200.timeSettings)
  i3200.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i3201[4], i3200.physicsSettings)
  i3200.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i3201[5], i3200.physics2DSettings)
  i3200.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i3201[6], i3200.qualitySettings)
  i3200.enableRealtimeShadows = !!i3201[7]
  i3200.enableAutoInstancing = !!i3201[8]
  i3200.enableStaticBatching = !!i3201[9]
  i3200.enableDynamicBatching = !!i3201[10]
  i3200.lightmapEncodingQuality = i3201[11]
  i3200.desiredColorSpace = i3201[12]
  var i3209 = i3201[13]
  var i3208 = []
  for(var i = 0; i < i3209.length; i += 1) {
    i3208.push( i3209[i + 0] );
  }
  i3200.allTags = i3208
  return i3200
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i3212 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i3213 = data
  i3212.name = i3213[0]
  i3212.value = i3213[1]
  return i3212
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i3216 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i3217 = data
  i3216.id = i3217[0]
  i3216.name = i3217[1]
  i3216.value = i3217[2]
  return i3216
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i3220 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i3221 = data
  i3220.id = i3221[0]
  i3220.name = i3221[1]
  return i3220
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i3222 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i3223 = data
  i3222.fixedDeltaTime = i3223[0]
  i3222.maximumDeltaTime = i3223[1]
  i3222.timeScale = i3223[2]
  i3222.maximumParticleTimestep = i3223[3]
  return i3222
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i3224 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i3225 = data
  i3224.gravity = new pc.Vec3( i3225[0], i3225[1], i3225[2] )
  i3224.defaultSolverIterations = i3225[3]
  i3224.bounceThreshold = i3225[4]
  i3224.autoSyncTransforms = !!i3225[5]
  i3224.autoSimulation = !!i3225[6]
  var i3227 = i3225[7]
  var i3226 = []
  for(var i = 0; i < i3227.length; i += 1) {
    i3226.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i3227[i + 0]) );
  }
  i3224.collisionMatrix = i3226
  return i3224
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i3230 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i3231 = data
  i3230.enabled = !!i3231[0]
  i3230.layerId = i3231[1]
  i3230.otherLayerId = i3231[2]
  return i3230
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i3232 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i3233 = data
  request.r(i3233[0], i3233[1], 0, i3232, 'material')
  i3232.gravity = new pc.Vec2( i3233[2], i3233[3] )
  i3232.positionIterations = i3233[4]
  i3232.velocityIterations = i3233[5]
  i3232.velocityThreshold = i3233[6]
  i3232.maxLinearCorrection = i3233[7]
  i3232.maxAngularCorrection = i3233[8]
  i3232.maxTranslationSpeed = i3233[9]
  i3232.maxRotationSpeed = i3233[10]
  i3232.baumgarteScale = i3233[11]
  i3232.baumgarteTOIScale = i3233[12]
  i3232.timeToSleep = i3233[13]
  i3232.linearSleepTolerance = i3233[14]
  i3232.angularSleepTolerance = i3233[15]
  i3232.defaultContactOffset = i3233[16]
  i3232.autoSimulation = !!i3233[17]
  i3232.queriesHitTriggers = !!i3233[18]
  i3232.queriesStartInColliders = !!i3233[19]
  i3232.callbacksOnDisable = !!i3233[20]
  i3232.reuseCollisionCallbacks = !!i3233[21]
  i3232.autoSyncTransforms = !!i3233[22]
  var i3235 = i3233[23]
  var i3234 = []
  for(var i = 0; i < i3235.length; i += 1) {
    i3234.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i3235[i + 0]) );
  }
  i3232.collisionMatrix = i3234
  return i3232
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i3238 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i3239 = data
  i3238.enabled = !!i3239[0]
  i3238.layerId = i3239[1]
  i3238.otherLayerId = i3239[2]
  return i3238
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i3240 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i3241 = data
  var i3243 = i3241[0]
  var i3242 = []
  for(var i = 0; i < i3243.length; i += 1) {
    i3242.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i3243[i + 0]) );
  }
  i3240.qualityLevels = i3242
  var i3245 = i3241[1]
  var i3244 = []
  for(var i = 0; i < i3245.length; i += 1) {
    i3244.push( i3245[i + 0] );
  }
  i3240.names = i3244
  i3240.shadows = i3241[2]
  i3240.anisotropicFiltering = i3241[3]
  i3240.antiAliasing = i3241[4]
  i3240.lodBias = i3241[5]
  i3240.shadowCascades = i3241[6]
  i3240.shadowDistance = i3241[7]
  i3240.shadowmaskMode = i3241[8]
  i3240.shadowProjection = i3241[9]
  i3240.shadowResolution = i3241[10]
  i3240.softParticles = !!i3241[11]
  i3240.softVegetation = !!i3241[12]
  i3240.activeColorSpace = i3241[13]
  i3240.desiredColorSpace = i3241[14]
  i3240.masterTextureLimit = i3241[15]
  i3240.maxQueuedFrames = i3241[16]
  i3240.particleRaycastBudget = i3241[17]
  i3240.pixelLightCount = i3241[18]
  i3240.realtimeReflectionProbes = !!i3241[19]
  i3240.shadowCascade2Split = i3241[20]
  i3240.shadowCascade4Split = new pc.Vec3( i3241[21], i3241[22], i3241[23] )
  i3240.streamingMipmapsActive = !!i3241[24]
  i3240.vSyncCount = i3241[25]
  i3240.asyncUploadBufferSize = i3241[26]
  i3240.asyncUploadTimeSlice = i3241[27]
  i3240.billboardsFaceCameraPosition = !!i3241[28]
  i3240.shadowNearPlaneOffset = i3241[29]
  i3240.streamingMipmapsMemoryBudget = i3241[30]
  i3240.maximumLODLevel = i3241[31]
  i3240.streamingMipmapsAddAllCameras = !!i3241[32]
  i3240.streamingMipmapsMaxLevelReduction = i3241[33]
  i3240.streamingMipmapsRenderersPerFrame = i3241[34]
  i3240.resolutionScalingFixedDPIFactor = i3241[35]
  i3240.streamingMipmapsMaxFileIORequests = i3241[36]
  i3240.currentQualityLevel = i3241[37]
  return i3240
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i3250 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i3251 = data
  i3250.weight = i3251[0]
  i3250.vertices = i3251[1]
  i3250.normals = i3251[2]
  i3250.tangents = i3251[3]
  return i3250
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.SpriteMask":{"frontSortingLayerID":0,"frontSortingOrder":1,"backSortingLayerID":2,"backSortingOrder":3,"alphaCutoff":4,"sprite":5,"tileMode":7,"isCustomRangeActive":8,"spriteSortPoint":9,"enabled":10,"sharedMaterial":11,"sharedMaterials":13,"receiveShadows":14,"shadowCastingMode":15,"sortingLayerID":16,"sortingOrder":17,"lightmapIndex":18,"lightmapSceneIndex":19,"lightmapScaleOffset":20,"lightProbeUsage":24,"reflectionProbeUsage":25},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"42":[43],"44":[43],"45":[43],"46":[43],"47":[43],"48":[43],"49":[50],"51":[2],"52":[53],"54":[53],"55":[53],"56":[53],"57":[53],"58":[53],"59":[60],"61":[60],"62":[60],"63":[60],"64":[60],"65":[60],"66":[60],"67":[60],"68":[60],"69":[60],"70":[60],"71":[60],"72":[60],"73":[2],"74":[75],"76":[77],"78":[77],"23":[22],"6":[2],"79":[60],"80":[32],"81":[12],"82":[2],"83":[84],"85":[34],"86":[23],"87":[22],"88":[75,22],"89":[22,27],"90":[22],"91":[27,22],"92":[75],"93":[27,22],"94":[22],"95":[96],"97":[96],"98":[96],"99":[22],"100":[22],"26":[23],"28":[27,22],"101":[22],"25":[23],"102":[22],"103":[22],"104":[22],"105":[22],"106":[22],"107":[22],"108":[22],"109":[22],"110":[22],"111":[27,22],"112":[22],"113":[22],"114":[22],"115":[22],"116":[27,22],"117":[22],"118":[34],"119":[34],"35":[34],"120":[34],"121":[2],"122":[2]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.MonoBehaviour","CameraFollow2D","AutoCameraFit","UnityEngine.Transform","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Mesh","UnityEngine.Material","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","MoveBetweenPoints","PlayerCardUIManager","UnityEngine.GameObject","Ply_SoundManager","UnityEngine.AudioClip","UnityEngine.AudioSource","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.UI.Button","HairCutController","UnityEngine.SpriteMask","UnityEngine.BoxCollider2D","HideOnFirstClick","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_FontAsset","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","BatStrikeController","SlotTrigger","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.InputSystem.UI.InputSystemUIInputModule","UnityEngine.InputSystem.UI.TrackedDeviceRaycaster","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.38f1";

Deserializers.productName = "PLY_MiniSoccer";

Deserializers.lunaInitializationTime = "07/15/2026 03:53:54";

Deserializers.lunaDaysRunning = "23.2";

Deserializers.lunaVersion = "7.1.0";

Deserializers.lunaSHA = "cf93782349542fe0b84ad13951a26809f8419628";

Deserializers.creativeName = "PLY_V16";

Deserializers.lunaAppID = "40548";

Deserializers.projectId = "60d50cfced72ae74bb8c1682cb9abbe6";

Deserializers.packagesInfo = "com.unity.inputsystem: 1.13.0\ncom.unity.timeline: 1.8.7\ncom.unity.ugui: 2.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "True";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "True";

Deserializers.isRuntimeAnalysisEnabledForCode = "False";

Deserializers.runtimeAnalysisExcludedClassesCount = "1800";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4464";

Deserializers.runtimeAnalysisExcludedModules = "physics3d";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isReferenceAmbientProbeBaked = "False";

Deserializers.isLunaCompilerV2Used = "True";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "StandaloneWindows64";

Deserializers.applicationIdentifier = "com.DefaultCompany.PLY-MiniSoccer";

Deserializers.disableAntiAliasing = false;

Deserializers.graphicsConstraint = 24;

Deserializers.linearColorSpace = false;

Deserializers.buildID = "83cee9b0-117e-42bf-b590-8bdc74d3acb5";

Deserializers.runtimeInitializeOnLoadInfos = [[["Unity","Services","Core","Internal","UnityServicesInitializer","EnableServicesInitializationAsync"],["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["DG","Tweening","DOTween","RuntimeOnLoad"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["Unity","Services","Core","Registration","CorePackageInitializer","InitializeOnLoad"],["Unity","Services","Core","Internal","TaskAsyncOperation","SetScheduler"],["Unity","Services","Core","Environments","Client","Scheduler","EngineStateHelper","Init"],["Unity","Services","Core","Environments","Client","Scheduler","ThreadHelper","Init"],["Ua2CoreInitializeCallback","Register"],["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["Unity","AI","Navigation","NavMeshLink","ClearTrackedList"],["Unity","AI","Navigation","NavMeshSurface","ClearNavMeshSurfaces"],["Unity","AI","Navigation","NavMeshModifierVolume","ClearNavMeshModifiers"],["Unity","AI","Navigation","NavMeshModifier","ClearNavMeshModifiers"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["Unity","Services","Core","Internal","UnityServicesInitializer","CreateStaticInstance"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[["Unity","Services","Core","Environments","Client","Http","JsonHelpers","RegisterTypesForAOT"]],[["Unity","Services","Core","UnityThreadUtils","CaptureUnityThreadInfo"],["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

