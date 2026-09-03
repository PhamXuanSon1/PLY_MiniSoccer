var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i4388 = root || request.c( 'UnityEngine.JointSpring' )
  var i4389 = data
  i4388.spring = i4389[0]
  i4388.damper = i4389[1]
  i4388.targetPosition = i4389[2]
  return i4388
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i4390 = root || request.c( 'UnityEngine.JointMotor' )
  var i4391 = data
  i4390.m_TargetVelocity = i4391[0]
  i4390.m_Force = i4391[1]
  i4390.m_FreeSpin = i4391[2]
  return i4390
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i4392 = root || request.c( 'UnityEngine.JointLimits' )
  var i4393 = data
  i4392.m_Min = i4393[0]
  i4392.m_Max = i4393[1]
  i4392.m_Bounciness = i4393[2]
  i4392.m_BounceMinVelocity = i4393[3]
  i4392.m_ContactDistance = i4393[4]
  i4392.minBounce = i4393[5]
  i4392.maxBounce = i4393[6]
  return i4392
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i4394 = root || request.c( 'UnityEngine.JointDrive' )
  var i4395 = data
  i4394.m_PositionSpring = i4395[0]
  i4394.m_PositionDamper = i4395[1]
  i4394.m_MaximumForce = i4395[2]
  i4394.m_UseAcceleration = i4395[3]
  return i4394
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i4396 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i4397 = data
  i4396.m_Spring = i4397[0]
  i4396.m_Damper = i4397[1]
  return i4396
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i4398 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i4399 = data
  i4398.m_Limit = i4399[0]
  i4398.m_Bounciness = i4399[1]
  i4398.m_ContactDistance = i4399[2]
  return i4398
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i4400 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i4401 = data
  i4400.m_ExtremumSlip = i4401[0]
  i4400.m_ExtremumValue = i4401[1]
  i4400.m_AsymptoteSlip = i4401[2]
  i4400.m_AsymptoteValue = i4401[3]
  i4400.m_Stiffness = i4401[4]
  return i4400
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i4402 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i4403 = data
  i4402.m_LowerAngle = i4403[0]
  i4402.m_UpperAngle = i4403[1]
  return i4402
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i4404 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i4405 = data
  i4404.m_MotorSpeed = i4405[0]
  i4404.m_MaximumMotorTorque = i4405[1]
  return i4404
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i4406 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i4407 = data
  i4406.m_DampingRatio = i4407[0]
  i4406.m_Frequency = i4407[1]
  i4406.m_Angle = i4407[2]
  return i4406
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i4408 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i4409 = data
  i4408.m_LowerTranslation = i4409[0]
  i4408.m_UpperTranslation = i4409[1]
  return i4408
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i4410 = root || new pc.UnityMaterial()
  var i4411 = data
  i4410.name = i4411[0]
  request.r(i4411[1], i4411[2], 0, i4410, 'shader')
  i4410.renderQueue = i4411[3]
  i4410.enableInstancing = !!i4411[4]
  var i4413 = i4411[5]
  var i4412 = []
  for(var i = 0; i < i4413.length; i += 1) {
    i4412.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i4413[i + 0]) );
  }
  i4410.floatParameters = i4412
  var i4415 = i4411[6]
  var i4414 = []
  for(var i = 0; i < i4415.length; i += 1) {
    i4414.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i4415[i + 0]) );
  }
  i4410.colorParameters = i4414
  var i4417 = i4411[7]
  var i4416 = []
  for(var i = 0; i < i4417.length; i += 1) {
    i4416.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i4417[i + 0]) );
  }
  i4410.vectorParameters = i4416
  var i4419 = i4411[8]
  var i4418 = []
  for(var i = 0; i < i4419.length; i += 1) {
    i4418.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i4419[i + 0]) );
  }
  i4410.textureParameters = i4418
  var i4421 = i4411[9]
  var i4420 = []
  for(var i = 0; i < i4421.length; i += 1) {
    i4420.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i4421[i + 0]) );
  }
  i4410.materialFlags = i4420
  return i4410
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i4424 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i4425 = data
  i4424.name = i4425[0]
  i4424.value = i4425[1]
  return i4424
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i4428 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i4429 = data
  i4428.name = i4429[0]
  i4428.value = new pc.Color(i4429[1], i4429[2], i4429[3], i4429[4])
  return i4428
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i4432 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i4433 = data
  i4432.name = i4433[0]
  i4432.value = new pc.Vec4( i4433[1], i4433[2], i4433[3], i4433[4] )
  return i4432
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i4436 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i4437 = data
  i4436.name = i4437[0]
  request.r(i4437[1], i4437[2], 0, i4436, 'value')
  return i4436
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i4440 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i4441 = data
  i4440.name = i4441[0]
  i4440.enabled = !!i4441[1]
  return i4440
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i4442 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i4443 = data
  i4442.name = i4443[0]
  i4442.width = i4443[1]
  i4442.height = i4443[2]
  i4442.mipmapCount = i4443[3]
  i4442.anisoLevel = i4443[4]
  i4442.filterMode = i4443[5]
  i4442.hdr = !!i4443[6]
  i4442.format = i4443[7]
  i4442.wrapMode = i4443[8]
  i4442.alphaIsTransparency = !!i4443[9]
  i4442.alphaSource = i4443[10]
  i4442.graphicsFormat = i4443[11]
  i4442.sRGBTexture = !!i4443[12]
  i4442.desiredColorSpace = i4443[13]
  i4442.wrapU = i4443[14]
  i4442.wrapV = i4443[15]
  return i4442
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i4444 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i4445 = data
  i4444.name = i4445[0]
  i4444.halfPrecision = !!i4445[1]
  i4444.useSimplification = !!i4445[2]
  i4444.useUInt32IndexFormat = !!i4445[3]
  i4444.vertexCount = i4445[4]
  i4444.aabb = i4445[5]
  var i4447 = i4445[6]
  var i4446 = []
  for(var i = 0; i < i4447.length; i += 1) {
    i4446.push( !!i4447[i + 0] );
  }
  i4444.streams = i4446
  i4444.vertices = i4445[7]
  var i4449 = i4445[8]
  var i4448 = []
  for(var i = 0; i < i4449.length; i += 1) {
    i4448.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i4449[i + 0]) );
  }
  i4444.subMeshes = i4448
  var i4451 = i4445[9]
  var i4450 = []
  for(var i = 0; i < i4451.length; i += 16) {
    i4450.push( new pc.Mat4().setData(i4451[i + 0], i4451[i + 1], i4451[i + 2], i4451[i + 3],  i4451[i + 4], i4451[i + 5], i4451[i + 6], i4451[i + 7],  i4451[i + 8], i4451[i + 9], i4451[i + 10], i4451[i + 11],  i4451[i + 12], i4451[i + 13], i4451[i + 14], i4451[i + 15]) );
  }
  i4444.bindposes = i4450
  var i4453 = i4445[10]
  var i4452 = []
  for(var i = 0; i < i4453.length; i += 1) {
    i4452.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i4453[i + 0]) );
  }
  i4444.blendShapes = i4452
  return i4444
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i4458 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i4459 = data
  i4458.triangles = i4459[0]
  return i4458
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i4464 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i4465 = data
  i4464.name = i4465[0]
  var i4467 = i4465[1]
  var i4466 = []
  for(var i = 0; i < i4467.length; i += 1) {
    i4466.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i4467[i + 0]) );
  }
  i4464.frames = i4466
  return i4464
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i4468 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i4469 = data
  i4468.name = i4469[0]
  i4468.index = i4469[1]
  i4468.startup = !!i4469[2]
  return i4468
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i4470 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i4471 = data
  i4470.aspect = i4471[0]
  i4470.orthographic = !!i4471[1]
  i4470.orthographicSize = i4471[2]
  i4470.backgroundColor = new pc.Color(i4471[3], i4471[4], i4471[5], i4471[6])
  i4470.nearClipPlane = i4471[7]
  i4470.farClipPlane = i4471[8]
  i4470.fieldOfView = i4471[9]
  i4470.depth = i4471[10]
  i4470.clearFlags = i4471[11]
  i4470.cullingMask = i4471[12]
  i4470.rect = i4471[13]
  request.r(i4471[14], i4471[15], 0, i4470, 'targetTexture')
  i4470.usePhysicalProperties = !!i4471[16]
  i4470.focalLength = i4471[17]
  i4470.sensorSize = new pc.Vec2( i4471[18], i4471[19] )
  i4470.lensShift = new pc.Vec2( i4471[20], i4471[21] )
  i4470.gateFit = i4471[22]
  i4470.commandBufferCount = i4471[23]
  i4470.cameraType = i4471[24]
  i4470.enabled = !!i4471[25]
  return i4470
}

Deserializers["CameraFollow2D"] = function (request, data, root) {
  var i4472 = root || request.c( 'CameraFollow2D' )
  var i4473 = data
  request.r(i4473[0], i4473[1], 0, i4472, 'target')
  i4472.smoothSpeed = i4473[2]
  i4472.offset = new pc.Vec3( i4473[3], i4473[4], i4473[5] )
  i4472.followY = !!i4473[6]
  return i4472
}

