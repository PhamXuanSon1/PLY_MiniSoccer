var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i542 = root || request.c( 'UnityEngine.JointSpring' )
  var i543 = data
  i542.spring = i543[0]
  i542.damper = i543[1]
  i542.targetPosition = i543[2]
  return i542
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i544 = root || request.c( 'UnityEngine.JointMotor' )
  var i545 = data
  i544.m_TargetVelocity = i545[0]
  i544.m_Force = i545[1]
  i544.m_FreeSpin = i545[2]
  return i544
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i546 = root || request.c( 'UnityEngine.JointLimits' )
  var i547 = data
  i546.m_Min = i547[0]
  i546.m_Max = i547[1]
  i546.m_Bounciness = i547[2]
  i546.m_BounceMinVelocity = i547[3]
  i546.m_ContactDistance = i547[4]
  i546.minBounce = i547[5]
  i546.maxBounce = i547[6]
  return i546
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i548 = root || request.c( 'UnityEngine.JointDrive' )
  var i549 = data
  i548.m_PositionSpring = i549[0]
  i548.m_PositionDamper = i549[1]
  i548.m_MaximumForce = i549[2]
  i548.m_UseAcceleration = i549[3]
  return i548
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i550 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i551 = data
  i550.m_Spring = i551[0]
  i550.m_Damper = i551[1]
  return i550
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i552 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i553 = data
  i552.m_Limit = i553[0]
  i552.m_Bounciness = i553[1]
  i552.m_ContactDistance = i553[2]
  return i552
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i554 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i555 = data
  i554.m_ExtremumSlip = i555[0]
  i554.m_ExtremumValue = i555[1]
  i554.m_AsymptoteSlip = i555[2]
  i554.m_AsymptoteValue = i555[3]
  i554.m_Stiffness = i555[4]
  return i554
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i556 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i557 = data
  i556.m_LowerAngle = i557[0]
  i556.m_UpperAngle = i557[1]
  return i556
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i558 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i559 = data
  i558.m_MotorSpeed = i559[0]
  i558.m_MaximumMotorTorque = i559[1]
  return i558
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i560 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i561 = data
  i560.m_DampingRatio = i561[0]
  i560.m_Frequency = i561[1]
  i560.m_Angle = i561[2]
  return i560
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i562 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i563 = data
  i562.m_LowerTranslation = i563[0]
  i562.m_UpperTranslation = i563[1]
  return i562
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i564 = root || new pc.UnityMaterial()
  var i565 = data
  i564.name = i565[0]
  request.r(i565[1], i565[2], 0, i564, 'shader')
  i564.renderQueue = i565[3]
  i564.enableInstancing = !!i565[4]
  var i567 = i565[5]
  var i566 = []
  for(var i = 0; i < i567.length; i += 1) {
    i566.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i567[i + 0]) );
  }
  i564.floatParameters = i566
  var i569 = i565[6]
  var i568 = []
  for(var i = 0; i < i569.length; i += 1) {
    i568.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i569[i + 0]) );
  }
  i564.colorParameters = i568
  var i571 = i565[7]
  var i570 = []
  for(var i = 0; i < i571.length; i += 1) {
    i570.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i571[i + 0]) );
  }
  i564.vectorParameters = i570
  var i573 = i565[8]
  var i572 = []
  for(var i = 0; i < i573.length; i += 1) {
    i572.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i573[i + 0]) );
  }
  i564.textureParameters = i572
  var i575 = i565[9]
  var i574 = []
  for(var i = 0; i < i575.length; i += 1) {
    i574.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i575[i + 0]) );
  }
  i564.materialFlags = i574
  return i564
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i578 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i579 = data
  i578.name = i579[0]
  i578.value = i579[1]
  return i578
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i582 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i583 = data
  i582.name = i583[0]
  i582.value = new pc.Color(i583[1], i583[2], i583[3], i583[4])
  return i582
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i586 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i587 = data
  i586.name = i587[0]
  i586.value = new pc.Vec4( i587[1], i587[2], i587[3], i587[4] )
  return i586
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i590 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i591 = data
  i590.name = i591[0]
  request.r(i591[1], i591[2], 0, i590, 'value')
  return i590
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i594 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i595 = data
  i594.name = i595[0]
  i594.enabled = !!i595[1]
  return i594
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i596 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i597 = data
  i596.name = i597[0]
  i596.width = i597[1]
  i596.height = i597[2]
  i596.mipmapCount = i597[3]
  i596.anisoLevel = i597[4]
  i596.filterMode = i597[5]
  i596.hdr = !!i597[6]
  i596.format = i597[7]
  i596.wrapMode = i597[8]
  i596.alphaIsTransparency = !!i597[9]
  i596.alphaSource = i597[10]
  i596.graphicsFormat = i597[11]
  i596.sRGBTexture = !!i597[12]
  i596.desiredColorSpace = i597[13]
  i596.wrapU = i597[14]
  i596.wrapV = i597[15]
  return i596
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i598 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i599 = data
  i598.name = i599[0]
  i598.halfPrecision = !!i599[1]
  i598.useSimplification = !!i599[2]
  i598.useUInt32IndexFormat = !!i599[3]
  i598.vertexCount = i599[4]
  i598.aabb = i599[5]
  var i601 = i599[6]
  var i600 = []
  for(var i = 0; i < i601.length; i += 1) {
    i600.push( !!i601[i + 0] );
  }
  i598.streams = i600
  i598.vertices = i599[7]
  var i603 = i599[8]
  var i602 = []
  for(var i = 0; i < i603.length; i += 1) {
    i602.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i603[i + 0]) );
  }
  i598.subMeshes = i602
  var i605 = i599[9]
  var i604 = []
  for(var i = 0; i < i605.length; i += 16) {
    i604.push( new pc.Mat4().setData(i605[i + 0], i605[i + 1], i605[i + 2], i605[i + 3],  i605[i + 4], i605[i + 5], i605[i + 6], i605[i + 7],  i605[i + 8], i605[i + 9], i605[i + 10], i605[i + 11],  i605[i + 12], i605[i + 13], i605[i + 14], i605[i + 15]) );
  }
  i598.bindposes = i604
  var i607 = i599[10]
  var i606 = []
  for(var i = 0; i < i607.length; i += 1) {
    i606.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i607[i + 0]) );
  }
  i598.blendShapes = i606
  return i598
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i612 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i613 = data
  i612.triangles = i613[0]
  return i612
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i618 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i619 = data
  i618.name = i619[0]
  var i621 = i619[1]
  var i620 = []
  for(var i = 0; i < i621.length; i += 1) {
    i620.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i621[i + 0]) );
  }
  i618.frames = i620
  return i618
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i622 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i623 = data
  i622.name = i623[0]
  i622.index = i623[1]
  i622.startup = !!i623[2]
  return i622
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i624 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i625 = data
  i624.aspect = i625[0]
  i624.orthographic = !!i625[1]
  i624.orthographicSize = i625[2]
  i624.backgroundColor = new pc.Color(i625[3], i625[4], i625[5], i625[6])
  i624.nearClipPlane = i625[7]
  i624.farClipPlane = i625[8]
  i624.fieldOfView = i625[9]
  i624.depth = i625[10]
  i624.clearFlags = i625[11]
  i624.cullingMask = i625[12]
  i624.rect = i625[13]
  request.r(i625[14], i625[15], 0, i624, 'targetTexture')
  i624.usePhysicalProperties = !!i625[16]
  i624.focalLength = i625[17]
  i624.sensorSize = new pc.Vec2( i625[18], i625[19] )
  i624.lensShift = new pc.Vec2( i625[20], i625[21] )
  i624.gateFit = i625[22]
  i624.commandBufferCount = i625[23]
  i624.cameraType = i625[24]
  i624.enabled = !!i625[25]
  return i624
}

Deserializers["CameraFollow2D"] = function (request, data, root) {
  var i626 = root || request.c( 'CameraFollow2D' )
  var i627 = data
  request.r(i627[0], i627[1], 0, i626, 'target')
  i626.smoothSpeed = i627[2]
  i626.offset = new pc.Vec3( i627[3], i627[4], i627[5] )
  i626.followY = !!i627[6]
  return i626
}

