var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i552 = root || request.c( 'UnityEngine.JointSpring' )
  var i553 = data
  i552.spring = i553[0]
  i552.damper = i553[1]
  i552.targetPosition = i553[2]
  return i552
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i554 = root || request.c( 'UnityEngine.JointMotor' )
  var i555 = data
  i554.m_TargetVelocity = i555[0]
  i554.m_Force = i555[1]
  i554.m_FreeSpin = i555[2]
  return i554
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i556 = root || request.c( 'UnityEngine.JointLimits' )
  var i557 = data
  i556.m_Min = i557[0]
  i556.m_Max = i557[1]
  i556.m_Bounciness = i557[2]
  i556.m_BounceMinVelocity = i557[3]
  i556.m_ContactDistance = i557[4]
  i556.minBounce = i557[5]
  i556.maxBounce = i557[6]
  return i556
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i558 = root || request.c( 'UnityEngine.JointDrive' )
  var i559 = data
  i558.m_PositionSpring = i559[0]
  i558.m_PositionDamper = i559[1]
  i558.m_MaximumForce = i559[2]
  i558.m_UseAcceleration = i559[3]
  return i558
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i560 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i561 = data
  i560.m_Spring = i561[0]
  i560.m_Damper = i561[1]
  return i560
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i562 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i563 = data
  i562.m_Limit = i563[0]
  i562.m_Bounciness = i563[1]
  i562.m_ContactDistance = i563[2]
  return i562
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i564 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i565 = data
  i564.m_ExtremumSlip = i565[0]
  i564.m_ExtremumValue = i565[1]
  i564.m_AsymptoteSlip = i565[2]
  i564.m_AsymptoteValue = i565[3]
  i564.m_Stiffness = i565[4]
  return i564
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i566 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i567 = data
  i566.m_LowerAngle = i567[0]
  i566.m_UpperAngle = i567[1]
  return i566
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i568 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i569 = data
  i568.m_MotorSpeed = i569[0]
  i568.m_MaximumMotorTorque = i569[1]
  return i568
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i570 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i571 = data
  i570.m_DampingRatio = i571[0]
  i570.m_Frequency = i571[1]
  i570.m_Angle = i571[2]
  return i570
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i572 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i573 = data
  i572.m_LowerTranslation = i573[0]
  i572.m_UpperTranslation = i573[1]
  return i572
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i574 = root || new pc.UnityMaterial()
  var i575 = data
  i574.name = i575[0]
  request.r(i575[1], i575[2], 0, i574, 'shader')
  i574.renderQueue = i575[3]
  i574.enableInstancing = !!i575[4]
  var i577 = i575[5]
  var i576 = []
  for(var i = 0; i < i577.length; i += 1) {
    i576.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i577[i + 0]) );
  }
  i574.floatParameters = i576
  var i579 = i575[6]
  var i578 = []
  for(var i = 0; i < i579.length; i += 1) {
    i578.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i579[i + 0]) );
  }
  i574.colorParameters = i578
  var i581 = i575[7]
  var i580 = []
  for(var i = 0; i < i581.length; i += 1) {
    i580.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i581[i + 0]) );
  }
  i574.vectorParameters = i580
  var i583 = i575[8]
  var i582 = []
  for(var i = 0; i < i583.length; i += 1) {
    i582.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i583[i + 0]) );
  }
  i574.textureParameters = i582
  var i585 = i575[9]
  var i584 = []
  for(var i = 0; i < i585.length; i += 1) {
    i584.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i585[i + 0]) );
  }
  i574.materialFlags = i584
  return i574
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i588 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i589 = data
  i588.name = i589[0]
  i588.value = i589[1]
  return i588
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i592 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i593 = data
  i592.name = i593[0]
  i592.value = new pc.Color(i593[1], i593[2], i593[3], i593[4])
  return i592
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i596 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i597 = data
  i596.name = i597[0]
  i596.value = new pc.Vec4( i597[1], i597[2], i597[3], i597[4] )
  return i596
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i600 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i601 = data
  i600.name = i601[0]
  request.r(i601[1], i601[2], 0, i600, 'value')
  return i600
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i604 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i605 = data
  i604.name = i605[0]
  i604.enabled = !!i605[1]
  return i604
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i606 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i607 = data
  i606.name = i607[0]
  i606.width = i607[1]
  i606.height = i607[2]
  i606.mipmapCount = i607[3]
  i606.anisoLevel = i607[4]
  i606.filterMode = i607[5]
  i606.hdr = !!i607[6]
  i606.format = i607[7]
  i606.wrapMode = i607[8]
  i606.alphaIsTransparency = !!i607[9]
  i606.alphaSource = i607[10]
  i606.graphicsFormat = i607[11]
  i606.sRGBTexture = !!i607[12]
  i606.desiredColorSpace = i607[13]
  i606.wrapU = i607[14]
  i606.wrapV = i607[15]
  return i606
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i608 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i609 = data
  i608.name = i609[0]
  i608.halfPrecision = !!i609[1]
  i608.useSimplification = !!i609[2]
  i608.useUInt32IndexFormat = !!i609[3]
  i608.vertexCount = i609[4]
  i608.aabb = i609[5]
  var i611 = i609[6]
  var i610 = []
  for(var i = 0; i < i611.length; i += 1) {
    i610.push( !!i611[i + 0] );
  }
  i608.streams = i610
  i608.vertices = i609[7]
  var i613 = i609[8]
  var i612 = []
  for(var i = 0; i < i613.length; i += 1) {
    i612.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i613[i + 0]) );
  }
  i608.subMeshes = i612
  var i615 = i609[9]
  var i614 = []
  for(var i = 0; i < i615.length; i += 16) {
    i614.push( new pc.Mat4().setData(i615[i + 0], i615[i + 1], i615[i + 2], i615[i + 3],  i615[i + 4], i615[i + 5], i615[i + 6], i615[i + 7],  i615[i + 8], i615[i + 9], i615[i + 10], i615[i + 11],  i615[i + 12], i615[i + 13], i615[i + 14], i615[i + 15]) );
  }
  i608.bindposes = i614
  var i617 = i609[10]
  var i616 = []
  for(var i = 0; i < i617.length; i += 1) {
    i616.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i617[i + 0]) );
  }
  i608.blendShapes = i616
  return i608
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i622 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i623 = data
  i622.triangles = i623[0]
  return i622
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i628 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i629 = data
  i628.name = i629[0]
  var i631 = i629[1]
  var i630 = []
  for(var i = 0; i < i631.length; i += 1) {
    i630.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i631[i + 0]) );
  }
  i628.frames = i630
  return i628
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i632 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i633 = data
  i632.name = i633[0]
  i632.index = i633[1]
  i632.startup = !!i633[2]
  return i632
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i634 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i635 = data
  i634.aspect = i635[0]
  i634.orthographic = !!i635[1]
  i634.orthographicSize = i635[2]
  i634.backgroundColor = new pc.Color(i635[3], i635[4], i635[5], i635[6])
  i634.nearClipPlane = i635[7]
  i634.farClipPlane = i635[8]
  i634.fieldOfView = i635[9]
  i634.depth = i635[10]
  i634.clearFlags = i635[11]
  i634.cullingMask = i635[12]
  i634.rect = i635[13]
  request.r(i635[14], i635[15], 0, i634, 'targetTexture')
  i634.usePhysicalProperties = !!i635[16]
  i634.focalLength = i635[17]
  i634.sensorSize = new pc.Vec2( i635[18], i635[19] )
  i634.lensShift = new pc.Vec2( i635[20], i635[21] )
  i634.gateFit = i635[22]
  i634.commandBufferCount = i635[23]
  i634.cameraType = i635[24]
  i634.enabled = !!i635[25]
  return i634
}

Deserializers["CameraFollow2D"] = function (request, data, root) {
  var i636 = root || request.c( 'CameraFollow2D' )
  var i637 = data
  request.r(i637[0], i637[1], 0, i636, 'target')
  i636.smoothSpeed = i637[2]
  i636.offset = new pc.Vec3( i637[3], i637[4], i637[5] )
  i636.followY = !!i637[6]
  return i636
}

