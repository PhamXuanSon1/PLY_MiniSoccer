var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i3100 = root || request.c( 'UnityEngine.JointSpring' )
  var i3101 = data
  i3100.spring = i3101[0]
  i3100.damper = i3101[1]
  i3100.targetPosition = i3101[2]
  return i3100
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i3102 = root || request.c( 'UnityEngine.JointMotor' )
  var i3103 = data
  i3102.m_TargetVelocity = i3103[0]
  i3102.m_Force = i3103[1]
  i3102.m_FreeSpin = i3103[2]
  return i3102
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i3104 = root || request.c( 'UnityEngine.JointLimits' )
  var i3105 = data
  i3104.m_Min = i3105[0]
  i3104.m_Max = i3105[1]
  i3104.m_Bounciness = i3105[2]
  i3104.m_BounceMinVelocity = i3105[3]
  i3104.m_ContactDistance = i3105[4]
  i3104.minBounce = i3105[5]
  i3104.maxBounce = i3105[6]
  return i3104
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i3106 = root || request.c( 'UnityEngine.JointDrive' )
  var i3107 = data
  i3106.m_PositionSpring = i3107[0]
  i3106.m_PositionDamper = i3107[1]
  i3106.m_MaximumForce = i3107[2]
  i3106.m_UseAcceleration = i3107[3]
  return i3106
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i3108 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i3109 = data
  i3108.m_Spring = i3109[0]
  i3108.m_Damper = i3109[1]
  return i3108
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i3110 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i3111 = data
  i3110.m_Limit = i3111[0]
  i3110.m_Bounciness = i3111[1]
  i3110.m_ContactDistance = i3111[2]
  return i3110
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i3112 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i3113 = data
  i3112.m_ExtremumSlip = i3113[0]
  i3112.m_ExtremumValue = i3113[1]
  i3112.m_AsymptoteSlip = i3113[2]
  i3112.m_AsymptoteValue = i3113[3]
  i3112.m_Stiffness = i3113[4]
  return i3112
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i3114 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i3115 = data
  i3114.m_LowerAngle = i3115[0]
  i3114.m_UpperAngle = i3115[1]
  return i3114
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i3116 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i3117 = data
  i3116.m_MotorSpeed = i3117[0]
  i3116.m_MaximumMotorTorque = i3117[1]
  return i3116
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i3118 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i3119 = data
  i3118.m_DampingRatio = i3119[0]
  i3118.m_Frequency = i3119[1]
  i3118.m_Angle = i3119[2]
  return i3118
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i3120 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i3121 = data
  i3120.m_LowerTranslation = i3121[0]
  i3120.m_UpperTranslation = i3121[1]
  return i3120
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i3122 = root || new pc.UnityMaterial()
  var i3123 = data
  i3122.name = i3123[0]
  request.r(i3123[1], i3123[2], 0, i3122, 'shader')
  i3122.renderQueue = i3123[3]
  i3122.enableInstancing = !!i3123[4]
  var i3125 = i3123[5]
  var i3124 = []
  for(var i = 0; i < i3125.length; i += 1) {
    i3124.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i3125[i + 0]) );
  }
  i3122.floatParameters = i3124
  var i3127 = i3123[6]
  var i3126 = []
  for(var i = 0; i < i3127.length; i += 1) {
    i3126.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i3127[i + 0]) );
  }
  i3122.colorParameters = i3126
  var i3129 = i3123[7]
  var i3128 = []
  for(var i = 0; i < i3129.length; i += 1) {
    i3128.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i3129[i + 0]) );
  }
  i3122.vectorParameters = i3128
  var i3131 = i3123[8]
  var i3130 = []
  for(var i = 0; i < i3131.length; i += 1) {
    i3130.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i3131[i + 0]) );
  }
  i3122.textureParameters = i3130
  var i3133 = i3123[9]
  var i3132 = []
  for(var i = 0; i < i3133.length; i += 1) {
    i3132.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i3133[i + 0]) );
  }
  i3122.materialFlags = i3132
  return i3122
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i3136 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i3137 = data
  i3136.name = i3137[0]
  i3136.value = i3137[1]
  return i3136
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i3140 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i3141 = data
  i3140.name = i3141[0]
  i3140.value = new pc.Color(i3141[1], i3141[2], i3141[3], i3141[4])
  return i3140
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i3144 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i3145 = data
  i3144.name = i3145[0]
  i3144.value = new pc.Vec4( i3145[1], i3145[2], i3145[3], i3145[4] )
  return i3144
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i3148 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i3149 = data
  i3148.name = i3149[0]
  request.r(i3149[1], i3149[2], 0, i3148, 'value')
  return i3148
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i3152 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i3153 = data
  i3152.name = i3153[0]
  i3152.enabled = !!i3153[1]
  return i3152
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i3154 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i3155 = data
  i3154.name = i3155[0]
  i3154.width = i3155[1]
  i3154.height = i3155[2]
  i3154.mipmapCount = i3155[3]
  i3154.anisoLevel = i3155[4]
  i3154.filterMode = i3155[5]
  i3154.hdr = !!i3155[6]
  i3154.format = i3155[7]
  i3154.wrapMode = i3155[8]
  i3154.alphaIsTransparency = !!i3155[9]
  i3154.alphaSource = i3155[10]
  i3154.graphicsFormat = i3155[11]
  i3154.sRGBTexture = !!i3155[12]
  i3154.desiredColorSpace = i3155[13]
  i3154.wrapU = i3155[14]
  i3154.wrapV = i3155[15]
  return i3154
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i3156 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i3157 = data
  i3156.name = i3157[0]
  i3156.halfPrecision = !!i3157[1]
  i3156.useSimplification = !!i3157[2]
  i3156.useUInt32IndexFormat = !!i3157[3]
  i3156.vertexCount = i3157[4]
  i3156.aabb = i3157[5]
  var i3159 = i3157[6]
  var i3158 = []
  for(var i = 0; i < i3159.length; i += 1) {
    i3158.push( !!i3159[i + 0] );
  }
  i3156.streams = i3158
  i3156.vertices = i3157[7]
  var i3161 = i3157[8]
  var i3160 = []
  for(var i = 0; i < i3161.length; i += 1) {
    i3160.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i3161[i + 0]) );
  }
  i3156.subMeshes = i3160
  var i3163 = i3157[9]
  var i3162 = []
  for(var i = 0; i < i3163.length; i += 16) {
    i3162.push( new pc.Mat4().setData(i3163[i + 0], i3163[i + 1], i3163[i + 2], i3163[i + 3],  i3163[i + 4], i3163[i + 5], i3163[i + 6], i3163[i + 7],  i3163[i + 8], i3163[i + 9], i3163[i + 10], i3163[i + 11],  i3163[i + 12], i3163[i + 13], i3163[i + 14], i3163[i + 15]) );
  }
  i3156.bindposes = i3162
  var i3165 = i3157[10]
  var i3164 = []
  for(var i = 0; i < i3165.length; i += 1) {
    i3164.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i3165[i + 0]) );
  }
  i3156.blendShapes = i3164
  return i3156
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i3170 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i3171 = data
  i3170.triangles = i3171[0]
  return i3170
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i3176 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i3177 = data
  i3176.name = i3177[0]
  var i3179 = i3177[1]
  var i3178 = []
  for(var i = 0; i < i3179.length; i += 1) {
    i3178.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i3179[i + 0]) );
  }
  i3176.frames = i3178
  return i3176
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i3180 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i3181 = data
  i3180.name = i3181[0]
  i3180.index = i3181[1]
  i3180.startup = !!i3181[2]
  return i3180
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i3182 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i3183 = data
  i3182.aspect = i3183[0]
  i3182.orthographic = !!i3183[1]
  i3182.orthographicSize = i3183[2]
  i3182.backgroundColor = new pc.Color(i3183[3], i3183[4], i3183[5], i3183[6])
  i3182.nearClipPlane = i3183[7]
  i3182.farClipPlane = i3183[8]
  i3182.fieldOfView = i3183[9]
  i3182.depth = i3183[10]
  i3182.clearFlags = i3183[11]
  i3182.cullingMask = i3183[12]
  i3182.rect = i3183[13]
  request.r(i3183[14], i3183[15], 0, i3182, 'targetTexture')
  i3182.usePhysicalProperties = !!i3183[16]
  i3182.focalLength = i3183[17]
  i3182.sensorSize = new pc.Vec2( i3183[18], i3183[19] )
  i3182.lensShift = new pc.Vec2( i3183[20], i3183[21] )
  i3182.gateFit = i3183[22]
  i3182.commandBufferCount = i3183[23]
  i3182.cameraType = i3183[24]
  i3182.enabled = !!i3183[25]
  return i3182
}

Deserializers["CameraFollow2D"] = function (request, data, root) {
  var i3184 = root || request.c( 'CameraFollow2D' )
  var i3185 = data
  request.r(i3185[0], i3185[1], 0, i3184, 'target')
  i3184.smoothSpeed = i3185[2]
  i3184.offset = new pc.Vec3( i3185[3], i3185[4], i3185[5] )
  i3184.followY = !!i3185[6]
  return i3184
}

