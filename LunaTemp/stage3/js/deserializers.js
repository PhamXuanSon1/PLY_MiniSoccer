var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i550 = root || request.c( 'UnityEngine.JointSpring' )
  var i551 = data
  i550.spring = i551[0]
  i550.damper = i551[1]
  i550.targetPosition = i551[2]
  return i550
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i552 = root || request.c( 'UnityEngine.JointMotor' )
  var i553 = data
  i552.m_TargetVelocity = i553[0]
  i552.m_Force = i553[1]
  i552.m_FreeSpin = i553[2]
  return i552
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i554 = root || request.c( 'UnityEngine.JointLimits' )
  var i555 = data
  i554.m_Min = i555[0]
  i554.m_Max = i555[1]
  i554.m_Bounciness = i555[2]
  i554.m_BounceMinVelocity = i555[3]
  i554.m_ContactDistance = i555[4]
  i554.minBounce = i555[5]
  i554.maxBounce = i555[6]
  return i554
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i556 = root || request.c( 'UnityEngine.JointDrive' )
  var i557 = data
  i556.m_PositionSpring = i557[0]
  i556.m_PositionDamper = i557[1]
  i556.m_MaximumForce = i557[2]
  i556.m_UseAcceleration = i557[3]
  return i556
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i558 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i559 = data
  i558.m_Spring = i559[0]
  i558.m_Damper = i559[1]
  return i558
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i560 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i561 = data
  i560.m_Limit = i561[0]
  i560.m_Bounciness = i561[1]
  i560.m_ContactDistance = i561[2]
  return i560
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i562 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i563 = data
  i562.m_ExtremumSlip = i563[0]
  i562.m_ExtremumValue = i563[1]
  i562.m_AsymptoteSlip = i563[2]
  i562.m_AsymptoteValue = i563[3]
  i562.m_Stiffness = i563[4]
  return i562
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i564 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i565 = data
  i564.m_LowerAngle = i565[0]
  i564.m_UpperAngle = i565[1]
  return i564
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i566 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i567 = data
  i566.m_MotorSpeed = i567[0]
  i566.m_MaximumMotorTorque = i567[1]
  return i566
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i568 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i569 = data
  i568.m_DampingRatio = i569[0]
  i568.m_Frequency = i569[1]
  i568.m_Angle = i569[2]
  return i568
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i570 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i571 = data
  i570.m_LowerTranslation = i571[0]
  i570.m_UpperTranslation = i571[1]
  return i570
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i572 = root || new pc.UnityMaterial()
  var i573 = data
  i572.name = i573[0]
  request.r(i573[1], i573[2], 0, i572, 'shader')
  i572.renderQueue = i573[3]
  i572.enableInstancing = !!i573[4]
  var i575 = i573[5]
  var i574 = []
  for(var i = 0; i < i575.length; i += 1) {
    i574.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i575[i + 0]) );
  }
  i572.floatParameters = i574
  var i577 = i573[6]
  var i576 = []
  for(var i = 0; i < i577.length; i += 1) {
    i576.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i577[i + 0]) );
  }
  i572.colorParameters = i576
  var i579 = i573[7]
  var i578 = []
  for(var i = 0; i < i579.length; i += 1) {
    i578.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i579[i + 0]) );
  }
  i572.vectorParameters = i578
  var i581 = i573[8]
  var i580 = []
  for(var i = 0; i < i581.length; i += 1) {
    i580.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i581[i + 0]) );
  }
  i572.textureParameters = i580
  var i583 = i573[9]
  var i582 = []
  for(var i = 0; i < i583.length; i += 1) {
    i582.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i583[i + 0]) );
  }
  i572.materialFlags = i582
  return i572
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i586 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i587 = data
  i586.name = i587[0]
  i586.value = i587[1]
  return i586
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i590 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i591 = data
  i590.name = i591[0]
  i590.value = new pc.Color(i591[1], i591[2], i591[3], i591[4])
  return i590
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i594 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i595 = data
  i594.name = i595[0]
  i594.value = new pc.Vec4( i595[1], i595[2], i595[3], i595[4] )
  return i594
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i598 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i599 = data
  i598.name = i599[0]
  request.r(i599[1], i599[2], 0, i598, 'value')
  return i598
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i602 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i603 = data
  i602.name = i603[0]
  i602.enabled = !!i603[1]
  return i602
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i604 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i605 = data
  i604.name = i605[0]
  i604.width = i605[1]
  i604.height = i605[2]
  i604.mipmapCount = i605[3]
  i604.anisoLevel = i605[4]
  i604.filterMode = i605[5]
  i604.hdr = !!i605[6]
  i604.format = i605[7]
  i604.wrapMode = i605[8]
  i604.alphaIsTransparency = !!i605[9]
  i604.alphaSource = i605[10]
  i604.graphicsFormat = i605[11]
  i604.sRGBTexture = !!i605[12]
  i604.desiredColorSpace = i605[13]
  i604.wrapU = i605[14]
  i604.wrapV = i605[15]
  return i604
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i606 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i607 = data
  i606.name = i607[0]
  i606.halfPrecision = !!i607[1]
  i606.useSimplification = !!i607[2]
  i606.useUInt32IndexFormat = !!i607[3]
  i606.vertexCount = i607[4]
  i606.aabb = i607[5]
  var i609 = i607[6]
  var i608 = []
  for(var i = 0; i < i609.length; i += 1) {
    i608.push( !!i609[i + 0] );
  }
  i606.streams = i608
  i606.vertices = i607[7]
  var i611 = i607[8]
  var i610 = []
  for(var i = 0; i < i611.length; i += 1) {
    i610.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i611[i + 0]) );
  }
  i606.subMeshes = i610
  var i613 = i607[9]
  var i612 = []
  for(var i = 0; i < i613.length; i += 16) {
    i612.push( new pc.Mat4().setData(i613[i + 0], i613[i + 1], i613[i + 2], i613[i + 3],  i613[i + 4], i613[i + 5], i613[i + 6], i613[i + 7],  i613[i + 8], i613[i + 9], i613[i + 10], i613[i + 11],  i613[i + 12], i613[i + 13], i613[i + 14], i613[i + 15]) );
  }
  i606.bindposes = i612
  var i615 = i607[10]
  var i614 = []
  for(var i = 0; i < i615.length; i += 1) {
    i614.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i615[i + 0]) );
  }
  i606.blendShapes = i614
  return i606
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i620 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i621 = data
  i620.triangles = i621[0]
  return i620
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i626 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i627 = data
  i626.name = i627[0]
  var i629 = i627[1]
  var i628 = []
  for(var i = 0; i < i629.length; i += 1) {
    i628.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i629[i + 0]) );
  }
  i626.frames = i628
  return i626
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i630 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i631 = data
  i630.name = i631[0]
  i630.index = i631[1]
  i630.startup = !!i631[2]
  return i630
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i632 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i633 = data
  i632.aspect = i633[0]
  i632.orthographic = !!i633[1]
  i632.orthographicSize = i633[2]
  i632.backgroundColor = new pc.Color(i633[3], i633[4], i633[5], i633[6])
  i632.nearClipPlane = i633[7]
  i632.farClipPlane = i633[8]
  i632.fieldOfView = i633[9]
  i632.depth = i633[10]
  i632.clearFlags = i633[11]
  i632.cullingMask = i633[12]
  i632.rect = i633[13]
  request.r(i633[14], i633[15], 0, i632, 'targetTexture')
  i632.usePhysicalProperties = !!i633[16]
  i632.focalLength = i633[17]
  i632.sensorSize = new pc.Vec2( i633[18], i633[19] )
  i632.lensShift = new pc.Vec2( i633[20], i633[21] )
  i632.gateFit = i633[22]
  i632.commandBufferCount = i633[23]
  i632.cameraType = i633[24]
  i632.enabled = !!i633[25]
  return i632
}

Deserializers["CameraFollow2D"] = function (request, data, root) {
  var i634 = root || request.c( 'CameraFollow2D' )
  var i635 = data
  request.r(i635[0], i635[1], 0, i634, 'target')
  i634.smoothSpeed = i635[2]
  i634.offset = new pc.Vec3( i635[3], i635[4], i635[5] )
  i634.followY = !!i635[6]
  return i634
}