Deserializers["AutoCameraFit"] = function (request, data, root) {
  var i638 = root || request.c( 'AutoCameraFit' )
  var i639 = data
  request.r(i639[0], i639[1], 0, i638, 'tallScreenObject')
  i638.tallScreenRatioThreshold = i639[2]
  i638.tallScreenYOffset = i639[3]
  request.r(i639[4], i639[5], 0, i638, 'canvasBtn')
  request.r(i639[6], i639[7], 0, i638, 'targetArea')
  i638.paddingLandscape = i639[8]
  i638.paddingPortrait = i639[9]
  i638.extraPaddingSmallScreen = i639[10]
  i638.smallScreenThreshold = i639[11]
  i638.autoUpdateOnResize = !!i639[12]
  i638.adjustInEditMode = !!i639[13]
  return i638
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i640 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i641 = data
  i640.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i641[0], i640.main)
  i640.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i641[1], i640.colorBySpeed)
  i640.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i641[2], i640.colorOverLifetime)
  i640.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i641[3], i640.emission)
  i640.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i641[4], i640.rotationBySpeed)
  i640.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i641[5], i640.rotationOverLifetime)
  i640.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i641[6], i640.shape)
  i640.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i641[7], i640.sizeBySpeed)
  i640.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i641[8], i640.sizeOverLifetime)
  i640.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i641[9], i640.textureSheetAnimation)
  i640.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i641[10], i640.velocityOverLifetime)
  i640.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i641[11], i640.noise)
  i640.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i641[12], i640.inheritVelocity)
  i640.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i641[13], i640.forceOverLifetime)
  i640.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i641[14], i640.limitVelocityOverLifetime)
  i640.useAutoRandomSeed = !!i641[15]
  i640.randomSeed = i641[16]
  return i640
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i642 = root || new pc.ParticleSystemMain()
  var i643 = data
  i642.duration = i643[0]
  i642.loop = !!i643[1]
  i642.prewarm = !!i643[2]
  i642.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i643[3], i642.startDelay)
  i642.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i643[4], i642.startLifetime)
  i642.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i643[5], i642.startSpeed)
  i642.startSize3D = !!i643[6]
  i642.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i643[7], i642.startSizeX)
  i642.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i643[8], i642.startSizeY)
  i642.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i643[9], i642.startSizeZ)
  i642.startRotation3D = !!i643[10]
  i642.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i643[11], i642.startRotationX)
  i642.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i643[12], i642.startRotationY)
  i642.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i643[13], i642.startRotationZ)
  i642.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i643[14], i642.startColor)
  i642.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i643[15], i642.gravityModifier)
  i642.simulationSpace = i643[16]
  request.r(i643[17], i643[18], 0, i642, 'customSimulationSpace')
  i642.simulationSpeed = i643[19]
  i642.useUnscaledTime = !!i643[20]
  i642.scalingMode = i643[21]
  i642.playOnAwake = !!i643[22]
  i642.maxParticles = i643[23]
  i642.emitterVelocityMode = i643[24]
  i642.stopAction = i643[25]
  return i642
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i644 = root || new pc.MinMaxCurve()
  var i645 = data
  i644.mode = i645[0]
  i644.curveMin = new pc.AnimationCurve( { keys_flow: i645[1] } )
  i644.curveMax = new pc.AnimationCurve( { keys_flow: i645[2] } )
  i644.curveMultiplier = i645[3]
  i644.constantMin = i645[4]
  i644.constantMax = i645[5]
  return i644
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i646 = root || new pc.MinMaxGradient()
  var i647 = data
  i646.mode = i647[0]
  i646.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i647[1], i646.gradientMin)
  i646.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i647[2], i646.gradientMax)
  i646.colorMin = new pc.Color(i647[3], i647[4], i647[5], i647[6])
  i646.colorMax = new pc.Color(i647[7], i647[8], i647[9], i647[10])
  return i646
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i648 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i649 = data
  i648.mode = i649[0]
  var i651 = i649[1]
  var i650 = []
  for(var i = 0; i < i651.length; i += 1) {
    i650.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i651[i + 0]) );
  }
  i648.colorKeys = i650
  var i653 = i649[2]
  var i652 = []
  for(var i = 0; i < i653.length; i += 1) {
    i652.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i653[i + 0]) );
  }
  i648.alphaKeys = i652
  return i648
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i654 = root || new pc.ParticleSystemColorBySpeed()
  var i655 = data
  i654.enabled = !!i655[0]
  i654.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i655[1], i654.color)
  i654.range = new pc.Vec2( i655[2], i655[3] )
  return i654
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i658 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i659 = data
  i658.color = new pc.Color(i659[0], i659[1], i659[2], i659[3])
  i658.time = i659[4]
  return i658
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i662 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i663 = data
  i662.alpha = i663[0]
  i662.time = i663[1]
  return i662
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i664 = root || new pc.ParticleSystemColorOverLifetime()
  var i665 = data
  i664.enabled = !!i665[0]
  i664.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i665[1], i664.color)
  return i664
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i666 = root || new pc.ParticleSystemEmitter()
  var i667 = data
  i666.enabled = !!i667[0]
  i666.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i667[1], i666.rateOverTime)
  i666.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i667[2], i666.rateOverDistance)
  var i669 = i667[3]
  var i668 = []
  for(var i = 0; i < i669.length; i += 1) {
    i668.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i669[i + 0]) );
  }
  i666.bursts = i668
  return i666
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i672 = root || new pc.ParticleSystemBurst()
  var i673 = data
  i672.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i673[0], i672.count)
  i672.cycleCount = i673[1]
  i672.minCount = i673[2]
  i672.maxCount = i673[3]
  i672.repeatInterval = i673[4]
  i672.time = i673[5]
  return i672
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i674 = root || new pc.ParticleSystemRotationBySpeed()
  var i675 = data
  i674.enabled = !!i675[0]
  i674.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i675[1], i674.x)
  i674.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i675[2], i674.y)
  i674.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i675[3], i674.z)
  i674.separateAxes = !!i675[4]
  i674.range = new pc.Vec2( i675[5], i675[6] )
  return i674
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i676 = root || new pc.ParticleSystemRotationOverLifetime()
  var i677 = data
  i676.enabled = !!i677[0]
  i676.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i677[1], i676.x)
  i676.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i677[2], i676.y)
  i676.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i677[3], i676.z)
  i676.separateAxes = !!i677[4]
  return i676
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i678 = root || new pc.ParticleSystemShape()
  var i679 = data
  i678.enabled = !!i679[0]
  i678.shapeType = i679[1]
  i678.randomDirectionAmount = i679[2]
  i678.sphericalDirectionAmount = i679[3]
  i678.randomPositionAmount = i679[4]
  i678.alignToDirection = !!i679[5]
  i678.radius = i679[6]
  i678.radiusMode = i679[7]
  i678.radiusSpread = i679[8]
  i678.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i679[9], i678.radiusSpeed)
  i678.radiusThickness = i679[10]
  i678.angle = i679[11]
  i678.length = i679[12]
  i678.boxThickness = new pc.Vec3( i679[13], i679[14], i679[15] )
  i678.meshShapeType = i679[16]
  request.r(i679[17], i679[18], 0, i678, 'mesh')
  request.r(i679[19], i679[20], 0, i678, 'meshRenderer')
  request.r(i679[21], i679[22], 0, i678, 'skinnedMeshRenderer')
  i678.useMeshMaterialIndex = !!i679[23]
  i678.meshMaterialIndex = i679[24]
  i678.useMeshColors = !!i679[25]
  i678.normalOffset = i679[26]
  i678.arc = i679[27]
  i678.arcMode = i679[28]
  i678.arcSpread = i679[29]
  i678.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i679[30], i678.arcSpeed)
  i678.donutRadius = i679[31]
  i678.position = new pc.Vec3( i679[32], i679[33], i679[34] )
  i678.rotation = new pc.Vec3( i679[35], i679[36], i679[37] )
  i678.scale = new pc.Vec3( i679[38], i679[39], i679[40] )
  return i678
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i680 = root || new pc.ParticleSystemSizeBySpeed()
  var i681 = data
  i680.enabled = !!i681[0]
  i680.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i681[1], i680.x)
  i680.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i681[2], i680.y)
  i680.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i681[3], i680.z)
  i680.separateAxes = !!i681[4]
  i680.range = new pc.Vec2( i681[5], i681[6] )
  return i680
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i682 = root || new pc.ParticleSystemSizeOverLifetime()
  var i683 = data
  i682.enabled = !!i683[0]
  i682.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i683[1], i682.x)
  i682.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i683[2], i682.y)
  i682.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i683[3], i682.z)
  i682.separateAxes = !!i683[4]
  return i682
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i684 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i685 = data
  i684.enabled = !!i685[0]
  i684.mode = i685[1]
  i684.animation = i685[2]
  i684.numTilesX = i685[3]
  i684.numTilesY = i685[4]
  i684.useRandomRow = !!i685[5]
  i684.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i685[6], i684.frameOverTime)
  i684.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i685[7], i684.startFrame)
  i684.cycleCount = i685[8]
  i684.rowIndex = i685[9]
  i684.flipU = i685[10]
  i684.flipV = i685[11]
  i684.spriteCount = i685[12]
  var i687 = i685[13]
  var i686 = []
  for(var i = 0; i < i687.length; i += 2) {
  request.r(i687[i + 0], i687[i + 1], 2, i686, '')
  }
  i684.sprites = i686
  return i684
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i690 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i691 = data
  i690.enabled = !!i691[0]
  i690.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i691[1], i690.x)
  i690.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i691[2], i690.y)
  i690.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i691[3], i690.z)
  i690.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i691[4], i690.radial)
  i690.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i691[5], i690.speedModifier)
  i690.space = i691[6]
  i690.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i691[7], i690.orbitalX)
  i690.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i691[8], i690.orbitalY)
  i690.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i691[9], i690.orbitalZ)
  i690.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i691[10], i690.orbitalOffsetX)
  i690.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i691[11], i690.orbitalOffsetY)
  i690.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i691[12], i690.orbitalOffsetZ)
  return i690
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i692 = root || new pc.ParticleSystemNoise()
  var i693 = data
  i692.enabled = !!i693[0]
  i692.separateAxes = !!i693[1]
  i692.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i693[2], i692.strengthX)
  i692.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i693[3], i692.strengthY)
  i692.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i693[4], i692.strengthZ)
  i692.frequency = i693[5]
  i692.damping = !!i693[6]
  i692.octaveCount = i693[7]
  i692.octaveMultiplier = i693[8]
  i692.octaveScale = i693[9]
  i692.quality = i693[10]
  i692.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i693[11], i692.scrollSpeed)
  i692.scrollSpeedMultiplier = i693[12]
  i692.remapEnabled = !!i693[13]
  i692.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i693[14], i692.remapX)
  i692.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i693[15], i692.remapY)
  i692.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i693[16], i692.remapZ)
  i692.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i693[17], i692.positionAmount)
  i692.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i693[18], i692.rotationAmount)
  i692.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i693[19], i692.sizeAmount)
  return i692
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i694 = root || new pc.ParticleSystemInheritVelocity()
  var i695 = data
  i694.enabled = !!i695[0]
  i694.mode = i695[1]
  i694.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i695[2], i694.curve)
  return i694
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i696 = root || new pc.ParticleSystemForceOverLifetime()
  var i697 = data
  i696.enabled = !!i697[0]
  i696.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i697[1], i696.x)
  i696.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i697[2], i696.y)
  i696.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i697[3], i696.z)
  i696.space = i697[4]
  i696.randomized = !!i697[5]
  return i696
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i698 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i699 = data
  i698.enabled = !!i699[0]
  i698.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i699[1], i698.limit)
  i698.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i699[2], i698.limitX)
  i698.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i699[3], i698.limitY)
  i698.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i699[4], i698.limitZ)
  i698.dampen = i699[5]
  i698.separateAxes = !!i699[6]
  i698.space = i699[7]
  i698.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i699[8], i698.drag)
  i698.multiplyDragByParticleSize = !!i699[9]
  i698.multiplyDragByParticleVelocity = !!i699[10]
  return i698
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i700 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i701 = data
  request.r(i701[0], i701[1], 0, i700, 'mesh')
  i700.meshCount = i701[2]
  i700.activeVertexStreamsCount = i701[3]
  i700.alignment = i701[4]
  i700.renderMode = i701[5]
  i700.sortMode = i701[6]
  i700.lengthScale = i701[7]
  i700.velocityScale = i701[8]
  i700.cameraVelocityScale = i701[9]
  i700.normalDirection = i701[10]
  i700.sortingFudge = i701[11]
  i700.minParticleSize = i701[12]
  i700.maxParticleSize = i701[13]
  i700.pivot = new pc.Vec3( i701[14], i701[15], i701[16] )
  request.r(i701[17], i701[18], 0, i700, 'trailMaterial')
  i700.applyActiveColorSpace = !!i701[19]
  i700.enabled = !!i701[20]
  request.r(i701[21], i701[22], 0, i700, 'sharedMaterial')
  var i703 = i701[23]
  var i702 = []
  for(var i = 0; i < i703.length; i += 2) {
  request.r(i703[i + 0], i703[i + 1], 2, i702, '')
  }
  i700.sharedMaterials = i702
  i700.receiveShadows = !!i701[24]
  i700.shadowCastingMode = i701[25]
  i700.sortingLayerID = i701[26]
  i700.sortingOrder = i701[27]
  i700.lightmapIndex = i701[28]
  i700.lightmapSceneIndex = i701[29]
  i700.lightmapScaleOffset = new pc.Vec4( i701[30], i701[31], i701[32], i701[33] )
  i700.lightProbeUsage = i701[34]
  i700.reflectionProbeUsage = i701[35]
  return i700
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i706 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i707 = data
  i706.name = i707[0]
  i706.tagId = i707[1]
  i706.enabled = !!i707[2]
  i706.isStatic = !!i707[3]
  i706.layer = i707[4]
  return i706
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i708 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i709 = data
  i708.color = new pc.Color(i709[0], i709[1], i709[2], i709[3])
  request.r(i709[4], i709[5], 0, i708, 'sprite')
  i708.flipX = !!i709[6]
  i708.flipY = !!i709[7]
  i708.drawMode = i709[8]
  i708.size = new pc.Vec2( i709[9], i709[10] )
  i708.tileMode = i709[11]
  i708.adaptiveModeThreshold = i709[12]
  i708.maskInteraction = i709[13]
  i708.spriteSortPoint = i709[14]
  i708.enabled = !!i709[15]
  request.r(i709[16], i709[17], 0, i708, 'sharedMaterial')
  var i711 = i709[18]
  var i710 = []
  for(var i = 0; i < i711.length; i += 2) {
  request.r(i711[i + 0], i711[i + 1], 2, i710, '')
  }
  i708.sharedMaterials = i710
  i708.receiveShadows = !!i709[19]
  i708.shadowCastingMode = i709[20]
  i708.sortingLayerID = i709[21]
  i708.sortingOrder = i709[22]
  i708.lightmapIndex = i709[23]
  i708.lightmapSceneIndex = i709[24]
  i708.lightmapScaleOffset = new pc.Vec4( i709[25], i709[26], i709[27], i709[28] )
  i708.lightProbeUsage = i709[29]
  i708.reflectionProbeUsage = i709[30]
  return i708
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i712 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i713 = data
  request.r(i713[0], i713[1], 0, i712, 'animatorController')
  request.r(i713[2], i713[3], 0, i712, 'avatar')
  i712.updateMode = i713[4]
  i712.hasTransformHierarchy = !!i713[5]
  i712.applyRootMotion = !!i713[6]
  var i715 = i713[7]
  var i714 = []
  for(var i = 0; i < i715.length; i += 2) {
  request.r(i715[i + 0], i715[i + 1], 2, i714, '')
  }
  i712.humanBones = i714
  i712.enabled = !!i713[8]
  return i712
}