Deserializers["AutoCameraFit"] = function (request, data, root) {
  var i4474 = root || request.c( 'AutoCameraFit' )
  var i4475 = data
  i4474.fitMode = i4475[0]
  i4474.referenceResolution = new pc.Vec2( i4475[1], i4475[2] )
  i4474.referenceOrthographicSize = i4475[3]
  i4474.widthMode = i4475[4]
  request.r(i4475[5], i4475[6], 0, i4474, 'tallScreenObject')
  i4474.tallScreenRatioThreshold = i4475[7]
  i4474.tallScreenYOffset = i4475[8]
  request.r(i4475[9], i4475[10], 0, i4474, 'canvasBtn')
  request.r(i4475[11], i4475[12], 0, i4474, 'targetArea')
  i4474.paddingLandscape = i4475[13]
  i4474.paddingPortrait = i4475[14]
  i4474.extraPaddingSmallScreen = i4475[15]
  i4474.smallScreenThreshold = i4475[16]
  i4474.autoUpdateOnResize = !!i4475[17]
  i4474.adjustInEditMode = !!i4475[18]
  return i4474
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i4476 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i4477 = data
  i4476.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i4477[0], i4476.main)
  i4476.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i4477[1], i4476.colorBySpeed)
  i4476.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i4477[2], i4476.colorOverLifetime)
  i4476.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i4477[3], i4476.emission)
  i4476.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i4477[4], i4476.rotationBySpeed)
  i4476.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i4477[5], i4476.rotationOverLifetime)
  i4476.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i4477[6], i4476.shape)
  i4476.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i4477[7], i4476.sizeBySpeed)
  i4476.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i4477[8], i4476.sizeOverLifetime)
  i4476.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i4477[9], i4476.textureSheetAnimation)
  i4476.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i4477[10], i4476.velocityOverLifetime)
  i4476.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i4477[11], i4476.noise)
  i4476.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i4477[12], i4476.inheritVelocity)
  i4476.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i4477[13], i4476.forceOverLifetime)
  i4476.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i4477[14], i4476.limitVelocityOverLifetime)
  i4476.useAutoRandomSeed = !!i4477[15]
  i4476.randomSeed = i4477[16]
  return i4476
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i4478 = root || new pc.ParticleSystemMain()
  var i4479 = data
  i4478.duration = i4479[0]
  i4478.loop = !!i4479[1]
  i4478.prewarm = !!i4479[2]
  i4478.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4479[3], i4478.startDelay)
  i4478.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4479[4], i4478.startLifetime)
  i4478.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4479[5], i4478.startSpeed)
  i4478.startSize3D = !!i4479[6]
  i4478.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4479[7], i4478.startSizeX)
  i4478.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4479[8], i4478.startSizeY)
  i4478.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4479[9], i4478.startSizeZ)
  i4478.startRotation3D = !!i4479[10]
  i4478.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4479[11], i4478.startRotationX)
  i4478.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4479[12], i4478.startRotationY)
  i4478.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4479[13], i4478.startRotationZ)
  i4478.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i4479[14], i4478.startColor)
  i4478.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4479[15], i4478.gravityModifier)
  i4478.simulationSpace = i4479[16]
  request.r(i4479[17], i4479[18], 0, i4478, 'customSimulationSpace')
  i4478.simulationSpeed = i4479[19]
  i4478.useUnscaledTime = !!i4479[20]
  i4478.scalingMode = i4479[21]
  i4478.playOnAwake = !!i4479[22]
  i4478.maxParticles = i4479[23]
  i4478.emitterVelocityMode = i4479[24]
  i4478.stopAction = i4479[25]
  return i4478
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i4480 = root || new pc.MinMaxCurve()
  var i4481 = data
  i4480.mode = i4481[0]
  i4480.curveMin = new pc.AnimationCurve( { keys_flow: i4481[1] } )
  i4480.curveMax = new pc.AnimationCurve( { keys_flow: i4481[2] } )
  i4480.curveMultiplier = i4481[3]
  i4480.constantMin = i4481[4]
  i4480.constantMax = i4481[5]
  return i4480
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i4482 = root || new pc.MinMaxGradient()
  var i4483 = data
  i4482.mode = i4483[0]
  i4482.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i4483[1], i4482.gradientMin)
  i4482.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i4483[2], i4482.gradientMax)
  i4482.colorMin = new pc.Color(i4483[3], i4483[4], i4483[5], i4483[6])
  i4482.colorMax = new pc.Color(i4483[7], i4483[8], i4483[9], i4483[10])
  return i4482
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i4484 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i4485 = data
  i4484.mode = i4485[0]
  var i4487 = i4485[1]
  var i4486 = []
  for(var i = 0; i < i4487.length; i += 1) {
    i4486.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i4487[i + 0]) );
  }
  i4484.colorKeys = i4486
  var i4489 = i4485[2]
  var i4488 = []
  for(var i = 0; i < i4489.length; i += 1) {
    i4488.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i4489[i + 0]) );
  }
  i4484.alphaKeys = i4488
  return i4484
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i4490 = root || new pc.ParticleSystemColorBySpeed()
  var i4491 = data
  i4490.enabled = !!i4491[0]
  i4490.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i4491[1], i4490.color)
  i4490.range = new pc.Vec2( i4491[2], i4491[3] )
  return i4490
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i4494 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i4495 = data
  i4494.color = new pc.Color(i4495[0], i4495[1], i4495[2], i4495[3])
  i4494.time = i4495[4]
  return i4494
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i4498 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i4499 = data
  i4498.alpha = i4499[0]
  i4498.time = i4499[1]
  return i4498
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i4500 = root || new pc.ParticleSystemColorOverLifetime()
  var i4501 = data
  i4500.enabled = !!i4501[0]
  i4500.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i4501[1], i4500.color)
  return i4500
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i4502 = root || new pc.ParticleSystemEmitter()
  var i4503 = data
  i4502.enabled = !!i4503[0]
  i4502.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4503[1], i4502.rateOverTime)
  i4502.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4503[2], i4502.rateOverDistance)
  var i4505 = i4503[3]
  var i4504 = []
  for(var i = 0; i < i4505.length; i += 1) {
    i4504.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i4505[i + 0]) );
  }
  i4502.bursts = i4504
  return i4502
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i4508 = root || new pc.ParticleSystemBurst()
  var i4509 = data
  i4508.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4509[0], i4508.count)
  i4508.cycleCount = i4509[1]
  i4508.minCount = i4509[2]
  i4508.maxCount = i4509[3]
  i4508.repeatInterval = i4509[4]
  i4508.time = i4509[5]
  return i4508
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i4510 = root || new pc.ParticleSystemRotationBySpeed()
  var i4511 = data
  i4510.enabled = !!i4511[0]
  i4510.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4511[1], i4510.x)
  i4510.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4511[2], i4510.y)
  i4510.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4511[3], i4510.z)
  i4510.separateAxes = !!i4511[4]
  i4510.range = new pc.Vec2( i4511[5], i4511[6] )
  return i4510
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i4512 = root || new pc.ParticleSystemRotationOverLifetime()
  var i4513 = data
  i4512.enabled = !!i4513[0]
  i4512.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4513[1], i4512.x)
  i4512.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4513[2], i4512.y)
  i4512.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4513[3], i4512.z)
  i4512.separateAxes = !!i4513[4]
  return i4512
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i4514 = root || new pc.ParticleSystemShape()
  var i4515 = data
  i4514.enabled = !!i4515[0]
  i4514.shapeType = i4515[1]
  i4514.randomDirectionAmount = i4515[2]
  i4514.sphericalDirectionAmount = i4515[3]
  i4514.randomPositionAmount = i4515[4]
  i4514.alignToDirection = !!i4515[5]
  i4514.radius = i4515[6]
  i4514.radiusMode = i4515[7]
  i4514.radiusSpread = i4515[8]
  i4514.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4515[9], i4514.radiusSpeed)
  i4514.radiusThickness = i4515[10]
  i4514.angle = i4515[11]
  i4514.length = i4515[12]
  i4514.boxThickness = new pc.Vec3( i4515[13], i4515[14], i4515[15] )
  i4514.meshShapeType = i4515[16]
  request.r(i4515[17], i4515[18], 0, i4514, 'mesh')
  request.r(i4515[19], i4515[20], 0, i4514, 'meshRenderer')
  request.r(i4515[21], i4515[22], 0, i4514, 'skinnedMeshRenderer')
  i4514.useMeshMaterialIndex = !!i4515[23]
  i4514.meshMaterialIndex = i4515[24]
  i4514.useMeshColors = !!i4515[25]
  i4514.normalOffset = i4515[26]
  i4514.arc = i4515[27]
  i4514.arcMode = i4515[28]
  i4514.arcSpread = i4515[29]
  i4514.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4515[30], i4514.arcSpeed)
  i4514.donutRadius = i4515[31]
  i4514.position = new pc.Vec3( i4515[32], i4515[33], i4515[34] )
  i4514.rotation = new pc.Vec3( i4515[35], i4515[36], i4515[37] )
  i4514.scale = new pc.Vec3( i4515[38], i4515[39], i4515[40] )
  return i4514
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i4516 = root || new pc.ParticleSystemSizeBySpeed()
  var i4517 = data
  i4516.enabled = !!i4517[0]
  i4516.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4517[1], i4516.x)
  i4516.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4517[2], i4516.y)
  i4516.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4517[3], i4516.z)
  i4516.separateAxes = !!i4517[4]
  i4516.range = new pc.Vec2( i4517[5], i4517[6] )
  return i4516
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i4518 = root || new pc.ParticleSystemSizeOverLifetime()
  var i4519 = data
  i4518.enabled = !!i4519[0]
  i4518.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4519[1], i4518.x)
  i4518.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4519[2], i4518.y)
  i4518.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4519[3], i4518.z)
  i4518.separateAxes = !!i4519[4]
  return i4518
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i4520 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i4521 = data
  i4520.enabled = !!i4521[0]
  i4520.mode = i4521[1]
  i4520.animation = i4521[2]
  i4520.numTilesX = i4521[3]
  i4520.numTilesY = i4521[4]
  i4520.useRandomRow = !!i4521[5]
  i4520.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4521[6], i4520.frameOverTime)
  i4520.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4521[7], i4520.startFrame)
  i4520.cycleCount = i4521[8]
  i4520.rowIndex = i4521[9]
  i4520.flipU = i4521[10]
  i4520.flipV = i4521[11]
  i4520.spriteCount = i4521[12]
  var i4523 = i4521[13]
  var i4522 = []
  for(var i = 0; i < i4523.length; i += 2) {
  request.r(i4523[i + 0], i4523[i + 1], 2, i4522, '')
  }
  i4520.sprites = i4522
  return i4520
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i4526 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i4527 = data
  i4526.enabled = !!i4527[0]
  i4526.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4527[1], i4526.x)
  i4526.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4527[2], i4526.y)
  i4526.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4527[3], i4526.z)
  i4526.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4527[4], i4526.radial)
  i4526.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4527[5], i4526.speedModifier)
  i4526.space = i4527[6]
  i4526.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4527[7], i4526.orbitalX)
  i4526.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4527[8], i4526.orbitalY)
  i4526.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4527[9], i4526.orbitalZ)
  i4526.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4527[10], i4526.orbitalOffsetX)
  i4526.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4527[11], i4526.orbitalOffsetY)
  i4526.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4527[12], i4526.orbitalOffsetZ)
  return i4526
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i4528 = root || new pc.ParticleSystemNoise()
  var i4529 = data
  i4528.enabled = !!i4529[0]
  i4528.separateAxes = !!i4529[1]
  i4528.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4529[2], i4528.strengthX)
  i4528.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4529[3], i4528.strengthY)
  i4528.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4529[4], i4528.strengthZ)
  i4528.frequency = i4529[5]
  i4528.damping = !!i4529[6]
  i4528.octaveCount = i4529[7]
  i4528.octaveMultiplier = i4529[8]
  i4528.octaveScale = i4529[9]
  i4528.quality = i4529[10]
  i4528.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4529[11], i4528.scrollSpeed)
  i4528.scrollSpeedMultiplier = i4529[12]
  i4528.remapEnabled = !!i4529[13]
  i4528.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4529[14], i4528.remapX)
  i4528.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4529[15], i4528.remapY)
  i4528.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4529[16], i4528.remapZ)
  i4528.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4529[17], i4528.positionAmount)
  i4528.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4529[18], i4528.rotationAmount)
  i4528.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4529[19], i4528.sizeAmount)
  return i4528
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i4530 = root || new pc.ParticleSystemInheritVelocity()
  var i4531 = data
  i4530.enabled = !!i4531[0]
  i4530.mode = i4531[1]
  i4530.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4531[2], i4530.curve)
  return i4530
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i4532 = root || new pc.ParticleSystemForceOverLifetime()
  var i4533 = data
  i4532.enabled = !!i4533[0]
  i4532.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4533[1], i4532.x)
  i4532.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4533[2], i4532.y)
  i4532.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4533[3], i4532.z)
  i4532.space = i4533[4]
  i4532.randomized = !!i4533[5]
  return i4532
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i4534 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i4535 = data
  i4534.enabled = !!i4535[0]
  i4534.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4535[1], i4534.limit)
  i4534.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4535[2], i4534.limitX)
  i4534.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4535[3], i4534.limitY)
  i4534.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4535[4], i4534.limitZ)
  i4534.dampen = i4535[5]
  i4534.separateAxes = !!i4535[6]
  i4534.space = i4535[7]
  i4534.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4535[8], i4534.drag)
  i4534.multiplyDragByParticleSize = !!i4535[9]
  i4534.multiplyDragByParticleVelocity = !!i4535[10]
  return i4534
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i4536 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i4537 = data
  request.r(i4537[0], i4537[1], 0, i4536, 'mesh')
  i4536.meshCount = i4537[2]
  i4536.activeVertexStreamsCount = i4537[3]
  i4536.alignment = i4537[4]
  i4536.renderMode = i4537[5]
  i4536.sortMode = i4537[6]
  i4536.lengthScale = i4537[7]
  i4536.velocityScale = i4537[8]
  i4536.cameraVelocityScale = i4537[9]
  i4536.normalDirection = i4537[10]
  i4536.sortingFudge = i4537[11]
  i4536.minParticleSize = i4537[12]
  i4536.maxParticleSize = i4537[13]
  i4536.pivot = new pc.Vec3( i4537[14], i4537[15], i4537[16] )
  request.r(i4537[17], i4537[18], 0, i4536, 'trailMaterial')
  i4536.applyActiveColorSpace = !!i4537[19]
  i4536.enabled = !!i4537[20]
  request.r(i4537[21], i4537[22], 0, i4536, 'sharedMaterial')
  var i4539 = i4537[23]
  var i4538 = []
  for(var i = 0; i < i4539.length; i += 2) {
  request.r(i4539[i + 0], i4539[i + 1], 2, i4538, '')
  }
  i4536.sharedMaterials = i4538
  i4536.receiveShadows = !!i4537[24]
  i4536.shadowCastingMode = i4537[25]
  i4536.sortingLayerID = i4537[26]
  i4536.sortingOrder = i4537[27]
  i4536.lightmapIndex = i4537[28]
  i4536.lightmapSceneIndex = i4537[29]
  i4536.lightmapScaleOffset = new pc.Vec4( i4537[30], i4537[31], i4537[32], i4537[33] )
  i4536.lightProbeUsage = i4537[34]
  i4536.reflectionProbeUsage = i4537[35]
  return i4536
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i4542 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i4543 = data
  i4542.name = i4543[0]
  i4542.tagId = i4543[1]
  i4542.enabled = !!i4543[2]
  i4542.isStatic = !!i4543[3]
  i4542.layer = i4543[4]
  return i4542
}

