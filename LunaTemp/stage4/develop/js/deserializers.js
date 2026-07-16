var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i3268 = root || request.c( 'UnityEngine.JointSpring' )
  var i3269 = data
  i3268.spring = i3269[0]
  i3268.damper = i3269[1]
  i3268.targetPosition = i3269[2]
  return i3268
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i3270 = root || request.c( 'UnityEngine.JointMotor' )
  var i3271 = data
  i3270.m_TargetVelocity = i3271[0]
  i3270.m_Force = i3271[1]
  i3270.m_FreeSpin = i3271[2]
  return i3270
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i3272 = root || request.c( 'UnityEngine.JointLimits' )
  var i3273 = data
  i3272.m_Min = i3273[0]
  i3272.m_Max = i3273[1]
  i3272.m_Bounciness = i3273[2]
  i3272.m_BounceMinVelocity = i3273[3]
  i3272.m_ContactDistance = i3273[4]
  i3272.minBounce = i3273[5]
  i3272.maxBounce = i3273[6]
  return i3272
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i3274 = root || request.c( 'UnityEngine.JointDrive' )
  var i3275 = data
  i3274.m_PositionSpring = i3275[0]
  i3274.m_PositionDamper = i3275[1]
  i3274.m_MaximumForce = i3275[2]
  i3274.m_UseAcceleration = i3275[3]
  return i3274
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i3276 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i3277 = data
  i3276.m_Spring = i3277[0]
  i3276.m_Damper = i3277[1]
  return i3276
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i3278 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i3279 = data
  i3278.m_Limit = i3279[0]
  i3278.m_Bounciness = i3279[1]
  i3278.m_ContactDistance = i3279[2]
  return i3278
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i3280 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i3281 = data
  i3280.m_ExtremumSlip = i3281[0]
  i3280.m_ExtremumValue = i3281[1]
  i3280.m_AsymptoteSlip = i3281[2]
  i3280.m_AsymptoteValue = i3281[3]
  i3280.m_Stiffness = i3281[4]
  return i3280
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i3282 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i3283 = data
  i3282.m_LowerAngle = i3283[0]
  i3282.m_UpperAngle = i3283[1]
  return i3282
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i3284 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i3285 = data
  i3284.m_MotorSpeed = i3285[0]
  i3284.m_MaximumMotorTorque = i3285[1]
  return i3284
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i3286 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i3287 = data
  i3286.m_DampingRatio = i3287[0]
  i3286.m_Frequency = i3287[1]
  i3286.m_Angle = i3287[2]
  return i3286
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i3288 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i3289 = data
  i3288.m_LowerTranslation = i3289[0]
  i3288.m_UpperTranslation = i3289[1]
  return i3288
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i3290 = root || new pc.UnityMaterial()
  var i3291 = data
  i3290.name = i3291[0]
  request.r(i3291[1], i3291[2], 0, i3290, 'shader')
  i3290.renderQueue = i3291[3]
  i3290.enableInstancing = !!i3291[4]
  var i3293 = i3291[5]
  var i3292 = []
  for(var i = 0; i < i3293.length; i += 1) {
    i3292.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i3293[i + 0]) );
  }
  i3290.floatParameters = i3292
  var i3295 = i3291[6]
  var i3294 = []
  for(var i = 0; i < i3295.length; i += 1) {
    i3294.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i3295[i + 0]) );
  }
  i3290.colorParameters = i3294
  var i3297 = i3291[7]
  var i3296 = []
  for(var i = 0; i < i3297.length; i += 1) {
    i3296.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i3297[i + 0]) );
  }
  i3290.vectorParameters = i3296
  var i3299 = i3291[8]
  var i3298 = []
  for(var i = 0; i < i3299.length; i += 1) {
    i3298.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i3299[i + 0]) );
  }
  i3290.textureParameters = i3298
  var i3301 = i3291[9]
  var i3300 = []
  for(var i = 0; i < i3301.length; i += 1) {
    i3300.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i3301[i + 0]) );
  }
  i3290.materialFlags = i3300
  return i3290
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i3304 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i3305 = data
  i3304.name = i3305[0]
  i3304.value = i3305[1]
  return i3304
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i3308 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i3309 = data
  i3308.name = i3309[0]
  i3308.value = new pc.Color(i3309[1], i3309[2], i3309[3], i3309[4])
  return i3308
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i3312 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i3313 = data
  i3312.name = i3313[0]
  i3312.value = new pc.Vec4( i3313[1], i3313[2], i3313[3], i3313[4] )
  return i3312
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i3316 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i3317 = data
  i3316.name = i3317[0]
  request.r(i3317[1], i3317[2], 0, i3316, 'value')
  return i3316
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i3320 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i3321 = data
  i3320.name = i3321[0]
  i3320.enabled = !!i3321[1]
  return i3320
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i3322 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i3323 = data
  i3322.name = i3323[0]
  i3322.width = i3323[1]
  i3322.height = i3323[2]
  i3322.mipmapCount = i3323[3]
  i3322.anisoLevel = i3323[4]
  i3322.filterMode = i3323[5]
  i3322.hdr = !!i3323[6]
  i3322.format = i3323[7]
  i3322.wrapMode = i3323[8]
  i3322.alphaIsTransparency = !!i3323[9]
  i3322.alphaSource = i3323[10]
  i3322.graphicsFormat = i3323[11]
  i3322.sRGBTexture = !!i3323[12]
  i3322.desiredColorSpace = i3323[13]
  i3322.wrapU = i3323[14]
  i3322.wrapV = i3323[15]
  return i3322
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i3324 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i3325 = data
  i3324.name = i3325[0]
  i3324.halfPrecision = !!i3325[1]
  i3324.useSimplification = !!i3325[2]
  i3324.useUInt32IndexFormat = !!i3325[3]
  i3324.vertexCount = i3325[4]
  i3324.aabb = i3325[5]
  var i3327 = i3325[6]
  var i3326 = []
  for(var i = 0; i < i3327.length; i += 1) {
    i3326.push( !!i3327[i + 0] );
  }
  i3324.streams = i3326
  i3324.vertices = i3325[7]
  var i3329 = i3325[8]
  var i3328 = []
  for(var i = 0; i < i3329.length; i += 1) {
    i3328.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i3329[i + 0]) );
  }
  i3324.subMeshes = i3328
  var i3331 = i3325[9]
  var i3330 = []
  for(var i = 0; i < i3331.length; i += 16) {
    i3330.push( new pc.Mat4().setData(i3331[i + 0], i3331[i + 1], i3331[i + 2], i3331[i + 3],  i3331[i + 4], i3331[i + 5], i3331[i + 6], i3331[i + 7],  i3331[i + 8], i3331[i + 9], i3331[i + 10], i3331[i + 11],  i3331[i + 12], i3331[i + 13], i3331[i + 14], i3331[i + 15]) );
  }
  i3324.bindposes = i3330
  var i3333 = i3325[10]
  var i3332 = []
  for(var i = 0; i < i3333.length; i += 1) {
    i3332.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i3333[i + 0]) );
  }
  i3324.blendShapes = i3332
  return i3324
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i3338 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i3339 = data
  i3338.triangles = i3339[0]
  return i3338
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i3344 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i3345 = data
  i3344.name = i3345[0]
  var i3347 = i3345[1]
  var i3346 = []
  for(var i = 0; i < i3347.length; i += 1) {
    i3346.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i3347[i + 0]) );
  }
  i3344.frames = i3346
  return i3344
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i3348 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i3349 = data
  i3348.name = i3349[0]
  i3348.index = i3349[1]
  i3348.startup = !!i3349[2]
  return i3348
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i3350 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i3351 = data
  i3350.aspect = i3351[0]
  i3350.orthographic = !!i3351[1]
  i3350.orthographicSize = i3351[2]
  i3350.backgroundColor = new pc.Color(i3351[3], i3351[4], i3351[5], i3351[6])
  i3350.nearClipPlane = i3351[7]
  i3350.farClipPlane = i3351[8]
  i3350.fieldOfView = i3351[9]
  i3350.depth = i3351[10]
  i3350.clearFlags = i3351[11]
  i3350.cullingMask = i3351[12]
  i3350.rect = i3351[13]
  request.r(i3351[14], i3351[15], 0, i3350, 'targetTexture')
  i3350.usePhysicalProperties = !!i3351[16]
  i3350.focalLength = i3351[17]
  i3350.sensorSize = new pc.Vec2( i3351[18], i3351[19] )
  i3350.lensShift = new pc.Vec2( i3351[20], i3351[21] )
  i3350.gateFit = i3351[22]
  i3350.commandBufferCount = i3351[23]
  i3350.cameraType = i3351[24]
  i3350.enabled = !!i3351[25]
  return i3350
}

Deserializers["CameraFollow2D"] = function (request, data, root) {
  var i3352 = root || request.c( 'CameraFollow2D' )
  var i3353 = data
  request.r(i3353[0], i3353[1], 0, i3352, 'target')
  i3352.smoothSpeed = i3353[2]
  i3352.offset = new pc.Vec3( i3353[3], i3353[4], i3353[5] )
  i3352.followY = !!i3353[6]
  return i3352
}

