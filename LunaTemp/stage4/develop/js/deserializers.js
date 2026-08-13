var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i628 = root || request.c( 'UnityEngine.JointSpring' )
  var i629 = data
  i628.spring = i629[0]
  i628.damper = i629[1]
  i628.targetPosition = i629[2]
  return i628
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i630 = root || request.c( 'UnityEngine.JointMotor' )
  var i631 = data
  i630.m_TargetVelocity = i631[0]
  i630.m_Force = i631[1]
  i630.m_FreeSpin = i631[2]
  return i630
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i632 = root || request.c( 'UnityEngine.JointLimits' )
  var i633 = data
  i632.m_Min = i633[0]
  i632.m_Max = i633[1]
  i632.m_Bounciness = i633[2]
  i632.m_BounceMinVelocity = i633[3]
  i632.m_ContactDistance = i633[4]
  i632.minBounce = i633[5]
  i632.maxBounce = i633[6]
  return i632
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i634 = root || request.c( 'UnityEngine.JointDrive' )
  var i635 = data
  i634.m_PositionSpring = i635[0]
  i634.m_PositionDamper = i635[1]
  i634.m_MaximumForce = i635[2]
  i634.m_UseAcceleration = i635[3]
  return i634
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i636 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i637 = data
  i636.m_Spring = i637[0]
  i636.m_Damper = i637[1]
  return i636
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i638 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i639 = data
  i638.m_Limit = i639[0]
  i638.m_Bounciness = i639[1]
  i638.m_ContactDistance = i639[2]
  return i638
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i640 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i641 = data
  i640.m_ExtremumSlip = i641[0]
  i640.m_ExtremumValue = i641[1]
  i640.m_AsymptoteSlip = i641[2]
  i640.m_AsymptoteValue = i641[3]
  i640.m_Stiffness = i641[4]
  return i640
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i642 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i643 = data
  i642.m_LowerAngle = i643[0]
  i642.m_UpperAngle = i643[1]
  return i642
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i644 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i645 = data
  i644.m_MotorSpeed = i645[0]
  i644.m_MaximumMotorTorque = i645[1]
  return i644
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i646 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i647 = data
  i646.m_DampingRatio = i647[0]
  i646.m_Frequency = i647[1]
  i646.m_Angle = i647[2]
  return i646
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i648 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i649 = data
  i648.m_LowerTranslation = i649[0]
  i648.m_UpperTranslation = i649[1]
  return i648
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i650 = root || new pc.UnityMaterial()
  var i651 = data
  i650.name = i651[0]
  request.r(i651[1], i651[2], 0, i650, 'shader')
  i650.renderQueue = i651[3]
  i650.enableInstancing = !!i651[4]
  var i653 = i651[5]
  var i652 = []
  for(var i = 0; i < i653.length; i += 1) {
    i652.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i653[i + 0]) );
  }
  i650.floatParameters = i652
  var i655 = i651[6]
  var i654 = []
  for(var i = 0; i < i655.length; i += 1) {
    i654.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i655[i + 0]) );
  }
  i650.colorParameters = i654
  var i657 = i651[7]
  var i656 = []
  for(var i = 0; i < i657.length; i += 1) {
    i656.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i657[i + 0]) );
  }
  i650.vectorParameters = i656
  var i659 = i651[8]
  var i658 = []
  for(var i = 0; i < i659.length; i += 1) {
    i658.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i659[i + 0]) );
  }
  i650.textureParameters = i658
  var i661 = i651[9]
  var i660 = []
  for(var i = 0; i < i661.length; i += 1) {
    i660.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i661[i + 0]) );
  }
  i650.materialFlags = i660
  return i650
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i664 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i665 = data
  i664.name = i665[0]
  i664.value = i665[1]
  return i664
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i668 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i669 = data
  i668.name = i669[0]
  i668.value = new pc.Color(i669[1], i669[2], i669[3], i669[4])
  return i668
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i672 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i673 = data
  i672.name = i673[0]
  i672.value = new pc.Vec4( i673[1], i673[2], i673[3], i673[4] )
  return i672
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i676 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i677 = data
  i676.name = i677[0]
  request.r(i677[1], i677[2], 0, i676, 'value')
  return i676
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i680 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i681 = data
  i680.name = i681[0]
  i680.enabled = !!i681[1]
  return i680
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i682 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i683 = data
  i682.name = i683[0]
  i682.width = i683[1]
  i682.height = i683[2]
  i682.mipmapCount = i683[3]
  i682.anisoLevel = i683[4]
  i682.filterMode = i683[5]
  i682.hdr = !!i683[6]
  i682.format = i683[7]
  i682.wrapMode = i683[8]
  i682.alphaIsTransparency = !!i683[9]
  i682.alphaSource = i683[10]
  i682.graphicsFormat = i683[11]
  i682.sRGBTexture = !!i683[12]
  i682.desiredColorSpace = i683[13]
  i682.wrapU = i683[14]
  i682.wrapV = i683[15]
  return i682
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i684 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i685 = data
  i684.name = i685[0]
  i684.halfPrecision = !!i685[1]
  i684.useSimplification = !!i685[2]
  i684.useUInt32IndexFormat = !!i685[3]
  i684.vertexCount = i685[4]
  i684.aabb = i685[5]
  var i687 = i685[6]
  var i686 = []
  for(var i = 0; i < i687.length; i += 1) {
    i686.push( !!i687[i + 0] );
  }
  i684.streams = i686
  i684.vertices = i685[7]
  var i689 = i685[8]
  var i688 = []
  for(var i = 0; i < i689.length; i += 1) {
    i688.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i689[i + 0]) );
  }
  i684.subMeshes = i688
  var i691 = i685[9]
  var i690 = []
  for(var i = 0; i < i691.length; i += 16) {
    i690.push( new pc.Mat4().setData(i691[i + 0], i691[i + 1], i691[i + 2], i691[i + 3],  i691[i + 4], i691[i + 5], i691[i + 6], i691[i + 7],  i691[i + 8], i691[i + 9], i691[i + 10], i691[i + 11],  i691[i + 12], i691[i + 13], i691[i + 14], i691[i + 15]) );
  }
  i684.bindposes = i690
  var i693 = i685[10]
  var i692 = []
  for(var i = 0; i < i693.length; i += 1) {
    i692.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i693[i + 0]) );
  }
  i684.blendShapes = i692
  return i684
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i698 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i699 = data
  i698.triangles = i699[0]
  return i698
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i704 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i705 = data
  i704.name = i705[0]
  var i707 = i705[1]
  var i706 = []
  for(var i = 0; i < i707.length; i += 1) {
    i706.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i707[i + 0]) );
  }
  i704.frames = i706
  return i704
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i708 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i709 = data
  i708.name = i709[0]
  i708.index = i709[1]
  i708.startup = !!i709[2]
  return i708
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i710 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i711 = data
  i710.aspect = i711[0]
  i710.orthographic = !!i711[1]
  i710.orthographicSize = i711[2]
  i710.backgroundColor = new pc.Color(i711[3], i711[4], i711[5], i711[6])
  i710.nearClipPlane = i711[7]
  i710.farClipPlane = i711[8]
  i710.fieldOfView = i711[9]
  i710.depth = i711[10]
  i710.clearFlags = i711[11]
  i710.cullingMask = i711[12]
  i710.rect = i711[13]
  request.r(i711[14], i711[15], 0, i710, 'targetTexture')
  i710.usePhysicalProperties = !!i711[16]
  i710.focalLength = i711[17]
  i710.sensorSize = new pc.Vec2( i711[18], i711[19] )
  i710.lensShift = new pc.Vec2( i711[20], i711[21] )
  i710.gateFit = i711[22]
  i710.commandBufferCount = i711[23]
  i710.cameraType = i711[24]
  i710.enabled = !!i711[25]
  return i710
}

Deserializers["CameraFollow2D"] = function (request, data, root) {
  var i712 = root || request.c( 'CameraFollow2D' )
  var i713 = data
  request.r(i713[0], i713[1], 0, i712, 'target')
  i712.smoothSpeed = i713[2]
  i712.offset = new pc.Vec3( i713[3], i713[4], i713[5] )
  i712.followY = !!i713[6]
  return i712
}