Deserializers["AutoCameraFit"] = function (request, data, root) {
  var i628 = root || request.c( 'AutoCameraFit' )
  var i629 = data
  request.r(i629[0], i629[1], 0, i628, 'tallScreenObject')
  i628.tallScreenRatioThreshold = i629[2]
  i628.tallScreenYOffset = i629[3]
  request.r(i629[4], i629[5], 0, i628, 'canvasBtn')
  request.r(i629[6], i629[7], 0, i628, 'targetArea')
  i628.paddingLandscape = i629[8]
  i628.paddingPortrait = i629[9]
  i628.extraPaddingSmallScreen = i629[10]
  i628.smallScreenThreshold = i629[11]
  i628.autoUpdateOnResize = !!i629[12]
  i628.adjustInEditMode = !!i629[13]
  return i628
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i630 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i631 = data
  i630.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i631[0], i630.main)
  i630.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i631[1], i630.colorBySpeed)
  i630.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i631[2], i630.colorOverLifetime)
  i630.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i631[3], i630.emission)
  i630.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i631[4], i630.rotationBySpeed)
  i630.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i631[5], i630.rotationOverLifetime)
  i630.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i631[6], i630.shape)
  i630.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i631[7], i630.sizeBySpeed)
  i630.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i631[8], i630.sizeOverLifetime)
  i630.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i631[9], i630.textureSheetAnimation)
  i630.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i631[10], i630.velocityOverLifetime)
  i630.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i631[11], i630.noise)
  i630.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i631[12], i630.inheritVelocity)
  i630.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i631[13], i630.forceOverLifetime)
  i630.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i631[14], i630.limitVelocityOverLifetime)
  i630.useAutoRandomSeed = !!i631[15]
  i630.randomSeed = i631[16]
  return i630
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i632 = root || new pc.ParticleSystemMain()
  var i633 = data
  i632.duration = i633[0]
  i632.loop = !!i633[1]
  i632.prewarm = !!i633[2]
  i632.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i633[3], i632.startDelay)
  i632.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i633[4], i632.startLifetime)
  i632.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i633[5], i632.startSpeed)
  i632.startSize3D = !!i633[6]
  i632.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i633[7], i632.startSizeX)
  i632.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i633[8], i632.startSizeY)
  i632.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i633[9], i632.startSizeZ)
  i632.startRotation3D = !!i633[10]
  i632.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i633[11], i632.startRotationX)
  i632.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i633[12], i632.startRotationY)
  i632.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i633[13], i632.startRotationZ)
  i632.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i633[14], i632.startColor)
  i632.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i633[15], i632.gravityModifier)
  i632.simulationSpace = i633[16]
  request.r(i633[17], i633[18], 0, i632, 'customSimulationSpace')
  i632.simulationSpeed = i633[19]
  i632.useUnscaledTime = !!i633[20]
  i632.scalingMode = i633[21]
  i632.playOnAwake = !!i633[22]
  i632.maxParticles = i633[23]
  i632.emitterVelocityMode = i633[24]
  i632.stopAction = i633[25]
  return i632
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i634 = root || new pc.MinMaxCurve()
  var i635 = data
  i634.mode = i635[0]
  i634.curveMin = new pc.AnimationCurve( { keys_flow: i635[1] } )
  i634.curveMax = new pc.AnimationCurve( { keys_flow: i635[2] } )
  i634.curveMultiplier = i635[3]
  i634.constantMin = i635[4]
  i634.constantMax = i635[5]
  return i634
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i636 = root || new pc.MinMaxGradient()
  var i637 = data
  i636.mode = i637[0]
  i636.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i637[1], i636.gradientMin)
  i636.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i637[2], i636.gradientMax)
  i636.colorMin = new pc.Color(i637[3], i637[4], i637[5], i637[6])
  i636.colorMax = new pc.Color(i637[7], i637[8], i637[9], i637[10])
  return i636
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i638 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i639 = data
  i638.mode = i639[0]
  var i641 = i639[1]
  var i640 = []
  for(var i = 0; i < i641.length; i += 1) {
    i640.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i641[i + 0]) );
  }
  i638.colorKeys = i640
  var i643 = i639[2]
  var i642 = []
  for(var i = 0; i < i643.length; i += 1) {
    i642.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i643[i + 0]) );
  }
  i638.alphaKeys = i642
  return i638
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i644 = root || new pc.ParticleSystemColorBySpeed()
  var i645 = data
  i644.enabled = !!i645[0]
  i644.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i645[1], i644.color)
  i644.range = new pc.Vec2( i645[2], i645[3] )
  return i644
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i648 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i649 = data
  i648.color = new pc.Color(i649[0], i649[1], i649[2], i649[3])
  i648.time = i649[4]
  return i648
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i652 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i653 = data
  i652.alpha = i653[0]
  i652.time = i653[1]
  return i652
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i654 = root || new pc.ParticleSystemColorOverLifetime()
  var i655 = data
  i654.enabled = !!i655[0]
  i654.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i655[1], i654.color)
  return i654
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i656 = root || new pc.ParticleSystemEmitter()
  var i657 = data
  i656.enabled = !!i657[0]
  i656.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i657[1], i656.rateOverTime)
  i656.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i657[2], i656.rateOverDistance)
  var i659 = i657[3]
  var i658 = []
  for(var i = 0; i < i659.length; i += 1) {
    i658.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i659[i + 0]) );
  }
  i656.bursts = i658
  return i656
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i662 = root || new pc.ParticleSystemBurst()
  var i663 = data
  i662.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i663[0], i662.count)
  i662.cycleCount = i663[1]
  i662.minCount = i663[2]
  i662.maxCount = i663[3]
  i662.repeatInterval = i663[4]
  i662.time = i663[5]
  return i662
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i664 = root || new pc.ParticleSystemRotationBySpeed()
  var i665 = data
  i664.enabled = !!i665[0]
  i664.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i665[1], i664.x)
  i664.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i665[2], i664.y)
  i664.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i665[3], i664.z)
  i664.separateAxes = !!i665[4]
  i664.range = new pc.Vec2( i665[5], i665[6] )
  return i664
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i666 = root || new pc.ParticleSystemRotationOverLifetime()
  var i667 = data
  i666.enabled = !!i667[0]
  i666.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i667[1], i666.x)
  i666.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i667[2], i666.y)
  i666.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i667[3], i666.z)
  i666.separateAxes = !!i667[4]
  return i666
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i668 = root || new pc.ParticleSystemShape()
  var i669 = data
  i668.enabled = !!i669[0]
  i668.shapeType = i669[1]
  i668.randomDirectionAmount = i669[2]
  i668.sphericalDirectionAmount = i669[3]
  i668.randomPositionAmount = i669[4]
  i668.alignToDirection = !!i669[5]
  i668.radius = i669[6]
  i668.radiusMode = i669[7]
  i668.radiusSpread = i669[8]
  i668.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i669[9], i668.radiusSpeed)
  i668.radiusThickness = i669[10]
  i668.angle = i669[11]
  i668.length = i669[12]
  i668.boxThickness = new pc.Vec3( i669[13], i669[14], i669[15] )
  i668.meshShapeType = i669[16]
  request.r(i669[17], i669[18], 0, i668, 'mesh')
  request.r(i669[19], i669[20], 0, i668, 'meshRenderer')
  request.r(i669[21], i669[22], 0, i668, 'skinnedMeshRenderer')
  i668.useMeshMaterialIndex = !!i669[23]
  i668.meshMaterialIndex = i669[24]
  i668.useMeshColors = !!i669[25]
  i668.normalOffset = i669[26]
  i668.arc = i669[27]
  i668.arcMode = i669[28]
  i668.arcSpread = i669[29]
  i668.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i669[30], i668.arcSpeed)
  i668.donutRadius = i669[31]
  i668.position = new pc.Vec3( i669[32], i669[33], i669[34] )
  i668.rotation = new pc.Vec3( i669[35], i669[36], i669[37] )
  i668.scale = new pc.Vec3( i669[38], i669[39], i669[40] )
  return i668
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i670 = root || new pc.ParticleSystemSizeBySpeed()
  var i671 = data
  i670.enabled = !!i671[0]
  i670.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i671[1], i670.x)
  i670.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i671[2], i670.y)
  i670.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i671[3], i670.z)
  i670.separateAxes = !!i671[4]
  i670.range = new pc.Vec2( i671[5], i671[6] )
  return i670
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i672 = root || new pc.ParticleSystemSizeOverLifetime()
  var i673 = data
  i672.enabled = !!i673[0]
  i672.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i673[1], i672.x)
  i672.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i673[2], i672.y)
  i672.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i673[3], i672.z)
  i672.separateAxes = !!i673[4]
  return i672
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i674 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i675 = data
  i674.enabled = !!i675[0]
  i674.mode = i675[1]
  i674.animation = i675[2]
  i674.numTilesX = i675[3]
  i674.numTilesY = i675[4]
  i674.useRandomRow = !!i675[5]
  i674.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i675[6], i674.frameOverTime)
  i674.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i675[7], i674.startFrame)
  i674.cycleCount = i675[8]
  i674.rowIndex = i675[9]
  i674.flipU = i675[10]
  i674.flipV = i675[11]
  i674.spriteCount = i675[12]
  var i677 = i675[13]
  var i676 = []
  for(var i = 0; i < i677.length; i += 2) {
  request.r(i677[i + 0], i677[i + 1], 2, i676, '')
  }
  i674.sprites = i676
  return i674
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i680 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i681 = data
  i680.enabled = !!i681[0]
  i680.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i681[1], i680.x)
  i680.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i681[2], i680.y)
  i680.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i681[3], i680.z)
  i680.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i681[4], i680.radial)
  i680.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i681[5], i680.speedModifier)
  i680.space = i681[6]
  i680.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i681[7], i680.orbitalX)
  i680.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i681[8], i680.orbitalY)
  i680.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i681[9], i680.orbitalZ)
  i680.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i681[10], i680.orbitalOffsetX)
  i680.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i681[11], i680.orbitalOffsetY)
  i680.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i681[12], i680.orbitalOffsetZ)
  return i680
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i682 = root || new pc.ParticleSystemNoise()
  var i683 = data
  i682.enabled = !!i683[0]
  i682.separateAxes = !!i683[1]
  i682.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i683[2], i682.strengthX)
  i682.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i683[3], i682.strengthY)
  i682.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i683[4], i682.strengthZ)
  i682.frequency = i683[5]
  i682.damping = !!i683[6]
  i682.octaveCount = i683[7]
  i682.octaveMultiplier = i683[8]
  i682.octaveScale = i683[9]
  i682.quality = i683[10]
  i682.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i683[11], i682.scrollSpeed)
  i682.scrollSpeedMultiplier = i683[12]
  i682.remapEnabled = !!i683[13]
  i682.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i683[14], i682.remapX)
  i682.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i683[15], i682.remapY)
  i682.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i683[16], i682.remapZ)
  i682.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i683[17], i682.positionAmount)
  i682.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i683[18], i682.rotationAmount)
  i682.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i683[19], i682.sizeAmount)
  return i682
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i684 = root || new pc.ParticleSystemInheritVelocity()
  var i685 = data
  i684.enabled = !!i685[0]
  i684.mode = i685[1]
  i684.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i685[2], i684.curve)
  return i684
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i686 = root || new pc.ParticleSystemForceOverLifetime()
  var i687 = data
  i686.enabled = !!i687[0]
  i686.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i687[1], i686.x)
  i686.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i687[2], i686.y)
  i686.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i687[3], i686.z)
  i686.space = i687[4]
  i686.randomized = !!i687[5]
  return i686
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i688 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i689 = data
  i688.enabled = !!i689[0]
  i688.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i689[1], i688.limit)
  i688.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i689[2], i688.limitX)
  i688.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i689[3], i688.limitY)
  i688.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i689[4], i688.limitZ)
  i688.dampen = i689[5]
  i688.separateAxes = !!i689[6]
  i688.space = i689[7]
  i688.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i689[8], i688.drag)
  i688.multiplyDragByParticleSize = !!i689[9]
  i688.multiplyDragByParticleVelocity = !!i689[10]
  return i688
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i690 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i691 = data
  request.r(i691[0], i691[1], 0, i690, 'mesh')
  i690.meshCount = i691[2]
  i690.activeVertexStreamsCount = i691[3]
  i690.alignment = i691[4]
  i690.renderMode = i691[5]
  i690.sortMode = i691[6]
  i690.lengthScale = i691[7]
  i690.velocityScale = i691[8]
  i690.cameraVelocityScale = i691[9]
  i690.normalDirection = i691[10]
  i690.sortingFudge = i691[11]
  i690.minParticleSize = i691[12]
  i690.maxParticleSize = i691[13]
  i690.pivot = new pc.Vec3( i691[14], i691[15], i691[16] )
  request.r(i691[17], i691[18], 0, i690, 'trailMaterial')
  i690.applyActiveColorSpace = !!i691[19]
  i690.enabled = !!i691[20]
  request.r(i691[21], i691[22], 0, i690, 'sharedMaterial')
  var i693 = i691[23]
  var i692 = []
  for(var i = 0; i < i693.length; i += 2) {
  request.r(i693[i + 0], i693[i + 1], 2, i692, '')
  }
  i690.sharedMaterials = i692
  i690.receiveShadows = !!i691[24]
  i690.shadowCastingMode = i691[25]
  i690.sortingLayerID = i691[26]
  i690.sortingOrder = i691[27]
  i690.lightmapIndex = i691[28]
  i690.lightmapSceneIndex = i691[29]
  i690.lightmapScaleOffset = new pc.Vec4( i691[30], i691[31], i691[32], i691[33] )
  i690.lightProbeUsage = i691[34]
  i690.reflectionProbeUsage = i691[35]
  return i690
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i696 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i697 = data
  i696.name = i697[0]
  i696.tagId = i697[1]
  i696.enabled = !!i697[2]
  i696.isStatic = !!i697[3]
  i696.layer = i697[4]
  return i696
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i698 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i699 = data
  i698.color = new pc.Color(i699[0], i699[1], i699[2], i699[3])
  request.r(i699[4], i699[5], 0, i698, 'sprite')
  i698.flipX = !!i699[6]
  i698.flipY = !!i699[7]
  i698.drawMode = i699[8]
  i698.size = new pc.Vec2( i699[9], i699[10] )
  i698.tileMode = i699[11]
  i698.adaptiveModeThreshold = i699[12]
  i698.maskInteraction = i699[13]
  i698.spriteSortPoint = i699[14]
  i698.enabled = !!i699[15]
  request.r(i699[16], i699[17], 0, i698, 'sharedMaterial')
  var i701 = i699[18]
  var i700 = []
  for(var i = 0; i < i701.length; i += 2) {
  request.r(i701[i + 0], i701[i + 1], 2, i700, '')
  }
  i698.sharedMaterials = i700
  i698.receiveShadows = !!i699[19]
  i698.shadowCastingMode = i699[20]
  i698.sortingLayerID = i699[21]
  i698.sortingOrder = i699[22]
  i698.lightmapIndex = i699[23]
  i698.lightmapSceneIndex = i699[24]
  i698.lightmapScaleOffset = new pc.Vec4( i699[25], i699[26], i699[27], i699[28] )
  i698.lightProbeUsage = i699[29]
  i698.reflectionProbeUsage = i699[30]
  return i698
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i702 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i703 = data
  request.r(i703[0], i703[1], 0, i702, 'animatorController')
  request.r(i703[2], i703[3], 0, i702, 'avatar')
  i702.updateMode = i703[4]
  i702.hasTransformHierarchy = !!i703[5]
  i702.applyRootMotion = !!i703[6]
  var i705 = i703[7]
  var i704 = []
  for(var i = 0; i < i705.length; i += 2) {
  request.r(i705[i + 0], i705[i + 1], 2, i704, '')
  }
  i702.humanBones = i704
  i702.enabled = !!i703[8]
  return i702
}

