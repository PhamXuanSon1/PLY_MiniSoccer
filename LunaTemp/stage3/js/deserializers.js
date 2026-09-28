var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i2798 = root || request.c( 'UnityEngine.JointSpring' )
  var i2799 = data
  i2798.spring = i2799[0]
  i2798.damper = i2799[1]
  i2798.targetPosition = i2799[2]
  return i2798
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i2800 = root || request.c( 'UnityEngine.JointMotor' )
  var i2801 = data
  i2800.m_TargetVelocity = i2801[0]
  i2800.m_Force = i2801[1]
  i2800.m_FreeSpin = i2801[2]
  return i2800
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i2802 = root || request.c( 'UnityEngine.JointLimits' )
  var i2803 = data
  i2802.m_Min = i2803[0]
  i2802.m_Max = i2803[1]
  i2802.m_Bounciness = i2803[2]
  i2802.m_BounceMinVelocity = i2803[3]
  i2802.m_ContactDistance = i2803[4]
  i2802.minBounce = i2803[5]
  i2802.maxBounce = i2803[6]
  return i2802
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i2804 = root || request.c( 'UnityEngine.JointDrive' )
  var i2805 = data
  i2804.m_PositionSpring = i2805[0]
  i2804.m_PositionDamper = i2805[1]
  i2804.m_MaximumForce = i2805[2]
  i2804.m_UseAcceleration = i2805[3]
  return i2804
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i2806 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i2807 = data
  i2806.m_Spring = i2807[0]
  i2806.m_Damper = i2807[1]
  return i2806
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i2808 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i2809 = data
  i2808.m_Limit = i2809[0]
  i2808.m_Bounciness = i2809[1]
  i2808.m_ContactDistance = i2809[2]
  return i2808
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i2810 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i2811 = data
  i2810.m_ExtremumSlip = i2811[0]
  i2810.m_ExtremumValue = i2811[1]
  i2810.m_AsymptoteSlip = i2811[2]
  i2810.m_AsymptoteValue = i2811[3]
  i2810.m_Stiffness = i2811[4]
  return i2810
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i2812 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i2813 = data
  i2812.m_LowerAngle = i2813[0]
  i2812.m_UpperAngle = i2813[1]
  return i2812
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i2814 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i2815 = data
  i2814.m_MotorSpeed = i2815[0]
  i2814.m_MaximumMotorTorque = i2815[1]
  return i2814
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i2816 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i2817 = data
  i2816.m_DampingRatio = i2817[0]
  i2816.m_Frequency = i2817[1]
  i2816.m_Angle = i2817[2]
  return i2816
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i2818 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i2819 = data
  i2818.m_LowerTranslation = i2819[0]
  i2818.m_UpperTranslation = i2819[1]
  return i2818
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i2820 = root || new pc.UnityMaterial()
  var i2821 = data
  i2820.name = i2821[0]
  request.r(i2821[1], i2821[2], 0, i2820, 'shader')
  i2820.renderQueue = i2821[3]
  i2820.enableInstancing = !!i2821[4]
  var i2823 = i2821[5]
  var i2822 = []
  for(var i = 0; i < i2823.length; i += 1) {
    i2822.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i2823[i + 0]) );
  }
  i2820.floatParameters = i2822
  var i2825 = i2821[6]
  var i2824 = []
  for(var i = 0; i < i2825.length; i += 1) {
    i2824.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i2825[i + 0]) );
  }
  i2820.colorParameters = i2824
  var i2827 = i2821[7]
  var i2826 = []
  for(var i = 0; i < i2827.length; i += 1) {
    i2826.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i2827[i + 0]) );
  }
  i2820.vectorParameters = i2826
  var i2829 = i2821[8]
  var i2828 = []
  for(var i = 0; i < i2829.length; i += 1) {
    i2828.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i2829[i + 0]) );
  }
  i2820.textureParameters = i2828
  var i2831 = i2821[9]
  var i2830 = []
  for(var i = 0; i < i2831.length; i += 1) {
    i2830.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i2831[i + 0]) );
  }
  i2820.materialFlags = i2830
  return i2820
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i2834 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i2835 = data
  i2834.name = i2835[0]
  i2834.value = i2835[1]
  return i2834
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i2838 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i2839 = data
  i2838.name = i2839[0]
  i2838.value = new pc.Color(i2839[1], i2839[2], i2839[3], i2839[4])
  return i2838
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i2842 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i2843 = data
  i2842.name = i2843[0]
  i2842.value = new pc.Vec4( i2843[1], i2843[2], i2843[3], i2843[4] )
  return i2842
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i2846 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i2847 = data
  i2846.name = i2847[0]
  request.r(i2847[1], i2847[2], 0, i2846, 'value')
  return i2846
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i2850 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i2851 = data
  i2850.name = i2851[0]
  i2850.enabled = !!i2851[1]
  return i2850
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i2852 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i2853 = data
  i2852.name = i2853[0]
  i2852.width = i2853[1]
  i2852.height = i2853[2]
  i2852.mipmapCount = i2853[3]
  i2852.anisoLevel = i2853[4]
  i2852.filterMode = i2853[5]
  i2852.hdr = !!i2853[6]
  i2852.format = i2853[7]
  i2852.wrapMode = i2853[8]
  i2852.alphaIsTransparency = !!i2853[9]
  i2852.alphaSource = i2853[10]
  i2852.graphicsFormat = i2853[11]
  i2852.sRGBTexture = !!i2853[12]
  i2852.desiredColorSpace = i2853[13]
  i2852.wrapU = i2853[14]
  i2852.wrapV = i2853[15]
  return i2852
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i2854 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i2855 = data
  i2854.name = i2855[0]
  i2854.halfPrecision = !!i2855[1]
  i2854.useSimplification = !!i2855[2]
  i2854.useUInt32IndexFormat = !!i2855[3]
  i2854.vertexCount = i2855[4]
  i2854.aabb = i2855[5]
  var i2857 = i2855[6]
  var i2856 = []
  for(var i = 0; i < i2857.length; i += 1) {
    i2856.push( !!i2857[i + 0] );
  }
  i2854.streams = i2856
  i2854.vertices = i2855[7]
  var i2859 = i2855[8]
  var i2858 = []
  for(var i = 0; i < i2859.length; i += 1) {
    i2858.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i2859[i + 0]) );
  }
  i2854.subMeshes = i2858
  var i2861 = i2855[9]
  var i2860 = []
  for(var i = 0; i < i2861.length; i += 16) {
    i2860.push( new pc.Mat4().setData(i2861[i + 0], i2861[i + 1], i2861[i + 2], i2861[i + 3],  i2861[i + 4], i2861[i + 5], i2861[i + 6], i2861[i + 7],  i2861[i + 8], i2861[i + 9], i2861[i + 10], i2861[i + 11],  i2861[i + 12], i2861[i + 13], i2861[i + 14], i2861[i + 15]) );
  }
  i2854.bindposes = i2860
  var i2863 = i2855[10]
  var i2862 = []
  for(var i = 0; i < i2863.length; i += 1) {
    i2862.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i2863[i + 0]) );
  }
  i2854.blendShapes = i2862
  return i2854
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i2868 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i2869 = data
  i2868.triangles = i2869[0]
  return i2868
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i2874 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i2875 = data
  i2874.name = i2875[0]
  var i2877 = i2875[1]
  var i2876 = []
  for(var i = 0; i < i2877.length; i += 1) {
    i2876.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i2877[i + 0]) );
  }
  i2874.frames = i2876
  return i2874
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i2878 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i2879 = data
  i2878.name = i2879[0]
  i2878.index = i2879[1]
  i2878.startup = !!i2879[2]
  return i2878
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i2880 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i2881 = data
  i2880.aspect = i2881[0]
  i2880.orthographic = !!i2881[1]
  i2880.orthographicSize = i2881[2]
  i2880.backgroundColor = new pc.Color(i2881[3], i2881[4], i2881[5], i2881[6])
  i2880.nearClipPlane = i2881[7]
  i2880.farClipPlane = i2881[8]
  i2880.fieldOfView = i2881[9]
  i2880.depth = i2881[10]
  i2880.clearFlags = i2881[11]
  i2880.cullingMask = i2881[12]
  i2880.rect = i2881[13]
  request.r(i2881[14], i2881[15], 0, i2880, 'targetTexture')
  i2880.usePhysicalProperties = !!i2881[16]
  i2880.focalLength = i2881[17]
  i2880.sensorSize = new pc.Vec2( i2881[18], i2881[19] )
  i2880.lensShift = new pc.Vec2( i2881[20], i2881[21] )
  i2880.gateFit = i2881[22]
  i2880.commandBufferCount = i2881[23]
  i2880.cameraType = i2881[24]
  i2880.enabled = !!i2881[25]
  return i2880
}

Deserializers["CameraFollow2D"] = function (request, data, root) {
  var i2882 = root || request.c( 'CameraFollow2D' )
  var i2883 = data
  request.r(i2883[0], i2883[1], 0, i2882, 'target')
  i2882.smoothSpeed = i2883[2]
  i2882.offset = new pc.Vec3( i2883[3], i2883[4], i2883[5] )
  i2882.followY = !!i2883[6]
  return i2882
}

