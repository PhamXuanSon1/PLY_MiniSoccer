var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i3446 = root || request.c( 'UnityEngine.JointSpring' )
  var i3447 = data
  i3446.spring = i3447[0]
  i3446.damper = i3447[1]
  i3446.targetPosition = i3447[2]
  return i3446
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i3448 = root || request.c( 'UnityEngine.JointMotor' )
  var i3449 = data
  i3448.m_TargetVelocity = i3449[0]
  i3448.m_Force = i3449[1]
  i3448.m_FreeSpin = i3449[2]
  return i3448
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i3450 = root || request.c( 'UnityEngine.JointLimits' )
  var i3451 = data
  i3450.m_Min = i3451[0]
  i3450.m_Max = i3451[1]
  i3450.m_Bounciness = i3451[2]
  i3450.m_BounceMinVelocity = i3451[3]
  i3450.m_ContactDistance = i3451[4]
  i3450.minBounce = i3451[5]
  i3450.maxBounce = i3451[6]
  return i3450
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i3452 = root || request.c( 'UnityEngine.JointDrive' )
  var i3453 = data
  i3452.m_PositionSpring = i3453[0]
  i3452.m_PositionDamper = i3453[1]
  i3452.m_MaximumForce = i3453[2]
  i3452.m_UseAcceleration = i3453[3]
  return i3452
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i3454 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i3455 = data
  i3454.m_Spring = i3455[0]
  i3454.m_Damper = i3455[1]
  return i3454
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i3456 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i3457 = data
  i3456.m_Limit = i3457[0]
  i3456.m_Bounciness = i3457[1]
  i3456.m_ContactDistance = i3457[2]
  return i3456
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i3458 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i3459 = data
  i3458.m_ExtremumSlip = i3459[0]
  i3458.m_ExtremumValue = i3459[1]
  i3458.m_AsymptoteSlip = i3459[2]
  i3458.m_AsymptoteValue = i3459[3]
  i3458.m_Stiffness = i3459[4]
  return i3458
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i3460 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i3461 = data
  i3460.m_LowerAngle = i3461[0]
  i3460.m_UpperAngle = i3461[1]
  return i3460
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i3462 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i3463 = data
  i3462.m_MotorSpeed = i3463[0]
  i3462.m_MaximumMotorTorque = i3463[1]
  return i3462
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i3464 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i3465 = data
  i3464.m_DampingRatio = i3465[0]
  i3464.m_Frequency = i3465[1]
  i3464.m_Angle = i3465[2]
  return i3464
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i3466 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i3467 = data
  i3466.m_LowerTranslation = i3467[0]
  i3466.m_UpperTranslation = i3467[1]
  return i3466
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i3468 = root || new pc.UnityMaterial()
  var i3469 = data
  i3468.name = i3469[0]
  request.r(i3469[1], i3469[2], 0, i3468, 'shader')
  i3468.renderQueue = i3469[3]
  i3468.enableInstancing = !!i3469[4]
  var i3471 = i3469[5]
  var i3470 = []
  for(var i = 0; i < i3471.length; i += 1) {
    i3470.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i3471[i + 0]) );
  }
  i3468.floatParameters = i3470
  var i3473 = i3469[6]
  var i3472 = []
  for(var i = 0; i < i3473.length; i += 1) {
    i3472.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i3473[i + 0]) );
  }
  i3468.colorParameters = i3472
  var i3475 = i3469[7]
  var i3474 = []
  for(var i = 0; i < i3475.length; i += 1) {
    i3474.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i3475[i + 0]) );
  }
  i3468.vectorParameters = i3474
  var i3477 = i3469[8]
  var i3476 = []
  for(var i = 0; i < i3477.length; i += 1) {
    i3476.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i3477[i + 0]) );
  }
  i3468.textureParameters = i3476
  var i3479 = i3469[9]
  var i3478 = []
  for(var i = 0; i < i3479.length; i += 1) {
    i3478.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i3479[i + 0]) );
  }
  i3468.materialFlags = i3478
  return i3468
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i3482 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i3483 = data
  i3482.name = i3483[0]
  i3482.value = i3483[1]
  return i3482
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i3486 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i3487 = data
  i3486.name = i3487[0]
  i3486.value = new pc.Color(i3487[1], i3487[2], i3487[3], i3487[4])
  return i3486
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i3490 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i3491 = data
  i3490.name = i3491[0]
  i3490.value = new pc.Vec4( i3491[1], i3491[2], i3491[3], i3491[4] )
  return i3490
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i3494 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i3495 = data
  i3494.name = i3495[0]
  request.r(i3495[1], i3495[2], 0, i3494, 'value')
  return i3494
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i3498 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i3499 = data
  i3498.name = i3499[0]
  i3498.enabled = !!i3499[1]
  return i3498
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i3500 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i3501 = data
  i3500.name = i3501[0]
  i3500.width = i3501[1]
  i3500.height = i3501[2]
  i3500.mipmapCount = i3501[3]
  i3500.anisoLevel = i3501[4]
  i3500.filterMode = i3501[5]
  i3500.hdr = !!i3501[6]
  i3500.format = i3501[7]
  i3500.wrapMode = i3501[8]
  i3500.alphaIsTransparency = !!i3501[9]
  i3500.alphaSource = i3501[10]
  i3500.graphicsFormat = i3501[11]
  i3500.sRGBTexture = !!i3501[12]
  i3500.desiredColorSpace = i3501[13]
  i3500.wrapU = i3501[14]
  i3500.wrapV = i3501[15]
  return i3500
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i3502 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i3503 = data
  i3502.name = i3503[0]
  i3502.halfPrecision = !!i3503[1]
  i3502.useSimplification = !!i3503[2]
  i3502.useUInt32IndexFormat = !!i3503[3]
  i3502.vertexCount = i3503[4]
  i3502.aabb = i3503[5]
  var i3505 = i3503[6]
  var i3504 = []
  for(var i = 0; i < i3505.length; i += 1) {
    i3504.push( !!i3505[i + 0] );
  }
  i3502.streams = i3504
  i3502.vertices = i3503[7]
  var i3507 = i3503[8]
  var i3506 = []
  for(var i = 0; i < i3507.length; i += 1) {
    i3506.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i3507[i + 0]) );
  }
  i3502.subMeshes = i3506
  var i3509 = i3503[9]
  var i3508 = []
  for(var i = 0; i < i3509.length; i += 16) {
    i3508.push( new pc.Mat4().setData(i3509[i + 0], i3509[i + 1], i3509[i + 2], i3509[i + 3],  i3509[i + 4], i3509[i + 5], i3509[i + 6], i3509[i + 7],  i3509[i + 8], i3509[i + 9], i3509[i + 10], i3509[i + 11],  i3509[i + 12], i3509[i + 13], i3509[i + 14], i3509[i + 15]) );
  }
  i3502.bindposes = i3508
  var i3511 = i3503[10]
  var i3510 = []
  for(var i = 0; i < i3511.length; i += 1) {
    i3510.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i3511[i + 0]) );
  }
  i3502.blendShapes = i3510
  return i3502
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i3516 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i3517 = data
  i3516.triangles = i3517[0]
  return i3516
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i3522 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i3523 = data
  i3522.name = i3523[0]
  var i3525 = i3523[1]
  var i3524 = []
  for(var i = 0; i < i3525.length; i += 1) {
    i3524.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i3525[i + 0]) );
  }
  i3522.frames = i3524
  return i3522
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i3526 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i3527 = data
  i3526.name = i3527[0]
  i3526.index = i3527[1]
  i3526.startup = !!i3527[2]
  return i3526
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i3528 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i3529 = data
  i3528.aspect = i3529[0]
  i3528.orthographic = !!i3529[1]
  i3528.orthographicSize = i3529[2]
  i3528.backgroundColor = new pc.Color(i3529[3], i3529[4], i3529[5], i3529[6])
  i3528.nearClipPlane = i3529[7]
  i3528.farClipPlane = i3529[8]
  i3528.fieldOfView = i3529[9]
  i3528.depth = i3529[10]
  i3528.clearFlags = i3529[11]
  i3528.cullingMask = i3529[12]
  i3528.rect = i3529[13]
  request.r(i3529[14], i3529[15], 0, i3528, 'targetTexture')
  i3528.usePhysicalProperties = !!i3529[16]
  i3528.focalLength = i3529[17]
  i3528.sensorSize = new pc.Vec2( i3529[18], i3529[19] )
  i3528.lensShift = new pc.Vec2( i3529[20], i3529[21] )
  i3528.gateFit = i3529[22]
  i3528.commandBufferCount = i3529[23]
  i3528.cameraType = i3529[24]
  i3528.enabled = !!i3529[25]
  return i3528
}

Deserializers["CameraFollow2D"] = function (request, data, root) {
  var i3530 = root || request.c( 'CameraFollow2D' )
  var i3531 = data
  request.r(i3531[0], i3531[1], 0, i3530, 'target')
  i3530.smoothSpeed = i3531[2]
  i3530.offset = new pc.Vec3( i3531[3], i3531[4], i3531[5] )
  i3530.followY = !!i3531[6]
  return i3530
}