Deserializers["Ply_SoundManager"] = function (request, data, root) {
  var i4544 = root || request.c( 'Ply_SoundManager' )
  var i4545 = data
  i4544.fxAudio = request.d('FxAudio', i4545[0], i4544.fxAudio)
  request.r(i4545[1], i4545[2], 0, i4544, 'bgm1')
  return i4544
}

Deserializers["FxAudio"] = function (request, data, root) {
  var i4546 = root || request.c( 'FxAudio' )
  var i4547 = data
  i4546.ClickBox = request.d('SoundData', i4547[0], i4546.ClickBox)
  i4546.Happy = request.d('SoundData', i4547[1], i4546.Happy)
  i4546.Wrong = request.d('SoundData', i4547[2], i4546.Wrong)
  i4546.Spray = request.d('SoundData', i4547[3], i4546.Spray)
  i4546.Brush = request.d('SoundData', i4547[4], i4546.Brush)
  i4546.Keo = request.d('SoundData', i4547[5], i4546.Keo)
  i4546.Confetti = request.d('SoundData', i4547[6], i4546.Confetti)
  i4546.Lose2 = request.d('SoundData', i4547[7], i4546.Lose2)
  i4546.SelectVini = request.d('SoundData', i4547[8], i4546.SelectVini)
  i4546.SelectMessiMbappe = request.d('SoundData', i4547[9], i4546.SelectMessiMbappe)
  i4546.Tackle = request.d('SoundData', i4547[10], i4546.Tackle)
  i4546.HaalandHurt = request.d('SoundData', i4547[11], i4546.HaalandHurt)
  return i4546
}

Deserializers["SoundData"] = function (request, data, root) {
  var i4548 = root || request.c( 'SoundData' )
  var i4549 = data
  request.r(i4549[0], i4549[1], 0, i4548, 'clip')
  i4548.repeatCount = i4549[2]
  return i4548
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i4550 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i4551 = data
  request.r(i4551[0], i4551[1], 0, i4550, 'clip')
  request.r(i4551[2], i4551[3], 0, i4550, 'outputAudioMixerGroup')
  i4550.playOnAwake = !!i4551[4]
  i4550.loop = !!i4551[5]
  i4550.time = i4551[6]
  i4550.volume = i4551[7]
  i4550.pitch = i4551[8]
  i4550.enabled = !!i4551[9]
  return i4550
}

Deserializers["HaalandGame.HaalandGameManager"] = function (request, data, root) {
  var i4552 = root || request.c( 'HaalandGame.HaalandGameManager' )
  var i4553 = data
  request.r(i4553[0], i4553[1], 0, i4552, 'tutUI')
  request.r(i4553[2], i4553[3], 0, i4552, 'ronaldoTackle')
  request.r(i4553[4], i4553[5], 0, i4552, 'ronaldoTackleAnimator')
  i4552.startRonaldoTackleTrigger = i4553[6]
  request.r(i4553[7], i4553[8], 0, i4552, 'messiTackle')
  request.r(i4553[9], i4553[10], 0, i4552, 'messiTackleAnimator')
  i4552.startMessiTackleTrigger = i4553[11]
  i4552.tackleAnimDelay = i4553[12]
  request.r(i4553[13], i4553[14], 0, i4552, 'haalandDribbleImage')
  request.r(i4553[15], i4553[16], 0, i4552, 'haalandDribbleAnimator')
  i4552.startHaalandDribbleTrigger = i4553[17]
  request.r(i4553[18], i4553[19], 0, i4552, 'fightingCloud')
  request.r(i4553[20], i4553[21], 0, i4552, 'haalandHurt')
  request.r(i4553[22], i4553[23], 0, i4552, 'haalandWin')
  i4552.winPlayerDelay = i4553[24]
  request.r(i4553[25], i4553[26], 0, i4552, 'standPlayers')
  request.r(i4553[27], i4553[28], 0, i4552, 'standPlayersAnimator')
  i4552.standPlayerEnterTrigger = i4553[29]
  request.r(i4553[30], i4553[31], 0, i4552, 'questionUI')
  request.r(i4553[32], i4553[33], 0, i4552, 'wrongChoiceUI')
  request.r(i4553[34], i4553[35], 0, i4552, 'winChoiceUI')
  request.r(i4553[36], i4553[37], 0, i4552, 'winExtraObj1')
  request.r(i4553[38], i4553[39], 0, i4552, 'winExtraObj2')
  request.r(i4553[40], i4553[41], 0, i4552, 'iconListUI')
  request.r(i4553[42], i4553[43], 0, i4552, 'refereeAnimator')
  i4552.refereeLookAroundTrigger = i4553[44]
  i4552.useAutoTimers = !!i4553[45]
  i4552.tackleHideDelay = i4553[46]
  i4552.impactCloudDelay = i4553[47]
  i4552.haalandHurtDelay = i4553[48]
  i4552.cloudDuration = i4553[49]
  i4552.refereeAnimDelay = i4553[50]
  i4552.nextActionDelay = i4553[51]
  i4552.dribbleToTackleDelay = i4553[52]
  i4552.tackleSoundDelay = i4553[53]
  request.r(i4553[54], i4553[55], 0, i4552, 'ronaldoChatBubble')
  request.r(i4553[56], i4553[57], 0, i4552, 'messiChatBubble')
  request.r(i4553[58], i4553[59], 0, i4552, 'viniChatBubble')
  request.r(i4553[60], i4553[61], 0, i4552, 'mbappeChatBubble')
  request.r(i4553[62], i4553[63], 0, i4552, 'ronaldoSpriteRenderer')
  request.r(i4553[64], i4553[65], 0, i4552, 'ronaldoSadSprite')
  request.r(i4553[66], i4553[67], 0, i4552, 'ronaldoEvilLaughSprite')
  request.r(i4553[68], i4553[69], 0, i4552, 'messiSpriteRenderer')
  request.r(i4553[70], i4553[71], 0, i4552, 'messiSadSprite')
  request.r(i4553[72], i4553[73], 0, i4552, 'viniSpriteRenderer')
  request.r(i4553[74], i4553[75], 0, i4552, 'viniSadSprite')
  request.r(i4553[76], i4553[77], 0, i4552, 'mbappeSpriteRenderer')
  request.r(i4553[78], i4553[79], 0, i4552, 'mbappeSadSprite')
  request.r(i4553[80], i4553[81], 0, i4552, 'refereeSpriteRenderer')
  request.r(i4553[82], i4553[83], 0, i4552, 'refereeReactionSprite')
  request.r(i4553[84], i4553[85], 0, i4552, 'iconListAnimator')
  i4552.currentLevel = i4553[86]
  return i4552
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i4554 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i4555 = data
  i4554.pivot = new pc.Vec2( i4555[0], i4555[1] )
  i4554.anchorMin = new pc.Vec2( i4555[2], i4555[3] )
  i4554.anchorMax = new pc.Vec2( i4555[4], i4555[5] )
  i4554.sizeDelta = new pc.Vec2( i4555[6], i4555[7] )
  i4554.anchoredPosition3D = new pc.Vec3( i4555[8], i4555[9], i4555[10] )
  i4554.rotation = new pc.Quat(i4555[11], i4555[12], i4555[13], i4555[14])
  i4554.scale = new pc.Vec3( i4555[15], i4555[16], i4555[17] )
  return i4554
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i4556 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i4557 = data
  i4556.planeDistance = i4557[0]
  i4556.referencePixelsPerUnit = i4557[1]
  i4556.isFallbackOverlay = !!i4557[2]
  i4556.renderMode = i4557[3]
  i4556.renderOrder = i4557[4]
  i4556.sortingLayerName = i4557[5]
  i4556.sortingOrder = i4557[6]
  i4556.scaleFactor = i4557[7]
  request.r(i4557[8], i4557[9], 0, i4556, 'worldCamera')
  i4556.overrideSorting = !!i4557[10]
  i4556.pixelPerfect = !!i4557[11]
  i4556.targetDisplay = i4557[12]
  i4556.overridePixelPerfect = !!i4557[13]
  i4556.enabled = !!i4557[14]
  return i4556
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i4558 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i4559 = data
  i4558.m_UiScaleMode = i4559[0]
  i4558.m_ReferencePixelsPerUnit = i4559[1]
  i4558.m_ScaleFactor = i4559[2]
  i4558.m_ReferenceResolution = new pc.Vec2( i4559[3], i4559[4] )
  i4558.m_ScreenMatchMode = i4559[5]
  i4558.m_MatchWidthOrHeight = i4559[6]
  i4558.m_PhysicalUnit = i4559[7]
  i4558.m_FallbackScreenDPI = i4559[8]
  i4558.m_DefaultSpriteDPI = i4559[9]
  i4558.m_DynamicPixelsPerUnit = i4559[10]
  i4558.m_PresetInfoIsWorld = !!i4559[11]
  return i4558
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i4560 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i4561 = data
  i4560.m_IgnoreReversedGraphics = !!i4561[0]
  i4560.m_BlockingObjects = i4561[1]
  i4560.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i4561[2] )
  return i4560
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i4562 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i4563 = data
  i4562.cullTransparentMesh = !!i4563[0]
  return i4562
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i4564 = root || request.c( 'UnityEngine.UI.Image' )
  var i4565 = data
  request.r(i4565[0], i4565[1], 0, i4564, 'm_Sprite')
  i4564.m_Type = i4565[2]
  i4564.m_PreserveAspect = !!i4565[3]
  i4564.m_FillCenter = !!i4565[4]
  i4564.m_FillMethod = i4565[5]
  i4564.m_FillAmount = i4565[6]
  i4564.m_FillClockwise = !!i4565[7]
  i4564.m_FillOrigin = i4565[8]
  i4564.m_UseSpriteMesh = !!i4565[9]
  i4564.m_PixelsPerUnitMultiplier = i4565[10]
  request.r(i4565[11], i4565[12], 0, i4564, 'm_Material')
  i4564.m_Maskable = !!i4565[13]
  i4564.m_Color = new pc.Color(i4565[14], i4565[15], i4565[16], i4565[17])
  i4564.m_RaycastTarget = !!i4565[18]
  i4564.m_RaycastPadding = new pc.Vec4( i4565[19], i4565[20], i4565[21], i4565[22] )
  return i4564
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i4566 = root || request.c( 'UnityEngine.UI.Button' )
  var i4567 = data
  i4566.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i4567[0], i4566.m_OnClick)
  i4566.m_Navigation = request.d('UnityEngine.UI.Navigation', i4567[1], i4566.m_Navigation)
  i4566.m_Transition = i4567[2]
  i4566.m_Colors = request.d('UnityEngine.UI.ColorBlock', i4567[3], i4566.m_Colors)
  i4566.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i4567[4], i4566.m_SpriteState)
  i4566.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i4567[5], i4566.m_AnimationTriggers)
  i4566.m_Interactable = !!i4567[6]
  request.r(i4567[7], i4567[8], 0, i4566, 'm_TargetGraphic')
  return i4566
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i4568 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i4569 = data
  i4568.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i4569[0], i4568.m_PersistentCalls)
  return i4568
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i4570 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i4571 = data
  var i4573 = i4571[0]
  var i4572 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i4573.length; i += 1) {
    i4572.add(request.d('UnityEngine.Events.PersistentCall', i4573[i + 0]));
  }
  i4570.m_Calls = i4572
  return i4570
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i4576 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i4577 = data
  request.r(i4577[0], i4577[1], 0, i4576, 'm_Target')
  i4576.m_TargetAssemblyTypeName = i4577[2]
  i4576.m_MethodName = i4577[3]
  i4576.m_Mode = i4577[4]
  i4576.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i4577[5], i4576.m_Arguments)
  i4576.m_CallState = i4577[6]
  return i4576
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i4578 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i4579 = data
  request.r(i4579[0], i4579[1], 0, i4578, 'm_ObjectArgument')
  i4578.m_ObjectArgumentAssemblyTypeName = i4579[2]
  i4578.m_IntArgument = i4579[3]
  i4578.m_FloatArgument = i4579[4]
  i4578.m_StringArgument = i4579[5]
  i4578.m_BoolArgument = !!i4579[6]
  return i4578
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i4580 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i4581 = data
  i4580.m_Mode = i4581[0]
  i4580.m_WrapAround = !!i4581[1]
  request.r(i4581[2], i4581[3], 0, i4580, 'm_SelectOnUp')
  request.r(i4581[4], i4581[5], 0, i4580, 'm_SelectOnDown')
  request.r(i4581[6], i4581[7], 0, i4580, 'm_SelectOnLeft')
  request.r(i4581[8], i4581[9], 0, i4580, 'm_SelectOnRight')
  return i4580
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i4582 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i4583 = data
  i4582.m_NormalColor = new pc.Color(i4583[0], i4583[1], i4583[2], i4583[3])
  i4582.m_HighlightedColor = new pc.Color(i4583[4], i4583[5], i4583[6], i4583[7])
  i4582.m_PressedColor = new pc.Color(i4583[8], i4583[9], i4583[10], i4583[11])
  i4582.m_SelectedColor = new pc.Color(i4583[12], i4583[13], i4583[14], i4583[15])
  i4582.m_DisabledColor = new pc.Color(i4583[16], i4583[17], i4583[18], i4583[19])
  i4582.m_ColorMultiplier = i4583[20]
  i4582.m_FadeDuration = i4583[21]
  return i4582
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i4584 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i4585 = data
  request.r(i4585[0], i4585[1], 0, i4584, 'm_HighlightedSprite')
  request.r(i4585[2], i4585[3], 0, i4584, 'm_PressedSprite')
  request.r(i4585[4], i4585[5], 0, i4584, 'm_SelectedSprite')
  request.r(i4585[6], i4585[7], 0, i4584, 'm_DisabledSprite')
  return i4584
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i4586 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i4587 = data
  i4586.m_NormalTrigger = i4587[0]
  i4586.m_HighlightedTrigger = i4587[1]
  i4586.m_PressedTrigger = i4587[2]
  i4586.m_SelectedTrigger = i4587[3]
  i4586.m_DisabledTrigger = i4587[4]
  return i4586
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i4588 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i4589 = data
  request.r(i4589[0], i4589[1], 0, i4588, 'animatorController')
  request.r(i4589[2], i4589[3], 0, i4588, 'avatar')
  i4588.updateMode = i4589[4]
  i4588.hasTransformHierarchy = !!i4589[5]
  i4588.applyRootMotion = !!i4589[6]
  var i4591 = i4589[7]
  var i4590 = []
  for(var i = 0; i < i4591.length; i += 2) {
  request.r(i4591[i + 0], i4591[i + 1], 2, i4590, '')
  }
  i4588.humanBones = i4590
  i4588.enabled = !!i4589[8]
  return i4588
}

