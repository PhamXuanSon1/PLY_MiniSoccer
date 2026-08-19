var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i4508 = root || request.c( 'UnityEngine.JointSpring' )
  var i4509 = data
  i4508.spring = i4509[0]
  i4508.damper = i4509[1]
  i4508.targetPosition = i4509[2]
  return i4508
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i4510 = root || request.c( 'UnityEngine.JointMotor' )
  var i4511 = data
  i4510.m_TargetVelocity = i4511[0]
  i4510.m_Force = i4511[1]
  i4510.m_FreeSpin = i4511[2]
  return i4510
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i4512 = root || request.c( 'UnityEngine.JointLimits' )
  var i4513 = data
  i4512.m_Min = i4513[0]
  i4512.m_Max = i4513[1]
  i4512.m_Bounciness = i4513[2]
  i4512.m_BounceMinVelocity = i4513[3]
  i4512.m_ContactDistance = i4513[4]
  i4512.minBounce = i4513[5]
  i4512.maxBounce = i4513[6]
  return i4512
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i4514 = root || request.c( 'UnityEngine.JointDrive' )
  var i4515 = data
  i4514.m_PositionSpring = i4515[0]
  i4514.m_PositionDamper = i4515[1]
  i4514.m_MaximumForce = i4515[2]
  i4514.m_UseAcceleration = i4515[3]
  return i4514
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i4516 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i4517 = data
  i4516.m_Spring = i4517[0]
  i4516.m_Damper = i4517[1]
  return i4516
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i4518 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i4519 = data
  i4518.m_Limit = i4519[0]
  i4518.m_Bounciness = i4519[1]
  i4518.m_ContactDistance = i4519[2]
  return i4518
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i4520 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i4521 = data
  i4520.m_ExtremumSlip = i4521[0]
  i4520.m_ExtremumValue = i4521[1]
  i4520.m_AsymptoteSlip = i4521[2]
  i4520.m_AsymptoteValue = i4521[3]
  i4520.m_Stiffness = i4521[4]
  return i4520
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i4522 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i4523 = data
  i4522.m_LowerAngle = i4523[0]
  i4522.m_UpperAngle = i4523[1]
  return i4522
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i4524 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i4525 = data
  i4524.m_MotorSpeed = i4525[0]
  i4524.m_MaximumMotorTorque = i4525[1]
  return i4524
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i4526 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i4527 = data
  i4526.m_DampingRatio = i4527[0]
  i4526.m_Frequency = i4527[1]
  i4526.m_Angle = i4527[2]
  return i4526
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i4528 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i4529 = data
  i4528.m_LowerTranslation = i4529[0]
  i4528.m_UpperTranslation = i4529[1]
  return i4528
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i4530 = root || new pc.UnityMaterial()
  var i4531 = data
  i4530.name = i4531[0]
  request.r(i4531[1], i4531[2], 0, i4530, 'shader')
  i4530.renderQueue = i4531[3]
  i4530.enableInstancing = !!i4531[4]
  var i4533 = i4531[5]
  var i4532 = []
  for(var i = 0; i < i4533.length; i += 1) {
    i4532.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i4533[i + 0]) );
  }
  i4530.floatParameters = i4532
  var i4535 = i4531[6]
  var i4534 = []
  for(var i = 0; i < i4535.length; i += 1) {
    i4534.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i4535[i + 0]) );
  }
  i4530.colorParameters = i4534
  var i4537 = i4531[7]
  var i4536 = []
  for(var i = 0; i < i4537.length; i += 1) {
    i4536.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i4537[i + 0]) );
  }
  i4530.vectorParameters = i4536
  var i4539 = i4531[8]
  var i4538 = []
  for(var i = 0; i < i4539.length; i += 1) {
    i4538.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i4539[i + 0]) );
  }
  i4530.textureParameters = i4538
  var i4541 = i4531[9]
  var i4540 = []
  for(var i = 0; i < i4541.length; i += 1) {
    i4540.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i4541[i + 0]) );
  }
  i4530.materialFlags = i4540
  return i4530
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i4544 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i4545 = data
  i4544.name = i4545[0]
  i4544.value = i4545[1]
  return i4544
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i4548 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i4549 = data
  i4548.name = i4549[0]
  i4548.value = new pc.Color(i4549[1], i4549[2], i4549[3], i4549[4])
  return i4548
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i4552 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i4553 = data
  i4552.name = i4553[0]
  i4552.value = new pc.Vec4( i4553[1], i4553[2], i4553[3], i4553[4] )
  return i4552
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i4556 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i4557 = data
  i4556.name = i4557[0]
  request.r(i4557[1], i4557[2], 0, i4556, 'value')
  return i4556
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i4560 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i4561 = data
  i4560.name = i4561[0]
  i4560.enabled = !!i4561[1]
  return i4560
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i4562 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i4563 = data
  i4562.name = i4563[0]
  i4562.width = i4563[1]
  i4562.height = i4563[2]
  i4562.mipmapCount = i4563[3]
  i4562.anisoLevel = i4563[4]
  i4562.filterMode = i4563[5]
  i4562.hdr = !!i4563[6]
  i4562.format = i4563[7]
  i4562.wrapMode = i4563[8]
  i4562.alphaIsTransparency = !!i4563[9]
  i4562.alphaSource = i4563[10]
  i4562.graphicsFormat = i4563[11]
  i4562.sRGBTexture = !!i4563[12]
  i4562.desiredColorSpace = i4563[13]
  i4562.wrapU = i4563[14]
  i4562.wrapV = i4563[15]
  return i4562
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i4564 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i4565 = data
  i4564.name = i4565[0]
  i4564.halfPrecision = !!i4565[1]
  i4564.useSimplification = !!i4565[2]
  i4564.useUInt32IndexFormat = !!i4565[3]
  i4564.vertexCount = i4565[4]
  i4564.aabb = i4565[5]
  var i4567 = i4565[6]
  var i4566 = []
  for(var i = 0; i < i4567.length; i += 1) {
    i4566.push( !!i4567[i + 0] );
  }
  i4564.streams = i4566
  i4564.vertices = i4565[7]
  var i4569 = i4565[8]
  var i4568 = []
  for(var i = 0; i < i4569.length; i += 1) {
    i4568.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i4569[i + 0]) );
  }
  i4564.subMeshes = i4568
  var i4571 = i4565[9]
  var i4570 = []
  for(var i = 0; i < i4571.length; i += 16) {
    i4570.push( new pc.Mat4().setData(i4571[i + 0], i4571[i + 1], i4571[i + 2], i4571[i + 3],  i4571[i + 4], i4571[i + 5], i4571[i + 6], i4571[i + 7],  i4571[i + 8], i4571[i + 9], i4571[i + 10], i4571[i + 11],  i4571[i + 12], i4571[i + 13], i4571[i + 14], i4571[i + 15]) );
  }
  i4564.bindposes = i4570
  var i4573 = i4565[10]
  var i4572 = []
  for(var i = 0; i < i4573.length; i += 1) {
    i4572.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i4573[i + 0]) );
  }
  i4564.blendShapes = i4572
  return i4564
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i4578 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i4579 = data
  i4578.triangles = i4579[0]
  return i4578
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i4584 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i4585 = data
  i4584.name = i4585[0]
  var i4587 = i4585[1]
  var i4586 = []
  for(var i = 0; i < i4587.length; i += 1) {
    i4586.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i4587[i + 0]) );
  }
  i4584.frames = i4586
  return i4584
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i4588 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i4589 = data
  i4588.name = i4589[0]
  i4588.index = i4589[1]
  i4588.startup = !!i4589[2]
  return i4588
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i4590 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i4591 = data
  i4590.aspect = i4591[0]
  i4590.orthographic = !!i4591[1]
  i4590.orthographicSize = i4591[2]
  i4590.backgroundColor = new pc.Color(i4591[3], i4591[4], i4591[5], i4591[6])
  i4590.nearClipPlane = i4591[7]
  i4590.farClipPlane = i4591[8]
  i4590.fieldOfView = i4591[9]
  i4590.depth = i4591[10]
  i4590.clearFlags = i4591[11]
  i4590.cullingMask = i4591[12]
  i4590.rect = i4591[13]
  request.r(i4591[14], i4591[15], 0, i4590, 'targetTexture')
  i4590.usePhysicalProperties = !!i4591[16]
  i4590.focalLength = i4591[17]
  i4590.sensorSize = new pc.Vec2( i4591[18], i4591[19] )
  i4590.lensShift = new pc.Vec2( i4591[20], i4591[21] )
  i4590.gateFit = i4591[22]
  i4590.commandBufferCount = i4591[23]
  i4590.cameraType = i4591[24]
  i4590.enabled = !!i4591[25]
  return i4590
}

Deserializers["CameraFollow2D"] = function (request, data, root) {
  var i4592 = root || request.c( 'CameraFollow2D' )
  var i4593 = data
  request.r(i4593[0], i4593[1], 0, i4592, 'target')
  i4592.smoothSpeed = i4593[2]
  i4592.offset = new pc.Vec3( i4593[3], i4593[4], i4593[5] )
  i4592.followY = !!i4593[6]
  return i4592
}