Deserializers["AutoCameraFit"] = function (request, data, root) {
  var i2884 = root || request.c( 'AutoCameraFit' )
  var i2885 = data
  request.r(i2885[0], i2885[1], 0, i2884, 'tallScreenObject')
  i2884.tallScreenRatioThreshold = i2885[2]
  i2884.tallScreenYOffset = i2885[3]
  request.r(i2885[4], i2885[5], 0, i2884, 'canvasBtn')
  request.r(i2885[6], i2885[7], 0, i2884, 'targetArea')
  i2884.paddingLandscape = i2885[8]
  i2884.paddingPortrait = i2885[9]
  i2884.extraPaddingSmallScreen = i2885[10]
  i2884.smallScreenThreshold = i2885[11]
  i2884.autoUpdateOnResize = !!i2885[12]
  i2884.adjustInEditMode = !!i2885[13]
  return i2884
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i2886 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i2887 = data
  i2886.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i2887[0], i2886.main)
  i2886.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i2887[1], i2886.colorBySpeed)
  i2886.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i2887[2], i2886.colorOverLifetime)
  i2886.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i2887[3], i2886.emission)
  i2886.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i2887[4], i2886.rotationBySpeed)
  i2886.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i2887[5], i2886.rotationOverLifetime)
  i2886.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i2887[6], i2886.shape)
  i2886.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i2887[7], i2886.sizeBySpeed)
  i2886.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i2887[8], i2886.sizeOverLifetime)
  i2886.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i2887[9], i2886.textureSheetAnimation)
  i2886.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i2887[10], i2886.velocityOverLifetime)
  i2886.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i2887[11], i2886.noise)
  i2886.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i2887[12], i2886.inheritVelocity)
  i2886.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i2887[13], i2886.forceOverLifetime)
  i2886.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i2887[14], i2886.limitVelocityOverLifetime)
  i2886.useAutoRandomSeed = !!i2887[15]
  i2886.randomSeed = i2887[16]
  return i2886
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i2888 = root || new pc.ParticleSystemMain()
  var i2889 = data
  i2888.duration = i2889[0]
  i2888.loop = !!i2889[1]
  i2888.prewarm = !!i2889[2]
  i2888.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2889[3], i2888.startDelay)
  i2888.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2889[4], i2888.startLifetime)
  i2888.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2889[5], i2888.startSpeed)
  i2888.startSize3D = !!i2889[6]
  i2888.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2889[7], i2888.startSizeX)
  i2888.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2889[8], i2888.startSizeY)
  i2888.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2889[9], i2888.startSizeZ)
  i2888.startRotation3D = !!i2889[10]
  i2888.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2889[11], i2888.startRotationX)
  i2888.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2889[12], i2888.startRotationY)
  i2888.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2889[13], i2888.startRotationZ)
  i2888.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2889[14], i2888.startColor)
  i2888.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2889[15], i2888.gravityModifier)
  i2888.simulationSpace = i2889[16]
  request.r(i2889[17], i2889[18], 0, i2888, 'customSimulationSpace')
  i2888.simulationSpeed = i2889[19]
  i2888.useUnscaledTime = !!i2889[20]
  i2888.scalingMode = i2889[21]
  i2888.playOnAwake = !!i2889[22]
  i2888.maxParticles = i2889[23]
  i2888.emitterVelocityMode = i2889[24]
  i2888.stopAction = i2889[25]
  return i2888
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i2890 = root || new pc.MinMaxCurve()
  var i2891 = data
  i2890.mode = i2891[0]
  i2890.curveMin = new pc.AnimationCurve( { keys_flow: i2891[1] } )
  i2890.curveMax = new pc.AnimationCurve( { keys_flow: i2891[2] } )
  i2890.curveMultiplier = i2891[3]
  i2890.constantMin = i2891[4]
  i2890.constantMax = i2891[5]
  return i2890
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i2892 = root || new pc.MinMaxGradient()
  var i2893 = data
  i2892.mode = i2893[0]
  i2892.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2893[1], i2892.gradientMin)
  i2892.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2893[2], i2892.gradientMax)
  i2892.colorMin = new pc.Color(i2893[3], i2893[4], i2893[5], i2893[6])
  i2892.colorMax = new pc.Color(i2893[7], i2893[8], i2893[9], i2893[10])
  return i2892
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i2894 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i2895 = data
  i2894.mode = i2895[0]
  var i2897 = i2895[1]
  var i2896 = []
  for(var i = 0; i < i2897.length; i += 1) {
    i2896.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i2897[i + 0]) );
  }
  i2894.colorKeys = i2896
  var i2899 = i2895[2]
  var i2898 = []
  for(var i = 0; i < i2899.length; i += 1) {
    i2898.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i2899[i + 0]) );
  }
  i2894.alphaKeys = i2898
  return i2894
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i2900 = root || new pc.ParticleSystemColorBySpeed()
  var i2901 = data
  i2900.enabled = !!i2901[0]
  i2900.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2901[1], i2900.color)
  i2900.range = new pc.Vec2( i2901[2], i2901[3] )
  return i2900
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i2904 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i2905 = data
  i2904.color = new pc.Color(i2905[0], i2905[1], i2905[2], i2905[3])
  i2904.time = i2905[4]
  return i2904
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i2908 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i2909 = data
  i2908.alpha = i2909[0]
  i2908.time = i2909[1]
  return i2908
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i2910 = root || new pc.ParticleSystemColorOverLifetime()
  var i2911 = data
  i2910.enabled = !!i2911[0]
  i2910.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2911[1], i2910.color)
  return i2910
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i2912 = root || new pc.ParticleSystemEmitter()
  var i2913 = data
  i2912.enabled = !!i2913[0]
  i2912.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2913[1], i2912.rateOverTime)
  i2912.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2913[2], i2912.rateOverDistance)
  var i2915 = i2913[3]
  var i2914 = []
  for(var i = 0; i < i2915.length; i += 1) {
    i2914.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i2915[i + 0]) );
  }
  i2912.bursts = i2914
  return i2912
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i2918 = root || new pc.ParticleSystemBurst()
  var i2919 = data
  i2918.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2919[0], i2918.count)
  i2918.cycleCount = i2919[1]
  i2918.minCount = i2919[2]
  i2918.maxCount = i2919[3]
  i2918.repeatInterval = i2919[4]
  i2918.time = i2919[5]
  return i2918
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i2920 = root || new pc.ParticleSystemRotationBySpeed()
  var i2921 = data
  i2920.enabled = !!i2921[0]
  i2920.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2921[1], i2920.x)
  i2920.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2921[2], i2920.y)
  i2920.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2921[3], i2920.z)
  i2920.separateAxes = !!i2921[4]
  i2920.range = new pc.Vec2( i2921[5], i2921[6] )
  return i2920
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i2922 = root || new pc.ParticleSystemRotationOverLifetime()
  var i2923 = data
  i2922.enabled = !!i2923[0]
  i2922.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2923[1], i2922.x)
  i2922.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2923[2], i2922.y)
  i2922.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2923[3], i2922.z)
  i2922.separateAxes = !!i2923[4]
  return i2922
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i2924 = root || new pc.ParticleSystemShape()
  var i2925 = data
  i2924.enabled = !!i2925[0]
  i2924.shapeType = i2925[1]
  i2924.randomDirectionAmount = i2925[2]
  i2924.sphericalDirectionAmount = i2925[3]
  i2924.randomPositionAmount = i2925[4]
  i2924.alignToDirection = !!i2925[5]
  i2924.radius = i2925[6]
  i2924.radiusMode = i2925[7]
  i2924.radiusSpread = i2925[8]
  i2924.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2925[9], i2924.radiusSpeed)
  i2924.radiusThickness = i2925[10]
  i2924.angle = i2925[11]
  i2924.length = i2925[12]
  i2924.boxThickness = new pc.Vec3( i2925[13], i2925[14], i2925[15] )
  i2924.meshShapeType = i2925[16]
  request.r(i2925[17], i2925[18], 0, i2924, 'mesh')
  request.r(i2925[19], i2925[20], 0, i2924, 'meshRenderer')
  request.r(i2925[21], i2925[22], 0, i2924, 'skinnedMeshRenderer')
  i2924.useMeshMaterialIndex = !!i2925[23]
  i2924.meshMaterialIndex = i2925[24]
  i2924.useMeshColors = !!i2925[25]
  i2924.normalOffset = i2925[26]
  i2924.arc = i2925[27]
  i2924.arcMode = i2925[28]
  i2924.arcSpread = i2925[29]
  i2924.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2925[30], i2924.arcSpeed)
  i2924.donutRadius = i2925[31]
  i2924.position = new pc.Vec3( i2925[32], i2925[33], i2925[34] )
  i2924.rotation = new pc.Vec3( i2925[35], i2925[36], i2925[37] )
  i2924.scale = new pc.Vec3( i2925[38], i2925[39], i2925[40] )
  return i2924
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i2926 = root || new pc.ParticleSystemSizeBySpeed()
  var i2927 = data
  i2926.enabled = !!i2927[0]
  i2926.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2927[1], i2926.x)
  i2926.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2927[2], i2926.y)
  i2926.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2927[3], i2926.z)
  i2926.separateAxes = !!i2927[4]
  i2926.range = new pc.Vec2( i2927[5], i2927[6] )
  return i2926
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i2928 = root || new pc.ParticleSystemSizeOverLifetime()
  var i2929 = data
  i2928.enabled = !!i2929[0]
  i2928.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2929[1], i2928.x)
  i2928.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2929[2], i2928.y)
  i2928.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2929[3], i2928.z)
  i2928.separateAxes = !!i2929[4]
  return i2928
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i2930 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i2931 = data
  i2930.enabled = !!i2931[0]
  i2930.mode = i2931[1]
  i2930.animation = i2931[2]
  i2930.numTilesX = i2931[3]
  i2930.numTilesY = i2931[4]
  i2930.useRandomRow = !!i2931[5]
  i2930.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2931[6], i2930.frameOverTime)
  i2930.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2931[7], i2930.startFrame)
  i2930.cycleCount = i2931[8]
  i2930.rowIndex = i2931[9]
  i2930.flipU = i2931[10]
  i2930.flipV = i2931[11]
  i2930.spriteCount = i2931[12]
  var i2933 = i2931[13]
  var i2932 = []
  for(var i = 0; i < i2933.length; i += 2) {
  request.r(i2933[i + 0], i2933[i + 1], 2, i2932, '')
  }
  i2930.sprites = i2932
  return i2930
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i2936 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i2937 = data
  i2936.enabled = !!i2937[0]
  i2936.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2937[1], i2936.x)
  i2936.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2937[2], i2936.y)
  i2936.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2937[3], i2936.z)
  i2936.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2937[4], i2936.radial)
  i2936.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2937[5], i2936.speedModifier)
  i2936.space = i2937[6]
  i2936.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2937[7], i2936.orbitalX)
  i2936.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2937[8], i2936.orbitalY)
  i2936.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2937[9], i2936.orbitalZ)
  i2936.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2937[10], i2936.orbitalOffsetX)
  i2936.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2937[11], i2936.orbitalOffsetY)
  i2936.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2937[12], i2936.orbitalOffsetZ)
  return i2936
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i2938 = root || new pc.ParticleSystemNoise()
  var i2939 = data
  i2938.enabled = !!i2939[0]
  i2938.separateAxes = !!i2939[1]
  i2938.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2939[2], i2938.strengthX)
  i2938.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2939[3], i2938.strengthY)
  i2938.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2939[4], i2938.strengthZ)
  i2938.frequency = i2939[5]
  i2938.damping = !!i2939[6]
  i2938.octaveCount = i2939[7]
  i2938.octaveMultiplier = i2939[8]
  i2938.octaveScale = i2939[9]
  i2938.quality = i2939[10]
  i2938.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2939[11], i2938.scrollSpeed)
  i2938.scrollSpeedMultiplier = i2939[12]
  i2938.remapEnabled = !!i2939[13]
  i2938.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2939[14], i2938.remapX)
  i2938.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2939[15], i2938.remapY)
  i2938.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2939[16], i2938.remapZ)
  i2938.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2939[17], i2938.positionAmount)
  i2938.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2939[18], i2938.rotationAmount)
  i2938.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2939[19], i2938.sizeAmount)
  return i2938
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i2940 = root || new pc.ParticleSystemInheritVelocity()
  var i2941 = data
  i2940.enabled = !!i2941[0]
  i2940.mode = i2941[1]
  i2940.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2941[2], i2940.curve)
  return i2940
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i2942 = root || new pc.ParticleSystemForceOverLifetime()
  var i2943 = data
  i2942.enabled = !!i2943[0]
  i2942.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2943[1], i2942.x)
  i2942.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2943[2], i2942.y)
  i2942.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2943[3], i2942.z)
  i2942.space = i2943[4]
  i2942.randomized = !!i2943[5]
  return i2942
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i2944 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i2945 = data
  i2944.enabled = !!i2945[0]
  i2944.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2945[1], i2944.limit)
  i2944.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2945[2], i2944.limitX)
  i2944.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2945[3], i2944.limitY)
  i2944.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2945[4], i2944.limitZ)
  i2944.dampen = i2945[5]
  i2944.separateAxes = !!i2945[6]
  i2944.space = i2945[7]
  i2944.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2945[8], i2944.drag)
  i2944.multiplyDragByParticleSize = !!i2945[9]
  i2944.multiplyDragByParticleVelocity = !!i2945[10]
  return i2944
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i2946 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i2947 = data
  request.r(i2947[0], i2947[1], 0, i2946, 'mesh')
  i2946.meshCount = i2947[2]
  i2946.activeVertexStreamsCount = i2947[3]
  i2946.alignment = i2947[4]
  i2946.renderMode = i2947[5]
  i2946.sortMode = i2947[6]
  i2946.lengthScale = i2947[7]
  i2946.velocityScale = i2947[8]
  i2946.cameraVelocityScale = i2947[9]
  i2946.normalDirection = i2947[10]
  i2946.sortingFudge = i2947[11]
  i2946.minParticleSize = i2947[12]
  i2946.maxParticleSize = i2947[13]
  i2946.pivot = new pc.Vec3( i2947[14], i2947[15], i2947[16] )
  request.r(i2947[17], i2947[18], 0, i2946, 'trailMaterial')
  i2946.applyActiveColorSpace = !!i2947[19]
  i2946.enabled = !!i2947[20]
  request.r(i2947[21], i2947[22], 0, i2946, 'sharedMaterial')
  var i2949 = i2947[23]
  var i2948 = []
  for(var i = 0; i < i2949.length; i += 2) {
  request.r(i2949[i + 0], i2949[i + 1], 2, i2948, '')
  }
  i2946.sharedMaterials = i2948
  i2946.receiveShadows = !!i2947[24]
  i2946.shadowCastingMode = i2947[25]
  i2946.sortingLayerID = i2947[26]
  i2946.sortingOrder = i2947[27]
  i2946.lightmapIndex = i2947[28]
  i2946.lightmapSceneIndex = i2947[29]
  i2946.lightmapScaleOffset = new pc.Vec4( i2947[30], i2947[31], i2947[32], i2947[33] )
  i2946.lightProbeUsage = i2947[34]
  i2946.reflectionProbeUsage = i2947[35]
  return i2946
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i2952 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i2953 = data
  i2952.name = i2953[0]
  i2952.tagId = i2953[1]
  i2952.enabled = !!i2953[2]
  i2952.isStatic = !!i2953[3]
  i2952.layer = i2953[4]
  return i2952
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i2954 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i2955 = data
  i2954.color = new pc.Color(i2955[0], i2955[1], i2955[2], i2955[3])
  request.r(i2955[4], i2955[5], 0, i2954, 'sprite')
  i2954.flipX = !!i2955[6]
  i2954.flipY = !!i2955[7]
  i2954.drawMode = i2955[8]
  i2954.size = new pc.Vec2( i2955[9], i2955[10] )
  i2954.tileMode = i2955[11]
  i2954.adaptiveModeThreshold = i2955[12]
  i2954.maskInteraction = i2955[13]
  i2954.spriteSortPoint = i2955[14]
  i2954.enabled = !!i2955[15]
  request.r(i2955[16], i2955[17], 0, i2954, 'sharedMaterial')
  var i2957 = i2955[18]
  var i2956 = []
  for(var i = 0; i < i2957.length; i += 2) {
  request.r(i2957[i + 0], i2957[i + 1], 2, i2956, '')
  }
  i2954.sharedMaterials = i2956
  i2954.receiveShadows = !!i2955[19]
  i2954.shadowCastingMode = i2955[20]
  i2954.sortingLayerID = i2955[21]
  i2954.sortingOrder = i2955[22]
  i2954.lightmapIndex = i2955[23]
  i2954.lightmapSceneIndex = i2955[24]
  i2954.lightmapScaleOffset = new pc.Vec4( i2955[25], i2955[26], i2955[27], i2955[28] )
  i2954.lightProbeUsage = i2955[29]
  i2954.reflectionProbeUsage = i2955[30]
  return i2954
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i2958 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i2959 = data
  request.r(i2959[0], i2959[1], 0, i2958, 'animatorController')
  request.r(i2959[2], i2959[3], 0, i2958, 'avatar')
  i2958.updateMode = i2959[4]
  i2958.hasTransformHierarchy = !!i2959[5]
  i2958.applyRootMotion = !!i2959[6]
  var i2961 = i2959[7]
  var i2960 = []
  for(var i = 0; i < i2961.length; i += 2) {
  request.r(i2961[i + 0], i2961[i + 1], 2, i2960, '')
  }
  i2958.humanBones = i2960
  i2958.enabled = !!i2959[8]
  return i2958
}

