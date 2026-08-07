var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i3340 = root || request.c( 'UnityEngine.JointSpring' )
  var i3341 = data
  i3340.spring = i3341[0]
  i3340.damper = i3341[1]
  i3340.targetPosition = i3341[2]
  return i3340
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i3342 = root || request.c( 'UnityEngine.JointMotor' )
  var i3343 = data
  i3342.m_TargetVelocity = i3343[0]
  i3342.m_Force = i3343[1]
  i3342.m_FreeSpin = i3343[2]
  return i3342
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i3344 = root || request.c( 'UnityEngine.JointLimits' )
  var i3345 = data
  i3344.m_Min = i3345[0]
  i3344.m_Max = i3345[1]
  i3344.m_Bounciness = i3345[2]
  i3344.m_BounceMinVelocity = i3345[3]
  i3344.m_ContactDistance = i3345[4]
  i3344.minBounce = i3345[5]
  i3344.maxBounce = i3345[6]
  return i3344
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i3346 = root || request.c( 'UnityEngine.JointDrive' )
  var i3347 = data
  i3346.m_PositionSpring = i3347[0]
  i3346.m_PositionDamper = i3347[1]
  i3346.m_MaximumForce = i3347[2]
  i3346.m_UseAcceleration = i3347[3]
  return i3346
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i3348 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i3349 = data
  i3348.m_Spring = i3349[0]
  i3348.m_Damper = i3349[1]
  return i3348
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i3350 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i3351 = data
  i3350.m_Limit = i3351[0]
  i3350.m_Bounciness = i3351[1]
  i3350.m_ContactDistance = i3351[2]
  return i3350
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i3352 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i3353 = data
  i3352.m_ExtremumSlip = i3353[0]
  i3352.m_ExtremumValue = i3353[1]
  i3352.m_AsymptoteSlip = i3353[2]
  i3352.m_AsymptoteValue = i3353[3]
  i3352.m_Stiffness = i3353[4]
  return i3352
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i3354 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i3355 = data
  i3354.m_LowerAngle = i3355[0]
  i3354.m_UpperAngle = i3355[1]
  return i3354
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i3356 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i3357 = data
  i3356.m_MotorSpeed = i3357[0]
  i3356.m_MaximumMotorTorque = i3357[1]
  return i3356
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i3358 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i3359 = data
  i3358.m_DampingRatio = i3359[0]
  i3358.m_Frequency = i3359[1]
  i3358.m_Angle = i3359[2]
  return i3358
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i3360 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i3361 = data
  i3360.m_LowerTranslation = i3361[0]
  i3360.m_UpperTranslation = i3361[1]
  return i3360
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i3362 = root || new pc.UnityMaterial()
  var i3363 = data
  i3362.name = i3363[0]
  request.r(i3363[1], i3363[2], 0, i3362, 'shader')
  i3362.renderQueue = i3363[3]
  i3362.enableInstancing = !!i3363[4]
  var i3365 = i3363[5]
  var i3364 = []
  for(var i = 0; i < i3365.length; i += 1) {
    i3364.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i3365[i + 0]) );
  }
  i3362.floatParameters = i3364
  var i3367 = i3363[6]
  var i3366 = []
  for(var i = 0; i < i3367.length; i += 1) {
    i3366.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i3367[i + 0]) );
  }
  i3362.colorParameters = i3366
  var i3369 = i3363[7]
  var i3368 = []
  for(var i = 0; i < i3369.length; i += 1) {
    i3368.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i3369[i + 0]) );
  }
  i3362.vectorParameters = i3368
  var i3371 = i3363[8]
  var i3370 = []
  for(var i = 0; i < i3371.length; i += 1) {
    i3370.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i3371[i + 0]) );
  }
  i3362.textureParameters = i3370
  var i3373 = i3363[9]
  var i3372 = []
  for(var i = 0; i < i3373.length; i += 1) {
    i3372.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i3373[i + 0]) );
  }
  i3362.materialFlags = i3372
  return i3362
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i3376 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i3377 = data
  i3376.name = i3377[0]
  i3376.value = i3377[1]
  return i3376
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i3380 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i3381 = data
  i3380.name = i3381[0]
  i3380.value = new pc.Color(i3381[1], i3381[2], i3381[3], i3381[4])
  return i3380
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i3384 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i3385 = data
  i3384.name = i3385[0]
  i3384.value = new pc.Vec4( i3385[1], i3385[2], i3385[3], i3385[4] )
  return i3384
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i3388 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i3389 = data
  i3388.name = i3389[0]
  request.r(i3389[1], i3389[2], 0, i3388, 'value')
  return i3388
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i3392 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i3393 = data
  i3392.name = i3393[0]
  i3392.enabled = !!i3393[1]
  return i3392
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i3394 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i3395 = data
  i3394.name = i3395[0]
  i3394.width = i3395[1]
  i3394.height = i3395[2]
  i3394.mipmapCount = i3395[3]
  i3394.anisoLevel = i3395[4]
  i3394.filterMode = i3395[5]
  i3394.hdr = !!i3395[6]
  i3394.format = i3395[7]
  i3394.wrapMode = i3395[8]
  i3394.alphaIsTransparency = !!i3395[9]
  i3394.alphaSource = i3395[10]
  i3394.graphicsFormat = i3395[11]
  i3394.sRGBTexture = !!i3395[12]
  i3394.desiredColorSpace = i3395[13]
  i3394.wrapU = i3395[14]
  i3394.wrapV = i3395[15]
  return i3394
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i3396 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i3397 = data
  i3396.name = i3397[0]
  i3396.halfPrecision = !!i3397[1]
  i3396.useSimplification = !!i3397[2]
  i3396.useUInt32IndexFormat = !!i3397[3]
  i3396.vertexCount = i3397[4]
  i3396.aabb = i3397[5]
  var i3399 = i3397[6]
  var i3398 = []
  for(var i = 0; i < i3399.length; i += 1) {
    i3398.push( !!i3399[i + 0] );
  }
  i3396.streams = i3398
  i3396.vertices = i3397[7]
  var i3401 = i3397[8]
  var i3400 = []
  for(var i = 0; i < i3401.length; i += 1) {
    i3400.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i3401[i + 0]) );
  }
  i3396.subMeshes = i3400
  var i3403 = i3397[9]
  var i3402 = []
  for(var i = 0; i < i3403.length; i += 16) {
    i3402.push( new pc.Mat4().setData(i3403[i + 0], i3403[i + 1], i3403[i + 2], i3403[i + 3],  i3403[i + 4], i3403[i + 5], i3403[i + 6], i3403[i + 7],  i3403[i + 8], i3403[i + 9], i3403[i + 10], i3403[i + 11],  i3403[i + 12], i3403[i + 13], i3403[i + 14], i3403[i + 15]) );
  }
  i3396.bindposes = i3402
  var i3405 = i3397[10]
  var i3404 = []
  for(var i = 0; i < i3405.length; i += 1) {
    i3404.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i3405[i + 0]) );
  }
  i3396.blendShapes = i3404
  return i3396
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i3410 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i3411 = data
  i3410.triangles = i3411[0]
  return i3410
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i3416 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i3417 = data
  i3416.name = i3417[0]
  var i3419 = i3417[1]
  var i3418 = []
  for(var i = 0; i < i3419.length; i += 1) {
    i3418.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i3419[i + 0]) );
  }
  i3416.frames = i3418
  return i3416
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i3420 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i3421 = data
  i3420.name = i3421[0]
  i3420.index = i3421[1]
  i3420.startup = !!i3421[2]
  return i3420
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i3422 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i3423 = data
  i3422.aspect = i3423[0]
  i3422.orthographic = !!i3423[1]
  i3422.orthographicSize = i3423[2]
  i3422.backgroundColor = new pc.Color(i3423[3], i3423[4], i3423[5], i3423[6])
  i3422.nearClipPlane = i3423[7]
  i3422.farClipPlane = i3423[8]
  i3422.fieldOfView = i3423[9]
  i3422.depth = i3423[10]
  i3422.clearFlags = i3423[11]
  i3422.cullingMask = i3423[12]
  i3422.rect = i3423[13]
  request.r(i3423[14], i3423[15], 0, i3422, 'targetTexture')
  i3422.usePhysicalProperties = !!i3423[16]
  i3422.focalLength = i3423[17]
  i3422.sensorSize = new pc.Vec2( i3423[18], i3423[19] )
  i3422.lensShift = new pc.Vec2( i3423[20], i3423[21] )
  i3422.gateFit = i3423[22]
  i3422.commandBufferCount = i3423[23]
  i3422.cameraType = i3423[24]
  i3422.enabled = !!i3423[25]
  return i3422
}

Deserializers["CameraFollow2D"] = function (request, data, root) {
  var i3424 = root || request.c( 'CameraFollow2D' )
  var i3425 = data
  request.r(i3425[0], i3425[1], 0, i3424, 'target')
  i3424.smoothSpeed = i3425[2]
  i3424.offset = new pc.Vec3( i3425[3], i3425[4], i3425[5] )
  i3424.followY = !!i3425[6]
  return i3424
}

