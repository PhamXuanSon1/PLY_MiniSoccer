var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i3230 = root || request.c( 'UnityEngine.JointSpring' )
  var i3231 = data
  i3230.spring = i3231[0]
  i3230.damper = i3231[1]
  i3230.targetPosition = i3231[2]
  return i3230
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i3232 = root || request.c( 'UnityEngine.JointMotor' )
  var i3233 = data
  i3232.m_TargetVelocity = i3233[0]
  i3232.m_Force = i3233[1]
  i3232.m_FreeSpin = i3233[2]
  return i3232
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i3234 = root || request.c( 'UnityEngine.JointLimits' )
  var i3235 = data
  i3234.m_Min = i3235[0]
  i3234.m_Max = i3235[1]
  i3234.m_Bounciness = i3235[2]
  i3234.m_BounceMinVelocity = i3235[3]
  i3234.m_ContactDistance = i3235[4]
  i3234.minBounce = i3235[5]
  i3234.maxBounce = i3235[6]
  return i3234
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i3236 = root || request.c( 'UnityEngine.JointDrive' )
  var i3237 = data
  i3236.m_PositionSpring = i3237[0]
  i3236.m_PositionDamper = i3237[1]
  i3236.m_MaximumForce = i3237[2]
  i3236.m_UseAcceleration = i3237[3]
  return i3236
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i3238 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i3239 = data
  i3238.m_Spring = i3239[0]
  i3238.m_Damper = i3239[1]
  return i3238
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i3240 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i3241 = data
  i3240.m_Limit = i3241[0]
  i3240.m_Bounciness = i3241[1]
  i3240.m_ContactDistance = i3241[2]
  return i3240
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i3242 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i3243 = data
  i3242.m_ExtremumSlip = i3243[0]
  i3242.m_ExtremumValue = i3243[1]
  i3242.m_AsymptoteSlip = i3243[2]
  i3242.m_AsymptoteValue = i3243[3]
  i3242.m_Stiffness = i3243[4]
  return i3242
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i3244 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i3245 = data
  i3244.m_LowerAngle = i3245[0]
  i3244.m_UpperAngle = i3245[1]
  return i3244
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i3246 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i3247 = data
  i3246.m_MotorSpeed = i3247[0]
  i3246.m_MaximumMotorTorque = i3247[1]
  return i3246
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i3248 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i3249 = data
  i3248.m_DampingRatio = i3249[0]
  i3248.m_Frequency = i3249[1]
  i3248.m_Angle = i3249[2]
  return i3248
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i3250 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i3251 = data
  i3250.m_LowerTranslation = i3251[0]
  i3250.m_UpperTranslation = i3251[1]
  return i3250
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i3252 = root || new pc.UnityMaterial()
  var i3253 = data
  i3252.name = i3253[0]
  request.r(i3253[1], i3253[2], 0, i3252, 'shader')
  i3252.renderQueue = i3253[3]
  i3252.enableInstancing = !!i3253[4]
  var i3255 = i3253[5]
  var i3254 = []
  for(var i = 0; i < i3255.length; i += 1) {
    i3254.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i3255[i + 0]) );
  }
  i3252.floatParameters = i3254
  var i3257 = i3253[6]
  var i3256 = []
  for(var i = 0; i < i3257.length; i += 1) {
    i3256.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i3257[i + 0]) );
  }
  i3252.colorParameters = i3256
  var i3259 = i3253[7]
  var i3258 = []
  for(var i = 0; i < i3259.length; i += 1) {
    i3258.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i3259[i + 0]) );
  }
  i3252.vectorParameters = i3258
  var i3261 = i3253[8]
  var i3260 = []
  for(var i = 0; i < i3261.length; i += 1) {
    i3260.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i3261[i + 0]) );
  }
  i3252.textureParameters = i3260
  var i3263 = i3253[9]
  var i3262 = []
  for(var i = 0; i < i3263.length; i += 1) {
    i3262.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i3263[i + 0]) );
  }
  i3252.materialFlags = i3262
  return i3252
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i3266 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i3267 = data
  i3266.name = i3267[0]
  i3266.value = i3267[1]
  return i3266
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i3270 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i3271 = data
  i3270.name = i3271[0]
  i3270.value = new pc.Color(i3271[1], i3271[2], i3271[3], i3271[4])
  return i3270
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i3274 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i3275 = data
  i3274.name = i3275[0]
  i3274.value = new pc.Vec4( i3275[1], i3275[2], i3275[3], i3275[4] )
  return i3274
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i3278 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i3279 = data
  i3278.name = i3279[0]
  request.r(i3279[1], i3279[2], 0, i3278, 'value')
  return i3278
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i3282 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i3283 = data
  i3282.name = i3283[0]
  i3282.enabled = !!i3283[1]
  return i3282
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i3284 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i3285 = data
  i3284.name = i3285[0]
  i3284.width = i3285[1]
  i3284.height = i3285[2]
  i3284.mipmapCount = i3285[3]
  i3284.anisoLevel = i3285[4]
  i3284.filterMode = i3285[5]
  i3284.hdr = !!i3285[6]
  i3284.format = i3285[7]
  i3284.wrapMode = i3285[8]
  i3284.alphaIsTransparency = !!i3285[9]
  i3284.alphaSource = i3285[10]
  i3284.graphicsFormat = i3285[11]
  i3284.sRGBTexture = !!i3285[12]
  i3284.desiredColorSpace = i3285[13]
  i3284.wrapU = i3285[14]
  i3284.wrapV = i3285[15]
  return i3284
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i3286 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i3287 = data
  i3286.name = i3287[0]
  i3286.halfPrecision = !!i3287[1]
  i3286.useSimplification = !!i3287[2]
  i3286.useUInt32IndexFormat = !!i3287[3]
  i3286.vertexCount = i3287[4]
  i3286.aabb = i3287[5]
  var i3289 = i3287[6]
  var i3288 = []
  for(var i = 0; i < i3289.length; i += 1) {
    i3288.push( !!i3289[i + 0] );
  }
  i3286.streams = i3288
  i3286.vertices = i3287[7]
  var i3291 = i3287[8]
  var i3290 = []
  for(var i = 0; i < i3291.length; i += 1) {
    i3290.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i3291[i + 0]) );
  }
  i3286.subMeshes = i3290
  var i3293 = i3287[9]
  var i3292 = []
  for(var i = 0; i < i3293.length; i += 16) {
    i3292.push( new pc.Mat4().setData(i3293[i + 0], i3293[i + 1], i3293[i + 2], i3293[i + 3],  i3293[i + 4], i3293[i + 5], i3293[i + 6], i3293[i + 7],  i3293[i + 8], i3293[i + 9], i3293[i + 10], i3293[i + 11],  i3293[i + 12], i3293[i + 13], i3293[i + 14], i3293[i + 15]) );
  }
  i3286.bindposes = i3292
  var i3295 = i3287[10]
  var i3294 = []
  for(var i = 0; i < i3295.length; i += 1) {
    i3294.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i3295[i + 0]) );
  }
  i3286.blendShapes = i3294
  return i3286
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i3300 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i3301 = data
  i3300.triangles = i3301[0]
  return i3300
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i3306 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i3307 = data
  i3306.name = i3307[0]
  var i3309 = i3307[1]
  var i3308 = []
  for(var i = 0; i < i3309.length; i += 1) {
    i3308.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i3309[i + 0]) );
  }
  i3306.frames = i3308
  return i3306
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i3310 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i3311 = data
  i3310.name = i3311[0]
  i3310.index = i3311[1]
  i3310.startup = !!i3311[2]
  return i3310
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i3312 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i3313 = data
  i3312.aspect = i3313[0]
  i3312.orthographic = !!i3313[1]
  i3312.orthographicSize = i3313[2]
  i3312.backgroundColor = new pc.Color(i3313[3], i3313[4], i3313[5], i3313[6])
  i3312.nearClipPlane = i3313[7]
  i3312.farClipPlane = i3313[8]
  i3312.fieldOfView = i3313[9]
  i3312.depth = i3313[10]
  i3312.clearFlags = i3313[11]
  i3312.cullingMask = i3313[12]
  i3312.rect = i3313[13]
  request.r(i3313[14], i3313[15], 0, i3312, 'targetTexture')
  i3312.usePhysicalProperties = !!i3313[16]
  i3312.focalLength = i3313[17]
  i3312.sensorSize = new pc.Vec2( i3313[18], i3313[19] )
  i3312.lensShift = new pc.Vec2( i3313[20], i3313[21] )
  i3312.gateFit = i3313[22]
  i3312.commandBufferCount = i3313[23]
  i3312.cameraType = i3313[24]
  i3312.enabled = !!i3313[25]
  return i3312
}

Deserializers["CameraFollow2D"] = function (request, data, root) {
  var i3314 = root || request.c( 'CameraFollow2D' )
  var i3315 = data
  request.r(i3315[0], i3315[1], 0, i3314, 'target')
  i3314.smoothSpeed = i3315[2]
  i3314.offset = new pc.Vec3( i3315[3], i3315[4], i3315[5] )
  i3314.followY = !!i3315[6]
  return i3314
}

