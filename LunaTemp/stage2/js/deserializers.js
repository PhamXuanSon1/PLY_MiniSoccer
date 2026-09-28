var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i7418 = root || request.c( 'UnityEngine.JointSpring' )
  var i7419 = data
  i7418.spring = i7419[0]
  i7418.damper = i7419[1]
  i7418.targetPosition = i7419[2]
  return i7418
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i7420 = root || request.c( 'UnityEngine.JointMotor' )
  var i7421 = data
  i7420.m_TargetVelocity = i7421[0]
  i7420.m_Force = i7421[1]
  i7420.m_FreeSpin = i7421[2]
  return i7420
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i7422 = root || request.c( 'UnityEngine.JointLimits' )
  var i7423 = data
  i7422.m_Min = i7423[0]
  i7422.m_Max = i7423[1]
  i7422.m_Bounciness = i7423[2]
  i7422.m_BounceMinVelocity = i7423[3]
  i7422.m_ContactDistance = i7423[4]
  i7422.minBounce = i7423[5]
  i7422.maxBounce = i7423[6]
  return i7422
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i7424 = root || request.c( 'UnityEngine.JointDrive' )
  var i7425 = data
  i7424.m_PositionSpring = i7425[0]
  i7424.m_PositionDamper = i7425[1]
  i7424.m_MaximumForce = i7425[2]
  i7424.m_UseAcceleration = i7425[3]
  return i7424
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i7426 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i7427 = data
  i7426.m_Spring = i7427[0]
  i7426.m_Damper = i7427[1]
  return i7426
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i7428 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i7429 = data
  i7428.m_Limit = i7429[0]
  i7428.m_Bounciness = i7429[1]
  i7428.m_ContactDistance = i7429[2]
  return i7428
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i7430 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i7431 = data
  i7430.m_ExtremumSlip = i7431[0]
  i7430.m_ExtremumValue = i7431[1]
  i7430.m_AsymptoteSlip = i7431[2]
  i7430.m_AsymptoteValue = i7431[3]
  i7430.m_Stiffness = i7431[4]
  return i7430
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i7432 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i7433 = data
  i7432.m_LowerAngle = i7433[0]
  i7432.m_UpperAngle = i7433[1]
  return i7432
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i7434 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i7435 = data
  i7434.m_MotorSpeed = i7435[0]
  i7434.m_MaximumMotorTorque = i7435[1]
  return i7434
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i7436 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i7437 = data
  i7436.m_DampingRatio = i7437[0]
  i7436.m_Frequency = i7437[1]
  i7436.m_Angle = i7437[2]
  return i7436
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i7438 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i7439 = data
  i7438.m_LowerTranslation = i7439[0]
  i7438.m_UpperTranslation = i7439[1]
  return i7438
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i7440 = root || new pc.UnityMaterial()
  var i7441 = data
  i7440.name = i7441[0]
  request.r(i7441[1], i7441[2], 0, i7440, 'shader')
  i7440.renderQueue = i7441[3]
  i7440.enableInstancing = !!i7441[4]
  var i7443 = i7441[5]
  var i7442 = []
  for(var i = 0; i < i7443.length; i += 1) {
    i7442.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i7443[i + 0]) );
  }
  i7440.floatParameters = i7442
  var i7445 = i7441[6]
  var i7444 = []
  for(var i = 0; i < i7445.length; i += 1) {
    i7444.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i7445[i + 0]) );
  }
  i7440.colorParameters = i7444
  var i7447 = i7441[7]
  var i7446 = []
  for(var i = 0; i < i7447.length; i += 1) {
    i7446.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i7447[i + 0]) );
  }
  i7440.vectorParameters = i7446
  var i7449 = i7441[8]
  var i7448 = []
  for(var i = 0; i < i7449.length; i += 1) {
    i7448.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i7449[i + 0]) );
  }
  i7440.textureParameters = i7448
  var i7451 = i7441[9]
  var i7450 = []
  for(var i = 0; i < i7451.length; i += 1) {
    i7450.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i7451[i + 0]) );
  }
  i7440.materialFlags = i7450
  return i7440
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i7454 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i7455 = data
  i7454.name = i7455[0]
  i7454.value = i7455[1]
  return i7454
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i7458 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i7459 = data
  i7458.name = i7459[0]
  i7458.value = new pc.Color(i7459[1], i7459[2], i7459[3], i7459[4])
  return i7458
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i7462 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i7463 = data
  i7462.name = i7463[0]
  i7462.value = new pc.Vec4( i7463[1], i7463[2], i7463[3], i7463[4] )
  return i7462
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i7466 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i7467 = data
  i7466.name = i7467[0]
  request.r(i7467[1], i7467[2], 0, i7466, 'value')
  return i7466
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i7470 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i7471 = data
  i7470.name = i7471[0]
  i7470.enabled = !!i7471[1]
  return i7470
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i7472 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i7473 = data
  i7472.name = i7473[0]
  i7472.width = i7473[1]
  i7472.height = i7473[2]
  i7472.mipmapCount = i7473[3]
  i7472.anisoLevel = i7473[4]
  i7472.filterMode = i7473[5]
  i7472.hdr = !!i7473[6]
  i7472.format = i7473[7]
  i7472.wrapMode = i7473[8]
  i7472.alphaIsTransparency = !!i7473[9]
  i7472.alphaSource = i7473[10]
  i7472.graphicsFormat = i7473[11]
  i7472.sRGBTexture = !!i7473[12]
  i7472.desiredColorSpace = i7473[13]
  i7472.wrapU = i7473[14]
  i7472.wrapV = i7473[15]
  return i7472
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i7474 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i7475 = data
  i7474.name = i7475[0]
  i7474.halfPrecision = !!i7475[1]
  i7474.useSimplification = !!i7475[2]
  i7474.useUInt32IndexFormat = !!i7475[3]
  i7474.vertexCount = i7475[4]
  i7474.aabb = i7475[5]
  var i7477 = i7475[6]
  var i7476 = []
  for(var i = 0; i < i7477.length; i += 1) {
    i7476.push( !!i7477[i + 0] );
  }
  i7474.streams = i7476
  i7474.vertices = i7475[7]
  var i7479 = i7475[8]
  var i7478 = []
  for(var i = 0; i < i7479.length; i += 1) {
    i7478.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i7479[i + 0]) );
  }
  i7474.subMeshes = i7478
  var i7481 = i7475[9]
  var i7480 = []
  for(var i = 0; i < i7481.length; i += 16) {
    i7480.push( new pc.Mat4().setData(i7481[i + 0], i7481[i + 1], i7481[i + 2], i7481[i + 3],  i7481[i + 4], i7481[i + 5], i7481[i + 6], i7481[i + 7],  i7481[i + 8], i7481[i + 9], i7481[i + 10], i7481[i + 11],  i7481[i + 12], i7481[i + 13], i7481[i + 14], i7481[i + 15]) );
  }
  i7474.bindposes = i7480
  var i7483 = i7475[10]
  var i7482 = []
  for(var i = 0; i < i7483.length; i += 1) {
    i7482.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i7483[i + 0]) );
  }
  i7474.blendShapes = i7482
  return i7474
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i7488 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i7489 = data
  i7488.triangles = i7489[0]
  return i7488
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i7494 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i7495 = data
  i7494.name = i7495[0]
  var i7497 = i7495[1]
  var i7496 = []
  for(var i = 0; i < i7497.length; i += 1) {
    i7496.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i7497[i + 0]) );
  }
  i7494.frames = i7496
  return i7494
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i7498 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i7499 = data
  i7498.name = i7499[0]
  i7498.index = i7499[1]
  i7498.startup = !!i7499[2]
  return i7498
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i7500 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i7501 = data
  i7500.aspect = i7501[0]
  i7500.orthographic = !!i7501[1]
  i7500.orthographicSize = i7501[2]
  i7500.backgroundColor = new pc.Color(i7501[3], i7501[4], i7501[5], i7501[6])
  i7500.nearClipPlane = i7501[7]
  i7500.farClipPlane = i7501[8]
  i7500.fieldOfView = i7501[9]
  i7500.depth = i7501[10]
  i7500.clearFlags = i7501[11]
  i7500.cullingMask = i7501[12]
  i7500.rect = i7501[13]
  request.r(i7501[14], i7501[15], 0, i7500, 'targetTexture')
  i7500.usePhysicalProperties = !!i7501[16]
  i7500.focalLength = i7501[17]
  i7500.sensorSize = new pc.Vec2( i7501[18], i7501[19] )
  i7500.lensShift = new pc.Vec2( i7501[20], i7501[21] )
  i7500.gateFit = i7501[22]
  i7500.commandBufferCount = i7501[23]
  i7500.cameraType = i7501[24]
  i7500.enabled = !!i7501[25]
  return i7500
}

Deserializers["CameraFollow2D"] = function (request, data, root) {
  var i7502 = root || request.c( 'CameraFollow2D' )
  var i7503 = data
  request.r(i7503[0], i7503[1], 0, i7502, 'target')
  i7502.smoothSpeed = i7503[2]
  i7502.offset = new pc.Vec3( i7503[3], i7503[4], i7503[5] )
  i7502.followY = !!i7503[6]
  return i7502
}