Deserializers["AutoCameraFit"] = function (request, data, root) {
  var i3426 = root || request.c( 'AutoCameraFit' )
  var i3427 = data
  request.r(i3427[0], i3427[1], 0, i3426, 'tallScreenObject')
  i3426.tallScreenRatioThreshold = i3427[2]
  i3426.tallScreenYOffset = i3427[3]
  request.r(i3427[4], i3427[5], 0, i3426, 'canvasBtn')
  request.r(i3427[6], i3427[7], 0, i3426, 'targetArea')
  i3426.paddingLandscape = i3427[8]
  i3426.paddingPortrait = i3427[9]
  i3426.extraPaddingSmallScreen = i3427[10]
  i3426.smallScreenThreshold = i3427[11]
  i3426.autoUpdateOnResize = !!i3427[12]
  i3426.adjustInEditMode = !!i3427[13]
  return i3426
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i3428 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i3429 = data
  i3428.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i3429[0], i3428.main)
  i3428.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i3429[1], i3428.colorBySpeed)
  i3428.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i3429[2], i3428.colorOverLifetime)
  i3428.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i3429[3], i3428.emission)
  i3428.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i3429[4], i3428.rotationBySpeed)
  i3428.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i3429[5], i3428.rotationOverLifetime)
  i3428.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i3429[6], i3428.shape)
  i3428.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i3429[7], i3428.sizeBySpeed)
  i3428.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i3429[8], i3428.sizeOverLifetime)
  i3428.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i3429[9], i3428.textureSheetAnimation)
  i3428.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i3429[10], i3428.velocityOverLifetime)
  i3428.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i3429[11], i3428.noise)
  i3428.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i3429[12], i3428.inheritVelocity)
  i3428.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i3429[13], i3428.forceOverLifetime)
  i3428.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i3429[14], i3428.limitVelocityOverLifetime)
  i3428.useAutoRandomSeed = !!i3429[15]
  i3428.randomSeed = i3429[16]
  return i3428
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i3430 = root || new pc.ParticleSystemMain()
  var i3431 = data
  i3430.duration = i3431[0]
  i3430.loop = !!i3431[1]
  i3430.prewarm = !!i3431[2]
  i3430.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3431[3], i3430.startDelay)
  i3430.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3431[4], i3430.startLifetime)
  i3430.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3431[5], i3430.startSpeed)
  i3430.startSize3D = !!i3431[6]
  i3430.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3431[7], i3430.startSizeX)
  i3430.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3431[8], i3430.startSizeY)
  i3430.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3431[9], i3430.startSizeZ)
  i3430.startRotation3D = !!i3431[10]
  i3430.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3431[11], i3430.startRotationX)
  i3430.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3431[12], i3430.startRotationY)
  i3430.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3431[13], i3430.startRotationZ)
  i3430.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i3431[14], i3430.startColor)
  i3430.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3431[15], i3430.gravityModifier)
  i3430.simulationSpace = i3431[16]
  request.r(i3431[17], i3431[18], 0, i3430, 'customSimulationSpace')
  i3430.simulationSpeed = i3431[19]
  i3430.useUnscaledTime = !!i3431[20]
  i3430.scalingMode = i3431[21]
  i3430.playOnAwake = !!i3431[22]
  i3430.maxParticles = i3431[23]
  i3430.emitterVelocityMode = i3431[24]
  i3430.stopAction = i3431[25]
  return i3430
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i3432 = root || new pc.MinMaxCurve()
  var i3433 = data
  i3432.mode = i3433[0]
  i3432.curveMin = new pc.AnimationCurve( { keys_flow: i3433[1] } )
  i3432.curveMax = new pc.AnimationCurve( { keys_flow: i3433[2] } )
  i3432.curveMultiplier = i3433[3]
  i3432.constantMin = i3433[4]
  i3432.constantMax = i3433[5]
  return i3432
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i3434 = root || new pc.MinMaxGradient()
  var i3435 = data
  i3434.mode = i3435[0]
  i3434.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i3435[1], i3434.gradientMin)
  i3434.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i3435[2], i3434.gradientMax)
  i3434.colorMin = new pc.Color(i3435[3], i3435[4], i3435[5], i3435[6])
  i3434.colorMax = new pc.Color(i3435[7], i3435[8], i3435[9], i3435[10])
  return i3434
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i3436 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i3437 = data
  i3436.mode = i3437[0]
  var i3439 = i3437[1]
  var i3438 = []
  for(var i = 0; i < i3439.length; i += 1) {
    i3438.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i3439[i + 0]) );
  }
  i3436.colorKeys = i3438
  var i3441 = i3437[2]
  var i3440 = []
  for(var i = 0; i < i3441.length; i += 1) {
    i3440.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i3441[i + 0]) );
  }
  i3436.alphaKeys = i3440
  return i3436
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i3442 = root || new pc.ParticleSystemColorBySpeed()
  var i3443 = data
  i3442.enabled = !!i3443[0]
  i3442.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i3443[1], i3442.color)
  i3442.range = new pc.Vec2( i3443[2], i3443[3] )
  return i3442
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i3446 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i3447 = data
  i3446.color = new pc.Color(i3447[0], i3447[1], i3447[2], i3447[3])
  i3446.time = i3447[4]
  return i3446
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i3450 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i3451 = data
  i3450.alpha = i3451[0]
  i3450.time = i3451[1]
  return i3450
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i3452 = root || new pc.ParticleSystemColorOverLifetime()
  var i3453 = data
  i3452.enabled = !!i3453[0]
  i3452.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i3453[1], i3452.color)
  return i3452
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i3454 = root || new pc.ParticleSystemEmitter()
  var i3455 = data
  i3454.enabled = !!i3455[0]
  i3454.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3455[1], i3454.rateOverTime)
  i3454.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3455[2], i3454.rateOverDistance)
  var i3457 = i3455[3]
  var i3456 = []
  for(var i = 0; i < i3457.length; i += 1) {
    i3456.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i3457[i + 0]) );
  }
  i3454.bursts = i3456
  return i3454
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i3460 = root || new pc.ParticleSystemBurst()
  var i3461 = data
  i3460.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3461[0], i3460.count)
  i3460.cycleCount = i3461[1]
  i3460.minCount = i3461[2]
  i3460.maxCount = i3461[3]
  i3460.repeatInterval = i3461[4]
  i3460.time = i3461[5]
  return i3460
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i3462 = root || new pc.ParticleSystemRotationBySpeed()
  var i3463 = data
  i3462.enabled = !!i3463[0]
  i3462.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3463[1], i3462.x)
  i3462.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3463[2], i3462.y)
  i3462.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3463[3], i3462.z)
  i3462.separateAxes = !!i3463[4]
  i3462.range = new pc.Vec2( i3463[5], i3463[6] )
  return i3462
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i3464 = root || new pc.ParticleSystemRotationOverLifetime()
  var i3465 = data
  i3464.enabled = !!i3465[0]
  i3464.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3465[1], i3464.x)
  i3464.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3465[2], i3464.y)
  i3464.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3465[3], i3464.z)
  i3464.separateAxes = !!i3465[4]
  return i3464
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i3466 = root || new pc.ParticleSystemShape()
  var i3467 = data
  i3466.enabled = !!i3467[0]
  i3466.shapeType = i3467[1]
  i3466.randomDirectionAmount = i3467[2]
  i3466.sphericalDirectionAmount = i3467[3]
  i3466.randomPositionAmount = i3467[4]
  i3466.alignToDirection = !!i3467[5]
  i3466.radius = i3467[6]
  i3466.radiusMode = i3467[7]
  i3466.radiusSpread = i3467[8]
  i3466.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3467[9], i3466.radiusSpeed)
  i3466.radiusThickness = i3467[10]
  i3466.angle = i3467[11]
  i3466.length = i3467[12]
  i3466.boxThickness = new pc.Vec3( i3467[13], i3467[14], i3467[15] )
  i3466.meshShapeType = i3467[16]
  request.r(i3467[17], i3467[18], 0, i3466, 'mesh')
  request.r(i3467[19], i3467[20], 0, i3466, 'meshRenderer')
  request.r(i3467[21], i3467[22], 0, i3466, 'skinnedMeshRenderer')
  i3466.useMeshMaterialIndex = !!i3467[23]
  i3466.meshMaterialIndex = i3467[24]
  i3466.useMeshColors = !!i3467[25]
  i3466.normalOffset = i3467[26]
  i3466.arc = i3467[27]
  i3466.arcMode = i3467[28]
  i3466.arcSpread = i3467[29]
  i3466.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3467[30], i3466.arcSpeed)
  i3466.donutRadius = i3467[31]
  i3466.position = new pc.Vec3( i3467[32], i3467[33], i3467[34] )
  i3466.rotation = new pc.Vec3( i3467[35], i3467[36], i3467[37] )
  i3466.scale = new pc.Vec3( i3467[38], i3467[39], i3467[40] )
  return i3466
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i3468 = root || new pc.ParticleSystemSizeBySpeed()
  var i3469 = data
  i3468.enabled = !!i3469[0]
  i3468.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3469[1], i3468.x)
  i3468.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3469[2], i3468.y)
  i3468.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3469[3], i3468.z)
  i3468.separateAxes = !!i3469[4]
  i3468.range = new pc.Vec2( i3469[5], i3469[6] )
  return i3468
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i3470 = root || new pc.ParticleSystemSizeOverLifetime()
  var i3471 = data
  i3470.enabled = !!i3471[0]
  i3470.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3471[1], i3470.x)
  i3470.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3471[2], i3470.y)
  i3470.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3471[3], i3470.z)
  i3470.separateAxes = !!i3471[4]
  return i3470
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i3472 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i3473 = data
  i3472.enabled = !!i3473[0]
  i3472.mode = i3473[1]
  i3472.animation = i3473[2]
  i3472.numTilesX = i3473[3]
  i3472.numTilesY = i3473[4]
  i3472.useRandomRow = !!i3473[5]
  i3472.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3473[6], i3472.frameOverTime)
  i3472.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3473[7], i3472.startFrame)
  i3472.cycleCount = i3473[8]
  i3472.rowIndex = i3473[9]
  i3472.flipU = i3473[10]
  i3472.flipV = i3473[11]
  i3472.spriteCount = i3473[12]
  var i3475 = i3473[13]
  var i3474 = []
  for(var i = 0; i < i3475.length; i += 2) {
  request.r(i3475[i + 0], i3475[i + 1], 2, i3474, '')
  }
  i3472.sprites = i3474
  return i3472
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i3478 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i3479 = data
  i3478.enabled = !!i3479[0]
  i3478.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3479[1], i3478.x)
  i3478.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3479[2], i3478.y)
  i3478.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3479[3], i3478.z)
  i3478.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3479[4], i3478.radial)
  i3478.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3479[5], i3478.speedModifier)
  i3478.space = i3479[6]
  i3478.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3479[7], i3478.orbitalX)
  i3478.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3479[8], i3478.orbitalY)
  i3478.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3479[9], i3478.orbitalZ)
  i3478.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3479[10], i3478.orbitalOffsetX)
  i3478.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3479[11], i3478.orbitalOffsetY)
  i3478.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3479[12], i3478.orbitalOffsetZ)
  return i3478
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i3480 = root || new pc.ParticleSystemNoise()
  var i3481 = data
  i3480.enabled = !!i3481[0]
  i3480.separateAxes = !!i3481[1]
  i3480.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3481[2], i3480.strengthX)
  i3480.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3481[3], i3480.strengthY)
  i3480.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3481[4], i3480.strengthZ)
  i3480.frequency = i3481[5]
  i3480.damping = !!i3481[6]
  i3480.octaveCount = i3481[7]
  i3480.octaveMultiplier = i3481[8]
  i3480.octaveScale = i3481[9]
  i3480.quality = i3481[10]
  i3480.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3481[11], i3480.scrollSpeed)
  i3480.scrollSpeedMultiplier = i3481[12]
  i3480.remapEnabled = !!i3481[13]
  i3480.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3481[14], i3480.remapX)
  i3480.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3481[15], i3480.remapY)
  i3480.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3481[16], i3480.remapZ)
  i3480.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3481[17], i3480.positionAmount)
  i3480.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3481[18], i3480.rotationAmount)
  i3480.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3481[19], i3480.sizeAmount)
  return i3480
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i3482 = root || new pc.ParticleSystemInheritVelocity()
  var i3483 = data
  i3482.enabled = !!i3483[0]
  i3482.mode = i3483[1]
  i3482.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3483[2], i3482.curve)
  return i3482
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i3484 = root || new pc.ParticleSystemForceOverLifetime()
  var i3485 = data
  i3484.enabled = !!i3485[0]
  i3484.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3485[1], i3484.x)
  i3484.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3485[2], i3484.y)
  i3484.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3485[3], i3484.z)
  i3484.space = i3485[4]
  i3484.randomized = !!i3485[5]
  return i3484
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i3486 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i3487 = data
  i3486.enabled = !!i3487[0]
  i3486.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3487[1], i3486.limit)
  i3486.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3487[2], i3486.limitX)
  i3486.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3487[3], i3486.limitY)
  i3486.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3487[4], i3486.limitZ)
  i3486.dampen = i3487[5]
  i3486.separateAxes = !!i3487[6]
  i3486.space = i3487[7]
  i3486.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3487[8], i3486.drag)
  i3486.multiplyDragByParticleSize = !!i3487[9]
  i3486.multiplyDragByParticleVelocity = !!i3487[10]
  return i3486
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i3488 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i3489 = data
  request.r(i3489[0], i3489[1], 0, i3488, 'mesh')
  i3488.meshCount = i3489[2]
  i3488.activeVertexStreamsCount = i3489[3]
  i3488.alignment = i3489[4]
  i3488.renderMode = i3489[5]
  i3488.sortMode = i3489[6]
  i3488.lengthScale = i3489[7]
  i3488.velocityScale = i3489[8]
  i3488.cameraVelocityScale = i3489[9]
  i3488.normalDirection = i3489[10]
  i3488.sortingFudge = i3489[11]
  i3488.minParticleSize = i3489[12]
  i3488.maxParticleSize = i3489[13]
  i3488.pivot = new pc.Vec3( i3489[14], i3489[15], i3489[16] )
  request.r(i3489[17], i3489[18], 0, i3488, 'trailMaterial')
  i3488.applyActiveColorSpace = !!i3489[19]
  i3488.enabled = !!i3489[20]
  request.r(i3489[21], i3489[22], 0, i3488, 'sharedMaterial')
  var i3491 = i3489[23]
  var i3490 = []
  for(var i = 0; i < i3491.length; i += 2) {
  request.r(i3491[i + 0], i3491[i + 1], 2, i3490, '')
  }
  i3488.sharedMaterials = i3490
  i3488.receiveShadows = !!i3489[24]
  i3488.shadowCastingMode = i3489[25]
  i3488.sortingLayerID = i3489[26]
  i3488.sortingOrder = i3489[27]
  i3488.lightmapIndex = i3489[28]
  i3488.lightmapSceneIndex = i3489[29]
  i3488.lightmapScaleOffset = new pc.Vec4( i3489[30], i3489[31], i3489[32], i3489[33] )
  i3488.lightProbeUsage = i3489[34]
  i3488.reflectionProbeUsage = i3489[35]
  return i3488
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i3494 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i3495 = data
  i3494.name = i3495[0]
  i3494.tagId = i3495[1]
  i3494.enabled = !!i3495[2]
  i3494.isStatic = !!i3495[3]
  i3494.layer = i3495[4]
  return i3494
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i3496 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i3497 = data
  i3496.color = new pc.Color(i3497[0], i3497[1], i3497[2], i3497[3])
  request.r(i3497[4], i3497[5], 0, i3496, 'sprite')
  i3496.flipX = !!i3497[6]
  i3496.flipY = !!i3497[7]
  i3496.drawMode = i3497[8]
  i3496.size = new pc.Vec2( i3497[9], i3497[10] )
  i3496.tileMode = i3497[11]
  i3496.adaptiveModeThreshold = i3497[12]
  i3496.maskInteraction = i3497[13]
  i3496.spriteSortPoint = i3497[14]
  i3496.enabled = !!i3497[15]
  request.r(i3497[16], i3497[17], 0, i3496, 'sharedMaterial')
  var i3499 = i3497[18]
  var i3498 = []
  for(var i = 0; i < i3499.length; i += 2) {
  request.r(i3499[i + 0], i3499[i + 1], 2, i3498, '')
  }
  i3496.sharedMaterials = i3498
  i3496.receiveShadows = !!i3497[19]
  i3496.shadowCastingMode = i3497[20]
  i3496.sortingLayerID = i3497[21]
  i3496.sortingOrder = i3497[22]
  i3496.lightmapIndex = i3497[23]
  i3496.lightmapSceneIndex = i3497[24]
  i3496.lightmapScaleOffset = new pc.Vec4( i3497[25], i3497[26], i3497[27], i3497[28] )
  i3496.lightProbeUsage = i3497[29]
  i3496.reflectionProbeUsage = i3497[30]
  return i3496
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i3500 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i3501 = data
  request.r(i3501[0], i3501[1], 0, i3500, 'animatorController')
  request.r(i3501[2], i3501[3], 0, i3500, 'avatar')
  i3500.updateMode = i3501[4]
  i3500.hasTransformHierarchy = !!i3501[5]
  i3500.applyRootMotion = !!i3501[6]
  var i3503 = i3501[7]
  var i3502 = []
  for(var i = 0; i < i3503.length; i += 2) {
  request.r(i3503[i + 0], i3503[i + 1], 2, i3502, '')
  }
  i3500.humanBones = i3502
  i3500.enabled = !!i3501[8]
  return i3500
}