Deserializers["HaalandGame.IconListAnimator"] = function (request, data, root) {
  var i4594 = root || request.c( 'HaalandGame.IconListAnimator' )
  var i4595 = data
  var i4597 = i4595[0]
  var i4596 = []
  for(var i = 0; i < i4597.length; i += 2) {
  request.r(i4597[i + 0], i4597[i + 1], 2, i4596, '')
  }
  i4594.iconTransforms = i4596
  i4594.initialDelay = i4595[1]
  i4594.targetScaleMult = i4595[2]
  i4594.pulseDuration = i4595[3]
  i4594.delayBetweenIcons = i4595[4]
  i4594.delayBetweenLoops = i4595[5]
  return i4594
}

Deserializers["HideOnFirstClick"] = function (request, data, root) {
  var i4600 = root || request.c( 'HideOnFirstClick' )
  var i4601 = data
  request.r(i4601[0], i4601[1], 0, i4600, 'objectToHide')
  return i4600
}

Deserializers["ScreenHeightPositionAnchor"] = function (request, data, root) {
  var i4602 = root || request.c( 'ScreenHeightPositionAnchor' )
  var i4603 = data
  request.r(i4603[0], i4603[1], 0, i4602, 'anchorPoint')
  request.r(i4603[2], i4603[3], 0, i4602, 'targetCamera')
  i4602.viewportYRatio = i4603[4]
  i4602.alignOnStart = !!i4603[5]
  i4602.alignOnEnable = !!i4603[6]
  i4602.realignOnScreenSizeChanged = !!i4603[7]
  i4602.drawGizmos = !!i4603[8]
  i4602.targetLineColor = new pc.Color(i4603[9], i4603[10], i4603[11], i4603[12])
  i4602.anchorColor = new pc.Color(i4603[13], i4603[14], i4603[15], i4603[16])
  return i4602
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i4604 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i4605 = data
  i4604.center = new pc.Vec3( i4605[0], i4605[1], i4605[2] )
  i4604.size = new pc.Vec3( i4605[3], i4605[4], i4605[5] )
  i4604.enabled = !!i4605[6]
  i4604.isTrigger = !!i4605[7]
  request.r(i4605[8], i4605[9], 0, i4604, 'material')
  return i4604
}