Deserializers["AutoCameraFit"] = function (request, data, root) {
  var i636 = root || request.c( 'AutoCameraFit' )
  var i637 = data
  request.r(i637[0], i637[1], 0, i636, 'tallScreenObject')
  i636.tallScreenRatioThreshold = i637[2]
  i636.tallScreenYOffset = i637[3]
  request.r(i637[4], i637[5], 0, i636, 'canvasBtn')
  request.r(i637[6], i637[7], 0, i636, 'targetArea')
  i636.paddingLandscape = i637[8]
  i636.paddingPortrait = i637[9]
  i636.extraPaddingSmallScreen = i637[10]
  i636.smallScreenThreshold = i637[11]
  i636.autoUpdateOnResize = !!i637[12]
  i636.adjustInEditMode = !!i637[13]
  return i636
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i638 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i639 = data
  i638.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i639[0], i638.main)
  i638.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i639[1], i638.colorBySpeed)
  i638.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i639[2], i638.colorOverLifetime)
  i638.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i639[3], i638.emission)
  i638.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i639[4], i638.rotationBySpeed)
  i638.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i639[5], i638.rotationOverLifetime)
  i638.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i639[6], i638.shape)
  i638.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i639[7], i638.sizeBySpeed)
  i638.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i639[8], i638.sizeOverLifetime)
  i638.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i639[9], i638.textureSheetAnimation)
  i638.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i639[10], i638.velocityOverLifetime)
  i638.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i639[11], i638.noise)
  i638.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i639[12], i638.inheritVelocity)
  i638.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i639[13], i638.forceOverLifetime)
  i638.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i639[14], i638.limitVelocityOverLifetime)
  i638.useAutoRandomSeed = !!i639[15]
  i638.randomSeed = i639[16]
  return i638
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i640 = root || new pc.ParticleSystemMain()
  var i641 = data
  i640.duration = i641[0]
  i640.loop = !!i641[1]
  i640.prewarm = !!i641[2]
  i640.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i641[3], i640.startDelay)
  i640.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i641[4], i640.startLifetime)
  i640.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i641[5], i640.startSpeed)
  i640.startSize3D = !!i641[6]
  i640.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i641[7], i640.startSizeX)
  i640.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i641[8], i640.startSizeY)
  i640.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i641[9], i640.startSizeZ)
  i640.startRotation3D = !!i641[10]
  i640.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i641[11], i640.startRotationX)
  i640.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i641[12], i640.startRotationY)
  i640.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i641[13], i640.startRotationZ)
  i640.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i641[14], i640.startColor)
  i640.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i641[15], i640.gravityModifier)
  i640.simulationSpace = i641[16]
  request.r(i641[17], i641[18], 0, i640, 'customSimulationSpace')
  i640.simulationSpeed = i641[19]
  i640.useUnscaledTime = !!i641[20]
  i640.scalingMode = i641[21]
  i640.playOnAwake = !!i641[22]
  i640.maxParticles = i641[23]
  i640.emitterVelocityMode = i641[24]
  i640.stopAction = i641[25]
  return i640
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i642 = root || new pc.MinMaxCurve()
  var i643 = data
  i642.mode = i643[0]
  i642.curveMin = new pc.AnimationCurve( { keys_flow: i643[1] } )
  i642.curveMax = new pc.AnimationCurve( { keys_flow: i643[2] } )
  i642.curveMultiplier = i643[3]
  i642.constantMin = i643[4]
  i642.constantMax = i643[5]
  return i642
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i644 = root || new pc.MinMaxGradient()
  var i645 = data
  i644.mode = i645[0]
  i644.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i645[1], i644.gradientMin)
  i644.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i645[2], i644.gradientMax)
  i644.colorMin = new pc.Color(i645[3], i645[4], i645[5], i645[6])
  i644.colorMax = new pc.Color(i645[7], i645[8], i645[9], i645[10])
  return i644
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i646 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i647 = data
  i646.mode = i647[0]
  var i649 = i647[1]
  var i648 = []
  for(var i = 0; i < i649.length; i += 1) {
    i648.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i649[i + 0]) );
  }
  i646.colorKeys = i648
  var i651 = i647[2]
  var i650 = []
  for(var i = 0; i < i651.length; i += 1) {
    i650.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i651[i + 0]) );
  }
  i646.alphaKeys = i650
  return i646
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i652 = root || new pc.ParticleSystemColorBySpeed()
  var i653 = data
  i652.enabled = !!i653[0]
  i652.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i653[1], i652.color)
  i652.range = new pc.Vec2( i653[2], i653[3] )
  return i652
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i656 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i657 = data
  i656.color = new pc.Color(i657[0], i657[1], i657[2], i657[3])
  i656.time = i657[4]
  return i656
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i660 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i661 = data
  i660.alpha = i661[0]
  i660.time = i661[1]
  return i660
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i662 = root || new pc.ParticleSystemColorOverLifetime()
  var i663 = data
  i662.enabled = !!i663[0]
  i662.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i663[1], i662.color)
  return i662
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i664 = root || new pc.ParticleSystemEmitter()
  var i665 = data
  i664.enabled = !!i665[0]
  i664.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i665[1], i664.rateOverTime)
  i664.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i665[2], i664.rateOverDistance)
  var i667 = i665[3]
  var i666 = []
  for(var i = 0; i < i667.length; i += 1) {
    i666.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i667[i + 0]) );
  }
  i664.bursts = i666
  return i664
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i670 = root || new pc.ParticleSystemBurst()
  var i671 = data
  i670.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i671[0], i670.count)
  i670.cycleCount = i671[1]
  i670.minCount = i671[2]
  i670.maxCount = i671[3]
  i670.repeatInterval = i671[4]
  i670.time = i671[5]
  return i670
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i672 = root || new pc.ParticleSystemRotationBySpeed()
  var i673 = data
  i672.enabled = !!i673[0]
  i672.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i673[1], i672.x)
  i672.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i673[2], i672.y)
  i672.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i673[3], i672.z)
  i672.separateAxes = !!i673[4]
  i672.range = new pc.Vec2( i673[5], i673[6] )
  return i672
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i674 = root || new pc.ParticleSystemRotationOverLifetime()
  var i675 = data
  i674.enabled = !!i675[0]
  i674.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i675[1], i674.x)
  i674.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i675[2], i674.y)
  i674.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i675[3], i674.z)
  i674.separateAxes = !!i675[4]
  return i674
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i676 = root || new pc.ParticleSystemShape()
  var i677 = data
  i676.enabled = !!i677[0]
  i676.shapeType = i677[1]
  i676.randomDirectionAmount = i677[2]
  i676.sphericalDirectionAmount = i677[3]
  i676.randomPositionAmount = i677[4]
  i676.alignToDirection = !!i677[5]
  i676.radius = i677[6]
  i676.radiusMode = i677[7]
  i676.radiusSpread = i677[8]
  i676.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i677[9], i676.radiusSpeed)
  i676.radiusThickness = i677[10]
  i676.angle = i677[11]
  i676.length = i677[12]
  i676.boxThickness = new pc.Vec3( i677[13], i677[14], i677[15] )
  i676.meshShapeType = i677[16]
  request.r(i677[17], i677[18], 0, i676, 'mesh')
  request.r(i677[19], i677[20], 0, i676, 'meshRenderer')
  request.r(i677[21], i677[22], 0, i676, 'skinnedMeshRenderer')
  i676.useMeshMaterialIndex = !!i677[23]
  i676.meshMaterialIndex = i677[24]
  i676.useMeshColors = !!i677[25]
  i676.normalOffset = i677[26]
  i676.arc = i677[27]
  i676.arcMode = i677[28]
  i676.arcSpread = i677[29]
  i676.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i677[30], i676.arcSpeed)
  i676.donutRadius = i677[31]
  i676.position = new pc.Vec3( i677[32], i677[33], i677[34] )
  i676.rotation = new pc.Vec3( i677[35], i677[36], i677[37] )
  i676.scale = new pc.Vec3( i677[38], i677[39], i677[40] )
  return i676
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i678 = root || new pc.ParticleSystemSizeBySpeed()
  var i679 = data
  i678.enabled = !!i679[0]
  i678.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i679[1], i678.x)
  i678.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i679[2], i678.y)
  i678.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i679[3], i678.z)
  i678.separateAxes = !!i679[4]
  i678.range = new pc.Vec2( i679[5], i679[6] )
  return i678
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i680 = root || new pc.ParticleSystemSizeOverLifetime()
  var i681 = data
  i680.enabled = !!i681[0]
  i680.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i681[1], i680.x)
  i680.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i681[2], i680.y)
  i680.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i681[3], i680.z)
  i680.separateAxes = !!i681[4]
  return i680
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i682 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i683 = data
  i682.enabled = !!i683[0]
  i682.mode = i683[1]
  i682.animation = i683[2]
  i682.numTilesX = i683[3]
  i682.numTilesY = i683[4]
  i682.useRandomRow = !!i683[5]
  i682.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i683[6], i682.frameOverTime)
  i682.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i683[7], i682.startFrame)
  i682.cycleCount = i683[8]
  i682.rowIndex = i683[9]
  i682.flipU = i683[10]
  i682.flipV = i683[11]
  i682.spriteCount = i683[12]
  var i685 = i683[13]
  var i684 = []
  for(var i = 0; i < i685.length; i += 2) {
  request.r(i685[i + 0], i685[i + 1], 2, i684, '')
  }
  i682.sprites = i684
  return i682
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i688 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i689 = data
  i688.enabled = !!i689[0]
  i688.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i689[1], i688.x)
  i688.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i689[2], i688.y)
  i688.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i689[3], i688.z)
  i688.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i689[4], i688.radial)
  i688.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i689[5], i688.speedModifier)
  i688.space = i689[6]
  i688.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i689[7], i688.orbitalX)
  i688.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i689[8], i688.orbitalY)
  i688.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i689[9], i688.orbitalZ)
  i688.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i689[10], i688.orbitalOffsetX)
  i688.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i689[11], i688.orbitalOffsetY)
  i688.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i689[12], i688.orbitalOffsetZ)
  return i688
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i690 = root || new pc.ParticleSystemNoise()
  var i691 = data
  i690.enabled = !!i691[0]
  i690.separateAxes = !!i691[1]
  i690.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i691[2], i690.strengthX)
  i690.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i691[3], i690.strengthY)
  i690.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i691[4], i690.strengthZ)
  i690.frequency = i691[5]
  i690.damping = !!i691[6]
  i690.octaveCount = i691[7]
  i690.octaveMultiplier = i691[8]
  i690.octaveScale = i691[9]
  i690.quality = i691[10]
  i690.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i691[11], i690.scrollSpeed)
  i690.scrollSpeedMultiplier = i691[12]
  i690.remapEnabled = !!i691[13]
  i690.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i691[14], i690.remapX)
  i690.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i691[15], i690.remapY)
  i690.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i691[16], i690.remapZ)
  i690.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i691[17], i690.positionAmount)
  i690.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i691[18], i690.rotationAmount)
  i690.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i691[19], i690.sizeAmount)
  return i690
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i692 = root || new pc.ParticleSystemInheritVelocity()
  var i693 = data
  i692.enabled = !!i693[0]
  i692.mode = i693[1]
  i692.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i693[2], i692.curve)
  return i692
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i694 = root || new pc.ParticleSystemForceOverLifetime()
  var i695 = data
  i694.enabled = !!i695[0]
  i694.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i695[1], i694.x)
  i694.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i695[2], i694.y)
  i694.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i695[3], i694.z)
  i694.space = i695[4]
  i694.randomized = !!i695[5]
  return i694
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i696 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i697 = data
  i696.enabled = !!i697[0]
  i696.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i697[1], i696.limit)
  i696.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i697[2], i696.limitX)
  i696.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i697[3], i696.limitY)
  i696.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i697[4], i696.limitZ)
  i696.dampen = i697[5]
  i696.separateAxes = !!i697[6]
  i696.space = i697[7]
  i696.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i697[8], i696.drag)
  i696.multiplyDragByParticleSize = !!i697[9]
  i696.multiplyDragByParticleVelocity = !!i697[10]
  return i696
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i698 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i699 = data
  request.r(i699[0], i699[1], 0, i698, 'mesh')
  i698.meshCount = i699[2]
  i698.activeVertexStreamsCount = i699[3]
  i698.alignment = i699[4]
  i698.renderMode = i699[5]
  i698.sortMode = i699[6]
  i698.lengthScale = i699[7]
  i698.velocityScale = i699[8]
  i698.cameraVelocityScale = i699[9]
  i698.normalDirection = i699[10]
  i698.sortingFudge = i699[11]
  i698.minParticleSize = i699[12]
  i698.maxParticleSize = i699[13]
  i698.pivot = new pc.Vec3( i699[14], i699[15], i699[16] )
  request.r(i699[17], i699[18], 0, i698, 'trailMaterial')
  i698.applyActiveColorSpace = !!i699[19]
  i698.enabled = !!i699[20]
  request.r(i699[21], i699[22], 0, i698, 'sharedMaterial')
  var i701 = i699[23]
  var i700 = []
  for(var i = 0; i < i701.length; i += 2) {
  request.r(i701[i + 0], i701[i + 1], 2, i700, '')
  }
  i698.sharedMaterials = i700
  i698.receiveShadows = !!i699[24]
  i698.shadowCastingMode = i699[25]
  i698.sortingLayerID = i699[26]
  i698.sortingOrder = i699[27]
  i698.lightmapIndex = i699[28]
  i698.lightmapSceneIndex = i699[29]
  i698.lightmapScaleOffset = new pc.Vec4( i699[30], i699[31], i699[32], i699[33] )
  i698.lightProbeUsage = i699[34]
  i698.reflectionProbeUsage = i699[35]
  return i698
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i704 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i705 = data
  i704.name = i705[0]
  i704.tagId = i705[1]
  i704.enabled = !!i705[2]
  i704.isStatic = !!i705[3]
  i704.layer = i705[4]
  return i704
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i706 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i707 = data
  i706.color = new pc.Color(i707[0], i707[1], i707[2], i707[3])
  request.r(i707[4], i707[5], 0, i706, 'sprite')
  i706.flipX = !!i707[6]
  i706.flipY = !!i707[7]
  i706.drawMode = i707[8]
  i706.size = new pc.Vec2( i707[9], i707[10] )
  i706.tileMode = i707[11]
  i706.adaptiveModeThreshold = i707[12]
  i706.maskInteraction = i707[13]
  i706.spriteSortPoint = i707[14]
  i706.enabled = !!i707[15]
  request.r(i707[16], i707[17], 0, i706, 'sharedMaterial')
  var i709 = i707[18]
  var i708 = []
  for(var i = 0; i < i709.length; i += 2) {
  request.r(i709[i + 0], i709[i + 1], 2, i708, '')
  }
  i706.sharedMaterials = i708
  i706.receiveShadows = !!i707[19]
  i706.shadowCastingMode = i707[20]
  i706.sortingLayerID = i707[21]
  i706.sortingOrder = i707[22]
  i706.lightmapIndex = i707[23]
  i706.lightmapSceneIndex = i707[24]
  i706.lightmapScaleOffset = new pc.Vec4( i707[25], i707[26], i707[27], i707[28] )
  i706.lightProbeUsage = i707[29]
  i706.reflectionProbeUsage = i707[30]
  return i706
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i710 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i711 = data
  request.r(i711[0], i711[1], 0, i710, 'animatorController')
  request.r(i711[2], i711[3], 0, i710, 'avatar')
  i710.updateMode = i711[4]
  i710.hasTransformHierarchy = !!i711[5]
  i710.applyRootMotion = !!i711[6]
  var i713 = i711[7]
  var i712 = []
  for(var i = 0; i < i713.length; i += 2) {
  request.r(i713[i + 0], i713[i + 1], 2, i712, '')
  }
  i710.humanBones = i712
  i710.enabled = !!i711[8]
  return i710
}

