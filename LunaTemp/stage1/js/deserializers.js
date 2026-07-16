var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i4556 = root || request.c( 'UnityEngine.JointSpring' )
  var i4557 = data
  i4556.spring = i4557[0]
  i4556.damper = i4557[1]
  i4556.targetPosition = i4557[2]
  return i4556
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i4558 = root || request.c( 'UnityEngine.JointMotor' )
  var i4559 = data
  i4558.m_TargetVelocity = i4559[0]
  i4558.m_Force = i4559[1]
  i4558.m_FreeSpin = i4559[2]
  return i4558
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i4560 = root || request.c( 'UnityEngine.JointLimits' )
  var i4561 = data
  i4560.m_Min = i4561[0]
  i4560.m_Max = i4561[1]
  i4560.m_Bounciness = i4561[2]
  i4560.m_BounceMinVelocity = i4561[3]
  i4560.m_ContactDistance = i4561[4]
  i4560.minBounce = i4561[5]
  i4560.maxBounce = i4561[6]
  return i4560
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i4562 = root || request.c( 'UnityEngine.JointDrive' )
  var i4563 = data
  i4562.m_PositionSpring = i4563[0]
  i4562.m_PositionDamper = i4563[1]
  i4562.m_MaximumForce = i4563[2]
  i4562.m_UseAcceleration = i4563[3]
  return i4562
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i4564 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i4565 = data
  i4564.m_Spring = i4565[0]
  i4564.m_Damper = i4565[1]
  return i4564
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i4566 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i4567 = data
  i4566.m_Limit = i4567[0]
  i4566.m_Bounciness = i4567[1]
  i4566.m_ContactDistance = i4567[2]
  return i4566
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i4568 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i4569 = data
  i4568.m_ExtremumSlip = i4569[0]
  i4568.m_ExtremumValue = i4569[1]
  i4568.m_AsymptoteSlip = i4569[2]
  i4568.m_AsymptoteValue = i4569[3]
  i4568.m_Stiffness = i4569[4]
  return i4568
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i4570 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i4571 = data
  i4570.m_LowerAngle = i4571[0]
  i4570.m_UpperAngle = i4571[1]
  return i4570
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i4572 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i4573 = data
  i4572.m_MotorSpeed = i4573[0]
  i4572.m_MaximumMotorTorque = i4573[1]
  return i4572
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i4574 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i4575 = data
  i4574.m_DampingRatio = i4575[0]
  i4574.m_Frequency = i4575[1]
  i4574.m_Angle = i4575[2]
  return i4574
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i4576 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i4577 = data
  i4576.m_LowerTranslation = i4577[0]
  i4576.m_UpperTranslation = i4577[1]
  return i4576
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i4578 = root || new pc.UnityMaterial()
  var i4579 = data
  i4578.name = i4579[0]
  request.r(i4579[1], i4579[2], 0, i4578, 'shader')
  i4578.renderQueue = i4579[3]
  i4578.enableInstancing = !!i4579[4]
  var i4581 = i4579[5]
  var i4580 = []
  for(var i = 0; i < i4581.length; i += 1) {
    i4580.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i4581[i + 0]) );
  }
  i4578.floatParameters = i4580
  var i4583 = i4579[6]
  var i4582 = []
  for(var i = 0; i < i4583.length; i += 1) {
    i4582.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i4583[i + 0]) );
  }
  i4578.colorParameters = i4582
  var i4585 = i4579[7]
  var i4584 = []
  for(var i = 0; i < i4585.length; i += 1) {
    i4584.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i4585[i + 0]) );
  }
  i4578.vectorParameters = i4584
  var i4587 = i4579[8]
  var i4586 = []
  for(var i = 0; i < i4587.length; i += 1) {
    i4586.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i4587[i + 0]) );
  }
  i4578.textureParameters = i4586
  var i4589 = i4579[9]
  var i4588 = []
  for(var i = 0; i < i4589.length; i += 1) {
    i4588.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i4589[i + 0]) );
  }
  i4578.materialFlags = i4588
  return i4578
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i4592 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i4593 = data
  i4592.name = i4593[0]
  i4592.value = i4593[1]
  return i4592
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i4596 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i4597 = data
  i4596.name = i4597[0]
  i4596.value = new pc.Color(i4597[1], i4597[2], i4597[3], i4597[4])
  return i4596
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i4600 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i4601 = data
  i4600.name = i4601[0]
  i4600.value = new pc.Vec4( i4601[1], i4601[2], i4601[3], i4601[4] )
  return i4600
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i4604 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i4605 = data
  i4604.name = i4605[0]
  request.r(i4605[1], i4605[2], 0, i4604, 'value')
  return i4604
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i4608 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i4609 = data
  i4608.name = i4609[0]
  i4608.enabled = !!i4609[1]
  return i4608
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i4610 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i4611 = data
  i4610.name = i4611[0]
  i4610.width = i4611[1]
  i4610.height = i4611[2]
  i4610.mipmapCount = i4611[3]
  i4610.anisoLevel = i4611[4]
  i4610.filterMode = i4611[5]
  i4610.hdr = !!i4611[6]
  i4610.format = i4611[7]
  i4610.wrapMode = i4611[8]
  i4610.alphaIsTransparency = !!i4611[9]
  i4610.alphaSource = i4611[10]
  i4610.graphicsFormat = i4611[11]
  i4610.sRGBTexture = !!i4611[12]
  i4610.desiredColorSpace = i4611[13]
  i4610.wrapU = i4611[14]
  i4610.wrapV = i4611[15]
  return i4610
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i4612 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i4613 = data
  i4612.name = i4613[0]
  i4612.halfPrecision = !!i4613[1]
  i4612.useSimplification = !!i4613[2]
  i4612.useUInt32IndexFormat = !!i4613[3]
  i4612.vertexCount = i4613[4]
  i4612.aabb = i4613[5]
  var i4615 = i4613[6]
  var i4614 = []
  for(var i = 0; i < i4615.length; i += 1) {
    i4614.push( !!i4615[i + 0] );
  }
  i4612.streams = i4614
  i4612.vertices = i4613[7]
  var i4617 = i4613[8]
  var i4616 = []
  for(var i = 0; i < i4617.length; i += 1) {
    i4616.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i4617[i + 0]) );
  }
  i4612.subMeshes = i4616
  var i4619 = i4613[9]
  var i4618 = []
  for(var i = 0; i < i4619.length; i += 16) {
    i4618.push( new pc.Mat4().setData(i4619[i + 0], i4619[i + 1], i4619[i + 2], i4619[i + 3],  i4619[i + 4], i4619[i + 5], i4619[i + 6], i4619[i + 7],  i4619[i + 8], i4619[i + 9], i4619[i + 10], i4619[i + 11],  i4619[i + 12], i4619[i + 13], i4619[i + 14], i4619[i + 15]) );
  }
  i4612.bindposes = i4618
  var i4621 = i4613[10]
  var i4620 = []
  for(var i = 0; i < i4621.length; i += 1) {
    i4620.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i4621[i + 0]) );
  }
  i4612.blendShapes = i4620
  return i4612
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i4626 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i4627 = data
  i4626.triangles = i4627[0]
  return i4626
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i4632 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i4633 = data
  i4632.name = i4633[0]
  var i4635 = i4633[1]
  var i4634 = []
  for(var i = 0; i < i4635.length; i += 1) {
    i4634.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i4635[i + 0]) );
  }
  i4632.frames = i4634
  return i4632
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i4636 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i4637 = data
  i4636.name = i4637[0]
  i4636.index = i4637[1]
  i4636.startup = !!i4637[2]
  return i4636
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i4638 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i4639 = data
  i4638.aspect = i4639[0]
  i4638.orthographic = !!i4639[1]
  i4638.orthographicSize = i4639[2]
  i4638.backgroundColor = new pc.Color(i4639[3], i4639[4], i4639[5], i4639[6])
  i4638.nearClipPlane = i4639[7]
  i4638.farClipPlane = i4639[8]
  i4638.fieldOfView = i4639[9]
  i4638.depth = i4639[10]
  i4638.clearFlags = i4639[11]
  i4638.cullingMask = i4639[12]
  i4638.rect = i4639[13]
  request.r(i4639[14], i4639[15], 0, i4638, 'targetTexture')
  i4638.usePhysicalProperties = !!i4639[16]
  i4638.focalLength = i4639[17]
  i4638.sensorSize = new pc.Vec2( i4639[18], i4639[19] )
  i4638.lensShift = new pc.Vec2( i4639[20], i4639[21] )
  i4638.gateFit = i4639[22]
  i4638.commandBufferCount = i4639[23]
  i4638.cameraType = i4639[24]
  i4638.enabled = !!i4639[25]
  return i4638
}

Deserializers["CameraFollow2D"] = function (request, data, root) {
  var i4640 = root || request.c( 'CameraFollow2D' )
  var i4641 = data
  request.r(i4641[0], i4641[1], 0, i4640, 'target')
  i4640.smoothSpeed = i4641[2]
  i4640.offset = new pc.Vec3( i4641[3], i4641[4], i4641[5] )
  i4640.followY = !!i4641[6]
  return i4640
}