Deserializers["MoveBetweenPoints"] = function (request, data, root) {
  var i3506 = root || request.c( 'MoveBetweenPoints' )
  var i3507 = data
  request.r(i3507[0], i3507[1], 0, i3506, 'pointA')
  request.r(i3507[2], i3507[3], 0, i3506, 'pointB')
  i3506.duration = i3507[4]
  return i3506
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i3508 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i3509 = data
  i3508.pivot = new pc.Vec2( i3509[0], i3509[1] )
  i3508.anchorMin = new pc.Vec2( i3509[2], i3509[3] )
  i3508.anchorMax = new pc.Vec2( i3509[4], i3509[5] )
  i3508.sizeDelta = new pc.Vec2( i3509[6], i3509[7] )
  i3508.anchoredPosition3D = new pc.Vec3( i3509[8], i3509[9], i3509[10] )
  i3508.rotation = new pc.Quat(i3509[11], i3509[12], i3509[13], i3509[14])
  i3508.scale = new pc.Vec3( i3509[15], i3509[16], i3509[17] )
  return i3508
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i3510 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i3511 = data
  request.r(i3511[0], i3511[1], 0, i3510, 'additionalVertexStreams')
  i3510.enabled = !!i3511[2]
  request.r(i3511[3], i3511[4], 0, i3510, 'sharedMaterial')
  var i3513 = i3511[5]
  var i3512 = []
  for(var i = 0; i < i3513.length; i += 2) {
  request.r(i3513[i + 0], i3513[i + 1], 2, i3512, '')
  }
  i3510.sharedMaterials = i3512
  i3510.receiveShadows = !!i3511[6]
  i3510.shadowCastingMode = i3511[7]
  i3510.sortingLayerID = i3511[8]
  i3510.sortingOrder = i3511[9]
  i3510.lightmapIndex = i3511[10]
  i3510.lightmapSceneIndex = i3511[11]
  i3510.lightmapScaleOffset = new pc.Vec4( i3511[12], i3511[13], i3511[14], i3511[15] )
  i3510.lightProbeUsage = i3511[16]
  i3510.reflectionProbeUsage = i3511[17]
  return i3510
}

Deserializers["TMPro.TextMeshPro"] = function (request, data, root) {
  var i3514 = root || request.c( 'TMPro.TextMeshPro' )
  var i3515 = data
  i3514._SortingLayer = i3515[0]
  i3514._SortingLayerID = i3515[1]
  i3514._SortingOrder = i3515[2]
  i3514.m_hasFontAssetChanged = !!i3515[3]
  request.r(i3515[4], i3515[5], 0, i3514, 'm_renderer')
  i3514.m_maskType = i3515[6]
  i3514.m_text = i3515[7]
  i3514.m_isRightToLeft = !!i3515[8]
  request.r(i3515[9], i3515[10], 0, i3514, 'm_fontAsset')
  request.r(i3515[11], i3515[12], 0, i3514, 'm_sharedMaterial')
  var i3517 = i3515[13]
  var i3516 = []
  for(var i = 0; i < i3517.length; i += 2) {
  request.r(i3517[i + 0], i3517[i + 1], 2, i3516, '')
  }
  i3514.m_fontSharedMaterials = i3516
  request.r(i3515[14], i3515[15], 0, i3514, 'm_fontMaterial')
  var i3519 = i3515[16]
  var i3518 = []
  for(var i = 0; i < i3519.length; i += 2) {
  request.r(i3519[i + 0], i3519[i + 1], 2, i3518, '')
  }
  i3514.m_fontMaterials = i3518
  i3514.m_fontColor32 = UnityEngine.Color32.ConstructColor(i3515[17], i3515[18], i3515[19], i3515[20])
  i3514.m_fontColor = new pc.Color(i3515[21], i3515[22], i3515[23], i3515[24])
  i3514.m_enableVertexGradient = !!i3515[25]
  i3514.m_colorMode = i3515[26]
  i3514.m_fontColorGradient = request.d('TMPro.VertexGradient', i3515[27], i3514.m_fontColorGradient)
  request.r(i3515[28], i3515[29], 0, i3514, 'm_fontColorGradientPreset')
  request.r(i3515[30], i3515[31], 0, i3514, 'm_spriteAsset')
  i3514.m_tintAllSprites = !!i3515[32]
  request.r(i3515[33], i3515[34], 0, i3514, 'm_StyleSheet')
  i3514.m_TextStyleHashCode = i3515[35]
  i3514.m_overrideHtmlColors = !!i3515[36]
  i3514.m_faceColor = UnityEngine.Color32.ConstructColor(i3515[37], i3515[38], i3515[39], i3515[40])
  i3514.m_fontSize = i3515[41]
  i3514.m_fontSizeBase = i3515[42]
  i3514.m_fontWeight = i3515[43]
  i3514.m_enableAutoSizing = !!i3515[44]
  i3514.m_fontSizeMin = i3515[45]
  i3514.m_fontSizeMax = i3515[46]
  i3514.m_fontStyle = i3515[47]
  i3514.m_HorizontalAlignment = i3515[48]
  i3514.m_VerticalAlignment = i3515[49]
  i3514.m_textAlignment = i3515[50]
  i3514.m_characterSpacing = i3515[51]
  i3514.m_wordSpacing = i3515[52]
  i3514.m_lineSpacing = i3515[53]
  i3514.m_lineSpacingMax = i3515[54]
  i3514.m_paragraphSpacing = i3515[55]
  i3514.m_charWidthMaxAdj = i3515[56]
  i3514.m_TextWrappingMode = i3515[57]
  i3514.m_wordWrappingRatios = i3515[58]
  i3514.m_overflowMode = i3515[59]
  request.r(i3515[60], i3515[61], 0, i3514, 'm_linkedTextComponent')
  request.r(i3515[62], i3515[63], 0, i3514, 'parentLinkedComponent')
  i3514.m_enableKerning = !!i3515[64]
  var i3521 = i3515[65]
  var i3520 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i3521.length; i += 1) {
    i3520.add(i3521[i + 0]);
  }
  i3514.m_ActiveFontFeatures = i3520
  i3514.m_enableExtraPadding = !!i3515[66]
  i3514.checkPaddingRequired = !!i3515[67]
  i3514.m_isRichText = !!i3515[68]
  i3514.m_parseCtrlCharacters = !!i3515[69]
  i3514.m_isOrthographic = !!i3515[70]
  i3514.m_isCullingEnabled = !!i3515[71]
  i3514.m_horizontalMapping = i3515[72]
  i3514.m_verticalMapping = i3515[73]
  i3514.m_uvLineOffset = i3515[74]
  i3514.m_geometrySortingOrder = i3515[75]
  i3514.m_IsTextObjectScaleStatic = !!i3515[76]
  i3514.m_VertexBufferAutoSizeReduction = !!i3515[77]
  i3514.m_useMaxVisibleDescender = !!i3515[78]
  i3514.m_pageToDisplay = i3515[79]
  i3514.m_margin = new pc.Vec4( i3515[80], i3515[81], i3515[82], i3515[83] )
  i3514.m_isUsingLegacyAnimationComponent = !!i3515[84]
  i3514.m_isVolumetricText = !!i3515[85]
  request.r(i3515[86], i3515[87], 0, i3514, 'm_Material')
  i3514.m_EmojiFallbackSupport = !!i3515[88]
  i3514.m_Maskable = !!i3515[89]
  i3514.m_Color = new pc.Color(i3515[90], i3515[91], i3515[92], i3515[93])
  i3514.m_RaycastTarget = !!i3515[94]
  i3514.m_RaycastPadding = new pc.Vec4( i3515[95], i3515[96], i3515[97], i3515[98] )
  return i3514
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i3522 = root || request.c( 'TMPro.VertexGradient' )
  var i3523 = data
  i3522.topLeft = new pc.Color(i3523[0], i3523[1], i3523[2], i3523[3])
  i3522.topRight = new pc.Color(i3523[4], i3523[5], i3523[6], i3523[7])
  i3522.bottomLeft = new pc.Color(i3523[8], i3523[9], i3523[10], i3523[11])
  i3522.bottomRight = new pc.Color(i3523[12], i3523[13], i3523[14], i3523[15])
  return i3522
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i3526 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i3527 = data
  request.r(i3527[0], i3527[1], 0, i3526, 'sharedMesh')
  return i3526
}

Deserializers["PlayerCardUIManager"] = function (request, data, root) {
  var i3528 = root || request.c( 'PlayerCardUIManager' )
  var i3529 = data
  request.r(i3529[0], i3529[1], 0, i3528, 'cardPanel')
  var i3531 = i3529[2]
  var i3530 = []
  for(var i = 0; i < i3531.length; i += 2) {
  request.r(i3531[i + 0], i3531[i + 1], 2, i3530, '')
  }
  i3528.extraObjectsToActivate = i3530
  i3528.waitTime = i3529[3]
  var i3533 = i3529[4]
  var i3532 = []
  for(var i = 0; i < i3533.length; i += 2) {
  request.r(i3533[i + 0], i3533[i + 1], 2, i3532, '')
  }
  i3528.objectsToTurnOnAfterWait = i3532
  var i3535 = i3529[5]
  var i3534 = []
  for(var i = 0; i < i3535.length; i += 2) {
  request.r(i3535[i + 0], i3535[i + 1], 2, i3534, '')
  }
  i3528.objectsToTurnOffAfterWait = i3534
  request.r(i3529[6], i3529[7], 0, i3528, 'playerNameText')
  request.r(i3529[8], i3529[9], 0, i3528, 'playerImage')
  return i3528
}

Deserializers["Ply_SoundManager"] = function (request, data, root) {
  var i3538 = root || request.c( 'Ply_SoundManager' )
  var i3539 = data
  i3538.fxAudio = request.d('FxAudio', i3539[0], i3538.fxAudio)
  request.r(i3539[1], i3539[2], 0, i3538, 'bgm1')
  return i3538
}

Deserializers["FxAudio"] = function (request, data, root) {
  var i3540 = root || request.c( 'FxAudio' )
  var i3541 = data
  i3540.ClickBox = request.d('SoundData', i3541[0], i3540.ClickBox)
  i3540.Happy = request.d('SoundData', i3541[1], i3540.Happy)
  i3540.Wrong = request.d('SoundData', i3541[2], i3540.Wrong)
  i3540.Spray = request.d('SoundData', i3541[3], i3540.Spray)
  i3540.Brush = request.d('SoundData', i3541[4], i3540.Brush)
  return i3540
}