Deserializers["AutoCameraFit"] = function (request, data, root) {
  var i714 = root || request.c( 'AutoCameraFit' )
  var i715 = data
  request.r(i715[0], i715[1], 0, i714, 'tallScreenObject')
  i714.tallScreenRatioThreshold = i715[2]
  i714.tallScreenYOffset = i715[3]
  request.r(i715[4], i715[5], 0, i714, 'canvasBtn')
  request.r(i715[6], i715[7], 0, i714, 'targetArea')
  i714.paddingLandscape = i715[8]
  i714.paddingPortrait = i715[9]
  i714.extraPaddingSmallScreen = i715[10]
  i714.smallScreenThreshold = i715[11]
  i714.autoUpdateOnResize = !!i715[12]
  i714.adjustInEditMode = !!i715[13]
  return i714
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i716 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i717 = data
  i716.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i717[0], i716.main)
  i716.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i717[1], i716.colorBySpeed)
  i716.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i717[2], i716.colorOverLifetime)
  i716.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i717[3], i716.emission)
  i716.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i717[4], i716.rotationBySpeed)
  i716.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i717[5], i716.rotationOverLifetime)
  i716.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i717[6], i716.shape)
  i716.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i717[7], i716.sizeBySpeed)
  i716.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i717[8], i716.sizeOverLifetime)
  i716.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i717[9], i716.textureSheetAnimation)
  i716.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i717[10], i716.velocityOverLifetime)
  i716.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i717[11], i716.noise)
  i716.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i717[12], i716.inheritVelocity)
  i716.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i717[13], i716.forceOverLifetime)
  i716.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i717[14], i716.limitVelocityOverLifetime)
  i716.useAutoRandomSeed = !!i717[15]
  i716.randomSeed = i717[16]
  return i716
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i718 = root || new pc.ParticleSystemMain()
  var i719 = data
  i718.duration = i719[0]
  i718.loop = !!i719[1]
  i718.prewarm = !!i719[2]
  i718.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i719[3], i718.startDelay)
  i718.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i719[4], i718.startLifetime)
  i718.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i719[5], i718.startSpeed)
  i718.startSize3D = !!i719[6]
  i718.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i719[7], i718.startSizeX)
  i718.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i719[8], i718.startSizeY)
  i718.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i719[9], i718.startSizeZ)
  i718.startRotation3D = !!i719[10]
  i718.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i719[11], i718.startRotationX)
  i718.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i719[12], i718.startRotationY)
  i718.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i719[13], i718.startRotationZ)
  i718.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i719[14], i718.startColor)
  i718.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i719[15], i718.gravityModifier)
  i718.simulationSpace = i719[16]
  request.r(i719[17], i719[18], 0, i718, 'customSimulationSpace')
  i718.simulationSpeed = i719[19]
  i718.useUnscaledTime = !!i719[20]
  i718.scalingMode = i719[21]
  i718.playOnAwake = !!i719[22]
  i718.maxParticles = i719[23]
  i718.emitterVelocityMode = i719[24]
  i718.stopAction = i719[25]
  return i718
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i720 = root || new pc.MinMaxCurve()
  var i721 = data
  i720.mode = i721[0]
  i720.curveMin = new pc.AnimationCurve( { keys_flow: i721[1] } )
  i720.curveMax = new pc.AnimationCurve( { keys_flow: i721[2] } )
  i720.curveMultiplier = i721[3]
  i720.constantMin = i721[4]
  i720.constantMax = i721[5]
  return i720
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i722 = root || new pc.MinMaxGradient()
  var i723 = data
  i722.mode = i723[0]
  i722.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i723[1], i722.gradientMin)
  i722.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i723[2], i722.gradientMax)
  i722.colorMin = new pc.Color(i723[3], i723[4], i723[5], i723[6])
  i722.colorMax = new pc.Color(i723[7], i723[8], i723[9], i723[10])
  return i722
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i724 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i725 = data
  i724.mode = i725[0]
  var i727 = i725[1]
  var i726 = []
  for(var i = 0; i < i727.length; i += 1) {
    i726.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i727[i + 0]) );
  }
  i724.colorKeys = i726
  var i729 = i725[2]
  var i728 = []
  for(var i = 0; i < i729.length; i += 1) {
    i728.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i729[i + 0]) );
  }
  i724.alphaKeys = i728
  return i724
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i730 = root || new pc.ParticleSystemColorBySpeed()
  var i731 = data
  i730.enabled = !!i731[0]
  i730.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i731[1], i730.color)
  i730.range = new pc.Vec2( i731[2], i731[3] )
  return i730
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i734 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i735 = data
  i734.color = new pc.Color(i735[0], i735[1], i735[2], i735[3])
  i734.time = i735[4]
  return i734
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i738 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i739 = data
  i738.alpha = i739[0]
  i738.time = i739[1]
  return i738
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i740 = root || new pc.ParticleSystemColorOverLifetime()
  var i741 = data
  i740.enabled = !!i741[0]
  i740.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i741[1], i740.color)
  return i740
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i742 = root || new pc.ParticleSystemEmitter()
  var i743 = data
  i742.enabled = !!i743[0]
  i742.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i743[1], i742.rateOverTime)
  i742.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i743[2], i742.rateOverDistance)
  var i745 = i743[3]
  var i744 = []
  for(var i = 0; i < i745.length; i += 1) {
    i744.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i745[i + 0]) );
  }
  i742.bursts = i744
  return i742
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i748 = root || new pc.ParticleSystemBurst()
  var i749 = data
  i748.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i749[0], i748.count)
  i748.cycleCount = i749[1]
  i748.minCount = i749[2]
  i748.maxCount = i749[3]
  i748.repeatInterval = i749[4]
  i748.time = i749[5]
  return i748
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i750 = root || new pc.ParticleSystemRotationBySpeed()
  var i751 = data
  i750.enabled = !!i751[0]
  i750.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i751[1], i750.x)
  i750.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i751[2], i750.y)
  i750.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i751[3], i750.z)
  i750.separateAxes = !!i751[4]
  i750.range = new pc.Vec2( i751[5], i751[6] )
  return i750
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i752 = root || new pc.ParticleSystemRotationOverLifetime()
  var i753 = data
  i752.enabled = !!i753[0]
  i752.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i753[1], i752.x)
  i752.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i753[2], i752.y)
  i752.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i753[3], i752.z)
  i752.separateAxes = !!i753[4]
  return i752
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i754 = root || new pc.ParticleSystemShape()
  var i755 = data
  i754.enabled = !!i755[0]
  i754.shapeType = i755[1]
  i754.randomDirectionAmount = i755[2]
  i754.sphericalDirectionAmount = i755[3]
  i754.randomPositionAmount = i755[4]
  i754.alignToDirection = !!i755[5]
  i754.radius = i755[6]
  i754.radiusMode = i755[7]
  i754.radiusSpread = i755[8]
  i754.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i755[9], i754.radiusSpeed)
  i754.radiusThickness = i755[10]
  i754.angle = i755[11]
  i754.length = i755[12]
  i754.boxThickness = new pc.Vec3( i755[13], i755[14], i755[15] )
  i754.meshShapeType = i755[16]
  request.r(i755[17], i755[18], 0, i754, 'mesh')
  request.r(i755[19], i755[20], 0, i754, 'meshRenderer')
  request.r(i755[21], i755[22], 0, i754, 'skinnedMeshRenderer')
  i754.useMeshMaterialIndex = !!i755[23]
  i754.meshMaterialIndex = i755[24]
  i754.useMeshColors = !!i755[25]
  i754.normalOffset = i755[26]
  i754.arc = i755[27]
  i754.arcMode = i755[28]
  i754.arcSpread = i755[29]
  i754.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i755[30], i754.arcSpeed)
  i754.donutRadius = i755[31]
  i754.position = new pc.Vec3( i755[32], i755[33], i755[34] )
  i754.rotation = new pc.Vec3( i755[35], i755[36], i755[37] )
  i754.scale = new pc.Vec3( i755[38], i755[39], i755[40] )
  return i754
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i756 = root || new pc.ParticleSystemSizeBySpeed()
  var i757 = data
  i756.enabled = !!i757[0]
  i756.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i757[1], i756.x)
  i756.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i757[2], i756.y)
  i756.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i757[3], i756.z)
  i756.separateAxes = !!i757[4]
  i756.range = new pc.Vec2( i757[5], i757[6] )
  return i756
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i758 = root || new pc.ParticleSystemSizeOverLifetime()
  var i759 = data
  i758.enabled = !!i759[0]
  i758.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i759[1], i758.x)
  i758.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i759[2], i758.y)
  i758.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i759[3], i758.z)
  i758.separateAxes = !!i759[4]
  return i758
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i760 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i761 = data
  i760.enabled = !!i761[0]
  i760.mode = i761[1]
  i760.animation = i761[2]
  i760.numTilesX = i761[3]
  i760.numTilesY = i761[4]
  i760.useRandomRow = !!i761[5]
  i760.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i761[6], i760.frameOverTime)
  i760.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i761[7], i760.startFrame)
  i760.cycleCount = i761[8]
  i760.rowIndex = i761[9]
  i760.flipU = i761[10]
  i760.flipV = i761[11]
  i760.spriteCount = i761[12]
  var i763 = i761[13]
  var i762 = []
  for(var i = 0; i < i763.length; i += 2) {
  request.r(i763[i + 0], i763[i + 1], 2, i762, '')
  }
  i760.sprites = i762
  return i760
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i766 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i767 = data
  i766.enabled = !!i767[0]
  i766.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i767[1], i766.x)
  i766.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i767[2], i766.y)
  i766.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i767[3], i766.z)
  i766.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i767[4], i766.radial)
  i766.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i767[5], i766.speedModifier)
  i766.space = i767[6]
  i766.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i767[7], i766.orbitalX)
  i766.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i767[8], i766.orbitalY)
  i766.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i767[9], i766.orbitalZ)
  i766.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i767[10], i766.orbitalOffsetX)
  i766.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i767[11], i766.orbitalOffsetY)
  i766.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i767[12], i766.orbitalOffsetZ)
  return i766
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i768 = root || new pc.ParticleSystemNoise()
  var i769 = data
  i768.enabled = !!i769[0]
  i768.separateAxes = !!i769[1]
  i768.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i769[2], i768.strengthX)
  i768.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i769[3], i768.strengthY)
  i768.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i769[4], i768.strengthZ)
  i768.frequency = i769[5]
  i768.damping = !!i769[6]
  i768.octaveCount = i769[7]
  i768.octaveMultiplier = i769[8]
  i768.octaveScale = i769[9]
  i768.quality = i769[10]
  i768.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i769[11], i768.scrollSpeed)
  i768.scrollSpeedMultiplier = i769[12]
  i768.remapEnabled = !!i769[13]
  i768.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i769[14], i768.remapX)
  i768.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i769[15], i768.remapY)
  i768.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i769[16], i768.remapZ)
  i768.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i769[17], i768.positionAmount)
  i768.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i769[18], i768.rotationAmount)
  i768.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i769[19], i768.sizeAmount)
  return i768
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i770 = root || new pc.ParticleSystemInheritVelocity()
  var i771 = data
  i770.enabled = !!i771[0]
  i770.mode = i771[1]
  i770.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i771[2], i770.curve)
  return i770
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i772 = root || new pc.ParticleSystemForceOverLifetime()
  var i773 = data
  i772.enabled = !!i773[0]
  i772.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i773[1], i772.x)
  i772.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i773[2], i772.y)
  i772.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i773[3], i772.z)
  i772.space = i773[4]
  i772.randomized = !!i773[5]
  return i772
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i774 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i775 = data
  i774.enabled = !!i775[0]
  i774.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i775[1], i774.limit)
  i774.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i775[2], i774.limitX)
  i774.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i775[3], i774.limitY)
  i774.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i775[4], i774.limitZ)
  i774.dampen = i775[5]
  i774.separateAxes = !!i775[6]
  i774.space = i775[7]
  i774.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i775[8], i774.drag)
  i774.multiplyDragByParticleSize = !!i775[9]
  i774.multiplyDragByParticleVelocity = !!i775[10]
  return i774
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i776 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i777 = data
  request.r(i777[0], i777[1], 0, i776, 'mesh')
  i776.meshCount = i777[2]
  i776.activeVertexStreamsCount = i777[3]
  i776.alignment = i777[4]
  i776.renderMode = i777[5]
  i776.sortMode = i777[6]
  i776.lengthScale = i777[7]
  i776.velocityScale = i777[8]
  i776.cameraVelocityScale = i777[9]
  i776.normalDirection = i777[10]
  i776.sortingFudge = i777[11]
  i776.minParticleSize = i777[12]
  i776.maxParticleSize = i777[13]
  i776.pivot = new pc.Vec3( i777[14], i777[15], i777[16] )
  request.r(i777[17], i777[18], 0, i776, 'trailMaterial')
  i776.applyActiveColorSpace = !!i777[19]
  i776.enabled = !!i777[20]
  request.r(i777[21], i777[22], 0, i776, 'sharedMaterial')
  var i779 = i777[23]
  var i778 = []
  for(var i = 0; i < i779.length; i += 2) {
  request.r(i779[i + 0], i779[i + 1], 2, i778, '')
  }
  i776.sharedMaterials = i778
  i776.receiveShadows = !!i777[24]
  i776.shadowCastingMode = i777[25]
  i776.sortingLayerID = i777[26]
  i776.sortingOrder = i777[27]
  i776.lightmapIndex = i777[28]
  i776.lightmapSceneIndex = i777[29]
  i776.lightmapScaleOffset = new pc.Vec4( i777[30], i777[31], i777[32], i777[33] )
  i776.lightProbeUsage = i777[34]
  i776.reflectionProbeUsage = i777[35]
  return i776
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i782 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i783 = data
  i782.name = i783[0]
  i782.tagId = i783[1]
  i782.enabled = !!i783[2]
  i782.isStatic = !!i783[3]
  i782.layer = i783[4]
  return i782
}

Deserializers["Ply_SoundManager"] = function (request, data, root) {
  var i784 = root || request.c( 'Ply_SoundManager' )
  var i785 = data
  i784.fxAudio = request.d('FxAudio', i785[0], i784.fxAudio)
  request.r(i785[1], i785[2], 0, i784, 'bgm1')
  return i784
}

Deserializers["FxAudio"] = function (request, data, root) {
  var i786 = root || request.c( 'FxAudio' )
  var i787 = data
  i786.ClickBox = request.d('SoundData', i787[0], i786.ClickBox)
  i786.Happy = request.d('SoundData', i787[1], i786.Happy)
  i786.Wrong = request.d('SoundData', i787[2], i786.Wrong)
  i786.Spray = request.d('SoundData', i787[3], i786.Spray)
  i786.Brush = request.d('SoundData', i787[4], i786.Brush)
  i786.Keo = request.d('SoundData', i787[5], i786.Keo)
  i786.Confetti = request.d('SoundData', i787[6], i786.Confetti)
  i786.Lose2 = request.d('SoundData', i787[7], i786.Lose2)
  return i786
}

Deserializers["SoundData"] = function (request, data, root) {
  var i788 = root || request.c( 'SoundData' )
  var i789 = data
  request.r(i789[0], i789[1], 0, i788, 'clip')
  i788.repeatCount = i789[2]
  return i788
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i790 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i791 = data
  request.r(i791[0], i791[1], 0, i790, 'clip')
  request.r(i791[2], i791[3], 0, i790, 'outputAudioMixerGroup')
  i790.playOnAwake = !!i791[4]
  i790.loop = !!i791[5]
  i790.time = i791[6]
  i790.volume = i791[7]
  i790.pitch = i791[8]
  i790.enabled = !!i791[9]
  return i790
}