Deserializers["AutoCameraFit"] = function (request, data, root) {
  var i3186 = root || request.c( 'AutoCameraFit' )
  var i3187 = data
  request.r(i3187[0], i3187[1], 0, i3186, 'tallScreenObject')
  i3186.tallScreenRatioThreshold = i3187[2]
  i3186.tallScreenYOffset = i3187[3]
  request.r(i3187[4], i3187[5], 0, i3186, 'canvasBtn')
  request.r(i3187[6], i3187[7], 0, i3186, 'targetArea')
  i3186.paddingLandscape = i3187[8]
  i3186.paddingPortrait = i3187[9]
  i3186.extraPaddingSmallScreen = i3187[10]
  i3186.smallScreenThreshold = i3187[11]
  i3186.autoUpdateOnResize = !!i3187[12]
  i3186.adjustInEditMode = !!i3187[13]
  return i3186
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i3188 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i3189 = data
  i3188.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i3189[0], i3188.main)
  i3188.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i3189[1], i3188.colorBySpeed)
  i3188.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i3189[2], i3188.colorOverLifetime)
  i3188.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i3189[3], i3188.emission)
  i3188.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i3189[4], i3188.rotationBySpeed)
  i3188.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i3189[5], i3188.rotationOverLifetime)
  i3188.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i3189[6], i3188.shape)
  i3188.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i3189[7], i3188.sizeBySpeed)
  i3188.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i3189[8], i3188.sizeOverLifetime)
  i3188.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i3189[9], i3188.textureSheetAnimation)
  i3188.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i3189[10], i3188.velocityOverLifetime)
  i3188.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i3189[11], i3188.noise)
  i3188.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i3189[12], i3188.inheritVelocity)
  i3188.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i3189[13], i3188.forceOverLifetime)
  i3188.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i3189[14], i3188.limitVelocityOverLifetime)
  i3188.useAutoRandomSeed = !!i3189[15]
  i3188.randomSeed = i3189[16]
  return i3188
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i3190 = root || new pc.ParticleSystemMain()
  var i3191 = data
  i3190.duration = i3191[0]
  i3190.loop = !!i3191[1]
  i3190.prewarm = !!i3191[2]
  i3190.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3191[3], i3190.startDelay)
  i3190.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3191[4], i3190.startLifetime)
  i3190.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3191[5], i3190.startSpeed)
  i3190.startSize3D = !!i3191[6]
  i3190.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3191[7], i3190.startSizeX)
  i3190.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3191[8], i3190.startSizeY)
  i3190.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3191[9], i3190.startSizeZ)
  i3190.startRotation3D = !!i3191[10]
  i3190.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3191[11], i3190.startRotationX)
  i3190.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3191[12], i3190.startRotationY)
  i3190.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3191[13], i3190.startRotationZ)
  i3190.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i3191[14], i3190.startColor)
  i3190.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3191[15], i3190.gravityModifier)
  i3190.simulationSpace = i3191[16]
  request.r(i3191[17], i3191[18], 0, i3190, 'customSimulationSpace')
  i3190.simulationSpeed = i3191[19]
  i3190.useUnscaledTime = !!i3191[20]
  i3190.scalingMode = i3191[21]
  i3190.playOnAwake = !!i3191[22]
  i3190.maxParticles = i3191[23]
  i3190.emitterVelocityMode = i3191[24]
  i3190.stopAction = i3191[25]
  return i3190
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i3192 = root || new pc.MinMaxCurve()
  var i3193 = data
  i3192.mode = i3193[0]
  i3192.curveMin = new pc.AnimationCurve( { keys_flow: i3193[1] } )
  i3192.curveMax = new pc.AnimationCurve( { keys_flow: i3193[2] } )
  i3192.curveMultiplier = i3193[3]
  i3192.constantMin = i3193[4]
  i3192.constantMax = i3193[5]
  return i3192
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i3194 = root || new pc.MinMaxGradient()
  var i3195 = data
  i3194.mode = i3195[0]
  i3194.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i3195[1], i3194.gradientMin)
  i3194.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i3195[2], i3194.gradientMax)
  i3194.colorMin = new pc.Color(i3195[3], i3195[4], i3195[5], i3195[6])
  i3194.colorMax = new pc.Color(i3195[7], i3195[8], i3195[9], i3195[10])
  return i3194
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i3196 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i3197 = data
  i3196.mode = i3197[0]
  var i3199 = i3197[1]
  var i3198 = []
  for(var i = 0; i < i3199.length; i += 1) {
    i3198.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i3199[i + 0]) );
  }
  i3196.colorKeys = i3198
  var i3201 = i3197[2]
  var i3200 = []
  for(var i = 0; i < i3201.length; i += 1) {
    i3200.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i3201[i + 0]) );
  }
  i3196.alphaKeys = i3200
  return i3196
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i3202 = root || new pc.ParticleSystemColorBySpeed()
  var i3203 = data
  i3202.enabled = !!i3203[0]
  i3202.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i3203[1], i3202.color)
  i3202.range = new pc.Vec2( i3203[2], i3203[3] )
  return i3202
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i3206 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i3207 = data
  i3206.color = new pc.Color(i3207[0], i3207[1], i3207[2], i3207[3])
  i3206.time = i3207[4]
  return i3206
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i3210 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i3211 = data
  i3210.alpha = i3211[0]
  i3210.time = i3211[1]
  return i3210
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i3212 = root || new pc.ParticleSystemColorOverLifetime()
  var i3213 = data
  i3212.enabled = !!i3213[0]
  i3212.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i3213[1], i3212.color)
  return i3212
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i3214 = root || new pc.ParticleSystemEmitter()
  var i3215 = data
  i3214.enabled = !!i3215[0]
  i3214.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3215[1], i3214.rateOverTime)
  i3214.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3215[2], i3214.rateOverDistance)
  var i3217 = i3215[3]
  var i3216 = []
  for(var i = 0; i < i3217.length; i += 1) {
    i3216.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i3217[i + 0]) );
  }
  i3214.bursts = i3216
  return i3214
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i3220 = root || new pc.ParticleSystemBurst()
  var i3221 = data
  i3220.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3221[0], i3220.count)
  i3220.cycleCount = i3221[1]
  i3220.minCount = i3221[2]
  i3220.maxCount = i3221[3]
  i3220.repeatInterval = i3221[4]
  i3220.time = i3221[5]
  return i3220
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i3222 = root || new pc.ParticleSystemRotationBySpeed()
  var i3223 = data
  i3222.enabled = !!i3223[0]
  i3222.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3223[1], i3222.x)
  i3222.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3223[2], i3222.y)
  i3222.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3223[3], i3222.z)
  i3222.separateAxes = !!i3223[4]
  i3222.range = new pc.Vec2( i3223[5], i3223[6] )
  return i3222
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i3224 = root || new pc.ParticleSystemRotationOverLifetime()
  var i3225 = data
  i3224.enabled = !!i3225[0]
  i3224.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3225[1], i3224.x)
  i3224.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3225[2], i3224.y)
  i3224.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3225[3], i3224.z)
  i3224.separateAxes = !!i3225[4]
  return i3224
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i3226 = root || new pc.ParticleSystemShape()
  var i3227 = data
  i3226.enabled = !!i3227[0]
  i3226.shapeType = i3227[1]
  i3226.randomDirectionAmount = i3227[2]
  i3226.sphericalDirectionAmount = i3227[3]
  i3226.randomPositionAmount = i3227[4]
  i3226.alignToDirection = !!i3227[5]
  i3226.radius = i3227[6]
  i3226.radiusMode = i3227[7]
  i3226.radiusSpread = i3227[8]
  i3226.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3227[9], i3226.radiusSpeed)
  i3226.radiusThickness = i3227[10]
  i3226.angle = i3227[11]
  i3226.length = i3227[12]
  i3226.boxThickness = new pc.Vec3( i3227[13], i3227[14], i3227[15] )
  i3226.meshShapeType = i3227[16]
  request.r(i3227[17], i3227[18], 0, i3226, 'mesh')
  request.r(i3227[19], i3227[20], 0, i3226, 'meshRenderer')
  request.r(i3227[21], i3227[22], 0, i3226, 'skinnedMeshRenderer')
  i3226.useMeshMaterialIndex = !!i3227[23]
  i3226.meshMaterialIndex = i3227[24]
  i3226.useMeshColors = !!i3227[25]
  i3226.normalOffset = i3227[26]
  i3226.arc = i3227[27]
  i3226.arcMode = i3227[28]
  i3226.arcSpread = i3227[29]
  i3226.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3227[30], i3226.arcSpeed)
  i3226.donutRadius = i3227[31]
  i3226.position = new pc.Vec3( i3227[32], i3227[33], i3227[34] )
  i3226.rotation = new pc.Vec3( i3227[35], i3227[36], i3227[37] )
  i3226.scale = new pc.Vec3( i3227[38], i3227[39], i3227[40] )
  return i3226
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i3228 = root || new pc.ParticleSystemSizeBySpeed()
  var i3229 = data
  i3228.enabled = !!i3229[0]
  i3228.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3229[1], i3228.x)
  i3228.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3229[2], i3228.y)
  i3228.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3229[3], i3228.z)
  i3228.separateAxes = !!i3229[4]
  i3228.range = new pc.Vec2( i3229[5], i3229[6] )
  return i3228
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i3230 = root || new pc.ParticleSystemSizeOverLifetime()
  var i3231 = data
  i3230.enabled = !!i3231[0]
  i3230.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3231[1], i3230.x)
  i3230.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3231[2], i3230.y)
  i3230.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3231[3], i3230.z)
  i3230.separateAxes = !!i3231[4]
  return i3230
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i3232 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i3233 = data
  i3232.enabled = !!i3233[0]
  i3232.mode = i3233[1]
  i3232.animation = i3233[2]
  i3232.numTilesX = i3233[3]
  i3232.numTilesY = i3233[4]
  i3232.useRandomRow = !!i3233[5]
  i3232.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3233[6], i3232.frameOverTime)
  i3232.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3233[7], i3232.startFrame)
  i3232.cycleCount = i3233[8]
  i3232.rowIndex = i3233[9]
  i3232.flipU = i3233[10]
  i3232.flipV = i3233[11]
  i3232.spriteCount = i3233[12]
  var i3235 = i3233[13]
  var i3234 = []
  for(var i = 0; i < i3235.length; i += 2) {
  request.r(i3235[i + 0], i3235[i + 1], 2, i3234, '')
  }
  i3232.sprites = i3234
  return i3232
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i3238 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i3239 = data
  i3238.enabled = !!i3239[0]
  i3238.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3239[1], i3238.x)
  i3238.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3239[2], i3238.y)
  i3238.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3239[3], i3238.z)
  i3238.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3239[4], i3238.radial)
  i3238.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3239[5], i3238.speedModifier)
  i3238.space = i3239[6]
  i3238.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3239[7], i3238.orbitalX)
  i3238.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3239[8], i3238.orbitalY)
  i3238.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3239[9], i3238.orbitalZ)
  i3238.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3239[10], i3238.orbitalOffsetX)
  i3238.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3239[11], i3238.orbitalOffsetY)
  i3238.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3239[12], i3238.orbitalOffsetZ)
  return i3238
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i3240 = root || new pc.ParticleSystemNoise()
  var i3241 = data
  i3240.enabled = !!i3241[0]
  i3240.separateAxes = !!i3241[1]
  i3240.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3241[2], i3240.strengthX)
  i3240.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3241[3], i3240.strengthY)
  i3240.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3241[4], i3240.strengthZ)
  i3240.frequency = i3241[5]
  i3240.damping = !!i3241[6]
  i3240.octaveCount = i3241[7]
  i3240.octaveMultiplier = i3241[8]
  i3240.octaveScale = i3241[9]
  i3240.quality = i3241[10]
  i3240.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3241[11], i3240.scrollSpeed)
  i3240.scrollSpeedMultiplier = i3241[12]
  i3240.remapEnabled = !!i3241[13]
  i3240.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3241[14], i3240.remapX)
  i3240.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3241[15], i3240.remapY)
  i3240.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3241[16], i3240.remapZ)
  i3240.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3241[17], i3240.positionAmount)
  i3240.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3241[18], i3240.rotationAmount)
  i3240.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3241[19], i3240.sizeAmount)
  return i3240
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i3242 = root || new pc.ParticleSystemInheritVelocity()
  var i3243 = data
  i3242.enabled = !!i3243[0]
  i3242.mode = i3243[1]
  i3242.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3243[2], i3242.curve)
  return i3242
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i3244 = root || new pc.ParticleSystemForceOverLifetime()
  var i3245 = data
  i3244.enabled = !!i3245[0]
  i3244.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3245[1], i3244.x)
  i3244.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3245[2], i3244.y)
  i3244.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3245[3], i3244.z)
  i3244.space = i3245[4]
  i3244.randomized = !!i3245[5]
  return i3244
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i3246 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i3247 = data
  i3246.enabled = !!i3247[0]
  i3246.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3247[1], i3246.limit)
  i3246.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3247[2], i3246.limitX)
  i3246.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3247[3], i3246.limitY)
  i3246.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3247[4], i3246.limitZ)
  i3246.dampen = i3247[5]
  i3246.separateAxes = !!i3247[6]
  i3246.space = i3247[7]
  i3246.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3247[8], i3246.drag)
  i3246.multiplyDragByParticleSize = !!i3247[9]
  i3246.multiplyDragByParticleVelocity = !!i3247[10]
  return i3246
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i3248 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i3249 = data
  request.r(i3249[0], i3249[1], 0, i3248, 'mesh')
  i3248.meshCount = i3249[2]
  i3248.activeVertexStreamsCount = i3249[3]
  i3248.alignment = i3249[4]
  i3248.renderMode = i3249[5]
  i3248.sortMode = i3249[6]
  i3248.lengthScale = i3249[7]
  i3248.velocityScale = i3249[8]
  i3248.cameraVelocityScale = i3249[9]
  i3248.normalDirection = i3249[10]
  i3248.sortingFudge = i3249[11]
  i3248.minParticleSize = i3249[12]
  i3248.maxParticleSize = i3249[13]
  i3248.pivot = new pc.Vec3( i3249[14], i3249[15], i3249[16] )
  request.r(i3249[17], i3249[18], 0, i3248, 'trailMaterial')
  i3248.applyActiveColorSpace = !!i3249[19]
  i3248.enabled = !!i3249[20]
  request.r(i3249[21], i3249[22], 0, i3248, 'sharedMaterial')
  var i3251 = i3249[23]
  var i3250 = []
  for(var i = 0; i < i3251.length; i += 2) {
  request.r(i3251[i + 0], i3251[i + 1], 2, i3250, '')
  }
  i3248.sharedMaterials = i3250
  i3248.receiveShadows = !!i3249[24]
  i3248.shadowCastingMode = i3249[25]
  i3248.sortingLayerID = i3249[26]
  i3248.sortingOrder = i3249[27]
  i3248.lightmapIndex = i3249[28]
  i3248.lightmapSceneIndex = i3249[29]
  i3248.lightmapScaleOffset = new pc.Vec4( i3249[30], i3249[31], i3249[32], i3249[33] )
  i3248.lightProbeUsage = i3249[34]
  i3248.reflectionProbeUsage = i3249[35]
  return i3248
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i3254 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i3255 = data
  i3254.name = i3255[0]
  i3254.tagId = i3255[1]
  i3254.enabled = !!i3255[2]
  i3254.isStatic = !!i3255[3]
  i3254.layer = i3255[4]
  return i3254
}

