var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i620 = root || request.c( 'UnityEngine.JointSpring' )
  var i621 = data
  i620.spring = i621[0]
  i620.damper = i621[1]
  i620.targetPosition = i621[2]
  return i620
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i622 = root || request.c( 'UnityEngine.JointMotor' )
  var i623 = data
  i622.m_TargetVelocity = i623[0]
  i622.m_Force = i623[1]
  i622.m_FreeSpin = i623[2]
  return i622
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i624 = root || request.c( 'UnityEngine.JointLimits' )
  var i625 = data
  i624.m_Min = i625[0]
  i624.m_Max = i625[1]
  i624.m_Bounciness = i625[2]
  i624.m_BounceMinVelocity = i625[3]
  i624.m_ContactDistance = i625[4]
  i624.minBounce = i625[5]
  i624.maxBounce = i625[6]
  return i624
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i626 = root || request.c( 'UnityEngine.JointDrive' )
  var i627 = data
  i626.m_PositionSpring = i627[0]
  i626.m_PositionDamper = i627[1]
  i626.m_MaximumForce = i627[2]
  i626.m_UseAcceleration = i627[3]
  return i626
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i628 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i629 = data
  i628.m_Spring = i629[0]
  i628.m_Damper = i629[1]
  return i628
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i630 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i631 = data
  i630.m_Limit = i631[0]
  i630.m_Bounciness = i631[1]
  i630.m_ContactDistance = i631[2]
  return i630
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i632 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i633 = data
  i632.m_ExtremumSlip = i633[0]
  i632.m_ExtremumValue = i633[1]
  i632.m_AsymptoteSlip = i633[2]
  i632.m_AsymptoteValue = i633[3]
  i632.m_Stiffness = i633[4]
  return i632
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i634 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i635 = data
  i634.m_LowerAngle = i635[0]
  i634.m_UpperAngle = i635[1]
  return i634
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i636 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i637 = data
  i636.m_MotorSpeed = i637[0]
  i636.m_MaximumMotorTorque = i637[1]
  return i636
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i638 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i639 = data
  i638.m_DampingRatio = i639[0]
  i638.m_Frequency = i639[1]
  i638.m_Angle = i639[2]
  return i638
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i640 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i641 = data
  i640.m_LowerTranslation = i641[0]
  i640.m_UpperTranslation = i641[1]
  return i640
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i642 = root || new pc.UnityMaterial()
  var i643 = data
  i642.name = i643[0]
  request.r(i643[1], i643[2], 0, i642, 'shader')
  i642.renderQueue = i643[3]
  i642.enableInstancing = !!i643[4]
  var i645 = i643[5]
  var i644 = []
  for(var i = 0; i < i645.length; i += 1) {
    i644.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i645[i + 0]) );
  }
  i642.floatParameters = i644
  var i647 = i643[6]
  var i646 = []
  for(var i = 0; i < i647.length; i += 1) {
    i646.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i647[i + 0]) );
  }
  i642.colorParameters = i646
  var i649 = i643[7]
  var i648 = []
  for(var i = 0; i < i649.length; i += 1) {
    i648.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i649[i + 0]) );
  }
  i642.vectorParameters = i648
  var i651 = i643[8]
  var i650 = []
  for(var i = 0; i < i651.length; i += 1) {
    i650.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i651[i + 0]) );
  }
  i642.textureParameters = i650
  var i653 = i643[9]
  var i652 = []
  for(var i = 0; i < i653.length; i += 1) {
    i652.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i653[i + 0]) );
  }
  i642.materialFlags = i652
  return i642
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i656 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i657 = data
  i656.name = i657[0]
  i656.value = i657[1]
  return i656
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i660 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i661 = data
  i660.name = i661[0]
  i660.value = new pc.Color(i661[1], i661[2], i661[3], i661[4])
  return i660
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i664 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i665 = data
  i664.name = i665[0]
  i664.value = new pc.Vec4( i665[1], i665[2], i665[3], i665[4] )
  return i664
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i668 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i669 = data
  i668.name = i669[0]
  request.r(i669[1], i669[2], 0, i668, 'value')
  return i668
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i672 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i673 = data
  i672.name = i673[0]
  i672.enabled = !!i673[1]
  return i672
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i674 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i675 = data
  i674.name = i675[0]
  i674.width = i675[1]
  i674.height = i675[2]
  i674.mipmapCount = i675[3]
  i674.anisoLevel = i675[4]
  i674.filterMode = i675[5]
  i674.hdr = !!i675[6]
  i674.format = i675[7]
  i674.wrapMode = i675[8]
  i674.alphaIsTransparency = !!i675[9]
  i674.alphaSource = i675[10]
  i674.graphicsFormat = i675[11]
  i674.sRGBTexture = !!i675[12]
  i674.desiredColorSpace = i675[13]
  i674.wrapU = i675[14]
  i674.wrapV = i675[15]
  return i674
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i676 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i677 = data
  i676.name = i677[0]
  i676.halfPrecision = !!i677[1]
  i676.useSimplification = !!i677[2]
  i676.useUInt32IndexFormat = !!i677[3]
  i676.vertexCount = i677[4]
  i676.aabb = i677[5]
  var i679 = i677[6]
  var i678 = []
  for(var i = 0; i < i679.length; i += 1) {
    i678.push( !!i679[i + 0] );
  }
  i676.streams = i678
  i676.vertices = i677[7]
  var i681 = i677[8]
  var i680 = []
  for(var i = 0; i < i681.length; i += 1) {
    i680.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i681[i + 0]) );
  }
  i676.subMeshes = i680
  var i683 = i677[9]
  var i682 = []
  for(var i = 0; i < i683.length; i += 16) {
    i682.push( new pc.Mat4().setData(i683[i + 0], i683[i + 1], i683[i + 2], i683[i + 3],  i683[i + 4], i683[i + 5], i683[i + 6], i683[i + 7],  i683[i + 8], i683[i + 9], i683[i + 10], i683[i + 11],  i683[i + 12], i683[i + 13], i683[i + 14], i683[i + 15]) );
  }
  i676.bindposes = i682
  var i685 = i677[10]
  var i684 = []
  for(var i = 0; i < i685.length; i += 1) {
    i684.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i685[i + 0]) );
  }
  i676.blendShapes = i684
  return i676
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i690 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i691 = data
  i690.triangles = i691[0]
  return i690
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i696 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i697 = data
  i696.name = i697[0]
  var i699 = i697[1]
  var i698 = []
  for(var i = 0; i < i699.length; i += 1) {
    i698.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i699[i + 0]) );
  }
  i696.frames = i698
  return i696
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i700 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i701 = data
  i700.name = i701[0]
  i700.index = i701[1]
  i700.startup = !!i701[2]
  return i700
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i702 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i703 = data
  i702.aspect = i703[0]
  i702.orthographic = !!i703[1]
  i702.orthographicSize = i703[2]
  i702.backgroundColor = new pc.Color(i703[3], i703[4], i703[5], i703[6])
  i702.nearClipPlane = i703[7]
  i702.farClipPlane = i703[8]
  i702.fieldOfView = i703[9]
  i702.depth = i703[10]
  i702.clearFlags = i703[11]
  i702.cullingMask = i703[12]
  i702.rect = i703[13]
  request.r(i703[14], i703[15], 0, i702, 'targetTexture')
  i702.usePhysicalProperties = !!i703[16]
  i702.focalLength = i703[17]
  i702.sensorSize = new pc.Vec2( i703[18], i703[19] )
  i702.lensShift = new pc.Vec2( i703[20], i703[21] )
  i702.gateFit = i703[22]
  i702.commandBufferCount = i703[23]
  i702.cameraType = i703[24]
  i702.enabled = !!i703[25]
  return i702
}

Deserializers["CameraFollow2D"] = function (request, data, root) {
  var i704 = root || request.c( 'CameraFollow2D' )
  var i705 = data
  request.r(i705[0], i705[1], 0, i704, 'target')
  i704.smoothSpeed = i705[2]
  i704.offset = new pc.Vec3( i705[3], i705[4], i705[5] )
  i704.followY = !!i705[6]
  return i704
}