Deserializers["AutoCameraFit"] = function (request, data, root) {
  var i3354 = root || request.c( 'AutoCameraFit' )
  var i3355 = data
  request.r(i3355[0], i3355[1], 0, i3354, 'tallScreenObject')
  i3354.tallScreenRatioThreshold = i3355[2]
  i3354.tallScreenYOffset = i3355[3]
  request.r(i3355[4], i3355[5], 0, i3354, 'canvasBtn')
  request.r(i3355[6], i3355[7], 0, i3354, 'targetArea')
  i3354.paddingLandscape = i3355[8]
  i3354.paddingPortrait = i3355[9]
  i3354.extraPaddingSmallScreen = i3355[10]
  i3354.smallScreenThreshold = i3355[11]
  i3354.autoUpdateOnResize = !!i3355[12]
  i3354.adjustInEditMode = !!i3355[13]
  return i3354
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i3356 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i3357 = data
  i3356.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i3357[0], i3356.main)
  i3356.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i3357[1], i3356.colorBySpeed)
  i3356.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i3357[2], i3356.colorOverLifetime)
  i3356.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i3357[3], i3356.emission)
  i3356.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i3357[4], i3356.rotationBySpeed)
  i3356.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i3357[5], i3356.rotationOverLifetime)
  i3356.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i3357[6], i3356.shape)
  i3356.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i3357[7], i3356.sizeBySpeed)
  i3356.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i3357[8], i3356.sizeOverLifetime)
  i3356.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i3357[9], i3356.textureSheetAnimation)
  i3356.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i3357[10], i3356.velocityOverLifetime)
  i3356.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i3357[11], i3356.noise)
  i3356.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i3357[12], i3356.inheritVelocity)
  i3356.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i3357[13], i3356.forceOverLifetime)
  i3356.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i3357[14], i3356.limitVelocityOverLifetime)
  i3356.useAutoRandomSeed = !!i3357[15]
  i3356.randomSeed = i3357[16]
  return i3356
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i3358 = root || new pc.ParticleSystemMain()
  var i3359 = data
  i3358.duration = i3359[0]
  i3358.loop = !!i3359[1]
  i3358.prewarm = !!i3359[2]
  i3358.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3359[3], i3358.startDelay)
  i3358.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3359[4], i3358.startLifetime)
  i3358.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3359[5], i3358.startSpeed)
  i3358.startSize3D = !!i3359[6]
  i3358.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3359[7], i3358.startSizeX)
  i3358.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3359[8], i3358.startSizeY)
  i3358.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3359[9], i3358.startSizeZ)
  i3358.startRotation3D = !!i3359[10]
  i3358.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3359[11], i3358.startRotationX)
  i3358.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3359[12], i3358.startRotationY)
  i3358.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3359[13], i3358.startRotationZ)
  i3358.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i3359[14], i3358.startColor)
  i3358.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3359[15], i3358.gravityModifier)
  i3358.simulationSpace = i3359[16]
  request.r(i3359[17], i3359[18], 0, i3358, 'customSimulationSpace')
  i3358.simulationSpeed = i3359[19]
  i3358.useUnscaledTime = !!i3359[20]
  i3358.scalingMode = i3359[21]
  i3358.playOnAwake = !!i3359[22]
  i3358.maxParticles = i3359[23]
  i3358.emitterVelocityMode = i3359[24]
  i3358.stopAction = i3359[25]
  return i3358
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i3360 = root || new pc.MinMaxCurve()
  var i3361 = data
  i3360.mode = i3361[0]
  i3360.curveMin = new pc.AnimationCurve( { keys_flow: i3361[1] } )
  i3360.curveMax = new pc.AnimationCurve( { keys_flow: i3361[2] } )
  i3360.curveMultiplier = i3361[3]
  i3360.constantMin = i3361[4]
  i3360.constantMax = i3361[5]
  return i3360
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i3362 = root || new pc.MinMaxGradient()
  var i3363 = data
  i3362.mode = i3363[0]
  i3362.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i3363[1], i3362.gradientMin)
  i3362.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i3363[2], i3362.gradientMax)
  i3362.colorMin = new pc.Color(i3363[3], i3363[4], i3363[5], i3363[6])
  i3362.colorMax = new pc.Color(i3363[7], i3363[8], i3363[9], i3363[10])
  return i3362
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i3364 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i3365 = data
  i3364.mode = i3365[0]
  var i3367 = i3365[1]
  var i3366 = []
  for(var i = 0; i < i3367.length; i += 1) {
    i3366.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i3367[i + 0]) );
  }
  i3364.colorKeys = i3366
  var i3369 = i3365[2]
  var i3368 = []
  for(var i = 0; i < i3369.length; i += 1) {
    i3368.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i3369[i + 0]) );
  }
  i3364.alphaKeys = i3368
  return i3364
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i3370 = root || new pc.ParticleSystemColorBySpeed()
  var i3371 = data
  i3370.enabled = !!i3371[0]
  i3370.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i3371[1], i3370.color)
  i3370.range = new pc.Vec2( i3371[2], i3371[3] )
  return i3370
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i3374 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i3375 = data
  i3374.color = new pc.Color(i3375[0], i3375[1], i3375[2], i3375[3])
  i3374.time = i3375[4]
  return i3374
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i3378 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i3379 = data
  i3378.alpha = i3379[0]
  i3378.time = i3379[1]
  return i3378
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i3380 = root || new pc.ParticleSystemColorOverLifetime()
  var i3381 = data
  i3380.enabled = !!i3381[0]
  i3380.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i3381[1], i3380.color)
  return i3380
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i3382 = root || new pc.ParticleSystemEmitter()
  var i3383 = data
  i3382.enabled = !!i3383[0]
  i3382.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3383[1], i3382.rateOverTime)
  i3382.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3383[2], i3382.rateOverDistance)
  var i3385 = i3383[3]
  var i3384 = []
  for(var i = 0; i < i3385.length; i += 1) {
    i3384.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i3385[i + 0]) );
  }
  i3382.bursts = i3384
  return i3382
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i3388 = root || new pc.ParticleSystemBurst()
  var i3389 = data
  i3388.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3389[0], i3388.count)
  i3388.cycleCount = i3389[1]
  i3388.minCount = i3389[2]
  i3388.maxCount = i3389[3]
  i3388.repeatInterval = i3389[4]
  i3388.time = i3389[5]
  return i3388
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i3390 = root || new pc.ParticleSystemRotationBySpeed()
  var i3391 = data
  i3390.enabled = !!i3391[0]
  i3390.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3391[1], i3390.x)
  i3390.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3391[2], i3390.y)
  i3390.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3391[3], i3390.z)
  i3390.separateAxes = !!i3391[4]
  i3390.range = new pc.Vec2( i3391[5], i3391[6] )
  return i3390
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i3392 = root || new pc.ParticleSystemRotationOverLifetime()
  var i3393 = data
  i3392.enabled = !!i3393[0]
  i3392.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3393[1], i3392.x)
  i3392.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3393[2], i3392.y)
  i3392.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3393[3], i3392.z)
  i3392.separateAxes = !!i3393[4]
  return i3392
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i3394 = root || new pc.ParticleSystemShape()
  var i3395 = data
  i3394.enabled = !!i3395[0]
  i3394.shapeType = i3395[1]
  i3394.randomDirectionAmount = i3395[2]
  i3394.sphericalDirectionAmount = i3395[3]
  i3394.randomPositionAmount = i3395[4]
  i3394.alignToDirection = !!i3395[5]
  i3394.radius = i3395[6]
  i3394.radiusMode = i3395[7]
  i3394.radiusSpread = i3395[8]
  i3394.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3395[9], i3394.radiusSpeed)
  i3394.radiusThickness = i3395[10]
  i3394.angle = i3395[11]
  i3394.length = i3395[12]
  i3394.boxThickness = new pc.Vec3( i3395[13], i3395[14], i3395[15] )
  i3394.meshShapeType = i3395[16]
  request.r(i3395[17], i3395[18], 0, i3394, 'mesh')
  request.r(i3395[19], i3395[20], 0, i3394, 'meshRenderer')
  request.r(i3395[21], i3395[22], 0, i3394, 'skinnedMeshRenderer')
  i3394.useMeshMaterialIndex = !!i3395[23]
  i3394.meshMaterialIndex = i3395[24]
  i3394.useMeshColors = !!i3395[25]
  i3394.normalOffset = i3395[26]
  i3394.arc = i3395[27]
  i3394.arcMode = i3395[28]
  i3394.arcSpread = i3395[29]
  i3394.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3395[30], i3394.arcSpeed)
  i3394.donutRadius = i3395[31]
  i3394.position = new pc.Vec3( i3395[32], i3395[33], i3395[34] )
  i3394.rotation = new pc.Vec3( i3395[35], i3395[36], i3395[37] )
  i3394.scale = new pc.Vec3( i3395[38], i3395[39], i3395[40] )
  return i3394
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i3396 = root || new pc.ParticleSystemSizeBySpeed()
  var i3397 = data
  i3396.enabled = !!i3397[0]
  i3396.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3397[1], i3396.x)
  i3396.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3397[2], i3396.y)
  i3396.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3397[3], i3396.z)
  i3396.separateAxes = !!i3397[4]
  i3396.range = new pc.Vec2( i3397[5], i3397[6] )
  return i3396
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i3398 = root || new pc.ParticleSystemSizeOverLifetime()
  var i3399 = data
  i3398.enabled = !!i3399[0]
  i3398.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3399[1], i3398.x)
  i3398.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3399[2], i3398.y)
  i3398.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3399[3], i3398.z)
  i3398.separateAxes = !!i3399[4]
  return i3398
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i3400 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i3401 = data
  i3400.enabled = !!i3401[0]
  i3400.mode = i3401[1]
  i3400.animation = i3401[2]
  i3400.numTilesX = i3401[3]
  i3400.numTilesY = i3401[4]
  i3400.useRandomRow = !!i3401[5]
  i3400.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3401[6], i3400.frameOverTime)
  i3400.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3401[7], i3400.startFrame)
  i3400.cycleCount = i3401[8]
  i3400.rowIndex = i3401[9]
  i3400.flipU = i3401[10]
  i3400.flipV = i3401[11]
  i3400.spriteCount = i3401[12]
  var i3403 = i3401[13]
  var i3402 = []
  for(var i = 0; i < i3403.length; i += 2) {
  request.r(i3403[i + 0], i3403[i + 1], 2, i3402, '')
  }
  i3400.sprites = i3402
  return i3400
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i3406 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i3407 = data
  i3406.enabled = !!i3407[0]
  i3406.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3407[1], i3406.x)
  i3406.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3407[2], i3406.y)
  i3406.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3407[3], i3406.z)
  i3406.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3407[4], i3406.radial)
  i3406.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3407[5], i3406.speedModifier)
  i3406.space = i3407[6]
  i3406.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3407[7], i3406.orbitalX)
  i3406.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3407[8], i3406.orbitalY)
  i3406.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3407[9], i3406.orbitalZ)
  i3406.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3407[10], i3406.orbitalOffsetX)
  i3406.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3407[11], i3406.orbitalOffsetY)
  i3406.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3407[12], i3406.orbitalOffsetZ)
  return i3406
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i3408 = root || new pc.ParticleSystemNoise()
  var i3409 = data
  i3408.enabled = !!i3409[0]
  i3408.separateAxes = !!i3409[1]
  i3408.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3409[2], i3408.strengthX)
  i3408.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3409[3], i3408.strengthY)
  i3408.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3409[4], i3408.strengthZ)
  i3408.frequency = i3409[5]
  i3408.damping = !!i3409[6]
  i3408.octaveCount = i3409[7]
  i3408.octaveMultiplier = i3409[8]
  i3408.octaveScale = i3409[9]
  i3408.quality = i3409[10]
  i3408.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3409[11], i3408.scrollSpeed)
  i3408.scrollSpeedMultiplier = i3409[12]
  i3408.remapEnabled = !!i3409[13]
  i3408.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3409[14], i3408.remapX)
  i3408.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3409[15], i3408.remapY)
  i3408.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3409[16], i3408.remapZ)
  i3408.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3409[17], i3408.positionAmount)
  i3408.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3409[18], i3408.rotationAmount)
  i3408.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3409[19], i3408.sizeAmount)
  return i3408
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i3410 = root || new pc.ParticleSystemInheritVelocity()
  var i3411 = data
  i3410.enabled = !!i3411[0]
  i3410.mode = i3411[1]
  i3410.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3411[2], i3410.curve)
  return i3410
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i3412 = root || new pc.ParticleSystemForceOverLifetime()
  var i3413 = data
  i3412.enabled = !!i3413[0]
  i3412.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3413[1], i3412.x)
  i3412.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3413[2], i3412.y)
  i3412.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3413[3], i3412.z)
  i3412.space = i3413[4]
  i3412.randomized = !!i3413[5]
  return i3412
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i3414 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i3415 = data
  i3414.enabled = !!i3415[0]
  i3414.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3415[1], i3414.limit)
  i3414.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3415[2], i3414.limitX)
  i3414.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3415[3], i3414.limitY)
  i3414.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3415[4], i3414.limitZ)
  i3414.dampen = i3415[5]
  i3414.separateAxes = !!i3415[6]
  i3414.space = i3415[7]
  i3414.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3415[8], i3414.drag)
  i3414.multiplyDragByParticleSize = !!i3415[9]
  i3414.multiplyDragByParticleVelocity = !!i3415[10]
  return i3414
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i3416 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i3417 = data
  request.r(i3417[0], i3417[1], 0, i3416, 'mesh')
  i3416.meshCount = i3417[2]
  i3416.activeVertexStreamsCount = i3417[3]
  i3416.alignment = i3417[4]
  i3416.renderMode = i3417[5]
  i3416.sortMode = i3417[6]
  i3416.lengthScale = i3417[7]
  i3416.velocityScale = i3417[8]
  i3416.cameraVelocityScale = i3417[9]
  i3416.normalDirection = i3417[10]
  i3416.sortingFudge = i3417[11]
  i3416.minParticleSize = i3417[12]
  i3416.maxParticleSize = i3417[13]
  i3416.pivot = new pc.Vec3( i3417[14], i3417[15], i3417[16] )
  request.r(i3417[17], i3417[18], 0, i3416, 'trailMaterial')
  i3416.applyActiveColorSpace = !!i3417[19]
  i3416.enabled = !!i3417[20]
  request.r(i3417[21], i3417[22], 0, i3416, 'sharedMaterial')
  var i3419 = i3417[23]
  var i3418 = []
  for(var i = 0; i < i3419.length; i += 2) {
  request.r(i3419[i + 0], i3419[i + 1], 2, i3418, '')
  }
  i3416.sharedMaterials = i3418
  i3416.receiveShadows = !!i3417[24]
  i3416.shadowCastingMode = i3417[25]
  i3416.sortingLayerID = i3417[26]
  i3416.sortingOrder = i3417[27]
  i3416.lightmapIndex = i3417[28]
  i3416.lightmapSceneIndex = i3417[29]
  i3416.lightmapScaleOffset = new pc.Vec4( i3417[30], i3417[31], i3417[32], i3417[33] )
  i3416.lightProbeUsage = i3417[34]
  i3416.reflectionProbeUsage = i3417[35]
  return i3416
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i3422 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i3423 = data
  i3422.name = i3423[0]
  i3422.tagId = i3423[1]
  i3422.enabled = !!i3423[2]
  i3422.isStatic = !!i3423[3]
  i3422.layer = i3423[4]
  return i3422
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i3424 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i3425 = data
  i3424.color = new pc.Color(i3425[0], i3425[1], i3425[2], i3425[3])
  request.r(i3425[4], i3425[5], 0, i3424, 'sprite')
  i3424.flipX = !!i3425[6]
  i3424.flipY = !!i3425[7]
  i3424.drawMode = i3425[8]
  i3424.size = new pc.Vec2( i3425[9], i3425[10] )
  i3424.tileMode = i3425[11]
  i3424.adaptiveModeThreshold = i3425[12]
  i3424.maskInteraction = i3425[13]
  i3424.spriteSortPoint = i3425[14]
  i3424.enabled = !!i3425[15]
  request.r(i3425[16], i3425[17], 0, i3424, 'sharedMaterial')
  var i3427 = i3425[18]
  var i3426 = []
  for(var i = 0; i < i3427.length; i += 2) {
  request.r(i3427[i + 0], i3427[i + 1], 2, i3426, '')
  }
  i3424.sharedMaterials = i3426
  i3424.receiveShadows = !!i3425[19]
  i3424.shadowCastingMode = i3425[20]
  i3424.sortingLayerID = i3425[21]
  i3424.sortingOrder = i3425[22]
  i3424.lightmapIndex = i3425[23]
  i3424.lightmapSceneIndex = i3425[24]
  i3424.lightmapScaleOffset = new pc.Vec4( i3425[25], i3425[26], i3425[27], i3425[28] )
  i3424.lightProbeUsage = i3425[29]
  i3424.reflectionProbeUsage = i3425[30]
  return i3424
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i3428 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i3429 = data
  request.r(i3429[0], i3429[1], 0, i3428, 'animatorController')
  request.r(i3429[2], i3429[3], 0, i3428, 'avatar')
  i3428.updateMode = i3429[4]
  i3428.hasTransformHierarchy = !!i3429[5]
  i3428.applyRootMotion = !!i3429[6]
  var i3431 = i3429[7]
  var i3430 = []
  for(var i = 0; i < i3431.length; i += 2) {
  request.r(i3431[i + 0], i3431[i + 1], 2, i3430, '')
  }
  i3428.humanBones = i3430
  i3428.enabled = !!i3429[8]
  return i3428
}

