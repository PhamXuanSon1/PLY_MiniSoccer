var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i644 = root || request.c( 'UnityEngine.JointSpring' )
  var i645 = data
  i644.spring = i645[0]
  i644.damper = i645[1]
  i644.targetPosition = i645[2]
  return i644
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i646 = root || request.c( 'UnityEngine.JointMotor' )
  var i647 = data
  i646.m_TargetVelocity = i647[0]
  i646.m_Force = i647[1]
  i646.m_FreeSpin = i647[2]
  return i646
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i648 = root || request.c( 'UnityEngine.JointLimits' )
  var i649 = data
  i648.m_Min = i649[0]
  i648.m_Max = i649[1]
  i648.m_Bounciness = i649[2]
  i648.m_BounceMinVelocity = i649[3]
  i648.m_ContactDistance = i649[4]
  i648.minBounce = i649[5]
  i648.maxBounce = i649[6]
  return i648
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i650 = root || request.c( 'UnityEngine.JointDrive' )
  var i651 = data
  i650.m_PositionSpring = i651[0]
  i650.m_PositionDamper = i651[1]
  i650.m_MaximumForce = i651[2]
  i650.m_UseAcceleration = i651[3]
  return i650
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i652 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i653 = data
  i652.m_Spring = i653[0]
  i652.m_Damper = i653[1]
  return i652
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i654 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i655 = data
  i654.m_Limit = i655[0]
  i654.m_Bounciness = i655[1]
  i654.m_ContactDistance = i655[2]
  return i654
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i656 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i657 = data
  i656.m_ExtremumSlip = i657[0]
  i656.m_ExtremumValue = i657[1]
  i656.m_AsymptoteSlip = i657[2]
  i656.m_AsymptoteValue = i657[3]
  i656.m_Stiffness = i657[4]
  return i656
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i658 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i659 = data
  i658.m_LowerAngle = i659[0]
  i658.m_UpperAngle = i659[1]
  return i658
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i660 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i661 = data
  i660.m_MotorSpeed = i661[0]
  i660.m_MaximumMotorTorque = i661[1]
  return i660
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i662 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i663 = data
  i662.m_DampingRatio = i663[0]
  i662.m_Frequency = i663[1]
  i662.m_Angle = i663[2]
  return i662
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i664 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i665 = data
  i664.m_LowerTranslation = i665[0]
  i664.m_UpperTranslation = i665[1]
  return i664
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i666 = root || new pc.UnityMaterial()
  var i667 = data
  i666.name = i667[0]
  request.r(i667[1], i667[2], 0, i666, 'shader')
  i666.renderQueue = i667[3]
  i666.enableInstancing = !!i667[4]
  var i669 = i667[5]
  var i668 = []
  for(var i = 0; i < i669.length; i += 1) {
    i668.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i669[i + 0]) );
  }
  i666.floatParameters = i668
  var i671 = i667[6]
  var i670 = []
  for(var i = 0; i < i671.length; i += 1) {
    i670.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i671[i + 0]) );
  }
  i666.colorParameters = i670
  var i673 = i667[7]
  var i672 = []
  for(var i = 0; i < i673.length; i += 1) {
    i672.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i673[i + 0]) );
  }
  i666.vectorParameters = i672
  var i675 = i667[8]
  var i674 = []
  for(var i = 0; i < i675.length; i += 1) {
    i674.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i675[i + 0]) );
  }
  i666.textureParameters = i674
  var i677 = i667[9]
  var i676 = []
  for(var i = 0; i < i677.length; i += 1) {
    i676.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i677[i + 0]) );
  }
  i666.materialFlags = i676
  return i666
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i680 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i681 = data
  i680.name = i681[0]
  i680.value = i681[1]
  return i680
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i684 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i685 = data
  i684.name = i685[0]
  i684.value = new pc.Color(i685[1], i685[2], i685[3], i685[4])
  return i684
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i688 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i689 = data
  i688.name = i689[0]
  i688.value = new pc.Vec4( i689[1], i689[2], i689[3], i689[4] )
  return i688
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i692 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i693 = data
  i692.name = i693[0]
  request.r(i693[1], i693[2], 0, i692, 'value')
  return i692
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i696 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i697 = data
  i696.name = i697[0]
  i696.enabled = !!i697[1]
  return i696
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i698 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i699 = data
  i698.name = i699[0]
  i698.width = i699[1]
  i698.height = i699[2]
  i698.mipmapCount = i699[3]
  i698.anisoLevel = i699[4]
  i698.filterMode = i699[5]
  i698.hdr = !!i699[6]
  i698.format = i699[7]
  i698.wrapMode = i699[8]
  i698.alphaIsTransparency = !!i699[9]
  i698.alphaSource = i699[10]
  i698.graphicsFormat = i699[11]
  i698.sRGBTexture = !!i699[12]
  i698.desiredColorSpace = i699[13]
  i698.wrapU = i699[14]
  i698.wrapV = i699[15]
  return i698
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i700 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i701 = data
  i700.name = i701[0]
  i700.halfPrecision = !!i701[1]
  i700.useSimplification = !!i701[2]
  i700.useUInt32IndexFormat = !!i701[3]
  i700.vertexCount = i701[4]
  i700.aabb = i701[5]
  var i703 = i701[6]
  var i702 = []
  for(var i = 0; i < i703.length; i += 1) {
    i702.push( !!i703[i + 0] );
  }
  i700.streams = i702
  i700.vertices = i701[7]
  var i705 = i701[8]
  var i704 = []
  for(var i = 0; i < i705.length; i += 1) {
    i704.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i705[i + 0]) );
  }
  i700.subMeshes = i704
  var i707 = i701[9]
  var i706 = []
  for(var i = 0; i < i707.length; i += 16) {
    i706.push( new pc.Mat4().setData(i707[i + 0], i707[i + 1], i707[i + 2], i707[i + 3],  i707[i + 4], i707[i + 5], i707[i + 6], i707[i + 7],  i707[i + 8], i707[i + 9], i707[i + 10], i707[i + 11],  i707[i + 12], i707[i + 13], i707[i + 14], i707[i + 15]) );
  }
  i700.bindposes = i706
  var i709 = i701[10]
  var i708 = []
  for(var i = 0; i < i709.length; i += 1) {
    i708.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i709[i + 0]) );
  }
  i700.blendShapes = i708
  return i700
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i714 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i715 = data
  i714.triangles = i715[0]
  return i714
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i720 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i721 = data
  i720.name = i721[0]
  var i723 = i721[1]
  var i722 = []
  for(var i = 0; i < i723.length; i += 1) {
    i722.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i723[i + 0]) );
  }
  i720.frames = i722
  return i720
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i724 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i725 = data
  i724.name = i725[0]
  i724.index = i725[1]
  i724.startup = !!i725[2]
  return i724
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i726 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i727 = data
  i726.aspect = i727[0]
  i726.orthographic = !!i727[1]
  i726.orthographicSize = i727[2]
  i726.backgroundColor = new pc.Color(i727[3], i727[4], i727[5], i727[6])
  i726.nearClipPlane = i727[7]
  i726.farClipPlane = i727[8]
  i726.fieldOfView = i727[9]
  i726.depth = i727[10]
  i726.clearFlags = i727[11]
  i726.cullingMask = i727[12]
  i726.rect = i727[13]
  request.r(i727[14], i727[15], 0, i726, 'targetTexture')
  i726.usePhysicalProperties = !!i727[16]
  i726.focalLength = i727[17]
  i726.sensorSize = new pc.Vec2( i727[18], i727[19] )
  i726.lensShift = new pc.Vec2( i727[20], i727[21] )
  i726.gateFit = i727[22]
  i726.commandBufferCount = i727[23]
  i726.cameraType = i727[24]
  i726.enabled = !!i727[25]
  return i726
}

Deserializers["CameraFollow2D"] = function (request, data, root) {
  var i728 = root || request.c( 'CameraFollow2D' )
  var i729 = data
  request.r(i729[0], i729[1], 0, i728, 'target')
  i728.smoothSpeed = i729[2]
  i728.offset = new pc.Vec3( i729[3], i729[4], i729[5] )
  i728.followY = !!i729[6]
  return i728
}