Deserializers["MoveBetweenPoints"] = function (request, data, root) {
  var i708 = root || request.c( 'MoveBetweenPoints' )
  var i709 = data
  request.r(i709[0], i709[1], 0, i708, 'pointA')
  request.r(i709[2], i709[3], 0, i708, 'pointB')
  i708.duration = i709[4]
  return i708
}

Deserializers["PlayerCardUIManager"] = function (request, data, root) {
  var i710 = root || request.c( 'PlayerCardUIManager' )
  var i711 = data
  request.r(i711[0], i711[1], 0, i710, 'cardPanel')
  var i713 = i711[2]
  var i712 = []
  for(var i = 0; i < i713.length; i += 2) {
  request.r(i713[i + 0], i713[i + 1], 2, i712, '')
  }
  i710.extraObjectsToActivate = i712
  i710.waitTime = i711[3]
  var i715 = i711[4]
  var i714 = []
  for(var i = 0; i < i715.length; i += 2) {
  request.r(i715[i + 0], i715[i + 1], 2, i714, '')
  }
  i710.objectsToTurnOnAfterWait = i714
  var i717 = i711[5]
  var i716 = []
  for(var i = 0; i < i717.length; i += 2) {
  request.r(i717[i + 0], i717[i + 1], 2, i716, '')
  }
  i710.objectsToTurnOffAfterWait = i716
  request.r(i711[6], i711[7], 0, i710, 'playerNameText')
  request.r(i711[8], i711[9], 0, i710, 'playerImage')
  return i710
}

Deserializers["Ply_SoundManager"] = function (request, data, root) {
  var i720 = root || request.c( 'Ply_SoundManager' )
  var i721 = data
  i720.fxAudio = request.d('FxAudio', i721[0], i720.fxAudio)
  request.r(i721[1], i721[2], 0, i720, 'bgm1')
  return i720
}

Deserializers["FxAudio"] = function (request, data, root) {
  var i722 = root || request.c( 'FxAudio' )
  var i723 = data
  i722.ClickBox = request.d('SoundData', i723[0], i722.ClickBox)
  i722.Happy = request.d('SoundData', i723[1], i722.Happy)
  i722.Wrong = request.d('SoundData', i723[2], i722.Wrong)
  i722.Spray = request.d('SoundData', i723[3], i722.Spray)
  i722.Brush = request.d('SoundData', i723[4], i722.Brush)
  i722.Keo = request.d('SoundData', i723[5], i722.Keo)
  return i722
}