Deserializers["Ply_SoundManager"] = function (request, data, root) {
  var i3256 = root || request.c( 'Ply_SoundManager' )
  var i3257 = data
  i3256.fxAudio = request.d('FxAudio', i3257[0], i3256.fxAudio)
  request.r(i3257[1], i3257[2], 0, i3256, 'bgm1')
  return i3256
}

Deserializers["FxAudio"] = function (request, data, root) {
  var i3258 = root || request.c( 'FxAudio' )
  var i3259 = data
  i3258.ClickBox = request.d('SoundData', i3259[0], i3258.ClickBox)
  i3258.Happy = request.d('SoundData', i3259[1], i3258.Happy)
  i3258.Wrong = request.d('SoundData', i3259[2], i3258.Wrong)
  i3258.Spray = request.d('SoundData', i3259[3], i3258.Spray)
  i3258.Brush = request.d('SoundData', i3259[4], i3258.Brush)
  i3258.Keo = request.d('SoundData', i3259[5], i3258.Keo)
  i3258.Confetti = request.d('SoundData', i3259[6], i3258.Confetti)
  i3258.Lose2 = request.d('SoundData', i3259[7], i3258.Lose2)
  i3258.SelectVini = request.d('SoundData', i3259[8], i3258.SelectVini)
  i3258.SelectMessiMbappe = request.d('SoundData', i3259[9], i3258.SelectMessiMbappe)
  i3258.Tackle = request.d('SoundData', i3259[10], i3258.Tackle)
  i3258.HaalandHurt = request.d('SoundData', i3259[11], i3258.HaalandHurt)
  return i3258
}

Deserializers["SoundData"] = function (request, data, root) {
  var i3260 = root || request.c( 'SoundData' )
  var i3261 = data
  request.r(i3261[0], i3261[1], 0, i3260, 'clip')
  i3260.repeatCount = i3261[2]
  return i3260
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i3262 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i3263 = data
  request.r(i3263[0], i3263[1], 0, i3262, 'clip')
  request.r(i3263[2], i3263[3], 0, i3262, 'outputAudioMixerGroup')
  i3262.playOnAwake = !!i3263[4]
  i3262.loop = !!i3263[5]
  i3262.time = i3263[6]
  i3262.volume = i3263[7]
  i3262.pitch = i3263[8]
  i3262.enabled = !!i3263[9]
  return i3262
}

Deserializers["HaalandGame.HaalandGameManager"] = function (request, data, root) {
  var i3264 = root || request.c( 'HaalandGame.HaalandGameManager' )
  var i3265 = data
  request.r(i3265[0], i3265[1], 0, i3264, 'tutUI')
  request.r(i3265[2], i3265[3], 0, i3264, 'ronaldoTackle')
  request.r(i3265[4], i3265[5], 0, i3264, 'ronaldoTackleAnimator')
  i3264.startRonaldoTackleTrigger = i3265[6]
  request.r(i3265[7], i3265[8], 0, i3264, 'messiTackle')
  request.r(i3265[9], i3265[10], 0, i3264, 'messiTackleAnimator')
  i3264.startMessiTackleTrigger = i3265[11]
  i3264.tackleAnimDelay = i3265[12]
  request.r(i3265[13], i3265[14], 0, i3264, 'haalandDribbleImage')
  request.r(i3265[15], i3265[16], 0, i3264, 'haalandDribbleAnimator')
  i3264.startHaalandDribbleTrigger = i3265[17]
  request.r(i3265[18], i3265[19], 0, i3264, 'fightingCloud')
  request.r(i3265[20], i3265[21], 0, i3264, 'haalandHurt')
  request.r(i3265[22], i3265[23], 0, i3264, 'standPlayers')
  request.r(i3265[24], i3265[25], 0, i3264, 'standPlayersAnimator')
  i3264.standPlayerEnterTrigger = i3265[26]
  request.r(i3265[27], i3265[28], 0, i3264, 'questionUI')
  request.r(i3265[29], i3265[30], 0, i3264, 'wrongChoiceUI')
  request.r(i3265[31], i3265[32], 0, i3264, 'winChoiceUI')
  request.r(i3265[33], i3265[34], 0, i3264, 'winExtraObj1')
  request.r(i3265[35], i3265[36], 0, i3264, 'winExtraObj2')
  request.r(i3265[37], i3265[38], 0, i3264, 'iconListUI')
  request.r(i3265[39], i3265[40], 0, i3264, 'refereeAnimator')
  i3264.refereeLookAroundTrigger = i3265[41]
  i3264.useAutoTimers = !!i3265[42]
  i3264.tackleHideDelay = i3265[43]
  i3264.impactCloudDelay = i3265[44]
  i3264.haalandHurtDelay = i3265[45]
  i3264.cloudDuration = i3265[46]
  i3264.refereeAnimDelay = i3265[47]
  i3264.nextActionDelay = i3265[48]
  i3264.dribbleToTackleDelay = i3265[49]
  i3264.tackleSoundDelay = i3265[50]
  request.r(i3265[51], i3265[52], 0, i3264, 'ronaldoStandAnimator')
  request.r(i3265[53], i3265[54], 0, i3264, 'viniStandAnimator')
  request.r(i3265[55], i3265[56], 0, i3264, 'messiStandAnimator')
  request.r(i3265[57], i3265[58], 0, i3264, 'mbappeStandAnimator')
  request.r(i3265[59], i3265[60], 0, i3264, 'ronaldoChatBubble')
  request.r(i3265[61], i3265[62], 0, i3264, 'messiChatBubble')
  request.r(i3265[63], i3265[64], 0, i3264, 'viniChatBubble')
  request.r(i3265[65], i3265[66], 0, i3264, 'mbappeChatBubble')
  request.r(i3265[67], i3265[68], 0, i3264, 'ronaldoSpriteRenderer')
  request.r(i3265[69], i3265[70], 0, i3264, 'ronaldoSadSprite')
  request.r(i3265[71], i3265[72], 0, i3264, 'ronaldoEvilLaughSprite')
  request.r(i3265[73], i3265[74], 0, i3264, 'messiSpriteRenderer')
  request.r(i3265[75], i3265[76], 0, i3264, 'messiSadSprite')
  request.r(i3265[77], i3265[78], 0, i3264, 'viniSpriteRenderer')
  request.r(i3265[79], i3265[80], 0, i3264, 'viniSadSprite')
  request.r(i3265[81], i3265[82], 0, i3264, 'mbappeSpriteRenderer')
  request.r(i3265[83], i3265[84], 0, i3264, 'mbappeSadSprite')
  request.r(i3265[85], i3265[86], 0, i3264, 'refereeSpriteRenderer')
  request.r(i3265[87], i3265[88], 0, i3264, 'refereeReactionSprite')
  request.r(i3265[89], i3265[90], 0, i3264, 'iconListAnimator')
  i3264.currentLevel = i3265[91]
  return i3264
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i3266 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i3267 = data
  i3266.pivot = new pc.Vec2( i3267[0], i3267[1] )
  i3266.anchorMin = new pc.Vec2( i3267[2], i3267[3] )
  i3266.anchorMax = new pc.Vec2( i3267[4], i3267[5] )
  i3266.sizeDelta = new pc.Vec2( i3267[6], i3267[7] )
  i3266.anchoredPosition3D = new pc.Vec3( i3267[8], i3267[9], i3267[10] )
  i3266.rotation = new pc.Quat(i3267[11], i3267[12], i3267[13], i3267[14])
  i3266.scale = new pc.Vec3( i3267[15], i3267[16], i3267[17] )
  return i3266
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i3268 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i3269 = data
  i3268.planeDistance = i3269[0]
  i3268.referencePixelsPerUnit = i3269[1]
  i3268.isFallbackOverlay = !!i3269[2]
  i3268.renderMode = i3269[3]
  i3268.renderOrder = i3269[4]
  i3268.sortingLayerName = i3269[5]
  i3268.sortingOrder = i3269[6]
  i3268.scaleFactor = i3269[7]
  request.r(i3269[8], i3269[9], 0, i3268, 'worldCamera')
  i3268.overrideSorting = !!i3269[10]
  i3268.pixelPerfect = !!i3269[11]
  i3268.targetDisplay = i3269[12]
  i3268.overridePixelPerfect = !!i3269[13]
  i3268.enabled = !!i3269[14]
  return i3268
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i3270 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i3271 = data
  i3270.m_UiScaleMode = i3271[0]
  i3270.m_ReferencePixelsPerUnit = i3271[1]
  i3270.m_ScaleFactor = i3271[2]
  i3270.m_ReferenceResolution = new pc.Vec2( i3271[3], i3271[4] )
  i3270.m_ScreenMatchMode = i3271[5]
  i3270.m_MatchWidthOrHeight = i3271[6]
  i3270.m_PhysicalUnit = i3271[7]
  i3270.m_FallbackScreenDPI = i3271[8]
  i3270.m_DefaultSpriteDPI = i3271[9]
  i3270.m_DynamicPixelsPerUnit = i3271[10]
  i3270.m_PresetInfoIsWorld = !!i3271[11]
  return i3270
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i3272 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i3273 = data
  i3272.m_IgnoreReversedGraphics = !!i3273[0]
  i3272.m_BlockingObjects = i3273[1]
  i3272.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i3273[2] )
  return i3272
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i3274 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i3275 = data
  i3274.cullTransparentMesh = !!i3275[0]
  return i3274
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i3276 = root || request.c( 'UnityEngine.UI.Image' )
  var i3277 = data
  request.r(i3277[0], i3277[1], 0, i3276, 'm_Sprite')
  i3276.m_Type = i3277[2]
  i3276.m_PreserveAspect = !!i3277[3]
  i3276.m_FillCenter = !!i3277[4]
  i3276.m_FillMethod = i3277[5]
  i3276.m_FillAmount = i3277[6]
  i3276.m_FillClockwise = !!i3277[7]
  i3276.m_FillOrigin = i3277[8]
  i3276.m_UseSpriteMesh = !!i3277[9]
  i3276.m_PixelsPerUnitMultiplier = i3277[10]
  request.r(i3277[11], i3277[12], 0, i3276, 'm_Material')
  i3276.m_Maskable = !!i3277[13]
  i3276.m_Color = new pc.Color(i3277[14], i3277[15], i3277[16], i3277[17])
  i3276.m_RaycastTarget = !!i3277[18]
  i3276.m_RaycastPadding = new pc.Vec4( i3277[19], i3277[20], i3277[21], i3277[22] )
  return i3276
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i3278 = root || request.c( 'UnityEngine.UI.Button' )
  var i3279 = data
  i3278.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i3279[0], i3278.m_OnClick)
  i3278.m_Navigation = request.d('UnityEngine.UI.Navigation', i3279[1], i3278.m_Navigation)
  i3278.m_Transition = i3279[2]
  i3278.m_Colors = request.d('UnityEngine.UI.ColorBlock', i3279[3], i3278.m_Colors)
  i3278.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i3279[4], i3278.m_SpriteState)
  i3278.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i3279[5], i3278.m_AnimationTriggers)
  i3278.m_Interactable = !!i3279[6]
  request.r(i3279[7], i3279[8], 0, i3278, 'm_TargetGraphic')
  return i3278
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i3280 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i3281 = data
  i3280.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i3281[0], i3280.m_PersistentCalls)
  return i3280
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i3282 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i3283 = data
  var i3285 = i3283[0]
  var i3284 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i3285.length; i += 1) {
    i3284.add(request.d('UnityEngine.Events.PersistentCall', i3285[i + 0]));
  }
  i3282.m_Calls = i3284
  return i3282
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i3288 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i3289 = data
  request.r(i3289[0], i3289[1], 0, i3288, 'm_Target')
  i3288.m_TargetAssemblyTypeName = i3289[2]
  i3288.m_MethodName = i3289[3]
  i3288.m_Mode = i3289[4]
  i3288.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i3289[5], i3288.m_Arguments)
  i3288.m_CallState = i3289[6]
  return i3288
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i3290 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i3291 = data
  request.r(i3291[0], i3291[1], 0, i3290, 'm_ObjectArgument')
  i3290.m_ObjectArgumentAssemblyTypeName = i3291[2]
  i3290.m_IntArgument = i3291[3]
  i3290.m_FloatArgument = i3291[4]
  i3290.m_StringArgument = i3291[5]
  i3290.m_BoolArgument = !!i3291[6]
  return i3290
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i3292 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i3293 = data
  i3292.m_Mode = i3293[0]
  i3292.m_WrapAround = !!i3293[1]
  request.r(i3293[2], i3293[3], 0, i3292, 'm_SelectOnUp')
  request.r(i3293[4], i3293[5], 0, i3292, 'm_SelectOnDown')
  request.r(i3293[6], i3293[7], 0, i3292, 'm_SelectOnLeft')
  request.r(i3293[8], i3293[9], 0, i3292, 'm_SelectOnRight')
  return i3292
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i3294 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i3295 = data
  i3294.m_NormalColor = new pc.Color(i3295[0], i3295[1], i3295[2], i3295[3])
  i3294.m_HighlightedColor = new pc.Color(i3295[4], i3295[5], i3295[6], i3295[7])
  i3294.m_PressedColor = new pc.Color(i3295[8], i3295[9], i3295[10], i3295[11])
  i3294.m_SelectedColor = new pc.Color(i3295[12], i3295[13], i3295[14], i3295[15])
  i3294.m_DisabledColor = new pc.Color(i3295[16], i3295[17], i3295[18], i3295[19])
  i3294.m_ColorMultiplier = i3295[20]
  i3294.m_FadeDuration = i3295[21]
  return i3294
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i3296 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i3297 = data
  request.r(i3297[0], i3297[1], 0, i3296, 'm_HighlightedSprite')
  request.r(i3297[2], i3297[3], 0, i3296, 'm_PressedSprite')
  request.r(i3297[4], i3297[5], 0, i3296, 'm_SelectedSprite')
  request.r(i3297[6], i3297[7], 0, i3296, 'm_DisabledSprite')
  return i3296
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i3298 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i3299 = data
  i3298.m_NormalTrigger = i3299[0]
  i3298.m_HighlightedTrigger = i3299[1]
  i3298.m_PressedTrigger = i3299[2]
  i3298.m_SelectedTrigger = i3299[3]
  i3298.m_DisabledTrigger = i3299[4]
  return i3298
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i3300 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i3301 = data
  request.r(i3301[0], i3301[1], 0, i3300, 'animatorController')
  request.r(i3301[2], i3301[3], 0, i3300, 'avatar')
  i3300.updateMode = i3301[4]
  i3300.hasTransformHierarchy = !!i3301[5]
  i3300.applyRootMotion = !!i3301[6]
  var i3303 = i3301[7]
  var i3302 = []
  for(var i = 0; i < i3303.length; i += 2) {
  request.r(i3303[i + 0], i3303[i + 1], 2, i3302, '')
  }
  i3300.humanBones = i3302
  i3300.enabled = !!i3301[8]
  return i3300
}