Deserializers["HaalandGame.HaalandGameManager"] = function (request, data, root) {
  var i792 = root || request.c( 'HaalandGame.HaalandGameManager' )
  var i793 = data
  request.r(i793[0], i793[1], 0, i792, 'tutUI')
  request.r(i793[2], i793[3], 0, i792, 'ronaldoTackle')
  request.r(i793[4], i793[5], 0, i792, 'ronaldoTackleAnimator')
  i792.startRonaldoTackleTrigger = i793[6]
  request.r(i793[7], i793[8], 0, i792, 'messiTackle')
  request.r(i793[9], i793[10], 0, i792, 'messiTackleAnimator')
  i792.startMessiTackleTrigger = i793[11]
  request.r(i793[12], i793[13], 0, i792, 'haalandDribbleImage')
  request.r(i793[14], i793[15], 0, i792, 'fightingCloud')
  request.r(i793[16], i793[17], 0, i792, 'haalandHurt')
  request.r(i793[18], i793[19], 0, i792, 'standPlayers')
  request.r(i793[20], i793[21], 0, i792, 'standPlayersAnimator')
  i792.standPlayerEnterTrigger = i793[22]
  request.r(i793[23], i793[24], 0, i792, 'questionUI')
  request.r(i793[25], i793[26], 0, i792, 'wrongChoiceUI')
  request.r(i793[27], i793[28], 0, i792, 'winChoiceUI')
  request.r(i793[29], i793[30], 0, i792, 'winExtraObj1')
  request.r(i793[31], i793[32], 0, i792, 'winExtraObj2')
  request.r(i793[33], i793[34], 0, i792, 'iconListUI')
  request.r(i793[35], i793[36], 0, i792, 'refereeAnimator')
  i792.refereeLookAroundTrigger = i793[37]
  i792.useAutoTimers = !!i793[38]
  i792.tackleHideDelay = i793[39]
  i792.impactCloudDelay = i793[40]
  i792.haalandHurtDelay = i793[41]
  i792.cloudDuration = i793[42]
  i792.refereeAnimDelay = i793[43]
  request.r(i793[44], i793[45], 0, i792, 'ronaldoStandAnimator')
  request.r(i793[46], i793[47], 0, i792, 'viniStandAnimator')
  request.r(i793[48], i793[49], 0, i792, 'messiStandAnimator')
  request.r(i793[50], i793[51], 0, i792, 'mbappeStandAnimator')
  request.r(i793[52], i793[53], 0, i792, 'ronaldoChatBubble')
  request.r(i793[54], i793[55], 0, i792, 'messiChatBubble')
  request.r(i793[56], i793[57], 0, i792, 'viniChatBubble')
  request.r(i793[58], i793[59], 0, i792, 'mbappeChatBubble')
  request.r(i793[60], i793[61], 0, i792, 'ronaldoSpriteRenderer')
  request.r(i793[62], i793[63], 0, i792, 'ronaldoSadSprite')
  request.r(i793[64], i793[65], 0, i792, 'ronaldoEvilLaughSprite')
  request.r(i793[66], i793[67], 0, i792, 'messiSpriteRenderer')
  request.r(i793[68], i793[69], 0, i792, 'messiSadSprite')
  request.r(i793[70], i793[71], 0, i792, 'viniSpriteRenderer')
  request.r(i793[72], i793[73], 0, i792, 'viniSadSprite')
  request.r(i793[74], i793[75], 0, i792, 'mbappeSpriteRenderer')
  request.r(i793[76], i793[77], 0, i792, 'mbappeSadSprite')
  i792.currentLevel = i793[78]
  return i792
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i794 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i795 = data
  i794.pivot = new pc.Vec2( i795[0], i795[1] )
  i794.anchorMin = new pc.Vec2( i795[2], i795[3] )
  i794.anchorMax = new pc.Vec2( i795[4], i795[5] )
  i794.sizeDelta = new pc.Vec2( i795[6], i795[7] )
  i794.anchoredPosition3D = new pc.Vec3( i795[8], i795[9], i795[10] )
  i794.rotation = new pc.Quat(i795[11], i795[12], i795[13], i795[14])
  i794.scale = new pc.Vec3( i795[15], i795[16], i795[17] )
  return i794
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i796 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i797 = data
  i796.planeDistance = i797[0]
  i796.referencePixelsPerUnit = i797[1]
  i796.isFallbackOverlay = !!i797[2]
  i796.renderMode = i797[3]
  i796.renderOrder = i797[4]
  i796.sortingLayerName = i797[5]
  i796.sortingOrder = i797[6]
  i796.scaleFactor = i797[7]
  request.r(i797[8], i797[9], 0, i796, 'worldCamera')
  i796.overrideSorting = !!i797[10]
  i796.pixelPerfect = !!i797[11]
  i796.targetDisplay = i797[12]
  i796.overridePixelPerfect = !!i797[13]
  i796.enabled = !!i797[14]
  return i796
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i798 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i799 = data
  i798.m_UiScaleMode = i799[0]
  i798.m_ReferencePixelsPerUnit = i799[1]
  i798.m_ScaleFactor = i799[2]
  i798.m_ReferenceResolution = new pc.Vec2( i799[3], i799[4] )
  i798.m_ScreenMatchMode = i799[5]
  i798.m_MatchWidthOrHeight = i799[6]
  i798.m_PhysicalUnit = i799[7]
  i798.m_FallbackScreenDPI = i799[8]
  i798.m_DefaultSpriteDPI = i799[9]
  i798.m_DynamicPixelsPerUnit = i799[10]
  i798.m_PresetInfoIsWorld = !!i799[11]
  return i798
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i800 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i801 = data
  i800.m_IgnoreReversedGraphics = !!i801[0]
  i800.m_BlockingObjects = i801[1]
  i800.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i801[2] )
  return i800
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i802 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i803 = data
  i802.cullTransparentMesh = !!i803[0]
  return i802
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i804 = root || request.c( 'UnityEngine.UI.Image' )
  var i805 = data
  request.r(i805[0], i805[1], 0, i804, 'm_Sprite')
  i804.m_Type = i805[2]
  i804.m_PreserveAspect = !!i805[3]
  i804.m_FillCenter = !!i805[4]
  i804.m_FillMethod = i805[5]
  i804.m_FillAmount = i805[6]
  i804.m_FillClockwise = !!i805[7]
  i804.m_FillOrigin = i805[8]
  i804.m_UseSpriteMesh = !!i805[9]
  i804.m_PixelsPerUnitMultiplier = i805[10]
  request.r(i805[11], i805[12], 0, i804, 'm_Material')
  i804.m_Maskable = !!i805[13]
  i804.m_Color = new pc.Color(i805[14], i805[15], i805[16], i805[17])
  i804.m_RaycastTarget = !!i805[18]
  i804.m_RaycastPadding = new pc.Vec4( i805[19], i805[20], i805[21], i805[22] )
  return i804
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i806 = root || request.c( 'UnityEngine.UI.Button' )
  var i807 = data
  i806.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i807[0], i806.m_OnClick)
  i806.m_Navigation = request.d('UnityEngine.UI.Navigation', i807[1], i806.m_Navigation)
  i806.m_Transition = i807[2]
  i806.m_Colors = request.d('UnityEngine.UI.ColorBlock', i807[3], i806.m_Colors)
  i806.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i807[4], i806.m_SpriteState)
  i806.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i807[5], i806.m_AnimationTriggers)
  i806.m_Interactable = !!i807[6]
  request.r(i807[7], i807[8], 0, i806, 'm_TargetGraphic')
  return i806
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i808 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i809 = data
  i808.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i809[0], i808.m_PersistentCalls)
  return i808
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i810 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i811 = data
  var i813 = i811[0]
  var i812 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i813.length; i += 1) {
    i812.add(request.d('UnityEngine.Events.PersistentCall', i813[i + 0]));
  }
  i810.m_Calls = i812
  return i810
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i816 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i817 = data
  request.r(i817[0], i817[1], 0, i816, 'm_Target')
  i816.m_TargetAssemblyTypeName = i817[2]
  i816.m_MethodName = i817[3]
  i816.m_Mode = i817[4]
  i816.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i817[5], i816.m_Arguments)
  i816.m_CallState = i817[6]
  return i816
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i818 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i819 = data
  request.r(i819[0], i819[1], 0, i818, 'm_ObjectArgument')
  i818.m_ObjectArgumentAssemblyTypeName = i819[2]
  i818.m_IntArgument = i819[3]
  i818.m_FloatArgument = i819[4]
  i818.m_StringArgument = i819[5]
  i818.m_BoolArgument = !!i819[6]
  return i818
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i820 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i821 = data
  i820.m_Mode = i821[0]
  i820.m_WrapAround = !!i821[1]
  request.r(i821[2], i821[3], 0, i820, 'm_SelectOnUp')
  request.r(i821[4], i821[5], 0, i820, 'm_SelectOnDown')
  request.r(i821[6], i821[7], 0, i820, 'm_SelectOnLeft')
  request.r(i821[8], i821[9], 0, i820, 'm_SelectOnRight')
  return i820
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i822 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i823 = data
  i822.m_NormalColor = new pc.Color(i823[0], i823[1], i823[2], i823[3])
  i822.m_HighlightedColor = new pc.Color(i823[4], i823[5], i823[6], i823[7])
  i822.m_PressedColor = new pc.Color(i823[8], i823[9], i823[10], i823[11])
  i822.m_SelectedColor = new pc.Color(i823[12], i823[13], i823[14], i823[15])
  i822.m_DisabledColor = new pc.Color(i823[16], i823[17], i823[18], i823[19])
  i822.m_ColorMultiplier = i823[20]
  i822.m_FadeDuration = i823[21]
  return i822
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i824 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i825 = data
  request.r(i825[0], i825[1], 0, i824, 'm_HighlightedSprite')
  request.r(i825[2], i825[3], 0, i824, 'm_PressedSprite')
  request.r(i825[4], i825[5], 0, i824, 'm_SelectedSprite')
  request.r(i825[6], i825[7], 0, i824, 'm_DisabledSprite')
  return i824
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i826 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i827 = data
  i826.m_NormalTrigger = i827[0]
  i826.m_HighlightedTrigger = i827[1]
  i826.m_PressedTrigger = i827[2]
  i826.m_SelectedTrigger = i827[3]
  i826.m_DisabledTrigger = i827[4]
  return i826
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i828 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i829 = data
  request.r(i829[0], i829[1], 0, i828, 'animatorController')
  request.r(i829[2], i829[3], 0, i828, 'avatar')
  i828.updateMode = i829[4]
  i828.hasTransformHierarchy = !!i829[5]
  i828.applyRootMotion = !!i829[6]
  var i831 = i829[7]
  var i830 = []
  for(var i = 0; i < i831.length; i += 2) {
  request.r(i831[i + 0], i831[i + 1], 2, i830, '')
  }
  i828.humanBones = i830
  i828.enabled = !!i829[8]
  return i828
}

Deserializers["HideOnFirstClick"] = function (request, data, root) {
  var i834 = root || request.c( 'HideOnFirstClick' )
  var i835 = data
  request.r(i835[0], i835[1], 0, i834, 'objectToHide')
  return i834
}