Deserializers["AutoCameraFit"] = function (request, data, root) {
  var i3532 = root || request.c( 'AutoCameraFit' )
  var i3533 = data
  request.r(i3533[0], i3533[1], 0, i3532, 'tallScreenObject')
  i3532.tallScreenRatioThreshold = i3533[2]
  i3532.tallScreenYOffset = i3533[3]
  request.r(i3533[4], i3533[5], 0, i3532, 'canvasBtn')
  request.r(i3533[6], i3533[7], 0, i3532, 'targetArea')
  i3532.paddingLandscape = i3533[8]
  i3532.paddingPortrait = i3533[9]
  i3532.extraPaddingSmallScreen = i3533[10]
  i3532.smallScreenThreshold = i3533[11]
  i3532.autoUpdateOnResize = !!i3533[12]
  i3532.adjustInEditMode = !!i3533[13]
  return i3532
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i3534 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i3535 = data
  i3534.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i3535[0], i3534.main)
  i3534.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i3535[1], i3534.colorBySpeed)
  i3534.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i3535[2], i3534.colorOverLifetime)
  i3534.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i3535[3], i3534.emission)
  i3534.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i3535[4], i3534.rotationBySpeed)
  i3534.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i3535[5], i3534.rotationOverLifetime)
  i3534.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i3535[6], i3534.shape)
  i3534.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i3535[7], i3534.sizeBySpeed)
  i3534.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i3535[8], i3534.sizeOverLifetime)
  i3534.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i3535[9], i3534.textureSheetAnimation)
  i3534.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i3535[10], i3534.velocityOverLifetime)
  i3534.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i3535[11], i3534.noise)
  i3534.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i3535[12], i3534.inheritVelocity)
  i3534.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i3535[13], i3534.forceOverLifetime)
  i3534.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i3535[14], i3534.limitVelocityOverLifetime)
  i3534.useAutoRandomSeed = !!i3535[15]
  i3534.randomSeed = i3535[16]
  return i3534
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i3536 = root || new pc.ParticleSystemMain()
  var i3537 = data
  i3536.duration = i3537[0]
  i3536.loop = !!i3537[1]
  i3536.prewarm = !!i3537[2]
  i3536.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3537[3], i3536.startDelay)
  i3536.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3537[4], i3536.startLifetime)
  i3536.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3537[5], i3536.startSpeed)
  i3536.startSize3D = !!i3537[6]
  i3536.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3537[7], i3536.startSizeX)
  i3536.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3537[8], i3536.startSizeY)
  i3536.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3537[9], i3536.startSizeZ)
  i3536.startRotation3D = !!i3537[10]
  i3536.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3537[11], i3536.startRotationX)
  i3536.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3537[12], i3536.startRotationY)
  i3536.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3537[13], i3536.startRotationZ)
  i3536.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i3537[14], i3536.startColor)
  i3536.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3537[15], i3536.gravityModifier)
  i3536.simulationSpace = i3537[16]
  request.r(i3537[17], i3537[18], 0, i3536, 'customSimulationSpace')
  i3536.simulationSpeed = i3537[19]
  i3536.useUnscaledTime = !!i3537[20]
  i3536.scalingMode = i3537[21]
  i3536.playOnAwake = !!i3537[22]
  i3536.maxParticles = i3537[23]
  i3536.emitterVelocityMode = i3537[24]
  i3536.stopAction = i3537[25]
  return i3536
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i3538 = root || new pc.MinMaxCurve()
  var i3539 = data
  i3538.mode = i3539[0]
  i3538.curveMin = new pc.AnimationCurve( { keys_flow: i3539[1] } )
  i3538.curveMax = new pc.AnimationCurve( { keys_flow: i3539[2] } )
  i3538.curveMultiplier = i3539[3]
  i3538.constantMin = i3539[4]
  i3538.constantMax = i3539[5]
  return i3538
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i3540 = root || new pc.MinMaxGradient()
  var i3541 = data
  i3540.mode = i3541[0]
  i3540.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i3541[1], i3540.gradientMin)
  i3540.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i3541[2], i3540.gradientMax)
  i3540.colorMin = new pc.Color(i3541[3], i3541[4], i3541[5], i3541[6])
  i3540.colorMax = new pc.Color(i3541[7], i3541[8], i3541[9], i3541[10])
  return i3540
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i3542 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i3543 = data
  i3542.mode = i3543[0]
  var i3545 = i3543[1]
  var i3544 = []
  for(var i = 0; i < i3545.length; i += 1) {
    i3544.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i3545[i + 0]) );
  }
  i3542.colorKeys = i3544
  var i3547 = i3543[2]
  var i3546 = []
  for(var i = 0; i < i3547.length; i += 1) {
    i3546.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i3547[i + 0]) );
  }
  i3542.alphaKeys = i3546
  return i3542
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i3548 = root || new pc.ParticleSystemColorBySpeed()
  var i3549 = data
  i3548.enabled = !!i3549[0]
  i3548.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i3549[1], i3548.color)
  i3548.range = new pc.Vec2( i3549[2], i3549[3] )
  return i3548
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i3552 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i3553 = data
  i3552.color = new pc.Color(i3553[0], i3553[1], i3553[2], i3553[3])
  i3552.time = i3553[4]
  return i3552
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i3556 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i3557 = data
  i3556.alpha = i3557[0]
  i3556.time = i3557[1]
  return i3556
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i3558 = root || new pc.ParticleSystemColorOverLifetime()
  var i3559 = data
  i3558.enabled = !!i3559[0]
  i3558.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i3559[1], i3558.color)
  return i3558
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i3560 = root || new pc.ParticleSystemEmitter()
  var i3561 = data
  i3560.enabled = !!i3561[0]
  i3560.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3561[1], i3560.rateOverTime)
  i3560.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3561[2], i3560.rateOverDistance)
  var i3563 = i3561[3]
  var i3562 = []
  for(var i = 0; i < i3563.length; i += 1) {
    i3562.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i3563[i + 0]) );
  }
  i3560.bursts = i3562
  return i3560
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i3566 = root || new pc.ParticleSystemBurst()
  var i3567 = data
  i3566.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3567[0], i3566.count)
  i3566.cycleCount = i3567[1]
  i3566.minCount = i3567[2]
  i3566.maxCount = i3567[3]
  i3566.repeatInterval = i3567[4]
  i3566.time = i3567[5]
  return i3566
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i3568 = root || new pc.ParticleSystemRotationBySpeed()
  var i3569 = data
  i3568.enabled = !!i3569[0]
  i3568.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3569[1], i3568.x)
  i3568.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3569[2], i3568.y)
  i3568.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3569[3], i3568.z)
  i3568.separateAxes = !!i3569[4]
  i3568.range = new pc.Vec2( i3569[5], i3569[6] )
  return i3568
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i3570 = root || new pc.ParticleSystemRotationOverLifetime()
  var i3571 = data
  i3570.enabled = !!i3571[0]
  i3570.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3571[1], i3570.x)
  i3570.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3571[2], i3570.y)
  i3570.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3571[3], i3570.z)
  i3570.separateAxes = !!i3571[4]
  return i3570
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i3572 = root || new pc.ParticleSystemShape()
  var i3573 = data
  i3572.enabled = !!i3573[0]
  i3572.shapeType = i3573[1]
  i3572.randomDirectionAmount = i3573[2]
  i3572.sphericalDirectionAmount = i3573[3]
  i3572.randomPositionAmount = i3573[4]
  i3572.alignToDirection = !!i3573[5]
  i3572.radius = i3573[6]
  i3572.radiusMode = i3573[7]
  i3572.radiusSpread = i3573[8]
  i3572.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3573[9], i3572.radiusSpeed)
  i3572.radiusThickness = i3573[10]
  i3572.angle = i3573[11]
  i3572.length = i3573[12]
  i3572.boxThickness = new pc.Vec3( i3573[13], i3573[14], i3573[15] )
  i3572.meshShapeType = i3573[16]
  request.r(i3573[17], i3573[18], 0, i3572, 'mesh')
  request.r(i3573[19], i3573[20], 0, i3572, 'meshRenderer')
  request.r(i3573[21], i3573[22], 0, i3572, 'skinnedMeshRenderer')
  i3572.useMeshMaterialIndex = !!i3573[23]
  i3572.meshMaterialIndex = i3573[24]
  i3572.useMeshColors = !!i3573[25]
  i3572.normalOffset = i3573[26]
  i3572.arc = i3573[27]
  i3572.arcMode = i3573[28]
  i3572.arcSpread = i3573[29]
  i3572.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3573[30], i3572.arcSpeed)
  i3572.donutRadius = i3573[31]
  i3572.position = new pc.Vec3( i3573[32], i3573[33], i3573[34] )
  i3572.rotation = new pc.Vec3( i3573[35], i3573[36], i3573[37] )
  i3572.scale = new pc.Vec3( i3573[38], i3573[39], i3573[40] )
  return i3572
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i3574 = root || new pc.ParticleSystemSizeBySpeed()
  var i3575 = data
  i3574.enabled = !!i3575[0]
  i3574.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3575[1], i3574.x)
  i3574.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3575[2], i3574.y)
  i3574.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3575[3], i3574.z)
  i3574.separateAxes = !!i3575[4]
  i3574.range = new pc.Vec2( i3575[5], i3575[6] )
  return i3574
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i3576 = root || new pc.ParticleSystemSizeOverLifetime()
  var i3577 = data
  i3576.enabled = !!i3577[0]
  i3576.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3577[1], i3576.x)
  i3576.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3577[2], i3576.y)
  i3576.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3577[3], i3576.z)
  i3576.separateAxes = !!i3577[4]
  return i3576
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i3578 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i3579 = data
  i3578.enabled = !!i3579[0]
  i3578.mode = i3579[1]
  i3578.animation = i3579[2]
  i3578.numTilesX = i3579[3]
  i3578.numTilesY = i3579[4]
  i3578.useRandomRow = !!i3579[5]
  i3578.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3579[6], i3578.frameOverTime)
  i3578.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3579[7], i3578.startFrame)
  i3578.cycleCount = i3579[8]
  i3578.rowIndex = i3579[9]
  i3578.flipU = i3579[10]
  i3578.flipV = i3579[11]
  i3578.spriteCount = i3579[12]
  var i3581 = i3579[13]
  var i3580 = []
  for(var i = 0; i < i3581.length; i += 2) {
  request.r(i3581[i + 0], i3581[i + 1], 2, i3580, '')
  }
  i3578.sprites = i3580
  return i3578
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i3584 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i3585 = data
  i3584.enabled = !!i3585[0]
  i3584.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3585[1], i3584.x)
  i3584.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3585[2], i3584.y)
  i3584.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3585[3], i3584.z)
  i3584.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3585[4], i3584.radial)
  i3584.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3585[5], i3584.speedModifier)
  i3584.space = i3585[6]
  i3584.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3585[7], i3584.orbitalX)
  i3584.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3585[8], i3584.orbitalY)
  i3584.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3585[9], i3584.orbitalZ)
  i3584.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3585[10], i3584.orbitalOffsetX)
  i3584.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3585[11], i3584.orbitalOffsetY)
  i3584.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3585[12], i3584.orbitalOffsetZ)
  return i3584
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i3586 = root || new pc.ParticleSystemNoise()
  var i3587 = data
  i3586.enabled = !!i3587[0]
  i3586.separateAxes = !!i3587[1]
  i3586.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3587[2], i3586.strengthX)
  i3586.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3587[3], i3586.strengthY)
  i3586.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3587[4], i3586.strengthZ)
  i3586.frequency = i3587[5]
  i3586.damping = !!i3587[6]
  i3586.octaveCount = i3587[7]
  i3586.octaveMultiplier = i3587[8]
  i3586.octaveScale = i3587[9]
  i3586.quality = i3587[10]
  i3586.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3587[11], i3586.scrollSpeed)
  i3586.scrollSpeedMultiplier = i3587[12]
  i3586.remapEnabled = !!i3587[13]
  i3586.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3587[14], i3586.remapX)
  i3586.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3587[15], i3586.remapY)
  i3586.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3587[16], i3586.remapZ)
  i3586.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3587[17], i3586.positionAmount)
  i3586.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3587[18], i3586.rotationAmount)
  i3586.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3587[19], i3586.sizeAmount)
  return i3586
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i3588 = root || new pc.ParticleSystemInheritVelocity()
  var i3589 = data
  i3588.enabled = !!i3589[0]
  i3588.mode = i3589[1]
  i3588.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3589[2], i3588.curve)
  return i3588
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i3590 = root || new pc.ParticleSystemForceOverLifetime()
  var i3591 = data
  i3590.enabled = !!i3591[0]
  i3590.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3591[1], i3590.x)
  i3590.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3591[2], i3590.y)
  i3590.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3591[3], i3590.z)
  i3590.space = i3591[4]
  i3590.randomized = !!i3591[5]
  return i3590
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i3592 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i3593 = data
  i3592.enabled = !!i3593[0]
  i3592.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3593[1], i3592.limit)
  i3592.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3593[2], i3592.limitX)
  i3592.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3593[3], i3592.limitY)
  i3592.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3593[4], i3592.limitZ)
  i3592.dampen = i3593[5]
  i3592.separateAxes = !!i3593[6]
  i3592.space = i3593[7]
  i3592.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3593[8], i3592.drag)
  i3592.multiplyDragByParticleSize = !!i3593[9]
  i3592.multiplyDragByParticleVelocity = !!i3593[10]
  return i3592
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i3594 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i3595 = data
  request.r(i3595[0], i3595[1], 0, i3594, 'mesh')
  i3594.meshCount = i3595[2]
  i3594.activeVertexStreamsCount = i3595[3]
  i3594.alignment = i3595[4]
  i3594.renderMode = i3595[5]
  i3594.sortMode = i3595[6]
  i3594.lengthScale = i3595[7]
  i3594.velocityScale = i3595[8]
  i3594.cameraVelocityScale = i3595[9]
  i3594.normalDirection = i3595[10]
  i3594.sortingFudge = i3595[11]
  i3594.minParticleSize = i3595[12]
  i3594.maxParticleSize = i3595[13]
  i3594.pivot = new pc.Vec3( i3595[14], i3595[15], i3595[16] )
  request.r(i3595[17], i3595[18], 0, i3594, 'trailMaterial')
  i3594.applyActiveColorSpace = !!i3595[19]
  i3594.enabled = !!i3595[20]
  request.r(i3595[21], i3595[22], 0, i3594, 'sharedMaterial')
  var i3597 = i3595[23]
  var i3596 = []
  for(var i = 0; i < i3597.length; i += 2) {
  request.r(i3597[i + 0], i3597[i + 1], 2, i3596, '')
  }
  i3594.sharedMaterials = i3596
  i3594.receiveShadows = !!i3595[24]
  i3594.shadowCastingMode = i3595[25]
  i3594.sortingLayerID = i3595[26]
  i3594.sortingOrder = i3595[27]
  i3594.lightmapIndex = i3595[28]
  i3594.lightmapSceneIndex = i3595[29]
  i3594.lightmapScaleOffset = new pc.Vec4( i3595[30], i3595[31], i3595[32], i3595[33] )
  i3594.lightProbeUsage = i3595[34]
  i3594.reflectionProbeUsage = i3595[35]
  return i3594
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i3600 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i3601 = data
  i3600.name = i3601[0]
  i3600.tagId = i3601[1]
  i3600.enabled = !!i3601[2]
  i3600.isStatic = !!i3601[3]
  i3600.layer = i3601[4]
  return i3600
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i3602 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i3603 = data
  i3602.color = new pc.Color(i3603[0], i3603[1], i3603[2], i3603[3])
  request.r(i3603[4], i3603[5], 0, i3602, 'sprite')
  i3602.flipX = !!i3603[6]
  i3602.flipY = !!i3603[7]
  i3602.drawMode = i3603[8]
  i3602.size = new pc.Vec2( i3603[9], i3603[10] )
  i3602.tileMode = i3603[11]
  i3602.adaptiveModeThreshold = i3603[12]
  i3602.maskInteraction = i3603[13]
  i3602.spriteSortPoint = i3603[14]
  i3602.enabled = !!i3603[15]
  request.r(i3603[16], i3603[17], 0, i3602, 'sharedMaterial')
  var i3605 = i3603[18]
  var i3604 = []
  for(var i = 0; i < i3605.length; i += 2) {
  request.r(i3605[i + 0], i3605[i + 1], 2, i3604, '')
  }
  i3602.sharedMaterials = i3604
  i3602.receiveShadows = !!i3603[19]
  i3602.shadowCastingMode = i3603[20]
  i3602.sortingLayerID = i3603[21]
  i3602.sortingOrder = i3603[22]
  i3602.lightmapIndex = i3603[23]
  i3602.lightmapSceneIndex = i3603[24]
  i3602.lightmapScaleOffset = new pc.Vec4( i3603[25], i3603[26], i3603[27], i3603[28] )
  i3602.lightProbeUsage = i3603[29]
  i3602.reflectionProbeUsage = i3603[30]
  return i3602
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i3606 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i3607 = data
  request.r(i3607[0], i3607[1], 0, i3606, 'animatorController')
  request.r(i3607[2], i3607[3], 0, i3606, 'avatar')
  i3606.updateMode = i3607[4]
  i3606.hasTransformHierarchy = !!i3607[5]
  i3606.applyRootMotion = !!i3607[6]
  var i3609 = i3607[7]
  var i3608 = []
  for(var i = 0; i < i3609.length; i += 2) {
  request.r(i3609[i + 0], i3609[i + 1], 2, i3608, '')
  }
  i3606.humanBones = i3608
  i3606.enabled = !!i3607[8]
  return i3606
}