Deserializers["AutoCameraFit"] = function (request, data, root) {
  var i3316 = root || request.c( 'AutoCameraFit' )
  var i3317 = data
  request.r(i3317[0], i3317[1], 0, i3316, 'tallScreenObject')
  i3316.tallScreenRatioThreshold = i3317[2]
  i3316.tallScreenYOffset = i3317[3]
  request.r(i3317[4], i3317[5], 0, i3316, 'canvasBtn')
  request.r(i3317[6], i3317[7], 0, i3316, 'targetArea')
  i3316.paddingLandscape = i3317[8]
  i3316.paddingPortrait = i3317[9]
  i3316.extraPaddingSmallScreen = i3317[10]
  i3316.smallScreenThreshold = i3317[11]
  i3316.autoUpdateOnResize = !!i3317[12]
  i3316.adjustInEditMode = !!i3317[13]
  return i3316
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i3318 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i3319 = data
  i3318.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i3319[0], i3318.main)
  i3318.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i3319[1], i3318.colorBySpeed)
  i3318.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i3319[2], i3318.colorOverLifetime)
  i3318.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i3319[3], i3318.emission)
  i3318.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i3319[4], i3318.rotationBySpeed)
  i3318.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i3319[5], i3318.rotationOverLifetime)
  i3318.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i3319[6], i3318.shape)
  i3318.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i3319[7], i3318.sizeBySpeed)
  i3318.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i3319[8], i3318.sizeOverLifetime)
  i3318.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i3319[9], i3318.textureSheetAnimation)
  i3318.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i3319[10], i3318.velocityOverLifetime)
  i3318.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i3319[11], i3318.noise)
  i3318.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i3319[12], i3318.inheritVelocity)
  i3318.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i3319[13], i3318.forceOverLifetime)
  i3318.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i3319[14], i3318.limitVelocityOverLifetime)
  i3318.useAutoRandomSeed = !!i3319[15]
  i3318.randomSeed = i3319[16]
  return i3318
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i3320 = root || new pc.ParticleSystemMain()
  var i3321 = data
  i3320.duration = i3321[0]
  i3320.loop = !!i3321[1]
  i3320.prewarm = !!i3321[2]
  i3320.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3321[3], i3320.startDelay)
  i3320.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3321[4], i3320.startLifetime)
  i3320.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3321[5], i3320.startSpeed)
  i3320.startSize3D = !!i3321[6]
  i3320.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3321[7], i3320.startSizeX)
  i3320.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3321[8], i3320.startSizeY)
  i3320.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3321[9], i3320.startSizeZ)
  i3320.startRotation3D = !!i3321[10]
  i3320.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3321[11], i3320.startRotationX)
  i3320.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3321[12], i3320.startRotationY)
  i3320.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3321[13], i3320.startRotationZ)
  i3320.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i3321[14], i3320.startColor)
  i3320.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3321[15], i3320.gravityModifier)
  i3320.simulationSpace = i3321[16]
  request.r(i3321[17], i3321[18], 0, i3320, 'customSimulationSpace')
  i3320.simulationSpeed = i3321[19]
  i3320.useUnscaledTime = !!i3321[20]
  i3320.scalingMode = i3321[21]
  i3320.playOnAwake = !!i3321[22]
  i3320.maxParticles = i3321[23]
  i3320.emitterVelocityMode = i3321[24]
  i3320.stopAction = i3321[25]
  return i3320
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i3322 = root || new pc.MinMaxCurve()
  var i3323 = data
  i3322.mode = i3323[0]
  i3322.curveMin = new pc.AnimationCurve( { keys_flow: i3323[1] } )
  i3322.curveMax = new pc.AnimationCurve( { keys_flow: i3323[2] } )
  i3322.curveMultiplier = i3323[3]
  i3322.constantMin = i3323[4]
  i3322.constantMax = i3323[5]
  return i3322
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i3324 = root || new pc.MinMaxGradient()
  var i3325 = data
  i3324.mode = i3325[0]
  i3324.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i3325[1], i3324.gradientMin)
  i3324.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i3325[2], i3324.gradientMax)
  i3324.colorMin = new pc.Color(i3325[3], i3325[4], i3325[5], i3325[6])
  i3324.colorMax = new pc.Color(i3325[7], i3325[8], i3325[9], i3325[10])
  return i3324
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i3326 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i3327 = data
  i3326.mode = i3327[0]
  var i3329 = i3327[1]
  var i3328 = []
  for(var i = 0; i < i3329.length; i += 1) {
    i3328.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i3329[i + 0]) );
  }
  i3326.colorKeys = i3328
  var i3331 = i3327[2]
  var i3330 = []
  for(var i = 0; i < i3331.length; i += 1) {
    i3330.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i3331[i + 0]) );
  }
  i3326.alphaKeys = i3330
  return i3326
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i3332 = root || new pc.ParticleSystemColorBySpeed()
  var i3333 = data
  i3332.enabled = !!i3333[0]
  i3332.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i3333[1], i3332.color)
  i3332.range = new pc.Vec2( i3333[2], i3333[3] )
  return i3332
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i3336 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i3337 = data
  i3336.color = new pc.Color(i3337[0], i3337[1], i3337[2], i3337[3])
  i3336.time = i3337[4]
  return i3336
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i3340 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i3341 = data
  i3340.alpha = i3341[0]
  i3340.time = i3341[1]
  return i3340
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i3342 = root || new pc.ParticleSystemColorOverLifetime()
  var i3343 = data
  i3342.enabled = !!i3343[0]
  i3342.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i3343[1], i3342.color)
  return i3342
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i3344 = root || new pc.ParticleSystemEmitter()
  var i3345 = data
  i3344.enabled = !!i3345[0]
  i3344.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3345[1], i3344.rateOverTime)
  i3344.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3345[2], i3344.rateOverDistance)
  var i3347 = i3345[3]
  var i3346 = []
  for(var i = 0; i < i3347.length; i += 1) {
    i3346.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i3347[i + 0]) );
  }
  i3344.bursts = i3346
  return i3344
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i3350 = root || new pc.ParticleSystemBurst()
  var i3351 = data
  i3350.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3351[0], i3350.count)
  i3350.cycleCount = i3351[1]
  i3350.minCount = i3351[2]
  i3350.maxCount = i3351[3]
  i3350.repeatInterval = i3351[4]
  i3350.time = i3351[5]
  return i3350
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i3352 = root || new pc.ParticleSystemRotationBySpeed()
  var i3353 = data
  i3352.enabled = !!i3353[0]
  i3352.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3353[1], i3352.x)
  i3352.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3353[2], i3352.y)
  i3352.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3353[3], i3352.z)
  i3352.separateAxes = !!i3353[4]
  i3352.range = new pc.Vec2( i3353[5], i3353[6] )
  return i3352
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i3354 = root || new pc.ParticleSystemRotationOverLifetime()
  var i3355 = data
  i3354.enabled = !!i3355[0]
  i3354.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3355[1], i3354.x)
  i3354.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3355[2], i3354.y)
  i3354.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3355[3], i3354.z)
  i3354.separateAxes = !!i3355[4]
  return i3354
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i3356 = root || new pc.ParticleSystemShape()
  var i3357 = data
  i3356.enabled = !!i3357[0]
  i3356.shapeType = i3357[1]
  i3356.randomDirectionAmount = i3357[2]
  i3356.sphericalDirectionAmount = i3357[3]
  i3356.randomPositionAmount = i3357[4]
  i3356.alignToDirection = !!i3357[5]
  i3356.radius = i3357[6]
  i3356.radiusMode = i3357[7]
  i3356.radiusSpread = i3357[8]
  i3356.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3357[9], i3356.radiusSpeed)
  i3356.radiusThickness = i3357[10]
  i3356.angle = i3357[11]
  i3356.length = i3357[12]
  i3356.boxThickness = new pc.Vec3( i3357[13], i3357[14], i3357[15] )
  i3356.meshShapeType = i3357[16]
  request.r(i3357[17], i3357[18], 0, i3356, 'mesh')
  request.r(i3357[19], i3357[20], 0, i3356, 'meshRenderer')
  request.r(i3357[21], i3357[22], 0, i3356, 'skinnedMeshRenderer')
  i3356.useMeshMaterialIndex = !!i3357[23]
  i3356.meshMaterialIndex = i3357[24]
  i3356.useMeshColors = !!i3357[25]
  i3356.normalOffset = i3357[26]
  i3356.arc = i3357[27]
  i3356.arcMode = i3357[28]
  i3356.arcSpread = i3357[29]
  i3356.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3357[30], i3356.arcSpeed)
  i3356.donutRadius = i3357[31]
  i3356.position = new pc.Vec3( i3357[32], i3357[33], i3357[34] )
  i3356.rotation = new pc.Vec3( i3357[35], i3357[36], i3357[37] )
  i3356.scale = new pc.Vec3( i3357[38], i3357[39], i3357[40] )
  return i3356
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i3358 = root || new pc.ParticleSystemSizeBySpeed()
  var i3359 = data
  i3358.enabled = !!i3359[0]
  i3358.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3359[1], i3358.x)
  i3358.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3359[2], i3358.y)
  i3358.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3359[3], i3358.z)
  i3358.separateAxes = !!i3359[4]
  i3358.range = new pc.Vec2( i3359[5], i3359[6] )
  return i3358
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i3360 = root || new pc.ParticleSystemSizeOverLifetime()
  var i3361 = data
  i3360.enabled = !!i3361[0]
  i3360.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3361[1], i3360.x)
  i3360.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3361[2], i3360.y)
  i3360.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3361[3], i3360.z)
  i3360.separateAxes = !!i3361[4]
  return i3360
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i3362 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i3363 = data
  i3362.enabled = !!i3363[0]
  i3362.mode = i3363[1]
  i3362.animation = i3363[2]
  i3362.numTilesX = i3363[3]
  i3362.numTilesY = i3363[4]
  i3362.useRandomRow = !!i3363[5]
  i3362.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3363[6], i3362.frameOverTime)
  i3362.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3363[7], i3362.startFrame)
  i3362.cycleCount = i3363[8]
  i3362.rowIndex = i3363[9]
  i3362.flipU = i3363[10]
  i3362.flipV = i3363[11]
  i3362.spriteCount = i3363[12]
  var i3365 = i3363[13]
  var i3364 = []
  for(var i = 0; i < i3365.length; i += 2) {
  request.r(i3365[i + 0], i3365[i + 1], 2, i3364, '')
  }
  i3362.sprites = i3364
  return i3362
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i3368 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i3369 = data
  i3368.enabled = !!i3369[0]
  i3368.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3369[1], i3368.x)
  i3368.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3369[2], i3368.y)
  i3368.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3369[3], i3368.z)
  i3368.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3369[4], i3368.radial)
  i3368.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3369[5], i3368.speedModifier)
  i3368.space = i3369[6]
  i3368.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3369[7], i3368.orbitalX)
  i3368.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3369[8], i3368.orbitalY)
  i3368.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3369[9], i3368.orbitalZ)
  i3368.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3369[10], i3368.orbitalOffsetX)
  i3368.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3369[11], i3368.orbitalOffsetY)
  i3368.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3369[12], i3368.orbitalOffsetZ)
  return i3368
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i3370 = root || new pc.ParticleSystemNoise()
  var i3371 = data
  i3370.enabled = !!i3371[0]
  i3370.separateAxes = !!i3371[1]
  i3370.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3371[2], i3370.strengthX)
  i3370.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3371[3], i3370.strengthY)
  i3370.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3371[4], i3370.strengthZ)
  i3370.frequency = i3371[5]
  i3370.damping = !!i3371[6]
  i3370.octaveCount = i3371[7]
  i3370.octaveMultiplier = i3371[8]
  i3370.octaveScale = i3371[9]
  i3370.quality = i3371[10]
  i3370.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3371[11], i3370.scrollSpeed)
  i3370.scrollSpeedMultiplier = i3371[12]
  i3370.remapEnabled = !!i3371[13]
  i3370.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3371[14], i3370.remapX)
  i3370.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3371[15], i3370.remapY)
  i3370.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3371[16], i3370.remapZ)
  i3370.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3371[17], i3370.positionAmount)
  i3370.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3371[18], i3370.rotationAmount)
  i3370.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3371[19], i3370.sizeAmount)
  return i3370
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i3372 = root || new pc.ParticleSystemInheritVelocity()
  var i3373 = data
  i3372.enabled = !!i3373[0]
  i3372.mode = i3373[1]
  i3372.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3373[2], i3372.curve)
  return i3372
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i3374 = root || new pc.ParticleSystemForceOverLifetime()
  var i3375 = data
  i3374.enabled = !!i3375[0]
  i3374.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3375[1], i3374.x)
  i3374.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3375[2], i3374.y)
  i3374.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3375[3], i3374.z)
  i3374.space = i3375[4]
  i3374.randomized = !!i3375[5]
  return i3374
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i3376 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i3377 = data
  i3376.enabled = !!i3377[0]
  i3376.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3377[1], i3376.limit)
  i3376.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3377[2], i3376.limitX)
  i3376.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3377[3], i3376.limitY)
  i3376.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3377[4], i3376.limitZ)
  i3376.dampen = i3377[5]
  i3376.separateAxes = !!i3377[6]
  i3376.space = i3377[7]
  i3376.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3377[8], i3376.drag)
  i3376.multiplyDragByParticleSize = !!i3377[9]
  i3376.multiplyDragByParticleVelocity = !!i3377[10]
  return i3376
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i3378 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i3379 = data
  request.r(i3379[0], i3379[1], 0, i3378, 'mesh')
  i3378.meshCount = i3379[2]
  i3378.activeVertexStreamsCount = i3379[3]
  i3378.alignment = i3379[4]
  i3378.renderMode = i3379[5]
  i3378.sortMode = i3379[6]
  i3378.lengthScale = i3379[7]
  i3378.velocityScale = i3379[8]
  i3378.cameraVelocityScale = i3379[9]
  i3378.normalDirection = i3379[10]
  i3378.sortingFudge = i3379[11]
  i3378.minParticleSize = i3379[12]
  i3378.maxParticleSize = i3379[13]
  i3378.pivot = new pc.Vec3( i3379[14], i3379[15], i3379[16] )
  request.r(i3379[17], i3379[18], 0, i3378, 'trailMaterial')
  i3378.applyActiveColorSpace = !!i3379[19]
  i3378.enabled = !!i3379[20]
  request.r(i3379[21], i3379[22], 0, i3378, 'sharedMaterial')
  var i3381 = i3379[23]
  var i3380 = []
  for(var i = 0; i < i3381.length; i += 2) {
  request.r(i3381[i + 0], i3381[i + 1], 2, i3380, '')
  }
  i3378.sharedMaterials = i3380
  i3378.receiveShadows = !!i3379[24]
  i3378.shadowCastingMode = i3379[25]
  i3378.sortingLayerID = i3379[26]
  i3378.sortingOrder = i3379[27]
  i3378.lightmapIndex = i3379[28]
  i3378.lightmapSceneIndex = i3379[29]
  i3378.lightmapScaleOffset = new pc.Vec4( i3379[30], i3379[31], i3379[32], i3379[33] )
  i3378.lightProbeUsage = i3379[34]
  i3378.reflectionProbeUsage = i3379[35]
  return i3378
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i3384 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i3385 = data
  request.r(i3385[0], i3385[1], 0, i3384, 'clip')
  request.r(i3385[2], i3385[3], 0, i3384, 'outputAudioMixerGroup')
  i3384.playOnAwake = !!i3385[4]
  i3384.loop = !!i3385[5]
  i3384.time = i3385[6]
  i3384.volume = i3385[7]
  i3384.pitch = i3385[8]
  i3384.enabled = !!i3385[9]
  return i3384
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i3386 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i3387 = data
  i3386.name = i3387[0]
  i3386.tagId = i3387[1]
  i3386.enabled = !!i3387[2]
  i3386.isStatic = !!i3387[3]
  i3386.layer = i3387[4]
  return i3386
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i3388 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i3389 = data
  i3388.color = new pc.Color(i3389[0], i3389[1], i3389[2], i3389[3])
  request.r(i3389[4], i3389[5], 0, i3388, 'sprite')
  i3388.flipX = !!i3389[6]
  i3388.flipY = !!i3389[7]
  i3388.drawMode = i3389[8]
  i3388.size = new pc.Vec2( i3389[9], i3389[10] )
  i3388.tileMode = i3389[11]
  i3388.adaptiveModeThreshold = i3389[12]
  i3388.maskInteraction = i3389[13]
  i3388.spriteSortPoint = i3389[14]
  i3388.enabled = !!i3389[15]
  request.r(i3389[16], i3389[17], 0, i3388, 'sharedMaterial')
  var i3391 = i3389[18]
  var i3390 = []
  for(var i = 0; i < i3391.length; i += 2) {
  request.r(i3391[i + 0], i3391[i + 1], 2, i3390, '')
  }
  i3388.sharedMaterials = i3390
  i3388.receiveShadows = !!i3389[19]
  i3388.shadowCastingMode = i3389[20]
  i3388.sortingLayerID = i3389[21]
  i3388.sortingOrder = i3389[22]
  i3388.lightmapIndex = i3389[23]
  i3388.lightmapSceneIndex = i3389[24]
  i3388.lightmapScaleOffset = new pc.Vec4( i3389[25], i3389[26], i3389[27], i3389[28] )
  i3388.lightProbeUsage = i3389[29]
  i3388.reflectionProbeUsage = i3389[30]
  return i3388
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i3392 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i3393 = data
  request.r(i3393[0], i3393[1], 0, i3392, 'animatorController')
  request.r(i3393[2], i3393[3], 0, i3392, 'avatar')
  i3392.updateMode = i3393[4]
  i3392.hasTransformHierarchy = !!i3393[5]
  i3392.applyRootMotion = !!i3393[6]
  var i3395 = i3393[7]
  var i3394 = []
  for(var i = 0; i < i3395.length; i += 2) {
  request.r(i3395[i + 0], i3395[i + 1], 2, i3394, '')
  }
  i3392.humanBones = i3394
  i3392.enabled = !!i3393[8]
  return i3392
}