Deserializers["AutoCameraFit"] = function (request, data, root) {
  var i730 = root || request.c( 'AutoCameraFit' )
  var i731 = data
  request.r(i731[0], i731[1], 0, i730, 'tallScreenObject')
  i730.tallScreenRatioThreshold = i731[2]
  i730.tallScreenYOffset = i731[3]
  request.r(i731[4], i731[5], 0, i730, 'canvasBtn')
  request.r(i731[6], i731[7], 0, i730, 'targetArea')
  i730.paddingLandscape = i731[8]
  i730.paddingPortrait = i731[9]
  i730.extraPaddingSmallScreen = i731[10]
  i730.smallScreenThreshold = i731[11]
  i730.autoUpdateOnResize = !!i731[12]
  i730.adjustInEditMode = !!i731[13]
  return i730
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i732 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i733 = data
  i732.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i733[0], i732.main)
  i732.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i733[1], i732.colorBySpeed)
  i732.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i733[2], i732.colorOverLifetime)
  i732.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i733[3], i732.emission)
  i732.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i733[4], i732.rotationBySpeed)
  i732.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i733[5], i732.rotationOverLifetime)
  i732.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i733[6], i732.shape)
  i732.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i733[7], i732.sizeBySpeed)
  i732.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i733[8], i732.sizeOverLifetime)
  i732.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i733[9], i732.textureSheetAnimation)
  i732.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i733[10], i732.velocityOverLifetime)
  i732.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i733[11], i732.noise)
  i732.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i733[12], i732.inheritVelocity)
  i732.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i733[13], i732.forceOverLifetime)
  i732.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i733[14], i732.limitVelocityOverLifetime)
  i732.useAutoRandomSeed = !!i733[15]
  i732.randomSeed = i733[16]
  return i732
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i734 = root || new pc.ParticleSystemMain()
  var i735 = data
  i734.duration = i735[0]
  i734.loop = !!i735[1]
  i734.prewarm = !!i735[2]
  i734.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i735[3], i734.startDelay)
  i734.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i735[4], i734.startLifetime)
  i734.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i735[5], i734.startSpeed)
  i734.startSize3D = !!i735[6]
  i734.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i735[7], i734.startSizeX)
  i734.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i735[8], i734.startSizeY)
  i734.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i735[9], i734.startSizeZ)
  i734.startRotation3D = !!i735[10]
  i734.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i735[11], i734.startRotationX)
  i734.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i735[12], i734.startRotationY)
  i734.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i735[13], i734.startRotationZ)
  i734.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i735[14], i734.startColor)
  i734.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i735[15], i734.gravityModifier)
  i734.simulationSpace = i735[16]
  request.r(i735[17], i735[18], 0, i734, 'customSimulationSpace')
  i734.simulationSpeed = i735[19]
  i734.useUnscaledTime = !!i735[20]
  i734.scalingMode = i735[21]
  i734.playOnAwake = !!i735[22]
  i734.maxParticles = i735[23]
  i734.emitterVelocityMode = i735[24]
  i734.stopAction = i735[25]
  return i734
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i736 = root || new pc.MinMaxCurve()
  var i737 = data
  i736.mode = i737[0]
  i736.curveMin = new pc.AnimationCurve( { keys_flow: i737[1] } )
  i736.curveMax = new pc.AnimationCurve( { keys_flow: i737[2] } )
  i736.curveMultiplier = i737[3]
  i736.constantMin = i737[4]
  i736.constantMax = i737[5]
  return i736
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i738 = root || new pc.MinMaxGradient()
  var i739 = data
  i738.mode = i739[0]
  i738.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i739[1], i738.gradientMin)
  i738.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i739[2], i738.gradientMax)
  i738.colorMin = new pc.Color(i739[3], i739[4], i739[5], i739[6])
  i738.colorMax = new pc.Color(i739[7], i739[8], i739[9], i739[10])
  return i738
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i740 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i741 = data
  i740.mode = i741[0]
  var i743 = i741[1]
  var i742 = []
  for(var i = 0; i < i743.length; i += 1) {
    i742.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i743[i + 0]) );
  }
  i740.colorKeys = i742
  var i745 = i741[2]
  var i744 = []
  for(var i = 0; i < i745.length; i += 1) {
    i744.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i745[i + 0]) );
  }
  i740.alphaKeys = i744
  return i740
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i746 = root || new pc.ParticleSystemColorBySpeed()
  var i747 = data
  i746.enabled = !!i747[0]
  i746.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i747[1], i746.color)
  i746.range = new pc.Vec2( i747[2], i747[3] )
  return i746
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i750 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i751 = data
  i750.color = new pc.Color(i751[0], i751[1], i751[2], i751[3])
  i750.time = i751[4]
  return i750
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i754 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i755 = data
  i754.alpha = i755[0]
  i754.time = i755[1]
  return i754
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i756 = root || new pc.ParticleSystemColorOverLifetime()
  var i757 = data
  i756.enabled = !!i757[0]
  i756.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i757[1], i756.color)
  return i756
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i758 = root || new pc.ParticleSystemEmitter()
  var i759 = data
  i758.enabled = !!i759[0]
  i758.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i759[1], i758.rateOverTime)
  i758.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i759[2], i758.rateOverDistance)
  var i761 = i759[3]
  var i760 = []
  for(var i = 0; i < i761.length; i += 1) {
    i760.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i761[i + 0]) );
  }
  i758.bursts = i760
  return i758
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i764 = root || new pc.ParticleSystemBurst()
  var i765 = data
  i764.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i765[0], i764.count)
  i764.cycleCount = i765[1]
  i764.minCount = i765[2]
  i764.maxCount = i765[3]
  i764.repeatInterval = i765[4]
  i764.time = i765[5]
  return i764
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i766 = root || new pc.ParticleSystemRotationBySpeed()
  var i767 = data
  i766.enabled = !!i767[0]
  i766.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i767[1], i766.x)
  i766.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i767[2], i766.y)
  i766.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i767[3], i766.z)
  i766.separateAxes = !!i767[4]
  i766.range = new pc.Vec2( i767[5], i767[6] )
  return i766
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i768 = root || new pc.ParticleSystemRotationOverLifetime()
  var i769 = data
  i768.enabled = !!i769[0]
  i768.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i769[1], i768.x)
  i768.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i769[2], i768.y)
  i768.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i769[3], i768.z)
  i768.separateAxes = !!i769[4]
  return i768
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i770 = root || new pc.ParticleSystemShape()
  var i771 = data
  i770.enabled = !!i771[0]
  i770.shapeType = i771[1]
  i770.randomDirectionAmount = i771[2]
  i770.sphericalDirectionAmount = i771[3]
  i770.randomPositionAmount = i771[4]
  i770.alignToDirection = !!i771[5]
  i770.radius = i771[6]
  i770.radiusMode = i771[7]
  i770.radiusSpread = i771[8]
  i770.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i771[9], i770.radiusSpeed)
  i770.radiusThickness = i771[10]
  i770.angle = i771[11]
  i770.length = i771[12]
  i770.boxThickness = new pc.Vec3( i771[13], i771[14], i771[15] )
  i770.meshShapeType = i771[16]
  request.r(i771[17], i771[18], 0, i770, 'mesh')
  request.r(i771[19], i771[20], 0, i770, 'meshRenderer')
  request.r(i771[21], i771[22], 0, i770, 'skinnedMeshRenderer')
  i770.useMeshMaterialIndex = !!i771[23]
  i770.meshMaterialIndex = i771[24]
  i770.useMeshColors = !!i771[25]
  i770.normalOffset = i771[26]
  i770.arc = i771[27]
  i770.arcMode = i771[28]
  i770.arcSpread = i771[29]
  i770.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i771[30], i770.arcSpeed)
  i770.donutRadius = i771[31]
  i770.position = new pc.Vec3( i771[32], i771[33], i771[34] )
  i770.rotation = new pc.Vec3( i771[35], i771[36], i771[37] )
  i770.scale = new pc.Vec3( i771[38], i771[39], i771[40] )
  return i770
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i772 = root || new pc.ParticleSystemSizeBySpeed()
  var i773 = data
  i772.enabled = !!i773[0]
  i772.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i773[1], i772.x)
  i772.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i773[2], i772.y)
  i772.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i773[3], i772.z)
  i772.separateAxes = !!i773[4]
  i772.range = new pc.Vec2( i773[5], i773[6] )
  return i772
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i774 = root || new pc.ParticleSystemSizeOverLifetime()
  var i775 = data
  i774.enabled = !!i775[0]
  i774.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i775[1], i774.x)
  i774.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i775[2], i774.y)
  i774.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i775[3], i774.z)
  i774.separateAxes = !!i775[4]
  return i774
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i776 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i777 = data
  i776.enabled = !!i777[0]
  i776.mode = i777[1]
  i776.animation = i777[2]
  i776.numTilesX = i777[3]
  i776.numTilesY = i777[4]
  i776.useRandomRow = !!i777[5]
  i776.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i777[6], i776.frameOverTime)
  i776.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i777[7], i776.startFrame)
  i776.cycleCount = i777[8]
  i776.rowIndex = i777[9]
  i776.flipU = i777[10]
  i776.flipV = i777[11]
  i776.spriteCount = i777[12]
  var i779 = i777[13]
  var i778 = []
  for(var i = 0; i < i779.length; i += 2) {
  request.r(i779[i + 0], i779[i + 1], 2, i778, '')
  }
  i776.sprites = i778
  return i776
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i782 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i783 = data
  i782.enabled = !!i783[0]
  i782.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i783[1], i782.x)
  i782.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i783[2], i782.y)
  i782.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i783[3], i782.z)
  i782.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i783[4], i782.radial)
  i782.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i783[5], i782.speedModifier)
  i782.space = i783[6]
  i782.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i783[7], i782.orbitalX)
  i782.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i783[8], i782.orbitalY)
  i782.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i783[9], i782.orbitalZ)
  i782.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i783[10], i782.orbitalOffsetX)
  i782.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i783[11], i782.orbitalOffsetY)
  i782.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i783[12], i782.orbitalOffsetZ)
  return i782
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i784 = root || new pc.ParticleSystemNoise()
  var i785 = data
  i784.enabled = !!i785[0]
  i784.separateAxes = !!i785[1]
  i784.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i785[2], i784.strengthX)
  i784.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i785[3], i784.strengthY)
  i784.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i785[4], i784.strengthZ)
  i784.frequency = i785[5]
  i784.damping = !!i785[6]
  i784.octaveCount = i785[7]
  i784.octaveMultiplier = i785[8]
  i784.octaveScale = i785[9]
  i784.quality = i785[10]
  i784.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i785[11], i784.scrollSpeed)
  i784.scrollSpeedMultiplier = i785[12]
  i784.remapEnabled = !!i785[13]
  i784.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i785[14], i784.remapX)
  i784.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i785[15], i784.remapY)
  i784.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i785[16], i784.remapZ)
  i784.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i785[17], i784.positionAmount)
  i784.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i785[18], i784.rotationAmount)
  i784.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i785[19], i784.sizeAmount)
  return i784
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i786 = root || new pc.ParticleSystemInheritVelocity()
  var i787 = data
  i786.enabled = !!i787[0]
  i786.mode = i787[1]
  i786.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i787[2], i786.curve)
  return i786
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i788 = root || new pc.ParticleSystemForceOverLifetime()
  var i789 = data
  i788.enabled = !!i789[0]
  i788.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i789[1], i788.x)
  i788.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i789[2], i788.y)
  i788.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i789[3], i788.z)
  i788.space = i789[4]
  i788.randomized = !!i789[5]
  return i788
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i790 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i791 = data
  i790.enabled = !!i791[0]
  i790.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i791[1], i790.limit)
  i790.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i791[2], i790.limitX)
  i790.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i791[3], i790.limitY)
  i790.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i791[4], i790.limitZ)
  i790.dampen = i791[5]
  i790.separateAxes = !!i791[6]
  i790.space = i791[7]
  i790.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i791[8], i790.drag)
  i790.multiplyDragByParticleSize = !!i791[9]
  i790.multiplyDragByParticleVelocity = !!i791[10]
  return i790
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i792 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i793 = data
  request.r(i793[0], i793[1], 0, i792, 'mesh')
  i792.meshCount = i793[2]
  i792.activeVertexStreamsCount = i793[3]
  i792.alignment = i793[4]
  i792.renderMode = i793[5]
  i792.sortMode = i793[6]
  i792.lengthScale = i793[7]
  i792.velocityScale = i793[8]
  i792.cameraVelocityScale = i793[9]
  i792.normalDirection = i793[10]
  i792.sortingFudge = i793[11]
  i792.minParticleSize = i793[12]
  i792.maxParticleSize = i793[13]
  i792.pivot = new pc.Vec3( i793[14], i793[15], i793[16] )
  request.r(i793[17], i793[18], 0, i792, 'trailMaterial')
  i792.applyActiveColorSpace = !!i793[19]
  i792.enabled = !!i793[20]
  request.r(i793[21], i793[22], 0, i792, 'sharedMaterial')
  var i795 = i793[23]
  var i794 = []
  for(var i = 0; i < i795.length; i += 2) {
  request.r(i795[i + 0], i795[i + 1], 2, i794, '')
  }
  i792.sharedMaterials = i794
  i792.receiveShadows = !!i793[24]
  i792.shadowCastingMode = i793[25]
  i792.sortingLayerID = i793[26]
  i792.sortingOrder = i793[27]
  i792.lightmapIndex = i793[28]
  i792.lightmapSceneIndex = i793[29]
  i792.lightmapScaleOffset = new pc.Vec4( i793[30], i793[31], i793[32], i793[33] )
  i792.lightProbeUsage = i793[34]
  i792.reflectionProbeUsage = i793[35]
  return i792
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i798 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i799 = data
  request.r(i799[0], i799[1], 0, i798, 'clip')
  request.r(i799[2], i799[3], 0, i798, 'outputAudioMixerGroup')
  i798.playOnAwake = !!i799[4]
  i798.loop = !!i799[5]
  i798.time = i799[6]
  i798.volume = i799[7]
  i798.pitch = i799[8]
  i798.enabled = !!i799[9]
  return i798
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i800 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i801 = data
  i800.name = i801[0]
  i800.tagId = i801[1]
  i800.enabled = !!i801[2]
  i800.isStatic = !!i801[3]
  i800.layer = i801[4]
  return i800
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i802 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i803 = data
  i802.color = new pc.Color(i803[0], i803[1], i803[2], i803[3])
  request.r(i803[4], i803[5], 0, i802, 'sprite')
  i802.flipX = !!i803[6]
  i802.flipY = !!i803[7]
  i802.drawMode = i803[8]
  i802.size = new pc.Vec2( i803[9], i803[10] )
  i802.tileMode = i803[11]
  i802.adaptiveModeThreshold = i803[12]
  i802.maskInteraction = i803[13]
  i802.spriteSortPoint = i803[14]
  i802.enabled = !!i803[15]
  request.r(i803[16], i803[17], 0, i802, 'sharedMaterial')
  var i805 = i803[18]
  var i804 = []
  for(var i = 0; i < i805.length; i += 2) {
  request.r(i805[i + 0], i805[i + 1], 2, i804, '')
  }
  i802.sharedMaterials = i804
  i802.receiveShadows = !!i803[19]
  i802.shadowCastingMode = i803[20]
  i802.sortingLayerID = i803[21]
  i802.sortingOrder = i803[22]
  i802.lightmapIndex = i803[23]
  i802.lightmapSceneIndex = i803[24]
  i802.lightmapScaleOffset = new pc.Vec4( i803[25], i803[26], i803[27], i803[28] )
  i802.lightProbeUsage = i803[29]
  i802.reflectionProbeUsage = i803[30]
  return i802
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i806 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i807 = data
  request.r(i807[0], i807[1], 0, i806, 'animatorController')
  request.r(i807[2], i807[3], 0, i806, 'avatar')
  i806.updateMode = i807[4]
  i806.hasTransformHierarchy = !!i807[5]
  i806.applyRootMotion = !!i807[6]
  var i809 = i807[7]
  var i808 = []
  for(var i = 0; i < i809.length; i += 2) {
  request.r(i809[i + 0], i809[i + 1], 2, i808, '')
  }
  i806.humanBones = i808
  i806.enabled = !!i807[8]
  return i806
}

Deserializers["MoveBetweenPoints"] = function (request, data, root) {
  var i812 = root || request.c( 'MoveBetweenPoints' )
  var i813 = data
  request.r(i813[0], i813[1], 0, i812, 'pointA')
  request.r(i813[2], i813[3], 0, i812, 'pointB')
  i812.duration = i813[4]
  return i812
}