Deserializers["MoveBetweenPoints"] = function (request, data, root) {
  var i718 = root || request.c( 'MoveBetweenPoints' )
  var i719 = data
  request.r(i719[0], i719[1], 0, i718, 'pointA')
  request.r(i719[2], i719[3], 0, i718, 'pointB')
  i718.duration = i719[4]
  return i718
}

Deserializers["PlayerCardUIManager"] = function (request, data, root) {
  var i720 = root || request.c( 'PlayerCardUIManager' )
  var i721 = data
  request.r(i721[0], i721[1], 0, i720, 'cardPanel')
  var i723 = i721[2]
  var i722 = []
  for(var i = 0; i < i723.length; i += 2) {
  request.r(i723[i + 0], i723[i + 1], 2, i722, '')
  }
  i720.extraObjectsToActivate = i722
  i720.waitTime = i721[3]
  var i725 = i721[4]
  var i724 = []
  for(var i = 0; i < i725.length; i += 2) {
  request.r(i725[i + 0], i725[i + 1], 2, i724, '')
  }
  i720.objectsToTurnOnAfterWait = i724
  var i727 = i721[5]
  var i726 = []
  for(var i = 0; i < i727.length; i += 2) {
  request.r(i727[i + 0], i727[i + 1], 2, i726, '')
  }
  i720.objectsToTurnOffAfterWait = i726
  request.r(i721[6], i721[7], 0, i720, 'playerNameText')
  request.r(i721[8], i721[9], 0, i720, 'playerImage')
  return i720
}

Deserializers["Ply_SoundManager"] = function (request, data, root) {
  var i730 = root || request.c( 'Ply_SoundManager' )
  var i731 = data
  i730.fxAudio = request.d('FxAudio', i731[0], i730.fxAudio)
  request.r(i731[1], i731[2], 0, i730, 'bgm1')
  return i730
}

Deserializers["FxAudio"] = function (request, data, root) {
  var i732 = root || request.c( 'FxAudio' )
  var i733 = data
  i732.ClickBox = request.d('SoundData', i733[0], i732.ClickBox)
  i732.Happy = request.d('SoundData', i733[1], i732.Happy)
  i732.Wrong = request.d('SoundData', i733[2], i732.Wrong)
  i732.Spray = request.d('SoundData', i733[3], i732.Spray)
  i732.Brush = request.d('SoundData', i733[4], i732.Brush)
  i732.Keo = request.d('SoundData', i733[5], i732.Keo)
  i732.Confetti = request.d('SoundData', i733[6], i732.Confetti)
  i732.Lose2 = request.d('SoundData', i733[7], i732.Lose2)
  return i732
}