Deserializers["MoveBetweenPoints"] = function (request, data, root) {
  var i3434 = root || request.c( 'MoveBetweenPoints' )
  var i3435 = data
  request.r(i3435[0], i3435[1], 0, i3434, 'pointA')
  request.r(i3435[2], i3435[3], 0, i3434, 'pointB')
  i3434.duration = i3435[4]
  return i3434
}

Deserializers["ScreenHeightPositionAnchor"] = function (request, data, root) {
  var i3436 = root || request.c( 'ScreenHeightPositionAnchor' )
  var i3437 = data
  request.r(i3437[0], i3437[1], 0, i3436, 'anchorPoint')
  request.r(i3437[2], i3437[3], 0, i3436, 'targetCamera')
  i3436.viewportYRatio = i3437[4]
  i3436.alignOnStart = !!i3437[5]
  i3436.alignOnEnable = !!i3437[6]
  i3436.realignOnScreenSizeChanged = !!i3437[7]
  i3436.drawGizmos = !!i3437[8]
  i3436.targetLineColor = new pc.Color(i3437[9], i3437[10], i3437[11], i3437[12])
  i3436.anchorColor = new pc.Color(i3437[13], i3437[14], i3437[15], i3437[16])
  return i3436
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i3438 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i3439 = data
  i3438.center = new pc.Vec3( i3439[0], i3439[1], i3439[2] )
  i3438.size = new pc.Vec3( i3439[3], i3439[4], i3439[5] )
  i3438.enabled = !!i3439[6]
  i3438.isTrigger = !!i3439[7]
  request.r(i3439[8], i3439[9], 0, i3438, 'material')
  return i3438
}

Deserializers["ClickToStore"] = function (request, data, root) {
  var i3440 = root || request.c( 'ClickToStore' )
  var i3441 = data
  return i3440
}

Deserializers["FavoritePlayerEndcard"] = function (request, data, root) {
  var i3442 = root || request.c( 'FavoritePlayerEndcard' )
  var i3443 = data
  request.r(i3443[0], i3443[1], 0, i3442, 'fullBodyRenderer')
  request.r(i3443[2], i3443[3], 0, i3442, 'nameText')
  request.r(i3443[4], i3443[5], 0, i3442, 'endcardPanel')
  return i3442
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i3444 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i3445 = data
  i3444.pivot = new pc.Vec2( i3445[0], i3445[1] )
  i3444.anchorMin = new pc.Vec2( i3445[2], i3445[3] )
  i3444.anchorMax = new pc.Vec2( i3445[4], i3445[5] )
  i3444.sizeDelta = new pc.Vec2( i3445[6], i3445[7] )
  i3444.anchoredPosition3D = new pc.Vec3( i3445[8], i3445[9], i3445[10] )
  i3444.rotation = new pc.Quat(i3445[11], i3445[12], i3445[13], i3445[14])
  i3444.scale = new pc.Vec3( i3445[15], i3445[16], i3445[17] )
  return i3444
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i3446 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i3447 = data
  request.r(i3447[0], i3447[1], 0, i3446, 'additionalVertexStreams')
  i3446.enabled = !!i3447[2]
  request.r(i3447[3], i3447[4], 0, i3446, 'sharedMaterial')
  var i3449 = i3447[5]
  var i3448 = []
  for(var i = 0; i < i3449.length; i += 2) {
  request.r(i3449[i + 0], i3449[i + 1], 2, i3448, '')
  }
  i3446.sharedMaterials = i3448
  i3446.receiveShadows = !!i3447[6]
  i3446.shadowCastingMode = i3447[7]
  i3446.sortingLayerID = i3447[8]
  i3446.sortingOrder = i3447[9]
  i3446.lightmapIndex = i3447[10]
  i3446.lightmapSceneIndex = i3447[11]
  i3446.lightmapScaleOffset = new pc.Vec4( i3447[12], i3447[13], i3447[14], i3447[15] )
  i3446.lightProbeUsage = i3447[16]
  i3446.reflectionProbeUsage = i3447[17]
  return i3446
}

Deserializers["TMPro.TextMeshPro"] = function (request, data, root) {
  var i3450 = root || request.c( 'TMPro.TextMeshPro' )
  var i3451 = data
  i3450._SortingLayer = i3451[0]
  i3450._SortingLayerID = i3451[1]
  i3450._SortingOrder = i3451[2]
  i3450.m_hasFontAssetChanged = !!i3451[3]
  request.r(i3451[4], i3451[5], 0, i3450, 'm_renderer')
  i3450.m_maskType = i3451[6]
  i3450.m_text = i3451[7]
  i3450.m_isRightToLeft = !!i3451[8]
  request.r(i3451[9], i3451[10], 0, i3450, 'm_fontAsset')
  request.r(i3451[11], i3451[12], 0, i3450, 'm_sharedMaterial')
  var i3453 = i3451[13]
  var i3452 = []
  for(var i = 0; i < i3453.length; i += 2) {
  request.r(i3453[i + 0], i3453[i + 1], 2, i3452, '')
  }
  i3450.m_fontSharedMaterials = i3452
  request.r(i3451[14], i3451[15], 0, i3450, 'm_fontMaterial')
  var i3455 = i3451[16]
  var i3454 = []
  for(var i = 0; i < i3455.length; i += 2) {
  request.r(i3455[i + 0], i3455[i + 1], 2, i3454, '')
  }
  i3450.m_fontMaterials = i3454
  i3450.m_fontColor32 = UnityEngine.Color32.ConstructColor(i3451[17], i3451[18], i3451[19], i3451[20])
  i3450.m_fontColor = new pc.Color(i3451[21], i3451[22], i3451[23], i3451[24])
  i3450.m_enableVertexGradient = !!i3451[25]
  i3450.m_colorMode = i3451[26]
  i3450.m_fontColorGradient = request.d('TMPro.VertexGradient', i3451[27], i3450.m_fontColorGradient)
  request.r(i3451[28], i3451[29], 0, i3450, 'm_fontColorGradientPreset')
  request.r(i3451[30], i3451[31], 0, i3450, 'm_spriteAsset')
  i3450.m_tintAllSprites = !!i3451[32]
  request.r(i3451[33], i3451[34], 0, i3450, 'm_StyleSheet')
  i3450.m_TextStyleHashCode = i3451[35]
  i3450.m_overrideHtmlColors = !!i3451[36]
  i3450.m_faceColor = UnityEngine.Color32.ConstructColor(i3451[37], i3451[38], i3451[39], i3451[40])
  i3450.m_fontSize = i3451[41]
  i3450.m_fontSizeBase = i3451[42]
  i3450.m_fontWeight = i3451[43]
  i3450.m_enableAutoSizing = !!i3451[44]
  i3450.m_fontSizeMin = i3451[45]
  i3450.m_fontSizeMax = i3451[46]
  i3450.m_fontStyle = i3451[47]
  i3450.m_HorizontalAlignment = i3451[48]
  i3450.m_VerticalAlignment = i3451[49]
  i3450.m_textAlignment = i3451[50]
  i3450.m_characterSpacing = i3451[51]
  i3450.m_wordSpacing = i3451[52]
  i3450.m_lineSpacing = i3451[53]
  i3450.m_lineSpacingMax = i3451[54]
  i3450.m_paragraphSpacing = i3451[55]
  i3450.m_charWidthMaxAdj = i3451[56]
  i3450.m_TextWrappingMode = i3451[57]
  i3450.m_wordWrappingRatios = i3451[58]
  i3450.m_overflowMode = i3451[59]
  request.r(i3451[60], i3451[61], 0, i3450, 'm_linkedTextComponent')
  request.r(i3451[62], i3451[63], 0, i3450, 'parentLinkedComponent')
  i3450.m_enableKerning = !!i3451[64]
  var i3457 = i3451[65]
  var i3456 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i3457.length; i += 1) {
    i3456.add(i3457[i + 0]);
  }
  i3450.m_ActiveFontFeatures = i3456
  i3450.m_enableExtraPadding = !!i3451[66]
  i3450.checkPaddingRequired = !!i3451[67]
  i3450.m_isRichText = !!i3451[68]
  i3450.m_parseCtrlCharacters = !!i3451[69]
  i3450.m_isOrthographic = !!i3451[70]
  i3450.m_isCullingEnabled = !!i3451[71]
  i3450.m_horizontalMapping = i3451[72]
  i3450.m_verticalMapping = i3451[73]
  i3450.m_uvLineOffset = i3451[74]
  i3450.m_geometrySortingOrder = i3451[75]
  i3450.m_IsTextObjectScaleStatic = !!i3451[76]
  i3450.m_VertexBufferAutoSizeReduction = !!i3451[77]
  i3450.m_useMaxVisibleDescender = !!i3451[78]
  i3450.m_pageToDisplay = i3451[79]
  i3450.m_margin = new pc.Vec4( i3451[80], i3451[81], i3451[82], i3451[83] )
  i3450.m_isUsingLegacyAnimationComponent = !!i3451[84]
  i3450.m_isVolumetricText = !!i3451[85]
  request.r(i3451[86], i3451[87], 0, i3450, 'm_Material')
  i3450.m_EmojiFallbackSupport = !!i3451[88]
  i3450.m_Maskable = !!i3451[89]
  i3450.m_Color = new pc.Color(i3451[90], i3451[91], i3451[92], i3451[93])
  i3450.m_RaycastTarget = !!i3451[94]
  i3450.m_RaycastPadding = new pc.Vec4( i3451[95], i3451[96], i3451[97], i3451[98] )
  return i3450
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i3458 = root || request.c( 'TMPro.VertexGradient' )
  var i3459 = data
  i3458.topLeft = new pc.Color(i3459[0], i3459[1], i3459[2], i3459[3])
  i3458.topRight = new pc.Color(i3459[4], i3459[5], i3459[6], i3459[7])
  i3458.bottomLeft = new pc.Color(i3459[8], i3459[9], i3459[10], i3459[11])
  i3458.bottomRight = new pc.Color(i3459[12], i3459[13], i3459[14], i3459[15])
  return i3458
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i3462 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i3463 = data
  request.r(i3463[0], i3463[1], 0, i3462, 'sharedMesh')
  return i3462
}

Deserializers["PlayerCardUIManager"] = function (request, data, root) {
  var i3464 = root || request.c( 'PlayerCardUIManager' )
  var i3465 = data
  request.r(i3465[0], i3465[1], 0, i3464, 'cardPanel')
  var i3467 = i3465[2]
  var i3466 = []
  for(var i = 0; i < i3467.length; i += 2) {
  request.r(i3467[i + 0], i3467[i + 1], 2, i3466, '')
  }
  i3464.extraObjectsToActivate = i3466
  i3464.waitTime = i3465[3]
  var i3469 = i3465[4]
  var i3468 = []
  for(var i = 0; i < i3469.length; i += 2) {
  request.r(i3469[i + 0], i3469[i + 1], 2, i3468, '')
  }
  i3464.objectsToTurnOnAfterWait = i3468
  var i3471 = i3465[5]
  var i3470 = []
  for(var i = 0; i < i3471.length; i += 2) {
  request.r(i3471[i + 0], i3471[i + 1], 2, i3470, '')
  }
  i3464.objectsToTurnOffAfterWait = i3470
  request.r(i3465[6], i3465[7], 0, i3464, 'nationalityText')
  request.r(i3465[8], i3465[9], 0, i3464, 'playerImage')
  request.r(i3465[10], i3465[11], 0, i3464, 'flagImage')
  return i3464
}

Deserializers["Ply_SoundManager"] = function (request, data, root) {
  var i3474 = root || request.c( 'Ply_SoundManager' )
  var i3475 = data
  i3474.fxAudio = request.d('FxAudio', i3475[0], i3474.fxAudio)
  request.r(i3475[1], i3475[2], 0, i3474, 'bgm1')
  return i3474
}

Deserializers["FxAudio"] = function (request, data, root) {
  var i3476 = root || request.c( 'FxAudio' )
  var i3477 = data
  i3476.ClickBox = request.d('SoundData', i3477[0], i3476.ClickBox)
  i3476.Happy = request.d('SoundData', i3477[1], i3476.Happy)
  i3476.Wrong = request.d('SoundData', i3477[2], i3476.Wrong)
  i3476.Spray = request.d('SoundData', i3477[3], i3476.Spray)
  i3476.Brush = request.d('SoundData', i3477[4], i3476.Brush)
  return i3476
}

Deserializers["SoundData"] = function (request, data, root) {
  var i3478 = root || request.c( 'SoundData' )
  var i3479 = data
  request.r(i3479[0], i3479[1], 0, i3478, 'clip')
  i3478.repeatCount = i3479[2]
  return i3478
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i3480 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i3481 = data
  request.r(i3481[0], i3481[1], 0, i3480, 'clip')
  request.r(i3481[2], i3481[3], 0, i3480, 'outputAudioMixerGroup')
  i3480.playOnAwake = !!i3481[4]
  i3480.loop = !!i3481[5]
  i3480.time = i3481[6]
  i3480.volume = i3481[7]
  i3480.pitch = i3481[8]
  i3480.enabled = !!i3481[9]
  return i3480
}

