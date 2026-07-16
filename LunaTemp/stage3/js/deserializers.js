var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i650 = root || request.c( 'UnityEngine.JointSpring' )
  var i651 = data
  i650.spring = i651[0]
  i650.damper = i651[1]
  i650.targetPosition = i651[2]
  return i650
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i652 = root || request.c( 'UnityEngine.JointMotor' )
  var i653 = data
  i652.m_TargetVelocity = i653[0]
  i652.m_Force = i653[1]
  i652.m_FreeSpin = i653[2]
  return i652
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i654 = root || request.c( 'UnityEngine.JointLimits' )
  var i655 = data
  i654.m_Min = i655[0]
  i654.m_Max = i655[1]
  i654.m_Bounciness = i655[2]
  i654.m_BounceMinVelocity = i655[3]
  i654.m_ContactDistance = i655[4]
  i654.minBounce = i655[5]
  i654.maxBounce = i655[6]
  return i654
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i656 = root || request.c( 'UnityEngine.JointDrive' )
  var i657 = data
  i656.m_PositionSpring = i657[0]
  i656.m_PositionDamper = i657[1]
  i656.m_MaximumForce = i657[2]
  i656.m_UseAcceleration = i657[3]
  return i656
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i658 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i659 = data
  i658.m_Spring = i659[0]
  i658.m_Damper = i659[1]
  return i658
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i660 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i661 = data
  i660.m_Limit = i661[0]
  i660.m_Bounciness = i661[1]
  i660.m_ContactDistance = i661[2]
  return i660
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i662 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i663 = data
  i662.m_ExtremumSlip = i663[0]
  i662.m_ExtremumValue = i663[1]
  i662.m_AsymptoteSlip = i663[2]
  i662.m_AsymptoteValue = i663[3]
  i662.m_Stiffness = i663[4]
  return i662
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i664 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i665 = data
  i664.m_LowerAngle = i665[0]
  i664.m_UpperAngle = i665[1]
  return i664
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i666 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i667 = data
  i666.m_MotorSpeed = i667[0]
  i666.m_MaximumMotorTorque = i667[1]
  return i666
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i668 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i669 = data
  i668.m_DampingRatio = i669[0]
  i668.m_Frequency = i669[1]
  i668.m_Angle = i669[2]
  return i668
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i670 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i671 = data
  i670.m_LowerTranslation = i671[0]
  i670.m_UpperTranslation = i671[1]
  return i670
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i672 = root || new pc.UnityMaterial()
  var i673 = data
  i672.name = i673[0]
  request.r(i673[1], i673[2], 0, i672, 'shader')
  i672.renderQueue = i673[3]
  i672.enableInstancing = !!i673[4]
  var i675 = i673[5]
  var i674 = []
  for(var i = 0; i < i675.length; i += 1) {
    i674.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i675[i + 0]) );
  }
  i672.floatParameters = i674
  var i677 = i673[6]
  var i676 = []
  for(var i = 0; i < i677.length; i += 1) {
    i676.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i677[i + 0]) );
  }
  i672.colorParameters = i676
  var i679 = i673[7]
  var i678 = []
  for(var i = 0; i < i679.length; i += 1) {
    i678.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i679[i + 0]) );
  }
  i672.vectorParameters = i678
  var i681 = i673[8]
  var i680 = []
  for(var i = 0; i < i681.length; i += 1) {
    i680.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i681[i + 0]) );
  }
  i672.textureParameters = i680
  var i683 = i673[9]
  var i682 = []
  for(var i = 0; i < i683.length; i += 1) {
    i682.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i683[i + 0]) );
  }
  i672.materialFlags = i682
  return i672
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i686 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i687 = data
  i686.name = i687[0]
  i686.value = i687[1]
  return i686
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i690 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i691 = data
  i690.name = i691[0]
  i690.value = new pc.Color(i691[1], i691[2], i691[3], i691[4])
  return i690
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i694 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i695 = data
  i694.name = i695[0]
  i694.value = new pc.Vec4( i695[1], i695[2], i695[3], i695[4] )
  return i694
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i698 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i699 = data
  i698.name = i699[0]
  request.r(i699[1], i699[2], 0, i698, 'value')
  return i698
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i702 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i703 = data
  i702.name = i703[0]
  i702.enabled = !!i703[1]
  return i702
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i704 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i705 = data
  i704.name = i705[0]
  i704.width = i705[1]
  i704.height = i705[2]
  i704.mipmapCount = i705[3]
  i704.anisoLevel = i705[4]
  i704.filterMode = i705[5]
  i704.hdr = !!i705[6]
  i704.format = i705[7]
  i704.wrapMode = i705[8]
  i704.alphaIsTransparency = !!i705[9]
  i704.alphaSource = i705[10]
  i704.graphicsFormat = i705[11]
  i704.sRGBTexture = !!i705[12]
  i704.desiredColorSpace = i705[13]
  i704.wrapU = i705[14]
  i704.wrapV = i705[15]
  return i704
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i706 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i707 = data
  i706.name = i707[0]
  i706.halfPrecision = !!i707[1]
  i706.useSimplification = !!i707[2]
  i706.useUInt32IndexFormat = !!i707[3]
  i706.vertexCount = i707[4]
  i706.aabb = i707[5]
  var i709 = i707[6]
  var i708 = []
  for(var i = 0; i < i709.length; i += 1) {
    i708.push( !!i709[i + 0] );
  }
  i706.streams = i708
  i706.vertices = i707[7]
  var i711 = i707[8]
  var i710 = []
  for(var i = 0; i < i711.length; i += 1) {
    i710.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i711[i + 0]) );
  }
  i706.subMeshes = i710
  var i713 = i707[9]
  var i712 = []
  for(var i = 0; i < i713.length; i += 16) {
    i712.push( new pc.Mat4().setData(i713[i + 0], i713[i + 1], i713[i + 2], i713[i + 3],  i713[i + 4], i713[i + 5], i713[i + 6], i713[i + 7],  i713[i + 8], i713[i + 9], i713[i + 10], i713[i + 11],  i713[i + 12], i713[i + 13], i713[i + 14], i713[i + 15]) );
  }
  i706.bindposes = i712
  var i715 = i707[10]
  var i714 = []
  for(var i = 0; i < i715.length; i += 1) {
    i714.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i715[i + 0]) );
  }
  i706.blendShapes = i714
  return i706
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i720 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i721 = data
  i720.triangles = i721[0]
  return i720
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i726 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i727 = data
  i726.name = i727[0]
  var i729 = i727[1]
  var i728 = []
  for(var i = 0; i < i729.length; i += 1) {
    i728.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i729[i + 0]) );
  }
  i726.frames = i728
  return i726
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i730 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i731 = data
  i730.name = i731[0]
  i730.index = i731[1]
  i730.startup = !!i731[2]
  return i730
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i732 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i733 = data
  i732.aspect = i733[0]
  i732.orthographic = !!i733[1]
  i732.orthographicSize = i733[2]
  i732.backgroundColor = new pc.Color(i733[3], i733[4], i733[5], i733[6])
  i732.nearClipPlane = i733[7]
  i732.farClipPlane = i733[8]
  i732.fieldOfView = i733[9]
  i732.depth = i733[10]
  i732.clearFlags = i733[11]
  i732.cullingMask = i733[12]
  i732.rect = i733[13]
  request.r(i733[14], i733[15], 0, i732, 'targetTexture')
  i732.usePhysicalProperties = !!i733[16]
  i732.focalLength = i733[17]
  i732.sensorSize = new pc.Vec2( i733[18], i733[19] )
  i732.lensShift = new pc.Vec2( i733[20], i733[21] )
  i732.gateFit = i733[22]
  i732.commandBufferCount = i733[23]
  i732.cameraType = i733[24]
  i732.enabled = !!i733[25]
  return i732
}

Deserializers["CameraFollow2D"] = function (request, data, root) {
  var i734 = root || request.c( 'CameraFollow2D' )
  var i735 = data
  request.r(i735[0], i735[1], 0, i734, 'target')
  i734.smoothSpeed = i735[2]
  i734.offset = new pc.Vec3( i735[3], i735[4], i735[5] )
  i734.followY = !!i735[6]
  return i734
}