Deserializers["AutoCameraFit"] = function (request, data, root) {
  var i706 = root || request.c( 'AutoCameraFit' )
  var i707 = data
  request.r(i707[0], i707[1], 0, i706, 'tallScreenObject')
  i706.tallScreenRatioThreshold = i707[2]
  i706.tallScreenYOffset = i707[3]
  request.r(i707[4], i707[5], 0, i706, 'canvasBtn')
  request.r(i707[6], i707[7], 0, i706, 'targetArea')
  i706.paddingLandscape = i707[8]
  i706.paddingPortrait = i707[9]
  i706.extraPaddingSmallScreen = i707[10]
  i706.smallScreenThreshold = i707[11]
  i706.autoUpdateOnResize = !!i707[12]
  i706.adjustInEditMode = !!i707[13]
  return i706
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i708 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i709 = data
  i708.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i709[0], i708.main)
  i708.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i709[1], i708.colorBySpeed)
  i708.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i709[2], i708.colorOverLifetime)
  i708.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i709[3], i708.emission)
  i708.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i709[4], i708.rotationBySpeed)
  i708.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i709[5], i708.rotationOverLifetime)
  i708.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i709[6], i708.shape)
  i708.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i709[7], i708.sizeBySpeed)
  i708.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i709[8], i708.sizeOverLifetime)
  i708.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i709[9], i708.textureSheetAnimation)
  i708.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i709[10], i708.velocityOverLifetime)
  i708.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i709[11], i708.noise)
  i708.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i709[12], i708.inheritVelocity)
  i708.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i709[13], i708.forceOverLifetime)
  i708.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i709[14], i708.limitVelocityOverLifetime)
  i708.useAutoRandomSeed = !!i709[15]
  i708.randomSeed = i709[16]
  return i708
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i710 = root || new pc.ParticleSystemMain()
  var i711 = data
  i710.duration = i711[0]
  i710.loop = !!i711[1]
  i710.prewarm = !!i711[2]
  i710.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i711[3], i710.startDelay)
  i710.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i711[4], i710.startLifetime)
  i710.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i711[5], i710.startSpeed)
  i710.startSize3D = !!i711[6]
  i710.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i711[7], i710.startSizeX)
  i710.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i711[8], i710.startSizeY)
  i710.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i711[9], i710.startSizeZ)
  i710.startRotation3D = !!i711[10]
  i710.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i711[11], i710.startRotationX)
  i710.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i711[12], i710.startRotationY)
  i710.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i711[13], i710.startRotationZ)
  i710.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i711[14], i710.startColor)
  i710.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i711[15], i710.gravityModifier)
  i710.simulationSpace = i711[16]
  request.r(i711[17], i711[18], 0, i710, 'customSimulationSpace')
  i710.simulationSpeed = i711[19]
  i710.useUnscaledTime = !!i711[20]
  i710.scalingMode = i711[21]
  i710.playOnAwake = !!i711[22]
  i710.maxParticles = i711[23]
  i710.emitterVelocityMode = i711[24]
  i710.stopAction = i711[25]
  return i710
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i712 = root || new pc.MinMaxCurve()
  var i713 = data
  i712.mode = i713[0]
  i712.curveMin = new pc.AnimationCurve( { keys_flow: i713[1] } )
  i712.curveMax = new pc.AnimationCurve( { keys_flow: i713[2] } )
  i712.curveMultiplier = i713[3]
  i712.constantMin = i713[4]
  i712.constantMax = i713[5]
  return i712
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i714 = root || new pc.MinMaxGradient()
  var i715 = data
  i714.mode = i715[0]
  i714.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i715[1], i714.gradientMin)
  i714.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i715[2], i714.gradientMax)
  i714.colorMin = new pc.Color(i715[3], i715[4], i715[5], i715[6])
  i714.colorMax = new pc.Color(i715[7], i715[8], i715[9], i715[10])
  return i714
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i716 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i717 = data
  i716.mode = i717[0]
  var i719 = i717[1]
  var i718 = []
  for(var i = 0; i < i719.length; i += 1) {
    i718.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i719[i + 0]) );
  }
  i716.colorKeys = i718
  var i721 = i717[2]
  var i720 = []
  for(var i = 0; i < i721.length; i += 1) {
    i720.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i721[i + 0]) );
  }
  i716.alphaKeys = i720
  return i716
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i722 = root || new pc.ParticleSystemColorBySpeed()
  var i723 = data
  i722.enabled = !!i723[0]
  i722.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i723[1], i722.color)
  i722.range = new pc.Vec2( i723[2], i723[3] )
  return i722
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i726 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i727 = data
  i726.color = new pc.Color(i727[0], i727[1], i727[2], i727[3])
  i726.time = i727[4]
  return i726
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i730 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i731 = data
  i730.alpha = i731[0]
  i730.time = i731[1]
  return i730
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i732 = root || new pc.ParticleSystemColorOverLifetime()
  var i733 = data
  i732.enabled = !!i733[0]
  i732.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i733[1], i732.color)
  return i732
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i734 = root || new pc.ParticleSystemEmitter()
  var i735 = data
  i734.enabled = !!i735[0]
  i734.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i735[1], i734.rateOverTime)
  i734.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i735[2], i734.rateOverDistance)
  var i737 = i735[3]
  var i736 = []
  for(var i = 0; i < i737.length; i += 1) {
    i736.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i737[i + 0]) );
  }
  i734.bursts = i736
  return i734
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i740 = root || new pc.ParticleSystemBurst()
  var i741 = data
  i740.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i741[0], i740.count)
  i740.cycleCount = i741[1]
  i740.minCount = i741[2]
  i740.maxCount = i741[3]
  i740.repeatInterval = i741[4]
  i740.time = i741[5]
  return i740
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i742 = root || new pc.ParticleSystemRotationBySpeed()
  var i743 = data
  i742.enabled = !!i743[0]
  i742.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i743[1], i742.x)
  i742.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i743[2], i742.y)
  i742.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i743[3], i742.z)
  i742.separateAxes = !!i743[4]
  i742.range = new pc.Vec2( i743[5], i743[6] )
  return i742
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i744 = root || new pc.ParticleSystemRotationOverLifetime()
  var i745 = data
  i744.enabled = !!i745[0]
  i744.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i745[1], i744.x)
  i744.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i745[2], i744.y)
  i744.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i745[3], i744.z)
  i744.separateAxes = !!i745[4]
  return i744
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i746 = root || new pc.ParticleSystemShape()
  var i747 = data
  i746.enabled = !!i747[0]
  i746.shapeType = i747[1]
  i746.randomDirectionAmount = i747[2]
  i746.sphericalDirectionAmount = i747[3]
  i746.randomPositionAmount = i747[4]
  i746.alignToDirection = !!i747[5]
  i746.radius = i747[6]
  i746.radiusMode = i747[7]
  i746.radiusSpread = i747[8]
  i746.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i747[9], i746.radiusSpeed)
  i746.radiusThickness = i747[10]
  i746.angle = i747[11]
  i746.length = i747[12]
  i746.boxThickness = new pc.Vec3( i747[13], i747[14], i747[15] )
  i746.meshShapeType = i747[16]
  request.r(i747[17], i747[18], 0, i746, 'mesh')
  request.r(i747[19], i747[20], 0, i746, 'meshRenderer')
  request.r(i747[21], i747[22], 0, i746, 'skinnedMeshRenderer')
  i746.useMeshMaterialIndex = !!i747[23]
  i746.meshMaterialIndex = i747[24]
  i746.useMeshColors = !!i747[25]
  i746.normalOffset = i747[26]
  i746.arc = i747[27]
  i746.arcMode = i747[28]
  i746.arcSpread = i747[29]
  i746.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i747[30], i746.arcSpeed)
  i746.donutRadius = i747[31]
  i746.position = new pc.Vec3( i747[32], i747[33], i747[34] )
  i746.rotation = new pc.Vec3( i747[35], i747[36], i747[37] )
  i746.scale = new pc.Vec3( i747[38], i747[39], i747[40] )
  return i746
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i748 = root || new pc.ParticleSystemSizeBySpeed()
  var i749 = data
  i748.enabled = !!i749[0]
  i748.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i749[1], i748.x)
  i748.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i749[2], i748.y)
  i748.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i749[3], i748.z)
  i748.separateAxes = !!i749[4]
  i748.range = new pc.Vec2( i749[5], i749[6] )
  return i748
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i750 = root || new pc.ParticleSystemSizeOverLifetime()
  var i751 = data
  i750.enabled = !!i751[0]
  i750.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i751[1], i750.x)
  i750.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i751[2], i750.y)
  i750.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i751[3], i750.z)
  i750.separateAxes = !!i751[4]
  return i750
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i752 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i753 = data
  i752.enabled = !!i753[0]
  i752.mode = i753[1]
  i752.animation = i753[2]
  i752.numTilesX = i753[3]
  i752.numTilesY = i753[4]
  i752.useRandomRow = !!i753[5]
  i752.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i753[6], i752.frameOverTime)
  i752.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i753[7], i752.startFrame)
  i752.cycleCount = i753[8]
  i752.rowIndex = i753[9]
  i752.flipU = i753[10]
  i752.flipV = i753[11]
  i752.spriteCount = i753[12]
  var i755 = i753[13]
  var i754 = []
  for(var i = 0; i < i755.length; i += 2) {
  request.r(i755[i + 0], i755[i + 1], 2, i754, '')
  }
  i752.sprites = i754
  return i752
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i758 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i759 = data
  i758.enabled = !!i759[0]
  i758.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i759[1], i758.x)
  i758.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i759[2], i758.y)
  i758.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i759[3], i758.z)
  i758.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i759[4], i758.radial)
  i758.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i759[5], i758.speedModifier)
  i758.space = i759[6]
  i758.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i759[7], i758.orbitalX)
  i758.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i759[8], i758.orbitalY)
  i758.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i759[9], i758.orbitalZ)
  i758.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i759[10], i758.orbitalOffsetX)
  i758.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i759[11], i758.orbitalOffsetY)
  i758.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i759[12], i758.orbitalOffsetZ)
  return i758
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i760 = root || new pc.ParticleSystemNoise()
  var i761 = data
  i760.enabled = !!i761[0]
  i760.separateAxes = !!i761[1]
  i760.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i761[2], i760.strengthX)
  i760.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i761[3], i760.strengthY)
  i760.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i761[4], i760.strengthZ)
  i760.frequency = i761[5]
  i760.damping = !!i761[6]
  i760.octaveCount = i761[7]
  i760.octaveMultiplier = i761[8]
  i760.octaveScale = i761[9]
  i760.quality = i761[10]
  i760.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i761[11], i760.scrollSpeed)
  i760.scrollSpeedMultiplier = i761[12]
  i760.remapEnabled = !!i761[13]
  i760.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i761[14], i760.remapX)
  i760.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i761[15], i760.remapY)
  i760.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i761[16], i760.remapZ)
  i760.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i761[17], i760.positionAmount)
  i760.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i761[18], i760.rotationAmount)
  i760.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i761[19], i760.sizeAmount)
  return i760
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i762 = root || new pc.ParticleSystemInheritVelocity()
  var i763 = data
  i762.enabled = !!i763[0]
  i762.mode = i763[1]
  i762.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i763[2], i762.curve)
  return i762
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i764 = root || new pc.ParticleSystemForceOverLifetime()
  var i765 = data
  i764.enabled = !!i765[0]
  i764.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i765[1], i764.x)
  i764.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i765[2], i764.y)
  i764.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i765[3], i764.z)
  i764.space = i765[4]
  i764.randomized = !!i765[5]
  return i764
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i766 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i767 = data
  i766.enabled = !!i767[0]
  i766.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i767[1], i766.limit)
  i766.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i767[2], i766.limitX)
  i766.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i767[3], i766.limitY)
  i766.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i767[4], i766.limitZ)
  i766.dampen = i767[5]
  i766.separateAxes = !!i767[6]
  i766.space = i767[7]
  i766.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i767[8], i766.drag)
  i766.multiplyDragByParticleSize = !!i767[9]
  i766.multiplyDragByParticleVelocity = !!i767[10]
  return i766
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i768 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i769 = data
  request.r(i769[0], i769[1], 0, i768, 'mesh')
  i768.meshCount = i769[2]
  i768.activeVertexStreamsCount = i769[3]
  i768.alignment = i769[4]
  i768.renderMode = i769[5]
  i768.sortMode = i769[6]
  i768.lengthScale = i769[7]
  i768.velocityScale = i769[8]
  i768.cameraVelocityScale = i769[9]
  i768.normalDirection = i769[10]
  i768.sortingFudge = i769[11]
  i768.minParticleSize = i769[12]
  i768.maxParticleSize = i769[13]
  i768.pivot = new pc.Vec3( i769[14], i769[15], i769[16] )
  request.r(i769[17], i769[18], 0, i768, 'trailMaterial')
  i768.applyActiveColorSpace = !!i769[19]
  i768.enabled = !!i769[20]
  request.r(i769[21], i769[22], 0, i768, 'sharedMaterial')
  var i771 = i769[23]
  var i770 = []
  for(var i = 0; i < i771.length; i += 2) {
  request.r(i771[i + 0], i771[i + 1], 2, i770, '')
  }
  i768.sharedMaterials = i770
  i768.receiveShadows = !!i769[24]
  i768.shadowCastingMode = i769[25]
  i768.sortingLayerID = i769[26]
  i768.sortingOrder = i769[27]
  i768.lightmapIndex = i769[28]
  i768.lightmapSceneIndex = i769[29]
  i768.lightmapScaleOffset = new pc.Vec4( i769[30], i769[31], i769[32], i769[33] )
  i768.lightProbeUsage = i769[34]
  i768.reflectionProbeUsage = i769[35]
  return i768
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i774 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i775 = data
  i774.name = i775[0]
  i774.tagId = i775[1]
  i774.enabled = !!i775[2]
  i774.isStatic = !!i775[3]
  i774.layer = i775[4]
  return i774
}

Deserializers["Ply_SoundManager"] = function (request, data, root) {
  var i776 = root || request.c( 'Ply_SoundManager' )
  var i777 = data
  i776.fxAudio = request.d('FxAudio', i777[0], i776.fxAudio)
  request.r(i777[1], i777[2], 0, i776, 'bgm1')
  return i776
}