Deserializers["MoveBetweenPoints"] = function (request, data, root) {
  var i2964 = root || request.c( 'MoveBetweenPoints' )
  var i2965 = data
  request.r(i2965[0], i2965[1], 0, i2964, 'pointA')
  request.r(i2965[2], i2965[3], 0, i2964, 'pointB')
  i2964.duration = i2965[4]
  return i2964
}

Deserializers["PlayerCardUIManager"] = function (request, data, root) {
  var i2966 = root || request.c( 'PlayerCardUIManager' )
  var i2967 = data
  request.r(i2967[0], i2967[1], 0, i2966, 'cardPanel')
  var i2969 = i2967[2]
  var i2968 = []
  for(var i = 0; i < i2969.length; i += 2) {
  request.r(i2969[i + 0], i2969[i + 1], 2, i2968, '')
  }
  i2966.extraObjectsToActivate = i2968
  i2966.waitTime = i2967[3]
  var i2971 = i2967[4]
  var i2970 = []
  for(var i = 0; i < i2971.length; i += 2) {
  request.r(i2971[i + 0], i2971[i + 1], 2, i2970, '')
  }
  i2966.objectsToTurnOnAfterWait = i2970
  var i2973 = i2967[5]
  var i2972 = []
  for(var i = 0; i < i2973.length; i += 2) {
  request.r(i2973[i + 0], i2973[i + 1], 2, i2972, '')
  }
  i2966.objectsToTurnOffAfterWait = i2972
  request.r(i2967[6], i2967[7], 0, i2966, 'playerNameText')
  request.r(i2967[8], i2967[9], 0, i2966, 'playerImage')
  return i2966
}

Deserializers["Ply_SoundManager"] = function (request, data, root) {
  var i2976 = root || request.c( 'Ply_SoundManager' )
  var i2977 = data
  i2976.fxAudio = request.d('FxAudio', i2977[0], i2976.fxAudio)
  request.r(i2977[1], i2977[2], 0, i2976, 'bgm1')
  return i2976
}

Deserializers["FxAudio"] = function (request, data, root) {
  var i2978 = root || request.c( 'FxAudio' )
  var i2979 = data
  i2978.ClickBox = request.d('SoundData', i2979[0], i2978.ClickBox)
  i2978.Happy = request.d('SoundData', i2979[1], i2978.Happy)
  i2978.Wrong = request.d('SoundData', i2979[2], i2978.Wrong)
  i2978.Spray = request.d('SoundData', i2979[3], i2978.Spray)
  i2978.Brush = request.d('SoundData', i2979[4], i2978.Brush)
  i2978.Keo = request.d('SoundData', i2979[5], i2978.Keo)
  i2978.Confetti = request.d('SoundData', i2979[6], i2978.Confetti)
  i2978.Lose2 = request.d('SoundData', i2979[7], i2978.Lose2)
  return i2978
}