Deserializers["MoveBetweenPoints"] = function (request, data, root) {
  var i716 = root || request.c( 'MoveBetweenPoints' )
  var i717 = data
  request.r(i717[0], i717[1], 0, i716, 'pointA')
  request.r(i717[2], i717[3], 0, i716, 'pointB')
  i716.duration = i717[4]
  return i716
}

Deserializers["PlayerCardUIManager"] = function (request, data, root) {
  var i718 = root || request.c( 'PlayerCardUIManager' )
  var i719 = data
  request.r(i719[0], i719[1], 0, i718, 'cardPanel')
  var i721 = i719[2]
  var i720 = []
  for(var i = 0; i < i721.length; i += 2) {
  request.r(i721[i + 0], i721[i + 1], 2, i720, '')
  }
  i718.extraObjectsToActivate = i720
  i718.waitTime = i719[3]
  var i723 = i719[4]
  var i722 = []
  for(var i = 0; i < i723.length; i += 2) {
  request.r(i723[i + 0], i723[i + 1], 2, i722, '')
  }
  i718.objectsToTurnOnAfterWait = i722
  var i725 = i719[5]
  var i724 = []
  for(var i = 0; i < i725.length; i += 2) {
  request.r(i725[i + 0], i725[i + 1], 2, i724, '')
  }
  i718.objectsToTurnOffAfterWait = i724
  request.r(i719[6], i719[7], 0, i718, 'playerNameText')
  request.r(i719[8], i719[9], 0, i718, 'playerImage')
  return i718
}

Deserializers["Ply_SoundManager"] = function (request, data, root) {
  var i728 = root || request.c( 'Ply_SoundManager' )
  var i729 = data
  i728.fxAudio = request.d('FxAudio', i729[0], i728.fxAudio)
  request.r(i729[1], i729[2], 0, i728, 'bgm1')
  return i728
}

Deserializers["FxAudio"] = function (request, data, root) {
  var i730 = root || request.c( 'FxAudio' )
  var i731 = data
  i730.ClickBox = request.d('SoundData', i731[0], i730.ClickBox)
  i730.Happy = request.d('SoundData', i731[1], i730.Happy)
  i730.Wrong = request.d('SoundData', i731[2], i730.Wrong)
  i730.Spray = request.d('SoundData', i731[3], i730.Spray)
  i730.Brush = request.d('SoundData', i731[4], i730.Brush)
  i730.Keo = request.d('SoundData', i731[5], i730.Keo)
  i730.Confetti = request.d('SoundData', i731[6], i730.Confetti)
  i730.Lose2 = request.d('SoundData', i731[7], i730.Lose2)
  return i730
}