Deserializers["AutoCameraFit"] = function (request, data, root) {
  var i7504 = root || request.c( 'AutoCameraFit' )
  var i7505 = data
  request.r(i7505[0], i7505[1], 0, i7504, 'tallScreenObject')
  i7504.tallScreenRatioThreshold = i7505[2]
  i7504.tallScreenYOffset = i7505[3]
  request.r(i7505[4], i7505[5], 0, i7504, 'canvasBtn')
  request.r(i7505[6], i7505[7], 0, i7504, 'targetArea')
  i7504.paddingLandscape = i7505[8]
  i7504.paddingPortrait = i7505[9]
  i7504.extraPaddingSmallScreen = i7505[10]
  i7504.smallScreenThreshold = i7505[11]
  i7504.autoUpdateOnResize = !!i7505[12]
  i7504.adjustInEditMode = !!i7505[13]
  return i7504
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i7506 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i7507 = data
  i7506.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i7507[0], i7506.main)
  i7506.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i7507[1], i7506.colorBySpeed)
  i7506.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i7507[2], i7506.colorOverLifetime)
  i7506.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i7507[3], i7506.emission)
  i7506.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i7507[4], i7506.rotationBySpeed)
  i7506.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i7507[5], i7506.rotationOverLifetime)
  i7506.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i7507[6], i7506.shape)
  i7506.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i7507[7], i7506.sizeBySpeed)
  i7506.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i7507[8], i7506.sizeOverLifetime)
  i7506.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i7507[9], i7506.textureSheetAnimation)
  i7506.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i7507[10], i7506.velocityOverLifetime)
  i7506.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i7507[11], i7506.noise)
  i7506.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i7507[12], i7506.inheritVelocity)
  i7506.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i7507[13], i7506.forceOverLifetime)
  i7506.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i7507[14], i7506.limitVelocityOverLifetime)
  i7506.useAutoRandomSeed = !!i7507[15]
  i7506.randomSeed = i7507[16]
  return i7506
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i7508 = root || new pc.ParticleSystemMain()
  var i7509 = data
  i7508.duration = i7509[0]
  i7508.loop = !!i7509[1]
  i7508.prewarm = !!i7509[2]
  i7508.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7509[3], i7508.startDelay)
  i7508.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7509[4], i7508.startLifetime)
  i7508.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7509[5], i7508.startSpeed)
  i7508.startSize3D = !!i7509[6]
  i7508.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7509[7], i7508.startSizeX)
  i7508.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7509[8], i7508.startSizeY)
  i7508.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7509[9], i7508.startSizeZ)
  i7508.startRotation3D = !!i7509[10]
  i7508.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7509[11], i7508.startRotationX)
  i7508.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7509[12], i7508.startRotationY)
  i7508.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7509[13], i7508.startRotationZ)
  i7508.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i7509[14], i7508.startColor)
  i7508.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7509[15], i7508.gravityModifier)
  i7508.simulationSpace = i7509[16]
  request.r(i7509[17], i7509[18], 0, i7508, 'customSimulationSpace')
  i7508.simulationSpeed = i7509[19]
  i7508.useUnscaledTime = !!i7509[20]
  i7508.scalingMode = i7509[21]
  i7508.playOnAwake = !!i7509[22]
  i7508.maxParticles = i7509[23]
  i7508.emitterVelocityMode = i7509[24]
  i7508.stopAction = i7509[25]
  return i7508
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i7510 = root || new pc.MinMaxCurve()
  var i7511 = data
  i7510.mode = i7511[0]
  i7510.curveMin = new pc.AnimationCurve( { keys_flow: i7511[1] } )
  i7510.curveMax = new pc.AnimationCurve( { keys_flow: i7511[2] } )
  i7510.curveMultiplier = i7511[3]
  i7510.constantMin = i7511[4]
  i7510.constantMax = i7511[5]
  return i7510
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i7512 = root || new pc.MinMaxGradient()
  var i7513 = data
  i7512.mode = i7513[0]
  i7512.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i7513[1], i7512.gradientMin)
  i7512.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i7513[2], i7512.gradientMax)
  i7512.colorMin = new pc.Color(i7513[3], i7513[4], i7513[5], i7513[6])
  i7512.colorMax = new pc.Color(i7513[7], i7513[8], i7513[9], i7513[10])
  return i7512
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i7514 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i7515 = data
  i7514.mode = i7515[0]
  var i7517 = i7515[1]
  var i7516 = []
  for(var i = 0; i < i7517.length; i += 1) {
    i7516.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i7517[i + 0]) );
  }
  i7514.colorKeys = i7516
  var i7519 = i7515[2]
  var i7518 = []
  for(var i = 0; i < i7519.length; i += 1) {
    i7518.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i7519[i + 0]) );
  }
  i7514.alphaKeys = i7518
  return i7514
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i7520 = root || new pc.ParticleSystemColorBySpeed()
  var i7521 = data
  i7520.enabled = !!i7521[0]
  i7520.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i7521[1], i7520.color)
  i7520.range = new pc.Vec2( i7521[2], i7521[3] )
  return i7520
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i7524 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i7525 = data
  i7524.color = new pc.Color(i7525[0], i7525[1], i7525[2], i7525[3])
  i7524.time = i7525[4]
  return i7524
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i7528 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i7529 = data
  i7528.alpha = i7529[0]
  i7528.time = i7529[1]
  return i7528
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i7530 = root || new pc.ParticleSystemColorOverLifetime()
  var i7531 = data
  i7530.enabled = !!i7531[0]
  i7530.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i7531[1], i7530.color)
  return i7530
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i7532 = root || new pc.ParticleSystemEmitter()
  var i7533 = data
  i7532.enabled = !!i7533[0]
  i7532.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7533[1], i7532.rateOverTime)
  i7532.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7533[2], i7532.rateOverDistance)
  var i7535 = i7533[3]
  var i7534 = []
  for(var i = 0; i < i7535.length; i += 1) {
    i7534.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i7535[i + 0]) );
  }
  i7532.bursts = i7534
  return i7532
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i7538 = root || new pc.ParticleSystemBurst()
  var i7539 = data
  i7538.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7539[0], i7538.count)
  i7538.cycleCount = i7539[1]
  i7538.minCount = i7539[2]
  i7538.maxCount = i7539[3]
  i7538.repeatInterval = i7539[4]
  i7538.time = i7539[5]
  return i7538
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i7540 = root || new pc.ParticleSystemRotationBySpeed()
  var i7541 = data
  i7540.enabled = !!i7541[0]
  i7540.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7541[1], i7540.x)
  i7540.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7541[2], i7540.y)
  i7540.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7541[3], i7540.z)
  i7540.separateAxes = !!i7541[4]
  i7540.range = new pc.Vec2( i7541[5], i7541[6] )
  return i7540
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i7542 = root || new pc.ParticleSystemRotationOverLifetime()
  var i7543 = data
  i7542.enabled = !!i7543[0]
  i7542.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7543[1], i7542.x)
  i7542.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7543[2], i7542.y)
  i7542.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7543[3], i7542.z)
  i7542.separateAxes = !!i7543[4]
  return i7542
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i7544 = root || new pc.ParticleSystemShape()
  var i7545 = data
  i7544.enabled = !!i7545[0]
  i7544.shapeType = i7545[1]
  i7544.randomDirectionAmount = i7545[2]
  i7544.sphericalDirectionAmount = i7545[3]
  i7544.randomPositionAmount = i7545[4]
  i7544.alignToDirection = !!i7545[5]
  i7544.radius = i7545[6]
  i7544.radiusMode = i7545[7]
  i7544.radiusSpread = i7545[8]
  i7544.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7545[9], i7544.radiusSpeed)
  i7544.radiusThickness = i7545[10]
  i7544.angle = i7545[11]
  i7544.length = i7545[12]
  i7544.boxThickness = new pc.Vec3( i7545[13], i7545[14], i7545[15] )
  i7544.meshShapeType = i7545[16]
  request.r(i7545[17], i7545[18], 0, i7544, 'mesh')
  request.r(i7545[19], i7545[20], 0, i7544, 'meshRenderer')
  request.r(i7545[21], i7545[22], 0, i7544, 'skinnedMeshRenderer')
  i7544.useMeshMaterialIndex = !!i7545[23]
  i7544.meshMaterialIndex = i7545[24]
  i7544.useMeshColors = !!i7545[25]
  i7544.normalOffset = i7545[26]
  i7544.arc = i7545[27]
  i7544.arcMode = i7545[28]
  i7544.arcSpread = i7545[29]
  i7544.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7545[30], i7544.arcSpeed)
  i7544.donutRadius = i7545[31]
  i7544.position = new pc.Vec3( i7545[32], i7545[33], i7545[34] )
  i7544.rotation = new pc.Vec3( i7545[35], i7545[36], i7545[37] )
  i7544.scale = new pc.Vec3( i7545[38], i7545[39], i7545[40] )
  return i7544
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i7546 = root || new pc.ParticleSystemSizeBySpeed()
  var i7547 = data
  i7546.enabled = !!i7547[0]
  i7546.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7547[1], i7546.x)
  i7546.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7547[2], i7546.y)
  i7546.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7547[3], i7546.z)
  i7546.separateAxes = !!i7547[4]
  i7546.range = new pc.Vec2( i7547[5], i7547[6] )
  return i7546
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i7548 = root || new pc.ParticleSystemSizeOverLifetime()
  var i7549 = data
  i7548.enabled = !!i7549[0]
  i7548.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7549[1], i7548.x)
  i7548.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7549[2], i7548.y)
  i7548.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7549[3], i7548.z)
  i7548.separateAxes = !!i7549[4]
  return i7548
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i7550 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i7551 = data
  i7550.enabled = !!i7551[0]
  i7550.mode = i7551[1]
  i7550.animation = i7551[2]
  i7550.numTilesX = i7551[3]
  i7550.numTilesY = i7551[4]
  i7550.useRandomRow = !!i7551[5]
  i7550.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7551[6], i7550.frameOverTime)
  i7550.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7551[7], i7550.startFrame)
  i7550.cycleCount = i7551[8]
  i7550.rowIndex = i7551[9]
  i7550.flipU = i7551[10]
  i7550.flipV = i7551[11]
  i7550.spriteCount = i7551[12]
  var i7553 = i7551[13]
  var i7552 = []
  for(var i = 0; i < i7553.length; i += 2) {
  request.r(i7553[i + 0], i7553[i + 1], 2, i7552, '')
  }
  i7550.sprites = i7552
  return i7550
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i7556 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i7557 = data
  i7556.enabled = !!i7557[0]
  i7556.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7557[1], i7556.x)
  i7556.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7557[2], i7556.y)
  i7556.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7557[3], i7556.z)
  i7556.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7557[4], i7556.radial)
  i7556.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7557[5], i7556.speedModifier)
  i7556.space = i7557[6]
  i7556.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7557[7], i7556.orbitalX)
  i7556.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7557[8], i7556.orbitalY)
  i7556.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7557[9], i7556.orbitalZ)
  i7556.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7557[10], i7556.orbitalOffsetX)
  i7556.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7557[11], i7556.orbitalOffsetY)
  i7556.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7557[12], i7556.orbitalOffsetZ)
  return i7556
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i7558 = root || new pc.ParticleSystemNoise()
  var i7559 = data
  i7558.enabled = !!i7559[0]
  i7558.separateAxes = !!i7559[1]
  i7558.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7559[2], i7558.strengthX)
  i7558.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7559[3], i7558.strengthY)
  i7558.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7559[4], i7558.strengthZ)
  i7558.frequency = i7559[5]
  i7558.damping = !!i7559[6]
  i7558.octaveCount = i7559[7]
  i7558.octaveMultiplier = i7559[8]
  i7558.octaveScale = i7559[9]
  i7558.quality = i7559[10]
  i7558.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7559[11], i7558.scrollSpeed)
  i7558.scrollSpeedMultiplier = i7559[12]
  i7558.remapEnabled = !!i7559[13]
  i7558.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7559[14], i7558.remapX)
  i7558.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7559[15], i7558.remapY)
  i7558.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7559[16], i7558.remapZ)
  i7558.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7559[17], i7558.positionAmount)
  i7558.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7559[18], i7558.rotationAmount)
  i7558.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7559[19], i7558.sizeAmount)
  return i7558
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i7560 = root || new pc.ParticleSystemInheritVelocity()
  var i7561 = data
  i7560.enabled = !!i7561[0]
  i7560.mode = i7561[1]
  i7560.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7561[2], i7560.curve)
  return i7560
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i7562 = root || new pc.ParticleSystemForceOverLifetime()
  var i7563 = data
  i7562.enabled = !!i7563[0]
  i7562.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7563[1], i7562.x)
  i7562.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7563[2], i7562.y)
  i7562.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7563[3], i7562.z)
  i7562.space = i7563[4]
  i7562.randomized = !!i7563[5]
  return i7562
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i7564 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i7565 = data
  i7564.enabled = !!i7565[0]
  i7564.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7565[1], i7564.limit)
  i7564.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7565[2], i7564.limitX)
  i7564.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7565[3], i7564.limitY)
  i7564.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7565[4], i7564.limitZ)
  i7564.dampen = i7565[5]
  i7564.separateAxes = !!i7565[6]
  i7564.space = i7565[7]
  i7564.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7565[8], i7564.drag)
  i7564.multiplyDragByParticleSize = !!i7565[9]
  i7564.multiplyDragByParticleVelocity = !!i7565[10]
  return i7564
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i7566 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i7567 = data
  request.r(i7567[0], i7567[1], 0, i7566, 'mesh')
  i7566.meshCount = i7567[2]
  i7566.activeVertexStreamsCount = i7567[3]
  i7566.alignment = i7567[4]
  i7566.renderMode = i7567[5]
  i7566.sortMode = i7567[6]
  i7566.lengthScale = i7567[7]
  i7566.velocityScale = i7567[8]
  i7566.cameraVelocityScale = i7567[9]
  i7566.normalDirection = i7567[10]
  i7566.sortingFudge = i7567[11]
  i7566.minParticleSize = i7567[12]
  i7566.maxParticleSize = i7567[13]
  i7566.pivot = new pc.Vec3( i7567[14], i7567[15], i7567[16] )
  request.r(i7567[17], i7567[18], 0, i7566, 'trailMaterial')
  i7566.applyActiveColorSpace = !!i7567[19]
  i7566.enabled = !!i7567[20]
  request.r(i7567[21], i7567[22], 0, i7566, 'sharedMaterial')
  var i7569 = i7567[23]
  var i7568 = []
  for(var i = 0; i < i7569.length; i += 2) {
  request.r(i7569[i + 0], i7569[i + 1], 2, i7568, '')
  }
  i7566.sharedMaterials = i7568
  i7566.receiveShadows = !!i7567[24]
  i7566.shadowCastingMode = i7567[25]
  i7566.sortingLayerID = i7567[26]
  i7566.sortingOrder = i7567[27]
  i7566.lightmapIndex = i7567[28]
  i7566.lightmapSceneIndex = i7567[29]
  i7566.lightmapScaleOffset = new pc.Vec4( i7567[30], i7567[31], i7567[32], i7567[33] )
  i7566.lightProbeUsage = i7567[34]
  i7566.reflectionProbeUsage = i7567[35]
  return i7566
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i7572 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i7573 = data
  i7572.name = i7573[0]
  i7572.tagId = i7573[1]
  i7572.enabled = !!i7573[2]
  i7572.isStatic = !!i7573[3]
  i7572.layer = i7573[4]
  return i7572
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i7574 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i7575 = data
  i7574.color = new pc.Color(i7575[0], i7575[1], i7575[2], i7575[3])
  request.r(i7575[4], i7575[5], 0, i7574, 'sprite')
  i7574.flipX = !!i7575[6]
  i7574.flipY = !!i7575[7]
  i7574.drawMode = i7575[8]
  i7574.size = new pc.Vec2( i7575[9], i7575[10] )
  i7574.tileMode = i7575[11]
  i7574.adaptiveModeThreshold = i7575[12]
  i7574.maskInteraction = i7575[13]
  i7574.spriteSortPoint = i7575[14]
  i7574.enabled = !!i7575[15]
  request.r(i7575[16], i7575[17], 0, i7574, 'sharedMaterial')
  var i7577 = i7575[18]
  var i7576 = []
  for(var i = 0; i < i7577.length; i += 2) {
  request.r(i7577[i + 0], i7577[i + 1], 2, i7576, '')
  }
  i7574.sharedMaterials = i7576
  i7574.receiveShadows = !!i7575[19]
  i7574.shadowCastingMode = i7575[20]
  i7574.sortingLayerID = i7575[21]
  i7574.sortingOrder = i7575[22]
  i7574.lightmapIndex = i7575[23]
  i7574.lightmapSceneIndex = i7575[24]
  i7574.lightmapScaleOffset = new pc.Vec4( i7575[25], i7575[26], i7575[27], i7575[28] )
  i7574.lightProbeUsage = i7575[29]
  i7574.reflectionProbeUsage = i7575[30]
  return i7574
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i7578 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i7579 = data
  request.r(i7579[0], i7579[1], 0, i7578, 'animatorController')
  request.r(i7579[2], i7579[3], 0, i7578, 'avatar')
  i7578.updateMode = i7579[4]
  i7578.hasTransformHierarchy = !!i7579[5]
  i7578.applyRootMotion = !!i7579[6]
  var i7581 = i7579[7]
  var i7580 = []
  for(var i = 0; i < i7581.length; i += 2) {
  request.r(i7581[i + 0], i7581[i + 1], 2, i7580, '')
  }
  i7578.humanBones = i7580
  i7578.enabled = !!i7579[8]
  return i7578
}