Deserializers["ScreenHeightPositionAnchor"] = function (request, data, root) {
  var i814 = root || request.c( 'ScreenHeightPositionAnchor' )
  var i815 = data
  request.r(i815[0], i815[1], 0, i814, 'anchorPoint')
  request.r(i815[2], i815[3], 0, i814, 'targetCamera')
  i814.viewportYRatio = i815[4]
  i814.alignOnStart = !!i815[5]
  i814.alignOnEnable = !!i815[6]
  i814.realignOnScreenSizeChanged = !!i815[7]
  i814.drawGizmos = !!i815[8]
  i814.targetLineColor = new pc.Color(i815[9], i815[10], i815[11], i815[12])
  i814.anchorColor = new pc.Color(i815[13], i815[14], i815[15], i815[16])
  return i814
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i816 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i817 = data
  i816.center = new pc.Vec3( i817[0], i817[1], i817[2] )
  i816.size = new pc.Vec3( i817[3], i817[4], i817[5] )
  i816.enabled = !!i817[6]
  i816.isTrigger = !!i817[7]
  request.r(i817[8], i817[9], 0, i816, 'material')
  return i816
}

Deserializers["ClickToStore"] = function (request, data, root) {
  var i818 = root || request.c( 'ClickToStore' )
  var i819 = data
  return i818
}

Deserializers["FavoritePlayerEndcard"] = function (request, data, root) {
  var i820 = root || request.c( 'FavoritePlayerEndcard' )
  var i821 = data
  request.r(i821[0], i821[1], 0, i820, 'fullBodyRenderer')
  request.r(i821[2], i821[3], 0, i820, 'nameText')
  request.r(i821[4], i821[5], 0, i820, 'endcardPanel')
  return i820
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i822 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i823 = data
  i822.pivot = new pc.Vec2( i823[0], i823[1] )
  i822.anchorMin = new pc.Vec2( i823[2], i823[3] )
  i822.anchorMax = new pc.Vec2( i823[4], i823[5] )
  i822.sizeDelta = new pc.Vec2( i823[6], i823[7] )
  i822.anchoredPosition3D = new pc.Vec3( i823[8], i823[9], i823[10] )
  i822.rotation = new pc.Quat(i823[11], i823[12], i823[13], i823[14])
  i822.scale = new pc.Vec3( i823[15], i823[16], i823[17] )
  return i822
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i824 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i825 = data
  request.r(i825[0], i825[1], 0, i824, 'additionalVertexStreams')
  i824.enabled = !!i825[2]
  request.r(i825[3], i825[4], 0, i824, 'sharedMaterial')
  var i827 = i825[5]
  var i826 = []
  for(var i = 0; i < i827.length; i += 2) {
  request.r(i827[i + 0], i827[i + 1], 2, i826, '')
  }
  i824.sharedMaterials = i826
  i824.receiveShadows = !!i825[6]
  i824.shadowCastingMode = i825[7]
  i824.sortingLayerID = i825[8]
  i824.sortingOrder = i825[9]
  i824.lightmapIndex = i825[10]
  i824.lightmapSceneIndex = i825[11]
  i824.lightmapScaleOffset = new pc.Vec4( i825[12], i825[13], i825[14], i825[15] )
  i824.lightProbeUsage = i825[16]
  i824.reflectionProbeUsage = i825[17]
  return i824
}

Deserializers["TMPro.TextMeshPro"] = function (request, data, root) {
  var i828 = root || request.c( 'TMPro.TextMeshPro' )
  var i829 = data
  i828._SortingLayer = i829[0]
  i828._SortingLayerID = i829[1]
  i828._SortingOrder = i829[2]
  i828.m_hasFontAssetChanged = !!i829[3]
  request.r(i829[4], i829[5], 0, i828, 'm_renderer')
  i828.m_maskType = i829[6]
  i828.m_text = i829[7]
  i828.m_isRightToLeft = !!i829[8]
  request.r(i829[9], i829[10], 0, i828, 'm_fontAsset')
  request.r(i829[11], i829[12], 0, i828, 'm_sharedMaterial')
  var i831 = i829[13]
  var i830 = []
  for(var i = 0; i < i831.length; i += 2) {
  request.r(i831[i + 0], i831[i + 1], 2, i830, '')
  }
  i828.m_fontSharedMaterials = i830
  request.r(i829[14], i829[15], 0, i828, 'm_fontMaterial')
  var i833 = i829[16]
  var i832 = []
  for(var i = 0; i < i833.length; i += 2) {
  request.r(i833[i + 0], i833[i + 1], 2, i832, '')
  }
  i828.m_fontMaterials = i832
  i828.m_fontColor32 = UnityEngine.Color32.ConstructColor(i829[17], i829[18], i829[19], i829[20])
  i828.m_fontColor = new pc.Color(i829[21], i829[22], i829[23], i829[24])
  i828.m_enableVertexGradient = !!i829[25]
  i828.m_colorMode = i829[26]
  i828.m_fontColorGradient = request.d('TMPro.VertexGradient', i829[27], i828.m_fontColorGradient)
  request.r(i829[28], i829[29], 0, i828, 'm_fontColorGradientPreset')
  request.r(i829[30], i829[31], 0, i828, 'm_spriteAsset')
  i828.m_tintAllSprites = !!i829[32]
  request.r(i829[33], i829[34], 0, i828, 'm_StyleSheet')
  i828.m_TextStyleHashCode = i829[35]
  i828.m_overrideHtmlColors = !!i829[36]
  i828.m_faceColor = UnityEngine.Color32.ConstructColor(i829[37], i829[38], i829[39], i829[40])
  i828.m_fontSize = i829[41]
  i828.m_fontSizeBase = i829[42]
  i828.m_fontWeight = i829[43]
  i828.m_enableAutoSizing = !!i829[44]
  i828.m_fontSizeMin = i829[45]
  i828.m_fontSizeMax = i829[46]
  i828.m_fontStyle = i829[47]
  i828.m_HorizontalAlignment = i829[48]
  i828.m_VerticalAlignment = i829[49]
  i828.m_textAlignment = i829[50]
  i828.m_characterSpacing = i829[51]
  i828.m_wordSpacing = i829[52]
  i828.m_lineSpacing = i829[53]
  i828.m_lineSpacingMax = i829[54]
  i828.m_paragraphSpacing = i829[55]
  i828.m_charWidthMaxAdj = i829[56]
  i828.m_TextWrappingMode = i829[57]
  i828.m_wordWrappingRatios = i829[58]
  i828.m_overflowMode = i829[59]
  request.r(i829[60], i829[61], 0, i828, 'm_linkedTextComponent')
  request.r(i829[62], i829[63], 0, i828, 'parentLinkedComponent')
  i828.m_enableKerning = !!i829[64]
  var i835 = i829[65]
  var i834 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i835.length; i += 1) {
    i834.add(i835[i + 0]);
  }
  i828.m_ActiveFontFeatures = i834
  i828.m_enableExtraPadding = !!i829[66]
  i828.checkPaddingRequired = !!i829[67]
  i828.m_isRichText = !!i829[68]
  i828.m_parseCtrlCharacters = !!i829[69]
  i828.m_isOrthographic = !!i829[70]
  i828.m_isCullingEnabled = !!i829[71]
  i828.m_horizontalMapping = i829[72]
  i828.m_verticalMapping = i829[73]
  i828.m_uvLineOffset = i829[74]
  i828.m_geometrySortingOrder = i829[75]
  i828.m_IsTextObjectScaleStatic = !!i829[76]
  i828.m_VertexBufferAutoSizeReduction = !!i829[77]
  i828.m_useMaxVisibleDescender = !!i829[78]
  i828.m_pageToDisplay = i829[79]
  i828.m_margin = new pc.Vec4( i829[80], i829[81], i829[82], i829[83] )
  i828.m_isUsingLegacyAnimationComponent = !!i829[84]
  i828.m_isVolumetricText = !!i829[85]
  request.r(i829[86], i829[87], 0, i828, 'm_Material')
  i828.m_EmojiFallbackSupport = !!i829[88]
  i828.m_Maskable = !!i829[89]
  i828.m_Color = new pc.Color(i829[90], i829[91], i829[92], i829[93])
  i828.m_RaycastTarget = !!i829[94]
  i828.m_RaycastPadding = new pc.Vec4( i829[95], i829[96], i829[97], i829[98] )
  return i828
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i836 = root || request.c( 'TMPro.VertexGradient' )
  var i837 = data
  i836.topLeft = new pc.Color(i837[0], i837[1], i837[2], i837[3])
  i836.topRight = new pc.Color(i837[4], i837[5], i837[6], i837[7])
  i836.bottomLeft = new pc.Color(i837[8], i837[9], i837[10], i837[11])
  i836.bottomRight = new pc.Color(i837[12], i837[13], i837[14], i837[15])
  return i836
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i840 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i841 = data
  request.r(i841[0], i841[1], 0, i840, 'sharedMesh')
  return i840
}

Deserializers["PlayerCardUIManager"] = function (request, data, root) {
  var i842 = root || request.c( 'PlayerCardUIManager' )
  var i843 = data
  request.r(i843[0], i843[1], 0, i842, 'cardPanel')
  var i845 = i843[2]
  var i844 = []
  for(var i = 0; i < i845.length; i += 2) {
  request.r(i845[i + 0], i845[i + 1], 2, i844, '')
  }
  i842.extraObjectsToActivate = i844
  i842.waitTime = i843[3]
  var i847 = i843[4]
  var i846 = []
  for(var i = 0; i < i847.length; i += 2) {
  request.r(i847[i + 0], i847[i + 1], 2, i846, '')
  }
  i842.objectsToTurnOnAfterWait = i846
  var i849 = i843[5]
  var i848 = []
  for(var i = 0; i < i849.length; i += 2) {
  request.r(i849[i + 0], i849[i + 1], 2, i848, '')
  }
  i842.objectsToTurnOffAfterWait = i848
  request.r(i843[6], i843[7], 0, i842, 'nationalityText')
  request.r(i843[8], i843[9], 0, i842, 'playerImage')
  request.r(i843[10], i843[11], 0, i842, 'flagImage')
  return i842
}

Deserializers["Ply_SoundManager"] = function (request, data, root) {
  var i852 = root || request.c( 'Ply_SoundManager' )
  var i853 = data
  i852.fxAudio = request.d('FxAudio', i853[0], i852.fxAudio)
  request.r(i853[1], i853[2], 0, i852, 'bgm1')
  return i852
}

Deserializers["FxAudio"] = function (request, data, root) {
  var i854 = root || request.c( 'FxAudio' )
  var i855 = data
  i854.ClickBox = request.d('SoundData', i855[0], i854.ClickBox)
  i854.Happy = request.d('SoundData', i855[1], i854.Happy)
  i854.Wrong = request.d('SoundData', i855[2], i854.Wrong)
  i854.Spray = request.d('SoundData', i855[3], i854.Spray)
  i854.Brush = request.d('SoundData', i855[4], i854.Brush)
  return i854
}

Deserializers["SoundData"] = function (request, data, root) {
  var i856 = root || request.c( 'SoundData' )
  var i857 = data
  request.r(i857[0], i857[1], 0, i856, 'clip')
  i856.repeatCount = i857[2]
  return i856
}