Deserializers["SoundData"] = function (request, data, root) {
  var i724 = root || request.c( 'SoundData' )
  var i725 = data
  request.r(i725[0], i725[1], 0, i724, 'clip')
  i724.repeatCount = i725[2]
  return i724
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i726 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i727 = data
  request.r(i727[0], i727[1], 0, i726, 'clip')
  request.r(i727[2], i727[3], 0, i726, 'outputAudioMixerGroup')
  i726.playOnAwake = !!i727[4]
  i726.loop = !!i727[5]
  i726.time = i727[6]
  i726.volume = i727[7]
  i726.pitch = i727[8]
  i726.enabled = !!i727[9]
  return i726
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i728 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i729 = data
  i728.pivot = new pc.Vec2( i729[0], i729[1] )
  i728.anchorMin = new pc.Vec2( i729[2], i729[3] )
  i728.anchorMax = new pc.Vec2( i729[4], i729[5] )
  i728.sizeDelta = new pc.Vec2( i729[6], i729[7] )
  i728.anchoredPosition3D = new pc.Vec3( i729[8], i729[9], i729[10] )
  i728.rotation = new pc.Quat(i729[11], i729[12], i729[13], i729[14])
  i728.scale = new pc.Vec3( i729[15], i729[16], i729[17] )
  return i728
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i730 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i731 = data
  i730.planeDistance = i731[0]
  i730.referencePixelsPerUnit = i731[1]
  i730.isFallbackOverlay = !!i731[2]
  i730.renderMode = i731[3]
  i730.renderOrder = i731[4]
  i730.sortingLayerName = i731[5]
  i730.sortingOrder = i731[6]
  i730.scaleFactor = i731[7]
  request.r(i731[8], i731[9], 0, i730, 'worldCamera')
  i730.overrideSorting = !!i731[10]
  i730.pixelPerfect = !!i731[11]
  i730.targetDisplay = i731[12]
  i730.overridePixelPerfect = !!i731[13]
  i730.enabled = !!i731[14]
  return i730
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i732 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i733 = data
  i732.m_UiScaleMode = i733[0]
  i732.m_ReferencePixelsPerUnit = i733[1]
  i732.m_ScaleFactor = i733[2]
  i732.m_ReferenceResolution = new pc.Vec2( i733[3], i733[4] )
  i732.m_ScreenMatchMode = i733[5]
  i732.m_MatchWidthOrHeight = i733[6]
  i732.m_PhysicalUnit = i733[7]
  i732.m_FallbackScreenDPI = i733[8]
  i732.m_DefaultSpriteDPI = i733[9]
  i732.m_DynamicPixelsPerUnit = i733[10]
  i732.m_PresetInfoIsWorld = !!i733[11]
  return i732
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i734 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i735 = data
  i734.m_IgnoreReversedGraphics = !!i735[0]
  i734.m_BlockingObjects = i735[1]
  i734.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i735[2] )
  return i734
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i736 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i737 = data
  i736.cullTransparentMesh = !!i737[0]
  return i736
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i738 = root || request.c( 'UnityEngine.UI.Image' )
  var i739 = data
  request.r(i739[0], i739[1], 0, i738, 'm_Sprite')
  i738.m_Type = i739[2]
  i738.m_PreserveAspect = !!i739[3]
  i738.m_FillCenter = !!i739[4]
  i738.m_FillMethod = i739[5]
  i738.m_FillAmount = i739[6]
  i738.m_FillClockwise = !!i739[7]
  i738.m_FillOrigin = i739[8]
  i738.m_UseSpriteMesh = !!i739[9]
  i738.m_PixelsPerUnitMultiplier = i739[10]
  request.r(i739[11], i739[12], 0, i738, 'm_Material')
  i738.m_Maskable = !!i739[13]
  i738.m_Color = new pc.Color(i739[14], i739[15], i739[16], i739[17])
  i738.m_RaycastTarget = !!i739[18]
  i738.m_RaycastPadding = new pc.Vec4( i739[19], i739[20], i739[21], i739[22] )
  return i738
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i740 = root || request.c( 'UnityEngine.UI.Button' )
  var i741 = data
  i740.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i741[0], i740.m_OnClick)
  i740.m_Navigation = request.d('UnityEngine.UI.Navigation', i741[1], i740.m_Navigation)
  i740.m_Transition = i741[2]
  i740.m_Colors = request.d('UnityEngine.UI.ColorBlock', i741[3], i740.m_Colors)
  i740.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i741[4], i740.m_SpriteState)
  i740.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i741[5], i740.m_AnimationTriggers)
  i740.m_Interactable = !!i741[6]
  request.r(i741[7], i741[8], 0, i740, 'm_TargetGraphic')
  return i740
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i742 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i743 = data
  i742.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i743[0], i742.m_PersistentCalls)
  return i742
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i744 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i745 = data
  var i747 = i745[0]
  var i746 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i747.length; i += 1) {
    i746.add(request.d('UnityEngine.Events.PersistentCall', i747[i + 0]));
  }
  i744.m_Calls = i746
  return i744
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i750 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i751 = data
  request.r(i751[0], i751[1], 0, i750, 'm_Target')
  i750.m_TargetAssemblyTypeName = i751[2]
  i750.m_MethodName = i751[3]
  i750.m_Mode = i751[4]
  i750.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i751[5], i750.m_Arguments)
  i750.m_CallState = i751[6]
  return i750
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i752 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i753 = data
  request.r(i753[0], i753[1], 0, i752, 'm_ObjectArgument')
  i752.m_ObjectArgumentAssemblyTypeName = i753[2]
  i752.m_IntArgument = i753[3]
  i752.m_FloatArgument = i753[4]
  i752.m_StringArgument = i753[5]
  i752.m_BoolArgument = !!i753[6]
  return i752
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i754 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i755 = data
  i754.m_Mode = i755[0]
  i754.m_WrapAround = !!i755[1]
  request.r(i755[2], i755[3], 0, i754, 'm_SelectOnUp')
  request.r(i755[4], i755[5], 0, i754, 'm_SelectOnDown')
  request.r(i755[6], i755[7], 0, i754, 'm_SelectOnLeft')
  request.r(i755[8], i755[9], 0, i754, 'm_SelectOnRight')
  return i754
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i756 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i757 = data
  i756.m_NormalColor = new pc.Color(i757[0], i757[1], i757[2], i757[3])
  i756.m_HighlightedColor = new pc.Color(i757[4], i757[5], i757[6], i757[7])
  i756.m_PressedColor = new pc.Color(i757[8], i757[9], i757[10], i757[11])
  i756.m_SelectedColor = new pc.Color(i757[12], i757[13], i757[14], i757[15])
  i756.m_DisabledColor = new pc.Color(i757[16], i757[17], i757[18], i757[19])
  i756.m_ColorMultiplier = i757[20]
  i756.m_FadeDuration = i757[21]
  return i756
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i758 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i759 = data
  request.r(i759[0], i759[1], 0, i758, 'm_HighlightedSprite')
  request.r(i759[2], i759[3], 0, i758, 'm_PressedSprite')
  request.r(i759[4], i759[5], 0, i758, 'm_SelectedSprite')
  request.r(i759[6], i759[7], 0, i758, 'm_DisabledSprite')
  return i758
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i760 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i761 = data
  i760.m_NormalTrigger = i761[0]
  i760.m_HighlightedTrigger = i761[1]
  i760.m_PressedTrigger = i761[2]
  i760.m_SelectedTrigger = i761[3]
  i760.m_DisabledTrigger = i761[4]
  return i760
}

Deserializers["HairCutController"] = function (request, data, root) {
  var i762 = root || request.c( 'HairCutController' )
  var i763 = data
  request.r(i763[0], i763[1], 0, i762, 'scissors')
  request.r(i763[2], i763[3], 0, i762, 'scissorsAnimator')
  request.r(i763[4], i763[5], 0, i762, 'targetAnimatorToDisable')
  request.r(i763[6], i763[7], 0, i762, 'linePointA')
  request.r(i763[8], i763[9], 0, i762, 'linePointB')
  i762.scissorMoveDuration = i763[10]
  var i765 = i763[11]
  var i764 = []
  for(var i = 0; i < i765.length; i += 2) {
  request.r(i765[i + 0], i765[i + 1], 2, i764, '')
  }
  i762.allMasks = i764
  request.r(i763[12], i763[13], 0, i762, 'fallingHairParent')
  var i767 = i763[14]
  var i766 = []
  for(var i = 0; i < i767.length; i += 2) {
  request.r(i767[i + 0], i767[i + 1], 2, i766, '')
  }
  i762.fallingHairRenderers = i766
  request.r(i763[15], i763[16], 0, i762, 'scissorsCollider')
  request.r(i763[17], i763[18], 0, i762, 'targetCollider')
  request.r(i763[19], i763[20], 0, i762, 'winObjectToEnable')
  var i769 = i763[21]
  var i768 = []
  for(var i = 0; i < i769.length; i += 2) {
  request.r(i769[i + 0], i769[i + 1], 2, i768, '')
  }
  i762.winObjectsToEnable = i768
  request.r(i763[22], i763[23], 0, i762, 'winObjectToDisable')
  var i771 = i763[24]
  var i770 = []
  for(var i = 0; i < i771.length; i += 2) {
  request.r(i771[i + 0], i771[i + 1], 2, i770, '')
  }
  i762.winObjectsToDisable = i770
  request.r(i763[25], i763[26], 0, i762, 'lossSpriteRenderer')
  request.r(i763[27], i763[28], 0, i762, 'lossSprite')
  request.r(i763[29], i763[30], 0, i762, 'lossObjectToEnable')
  var i773 = i763[31]
  var i772 = []
  for(var i = 0; i < i773.length; i += 2) {
  request.r(i773[i + 0], i773[i + 1], 2, i772, '')
  }
  i762.lossObjectsToEnable = i772
  i762.endDelay = i763[32]
  i762.immediateEndGameOnLoss = !!i763[33]
  var i775 = i763[34]
  var i774 = []
  for(var i = 0; i < i775.length; i += 2) {
  request.r(i775[i + 0], i775[i + 1], 2, i774, '')
  }
  i762.afterEndDisableObjects = i774
  var i777 = i763[35]
  var i776 = []
  for(var i = 0; i < i777.length; i += 2) {
  request.r(i777[i + 0], i777[i + 1], 2, i776, '')
  }
  i762.afterEndEnableObjects = i776
  request.r(i763[36], i763[37], 0, i762, 'tutObject')
  request.r(i763[38], i763[39], 0, i762, 'animatorToEnableOnFirstTap')
  i762.firstTapTriggerName = i763[40]
  request.r(i763[41], i763[42], 0, i762, 'objectToDisableOnComplete')
  var i779 = i763[43]
  var i778 = []
  for(var i = 0; i < i779.length; i += 2) {
  request.r(i779[i + 0], i779[i + 1], 2, i778, '')
  }
  i762.objectsToDisableOnComplete = i778
  i762.fallDistance = i763[44]
  i762.fallDuration = i763[45]
  i762.fadeDuration = i763[46]
  return i762
}