Deserializers["AutoCameraFit"] = function (request, data, root) {
  var i736 = root || request.c( 'AutoCameraFit' )
  var i737 = data
  request.r(i737[0], i737[1], 0, i736, 'tallScreenObject')
  i736.tallScreenRatioThreshold = i737[2]
  i736.tallScreenYOffset = i737[3]
  request.r(i737[4], i737[5], 0, i736, 'canvasBtn')
  request.r(i737[6], i737[7], 0, i736, 'targetArea')
  i736.paddingLandscape = i737[8]
  i736.paddingPortrait = i737[9]
  i736.extraPaddingSmallScreen = i737[10]
  i736.smallScreenThreshold = i737[11]
  i736.autoUpdateOnResize = !!i737[12]
  i736.adjustInEditMode = !!i737[13]
  return i736
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i738 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i739 = data
  i738.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i739[0], i738.main)
  i738.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i739[1], i738.colorBySpeed)
  i738.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i739[2], i738.colorOverLifetime)
  i738.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i739[3], i738.emission)
  i738.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i739[4], i738.rotationBySpeed)
  i738.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i739[5], i738.rotationOverLifetime)
  i738.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i739[6], i738.shape)
  i738.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i739[7], i738.sizeBySpeed)
  i738.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i739[8], i738.sizeOverLifetime)
  i738.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i739[9], i738.textureSheetAnimation)
  i738.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i739[10], i738.velocityOverLifetime)
  i738.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i739[11], i738.noise)
  i738.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i739[12], i738.inheritVelocity)
  i738.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i739[13], i738.forceOverLifetime)
  i738.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i739[14], i738.limitVelocityOverLifetime)
  i738.useAutoRandomSeed = !!i739[15]
  i738.randomSeed = i739[16]
  return i738
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i740 = root || new pc.ParticleSystemMain()
  var i741 = data
  i740.duration = i741[0]
  i740.loop = !!i741[1]
  i740.prewarm = !!i741[2]
  i740.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i741[3], i740.startDelay)
  i740.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i741[4], i740.startLifetime)
  i740.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i741[5], i740.startSpeed)
  i740.startSize3D = !!i741[6]
  i740.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i741[7], i740.startSizeX)
  i740.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i741[8], i740.startSizeY)
  i740.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i741[9], i740.startSizeZ)
  i740.startRotation3D = !!i741[10]
  i740.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i741[11], i740.startRotationX)
  i740.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i741[12], i740.startRotationY)
  i740.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i741[13], i740.startRotationZ)
  i740.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i741[14], i740.startColor)
  i740.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i741[15], i740.gravityModifier)
  i740.simulationSpace = i741[16]
  request.r(i741[17], i741[18], 0, i740, 'customSimulationSpace')
  i740.simulationSpeed = i741[19]
  i740.useUnscaledTime = !!i741[20]
  i740.scalingMode = i741[21]
  i740.playOnAwake = !!i741[22]
  i740.maxParticles = i741[23]
  i740.emitterVelocityMode = i741[24]
  i740.stopAction = i741[25]
  return i740
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i742 = root || new pc.MinMaxCurve()
  var i743 = data
  i742.mode = i743[0]
  i742.curveMin = new pc.AnimationCurve( { keys_flow: i743[1] } )
  i742.curveMax = new pc.AnimationCurve( { keys_flow: i743[2] } )
  i742.curveMultiplier = i743[3]
  i742.constantMin = i743[4]
  i742.constantMax = i743[5]
  return i742
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i744 = root || new pc.MinMaxGradient()
  var i745 = data
  i744.mode = i745[0]
  i744.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i745[1], i744.gradientMin)
  i744.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i745[2], i744.gradientMax)
  i744.colorMin = new pc.Color(i745[3], i745[4], i745[5], i745[6])
  i744.colorMax = new pc.Color(i745[7], i745[8], i745[9], i745[10])
  return i744
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i746 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i747 = data
  i746.mode = i747[0]
  var i749 = i747[1]
  var i748 = []
  for(var i = 0; i < i749.length; i += 1) {
    i748.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i749[i + 0]) );
  }
  i746.colorKeys = i748
  var i751 = i747[2]
  var i750 = []
  for(var i = 0; i < i751.length; i += 1) {
    i750.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i751[i + 0]) );
  }
  i746.alphaKeys = i750
  return i746
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i752 = root || new pc.ParticleSystemColorBySpeed()
  var i753 = data
  i752.enabled = !!i753[0]
  i752.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i753[1], i752.color)
  i752.range = new pc.Vec2( i753[2], i753[3] )
  return i752
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i756 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i757 = data
  i756.color = new pc.Color(i757[0], i757[1], i757[2], i757[3])
  i756.time = i757[4]
  return i756
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i760 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i761 = data
  i760.alpha = i761[0]
  i760.time = i761[1]
  return i760
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i762 = root || new pc.ParticleSystemColorOverLifetime()
  var i763 = data
  i762.enabled = !!i763[0]
  i762.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i763[1], i762.color)
  return i762
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i764 = root || new pc.ParticleSystemEmitter()
  var i765 = data
  i764.enabled = !!i765[0]
  i764.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i765[1], i764.rateOverTime)
  i764.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i765[2], i764.rateOverDistance)
  var i767 = i765[3]
  var i766 = []
  for(var i = 0; i < i767.length; i += 1) {
    i766.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i767[i + 0]) );
  }
  i764.bursts = i766
  return i764
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i770 = root || new pc.ParticleSystemBurst()
  var i771 = data
  i770.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i771[0], i770.count)
  i770.cycleCount = i771[1]
  i770.minCount = i771[2]
  i770.maxCount = i771[3]
  i770.repeatInterval = i771[4]
  i770.time = i771[5]
  return i770
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i772 = root || new pc.ParticleSystemRotationBySpeed()
  var i773 = data
  i772.enabled = !!i773[0]
  i772.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i773[1], i772.x)
  i772.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i773[2], i772.y)
  i772.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i773[3], i772.z)
  i772.separateAxes = !!i773[4]
  i772.range = new pc.Vec2( i773[5], i773[6] )
  return i772
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i774 = root || new pc.ParticleSystemRotationOverLifetime()
  var i775 = data
  i774.enabled = !!i775[0]
  i774.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i775[1], i774.x)
  i774.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i775[2], i774.y)
  i774.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i775[3], i774.z)
  i774.separateAxes = !!i775[4]
  return i774
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i776 = root || new pc.ParticleSystemShape()
  var i777 = data
  i776.enabled = !!i777[0]
  i776.shapeType = i777[1]
  i776.randomDirectionAmount = i777[2]
  i776.sphericalDirectionAmount = i777[3]
  i776.randomPositionAmount = i777[4]
  i776.alignToDirection = !!i777[5]
  i776.radius = i777[6]
  i776.radiusMode = i777[7]
  i776.radiusSpread = i777[8]
  i776.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i777[9], i776.radiusSpeed)
  i776.radiusThickness = i777[10]
  i776.angle = i777[11]
  i776.length = i777[12]
  i776.boxThickness = new pc.Vec3( i777[13], i777[14], i777[15] )
  i776.meshShapeType = i777[16]
  request.r(i777[17], i777[18], 0, i776, 'mesh')
  request.r(i777[19], i777[20], 0, i776, 'meshRenderer')
  request.r(i777[21], i777[22], 0, i776, 'skinnedMeshRenderer')
  i776.useMeshMaterialIndex = !!i777[23]
  i776.meshMaterialIndex = i777[24]
  i776.useMeshColors = !!i777[25]
  i776.normalOffset = i777[26]
  i776.arc = i777[27]
  i776.arcMode = i777[28]
  i776.arcSpread = i777[29]
  i776.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i777[30], i776.arcSpeed)
  i776.donutRadius = i777[31]
  i776.position = new pc.Vec3( i777[32], i777[33], i777[34] )
  i776.rotation = new pc.Vec3( i777[35], i777[36], i777[37] )
  i776.scale = new pc.Vec3( i777[38], i777[39], i777[40] )
  return i776
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i778 = root || new pc.ParticleSystemSizeBySpeed()
  var i779 = data
  i778.enabled = !!i779[0]
  i778.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i779[1], i778.x)
  i778.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i779[2], i778.y)
  i778.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i779[3], i778.z)
  i778.separateAxes = !!i779[4]
  i778.range = new pc.Vec2( i779[5], i779[6] )
  return i778
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i780 = root || new pc.ParticleSystemSizeOverLifetime()
  var i781 = data
  i780.enabled = !!i781[0]
  i780.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i781[1], i780.x)
  i780.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i781[2], i780.y)
  i780.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i781[3], i780.z)
  i780.separateAxes = !!i781[4]
  return i780
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i782 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i783 = data
  i782.enabled = !!i783[0]
  i782.mode = i783[1]
  i782.animation = i783[2]
  i782.numTilesX = i783[3]
  i782.numTilesY = i783[4]
  i782.useRandomRow = !!i783[5]
  i782.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i783[6], i782.frameOverTime)
  i782.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i783[7], i782.startFrame)
  i782.cycleCount = i783[8]
  i782.rowIndex = i783[9]
  i782.flipU = i783[10]
  i782.flipV = i783[11]
  i782.spriteCount = i783[12]
  var i785 = i783[13]
  var i784 = []
  for(var i = 0; i < i785.length; i += 2) {
  request.r(i785[i + 0], i785[i + 1], 2, i784, '')
  }
  i782.sprites = i784
  return i782
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i788 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i789 = data
  i788.enabled = !!i789[0]
  i788.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i789[1], i788.x)
  i788.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i789[2], i788.y)
  i788.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i789[3], i788.z)
  i788.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i789[4], i788.radial)
  i788.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i789[5], i788.speedModifier)
  i788.space = i789[6]
  i788.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i789[7], i788.orbitalX)
  i788.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i789[8], i788.orbitalY)
  i788.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i789[9], i788.orbitalZ)
  i788.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i789[10], i788.orbitalOffsetX)
  i788.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i789[11], i788.orbitalOffsetY)
  i788.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i789[12], i788.orbitalOffsetZ)
  return i788
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i790 = root || new pc.ParticleSystemNoise()
  var i791 = data
  i790.enabled = !!i791[0]
  i790.separateAxes = !!i791[1]
  i790.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i791[2], i790.strengthX)
  i790.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i791[3], i790.strengthY)
  i790.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i791[4], i790.strengthZ)
  i790.frequency = i791[5]
  i790.damping = !!i791[6]
  i790.octaveCount = i791[7]
  i790.octaveMultiplier = i791[8]
  i790.octaveScale = i791[9]
  i790.quality = i791[10]
  i790.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i791[11], i790.scrollSpeed)
  i790.scrollSpeedMultiplier = i791[12]
  i790.remapEnabled = !!i791[13]
  i790.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i791[14], i790.remapX)
  i790.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i791[15], i790.remapY)
  i790.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i791[16], i790.remapZ)
  i790.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i791[17], i790.positionAmount)
  i790.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i791[18], i790.rotationAmount)
  i790.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i791[19], i790.sizeAmount)
  return i790
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i792 = root || new pc.ParticleSystemInheritVelocity()
  var i793 = data
  i792.enabled = !!i793[0]
  i792.mode = i793[1]
  i792.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i793[2], i792.curve)
  return i792
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i794 = root || new pc.ParticleSystemForceOverLifetime()
  var i795 = data
  i794.enabled = !!i795[0]
  i794.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i795[1], i794.x)
  i794.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i795[2], i794.y)
  i794.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i795[3], i794.z)
  i794.space = i795[4]
  i794.randomized = !!i795[5]
  return i794
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i796 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i797 = data
  i796.enabled = !!i797[0]
  i796.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i797[1], i796.limit)
  i796.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i797[2], i796.limitX)
  i796.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i797[3], i796.limitY)
  i796.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i797[4], i796.limitZ)
  i796.dampen = i797[5]
  i796.separateAxes = !!i797[6]
  i796.space = i797[7]
  i796.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i797[8], i796.drag)
  i796.multiplyDragByParticleSize = !!i797[9]
  i796.multiplyDragByParticleVelocity = !!i797[10]
  return i796
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i798 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i799 = data
  request.r(i799[0], i799[1], 0, i798, 'mesh')
  i798.meshCount = i799[2]
  i798.activeVertexStreamsCount = i799[3]
  i798.alignment = i799[4]
  i798.renderMode = i799[5]
  i798.sortMode = i799[6]
  i798.lengthScale = i799[7]
  i798.velocityScale = i799[8]
  i798.cameraVelocityScale = i799[9]
  i798.normalDirection = i799[10]
  i798.sortingFudge = i799[11]
  i798.minParticleSize = i799[12]
  i798.maxParticleSize = i799[13]
  i798.pivot = new pc.Vec3( i799[14], i799[15], i799[16] )
  request.r(i799[17], i799[18], 0, i798, 'trailMaterial')
  i798.applyActiveColorSpace = !!i799[19]
  i798.enabled = !!i799[20]
  request.r(i799[21], i799[22], 0, i798, 'sharedMaterial')
  var i801 = i799[23]
  var i800 = []
  for(var i = 0; i < i801.length; i += 2) {
  request.r(i801[i + 0], i801[i + 1], 2, i800, '')
  }
  i798.sharedMaterials = i800
  i798.receiveShadows = !!i799[24]
  i798.shadowCastingMode = i799[25]
  i798.sortingLayerID = i799[26]
  i798.sortingOrder = i799[27]
  i798.lightmapIndex = i799[28]
  i798.lightmapSceneIndex = i799[29]
  i798.lightmapScaleOffset = new pc.Vec4( i799[30], i799[31], i799[32], i799[33] )
  i798.lightProbeUsage = i799[34]
  i798.reflectionProbeUsage = i799[35]
  return i798
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i804 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i805 = data
  i804.name = i805[0]
  i804.tagId = i805[1]
  i804.enabled = !!i805[2]
  i804.isStatic = !!i805[3]
  i804.layer = i805[4]
  return i804
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i806 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i807 = data
  i806.color = new pc.Color(i807[0], i807[1], i807[2], i807[3])
  request.r(i807[4], i807[5], 0, i806, 'sprite')
  i806.flipX = !!i807[6]
  i806.flipY = !!i807[7]
  i806.drawMode = i807[8]
  i806.size = new pc.Vec2( i807[9], i807[10] )
  i806.tileMode = i807[11]
  i806.adaptiveModeThreshold = i807[12]
  i806.maskInteraction = i807[13]
  i806.spriteSortPoint = i807[14]
  i806.enabled = !!i807[15]
  request.r(i807[16], i807[17], 0, i806, 'sharedMaterial')
  var i809 = i807[18]
  var i808 = []
  for(var i = 0; i < i809.length; i += 2) {
  request.r(i809[i + 0], i809[i + 1], 2, i808, '')
  }
  i806.sharedMaterials = i808
  i806.receiveShadows = !!i807[19]
  i806.shadowCastingMode = i807[20]
  i806.sortingLayerID = i807[21]
  i806.sortingOrder = i807[22]
  i806.lightmapIndex = i807[23]
  i806.lightmapSceneIndex = i807[24]
  i806.lightmapScaleOffset = new pc.Vec4( i807[25], i807[26], i807[27], i807[28] )
  i806.lightProbeUsage = i807[29]
  i806.reflectionProbeUsage = i807[30]
  return i806
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i810 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i811 = data
  request.r(i811[0], i811[1], 0, i810, 'animatorController')
  request.r(i811[2], i811[3], 0, i810, 'avatar')
  i810.updateMode = i811[4]
  i810.hasTransformHierarchy = !!i811[5]
  i810.applyRootMotion = !!i811[6]
  var i813 = i811[7]
  var i812 = []
  for(var i = 0; i < i813.length; i += 2) {
  request.r(i813[i + 0], i813[i + 1], 2, i812, '')
  }
  i810.humanBones = i812
  i810.enabled = !!i811[8]
  return i810
}

Deserializers["MoveBetweenPoints"] = function (request, data, root) {
  var i816 = root || request.c( 'MoveBetweenPoints' )
  var i817 = data
  request.r(i817[0], i817[1], 0, i816, 'pointA')
  request.r(i817[2], i817[3], 0, i816, 'pointB')
  i816.duration = i817[4]
  return i816
}