Deserializers["MoveBetweenPoints"] = function (request, data, root) {
  var i3612 = root || request.c( 'MoveBetweenPoints' )
  var i3613 = data
  request.r(i3613[0], i3613[1], 0, i3612, 'pointA')
  request.r(i3613[2], i3613[3], 0, i3612, 'pointB')
  i3612.duration = i3613[4]
  return i3612
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i3614 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i3615 = data
  i3614.pivot = new pc.Vec2( i3615[0], i3615[1] )
  i3614.anchorMin = new pc.Vec2( i3615[2], i3615[3] )
  i3614.anchorMax = new pc.Vec2( i3615[4], i3615[5] )
  i3614.sizeDelta = new pc.Vec2( i3615[6], i3615[7] )
  i3614.anchoredPosition3D = new pc.Vec3( i3615[8], i3615[9], i3615[10] )
  i3614.rotation = new pc.Quat(i3615[11], i3615[12], i3615[13], i3615[14])
  i3614.scale = new pc.Vec3( i3615[15], i3615[16], i3615[17] )
  return i3614
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i3616 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i3617 = data
  request.r(i3617[0], i3617[1], 0, i3616, 'additionalVertexStreams')
  i3616.enabled = !!i3617[2]
  request.r(i3617[3], i3617[4], 0, i3616, 'sharedMaterial')
  var i3619 = i3617[5]
  var i3618 = []
  for(var i = 0; i < i3619.length; i += 2) {
  request.r(i3619[i + 0], i3619[i + 1], 2, i3618, '')
  }
  i3616.sharedMaterials = i3618
  i3616.receiveShadows = !!i3617[6]
  i3616.shadowCastingMode = i3617[7]
  i3616.sortingLayerID = i3617[8]
  i3616.sortingOrder = i3617[9]
  i3616.lightmapIndex = i3617[10]
  i3616.lightmapSceneIndex = i3617[11]
  i3616.lightmapScaleOffset = new pc.Vec4( i3617[12], i3617[13], i3617[14], i3617[15] )
  i3616.lightProbeUsage = i3617[16]
  i3616.reflectionProbeUsage = i3617[17]
  return i3616
}

Deserializers["TMPro.TextMeshPro"] = function (request, data, root) {
  var i3620 = root || request.c( 'TMPro.TextMeshPro' )
  var i3621 = data
  i3620._SortingLayer = i3621[0]
  i3620._SortingLayerID = i3621[1]
  i3620._SortingOrder = i3621[2]
  i3620.m_hasFontAssetChanged = !!i3621[3]
  request.r(i3621[4], i3621[5], 0, i3620, 'm_renderer')
  i3620.m_maskType = i3621[6]
  i3620.m_text = i3621[7]
  i3620.m_isRightToLeft = !!i3621[8]
  request.r(i3621[9], i3621[10], 0, i3620, 'm_fontAsset')
  request.r(i3621[11], i3621[12], 0, i3620, 'm_sharedMaterial')
  var i3623 = i3621[13]
  var i3622 = []
  for(var i = 0; i < i3623.length; i += 2) {
  request.r(i3623[i + 0], i3623[i + 1], 2, i3622, '')
  }
  i3620.m_fontSharedMaterials = i3622
  request.r(i3621[14], i3621[15], 0, i3620, 'm_fontMaterial')
  var i3625 = i3621[16]
  var i3624 = []
  for(var i = 0; i < i3625.length; i += 2) {
  request.r(i3625[i + 0], i3625[i + 1], 2, i3624, '')
  }
  i3620.m_fontMaterials = i3624
  i3620.m_fontColor32 = UnityEngine.Color32.ConstructColor(i3621[17], i3621[18], i3621[19], i3621[20])
  i3620.m_fontColor = new pc.Color(i3621[21], i3621[22], i3621[23], i3621[24])
  i3620.m_enableVertexGradient = !!i3621[25]
  i3620.m_colorMode = i3621[26]
  i3620.m_fontColorGradient = request.d('TMPro.VertexGradient', i3621[27], i3620.m_fontColorGradient)
  request.r(i3621[28], i3621[29], 0, i3620, 'm_fontColorGradientPreset')
  request.r(i3621[30], i3621[31], 0, i3620, 'm_spriteAsset')
  i3620.m_tintAllSprites = !!i3621[32]
  request.r(i3621[33], i3621[34], 0, i3620, 'm_StyleSheet')
  i3620.m_TextStyleHashCode = i3621[35]
  i3620.m_overrideHtmlColors = !!i3621[36]
  i3620.m_faceColor = UnityEngine.Color32.ConstructColor(i3621[37], i3621[38], i3621[39], i3621[40])
  i3620.m_fontSize = i3621[41]
  i3620.m_fontSizeBase = i3621[42]
  i3620.m_fontWeight = i3621[43]
  i3620.m_enableAutoSizing = !!i3621[44]
  i3620.m_fontSizeMin = i3621[45]
  i3620.m_fontSizeMax = i3621[46]
  i3620.m_fontStyle = i3621[47]
  i3620.m_HorizontalAlignment = i3621[48]
  i3620.m_VerticalAlignment = i3621[49]
  i3620.m_textAlignment = i3621[50]
  i3620.m_characterSpacing = i3621[51]
  i3620.m_wordSpacing = i3621[52]
  i3620.m_lineSpacing = i3621[53]
  i3620.m_lineSpacingMax = i3621[54]
  i3620.m_paragraphSpacing = i3621[55]
  i3620.m_charWidthMaxAdj = i3621[56]
  i3620.m_TextWrappingMode = i3621[57]
  i3620.m_wordWrappingRatios = i3621[58]
  i3620.m_overflowMode = i3621[59]
  request.r(i3621[60], i3621[61], 0, i3620, 'm_linkedTextComponent')
  request.r(i3621[62], i3621[63], 0, i3620, 'parentLinkedComponent')
  i3620.m_enableKerning = !!i3621[64]
  var i3627 = i3621[65]
  var i3626 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i3627.length; i += 1) {
    i3626.add(i3627[i + 0]);
  }
  i3620.m_ActiveFontFeatures = i3626
  i3620.m_enableExtraPadding = !!i3621[66]
  i3620.checkPaddingRequired = !!i3621[67]
  i3620.m_isRichText = !!i3621[68]
  i3620.m_parseCtrlCharacters = !!i3621[69]
  i3620.m_isOrthographic = !!i3621[70]
  i3620.m_isCullingEnabled = !!i3621[71]
  i3620.m_horizontalMapping = i3621[72]
  i3620.m_verticalMapping = i3621[73]
  i3620.m_uvLineOffset = i3621[74]
  i3620.m_geometrySortingOrder = i3621[75]
  i3620.m_IsTextObjectScaleStatic = !!i3621[76]
  i3620.m_VertexBufferAutoSizeReduction = !!i3621[77]
  i3620.m_useMaxVisibleDescender = !!i3621[78]
  i3620.m_pageToDisplay = i3621[79]
  i3620.m_margin = new pc.Vec4( i3621[80], i3621[81], i3621[82], i3621[83] )
  i3620.m_isUsingLegacyAnimationComponent = !!i3621[84]
  i3620.m_isVolumetricText = !!i3621[85]
  request.r(i3621[86], i3621[87], 0, i3620, 'm_Material')
  i3620.m_EmojiFallbackSupport = !!i3621[88]
  i3620.m_Maskable = !!i3621[89]
  i3620.m_Color = new pc.Color(i3621[90], i3621[91], i3621[92], i3621[93])
  i3620.m_RaycastTarget = !!i3621[94]
  i3620.m_RaycastPadding = new pc.Vec4( i3621[95], i3621[96], i3621[97], i3621[98] )
  return i3620
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i3628 = root || request.c( 'TMPro.VertexGradient' )
  var i3629 = data
  i3628.topLeft = new pc.Color(i3629[0], i3629[1], i3629[2], i3629[3])
  i3628.topRight = new pc.Color(i3629[4], i3629[5], i3629[6], i3629[7])
  i3628.bottomLeft = new pc.Color(i3629[8], i3629[9], i3629[10], i3629[11])
  i3628.bottomRight = new pc.Color(i3629[12], i3629[13], i3629[14], i3629[15])
  return i3628
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i3632 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i3633 = data
  request.r(i3633[0], i3633[1], 0, i3632, 'sharedMesh')
  return i3632
}

Deserializers["PlayerCardUIManager"] = function (request, data, root) {
  var i3634 = root || request.c( 'PlayerCardUIManager' )
  var i3635 = data
  request.r(i3635[0], i3635[1], 0, i3634, 'cardPanel')
  var i3637 = i3635[2]
  var i3636 = []
  for(var i = 0; i < i3637.length; i += 2) {
  request.r(i3637[i + 0], i3637[i + 1], 2, i3636, '')
  }
  i3634.extraObjectsToActivate = i3636
  i3634.waitTime = i3635[3]
  var i3639 = i3635[4]
  var i3638 = []
  for(var i = 0; i < i3639.length; i += 2) {
  request.r(i3639[i + 0], i3639[i + 1], 2, i3638, '')
  }
  i3634.objectsToTurnOnAfterWait = i3638
  var i3641 = i3635[5]
  var i3640 = []
  for(var i = 0; i < i3641.length; i += 2) {
  request.r(i3641[i + 0], i3641[i + 1], 2, i3640, '')
  }
  i3634.objectsToTurnOffAfterWait = i3640
  request.r(i3635[6], i3635[7], 0, i3634, 'nationalityText')
  request.r(i3635[8], i3635[9], 0, i3634, 'playerImage')
  request.r(i3635[10], i3635[11], 0, i3634, 'flagImage')
  return i3634
}

Deserializers["Ply_SoundManager"] = function (request, data, root) {
  var i3644 = root || request.c( 'Ply_SoundManager' )
  var i3645 = data
  i3644.fxAudio = request.d('FxAudio', i3645[0], i3644.fxAudio)
  request.r(i3645[1], i3645[2], 0, i3644, 'bgm1')
  return i3644
}

Deserializers["FxAudio"] = function (request, data, root) {
  var i3646 = root || request.c( 'FxAudio' )
  var i3647 = data
  i3646.ClickBox = request.d('SoundData', i3647[0], i3646.ClickBox)
  i3646.Happy = request.d('SoundData', i3647[1], i3646.Happy)
  i3646.Wrong = request.d('SoundData', i3647[2], i3646.Wrong)
  i3646.Spray = request.d('SoundData', i3647[3], i3646.Spray)
  i3646.Brush = request.d('SoundData', i3647[4], i3646.Brush)
  return i3646
}