Deserializers["AutoCameraFit"] = function (request, data, root) {
  var i4642 = root || request.c( 'AutoCameraFit' )
  var i4643 = data
  request.r(i4643[0], i4643[1], 0, i4642, 'tallScreenObject')
  i4642.tallScreenRatioThreshold = i4643[2]
  i4642.tallScreenYOffset = i4643[3]
  request.r(i4643[4], i4643[5], 0, i4642, 'canvasBtn')
  request.r(i4643[6], i4643[7], 0, i4642, 'targetArea')
  i4642.paddingLandscape = i4643[8]
  i4642.paddingPortrait = i4643[9]
  i4642.extraPaddingSmallScreen = i4643[10]
  i4642.smallScreenThreshold = i4643[11]
  i4642.autoUpdateOnResize = !!i4643[12]
  i4642.adjustInEditMode = !!i4643[13]
  return i4642
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i4644 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i4645 = data
  i4644.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i4645[0], i4644.main)
  i4644.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i4645[1], i4644.colorBySpeed)
  i4644.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i4645[2], i4644.colorOverLifetime)
  i4644.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i4645[3], i4644.emission)
  i4644.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i4645[4], i4644.rotationBySpeed)
  i4644.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i4645[5], i4644.rotationOverLifetime)
  i4644.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i4645[6], i4644.shape)
  i4644.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i4645[7], i4644.sizeBySpeed)
  i4644.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i4645[8], i4644.sizeOverLifetime)
  i4644.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i4645[9], i4644.textureSheetAnimation)
  i4644.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i4645[10], i4644.velocityOverLifetime)
  i4644.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i4645[11], i4644.noise)
  i4644.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i4645[12], i4644.inheritVelocity)
  i4644.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i4645[13], i4644.forceOverLifetime)
  i4644.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i4645[14], i4644.limitVelocityOverLifetime)
  i4644.useAutoRandomSeed = !!i4645[15]
  i4644.randomSeed = i4645[16]
  return i4644
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i4646 = root || new pc.ParticleSystemMain()
  var i4647 = data
  i4646.duration = i4647[0]
  i4646.loop = !!i4647[1]
  i4646.prewarm = !!i4647[2]
  i4646.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4647[3], i4646.startDelay)
  i4646.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4647[4], i4646.startLifetime)
  i4646.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4647[5], i4646.startSpeed)
  i4646.startSize3D = !!i4647[6]
  i4646.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4647[7], i4646.startSizeX)
  i4646.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4647[8], i4646.startSizeY)
  i4646.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4647[9], i4646.startSizeZ)
  i4646.startRotation3D = !!i4647[10]
  i4646.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4647[11], i4646.startRotationX)
  i4646.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4647[12], i4646.startRotationY)
  i4646.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4647[13], i4646.startRotationZ)
  i4646.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i4647[14], i4646.startColor)
  i4646.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4647[15], i4646.gravityModifier)
  i4646.simulationSpace = i4647[16]
  request.r(i4647[17], i4647[18], 0, i4646, 'customSimulationSpace')
  i4646.simulationSpeed = i4647[19]
  i4646.useUnscaledTime = !!i4647[20]
  i4646.scalingMode = i4647[21]
  i4646.playOnAwake = !!i4647[22]
  i4646.maxParticles = i4647[23]
  i4646.emitterVelocityMode = i4647[24]
  i4646.stopAction = i4647[25]
  return i4646
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i4648 = root || new pc.MinMaxCurve()
  var i4649 = data
  i4648.mode = i4649[0]
  i4648.curveMin = new pc.AnimationCurve( { keys_flow: i4649[1] } )
  i4648.curveMax = new pc.AnimationCurve( { keys_flow: i4649[2] } )
  i4648.curveMultiplier = i4649[3]
  i4648.constantMin = i4649[4]
  i4648.constantMax = i4649[5]
  return i4648
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i4650 = root || new pc.MinMaxGradient()
  var i4651 = data
  i4650.mode = i4651[0]
  i4650.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i4651[1], i4650.gradientMin)
  i4650.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i4651[2], i4650.gradientMax)
  i4650.colorMin = new pc.Color(i4651[3], i4651[4], i4651[5], i4651[6])
  i4650.colorMax = new pc.Color(i4651[7], i4651[8], i4651[9], i4651[10])
  return i4650
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i4652 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i4653 = data
  i4652.mode = i4653[0]
  var i4655 = i4653[1]
  var i4654 = []
  for(var i = 0; i < i4655.length; i += 1) {
    i4654.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i4655[i + 0]) );
  }
  i4652.colorKeys = i4654
  var i4657 = i4653[2]
  var i4656 = []
  for(var i = 0; i < i4657.length; i += 1) {
    i4656.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i4657[i + 0]) );
  }
  i4652.alphaKeys = i4656
  return i4652
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i4658 = root || new pc.ParticleSystemColorBySpeed()
  var i4659 = data
  i4658.enabled = !!i4659[0]
  i4658.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i4659[1], i4658.color)
  i4658.range = new pc.Vec2( i4659[2], i4659[3] )
  return i4658
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i4662 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i4663 = data
  i4662.color = new pc.Color(i4663[0], i4663[1], i4663[2], i4663[3])
  i4662.time = i4663[4]
  return i4662
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i4666 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i4667 = data
  i4666.alpha = i4667[0]
  i4666.time = i4667[1]
  return i4666
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i4668 = root || new pc.ParticleSystemColorOverLifetime()
  var i4669 = data
  i4668.enabled = !!i4669[0]
  i4668.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i4669[1], i4668.color)
  return i4668
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i4670 = root || new pc.ParticleSystemEmitter()
  var i4671 = data
  i4670.enabled = !!i4671[0]
  i4670.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4671[1], i4670.rateOverTime)
  i4670.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4671[2], i4670.rateOverDistance)
  var i4673 = i4671[3]
  var i4672 = []
  for(var i = 0; i < i4673.length; i += 1) {
    i4672.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i4673[i + 0]) );
  }
  i4670.bursts = i4672
  return i4670
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i4676 = root || new pc.ParticleSystemBurst()
  var i4677 = data
  i4676.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4677[0], i4676.count)
  i4676.cycleCount = i4677[1]
  i4676.minCount = i4677[2]
  i4676.maxCount = i4677[3]
  i4676.repeatInterval = i4677[4]
  i4676.time = i4677[5]
  return i4676
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i4678 = root || new pc.ParticleSystemRotationBySpeed()
  var i4679 = data
  i4678.enabled = !!i4679[0]
  i4678.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4679[1], i4678.x)
  i4678.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4679[2], i4678.y)
  i4678.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4679[3], i4678.z)
  i4678.separateAxes = !!i4679[4]
  i4678.range = new pc.Vec2( i4679[5], i4679[6] )
  return i4678
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i4680 = root || new pc.ParticleSystemRotationOverLifetime()
  var i4681 = data
  i4680.enabled = !!i4681[0]
  i4680.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4681[1], i4680.x)
  i4680.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4681[2], i4680.y)
  i4680.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4681[3], i4680.z)
  i4680.separateAxes = !!i4681[4]
  return i4680
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i4682 = root || new pc.ParticleSystemShape()
  var i4683 = data
  i4682.enabled = !!i4683[0]
  i4682.shapeType = i4683[1]
  i4682.randomDirectionAmount = i4683[2]
  i4682.sphericalDirectionAmount = i4683[3]
  i4682.randomPositionAmount = i4683[4]
  i4682.alignToDirection = !!i4683[5]
  i4682.radius = i4683[6]
  i4682.radiusMode = i4683[7]
  i4682.radiusSpread = i4683[8]
  i4682.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4683[9], i4682.radiusSpeed)
  i4682.radiusThickness = i4683[10]
  i4682.angle = i4683[11]
  i4682.length = i4683[12]
  i4682.boxThickness = new pc.Vec3( i4683[13], i4683[14], i4683[15] )
  i4682.meshShapeType = i4683[16]
  request.r(i4683[17], i4683[18], 0, i4682, 'mesh')
  request.r(i4683[19], i4683[20], 0, i4682, 'meshRenderer')
  request.r(i4683[21], i4683[22], 0, i4682, 'skinnedMeshRenderer')
  i4682.useMeshMaterialIndex = !!i4683[23]
  i4682.meshMaterialIndex = i4683[24]
  i4682.useMeshColors = !!i4683[25]
  i4682.normalOffset = i4683[26]
  i4682.arc = i4683[27]
  i4682.arcMode = i4683[28]
  i4682.arcSpread = i4683[29]
  i4682.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4683[30], i4682.arcSpeed)
  i4682.donutRadius = i4683[31]
  i4682.position = new pc.Vec3( i4683[32], i4683[33], i4683[34] )
  i4682.rotation = new pc.Vec3( i4683[35], i4683[36], i4683[37] )
  i4682.scale = new pc.Vec3( i4683[38], i4683[39], i4683[40] )
  return i4682
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i4684 = root || new pc.ParticleSystemSizeBySpeed()
  var i4685 = data
  i4684.enabled = !!i4685[0]
  i4684.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4685[1], i4684.x)
  i4684.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4685[2], i4684.y)
  i4684.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4685[3], i4684.z)
  i4684.separateAxes = !!i4685[4]
  i4684.range = new pc.Vec2( i4685[5], i4685[6] )
  return i4684
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i4686 = root || new pc.ParticleSystemSizeOverLifetime()
  var i4687 = data
  i4686.enabled = !!i4687[0]
  i4686.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4687[1], i4686.x)
  i4686.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4687[2], i4686.y)
  i4686.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4687[3], i4686.z)
  i4686.separateAxes = !!i4687[4]
  return i4686
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i4688 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i4689 = data
  i4688.enabled = !!i4689[0]
  i4688.mode = i4689[1]
  i4688.animation = i4689[2]
  i4688.numTilesX = i4689[3]
  i4688.numTilesY = i4689[4]
  i4688.useRandomRow = !!i4689[5]
  i4688.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4689[6], i4688.frameOverTime)
  i4688.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4689[7], i4688.startFrame)
  i4688.cycleCount = i4689[8]
  i4688.rowIndex = i4689[9]
  i4688.flipU = i4689[10]
  i4688.flipV = i4689[11]
  i4688.spriteCount = i4689[12]
  var i4691 = i4689[13]
  var i4690 = []
  for(var i = 0; i < i4691.length; i += 2) {
  request.r(i4691[i + 0], i4691[i + 1], 2, i4690, '')
  }
  i4688.sprites = i4690
  return i4688
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i4694 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i4695 = data
  i4694.enabled = !!i4695[0]
  i4694.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4695[1], i4694.x)
  i4694.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4695[2], i4694.y)
  i4694.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4695[3], i4694.z)
  i4694.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4695[4], i4694.radial)
  i4694.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4695[5], i4694.speedModifier)
  i4694.space = i4695[6]
  i4694.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4695[7], i4694.orbitalX)
  i4694.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4695[8], i4694.orbitalY)
  i4694.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4695[9], i4694.orbitalZ)
  i4694.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4695[10], i4694.orbitalOffsetX)
  i4694.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4695[11], i4694.orbitalOffsetY)
  i4694.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4695[12], i4694.orbitalOffsetZ)
  return i4694
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i4696 = root || new pc.ParticleSystemNoise()
  var i4697 = data
  i4696.enabled = !!i4697[0]
  i4696.separateAxes = !!i4697[1]
  i4696.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4697[2], i4696.strengthX)
  i4696.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4697[3], i4696.strengthY)
  i4696.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4697[4], i4696.strengthZ)
  i4696.frequency = i4697[5]
  i4696.damping = !!i4697[6]
  i4696.octaveCount = i4697[7]
  i4696.octaveMultiplier = i4697[8]
  i4696.octaveScale = i4697[9]
  i4696.quality = i4697[10]
  i4696.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4697[11], i4696.scrollSpeed)
  i4696.scrollSpeedMultiplier = i4697[12]
  i4696.remapEnabled = !!i4697[13]
  i4696.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4697[14], i4696.remapX)
  i4696.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4697[15], i4696.remapY)
  i4696.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4697[16], i4696.remapZ)
  i4696.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4697[17], i4696.positionAmount)
  i4696.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4697[18], i4696.rotationAmount)
  i4696.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4697[19], i4696.sizeAmount)
  return i4696
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i4698 = root || new pc.ParticleSystemInheritVelocity()
  var i4699 = data
  i4698.enabled = !!i4699[0]
  i4698.mode = i4699[1]
  i4698.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4699[2], i4698.curve)
  return i4698
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i4700 = root || new pc.ParticleSystemForceOverLifetime()
  var i4701 = data
  i4700.enabled = !!i4701[0]
  i4700.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4701[1], i4700.x)
  i4700.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4701[2], i4700.y)
  i4700.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4701[3], i4700.z)
  i4700.space = i4701[4]
  i4700.randomized = !!i4701[5]
  return i4700
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i4702 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i4703 = data
  i4702.enabled = !!i4703[0]
  i4702.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4703[1], i4702.limit)
  i4702.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4703[2], i4702.limitX)
  i4702.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4703[3], i4702.limitY)
  i4702.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4703[4], i4702.limitZ)
  i4702.dampen = i4703[5]
  i4702.separateAxes = !!i4703[6]
  i4702.space = i4703[7]
  i4702.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4703[8], i4702.drag)
  i4702.multiplyDragByParticleSize = !!i4703[9]
  i4702.multiplyDragByParticleVelocity = !!i4703[10]
  return i4702
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i4704 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i4705 = data
  request.r(i4705[0], i4705[1], 0, i4704, 'mesh')
  i4704.meshCount = i4705[2]
  i4704.activeVertexStreamsCount = i4705[3]
  i4704.alignment = i4705[4]
  i4704.renderMode = i4705[5]
  i4704.sortMode = i4705[6]
  i4704.lengthScale = i4705[7]
  i4704.velocityScale = i4705[8]
  i4704.cameraVelocityScale = i4705[9]
  i4704.normalDirection = i4705[10]
  i4704.sortingFudge = i4705[11]
  i4704.minParticleSize = i4705[12]
  i4704.maxParticleSize = i4705[13]
  i4704.pivot = new pc.Vec3( i4705[14], i4705[15], i4705[16] )
  request.r(i4705[17], i4705[18], 0, i4704, 'trailMaterial')
  i4704.applyActiveColorSpace = !!i4705[19]
  i4704.enabled = !!i4705[20]
  request.r(i4705[21], i4705[22], 0, i4704, 'sharedMaterial')
  var i4707 = i4705[23]
  var i4706 = []
  for(var i = 0; i < i4707.length; i += 2) {
  request.r(i4707[i + 0], i4707[i + 1], 2, i4706, '')
  }
  i4704.sharedMaterials = i4706
  i4704.receiveShadows = !!i4705[24]
  i4704.shadowCastingMode = i4705[25]
  i4704.sortingLayerID = i4705[26]
  i4704.sortingOrder = i4705[27]
  i4704.lightmapIndex = i4705[28]
  i4704.lightmapSceneIndex = i4705[29]
  i4704.lightmapScaleOffset = new pc.Vec4( i4705[30], i4705[31], i4705[32], i4705[33] )
  i4704.lightProbeUsage = i4705[34]
  i4704.reflectionProbeUsage = i4705[35]
  return i4704
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i4710 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i4711 = data
  i4710.name = i4711[0]
  i4710.tagId = i4711[1]
  i4710.enabled = !!i4711[2]
  i4710.isStatic = !!i4711[3]
  i4710.layer = i4711[4]
  return i4710
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i4712 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i4713 = data
  i4712.color = new pc.Color(i4713[0], i4713[1], i4713[2], i4713[3])
  request.r(i4713[4], i4713[5], 0, i4712, 'sprite')
  i4712.flipX = !!i4713[6]
  i4712.flipY = !!i4713[7]
  i4712.drawMode = i4713[8]
  i4712.size = new pc.Vec2( i4713[9], i4713[10] )
  i4712.tileMode = i4713[11]
  i4712.adaptiveModeThreshold = i4713[12]
  i4712.maskInteraction = i4713[13]
  i4712.spriteSortPoint = i4713[14]
  i4712.enabled = !!i4713[15]
  request.r(i4713[16], i4713[17], 0, i4712, 'sharedMaterial')
  var i4715 = i4713[18]
  var i4714 = []
  for(var i = 0; i < i4715.length; i += 2) {
  request.r(i4715[i + 0], i4715[i + 1], 2, i4714, '')
  }
  i4712.sharedMaterials = i4714
  i4712.receiveShadows = !!i4713[19]
  i4712.shadowCastingMode = i4713[20]
  i4712.sortingLayerID = i4713[21]
  i4712.sortingOrder = i4713[22]
  i4712.lightmapIndex = i4713[23]
  i4712.lightmapSceneIndex = i4713[24]
  i4712.lightmapScaleOffset = new pc.Vec4( i4713[25], i4713[26], i4713[27], i4713[28] )
  i4712.lightProbeUsage = i4713[29]
  i4712.reflectionProbeUsage = i4713[30]
  return i4712
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i4716 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i4717 = data
  request.r(i4717[0], i4717[1], 0, i4716, 'animatorController')
  request.r(i4717[2], i4717[3], 0, i4716, 'avatar')
  i4716.updateMode = i4717[4]
  i4716.hasTransformHierarchy = !!i4717[5]
  i4716.applyRootMotion = !!i4717[6]
  var i4719 = i4717[7]
  var i4718 = []
  for(var i = 0; i < i4719.length; i += 2) {
  request.r(i4719[i + 0], i4719[i + 1], 2, i4718, '')
  }
  i4716.humanBones = i4718
  i4716.enabled = !!i4717[8]
  return i4716
}