Deserializers["FavoritePlayerManager"] = function (request, data, root) {
  var i858 = root || request.c( 'FavoritePlayerManager' )
  var i859 = data
  i858.slotLayerMask = UnityEngine.LayerMask.FromIntegerValue( i859[0] )
  request.r(i859[1], i859[2], 0, i858, 'slotA')
  request.r(i859[3], i859[4], 0, i858, 'slotB')
  request.r(i859[5], i859[6], 0, i858, 'audioSource')
  request.r(i859[7], i859[8], 0, i858, 'orAudio')
  request.r(i859[9], i859[10], 0, i858, 'clickAudio')
  var i861 = i859[11]
  var i860 = new (System.Collections.Generic.List$1(Bridge.ns('FavoritePlayerCard')))
  for(var i = 0; i < i861.length; i += 2) {
  request.r(i861[i + 0], i861[i + 1], 1, i860, '')
  }
  i858.playerList = i860
  request.r(i859[12], i859[13], 0, i858, 'endcardUI')
  request.r(i859[14], i859[15], 0, i858, 'discardTarget')
  i858.moveDuration = i859[16]
  i858.arcHeight = i859[17]
  i858.scaleUpSize = i859[18]
  i858.scaleUpDuration = i859[19]
  i858.scaleDownDuration = i859[20]
  i858.appearStartScale = i859[21]
  i858.appearMaxScale = i859[22]
  i858.appearUpDuration = i859[23]
  i858.appearDownDuration = i859[24]
  i858.clickScaleSize = i859[25]
  i858.clickDownDuration = i859[26]
  i858.clickUpDuration = i859[27]
  var i863 = i859[28]
  var i862 = []
  for(var i = 0; i < i863.length; i += 2) {
  request.r(i863[i + 0], i863[i + 1], 2, i862, '')
  }
  i858.extraObjectsToActivate = i862
  var i865 = i859[29]
  var i864 = []
  for(var i = 0; i < i865.length; i += 2) {
  request.r(i865[i + 0], i865[i + 1], 2, i864, '')
  }
  i858.extraObjectsToDeactivate = i864
  i858.waitTime = i859[30]
  var i867 = i859[31]
  var i866 = []
  for(var i = 0; i < i867.length; i += 2) {
  request.r(i867[i + 0], i867[i + 1], 2, i866, '')
  }
  i858.objectsToTurnOnAfterWait = i866
  var i869 = i859[32]
  var i868 = []
  for(var i = 0; i < i869.length; i += 2) {
  request.r(i869[i + 0], i869[i + 1], 2, i868, '')
  }
  i858.objectsToTurnOffAfterWait = i868
  return i858
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i872 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i873 = data
  i872.planeDistance = i873[0]
  i872.referencePixelsPerUnit = i873[1]
  i872.isFallbackOverlay = !!i873[2]
  i872.renderMode = i873[3]
  i872.renderOrder = i873[4]
  i872.sortingLayerName = i873[5]
  i872.sortingOrder = i873[6]
  i872.scaleFactor = i873[7]
  request.r(i873[8], i873[9], 0, i872, 'worldCamera')
  i872.overrideSorting = !!i873[10]
  i872.pixelPerfect = !!i873[11]
  i872.targetDisplay = i873[12]
  i872.overridePixelPerfect = !!i873[13]
  i872.enabled = !!i873[14]
  return i872
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i874 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i875 = data
  i874.m_UiScaleMode = i875[0]
  i874.m_ReferencePixelsPerUnit = i875[1]
  i874.m_ScaleFactor = i875[2]
  i874.m_ReferenceResolution = new pc.Vec2( i875[3], i875[4] )
  i874.m_ScreenMatchMode = i875[5]
  i874.m_MatchWidthOrHeight = i875[6]
  i874.m_PhysicalUnit = i875[7]
  i874.m_FallbackScreenDPI = i875[8]
  i874.m_DefaultSpriteDPI = i875[9]
  i874.m_DynamicPixelsPerUnit = i875[10]
  i874.m_PresetInfoIsWorld = !!i875[11]
  return i874
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i876 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i877 = data
  i876.m_IgnoreReversedGraphics = !!i877[0]
  i876.m_BlockingObjects = i877[1]
  i876.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i877[2] )
  return i876
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i878 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i879 = data
  i878.cullTransparentMesh = !!i879[0]
  return i878
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i880 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i881 = data
  i880.m_hasFontAssetChanged = !!i881[0]
  request.r(i881[1], i881[2], 0, i880, 'm_baseMaterial')
  i880.m_maskOffset = new pc.Vec4( i881[3], i881[4], i881[5], i881[6] )
  i880.m_text = i881[7]
  i880.m_isRightToLeft = !!i881[8]
  request.r(i881[9], i881[10], 0, i880, 'm_fontAsset')
  request.r(i881[11], i881[12], 0, i880, 'm_sharedMaterial')
  var i883 = i881[13]
  var i882 = []
  for(var i = 0; i < i883.length; i += 2) {
  request.r(i883[i + 0], i883[i + 1], 2, i882, '')
  }
  i880.m_fontSharedMaterials = i882
  request.r(i881[14], i881[15], 0, i880, 'm_fontMaterial')
  var i885 = i881[16]
  var i884 = []
  for(var i = 0; i < i885.length; i += 2) {
  request.r(i885[i + 0], i885[i + 1], 2, i884, '')
  }
  i880.m_fontMaterials = i884
  i880.m_fontColor32 = UnityEngine.Color32.ConstructColor(i881[17], i881[18], i881[19], i881[20])
  i880.m_fontColor = new pc.Color(i881[21], i881[22], i881[23], i881[24])
  i880.m_enableVertexGradient = !!i881[25]
  i880.m_colorMode = i881[26]
  i880.m_fontColorGradient = request.d('TMPro.VertexGradient', i881[27], i880.m_fontColorGradient)
  request.r(i881[28], i881[29], 0, i880, 'm_fontColorGradientPreset')
  request.r(i881[30], i881[31], 0, i880, 'm_spriteAsset')
  i880.m_tintAllSprites = !!i881[32]
  request.r(i881[33], i881[34], 0, i880, 'm_StyleSheet')
  i880.m_TextStyleHashCode = i881[35]
  i880.m_overrideHtmlColors = !!i881[36]
  i880.m_faceColor = UnityEngine.Color32.ConstructColor(i881[37], i881[38], i881[39], i881[40])
  i880.m_fontSize = i881[41]
  i880.m_fontSizeBase = i881[42]
  i880.m_fontWeight = i881[43]
  i880.m_enableAutoSizing = !!i881[44]
  i880.m_fontSizeMin = i881[45]
  i880.m_fontSizeMax = i881[46]
  i880.m_fontStyle = i881[47]
  i880.m_HorizontalAlignment = i881[48]
  i880.m_VerticalAlignment = i881[49]
  i880.m_textAlignment = i881[50]
  i880.m_characterSpacing = i881[51]
  i880.m_wordSpacing = i881[52]
  i880.m_lineSpacing = i881[53]
  i880.m_lineSpacingMax = i881[54]
  i880.m_paragraphSpacing = i881[55]
  i880.m_charWidthMaxAdj = i881[56]
  i880.m_TextWrappingMode = i881[57]
  i880.m_wordWrappingRatios = i881[58]
  i880.m_overflowMode = i881[59]
  request.r(i881[60], i881[61], 0, i880, 'm_linkedTextComponent')
  request.r(i881[62], i881[63], 0, i880, 'parentLinkedComponent')
  i880.m_enableKerning = !!i881[64]
  var i887 = i881[65]
  var i886 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i887.length; i += 1) {
    i886.add(i887[i + 0]);
  }
  i880.m_ActiveFontFeatures = i886
  i880.m_enableExtraPadding = !!i881[66]
  i880.checkPaddingRequired = !!i881[67]
  i880.m_isRichText = !!i881[68]
  i880.m_parseCtrlCharacters = !!i881[69]
  i880.m_isOrthographic = !!i881[70]
  i880.m_isCullingEnabled = !!i881[71]
  i880.m_horizontalMapping = i881[72]
  i880.m_verticalMapping = i881[73]
  i880.m_uvLineOffset = i881[74]
  i880.m_geometrySortingOrder = i881[75]
  i880.m_IsTextObjectScaleStatic = !!i881[76]
  i880.m_VertexBufferAutoSizeReduction = !!i881[77]
  i880.m_useMaxVisibleDescender = !!i881[78]
  i880.m_pageToDisplay = i881[79]
  i880.m_margin = new pc.Vec4( i881[80], i881[81], i881[82], i881[83] )
  i880.m_isUsingLegacyAnimationComponent = !!i881[84]
  i880.m_isVolumetricText = !!i881[85]
  request.r(i881[86], i881[87], 0, i880, 'm_Material')
  i880.m_EmojiFallbackSupport = !!i881[88]
  i880.m_Maskable = !!i881[89]
  i880.m_Color = new pc.Color(i881[90], i881[91], i881[92], i881[93])
  i880.m_RaycastTarget = !!i881[94]
  i880.m_RaycastPadding = new pc.Vec4( i881[95], i881[96], i881[97], i881[98] )
  return i880
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i888 = root || request.c( 'UnityEngine.UI.Image' )
  var i889 = data
  request.r(i889[0], i889[1], 0, i888, 'm_Sprite')
  i888.m_Type = i889[2]
  i888.m_PreserveAspect = !!i889[3]
  i888.m_FillCenter = !!i889[4]
  i888.m_FillMethod = i889[5]
  i888.m_FillAmount = i889[6]
  i888.m_FillClockwise = !!i889[7]
  i888.m_FillOrigin = i889[8]
  i888.m_UseSpriteMesh = !!i889[9]
  i888.m_PixelsPerUnitMultiplier = i889[10]
  request.r(i889[11], i889[12], 0, i888, 'm_Material')
  i888.m_Maskable = !!i889[13]
  i888.m_Color = new pc.Color(i889[14], i889[15], i889[16], i889[17])
  i888.m_RaycastTarget = !!i889[18]
  i888.m_RaycastPadding = new pc.Vec4( i889[19], i889[20], i889[21], i889[22] )
  return i888
}