Deserializers["AutoCameraFit"] = function (request, data, root) {
  var i4594 = root || request.c( 'AutoCameraFit' )
  var i4595 = data
  request.r(i4595[0], i4595[1], 0, i4594, 'tallScreenObject')
  i4594.tallScreenRatioThreshold = i4595[2]
  i4594.tallScreenYOffset = i4595[3]
  request.r(i4595[4], i4595[5], 0, i4594, 'canvasBtn')
  request.r(i4595[6], i4595[7], 0, i4594, 'targetArea')
  i4594.paddingLandscape = i4595[8]
  i4594.paddingPortrait = i4595[9]
  i4594.extraPaddingSmallScreen = i4595[10]
  i4594.smallScreenThreshold = i4595[11]
  i4594.autoUpdateOnResize = !!i4595[12]
  i4594.adjustInEditMode = !!i4595[13]
  return i4594
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i4596 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i4597 = data
  i4596.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i4597[0], i4596.main)
  i4596.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i4597[1], i4596.colorBySpeed)
  i4596.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i4597[2], i4596.colorOverLifetime)
  i4596.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i4597[3], i4596.emission)
  i4596.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i4597[4], i4596.rotationBySpeed)
  i4596.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i4597[5], i4596.rotationOverLifetime)
  i4596.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i4597[6], i4596.shape)
  i4596.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i4597[7], i4596.sizeBySpeed)
  i4596.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i4597[8], i4596.sizeOverLifetime)
  i4596.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i4597[9], i4596.textureSheetAnimation)
  i4596.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i4597[10], i4596.velocityOverLifetime)
  i4596.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i4597[11], i4596.noise)
  i4596.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i4597[12], i4596.inheritVelocity)
  i4596.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i4597[13], i4596.forceOverLifetime)
  i4596.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i4597[14], i4596.limitVelocityOverLifetime)
  i4596.useAutoRandomSeed = !!i4597[15]
  i4596.randomSeed = i4597[16]
  return i4596
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i4598 = root || new pc.ParticleSystemMain()
  var i4599 = data
  i4598.duration = i4599[0]
  i4598.loop = !!i4599[1]
  i4598.prewarm = !!i4599[2]
  i4598.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4599[3], i4598.startDelay)
  i4598.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4599[4], i4598.startLifetime)
  i4598.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4599[5], i4598.startSpeed)
  i4598.startSize3D = !!i4599[6]
  i4598.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4599[7], i4598.startSizeX)
  i4598.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4599[8], i4598.startSizeY)
  i4598.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4599[9], i4598.startSizeZ)
  i4598.startRotation3D = !!i4599[10]
  i4598.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4599[11], i4598.startRotationX)
  i4598.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4599[12], i4598.startRotationY)
  i4598.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4599[13], i4598.startRotationZ)
  i4598.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i4599[14], i4598.startColor)
  i4598.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4599[15], i4598.gravityModifier)
  i4598.simulationSpace = i4599[16]
  request.r(i4599[17], i4599[18], 0, i4598, 'customSimulationSpace')
  i4598.simulationSpeed = i4599[19]
  i4598.useUnscaledTime = !!i4599[20]
  i4598.scalingMode = i4599[21]
  i4598.playOnAwake = !!i4599[22]
  i4598.maxParticles = i4599[23]
  i4598.emitterVelocityMode = i4599[24]
  i4598.stopAction = i4599[25]
  return i4598
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i4600 = root || new pc.MinMaxCurve()
  var i4601 = data
  i4600.mode = i4601[0]
  i4600.curveMin = new pc.AnimationCurve( { keys_flow: i4601[1] } )
  i4600.curveMax = new pc.AnimationCurve( { keys_flow: i4601[2] } )
  i4600.curveMultiplier = i4601[3]
  i4600.constantMin = i4601[4]
  i4600.constantMax = i4601[5]
  return i4600
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i4602 = root || new pc.MinMaxGradient()
  var i4603 = data
  i4602.mode = i4603[0]
  i4602.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i4603[1], i4602.gradientMin)
  i4602.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i4603[2], i4602.gradientMax)
  i4602.colorMin = new pc.Color(i4603[3], i4603[4], i4603[5], i4603[6])
  i4602.colorMax = new pc.Color(i4603[7], i4603[8], i4603[9], i4603[10])
  return i4602
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i4604 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i4605 = data
  i4604.mode = i4605[0]
  var i4607 = i4605[1]
  var i4606 = []
  for(var i = 0; i < i4607.length; i += 1) {
    i4606.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i4607[i + 0]) );
  }
  i4604.colorKeys = i4606
  var i4609 = i4605[2]
  var i4608 = []
  for(var i = 0; i < i4609.length; i += 1) {
    i4608.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i4609[i + 0]) );
  }
  i4604.alphaKeys = i4608
  return i4604
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i4610 = root || new pc.ParticleSystemColorBySpeed()
  var i4611 = data
  i4610.enabled = !!i4611[0]
  i4610.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i4611[1], i4610.color)
  i4610.range = new pc.Vec2( i4611[2], i4611[3] )
  return i4610
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i4614 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i4615 = data
  i4614.color = new pc.Color(i4615[0], i4615[1], i4615[2], i4615[3])
  i4614.time = i4615[4]
  return i4614
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i4618 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i4619 = data
  i4618.alpha = i4619[0]
  i4618.time = i4619[1]
  return i4618
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i4620 = root || new pc.ParticleSystemColorOverLifetime()
  var i4621 = data
  i4620.enabled = !!i4621[0]
  i4620.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i4621[1], i4620.color)
  return i4620
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i4622 = root || new pc.ParticleSystemEmitter()
  var i4623 = data
  i4622.enabled = !!i4623[0]
  i4622.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4623[1], i4622.rateOverTime)
  i4622.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4623[2], i4622.rateOverDistance)
  var i4625 = i4623[3]
  var i4624 = []
  for(var i = 0; i < i4625.length; i += 1) {
    i4624.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i4625[i + 0]) );
  }
  i4622.bursts = i4624
  return i4622
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i4628 = root || new pc.ParticleSystemBurst()
  var i4629 = data
  i4628.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4629[0], i4628.count)
  i4628.cycleCount = i4629[1]
  i4628.minCount = i4629[2]
  i4628.maxCount = i4629[3]
  i4628.repeatInterval = i4629[4]
  i4628.time = i4629[5]
  return i4628
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i4630 = root || new pc.ParticleSystemRotationBySpeed()
  var i4631 = data
  i4630.enabled = !!i4631[0]
  i4630.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4631[1], i4630.x)
  i4630.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4631[2], i4630.y)
  i4630.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4631[3], i4630.z)
  i4630.separateAxes = !!i4631[4]
  i4630.range = new pc.Vec2( i4631[5], i4631[6] )
  return i4630
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i4632 = root || new pc.ParticleSystemRotationOverLifetime()
  var i4633 = data
  i4632.enabled = !!i4633[0]
  i4632.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4633[1], i4632.x)
  i4632.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4633[2], i4632.y)
  i4632.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4633[3], i4632.z)
  i4632.separateAxes = !!i4633[4]
  return i4632
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i4634 = root || new pc.ParticleSystemShape()
  var i4635 = data
  i4634.enabled = !!i4635[0]
  i4634.shapeType = i4635[1]
  i4634.randomDirectionAmount = i4635[2]
  i4634.sphericalDirectionAmount = i4635[3]
  i4634.randomPositionAmount = i4635[4]
  i4634.alignToDirection = !!i4635[5]
  i4634.radius = i4635[6]
  i4634.radiusMode = i4635[7]
  i4634.radiusSpread = i4635[8]
  i4634.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4635[9], i4634.radiusSpeed)
  i4634.radiusThickness = i4635[10]
  i4634.angle = i4635[11]
  i4634.length = i4635[12]
  i4634.boxThickness = new pc.Vec3( i4635[13], i4635[14], i4635[15] )
  i4634.meshShapeType = i4635[16]
  request.r(i4635[17], i4635[18], 0, i4634, 'mesh')
  request.r(i4635[19], i4635[20], 0, i4634, 'meshRenderer')
  request.r(i4635[21], i4635[22], 0, i4634, 'skinnedMeshRenderer')
  i4634.useMeshMaterialIndex = !!i4635[23]
  i4634.meshMaterialIndex = i4635[24]
  i4634.useMeshColors = !!i4635[25]
  i4634.normalOffset = i4635[26]
  i4634.arc = i4635[27]
  i4634.arcMode = i4635[28]
  i4634.arcSpread = i4635[29]
  i4634.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4635[30], i4634.arcSpeed)
  i4634.donutRadius = i4635[31]
  i4634.position = new pc.Vec3( i4635[32], i4635[33], i4635[34] )
  i4634.rotation = new pc.Vec3( i4635[35], i4635[36], i4635[37] )
  i4634.scale = new pc.Vec3( i4635[38], i4635[39], i4635[40] )
  return i4634
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i4636 = root || new pc.ParticleSystemSizeBySpeed()
  var i4637 = data
  i4636.enabled = !!i4637[0]
  i4636.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4637[1], i4636.x)
  i4636.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4637[2], i4636.y)
  i4636.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4637[3], i4636.z)
  i4636.separateAxes = !!i4637[4]
  i4636.range = new pc.Vec2( i4637[5], i4637[6] )
  return i4636
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i4638 = root || new pc.ParticleSystemSizeOverLifetime()
  var i4639 = data
  i4638.enabled = !!i4639[0]
  i4638.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4639[1], i4638.x)
  i4638.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4639[2], i4638.y)
  i4638.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4639[3], i4638.z)
  i4638.separateAxes = !!i4639[4]
  return i4638
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i4640 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i4641 = data
  i4640.enabled = !!i4641[0]
  i4640.mode = i4641[1]
  i4640.animation = i4641[2]
  i4640.numTilesX = i4641[3]
  i4640.numTilesY = i4641[4]
  i4640.useRandomRow = !!i4641[5]
  i4640.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4641[6], i4640.frameOverTime)
  i4640.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4641[7], i4640.startFrame)
  i4640.cycleCount = i4641[8]
  i4640.rowIndex = i4641[9]
  i4640.flipU = i4641[10]
  i4640.flipV = i4641[11]
  i4640.spriteCount = i4641[12]
  var i4643 = i4641[13]
  var i4642 = []
  for(var i = 0; i < i4643.length; i += 2) {
  request.r(i4643[i + 0], i4643[i + 1], 2, i4642, '')
  }
  i4640.sprites = i4642
  return i4640
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i4646 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i4647 = data
  i4646.enabled = !!i4647[0]
  i4646.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4647[1], i4646.x)
  i4646.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4647[2], i4646.y)
  i4646.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4647[3], i4646.z)
  i4646.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4647[4], i4646.radial)
  i4646.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4647[5], i4646.speedModifier)
  i4646.space = i4647[6]
  i4646.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4647[7], i4646.orbitalX)
  i4646.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4647[8], i4646.orbitalY)
  i4646.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4647[9], i4646.orbitalZ)
  i4646.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4647[10], i4646.orbitalOffsetX)
  i4646.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4647[11], i4646.orbitalOffsetY)
  i4646.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4647[12], i4646.orbitalOffsetZ)
  return i4646
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i4648 = root || new pc.ParticleSystemNoise()
  var i4649 = data
  i4648.enabled = !!i4649[0]
  i4648.separateAxes = !!i4649[1]
  i4648.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4649[2], i4648.strengthX)
  i4648.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4649[3], i4648.strengthY)
  i4648.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4649[4], i4648.strengthZ)
  i4648.frequency = i4649[5]
  i4648.damping = !!i4649[6]
  i4648.octaveCount = i4649[7]
  i4648.octaveMultiplier = i4649[8]
  i4648.octaveScale = i4649[9]
  i4648.quality = i4649[10]
  i4648.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4649[11], i4648.scrollSpeed)
  i4648.scrollSpeedMultiplier = i4649[12]
  i4648.remapEnabled = !!i4649[13]
  i4648.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4649[14], i4648.remapX)
  i4648.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4649[15], i4648.remapY)
  i4648.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4649[16], i4648.remapZ)
  i4648.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4649[17], i4648.positionAmount)
  i4648.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4649[18], i4648.rotationAmount)
  i4648.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4649[19], i4648.sizeAmount)
  return i4648
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i4650 = root || new pc.ParticleSystemInheritVelocity()
  var i4651 = data
  i4650.enabled = !!i4651[0]
  i4650.mode = i4651[1]
  i4650.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4651[2], i4650.curve)
  return i4650
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i4652 = root || new pc.ParticleSystemForceOverLifetime()
  var i4653 = data
  i4652.enabled = !!i4653[0]
  i4652.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4653[1], i4652.x)
  i4652.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4653[2], i4652.y)
  i4652.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4653[3], i4652.z)
  i4652.space = i4653[4]
  i4652.randomized = !!i4653[5]
  return i4652
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i4654 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i4655 = data
  i4654.enabled = !!i4655[0]
  i4654.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4655[1], i4654.limit)
  i4654.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4655[2], i4654.limitX)
  i4654.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4655[3], i4654.limitY)
  i4654.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4655[4], i4654.limitZ)
  i4654.dampen = i4655[5]
  i4654.separateAxes = !!i4655[6]
  i4654.space = i4655[7]
  i4654.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4655[8], i4654.drag)
  i4654.multiplyDragByParticleSize = !!i4655[9]
  i4654.multiplyDragByParticleVelocity = !!i4655[10]
  return i4654
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i4656 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i4657 = data
  request.r(i4657[0], i4657[1], 0, i4656, 'mesh')
  i4656.meshCount = i4657[2]
  i4656.activeVertexStreamsCount = i4657[3]
  i4656.alignment = i4657[4]
  i4656.renderMode = i4657[5]
  i4656.sortMode = i4657[6]
  i4656.lengthScale = i4657[7]
  i4656.velocityScale = i4657[8]
  i4656.cameraVelocityScale = i4657[9]
  i4656.normalDirection = i4657[10]
  i4656.sortingFudge = i4657[11]
  i4656.minParticleSize = i4657[12]
  i4656.maxParticleSize = i4657[13]
  i4656.pivot = new pc.Vec3( i4657[14], i4657[15], i4657[16] )
  request.r(i4657[17], i4657[18], 0, i4656, 'trailMaterial')
  i4656.applyActiveColorSpace = !!i4657[19]
  i4656.enabled = !!i4657[20]
  request.r(i4657[21], i4657[22], 0, i4656, 'sharedMaterial')
  var i4659 = i4657[23]
  var i4658 = []
  for(var i = 0; i < i4659.length; i += 2) {
  request.r(i4659[i + 0], i4659[i + 1], 2, i4658, '')
  }
  i4656.sharedMaterials = i4658
  i4656.receiveShadows = !!i4657[24]
  i4656.shadowCastingMode = i4657[25]
  i4656.sortingLayerID = i4657[26]
  i4656.sortingOrder = i4657[27]
  i4656.lightmapIndex = i4657[28]
  i4656.lightmapSceneIndex = i4657[29]
  i4656.lightmapScaleOffset = new pc.Vec4( i4657[30], i4657[31], i4657[32], i4657[33] )
  i4656.lightProbeUsage = i4657[34]
  i4656.reflectionProbeUsage = i4657[35]
  return i4656
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i4662 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i4663 = data
  request.r(i4663[0], i4663[1], 0, i4662, 'clip')
  request.r(i4663[2], i4663[3], 0, i4662, 'outputAudioMixerGroup')
  i4662.playOnAwake = !!i4663[4]
  i4662.loop = !!i4663[5]
  i4662.time = i4663[6]
  i4662.volume = i4663[7]
  i4662.pitch = i4663[8]
  i4662.enabled = !!i4663[9]
  return i4662
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i4664 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i4665 = data
  i4664.name = i4665[0]
  i4664.tagId = i4665[1]
  i4664.enabled = !!i4665[2]
  i4664.isStatic = !!i4665[3]
  i4664.layer = i4665[4]
  return i4664
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i4666 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i4667 = data
  i4666.color = new pc.Color(i4667[0], i4667[1], i4667[2], i4667[3])
  request.r(i4667[4], i4667[5], 0, i4666, 'sprite')
  i4666.flipX = !!i4667[6]
  i4666.flipY = !!i4667[7]
  i4666.drawMode = i4667[8]
  i4666.size = new pc.Vec2( i4667[9], i4667[10] )
  i4666.tileMode = i4667[11]
  i4666.adaptiveModeThreshold = i4667[12]
  i4666.maskInteraction = i4667[13]
  i4666.spriteSortPoint = i4667[14]
  i4666.enabled = !!i4667[15]
  request.r(i4667[16], i4667[17], 0, i4666, 'sharedMaterial')
  var i4669 = i4667[18]
  var i4668 = []
  for(var i = 0; i < i4669.length; i += 2) {
  request.r(i4669[i + 0], i4669[i + 1], 2, i4668, '')
  }
  i4666.sharedMaterials = i4668
  i4666.receiveShadows = !!i4667[19]
  i4666.shadowCastingMode = i4667[20]
  i4666.sortingLayerID = i4667[21]
  i4666.sortingOrder = i4667[22]
  i4666.lightmapIndex = i4667[23]
  i4666.lightmapSceneIndex = i4667[24]
  i4666.lightmapScaleOffset = new pc.Vec4( i4667[25], i4667[26], i4667[27], i4667[28] )
  i4666.lightProbeUsage = i4667[29]
  i4666.reflectionProbeUsage = i4667[30]
  return i4666
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i4670 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i4671 = data
  request.r(i4671[0], i4671[1], 0, i4670, 'animatorController')
  request.r(i4671[2], i4671[3], 0, i4670, 'avatar')
  i4670.updateMode = i4671[4]
  i4670.hasTransformHierarchy = !!i4671[5]
  i4670.applyRootMotion = !!i4671[6]
  var i4673 = i4671[7]
  var i4672 = []
  for(var i = 0; i < i4673.length; i += 2) {
  request.r(i4673[i + 0], i4673[i + 1], 2, i4672, '')
  }
  i4670.humanBones = i4672
  i4670.enabled = !!i4671[8]
  return i4670
}