Deserializers["FavoritePlayerManager"] = function (request, data, root) {
  var i3482 = root || request.c( 'FavoritePlayerManager' )
  var i3483 = data
  i3482.slotLayerMask = UnityEngine.LayerMask.FromIntegerValue( i3483[0] )
  request.r(i3483[1], i3483[2], 0, i3482, 'slotA')
  request.r(i3483[3], i3483[4], 0, i3482, 'slotB')
  request.r(i3483[5], i3483[6], 0, i3482, 'audioSource')
  request.r(i3483[7], i3483[8], 0, i3482, 'orAudio')
  var i3485 = i3483[9]
  var i3484 = new (System.Collections.Generic.List$1(Bridge.ns('FavoritePlayerCard')))
  for(var i = 0; i < i3485.length; i += 2) {
  request.r(i3485[i + 0], i3485[i + 1], 1, i3484, '')
  }
  i3482.playerList = i3484
  request.r(i3483[10], i3483[11], 0, i3482, 'endcardUI')
  request.r(i3483[12], i3483[13], 0, i3482, 'discardTarget')
  i3482.moveDuration = i3483[14]
  i3482.arcHeight = i3483[15]
  i3482.scaleUpSize = i3483[16]
  i3482.scaleUpDuration = i3483[17]
  i3482.scaleDownDuration = i3483[18]
  i3482.appearStartScale = i3483[19]
  i3482.appearMaxScale = i3483[20]
  i3482.appearUpDuration = i3483[21]
  i3482.appearDownDuration = i3483[22]
  i3482.clickScaleSize = i3483[23]
  i3482.clickDownDuration = i3483[24]
  i3482.clickUpDuration = i3483[25]
  var i3487 = i3483[26]
  var i3486 = []
  for(var i = 0; i < i3487.length; i += 2) {
  request.r(i3487[i + 0], i3487[i + 1], 2, i3486, '')
  }
  i3482.extraObjectsToActivate = i3486
  var i3489 = i3483[27]
  var i3488 = []
  for(var i = 0; i < i3489.length; i += 2) {
  request.r(i3489[i + 0], i3489[i + 1], 2, i3488, '')
  }
  i3482.extraObjectsToDeactivate = i3488
  i3482.waitTime = i3483[28]
  var i3491 = i3483[29]
  var i3490 = []
  for(var i = 0; i < i3491.length; i += 2) {
  request.r(i3491[i + 0], i3491[i + 1], 2, i3490, '')
  }
  i3482.objectsToTurnOnAfterWait = i3490
  var i3493 = i3483[30]
  var i3492 = []
  for(var i = 0; i < i3493.length; i += 2) {
  request.r(i3493[i + 0], i3493[i + 1], 2, i3492, '')
  }
  i3482.objectsToTurnOffAfterWait = i3492
  return i3482
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i3496 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i3497 = data
  i3496.planeDistance = i3497[0]
  i3496.referencePixelsPerUnit = i3497[1]
  i3496.isFallbackOverlay = !!i3497[2]
  i3496.renderMode = i3497[3]
  i3496.renderOrder = i3497[4]
  i3496.sortingLayerName = i3497[5]
  i3496.sortingOrder = i3497[6]
  i3496.scaleFactor = i3497[7]
  request.r(i3497[8], i3497[9], 0, i3496, 'worldCamera')
  i3496.overrideSorting = !!i3497[10]
  i3496.pixelPerfect = !!i3497[11]
  i3496.targetDisplay = i3497[12]
  i3496.overridePixelPerfect = !!i3497[13]
  i3496.enabled = !!i3497[14]
  return i3496
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i3498 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i3499 = data
  i3498.m_UiScaleMode = i3499[0]
  i3498.m_ReferencePixelsPerUnit = i3499[1]
  i3498.m_ScaleFactor = i3499[2]
  i3498.m_ReferenceResolution = new pc.Vec2( i3499[3], i3499[4] )
  i3498.m_ScreenMatchMode = i3499[5]
  i3498.m_MatchWidthOrHeight = i3499[6]
  i3498.m_PhysicalUnit = i3499[7]
  i3498.m_FallbackScreenDPI = i3499[8]
  i3498.m_DefaultSpriteDPI = i3499[9]
  i3498.m_DynamicPixelsPerUnit = i3499[10]
  i3498.m_PresetInfoIsWorld = !!i3499[11]
  return i3498
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i3500 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i3501 = data
  i3500.m_IgnoreReversedGraphics = !!i3501[0]
  i3500.m_BlockingObjects = i3501[1]
  i3500.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i3501[2] )
  return i3500
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i3502 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i3503 = data
  i3502.cullTransparentMesh = !!i3503[0]
  return i3502
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i3504 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i3505 = data
  i3504.m_hasFontAssetChanged = !!i3505[0]
  request.r(i3505[1], i3505[2], 0, i3504, 'm_baseMaterial')
  i3504.m_maskOffset = new pc.Vec4( i3505[3], i3505[4], i3505[5], i3505[6] )
  i3504.m_text = i3505[7]
  i3504.m_isRightToLeft = !!i3505[8]
  request.r(i3505[9], i3505[10], 0, i3504, 'm_fontAsset')
  request.r(i3505[11], i3505[12], 0, i3504, 'm_sharedMaterial')
  var i3507 = i3505[13]
  var i3506 = []
  for(var i = 0; i < i3507.length; i += 2) {
  request.r(i3507[i + 0], i3507[i + 1], 2, i3506, '')
  }
  i3504.m_fontSharedMaterials = i3506
  request.r(i3505[14], i3505[15], 0, i3504, 'm_fontMaterial')
  var i3509 = i3505[16]
  var i3508 = []
  for(var i = 0; i < i3509.length; i += 2) {
  request.r(i3509[i + 0], i3509[i + 1], 2, i3508, '')
  }
  i3504.m_fontMaterials = i3508
  i3504.m_fontColor32 = UnityEngine.Color32.ConstructColor(i3505[17], i3505[18], i3505[19], i3505[20])
  i3504.m_fontColor = new pc.Color(i3505[21], i3505[22], i3505[23], i3505[24])
  i3504.m_enableVertexGradient = !!i3505[25]
  i3504.m_colorMode = i3505[26]
  i3504.m_fontColorGradient = request.d('TMPro.VertexGradient', i3505[27], i3504.m_fontColorGradient)
  request.r(i3505[28], i3505[29], 0, i3504, 'm_fontColorGradientPreset')
  request.r(i3505[30], i3505[31], 0, i3504, 'm_spriteAsset')
  i3504.m_tintAllSprites = !!i3505[32]
  request.r(i3505[33], i3505[34], 0, i3504, 'm_StyleSheet')
  i3504.m_TextStyleHashCode = i3505[35]
  i3504.m_overrideHtmlColors = !!i3505[36]
  i3504.m_faceColor = UnityEngine.Color32.ConstructColor(i3505[37], i3505[38], i3505[39], i3505[40])
  i3504.m_fontSize = i3505[41]
  i3504.m_fontSizeBase = i3505[42]
  i3504.m_fontWeight = i3505[43]
  i3504.m_enableAutoSizing = !!i3505[44]
  i3504.m_fontSizeMin = i3505[45]
  i3504.m_fontSizeMax = i3505[46]
  i3504.m_fontStyle = i3505[47]
  i3504.m_HorizontalAlignment = i3505[48]
  i3504.m_VerticalAlignment = i3505[49]
  i3504.m_textAlignment = i3505[50]
  i3504.m_characterSpacing = i3505[51]
  i3504.m_wordSpacing = i3505[52]
  i3504.m_lineSpacing = i3505[53]
  i3504.m_lineSpacingMax = i3505[54]
  i3504.m_paragraphSpacing = i3505[55]
  i3504.m_charWidthMaxAdj = i3505[56]
  i3504.m_TextWrappingMode = i3505[57]
  i3504.m_wordWrappingRatios = i3505[58]
  i3504.m_overflowMode = i3505[59]
  request.r(i3505[60], i3505[61], 0, i3504, 'm_linkedTextComponent')
  request.r(i3505[62], i3505[63], 0, i3504, 'parentLinkedComponent')
  i3504.m_enableKerning = !!i3505[64]
  var i3511 = i3505[65]
  var i3510 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i3511.length; i += 1) {
    i3510.add(i3511[i + 0]);
  }
  i3504.m_ActiveFontFeatures = i3510
  i3504.m_enableExtraPadding = !!i3505[66]
  i3504.checkPaddingRequired = !!i3505[67]
  i3504.m_isRichText = !!i3505[68]
  i3504.m_parseCtrlCharacters = !!i3505[69]
  i3504.m_isOrthographic = !!i3505[70]
  i3504.m_isCullingEnabled = !!i3505[71]
  i3504.m_horizontalMapping = i3505[72]
  i3504.m_verticalMapping = i3505[73]
  i3504.m_uvLineOffset = i3505[74]
  i3504.m_geometrySortingOrder = i3505[75]
  i3504.m_IsTextObjectScaleStatic = !!i3505[76]
  i3504.m_VertexBufferAutoSizeReduction = !!i3505[77]
  i3504.m_useMaxVisibleDescender = !!i3505[78]
  i3504.m_pageToDisplay = i3505[79]
  i3504.m_margin = new pc.Vec4( i3505[80], i3505[81], i3505[82], i3505[83] )
  i3504.m_isUsingLegacyAnimationComponent = !!i3505[84]
  i3504.m_isVolumetricText = !!i3505[85]
  request.r(i3505[86], i3505[87], 0, i3504, 'm_Material')
  i3504.m_EmojiFallbackSupport = !!i3505[88]
  i3504.m_Maskable = !!i3505[89]
  i3504.m_Color = new pc.Color(i3505[90], i3505[91], i3505[92], i3505[93])
  i3504.m_RaycastTarget = !!i3505[94]
  i3504.m_RaycastPadding = new pc.Vec4( i3505[95], i3505[96], i3505[97], i3505[98] )
  return i3504
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i3512 = root || request.c( 'UnityEngine.UI.Image' )
  var i3513 = data
  request.r(i3513[0], i3513[1], 0, i3512, 'm_Sprite')
  i3512.m_Type = i3513[2]
  i3512.m_PreserveAspect = !!i3513[3]
  i3512.m_FillCenter = !!i3513[4]
  i3512.m_FillMethod = i3513[5]
  i3512.m_FillAmount = i3513[6]
  i3512.m_FillClockwise = !!i3513[7]
  i3512.m_FillOrigin = i3513[8]
  i3512.m_UseSpriteMesh = !!i3513[9]
  i3512.m_PixelsPerUnitMultiplier = i3513[10]
  request.r(i3513[11], i3513[12], 0, i3512, 'm_Material')
  i3512.m_Maskable = !!i3513[13]
  i3512.m_Color = new pc.Color(i3513[14], i3513[15], i3513[16], i3513[17])
  i3512.m_RaycastTarget = !!i3513[18]
  i3512.m_RaycastPadding = new pc.Vec4( i3513[19], i3513[20], i3513[21], i3513[22] )
  return i3512
}