Deserializers["SoundData"] = function (request, data, root) {
  var i2980 = root || request.c( 'SoundData' )
  var i2981 = data
  request.r(i2981[0], i2981[1], 0, i2980, 'clip')
  i2980.repeatCount = i2981[2]
  return i2980
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i2982 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i2983 = data
  request.r(i2983[0], i2983[1], 0, i2982, 'clip')
  request.r(i2983[2], i2983[3], 0, i2982, 'outputAudioMixerGroup')
  i2982.playOnAwake = !!i2983[4]
  i2982.loop = !!i2983[5]
  i2982.time = i2983[6]
  i2982.volume = i2983[7]
  i2982.pitch = i2983[8]
  i2982.enabled = !!i2983[9]
  return i2982
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i2984 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i2985 = data
  i2984.pivot = new pc.Vec2( i2985[0], i2985[1] )
  i2984.anchorMin = new pc.Vec2( i2985[2], i2985[3] )
  i2984.anchorMax = new pc.Vec2( i2985[4], i2985[5] )
  i2984.sizeDelta = new pc.Vec2( i2985[6], i2985[7] )
  i2984.anchoredPosition3D = new pc.Vec3( i2985[8], i2985[9], i2985[10] )
  i2984.rotation = new pc.Quat(i2985[11], i2985[12], i2985[13], i2985[14])
  i2984.scale = new pc.Vec3( i2985[15], i2985[16], i2985[17] )
  return i2984
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i2986 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i2987 = data
  i2986.planeDistance = i2987[0]
  i2986.referencePixelsPerUnit = i2987[1]
  i2986.isFallbackOverlay = !!i2987[2]
  i2986.renderMode = i2987[3]
  i2986.renderOrder = i2987[4]
  i2986.sortingLayerName = i2987[5]
  i2986.sortingOrder = i2987[6]
  i2986.scaleFactor = i2987[7]
  request.r(i2987[8], i2987[9], 0, i2986, 'worldCamera')
  i2986.overrideSorting = !!i2987[10]
  i2986.pixelPerfect = !!i2987[11]
  i2986.targetDisplay = i2987[12]
  i2986.overridePixelPerfect = !!i2987[13]
  i2986.enabled = !!i2987[14]
  return i2986
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i2988 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i2989 = data
  i2988.m_UiScaleMode = i2989[0]
  i2988.m_ReferencePixelsPerUnit = i2989[1]
  i2988.m_ScaleFactor = i2989[2]
  i2988.m_ReferenceResolution = new pc.Vec2( i2989[3], i2989[4] )
  i2988.m_ScreenMatchMode = i2989[5]
  i2988.m_MatchWidthOrHeight = i2989[6]
  i2988.m_PhysicalUnit = i2989[7]
  i2988.m_FallbackScreenDPI = i2989[8]
  i2988.m_DefaultSpriteDPI = i2989[9]
  i2988.m_DynamicPixelsPerUnit = i2989[10]
  i2988.m_PresetInfoIsWorld = !!i2989[11]
  return i2988
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i2990 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i2991 = data
  i2990.m_IgnoreReversedGraphics = !!i2991[0]
  i2990.m_BlockingObjects = i2991[1]
  i2990.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i2991[2] )
  return i2990
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i2992 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i2993 = data
  i2992.cullTransparentMesh = !!i2993[0]
  return i2992
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i2994 = root || request.c( 'UnityEngine.UI.Image' )
  var i2995 = data
  request.r(i2995[0], i2995[1], 0, i2994, 'm_Sprite')
  i2994.m_Type = i2995[2]
  i2994.m_PreserveAspect = !!i2995[3]
  i2994.m_FillCenter = !!i2995[4]
  i2994.m_FillMethod = i2995[5]
  i2994.m_FillAmount = i2995[6]
  i2994.m_FillClockwise = !!i2995[7]
  i2994.m_FillOrigin = i2995[8]
  i2994.m_UseSpriteMesh = !!i2995[9]
  i2994.m_PixelsPerUnitMultiplier = i2995[10]
  request.r(i2995[11], i2995[12], 0, i2994, 'm_Material')
  i2994.m_Maskable = !!i2995[13]
  i2994.m_Color = new pc.Color(i2995[14], i2995[15], i2995[16], i2995[17])
  i2994.m_RaycastTarget = !!i2995[18]
  i2994.m_RaycastPadding = new pc.Vec4( i2995[19], i2995[20], i2995[21], i2995[22] )
  return i2994
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i2996 = root || request.c( 'UnityEngine.UI.Button' )
  var i2997 = data
  i2996.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i2997[0], i2996.m_OnClick)
  i2996.m_Navigation = request.d('UnityEngine.UI.Navigation', i2997[1], i2996.m_Navigation)
  i2996.m_Transition = i2997[2]
  i2996.m_Colors = request.d('UnityEngine.UI.ColorBlock', i2997[3], i2996.m_Colors)
  i2996.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i2997[4], i2996.m_SpriteState)
  i2996.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i2997[5], i2996.m_AnimationTriggers)
  i2996.m_Interactable = !!i2997[6]
  request.r(i2997[7], i2997[8], 0, i2996, 'm_TargetGraphic')
  return i2996
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i2998 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i2999 = data
  i2998.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2999[0], i2998.m_PersistentCalls)
  return i2998
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i3000 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i3001 = data
  var i3003 = i3001[0]
  var i3002 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i3003.length; i += 1) {
    i3002.add(request.d('UnityEngine.Events.PersistentCall', i3003[i + 0]));
  }
  i3000.m_Calls = i3002
  return i3000
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i3006 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i3007 = data
  request.r(i3007[0], i3007[1], 0, i3006, 'm_Target')
  i3006.m_TargetAssemblyTypeName = i3007[2]
  i3006.m_MethodName = i3007[3]
  i3006.m_Mode = i3007[4]
  i3006.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i3007[5], i3006.m_Arguments)
  i3006.m_CallState = i3007[6]
  return i3006
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i3008 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i3009 = data
  request.r(i3009[0], i3009[1], 0, i3008, 'm_ObjectArgument')
  i3008.m_ObjectArgumentAssemblyTypeName = i3009[2]
  i3008.m_IntArgument = i3009[3]
  i3008.m_FloatArgument = i3009[4]
  i3008.m_StringArgument = i3009[5]
  i3008.m_BoolArgument = !!i3009[6]
  return i3008
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i3010 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i3011 = data
  i3010.m_Mode = i3011[0]
  i3010.m_WrapAround = !!i3011[1]
  request.r(i3011[2], i3011[3], 0, i3010, 'm_SelectOnUp')
  request.r(i3011[4], i3011[5], 0, i3010, 'm_SelectOnDown')
  request.r(i3011[6], i3011[7], 0, i3010, 'm_SelectOnLeft')
  request.r(i3011[8], i3011[9], 0, i3010, 'm_SelectOnRight')
  return i3010
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i3012 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i3013 = data
  i3012.m_NormalColor = new pc.Color(i3013[0], i3013[1], i3013[2], i3013[3])
  i3012.m_HighlightedColor = new pc.Color(i3013[4], i3013[5], i3013[6], i3013[7])
  i3012.m_PressedColor = new pc.Color(i3013[8], i3013[9], i3013[10], i3013[11])
  i3012.m_SelectedColor = new pc.Color(i3013[12], i3013[13], i3013[14], i3013[15])
  i3012.m_DisabledColor = new pc.Color(i3013[16], i3013[17], i3013[18], i3013[19])
  i3012.m_ColorMultiplier = i3013[20]
  i3012.m_FadeDuration = i3013[21]
  return i3012
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i3014 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i3015 = data
  request.r(i3015[0], i3015[1], 0, i3014, 'm_HighlightedSprite')
  request.r(i3015[2], i3015[3], 0, i3014, 'm_PressedSprite')
  request.r(i3015[4], i3015[5], 0, i3014, 'm_SelectedSprite')
  request.r(i3015[6], i3015[7], 0, i3014, 'm_DisabledSprite')
  return i3014
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i3016 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i3017 = data
  i3016.m_NormalTrigger = i3017[0]
  i3016.m_HighlightedTrigger = i3017[1]
  i3016.m_PressedTrigger = i3017[2]
  i3016.m_SelectedTrigger = i3017[3]
  i3016.m_DisabledTrigger = i3017[4]
  return i3016
}

Deserializers["HairCutController"] = function (request, data, root) {
  var i3018 = root || request.c( 'HairCutController' )
  var i3019 = data
  request.r(i3019[0], i3019[1], 0, i3018, 'scissors')
  request.r(i3019[2], i3019[3], 0, i3018, 'scissorsAnimator')
  request.r(i3019[4], i3019[5], 0, i3018, 'targetAnimatorToDisable')
  request.r(i3019[6], i3019[7], 0, i3018, 'linePointA')
  request.r(i3019[8], i3019[9], 0, i3018, 'linePointB')
  i3018.scissorMoveDuration = i3019[10]
  var i3021 = i3019[11]
  var i3020 = []
  for(var i = 0; i < i3021.length; i += 2) {
  request.r(i3021[i + 0], i3021[i + 1], 2, i3020, '')
  }
  i3018.allMasks = i3020
  request.r(i3019[12], i3019[13], 0, i3018, 'fallingHairParent')
  var i3023 = i3019[14]
  var i3022 = []
  for(var i = 0; i < i3023.length; i += 2) {
  request.r(i3023[i + 0], i3023[i + 1], 2, i3022, '')
  }
  i3018.fallingHairRenderers = i3022
  request.r(i3019[15], i3019[16], 0, i3018, 'scissorsCollider')
  var i3025 = i3019[17]
  var i3024 = []
  for(var i = 0; i < i3025.length; i += 1) {
    i3024.push( request.d('TargetColliderData', i3025[i + 0]) );
  }
  i3018.targetColliders = i3024
  request.r(i3019[18], i3019[19], 0, i3018, 'targetCollider')
  request.r(i3019[20], i3019[21], 0, i3018, 'winObjectToEnable')
  var i3027 = i3019[22]
  var i3026 = []
  for(var i = 0; i < i3027.length; i += 2) {
  request.r(i3027[i + 0], i3027[i + 1], 2, i3026, '')
  }
  i3018.winObjectsToEnable = i3026
  request.r(i3019[23], i3019[24], 0, i3018, 'winObjectToDisable')
  var i3029 = i3019[25]
  var i3028 = []
  for(var i = 0; i < i3029.length; i += 2) {
  request.r(i3029[i + 0], i3029[i + 1], 2, i3028, '')
  }
  i3018.winObjectsToDisable = i3028
  request.r(i3019[26], i3019[27], 0, i3018, 'lossSpriteRenderer')
  request.r(i3019[28], i3019[29], 0, i3018, 'lossObjectToEnable')
  var i3031 = i3019[30]
  var i3030 = []
  for(var i = 0; i < i3031.length; i += 2) {
  request.r(i3031[i + 0], i3031[i + 1], 2, i3030, '')
  }
  i3018.lossObjectsToEnable = i3030
  request.r(i3019[31], i3019[32], 0, i3018, 'lossObjectToDisable')
  var i3033 = i3019[33]
  var i3032 = []
  for(var i = 0; i < i3033.length; i += 2) {
  request.r(i3033[i + 0], i3033[i + 1], 2, i3032, '')
  }
  i3018.lossObjectsToDisable = i3032
  i3018.endDelay = i3019[34]
  var i3035 = i3019[35]
  var i3034 = []
  for(var i = 0; i < i3035.length; i += 2) {
  request.r(i3035[i + 0], i3035[i + 1], 2, i3034, '')
  }
  i3018.afterEndDisableObjects = i3034
  var i3037 = i3019[36]
  var i3036 = []
  for(var i = 0; i < i3037.length; i += 2) {
  request.r(i3037[i + 0], i3037[i + 1], 2, i3036, '')
  }
  i3018.afterEndEnableObjects = i3036
  request.r(i3019[37], i3019[38], 0, i3018, 'tutObject')
  request.r(i3019[39], i3019[40], 0, i3018, 'animatorToEnableOnFirstTap')
  i3018.firstTapTriggerName = i3019[41]
  request.r(i3019[42], i3019[43], 0, i3018, 'objectToDisableOnComplete')
  var i3039 = i3019[44]
  var i3038 = []
  for(var i = 0; i < i3039.length; i += 2) {
  request.r(i3039[i + 0], i3039[i + 1], 2, i3038, '')
  }
  i3018.objectsToDisableOnComplete = i3038
  i3018.fallDistance = i3019[45]
  i3018.fallDuration = i3019[46]
  i3018.fadeDuration = i3019[47]
  return i3018
}

Deserializers["TargetColliderData"] = function (request, data, root) {
  var i3046 = root || request.c( 'TargetColliderData' )
  var i3047 = data
  request.r(i3047[0], i3047[1], 0, i3046, 'collider')
  request.r(i3047[2], i3047[3], 0, i3046, 'resultSprite')
  i3046.isWin = !!i3047[4]
  return i3046
}