Deserializers["FxAudio"] = function (request, data, root) {
  var i778 = root || request.c( 'FxAudio' )
  var i779 = data
  i778.ClickBox = request.d('SoundData', i779[0], i778.ClickBox)
  i778.Happy = request.d('SoundData', i779[1], i778.Happy)
  i778.Wrong = request.d('SoundData', i779[2], i778.Wrong)
  i778.Spray = request.d('SoundData', i779[3], i778.Spray)
  i778.Brush = request.d('SoundData', i779[4], i778.Brush)
  i778.Keo = request.d('SoundData', i779[5], i778.Keo)
  i778.Confetti = request.d('SoundData', i779[6], i778.Confetti)
  i778.Lose2 = request.d('SoundData', i779[7], i778.Lose2)
  i778.SelectVini = request.d('SoundData', i779[8], i778.SelectVini)
  i778.SelectMessiMbappe = request.d('SoundData', i779[9], i778.SelectMessiMbappe)
  i778.Tackle = request.d('SoundData', i779[10], i778.Tackle)
  i778.HaalandHurt = request.d('SoundData', i779[11], i778.HaalandHurt)
  return i778
}

Deserializers["SoundData"] = function (request, data, root) {
  var i780 = root || request.c( 'SoundData' )
  var i781 = data
  request.r(i781[0], i781[1], 0, i780, 'clip')
  i780.repeatCount = i781[2]
  return i780
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i782 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i783 = data
  request.r(i783[0], i783[1], 0, i782, 'clip')
  request.r(i783[2], i783[3], 0, i782, 'outputAudioMixerGroup')
  i782.playOnAwake = !!i783[4]
  i782.loop = !!i783[5]
  i782.time = i783[6]
  i782.volume = i783[7]
  i782.pitch = i783[8]
  i782.enabled = !!i783[9]
  return i782
}

Deserializers["HaalandGame.HaalandGameManager"] = function (request, data, root) {
  var i784 = root || request.c( 'HaalandGame.HaalandGameManager' )
  var i785 = data
  request.r(i785[0], i785[1], 0, i784, 'tutUI')
  request.r(i785[2], i785[3], 0, i784, 'ronaldoTackle')
  request.r(i785[4], i785[5], 0, i784, 'ronaldoTackleAnimator')
  i784.startRonaldoTackleTrigger = i785[6]
  request.r(i785[7], i785[8], 0, i784, 'messiTackle')
  request.r(i785[9], i785[10], 0, i784, 'messiTackleAnimator')
  i784.startMessiTackleTrigger = i785[11]
  i784.tackleAnimDelay = i785[12]
  request.r(i785[13], i785[14], 0, i784, 'haalandDribbleImage')
  request.r(i785[15], i785[16], 0, i784, 'haalandDribbleAnimator')
  i784.startHaalandDribbleTrigger = i785[17]
  request.r(i785[18], i785[19], 0, i784, 'fightingCloud')
  request.r(i785[20], i785[21], 0, i784, 'haalandHurt')
  request.r(i785[22], i785[23], 0, i784, 'standPlayers')
  request.r(i785[24], i785[25], 0, i784, 'standPlayersAnimator')
  i784.standPlayerEnterTrigger = i785[26]
  request.r(i785[27], i785[28], 0, i784, 'questionUI')
  request.r(i785[29], i785[30], 0, i784, 'wrongChoiceUI')
  request.r(i785[31], i785[32], 0, i784, 'winChoiceUI')
  request.r(i785[33], i785[34], 0, i784, 'winExtraObj1')
  request.r(i785[35], i785[36], 0, i784, 'winExtraObj2')
  request.r(i785[37], i785[38], 0, i784, 'iconListUI')
  request.r(i785[39], i785[40], 0, i784, 'refereeAnimator')
  i784.refereeLookAroundTrigger = i785[41]
  i784.useAutoTimers = !!i785[42]
  i784.tackleHideDelay = i785[43]
  i784.impactCloudDelay = i785[44]
  i784.haalandHurtDelay = i785[45]
  i784.cloudDuration = i785[46]
  i784.refereeAnimDelay = i785[47]
  i784.nextActionDelay = i785[48]
  i784.dribbleToTackleDelay = i785[49]
  i784.tackleSoundDelay = i785[50]
  request.r(i785[51], i785[52], 0, i784, 'ronaldoStandAnimator')
  request.r(i785[53], i785[54], 0, i784, 'viniStandAnimator')
  request.r(i785[55], i785[56], 0, i784, 'messiStandAnimator')
  request.r(i785[57], i785[58], 0, i784, 'mbappeStandAnimator')
  request.r(i785[59], i785[60], 0, i784, 'ronaldoChatBubble')
  request.r(i785[61], i785[62], 0, i784, 'messiChatBubble')
  request.r(i785[63], i785[64], 0, i784, 'viniChatBubble')
  request.r(i785[65], i785[66], 0, i784, 'mbappeChatBubble')
  request.r(i785[67], i785[68], 0, i784, 'ronaldoSpriteRenderer')
  request.r(i785[69], i785[70], 0, i784, 'ronaldoSadSprite')
  request.r(i785[71], i785[72], 0, i784, 'ronaldoEvilLaughSprite')
  request.r(i785[73], i785[74], 0, i784, 'messiSpriteRenderer')
  request.r(i785[75], i785[76], 0, i784, 'messiSadSprite')
  request.r(i785[77], i785[78], 0, i784, 'viniSpriteRenderer')
  request.r(i785[79], i785[80], 0, i784, 'viniSadSprite')
  request.r(i785[81], i785[82], 0, i784, 'mbappeSpriteRenderer')
  request.r(i785[83], i785[84], 0, i784, 'mbappeSadSprite')
  request.r(i785[85], i785[86], 0, i784, 'refereeSpriteRenderer')
  request.r(i785[87], i785[88], 0, i784, 'refereeReactionSprite')
  request.r(i785[89], i785[90], 0, i784, 'iconListAnimator')
  i784.currentLevel = i785[91]
  return i784
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i786 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i787 = data
  i786.pivot = new pc.Vec2( i787[0], i787[1] )
  i786.anchorMin = new pc.Vec2( i787[2], i787[3] )
  i786.anchorMax = new pc.Vec2( i787[4], i787[5] )
  i786.sizeDelta = new pc.Vec2( i787[6], i787[7] )
  i786.anchoredPosition3D = new pc.Vec3( i787[8], i787[9], i787[10] )
  i786.rotation = new pc.Quat(i787[11], i787[12], i787[13], i787[14])
  i786.scale = new pc.Vec3( i787[15], i787[16], i787[17] )
  return i786
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i788 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i789 = data
  i788.planeDistance = i789[0]
  i788.referencePixelsPerUnit = i789[1]
  i788.isFallbackOverlay = !!i789[2]
  i788.renderMode = i789[3]
  i788.renderOrder = i789[4]
  i788.sortingLayerName = i789[5]
  i788.sortingOrder = i789[6]
  i788.scaleFactor = i789[7]
  request.r(i789[8], i789[9], 0, i788, 'worldCamera')
  i788.overrideSorting = !!i789[10]
  i788.pixelPerfect = !!i789[11]
  i788.targetDisplay = i789[12]
  i788.overridePixelPerfect = !!i789[13]
  i788.enabled = !!i789[14]
  return i788
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i790 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i791 = data
  i790.m_UiScaleMode = i791[0]
  i790.m_ReferencePixelsPerUnit = i791[1]
  i790.m_ScaleFactor = i791[2]
  i790.m_ReferenceResolution = new pc.Vec2( i791[3], i791[4] )
  i790.m_ScreenMatchMode = i791[5]
  i790.m_MatchWidthOrHeight = i791[6]
  i790.m_PhysicalUnit = i791[7]
  i790.m_FallbackScreenDPI = i791[8]
  i790.m_DefaultSpriteDPI = i791[9]
  i790.m_DynamicPixelsPerUnit = i791[10]
  i790.m_PresetInfoIsWorld = !!i791[11]
  return i790
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i792 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i793 = data
  i792.m_IgnoreReversedGraphics = !!i793[0]
  i792.m_BlockingObjects = i793[1]
  i792.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i793[2] )
  return i792
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i794 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i795 = data
  i794.cullTransparentMesh = !!i795[0]
  return i794
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i796 = root || request.c( 'UnityEngine.UI.Image' )
  var i797 = data
  request.r(i797[0], i797[1], 0, i796, 'm_Sprite')
  i796.m_Type = i797[2]
  i796.m_PreserveAspect = !!i797[3]
  i796.m_FillCenter = !!i797[4]
  i796.m_FillMethod = i797[5]
  i796.m_FillAmount = i797[6]
  i796.m_FillClockwise = !!i797[7]
  i796.m_FillOrigin = i797[8]
  i796.m_UseSpriteMesh = !!i797[9]
  i796.m_PixelsPerUnitMultiplier = i797[10]
  request.r(i797[11], i797[12], 0, i796, 'm_Material')
  i796.m_Maskable = !!i797[13]
  i796.m_Color = new pc.Color(i797[14], i797[15], i797[16], i797[17])
  i796.m_RaycastTarget = !!i797[18]
  i796.m_RaycastPadding = new pc.Vec4( i797[19], i797[20], i797[21], i797[22] )
  return i796
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i798 = root || request.c( 'UnityEngine.UI.Button' )
  var i799 = data
  i798.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i799[0], i798.m_OnClick)
  i798.m_Navigation = request.d('UnityEngine.UI.Navigation', i799[1], i798.m_Navigation)
  i798.m_Transition = i799[2]
  i798.m_Colors = request.d('UnityEngine.UI.ColorBlock', i799[3], i798.m_Colors)
  i798.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i799[4], i798.m_SpriteState)
  i798.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i799[5], i798.m_AnimationTriggers)
  i798.m_Interactable = !!i799[6]
  request.r(i799[7], i799[8], 0, i798, 'm_TargetGraphic')
  return i798
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i800 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i801 = data
  i800.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i801[0], i800.m_PersistentCalls)
  return i800
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i802 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i803 = data
  var i805 = i803[0]
  var i804 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i805.length; i += 1) {
    i804.add(request.d('UnityEngine.Events.PersistentCall', i805[i + 0]));
  }
  i802.m_Calls = i804
  return i802
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i808 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i809 = data
  request.r(i809[0], i809[1], 0, i808, 'm_Target')
  i808.m_TargetAssemblyTypeName = i809[2]
  i808.m_MethodName = i809[3]
  i808.m_Mode = i809[4]
  i808.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i809[5], i808.m_Arguments)
  i808.m_CallState = i809[6]
  return i808
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i810 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i811 = data
  request.r(i811[0], i811[1], 0, i810, 'm_ObjectArgument')
  i810.m_ObjectArgumentAssemblyTypeName = i811[2]
  i810.m_IntArgument = i811[3]
  i810.m_FloatArgument = i811[4]
  i810.m_StringArgument = i811[5]
  i810.m_BoolArgument = !!i811[6]
  return i810
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i812 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i813 = data
  i812.m_Mode = i813[0]
  i812.m_WrapAround = !!i813[1]
  request.r(i813[2], i813[3], 0, i812, 'm_SelectOnUp')
  request.r(i813[4], i813[5], 0, i812, 'm_SelectOnDown')
  request.r(i813[6], i813[7], 0, i812, 'm_SelectOnLeft')
  request.r(i813[8], i813[9], 0, i812, 'm_SelectOnRight')
  return i812
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i814 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i815 = data
  i814.m_NormalColor = new pc.Color(i815[0], i815[1], i815[2], i815[3])
  i814.m_HighlightedColor = new pc.Color(i815[4], i815[5], i815[6], i815[7])
  i814.m_PressedColor = new pc.Color(i815[8], i815[9], i815[10], i815[11])
  i814.m_SelectedColor = new pc.Color(i815[12], i815[13], i815[14], i815[15])
  i814.m_DisabledColor = new pc.Color(i815[16], i815[17], i815[18], i815[19])
  i814.m_ColorMultiplier = i815[20]
  i814.m_FadeDuration = i815[21]
  return i814
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i816 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i817 = data
  request.r(i817[0], i817[1], 0, i816, 'm_HighlightedSprite')
  request.r(i817[2], i817[3], 0, i816, 'm_PressedSprite')
  request.r(i817[4], i817[5], 0, i816, 'm_SelectedSprite')
  request.r(i817[6], i817[7], 0, i816, 'm_DisabledSprite')
  return i816
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i818 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i819 = data
  i818.m_NormalTrigger = i819[0]
  i818.m_HighlightedTrigger = i819[1]
  i818.m_PressedTrigger = i819[2]
  i818.m_SelectedTrigger = i819[3]
  i818.m_DisabledTrigger = i819[4]
  return i818
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i820 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i821 = data
  request.r(i821[0], i821[1], 0, i820, 'animatorController')
  request.r(i821[2], i821[3], 0, i820, 'avatar')
  i820.updateMode = i821[4]
  i820.hasTransformHierarchy = !!i821[5]
  i820.applyRootMotion = !!i821[6]
  var i823 = i821[7]
  var i822 = []
  for(var i = 0; i < i823.length; i += 2) {
  request.r(i823[i + 0], i823[i + 1], 2, i822, '')
  }
  i820.humanBones = i822
  i820.enabled = !!i821[8]
  return i820
}