Deserializers["PlayerSlot"] = function (request, data, root) {
  var i3514 = root || request.c( 'PlayerSlot' )
  var i3515 = data
  request.r(i3515[0], i3515[1], 0, i3514, 'spriteRenderer')
  request.r(i3515[2], i3515[3], 0, i3514, 'lightEffect')
  i3514.idleScale = i3515[4]
  i3514.idleDuration = i3515[5]
  i3514.originalPosition = new pc.Vec3( i3515[6], i3515[7], i3515[8] )
  i3514.originalScale = new pc.Vec3( i3515[9], i3515[10], i3515[11] )
  request.r(i3515[12], i3515[13], 0, i3514, 'currentData')
  return i3514
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i3516 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i3517 = data
  request.r(i3517[0], i3517[1], 0, i3516, 'm_FirstSelected')
  i3516.m_sendNavigationEvents = !!i3517[2]
  i3516.m_DragThreshold = i3517[3]
  return i3516
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i3518 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i3519 = data
  i3518.m_HorizontalAxis = i3519[0]
  i3518.m_VerticalAxis = i3519[1]
  i3518.m_SubmitButton = i3519[2]
  i3518.m_CancelButton = i3519[3]
  i3518.m_InputActionsPerSecond = i3519[4]
  i3518.m_RepeatDelay = i3519[5]
  i3518.m_ForceModuleActive = !!i3519[6]
  i3518.m_SendPointerHoverToParent = !!i3519[7]
  return i3518
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i3520 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i3521 = data
  i3520.ambientIntensity = i3521[0]
  i3520.reflectionIntensity = i3521[1]
  i3520.ambientMode = i3521[2]
  i3520.ambientLight = new pc.Color(i3521[3], i3521[4], i3521[5], i3521[6])
  i3520.ambientSkyColor = new pc.Color(i3521[7], i3521[8], i3521[9], i3521[10])
  i3520.ambientGroundColor = new pc.Color(i3521[11], i3521[12], i3521[13], i3521[14])
  i3520.ambientEquatorColor = new pc.Color(i3521[15], i3521[16], i3521[17], i3521[18])
  i3520.fogColor = new pc.Color(i3521[19], i3521[20], i3521[21], i3521[22])
  i3520.fogEndDistance = i3521[23]
  i3520.fogStartDistance = i3521[24]
  i3520.fogDensity = i3521[25]
  i3520.fog = !!i3521[26]
  request.r(i3521[27], i3521[28], 0, i3520, 'skybox')
  i3520.fogMode = i3521[29]
  var i3523 = i3521[30]
  var i3522 = []
  for(var i = 0; i < i3523.length; i += 1) {
    i3522.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i3523[i + 0]) );
  }
  i3520.lightmaps = i3522
  i3520.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i3521[31], i3520.lightProbes)
  i3520.lightmapsMode = i3521[32]
  i3520.mixedBakeMode = i3521[33]
  i3520.environmentLightingMode = i3521[34]
  i3520.ambientProbe = new pc.SphericalHarmonicsL2(i3521[35])
  i3520.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i3521[36])
  i3520.useReferenceAmbientProbe = !!i3521[37]
  request.r(i3521[38], i3521[39], 0, i3520, 'customReflection')
  request.r(i3521[40], i3521[41], 0, i3520, 'defaultReflection')
  i3520.defaultReflectionMode = i3521[42]
  i3520.defaultReflectionResolution = i3521[43]
  i3520.sunLightObjectId = i3521[44]
  i3520.pixelLightCount = i3521[45]
  i3520.defaultReflectionHDR = !!i3521[46]
  i3520.hasLightDataAsset = !!i3521[47]
  i3520.hasManualGenerate = !!i3521[48]
  return i3520
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i3526 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i3527 = data
  request.r(i3527[0], i3527[1], 0, i3526, 'lightmapColor')
  request.r(i3527[2], i3527[3], 0, i3526, 'lightmapDirection')
  request.r(i3527[4], i3527[5], 0, i3526, 'shadowMask')
  return i3526
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i3528 = root || new UnityEngine.LightProbes()
  var i3529 = data
  return i3528
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i3536 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i3537 = data
  var i3539 = i3537[0]
  var i3538 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i3539.length; i += 1) {
    i3538.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i3539[i + 0]));
  }
  i3536.ShaderCompilationErrors = i3538
  i3536.name = i3537[1]
  i3536.guid = i3537[2]
  var i3541 = i3537[3]
  var i3540 = []
  for(var i = 0; i < i3541.length; i += 1) {
    i3540.push( i3541[i + 0] );
  }
  i3536.shaderDefinedKeywords = i3540
  var i3543 = i3537[4]
  var i3542 = []
  for(var i = 0; i < i3543.length; i += 1) {
    i3542.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i3543[i + 0]) );
  }
  i3536.passes = i3542
  var i3545 = i3537[5]
  var i3544 = []
  for(var i = 0; i < i3545.length; i += 1) {
    i3544.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i3545[i + 0]) );
  }
  i3536.usePasses = i3544
  var i3547 = i3537[6]
  var i3546 = []
  for(var i = 0; i < i3547.length; i += 1) {
    i3546.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i3547[i + 0]) );
  }
  i3536.defaultParameterValues = i3546
  request.r(i3537[7], i3537[8], 0, i3536, 'unityFallbackShader')
  i3536.readDepth = !!i3537[9]
  i3536.hasDepthOnlyPass = !!i3537[10]
  i3536.isCreatedByShaderGraph = !!i3537[11]
  i3536.disableBatching = !!i3537[12]
  i3536.compiled = !!i3537[13]
  return i3536
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i3550 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i3551 = data
  i3550.shaderName = i3551[0]
  i3550.errorMessage = i3551[1]
  return i3550
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i3556 = root || new pc.UnityShaderPass()
  var i3557 = data
  i3556.id = i3557[0]
  i3556.subShaderIndex = i3557[1]
  i3556.name = i3557[2]
  i3556.passType = i3557[3]
  i3556.grabPassTextureName = i3557[4]
  i3556.usePass = !!i3557[5]
  i3556.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3557[6], i3556.zTest)
  i3556.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3557[7], i3556.zWrite)
  i3556.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3557[8], i3556.culling)
  i3556.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i3557[9], i3556.blending)
  i3556.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i3557[10], i3556.alphaBlending)
  i3556.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3557[11], i3556.colorWriteMask)
  i3556.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3557[12], i3556.offsetUnits)
  i3556.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3557[13], i3556.offsetFactor)
  i3556.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3557[14], i3556.stencilRef)
  i3556.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3557[15], i3556.stencilReadMask)
  i3556.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3557[16], i3556.stencilWriteMask)
  i3556.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3557[17], i3556.stencilOp)
  i3556.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3557[18], i3556.stencilOpFront)
  i3556.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3557[19], i3556.stencilOpBack)
  var i3559 = i3557[20]
  var i3558 = []
  for(var i = 0; i < i3559.length; i += 1) {
    i3558.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i3559[i + 0]) );
  }
  i3556.tags = i3558
  var i3561 = i3557[21]
  var i3560 = []
  for(var i = 0; i < i3561.length; i += 1) {
    i3560.push( i3561[i + 0] );
  }
  i3556.passDefinedKeywords = i3560
  var i3563 = i3557[22]
  var i3562 = []
  for(var i = 0; i < i3563.length; i += 1) {
    i3562.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i3563[i + 0]) );
  }
  i3556.passDefinedKeywordGroups = i3562
  var i3565 = i3557[23]
  var i3564 = []
  for(var i = 0; i < i3565.length; i += 1) {
    i3564.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i3565[i + 0]) );
  }
  i3556.variants = i3564
  var i3567 = i3557[24]
  var i3566 = []
  for(var i = 0; i < i3567.length; i += 1) {
    i3566.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i3567[i + 0]) );
  }
  i3556.excludedVariants = i3566
  i3556.hasDepthReader = !!i3557[25]
  return i3556
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i3568 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i3569 = data
  i3568.val = i3569[0]
  i3568.name = i3569[1]
  return i3568
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i3570 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i3571 = data
  i3570.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3571[0], i3570.src)
  i3570.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3571[1], i3570.dst)
  i3570.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3571[2], i3570.op)
  return i3570
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i3572 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i3573 = data
  i3572.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3573[0], i3572.pass)
  i3572.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3573[1], i3572.fail)
  i3572.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3573[2], i3572.zFail)
  i3572.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3573[3], i3572.comp)
  return i3572
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i3576 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i3577 = data
  i3576.name = i3577[0]
  i3576.value = i3577[1]
  return i3576
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i3580 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i3581 = data
  var i3583 = i3581[0]
  var i3582 = []
  for(var i = 0; i < i3583.length; i += 1) {
    i3582.push( i3583[i + 0] );
  }
  i3580.keywords = i3582
  i3580.hasDiscard = !!i3581[1]
  return i3580
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i3586 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i3587 = data
  i3586.passId = i3587[0]
  i3586.subShaderIndex = i3587[1]
  var i3589 = i3587[2]
  var i3588 = []
  for(var i = 0; i < i3589.length; i += 1) {
    i3588.push( i3589[i + 0] );
  }
  i3586.keywords = i3588
  i3586.vertexProgram = i3587[3]
  i3586.fragmentProgram = i3587[4]
  i3586.exportedForWebGl2 = !!i3587[5]
  i3586.readDepth = !!i3587[6]
  return i3586
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i3592 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i3593 = data
  request.r(i3593[0], i3593[1], 0, i3592, 'shader')
  i3592.pass = i3593[2]
  return i3592
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i3596 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i3597 = data
  i3596.name = i3597[0]
  i3596.type = i3597[1]
  i3596.value = new pc.Vec4( i3597[2], i3597[3], i3597[4], i3597[5] )
  i3596.textureValue = i3597[6]
  i3596.shaderPropertyFlag = i3597[7]
  return i3596
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i3598 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i3599 = data
  i3598.name = i3599[0]
  request.r(i3599[1], i3599[2], 0, i3598, 'texture')
  i3598.aabb = i3599[3]
  i3598.vertices = i3599[4]
  i3598.triangles = i3599[5]
  i3598.textureRect = UnityEngine.Rect.MinMaxRect(i3599[6], i3599[7], i3599[8], i3599[9])
  i3598.packedRect = UnityEngine.Rect.MinMaxRect(i3599[10], i3599[11], i3599[12], i3599[13])
  i3598.border = new pc.Vec4( i3599[14], i3599[15], i3599[16], i3599[17] )
  i3598.transparency = i3599[18]
  i3598.bounds = i3599[19]
  i3598.pixelsPerUnit = i3599[20]
  i3598.textureWidth = i3599[21]
  i3598.textureHeight = i3599[22]
  i3598.nativeSize = new pc.Vec2( i3599[23], i3599[24] )
  i3598.pivot = new pc.Vec2( i3599[25], i3599[26] )
  i3598.textureRectOffset = new pc.Vec2( i3599[27], i3599[28] )
  return i3598
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i3600 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i3601 = data
  i3600.name = i3601[0]
  return i3600
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i3602 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i3603 = data
  i3602.name = i3603[0]
  i3602.wrapMode = i3603[1]
  i3602.isLooping = !!i3603[2]
  i3602.length = i3603[3]
  var i3605 = i3603[4]
  var i3604 = []
  for(var i = 0; i < i3605.length; i += 1) {
    i3604.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i3605[i + 0]) );
  }
  i3602.curves = i3604
  var i3607 = i3603[5]
  var i3606 = []
  for(var i = 0; i < i3607.length; i += 1) {
    i3606.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i3607[i + 0]) );
  }
  i3602.events = i3606
  i3602.halfPrecision = !!i3603[6]
  i3602._frameRate = i3603[7]
  i3602.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i3603[8], i3602.localBounds)
  i3602.hasMuscleCurves = !!i3603[9]
  var i3609 = i3603[10]
  var i3608 = []
  for(var i = 0; i < i3609.length; i += 1) {
    i3608.push( i3609[i + 0] );
  }
  i3602.clipMuscleConstant = i3608
  i3602.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i3603[11], i3602.clipBindingConstant)
  return i3602
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i3612 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i3613 = data
  i3612.path = i3613[0]
  i3612.hash = i3613[1]
  i3612.componentType = i3613[2]
  i3612.property = i3613[3]
  i3612.keys = i3613[4]
  var i3615 = i3613[5]
  var i3614 = []
  for(var i = 0; i < i3615.length; i += 1) {
    i3614.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i3615[i + 0]) );
  }
  i3612.objectReferenceKeys = i3614
  return i3612
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i3618 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i3619 = data
  i3618.time = i3619[0]
  request.r(i3619[1], i3619[2], 0, i3618, 'value')
  return i3618
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i3622 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i3623 = data
  i3622.functionName = i3623[0]
  i3622.floatParameter = i3623[1]
  i3622.intParameter = i3623[2]
  i3622.stringParameter = i3623[3]
  request.r(i3623[4], i3623[5], 0, i3622, 'objectReferenceParameter')
  i3622.time = i3623[6]
  return i3622
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i3624 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i3625 = data
  i3624.center = new pc.Vec3( i3625[0], i3625[1], i3625[2] )
  i3624.extends = new pc.Vec3( i3625[3], i3625[4], i3625[5] )
  return i3624
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i3628 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i3629 = data
  var i3631 = i3629[0]
  var i3630 = []
  for(var i = 0; i < i3631.length; i += 1) {
    i3630.push( i3631[i + 0] );
  }
  i3628.genericBindings = i3630
  var i3633 = i3629[1]
  var i3632 = []
  for(var i = 0; i < i3633.length; i += 1) {
    i3632.push( i3633[i + 0] );
  }
  i3628.pptrCurveMapping = i3632
  return i3628
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i3634 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i3635 = data
  i3634.name = i3635[0]
  i3634.ascent = i3635[1]
  i3634.originalLineHeight = i3635[2]
  i3634.fontSize = i3635[3]
  var i3637 = i3635[4]
  var i3636 = []
  for(var i = 0; i < i3637.length; i += 1) {
    i3636.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i3637[i + 0]) );
  }
  i3634.characterInfo = i3636
  request.r(i3635[5], i3635[6], 0, i3634, 'texture')
  i3634.originalFontSize = i3635[7]
  return i3634
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i3640 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i3641 = data
  i3640.index = i3641[0]
  i3640.advance = i3641[1]
  i3640.bearing = i3641[2]
  i3640.glyphWidth = i3641[3]
  i3640.glyphHeight = i3641[4]
  i3640.minX = i3641[5]
  i3640.maxX = i3641[6]
  i3640.minY = i3641[7]
  i3640.maxY = i3641[8]
  i3640.uvBottomLeftX = i3641[9]
  i3640.uvBottomLeftY = i3641[10]
  i3640.uvBottomRightX = i3641[11]
  i3640.uvBottomRightY = i3641[12]
  i3640.uvTopLeftX = i3641[13]
  i3640.uvTopLeftY = i3641[14]
  i3640.uvTopRightX = i3641[15]
  i3640.uvTopRightY = i3641[16]
  return i3640
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i3642 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i3643 = data
  i3642.name = i3643[0]
  var i3645 = i3643[1]
  var i3644 = []
  for(var i = 0; i < i3645.length; i += 1) {
    i3644.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i3645[i + 0]) );
  }
  i3642.layers = i3644
  var i3647 = i3643[2]
  var i3646 = []
  for(var i = 0; i < i3647.length; i += 1) {
    i3646.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i3647[i + 0]) );
  }
  i3642.parameters = i3646
  i3642.animationClips = i3643[3]
  i3642.avatarUnsupported = i3643[4]
  return i3642
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i3650 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i3651 = data
  i3650.name = i3651[0]
  i3650.defaultWeight = i3651[1]
  i3650.blendingMode = i3651[2]
  i3650.avatarMask = i3651[3]
  i3650.syncedLayerIndex = i3651[4]
  i3650.syncedLayerAffectsTiming = !!i3651[5]
  i3650.syncedLayers = i3651[6]
  i3650.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i3651[7], i3650.stateMachine)
  return i3650
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i3652 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i3653 = data
  i3652.id = i3653[0]
  i3652.name = i3653[1]
  i3652.path = i3653[2]
  var i3655 = i3653[3]
  var i3654 = []
  for(var i = 0; i < i3655.length; i += 1) {
    i3654.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i3655[i + 0]) );
  }
  i3652.states = i3654
  var i3657 = i3653[4]
  var i3656 = []
  for(var i = 0; i < i3657.length; i += 1) {
    i3656.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i3657[i + 0]) );
  }
  i3652.machines = i3656
  var i3659 = i3653[5]
  var i3658 = []
  for(var i = 0; i < i3659.length; i += 1) {
    i3658.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i3659[i + 0]) );
  }
  i3652.entryStateTransitions = i3658
  var i3661 = i3653[6]
  var i3660 = []
  for(var i = 0; i < i3661.length; i += 1) {
    i3660.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i3661[i + 0]) );
  }
  i3652.exitStateTransitions = i3660
  var i3663 = i3653[7]
  var i3662 = []
  for(var i = 0; i < i3663.length; i += 1) {
    i3662.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i3663[i + 0]) );
  }
  i3652.anyStateTransitions = i3662
  i3652.defaultStateId = i3653[8]
  return i3652
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i3666 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i3667 = data
  i3666.id = i3667[0]
  i3666.name = i3667[1]
  i3666.cycleOffset = i3667[2]
  i3666.cycleOffsetParameter = i3667[3]
  i3666.cycleOffsetParameterActive = !!i3667[4]
  i3666.mirror = !!i3667[5]
  i3666.mirrorParameter = i3667[6]
  i3666.mirrorParameterActive = !!i3667[7]
  i3666.motionId = i3667[8]
  i3666.nameHash = i3667[9]
  i3666.fullPathHash = i3667[10]
  i3666.speed = i3667[11]
  i3666.speedParameter = i3667[12]
  i3666.speedParameterActive = !!i3667[13]
  i3666.tag = i3667[14]
  i3666.tagHash = i3667[15]
  i3666.writeDefaultValues = !!i3667[16]
  var i3669 = i3667[17]
  var i3668 = []
  for(var i = 0; i < i3669.length; i += 2) {
  request.r(i3669[i + 0], i3669[i + 1], 2, i3668, '')
  }
  i3666.behaviours = i3668
  var i3671 = i3667[18]
  var i3670 = []
  for(var i = 0; i < i3671.length; i += 1) {
    i3670.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i3671[i + 0]) );
  }
  i3666.transitions = i3670
  return i3666
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i3676 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i3677 = data
  i3676.fullPath = i3677[0]
  i3676.canTransitionToSelf = !!i3677[1]
  i3676.duration = i3677[2]
  i3676.exitTime = i3677[3]
  i3676.hasExitTime = !!i3677[4]
  i3676.hasFixedDuration = !!i3677[5]
  i3676.interruptionSource = i3677[6]
  i3676.offset = i3677[7]
  i3676.orderedInterruption = !!i3677[8]
  i3676.destinationStateId = i3677[9]
  i3676.isExit = !!i3677[10]
  i3676.mute = !!i3677[11]
  i3676.solo = !!i3677[12]
  var i3679 = i3677[13]
  var i3678 = []
  for(var i = 0; i < i3679.length; i += 1) {
    i3678.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i3679[i + 0]) );
  }
  i3676.conditions = i3678
  return i3676
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i3684 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i3685 = data
  i3684.destinationStateId = i3685[0]
  i3684.isExit = !!i3685[1]
  i3684.mute = !!i3685[2]
  i3684.solo = !!i3685[3]
  var i3687 = i3685[4]
  var i3686 = []
  for(var i = 0; i < i3687.length; i += 1) {
    i3686.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i3687[i + 0]) );
  }
  i3684.conditions = i3686
  return i3684
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i3690 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i3691 = data
  i3690.defaultBool = !!i3691[0]
  i3690.defaultFloat = i3691[1]
  i3690.defaultInt = i3691[2]
  i3690.name = i3691[3]
  i3690.nameHash = i3691[4]
  i3690.type = i3691[5]
  return i3690
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i3692 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i3693 = data
  i3692.name = i3693[0]
  i3692.bytes64 = i3693[1]
  i3692.data = i3693[2]
  return i3692
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i3694 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i3695 = data
  i3694.normalStyle = i3695[0]
  i3694.normalSpacingOffset = i3695[1]
  i3694.boldStyle = i3695[2]
  i3694.boldSpacing = i3695[3]
  i3694.italicStyle = i3695[4]
  i3694.tabSize = i3695[5]
  request.r(i3695[6], i3695[7], 0, i3694, 'atlas')
  i3694.m_SourceFontFileGUID = i3695[8]
  i3694.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i3695[9], i3694.m_CreationSettings)
  request.r(i3695[10], i3695[11], 0, i3694, 'm_SourceFontFile')
  i3694.m_SourceFontFilePath = i3695[12]
  i3694.m_AtlasPopulationMode = i3695[13]
  i3694.InternalDynamicOS = !!i3695[14]
  var i3697 = i3695[15]
  var i3696 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i3697.length; i += 1) {
    i3696.add(request.d('UnityEngine.TextCore.Glyph', i3697[i + 0]));
  }
  i3694.m_GlyphTable = i3696
  var i3699 = i3695[16]
  var i3698 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i3699.length; i += 1) {
    i3698.add(request.d('TMPro.TMP_Character', i3699[i + 0]));
  }
  i3694.m_CharacterTable = i3698
  var i3701 = i3695[17]
  var i3700 = []
  for(var i = 0; i < i3701.length; i += 2) {
  request.r(i3701[i + 0], i3701[i + 1], 2, i3700, '')
  }
  i3694.m_AtlasTextures = i3700
  i3694.m_AtlasTextureIndex = i3695[18]
  i3694.m_IsMultiAtlasTexturesEnabled = !!i3695[19]
  i3694.m_GetFontFeatures = !!i3695[20]
  i3694.m_ClearDynamicDataOnBuild = !!i3695[21]
  i3694.m_AtlasWidth = i3695[22]
  i3694.m_AtlasHeight = i3695[23]
  i3694.m_AtlasPadding = i3695[24]
  i3694.m_AtlasRenderMode = i3695[25]
  var i3703 = i3695[26]
  var i3702 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i3703.length; i += 1) {
    i3702.add(request.d('UnityEngine.TextCore.GlyphRect', i3703[i + 0]));
  }
  i3694.m_UsedGlyphRects = i3702
  var i3705 = i3695[27]
  var i3704 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i3705.length; i += 1) {
    i3704.add(request.d('UnityEngine.TextCore.GlyphRect', i3705[i + 0]));
  }
  i3694.m_FreeGlyphRects = i3704
  i3694.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i3695[28], i3694.m_FontFeatureTable)
  i3694.m_ShouldReimportFontFeatures = !!i3695[29]
  var i3707 = i3695[30]
  var i3706 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i3707.length; i += 2) {
  request.r(i3707[i + 0], i3707[i + 1], 1, i3706, '')
  }
  i3694.m_FallbackFontAssetTable = i3706
  var i3709 = i3695[31]
  var i3708 = []
  for(var i = 0; i < i3709.length; i += 1) {
    i3708.push( request.d('TMPro.TMP_FontWeightPair', i3709[i + 0]) );
  }
  i3694.m_FontWeightTable = i3708
  var i3711 = i3695[32]
  var i3710 = []
  for(var i = 0; i < i3711.length; i += 1) {
    i3710.push( request.d('TMPro.TMP_FontWeightPair', i3711[i + 0]) );
  }
  i3694.fontWeights = i3710
  i3694.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i3695[33], i3694.m_fontInfo)
  var i3713 = i3695[34]
  var i3712 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i3713.length; i += 1) {
    i3712.add(request.d('TMPro.TMP_Glyph', i3713[i + 0]));
  }
  i3694.m_glyphInfoList = i3712
  i3694.m_KerningTable = request.d('TMPro.KerningTable', i3695[35], i3694.m_KerningTable)
  var i3715 = i3695[36]
  var i3714 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i3715.length; i += 2) {
  request.r(i3715[i + 0], i3715[i + 1], 1, i3714, '')
  }
  i3694.fallbackFontAssets = i3714
  i3694.m_Version = i3695[37]
  i3694.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i3695[38], i3694.m_FaceInfo)
  request.r(i3695[39], i3695[40], 0, i3694, 'm_Material')
  return i3694
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i3716 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i3717 = data
  i3716.sourceFontFileName = i3717[0]
  i3716.sourceFontFileGUID = i3717[1]
  i3716.faceIndex = i3717[2]
  i3716.pointSizeSamplingMode = i3717[3]
  i3716.pointSize = i3717[4]
  i3716.padding = i3717[5]
  i3716.paddingMode = i3717[6]
  i3716.packingMode = i3717[7]
  i3716.atlasWidth = i3717[8]
  i3716.atlasHeight = i3717[9]
  i3716.characterSetSelectionMode = i3717[10]
  i3716.characterSequence = i3717[11]
  i3716.referencedFontAssetGUID = i3717[12]
  i3716.referencedTextAssetGUID = i3717[13]
  i3716.fontStyle = i3717[14]
  i3716.fontStyleModifier = i3717[15]
  i3716.renderMode = i3717[16]
  i3716.includeFontFeatures = !!i3717[17]
  return i3716
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i3720 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i3721 = data
  i3720.m_Index = i3721[0]
  i3720.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i3721[1], i3720.m_Metrics)
  i3720.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i3721[2], i3720.m_GlyphRect)
  i3720.m_Scale = i3721[3]
  i3720.m_AtlasIndex = i3721[4]
  i3720.m_ClassDefinitionType = i3721[5]
  return i3720
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i3722 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i3723 = data
  i3722.m_Width = i3723[0]
  i3722.m_Height = i3723[1]
  i3722.m_HorizontalBearingX = i3723[2]
  i3722.m_HorizontalBearingY = i3723[3]
  i3722.m_HorizontalAdvance = i3723[4]
  return i3722
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i3724 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i3725 = data
  i3724.m_X = i3725[0]
  i3724.m_Y = i3725[1]
  i3724.m_Width = i3725[2]
  i3724.m_Height = i3725[3]
  return i3724
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i3728 = root || request.c( 'TMPro.TMP_Character' )
  var i3729 = data
  i3728.m_ElementType = i3729[0]
  i3728.m_Unicode = i3729[1]
  i3728.m_GlyphIndex = i3729[2]
  i3728.m_Scale = i3729[3]
  return i3728
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i3734 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i3735 = data
  var i3737 = i3735[0]
  var i3736 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i3737.length; i += 1) {
    i3736.add(request.d('TMPro.MultipleSubstitutionRecord', i3737[i + 0]));
  }
  i3734.m_MultipleSubstitutionRecords = i3736
  var i3739 = i3735[1]
  var i3738 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i3739.length; i += 1) {
    i3738.add(request.d('TMPro.LigatureSubstitutionRecord', i3739[i + 0]));
  }
  i3734.m_LigatureSubstitutionRecords = i3738
  var i3741 = i3735[2]
  var i3740 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i3741.length; i += 1) {
    i3740.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i3741[i + 0]));
  }
  i3734.m_GlyphPairAdjustmentRecords = i3740
  var i3743 = i3735[3]
  var i3742 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i3743.length; i += 1) {
    i3742.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i3743[i + 0]));
  }
  i3734.m_MarkToBaseAdjustmentRecords = i3742
  var i3745 = i3735[4]
  var i3744 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i3745.length; i += 1) {
    i3744.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i3745[i + 0]));
  }
  i3734.m_MarkToMarkAdjustmentRecords = i3744
  return i3734
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i3748 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i3749 = data
  i3748.m_TargetGlyphID = i3749[0]
  i3748.m_SubstituteGlyphIDs = i3749[1]
  return i3748
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i3752 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i3753 = data
  i3752.m_ComponentGlyphIDs = i3753[0]
  i3752.m_LigatureGlyphID = i3753[1]
  return i3752
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i3756 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i3757 = data
  i3756.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i3757[0], i3756.m_FirstAdjustmentRecord)
  i3756.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i3757[1], i3756.m_SecondAdjustmentRecord)
  i3756.m_FeatureLookupFlags = i3757[2]
  return i3756
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i3758 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i3759 = data
  i3758.m_GlyphIndex = i3759[0]
  i3758.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i3759[1], i3758.m_GlyphValueRecord)
  return i3758
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i3760 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i3761 = data
  i3760.m_XPlacement = i3761[0]
  i3760.m_YPlacement = i3761[1]
  i3760.m_XAdvance = i3761[2]
  i3760.m_YAdvance = i3761[3]
  return i3760
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i3764 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i3765 = data
  i3764.m_BaseGlyphID = i3765[0]
  i3764.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i3765[1], i3764.m_BaseGlyphAnchorPoint)
  i3764.m_MarkGlyphID = i3765[2]
  i3764.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i3765[3], i3764.m_MarkPositionAdjustment)
  return i3764
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i3768 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i3769 = data
  i3768.m_BaseMarkGlyphID = i3769[0]
  i3768.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i3769[1], i3768.m_BaseMarkGlyphAnchorPoint)
  i3768.m_CombiningMarkGlyphID = i3769[2]
  i3768.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i3769[3], i3768.m_CombiningMarkPositionAdjustment)
  return i3768
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i3774 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i3775 = data
  request.r(i3775[0], i3775[1], 0, i3774, 'regularTypeface')
  request.r(i3775[2], i3775[3], 0, i3774, 'italicTypeface')
  return i3774
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i3776 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i3777 = data
  i3776.Name = i3777[0]
  i3776.PointSize = i3777[1]
  i3776.Scale = i3777[2]
  i3776.CharacterCount = i3777[3]
  i3776.LineHeight = i3777[4]
  i3776.Baseline = i3777[5]
  i3776.Ascender = i3777[6]
  i3776.CapHeight = i3777[7]
  i3776.Descender = i3777[8]
  i3776.CenterLine = i3777[9]
  i3776.SuperscriptOffset = i3777[10]
  i3776.SubscriptOffset = i3777[11]
  i3776.SubSize = i3777[12]
  i3776.Underline = i3777[13]
  i3776.UnderlineThickness = i3777[14]
  i3776.strikethrough = i3777[15]
  i3776.strikethroughThickness = i3777[16]
  i3776.TabWidth = i3777[17]
  i3776.Padding = i3777[18]
  i3776.AtlasWidth = i3777[19]
  i3776.AtlasHeight = i3777[20]
  return i3776
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i3780 = root || request.c( 'TMPro.TMP_Glyph' )
  var i3781 = data
  i3780.id = i3781[0]
  i3780.x = i3781[1]
  i3780.y = i3781[2]
  i3780.width = i3781[3]
  i3780.height = i3781[4]
  i3780.xOffset = i3781[5]
  i3780.yOffset = i3781[6]
  i3780.xAdvance = i3781[7]
  i3780.scale = i3781[8]
  return i3780
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i3782 = root || request.c( 'TMPro.KerningTable' )
  var i3783 = data
  var i3785 = i3783[0]
  var i3784 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i3785.length; i += 1) {
    i3784.add(request.d('TMPro.KerningPair', i3785[i + 0]));
  }
  i3782.kerningPairs = i3784
  return i3782
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i3788 = root || request.c( 'TMPro.KerningPair' )
  var i3789 = data
  i3788.xOffset = i3789[0]
  i3788.m_FirstGlyph = i3789[1]
  i3788.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i3789[2], i3788.m_FirstGlyphAdjustments)
  i3788.m_SecondGlyph = i3789[3]
  i3788.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i3789[4], i3788.m_SecondGlyphAdjustments)
  i3788.m_IgnoreSpacingAdjustments = !!i3789[5]
  return i3788
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i3790 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i3791 = data
  i3790.m_FaceIndex = i3791[0]
  i3790.m_FamilyName = i3791[1]
  i3790.m_StyleName = i3791[2]
  i3790.m_PointSize = i3791[3]
  i3790.m_Scale = i3791[4]
  i3790.m_UnitsPerEM = i3791[5]
  i3790.m_LineHeight = i3791[6]
  i3790.m_AscentLine = i3791[7]
  i3790.m_CapLine = i3791[8]
  i3790.m_MeanLine = i3791[9]
  i3790.m_Baseline = i3791[10]
  i3790.m_DescentLine = i3791[11]
  i3790.m_SuperscriptOffset = i3791[12]
  i3790.m_SuperscriptSize = i3791[13]
  i3790.m_SubscriptOffset = i3791[14]
  i3790.m_SubscriptSize = i3791[15]
  i3790.m_UnderlineOffset = i3791[16]
  i3790.m_UnderlineThickness = i3791[17]
  i3790.m_StrikethroughOffset = i3791[18]
  i3790.m_StrikethroughThickness = i3791[19]
  i3790.m_TabWidth = i3791[20]
  return i3790
}