Deserializers["HaalandGame.IconListAnimator"] = function (request, data, root) {
  var i3306 = root || request.c( 'HaalandGame.IconListAnimator' )
  var i3307 = data
  var i3309 = i3307[0]
  var i3308 = []
  for(var i = 0; i < i3309.length; i += 2) {
  request.r(i3309[i + 0], i3309[i + 1], 2, i3308, '')
  }
  i3306.iconTransforms = i3308
  i3306.initialDelay = i3307[1]
  i3306.targetScaleMult = i3307[2]
  i3306.pulseDuration = i3307[3]
  i3306.delayBetweenIcons = i3307[4]
  i3306.delayBetweenLoops = i3307[5]
  return i3306
}

Deserializers["HideOnFirstClick"] = function (request, data, root) {
  var i3312 = root || request.c( 'HideOnFirstClick' )
  var i3313 = data
  request.r(i3313[0], i3313[1], 0, i3312, 'objectToHide')
  return i3312
}

Deserializers["ScreenHeightPositionAnchor"] = function (request, data, root) {
  var i3314 = root || request.c( 'ScreenHeightPositionAnchor' )
  var i3315 = data
  request.r(i3315[0], i3315[1], 0, i3314, 'anchorPoint')
  request.r(i3315[2], i3315[3], 0, i3314, 'targetCamera')
  i3314.viewportYRatio = i3315[4]
  i3314.alignOnStart = !!i3315[5]
  i3314.alignOnEnable = !!i3315[6]
  i3314.realignOnScreenSizeChanged = !!i3315[7]
  i3314.drawGizmos = !!i3315[8]
  i3314.targetLineColor = new pc.Color(i3315[9], i3315[10], i3315[11], i3315[12])
  i3314.anchorColor = new pc.Color(i3315[13], i3315[14], i3315[15], i3315[16])
  return i3314
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i3316 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i3317 = data
  i3316.color = new pc.Color(i3317[0], i3317[1], i3317[2], i3317[3])
  request.r(i3317[4], i3317[5], 0, i3316, 'sprite')
  i3316.flipX = !!i3317[6]
  i3316.flipY = !!i3317[7]
  i3316.drawMode = i3317[8]
  i3316.size = new pc.Vec2( i3317[9], i3317[10] )
  i3316.tileMode = i3317[11]
  i3316.adaptiveModeThreshold = i3317[12]
  i3316.maskInteraction = i3317[13]
  i3316.spriteSortPoint = i3317[14]
  i3316.enabled = !!i3317[15]
  request.r(i3317[16], i3317[17], 0, i3316, 'sharedMaterial')
  var i3319 = i3317[18]
  var i3318 = []
  for(var i = 0; i < i3319.length; i += 2) {
  request.r(i3319[i + 0], i3319[i + 1], 2, i3318, '')
  }
  i3316.sharedMaterials = i3318
  i3316.receiveShadows = !!i3317[19]
  i3316.shadowCastingMode = i3317[20]
  i3316.sortingLayerID = i3317[21]
  i3316.sortingOrder = i3317[22]
  i3316.lightmapIndex = i3317[23]
  i3316.lightmapSceneIndex = i3317[24]
  i3316.lightmapScaleOffset = new pc.Vec4( i3317[25], i3317[26], i3317[27], i3317[28] )
  i3316.lightProbeUsage = i3317[29]
  i3316.reflectionProbeUsage = i3317[30]
  return i3316
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i3320 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i3321 = data
  i3320.center = new pc.Vec3( i3321[0], i3321[1], i3321[2] )
  i3320.size = new pc.Vec3( i3321[3], i3321[4], i3321[5] )
  i3320.enabled = !!i3321[6]
  i3320.isTrigger = !!i3321[7]
  request.r(i3321[8], i3321[9], 0, i3320, 'material')
  return i3320
}