Deserializers["MoveBetweenPoints"] = function (request, data, root) {
  var i4722 = root || request.c( 'MoveBetweenPoints' )
  var i4723 = data
  request.r(i4723[0], i4723[1], 0, i4722, 'pointA')
  request.r(i4723[2], i4723[3], 0, i4722, 'pointB')
  i4722.duration = i4723[4]
  return i4722
}

Deserializers["ScreenHeightPositionAnchor"] = function (request, data, root) {
  var i4724 = root || request.c( 'ScreenHeightPositionAnchor' )
  var i4725 = data
  request.r(i4725[0], i4725[1], 0, i4724, 'anchorPoint')
  request.r(i4725[2], i4725[3], 0, i4724, 'targetCamera')
  i4724.viewportYRatio = i4725[4]
  i4724.alignOnStart = !!i4725[5]
  i4724.alignOnEnable = !!i4725[6]
  i4724.realignOnScreenSizeChanged = !!i4725[7]
  i4724.drawGizmos = !!i4725[8]
  i4724.targetLineColor = new pc.Color(i4725[9], i4725[10], i4725[11], i4725[12])
  i4724.anchorColor = new pc.Color(i4725[13], i4725[14], i4725[15], i4725[16])
  return i4724
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i4726 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i4727 = data
  i4726.center = new pc.Vec3( i4727[0], i4727[1], i4727[2] )
  i4726.size = new pc.Vec3( i4727[3], i4727[4], i4727[5] )
  i4726.enabled = !!i4727[6]
  i4726.isTrigger = !!i4727[7]
  request.r(i4727[8], i4727[9], 0, i4726, 'material')
  return i4726
}

Deserializers["ClickToStore"] = function (request, data, root) {
  var i4728 = root || request.c( 'ClickToStore' )
  var i4729 = data
  return i4728
}

Deserializers["FavoritePlayerEndcard"] = function (request, data, root) {
  var i4730 = root || request.c( 'FavoritePlayerEndcard' )
  var i4731 = data
  request.r(i4731[0], i4731[1], 0, i4730, 'fullBodyRenderer')
  request.r(i4731[2], i4731[3], 0, i4730, 'nameText')
  request.r(i4731[4], i4731[5], 0, i4730, 'endcardPanel')
  return i4730
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i4732 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i4733 = data
  i4732.pivot = new pc.Vec2( i4733[0], i4733[1] )
  i4732.anchorMin = new pc.Vec2( i4733[2], i4733[3] )
  i4732.anchorMax = new pc.Vec2( i4733[4], i4733[5] )
  i4732.sizeDelta = new pc.Vec2( i4733[6], i4733[7] )
  i4732.anchoredPosition3D = new pc.Vec3( i4733[8], i4733[9], i4733[10] )
  i4732.rotation = new pc.Quat(i4733[11], i4733[12], i4733[13], i4733[14])
  i4732.scale = new pc.Vec3( i4733[15], i4733[16], i4733[17] )
  return i4732
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i4734 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i4735 = data
  request.r(i4735[0], i4735[1], 0, i4734, 'additionalVertexStreams')
  i4734.enabled = !!i4735[2]
  request.r(i4735[3], i4735[4], 0, i4734, 'sharedMaterial')
  var i4737 = i4735[5]
  var i4736 = []
  for(var i = 0; i < i4737.length; i += 2) {
  request.r(i4737[i + 0], i4737[i + 1], 2, i4736, '')
  }
  i4734.sharedMaterials = i4736
  i4734.receiveShadows = !!i4735[6]
  i4734.shadowCastingMode = i4735[7]
  i4734.sortingLayerID = i4735[8]
  i4734.sortingOrder = i4735[9]
  i4734.lightmapIndex = i4735[10]
  i4734.lightmapSceneIndex = i4735[11]
  i4734.lightmapScaleOffset = new pc.Vec4( i4735[12], i4735[13], i4735[14], i4735[15] )
  i4734.lightProbeUsage = i4735[16]
  i4734.reflectionProbeUsage = i4735[17]
  return i4734
}

Deserializers["TMPro.TextMeshPro"] = function (request, data, root) {
  var i4738 = root || request.c( 'TMPro.TextMeshPro' )
  var i4739 = data
  i4738._SortingLayer = i4739[0]
  i4738._SortingLayerID = i4739[1]
  i4738._SortingOrder = i4739[2]
  i4738.m_hasFontAssetChanged = !!i4739[3]
  request.r(i4739[4], i4739[5], 0, i4738, 'm_renderer')
  i4738.m_maskType = i4739[6]
  i4738.m_text = i4739[7]
  i4738.m_isRightToLeft = !!i4739[8]
  request.r(i4739[9], i4739[10], 0, i4738, 'm_fontAsset')
  request.r(i4739[11], i4739[12], 0, i4738, 'm_sharedMaterial')
  var i4741 = i4739[13]
  var i4740 = []
  for(var i = 0; i < i4741.length; i += 2) {
  request.r(i4741[i + 0], i4741[i + 1], 2, i4740, '')
  }
  i4738.m_fontSharedMaterials = i4740
  request.r(i4739[14], i4739[15], 0, i4738, 'm_fontMaterial')
  var i4743 = i4739[16]
  var i4742 = []
  for(var i = 0; i < i4743.length; i += 2) {
  request.r(i4743[i + 0], i4743[i + 1], 2, i4742, '')
  }
  i4738.m_fontMaterials = i4742
  i4738.m_fontColor32 = UnityEngine.Color32.ConstructColor(i4739[17], i4739[18], i4739[19], i4739[20])
  i4738.m_fontColor = new pc.Color(i4739[21], i4739[22], i4739[23], i4739[24])
  i4738.m_enableVertexGradient = !!i4739[25]
  i4738.m_colorMode = i4739[26]
  i4738.m_fontColorGradient = request.d('TMPro.VertexGradient', i4739[27], i4738.m_fontColorGradient)
  request.r(i4739[28], i4739[29], 0, i4738, 'm_fontColorGradientPreset')
  request.r(i4739[30], i4739[31], 0, i4738, 'm_spriteAsset')
  i4738.m_tintAllSprites = !!i4739[32]
  request.r(i4739[33], i4739[34], 0, i4738, 'm_StyleSheet')
  i4738.m_TextStyleHashCode = i4739[35]
  i4738.m_overrideHtmlColors = !!i4739[36]
  i4738.m_faceColor = UnityEngine.Color32.ConstructColor(i4739[37], i4739[38], i4739[39], i4739[40])
  i4738.m_fontSize = i4739[41]
  i4738.m_fontSizeBase = i4739[42]
  i4738.m_fontWeight = i4739[43]
  i4738.m_enableAutoSizing = !!i4739[44]
  i4738.m_fontSizeMin = i4739[45]
  i4738.m_fontSizeMax = i4739[46]
  i4738.m_fontStyle = i4739[47]
  i4738.m_HorizontalAlignment = i4739[48]
  i4738.m_VerticalAlignment = i4739[49]
  i4738.m_textAlignment = i4739[50]
  i4738.m_characterSpacing = i4739[51]
  i4738.m_wordSpacing = i4739[52]
  i4738.m_lineSpacing = i4739[53]
  i4738.m_lineSpacingMax = i4739[54]
  i4738.m_paragraphSpacing = i4739[55]
  i4738.m_charWidthMaxAdj = i4739[56]
  i4738.m_TextWrappingMode = i4739[57]
  i4738.m_wordWrappingRatios = i4739[58]
  i4738.m_overflowMode = i4739[59]
  request.r(i4739[60], i4739[61], 0, i4738, 'm_linkedTextComponent')
  request.r(i4739[62], i4739[63], 0, i4738, 'parentLinkedComponent')
  i4738.m_enableKerning = !!i4739[64]
  var i4745 = i4739[65]
  var i4744 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i4745.length; i += 1) {
    i4744.add(i4745[i + 0]);
  }
  i4738.m_ActiveFontFeatures = i4744
  i4738.m_enableExtraPadding = !!i4739[66]
  i4738.checkPaddingRequired = !!i4739[67]
  i4738.m_isRichText = !!i4739[68]
  i4738.m_parseCtrlCharacters = !!i4739[69]
  i4738.m_isOrthographic = !!i4739[70]
  i4738.m_isCullingEnabled = !!i4739[71]
  i4738.m_horizontalMapping = i4739[72]
  i4738.m_verticalMapping = i4739[73]
  i4738.m_uvLineOffset = i4739[74]
  i4738.m_geometrySortingOrder = i4739[75]
  i4738.m_IsTextObjectScaleStatic = !!i4739[76]
  i4738.m_VertexBufferAutoSizeReduction = !!i4739[77]
  i4738.m_useMaxVisibleDescender = !!i4739[78]
  i4738.m_pageToDisplay = i4739[79]
  i4738.m_margin = new pc.Vec4( i4739[80], i4739[81], i4739[82], i4739[83] )
  i4738.m_isUsingLegacyAnimationComponent = !!i4739[84]
  i4738.m_isVolumetricText = !!i4739[85]
  request.r(i4739[86], i4739[87], 0, i4738, 'm_Material')
  i4738.m_EmojiFallbackSupport = !!i4739[88]
  i4738.m_Maskable = !!i4739[89]
  i4738.m_Color = new pc.Color(i4739[90], i4739[91], i4739[92], i4739[93])
  i4738.m_RaycastTarget = !!i4739[94]
  i4738.m_RaycastPadding = new pc.Vec4( i4739[95], i4739[96], i4739[97], i4739[98] )
  return i4738
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i4746 = root || request.c( 'TMPro.VertexGradient' )
  var i4747 = data
  i4746.topLeft = new pc.Color(i4747[0], i4747[1], i4747[2], i4747[3])
  i4746.topRight = new pc.Color(i4747[4], i4747[5], i4747[6], i4747[7])
  i4746.bottomLeft = new pc.Color(i4747[8], i4747[9], i4747[10], i4747[11])
  i4746.bottomRight = new pc.Color(i4747[12], i4747[13], i4747[14], i4747[15])
  return i4746
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i4750 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i4751 = data
  request.r(i4751[0], i4751[1], 0, i4750, 'sharedMesh')
  return i4750
}

Deserializers["PlayerCardUIManager"] = function (request, data, root) {
  var i4752 = root || request.c( 'PlayerCardUIManager' )
  var i4753 = data
  request.r(i4753[0], i4753[1], 0, i4752, 'cardPanel')
  var i4755 = i4753[2]
  var i4754 = []
  for(var i = 0; i < i4755.length; i += 2) {
  request.r(i4755[i + 0], i4755[i + 1], 2, i4754, '')
  }
  i4752.extraObjectsToActivate = i4754
  i4752.waitTime = i4753[3]
  var i4757 = i4753[4]
  var i4756 = []
  for(var i = 0; i < i4757.length; i += 2) {
  request.r(i4757[i + 0], i4757[i + 1], 2, i4756, '')
  }
  i4752.objectsToTurnOnAfterWait = i4756
  var i4759 = i4753[5]
  var i4758 = []
  for(var i = 0; i < i4759.length; i += 2) {
  request.r(i4759[i + 0], i4759[i + 1], 2, i4758, '')
  }
  i4752.objectsToTurnOffAfterWait = i4758
  request.r(i4753[6], i4753[7], 0, i4752, 'nationalityText')
  request.r(i4753[8], i4753[9], 0, i4752, 'playerImage')
  request.r(i4753[10], i4753[11], 0, i4752, 'flagImage')
  return i4752
}

Deserializers["Ply_SoundManager"] = function (request, data, root) {
  var i4762 = root || request.c( 'Ply_SoundManager' )
  var i4763 = data
  i4762.fxAudio = request.d('FxAudio', i4763[0], i4762.fxAudio)
  request.r(i4763[1], i4763[2], 0, i4762, 'bgm1')
  return i4762
}