Deserializers["MoveBetweenPoints"] = function (request, data, root) {
  var i3398 = root || request.c( 'MoveBetweenPoints' )
  var i3399 = data
  request.r(i3399[0], i3399[1], 0, i3398, 'pointA')
  request.r(i3399[2], i3399[3], 0, i3398, 'pointB')
  i3398.duration = i3399[4]
  return i3398
}

Deserializers["ScreenHeightPositionAnchor"] = function (request, data, root) {
  var i3400 = root || request.c( 'ScreenHeightPositionAnchor' )
  var i3401 = data
  request.r(i3401[0], i3401[1], 0, i3400, 'anchorPoint')
  request.r(i3401[2], i3401[3], 0, i3400, 'targetCamera')
  i3400.viewportYRatio = i3401[4]
  i3400.alignOnStart = !!i3401[5]
  i3400.alignOnEnable = !!i3401[6]
  i3400.realignOnScreenSizeChanged = !!i3401[7]
  i3400.drawGizmos = !!i3401[8]
  i3400.targetLineColor = new pc.Color(i3401[9], i3401[10], i3401[11], i3401[12])
  i3400.anchorColor = new pc.Color(i3401[13], i3401[14], i3401[15], i3401[16])
  return i3400
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i3402 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i3403 = data
  i3402.center = new pc.Vec3( i3403[0], i3403[1], i3403[2] )
  i3402.size = new pc.Vec3( i3403[3], i3403[4], i3403[5] )
  i3402.enabled = !!i3403[6]
  i3402.isTrigger = !!i3403[7]
  request.r(i3403[8], i3403[9], 0, i3402, 'material')
  return i3402
}

Deserializers["ClickToStore"] = function (request, data, root) {
  var i3404 = root || request.c( 'ClickToStore' )
  var i3405 = data
  return i3404
}

Deserializers["FavoritePlayerEndcard"] = function (request, data, root) {
  var i3406 = root || request.c( 'FavoritePlayerEndcard' )
  var i3407 = data
  request.r(i3407[0], i3407[1], 0, i3406, 'fullBodyRenderer')
  request.r(i3407[2], i3407[3], 0, i3406, 'nameText')
  request.r(i3407[4], i3407[5], 0, i3406, 'endcardPanel')
  return i3406
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i3408 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i3409 = data
  i3408.pivot = new pc.Vec2( i3409[0], i3409[1] )
  i3408.anchorMin = new pc.Vec2( i3409[2], i3409[3] )
  i3408.anchorMax = new pc.Vec2( i3409[4], i3409[5] )
  i3408.sizeDelta = new pc.Vec2( i3409[6], i3409[7] )
  i3408.anchoredPosition3D = new pc.Vec3( i3409[8], i3409[9], i3409[10] )
  i3408.rotation = new pc.Quat(i3409[11], i3409[12], i3409[13], i3409[14])
  i3408.scale = new pc.Vec3( i3409[15], i3409[16], i3409[17] )
  return i3408
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i3410 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i3411 = data
  request.r(i3411[0], i3411[1], 0, i3410, 'additionalVertexStreams')
  i3410.enabled = !!i3411[2]
  request.r(i3411[3], i3411[4], 0, i3410, 'sharedMaterial')
  var i3413 = i3411[5]
  var i3412 = []
  for(var i = 0; i < i3413.length; i += 2) {
  request.r(i3413[i + 0], i3413[i + 1], 2, i3412, '')
  }
  i3410.sharedMaterials = i3412
  i3410.receiveShadows = !!i3411[6]
  i3410.shadowCastingMode = i3411[7]
  i3410.sortingLayerID = i3411[8]
  i3410.sortingOrder = i3411[9]
  i3410.lightmapIndex = i3411[10]
  i3410.lightmapSceneIndex = i3411[11]
  i3410.lightmapScaleOffset = new pc.Vec4( i3411[12], i3411[13], i3411[14], i3411[15] )
  i3410.lightProbeUsage = i3411[16]
  i3410.reflectionProbeUsage = i3411[17]
  return i3410
}

Deserializers["TMPro.TextMeshPro"] = function (request, data, root) {
  var i3414 = root || request.c( 'TMPro.TextMeshPro' )
  var i3415 = data
  i3414._SortingLayer = i3415[0]
  i3414._SortingLayerID = i3415[1]
  i3414._SortingOrder = i3415[2]
  i3414.m_hasFontAssetChanged = !!i3415[3]
  request.r(i3415[4], i3415[5], 0, i3414, 'm_renderer')
  i3414.m_maskType = i3415[6]
  i3414.m_text = i3415[7]
  i3414.m_isRightToLeft = !!i3415[8]
  request.r(i3415[9], i3415[10], 0, i3414, 'm_fontAsset')
  request.r(i3415[11], i3415[12], 0, i3414, 'm_sharedMaterial')
  var i3417 = i3415[13]
  var i3416 = []
  for(var i = 0; i < i3417.length; i += 2) {
  request.r(i3417[i + 0], i3417[i + 1], 2, i3416, '')
  }
  i3414.m_fontSharedMaterials = i3416
  request.r(i3415[14], i3415[15], 0, i3414, 'm_fontMaterial')
  var i3419 = i3415[16]
  var i3418 = []
  for(var i = 0; i < i3419.length; i += 2) {
  request.r(i3419[i + 0], i3419[i + 1], 2, i3418, '')
  }
  i3414.m_fontMaterials = i3418
  i3414.m_fontColor32 = UnityEngine.Color32.ConstructColor(i3415[17], i3415[18], i3415[19], i3415[20])
  i3414.m_fontColor = new pc.Color(i3415[21], i3415[22], i3415[23], i3415[24])
  i3414.m_enableVertexGradient = !!i3415[25]
  i3414.m_colorMode = i3415[26]
  i3414.m_fontColorGradient = request.d('TMPro.VertexGradient', i3415[27], i3414.m_fontColorGradient)
  request.r(i3415[28], i3415[29], 0, i3414, 'm_fontColorGradientPreset')
  request.r(i3415[30], i3415[31], 0, i3414, 'm_spriteAsset')
  i3414.m_tintAllSprites = !!i3415[32]
  request.r(i3415[33], i3415[34], 0, i3414, 'm_StyleSheet')
  i3414.m_TextStyleHashCode = i3415[35]
  i3414.m_overrideHtmlColors = !!i3415[36]
  i3414.m_faceColor = UnityEngine.Color32.ConstructColor(i3415[37], i3415[38], i3415[39], i3415[40])
  i3414.m_fontSize = i3415[41]
  i3414.m_fontSizeBase = i3415[42]
  i3414.m_fontWeight = i3415[43]
  i3414.m_enableAutoSizing = !!i3415[44]
  i3414.m_fontSizeMin = i3415[45]
  i3414.m_fontSizeMax = i3415[46]
  i3414.m_fontStyle = i3415[47]
  i3414.m_HorizontalAlignment = i3415[48]
  i3414.m_VerticalAlignment = i3415[49]
  i3414.m_textAlignment = i3415[50]
  i3414.m_characterSpacing = i3415[51]
  i3414.m_wordSpacing = i3415[52]
  i3414.m_lineSpacing = i3415[53]
  i3414.m_lineSpacingMax = i3415[54]
  i3414.m_paragraphSpacing = i3415[55]
  i3414.m_charWidthMaxAdj = i3415[56]
  i3414.m_TextWrappingMode = i3415[57]
  i3414.m_wordWrappingRatios = i3415[58]
  i3414.m_overflowMode = i3415[59]
  request.r(i3415[60], i3415[61], 0, i3414, 'm_linkedTextComponent')
  request.r(i3415[62], i3415[63], 0, i3414, 'parentLinkedComponent')
  i3414.m_enableKerning = !!i3415[64]
  var i3421 = i3415[65]
  var i3420 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i3421.length; i += 1) {
    i3420.add(i3421[i + 0]);
  }
  i3414.m_ActiveFontFeatures = i3420
  i3414.m_enableExtraPadding = !!i3415[66]
  i3414.checkPaddingRequired = !!i3415[67]
  i3414.m_isRichText = !!i3415[68]
  i3414.m_parseCtrlCharacters = !!i3415[69]
  i3414.m_isOrthographic = !!i3415[70]
  i3414.m_isCullingEnabled = !!i3415[71]
  i3414.m_horizontalMapping = i3415[72]
  i3414.m_verticalMapping = i3415[73]
  i3414.m_uvLineOffset = i3415[74]
  i3414.m_geometrySortingOrder = i3415[75]
  i3414.m_IsTextObjectScaleStatic = !!i3415[76]
  i3414.m_VertexBufferAutoSizeReduction = !!i3415[77]
  i3414.m_useMaxVisibleDescender = !!i3415[78]
  i3414.m_pageToDisplay = i3415[79]
  i3414.m_margin = new pc.Vec4( i3415[80], i3415[81], i3415[82], i3415[83] )
  i3414.m_isUsingLegacyAnimationComponent = !!i3415[84]
  i3414.m_isVolumetricText = !!i3415[85]
  request.r(i3415[86], i3415[87], 0, i3414, 'm_Material')
  i3414.m_EmojiFallbackSupport = !!i3415[88]
  i3414.m_Maskable = !!i3415[89]
  i3414.m_Color = new pc.Color(i3415[90], i3415[91], i3415[92], i3415[93])
  i3414.m_RaycastTarget = !!i3415[94]
  i3414.m_RaycastPadding = new pc.Vec4( i3415[95], i3415[96], i3415[97], i3415[98] )
  return i3414
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i3422 = root || request.c( 'TMPro.VertexGradient' )
  var i3423 = data
  i3422.topLeft = new pc.Color(i3423[0], i3423[1], i3423[2], i3423[3])
  i3422.topRight = new pc.Color(i3423[4], i3423[5], i3423[6], i3423[7])
  i3422.bottomLeft = new pc.Color(i3423[8], i3423[9], i3423[10], i3423[11])
  i3422.bottomRight = new pc.Color(i3423[12], i3423[13], i3423[14], i3423[15])
  return i3422
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i3426 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i3427 = data
  request.r(i3427[0], i3427[1], 0, i3426, 'sharedMesh')
  return i3426
}

Deserializers["SpriteSizeAdapter"] = function (request, data, root) {
  var i3428 = root || request.c( 'SpriteSizeAdapter' )
  var i3429 = data
  i3428.targetSize = new pc.Vec2( i3429[0], i3429[1] )
  i3428.fitMode = i3429[2]
  i3428.autoFitOnStart = !!i3429[3]
  i3428.showGizmos = !!i3429[4]
  i3428.gizmoColor = new pc.Color(i3429[5], i3429[6], i3429[7], i3429[8])
  return i3428
}

Deserializers["PlayerCardUIManager"] = function (request, data, root) {
  var i3430 = root || request.c( 'PlayerCardUIManager' )
  var i3431 = data
  request.r(i3431[0], i3431[1], 0, i3430, 'cardPanel')
  var i3433 = i3431[2]
  var i3432 = []
  for(var i = 0; i < i3433.length; i += 2) {
  request.r(i3433[i + 0], i3433[i + 1], 2, i3432, '')
  }
  i3430.extraObjectsToActivate = i3432
  i3430.waitTime = i3431[3]
  var i3435 = i3431[4]
  var i3434 = []
  for(var i = 0; i < i3435.length; i += 2) {
  request.r(i3435[i + 0], i3435[i + 1], 2, i3434, '')
  }
  i3430.objectsToTurnOnAfterWait = i3434
  var i3437 = i3431[5]
  var i3436 = []
  for(var i = 0; i < i3437.length; i += 2) {
  request.r(i3437[i + 0], i3437[i + 1], 2, i3436, '')
  }
  i3430.objectsToTurnOffAfterWait = i3436
  request.r(i3431[6], i3431[7], 0, i3430, 'nationalityText')
  request.r(i3431[8], i3431[9], 0, i3430, 'playerImage')
  request.r(i3431[10], i3431[11], 0, i3430, 'flagImage')
  return i3430
}

Deserializers["Ply_SoundManager"] = function (request, data, root) {
  var i3440 = root || request.c( 'Ply_SoundManager' )
  var i3441 = data
  i3440.fxAudio = request.d('FxAudio', i3441[0], i3440.fxAudio)
  request.r(i3441[1], i3441[2], 0, i3440, 'bgm1')
  return i3440
}