Deserializers["HaalandGame.PlayerSelectable"] = function (request, data, root) {
  var i3322 = root || request.c( 'HaalandGame.PlayerSelectable' )
  var i3323 = data
  i3322.playerType = i3323[0]
  i3322.targetLayerName = i3323[1]
  return i3322
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i3324 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i3325 = data
  request.r(i3325[0], i3325[1], 0, i3324, 'm_FirstSelected')
  i3324.m_sendNavigationEvents = !!i3325[2]
  i3324.m_DragThreshold = i3325[3]
  return i3324
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i3326 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i3327 = data
  i3326.m_HorizontalAxis = i3327[0]
  i3326.m_VerticalAxis = i3327[1]
  i3326.m_SubmitButton = i3327[2]
  i3326.m_CancelButton = i3327[3]
  i3326.m_InputActionsPerSecond = i3327[4]
  i3326.m_RepeatDelay = i3327[5]
  i3326.m_ForceModuleActive = !!i3327[6]
  i3326.m_SendPointerHoverToParent = !!i3327[7]
  return i3326
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i3328 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i3329 = data
  i3328.ambientIntensity = i3329[0]
  i3328.reflectionIntensity = i3329[1]
  i3328.ambientMode = i3329[2]
  i3328.ambientLight = new pc.Color(i3329[3], i3329[4], i3329[5], i3329[6])
  i3328.ambientSkyColor = new pc.Color(i3329[7], i3329[8], i3329[9], i3329[10])
  i3328.ambientGroundColor = new pc.Color(i3329[11], i3329[12], i3329[13], i3329[14])
  i3328.ambientEquatorColor = new pc.Color(i3329[15], i3329[16], i3329[17], i3329[18])
  i3328.fogColor = new pc.Color(i3329[19], i3329[20], i3329[21], i3329[22])
  i3328.fogEndDistance = i3329[23]
  i3328.fogStartDistance = i3329[24]
  i3328.fogDensity = i3329[25]
  i3328.fog = !!i3329[26]
  request.r(i3329[27], i3329[28], 0, i3328, 'skybox')
  i3328.fogMode = i3329[29]
  var i3331 = i3329[30]
  var i3330 = []
  for(var i = 0; i < i3331.length; i += 1) {
    i3330.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i3331[i + 0]) );
  }
  i3328.lightmaps = i3330
  i3328.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i3329[31], i3328.lightProbes)
  i3328.lightmapsMode = i3329[32]
  i3328.mixedBakeMode = i3329[33]
  i3328.environmentLightingMode = i3329[34]
  i3328.ambientProbe = new pc.SphericalHarmonicsL2(i3329[35])
  i3328.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i3329[36])
  i3328.useReferenceAmbientProbe = !!i3329[37]
  request.r(i3329[38], i3329[39], 0, i3328, 'customReflection')
  request.r(i3329[40], i3329[41], 0, i3328, 'defaultReflection')
  i3328.defaultReflectionMode = i3329[42]
  i3328.defaultReflectionResolution = i3329[43]
  i3328.sunLightObjectId = i3329[44]
  i3328.pixelLightCount = i3329[45]
  i3328.defaultReflectionHDR = !!i3329[46]
  i3328.hasLightDataAsset = !!i3329[47]
  i3328.hasManualGenerate = !!i3329[48]
  return i3328
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i3334 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i3335 = data
  request.r(i3335[0], i3335[1], 0, i3334, 'lightmapColor')
  request.r(i3335[2], i3335[3], 0, i3334, 'lightmapDirection')
  request.r(i3335[4], i3335[5], 0, i3334, 'shadowMask')
  return i3334
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i3336 = root || new UnityEngine.LightProbes()
  var i3337 = data
  return i3336
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i3344 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i3345 = data
  var i3347 = i3345[0]
  var i3346 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i3347.length; i += 1) {
    i3346.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i3347[i + 0]));
  }
  i3344.ShaderCompilationErrors = i3346
  i3344.name = i3345[1]
  i3344.guid = i3345[2]
  var i3349 = i3345[3]
  var i3348 = []
  for(var i = 0; i < i3349.length; i += 1) {
    i3348.push( i3349[i + 0] );
  }
  i3344.shaderDefinedKeywords = i3348
  var i3351 = i3345[4]
  var i3350 = []
  for(var i = 0; i < i3351.length; i += 1) {
    i3350.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i3351[i + 0]) );
  }
  i3344.passes = i3350
  var i3353 = i3345[5]
  var i3352 = []
  for(var i = 0; i < i3353.length; i += 1) {
    i3352.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i3353[i + 0]) );
  }
  i3344.usePasses = i3352
  var i3355 = i3345[6]
  var i3354 = []
  for(var i = 0; i < i3355.length; i += 1) {
    i3354.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i3355[i + 0]) );
  }
  i3344.defaultParameterValues = i3354
  request.r(i3345[7], i3345[8], 0, i3344, 'unityFallbackShader')
  i3344.readDepth = !!i3345[9]
  i3344.hasDepthOnlyPass = !!i3345[10]
  i3344.isCreatedByShaderGraph = !!i3345[11]
  i3344.disableBatching = !!i3345[12]
  i3344.compiled = !!i3345[13]
  return i3344
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i3358 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i3359 = data
  i3358.shaderName = i3359[0]
  i3358.errorMessage = i3359[1]
  return i3358
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i3364 = root || new pc.UnityShaderPass()
  var i3365 = data
  i3364.id = i3365[0]
  i3364.subShaderIndex = i3365[1]
  i3364.name = i3365[2]
  i3364.passType = i3365[3]
  i3364.grabPassTextureName = i3365[4]
  i3364.usePass = !!i3365[5]
  i3364.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3365[6], i3364.zTest)
  i3364.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3365[7], i3364.zWrite)
  i3364.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3365[8], i3364.culling)
  i3364.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i3365[9], i3364.blending)
  i3364.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i3365[10], i3364.alphaBlending)
  i3364.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3365[11], i3364.colorWriteMask)
  i3364.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3365[12], i3364.offsetUnits)
  i3364.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3365[13], i3364.offsetFactor)
  i3364.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3365[14], i3364.stencilRef)
  i3364.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3365[15], i3364.stencilReadMask)
  i3364.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3365[16], i3364.stencilWriteMask)
  i3364.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3365[17], i3364.stencilOp)
  i3364.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3365[18], i3364.stencilOpFront)
  i3364.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3365[19], i3364.stencilOpBack)
  var i3367 = i3365[20]
  var i3366 = []
  for(var i = 0; i < i3367.length; i += 1) {
    i3366.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i3367[i + 0]) );
  }
  i3364.tags = i3366
  var i3369 = i3365[21]
  var i3368 = []
  for(var i = 0; i < i3369.length; i += 1) {
    i3368.push( i3369[i + 0] );
  }
  i3364.passDefinedKeywords = i3368
  var i3371 = i3365[22]
  var i3370 = []
  for(var i = 0; i < i3371.length; i += 1) {
    i3370.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i3371[i + 0]) );
  }
  i3364.passDefinedKeywordGroups = i3370
  var i3373 = i3365[23]
  var i3372 = []
  for(var i = 0; i < i3373.length; i += 1) {
    i3372.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i3373[i + 0]) );
  }
  i3364.variants = i3372
  var i3375 = i3365[24]
  var i3374 = []
  for(var i = 0; i < i3375.length; i += 1) {
    i3374.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i3375[i + 0]) );
  }
  i3364.excludedVariants = i3374
  i3364.hasDepthReader = !!i3365[25]
  return i3364
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i3376 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i3377 = data
  i3376.val = i3377[0]
  i3376.name = i3377[1]
  return i3376
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i3378 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i3379 = data
  i3378.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3379[0], i3378.src)
  i3378.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3379[1], i3378.dst)
  i3378.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3379[2], i3378.op)
  return i3378
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i3380 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i3381 = data
  i3380.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3381[0], i3380.pass)
  i3380.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3381[1], i3380.fail)
  i3380.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3381[2], i3380.zFail)
  i3380.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3381[3], i3380.comp)
  return i3380
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i3384 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i3385 = data
  i3384.name = i3385[0]
  i3384.value = i3385[1]
  return i3384
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i3388 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i3389 = data
  var i3391 = i3389[0]
  var i3390 = []
  for(var i = 0; i < i3391.length; i += 1) {
    i3390.push( i3391[i + 0] );
  }
  i3388.keywords = i3390
  i3388.hasDiscard = !!i3389[1]
  return i3388
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i3394 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i3395 = data
  i3394.passId = i3395[0]
  i3394.subShaderIndex = i3395[1]
  var i3397 = i3395[2]
  var i3396 = []
  for(var i = 0; i < i3397.length; i += 1) {
    i3396.push( i3397[i + 0] );
  }
  i3394.keywords = i3396
  i3394.vertexProgram = i3395[3]
  i3394.fragmentProgram = i3395[4]
  i3394.exportedForWebGl2 = !!i3395[5]
  i3394.readDepth = !!i3395[6]
  return i3394
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i3400 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i3401 = data
  request.r(i3401[0], i3401[1], 0, i3400, 'shader')
  i3400.pass = i3401[2]
  return i3400
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i3404 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i3405 = data
  i3404.name = i3405[0]
  i3404.type = i3405[1]
  i3404.value = new pc.Vec4( i3405[2], i3405[3], i3405[4], i3405[5] )
  i3404.textureValue = i3405[6]
  i3404.shaderPropertyFlag = i3405[7]
  return i3404
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i3406 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i3407 = data
  i3406.name = i3407[0]
  request.r(i3407[1], i3407[2], 0, i3406, 'texture')
  i3406.aabb = i3407[3]
  i3406.vertices = i3407[4]
  i3406.triangles = i3407[5]
  i3406.textureRect = UnityEngine.Rect.MinMaxRect(i3407[6], i3407[7], i3407[8], i3407[9])
  i3406.packedRect = UnityEngine.Rect.MinMaxRect(i3407[10], i3407[11], i3407[12], i3407[13])
  i3406.border = new pc.Vec4( i3407[14], i3407[15], i3407[16], i3407[17] )
  i3406.transparency = i3407[18]
  i3406.bounds = i3407[19]
  i3406.pixelsPerUnit = i3407[20]
  i3406.textureWidth = i3407[21]
  i3406.textureHeight = i3407[22]
  i3406.nativeSize = new pc.Vec2( i3407[23], i3407[24] )
  i3406.pivot = new pc.Vec2( i3407[25], i3407[26] )
  i3406.textureRectOffset = new pc.Vec2( i3407[27], i3407[28] )
  return i3406
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i3408 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i3409 = data
  i3408.name = i3409[0]
  return i3408
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i3410 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i3411 = data
  i3410.name = i3411[0]
  i3410.wrapMode = i3411[1]
  i3410.isLooping = !!i3411[2]
  i3410.length = i3411[3]
  var i3413 = i3411[4]
  var i3412 = []
  for(var i = 0; i < i3413.length; i += 1) {
    i3412.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i3413[i + 0]) );
  }
  i3410.curves = i3412
  var i3415 = i3411[5]
  var i3414 = []
  for(var i = 0; i < i3415.length; i += 1) {
    i3414.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i3415[i + 0]) );
  }
  i3410.events = i3414
  i3410.halfPrecision = !!i3411[6]
  i3410._frameRate = i3411[7]
  i3410.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i3411[8], i3410.localBounds)
  i3410.hasMuscleCurves = !!i3411[9]
  var i3417 = i3411[10]
  var i3416 = []
  for(var i = 0; i < i3417.length; i += 1) {
    i3416.push( i3417[i + 0] );
  }
  i3410.clipMuscleConstant = i3416
  i3410.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i3411[11], i3410.clipBindingConstant)
  return i3410
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i3420 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i3421 = data
  i3420.path = i3421[0]
  i3420.hash = i3421[1]
  i3420.componentType = i3421[2]
  i3420.property = i3421[3]
  i3420.keys = i3421[4]
  var i3423 = i3421[5]
  var i3422 = []
  for(var i = 0; i < i3423.length; i += 1) {
    i3422.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i3423[i + 0]) );
  }
  i3420.objectReferenceKeys = i3422
  return i3420
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i3426 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i3427 = data
  i3426.time = i3427[0]
  request.r(i3427[1], i3427[2], 0, i3426, 'value')
  return i3426
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i3430 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i3431 = data
  i3430.functionName = i3431[0]
  i3430.floatParameter = i3431[1]
  i3430.intParameter = i3431[2]
  i3430.stringParameter = i3431[3]
  request.r(i3431[4], i3431[5], 0, i3430, 'objectReferenceParameter')
  i3430.time = i3431[6]
  return i3430
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i3432 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i3433 = data
  i3432.center = new pc.Vec3( i3433[0], i3433[1], i3433[2] )
  i3432.extends = new pc.Vec3( i3433[3], i3433[4], i3433[5] )
  return i3432
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i3436 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i3437 = data
  var i3439 = i3437[0]
  var i3438 = []
  for(var i = 0; i < i3439.length; i += 1) {
    i3438.push( i3439[i + 0] );
  }
  i3436.genericBindings = i3438
  var i3441 = i3437[1]
  var i3440 = []
  for(var i = 0; i < i3441.length; i += 1) {
    i3440.push( i3441[i + 0] );
  }
  i3436.pptrCurveMapping = i3440
  return i3436
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i3442 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i3443 = data
  i3442.name = i3443[0]
  i3442.ascent = i3443[1]
  i3442.originalLineHeight = i3443[2]
  i3442.fontSize = i3443[3]
  var i3445 = i3443[4]
  var i3444 = []
  for(var i = 0; i < i3445.length; i += 1) {
    i3444.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i3445[i + 0]) );
  }
  i3442.characterInfo = i3444
  request.r(i3443[5], i3443[6], 0, i3442, 'texture')
  i3442.originalFontSize = i3443[7]
  return i3442
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i3448 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i3449 = data
  i3448.index = i3449[0]
  i3448.advance = i3449[1]
  i3448.bearing = i3449[2]
  i3448.glyphWidth = i3449[3]
  i3448.glyphHeight = i3449[4]
  i3448.minX = i3449[5]
  i3448.maxX = i3449[6]
  i3448.minY = i3449[7]
  i3448.maxY = i3449[8]
  i3448.uvBottomLeftX = i3449[9]
  i3448.uvBottomLeftY = i3449[10]
  i3448.uvBottomRightX = i3449[11]
  i3448.uvBottomRightY = i3449[12]
  i3448.uvTopLeftX = i3449[13]
  i3448.uvTopLeftY = i3449[14]
  i3448.uvTopRightX = i3449[15]
  i3448.uvTopRightY = i3449[16]
  return i3448
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i3450 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i3451 = data
  i3450.name = i3451[0]
  var i3453 = i3451[1]
  var i3452 = []
  for(var i = 0; i < i3453.length; i += 1) {
    i3452.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i3453[i + 0]) );
  }
  i3450.layers = i3452
  var i3455 = i3451[2]
  var i3454 = []
  for(var i = 0; i < i3455.length; i += 1) {
    i3454.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i3455[i + 0]) );
  }
  i3450.parameters = i3454
  i3450.animationClips = i3451[3]
  i3450.avatarUnsupported = i3451[4]
  return i3450
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i3458 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i3459 = data
  i3458.name = i3459[0]
  i3458.defaultWeight = i3459[1]
  i3458.blendingMode = i3459[2]
  i3458.avatarMask = i3459[3]
  i3458.syncedLayerIndex = i3459[4]
  i3458.syncedLayerAffectsTiming = !!i3459[5]
  i3458.syncedLayers = i3459[6]
  i3458.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i3459[7], i3458.stateMachine)
  return i3458
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i3460 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i3461 = data
  i3460.id = i3461[0]
  i3460.name = i3461[1]
  i3460.path = i3461[2]
  var i3463 = i3461[3]
  var i3462 = []
  for(var i = 0; i < i3463.length; i += 1) {
    i3462.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i3463[i + 0]) );
  }
  i3460.states = i3462
  var i3465 = i3461[4]
  var i3464 = []
  for(var i = 0; i < i3465.length; i += 1) {
    i3464.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i3465[i + 0]) );
  }
  i3460.machines = i3464
  var i3467 = i3461[5]
  var i3466 = []
  for(var i = 0; i < i3467.length; i += 1) {
    i3466.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i3467[i + 0]) );
  }
  i3460.entryStateTransitions = i3466
  var i3469 = i3461[6]
  var i3468 = []
  for(var i = 0; i < i3469.length; i += 1) {
    i3468.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i3469[i + 0]) );
  }
  i3460.exitStateTransitions = i3468
  var i3471 = i3461[7]
  var i3470 = []
  for(var i = 0; i < i3471.length; i += 1) {
    i3470.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i3471[i + 0]) );
  }
  i3460.anyStateTransitions = i3470
  i3460.defaultStateId = i3461[8]
  return i3460
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i3474 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i3475 = data
  i3474.id = i3475[0]
  i3474.name = i3475[1]
  i3474.cycleOffset = i3475[2]
  i3474.cycleOffsetParameter = i3475[3]
  i3474.cycleOffsetParameterActive = !!i3475[4]
  i3474.mirror = !!i3475[5]
  i3474.mirrorParameter = i3475[6]
  i3474.mirrorParameterActive = !!i3475[7]
  i3474.motionId = i3475[8]
  i3474.nameHash = i3475[9]
  i3474.fullPathHash = i3475[10]
  i3474.speed = i3475[11]
  i3474.speedParameter = i3475[12]
  i3474.speedParameterActive = !!i3475[13]
  i3474.tag = i3475[14]
  i3474.tagHash = i3475[15]
  i3474.writeDefaultValues = !!i3475[16]
  var i3477 = i3475[17]
  var i3476 = []
  for(var i = 0; i < i3477.length; i += 2) {
  request.r(i3477[i + 0], i3477[i + 1], 2, i3476, '')
  }
  i3474.behaviours = i3476
  var i3479 = i3475[18]
  var i3478 = []
  for(var i = 0; i < i3479.length; i += 1) {
    i3478.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i3479[i + 0]) );
  }
  i3474.transitions = i3478
  return i3474
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i3484 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i3485 = data
  i3484.fullPath = i3485[0]
  i3484.canTransitionToSelf = !!i3485[1]
  i3484.duration = i3485[2]
  i3484.exitTime = i3485[3]
  i3484.hasExitTime = !!i3485[4]
  i3484.hasFixedDuration = !!i3485[5]
  i3484.interruptionSource = i3485[6]
  i3484.offset = i3485[7]
  i3484.orderedInterruption = !!i3485[8]
  i3484.destinationStateId = i3485[9]
  i3484.isExit = !!i3485[10]
  i3484.mute = !!i3485[11]
  i3484.solo = !!i3485[12]
  var i3487 = i3485[13]
  var i3486 = []
  for(var i = 0; i < i3487.length; i += 1) {
    i3486.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i3487[i + 0]) );
  }
  i3484.conditions = i3486
  return i3484
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i3492 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i3493 = data
  i3492.destinationStateId = i3493[0]
  i3492.isExit = !!i3493[1]
  i3492.mute = !!i3493[2]
  i3492.solo = !!i3493[3]
  var i3495 = i3493[4]
  var i3494 = []
  for(var i = 0; i < i3495.length; i += 1) {
    i3494.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i3495[i + 0]) );
  }
  i3492.conditions = i3494
  return i3492
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i3498 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i3499 = data
  i3498.mode = i3499[0]
  i3498.parameter = i3499[1]
  i3498.threshold = i3499[2]
  return i3498
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i3502 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i3503 = data
  i3502.defaultBool = !!i3503[0]
  i3502.defaultFloat = i3503[1]
  i3502.defaultInt = i3503[2]
  i3502.name = i3503[3]
  i3502.nameHash = i3503[4]
  i3502.type = i3503[5]
  return i3502
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i3504 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i3505 = data
  i3504.name = i3505[0]
  i3504.bytes64 = i3505[1]
  i3504.data = i3505[2]
  return i3504
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i3506 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i3507 = data
  i3506.useSafeMode = !!i3507[0]
  i3506.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i3507[1], i3506.safeModeOptions)
  i3506.timeScale = i3507[2]
  i3506.unscaledTimeScale = i3507[3]
  i3506.useSmoothDeltaTime = !!i3507[4]
  i3506.maxSmoothUnscaledTime = i3507[5]
  i3506.rewindCallbackMode = i3507[6]
  i3506.showUnityEditorReport = !!i3507[7]
  i3506.logBehaviour = i3507[8]
  i3506.drawGizmos = !!i3507[9]
  i3506.defaultRecyclable = !!i3507[10]
  i3506.defaultAutoPlay = i3507[11]
  i3506.defaultUpdateType = i3507[12]
  i3506.defaultTimeScaleIndependent = !!i3507[13]
  i3506.defaultEaseType = i3507[14]
  i3506.defaultEaseOvershootOrAmplitude = i3507[15]
  i3506.defaultEasePeriod = i3507[16]
  i3506.defaultAutoKill = !!i3507[17]
  i3506.defaultLoopType = i3507[18]
  i3506.debugMode = !!i3507[19]
  i3506.debugStoreTargetId = !!i3507[20]
  i3506.showPreviewPanel = !!i3507[21]
  i3506.storeSettingsLocation = i3507[22]
  i3506.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i3507[23], i3506.modules)
  i3506.createASMDEF = !!i3507[24]
  i3506.showPlayingTweens = !!i3507[25]
  i3506.showPausedTweens = !!i3507[26]
  return i3506
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i3508 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i3509 = data
  i3508.logBehaviour = i3509[0]
  i3508.nestedTweenFailureBehaviour = i3509[1]
  return i3508
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i3510 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i3511 = data
  i3510.showPanel = !!i3511[0]
  i3510.audioEnabled = !!i3511[1]
  i3510.physicsEnabled = !!i3511[2]
  i3510.physics2DEnabled = !!i3511[3]
  i3510.spriteEnabled = !!i3511[4]
  i3510.uiEnabled = !!i3511[5]
  i3510.uiToolkitEnabled = !!i3511[6]
  i3510.textMeshProEnabled = !!i3511[7]
  i3510.tk2DEnabled = !!i3511[8]
  i3510.deAudioEnabled = !!i3511[9]
  i3510.deUnityExtendedEnabled = !!i3511[10]
  i3510.epoOutlineEnabled = !!i3511[11]
  return i3510
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i3512 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i3513 = data
  i3512.normalStyle = i3513[0]
  i3512.normalSpacingOffset = i3513[1]
  i3512.boldStyle = i3513[2]
  i3512.boldSpacing = i3513[3]
  i3512.italicStyle = i3513[4]
  i3512.tabSize = i3513[5]
  request.r(i3513[6], i3513[7], 0, i3512, 'atlas')
  i3512.m_SourceFontFileGUID = i3513[8]
  i3512.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i3513[9], i3512.m_CreationSettings)
  request.r(i3513[10], i3513[11], 0, i3512, 'm_SourceFontFile')
  i3512.m_SourceFontFilePath = i3513[12]
  i3512.m_AtlasPopulationMode = i3513[13]
  i3512.InternalDynamicOS = !!i3513[14]
  var i3515 = i3513[15]
  var i3514 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i3515.length; i += 1) {
    i3514.add(request.d('UnityEngine.TextCore.Glyph', i3515[i + 0]));
  }
  i3512.m_GlyphTable = i3514
  var i3517 = i3513[16]
  var i3516 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i3517.length; i += 1) {
    i3516.add(request.d('TMPro.TMP_Character', i3517[i + 0]));
  }
  i3512.m_CharacterTable = i3516
  var i3519 = i3513[17]
  var i3518 = []
  for(var i = 0; i < i3519.length; i += 2) {
  request.r(i3519[i + 0], i3519[i + 1], 2, i3518, '')
  }
  i3512.m_AtlasTextures = i3518
  i3512.m_AtlasTextureIndex = i3513[18]
  i3512.m_IsMultiAtlasTexturesEnabled = !!i3513[19]
  i3512.m_GetFontFeatures = !!i3513[20]
  i3512.m_ClearDynamicDataOnBuild = !!i3513[21]
  i3512.m_AtlasWidth = i3513[22]
  i3512.m_AtlasHeight = i3513[23]
  i3512.m_AtlasPadding = i3513[24]
  i3512.m_AtlasRenderMode = i3513[25]
  var i3521 = i3513[26]
  var i3520 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i3521.length; i += 1) {
    i3520.add(request.d('UnityEngine.TextCore.GlyphRect', i3521[i + 0]));
  }
  i3512.m_UsedGlyphRects = i3520
  var i3523 = i3513[27]
  var i3522 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i3523.length; i += 1) {
    i3522.add(request.d('UnityEngine.TextCore.GlyphRect', i3523[i + 0]));
  }
  i3512.m_FreeGlyphRects = i3522
  i3512.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i3513[28], i3512.m_FontFeatureTable)
  i3512.m_ShouldReimportFontFeatures = !!i3513[29]
  var i3525 = i3513[30]
  var i3524 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i3525.length; i += 2) {
  request.r(i3525[i + 0], i3525[i + 1], 1, i3524, '')
  }
  i3512.m_FallbackFontAssetTable = i3524
  var i3527 = i3513[31]
  var i3526 = []
  for(var i = 0; i < i3527.length; i += 1) {
    i3526.push( request.d('TMPro.TMP_FontWeightPair', i3527[i + 0]) );
  }
  i3512.m_FontWeightTable = i3526
  var i3529 = i3513[32]
  var i3528 = []
  for(var i = 0; i < i3529.length; i += 1) {
    i3528.push( request.d('TMPro.TMP_FontWeightPair', i3529[i + 0]) );
  }
  i3512.fontWeights = i3528
  i3512.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i3513[33], i3512.m_fontInfo)
  var i3531 = i3513[34]
  var i3530 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i3531.length; i += 1) {
    i3530.add(request.d('TMPro.TMP_Glyph', i3531[i + 0]));
  }
  i3512.m_glyphInfoList = i3530
  i3512.m_KerningTable = request.d('TMPro.KerningTable', i3513[35], i3512.m_KerningTable)
  var i3533 = i3513[36]
  var i3532 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i3533.length; i += 2) {
  request.r(i3533[i + 0], i3533[i + 1], 1, i3532, '')
  }
  i3512.fallbackFontAssets = i3532
  i3512.m_Version = i3513[37]
  i3512.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i3513[38], i3512.m_FaceInfo)
  request.r(i3513[39], i3513[40], 0, i3512, 'm_Material')
  return i3512
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i3534 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i3535 = data
  i3534.sourceFontFileName = i3535[0]
  i3534.sourceFontFileGUID = i3535[1]
  i3534.faceIndex = i3535[2]
  i3534.pointSizeSamplingMode = i3535[3]
  i3534.pointSize = i3535[4]
  i3534.padding = i3535[5]
  i3534.paddingMode = i3535[6]
  i3534.packingMode = i3535[7]
  i3534.atlasWidth = i3535[8]
  i3534.atlasHeight = i3535[9]
  i3534.characterSetSelectionMode = i3535[10]
  i3534.characterSequence = i3535[11]
  i3534.referencedFontAssetGUID = i3535[12]
  i3534.referencedTextAssetGUID = i3535[13]
  i3534.fontStyle = i3535[14]
  i3534.fontStyleModifier = i3535[15]
  i3534.renderMode = i3535[16]
  i3534.includeFontFeatures = !!i3535[17]
  return i3534
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i3538 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i3539 = data
  i3538.m_Index = i3539[0]
  i3538.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i3539[1], i3538.m_Metrics)
  i3538.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i3539[2], i3538.m_GlyphRect)
  i3538.m_Scale = i3539[3]
  i3538.m_AtlasIndex = i3539[4]
  i3538.m_ClassDefinitionType = i3539[5]
  return i3538
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i3542 = root || request.c( 'TMPro.TMP_Character' )
  var i3543 = data
  i3542.m_ElementType = i3543[0]
  i3542.m_Unicode = i3543[1]
  i3542.m_GlyphIndex = i3543[2]
  i3542.m_Scale = i3543[3]
  return i3542
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i3548 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i3549 = data
  i3548.m_X = i3549[0]
  i3548.m_Y = i3549[1]
  i3548.m_Width = i3549[2]
  i3548.m_Height = i3549[3]
  return i3548
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i3550 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i3551 = data
  var i3553 = i3551[0]
  var i3552 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i3553.length; i += 1) {
    i3552.add(request.d('TMPro.MultipleSubstitutionRecord', i3553[i + 0]));
  }
  i3550.m_MultipleSubstitutionRecords = i3552
  var i3555 = i3551[1]
  var i3554 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i3555.length; i += 1) {
    i3554.add(request.d('TMPro.LigatureSubstitutionRecord', i3555[i + 0]));
  }
  i3550.m_LigatureSubstitutionRecords = i3554
  var i3557 = i3551[2]
  var i3556 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i3557.length; i += 1) {
    i3556.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i3557[i + 0]));
  }
  i3550.m_GlyphPairAdjustmentRecords = i3556
  var i3559 = i3551[3]
  var i3558 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i3559.length; i += 1) {
    i3558.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i3559[i + 0]));
  }
  i3550.m_MarkToBaseAdjustmentRecords = i3558
  var i3561 = i3551[4]
  var i3560 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i3561.length; i += 1) {
    i3560.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i3561[i + 0]));
  }
  i3550.m_MarkToMarkAdjustmentRecords = i3560
  return i3550
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i3564 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i3565 = data
  i3564.m_TargetGlyphID = i3565[0]
  i3564.m_SubstituteGlyphIDs = i3565[1]
  return i3564
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i3568 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i3569 = data
  i3568.m_ComponentGlyphIDs = i3569[0]
  i3568.m_LigatureGlyphID = i3569[1]
  return i3568
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i3572 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i3573 = data
  i3572.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i3573[0], i3572.m_FirstAdjustmentRecord)
  i3572.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i3573[1], i3572.m_SecondAdjustmentRecord)
  i3572.m_FeatureLookupFlags = i3573[2]
  return i3572
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i3574 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i3575 = data
  i3574.m_GlyphIndex = i3575[0]
  i3574.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i3575[1], i3574.m_GlyphValueRecord)
  return i3574
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i3576 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i3577 = data
  i3576.m_XPlacement = i3577[0]
  i3576.m_YPlacement = i3577[1]
  i3576.m_XAdvance = i3577[2]
  i3576.m_YAdvance = i3577[3]
  return i3576
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i3580 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i3581 = data
  i3580.m_BaseGlyphID = i3581[0]
  i3580.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i3581[1], i3580.m_BaseGlyphAnchorPoint)
  i3580.m_MarkGlyphID = i3581[2]
  i3580.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i3581[3], i3580.m_MarkPositionAdjustment)
  return i3580
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i3584 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i3585 = data
  i3584.m_BaseMarkGlyphID = i3585[0]
  i3584.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i3585[1], i3584.m_BaseMarkGlyphAnchorPoint)
  i3584.m_CombiningMarkGlyphID = i3585[2]
  i3584.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i3585[3], i3584.m_CombiningMarkPositionAdjustment)
  return i3584
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i3590 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i3591 = data
  request.r(i3591[0], i3591[1], 0, i3590, 'regularTypeface')
  request.r(i3591[2], i3591[3], 0, i3590, 'italicTypeface')
  return i3590
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i3592 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i3593 = data
  i3592.Name = i3593[0]
  i3592.PointSize = i3593[1]
  i3592.Scale = i3593[2]
  i3592.CharacterCount = i3593[3]
  i3592.LineHeight = i3593[4]
  i3592.Baseline = i3593[5]
  i3592.Ascender = i3593[6]
  i3592.CapHeight = i3593[7]
  i3592.Descender = i3593[8]
  i3592.CenterLine = i3593[9]
  i3592.SuperscriptOffset = i3593[10]
  i3592.SubscriptOffset = i3593[11]
  i3592.SubSize = i3593[12]
  i3592.Underline = i3593[13]
  i3592.UnderlineThickness = i3593[14]
  i3592.strikethrough = i3593[15]
  i3592.strikethroughThickness = i3593[16]
  i3592.TabWidth = i3593[17]
  i3592.Padding = i3593[18]
  i3592.AtlasWidth = i3593[19]
  i3592.AtlasHeight = i3593[20]
  return i3592
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i3596 = root || request.c( 'TMPro.TMP_Glyph' )
  var i3597 = data
  i3596.id = i3597[0]
  i3596.x = i3597[1]
  i3596.y = i3597[2]
  i3596.width = i3597[3]
  i3596.height = i3597[4]
  i3596.xOffset = i3597[5]
  i3596.yOffset = i3597[6]
  i3596.xAdvance = i3597[7]
  i3596.scale = i3597[8]
  return i3596
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i3598 = root || request.c( 'TMPro.KerningTable' )
  var i3599 = data
  var i3601 = i3599[0]
  var i3600 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i3601.length; i += 1) {
    i3600.add(request.d('TMPro.KerningPair', i3601[i + 0]));
  }
  i3598.kerningPairs = i3600
  return i3598
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i3604 = root || request.c( 'TMPro.KerningPair' )
  var i3605 = data
  i3604.xOffset = i3605[0]
  i3604.m_FirstGlyph = i3605[1]
  i3604.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i3605[2], i3604.m_FirstGlyphAdjustments)
  i3604.m_SecondGlyph = i3605[3]
  i3604.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i3605[4], i3604.m_SecondGlyphAdjustments)
  i3604.m_IgnoreSpacingAdjustments = !!i3605[5]
  return i3604
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i3606 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i3607 = data
  i3606.m_FaceIndex = i3607[0]
  i3606.m_FamilyName = i3607[1]
  i3606.m_StyleName = i3607[2]
  i3606.m_PointSize = i3607[3]
  i3606.m_Scale = i3607[4]
  i3606.m_UnitsPerEM = i3607[5]
  i3606.m_LineHeight = i3607[6]
  i3606.m_AscentLine = i3607[7]
  i3606.m_CapLine = i3607[8]
  i3606.m_MeanLine = i3607[9]
  i3606.m_Baseline = i3607[10]
  i3606.m_DescentLine = i3607[11]
  i3606.m_SuperscriptOffset = i3607[12]
  i3606.m_SuperscriptSize = i3607[13]
  i3606.m_SubscriptOffset = i3607[14]
  i3606.m_SubscriptSize = i3607[15]
  i3606.m_UnderlineOffset = i3607[16]
  i3606.m_UnderlineThickness = i3607[17]
  i3606.m_StrikethroughOffset = i3607[18]
  i3606.m_StrikethroughThickness = i3607[19]
  i3606.m_TabWidth = i3607[20]
  return i3606
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i3608 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i3609 = data
  i3608.m_Width = i3609[0]
  i3608.m_Height = i3609[1]
  i3608.m_HorizontalBearingX = i3609[2]
  i3608.m_HorizontalBearingY = i3609[3]
  i3608.m_HorizontalAdvance = i3609[4]
  return i3608
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i3610 = root || request.c( 'TMPro.TMP_Settings' )
  var i3611 = data
  i3610.assetVersion = i3611[0]
  i3610.m_TextWrappingMode = i3611[1]
  i3610.m_enableKerning = !!i3611[2]
  var i3613 = i3611[3]
  var i3612 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i3613.length; i += 1) {
    i3612.add(i3613[i + 0]);
  }
  i3610.m_ActiveFontFeatures = i3612
  i3610.m_enableExtraPadding = !!i3611[4]
  i3610.m_enableTintAllSprites = !!i3611[5]
  i3610.m_enableParseEscapeCharacters = !!i3611[6]
  i3610.m_EnableRaycastTarget = !!i3611[7]
  i3610.m_GetFontFeaturesAtRuntime = !!i3611[8]
  i3610.m_missingGlyphCharacter = i3611[9]
  i3610.m_ClearDynamicDataOnBuild = !!i3611[10]
  i3610.m_warningsDisabled = !!i3611[11]
  request.r(i3611[12], i3611[13], 0, i3610, 'm_defaultFontAsset')
  i3610.m_defaultFontAssetPath = i3611[14]
  i3610.m_defaultFontSize = i3611[15]
  i3610.m_defaultAutoSizeMinRatio = i3611[16]
  i3610.m_defaultAutoSizeMaxRatio = i3611[17]
  i3610.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i3611[18], i3611[19] )
  i3610.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i3611[20], i3611[21] )
  i3610.m_autoSizeTextContainer = !!i3611[22]
  i3610.m_IsTextObjectScaleStatic = !!i3611[23]
  var i3615 = i3611[24]
  var i3614 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i3615.length; i += 2) {
  request.r(i3615[i + 0], i3615[i + 1], 1, i3614, '')
  }
  i3610.m_fallbackFontAssets = i3614
  i3610.m_matchMaterialPreset = !!i3611[25]
  i3610.m_HideSubTextObjects = !!i3611[26]
  request.r(i3611[27], i3611[28], 0, i3610, 'm_defaultSpriteAsset')
  i3610.m_defaultSpriteAssetPath = i3611[29]
  i3610.m_enableEmojiSupport = !!i3611[30]
  i3610.m_MissingCharacterSpriteUnicode = i3611[31]
  var i3617 = i3611[32]
  var i3616 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i3617.length; i += 2) {
  request.r(i3617[i + 0], i3617[i + 1], 1, i3616, '')
  }
  i3610.m_EmojiFallbackTextAssets = i3616
  i3610.m_defaultColorGradientPresetsPath = i3611[33]
  request.r(i3611[34], i3611[35], 0, i3610, 'm_defaultStyleSheet')
  i3610.m_StyleSheetsResourcePath = i3611[36]
  request.r(i3611[37], i3611[38], 0, i3610, 'm_leadingCharacters')
  request.r(i3611[39], i3611[40], 0, i3610, 'm_followingCharacters')
  i3610.m_UseModernHangulLineBreakingRules = !!i3611[41]
  return i3610
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i3622 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i3623 = data
  request.r(i3623[0], i3623[1], 0, i3622, 'spriteSheet')
  var i3625 = i3623[2]
  var i3624 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i3625.length; i += 1) {
    i3624.add(request.d('TMPro.TMP_Sprite', i3625[i + 0]));
  }
  i3622.spriteInfoList = i3624
  var i3627 = i3623[3]
  var i3626 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i3627.length; i += 2) {
  request.r(i3627[i + 0], i3627[i + 1], 1, i3626, '')
  }
  i3622.fallbackSpriteAssets = i3626
  var i3629 = i3623[4]
  var i3628 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i3629.length; i += 1) {
    i3628.add(request.d('TMPro.TMP_SpriteCharacter', i3629[i + 0]));
  }
  i3622.m_SpriteCharacterTable = i3628
  var i3631 = i3623[5]
  var i3630 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i3631.length; i += 1) {
    i3630.add(request.d('TMPro.TMP_SpriteGlyph', i3631[i + 0]));
  }
  i3622.m_GlyphTable = i3630
  i3622.m_Version = i3623[6]
  i3622.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i3623[7], i3622.m_FaceInfo)
  request.r(i3623[8], i3623[9], 0, i3622, 'm_Material')
  return i3622
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i3634 = root || request.c( 'TMPro.TMP_Sprite' )
  var i3635 = data
  i3634.name = i3635[0]
  i3634.hashCode = i3635[1]
  i3634.unicode = i3635[2]
  i3634.pivot = new pc.Vec2( i3635[3], i3635[4] )
  request.r(i3635[5], i3635[6], 0, i3634, 'sprite')
  i3634.id = i3635[7]
  i3634.x = i3635[8]
  i3634.y = i3635[9]
  i3634.width = i3635[10]
  i3634.height = i3635[11]
  i3634.xOffset = i3635[12]
  i3634.yOffset = i3635[13]
  i3634.xAdvance = i3635[14]
  i3634.scale = i3635[15]
  return i3634
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i3640 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i3641 = data
  i3640.m_Name = i3641[0]
  i3640.m_ElementType = i3641[1]
  i3640.m_Unicode = i3641[2]
  i3640.m_GlyphIndex = i3641[3]
  i3640.m_Scale = i3641[4]
  return i3640
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i3644 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i3645 = data
  request.r(i3645[0], i3645[1], 0, i3644, 'sprite')
  i3644.m_Index = i3645[2]
  i3644.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i3645[3], i3644.m_Metrics)
  i3644.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i3645[4], i3644.m_GlyphRect)
  i3644.m_Scale = i3645[5]
  i3644.m_AtlasIndex = i3645[6]
  i3644.m_ClassDefinitionType = i3645[7]
  return i3644
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i3646 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i3647 = data
  var i3649 = i3647[0]
  var i3648 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i3649.length; i += 1) {
    i3648.add(request.d('TMPro.TMP_Style', i3649[i + 0]));
  }
  i3646.m_StyleList = i3648
  return i3646
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i3652 = root || request.c( 'TMPro.TMP_Style' )
  var i3653 = data
  i3652.m_Name = i3653[0]
  i3652.m_HashCode = i3653[1]
  i3652.m_OpeningDefinition = i3653[2]
  i3652.m_ClosingDefinition = i3653[3]
  i3652.m_OpeningTagArray = i3653[4]
  i3652.m_ClosingTagArray = i3653[5]
  return i3652
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i3654 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i3655 = data
  var i3657 = i3655[0]
  var i3656 = []
  for(var i = 0; i < i3657.length; i += 1) {
    i3656.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i3657[i + 0]) );
  }
  i3654.files = i3656
  i3654.componentToPrefabIds = i3655[1]
  return i3654
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i3660 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i3661 = data
  i3660.path = i3661[0]
  request.r(i3661[1], i3661[2], 0, i3660, 'unityObject')
  return i3660
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i3662 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i3663 = data
  var i3665 = i3663[0]
  var i3664 = []
  for(var i = 0; i < i3665.length; i += 1) {
    i3664.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i3665[i + 0]) );
  }
  i3662.scriptsExecutionOrder = i3664
  var i3667 = i3663[1]
  var i3666 = []
  for(var i = 0; i < i3667.length; i += 1) {
    i3666.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i3667[i + 0]) );
  }
  i3662.sortingLayers = i3666
  var i3669 = i3663[2]
  var i3668 = []
  for(var i = 0; i < i3669.length; i += 1) {
    i3668.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i3669[i + 0]) );
  }
  i3662.cullingLayers = i3668
  i3662.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i3663[3], i3662.timeSettings)
  i3662.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i3663[4], i3662.physicsSettings)
  i3662.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i3663[5], i3662.physics2DSettings)
  i3662.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i3663[6], i3662.qualitySettings)
  i3662.enableRealtimeShadows = !!i3663[7]
  i3662.enableAutoInstancing = !!i3663[8]
  i3662.enableStaticBatching = !!i3663[9]
  i3662.enableDynamicBatching = !!i3663[10]
  i3662.lightmapEncodingQuality = i3663[11]
  i3662.desiredColorSpace = i3663[12]
  var i3671 = i3663[13]
  var i3670 = []
  for(var i = 0; i < i3671.length; i += 1) {
    i3670.push( i3671[i + 0] );
  }
  i3662.allTags = i3670
  return i3662
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i3674 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i3675 = data
  i3674.name = i3675[0]
  i3674.value = i3675[1]
  return i3674
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i3678 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i3679 = data
  i3678.id = i3679[0]
  i3678.name = i3679[1]
  i3678.value = i3679[2]
  return i3678
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i3682 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i3683 = data
  i3682.id = i3683[0]
  i3682.name = i3683[1]
  return i3682
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i3684 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i3685 = data
  i3684.fixedDeltaTime = i3685[0]
  i3684.maximumDeltaTime = i3685[1]
  i3684.timeScale = i3685[2]
  i3684.maximumParticleTimestep = i3685[3]
  return i3684
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i3686 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i3687 = data
  i3686.gravity = new pc.Vec3( i3687[0], i3687[1], i3687[2] )
  i3686.defaultSolverIterations = i3687[3]
  i3686.bounceThreshold = i3687[4]
  i3686.autoSyncTransforms = !!i3687[5]
  i3686.autoSimulation = !!i3687[6]
  var i3689 = i3687[7]
  var i3688 = []
  for(var i = 0; i < i3689.length; i += 1) {
    i3688.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i3689[i + 0]) );
  }
  i3686.collisionMatrix = i3688
  return i3686
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i3692 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i3693 = data
  i3692.enabled = !!i3693[0]
  i3692.layerId = i3693[1]
  i3692.otherLayerId = i3693[2]
  return i3692
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i3694 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i3695 = data
  request.r(i3695[0], i3695[1], 0, i3694, 'material')
  i3694.gravity = new pc.Vec2( i3695[2], i3695[3] )
  i3694.positionIterations = i3695[4]
  i3694.velocityIterations = i3695[5]
  i3694.velocityThreshold = i3695[6]
  i3694.maxLinearCorrection = i3695[7]
  i3694.maxAngularCorrection = i3695[8]
  i3694.maxTranslationSpeed = i3695[9]
  i3694.maxRotationSpeed = i3695[10]
  i3694.baumgarteScale = i3695[11]
  i3694.baumgarteTOIScale = i3695[12]
  i3694.timeToSleep = i3695[13]
  i3694.linearSleepTolerance = i3695[14]
  i3694.angularSleepTolerance = i3695[15]
  i3694.defaultContactOffset = i3695[16]
  i3694.autoSimulation = !!i3695[17]
  i3694.queriesHitTriggers = !!i3695[18]
  i3694.queriesStartInColliders = !!i3695[19]
  i3694.callbacksOnDisable = !!i3695[20]
  i3694.reuseCollisionCallbacks = !!i3695[21]
  i3694.autoSyncTransforms = !!i3695[22]
  var i3697 = i3695[23]
  var i3696 = []
  for(var i = 0; i < i3697.length; i += 1) {
    i3696.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i3697[i + 0]) );
  }
  i3694.collisionMatrix = i3696
  return i3694
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i3700 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i3701 = data
  i3700.enabled = !!i3701[0]
  i3700.layerId = i3701[1]
  i3700.otherLayerId = i3701[2]
  return i3700
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i3702 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i3703 = data
  var i3705 = i3703[0]
  var i3704 = []
  for(var i = 0; i < i3705.length; i += 1) {
    i3704.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i3705[i + 0]) );
  }
  i3702.qualityLevels = i3704
  var i3707 = i3703[1]
  var i3706 = []
  for(var i = 0; i < i3707.length; i += 1) {
    i3706.push( i3707[i + 0] );
  }
  i3702.names = i3706
  i3702.shadows = i3703[2]
  i3702.anisotropicFiltering = i3703[3]
  i3702.antiAliasing = i3703[4]
  i3702.lodBias = i3703[5]
  i3702.shadowCascades = i3703[6]
  i3702.shadowDistance = i3703[7]
  i3702.shadowmaskMode = i3703[8]
  i3702.shadowProjection = i3703[9]
  i3702.shadowResolution = i3703[10]
  i3702.softParticles = !!i3703[11]
  i3702.softVegetation = !!i3703[12]
  i3702.activeColorSpace = i3703[13]
  i3702.desiredColorSpace = i3703[14]
  i3702.masterTextureLimit = i3703[15]
  i3702.maxQueuedFrames = i3703[16]
  i3702.particleRaycastBudget = i3703[17]
  i3702.pixelLightCount = i3703[18]
  i3702.realtimeReflectionProbes = !!i3703[19]
  i3702.shadowCascade2Split = i3703[20]
  i3702.shadowCascade4Split = new pc.Vec3( i3703[21], i3703[22], i3703[23] )
  i3702.streamingMipmapsActive = !!i3703[24]
  i3702.vSyncCount = i3703[25]
  i3702.asyncUploadBufferSize = i3703[26]
  i3702.asyncUploadTimeSlice = i3703[27]
  i3702.billboardsFaceCameraPosition = !!i3703[28]
  i3702.shadowNearPlaneOffset = i3703[29]
  i3702.streamingMipmapsMemoryBudget = i3703[30]
  i3702.maximumLODLevel = i3703[31]
  i3702.streamingMipmapsAddAllCameras = !!i3703[32]
  i3702.streamingMipmapsMaxLevelReduction = i3703[33]
  i3702.streamingMipmapsRenderersPerFrame = i3703[34]
  i3702.resolutionScalingFixedDPIFactor = i3703[35]
  i3702.streamingMipmapsMaxFileIORequests = i3703[36]
  i3702.currentQualityLevel = i3703[37]
  return i3702
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i3712 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i3713 = data
  i3712.weight = i3713[0]
  i3712.vertices = i3713[1]
  i3712.normals = i3713[2]
  i3712.tangents = i3713[3]
  return i3712
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i3714 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i3715 = data
  i3714.m_XCoordinate = i3715[0]
  i3714.m_YCoordinate = i3715[1]
  return i3714
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i3716 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i3717 = data
  i3716.m_XPositionAdjustment = i3717[0]
  i3716.m_YPositionAdjustment = i3717[1]
  return i3716
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i3718 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i3719 = data
  i3718.xPlacement = i3719[0]
  i3718.yPlacement = i3719[1]
  i3718.xAdvance = i3719[2]
  i3718.yAdvance = i3719[3]
  return i3718
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"43":[44],"45":[44],"46":[44],"47":[44],"48":[44],"49":[44],"50":[51],"52":[2],"53":[54],"55":[54],"56":[54],"57":[54],"58":[54],"59":[54],"60":[61],"62":[61],"63":[61],"64":[61],"65":[61],"66":[61],"67":[61],"68":[61],"69":[61],"70":[61],"71":[61],"72":[61],"73":[61],"74":[2],"75":[76],"77":[78],"79":[78],"21":[20],"6":[2],"80":[61],"81":[82],"83":[18],"84":[2],"85":[86],"87":[34],"88":[21],"89":[20],"90":[76,20],"91":[20,25],"92":[20],"93":[25,20],"94":[76],"95":[25,20],"96":[20],"97":[98],"99":[98],"100":[98],"101":[20],"102":[20],"24":[21],"26":[25,20],"103":[20],"23":[21],"104":[20],"105":[20],"106":[20],"107":[20],"108":[20],"109":[20],"110":[20],"111":[20],"112":[20],"113":[25,20],"114":[20],"115":[20],"116":[20],"117":[20],"118":[25,20],"119":[20],"120":[34],"121":[34],"35":[34],"122":[34],"123":[2],"124":[2]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.MonoBehaviour","CameraFollow2D","AutoCameraFit","UnityEngine.Transform","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Mesh","UnityEngine.Material","Ply_SoundManager","UnityEngine.AudioClip","UnityEngine.AudioSource","HaalandGame.HaalandGameManager","UnityEngine.GameObject","UnityEngine.Animator","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.UI.Button","UnityEditor.Animations.AnimatorController","HaalandGame.IconListAnimator","HideOnFirstClick","ScreenHeightPositionAnchor","UnityEngine.BoxCollider","HaalandGame.PlayerSelectable","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_FontAsset","UnityEngine.Font","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","BatStrikeController","SlotTrigger","UnityEngine.BoxCollider2D","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.InputSystem.UI.InputSystemUIInputModule","UnityEngine.InputSystem.UI.TrackedDeviceRaycaster","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.38f1";