Deserializers["FxAudio"] = function (request, data, root) {
  var i4764 = root || request.c( 'FxAudio' )
  var i4765 = data
  i4764.ClickBox = request.d('SoundData', i4765[0], i4764.ClickBox)
  i4764.Happy = request.d('SoundData', i4765[1], i4764.Happy)
  i4764.Wrong = request.d('SoundData', i4765[2], i4764.Wrong)
  i4764.Spray = request.d('SoundData', i4765[3], i4764.Spray)
  i4764.Brush = request.d('SoundData', i4765[4], i4764.Brush)
  return i4764
}

Deserializers["SoundData"] = function (request, data, root) {
  var i4766 = root || request.c( 'SoundData' )
  var i4767 = data
  request.r(i4767[0], i4767[1], 0, i4766, 'clip')
  i4766.repeatCount = i4767[2]
  return i4766
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i4768 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i4769 = data
  request.r(i4769[0], i4769[1], 0, i4768, 'clip')
  request.r(i4769[2], i4769[3], 0, i4768, 'outputAudioMixerGroup')
  i4768.playOnAwake = !!i4769[4]
  i4768.loop = !!i4769[5]
  i4768.time = i4769[6]
  i4768.volume = i4769[7]
  i4768.pitch = i4769[8]
  i4768.enabled = !!i4769[9]
  return i4768
}

Deserializers["FavoritePlayerManager"] = function (request, data, root) {
  var i4770 = root || request.c( 'FavoritePlayerManager' )
  var i4771 = data
  i4770.slotLayerMask = UnityEngine.LayerMask.FromIntegerValue( i4771[0] )
  request.r(i4771[1], i4771[2], 0, i4770, 'slotA')
  request.r(i4771[3], i4771[4], 0, i4770, 'slotB')
  request.r(i4771[5], i4771[6], 0, i4770, 'audioSource')
  request.r(i4771[7], i4771[8], 0, i4770, 'orAudio')
  var i4773 = i4771[9]
  var i4772 = new (System.Collections.Generic.List$1(Bridge.ns('FavoritePlayerCard')))
  for(var i = 0; i < i4773.length; i += 2) {
  request.r(i4773[i + 0], i4773[i + 1], 1, i4772, '')
  }
  i4770.playerList = i4772
  request.r(i4771[10], i4771[11], 0, i4770, 'endcardUI')
  request.r(i4771[12], i4771[13], 0, i4770, 'discardTarget')
  i4770.moveDuration = i4771[14]
  i4770.arcHeight = i4771[15]
  i4770.scaleUpSize = i4771[16]
  i4770.scaleUpDuration = i4771[17]
  i4770.scaleDownDuration = i4771[18]
  i4770.appearStartScale = i4771[19]
  i4770.appearMaxScale = i4771[20]
  i4770.appearUpDuration = i4771[21]
  i4770.appearDownDuration = i4771[22]
  i4770.clickScaleSize = i4771[23]
  i4770.clickDownDuration = i4771[24]
  i4770.clickUpDuration = i4771[25]
  var i4775 = i4771[26]
  var i4774 = []
  for(var i = 0; i < i4775.length; i += 2) {
  request.r(i4775[i + 0], i4775[i + 1], 2, i4774, '')
  }
  i4770.extraObjectsToActivate = i4774
  var i4777 = i4771[27]
  var i4776 = []
  for(var i = 0; i < i4777.length; i += 2) {
  request.r(i4777[i + 0], i4777[i + 1], 2, i4776, '')
  }
  i4770.extraObjectsToDeactivate = i4776
  i4770.waitTime = i4771[28]
  var i4779 = i4771[29]
  var i4778 = []
  for(var i = 0; i < i4779.length; i += 2) {
  request.r(i4779[i + 0], i4779[i + 1], 2, i4778, '')
  }
  i4770.objectsToTurnOnAfterWait = i4778
  var i4781 = i4771[30]
  var i4780 = []
  for(var i = 0; i < i4781.length; i += 2) {
  request.r(i4781[i + 0], i4781[i + 1], 2, i4780, '')
  }
  i4770.objectsToTurnOffAfterWait = i4780
  return i4770
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i4784 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i4785 = data
  i4784.planeDistance = i4785[0]
  i4784.referencePixelsPerUnit = i4785[1]
  i4784.isFallbackOverlay = !!i4785[2]
  i4784.renderMode = i4785[3]
  i4784.renderOrder = i4785[4]
  i4784.sortingLayerName = i4785[5]
  i4784.sortingOrder = i4785[6]
  i4784.scaleFactor = i4785[7]
  request.r(i4785[8], i4785[9], 0, i4784, 'worldCamera')
  i4784.overrideSorting = !!i4785[10]
  i4784.pixelPerfect = !!i4785[11]
  i4784.targetDisplay = i4785[12]
  i4784.overridePixelPerfect = !!i4785[13]
  i4784.enabled = !!i4785[14]
  return i4784
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i4786 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i4787 = data
  i4786.m_UiScaleMode = i4787[0]
  i4786.m_ReferencePixelsPerUnit = i4787[1]
  i4786.m_ScaleFactor = i4787[2]
  i4786.m_ReferenceResolution = new pc.Vec2( i4787[3], i4787[4] )
  i4786.m_ScreenMatchMode = i4787[5]
  i4786.m_MatchWidthOrHeight = i4787[6]
  i4786.m_PhysicalUnit = i4787[7]
  i4786.m_FallbackScreenDPI = i4787[8]
  i4786.m_DefaultSpriteDPI = i4787[9]
  i4786.m_DynamicPixelsPerUnit = i4787[10]
  i4786.m_PresetInfoIsWorld = !!i4787[11]
  return i4786
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i4788 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i4789 = data
  i4788.m_IgnoreReversedGraphics = !!i4789[0]
  i4788.m_BlockingObjects = i4789[1]
  i4788.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i4789[2] )
  return i4788
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i4790 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i4791 = data
  i4790.cullTransparentMesh = !!i4791[0]
  return i4790
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i4792 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i4793 = data
  i4792.m_hasFontAssetChanged = !!i4793[0]
  request.r(i4793[1], i4793[2], 0, i4792, 'm_baseMaterial')
  i4792.m_maskOffset = new pc.Vec4( i4793[3], i4793[4], i4793[5], i4793[6] )
  i4792.m_text = i4793[7]
  i4792.m_isRightToLeft = !!i4793[8]
  request.r(i4793[9], i4793[10], 0, i4792, 'm_fontAsset')
  request.r(i4793[11], i4793[12], 0, i4792, 'm_sharedMaterial')
  var i4795 = i4793[13]
  var i4794 = []
  for(var i = 0; i < i4795.length; i += 2) {
  request.r(i4795[i + 0], i4795[i + 1], 2, i4794, '')
  }
  i4792.m_fontSharedMaterials = i4794
  request.r(i4793[14], i4793[15], 0, i4792, 'm_fontMaterial')
  var i4797 = i4793[16]
  var i4796 = []
  for(var i = 0; i < i4797.length; i += 2) {
  request.r(i4797[i + 0], i4797[i + 1], 2, i4796, '')
  }
  i4792.m_fontMaterials = i4796
  i4792.m_fontColor32 = UnityEngine.Color32.ConstructColor(i4793[17], i4793[18], i4793[19], i4793[20])
  i4792.m_fontColor = new pc.Color(i4793[21], i4793[22], i4793[23], i4793[24])
  i4792.m_enableVertexGradient = !!i4793[25]
  i4792.m_colorMode = i4793[26]
  i4792.m_fontColorGradient = request.d('TMPro.VertexGradient', i4793[27], i4792.m_fontColorGradient)
  request.r(i4793[28], i4793[29], 0, i4792, 'm_fontColorGradientPreset')
  request.r(i4793[30], i4793[31], 0, i4792, 'm_spriteAsset')
  i4792.m_tintAllSprites = !!i4793[32]
  request.r(i4793[33], i4793[34], 0, i4792, 'm_StyleSheet')
  i4792.m_TextStyleHashCode = i4793[35]
  i4792.m_overrideHtmlColors = !!i4793[36]
  i4792.m_faceColor = UnityEngine.Color32.ConstructColor(i4793[37], i4793[38], i4793[39], i4793[40])
  i4792.m_fontSize = i4793[41]
  i4792.m_fontSizeBase = i4793[42]
  i4792.m_fontWeight = i4793[43]
  i4792.m_enableAutoSizing = !!i4793[44]
  i4792.m_fontSizeMin = i4793[45]
  i4792.m_fontSizeMax = i4793[46]
  i4792.m_fontStyle = i4793[47]
  i4792.m_HorizontalAlignment = i4793[48]
  i4792.m_VerticalAlignment = i4793[49]
  i4792.m_textAlignment = i4793[50]
  i4792.m_characterSpacing = i4793[51]
  i4792.m_wordSpacing = i4793[52]
  i4792.m_lineSpacing = i4793[53]
  i4792.m_lineSpacingMax = i4793[54]
  i4792.m_paragraphSpacing = i4793[55]
  i4792.m_charWidthMaxAdj = i4793[56]
  i4792.m_TextWrappingMode = i4793[57]
  i4792.m_wordWrappingRatios = i4793[58]
  i4792.m_overflowMode = i4793[59]
  request.r(i4793[60], i4793[61], 0, i4792, 'm_linkedTextComponent')
  request.r(i4793[62], i4793[63], 0, i4792, 'parentLinkedComponent')
  i4792.m_enableKerning = !!i4793[64]
  var i4799 = i4793[65]
  var i4798 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i4799.length; i += 1) {
    i4798.add(i4799[i + 0]);
  }
  i4792.m_ActiveFontFeatures = i4798
  i4792.m_enableExtraPadding = !!i4793[66]
  i4792.checkPaddingRequired = !!i4793[67]
  i4792.m_isRichText = !!i4793[68]
  i4792.m_parseCtrlCharacters = !!i4793[69]
  i4792.m_isOrthographic = !!i4793[70]
  i4792.m_isCullingEnabled = !!i4793[71]
  i4792.m_horizontalMapping = i4793[72]
  i4792.m_verticalMapping = i4793[73]
  i4792.m_uvLineOffset = i4793[74]
  i4792.m_geometrySortingOrder = i4793[75]
  i4792.m_IsTextObjectScaleStatic = !!i4793[76]
  i4792.m_VertexBufferAutoSizeReduction = !!i4793[77]
  i4792.m_useMaxVisibleDescender = !!i4793[78]
  i4792.m_pageToDisplay = i4793[79]
  i4792.m_margin = new pc.Vec4( i4793[80], i4793[81], i4793[82], i4793[83] )
  i4792.m_isUsingLegacyAnimationComponent = !!i4793[84]
  i4792.m_isVolumetricText = !!i4793[85]
  request.r(i4793[86], i4793[87], 0, i4792, 'm_Material')
  i4792.m_EmojiFallbackSupport = !!i4793[88]
  i4792.m_Maskable = !!i4793[89]
  i4792.m_Color = new pc.Color(i4793[90], i4793[91], i4793[92], i4793[93])
  i4792.m_RaycastTarget = !!i4793[94]
  i4792.m_RaycastPadding = new pc.Vec4( i4793[95], i4793[96], i4793[97], i4793[98] )
  return i4792
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i4800 = root || request.c( 'UnityEngine.UI.Image' )
  var i4801 = data
  request.r(i4801[0], i4801[1], 0, i4800, 'm_Sprite')
  i4800.m_Type = i4801[2]
  i4800.m_PreserveAspect = !!i4801[3]
  i4800.m_FillCenter = !!i4801[4]
  i4800.m_FillMethod = i4801[5]
  i4800.m_FillAmount = i4801[6]
  i4800.m_FillClockwise = !!i4801[7]
  i4800.m_FillOrigin = i4801[8]
  i4800.m_UseSpriteMesh = !!i4801[9]
  i4800.m_PixelsPerUnitMultiplier = i4801[10]
  request.r(i4801[11], i4801[12], 0, i4800, 'm_Material')
  i4800.m_Maskable = !!i4801[13]
  i4800.m_Color = new pc.Color(i4801[14], i4801[15], i4801[16], i4801[17])
  i4800.m_RaycastTarget = !!i4801[18]
  i4800.m_RaycastPadding = new pc.Vec4( i4801[19], i4801[20], i4801[21], i4801[22] )
  return i4800
}