Deserializers["HaalandGame.PlayerSelectable"] = function (request, data, root) {
  var i4606 = root || request.c( 'HaalandGame.PlayerSelectable' )
  var i4607 = data
  i4606.playerType = i4607[0]
  i4606.targetLayerName = i4607[1]
  return i4606
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i4608 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i4609 = data
  i4608.color = new pc.Color(i4609[0], i4609[1], i4609[2], i4609[3])
  request.r(i4609[4], i4609[5], 0, i4608, 'sprite')
  i4608.flipX = !!i4609[6]
  i4608.flipY = !!i4609[7]
  i4608.drawMode = i4609[8]
  i4608.size = new pc.Vec2( i4609[9], i4609[10] )
  i4608.tileMode = i4609[11]
  i4608.adaptiveModeThreshold = i4609[12]
  i4608.maskInteraction = i4609[13]
  i4608.spriteSortPoint = i4609[14]
  i4608.enabled = !!i4609[15]
  request.r(i4609[16], i4609[17], 0, i4608, 'sharedMaterial')
  var i4611 = i4609[18]
  var i4610 = []
  for(var i = 0; i < i4611.length; i += 2) {
  request.r(i4611[i + 0], i4611[i + 1], 2, i4610, '')
  }
  i4608.sharedMaterials = i4610
  i4608.receiveShadows = !!i4609[19]
  i4608.shadowCastingMode = i4609[20]
  i4608.sortingLayerID = i4609[21]
  i4608.sortingOrder = i4609[22]
  i4608.lightmapIndex = i4609[23]
  i4608.lightmapSceneIndex = i4609[24]
  i4608.lightmapScaleOffset = new pc.Vec4( i4609[25], i4609[26], i4609[27], i4609[28] )
  i4608.lightProbeUsage = i4609[29]
  i4608.reflectionProbeUsage = i4609[30]
  return i4608
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i4612 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i4613 = data
  request.r(i4613[0], i4613[1], 0, i4612, 'm_FirstSelected')
  i4612.m_sendNavigationEvents = !!i4613[2]
  i4612.m_DragThreshold = i4613[3]
  return i4612
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i4614 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i4615 = data
  i4614.m_HorizontalAxis = i4615[0]
  i4614.m_VerticalAxis = i4615[1]
  i4614.m_SubmitButton = i4615[2]
  i4614.m_CancelButton = i4615[3]
  i4614.m_InputActionsPerSecond = i4615[4]
  i4614.m_RepeatDelay = i4615[5]
  i4614.m_ForceModuleActive = !!i4615[6]
  i4614.m_SendPointerHoverToParent = !!i4615[7]
  return i4614
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i4616 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i4617 = data
  i4616.ambientIntensity = i4617[0]
  i4616.reflectionIntensity = i4617[1]
  i4616.ambientMode = i4617[2]
  i4616.ambientLight = new pc.Color(i4617[3], i4617[4], i4617[5], i4617[6])
  i4616.ambientSkyColor = new pc.Color(i4617[7], i4617[8], i4617[9], i4617[10])
  i4616.ambientGroundColor = new pc.Color(i4617[11], i4617[12], i4617[13], i4617[14])
  i4616.ambientEquatorColor = new pc.Color(i4617[15], i4617[16], i4617[17], i4617[18])
  i4616.fogColor = new pc.Color(i4617[19], i4617[20], i4617[21], i4617[22])
  i4616.fogEndDistance = i4617[23]
  i4616.fogStartDistance = i4617[24]
  i4616.fogDensity = i4617[25]
  i4616.fog = !!i4617[26]
  request.r(i4617[27], i4617[28], 0, i4616, 'skybox')
  i4616.fogMode = i4617[29]
  var i4619 = i4617[30]
  var i4618 = []
  for(var i = 0; i < i4619.length; i += 1) {
    i4618.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i4619[i + 0]) );
  }
  i4616.lightmaps = i4618
  i4616.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i4617[31], i4616.lightProbes)
  i4616.lightmapsMode = i4617[32]
  i4616.mixedBakeMode = i4617[33]
  i4616.environmentLightingMode = i4617[34]
  i4616.ambientProbe = new pc.SphericalHarmonicsL2(i4617[35])
  i4616.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i4617[36])
  i4616.useReferenceAmbientProbe = !!i4617[37]
  request.r(i4617[38], i4617[39], 0, i4616, 'customReflection')
  request.r(i4617[40], i4617[41], 0, i4616, 'defaultReflection')
  i4616.defaultReflectionMode = i4617[42]
  i4616.defaultReflectionResolution = i4617[43]
  i4616.sunLightObjectId = i4617[44]
  i4616.pixelLightCount = i4617[45]
  i4616.defaultReflectionHDR = !!i4617[46]
  i4616.hasLightDataAsset = !!i4617[47]
  i4616.hasManualGenerate = !!i4617[48]
  return i4616
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i4622 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i4623 = data
  request.r(i4623[0], i4623[1], 0, i4622, 'lightmapColor')
  request.r(i4623[2], i4623[3], 0, i4622, 'lightmapDirection')
  request.r(i4623[4], i4623[5], 0, i4622, 'shadowMask')
  return i4622
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i4624 = root || new UnityEngine.LightProbes()
  var i4625 = data
  return i4624
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i4632 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i4633 = data
  var i4635 = i4633[0]
  var i4634 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i4635.length; i += 1) {
    i4634.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i4635[i + 0]));
  }
  i4632.ShaderCompilationErrors = i4634
  i4632.name = i4633[1]
  i4632.guid = i4633[2]
  var i4637 = i4633[3]
  var i4636 = []
  for(var i = 0; i < i4637.length; i += 1) {
    i4636.push( i4637[i + 0] );
  }
  i4632.shaderDefinedKeywords = i4636
  var i4639 = i4633[4]
  var i4638 = []
  for(var i = 0; i < i4639.length; i += 1) {
    i4638.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i4639[i + 0]) );
  }
  i4632.passes = i4638
  var i4641 = i4633[5]
  var i4640 = []
  for(var i = 0; i < i4641.length; i += 1) {
    i4640.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i4641[i + 0]) );
  }
  i4632.usePasses = i4640
  var i4643 = i4633[6]
  var i4642 = []
  for(var i = 0; i < i4643.length; i += 1) {
    i4642.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i4643[i + 0]) );
  }
  i4632.defaultParameterValues = i4642
  request.r(i4633[7], i4633[8], 0, i4632, 'unityFallbackShader')
  i4632.readDepth = !!i4633[9]
  i4632.hasDepthOnlyPass = !!i4633[10]
  i4632.isCreatedByShaderGraph = !!i4633[11]
  i4632.disableBatching = !!i4633[12]
  i4632.compiled = !!i4633[13]
  return i4632
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i4646 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i4647 = data
  i4646.shaderName = i4647[0]
  i4646.errorMessage = i4647[1]
  return i4646
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i4652 = root || new pc.UnityShaderPass()
  var i4653 = data
  i4652.id = i4653[0]
  i4652.subShaderIndex = i4653[1]
  i4652.name = i4653[2]
  i4652.passType = i4653[3]
  i4652.grabPassTextureName = i4653[4]
  i4652.usePass = !!i4653[5]
  i4652.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4653[6], i4652.zTest)
  i4652.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4653[7], i4652.zWrite)
  i4652.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4653[8], i4652.culling)
  i4652.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i4653[9], i4652.blending)
  i4652.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i4653[10], i4652.alphaBlending)
  i4652.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4653[11], i4652.colorWriteMask)
  i4652.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4653[12], i4652.offsetUnits)
  i4652.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4653[13], i4652.offsetFactor)
  i4652.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4653[14], i4652.stencilRef)
  i4652.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4653[15], i4652.stencilReadMask)
  i4652.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4653[16], i4652.stencilWriteMask)
  i4652.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i4653[17], i4652.stencilOp)
  i4652.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i4653[18], i4652.stencilOpFront)
  i4652.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i4653[19], i4652.stencilOpBack)
  var i4655 = i4653[20]
  var i4654 = []
  for(var i = 0; i < i4655.length; i += 1) {
    i4654.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i4655[i + 0]) );
  }
  i4652.tags = i4654
  var i4657 = i4653[21]
  var i4656 = []
  for(var i = 0; i < i4657.length; i += 1) {
    i4656.push( i4657[i + 0] );
  }
  i4652.passDefinedKeywords = i4656
  var i4659 = i4653[22]
  var i4658 = []
  for(var i = 0; i < i4659.length; i += 1) {
    i4658.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i4659[i + 0]) );
  }
  i4652.passDefinedKeywordGroups = i4658
  var i4661 = i4653[23]
  var i4660 = []
  for(var i = 0; i < i4661.length; i += 1) {
    i4660.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i4661[i + 0]) );
  }
  i4652.variants = i4660
  var i4663 = i4653[24]
  var i4662 = []
  for(var i = 0; i < i4663.length; i += 1) {
    i4662.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i4663[i + 0]) );
  }
  i4652.excludedVariants = i4662
  i4652.hasDepthReader = !!i4653[25]
  return i4652
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i4664 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i4665 = data
  i4664.val = i4665[0]
  i4664.name = i4665[1]
  return i4664
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i4666 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i4667 = data
  i4666.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4667[0], i4666.src)
  i4666.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4667[1], i4666.dst)
  i4666.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4667[2], i4666.op)
  return i4666
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i4668 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i4669 = data
  i4668.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4669[0], i4668.pass)
  i4668.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4669[1], i4668.fail)
  i4668.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4669[2], i4668.zFail)
  i4668.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4669[3], i4668.comp)
  return i4668
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i4672 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i4673 = data
  i4672.name = i4673[0]
  i4672.value = i4673[1]
  return i4672
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i4676 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i4677 = data
  var i4679 = i4677[0]
  var i4678 = []
  for(var i = 0; i < i4679.length; i += 1) {
    i4678.push( i4679[i + 0] );
  }
  i4676.keywords = i4678
  i4676.hasDiscard = !!i4677[1]
  return i4676
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i4682 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i4683 = data
  i4682.passId = i4683[0]
  i4682.subShaderIndex = i4683[1]
  var i4685 = i4683[2]
  var i4684 = []
  for(var i = 0; i < i4685.length; i += 1) {
    i4684.push( i4685[i + 0] );
  }
  i4682.keywords = i4684
  i4682.vertexProgram = i4683[3]
  i4682.fragmentProgram = i4683[4]
  i4682.exportedForWebGl2 = !!i4683[5]
  i4682.readDepth = !!i4683[6]
  return i4682
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i4688 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i4689 = data
  request.r(i4689[0], i4689[1], 0, i4688, 'shader')
  i4688.pass = i4689[2]
  return i4688
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i4692 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i4693 = data
  i4692.name = i4693[0]
  i4692.type = i4693[1]
  i4692.value = new pc.Vec4( i4693[2], i4693[3], i4693[4], i4693[5] )
  i4692.textureValue = i4693[6]
  i4692.shaderPropertyFlag = i4693[7]
  return i4692
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i4694 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i4695 = data
  i4694.name = i4695[0]
  request.r(i4695[1], i4695[2], 0, i4694, 'texture')
  i4694.aabb = i4695[3]
  i4694.vertices = i4695[4]
  i4694.triangles = i4695[5]
  i4694.textureRect = UnityEngine.Rect.MinMaxRect(i4695[6], i4695[7], i4695[8], i4695[9])
  i4694.packedRect = UnityEngine.Rect.MinMaxRect(i4695[10], i4695[11], i4695[12], i4695[13])
  i4694.border = new pc.Vec4( i4695[14], i4695[15], i4695[16], i4695[17] )
  i4694.transparency = i4695[18]
  i4694.bounds = i4695[19]
  i4694.pixelsPerUnit = i4695[20]
  i4694.textureWidth = i4695[21]
  i4694.textureHeight = i4695[22]
  i4694.nativeSize = new pc.Vec2( i4695[23], i4695[24] )
  i4694.pivot = new pc.Vec2( i4695[25], i4695[26] )
  i4694.textureRectOffset = new pc.Vec2( i4695[27], i4695[28] )
  return i4694
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i4696 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i4697 = data
  i4696.name = i4697[0]
  return i4696
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i4698 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i4699 = data
  i4698.name = i4699[0]
  i4698.wrapMode = i4699[1]
  i4698.isLooping = !!i4699[2]
  i4698.length = i4699[3]
  var i4701 = i4699[4]
  var i4700 = []
  for(var i = 0; i < i4701.length; i += 1) {
    i4700.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i4701[i + 0]) );
  }
  i4698.curves = i4700
  var i4703 = i4699[5]
  var i4702 = []
  for(var i = 0; i < i4703.length; i += 1) {
    i4702.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i4703[i + 0]) );
  }
  i4698.events = i4702
  i4698.halfPrecision = !!i4699[6]
  i4698._frameRate = i4699[7]
  i4698.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i4699[8], i4698.localBounds)
  i4698.hasMuscleCurves = !!i4699[9]
  var i4705 = i4699[10]
  var i4704 = []
  for(var i = 0; i < i4705.length; i += 1) {
    i4704.push( i4705[i + 0] );
  }
  i4698.clipMuscleConstant = i4704
  i4698.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i4699[11], i4698.clipBindingConstant)
  return i4698
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i4708 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i4709 = data
  i4708.path = i4709[0]
  i4708.hash = i4709[1]
  i4708.componentType = i4709[2]
  i4708.property = i4709[3]
  i4708.keys = i4709[4]
  var i4711 = i4709[5]
  var i4710 = []
  for(var i = 0; i < i4711.length; i += 1) {
    i4710.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i4711[i + 0]) );
  }
  i4708.objectReferenceKeys = i4710
  return i4708
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i4714 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i4715 = data
  i4714.time = i4715[0]
  request.r(i4715[1], i4715[2], 0, i4714, 'value')
  return i4714
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i4718 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i4719 = data
  i4718.functionName = i4719[0]
  i4718.floatParameter = i4719[1]
  i4718.intParameter = i4719[2]
  i4718.stringParameter = i4719[3]
  request.r(i4719[4], i4719[5], 0, i4718, 'objectReferenceParameter')
  i4718.time = i4719[6]
  return i4718
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i4720 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i4721 = data
  i4720.center = new pc.Vec3( i4721[0], i4721[1], i4721[2] )
  i4720.extends = new pc.Vec3( i4721[3], i4721[4], i4721[5] )
  return i4720
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i4724 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i4725 = data
  var i4727 = i4725[0]
  var i4726 = []
  for(var i = 0; i < i4727.length; i += 1) {
    i4726.push( i4727[i + 0] );
  }
  i4724.genericBindings = i4726
  var i4729 = i4725[1]
  var i4728 = []
  for(var i = 0; i < i4729.length; i += 1) {
    i4728.push( i4729[i + 0] );
  }
  i4724.pptrCurveMapping = i4728
  return i4724
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i4730 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i4731 = data
  i4730.name = i4731[0]
  i4730.ascent = i4731[1]
  i4730.originalLineHeight = i4731[2]
  i4730.fontSize = i4731[3]
  var i4733 = i4731[4]
  var i4732 = []
  for(var i = 0; i < i4733.length; i += 1) {
    i4732.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i4733[i + 0]) );
  }
  i4730.characterInfo = i4732
  request.r(i4731[5], i4731[6], 0, i4730, 'texture')
  i4730.originalFontSize = i4731[7]
  return i4730
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i4736 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i4737 = data
  i4736.index = i4737[0]
  i4736.advance = i4737[1]
  i4736.bearing = i4737[2]
  i4736.glyphWidth = i4737[3]
  i4736.glyphHeight = i4737[4]
  i4736.minX = i4737[5]
  i4736.maxX = i4737[6]
  i4736.minY = i4737[7]
  i4736.maxY = i4737[8]
  i4736.uvBottomLeftX = i4737[9]
  i4736.uvBottomLeftY = i4737[10]
  i4736.uvBottomRightX = i4737[11]
  i4736.uvBottomRightY = i4737[12]
  i4736.uvTopLeftX = i4737[13]
  i4736.uvTopLeftY = i4737[14]
  i4736.uvTopRightX = i4737[15]
  i4736.uvTopRightY = i4737[16]
  return i4736
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i4738 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i4739 = data
  i4738.name = i4739[0]
  var i4741 = i4739[1]
  var i4740 = []
  for(var i = 0; i < i4741.length; i += 1) {
    i4740.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i4741[i + 0]) );
  }
  i4738.layers = i4740
  var i4743 = i4739[2]
  var i4742 = []
  for(var i = 0; i < i4743.length; i += 1) {
    i4742.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i4743[i + 0]) );
  }
  i4738.parameters = i4742
  i4738.animationClips = i4739[3]
  i4738.avatarUnsupported = i4739[4]
  return i4738
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i4746 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i4747 = data
  i4746.name = i4747[0]
  i4746.defaultWeight = i4747[1]
  i4746.blendingMode = i4747[2]
  i4746.avatarMask = i4747[3]
  i4746.syncedLayerIndex = i4747[4]
  i4746.syncedLayerAffectsTiming = !!i4747[5]
  i4746.syncedLayers = i4747[6]
  i4746.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i4747[7], i4746.stateMachine)
  return i4746
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i4748 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i4749 = data
  i4748.id = i4749[0]
  i4748.name = i4749[1]
  i4748.path = i4749[2]
  var i4751 = i4749[3]
  var i4750 = []
  for(var i = 0; i < i4751.length; i += 1) {
    i4750.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i4751[i + 0]) );
  }
  i4748.states = i4750
  var i4753 = i4749[4]
  var i4752 = []
  for(var i = 0; i < i4753.length; i += 1) {
    i4752.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i4753[i + 0]) );
  }
  i4748.machines = i4752
  var i4755 = i4749[5]
  var i4754 = []
  for(var i = 0; i < i4755.length; i += 1) {
    i4754.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i4755[i + 0]) );
  }
  i4748.entryStateTransitions = i4754
  var i4757 = i4749[6]
  var i4756 = []
  for(var i = 0; i < i4757.length; i += 1) {
    i4756.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i4757[i + 0]) );
  }
  i4748.exitStateTransitions = i4756
  var i4759 = i4749[7]
  var i4758 = []
  for(var i = 0; i < i4759.length; i += 1) {
    i4758.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i4759[i + 0]) );
  }
  i4748.anyStateTransitions = i4758
  i4748.defaultStateId = i4749[8]
  return i4748
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i4762 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i4763 = data
  i4762.id = i4763[0]
  i4762.name = i4763[1]
  i4762.cycleOffset = i4763[2]
  i4762.cycleOffsetParameter = i4763[3]
  i4762.cycleOffsetParameterActive = !!i4763[4]
  i4762.mirror = !!i4763[5]
  i4762.mirrorParameter = i4763[6]
  i4762.mirrorParameterActive = !!i4763[7]
  i4762.motionId = i4763[8]
  i4762.nameHash = i4763[9]
  i4762.fullPathHash = i4763[10]
  i4762.speed = i4763[11]
  i4762.speedParameter = i4763[12]
  i4762.speedParameterActive = !!i4763[13]
  i4762.tag = i4763[14]
  i4762.tagHash = i4763[15]
  i4762.writeDefaultValues = !!i4763[16]
  var i4765 = i4763[17]
  var i4764 = []
  for(var i = 0; i < i4765.length; i += 2) {
  request.r(i4765[i + 0], i4765[i + 1], 2, i4764, '')
  }
  i4762.behaviours = i4764
  var i4767 = i4763[18]
  var i4766 = []
  for(var i = 0; i < i4767.length; i += 1) {
    i4766.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i4767[i + 0]) );
  }
  i4762.transitions = i4766
  return i4762
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i4772 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i4773 = data
  i4772.fullPath = i4773[0]
  i4772.canTransitionToSelf = !!i4773[1]
  i4772.duration = i4773[2]
  i4772.exitTime = i4773[3]
  i4772.hasExitTime = !!i4773[4]
  i4772.hasFixedDuration = !!i4773[5]
  i4772.interruptionSource = i4773[6]
  i4772.offset = i4773[7]
  i4772.orderedInterruption = !!i4773[8]
  i4772.destinationStateId = i4773[9]
  i4772.isExit = !!i4773[10]
  i4772.mute = !!i4773[11]
  i4772.solo = !!i4773[12]
  var i4775 = i4773[13]
  var i4774 = []
  for(var i = 0; i < i4775.length; i += 1) {
    i4774.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i4775[i + 0]) );
  }
  i4772.conditions = i4774
  return i4772
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i4780 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i4781 = data
  i4780.destinationStateId = i4781[0]
  i4780.isExit = !!i4781[1]
  i4780.mute = !!i4781[2]
  i4780.solo = !!i4781[3]
  var i4783 = i4781[4]
  var i4782 = []
  for(var i = 0; i < i4783.length; i += 1) {
    i4782.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i4783[i + 0]) );
  }
  i4780.conditions = i4782
  return i4780
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i4786 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i4787 = data
  i4786.mode = i4787[0]
  i4786.parameter = i4787[1]
  i4786.threshold = i4787[2]
  return i4786
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i4790 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i4791 = data
  i4790.defaultBool = !!i4791[0]
  i4790.defaultFloat = i4791[1]
  i4790.defaultInt = i4791[2]
  i4790.name = i4791[3]
  i4790.nameHash = i4791[4]
  i4790.type = i4791[5]
  return i4790
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i4792 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i4793 = data
  i4792.name = i4793[0]
  i4792.bytes64 = i4793[1]
  i4792.data = i4793[2]
  return i4792
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i4794 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i4795 = data
  i4794.useSafeMode = !!i4795[0]
  i4794.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i4795[1], i4794.safeModeOptions)
  i4794.timeScale = i4795[2]
  i4794.unscaledTimeScale = i4795[3]
  i4794.useSmoothDeltaTime = !!i4795[4]
  i4794.maxSmoothUnscaledTime = i4795[5]
  i4794.rewindCallbackMode = i4795[6]
  i4794.showUnityEditorReport = !!i4795[7]
  i4794.logBehaviour = i4795[8]
  i4794.drawGizmos = !!i4795[9]
  i4794.defaultRecyclable = !!i4795[10]
  i4794.defaultAutoPlay = i4795[11]
  i4794.defaultUpdateType = i4795[12]
  i4794.defaultTimeScaleIndependent = !!i4795[13]
  i4794.defaultEaseType = i4795[14]
  i4794.defaultEaseOvershootOrAmplitude = i4795[15]
  i4794.defaultEasePeriod = i4795[16]
  i4794.defaultAutoKill = !!i4795[17]
  i4794.defaultLoopType = i4795[18]
  i4794.debugMode = !!i4795[19]
  i4794.debugStoreTargetId = !!i4795[20]
  i4794.showPreviewPanel = !!i4795[21]
  i4794.storeSettingsLocation = i4795[22]
  i4794.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i4795[23], i4794.modules)
  i4794.createASMDEF = !!i4795[24]
  i4794.showPlayingTweens = !!i4795[25]
  i4794.showPausedTweens = !!i4795[26]
  return i4794
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i4796 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i4797 = data
  i4796.logBehaviour = i4797[0]
  i4796.nestedTweenFailureBehaviour = i4797[1]
  return i4796
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i4798 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i4799 = data
  i4798.showPanel = !!i4799[0]
  i4798.audioEnabled = !!i4799[1]
  i4798.physicsEnabled = !!i4799[2]
  i4798.physics2DEnabled = !!i4799[3]
  i4798.spriteEnabled = !!i4799[4]
  i4798.uiEnabled = !!i4799[5]
  i4798.uiToolkitEnabled = !!i4799[6]
  i4798.textMeshProEnabled = !!i4799[7]
  i4798.tk2DEnabled = !!i4799[8]
  i4798.deAudioEnabled = !!i4799[9]
  i4798.deUnityExtendedEnabled = !!i4799[10]
  i4798.epoOutlineEnabled = !!i4799[11]
  return i4798
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i4800 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i4801 = data
  i4800.normalStyle = i4801[0]
  i4800.normalSpacingOffset = i4801[1]
  i4800.boldStyle = i4801[2]
  i4800.boldSpacing = i4801[3]
  i4800.italicStyle = i4801[4]
  i4800.tabSize = i4801[5]
  request.r(i4801[6], i4801[7], 0, i4800, 'atlas')
  i4800.m_SourceFontFileGUID = i4801[8]
  i4800.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i4801[9], i4800.m_CreationSettings)
  request.r(i4801[10], i4801[11], 0, i4800, 'm_SourceFontFile')
  i4800.m_SourceFontFilePath = i4801[12]
  i4800.m_AtlasPopulationMode = i4801[13]
  i4800.InternalDynamicOS = !!i4801[14]
  var i4803 = i4801[15]
  var i4802 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i4803.length; i += 1) {
    i4802.add(request.d('UnityEngine.TextCore.Glyph', i4803[i + 0]));
  }
  i4800.m_GlyphTable = i4802
  var i4805 = i4801[16]
  var i4804 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i4805.length; i += 1) {
    i4804.add(request.d('TMPro.TMP_Character', i4805[i + 0]));
  }
  i4800.m_CharacterTable = i4804
  var i4807 = i4801[17]
  var i4806 = []
  for(var i = 0; i < i4807.length; i += 2) {
  request.r(i4807[i + 0], i4807[i + 1], 2, i4806, '')
  }
  i4800.m_AtlasTextures = i4806
  i4800.m_AtlasTextureIndex = i4801[18]
  i4800.m_IsMultiAtlasTexturesEnabled = !!i4801[19]
  i4800.m_GetFontFeatures = !!i4801[20]
  i4800.m_ClearDynamicDataOnBuild = !!i4801[21]
  i4800.m_AtlasWidth = i4801[22]
  i4800.m_AtlasHeight = i4801[23]
  i4800.m_AtlasPadding = i4801[24]
  i4800.m_AtlasRenderMode = i4801[25]
  var i4809 = i4801[26]
  var i4808 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i4809.length; i += 1) {
    i4808.add(request.d('UnityEngine.TextCore.GlyphRect', i4809[i + 0]));
  }
  i4800.m_UsedGlyphRects = i4808
  var i4811 = i4801[27]
  var i4810 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i4811.length; i += 1) {
    i4810.add(request.d('UnityEngine.TextCore.GlyphRect', i4811[i + 0]));
  }
  i4800.m_FreeGlyphRects = i4810
  i4800.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i4801[28], i4800.m_FontFeatureTable)
  i4800.m_ShouldReimportFontFeatures = !!i4801[29]
  var i4813 = i4801[30]
  var i4812 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i4813.length; i += 2) {
  request.r(i4813[i + 0], i4813[i + 1], 1, i4812, '')
  }
  i4800.m_FallbackFontAssetTable = i4812
  var i4815 = i4801[31]
  var i4814 = []
  for(var i = 0; i < i4815.length; i += 1) {
    i4814.push( request.d('TMPro.TMP_FontWeightPair', i4815[i + 0]) );
  }
  i4800.m_FontWeightTable = i4814
  var i4817 = i4801[32]
  var i4816 = []
  for(var i = 0; i < i4817.length; i += 1) {
    i4816.push( request.d('TMPro.TMP_FontWeightPair', i4817[i + 0]) );
  }
  i4800.fontWeights = i4816
  i4800.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i4801[33], i4800.m_fontInfo)
  var i4819 = i4801[34]
  var i4818 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i4819.length; i += 1) {
    i4818.add(request.d('TMPro.TMP_Glyph', i4819[i + 0]));
  }
  i4800.m_glyphInfoList = i4818
  i4800.m_KerningTable = request.d('TMPro.KerningTable', i4801[35], i4800.m_KerningTable)
  var i4821 = i4801[36]
  var i4820 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i4821.length; i += 2) {
  request.r(i4821[i + 0], i4821[i + 1], 1, i4820, '')
  }
  i4800.fallbackFontAssets = i4820
  i4800.m_Version = i4801[37]
  i4800.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i4801[38], i4800.m_FaceInfo)
  request.r(i4801[39], i4801[40], 0, i4800, 'm_Material')
  return i4800
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i4822 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i4823 = data
  i4822.sourceFontFileName = i4823[0]
  i4822.sourceFontFileGUID = i4823[1]
  i4822.faceIndex = i4823[2]
  i4822.pointSizeSamplingMode = i4823[3]
  i4822.pointSize = i4823[4]
  i4822.padding = i4823[5]
  i4822.paddingMode = i4823[6]
  i4822.packingMode = i4823[7]
  i4822.atlasWidth = i4823[8]
  i4822.atlasHeight = i4823[9]
  i4822.characterSetSelectionMode = i4823[10]
  i4822.characterSequence = i4823[11]
  i4822.referencedFontAssetGUID = i4823[12]
  i4822.referencedTextAssetGUID = i4823[13]
  i4822.fontStyle = i4823[14]
  i4822.fontStyleModifier = i4823[15]
  i4822.renderMode = i4823[16]
  i4822.includeFontFeatures = !!i4823[17]
  return i4822
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i4826 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i4827 = data
  i4826.m_Index = i4827[0]
  i4826.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i4827[1], i4826.m_Metrics)
  i4826.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i4827[2], i4826.m_GlyphRect)
  i4826.m_Scale = i4827[3]
  i4826.m_AtlasIndex = i4827[4]
  i4826.m_ClassDefinitionType = i4827[5]
  return i4826
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i4830 = root || request.c( 'TMPro.TMP_Character' )
  var i4831 = data
  i4830.m_ElementType = i4831[0]
  i4830.m_Unicode = i4831[1]
  i4830.m_GlyphIndex = i4831[2]
  i4830.m_Scale = i4831[3]
  return i4830
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i4836 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i4837 = data
  i4836.m_X = i4837[0]
  i4836.m_Y = i4837[1]
  i4836.m_Width = i4837[2]
  i4836.m_Height = i4837[3]
  return i4836
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i4838 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i4839 = data
  var i4841 = i4839[0]
  var i4840 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i4841.length; i += 1) {
    i4840.add(request.d('TMPro.MultipleSubstitutionRecord', i4841[i + 0]));
  }
  i4838.m_MultipleSubstitutionRecords = i4840
  var i4843 = i4839[1]
  var i4842 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i4843.length; i += 1) {
    i4842.add(request.d('TMPro.LigatureSubstitutionRecord', i4843[i + 0]));
  }
  i4838.m_LigatureSubstitutionRecords = i4842
  var i4845 = i4839[2]
  var i4844 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i4845.length; i += 1) {
    i4844.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i4845[i + 0]));
  }
  i4838.m_GlyphPairAdjustmentRecords = i4844
  var i4847 = i4839[3]
  var i4846 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i4847.length; i += 1) {
    i4846.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i4847[i + 0]));
  }
  i4838.m_MarkToBaseAdjustmentRecords = i4846
  var i4849 = i4839[4]
  var i4848 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i4849.length; i += 1) {
    i4848.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i4849[i + 0]));
  }
  i4838.m_MarkToMarkAdjustmentRecords = i4848
  return i4838
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i4852 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i4853 = data
  i4852.m_TargetGlyphID = i4853[0]
  i4852.m_SubstituteGlyphIDs = i4853[1]
  return i4852
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i4856 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i4857 = data
  i4856.m_ComponentGlyphIDs = i4857[0]
  i4856.m_LigatureGlyphID = i4857[1]
  return i4856
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i4860 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i4861 = data
  i4860.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i4861[0], i4860.m_FirstAdjustmentRecord)
  i4860.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i4861[1], i4860.m_SecondAdjustmentRecord)
  i4860.m_FeatureLookupFlags = i4861[2]
  return i4860
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i4862 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i4863 = data
  i4862.m_GlyphIndex = i4863[0]
  i4862.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i4863[1], i4862.m_GlyphValueRecord)
  return i4862
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i4864 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i4865 = data
  i4864.m_XPlacement = i4865[0]
  i4864.m_YPlacement = i4865[1]
  i4864.m_XAdvance = i4865[2]
  i4864.m_YAdvance = i4865[3]
  return i4864
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i4868 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i4869 = data
  i4868.m_BaseGlyphID = i4869[0]
  i4868.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i4869[1], i4868.m_BaseGlyphAnchorPoint)
  i4868.m_MarkGlyphID = i4869[2]
  i4868.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i4869[3], i4868.m_MarkPositionAdjustment)
  return i4868
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i4872 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i4873 = data
  i4872.m_BaseMarkGlyphID = i4873[0]
  i4872.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i4873[1], i4872.m_BaseMarkGlyphAnchorPoint)
  i4872.m_CombiningMarkGlyphID = i4873[2]
  i4872.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i4873[3], i4872.m_CombiningMarkPositionAdjustment)
  return i4872
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i4878 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i4879 = data
  request.r(i4879[0], i4879[1], 0, i4878, 'regularTypeface')
  request.r(i4879[2], i4879[3], 0, i4878, 'italicTypeface')
  return i4878
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i4880 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i4881 = data
  i4880.Name = i4881[0]
  i4880.PointSize = i4881[1]
  i4880.Scale = i4881[2]
  i4880.CharacterCount = i4881[3]
  i4880.LineHeight = i4881[4]
  i4880.Baseline = i4881[5]
  i4880.Ascender = i4881[6]
  i4880.CapHeight = i4881[7]
  i4880.Descender = i4881[8]
  i4880.CenterLine = i4881[9]
  i4880.SuperscriptOffset = i4881[10]
  i4880.SubscriptOffset = i4881[11]
  i4880.SubSize = i4881[12]
  i4880.Underline = i4881[13]
  i4880.UnderlineThickness = i4881[14]
  i4880.strikethrough = i4881[15]
  i4880.strikethroughThickness = i4881[16]
  i4880.TabWidth = i4881[17]
  i4880.Padding = i4881[18]
  i4880.AtlasWidth = i4881[19]
  i4880.AtlasHeight = i4881[20]
  return i4880
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i4884 = root || request.c( 'TMPro.TMP_Glyph' )
  var i4885 = data
  i4884.id = i4885[0]
  i4884.x = i4885[1]
  i4884.y = i4885[2]
  i4884.width = i4885[3]
  i4884.height = i4885[4]
  i4884.xOffset = i4885[5]
  i4884.yOffset = i4885[6]
  i4884.xAdvance = i4885[7]
  i4884.scale = i4885[8]
  return i4884
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i4886 = root || request.c( 'TMPro.KerningTable' )
  var i4887 = data
  var i4889 = i4887[0]
  var i4888 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i4889.length; i += 1) {
    i4888.add(request.d('TMPro.KerningPair', i4889[i + 0]));
  }
  i4886.kerningPairs = i4888
  return i4886
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i4892 = root || request.c( 'TMPro.KerningPair' )
  var i4893 = data
  i4892.xOffset = i4893[0]
  i4892.m_FirstGlyph = i4893[1]
  i4892.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i4893[2], i4892.m_FirstGlyphAdjustments)
  i4892.m_SecondGlyph = i4893[3]
  i4892.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i4893[4], i4892.m_SecondGlyphAdjustments)
  i4892.m_IgnoreSpacingAdjustments = !!i4893[5]
  return i4892
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i4894 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i4895 = data
  i4894.m_FaceIndex = i4895[0]
  i4894.m_FamilyName = i4895[1]
  i4894.m_StyleName = i4895[2]
  i4894.m_PointSize = i4895[3]
  i4894.m_Scale = i4895[4]
  i4894.m_UnitsPerEM = i4895[5]
  i4894.m_LineHeight = i4895[6]
  i4894.m_AscentLine = i4895[7]
  i4894.m_CapLine = i4895[8]
  i4894.m_MeanLine = i4895[9]
  i4894.m_Baseline = i4895[10]
  i4894.m_DescentLine = i4895[11]
  i4894.m_SuperscriptOffset = i4895[12]
  i4894.m_SuperscriptSize = i4895[13]
  i4894.m_SubscriptOffset = i4895[14]
  i4894.m_SubscriptSize = i4895[15]
  i4894.m_UnderlineOffset = i4895[16]
  i4894.m_UnderlineThickness = i4895[17]
  i4894.m_StrikethroughOffset = i4895[18]
  i4894.m_StrikethroughThickness = i4895[19]
  i4894.m_TabWidth = i4895[20]
  return i4894
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i4896 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i4897 = data
  i4896.m_Width = i4897[0]
  i4896.m_Height = i4897[1]
  i4896.m_HorizontalBearingX = i4897[2]
  i4896.m_HorizontalBearingY = i4897[3]
  i4896.m_HorizontalAdvance = i4897[4]
  return i4896
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i4898 = root || request.c( 'TMPro.TMP_Settings' )
  var i4899 = data
  i4898.assetVersion = i4899[0]
  i4898.m_TextWrappingMode = i4899[1]
  i4898.m_enableKerning = !!i4899[2]
  var i4901 = i4899[3]
  var i4900 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i4901.length; i += 1) {
    i4900.add(i4901[i + 0]);
  }
  i4898.m_ActiveFontFeatures = i4900
  i4898.m_enableExtraPadding = !!i4899[4]
  i4898.m_enableTintAllSprites = !!i4899[5]
  i4898.m_enableParseEscapeCharacters = !!i4899[6]
  i4898.m_EnableRaycastTarget = !!i4899[7]
  i4898.m_GetFontFeaturesAtRuntime = !!i4899[8]
  i4898.m_missingGlyphCharacter = i4899[9]
  i4898.m_ClearDynamicDataOnBuild = !!i4899[10]
  i4898.m_warningsDisabled = !!i4899[11]
  request.r(i4899[12], i4899[13], 0, i4898, 'm_defaultFontAsset')
  i4898.m_defaultFontAssetPath = i4899[14]
  i4898.m_defaultFontSize = i4899[15]
  i4898.m_defaultAutoSizeMinRatio = i4899[16]
  i4898.m_defaultAutoSizeMaxRatio = i4899[17]
  i4898.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i4899[18], i4899[19] )
  i4898.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i4899[20], i4899[21] )
  i4898.m_autoSizeTextContainer = !!i4899[22]
  i4898.m_IsTextObjectScaleStatic = !!i4899[23]
  var i4903 = i4899[24]
  var i4902 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i4903.length; i += 2) {
  request.r(i4903[i + 0], i4903[i + 1], 1, i4902, '')
  }
  i4898.m_fallbackFontAssets = i4902
  i4898.m_matchMaterialPreset = !!i4899[25]
  i4898.m_HideSubTextObjects = !!i4899[26]
  request.r(i4899[27], i4899[28], 0, i4898, 'm_defaultSpriteAsset')
  i4898.m_defaultSpriteAssetPath = i4899[29]
  i4898.m_enableEmojiSupport = !!i4899[30]
  i4898.m_MissingCharacterSpriteUnicode = i4899[31]
  var i4905 = i4899[32]
  var i4904 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i4905.length; i += 2) {
  request.r(i4905[i + 0], i4905[i + 1], 1, i4904, '')
  }
  i4898.m_EmojiFallbackTextAssets = i4904
  i4898.m_defaultColorGradientPresetsPath = i4899[33]
  request.r(i4899[34], i4899[35], 0, i4898, 'm_defaultStyleSheet')
  i4898.m_StyleSheetsResourcePath = i4899[36]
  request.r(i4899[37], i4899[38], 0, i4898, 'm_leadingCharacters')
  request.r(i4899[39], i4899[40], 0, i4898, 'm_followingCharacters')
  i4898.m_UseModernHangulLineBreakingRules = !!i4899[41]
  return i4898
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i4910 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i4911 = data
  request.r(i4911[0], i4911[1], 0, i4910, 'spriteSheet')
  var i4913 = i4911[2]
  var i4912 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i4913.length; i += 1) {
    i4912.add(request.d('TMPro.TMP_Sprite', i4913[i + 0]));
  }
  i4910.spriteInfoList = i4912
  var i4915 = i4911[3]
  var i4914 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i4915.length; i += 2) {
  request.r(i4915[i + 0], i4915[i + 1], 1, i4914, '')
  }
  i4910.fallbackSpriteAssets = i4914
  var i4917 = i4911[4]
  var i4916 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i4917.length; i += 1) {
    i4916.add(request.d('TMPro.TMP_SpriteCharacter', i4917[i + 0]));
  }
  i4910.m_SpriteCharacterTable = i4916
  var i4919 = i4911[5]
  var i4918 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i4919.length; i += 1) {
    i4918.add(request.d('TMPro.TMP_SpriteGlyph', i4919[i + 0]));
  }
  i4910.m_GlyphTable = i4918
  i4910.m_Version = i4911[6]
  i4910.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i4911[7], i4910.m_FaceInfo)
  request.r(i4911[8], i4911[9], 0, i4910, 'm_Material')
  return i4910
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i4922 = root || request.c( 'TMPro.TMP_Sprite' )
  var i4923 = data
  i4922.name = i4923[0]
  i4922.hashCode = i4923[1]
  i4922.unicode = i4923[2]
  i4922.pivot = new pc.Vec2( i4923[3], i4923[4] )
  request.r(i4923[5], i4923[6], 0, i4922, 'sprite')
  i4922.id = i4923[7]
  i4922.x = i4923[8]
  i4922.y = i4923[9]
  i4922.width = i4923[10]
  i4922.height = i4923[11]
  i4922.xOffset = i4923[12]
  i4922.yOffset = i4923[13]
  i4922.xAdvance = i4923[14]
  i4922.scale = i4923[15]
  return i4922
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i4928 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i4929 = data
  i4928.m_Name = i4929[0]
  i4928.m_ElementType = i4929[1]
  i4928.m_Unicode = i4929[2]
  i4928.m_GlyphIndex = i4929[3]
  i4928.m_Scale = i4929[4]
  return i4928
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i4932 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i4933 = data
  request.r(i4933[0], i4933[1], 0, i4932, 'sprite')
  i4932.m_Index = i4933[2]
  i4932.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i4933[3], i4932.m_Metrics)
  i4932.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i4933[4], i4932.m_GlyphRect)
  i4932.m_Scale = i4933[5]
  i4932.m_AtlasIndex = i4933[6]
  i4932.m_ClassDefinitionType = i4933[7]
  return i4932
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i4934 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i4935 = data
  var i4937 = i4935[0]
  var i4936 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i4937.length; i += 1) {
    i4936.add(request.d('TMPro.TMP_Style', i4937[i + 0]));
  }
  i4934.m_StyleList = i4936
  return i4934
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i4940 = root || request.c( 'TMPro.TMP_Style' )
  var i4941 = data
  i4940.m_Name = i4941[0]
  i4940.m_HashCode = i4941[1]
  i4940.m_OpeningDefinition = i4941[2]
  i4940.m_ClosingDefinition = i4941[3]
  i4940.m_OpeningTagArray = i4941[4]
  i4940.m_ClosingTagArray = i4941[5]
  return i4940
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i4942 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i4943 = data
  var i4945 = i4943[0]
  var i4944 = []
  for(var i = 0; i < i4945.length; i += 1) {
    i4944.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i4945[i + 0]) );
  }
  i4942.files = i4944
  i4942.componentToPrefabIds = i4943[1]
  return i4942
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i4948 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i4949 = data
  i4948.path = i4949[0]
  request.r(i4949[1], i4949[2], 0, i4948, 'unityObject')
  return i4948
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i4950 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i4951 = data
  var i4953 = i4951[0]
  var i4952 = []
  for(var i = 0; i < i4953.length; i += 1) {
    i4952.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i4953[i + 0]) );
  }
  i4950.scriptsExecutionOrder = i4952
  var i4955 = i4951[1]
  var i4954 = []
  for(var i = 0; i < i4955.length; i += 1) {
    i4954.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i4955[i + 0]) );
  }
  i4950.sortingLayers = i4954
  var i4957 = i4951[2]
  var i4956 = []
  for(var i = 0; i < i4957.length; i += 1) {
    i4956.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i4957[i + 0]) );
  }
  i4950.cullingLayers = i4956
  i4950.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i4951[3], i4950.timeSettings)
  i4950.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i4951[4], i4950.physicsSettings)
  i4950.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i4951[5], i4950.physics2DSettings)
  i4950.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i4951[6], i4950.qualitySettings)
  i4950.enableRealtimeShadows = !!i4951[7]
  i4950.enableAutoInstancing = !!i4951[8]
  i4950.enableStaticBatching = !!i4951[9]
  i4950.enableDynamicBatching = !!i4951[10]
  i4950.lightmapEncodingQuality = i4951[11]
  i4950.desiredColorSpace = i4951[12]
  var i4959 = i4951[13]
  var i4958 = []
  for(var i = 0; i < i4959.length; i += 1) {
    i4958.push( i4959[i + 0] );
  }
  i4950.allTags = i4958
  return i4950
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i4962 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i4963 = data
  i4962.name = i4963[0]
  i4962.value = i4963[1]
  return i4962
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i4966 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i4967 = data
  i4966.id = i4967[0]
  i4966.name = i4967[1]
  i4966.value = i4967[2]
  return i4966
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i4970 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i4971 = data
  i4970.id = i4971[0]
  i4970.name = i4971[1]
  return i4970
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i4972 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i4973 = data
  i4972.fixedDeltaTime = i4973[0]
  i4972.maximumDeltaTime = i4973[1]
  i4972.timeScale = i4973[2]
  i4972.maximumParticleTimestep = i4973[3]
  return i4972
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i4974 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i4975 = data
  i4974.gravity = new pc.Vec3( i4975[0], i4975[1], i4975[2] )
  i4974.defaultSolverIterations = i4975[3]
  i4974.bounceThreshold = i4975[4]
  i4974.autoSyncTransforms = !!i4975[5]
  i4974.autoSimulation = !!i4975[6]
  var i4977 = i4975[7]
  var i4976 = []
  for(var i = 0; i < i4977.length; i += 1) {
    i4976.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i4977[i + 0]) );
  }
  i4974.collisionMatrix = i4976
  return i4974
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i4980 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i4981 = data
  i4980.enabled = !!i4981[0]
  i4980.layerId = i4981[1]
  i4980.otherLayerId = i4981[2]
  return i4980
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i4982 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i4983 = data
  request.r(i4983[0], i4983[1], 0, i4982, 'material')
  i4982.gravity = new pc.Vec2( i4983[2], i4983[3] )
  i4982.positionIterations = i4983[4]
  i4982.velocityIterations = i4983[5]
  i4982.velocityThreshold = i4983[6]
  i4982.maxLinearCorrection = i4983[7]
  i4982.maxAngularCorrection = i4983[8]
  i4982.maxTranslationSpeed = i4983[9]
  i4982.maxRotationSpeed = i4983[10]
  i4982.baumgarteScale = i4983[11]
  i4982.baumgarteTOIScale = i4983[12]
  i4982.timeToSleep = i4983[13]
  i4982.linearSleepTolerance = i4983[14]
  i4982.angularSleepTolerance = i4983[15]
  i4982.defaultContactOffset = i4983[16]
  i4982.autoSimulation = !!i4983[17]
  i4982.queriesHitTriggers = !!i4983[18]
  i4982.queriesStartInColliders = !!i4983[19]
  i4982.callbacksOnDisable = !!i4983[20]
  i4982.reuseCollisionCallbacks = !!i4983[21]
  i4982.autoSyncTransforms = !!i4983[22]
  var i4985 = i4983[23]
  var i4984 = []
  for(var i = 0; i < i4985.length; i += 1) {
    i4984.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i4985[i + 0]) );
  }
  i4982.collisionMatrix = i4984
  return i4982
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i4988 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i4989 = data
  i4988.enabled = !!i4989[0]
  i4988.layerId = i4989[1]
  i4988.otherLayerId = i4989[2]
  return i4988
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i4990 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i4991 = data
  var i4993 = i4991[0]
  var i4992 = []
  for(var i = 0; i < i4993.length; i += 1) {
    i4992.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i4993[i + 0]) );
  }
  i4990.qualityLevels = i4992
  var i4995 = i4991[1]
  var i4994 = []
  for(var i = 0; i < i4995.length; i += 1) {
    i4994.push( i4995[i + 0] );
  }
  i4990.names = i4994
  i4990.shadows = i4991[2]
  i4990.anisotropicFiltering = i4991[3]
  i4990.antiAliasing = i4991[4]
  i4990.lodBias = i4991[5]
  i4990.shadowCascades = i4991[6]
  i4990.shadowDistance = i4991[7]
  i4990.shadowmaskMode = i4991[8]
  i4990.shadowProjection = i4991[9]
  i4990.shadowResolution = i4991[10]
  i4990.softParticles = !!i4991[11]
  i4990.softVegetation = !!i4991[12]
  i4990.activeColorSpace = i4991[13]
  i4990.desiredColorSpace = i4991[14]
  i4990.masterTextureLimit = i4991[15]
  i4990.maxQueuedFrames = i4991[16]
  i4990.particleRaycastBudget = i4991[17]
  i4990.pixelLightCount = i4991[18]
  i4990.realtimeReflectionProbes = !!i4991[19]
  i4990.shadowCascade2Split = i4991[20]
  i4990.shadowCascade4Split = new pc.Vec3( i4991[21], i4991[22], i4991[23] )
  i4990.streamingMipmapsActive = !!i4991[24]
  i4990.vSyncCount = i4991[25]
  i4990.asyncUploadBufferSize = i4991[26]
  i4990.asyncUploadTimeSlice = i4991[27]
  i4990.billboardsFaceCameraPosition = !!i4991[28]
  i4990.shadowNearPlaneOffset = i4991[29]
  i4990.streamingMipmapsMemoryBudget = i4991[30]
  i4990.maximumLODLevel = i4991[31]
  i4990.streamingMipmapsAddAllCameras = !!i4991[32]
  i4990.streamingMipmapsMaxLevelReduction = i4991[33]
  i4990.streamingMipmapsRenderersPerFrame = i4991[34]
  i4990.resolutionScalingFixedDPIFactor = i4991[35]
  i4990.streamingMipmapsMaxFileIORequests = i4991[36]
  i4990.currentQualityLevel = i4991[37]
  return i4990
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i5000 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i5001 = data
  i5000.weight = i5001[0]
  i5000.vertices = i5001[1]
  i5000.normals = i5001[2]
  i5000.tangents = i5001[3]
  return i5000
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i5002 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i5003 = data
  i5002.m_XCoordinate = i5003[0]
  i5002.m_YCoordinate = i5003[1]
  return i5002
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i5004 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i5005 = data
  i5004.m_XPositionAdjustment = i5005[0]
  i5004.m_YPositionAdjustment = i5005[1]
  return i5004
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i5006 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i5007 = data
  i5006.xPlacement = i5007[0]
  i5006.yPlacement = i5007[1]
  i5006.xAdvance = i5007[2]
  i5006.yAdvance = i5007[3]
  return i5006
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"43":[44],"45":[44],"46":[44],"47":[44],"48":[44],"49":[44],"50":[51],"52":[2],"53":[54],"55":[54],"56":[54],"57":[54],"58":[54],"59":[54],"60":[61],"62":[61],"63":[61],"64":[61],"65":[61],"66":[61],"67":[61],"68":[61],"69":[61],"70":[61],"71":[61],"72":[61],"73":[61],"74":[2],"75":[76],"77":[78],"79":[78],"21":[20],"6":[2],"80":[61],"81":[82],"83":[18],"84":[2],"85":[86],"87":[34],"88":[21],"89":[20],"90":[76,20],"91":[20,25],"92":[20],"93":[25,20],"94":[76],"95":[25,20],"96":[20],"97":[98],"99":[98],"100":[98],"101":[20],"102":[20],"24":[21],"26":[25,20],"103":[20],"23":[21],"104":[20],"105":[20],"106":[20],"107":[20],"108":[20],"109":[20],"110":[20],"111":[20],"112":[20],"113":[25,20],"114":[20],"115":[20],"116":[20],"117":[20],"118":[25,20],"119":[20],"120":[34],"121":[34],"35":[34],"122":[34],"123":[2],"124":[2]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.MonoBehaviour","CameraFollow2D","AutoCameraFit","UnityEngine.Transform","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Mesh","UnityEngine.Material","Ply_SoundManager","UnityEngine.AudioClip","UnityEngine.AudioSource","HaalandGame.HaalandGameManager","UnityEngine.GameObject","UnityEngine.Animator","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.UI.Button","UnityEditor.Animations.AnimatorController","HaalandGame.IconListAnimator","HideOnFirstClick","ScreenHeightPositionAnchor","UnityEngine.BoxCollider","HaalandGame.PlayerSelectable","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_FontAsset","UnityEngine.Font","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","BatStrikeController","SlotTrigger","UnityEngine.BoxCollider2D","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.InputSystem.UI.InputSystemUIInputModule","UnityEngine.InputSystem.UI.TrackedDeviceRaycaster","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.38f1";