Deserializers["SoundData"] = function (request, data, root) {
  var i3542 = root || request.c( 'SoundData' )
  var i3543 = data
  request.r(i3543[0], i3543[1], 0, i3542, 'clip')
  i3542.repeatCount = i3543[2]
  return i3542
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i3544 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i3545 = data
  request.r(i3545[0], i3545[1], 0, i3544, 'clip')
  request.r(i3545[2], i3545[3], 0, i3544, 'outputAudioMixerGroup')
  i3544.playOnAwake = !!i3545[4]
  i3544.loop = !!i3545[5]
  i3544.time = i3545[6]
  i3544.volume = i3545[7]
  i3544.pitch = i3545[8]
  i3544.enabled = !!i3545[9]
  return i3544
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i3546 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i3547 = data
  i3546.planeDistance = i3547[0]
  i3546.referencePixelsPerUnit = i3547[1]
  i3546.isFallbackOverlay = !!i3547[2]
  i3546.renderMode = i3547[3]
  i3546.renderOrder = i3547[4]
  i3546.sortingLayerName = i3547[5]
  i3546.sortingOrder = i3547[6]
  i3546.scaleFactor = i3547[7]
  request.r(i3547[8], i3547[9], 0, i3546, 'worldCamera')
  i3546.overrideSorting = !!i3547[10]
  i3546.pixelPerfect = !!i3547[11]
  i3546.targetDisplay = i3547[12]
  i3546.overridePixelPerfect = !!i3547[13]
  i3546.enabled = !!i3547[14]
  return i3546
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i3548 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i3549 = data
  i3548.m_UiScaleMode = i3549[0]
  i3548.m_ReferencePixelsPerUnit = i3549[1]
  i3548.m_ScaleFactor = i3549[2]
  i3548.m_ReferenceResolution = new pc.Vec2( i3549[3], i3549[4] )
  i3548.m_ScreenMatchMode = i3549[5]
  i3548.m_MatchWidthOrHeight = i3549[6]
  i3548.m_PhysicalUnit = i3549[7]
  i3548.m_FallbackScreenDPI = i3549[8]
  i3548.m_DefaultSpriteDPI = i3549[9]
  i3548.m_DynamicPixelsPerUnit = i3549[10]
  i3548.m_PresetInfoIsWorld = !!i3549[11]
  return i3548
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i3550 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i3551 = data
  i3550.m_IgnoreReversedGraphics = !!i3551[0]
  i3550.m_BlockingObjects = i3551[1]
  i3550.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i3551[2] )
  return i3550
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i3552 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i3553 = data
  i3552.cullTransparentMesh = !!i3553[0]
  return i3552
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i3554 = root || request.c( 'UnityEngine.UI.Image' )
  var i3555 = data
  request.r(i3555[0], i3555[1], 0, i3554, 'm_Sprite')
  i3554.m_Type = i3555[2]
  i3554.m_PreserveAspect = !!i3555[3]
  i3554.m_FillCenter = !!i3555[4]
  i3554.m_FillMethod = i3555[5]
  i3554.m_FillAmount = i3555[6]
  i3554.m_FillClockwise = !!i3555[7]
  i3554.m_FillOrigin = i3555[8]
  i3554.m_UseSpriteMesh = !!i3555[9]
  i3554.m_PixelsPerUnitMultiplier = i3555[10]
  request.r(i3555[11], i3555[12], 0, i3554, 'm_Material')
  i3554.m_Maskable = !!i3555[13]
  i3554.m_Color = new pc.Color(i3555[14], i3555[15], i3555[16], i3555[17])
  i3554.m_RaycastTarget = !!i3555[18]
  i3554.m_RaycastPadding = new pc.Vec4( i3555[19], i3555[20], i3555[21], i3555[22] )
  return i3554
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i3556 = root || request.c( 'UnityEngine.UI.Button' )
  var i3557 = data
  i3556.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i3557[0], i3556.m_OnClick)
  i3556.m_Navigation = request.d('UnityEngine.UI.Navigation', i3557[1], i3556.m_Navigation)
  i3556.m_Transition = i3557[2]
  i3556.m_Colors = request.d('UnityEngine.UI.ColorBlock', i3557[3], i3556.m_Colors)
  i3556.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i3557[4], i3556.m_SpriteState)
  i3556.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i3557[5], i3556.m_AnimationTriggers)
  i3556.m_Interactable = !!i3557[6]
  request.r(i3557[7], i3557[8], 0, i3556, 'm_TargetGraphic')
  return i3556
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i3558 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i3559 = data
  i3558.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i3559[0], i3558.m_PersistentCalls)
  return i3558
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i3560 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i3561 = data
  var i3563 = i3561[0]
  var i3562 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i3563.length; i += 1) {
    i3562.add(request.d('UnityEngine.Events.PersistentCall', i3563[i + 0]));
  }
  i3560.m_Calls = i3562
  return i3560
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i3566 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i3567 = data
  request.r(i3567[0], i3567[1], 0, i3566, 'm_Target')
  i3566.m_TargetAssemblyTypeName = i3567[2]
  i3566.m_MethodName = i3567[3]
  i3566.m_Mode = i3567[4]
  i3566.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i3567[5], i3566.m_Arguments)
  i3566.m_CallState = i3567[6]
  return i3566
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i3568 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i3569 = data
  request.r(i3569[0], i3569[1], 0, i3568, 'm_ObjectArgument')
  i3568.m_ObjectArgumentAssemblyTypeName = i3569[2]
  i3568.m_IntArgument = i3569[3]
  i3568.m_FloatArgument = i3569[4]
  i3568.m_StringArgument = i3569[5]
  i3568.m_BoolArgument = !!i3569[6]
  return i3568
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i3570 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i3571 = data
  i3570.m_Mode = i3571[0]
  i3570.m_WrapAround = !!i3571[1]
  request.r(i3571[2], i3571[3], 0, i3570, 'm_SelectOnUp')
  request.r(i3571[4], i3571[5], 0, i3570, 'm_SelectOnDown')
  request.r(i3571[6], i3571[7], 0, i3570, 'm_SelectOnLeft')
  request.r(i3571[8], i3571[9], 0, i3570, 'm_SelectOnRight')
  return i3570
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i3572 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i3573 = data
  i3572.m_NormalColor = new pc.Color(i3573[0], i3573[1], i3573[2], i3573[3])
  i3572.m_HighlightedColor = new pc.Color(i3573[4], i3573[5], i3573[6], i3573[7])
  i3572.m_PressedColor = new pc.Color(i3573[8], i3573[9], i3573[10], i3573[11])
  i3572.m_SelectedColor = new pc.Color(i3573[12], i3573[13], i3573[14], i3573[15])
  i3572.m_DisabledColor = new pc.Color(i3573[16], i3573[17], i3573[18], i3573[19])
  i3572.m_ColorMultiplier = i3573[20]
  i3572.m_FadeDuration = i3573[21]
  return i3572
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i3574 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i3575 = data
  request.r(i3575[0], i3575[1], 0, i3574, 'm_HighlightedSprite')
  request.r(i3575[2], i3575[3], 0, i3574, 'm_PressedSprite')
  request.r(i3575[4], i3575[5], 0, i3574, 'm_SelectedSprite')
  request.r(i3575[6], i3575[7], 0, i3574, 'm_DisabledSprite')
  return i3574
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i3576 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i3577 = data
  i3576.m_NormalTrigger = i3577[0]
  i3576.m_HighlightedTrigger = i3577[1]
  i3576.m_PressedTrigger = i3577[2]
  i3576.m_SelectedTrigger = i3577[3]
  i3576.m_DisabledTrigger = i3577[4]
  return i3576
}

Deserializers["ScreenHeightPositionAnchor"] = function (request, data, root) {
  var i3578 = root || request.c( 'ScreenHeightPositionAnchor' )
  var i3579 = data
  request.r(i3579[0], i3579[1], 0, i3578, 'anchorPoint')
  request.r(i3579[2], i3579[3], 0, i3578, 'targetCamera')
  i3578.viewportYRatio = i3579[4]
  i3578.alignOnStart = !!i3579[5]
  i3578.alignOnEnable = !!i3579[6]
  i3578.realignOnScreenSizeChanged = !!i3579[7]
  i3578.drawGizmos = !!i3579[8]
  i3578.targetLineColor = new pc.Color(i3579[9], i3579[10], i3579[11], i3579[12])
  i3578.anchorColor = new pc.Color(i3579[13], i3579[14], i3579[15], i3579[16])
  return i3578
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D"] = function (request, data, root) {
  var i3580 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D' )
  var i3581 = data
  i3580.usedByComposite = !!i3581[0]
  i3580.autoTiling = !!i3581[1]
  var i3583 = i3581[2]
  var i3582 = []
  for(var i = 0; i < i3583.length; i += 1) {
  var i3585 = i3583[i + 0]
  var i3584 = []
  for(var i = 0; i < i3585.length; i += 2) {
    i3584.push( new pc.Vec2( i3585[i + 0], i3585[i + 1] ) );
  }
    i3582.push( i3584 );
  }
  i3580.points = i3582
  i3580.enabled = !!i3581[3]
  i3580.isTrigger = !!i3581[4]
  i3580.usedByEffector = !!i3581[5]
  i3580.density = i3581[6]
  i3580.offset = new pc.Vec2( i3581[7], i3581[8] )
  request.r(i3581[9], i3581[10], 0, i3580, 'material')
  return i3580
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i3592 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i3593 = data
  i3592.usedByComposite = !!i3593[0]
  i3592.autoTiling = !!i3593[1]
  i3592.size = new pc.Vec2( i3593[2], i3593[3] )
  i3592.edgeRadius = i3593[4]
  i3592.enabled = !!i3593[5]
  i3592.isTrigger = !!i3593[6]
  i3592.usedByEffector = !!i3593[7]
  i3592.density = i3593[8]
  i3592.offset = new pc.Vec2( i3593[9], i3593[10] )
  request.r(i3593[11], i3593[12], 0, i3592, 'material')
  return i3592
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i3594 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i3595 = data
  i3594.bodyType = i3595[0]
  request.r(i3595[1], i3595[2], 0, i3594, 'material')
  i3594.simulated = !!i3595[3]
  i3594.useAutoMass = !!i3595[4]
  i3594.mass = i3595[5]
  i3594.drag = i3595[6]
  i3594.angularDrag = i3595[7]
  i3594.gravityScale = i3595[8]
  i3594.collisionDetectionMode = i3595[9]
  i3594.sleepMode = i3595[10]
  i3594.constraints = i3595[11]
  return i3594
}

Deserializers["BatStrikeController"] = function (request, data, root) {
  var i3596 = root || request.c( 'BatStrikeController' )
  var i3597 = data
  i3596.pullSpeed = i3597[0]
  i3596.maxPullDistance = i3597[1]
  i3596.minHoldTime = i3597[2]
  i3596.strikeForce = i3597[3]
  i3596.targetTag = i3597[4]
  return i3596
}

Deserializers["CupCollision"] = function (request, data, root) {
  var i3598 = root || request.c( 'CupCollision' )
  var i3599 = data
  i3598.baseTag = i3599[0]
  request.r(i3599[1], i3599[2], 0, i3598, 'objectToActivate')
  return i3598
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider2D"] = function (request, data, root) {
  var i3600 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider2D' )
  var i3601 = data
  i3600.size = new pc.Vec2( i3601[0], i3601[1] )
  i3600.direction = i3601[2]
  i3600.enabled = !!i3601[3]
  i3600.isTrigger = !!i3601[4]
  i3600.usedByEffector = !!i3601[5]
  i3600.density = i3601[6]
  i3600.offset = new pc.Vec2( i3601[7], i3601[8] )
  request.r(i3601[9], i3601[10], 0, i3600, 'material')
  return i3600
}

Deserializers["SlotTrigger"] = function (request, data, root) {
  var i3602 = root || request.c( 'SlotTrigger' )
  var i3603 = data
  request.r(i3603[0], i3603[1], 0, i3602, 'cardData')
  i3602.targetTag = i3603[2]
  request.r(i3603[3], i3603[4], 0, i3602, 'yAnchor')
  i3602.moveSpeed = i3603[5]
  request.r(i3603[6], i3603[7], 0, i3602, 'objectToMoveDown')
  i3602.targetScreenYRatio = i3603[8]
  return i3602
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteMask"] = function (request, data, root) {
  var i3604 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteMask' )
  var i3605 = data
  i3604.frontSortingLayerID = i3605[0]
  i3604.frontSortingOrder = i3605[1]
  i3604.backSortingLayerID = i3605[2]
  i3604.backSortingOrder = i3605[3]
  i3604.alphaCutoff = i3605[4]
  request.r(i3605[5], i3605[6], 0, i3604, 'sprite')
  i3604.tileMode = i3605[7]
  i3604.isCustomRangeActive = !!i3605[8]
  i3604.spriteSortPoint = i3605[9]
  i3604.enabled = !!i3605[10]
  request.r(i3605[11], i3605[12], 0, i3604, 'sharedMaterial')
  var i3607 = i3605[13]
  var i3606 = []
  for(var i = 0; i < i3607.length; i += 2) {
  request.r(i3607[i + 0], i3607[i + 1], 2, i3606, '')
  }
  i3604.sharedMaterials = i3606
  i3604.receiveShadows = !!i3605[14]
  i3604.shadowCastingMode = i3605[15]
  i3604.sortingLayerID = i3605[16]
  i3604.sortingOrder = i3605[17]
  i3604.lightmapIndex = i3605[18]
  i3604.lightmapSceneIndex = i3605[19]
  i3604.lightmapScaleOffset = new pc.Vec4( i3605[20], i3605[21], i3605[22], i3605[23] )
  i3604.lightProbeUsage = i3605[24]
  i3604.reflectionProbeUsage = i3605[25]
  return i3604
}