Deserializers["PlayerSlot"] = function (request, data, root) {
  var i4802 = root || request.c( 'PlayerSlot' )
  var i4803 = data
  request.r(i4803[0], i4803[1], 0, i4802, 'spriteRenderer')
  request.r(i4803[2], i4803[3], 0, i4802, 'lightEffect')
  i4802.idleScale = i4803[4]
  i4802.idleDuration = i4803[5]
  i4802.originalPosition = new pc.Vec3( i4803[6], i4803[7], i4803[8] )
  i4802.originalScale = new pc.Vec3( i4803[9], i4803[10], i4803[11] )
  request.r(i4803[12], i4803[13], 0, i4802, 'currentData')
  return i4802
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i4804 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i4805 = data
  request.r(i4805[0], i4805[1], 0, i4804, 'm_FirstSelected')
  i4804.m_sendNavigationEvents = !!i4805[2]
  i4804.m_DragThreshold = i4805[3]
  return i4804
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i4806 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i4807 = data
  i4806.m_HorizontalAxis = i4807[0]
  i4806.m_VerticalAxis = i4807[1]
  i4806.m_SubmitButton = i4807[2]
  i4806.m_CancelButton = i4807[3]
  i4806.m_InputActionsPerSecond = i4807[4]
  i4806.m_RepeatDelay = i4807[5]
  i4806.m_ForceModuleActive = !!i4807[6]
  i4806.m_SendPointerHoverToParent = !!i4807[7]
  return i4806
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i4808 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i4809 = data
  i4808.ambientIntensity = i4809[0]
  i4808.reflectionIntensity = i4809[1]
  i4808.ambientMode = i4809[2]
  i4808.ambientLight = new pc.Color(i4809[3], i4809[4], i4809[5], i4809[6])
  i4808.ambientSkyColor = new pc.Color(i4809[7], i4809[8], i4809[9], i4809[10])
  i4808.ambientGroundColor = new pc.Color(i4809[11], i4809[12], i4809[13], i4809[14])
  i4808.ambientEquatorColor = new pc.Color(i4809[15], i4809[16], i4809[17], i4809[18])
  i4808.fogColor = new pc.Color(i4809[19], i4809[20], i4809[21], i4809[22])
  i4808.fogEndDistance = i4809[23]
  i4808.fogStartDistance = i4809[24]
  i4808.fogDensity = i4809[25]
  i4808.fog = !!i4809[26]
  request.r(i4809[27], i4809[28], 0, i4808, 'skybox')
  i4808.fogMode = i4809[29]
  var i4811 = i4809[30]
  var i4810 = []
  for(var i = 0; i < i4811.length; i += 1) {
    i4810.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i4811[i + 0]) );
  }
  i4808.lightmaps = i4810
  i4808.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i4809[31], i4808.lightProbes)
  i4808.lightmapsMode = i4809[32]
  i4808.mixedBakeMode = i4809[33]
  i4808.environmentLightingMode = i4809[34]
  i4808.ambientProbe = new pc.SphericalHarmonicsL2(i4809[35])
  i4808.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i4809[36])
  i4808.useReferenceAmbientProbe = !!i4809[37]
  request.r(i4809[38], i4809[39], 0, i4808, 'customReflection')
  request.r(i4809[40], i4809[41], 0, i4808, 'defaultReflection')
  i4808.defaultReflectionMode = i4809[42]
  i4808.defaultReflectionResolution = i4809[43]
  i4808.sunLightObjectId = i4809[44]
  i4808.pixelLightCount = i4809[45]
  i4808.defaultReflectionHDR = !!i4809[46]
  i4808.hasLightDataAsset = !!i4809[47]
  i4808.hasManualGenerate = !!i4809[48]
  return i4808
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i4814 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i4815 = data
  request.r(i4815[0], i4815[1], 0, i4814, 'lightmapColor')
  request.r(i4815[2], i4815[3], 0, i4814, 'lightmapDirection')
  request.r(i4815[4], i4815[5], 0, i4814, 'shadowMask')
  return i4814
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i4816 = root || new UnityEngine.LightProbes()
  var i4817 = data
  return i4816
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i4824 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i4825 = data
  var i4827 = i4825[0]
  var i4826 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i4827.length; i += 1) {
    i4826.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i4827[i + 0]));
  }
  i4824.ShaderCompilationErrors = i4826
  i4824.name = i4825[1]
  i4824.guid = i4825[2]
  var i4829 = i4825[3]
  var i4828 = []
  for(var i = 0; i < i4829.length; i += 1) {
    i4828.push( i4829[i + 0] );
  }
  i4824.shaderDefinedKeywords = i4828
  var i4831 = i4825[4]
  var i4830 = []
  for(var i = 0; i < i4831.length; i += 1) {
    i4830.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i4831[i + 0]) );
  }
  i4824.passes = i4830
  var i4833 = i4825[5]
  var i4832 = []
  for(var i = 0; i < i4833.length; i += 1) {
    i4832.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i4833[i + 0]) );
  }
  i4824.usePasses = i4832
  var i4835 = i4825[6]
  var i4834 = []
  for(var i = 0; i < i4835.length; i += 1) {
    i4834.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i4835[i + 0]) );
  }
  i4824.defaultParameterValues = i4834
  request.r(i4825[7], i4825[8], 0, i4824, 'unityFallbackShader')
  i4824.readDepth = !!i4825[9]
  i4824.hasDepthOnlyPass = !!i4825[10]
  i4824.isCreatedByShaderGraph = !!i4825[11]
  i4824.disableBatching = !!i4825[12]
  i4824.compiled = !!i4825[13]
  return i4824
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i4838 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i4839 = data
  i4838.shaderName = i4839[0]
  i4838.errorMessage = i4839[1]
  return i4838
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i4844 = root || new pc.UnityShaderPass()
  var i4845 = data
  i4844.id = i4845[0]
  i4844.subShaderIndex = i4845[1]
  i4844.name = i4845[2]
  i4844.passType = i4845[3]
  i4844.grabPassTextureName = i4845[4]
  i4844.usePass = !!i4845[5]
  i4844.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4845[6], i4844.zTest)
  i4844.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4845[7], i4844.zWrite)
  i4844.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4845[8], i4844.culling)
  i4844.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i4845[9], i4844.blending)
  i4844.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i4845[10], i4844.alphaBlending)
  i4844.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4845[11], i4844.colorWriteMask)
  i4844.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4845[12], i4844.offsetUnits)
  i4844.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4845[13], i4844.offsetFactor)
  i4844.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4845[14], i4844.stencilRef)
  i4844.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4845[15], i4844.stencilReadMask)
  i4844.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4845[16], i4844.stencilWriteMask)
  i4844.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i4845[17], i4844.stencilOp)
  i4844.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i4845[18], i4844.stencilOpFront)
  i4844.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i4845[19], i4844.stencilOpBack)
  var i4847 = i4845[20]
  var i4846 = []
  for(var i = 0; i < i4847.length; i += 1) {
    i4846.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i4847[i + 0]) );
  }
  i4844.tags = i4846
  var i4849 = i4845[21]
  var i4848 = []
  for(var i = 0; i < i4849.length; i += 1) {
    i4848.push( i4849[i + 0] );
  }
  i4844.passDefinedKeywords = i4848
  var i4851 = i4845[22]
  var i4850 = []
  for(var i = 0; i < i4851.length; i += 1) {
    i4850.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i4851[i + 0]) );
  }
  i4844.passDefinedKeywordGroups = i4850
  var i4853 = i4845[23]
  var i4852 = []
  for(var i = 0; i < i4853.length; i += 1) {
    i4852.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i4853[i + 0]) );
  }
  i4844.variants = i4852
  var i4855 = i4845[24]
  var i4854 = []
  for(var i = 0; i < i4855.length; i += 1) {
    i4854.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i4855[i + 0]) );
  }
  i4844.excludedVariants = i4854
  i4844.hasDepthReader = !!i4845[25]
  return i4844
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i4856 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i4857 = data
  i4856.val = i4857[0]
  i4856.name = i4857[1]
  return i4856
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i4858 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i4859 = data
  i4858.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4859[0], i4858.src)
  i4858.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4859[1], i4858.dst)
  i4858.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4859[2], i4858.op)
  return i4858
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i4860 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i4861 = data
  i4860.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4861[0], i4860.pass)
  i4860.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4861[1], i4860.fail)
  i4860.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4861[2], i4860.zFail)
  i4860.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4861[3], i4860.comp)
  return i4860
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i4864 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i4865 = data
  i4864.name = i4865[0]
  i4864.value = i4865[1]
  return i4864
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i4868 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i4869 = data
  var i4871 = i4869[0]
  var i4870 = []
  for(var i = 0; i < i4871.length; i += 1) {
    i4870.push( i4871[i + 0] );
  }
  i4868.keywords = i4870
  i4868.hasDiscard = !!i4869[1]
  return i4868
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i4874 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i4875 = data
  i4874.passId = i4875[0]
  i4874.subShaderIndex = i4875[1]
  var i4877 = i4875[2]
  var i4876 = []
  for(var i = 0; i < i4877.length; i += 1) {
    i4876.push( i4877[i + 0] );
  }
  i4874.keywords = i4876
  i4874.vertexProgram = i4875[3]
  i4874.fragmentProgram = i4875[4]
  i4874.exportedForWebGl2 = !!i4875[5]
  i4874.readDepth = !!i4875[6]
  return i4874
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i4880 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i4881 = data
  request.r(i4881[0], i4881[1], 0, i4880, 'shader')
  i4880.pass = i4881[2]
  return i4880
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i4884 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i4885 = data
  i4884.name = i4885[0]
  i4884.type = i4885[1]
  i4884.value = new pc.Vec4( i4885[2], i4885[3], i4885[4], i4885[5] )
  i4884.textureValue = i4885[6]
  i4884.shaderPropertyFlag = i4885[7]
  return i4884
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i4886 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i4887 = data
  i4886.name = i4887[0]
  request.r(i4887[1], i4887[2], 0, i4886, 'texture')
  i4886.aabb = i4887[3]
  i4886.vertices = i4887[4]
  i4886.triangles = i4887[5]
  i4886.textureRect = UnityEngine.Rect.MinMaxRect(i4887[6], i4887[7], i4887[8], i4887[9])
  i4886.packedRect = UnityEngine.Rect.MinMaxRect(i4887[10], i4887[11], i4887[12], i4887[13])
  i4886.border = new pc.Vec4( i4887[14], i4887[15], i4887[16], i4887[17] )
  i4886.transparency = i4887[18]
  i4886.bounds = i4887[19]
  i4886.pixelsPerUnit = i4887[20]
  i4886.textureWidth = i4887[21]
  i4886.textureHeight = i4887[22]
  i4886.nativeSize = new pc.Vec2( i4887[23], i4887[24] )
  i4886.pivot = new pc.Vec2( i4887[25], i4887[26] )
  i4886.textureRectOffset = new pc.Vec2( i4887[27], i4887[28] )
  return i4886
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i4888 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i4889 = data
  i4888.name = i4889[0]
  return i4888
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i4890 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i4891 = data
  i4890.name = i4891[0]
  i4890.wrapMode = i4891[1]
  i4890.isLooping = !!i4891[2]
  i4890.length = i4891[3]
  var i4893 = i4891[4]
  var i4892 = []
  for(var i = 0; i < i4893.length; i += 1) {
    i4892.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i4893[i + 0]) );
  }
  i4890.curves = i4892
  var i4895 = i4891[5]
  var i4894 = []
  for(var i = 0; i < i4895.length; i += 1) {
    i4894.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i4895[i + 0]) );
  }
  i4890.events = i4894
  i4890.halfPrecision = !!i4891[6]
  i4890._frameRate = i4891[7]
  i4890.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i4891[8], i4890.localBounds)
  i4890.hasMuscleCurves = !!i4891[9]
  var i4897 = i4891[10]
  var i4896 = []
  for(var i = 0; i < i4897.length; i += 1) {
    i4896.push( i4897[i + 0] );
  }
  i4890.clipMuscleConstant = i4896
  i4890.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i4891[11], i4890.clipBindingConstant)
  return i4890
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i4900 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i4901 = data
  i4900.path = i4901[0]
  i4900.hash = i4901[1]
  i4900.componentType = i4901[2]
  i4900.property = i4901[3]
  i4900.keys = i4901[4]
  var i4903 = i4901[5]
  var i4902 = []
  for(var i = 0; i < i4903.length; i += 1) {
    i4902.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i4903[i + 0]) );
  }
  i4900.objectReferenceKeys = i4902
  return i4900
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i4906 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i4907 = data
  i4906.time = i4907[0]
  request.r(i4907[1], i4907[2], 0, i4906, 'value')
  return i4906
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i4910 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i4911 = data
  i4910.functionName = i4911[0]
  i4910.floatParameter = i4911[1]
  i4910.intParameter = i4911[2]
  i4910.stringParameter = i4911[3]
  request.r(i4911[4], i4911[5], 0, i4910, 'objectReferenceParameter')
  i4910.time = i4911[6]
  return i4910
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i4912 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i4913 = data
  i4912.center = new pc.Vec3( i4913[0], i4913[1], i4913[2] )
  i4912.extends = new pc.Vec3( i4913[3], i4913[4], i4913[5] )
  return i4912
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i4916 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i4917 = data
  var i4919 = i4917[0]
  var i4918 = []
  for(var i = 0; i < i4919.length; i += 1) {
    i4918.push( i4919[i + 0] );
  }
  i4916.genericBindings = i4918
  var i4921 = i4917[1]
  var i4920 = []
  for(var i = 0; i < i4921.length; i += 1) {
    i4920.push( i4921[i + 0] );
  }
  i4916.pptrCurveMapping = i4920
  return i4916
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i4922 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i4923 = data
  i4922.name = i4923[0]
  i4922.ascent = i4923[1]
  i4922.originalLineHeight = i4923[2]
  i4922.fontSize = i4923[3]
  var i4925 = i4923[4]
  var i4924 = []
  for(var i = 0; i < i4925.length; i += 1) {
    i4924.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i4925[i + 0]) );
  }
  i4922.characterInfo = i4924
  request.r(i4923[5], i4923[6], 0, i4922, 'texture')
  i4922.originalFontSize = i4923[7]
  return i4922
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i4928 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i4929 = data
  i4928.index = i4929[0]
  i4928.advance = i4929[1]
  i4928.bearing = i4929[2]
  i4928.glyphWidth = i4929[3]
  i4928.glyphHeight = i4929[4]
  i4928.minX = i4929[5]
  i4928.maxX = i4929[6]
  i4928.minY = i4929[7]
  i4928.maxY = i4929[8]
  i4928.uvBottomLeftX = i4929[9]
  i4928.uvBottomLeftY = i4929[10]
  i4928.uvBottomRightX = i4929[11]
  i4928.uvBottomRightY = i4929[12]
  i4928.uvTopLeftX = i4929[13]
  i4928.uvTopLeftY = i4929[14]
  i4928.uvTopRightX = i4929[15]
  i4928.uvTopRightY = i4929[16]
  return i4928
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i4930 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i4931 = data
  i4930.name = i4931[0]
  var i4933 = i4931[1]
  var i4932 = []
  for(var i = 0; i < i4933.length; i += 1) {
    i4932.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i4933[i + 0]) );
  }
  i4930.layers = i4932
  var i4935 = i4931[2]
  var i4934 = []
  for(var i = 0; i < i4935.length; i += 1) {
    i4934.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i4935[i + 0]) );
  }
  i4930.parameters = i4934
  i4930.animationClips = i4931[3]
  i4930.avatarUnsupported = i4931[4]
  return i4930
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i4938 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i4939 = data
  i4938.name = i4939[0]
  i4938.defaultWeight = i4939[1]
  i4938.blendingMode = i4939[2]
  i4938.avatarMask = i4939[3]
  i4938.syncedLayerIndex = i4939[4]
  i4938.syncedLayerAffectsTiming = !!i4939[5]
  i4938.syncedLayers = i4939[6]
  i4938.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i4939[7], i4938.stateMachine)
  return i4938
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i4940 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i4941 = data
  i4940.id = i4941[0]
  i4940.name = i4941[1]
  i4940.path = i4941[2]
  var i4943 = i4941[3]
  var i4942 = []
  for(var i = 0; i < i4943.length; i += 1) {
    i4942.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i4943[i + 0]) );
  }
  i4940.states = i4942
  var i4945 = i4941[4]
  var i4944 = []
  for(var i = 0; i < i4945.length; i += 1) {
    i4944.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i4945[i + 0]) );
  }
  i4940.machines = i4944
  var i4947 = i4941[5]
  var i4946 = []
  for(var i = 0; i < i4947.length; i += 1) {
    i4946.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i4947[i + 0]) );
  }
  i4940.entryStateTransitions = i4946
  var i4949 = i4941[6]
  var i4948 = []
  for(var i = 0; i < i4949.length; i += 1) {
    i4948.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i4949[i + 0]) );
  }
  i4940.exitStateTransitions = i4948
  var i4951 = i4941[7]
  var i4950 = []
  for(var i = 0; i < i4951.length; i += 1) {
    i4950.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i4951[i + 0]) );
  }
  i4940.anyStateTransitions = i4950
  i4940.defaultStateId = i4941[8]
  return i4940
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i4954 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i4955 = data
  i4954.id = i4955[0]
  i4954.name = i4955[1]
  i4954.cycleOffset = i4955[2]
  i4954.cycleOffsetParameter = i4955[3]
  i4954.cycleOffsetParameterActive = !!i4955[4]
  i4954.mirror = !!i4955[5]
  i4954.mirrorParameter = i4955[6]
  i4954.mirrorParameterActive = !!i4955[7]
  i4954.motionId = i4955[8]
  i4954.nameHash = i4955[9]
  i4954.fullPathHash = i4955[10]
  i4954.speed = i4955[11]
  i4954.speedParameter = i4955[12]
  i4954.speedParameterActive = !!i4955[13]
  i4954.tag = i4955[14]
  i4954.tagHash = i4955[15]
  i4954.writeDefaultValues = !!i4955[16]
  var i4957 = i4955[17]
  var i4956 = []
  for(var i = 0; i < i4957.length; i += 2) {
  request.r(i4957[i + 0], i4957[i + 1], 2, i4956, '')
  }
  i4954.behaviours = i4956
  var i4959 = i4955[18]
  var i4958 = []
  for(var i = 0; i < i4959.length; i += 1) {
    i4958.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i4959[i + 0]) );
  }
  i4954.transitions = i4958
  return i4954
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i4964 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i4965 = data
  i4964.fullPath = i4965[0]
  i4964.canTransitionToSelf = !!i4965[1]
  i4964.duration = i4965[2]
  i4964.exitTime = i4965[3]
  i4964.hasExitTime = !!i4965[4]
  i4964.hasFixedDuration = !!i4965[5]
  i4964.interruptionSource = i4965[6]
  i4964.offset = i4965[7]
  i4964.orderedInterruption = !!i4965[8]
  i4964.destinationStateId = i4965[9]
  i4964.isExit = !!i4965[10]
  i4964.mute = !!i4965[11]
  i4964.solo = !!i4965[12]
  var i4967 = i4965[13]
  var i4966 = []
  for(var i = 0; i < i4967.length; i += 1) {
    i4966.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i4967[i + 0]) );
  }
  i4964.conditions = i4966
  return i4964
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i4972 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i4973 = data
  i4972.destinationStateId = i4973[0]
  i4972.isExit = !!i4973[1]
  i4972.mute = !!i4973[2]
  i4972.solo = !!i4973[3]
  var i4975 = i4973[4]
  var i4974 = []
  for(var i = 0; i < i4975.length; i += 1) {
    i4974.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i4975[i + 0]) );
  }
  i4972.conditions = i4974
  return i4972
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i4978 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i4979 = data
  i4978.defaultBool = !!i4979[0]
  i4978.defaultFloat = i4979[1]
  i4978.defaultInt = i4979[2]
  i4978.name = i4979[3]
  i4978.nameHash = i4979[4]
  i4978.type = i4979[5]
  return i4978
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i4980 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i4981 = data
  i4980.name = i4981[0]
  i4980.bytes64 = i4981[1]
  i4980.data = i4981[2]
  return i4980
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i4982 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i4983 = data
  i4982.normalStyle = i4983[0]
  i4982.normalSpacingOffset = i4983[1]
  i4982.boldStyle = i4983[2]
  i4982.boldSpacing = i4983[3]
  i4982.italicStyle = i4983[4]
  i4982.tabSize = i4983[5]
  request.r(i4983[6], i4983[7], 0, i4982, 'atlas')
  i4982.m_SourceFontFileGUID = i4983[8]
  i4982.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i4983[9], i4982.m_CreationSettings)
  request.r(i4983[10], i4983[11], 0, i4982, 'm_SourceFontFile')
  i4982.m_SourceFontFilePath = i4983[12]
  i4982.m_AtlasPopulationMode = i4983[13]
  i4982.InternalDynamicOS = !!i4983[14]
  var i4985 = i4983[15]
  var i4984 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i4985.length; i += 1) {
    i4984.add(request.d('UnityEngine.TextCore.Glyph', i4985[i + 0]));
  }
  i4982.m_GlyphTable = i4984
  var i4987 = i4983[16]
  var i4986 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i4987.length; i += 1) {
    i4986.add(request.d('TMPro.TMP_Character', i4987[i + 0]));
  }
  i4982.m_CharacterTable = i4986
  var i4989 = i4983[17]
  var i4988 = []
  for(var i = 0; i < i4989.length; i += 2) {
  request.r(i4989[i + 0], i4989[i + 1], 2, i4988, '')
  }
  i4982.m_AtlasTextures = i4988
  i4982.m_AtlasTextureIndex = i4983[18]
  i4982.m_IsMultiAtlasTexturesEnabled = !!i4983[19]
  i4982.m_GetFontFeatures = !!i4983[20]
  i4982.m_ClearDynamicDataOnBuild = !!i4983[21]
  i4982.m_AtlasWidth = i4983[22]
  i4982.m_AtlasHeight = i4983[23]
  i4982.m_AtlasPadding = i4983[24]
  i4982.m_AtlasRenderMode = i4983[25]
  var i4991 = i4983[26]
  var i4990 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i4991.length; i += 1) {
    i4990.add(request.d('UnityEngine.TextCore.GlyphRect', i4991[i + 0]));
  }
  i4982.m_UsedGlyphRects = i4990
  var i4993 = i4983[27]
  var i4992 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i4993.length; i += 1) {
    i4992.add(request.d('UnityEngine.TextCore.GlyphRect', i4993[i + 0]));
  }
  i4982.m_FreeGlyphRects = i4992
  i4982.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i4983[28], i4982.m_FontFeatureTable)
  i4982.m_ShouldReimportFontFeatures = !!i4983[29]
  var i4995 = i4983[30]
  var i4994 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i4995.length; i += 2) {
  request.r(i4995[i + 0], i4995[i + 1], 1, i4994, '')
  }
  i4982.m_FallbackFontAssetTable = i4994
  var i4997 = i4983[31]
  var i4996 = []
  for(var i = 0; i < i4997.length; i += 1) {
    i4996.push( request.d('TMPro.TMP_FontWeightPair', i4997[i + 0]) );
  }
  i4982.m_FontWeightTable = i4996
  var i4999 = i4983[32]
  var i4998 = []
  for(var i = 0; i < i4999.length; i += 1) {
    i4998.push( request.d('TMPro.TMP_FontWeightPair', i4999[i + 0]) );
  }
  i4982.fontWeights = i4998
  i4982.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i4983[33], i4982.m_fontInfo)
  var i5001 = i4983[34]
  var i5000 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i5001.length; i += 1) {
    i5000.add(request.d('TMPro.TMP_Glyph', i5001[i + 0]));
  }
  i4982.m_glyphInfoList = i5000
  i4982.m_KerningTable = request.d('TMPro.KerningTable', i4983[35], i4982.m_KerningTable)
  var i5003 = i4983[36]
  var i5002 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i5003.length; i += 2) {
  request.r(i5003[i + 0], i5003[i + 1], 1, i5002, '')
  }
  i4982.fallbackFontAssets = i5002
  i4982.m_Version = i4983[37]
  i4982.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i4983[38], i4982.m_FaceInfo)
  request.r(i4983[39], i4983[40], 0, i4982, 'm_Material')
  return i4982
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i5004 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i5005 = data
  i5004.sourceFontFileName = i5005[0]
  i5004.sourceFontFileGUID = i5005[1]
  i5004.faceIndex = i5005[2]
  i5004.pointSizeSamplingMode = i5005[3]
  i5004.pointSize = i5005[4]
  i5004.padding = i5005[5]
  i5004.paddingMode = i5005[6]
  i5004.packingMode = i5005[7]
  i5004.atlasWidth = i5005[8]
  i5004.atlasHeight = i5005[9]
  i5004.characterSetSelectionMode = i5005[10]
  i5004.characterSequence = i5005[11]
  i5004.referencedFontAssetGUID = i5005[12]
  i5004.referencedTextAssetGUID = i5005[13]
  i5004.fontStyle = i5005[14]
  i5004.fontStyleModifier = i5005[15]
  i5004.renderMode = i5005[16]
  i5004.includeFontFeatures = !!i5005[17]
  return i5004
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i5008 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i5009 = data
  i5008.m_Index = i5009[0]
  i5008.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i5009[1], i5008.m_Metrics)
  i5008.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i5009[2], i5008.m_GlyphRect)
  i5008.m_Scale = i5009[3]
  i5008.m_AtlasIndex = i5009[4]
  i5008.m_ClassDefinitionType = i5009[5]
  return i5008
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i5010 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i5011 = data
  i5010.m_Width = i5011[0]
  i5010.m_Height = i5011[1]
  i5010.m_HorizontalBearingX = i5011[2]
  i5010.m_HorizontalBearingY = i5011[3]
  i5010.m_HorizontalAdvance = i5011[4]
  return i5010
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i5012 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i5013 = data
  i5012.m_X = i5013[0]
  i5012.m_Y = i5013[1]
  i5012.m_Width = i5013[2]
  i5012.m_Height = i5013[3]
  return i5012
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i5016 = root || request.c( 'TMPro.TMP_Character' )
  var i5017 = data
  i5016.m_ElementType = i5017[0]
  i5016.m_Unicode = i5017[1]
  i5016.m_GlyphIndex = i5017[2]
  i5016.m_Scale = i5017[3]
  return i5016
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i5022 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i5023 = data
  var i5025 = i5023[0]
  var i5024 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i5025.length; i += 1) {
    i5024.add(request.d('TMPro.MultipleSubstitutionRecord', i5025[i + 0]));
  }
  i5022.m_MultipleSubstitutionRecords = i5024
  var i5027 = i5023[1]
  var i5026 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i5027.length; i += 1) {
    i5026.add(request.d('TMPro.LigatureSubstitutionRecord', i5027[i + 0]));
  }
  i5022.m_LigatureSubstitutionRecords = i5026
  var i5029 = i5023[2]
  var i5028 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i5029.length; i += 1) {
    i5028.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i5029[i + 0]));
  }
  i5022.m_GlyphPairAdjustmentRecords = i5028
  var i5031 = i5023[3]
  var i5030 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i5031.length; i += 1) {
    i5030.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i5031[i + 0]));
  }
  i5022.m_MarkToBaseAdjustmentRecords = i5030
  var i5033 = i5023[4]
  var i5032 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i5033.length; i += 1) {
    i5032.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i5033[i + 0]));
  }
  i5022.m_MarkToMarkAdjustmentRecords = i5032
  return i5022
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i5036 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i5037 = data
  i5036.m_TargetGlyphID = i5037[0]
  i5036.m_SubstituteGlyphIDs = i5037[1]
  return i5036
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i5040 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i5041 = data
  i5040.m_ComponentGlyphIDs = i5041[0]
  i5040.m_LigatureGlyphID = i5041[1]
  return i5040
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i5044 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i5045 = data
  i5044.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i5045[0], i5044.m_FirstAdjustmentRecord)
  i5044.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i5045[1], i5044.m_SecondAdjustmentRecord)
  i5044.m_FeatureLookupFlags = i5045[2]
  return i5044
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i5046 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i5047 = data
  i5046.m_GlyphIndex = i5047[0]
  i5046.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i5047[1], i5046.m_GlyphValueRecord)
  return i5046
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i5048 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i5049 = data
  i5048.m_XPlacement = i5049[0]
  i5048.m_YPlacement = i5049[1]
  i5048.m_XAdvance = i5049[2]
  i5048.m_YAdvance = i5049[3]
  return i5048
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i5052 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i5053 = data
  i5052.m_BaseGlyphID = i5053[0]
  i5052.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i5053[1], i5052.m_BaseGlyphAnchorPoint)
  i5052.m_MarkGlyphID = i5053[2]
  i5052.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i5053[3], i5052.m_MarkPositionAdjustment)
  return i5052
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i5056 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i5057 = data
  i5056.m_BaseMarkGlyphID = i5057[0]
  i5056.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i5057[1], i5056.m_BaseMarkGlyphAnchorPoint)
  i5056.m_CombiningMarkGlyphID = i5057[2]
  i5056.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i5057[3], i5056.m_CombiningMarkPositionAdjustment)
  return i5056
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i5062 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i5063 = data
  request.r(i5063[0], i5063[1], 0, i5062, 'regularTypeface')
  request.r(i5063[2], i5063[3], 0, i5062, 'italicTypeface')
  return i5062
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i5064 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i5065 = data
  i5064.Name = i5065[0]
  i5064.PointSize = i5065[1]
  i5064.Scale = i5065[2]
  i5064.CharacterCount = i5065[3]
  i5064.LineHeight = i5065[4]
  i5064.Baseline = i5065[5]
  i5064.Ascender = i5065[6]
  i5064.CapHeight = i5065[7]
  i5064.Descender = i5065[8]
  i5064.CenterLine = i5065[9]
  i5064.SuperscriptOffset = i5065[10]
  i5064.SubscriptOffset = i5065[11]
  i5064.SubSize = i5065[12]
  i5064.Underline = i5065[13]
  i5064.UnderlineThickness = i5065[14]
  i5064.strikethrough = i5065[15]
  i5064.strikethroughThickness = i5065[16]
  i5064.TabWidth = i5065[17]
  i5064.Padding = i5065[18]
  i5064.AtlasWidth = i5065[19]
  i5064.AtlasHeight = i5065[20]
  return i5064
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i5068 = root || request.c( 'TMPro.TMP_Glyph' )
  var i5069 = data
  i5068.id = i5069[0]
  i5068.x = i5069[1]
  i5068.y = i5069[2]
  i5068.width = i5069[3]
  i5068.height = i5069[4]
  i5068.xOffset = i5069[5]
  i5068.yOffset = i5069[6]
  i5068.xAdvance = i5069[7]
  i5068.scale = i5069[8]
  return i5068
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i5070 = root || request.c( 'TMPro.KerningTable' )
  var i5071 = data
  var i5073 = i5071[0]
  var i5072 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i5073.length; i += 1) {
    i5072.add(request.d('TMPro.KerningPair', i5073[i + 0]));
  }
  i5070.kerningPairs = i5072
  return i5070
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i5076 = root || request.c( 'TMPro.KerningPair' )
  var i5077 = data
  i5076.xOffset = i5077[0]
  i5076.m_FirstGlyph = i5077[1]
  i5076.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i5077[2], i5076.m_FirstGlyphAdjustments)
  i5076.m_SecondGlyph = i5077[3]
  i5076.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i5077[4], i5076.m_SecondGlyphAdjustments)
  i5076.m_IgnoreSpacingAdjustments = !!i5077[5]
  return i5076
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i5078 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i5079 = data
  i5078.m_FaceIndex = i5079[0]
  i5078.m_FamilyName = i5079[1]
  i5078.m_StyleName = i5079[2]
  i5078.m_PointSize = i5079[3]
  i5078.m_Scale = i5079[4]
  i5078.m_UnitsPerEM = i5079[5]
  i5078.m_LineHeight = i5079[6]
  i5078.m_AscentLine = i5079[7]
  i5078.m_CapLine = i5079[8]
  i5078.m_MeanLine = i5079[9]
  i5078.m_Baseline = i5079[10]
  i5078.m_DescentLine = i5079[11]
  i5078.m_SuperscriptOffset = i5079[12]
  i5078.m_SuperscriptSize = i5079[13]
  i5078.m_SubscriptOffset = i5079[14]
  i5078.m_SubscriptSize = i5079[15]
  i5078.m_UnderlineOffset = i5079[16]
  i5078.m_UnderlineThickness = i5079[17]
  i5078.m_StrikethroughOffset = i5079[18]
  i5078.m_StrikethroughThickness = i5079[19]
  i5078.m_TabWidth = i5079[20]
  return i5078
}