Deserializers["SoundData"] = function (request, data, root) {
  var i732 = root || request.c( 'SoundData' )
  var i733 = data
  request.r(i733[0], i733[1], 0, i732, 'clip')
  i732.repeatCount = i733[2]
  return i732
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i734 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i735 = data
  request.r(i735[0], i735[1], 0, i734, 'clip')
  request.r(i735[2], i735[3], 0, i734, 'outputAudioMixerGroup')
  i734.playOnAwake = !!i735[4]
  i734.loop = !!i735[5]
  i734.time = i735[6]
  i734.volume = i735[7]
  i734.pitch = i735[8]
  i734.enabled = !!i735[9]
  return i734
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i736 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i737 = data
  i736.pivot = new pc.Vec2( i737[0], i737[1] )
  i736.anchorMin = new pc.Vec2( i737[2], i737[3] )
  i736.anchorMax = new pc.Vec2( i737[4], i737[5] )
  i736.sizeDelta = new pc.Vec2( i737[6], i737[7] )
  i736.anchoredPosition3D = new pc.Vec3( i737[8], i737[9], i737[10] )
  i736.rotation = new pc.Quat(i737[11], i737[12], i737[13], i737[14])
  i736.scale = new pc.Vec3( i737[15], i737[16], i737[17] )
  return i736
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i738 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i739 = data
  i738.planeDistance = i739[0]
  i738.referencePixelsPerUnit = i739[1]
  i738.isFallbackOverlay = !!i739[2]
  i738.renderMode = i739[3]
  i738.renderOrder = i739[4]
  i738.sortingLayerName = i739[5]
  i738.sortingOrder = i739[6]
  i738.scaleFactor = i739[7]
  request.r(i739[8], i739[9], 0, i738, 'worldCamera')
  i738.overrideSorting = !!i739[10]
  i738.pixelPerfect = !!i739[11]
  i738.targetDisplay = i739[12]
  i738.overridePixelPerfect = !!i739[13]
  i738.enabled = !!i739[14]
  return i738
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i740 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i741 = data
  i740.m_UiScaleMode = i741[0]
  i740.m_ReferencePixelsPerUnit = i741[1]
  i740.m_ScaleFactor = i741[2]
  i740.m_ReferenceResolution = new pc.Vec2( i741[3], i741[4] )
  i740.m_ScreenMatchMode = i741[5]
  i740.m_MatchWidthOrHeight = i741[6]
  i740.m_PhysicalUnit = i741[7]
  i740.m_FallbackScreenDPI = i741[8]
  i740.m_DefaultSpriteDPI = i741[9]
  i740.m_DynamicPixelsPerUnit = i741[10]
  i740.m_PresetInfoIsWorld = !!i741[11]
  return i740
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i742 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i743 = data
  i742.m_IgnoreReversedGraphics = !!i743[0]
  i742.m_BlockingObjects = i743[1]
  i742.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i743[2] )
  return i742
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i744 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i745 = data
  i744.cullTransparentMesh = !!i745[0]
  return i744
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i746 = root || request.c( 'UnityEngine.UI.Image' )
  var i747 = data
  request.r(i747[0], i747[1], 0, i746, 'm_Sprite')
  i746.m_Type = i747[2]
  i746.m_PreserveAspect = !!i747[3]
  i746.m_FillCenter = !!i747[4]
  i746.m_FillMethod = i747[5]
  i746.m_FillAmount = i747[6]
  i746.m_FillClockwise = !!i747[7]
  i746.m_FillOrigin = i747[8]
  i746.m_UseSpriteMesh = !!i747[9]
  i746.m_PixelsPerUnitMultiplier = i747[10]
  request.r(i747[11], i747[12], 0, i746, 'm_Material')
  i746.m_Maskable = !!i747[13]
  i746.m_Color = new pc.Color(i747[14], i747[15], i747[16], i747[17])
  i746.m_RaycastTarget = !!i747[18]
  i746.m_RaycastPadding = new pc.Vec4( i747[19], i747[20], i747[21], i747[22] )
  return i746
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i748 = root || request.c( 'UnityEngine.UI.Button' )
  var i749 = data
  i748.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i749[0], i748.m_OnClick)
  i748.m_Navigation = request.d('UnityEngine.UI.Navigation', i749[1], i748.m_Navigation)
  i748.m_Transition = i749[2]
  i748.m_Colors = request.d('UnityEngine.UI.ColorBlock', i749[3], i748.m_Colors)
  i748.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i749[4], i748.m_SpriteState)
  i748.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i749[5], i748.m_AnimationTriggers)
  i748.m_Interactable = !!i749[6]
  request.r(i749[7], i749[8], 0, i748, 'm_TargetGraphic')
  return i748
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i750 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i751 = data
  i750.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i751[0], i750.m_PersistentCalls)
  return i750
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i752 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i753 = data
  var i755 = i753[0]
  var i754 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i755.length; i += 1) {
    i754.add(request.d('UnityEngine.Events.PersistentCall', i755[i + 0]));
  }
  i752.m_Calls = i754
  return i752
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i758 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i759 = data
  request.r(i759[0], i759[1], 0, i758, 'm_Target')
  i758.m_TargetAssemblyTypeName = i759[2]
  i758.m_MethodName = i759[3]
  i758.m_Mode = i759[4]
  i758.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i759[5], i758.m_Arguments)
  i758.m_CallState = i759[6]
  return i758
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i760 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i761 = data
  request.r(i761[0], i761[1], 0, i760, 'm_ObjectArgument')
  i760.m_ObjectArgumentAssemblyTypeName = i761[2]
  i760.m_IntArgument = i761[3]
  i760.m_FloatArgument = i761[4]
  i760.m_StringArgument = i761[5]
  i760.m_BoolArgument = !!i761[6]
  return i760
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i762 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i763 = data
  i762.m_Mode = i763[0]
  i762.m_WrapAround = !!i763[1]
  request.r(i763[2], i763[3], 0, i762, 'm_SelectOnUp')
  request.r(i763[4], i763[5], 0, i762, 'm_SelectOnDown')
  request.r(i763[6], i763[7], 0, i762, 'm_SelectOnLeft')
  request.r(i763[8], i763[9], 0, i762, 'm_SelectOnRight')
  return i762
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i764 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i765 = data
  i764.m_NormalColor = new pc.Color(i765[0], i765[1], i765[2], i765[3])
  i764.m_HighlightedColor = new pc.Color(i765[4], i765[5], i765[6], i765[7])
  i764.m_PressedColor = new pc.Color(i765[8], i765[9], i765[10], i765[11])
  i764.m_SelectedColor = new pc.Color(i765[12], i765[13], i765[14], i765[15])
  i764.m_DisabledColor = new pc.Color(i765[16], i765[17], i765[18], i765[19])
  i764.m_ColorMultiplier = i765[20]
  i764.m_FadeDuration = i765[21]
  return i764
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i766 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i767 = data
  request.r(i767[0], i767[1], 0, i766, 'm_HighlightedSprite')
  request.r(i767[2], i767[3], 0, i766, 'm_PressedSprite')
  request.r(i767[4], i767[5], 0, i766, 'm_SelectedSprite')
  request.r(i767[6], i767[7], 0, i766, 'm_DisabledSprite')
  return i766
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i768 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i769 = data
  i768.m_NormalTrigger = i769[0]
  i768.m_HighlightedTrigger = i769[1]
  i768.m_PressedTrigger = i769[2]
  i768.m_SelectedTrigger = i769[3]
  i768.m_DisabledTrigger = i769[4]
  return i768
}

Deserializers["HairCutController"] = function (request, data, root) {
  var i770 = root || request.c( 'HairCutController' )
  var i771 = data
  request.r(i771[0], i771[1], 0, i770, 'scissors')
  request.r(i771[2], i771[3], 0, i770, 'scissorsAnimator')
  request.r(i771[4], i771[5], 0, i770, 'targetAnimatorToDisable')
  request.r(i771[6], i771[7], 0, i770, 'linePointA')
  request.r(i771[8], i771[9], 0, i770, 'linePointB')
  i770.scissorMoveDuration = i771[10]
  var i773 = i771[11]
  var i772 = []
  for(var i = 0; i < i773.length; i += 2) {
  request.r(i773[i + 0], i773[i + 1], 2, i772, '')
  }
  i770.allMasks = i772
  request.r(i771[12], i771[13], 0, i770, 'fallingHairParent')
  var i775 = i771[14]
  var i774 = []
  for(var i = 0; i < i775.length; i += 2) {
  request.r(i775[i + 0], i775[i + 1], 2, i774, '')
  }
  i770.fallingHairRenderers = i774
  request.r(i771[15], i771[16], 0, i770, 'scissorsCollider')
  var i777 = i771[17]
  var i776 = []
  for(var i = 0; i < i777.length; i += 1) {
    i776.push( request.d('TargetColliderData', i777[i + 0]) );
  }
  i770.targetColliders = i776
  request.r(i771[18], i771[19], 0, i770, 'targetCollider')
  request.r(i771[20], i771[21], 0, i770, 'winObjectToEnable')
  var i779 = i771[22]
  var i778 = []
  for(var i = 0; i < i779.length; i += 2) {
  request.r(i779[i + 0], i779[i + 1], 2, i778, '')
  }
  i770.winObjectsToEnable = i778
  request.r(i771[23], i771[24], 0, i770, 'winObjectToDisable')
  var i781 = i771[25]
  var i780 = []
  for(var i = 0; i < i781.length; i += 2) {
  request.r(i781[i + 0], i781[i + 1], 2, i780, '')
  }
  i770.winObjectsToDisable = i780
  request.r(i771[26], i771[27], 0, i770, 'lossSpriteRenderer')
  request.r(i771[28], i771[29], 0, i770, 'lossObjectToEnable')
  var i783 = i771[30]
  var i782 = []
  for(var i = 0; i < i783.length; i += 2) {
  request.r(i783[i + 0], i783[i + 1], 2, i782, '')
  }
  i770.lossObjectsToEnable = i782
  request.r(i771[31], i771[32], 0, i770, 'lossObjectToDisable')
  var i785 = i771[33]
  var i784 = []
  for(var i = 0; i < i785.length; i += 2) {
  request.r(i785[i + 0], i785[i + 1], 2, i784, '')
  }
  i770.lossObjectsToDisable = i784
  i770.endDelay = i771[34]
  var i787 = i771[35]
  var i786 = []
  for(var i = 0; i < i787.length; i += 2) {
  request.r(i787[i + 0], i787[i + 1], 2, i786, '')
  }
  i770.afterEndDisableObjects = i786
  var i789 = i771[36]
  var i788 = []
  for(var i = 0; i < i789.length; i += 2) {
  request.r(i789[i + 0], i789[i + 1], 2, i788, '')
  }
  i770.afterEndEnableObjects = i788
  request.r(i771[37], i771[38], 0, i770, 'tutObject')
  request.r(i771[39], i771[40], 0, i770, 'animatorToEnableOnFirstTap')
  i770.firstTapTriggerName = i771[41]
  request.r(i771[42], i771[43], 0, i770, 'objectToDisableOnComplete')
  var i791 = i771[44]
  var i790 = []
  for(var i = 0; i < i791.length; i += 2) {
  request.r(i791[i + 0], i791[i + 1], 2, i790, '')
  }
  i770.objectsToDisableOnComplete = i790
  i770.fallDistance = i771[45]
  i770.fallDuration = i771[46]
  i770.fadeDuration = i771[47]
  return i770
}

Deserializers["TargetColliderData"] = function (request, data, root) {
  var i798 = root || request.c( 'TargetColliderData' )
  var i799 = data
  request.r(i799[0], i799[1], 0, i798, 'collider')
  request.r(i799[2], i799[3], 0, i798, 'resultSprite')
  i798.isWin = !!i799[4]
  return i798
}