Deserializers["HideOnFirstClick"] = function (request, data, root) {
  var i3608 = root || request.c( 'HideOnFirstClick' )
  var i3609 = data
  request.r(i3609[0], i3609[1], 0, i3608, 'objectToHide')
  return i3608
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i3610 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i3611 = data
  request.r(i3611[0], i3611[1], 0, i3610, 'm_FirstSelected')
  i3610.m_sendNavigationEvents = !!i3611[2]
  i3610.m_DragThreshold = i3611[3]
  return i3610
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i3612 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i3613 = data
  i3612.m_HorizontalAxis = i3613[0]
  i3612.m_VerticalAxis = i3613[1]
  i3612.m_SubmitButton = i3613[2]
  i3612.m_CancelButton = i3613[3]
  i3612.m_InputActionsPerSecond = i3613[4]
  i3612.m_RepeatDelay = i3613[5]
  i3612.m_ForceModuleActive = !!i3613[6]
  i3612.m_SendPointerHoverToParent = !!i3613[7]
  return i3612
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i3614 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i3615 = data
  i3614.ambientIntensity = i3615[0]
  i3614.reflectionIntensity = i3615[1]
  i3614.ambientMode = i3615[2]
  i3614.ambientLight = new pc.Color(i3615[3], i3615[4], i3615[5], i3615[6])
  i3614.ambientSkyColor = new pc.Color(i3615[7], i3615[8], i3615[9], i3615[10])
  i3614.ambientGroundColor = new pc.Color(i3615[11], i3615[12], i3615[13], i3615[14])
  i3614.ambientEquatorColor = new pc.Color(i3615[15], i3615[16], i3615[17], i3615[18])
  i3614.fogColor = new pc.Color(i3615[19], i3615[20], i3615[21], i3615[22])
  i3614.fogEndDistance = i3615[23]
  i3614.fogStartDistance = i3615[24]
  i3614.fogDensity = i3615[25]
  i3614.fog = !!i3615[26]
  request.r(i3615[27], i3615[28], 0, i3614, 'skybox')
  i3614.fogMode = i3615[29]
  var i3617 = i3615[30]
  var i3616 = []
  for(var i = 0; i < i3617.length; i += 1) {
    i3616.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i3617[i + 0]) );
  }
  i3614.lightmaps = i3616
  i3614.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i3615[31], i3614.lightProbes)
  i3614.lightmapsMode = i3615[32]
  i3614.mixedBakeMode = i3615[33]
  i3614.environmentLightingMode = i3615[34]
  i3614.ambientProbe = new pc.SphericalHarmonicsL2(i3615[35])
  i3614.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i3615[36])
  i3614.useReferenceAmbientProbe = !!i3615[37]
  request.r(i3615[38], i3615[39], 0, i3614, 'customReflection')
  request.r(i3615[40], i3615[41], 0, i3614, 'defaultReflection')
  i3614.defaultReflectionMode = i3615[42]
  i3614.defaultReflectionResolution = i3615[43]
  i3614.sunLightObjectId = i3615[44]
  i3614.pixelLightCount = i3615[45]
  i3614.defaultReflectionHDR = !!i3615[46]
  i3614.hasLightDataAsset = !!i3615[47]
  i3614.hasManualGenerate = !!i3615[48]
  return i3614
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i3620 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i3621 = data
  request.r(i3621[0], i3621[1], 0, i3620, 'lightmapColor')
  request.r(i3621[2], i3621[3], 0, i3620, 'lightmapDirection')
  request.r(i3621[4], i3621[5], 0, i3620, 'shadowMask')
  return i3620
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i3622 = root || new UnityEngine.LightProbes()
  var i3623 = data
  return i3622
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.PhysicsMaterial2D"] = function (request, data, root) {
  var i3630 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.PhysicsMaterial2D' )
  var i3631 = data
  i3630.name = i3631[0]
  i3630.bounciness = i3631[1]
  i3630.friction = i3631[2]
  return i3630
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i3632 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i3633 = data
  var i3635 = i3633[0]
  var i3634 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i3635.length; i += 1) {
    i3634.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i3635[i + 0]));
  }
  i3632.ShaderCompilationErrors = i3634
  i3632.name = i3633[1]
  i3632.guid = i3633[2]
  var i3637 = i3633[3]
  var i3636 = []
  for(var i = 0; i < i3637.length; i += 1) {
    i3636.push( i3637[i + 0] );
  }
  i3632.shaderDefinedKeywords = i3636
  var i3639 = i3633[4]
  var i3638 = []
  for(var i = 0; i < i3639.length; i += 1) {
    i3638.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i3639[i + 0]) );
  }
  i3632.passes = i3638
  var i3641 = i3633[5]
  var i3640 = []
  for(var i = 0; i < i3641.length; i += 1) {
    i3640.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i3641[i + 0]) );
  }
  i3632.usePasses = i3640
  var i3643 = i3633[6]
  var i3642 = []
  for(var i = 0; i < i3643.length; i += 1) {
    i3642.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i3643[i + 0]) );
  }
  i3632.defaultParameterValues = i3642
  request.r(i3633[7], i3633[8], 0, i3632, 'unityFallbackShader')
  i3632.readDepth = !!i3633[9]
  i3632.hasDepthOnlyPass = !!i3633[10]
  i3632.isCreatedByShaderGraph = !!i3633[11]
  i3632.disableBatching = !!i3633[12]
  i3632.compiled = !!i3633[13]
  return i3632
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i3646 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i3647 = data
  i3646.shaderName = i3647[0]
  i3646.errorMessage = i3647[1]
  return i3646
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i3652 = root || new pc.UnityShaderPass()
  var i3653 = data
  i3652.id = i3653[0]
  i3652.subShaderIndex = i3653[1]
  i3652.name = i3653[2]
  i3652.passType = i3653[3]
  i3652.grabPassTextureName = i3653[4]
  i3652.usePass = !!i3653[5]
  i3652.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3653[6], i3652.zTest)
  i3652.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3653[7], i3652.zWrite)
  i3652.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3653[8], i3652.culling)
  i3652.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i3653[9], i3652.blending)
  i3652.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i3653[10], i3652.alphaBlending)
  i3652.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3653[11], i3652.colorWriteMask)
  i3652.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3653[12], i3652.offsetUnits)
  i3652.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3653[13], i3652.offsetFactor)
  i3652.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3653[14], i3652.stencilRef)
  i3652.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3653[15], i3652.stencilReadMask)
  i3652.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3653[16], i3652.stencilWriteMask)
  i3652.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3653[17], i3652.stencilOp)
  i3652.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3653[18], i3652.stencilOpFront)
  i3652.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3653[19], i3652.stencilOpBack)
  var i3655 = i3653[20]
  var i3654 = []
  for(var i = 0; i < i3655.length; i += 1) {
    i3654.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i3655[i + 0]) );
  }
  i3652.tags = i3654
  var i3657 = i3653[21]
  var i3656 = []
  for(var i = 0; i < i3657.length; i += 1) {
    i3656.push( i3657[i + 0] );
  }
  i3652.passDefinedKeywords = i3656
  var i3659 = i3653[22]
  var i3658 = []
  for(var i = 0; i < i3659.length; i += 1) {
    i3658.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i3659[i + 0]) );
  }
  i3652.passDefinedKeywordGroups = i3658
  var i3661 = i3653[23]
  var i3660 = []
  for(var i = 0; i < i3661.length; i += 1) {
    i3660.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i3661[i + 0]) );
  }
  i3652.variants = i3660
  var i3663 = i3653[24]
  var i3662 = []
  for(var i = 0; i < i3663.length; i += 1) {
    i3662.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i3663[i + 0]) );
  }
  i3652.excludedVariants = i3662
  i3652.hasDepthReader = !!i3653[25]
  return i3652
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i3664 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i3665 = data
  i3664.val = i3665[0]
  i3664.name = i3665[1]
  return i3664
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i3666 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i3667 = data
  i3666.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3667[0], i3666.src)
  i3666.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3667[1], i3666.dst)
  i3666.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3667[2], i3666.op)
  return i3666
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i3668 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i3669 = data
  i3668.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3669[0], i3668.pass)
  i3668.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3669[1], i3668.fail)
  i3668.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3669[2], i3668.zFail)
  i3668.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3669[3], i3668.comp)
  return i3668
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i3672 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i3673 = data
  i3672.name = i3673[0]
  i3672.value = i3673[1]
  return i3672
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i3676 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i3677 = data
  var i3679 = i3677[0]
  var i3678 = []
  for(var i = 0; i < i3679.length; i += 1) {
    i3678.push( i3679[i + 0] );
  }
  i3676.keywords = i3678
  i3676.hasDiscard = !!i3677[1]
  return i3676
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i3682 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i3683 = data
  i3682.passId = i3683[0]
  i3682.subShaderIndex = i3683[1]
  var i3685 = i3683[2]
  var i3684 = []
  for(var i = 0; i < i3685.length; i += 1) {
    i3684.push( i3685[i + 0] );
  }
  i3682.keywords = i3684
  i3682.vertexProgram = i3683[3]
  i3682.fragmentProgram = i3683[4]
  i3682.exportedForWebGl2 = !!i3683[5]
  i3682.readDepth = !!i3683[6]
  return i3682
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i3688 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i3689 = data
  request.r(i3689[0], i3689[1], 0, i3688, 'shader')
  i3688.pass = i3689[2]
  return i3688
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i3692 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i3693 = data
  i3692.name = i3693[0]
  i3692.type = i3693[1]
  i3692.value = new pc.Vec4( i3693[2], i3693[3], i3693[4], i3693[5] )
  i3692.textureValue = i3693[6]
  i3692.shaderPropertyFlag = i3693[7]
  return i3692
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i3694 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i3695 = data
  i3694.name = i3695[0]
  request.r(i3695[1], i3695[2], 0, i3694, 'texture')
  i3694.aabb = i3695[3]
  i3694.vertices = i3695[4]
  i3694.triangles = i3695[5]
  i3694.textureRect = UnityEngine.Rect.MinMaxRect(i3695[6], i3695[7], i3695[8], i3695[9])
  i3694.packedRect = UnityEngine.Rect.MinMaxRect(i3695[10], i3695[11], i3695[12], i3695[13])
  i3694.border = new pc.Vec4( i3695[14], i3695[15], i3695[16], i3695[17] )
  i3694.transparency = i3695[18]
  i3694.bounds = i3695[19]
  i3694.pixelsPerUnit = i3695[20]
  i3694.textureWidth = i3695[21]
  i3694.textureHeight = i3695[22]
  i3694.nativeSize = new pc.Vec2( i3695[23], i3695[24] )
  i3694.pivot = new pc.Vec2( i3695[25], i3695[26] )
  i3694.textureRectOffset = new pc.Vec2( i3695[27], i3695[28] )
  return i3694
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i3696 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i3697 = data
  i3696.name = i3697[0]
  return i3696
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i3698 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i3699 = data
  i3698.name = i3699[0]
  i3698.wrapMode = i3699[1]
  i3698.isLooping = !!i3699[2]
  i3698.length = i3699[3]
  var i3701 = i3699[4]
  var i3700 = []
  for(var i = 0; i < i3701.length; i += 1) {
    i3700.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i3701[i + 0]) );
  }
  i3698.curves = i3700
  var i3703 = i3699[5]
  var i3702 = []
  for(var i = 0; i < i3703.length; i += 1) {
    i3702.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i3703[i + 0]) );
  }
  i3698.events = i3702
  i3698.halfPrecision = !!i3699[6]
  i3698._frameRate = i3699[7]
  i3698.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i3699[8], i3698.localBounds)
  i3698.hasMuscleCurves = !!i3699[9]
  var i3705 = i3699[10]
  var i3704 = []
  for(var i = 0; i < i3705.length; i += 1) {
    i3704.push( i3705[i + 0] );
  }
  i3698.clipMuscleConstant = i3704
  i3698.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i3699[11], i3698.clipBindingConstant)
  return i3698
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i3708 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i3709 = data
  i3708.path = i3709[0]
  i3708.hash = i3709[1]
  i3708.componentType = i3709[2]
  i3708.property = i3709[3]
  i3708.keys = i3709[4]
  var i3711 = i3709[5]
  var i3710 = []
  for(var i = 0; i < i3711.length; i += 1) {
    i3710.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i3711[i + 0]) );
  }
  i3708.objectReferenceKeys = i3710
  return i3708
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i3714 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i3715 = data
  i3714.time = i3715[0]
  request.r(i3715[1], i3715[2], 0, i3714, 'value')
  return i3714
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i3718 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i3719 = data
  i3718.functionName = i3719[0]
  i3718.floatParameter = i3719[1]
  i3718.intParameter = i3719[2]
  i3718.stringParameter = i3719[3]
  request.r(i3719[4], i3719[5], 0, i3718, 'objectReferenceParameter')
  i3718.time = i3719[6]
  return i3718
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i3720 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i3721 = data
  i3720.center = new pc.Vec3( i3721[0], i3721[1], i3721[2] )
  i3720.extends = new pc.Vec3( i3721[3], i3721[4], i3721[5] )
  return i3720
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i3724 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i3725 = data
  var i3727 = i3725[0]
  var i3726 = []
  for(var i = 0; i < i3727.length; i += 1) {
    i3726.push( i3727[i + 0] );
  }
  i3724.genericBindings = i3726
  var i3729 = i3725[1]
  var i3728 = []
  for(var i = 0; i < i3729.length; i += 1) {
    i3728.push( i3729[i + 0] );
  }
  i3724.pptrCurveMapping = i3728
  return i3724
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i3730 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i3731 = data
  i3730.name = i3731[0]
  i3730.ascent = i3731[1]
  i3730.originalLineHeight = i3731[2]
  i3730.fontSize = i3731[3]
  var i3733 = i3731[4]
  var i3732 = []
  for(var i = 0; i < i3733.length; i += 1) {
    i3732.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i3733[i + 0]) );
  }
  i3730.characterInfo = i3732
  request.r(i3731[5], i3731[6], 0, i3730, 'texture')
  i3730.originalFontSize = i3731[7]
  return i3730
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i3736 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i3737 = data
  i3736.index = i3737[0]
  i3736.advance = i3737[1]
  i3736.bearing = i3737[2]
  i3736.glyphWidth = i3737[3]
  i3736.glyphHeight = i3737[4]
  i3736.minX = i3737[5]
  i3736.maxX = i3737[6]
  i3736.minY = i3737[7]
  i3736.maxY = i3737[8]
  i3736.uvBottomLeftX = i3737[9]
  i3736.uvBottomLeftY = i3737[10]
  i3736.uvBottomRightX = i3737[11]
  i3736.uvBottomRightY = i3737[12]
  i3736.uvTopLeftX = i3737[13]
  i3736.uvTopLeftY = i3737[14]
  i3736.uvTopRightX = i3737[15]
  i3736.uvTopRightY = i3737[16]
  return i3736
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i3738 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i3739 = data
  i3738.name = i3739[0]
  var i3741 = i3739[1]
  var i3740 = []
  for(var i = 0; i < i3741.length; i += 1) {
    i3740.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i3741[i + 0]) );
  }
  i3738.layers = i3740
  var i3743 = i3739[2]
  var i3742 = []
  for(var i = 0; i < i3743.length; i += 1) {
    i3742.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i3743[i + 0]) );
  }
  i3738.parameters = i3742
  i3738.animationClips = i3739[3]
  i3738.avatarUnsupported = i3739[4]
  return i3738
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i3746 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i3747 = data
  i3746.name = i3747[0]
  i3746.defaultWeight = i3747[1]
  i3746.blendingMode = i3747[2]
  i3746.avatarMask = i3747[3]
  i3746.syncedLayerIndex = i3747[4]
  i3746.syncedLayerAffectsTiming = !!i3747[5]
  i3746.syncedLayers = i3747[6]
  i3746.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i3747[7], i3746.stateMachine)
  return i3746
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i3748 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i3749 = data
  i3748.id = i3749[0]
  i3748.name = i3749[1]
  i3748.path = i3749[2]
  var i3751 = i3749[3]
  var i3750 = []
  for(var i = 0; i < i3751.length; i += 1) {
    i3750.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i3751[i + 0]) );
  }
  i3748.states = i3750
  var i3753 = i3749[4]
  var i3752 = []
  for(var i = 0; i < i3753.length; i += 1) {
    i3752.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i3753[i + 0]) );
  }
  i3748.machines = i3752
  var i3755 = i3749[5]
  var i3754 = []
  for(var i = 0; i < i3755.length; i += 1) {
    i3754.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i3755[i + 0]) );
  }
  i3748.entryStateTransitions = i3754
  var i3757 = i3749[6]
  var i3756 = []
  for(var i = 0; i < i3757.length; i += 1) {
    i3756.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i3757[i + 0]) );
  }
  i3748.exitStateTransitions = i3756
  var i3759 = i3749[7]
  var i3758 = []
  for(var i = 0; i < i3759.length; i += 1) {
    i3758.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i3759[i + 0]) );
  }
  i3748.anyStateTransitions = i3758
  i3748.defaultStateId = i3749[8]
  return i3748
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i3762 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i3763 = data
  i3762.id = i3763[0]
  i3762.name = i3763[1]
  i3762.cycleOffset = i3763[2]
  i3762.cycleOffsetParameter = i3763[3]
  i3762.cycleOffsetParameterActive = !!i3763[4]
  i3762.mirror = !!i3763[5]
  i3762.mirrorParameter = i3763[6]
  i3762.mirrorParameterActive = !!i3763[7]
  i3762.motionId = i3763[8]
  i3762.nameHash = i3763[9]
  i3762.fullPathHash = i3763[10]
  i3762.speed = i3763[11]
  i3762.speedParameter = i3763[12]
  i3762.speedParameterActive = !!i3763[13]
  i3762.tag = i3763[14]
  i3762.tagHash = i3763[15]
  i3762.writeDefaultValues = !!i3763[16]
  var i3765 = i3763[17]
  var i3764 = []
  for(var i = 0; i < i3765.length; i += 2) {
  request.r(i3765[i + 0], i3765[i + 1], 2, i3764, '')
  }
  i3762.behaviours = i3764
  var i3767 = i3763[18]
  var i3766 = []
  for(var i = 0; i < i3767.length; i += 1) {
    i3766.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i3767[i + 0]) );
  }
  i3762.transitions = i3766
  return i3762
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i3772 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i3773 = data
  i3772.fullPath = i3773[0]
  i3772.canTransitionToSelf = !!i3773[1]
  i3772.duration = i3773[2]
  i3772.exitTime = i3773[3]
  i3772.hasExitTime = !!i3773[4]
  i3772.hasFixedDuration = !!i3773[5]
  i3772.interruptionSource = i3773[6]
  i3772.offset = i3773[7]
  i3772.orderedInterruption = !!i3773[8]
  i3772.destinationStateId = i3773[9]
  i3772.isExit = !!i3773[10]
  i3772.mute = !!i3773[11]
  i3772.solo = !!i3773[12]
  var i3775 = i3773[13]
  var i3774 = []
  for(var i = 0; i < i3775.length; i += 1) {
    i3774.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i3775[i + 0]) );
  }
  i3772.conditions = i3774
  return i3772
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i3780 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i3781 = data
  i3780.destinationStateId = i3781[0]
  i3780.isExit = !!i3781[1]
  i3780.mute = !!i3781[2]
  i3780.solo = !!i3781[3]
  var i3783 = i3781[4]
  var i3782 = []
  for(var i = 0; i < i3783.length; i += 1) {
    i3782.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i3783[i + 0]) );
  }
  i3780.conditions = i3782
  return i3780
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i3786 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i3787 = data
  i3786.defaultBool = !!i3787[0]
  i3786.defaultFloat = i3787[1]
  i3786.defaultInt = i3787[2]
  i3786.name = i3787[3]
  i3786.nameHash = i3787[4]
  i3786.type = i3787[5]
  return i3786
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i3788 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i3789 = data
  i3788.name = i3789[0]
  i3788.bytes64 = i3789[1]
  i3788.data = i3789[2]
  return i3788
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i3790 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i3791 = data
  i3790.normalStyle = i3791[0]
  i3790.normalSpacingOffset = i3791[1]
  i3790.boldStyle = i3791[2]
  i3790.boldSpacing = i3791[3]
  i3790.italicStyle = i3791[4]
  i3790.tabSize = i3791[5]
  request.r(i3791[6], i3791[7], 0, i3790, 'atlas')
  i3790.m_SourceFontFileGUID = i3791[8]
  i3790.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i3791[9], i3790.m_CreationSettings)
  request.r(i3791[10], i3791[11], 0, i3790, 'm_SourceFontFile')
  i3790.m_SourceFontFilePath = i3791[12]
  i3790.m_AtlasPopulationMode = i3791[13]
  i3790.InternalDynamicOS = !!i3791[14]
  var i3793 = i3791[15]
  var i3792 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i3793.length; i += 1) {
    i3792.add(request.d('UnityEngine.TextCore.Glyph', i3793[i + 0]));
  }
  i3790.m_GlyphTable = i3792
  var i3795 = i3791[16]
  var i3794 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i3795.length; i += 1) {
    i3794.add(request.d('TMPro.TMP_Character', i3795[i + 0]));
  }
  i3790.m_CharacterTable = i3794
  var i3797 = i3791[17]
  var i3796 = []
  for(var i = 0; i < i3797.length; i += 2) {
  request.r(i3797[i + 0], i3797[i + 1], 2, i3796, '')
  }
  i3790.m_AtlasTextures = i3796
  i3790.m_AtlasTextureIndex = i3791[18]
  i3790.m_IsMultiAtlasTexturesEnabled = !!i3791[19]
  i3790.m_GetFontFeatures = !!i3791[20]
  i3790.m_ClearDynamicDataOnBuild = !!i3791[21]
  i3790.m_AtlasWidth = i3791[22]
  i3790.m_AtlasHeight = i3791[23]
  i3790.m_AtlasPadding = i3791[24]
  i3790.m_AtlasRenderMode = i3791[25]
  var i3799 = i3791[26]
  var i3798 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i3799.length; i += 1) {
    i3798.add(request.d('UnityEngine.TextCore.GlyphRect', i3799[i + 0]));
  }
  i3790.m_UsedGlyphRects = i3798
  var i3801 = i3791[27]
  var i3800 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i3801.length; i += 1) {
    i3800.add(request.d('UnityEngine.TextCore.GlyphRect', i3801[i + 0]));
  }
  i3790.m_FreeGlyphRects = i3800
  i3790.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i3791[28], i3790.m_FontFeatureTable)
  i3790.m_ShouldReimportFontFeatures = !!i3791[29]
  var i3803 = i3791[30]
  var i3802 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i3803.length; i += 2) {
  request.r(i3803[i + 0], i3803[i + 1], 1, i3802, '')
  }
  i3790.m_FallbackFontAssetTable = i3802
  var i3805 = i3791[31]
  var i3804 = []
  for(var i = 0; i < i3805.length; i += 1) {
    i3804.push( request.d('TMPro.TMP_FontWeightPair', i3805[i + 0]) );
  }
  i3790.m_FontWeightTable = i3804
  var i3807 = i3791[32]
  var i3806 = []
  for(var i = 0; i < i3807.length; i += 1) {
    i3806.push( request.d('TMPro.TMP_FontWeightPair', i3807[i + 0]) );
  }
  i3790.fontWeights = i3806
  i3790.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i3791[33], i3790.m_fontInfo)
  var i3809 = i3791[34]
  var i3808 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i3809.length; i += 1) {
    i3808.add(request.d('TMPro.TMP_Glyph', i3809[i + 0]));
  }
  i3790.m_glyphInfoList = i3808
  i3790.m_KerningTable = request.d('TMPro.KerningTable', i3791[35], i3790.m_KerningTable)
  var i3811 = i3791[36]
  var i3810 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i3811.length; i += 2) {
  request.r(i3811[i + 0], i3811[i + 1], 1, i3810, '')
  }
  i3790.fallbackFontAssets = i3810
  i3790.m_Version = i3791[37]
  i3790.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i3791[38], i3790.m_FaceInfo)
  request.r(i3791[39], i3791[40], 0, i3790, 'm_Material')
  return i3790
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i3812 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i3813 = data
  i3812.sourceFontFileName = i3813[0]
  i3812.sourceFontFileGUID = i3813[1]
  i3812.faceIndex = i3813[2]
  i3812.pointSizeSamplingMode = i3813[3]
  i3812.pointSize = i3813[4]
  i3812.padding = i3813[5]
  i3812.paddingMode = i3813[6]
  i3812.packingMode = i3813[7]
  i3812.atlasWidth = i3813[8]
  i3812.atlasHeight = i3813[9]
  i3812.characterSetSelectionMode = i3813[10]
  i3812.characterSequence = i3813[11]
  i3812.referencedFontAssetGUID = i3813[12]
  i3812.referencedTextAssetGUID = i3813[13]
  i3812.fontStyle = i3813[14]
  i3812.fontStyleModifier = i3813[15]
  i3812.renderMode = i3813[16]
  i3812.includeFontFeatures = !!i3813[17]
  return i3812
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i3816 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i3817 = data
  i3816.m_Index = i3817[0]
  i3816.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i3817[1], i3816.m_Metrics)
  i3816.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i3817[2], i3816.m_GlyphRect)
  i3816.m_Scale = i3817[3]
  i3816.m_AtlasIndex = i3817[4]
  i3816.m_ClassDefinitionType = i3817[5]
  return i3816
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i3818 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i3819 = data
  i3818.m_Width = i3819[0]
  i3818.m_Height = i3819[1]
  i3818.m_HorizontalBearingX = i3819[2]
  i3818.m_HorizontalBearingY = i3819[3]
  i3818.m_HorizontalAdvance = i3819[4]
  return i3818
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i3820 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i3821 = data
  i3820.m_X = i3821[0]
  i3820.m_Y = i3821[1]
  i3820.m_Width = i3821[2]
  i3820.m_Height = i3821[3]
  return i3820
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i3824 = root || request.c( 'TMPro.TMP_Character' )
  var i3825 = data
  i3824.m_ElementType = i3825[0]
  i3824.m_Unicode = i3825[1]
  i3824.m_GlyphIndex = i3825[2]
  i3824.m_Scale = i3825[3]
  return i3824
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i3830 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i3831 = data
  var i3833 = i3831[0]
  var i3832 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i3833.length; i += 1) {
    i3832.add(request.d('TMPro.MultipleSubstitutionRecord', i3833[i + 0]));
  }
  i3830.m_MultipleSubstitutionRecords = i3832
  var i3835 = i3831[1]
  var i3834 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i3835.length; i += 1) {
    i3834.add(request.d('TMPro.LigatureSubstitutionRecord', i3835[i + 0]));
  }
  i3830.m_LigatureSubstitutionRecords = i3834
  var i3837 = i3831[2]
  var i3836 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i3837.length; i += 1) {
    i3836.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i3837[i + 0]));
  }
  i3830.m_GlyphPairAdjustmentRecords = i3836
  var i3839 = i3831[3]
  var i3838 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i3839.length; i += 1) {
    i3838.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i3839[i + 0]));
  }
  i3830.m_MarkToBaseAdjustmentRecords = i3838
  var i3841 = i3831[4]
  var i3840 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i3841.length; i += 1) {
    i3840.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i3841[i + 0]));
  }
  i3830.m_MarkToMarkAdjustmentRecords = i3840
  return i3830
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i3844 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i3845 = data
  i3844.m_TargetGlyphID = i3845[0]
  i3844.m_SubstituteGlyphIDs = i3845[1]
  return i3844
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i3848 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i3849 = data
  i3848.m_ComponentGlyphIDs = i3849[0]
  i3848.m_LigatureGlyphID = i3849[1]
  return i3848
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i3852 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i3853 = data
  i3852.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i3853[0], i3852.m_FirstAdjustmentRecord)
  i3852.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i3853[1], i3852.m_SecondAdjustmentRecord)
  i3852.m_FeatureLookupFlags = i3853[2]
  return i3852
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i3854 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i3855 = data
  i3854.m_GlyphIndex = i3855[0]
  i3854.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i3855[1], i3854.m_GlyphValueRecord)
  return i3854
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i3856 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i3857 = data
  i3856.m_XPlacement = i3857[0]
  i3856.m_YPlacement = i3857[1]
  i3856.m_XAdvance = i3857[2]
  i3856.m_YAdvance = i3857[3]
  return i3856
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i3860 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i3861 = data
  i3860.m_BaseGlyphID = i3861[0]
  i3860.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i3861[1], i3860.m_BaseGlyphAnchorPoint)
  i3860.m_MarkGlyphID = i3861[2]
  i3860.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i3861[3], i3860.m_MarkPositionAdjustment)
  return i3860
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i3864 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i3865 = data
  i3864.m_BaseMarkGlyphID = i3865[0]
  i3864.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i3865[1], i3864.m_BaseMarkGlyphAnchorPoint)
  i3864.m_CombiningMarkGlyphID = i3865[2]
  i3864.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i3865[3], i3864.m_CombiningMarkPositionAdjustment)
  return i3864
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i3870 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i3871 = data
  request.r(i3871[0], i3871[1], 0, i3870, 'regularTypeface')
  request.r(i3871[2], i3871[3], 0, i3870, 'italicTypeface')
  return i3870
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i3872 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i3873 = data
  i3872.Name = i3873[0]
  i3872.PointSize = i3873[1]
  i3872.Scale = i3873[2]
  i3872.CharacterCount = i3873[3]
  i3872.LineHeight = i3873[4]
  i3872.Baseline = i3873[5]
  i3872.Ascender = i3873[6]
  i3872.CapHeight = i3873[7]
  i3872.Descender = i3873[8]
  i3872.CenterLine = i3873[9]
  i3872.SuperscriptOffset = i3873[10]
  i3872.SubscriptOffset = i3873[11]
  i3872.SubSize = i3873[12]
  i3872.Underline = i3873[13]
  i3872.UnderlineThickness = i3873[14]
  i3872.strikethrough = i3873[15]
  i3872.strikethroughThickness = i3873[16]
  i3872.TabWidth = i3873[17]
  i3872.Padding = i3873[18]
  i3872.AtlasWidth = i3873[19]
  i3872.AtlasHeight = i3873[20]
  return i3872
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i3876 = root || request.c( 'TMPro.TMP_Glyph' )
  var i3877 = data
  i3876.id = i3877[0]
  i3876.x = i3877[1]
  i3876.y = i3877[2]
  i3876.width = i3877[3]
  i3876.height = i3877[4]
  i3876.xOffset = i3877[5]
  i3876.yOffset = i3877[6]
  i3876.xAdvance = i3877[7]
  i3876.scale = i3877[8]
  return i3876
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i3878 = root || request.c( 'TMPro.KerningTable' )
  var i3879 = data
  var i3881 = i3879[0]
  var i3880 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i3881.length; i += 1) {
    i3880.add(request.d('TMPro.KerningPair', i3881[i + 0]));
  }
  i3878.kerningPairs = i3880
  return i3878
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i3884 = root || request.c( 'TMPro.KerningPair' )
  var i3885 = data
  i3884.xOffset = i3885[0]
  i3884.m_FirstGlyph = i3885[1]
  i3884.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i3885[2], i3884.m_FirstGlyphAdjustments)
  i3884.m_SecondGlyph = i3885[3]
  i3884.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i3885[4], i3884.m_SecondGlyphAdjustments)
  i3884.m_IgnoreSpacingAdjustments = !!i3885[5]
  return i3884
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i3886 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i3887 = data
  i3886.m_FaceIndex = i3887[0]
  i3886.m_FamilyName = i3887[1]
  i3886.m_StyleName = i3887[2]
  i3886.m_PointSize = i3887[3]
  i3886.m_Scale = i3887[4]
  i3886.m_UnitsPerEM = i3887[5]
  i3886.m_LineHeight = i3887[6]
  i3886.m_AscentLine = i3887[7]
  i3886.m_CapLine = i3887[8]
  i3886.m_MeanLine = i3887[9]
  i3886.m_Baseline = i3887[10]
  i3886.m_DescentLine = i3887[11]
  i3886.m_SuperscriptOffset = i3887[12]
  i3886.m_SuperscriptSize = i3887[13]
  i3886.m_SubscriptOffset = i3887[14]
  i3886.m_SubscriptSize = i3887[15]
  i3886.m_UnderlineOffset = i3887[16]
  i3886.m_UnderlineThickness = i3887[17]
  i3886.m_StrikethroughOffset = i3887[18]
  i3886.m_StrikethroughThickness = i3887[19]
  i3886.m_TabWidth = i3887[20]
  return i3886
}