Deserializers["SoundData"] = function (request, data, root) {
  var i3648 = root || request.c( 'SoundData' )
  var i3649 = data
  request.r(i3649[0], i3649[1], 0, i3648, 'clip')
  i3648.repeatCount = i3649[2]
  return i3648
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i3650 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i3651 = data
  request.r(i3651[0], i3651[1], 0, i3650, 'clip')
  request.r(i3651[2], i3651[3], 0, i3650, 'outputAudioMixerGroup')
  i3650.playOnAwake = !!i3651[4]
  i3650.loop = !!i3651[5]
  i3650.time = i3651[6]
  i3650.volume = i3651[7]
  i3650.pitch = i3651[8]
  i3650.enabled = !!i3651[9]
  return i3650
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i3652 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i3653 = data
  i3652.planeDistance = i3653[0]
  i3652.referencePixelsPerUnit = i3653[1]
  i3652.isFallbackOverlay = !!i3653[2]
  i3652.renderMode = i3653[3]
  i3652.renderOrder = i3653[4]
  i3652.sortingLayerName = i3653[5]
  i3652.sortingOrder = i3653[6]
  i3652.scaleFactor = i3653[7]
  request.r(i3653[8], i3653[9], 0, i3652, 'worldCamera')
  i3652.overrideSorting = !!i3653[10]
  i3652.pixelPerfect = !!i3653[11]
  i3652.targetDisplay = i3653[12]
  i3652.overridePixelPerfect = !!i3653[13]
  i3652.enabled = !!i3653[14]
  return i3652
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i3654 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i3655 = data
  i3654.m_UiScaleMode = i3655[0]
  i3654.m_ReferencePixelsPerUnit = i3655[1]
  i3654.m_ScaleFactor = i3655[2]
  i3654.m_ReferenceResolution = new pc.Vec2( i3655[3], i3655[4] )
  i3654.m_ScreenMatchMode = i3655[5]
  i3654.m_MatchWidthOrHeight = i3655[6]
  i3654.m_PhysicalUnit = i3655[7]
  i3654.m_FallbackScreenDPI = i3655[8]
  i3654.m_DefaultSpriteDPI = i3655[9]
  i3654.m_DynamicPixelsPerUnit = i3655[10]
  i3654.m_PresetInfoIsWorld = !!i3655[11]
  return i3654
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i3656 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i3657 = data
  i3656.m_IgnoreReversedGraphics = !!i3657[0]
  i3656.m_BlockingObjects = i3657[1]
  i3656.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i3657[2] )
  return i3656
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i3658 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i3659 = data
  i3658.cullTransparentMesh = !!i3659[0]
  return i3658
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i3660 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i3661 = data
  i3660.m_hasFontAssetChanged = !!i3661[0]
  request.r(i3661[1], i3661[2], 0, i3660, 'm_baseMaterial')
  i3660.m_maskOffset = new pc.Vec4( i3661[3], i3661[4], i3661[5], i3661[6] )
  i3660.m_text = i3661[7]
  i3660.m_isRightToLeft = !!i3661[8]
  request.r(i3661[9], i3661[10], 0, i3660, 'm_fontAsset')
  request.r(i3661[11], i3661[12], 0, i3660, 'm_sharedMaterial')
  var i3663 = i3661[13]
  var i3662 = []
  for(var i = 0; i < i3663.length; i += 2) {
  request.r(i3663[i + 0], i3663[i + 1], 2, i3662, '')
  }
  i3660.m_fontSharedMaterials = i3662
  request.r(i3661[14], i3661[15], 0, i3660, 'm_fontMaterial')
  var i3665 = i3661[16]
  var i3664 = []
  for(var i = 0; i < i3665.length; i += 2) {
  request.r(i3665[i + 0], i3665[i + 1], 2, i3664, '')
  }
  i3660.m_fontMaterials = i3664
  i3660.m_fontColor32 = UnityEngine.Color32.ConstructColor(i3661[17], i3661[18], i3661[19], i3661[20])
  i3660.m_fontColor = new pc.Color(i3661[21], i3661[22], i3661[23], i3661[24])
  i3660.m_enableVertexGradient = !!i3661[25]
  i3660.m_colorMode = i3661[26]
  i3660.m_fontColorGradient = request.d('TMPro.VertexGradient', i3661[27], i3660.m_fontColorGradient)
  request.r(i3661[28], i3661[29], 0, i3660, 'm_fontColorGradientPreset')
  request.r(i3661[30], i3661[31], 0, i3660, 'm_spriteAsset')
  i3660.m_tintAllSprites = !!i3661[32]
  request.r(i3661[33], i3661[34], 0, i3660, 'm_StyleSheet')
  i3660.m_TextStyleHashCode = i3661[35]
  i3660.m_overrideHtmlColors = !!i3661[36]
  i3660.m_faceColor = UnityEngine.Color32.ConstructColor(i3661[37], i3661[38], i3661[39], i3661[40])
  i3660.m_fontSize = i3661[41]
  i3660.m_fontSizeBase = i3661[42]
  i3660.m_fontWeight = i3661[43]
  i3660.m_enableAutoSizing = !!i3661[44]
  i3660.m_fontSizeMin = i3661[45]
  i3660.m_fontSizeMax = i3661[46]
  i3660.m_fontStyle = i3661[47]
  i3660.m_HorizontalAlignment = i3661[48]
  i3660.m_VerticalAlignment = i3661[49]
  i3660.m_textAlignment = i3661[50]
  i3660.m_characterSpacing = i3661[51]
  i3660.m_wordSpacing = i3661[52]
  i3660.m_lineSpacing = i3661[53]
  i3660.m_lineSpacingMax = i3661[54]
  i3660.m_paragraphSpacing = i3661[55]
  i3660.m_charWidthMaxAdj = i3661[56]
  i3660.m_TextWrappingMode = i3661[57]
  i3660.m_wordWrappingRatios = i3661[58]
  i3660.m_overflowMode = i3661[59]
  request.r(i3661[60], i3661[61], 0, i3660, 'm_linkedTextComponent')
  request.r(i3661[62], i3661[63], 0, i3660, 'parentLinkedComponent')
  i3660.m_enableKerning = !!i3661[64]
  var i3667 = i3661[65]
  var i3666 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i3667.length; i += 1) {
    i3666.add(i3667[i + 0]);
  }
  i3660.m_ActiveFontFeatures = i3666
  i3660.m_enableExtraPadding = !!i3661[66]
  i3660.checkPaddingRequired = !!i3661[67]
  i3660.m_isRichText = !!i3661[68]
  i3660.m_parseCtrlCharacters = !!i3661[69]
  i3660.m_isOrthographic = !!i3661[70]
  i3660.m_isCullingEnabled = !!i3661[71]
  i3660.m_horizontalMapping = i3661[72]
  i3660.m_verticalMapping = i3661[73]
  i3660.m_uvLineOffset = i3661[74]
  i3660.m_geometrySortingOrder = i3661[75]
  i3660.m_IsTextObjectScaleStatic = !!i3661[76]
  i3660.m_VertexBufferAutoSizeReduction = !!i3661[77]
  i3660.m_useMaxVisibleDescender = !!i3661[78]
  i3660.m_pageToDisplay = i3661[79]
  i3660.m_margin = new pc.Vec4( i3661[80], i3661[81], i3661[82], i3661[83] )
  i3660.m_isUsingLegacyAnimationComponent = !!i3661[84]
  i3660.m_isVolumetricText = !!i3661[85]
  request.r(i3661[86], i3661[87], 0, i3660, 'm_Material')
  i3660.m_EmojiFallbackSupport = !!i3661[88]
  i3660.m_Maskable = !!i3661[89]
  i3660.m_Color = new pc.Color(i3661[90], i3661[91], i3661[92], i3661[93])
  i3660.m_RaycastTarget = !!i3661[94]
  i3660.m_RaycastPadding = new pc.Vec4( i3661[95], i3661[96], i3661[97], i3661[98] )
  return i3660
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i3668 = root || request.c( 'UnityEngine.UI.Image' )
  var i3669 = data
  request.r(i3669[0], i3669[1], 0, i3668, 'm_Sprite')
  i3668.m_Type = i3669[2]
  i3668.m_PreserveAspect = !!i3669[3]
  i3668.m_FillCenter = !!i3669[4]
  i3668.m_FillMethod = i3669[5]
  i3668.m_FillAmount = i3669[6]
  i3668.m_FillClockwise = !!i3669[7]
  i3668.m_FillOrigin = i3669[8]
  i3668.m_UseSpriteMesh = !!i3669[9]
  i3668.m_PixelsPerUnitMultiplier = i3669[10]
  request.r(i3669[11], i3669[12], 0, i3668, 'm_Material')
  i3668.m_Maskable = !!i3669[13]
  i3668.m_Color = new pc.Color(i3669[14], i3669[15], i3669[16], i3669[17])
  i3668.m_RaycastTarget = !!i3669[18]
  i3668.m_RaycastPadding = new pc.Vec4( i3669[19], i3669[20], i3669[21], i3669[22] )
  return i3668
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i3670 = root || request.c( 'UnityEngine.UI.Button' )
  var i3671 = data
  i3670.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i3671[0], i3670.m_OnClick)
  i3670.m_Navigation = request.d('UnityEngine.UI.Navigation', i3671[1], i3670.m_Navigation)
  i3670.m_Transition = i3671[2]
  i3670.m_Colors = request.d('UnityEngine.UI.ColorBlock', i3671[3], i3670.m_Colors)
  i3670.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i3671[4], i3670.m_SpriteState)
  i3670.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i3671[5], i3670.m_AnimationTriggers)
  i3670.m_Interactable = !!i3671[6]
  request.r(i3671[7], i3671[8], 0, i3670, 'm_TargetGraphic')
  return i3670
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i3672 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i3673 = data
  i3672.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i3673[0], i3672.m_PersistentCalls)
  return i3672
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i3674 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i3675 = data
  var i3677 = i3675[0]
  var i3676 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i3677.length; i += 1) {
    i3676.add(request.d('UnityEngine.Events.PersistentCall', i3677[i + 0]));
  }
  i3674.m_Calls = i3676
  return i3674
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i3680 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i3681 = data
  request.r(i3681[0], i3681[1], 0, i3680, 'm_Target')
  i3680.m_TargetAssemblyTypeName = i3681[2]
  i3680.m_MethodName = i3681[3]
  i3680.m_Mode = i3681[4]
  i3680.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i3681[5], i3680.m_Arguments)
  i3680.m_CallState = i3681[6]
  return i3680
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i3682 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i3683 = data
  request.r(i3683[0], i3683[1], 0, i3682, 'm_ObjectArgument')
  i3682.m_ObjectArgumentAssemblyTypeName = i3683[2]
  i3682.m_IntArgument = i3683[3]
  i3682.m_FloatArgument = i3683[4]
  i3682.m_StringArgument = i3683[5]
  i3682.m_BoolArgument = !!i3683[6]
  return i3682
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i3684 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i3685 = data
  i3684.m_Mode = i3685[0]
  i3684.m_WrapAround = !!i3685[1]
  request.r(i3685[2], i3685[3], 0, i3684, 'm_SelectOnUp')
  request.r(i3685[4], i3685[5], 0, i3684, 'm_SelectOnDown')
  request.r(i3685[6], i3685[7], 0, i3684, 'm_SelectOnLeft')
  request.r(i3685[8], i3685[9], 0, i3684, 'm_SelectOnRight')
  return i3684
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i3686 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i3687 = data
  i3686.m_NormalColor = new pc.Color(i3687[0], i3687[1], i3687[2], i3687[3])
  i3686.m_HighlightedColor = new pc.Color(i3687[4], i3687[5], i3687[6], i3687[7])
  i3686.m_PressedColor = new pc.Color(i3687[8], i3687[9], i3687[10], i3687[11])
  i3686.m_SelectedColor = new pc.Color(i3687[12], i3687[13], i3687[14], i3687[15])
  i3686.m_DisabledColor = new pc.Color(i3687[16], i3687[17], i3687[18], i3687[19])
  i3686.m_ColorMultiplier = i3687[20]
  i3686.m_FadeDuration = i3687[21]
  return i3686
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i3688 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i3689 = data
  request.r(i3689[0], i3689[1], 0, i3688, 'm_HighlightedSprite')
  request.r(i3689[2], i3689[3], 0, i3688, 'm_PressedSprite')
  request.r(i3689[4], i3689[5], 0, i3688, 'm_SelectedSprite')
  request.r(i3689[6], i3689[7], 0, i3688, 'm_DisabledSprite')
  return i3688
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i3690 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i3691 = data
  i3690.m_NormalTrigger = i3691[0]
  i3690.m_HighlightedTrigger = i3691[1]
  i3690.m_PressedTrigger = i3691[2]
  i3690.m_SelectedTrigger = i3691[3]
  i3690.m_DisabledTrigger = i3691[4]
  return i3690
}

Deserializers["ScreenHeightPositionAnchor"] = function (request, data, root) {
  var i3692 = root || request.c( 'ScreenHeightPositionAnchor' )
  var i3693 = data
  request.r(i3693[0], i3693[1], 0, i3692, 'anchorPoint')
  request.r(i3693[2], i3693[3], 0, i3692, 'targetCamera')
  i3692.viewportYRatio = i3693[4]
  i3692.alignOnStart = !!i3693[5]
  i3692.alignOnEnable = !!i3693[6]
  i3692.realignOnScreenSizeChanged = !!i3693[7]
  i3692.drawGizmos = !!i3693[8]
  i3692.targetLineColor = new pc.Color(i3693[9], i3693[10], i3693[11], i3693[12])
  i3692.anchorColor = new pc.Color(i3693[13], i3693[14], i3693[15], i3693[16])
  return i3692
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D"] = function (request, data, root) {
  var i3694 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D' )
  var i3695 = data
  i3694.usedByComposite = !!i3695[0]
  i3694.autoTiling = !!i3695[1]
  var i3697 = i3695[2]
  var i3696 = []
  for(var i = 0; i < i3697.length; i += 1) {
  var i3699 = i3697[i + 0]
  var i3698 = []
  for(var i = 0; i < i3699.length; i += 2) {
    i3698.push( new pc.Vec2( i3699[i + 0], i3699[i + 1] ) );
  }
    i3696.push( i3698 );
  }
  i3694.points = i3696
  i3694.enabled = !!i3695[3]
  i3694.isTrigger = !!i3695[4]
  i3694.usedByEffector = !!i3695[5]
  i3694.density = i3695[6]
  i3694.offset = new pc.Vec2( i3695[7], i3695[8] )
  request.r(i3695[9], i3695[10], 0, i3694, 'material')
  return i3694
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i3706 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i3707 = data
  i3706.usedByComposite = !!i3707[0]
  i3706.autoTiling = !!i3707[1]
  i3706.size = new pc.Vec2( i3707[2], i3707[3] )
  i3706.edgeRadius = i3707[4]
  i3706.enabled = !!i3707[5]
  i3706.isTrigger = !!i3707[6]
  i3706.usedByEffector = !!i3707[7]
  i3706.density = i3707[8]
  i3706.offset = new pc.Vec2( i3707[9], i3707[10] )
  request.r(i3707[11], i3707[12], 0, i3706, 'material')
  return i3706
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i3708 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i3709 = data
  i3708.bodyType = i3709[0]
  request.r(i3709[1], i3709[2], 0, i3708, 'material')
  i3708.simulated = !!i3709[3]
  i3708.useAutoMass = !!i3709[4]
  i3708.mass = i3709[5]
  i3708.drag = i3709[6]
  i3708.angularDrag = i3709[7]
  i3708.gravityScale = i3709[8]
  i3708.collisionDetectionMode = i3709[9]
  i3708.sleepMode = i3709[10]
  i3708.constraints = i3709[11]
  return i3708
}

Deserializers["BatStrikeController"] = function (request, data, root) {
  var i3710 = root || request.c( 'BatStrikeController' )
  var i3711 = data
  i3710.pullSpeed = i3711[0]
  i3710.maxPullDistance = i3711[1]
  i3710.minHoldTime = i3711[2]
  i3710.strikeForce = i3711[3]
  i3710.targetTag = i3711[4]
  return i3710
}

Deserializers["CupCollision"] = function (request, data, root) {
  var i3712 = root || request.c( 'CupCollision' )
  var i3713 = data
  i3712.baseTag = i3713[0]
  request.r(i3713[1], i3713[2], 0, i3712, 'objectToActivate')
  return i3712
}

Deserializers["SlotTrigger"] = function (request, data, root) {
  var i3714 = root || request.c( 'SlotTrigger' )
  var i3715 = data
  request.r(i3715[0], i3715[1], 0, i3714, 'cardData')
  i3714.targetTag = i3715[2]
  request.r(i3715[3], i3715[4], 0, i3714, 'yAnchor')
  i3714.moveSpeed = i3715[5]
  request.r(i3715[6], i3715[7], 0, i3714, 'objectToMoveDown')
  i3714.targetScreenYRatio = i3715[8]
  return i3714
}