Deserializers["ScreenHeightPositionAnchor"] = function (request, data, root) {
  var i818 = root || request.c( 'ScreenHeightPositionAnchor' )
  var i819 = data
  request.r(i819[0], i819[1], 0, i818, 'anchorPoint')
  request.r(i819[2], i819[3], 0, i818, 'targetCamera')
  i818.viewportYRatio = i819[4]
  i818.alignOnStart = !!i819[5]
  i818.alignOnEnable = !!i819[6]
  i818.realignOnScreenSizeChanged = !!i819[7]
  i818.drawGizmos = !!i819[8]
  i818.targetLineColor = new pc.Color(i819[9], i819[10], i819[11], i819[12])
  i818.anchorColor = new pc.Color(i819[13], i819[14], i819[15], i819[16])
  return i818
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i820 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i821 = data
  i820.usedByComposite = !!i821[0]
  i820.autoTiling = !!i821[1]
  i820.size = new pc.Vec2( i821[2], i821[3] )
  i820.edgeRadius = i821[4]
  i820.enabled = !!i821[5]
  i820.isTrigger = !!i821[6]
  i820.usedByEffector = !!i821[7]
  i820.density = i821[8]
  i820.offset = new pc.Vec2( i821[9], i821[10] )
  request.r(i821[11], i821[12], 0, i820, 'material')
  return i820
}

Deserializers["ClickToStore"] = function (request, data, root) {
  var i822 = root || request.c( 'ClickToStore' )
  var i823 = data
  return i822
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i824 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i825 = data
  i824.pivot = new pc.Vec2( i825[0], i825[1] )
  i824.anchorMin = new pc.Vec2( i825[2], i825[3] )
  i824.anchorMax = new pc.Vec2( i825[4], i825[5] )
  i824.sizeDelta = new pc.Vec2( i825[6], i825[7] )
  i824.anchoredPosition3D = new pc.Vec3( i825[8], i825[9], i825[10] )
  i824.rotation = new pc.Quat(i825[11], i825[12], i825[13], i825[14])
  i824.scale = new pc.Vec3( i825[15], i825[16], i825[17] )
  return i824
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i826 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i827 = data
  request.r(i827[0], i827[1], 0, i826, 'additionalVertexStreams')
  i826.enabled = !!i827[2]
  request.r(i827[3], i827[4], 0, i826, 'sharedMaterial')
  var i829 = i827[5]
  var i828 = []
  for(var i = 0; i < i829.length; i += 2) {
  request.r(i829[i + 0], i829[i + 1], 2, i828, '')
  }
  i826.sharedMaterials = i828
  i826.receiveShadows = !!i827[6]
  i826.shadowCastingMode = i827[7]
  i826.sortingLayerID = i827[8]
  i826.sortingOrder = i827[9]
  i826.lightmapIndex = i827[10]
  i826.lightmapSceneIndex = i827[11]
  i826.lightmapScaleOffset = new pc.Vec4( i827[12], i827[13], i827[14], i827[15] )
  i826.lightProbeUsage = i827[16]
  i826.reflectionProbeUsage = i827[17]
  return i826
}

Deserializers["TMPro.TextMeshPro"] = function (request, data, root) {
  var i830 = root || request.c( 'TMPro.TextMeshPro' )
  var i831 = data
  i830._SortingLayer = i831[0]
  i830._SortingLayerID = i831[1]
  i830._SortingOrder = i831[2]
  i830.m_hasFontAssetChanged = !!i831[3]
  request.r(i831[4], i831[5], 0, i830, 'm_renderer')
  i830.m_maskType = i831[6]
  i830.m_text = i831[7]
  i830.m_isRightToLeft = !!i831[8]
  request.r(i831[9], i831[10], 0, i830, 'm_fontAsset')
  request.r(i831[11], i831[12], 0, i830, 'm_sharedMaterial')
  var i833 = i831[13]
  var i832 = []
  for(var i = 0; i < i833.length; i += 2) {
  request.r(i833[i + 0], i833[i + 1], 2, i832, '')
  }
  i830.m_fontSharedMaterials = i832
  request.r(i831[14], i831[15], 0, i830, 'm_fontMaterial')
  var i835 = i831[16]
  var i834 = []
  for(var i = 0; i < i835.length; i += 2) {
  request.r(i835[i + 0], i835[i + 1], 2, i834, '')
  }
  i830.m_fontMaterials = i834
  i830.m_fontColor32 = UnityEngine.Color32.ConstructColor(i831[17], i831[18], i831[19], i831[20])
  i830.m_fontColor = new pc.Color(i831[21], i831[22], i831[23], i831[24])
  i830.m_enableVertexGradient = !!i831[25]
  i830.m_colorMode = i831[26]
  i830.m_fontColorGradient = request.d('TMPro.VertexGradient', i831[27], i830.m_fontColorGradient)
  request.r(i831[28], i831[29], 0, i830, 'm_fontColorGradientPreset')
  request.r(i831[30], i831[31], 0, i830, 'm_spriteAsset')
  i830.m_tintAllSprites = !!i831[32]
  request.r(i831[33], i831[34], 0, i830, 'm_StyleSheet')
  i830.m_TextStyleHashCode = i831[35]
  i830.m_overrideHtmlColors = !!i831[36]
  i830.m_faceColor = UnityEngine.Color32.ConstructColor(i831[37], i831[38], i831[39], i831[40])
  i830.m_fontSize = i831[41]
  i830.m_fontSizeBase = i831[42]
  i830.m_fontWeight = i831[43]
  i830.m_enableAutoSizing = !!i831[44]
  i830.m_fontSizeMin = i831[45]
  i830.m_fontSizeMax = i831[46]
  i830.m_fontStyle = i831[47]
  i830.m_HorizontalAlignment = i831[48]
  i830.m_VerticalAlignment = i831[49]
  i830.m_textAlignment = i831[50]
  i830.m_characterSpacing = i831[51]
  i830.m_wordSpacing = i831[52]
  i830.m_lineSpacing = i831[53]
  i830.m_lineSpacingMax = i831[54]
  i830.m_paragraphSpacing = i831[55]
  i830.m_charWidthMaxAdj = i831[56]
  i830.m_TextWrappingMode = i831[57]
  i830.m_wordWrappingRatios = i831[58]
  i830.m_overflowMode = i831[59]
  request.r(i831[60], i831[61], 0, i830, 'm_linkedTextComponent')
  request.r(i831[62], i831[63], 0, i830, 'parentLinkedComponent')
  i830.m_enableKerning = !!i831[64]
  var i837 = i831[65]
  var i836 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i837.length; i += 1) {
    i836.add(i837[i + 0]);
  }
  i830.m_ActiveFontFeatures = i836
  i830.m_enableExtraPadding = !!i831[66]
  i830.checkPaddingRequired = !!i831[67]
  i830.m_isRichText = !!i831[68]
  i830.m_parseCtrlCharacters = !!i831[69]
  i830.m_isOrthographic = !!i831[70]
  i830.m_isCullingEnabled = !!i831[71]
  i830.m_horizontalMapping = i831[72]
  i830.m_verticalMapping = i831[73]
  i830.m_uvLineOffset = i831[74]
  i830.m_geometrySortingOrder = i831[75]
  i830.m_IsTextObjectScaleStatic = !!i831[76]
  i830.m_VertexBufferAutoSizeReduction = !!i831[77]
  i830.m_useMaxVisibleDescender = !!i831[78]
  i830.m_pageToDisplay = i831[79]
  i830.m_margin = new pc.Vec4( i831[80], i831[81], i831[82], i831[83] )
  i830.m_isUsingLegacyAnimationComponent = !!i831[84]
  i830.m_isVolumetricText = !!i831[85]
  request.r(i831[86], i831[87], 0, i830, 'm_Material')
  i830.m_EmojiFallbackSupport = !!i831[88]
  i830.m_Maskable = !!i831[89]
  i830.m_Color = new pc.Color(i831[90], i831[91], i831[92], i831[93])
  i830.m_RaycastTarget = !!i831[94]
  i830.m_RaycastPadding = new pc.Vec4( i831[95], i831[96], i831[97], i831[98] )
  return i830
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i838 = root || request.c( 'TMPro.VertexGradient' )
  var i839 = data
  i838.topLeft = new pc.Color(i839[0], i839[1], i839[2], i839[3])
  i838.topRight = new pc.Color(i839[4], i839[5], i839[6], i839[7])
  i838.bottomLeft = new pc.Color(i839[8], i839[9], i839[10], i839[11])
  i838.bottomRight = new pc.Color(i839[12], i839[13], i839[14], i839[15])
  return i838
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i842 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i843 = data
  request.r(i843[0], i843[1], 0, i842, 'sharedMesh')
  return i842
}

Deserializers["PlayerCardUIManager"] = function (request, data, root) {
  var i844 = root || request.c( 'PlayerCardUIManager' )
  var i845 = data
  request.r(i845[0], i845[1], 0, i844, 'cardPanel')
  var i847 = i845[2]
  var i846 = []
  for(var i = 0; i < i847.length; i += 2) {
  request.r(i847[i + 0], i847[i + 1], 2, i846, '')
  }
  i844.extraObjectsToActivate = i846
  i844.waitTime = i845[3]
  var i849 = i845[4]
  var i848 = []
  for(var i = 0; i < i849.length; i += 2) {
  request.r(i849[i + 0], i849[i + 1], 2, i848, '')
  }
  i844.objectsToTurnOnAfterWait = i848
  var i851 = i845[5]
  var i850 = []
  for(var i = 0; i < i851.length; i += 2) {
  request.r(i851[i + 0], i851[i + 1], 2, i850, '')
  }
  i844.objectsToTurnOffAfterWait = i850
  request.r(i845[6], i845[7], 0, i844, 'nationalityText')
  request.r(i845[8], i845[9], 0, i844, 'playerImage')
  request.r(i845[10], i845[11], 0, i844, 'flagImage')
  return i844
}

Deserializers["Ply_SoundManager"] = function (request, data, root) {
  var i854 = root || request.c( 'Ply_SoundManager' )
  var i855 = data
  i854.fxAudio = request.d('FxAudio', i855[0], i854.fxAudio)
  request.r(i855[1], i855[2], 0, i854, 'bgm1')
  return i854
}

Deserializers["FxAudio"] = function (request, data, root) {
  var i856 = root || request.c( 'FxAudio' )
  var i857 = data
  i856.ClickBox = request.d('SoundData', i857[0], i856.ClickBox)
  i856.Happy = request.d('SoundData', i857[1], i856.Happy)
  i856.Wrong = request.d('SoundData', i857[2], i856.Wrong)
  i856.Spray = request.d('SoundData', i857[3], i856.Spray)
  i856.Brush = request.d('SoundData', i857[4], i856.Brush)
  return i856
}