Deserializers["MoveBetweenPoints"] = function (request, data, root) {
  var i4676 = root || request.c( 'MoveBetweenPoints' )
  var i4677 = data
  request.r(i4677[0], i4677[1], 0, i4676, 'pointA')
  request.r(i4677[2], i4677[3], 0, i4676, 'pointB')
  i4676.duration = i4677[4]
  return i4676
}

Deserializers["ScreenHeightPositionAnchor"] = function (request, data, root) {
  var i4678 = root || request.c( 'ScreenHeightPositionAnchor' )
  var i4679 = data
  request.r(i4679[0], i4679[1], 0, i4678, 'anchorPoint')
  request.r(i4679[2], i4679[3], 0, i4678, 'targetCamera')
  i4678.viewportYRatio = i4679[4]
  i4678.alignOnStart = !!i4679[5]
  i4678.alignOnEnable = !!i4679[6]
  i4678.realignOnScreenSizeChanged = !!i4679[7]
  i4678.drawGizmos = !!i4679[8]
  i4678.targetLineColor = new pc.Color(i4679[9], i4679[10], i4679[11], i4679[12])
  i4678.anchorColor = new pc.Color(i4679[13], i4679[14], i4679[15], i4679[16])
  return i4678
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i4680 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i4681 = data
  i4680.center = new pc.Vec3( i4681[0], i4681[1], i4681[2] )
  i4680.size = new pc.Vec3( i4681[3], i4681[4], i4681[5] )
  i4680.enabled = !!i4681[6]
  i4680.isTrigger = !!i4681[7]
  request.r(i4681[8], i4681[9], 0, i4680, 'material')
  return i4680
}

Deserializers["ClickToStore"] = function (request, data, root) {
  var i4682 = root || request.c( 'ClickToStore' )
  var i4683 = data
  return i4682
}

Deserializers["FavoritePlayerEndcard"] = function (request, data, root) {
  var i4684 = root || request.c( 'FavoritePlayerEndcard' )
  var i4685 = data
  request.r(i4685[0], i4685[1], 0, i4684, 'fullBodyRenderer')
  request.r(i4685[2], i4685[3], 0, i4684, 'nameText')
  request.r(i4685[4], i4685[5], 0, i4684, 'endcardPanel')
  return i4684
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i4686 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i4687 = data
  i4686.pivot = new pc.Vec2( i4687[0], i4687[1] )
  i4686.anchorMin = new pc.Vec2( i4687[2], i4687[3] )
  i4686.anchorMax = new pc.Vec2( i4687[4], i4687[5] )
  i4686.sizeDelta = new pc.Vec2( i4687[6], i4687[7] )
  i4686.anchoredPosition3D = new pc.Vec3( i4687[8], i4687[9], i4687[10] )
  i4686.rotation = new pc.Quat(i4687[11], i4687[12], i4687[13], i4687[14])
  i4686.scale = new pc.Vec3( i4687[15], i4687[16], i4687[17] )
  return i4686
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i4688 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i4689 = data
  request.r(i4689[0], i4689[1], 0, i4688, 'additionalVertexStreams')
  i4688.enabled = !!i4689[2]
  request.r(i4689[3], i4689[4], 0, i4688, 'sharedMaterial')
  var i4691 = i4689[5]
  var i4690 = []
  for(var i = 0; i < i4691.length; i += 2) {
  request.r(i4691[i + 0], i4691[i + 1], 2, i4690, '')
  }
  i4688.sharedMaterials = i4690
  i4688.receiveShadows = !!i4689[6]
  i4688.shadowCastingMode = i4689[7]
  i4688.sortingLayerID = i4689[8]
  i4688.sortingOrder = i4689[9]
  i4688.lightmapIndex = i4689[10]
  i4688.lightmapSceneIndex = i4689[11]
  i4688.lightmapScaleOffset = new pc.Vec4( i4689[12], i4689[13], i4689[14], i4689[15] )
  i4688.lightProbeUsage = i4689[16]
  i4688.reflectionProbeUsage = i4689[17]
  return i4688
}

Deserializers["TMPro.TextMeshPro"] = function (request, data, root) {
  var i4692 = root || request.c( 'TMPro.TextMeshPro' )
  var i4693 = data
  i4692._SortingLayer = i4693[0]
  i4692._SortingLayerID = i4693[1]
  i4692._SortingOrder = i4693[2]
  i4692.m_hasFontAssetChanged = !!i4693[3]
  request.r(i4693[4], i4693[5], 0, i4692, 'm_renderer')
  i4692.m_maskType = i4693[6]
  i4692.m_text = i4693[7]
  i4692.m_isRightToLeft = !!i4693[8]
  request.r(i4693[9], i4693[10], 0, i4692, 'm_fontAsset')
  request.r(i4693[11], i4693[12], 0, i4692, 'm_sharedMaterial')
  var i4695 = i4693[13]
  var i4694 = []
  for(var i = 0; i < i4695.length; i += 2) {
  request.r(i4695[i + 0], i4695[i + 1], 2, i4694, '')
  }
  i4692.m_fontSharedMaterials = i4694
  request.r(i4693[14], i4693[15], 0, i4692, 'm_fontMaterial')
  var i4697 = i4693[16]
  var i4696 = []
  for(var i = 0; i < i4697.length; i += 2) {
  request.r(i4697[i + 0], i4697[i + 1], 2, i4696, '')
  }
  i4692.m_fontMaterials = i4696
  i4692.m_fontColor32 = UnityEngine.Color32.ConstructColor(i4693[17], i4693[18], i4693[19], i4693[20])
  i4692.m_fontColor = new pc.Color(i4693[21], i4693[22], i4693[23], i4693[24])
  i4692.m_enableVertexGradient = !!i4693[25]
  i4692.m_colorMode = i4693[26]
  i4692.m_fontColorGradient = request.d('TMPro.VertexGradient', i4693[27], i4692.m_fontColorGradient)
  request.r(i4693[28], i4693[29], 0, i4692, 'm_fontColorGradientPreset')
  request.r(i4693[30], i4693[31], 0, i4692, 'm_spriteAsset')
  i4692.m_tintAllSprites = !!i4693[32]
  request.r(i4693[33], i4693[34], 0, i4692, 'm_StyleSheet')
  i4692.m_TextStyleHashCode = i4693[35]
  i4692.m_overrideHtmlColors = !!i4693[36]
  i4692.m_faceColor = UnityEngine.Color32.ConstructColor(i4693[37], i4693[38], i4693[39], i4693[40])
  i4692.m_fontSize = i4693[41]
  i4692.m_fontSizeBase = i4693[42]
  i4692.m_fontWeight = i4693[43]
  i4692.m_enableAutoSizing = !!i4693[44]
  i4692.m_fontSizeMin = i4693[45]
  i4692.m_fontSizeMax = i4693[46]
  i4692.m_fontStyle = i4693[47]
  i4692.m_HorizontalAlignment = i4693[48]
  i4692.m_VerticalAlignment = i4693[49]
  i4692.m_textAlignment = i4693[50]
  i4692.m_characterSpacing = i4693[51]
  i4692.m_wordSpacing = i4693[52]
  i4692.m_lineSpacing = i4693[53]
  i4692.m_lineSpacingMax = i4693[54]
  i4692.m_paragraphSpacing = i4693[55]
  i4692.m_charWidthMaxAdj = i4693[56]
  i4692.m_TextWrappingMode = i4693[57]
  i4692.m_wordWrappingRatios = i4693[58]
  i4692.m_overflowMode = i4693[59]
  request.r(i4693[60], i4693[61], 0, i4692, 'm_linkedTextComponent')
  request.r(i4693[62], i4693[63], 0, i4692, 'parentLinkedComponent')
  i4692.m_enableKerning = !!i4693[64]
  var i4699 = i4693[65]
  var i4698 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i4699.length; i += 1) {
    i4698.add(i4699[i + 0]);
  }
  i4692.m_ActiveFontFeatures = i4698
  i4692.m_enableExtraPadding = !!i4693[66]
  i4692.checkPaddingRequired = !!i4693[67]
  i4692.m_isRichText = !!i4693[68]
  i4692.m_parseCtrlCharacters = !!i4693[69]
  i4692.m_isOrthographic = !!i4693[70]
  i4692.m_isCullingEnabled = !!i4693[71]
  i4692.m_horizontalMapping = i4693[72]
  i4692.m_verticalMapping = i4693[73]
  i4692.m_uvLineOffset = i4693[74]
  i4692.m_geometrySortingOrder = i4693[75]
  i4692.m_IsTextObjectScaleStatic = !!i4693[76]
  i4692.m_VertexBufferAutoSizeReduction = !!i4693[77]
  i4692.m_useMaxVisibleDescender = !!i4693[78]
  i4692.m_pageToDisplay = i4693[79]
  i4692.m_margin = new pc.Vec4( i4693[80], i4693[81], i4693[82], i4693[83] )
  i4692.m_isUsingLegacyAnimationComponent = !!i4693[84]
  i4692.m_isVolumetricText = !!i4693[85]
  request.r(i4693[86], i4693[87], 0, i4692, 'm_Material')
  i4692.m_EmojiFallbackSupport = !!i4693[88]
  i4692.m_Maskable = !!i4693[89]
  i4692.m_Color = new pc.Color(i4693[90], i4693[91], i4693[92], i4693[93])
  i4692.m_RaycastTarget = !!i4693[94]
  i4692.m_RaycastPadding = new pc.Vec4( i4693[95], i4693[96], i4693[97], i4693[98] )
  return i4692
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i4700 = root || request.c( 'TMPro.VertexGradient' )
  var i4701 = data
  i4700.topLeft = new pc.Color(i4701[0], i4701[1], i4701[2], i4701[3])
  i4700.topRight = new pc.Color(i4701[4], i4701[5], i4701[6], i4701[7])
  i4700.bottomLeft = new pc.Color(i4701[8], i4701[9], i4701[10], i4701[11])
  i4700.bottomRight = new pc.Color(i4701[12], i4701[13], i4701[14], i4701[15])
  return i4700
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i4704 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i4705 = data
  request.r(i4705[0], i4705[1], 0, i4704, 'sharedMesh')
  return i4704
}

Deserializers["PlayerCardUIManager"] = function (request, data, root) {
  var i4706 = root || request.c( 'PlayerCardUIManager' )
  var i4707 = data
  request.r(i4707[0], i4707[1], 0, i4706, 'cardPanel')
  var i4709 = i4707[2]
  var i4708 = []
  for(var i = 0; i < i4709.length; i += 2) {
  request.r(i4709[i + 0], i4709[i + 1], 2, i4708, '')
  }
  i4706.extraObjectsToActivate = i4708
  i4706.waitTime = i4707[3]
  var i4711 = i4707[4]
  var i4710 = []
  for(var i = 0; i < i4711.length; i += 2) {
  request.r(i4711[i + 0], i4711[i + 1], 2, i4710, '')
  }
  i4706.objectsToTurnOnAfterWait = i4710
  var i4713 = i4707[5]
  var i4712 = []
  for(var i = 0; i < i4713.length; i += 2) {
  request.r(i4713[i + 0], i4713[i + 1], 2, i4712, '')
  }
  i4706.objectsToTurnOffAfterWait = i4712
  request.r(i4707[6], i4707[7], 0, i4706, 'nationalityText')
  request.r(i4707[8], i4707[9], 0, i4706, 'playerImage')
  request.r(i4707[10], i4707[11], 0, i4706, 'flagImage')
  return i4706
}

Deserializers["Ply_SoundManager"] = function (request, data, root) {
  var i4716 = root || request.c( 'Ply_SoundManager' )
  var i4717 = data
  i4716.fxAudio = request.d('FxAudio', i4717[0], i4716.fxAudio)
  request.r(i4717[1], i4717[2], 0, i4716, 'bgm1')
  return i4716
}

Deserializers["FxAudio"] = function (request, data, root) {
  var i4718 = root || request.c( 'FxAudio' )
  var i4719 = data
  i4718.ClickBox = request.d('SoundData', i4719[0], i4718.ClickBox)
  i4718.Happy = request.d('SoundData', i4719[1], i4718.Happy)
  i4718.Wrong = request.d('SoundData', i4719[2], i4718.Wrong)
  i4718.Spray = request.d('SoundData', i4719[3], i4718.Spray)
  i4718.Brush = request.d('SoundData', i4719[4], i4718.Brush)
  return i4718
}