Deserializers["MoveBetweenPoints"] = function (request, data, root) {
  var i7584 = root || request.c( 'MoveBetweenPoints' )
  var i7585 = data
  request.r(i7585[0], i7585[1], 0, i7584, 'pointA')
  request.r(i7585[2], i7585[3], 0, i7584, 'pointB')
  i7584.duration = i7585[4]
  return i7584
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i7586 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i7587 = data
  i7586.pivot = new pc.Vec2( i7587[0], i7587[1] )
  i7586.anchorMin = new pc.Vec2( i7587[2], i7587[3] )
  i7586.anchorMax = new pc.Vec2( i7587[4], i7587[5] )
  i7586.sizeDelta = new pc.Vec2( i7587[6], i7587[7] )
  i7586.anchoredPosition3D = new pc.Vec3( i7587[8], i7587[9], i7587[10] )
  i7586.rotation = new pc.Quat(i7587[11], i7587[12], i7587[13], i7587[14])
  i7586.scale = new pc.Vec3( i7587[15], i7587[16], i7587[17] )
  return i7586
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i7588 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i7589 = data
  request.r(i7589[0], i7589[1], 0, i7588, 'additionalVertexStreams')
  i7588.enabled = !!i7589[2]
  request.r(i7589[3], i7589[4], 0, i7588, 'sharedMaterial')
  var i7591 = i7589[5]
  var i7590 = []
  for(var i = 0; i < i7591.length; i += 2) {
  request.r(i7591[i + 0], i7591[i + 1], 2, i7590, '')
  }
  i7588.sharedMaterials = i7590
  i7588.receiveShadows = !!i7589[6]
  i7588.shadowCastingMode = i7589[7]
  i7588.sortingLayerID = i7589[8]
  i7588.sortingOrder = i7589[9]
  i7588.lightmapIndex = i7589[10]
  i7588.lightmapSceneIndex = i7589[11]
  i7588.lightmapScaleOffset = new pc.Vec4( i7589[12], i7589[13], i7589[14], i7589[15] )
  i7588.lightProbeUsage = i7589[16]
  i7588.reflectionProbeUsage = i7589[17]
  return i7588
}

Deserializers["TMPro.TextMeshPro"] = function (request, data, root) {
  var i7592 = root || request.c( 'TMPro.TextMeshPro' )
  var i7593 = data
  i7592._SortingLayer = i7593[0]
  i7592._SortingLayerID = i7593[1]
  i7592._SortingOrder = i7593[2]
  i7592.m_hasFontAssetChanged = !!i7593[3]
  request.r(i7593[4], i7593[5], 0, i7592, 'm_renderer')
  i7592.m_maskType = i7593[6]
  i7592.m_text = i7593[7]
  i7592.m_isRightToLeft = !!i7593[8]
  request.r(i7593[9], i7593[10], 0, i7592, 'm_fontAsset')
  request.r(i7593[11], i7593[12], 0, i7592, 'm_sharedMaterial')
  var i7595 = i7593[13]
  var i7594 = []
  for(var i = 0; i < i7595.length; i += 2) {
  request.r(i7595[i + 0], i7595[i + 1], 2, i7594, '')
  }
  i7592.m_fontSharedMaterials = i7594
  request.r(i7593[14], i7593[15], 0, i7592, 'm_fontMaterial')
  var i7597 = i7593[16]
  var i7596 = []
  for(var i = 0; i < i7597.length; i += 2) {
  request.r(i7597[i + 0], i7597[i + 1], 2, i7596, '')
  }
  i7592.m_fontMaterials = i7596
  i7592.m_fontColor32 = UnityEngine.Color32.ConstructColor(i7593[17], i7593[18], i7593[19], i7593[20])
  i7592.m_fontColor = new pc.Color(i7593[21], i7593[22], i7593[23], i7593[24])
  i7592.m_enableVertexGradient = !!i7593[25]
  i7592.m_colorMode = i7593[26]
  i7592.m_fontColorGradient = request.d('TMPro.VertexGradient', i7593[27], i7592.m_fontColorGradient)
  request.r(i7593[28], i7593[29], 0, i7592, 'm_fontColorGradientPreset')
  request.r(i7593[30], i7593[31], 0, i7592, 'm_spriteAsset')
  i7592.m_tintAllSprites = !!i7593[32]
  request.r(i7593[33], i7593[34], 0, i7592, 'm_StyleSheet')
  i7592.m_TextStyleHashCode = i7593[35]
  i7592.m_overrideHtmlColors = !!i7593[36]
  i7592.m_faceColor = UnityEngine.Color32.ConstructColor(i7593[37], i7593[38], i7593[39], i7593[40])
  i7592.m_fontSize = i7593[41]
  i7592.m_fontSizeBase = i7593[42]
  i7592.m_fontWeight = i7593[43]
  i7592.m_enableAutoSizing = !!i7593[44]
  i7592.m_fontSizeMin = i7593[45]
  i7592.m_fontSizeMax = i7593[46]
  i7592.m_fontStyle = i7593[47]
  i7592.m_HorizontalAlignment = i7593[48]
  i7592.m_VerticalAlignment = i7593[49]
  i7592.m_textAlignment = i7593[50]
  i7592.m_characterSpacing = i7593[51]
  i7592.m_wordSpacing = i7593[52]
  i7592.m_lineSpacing = i7593[53]
  i7592.m_lineSpacingMax = i7593[54]
  i7592.m_paragraphSpacing = i7593[55]
  i7592.m_charWidthMaxAdj = i7593[56]
  i7592.m_TextWrappingMode = i7593[57]
  i7592.m_wordWrappingRatios = i7593[58]
  i7592.m_overflowMode = i7593[59]
  request.r(i7593[60], i7593[61], 0, i7592, 'm_linkedTextComponent')
  request.r(i7593[62], i7593[63], 0, i7592, 'parentLinkedComponent')
  i7592.m_enableKerning = !!i7593[64]
  var i7599 = i7593[65]
  var i7598 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i7599.length; i += 1) {
    i7598.add(i7599[i + 0]);
  }
  i7592.m_ActiveFontFeatures = i7598
  i7592.m_enableExtraPadding = !!i7593[66]
  i7592.checkPaddingRequired = !!i7593[67]
  i7592.m_isRichText = !!i7593[68]
  i7592.m_parseCtrlCharacters = !!i7593[69]
  i7592.m_isOrthographic = !!i7593[70]
  i7592.m_isCullingEnabled = !!i7593[71]
  i7592.m_horizontalMapping = i7593[72]
  i7592.m_verticalMapping = i7593[73]
  i7592.m_uvLineOffset = i7593[74]
  i7592.m_geometrySortingOrder = i7593[75]
  i7592.m_IsTextObjectScaleStatic = !!i7593[76]
  i7592.m_VertexBufferAutoSizeReduction = !!i7593[77]
  i7592.m_useMaxVisibleDescender = !!i7593[78]
  i7592.m_pageToDisplay = i7593[79]
  i7592.m_margin = new pc.Vec4( i7593[80], i7593[81], i7593[82], i7593[83] )
  i7592.m_isUsingLegacyAnimationComponent = !!i7593[84]
  i7592.m_isVolumetricText = !!i7593[85]
  request.r(i7593[86], i7593[87], 0, i7592, 'm_Material')
  i7592.m_EmojiFallbackSupport = !!i7593[88]
  i7592.m_Maskable = !!i7593[89]
  i7592.m_Color = new pc.Color(i7593[90], i7593[91], i7593[92], i7593[93])
  i7592.m_RaycastTarget = !!i7593[94]
  i7592.m_RaycastPadding = new pc.Vec4( i7593[95], i7593[96], i7593[97], i7593[98] )
  return i7592
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i7600 = root || request.c( 'TMPro.VertexGradient' )
  var i7601 = data
  i7600.topLeft = new pc.Color(i7601[0], i7601[1], i7601[2], i7601[3])
  i7600.topRight = new pc.Color(i7601[4], i7601[5], i7601[6], i7601[7])
  i7600.bottomLeft = new pc.Color(i7601[8], i7601[9], i7601[10], i7601[11])
  i7600.bottomRight = new pc.Color(i7601[12], i7601[13], i7601[14], i7601[15])
  return i7600
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i7604 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i7605 = data
  request.r(i7605[0], i7605[1], 0, i7604, 'sharedMesh')
  return i7604
}

Deserializers["PlayerCardUIManager"] = function (request, data, root) {
  var i7606 = root || request.c( 'PlayerCardUIManager' )
  var i7607 = data
  request.r(i7607[0], i7607[1], 0, i7606, 'cardPanel')
  var i7609 = i7607[2]
  var i7608 = []
  for(var i = 0; i < i7609.length; i += 2) {
  request.r(i7609[i + 0], i7609[i + 1], 2, i7608, '')
  }
  i7606.extraObjectsToActivate = i7608
  i7606.waitTime = i7607[3]
  var i7611 = i7607[4]
  var i7610 = []
  for(var i = 0; i < i7611.length; i += 2) {
  request.r(i7611[i + 0], i7611[i + 1], 2, i7610, '')
  }
  i7606.objectsToTurnOnAfterWait = i7610
  var i7613 = i7607[5]
  var i7612 = []
  for(var i = 0; i < i7613.length; i += 2) {
  request.r(i7613[i + 0], i7613[i + 1], 2, i7612, '')
  }
  i7606.objectsToTurnOffAfterWait = i7612
  request.r(i7607[6], i7607[7], 0, i7606, 'nationalityText')
  request.r(i7607[8], i7607[9], 0, i7606, 'playerImage')
  request.r(i7607[10], i7607[11], 0, i7606, 'flagImage')
  return i7606
}

Deserializers["Ply_SoundManager"] = function (request, data, root) {
  var i7616 = root || request.c( 'Ply_SoundManager' )
  var i7617 = data
  i7616.fxAudio = request.d('FxAudio', i7617[0], i7616.fxAudio)
  request.r(i7617[1], i7617[2], 0, i7616, 'bgm1')
  return i7616
}

Deserializers["FxAudio"] = function (request, data, root) {
  var i7618 = root || request.c( 'FxAudio' )
  var i7619 = data
  i7618.ClickBox = request.d('SoundData', i7619[0], i7618.ClickBox)
  i7618.Happy = request.d('SoundData', i7619[1], i7618.Happy)
  i7618.Wrong = request.d('SoundData', i7619[2], i7618.Wrong)
  i7618.Spray = request.d('SoundData', i7619[3], i7618.Spray)
  i7618.Brush = request.d('SoundData', i7619[4], i7618.Brush)
  return i7618
}