Deserializers.productName = "PLY_MiniSoccer";

Deserializers.lunaInitializationTime = "07/15/2026 03:53:54";

Deserializers.lunaDaysRunning = "50.0";

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

Deserializers.buildID = "f0ea2b75-fb1e-4c5d-aa19-054bddfb1560";

Deserializers.runtimeInitializeOnLoadInfos = [[["Unity","Services","Core","Internal","UnityServicesInitializer","EnableServicesInitializationAsync"],["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["DG","Tweening","DOTween","RuntimeOnLoad"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["Unity","Services","Core","Registration","CorePackageInitializer","InitializeOnLoad"],["Unity","Services","Core","Internal","TaskAsyncOperation","SetScheduler"],["Unity","Services","Core","Environments","Client","Scheduler","EngineStateHelper","Init"],["Unity","Services","Core","Environments","Client","Scheduler","ThreadHelper","Init"],["Ua2CoreInitializeCallback","Register"],["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["Unity","AI","Navigation","NavMeshLink","ClearTrackedList"],["Unity","AI","Navigation","NavMeshSurface","ClearNavMeshSurfaces"],["Unity","AI","Navigation","NavMeshModifierVolume","ClearNavMeshModifiers"],["Unity","AI","Navigation","NavMeshModifier","ClearNavMeshModifiers"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["Unity","Services","Core","Internal","UnityServicesInitializer","CreateStaticInstance"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[["Unity","Services","Core","Environments","Client","Http","JsonHelpers","RegisterTypesForAOT"]],[["Unity","Services","Core","UnityThreadUtils","CaptureUnityThreadInfo"],["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