Deserializers["FavoritePlayerCard"] = function (request, data, root) {
  var i3792 = root || request.c( 'FavoritePlayerCard' )
  var i3793 = data
  i3792.playerName = i3793[0]
  request.r(i3793[1], i3793[2], 0, i3792, 'halfBodySprite')
  request.r(i3793[3], i3793[4], 0, i3792, 'fullBodySprite')
  request.r(i3793[5], i3793[6], 0, i3792, 'nameAudio')
  return i3792
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i3794 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i3795 = data
  i3794.useSafeMode = !!i3795[0]
  i3794.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i3795[1], i3794.safeModeOptions)
  i3794.timeScale = i3795[2]
  i3794.unscaledTimeScale = i3795[3]
  i3794.useSmoothDeltaTime = !!i3795[4]
  i3794.maxSmoothUnscaledTime = i3795[5]
  i3794.rewindCallbackMode = i3795[6]
  i3794.showUnityEditorReport = !!i3795[7]
  i3794.logBehaviour = i3795[8]
  i3794.drawGizmos = !!i3795[9]
  i3794.defaultRecyclable = !!i3795[10]
  i3794.defaultAutoPlay = i3795[11]
  i3794.defaultUpdateType = i3795[12]
  i3794.defaultTimeScaleIndependent = !!i3795[13]
  i3794.defaultEaseType = i3795[14]
  i3794.defaultEaseOvershootOrAmplitude = i3795[15]
  i3794.defaultEasePeriod = i3795[16]
  i3794.defaultAutoKill = !!i3795[17]
  i3794.defaultLoopType = i3795[18]
  i3794.debugMode = !!i3795[19]
  i3794.debugStoreTargetId = !!i3795[20]
  i3794.showPreviewPanel = !!i3795[21]
  i3794.storeSettingsLocation = i3795[22]
  i3794.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i3795[23], i3794.modules)
  i3794.createASMDEF = !!i3795[24]
  i3794.showPlayingTweens = !!i3795[25]
  i3794.showPausedTweens = !!i3795[26]
  return i3794
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i3796 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i3797 = data
  i3796.logBehaviour = i3797[0]
  i3796.nestedTweenFailureBehaviour = i3797[1]
  return i3796
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i3798 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i3799 = data
  i3798.showPanel = !!i3799[0]
  i3798.audioEnabled = !!i3799[1]
  i3798.physicsEnabled = !!i3799[2]
  i3798.physics2DEnabled = !!i3799[3]
  i3798.spriteEnabled = !!i3799[4]
  i3798.uiEnabled = !!i3799[5]
  i3798.uiToolkitEnabled = !!i3799[6]
  i3798.textMeshProEnabled = !!i3799[7]
  i3798.tk2DEnabled = !!i3799[8]
  i3798.deAudioEnabled = !!i3799[9]
  i3798.deUnityExtendedEnabled = !!i3799[10]
  i3798.epoOutlineEnabled = !!i3799[11]
  return i3798
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i3800 = root || request.c( 'TMPro.TMP_Settings' )
  var i3801 = data
  i3800.assetVersion = i3801[0]
  i3800.m_TextWrappingMode = i3801[1]
  i3800.m_enableKerning = !!i3801[2]
  var i3803 = i3801[3]
  var i3802 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i3803.length; i += 1) {
    i3802.add(i3803[i + 0]);
  }
  i3800.m_ActiveFontFeatures = i3802
  i3800.m_enableExtraPadding = !!i3801[4]
  i3800.m_enableTintAllSprites = !!i3801[5]
  i3800.m_enableParseEscapeCharacters = !!i3801[6]
  i3800.m_EnableRaycastTarget = !!i3801[7]
  i3800.m_GetFontFeaturesAtRuntime = !!i3801[8]
  i3800.m_missingGlyphCharacter = i3801[9]
  i3800.m_ClearDynamicDataOnBuild = !!i3801[10]
  i3800.m_warningsDisabled = !!i3801[11]
  request.r(i3801[12], i3801[13], 0, i3800, 'm_defaultFontAsset')
  i3800.m_defaultFontAssetPath = i3801[14]
  i3800.m_defaultFontSize = i3801[15]
  i3800.m_defaultAutoSizeMinRatio = i3801[16]
  i3800.m_defaultAutoSizeMaxRatio = i3801[17]
  i3800.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i3801[18], i3801[19] )
  i3800.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i3801[20], i3801[21] )
  i3800.m_autoSizeTextContainer = !!i3801[22]
  i3800.m_IsTextObjectScaleStatic = !!i3801[23]
  var i3805 = i3801[24]
  var i3804 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i3805.length; i += 2) {
  request.r(i3805[i + 0], i3805[i + 1], 1, i3804, '')
  }
  i3800.m_fallbackFontAssets = i3804
  i3800.m_matchMaterialPreset = !!i3801[25]
  i3800.m_HideSubTextObjects = !!i3801[26]
  request.r(i3801[27], i3801[28], 0, i3800, 'm_defaultSpriteAsset')
  i3800.m_defaultSpriteAssetPath = i3801[29]
  i3800.m_enableEmojiSupport = !!i3801[30]
  i3800.m_MissingCharacterSpriteUnicode = i3801[31]
  var i3807 = i3801[32]
  var i3806 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i3807.length; i += 2) {
  request.r(i3807[i + 0], i3807[i + 1], 1, i3806, '')
  }
  i3800.m_EmojiFallbackTextAssets = i3806
  i3800.m_defaultColorGradientPresetsPath = i3801[33]
  request.r(i3801[34], i3801[35], 0, i3800, 'm_defaultStyleSheet')
  i3800.m_StyleSheetsResourcePath = i3801[36]
  request.r(i3801[37], i3801[38], 0, i3800, 'm_leadingCharacters')
  request.r(i3801[39], i3801[40], 0, i3800, 'm_followingCharacters')
  i3800.m_UseModernHangulLineBreakingRules = !!i3801[41]
  return i3800
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i3810 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i3811 = data
  request.r(i3811[0], i3811[1], 0, i3810, 'spriteSheet')
  var i3813 = i3811[2]
  var i3812 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i3813.length; i += 1) {
    i3812.add(request.d('TMPro.TMP_Sprite', i3813[i + 0]));
  }
  i3810.spriteInfoList = i3812
  var i3815 = i3811[3]
  var i3814 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i3815.length; i += 2) {
  request.r(i3815[i + 0], i3815[i + 1], 1, i3814, '')
  }
  i3810.fallbackSpriteAssets = i3814
  var i3817 = i3811[4]
  var i3816 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i3817.length; i += 1) {
    i3816.add(request.d('TMPro.TMP_SpriteCharacter', i3817[i + 0]));
  }
  i3810.m_SpriteCharacterTable = i3816
  var i3819 = i3811[5]
  var i3818 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i3819.length; i += 1) {
    i3818.add(request.d('TMPro.TMP_SpriteGlyph', i3819[i + 0]));
  }
  i3810.m_GlyphTable = i3818
  i3810.m_Version = i3811[6]
  i3810.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i3811[7], i3810.m_FaceInfo)
  request.r(i3811[8], i3811[9], 0, i3810, 'm_Material')
  return i3810
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i3822 = root || request.c( 'TMPro.TMP_Sprite' )
  var i3823 = data
  i3822.name = i3823[0]
  i3822.hashCode = i3823[1]
  i3822.unicode = i3823[2]
  i3822.pivot = new pc.Vec2( i3823[3], i3823[4] )
  request.r(i3823[5], i3823[6], 0, i3822, 'sprite')
  i3822.id = i3823[7]
  i3822.x = i3823[8]
  i3822.y = i3823[9]
  i3822.width = i3823[10]
  i3822.height = i3823[11]
  i3822.xOffset = i3823[12]
  i3822.yOffset = i3823[13]
  i3822.xAdvance = i3823[14]
  i3822.scale = i3823[15]
  return i3822
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i3828 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i3829 = data
  i3828.m_Name = i3829[0]
  i3828.m_ElementType = i3829[1]
  i3828.m_Unicode = i3829[2]
  i3828.m_GlyphIndex = i3829[3]
  i3828.m_Scale = i3829[4]
  return i3828
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i3832 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i3833 = data
  request.r(i3833[0], i3833[1], 0, i3832, 'sprite')
  i3832.m_Index = i3833[2]
  i3832.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i3833[3], i3832.m_Metrics)
  i3832.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i3833[4], i3832.m_GlyphRect)
  i3832.m_Scale = i3833[5]
  i3832.m_AtlasIndex = i3833[6]
  i3832.m_ClassDefinitionType = i3833[7]
  return i3832
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i3834 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i3835 = data
  var i3837 = i3835[0]
  var i3836 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i3837.length; i += 1) {
    i3836.add(request.d('TMPro.TMP_Style', i3837[i + 0]));
  }
  i3834.m_StyleList = i3836
  return i3834
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i3840 = root || request.c( 'TMPro.TMP_Style' )
  var i3841 = data
  i3840.m_Name = i3841[0]
  i3840.m_HashCode = i3841[1]
  i3840.m_OpeningDefinition = i3841[2]
  i3840.m_ClosingDefinition = i3841[3]
  i3840.m_OpeningTagArray = i3841[4]
  i3840.m_ClosingTagArray = i3841[5]
  return i3840
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i3842 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i3843 = data
  var i3845 = i3843[0]
  var i3844 = []
  for(var i = 0; i < i3845.length; i += 1) {
    i3844.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i3845[i + 0]) );
  }
  i3842.files = i3844
  i3842.componentToPrefabIds = i3843[1]
  return i3842
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i3848 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i3849 = data
  i3848.path = i3849[0]
  request.r(i3849[1], i3849[2], 0, i3848, 'unityObject')
  return i3848
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i3850 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i3851 = data
  var i3853 = i3851[0]
  var i3852 = []
  for(var i = 0; i < i3853.length; i += 1) {
    i3852.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i3853[i + 0]) );
  }
  i3850.scriptsExecutionOrder = i3852
  var i3855 = i3851[1]
  var i3854 = []
  for(var i = 0; i < i3855.length; i += 1) {
    i3854.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i3855[i + 0]) );
  }
  i3850.sortingLayers = i3854
  var i3857 = i3851[2]
  var i3856 = []
  for(var i = 0; i < i3857.length; i += 1) {
    i3856.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i3857[i + 0]) );
  }
  i3850.cullingLayers = i3856
  i3850.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i3851[3], i3850.timeSettings)
  i3850.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i3851[4], i3850.physicsSettings)
  i3850.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i3851[5], i3850.physics2DSettings)
  i3850.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i3851[6], i3850.qualitySettings)
  i3850.enableRealtimeShadows = !!i3851[7]
  i3850.enableAutoInstancing = !!i3851[8]
  i3850.enableStaticBatching = !!i3851[9]
  i3850.enableDynamicBatching = !!i3851[10]
  i3850.lightmapEncodingQuality = i3851[11]
  i3850.desiredColorSpace = i3851[12]
  var i3859 = i3851[13]
  var i3858 = []
  for(var i = 0; i < i3859.length; i += 1) {
    i3858.push( i3859[i + 0] );
  }
  i3850.allTags = i3858
  return i3850
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i3862 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i3863 = data
  i3862.name = i3863[0]
  i3862.value = i3863[1]
  return i3862
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i3866 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i3867 = data
  i3866.id = i3867[0]
  i3866.name = i3867[1]
  i3866.value = i3867[2]
  return i3866
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i3870 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i3871 = data
  i3870.id = i3871[0]
  i3870.name = i3871[1]
  return i3870
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i3872 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i3873 = data
  i3872.fixedDeltaTime = i3873[0]
  i3872.maximumDeltaTime = i3873[1]
  i3872.timeScale = i3873[2]
  i3872.maximumParticleTimestep = i3873[3]
  return i3872
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i3874 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i3875 = data
  i3874.gravity = new pc.Vec3( i3875[0], i3875[1], i3875[2] )
  i3874.defaultSolverIterations = i3875[3]
  i3874.bounceThreshold = i3875[4]
  i3874.autoSyncTransforms = !!i3875[5]
  i3874.autoSimulation = !!i3875[6]
  var i3877 = i3875[7]
  var i3876 = []
  for(var i = 0; i < i3877.length; i += 1) {
    i3876.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i3877[i + 0]) );
  }
  i3874.collisionMatrix = i3876
  return i3874
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i3880 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i3881 = data
  i3880.enabled = !!i3881[0]
  i3880.layerId = i3881[1]
  i3880.otherLayerId = i3881[2]
  return i3880
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i3882 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i3883 = data
  request.r(i3883[0], i3883[1], 0, i3882, 'material')
  i3882.gravity = new pc.Vec2( i3883[2], i3883[3] )
  i3882.positionIterations = i3883[4]
  i3882.velocityIterations = i3883[5]
  i3882.velocityThreshold = i3883[6]
  i3882.maxLinearCorrection = i3883[7]
  i3882.maxAngularCorrection = i3883[8]
  i3882.maxTranslationSpeed = i3883[9]
  i3882.maxRotationSpeed = i3883[10]
  i3882.baumgarteScale = i3883[11]
  i3882.baumgarteTOIScale = i3883[12]
  i3882.timeToSleep = i3883[13]
  i3882.linearSleepTolerance = i3883[14]
  i3882.angularSleepTolerance = i3883[15]
  i3882.defaultContactOffset = i3883[16]
  i3882.autoSimulation = !!i3883[17]
  i3882.queriesHitTriggers = !!i3883[18]
  i3882.queriesStartInColliders = !!i3883[19]
  i3882.callbacksOnDisable = !!i3883[20]
  i3882.reuseCollisionCallbacks = !!i3883[21]
  i3882.autoSyncTransforms = !!i3883[22]
  var i3885 = i3883[23]
  var i3884 = []
  for(var i = 0; i < i3885.length; i += 1) {
    i3884.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i3885[i + 0]) );
  }
  i3882.collisionMatrix = i3884
  return i3882
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i3888 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i3889 = data
  i3888.enabled = !!i3889[0]
  i3888.layerId = i3889[1]
  i3888.otherLayerId = i3889[2]
  return i3888
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i3890 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i3891 = data
  var i3893 = i3891[0]
  var i3892 = []
  for(var i = 0; i < i3893.length; i += 1) {
    i3892.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i3893[i + 0]) );
  }
  i3890.qualityLevels = i3892
  var i3895 = i3891[1]
  var i3894 = []
  for(var i = 0; i < i3895.length; i += 1) {
    i3894.push( i3895[i + 0] );
  }
  i3890.names = i3894
  i3890.shadows = i3891[2]
  i3890.anisotropicFiltering = i3891[3]
  i3890.antiAliasing = i3891[4]
  i3890.lodBias = i3891[5]
  i3890.shadowCascades = i3891[6]
  i3890.shadowDistance = i3891[7]
  i3890.shadowmaskMode = i3891[8]
  i3890.shadowProjection = i3891[9]
  i3890.shadowResolution = i3891[10]
  i3890.softParticles = !!i3891[11]
  i3890.softVegetation = !!i3891[12]
  i3890.activeColorSpace = i3891[13]
  i3890.desiredColorSpace = i3891[14]
  i3890.masterTextureLimit = i3891[15]
  i3890.maxQueuedFrames = i3891[16]
  i3890.particleRaycastBudget = i3891[17]
  i3890.pixelLightCount = i3891[18]
  i3890.realtimeReflectionProbes = !!i3891[19]
  i3890.shadowCascade2Split = i3891[20]
  i3890.shadowCascade4Split = new pc.Vec3( i3891[21], i3891[22], i3891[23] )
  i3890.streamingMipmapsActive = !!i3891[24]
  i3890.vSyncCount = i3891[25]
  i3890.asyncUploadBufferSize = i3891[26]
  i3890.asyncUploadTimeSlice = i3891[27]
  i3890.billboardsFaceCameraPosition = !!i3891[28]
  i3890.shadowNearPlaneOffset = i3891[29]
  i3890.streamingMipmapsMemoryBudget = i3891[30]
  i3890.maximumLODLevel = i3891[31]
  i3890.streamingMipmapsAddAllCameras = !!i3891[32]
  i3890.streamingMipmapsMaxLevelReduction = i3891[33]
  i3890.streamingMipmapsRenderersPerFrame = i3891[34]
  i3890.resolutionScalingFixedDPIFactor = i3891[35]
  i3890.streamingMipmapsMaxFileIORequests = i3891[36]
  i3890.currentQualityLevel = i3891[37]
  return i3890
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i3900 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i3901 = data
  i3900.weight = i3901[0]
  i3900.vertices = i3901[1]
  i3900.normals = i3901[2]
  i3900.tangents = i3901[3]
  return i3900
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i3904 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i3905 = data
  i3904.mode = i3905[0]
  i3904.parameter = i3905[1]
  i3904.threshold = i3905[2]
  return i3904
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i3906 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i3907 = data
  i3906.m_XCoordinate = i3907[0]
  i3906.m_YCoordinate = i3907[1]
  return i3906
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i3908 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i3909 = data
  i3908.m_XPositionAdjustment = i3909[0]
  i3908.m_YPositionAdjustment = i3909[1]
  return i3908
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i3910 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i3911 = data
  i3910.xPlacement = i3911[0]
  i3910.yPlacement = i3911[1]
  i3910.xAdvance = i3911[2]
  i3910.yAdvance = i3911[3]
  return i3910
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2}}