Deserializers["SoundData"] = function (request, data, root) {
  var i7620 = root || request.c( 'SoundData' )
  var i7621 = data
  request.r(i7621[0], i7621[1], 0, i7620, 'clip')
  i7620.repeatCount = i7621[2]
  return i7620
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i7622 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i7623 = data
  request.r(i7623[0], i7623[1], 0, i7622, 'clip')
  request.r(i7623[2], i7623[3], 0, i7622, 'outputAudioMixerGroup')
  i7622.playOnAwake = !!i7623[4]
  i7622.loop = !!i7623[5]
  i7622.time = i7623[6]
  i7622.volume = i7623[7]
  i7622.pitch = i7623[8]
  i7622.enabled = !!i7623[9]
  return i7622
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i7624 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i7625 = data
  i7624.planeDistance = i7625[0]
  i7624.referencePixelsPerUnit = i7625[1]
  i7624.isFallbackOverlay = !!i7625[2]
  i7624.renderMode = i7625[3]
  i7624.renderOrder = i7625[4]
  i7624.sortingLayerName = i7625[5]
  i7624.sortingOrder = i7625[6]
  i7624.scaleFactor = i7625[7]
  request.r(i7625[8], i7625[9], 0, i7624, 'worldCamera')
  i7624.overrideSorting = !!i7625[10]
  i7624.pixelPerfect = !!i7625[11]
  i7624.targetDisplay = i7625[12]
  i7624.overridePixelPerfect = !!i7625[13]
  i7624.enabled = !!i7625[14]
  return i7624
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i7626 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i7627 = data
  i7626.m_UiScaleMode = i7627[0]
  i7626.m_ReferencePixelsPerUnit = i7627[1]
  i7626.m_ScaleFactor = i7627[2]
  i7626.m_ReferenceResolution = new pc.Vec2( i7627[3], i7627[4] )
  i7626.m_ScreenMatchMode = i7627[5]
  i7626.m_MatchWidthOrHeight = i7627[6]
  i7626.m_PhysicalUnit = i7627[7]
  i7626.m_FallbackScreenDPI = i7627[8]
  i7626.m_DefaultSpriteDPI = i7627[9]
  i7626.m_DynamicPixelsPerUnit = i7627[10]
  i7626.m_PresetInfoIsWorld = !!i7627[11]
  return i7626
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i7628 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i7629 = data
  i7628.m_IgnoreReversedGraphics = !!i7629[0]
  i7628.m_BlockingObjects = i7629[1]
  i7628.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i7629[2] )
  return i7628
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i7630 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i7631 = data
  i7630.cullTransparentMesh = !!i7631[0]
  return i7630
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i7632 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i7633 = data
  i7632.m_hasFontAssetChanged = !!i7633[0]
  request.r(i7633[1], i7633[2], 0, i7632, 'm_baseMaterial')
  i7632.m_maskOffset = new pc.Vec4( i7633[3], i7633[4], i7633[5], i7633[6] )
  i7632.m_text = i7633[7]
  i7632.m_isRightToLeft = !!i7633[8]
  request.r(i7633[9], i7633[10], 0, i7632, 'm_fontAsset')
  request.r(i7633[11], i7633[12], 0, i7632, 'm_sharedMaterial')
  var i7635 = i7633[13]
  var i7634 = []
  for(var i = 0; i < i7635.length; i += 2) {
  request.r(i7635[i + 0], i7635[i + 1], 2, i7634, '')
  }
  i7632.m_fontSharedMaterials = i7634
  request.r(i7633[14], i7633[15], 0, i7632, 'm_fontMaterial')
  var i7637 = i7633[16]
  var i7636 = []
  for(var i = 0; i < i7637.length; i += 2) {
  request.r(i7637[i + 0], i7637[i + 1], 2, i7636, '')
  }
  i7632.m_fontMaterials = i7636
  i7632.m_fontColor32 = UnityEngine.Color32.ConstructColor(i7633[17], i7633[18], i7633[19], i7633[20])
  i7632.m_fontColor = new pc.Color(i7633[21], i7633[22], i7633[23], i7633[24])
  i7632.m_enableVertexGradient = !!i7633[25]
  i7632.m_colorMode = i7633[26]
  i7632.m_fontColorGradient = request.d('TMPro.VertexGradient', i7633[27], i7632.m_fontColorGradient)
  request.r(i7633[28], i7633[29], 0, i7632, 'm_fontColorGradientPreset')
  request.r(i7633[30], i7633[31], 0, i7632, 'm_spriteAsset')
  i7632.m_tintAllSprites = !!i7633[32]
  request.r(i7633[33], i7633[34], 0, i7632, 'm_StyleSheet')
  i7632.m_TextStyleHashCode = i7633[35]
  i7632.m_overrideHtmlColors = !!i7633[36]
  i7632.m_faceColor = UnityEngine.Color32.ConstructColor(i7633[37], i7633[38], i7633[39], i7633[40])
  i7632.m_fontSize = i7633[41]
  i7632.m_fontSizeBase = i7633[42]
  i7632.m_fontWeight = i7633[43]
  i7632.m_enableAutoSizing = !!i7633[44]
  i7632.m_fontSizeMin = i7633[45]
  i7632.m_fontSizeMax = i7633[46]
  i7632.m_fontStyle = i7633[47]
  i7632.m_HorizontalAlignment = i7633[48]
  i7632.m_VerticalAlignment = i7633[49]
  i7632.m_textAlignment = i7633[50]
  i7632.m_characterSpacing = i7633[51]
  i7632.m_wordSpacing = i7633[52]
  i7632.m_lineSpacing = i7633[53]
  i7632.m_lineSpacingMax = i7633[54]
  i7632.m_paragraphSpacing = i7633[55]
  i7632.m_charWidthMaxAdj = i7633[56]
  i7632.m_TextWrappingMode = i7633[57]
  i7632.m_wordWrappingRatios = i7633[58]
  i7632.m_overflowMode = i7633[59]
  request.r(i7633[60], i7633[61], 0, i7632, 'm_linkedTextComponent')
  request.r(i7633[62], i7633[63], 0, i7632, 'parentLinkedComponent')
  i7632.m_enableKerning = !!i7633[64]
  var i7639 = i7633[65]
  var i7638 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i7639.length; i += 1) {
    i7638.add(i7639[i + 0]);
  }
  i7632.m_ActiveFontFeatures = i7638
  i7632.m_enableExtraPadding = !!i7633[66]
  i7632.checkPaddingRequired = !!i7633[67]
  i7632.m_isRichText = !!i7633[68]
  i7632.m_parseCtrlCharacters = !!i7633[69]
  i7632.m_isOrthographic = !!i7633[70]
  i7632.m_isCullingEnabled = !!i7633[71]
  i7632.m_horizontalMapping = i7633[72]
  i7632.m_verticalMapping = i7633[73]
  i7632.m_uvLineOffset = i7633[74]
  i7632.m_geometrySortingOrder = i7633[75]
  i7632.m_IsTextObjectScaleStatic = !!i7633[76]
  i7632.m_VertexBufferAutoSizeReduction = !!i7633[77]
  i7632.m_useMaxVisibleDescender = !!i7633[78]
  i7632.m_pageToDisplay = i7633[79]
  i7632.m_margin = new pc.Vec4( i7633[80], i7633[81], i7633[82], i7633[83] )
  i7632.m_isUsingLegacyAnimationComponent = !!i7633[84]
  i7632.m_isVolumetricText = !!i7633[85]
  request.r(i7633[86], i7633[87], 0, i7632, 'm_Material')
  i7632.m_EmojiFallbackSupport = !!i7633[88]
  i7632.m_Maskable = !!i7633[89]
  i7632.m_Color = new pc.Color(i7633[90], i7633[91], i7633[92], i7633[93])
  i7632.m_RaycastTarget = !!i7633[94]
  i7632.m_RaycastPadding = new pc.Vec4( i7633[95], i7633[96], i7633[97], i7633[98] )
  return i7632
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i7640 = root || request.c( 'UnityEngine.UI.Image' )
  var i7641 = data
  request.r(i7641[0], i7641[1], 0, i7640, 'm_Sprite')
  i7640.m_Type = i7641[2]
  i7640.m_PreserveAspect = !!i7641[3]
  i7640.m_FillCenter = !!i7641[4]
  i7640.m_FillMethod = i7641[5]
  i7640.m_FillAmount = i7641[6]
  i7640.m_FillClockwise = !!i7641[7]
  i7640.m_FillOrigin = i7641[8]
  i7640.m_UseSpriteMesh = !!i7641[9]
  i7640.m_PixelsPerUnitMultiplier = i7641[10]
  request.r(i7641[11], i7641[12], 0, i7640, 'm_Material')
  i7640.m_Maskable = !!i7641[13]
  i7640.m_Color = new pc.Color(i7641[14], i7641[15], i7641[16], i7641[17])
  i7640.m_RaycastTarget = !!i7641[18]
  i7640.m_RaycastPadding = new pc.Vec4( i7641[19], i7641[20], i7641[21], i7641[22] )
  return i7640
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i7642 = root || request.c( 'UnityEngine.UI.Button' )
  var i7643 = data
  i7642.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i7643[0], i7642.m_OnClick)
  i7642.m_Navigation = request.d('UnityEngine.UI.Navigation', i7643[1], i7642.m_Navigation)
  i7642.m_Transition = i7643[2]
  i7642.m_Colors = request.d('UnityEngine.UI.ColorBlock', i7643[3], i7642.m_Colors)
  i7642.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i7643[4], i7642.m_SpriteState)
  i7642.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i7643[5], i7642.m_AnimationTriggers)
  i7642.m_Interactable = !!i7643[6]
  request.r(i7643[7], i7643[8], 0, i7642, 'm_TargetGraphic')
  return i7642
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i7644 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i7645 = data
  i7644.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i7645[0], i7644.m_PersistentCalls)
  return i7644
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i7646 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i7647 = data
  var i7649 = i7647[0]
  var i7648 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i7649.length; i += 1) {
    i7648.add(request.d('UnityEngine.Events.PersistentCall', i7649[i + 0]));
  }
  i7646.m_Calls = i7648
  return i7646
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i7652 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i7653 = data
  request.r(i7653[0], i7653[1], 0, i7652, 'm_Target')
  i7652.m_TargetAssemblyTypeName = i7653[2]
  i7652.m_MethodName = i7653[3]
  i7652.m_Mode = i7653[4]
  i7652.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i7653[5], i7652.m_Arguments)
  i7652.m_CallState = i7653[6]
  return i7652
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i7654 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i7655 = data
  request.r(i7655[0], i7655[1], 0, i7654, 'm_ObjectArgument')
  i7654.m_ObjectArgumentAssemblyTypeName = i7655[2]
  i7654.m_IntArgument = i7655[3]
  i7654.m_FloatArgument = i7655[4]
  i7654.m_StringArgument = i7655[5]
  i7654.m_BoolArgument = !!i7655[6]
  return i7654
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i7656 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i7657 = data
  i7656.m_Mode = i7657[0]
  i7656.m_WrapAround = !!i7657[1]
  request.r(i7657[2], i7657[3], 0, i7656, 'm_SelectOnUp')
  request.r(i7657[4], i7657[5], 0, i7656, 'm_SelectOnDown')
  request.r(i7657[6], i7657[7], 0, i7656, 'm_SelectOnLeft')
  request.r(i7657[8], i7657[9], 0, i7656, 'm_SelectOnRight')
  return i7656
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i7658 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i7659 = data
  i7658.m_NormalColor = new pc.Color(i7659[0], i7659[1], i7659[2], i7659[3])
  i7658.m_HighlightedColor = new pc.Color(i7659[4], i7659[5], i7659[6], i7659[7])
  i7658.m_PressedColor = new pc.Color(i7659[8], i7659[9], i7659[10], i7659[11])
  i7658.m_SelectedColor = new pc.Color(i7659[12], i7659[13], i7659[14], i7659[15])
  i7658.m_DisabledColor = new pc.Color(i7659[16], i7659[17], i7659[18], i7659[19])
  i7658.m_ColorMultiplier = i7659[20]
  i7658.m_FadeDuration = i7659[21]
  return i7658
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i7660 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i7661 = data
  request.r(i7661[0], i7661[1], 0, i7660, 'm_HighlightedSprite')
  request.r(i7661[2], i7661[3], 0, i7660, 'm_PressedSprite')
  request.r(i7661[4], i7661[5], 0, i7660, 'm_SelectedSprite')
  request.r(i7661[6], i7661[7], 0, i7660, 'm_DisabledSprite')
  return i7660
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i7662 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i7663 = data
  i7662.m_NormalTrigger = i7663[0]
  i7662.m_HighlightedTrigger = i7663[1]
  i7662.m_PressedTrigger = i7663[2]
  i7662.m_SelectedTrigger = i7663[3]
  i7662.m_DisabledTrigger = i7663[4]
  return i7662
}

Deserializers["ScreenHeightPositionAnchor"] = function (request, data, root) {
  var i7664 = root || request.c( 'ScreenHeightPositionAnchor' )
  var i7665 = data
  request.r(i7665[0], i7665[1], 0, i7664, 'anchorPoint')
  request.r(i7665[2], i7665[3], 0, i7664, 'targetCamera')
  i7664.viewportYRatio = i7665[4]
  i7664.alignOnStart = !!i7665[5]
  i7664.alignOnEnable = !!i7665[6]
  i7664.realignOnScreenSizeChanged = !!i7665[7]
  i7664.drawGizmos = !!i7665[8]
  i7664.targetLineColor = new pc.Color(i7665[9], i7665[10], i7665[11], i7665[12])
  i7664.anchorColor = new pc.Color(i7665[13], i7665[14], i7665[15], i7665[16])
  return i7664
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D"] = function (request, data, root) {
  var i7666 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D' )
  var i7667 = data
  i7666.usedByComposite = !!i7667[0]
  i7666.autoTiling = !!i7667[1]
  var i7669 = i7667[2]
  var i7668 = []
  for(var i = 0; i < i7669.length; i += 1) {
  var i7671 = i7669[i + 0]
  var i7670 = []
  for(var i = 0; i < i7671.length; i += 2) {
    i7670.push( new pc.Vec2( i7671[i + 0], i7671[i + 1] ) );
  }
    i7668.push( i7670 );
  }
  i7666.points = i7668
  i7666.enabled = !!i7667[3]
  i7666.isTrigger = !!i7667[4]
  i7666.usedByEffector = !!i7667[5]
  i7666.density = i7667[6]
  i7666.offset = new pc.Vec2( i7667[7], i7667[8] )
  request.r(i7667[9], i7667[10], 0, i7666, 'material')
  return i7666
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i7678 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i7679 = data
  i7678.usedByComposite = !!i7679[0]
  i7678.autoTiling = !!i7679[1]
  i7678.size = new pc.Vec2( i7679[2], i7679[3] )
  i7678.edgeRadius = i7679[4]
  i7678.enabled = !!i7679[5]
  i7678.isTrigger = !!i7679[6]
  i7678.usedByEffector = !!i7679[7]
  i7678.density = i7679[8]
  i7678.offset = new pc.Vec2( i7679[9], i7679[10] )
  request.r(i7679[11], i7679[12], 0, i7678, 'material')
  return i7678
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i7680 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i7681 = data
  i7680.bodyType = i7681[0]
  request.r(i7681[1], i7681[2], 0, i7680, 'material')
  i7680.simulated = !!i7681[3]
  i7680.useAutoMass = !!i7681[4]
  i7680.mass = i7681[5]
  i7680.drag = i7681[6]
  i7680.angularDrag = i7681[7]
  i7680.gravityScale = i7681[8]
  i7680.collisionDetectionMode = i7681[9]
  i7680.sleepMode = i7681[10]
  i7680.constraints = i7681[11]
  return i7680
}

Deserializers["BatStrikeController"] = function (request, data, root) {
  var i7682 = root || request.c( 'BatStrikeController' )
  var i7683 = data
  i7682.pullSpeed = i7683[0]
  i7682.maxPullDistance = i7683[1]
  i7682.minHoldTime = i7683[2]
  i7682.strikeForce = i7683[3]
  i7682.targetTag = i7683[4]
  return i7682
}

Deserializers["CupCollision"] = function (request, data, root) {
  var i7684 = root || request.c( 'CupCollision' )
  var i7685 = data
  i7684.baseTag = i7685[0]
  request.r(i7685[1], i7685[2], 0, i7684, 'objectToActivate')
  return i7684
}

Deserializers["SlotTrigger"] = function (request, data, root) {
  var i7686 = root || request.c( 'SlotTrigger' )
  var i7687 = data
  request.r(i7687[0], i7687[1], 0, i7686, 'cardData')
  i7686.targetTag = i7687[2]
  request.r(i7687[3], i7687[4], 0, i7686, 'yAnchor')
  i7686.moveSpeed = i7687[5]
  request.r(i7687[6], i7687[7], 0, i7686, 'objectToMoveDown')
  i7686.targetScreenYRatio = i7687[8]
  return i7686
}