Deserializers["SoundData"] = function (request, data, root) {
  var i734 = root || request.c( 'SoundData' )
  var i735 = data
  request.r(i735[0], i735[1], 0, i734, 'clip')
  i734.repeatCount = i735[2]
  return i734
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i736 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i737 = data
  request.r(i737[0], i737[1], 0, i736, 'clip')
  request.r(i737[2], i737[3], 0, i736, 'outputAudioMixerGroup')
  i736.playOnAwake = !!i737[4]
  i736.loop = !!i737[5]
  i736.time = i737[6]
  i736.volume = i737[7]
  i736.pitch = i737[8]
  i736.enabled = !!i737[9]
  return i736
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i738 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i739 = data
  i738.pivot = new pc.Vec2( i739[0], i739[1] )
  i738.anchorMin = new pc.Vec2( i739[2], i739[3] )
  i738.anchorMax = new pc.Vec2( i739[4], i739[5] )
  i738.sizeDelta = new pc.Vec2( i739[6], i739[7] )
  i738.anchoredPosition3D = new pc.Vec3( i739[8], i739[9], i739[10] )
  i738.rotation = new pc.Quat(i739[11], i739[12], i739[13], i739[14])
  i738.scale = new pc.Vec3( i739[15], i739[16], i739[17] )
  return i738
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i740 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i741 = data
  i740.planeDistance = i741[0]
  i740.referencePixelsPerUnit = i741[1]
  i740.isFallbackOverlay = !!i741[2]
  i740.renderMode = i741[3]
  i740.renderOrder = i741[4]
  i740.sortingLayerName = i741[5]
  i740.sortingOrder = i741[6]
  i740.scaleFactor = i741[7]
  request.r(i741[8], i741[9], 0, i740, 'worldCamera')
  i740.overrideSorting = !!i741[10]
  i740.pixelPerfect = !!i741[11]
  i740.targetDisplay = i741[12]
  i740.overridePixelPerfect = !!i741[13]
  i740.enabled = !!i741[14]
  return i740
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i742 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i743 = data
  i742.m_UiScaleMode = i743[0]
  i742.m_ReferencePixelsPerUnit = i743[1]
  i742.m_ScaleFactor = i743[2]
  i742.m_ReferenceResolution = new pc.Vec2( i743[3], i743[4] )
  i742.m_ScreenMatchMode = i743[5]
  i742.m_MatchWidthOrHeight = i743[6]
  i742.m_PhysicalUnit = i743[7]
  i742.m_FallbackScreenDPI = i743[8]
  i742.m_DefaultSpriteDPI = i743[9]
  i742.m_DynamicPixelsPerUnit = i743[10]
  i742.m_PresetInfoIsWorld = !!i743[11]
  return i742
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i744 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i745 = data
  i744.m_IgnoreReversedGraphics = !!i745[0]
  i744.m_BlockingObjects = i745[1]
  i744.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i745[2] )
  return i744
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i746 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i747 = data
  i746.cullTransparentMesh = !!i747[0]
  return i746
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i748 = root || request.c( 'UnityEngine.UI.Image' )
  var i749 = data
  request.r(i749[0], i749[1], 0, i748, 'm_Sprite')
  i748.m_Type = i749[2]
  i748.m_PreserveAspect = !!i749[3]
  i748.m_FillCenter = !!i749[4]
  i748.m_FillMethod = i749[5]
  i748.m_FillAmount = i749[6]
  i748.m_FillClockwise = !!i749[7]
  i748.m_FillOrigin = i749[8]
  i748.m_UseSpriteMesh = !!i749[9]
  i748.m_PixelsPerUnitMultiplier = i749[10]
  request.r(i749[11], i749[12], 0, i748, 'm_Material')
  i748.m_Maskable = !!i749[13]
  i748.m_Color = new pc.Color(i749[14], i749[15], i749[16], i749[17])
  i748.m_RaycastTarget = !!i749[18]
  i748.m_RaycastPadding = new pc.Vec4( i749[19], i749[20], i749[21], i749[22] )
  return i748
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i750 = root || request.c( 'UnityEngine.UI.Button' )
  var i751 = data
  i750.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i751[0], i750.m_OnClick)
  i750.m_Navigation = request.d('UnityEngine.UI.Navigation', i751[1], i750.m_Navigation)
  i750.m_Transition = i751[2]
  i750.m_Colors = request.d('UnityEngine.UI.ColorBlock', i751[3], i750.m_Colors)
  i750.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i751[4], i750.m_SpriteState)
  i750.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i751[5], i750.m_AnimationTriggers)
  i750.m_Interactable = !!i751[6]
  request.r(i751[7], i751[8], 0, i750, 'm_TargetGraphic')
  return i750
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i752 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i753 = data
  i752.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i753[0], i752.m_PersistentCalls)
  return i752
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i754 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i755 = data
  var i757 = i755[0]
  var i756 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i757.length; i += 1) {
    i756.add(request.d('UnityEngine.Events.PersistentCall', i757[i + 0]));
  }
  i754.m_Calls = i756
  return i754
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i760 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i761 = data
  request.r(i761[0], i761[1], 0, i760, 'm_Target')
  i760.m_TargetAssemblyTypeName = i761[2]
  i760.m_MethodName = i761[3]
  i760.m_Mode = i761[4]
  i760.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i761[5], i760.m_Arguments)
  i760.m_CallState = i761[6]
  return i760
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i762 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i763 = data
  request.r(i763[0], i763[1], 0, i762, 'm_ObjectArgument')
  i762.m_ObjectArgumentAssemblyTypeName = i763[2]
  i762.m_IntArgument = i763[3]
  i762.m_FloatArgument = i763[4]
  i762.m_StringArgument = i763[5]
  i762.m_BoolArgument = !!i763[6]
  return i762
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i764 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i765 = data
  i764.m_Mode = i765[0]
  i764.m_WrapAround = !!i765[1]
  request.r(i765[2], i765[3], 0, i764, 'm_SelectOnUp')
  request.r(i765[4], i765[5], 0, i764, 'm_SelectOnDown')
  request.r(i765[6], i765[7], 0, i764, 'm_SelectOnLeft')
  request.r(i765[8], i765[9], 0, i764, 'm_SelectOnRight')
  return i764
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i766 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i767 = data
  i766.m_NormalColor = new pc.Color(i767[0], i767[1], i767[2], i767[3])
  i766.m_HighlightedColor = new pc.Color(i767[4], i767[5], i767[6], i767[7])
  i766.m_PressedColor = new pc.Color(i767[8], i767[9], i767[10], i767[11])
  i766.m_SelectedColor = new pc.Color(i767[12], i767[13], i767[14], i767[15])
  i766.m_DisabledColor = new pc.Color(i767[16], i767[17], i767[18], i767[19])
  i766.m_ColorMultiplier = i767[20]
  i766.m_FadeDuration = i767[21]
  return i766
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i768 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i769 = data
  request.r(i769[0], i769[1], 0, i768, 'm_HighlightedSprite')
  request.r(i769[2], i769[3], 0, i768, 'm_PressedSprite')
  request.r(i769[4], i769[5], 0, i768, 'm_SelectedSprite')
  request.r(i769[6], i769[7], 0, i768, 'm_DisabledSprite')
  return i768
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i770 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i771 = data
  i770.m_NormalTrigger = i771[0]
  i770.m_HighlightedTrigger = i771[1]
  i770.m_PressedTrigger = i771[2]
  i770.m_SelectedTrigger = i771[3]
  i770.m_DisabledTrigger = i771[4]
  return i770
}

Deserializers["HairCutController"] = function (request, data, root) {
  var i772 = root || request.c( 'HairCutController' )
  var i773 = data
  request.r(i773[0], i773[1], 0, i772, 'scissors')
  request.r(i773[2], i773[3], 0, i772, 'scissorsAnimator')
  request.r(i773[4], i773[5], 0, i772, 'targetAnimatorToDisable')
  request.r(i773[6], i773[7], 0, i772, 'linePointA')
  request.r(i773[8], i773[9], 0, i772, 'linePointB')
  i772.scissorMoveDuration = i773[10]
  var i775 = i773[11]
  var i774 = []
  for(var i = 0; i < i775.length; i += 2) {
  request.r(i775[i + 0], i775[i + 1], 2, i774, '')
  }
  i772.allMasks = i774
  request.r(i773[12], i773[13], 0, i772, 'fallingHairParent')
  var i777 = i773[14]
  var i776 = []
  for(var i = 0; i < i777.length; i += 2) {
  request.r(i777[i + 0], i777[i + 1], 2, i776, '')
  }
  i772.fallingHairRenderers = i776
  request.r(i773[15], i773[16], 0, i772, 'scissorsCollider')
  var i779 = i773[17]
  var i778 = []
  for(var i = 0; i < i779.length; i += 1) {
    i778.push( request.d('TargetColliderData', i779[i + 0]) );
  }
  i772.targetColliders = i778
  request.r(i773[18], i773[19], 0, i772, 'targetCollider')
  request.r(i773[20], i773[21], 0, i772, 'winObjectToEnable')
  var i781 = i773[22]
  var i780 = []
  for(var i = 0; i < i781.length; i += 2) {
  request.r(i781[i + 0], i781[i + 1], 2, i780, '')
  }
  i772.winObjectsToEnable = i780
  request.r(i773[23], i773[24], 0, i772, 'winObjectToDisable')
  var i783 = i773[25]
  var i782 = []
  for(var i = 0; i < i783.length; i += 2) {
  request.r(i783[i + 0], i783[i + 1], 2, i782, '')
  }
  i772.winObjectsToDisable = i782
  request.r(i773[26], i773[27], 0, i772, 'lossSpriteRenderer')
  request.r(i773[28], i773[29], 0, i772, 'lossObjectToEnable')
  var i785 = i773[30]
  var i784 = []
  for(var i = 0; i < i785.length; i += 2) {
  request.r(i785[i + 0], i785[i + 1], 2, i784, '')
  }
  i772.lossObjectsToEnable = i784
  request.r(i773[31], i773[32], 0, i772, 'lossObjectToDisable')
  var i787 = i773[33]
  var i786 = []
  for(var i = 0; i < i787.length; i += 2) {
  request.r(i787[i + 0], i787[i + 1], 2, i786, '')
  }
  i772.lossObjectsToDisable = i786
  i772.endDelay = i773[34]
  var i789 = i773[35]
  var i788 = []
  for(var i = 0; i < i789.length; i += 2) {
  request.r(i789[i + 0], i789[i + 1], 2, i788, '')
  }
  i772.afterEndDisableObjects = i788
  var i791 = i773[36]
  var i790 = []
  for(var i = 0; i < i791.length; i += 2) {
  request.r(i791[i + 0], i791[i + 1], 2, i790, '')
  }
  i772.afterEndEnableObjects = i790
  request.r(i773[37], i773[38], 0, i772, 'tutObject')
  request.r(i773[39], i773[40], 0, i772, 'animatorToEnableOnFirstTap')
  i772.firstTapTriggerName = i773[41]
  i772.onFirstTap = request.d('UnityEngine.Events.UnityEvent', i773[42], i772.onFirstTap)
  i772.onSecondTap = request.d('UnityEngine.Events.UnityEvent', i773[43], i772.onSecondTap)
  i772.onWin = request.d('UnityEngine.Events.UnityEvent', i773[44], i772.onWin)
  i772.onLoss = request.d('UnityEngine.Events.UnityEvent', i773[45], i772.onLoss)
  i772.onStoreRedirectActive = request.d('UnityEngine.Events.UnityEvent', i773[46], i772.onStoreRedirectActive)
  request.r(i773[47], i773[48], 0, i772, 'objectToDisableOnComplete')
  var i793 = i773[49]
  var i792 = []
  for(var i = 0; i < i793.length; i += 2) {
  request.r(i793[i + 0], i793[i + 1], 2, i792, '')
  }
  i772.objectsToDisableOnComplete = i792
  i772.fallDistance = i773[50]
  i772.fallDuration = i773[51]
  i772.fadeDuration = i773[52]
  return i772
}

Deserializers["TargetColliderData"] = function (request, data, root) {
  var i800 = root || request.c( 'TargetColliderData' )
  var i801 = data
  request.r(i801[0], i801[1], 0, i800, 'collider')
  request.r(i801[2], i801[3], 0, i800, 'resultSprite')
  i800.isWin = !!i801[4]
  return i800
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i802 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i803 = data
  i802.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i803[0], i802.m_PersistentCalls)
  return i802
}