Deserializers["SoundData"] = function (request, data, root) {
  var i4720 = root || request.c( 'SoundData' )
  var i4721 = data
  request.r(i4721[0], i4721[1], 0, i4720, 'clip')
  i4720.repeatCount = i4721[2]
  return i4720
}

Deserializers["FavoritePlayerManager"] = function (request, data, root) {
  var i4722 = root || request.c( 'FavoritePlayerManager' )
  var i4723 = data
  i4722.slotLayerMask = UnityEngine.LayerMask.FromIntegerValue( i4723[0] )
  request.r(i4723[1], i4723[2], 0, i4722, 'slotA')
  request.r(i4723[3], i4723[4], 0, i4722, 'slotB')
  request.r(i4723[5], i4723[6], 0, i4722, 'audioSource')
  request.r(i4723[7], i4723[8], 0, i4722, 'orAudio')
  request.r(i4723[9], i4723[10], 0, i4722, 'clickAudio')
  var i4725 = i4723[11]
  var i4724 = new (System.Collections.Generic.List$1(Bridge.ns('FavoritePlayerCard')))
  for(var i = 0; i < i4725.length; i += 2) {
  request.r(i4725[i + 0], i4725[i + 1], 1, i4724, '')
  }
  i4722.playerList = i4724
  request.r(i4723[12], i4723[13], 0, i4722, 'endcardUI')
  request.r(i4723[14], i4723[15], 0, i4722, 'discardTarget')
  i4722.moveDuration = i4723[16]
  i4722.arcHeight = i4723[17]
  i4722.scaleUpSize = i4723[18]
  i4722.scaleUpDuration = i4723[19]
  i4722.scaleDownDuration = i4723[20]
  i4722.appearStartScale = i4723[21]
  i4722.appearMaxScale = i4723[22]
  i4722.appearUpDuration = i4723[23]
  i4722.appearDownDuration = i4723[24]
  i4722.clickScaleSize = i4723[25]
  i4722.clickDownDuration = i4723[26]
  i4722.clickUpDuration = i4723[27]
  var i4727 = i4723[28]
  var i4726 = []
  for(var i = 0; i < i4727.length; i += 2) {
  request.r(i4727[i + 0], i4727[i + 1], 2, i4726, '')
  }
  i4722.extraObjectsToActivate = i4726
  var i4729 = i4723[29]
  var i4728 = []
  for(var i = 0; i < i4729.length; i += 2) {
  request.r(i4729[i + 0], i4729[i + 1], 2, i4728, '')
  }
  i4722.extraObjectsToDeactivate = i4728
  i4722.waitTime = i4723[30]
  var i4731 = i4723[31]
  var i4730 = []
  for(var i = 0; i < i4731.length; i += 2) {
  request.r(i4731[i + 0], i4731[i + 1], 2, i4730, '')
  }
  i4722.objectsToTurnOnAfterWait = i4730
  var i4733 = i4723[32]
  var i4732 = []
  for(var i = 0; i < i4733.length; i += 2) {
  request.r(i4733[i + 0], i4733[i + 1], 2, i4732, '')
  }
  i4722.objectsToTurnOffAfterWait = i4732
  return i4722
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i4736 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i4737 = data
  i4736.planeDistance = i4737[0]
  i4736.referencePixelsPerUnit = i4737[1]
  i4736.isFallbackOverlay = !!i4737[2]
  i4736.renderMode = i4737[3]
  i4736.renderOrder = i4737[4]
  i4736.sortingLayerName = i4737[5]
  i4736.sortingOrder = i4737[6]
  i4736.scaleFactor = i4737[7]
  request.r(i4737[8], i4737[9], 0, i4736, 'worldCamera')
  i4736.overrideSorting = !!i4737[10]
  i4736.pixelPerfect = !!i4737[11]
  i4736.targetDisplay = i4737[12]
  i4736.overridePixelPerfect = !!i4737[13]
  i4736.enabled = !!i4737[14]
  return i4736
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i4738 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i4739 = data
  i4738.m_UiScaleMode = i4739[0]
  i4738.m_ReferencePixelsPerUnit = i4739[1]
  i4738.m_ScaleFactor = i4739[2]
  i4738.m_ReferenceResolution = new pc.Vec2( i4739[3], i4739[4] )
  i4738.m_ScreenMatchMode = i4739[5]
  i4738.m_MatchWidthOrHeight = i4739[6]
  i4738.m_PhysicalUnit = i4739[7]
  i4738.m_FallbackScreenDPI = i4739[8]
  i4738.m_DefaultSpriteDPI = i4739[9]
  i4738.m_DynamicPixelsPerUnit = i4739[10]
  i4738.m_PresetInfoIsWorld = !!i4739[11]
  return i4738
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i4740 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i4741 = data
  i4740.m_IgnoreReversedGraphics = !!i4741[0]
  i4740.m_BlockingObjects = i4741[1]
  i4740.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i4741[2] )
  return i4740
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i4742 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i4743 = data
  i4742.cullTransparentMesh = !!i4743[0]
  return i4742
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i4744 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i4745 = data
  i4744.m_hasFontAssetChanged = !!i4745[0]
  request.r(i4745[1], i4745[2], 0, i4744, 'm_baseMaterial')
  i4744.m_maskOffset = new pc.Vec4( i4745[3], i4745[4], i4745[5], i4745[6] )
  i4744.m_text = i4745[7]
  i4744.m_isRightToLeft = !!i4745[8]
  request.r(i4745[9], i4745[10], 0, i4744, 'm_fontAsset')
  request.r(i4745[11], i4745[12], 0, i4744, 'm_sharedMaterial')
  var i4747 = i4745[13]
  var i4746 = []
  for(var i = 0; i < i4747.length; i += 2) {
  request.r(i4747[i + 0], i4747[i + 1], 2, i4746, '')
  }
  i4744.m_fontSharedMaterials = i4746
  request.r(i4745[14], i4745[15], 0, i4744, 'm_fontMaterial')
  var i4749 = i4745[16]
  var i4748 = []
  for(var i = 0; i < i4749.length; i += 2) {
  request.r(i4749[i + 0], i4749[i + 1], 2, i4748, '')
  }
  i4744.m_fontMaterials = i4748
  i4744.m_fontColor32 = UnityEngine.Color32.ConstructColor(i4745[17], i4745[18], i4745[19], i4745[20])
  i4744.m_fontColor = new pc.Color(i4745[21], i4745[22], i4745[23], i4745[24])
  i4744.m_enableVertexGradient = !!i4745[25]
  i4744.m_colorMode = i4745[26]
  i4744.m_fontColorGradient = request.d('TMPro.VertexGradient', i4745[27], i4744.m_fontColorGradient)
  request.r(i4745[28], i4745[29], 0, i4744, 'm_fontColorGradientPreset')
  request.r(i4745[30], i4745[31], 0, i4744, 'm_spriteAsset')
  i4744.m_tintAllSprites = !!i4745[32]
  request.r(i4745[33], i4745[34], 0, i4744, 'm_StyleSheet')
  i4744.m_TextStyleHashCode = i4745[35]
  i4744.m_overrideHtmlColors = !!i4745[36]
  i4744.m_faceColor = UnityEngine.Color32.ConstructColor(i4745[37], i4745[38], i4745[39], i4745[40])
  i4744.m_fontSize = i4745[41]
  i4744.m_fontSizeBase = i4745[42]
  i4744.m_fontWeight = i4745[43]
  i4744.m_enableAutoSizing = !!i4745[44]
  i4744.m_fontSizeMin = i4745[45]
  i4744.m_fontSizeMax = i4745[46]
  i4744.m_fontStyle = i4745[47]
  i4744.m_HorizontalAlignment = i4745[48]
  i4744.m_VerticalAlignment = i4745[49]
  i4744.m_textAlignment = i4745[50]
  i4744.m_characterSpacing = i4745[51]
  i4744.m_wordSpacing = i4745[52]
  i4744.m_lineSpacing = i4745[53]
  i4744.m_lineSpacingMax = i4745[54]
  i4744.m_paragraphSpacing = i4745[55]
  i4744.m_charWidthMaxAdj = i4745[56]
  i4744.m_TextWrappingMode = i4745[57]
  i4744.m_wordWrappingRatios = i4745[58]
  i4744.m_overflowMode = i4745[59]
  request.r(i4745[60], i4745[61], 0, i4744, 'm_linkedTextComponent')
  request.r(i4745[62], i4745[63], 0, i4744, 'parentLinkedComponent')
  i4744.m_enableKerning = !!i4745[64]
  var i4751 = i4745[65]
  var i4750 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i4751.length; i += 1) {
    i4750.add(i4751[i + 0]);
  }
  i4744.m_ActiveFontFeatures = i4750
  i4744.m_enableExtraPadding = !!i4745[66]
  i4744.checkPaddingRequired = !!i4745[67]
  i4744.m_isRichText = !!i4745[68]
  i4744.m_parseCtrlCharacters = !!i4745[69]
  i4744.m_isOrthographic = !!i4745[70]
  i4744.m_isCullingEnabled = !!i4745[71]
  i4744.m_horizontalMapping = i4745[72]
  i4744.m_verticalMapping = i4745[73]
  i4744.m_uvLineOffset = i4745[74]
  i4744.m_geometrySortingOrder = i4745[75]
  i4744.m_IsTextObjectScaleStatic = !!i4745[76]
  i4744.m_VertexBufferAutoSizeReduction = !!i4745[77]
  i4744.m_useMaxVisibleDescender = !!i4745[78]
  i4744.m_pageToDisplay = i4745[79]
  i4744.m_margin = new pc.Vec4( i4745[80], i4745[81], i4745[82], i4745[83] )
  i4744.m_isUsingLegacyAnimationComponent = !!i4745[84]
  i4744.m_isVolumetricText = !!i4745[85]
  request.r(i4745[86], i4745[87], 0, i4744, 'm_Material')
  i4744.m_EmojiFallbackSupport = !!i4745[88]
  i4744.m_Maskable = !!i4745[89]
  i4744.m_Color = new pc.Color(i4745[90], i4745[91], i4745[92], i4745[93])
  i4744.m_RaycastTarget = !!i4745[94]
  i4744.m_RaycastPadding = new pc.Vec4( i4745[95], i4745[96], i4745[97], i4745[98] )
  return i4744
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i4752 = root || request.c( 'UnityEngine.UI.Image' )
  var i4753 = data
  request.r(i4753[0], i4753[1], 0, i4752, 'm_Sprite')
  i4752.m_Type = i4753[2]
  i4752.m_PreserveAspect = !!i4753[3]
  i4752.m_FillCenter = !!i4753[4]
  i4752.m_FillMethod = i4753[5]
  i4752.m_FillAmount = i4753[6]
  i4752.m_FillClockwise = !!i4753[7]
  i4752.m_FillOrigin = i4753[8]
  i4752.m_UseSpriteMesh = !!i4753[9]
  i4752.m_PixelsPerUnitMultiplier = i4753[10]
  request.r(i4753[11], i4753[12], 0, i4752, 'm_Material')
  i4752.m_Maskable = !!i4753[13]
  i4752.m_Color = new pc.Color(i4753[14], i4753[15], i4753[16], i4753[17])
  i4752.m_RaycastTarget = !!i4753[18]
  i4752.m_RaycastPadding = new pc.Vec4( i4753[19], i4753[20], i4753[21], i4753[22] )
  return i4752
}