Deserializers.productName = "PLY_MiniSoccer";

Deserializers.lunaInitializationTime = "07/15/2026 03:53:54";

Deserializers.lunaDaysRunning = "29.2";

Deserializers.lunaVersion = "7.1.0";

Deserializers.lunaSHA = "cf93782349542fe0b84ad13951a26809f8419628";

Deserializers.creativeName = "PLY_V19";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1737";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4601";

Deserializers.runtimeAnalysisExcludedModules = "";

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

Deserializers.buildID = "b90ab0e4-577b-4ee4-aa9d-34ce81efe26b";

Deserializers.runtimeInitializeOnLoadInfos = [[["Unity","Services","Core","Internal","UnityServicesInitializer","EnableServicesInitializationAsync"],["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["DG","Tweening","DOTween","RuntimeOnLoad"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["Unity","Services","Core","Registration","CorePackageInitializer","InitializeOnLoad"],["Unity","Services","Core","Internal","TaskAsyncOperation","SetScheduler"],["Unity","Services","Core","Environments","Client","Scheduler","EngineStateHelper","Init"],["Unity","Services","Core","Environments","Client","Scheduler","ThreadHelper","Init"],["Ua2CoreInitializeCallback","Register"],["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["Unity","AI","Navigation","NavMeshLink","ClearTrackedList"],["Unity","AI","Navigation","NavMeshSurface","ClearNavMeshSurfaces"],["Unity","AI","Navigation","NavMeshModifierVolume","ClearNavMeshModifiers"],["Unity","AI","Navigation","NavMeshModifier","ClearNavMeshModifiers"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["Unity","Services","Core","Internal","UnityServicesInitializer","CreateStaticInstance"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[["Unity","Services","Core","Environments","Client","Http","JsonHelpers","RegisterTypesForAOT"]],[["Unity","Services","Core","UnityThreadUtils","CaptureUnityThreadInfo"],["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