Deserializers["HideOnFirstClick"] = function (request, data, root) {
  var i7688 = root || request.c( 'HideOnFirstClick' )
  var i7689 = data
  request.r(i7689[0], i7689[1], 0, i7688, 'objectToHide')
  return i7688
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i7690 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i7691 = data
  request.r(i7691[0], i7691[1], 0, i7690, 'm_FirstSelected')
  i7690.m_sendNavigationEvents = !!i7691[2]
  i7690.m_DragThreshold = i7691[3]
  return i7690
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i7692 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i7693 = data
  i7692.m_HorizontalAxis = i7693[0]
  i7692.m_VerticalAxis = i7693[1]
  i7692.m_SubmitButton = i7693[2]
  i7692.m_CancelButton = i7693[3]
  i7692.m_InputActionsPerSecond = i7693[4]
  i7692.m_RepeatDelay = i7693[5]
  i7692.m_ForceModuleActive = !!i7693[6]
  i7692.m_SendPointerHoverToParent = !!i7693[7]
  return i7692
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i7694 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i7695 = data
  i7694.ambientIntensity = i7695[0]
  i7694.reflectionIntensity = i7695[1]
  i7694.ambientMode = i7695[2]
  i7694.ambientLight = new pc.Color(i7695[3], i7695[4], i7695[5], i7695[6])
  i7694.ambientSkyColor = new pc.Color(i7695[7], i7695[8], i7695[9], i7695[10])
  i7694.ambientGroundColor = new pc.Color(i7695[11], i7695[12], i7695[13], i7695[14])
  i7694.ambientEquatorColor = new pc.Color(i7695[15], i7695[16], i7695[17], i7695[18])
  i7694.fogColor = new pc.Color(i7695[19], i7695[20], i7695[21], i7695[22])
  i7694.fogEndDistance = i7695[23]
  i7694.fogStartDistance = i7695[24]
  i7694.fogDensity = i7695[25]
  i7694.fog = !!i7695[26]
  request.r(i7695[27], i7695[28], 0, i7694, 'skybox')
  i7694.fogMode = i7695[29]
  var i7697 = i7695[30]
  var i7696 = []
  for(var i = 0; i < i7697.length; i += 1) {
    i7696.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i7697[i + 0]) );
  }
  i7694.lightmaps = i7696
  i7694.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i7695[31], i7694.lightProbes)
  i7694.lightmapsMode = i7695[32]
  i7694.mixedBakeMode = i7695[33]
  i7694.environmentLightingMode = i7695[34]
  i7694.ambientProbe = new pc.SphericalHarmonicsL2(i7695[35])
  i7694.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i7695[36])
  i7694.useReferenceAmbientProbe = !!i7695[37]
  request.r(i7695[38], i7695[39], 0, i7694, 'customReflection')
  request.r(i7695[40], i7695[41], 0, i7694, 'defaultReflection')
  i7694.defaultReflectionMode = i7695[42]
  i7694.defaultReflectionResolution = i7695[43]
  i7694.sunLightObjectId = i7695[44]
  i7694.pixelLightCount = i7695[45]
  i7694.defaultReflectionHDR = !!i7695[46]
  i7694.hasLightDataAsset = !!i7695[47]
  i7694.hasManualGenerate = !!i7695[48]
  return i7694
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i7700 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i7701 = data
  request.r(i7701[0], i7701[1], 0, i7700, 'lightmapColor')
  request.r(i7701[2], i7701[3], 0, i7700, 'lightmapDirection')
  request.r(i7701[4], i7701[5], 0, i7700, 'shadowMask')
  return i7700
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i7702 = root || new UnityEngine.LightProbes()
  var i7703 = data
  return i7702
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.PhysicsMaterial2D"] = function (request, data, root) {
  var i7710 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.PhysicsMaterial2D' )
  var i7711 = data
  i7710.name = i7711[0]
  i7710.bounciness = i7711[1]
  i7710.friction = i7711[2]
  return i7710
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i7712 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i7713 = data
  var i7715 = i7713[0]
  var i7714 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i7715.length; i += 1) {
    i7714.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i7715[i + 0]));
  }
  i7712.ShaderCompilationErrors = i7714
  i7712.name = i7713[1]
  i7712.guid = i7713[2]
  var i7717 = i7713[3]
  var i7716 = []
  for(var i = 0; i < i7717.length; i += 1) {
    i7716.push( i7717[i + 0] );
  }
  i7712.shaderDefinedKeywords = i7716
  var i7719 = i7713[4]
  var i7718 = []
  for(var i = 0; i < i7719.length; i += 1) {
    i7718.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i7719[i + 0]) );
  }
  i7712.passes = i7718
  var i7721 = i7713[5]
  var i7720 = []
  for(var i = 0; i < i7721.length; i += 1) {
    i7720.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i7721[i + 0]) );
  }
  i7712.usePasses = i7720
  var i7723 = i7713[6]
  var i7722 = []
  for(var i = 0; i < i7723.length; i += 1) {
    i7722.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i7723[i + 0]) );
  }
  i7712.defaultParameterValues = i7722
  request.r(i7713[7], i7713[8], 0, i7712, 'unityFallbackShader')
  i7712.readDepth = !!i7713[9]
  i7712.hasDepthOnlyPass = !!i7713[10]
  i7712.isCreatedByShaderGraph = !!i7713[11]
  i7712.disableBatching = !!i7713[12]
  i7712.compiled = !!i7713[13]
  return i7712
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i7726 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i7727 = data
  i7726.shaderName = i7727[0]
  i7726.errorMessage = i7727[1]
  return i7726
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i7732 = root || new pc.UnityShaderPass()
  var i7733 = data
  i7732.id = i7733[0]
  i7732.subShaderIndex = i7733[1]
  i7732.name = i7733[2]
  i7732.passType = i7733[3]
  i7732.grabPassTextureName = i7733[4]
  i7732.usePass = !!i7733[5]
  i7732.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7733[6], i7732.zTest)
  i7732.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7733[7], i7732.zWrite)
  i7732.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7733[8], i7732.culling)
  i7732.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i7733[9], i7732.blending)
  i7732.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i7733[10], i7732.alphaBlending)
  i7732.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7733[11], i7732.colorWriteMask)
  i7732.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7733[12], i7732.offsetUnits)
  i7732.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7733[13], i7732.offsetFactor)
  i7732.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7733[14], i7732.stencilRef)
  i7732.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7733[15], i7732.stencilReadMask)
  i7732.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7733[16], i7732.stencilWriteMask)
  i7732.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i7733[17], i7732.stencilOp)
  i7732.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i7733[18], i7732.stencilOpFront)
  i7732.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i7733[19], i7732.stencilOpBack)
  var i7735 = i7733[20]
  var i7734 = []
  for(var i = 0; i < i7735.length; i += 1) {
    i7734.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i7735[i + 0]) );
  }
  i7732.tags = i7734
  var i7737 = i7733[21]
  var i7736 = []
  for(var i = 0; i < i7737.length; i += 1) {
    i7736.push( i7737[i + 0] );
  }
  i7732.passDefinedKeywords = i7736
  var i7739 = i7733[22]
  var i7738 = []
  for(var i = 0; i < i7739.length; i += 1) {
    i7738.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i7739[i + 0]) );
  }
  i7732.passDefinedKeywordGroups = i7738
  var i7741 = i7733[23]
  var i7740 = []
  for(var i = 0; i < i7741.length; i += 1) {
    i7740.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i7741[i + 0]) );
  }
  i7732.variants = i7740
  var i7743 = i7733[24]
  var i7742 = []
  for(var i = 0; i < i7743.length; i += 1) {
    i7742.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i7743[i + 0]) );
  }
  i7732.excludedVariants = i7742
  i7732.hasDepthReader = !!i7733[25]
  return i7732
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i7744 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i7745 = data
  i7744.val = i7745[0]
  i7744.name = i7745[1]
  return i7744
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i7746 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i7747 = data
  i7746.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7747[0], i7746.src)
  i7746.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7747[1], i7746.dst)
  i7746.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7747[2], i7746.op)
  return i7746
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i7748 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i7749 = data
  i7748.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7749[0], i7748.pass)
  i7748.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7749[1], i7748.fail)
  i7748.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7749[2], i7748.zFail)
  i7748.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7749[3], i7748.comp)
  return i7748
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i7752 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i7753 = data
  i7752.name = i7753[0]
  i7752.value = i7753[1]
  return i7752
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i7756 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i7757 = data
  var i7759 = i7757[0]
  var i7758 = []
  for(var i = 0; i < i7759.length; i += 1) {
    i7758.push( i7759[i + 0] );
  }
  i7756.keywords = i7758
  i7756.hasDiscard = !!i7757[1]
  return i7756
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i7762 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i7763 = data
  i7762.passId = i7763[0]
  i7762.subShaderIndex = i7763[1]
  var i7765 = i7763[2]
  var i7764 = []
  for(var i = 0; i < i7765.length; i += 1) {
    i7764.push( i7765[i + 0] );
  }
  i7762.keywords = i7764
  i7762.vertexProgram = i7763[3]
  i7762.fragmentProgram = i7763[4]
  i7762.exportedForWebGl2 = !!i7763[5]
  i7762.readDepth = !!i7763[6]
  return i7762
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i7768 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i7769 = data
  request.r(i7769[0], i7769[1], 0, i7768, 'shader')
  i7768.pass = i7769[2]
  return i7768
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i7772 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i7773 = data
  i7772.name = i7773[0]
  i7772.type = i7773[1]
  i7772.value = new pc.Vec4( i7773[2], i7773[3], i7773[4], i7773[5] )
  i7772.textureValue = i7773[6]
  i7772.shaderPropertyFlag = i7773[7]
  return i7772
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i7774 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i7775 = data
  i7774.name = i7775[0]
  request.r(i7775[1], i7775[2], 0, i7774, 'texture')
  i7774.aabb = i7775[3]
  i7774.vertices = i7775[4]
  i7774.triangles = i7775[5]
  i7774.textureRect = UnityEngine.Rect.MinMaxRect(i7775[6], i7775[7], i7775[8], i7775[9])
  i7774.packedRect = UnityEngine.Rect.MinMaxRect(i7775[10], i7775[11], i7775[12], i7775[13])
  i7774.border = new pc.Vec4( i7775[14], i7775[15], i7775[16], i7775[17] )
  i7774.transparency = i7775[18]
  i7774.bounds = i7775[19]
  i7774.pixelsPerUnit = i7775[20]
  i7774.textureWidth = i7775[21]
  i7774.textureHeight = i7775[22]
  i7774.nativeSize = new pc.Vec2( i7775[23], i7775[24] )
  i7774.pivot = new pc.Vec2( i7775[25], i7775[26] )
  i7774.textureRectOffset = new pc.Vec2( i7775[27], i7775[28] )
  return i7774
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i7776 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i7777 = data
  i7776.name = i7777[0]
  return i7776
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i7778 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i7779 = data
  i7778.name = i7779[0]
  i7778.wrapMode = i7779[1]
  i7778.isLooping = !!i7779[2]
  i7778.length = i7779[3]
  var i7781 = i7779[4]
  var i7780 = []
  for(var i = 0; i < i7781.length; i += 1) {
    i7780.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i7781[i + 0]) );
  }
  i7778.curves = i7780
  var i7783 = i7779[5]
  var i7782 = []
  for(var i = 0; i < i7783.length; i += 1) {
    i7782.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i7783[i + 0]) );
  }
  i7778.events = i7782
  i7778.halfPrecision = !!i7779[6]
  i7778._frameRate = i7779[7]
  i7778.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i7779[8], i7778.localBounds)
  i7778.hasMuscleCurves = !!i7779[9]
  var i7785 = i7779[10]
  var i7784 = []
  for(var i = 0; i < i7785.length; i += 1) {
    i7784.push( i7785[i + 0] );
  }
  i7778.clipMuscleConstant = i7784
  i7778.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i7779[11], i7778.clipBindingConstant)
  return i7778
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i7788 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i7789 = data
  i7788.path = i7789[0]
  i7788.hash = i7789[1]
  i7788.componentType = i7789[2]
  i7788.property = i7789[3]
  i7788.keys = i7789[4]
  var i7791 = i7789[5]
  var i7790 = []
  for(var i = 0; i < i7791.length; i += 1) {
    i7790.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i7791[i + 0]) );
  }
  i7788.objectReferenceKeys = i7790
  return i7788
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i7794 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i7795 = data
  i7794.time = i7795[0]
  request.r(i7795[1], i7795[2], 0, i7794, 'value')
  return i7794
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i7798 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i7799 = data
  i7798.functionName = i7799[0]
  i7798.floatParameter = i7799[1]
  i7798.intParameter = i7799[2]
  i7798.stringParameter = i7799[3]
  request.r(i7799[4], i7799[5], 0, i7798, 'objectReferenceParameter')
  i7798.time = i7799[6]
  return i7798
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i7800 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i7801 = data
  i7800.center = new pc.Vec3( i7801[0], i7801[1], i7801[2] )
  i7800.extends = new pc.Vec3( i7801[3], i7801[4], i7801[5] )
  return i7800
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i7804 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i7805 = data
  var i7807 = i7805[0]
  var i7806 = []
  for(var i = 0; i < i7807.length; i += 1) {
    i7806.push( i7807[i + 0] );
  }
  i7804.genericBindings = i7806
  var i7809 = i7805[1]
  var i7808 = []
  for(var i = 0; i < i7809.length; i += 1) {
    i7808.push( i7809[i + 0] );
  }
  i7804.pptrCurveMapping = i7808
  return i7804
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i7810 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i7811 = data
  i7810.name = i7811[0]
  i7810.ascent = i7811[1]
  i7810.originalLineHeight = i7811[2]
  i7810.fontSize = i7811[3]
  var i7813 = i7811[4]
  var i7812 = []
  for(var i = 0; i < i7813.length; i += 1) {
    i7812.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i7813[i + 0]) );
  }
  i7810.characterInfo = i7812
  request.r(i7811[5], i7811[6], 0, i7810, 'texture')
  i7810.originalFontSize = i7811[7]
  return i7810
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i7816 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i7817 = data
  i7816.index = i7817[0]
  i7816.advance = i7817[1]
  i7816.bearing = i7817[2]
  i7816.glyphWidth = i7817[3]
  i7816.glyphHeight = i7817[4]
  i7816.minX = i7817[5]
  i7816.maxX = i7817[6]
  i7816.minY = i7817[7]
  i7816.maxY = i7817[8]
  i7816.uvBottomLeftX = i7817[9]
  i7816.uvBottomLeftY = i7817[10]
  i7816.uvBottomRightX = i7817[11]
  i7816.uvBottomRightY = i7817[12]
  i7816.uvTopLeftX = i7817[13]
  i7816.uvTopLeftY = i7817[14]
  i7816.uvTopRightX = i7817[15]
  i7816.uvTopRightY = i7817[16]
  return i7816
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i7818 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i7819 = data
  i7818.name = i7819[0]
  var i7821 = i7819[1]
  var i7820 = []
  for(var i = 0; i < i7821.length; i += 1) {
    i7820.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i7821[i + 0]) );
  }
  i7818.layers = i7820
  var i7823 = i7819[2]
  var i7822 = []
  for(var i = 0; i < i7823.length; i += 1) {
    i7822.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i7823[i + 0]) );
  }
  i7818.parameters = i7822
  i7818.animationClips = i7819[3]
  i7818.avatarUnsupported = i7819[4]
  return i7818
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i7826 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i7827 = data
  i7826.name = i7827[0]
  i7826.defaultWeight = i7827[1]
  i7826.blendingMode = i7827[2]
  i7826.avatarMask = i7827[3]
  i7826.syncedLayerIndex = i7827[4]
  i7826.syncedLayerAffectsTiming = !!i7827[5]
  i7826.syncedLayers = i7827[6]
  i7826.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i7827[7], i7826.stateMachine)
  return i7826
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i7828 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i7829 = data
  i7828.id = i7829[0]
  i7828.name = i7829[1]
  i7828.path = i7829[2]
  var i7831 = i7829[3]
  var i7830 = []
  for(var i = 0; i < i7831.length; i += 1) {
    i7830.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i7831[i + 0]) );
  }
  i7828.states = i7830
  var i7833 = i7829[4]
  var i7832 = []
  for(var i = 0; i < i7833.length; i += 1) {
    i7832.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i7833[i + 0]) );
  }
  i7828.machines = i7832
  var i7835 = i7829[5]
  var i7834 = []
  for(var i = 0; i < i7835.length; i += 1) {
    i7834.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i7835[i + 0]) );
  }
  i7828.entryStateTransitions = i7834
  var i7837 = i7829[6]
  var i7836 = []
  for(var i = 0; i < i7837.length; i += 1) {
    i7836.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i7837[i + 0]) );
  }
  i7828.exitStateTransitions = i7836
  var i7839 = i7829[7]
  var i7838 = []
  for(var i = 0; i < i7839.length; i += 1) {
    i7838.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i7839[i + 0]) );
  }
  i7828.anyStateTransitions = i7838
  i7828.defaultStateId = i7829[8]
  return i7828
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i7842 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i7843 = data
  i7842.id = i7843[0]
  i7842.name = i7843[1]
  i7842.cycleOffset = i7843[2]
  i7842.cycleOffsetParameter = i7843[3]
  i7842.cycleOffsetParameterActive = !!i7843[4]
  i7842.mirror = !!i7843[5]
  i7842.mirrorParameter = i7843[6]
  i7842.mirrorParameterActive = !!i7843[7]
  i7842.motionId = i7843[8]
  i7842.nameHash = i7843[9]
  i7842.fullPathHash = i7843[10]
  i7842.speed = i7843[11]
  i7842.speedParameter = i7843[12]
  i7842.speedParameterActive = !!i7843[13]
  i7842.tag = i7843[14]
  i7842.tagHash = i7843[15]
  i7842.writeDefaultValues = !!i7843[16]
  var i7845 = i7843[17]
  var i7844 = []
  for(var i = 0; i < i7845.length; i += 2) {
  request.r(i7845[i + 0], i7845[i + 1], 2, i7844, '')
  }
  i7842.behaviours = i7844
  var i7847 = i7843[18]
  var i7846 = []
  for(var i = 0; i < i7847.length; i += 1) {
    i7846.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i7847[i + 0]) );
  }
  i7842.transitions = i7846
  return i7842
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i7852 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i7853 = data
  i7852.fullPath = i7853[0]
  i7852.canTransitionToSelf = !!i7853[1]
  i7852.duration = i7853[2]
  i7852.exitTime = i7853[3]
  i7852.hasExitTime = !!i7853[4]
  i7852.hasFixedDuration = !!i7853[5]
  i7852.interruptionSource = i7853[6]
  i7852.offset = i7853[7]
  i7852.orderedInterruption = !!i7853[8]
  i7852.destinationStateId = i7853[9]
  i7852.isExit = !!i7853[10]
  i7852.mute = !!i7853[11]
  i7852.solo = !!i7853[12]
  var i7855 = i7853[13]
  var i7854 = []
  for(var i = 0; i < i7855.length; i += 1) {
    i7854.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i7855[i + 0]) );
  }
  i7852.conditions = i7854
  return i7852
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i7860 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i7861 = data
  i7860.destinationStateId = i7861[0]
  i7860.isExit = !!i7861[1]
  i7860.mute = !!i7861[2]
  i7860.solo = !!i7861[3]
  var i7863 = i7861[4]
  var i7862 = []
  for(var i = 0; i < i7863.length; i += 1) {
    i7862.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i7863[i + 0]) );
  }
  i7860.conditions = i7862
  return i7860
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i7866 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i7867 = data
  i7866.defaultBool = !!i7867[0]
  i7866.defaultFloat = i7867[1]
  i7866.defaultInt = i7867[2]
  i7866.name = i7867[3]
  i7866.nameHash = i7867[4]
  i7866.type = i7867[5]
  return i7866
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i7868 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i7869 = data
  i7868.name = i7869[0]
  i7868.bytes64 = i7869[1]
  i7868.data = i7869[2]
  return i7868
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i7870 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i7871 = data
  i7870.normalStyle = i7871[0]
  i7870.normalSpacingOffset = i7871[1]
  i7870.boldStyle = i7871[2]
  i7870.boldSpacing = i7871[3]
  i7870.italicStyle = i7871[4]
  i7870.tabSize = i7871[5]
  request.r(i7871[6], i7871[7], 0, i7870, 'atlas')
  i7870.m_SourceFontFileGUID = i7871[8]
  i7870.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i7871[9], i7870.m_CreationSettings)
  request.r(i7871[10], i7871[11], 0, i7870, 'm_SourceFontFile')
  i7870.m_SourceFontFilePath = i7871[12]
  i7870.m_AtlasPopulationMode = i7871[13]
  i7870.InternalDynamicOS = !!i7871[14]
  var i7873 = i7871[15]
  var i7872 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i7873.length; i += 1) {
    i7872.add(request.d('UnityEngine.TextCore.Glyph', i7873[i + 0]));
  }
  i7870.m_GlyphTable = i7872
  var i7875 = i7871[16]
  var i7874 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i7875.length; i += 1) {
    i7874.add(request.d('TMPro.TMP_Character', i7875[i + 0]));
  }
  i7870.m_CharacterTable = i7874
  var i7877 = i7871[17]
  var i7876 = []
  for(var i = 0; i < i7877.length; i += 2) {
  request.r(i7877[i + 0], i7877[i + 1], 2, i7876, '')
  }
  i7870.m_AtlasTextures = i7876
  i7870.m_AtlasTextureIndex = i7871[18]
  i7870.m_IsMultiAtlasTexturesEnabled = !!i7871[19]
  i7870.m_GetFontFeatures = !!i7871[20]
  i7870.m_ClearDynamicDataOnBuild = !!i7871[21]
  i7870.m_AtlasWidth = i7871[22]
  i7870.m_AtlasHeight = i7871[23]
  i7870.m_AtlasPadding = i7871[24]
  i7870.m_AtlasRenderMode = i7871[25]
  var i7879 = i7871[26]
  var i7878 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i7879.length; i += 1) {
    i7878.add(request.d('UnityEngine.TextCore.GlyphRect', i7879[i + 0]));
  }
  i7870.m_UsedGlyphRects = i7878
  var i7881 = i7871[27]
  var i7880 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i7881.length; i += 1) {
    i7880.add(request.d('UnityEngine.TextCore.GlyphRect', i7881[i + 0]));
  }
  i7870.m_FreeGlyphRects = i7880
  i7870.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i7871[28], i7870.m_FontFeatureTable)
  i7870.m_ShouldReimportFontFeatures = !!i7871[29]
  var i7883 = i7871[30]
  var i7882 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i7883.length; i += 2) {
  request.r(i7883[i + 0], i7883[i + 1], 1, i7882, '')
  }
  i7870.m_FallbackFontAssetTable = i7882
  var i7885 = i7871[31]
  var i7884 = []
  for(var i = 0; i < i7885.length; i += 1) {
    i7884.push( request.d('TMPro.TMP_FontWeightPair', i7885[i + 0]) );
  }
  i7870.m_FontWeightTable = i7884
  var i7887 = i7871[32]
  var i7886 = []
  for(var i = 0; i < i7887.length; i += 1) {
    i7886.push( request.d('TMPro.TMP_FontWeightPair', i7887[i + 0]) );
  }
  i7870.fontWeights = i7886
  i7870.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i7871[33], i7870.m_fontInfo)
  var i7889 = i7871[34]
  var i7888 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i7889.length; i += 1) {
    i7888.add(request.d('TMPro.TMP_Glyph', i7889[i + 0]));
  }
  i7870.m_glyphInfoList = i7888
  i7870.m_KerningTable = request.d('TMPro.KerningTable', i7871[35], i7870.m_KerningTable)
  var i7891 = i7871[36]
  var i7890 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i7891.length; i += 2) {
  request.r(i7891[i + 0], i7891[i + 1], 1, i7890, '')
  }
  i7870.fallbackFontAssets = i7890
  i7870.m_Version = i7871[37]
  i7870.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i7871[38], i7870.m_FaceInfo)
  request.r(i7871[39], i7871[40], 0, i7870, 'm_Material')
  return i7870
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i7892 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i7893 = data
  i7892.sourceFontFileName = i7893[0]
  i7892.sourceFontFileGUID = i7893[1]
  i7892.faceIndex = i7893[2]
  i7892.pointSizeSamplingMode = i7893[3]
  i7892.pointSize = i7893[4]
  i7892.padding = i7893[5]
  i7892.paddingMode = i7893[6]
  i7892.packingMode = i7893[7]
  i7892.atlasWidth = i7893[8]
  i7892.atlasHeight = i7893[9]
  i7892.characterSetSelectionMode = i7893[10]
  i7892.characterSequence = i7893[11]
  i7892.referencedFontAssetGUID = i7893[12]
  i7892.referencedTextAssetGUID = i7893[13]
  i7892.fontStyle = i7893[14]
  i7892.fontStyleModifier = i7893[15]
  i7892.renderMode = i7893[16]
  i7892.includeFontFeatures = !!i7893[17]
  return i7892
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i7896 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i7897 = data
  i7896.m_Index = i7897[0]
  i7896.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i7897[1], i7896.m_Metrics)
  i7896.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i7897[2], i7896.m_GlyphRect)
  i7896.m_Scale = i7897[3]
  i7896.m_AtlasIndex = i7897[4]
  i7896.m_ClassDefinitionType = i7897[5]
  return i7896
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i7898 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i7899 = data
  i7898.m_Width = i7899[0]
  i7898.m_Height = i7899[1]
  i7898.m_HorizontalBearingX = i7899[2]
  i7898.m_HorizontalBearingY = i7899[3]
  i7898.m_HorizontalAdvance = i7899[4]
  return i7898
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i7900 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i7901 = data
  i7900.m_X = i7901[0]
  i7900.m_Y = i7901[1]
  i7900.m_Width = i7901[2]
  i7900.m_Height = i7901[3]
  return i7900
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i7904 = root || request.c( 'TMPro.TMP_Character' )
  var i7905 = data
  i7904.m_ElementType = i7905[0]
  i7904.m_Unicode = i7905[1]
  i7904.m_GlyphIndex = i7905[2]
  i7904.m_Scale = i7905[3]
  return i7904
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i7910 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i7911 = data
  var i7913 = i7911[0]
  var i7912 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i7913.length; i += 1) {
    i7912.add(request.d('TMPro.MultipleSubstitutionRecord', i7913[i + 0]));
  }
  i7910.m_MultipleSubstitutionRecords = i7912
  var i7915 = i7911[1]
  var i7914 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i7915.length; i += 1) {
    i7914.add(request.d('TMPro.LigatureSubstitutionRecord', i7915[i + 0]));
  }
  i7910.m_LigatureSubstitutionRecords = i7914
  var i7917 = i7911[2]
  var i7916 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i7917.length; i += 1) {
    i7916.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i7917[i + 0]));
  }
  i7910.m_GlyphPairAdjustmentRecords = i7916
  var i7919 = i7911[3]
  var i7918 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i7919.length; i += 1) {
    i7918.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i7919[i + 0]));
  }
  i7910.m_MarkToBaseAdjustmentRecords = i7918
  var i7921 = i7911[4]
  var i7920 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i7921.length; i += 1) {
    i7920.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i7921[i + 0]));
  }
  i7910.m_MarkToMarkAdjustmentRecords = i7920
  return i7910
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i7924 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i7925 = data
  i7924.m_TargetGlyphID = i7925[0]
  i7924.m_SubstituteGlyphIDs = i7925[1]
  return i7924
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i7928 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i7929 = data
  i7928.m_ComponentGlyphIDs = i7929[0]
  i7928.m_LigatureGlyphID = i7929[1]
  return i7928
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i7932 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i7933 = data
  i7932.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i7933[0], i7932.m_FirstAdjustmentRecord)
  i7932.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i7933[1], i7932.m_SecondAdjustmentRecord)
  i7932.m_FeatureLookupFlags = i7933[2]
  return i7932
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i7934 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i7935 = data
  i7934.m_GlyphIndex = i7935[0]
  i7934.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i7935[1], i7934.m_GlyphValueRecord)
  return i7934
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i7936 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i7937 = data
  i7936.m_XPlacement = i7937[0]
  i7936.m_YPlacement = i7937[1]
  i7936.m_XAdvance = i7937[2]
  i7936.m_YAdvance = i7937[3]
  return i7936
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i7940 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i7941 = data
  i7940.m_BaseGlyphID = i7941[0]
  i7940.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i7941[1], i7940.m_BaseGlyphAnchorPoint)
  i7940.m_MarkGlyphID = i7941[2]
  i7940.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i7941[3], i7940.m_MarkPositionAdjustment)
  return i7940
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i7944 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i7945 = data
  i7944.m_BaseMarkGlyphID = i7945[0]
  i7944.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i7945[1], i7944.m_BaseMarkGlyphAnchorPoint)
  i7944.m_CombiningMarkGlyphID = i7945[2]
  i7944.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i7945[3], i7944.m_CombiningMarkPositionAdjustment)
  return i7944
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i7950 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i7951 = data
  request.r(i7951[0], i7951[1], 0, i7950, 'regularTypeface')
  request.r(i7951[2], i7951[3], 0, i7950, 'italicTypeface')
  return i7950
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i7952 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i7953 = data
  i7952.Name = i7953[0]
  i7952.PointSize = i7953[1]
  i7952.Scale = i7953[2]
  i7952.CharacterCount = i7953[3]
  i7952.LineHeight = i7953[4]
  i7952.Baseline = i7953[5]
  i7952.Ascender = i7953[6]
  i7952.CapHeight = i7953[7]
  i7952.Descender = i7953[8]
  i7952.CenterLine = i7953[9]
  i7952.SuperscriptOffset = i7953[10]
  i7952.SubscriptOffset = i7953[11]
  i7952.SubSize = i7953[12]
  i7952.Underline = i7953[13]
  i7952.UnderlineThickness = i7953[14]
  i7952.strikethrough = i7953[15]
  i7952.strikethroughThickness = i7953[16]
  i7952.TabWidth = i7953[17]
  i7952.Padding = i7953[18]
  i7952.AtlasWidth = i7953[19]
  i7952.AtlasHeight = i7953[20]
  return i7952
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i7956 = root || request.c( 'TMPro.TMP_Glyph' )
  var i7957 = data
  i7956.id = i7957[0]
  i7956.x = i7957[1]
  i7956.y = i7957[2]
  i7956.width = i7957[3]
  i7956.height = i7957[4]
  i7956.xOffset = i7957[5]
  i7956.yOffset = i7957[6]
  i7956.xAdvance = i7957[7]
  i7956.scale = i7957[8]
  return i7956
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i7958 = root || request.c( 'TMPro.KerningTable' )
  var i7959 = data
  var i7961 = i7959[0]
  var i7960 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i7961.length; i += 1) {
    i7960.add(request.d('TMPro.KerningPair', i7961[i + 0]));
  }
  i7958.kerningPairs = i7960
  return i7958
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i7964 = root || request.c( 'TMPro.KerningPair' )
  var i7965 = data
  i7964.xOffset = i7965[0]
  i7964.m_FirstGlyph = i7965[1]
  i7964.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i7965[2], i7964.m_FirstGlyphAdjustments)
  i7964.m_SecondGlyph = i7965[3]
  i7964.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i7965[4], i7964.m_SecondGlyphAdjustments)
  i7964.m_IgnoreSpacingAdjustments = !!i7965[5]
  return i7964
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i7966 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i7967 = data
  i7966.m_FaceIndex = i7967[0]
  i7966.m_FamilyName = i7967[1]
  i7966.m_StyleName = i7967[2]
  i7966.m_PointSize = i7967[3]
  i7966.m_Scale = i7967[4]
  i7966.m_UnitsPerEM = i7967[5]
  i7966.m_LineHeight = i7967[6]
  i7966.m_AscentLine = i7967[7]
  i7966.m_CapLine = i7967[8]
  i7966.m_MeanLine = i7967[9]
  i7966.m_Baseline = i7967[10]
  i7966.m_DescentLine = i7967[11]
  i7966.m_SuperscriptOffset = i7967[12]
  i7966.m_SuperscriptSize = i7967[13]
  i7966.m_SubscriptOffset = i7967[14]
  i7966.m_SubscriptSize = i7967[15]
  i7966.m_UnderlineOffset = i7967[16]
  i7966.m_UnderlineThickness = i7967[17]
  i7966.m_StrikethroughOffset = i7967[18]
  i7966.m_StrikethroughThickness = i7967[19]
  i7966.m_TabWidth = i7967[20]
  return i7966
}