Deserializers["HideOnFirstClick"] = function (request, data, root) {
  var i3048 = root || request.c( 'HideOnFirstClick' )
  var i3049 = data
  request.r(i3049[0], i3049[1], 0, i3048, 'objectToHide')
  return i3048
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i3050 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i3051 = data
  i3050.usedByComposite = !!i3051[0]
  i3050.autoTiling = !!i3051[1]
  i3050.size = new pc.Vec2( i3051[2], i3051[3] )
  i3050.edgeRadius = i3051[4]
  i3050.enabled = !!i3051[5]
  i3050.isTrigger = !!i3051[6]
  i3050.usedByEffector = !!i3051[7]
  i3050.density = i3051[8]
  i3050.offset = new pc.Vec2( i3051[9], i3051[10] )
  request.r(i3051[11], i3051[12], 0, i3050, 'material')
  return i3050
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteMask"] = function (request, data, root) {
  var i3052 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteMask' )
  var i3053 = data
  i3052.frontSortingLayerID = i3053[0]
  i3052.frontSortingOrder = i3053[1]
  i3052.backSortingLayerID = i3053[2]
  i3052.backSortingOrder = i3053[3]
  i3052.alphaCutoff = i3053[4]
  request.r(i3053[5], i3053[6], 0, i3052, 'sprite')
  i3052.tileMode = i3053[7]
  i3052.isCustomRangeActive = !!i3053[8]
  i3052.spriteSortPoint = i3053[9]
  i3052.enabled = !!i3053[10]
  request.r(i3053[11], i3053[12], 0, i3052, 'sharedMaterial')
  var i3055 = i3053[13]
  var i3054 = []
  for(var i = 0; i < i3055.length; i += 2) {
  request.r(i3055[i + 0], i3055[i + 1], 2, i3054, '')
  }
  i3052.sharedMaterials = i3054
  i3052.receiveShadows = !!i3053[14]
  i3052.shadowCastingMode = i3053[15]
  i3052.sortingLayerID = i3053[16]
  i3052.sortingOrder = i3053[17]
  i3052.lightmapIndex = i3053[18]
  i3052.lightmapSceneIndex = i3053[19]
  i3052.lightmapScaleOffset = new pc.Vec4( i3053[20], i3053[21], i3053[22], i3053[23] )
  i3052.lightProbeUsage = i3053[24]
  i3052.reflectionProbeUsage = i3053[25]
  return i3052
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i3056 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i3057 = data
  request.r(i3057[0], i3057[1], 0, i3056, 'm_FirstSelected')
  i3056.m_sendNavigationEvents = !!i3057[2]
  i3056.m_DragThreshold = i3057[3]
  return i3056
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i3058 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i3059 = data
  i3058.m_HorizontalAxis = i3059[0]
  i3058.m_VerticalAxis = i3059[1]
  i3058.m_SubmitButton = i3059[2]
  i3058.m_CancelButton = i3059[3]
  i3058.m_InputActionsPerSecond = i3059[4]
  i3058.m_RepeatDelay = i3059[5]
  i3058.m_ForceModuleActive = !!i3059[6]
  i3058.m_SendPointerHoverToParent = !!i3059[7]
  return i3058
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i3060 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i3061 = data
  i3060.ambientIntensity = i3061[0]
  i3060.reflectionIntensity = i3061[1]
  i3060.ambientMode = i3061[2]
  i3060.ambientLight = new pc.Color(i3061[3], i3061[4], i3061[5], i3061[6])
  i3060.ambientSkyColor = new pc.Color(i3061[7], i3061[8], i3061[9], i3061[10])
  i3060.ambientGroundColor = new pc.Color(i3061[11], i3061[12], i3061[13], i3061[14])
  i3060.ambientEquatorColor = new pc.Color(i3061[15], i3061[16], i3061[17], i3061[18])
  i3060.fogColor = new pc.Color(i3061[19], i3061[20], i3061[21], i3061[22])
  i3060.fogEndDistance = i3061[23]
  i3060.fogStartDistance = i3061[24]
  i3060.fogDensity = i3061[25]
  i3060.fog = !!i3061[26]
  request.r(i3061[27], i3061[28], 0, i3060, 'skybox')
  i3060.fogMode = i3061[29]
  var i3063 = i3061[30]
  var i3062 = []
  for(var i = 0; i < i3063.length; i += 1) {
    i3062.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i3063[i + 0]) );
  }
  i3060.lightmaps = i3062
  i3060.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i3061[31], i3060.lightProbes)
  i3060.lightmapsMode = i3061[32]
  i3060.mixedBakeMode = i3061[33]
  i3060.environmentLightingMode = i3061[34]
  i3060.ambientProbe = new pc.SphericalHarmonicsL2(i3061[35])
  i3060.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i3061[36])
  i3060.useReferenceAmbientProbe = !!i3061[37]
  request.r(i3061[38], i3061[39], 0, i3060, 'customReflection')
  request.r(i3061[40], i3061[41], 0, i3060, 'defaultReflection')
  i3060.defaultReflectionMode = i3061[42]
  i3060.defaultReflectionResolution = i3061[43]
  i3060.sunLightObjectId = i3061[44]
  i3060.pixelLightCount = i3061[45]
  i3060.defaultReflectionHDR = !!i3061[46]
  i3060.hasLightDataAsset = !!i3061[47]
  i3060.hasManualGenerate = !!i3061[48]
  return i3060
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i3066 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i3067 = data
  request.r(i3067[0], i3067[1], 0, i3066, 'lightmapColor')
  request.r(i3067[2], i3067[3], 0, i3066, 'lightmapDirection')
  request.r(i3067[4], i3067[5], 0, i3066, 'shadowMask')
  return i3066
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i3068 = root || new UnityEngine.LightProbes()
  var i3069 = data
  return i3068
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i3076 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i3077 = data
  var i3079 = i3077[0]
  var i3078 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i3079.length; i += 1) {
    i3078.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i3079[i + 0]));
  }
  i3076.ShaderCompilationErrors = i3078
  i3076.name = i3077[1]
  i3076.guid = i3077[2]
  var i3081 = i3077[3]
  var i3080 = []
  for(var i = 0; i < i3081.length; i += 1) {
    i3080.push( i3081[i + 0] );
  }
  i3076.shaderDefinedKeywords = i3080
  var i3083 = i3077[4]
  var i3082 = []
  for(var i = 0; i < i3083.length; i += 1) {
    i3082.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i3083[i + 0]) );
  }
  i3076.passes = i3082
  var i3085 = i3077[5]
  var i3084 = []
  for(var i = 0; i < i3085.length; i += 1) {
    i3084.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i3085[i + 0]) );
  }
  i3076.usePasses = i3084
  var i3087 = i3077[6]
  var i3086 = []
  for(var i = 0; i < i3087.length; i += 1) {
    i3086.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i3087[i + 0]) );
  }
  i3076.defaultParameterValues = i3086
  request.r(i3077[7], i3077[8], 0, i3076, 'unityFallbackShader')
  i3076.readDepth = !!i3077[9]
  i3076.hasDepthOnlyPass = !!i3077[10]
  i3076.isCreatedByShaderGraph = !!i3077[11]
  i3076.disableBatching = !!i3077[12]
  i3076.compiled = !!i3077[13]
  return i3076
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i3090 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i3091 = data
  i3090.shaderName = i3091[0]
  i3090.errorMessage = i3091[1]
  return i3090
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i3096 = root || new pc.UnityShaderPass()
  var i3097 = data
  i3096.id = i3097[0]
  i3096.subShaderIndex = i3097[1]
  i3096.name = i3097[2]
  i3096.passType = i3097[3]
  i3096.grabPassTextureName = i3097[4]
  i3096.usePass = !!i3097[5]
  i3096.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3097[6], i3096.zTest)
  i3096.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3097[7], i3096.zWrite)
  i3096.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3097[8], i3096.culling)
  i3096.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i3097[9], i3096.blending)
  i3096.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i3097[10], i3096.alphaBlending)
  i3096.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3097[11], i3096.colorWriteMask)
  i3096.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3097[12], i3096.offsetUnits)
  i3096.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3097[13], i3096.offsetFactor)
  i3096.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3097[14], i3096.stencilRef)
  i3096.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3097[15], i3096.stencilReadMask)
  i3096.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3097[16], i3096.stencilWriteMask)
  i3096.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3097[17], i3096.stencilOp)
  i3096.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3097[18], i3096.stencilOpFront)
  i3096.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3097[19], i3096.stencilOpBack)
  var i3099 = i3097[20]
  var i3098 = []
  for(var i = 0; i < i3099.length; i += 1) {
    i3098.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i3099[i + 0]) );
  }
  i3096.tags = i3098
  var i3101 = i3097[21]
  var i3100 = []
  for(var i = 0; i < i3101.length; i += 1) {
    i3100.push( i3101[i + 0] );
  }
  i3096.passDefinedKeywords = i3100
  var i3103 = i3097[22]
  var i3102 = []
  for(var i = 0; i < i3103.length; i += 1) {
    i3102.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i3103[i + 0]) );
  }
  i3096.passDefinedKeywordGroups = i3102
  var i3105 = i3097[23]
  var i3104 = []
  for(var i = 0; i < i3105.length; i += 1) {
    i3104.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i3105[i + 0]) );
  }
  i3096.variants = i3104
  var i3107 = i3097[24]
  var i3106 = []
  for(var i = 0; i < i3107.length; i += 1) {
    i3106.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i3107[i + 0]) );
  }
  i3096.excludedVariants = i3106
  i3096.hasDepthReader = !!i3097[25]
  return i3096
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i3108 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i3109 = data
  i3108.val = i3109[0]
  i3108.name = i3109[1]
  return i3108
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i3110 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i3111 = data
  i3110.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3111[0], i3110.src)
  i3110.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3111[1], i3110.dst)
  i3110.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3111[2], i3110.op)
  return i3110
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i3112 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i3113 = data
  i3112.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3113[0], i3112.pass)
  i3112.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3113[1], i3112.fail)
  i3112.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3113[2], i3112.zFail)
  i3112.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3113[3], i3112.comp)
  return i3112
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i3116 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i3117 = data
  i3116.name = i3117[0]
  i3116.value = i3117[1]
  return i3116
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i3120 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i3121 = data
  var i3123 = i3121[0]
  var i3122 = []
  for(var i = 0; i < i3123.length; i += 1) {
    i3122.push( i3123[i + 0] );
  }
  i3120.keywords = i3122
  i3120.hasDiscard = !!i3121[1]
  return i3120
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i3126 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i3127 = data
  i3126.passId = i3127[0]
  i3126.subShaderIndex = i3127[1]
  var i3129 = i3127[2]
  var i3128 = []
  for(var i = 0; i < i3129.length; i += 1) {
    i3128.push( i3129[i + 0] );
  }
  i3126.keywords = i3128
  i3126.vertexProgram = i3127[3]
  i3126.fragmentProgram = i3127[4]
  i3126.exportedForWebGl2 = !!i3127[5]
  i3126.readDepth = !!i3127[6]
  return i3126
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i3132 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i3133 = data
  request.r(i3133[0], i3133[1], 0, i3132, 'shader')
  i3132.pass = i3133[2]
  return i3132
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i3136 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i3137 = data
  i3136.name = i3137[0]
  i3136.type = i3137[1]
  i3136.value = new pc.Vec4( i3137[2], i3137[3], i3137[4], i3137[5] )
  i3136.textureValue = i3137[6]
  i3136.shaderPropertyFlag = i3137[7]
  return i3136
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i3138 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i3139 = data
  i3138.name = i3139[0]
  request.r(i3139[1], i3139[2], 0, i3138, 'texture')
  i3138.aabb = i3139[3]
  i3138.vertices = i3139[4]
  i3138.triangles = i3139[5]
  i3138.textureRect = UnityEngine.Rect.MinMaxRect(i3139[6], i3139[7], i3139[8], i3139[9])
  i3138.packedRect = UnityEngine.Rect.MinMaxRect(i3139[10], i3139[11], i3139[12], i3139[13])
  i3138.border = new pc.Vec4( i3139[14], i3139[15], i3139[16], i3139[17] )
  i3138.transparency = i3139[18]
  i3138.bounds = i3139[19]
  i3138.pixelsPerUnit = i3139[20]
  i3138.textureWidth = i3139[21]
  i3138.textureHeight = i3139[22]
  i3138.nativeSize = new pc.Vec2( i3139[23], i3139[24] )
  i3138.pivot = new pc.Vec2( i3139[25], i3139[26] )
  i3138.textureRectOffset = new pc.Vec2( i3139[27], i3139[28] )
  return i3138
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i3140 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i3141 = data
  i3140.name = i3141[0]
  return i3140
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i3142 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i3143 = data
  i3142.name = i3143[0]
  i3142.wrapMode = i3143[1]
  i3142.isLooping = !!i3143[2]
  i3142.length = i3143[3]
  var i3145 = i3143[4]
  var i3144 = []
  for(var i = 0; i < i3145.length; i += 1) {
    i3144.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i3145[i + 0]) );
  }
  i3142.curves = i3144
  var i3147 = i3143[5]
  var i3146 = []
  for(var i = 0; i < i3147.length; i += 1) {
    i3146.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i3147[i + 0]) );
  }
  i3142.events = i3146
  i3142.halfPrecision = !!i3143[6]
  i3142._frameRate = i3143[7]
  i3142.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i3143[8], i3142.localBounds)
  i3142.hasMuscleCurves = !!i3143[9]
  var i3149 = i3143[10]
  var i3148 = []
  for(var i = 0; i < i3149.length; i += 1) {
    i3148.push( i3149[i + 0] );
  }
  i3142.clipMuscleConstant = i3148
  i3142.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i3143[11], i3142.clipBindingConstant)
  return i3142
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i3152 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i3153 = data
  i3152.path = i3153[0]
  i3152.hash = i3153[1]
  i3152.componentType = i3153[2]
  i3152.property = i3153[3]
  i3152.keys = i3153[4]
  var i3155 = i3153[5]
  var i3154 = []
  for(var i = 0; i < i3155.length; i += 1) {
    i3154.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i3155[i + 0]) );
  }
  i3152.objectReferenceKeys = i3154
  return i3152
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i3158 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i3159 = data
  i3158.time = i3159[0]
  request.r(i3159[1], i3159[2], 0, i3158, 'value')
  return i3158
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i3162 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i3163 = data
  i3162.functionName = i3163[0]
  i3162.floatParameter = i3163[1]
  i3162.intParameter = i3163[2]
  i3162.stringParameter = i3163[3]
  request.r(i3163[4], i3163[5], 0, i3162, 'objectReferenceParameter')
  i3162.time = i3163[6]
  return i3162
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i3164 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i3165 = data
  i3164.center = new pc.Vec3( i3165[0], i3165[1], i3165[2] )
  i3164.extends = new pc.Vec3( i3165[3], i3165[4], i3165[5] )
  return i3164
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i3168 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i3169 = data
  var i3171 = i3169[0]
  var i3170 = []
  for(var i = 0; i < i3171.length; i += 1) {
    i3170.push( i3171[i + 0] );
  }
  i3168.genericBindings = i3170
  var i3173 = i3169[1]
  var i3172 = []
  for(var i = 0; i < i3173.length; i += 1) {
    i3172.push( i3173[i + 0] );
  }
  i3168.pptrCurveMapping = i3172
  return i3168
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i3174 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i3175 = data
  i3174.name = i3175[0]
  var i3177 = i3175[1]
  var i3176 = []
  for(var i = 0; i < i3177.length; i += 1) {
    i3176.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i3177[i + 0]) );
  }
  i3174.layers = i3176
  var i3179 = i3175[2]
  var i3178 = []
  for(var i = 0; i < i3179.length; i += 1) {
    i3178.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i3179[i + 0]) );
  }
  i3174.parameters = i3178
  i3174.animationClips = i3175[3]
  i3174.avatarUnsupported = i3175[4]
  return i3174
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i3182 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i3183 = data
  i3182.name = i3183[0]
  i3182.defaultWeight = i3183[1]
  i3182.blendingMode = i3183[2]
  i3182.avatarMask = i3183[3]
  i3182.syncedLayerIndex = i3183[4]
  i3182.syncedLayerAffectsTiming = !!i3183[5]
  i3182.syncedLayers = i3183[6]
  i3182.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i3183[7], i3182.stateMachine)
  return i3182
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i3184 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i3185 = data
  i3184.id = i3185[0]
  i3184.name = i3185[1]
  i3184.path = i3185[2]
  var i3187 = i3185[3]
  var i3186 = []
  for(var i = 0; i < i3187.length; i += 1) {
    i3186.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i3187[i + 0]) );
  }
  i3184.states = i3186
  var i3189 = i3185[4]
  var i3188 = []
  for(var i = 0; i < i3189.length; i += 1) {
    i3188.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i3189[i + 0]) );
  }
  i3184.machines = i3188
  var i3191 = i3185[5]
  var i3190 = []
  for(var i = 0; i < i3191.length; i += 1) {
    i3190.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i3191[i + 0]) );
  }
  i3184.entryStateTransitions = i3190
  var i3193 = i3185[6]
  var i3192 = []
  for(var i = 0; i < i3193.length; i += 1) {
    i3192.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i3193[i + 0]) );
  }
  i3184.exitStateTransitions = i3192
  var i3195 = i3185[7]
  var i3194 = []
  for(var i = 0; i < i3195.length; i += 1) {
    i3194.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i3195[i + 0]) );
  }
  i3184.anyStateTransitions = i3194
  i3184.defaultStateId = i3185[8]
  return i3184
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i3198 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i3199 = data
  i3198.id = i3199[0]
  i3198.name = i3199[1]
  i3198.cycleOffset = i3199[2]
  i3198.cycleOffsetParameter = i3199[3]
  i3198.cycleOffsetParameterActive = !!i3199[4]
  i3198.mirror = !!i3199[5]
  i3198.mirrorParameter = i3199[6]
  i3198.mirrorParameterActive = !!i3199[7]
  i3198.motionId = i3199[8]
  i3198.nameHash = i3199[9]
  i3198.fullPathHash = i3199[10]
  i3198.speed = i3199[11]
  i3198.speedParameter = i3199[12]
  i3198.speedParameterActive = !!i3199[13]
  i3198.tag = i3199[14]
  i3198.tagHash = i3199[15]
  i3198.writeDefaultValues = !!i3199[16]
  var i3201 = i3199[17]
  var i3200 = []
  for(var i = 0; i < i3201.length; i += 2) {
  request.r(i3201[i + 0], i3201[i + 1], 2, i3200, '')
  }
  i3198.behaviours = i3200
  var i3203 = i3199[18]
  var i3202 = []
  for(var i = 0; i < i3203.length; i += 1) {
    i3202.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i3203[i + 0]) );
  }
  i3198.transitions = i3202
  return i3198
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i3208 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i3209 = data
  i3208.fullPath = i3209[0]
  i3208.canTransitionToSelf = !!i3209[1]
  i3208.duration = i3209[2]
  i3208.exitTime = i3209[3]
  i3208.hasExitTime = !!i3209[4]
  i3208.hasFixedDuration = !!i3209[5]
  i3208.interruptionSource = i3209[6]
  i3208.offset = i3209[7]
  i3208.orderedInterruption = !!i3209[8]
  i3208.destinationStateId = i3209[9]
  i3208.isExit = !!i3209[10]
  i3208.mute = !!i3209[11]
  i3208.solo = !!i3209[12]
  var i3211 = i3209[13]
  var i3210 = []
  for(var i = 0; i < i3211.length; i += 1) {
    i3210.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i3211[i + 0]) );
  }
  i3208.conditions = i3210
  return i3208
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i3216 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i3217 = data
  i3216.destinationStateId = i3217[0]
  i3216.isExit = !!i3217[1]
  i3216.mute = !!i3217[2]
  i3216.solo = !!i3217[3]
  var i3219 = i3217[4]
  var i3218 = []
  for(var i = 0; i < i3219.length; i += 1) {
    i3218.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i3219[i + 0]) );
  }
  i3216.conditions = i3218
  return i3216
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i3222 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i3223 = data
  i3222.defaultBool = !!i3223[0]
  i3222.defaultFloat = i3223[1]
  i3222.defaultInt = i3223[2]
  i3222.name = i3223[3]
  i3222.nameHash = i3223[4]
  i3222.type = i3223[5]
  return i3222
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i3226 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i3227 = data
  i3226.mode = i3227[0]
  i3226.parameter = i3227[1]
  i3226.threshold = i3227[2]
  return i3226
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i3228 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i3229 = data
  i3228.name = i3229[0]
  i3228.bytes64 = i3229[1]
  i3228.data = i3229[2]
  return i3228
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i3230 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i3231 = data
  i3230.useSafeMode = !!i3231[0]
  i3230.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i3231[1], i3230.safeModeOptions)
  i3230.timeScale = i3231[2]
  i3230.unscaledTimeScale = i3231[3]
  i3230.useSmoothDeltaTime = !!i3231[4]
  i3230.maxSmoothUnscaledTime = i3231[5]
  i3230.rewindCallbackMode = i3231[6]
  i3230.showUnityEditorReport = !!i3231[7]
  i3230.logBehaviour = i3231[8]
  i3230.drawGizmos = !!i3231[9]
  i3230.defaultRecyclable = !!i3231[10]
  i3230.defaultAutoPlay = i3231[11]
  i3230.defaultUpdateType = i3231[12]
  i3230.defaultTimeScaleIndependent = !!i3231[13]
  i3230.defaultEaseType = i3231[14]
  i3230.defaultEaseOvershootOrAmplitude = i3231[15]
  i3230.defaultEasePeriod = i3231[16]
  i3230.defaultAutoKill = !!i3231[17]
  i3230.defaultLoopType = i3231[18]
  i3230.debugMode = !!i3231[19]
  i3230.debugStoreTargetId = !!i3231[20]
  i3230.showPreviewPanel = !!i3231[21]
  i3230.storeSettingsLocation = i3231[22]
  i3230.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i3231[23], i3230.modules)
  i3230.createASMDEF = !!i3231[24]
  i3230.showPlayingTweens = !!i3231[25]
  i3230.showPausedTweens = !!i3231[26]
  return i3230
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i3232 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i3233 = data
  i3232.logBehaviour = i3233[0]
  i3232.nestedTweenFailureBehaviour = i3233[1]
  return i3232
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i3234 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i3235 = data
  i3234.showPanel = !!i3235[0]
  i3234.audioEnabled = !!i3235[1]
  i3234.physicsEnabled = !!i3235[2]
  i3234.physics2DEnabled = !!i3235[3]
  i3234.spriteEnabled = !!i3235[4]
  i3234.uiEnabled = !!i3235[5]
  i3234.uiToolkitEnabled = !!i3235[6]
  i3234.textMeshProEnabled = !!i3235[7]
  i3234.tk2DEnabled = !!i3235[8]
  i3234.deAudioEnabled = !!i3235[9]
  i3234.deUnityExtendedEnabled = !!i3235[10]
  i3234.epoOutlineEnabled = !!i3235[11]
  return i3234
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i3236 = root || request.c( 'TMPro.TMP_Settings' )
  var i3237 = data
  i3236.assetVersion = i3237[0]
  i3236.m_TextWrappingMode = i3237[1]
  i3236.m_enableKerning = !!i3237[2]
  var i3239 = i3237[3]
  var i3238 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i3239.length; i += 1) {
    i3238.add(i3239[i + 0]);
  }
  i3236.m_ActiveFontFeatures = i3238
  i3236.m_enableExtraPadding = !!i3237[4]
  i3236.m_enableTintAllSprites = !!i3237[5]
  i3236.m_enableParseEscapeCharacters = !!i3237[6]
  i3236.m_EnableRaycastTarget = !!i3237[7]
  i3236.m_GetFontFeaturesAtRuntime = !!i3237[8]
  i3236.m_missingGlyphCharacter = i3237[9]
  i3236.m_ClearDynamicDataOnBuild = !!i3237[10]
  i3236.m_warningsDisabled = !!i3237[11]
  request.r(i3237[12], i3237[13], 0, i3236, 'm_defaultFontAsset')
  i3236.m_defaultFontAssetPath = i3237[14]
  i3236.m_defaultFontSize = i3237[15]
  i3236.m_defaultAutoSizeMinRatio = i3237[16]
  i3236.m_defaultAutoSizeMaxRatio = i3237[17]
  i3236.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i3237[18], i3237[19] )
  i3236.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i3237[20], i3237[21] )
  i3236.m_autoSizeTextContainer = !!i3237[22]
  i3236.m_IsTextObjectScaleStatic = !!i3237[23]
  var i3241 = i3237[24]
  var i3240 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i3241.length; i += 2) {
  request.r(i3241[i + 0], i3241[i + 1], 1, i3240, '')
  }
  i3236.m_fallbackFontAssets = i3240
  i3236.m_matchMaterialPreset = !!i3237[25]
  i3236.m_HideSubTextObjects = !!i3237[26]
  request.r(i3237[27], i3237[28], 0, i3236, 'm_defaultSpriteAsset')
  i3236.m_defaultSpriteAssetPath = i3237[29]
  i3236.m_enableEmojiSupport = !!i3237[30]
  i3236.m_MissingCharacterSpriteUnicode = i3237[31]
  var i3243 = i3237[32]
  var i3242 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i3243.length; i += 2) {
  request.r(i3243[i + 0], i3243[i + 1], 1, i3242, '')
  }
  i3236.m_EmojiFallbackTextAssets = i3242
  i3236.m_defaultColorGradientPresetsPath = i3237[33]
  request.r(i3237[34], i3237[35], 0, i3236, 'm_defaultStyleSheet')
  i3236.m_StyleSheetsResourcePath = i3237[36]
  request.r(i3237[37], i3237[38], 0, i3236, 'm_leadingCharacters')
  request.r(i3237[39], i3237[40], 0, i3236, 'm_followingCharacters')
  i3236.m_UseModernHangulLineBreakingRules = !!i3237[41]
  return i3236
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i3250 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i3251 = data
  request.r(i3251[0], i3251[1], 0, i3250, 'spriteSheet')
  var i3253 = i3251[2]
  var i3252 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i3253.length; i += 1) {
    i3252.add(request.d('TMPro.TMP_Sprite', i3253[i + 0]));
  }
  i3250.spriteInfoList = i3252
  var i3255 = i3251[3]
  var i3254 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i3255.length; i += 2) {
  request.r(i3255[i + 0], i3255[i + 1], 1, i3254, '')
  }
  i3250.fallbackSpriteAssets = i3254
  var i3257 = i3251[4]
  var i3256 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i3257.length; i += 1) {
    i3256.add(request.d('TMPro.TMP_SpriteCharacter', i3257[i + 0]));
  }
  i3250.m_SpriteCharacterTable = i3256
  var i3259 = i3251[5]
  var i3258 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i3259.length; i += 1) {
    i3258.add(request.d('TMPro.TMP_SpriteGlyph', i3259[i + 0]));
  }
  i3250.m_GlyphTable = i3258
  i3250.m_Version = i3251[6]
  i3250.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i3251[7], i3250.m_FaceInfo)
  request.r(i3251[8], i3251[9], 0, i3250, 'm_Material')
  return i3250
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i3262 = root || request.c( 'TMPro.TMP_Sprite' )
  var i3263 = data
  i3262.name = i3263[0]
  i3262.hashCode = i3263[1]
  i3262.unicode = i3263[2]
  i3262.pivot = new pc.Vec2( i3263[3], i3263[4] )
  request.r(i3263[5], i3263[6], 0, i3262, 'sprite')
  i3262.id = i3263[7]
  i3262.x = i3263[8]
  i3262.y = i3263[9]
  i3262.width = i3263[10]
  i3262.height = i3263[11]
  i3262.xOffset = i3263[12]
  i3262.yOffset = i3263[13]
  i3262.xAdvance = i3263[14]
  i3262.scale = i3263[15]
  return i3262
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i3268 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i3269 = data
  i3268.m_Name = i3269[0]
  i3268.m_ElementType = i3269[1]
  i3268.m_Unicode = i3269[2]
  i3268.m_GlyphIndex = i3269[3]
  i3268.m_Scale = i3269[4]
  return i3268
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i3272 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i3273 = data
  request.r(i3273[0], i3273[1], 0, i3272, 'sprite')
  i3272.m_Index = i3273[2]
  i3272.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i3273[3], i3272.m_Metrics)
  i3272.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i3273[4], i3272.m_GlyphRect)
  i3272.m_Scale = i3273[5]
  i3272.m_AtlasIndex = i3273[6]
  i3272.m_ClassDefinitionType = i3273[7]
  return i3272
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i3274 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i3275 = data
  i3274.m_Width = i3275[0]
  i3274.m_Height = i3275[1]
  i3274.m_HorizontalBearingX = i3275[2]
  i3274.m_HorizontalBearingY = i3275[3]
  i3274.m_HorizontalAdvance = i3275[4]
  return i3274
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i3276 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i3277 = data
  i3276.m_X = i3277[0]
  i3276.m_Y = i3277[1]
  i3276.m_Width = i3277[2]
  i3276.m_Height = i3277[3]
  return i3276
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i3278 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i3279 = data
  i3278.m_FaceIndex = i3279[0]
  i3278.m_FamilyName = i3279[1]
  i3278.m_StyleName = i3279[2]
  i3278.m_PointSize = i3279[3]
  i3278.m_Scale = i3279[4]
  i3278.m_UnitsPerEM = i3279[5]
  i3278.m_LineHeight = i3279[6]
  i3278.m_AscentLine = i3279[7]
  i3278.m_CapLine = i3279[8]
  i3278.m_MeanLine = i3279[9]
  i3278.m_Baseline = i3279[10]
  i3278.m_DescentLine = i3279[11]
  i3278.m_SuperscriptOffset = i3279[12]
  i3278.m_SuperscriptSize = i3279[13]
  i3278.m_SubscriptOffset = i3279[14]
  i3278.m_SubscriptSize = i3279[15]
  i3278.m_UnderlineOffset = i3279[16]
  i3278.m_UnderlineThickness = i3279[17]
  i3278.m_StrikethroughOffset = i3279[18]
  i3278.m_StrikethroughThickness = i3279[19]
  i3278.m_TabWidth = i3279[20]
  return i3278
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i3280 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i3281 = data
  var i3283 = i3281[0]
  var i3282 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i3283.length; i += 1) {
    i3282.add(request.d('TMPro.TMP_Style', i3283[i + 0]));
  }
  i3280.m_StyleList = i3282
  return i3280
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i3286 = root || request.c( 'TMPro.TMP_Style' )
  var i3287 = data
  i3286.m_Name = i3287[0]
  i3286.m_HashCode = i3287[1]
  i3286.m_OpeningDefinition = i3287[2]
  i3286.m_ClosingDefinition = i3287[3]
  i3286.m_OpeningTagArray = i3287[4]
  i3286.m_ClosingTagArray = i3287[5]
  return i3286
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i3288 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i3289 = data
  var i3291 = i3289[0]
  var i3290 = []
  for(var i = 0; i < i3291.length; i += 1) {
    i3290.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i3291[i + 0]) );
  }
  i3288.files = i3290
  i3288.componentToPrefabIds = i3289[1]
  return i3288
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i3294 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i3295 = data
  i3294.path = i3295[0]
  request.r(i3295[1], i3295[2], 0, i3294, 'unityObject')
  return i3294
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i3296 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i3297 = data
  var i3299 = i3297[0]
  var i3298 = []
  for(var i = 0; i < i3299.length; i += 1) {
    i3298.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i3299[i + 0]) );
  }
  i3296.scriptsExecutionOrder = i3298
  var i3301 = i3297[1]
  var i3300 = []
  for(var i = 0; i < i3301.length; i += 1) {
    i3300.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i3301[i + 0]) );
  }
  i3296.sortingLayers = i3300
  var i3303 = i3297[2]
  var i3302 = []
  for(var i = 0; i < i3303.length; i += 1) {
    i3302.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i3303[i + 0]) );
  }
  i3296.cullingLayers = i3302
  i3296.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i3297[3], i3296.timeSettings)
  i3296.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i3297[4], i3296.physicsSettings)
  i3296.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i3297[5], i3296.physics2DSettings)
  i3296.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i3297[6], i3296.qualitySettings)
  i3296.enableRealtimeShadows = !!i3297[7]
  i3296.enableAutoInstancing = !!i3297[8]
  i3296.enableStaticBatching = !!i3297[9]
  i3296.enableDynamicBatching = !!i3297[10]
  i3296.lightmapEncodingQuality = i3297[11]
  i3296.desiredColorSpace = i3297[12]
  var i3305 = i3297[13]
  var i3304 = []
  for(var i = 0; i < i3305.length; i += 1) {
    i3304.push( i3305[i + 0] );
  }
  i3296.allTags = i3304
  return i3296
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i3308 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i3309 = data
  i3308.name = i3309[0]
  i3308.value = i3309[1]
  return i3308
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i3312 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i3313 = data
  i3312.id = i3313[0]
  i3312.name = i3313[1]
  i3312.value = i3313[2]
  return i3312
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i3316 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i3317 = data
  i3316.id = i3317[0]
  i3316.name = i3317[1]
  return i3316
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i3318 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i3319 = data
  i3318.fixedDeltaTime = i3319[0]
  i3318.maximumDeltaTime = i3319[1]
  i3318.timeScale = i3319[2]
  i3318.maximumParticleTimestep = i3319[3]
  return i3318
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i3320 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i3321 = data
  i3320.gravity = new pc.Vec3( i3321[0], i3321[1], i3321[2] )
  i3320.defaultSolverIterations = i3321[3]
  i3320.bounceThreshold = i3321[4]
  i3320.autoSyncTransforms = !!i3321[5]
  i3320.autoSimulation = !!i3321[6]
  var i3323 = i3321[7]
  var i3322 = []
  for(var i = 0; i < i3323.length; i += 1) {
    i3322.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i3323[i + 0]) );
  }
  i3320.collisionMatrix = i3322
  return i3320
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i3326 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i3327 = data
  i3326.enabled = !!i3327[0]
  i3326.layerId = i3327[1]
  i3326.otherLayerId = i3327[2]
  return i3326
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i3328 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i3329 = data
  request.r(i3329[0], i3329[1], 0, i3328, 'material')
  i3328.gravity = new pc.Vec2( i3329[2], i3329[3] )
  i3328.positionIterations = i3329[4]
  i3328.velocityIterations = i3329[5]
  i3328.velocityThreshold = i3329[6]
  i3328.maxLinearCorrection = i3329[7]
  i3328.maxAngularCorrection = i3329[8]
  i3328.maxTranslationSpeed = i3329[9]
  i3328.maxRotationSpeed = i3329[10]
  i3328.baumgarteScale = i3329[11]
  i3328.baumgarteTOIScale = i3329[12]
  i3328.timeToSleep = i3329[13]
  i3328.linearSleepTolerance = i3329[14]
  i3328.angularSleepTolerance = i3329[15]
  i3328.defaultContactOffset = i3329[16]
  i3328.autoSimulation = !!i3329[17]
  i3328.queriesHitTriggers = !!i3329[18]
  i3328.queriesStartInColliders = !!i3329[19]
  i3328.callbacksOnDisable = !!i3329[20]
  i3328.reuseCollisionCallbacks = !!i3329[21]
  i3328.autoSyncTransforms = !!i3329[22]
  var i3331 = i3329[23]
  var i3330 = []
  for(var i = 0; i < i3331.length; i += 1) {
    i3330.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i3331[i + 0]) );
  }
  i3328.collisionMatrix = i3330
  return i3328
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i3334 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i3335 = data
  i3334.enabled = !!i3335[0]
  i3334.layerId = i3335[1]
  i3334.otherLayerId = i3335[2]
  return i3334
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i3336 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i3337 = data
  var i3339 = i3337[0]
  var i3338 = []
  for(var i = 0; i < i3339.length; i += 1) {
    i3338.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i3339[i + 0]) );
  }
  i3336.qualityLevels = i3338
  var i3341 = i3337[1]
  var i3340 = []
  for(var i = 0; i < i3341.length; i += 1) {
    i3340.push( i3341[i + 0] );
  }
  i3336.names = i3340
  i3336.shadows = i3337[2]
  i3336.anisotropicFiltering = i3337[3]
  i3336.antiAliasing = i3337[4]
  i3336.lodBias = i3337[5]
  i3336.shadowCascades = i3337[6]
  i3336.shadowDistance = i3337[7]
  i3336.shadowmaskMode = i3337[8]
  i3336.shadowProjection = i3337[9]
  i3336.shadowResolution = i3337[10]
  i3336.softParticles = !!i3337[11]
  i3336.softVegetation = !!i3337[12]
  i3336.activeColorSpace = i3337[13]
  i3336.desiredColorSpace = i3337[14]
  i3336.masterTextureLimit = i3337[15]
  i3336.maxQueuedFrames = i3337[16]
  i3336.particleRaycastBudget = i3337[17]
  i3336.pixelLightCount = i3337[18]
  i3336.realtimeReflectionProbes = !!i3337[19]
  i3336.shadowCascade2Split = i3337[20]
  i3336.shadowCascade4Split = new pc.Vec3( i3337[21], i3337[22], i3337[23] )
  i3336.streamingMipmapsActive = !!i3337[24]
  i3336.vSyncCount = i3337[25]
  i3336.asyncUploadBufferSize = i3337[26]
  i3336.asyncUploadTimeSlice = i3337[27]
  i3336.billboardsFaceCameraPosition = !!i3337[28]
  i3336.shadowNearPlaneOffset = i3337[29]
  i3336.streamingMipmapsMemoryBudget = i3337[30]
  i3336.maximumLODLevel = i3337[31]
  i3336.streamingMipmapsAddAllCameras = !!i3337[32]
  i3336.streamingMipmapsMaxLevelReduction = i3337[33]
  i3336.streamingMipmapsRenderersPerFrame = i3337[34]
  i3336.resolutionScalingFixedDPIFactor = i3337[35]
  i3336.streamingMipmapsMaxFileIORequests = i3337[36]
  i3336.currentQualityLevel = i3337[37]
  return i3336
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i3346 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i3347 = data
  i3346.weight = i3347[0]
  i3346.vertices = i3347[1]
  i3346.normals = i3347[2]
  i3346.tangents = i3347[3]
  return i3346
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.SpriteMask":{"frontSortingLayerID":0,"frontSortingOrder":1,"backSortingLayerID":2,"backSortingOrder":3,"alphaCutoff":4,"sprite":5,"tileMode":7,"isCustomRangeActive":8,"spriteSortPoint":9,"enabled":10,"sharedMaterial":11,"sharedMaterials":13,"receiveShadows":14,"shadowCastingMode":15,"sortingLayerID":16,"sortingOrder":17,"lightmapIndex":18,"lightmapSceneIndex":19,"lightmapScaleOffset":20,"lightProbeUsage":24,"reflectionProbeUsage":25},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"42":[43],"44":[43],"45":[43],"46":[43],"47":[43],"48":[43],"49":[50],"51":[2],"52":[53],"54":[53],"55":[53],"56":[53],"57":[53],"58":[53],"59":[60],"61":[60],"62":[60],"63":[60],"64":[60],"65":[60],"66":[60],"67":[60],"68":[60],"69":[60],"70":[60],"71":[60],"72":[60],"73":[2],"74":[75],"76":[77],"78":[77],"23":[22],"6":[2],"79":[60],"80":[32],"81":[12],"82":[2],"83":[84],"85":[34],"86":[23],"87":[22],"88":[75,22],"89":[22,27],"90":[22],"91":[27,22],"92":[75],"93":[27,22],"94":[22],"95":[96],"97":[96],"98":[96],"99":[22],"100":[22],"26":[23],"28":[27,22],"101":[22],"25":[23],"102":[22],"103":[22],"104":[22],"105":[22],"106":[22],"107":[22],"108":[22],"109":[22],"110":[22],"111":[27,22],"112":[22],"113":[22],"114":[22],"115":[22],"116":[27,22],"117":[22],"118":[34],"119":[34],"35":[34],"120":[34],"121":[2],"122":[2]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.MonoBehaviour","CameraFollow2D","AutoCameraFit","UnityEngine.Transform","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Mesh","UnityEngine.Material","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","MoveBetweenPoints","PlayerCardUIManager","UnityEngine.GameObject","Ply_SoundManager","UnityEngine.AudioClip","UnityEngine.AudioSource","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.UI.Button","HairCutController","UnityEngine.SpriteMask","UnityEngine.BoxCollider2D","HideOnFirstClick","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_FontAsset","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","BatStrikeController","SlotTrigger","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.InputSystem.UI.InputSystemUIInputModule","UnityEngine.InputSystem.UI.TrackedDeviceRaycaster","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.38f1";