Deserializers["PlayerCardData"] = function (request, data, root) {
  var i3888 = root || request.c( 'PlayerCardData' )
  var i3889 = data
  i3888.playerName = i3889[0]
  request.r(i3889[1], i3889[2], 0, i3888, 'playerSprite')
  return i3888
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i3890 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i3891 = data
  i3890.useSafeMode = !!i3891[0]
  i3890.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i3891[1], i3890.safeModeOptions)
  i3890.timeScale = i3891[2]
  i3890.unscaledTimeScale = i3891[3]
  i3890.useSmoothDeltaTime = !!i3891[4]
  i3890.maxSmoothUnscaledTime = i3891[5]
  i3890.rewindCallbackMode = i3891[6]
  i3890.showUnityEditorReport = !!i3891[7]
  i3890.logBehaviour = i3891[8]
  i3890.drawGizmos = !!i3891[9]
  i3890.defaultRecyclable = !!i3891[10]
  i3890.defaultAutoPlay = i3891[11]
  i3890.defaultUpdateType = i3891[12]
  i3890.defaultTimeScaleIndependent = !!i3891[13]
  i3890.defaultEaseType = i3891[14]
  i3890.defaultEaseOvershootOrAmplitude = i3891[15]
  i3890.defaultEasePeriod = i3891[16]
  i3890.defaultAutoKill = !!i3891[17]
  i3890.defaultLoopType = i3891[18]
  i3890.debugMode = !!i3891[19]
  i3890.debugStoreTargetId = !!i3891[20]
  i3890.showPreviewPanel = !!i3891[21]
  i3890.storeSettingsLocation = i3891[22]
  i3890.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i3891[23], i3890.modules)
  i3890.createASMDEF = !!i3891[24]
  i3890.showPlayingTweens = !!i3891[25]
  i3890.showPausedTweens = !!i3891[26]
  return i3890
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i3892 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i3893 = data
  i3892.logBehaviour = i3893[0]
  i3892.nestedTweenFailureBehaviour = i3893[1]
  return i3892
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i3894 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i3895 = data
  i3894.showPanel = !!i3895[0]
  i3894.audioEnabled = !!i3895[1]
  i3894.physicsEnabled = !!i3895[2]
  i3894.physics2DEnabled = !!i3895[3]
  i3894.spriteEnabled = !!i3895[4]
  i3894.uiEnabled = !!i3895[5]
  i3894.uiToolkitEnabled = !!i3895[6]
  i3894.textMeshProEnabled = !!i3895[7]
  i3894.tk2DEnabled = !!i3895[8]
  i3894.deAudioEnabled = !!i3895[9]
  i3894.deUnityExtendedEnabled = !!i3895[10]
  i3894.epoOutlineEnabled = !!i3895[11]
  return i3894
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i3896 = root || request.c( 'TMPro.TMP_Settings' )
  var i3897 = data
  i3896.assetVersion = i3897[0]
  i3896.m_TextWrappingMode = i3897[1]
  i3896.m_enableKerning = !!i3897[2]
  var i3899 = i3897[3]
  var i3898 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i3899.length; i += 1) {
    i3898.add(i3899[i + 0]);
  }
  i3896.m_ActiveFontFeatures = i3898
  i3896.m_enableExtraPadding = !!i3897[4]
  i3896.m_enableTintAllSprites = !!i3897[5]
  i3896.m_enableParseEscapeCharacters = !!i3897[6]
  i3896.m_EnableRaycastTarget = !!i3897[7]
  i3896.m_GetFontFeaturesAtRuntime = !!i3897[8]
  i3896.m_missingGlyphCharacter = i3897[9]
  i3896.m_ClearDynamicDataOnBuild = !!i3897[10]
  i3896.m_warningsDisabled = !!i3897[11]
  request.r(i3897[12], i3897[13], 0, i3896, 'm_defaultFontAsset')
  i3896.m_defaultFontAssetPath = i3897[14]
  i3896.m_defaultFontSize = i3897[15]
  i3896.m_defaultAutoSizeMinRatio = i3897[16]
  i3896.m_defaultAutoSizeMaxRatio = i3897[17]
  i3896.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i3897[18], i3897[19] )
  i3896.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i3897[20], i3897[21] )
  i3896.m_autoSizeTextContainer = !!i3897[22]
  i3896.m_IsTextObjectScaleStatic = !!i3897[23]
  var i3901 = i3897[24]
  var i3900 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i3901.length; i += 2) {
  request.r(i3901[i + 0], i3901[i + 1], 1, i3900, '')
  }
  i3896.m_fallbackFontAssets = i3900
  i3896.m_matchMaterialPreset = !!i3897[25]
  i3896.m_HideSubTextObjects = !!i3897[26]
  request.r(i3897[27], i3897[28], 0, i3896, 'm_defaultSpriteAsset')
  i3896.m_defaultSpriteAssetPath = i3897[29]
  i3896.m_enableEmojiSupport = !!i3897[30]
  i3896.m_MissingCharacterSpriteUnicode = i3897[31]
  var i3903 = i3897[32]
  var i3902 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i3903.length; i += 2) {
  request.r(i3903[i + 0], i3903[i + 1], 1, i3902, '')
  }
  i3896.m_EmojiFallbackTextAssets = i3902
  i3896.m_defaultColorGradientPresetsPath = i3897[33]
  request.r(i3897[34], i3897[35], 0, i3896, 'm_defaultStyleSheet')
  i3896.m_StyleSheetsResourcePath = i3897[36]
  request.r(i3897[37], i3897[38], 0, i3896, 'm_leadingCharacters')
  request.r(i3897[39], i3897[40], 0, i3896, 'm_followingCharacters')
  i3896.m_UseModernHangulLineBreakingRules = !!i3897[41]
  return i3896
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i3906 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i3907 = data
  request.r(i3907[0], i3907[1], 0, i3906, 'spriteSheet')
  var i3909 = i3907[2]
  var i3908 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i3909.length; i += 1) {
    i3908.add(request.d('TMPro.TMP_Sprite', i3909[i + 0]));
  }
  i3906.spriteInfoList = i3908
  var i3911 = i3907[3]
  var i3910 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i3911.length; i += 2) {
  request.r(i3911[i + 0], i3911[i + 1], 1, i3910, '')
  }
  i3906.fallbackSpriteAssets = i3910
  var i3913 = i3907[4]
  var i3912 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i3913.length; i += 1) {
    i3912.add(request.d('TMPro.TMP_SpriteCharacter', i3913[i + 0]));
  }
  i3906.m_SpriteCharacterTable = i3912
  var i3915 = i3907[5]
  var i3914 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i3915.length; i += 1) {
    i3914.add(request.d('TMPro.TMP_SpriteGlyph', i3915[i + 0]));
  }
  i3906.m_GlyphTable = i3914
  i3906.m_Version = i3907[6]
  i3906.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i3907[7], i3906.m_FaceInfo)
  request.r(i3907[8], i3907[9], 0, i3906, 'm_Material')
  return i3906
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i3918 = root || request.c( 'TMPro.TMP_Sprite' )
  var i3919 = data
  i3918.name = i3919[0]
  i3918.hashCode = i3919[1]
  i3918.unicode = i3919[2]
  i3918.pivot = new pc.Vec2( i3919[3], i3919[4] )
  request.r(i3919[5], i3919[6], 0, i3918, 'sprite')
  i3918.id = i3919[7]
  i3918.x = i3919[8]
  i3918.y = i3919[9]
  i3918.width = i3919[10]
  i3918.height = i3919[11]
  i3918.xOffset = i3919[12]
  i3918.yOffset = i3919[13]
  i3918.xAdvance = i3919[14]
  i3918.scale = i3919[15]
  return i3918
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i3924 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i3925 = data
  i3924.m_Name = i3925[0]
  i3924.m_ElementType = i3925[1]
  i3924.m_Unicode = i3925[2]
  i3924.m_GlyphIndex = i3925[3]
  i3924.m_Scale = i3925[4]
  return i3924
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i3928 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i3929 = data
  request.r(i3929[0], i3929[1], 0, i3928, 'sprite')
  i3928.m_Index = i3929[2]
  i3928.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i3929[3], i3928.m_Metrics)
  i3928.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i3929[4], i3928.m_GlyphRect)
  i3928.m_Scale = i3929[5]
  i3928.m_AtlasIndex = i3929[6]
  i3928.m_ClassDefinitionType = i3929[7]
  return i3928
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i3930 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i3931 = data
  var i3933 = i3931[0]
  var i3932 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i3933.length; i += 1) {
    i3932.add(request.d('TMPro.TMP_Style', i3933[i + 0]));
  }
  i3930.m_StyleList = i3932
  return i3930
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i3936 = root || request.c( 'TMPro.TMP_Style' )
  var i3937 = data
  i3936.m_Name = i3937[0]
  i3936.m_HashCode = i3937[1]
  i3936.m_OpeningDefinition = i3937[2]
  i3936.m_ClosingDefinition = i3937[3]
  i3936.m_OpeningTagArray = i3937[4]
  i3936.m_ClosingTagArray = i3937[5]
  return i3936
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i3938 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i3939 = data
  var i3941 = i3939[0]
  var i3940 = []
  for(var i = 0; i < i3941.length; i += 1) {
    i3940.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i3941[i + 0]) );
  }
  i3938.files = i3940
  i3938.componentToPrefabIds = i3939[1]
  return i3938
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i3944 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i3945 = data
  i3944.path = i3945[0]
  request.r(i3945[1], i3945[2], 0, i3944, 'unityObject')
  return i3944
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i3946 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i3947 = data
  var i3949 = i3947[0]
  var i3948 = []
  for(var i = 0; i < i3949.length; i += 1) {
    i3948.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i3949[i + 0]) );
  }
  i3946.scriptsExecutionOrder = i3948
  var i3951 = i3947[1]
  var i3950 = []
  for(var i = 0; i < i3951.length; i += 1) {
    i3950.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i3951[i + 0]) );
  }
  i3946.sortingLayers = i3950
  var i3953 = i3947[2]
  var i3952 = []
  for(var i = 0; i < i3953.length; i += 1) {
    i3952.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i3953[i + 0]) );
  }
  i3946.cullingLayers = i3952
  i3946.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i3947[3], i3946.timeSettings)
  i3946.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i3947[4], i3946.physicsSettings)
  i3946.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i3947[5], i3946.physics2DSettings)
  i3946.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i3947[6], i3946.qualitySettings)
  i3946.enableRealtimeShadows = !!i3947[7]
  i3946.enableAutoInstancing = !!i3947[8]
  i3946.enableStaticBatching = !!i3947[9]
  i3946.enableDynamicBatching = !!i3947[10]
  i3946.lightmapEncodingQuality = i3947[11]
  i3946.desiredColorSpace = i3947[12]
  var i3955 = i3947[13]
  var i3954 = []
  for(var i = 0; i < i3955.length; i += 1) {
    i3954.push( i3955[i + 0] );
  }
  i3946.allTags = i3954
  return i3946
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i3958 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i3959 = data
  i3958.name = i3959[0]
  i3958.value = i3959[1]
  return i3958
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i3962 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i3963 = data
  i3962.id = i3963[0]
  i3962.name = i3963[1]
  i3962.value = i3963[2]
  return i3962
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i3966 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i3967 = data
  i3966.id = i3967[0]
  i3966.name = i3967[1]
  return i3966
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i3968 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i3969 = data
  i3968.fixedDeltaTime = i3969[0]
  i3968.maximumDeltaTime = i3969[1]
  i3968.timeScale = i3969[2]
  i3968.maximumParticleTimestep = i3969[3]
  return i3968
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i3970 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i3971 = data
  i3970.gravity = new pc.Vec3( i3971[0], i3971[1], i3971[2] )
  i3970.defaultSolverIterations = i3971[3]
  i3970.bounceThreshold = i3971[4]
  i3970.autoSyncTransforms = !!i3971[5]
  i3970.autoSimulation = !!i3971[6]
  var i3973 = i3971[7]
  var i3972 = []
  for(var i = 0; i < i3973.length; i += 1) {
    i3972.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i3973[i + 0]) );
  }
  i3970.collisionMatrix = i3972
  return i3970
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i3976 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i3977 = data
  i3976.enabled = !!i3977[0]
  i3976.layerId = i3977[1]
  i3976.otherLayerId = i3977[2]
  return i3976
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i3978 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i3979 = data
  request.r(i3979[0], i3979[1], 0, i3978, 'material')
  i3978.gravity = new pc.Vec2( i3979[2], i3979[3] )
  i3978.positionIterations = i3979[4]
  i3978.velocityIterations = i3979[5]
  i3978.velocityThreshold = i3979[6]
  i3978.maxLinearCorrection = i3979[7]
  i3978.maxAngularCorrection = i3979[8]
  i3978.maxTranslationSpeed = i3979[9]
  i3978.maxRotationSpeed = i3979[10]
  i3978.baumgarteScale = i3979[11]
  i3978.baumgarteTOIScale = i3979[12]
  i3978.timeToSleep = i3979[13]
  i3978.linearSleepTolerance = i3979[14]
  i3978.angularSleepTolerance = i3979[15]
  i3978.defaultContactOffset = i3979[16]
  i3978.autoSimulation = !!i3979[17]
  i3978.queriesHitTriggers = !!i3979[18]
  i3978.queriesStartInColliders = !!i3979[19]
  i3978.callbacksOnDisable = !!i3979[20]
  i3978.reuseCollisionCallbacks = !!i3979[21]
  i3978.autoSyncTransforms = !!i3979[22]
  var i3981 = i3979[23]
  var i3980 = []
  for(var i = 0; i < i3981.length; i += 1) {
    i3980.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i3981[i + 0]) );
  }
  i3978.collisionMatrix = i3980
  return i3978
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i3984 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i3985 = data
  i3984.enabled = !!i3985[0]
  i3984.layerId = i3985[1]
  i3984.otherLayerId = i3985[2]
  return i3984
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i3986 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i3987 = data
  var i3989 = i3987[0]
  var i3988 = []
  for(var i = 0; i < i3989.length; i += 1) {
    i3988.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i3989[i + 0]) );
  }
  i3986.qualityLevels = i3988
  var i3991 = i3987[1]
  var i3990 = []
  for(var i = 0; i < i3991.length; i += 1) {
    i3990.push( i3991[i + 0] );
  }
  i3986.names = i3990
  i3986.shadows = i3987[2]
  i3986.anisotropicFiltering = i3987[3]
  i3986.antiAliasing = i3987[4]
  i3986.lodBias = i3987[5]
  i3986.shadowCascades = i3987[6]
  i3986.shadowDistance = i3987[7]
  i3986.shadowmaskMode = i3987[8]
  i3986.shadowProjection = i3987[9]
  i3986.shadowResolution = i3987[10]
  i3986.softParticles = !!i3987[11]
  i3986.softVegetation = !!i3987[12]
  i3986.activeColorSpace = i3987[13]
  i3986.desiredColorSpace = i3987[14]
  i3986.masterTextureLimit = i3987[15]
  i3986.maxQueuedFrames = i3987[16]
  i3986.particleRaycastBudget = i3987[17]
  i3986.pixelLightCount = i3987[18]
  i3986.realtimeReflectionProbes = !!i3987[19]
  i3986.shadowCascade2Split = i3987[20]
  i3986.shadowCascade4Split = new pc.Vec3( i3987[21], i3987[22], i3987[23] )
  i3986.streamingMipmapsActive = !!i3987[24]
  i3986.vSyncCount = i3987[25]
  i3986.asyncUploadBufferSize = i3987[26]
  i3986.asyncUploadTimeSlice = i3987[27]
  i3986.billboardsFaceCameraPosition = !!i3987[28]
  i3986.shadowNearPlaneOffset = i3987[29]
  i3986.streamingMipmapsMemoryBudget = i3987[30]
  i3986.maximumLODLevel = i3987[31]
  i3986.streamingMipmapsAddAllCameras = !!i3987[32]
  i3986.streamingMipmapsMaxLevelReduction = i3987[33]
  i3986.streamingMipmapsRenderersPerFrame = i3987[34]
  i3986.resolutionScalingFixedDPIFactor = i3987[35]
  i3986.streamingMipmapsMaxFileIORequests = i3987[36]
  i3986.currentQualityLevel = i3987[37]
  return i3986
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i3996 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i3997 = data
  i3996.weight = i3997[0]
  i3996.vertices = i3997[1]
  i3996.normals = i3997[2]
  i3996.tangents = i3997[3]
  return i3996
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i4000 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i4001 = data
  i4000.mode = i4001[0]
  i4000.parameter = i4001[1]
  i4000.threshold = i4001[2]
  return i4000
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i4002 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i4003 = data
  i4002.m_XCoordinate = i4003[0]
  i4002.m_YCoordinate = i4003[1]
  return i4002
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i4004 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i4005 = data
  i4004.m_XPositionAdjustment = i4005[0]
  i4004.m_YPositionAdjustment = i4005[1]
  return i4004
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i4006 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i4007 = data
  i4006.xPlacement = i4007[0]
  i4006.yPlacement = i4007[1]
  i4006.xAdvance = i4007[2]
  i4006.yAdvance = i4007[3]
  return i4006
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D":{"usedByComposite":0,"autoTiling":1,"points":2,"enabled":3,"isTrigger":4,"usedByEffector":5,"density":6,"offset":7,"material":9},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider2D":{"size":0,"direction":2,"enabled":3,"isTrigger":4,"usedByEffector":5,"density":6,"offset":7,"material":9},"Luna.Unity.DTO.UnityEngine.Components.SpriteMask":{"frontSortingLayerID":0,"frontSortingOrder":1,"backSortingLayerID":2,"backSortingOrder":3,"alphaCutoff":4,"sprite":5,"tileMode":7,"isCustomRangeActive":8,"spriteSortPoint":9,"enabled":10,"sharedMaterial":11,"sharedMaterials":13,"receiveShadows":14,"shadowCastingMode":15,"sortingLayerID":16,"sortingOrder":17,"lightmapIndex":18,"lightmapSceneIndex":19,"lightmapScaleOffset":20,"lightProbeUsage":24,"reflectionProbeUsage":25},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.PhysicsMaterial2D":{"name":0,"bounciness":1,"friction":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2}}