Deserializers.requiredComponents = {"49":[50],"51":[50],"52":[50],"53":[50],"54":[50],"55":[50],"56":[57],"58":[2],"59":[60],"61":[60],"62":[60],"63":[60],"64":[60],"65":[60],"66":[67],"68":[67],"69":[67],"70":[67],"71":[67],"72":[67],"73":[67],"74":[67],"75":[67],"76":[67],"77":[67],"78":[67],"79":[67],"80":[2],"81":[24],"82":[83],"84":[83],"35":[23],"6":[2],"19":[85],"86":[67],"87":[88],"33":[85],"89":[12],"90":[2],"91":[92],"93":[41],"94":[35],"95":[23],"21":[24,23],"39":[23,38],"96":[23],"97":[38,23],"98":[24],"99":[38,23],"100":[23],"101":[102],"103":[102],"104":[102],"105":[23],"106":[23],"37":[35],"40":[38,23],"107":[23],"36":[35],"108":[23],"109":[23],"110":[23],"111":[23],"112":[23],"113":[23],"114":[23],"115":[23],"116":[23],"117":[38,23],"118":[23],"119":[23],"120":[23],"121":[23],"122":[38,23],"123":[23],"124":[41],"125":[41],"42":[41],"126":[41],"127":[2],"128":[2]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.MonoBehaviour","CameraFollow2D","AutoCameraFit","UnityEngine.Transform","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Mesh","UnityEngine.Material","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","MoveBetweenPoints","ScreenHeightPositionAnchor","UnityEngine.BoxCollider","ClickToStore","FavoritePlayerEndcard","TMPro.TextMeshPro","UnityEngine.GameObject","UnityEngine.RectTransform","UnityEngine.MeshRenderer","UnityEngine.EventSystems.UIBehaviour","TMPro.TMP_FontAsset","UnityEngine.MeshFilter","PlayerCardUIManager","Ply_SoundManager","UnityEngine.AudioSource","UnityEngine.AudioClip","FavoritePlayerManager","PlayerSlot","FavoritePlayerCard","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","TMPro.TextMeshProUGUI","UnityEngine.UI.Image","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.Font","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.Collider","BatStrikeController","SlotTrigger","UnityEngine.BoxCollider2D","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.InputSystem.UI.InputSystemUIInputModule","UnityEngine.InputSystem.UI.TrackedDeviceRaycaster","TMPro.TextContainer","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.38f1";

Deserializers.productName = "PLY_MiniSoccer";

Deserializers.lunaInitializationTime = "07/15/2026 03:53:54";

Deserializers.lunaDaysRunning = "1.3";

Deserializers.lunaVersion = "7.1.0";

Deserializers.lunaSHA = "cf93782349542fe0b84ad13951a26809f8419628";

Deserializers.creativeName = "PLY_MiniFootball_V12";

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

Deserializers.runtimeAnalysisExcludedMethodsCount = "4659";

Deserializers.runtimeAnalysisExcludedModules = "prefabs";

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

Deserializers.buildID = "f8e6de51-ea3a-4a24-960b-d542ae672a76";

Deserializers.runtimeInitializeOnLoadInfos = [[["Unity","Services","Core","Internal","UnityServicesInitializer","EnableServicesInitializationAsync"],["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["DG","Tweening","DOTween","RuntimeOnLoad"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["Unity","Services","Core","Registration","CorePackageInitializer","InitializeOnLoad"],["Unity","Services","Core","Internal","TaskAsyncOperation","SetScheduler"],["Unity","Services","Core","Environments","Client","Scheduler","EngineStateHelper","Init"],["Unity","Services","Core","Environments","Client","Scheduler","ThreadHelper","Init"],["Ua2CoreInitializeCallback","Register"],["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["Unity","AI","Navigation","NavMeshLink","ClearTrackedList"],["Unity","AI","Navigation","NavMeshSurface","ClearNavMeshSurfaces"],["Unity","AI","Navigation","NavMeshModifierVolume","ClearNavMeshModifiers"],["Unity","AI","Navigation","NavMeshModifier","ClearNavMeshModifiers"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["Unity","Services","Core","Internal","UnityServicesInitializer","CreateStaticInstance"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[["Unity","Services","Core","Environments","Client","Http","JsonHelpers","RegisterTypesForAOT"]],[["Unity","Services","Core","UnityThreadUtils","CaptureUnityThreadInfo"],["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