Deserializers["SoundData"] = function (request, data, root) {
  var i858 = root || request.c( 'SoundData' )
  var i859 = data
  request.r(i859[0], i859[1], 0, i858, 'clip')
  i858.repeatCount = i859[2]
  return i858
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i860 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i861 = data
  request.r(i861[0], i861[1], 0, i860, 'clip')
  request.r(i861[2], i861[3], 0, i860, 'outputAudioMixerGroup')
  i860.playOnAwake = !!i861[4]
  i860.loop = !!i861[5]
  i860.time = i861[6]
  i860.volume = i861[7]
  i860.pitch = i861[8]
  i860.enabled = !!i861[9]
  return i860
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i862 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i863 = data
  i862.planeDistance = i863[0]
  i862.referencePixelsPerUnit = i863[1]
  i862.isFallbackOverlay = !!i863[2]
  i862.renderMode = i863[3]
  i862.renderOrder = i863[4]
  i862.sortingLayerName = i863[5]
  i862.sortingOrder = i863[6]
  i862.scaleFactor = i863[7]
  request.r(i863[8], i863[9], 0, i862, 'worldCamera')
  i862.overrideSorting = !!i863[10]
  i862.pixelPerfect = !!i863[11]
  i862.targetDisplay = i863[12]
  i862.overridePixelPerfect = !!i863[13]
  i862.enabled = !!i863[14]
  return i862
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i864 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i865 = data
  i864.m_UiScaleMode = i865[0]
  i864.m_ReferencePixelsPerUnit = i865[1]
  i864.m_ScaleFactor = i865[2]
  i864.m_ReferenceResolution = new pc.Vec2( i865[3], i865[4] )
  i864.m_ScreenMatchMode = i865[5]
  i864.m_MatchWidthOrHeight = i865[6]
  i864.m_PhysicalUnit = i865[7]
  i864.m_FallbackScreenDPI = i865[8]
  i864.m_DefaultSpriteDPI = i865[9]
  i864.m_DynamicPixelsPerUnit = i865[10]
  i864.m_PresetInfoIsWorld = !!i865[11]
  return i864
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i866 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i867 = data
  i866.m_IgnoreReversedGraphics = !!i867[0]
  i866.m_BlockingObjects = i867[1]
  i866.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i867[2] )
  return i866
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i868 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i869 = data
  i868.cullTransparentMesh = !!i869[0]
  return i868
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i870 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i871 = data
  i870.m_hasFontAssetChanged = !!i871[0]
  request.r(i871[1], i871[2], 0, i870, 'm_baseMaterial')
  i870.m_maskOffset = new pc.Vec4( i871[3], i871[4], i871[5], i871[6] )
  i870.m_text = i871[7]
  i870.m_isRightToLeft = !!i871[8]
  request.r(i871[9], i871[10], 0, i870, 'm_fontAsset')
  request.r(i871[11], i871[12], 0, i870, 'm_sharedMaterial')
  var i873 = i871[13]
  var i872 = []
  for(var i = 0; i < i873.length; i += 2) {
  request.r(i873[i + 0], i873[i + 1], 2, i872, '')
  }
  i870.m_fontSharedMaterials = i872
  request.r(i871[14], i871[15], 0, i870, 'm_fontMaterial')
  var i875 = i871[16]
  var i874 = []
  for(var i = 0; i < i875.length; i += 2) {
  request.r(i875[i + 0], i875[i + 1], 2, i874, '')
  }
  i870.m_fontMaterials = i874
  i870.m_fontColor32 = UnityEngine.Color32.ConstructColor(i871[17], i871[18], i871[19], i871[20])
  i870.m_fontColor = new pc.Color(i871[21], i871[22], i871[23], i871[24])
  i870.m_enableVertexGradient = !!i871[25]
  i870.m_colorMode = i871[26]
  i870.m_fontColorGradient = request.d('TMPro.VertexGradient', i871[27], i870.m_fontColorGradient)
  request.r(i871[28], i871[29], 0, i870, 'm_fontColorGradientPreset')
  request.r(i871[30], i871[31], 0, i870, 'm_spriteAsset')
  i870.m_tintAllSprites = !!i871[32]
  request.r(i871[33], i871[34], 0, i870, 'm_StyleSheet')
  i870.m_TextStyleHashCode = i871[35]
  i870.m_overrideHtmlColors = !!i871[36]
  i870.m_faceColor = UnityEngine.Color32.ConstructColor(i871[37], i871[38], i871[39], i871[40])
  i870.m_fontSize = i871[41]
  i870.m_fontSizeBase = i871[42]
  i870.m_fontWeight = i871[43]
  i870.m_enableAutoSizing = !!i871[44]
  i870.m_fontSizeMin = i871[45]
  i870.m_fontSizeMax = i871[46]
  i870.m_fontStyle = i871[47]
  i870.m_HorizontalAlignment = i871[48]
  i870.m_VerticalAlignment = i871[49]
  i870.m_textAlignment = i871[50]
  i870.m_characterSpacing = i871[51]
  i870.m_wordSpacing = i871[52]
  i870.m_lineSpacing = i871[53]
  i870.m_lineSpacingMax = i871[54]
  i870.m_paragraphSpacing = i871[55]
  i870.m_charWidthMaxAdj = i871[56]
  i870.m_TextWrappingMode = i871[57]
  i870.m_wordWrappingRatios = i871[58]
  i870.m_overflowMode = i871[59]
  request.r(i871[60], i871[61], 0, i870, 'm_linkedTextComponent')
  request.r(i871[62], i871[63], 0, i870, 'parentLinkedComponent')
  i870.m_enableKerning = !!i871[64]
  var i877 = i871[65]
  var i876 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i877.length; i += 1) {
    i876.add(i877[i + 0]);
  }
  i870.m_ActiveFontFeatures = i876
  i870.m_enableExtraPadding = !!i871[66]
  i870.checkPaddingRequired = !!i871[67]
  i870.m_isRichText = !!i871[68]
  i870.m_parseCtrlCharacters = !!i871[69]
  i870.m_isOrthographic = !!i871[70]
  i870.m_isCullingEnabled = !!i871[71]
  i870.m_horizontalMapping = i871[72]
  i870.m_verticalMapping = i871[73]
  i870.m_uvLineOffset = i871[74]
  i870.m_geometrySortingOrder = i871[75]
  i870.m_IsTextObjectScaleStatic = !!i871[76]
  i870.m_VertexBufferAutoSizeReduction = !!i871[77]
  i870.m_useMaxVisibleDescender = !!i871[78]
  i870.m_pageToDisplay = i871[79]
  i870.m_margin = new pc.Vec4( i871[80], i871[81], i871[82], i871[83] )
  i870.m_isUsingLegacyAnimationComponent = !!i871[84]
  i870.m_isVolumetricText = !!i871[85]
  request.r(i871[86], i871[87], 0, i870, 'm_Material')
  i870.m_EmojiFallbackSupport = !!i871[88]
  i870.m_Maskable = !!i871[89]
  i870.m_Color = new pc.Color(i871[90], i871[91], i871[92], i871[93])
  i870.m_RaycastTarget = !!i871[94]
  i870.m_RaycastPadding = new pc.Vec4( i871[95], i871[96], i871[97], i871[98] )
  return i870
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i878 = root || request.c( 'UnityEngine.UI.Image' )
  var i879 = data
  request.r(i879[0], i879[1], 0, i878, 'm_Sprite')
  i878.m_Type = i879[2]
  i878.m_PreserveAspect = !!i879[3]
  i878.m_FillCenter = !!i879[4]
  i878.m_FillMethod = i879[5]
  i878.m_FillAmount = i879[6]
  i878.m_FillClockwise = !!i879[7]
  i878.m_FillOrigin = i879[8]
  i878.m_UseSpriteMesh = !!i879[9]
  i878.m_PixelsPerUnitMultiplier = i879[10]
  request.r(i879[11], i879[12], 0, i878, 'm_Material')
  i878.m_Maskable = !!i879[13]
  i878.m_Color = new pc.Color(i879[14], i879[15], i879[16], i879[17])
  i878.m_RaycastTarget = !!i879[18]
  i878.m_RaycastPadding = new pc.Vec4( i879[19], i879[20], i879[21], i879[22] )
  return i878
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D"] = function (request, data, root) {
  var i880 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D' )
  var i881 = data
  i880.usedByComposite = !!i881[0]
  i880.autoTiling = !!i881[1]
  var i883 = i881[2]
  var i882 = []
  for(var i = 0; i < i883.length; i += 1) {
  var i885 = i883[i + 0]
  var i884 = []
  for(var i = 0; i < i885.length; i += 2) {
    i884.push( new pc.Vec2( i885[i + 0], i885[i + 1] ) );
  }
    i882.push( i884 );
  }
  i880.points = i882
  i880.enabled = !!i881[3]
  i880.isTrigger = !!i881[4]
  i880.usedByEffector = !!i881[5]
  i880.density = i881[6]
  i880.offset = new pc.Vec2( i881[7], i881[8] )
  request.r(i881[9], i881[10], 0, i880, 'material')
  return i880
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i892 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i893 = data
  i892.bodyType = i893[0]
  request.r(i893[1], i893[2], 0, i892, 'material')
  i892.simulated = !!i893[3]
  i892.useAutoMass = !!i893[4]
  i892.mass = i893[5]
  i892.drag = i893[6]
  i892.angularDrag = i893[7]
  i892.gravityScale = i893[8]
  i892.collisionDetectionMode = i893[9]
  i892.sleepMode = i893[10]
  i892.constraints = i893[11]
  return i892
}

Deserializers["BatStrikeController"] = function (request, data, root) {
  var i894 = root || request.c( 'BatStrikeController' )
  var i895 = data
  i894.pullSpeed = i895[0]
  i894.maxPullDistance = i895[1]
  i894.minHoldTime = i895[2]
  i894.strikeForce = i895[3]
  i894.targetTag = i895[4]
  return i894
}

Deserializers["CupCollision"] = function (request, data, root) {
  var i896 = root || request.c( 'CupCollision' )
  var i897 = data
  i896.baseTag = i897[0]
  request.r(i897[1], i897[2], 0, i896, 'objectToActivate')
  return i896
}

Deserializers["SlotTrigger"] = function (request, data, root) {
  var i898 = root || request.c( 'SlotTrigger' )
  var i899 = data
  request.r(i899[0], i899[1], 0, i898, 'cardData')
  i898.targetTag = i899[2]
  request.r(i899[3], i899[4], 0, i898, 'yAnchor')
  i898.moveSpeed = i899[5]
  request.r(i899[6], i899[7], 0, i898, 'objectToMoveDown')
  i898.targetScreenYRatio = i899[8]
  return i898
}