Deserializers["FxAudio"] = function (request, data, root) {
  var i3442 = root || request.c( 'FxAudio' )
  var i3443 = data
  i3442.ClickBox = request.d('SoundData', i3443[0], i3442.ClickBox)
  i3442.Happy = request.d('SoundData', i3443[1], i3442.Happy)
  i3442.Wrong = request.d('SoundData', i3443[2], i3442.Wrong)
  i3442.Spray = request.d('SoundData', i3443[3], i3442.Spray)
  i3442.Brush = request.d('SoundData', i3443[4], i3442.Brush)
  return i3442
}

Deserializers["SoundData"] = function (request, data, root) {
  var i3444 = root || request.c( 'SoundData' )
  var i3445 = data
  request.r(i3445[0], i3445[1], 0, i3444, 'clip')
  i3444.repeatCount = i3445[2]
  return i3444
}

Deserializers["FavoritePlayerManager"] = function (request, data, root) {
  var i3446 = root || request.c( 'FavoritePlayerManager' )
  var i3447 = data
  i3446.slotLayerMask = UnityEngine.LayerMask.FromIntegerValue( i3447[0] )
  request.r(i3447[1], i3447[2], 0, i3446, 'slotA')
  request.r(i3447[3], i3447[4], 0, i3446, 'slotB')
  request.r(i3447[5], i3447[6], 0, i3446, 'audioSource')
  request.r(i3447[7], i3447[8], 0, i3446, 'orAudio')
  request.r(i3447[9], i3447[10], 0, i3446, 'clickAudio')
  var i3449 = i3447[11]
  var i3448 = new (System.Collections.Generic.List$1(Bridge.ns('FavoritePlayerCard')))
  for(var i = 0; i < i3449.length; i += 2) {
  request.r(i3449[i + 0], i3449[i + 1], 1, i3448, '')
  }
  i3446.playerList = i3448
  request.r(i3447[12], i3447[13], 0, i3446, 'endcardUI')
  request.r(i3447[14], i3447[15], 0, i3446, 'discardTarget')
  i3446.moveDuration = i3447[16]
  i3446.arcHeight = i3447[17]
  i3446.scaleUpSize = i3447[18]
  i3446.scaleUpDuration = i3447[19]
  i3446.scaleDownDuration = i3447[20]
  i3446.appearStartScale = i3447[21]
  i3446.appearMaxScale = i3447[22]
  i3446.appearUpDuration = i3447[23]
  i3446.appearDownDuration = i3447[24]
  i3446.clickScaleSize = i3447[25]
  i3446.clickDownDuration = i3447[26]
  i3446.clickUpDuration = i3447[27]
  var i3451 = i3447[28]
  var i3450 = []
  for(var i = 0; i < i3451.length; i += 2) {
  request.r(i3451[i + 0], i3451[i + 1], 2, i3450, '')
  }
  i3446.extraObjectsToActivate = i3450
  var i3453 = i3447[29]
  var i3452 = []
  for(var i = 0; i < i3453.length; i += 2) {
  request.r(i3453[i + 0], i3453[i + 1], 2, i3452, '')
  }
  i3446.extraObjectsToDeactivate = i3452
  i3446.waitTime = i3447[30]
  var i3455 = i3447[31]
  var i3454 = []
  for(var i = 0; i < i3455.length; i += 2) {
  request.r(i3455[i + 0], i3455[i + 1], 2, i3454, '')
  }
  i3446.objectsToTurnOnAfterWait = i3454
  var i3457 = i3447[32]
  var i3456 = []
  for(var i = 0; i < i3457.length; i += 2) {
  request.r(i3457[i + 0], i3457[i + 1], 2, i3456, '')
  }
  i3446.objectsToTurnOffAfterWait = i3456
  return i3446
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i3460 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i3461 = data
  i3460.planeDistance = i3461[0]
  i3460.referencePixelsPerUnit = i3461[1]
  i3460.isFallbackOverlay = !!i3461[2]
  i3460.renderMode = i3461[3]
  i3460.renderOrder = i3461[4]
  i3460.sortingLayerName = i3461[5]
  i3460.sortingOrder = i3461[6]
  i3460.scaleFactor = i3461[7]
  request.r(i3461[8], i3461[9], 0, i3460, 'worldCamera')
  i3460.overrideSorting = !!i3461[10]
  i3460.pixelPerfect = !!i3461[11]
  i3460.targetDisplay = i3461[12]
  i3460.overridePixelPerfect = !!i3461[13]
  i3460.enabled = !!i3461[14]
  return i3460
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i3462 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i3463 = data
  i3462.m_UiScaleMode = i3463[0]
  i3462.m_ReferencePixelsPerUnit = i3463[1]
  i3462.m_ScaleFactor = i3463[2]
  i3462.m_ReferenceResolution = new pc.Vec2( i3463[3], i3463[4] )
  i3462.m_ScreenMatchMode = i3463[5]
  i3462.m_MatchWidthOrHeight = i3463[6]
  i3462.m_PhysicalUnit = i3463[7]
  i3462.m_FallbackScreenDPI = i3463[8]
  i3462.m_DefaultSpriteDPI = i3463[9]
  i3462.m_DynamicPixelsPerUnit = i3463[10]
  i3462.m_PresetInfoIsWorld = !!i3463[11]
  return i3462
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i3464 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i3465 = data
  i3464.m_IgnoreReversedGraphics = !!i3465[0]
  i3464.m_BlockingObjects = i3465[1]
  i3464.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i3465[2] )
  return i3464
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i3466 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i3467 = data
  i3466.cullTransparentMesh = !!i3467[0]
  return i3466
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i3468 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i3469 = data
  i3468.m_hasFontAssetChanged = !!i3469[0]
  request.r(i3469[1], i3469[2], 0, i3468, 'm_baseMaterial')
  i3468.m_maskOffset = new pc.Vec4( i3469[3], i3469[4], i3469[5], i3469[6] )
  i3468.m_text = i3469[7]
  i3468.m_isRightToLeft = !!i3469[8]
  request.r(i3469[9], i3469[10], 0, i3468, 'm_fontAsset')
  request.r(i3469[11], i3469[12], 0, i3468, 'm_sharedMaterial')
  var i3471 = i3469[13]
  var i3470 = []
  for(var i = 0; i < i3471.length; i += 2) {
  request.r(i3471[i + 0], i3471[i + 1], 2, i3470, '')
  }
  i3468.m_fontSharedMaterials = i3470
  request.r(i3469[14], i3469[15], 0, i3468, 'm_fontMaterial')
  var i3473 = i3469[16]
  var i3472 = []
  for(var i = 0; i < i3473.length; i += 2) {
  request.r(i3473[i + 0], i3473[i + 1], 2, i3472, '')
  }
  i3468.m_fontMaterials = i3472
  i3468.m_fontColor32 = UnityEngine.Color32.ConstructColor(i3469[17], i3469[18], i3469[19], i3469[20])
  i3468.m_fontColor = new pc.Color(i3469[21], i3469[22], i3469[23], i3469[24])
  i3468.m_enableVertexGradient = !!i3469[25]
  i3468.m_colorMode = i3469[26]
  i3468.m_fontColorGradient = request.d('TMPro.VertexGradient', i3469[27], i3468.m_fontColorGradient)
  request.r(i3469[28], i3469[29], 0, i3468, 'm_fontColorGradientPreset')
  request.r(i3469[30], i3469[31], 0, i3468, 'm_spriteAsset')
  i3468.m_tintAllSprites = !!i3469[32]
  request.r(i3469[33], i3469[34], 0, i3468, 'm_StyleSheet')
  i3468.m_TextStyleHashCode = i3469[35]
  i3468.m_overrideHtmlColors = !!i3469[36]
  i3468.m_faceColor = UnityEngine.Color32.ConstructColor(i3469[37], i3469[38], i3469[39], i3469[40])
  i3468.m_fontSize = i3469[41]
  i3468.m_fontSizeBase = i3469[42]
  i3468.m_fontWeight = i3469[43]
  i3468.m_enableAutoSizing = !!i3469[44]
  i3468.m_fontSizeMin = i3469[45]
  i3468.m_fontSizeMax = i3469[46]
  i3468.m_fontStyle = i3469[47]
  i3468.m_HorizontalAlignment = i3469[48]
  i3468.m_VerticalAlignment = i3469[49]
  i3468.m_textAlignment = i3469[50]
  i3468.m_characterSpacing = i3469[51]
  i3468.m_wordSpacing = i3469[52]
  i3468.m_lineSpacing = i3469[53]
  i3468.m_lineSpacingMax = i3469[54]
  i3468.m_paragraphSpacing = i3469[55]
  i3468.m_charWidthMaxAdj = i3469[56]
  i3468.m_TextWrappingMode = i3469[57]
  i3468.m_wordWrappingRatios = i3469[58]
  i3468.m_overflowMode = i3469[59]
  request.r(i3469[60], i3469[61], 0, i3468, 'm_linkedTextComponent')
  request.r(i3469[62], i3469[63], 0, i3468, 'parentLinkedComponent')
  i3468.m_enableKerning = !!i3469[64]
  var i3475 = i3469[65]
  var i3474 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i3475.length; i += 1) {
    i3474.add(i3475[i + 0]);
  }
  i3468.m_ActiveFontFeatures = i3474
  i3468.m_enableExtraPadding = !!i3469[66]
  i3468.checkPaddingRequired = !!i3469[67]
  i3468.m_isRichText = !!i3469[68]
  i3468.m_parseCtrlCharacters = !!i3469[69]
  i3468.m_isOrthographic = !!i3469[70]
  i3468.m_isCullingEnabled = !!i3469[71]
  i3468.m_horizontalMapping = i3469[72]
  i3468.m_verticalMapping = i3469[73]
  i3468.m_uvLineOffset = i3469[74]
  i3468.m_geometrySortingOrder = i3469[75]
  i3468.m_IsTextObjectScaleStatic = !!i3469[76]
  i3468.m_VertexBufferAutoSizeReduction = !!i3469[77]
  i3468.m_useMaxVisibleDescender = !!i3469[78]
  i3468.m_pageToDisplay = i3469[79]
  i3468.m_margin = new pc.Vec4( i3469[80], i3469[81], i3469[82], i3469[83] )
  i3468.m_isUsingLegacyAnimationComponent = !!i3469[84]
  i3468.m_isVolumetricText = !!i3469[85]
  request.r(i3469[86], i3469[87], 0, i3468, 'm_Material')
  i3468.m_EmojiFallbackSupport = !!i3469[88]
  i3468.m_Maskable = !!i3469[89]
  i3468.m_Color = new pc.Color(i3469[90], i3469[91], i3469[92], i3469[93])
  i3468.m_RaycastTarget = !!i3469[94]
  i3468.m_RaycastPadding = new pc.Vec4( i3469[95], i3469[96], i3469[97], i3469[98] )
  return i3468
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i3476 = root || request.c( 'UnityEngine.UI.Image' )
  var i3477 = data
  request.r(i3477[0], i3477[1], 0, i3476, 'm_Sprite')
  i3476.m_Type = i3477[2]
  i3476.m_PreserveAspect = !!i3477[3]
  i3476.m_FillCenter = !!i3477[4]
  i3476.m_FillMethod = i3477[5]
  i3476.m_FillAmount = i3477[6]
  i3476.m_FillClockwise = !!i3477[7]
  i3476.m_FillOrigin = i3477[8]
  i3476.m_UseSpriteMesh = !!i3477[9]
  i3476.m_PixelsPerUnitMultiplier = i3477[10]
  request.r(i3477[11], i3477[12], 0, i3476, 'm_Material')
  i3476.m_Maskable = !!i3477[13]
  i3476.m_Color = new pc.Color(i3477[14], i3477[15], i3477[16], i3477[17])
  i3476.m_RaycastTarget = !!i3477[18]
  i3476.m_RaycastPadding = new pc.Vec4( i3477[19], i3477[20], i3477[21], i3477[22] )
  return i3476
}