Deserializers["PlayerSlot"] = function (request, data, root) {
  var i4754 = root || request.c( 'PlayerSlot' )
  var i4755 = data
  request.r(i4755[0], i4755[1], 0, i4754, 'spriteRenderer')
  request.r(i4755[2], i4755[3], 0, i4754, 'lightEffect')
  i4754.idleScale = i4755[4]
  i4754.idleDuration = i4755[5]
  i4754.originalPosition = new pc.Vec3( i4755[6], i4755[7], i4755[8] )
  i4754.originalScale = new pc.Vec3( i4755[9], i4755[10], i4755[11] )
  request.r(i4755[12], i4755[13], 0, i4754, 'currentData')
  return i4754
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i4756 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i4757 = data
  request.r(i4757[0], i4757[1], 0, i4756, 'm_FirstSelected')
  i4756.m_sendNavigationEvents = !!i4757[2]
  i4756.m_DragThreshold = i4757[3]
  return i4756
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i4758 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i4759 = data
  i4758.m_HorizontalAxis = i4759[0]
  i4758.m_VerticalAxis = i4759[1]
  i4758.m_SubmitButton = i4759[2]
  i4758.m_CancelButton = i4759[3]
  i4758.m_InputActionsPerSecond = i4759[4]
  i4758.m_RepeatDelay = i4759[5]
  i4758.m_ForceModuleActive = !!i4759[6]
  i4758.m_SendPointerHoverToParent = !!i4759[7]
  return i4758
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i4760 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i4761 = data
  i4760.ambientIntensity = i4761[0]
  i4760.reflectionIntensity = i4761[1]
  i4760.ambientMode = i4761[2]
  i4760.ambientLight = new pc.Color(i4761[3], i4761[4], i4761[5], i4761[6])
  i4760.ambientSkyColor = new pc.Color(i4761[7], i4761[8], i4761[9], i4761[10])
  i4760.ambientGroundColor = new pc.Color(i4761[11], i4761[12], i4761[13], i4761[14])
  i4760.ambientEquatorColor = new pc.Color(i4761[15], i4761[16], i4761[17], i4761[18])
  i4760.fogColor = new pc.Color(i4761[19], i4761[20], i4761[21], i4761[22])
  i4760.fogEndDistance = i4761[23]
  i4760.fogStartDistance = i4761[24]
  i4760.fogDensity = i4761[25]
  i4760.fog = !!i4761[26]
  request.r(i4761[27], i4761[28], 0, i4760, 'skybox')
  i4760.fogMode = i4761[29]
  var i4763 = i4761[30]
  var i4762 = []
  for(var i = 0; i < i4763.length; i += 1) {
    i4762.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i4763[i + 0]) );
  }
  i4760.lightmaps = i4762
  i4760.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i4761[31], i4760.lightProbes)
  i4760.lightmapsMode = i4761[32]
  i4760.mixedBakeMode = i4761[33]
  i4760.environmentLightingMode = i4761[34]
  i4760.ambientProbe = new pc.SphericalHarmonicsL2(i4761[35])
  i4760.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i4761[36])
  i4760.useReferenceAmbientProbe = !!i4761[37]
  request.r(i4761[38], i4761[39], 0, i4760, 'customReflection')
  request.r(i4761[40], i4761[41], 0, i4760, 'defaultReflection')
  i4760.defaultReflectionMode = i4761[42]
  i4760.defaultReflectionResolution = i4761[43]
  i4760.sunLightObjectId = i4761[44]
  i4760.pixelLightCount = i4761[45]
  i4760.defaultReflectionHDR = !!i4761[46]
  i4760.hasLightDataAsset = !!i4761[47]
  i4760.hasManualGenerate = !!i4761[48]
  return i4760
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i4766 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i4767 = data
  request.r(i4767[0], i4767[1], 0, i4766, 'lightmapColor')
  request.r(i4767[2], i4767[3], 0, i4766, 'lightmapDirection')
  request.r(i4767[4], i4767[5], 0, i4766, 'shadowMask')
  return i4766
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i4768 = root || new UnityEngine.LightProbes()
  var i4769 = data
  return i4768
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i4776 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i4777 = data
  var i4779 = i4777[0]
  var i4778 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i4779.length; i += 1) {
    i4778.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i4779[i + 0]));
  }
  i4776.ShaderCompilationErrors = i4778
  i4776.name = i4777[1]
  i4776.guid = i4777[2]
  var i4781 = i4777[3]
  var i4780 = []
  for(var i = 0; i < i4781.length; i += 1) {
    i4780.push( i4781[i + 0] );
  }
  i4776.shaderDefinedKeywords = i4780
  var i4783 = i4777[4]
  var i4782 = []
  for(var i = 0; i < i4783.length; i += 1) {
    i4782.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i4783[i + 0]) );
  }
  i4776.passes = i4782
  var i4785 = i4777[5]
  var i4784 = []
  for(var i = 0; i < i4785.length; i += 1) {
    i4784.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i4785[i + 0]) );
  }
  i4776.usePasses = i4784
  var i4787 = i4777[6]
  var i4786 = []
  for(var i = 0; i < i4787.length; i += 1) {
    i4786.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i4787[i + 0]) );
  }
  i4776.defaultParameterValues = i4786
  request.r(i4777[7], i4777[8], 0, i4776, 'unityFallbackShader')
  i4776.readDepth = !!i4777[9]
  i4776.hasDepthOnlyPass = !!i4777[10]
  i4776.isCreatedByShaderGraph = !!i4777[11]
  i4776.disableBatching = !!i4777[12]
  i4776.compiled = !!i4777[13]
  return i4776
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i4790 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i4791 = data
  i4790.shaderName = i4791[0]
  i4790.errorMessage = i4791[1]
  return i4790
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i4796 = root || new pc.UnityShaderPass()
  var i4797 = data
  i4796.id = i4797[0]
  i4796.subShaderIndex = i4797[1]
  i4796.name = i4797[2]
  i4796.passType = i4797[3]
  i4796.grabPassTextureName = i4797[4]
  i4796.usePass = !!i4797[5]
  i4796.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4797[6], i4796.zTest)
  i4796.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4797[7], i4796.zWrite)
  i4796.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4797[8], i4796.culling)
  i4796.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i4797[9], i4796.blending)
  i4796.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i4797[10], i4796.alphaBlending)
  i4796.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4797[11], i4796.colorWriteMask)
  i4796.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4797[12], i4796.offsetUnits)
  i4796.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4797[13], i4796.offsetFactor)
  i4796.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4797[14], i4796.stencilRef)
  i4796.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4797[15], i4796.stencilReadMask)
  i4796.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4797[16], i4796.stencilWriteMask)
  i4796.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i4797[17], i4796.stencilOp)
  i4796.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i4797[18], i4796.stencilOpFront)
  i4796.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i4797[19], i4796.stencilOpBack)
  var i4799 = i4797[20]
  var i4798 = []
  for(var i = 0; i < i4799.length; i += 1) {
    i4798.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i4799[i + 0]) );
  }
  i4796.tags = i4798
  var i4801 = i4797[21]
  var i4800 = []
  for(var i = 0; i < i4801.length; i += 1) {
    i4800.push( i4801[i + 0] );
  }
  i4796.passDefinedKeywords = i4800
  var i4803 = i4797[22]
  var i4802 = []
  for(var i = 0; i < i4803.length; i += 1) {
    i4802.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i4803[i + 0]) );
  }
  i4796.passDefinedKeywordGroups = i4802
  var i4805 = i4797[23]
  var i4804 = []
  for(var i = 0; i < i4805.length; i += 1) {
    i4804.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i4805[i + 0]) );
  }
  i4796.variants = i4804
  var i4807 = i4797[24]
  var i4806 = []
  for(var i = 0; i < i4807.length; i += 1) {
    i4806.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i4807[i + 0]) );
  }
  i4796.excludedVariants = i4806
  i4796.hasDepthReader = !!i4797[25]
  return i4796
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i4808 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i4809 = data
  i4808.val = i4809[0]
  i4808.name = i4809[1]
  return i4808
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i4810 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i4811 = data
  i4810.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4811[0], i4810.src)
  i4810.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4811[1], i4810.dst)
  i4810.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4811[2], i4810.op)
  return i4810
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i4812 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i4813 = data
  i4812.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4813[0], i4812.pass)
  i4812.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4813[1], i4812.fail)
  i4812.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4813[2], i4812.zFail)
  i4812.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4813[3], i4812.comp)
  return i4812
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i4816 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i4817 = data
  i4816.name = i4817[0]
  i4816.value = i4817[1]
  return i4816
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i4820 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i4821 = data
  var i4823 = i4821[0]
  var i4822 = []
  for(var i = 0; i < i4823.length; i += 1) {
    i4822.push( i4823[i + 0] );
  }
  i4820.keywords = i4822
  i4820.hasDiscard = !!i4821[1]
  return i4820
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i4826 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i4827 = data
  i4826.passId = i4827[0]
  i4826.subShaderIndex = i4827[1]
  var i4829 = i4827[2]
  var i4828 = []
  for(var i = 0; i < i4829.length; i += 1) {
    i4828.push( i4829[i + 0] );
  }
  i4826.keywords = i4828
  i4826.vertexProgram = i4827[3]
  i4826.fragmentProgram = i4827[4]
  i4826.exportedForWebGl2 = !!i4827[5]
  i4826.readDepth = !!i4827[6]
  return i4826
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i4832 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i4833 = data
  request.r(i4833[0], i4833[1], 0, i4832, 'shader')
  i4832.pass = i4833[2]
  return i4832
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i4836 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i4837 = data
  i4836.name = i4837[0]
  i4836.type = i4837[1]
  i4836.value = new pc.Vec4( i4837[2], i4837[3], i4837[4], i4837[5] )
  i4836.textureValue = i4837[6]
  i4836.shaderPropertyFlag = i4837[7]
  return i4836
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i4838 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i4839 = data
  i4838.name = i4839[0]
  request.r(i4839[1], i4839[2], 0, i4838, 'texture')
  i4838.aabb = i4839[3]
  i4838.vertices = i4839[4]
  i4838.triangles = i4839[5]
  i4838.textureRect = UnityEngine.Rect.MinMaxRect(i4839[6], i4839[7], i4839[8], i4839[9])
  i4838.packedRect = UnityEngine.Rect.MinMaxRect(i4839[10], i4839[11], i4839[12], i4839[13])
  i4838.border = new pc.Vec4( i4839[14], i4839[15], i4839[16], i4839[17] )
  i4838.transparency = i4839[18]
  i4838.bounds = i4839[19]
  i4838.pixelsPerUnit = i4839[20]
  i4838.textureWidth = i4839[21]
  i4838.textureHeight = i4839[22]
  i4838.nativeSize = new pc.Vec2( i4839[23], i4839[24] )
  i4838.pivot = new pc.Vec2( i4839[25], i4839[26] )
  i4838.textureRectOffset = new pc.Vec2( i4839[27], i4839[28] )
  return i4838
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i4840 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i4841 = data
  i4840.name = i4841[0]
  return i4840
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i4842 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i4843 = data
  i4842.name = i4843[0]
  i4842.wrapMode = i4843[1]
  i4842.isLooping = !!i4843[2]
  i4842.length = i4843[3]
  var i4845 = i4843[4]
  var i4844 = []
  for(var i = 0; i < i4845.length; i += 1) {
    i4844.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i4845[i + 0]) );
  }
  i4842.curves = i4844
  var i4847 = i4843[5]
  var i4846 = []
  for(var i = 0; i < i4847.length; i += 1) {
    i4846.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i4847[i + 0]) );
  }
  i4842.events = i4846
  i4842.halfPrecision = !!i4843[6]
  i4842._frameRate = i4843[7]
  i4842.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i4843[8], i4842.localBounds)
  i4842.hasMuscleCurves = !!i4843[9]
  var i4849 = i4843[10]
  var i4848 = []
  for(var i = 0; i < i4849.length; i += 1) {
    i4848.push( i4849[i + 0] );
  }
  i4842.clipMuscleConstant = i4848
  i4842.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i4843[11], i4842.clipBindingConstant)
  return i4842
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i4852 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i4853 = data
  i4852.path = i4853[0]
  i4852.hash = i4853[1]
  i4852.componentType = i4853[2]
  i4852.property = i4853[3]
  i4852.keys = i4853[4]
  var i4855 = i4853[5]
  var i4854 = []
  for(var i = 0; i < i4855.length; i += 1) {
    i4854.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i4855[i + 0]) );
  }
  i4852.objectReferenceKeys = i4854
  return i4852
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i4858 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i4859 = data
  i4858.time = i4859[0]
  request.r(i4859[1], i4859[2], 0, i4858, 'value')
  return i4858
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i4862 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i4863 = data
  i4862.functionName = i4863[0]
  i4862.floatParameter = i4863[1]
  i4862.intParameter = i4863[2]
  i4862.stringParameter = i4863[3]
  request.r(i4863[4], i4863[5], 0, i4862, 'objectReferenceParameter')
  i4862.time = i4863[6]
  return i4862
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i4864 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i4865 = data
  i4864.center = new pc.Vec3( i4865[0], i4865[1], i4865[2] )
  i4864.extends = new pc.Vec3( i4865[3], i4865[4], i4865[5] )
  return i4864
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i4868 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i4869 = data
  var i4871 = i4869[0]
  var i4870 = []
  for(var i = 0; i < i4871.length; i += 1) {
    i4870.push( i4871[i + 0] );
  }
  i4868.genericBindings = i4870
  var i4873 = i4869[1]
  var i4872 = []
  for(var i = 0; i < i4873.length; i += 1) {
    i4872.push( i4873[i + 0] );
  }
  i4868.pptrCurveMapping = i4872
  return i4868
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i4874 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i4875 = data
  i4874.name = i4875[0]
  i4874.ascent = i4875[1]
  i4874.originalLineHeight = i4875[2]
  i4874.fontSize = i4875[3]
  var i4877 = i4875[4]
  var i4876 = []
  for(var i = 0; i < i4877.length; i += 1) {
    i4876.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i4877[i + 0]) );
  }
  i4874.characterInfo = i4876
  request.r(i4875[5], i4875[6], 0, i4874, 'texture')
  i4874.originalFontSize = i4875[7]
  return i4874
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i4880 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i4881 = data
  i4880.index = i4881[0]
  i4880.advance = i4881[1]
  i4880.bearing = i4881[2]
  i4880.glyphWidth = i4881[3]
  i4880.glyphHeight = i4881[4]
  i4880.minX = i4881[5]
  i4880.maxX = i4881[6]
  i4880.minY = i4881[7]
  i4880.maxY = i4881[8]
  i4880.uvBottomLeftX = i4881[9]
  i4880.uvBottomLeftY = i4881[10]
  i4880.uvBottomRightX = i4881[11]
  i4880.uvBottomRightY = i4881[12]
  i4880.uvTopLeftX = i4881[13]
  i4880.uvTopLeftY = i4881[14]
  i4880.uvTopRightX = i4881[15]
  i4880.uvTopRightY = i4881[16]
  return i4880
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i4882 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i4883 = data
  i4882.name = i4883[0]
  var i4885 = i4883[1]
  var i4884 = []
  for(var i = 0; i < i4885.length; i += 1) {
    i4884.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i4885[i + 0]) );
  }
  i4882.layers = i4884
  var i4887 = i4883[2]
  var i4886 = []
  for(var i = 0; i < i4887.length; i += 1) {
    i4886.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i4887[i + 0]) );
  }
  i4882.parameters = i4886
  i4882.animationClips = i4883[3]
  i4882.avatarUnsupported = i4883[4]
  return i4882
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i4890 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i4891 = data
  i4890.name = i4891[0]
  i4890.defaultWeight = i4891[1]
  i4890.blendingMode = i4891[2]
  i4890.avatarMask = i4891[3]
  i4890.syncedLayerIndex = i4891[4]
  i4890.syncedLayerAffectsTiming = !!i4891[5]
  i4890.syncedLayers = i4891[6]
  i4890.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i4891[7], i4890.stateMachine)
  return i4890
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i4892 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i4893 = data
  i4892.id = i4893[0]
  i4892.name = i4893[1]
  i4892.path = i4893[2]
  var i4895 = i4893[3]
  var i4894 = []
  for(var i = 0; i < i4895.length; i += 1) {
    i4894.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i4895[i + 0]) );
  }
  i4892.states = i4894
  var i4897 = i4893[4]
  var i4896 = []
  for(var i = 0; i < i4897.length; i += 1) {
    i4896.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i4897[i + 0]) );
  }
  i4892.machines = i4896
  var i4899 = i4893[5]
  var i4898 = []
  for(var i = 0; i < i4899.length; i += 1) {
    i4898.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i4899[i + 0]) );
  }
  i4892.entryStateTransitions = i4898
  var i4901 = i4893[6]
  var i4900 = []
  for(var i = 0; i < i4901.length; i += 1) {
    i4900.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i4901[i + 0]) );
  }
  i4892.exitStateTransitions = i4900
  var i4903 = i4893[7]
  var i4902 = []
  for(var i = 0; i < i4903.length; i += 1) {
    i4902.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i4903[i + 0]) );
  }
  i4892.anyStateTransitions = i4902
  i4892.defaultStateId = i4893[8]
  return i4892
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i4906 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i4907 = data
  i4906.id = i4907[0]
  i4906.name = i4907[1]
  i4906.cycleOffset = i4907[2]
  i4906.cycleOffsetParameter = i4907[3]
  i4906.cycleOffsetParameterActive = !!i4907[4]
  i4906.mirror = !!i4907[5]
  i4906.mirrorParameter = i4907[6]
  i4906.mirrorParameterActive = !!i4907[7]
  i4906.motionId = i4907[8]
  i4906.nameHash = i4907[9]
  i4906.fullPathHash = i4907[10]
  i4906.speed = i4907[11]
  i4906.speedParameter = i4907[12]
  i4906.speedParameterActive = !!i4907[13]
  i4906.tag = i4907[14]
  i4906.tagHash = i4907[15]
  i4906.writeDefaultValues = !!i4907[16]
  var i4909 = i4907[17]
  var i4908 = []
  for(var i = 0; i < i4909.length; i += 2) {
  request.r(i4909[i + 0], i4909[i + 1], 2, i4908, '')
  }
  i4906.behaviours = i4908
  var i4911 = i4907[18]
  var i4910 = []
  for(var i = 0; i < i4911.length; i += 1) {
    i4910.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i4911[i + 0]) );
  }
  i4906.transitions = i4910
  return i4906
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i4916 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i4917 = data
  i4916.fullPath = i4917[0]
  i4916.canTransitionToSelf = !!i4917[1]
  i4916.duration = i4917[2]
  i4916.exitTime = i4917[3]
  i4916.hasExitTime = !!i4917[4]
  i4916.hasFixedDuration = !!i4917[5]
  i4916.interruptionSource = i4917[6]
  i4916.offset = i4917[7]
  i4916.orderedInterruption = !!i4917[8]
  i4916.destinationStateId = i4917[9]
  i4916.isExit = !!i4917[10]
  i4916.mute = !!i4917[11]
  i4916.solo = !!i4917[12]
  var i4919 = i4917[13]
  var i4918 = []
  for(var i = 0; i < i4919.length; i += 1) {
    i4918.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i4919[i + 0]) );
  }
  i4916.conditions = i4918
  return i4916
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i4924 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i4925 = data
  i4924.destinationStateId = i4925[0]
  i4924.isExit = !!i4925[1]
  i4924.mute = !!i4925[2]
  i4924.solo = !!i4925[3]
  var i4927 = i4925[4]
  var i4926 = []
  for(var i = 0; i < i4927.length; i += 1) {
    i4926.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i4927[i + 0]) );
  }
  i4924.conditions = i4926
  return i4924
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i4930 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i4931 = data
  i4930.defaultBool = !!i4931[0]
  i4930.defaultFloat = i4931[1]
  i4930.defaultInt = i4931[2]
  i4930.name = i4931[3]
  i4930.nameHash = i4931[4]
  i4930.type = i4931[5]
  return i4930
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i4932 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i4933 = data
  i4932.name = i4933[0]
  i4932.bytes64 = i4933[1]
  i4932.data = i4933[2]
  return i4932
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i4934 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i4935 = data
  i4934.normalStyle = i4935[0]
  i4934.normalSpacingOffset = i4935[1]
  i4934.boldStyle = i4935[2]
  i4934.boldSpacing = i4935[3]
  i4934.italicStyle = i4935[4]
  i4934.tabSize = i4935[5]
  request.r(i4935[6], i4935[7], 0, i4934, 'atlas')
  i4934.m_SourceFontFileGUID = i4935[8]
  i4934.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i4935[9], i4934.m_CreationSettings)
  request.r(i4935[10], i4935[11], 0, i4934, 'm_SourceFontFile')
  i4934.m_SourceFontFilePath = i4935[12]
  i4934.m_AtlasPopulationMode = i4935[13]
  i4934.InternalDynamicOS = !!i4935[14]
  var i4937 = i4935[15]
  var i4936 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i4937.length; i += 1) {
    i4936.add(request.d('UnityEngine.TextCore.Glyph', i4937[i + 0]));
  }
  i4934.m_GlyphTable = i4936
  var i4939 = i4935[16]
  var i4938 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i4939.length; i += 1) {
    i4938.add(request.d('TMPro.TMP_Character', i4939[i + 0]));
  }
  i4934.m_CharacterTable = i4938
  var i4941 = i4935[17]
  var i4940 = []
  for(var i = 0; i < i4941.length; i += 2) {
  request.r(i4941[i + 0], i4941[i + 1], 2, i4940, '')
  }
  i4934.m_AtlasTextures = i4940
  i4934.m_AtlasTextureIndex = i4935[18]
  i4934.m_IsMultiAtlasTexturesEnabled = !!i4935[19]
  i4934.m_GetFontFeatures = !!i4935[20]
  i4934.m_ClearDynamicDataOnBuild = !!i4935[21]
  i4934.m_AtlasWidth = i4935[22]
  i4934.m_AtlasHeight = i4935[23]
  i4934.m_AtlasPadding = i4935[24]
  i4934.m_AtlasRenderMode = i4935[25]
  var i4943 = i4935[26]
  var i4942 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i4943.length; i += 1) {
    i4942.add(request.d('UnityEngine.TextCore.GlyphRect', i4943[i + 0]));
  }
  i4934.m_UsedGlyphRects = i4942
  var i4945 = i4935[27]
  var i4944 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i4945.length; i += 1) {
    i4944.add(request.d('UnityEngine.TextCore.GlyphRect', i4945[i + 0]));
  }
  i4934.m_FreeGlyphRects = i4944
  i4934.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i4935[28], i4934.m_FontFeatureTable)
  i4934.m_ShouldReimportFontFeatures = !!i4935[29]
  var i4947 = i4935[30]
  var i4946 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i4947.length; i += 2) {
  request.r(i4947[i + 0], i4947[i + 1], 1, i4946, '')
  }
  i4934.m_FallbackFontAssetTable = i4946
  var i4949 = i4935[31]
  var i4948 = []
  for(var i = 0; i < i4949.length; i += 1) {
    i4948.push( request.d('TMPro.TMP_FontWeightPair', i4949[i + 0]) );
  }
  i4934.m_FontWeightTable = i4948
  var i4951 = i4935[32]
  var i4950 = []
  for(var i = 0; i < i4951.length; i += 1) {
    i4950.push( request.d('TMPro.TMP_FontWeightPair', i4951[i + 0]) );
  }
  i4934.fontWeights = i4950
  i4934.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i4935[33], i4934.m_fontInfo)
  var i4953 = i4935[34]
  var i4952 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i4953.length; i += 1) {
    i4952.add(request.d('TMPro.TMP_Glyph', i4953[i + 0]));
  }
  i4934.m_glyphInfoList = i4952
  i4934.m_KerningTable = request.d('TMPro.KerningTable', i4935[35], i4934.m_KerningTable)
  var i4955 = i4935[36]
  var i4954 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i4955.length; i += 2) {
  request.r(i4955[i + 0], i4955[i + 1], 1, i4954, '')
  }
  i4934.fallbackFontAssets = i4954
  i4934.m_Version = i4935[37]
  i4934.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i4935[38], i4934.m_FaceInfo)
  request.r(i4935[39], i4935[40], 0, i4934, 'm_Material')
  return i4934
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i4956 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i4957 = data
  i4956.sourceFontFileName = i4957[0]
  i4956.sourceFontFileGUID = i4957[1]
  i4956.faceIndex = i4957[2]
  i4956.pointSizeSamplingMode = i4957[3]
  i4956.pointSize = i4957[4]
  i4956.padding = i4957[5]
  i4956.paddingMode = i4957[6]
  i4956.packingMode = i4957[7]
  i4956.atlasWidth = i4957[8]
  i4956.atlasHeight = i4957[9]
  i4956.characterSetSelectionMode = i4957[10]
  i4956.characterSequence = i4957[11]
  i4956.referencedFontAssetGUID = i4957[12]
  i4956.referencedTextAssetGUID = i4957[13]
  i4956.fontStyle = i4957[14]
  i4956.fontStyleModifier = i4957[15]
  i4956.renderMode = i4957[16]
  i4956.includeFontFeatures = !!i4957[17]
  return i4956
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i4960 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i4961 = data
  i4960.m_Index = i4961[0]
  i4960.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i4961[1], i4960.m_Metrics)
  i4960.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i4961[2], i4960.m_GlyphRect)
  i4960.m_Scale = i4961[3]
  i4960.m_AtlasIndex = i4961[4]
  i4960.m_ClassDefinitionType = i4961[5]
  return i4960
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i4962 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i4963 = data
  i4962.m_Width = i4963[0]
  i4962.m_Height = i4963[1]
  i4962.m_HorizontalBearingX = i4963[2]
  i4962.m_HorizontalBearingY = i4963[3]
  i4962.m_HorizontalAdvance = i4963[4]
  return i4962
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i4964 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i4965 = data
  i4964.m_X = i4965[0]
  i4964.m_Y = i4965[1]
  i4964.m_Width = i4965[2]
  i4964.m_Height = i4965[3]
  return i4964
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i4968 = root || request.c( 'TMPro.TMP_Character' )
  var i4969 = data
  i4968.m_ElementType = i4969[0]
  i4968.m_Unicode = i4969[1]
  i4968.m_GlyphIndex = i4969[2]
  i4968.m_Scale = i4969[3]
  return i4968
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i4974 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i4975 = data
  var i4977 = i4975[0]
  var i4976 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i4977.length; i += 1) {
    i4976.add(request.d('TMPro.MultipleSubstitutionRecord', i4977[i + 0]));
  }
  i4974.m_MultipleSubstitutionRecords = i4976
  var i4979 = i4975[1]
  var i4978 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i4979.length; i += 1) {
    i4978.add(request.d('TMPro.LigatureSubstitutionRecord', i4979[i + 0]));
  }
  i4974.m_LigatureSubstitutionRecords = i4978
  var i4981 = i4975[2]
  var i4980 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i4981.length; i += 1) {
    i4980.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i4981[i + 0]));
  }
  i4974.m_GlyphPairAdjustmentRecords = i4980
  var i4983 = i4975[3]
  var i4982 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i4983.length; i += 1) {
    i4982.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i4983[i + 0]));
  }
  i4974.m_MarkToBaseAdjustmentRecords = i4982
  var i4985 = i4975[4]
  var i4984 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i4985.length; i += 1) {
    i4984.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i4985[i + 0]));
  }
  i4974.m_MarkToMarkAdjustmentRecords = i4984
  return i4974
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i4988 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i4989 = data
  i4988.m_TargetGlyphID = i4989[0]
  i4988.m_SubstituteGlyphIDs = i4989[1]
  return i4988
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i4992 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i4993 = data
  i4992.m_ComponentGlyphIDs = i4993[0]
  i4992.m_LigatureGlyphID = i4993[1]
  return i4992
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i4996 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i4997 = data
  i4996.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i4997[0], i4996.m_FirstAdjustmentRecord)
  i4996.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i4997[1], i4996.m_SecondAdjustmentRecord)
  i4996.m_FeatureLookupFlags = i4997[2]
  return i4996
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i4998 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i4999 = data
  i4998.m_GlyphIndex = i4999[0]
  i4998.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i4999[1], i4998.m_GlyphValueRecord)
  return i4998
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i5000 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i5001 = data
  i5000.m_XPlacement = i5001[0]
  i5000.m_YPlacement = i5001[1]
  i5000.m_XAdvance = i5001[2]
  i5000.m_YAdvance = i5001[3]
  return i5000
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i5004 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i5005 = data
  i5004.m_BaseGlyphID = i5005[0]
  i5004.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i5005[1], i5004.m_BaseGlyphAnchorPoint)
  i5004.m_MarkGlyphID = i5005[2]
  i5004.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i5005[3], i5004.m_MarkPositionAdjustment)
  return i5004
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i5008 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i5009 = data
  i5008.m_BaseMarkGlyphID = i5009[0]
  i5008.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i5009[1], i5008.m_BaseMarkGlyphAnchorPoint)
  i5008.m_CombiningMarkGlyphID = i5009[2]
  i5008.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i5009[3], i5008.m_CombiningMarkPositionAdjustment)
  return i5008
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i5014 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i5015 = data
  request.r(i5015[0], i5015[1], 0, i5014, 'regularTypeface')
  request.r(i5015[2], i5015[3], 0, i5014, 'italicTypeface')
  return i5014
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i5016 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i5017 = data
  i5016.Name = i5017[0]
  i5016.PointSize = i5017[1]
  i5016.Scale = i5017[2]
  i5016.CharacterCount = i5017[3]
  i5016.LineHeight = i5017[4]
  i5016.Baseline = i5017[5]
  i5016.Ascender = i5017[6]
  i5016.CapHeight = i5017[7]
  i5016.Descender = i5017[8]
  i5016.CenterLine = i5017[9]
  i5016.SuperscriptOffset = i5017[10]
  i5016.SubscriptOffset = i5017[11]
  i5016.SubSize = i5017[12]
  i5016.Underline = i5017[13]
  i5016.UnderlineThickness = i5017[14]
  i5016.strikethrough = i5017[15]
  i5016.strikethroughThickness = i5017[16]
  i5016.TabWidth = i5017[17]
  i5016.Padding = i5017[18]
  i5016.AtlasWidth = i5017[19]
  i5016.AtlasHeight = i5017[20]
  return i5016
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i5020 = root || request.c( 'TMPro.TMP_Glyph' )
  var i5021 = data
  i5020.id = i5021[0]
  i5020.x = i5021[1]
  i5020.y = i5021[2]
  i5020.width = i5021[3]
  i5020.height = i5021[4]
  i5020.xOffset = i5021[5]
  i5020.yOffset = i5021[6]
  i5020.xAdvance = i5021[7]
  i5020.scale = i5021[8]
  return i5020
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i5022 = root || request.c( 'TMPro.KerningTable' )
  var i5023 = data
  var i5025 = i5023[0]
  var i5024 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i5025.length; i += 1) {
    i5024.add(request.d('TMPro.KerningPair', i5025[i + 0]));
  }
  i5022.kerningPairs = i5024
  return i5022
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i5028 = root || request.c( 'TMPro.KerningPair' )
  var i5029 = data
  i5028.xOffset = i5029[0]
  i5028.m_FirstGlyph = i5029[1]
  i5028.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i5029[2], i5028.m_FirstGlyphAdjustments)
  i5028.m_SecondGlyph = i5029[3]
  i5028.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i5029[4], i5028.m_SecondGlyphAdjustments)
  i5028.m_IgnoreSpacingAdjustments = !!i5029[5]
  return i5028
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i5030 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i5031 = data
  i5030.m_FaceIndex = i5031[0]
  i5030.m_FamilyName = i5031[1]
  i5030.m_StyleName = i5031[2]
  i5030.m_PointSize = i5031[3]
  i5030.m_Scale = i5031[4]
  i5030.m_UnitsPerEM = i5031[5]
  i5030.m_LineHeight = i5031[6]
  i5030.m_AscentLine = i5031[7]
  i5030.m_CapLine = i5031[8]
  i5030.m_MeanLine = i5031[9]
  i5030.m_Baseline = i5031[10]
  i5030.m_DescentLine = i5031[11]
  i5030.m_SuperscriptOffset = i5031[12]
  i5030.m_SuperscriptSize = i5031[13]
  i5030.m_SubscriptOffset = i5031[14]
  i5030.m_SubscriptSize = i5031[15]
  i5030.m_UnderlineOffset = i5031[16]
  i5030.m_UnderlineThickness = i5031[17]
  i5030.m_StrikethroughOffset = i5031[18]
  i5030.m_StrikethroughThickness = i5031[19]
  i5030.m_TabWidth = i5031[20]
  return i5030
}