Deserializers.requiredComponents = {"54":[55],"56":[55],"57":[55],"58":[55],"59":[55],"60":[55],"61":[62],"63":[2],"64":[65],"66":[65],"67":[65],"68":[65],"69":[65],"70":[65],"71":[38],"72":[38],"73":[38],"74":[38],"75":[38],"76":[38],"77":[38],"78":[38],"79":[38],"80":[38],"81":[38],"82":[38],"83":[38],"84":[2],"85":[18],"86":[87],"88":[87],"28":[17],"7":[2],"39":[38],"42":[37],"89":[12],"90":[2],"91":[92],"93":[46],"94":[28],"95":[17],"20":[18,17],"96":[17,31],"97":[17],"98":[31,17],"99":[18],"100":[31,17],"101":[17],"102":[103],"104":[103],"105":[103],"106":[17],"107":[17],"30":[28],"32":[31,17],"108":[17],"29":[28],"109":[17],"110":[17],"111":[17],"112":[17],"113":[17],"114":[17],"115":[17],"116":[17],"117":[17],"118":[31,17],"119":[17],"120":[17],"121":[17],"122":[17],"123":[31,17],"124":[17],"125":[46],"126":[46],"47":[46],"127":[46],"128":[2],"129":[2]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.MonoBehaviour","CameraFollow2D","UnityEngine.Transform","AutoCameraFit","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Mesh","UnityEngine.Material","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","MoveBetweenPoints","UnityEngine.RectTransform","UnityEngine.MeshRenderer","UnityEngine.EventSystems.UIBehaviour","TMPro.TextMeshPro","TMPro.TMP_FontAsset","UnityEngine.MeshFilter","PlayerCardUIManager","UnityEngine.GameObject","Ply_SoundManager","UnityEngine.AudioSource","UnityEngine.AudioClip","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.UI.Button","ScreenHeightPositionAnchor","UnityEngine.PolygonCollider2D","UnityEngine.PhysicsMaterial2D","UnityEngine.BoxCollider2D","UnityEngine.Rigidbody2D","BatStrikeController","CupCollision","UnityEngine.CapsuleCollider2D","SlotTrigger","PlayerCardData","UnityEngine.SpriteMask","HideOnFirstClick","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.Font","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.InputSystem.UI.InputSystemUIInputModule","UnityEngine.InputSystem.UI.TrackedDeviceRaycaster","TMPro.TextContainer","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.38f1";

Deserializers.productName = "PLY_MiniSoccer";

Deserializers.lunaInitializationTime = "07/15/2026 03:53:54";

Deserializers.lunaDaysRunning = "22.9";

Deserializers.lunaVersion = "7.1.0";

Deserializers.lunaSHA = "cf93782349542fe0b84ad13951a26809f8419628";

Deserializers.creativeName = "PLY_V18";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1742";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4550";

Deserializers.runtimeAnalysisExcludedModules = "physics3d, prefabs";

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

Deserializers.buildID = "b6cdb0ee-b04e-4037-a281-631281d1b820";

Deserializers.runtimeInitializeOnLoadInfos = [[["Unity","Services","Core","Internal","UnityServicesInitializer","EnableServicesInitializationAsync"],["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["DG","Tweening","DOTween","RuntimeOnLoad"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["Unity","Services","Core","Registration","CorePackageInitializer","InitializeOnLoad"],["Unity","Services","Core","Internal","TaskAsyncOperation","SetScheduler"],["Unity","Services","Core","Environments","Client","Scheduler","EngineStateHelper","Init"],["Unity","Services","Core","Environments","Client","Scheduler","ThreadHelper","Init"],["Ua2CoreInitializeCallback","Register"],["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["Unity","AI","Navigation","NavMeshLink","ClearTrackedList"],["Unity","AI","Navigation","NavMeshSurface","ClearNavMeshSurfaces"],["Unity","AI","Navigation","NavMeshModifierVolume","ClearNavMeshModifiers"],["Unity","AI","Navigation","NavMeshModifier","ClearNavMeshModifiers"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["Unity","Services","Core","Internal","UnityServicesInitializer","CreateStaticInstance"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[["Unity","Services","Core","Environments","Client","Http","JsonHelpers","RegisterTypesForAOT"]],[["Unity","Services","Core","UnityThreadUtils","CaptureUnityThreadInfo"],["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