Deserializers["ScreenHeightPositionAnchor"] = function (request, data, root) {
  var i836 = root || request.c( 'ScreenHeightPositionAnchor' )
  var i837 = data
  request.r(i837[0], i837[1], 0, i836, 'anchorPoint')
  request.r(i837[2], i837[3], 0, i836, 'targetCamera')
  i836.viewportYRatio = i837[4]
  i836.alignOnStart = !!i837[5]
  i836.alignOnEnable = !!i837[6]
  i836.realignOnScreenSizeChanged = !!i837[7]
  i836.drawGizmos = !!i837[8]
  i836.targetLineColor = new pc.Color(i837[9], i837[10], i837[11], i837[12])
  i836.anchorColor = new pc.Color(i837[13], i837[14], i837[15], i837[16])
  return i836
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i838 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i839 = data
  i838.color = new pc.Color(i839[0], i839[1], i839[2], i839[3])
  request.r(i839[4], i839[5], 0, i838, 'sprite')
  i838.flipX = !!i839[6]
  i838.flipY = !!i839[7]
  i838.drawMode = i839[8]
  i838.size = new pc.Vec2( i839[9], i839[10] )
  i838.tileMode = i839[11]
  i838.adaptiveModeThreshold = i839[12]
  i838.maskInteraction = i839[13]
  i838.spriteSortPoint = i839[14]
  i838.enabled = !!i839[15]
  request.r(i839[16], i839[17], 0, i838, 'sharedMaterial')
  var i841 = i839[18]
  var i840 = []
  for(var i = 0; i < i841.length; i += 2) {
  request.r(i841[i + 0], i841[i + 1], 2, i840, '')
  }
  i838.sharedMaterials = i840
  i838.receiveShadows = !!i839[19]
  i838.shadowCastingMode = i839[20]
  i838.sortingLayerID = i839[21]
  i838.sortingOrder = i839[22]
  i838.lightmapIndex = i839[23]
  i838.lightmapSceneIndex = i839[24]
  i838.lightmapScaleOffset = new pc.Vec4( i839[25], i839[26], i839[27], i839[28] )
  i838.lightProbeUsage = i839[29]
  i838.reflectionProbeUsage = i839[30]
  return i838
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i842 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i843 = data
  i842.center = new pc.Vec3( i843[0], i843[1], i843[2] )
  i842.size = new pc.Vec3( i843[3], i843[4], i843[5] )
  i842.enabled = !!i843[6]
  i842.isTrigger = !!i843[7]
  request.r(i843[8], i843[9], 0, i842, 'material')
  return i842
}

Deserializers["HaalandGame.PlayerSelectable"] = function (request, data, root) {
  var i844 = root || request.c( 'HaalandGame.PlayerSelectable' )
  var i845 = data
  i844.playerType = i845[0]
  i844.targetLayerName = i845[1]
  return i844
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i846 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i847 = data
  request.r(i847[0], i847[1], 0, i846, 'additionalVertexStreams')
  i846.enabled = !!i847[2]
  request.r(i847[3], i847[4], 0, i846, 'sharedMaterial')
  var i849 = i847[5]
  var i848 = []
  for(var i = 0; i < i849.length; i += 2) {
  request.r(i849[i + 0], i849[i + 1], 2, i848, '')
  }
  i846.sharedMaterials = i848
  i846.receiveShadows = !!i847[6]
  i846.shadowCastingMode = i847[7]
  i846.sortingLayerID = i847[8]
  i846.sortingOrder = i847[9]
  i846.lightmapIndex = i847[10]
  i846.lightmapSceneIndex = i847[11]
  i846.lightmapScaleOffset = new pc.Vec4( i847[12], i847[13], i847[14], i847[15] )
  i846.lightProbeUsage = i847[16]
  i846.reflectionProbeUsage = i847[17]
  return i846
}