Deserializers["FavoritePlayerCard"] = function (request, data, root) {
  var i5032 = root || request.c( 'FavoritePlayerCard' )
  var i5033 = data
  i5032.playerName = i5033[0]
  request.r(i5033[1], i5033[2], 0, i5032, 'halfBodySprite')
  request.r(i5033[3], i5033[4], 0, i5032, 'fullBodySprite')
  request.r(i5033[5], i5033[6], 0, i5032, 'nameAudio')
  return i5032
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i5034 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i5035 = data
  i5034.useSafeMode = !!i5035[0]
  i5034.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i5035[1], i5034.safeModeOptions)
  i5034.timeScale = i5035[2]
  i5034.unscaledTimeScale = i5035[3]
  i5034.useSmoothDeltaTime = !!i5035[4]
  i5034.maxSmoothUnscaledTime = i5035[5]
  i5034.rewindCallbackMode = i5035[6]
  i5034.showUnityEditorReport = !!i5035[7]
  i5034.logBehaviour = i5035[8]
  i5034.drawGizmos = !!i5035[9]
  i5034.defaultRecyclable = !!i5035[10]
  i5034.defaultAutoPlay = i5035[11]
  i5034.defaultUpdateType = i5035[12]
  i5034.defaultTimeScaleIndependent = !!i5035[13]
  i5034.defaultEaseType = i5035[14]
  i5034.defaultEaseOvershootOrAmplitude = i5035[15]
  i5034.defaultEasePeriod = i5035[16]
  i5034.defaultAutoKill = !!i5035[17]
  i5034.defaultLoopType = i5035[18]
  i5034.debugMode = !!i5035[19]
  i5034.debugStoreTargetId = !!i5035[20]
  i5034.showPreviewPanel = !!i5035[21]
  i5034.storeSettingsLocation = i5035[22]
  i5034.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i5035[23], i5034.modules)
  i5034.createASMDEF = !!i5035[24]
  i5034.showPlayingTweens = !!i5035[25]
  i5034.showPausedTweens = !!i5035[26]
  return i5034
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i5036 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i5037 = data
  i5036.logBehaviour = i5037[0]
  i5036.nestedTweenFailureBehaviour = i5037[1]
  return i5036
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i5038 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i5039 = data
  i5038.showPanel = !!i5039[0]
  i5038.audioEnabled = !!i5039[1]
  i5038.physicsEnabled = !!i5039[2]
  i5038.physics2DEnabled = !!i5039[3]
  i5038.spriteEnabled = !!i5039[4]
  i5038.uiEnabled = !!i5039[5]
  i5038.uiToolkitEnabled = !!i5039[6]
  i5038.textMeshProEnabled = !!i5039[7]
  i5038.tk2DEnabled = !!i5039[8]
  i5038.deAudioEnabled = !!i5039[9]
  i5038.deUnityExtendedEnabled = !!i5039[10]
  i5038.epoOutlineEnabled = !!i5039[11]
  return i5038
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i5040 = root || request.c( 'TMPro.TMP_Settings' )
  var i5041 = data
  i5040.assetVersion = i5041[0]
  i5040.m_TextWrappingMode = i5041[1]
  i5040.m_enableKerning = !!i5041[2]
  var i5043 = i5041[3]
  var i5042 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i5043.length; i += 1) {
    i5042.add(i5043[i + 0]);
  }
  i5040.m_ActiveFontFeatures = i5042
  i5040.m_enableExtraPadding = !!i5041[4]
  i5040.m_enableTintAllSprites = !!i5041[5]
  i5040.m_enableParseEscapeCharacters = !!i5041[6]
  i5040.m_EnableRaycastTarget = !!i5041[7]
  i5040.m_GetFontFeaturesAtRuntime = !!i5041[8]
  i5040.m_missingGlyphCharacter = i5041[9]
  i5040.m_ClearDynamicDataOnBuild = !!i5041[10]
  i5040.m_warningsDisabled = !!i5041[11]
  request.r(i5041[12], i5041[13], 0, i5040, 'm_defaultFontAsset')
  i5040.m_defaultFontAssetPath = i5041[14]
  i5040.m_defaultFontSize = i5041[15]
  i5040.m_defaultAutoSizeMinRatio = i5041[16]
  i5040.m_defaultAutoSizeMaxRatio = i5041[17]
  i5040.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i5041[18], i5041[19] )
  i5040.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i5041[20], i5041[21] )
  i5040.m_autoSizeTextContainer = !!i5041[22]
  i5040.m_IsTextObjectScaleStatic = !!i5041[23]
  var i5045 = i5041[24]
  var i5044 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i5045.length; i += 2) {
  request.r(i5045[i + 0], i5045[i + 1], 1, i5044, '')
  }
  i5040.m_fallbackFontAssets = i5044
  i5040.m_matchMaterialPreset = !!i5041[25]
  i5040.m_HideSubTextObjects = !!i5041[26]
  request.r(i5041[27], i5041[28], 0, i5040, 'm_defaultSpriteAsset')
  i5040.m_defaultSpriteAssetPath = i5041[29]
  i5040.m_enableEmojiSupport = !!i5041[30]
  i5040.m_MissingCharacterSpriteUnicode = i5041[31]
  var i5047 = i5041[32]
  var i5046 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i5047.length; i += 2) {
  request.r(i5047[i + 0], i5047[i + 1], 1, i5046, '')
  }
  i5040.m_EmojiFallbackTextAssets = i5046
  i5040.m_defaultColorGradientPresetsPath = i5041[33]
  request.r(i5041[34], i5041[35], 0, i5040, 'm_defaultStyleSheet')
  i5040.m_StyleSheetsResourcePath = i5041[36]
  request.r(i5041[37], i5041[38], 0, i5040, 'm_leadingCharacters')
  request.r(i5041[39], i5041[40], 0, i5040, 'm_followingCharacters')
  i5040.m_UseModernHangulLineBreakingRules = !!i5041[41]
  return i5040
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i5050 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i5051 = data
  request.r(i5051[0], i5051[1], 0, i5050, 'spriteSheet')
  var i5053 = i5051[2]
  var i5052 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i5053.length; i += 1) {
    i5052.add(request.d('TMPro.TMP_Sprite', i5053[i + 0]));
  }
  i5050.spriteInfoList = i5052
  var i5055 = i5051[3]
  var i5054 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i5055.length; i += 2) {
  request.r(i5055[i + 0], i5055[i + 1], 1, i5054, '')
  }
  i5050.fallbackSpriteAssets = i5054
  var i5057 = i5051[4]
  var i5056 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i5057.length; i += 1) {
    i5056.add(request.d('TMPro.TMP_SpriteCharacter', i5057[i + 0]));
  }
  i5050.m_SpriteCharacterTable = i5056
  var i5059 = i5051[5]
  var i5058 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i5059.length; i += 1) {
    i5058.add(request.d('TMPro.TMP_SpriteGlyph', i5059[i + 0]));
  }
  i5050.m_GlyphTable = i5058
  i5050.m_Version = i5051[6]
  i5050.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i5051[7], i5050.m_FaceInfo)
  request.r(i5051[8], i5051[9], 0, i5050, 'm_Material')
  return i5050
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i5062 = root || request.c( 'TMPro.TMP_Sprite' )
  var i5063 = data
  i5062.name = i5063[0]
  i5062.hashCode = i5063[1]
  i5062.unicode = i5063[2]
  i5062.pivot = new pc.Vec2( i5063[3], i5063[4] )
  request.r(i5063[5], i5063[6], 0, i5062, 'sprite')
  i5062.id = i5063[7]
  i5062.x = i5063[8]
  i5062.y = i5063[9]
  i5062.width = i5063[10]
  i5062.height = i5063[11]
  i5062.xOffset = i5063[12]
  i5062.yOffset = i5063[13]
  i5062.xAdvance = i5063[14]
  i5062.scale = i5063[15]
  return i5062
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i5068 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i5069 = data
  i5068.m_Name = i5069[0]
  i5068.m_ElementType = i5069[1]
  i5068.m_Unicode = i5069[2]
  i5068.m_GlyphIndex = i5069[3]
  i5068.m_Scale = i5069[4]
  return i5068
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i5072 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i5073 = data
  request.r(i5073[0], i5073[1], 0, i5072, 'sprite')
  i5072.m_Index = i5073[2]
  i5072.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i5073[3], i5072.m_Metrics)
  i5072.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i5073[4], i5072.m_GlyphRect)
  i5072.m_Scale = i5073[5]
  i5072.m_AtlasIndex = i5073[6]
  i5072.m_ClassDefinitionType = i5073[7]
  return i5072
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i5074 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i5075 = data
  var i5077 = i5075[0]
  var i5076 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i5077.length; i += 1) {
    i5076.add(request.d('TMPro.TMP_Style', i5077[i + 0]));
  }
  i5074.m_StyleList = i5076
  return i5074
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i5080 = root || request.c( 'TMPro.TMP_Style' )
  var i5081 = data
  i5080.m_Name = i5081[0]
  i5080.m_HashCode = i5081[1]
  i5080.m_OpeningDefinition = i5081[2]
  i5080.m_ClosingDefinition = i5081[3]
  i5080.m_OpeningTagArray = i5081[4]
  i5080.m_ClosingTagArray = i5081[5]
  return i5080
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i5082 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i5083 = data
  var i5085 = i5083[0]
  var i5084 = []
  for(var i = 0; i < i5085.length; i += 1) {
    i5084.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i5085[i + 0]) );
  }
  i5082.files = i5084
  i5082.componentToPrefabIds = i5083[1]
  return i5082
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i5088 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i5089 = data
  i5088.path = i5089[0]
  request.r(i5089[1], i5089[2], 0, i5088, 'unityObject')
  return i5088
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i5090 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i5091 = data
  var i5093 = i5091[0]
  var i5092 = []
  for(var i = 0; i < i5093.length; i += 1) {
    i5092.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i5093[i + 0]) );
  }
  i5090.scriptsExecutionOrder = i5092
  var i5095 = i5091[1]
  var i5094 = []
  for(var i = 0; i < i5095.length; i += 1) {
    i5094.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i5095[i + 0]) );
  }
  i5090.sortingLayers = i5094
  var i5097 = i5091[2]
  var i5096 = []
  for(var i = 0; i < i5097.length; i += 1) {
    i5096.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i5097[i + 0]) );
  }
  i5090.cullingLayers = i5096
  i5090.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i5091[3], i5090.timeSettings)
  i5090.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i5091[4], i5090.physicsSettings)
  i5090.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i5091[5], i5090.physics2DSettings)
  i5090.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i5091[6], i5090.qualitySettings)
  i5090.enableRealtimeShadows = !!i5091[7]
  i5090.enableAutoInstancing = !!i5091[8]
  i5090.enableStaticBatching = !!i5091[9]
  i5090.enableDynamicBatching = !!i5091[10]
  i5090.lightmapEncodingQuality = i5091[11]
  i5090.desiredColorSpace = i5091[12]
  var i5099 = i5091[13]
  var i5098 = []
  for(var i = 0; i < i5099.length; i += 1) {
    i5098.push( i5099[i + 0] );
  }
  i5090.allTags = i5098
  return i5090
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i5102 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i5103 = data
  i5102.name = i5103[0]
  i5102.value = i5103[1]
  return i5102
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i5106 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i5107 = data
  i5106.id = i5107[0]
  i5106.name = i5107[1]
  i5106.value = i5107[2]
  return i5106
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i5110 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i5111 = data
  i5110.id = i5111[0]
  i5110.name = i5111[1]
  return i5110
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i5112 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i5113 = data
  i5112.fixedDeltaTime = i5113[0]
  i5112.maximumDeltaTime = i5113[1]
  i5112.timeScale = i5113[2]
  i5112.maximumParticleTimestep = i5113[3]
  return i5112
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i5114 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i5115 = data
  i5114.gravity = new pc.Vec3( i5115[0], i5115[1], i5115[2] )
  i5114.defaultSolverIterations = i5115[3]
  i5114.bounceThreshold = i5115[4]
  i5114.autoSyncTransforms = !!i5115[5]
  i5114.autoSimulation = !!i5115[6]
  var i5117 = i5115[7]
  var i5116 = []
  for(var i = 0; i < i5117.length; i += 1) {
    i5116.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i5117[i + 0]) );
  }
  i5114.collisionMatrix = i5116
  return i5114
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i5120 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i5121 = data
  i5120.enabled = !!i5121[0]
  i5120.layerId = i5121[1]
  i5120.otherLayerId = i5121[2]
  return i5120
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i5122 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i5123 = data
  request.r(i5123[0], i5123[1], 0, i5122, 'material')
  i5122.gravity = new pc.Vec2( i5123[2], i5123[3] )
  i5122.positionIterations = i5123[4]
  i5122.velocityIterations = i5123[5]
  i5122.velocityThreshold = i5123[6]
  i5122.maxLinearCorrection = i5123[7]
  i5122.maxAngularCorrection = i5123[8]
  i5122.maxTranslationSpeed = i5123[9]
  i5122.maxRotationSpeed = i5123[10]
  i5122.baumgarteScale = i5123[11]
  i5122.baumgarteTOIScale = i5123[12]
  i5122.timeToSleep = i5123[13]
  i5122.linearSleepTolerance = i5123[14]
  i5122.angularSleepTolerance = i5123[15]
  i5122.defaultContactOffset = i5123[16]
  i5122.autoSimulation = !!i5123[17]
  i5122.queriesHitTriggers = !!i5123[18]
  i5122.queriesStartInColliders = !!i5123[19]
  i5122.callbacksOnDisable = !!i5123[20]
  i5122.reuseCollisionCallbacks = !!i5123[21]
  i5122.autoSyncTransforms = !!i5123[22]
  var i5125 = i5123[23]
  var i5124 = []
  for(var i = 0; i < i5125.length; i += 1) {
    i5124.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i5125[i + 0]) );
  }
  i5122.collisionMatrix = i5124
  return i5122
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i5128 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i5129 = data
  i5128.enabled = !!i5129[0]
  i5128.layerId = i5129[1]
  i5128.otherLayerId = i5129[2]
  return i5128
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i5130 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i5131 = data
  var i5133 = i5131[0]
  var i5132 = []
  for(var i = 0; i < i5133.length; i += 1) {
    i5132.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i5133[i + 0]) );
  }
  i5130.qualityLevels = i5132
  var i5135 = i5131[1]
  var i5134 = []
  for(var i = 0; i < i5135.length; i += 1) {
    i5134.push( i5135[i + 0] );
  }
  i5130.names = i5134
  i5130.shadows = i5131[2]
  i5130.anisotropicFiltering = i5131[3]
  i5130.antiAliasing = i5131[4]
  i5130.lodBias = i5131[5]
  i5130.shadowCascades = i5131[6]
  i5130.shadowDistance = i5131[7]
  i5130.shadowmaskMode = i5131[8]
  i5130.shadowProjection = i5131[9]
  i5130.shadowResolution = i5131[10]
  i5130.softParticles = !!i5131[11]
  i5130.softVegetation = !!i5131[12]
  i5130.activeColorSpace = i5131[13]
  i5130.desiredColorSpace = i5131[14]
  i5130.masterTextureLimit = i5131[15]
  i5130.maxQueuedFrames = i5131[16]
  i5130.particleRaycastBudget = i5131[17]
  i5130.pixelLightCount = i5131[18]
  i5130.realtimeReflectionProbes = !!i5131[19]
  i5130.shadowCascade2Split = i5131[20]
  i5130.shadowCascade4Split = new pc.Vec3( i5131[21], i5131[22], i5131[23] )
  i5130.streamingMipmapsActive = !!i5131[24]
  i5130.vSyncCount = i5131[25]
  i5130.asyncUploadBufferSize = i5131[26]
  i5130.asyncUploadTimeSlice = i5131[27]
  i5130.billboardsFaceCameraPosition = !!i5131[28]
  i5130.shadowNearPlaneOffset = i5131[29]
  i5130.streamingMipmapsMemoryBudget = i5131[30]
  i5130.maximumLODLevel = i5131[31]
  i5130.streamingMipmapsAddAllCameras = !!i5131[32]
  i5130.streamingMipmapsMaxLevelReduction = i5131[33]
  i5130.streamingMipmapsRenderersPerFrame = i5131[34]
  i5130.resolutionScalingFixedDPIFactor = i5131[35]
  i5130.streamingMipmapsMaxFileIORequests = i5131[36]
  i5130.currentQualityLevel = i5131[37]
  return i5130
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i5140 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i5141 = data
  i5140.weight = i5141[0]
  i5140.vertices = i5141[1]
  i5140.normals = i5141[2]
  i5140.tangents = i5141[3]
  return i5140
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i5144 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i5145 = data
  i5144.mode = i5145[0]
  i5144.parameter = i5145[1]
  i5144.threshold = i5145[2]
  return i5144
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i5146 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i5147 = data
  i5146.m_XCoordinate = i5147[0]
  i5146.m_YCoordinate = i5147[1]
  return i5146
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i5148 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i5149 = data
  i5148.m_XPositionAdjustment = i5149[0]
  i5148.m_YPositionAdjustment = i5149[1]
  return i5148
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i5150 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i5151 = data
  i5150.xPlacement = i5151[0]
  i5150.yPlacement = i5151[1]
  i5150.xAdvance = i5151[2]
  i5150.yAdvance = i5151[3]
  return i5150
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2}}