Deserializers["HaalandGame.IconListAnimator"] = function (request, data, root) {
  var i826 = root || request.c( 'HaalandGame.IconListAnimator' )
  var i827 = data
  var i829 = i827[0]
  var i828 = []
  for(var i = 0; i < i829.length; i += 2) {
  request.r(i829[i + 0], i829[i + 1], 2, i828, '')
  }
  i826.iconTransforms = i828
  i826.initialDelay = i827[1]
  i826.targetScaleMult = i827[2]
  i826.pulseDuration = i827[3]
  i826.delayBetweenIcons = i827[4]
  i826.delayBetweenLoops = i827[5]
  return i826
}

Deserializers["HideOnFirstClick"] = function (request, data, root) {
  var i832 = root || request.c( 'HideOnFirstClick' )
  var i833 = data
  request.r(i833[0], i833[1], 0, i832, 'objectToHide')
  return i832
}

Deserializers["ScreenHeightPositionAnchor"] = function (request, data, root) {
  var i834 = root || request.c( 'ScreenHeightPositionAnchor' )
  var i835 = data
  request.r(i835[0], i835[1], 0, i834, 'anchorPoint')
  request.r(i835[2], i835[3], 0, i834, 'targetCamera')
  i834.viewportYRatio = i835[4]
  i834.alignOnStart = !!i835[5]
  i834.alignOnEnable = !!i835[6]
  i834.realignOnScreenSizeChanged = !!i835[7]
  i834.drawGizmos = !!i835[8]
  i834.targetLineColor = new pc.Color(i835[9], i835[10], i835[11], i835[12])
  i834.anchorColor = new pc.Color(i835[13], i835[14], i835[15], i835[16])
  return i834
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i836 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i837 = data
  i836.color = new pc.Color(i837[0], i837[1], i837[2], i837[3])
  request.r(i837[4], i837[5], 0, i836, 'sprite')
  i836.flipX = !!i837[6]
  i836.flipY = !!i837[7]
  i836.drawMode = i837[8]
  i836.size = new pc.Vec2( i837[9], i837[10] )
  i836.tileMode = i837[11]
  i836.adaptiveModeThreshold = i837[12]
  i836.maskInteraction = i837[13]
  i836.spriteSortPoint = i837[14]
  i836.enabled = !!i837[15]
  request.r(i837[16], i837[17], 0, i836, 'sharedMaterial')
  var i839 = i837[18]
  var i838 = []
  for(var i = 0; i < i839.length; i += 2) {
  request.r(i839[i + 0], i839[i + 1], 2, i838, '')
  }
  i836.sharedMaterials = i838
  i836.receiveShadows = !!i837[19]
  i836.shadowCastingMode = i837[20]
  i836.sortingLayerID = i837[21]
  i836.sortingOrder = i837[22]
  i836.lightmapIndex = i837[23]
  i836.lightmapSceneIndex = i837[24]
  i836.lightmapScaleOffset = new pc.Vec4( i837[25], i837[26], i837[27], i837[28] )
  i836.lightProbeUsage = i837[29]
  i836.reflectionProbeUsage = i837[30]
  return i836
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i840 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i841 = data
  i840.center = new pc.Vec3( i841[0], i841[1], i841[2] )
  i840.size = new pc.Vec3( i841[3], i841[4], i841[5] )
  i840.enabled = !!i841[6]
  i840.isTrigger = !!i841[7]
  request.r(i841[8], i841[9], 0, i840, 'material')
  return i840
}