Deserializers["TMPro.TextMeshPro"] = function (request, data, root) {
  var i850 = root || request.c( 'TMPro.TextMeshPro' )
  var i851 = data
  i850._SortingLayer = i851[0]
  i850._SortingLayerID = i851[1]
  i850._SortingOrder = i851[2]
  i850.m_hasFontAssetChanged = !!i851[3]
  request.r(i851[4], i851[5], 0, i850, 'm_renderer')
  i850.m_maskType = i851[6]
  i850.m_text = i851[7]
  i850.m_isRightToLeft = !!i851[8]
  request.r(i851[9], i851[10], 0, i850, 'm_fontAsset')
  request.r(i851[11], i851[12], 0, i850, 'm_sharedMaterial')
  var i853 = i851[13]
  var i852 = []
  for(var i = 0; i < i853.length; i += 2) {
  request.r(i853[i + 0], i853[i + 1], 2, i852, '')
  }
  i850.m_fontSharedMaterials = i852
  request.r(i851[14], i851[15], 0, i850, 'm_fontMaterial')
  var i855 = i851[16]
  var i854 = []
  for(var i = 0; i < i855.length; i += 2) {
  request.r(i855[i + 0], i855[i + 1], 2, i854, '')
  }
  i850.m_fontMaterials = i854
  i850.m_fontColor32 = UnityEngine.Color32.ConstructColor(i851[17], i851[18], i851[19], i851[20])
  i850.m_fontColor = new pc.Color(i851[21], i851[22], i851[23], i851[24])
  i850.m_enableVertexGradient = !!i851[25]
  i850.m_colorMode = i851[26]
  i850.m_fontColorGradient = request.d('TMPro.VertexGradient', i851[27], i850.m_fontColorGradient)
  request.r(i851[28], i851[29], 0, i850, 'm_fontColorGradientPreset')
  request.r(i851[30], i851[31], 0, i850, 'm_spriteAsset')
  i850.m_tintAllSprites = !!i851[32]
  request.r(i851[33], i851[34], 0, i850, 'm_StyleSheet')
  i850.m_TextStyleHashCode = i851[35]
  i850.m_overrideHtmlColors = !!i851[36]
  i850.m_faceColor = UnityEngine.Color32.ConstructColor(i851[37], i851[38], i851[39], i851[40])
  i850.m_fontSize = i851[41]
  i850.m_fontSizeBase = i851[42]
  i850.m_fontWeight = i851[43]
  i850.m_enableAutoSizing = !!i851[44]
  i850.m_fontSizeMin = i851[45]
  i850.m_fontSizeMax = i851[46]
  i850.m_fontStyle = i851[47]
  i850.m_HorizontalAlignment = i851[48]
  i850.m_VerticalAlignment = i851[49]
  i850.m_textAlignment = i851[50]
  i850.m_characterSpacing = i851[51]
  i850.m_wordSpacing = i851[52]
  i850.m_lineSpacing = i851[53]
  i850.m_lineSpacingMax = i851[54]
  i850.m_paragraphSpacing = i851[55]
  i850.m_charWidthMaxAdj = i851[56]
  i850.m_TextWrappingMode = i851[57]
  i850.m_wordWrappingRatios = i851[58]
  i850.m_overflowMode = i851[59]
  request.r(i851[60], i851[61], 0, i850, 'm_linkedTextComponent')
  request.r(i851[62], i851[63], 0, i850, 'parentLinkedComponent')
  i850.m_enableKerning = !!i851[64]
  var i857 = i851[65]
  var i856 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i857.length; i += 1) {
    i856.add(i857[i + 0]);
  }
  i850.m_ActiveFontFeatures = i856
  i850.m_enableExtraPadding = !!i851[66]
  i850.checkPaddingRequired = !!i851[67]
  i850.m_isRichText = !!i851[68]
  i850.m_parseCtrlCharacters = !!i851[69]
  i850.m_isOrthographic = !!i851[70]
  i850.m_isCullingEnabled = !!i851[71]
  i850.m_horizontalMapping = i851[72]
  i850.m_verticalMapping = i851[73]
  i850.m_uvLineOffset = i851[74]
  i850.m_geometrySortingOrder = i851[75]
  i850.m_IsTextObjectScaleStatic = !!i851[76]
  i850.m_VertexBufferAutoSizeReduction = !!i851[77]
  i850.m_useMaxVisibleDescender = !!i851[78]
  i850.m_pageToDisplay = i851[79]
  i850.m_margin = new pc.Vec4( i851[80], i851[81], i851[82], i851[83] )
  i850.m_isUsingLegacyAnimationComponent = !!i851[84]
  i850.m_isVolumetricText = !!i851[85]
  request.r(i851[86], i851[87], 0, i850, 'm_Material')
  i850.m_EmojiFallbackSupport = !!i851[88]
  i850.m_Maskable = !!i851[89]
  i850.m_Color = new pc.Color(i851[90], i851[91], i851[92], i851[93])
  i850.m_RaycastTarget = !!i851[94]
  i850.m_RaycastPadding = new pc.Vec4( i851[95], i851[96], i851[97], i851[98] )
  return i850
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i858 = root || request.c( 'TMPro.VertexGradient' )
  var i859 = data
  i858.topLeft = new pc.Color(i859[0], i859[1], i859[2], i859[3])
  i858.topRight = new pc.Color(i859[4], i859[5], i859[6], i859[7])
  i858.bottomLeft = new pc.Color(i859[8], i859[9], i859[10], i859[11])
  i858.bottomRight = new pc.Color(i859[12], i859[13], i859[14], i859[15])
  return i858
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i862 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i863 = data
  request.r(i863[0], i863[1], 0, i862, 'm_FirstSelected')
  i862.m_sendNavigationEvents = !!i863[2]
  i862.m_DragThreshold = i863[3]
  return i862
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i864 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i865 = data
  i864.m_HorizontalAxis = i865[0]
  i864.m_VerticalAxis = i865[1]
  i864.m_SubmitButton = i865[2]
  i864.m_CancelButton = i865[3]
  i864.m_InputActionsPerSecond = i865[4]
  i864.m_RepeatDelay = i865[5]
  i864.m_ForceModuleActive = !!i865[6]
  i864.m_SendPointerHoverToParent = !!i865[7]
  return i864
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i866 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i867 = data
  i866.ambientIntensity = i867[0]
  i866.reflectionIntensity = i867[1]
  i866.ambientMode = i867[2]
  i866.ambientLight = new pc.Color(i867[3], i867[4], i867[5], i867[6])
  i866.ambientSkyColor = new pc.Color(i867[7], i867[8], i867[9], i867[10])
  i866.ambientGroundColor = new pc.Color(i867[11], i867[12], i867[13], i867[14])
  i866.ambientEquatorColor = new pc.Color(i867[15], i867[16], i867[17], i867[18])
  i866.fogColor = new pc.Color(i867[19], i867[20], i867[21], i867[22])
  i866.fogEndDistance = i867[23]
  i866.fogStartDistance = i867[24]
  i866.fogDensity = i867[25]
  i866.fog = !!i867[26]
  request.r(i867[27], i867[28], 0, i866, 'skybox')
  i866.fogMode = i867[29]
  var i869 = i867[30]
  var i868 = []
  for(var i = 0; i < i869.length; i += 1) {
    i868.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i869[i + 0]) );
  }
  i866.lightmaps = i868
  i866.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i867[31], i866.lightProbes)
  i866.lightmapsMode = i867[32]
  i866.mixedBakeMode = i867[33]
  i866.environmentLightingMode = i867[34]
  i866.ambientProbe = new pc.SphericalHarmonicsL2(i867[35])
  i866.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i867[36])
  i866.useReferenceAmbientProbe = !!i867[37]
  request.r(i867[38], i867[39], 0, i866, 'customReflection')
  request.r(i867[40], i867[41], 0, i866, 'defaultReflection')
  i866.defaultReflectionMode = i867[42]
  i866.defaultReflectionResolution = i867[43]
  i866.sunLightObjectId = i867[44]
  i866.pixelLightCount = i867[45]
  i866.defaultReflectionHDR = !!i867[46]
  i866.hasLightDataAsset = !!i867[47]
  i866.hasManualGenerate = !!i867[48]
  return i866
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i872 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i873 = data
  request.r(i873[0], i873[1], 0, i872, 'lightmapColor')
  request.r(i873[2], i873[3], 0, i872, 'lightmapDirection')
  request.r(i873[4], i873[5], 0, i872, 'shadowMask')
  return i872
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i874 = root || new UnityEngine.LightProbes()
  var i875 = data
  return i874
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i882 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i883 = data
  var i885 = i883[0]
  var i884 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i885.length; i += 1) {
    i884.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i885[i + 0]));
  }
  i882.ShaderCompilationErrors = i884
  i882.name = i883[1]
  i882.guid = i883[2]
  var i887 = i883[3]
  var i886 = []
  for(var i = 0; i < i887.length; i += 1) {
    i886.push( i887[i + 0] );
  }
  i882.shaderDefinedKeywords = i886
  var i889 = i883[4]
  var i888 = []
  for(var i = 0; i < i889.length; i += 1) {
    i888.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i889[i + 0]) );
  }
  i882.passes = i888
  var i891 = i883[5]
  var i890 = []
  for(var i = 0; i < i891.length; i += 1) {
    i890.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i891[i + 0]) );
  }
  i882.usePasses = i890
  var i893 = i883[6]
  var i892 = []
  for(var i = 0; i < i893.length; i += 1) {
    i892.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i893[i + 0]) );
  }
  i882.defaultParameterValues = i892
  request.r(i883[7], i883[8], 0, i882, 'unityFallbackShader')
  i882.readDepth = !!i883[9]
  i882.hasDepthOnlyPass = !!i883[10]
  i882.isCreatedByShaderGraph = !!i883[11]
  i882.disableBatching = !!i883[12]
  i882.compiled = !!i883[13]
  return i882
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i896 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i897 = data
  i896.shaderName = i897[0]
  i896.errorMessage = i897[1]
  return i896
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i902 = root || new pc.UnityShaderPass()
  var i903 = data
  i902.id = i903[0]
  i902.subShaderIndex = i903[1]
  i902.name = i903[2]
  i902.passType = i903[3]
  i902.grabPassTextureName = i903[4]
  i902.usePass = !!i903[5]
  i902.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i903[6], i902.zTest)
  i902.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i903[7], i902.zWrite)
  i902.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i903[8], i902.culling)
  i902.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i903[9], i902.blending)
  i902.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i903[10], i902.alphaBlending)
  i902.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i903[11], i902.colorWriteMask)
  i902.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i903[12], i902.offsetUnits)
  i902.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i903[13], i902.offsetFactor)
  i902.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i903[14], i902.stencilRef)
  i902.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i903[15], i902.stencilReadMask)
  i902.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i903[16], i902.stencilWriteMask)
  i902.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i903[17], i902.stencilOp)
  i902.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i903[18], i902.stencilOpFront)
  i902.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i903[19], i902.stencilOpBack)
  var i905 = i903[20]
  var i904 = []
  for(var i = 0; i < i905.length; i += 1) {
    i904.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i905[i + 0]) );
  }
  i902.tags = i904
  var i907 = i903[21]
  var i906 = []
  for(var i = 0; i < i907.length; i += 1) {
    i906.push( i907[i + 0] );
  }
  i902.passDefinedKeywords = i906
  var i909 = i903[22]
  var i908 = []
  for(var i = 0; i < i909.length; i += 1) {
    i908.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i909[i + 0]) );
  }
  i902.passDefinedKeywordGroups = i908
  var i911 = i903[23]
  var i910 = []
  for(var i = 0; i < i911.length; i += 1) {
    i910.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i911[i + 0]) );
  }
  i902.variants = i910
  var i913 = i903[24]
  var i912 = []
  for(var i = 0; i < i913.length; i += 1) {
    i912.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i913[i + 0]) );
  }
  i902.excludedVariants = i912
  i902.hasDepthReader = !!i903[25]
  return i902
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i914 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i915 = data
  i914.val = i915[0]
  i914.name = i915[1]
  return i914
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i916 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i917 = data
  i916.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i917[0], i916.src)
  i916.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i917[1], i916.dst)
  i916.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i917[2], i916.op)
  return i916
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i918 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i919 = data
  i918.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i919[0], i918.pass)
  i918.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i919[1], i918.fail)
  i918.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i919[2], i918.zFail)
  i918.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i919[3], i918.comp)
  return i918
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i922 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i923 = data
  i922.name = i923[0]
  i922.value = i923[1]
  return i922
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i926 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i927 = data
  var i929 = i927[0]
  var i928 = []
  for(var i = 0; i < i929.length; i += 1) {
    i928.push( i929[i + 0] );
  }
  i926.keywords = i928
  i926.hasDiscard = !!i927[1]
  return i926
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i932 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i933 = data
  i932.passId = i933[0]
  i932.subShaderIndex = i933[1]
  var i935 = i933[2]
  var i934 = []
  for(var i = 0; i < i935.length; i += 1) {
    i934.push( i935[i + 0] );
  }
  i932.keywords = i934
  i932.vertexProgram = i933[3]
  i932.fragmentProgram = i933[4]
  i932.exportedForWebGl2 = !!i933[5]
  i932.readDepth = !!i933[6]
  return i932
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i938 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i939 = data
  request.r(i939[0], i939[1], 0, i938, 'shader')
  i938.pass = i939[2]
  return i938
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i942 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i943 = data
  i942.name = i943[0]
  i942.type = i943[1]
  i942.value = new pc.Vec4( i943[2], i943[3], i943[4], i943[5] )
  i942.textureValue = i943[6]
  i942.shaderPropertyFlag = i943[7]
  return i942
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i944 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i945 = data
  i944.name = i945[0]
  request.r(i945[1], i945[2], 0, i944, 'texture')
  i944.aabb = i945[3]
  i944.vertices = i945[4]
  i944.triangles = i945[5]
  i944.textureRect = UnityEngine.Rect.MinMaxRect(i945[6], i945[7], i945[8], i945[9])
  i944.packedRect = UnityEngine.Rect.MinMaxRect(i945[10], i945[11], i945[12], i945[13])
  i944.border = new pc.Vec4( i945[14], i945[15], i945[16], i945[17] )
  i944.transparency = i945[18]
  i944.bounds = i945[19]
  i944.pixelsPerUnit = i945[20]
  i944.textureWidth = i945[21]
  i944.textureHeight = i945[22]
  i944.nativeSize = new pc.Vec2( i945[23], i945[24] )
  i944.pivot = new pc.Vec2( i945[25], i945[26] )
  i944.textureRectOffset = new pc.Vec2( i945[27], i945[28] )
  return i944
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i946 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i947 = data
  i946.name = i947[0]
  return i946
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i948 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i949 = data
  i948.name = i949[0]
  i948.wrapMode = i949[1]
  i948.isLooping = !!i949[2]
  i948.length = i949[3]
  var i951 = i949[4]
  var i950 = []
  for(var i = 0; i < i951.length; i += 1) {
    i950.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i951[i + 0]) );
  }
  i948.curves = i950
  var i953 = i949[5]
  var i952 = []
  for(var i = 0; i < i953.length; i += 1) {
    i952.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i953[i + 0]) );
  }
  i948.events = i952
  i948.halfPrecision = !!i949[6]
  i948._frameRate = i949[7]
  i948.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i949[8], i948.localBounds)
  i948.hasMuscleCurves = !!i949[9]
  var i955 = i949[10]
  var i954 = []
  for(var i = 0; i < i955.length; i += 1) {
    i954.push( i955[i + 0] );
  }
  i948.clipMuscleConstant = i954
  i948.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i949[11], i948.clipBindingConstant)
  return i948
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i958 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i959 = data
  i958.path = i959[0]
  i958.hash = i959[1]
  i958.componentType = i959[2]
  i958.property = i959[3]
  i958.keys = i959[4]
  var i961 = i959[5]
  var i960 = []
  for(var i = 0; i < i961.length; i += 1) {
    i960.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i961[i + 0]) );
  }
  i958.objectReferenceKeys = i960
  return i958
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i964 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i965 = data
  i964.time = i965[0]
  request.r(i965[1], i965[2], 0, i964, 'value')
  return i964
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i968 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i969 = data
  i968.functionName = i969[0]
  i968.floatParameter = i969[1]
  i968.intParameter = i969[2]
  i968.stringParameter = i969[3]
  request.r(i969[4], i969[5], 0, i968, 'objectReferenceParameter')
  i968.time = i969[6]
  return i968
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i970 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i971 = data
  i970.center = new pc.Vec3( i971[0], i971[1], i971[2] )
  i970.extends = new pc.Vec3( i971[3], i971[4], i971[5] )
  return i970
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i974 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i975 = data
  var i977 = i975[0]
  var i976 = []
  for(var i = 0; i < i977.length; i += 1) {
    i976.push( i977[i + 0] );
  }
  i974.genericBindings = i976
  var i979 = i975[1]
  var i978 = []
  for(var i = 0; i < i979.length; i += 1) {
    i978.push( i979[i + 0] );
  }
  i974.pptrCurveMapping = i978
  return i974
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i980 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i981 = data
  i980.name = i981[0]
  i980.ascent = i981[1]
  i980.originalLineHeight = i981[2]
  i980.fontSize = i981[3]
  var i983 = i981[4]
  var i982 = []
  for(var i = 0; i < i983.length; i += 1) {
    i982.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i983[i + 0]) );
  }
  i980.characterInfo = i982
  request.r(i981[5], i981[6], 0, i980, 'texture')
  i980.originalFontSize = i981[7]
  return i980
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i986 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i987 = data
  i986.index = i987[0]
  i986.advance = i987[1]
  i986.bearing = i987[2]
  i986.glyphWidth = i987[3]
  i986.glyphHeight = i987[4]
  i986.minX = i987[5]
  i986.maxX = i987[6]
  i986.minY = i987[7]
  i986.maxY = i987[8]
  i986.uvBottomLeftX = i987[9]
  i986.uvBottomLeftY = i987[10]
  i986.uvBottomRightX = i987[11]
  i986.uvBottomRightY = i987[12]
  i986.uvTopLeftX = i987[13]
  i986.uvTopLeftY = i987[14]
  i986.uvTopRightX = i987[15]
  i986.uvTopRightY = i987[16]
  return i986
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i988 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i989 = data
  i988.name = i989[0]
  var i991 = i989[1]
  var i990 = []
  for(var i = 0; i < i991.length; i += 1) {
    i990.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i991[i + 0]) );
  }
  i988.layers = i990
  var i993 = i989[2]
  var i992 = []
  for(var i = 0; i < i993.length; i += 1) {
    i992.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i993[i + 0]) );
  }
  i988.parameters = i992
  i988.animationClips = i989[3]
  i988.avatarUnsupported = i989[4]
  return i988
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i996 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i997 = data
  i996.name = i997[0]
  i996.defaultWeight = i997[1]
  i996.blendingMode = i997[2]
  i996.avatarMask = i997[3]
  i996.syncedLayerIndex = i997[4]
  i996.syncedLayerAffectsTiming = !!i997[5]
  i996.syncedLayers = i997[6]
  i996.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i997[7], i996.stateMachine)
  return i996
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i998 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i999 = data
  i998.id = i999[0]
  i998.name = i999[1]
  i998.path = i999[2]
  var i1001 = i999[3]
  var i1000 = []
  for(var i = 0; i < i1001.length; i += 1) {
    i1000.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i1001[i + 0]) );
  }
  i998.states = i1000
  var i1003 = i999[4]
  var i1002 = []
  for(var i = 0; i < i1003.length; i += 1) {
    i1002.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1003[i + 0]) );
  }
  i998.machines = i1002
  var i1005 = i999[5]
  var i1004 = []
  for(var i = 0; i < i1005.length; i += 1) {
    i1004.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1005[i + 0]) );
  }
  i998.entryStateTransitions = i1004
  var i1007 = i999[6]
  var i1006 = []
  for(var i = 0; i < i1007.length; i += 1) {
    i1006.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1007[i + 0]) );
  }
  i998.exitStateTransitions = i1006
  var i1009 = i999[7]
  var i1008 = []
  for(var i = 0; i < i1009.length; i += 1) {
    i1008.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1009[i + 0]) );
  }
  i998.anyStateTransitions = i1008
  i998.defaultStateId = i999[8]
  return i998
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i1012 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i1013 = data
  i1012.id = i1013[0]
  i1012.name = i1013[1]
  i1012.cycleOffset = i1013[2]
  i1012.cycleOffsetParameter = i1013[3]
  i1012.cycleOffsetParameterActive = !!i1013[4]
  i1012.mirror = !!i1013[5]
  i1012.mirrorParameter = i1013[6]
  i1012.mirrorParameterActive = !!i1013[7]
  i1012.motionId = i1013[8]
  i1012.nameHash = i1013[9]
  i1012.fullPathHash = i1013[10]
  i1012.speed = i1013[11]
  i1012.speedParameter = i1013[12]
  i1012.speedParameterActive = !!i1013[13]
  i1012.tag = i1013[14]
  i1012.tagHash = i1013[15]
  i1012.writeDefaultValues = !!i1013[16]
  var i1015 = i1013[17]
  var i1014 = []
  for(var i = 0; i < i1015.length; i += 2) {
  request.r(i1015[i + 0], i1015[i + 1], 2, i1014, '')
  }
  i1012.behaviours = i1014
  var i1017 = i1013[18]
  var i1016 = []
  for(var i = 0; i < i1017.length; i += 1) {
    i1016.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1017[i + 0]) );
  }
  i1012.transitions = i1016
  return i1012
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1022 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1023 = data
  i1022.fullPath = i1023[0]
  i1022.canTransitionToSelf = !!i1023[1]
  i1022.duration = i1023[2]
  i1022.exitTime = i1023[3]
  i1022.hasExitTime = !!i1023[4]
  i1022.hasFixedDuration = !!i1023[5]
  i1022.interruptionSource = i1023[6]
  i1022.offset = i1023[7]
  i1022.orderedInterruption = !!i1023[8]
  i1022.destinationStateId = i1023[9]
  i1022.isExit = !!i1023[10]
  i1022.mute = !!i1023[11]
  i1022.solo = !!i1023[12]
  var i1025 = i1023[13]
  var i1024 = []
  for(var i = 0; i < i1025.length; i += 1) {
    i1024.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1025[i + 0]) );
  }
  i1022.conditions = i1024
  return i1022
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1030 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1031 = data
  i1030.destinationStateId = i1031[0]
  i1030.isExit = !!i1031[1]
  i1030.mute = !!i1031[2]
  i1030.solo = !!i1031[3]
  var i1033 = i1031[4]
  var i1032 = []
  for(var i = 0; i < i1033.length; i += 1) {
    i1032.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1033[i + 0]) );
  }
  i1030.conditions = i1032
  return i1030
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1036 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1037 = data
  i1036.mode = i1037[0]
  i1036.parameter = i1037[1]
  i1036.threshold = i1037[2]
  return i1036
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1040 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1041 = data
  i1040.defaultBool = !!i1041[0]
  i1040.defaultFloat = i1041[1]
  i1040.defaultInt = i1041[2]
  i1040.name = i1041[3]
  i1040.nameHash = i1041[4]
  i1040.type = i1041[5]
  return i1040
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1042 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1043 = data
  i1042.name = i1043[0]
  i1042.bytes64 = i1043[1]
  i1042.data = i1043[2]
  return i1042
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i1044 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i1045 = data
  i1044.normalStyle = i1045[0]
  i1044.normalSpacingOffset = i1045[1]
  i1044.boldStyle = i1045[2]
  i1044.boldSpacing = i1045[3]
  i1044.italicStyle = i1045[4]
  i1044.tabSize = i1045[5]
  request.r(i1045[6], i1045[7], 0, i1044, 'atlas')
  i1044.m_SourceFontFileGUID = i1045[8]
  i1044.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i1045[9], i1044.m_CreationSettings)
  request.r(i1045[10], i1045[11], 0, i1044, 'm_SourceFontFile')
  i1044.m_SourceFontFilePath = i1045[12]
  i1044.m_AtlasPopulationMode = i1045[13]
  i1044.InternalDynamicOS = !!i1045[14]
  var i1047 = i1045[15]
  var i1046 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i1047.length; i += 1) {
    i1046.add(request.d('UnityEngine.TextCore.Glyph', i1047[i + 0]));
  }
  i1044.m_GlyphTable = i1046
  var i1049 = i1045[16]
  var i1048 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i1049.length; i += 1) {
    i1048.add(request.d('TMPro.TMP_Character', i1049[i + 0]));
  }
  i1044.m_CharacterTable = i1048
  var i1051 = i1045[17]
  var i1050 = []
  for(var i = 0; i < i1051.length; i += 2) {
  request.r(i1051[i + 0], i1051[i + 1], 2, i1050, '')
  }
  i1044.m_AtlasTextures = i1050
  i1044.m_AtlasTextureIndex = i1045[18]
  i1044.m_IsMultiAtlasTexturesEnabled = !!i1045[19]
  i1044.m_GetFontFeatures = !!i1045[20]
  i1044.m_ClearDynamicDataOnBuild = !!i1045[21]
  i1044.m_AtlasWidth = i1045[22]
  i1044.m_AtlasHeight = i1045[23]
  i1044.m_AtlasPadding = i1045[24]
  i1044.m_AtlasRenderMode = i1045[25]
  var i1053 = i1045[26]
  var i1052 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1053.length; i += 1) {
    i1052.add(request.d('UnityEngine.TextCore.GlyphRect', i1053[i + 0]));
  }
  i1044.m_UsedGlyphRects = i1052
  var i1055 = i1045[27]
  var i1054 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1055.length; i += 1) {
    i1054.add(request.d('UnityEngine.TextCore.GlyphRect', i1055[i + 0]));
  }
  i1044.m_FreeGlyphRects = i1054
  i1044.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i1045[28], i1044.m_FontFeatureTable)
  i1044.m_ShouldReimportFontFeatures = !!i1045[29]
  var i1057 = i1045[30]
  var i1056 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1057.length; i += 2) {
  request.r(i1057[i + 0], i1057[i + 1], 1, i1056, '')
  }
  i1044.m_FallbackFontAssetTable = i1056
  var i1059 = i1045[31]
  var i1058 = []
  for(var i = 0; i < i1059.length; i += 1) {
    i1058.push( request.d('TMPro.TMP_FontWeightPair', i1059[i + 0]) );
  }
  i1044.m_FontWeightTable = i1058
  var i1061 = i1045[32]
  var i1060 = []
  for(var i = 0; i < i1061.length; i += 1) {
    i1060.push( request.d('TMPro.TMP_FontWeightPair', i1061[i + 0]) );
  }
  i1044.fontWeights = i1060
  i1044.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i1045[33], i1044.m_fontInfo)
  var i1063 = i1045[34]
  var i1062 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i1063.length; i += 1) {
    i1062.add(request.d('TMPro.TMP_Glyph', i1063[i + 0]));
  }
  i1044.m_glyphInfoList = i1062
  i1044.m_KerningTable = request.d('TMPro.KerningTable', i1045[35], i1044.m_KerningTable)
  var i1065 = i1045[36]
  var i1064 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1065.length; i += 2) {
  request.r(i1065[i + 0], i1065[i + 1], 1, i1064, '')
  }
  i1044.fallbackFontAssets = i1064
  i1044.m_Version = i1045[37]
  i1044.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1045[38], i1044.m_FaceInfo)
  request.r(i1045[39], i1045[40], 0, i1044, 'm_Material')
  return i1044
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i1066 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i1067 = data
  i1066.sourceFontFileName = i1067[0]
  i1066.sourceFontFileGUID = i1067[1]
  i1066.faceIndex = i1067[2]
  i1066.pointSizeSamplingMode = i1067[3]
  i1066.pointSize = i1067[4]
  i1066.padding = i1067[5]
  i1066.paddingMode = i1067[6]
  i1066.packingMode = i1067[7]
  i1066.atlasWidth = i1067[8]
  i1066.atlasHeight = i1067[9]
  i1066.characterSetSelectionMode = i1067[10]
  i1066.characterSequence = i1067[11]
  i1066.referencedFontAssetGUID = i1067[12]
  i1066.referencedTextAssetGUID = i1067[13]
  i1066.fontStyle = i1067[14]
  i1066.fontStyleModifier = i1067[15]
  i1066.renderMode = i1067[16]
  i1066.includeFontFeatures = !!i1067[17]
  return i1066
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i1070 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i1071 = data
  i1070.m_Index = i1071[0]
  i1070.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1071[1], i1070.m_Metrics)
  i1070.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1071[2], i1070.m_GlyphRect)
  i1070.m_Scale = i1071[3]
  i1070.m_AtlasIndex = i1071[4]
  i1070.m_ClassDefinitionType = i1071[5]
  return i1070
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1072 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1073 = data
  i1072.m_Width = i1073[0]
  i1072.m_Height = i1073[1]
  i1072.m_HorizontalBearingX = i1073[2]
  i1072.m_HorizontalBearingY = i1073[3]
  i1072.m_HorizontalAdvance = i1073[4]
  return i1072
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1074 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1075 = data
  i1074.m_X = i1075[0]
  i1074.m_Y = i1075[1]
  i1074.m_Width = i1075[2]
  i1074.m_Height = i1075[3]
  return i1074
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i1078 = root || request.c( 'TMPro.TMP_Character' )
  var i1079 = data
  i1078.m_ElementType = i1079[0]
  i1078.m_Unicode = i1079[1]
  i1078.m_GlyphIndex = i1079[2]
  i1078.m_Scale = i1079[3]
  return i1078
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i1084 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i1085 = data
  var i1087 = i1085[0]
  var i1086 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i1087.length; i += 1) {
    i1086.add(request.d('TMPro.MultipleSubstitutionRecord', i1087[i + 0]));
  }
  i1084.m_MultipleSubstitutionRecords = i1086
  var i1089 = i1085[1]
  var i1088 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i1089.length; i += 1) {
    i1088.add(request.d('TMPro.LigatureSubstitutionRecord', i1089[i + 0]));
  }
  i1084.m_LigatureSubstitutionRecords = i1088
  var i1091 = i1085[2]
  var i1090 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i1091.length; i += 1) {
    i1090.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i1091[i + 0]));
  }
  i1084.m_GlyphPairAdjustmentRecords = i1090
  var i1093 = i1085[3]
  var i1092 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i1093.length; i += 1) {
    i1092.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i1093[i + 0]));
  }
  i1084.m_MarkToBaseAdjustmentRecords = i1092
  var i1095 = i1085[4]
  var i1094 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i1095.length; i += 1) {
    i1094.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i1095[i + 0]));
  }
  i1084.m_MarkToMarkAdjustmentRecords = i1094
  return i1084
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i1098 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i1099 = data
  i1098.m_TargetGlyphID = i1099[0]
  i1098.m_SubstituteGlyphIDs = i1099[1]
  return i1098
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i1102 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i1103 = data
  i1102.m_ComponentGlyphIDs = i1103[0]
  i1102.m_LigatureGlyphID = i1103[1]
  return i1102
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i1106 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i1107 = data
  i1106.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i1107[0], i1106.m_FirstAdjustmentRecord)
  i1106.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i1107[1], i1106.m_SecondAdjustmentRecord)
  i1106.m_FeatureLookupFlags = i1107[2]
  return i1106
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1108 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i1109 = data
  i1108.m_GlyphIndex = i1109[0]
  i1108.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i1109[1], i1108.m_GlyphValueRecord)
  return i1108
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i1110 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i1111 = data
  i1110.m_XPlacement = i1111[0]
  i1110.m_YPlacement = i1111[1]
  i1110.m_XAdvance = i1111[2]
  i1110.m_YAdvance = i1111[3]
  return i1110
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i1114 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i1115 = data
  i1114.m_BaseGlyphID = i1115[0]
  i1114.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i1115[1], i1114.m_BaseGlyphAnchorPoint)
  i1114.m_MarkGlyphID = i1115[2]
  i1114.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i1115[3], i1114.m_MarkPositionAdjustment)
  return i1114
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i1118 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i1119 = data
  i1118.m_BaseMarkGlyphID = i1119[0]
  i1118.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i1119[1], i1118.m_BaseMarkGlyphAnchorPoint)
  i1118.m_CombiningMarkGlyphID = i1119[2]
  i1118.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i1119[3], i1118.m_CombiningMarkPositionAdjustment)
  return i1118
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i1124 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i1125 = data
  request.r(i1125[0], i1125[1], 0, i1124, 'regularTypeface')
  request.r(i1125[2], i1125[3], 0, i1124, 'italicTypeface')
  return i1124
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i1126 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i1127 = data
  i1126.Name = i1127[0]
  i1126.PointSize = i1127[1]
  i1126.Scale = i1127[2]
  i1126.CharacterCount = i1127[3]
  i1126.LineHeight = i1127[4]
  i1126.Baseline = i1127[5]
  i1126.Ascender = i1127[6]
  i1126.CapHeight = i1127[7]
  i1126.Descender = i1127[8]
  i1126.CenterLine = i1127[9]
  i1126.SuperscriptOffset = i1127[10]
  i1126.SubscriptOffset = i1127[11]
  i1126.SubSize = i1127[12]
  i1126.Underline = i1127[13]
  i1126.UnderlineThickness = i1127[14]
  i1126.strikethrough = i1127[15]
  i1126.strikethroughThickness = i1127[16]
  i1126.TabWidth = i1127[17]
  i1126.Padding = i1127[18]
  i1126.AtlasWidth = i1127[19]
  i1126.AtlasHeight = i1127[20]
  return i1126
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i1130 = root || request.c( 'TMPro.TMP_Glyph' )
  var i1131 = data
  i1130.id = i1131[0]
  i1130.x = i1131[1]
  i1130.y = i1131[2]
  i1130.width = i1131[3]
  i1130.height = i1131[4]
  i1130.xOffset = i1131[5]
  i1130.yOffset = i1131[6]
  i1130.xAdvance = i1131[7]
  i1130.scale = i1131[8]
  return i1130
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i1132 = root || request.c( 'TMPro.KerningTable' )
  var i1133 = data
  var i1135 = i1133[0]
  var i1134 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i1135.length; i += 1) {
    i1134.add(request.d('TMPro.KerningPair', i1135[i + 0]));
  }
  i1132.kerningPairs = i1134
  return i1132
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i1138 = root || request.c( 'TMPro.KerningPair' )
  var i1139 = data
  i1138.xOffset = i1139[0]
  i1138.m_FirstGlyph = i1139[1]
  i1138.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1139[2], i1138.m_FirstGlyphAdjustments)
  i1138.m_SecondGlyph = i1139[3]
  i1138.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1139[4], i1138.m_SecondGlyphAdjustments)
  i1138.m_IgnoreSpacingAdjustments = !!i1139[5]
  return i1138
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1140 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1141 = data
  i1140.m_FaceIndex = i1141[0]
  i1140.m_FamilyName = i1141[1]
  i1140.m_StyleName = i1141[2]
  i1140.m_PointSize = i1141[3]
  i1140.m_Scale = i1141[4]
  i1140.m_UnitsPerEM = i1141[5]
  i1140.m_LineHeight = i1141[6]
  i1140.m_AscentLine = i1141[7]
  i1140.m_CapLine = i1141[8]
  i1140.m_MeanLine = i1141[9]
  i1140.m_Baseline = i1141[10]
  i1140.m_DescentLine = i1141[11]
  i1140.m_SuperscriptOffset = i1141[12]
  i1140.m_SuperscriptSize = i1141[13]
  i1140.m_SubscriptOffset = i1141[14]
  i1140.m_SubscriptSize = i1141[15]
  i1140.m_UnderlineOffset = i1141[16]
  i1140.m_UnderlineThickness = i1141[17]
  i1140.m_StrikethroughOffset = i1141[18]
  i1140.m_StrikethroughThickness = i1141[19]
  i1140.m_TabWidth = i1141[20]
  return i1140
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1142 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1143 = data
  i1142.useSafeMode = !!i1143[0]
  i1142.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1143[1], i1142.safeModeOptions)
  i1142.timeScale = i1143[2]
  i1142.unscaledTimeScale = i1143[3]
  i1142.useSmoothDeltaTime = !!i1143[4]
  i1142.maxSmoothUnscaledTime = i1143[5]
  i1142.rewindCallbackMode = i1143[6]
  i1142.showUnityEditorReport = !!i1143[7]
  i1142.logBehaviour = i1143[8]
  i1142.drawGizmos = !!i1143[9]
  i1142.defaultRecyclable = !!i1143[10]
  i1142.defaultAutoPlay = i1143[11]
  i1142.defaultUpdateType = i1143[12]
  i1142.defaultTimeScaleIndependent = !!i1143[13]
  i1142.defaultEaseType = i1143[14]
  i1142.defaultEaseOvershootOrAmplitude = i1143[15]
  i1142.defaultEasePeriod = i1143[16]
  i1142.defaultAutoKill = !!i1143[17]
  i1142.defaultLoopType = i1143[18]
  i1142.debugMode = !!i1143[19]
  i1142.debugStoreTargetId = !!i1143[20]
  i1142.showPreviewPanel = !!i1143[21]
  i1142.storeSettingsLocation = i1143[22]
  i1142.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1143[23], i1142.modules)
  i1142.createASMDEF = !!i1143[24]
  i1142.showPlayingTweens = !!i1143[25]
  i1142.showPausedTweens = !!i1143[26]
  return i1142
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1144 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1145 = data
  i1144.logBehaviour = i1145[0]
  i1144.nestedTweenFailureBehaviour = i1145[1]
  return i1144
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1146 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1147 = data
  i1146.showPanel = !!i1147[0]
  i1146.audioEnabled = !!i1147[1]
  i1146.physicsEnabled = !!i1147[2]
  i1146.physics2DEnabled = !!i1147[3]
  i1146.spriteEnabled = !!i1147[4]
  i1146.uiEnabled = !!i1147[5]
  i1146.uiToolkitEnabled = !!i1147[6]
  i1146.textMeshProEnabled = !!i1147[7]
  i1146.tk2DEnabled = !!i1147[8]
  i1146.deAudioEnabled = !!i1147[9]
  i1146.deUnityExtendedEnabled = !!i1147[10]
  i1146.epoOutlineEnabled = !!i1147[11]
  return i1146
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1148 = root || request.c( 'TMPro.TMP_Settings' )
  var i1149 = data
  i1148.assetVersion = i1149[0]
  i1148.m_TextWrappingMode = i1149[1]
  i1148.m_enableKerning = !!i1149[2]
  var i1151 = i1149[3]
  var i1150 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i1151.length; i += 1) {
    i1150.add(i1151[i + 0]);
  }
  i1148.m_ActiveFontFeatures = i1150
  i1148.m_enableExtraPadding = !!i1149[4]
  i1148.m_enableTintAllSprites = !!i1149[5]
  i1148.m_enableParseEscapeCharacters = !!i1149[6]
  i1148.m_EnableRaycastTarget = !!i1149[7]
  i1148.m_GetFontFeaturesAtRuntime = !!i1149[8]
  i1148.m_missingGlyphCharacter = i1149[9]
  i1148.m_ClearDynamicDataOnBuild = !!i1149[10]
  i1148.m_warningsDisabled = !!i1149[11]
  request.r(i1149[12], i1149[13], 0, i1148, 'm_defaultFontAsset')
  i1148.m_defaultFontAssetPath = i1149[14]
  i1148.m_defaultFontSize = i1149[15]
  i1148.m_defaultAutoSizeMinRatio = i1149[16]
  i1148.m_defaultAutoSizeMaxRatio = i1149[17]
  i1148.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1149[18], i1149[19] )
  i1148.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1149[20], i1149[21] )
  i1148.m_autoSizeTextContainer = !!i1149[22]
  i1148.m_IsTextObjectScaleStatic = !!i1149[23]
  var i1153 = i1149[24]
  var i1152 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1153.length; i += 2) {
  request.r(i1153[i + 0], i1153[i + 1], 1, i1152, '')
  }
  i1148.m_fallbackFontAssets = i1152
  i1148.m_matchMaterialPreset = !!i1149[25]
  i1148.m_HideSubTextObjects = !!i1149[26]
  request.r(i1149[27], i1149[28], 0, i1148, 'm_defaultSpriteAsset')
  i1148.m_defaultSpriteAssetPath = i1149[29]
  i1148.m_enableEmojiSupport = !!i1149[30]
  i1148.m_MissingCharacterSpriteUnicode = i1149[31]
  var i1155 = i1149[32]
  var i1154 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i1155.length; i += 2) {
  request.r(i1155[i + 0], i1155[i + 1], 1, i1154, '')
  }
  i1148.m_EmojiFallbackTextAssets = i1154
  i1148.m_defaultColorGradientPresetsPath = i1149[33]
  request.r(i1149[34], i1149[35], 0, i1148, 'm_defaultStyleSheet')
  i1148.m_StyleSheetsResourcePath = i1149[36]
  request.r(i1149[37], i1149[38], 0, i1148, 'm_leadingCharacters')
  request.r(i1149[39], i1149[40], 0, i1148, 'm_followingCharacters')
  i1148.m_UseModernHangulLineBreakingRules = !!i1149[41]
  return i1148
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1158 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1159 = data
  request.r(i1159[0], i1159[1], 0, i1158, 'spriteSheet')
  var i1161 = i1159[2]
  var i1160 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1161.length; i += 1) {
    i1160.add(request.d('TMPro.TMP_Sprite', i1161[i + 0]));
  }
  i1158.spriteInfoList = i1160
  var i1163 = i1159[3]
  var i1162 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1163.length; i += 2) {
  request.r(i1163[i + 0], i1163[i + 1], 1, i1162, '')
  }
  i1158.fallbackSpriteAssets = i1162
  var i1165 = i1159[4]
  var i1164 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1165.length; i += 1) {
    i1164.add(request.d('TMPro.TMP_SpriteCharacter', i1165[i + 0]));
  }
  i1158.m_SpriteCharacterTable = i1164
  var i1167 = i1159[5]
  var i1166 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1167.length; i += 1) {
    i1166.add(request.d('TMPro.TMP_SpriteGlyph', i1167[i + 0]));
  }
  i1158.m_GlyphTable = i1166
  i1158.m_Version = i1159[6]
  i1158.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1159[7], i1158.m_FaceInfo)
  request.r(i1159[8], i1159[9], 0, i1158, 'm_Material')
  return i1158
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1170 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1171 = data
  i1170.name = i1171[0]
  i1170.hashCode = i1171[1]
  i1170.unicode = i1171[2]
  i1170.pivot = new pc.Vec2( i1171[3], i1171[4] )
  request.r(i1171[5], i1171[6], 0, i1170, 'sprite')
  i1170.id = i1171[7]
  i1170.x = i1171[8]
  i1170.y = i1171[9]
  i1170.width = i1171[10]
  i1170.height = i1171[11]
  i1170.xOffset = i1171[12]
  i1170.yOffset = i1171[13]
  i1170.xAdvance = i1171[14]
  i1170.scale = i1171[15]
  return i1170
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1176 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1177 = data
  i1176.m_Name = i1177[0]
  i1176.m_ElementType = i1177[1]
  i1176.m_Unicode = i1177[2]
  i1176.m_GlyphIndex = i1177[3]
  i1176.m_Scale = i1177[4]
  return i1176
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1180 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1181 = data
  request.r(i1181[0], i1181[1], 0, i1180, 'sprite')
  i1180.m_Index = i1181[2]
  i1180.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1181[3], i1180.m_Metrics)
  i1180.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1181[4], i1180.m_GlyphRect)
  i1180.m_Scale = i1181[5]
  i1180.m_AtlasIndex = i1181[6]
  i1180.m_ClassDefinitionType = i1181[7]
  return i1180
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1182 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1183 = data
  var i1185 = i1183[0]
  var i1184 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1185.length; i += 1) {
    i1184.add(request.d('TMPro.TMP_Style', i1185[i + 0]));
  }
  i1182.m_StyleList = i1184
  return i1182
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1188 = root || request.c( 'TMPro.TMP_Style' )
  var i1189 = data
  i1188.m_Name = i1189[0]
  i1188.m_HashCode = i1189[1]
  i1188.m_OpeningDefinition = i1189[2]
  i1188.m_ClosingDefinition = i1189[3]
  i1188.m_OpeningTagArray = i1189[4]
  i1188.m_ClosingTagArray = i1189[5]
  return i1188
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1190 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1191 = data
  var i1193 = i1191[0]
  var i1192 = []
  for(var i = 0; i < i1193.length; i += 1) {
    i1192.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1193[i + 0]) );
  }
  i1190.files = i1192
  i1190.componentToPrefabIds = i1191[1]
  return i1190
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1196 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1197 = data
  i1196.path = i1197[0]
  request.r(i1197[1], i1197[2], 0, i1196, 'unityObject')
  return i1196
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1198 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1199 = data
  var i1201 = i1199[0]
  var i1200 = []
  for(var i = 0; i < i1201.length; i += 1) {
    i1200.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1201[i + 0]) );
  }
  i1198.scriptsExecutionOrder = i1200
  var i1203 = i1199[1]
  var i1202 = []
  for(var i = 0; i < i1203.length; i += 1) {
    i1202.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1203[i + 0]) );
  }
  i1198.sortingLayers = i1202
  var i1205 = i1199[2]
  var i1204 = []
  for(var i = 0; i < i1205.length; i += 1) {
    i1204.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1205[i + 0]) );
  }
  i1198.cullingLayers = i1204
  i1198.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1199[3], i1198.timeSettings)
  i1198.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1199[4], i1198.physicsSettings)
  i1198.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1199[5], i1198.physics2DSettings)
  i1198.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1199[6], i1198.qualitySettings)
  i1198.enableRealtimeShadows = !!i1199[7]
  i1198.enableAutoInstancing = !!i1199[8]
  i1198.enableStaticBatching = !!i1199[9]
  i1198.enableDynamicBatching = !!i1199[10]
  i1198.lightmapEncodingQuality = i1199[11]
  i1198.desiredColorSpace = i1199[12]
  var i1207 = i1199[13]
  var i1206 = []
  for(var i = 0; i < i1207.length; i += 1) {
    i1206.push( i1207[i + 0] );
  }
  i1198.allTags = i1206
  return i1198
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1210 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1211 = data
  i1210.name = i1211[0]
  i1210.value = i1211[1]
  return i1210
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1214 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1215 = data
  i1214.id = i1215[0]
  i1214.name = i1215[1]
  i1214.value = i1215[2]
  return i1214
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1218 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1219 = data
  i1218.id = i1219[0]
  i1218.name = i1219[1]
  return i1218
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1220 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1221 = data
  i1220.fixedDeltaTime = i1221[0]
  i1220.maximumDeltaTime = i1221[1]
  i1220.timeScale = i1221[2]
  i1220.maximumParticleTimestep = i1221[3]
  return i1220
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1222 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1223 = data
  i1222.gravity = new pc.Vec3( i1223[0], i1223[1], i1223[2] )
  i1222.defaultSolverIterations = i1223[3]
  i1222.bounceThreshold = i1223[4]
  i1222.autoSyncTransforms = !!i1223[5]
  i1222.autoSimulation = !!i1223[6]
  var i1225 = i1223[7]
  var i1224 = []
  for(var i = 0; i < i1225.length; i += 1) {
    i1224.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1225[i + 0]) );
  }
  i1222.collisionMatrix = i1224
  return i1222
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1228 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1229 = data
  i1228.enabled = !!i1229[0]
  i1228.layerId = i1229[1]
  i1228.otherLayerId = i1229[2]
  return i1228
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1230 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1231 = data
  request.r(i1231[0], i1231[1], 0, i1230, 'material')
  i1230.gravity = new pc.Vec2( i1231[2], i1231[3] )
  i1230.positionIterations = i1231[4]
  i1230.velocityIterations = i1231[5]
  i1230.velocityThreshold = i1231[6]
  i1230.maxLinearCorrection = i1231[7]
  i1230.maxAngularCorrection = i1231[8]
  i1230.maxTranslationSpeed = i1231[9]
  i1230.maxRotationSpeed = i1231[10]
  i1230.baumgarteScale = i1231[11]
  i1230.baumgarteTOIScale = i1231[12]
  i1230.timeToSleep = i1231[13]
  i1230.linearSleepTolerance = i1231[14]
  i1230.angularSleepTolerance = i1231[15]
  i1230.defaultContactOffset = i1231[16]
  i1230.autoSimulation = !!i1231[17]
  i1230.queriesHitTriggers = !!i1231[18]
  i1230.queriesStartInColliders = !!i1231[19]
  i1230.callbacksOnDisable = !!i1231[20]
  i1230.reuseCollisionCallbacks = !!i1231[21]
  i1230.autoSyncTransforms = !!i1231[22]
  var i1233 = i1231[23]
  var i1232 = []
  for(var i = 0; i < i1233.length; i += 1) {
    i1232.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1233[i + 0]) );
  }
  i1230.collisionMatrix = i1232
  return i1230
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1236 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1237 = data
  i1236.enabled = !!i1237[0]
  i1236.layerId = i1237[1]
  i1236.otherLayerId = i1237[2]
  return i1236
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1238 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1239 = data
  var i1241 = i1239[0]
  var i1240 = []
  for(var i = 0; i < i1241.length; i += 1) {
    i1240.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1241[i + 0]) );
  }
  i1238.qualityLevels = i1240
  var i1243 = i1239[1]
  var i1242 = []
  for(var i = 0; i < i1243.length; i += 1) {
    i1242.push( i1243[i + 0] );
  }
  i1238.names = i1242
  i1238.shadows = i1239[2]
  i1238.anisotropicFiltering = i1239[3]
  i1238.antiAliasing = i1239[4]
  i1238.lodBias = i1239[5]
  i1238.shadowCascades = i1239[6]
  i1238.shadowDistance = i1239[7]
  i1238.shadowmaskMode = i1239[8]
  i1238.shadowProjection = i1239[9]
  i1238.shadowResolution = i1239[10]
  i1238.softParticles = !!i1239[11]
  i1238.softVegetation = !!i1239[12]
  i1238.activeColorSpace = i1239[13]
  i1238.desiredColorSpace = i1239[14]
  i1238.masterTextureLimit = i1239[15]
  i1238.maxQueuedFrames = i1239[16]
  i1238.particleRaycastBudget = i1239[17]
  i1238.pixelLightCount = i1239[18]
  i1238.realtimeReflectionProbes = !!i1239[19]
  i1238.shadowCascade2Split = i1239[20]
  i1238.shadowCascade4Split = new pc.Vec3( i1239[21], i1239[22], i1239[23] )
  i1238.streamingMipmapsActive = !!i1239[24]
  i1238.vSyncCount = i1239[25]
  i1238.asyncUploadBufferSize = i1239[26]
  i1238.asyncUploadTimeSlice = i1239[27]
  i1238.billboardsFaceCameraPosition = !!i1239[28]
  i1238.shadowNearPlaneOffset = i1239[29]
  i1238.streamingMipmapsMemoryBudget = i1239[30]
  i1238.maximumLODLevel = i1239[31]
  i1238.streamingMipmapsAddAllCameras = !!i1239[32]
  i1238.streamingMipmapsMaxLevelReduction = i1239[33]
  i1238.streamingMipmapsRenderersPerFrame = i1239[34]
  i1238.resolutionScalingFixedDPIFactor = i1239[35]
  i1238.streamingMipmapsMaxFileIORequests = i1239[36]
  i1238.currentQualityLevel = i1239[37]
  return i1238
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1248 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1249 = data
  i1248.weight = i1249[0]
  i1248.vertices = i1249[1]
  i1248.normals = i1249[2]
  i1248.tangents = i1249[3]
  return i1248
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i1250 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i1251 = data
  i1250.m_XCoordinate = i1251[0]
  i1250.m_YCoordinate = i1251[1]
  return i1250
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i1252 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i1253 = data
  i1252.m_XPositionAdjustment = i1253[0]
  i1252.m_YPositionAdjustment = i1253[1]
  return i1252
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1254 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1255 = data
  i1254.xPlacement = i1255[0]
  i1254.yPlacement = i1255[1]
  i1254.xAdvance = i1255[2]
  i1254.yAdvance = i1255[3]
  return i1254
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"44":[45],"46":[45],"47":[45],"48":[45],"49":[45],"50":[45],"51":[52],"53":[2],"54":[55],"56":[55],"57":[55],"58":[55],"59":[55],"60":[55],"61":[62],"63":[62],"64":[62],"65":[62],"66":[62],"67":[62],"68":[62],"69":[62],"70":[62],"71":[62],"72":[62],"73":[62],"74":[62],"75":[2],"76":[33],"77":[78],"79":[78],"21":[20],"6":[2],"80":[62],"81":[82],"83":[18],"84":[2],"85":[86],"87":[36],"88":[21],"89":[20],"34":[33,20],"90":[20,25],"91":[20],"92":[25,20],"93":[33],"94":[25,20],"95":[20],"96":[97],"98":[97],"99":[97],"100":[20],"101":[20],"24":[21],"26":[25,20],"102":[20],"23":[21],"103":[20],"104":[20],"105":[20],"106":[20],"107":[20],"108":[20],"109":[20],"110":[20],"111":[20],"112":[25,20],"113":[20],"114":[20],"115":[20],"116":[20],"117":[25,20],"118":[20],"119":[36],"120":[36],"37":[36],"121":[36],"122":[2],"123":[2]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.MonoBehaviour","CameraFollow2D","AutoCameraFit","UnityEngine.Transform","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Mesh","UnityEngine.Material","Ply_SoundManager","UnityEngine.AudioClip","UnityEngine.AudioSource","HaalandGame.HaalandGameManager","UnityEngine.GameObject","UnityEngine.Animator","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.UI.Button","UnityEditor.Animations.AnimatorController","HideOnFirstClick","ScreenHeightPositionAnchor","UnityEngine.BoxCollider","HaalandGame.PlayerSelectable","UnityEngine.MeshRenderer","TMPro.TextMeshPro","TMPro.TMP_FontAsset","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.Font","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","BatStrikeController","SlotTrigger","UnityEngine.BoxCollider2D","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.InputSystem.UI.InputSystemUIInputModule","UnityEngine.InputSystem.UI.TrackedDeviceRaycaster","TMPro.TextContainer","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.38f1";