Deserializers["HideOnFirstClick"] = function (request, data, root) {
  var i784 = root || request.c( 'HideOnFirstClick' )
  var i785 = data
  request.r(i785[0], i785[1], 0, i784, 'objectToHide')
  return i784
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteMask"] = function (request, data, root) {
  var i786 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteMask' )
  var i787 = data
  i786.frontSortingLayerID = i787[0]
  i786.frontSortingOrder = i787[1]
  i786.backSortingLayerID = i787[2]
  i786.backSortingOrder = i787[3]
  i786.alphaCutoff = i787[4]
  request.r(i787[5], i787[6], 0, i786, 'sprite')
  i786.tileMode = i787[7]
  i786.isCustomRangeActive = !!i787[8]
  i786.spriteSortPoint = i787[9]
  i786.enabled = !!i787[10]
  request.r(i787[11], i787[12], 0, i786, 'sharedMaterial')
  var i789 = i787[13]
  var i788 = []
  for(var i = 0; i < i789.length; i += 2) {
  request.r(i789[i + 0], i789[i + 1], 2, i788, '')
  }
  i786.sharedMaterials = i788
  i786.receiveShadows = !!i787[14]
  i786.shadowCastingMode = i787[15]
  i786.sortingLayerID = i787[16]
  i786.sortingOrder = i787[17]
  i786.lightmapIndex = i787[18]
  i786.lightmapSceneIndex = i787[19]
  i786.lightmapScaleOffset = new pc.Vec4( i787[20], i787[21], i787[22], i787[23] )
  i786.lightProbeUsage = i787[24]
  i786.reflectionProbeUsage = i787[25]
  return i786
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i790 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i791 = data
  i790.usedByComposite = !!i791[0]
  i790.autoTiling = !!i791[1]
  i790.size = new pc.Vec2( i791[2], i791[3] )
  i790.edgeRadius = i791[4]
  i790.enabled = !!i791[5]
  i790.isTrigger = !!i791[6]
  i790.usedByEffector = !!i791[7]
  i790.density = i791[8]
  i790.offset = new pc.Vec2( i791[9], i791[10] )
  request.r(i791[11], i791[12], 0, i790, 'material')
  return i790
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i792 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i793 = data
  request.r(i793[0], i793[1], 0, i792, 'm_FirstSelected')
  i792.m_sendNavigationEvents = !!i793[2]
  i792.m_DragThreshold = i793[3]
  return i792
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i794 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i795 = data
  i794.m_HorizontalAxis = i795[0]
  i794.m_VerticalAxis = i795[1]
  i794.m_SubmitButton = i795[2]
  i794.m_CancelButton = i795[3]
  i794.m_InputActionsPerSecond = i795[4]
  i794.m_RepeatDelay = i795[5]
  i794.m_ForceModuleActive = !!i795[6]
  i794.m_SendPointerHoverToParent = !!i795[7]
  return i794
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i796 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i797 = data
  i796.ambientIntensity = i797[0]
  i796.reflectionIntensity = i797[1]
  i796.ambientMode = i797[2]
  i796.ambientLight = new pc.Color(i797[3], i797[4], i797[5], i797[6])
  i796.ambientSkyColor = new pc.Color(i797[7], i797[8], i797[9], i797[10])
  i796.ambientGroundColor = new pc.Color(i797[11], i797[12], i797[13], i797[14])
  i796.ambientEquatorColor = new pc.Color(i797[15], i797[16], i797[17], i797[18])
  i796.fogColor = new pc.Color(i797[19], i797[20], i797[21], i797[22])
  i796.fogEndDistance = i797[23]
  i796.fogStartDistance = i797[24]
  i796.fogDensity = i797[25]
  i796.fog = !!i797[26]
  request.r(i797[27], i797[28], 0, i796, 'skybox')
  i796.fogMode = i797[29]
  var i799 = i797[30]
  var i798 = []
  for(var i = 0; i < i799.length; i += 1) {
    i798.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i799[i + 0]) );
  }
  i796.lightmaps = i798
  i796.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i797[31], i796.lightProbes)
  i796.lightmapsMode = i797[32]
  i796.mixedBakeMode = i797[33]
  i796.environmentLightingMode = i797[34]
  i796.ambientProbe = new pc.SphericalHarmonicsL2(i797[35])
  i796.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i797[36])
  i796.useReferenceAmbientProbe = !!i797[37]
  request.r(i797[38], i797[39], 0, i796, 'customReflection')
  request.r(i797[40], i797[41], 0, i796, 'defaultReflection')
  i796.defaultReflectionMode = i797[42]
  i796.defaultReflectionResolution = i797[43]
  i796.sunLightObjectId = i797[44]
  i796.pixelLightCount = i797[45]
  i796.defaultReflectionHDR = !!i797[46]
  i796.hasLightDataAsset = !!i797[47]
  i796.hasManualGenerate = !!i797[48]
  return i796
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i802 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i803 = data
  request.r(i803[0], i803[1], 0, i802, 'lightmapColor')
  request.r(i803[2], i803[3], 0, i802, 'lightmapDirection')
  request.r(i803[4], i803[5], 0, i802, 'shadowMask')
  return i802
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i804 = root || new UnityEngine.LightProbes()
  var i805 = data
  return i804
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i812 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i813 = data
  var i815 = i813[0]
  var i814 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i815.length; i += 1) {
    i814.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i815[i + 0]));
  }
  i812.ShaderCompilationErrors = i814
  i812.name = i813[1]
  i812.guid = i813[2]
  var i817 = i813[3]
  var i816 = []
  for(var i = 0; i < i817.length; i += 1) {
    i816.push( i817[i + 0] );
  }
  i812.shaderDefinedKeywords = i816
  var i819 = i813[4]
  var i818 = []
  for(var i = 0; i < i819.length; i += 1) {
    i818.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i819[i + 0]) );
  }
  i812.passes = i818
  var i821 = i813[5]
  var i820 = []
  for(var i = 0; i < i821.length; i += 1) {
    i820.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i821[i + 0]) );
  }
  i812.usePasses = i820
  var i823 = i813[6]
  var i822 = []
  for(var i = 0; i < i823.length; i += 1) {
    i822.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i823[i + 0]) );
  }
  i812.defaultParameterValues = i822
  request.r(i813[7], i813[8], 0, i812, 'unityFallbackShader')
  i812.readDepth = !!i813[9]
  i812.hasDepthOnlyPass = !!i813[10]
  i812.isCreatedByShaderGraph = !!i813[11]
  i812.disableBatching = !!i813[12]
  i812.compiled = !!i813[13]
  return i812
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i826 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i827 = data
  i826.shaderName = i827[0]
  i826.errorMessage = i827[1]
  return i826
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i832 = root || new pc.UnityShaderPass()
  var i833 = data
  i832.id = i833[0]
  i832.subShaderIndex = i833[1]
  i832.name = i833[2]
  i832.passType = i833[3]
  i832.grabPassTextureName = i833[4]
  i832.usePass = !!i833[5]
  i832.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i833[6], i832.zTest)
  i832.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i833[7], i832.zWrite)
  i832.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i833[8], i832.culling)
  i832.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i833[9], i832.blending)
  i832.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i833[10], i832.alphaBlending)
  i832.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i833[11], i832.colorWriteMask)
  i832.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i833[12], i832.offsetUnits)
  i832.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i833[13], i832.offsetFactor)
  i832.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i833[14], i832.stencilRef)
  i832.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i833[15], i832.stencilReadMask)
  i832.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i833[16], i832.stencilWriteMask)
  i832.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i833[17], i832.stencilOp)
  i832.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i833[18], i832.stencilOpFront)
  i832.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i833[19], i832.stencilOpBack)
  var i835 = i833[20]
  var i834 = []
  for(var i = 0; i < i835.length; i += 1) {
    i834.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i835[i + 0]) );
  }
  i832.tags = i834
  var i837 = i833[21]
  var i836 = []
  for(var i = 0; i < i837.length; i += 1) {
    i836.push( i837[i + 0] );
  }
  i832.passDefinedKeywords = i836
  var i839 = i833[22]
  var i838 = []
  for(var i = 0; i < i839.length; i += 1) {
    i838.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i839[i + 0]) );
  }
  i832.passDefinedKeywordGroups = i838
  var i841 = i833[23]
  var i840 = []
  for(var i = 0; i < i841.length; i += 1) {
    i840.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i841[i + 0]) );
  }
  i832.variants = i840
  var i843 = i833[24]
  var i842 = []
  for(var i = 0; i < i843.length; i += 1) {
    i842.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i843[i + 0]) );
  }
  i832.excludedVariants = i842
  i832.hasDepthReader = !!i833[25]
  return i832
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i844 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i845 = data
  i844.val = i845[0]
  i844.name = i845[1]
  return i844
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i846 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i847 = data
  i846.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i847[0], i846.src)
  i846.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i847[1], i846.dst)
  i846.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i847[2], i846.op)
  return i846
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i848 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i849 = data
  i848.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i849[0], i848.pass)
  i848.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i849[1], i848.fail)
  i848.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i849[2], i848.zFail)
  i848.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i849[3], i848.comp)
  return i848
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i852 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i853 = data
  i852.name = i853[0]
  i852.value = i853[1]
  return i852
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i856 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i857 = data
  var i859 = i857[0]
  var i858 = []
  for(var i = 0; i < i859.length; i += 1) {
    i858.push( i859[i + 0] );
  }
  i856.keywords = i858
  i856.hasDiscard = !!i857[1]
  return i856
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i862 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i863 = data
  i862.passId = i863[0]
  i862.subShaderIndex = i863[1]
  var i865 = i863[2]
  var i864 = []
  for(var i = 0; i < i865.length; i += 1) {
    i864.push( i865[i + 0] );
  }
  i862.keywords = i864
  i862.vertexProgram = i863[3]
  i862.fragmentProgram = i863[4]
  i862.exportedForWebGl2 = !!i863[5]
  i862.readDepth = !!i863[6]
  return i862
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i868 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i869 = data
  request.r(i869[0], i869[1], 0, i868, 'shader')
  i868.pass = i869[2]
  return i868
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i872 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i873 = data
  i872.name = i873[0]
  i872.type = i873[1]
  i872.value = new pc.Vec4( i873[2], i873[3], i873[4], i873[5] )
  i872.textureValue = i873[6]
  i872.shaderPropertyFlag = i873[7]
  return i872
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i874 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i875 = data
  i874.name = i875[0]
  request.r(i875[1], i875[2], 0, i874, 'texture')
  i874.aabb = i875[3]
  i874.vertices = i875[4]
  i874.triangles = i875[5]
  i874.textureRect = UnityEngine.Rect.MinMaxRect(i875[6], i875[7], i875[8], i875[9])
  i874.packedRect = UnityEngine.Rect.MinMaxRect(i875[10], i875[11], i875[12], i875[13])
  i874.border = new pc.Vec4( i875[14], i875[15], i875[16], i875[17] )
  i874.transparency = i875[18]
  i874.bounds = i875[19]
  i874.pixelsPerUnit = i875[20]
  i874.textureWidth = i875[21]
  i874.textureHeight = i875[22]
  i874.nativeSize = new pc.Vec2( i875[23], i875[24] )
  i874.pivot = new pc.Vec2( i875[25], i875[26] )
  i874.textureRectOffset = new pc.Vec2( i875[27], i875[28] )
  return i874
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i876 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i877 = data
  i876.name = i877[0]
  return i876
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i878 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i879 = data
  i878.name = i879[0]
  i878.wrapMode = i879[1]
  i878.isLooping = !!i879[2]
  i878.length = i879[3]
  var i881 = i879[4]
  var i880 = []
  for(var i = 0; i < i881.length; i += 1) {
    i880.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i881[i + 0]) );
  }
  i878.curves = i880
  var i883 = i879[5]
  var i882 = []
  for(var i = 0; i < i883.length; i += 1) {
    i882.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i883[i + 0]) );
  }
  i878.events = i882
  i878.halfPrecision = !!i879[6]
  i878._frameRate = i879[7]
  i878.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i879[8], i878.localBounds)
  i878.hasMuscleCurves = !!i879[9]
  var i885 = i879[10]
  var i884 = []
  for(var i = 0; i < i885.length; i += 1) {
    i884.push( i885[i + 0] );
  }
  i878.clipMuscleConstant = i884
  i878.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i879[11], i878.clipBindingConstant)
  return i878
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i888 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i889 = data
  i888.path = i889[0]
  i888.hash = i889[1]
  i888.componentType = i889[2]
  i888.property = i889[3]
  i888.keys = i889[4]
  var i891 = i889[5]
  var i890 = []
  for(var i = 0; i < i891.length; i += 1) {
    i890.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i891[i + 0]) );
  }
  i888.objectReferenceKeys = i890
  return i888
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i894 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i895 = data
  i894.time = i895[0]
  request.r(i895[1], i895[2], 0, i894, 'value')
  return i894
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i898 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i899 = data
  i898.functionName = i899[0]
  i898.floatParameter = i899[1]
  i898.intParameter = i899[2]
  i898.stringParameter = i899[3]
  request.r(i899[4], i899[5], 0, i898, 'objectReferenceParameter')
  i898.time = i899[6]
  return i898
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i900 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i901 = data
  i900.center = new pc.Vec3( i901[0], i901[1], i901[2] )
  i900.extends = new pc.Vec3( i901[3], i901[4], i901[5] )
  return i900
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i904 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i905 = data
  var i907 = i905[0]
  var i906 = []
  for(var i = 0; i < i907.length; i += 1) {
    i906.push( i907[i + 0] );
  }
  i904.genericBindings = i906
  var i909 = i905[1]
  var i908 = []
  for(var i = 0; i < i909.length; i += 1) {
    i908.push( i909[i + 0] );
  }
  i904.pptrCurveMapping = i908
  return i904
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i910 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i911 = data
  i910.name = i911[0]
  var i913 = i911[1]
  var i912 = []
  for(var i = 0; i < i913.length; i += 1) {
    i912.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i913[i + 0]) );
  }
  i910.layers = i912
  var i915 = i911[2]
  var i914 = []
  for(var i = 0; i < i915.length; i += 1) {
    i914.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i915[i + 0]) );
  }
  i910.parameters = i914
  i910.animationClips = i911[3]
  i910.avatarUnsupported = i911[4]
  return i910
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i918 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i919 = data
  i918.name = i919[0]
  i918.defaultWeight = i919[1]
  i918.blendingMode = i919[2]
  i918.avatarMask = i919[3]
  i918.syncedLayerIndex = i919[4]
  i918.syncedLayerAffectsTiming = !!i919[5]
  i918.syncedLayers = i919[6]
  i918.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i919[7], i918.stateMachine)
  return i918
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i920 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i921 = data
  i920.id = i921[0]
  i920.name = i921[1]
  i920.path = i921[2]
  var i923 = i921[3]
  var i922 = []
  for(var i = 0; i < i923.length; i += 1) {
    i922.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i923[i + 0]) );
  }
  i920.states = i922
  var i925 = i921[4]
  var i924 = []
  for(var i = 0; i < i925.length; i += 1) {
    i924.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i925[i + 0]) );
  }
  i920.machines = i924
  var i927 = i921[5]
  var i926 = []
  for(var i = 0; i < i927.length; i += 1) {
    i926.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i927[i + 0]) );
  }
  i920.entryStateTransitions = i926
  var i929 = i921[6]
  var i928 = []
  for(var i = 0; i < i929.length; i += 1) {
    i928.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i929[i + 0]) );
  }
  i920.exitStateTransitions = i928
  var i931 = i921[7]
  var i930 = []
  for(var i = 0; i < i931.length; i += 1) {
    i930.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i931[i + 0]) );
  }
  i920.anyStateTransitions = i930
  i920.defaultStateId = i921[8]
  return i920
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i934 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i935 = data
  i934.id = i935[0]
  i934.name = i935[1]
  i934.cycleOffset = i935[2]
  i934.cycleOffsetParameter = i935[3]
  i934.cycleOffsetParameterActive = !!i935[4]
  i934.mirror = !!i935[5]
  i934.mirrorParameter = i935[6]
  i934.mirrorParameterActive = !!i935[7]
  i934.motionId = i935[8]
  i934.nameHash = i935[9]
  i934.fullPathHash = i935[10]
  i934.speed = i935[11]
  i934.speedParameter = i935[12]
  i934.speedParameterActive = !!i935[13]
  i934.tag = i935[14]
  i934.tagHash = i935[15]
  i934.writeDefaultValues = !!i935[16]
  var i937 = i935[17]
  var i936 = []
  for(var i = 0; i < i937.length; i += 2) {
  request.r(i937[i + 0], i937[i + 1], 2, i936, '')
  }
  i934.behaviours = i936
  var i939 = i935[18]
  var i938 = []
  for(var i = 0; i < i939.length; i += 1) {
    i938.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i939[i + 0]) );
  }
  i934.transitions = i938
  return i934
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i944 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i945 = data
  i944.fullPath = i945[0]
  i944.canTransitionToSelf = !!i945[1]
  i944.duration = i945[2]
  i944.exitTime = i945[3]
  i944.hasExitTime = !!i945[4]
  i944.hasFixedDuration = !!i945[5]
  i944.interruptionSource = i945[6]
  i944.offset = i945[7]
  i944.orderedInterruption = !!i945[8]
  i944.destinationStateId = i945[9]
  i944.isExit = !!i945[10]
  i944.mute = !!i945[11]
  i944.solo = !!i945[12]
  var i947 = i945[13]
  var i946 = []
  for(var i = 0; i < i947.length; i += 1) {
    i946.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i947[i + 0]) );
  }
  i944.conditions = i946
  return i944
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i952 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i953 = data
  i952.destinationStateId = i953[0]
  i952.isExit = !!i953[1]
  i952.mute = !!i953[2]
  i952.solo = !!i953[3]
  var i955 = i953[4]
  var i954 = []
  for(var i = 0; i < i955.length; i += 1) {
    i954.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i955[i + 0]) );
  }
  i952.conditions = i954
  return i952
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i958 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i959 = data
  i958.defaultBool = !!i959[0]
  i958.defaultFloat = i959[1]
  i958.defaultInt = i959[2]
  i958.name = i959[3]
  i958.nameHash = i959[4]
  i958.type = i959[5]
  return i958
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i962 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i963 = data
  i962.mode = i963[0]
  i962.parameter = i963[1]
  i962.threshold = i963[2]
  return i962
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i964 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i965 = data
  i964.name = i965[0]
  i964.bytes64 = i965[1]
  i964.data = i965[2]
  return i964
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i966 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i967 = data
  i966.useSafeMode = !!i967[0]
  i966.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i967[1], i966.safeModeOptions)
  i966.timeScale = i967[2]
  i966.unscaledTimeScale = i967[3]
  i966.useSmoothDeltaTime = !!i967[4]
  i966.maxSmoothUnscaledTime = i967[5]
  i966.rewindCallbackMode = i967[6]
  i966.showUnityEditorReport = !!i967[7]
  i966.logBehaviour = i967[8]
  i966.drawGizmos = !!i967[9]
  i966.defaultRecyclable = !!i967[10]
  i966.defaultAutoPlay = i967[11]
  i966.defaultUpdateType = i967[12]
  i966.defaultTimeScaleIndependent = !!i967[13]
  i966.defaultEaseType = i967[14]
  i966.defaultEaseOvershootOrAmplitude = i967[15]
  i966.defaultEasePeriod = i967[16]
  i966.defaultAutoKill = !!i967[17]
  i966.defaultLoopType = i967[18]
  i966.debugMode = !!i967[19]
  i966.debugStoreTargetId = !!i967[20]
  i966.showPreviewPanel = !!i967[21]
  i966.storeSettingsLocation = i967[22]
  i966.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i967[23], i966.modules)
  i966.createASMDEF = !!i967[24]
  i966.showPlayingTweens = !!i967[25]
  i966.showPausedTweens = !!i967[26]
  return i966
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i968 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i969 = data
  i968.logBehaviour = i969[0]
  i968.nestedTweenFailureBehaviour = i969[1]
  return i968
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i970 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i971 = data
  i970.showPanel = !!i971[0]
  i970.audioEnabled = !!i971[1]
  i970.physicsEnabled = !!i971[2]
  i970.physics2DEnabled = !!i971[3]
  i970.spriteEnabled = !!i971[4]
  i970.uiEnabled = !!i971[5]
  i970.uiToolkitEnabled = !!i971[6]
  i970.textMeshProEnabled = !!i971[7]
  i970.tk2DEnabled = !!i971[8]
  i970.deAudioEnabled = !!i971[9]
  i970.deUnityExtendedEnabled = !!i971[10]
  i970.epoOutlineEnabled = !!i971[11]
  return i970
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i972 = root || request.c( 'TMPro.TMP_Settings' )
  var i973 = data
  i972.assetVersion = i973[0]
  i972.m_TextWrappingMode = i973[1]
  i972.m_enableKerning = !!i973[2]
  var i975 = i973[3]
  var i974 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i975.length; i += 1) {
    i974.add(i975[i + 0]);
  }
  i972.m_ActiveFontFeatures = i974
  i972.m_enableExtraPadding = !!i973[4]
  i972.m_enableTintAllSprites = !!i973[5]
  i972.m_enableParseEscapeCharacters = !!i973[6]
  i972.m_EnableRaycastTarget = !!i973[7]
  i972.m_GetFontFeaturesAtRuntime = !!i973[8]
  i972.m_missingGlyphCharacter = i973[9]
  i972.m_ClearDynamicDataOnBuild = !!i973[10]
  i972.m_warningsDisabled = !!i973[11]
  request.r(i973[12], i973[13], 0, i972, 'm_defaultFontAsset')
  i972.m_defaultFontAssetPath = i973[14]
  i972.m_defaultFontSize = i973[15]
  i972.m_defaultAutoSizeMinRatio = i973[16]
  i972.m_defaultAutoSizeMaxRatio = i973[17]
  i972.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i973[18], i973[19] )
  i972.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i973[20], i973[21] )
  i972.m_autoSizeTextContainer = !!i973[22]
  i972.m_IsTextObjectScaleStatic = !!i973[23]
  var i977 = i973[24]
  var i976 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i977.length; i += 2) {
  request.r(i977[i + 0], i977[i + 1], 1, i976, '')
  }
  i972.m_fallbackFontAssets = i976
  i972.m_matchMaterialPreset = !!i973[25]
  i972.m_HideSubTextObjects = !!i973[26]
  request.r(i973[27], i973[28], 0, i972, 'm_defaultSpriteAsset')
  i972.m_defaultSpriteAssetPath = i973[29]
  i972.m_enableEmojiSupport = !!i973[30]
  i972.m_MissingCharacterSpriteUnicode = i973[31]
  var i979 = i973[32]
  var i978 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i979.length; i += 2) {
  request.r(i979[i + 0], i979[i + 1], 1, i978, '')
  }
  i972.m_EmojiFallbackTextAssets = i978
  i972.m_defaultColorGradientPresetsPath = i973[33]
  request.r(i973[34], i973[35], 0, i972, 'm_defaultStyleSheet')
  i972.m_StyleSheetsResourcePath = i973[36]
  request.r(i973[37], i973[38], 0, i972, 'm_leadingCharacters')
  request.r(i973[39], i973[40], 0, i972, 'm_followingCharacters')
  i972.m_UseModernHangulLineBreakingRules = !!i973[41]
  return i972
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i986 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i987 = data
  request.r(i987[0], i987[1], 0, i986, 'spriteSheet')
  var i989 = i987[2]
  var i988 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i989.length; i += 1) {
    i988.add(request.d('TMPro.TMP_Sprite', i989[i + 0]));
  }
  i986.spriteInfoList = i988
  var i991 = i987[3]
  var i990 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i991.length; i += 2) {
  request.r(i991[i + 0], i991[i + 1], 1, i990, '')
  }
  i986.fallbackSpriteAssets = i990
  var i993 = i987[4]
  var i992 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i993.length; i += 1) {
    i992.add(request.d('TMPro.TMP_SpriteCharacter', i993[i + 0]));
  }
  i986.m_SpriteCharacterTable = i992
  var i995 = i987[5]
  var i994 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i995.length; i += 1) {
    i994.add(request.d('TMPro.TMP_SpriteGlyph', i995[i + 0]));
  }
  i986.m_GlyphTable = i994
  i986.m_Version = i987[6]
  i986.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i987[7], i986.m_FaceInfo)
  request.r(i987[8], i987[9], 0, i986, 'm_Material')
  return i986
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i998 = root || request.c( 'TMPro.TMP_Sprite' )
  var i999 = data
  i998.name = i999[0]
  i998.hashCode = i999[1]
  i998.unicode = i999[2]
  i998.pivot = new pc.Vec2( i999[3], i999[4] )
  request.r(i999[5], i999[6], 0, i998, 'sprite')
  i998.id = i999[7]
  i998.x = i999[8]
  i998.y = i999[9]
  i998.width = i999[10]
  i998.height = i999[11]
  i998.xOffset = i999[12]
  i998.yOffset = i999[13]
  i998.xAdvance = i999[14]
  i998.scale = i999[15]
  return i998
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1004 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1005 = data
  i1004.m_Name = i1005[0]
  i1004.m_ElementType = i1005[1]
  i1004.m_Unicode = i1005[2]
  i1004.m_GlyphIndex = i1005[3]
  i1004.m_Scale = i1005[4]
  return i1004
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1008 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1009 = data
  request.r(i1009[0], i1009[1], 0, i1008, 'sprite')
  i1008.m_Index = i1009[2]
  i1008.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1009[3], i1008.m_Metrics)
  i1008.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1009[4], i1008.m_GlyphRect)
  i1008.m_Scale = i1009[5]
  i1008.m_AtlasIndex = i1009[6]
  i1008.m_ClassDefinitionType = i1009[7]
  return i1008
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1010 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1011 = data
  i1010.m_Width = i1011[0]
  i1010.m_Height = i1011[1]
  i1010.m_HorizontalBearingX = i1011[2]
  i1010.m_HorizontalBearingY = i1011[3]
  i1010.m_HorizontalAdvance = i1011[4]
  return i1010
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1012 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1013 = data
  i1012.m_X = i1013[0]
  i1012.m_Y = i1013[1]
  i1012.m_Width = i1013[2]
  i1012.m_Height = i1013[3]
  return i1012
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1014 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1015 = data
  i1014.m_FaceIndex = i1015[0]
  i1014.m_FamilyName = i1015[1]
  i1014.m_StyleName = i1015[2]
  i1014.m_PointSize = i1015[3]
  i1014.m_Scale = i1015[4]
  i1014.m_UnitsPerEM = i1015[5]
  i1014.m_LineHeight = i1015[6]
  i1014.m_AscentLine = i1015[7]
  i1014.m_CapLine = i1015[8]
  i1014.m_MeanLine = i1015[9]
  i1014.m_Baseline = i1015[10]
  i1014.m_DescentLine = i1015[11]
  i1014.m_SuperscriptOffset = i1015[12]
  i1014.m_SuperscriptSize = i1015[13]
  i1014.m_SubscriptOffset = i1015[14]
  i1014.m_SubscriptSize = i1015[15]
  i1014.m_UnderlineOffset = i1015[16]
  i1014.m_UnderlineThickness = i1015[17]
  i1014.m_StrikethroughOffset = i1015[18]
  i1014.m_StrikethroughThickness = i1015[19]
  i1014.m_TabWidth = i1015[20]
  return i1014
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1016 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1017 = data
  var i1019 = i1017[0]
  var i1018 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1019.length; i += 1) {
    i1018.add(request.d('TMPro.TMP_Style', i1019[i + 0]));
  }
  i1016.m_StyleList = i1018
  return i1016
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1022 = root || request.c( 'TMPro.TMP_Style' )
  var i1023 = data
  i1022.m_Name = i1023[0]
  i1022.m_HashCode = i1023[1]
  i1022.m_OpeningDefinition = i1023[2]
  i1022.m_ClosingDefinition = i1023[3]
  i1022.m_OpeningTagArray = i1023[4]
  i1022.m_ClosingTagArray = i1023[5]
  return i1022
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1024 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1025 = data
  var i1027 = i1025[0]
  var i1026 = []
  for(var i = 0; i < i1027.length; i += 1) {
    i1026.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1027[i + 0]) );
  }
  i1024.files = i1026
  i1024.componentToPrefabIds = i1025[1]
  return i1024
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1030 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1031 = data
  i1030.path = i1031[0]
  request.r(i1031[1], i1031[2], 0, i1030, 'unityObject')
  return i1030
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1032 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1033 = data
  var i1035 = i1033[0]
  var i1034 = []
  for(var i = 0; i < i1035.length; i += 1) {
    i1034.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1035[i + 0]) );
  }
  i1032.scriptsExecutionOrder = i1034
  var i1037 = i1033[1]
  var i1036 = []
  for(var i = 0; i < i1037.length; i += 1) {
    i1036.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1037[i + 0]) );
  }
  i1032.sortingLayers = i1036
  var i1039 = i1033[2]
  var i1038 = []
  for(var i = 0; i < i1039.length; i += 1) {
    i1038.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1039[i + 0]) );
  }
  i1032.cullingLayers = i1038
  i1032.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1033[3], i1032.timeSettings)
  i1032.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1033[4], i1032.physicsSettings)
  i1032.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1033[5], i1032.physics2DSettings)
  i1032.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1033[6], i1032.qualitySettings)
  i1032.enableRealtimeShadows = !!i1033[7]
  i1032.enableAutoInstancing = !!i1033[8]
  i1032.enableStaticBatching = !!i1033[9]
  i1032.enableDynamicBatching = !!i1033[10]
  i1032.lightmapEncodingQuality = i1033[11]
  i1032.desiredColorSpace = i1033[12]
  var i1041 = i1033[13]
  var i1040 = []
  for(var i = 0; i < i1041.length; i += 1) {
    i1040.push( i1041[i + 0] );
  }
  i1032.allTags = i1040
  return i1032
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1044 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1045 = data
  i1044.name = i1045[0]
  i1044.value = i1045[1]
  return i1044
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1048 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1049 = data
  i1048.id = i1049[0]
  i1048.name = i1049[1]
  i1048.value = i1049[2]
  return i1048
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1052 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1053 = data
  i1052.id = i1053[0]
  i1052.name = i1053[1]
  return i1052
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1054 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1055 = data
  i1054.fixedDeltaTime = i1055[0]
  i1054.maximumDeltaTime = i1055[1]
  i1054.timeScale = i1055[2]
  i1054.maximumParticleTimestep = i1055[3]
  return i1054
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1056 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1057 = data
  i1056.gravity = new pc.Vec3( i1057[0], i1057[1], i1057[2] )
  i1056.defaultSolverIterations = i1057[3]
  i1056.bounceThreshold = i1057[4]
  i1056.autoSyncTransforms = !!i1057[5]
  i1056.autoSimulation = !!i1057[6]
  var i1059 = i1057[7]
  var i1058 = []
  for(var i = 0; i < i1059.length; i += 1) {
    i1058.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1059[i + 0]) );
  }
  i1056.collisionMatrix = i1058
  return i1056
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1062 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1063 = data
  i1062.enabled = !!i1063[0]
  i1062.layerId = i1063[1]
  i1062.otherLayerId = i1063[2]
  return i1062
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1064 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1065 = data
  request.r(i1065[0], i1065[1], 0, i1064, 'material')
  i1064.gravity = new pc.Vec2( i1065[2], i1065[3] )
  i1064.positionIterations = i1065[4]
  i1064.velocityIterations = i1065[5]
  i1064.velocityThreshold = i1065[6]
  i1064.maxLinearCorrection = i1065[7]
  i1064.maxAngularCorrection = i1065[8]
  i1064.maxTranslationSpeed = i1065[9]
  i1064.maxRotationSpeed = i1065[10]
  i1064.baumgarteScale = i1065[11]
  i1064.baumgarteTOIScale = i1065[12]
  i1064.timeToSleep = i1065[13]
  i1064.linearSleepTolerance = i1065[14]
  i1064.angularSleepTolerance = i1065[15]
  i1064.defaultContactOffset = i1065[16]
  i1064.autoSimulation = !!i1065[17]
  i1064.queriesHitTriggers = !!i1065[18]
  i1064.queriesStartInColliders = !!i1065[19]
  i1064.callbacksOnDisable = !!i1065[20]
  i1064.reuseCollisionCallbacks = !!i1065[21]
  i1064.autoSyncTransforms = !!i1065[22]
  var i1067 = i1065[23]
  var i1066 = []
  for(var i = 0; i < i1067.length; i += 1) {
    i1066.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1067[i + 0]) );
  }
  i1064.collisionMatrix = i1066
  return i1064
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1070 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1071 = data
  i1070.enabled = !!i1071[0]
  i1070.layerId = i1071[1]
  i1070.otherLayerId = i1071[2]
  return i1070
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1072 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1073 = data
  var i1075 = i1073[0]
  var i1074 = []
  for(var i = 0; i < i1075.length; i += 1) {
    i1074.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1075[i + 0]) );
  }
  i1072.qualityLevels = i1074
  var i1077 = i1073[1]
  var i1076 = []
  for(var i = 0; i < i1077.length; i += 1) {
    i1076.push( i1077[i + 0] );
  }
  i1072.names = i1076
  i1072.shadows = i1073[2]
  i1072.anisotropicFiltering = i1073[3]
  i1072.antiAliasing = i1073[4]
  i1072.lodBias = i1073[5]
  i1072.shadowCascades = i1073[6]
  i1072.shadowDistance = i1073[7]
  i1072.shadowmaskMode = i1073[8]
  i1072.shadowProjection = i1073[9]
  i1072.shadowResolution = i1073[10]
  i1072.softParticles = !!i1073[11]
  i1072.softVegetation = !!i1073[12]
  i1072.activeColorSpace = i1073[13]
  i1072.desiredColorSpace = i1073[14]
  i1072.masterTextureLimit = i1073[15]
  i1072.maxQueuedFrames = i1073[16]
  i1072.particleRaycastBudget = i1073[17]
  i1072.pixelLightCount = i1073[18]
  i1072.realtimeReflectionProbes = !!i1073[19]
  i1072.shadowCascade2Split = i1073[20]
  i1072.shadowCascade4Split = new pc.Vec3( i1073[21], i1073[22], i1073[23] )
  i1072.streamingMipmapsActive = !!i1073[24]
  i1072.vSyncCount = i1073[25]
  i1072.asyncUploadBufferSize = i1073[26]
  i1072.asyncUploadTimeSlice = i1073[27]
  i1072.billboardsFaceCameraPosition = !!i1073[28]
  i1072.shadowNearPlaneOffset = i1073[29]
  i1072.streamingMipmapsMemoryBudget = i1073[30]
  i1072.maximumLODLevel = i1073[31]
  i1072.streamingMipmapsAddAllCameras = !!i1073[32]
  i1072.streamingMipmapsMaxLevelReduction = i1073[33]
  i1072.streamingMipmapsRenderersPerFrame = i1073[34]
  i1072.resolutionScalingFixedDPIFactor = i1073[35]
  i1072.streamingMipmapsMaxFileIORequests = i1073[36]
  i1072.currentQualityLevel = i1073[37]
  return i1072
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1082 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1083 = data
  i1082.weight = i1083[0]
  i1082.vertices = i1083[1]
  i1082.normals = i1083[2]
  i1082.tangents = i1083[3]
  return i1082
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.SpriteMask":{"frontSortingLayerID":0,"frontSortingOrder":1,"backSortingLayerID":2,"backSortingOrder":3,"alphaCutoff":4,"sprite":5,"tileMode":7,"isCustomRangeActive":8,"spriteSortPoint":9,"enabled":10,"sharedMaterial":11,"sharedMaterials":13,"receiveShadows":14,"shadowCastingMode":15,"sortingLayerID":16,"sortingOrder":17,"lightmapIndex":18,"lightmapSceneIndex":19,"lightmapScaleOffset":20,"lightProbeUsage":24,"reflectionProbeUsage":25},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"42":[43],"44":[43],"45":[43],"46":[43],"47":[43],"48":[43],"49":[50],"51":[2],"52":[53],"54":[53],"55":[53],"56":[53],"57":[53],"58":[53],"59":[60],"61":[60],"62":[60],"63":[60],"64":[60],"65":[60],"66":[60],"67":[60],"68":[60],"69":[60],"70":[60],"71":[60],"72":[60],"73":[2],"74":[75],"76":[77],"78":[77],"23":[22],"6":[2],"79":[60],"80":[32],"81":[12],"82":[2],"83":[84],"85":[34],"86":[23],"87":[22],"88":[75,22],"89":[22,27],"90":[22],"91":[27,22],"92":[75],"93":[27,22],"94":[22],"95":[96],"97":[96],"98":[96],"99":[22],"100":[22],"26":[23],"28":[27,22],"101":[22],"25":[23],"102":[22],"103":[22],"104":[22],"105":[22],"106":[22],"107":[22],"108":[22],"109":[22],"110":[22],"111":[27,22],"112":[22],"113":[22],"114":[22],"115":[22],"116":[27,22],"117":[22],"118":[34],"119":[34],"35":[34],"120":[34],"121":[2],"122":[2]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.MonoBehaviour","CameraFollow2D","AutoCameraFit","UnityEngine.Transform","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Mesh","UnityEngine.Material","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","MoveBetweenPoints","PlayerCardUIManager","UnityEngine.GameObject","Ply_SoundManager","UnityEngine.AudioClip","UnityEngine.AudioSource","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.UI.Button","HairCutController","UnityEngine.SpriteMask","UnityEngine.BoxCollider2D","HideOnFirstClick","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_FontAsset","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","BatStrikeController","SlotTrigger","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.InputSystem.UI.InputSystemUIInputModule","UnityEngine.InputSystem.UI.TrackedDeviceRaycaster","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.38f1";