Deserializers.requiredComponents = {"49":[50],"51":[50],"52":[50],"53":[50],"54":[50],"55":[50],"56":[57],"58":[2],"59":[60],"61":[60],"62":[60],"63":[60],"64":[60],"65":[60],"66":[67],"68":[67],"69":[67],"70":[67],"71":[67],"72":[67],"73":[67],"74":[67],"75":[67],"76":[67],"77":[67],"78":[67],"79":[67],"80":[2],"81":[26],"82":[83],"84":[83],"35":[25],"6":[2],"21":[85],"86":[67],"87":[88],"33":[85],"89":[14],"90":[2],"91":[92],"93":[41],"94":[35],"95":[25],"23":[26,25],"39":[25,38],"96":[25],"97":[38,25],"98":[26],"99":[38,25],"100":[25],"101":[102],"103":[102],"104":[102],"105":[25],"106":[25],"37":[35],"40":[38,25],"107":[25],"36":[35],"108":[25],"109":[25],"110":[25],"111":[25],"112":[25],"113":[25],"114":[25],"115":[25],"116":[25],"117":[38,25],"118":[25],"119":[25],"120":[25],"121":[25],"122":[38,25],"123":[25],"124":[41],"125":[41],"42":[41],"126":[41],"127":[2],"128":[2]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.MonoBehaviour","CameraFollow2D","AutoCameraFit","UnityEngine.Transform","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Mesh","UnityEngine.Material","UnityEngine.AudioSource","UnityEngine.AudioClip","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","MoveBetweenPoints","ScreenHeightPositionAnchor","UnityEngine.BoxCollider","ClickToStore","FavoritePlayerEndcard","TMPro.TextMeshPro","UnityEngine.GameObject","UnityEngine.RectTransform","UnityEngine.MeshRenderer","UnityEngine.EventSystems.UIBehaviour","TMPro.TMP_FontAsset","UnityEngine.MeshFilter","PlayerCardUIManager","Ply_SoundManager","FavoritePlayerManager","PlayerSlot","FavoritePlayerCard","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","TMPro.TextMeshProUGUI","UnityEngine.UI.Image","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.Font","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.Collider","BatStrikeController","SlotTrigger","UnityEngine.BoxCollider2D","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.InputSystem.UI.InputSystemUIInputModule","UnityEngine.InputSystem.UI.TrackedDeviceRaycaster","TMPro.TextContainer","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.38f1";

Deserializers.productName = "PLY_MiniSoccer";

Deserializers.lunaInitializationTime = "07/15/2026 03:53:54";

Deserializers.lunaDaysRunning = "35.0";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1743";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4850";

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

Deserializers.buildID = "3195c8f9-67bf-4dfb-99ef-c31ec4d729dc";

Deserializers.runtimeInitializeOnLoadInfos = [[["Unity","Services","Core","Internal","UnityServicesInitializer","EnableServicesInitializationAsync"],["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["DG","Tweening","DOTween","RuntimeOnLoad"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["Unity","Services","Core","Registration","CorePackageInitializer","InitializeOnLoad"],["Unity","Services","Core","Internal","TaskAsyncOperation","SetScheduler"],["Unity","Services","Core","Environments","Client","Scheduler","EngineStateHelper","Init"],["Unity","Services","Core","Environments","Client","Scheduler","ThreadHelper","Init"],["Ua2CoreInitializeCallback","Register"],["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["Unity","AI","Navigation","NavMeshLink","ClearTrackedList"],["Unity","AI","Navigation","NavMeshSurface","ClearNavMeshSurfaces"],["Unity","AI","Navigation","NavMeshModifierVolume","ClearNavMeshModifiers"],["Unity","AI","Navigation","NavMeshModifier","ClearNavMeshModifiers"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["Unity","Services","Core","Internal","UnityServicesInitializer","CreateStaticInstance"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[["Unity","Services","Core","Environments","Client","Http","JsonHelpers","RegisterTypesForAOT"]],[["Unity","Services","Core","UnityThreadUtils","CaptureUnityThreadInfo"],["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