Deserializers.productName = "PLY_MiniSoccer";

Deserializers.lunaInitializationTime = "07/15/2026 03:53:54";

Deserializers.lunaDaysRunning = "29.1";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1738";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4572";

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

Deserializers.buildID = "5eddb350-bdfc-436b-9ac2-485bfcddce35";

Deserializers.runtimeInitializeOnLoadInfos = [[["Unity","Services","Core","Internal","UnityServicesInitializer","EnableServicesInitializationAsync"],["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["DG","Tweening","DOTween","RuntimeOnLoad"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["Unity","Services","Core","Registration","CorePackageInitializer","InitializeOnLoad"],["Unity","Services","Core","Internal","TaskAsyncOperation","SetScheduler"],["Unity","Services","Core","Environments","Client","Scheduler","EngineStateHelper","Init"],["Unity","Services","Core","Environments","Client","Scheduler","ThreadHelper","Init"],["Ua2CoreInitializeCallback","Register"],["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["Unity","AI","Navigation","NavMeshLink","ClearTrackedList"],["Unity","AI","Navigation","NavMeshSurface","ClearNavMeshSurfaces"],["Unity","AI","Navigation","NavMeshModifierVolume","ClearNavMeshModifiers"],["Unity","AI","Navigation","NavMeshModifier","ClearNavMeshModifiers"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["Unity","Services","Core","Internal","UnityServicesInitializer","CreateStaticInstance"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[["Unity","Services","Core","Environments","Client","Http","JsonHelpers","RegisterTypesForAOT"]],[["Unity","Services","Core","UnityThreadUtils","CaptureUnityThreadInfo"],["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