Deserializers["FavoritePlayerCard"] = function (request, data, root) {
  var i5080 = root || request.c( 'FavoritePlayerCard' )
  var i5081 = data
  i5080.playerName = i5081[0]
  request.r(i5081[1], i5081[2], 0, i5080, 'halfBodySprite')
  request.r(i5081[3], i5081[4], 0, i5080, 'fullBodySprite')
  request.r(i5081[5], i5081[6], 0, i5080, 'nameAudio')
  return i5080
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i5082 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i5083 = data
  i5082.useSafeMode = !!i5083[0]
  i5082.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i5083[1], i5082.safeModeOptions)
  i5082.timeScale = i5083[2]
  i5082.unscaledTimeScale = i5083[3]
  i5082.useSmoothDeltaTime = !!i5083[4]
  i5082.maxSmoothUnscaledTime = i5083[5]
  i5082.rewindCallbackMode = i5083[6]
  i5082.showUnityEditorReport = !!i5083[7]
  i5082.logBehaviour = i5083[8]
  i5082.drawGizmos = !!i5083[9]
  i5082.defaultRecyclable = !!i5083[10]
  i5082.defaultAutoPlay = i5083[11]
  i5082.defaultUpdateType = i5083[12]
  i5082.defaultTimeScaleIndependent = !!i5083[13]
  i5082.defaultEaseType = i5083[14]
  i5082.defaultEaseOvershootOrAmplitude = i5083[15]
  i5082.defaultEasePeriod = i5083[16]
  i5082.defaultAutoKill = !!i5083[17]
  i5082.defaultLoopType = i5083[18]
  i5082.debugMode = !!i5083[19]
  i5082.debugStoreTargetId = !!i5083[20]
  i5082.showPreviewPanel = !!i5083[21]
  i5082.storeSettingsLocation = i5083[22]
  i5082.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i5083[23], i5082.modules)
  i5082.createASMDEF = !!i5083[24]
  i5082.showPlayingTweens = !!i5083[25]
  i5082.showPausedTweens = !!i5083[26]
  return i5082
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i5084 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i5085 = data
  i5084.logBehaviour = i5085[0]
  i5084.nestedTweenFailureBehaviour = i5085[1]
  return i5084
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i5086 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i5087 = data
  i5086.showPanel = !!i5087[0]
  i5086.audioEnabled = !!i5087[1]
  i5086.physicsEnabled = !!i5087[2]
  i5086.physics2DEnabled = !!i5087[3]
  i5086.spriteEnabled = !!i5087[4]
  i5086.uiEnabled = !!i5087[5]
  i5086.uiToolkitEnabled = !!i5087[6]
  i5086.textMeshProEnabled = !!i5087[7]
  i5086.tk2DEnabled = !!i5087[8]
  i5086.deAudioEnabled = !!i5087[9]
  i5086.deUnityExtendedEnabled = !!i5087[10]
  i5086.epoOutlineEnabled = !!i5087[11]
  return i5086
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i5088 = root || request.c( 'TMPro.TMP_Settings' )
  var i5089 = data
  i5088.assetVersion = i5089[0]
  i5088.m_TextWrappingMode = i5089[1]
  i5088.m_enableKerning = !!i5089[2]
  var i5091 = i5089[3]
  var i5090 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i5091.length; i += 1) {
    i5090.add(i5091[i + 0]);
  }
  i5088.m_ActiveFontFeatures = i5090
  i5088.m_enableExtraPadding = !!i5089[4]
  i5088.m_enableTintAllSprites = !!i5089[5]
  i5088.m_enableParseEscapeCharacters = !!i5089[6]
  i5088.m_EnableRaycastTarget = !!i5089[7]
  i5088.m_GetFontFeaturesAtRuntime = !!i5089[8]
  i5088.m_missingGlyphCharacter = i5089[9]
  i5088.m_ClearDynamicDataOnBuild = !!i5089[10]
  i5088.m_warningsDisabled = !!i5089[11]
  request.r(i5089[12], i5089[13], 0, i5088, 'm_defaultFontAsset')
  i5088.m_defaultFontAssetPath = i5089[14]
  i5088.m_defaultFontSize = i5089[15]
  i5088.m_defaultAutoSizeMinRatio = i5089[16]
  i5088.m_defaultAutoSizeMaxRatio = i5089[17]
  i5088.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i5089[18], i5089[19] )
  i5088.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i5089[20], i5089[21] )
  i5088.m_autoSizeTextContainer = !!i5089[22]
  i5088.m_IsTextObjectScaleStatic = !!i5089[23]
  var i5093 = i5089[24]
  var i5092 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i5093.length; i += 2) {
  request.r(i5093[i + 0], i5093[i + 1], 1, i5092, '')
  }
  i5088.m_fallbackFontAssets = i5092
  i5088.m_matchMaterialPreset = !!i5089[25]
  i5088.m_HideSubTextObjects = !!i5089[26]
  request.r(i5089[27], i5089[28], 0, i5088, 'm_defaultSpriteAsset')
  i5088.m_defaultSpriteAssetPath = i5089[29]
  i5088.m_enableEmojiSupport = !!i5089[30]
  i5088.m_MissingCharacterSpriteUnicode = i5089[31]
  var i5095 = i5089[32]
  var i5094 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i5095.length; i += 2) {
  request.r(i5095[i + 0], i5095[i + 1], 1, i5094, '')
  }
  i5088.m_EmojiFallbackTextAssets = i5094
  i5088.m_defaultColorGradientPresetsPath = i5089[33]
  request.r(i5089[34], i5089[35], 0, i5088, 'm_defaultStyleSheet')
  i5088.m_StyleSheetsResourcePath = i5089[36]
  request.r(i5089[37], i5089[38], 0, i5088, 'm_leadingCharacters')
  request.r(i5089[39], i5089[40], 0, i5088, 'm_followingCharacters')
  i5088.m_UseModernHangulLineBreakingRules = !!i5089[41]
  return i5088
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i5098 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i5099 = data
  request.r(i5099[0], i5099[1], 0, i5098, 'spriteSheet')
  var i5101 = i5099[2]
  var i5100 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i5101.length; i += 1) {
    i5100.add(request.d('TMPro.TMP_Sprite', i5101[i + 0]));
  }
  i5098.spriteInfoList = i5100
  var i5103 = i5099[3]
  var i5102 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i5103.length; i += 2) {
  request.r(i5103[i + 0], i5103[i + 1], 1, i5102, '')
  }
  i5098.fallbackSpriteAssets = i5102
  var i5105 = i5099[4]
  var i5104 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i5105.length; i += 1) {
    i5104.add(request.d('TMPro.TMP_SpriteCharacter', i5105[i + 0]));
  }
  i5098.m_SpriteCharacterTable = i5104
  var i5107 = i5099[5]
  var i5106 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i5107.length; i += 1) {
    i5106.add(request.d('TMPro.TMP_SpriteGlyph', i5107[i + 0]));
  }
  i5098.m_GlyphTable = i5106
  i5098.m_Version = i5099[6]
  i5098.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i5099[7], i5098.m_FaceInfo)
  request.r(i5099[8], i5099[9], 0, i5098, 'm_Material')
  return i5098
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i5110 = root || request.c( 'TMPro.TMP_Sprite' )
  var i5111 = data
  i5110.name = i5111[0]
  i5110.hashCode = i5111[1]
  i5110.unicode = i5111[2]
  i5110.pivot = new pc.Vec2( i5111[3], i5111[4] )
  request.r(i5111[5], i5111[6], 0, i5110, 'sprite')
  i5110.id = i5111[7]
  i5110.x = i5111[8]
  i5110.y = i5111[9]
  i5110.width = i5111[10]
  i5110.height = i5111[11]
  i5110.xOffset = i5111[12]
  i5110.yOffset = i5111[13]
  i5110.xAdvance = i5111[14]
  i5110.scale = i5111[15]
  return i5110
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i5116 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i5117 = data
  i5116.m_Name = i5117[0]
  i5116.m_ElementType = i5117[1]
  i5116.m_Unicode = i5117[2]
  i5116.m_GlyphIndex = i5117[3]
  i5116.m_Scale = i5117[4]
  return i5116
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i5120 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i5121 = data
  request.r(i5121[0], i5121[1], 0, i5120, 'sprite')
  i5120.m_Index = i5121[2]
  i5120.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i5121[3], i5120.m_Metrics)
  i5120.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i5121[4], i5120.m_GlyphRect)
  i5120.m_Scale = i5121[5]
  i5120.m_AtlasIndex = i5121[6]
  i5120.m_ClassDefinitionType = i5121[7]
  return i5120
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i5122 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i5123 = data
  var i5125 = i5123[0]
  var i5124 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i5125.length; i += 1) {
    i5124.add(request.d('TMPro.TMP_Style', i5125[i + 0]));
  }
  i5122.m_StyleList = i5124
  return i5122
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i5128 = root || request.c( 'TMPro.TMP_Style' )
  var i5129 = data
  i5128.m_Name = i5129[0]
  i5128.m_HashCode = i5129[1]
  i5128.m_OpeningDefinition = i5129[2]
  i5128.m_ClosingDefinition = i5129[3]
  i5128.m_OpeningTagArray = i5129[4]
  i5128.m_ClosingTagArray = i5129[5]
  return i5128
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i5130 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i5131 = data
  var i5133 = i5131[0]
  var i5132 = []
  for(var i = 0; i < i5133.length; i += 1) {
    i5132.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i5133[i + 0]) );
  }
  i5130.files = i5132
  i5130.componentToPrefabIds = i5131[1]
  return i5130
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i5136 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i5137 = data
  i5136.path = i5137[0]
  request.r(i5137[1], i5137[2], 0, i5136, 'unityObject')
  return i5136
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i5138 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i5139 = data
  var i5141 = i5139[0]
  var i5140 = []
  for(var i = 0; i < i5141.length; i += 1) {
    i5140.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i5141[i + 0]) );
  }
  i5138.scriptsExecutionOrder = i5140
  var i5143 = i5139[1]
  var i5142 = []
  for(var i = 0; i < i5143.length; i += 1) {
    i5142.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i5143[i + 0]) );
  }
  i5138.sortingLayers = i5142
  var i5145 = i5139[2]
  var i5144 = []
  for(var i = 0; i < i5145.length; i += 1) {
    i5144.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i5145[i + 0]) );
  }
  i5138.cullingLayers = i5144
  i5138.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i5139[3], i5138.timeSettings)
  i5138.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i5139[4], i5138.physicsSettings)
  i5138.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i5139[5], i5138.physics2DSettings)
  i5138.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i5139[6], i5138.qualitySettings)
  i5138.enableRealtimeShadows = !!i5139[7]
  i5138.enableAutoInstancing = !!i5139[8]
  i5138.enableStaticBatching = !!i5139[9]
  i5138.enableDynamicBatching = !!i5139[10]
  i5138.lightmapEncodingQuality = i5139[11]
  i5138.desiredColorSpace = i5139[12]
  var i5147 = i5139[13]
  var i5146 = []
  for(var i = 0; i < i5147.length; i += 1) {
    i5146.push( i5147[i + 0] );
  }
  i5138.allTags = i5146
  return i5138
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i5150 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i5151 = data
  i5150.name = i5151[0]
  i5150.value = i5151[1]
  return i5150
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i5154 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i5155 = data
  i5154.id = i5155[0]
  i5154.name = i5155[1]
  i5154.value = i5155[2]
  return i5154
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i5158 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i5159 = data
  i5158.id = i5159[0]
  i5158.name = i5159[1]
  return i5158
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i5160 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i5161 = data
  i5160.fixedDeltaTime = i5161[0]
  i5160.maximumDeltaTime = i5161[1]
  i5160.timeScale = i5161[2]
  i5160.maximumParticleTimestep = i5161[3]
  return i5160
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i5162 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i5163 = data
  i5162.gravity = new pc.Vec3( i5163[0], i5163[1], i5163[2] )
  i5162.defaultSolverIterations = i5163[3]
  i5162.bounceThreshold = i5163[4]
  i5162.autoSyncTransforms = !!i5163[5]
  i5162.autoSimulation = !!i5163[6]
  var i5165 = i5163[7]
  var i5164 = []
  for(var i = 0; i < i5165.length; i += 1) {
    i5164.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i5165[i + 0]) );
  }
  i5162.collisionMatrix = i5164
  return i5162
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i5168 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i5169 = data
  i5168.enabled = !!i5169[0]
  i5168.layerId = i5169[1]
  i5168.otherLayerId = i5169[2]
  return i5168
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i5170 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i5171 = data
  request.r(i5171[0], i5171[1], 0, i5170, 'material')
  i5170.gravity = new pc.Vec2( i5171[2], i5171[3] )
  i5170.positionIterations = i5171[4]
  i5170.velocityIterations = i5171[5]
  i5170.velocityThreshold = i5171[6]
  i5170.maxLinearCorrection = i5171[7]
  i5170.maxAngularCorrection = i5171[8]
  i5170.maxTranslationSpeed = i5171[9]
  i5170.maxRotationSpeed = i5171[10]
  i5170.baumgarteScale = i5171[11]
  i5170.baumgarteTOIScale = i5171[12]
  i5170.timeToSleep = i5171[13]
  i5170.linearSleepTolerance = i5171[14]
  i5170.angularSleepTolerance = i5171[15]
  i5170.defaultContactOffset = i5171[16]
  i5170.autoSimulation = !!i5171[17]
  i5170.queriesHitTriggers = !!i5171[18]
  i5170.queriesStartInColliders = !!i5171[19]
  i5170.callbacksOnDisable = !!i5171[20]
  i5170.reuseCollisionCallbacks = !!i5171[21]
  i5170.autoSyncTransforms = !!i5171[22]
  var i5173 = i5171[23]
  var i5172 = []
  for(var i = 0; i < i5173.length; i += 1) {
    i5172.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i5173[i + 0]) );
  }
  i5170.collisionMatrix = i5172
  return i5170
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i5176 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i5177 = data
  i5176.enabled = !!i5177[0]
  i5176.layerId = i5177[1]
  i5176.otherLayerId = i5177[2]
  return i5176
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i5178 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i5179 = data
  var i5181 = i5179[0]
  var i5180 = []
  for(var i = 0; i < i5181.length; i += 1) {
    i5180.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i5181[i + 0]) );
  }
  i5178.qualityLevels = i5180
  var i5183 = i5179[1]
  var i5182 = []
  for(var i = 0; i < i5183.length; i += 1) {
    i5182.push( i5183[i + 0] );
  }
  i5178.names = i5182
  i5178.shadows = i5179[2]
  i5178.anisotropicFiltering = i5179[3]
  i5178.antiAliasing = i5179[4]
  i5178.lodBias = i5179[5]
  i5178.shadowCascades = i5179[6]
  i5178.shadowDistance = i5179[7]
  i5178.shadowmaskMode = i5179[8]
  i5178.shadowProjection = i5179[9]
  i5178.shadowResolution = i5179[10]
  i5178.softParticles = !!i5179[11]
  i5178.softVegetation = !!i5179[12]
  i5178.activeColorSpace = i5179[13]
  i5178.desiredColorSpace = i5179[14]
  i5178.masterTextureLimit = i5179[15]
  i5178.maxQueuedFrames = i5179[16]
  i5178.particleRaycastBudget = i5179[17]
  i5178.pixelLightCount = i5179[18]
  i5178.realtimeReflectionProbes = !!i5179[19]
  i5178.shadowCascade2Split = i5179[20]
  i5178.shadowCascade4Split = new pc.Vec3( i5179[21], i5179[22], i5179[23] )
  i5178.streamingMipmapsActive = !!i5179[24]
  i5178.vSyncCount = i5179[25]
  i5178.asyncUploadBufferSize = i5179[26]
  i5178.asyncUploadTimeSlice = i5179[27]
  i5178.billboardsFaceCameraPosition = !!i5179[28]
  i5178.shadowNearPlaneOffset = i5179[29]
  i5178.streamingMipmapsMemoryBudget = i5179[30]
  i5178.maximumLODLevel = i5179[31]
  i5178.streamingMipmapsAddAllCameras = !!i5179[32]
  i5178.streamingMipmapsMaxLevelReduction = i5179[33]
  i5178.streamingMipmapsRenderersPerFrame = i5179[34]
  i5178.resolutionScalingFixedDPIFactor = i5179[35]
  i5178.streamingMipmapsMaxFileIORequests = i5179[36]
  i5178.currentQualityLevel = i5179[37]
  return i5178
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i5188 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i5189 = data
  i5188.weight = i5189[0]
  i5188.vertices = i5189[1]
  i5188.normals = i5189[2]
  i5188.tangents = i5189[3]
  return i5188
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i5192 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i5193 = data
  i5192.mode = i5193[0]
  i5192.parameter = i5193[1]
  i5192.threshold = i5193[2]
  return i5192
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i5194 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i5195 = data
  i5194.m_XCoordinate = i5195[0]
  i5194.m_YCoordinate = i5195[1]
  return i5194
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i5196 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i5197 = data
  i5196.m_XPositionAdjustment = i5197[0]
  i5196.m_YPositionAdjustment = i5197[1]
  return i5196
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i5198 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i5199 = data
  i5198.xPlacement = i5199[0]
  i5198.yPlacement = i5199[1]
  i5198.xAdvance = i5199[2]
  i5198.yAdvance = i5199[3]
  return i5198
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