Deserializers.productName = "PLY_MiniSoccer";

Deserializers.lunaInitializationTime = "07/15/2026 03:53:54";

Deserializers.lunaDaysRunning = "23.2";

Deserializers.lunaVersion = "7.1.0";

Deserializers.lunaSHA = "cf93782349542fe0b84ad13951a26809f8419628";

Deserializers.creativeName = "PLY_V16";

Deserializers.lunaAppID = "27599";

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

Deserializers.runtimeAnalysisExcludedMethodsCount = "4464";

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

Deserializers.buildID = "0aceab30-d1ce-46c9-9a17-0a1cc9a5f092";

Deserializers.runtimeInitializeOnLoadInfos = [[["Unity","Services","Core","Internal","UnityServicesInitializer","EnableServicesInitializationAsync"],["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["DG","Tweening","DOTween","RuntimeOnLoad"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["Unity","Services","Core","Registration","CorePackageInitializer","InitializeOnLoad"],["Unity","Services","Core","Internal","TaskAsyncOperation","SetScheduler"],["Unity","Services","Core","Environments","Client","Scheduler","EngineStateHelper","Init"],["Unity","Services","Core","Environments","Client","Scheduler","ThreadHelper","Init"],["Ua2CoreInitializeCallback","Register"],["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["Unity","AI","Navigation","NavMeshLink","ClearTrackedList"],["Unity","AI","Navigation","NavMeshSurface","ClearNavMeshSurfaces"],["Unity","AI","Navigation","NavMeshModifierVolume","ClearNavMeshModifiers"],["Unity","AI","Navigation","NavMeshModifier","ClearNavMeshModifiers"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["Unity","Services","Core","Internal","UnityServicesInitializer","CreateStaticInstance"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[["Unity","Services","Core","Environments","Client","Http","JsonHelpers","RegisterTypesForAOT"]],[["Unity","Services","Core","UnityThreadUtils","CaptureUnityThreadInfo"],["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