Deserializers["HideOnFirstClick"] = function (request, data, root) {
  var i3716 = root || request.c( 'HideOnFirstClick' )
  var i3717 = data
  request.r(i3717[0], i3717[1], 0, i3716, 'objectToHide')
  return i3716
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i3718 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i3719 = data
  request.r(i3719[0], i3719[1], 0, i3718, 'm_FirstSelected')
  i3718.m_sendNavigationEvents = !!i3719[2]
  i3718.m_DragThreshold = i3719[3]
  return i3718
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i3720 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i3721 = data
  i3720.m_HorizontalAxis = i3721[0]
  i3720.m_VerticalAxis = i3721[1]
  i3720.m_SubmitButton = i3721[2]
  i3720.m_CancelButton = i3721[3]
  i3720.m_InputActionsPerSecond = i3721[4]
  i3720.m_RepeatDelay = i3721[5]
  i3720.m_ForceModuleActive = !!i3721[6]
  i3720.m_SendPointerHoverToParent = !!i3721[7]
  return i3720
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i3722 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i3723 = data
  i3722.ambientIntensity = i3723[0]
  i3722.reflectionIntensity = i3723[1]
  i3722.ambientMode = i3723[2]
  i3722.ambientLight = new pc.Color(i3723[3], i3723[4], i3723[5], i3723[6])
  i3722.ambientSkyColor = new pc.Color(i3723[7], i3723[8], i3723[9], i3723[10])
  i3722.ambientGroundColor = new pc.Color(i3723[11], i3723[12], i3723[13], i3723[14])
  i3722.ambientEquatorColor = new pc.Color(i3723[15], i3723[16], i3723[17], i3723[18])
  i3722.fogColor = new pc.Color(i3723[19], i3723[20], i3723[21], i3723[22])
  i3722.fogEndDistance = i3723[23]
  i3722.fogStartDistance = i3723[24]
  i3722.fogDensity = i3723[25]
  i3722.fog = !!i3723[26]
  request.r(i3723[27], i3723[28], 0, i3722, 'skybox')
  i3722.fogMode = i3723[29]
  var i3725 = i3723[30]
  var i3724 = []
  for(var i = 0; i < i3725.length; i += 1) {
    i3724.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i3725[i + 0]) );
  }
  i3722.lightmaps = i3724
  i3722.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i3723[31], i3722.lightProbes)
  i3722.lightmapsMode = i3723[32]
  i3722.mixedBakeMode = i3723[33]
  i3722.environmentLightingMode = i3723[34]
  i3722.ambientProbe = new pc.SphericalHarmonicsL2(i3723[35])
  i3722.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i3723[36])
  i3722.useReferenceAmbientProbe = !!i3723[37]
  request.r(i3723[38], i3723[39], 0, i3722, 'customReflection')
  request.r(i3723[40], i3723[41], 0, i3722, 'defaultReflection')
  i3722.defaultReflectionMode = i3723[42]
  i3722.defaultReflectionResolution = i3723[43]
  i3722.sunLightObjectId = i3723[44]
  i3722.pixelLightCount = i3723[45]
  i3722.defaultReflectionHDR = !!i3723[46]
  i3722.hasLightDataAsset = !!i3723[47]
  i3722.hasManualGenerate = !!i3723[48]
  return i3722
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i3728 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i3729 = data
  request.r(i3729[0], i3729[1], 0, i3728, 'lightmapColor')
  request.r(i3729[2], i3729[3], 0, i3728, 'lightmapDirection')
  request.r(i3729[4], i3729[5], 0, i3728, 'shadowMask')
  return i3728
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i3730 = root || new UnityEngine.LightProbes()
  var i3731 = data
  return i3730
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.PhysicsMaterial2D"] = function (request, data, root) {
  var i3738 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.PhysicsMaterial2D' )
  var i3739 = data
  i3738.name = i3739[0]
  i3738.bounciness = i3739[1]
  i3738.friction = i3739[2]
  return i3738
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i3740 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i3741 = data
  var i3743 = i3741[0]
  var i3742 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i3743.length; i += 1) {
    i3742.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i3743[i + 0]));
  }
  i3740.ShaderCompilationErrors = i3742
  i3740.name = i3741[1]
  i3740.guid = i3741[2]
  var i3745 = i3741[3]
  var i3744 = []
  for(var i = 0; i < i3745.length; i += 1) {
    i3744.push( i3745[i + 0] );
  }
  i3740.shaderDefinedKeywords = i3744
  var i3747 = i3741[4]
  var i3746 = []
  for(var i = 0; i < i3747.length; i += 1) {
    i3746.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i3747[i + 0]) );
  }
  i3740.passes = i3746
  var i3749 = i3741[5]
  var i3748 = []
  for(var i = 0; i < i3749.length; i += 1) {
    i3748.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i3749[i + 0]) );
  }
  i3740.usePasses = i3748
  var i3751 = i3741[6]
  var i3750 = []
  for(var i = 0; i < i3751.length; i += 1) {
    i3750.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i3751[i + 0]) );
  }
  i3740.defaultParameterValues = i3750
  request.r(i3741[7], i3741[8], 0, i3740, 'unityFallbackShader')
  i3740.readDepth = !!i3741[9]
  i3740.hasDepthOnlyPass = !!i3741[10]
  i3740.isCreatedByShaderGraph = !!i3741[11]
  i3740.disableBatching = !!i3741[12]
  i3740.compiled = !!i3741[13]
  return i3740
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i3754 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i3755 = data
  i3754.shaderName = i3755[0]
  i3754.errorMessage = i3755[1]
  return i3754
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i3760 = root || new pc.UnityShaderPass()
  var i3761 = data
  i3760.id = i3761[0]
  i3760.subShaderIndex = i3761[1]
  i3760.name = i3761[2]
  i3760.passType = i3761[3]
  i3760.grabPassTextureName = i3761[4]
  i3760.usePass = !!i3761[5]
  i3760.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3761[6], i3760.zTest)
  i3760.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3761[7], i3760.zWrite)
  i3760.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3761[8], i3760.culling)
  i3760.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i3761[9], i3760.blending)
  i3760.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i3761[10], i3760.alphaBlending)
  i3760.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3761[11], i3760.colorWriteMask)
  i3760.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3761[12], i3760.offsetUnits)
  i3760.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3761[13], i3760.offsetFactor)
  i3760.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3761[14], i3760.stencilRef)
  i3760.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3761[15], i3760.stencilReadMask)
  i3760.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3761[16], i3760.stencilWriteMask)
  i3760.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3761[17], i3760.stencilOp)
  i3760.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3761[18], i3760.stencilOpFront)
  i3760.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3761[19], i3760.stencilOpBack)
  var i3763 = i3761[20]
  var i3762 = []
  for(var i = 0; i < i3763.length; i += 1) {
    i3762.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i3763[i + 0]) );
  }
  i3760.tags = i3762
  var i3765 = i3761[21]
  var i3764 = []
  for(var i = 0; i < i3765.length; i += 1) {
    i3764.push( i3765[i + 0] );
  }
  i3760.passDefinedKeywords = i3764
  var i3767 = i3761[22]
  var i3766 = []
  for(var i = 0; i < i3767.length; i += 1) {
    i3766.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i3767[i + 0]) );
  }
  i3760.passDefinedKeywordGroups = i3766
  var i3769 = i3761[23]
  var i3768 = []
  for(var i = 0; i < i3769.length; i += 1) {
    i3768.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i3769[i + 0]) );
  }
  i3760.variants = i3768
  var i3771 = i3761[24]
  var i3770 = []
  for(var i = 0; i < i3771.length; i += 1) {
    i3770.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i3771[i + 0]) );
  }
  i3760.excludedVariants = i3770
  i3760.hasDepthReader = !!i3761[25]
  return i3760
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i3772 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i3773 = data
  i3772.val = i3773[0]
  i3772.name = i3773[1]
  return i3772
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i3774 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i3775 = data
  i3774.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3775[0], i3774.src)
  i3774.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3775[1], i3774.dst)
  i3774.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3775[2], i3774.op)
  return i3774
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i3776 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i3777 = data
  i3776.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3777[0], i3776.pass)
  i3776.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3777[1], i3776.fail)
  i3776.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3777[2], i3776.zFail)
  i3776.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3777[3], i3776.comp)
  return i3776
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i3780 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i3781 = data
  i3780.name = i3781[0]
  i3780.value = i3781[1]
  return i3780
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i3784 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i3785 = data
  var i3787 = i3785[0]
  var i3786 = []
  for(var i = 0; i < i3787.length; i += 1) {
    i3786.push( i3787[i + 0] );
  }
  i3784.keywords = i3786
  i3784.hasDiscard = !!i3785[1]
  return i3784
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i3790 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i3791 = data
  i3790.passId = i3791[0]
  i3790.subShaderIndex = i3791[1]
  var i3793 = i3791[2]
  var i3792 = []
  for(var i = 0; i < i3793.length; i += 1) {
    i3792.push( i3793[i + 0] );
  }
  i3790.keywords = i3792
  i3790.vertexProgram = i3791[3]
  i3790.fragmentProgram = i3791[4]
  i3790.exportedForWebGl2 = !!i3791[5]
  i3790.readDepth = !!i3791[6]
  return i3790
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i3796 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i3797 = data
  request.r(i3797[0], i3797[1], 0, i3796, 'shader')
  i3796.pass = i3797[2]
  return i3796
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i3800 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i3801 = data
  i3800.name = i3801[0]
  i3800.type = i3801[1]
  i3800.value = new pc.Vec4( i3801[2], i3801[3], i3801[4], i3801[5] )
  i3800.textureValue = i3801[6]
  i3800.shaderPropertyFlag = i3801[7]
  return i3800
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i3802 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i3803 = data
  i3802.name = i3803[0]
  request.r(i3803[1], i3803[2], 0, i3802, 'texture')
  i3802.aabb = i3803[3]
  i3802.vertices = i3803[4]
  i3802.triangles = i3803[5]
  i3802.textureRect = UnityEngine.Rect.MinMaxRect(i3803[6], i3803[7], i3803[8], i3803[9])
  i3802.packedRect = UnityEngine.Rect.MinMaxRect(i3803[10], i3803[11], i3803[12], i3803[13])
  i3802.border = new pc.Vec4( i3803[14], i3803[15], i3803[16], i3803[17] )
  i3802.transparency = i3803[18]
  i3802.bounds = i3803[19]
  i3802.pixelsPerUnit = i3803[20]
  i3802.textureWidth = i3803[21]
  i3802.textureHeight = i3803[22]
  i3802.nativeSize = new pc.Vec2( i3803[23], i3803[24] )
  i3802.pivot = new pc.Vec2( i3803[25], i3803[26] )
  i3802.textureRectOffset = new pc.Vec2( i3803[27], i3803[28] )
  return i3802
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i3804 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i3805 = data
  i3804.name = i3805[0]
  return i3804
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i3806 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i3807 = data
  i3806.name = i3807[0]
  i3806.wrapMode = i3807[1]
  i3806.isLooping = !!i3807[2]
  i3806.length = i3807[3]
  var i3809 = i3807[4]
  var i3808 = []
  for(var i = 0; i < i3809.length; i += 1) {
    i3808.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i3809[i + 0]) );
  }
  i3806.curves = i3808
  var i3811 = i3807[5]
  var i3810 = []
  for(var i = 0; i < i3811.length; i += 1) {
    i3810.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i3811[i + 0]) );
  }
  i3806.events = i3810
  i3806.halfPrecision = !!i3807[6]
  i3806._frameRate = i3807[7]
  i3806.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i3807[8], i3806.localBounds)
  i3806.hasMuscleCurves = !!i3807[9]
  var i3813 = i3807[10]
  var i3812 = []
  for(var i = 0; i < i3813.length; i += 1) {
    i3812.push( i3813[i + 0] );
  }
  i3806.clipMuscleConstant = i3812
  i3806.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i3807[11], i3806.clipBindingConstant)
  return i3806
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i3816 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i3817 = data
  i3816.path = i3817[0]
  i3816.hash = i3817[1]
  i3816.componentType = i3817[2]
  i3816.property = i3817[3]
  i3816.keys = i3817[4]
  var i3819 = i3817[5]
  var i3818 = []
  for(var i = 0; i < i3819.length; i += 1) {
    i3818.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i3819[i + 0]) );
  }
  i3816.objectReferenceKeys = i3818
  return i3816
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i3822 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i3823 = data
  i3822.time = i3823[0]
  request.r(i3823[1], i3823[2], 0, i3822, 'value')
  return i3822
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i3826 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i3827 = data
  i3826.functionName = i3827[0]
  i3826.floatParameter = i3827[1]
  i3826.intParameter = i3827[2]
  i3826.stringParameter = i3827[3]
  request.r(i3827[4], i3827[5], 0, i3826, 'objectReferenceParameter')
  i3826.time = i3827[6]
  return i3826
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i3828 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i3829 = data
  i3828.center = new pc.Vec3( i3829[0], i3829[1], i3829[2] )
  i3828.extends = new pc.Vec3( i3829[3], i3829[4], i3829[5] )
  return i3828
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i3832 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i3833 = data
  var i3835 = i3833[0]
  var i3834 = []
  for(var i = 0; i < i3835.length; i += 1) {
    i3834.push( i3835[i + 0] );
  }
  i3832.genericBindings = i3834
  var i3837 = i3833[1]
  var i3836 = []
  for(var i = 0; i < i3837.length; i += 1) {
    i3836.push( i3837[i + 0] );
  }
  i3832.pptrCurveMapping = i3836
  return i3832
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i3838 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i3839 = data
  i3838.name = i3839[0]
  i3838.ascent = i3839[1]
  i3838.originalLineHeight = i3839[2]
  i3838.fontSize = i3839[3]
  var i3841 = i3839[4]
  var i3840 = []
  for(var i = 0; i < i3841.length; i += 1) {
    i3840.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i3841[i + 0]) );
  }
  i3838.characterInfo = i3840
  request.r(i3839[5], i3839[6], 0, i3838, 'texture')
  i3838.originalFontSize = i3839[7]
  return i3838
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i3844 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i3845 = data
  i3844.index = i3845[0]
  i3844.advance = i3845[1]
  i3844.bearing = i3845[2]
  i3844.glyphWidth = i3845[3]
  i3844.glyphHeight = i3845[4]
  i3844.minX = i3845[5]
  i3844.maxX = i3845[6]
  i3844.minY = i3845[7]
  i3844.maxY = i3845[8]
  i3844.uvBottomLeftX = i3845[9]
  i3844.uvBottomLeftY = i3845[10]
  i3844.uvBottomRightX = i3845[11]
  i3844.uvBottomRightY = i3845[12]
  i3844.uvTopLeftX = i3845[13]
  i3844.uvTopLeftY = i3845[14]
  i3844.uvTopRightX = i3845[15]
  i3844.uvTopRightY = i3845[16]
  return i3844
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i3846 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i3847 = data
  i3846.name = i3847[0]
  var i3849 = i3847[1]
  var i3848 = []
  for(var i = 0; i < i3849.length; i += 1) {
    i3848.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i3849[i + 0]) );
  }
  i3846.layers = i3848
  var i3851 = i3847[2]
  var i3850 = []
  for(var i = 0; i < i3851.length; i += 1) {
    i3850.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i3851[i + 0]) );
  }
  i3846.parameters = i3850
  i3846.animationClips = i3847[3]
  i3846.avatarUnsupported = i3847[4]
  return i3846
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i3854 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i3855 = data
  i3854.name = i3855[0]
  i3854.defaultWeight = i3855[1]
  i3854.blendingMode = i3855[2]
  i3854.avatarMask = i3855[3]
  i3854.syncedLayerIndex = i3855[4]
  i3854.syncedLayerAffectsTiming = !!i3855[5]
  i3854.syncedLayers = i3855[6]
  i3854.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i3855[7], i3854.stateMachine)
  return i3854
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i3856 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i3857 = data
  i3856.id = i3857[0]
  i3856.name = i3857[1]
  i3856.path = i3857[2]
  var i3859 = i3857[3]
  var i3858 = []
  for(var i = 0; i < i3859.length; i += 1) {
    i3858.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i3859[i + 0]) );
  }
  i3856.states = i3858
  var i3861 = i3857[4]
  var i3860 = []
  for(var i = 0; i < i3861.length; i += 1) {
    i3860.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i3861[i + 0]) );
  }
  i3856.machines = i3860
  var i3863 = i3857[5]
  var i3862 = []
  for(var i = 0; i < i3863.length; i += 1) {
    i3862.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i3863[i + 0]) );
  }
  i3856.entryStateTransitions = i3862
  var i3865 = i3857[6]
  var i3864 = []
  for(var i = 0; i < i3865.length; i += 1) {
    i3864.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i3865[i + 0]) );
  }
  i3856.exitStateTransitions = i3864
  var i3867 = i3857[7]
  var i3866 = []
  for(var i = 0; i < i3867.length; i += 1) {
    i3866.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i3867[i + 0]) );
  }
  i3856.anyStateTransitions = i3866
  i3856.defaultStateId = i3857[8]
  return i3856
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i3870 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i3871 = data
  i3870.id = i3871[0]
  i3870.name = i3871[1]
  i3870.cycleOffset = i3871[2]
  i3870.cycleOffsetParameter = i3871[3]
  i3870.cycleOffsetParameterActive = !!i3871[4]
  i3870.mirror = !!i3871[5]
  i3870.mirrorParameter = i3871[6]
  i3870.mirrorParameterActive = !!i3871[7]
  i3870.motionId = i3871[8]
  i3870.nameHash = i3871[9]
  i3870.fullPathHash = i3871[10]
  i3870.speed = i3871[11]
  i3870.speedParameter = i3871[12]
  i3870.speedParameterActive = !!i3871[13]
  i3870.tag = i3871[14]
  i3870.tagHash = i3871[15]
  i3870.writeDefaultValues = !!i3871[16]
  var i3873 = i3871[17]
  var i3872 = []
  for(var i = 0; i < i3873.length; i += 2) {
  request.r(i3873[i + 0], i3873[i + 1], 2, i3872, '')
  }
  i3870.behaviours = i3872
  var i3875 = i3871[18]
  var i3874 = []
  for(var i = 0; i < i3875.length; i += 1) {
    i3874.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i3875[i + 0]) );
  }
  i3870.transitions = i3874
  return i3870
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i3880 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i3881 = data
  i3880.fullPath = i3881[0]
  i3880.canTransitionToSelf = !!i3881[1]
  i3880.duration = i3881[2]
  i3880.exitTime = i3881[3]
  i3880.hasExitTime = !!i3881[4]
  i3880.hasFixedDuration = !!i3881[5]
  i3880.interruptionSource = i3881[6]
  i3880.offset = i3881[7]
  i3880.orderedInterruption = !!i3881[8]
  i3880.destinationStateId = i3881[9]
  i3880.isExit = !!i3881[10]
  i3880.mute = !!i3881[11]
  i3880.solo = !!i3881[12]
  var i3883 = i3881[13]
  var i3882 = []
  for(var i = 0; i < i3883.length; i += 1) {
    i3882.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i3883[i + 0]) );
  }
  i3880.conditions = i3882
  return i3880
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i3888 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i3889 = data
  i3888.destinationStateId = i3889[0]
  i3888.isExit = !!i3889[1]
  i3888.mute = !!i3889[2]
  i3888.solo = !!i3889[3]
  var i3891 = i3889[4]
  var i3890 = []
  for(var i = 0; i < i3891.length; i += 1) {
    i3890.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i3891[i + 0]) );
  }
  i3888.conditions = i3890
  return i3888
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i3894 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i3895 = data
  i3894.defaultBool = !!i3895[0]
  i3894.defaultFloat = i3895[1]
  i3894.defaultInt = i3895[2]
  i3894.name = i3895[3]
  i3894.nameHash = i3895[4]
  i3894.type = i3895[5]
  return i3894
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i3896 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i3897 = data
  i3896.name = i3897[0]
  i3896.bytes64 = i3897[1]
  i3896.data = i3897[2]
  return i3896
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i3898 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i3899 = data
  i3898.normalStyle = i3899[0]
  i3898.normalSpacingOffset = i3899[1]
  i3898.boldStyle = i3899[2]
  i3898.boldSpacing = i3899[3]
  i3898.italicStyle = i3899[4]
  i3898.tabSize = i3899[5]
  request.r(i3899[6], i3899[7], 0, i3898, 'atlas')
  i3898.m_SourceFontFileGUID = i3899[8]
  i3898.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i3899[9], i3898.m_CreationSettings)
  request.r(i3899[10], i3899[11], 0, i3898, 'm_SourceFontFile')
  i3898.m_SourceFontFilePath = i3899[12]
  i3898.m_AtlasPopulationMode = i3899[13]
  i3898.InternalDynamicOS = !!i3899[14]
  var i3901 = i3899[15]
  var i3900 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i3901.length; i += 1) {
    i3900.add(request.d('UnityEngine.TextCore.Glyph', i3901[i + 0]));
  }
  i3898.m_GlyphTable = i3900
  var i3903 = i3899[16]
  var i3902 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i3903.length; i += 1) {
    i3902.add(request.d('TMPro.TMP_Character', i3903[i + 0]));
  }
  i3898.m_CharacterTable = i3902
  var i3905 = i3899[17]
  var i3904 = []
  for(var i = 0; i < i3905.length; i += 2) {
  request.r(i3905[i + 0], i3905[i + 1], 2, i3904, '')
  }
  i3898.m_AtlasTextures = i3904
  i3898.m_AtlasTextureIndex = i3899[18]
  i3898.m_IsMultiAtlasTexturesEnabled = !!i3899[19]
  i3898.m_GetFontFeatures = !!i3899[20]
  i3898.m_ClearDynamicDataOnBuild = !!i3899[21]
  i3898.m_AtlasWidth = i3899[22]
  i3898.m_AtlasHeight = i3899[23]
  i3898.m_AtlasPadding = i3899[24]
  i3898.m_AtlasRenderMode = i3899[25]
  var i3907 = i3899[26]
  var i3906 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i3907.length; i += 1) {
    i3906.add(request.d('UnityEngine.TextCore.GlyphRect', i3907[i + 0]));
  }
  i3898.m_UsedGlyphRects = i3906
  var i3909 = i3899[27]
  var i3908 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i3909.length; i += 1) {
    i3908.add(request.d('UnityEngine.TextCore.GlyphRect', i3909[i + 0]));
  }
  i3898.m_FreeGlyphRects = i3908
  i3898.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i3899[28], i3898.m_FontFeatureTable)
  i3898.m_ShouldReimportFontFeatures = !!i3899[29]
  var i3911 = i3899[30]
  var i3910 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i3911.length; i += 2) {
  request.r(i3911[i + 0], i3911[i + 1], 1, i3910, '')
  }
  i3898.m_FallbackFontAssetTable = i3910
  var i3913 = i3899[31]
  var i3912 = []
  for(var i = 0; i < i3913.length; i += 1) {
    i3912.push( request.d('TMPro.TMP_FontWeightPair', i3913[i + 0]) );
  }
  i3898.m_FontWeightTable = i3912
  var i3915 = i3899[32]
  var i3914 = []
  for(var i = 0; i < i3915.length; i += 1) {
    i3914.push( request.d('TMPro.TMP_FontWeightPair', i3915[i + 0]) );
  }
  i3898.fontWeights = i3914
  i3898.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i3899[33], i3898.m_fontInfo)
  var i3917 = i3899[34]
  var i3916 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i3917.length; i += 1) {
    i3916.add(request.d('TMPro.TMP_Glyph', i3917[i + 0]));
  }
  i3898.m_glyphInfoList = i3916
  i3898.m_KerningTable = request.d('TMPro.KerningTable', i3899[35], i3898.m_KerningTable)
  var i3919 = i3899[36]
  var i3918 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i3919.length; i += 2) {
  request.r(i3919[i + 0], i3919[i + 1], 1, i3918, '')
  }
  i3898.fallbackFontAssets = i3918
  i3898.m_Version = i3899[37]
  i3898.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i3899[38], i3898.m_FaceInfo)
  request.r(i3899[39], i3899[40], 0, i3898, 'm_Material')
  return i3898
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i3920 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i3921 = data
  i3920.sourceFontFileName = i3921[0]
  i3920.sourceFontFileGUID = i3921[1]
  i3920.faceIndex = i3921[2]
  i3920.pointSizeSamplingMode = i3921[3]
  i3920.pointSize = i3921[4]
  i3920.padding = i3921[5]
  i3920.paddingMode = i3921[6]
  i3920.packingMode = i3921[7]
  i3920.atlasWidth = i3921[8]
  i3920.atlasHeight = i3921[9]
  i3920.characterSetSelectionMode = i3921[10]
  i3920.characterSequence = i3921[11]
  i3920.referencedFontAssetGUID = i3921[12]
  i3920.referencedTextAssetGUID = i3921[13]
  i3920.fontStyle = i3921[14]
  i3920.fontStyleModifier = i3921[15]
  i3920.renderMode = i3921[16]
  i3920.includeFontFeatures = !!i3921[17]
  return i3920
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i3924 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i3925 = data
  i3924.m_Index = i3925[0]
  i3924.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i3925[1], i3924.m_Metrics)
  i3924.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i3925[2], i3924.m_GlyphRect)
  i3924.m_Scale = i3925[3]
  i3924.m_AtlasIndex = i3925[4]
  i3924.m_ClassDefinitionType = i3925[5]
  return i3924
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i3926 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i3927 = data
  i3926.m_Width = i3927[0]
  i3926.m_Height = i3927[1]
  i3926.m_HorizontalBearingX = i3927[2]
  i3926.m_HorizontalBearingY = i3927[3]
  i3926.m_HorizontalAdvance = i3927[4]
  return i3926
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i3928 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i3929 = data
  i3928.m_X = i3929[0]
  i3928.m_Y = i3929[1]
  i3928.m_Width = i3929[2]
  i3928.m_Height = i3929[3]
  return i3928
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i3932 = root || request.c( 'TMPro.TMP_Character' )
  var i3933 = data
  i3932.m_ElementType = i3933[0]
  i3932.m_Unicode = i3933[1]
  i3932.m_GlyphIndex = i3933[2]
  i3932.m_Scale = i3933[3]
  return i3932
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i3938 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i3939 = data
  var i3941 = i3939[0]
  var i3940 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i3941.length; i += 1) {
    i3940.add(request.d('TMPro.MultipleSubstitutionRecord', i3941[i + 0]));
  }
  i3938.m_MultipleSubstitutionRecords = i3940
  var i3943 = i3939[1]
  var i3942 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i3943.length; i += 1) {
    i3942.add(request.d('TMPro.LigatureSubstitutionRecord', i3943[i + 0]));
  }
  i3938.m_LigatureSubstitutionRecords = i3942
  var i3945 = i3939[2]
  var i3944 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i3945.length; i += 1) {
    i3944.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i3945[i + 0]));
  }
  i3938.m_GlyphPairAdjustmentRecords = i3944
  var i3947 = i3939[3]
  var i3946 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i3947.length; i += 1) {
    i3946.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i3947[i + 0]));
  }
  i3938.m_MarkToBaseAdjustmentRecords = i3946
  var i3949 = i3939[4]
  var i3948 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i3949.length; i += 1) {
    i3948.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i3949[i + 0]));
  }
  i3938.m_MarkToMarkAdjustmentRecords = i3948
  return i3938
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i3952 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i3953 = data
  i3952.m_TargetGlyphID = i3953[0]
  i3952.m_SubstituteGlyphIDs = i3953[1]
  return i3952
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i3956 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i3957 = data
  i3956.m_ComponentGlyphIDs = i3957[0]
  i3956.m_LigatureGlyphID = i3957[1]
  return i3956
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i3960 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i3961 = data
  i3960.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i3961[0], i3960.m_FirstAdjustmentRecord)
  i3960.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i3961[1], i3960.m_SecondAdjustmentRecord)
  i3960.m_FeatureLookupFlags = i3961[2]
  return i3960
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i3962 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i3963 = data
  i3962.m_GlyphIndex = i3963[0]
  i3962.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i3963[1], i3962.m_GlyphValueRecord)
  return i3962
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i3964 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i3965 = data
  i3964.m_XPlacement = i3965[0]
  i3964.m_YPlacement = i3965[1]
  i3964.m_XAdvance = i3965[2]
  i3964.m_YAdvance = i3965[3]
  return i3964
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i3968 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i3969 = data
  i3968.m_BaseGlyphID = i3969[0]
  i3968.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i3969[1], i3968.m_BaseGlyphAnchorPoint)
  i3968.m_MarkGlyphID = i3969[2]
  i3968.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i3969[3], i3968.m_MarkPositionAdjustment)
  return i3968
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i3972 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i3973 = data
  i3972.m_BaseMarkGlyphID = i3973[0]
  i3972.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i3973[1], i3972.m_BaseMarkGlyphAnchorPoint)
  i3972.m_CombiningMarkGlyphID = i3973[2]
  i3972.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i3973[3], i3972.m_CombiningMarkPositionAdjustment)
  return i3972
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i3978 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i3979 = data
  request.r(i3979[0], i3979[1], 0, i3978, 'regularTypeface')
  request.r(i3979[2], i3979[3], 0, i3978, 'italicTypeface')
  return i3978
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i3980 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i3981 = data
  i3980.Name = i3981[0]
  i3980.PointSize = i3981[1]
  i3980.Scale = i3981[2]
  i3980.CharacterCount = i3981[3]
  i3980.LineHeight = i3981[4]
  i3980.Baseline = i3981[5]
  i3980.Ascender = i3981[6]
  i3980.CapHeight = i3981[7]
  i3980.Descender = i3981[8]
  i3980.CenterLine = i3981[9]
  i3980.SuperscriptOffset = i3981[10]
  i3980.SubscriptOffset = i3981[11]
  i3980.SubSize = i3981[12]
  i3980.Underline = i3981[13]
  i3980.UnderlineThickness = i3981[14]
  i3980.strikethrough = i3981[15]
  i3980.strikethroughThickness = i3981[16]
  i3980.TabWidth = i3981[17]
  i3980.Padding = i3981[18]
  i3980.AtlasWidth = i3981[19]
  i3980.AtlasHeight = i3981[20]
  return i3980
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i3984 = root || request.c( 'TMPro.TMP_Glyph' )
  var i3985 = data
  i3984.id = i3985[0]
  i3984.x = i3985[1]
  i3984.y = i3985[2]
  i3984.width = i3985[3]
  i3984.height = i3985[4]
  i3984.xOffset = i3985[5]
  i3984.yOffset = i3985[6]
  i3984.xAdvance = i3985[7]
  i3984.scale = i3985[8]
  return i3984
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i3986 = root || request.c( 'TMPro.KerningTable' )
  var i3987 = data
  var i3989 = i3987[0]
  var i3988 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i3989.length; i += 1) {
    i3988.add(request.d('TMPro.KerningPair', i3989[i + 0]));
  }
  i3986.kerningPairs = i3988
  return i3986
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i3992 = root || request.c( 'TMPro.KerningPair' )
  var i3993 = data
  i3992.xOffset = i3993[0]
  i3992.m_FirstGlyph = i3993[1]
  i3992.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i3993[2], i3992.m_FirstGlyphAdjustments)
  i3992.m_SecondGlyph = i3993[3]
  i3992.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i3993[4], i3992.m_SecondGlyphAdjustments)
  i3992.m_IgnoreSpacingAdjustments = !!i3993[5]
  return i3992
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i3994 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i3995 = data
  i3994.m_FaceIndex = i3995[0]
  i3994.m_FamilyName = i3995[1]
  i3994.m_StyleName = i3995[2]
  i3994.m_PointSize = i3995[3]
  i3994.m_Scale = i3995[4]
  i3994.m_UnitsPerEM = i3995[5]
  i3994.m_LineHeight = i3995[6]
  i3994.m_AscentLine = i3995[7]
  i3994.m_CapLine = i3995[8]
  i3994.m_MeanLine = i3995[9]
  i3994.m_Baseline = i3995[10]
  i3994.m_DescentLine = i3995[11]
  i3994.m_SuperscriptOffset = i3995[12]
  i3994.m_SuperscriptSize = i3995[13]
  i3994.m_SubscriptOffset = i3995[14]
  i3994.m_SubscriptSize = i3995[15]
  i3994.m_UnderlineOffset = i3995[16]
  i3994.m_UnderlineThickness = i3995[17]
  i3994.m_StrikethroughOffset = i3995[18]
  i3994.m_StrikethroughThickness = i3995[19]
  i3994.m_TabWidth = i3995[20]
  return i3994
}