Deserializers["HideOnFirstClick"] = function (request, data, root) {
  var i900 = root || request.c( 'HideOnFirstClick' )
  var i901 = data
  request.r(i901[0], i901[1], 0, i900, 'objectToHide')
  return i900
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i902 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i903 = data
  request.r(i903[0], i903[1], 0, i902, 'm_FirstSelected')
  i902.m_sendNavigationEvents = !!i903[2]
  i902.m_DragThreshold = i903[3]
  return i902
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i904 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i905 = data
  i904.m_HorizontalAxis = i905[0]
  i904.m_VerticalAxis = i905[1]
  i904.m_SubmitButton = i905[2]
  i904.m_CancelButton = i905[3]
  i904.m_InputActionsPerSecond = i905[4]
  i904.m_RepeatDelay = i905[5]
  i904.m_ForceModuleActive = !!i905[6]
  i904.m_SendPointerHoverToParent = !!i905[7]
  return i904
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i906 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i907 = data
  i906.ambientIntensity = i907[0]
  i906.reflectionIntensity = i907[1]
  i906.ambientMode = i907[2]
  i906.ambientLight = new pc.Color(i907[3], i907[4], i907[5], i907[6])
  i906.ambientSkyColor = new pc.Color(i907[7], i907[8], i907[9], i907[10])
  i906.ambientGroundColor = new pc.Color(i907[11], i907[12], i907[13], i907[14])
  i906.ambientEquatorColor = new pc.Color(i907[15], i907[16], i907[17], i907[18])
  i906.fogColor = new pc.Color(i907[19], i907[20], i907[21], i907[22])
  i906.fogEndDistance = i907[23]
  i906.fogStartDistance = i907[24]
  i906.fogDensity = i907[25]
  i906.fog = !!i907[26]
  request.r(i907[27], i907[28], 0, i906, 'skybox')
  i906.fogMode = i907[29]
  var i909 = i907[30]
  var i908 = []
  for(var i = 0; i < i909.length; i += 1) {
    i908.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i909[i + 0]) );
  }
  i906.lightmaps = i908
  i906.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i907[31], i906.lightProbes)
  i906.lightmapsMode = i907[32]
  i906.mixedBakeMode = i907[33]
  i906.environmentLightingMode = i907[34]
  i906.ambientProbe = new pc.SphericalHarmonicsL2(i907[35])
  i906.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i907[36])
  i906.useReferenceAmbientProbe = !!i907[37]
  request.r(i907[38], i907[39], 0, i906, 'customReflection')
  request.r(i907[40], i907[41], 0, i906, 'defaultReflection')
  i906.defaultReflectionMode = i907[42]
  i906.defaultReflectionResolution = i907[43]
  i906.sunLightObjectId = i907[44]
  i906.pixelLightCount = i907[45]
  i906.defaultReflectionHDR = !!i907[46]
  i906.hasLightDataAsset = !!i907[47]
  i906.hasManualGenerate = !!i907[48]
  return i906
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i912 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i913 = data
  request.r(i913[0], i913[1], 0, i912, 'lightmapColor')
  request.r(i913[2], i913[3], 0, i912, 'lightmapDirection')
  request.r(i913[4], i913[5], 0, i912, 'shadowMask')
  return i912
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i914 = root || new UnityEngine.LightProbes()
  var i915 = data
  return i914
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.PhysicsMaterial2D"] = function (request, data, root) {
  var i922 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.PhysicsMaterial2D' )
  var i923 = data
  i922.name = i923[0]
  i922.bounciness = i923[1]
  i922.friction = i923[2]
  return i922
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i924 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i925 = data
  var i927 = i925[0]
  var i926 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i927.length; i += 1) {
    i926.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i927[i + 0]));
  }
  i924.ShaderCompilationErrors = i926
  i924.name = i925[1]
  i924.guid = i925[2]
  var i929 = i925[3]
  var i928 = []
  for(var i = 0; i < i929.length; i += 1) {
    i928.push( i929[i + 0] );
  }
  i924.shaderDefinedKeywords = i928
  var i931 = i925[4]
  var i930 = []
  for(var i = 0; i < i931.length; i += 1) {
    i930.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i931[i + 0]) );
  }
  i924.passes = i930
  var i933 = i925[5]
  var i932 = []
  for(var i = 0; i < i933.length; i += 1) {
    i932.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i933[i + 0]) );
  }
  i924.usePasses = i932
  var i935 = i925[6]
  var i934 = []
  for(var i = 0; i < i935.length; i += 1) {
    i934.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i935[i + 0]) );
  }
  i924.defaultParameterValues = i934
  request.r(i925[7], i925[8], 0, i924, 'unityFallbackShader')
  i924.readDepth = !!i925[9]
  i924.hasDepthOnlyPass = !!i925[10]
  i924.isCreatedByShaderGraph = !!i925[11]
  i924.disableBatching = !!i925[12]
  i924.compiled = !!i925[13]
  return i924
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i938 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i939 = data
  i938.shaderName = i939[0]
  i938.errorMessage = i939[1]
  return i938
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i944 = root || new pc.UnityShaderPass()
  var i945 = data
  i944.id = i945[0]
  i944.subShaderIndex = i945[1]
  i944.name = i945[2]
  i944.passType = i945[3]
  i944.grabPassTextureName = i945[4]
  i944.usePass = !!i945[5]
  i944.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i945[6], i944.zTest)
  i944.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i945[7], i944.zWrite)
  i944.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i945[8], i944.culling)
  i944.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i945[9], i944.blending)
  i944.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i945[10], i944.alphaBlending)
  i944.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i945[11], i944.colorWriteMask)
  i944.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i945[12], i944.offsetUnits)
  i944.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i945[13], i944.offsetFactor)
  i944.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i945[14], i944.stencilRef)
  i944.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i945[15], i944.stencilReadMask)
  i944.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i945[16], i944.stencilWriteMask)
  i944.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i945[17], i944.stencilOp)
  i944.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i945[18], i944.stencilOpFront)
  i944.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i945[19], i944.stencilOpBack)
  var i947 = i945[20]
  var i946 = []
  for(var i = 0; i < i947.length; i += 1) {
    i946.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i947[i + 0]) );
  }
  i944.tags = i946
  var i949 = i945[21]
  var i948 = []
  for(var i = 0; i < i949.length; i += 1) {
    i948.push( i949[i + 0] );
  }
  i944.passDefinedKeywords = i948
  var i951 = i945[22]
  var i950 = []
  for(var i = 0; i < i951.length; i += 1) {
    i950.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i951[i + 0]) );
  }
  i944.passDefinedKeywordGroups = i950
  var i953 = i945[23]
  var i952 = []
  for(var i = 0; i < i953.length; i += 1) {
    i952.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i953[i + 0]) );
  }
  i944.variants = i952
  var i955 = i945[24]
  var i954 = []
  for(var i = 0; i < i955.length; i += 1) {
    i954.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i955[i + 0]) );
  }
  i944.excludedVariants = i954
  i944.hasDepthReader = !!i945[25]
  return i944
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i956 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i957 = data
  i956.val = i957[0]
  i956.name = i957[1]
  return i956
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i958 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i959 = data
  i958.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i959[0], i958.src)
  i958.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i959[1], i958.dst)
  i958.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i959[2], i958.op)
  return i958
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i960 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i961 = data
  i960.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i961[0], i960.pass)
  i960.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i961[1], i960.fail)
  i960.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i961[2], i960.zFail)
  i960.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i961[3], i960.comp)
  return i960
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i964 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i965 = data
  i964.name = i965[0]
  i964.value = i965[1]
  return i964
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i968 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i969 = data
  var i971 = i969[0]
  var i970 = []
  for(var i = 0; i < i971.length; i += 1) {
    i970.push( i971[i + 0] );
  }
  i968.keywords = i970
  i968.hasDiscard = !!i969[1]
  return i968
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i974 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i975 = data
  i974.passId = i975[0]
  i974.subShaderIndex = i975[1]
  var i977 = i975[2]
  var i976 = []
  for(var i = 0; i < i977.length; i += 1) {
    i976.push( i977[i + 0] );
  }
  i974.keywords = i976
  i974.vertexProgram = i975[3]
  i974.fragmentProgram = i975[4]
  i974.exportedForWebGl2 = !!i975[5]
  i974.readDepth = !!i975[6]
  return i974
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i980 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i981 = data
  request.r(i981[0], i981[1], 0, i980, 'shader')
  i980.pass = i981[2]
  return i980
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i984 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i985 = data
  i984.name = i985[0]
  i984.type = i985[1]
  i984.value = new pc.Vec4( i985[2], i985[3], i985[4], i985[5] )
  i984.textureValue = i985[6]
  i984.shaderPropertyFlag = i985[7]
  return i984
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i986 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i987 = data
  i986.name = i987[0]
  request.r(i987[1], i987[2], 0, i986, 'texture')
  i986.aabb = i987[3]
  i986.vertices = i987[4]
  i986.triangles = i987[5]
  i986.textureRect = UnityEngine.Rect.MinMaxRect(i987[6], i987[7], i987[8], i987[9])
  i986.packedRect = UnityEngine.Rect.MinMaxRect(i987[10], i987[11], i987[12], i987[13])
  i986.border = new pc.Vec4( i987[14], i987[15], i987[16], i987[17] )
  i986.transparency = i987[18]
  i986.bounds = i987[19]
  i986.pixelsPerUnit = i987[20]
  i986.textureWidth = i987[21]
  i986.textureHeight = i987[22]
  i986.nativeSize = new pc.Vec2( i987[23], i987[24] )
  i986.pivot = new pc.Vec2( i987[25], i987[26] )
  i986.textureRectOffset = new pc.Vec2( i987[27], i987[28] )
  return i986
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i988 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i989 = data
  i988.name = i989[0]
  return i988
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i990 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i991 = data
  i990.name = i991[0]
  i990.wrapMode = i991[1]
  i990.isLooping = !!i991[2]
  i990.length = i991[3]
  var i993 = i991[4]
  var i992 = []
  for(var i = 0; i < i993.length; i += 1) {
    i992.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i993[i + 0]) );
  }
  i990.curves = i992
  var i995 = i991[5]
  var i994 = []
  for(var i = 0; i < i995.length; i += 1) {
    i994.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i995[i + 0]) );
  }
  i990.events = i994
  i990.halfPrecision = !!i991[6]
  i990._frameRate = i991[7]
  i990.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i991[8], i990.localBounds)
  i990.hasMuscleCurves = !!i991[9]
  var i997 = i991[10]
  var i996 = []
  for(var i = 0; i < i997.length; i += 1) {
    i996.push( i997[i + 0] );
  }
  i990.clipMuscleConstant = i996
  i990.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i991[11], i990.clipBindingConstant)
  return i990
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i1000 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i1001 = data
  i1000.path = i1001[0]
  i1000.hash = i1001[1]
  i1000.componentType = i1001[2]
  i1000.property = i1001[3]
  i1000.keys = i1001[4]
  var i1003 = i1001[5]
  var i1002 = []
  for(var i = 0; i < i1003.length; i += 1) {
    i1002.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i1003[i + 0]) );
  }
  i1000.objectReferenceKeys = i1002
  return i1000
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i1006 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i1007 = data
  i1006.time = i1007[0]
  request.r(i1007[1], i1007[2], 0, i1006, 'value')
  return i1006
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i1010 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i1011 = data
  i1010.functionName = i1011[0]
  i1010.floatParameter = i1011[1]
  i1010.intParameter = i1011[2]
  i1010.stringParameter = i1011[3]
  request.r(i1011[4], i1011[5], 0, i1010, 'objectReferenceParameter')
  i1010.time = i1011[6]
  return i1010
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i1012 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i1013 = data
  i1012.center = new pc.Vec3( i1013[0], i1013[1], i1013[2] )
  i1012.extends = new pc.Vec3( i1013[3], i1013[4], i1013[5] )
  return i1012
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i1016 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i1017 = data
  var i1019 = i1017[0]
  var i1018 = []
  for(var i = 0; i < i1019.length; i += 1) {
    i1018.push( i1019[i + 0] );
  }
  i1016.genericBindings = i1018
  var i1021 = i1017[1]
  var i1020 = []
  for(var i = 0; i < i1021.length; i += 1) {
    i1020.push( i1021[i + 0] );
  }
  i1016.pptrCurveMapping = i1020
  return i1016
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1022 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1023 = data
  i1022.name = i1023[0]
  i1022.ascent = i1023[1]
  i1022.originalLineHeight = i1023[2]
  i1022.fontSize = i1023[3]
  var i1025 = i1023[4]
  var i1024 = []
  for(var i = 0; i < i1025.length; i += 1) {
    i1024.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1025[i + 0]) );
  }
  i1022.characterInfo = i1024
  request.r(i1023[5], i1023[6], 0, i1022, 'texture')
  i1022.originalFontSize = i1023[7]
  return i1022
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1028 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1029 = data
  i1028.index = i1029[0]
  i1028.advance = i1029[1]
  i1028.bearing = i1029[2]
  i1028.glyphWidth = i1029[3]
  i1028.glyphHeight = i1029[4]
  i1028.minX = i1029[5]
  i1028.maxX = i1029[6]
  i1028.minY = i1029[7]
  i1028.maxY = i1029[8]
  i1028.uvBottomLeftX = i1029[9]
  i1028.uvBottomLeftY = i1029[10]
  i1028.uvBottomRightX = i1029[11]
  i1028.uvBottomRightY = i1029[12]
  i1028.uvTopLeftX = i1029[13]
  i1028.uvTopLeftY = i1029[14]
  i1028.uvTopRightX = i1029[15]
  i1028.uvTopRightY = i1029[16]
  return i1028
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i1030 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i1031 = data
  i1030.name = i1031[0]
  var i1033 = i1031[1]
  var i1032 = []
  for(var i = 0; i < i1033.length; i += 1) {
    i1032.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i1033[i + 0]) );
  }
  i1030.layers = i1032
  var i1035 = i1031[2]
  var i1034 = []
  for(var i = 0; i < i1035.length; i += 1) {
    i1034.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i1035[i + 0]) );
  }
  i1030.parameters = i1034
  i1030.animationClips = i1031[3]
  i1030.avatarUnsupported = i1031[4]
  return i1030
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i1038 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i1039 = data
  i1038.name = i1039[0]
  i1038.defaultWeight = i1039[1]
  i1038.blendingMode = i1039[2]
  i1038.avatarMask = i1039[3]
  i1038.syncedLayerIndex = i1039[4]
  i1038.syncedLayerAffectsTiming = !!i1039[5]
  i1038.syncedLayers = i1039[6]
  i1038.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1039[7], i1038.stateMachine)
  return i1038
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i1040 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i1041 = data
  i1040.id = i1041[0]
  i1040.name = i1041[1]
  i1040.path = i1041[2]
  var i1043 = i1041[3]
  var i1042 = []
  for(var i = 0; i < i1043.length; i += 1) {
    i1042.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i1043[i + 0]) );
  }
  i1040.states = i1042
  var i1045 = i1041[4]
  var i1044 = []
  for(var i = 0; i < i1045.length; i += 1) {
    i1044.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1045[i + 0]) );
  }
  i1040.machines = i1044
  var i1047 = i1041[5]
  var i1046 = []
  for(var i = 0; i < i1047.length; i += 1) {
    i1046.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1047[i + 0]) );
  }
  i1040.entryStateTransitions = i1046
  var i1049 = i1041[6]
  var i1048 = []
  for(var i = 0; i < i1049.length; i += 1) {
    i1048.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1049[i + 0]) );
  }
  i1040.exitStateTransitions = i1048
  var i1051 = i1041[7]
  var i1050 = []
  for(var i = 0; i < i1051.length; i += 1) {
    i1050.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1051[i + 0]) );
  }
  i1040.anyStateTransitions = i1050
  i1040.defaultStateId = i1041[8]
  return i1040
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i1054 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i1055 = data
  i1054.id = i1055[0]
  i1054.name = i1055[1]
  i1054.cycleOffset = i1055[2]
  i1054.cycleOffsetParameter = i1055[3]
  i1054.cycleOffsetParameterActive = !!i1055[4]
  i1054.mirror = !!i1055[5]
  i1054.mirrorParameter = i1055[6]
  i1054.mirrorParameterActive = !!i1055[7]
  i1054.motionId = i1055[8]
  i1054.nameHash = i1055[9]
  i1054.fullPathHash = i1055[10]
  i1054.speed = i1055[11]
  i1054.speedParameter = i1055[12]
  i1054.speedParameterActive = !!i1055[13]
  i1054.tag = i1055[14]
  i1054.tagHash = i1055[15]
  i1054.writeDefaultValues = !!i1055[16]
  var i1057 = i1055[17]
  var i1056 = []
  for(var i = 0; i < i1057.length; i += 2) {
  request.r(i1057[i + 0], i1057[i + 1], 2, i1056, '')
  }
  i1054.behaviours = i1056
  var i1059 = i1055[18]
  var i1058 = []
  for(var i = 0; i < i1059.length; i += 1) {
    i1058.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1059[i + 0]) );
  }
  i1054.transitions = i1058
  return i1054
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1064 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1065 = data
  i1064.fullPath = i1065[0]
  i1064.canTransitionToSelf = !!i1065[1]
  i1064.duration = i1065[2]
  i1064.exitTime = i1065[3]
  i1064.hasExitTime = !!i1065[4]
  i1064.hasFixedDuration = !!i1065[5]
  i1064.interruptionSource = i1065[6]
  i1064.offset = i1065[7]
  i1064.orderedInterruption = !!i1065[8]
  i1064.destinationStateId = i1065[9]
  i1064.isExit = !!i1065[10]
  i1064.mute = !!i1065[11]
  i1064.solo = !!i1065[12]
  var i1067 = i1065[13]
  var i1066 = []
  for(var i = 0; i < i1067.length; i += 1) {
    i1066.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1067[i + 0]) );
  }
  i1064.conditions = i1066
  return i1064
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1072 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1073 = data
  i1072.destinationStateId = i1073[0]
  i1072.isExit = !!i1073[1]
  i1072.mute = !!i1073[2]
  i1072.solo = !!i1073[3]
  var i1075 = i1073[4]
  var i1074 = []
  for(var i = 0; i < i1075.length; i += 1) {
    i1074.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1075[i + 0]) );
  }
  i1072.conditions = i1074
  return i1072
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1078 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1079 = data
  i1078.defaultBool = !!i1079[0]
  i1078.defaultFloat = i1079[1]
  i1078.defaultInt = i1079[2]
  i1078.name = i1079[3]
  i1078.nameHash = i1079[4]
  i1078.type = i1079[5]
  return i1078
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1080 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1081 = data
  i1080.name = i1081[0]
  i1080.bytes64 = i1081[1]
  i1080.data = i1081[2]
  return i1080
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i1082 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i1083 = data
  i1082.normalStyle = i1083[0]
  i1082.normalSpacingOffset = i1083[1]
  i1082.boldStyle = i1083[2]
  i1082.boldSpacing = i1083[3]
  i1082.italicStyle = i1083[4]
  i1082.tabSize = i1083[5]
  request.r(i1083[6], i1083[7], 0, i1082, 'atlas')
  i1082.m_SourceFontFileGUID = i1083[8]
  i1082.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i1083[9], i1082.m_CreationSettings)
  request.r(i1083[10], i1083[11], 0, i1082, 'm_SourceFontFile')
  i1082.m_SourceFontFilePath = i1083[12]
  i1082.m_AtlasPopulationMode = i1083[13]
  i1082.InternalDynamicOS = !!i1083[14]
  var i1085 = i1083[15]
  var i1084 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i1085.length; i += 1) {
    i1084.add(request.d('UnityEngine.TextCore.Glyph', i1085[i + 0]));
  }
  i1082.m_GlyphTable = i1084
  var i1087 = i1083[16]
  var i1086 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i1087.length; i += 1) {
    i1086.add(request.d('TMPro.TMP_Character', i1087[i + 0]));
  }
  i1082.m_CharacterTable = i1086
  var i1089 = i1083[17]
  var i1088 = []
  for(var i = 0; i < i1089.length; i += 2) {
  request.r(i1089[i + 0], i1089[i + 1], 2, i1088, '')
  }
  i1082.m_AtlasTextures = i1088
  i1082.m_AtlasTextureIndex = i1083[18]
  i1082.m_IsMultiAtlasTexturesEnabled = !!i1083[19]
  i1082.m_GetFontFeatures = !!i1083[20]
  i1082.m_ClearDynamicDataOnBuild = !!i1083[21]
  i1082.m_AtlasWidth = i1083[22]
  i1082.m_AtlasHeight = i1083[23]
  i1082.m_AtlasPadding = i1083[24]
  i1082.m_AtlasRenderMode = i1083[25]
  var i1091 = i1083[26]
  var i1090 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1091.length; i += 1) {
    i1090.add(request.d('UnityEngine.TextCore.GlyphRect', i1091[i + 0]));
  }
  i1082.m_UsedGlyphRects = i1090
  var i1093 = i1083[27]
  var i1092 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1093.length; i += 1) {
    i1092.add(request.d('UnityEngine.TextCore.GlyphRect', i1093[i + 0]));
  }
  i1082.m_FreeGlyphRects = i1092
  i1082.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i1083[28], i1082.m_FontFeatureTable)
  i1082.m_ShouldReimportFontFeatures = !!i1083[29]
  var i1095 = i1083[30]
  var i1094 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1095.length; i += 2) {
  request.r(i1095[i + 0], i1095[i + 1], 1, i1094, '')
  }
  i1082.m_FallbackFontAssetTable = i1094
  var i1097 = i1083[31]
  var i1096 = []
  for(var i = 0; i < i1097.length; i += 1) {
    i1096.push( request.d('TMPro.TMP_FontWeightPair', i1097[i + 0]) );
  }
  i1082.m_FontWeightTable = i1096
  var i1099 = i1083[32]
  var i1098 = []
  for(var i = 0; i < i1099.length; i += 1) {
    i1098.push( request.d('TMPro.TMP_FontWeightPair', i1099[i + 0]) );
  }
  i1082.fontWeights = i1098
  i1082.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i1083[33], i1082.m_fontInfo)
  var i1101 = i1083[34]
  var i1100 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i1101.length; i += 1) {
    i1100.add(request.d('TMPro.TMP_Glyph', i1101[i + 0]));
  }
  i1082.m_glyphInfoList = i1100
  i1082.m_KerningTable = request.d('TMPro.KerningTable', i1083[35], i1082.m_KerningTable)
  var i1103 = i1083[36]
  var i1102 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1103.length; i += 2) {
  request.r(i1103[i + 0], i1103[i + 1], 1, i1102, '')
  }
  i1082.fallbackFontAssets = i1102
  i1082.m_Version = i1083[37]
  i1082.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1083[38], i1082.m_FaceInfo)
  request.r(i1083[39], i1083[40], 0, i1082, 'm_Material')
  return i1082
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i1104 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i1105 = data
  i1104.sourceFontFileName = i1105[0]
  i1104.sourceFontFileGUID = i1105[1]
  i1104.faceIndex = i1105[2]
  i1104.pointSizeSamplingMode = i1105[3]
  i1104.pointSize = i1105[4]
  i1104.padding = i1105[5]
  i1104.paddingMode = i1105[6]
  i1104.packingMode = i1105[7]
  i1104.atlasWidth = i1105[8]
  i1104.atlasHeight = i1105[9]
  i1104.characterSetSelectionMode = i1105[10]
  i1104.characterSequence = i1105[11]
  i1104.referencedFontAssetGUID = i1105[12]
  i1104.referencedTextAssetGUID = i1105[13]
  i1104.fontStyle = i1105[14]
  i1104.fontStyleModifier = i1105[15]
  i1104.renderMode = i1105[16]
  i1104.includeFontFeatures = !!i1105[17]
  return i1104
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i1108 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i1109 = data
  i1108.m_Index = i1109[0]
  i1108.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1109[1], i1108.m_Metrics)
  i1108.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1109[2], i1108.m_GlyphRect)
  i1108.m_Scale = i1109[3]
  i1108.m_AtlasIndex = i1109[4]
  i1108.m_ClassDefinitionType = i1109[5]
  return i1108
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1110 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1111 = data
  i1110.m_Width = i1111[0]
  i1110.m_Height = i1111[1]
  i1110.m_HorizontalBearingX = i1111[2]
  i1110.m_HorizontalBearingY = i1111[3]
  i1110.m_HorizontalAdvance = i1111[4]
  return i1110
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1112 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1113 = data
  i1112.m_X = i1113[0]
  i1112.m_Y = i1113[1]
  i1112.m_Width = i1113[2]
  i1112.m_Height = i1113[3]
  return i1112
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i1116 = root || request.c( 'TMPro.TMP_Character' )
  var i1117 = data
  i1116.m_ElementType = i1117[0]
  i1116.m_Unicode = i1117[1]
  i1116.m_GlyphIndex = i1117[2]
  i1116.m_Scale = i1117[3]
  return i1116
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i1122 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i1123 = data
  var i1125 = i1123[0]
  var i1124 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i1125.length; i += 1) {
    i1124.add(request.d('TMPro.MultipleSubstitutionRecord', i1125[i + 0]));
  }
  i1122.m_MultipleSubstitutionRecords = i1124
  var i1127 = i1123[1]
  var i1126 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i1127.length; i += 1) {
    i1126.add(request.d('TMPro.LigatureSubstitutionRecord', i1127[i + 0]));
  }
  i1122.m_LigatureSubstitutionRecords = i1126
  var i1129 = i1123[2]
  var i1128 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i1129.length; i += 1) {
    i1128.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i1129[i + 0]));
  }
  i1122.m_GlyphPairAdjustmentRecords = i1128
  var i1131 = i1123[3]
  var i1130 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i1131.length; i += 1) {
    i1130.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i1131[i + 0]));
  }
  i1122.m_MarkToBaseAdjustmentRecords = i1130
  var i1133 = i1123[4]
  var i1132 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i1133.length; i += 1) {
    i1132.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i1133[i + 0]));
  }
  i1122.m_MarkToMarkAdjustmentRecords = i1132
  return i1122
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i1136 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i1137 = data
  i1136.m_TargetGlyphID = i1137[0]
  i1136.m_SubstituteGlyphIDs = i1137[1]
  return i1136
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i1140 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i1141 = data
  i1140.m_ComponentGlyphIDs = i1141[0]
  i1140.m_LigatureGlyphID = i1141[1]
  return i1140
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i1144 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i1145 = data
  i1144.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i1145[0], i1144.m_FirstAdjustmentRecord)
  i1144.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i1145[1], i1144.m_SecondAdjustmentRecord)
  i1144.m_FeatureLookupFlags = i1145[2]
  return i1144
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1146 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i1147 = data
  i1146.m_GlyphIndex = i1147[0]
  i1146.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i1147[1], i1146.m_GlyphValueRecord)
  return i1146
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i1148 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i1149 = data
  i1148.m_XPlacement = i1149[0]
  i1148.m_YPlacement = i1149[1]
  i1148.m_XAdvance = i1149[2]
  i1148.m_YAdvance = i1149[3]
  return i1148
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i1152 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i1153 = data
  i1152.m_BaseGlyphID = i1153[0]
  i1152.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i1153[1], i1152.m_BaseGlyphAnchorPoint)
  i1152.m_MarkGlyphID = i1153[2]
  i1152.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i1153[3], i1152.m_MarkPositionAdjustment)
  return i1152
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i1156 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i1157 = data
  i1156.m_BaseMarkGlyphID = i1157[0]
  i1156.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i1157[1], i1156.m_BaseMarkGlyphAnchorPoint)
  i1156.m_CombiningMarkGlyphID = i1157[2]
  i1156.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i1157[3], i1156.m_CombiningMarkPositionAdjustment)
  return i1156
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i1162 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i1163 = data
  request.r(i1163[0], i1163[1], 0, i1162, 'regularTypeface')
  request.r(i1163[2], i1163[3], 0, i1162, 'italicTypeface')
  return i1162
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i1164 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i1165 = data
  i1164.Name = i1165[0]
  i1164.PointSize = i1165[1]
  i1164.Scale = i1165[2]
  i1164.CharacterCount = i1165[3]
  i1164.LineHeight = i1165[4]
  i1164.Baseline = i1165[5]
  i1164.Ascender = i1165[6]
  i1164.CapHeight = i1165[7]
  i1164.Descender = i1165[8]
  i1164.CenterLine = i1165[9]
  i1164.SuperscriptOffset = i1165[10]
  i1164.SubscriptOffset = i1165[11]
  i1164.SubSize = i1165[12]
  i1164.Underline = i1165[13]
  i1164.UnderlineThickness = i1165[14]
  i1164.strikethrough = i1165[15]
  i1164.strikethroughThickness = i1165[16]
  i1164.TabWidth = i1165[17]
  i1164.Padding = i1165[18]
  i1164.AtlasWidth = i1165[19]
  i1164.AtlasHeight = i1165[20]
  return i1164
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i1168 = root || request.c( 'TMPro.TMP_Glyph' )
  var i1169 = data
  i1168.id = i1169[0]
  i1168.x = i1169[1]
  i1168.y = i1169[2]
  i1168.width = i1169[3]
  i1168.height = i1169[4]
  i1168.xOffset = i1169[5]
  i1168.yOffset = i1169[6]
  i1168.xAdvance = i1169[7]
  i1168.scale = i1169[8]
  return i1168
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i1170 = root || request.c( 'TMPro.KerningTable' )
  var i1171 = data
  var i1173 = i1171[0]
  var i1172 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i1173.length; i += 1) {
    i1172.add(request.d('TMPro.KerningPair', i1173[i + 0]));
  }
  i1170.kerningPairs = i1172
  return i1170
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i1176 = root || request.c( 'TMPro.KerningPair' )
  var i1177 = data
  i1176.xOffset = i1177[0]
  i1176.m_FirstGlyph = i1177[1]
  i1176.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1177[2], i1176.m_FirstGlyphAdjustments)
  i1176.m_SecondGlyph = i1177[3]
  i1176.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1177[4], i1176.m_SecondGlyphAdjustments)
  i1176.m_IgnoreSpacingAdjustments = !!i1177[5]
  return i1176
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1178 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1179 = data
  i1178.m_FaceIndex = i1179[0]
  i1178.m_FamilyName = i1179[1]
  i1178.m_StyleName = i1179[2]
  i1178.m_PointSize = i1179[3]
  i1178.m_Scale = i1179[4]
  i1178.m_UnitsPerEM = i1179[5]
  i1178.m_LineHeight = i1179[6]
  i1178.m_AscentLine = i1179[7]
  i1178.m_CapLine = i1179[8]
  i1178.m_MeanLine = i1179[9]
  i1178.m_Baseline = i1179[10]
  i1178.m_DescentLine = i1179[11]
  i1178.m_SuperscriptOffset = i1179[12]
  i1178.m_SuperscriptSize = i1179[13]
  i1178.m_SubscriptOffset = i1179[14]
  i1178.m_SubscriptSize = i1179[15]
  i1178.m_UnderlineOffset = i1179[16]
  i1178.m_UnderlineThickness = i1179[17]
  i1178.m_StrikethroughOffset = i1179[18]
  i1178.m_StrikethroughThickness = i1179[19]
  i1178.m_TabWidth = i1179[20]
  return i1178
}