Deserializers["PlayerCardData"] = function (request, data, root) {
  var i7968 = root || request.c( 'PlayerCardData' )
  var i7969 = data
  i7968.nationality = i7969[0]
  request.r(i7969[1], i7969[2], 0, i7968, 'playerSprite')
  request.r(i7969[3], i7969[4], 0, i7968, 'flagSprite')
  return i7968
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i7970 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i7971 = data
  i7970.useSafeMode = !!i7971[0]
  i7970.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i7971[1], i7970.safeModeOptions)
  i7970.timeScale = i7971[2]
  i7970.unscaledTimeScale = i7971[3]
  i7970.useSmoothDeltaTime = !!i7971[4]
  i7970.maxSmoothUnscaledTime = i7971[5]
  i7970.rewindCallbackMode = i7971[6]
  i7970.showUnityEditorReport = !!i7971[7]
  i7970.logBehaviour = i7971[8]
  i7970.drawGizmos = !!i7971[9]
  i7970.defaultRecyclable = !!i7971[10]
  i7970.defaultAutoPlay = i7971[11]
  i7970.defaultUpdateType = i7971[12]
  i7970.defaultTimeScaleIndependent = !!i7971[13]
  i7970.defaultEaseType = i7971[14]
  i7970.defaultEaseOvershootOrAmplitude = i7971[15]
  i7970.defaultEasePeriod = i7971[16]
  i7970.defaultAutoKill = !!i7971[17]
  i7970.defaultLoopType = i7971[18]
  i7970.debugMode = !!i7971[19]
  i7970.debugStoreTargetId = !!i7971[20]
  i7970.showPreviewPanel = !!i7971[21]
  i7970.storeSettingsLocation = i7971[22]
  i7970.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i7971[23], i7970.modules)
  i7970.createASMDEF = !!i7971[24]
  i7970.showPlayingTweens = !!i7971[25]
  i7970.showPausedTweens = !!i7971[26]
  return i7970
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i7972 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i7973 = data
  i7972.logBehaviour = i7973[0]
  i7972.nestedTweenFailureBehaviour = i7973[1]
  return i7972
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i7974 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i7975 = data
  i7974.showPanel = !!i7975[0]
  i7974.audioEnabled = !!i7975[1]
  i7974.physicsEnabled = !!i7975[2]
  i7974.physics2DEnabled = !!i7975[3]
  i7974.spriteEnabled = !!i7975[4]
  i7974.uiEnabled = !!i7975[5]
  i7974.uiToolkitEnabled = !!i7975[6]
  i7974.textMeshProEnabled = !!i7975[7]
  i7974.tk2DEnabled = !!i7975[8]
  i7974.deAudioEnabled = !!i7975[9]
  i7974.deUnityExtendedEnabled = !!i7975[10]
  i7974.epoOutlineEnabled = !!i7975[11]
  return i7974
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i7976 = root || request.c( 'TMPro.TMP_Settings' )
  var i7977 = data
  i7976.assetVersion = i7977[0]
  i7976.m_TextWrappingMode = i7977[1]
  i7976.m_enableKerning = !!i7977[2]
  var i7979 = i7977[3]
  var i7978 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i7979.length; i += 1) {
    i7978.add(i7979[i + 0]);
  }
  i7976.m_ActiveFontFeatures = i7978
  i7976.m_enableExtraPadding = !!i7977[4]
  i7976.m_enableTintAllSprites = !!i7977[5]
  i7976.m_enableParseEscapeCharacters = !!i7977[6]
  i7976.m_EnableRaycastTarget = !!i7977[7]
  i7976.m_GetFontFeaturesAtRuntime = !!i7977[8]
  i7976.m_missingGlyphCharacter = i7977[9]
  i7976.m_ClearDynamicDataOnBuild = !!i7977[10]
  i7976.m_warningsDisabled = !!i7977[11]
  request.r(i7977[12], i7977[13], 0, i7976, 'm_defaultFontAsset')
  i7976.m_defaultFontAssetPath = i7977[14]
  i7976.m_defaultFontSize = i7977[15]
  i7976.m_defaultAutoSizeMinRatio = i7977[16]
  i7976.m_defaultAutoSizeMaxRatio = i7977[17]
  i7976.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i7977[18], i7977[19] )
  i7976.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i7977[20], i7977[21] )
  i7976.m_autoSizeTextContainer = !!i7977[22]
  i7976.m_IsTextObjectScaleStatic = !!i7977[23]
  var i7981 = i7977[24]
  var i7980 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i7981.length; i += 2) {
  request.r(i7981[i + 0], i7981[i + 1], 1, i7980, '')
  }
  i7976.m_fallbackFontAssets = i7980
  i7976.m_matchMaterialPreset = !!i7977[25]
  i7976.m_HideSubTextObjects = !!i7977[26]
  request.r(i7977[27], i7977[28], 0, i7976, 'm_defaultSpriteAsset')
  i7976.m_defaultSpriteAssetPath = i7977[29]
  i7976.m_enableEmojiSupport = !!i7977[30]
  i7976.m_MissingCharacterSpriteUnicode = i7977[31]
  var i7983 = i7977[32]
  var i7982 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i7983.length; i += 2) {
  request.r(i7983[i + 0], i7983[i + 1], 1, i7982, '')
  }
  i7976.m_EmojiFallbackTextAssets = i7982
  i7976.m_defaultColorGradientPresetsPath = i7977[33]
  request.r(i7977[34], i7977[35], 0, i7976, 'm_defaultStyleSheet')
  i7976.m_StyleSheetsResourcePath = i7977[36]
  request.r(i7977[37], i7977[38], 0, i7976, 'm_leadingCharacters')
  request.r(i7977[39], i7977[40], 0, i7976, 'm_followingCharacters')
  i7976.m_UseModernHangulLineBreakingRules = !!i7977[41]
  return i7976
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i7986 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i7987 = data
  request.r(i7987[0], i7987[1], 0, i7986, 'spriteSheet')
  var i7989 = i7987[2]
  var i7988 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i7989.length; i += 1) {
    i7988.add(request.d('TMPro.TMP_Sprite', i7989[i + 0]));
  }
  i7986.spriteInfoList = i7988
  var i7991 = i7987[3]
  var i7990 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i7991.length; i += 2) {
  request.r(i7991[i + 0], i7991[i + 1], 1, i7990, '')
  }
  i7986.fallbackSpriteAssets = i7990
  var i7993 = i7987[4]
  var i7992 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i7993.length; i += 1) {
    i7992.add(request.d('TMPro.TMP_SpriteCharacter', i7993[i + 0]));
  }
  i7986.m_SpriteCharacterTable = i7992
  var i7995 = i7987[5]
  var i7994 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i7995.length; i += 1) {
    i7994.add(request.d('TMPro.TMP_SpriteGlyph', i7995[i + 0]));
  }
  i7986.m_GlyphTable = i7994
  i7986.m_Version = i7987[6]
  i7986.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i7987[7], i7986.m_FaceInfo)
  request.r(i7987[8], i7987[9], 0, i7986, 'm_Material')
  return i7986
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i7998 = root || request.c( 'TMPro.TMP_Sprite' )
  var i7999 = data
  i7998.name = i7999[0]
  i7998.hashCode = i7999[1]
  i7998.unicode = i7999[2]
  i7998.pivot = new pc.Vec2( i7999[3], i7999[4] )
  request.r(i7999[5], i7999[6], 0, i7998, 'sprite')
  i7998.id = i7999[7]
  i7998.x = i7999[8]
  i7998.y = i7999[9]
  i7998.width = i7999[10]
  i7998.height = i7999[11]
  i7998.xOffset = i7999[12]
  i7998.yOffset = i7999[13]
  i7998.xAdvance = i7999[14]
  i7998.scale = i7999[15]
  return i7998
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i8004 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i8005 = data
  i8004.m_Name = i8005[0]
  i8004.m_ElementType = i8005[1]
  i8004.m_Unicode = i8005[2]
  i8004.m_GlyphIndex = i8005[3]
  i8004.m_Scale = i8005[4]
  return i8004
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i8008 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i8009 = data
  request.r(i8009[0], i8009[1], 0, i8008, 'sprite')
  i8008.m_Index = i8009[2]
  i8008.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i8009[3], i8008.m_Metrics)
  i8008.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i8009[4], i8008.m_GlyphRect)
  i8008.m_Scale = i8009[5]
  i8008.m_AtlasIndex = i8009[6]
  i8008.m_ClassDefinitionType = i8009[7]
  return i8008
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i8010 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i8011 = data
  var i8013 = i8011[0]
  var i8012 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i8013.length; i += 1) {
    i8012.add(request.d('TMPro.TMP_Style', i8013[i + 0]));
  }
  i8010.m_StyleList = i8012
  return i8010
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i8016 = root || request.c( 'TMPro.TMP_Style' )
  var i8017 = data
  i8016.m_Name = i8017[0]
  i8016.m_HashCode = i8017[1]
  i8016.m_OpeningDefinition = i8017[2]
  i8016.m_ClosingDefinition = i8017[3]
  i8016.m_OpeningTagArray = i8017[4]
  i8016.m_ClosingTagArray = i8017[5]
  return i8016
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i8018 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i8019 = data
  var i8021 = i8019[0]
  var i8020 = []
  for(var i = 0; i < i8021.length; i += 1) {
    i8020.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i8021[i + 0]) );
  }
  i8018.files = i8020
  i8018.componentToPrefabIds = i8019[1]
  return i8018
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i8024 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i8025 = data
  i8024.path = i8025[0]
  request.r(i8025[1], i8025[2], 0, i8024, 'unityObject')
  return i8024
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i8026 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i8027 = data
  var i8029 = i8027[0]
  var i8028 = []
  for(var i = 0; i < i8029.length; i += 1) {
    i8028.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i8029[i + 0]) );
  }
  i8026.scriptsExecutionOrder = i8028
  var i8031 = i8027[1]
  var i8030 = []
  for(var i = 0; i < i8031.length; i += 1) {
    i8030.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i8031[i + 0]) );
  }
  i8026.sortingLayers = i8030
  var i8033 = i8027[2]
  var i8032 = []
  for(var i = 0; i < i8033.length; i += 1) {
    i8032.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i8033[i + 0]) );
  }
  i8026.cullingLayers = i8032
  i8026.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i8027[3], i8026.timeSettings)
  i8026.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i8027[4], i8026.physicsSettings)
  i8026.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i8027[5], i8026.physics2DSettings)
  i8026.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i8027[6], i8026.qualitySettings)
  i8026.enableRealtimeShadows = !!i8027[7]
  i8026.enableAutoInstancing = !!i8027[8]
  i8026.enableStaticBatching = !!i8027[9]
  i8026.enableDynamicBatching = !!i8027[10]
  i8026.lightmapEncodingQuality = i8027[11]
  i8026.desiredColorSpace = i8027[12]
  var i8035 = i8027[13]
  var i8034 = []
  for(var i = 0; i < i8035.length; i += 1) {
    i8034.push( i8035[i + 0] );
  }
  i8026.allTags = i8034
  return i8026
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i8038 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i8039 = data
  i8038.name = i8039[0]
  i8038.value = i8039[1]
  return i8038
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i8042 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i8043 = data
  i8042.id = i8043[0]
  i8042.name = i8043[1]
  i8042.value = i8043[2]
  return i8042
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i8046 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i8047 = data
  i8046.id = i8047[0]
  i8046.name = i8047[1]
  return i8046
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i8048 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i8049 = data
  i8048.fixedDeltaTime = i8049[0]
  i8048.maximumDeltaTime = i8049[1]
  i8048.timeScale = i8049[2]
  i8048.maximumParticleTimestep = i8049[3]
  return i8048
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i8050 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i8051 = data
  i8050.gravity = new pc.Vec3( i8051[0], i8051[1], i8051[2] )
  i8050.defaultSolverIterations = i8051[3]
  i8050.bounceThreshold = i8051[4]
  i8050.autoSyncTransforms = !!i8051[5]
  i8050.autoSimulation = !!i8051[6]
  var i8053 = i8051[7]
  var i8052 = []
  for(var i = 0; i < i8053.length; i += 1) {
    i8052.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i8053[i + 0]) );
  }
  i8050.collisionMatrix = i8052
  return i8050
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i8056 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i8057 = data
  i8056.enabled = !!i8057[0]
  i8056.layerId = i8057[1]
  i8056.otherLayerId = i8057[2]
  return i8056
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i8058 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i8059 = data
  request.r(i8059[0], i8059[1], 0, i8058, 'material')
  i8058.gravity = new pc.Vec2( i8059[2], i8059[3] )
  i8058.positionIterations = i8059[4]
  i8058.velocityIterations = i8059[5]
  i8058.velocityThreshold = i8059[6]
  i8058.maxLinearCorrection = i8059[7]
  i8058.maxAngularCorrection = i8059[8]
  i8058.maxTranslationSpeed = i8059[9]
  i8058.maxRotationSpeed = i8059[10]
  i8058.baumgarteScale = i8059[11]
  i8058.baumgarteTOIScale = i8059[12]
  i8058.timeToSleep = i8059[13]
  i8058.linearSleepTolerance = i8059[14]
  i8058.angularSleepTolerance = i8059[15]
  i8058.defaultContactOffset = i8059[16]
  i8058.autoSimulation = !!i8059[17]
  i8058.queriesHitTriggers = !!i8059[18]
  i8058.queriesStartInColliders = !!i8059[19]
  i8058.callbacksOnDisable = !!i8059[20]
  i8058.reuseCollisionCallbacks = !!i8059[21]
  i8058.autoSyncTransforms = !!i8059[22]
  var i8061 = i8059[23]
  var i8060 = []
  for(var i = 0; i < i8061.length; i += 1) {
    i8060.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i8061[i + 0]) );
  }
  i8058.collisionMatrix = i8060
  return i8058
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i8064 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i8065 = data
  i8064.enabled = !!i8065[0]
  i8064.layerId = i8065[1]
  i8064.otherLayerId = i8065[2]
  return i8064
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i8066 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i8067 = data
  var i8069 = i8067[0]
  var i8068 = []
  for(var i = 0; i < i8069.length; i += 1) {
    i8068.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i8069[i + 0]) );
  }
  i8066.qualityLevels = i8068
  var i8071 = i8067[1]
  var i8070 = []
  for(var i = 0; i < i8071.length; i += 1) {
    i8070.push( i8071[i + 0] );
  }
  i8066.names = i8070
  i8066.shadows = i8067[2]
  i8066.anisotropicFiltering = i8067[3]
  i8066.antiAliasing = i8067[4]
  i8066.lodBias = i8067[5]
  i8066.shadowCascades = i8067[6]
  i8066.shadowDistance = i8067[7]
  i8066.shadowmaskMode = i8067[8]
  i8066.shadowProjection = i8067[9]
  i8066.shadowResolution = i8067[10]
  i8066.softParticles = !!i8067[11]
  i8066.softVegetation = !!i8067[12]
  i8066.activeColorSpace = i8067[13]
  i8066.desiredColorSpace = i8067[14]
  i8066.masterTextureLimit = i8067[15]
  i8066.maxQueuedFrames = i8067[16]
  i8066.particleRaycastBudget = i8067[17]
  i8066.pixelLightCount = i8067[18]
  i8066.realtimeReflectionProbes = !!i8067[19]
  i8066.shadowCascade2Split = i8067[20]
  i8066.shadowCascade4Split = new pc.Vec3( i8067[21], i8067[22], i8067[23] )
  i8066.streamingMipmapsActive = !!i8067[24]
  i8066.vSyncCount = i8067[25]
  i8066.asyncUploadBufferSize = i8067[26]
  i8066.asyncUploadTimeSlice = i8067[27]
  i8066.billboardsFaceCameraPosition = !!i8067[28]
  i8066.shadowNearPlaneOffset = i8067[29]
  i8066.streamingMipmapsMemoryBudget = i8067[30]
  i8066.maximumLODLevel = i8067[31]
  i8066.streamingMipmapsAddAllCameras = !!i8067[32]
  i8066.streamingMipmapsMaxLevelReduction = i8067[33]
  i8066.streamingMipmapsRenderersPerFrame = i8067[34]
  i8066.resolutionScalingFixedDPIFactor = i8067[35]
  i8066.streamingMipmapsMaxFileIORequests = i8067[36]
  i8066.currentQualityLevel = i8067[37]
  return i8066
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i8076 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i8077 = data
  i8076.weight = i8077[0]
  i8076.vertices = i8077[1]
  i8076.normals = i8077[2]
  i8076.tangents = i8077[3]
  return i8076
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i8080 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i8081 = data
  i8080.mode = i8081[0]
  i8080.parameter = i8081[1]
  i8080.threshold = i8081[2]
  return i8080
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i8082 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i8083 = data
  i8082.m_XCoordinate = i8083[0]
  i8082.m_YCoordinate = i8083[1]
  return i8082
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i8084 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i8085 = data
  i8084.m_XPositionAdjustment = i8085[0]
  i8084.m_YPositionAdjustment = i8085[1]
  return i8084
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i8086 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i8087 = data
  i8086.xPlacement = i8087[0]
  i8086.yPlacement = i8087[1]
  i8086.xAdvance = i8087[2]
  i8086.yAdvance = i8087[3]
  return i8086
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D":{"usedByComposite":0,"autoTiling":1,"points":2,"enabled":3,"isTrigger":4,"usedByEffector":5,"density":6,"offset":7,"material":9},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.PhysicsMaterial2D":{"name":0,"bounciness":1,"friction":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2}}