Deserializers["HaalandGame.PlayerSelectable"] = function (request, data, root) {
  var i842 = root || request.c( 'HaalandGame.PlayerSelectable' )
  var i843 = data
  i842.playerType = i843[0]
  i842.targetLayerName = i843[1]
  return i842
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i844 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i845 = data
  request.r(i845[0], i845[1], 0, i844, 'm_FirstSelected')
  i844.m_sendNavigationEvents = !!i845[2]
  i844.m_DragThreshold = i845[3]
  return i844
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i846 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i847 = data
  i846.m_HorizontalAxis = i847[0]
  i846.m_VerticalAxis = i847[1]
  i846.m_SubmitButton = i847[2]
  i846.m_CancelButton = i847[3]
  i846.m_InputActionsPerSecond = i847[4]
  i846.m_RepeatDelay = i847[5]
  i846.m_ForceModuleActive = !!i847[6]
  i846.m_SendPointerHoverToParent = !!i847[7]
  return i846
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i848 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i849 = data
  i848.ambientIntensity = i849[0]
  i848.reflectionIntensity = i849[1]
  i848.ambientMode = i849[2]
  i848.ambientLight = new pc.Color(i849[3], i849[4], i849[5], i849[6])
  i848.ambientSkyColor = new pc.Color(i849[7], i849[8], i849[9], i849[10])
  i848.ambientGroundColor = new pc.Color(i849[11], i849[12], i849[13], i849[14])
  i848.ambientEquatorColor = new pc.Color(i849[15], i849[16], i849[17], i849[18])
  i848.fogColor = new pc.Color(i849[19], i849[20], i849[21], i849[22])
  i848.fogEndDistance = i849[23]
  i848.fogStartDistance = i849[24]
  i848.fogDensity = i849[25]
  i848.fog = !!i849[26]
  request.r(i849[27], i849[28], 0, i848, 'skybox')
  i848.fogMode = i849[29]
  var i851 = i849[30]
  var i850 = []
  for(var i = 0; i < i851.length; i += 1) {
    i850.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i851[i + 0]) );
  }
  i848.lightmaps = i850
  i848.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i849[31], i848.lightProbes)
  i848.lightmapsMode = i849[32]
  i848.mixedBakeMode = i849[33]
  i848.environmentLightingMode = i849[34]
  i848.ambientProbe = new pc.SphericalHarmonicsL2(i849[35])
  i848.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i849[36])
  i848.useReferenceAmbientProbe = !!i849[37]
  request.r(i849[38], i849[39], 0, i848, 'customReflection')
  request.r(i849[40], i849[41], 0, i848, 'defaultReflection')
  i848.defaultReflectionMode = i849[42]
  i848.defaultReflectionResolution = i849[43]
  i848.sunLightObjectId = i849[44]
  i848.pixelLightCount = i849[45]
  i848.defaultReflectionHDR = !!i849[46]
  i848.hasLightDataAsset = !!i849[47]
  i848.hasManualGenerate = !!i849[48]
  return i848
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i854 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i855 = data
  request.r(i855[0], i855[1], 0, i854, 'lightmapColor')
  request.r(i855[2], i855[3], 0, i854, 'lightmapDirection')
  request.r(i855[4], i855[5], 0, i854, 'shadowMask')
  return i854
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i856 = root || new UnityEngine.LightProbes()
  var i857 = data
  return i856
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i864 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i865 = data
  var i867 = i865[0]
  var i866 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i867.length; i += 1) {
    i866.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i867[i + 0]));
  }
  i864.ShaderCompilationErrors = i866
  i864.name = i865[1]
  i864.guid = i865[2]
  var i869 = i865[3]
  var i868 = []
  for(var i = 0; i < i869.length; i += 1) {
    i868.push( i869[i + 0] );
  }
  i864.shaderDefinedKeywords = i868
  var i871 = i865[4]
  var i870 = []
  for(var i = 0; i < i871.length; i += 1) {
    i870.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i871[i + 0]) );
  }
  i864.passes = i870
  var i873 = i865[5]
  var i872 = []
  for(var i = 0; i < i873.length; i += 1) {
    i872.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i873[i + 0]) );
  }
  i864.usePasses = i872
  var i875 = i865[6]
  var i874 = []
  for(var i = 0; i < i875.length; i += 1) {
    i874.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i875[i + 0]) );
  }
  i864.defaultParameterValues = i874
  request.r(i865[7], i865[8], 0, i864, 'unityFallbackShader')
  i864.readDepth = !!i865[9]
  i864.hasDepthOnlyPass = !!i865[10]
  i864.isCreatedByShaderGraph = !!i865[11]
  i864.disableBatching = !!i865[12]
  i864.compiled = !!i865[13]
  return i864
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i878 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i879 = data
  i878.shaderName = i879[0]
  i878.errorMessage = i879[1]
  return i878
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i884 = root || new pc.UnityShaderPass()
  var i885 = data
  i884.id = i885[0]
  i884.subShaderIndex = i885[1]
  i884.name = i885[2]
  i884.passType = i885[3]
  i884.grabPassTextureName = i885[4]
  i884.usePass = !!i885[5]
  i884.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i885[6], i884.zTest)
  i884.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i885[7], i884.zWrite)
  i884.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i885[8], i884.culling)
  i884.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i885[9], i884.blending)
  i884.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i885[10], i884.alphaBlending)
  i884.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i885[11], i884.colorWriteMask)
  i884.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i885[12], i884.offsetUnits)
  i884.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i885[13], i884.offsetFactor)
  i884.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i885[14], i884.stencilRef)
  i884.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i885[15], i884.stencilReadMask)
  i884.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i885[16], i884.stencilWriteMask)
  i884.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i885[17], i884.stencilOp)
  i884.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i885[18], i884.stencilOpFront)
  i884.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i885[19], i884.stencilOpBack)
  var i887 = i885[20]
  var i886 = []
  for(var i = 0; i < i887.length; i += 1) {
    i886.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i887[i + 0]) );
  }
  i884.tags = i886
  var i889 = i885[21]
  var i888 = []
  for(var i = 0; i < i889.length; i += 1) {
    i888.push( i889[i + 0] );
  }
  i884.passDefinedKeywords = i888
  var i891 = i885[22]
  var i890 = []
  for(var i = 0; i < i891.length; i += 1) {
    i890.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i891[i + 0]) );
  }
  i884.passDefinedKeywordGroups = i890
  var i893 = i885[23]
  var i892 = []
  for(var i = 0; i < i893.length; i += 1) {
    i892.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i893[i + 0]) );
  }
  i884.variants = i892
  var i895 = i885[24]
  var i894 = []
  for(var i = 0; i < i895.length; i += 1) {
    i894.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i895[i + 0]) );
  }
  i884.excludedVariants = i894
  i884.hasDepthReader = !!i885[25]
  return i884
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i896 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i897 = data
  i896.val = i897[0]
  i896.name = i897[1]
  return i896
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i898 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i899 = data
  i898.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i899[0], i898.src)
  i898.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i899[1], i898.dst)
  i898.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i899[2], i898.op)
  return i898
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i900 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i901 = data
  i900.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i901[0], i900.pass)
  i900.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i901[1], i900.fail)
  i900.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i901[2], i900.zFail)
  i900.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i901[3], i900.comp)
  return i900
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i904 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i905 = data
  i904.name = i905[0]
  i904.value = i905[1]
  return i904
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i908 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i909 = data
  var i911 = i909[0]
  var i910 = []
  for(var i = 0; i < i911.length; i += 1) {
    i910.push( i911[i + 0] );
  }
  i908.keywords = i910
  i908.hasDiscard = !!i909[1]
  return i908
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i914 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i915 = data
  i914.passId = i915[0]
  i914.subShaderIndex = i915[1]
  var i917 = i915[2]
  var i916 = []
  for(var i = 0; i < i917.length; i += 1) {
    i916.push( i917[i + 0] );
  }
  i914.keywords = i916
  i914.vertexProgram = i915[3]
  i914.fragmentProgram = i915[4]
  i914.exportedForWebGl2 = !!i915[5]
  i914.readDepth = !!i915[6]
  return i914
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i920 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i921 = data
  request.r(i921[0], i921[1], 0, i920, 'shader')
  i920.pass = i921[2]
  return i920
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i924 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i925 = data
  i924.name = i925[0]
  i924.type = i925[1]
  i924.value = new pc.Vec4( i925[2], i925[3], i925[4], i925[5] )
  i924.textureValue = i925[6]
  i924.shaderPropertyFlag = i925[7]
  return i924
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i926 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i927 = data
  i926.name = i927[0]
  request.r(i927[1], i927[2], 0, i926, 'texture')
  i926.aabb = i927[3]
  i926.vertices = i927[4]
  i926.triangles = i927[5]
  i926.textureRect = UnityEngine.Rect.MinMaxRect(i927[6], i927[7], i927[8], i927[9])
  i926.packedRect = UnityEngine.Rect.MinMaxRect(i927[10], i927[11], i927[12], i927[13])
  i926.border = new pc.Vec4( i927[14], i927[15], i927[16], i927[17] )
  i926.transparency = i927[18]
  i926.bounds = i927[19]
  i926.pixelsPerUnit = i927[20]
  i926.textureWidth = i927[21]
  i926.textureHeight = i927[22]
  i926.nativeSize = new pc.Vec2( i927[23], i927[24] )
  i926.pivot = new pc.Vec2( i927[25], i927[26] )
  i926.textureRectOffset = new pc.Vec2( i927[27], i927[28] )
  return i926
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i928 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i929 = data
  i928.name = i929[0]
  return i928
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i930 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i931 = data
  i930.name = i931[0]
  i930.wrapMode = i931[1]
  i930.isLooping = !!i931[2]
  i930.length = i931[3]
  var i933 = i931[4]
  var i932 = []
  for(var i = 0; i < i933.length; i += 1) {
    i932.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i933[i + 0]) );
  }
  i930.curves = i932
  var i935 = i931[5]
  var i934 = []
  for(var i = 0; i < i935.length; i += 1) {
    i934.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i935[i + 0]) );
  }
  i930.events = i934
  i930.halfPrecision = !!i931[6]
  i930._frameRate = i931[7]
  i930.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i931[8], i930.localBounds)
  i930.hasMuscleCurves = !!i931[9]
  var i937 = i931[10]
  var i936 = []
  for(var i = 0; i < i937.length; i += 1) {
    i936.push( i937[i + 0] );
  }
  i930.clipMuscleConstant = i936
  i930.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i931[11], i930.clipBindingConstant)
  return i930
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i940 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i941 = data
  i940.path = i941[0]
  i940.hash = i941[1]
  i940.componentType = i941[2]
  i940.property = i941[3]
  i940.keys = i941[4]
  var i943 = i941[5]
  var i942 = []
  for(var i = 0; i < i943.length; i += 1) {
    i942.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i943[i + 0]) );
  }
  i940.objectReferenceKeys = i942
  return i940
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i946 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i947 = data
  i946.time = i947[0]
  request.r(i947[1], i947[2], 0, i946, 'value')
  return i946
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i950 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i951 = data
  i950.functionName = i951[0]
  i950.floatParameter = i951[1]
  i950.intParameter = i951[2]
  i950.stringParameter = i951[3]
  request.r(i951[4], i951[5], 0, i950, 'objectReferenceParameter')
  i950.time = i951[6]
  return i950
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i952 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i953 = data
  i952.center = new pc.Vec3( i953[0], i953[1], i953[2] )
  i952.extends = new pc.Vec3( i953[3], i953[4], i953[5] )
  return i952
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i956 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i957 = data
  var i959 = i957[0]
  var i958 = []
  for(var i = 0; i < i959.length; i += 1) {
    i958.push( i959[i + 0] );
  }
  i956.genericBindings = i958
  var i961 = i957[1]
  var i960 = []
  for(var i = 0; i < i961.length; i += 1) {
    i960.push( i961[i + 0] );
  }
  i956.pptrCurveMapping = i960
  return i956
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i962 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i963 = data
  i962.name = i963[0]
  i962.ascent = i963[1]
  i962.originalLineHeight = i963[2]
  i962.fontSize = i963[3]
  var i965 = i963[4]
  var i964 = []
  for(var i = 0; i < i965.length; i += 1) {
    i964.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i965[i + 0]) );
  }
  i962.characterInfo = i964
  request.r(i963[5], i963[6], 0, i962, 'texture')
  i962.originalFontSize = i963[7]
  return i962
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i968 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i969 = data
  i968.index = i969[0]
  i968.advance = i969[1]
  i968.bearing = i969[2]
  i968.glyphWidth = i969[3]
  i968.glyphHeight = i969[4]
  i968.minX = i969[5]
  i968.maxX = i969[6]
  i968.minY = i969[7]
  i968.maxY = i969[8]
  i968.uvBottomLeftX = i969[9]
  i968.uvBottomLeftY = i969[10]
  i968.uvBottomRightX = i969[11]
  i968.uvBottomRightY = i969[12]
  i968.uvTopLeftX = i969[13]
  i968.uvTopLeftY = i969[14]
  i968.uvTopRightX = i969[15]
  i968.uvTopRightY = i969[16]
  return i968
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i970 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i971 = data
  i970.name = i971[0]
  var i973 = i971[1]
  var i972 = []
  for(var i = 0; i < i973.length; i += 1) {
    i972.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i973[i + 0]) );
  }
  i970.layers = i972
  var i975 = i971[2]
  var i974 = []
  for(var i = 0; i < i975.length; i += 1) {
    i974.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i975[i + 0]) );
  }
  i970.parameters = i974
  i970.animationClips = i971[3]
  i970.avatarUnsupported = i971[4]
  return i970
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i978 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i979 = data
  i978.name = i979[0]
  i978.defaultWeight = i979[1]
  i978.blendingMode = i979[2]
  i978.avatarMask = i979[3]
  i978.syncedLayerIndex = i979[4]
  i978.syncedLayerAffectsTiming = !!i979[5]
  i978.syncedLayers = i979[6]
  i978.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i979[7], i978.stateMachine)
  return i978
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i980 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i981 = data
  i980.id = i981[0]
  i980.name = i981[1]
  i980.path = i981[2]
  var i983 = i981[3]
  var i982 = []
  for(var i = 0; i < i983.length; i += 1) {
    i982.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i983[i + 0]) );
  }
  i980.states = i982
  var i985 = i981[4]
  var i984 = []
  for(var i = 0; i < i985.length; i += 1) {
    i984.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i985[i + 0]) );
  }
  i980.machines = i984
  var i987 = i981[5]
  var i986 = []
  for(var i = 0; i < i987.length; i += 1) {
    i986.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i987[i + 0]) );
  }
  i980.entryStateTransitions = i986
  var i989 = i981[6]
  var i988 = []
  for(var i = 0; i < i989.length; i += 1) {
    i988.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i989[i + 0]) );
  }
  i980.exitStateTransitions = i988
  var i991 = i981[7]
  var i990 = []
  for(var i = 0; i < i991.length; i += 1) {
    i990.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i991[i + 0]) );
  }
  i980.anyStateTransitions = i990
  i980.defaultStateId = i981[8]
  return i980
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i994 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i995 = data
  i994.id = i995[0]
  i994.name = i995[1]
  i994.cycleOffset = i995[2]
  i994.cycleOffsetParameter = i995[3]
  i994.cycleOffsetParameterActive = !!i995[4]
  i994.mirror = !!i995[5]
  i994.mirrorParameter = i995[6]
  i994.mirrorParameterActive = !!i995[7]
  i994.motionId = i995[8]
  i994.nameHash = i995[9]
  i994.fullPathHash = i995[10]
  i994.speed = i995[11]
  i994.speedParameter = i995[12]
  i994.speedParameterActive = !!i995[13]
  i994.tag = i995[14]
  i994.tagHash = i995[15]
  i994.writeDefaultValues = !!i995[16]
  var i997 = i995[17]
  var i996 = []
  for(var i = 0; i < i997.length; i += 2) {
  request.r(i997[i + 0], i997[i + 1], 2, i996, '')
  }
  i994.behaviours = i996
  var i999 = i995[18]
  var i998 = []
  for(var i = 0; i < i999.length; i += 1) {
    i998.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i999[i + 0]) );
  }
  i994.transitions = i998
  return i994
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1004 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1005 = data
  i1004.fullPath = i1005[0]
  i1004.canTransitionToSelf = !!i1005[1]
  i1004.duration = i1005[2]
  i1004.exitTime = i1005[3]
  i1004.hasExitTime = !!i1005[4]
  i1004.hasFixedDuration = !!i1005[5]
  i1004.interruptionSource = i1005[6]
  i1004.offset = i1005[7]
  i1004.orderedInterruption = !!i1005[8]
  i1004.destinationStateId = i1005[9]
  i1004.isExit = !!i1005[10]
  i1004.mute = !!i1005[11]
  i1004.solo = !!i1005[12]
  var i1007 = i1005[13]
  var i1006 = []
  for(var i = 0; i < i1007.length; i += 1) {
    i1006.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1007[i + 0]) );
  }
  i1004.conditions = i1006
  return i1004
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1012 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1013 = data
  i1012.destinationStateId = i1013[0]
  i1012.isExit = !!i1013[1]
  i1012.mute = !!i1013[2]
  i1012.solo = !!i1013[3]
  var i1015 = i1013[4]
  var i1014 = []
  for(var i = 0; i < i1015.length; i += 1) {
    i1014.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1015[i + 0]) );
  }
  i1012.conditions = i1014
  return i1012
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1018 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1019 = data
  i1018.mode = i1019[0]
  i1018.parameter = i1019[1]
  i1018.threshold = i1019[2]
  return i1018
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1022 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1023 = data
  i1022.defaultBool = !!i1023[0]
  i1022.defaultFloat = i1023[1]
  i1022.defaultInt = i1023[2]
  i1022.name = i1023[3]
  i1022.nameHash = i1023[4]
  i1022.type = i1023[5]
  return i1022
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1024 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1025 = data
  i1024.name = i1025[0]
  i1024.bytes64 = i1025[1]
  i1024.data = i1025[2]
  return i1024
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1026 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1027 = data
  i1026.useSafeMode = !!i1027[0]
  i1026.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1027[1], i1026.safeModeOptions)
  i1026.timeScale = i1027[2]
  i1026.unscaledTimeScale = i1027[3]
  i1026.useSmoothDeltaTime = !!i1027[4]
  i1026.maxSmoothUnscaledTime = i1027[5]
  i1026.rewindCallbackMode = i1027[6]
  i1026.showUnityEditorReport = !!i1027[7]
  i1026.logBehaviour = i1027[8]
  i1026.drawGizmos = !!i1027[9]
  i1026.defaultRecyclable = !!i1027[10]
  i1026.defaultAutoPlay = i1027[11]
  i1026.defaultUpdateType = i1027[12]
  i1026.defaultTimeScaleIndependent = !!i1027[13]
  i1026.defaultEaseType = i1027[14]
  i1026.defaultEaseOvershootOrAmplitude = i1027[15]
  i1026.defaultEasePeriod = i1027[16]
  i1026.defaultAutoKill = !!i1027[17]
  i1026.defaultLoopType = i1027[18]
  i1026.debugMode = !!i1027[19]
  i1026.debugStoreTargetId = !!i1027[20]
  i1026.showPreviewPanel = !!i1027[21]
  i1026.storeSettingsLocation = i1027[22]
  i1026.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1027[23], i1026.modules)
  i1026.createASMDEF = !!i1027[24]
  i1026.showPlayingTweens = !!i1027[25]
  i1026.showPausedTweens = !!i1027[26]
  return i1026
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1028 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1029 = data
  i1028.logBehaviour = i1029[0]
  i1028.nestedTweenFailureBehaviour = i1029[1]
  return i1028
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1030 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1031 = data
  i1030.showPanel = !!i1031[0]
  i1030.audioEnabled = !!i1031[1]
  i1030.physicsEnabled = !!i1031[2]
  i1030.physics2DEnabled = !!i1031[3]
  i1030.spriteEnabled = !!i1031[4]
  i1030.uiEnabled = !!i1031[5]
  i1030.uiToolkitEnabled = !!i1031[6]
  i1030.textMeshProEnabled = !!i1031[7]
  i1030.tk2DEnabled = !!i1031[8]
  i1030.deAudioEnabled = !!i1031[9]
  i1030.deUnityExtendedEnabled = !!i1031[10]
  i1030.epoOutlineEnabled = !!i1031[11]
  return i1030
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i1032 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i1033 = data
  i1032.normalStyle = i1033[0]
  i1032.normalSpacingOffset = i1033[1]
  i1032.boldStyle = i1033[2]
  i1032.boldSpacing = i1033[3]
  i1032.italicStyle = i1033[4]
  i1032.tabSize = i1033[5]
  request.r(i1033[6], i1033[7], 0, i1032, 'atlas')
  i1032.m_SourceFontFileGUID = i1033[8]
  i1032.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i1033[9], i1032.m_CreationSettings)
  request.r(i1033[10], i1033[11], 0, i1032, 'm_SourceFontFile')
  i1032.m_SourceFontFilePath = i1033[12]
  i1032.m_AtlasPopulationMode = i1033[13]
  i1032.InternalDynamicOS = !!i1033[14]
  var i1035 = i1033[15]
  var i1034 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i1035.length; i += 1) {
    i1034.add(request.d('UnityEngine.TextCore.Glyph', i1035[i + 0]));
  }
  i1032.m_GlyphTable = i1034
  var i1037 = i1033[16]
  var i1036 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i1037.length; i += 1) {
    i1036.add(request.d('TMPro.TMP_Character', i1037[i + 0]));
  }
  i1032.m_CharacterTable = i1036
  var i1039 = i1033[17]
  var i1038 = []
  for(var i = 0; i < i1039.length; i += 2) {
  request.r(i1039[i + 0], i1039[i + 1], 2, i1038, '')
  }
  i1032.m_AtlasTextures = i1038
  i1032.m_AtlasTextureIndex = i1033[18]
  i1032.m_IsMultiAtlasTexturesEnabled = !!i1033[19]
  i1032.m_GetFontFeatures = !!i1033[20]
  i1032.m_ClearDynamicDataOnBuild = !!i1033[21]
  i1032.m_AtlasWidth = i1033[22]
  i1032.m_AtlasHeight = i1033[23]
  i1032.m_AtlasPadding = i1033[24]
  i1032.m_AtlasRenderMode = i1033[25]
  var i1041 = i1033[26]
  var i1040 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1041.length; i += 1) {
    i1040.add(request.d('UnityEngine.TextCore.GlyphRect', i1041[i + 0]));
  }
  i1032.m_UsedGlyphRects = i1040
  var i1043 = i1033[27]
  var i1042 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1043.length; i += 1) {
    i1042.add(request.d('UnityEngine.TextCore.GlyphRect', i1043[i + 0]));
  }
  i1032.m_FreeGlyphRects = i1042
  i1032.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i1033[28], i1032.m_FontFeatureTable)
  i1032.m_ShouldReimportFontFeatures = !!i1033[29]
  var i1045 = i1033[30]
  var i1044 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1045.length; i += 2) {
  request.r(i1045[i + 0], i1045[i + 1], 1, i1044, '')
  }
  i1032.m_FallbackFontAssetTable = i1044
  var i1047 = i1033[31]
  var i1046 = []
  for(var i = 0; i < i1047.length; i += 1) {
    i1046.push( request.d('TMPro.TMP_FontWeightPair', i1047[i + 0]) );
  }
  i1032.m_FontWeightTable = i1046
  var i1049 = i1033[32]
  var i1048 = []
  for(var i = 0; i < i1049.length; i += 1) {
    i1048.push( request.d('TMPro.TMP_FontWeightPair', i1049[i + 0]) );
  }
  i1032.fontWeights = i1048
  i1032.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i1033[33], i1032.m_fontInfo)
  var i1051 = i1033[34]
  var i1050 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i1051.length; i += 1) {
    i1050.add(request.d('TMPro.TMP_Glyph', i1051[i + 0]));
  }
  i1032.m_glyphInfoList = i1050
  i1032.m_KerningTable = request.d('TMPro.KerningTable', i1033[35], i1032.m_KerningTable)
  var i1053 = i1033[36]
  var i1052 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1053.length; i += 2) {
  request.r(i1053[i + 0], i1053[i + 1], 1, i1052, '')
  }
  i1032.fallbackFontAssets = i1052
  i1032.m_Version = i1033[37]
  i1032.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1033[38], i1032.m_FaceInfo)
  request.r(i1033[39], i1033[40], 0, i1032, 'm_Material')
  return i1032
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i1054 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i1055 = data
  i1054.sourceFontFileName = i1055[0]
  i1054.sourceFontFileGUID = i1055[1]
  i1054.faceIndex = i1055[2]
  i1054.pointSizeSamplingMode = i1055[3]
  i1054.pointSize = i1055[4]
  i1054.padding = i1055[5]
  i1054.paddingMode = i1055[6]
  i1054.packingMode = i1055[7]
  i1054.atlasWidth = i1055[8]
  i1054.atlasHeight = i1055[9]
  i1054.characterSetSelectionMode = i1055[10]
  i1054.characterSequence = i1055[11]
  i1054.referencedFontAssetGUID = i1055[12]
  i1054.referencedTextAssetGUID = i1055[13]
  i1054.fontStyle = i1055[14]
  i1054.fontStyleModifier = i1055[15]
  i1054.renderMode = i1055[16]
  i1054.includeFontFeatures = !!i1055[17]
  return i1054
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i1058 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i1059 = data
  i1058.m_Index = i1059[0]
  i1058.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1059[1], i1058.m_Metrics)
  i1058.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1059[2], i1058.m_GlyphRect)
  i1058.m_Scale = i1059[3]
  i1058.m_AtlasIndex = i1059[4]
  i1058.m_ClassDefinitionType = i1059[5]
  return i1058
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i1062 = root || request.c( 'TMPro.TMP_Character' )
  var i1063 = data
  i1062.m_ElementType = i1063[0]
  i1062.m_Unicode = i1063[1]
  i1062.m_GlyphIndex = i1063[2]
  i1062.m_Scale = i1063[3]
  return i1062
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1068 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1069 = data
  i1068.m_X = i1069[0]
  i1068.m_Y = i1069[1]
  i1068.m_Width = i1069[2]
  i1068.m_Height = i1069[3]
  return i1068
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i1070 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i1071 = data
  var i1073 = i1071[0]
  var i1072 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i1073.length; i += 1) {
    i1072.add(request.d('TMPro.MultipleSubstitutionRecord', i1073[i + 0]));
  }
  i1070.m_MultipleSubstitutionRecords = i1072
  var i1075 = i1071[1]
  var i1074 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i1075.length; i += 1) {
    i1074.add(request.d('TMPro.LigatureSubstitutionRecord', i1075[i + 0]));
  }
  i1070.m_LigatureSubstitutionRecords = i1074
  var i1077 = i1071[2]
  var i1076 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i1077.length; i += 1) {
    i1076.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i1077[i + 0]));
  }
  i1070.m_GlyphPairAdjustmentRecords = i1076
  var i1079 = i1071[3]
  var i1078 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i1079.length; i += 1) {
    i1078.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i1079[i + 0]));
  }
  i1070.m_MarkToBaseAdjustmentRecords = i1078
  var i1081 = i1071[4]
  var i1080 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i1081.length; i += 1) {
    i1080.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i1081[i + 0]));
  }
  i1070.m_MarkToMarkAdjustmentRecords = i1080
  return i1070
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i1084 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i1085 = data
  i1084.m_TargetGlyphID = i1085[0]
  i1084.m_SubstituteGlyphIDs = i1085[1]
  return i1084
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i1088 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i1089 = data
  i1088.m_ComponentGlyphIDs = i1089[0]
  i1088.m_LigatureGlyphID = i1089[1]
  return i1088
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i1092 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i1093 = data
  i1092.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i1093[0], i1092.m_FirstAdjustmentRecord)
  i1092.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i1093[1], i1092.m_SecondAdjustmentRecord)
  i1092.m_FeatureLookupFlags = i1093[2]
  return i1092
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1094 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i1095 = data
  i1094.m_GlyphIndex = i1095[0]
  i1094.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i1095[1], i1094.m_GlyphValueRecord)
  return i1094
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i1096 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i1097 = data
  i1096.m_XPlacement = i1097[0]
  i1096.m_YPlacement = i1097[1]
  i1096.m_XAdvance = i1097[2]
  i1096.m_YAdvance = i1097[3]
  return i1096
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i1100 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i1101 = data
  i1100.m_BaseGlyphID = i1101[0]
  i1100.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i1101[1], i1100.m_BaseGlyphAnchorPoint)
  i1100.m_MarkGlyphID = i1101[2]
  i1100.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i1101[3], i1100.m_MarkPositionAdjustment)
  return i1100
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i1104 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i1105 = data
  i1104.m_BaseMarkGlyphID = i1105[0]
  i1104.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i1105[1], i1104.m_BaseMarkGlyphAnchorPoint)
  i1104.m_CombiningMarkGlyphID = i1105[2]
  i1104.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i1105[3], i1104.m_CombiningMarkPositionAdjustment)
  return i1104
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i1110 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i1111 = data
  request.r(i1111[0], i1111[1], 0, i1110, 'regularTypeface')
  request.r(i1111[2], i1111[3], 0, i1110, 'italicTypeface')
  return i1110
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i1112 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i1113 = data
  i1112.Name = i1113[0]
  i1112.PointSize = i1113[1]
  i1112.Scale = i1113[2]
  i1112.CharacterCount = i1113[3]
  i1112.LineHeight = i1113[4]
  i1112.Baseline = i1113[5]
  i1112.Ascender = i1113[6]
  i1112.CapHeight = i1113[7]
  i1112.Descender = i1113[8]
  i1112.CenterLine = i1113[9]
  i1112.SuperscriptOffset = i1113[10]
  i1112.SubscriptOffset = i1113[11]
  i1112.SubSize = i1113[12]
  i1112.Underline = i1113[13]
  i1112.UnderlineThickness = i1113[14]
  i1112.strikethrough = i1113[15]
  i1112.strikethroughThickness = i1113[16]
  i1112.TabWidth = i1113[17]
  i1112.Padding = i1113[18]
  i1112.AtlasWidth = i1113[19]
  i1112.AtlasHeight = i1113[20]
  return i1112
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i1116 = root || request.c( 'TMPro.TMP_Glyph' )
  var i1117 = data
  i1116.id = i1117[0]
  i1116.x = i1117[1]
  i1116.y = i1117[2]
  i1116.width = i1117[3]
  i1116.height = i1117[4]
  i1116.xOffset = i1117[5]
  i1116.yOffset = i1117[6]
  i1116.xAdvance = i1117[7]
  i1116.scale = i1117[8]
  return i1116
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i1118 = root || request.c( 'TMPro.KerningTable' )
  var i1119 = data
  var i1121 = i1119[0]
  var i1120 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i1121.length; i += 1) {
    i1120.add(request.d('TMPro.KerningPair', i1121[i + 0]));
  }
  i1118.kerningPairs = i1120
  return i1118
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i1124 = root || request.c( 'TMPro.KerningPair' )
  var i1125 = data
  i1124.xOffset = i1125[0]
  i1124.m_FirstGlyph = i1125[1]
  i1124.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1125[2], i1124.m_FirstGlyphAdjustments)
  i1124.m_SecondGlyph = i1125[3]
  i1124.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1125[4], i1124.m_SecondGlyphAdjustments)
  i1124.m_IgnoreSpacingAdjustments = !!i1125[5]
  return i1124
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1126 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1127 = data
  i1126.m_FaceIndex = i1127[0]
  i1126.m_FamilyName = i1127[1]
  i1126.m_StyleName = i1127[2]
  i1126.m_PointSize = i1127[3]
  i1126.m_Scale = i1127[4]
  i1126.m_UnitsPerEM = i1127[5]
  i1126.m_LineHeight = i1127[6]
  i1126.m_AscentLine = i1127[7]
  i1126.m_CapLine = i1127[8]
  i1126.m_MeanLine = i1127[9]
  i1126.m_Baseline = i1127[10]
  i1126.m_DescentLine = i1127[11]
  i1126.m_SuperscriptOffset = i1127[12]
  i1126.m_SuperscriptSize = i1127[13]
  i1126.m_SubscriptOffset = i1127[14]
  i1126.m_SubscriptSize = i1127[15]
  i1126.m_UnderlineOffset = i1127[16]
  i1126.m_UnderlineThickness = i1127[17]
  i1126.m_StrikethroughOffset = i1127[18]
  i1126.m_StrikethroughThickness = i1127[19]
  i1126.m_TabWidth = i1127[20]
  return i1126
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1128 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1129 = data
  i1128.m_Width = i1129[0]
  i1128.m_Height = i1129[1]
  i1128.m_HorizontalBearingX = i1129[2]
  i1128.m_HorizontalBearingY = i1129[3]
  i1128.m_HorizontalAdvance = i1129[4]
  return i1128
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1130 = root || request.c( 'TMPro.TMP_Settings' )
  var i1131 = data
  i1130.assetVersion = i1131[0]
  i1130.m_TextWrappingMode = i1131[1]
  i1130.m_enableKerning = !!i1131[2]
  var i1133 = i1131[3]
  var i1132 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i1133.length; i += 1) {
    i1132.add(i1133[i + 0]);
  }
  i1130.m_ActiveFontFeatures = i1132
  i1130.m_enableExtraPadding = !!i1131[4]
  i1130.m_enableTintAllSprites = !!i1131[5]
  i1130.m_enableParseEscapeCharacters = !!i1131[6]
  i1130.m_EnableRaycastTarget = !!i1131[7]
  i1130.m_GetFontFeaturesAtRuntime = !!i1131[8]
  i1130.m_missingGlyphCharacter = i1131[9]
  i1130.m_ClearDynamicDataOnBuild = !!i1131[10]
  i1130.m_warningsDisabled = !!i1131[11]
  request.r(i1131[12], i1131[13], 0, i1130, 'm_defaultFontAsset')
  i1130.m_defaultFontAssetPath = i1131[14]
  i1130.m_defaultFontSize = i1131[15]
  i1130.m_defaultAutoSizeMinRatio = i1131[16]
  i1130.m_defaultAutoSizeMaxRatio = i1131[17]
  i1130.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1131[18], i1131[19] )
  i1130.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1131[20], i1131[21] )
  i1130.m_autoSizeTextContainer = !!i1131[22]
  i1130.m_IsTextObjectScaleStatic = !!i1131[23]
  var i1135 = i1131[24]
  var i1134 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1135.length; i += 2) {
  request.r(i1135[i + 0], i1135[i + 1], 1, i1134, '')
  }
  i1130.m_fallbackFontAssets = i1134
  i1130.m_matchMaterialPreset = !!i1131[25]
  i1130.m_HideSubTextObjects = !!i1131[26]
  request.r(i1131[27], i1131[28], 0, i1130, 'm_defaultSpriteAsset')
  i1130.m_defaultSpriteAssetPath = i1131[29]
  i1130.m_enableEmojiSupport = !!i1131[30]
  i1130.m_MissingCharacterSpriteUnicode = i1131[31]
  var i1137 = i1131[32]
  var i1136 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i1137.length; i += 2) {
  request.r(i1137[i + 0], i1137[i + 1], 1, i1136, '')
  }
  i1130.m_EmojiFallbackTextAssets = i1136
  i1130.m_defaultColorGradientPresetsPath = i1131[33]
  request.r(i1131[34], i1131[35], 0, i1130, 'm_defaultStyleSheet')
  i1130.m_StyleSheetsResourcePath = i1131[36]
  request.r(i1131[37], i1131[38], 0, i1130, 'm_leadingCharacters')
  request.r(i1131[39], i1131[40], 0, i1130, 'm_followingCharacters')
  i1130.m_UseModernHangulLineBreakingRules = !!i1131[41]
  return i1130
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1142 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1143 = data
  request.r(i1143[0], i1143[1], 0, i1142, 'spriteSheet')
  var i1145 = i1143[2]
  var i1144 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1145.length; i += 1) {
    i1144.add(request.d('TMPro.TMP_Sprite', i1145[i + 0]));
  }
  i1142.spriteInfoList = i1144
  var i1147 = i1143[3]
  var i1146 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1147.length; i += 2) {
  request.r(i1147[i + 0], i1147[i + 1], 1, i1146, '')
  }
  i1142.fallbackSpriteAssets = i1146
  var i1149 = i1143[4]
  var i1148 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1149.length; i += 1) {
    i1148.add(request.d('TMPro.TMP_SpriteCharacter', i1149[i + 0]));
  }
  i1142.m_SpriteCharacterTable = i1148
  var i1151 = i1143[5]
  var i1150 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1151.length; i += 1) {
    i1150.add(request.d('TMPro.TMP_SpriteGlyph', i1151[i + 0]));
  }
  i1142.m_GlyphTable = i1150
  i1142.m_Version = i1143[6]
  i1142.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1143[7], i1142.m_FaceInfo)
  request.r(i1143[8], i1143[9], 0, i1142, 'm_Material')
  return i1142
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1154 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1155 = data
  i1154.name = i1155[0]
  i1154.hashCode = i1155[1]
  i1154.unicode = i1155[2]
  i1154.pivot = new pc.Vec2( i1155[3], i1155[4] )
  request.r(i1155[5], i1155[6], 0, i1154, 'sprite')
  i1154.id = i1155[7]
  i1154.x = i1155[8]
  i1154.y = i1155[9]
  i1154.width = i1155[10]
  i1154.height = i1155[11]
  i1154.xOffset = i1155[12]
  i1154.yOffset = i1155[13]
  i1154.xAdvance = i1155[14]
  i1154.scale = i1155[15]
  return i1154
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1160 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1161 = data
  i1160.m_Name = i1161[0]
  i1160.m_ElementType = i1161[1]
  i1160.m_Unicode = i1161[2]
  i1160.m_GlyphIndex = i1161[3]
  i1160.m_Scale = i1161[4]
  return i1160
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1164 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1165 = data
  request.r(i1165[0], i1165[1], 0, i1164, 'sprite')
  i1164.m_Index = i1165[2]
  i1164.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1165[3], i1164.m_Metrics)
  i1164.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1165[4], i1164.m_GlyphRect)
  i1164.m_Scale = i1165[5]
  i1164.m_AtlasIndex = i1165[6]
  i1164.m_ClassDefinitionType = i1165[7]
  return i1164
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1166 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1167 = data
  var i1169 = i1167[0]
  var i1168 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1169.length; i += 1) {
    i1168.add(request.d('TMPro.TMP_Style', i1169[i + 0]));
  }
  i1166.m_StyleList = i1168
  return i1166
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1172 = root || request.c( 'TMPro.TMP_Style' )
  var i1173 = data
  i1172.m_Name = i1173[0]
  i1172.m_HashCode = i1173[1]
  i1172.m_OpeningDefinition = i1173[2]
  i1172.m_ClosingDefinition = i1173[3]
  i1172.m_OpeningTagArray = i1173[4]
  i1172.m_ClosingTagArray = i1173[5]
  return i1172
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1174 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1175 = data
  var i1177 = i1175[0]
  var i1176 = []
  for(var i = 0; i < i1177.length; i += 1) {
    i1176.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1177[i + 0]) );
  }
  i1174.files = i1176
  i1174.componentToPrefabIds = i1175[1]
  return i1174
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1180 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1181 = data
  i1180.path = i1181[0]
  request.r(i1181[1], i1181[2], 0, i1180, 'unityObject')
  return i1180
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1182 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1183 = data
  var i1185 = i1183[0]
  var i1184 = []
  for(var i = 0; i < i1185.length; i += 1) {
    i1184.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1185[i + 0]) );
  }
  i1182.scriptsExecutionOrder = i1184
  var i1187 = i1183[1]
  var i1186 = []
  for(var i = 0; i < i1187.length; i += 1) {
    i1186.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1187[i + 0]) );
  }
  i1182.sortingLayers = i1186
  var i1189 = i1183[2]
  var i1188 = []
  for(var i = 0; i < i1189.length; i += 1) {
    i1188.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1189[i + 0]) );
  }
  i1182.cullingLayers = i1188
  i1182.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1183[3], i1182.timeSettings)
  i1182.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1183[4], i1182.physicsSettings)
  i1182.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1183[5], i1182.physics2DSettings)
  i1182.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1183[6], i1182.qualitySettings)
  i1182.enableRealtimeShadows = !!i1183[7]
  i1182.enableAutoInstancing = !!i1183[8]
  i1182.enableStaticBatching = !!i1183[9]
  i1182.enableDynamicBatching = !!i1183[10]
  i1182.lightmapEncodingQuality = i1183[11]
  i1182.desiredColorSpace = i1183[12]
  var i1191 = i1183[13]
  var i1190 = []
  for(var i = 0; i < i1191.length; i += 1) {
    i1190.push( i1191[i + 0] );
  }
  i1182.allTags = i1190
  return i1182
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1194 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1195 = data
  i1194.name = i1195[0]
  i1194.value = i1195[1]
  return i1194
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1198 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1199 = data
  i1198.id = i1199[0]
  i1198.name = i1199[1]
  i1198.value = i1199[2]
  return i1198
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1202 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1203 = data
  i1202.id = i1203[0]
  i1202.name = i1203[1]
  return i1202
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1204 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1205 = data
  i1204.fixedDeltaTime = i1205[0]
  i1204.maximumDeltaTime = i1205[1]
  i1204.timeScale = i1205[2]
  i1204.maximumParticleTimestep = i1205[3]
  return i1204
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1206 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1207 = data
  i1206.gravity = new pc.Vec3( i1207[0], i1207[1], i1207[2] )
  i1206.defaultSolverIterations = i1207[3]
  i1206.bounceThreshold = i1207[4]
  i1206.autoSyncTransforms = !!i1207[5]
  i1206.autoSimulation = !!i1207[6]
  var i1209 = i1207[7]
  var i1208 = []
  for(var i = 0; i < i1209.length; i += 1) {
    i1208.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1209[i + 0]) );
  }
  i1206.collisionMatrix = i1208
  return i1206
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1212 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1213 = data
  i1212.enabled = !!i1213[0]
  i1212.layerId = i1213[1]
  i1212.otherLayerId = i1213[2]
  return i1212
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1214 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1215 = data
  request.r(i1215[0], i1215[1], 0, i1214, 'material')
  i1214.gravity = new pc.Vec2( i1215[2], i1215[3] )
  i1214.positionIterations = i1215[4]
  i1214.velocityIterations = i1215[5]
  i1214.velocityThreshold = i1215[6]
  i1214.maxLinearCorrection = i1215[7]
  i1214.maxAngularCorrection = i1215[8]
  i1214.maxTranslationSpeed = i1215[9]
  i1214.maxRotationSpeed = i1215[10]
  i1214.baumgarteScale = i1215[11]
  i1214.baumgarteTOIScale = i1215[12]
  i1214.timeToSleep = i1215[13]
  i1214.linearSleepTolerance = i1215[14]
  i1214.angularSleepTolerance = i1215[15]
  i1214.defaultContactOffset = i1215[16]
  i1214.autoSimulation = !!i1215[17]
  i1214.queriesHitTriggers = !!i1215[18]
  i1214.queriesStartInColliders = !!i1215[19]
  i1214.callbacksOnDisable = !!i1215[20]
  i1214.reuseCollisionCallbacks = !!i1215[21]
  i1214.autoSyncTransforms = !!i1215[22]
  var i1217 = i1215[23]
  var i1216 = []
  for(var i = 0; i < i1217.length; i += 1) {
    i1216.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1217[i + 0]) );
  }
  i1214.collisionMatrix = i1216
  return i1214
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1220 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1221 = data
  i1220.enabled = !!i1221[0]
  i1220.layerId = i1221[1]
  i1220.otherLayerId = i1221[2]
  return i1220
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1222 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1223 = data
  var i1225 = i1223[0]
  var i1224 = []
  for(var i = 0; i < i1225.length; i += 1) {
    i1224.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1225[i + 0]) );
  }
  i1222.qualityLevels = i1224
  var i1227 = i1223[1]
  var i1226 = []
  for(var i = 0; i < i1227.length; i += 1) {
    i1226.push( i1227[i + 0] );
  }
  i1222.names = i1226
  i1222.shadows = i1223[2]
  i1222.anisotropicFiltering = i1223[3]
  i1222.antiAliasing = i1223[4]
  i1222.lodBias = i1223[5]
  i1222.shadowCascades = i1223[6]
  i1222.shadowDistance = i1223[7]
  i1222.shadowmaskMode = i1223[8]
  i1222.shadowProjection = i1223[9]
  i1222.shadowResolution = i1223[10]
  i1222.softParticles = !!i1223[11]
  i1222.softVegetation = !!i1223[12]
  i1222.activeColorSpace = i1223[13]
  i1222.desiredColorSpace = i1223[14]
  i1222.masterTextureLimit = i1223[15]
  i1222.maxQueuedFrames = i1223[16]
  i1222.particleRaycastBudget = i1223[17]
  i1222.pixelLightCount = i1223[18]
  i1222.realtimeReflectionProbes = !!i1223[19]
  i1222.shadowCascade2Split = i1223[20]
  i1222.shadowCascade4Split = new pc.Vec3( i1223[21], i1223[22], i1223[23] )
  i1222.streamingMipmapsActive = !!i1223[24]
  i1222.vSyncCount = i1223[25]
  i1222.asyncUploadBufferSize = i1223[26]
  i1222.asyncUploadTimeSlice = i1223[27]
  i1222.billboardsFaceCameraPosition = !!i1223[28]
  i1222.shadowNearPlaneOffset = i1223[29]
  i1222.streamingMipmapsMemoryBudget = i1223[30]
  i1222.maximumLODLevel = i1223[31]
  i1222.streamingMipmapsAddAllCameras = !!i1223[32]
  i1222.streamingMipmapsMaxLevelReduction = i1223[33]
  i1222.streamingMipmapsRenderersPerFrame = i1223[34]
  i1222.resolutionScalingFixedDPIFactor = i1223[35]
  i1222.streamingMipmapsMaxFileIORequests = i1223[36]
  i1222.currentQualityLevel = i1223[37]
  return i1222
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1232 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1233 = data
  i1232.weight = i1233[0]
  i1232.vertices = i1233[1]
  i1232.normals = i1233[2]
  i1232.tangents = i1233[3]
  return i1232
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i1234 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i1235 = data
  i1234.m_XCoordinate = i1235[0]
  i1234.m_YCoordinate = i1235[1]
  return i1234
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i1236 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i1237 = data
  i1236.m_XPositionAdjustment = i1237[0]
  i1236.m_YPositionAdjustment = i1237[1]
  return i1236
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1238 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1239 = data
  i1238.xPlacement = i1239[0]
  i1238.yPlacement = i1239[1]
  i1238.xAdvance = i1239[2]
  i1238.yAdvance = i1239[3]
  return i1238
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"43":[44],"45":[44],"46":[44],"47":[44],"48":[44],"49":[44],"50":[51],"52":[2],"53":[54],"55":[54],"56":[54],"57":[54],"58":[54],"59":[54],"60":[61],"62":[61],"63":[61],"64":[61],"65":[61],"66":[61],"67":[61],"68":[61],"69":[61],"70":[61],"71":[61],"72":[61],"73":[61],"74":[2],"75":[76],"77":[78],"79":[78],"21":[20],"6":[2],"80":[61],"81":[82],"83":[18],"84":[2],"85":[86],"87":[34],"88":[21],"89":[20],"90":[76,20],"91":[20,25],"92":[20],"93":[25,20],"94":[76],"95":[25,20],"96":[20],"97":[98],"99":[98],"100":[98],"101":[20],"102":[20],"24":[21],"26":[25,20],"103":[20],"23":[21],"104":[20],"105":[20],"106":[20],"107":[20],"108":[20],"109":[20],"110":[20],"111":[20],"112":[20],"113":[25,20],"114":[20],"115":[20],"116":[20],"117":[20],"118":[25,20],"119":[20],"120":[34],"121":[34],"35":[34],"122":[34],"123":[2],"124":[2]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.MonoBehaviour","CameraFollow2D","AutoCameraFit","UnityEngine.Transform","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Mesh","UnityEngine.Material","Ply_SoundManager","UnityEngine.AudioClip","UnityEngine.AudioSource","HaalandGame.HaalandGameManager","UnityEngine.GameObject","UnityEngine.Animator","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.UI.Button","UnityEditor.Animations.AnimatorController","HaalandGame.IconListAnimator","HideOnFirstClick","ScreenHeightPositionAnchor","UnityEngine.BoxCollider","HaalandGame.PlayerSelectable","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_FontAsset","UnityEngine.Font","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","BatStrikeController","SlotTrigger","UnityEngine.BoxCollider2D","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.InputSystem.UI.InputSystemUIInputModule","UnityEngine.InputSystem.UI.TrackedDeviceRaycaster","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.38f1";