Deserializers["PlayerSlot"] = function (request, data, root) {
  var i3478 = root || request.c( 'PlayerSlot' )
  var i3479 = data
  request.r(i3479[0], i3479[1], 0, i3478, 'spriteRenderer')
  request.r(i3479[2], i3479[3], 0, i3478, 'lightEffect')
  i3478.idleScale = i3479[4]
  i3478.idleDuration = i3479[5]
  i3478.originalPosition = new pc.Vec3( i3479[6], i3479[7], i3479[8] )
  i3478.originalScale = new pc.Vec3( i3479[9], i3479[10], i3479[11] )
  request.r(i3479[12], i3479[13], 0, i3478, 'currentData')
  return i3478
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i3480 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i3481 = data
  request.r(i3481[0], i3481[1], 0, i3480, 'm_FirstSelected')
  i3480.m_sendNavigationEvents = !!i3481[2]
  i3480.m_DragThreshold = i3481[3]
  return i3480
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i3482 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i3483 = data
  i3482.m_HorizontalAxis = i3483[0]
  i3482.m_VerticalAxis = i3483[1]
  i3482.m_SubmitButton = i3483[2]
  i3482.m_CancelButton = i3483[3]
  i3482.m_InputActionsPerSecond = i3483[4]
  i3482.m_RepeatDelay = i3483[5]
  i3482.m_ForceModuleActive = !!i3483[6]
  i3482.m_SendPointerHoverToParent = !!i3483[7]
  return i3482
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i3484 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i3485 = data
  i3484.ambientIntensity = i3485[0]
  i3484.reflectionIntensity = i3485[1]
  i3484.ambientMode = i3485[2]
  i3484.ambientLight = new pc.Color(i3485[3], i3485[4], i3485[5], i3485[6])
  i3484.ambientSkyColor = new pc.Color(i3485[7], i3485[8], i3485[9], i3485[10])
  i3484.ambientGroundColor = new pc.Color(i3485[11], i3485[12], i3485[13], i3485[14])
  i3484.ambientEquatorColor = new pc.Color(i3485[15], i3485[16], i3485[17], i3485[18])
  i3484.fogColor = new pc.Color(i3485[19], i3485[20], i3485[21], i3485[22])
  i3484.fogEndDistance = i3485[23]
  i3484.fogStartDistance = i3485[24]
  i3484.fogDensity = i3485[25]
  i3484.fog = !!i3485[26]
  request.r(i3485[27], i3485[28], 0, i3484, 'skybox')
  i3484.fogMode = i3485[29]
  var i3487 = i3485[30]
  var i3486 = []
  for(var i = 0; i < i3487.length; i += 1) {
    i3486.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i3487[i + 0]) );
  }
  i3484.lightmaps = i3486
  i3484.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i3485[31], i3484.lightProbes)
  i3484.lightmapsMode = i3485[32]
  i3484.mixedBakeMode = i3485[33]
  i3484.environmentLightingMode = i3485[34]
  i3484.ambientProbe = new pc.SphericalHarmonicsL2(i3485[35])
  i3484.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i3485[36])
  i3484.useReferenceAmbientProbe = !!i3485[37]
  request.r(i3485[38], i3485[39], 0, i3484, 'customReflection')
  request.r(i3485[40], i3485[41], 0, i3484, 'defaultReflection')
  i3484.defaultReflectionMode = i3485[42]
  i3484.defaultReflectionResolution = i3485[43]
  i3484.sunLightObjectId = i3485[44]
  i3484.pixelLightCount = i3485[45]
  i3484.defaultReflectionHDR = !!i3485[46]
  i3484.hasLightDataAsset = !!i3485[47]
  i3484.hasManualGenerate = !!i3485[48]
  return i3484
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i3490 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i3491 = data
  request.r(i3491[0], i3491[1], 0, i3490, 'lightmapColor')
  request.r(i3491[2], i3491[3], 0, i3490, 'lightmapDirection')
  request.r(i3491[4], i3491[5], 0, i3490, 'shadowMask')
  return i3490
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i3492 = root || new UnityEngine.LightProbes()
  var i3493 = data
  return i3492
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i3500 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i3501 = data
  var i3503 = i3501[0]
  var i3502 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i3503.length; i += 1) {
    i3502.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i3503[i + 0]));
  }
  i3500.ShaderCompilationErrors = i3502
  i3500.name = i3501[1]
  i3500.guid = i3501[2]
  var i3505 = i3501[3]
  var i3504 = []
  for(var i = 0; i < i3505.length; i += 1) {
    i3504.push( i3505[i + 0] );
  }
  i3500.shaderDefinedKeywords = i3504
  var i3507 = i3501[4]
  var i3506 = []
  for(var i = 0; i < i3507.length; i += 1) {
    i3506.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i3507[i + 0]) );
  }
  i3500.passes = i3506
  var i3509 = i3501[5]
  var i3508 = []
  for(var i = 0; i < i3509.length; i += 1) {
    i3508.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i3509[i + 0]) );
  }
  i3500.usePasses = i3508
  var i3511 = i3501[6]
  var i3510 = []
  for(var i = 0; i < i3511.length; i += 1) {
    i3510.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i3511[i + 0]) );
  }
  i3500.defaultParameterValues = i3510
  request.r(i3501[7], i3501[8], 0, i3500, 'unityFallbackShader')
  i3500.readDepth = !!i3501[9]
  i3500.hasDepthOnlyPass = !!i3501[10]
  i3500.isCreatedByShaderGraph = !!i3501[11]
  i3500.disableBatching = !!i3501[12]
  i3500.compiled = !!i3501[13]
  return i3500
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i3514 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i3515 = data
  i3514.shaderName = i3515[0]
  i3514.errorMessage = i3515[1]
  return i3514
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i3520 = root || new pc.UnityShaderPass()
  var i3521 = data
  i3520.id = i3521[0]
  i3520.subShaderIndex = i3521[1]
  i3520.name = i3521[2]
  i3520.passType = i3521[3]
  i3520.grabPassTextureName = i3521[4]
  i3520.usePass = !!i3521[5]
  i3520.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3521[6], i3520.zTest)
  i3520.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3521[7], i3520.zWrite)
  i3520.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3521[8], i3520.culling)
  i3520.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i3521[9], i3520.blending)
  i3520.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i3521[10], i3520.alphaBlending)
  i3520.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3521[11], i3520.colorWriteMask)
  i3520.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3521[12], i3520.offsetUnits)
  i3520.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3521[13], i3520.offsetFactor)
  i3520.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3521[14], i3520.stencilRef)
  i3520.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3521[15], i3520.stencilReadMask)
  i3520.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3521[16], i3520.stencilWriteMask)
  i3520.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3521[17], i3520.stencilOp)
  i3520.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3521[18], i3520.stencilOpFront)
  i3520.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3521[19], i3520.stencilOpBack)
  var i3523 = i3521[20]
  var i3522 = []
  for(var i = 0; i < i3523.length; i += 1) {
    i3522.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i3523[i + 0]) );
  }
  i3520.tags = i3522
  var i3525 = i3521[21]
  var i3524 = []
  for(var i = 0; i < i3525.length; i += 1) {
    i3524.push( i3525[i + 0] );
  }
  i3520.passDefinedKeywords = i3524
  var i3527 = i3521[22]
  var i3526 = []
  for(var i = 0; i < i3527.length; i += 1) {
    i3526.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i3527[i + 0]) );
  }
  i3520.passDefinedKeywordGroups = i3526
  var i3529 = i3521[23]
  var i3528 = []
  for(var i = 0; i < i3529.length; i += 1) {
    i3528.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i3529[i + 0]) );
  }
  i3520.variants = i3528
  var i3531 = i3521[24]
  var i3530 = []
  for(var i = 0; i < i3531.length; i += 1) {
    i3530.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i3531[i + 0]) );
  }
  i3520.excludedVariants = i3530
  i3520.hasDepthReader = !!i3521[25]
  return i3520
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i3532 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i3533 = data
  i3532.val = i3533[0]
  i3532.name = i3533[1]
  return i3532
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i3534 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i3535 = data
  i3534.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3535[0], i3534.src)
  i3534.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3535[1], i3534.dst)
  i3534.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3535[2], i3534.op)
  return i3534
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i3536 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i3537 = data
  i3536.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3537[0], i3536.pass)
  i3536.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3537[1], i3536.fail)
  i3536.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3537[2], i3536.zFail)
  i3536.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3537[3], i3536.comp)
  return i3536
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i3540 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i3541 = data
  i3540.name = i3541[0]
  i3540.value = i3541[1]
  return i3540
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i3544 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i3545 = data
  var i3547 = i3545[0]
  var i3546 = []
  for(var i = 0; i < i3547.length; i += 1) {
    i3546.push( i3547[i + 0] );
  }
  i3544.keywords = i3546
  i3544.hasDiscard = !!i3545[1]
  return i3544
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i3550 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i3551 = data
  i3550.passId = i3551[0]
  i3550.subShaderIndex = i3551[1]
  var i3553 = i3551[2]
  var i3552 = []
  for(var i = 0; i < i3553.length; i += 1) {
    i3552.push( i3553[i + 0] );
  }
  i3550.keywords = i3552
  i3550.vertexProgram = i3551[3]
  i3550.fragmentProgram = i3551[4]
  i3550.exportedForWebGl2 = !!i3551[5]
  i3550.readDepth = !!i3551[6]
  return i3550
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i3556 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i3557 = data
  request.r(i3557[0], i3557[1], 0, i3556, 'shader')
  i3556.pass = i3557[2]
  return i3556
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i3560 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i3561 = data
  i3560.name = i3561[0]
  i3560.type = i3561[1]
  i3560.value = new pc.Vec4( i3561[2], i3561[3], i3561[4], i3561[5] )
  i3560.textureValue = i3561[6]
  i3560.shaderPropertyFlag = i3561[7]
  return i3560
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i3562 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i3563 = data
  i3562.name = i3563[0]
  request.r(i3563[1], i3563[2], 0, i3562, 'texture')
  i3562.aabb = i3563[3]
  i3562.vertices = i3563[4]
  i3562.triangles = i3563[5]
  i3562.textureRect = UnityEngine.Rect.MinMaxRect(i3563[6], i3563[7], i3563[8], i3563[9])
  i3562.packedRect = UnityEngine.Rect.MinMaxRect(i3563[10], i3563[11], i3563[12], i3563[13])
  i3562.border = new pc.Vec4( i3563[14], i3563[15], i3563[16], i3563[17] )
  i3562.transparency = i3563[18]
  i3562.bounds = i3563[19]
  i3562.pixelsPerUnit = i3563[20]
  i3562.textureWidth = i3563[21]
  i3562.textureHeight = i3563[22]
  i3562.nativeSize = new pc.Vec2( i3563[23], i3563[24] )
  i3562.pivot = new pc.Vec2( i3563[25], i3563[26] )
  i3562.textureRectOffset = new pc.Vec2( i3563[27], i3563[28] )
  return i3562
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i3564 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i3565 = data
  i3564.name = i3565[0]
  return i3564
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i3566 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i3567 = data
  i3566.name = i3567[0]
  i3566.wrapMode = i3567[1]
  i3566.isLooping = !!i3567[2]
  i3566.length = i3567[3]
  var i3569 = i3567[4]
  var i3568 = []
  for(var i = 0; i < i3569.length; i += 1) {
    i3568.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i3569[i + 0]) );
  }
  i3566.curves = i3568
  var i3571 = i3567[5]
  var i3570 = []
  for(var i = 0; i < i3571.length; i += 1) {
    i3570.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i3571[i + 0]) );
  }
  i3566.events = i3570
  i3566.halfPrecision = !!i3567[6]
  i3566._frameRate = i3567[7]
  i3566.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i3567[8], i3566.localBounds)
  i3566.hasMuscleCurves = !!i3567[9]
  var i3573 = i3567[10]
  var i3572 = []
  for(var i = 0; i < i3573.length; i += 1) {
    i3572.push( i3573[i + 0] );
  }
  i3566.clipMuscleConstant = i3572
  i3566.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i3567[11], i3566.clipBindingConstant)
  return i3566
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i3576 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i3577 = data
  i3576.path = i3577[0]
  i3576.hash = i3577[1]
  i3576.componentType = i3577[2]
  i3576.property = i3577[3]
  i3576.keys = i3577[4]
  var i3579 = i3577[5]
  var i3578 = []
  for(var i = 0; i < i3579.length; i += 1) {
    i3578.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i3579[i + 0]) );
  }
  i3576.objectReferenceKeys = i3578
  return i3576
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i3582 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i3583 = data
  i3582.time = i3583[0]
  request.r(i3583[1], i3583[2], 0, i3582, 'value')
  return i3582
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i3586 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i3587 = data
  i3586.functionName = i3587[0]
  i3586.floatParameter = i3587[1]
  i3586.intParameter = i3587[2]
  i3586.stringParameter = i3587[3]
  request.r(i3587[4], i3587[5], 0, i3586, 'objectReferenceParameter')
  i3586.time = i3587[6]
  return i3586
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i3588 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i3589 = data
  i3588.center = new pc.Vec3( i3589[0], i3589[1], i3589[2] )
  i3588.extends = new pc.Vec3( i3589[3], i3589[4], i3589[5] )
  return i3588
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i3592 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i3593 = data
  var i3595 = i3593[0]
  var i3594 = []
  for(var i = 0; i < i3595.length; i += 1) {
    i3594.push( i3595[i + 0] );
  }
  i3592.genericBindings = i3594
  var i3597 = i3593[1]
  var i3596 = []
  for(var i = 0; i < i3597.length; i += 1) {
    i3596.push( i3597[i + 0] );
  }
  i3592.pptrCurveMapping = i3596
  return i3592
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i3598 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i3599 = data
  i3598.name = i3599[0]
  i3598.ascent = i3599[1]
  i3598.originalLineHeight = i3599[2]
  i3598.fontSize = i3599[3]
  var i3601 = i3599[4]
  var i3600 = []
  for(var i = 0; i < i3601.length; i += 1) {
    i3600.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i3601[i + 0]) );
  }
  i3598.characterInfo = i3600
  request.r(i3599[5], i3599[6], 0, i3598, 'texture')
  i3598.originalFontSize = i3599[7]
  return i3598
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i3604 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i3605 = data
  i3604.index = i3605[0]
  i3604.advance = i3605[1]
  i3604.bearing = i3605[2]
  i3604.glyphWidth = i3605[3]
  i3604.glyphHeight = i3605[4]
  i3604.minX = i3605[5]
  i3604.maxX = i3605[6]
  i3604.minY = i3605[7]
  i3604.maxY = i3605[8]
  i3604.uvBottomLeftX = i3605[9]
  i3604.uvBottomLeftY = i3605[10]
  i3604.uvBottomRightX = i3605[11]
  i3604.uvBottomRightY = i3605[12]
  i3604.uvTopLeftX = i3605[13]
  i3604.uvTopLeftY = i3605[14]
  i3604.uvTopRightX = i3605[15]
  i3604.uvTopRightY = i3605[16]
  return i3604
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i3606 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i3607 = data
  i3606.name = i3607[0]
  var i3609 = i3607[1]
  var i3608 = []
  for(var i = 0; i < i3609.length; i += 1) {
    i3608.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i3609[i + 0]) );
  }
  i3606.layers = i3608
  var i3611 = i3607[2]
  var i3610 = []
  for(var i = 0; i < i3611.length; i += 1) {
    i3610.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i3611[i + 0]) );
  }
  i3606.parameters = i3610
  i3606.animationClips = i3607[3]
  i3606.avatarUnsupported = i3607[4]
  return i3606
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i3614 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i3615 = data
  i3614.name = i3615[0]
  i3614.defaultWeight = i3615[1]
  i3614.blendingMode = i3615[2]
  i3614.avatarMask = i3615[3]
  i3614.syncedLayerIndex = i3615[4]
  i3614.syncedLayerAffectsTiming = !!i3615[5]
  i3614.syncedLayers = i3615[6]
  i3614.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i3615[7], i3614.stateMachine)
  return i3614
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i3616 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i3617 = data
  i3616.id = i3617[0]
  i3616.name = i3617[1]
  i3616.path = i3617[2]
  var i3619 = i3617[3]
  var i3618 = []
  for(var i = 0; i < i3619.length; i += 1) {
    i3618.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i3619[i + 0]) );
  }
  i3616.states = i3618
  var i3621 = i3617[4]
  var i3620 = []
  for(var i = 0; i < i3621.length; i += 1) {
    i3620.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i3621[i + 0]) );
  }
  i3616.machines = i3620
  var i3623 = i3617[5]
  var i3622 = []
  for(var i = 0; i < i3623.length; i += 1) {
    i3622.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i3623[i + 0]) );
  }
  i3616.entryStateTransitions = i3622
  var i3625 = i3617[6]
  var i3624 = []
  for(var i = 0; i < i3625.length; i += 1) {
    i3624.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i3625[i + 0]) );
  }
  i3616.exitStateTransitions = i3624
  var i3627 = i3617[7]
  var i3626 = []
  for(var i = 0; i < i3627.length; i += 1) {
    i3626.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i3627[i + 0]) );
  }
  i3616.anyStateTransitions = i3626
  i3616.defaultStateId = i3617[8]
  return i3616
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i3630 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i3631 = data
  i3630.id = i3631[0]
  i3630.name = i3631[1]
  i3630.cycleOffset = i3631[2]
  i3630.cycleOffsetParameter = i3631[3]
  i3630.cycleOffsetParameterActive = !!i3631[4]
  i3630.mirror = !!i3631[5]
  i3630.mirrorParameter = i3631[6]
  i3630.mirrorParameterActive = !!i3631[7]
  i3630.motionId = i3631[8]
  i3630.nameHash = i3631[9]
  i3630.fullPathHash = i3631[10]
  i3630.speed = i3631[11]
  i3630.speedParameter = i3631[12]
  i3630.speedParameterActive = !!i3631[13]
  i3630.tag = i3631[14]
  i3630.tagHash = i3631[15]
  i3630.writeDefaultValues = !!i3631[16]
  var i3633 = i3631[17]
  var i3632 = []
  for(var i = 0; i < i3633.length; i += 2) {
  request.r(i3633[i + 0], i3633[i + 1], 2, i3632, '')
  }
  i3630.behaviours = i3632
  var i3635 = i3631[18]
  var i3634 = []
  for(var i = 0; i < i3635.length; i += 1) {
    i3634.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i3635[i + 0]) );
  }
  i3630.transitions = i3634
  return i3630
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i3640 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i3641 = data
  i3640.fullPath = i3641[0]
  i3640.canTransitionToSelf = !!i3641[1]
  i3640.duration = i3641[2]
  i3640.exitTime = i3641[3]
  i3640.hasExitTime = !!i3641[4]
  i3640.hasFixedDuration = !!i3641[5]
  i3640.interruptionSource = i3641[6]
  i3640.offset = i3641[7]
  i3640.orderedInterruption = !!i3641[8]
  i3640.destinationStateId = i3641[9]
  i3640.isExit = !!i3641[10]
  i3640.mute = !!i3641[11]
  i3640.solo = !!i3641[12]
  var i3643 = i3641[13]
  var i3642 = []
  for(var i = 0; i < i3643.length; i += 1) {
    i3642.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i3643[i + 0]) );
  }
  i3640.conditions = i3642
  return i3640
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i3648 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i3649 = data
  i3648.destinationStateId = i3649[0]
  i3648.isExit = !!i3649[1]
  i3648.mute = !!i3649[2]
  i3648.solo = !!i3649[3]
  var i3651 = i3649[4]
  var i3650 = []
  for(var i = 0; i < i3651.length; i += 1) {
    i3650.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i3651[i + 0]) );
  }
  i3648.conditions = i3650
  return i3648
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i3654 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i3655 = data
  i3654.defaultBool = !!i3655[0]
  i3654.defaultFloat = i3655[1]
  i3654.defaultInt = i3655[2]
  i3654.name = i3655[3]
  i3654.nameHash = i3655[4]
  i3654.type = i3655[5]
  return i3654
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i3656 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i3657 = data
  i3656.name = i3657[0]
  i3656.bytes64 = i3657[1]
  i3656.data = i3657[2]
  return i3656
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i3658 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i3659 = data
  i3658.normalStyle = i3659[0]
  i3658.normalSpacingOffset = i3659[1]
  i3658.boldStyle = i3659[2]
  i3658.boldSpacing = i3659[3]
  i3658.italicStyle = i3659[4]
  i3658.tabSize = i3659[5]
  request.r(i3659[6], i3659[7], 0, i3658, 'atlas')
  i3658.m_SourceFontFileGUID = i3659[8]
  i3658.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i3659[9], i3658.m_CreationSettings)
  request.r(i3659[10], i3659[11], 0, i3658, 'm_SourceFontFile')
  i3658.m_SourceFontFilePath = i3659[12]
  i3658.m_AtlasPopulationMode = i3659[13]
  i3658.InternalDynamicOS = !!i3659[14]
  var i3661 = i3659[15]
  var i3660 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i3661.length; i += 1) {
    i3660.add(request.d('UnityEngine.TextCore.Glyph', i3661[i + 0]));
  }
  i3658.m_GlyphTable = i3660
  var i3663 = i3659[16]
  var i3662 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i3663.length; i += 1) {
    i3662.add(request.d('TMPro.TMP_Character', i3663[i + 0]));
  }
  i3658.m_CharacterTable = i3662
  var i3665 = i3659[17]
  var i3664 = []
  for(var i = 0; i < i3665.length; i += 2) {
  request.r(i3665[i + 0], i3665[i + 1], 2, i3664, '')
  }
  i3658.m_AtlasTextures = i3664
  i3658.m_AtlasTextureIndex = i3659[18]
  i3658.m_IsMultiAtlasTexturesEnabled = !!i3659[19]
  i3658.m_GetFontFeatures = !!i3659[20]
  i3658.m_ClearDynamicDataOnBuild = !!i3659[21]
  i3658.m_AtlasWidth = i3659[22]
  i3658.m_AtlasHeight = i3659[23]
  i3658.m_AtlasPadding = i3659[24]
  i3658.m_AtlasRenderMode = i3659[25]
  var i3667 = i3659[26]
  var i3666 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i3667.length; i += 1) {
    i3666.add(request.d('UnityEngine.TextCore.GlyphRect', i3667[i + 0]));
  }
  i3658.m_UsedGlyphRects = i3666
  var i3669 = i3659[27]
  var i3668 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i3669.length; i += 1) {
    i3668.add(request.d('UnityEngine.TextCore.GlyphRect', i3669[i + 0]));
  }
  i3658.m_FreeGlyphRects = i3668
  i3658.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i3659[28], i3658.m_FontFeatureTable)
  i3658.m_ShouldReimportFontFeatures = !!i3659[29]
  var i3671 = i3659[30]
  var i3670 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i3671.length; i += 2) {
  request.r(i3671[i + 0], i3671[i + 1], 1, i3670, '')
  }
  i3658.m_FallbackFontAssetTable = i3670
  var i3673 = i3659[31]
  var i3672 = []
  for(var i = 0; i < i3673.length; i += 1) {
    i3672.push( request.d('TMPro.TMP_FontWeightPair', i3673[i + 0]) );
  }
  i3658.m_FontWeightTable = i3672
  var i3675 = i3659[32]
  var i3674 = []
  for(var i = 0; i < i3675.length; i += 1) {
    i3674.push( request.d('TMPro.TMP_FontWeightPair', i3675[i + 0]) );
  }
  i3658.fontWeights = i3674
  i3658.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i3659[33], i3658.m_fontInfo)
  var i3677 = i3659[34]
  var i3676 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i3677.length; i += 1) {
    i3676.add(request.d('TMPro.TMP_Glyph', i3677[i + 0]));
  }
  i3658.m_glyphInfoList = i3676
  i3658.m_KerningTable = request.d('TMPro.KerningTable', i3659[35], i3658.m_KerningTable)
  var i3679 = i3659[36]
  var i3678 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i3679.length; i += 2) {
  request.r(i3679[i + 0], i3679[i + 1], 1, i3678, '')
  }
  i3658.fallbackFontAssets = i3678
  i3658.m_Version = i3659[37]
  i3658.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i3659[38], i3658.m_FaceInfo)
  request.r(i3659[39], i3659[40], 0, i3658, 'm_Material')
  return i3658
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i3680 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i3681 = data
  i3680.sourceFontFileName = i3681[0]
  i3680.sourceFontFileGUID = i3681[1]
  i3680.faceIndex = i3681[2]
  i3680.pointSizeSamplingMode = i3681[3]
  i3680.pointSize = i3681[4]
  i3680.padding = i3681[5]
  i3680.paddingMode = i3681[6]
  i3680.packingMode = i3681[7]
  i3680.atlasWidth = i3681[8]
  i3680.atlasHeight = i3681[9]
  i3680.characterSetSelectionMode = i3681[10]
  i3680.characterSequence = i3681[11]
  i3680.referencedFontAssetGUID = i3681[12]
  i3680.referencedTextAssetGUID = i3681[13]
  i3680.fontStyle = i3681[14]
  i3680.fontStyleModifier = i3681[15]
  i3680.renderMode = i3681[16]
  i3680.includeFontFeatures = !!i3681[17]
  return i3680
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i3684 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i3685 = data
  i3684.m_Index = i3685[0]
  i3684.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i3685[1], i3684.m_Metrics)
  i3684.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i3685[2], i3684.m_GlyphRect)
  i3684.m_Scale = i3685[3]
  i3684.m_AtlasIndex = i3685[4]
  i3684.m_ClassDefinitionType = i3685[5]
  return i3684
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i3686 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i3687 = data
  i3686.m_Width = i3687[0]
  i3686.m_Height = i3687[1]
  i3686.m_HorizontalBearingX = i3687[2]
  i3686.m_HorizontalBearingY = i3687[3]
  i3686.m_HorizontalAdvance = i3687[4]
  return i3686
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i3688 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i3689 = data
  i3688.m_X = i3689[0]
  i3688.m_Y = i3689[1]
  i3688.m_Width = i3689[2]
  i3688.m_Height = i3689[3]
  return i3688
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i3692 = root || request.c( 'TMPro.TMP_Character' )
  var i3693 = data
  i3692.m_ElementType = i3693[0]
  i3692.m_Unicode = i3693[1]
  i3692.m_GlyphIndex = i3693[2]
  i3692.m_Scale = i3693[3]
  return i3692
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i3698 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i3699 = data
  var i3701 = i3699[0]
  var i3700 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i3701.length; i += 1) {
    i3700.add(request.d('TMPro.MultipleSubstitutionRecord', i3701[i + 0]));
  }
  i3698.m_MultipleSubstitutionRecords = i3700
  var i3703 = i3699[1]
  var i3702 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i3703.length; i += 1) {
    i3702.add(request.d('TMPro.LigatureSubstitutionRecord', i3703[i + 0]));
  }
  i3698.m_LigatureSubstitutionRecords = i3702
  var i3705 = i3699[2]
  var i3704 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i3705.length; i += 1) {
    i3704.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i3705[i + 0]));
  }
  i3698.m_GlyphPairAdjustmentRecords = i3704
  var i3707 = i3699[3]
  var i3706 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i3707.length; i += 1) {
    i3706.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i3707[i + 0]));
  }
  i3698.m_MarkToBaseAdjustmentRecords = i3706
  var i3709 = i3699[4]
  var i3708 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i3709.length; i += 1) {
    i3708.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i3709[i + 0]));
  }
  i3698.m_MarkToMarkAdjustmentRecords = i3708
  return i3698
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i3712 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i3713 = data
  i3712.m_TargetGlyphID = i3713[0]
  i3712.m_SubstituteGlyphIDs = i3713[1]
  return i3712
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i3716 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i3717 = data
  i3716.m_ComponentGlyphIDs = i3717[0]
  i3716.m_LigatureGlyphID = i3717[1]
  return i3716
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i3720 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i3721 = data
  i3720.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i3721[0], i3720.m_FirstAdjustmentRecord)
  i3720.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i3721[1], i3720.m_SecondAdjustmentRecord)
  i3720.m_FeatureLookupFlags = i3721[2]
  return i3720
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i3722 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i3723 = data
  i3722.m_GlyphIndex = i3723[0]
  i3722.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i3723[1], i3722.m_GlyphValueRecord)
  return i3722
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i3724 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i3725 = data
  i3724.m_XPlacement = i3725[0]
  i3724.m_YPlacement = i3725[1]
  i3724.m_XAdvance = i3725[2]
  i3724.m_YAdvance = i3725[3]
  return i3724
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i3728 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i3729 = data
  i3728.m_BaseGlyphID = i3729[0]
  i3728.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i3729[1], i3728.m_BaseGlyphAnchorPoint)
  i3728.m_MarkGlyphID = i3729[2]
  i3728.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i3729[3], i3728.m_MarkPositionAdjustment)
  return i3728
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i3732 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i3733 = data
  i3732.m_BaseMarkGlyphID = i3733[0]
  i3732.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i3733[1], i3732.m_BaseMarkGlyphAnchorPoint)
  i3732.m_CombiningMarkGlyphID = i3733[2]
  i3732.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i3733[3], i3732.m_CombiningMarkPositionAdjustment)
  return i3732
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i3738 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i3739 = data
  request.r(i3739[0], i3739[1], 0, i3738, 'regularTypeface')
  request.r(i3739[2], i3739[3], 0, i3738, 'italicTypeface')
  return i3738
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i3740 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i3741 = data
  i3740.Name = i3741[0]
  i3740.PointSize = i3741[1]
  i3740.Scale = i3741[2]
  i3740.CharacterCount = i3741[3]
  i3740.LineHeight = i3741[4]
  i3740.Baseline = i3741[5]
  i3740.Ascender = i3741[6]
  i3740.CapHeight = i3741[7]
  i3740.Descender = i3741[8]
  i3740.CenterLine = i3741[9]
  i3740.SuperscriptOffset = i3741[10]
  i3740.SubscriptOffset = i3741[11]
  i3740.SubSize = i3741[12]
  i3740.Underline = i3741[13]
  i3740.UnderlineThickness = i3741[14]
  i3740.strikethrough = i3741[15]
  i3740.strikethroughThickness = i3741[16]
  i3740.TabWidth = i3741[17]
  i3740.Padding = i3741[18]
  i3740.AtlasWidth = i3741[19]
  i3740.AtlasHeight = i3741[20]
  return i3740
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i3744 = root || request.c( 'TMPro.TMP_Glyph' )
  var i3745 = data
  i3744.id = i3745[0]
  i3744.x = i3745[1]
  i3744.y = i3745[2]
  i3744.width = i3745[3]
  i3744.height = i3745[4]
  i3744.xOffset = i3745[5]
  i3744.yOffset = i3745[6]
  i3744.xAdvance = i3745[7]
  i3744.scale = i3745[8]
  return i3744
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i3746 = root || request.c( 'TMPro.KerningTable' )
  var i3747 = data
  var i3749 = i3747[0]
  var i3748 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i3749.length; i += 1) {
    i3748.add(request.d('TMPro.KerningPair', i3749[i + 0]));
  }
  i3746.kerningPairs = i3748
  return i3746
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i3752 = root || request.c( 'TMPro.KerningPair' )
  var i3753 = data
  i3752.xOffset = i3753[0]
  i3752.m_FirstGlyph = i3753[1]
  i3752.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i3753[2], i3752.m_FirstGlyphAdjustments)
  i3752.m_SecondGlyph = i3753[3]
  i3752.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i3753[4], i3752.m_SecondGlyphAdjustments)
  i3752.m_IgnoreSpacingAdjustments = !!i3753[5]
  return i3752
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i3754 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i3755 = data
  i3754.m_FaceIndex = i3755[0]
  i3754.m_FamilyName = i3755[1]
  i3754.m_StyleName = i3755[2]
  i3754.m_PointSize = i3755[3]
  i3754.m_Scale = i3755[4]
  i3754.m_UnitsPerEM = i3755[5]
  i3754.m_LineHeight = i3755[6]
  i3754.m_AscentLine = i3755[7]
  i3754.m_CapLine = i3755[8]
  i3754.m_MeanLine = i3755[9]
  i3754.m_Baseline = i3755[10]
  i3754.m_DescentLine = i3755[11]
  i3754.m_SuperscriptOffset = i3755[12]
  i3754.m_SuperscriptSize = i3755[13]
  i3754.m_SubscriptOffset = i3755[14]
  i3754.m_SubscriptSize = i3755[15]
  i3754.m_UnderlineOffset = i3755[16]
  i3754.m_UnderlineThickness = i3755[17]
  i3754.m_StrikethroughOffset = i3755[18]
  i3754.m_StrikethroughThickness = i3755[19]
  i3754.m_TabWidth = i3755[20]
  return i3754
}