Deserializers["PlayerSlot"] = function (request, data, root) {
  var i890 = root || request.c( 'PlayerSlot' )
  var i891 = data
  request.r(i891[0], i891[1], 0, i890, 'spriteRenderer')
  request.r(i891[2], i891[3], 0, i890, 'lightEffect')
  i890.idleScale = i891[4]
  i890.idleDuration = i891[5]
  i890.originalPosition = new pc.Vec3( i891[6], i891[7], i891[8] )
  i890.originalScale = new pc.Vec3( i891[9], i891[10], i891[11] )
  request.r(i891[12], i891[13], 0, i890, 'currentData')
  return i890
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i892 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i893 = data
  request.r(i893[0], i893[1], 0, i892, 'm_FirstSelected')
  i892.m_sendNavigationEvents = !!i893[2]
  i892.m_DragThreshold = i893[3]
  return i892
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i894 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i895 = data
  i894.m_HorizontalAxis = i895[0]
  i894.m_VerticalAxis = i895[1]
  i894.m_SubmitButton = i895[2]
  i894.m_CancelButton = i895[3]
  i894.m_InputActionsPerSecond = i895[4]
  i894.m_RepeatDelay = i895[5]
  i894.m_ForceModuleActive = !!i895[6]
  i894.m_SendPointerHoverToParent = !!i895[7]
  return i894
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i896 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i897 = data
  i896.ambientIntensity = i897[0]
  i896.reflectionIntensity = i897[1]
  i896.ambientMode = i897[2]
  i896.ambientLight = new pc.Color(i897[3], i897[4], i897[5], i897[6])
  i896.ambientSkyColor = new pc.Color(i897[7], i897[8], i897[9], i897[10])
  i896.ambientGroundColor = new pc.Color(i897[11], i897[12], i897[13], i897[14])
  i896.ambientEquatorColor = new pc.Color(i897[15], i897[16], i897[17], i897[18])
  i896.fogColor = new pc.Color(i897[19], i897[20], i897[21], i897[22])
  i896.fogEndDistance = i897[23]
  i896.fogStartDistance = i897[24]
  i896.fogDensity = i897[25]
  i896.fog = !!i897[26]
  request.r(i897[27], i897[28], 0, i896, 'skybox')
  i896.fogMode = i897[29]
  var i899 = i897[30]
  var i898 = []
  for(var i = 0; i < i899.length; i += 1) {
    i898.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i899[i + 0]) );
  }
  i896.lightmaps = i898
  i896.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i897[31], i896.lightProbes)
  i896.lightmapsMode = i897[32]
  i896.mixedBakeMode = i897[33]
  i896.environmentLightingMode = i897[34]
  i896.ambientProbe = new pc.SphericalHarmonicsL2(i897[35])
  i896.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i897[36])
  i896.useReferenceAmbientProbe = !!i897[37]
  request.r(i897[38], i897[39], 0, i896, 'customReflection')
  request.r(i897[40], i897[41], 0, i896, 'defaultReflection')
  i896.defaultReflectionMode = i897[42]
  i896.defaultReflectionResolution = i897[43]
  i896.sunLightObjectId = i897[44]
  i896.pixelLightCount = i897[45]
  i896.defaultReflectionHDR = !!i897[46]
  i896.hasLightDataAsset = !!i897[47]
  i896.hasManualGenerate = !!i897[48]
  return i896
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i902 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i903 = data
  request.r(i903[0], i903[1], 0, i902, 'lightmapColor')
  request.r(i903[2], i903[3], 0, i902, 'lightmapDirection')
  request.r(i903[4], i903[5], 0, i902, 'shadowMask')
  return i902
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i904 = root || new UnityEngine.LightProbes()
  var i905 = data
  return i904
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i912 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i913 = data
  var i915 = i913[0]
  var i914 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i915.length; i += 1) {
    i914.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i915[i + 0]));
  }
  i912.ShaderCompilationErrors = i914
  i912.name = i913[1]
  i912.guid = i913[2]
  var i917 = i913[3]
  var i916 = []
  for(var i = 0; i < i917.length; i += 1) {
    i916.push( i917[i + 0] );
  }
  i912.shaderDefinedKeywords = i916
  var i919 = i913[4]
  var i918 = []
  for(var i = 0; i < i919.length; i += 1) {
    i918.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i919[i + 0]) );
  }
  i912.passes = i918
  var i921 = i913[5]
  var i920 = []
  for(var i = 0; i < i921.length; i += 1) {
    i920.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i921[i + 0]) );
  }
  i912.usePasses = i920
  var i923 = i913[6]
  var i922 = []
  for(var i = 0; i < i923.length; i += 1) {
    i922.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i923[i + 0]) );
  }
  i912.defaultParameterValues = i922
  request.r(i913[7], i913[8], 0, i912, 'unityFallbackShader')
  i912.readDepth = !!i913[9]
  i912.hasDepthOnlyPass = !!i913[10]
  i912.isCreatedByShaderGraph = !!i913[11]
  i912.disableBatching = !!i913[12]
  i912.compiled = !!i913[13]
  return i912
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i926 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i927 = data
  i926.shaderName = i927[0]
  i926.errorMessage = i927[1]
  return i926
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i932 = root || new pc.UnityShaderPass()
  var i933 = data
  i932.id = i933[0]
  i932.subShaderIndex = i933[1]
  i932.name = i933[2]
  i932.passType = i933[3]
  i932.grabPassTextureName = i933[4]
  i932.usePass = !!i933[5]
  i932.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i933[6], i932.zTest)
  i932.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i933[7], i932.zWrite)
  i932.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i933[8], i932.culling)
  i932.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i933[9], i932.blending)
  i932.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i933[10], i932.alphaBlending)
  i932.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i933[11], i932.colorWriteMask)
  i932.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i933[12], i932.offsetUnits)
  i932.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i933[13], i932.offsetFactor)
  i932.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i933[14], i932.stencilRef)
  i932.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i933[15], i932.stencilReadMask)
  i932.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i933[16], i932.stencilWriteMask)
  i932.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i933[17], i932.stencilOp)
  i932.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i933[18], i932.stencilOpFront)
  i932.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i933[19], i932.stencilOpBack)
  var i935 = i933[20]
  var i934 = []
  for(var i = 0; i < i935.length; i += 1) {
    i934.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i935[i + 0]) );
  }
  i932.tags = i934
  var i937 = i933[21]
  var i936 = []
  for(var i = 0; i < i937.length; i += 1) {
    i936.push( i937[i + 0] );
  }
  i932.passDefinedKeywords = i936
  var i939 = i933[22]
  var i938 = []
  for(var i = 0; i < i939.length; i += 1) {
    i938.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i939[i + 0]) );
  }
  i932.passDefinedKeywordGroups = i938
  var i941 = i933[23]
  var i940 = []
  for(var i = 0; i < i941.length; i += 1) {
    i940.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i941[i + 0]) );
  }
  i932.variants = i940
  var i943 = i933[24]
  var i942 = []
  for(var i = 0; i < i943.length; i += 1) {
    i942.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i943[i + 0]) );
  }
  i932.excludedVariants = i942
  i932.hasDepthReader = !!i933[25]
  return i932
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i944 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i945 = data
  i944.val = i945[0]
  i944.name = i945[1]
  return i944
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i946 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i947 = data
  i946.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i947[0], i946.src)
  i946.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i947[1], i946.dst)
  i946.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i947[2], i946.op)
  return i946
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i948 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i949 = data
  i948.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i949[0], i948.pass)
  i948.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i949[1], i948.fail)
  i948.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i949[2], i948.zFail)
  i948.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i949[3], i948.comp)
  return i948
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i952 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i953 = data
  i952.name = i953[0]
  i952.value = i953[1]
  return i952
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i956 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i957 = data
  var i959 = i957[0]
  var i958 = []
  for(var i = 0; i < i959.length; i += 1) {
    i958.push( i959[i + 0] );
  }
  i956.keywords = i958
  i956.hasDiscard = !!i957[1]
  return i956
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i962 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i963 = data
  i962.passId = i963[0]
  i962.subShaderIndex = i963[1]
  var i965 = i963[2]
  var i964 = []
  for(var i = 0; i < i965.length; i += 1) {
    i964.push( i965[i + 0] );
  }
  i962.keywords = i964
  i962.vertexProgram = i963[3]
  i962.fragmentProgram = i963[4]
  i962.exportedForWebGl2 = !!i963[5]
  i962.readDepth = !!i963[6]
  return i962
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i968 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i969 = data
  request.r(i969[0], i969[1], 0, i968, 'shader')
  i968.pass = i969[2]
  return i968
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i972 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i973 = data
  i972.name = i973[0]
  i972.type = i973[1]
  i972.value = new pc.Vec4( i973[2], i973[3], i973[4], i973[5] )
  i972.textureValue = i973[6]
  i972.shaderPropertyFlag = i973[7]
  return i972
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i974 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i975 = data
  i974.name = i975[0]
  request.r(i975[1], i975[2], 0, i974, 'texture')
  i974.aabb = i975[3]
  i974.vertices = i975[4]
  i974.triangles = i975[5]
  i974.textureRect = UnityEngine.Rect.MinMaxRect(i975[6], i975[7], i975[8], i975[9])
  i974.packedRect = UnityEngine.Rect.MinMaxRect(i975[10], i975[11], i975[12], i975[13])
  i974.border = new pc.Vec4( i975[14], i975[15], i975[16], i975[17] )
  i974.transparency = i975[18]
  i974.bounds = i975[19]
  i974.pixelsPerUnit = i975[20]
  i974.textureWidth = i975[21]
  i974.textureHeight = i975[22]
  i974.nativeSize = new pc.Vec2( i975[23], i975[24] )
  i974.pivot = new pc.Vec2( i975[25], i975[26] )
  i974.textureRectOffset = new pc.Vec2( i975[27], i975[28] )
  return i974
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i976 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i977 = data
  i976.name = i977[0]
  return i976
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i978 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i979 = data
  i978.name = i979[0]
  i978.wrapMode = i979[1]
  i978.isLooping = !!i979[2]
  i978.length = i979[3]
  var i981 = i979[4]
  var i980 = []
  for(var i = 0; i < i981.length; i += 1) {
    i980.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i981[i + 0]) );
  }
  i978.curves = i980
  var i983 = i979[5]
  var i982 = []
  for(var i = 0; i < i983.length; i += 1) {
    i982.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i983[i + 0]) );
  }
  i978.events = i982
  i978.halfPrecision = !!i979[6]
  i978._frameRate = i979[7]
  i978.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i979[8], i978.localBounds)
  i978.hasMuscleCurves = !!i979[9]
  var i985 = i979[10]
  var i984 = []
  for(var i = 0; i < i985.length; i += 1) {
    i984.push( i985[i + 0] );
  }
  i978.clipMuscleConstant = i984
  i978.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i979[11], i978.clipBindingConstant)
  return i978
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i988 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i989 = data
  i988.path = i989[0]
  i988.hash = i989[1]
  i988.componentType = i989[2]
  i988.property = i989[3]
  i988.keys = i989[4]
  var i991 = i989[5]
  var i990 = []
  for(var i = 0; i < i991.length; i += 1) {
    i990.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i991[i + 0]) );
  }
  i988.objectReferenceKeys = i990
  return i988
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i994 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i995 = data
  i994.time = i995[0]
  request.r(i995[1], i995[2], 0, i994, 'value')
  return i994
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i998 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i999 = data
  i998.functionName = i999[0]
  i998.floatParameter = i999[1]
  i998.intParameter = i999[2]
  i998.stringParameter = i999[3]
  request.r(i999[4], i999[5], 0, i998, 'objectReferenceParameter')
  i998.time = i999[6]
  return i998
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i1000 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i1001 = data
  i1000.center = new pc.Vec3( i1001[0], i1001[1], i1001[2] )
  i1000.extends = new pc.Vec3( i1001[3], i1001[4], i1001[5] )
  return i1000
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i1004 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i1005 = data
  var i1007 = i1005[0]
  var i1006 = []
  for(var i = 0; i < i1007.length; i += 1) {
    i1006.push( i1007[i + 0] );
  }
  i1004.genericBindings = i1006
  var i1009 = i1005[1]
  var i1008 = []
  for(var i = 0; i < i1009.length; i += 1) {
    i1008.push( i1009[i + 0] );
  }
  i1004.pptrCurveMapping = i1008
  return i1004
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1010 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1011 = data
  i1010.name = i1011[0]
  i1010.ascent = i1011[1]
  i1010.originalLineHeight = i1011[2]
  i1010.fontSize = i1011[3]
  var i1013 = i1011[4]
  var i1012 = []
  for(var i = 0; i < i1013.length; i += 1) {
    i1012.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1013[i + 0]) );
  }
  i1010.characterInfo = i1012
  request.r(i1011[5], i1011[6], 0, i1010, 'texture')
  i1010.originalFontSize = i1011[7]
  return i1010
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1016 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1017 = data
  i1016.index = i1017[0]
  i1016.advance = i1017[1]
  i1016.bearing = i1017[2]
  i1016.glyphWidth = i1017[3]
  i1016.glyphHeight = i1017[4]
  i1016.minX = i1017[5]
  i1016.maxX = i1017[6]
  i1016.minY = i1017[7]
  i1016.maxY = i1017[8]
  i1016.uvBottomLeftX = i1017[9]
  i1016.uvBottomLeftY = i1017[10]
  i1016.uvBottomRightX = i1017[11]
  i1016.uvBottomRightY = i1017[12]
  i1016.uvTopLeftX = i1017[13]
  i1016.uvTopLeftY = i1017[14]
  i1016.uvTopRightX = i1017[15]
  i1016.uvTopRightY = i1017[16]
  return i1016
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i1018 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i1019 = data
  i1018.name = i1019[0]
  var i1021 = i1019[1]
  var i1020 = []
  for(var i = 0; i < i1021.length; i += 1) {
    i1020.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i1021[i + 0]) );
  }
  i1018.layers = i1020
  var i1023 = i1019[2]
  var i1022 = []
  for(var i = 0; i < i1023.length; i += 1) {
    i1022.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i1023[i + 0]) );
  }
  i1018.parameters = i1022
  i1018.animationClips = i1019[3]
  i1018.avatarUnsupported = i1019[4]
  return i1018
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i1026 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i1027 = data
  i1026.name = i1027[0]
  i1026.defaultWeight = i1027[1]
  i1026.blendingMode = i1027[2]
  i1026.avatarMask = i1027[3]
  i1026.syncedLayerIndex = i1027[4]
  i1026.syncedLayerAffectsTiming = !!i1027[5]
  i1026.syncedLayers = i1027[6]
  i1026.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1027[7], i1026.stateMachine)
  return i1026
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i1028 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i1029 = data
  i1028.id = i1029[0]
  i1028.name = i1029[1]
  i1028.path = i1029[2]
  var i1031 = i1029[3]
  var i1030 = []
  for(var i = 0; i < i1031.length; i += 1) {
    i1030.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i1031[i + 0]) );
  }
  i1028.states = i1030
  var i1033 = i1029[4]
  var i1032 = []
  for(var i = 0; i < i1033.length; i += 1) {
    i1032.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1033[i + 0]) );
  }
  i1028.machines = i1032
  var i1035 = i1029[5]
  var i1034 = []
  for(var i = 0; i < i1035.length; i += 1) {
    i1034.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1035[i + 0]) );
  }
  i1028.entryStateTransitions = i1034
  var i1037 = i1029[6]
  var i1036 = []
  for(var i = 0; i < i1037.length; i += 1) {
    i1036.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1037[i + 0]) );
  }
  i1028.exitStateTransitions = i1036
  var i1039 = i1029[7]
  var i1038 = []
  for(var i = 0; i < i1039.length; i += 1) {
    i1038.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1039[i + 0]) );
  }
  i1028.anyStateTransitions = i1038
  i1028.defaultStateId = i1029[8]
  return i1028
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i1042 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i1043 = data
  i1042.id = i1043[0]
  i1042.name = i1043[1]
  i1042.cycleOffset = i1043[2]
  i1042.cycleOffsetParameter = i1043[3]
  i1042.cycleOffsetParameterActive = !!i1043[4]
  i1042.mirror = !!i1043[5]
  i1042.mirrorParameter = i1043[6]
  i1042.mirrorParameterActive = !!i1043[7]
  i1042.motionId = i1043[8]
  i1042.nameHash = i1043[9]
  i1042.fullPathHash = i1043[10]
  i1042.speed = i1043[11]
  i1042.speedParameter = i1043[12]
  i1042.speedParameterActive = !!i1043[13]
  i1042.tag = i1043[14]
  i1042.tagHash = i1043[15]
  i1042.writeDefaultValues = !!i1043[16]
  var i1045 = i1043[17]
  var i1044 = []
  for(var i = 0; i < i1045.length; i += 2) {
  request.r(i1045[i + 0], i1045[i + 1], 2, i1044, '')
  }
  i1042.behaviours = i1044
  var i1047 = i1043[18]
  var i1046 = []
  for(var i = 0; i < i1047.length; i += 1) {
    i1046.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1047[i + 0]) );
  }
  i1042.transitions = i1046
  return i1042
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1052 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1053 = data
  i1052.fullPath = i1053[0]
  i1052.canTransitionToSelf = !!i1053[1]
  i1052.duration = i1053[2]
  i1052.exitTime = i1053[3]
  i1052.hasExitTime = !!i1053[4]
  i1052.hasFixedDuration = !!i1053[5]
  i1052.interruptionSource = i1053[6]
  i1052.offset = i1053[7]
  i1052.orderedInterruption = !!i1053[8]
  i1052.destinationStateId = i1053[9]
  i1052.isExit = !!i1053[10]
  i1052.mute = !!i1053[11]
  i1052.solo = !!i1053[12]
  var i1055 = i1053[13]
  var i1054 = []
  for(var i = 0; i < i1055.length; i += 1) {
    i1054.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1055[i + 0]) );
  }
  i1052.conditions = i1054
  return i1052
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1060 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1061 = data
  i1060.destinationStateId = i1061[0]
  i1060.isExit = !!i1061[1]
  i1060.mute = !!i1061[2]
  i1060.solo = !!i1061[3]
  var i1063 = i1061[4]
  var i1062 = []
  for(var i = 0; i < i1063.length; i += 1) {
    i1062.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1063[i + 0]) );
  }
  i1060.conditions = i1062
  return i1060
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1066 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1067 = data
  i1066.defaultBool = !!i1067[0]
  i1066.defaultFloat = i1067[1]
  i1066.defaultInt = i1067[2]
  i1066.name = i1067[3]
  i1066.nameHash = i1067[4]
  i1066.type = i1067[5]
  return i1066
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1068 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1069 = data
  i1068.name = i1069[0]
  i1068.bytes64 = i1069[1]
  i1068.data = i1069[2]
  return i1068
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i1070 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i1071 = data
  i1070.normalStyle = i1071[0]
  i1070.normalSpacingOffset = i1071[1]
  i1070.boldStyle = i1071[2]
  i1070.boldSpacing = i1071[3]
  i1070.italicStyle = i1071[4]
  i1070.tabSize = i1071[5]
  request.r(i1071[6], i1071[7], 0, i1070, 'atlas')
  i1070.m_SourceFontFileGUID = i1071[8]
  i1070.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i1071[9], i1070.m_CreationSettings)
  request.r(i1071[10], i1071[11], 0, i1070, 'm_SourceFontFile')
  i1070.m_SourceFontFilePath = i1071[12]
  i1070.m_AtlasPopulationMode = i1071[13]
  i1070.InternalDynamicOS = !!i1071[14]
  var i1073 = i1071[15]
  var i1072 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i1073.length; i += 1) {
    i1072.add(request.d('UnityEngine.TextCore.Glyph', i1073[i + 0]));
  }
  i1070.m_GlyphTable = i1072
  var i1075 = i1071[16]
  var i1074 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i1075.length; i += 1) {
    i1074.add(request.d('TMPro.TMP_Character', i1075[i + 0]));
  }
  i1070.m_CharacterTable = i1074
  var i1077 = i1071[17]
  var i1076 = []
  for(var i = 0; i < i1077.length; i += 2) {
  request.r(i1077[i + 0], i1077[i + 1], 2, i1076, '')
  }
  i1070.m_AtlasTextures = i1076
  i1070.m_AtlasTextureIndex = i1071[18]
  i1070.m_IsMultiAtlasTexturesEnabled = !!i1071[19]
  i1070.m_GetFontFeatures = !!i1071[20]
  i1070.m_ClearDynamicDataOnBuild = !!i1071[21]
  i1070.m_AtlasWidth = i1071[22]
  i1070.m_AtlasHeight = i1071[23]
  i1070.m_AtlasPadding = i1071[24]
  i1070.m_AtlasRenderMode = i1071[25]
  var i1079 = i1071[26]
  var i1078 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1079.length; i += 1) {
    i1078.add(request.d('UnityEngine.TextCore.GlyphRect', i1079[i + 0]));
  }
  i1070.m_UsedGlyphRects = i1078
  var i1081 = i1071[27]
  var i1080 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1081.length; i += 1) {
    i1080.add(request.d('UnityEngine.TextCore.GlyphRect', i1081[i + 0]));
  }
  i1070.m_FreeGlyphRects = i1080
  i1070.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i1071[28], i1070.m_FontFeatureTable)
  i1070.m_ShouldReimportFontFeatures = !!i1071[29]
  var i1083 = i1071[30]
  var i1082 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1083.length; i += 2) {
  request.r(i1083[i + 0], i1083[i + 1], 1, i1082, '')
  }
  i1070.m_FallbackFontAssetTable = i1082
  var i1085 = i1071[31]
  var i1084 = []
  for(var i = 0; i < i1085.length; i += 1) {
    i1084.push( request.d('TMPro.TMP_FontWeightPair', i1085[i + 0]) );
  }
  i1070.m_FontWeightTable = i1084
  var i1087 = i1071[32]
  var i1086 = []
  for(var i = 0; i < i1087.length; i += 1) {
    i1086.push( request.d('TMPro.TMP_FontWeightPair', i1087[i + 0]) );
  }
  i1070.fontWeights = i1086
  i1070.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i1071[33], i1070.m_fontInfo)
  var i1089 = i1071[34]
  var i1088 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i1089.length; i += 1) {
    i1088.add(request.d('TMPro.TMP_Glyph', i1089[i + 0]));
  }
  i1070.m_glyphInfoList = i1088
  i1070.m_KerningTable = request.d('TMPro.KerningTable', i1071[35], i1070.m_KerningTable)
  var i1091 = i1071[36]
  var i1090 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1091.length; i += 2) {
  request.r(i1091[i + 0], i1091[i + 1], 1, i1090, '')
  }
  i1070.fallbackFontAssets = i1090
  i1070.m_Version = i1071[37]
  i1070.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1071[38], i1070.m_FaceInfo)
  request.r(i1071[39], i1071[40], 0, i1070, 'm_Material')
  return i1070
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i1092 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i1093 = data
  i1092.sourceFontFileName = i1093[0]
  i1092.sourceFontFileGUID = i1093[1]
  i1092.faceIndex = i1093[2]
  i1092.pointSizeSamplingMode = i1093[3]
  i1092.pointSize = i1093[4]
  i1092.padding = i1093[5]
  i1092.paddingMode = i1093[6]
  i1092.packingMode = i1093[7]
  i1092.atlasWidth = i1093[8]
  i1092.atlasHeight = i1093[9]
  i1092.characterSetSelectionMode = i1093[10]
  i1092.characterSequence = i1093[11]
  i1092.referencedFontAssetGUID = i1093[12]
  i1092.referencedTextAssetGUID = i1093[13]
  i1092.fontStyle = i1093[14]
  i1092.fontStyleModifier = i1093[15]
  i1092.renderMode = i1093[16]
  i1092.includeFontFeatures = !!i1093[17]
  return i1092
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i1096 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i1097 = data
  i1096.m_Index = i1097[0]
  i1096.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1097[1], i1096.m_Metrics)
  i1096.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1097[2], i1096.m_GlyphRect)
  i1096.m_Scale = i1097[3]
  i1096.m_AtlasIndex = i1097[4]
  i1096.m_ClassDefinitionType = i1097[5]
  return i1096
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1098 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1099 = data
  i1098.m_Width = i1099[0]
  i1098.m_Height = i1099[1]
  i1098.m_HorizontalBearingX = i1099[2]
  i1098.m_HorizontalBearingY = i1099[3]
  i1098.m_HorizontalAdvance = i1099[4]
  return i1098
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1100 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1101 = data
  i1100.m_X = i1101[0]
  i1100.m_Y = i1101[1]
  i1100.m_Width = i1101[2]
  i1100.m_Height = i1101[3]
  return i1100
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i1104 = root || request.c( 'TMPro.TMP_Character' )
  var i1105 = data
  i1104.m_ElementType = i1105[0]
  i1104.m_Unicode = i1105[1]
  i1104.m_GlyphIndex = i1105[2]
  i1104.m_Scale = i1105[3]
  return i1104
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i1110 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i1111 = data
  var i1113 = i1111[0]
  var i1112 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i1113.length; i += 1) {
    i1112.add(request.d('TMPro.MultipleSubstitutionRecord', i1113[i + 0]));
  }
  i1110.m_MultipleSubstitutionRecords = i1112
  var i1115 = i1111[1]
  var i1114 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i1115.length; i += 1) {
    i1114.add(request.d('TMPro.LigatureSubstitutionRecord', i1115[i + 0]));
  }
  i1110.m_LigatureSubstitutionRecords = i1114
  var i1117 = i1111[2]
  var i1116 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i1117.length; i += 1) {
    i1116.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i1117[i + 0]));
  }
  i1110.m_GlyphPairAdjustmentRecords = i1116
  var i1119 = i1111[3]
  var i1118 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i1119.length; i += 1) {
    i1118.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i1119[i + 0]));
  }
  i1110.m_MarkToBaseAdjustmentRecords = i1118
  var i1121 = i1111[4]
  var i1120 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i1121.length; i += 1) {
    i1120.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i1121[i + 0]));
  }
  i1110.m_MarkToMarkAdjustmentRecords = i1120
  return i1110
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i1124 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i1125 = data
  i1124.m_TargetGlyphID = i1125[0]
  i1124.m_SubstituteGlyphIDs = i1125[1]
  return i1124
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i1128 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i1129 = data
  i1128.m_ComponentGlyphIDs = i1129[0]
  i1128.m_LigatureGlyphID = i1129[1]
  return i1128
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i1132 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i1133 = data
  i1132.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i1133[0], i1132.m_FirstAdjustmentRecord)
  i1132.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i1133[1], i1132.m_SecondAdjustmentRecord)
  i1132.m_FeatureLookupFlags = i1133[2]
  return i1132
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1134 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i1135 = data
  i1134.m_GlyphIndex = i1135[0]
  i1134.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i1135[1], i1134.m_GlyphValueRecord)
  return i1134
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i1136 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i1137 = data
  i1136.m_XPlacement = i1137[0]
  i1136.m_YPlacement = i1137[1]
  i1136.m_XAdvance = i1137[2]
  i1136.m_YAdvance = i1137[3]
  return i1136
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i1140 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i1141 = data
  i1140.m_BaseGlyphID = i1141[0]
  i1140.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i1141[1], i1140.m_BaseGlyphAnchorPoint)
  i1140.m_MarkGlyphID = i1141[2]
  i1140.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i1141[3], i1140.m_MarkPositionAdjustment)
  return i1140
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i1144 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i1145 = data
  i1144.m_BaseMarkGlyphID = i1145[0]
  i1144.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i1145[1], i1144.m_BaseMarkGlyphAnchorPoint)
  i1144.m_CombiningMarkGlyphID = i1145[2]
  i1144.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i1145[3], i1144.m_CombiningMarkPositionAdjustment)
  return i1144
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i1150 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i1151 = data
  request.r(i1151[0], i1151[1], 0, i1150, 'regularTypeface')
  request.r(i1151[2], i1151[3], 0, i1150, 'italicTypeface')
  return i1150
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i1152 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i1153 = data
  i1152.Name = i1153[0]
  i1152.PointSize = i1153[1]
  i1152.Scale = i1153[2]
  i1152.CharacterCount = i1153[3]
  i1152.LineHeight = i1153[4]
  i1152.Baseline = i1153[5]
  i1152.Ascender = i1153[6]
  i1152.CapHeight = i1153[7]
  i1152.Descender = i1153[8]
  i1152.CenterLine = i1153[9]
  i1152.SuperscriptOffset = i1153[10]
  i1152.SubscriptOffset = i1153[11]
  i1152.SubSize = i1153[12]
  i1152.Underline = i1153[13]
  i1152.UnderlineThickness = i1153[14]
  i1152.strikethrough = i1153[15]
  i1152.strikethroughThickness = i1153[16]
  i1152.TabWidth = i1153[17]
  i1152.Padding = i1153[18]
  i1152.AtlasWidth = i1153[19]
  i1152.AtlasHeight = i1153[20]
  return i1152
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i1156 = root || request.c( 'TMPro.TMP_Glyph' )
  var i1157 = data
  i1156.id = i1157[0]
  i1156.x = i1157[1]
  i1156.y = i1157[2]
  i1156.width = i1157[3]
  i1156.height = i1157[4]
  i1156.xOffset = i1157[5]
  i1156.yOffset = i1157[6]
  i1156.xAdvance = i1157[7]
  i1156.scale = i1157[8]
  return i1156
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i1158 = root || request.c( 'TMPro.KerningTable' )
  var i1159 = data
  var i1161 = i1159[0]
  var i1160 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i1161.length; i += 1) {
    i1160.add(request.d('TMPro.KerningPair', i1161[i + 0]));
  }
  i1158.kerningPairs = i1160
  return i1158
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i1164 = root || request.c( 'TMPro.KerningPair' )
  var i1165 = data
  i1164.xOffset = i1165[0]
  i1164.m_FirstGlyph = i1165[1]
  i1164.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1165[2], i1164.m_FirstGlyphAdjustments)
  i1164.m_SecondGlyph = i1165[3]
  i1164.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1165[4], i1164.m_SecondGlyphAdjustments)
  i1164.m_IgnoreSpacingAdjustments = !!i1165[5]
  return i1164
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1166 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1167 = data
  i1166.m_FaceIndex = i1167[0]
  i1166.m_FamilyName = i1167[1]
  i1166.m_StyleName = i1167[2]
  i1166.m_PointSize = i1167[3]
  i1166.m_Scale = i1167[4]
  i1166.m_UnitsPerEM = i1167[5]
  i1166.m_LineHeight = i1167[6]
  i1166.m_AscentLine = i1167[7]
  i1166.m_CapLine = i1167[8]
  i1166.m_MeanLine = i1167[9]
  i1166.m_Baseline = i1167[10]
  i1166.m_DescentLine = i1167[11]
  i1166.m_SuperscriptOffset = i1167[12]
  i1166.m_SuperscriptSize = i1167[13]
  i1166.m_SubscriptOffset = i1167[14]
  i1166.m_SubscriptSize = i1167[15]
  i1166.m_UnderlineOffset = i1167[16]
  i1166.m_UnderlineThickness = i1167[17]
  i1166.m_StrikethroughOffset = i1167[18]
  i1166.m_StrikethroughThickness = i1167[19]
  i1166.m_TabWidth = i1167[20]
  return i1166
}