Deserializers["PlayerCardData"] = function (request, data, root) {
  var i1180 = root || request.c( 'PlayerCardData' )
  var i1181 = data
  i1180.nationality = i1181[0]
  request.r(i1181[1], i1181[2], 0, i1180, 'playerSprite')
  request.r(i1181[3], i1181[4], 0, i1180, 'flagSprite')
  return i1180
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1182 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1183 = data
  i1182.useSafeMode = !!i1183[0]
  i1182.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1183[1], i1182.safeModeOptions)
  i1182.timeScale = i1183[2]
  i1182.unscaledTimeScale = i1183[3]
  i1182.useSmoothDeltaTime = !!i1183[4]
  i1182.maxSmoothUnscaledTime = i1183[5]
  i1182.rewindCallbackMode = i1183[6]
  i1182.showUnityEditorReport = !!i1183[7]
  i1182.logBehaviour = i1183[8]
  i1182.drawGizmos = !!i1183[9]
  i1182.defaultRecyclable = !!i1183[10]
  i1182.defaultAutoPlay = i1183[11]
  i1182.defaultUpdateType = i1183[12]
  i1182.defaultTimeScaleIndependent = !!i1183[13]
  i1182.defaultEaseType = i1183[14]
  i1182.defaultEaseOvershootOrAmplitude = i1183[15]
  i1182.defaultEasePeriod = i1183[16]
  i1182.defaultAutoKill = !!i1183[17]
  i1182.defaultLoopType = i1183[18]
  i1182.debugMode = !!i1183[19]
  i1182.debugStoreTargetId = !!i1183[20]
  i1182.showPreviewPanel = !!i1183[21]
  i1182.storeSettingsLocation = i1183[22]
  i1182.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1183[23], i1182.modules)
  i1182.createASMDEF = !!i1183[24]
  i1182.showPlayingTweens = !!i1183[25]
  i1182.showPausedTweens = !!i1183[26]
  return i1182
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1184 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1185 = data
  i1184.logBehaviour = i1185[0]
  i1184.nestedTweenFailureBehaviour = i1185[1]
  return i1184
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1186 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1187 = data
  i1186.showPanel = !!i1187[0]
  i1186.audioEnabled = !!i1187[1]
  i1186.physicsEnabled = !!i1187[2]
  i1186.physics2DEnabled = !!i1187[3]
  i1186.spriteEnabled = !!i1187[4]
  i1186.uiEnabled = !!i1187[5]
  i1186.uiToolkitEnabled = !!i1187[6]
  i1186.textMeshProEnabled = !!i1187[7]
  i1186.tk2DEnabled = !!i1187[8]
  i1186.deAudioEnabled = !!i1187[9]
  i1186.deUnityExtendedEnabled = !!i1187[10]
  i1186.epoOutlineEnabled = !!i1187[11]
  return i1186
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1188 = root || request.c( 'TMPro.TMP_Settings' )
  var i1189 = data
  i1188.assetVersion = i1189[0]
  i1188.m_TextWrappingMode = i1189[1]
  i1188.m_enableKerning = !!i1189[2]
  var i1191 = i1189[3]
  var i1190 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i1191.length; i += 1) {
    i1190.add(i1191[i + 0]);
  }
  i1188.m_ActiveFontFeatures = i1190
  i1188.m_enableExtraPadding = !!i1189[4]
  i1188.m_enableTintAllSprites = !!i1189[5]
  i1188.m_enableParseEscapeCharacters = !!i1189[6]
  i1188.m_EnableRaycastTarget = !!i1189[7]
  i1188.m_GetFontFeaturesAtRuntime = !!i1189[8]
  i1188.m_missingGlyphCharacter = i1189[9]
  i1188.m_ClearDynamicDataOnBuild = !!i1189[10]
  i1188.m_warningsDisabled = !!i1189[11]
  request.r(i1189[12], i1189[13], 0, i1188, 'm_defaultFontAsset')
  i1188.m_defaultFontAssetPath = i1189[14]
  i1188.m_defaultFontSize = i1189[15]
  i1188.m_defaultAutoSizeMinRatio = i1189[16]
  i1188.m_defaultAutoSizeMaxRatio = i1189[17]
  i1188.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1189[18], i1189[19] )
  i1188.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1189[20], i1189[21] )
  i1188.m_autoSizeTextContainer = !!i1189[22]
  i1188.m_IsTextObjectScaleStatic = !!i1189[23]
  var i1193 = i1189[24]
  var i1192 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1193.length; i += 2) {
  request.r(i1193[i + 0], i1193[i + 1], 1, i1192, '')
  }
  i1188.m_fallbackFontAssets = i1192
  i1188.m_matchMaterialPreset = !!i1189[25]
  i1188.m_HideSubTextObjects = !!i1189[26]
  request.r(i1189[27], i1189[28], 0, i1188, 'm_defaultSpriteAsset')
  i1188.m_defaultSpriteAssetPath = i1189[29]
  i1188.m_enableEmojiSupport = !!i1189[30]
  i1188.m_MissingCharacterSpriteUnicode = i1189[31]
  var i1195 = i1189[32]
  var i1194 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i1195.length; i += 2) {
  request.r(i1195[i + 0], i1195[i + 1], 1, i1194, '')
  }
  i1188.m_EmojiFallbackTextAssets = i1194
  i1188.m_defaultColorGradientPresetsPath = i1189[33]
  request.r(i1189[34], i1189[35], 0, i1188, 'm_defaultStyleSheet')
  i1188.m_StyleSheetsResourcePath = i1189[36]
  request.r(i1189[37], i1189[38], 0, i1188, 'm_leadingCharacters')
  request.r(i1189[39], i1189[40], 0, i1188, 'm_followingCharacters')
  i1188.m_UseModernHangulLineBreakingRules = !!i1189[41]
  return i1188
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1198 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1199 = data
  request.r(i1199[0], i1199[1], 0, i1198, 'spriteSheet')
  var i1201 = i1199[2]
  var i1200 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1201.length; i += 1) {
    i1200.add(request.d('TMPro.TMP_Sprite', i1201[i + 0]));
  }
  i1198.spriteInfoList = i1200
  var i1203 = i1199[3]
  var i1202 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1203.length; i += 2) {
  request.r(i1203[i + 0], i1203[i + 1], 1, i1202, '')
  }
  i1198.fallbackSpriteAssets = i1202
  var i1205 = i1199[4]
  var i1204 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1205.length; i += 1) {
    i1204.add(request.d('TMPro.TMP_SpriteCharacter', i1205[i + 0]));
  }
  i1198.m_SpriteCharacterTable = i1204
  var i1207 = i1199[5]
  var i1206 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1207.length; i += 1) {
    i1206.add(request.d('TMPro.TMP_SpriteGlyph', i1207[i + 0]));
  }
  i1198.m_GlyphTable = i1206
  i1198.m_Version = i1199[6]
  i1198.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1199[7], i1198.m_FaceInfo)
  request.r(i1199[8], i1199[9], 0, i1198, 'm_Material')
  return i1198
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1210 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1211 = data
  i1210.name = i1211[0]
  i1210.hashCode = i1211[1]
  i1210.unicode = i1211[2]
  i1210.pivot = new pc.Vec2( i1211[3], i1211[4] )
  request.r(i1211[5], i1211[6], 0, i1210, 'sprite')
  i1210.id = i1211[7]
  i1210.x = i1211[8]
  i1210.y = i1211[9]
  i1210.width = i1211[10]
  i1210.height = i1211[11]
  i1210.xOffset = i1211[12]
  i1210.yOffset = i1211[13]
  i1210.xAdvance = i1211[14]
  i1210.scale = i1211[15]
  return i1210
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1216 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1217 = data
  i1216.m_Name = i1217[0]
  i1216.m_ElementType = i1217[1]
  i1216.m_Unicode = i1217[2]
  i1216.m_GlyphIndex = i1217[3]
  i1216.m_Scale = i1217[4]
  return i1216
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1220 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1221 = data
  request.r(i1221[0], i1221[1], 0, i1220, 'sprite')
  i1220.m_Index = i1221[2]
  i1220.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1221[3], i1220.m_Metrics)
  i1220.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1221[4], i1220.m_GlyphRect)
  i1220.m_Scale = i1221[5]
  i1220.m_AtlasIndex = i1221[6]
  i1220.m_ClassDefinitionType = i1221[7]
  return i1220
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1222 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1223 = data
  var i1225 = i1223[0]
  var i1224 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1225.length; i += 1) {
    i1224.add(request.d('TMPro.TMP_Style', i1225[i + 0]));
  }
  i1222.m_StyleList = i1224
  return i1222
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1228 = root || request.c( 'TMPro.TMP_Style' )
  var i1229 = data
  i1228.m_Name = i1229[0]
  i1228.m_HashCode = i1229[1]
  i1228.m_OpeningDefinition = i1229[2]
  i1228.m_ClosingDefinition = i1229[3]
  i1228.m_OpeningTagArray = i1229[4]
  i1228.m_ClosingTagArray = i1229[5]
  return i1228
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1230 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1231 = data
  var i1233 = i1231[0]
  var i1232 = []
  for(var i = 0; i < i1233.length; i += 1) {
    i1232.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1233[i + 0]) );
  }
  i1230.files = i1232
  i1230.componentToPrefabIds = i1231[1]
  return i1230
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1236 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1237 = data
  i1236.path = i1237[0]
  request.r(i1237[1], i1237[2], 0, i1236, 'unityObject')
  return i1236
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1238 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1239 = data
  var i1241 = i1239[0]
  var i1240 = []
  for(var i = 0; i < i1241.length; i += 1) {
    i1240.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1241[i + 0]) );
  }
  i1238.scriptsExecutionOrder = i1240
  var i1243 = i1239[1]
  var i1242 = []
  for(var i = 0; i < i1243.length; i += 1) {
    i1242.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1243[i + 0]) );
  }
  i1238.sortingLayers = i1242
  var i1245 = i1239[2]
  var i1244 = []
  for(var i = 0; i < i1245.length; i += 1) {
    i1244.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1245[i + 0]) );
  }
  i1238.cullingLayers = i1244
  i1238.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1239[3], i1238.timeSettings)
  i1238.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1239[4], i1238.physicsSettings)
  i1238.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1239[5], i1238.physics2DSettings)
  i1238.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1239[6], i1238.qualitySettings)
  i1238.enableRealtimeShadows = !!i1239[7]
  i1238.enableAutoInstancing = !!i1239[8]
  i1238.enableStaticBatching = !!i1239[9]
  i1238.enableDynamicBatching = !!i1239[10]
  i1238.lightmapEncodingQuality = i1239[11]
  i1238.desiredColorSpace = i1239[12]
  var i1247 = i1239[13]
  var i1246 = []
  for(var i = 0; i < i1247.length; i += 1) {
    i1246.push( i1247[i + 0] );
  }
  i1238.allTags = i1246
  return i1238
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1250 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1251 = data
  i1250.name = i1251[0]
  i1250.value = i1251[1]
  return i1250
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1254 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1255 = data
  i1254.id = i1255[0]
  i1254.name = i1255[1]
  i1254.value = i1255[2]
  return i1254
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1258 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1259 = data
  i1258.id = i1259[0]
  i1258.name = i1259[1]
  return i1258
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1260 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1261 = data
  i1260.fixedDeltaTime = i1261[0]
  i1260.maximumDeltaTime = i1261[1]
  i1260.timeScale = i1261[2]
  i1260.maximumParticleTimestep = i1261[3]
  return i1260
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1262 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1263 = data
  i1262.gravity = new pc.Vec3( i1263[0], i1263[1], i1263[2] )
  i1262.defaultSolverIterations = i1263[3]
  i1262.bounceThreshold = i1263[4]
  i1262.autoSyncTransforms = !!i1263[5]
  i1262.autoSimulation = !!i1263[6]
  var i1265 = i1263[7]
  var i1264 = []
  for(var i = 0; i < i1265.length; i += 1) {
    i1264.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1265[i + 0]) );
  }
  i1262.collisionMatrix = i1264
  return i1262
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1268 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1269 = data
  i1268.enabled = !!i1269[0]
  i1268.layerId = i1269[1]
  i1268.otherLayerId = i1269[2]
  return i1268
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1270 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1271 = data
  request.r(i1271[0], i1271[1], 0, i1270, 'material')
  i1270.gravity = new pc.Vec2( i1271[2], i1271[3] )
  i1270.positionIterations = i1271[4]
  i1270.velocityIterations = i1271[5]
  i1270.velocityThreshold = i1271[6]
  i1270.maxLinearCorrection = i1271[7]
  i1270.maxAngularCorrection = i1271[8]
  i1270.maxTranslationSpeed = i1271[9]
  i1270.maxRotationSpeed = i1271[10]
  i1270.baumgarteScale = i1271[11]
  i1270.baumgarteTOIScale = i1271[12]
  i1270.timeToSleep = i1271[13]
  i1270.linearSleepTolerance = i1271[14]
  i1270.angularSleepTolerance = i1271[15]
  i1270.defaultContactOffset = i1271[16]
  i1270.autoSimulation = !!i1271[17]
  i1270.queriesHitTriggers = !!i1271[18]
  i1270.queriesStartInColliders = !!i1271[19]
  i1270.callbacksOnDisable = !!i1271[20]
  i1270.reuseCollisionCallbacks = !!i1271[21]
  i1270.autoSyncTransforms = !!i1271[22]
  var i1273 = i1271[23]
  var i1272 = []
  for(var i = 0; i < i1273.length; i += 1) {
    i1272.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1273[i + 0]) );
  }
  i1270.collisionMatrix = i1272
  return i1270
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1276 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1277 = data
  i1276.enabled = !!i1277[0]
  i1276.layerId = i1277[1]
  i1276.otherLayerId = i1277[2]
  return i1276
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1278 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1279 = data
  var i1281 = i1279[0]
  var i1280 = []
  for(var i = 0; i < i1281.length; i += 1) {
    i1280.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1281[i + 0]) );
  }
  i1278.qualityLevels = i1280
  var i1283 = i1279[1]
  var i1282 = []
  for(var i = 0; i < i1283.length; i += 1) {
    i1282.push( i1283[i + 0] );
  }
  i1278.names = i1282
  i1278.shadows = i1279[2]
  i1278.anisotropicFiltering = i1279[3]
  i1278.antiAliasing = i1279[4]
  i1278.lodBias = i1279[5]
  i1278.shadowCascades = i1279[6]
  i1278.shadowDistance = i1279[7]
  i1278.shadowmaskMode = i1279[8]
  i1278.shadowProjection = i1279[9]
  i1278.shadowResolution = i1279[10]
  i1278.softParticles = !!i1279[11]
  i1278.softVegetation = !!i1279[12]
  i1278.activeColorSpace = i1279[13]
  i1278.desiredColorSpace = i1279[14]
  i1278.masterTextureLimit = i1279[15]
  i1278.maxQueuedFrames = i1279[16]
  i1278.particleRaycastBudget = i1279[17]
  i1278.pixelLightCount = i1279[18]
  i1278.realtimeReflectionProbes = !!i1279[19]
  i1278.shadowCascade2Split = i1279[20]
  i1278.shadowCascade4Split = new pc.Vec3( i1279[21], i1279[22], i1279[23] )
  i1278.streamingMipmapsActive = !!i1279[24]
  i1278.vSyncCount = i1279[25]
  i1278.asyncUploadBufferSize = i1279[26]
  i1278.asyncUploadTimeSlice = i1279[27]
  i1278.billboardsFaceCameraPosition = !!i1279[28]
  i1278.shadowNearPlaneOffset = i1279[29]
  i1278.streamingMipmapsMemoryBudget = i1279[30]
  i1278.maximumLODLevel = i1279[31]
  i1278.streamingMipmapsAddAllCameras = !!i1279[32]
  i1278.streamingMipmapsMaxLevelReduction = i1279[33]
  i1278.streamingMipmapsRenderersPerFrame = i1279[34]
  i1278.resolutionScalingFixedDPIFactor = i1279[35]
  i1278.streamingMipmapsMaxFileIORequests = i1279[36]
  i1278.currentQualityLevel = i1279[37]
  return i1278
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1288 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1289 = data
  i1288.weight = i1289[0]
  i1288.vertices = i1289[1]
  i1288.normals = i1289[2]
  i1288.tangents = i1289[3]
  return i1288
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1292 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1293 = data
  i1292.mode = i1293[0]
  i1292.parameter = i1293[1]
  i1292.threshold = i1293[2]
  return i1292
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i1294 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i1295 = data
  i1294.m_XCoordinate = i1295[0]
  i1294.m_YCoordinate = i1295[1]
  return i1294
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i1296 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i1297 = data
  i1296.m_XPositionAdjustment = i1297[0]
  i1296.m_YPositionAdjustment = i1297[1]
  return i1296
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1298 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1299 = data
  i1298.xPlacement = i1299[0]
  i1298.yPlacement = i1299[1]
  i1298.xAdvance = i1299[2]
  i1298.yAdvance = i1299[3]
  return i1298
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D":{"usedByComposite":0,"autoTiling":1,"points":2,"enabled":3,"isTrigger":4,"usedByEffector":5,"density":6,"offset":7,"material":9},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.PhysicsMaterial2D":{"name":0,"bounciness":1,"friction":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2}}