Deserializers["HideOnFirstClick"] = function (request, data, root) {
  var i804 = root || request.c( 'HideOnFirstClick' )
  var i805 = data
  request.r(i805[0], i805[1], 0, i804, 'objectToHide')
  return i804
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i806 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i807 = data
  i806.usedByComposite = !!i807[0]
  i806.autoTiling = !!i807[1]
  i806.size = new pc.Vec2( i807[2], i807[3] )
  i806.edgeRadius = i807[4]
  i806.enabled = !!i807[5]
  i806.isTrigger = !!i807[6]
  i806.usedByEffector = !!i807[7]
  i806.density = i807[8]
  i806.offset = new pc.Vec2( i807[9], i807[10] )
  request.r(i807[11], i807[12], 0, i806, 'material')
  return i806
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteMask"] = function (request, data, root) {
  var i808 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteMask' )
  var i809 = data
  i808.frontSortingLayerID = i809[0]
  i808.frontSortingOrder = i809[1]
  i808.backSortingLayerID = i809[2]
  i808.backSortingOrder = i809[3]
  i808.alphaCutoff = i809[4]
  request.r(i809[5], i809[6], 0, i808, 'sprite')
  i808.tileMode = i809[7]
  i808.isCustomRangeActive = !!i809[8]
  i808.spriteSortPoint = i809[9]
  i808.enabled = !!i809[10]
  request.r(i809[11], i809[12], 0, i808, 'sharedMaterial')
  var i811 = i809[13]
  var i810 = []
  for(var i = 0; i < i811.length; i += 2) {
  request.r(i811[i + 0], i811[i + 1], 2, i810, '')
  }
  i808.sharedMaterials = i810
  i808.receiveShadows = !!i809[14]
  i808.shadowCastingMode = i809[15]
  i808.sortingLayerID = i809[16]
  i808.sortingOrder = i809[17]
  i808.lightmapIndex = i809[18]
  i808.lightmapSceneIndex = i809[19]
  i808.lightmapScaleOffset = new pc.Vec4( i809[20], i809[21], i809[22], i809[23] )
  i808.lightProbeUsage = i809[24]
  i808.reflectionProbeUsage = i809[25]
  return i808
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i812 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i813 = data
  request.r(i813[0], i813[1], 0, i812, 'm_FirstSelected')
  i812.m_sendNavigationEvents = !!i813[2]
  i812.m_DragThreshold = i813[3]
  return i812
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i814 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i815 = data
  i814.m_HorizontalAxis = i815[0]
  i814.m_VerticalAxis = i815[1]
  i814.m_SubmitButton = i815[2]
  i814.m_CancelButton = i815[3]
  i814.m_InputActionsPerSecond = i815[4]
  i814.m_RepeatDelay = i815[5]
  i814.m_ForceModuleActive = !!i815[6]
  i814.m_SendPointerHoverToParent = !!i815[7]
  return i814
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i816 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i817 = data
  i816.ambientIntensity = i817[0]
  i816.reflectionIntensity = i817[1]
  i816.ambientMode = i817[2]
  i816.ambientLight = new pc.Color(i817[3], i817[4], i817[5], i817[6])
  i816.ambientSkyColor = new pc.Color(i817[7], i817[8], i817[9], i817[10])
  i816.ambientGroundColor = new pc.Color(i817[11], i817[12], i817[13], i817[14])
  i816.ambientEquatorColor = new pc.Color(i817[15], i817[16], i817[17], i817[18])
  i816.fogColor = new pc.Color(i817[19], i817[20], i817[21], i817[22])
  i816.fogEndDistance = i817[23]
  i816.fogStartDistance = i817[24]
  i816.fogDensity = i817[25]
  i816.fog = !!i817[26]
  request.r(i817[27], i817[28], 0, i816, 'skybox')
  i816.fogMode = i817[29]
  var i819 = i817[30]
  var i818 = []
  for(var i = 0; i < i819.length; i += 1) {
    i818.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i819[i + 0]) );
  }
  i816.lightmaps = i818
  i816.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i817[31], i816.lightProbes)
  i816.lightmapsMode = i817[32]
  i816.mixedBakeMode = i817[33]
  i816.environmentLightingMode = i817[34]
  i816.ambientProbe = new pc.SphericalHarmonicsL2(i817[35])
  i816.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i817[36])
  i816.useReferenceAmbientProbe = !!i817[37]
  request.r(i817[38], i817[39], 0, i816, 'customReflection')
  request.r(i817[40], i817[41], 0, i816, 'defaultReflection')
  i816.defaultReflectionMode = i817[42]
  i816.defaultReflectionResolution = i817[43]
  i816.sunLightObjectId = i817[44]
  i816.pixelLightCount = i817[45]
  i816.defaultReflectionHDR = !!i817[46]
  i816.hasLightDataAsset = !!i817[47]
  i816.hasManualGenerate = !!i817[48]
  return i816
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i822 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i823 = data
  request.r(i823[0], i823[1], 0, i822, 'lightmapColor')
  request.r(i823[2], i823[3], 0, i822, 'lightmapDirection')
  request.r(i823[4], i823[5], 0, i822, 'shadowMask')
  return i822
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i824 = root || new UnityEngine.LightProbes()
  var i825 = data
  return i824
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i832 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i833 = data
  var i835 = i833[0]
  var i834 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i835.length; i += 1) {
    i834.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i835[i + 0]));
  }
  i832.ShaderCompilationErrors = i834
  i832.name = i833[1]
  i832.guid = i833[2]
  var i837 = i833[3]
  var i836 = []
  for(var i = 0; i < i837.length; i += 1) {
    i836.push( i837[i + 0] );
  }
  i832.shaderDefinedKeywords = i836
  var i839 = i833[4]
  var i838 = []
  for(var i = 0; i < i839.length; i += 1) {
    i838.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i839[i + 0]) );
  }
  i832.passes = i838
  var i841 = i833[5]
  var i840 = []
  for(var i = 0; i < i841.length; i += 1) {
    i840.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i841[i + 0]) );
  }
  i832.usePasses = i840
  var i843 = i833[6]
  var i842 = []
  for(var i = 0; i < i843.length; i += 1) {
    i842.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i843[i + 0]) );
  }
  i832.defaultParameterValues = i842
  request.r(i833[7], i833[8], 0, i832, 'unityFallbackShader')
  i832.readDepth = !!i833[9]
  i832.hasDepthOnlyPass = !!i833[10]
  i832.isCreatedByShaderGraph = !!i833[11]
  i832.disableBatching = !!i833[12]
  i832.compiled = !!i833[13]
  return i832
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i846 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i847 = data
  i846.shaderName = i847[0]
  i846.errorMessage = i847[1]
  return i846
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i852 = root || new pc.UnityShaderPass()
  var i853 = data
  i852.id = i853[0]
  i852.subShaderIndex = i853[1]
  i852.name = i853[2]
  i852.passType = i853[3]
  i852.grabPassTextureName = i853[4]
  i852.usePass = !!i853[5]
  i852.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i853[6], i852.zTest)
  i852.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i853[7], i852.zWrite)
  i852.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i853[8], i852.culling)
  i852.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i853[9], i852.blending)
  i852.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i853[10], i852.alphaBlending)
  i852.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i853[11], i852.colorWriteMask)
  i852.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i853[12], i852.offsetUnits)
  i852.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i853[13], i852.offsetFactor)
  i852.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i853[14], i852.stencilRef)
  i852.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i853[15], i852.stencilReadMask)
  i852.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i853[16], i852.stencilWriteMask)
  i852.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i853[17], i852.stencilOp)
  i852.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i853[18], i852.stencilOpFront)
  i852.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i853[19], i852.stencilOpBack)
  var i855 = i853[20]
  var i854 = []
  for(var i = 0; i < i855.length; i += 1) {
    i854.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i855[i + 0]) );
  }
  i852.tags = i854
  var i857 = i853[21]
  var i856 = []
  for(var i = 0; i < i857.length; i += 1) {
    i856.push( i857[i + 0] );
  }
  i852.passDefinedKeywords = i856
  var i859 = i853[22]
  var i858 = []
  for(var i = 0; i < i859.length; i += 1) {
    i858.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i859[i + 0]) );
  }
  i852.passDefinedKeywordGroups = i858
  var i861 = i853[23]
  var i860 = []
  for(var i = 0; i < i861.length; i += 1) {
    i860.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i861[i + 0]) );
  }
  i852.variants = i860
  var i863 = i853[24]
  var i862 = []
  for(var i = 0; i < i863.length; i += 1) {
    i862.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i863[i + 0]) );
  }
  i852.excludedVariants = i862
  i852.hasDepthReader = !!i853[25]
  return i852
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i864 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i865 = data
  i864.val = i865[0]
  i864.name = i865[1]
  return i864
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i866 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i867 = data
  i866.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i867[0], i866.src)
  i866.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i867[1], i866.dst)
  i866.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i867[2], i866.op)
  return i866
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i868 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i869 = data
  i868.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i869[0], i868.pass)
  i868.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i869[1], i868.fail)
  i868.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i869[2], i868.zFail)
  i868.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i869[3], i868.comp)
  return i868
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i872 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i873 = data
  i872.name = i873[0]
  i872.value = i873[1]
  return i872
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i876 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i877 = data
  var i879 = i877[0]
  var i878 = []
  for(var i = 0; i < i879.length; i += 1) {
    i878.push( i879[i + 0] );
  }
  i876.keywords = i878
  i876.hasDiscard = !!i877[1]
  return i876
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i882 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i883 = data
  i882.passId = i883[0]
  i882.subShaderIndex = i883[1]
  var i885 = i883[2]
  var i884 = []
  for(var i = 0; i < i885.length; i += 1) {
    i884.push( i885[i + 0] );
  }
  i882.keywords = i884
  i882.vertexProgram = i883[3]
  i882.fragmentProgram = i883[4]
  i882.exportedForWebGl2 = !!i883[5]
  i882.readDepth = !!i883[6]
  return i882
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i888 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i889 = data
  request.r(i889[0], i889[1], 0, i888, 'shader')
  i888.pass = i889[2]
  return i888
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i892 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i893 = data
  i892.name = i893[0]
  i892.type = i893[1]
  i892.value = new pc.Vec4( i893[2], i893[3], i893[4], i893[5] )
  i892.textureValue = i893[6]
  i892.shaderPropertyFlag = i893[7]
  return i892
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i894 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i895 = data
  i894.name = i895[0]
  request.r(i895[1], i895[2], 0, i894, 'texture')
  i894.aabb = i895[3]
  i894.vertices = i895[4]
  i894.triangles = i895[5]
  i894.textureRect = UnityEngine.Rect.MinMaxRect(i895[6], i895[7], i895[8], i895[9])
  i894.packedRect = UnityEngine.Rect.MinMaxRect(i895[10], i895[11], i895[12], i895[13])
  i894.border = new pc.Vec4( i895[14], i895[15], i895[16], i895[17] )
  i894.transparency = i895[18]
  i894.bounds = i895[19]
  i894.pixelsPerUnit = i895[20]
  i894.textureWidth = i895[21]
  i894.textureHeight = i895[22]
  i894.nativeSize = new pc.Vec2( i895[23], i895[24] )
  i894.pivot = new pc.Vec2( i895[25], i895[26] )
  i894.textureRectOffset = new pc.Vec2( i895[27], i895[28] )
  return i894
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i896 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i897 = data
  i896.name = i897[0]
  return i896
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i898 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i899 = data
  i898.name = i899[0]
  i898.wrapMode = i899[1]
  i898.isLooping = !!i899[2]
  i898.length = i899[3]
  var i901 = i899[4]
  var i900 = []
  for(var i = 0; i < i901.length; i += 1) {
    i900.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i901[i + 0]) );
  }
  i898.curves = i900
  var i903 = i899[5]
  var i902 = []
  for(var i = 0; i < i903.length; i += 1) {
    i902.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i903[i + 0]) );
  }
  i898.events = i902
  i898.halfPrecision = !!i899[6]
  i898._frameRate = i899[7]
  i898.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i899[8], i898.localBounds)
  i898.hasMuscleCurves = !!i899[9]
  var i905 = i899[10]
  var i904 = []
  for(var i = 0; i < i905.length; i += 1) {
    i904.push( i905[i + 0] );
  }
  i898.clipMuscleConstant = i904
  i898.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i899[11], i898.clipBindingConstant)
  return i898
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i908 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i909 = data
  i908.path = i909[0]
  i908.hash = i909[1]
  i908.componentType = i909[2]
  i908.property = i909[3]
  i908.keys = i909[4]
  var i911 = i909[5]
  var i910 = []
  for(var i = 0; i < i911.length; i += 1) {
    i910.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i911[i + 0]) );
  }
  i908.objectReferenceKeys = i910
  return i908
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i914 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i915 = data
  i914.time = i915[0]
  request.r(i915[1], i915[2], 0, i914, 'value')
  return i914
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i918 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i919 = data
  i918.functionName = i919[0]
  i918.floatParameter = i919[1]
  i918.intParameter = i919[2]
  i918.stringParameter = i919[3]
  request.r(i919[4], i919[5], 0, i918, 'objectReferenceParameter')
  i918.time = i919[6]
  return i918
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i920 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i921 = data
  i920.center = new pc.Vec3( i921[0], i921[1], i921[2] )
  i920.extends = new pc.Vec3( i921[3], i921[4], i921[5] )
  return i920
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i924 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i925 = data
  var i927 = i925[0]
  var i926 = []
  for(var i = 0; i < i927.length; i += 1) {
    i926.push( i927[i + 0] );
  }
  i924.genericBindings = i926
  var i929 = i925[1]
  var i928 = []
  for(var i = 0; i < i929.length; i += 1) {
    i928.push( i929[i + 0] );
  }
  i924.pptrCurveMapping = i928
  return i924
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i930 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i931 = data
  i930.name = i931[0]
  var i933 = i931[1]
  var i932 = []
  for(var i = 0; i < i933.length; i += 1) {
    i932.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i933[i + 0]) );
  }
  i930.layers = i932
  var i935 = i931[2]
  var i934 = []
  for(var i = 0; i < i935.length; i += 1) {
    i934.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i935[i + 0]) );
  }
  i930.parameters = i934
  i930.animationClips = i931[3]
  i930.avatarUnsupported = i931[4]
  return i930
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i938 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i939 = data
  i938.name = i939[0]
  i938.defaultWeight = i939[1]
  i938.blendingMode = i939[2]
  i938.avatarMask = i939[3]
  i938.syncedLayerIndex = i939[4]
  i938.syncedLayerAffectsTiming = !!i939[5]
  i938.syncedLayers = i939[6]
  i938.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i939[7], i938.stateMachine)
  return i938
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i940 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i941 = data
  i940.id = i941[0]
  i940.name = i941[1]
  i940.path = i941[2]
  var i943 = i941[3]
  var i942 = []
  for(var i = 0; i < i943.length; i += 1) {
    i942.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i943[i + 0]) );
  }
  i940.states = i942
  var i945 = i941[4]
  var i944 = []
  for(var i = 0; i < i945.length; i += 1) {
    i944.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i945[i + 0]) );
  }
  i940.machines = i944
  var i947 = i941[5]
  var i946 = []
  for(var i = 0; i < i947.length; i += 1) {
    i946.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i947[i + 0]) );
  }
  i940.entryStateTransitions = i946
  var i949 = i941[6]
  var i948 = []
  for(var i = 0; i < i949.length; i += 1) {
    i948.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i949[i + 0]) );
  }
  i940.exitStateTransitions = i948
  var i951 = i941[7]
  var i950 = []
  for(var i = 0; i < i951.length; i += 1) {
    i950.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i951[i + 0]) );
  }
  i940.anyStateTransitions = i950
  i940.defaultStateId = i941[8]
  return i940
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i954 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i955 = data
  i954.id = i955[0]
  i954.name = i955[1]
  i954.cycleOffset = i955[2]
  i954.cycleOffsetParameter = i955[3]
  i954.cycleOffsetParameterActive = !!i955[4]
  i954.mirror = !!i955[5]
  i954.mirrorParameter = i955[6]
  i954.mirrorParameterActive = !!i955[7]
  i954.motionId = i955[8]
  i954.nameHash = i955[9]
  i954.fullPathHash = i955[10]
  i954.speed = i955[11]
  i954.speedParameter = i955[12]
  i954.speedParameterActive = !!i955[13]
  i954.tag = i955[14]
  i954.tagHash = i955[15]
  i954.writeDefaultValues = !!i955[16]
  var i957 = i955[17]
  var i956 = []
  for(var i = 0; i < i957.length; i += 2) {
  request.r(i957[i + 0], i957[i + 1], 2, i956, '')
  }
  i954.behaviours = i956
  var i959 = i955[18]
  var i958 = []
  for(var i = 0; i < i959.length; i += 1) {
    i958.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i959[i + 0]) );
  }
  i954.transitions = i958
  return i954
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i964 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i965 = data
  i964.fullPath = i965[0]
  i964.canTransitionToSelf = !!i965[1]
  i964.duration = i965[2]
  i964.exitTime = i965[3]
  i964.hasExitTime = !!i965[4]
  i964.hasFixedDuration = !!i965[5]
  i964.interruptionSource = i965[6]
  i964.offset = i965[7]
  i964.orderedInterruption = !!i965[8]
  i964.destinationStateId = i965[9]
  i964.isExit = !!i965[10]
  i964.mute = !!i965[11]
  i964.solo = !!i965[12]
  var i967 = i965[13]
  var i966 = []
  for(var i = 0; i < i967.length; i += 1) {
    i966.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i967[i + 0]) );
  }
  i964.conditions = i966
  return i964
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i972 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i973 = data
  i972.destinationStateId = i973[0]
  i972.isExit = !!i973[1]
  i972.mute = !!i973[2]
  i972.solo = !!i973[3]
  var i975 = i973[4]
  var i974 = []
  for(var i = 0; i < i975.length; i += 1) {
    i974.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i975[i + 0]) );
  }
  i972.conditions = i974
  return i972
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i978 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i979 = data
  i978.defaultBool = !!i979[0]
  i978.defaultFloat = i979[1]
  i978.defaultInt = i979[2]
  i978.name = i979[3]
  i978.nameHash = i979[4]
  i978.type = i979[5]
  return i978
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i982 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i983 = data
  i982.mode = i983[0]
  i982.parameter = i983[1]
  i982.threshold = i983[2]
  return i982
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i984 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i985 = data
  i984.name = i985[0]
  i984.bytes64 = i985[1]
  i984.data = i985[2]
  return i984
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i986 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i987 = data
  i986.useSafeMode = !!i987[0]
  i986.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i987[1], i986.safeModeOptions)
  i986.timeScale = i987[2]
  i986.unscaledTimeScale = i987[3]
  i986.useSmoothDeltaTime = !!i987[4]
  i986.maxSmoothUnscaledTime = i987[5]
  i986.rewindCallbackMode = i987[6]
  i986.showUnityEditorReport = !!i987[7]
  i986.logBehaviour = i987[8]
  i986.drawGizmos = !!i987[9]
  i986.defaultRecyclable = !!i987[10]
  i986.defaultAutoPlay = i987[11]
  i986.defaultUpdateType = i987[12]
  i986.defaultTimeScaleIndependent = !!i987[13]
  i986.defaultEaseType = i987[14]
  i986.defaultEaseOvershootOrAmplitude = i987[15]
  i986.defaultEasePeriod = i987[16]
  i986.defaultAutoKill = !!i987[17]
  i986.defaultLoopType = i987[18]
  i986.debugMode = !!i987[19]
  i986.debugStoreTargetId = !!i987[20]
  i986.showPreviewPanel = !!i987[21]
  i986.storeSettingsLocation = i987[22]
  i986.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i987[23], i986.modules)
  i986.createASMDEF = !!i987[24]
  i986.showPlayingTweens = !!i987[25]
  i986.showPausedTweens = !!i987[26]
  return i986
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i988 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i989 = data
  i988.logBehaviour = i989[0]
  i988.nestedTweenFailureBehaviour = i989[1]
  return i988
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i990 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i991 = data
  i990.showPanel = !!i991[0]
  i990.audioEnabled = !!i991[1]
  i990.physicsEnabled = !!i991[2]
  i990.physics2DEnabled = !!i991[3]
  i990.spriteEnabled = !!i991[4]
  i990.uiEnabled = !!i991[5]
  i990.uiToolkitEnabled = !!i991[6]
  i990.textMeshProEnabled = !!i991[7]
  i990.tk2DEnabled = !!i991[8]
  i990.deAudioEnabled = !!i991[9]
  i990.deUnityExtendedEnabled = !!i991[10]
  i990.epoOutlineEnabled = !!i991[11]
  return i990
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i992 = root || request.c( 'TMPro.TMP_Settings' )
  var i993 = data
  i992.assetVersion = i993[0]
  i992.m_TextWrappingMode = i993[1]
  i992.m_enableKerning = !!i993[2]
  var i995 = i993[3]
  var i994 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i995.length; i += 1) {
    i994.add(i995[i + 0]);
  }
  i992.m_ActiveFontFeatures = i994
  i992.m_enableExtraPadding = !!i993[4]
  i992.m_enableTintAllSprites = !!i993[5]
  i992.m_enableParseEscapeCharacters = !!i993[6]
  i992.m_EnableRaycastTarget = !!i993[7]
  i992.m_GetFontFeaturesAtRuntime = !!i993[8]
  i992.m_missingGlyphCharacter = i993[9]
  i992.m_ClearDynamicDataOnBuild = !!i993[10]
  i992.m_warningsDisabled = !!i993[11]
  request.r(i993[12], i993[13], 0, i992, 'm_defaultFontAsset')
  i992.m_defaultFontAssetPath = i993[14]
  i992.m_defaultFontSize = i993[15]
  i992.m_defaultAutoSizeMinRatio = i993[16]
  i992.m_defaultAutoSizeMaxRatio = i993[17]
  i992.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i993[18], i993[19] )
  i992.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i993[20], i993[21] )
  i992.m_autoSizeTextContainer = !!i993[22]
  i992.m_IsTextObjectScaleStatic = !!i993[23]
  var i997 = i993[24]
  var i996 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i997.length; i += 2) {
  request.r(i997[i + 0], i997[i + 1], 1, i996, '')
  }
  i992.m_fallbackFontAssets = i996
  i992.m_matchMaterialPreset = !!i993[25]
  i992.m_HideSubTextObjects = !!i993[26]
  request.r(i993[27], i993[28], 0, i992, 'm_defaultSpriteAsset')
  i992.m_defaultSpriteAssetPath = i993[29]
  i992.m_enableEmojiSupport = !!i993[30]
  i992.m_MissingCharacterSpriteUnicode = i993[31]
  var i999 = i993[32]
  var i998 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i999.length; i += 2) {
  request.r(i999[i + 0], i999[i + 1], 1, i998, '')
  }
  i992.m_EmojiFallbackTextAssets = i998
  i992.m_defaultColorGradientPresetsPath = i993[33]
  request.r(i993[34], i993[35], 0, i992, 'm_defaultStyleSheet')
  i992.m_StyleSheetsResourcePath = i993[36]
  request.r(i993[37], i993[38], 0, i992, 'm_leadingCharacters')
  request.r(i993[39], i993[40], 0, i992, 'm_followingCharacters')
  i992.m_UseModernHangulLineBreakingRules = !!i993[41]
  return i992
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1006 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1007 = data
  request.r(i1007[0], i1007[1], 0, i1006, 'spriteSheet')
  var i1009 = i1007[2]
  var i1008 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1009.length; i += 1) {
    i1008.add(request.d('TMPro.TMP_Sprite', i1009[i + 0]));
  }
  i1006.spriteInfoList = i1008
  var i1011 = i1007[3]
  var i1010 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1011.length; i += 2) {
  request.r(i1011[i + 0], i1011[i + 1], 1, i1010, '')
  }
  i1006.fallbackSpriteAssets = i1010
  var i1013 = i1007[4]
  var i1012 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1013.length; i += 1) {
    i1012.add(request.d('TMPro.TMP_SpriteCharacter', i1013[i + 0]));
  }
  i1006.m_SpriteCharacterTable = i1012
  var i1015 = i1007[5]
  var i1014 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1015.length; i += 1) {
    i1014.add(request.d('TMPro.TMP_SpriteGlyph', i1015[i + 0]));
  }
  i1006.m_GlyphTable = i1014
  i1006.m_Version = i1007[6]
  i1006.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1007[7], i1006.m_FaceInfo)
  request.r(i1007[8], i1007[9], 0, i1006, 'm_Material')
  return i1006
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1018 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1019 = data
  i1018.name = i1019[0]
  i1018.hashCode = i1019[1]
  i1018.unicode = i1019[2]
  i1018.pivot = new pc.Vec2( i1019[3], i1019[4] )
  request.r(i1019[5], i1019[6], 0, i1018, 'sprite')
  i1018.id = i1019[7]
  i1018.x = i1019[8]
  i1018.y = i1019[9]
  i1018.width = i1019[10]
  i1018.height = i1019[11]
  i1018.xOffset = i1019[12]
  i1018.yOffset = i1019[13]
  i1018.xAdvance = i1019[14]
  i1018.scale = i1019[15]
  return i1018
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1024 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1025 = data
  i1024.m_Name = i1025[0]
  i1024.m_ElementType = i1025[1]
  i1024.m_Unicode = i1025[2]
  i1024.m_GlyphIndex = i1025[3]
  i1024.m_Scale = i1025[4]
  return i1024
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1028 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1029 = data
  request.r(i1029[0], i1029[1], 0, i1028, 'sprite')
  i1028.m_Index = i1029[2]
  i1028.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1029[3], i1028.m_Metrics)
  i1028.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1029[4], i1028.m_GlyphRect)
  i1028.m_Scale = i1029[5]
  i1028.m_AtlasIndex = i1029[6]
  i1028.m_ClassDefinitionType = i1029[7]
  return i1028
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1030 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1031 = data
  i1030.m_Width = i1031[0]
  i1030.m_Height = i1031[1]
  i1030.m_HorizontalBearingX = i1031[2]
  i1030.m_HorizontalBearingY = i1031[3]
  i1030.m_HorizontalAdvance = i1031[4]
  return i1030
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1032 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1033 = data
  i1032.m_X = i1033[0]
  i1032.m_Y = i1033[1]
  i1032.m_Width = i1033[2]
  i1032.m_Height = i1033[3]
  return i1032
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1034 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1035 = data
  i1034.m_FaceIndex = i1035[0]
  i1034.m_FamilyName = i1035[1]
  i1034.m_StyleName = i1035[2]
  i1034.m_PointSize = i1035[3]
  i1034.m_Scale = i1035[4]
  i1034.m_UnitsPerEM = i1035[5]
  i1034.m_LineHeight = i1035[6]
  i1034.m_AscentLine = i1035[7]
  i1034.m_CapLine = i1035[8]
  i1034.m_MeanLine = i1035[9]
  i1034.m_Baseline = i1035[10]
  i1034.m_DescentLine = i1035[11]
  i1034.m_SuperscriptOffset = i1035[12]
  i1034.m_SuperscriptSize = i1035[13]
  i1034.m_SubscriptOffset = i1035[14]
  i1034.m_SubscriptSize = i1035[15]
  i1034.m_UnderlineOffset = i1035[16]
  i1034.m_UnderlineThickness = i1035[17]
  i1034.m_StrikethroughOffset = i1035[18]
  i1034.m_StrikethroughThickness = i1035[19]
  i1034.m_TabWidth = i1035[20]
  return i1034
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1036 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1037 = data
  var i1039 = i1037[0]
  var i1038 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1039.length; i += 1) {
    i1038.add(request.d('TMPro.TMP_Style', i1039[i + 0]));
  }
  i1036.m_StyleList = i1038
  return i1036
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1042 = root || request.c( 'TMPro.TMP_Style' )
  var i1043 = data
  i1042.m_Name = i1043[0]
  i1042.m_HashCode = i1043[1]
  i1042.m_OpeningDefinition = i1043[2]
  i1042.m_ClosingDefinition = i1043[3]
  i1042.m_OpeningTagArray = i1043[4]
  i1042.m_ClosingTagArray = i1043[5]
  return i1042
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1044 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1045 = data
  var i1047 = i1045[0]
  var i1046 = []
  for(var i = 0; i < i1047.length; i += 1) {
    i1046.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1047[i + 0]) );
  }
  i1044.files = i1046
  i1044.componentToPrefabIds = i1045[1]
  return i1044
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1050 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1051 = data
  i1050.path = i1051[0]
  request.r(i1051[1], i1051[2], 0, i1050, 'unityObject')
  return i1050
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1052 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1053 = data
  var i1055 = i1053[0]
  var i1054 = []
  for(var i = 0; i < i1055.length; i += 1) {
    i1054.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1055[i + 0]) );
  }
  i1052.scriptsExecutionOrder = i1054
  var i1057 = i1053[1]
  var i1056 = []
  for(var i = 0; i < i1057.length; i += 1) {
    i1056.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1057[i + 0]) );
  }
  i1052.sortingLayers = i1056
  var i1059 = i1053[2]
  var i1058 = []
  for(var i = 0; i < i1059.length; i += 1) {
    i1058.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1059[i + 0]) );
  }
  i1052.cullingLayers = i1058
  i1052.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1053[3], i1052.timeSettings)
  i1052.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1053[4], i1052.physicsSettings)
  i1052.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1053[5], i1052.physics2DSettings)
  i1052.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1053[6], i1052.qualitySettings)
  i1052.enableRealtimeShadows = !!i1053[7]
  i1052.enableAutoInstancing = !!i1053[8]
  i1052.enableStaticBatching = !!i1053[9]
  i1052.enableDynamicBatching = !!i1053[10]
  i1052.lightmapEncodingQuality = i1053[11]
  i1052.desiredColorSpace = i1053[12]
  var i1061 = i1053[13]
  var i1060 = []
  for(var i = 0; i < i1061.length; i += 1) {
    i1060.push( i1061[i + 0] );
  }
  i1052.allTags = i1060
  return i1052
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1064 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1065 = data
  i1064.name = i1065[0]
  i1064.value = i1065[1]
  return i1064
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1068 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1069 = data
  i1068.id = i1069[0]
  i1068.name = i1069[1]
  i1068.value = i1069[2]
  return i1068
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1072 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1073 = data
  i1072.id = i1073[0]
  i1072.name = i1073[1]
  return i1072
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1074 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1075 = data
  i1074.fixedDeltaTime = i1075[0]
  i1074.maximumDeltaTime = i1075[1]
  i1074.timeScale = i1075[2]
  i1074.maximumParticleTimestep = i1075[3]
  return i1074
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1076 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1077 = data
  i1076.gravity = new pc.Vec3( i1077[0], i1077[1], i1077[2] )
  i1076.defaultSolverIterations = i1077[3]
  i1076.bounceThreshold = i1077[4]
  i1076.autoSyncTransforms = !!i1077[5]
  i1076.autoSimulation = !!i1077[6]
  var i1079 = i1077[7]
  var i1078 = []
  for(var i = 0; i < i1079.length; i += 1) {
    i1078.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1079[i + 0]) );
  }
  i1076.collisionMatrix = i1078
  return i1076
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1082 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1083 = data
  i1082.enabled = !!i1083[0]
  i1082.layerId = i1083[1]
  i1082.otherLayerId = i1083[2]
  return i1082
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1084 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1085 = data
  request.r(i1085[0], i1085[1], 0, i1084, 'material')
  i1084.gravity = new pc.Vec2( i1085[2], i1085[3] )
  i1084.positionIterations = i1085[4]
  i1084.velocityIterations = i1085[5]
  i1084.velocityThreshold = i1085[6]
  i1084.maxLinearCorrection = i1085[7]
  i1084.maxAngularCorrection = i1085[8]
  i1084.maxTranslationSpeed = i1085[9]
  i1084.maxRotationSpeed = i1085[10]
  i1084.baumgarteScale = i1085[11]
  i1084.baumgarteTOIScale = i1085[12]
  i1084.timeToSleep = i1085[13]
  i1084.linearSleepTolerance = i1085[14]
  i1084.angularSleepTolerance = i1085[15]
  i1084.defaultContactOffset = i1085[16]
  i1084.autoSimulation = !!i1085[17]
  i1084.queriesHitTriggers = !!i1085[18]
  i1084.queriesStartInColliders = !!i1085[19]
  i1084.callbacksOnDisable = !!i1085[20]
  i1084.reuseCollisionCallbacks = !!i1085[21]
  i1084.autoSyncTransforms = !!i1085[22]
  var i1087 = i1085[23]
  var i1086 = []
  for(var i = 0; i < i1087.length; i += 1) {
    i1086.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1087[i + 0]) );
  }
  i1084.collisionMatrix = i1086
  return i1084
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1090 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1091 = data
  i1090.enabled = !!i1091[0]
  i1090.layerId = i1091[1]
  i1090.otherLayerId = i1091[2]
  return i1090
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1092 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1093 = data
  var i1095 = i1093[0]
  var i1094 = []
  for(var i = 0; i < i1095.length; i += 1) {
    i1094.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1095[i + 0]) );
  }
  i1092.qualityLevels = i1094
  var i1097 = i1093[1]
  var i1096 = []
  for(var i = 0; i < i1097.length; i += 1) {
    i1096.push( i1097[i + 0] );
  }
  i1092.names = i1096
  i1092.shadows = i1093[2]
  i1092.anisotropicFiltering = i1093[3]
  i1092.antiAliasing = i1093[4]
  i1092.lodBias = i1093[5]
  i1092.shadowCascades = i1093[6]
  i1092.shadowDistance = i1093[7]
  i1092.shadowmaskMode = i1093[8]
  i1092.shadowProjection = i1093[9]
  i1092.shadowResolution = i1093[10]
  i1092.softParticles = !!i1093[11]
  i1092.softVegetation = !!i1093[12]
  i1092.activeColorSpace = i1093[13]
  i1092.desiredColorSpace = i1093[14]
  i1092.masterTextureLimit = i1093[15]
  i1092.maxQueuedFrames = i1093[16]
  i1092.particleRaycastBudget = i1093[17]
  i1092.pixelLightCount = i1093[18]
  i1092.realtimeReflectionProbes = !!i1093[19]
  i1092.shadowCascade2Split = i1093[20]
  i1092.shadowCascade4Split = new pc.Vec3( i1093[21], i1093[22], i1093[23] )
  i1092.streamingMipmapsActive = !!i1093[24]
  i1092.vSyncCount = i1093[25]
  i1092.asyncUploadBufferSize = i1093[26]
  i1092.asyncUploadTimeSlice = i1093[27]
  i1092.billboardsFaceCameraPosition = !!i1093[28]
  i1092.shadowNearPlaneOffset = i1093[29]
  i1092.streamingMipmapsMemoryBudget = i1093[30]
  i1092.maximumLODLevel = i1093[31]
  i1092.streamingMipmapsAddAllCameras = !!i1093[32]
  i1092.streamingMipmapsMaxLevelReduction = i1093[33]
  i1092.streamingMipmapsRenderersPerFrame = i1093[34]
  i1092.resolutionScalingFixedDPIFactor = i1093[35]
  i1092.streamingMipmapsMaxFileIORequests = i1093[36]
  i1092.currentQualityLevel = i1093[37]
  return i1092
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1102 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1103 = data
  i1102.weight = i1103[0]
  i1102.vertices = i1103[1]
  i1102.normals = i1103[2]
  i1102.tangents = i1103[3]
  return i1102
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.SpriteMask":{"frontSortingLayerID":0,"frontSortingOrder":1,"backSortingLayerID":2,"backSortingOrder":3,"alphaCutoff":4,"sprite":5,"tileMode":7,"isCustomRangeActive":8,"spriteSortPoint":9,"enabled":10,"sharedMaterial":11,"sharedMaterials":13,"receiveShadows":14,"shadowCastingMode":15,"sortingLayerID":16,"sortingOrder":17,"lightmapIndex":18,"lightmapSceneIndex":19,"lightmapScaleOffset":20,"lightProbeUsage":24,"reflectionProbeUsage":25},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"42":[43],"44":[43],"45":[43],"46":[43],"47":[43],"48":[43],"49":[50],"51":[2],"52":[53],"54":[53],"55":[53],"56":[53],"57":[53],"58":[53],"59":[60],"61":[60],"62":[60],"63":[60],"64":[60],"65":[60],"66":[60],"67":[60],"68":[60],"69":[60],"70":[60],"71":[60],"72":[60],"73":[2],"74":[75],"76":[77],"78":[77],"23":[22],"6":[2],"79":[60],"80":[32],"81":[12],"82":[2],"83":[84],"85":[34],"86":[23],"87":[22],"88":[75,22],"89":[22,27],"90":[22],"91":[27,22],"92":[75],"93":[27,22],"94":[22],"95":[96],"97":[96],"98":[96],"99":[22],"100":[22],"26":[23],"28":[27,22],"101":[22],"25":[23],"102":[22],"103":[22],"104":[22],"105":[22],"106":[22],"107":[22],"108":[22],"109":[22],"110":[22],"111":[27,22],"112":[22],"113":[22],"114":[22],"115":[22],"116":[27,22],"117":[22],"118":[34],"119":[34],"35":[34],"120":[34],"121":[2],"122":[2]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.MonoBehaviour","CameraFollow2D","AutoCameraFit","UnityEngine.Transform","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Mesh","UnityEngine.Material","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","MoveBetweenPoints","PlayerCardUIManager","UnityEngine.GameObject","Ply_SoundManager","UnityEngine.AudioClip","UnityEngine.AudioSource","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.UI.Button","HairCutController","UnityEngine.SpriteMask","UnityEngine.BoxCollider2D","HideOnFirstClick","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_FontAsset","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","BatStrikeController","SlotTrigger","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.InputSystem.UI.InputSystemUIInputModule","UnityEngine.InputSystem.UI.TrackedDeviceRaycaster","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.38f1";