Deserializers["FavoritePlayerCard"] = function (request, data, root) {
  var i1168 = root || request.c( 'FavoritePlayerCard' )
  var i1169 = data
  i1168.playerName = i1169[0]
  request.r(i1169[1], i1169[2], 0, i1168, 'halfBodySprite')
  request.r(i1169[3], i1169[4], 0, i1168, 'fullBodySprite')
  request.r(i1169[5], i1169[6], 0, i1168, 'nameAudio')
  return i1168
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1170 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1171 = data
  i1170.useSafeMode = !!i1171[0]
  i1170.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1171[1], i1170.safeModeOptions)
  i1170.timeScale = i1171[2]
  i1170.unscaledTimeScale = i1171[3]
  i1170.useSmoothDeltaTime = !!i1171[4]
  i1170.maxSmoothUnscaledTime = i1171[5]
  i1170.rewindCallbackMode = i1171[6]
  i1170.showUnityEditorReport = !!i1171[7]
  i1170.logBehaviour = i1171[8]
  i1170.drawGizmos = !!i1171[9]
  i1170.defaultRecyclable = !!i1171[10]
  i1170.defaultAutoPlay = i1171[11]
  i1170.defaultUpdateType = i1171[12]
  i1170.defaultTimeScaleIndependent = !!i1171[13]
  i1170.defaultEaseType = i1171[14]
  i1170.defaultEaseOvershootOrAmplitude = i1171[15]
  i1170.defaultEasePeriod = i1171[16]
  i1170.defaultAutoKill = !!i1171[17]
  i1170.defaultLoopType = i1171[18]
  i1170.debugMode = !!i1171[19]
  i1170.debugStoreTargetId = !!i1171[20]
  i1170.showPreviewPanel = !!i1171[21]
  i1170.storeSettingsLocation = i1171[22]
  i1170.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1171[23], i1170.modules)
  i1170.createASMDEF = !!i1171[24]
  i1170.showPlayingTweens = !!i1171[25]
  i1170.showPausedTweens = !!i1171[26]
  return i1170
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1172 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1173 = data
  i1172.logBehaviour = i1173[0]
  i1172.nestedTweenFailureBehaviour = i1173[1]
  return i1172
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1174 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1175 = data
  i1174.showPanel = !!i1175[0]
  i1174.audioEnabled = !!i1175[1]
  i1174.physicsEnabled = !!i1175[2]
  i1174.physics2DEnabled = !!i1175[3]
  i1174.spriteEnabled = !!i1175[4]
  i1174.uiEnabled = !!i1175[5]
  i1174.uiToolkitEnabled = !!i1175[6]
  i1174.textMeshProEnabled = !!i1175[7]
  i1174.tk2DEnabled = !!i1175[8]
  i1174.deAudioEnabled = !!i1175[9]
  i1174.deUnityExtendedEnabled = !!i1175[10]
  i1174.epoOutlineEnabled = !!i1175[11]
  return i1174
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1176 = root || request.c( 'TMPro.TMP_Settings' )
  var i1177 = data
  i1176.assetVersion = i1177[0]
  i1176.m_TextWrappingMode = i1177[1]
  i1176.m_enableKerning = !!i1177[2]
  var i1179 = i1177[3]
  var i1178 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i1179.length; i += 1) {
    i1178.add(i1179[i + 0]);
  }
  i1176.m_ActiveFontFeatures = i1178
  i1176.m_enableExtraPadding = !!i1177[4]
  i1176.m_enableTintAllSprites = !!i1177[5]
  i1176.m_enableParseEscapeCharacters = !!i1177[6]
  i1176.m_EnableRaycastTarget = !!i1177[7]
  i1176.m_GetFontFeaturesAtRuntime = !!i1177[8]
  i1176.m_missingGlyphCharacter = i1177[9]
  i1176.m_ClearDynamicDataOnBuild = !!i1177[10]
  i1176.m_warningsDisabled = !!i1177[11]
  request.r(i1177[12], i1177[13], 0, i1176, 'm_defaultFontAsset')
  i1176.m_defaultFontAssetPath = i1177[14]
  i1176.m_defaultFontSize = i1177[15]
  i1176.m_defaultAutoSizeMinRatio = i1177[16]
  i1176.m_defaultAutoSizeMaxRatio = i1177[17]
  i1176.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1177[18], i1177[19] )
  i1176.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1177[20], i1177[21] )
  i1176.m_autoSizeTextContainer = !!i1177[22]
  i1176.m_IsTextObjectScaleStatic = !!i1177[23]
  var i1181 = i1177[24]
  var i1180 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1181.length; i += 2) {
  request.r(i1181[i + 0], i1181[i + 1], 1, i1180, '')
  }
  i1176.m_fallbackFontAssets = i1180
  i1176.m_matchMaterialPreset = !!i1177[25]
  i1176.m_HideSubTextObjects = !!i1177[26]
  request.r(i1177[27], i1177[28], 0, i1176, 'm_defaultSpriteAsset')
  i1176.m_defaultSpriteAssetPath = i1177[29]
  i1176.m_enableEmojiSupport = !!i1177[30]
  i1176.m_MissingCharacterSpriteUnicode = i1177[31]
  var i1183 = i1177[32]
  var i1182 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i1183.length; i += 2) {
  request.r(i1183[i + 0], i1183[i + 1], 1, i1182, '')
  }
  i1176.m_EmojiFallbackTextAssets = i1182
  i1176.m_defaultColorGradientPresetsPath = i1177[33]
  request.r(i1177[34], i1177[35], 0, i1176, 'm_defaultStyleSheet')
  i1176.m_StyleSheetsResourcePath = i1177[36]
  request.r(i1177[37], i1177[38], 0, i1176, 'm_leadingCharacters')
  request.r(i1177[39], i1177[40], 0, i1176, 'm_followingCharacters')
  i1176.m_UseModernHangulLineBreakingRules = !!i1177[41]
  return i1176
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1186 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1187 = data
  request.r(i1187[0], i1187[1], 0, i1186, 'spriteSheet')
  var i1189 = i1187[2]
  var i1188 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1189.length; i += 1) {
    i1188.add(request.d('TMPro.TMP_Sprite', i1189[i + 0]));
  }
  i1186.spriteInfoList = i1188
  var i1191 = i1187[3]
  var i1190 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1191.length; i += 2) {
  request.r(i1191[i + 0], i1191[i + 1], 1, i1190, '')
  }
  i1186.fallbackSpriteAssets = i1190
  var i1193 = i1187[4]
  var i1192 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1193.length; i += 1) {
    i1192.add(request.d('TMPro.TMP_SpriteCharacter', i1193[i + 0]));
  }
  i1186.m_SpriteCharacterTable = i1192
  var i1195 = i1187[5]
  var i1194 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1195.length; i += 1) {
    i1194.add(request.d('TMPro.TMP_SpriteGlyph', i1195[i + 0]));
  }
  i1186.m_GlyphTable = i1194
  i1186.m_Version = i1187[6]
  i1186.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1187[7], i1186.m_FaceInfo)
  request.r(i1187[8], i1187[9], 0, i1186, 'm_Material')
  return i1186
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1198 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1199 = data
  i1198.name = i1199[0]
  i1198.hashCode = i1199[1]
  i1198.unicode = i1199[2]
  i1198.pivot = new pc.Vec2( i1199[3], i1199[4] )
  request.r(i1199[5], i1199[6], 0, i1198, 'sprite')
  i1198.id = i1199[7]
  i1198.x = i1199[8]
  i1198.y = i1199[9]
  i1198.width = i1199[10]
  i1198.height = i1199[11]
  i1198.xOffset = i1199[12]
  i1198.yOffset = i1199[13]
  i1198.xAdvance = i1199[14]
  i1198.scale = i1199[15]
  return i1198
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1204 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1205 = data
  i1204.m_Name = i1205[0]
  i1204.m_ElementType = i1205[1]
  i1204.m_Unicode = i1205[2]
  i1204.m_GlyphIndex = i1205[3]
  i1204.m_Scale = i1205[4]
  return i1204
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1208 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1209 = data
  request.r(i1209[0], i1209[1], 0, i1208, 'sprite')
  i1208.m_Index = i1209[2]
  i1208.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1209[3], i1208.m_Metrics)
  i1208.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1209[4], i1208.m_GlyphRect)
  i1208.m_Scale = i1209[5]
  i1208.m_AtlasIndex = i1209[6]
  i1208.m_ClassDefinitionType = i1209[7]
  return i1208
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1210 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1211 = data
  var i1213 = i1211[0]
  var i1212 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1213.length; i += 1) {
    i1212.add(request.d('TMPro.TMP_Style', i1213[i + 0]));
  }
  i1210.m_StyleList = i1212
  return i1210
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1216 = root || request.c( 'TMPro.TMP_Style' )
  var i1217 = data
  i1216.m_Name = i1217[0]
  i1216.m_HashCode = i1217[1]
  i1216.m_OpeningDefinition = i1217[2]
  i1216.m_ClosingDefinition = i1217[3]
  i1216.m_OpeningTagArray = i1217[4]
  i1216.m_ClosingTagArray = i1217[5]
  return i1216
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1218 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1219 = data
  var i1221 = i1219[0]
  var i1220 = []
  for(var i = 0; i < i1221.length; i += 1) {
    i1220.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1221[i + 0]) );
  }
  i1218.files = i1220
  i1218.componentToPrefabIds = i1219[1]
  return i1218
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1224 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1225 = data
  i1224.path = i1225[0]
  request.r(i1225[1], i1225[2], 0, i1224, 'unityObject')
  return i1224
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1226 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1227 = data
  var i1229 = i1227[0]
  var i1228 = []
  for(var i = 0; i < i1229.length; i += 1) {
    i1228.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1229[i + 0]) );
  }
  i1226.scriptsExecutionOrder = i1228
  var i1231 = i1227[1]
  var i1230 = []
  for(var i = 0; i < i1231.length; i += 1) {
    i1230.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1231[i + 0]) );
  }
  i1226.sortingLayers = i1230
  var i1233 = i1227[2]
  var i1232 = []
  for(var i = 0; i < i1233.length; i += 1) {
    i1232.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1233[i + 0]) );
  }
  i1226.cullingLayers = i1232
  i1226.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1227[3], i1226.timeSettings)
  i1226.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1227[4], i1226.physicsSettings)
  i1226.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1227[5], i1226.physics2DSettings)
  i1226.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1227[6], i1226.qualitySettings)
  i1226.enableRealtimeShadows = !!i1227[7]
  i1226.enableAutoInstancing = !!i1227[8]
  i1226.enableStaticBatching = !!i1227[9]
  i1226.enableDynamicBatching = !!i1227[10]
  i1226.lightmapEncodingQuality = i1227[11]
  i1226.desiredColorSpace = i1227[12]
  var i1235 = i1227[13]
  var i1234 = []
  for(var i = 0; i < i1235.length; i += 1) {
    i1234.push( i1235[i + 0] );
  }
  i1226.allTags = i1234
  return i1226
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1238 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1239 = data
  i1238.name = i1239[0]
  i1238.value = i1239[1]
  return i1238
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1242 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1243 = data
  i1242.id = i1243[0]
  i1242.name = i1243[1]
  i1242.value = i1243[2]
  return i1242
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1246 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1247 = data
  i1246.id = i1247[0]
  i1246.name = i1247[1]
  return i1246
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1248 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1249 = data
  i1248.fixedDeltaTime = i1249[0]
  i1248.maximumDeltaTime = i1249[1]
  i1248.timeScale = i1249[2]
  i1248.maximumParticleTimestep = i1249[3]
  return i1248
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1250 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1251 = data
  i1250.gravity = new pc.Vec3( i1251[0], i1251[1], i1251[2] )
  i1250.defaultSolverIterations = i1251[3]
  i1250.bounceThreshold = i1251[4]
  i1250.autoSyncTransforms = !!i1251[5]
  i1250.autoSimulation = !!i1251[6]
  var i1253 = i1251[7]
  var i1252 = []
  for(var i = 0; i < i1253.length; i += 1) {
    i1252.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1253[i + 0]) );
  }
  i1250.collisionMatrix = i1252
  return i1250
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1256 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1257 = data
  i1256.enabled = !!i1257[0]
  i1256.layerId = i1257[1]
  i1256.otherLayerId = i1257[2]
  return i1256
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1258 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1259 = data
  request.r(i1259[0], i1259[1], 0, i1258, 'material')
  i1258.gravity = new pc.Vec2( i1259[2], i1259[3] )
  i1258.positionIterations = i1259[4]
  i1258.velocityIterations = i1259[5]
  i1258.velocityThreshold = i1259[6]
  i1258.maxLinearCorrection = i1259[7]
  i1258.maxAngularCorrection = i1259[8]
  i1258.maxTranslationSpeed = i1259[9]
  i1258.maxRotationSpeed = i1259[10]
  i1258.baumgarteScale = i1259[11]
  i1258.baumgarteTOIScale = i1259[12]
  i1258.timeToSleep = i1259[13]
  i1258.linearSleepTolerance = i1259[14]
  i1258.angularSleepTolerance = i1259[15]
  i1258.defaultContactOffset = i1259[16]
  i1258.autoSimulation = !!i1259[17]
  i1258.queriesHitTriggers = !!i1259[18]
  i1258.queriesStartInColliders = !!i1259[19]
  i1258.callbacksOnDisable = !!i1259[20]
  i1258.reuseCollisionCallbacks = !!i1259[21]
  i1258.autoSyncTransforms = !!i1259[22]
  var i1261 = i1259[23]
  var i1260 = []
  for(var i = 0; i < i1261.length; i += 1) {
    i1260.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1261[i + 0]) );
  }
  i1258.collisionMatrix = i1260
  return i1258
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1264 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1265 = data
  i1264.enabled = !!i1265[0]
  i1264.layerId = i1265[1]
  i1264.otherLayerId = i1265[2]
  return i1264
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1266 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1267 = data
  var i1269 = i1267[0]
  var i1268 = []
  for(var i = 0; i < i1269.length; i += 1) {
    i1268.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1269[i + 0]) );
  }
  i1266.qualityLevels = i1268
  var i1271 = i1267[1]
  var i1270 = []
  for(var i = 0; i < i1271.length; i += 1) {
    i1270.push( i1271[i + 0] );
  }
  i1266.names = i1270
  i1266.shadows = i1267[2]
  i1266.anisotropicFiltering = i1267[3]
  i1266.antiAliasing = i1267[4]
  i1266.lodBias = i1267[5]
  i1266.shadowCascades = i1267[6]
  i1266.shadowDistance = i1267[7]
  i1266.shadowmaskMode = i1267[8]
  i1266.shadowProjection = i1267[9]
  i1266.shadowResolution = i1267[10]
  i1266.softParticles = !!i1267[11]
  i1266.softVegetation = !!i1267[12]
  i1266.activeColorSpace = i1267[13]
  i1266.desiredColorSpace = i1267[14]
  i1266.masterTextureLimit = i1267[15]
  i1266.maxQueuedFrames = i1267[16]
  i1266.particleRaycastBudget = i1267[17]
  i1266.pixelLightCount = i1267[18]
  i1266.realtimeReflectionProbes = !!i1267[19]
  i1266.shadowCascade2Split = i1267[20]
  i1266.shadowCascade4Split = new pc.Vec3( i1267[21], i1267[22], i1267[23] )
  i1266.streamingMipmapsActive = !!i1267[24]
  i1266.vSyncCount = i1267[25]
  i1266.asyncUploadBufferSize = i1267[26]
  i1266.asyncUploadTimeSlice = i1267[27]
  i1266.billboardsFaceCameraPosition = !!i1267[28]
  i1266.shadowNearPlaneOffset = i1267[29]
  i1266.streamingMipmapsMemoryBudget = i1267[30]
  i1266.maximumLODLevel = i1267[31]
  i1266.streamingMipmapsAddAllCameras = !!i1267[32]
  i1266.streamingMipmapsMaxLevelReduction = i1267[33]
  i1266.streamingMipmapsRenderersPerFrame = i1267[34]
  i1266.resolutionScalingFixedDPIFactor = i1267[35]
  i1266.streamingMipmapsMaxFileIORequests = i1267[36]
  i1266.currentQualityLevel = i1267[37]
  return i1266
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1276 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1277 = data
  i1276.weight = i1277[0]
  i1276.vertices = i1277[1]
  i1276.normals = i1277[2]
  i1276.tangents = i1277[3]
  return i1276
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1280 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1281 = data
  i1280.mode = i1281[0]
  i1280.parameter = i1281[1]
  i1280.threshold = i1281[2]
  return i1280
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i1282 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i1283 = data
  i1282.m_XCoordinate = i1283[0]
  i1282.m_YCoordinate = i1283[1]
  return i1282
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i1284 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i1285 = data
  i1284.m_XPositionAdjustment = i1285[0]
  i1284.m_YPositionAdjustment = i1285[1]
  return i1284
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1286 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1287 = data
  i1286.xPlacement = i1287[0]
  i1286.yPlacement = i1287[1]
  i1286.xAdvance = i1287[2]
  i1286.yAdvance = i1287[3]
  return i1286
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2}}