Deserializers["HideOnFirstClick"] = function (request, data, root) {
  var i800 = root || request.c( 'HideOnFirstClick' )
  var i801 = data
  request.r(i801[0], i801[1], 0, i800, 'objectToHide')
  return i800
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i802 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i803 = data
  i802.usedByComposite = !!i803[0]
  i802.autoTiling = !!i803[1]
  i802.size = new pc.Vec2( i803[2], i803[3] )
  i802.edgeRadius = i803[4]
  i802.enabled = !!i803[5]
  i802.isTrigger = !!i803[6]
  i802.usedByEffector = !!i803[7]
  i802.density = i803[8]
  i802.offset = new pc.Vec2( i803[9], i803[10] )
  request.r(i803[11], i803[12], 0, i802, 'material')
  return i802
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteMask"] = function (request, data, root) {
  var i804 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteMask' )
  var i805 = data
  i804.frontSortingLayerID = i805[0]
  i804.frontSortingOrder = i805[1]
  i804.backSortingLayerID = i805[2]
  i804.backSortingOrder = i805[3]
  i804.alphaCutoff = i805[4]
  request.r(i805[5], i805[6], 0, i804, 'sprite')
  i804.tileMode = i805[7]
  i804.isCustomRangeActive = !!i805[8]
  i804.spriteSortPoint = i805[9]
  i804.enabled = !!i805[10]
  request.r(i805[11], i805[12], 0, i804, 'sharedMaterial')
  var i807 = i805[13]
  var i806 = []
  for(var i = 0; i < i807.length; i += 2) {
  request.r(i807[i + 0], i807[i + 1], 2, i806, '')
  }
  i804.sharedMaterials = i806
  i804.receiveShadows = !!i805[14]
  i804.shadowCastingMode = i805[15]
  i804.sortingLayerID = i805[16]
  i804.sortingOrder = i805[17]
  i804.lightmapIndex = i805[18]
  i804.lightmapSceneIndex = i805[19]
  i804.lightmapScaleOffset = new pc.Vec4( i805[20], i805[21], i805[22], i805[23] )
  i804.lightProbeUsage = i805[24]
  i804.reflectionProbeUsage = i805[25]
  return i804
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i808 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i809 = data
  request.r(i809[0], i809[1], 0, i808, 'm_FirstSelected')
  i808.m_sendNavigationEvents = !!i809[2]
  i808.m_DragThreshold = i809[3]
  return i808
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i810 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i811 = data
  i810.m_HorizontalAxis = i811[0]
  i810.m_VerticalAxis = i811[1]
  i810.m_SubmitButton = i811[2]
  i810.m_CancelButton = i811[3]
  i810.m_InputActionsPerSecond = i811[4]
  i810.m_RepeatDelay = i811[5]
  i810.m_ForceModuleActive = !!i811[6]
  i810.m_SendPointerHoverToParent = !!i811[7]
  return i810
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i812 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i813 = data
  i812.ambientIntensity = i813[0]
  i812.reflectionIntensity = i813[1]
  i812.ambientMode = i813[2]
  i812.ambientLight = new pc.Color(i813[3], i813[4], i813[5], i813[6])
  i812.ambientSkyColor = new pc.Color(i813[7], i813[8], i813[9], i813[10])
  i812.ambientGroundColor = new pc.Color(i813[11], i813[12], i813[13], i813[14])
  i812.ambientEquatorColor = new pc.Color(i813[15], i813[16], i813[17], i813[18])
  i812.fogColor = new pc.Color(i813[19], i813[20], i813[21], i813[22])
  i812.fogEndDistance = i813[23]
  i812.fogStartDistance = i813[24]
  i812.fogDensity = i813[25]
  i812.fog = !!i813[26]
  request.r(i813[27], i813[28], 0, i812, 'skybox')
  i812.fogMode = i813[29]
  var i815 = i813[30]
  var i814 = []
  for(var i = 0; i < i815.length; i += 1) {
    i814.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i815[i + 0]) );
  }
  i812.lightmaps = i814
  i812.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i813[31], i812.lightProbes)
  i812.lightmapsMode = i813[32]
  i812.mixedBakeMode = i813[33]
  i812.environmentLightingMode = i813[34]
  i812.ambientProbe = new pc.SphericalHarmonicsL2(i813[35])
  i812.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i813[36])
  i812.useReferenceAmbientProbe = !!i813[37]
  request.r(i813[38], i813[39], 0, i812, 'customReflection')
  request.r(i813[40], i813[41], 0, i812, 'defaultReflection')
  i812.defaultReflectionMode = i813[42]
  i812.defaultReflectionResolution = i813[43]
  i812.sunLightObjectId = i813[44]
  i812.pixelLightCount = i813[45]
  i812.defaultReflectionHDR = !!i813[46]
  i812.hasLightDataAsset = !!i813[47]
  i812.hasManualGenerate = !!i813[48]
  return i812
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i818 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i819 = data
  request.r(i819[0], i819[1], 0, i818, 'lightmapColor')
  request.r(i819[2], i819[3], 0, i818, 'lightmapDirection')
  request.r(i819[4], i819[5], 0, i818, 'shadowMask')
  return i818
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i820 = root || new UnityEngine.LightProbes()
  var i821 = data
  return i820
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i828 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i829 = data
  var i831 = i829[0]
  var i830 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i831.length; i += 1) {
    i830.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i831[i + 0]));
  }
  i828.ShaderCompilationErrors = i830
  i828.name = i829[1]
  i828.guid = i829[2]
  var i833 = i829[3]
  var i832 = []
  for(var i = 0; i < i833.length; i += 1) {
    i832.push( i833[i + 0] );
  }
  i828.shaderDefinedKeywords = i832
  var i835 = i829[4]
  var i834 = []
  for(var i = 0; i < i835.length; i += 1) {
    i834.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i835[i + 0]) );
  }
  i828.passes = i834
  var i837 = i829[5]
  var i836 = []
  for(var i = 0; i < i837.length; i += 1) {
    i836.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i837[i + 0]) );
  }
  i828.usePasses = i836
  var i839 = i829[6]
  var i838 = []
  for(var i = 0; i < i839.length; i += 1) {
    i838.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i839[i + 0]) );
  }
  i828.defaultParameterValues = i838
  request.r(i829[7], i829[8], 0, i828, 'unityFallbackShader')
  i828.readDepth = !!i829[9]
  i828.hasDepthOnlyPass = !!i829[10]
  i828.isCreatedByShaderGraph = !!i829[11]
  i828.disableBatching = !!i829[12]
  i828.compiled = !!i829[13]
  return i828
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i842 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i843 = data
  i842.shaderName = i843[0]
  i842.errorMessage = i843[1]
  return i842
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i848 = root || new pc.UnityShaderPass()
  var i849 = data
  i848.id = i849[0]
  i848.subShaderIndex = i849[1]
  i848.name = i849[2]
  i848.passType = i849[3]
  i848.grabPassTextureName = i849[4]
  i848.usePass = !!i849[5]
  i848.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i849[6], i848.zTest)
  i848.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i849[7], i848.zWrite)
  i848.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i849[8], i848.culling)
  i848.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i849[9], i848.blending)
  i848.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i849[10], i848.alphaBlending)
  i848.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i849[11], i848.colorWriteMask)
  i848.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i849[12], i848.offsetUnits)
  i848.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i849[13], i848.offsetFactor)
  i848.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i849[14], i848.stencilRef)
  i848.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i849[15], i848.stencilReadMask)
  i848.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i849[16], i848.stencilWriteMask)
  i848.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i849[17], i848.stencilOp)
  i848.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i849[18], i848.stencilOpFront)
  i848.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i849[19], i848.stencilOpBack)
  var i851 = i849[20]
  var i850 = []
  for(var i = 0; i < i851.length; i += 1) {
    i850.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i851[i + 0]) );
  }
  i848.tags = i850
  var i853 = i849[21]
  var i852 = []
  for(var i = 0; i < i853.length; i += 1) {
    i852.push( i853[i + 0] );
  }
  i848.passDefinedKeywords = i852
  var i855 = i849[22]
  var i854 = []
  for(var i = 0; i < i855.length; i += 1) {
    i854.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i855[i + 0]) );
  }
  i848.passDefinedKeywordGroups = i854
  var i857 = i849[23]
  var i856 = []
  for(var i = 0; i < i857.length; i += 1) {
    i856.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i857[i + 0]) );
  }
  i848.variants = i856
  var i859 = i849[24]
  var i858 = []
  for(var i = 0; i < i859.length; i += 1) {
    i858.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i859[i + 0]) );
  }
  i848.excludedVariants = i858
  i848.hasDepthReader = !!i849[25]
  return i848
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i860 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i861 = data
  i860.val = i861[0]
  i860.name = i861[1]
  return i860
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i862 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i863 = data
  i862.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i863[0], i862.src)
  i862.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i863[1], i862.dst)
  i862.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i863[2], i862.op)
  return i862
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i864 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i865 = data
  i864.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i865[0], i864.pass)
  i864.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i865[1], i864.fail)
  i864.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i865[2], i864.zFail)
  i864.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i865[3], i864.comp)
  return i864
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i868 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i869 = data
  i868.name = i869[0]
  i868.value = i869[1]
  return i868
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i872 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i873 = data
  var i875 = i873[0]
  var i874 = []
  for(var i = 0; i < i875.length; i += 1) {
    i874.push( i875[i + 0] );
  }
  i872.keywords = i874
  i872.hasDiscard = !!i873[1]
  return i872
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i878 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i879 = data
  i878.passId = i879[0]
  i878.subShaderIndex = i879[1]
  var i881 = i879[2]
  var i880 = []
  for(var i = 0; i < i881.length; i += 1) {
    i880.push( i881[i + 0] );
  }
  i878.keywords = i880
  i878.vertexProgram = i879[3]
  i878.fragmentProgram = i879[4]
  i878.exportedForWebGl2 = !!i879[5]
  i878.readDepth = !!i879[6]
  return i878
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i884 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i885 = data
  request.r(i885[0], i885[1], 0, i884, 'shader')
  i884.pass = i885[2]
  return i884
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i888 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i889 = data
  i888.name = i889[0]
  i888.type = i889[1]
  i888.value = new pc.Vec4( i889[2], i889[3], i889[4], i889[5] )
  i888.textureValue = i889[6]
  i888.shaderPropertyFlag = i889[7]
  return i888
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i890 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i891 = data
  i890.name = i891[0]
  request.r(i891[1], i891[2], 0, i890, 'texture')
  i890.aabb = i891[3]
  i890.vertices = i891[4]
  i890.triangles = i891[5]
  i890.textureRect = UnityEngine.Rect.MinMaxRect(i891[6], i891[7], i891[8], i891[9])
  i890.packedRect = UnityEngine.Rect.MinMaxRect(i891[10], i891[11], i891[12], i891[13])
  i890.border = new pc.Vec4( i891[14], i891[15], i891[16], i891[17] )
  i890.transparency = i891[18]
  i890.bounds = i891[19]
  i890.pixelsPerUnit = i891[20]
  i890.textureWidth = i891[21]
  i890.textureHeight = i891[22]
  i890.nativeSize = new pc.Vec2( i891[23], i891[24] )
  i890.pivot = new pc.Vec2( i891[25], i891[26] )
  i890.textureRectOffset = new pc.Vec2( i891[27], i891[28] )
  return i890
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i892 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i893 = data
  i892.name = i893[0]
  return i892
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i894 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i895 = data
  i894.name = i895[0]
  i894.wrapMode = i895[1]
  i894.isLooping = !!i895[2]
  i894.length = i895[3]
  var i897 = i895[4]
  var i896 = []
  for(var i = 0; i < i897.length; i += 1) {
    i896.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i897[i + 0]) );
  }
  i894.curves = i896
  var i899 = i895[5]
  var i898 = []
  for(var i = 0; i < i899.length; i += 1) {
    i898.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i899[i + 0]) );
  }
  i894.events = i898
  i894.halfPrecision = !!i895[6]
  i894._frameRate = i895[7]
  i894.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i895[8], i894.localBounds)
  i894.hasMuscleCurves = !!i895[9]
  var i901 = i895[10]
  var i900 = []
  for(var i = 0; i < i901.length; i += 1) {
    i900.push( i901[i + 0] );
  }
  i894.clipMuscleConstant = i900
  i894.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i895[11], i894.clipBindingConstant)
  return i894
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i904 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i905 = data
  i904.path = i905[0]
  i904.hash = i905[1]
  i904.componentType = i905[2]
  i904.property = i905[3]
  i904.keys = i905[4]
  var i907 = i905[5]
  var i906 = []
  for(var i = 0; i < i907.length; i += 1) {
    i906.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i907[i + 0]) );
  }
  i904.objectReferenceKeys = i906
  return i904
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i910 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i911 = data
  i910.time = i911[0]
  request.r(i911[1], i911[2], 0, i910, 'value')
  return i910
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i914 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i915 = data
  i914.functionName = i915[0]
  i914.floatParameter = i915[1]
  i914.intParameter = i915[2]
  i914.stringParameter = i915[3]
  request.r(i915[4], i915[5], 0, i914, 'objectReferenceParameter')
  i914.time = i915[6]
  return i914
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i916 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i917 = data
  i916.center = new pc.Vec3( i917[0], i917[1], i917[2] )
  i916.extends = new pc.Vec3( i917[3], i917[4], i917[5] )
  return i916
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i920 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i921 = data
  var i923 = i921[0]
  var i922 = []
  for(var i = 0; i < i923.length; i += 1) {
    i922.push( i923[i + 0] );
  }
  i920.genericBindings = i922
  var i925 = i921[1]
  var i924 = []
  for(var i = 0; i < i925.length; i += 1) {
    i924.push( i925[i + 0] );
  }
  i920.pptrCurveMapping = i924
  return i920
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i926 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i927 = data
  i926.name = i927[0]
  var i929 = i927[1]
  var i928 = []
  for(var i = 0; i < i929.length; i += 1) {
    i928.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i929[i + 0]) );
  }
  i926.layers = i928
  var i931 = i927[2]
  var i930 = []
  for(var i = 0; i < i931.length; i += 1) {
    i930.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i931[i + 0]) );
  }
  i926.parameters = i930
  i926.animationClips = i927[3]
  i926.avatarUnsupported = i927[4]
  return i926
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i934 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i935 = data
  i934.name = i935[0]
  i934.defaultWeight = i935[1]
  i934.blendingMode = i935[2]
  i934.avatarMask = i935[3]
  i934.syncedLayerIndex = i935[4]
  i934.syncedLayerAffectsTiming = !!i935[5]
  i934.syncedLayers = i935[6]
  i934.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i935[7], i934.stateMachine)
  return i934
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i936 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i937 = data
  i936.id = i937[0]
  i936.name = i937[1]
  i936.path = i937[2]
  var i939 = i937[3]
  var i938 = []
  for(var i = 0; i < i939.length; i += 1) {
    i938.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i939[i + 0]) );
  }
  i936.states = i938
  var i941 = i937[4]
  var i940 = []
  for(var i = 0; i < i941.length; i += 1) {
    i940.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i941[i + 0]) );
  }
  i936.machines = i940
  var i943 = i937[5]
  var i942 = []
  for(var i = 0; i < i943.length; i += 1) {
    i942.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i943[i + 0]) );
  }
  i936.entryStateTransitions = i942
  var i945 = i937[6]
  var i944 = []
  for(var i = 0; i < i945.length; i += 1) {
    i944.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i945[i + 0]) );
  }
  i936.exitStateTransitions = i944
  var i947 = i937[7]
  var i946 = []
  for(var i = 0; i < i947.length; i += 1) {
    i946.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i947[i + 0]) );
  }
  i936.anyStateTransitions = i946
  i936.defaultStateId = i937[8]
  return i936
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i950 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i951 = data
  i950.id = i951[0]
  i950.name = i951[1]
  i950.cycleOffset = i951[2]
  i950.cycleOffsetParameter = i951[3]
  i950.cycleOffsetParameterActive = !!i951[4]
  i950.mirror = !!i951[5]
  i950.mirrorParameter = i951[6]
  i950.mirrorParameterActive = !!i951[7]
  i950.motionId = i951[8]
  i950.nameHash = i951[9]
  i950.fullPathHash = i951[10]
  i950.speed = i951[11]
  i950.speedParameter = i951[12]
  i950.speedParameterActive = !!i951[13]
  i950.tag = i951[14]
  i950.tagHash = i951[15]
  i950.writeDefaultValues = !!i951[16]
  var i953 = i951[17]
  var i952 = []
  for(var i = 0; i < i953.length; i += 2) {
  request.r(i953[i + 0], i953[i + 1], 2, i952, '')
  }
  i950.behaviours = i952
  var i955 = i951[18]
  var i954 = []
  for(var i = 0; i < i955.length; i += 1) {
    i954.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i955[i + 0]) );
  }
  i950.transitions = i954
  return i950
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i960 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i961 = data
  i960.fullPath = i961[0]
  i960.canTransitionToSelf = !!i961[1]
  i960.duration = i961[2]
  i960.exitTime = i961[3]
  i960.hasExitTime = !!i961[4]
  i960.hasFixedDuration = !!i961[5]
  i960.interruptionSource = i961[6]
  i960.offset = i961[7]
  i960.orderedInterruption = !!i961[8]
  i960.destinationStateId = i961[9]
  i960.isExit = !!i961[10]
  i960.mute = !!i961[11]
  i960.solo = !!i961[12]
  var i963 = i961[13]
  var i962 = []
  for(var i = 0; i < i963.length; i += 1) {
    i962.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i963[i + 0]) );
  }
  i960.conditions = i962
  return i960
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i968 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i969 = data
  i968.destinationStateId = i969[0]
  i968.isExit = !!i969[1]
  i968.mute = !!i969[2]
  i968.solo = !!i969[3]
  var i971 = i969[4]
  var i970 = []
  for(var i = 0; i < i971.length; i += 1) {
    i970.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i971[i + 0]) );
  }
  i968.conditions = i970
  return i968
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i974 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i975 = data
  i974.defaultBool = !!i975[0]
  i974.defaultFloat = i975[1]
  i974.defaultInt = i975[2]
  i974.name = i975[3]
  i974.nameHash = i975[4]
  i974.type = i975[5]
  return i974
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i978 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i979 = data
  i978.mode = i979[0]
  i978.parameter = i979[1]
  i978.threshold = i979[2]
  return i978
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i980 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i981 = data
  i980.name = i981[0]
  i980.bytes64 = i981[1]
  i980.data = i981[2]
  return i980
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i982 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i983 = data
  i982.useSafeMode = !!i983[0]
  i982.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i983[1], i982.safeModeOptions)
  i982.timeScale = i983[2]
  i982.unscaledTimeScale = i983[3]
  i982.useSmoothDeltaTime = !!i983[4]
  i982.maxSmoothUnscaledTime = i983[5]
  i982.rewindCallbackMode = i983[6]
  i982.showUnityEditorReport = !!i983[7]
  i982.logBehaviour = i983[8]
  i982.drawGizmos = !!i983[9]
  i982.defaultRecyclable = !!i983[10]
  i982.defaultAutoPlay = i983[11]
  i982.defaultUpdateType = i983[12]
  i982.defaultTimeScaleIndependent = !!i983[13]
  i982.defaultEaseType = i983[14]
  i982.defaultEaseOvershootOrAmplitude = i983[15]
  i982.defaultEasePeriod = i983[16]
  i982.defaultAutoKill = !!i983[17]
  i982.defaultLoopType = i983[18]
  i982.debugMode = !!i983[19]
  i982.debugStoreTargetId = !!i983[20]
  i982.showPreviewPanel = !!i983[21]
  i982.storeSettingsLocation = i983[22]
  i982.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i983[23], i982.modules)
  i982.createASMDEF = !!i983[24]
  i982.showPlayingTweens = !!i983[25]
  i982.showPausedTweens = !!i983[26]
  return i982
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i984 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i985 = data
  i984.logBehaviour = i985[0]
  i984.nestedTweenFailureBehaviour = i985[1]
  return i984
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i986 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i987 = data
  i986.showPanel = !!i987[0]
  i986.audioEnabled = !!i987[1]
  i986.physicsEnabled = !!i987[2]
  i986.physics2DEnabled = !!i987[3]
  i986.spriteEnabled = !!i987[4]
  i986.uiEnabled = !!i987[5]
  i986.uiToolkitEnabled = !!i987[6]
  i986.textMeshProEnabled = !!i987[7]
  i986.tk2DEnabled = !!i987[8]
  i986.deAudioEnabled = !!i987[9]
  i986.deUnityExtendedEnabled = !!i987[10]
  i986.epoOutlineEnabled = !!i987[11]
  return i986
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i988 = root || request.c( 'TMPro.TMP_Settings' )
  var i989 = data
  i988.assetVersion = i989[0]
  i988.m_TextWrappingMode = i989[1]
  i988.m_enableKerning = !!i989[2]
  var i991 = i989[3]
  var i990 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i991.length; i += 1) {
    i990.add(i991[i + 0]);
  }
  i988.m_ActiveFontFeatures = i990
  i988.m_enableExtraPadding = !!i989[4]
  i988.m_enableTintAllSprites = !!i989[5]
  i988.m_enableParseEscapeCharacters = !!i989[6]
  i988.m_EnableRaycastTarget = !!i989[7]
  i988.m_GetFontFeaturesAtRuntime = !!i989[8]
  i988.m_missingGlyphCharacter = i989[9]
  i988.m_ClearDynamicDataOnBuild = !!i989[10]
  i988.m_warningsDisabled = !!i989[11]
  request.r(i989[12], i989[13], 0, i988, 'm_defaultFontAsset')
  i988.m_defaultFontAssetPath = i989[14]
  i988.m_defaultFontSize = i989[15]
  i988.m_defaultAutoSizeMinRatio = i989[16]
  i988.m_defaultAutoSizeMaxRatio = i989[17]
  i988.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i989[18], i989[19] )
  i988.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i989[20], i989[21] )
  i988.m_autoSizeTextContainer = !!i989[22]
  i988.m_IsTextObjectScaleStatic = !!i989[23]
  var i993 = i989[24]
  var i992 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i993.length; i += 2) {
  request.r(i993[i + 0], i993[i + 1], 1, i992, '')
  }
  i988.m_fallbackFontAssets = i992
  i988.m_matchMaterialPreset = !!i989[25]
  i988.m_HideSubTextObjects = !!i989[26]
  request.r(i989[27], i989[28], 0, i988, 'm_defaultSpriteAsset')
  i988.m_defaultSpriteAssetPath = i989[29]
  i988.m_enableEmojiSupport = !!i989[30]
  i988.m_MissingCharacterSpriteUnicode = i989[31]
  var i995 = i989[32]
  var i994 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i995.length; i += 2) {
  request.r(i995[i + 0], i995[i + 1], 1, i994, '')
  }
  i988.m_EmojiFallbackTextAssets = i994
  i988.m_defaultColorGradientPresetsPath = i989[33]
  request.r(i989[34], i989[35], 0, i988, 'm_defaultStyleSheet')
  i988.m_StyleSheetsResourcePath = i989[36]
  request.r(i989[37], i989[38], 0, i988, 'm_leadingCharacters')
  request.r(i989[39], i989[40], 0, i988, 'm_followingCharacters')
  i988.m_UseModernHangulLineBreakingRules = !!i989[41]
  return i988
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1002 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1003 = data
  request.r(i1003[0], i1003[1], 0, i1002, 'spriteSheet')
  var i1005 = i1003[2]
  var i1004 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1005.length; i += 1) {
    i1004.add(request.d('TMPro.TMP_Sprite', i1005[i + 0]));
  }
  i1002.spriteInfoList = i1004
  var i1007 = i1003[3]
  var i1006 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1007.length; i += 2) {
  request.r(i1007[i + 0], i1007[i + 1], 1, i1006, '')
  }
  i1002.fallbackSpriteAssets = i1006
  var i1009 = i1003[4]
  var i1008 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1009.length; i += 1) {
    i1008.add(request.d('TMPro.TMP_SpriteCharacter', i1009[i + 0]));
  }
  i1002.m_SpriteCharacterTable = i1008
  var i1011 = i1003[5]
  var i1010 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1011.length; i += 1) {
    i1010.add(request.d('TMPro.TMP_SpriteGlyph', i1011[i + 0]));
  }
  i1002.m_GlyphTable = i1010
  i1002.m_Version = i1003[6]
  i1002.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1003[7], i1002.m_FaceInfo)
  request.r(i1003[8], i1003[9], 0, i1002, 'm_Material')
  return i1002
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1014 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1015 = data
  i1014.name = i1015[0]
  i1014.hashCode = i1015[1]
  i1014.unicode = i1015[2]
  i1014.pivot = new pc.Vec2( i1015[3], i1015[4] )
  request.r(i1015[5], i1015[6], 0, i1014, 'sprite')
  i1014.id = i1015[7]
  i1014.x = i1015[8]
  i1014.y = i1015[9]
  i1014.width = i1015[10]
  i1014.height = i1015[11]
  i1014.xOffset = i1015[12]
  i1014.yOffset = i1015[13]
  i1014.xAdvance = i1015[14]
  i1014.scale = i1015[15]
  return i1014
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1020 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1021 = data
  i1020.m_Name = i1021[0]
  i1020.m_ElementType = i1021[1]
  i1020.m_Unicode = i1021[2]
  i1020.m_GlyphIndex = i1021[3]
  i1020.m_Scale = i1021[4]
  return i1020
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1024 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1025 = data
  request.r(i1025[0], i1025[1], 0, i1024, 'sprite')
  i1024.m_Index = i1025[2]
  i1024.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1025[3], i1024.m_Metrics)
  i1024.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1025[4], i1024.m_GlyphRect)
  i1024.m_Scale = i1025[5]
  i1024.m_AtlasIndex = i1025[6]
  i1024.m_ClassDefinitionType = i1025[7]
  return i1024
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1026 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1027 = data
  i1026.m_Width = i1027[0]
  i1026.m_Height = i1027[1]
  i1026.m_HorizontalBearingX = i1027[2]
  i1026.m_HorizontalBearingY = i1027[3]
  i1026.m_HorizontalAdvance = i1027[4]
  return i1026
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1028 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1029 = data
  i1028.m_X = i1029[0]
  i1028.m_Y = i1029[1]
  i1028.m_Width = i1029[2]
  i1028.m_Height = i1029[3]
  return i1028
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1030 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1031 = data
  i1030.m_FaceIndex = i1031[0]
  i1030.m_FamilyName = i1031[1]
  i1030.m_StyleName = i1031[2]
  i1030.m_PointSize = i1031[3]
  i1030.m_Scale = i1031[4]
  i1030.m_UnitsPerEM = i1031[5]
  i1030.m_LineHeight = i1031[6]
  i1030.m_AscentLine = i1031[7]
  i1030.m_CapLine = i1031[8]
  i1030.m_MeanLine = i1031[9]
  i1030.m_Baseline = i1031[10]
  i1030.m_DescentLine = i1031[11]
  i1030.m_SuperscriptOffset = i1031[12]
  i1030.m_SuperscriptSize = i1031[13]
  i1030.m_SubscriptOffset = i1031[14]
  i1030.m_SubscriptSize = i1031[15]
  i1030.m_UnderlineOffset = i1031[16]
  i1030.m_UnderlineThickness = i1031[17]
  i1030.m_StrikethroughOffset = i1031[18]
  i1030.m_StrikethroughThickness = i1031[19]
  i1030.m_TabWidth = i1031[20]
  return i1030
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1032 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1033 = data
  var i1035 = i1033[0]
  var i1034 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1035.length; i += 1) {
    i1034.add(request.d('TMPro.TMP_Style', i1035[i + 0]));
  }
  i1032.m_StyleList = i1034
  return i1032
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1038 = root || request.c( 'TMPro.TMP_Style' )
  var i1039 = data
  i1038.m_Name = i1039[0]
  i1038.m_HashCode = i1039[1]
  i1038.m_OpeningDefinition = i1039[2]
  i1038.m_ClosingDefinition = i1039[3]
  i1038.m_OpeningTagArray = i1039[4]
  i1038.m_ClosingTagArray = i1039[5]
  return i1038
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1040 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1041 = data
  var i1043 = i1041[0]
  var i1042 = []
  for(var i = 0; i < i1043.length; i += 1) {
    i1042.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1043[i + 0]) );
  }
  i1040.files = i1042
  i1040.componentToPrefabIds = i1041[1]
  return i1040
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1046 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1047 = data
  i1046.path = i1047[0]
  request.r(i1047[1], i1047[2], 0, i1046, 'unityObject')
  return i1046
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1048 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1049 = data
  var i1051 = i1049[0]
  var i1050 = []
  for(var i = 0; i < i1051.length; i += 1) {
    i1050.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1051[i + 0]) );
  }
  i1048.scriptsExecutionOrder = i1050
  var i1053 = i1049[1]
  var i1052 = []
  for(var i = 0; i < i1053.length; i += 1) {
    i1052.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1053[i + 0]) );
  }
  i1048.sortingLayers = i1052
  var i1055 = i1049[2]
  var i1054 = []
  for(var i = 0; i < i1055.length; i += 1) {
    i1054.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1055[i + 0]) );
  }
  i1048.cullingLayers = i1054
  i1048.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1049[3], i1048.timeSettings)
  i1048.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1049[4], i1048.physicsSettings)
  i1048.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1049[5], i1048.physics2DSettings)
  i1048.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1049[6], i1048.qualitySettings)
  i1048.enableRealtimeShadows = !!i1049[7]
  i1048.enableAutoInstancing = !!i1049[8]
  i1048.enableStaticBatching = !!i1049[9]
  i1048.enableDynamicBatching = !!i1049[10]
  i1048.lightmapEncodingQuality = i1049[11]
  i1048.desiredColorSpace = i1049[12]
  var i1057 = i1049[13]
  var i1056 = []
  for(var i = 0; i < i1057.length; i += 1) {
    i1056.push( i1057[i + 0] );
  }
  i1048.allTags = i1056
  return i1048
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1060 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1061 = data
  i1060.name = i1061[0]
  i1060.value = i1061[1]
  return i1060
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1064 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1065 = data
  i1064.id = i1065[0]
  i1064.name = i1065[1]
  i1064.value = i1065[2]
  return i1064
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1068 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1069 = data
  i1068.id = i1069[0]
  i1068.name = i1069[1]
  return i1068
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1070 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1071 = data
  i1070.fixedDeltaTime = i1071[0]
  i1070.maximumDeltaTime = i1071[1]
  i1070.timeScale = i1071[2]
  i1070.maximumParticleTimestep = i1071[3]
  return i1070
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1072 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1073 = data
  i1072.gravity = new pc.Vec3( i1073[0], i1073[1], i1073[2] )
  i1072.defaultSolverIterations = i1073[3]
  i1072.bounceThreshold = i1073[4]
  i1072.autoSyncTransforms = !!i1073[5]
  i1072.autoSimulation = !!i1073[6]
  var i1075 = i1073[7]
  var i1074 = []
  for(var i = 0; i < i1075.length; i += 1) {
    i1074.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1075[i + 0]) );
  }
  i1072.collisionMatrix = i1074
  return i1072
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1078 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1079 = data
  i1078.enabled = !!i1079[0]
  i1078.layerId = i1079[1]
  i1078.otherLayerId = i1079[2]
  return i1078
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1080 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1081 = data
  request.r(i1081[0], i1081[1], 0, i1080, 'material')
  i1080.gravity = new pc.Vec2( i1081[2], i1081[3] )
  i1080.positionIterations = i1081[4]
  i1080.velocityIterations = i1081[5]
  i1080.velocityThreshold = i1081[6]
  i1080.maxLinearCorrection = i1081[7]
  i1080.maxAngularCorrection = i1081[8]
  i1080.maxTranslationSpeed = i1081[9]
  i1080.maxRotationSpeed = i1081[10]
  i1080.baumgarteScale = i1081[11]
  i1080.baumgarteTOIScale = i1081[12]
  i1080.timeToSleep = i1081[13]
  i1080.linearSleepTolerance = i1081[14]
  i1080.angularSleepTolerance = i1081[15]
  i1080.defaultContactOffset = i1081[16]
  i1080.autoSimulation = !!i1081[17]
  i1080.queriesHitTriggers = !!i1081[18]
  i1080.queriesStartInColliders = !!i1081[19]
  i1080.callbacksOnDisable = !!i1081[20]
  i1080.reuseCollisionCallbacks = !!i1081[21]
  i1080.autoSyncTransforms = !!i1081[22]
  var i1083 = i1081[23]
  var i1082 = []
  for(var i = 0; i < i1083.length; i += 1) {
    i1082.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1083[i + 0]) );
  }
  i1080.collisionMatrix = i1082
  return i1080
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1086 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1087 = data
  i1086.enabled = !!i1087[0]
  i1086.layerId = i1087[1]
  i1086.otherLayerId = i1087[2]
  return i1086
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1088 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1089 = data
  var i1091 = i1089[0]
  var i1090 = []
  for(var i = 0; i < i1091.length; i += 1) {
    i1090.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1091[i + 0]) );
  }
  i1088.qualityLevels = i1090
  var i1093 = i1089[1]
  var i1092 = []
  for(var i = 0; i < i1093.length; i += 1) {
    i1092.push( i1093[i + 0] );
  }
  i1088.names = i1092
  i1088.shadows = i1089[2]
  i1088.anisotropicFiltering = i1089[3]
  i1088.antiAliasing = i1089[4]
  i1088.lodBias = i1089[5]
  i1088.shadowCascades = i1089[6]
  i1088.shadowDistance = i1089[7]
  i1088.shadowmaskMode = i1089[8]
  i1088.shadowProjection = i1089[9]
  i1088.shadowResolution = i1089[10]
  i1088.softParticles = !!i1089[11]
  i1088.softVegetation = !!i1089[12]
  i1088.activeColorSpace = i1089[13]
  i1088.desiredColorSpace = i1089[14]
  i1088.masterTextureLimit = i1089[15]
  i1088.maxQueuedFrames = i1089[16]
  i1088.particleRaycastBudget = i1089[17]
  i1088.pixelLightCount = i1089[18]
  i1088.realtimeReflectionProbes = !!i1089[19]
  i1088.shadowCascade2Split = i1089[20]
  i1088.shadowCascade4Split = new pc.Vec3( i1089[21], i1089[22], i1089[23] )
  i1088.streamingMipmapsActive = !!i1089[24]
  i1088.vSyncCount = i1089[25]
  i1088.asyncUploadBufferSize = i1089[26]
  i1088.asyncUploadTimeSlice = i1089[27]
  i1088.billboardsFaceCameraPosition = !!i1089[28]
  i1088.shadowNearPlaneOffset = i1089[29]
  i1088.streamingMipmapsMemoryBudget = i1089[30]
  i1088.maximumLODLevel = i1089[31]
  i1088.streamingMipmapsAddAllCameras = !!i1089[32]
  i1088.streamingMipmapsMaxLevelReduction = i1089[33]
  i1088.streamingMipmapsRenderersPerFrame = i1089[34]
  i1088.resolutionScalingFixedDPIFactor = i1089[35]
  i1088.streamingMipmapsMaxFileIORequests = i1089[36]
  i1088.currentQualityLevel = i1089[37]
  return i1088
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1098 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1099 = data
  i1098.weight = i1099[0]
  i1098.vertices = i1099[1]
  i1098.normals = i1099[2]
  i1098.tangents = i1099[3]
  return i1098
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.SpriteMask":{"frontSortingLayerID":0,"frontSortingOrder":1,"backSortingLayerID":2,"backSortingOrder":3,"alphaCutoff":4,"sprite":5,"tileMode":7,"isCustomRangeActive":8,"spriteSortPoint":9,"enabled":10,"sharedMaterial":11,"sharedMaterials":13,"receiveShadows":14,"shadowCastingMode":15,"sortingLayerID":16,"sortingOrder":17,"lightmapIndex":18,"lightmapSceneIndex":19,"lightmapScaleOffset":20,"lightProbeUsage":24,"reflectionProbeUsage":25},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"42":[43],"44":[43],"45":[43],"46":[43],"47":[43],"48":[43],"49":[50],"51":[2],"52":[53],"54":[53],"55":[53],"56":[53],"57":[53],"58":[53],"59":[60],"61":[60],"62":[60],"63":[60],"64":[60],"65":[60],"66":[60],"67":[60],"68":[60],"69":[60],"70":[60],"71":[60],"72":[60],"73":[2],"74":[75],"76":[77],"78":[77],"23":[22],"6":[2],"79":[60],"80":[32],"81":[12],"82":[2],"83":[84],"85":[34],"86":[23],"87":[22],"88":[75,22],"89":[22,27],"90":[22],"91":[27,22],"92":[75],"93":[27,22],"94":[22],"95":[96],"97":[96],"98":[96],"99":[22],"100":[22],"26":[23],"28":[27,22],"101":[22],"25":[23],"102":[22],"103":[22],"104":[22],"105":[22],"106":[22],"107":[22],"108":[22],"109":[22],"110":[22],"111":[27,22],"112":[22],"113":[22],"114":[22],"115":[22],"116":[27,22],"117":[22],"118":[34],"119":[34],"35":[34],"120":[34],"121":[2],"122":[2]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.MonoBehaviour","CameraFollow2D","AutoCameraFit","UnityEngine.Transform","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Mesh","UnityEngine.Material","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","MoveBetweenPoints","PlayerCardUIManager","UnityEngine.GameObject","Ply_SoundManager","UnityEngine.AudioClip","UnityEngine.AudioSource","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.UI.Button","HairCutController","UnityEngine.SpriteMask","UnityEngine.BoxCollider2D","HideOnFirstClick","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_FontAsset","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","BatStrikeController","SlotTrigger","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.InputSystem.UI.InputSystemUIInputModule","UnityEngine.InputSystem.UI.TrackedDeviceRaycaster","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

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