Deserializers.requiredComponents = {"53":[54],"55":[54],"56":[54],"57":[54],"58":[54],"59":[54],"60":[61],"62":[2],"63":[64],"65":[64],"66":[64],"67":[64],"68":[64],"69":[64],"70":[39],"71":[39],"72":[39],"73":[39],"74":[39],"75":[39],"76":[39],"77":[39],"78":[39],"79":[39],"80":[39],"81":[39],"82":[39],"83":[2],"84":[18],"85":[86],"87":[86],"28":[17],"7":[2],"40":[39],"42":[38],"88":[12],"89":[2],"90":[91],"92":[45],"93":[28],"94":[17],"20":[18,17],"32":[17,31],"95":[17],"96":[31,17],"97":[18],"98":[31,17],"99":[17],"100":[101],"102":[101],"103":[101],"104":[17],"105":[17],"30":[28],"33":[31,17],"106":[17],"29":[28],"107":[17],"108":[17],"109":[17],"110":[17],"111":[17],"112":[17],"113":[17],"114":[17],"115":[17],"116":[31,17],"117":[17],"118":[17],"119":[17],"120":[17],"121":[31,17],"122":[17],"123":[45],"124":[45],"46":[45],"125":[45],"126":[2],"127":[2]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.MonoBehaviour","CameraFollow2D","UnityEngine.Transform","AutoCameraFit","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Mesh","UnityEngine.Material","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","MoveBetweenPoints","UnityEngine.RectTransform","UnityEngine.MeshRenderer","UnityEngine.EventSystems.UIBehaviour","TMPro.TextMeshPro","TMPro.TMP_FontAsset","UnityEngine.MeshFilter","PlayerCardUIManager","UnityEngine.GameObject","Ply_SoundManager","UnityEngine.AudioSource","UnityEngine.AudioClip","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","TMPro.TextMeshProUGUI","UnityEngine.UI.Image","UnityEngine.UI.Button","ScreenHeightPositionAnchor","UnityEngine.PolygonCollider2D","UnityEngine.PhysicsMaterial2D","UnityEngine.BoxCollider2D","UnityEngine.Rigidbody2D","BatStrikeController","CupCollision","SlotTrigger","PlayerCardData","HideOnFirstClick","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.Font","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.InputSystem.UI.InputSystemUIInputModule","UnityEngine.InputSystem.UI.TrackedDeviceRaycaster","TMPro.TextContainer","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.38f1";

Deserializers.productName = "PLY_MiniSoccer";

Deserializers.lunaInitializationTime = "07/15/2026 03:53:54";

Deserializers.lunaDaysRunning = "75.0";

Deserializers.lunaVersion = "7.1.0";

Deserializers.lunaSHA = "cf93782349542fe0b84ad13951a26809f8419628";

Deserializers.creativeName = "PLY_V11";

Deserializers.lunaAppID = "34868";

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

Deserializers.runtimeAnalysisExcludedMethodsCount = "4602";

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

Deserializers.buildID = "3cc7a0a2-0bf2-493e-82fd-aa68aa14defa";

Deserializers.runtimeInitializeOnLoadInfos = [[["Unity","Services","Core","Internal","UnityServicesInitializer","EnableServicesInitializationAsync"],["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["DG","Tweening","DOTween","RuntimeOnLoad"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["Unity","Services","Core","Registration","CorePackageInitializer","InitializeOnLoad"],["Unity","Services","Core","Internal","TaskAsyncOperation","SetScheduler"],["Unity","Services","Core","Environments","Client","Scheduler","EngineStateHelper","Init"],["Unity","Services","Core","Environments","Client","Scheduler","ThreadHelper","Init"],["Ua2CoreInitializeCallback","Register"],["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["Unity","AI","Navigation","NavMeshLink","ClearTrackedList"],["Unity","AI","Navigation","NavMeshSurface","ClearNavMeshSurfaces"],["Unity","AI","Navigation","NavMeshModifierVolume","ClearNavMeshModifiers"],["Unity","AI","Navigation","NavMeshModifier","ClearNavMeshModifiers"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["Unity","Services","Core","Internal","UnityServicesInitializer","CreateStaticInstance"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[["Unity","Services","Core","Environments","Client","Http","JsonHelpers","RegisterTypesForAOT"]],[["Unity","Services","Core","UnityThreadUtils","CaptureUnityThreadInfo"],["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