Deserializers.productName = "PLY_MiniSoccer";

Deserializers.lunaInitializationTime = "07/15/2026 03:53:54";

Deserializers.lunaDaysRunning = "65.0";

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

Deserializers.buildID = "dc283c5d-db44-41cd-9c68-9878824f981e";

Deserializers.runtimeInitializeOnLoadInfos = [[["Unity","Services","Core","Internal","UnityServicesInitializer","EnableServicesInitializationAsync"],["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["DG","Tweening","DOTween","RuntimeOnLoad"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["Unity","Services","Core","Registration","CorePackageInitializer","InitializeOnLoad"],["Unity","Services","Core","Internal","TaskAsyncOperation","SetScheduler"],["Unity","Services","Core","Environments","Client","Scheduler","EngineStateHelper","Init"],["Unity","Services","Core","Environments","Client","Scheduler","ThreadHelper","Init"],["Ua2CoreInitializeCallback","Register"],["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["Unity","AI","Navigation","NavMeshLink","ClearTrackedList"],["Unity","AI","Navigation","NavMeshSurface","ClearNavMeshSurfaces"],["Unity","AI","Navigation","NavMeshModifierVolume","ClearNavMeshModifiers"],["Unity","AI","Navigation","NavMeshModifier","ClearNavMeshModifiers"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["Unity","Services","Core","Internal","UnityServicesInitializer","CreateStaticInstance"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[["Unity","Services","Core","Environments","Client","Http","JsonHelpers","RegisterTypesForAOT"]],[["Unity","Services","Core","UnityThreadUtils","CaptureUnityThreadInfo"],["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