Deserializers.buildID = "0d72135a-06c9-4d9b-8659-65f000442afe";

Deserializers.runtimeInitializeOnLoadInfos = [[["Unity","Services","Core","Internal","UnityServicesInitializer","EnableServicesInitializationAsync"],["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["DG","Tweening","DOTween","RuntimeOnLoad"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["Unity","Services","Core","Registration","CorePackageInitializer","InitializeOnLoad"],["Unity","Services","Core","Internal","TaskAsyncOperation","SetScheduler"],["Unity","Services","Core","Environments","Client","Scheduler","EngineStateHelper","Init"],["Unity","Services","Core","Environments","Client","Scheduler","ThreadHelper","Init"],["Ua2CoreInitializeCallback","Register"],["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["Unity","AI","Navigation","NavMeshLink","ClearTrackedList"],["Unity","AI","Navigation","NavMeshSurface","ClearNavMeshSurfaces"],["Unity","AI","Navigation","NavMeshModifierVolume","ClearNavMeshModifiers"],["Unity","AI","Navigation","NavMeshModifier","ClearNavMeshModifiers"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["Unity","Services","Core","Internal","UnityServicesInitializer","CreateStaticInstance"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[["Unity","Services","Core","Environments","Client","Http","JsonHelpers","RegisterTypesForAOT"]],[["Unity","Services","Core","UnityThreadUtils","CaptureUnityThreadInfo"],["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