Deserializers["PlayerCardData"] = function (request, data, root) {
  var i3996 = root || request.c( 'PlayerCardData' )
  var i3997 = data
  i3996.nationality = i3997[0]
  request.r(i3997[1], i3997[2], 0, i3996, 'playerSprite')
  request.r(i3997[3], i3997[4], 0, i3996, 'flagSprite')
  return i3996
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i3998 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i3999 = data
  i3998.useSafeMode = !!i3999[0]
  i3998.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i3999[1], i3998.safeModeOptions)
  i3998.timeScale = i3999[2]
  i3998.unscaledTimeScale = i3999[3]
  i3998.useSmoothDeltaTime = !!i3999[4]
  i3998.maxSmoothUnscaledTime = i3999[5]
  i3998.rewindCallbackMode = i3999[6]
  i3998.showUnityEditorReport = !!i3999[7]
  i3998.logBehaviour = i3999[8]
  i3998.drawGizmos = !!i3999[9]
  i3998.defaultRecyclable = !!i3999[10]
  i3998.defaultAutoPlay = i3999[11]
  i3998.defaultUpdateType = i3999[12]
  i3998.defaultTimeScaleIndependent = !!i3999[13]
  i3998.defaultEaseType = i3999[14]
  i3998.defaultEaseOvershootOrAmplitude = i3999[15]
  i3998.defaultEasePeriod = i3999[16]
  i3998.defaultAutoKill = !!i3999[17]
  i3998.defaultLoopType = i3999[18]
  i3998.debugMode = !!i3999[19]
  i3998.debugStoreTargetId = !!i3999[20]
  i3998.showPreviewPanel = !!i3999[21]
  i3998.storeSettingsLocation = i3999[22]
  i3998.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i3999[23], i3998.modules)
  i3998.createASMDEF = !!i3999[24]
  i3998.showPlayingTweens = !!i3999[25]
  i3998.showPausedTweens = !!i3999[26]
  return i3998
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i4000 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i4001 = data
  i4000.logBehaviour = i4001[0]
  i4000.nestedTweenFailureBehaviour = i4001[1]
  return i4000
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i4002 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i4003 = data
  i4002.showPanel = !!i4003[0]
  i4002.audioEnabled = !!i4003[1]
  i4002.physicsEnabled = !!i4003[2]
  i4002.physics2DEnabled = !!i4003[3]
  i4002.spriteEnabled = !!i4003[4]
  i4002.uiEnabled = !!i4003[5]
  i4002.uiToolkitEnabled = !!i4003[6]
  i4002.textMeshProEnabled = !!i4003[7]
  i4002.tk2DEnabled = !!i4003[8]
  i4002.deAudioEnabled = !!i4003[9]
  i4002.deUnityExtendedEnabled = !!i4003[10]
  i4002.epoOutlineEnabled = !!i4003[11]
  return i4002
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i4004 = root || request.c( 'TMPro.TMP_Settings' )
  var i4005 = data
  i4004.assetVersion = i4005[0]
  i4004.m_TextWrappingMode = i4005[1]
  i4004.m_enableKerning = !!i4005[2]
  var i4007 = i4005[3]
  var i4006 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i4007.length; i += 1) {
    i4006.add(i4007[i + 0]);
  }
  i4004.m_ActiveFontFeatures = i4006
  i4004.m_enableExtraPadding = !!i4005[4]
  i4004.m_enableTintAllSprites = !!i4005[5]
  i4004.m_enableParseEscapeCharacters = !!i4005[6]
  i4004.m_EnableRaycastTarget = !!i4005[7]
  i4004.m_GetFontFeaturesAtRuntime = !!i4005[8]
  i4004.m_missingGlyphCharacter = i4005[9]
  i4004.m_ClearDynamicDataOnBuild = !!i4005[10]
  i4004.m_warningsDisabled = !!i4005[11]
  request.r(i4005[12], i4005[13], 0, i4004, 'm_defaultFontAsset')
  i4004.m_defaultFontAssetPath = i4005[14]
  i4004.m_defaultFontSize = i4005[15]
  i4004.m_defaultAutoSizeMinRatio = i4005[16]
  i4004.m_defaultAutoSizeMaxRatio = i4005[17]
  i4004.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i4005[18], i4005[19] )
  i4004.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i4005[20], i4005[21] )
  i4004.m_autoSizeTextContainer = !!i4005[22]
  i4004.m_IsTextObjectScaleStatic = !!i4005[23]
  var i4009 = i4005[24]
  var i4008 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i4009.length; i += 2) {
  request.r(i4009[i + 0], i4009[i + 1], 1, i4008, '')
  }
  i4004.m_fallbackFontAssets = i4008
  i4004.m_matchMaterialPreset = !!i4005[25]
  i4004.m_HideSubTextObjects = !!i4005[26]
  request.r(i4005[27], i4005[28], 0, i4004, 'm_defaultSpriteAsset')
  i4004.m_defaultSpriteAssetPath = i4005[29]
  i4004.m_enableEmojiSupport = !!i4005[30]
  i4004.m_MissingCharacterSpriteUnicode = i4005[31]
  var i4011 = i4005[32]
  var i4010 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i4011.length; i += 2) {
  request.r(i4011[i + 0], i4011[i + 1], 1, i4010, '')
  }
  i4004.m_EmojiFallbackTextAssets = i4010
  i4004.m_defaultColorGradientPresetsPath = i4005[33]
  request.r(i4005[34], i4005[35], 0, i4004, 'm_defaultStyleSheet')
  i4004.m_StyleSheetsResourcePath = i4005[36]
  request.r(i4005[37], i4005[38], 0, i4004, 'm_leadingCharacters')
  request.r(i4005[39], i4005[40], 0, i4004, 'm_followingCharacters')
  i4004.m_UseModernHangulLineBreakingRules = !!i4005[41]
  return i4004
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i4014 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i4015 = data
  request.r(i4015[0], i4015[1], 0, i4014, 'spriteSheet')
  var i4017 = i4015[2]
  var i4016 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i4017.length; i += 1) {
    i4016.add(request.d('TMPro.TMP_Sprite', i4017[i + 0]));
  }
  i4014.spriteInfoList = i4016
  var i4019 = i4015[3]
  var i4018 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i4019.length; i += 2) {
  request.r(i4019[i + 0], i4019[i + 1], 1, i4018, '')
  }
  i4014.fallbackSpriteAssets = i4018
  var i4021 = i4015[4]
  var i4020 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i4021.length; i += 1) {
    i4020.add(request.d('TMPro.TMP_SpriteCharacter', i4021[i + 0]));
  }
  i4014.m_SpriteCharacterTable = i4020
  var i4023 = i4015[5]
  var i4022 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i4023.length; i += 1) {
    i4022.add(request.d('TMPro.TMP_SpriteGlyph', i4023[i + 0]));
  }
  i4014.m_GlyphTable = i4022
  i4014.m_Version = i4015[6]
  i4014.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i4015[7], i4014.m_FaceInfo)
  request.r(i4015[8], i4015[9], 0, i4014, 'm_Material')
  return i4014
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i4026 = root || request.c( 'TMPro.TMP_Sprite' )
  var i4027 = data
  i4026.name = i4027[0]
  i4026.hashCode = i4027[1]
  i4026.unicode = i4027[2]
  i4026.pivot = new pc.Vec2( i4027[3], i4027[4] )
  request.r(i4027[5], i4027[6], 0, i4026, 'sprite')
  i4026.id = i4027[7]
  i4026.x = i4027[8]
  i4026.y = i4027[9]
  i4026.width = i4027[10]
  i4026.height = i4027[11]
  i4026.xOffset = i4027[12]
  i4026.yOffset = i4027[13]
  i4026.xAdvance = i4027[14]
  i4026.scale = i4027[15]
  return i4026
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i4032 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i4033 = data
  i4032.m_Name = i4033[0]
  i4032.m_ElementType = i4033[1]
  i4032.m_Unicode = i4033[2]
  i4032.m_GlyphIndex = i4033[3]
  i4032.m_Scale = i4033[4]
  return i4032
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i4036 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i4037 = data
  request.r(i4037[0], i4037[1], 0, i4036, 'sprite')
  i4036.m_Index = i4037[2]
  i4036.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i4037[3], i4036.m_Metrics)
  i4036.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i4037[4], i4036.m_GlyphRect)
  i4036.m_Scale = i4037[5]
  i4036.m_AtlasIndex = i4037[6]
  i4036.m_ClassDefinitionType = i4037[7]
  return i4036
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i4038 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i4039 = data
  var i4041 = i4039[0]
  var i4040 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i4041.length; i += 1) {
    i4040.add(request.d('TMPro.TMP_Style', i4041[i + 0]));
  }
  i4038.m_StyleList = i4040
  return i4038
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i4044 = root || request.c( 'TMPro.TMP_Style' )
  var i4045 = data
  i4044.m_Name = i4045[0]
  i4044.m_HashCode = i4045[1]
  i4044.m_OpeningDefinition = i4045[2]
  i4044.m_ClosingDefinition = i4045[3]
  i4044.m_OpeningTagArray = i4045[4]
  i4044.m_ClosingTagArray = i4045[5]
  return i4044
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i4046 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i4047 = data
  var i4049 = i4047[0]
  var i4048 = []
  for(var i = 0; i < i4049.length; i += 1) {
    i4048.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i4049[i + 0]) );
  }
  i4046.files = i4048
  i4046.componentToPrefabIds = i4047[1]
  return i4046
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i4052 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i4053 = data
  i4052.path = i4053[0]
  request.r(i4053[1], i4053[2], 0, i4052, 'unityObject')
  return i4052
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i4054 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i4055 = data
  var i4057 = i4055[0]
  var i4056 = []
  for(var i = 0; i < i4057.length; i += 1) {
    i4056.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i4057[i + 0]) );
  }
  i4054.scriptsExecutionOrder = i4056
  var i4059 = i4055[1]
  var i4058 = []
  for(var i = 0; i < i4059.length; i += 1) {
    i4058.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i4059[i + 0]) );
  }
  i4054.sortingLayers = i4058
  var i4061 = i4055[2]
  var i4060 = []
  for(var i = 0; i < i4061.length; i += 1) {
    i4060.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i4061[i + 0]) );
  }
  i4054.cullingLayers = i4060
  i4054.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i4055[3], i4054.timeSettings)
  i4054.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i4055[4], i4054.physicsSettings)
  i4054.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i4055[5], i4054.physics2DSettings)
  i4054.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i4055[6], i4054.qualitySettings)
  i4054.enableRealtimeShadows = !!i4055[7]
  i4054.enableAutoInstancing = !!i4055[8]
  i4054.enableStaticBatching = !!i4055[9]
  i4054.enableDynamicBatching = !!i4055[10]
  i4054.lightmapEncodingQuality = i4055[11]
  i4054.desiredColorSpace = i4055[12]
  var i4063 = i4055[13]
  var i4062 = []
  for(var i = 0; i < i4063.length; i += 1) {
    i4062.push( i4063[i + 0] );
  }
  i4054.allTags = i4062
  return i4054
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i4066 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i4067 = data
  i4066.name = i4067[0]
  i4066.value = i4067[1]
  return i4066
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i4070 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i4071 = data
  i4070.id = i4071[0]
  i4070.name = i4071[1]
  i4070.value = i4071[2]
  return i4070
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i4074 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i4075 = data
  i4074.id = i4075[0]
  i4074.name = i4075[1]
  return i4074
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i4076 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i4077 = data
  i4076.fixedDeltaTime = i4077[0]
  i4076.maximumDeltaTime = i4077[1]
  i4076.timeScale = i4077[2]
  i4076.maximumParticleTimestep = i4077[3]
  return i4076
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i4078 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i4079 = data
  i4078.gravity = new pc.Vec3( i4079[0], i4079[1], i4079[2] )
  i4078.defaultSolverIterations = i4079[3]
  i4078.bounceThreshold = i4079[4]
  i4078.autoSyncTransforms = !!i4079[5]
  i4078.autoSimulation = !!i4079[6]
  var i4081 = i4079[7]
  var i4080 = []
  for(var i = 0; i < i4081.length; i += 1) {
    i4080.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i4081[i + 0]) );
  }
  i4078.collisionMatrix = i4080
  return i4078
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i4084 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i4085 = data
  i4084.enabled = !!i4085[0]
  i4084.layerId = i4085[1]
  i4084.otherLayerId = i4085[2]
  return i4084
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i4086 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i4087 = data
  request.r(i4087[0], i4087[1], 0, i4086, 'material')
  i4086.gravity = new pc.Vec2( i4087[2], i4087[3] )
  i4086.positionIterations = i4087[4]
  i4086.velocityIterations = i4087[5]
  i4086.velocityThreshold = i4087[6]
  i4086.maxLinearCorrection = i4087[7]
  i4086.maxAngularCorrection = i4087[8]
  i4086.maxTranslationSpeed = i4087[9]
  i4086.maxRotationSpeed = i4087[10]
  i4086.baumgarteScale = i4087[11]
  i4086.baumgarteTOIScale = i4087[12]
  i4086.timeToSleep = i4087[13]
  i4086.linearSleepTolerance = i4087[14]
  i4086.angularSleepTolerance = i4087[15]
  i4086.defaultContactOffset = i4087[16]
  i4086.autoSimulation = !!i4087[17]
  i4086.queriesHitTriggers = !!i4087[18]
  i4086.queriesStartInColliders = !!i4087[19]
  i4086.callbacksOnDisable = !!i4087[20]
  i4086.reuseCollisionCallbacks = !!i4087[21]
  i4086.autoSyncTransforms = !!i4087[22]
  var i4089 = i4087[23]
  var i4088 = []
  for(var i = 0; i < i4089.length; i += 1) {
    i4088.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i4089[i + 0]) );
  }
  i4086.collisionMatrix = i4088
  return i4086
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i4092 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i4093 = data
  i4092.enabled = !!i4093[0]
  i4092.layerId = i4093[1]
  i4092.otherLayerId = i4093[2]
  return i4092
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i4094 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i4095 = data
  var i4097 = i4095[0]
  var i4096 = []
  for(var i = 0; i < i4097.length; i += 1) {
    i4096.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i4097[i + 0]) );
  }
  i4094.qualityLevels = i4096
  var i4099 = i4095[1]
  var i4098 = []
  for(var i = 0; i < i4099.length; i += 1) {
    i4098.push( i4099[i + 0] );
  }
  i4094.names = i4098
  i4094.shadows = i4095[2]
  i4094.anisotropicFiltering = i4095[3]
  i4094.antiAliasing = i4095[4]
  i4094.lodBias = i4095[5]
  i4094.shadowCascades = i4095[6]
  i4094.shadowDistance = i4095[7]
  i4094.shadowmaskMode = i4095[8]
  i4094.shadowProjection = i4095[9]
  i4094.shadowResolution = i4095[10]
  i4094.softParticles = !!i4095[11]
  i4094.softVegetation = !!i4095[12]
  i4094.activeColorSpace = i4095[13]
  i4094.desiredColorSpace = i4095[14]
  i4094.masterTextureLimit = i4095[15]
  i4094.maxQueuedFrames = i4095[16]
  i4094.particleRaycastBudget = i4095[17]
  i4094.pixelLightCount = i4095[18]
  i4094.realtimeReflectionProbes = !!i4095[19]
  i4094.shadowCascade2Split = i4095[20]
  i4094.shadowCascade4Split = new pc.Vec3( i4095[21], i4095[22], i4095[23] )
  i4094.streamingMipmapsActive = !!i4095[24]
  i4094.vSyncCount = i4095[25]
  i4094.asyncUploadBufferSize = i4095[26]
  i4094.asyncUploadTimeSlice = i4095[27]
  i4094.billboardsFaceCameraPosition = !!i4095[28]
  i4094.shadowNearPlaneOffset = i4095[29]
  i4094.streamingMipmapsMemoryBudget = i4095[30]
  i4094.maximumLODLevel = i4095[31]
  i4094.streamingMipmapsAddAllCameras = !!i4095[32]
  i4094.streamingMipmapsMaxLevelReduction = i4095[33]
  i4094.streamingMipmapsRenderersPerFrame = i4095[34]
  i4094.resolutionScalingFixedDPIFactor = i4095[35]
  i4094.streamingMipmapsMaxFileIORequests = i4095[36]
  i4094.currentQualityLevel = i4095[37]
  return i4094
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i4104 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i4105 = data
  i4104.weight = i4105[0]
  i4104.vertices = i4105[1]
  i4104.normals = i4105[2]
  i4104.tangents = i4105[3]
  return i4104
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i4108 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i4109 = data
  i4108.mode = i4109[0]
  i4108.parameter = i4109[1]
  i4108.threshold = i4109[2]
  return i4108
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i4110 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i4111 = data
  i4110.m_XCoordinate = i4111[0]
  i4110.m_YCoordinate = i4111[1]
  return i4110
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i4112 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i4113 = data
  i4112.m_XPositionAdjustment = i4113[0]
  i4112.m_YPositionAdjustment = i4113[1]
  return i4112
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i4114 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i4115 = data
  i4114.xPlacement = i4115[0]
  i4114.yPlacement = i4115[1]
  i4114.xAdvance = i4115[2]
  i4114.yAdvance = i4115[3]
  return i4114
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D":{"usedByComposite":0,"autoTiling":1,"points":2,"enabled":3,"isTrigger":4,"usedByEffector":5,"density":6,"offset":7,"material":9},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.PhysicsMaterial2D":{"name":0,"bounciness":1,"friction":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2}}