Deserializers.requiredComponents = {"53":[54],"55":[54],"56":[54],"57":[54],"58":[54],"59":[54],"60":[61],"62":[2],"63":[64],"65":[64],"66":[64],"67":[64],"68":[64],"69":[64],"70":[39],"71":[39],"72":[39],"73":[39],"74":[39],"75":[39],"76":[39],"77":[39],"78":[39],"79":[39],"80":[39],"81":[39],"82":[39],"83":[2],"84":[21],"85":[86],"87":[86],"31":[20],"7":[2],"40":[39],"42":[18],"88":[12],"89":[2],"90":[91],"92":[45],"93":[31],"94":[20],"23":[21,20],"35":[20,34],"95":[20],"96":[34,20],"97":[21],"98":[34,20],"99":[20],"100":[101],"102":[101],"103":[101],"104":[20],"105":[20],"33":[31],"36":[34,20],"106":[20],"32":[31],"107":[20],"108":[20],"109":[20],"110":[20],"111":[20],"112":[20],"113":[20],"114":[20],"115":[20],"116":[34,20],"117":[20],"118":[20],"119":[20],"120":[20],"121":[34,20],"122":[20],"123":[45],"124":[45],"46":[45],"125":[45],"126":[2],"127":[2]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.MonoBehaviour","CameraFollow2D","UnityEngine.Transform","AutoCameraFit","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Mesh","UnityEngine.Material","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","MoveBetweenPoints","ScreenHeightPositionAnchor","UnityEngine.BoxCollider2D","ClickToStore","UnityEngine.RectTransform","UnityEngine.MeshRenderer","UnityEngine.EventSystems.UIBehaviour","TMPro.TextMeshPro","TMPro.TMP_FontAsset","UnityEngine.MeshFilter","PlayerCardUIManager","UnityEngine.GameObject","Ply_SoundManager","UnityEngine.AudioSource","UnityEngine.AudioClip","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","TMPro.TextMeshProUGUI","UnityEngine.UI.Image","UnityEngine.PolygonCollider2D","UnityEngine.PhysicsMaterial2D","UnityEngine.Rigidbody2D","BatStrikeController","CupCollision","SlotTrigger","PlayerCardData","HideOnFirstClick","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.Font","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.InputSystem.UI.InputSystemUIInputModule","UnityEngine.InputSystem.UI.TrackedDeviceRaycaster","TMPro.TextContainer","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.38f1";

Deserializers.productName = "PLY_MiniSoccer";

Deserializers.lunaInitializationTime = "07/15/2026 03:53:54";

Deserializers.lunaDaysRunning = "0.9";

Deserializers.lunaVersion = "7.1.0";

Deserializers.lunaSHA = "cf93782349542fe0b84ad13951a26809f8419628";

Deserializers.creativeName = "PLY_V11";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1753";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4466";

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

Deserializers.buildID = "9389ae1f-3245-4a8a-a876-7d3b1db9b658";

Deserializers.runtimeInitializeOnLoadInfos = [[["Unity","Services","Core","Internal","UnityServicesInitializer","EnableServicesInitializationAsync"],["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["DG","Tweening","DOTween","RuntimeOnLoad"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["Unity","Services","Core","Registration","CorePackageInitializer","InitializeOnLoad"],["Unity","Services","Core","Internal","TaskAsyncOperation","SetScheduler"],["Unity","Services","Core","Environments","Client","Scheduler","EngineStateHelper","Init"],["Unity","Services","Core","Environments","Client","Scheduler","ThreadHelper","Init"],["Ua2CoreInitializeCallback","Register"],["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["Unity","AI","Navigation","NavMeshLink","ClearTrackedList"],["Unity","AI","Navigation","NavMeshSurface","ClearNavMeshSurfaces"],["Unity","AI","Navigation","NavMeshModifierVolume","ClearNavMeshModifiers"],["Unity","AI","Navigation","NavMeshModifier","ClearNavMeshModifiers"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["Unity","Services","Core","Internal","UnityServicesInitializer","CreateStaticInstance"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[["Unity","Services","Core","Environments","Client","Http","JsonHelpers","RegisterTypesForAOT"]],[["Unity","Services","Core","UnityThreadUtils","CaptureUnityThreadInfo"],["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