Deserializers["FavoritePlayerCard"] = function (request, data, root) {
  var i3756 = root || request.c( 'FavoritePlayerCard' )
  var i3757 = data
  i3756.playerName = i3757[0]
  request.r(i3757[1], i3757[2], 0, i3756, 'halfBodySprite')
  request.r(i3757[3], i3757[4], 0, i3756, 'fullBodySprite')
  request.r(i3757[5], i3757[6], 0, i3756, 'nameAudio')
  return i3756
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i3758 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i3759 = data
  i3758.useSafeMode = !!i3759[0]
  i3758.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i3759[1], i3758.safeModeOptions)
  i3758.timeScale = i3759[2]
  i3758.unscaledTimeScale = i3759[3]
  i3758.useSmoothDeltaTime = !!i3759[4]
  i3758.maxSmoothUnscaledTime = i3759[5]
  i3758.rewindCallbackMode = i3759[6]
  i3758.showUnityEditorReport = !!i3759[7]
  i3758.logBehaviour = i3759[8]
  i3758.drawGizmos = !!i3759[9]
  i3758.defaultRecyclable = !!i3759[10]
  i3758.defaultAutoPlay = i3759[11]
  i3758.defaultUpdateType = i3759[12]
  i3758.defaultTimeScaleIndependent = !!i3759[13]
  i3758.defaultEaseType = i3759[14]
  i3758.defaultEaseOvershootOrAmplitude = i3759[15]
  i3758.defaultEasePeriod = i3759[16]
  i3758.defaultAutoKill = !!i3759[17]
  i3758.defaultLoopType = i3759[18]
  i3758.debugMode = !!i3759[19]
  i3758.debugStoreTargetId = !!i3759[20]
  i3758.showPreviewPanel = !!i3759[21]
  i3758.storeSettingsLocation = i3759[22]
  i3758.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i3759[23], i3758.modules)
  i3758.createASMDEF = !!i3759[24]
  i3758.showPlayingTweens = !!i3759[25]
  i3758.showPausedTweens = !!i3759[26]
  return i3758
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i3760 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i3761 = data
  i3760.logBehaviour = i3761[0]
  i3760.nestedTweenFailureBehaviour = i3761[1]
  return i3760
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i3762 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i3763 = data
  i3762.showPanel = !!i3763[0]
  i3762.audioEnabled = !!i3763[1]
  i3762.physicsEnabled = !!i3763[2]
  i3762.physics2DEnabled = !!i3763[3]
  i3762.spriteEnabled = !!i3763[4]
  i3762.uiEnabled = !!i3763[5]
  i3762.uiToolkitEnabled = !!i3763[6]
  i3762.textMeshProEnabled = !!i3763[7]
  i3762.tk2DEnabled = !!i3763[8]
  i3762.deAudioEnabled = !!i3763[9]
  i3762.deUnityExtendedEnabled = !!i3763[10]
  i3762.epoOutlineEnabled = !!i3763[11]
  return i3762
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i3764 = root || request.c( 'TMPro.TMP_Settings' )
  var i3765 = data
  i3764.assetVersion = i3765[0]
  i3764.m_TextWrappingMode = i3765[1]
  i3764.m_enableKerning = !!i3765[2]
  var i3767 = i3765[3]
  var i3766 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i3767.length; i += 1) {
    i3766.add(i3767[i + 0]);
  }
  i3764.m_ActiveFontFeatures = i3766
  i3764.m_enableExtraPadding = !!i3765[4]
  i3764.m_enableTintAllSprites = !!i3765[5]
  i3764.m_enableParseEscapeCharacters = !!i3765[6]
  i3764.m_EnableRaycastTarget = !!i3765[7]
  i3764.m_GetFontFeaturesAtRuntime = !!i3765[8]
  i3764.m_missingGlyphCharacter = i3765[9]
  i3764.m_ClearDynamicDataOnBuild = !!i3765[10]
  i3764.m_warningsDisabled = !!i3765[11]
  request.r(i3765[12], i3765[13], 0, i3764, 'm_defaultFontAsset')
  i3764.m_defaultFontAssetPath = i3765[14]
  i3764.m_defaultFontSize = i3765[15]
  i3764.m_defaultAutoSizeMinRatio = i3765[16]
  i3764.m_defaultAutoSizeMaxRatio = i3765[17]
  i3764.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i3765[18], i3765[19] )
  i3764.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i3765[20], i3765[21] )
  i3764.m_autoSizeTextContainer = !!i3765[22]
  i3764.m_IsTextObjectScaleStatic = !!i3765[23]
  var i3769 = i3765[24]
  var i3768 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i3769.length; i += 2) {
  request.r(i3769[i + 0], i3769[i + 1], 1, i3768, '')
  }
  i3764.m_fallbackFontAssets = i3768
  i3764.m_matchMaterialPreset = !!i3765[25]
  i3764.m_HideSubTextObjects = !!i3765[26]
  request.r(i3765[27], i3765[28], 0, i3764, 'm_defaultSpriteAsset')
  i3764.m_defaultSpriteAssetPath = i3765[29]
  i3764.m_enableEmojiSupport = !!i3765[30]
  i3764.m_MissingCharacterSpriteUnicode = i3765[31]
  var i3771 = i3765[32]
  var i3770 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i3771.length; i += 2) {
  request.r(i3771[i + 0], i3771[i + 1], 1, i3770, '')
  }
  i3764.m_EmojiFallbackTextAssets = i3770
  i3764.m_defaultColorGradientPresetsPath = i3765[33]
  request.r(i3765[34], i3765[35], 0, i3764, 'm_defaultStyleSheet')
  i3764.m_StyleSheetsResourcePath = i3765[36]
  request.r(i3765[37], i3765[38], 0, i3764, 'm_leadingCharacters')
  request.r(i3765[39], i3765[40], 0, i3764, 'm_followingCharacters')
  i3764.m_UseModernHangulLineBreakingRules = !!i3765[41]
  return i3764
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i3774 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i3775 = data
  request.r(i3775[0], i3775[1], 0, i3774, 'spriteSheet')
  var i3777 = i3775[2]
  var i3776 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i3777.length; i += 1) {
    i3776.add(request.d('TMPro.TMP_Sprite', i3777[i + 0]));
  }
  i3774.spriteInfoList = i3776
  var i3779 = i3775[3]
  var i3778 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i3779.length; i += 2) {
  request.r(i3779[i + 0], i3779[i + 1], 1, i3778, '')
  }
  i3774.fallbackSpriteAssets = i3778
  var i3781 = i3775[4]
  var i3780 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i3781.length; i += 1) {
    i3780.add(request.d('TMPro.TMP_SpriteCharacter', i3781[i + 0]));
  }
  i3774.m_SpriteCharacterTable = i3780
  var i3783 = i3775[5]
  var i3782 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i3783.length; i += 1) {
    i3782.add(request.d('TMPro.TMP_SpriteGlyph', i3783[i + 0]));
  }
  i3774.m_GlyphTable = i3782
  i3774.m_Version = i3775[6]
  i3774.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i3775[7], i3774.m_FaceInfo)
  request.r(i3775[8], i3775[9], 0, i3774, 'm_Material')
  return i3774
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i3786 = root || request.c( 'TMPro.TMP_Sprite' )
  var i3787 = data
  i3786.name = i3787[0]
  i3786.hashCode = i3787[1]
  i3786.unicode = i3787[2]
  i3786.pivot = new pc.Vec2( i3787[3], i3787[4] )
  request.r(i3787[5], i3787[6], 0, i3786, 'sprite')
  i3786.id = i3787[7]
  i3786.x = i3787[8]
  i3786.y = i3787[9]
  i3786.width = i3787[10]
  i3786.height = i3787[11]
  i3786.xOffset = i3787[12]
  i3786.yOffset = i3787[13]
  i3786.xAdvance = i3787[14]
  i3786.scale = i3787[15]
  return i3786
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i3792 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i3793 = data
  i3792.m_Name = i3793[0]
  i3792.m_ElementType = i3793[1]
  i3792.m_Unicode = i3793[2]
  i3792.m_GlyphIndex = i3793[3]
  i3792.m_Scale = i3793[4]
  return i3792
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i3796 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i3797 = data
  request.r(i3797[0], i3797[1], 0, i3796, 'sprite')
  i3796.m_Index = i3797[2]
  i3796.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i3797[3], i3796.m_Metrics)
  i3796.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i3797[4], i3796.m_GlyphRect)
  i3796.m_Scale = i3797[5]
  i3796.m_AtlasIndex = i3797[6]
  i3796.m_ClassDefinitionType = i3797[7]
  return i3796
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i3798 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i3799 = data
  var i3801 = i3799[0]
  var i3800 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i3801.length; i += 1) {
    i3800.add(request.d('TMPro.TMP_Style', i3801[i + 0]));
  }
  i3798.m_StyleList = i3800
  return i3798
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i3804 = root || request.c( 'TMPro.TMP_Style' )
  var i3805 = data
  i3804.m_Name = i3805[0]
  i3804.m_HashCode = i3805[1]
  i3804.m_OpeningDefinition = i3805[2]
  i3804.m_ClosingDefinition = i3805[3]
  i3804.m_OpeningTagArray = i3805[4]
  i3804.m_ClosingTagArray = i3805[5]
  return i3804
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i3806 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i3807 = data
  var i3809 = i3807[0]
  var i3808 = []
  for(var i = 0; i < i3809.length; i += 1) {
    i3808.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i3809[i + 0]) );
  }
  i3806.files = i3808
  i3806.componentToPrefabIds = i3807[1]
  return i3806
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i3812 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i3813 = data
  i3812.path = i3813[0]
  request.r(i3813[1], i3813[2], 0, i3812, 'unityObject')
  return i3812
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i3814 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i3815 = data
  var i3817 = i3815[0]
  var i3816 = []
  for(var i = 0; i < i3817.length; i += 1) {
    i3816.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i3817[i + 0]) );
  }
  i3814.scriptsExecutionOrder = i3816
  var i3819 = i3815[1]
  var i3818 = []
  for(var i = 0; i < i3819.length; i += 1) {
    i3818.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i3819[i + 0]) );
  }
  i3814.sortingLayers = i3818
  var i3821 = i3815[2]
  var i3820 = []
  for(var i = 0; i < i3821.length; i += 1) {
    i3820.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i3821[i + 0]) );
  }
  i3814.cullingLayers = i3820
  i3814.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i3815[3], i3814.timeSettings)
  i3814.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i3815[4], i3814.physicsSettings)
  i3814.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i3815[5], i3814.physics2DSettings)
  i3814.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i3815[6], i3814.qualitySettings)
  i3814.enableRealtimeShadows = !!i3815[7]
  i3814.enableAutoInstancing = !!i3815[8]
  i3814.enableStaticBatching = !!i3815[9]
  i3814.enableDynamicBatching = !!i3815[10]
  i3814.lightmapEncodingQuality = i3815[11]
  i3814.desiredColorSpace = i3815[12]
  var i3823 = i3815[13]
  var i3822 = []
  for(var i = 0; i < i3823.length; i += 1) {
    i3822.push( i3823[i + 0] );
  }
  i3814.allTags = i3822
  return i3814
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i3826 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i3827 = data
  i3826.name = i3827[0]
  i3826.value = i3827[1]
  return i3826
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i3830 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i3831 = data
  i3830.id = i3831[0]
  i3830.name = i3831[1]
  i3830.value = i3831[2]
  return i3830
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i3834 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i3835 = data
  i3834.id = i3835[0]
  i3834.name = i3835[1]
  return i3834
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i3836 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i3837 = data
  i3836.fixedDeltaTime = i3837[0]
  i3836.maximumDeltaTime = i3837[1]
  i3836.timeScale = i3837[2]
  i3836.maximumParticleTimestep = i3837[3]
  return i3836
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i3838 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i3839 = data
  i3838.gravity = new pc.Vec3( i3839[0], i3839[1], i3839[2] )
  i3838.defaultSolverIterations = i3839[3]
  i3838.bounceThreshold = i3839[4]
  i3838.autoSyncTransforms = !!i3839[5]
  i3838.autoSimulation = !!i3839[6]
  var i3841 = i3839[7]
  var i3840 = []
  for(var i = 0; i < i3841.length; i += 1) {
    i3840.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i3841[i + 0]) );
  }
  i3838.collisionMatrix = i3840
  return i3838
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i3844 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i3845 = data
  i3844.enabled = !!i3845[0]
  i3844.layerId = i3845[1]
  i3844.otherLayerId = i3845[2]
  return i3844
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i3846 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i3847 = data
  request.r(i3847[0], i3847[1], 0, i3846, 'material')
  i3846.gravity = new pc.Vec2( i3847[2], i3847[3] )
  i3846.positionIterations = i3847[4]
  i3846.velocityIterations = i3847[5]
  i3846.velocityThreshold = i3847[6]
  i3846.maxLinearCorrection = i3847[7]
  i3846.maxAngularCorrection = i3847[8]
  i3846.maxTranslationSpeed = i3847[9]
  i3846.maxRotationSpeed = i3847[10]
  i3846.baumgarteScale = i3847[11]
  i3846.baumgarteTOIScale = i3847[12]
  i3846.timeToSleep = i3847[13]
  i3846.linearSleepTolerance = i3847[14]
  i3846.angularSleepTolerance = i3847[15]
  i3846.defaultContactOffset = i3847[16]
  i3846.autoSimulation = !!i3847[17]
  i3846.queriesHitTriggers = !!i3847[18]
  i3846.queriesStartInColliders = !!i3847[19]
  i3846.callbacksOnDisable = !!i3847[20]
  i3846.reuseCollisionCallbacks = !!i3847[21]
  i3846.autoSyncTransforms = !!i3847[22]
  var i3849 = i3847[23]
  var i3848 = []
  for(var i = 0; i < i3849.length; i += 1) {
    i3848.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i3849[i + 0]) );
  }
  i3846.collisionMatrix = i3848
  return i3846
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i3852 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i3853 = data
  i3852.enabled = !!i3853[0]
  i3852.layerId = i3853[1]
  i3852.otherLayerId = i3853[2]
  return i3852
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i3854 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i3855 = data
  var i3857 = i3855[0]
  var i3856 = []
  for(var i = 0; i < i3857.length; i += 1) {
    i3856.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i3857[i + 0]) );
  }
  i3854.qualityLevels = i3856
  var i3859 = i3855[1]
  var i3858 = []
  for(var i = 0; i < i3859.length; i += 1) {
    i3858.push( i3859[i + 0] );
  }
  i3854.names = i3858
  i3854.shadows = i3855[2]
  i3854.anisotropicFiltering = i3855[3]
  i3854.antiAliasing = i3855[4]
  i3854.lodBias = i3855[5]
  i3854.shadowCascades = i3855[6]
  i3854.shadowDistance = i3855[7]
  i3854.shadowmaskMode = i3855[8]
  i3854.shadowProjection = i3855[9]
  i3854.shadowResolution = i3855[10]
  i3854.softParticles = !!i3855[11]
  i3854.softVegetation = !!i3855[12]
  i3854.activeColorSpace = i3855[13]
  i3854.desiredColorSpace = i3855[14]
  i3854.masterTextureLimit = i3855[15]
  i3854.maxQueuedFrames = i3855[16]
  i3854.particleRaycastBudget = i3855[17]
  i3854.pixelLightCount = i3855[18]
  i3854.realtimeReflectionProbes = !!i3855[19]
  i3854.shadowCascade2Split = i3855[20]
  i3854.shadowCascade4Split = new pc.Vec3( i3855[21], i3855[22], i3855[23] )
  i3854.streamingMipmapsActive = !!i3855[24]
  i3854.vSyncCount = i3855[25]
  i3854.asyncUploadBufferSize = i3855[26]
  i3854.asyncUploadTimeSlice = i3855[27]
  i3854.billboardsFaceCameraPosition = !!i3855[28]
  i3854.shadowNearPlaneOffset = i3855[29]
  i3854.streamingMipmapsMemoryBudget = i3855[30]
  i3854.maximumLODLevel = i3855[31]
  i3854.streamingMipmapsAddAllCameras = !!i3855[32]
  i3854.streamingMipmapsMaxLevelReduction = i3855[33]
  i3854.streamingMipmapsRenderersPerFrame = i3855[34]
  i3854.resolutionScalingFixedDPIFactor = i3855[35]
  i3854.streamingMipmapsMaxFileIORequests = i3855[36]
  i3854.currentQualityLevel = i3855[37]
  return i3854
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i3864 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i3865 = data
  i3864.weight = i3865[0]
  i3864.vertices = i3865[1]
  i3864.normals = i3865[2]
  i3864.tangents = i3865[3]
  return i3864
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i3868 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i3869 = data
  i3868.mode = i3869[0]
  i3868.parameter = i3869[1]
  i3868.threshold = i3869[2]
  return i3868
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i3870 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i3871 = data
  i3870.m_XCoordinate = i3871[0]
  i3870.m_YCoordinate = i3871[1]
  return i3870
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i3872 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i3873 = data
  i3872.m_XPositionAdjustment = i3873[0]
  i3872.m_YPositionAdjustment = i3873[1]
  return i3872
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i3874 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i3875 = data
  i3874.xPlacement = i3875[0]
  i3874.yPlacement = i3875[1]
  i3874.xAdvance = i3875[2]
  i3874.yAdvance = i3875[3]
  return i3874
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2}}