Deserializers.buildID = "5ca61ac5-2124-4074-bd28-79907454b6b3";

Deserializers.runtimeInitializeOnLoadInfos = [[["Unity","Services","Core","Internal","UnityServicesInitializer","EnableServicesInitializationAsync"],["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["DG","Tweening","DOTween","RuntimeOnLoad"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["Unity","Services","Core","Registration","CorePackageInitializer","InitializeOnLoad"],["Unity","Services","Core","Internal","TaskAsyncOperation","SetScheduler"],["Unity","Services","Core","Environments","Client","Scheduler","EngineStateHelper","Init"],["Unity","Services","Core","Environments","Client","Scheduler","ThreadHelper","Init"],["Ua2CoreInitializeCallback","Register"],["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["Unity","AI","Navigation","NavMeshLink","ClearTrackedList"],["Unity","AI","Navigation","NavMeshSurface","ClearNavMeshSurfaces"],["Unity","AI","Navigation","NavMeshModifierVolume","ClearNavMeshModifiers"],["Unity","AI","Navigation","NavMeshModifier","ClearNavMeshModifiers"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["Unity","Services","Core","Internal","UnityServicesInitializer","CreateStaticInstance"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[["Unity","Services","Core","Environments","Client","Http","JsonHelpers","RegisterTypesForAOT"]],[["Unity","Services","Core","UnityThreadUtils","CaptureUnityThreadInfo"],["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