Deserializers.requiredComponents = {"49":[50],"51":[50],"52":[50],"53":[50],"54":[50],"55":[50],"56":[57],"58":[2],"59":[60],"61":[60],"62":[60],"63":[60],"64":[60],"65":[60],"66":[67],"68":[67],"69":[67],"70":[67],"71":[67],"72":[67],"73":[67],"74":[67],"75":[67],"76":[67],"77":[67],"78":[67],"79":[67],"80":[2],"81":[26],"82":[83],"84":[83],"35":[25],"6":[2],"21":[85],"86":[67],"87":[88],"33":[85],"89":[14],"90":[2],"91":[92],"93":[41],"94":[35],"95":[25],"23":[26,25],"39":[25,38],"96":[25],"97":[38,25],"98":[26],"99":[38,25],"100":[25],"101":[102],"103":[102],"104":[102],"105":[25],"106":[25],"37":[35],"40":[38,25],"107":[25],"36":[35],"108":[25],"109":[25],"110":[25],"111":[25],"112":[25],"113":[25],"114":[25],"115":[25],"116":[25],"117":[38,25],"118":[25],"119":[25],"120":[25],"121":[25],"122":[38,25],"123":[25],"124":[41],"125":[41],"42":[41],"126":[41],"127":[2],"128":[2]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.MonoBehaviour","CameraFollow2D","AutoCameraFit","UnityEngine.Transform","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Mesh","UnityEngine.Material","UnityEngine.AudioSource","UnityEngine.AudioClip","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","MoveBetweenPoints","ScreenHeightPositionAnchor","UnityEngine.BoxCollider","ClickToStore","FavoritePlayerEndcard","TMPro.TextMeshPro","UnityEngine.GameObject","UnityEngine.RectTransform","UnityEngine.MeshRenderer","UnityEngine.EventSystems.UIBehaviour","TMPro.TMP_FontAsset","UnityEngine.MeshFilter","PlayerCardUIManager","Ply_SoundManager","FavoritePlayerManager","PlayerSlot","FavoritePlayerCard","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","TMPro.TextMeshProUGUI","UnityEngine.UI.Image","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.Font","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.Collider","BatStrikeController","SlotTrigger","UnityEngine.BoxCollider2D","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.InputSystem.UI.InputSystemUIInputModule","UnityEngine.InputSystem.UI.TrackedDeviceRaycaster","TMPro.TextContainer","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.38f1";

Deserializers.productName = "PLY_MiniSoccer";

Deserializers.lunaInitializationTime = "07/15/2026 03:53:54";

Deserializers.lunaDaysRunning = "30.2";

Deserializers.lunaVersion = "7.1.0";

Deserializers.lunaSHA = "cf93782349542fe0b84ad13951a26809f8419628";

Deserializers.creativeName = "";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1776";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4688";

Deserializers.runtimeAnalysisExcludedModules = "physics2d, prefabs";

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

Deserializers.buildID = "084ebf58-ec16-4c43-9e3f-951c266145d2";

Deserializers.runtimeInitializeOnLoadInfos = [[["Unity","Services","Core","Internal","UnityServicesInitializer","EnableServicesInitializationAsync"],["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["DG","Tweening","DOTween","RuntimeOnLoad"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["Unity","Services","Core","Registration","CorePackageInitializer","InitializeOnLoad"],["Unity","Services","Core","Internal","TaskAsyncOperation","SetScheduler"],["Unity","Services","Core","Environments","Client","Scheduler","EngineStateHelper","Init"],["Unity","Services","Core","Environments","Client","Scheduler","ThreadHelper","Init"],["Ua2CoreInitializeCallback","Register"],["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["Unity","AI","Navigation","NavMeshLink","ClearTrackedList"],["Unity","AI","Navigation","NavMeshSurface","ClearNavMeshSurfaces"],["Unity","AI","Navigation","NavMeshModifierVolume","ClearNavMeshModifiers"],["Unity","AI","Navigation","NavMeshModifier","ClearNavMeshModifiers"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["Unity","Services","Core","Internal","UnityServicesInitializer","CreateStaticInstance"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[["Unity","Services","Core","Environments","Client","Http","JsonHelpers","RegisterTypesForAOT"]],[["Unity","Services","Core","UnityThreadUtils","CaptureUnityThreadInfo"],["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