Deserializers.productName = "PLY_MiniSoccer";

Deserializers.lunaInitializationTime = "07/15/2026 03:53:54";

Deserializers.lunaDaysRunning = "35.0";

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

Deserializers.buildID = "8bdc78d8-753d-4cea-8a54-a2b994469462";

Deserializers.runtimeInitializeOnLoadInfos = [[["Unity","Services","Core","Internal","UnityServicesInitializer","EnableServicesInitializationAsync"],["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["DG","Tweening","DOTween","RuntimeOnLoad"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["Unity","Services","Core","Registration","CorePackageInitializer","InitializeOnLoad"],["Unity","Services","Core","Internal","TaskAsyncOperation","SetScheduler"],["Unity","Services","Core","Environments","Client","Scheduler","EngineStateHelper","Init"],["Unity","Services","Core","Environments","Client","Scheduler","ThreadHelper","Init"],["Ua2CoreInitializeCallback","Register"],["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["Unity","AI","Navigation","NavMeshLink","ClearTrackedList"],["Unity","AI","Navigation","NavMeshSurface","ClearNavMeshSurfaces"],["Unity","AI","Navigation","NavMeshModifierVolume","ClearNavMeshModifiers"],["Unity","AI","Navigation","NavMeshModifier","ClearNavMeshModifiers"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["Unity","Services","Core","Internal","UnityServicesInitializer","CreateStaticInstance"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[["Unity","Services","Core","Environments","Client","Http","JsonHelpers","RegisterTypesForAOT"]],[["Unity","Services","Core","UnityThreadUtils","CaptureUnityThreadInfo"],["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