Deserializers.productName = "PLY_MiniSoccer";

Deserializers.lunaInitializationTime = "07/15/2026 03:53:54";

Deserializers.lunaDaysRunning = "75.2";

Deserializers.lunaVersion = "7.1.0";

Deserializers.lunaSHA = "cf93782349542fe0b84ad13951a26809f8419628";

Deserializers.creativeName = "PLY_V15";

Deserializers.lunaAppID = "33920";

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

Deserializers.runtimeAnalysisExcludedMethodsCount = "4461";

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

Deserializers.buildID = "8e0bb800-5d96-46d0-8964-d28bd000ff26";

Deserializers.runtimeInitializeOnLoadInfos = [[["Unity","Services","Core","Internal","UnityServicesInitializer","EnableServicesInitializationAsync"],["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["DG","Tweening","DOTween","RuntimeOnLoad"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["Unity","Services","Core","Registration","CorePackageInitializer","InitializeOnLoad"],["Unity","Services","Core","Internal","TaskAsyncOperation","SetScheduler"],["Unity","Services","Core","Environments","Client","Scheduler","EngineStateHelper","Init"],["Unity","Services","Core","Environments","Client","Scheduler","ThreadHelper","Init"],["Ua2CoreInitializeCallback","Register"],["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["Unity","AI","Navigation","NavMeshLink","ClearTrackedList"],["Unity","AI","Navigation","NavMeshSurface","ClearNavMeshSurfaces"],["Unity","AI","Navigation","NavMeshModifierVolume","ClearNavMeshModifiers"],["Unity","AI","Navigation","NavMeshModifier","ClearNavMeshModifiers"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["Unity","Services","Core","Internal","UnityServicesInitializer","CreateStaticInstance"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[["Unity","Services","Core","Environments","Client","Http","JsonHelpers","RegisterTypesForAOT"]],[["Unity","Services","Core","UnityThreadUtils","CaptureUnityThreadInfo"],["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