Deserializers.requiredComponents = {"53":[54],"55":[54],"56":[54],"57":[54],"58":[54],"59":[54],"60":[61],"62":[2],"63":[64],"65":[64],"66":[64],"67":[64],"68":[64],"69":[64],"70":[39],"71":[39],"72":[39],"73":[39],"74":[39],"75":[39],"76":[39],"77":[39],"78":[39],"79":[39],"80":[39],"81":[39],"82":[39],"83":[2],"84":[18],"85":[86],"87":[86],"28":[17],"7":[2],"40":[39],"42":[38],"88":[12],"89":[2],"90":[91],"92":[45],"93":[28],"94":[17],"20":[18,17],"32":[17,31],"95":[17],"96":[31,17],"97":[18],"98":[31,17],"99":[17],"100":[101],"102":[101],"103":[101],"104":[17],"105":[17],"30":[28],"33":[31,17],"106":[17],"29":[28],"107":[17],"108":[17],"109":[17],"110":[17],"111":[17],"112":[17],"113":[17],"114":[17],"115":[17],"116":[31,17],"117":[17],"118":[17],"119":[17],"120":[17],"121":[31,17],"122":[17],"123":[45],"124":[45],"46":[45],"125":[45],"126":[2],"127":[2]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.MonoBehaviour","CameraFollow2D","UnityEngine.Transform","AutoCameraFit","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Mesh","UnityEngine.Material","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","MoveBetweenPoints","UnityEngine.RectTransform","UnityEngine.MeshRenderer","UnityEngine.EventSystems.UIBehaviour","TMPro.TextMeshPro","TMPro.TMP_FontAsset","UnityEngine.MeshFilter","PlayerCardUIManager","UnityEngine.GameObject","Ply_SoundManager","UnityEngine.AudioSource","UnityEngine.AudioClip","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","TMPro.TextMeshProUGUI","UnityEngine.UI.Image","UnityEngine.UI.Button","ScreenHeightPositionAnchor","UnityEngine.PolygonCollider2D","UnityEngine.PhysicsMaterial2D","UnityEngine.BoxCollider2D","UnityEngine.Rigidbody2D","BatStrikeController","CupCollision","SlotTrigger","PlayerCardData","HideOnFirstClick","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.Font","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.InputSystem.UI.InputSystemUIInputModule","UnityEngine.InputSystem.UI.TrackedDeviceRaycaster","TMPro.TextContainer","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.38f1";

Deserializers.productName = "PLY_MiniSoccer";

Deserializers.lunaInitializationTime = "07/15/2026 03:53:54";

Deserializers.lunaDaysRunning = "64.2";

Deserializers.lunaVersion = "7.1.0";

Deserializers.lunaSHA = "cf93782349542fe0b84ad13951a26809f8419628";

Deserializers.creativeName = "PLY_V11";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1753";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4466";

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

Deserializers.buildID = "9235aeb1-5c1d-49bb-9938-e72c78cc45f8";

Deserializers.runtimeInitializeOnLoadInfos = [[["Unity","Services","Core","Internal","UnityServicesInitializer","EnableServicesInitializationAsync"],["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["DG","Tweening","DOTween","RuntimeOnLoad"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["Unity","Services","Core","Registration","CorePackageInitializer","InitializeOnLoad"],["Unity","Services","Core","Internal","TaskAsyncOperation","SetScheduler"],["Unity","Services","Core","Environments","Client","Scheduler","EngineStateHelper","Init"],["Unity","Services","Core","Environments","Client","Scheduler","ThreadHelper","Init"],["Ua2CoreInitializeCallback","Register"],["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["Unity","AI","Navigation","NavMeshLink","ClearTrackedList"],["Unity","AI","Navigation","NavMeshSurface","ClearNavMeshSurfaces"],["Unity","AI","Navigation","NavMeshModifierVolume","ClearNavMeshModifiers"],["Unity","AI","Navigation","NavMeshModifier","ClearNavMeshModifiers"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["Unity","Services","Core","Internal","UnityServicesInitializer","CreateStaticInstance"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[["Unity","Services","Core","Environments","Client","Http","JsonHelpers","RegisterTypesForAOT"]],[["Unity","Services","Core","UnityThreadUtils","CaptureUnityThreadInfo"],["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