Deserializers.requiredComponents = {"50":[51],"52":[51],"53":[51],"54":[51],"55":[51],"56":[51],"57":[58],"59":[2],"60":[61],"62":[61],"63":[61],"64":[61],"65":[61],"66":[61],"67":[68],"69":[68],"70":[68],"71":[68],"72":[68],"73":[68],"74":[68],"75":[68],"76":[68],"77":[68],"78":[68],"79":[68],"80":[68],"81":[2],"82":[26],"83":[84],"85":[84],"36":[25],"6":[2],"21":[86],"87":[68],"88":[89],"34":[86],"90":[14],"91":[2],"92":[93],"94":[42],"95":[36],"96":[25],"23":[26,25],"40":[25,39],"97":[25],"98":[39,25],"99":[26],"100":[39,25],"101":[25],"102":[103],"104":[103],"105":[103],"106":[25],"107":[25],"38":[36],"41":[39,25],"108":[25],"37":[36],"109":[25],"110":[25],"111":[25],"112":[25],"113":[25],"114":[25],"115":[25],"116":[25],"117":[25],"118":[39,25],"119":[25],"120":[25],"121":[25],"122":[25],"123":[39,25],"124":[25],"125":[42],"126":[42],"43":[42],"127":[42],"128":[2],"129":[2]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.MonoBehaviour","CameraFollow2D","AutoCameraFit","UnityEngine.Transform","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Mesh","UnityEngine.Material","UnityEngine.AudioSource","UnityEngine.AudioClip","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","MoveBetweenPoints","ScreenHeightPositionAnchor","UnityEngine.BoxCollider","ClickToStore","FavoritePlayerEndcard","TMPro.TextMeshPro","UnityEngine.GameObject","UnityEngine.RectTransform","UnityEngine.MeshRenderer","UnityEngine.EventSystems.UIBehaviour","TMPro.TMP_FontAsset","UnityEngine.MeshFilter","SpriteSizeAdapter","PlayerCardUIManager","Ply_SoundManager","FavoritePlayerManager","PlayerSlot","FavoritePlayerCard","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","TMPro.TextMeshProUGUI","UnityEngine.UI.Image","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.Font","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.Collider","BatStrikeController","SlotTrigger","UnityEngine.BoxCollider2D","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.InputSystem.UI.InputSystemUIInputModule","UnityEngine.InputSystem.UI.TrackedDeviceRaycaster","TMPro.TextContainer","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.38f1";

Deserializers.productName = "PLY_MiniSoccer";

Deserializers.lunaInitializationTime = "07/15/2026 03:53:54";

Deserializers.lunaDaysRunning = "36.2";

Deserializers.lunaVersion = "7.1.0";

Deserializers.lunaSHA = "cf93782349542fe0b84ad13951a26809f8419628";

Deserializers.creativeName = "PLY_V15";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1732";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4769";

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

Deserializers.buildID = "11494482-2833-4220-b57e-104cee20df78";

Deserializers.runtimeInitializeOnLoadInfos = [[["Unity","Services","Core","Internal","UnityServicesInitializer","EnableServicesInitializationAsync"],["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["DG","Tweening","DOTween","RuntimeOnLoad"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["Unity","Services","Core","Registration","CorePackageInitializer","InitializeOnLoad"],["Unity","Services","Core","Internal","TaskAsyncOperation","SetScheduler"],["Unity","Services","Core","Environments","Client","Scheduler","EngineStateHelper","Init"],["Unity","Services","Core","Environments","Client","Scheduler","ThreadHelper","Init"],["Ua2CoreInitializeCallback","Register"],["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["Unity","AI","Navigation","NavMeshLink","ClearTrackedList"],["Unity","AI","Navigation","NavMeshSurface","ClearNavMeshSurfaces"],["Unity","AI","Navigation","NavMeshModifierVolume","ClearNavMeshModifiers"],["Unity","AI","Navigation","NavMeshModifier","ClearNavMeshModifiers"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["Unity","Services","Core","Internal","UnityServicesInitializer","CreateStaticInstance"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[["Unity","Services","Core","Environments","Client","Http","JsonHelpers","RegisterTypesForAOT"]],[["Unity","Services","Core","UnityThreadUtils","CaptureUnityThreadInfo"],["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

