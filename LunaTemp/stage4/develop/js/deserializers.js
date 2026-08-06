var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i648 = root || request.c( 'UnityEngine.JointSpring' )
  var i649 = data
  i648.spring = i649[0]
  i648.damper = i649[1]
  i648.targetPosition = i649[2]
  return i648
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i650 = root || request.c( 'UnityEngine.JointMotor' )
  var i651 = data
  i650.m_TargetVelocity = i651[0]
  i650.m_Force = i651[1]
  i650.m_FreeSpin = i651[2]
  return i650
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i652 = root || request.c( 'UnityEngine.JointLimits' )
  var i653 = data
  i652.m_Min = i653[0]
  i652.m_Max = i653[1]
  i652.m_Bounciness = i653[2]
  i652.m_BounceMinVelocity = i653[3]
  i652.m_ContactDistance = i653[4]
  i652.minBounce = i653[5]
  i652.maxBounce = i653[6]
  return i652
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i654 = root || request.c( 'UnityEngine.JointDrive' )
  var i655 = data
  i654.m_PositionSpring = i655[0]
  i654.m_PositionDamper = i655[1]
  i654.m_MaximumForce = i655[2]
  i654.m_UseAcceleration = i655[3]
  return i654
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i656 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i657 = data
  i656.m_Spring = i657[0]
  i656.m_Damper = i657[1]
  return i656
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i658 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i659 = data
  i658.m_Limit = i659[0]
  i658.m_Bounciness = i659[1]
  i658.m_ContactDistance = i659[2]
  return i658
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i660 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i661 = data
  i660.m_ExtremumSlip = i661[0]
  i660.m_ExtremumValue = i661[1]
  i660.m_AsymptoteSlip = i661[2]
  i660.m_AsymptoteValue = i661[3]
  i660.m_Stiffness = i661[4]
  return i660
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i662 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i663 = data
  i662.m_LowerAngle = i663[0]
  i662.m_UpperAngle = i663[1]
  return i662
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i664 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i665 = data
  i664.m_MotorSpeed = i665[0]
  i664.m_MaximumMotorTorque = i665[1]
  return i664
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i666 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i667 = data
  i666.m_DampingRatio = i667[0]
  i666.m_Frequency = i667[1]
  i666.m_Angle = i667[2]
  return i666
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i668 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i669 = data
  i668.m_LowerTranslation = i669[0]
  i668.m_UpperTranslation = i669[1]
  return i668
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i670 = root || new pc.UnityMaterial()
  var i671 = data
  i670.name = i671[0]
  request.r(i671[1], i671[2], 0, i670, 'shader')
  i670.renderQueue = i671[3]
  i670.enableInstancing = !!i671[4]
  var i673 = i671[5]
  var i672 = []
  for(var i = 0; i < i673.length; i += 1) {
    i672.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i673[i + 0]) );
  }
  i670.floatParameters = i672
  var i675 = i671[6]
  var i674 = []
  for(var i = 0; i < i675.length; i += 1) {
    i674.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i675[i + 0]) );
  }
  i670.colorParameters = i674
  var i677 = i671[7]
  var i676 = []
  for(var i = 0; i < i677.length; i += 1) {
    i676.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i677[i + 0]) );
  }
  i670.vectorParameters = i676
  var i679 = i671[8]
  var i678 = []
  for(var i = 0; i < i679.length; i += 1) {
    i678.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i679[i + 0]) );
  }
  i670.textureParameters = i678
  var i681 = i671[9]
  var i680 = []
  for(var i = 0; i < i681.length; i += 1) {
    i680.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i681[i + 0]) );
  }
  i670.materialFlags = i680
  return i670
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i684 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i685 = data
  i684.name = i685[0]
  i684.value = i685[1]
  return i684
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i688 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i689 = data
  i688.name = i689[0]
  i688.value = new pc.Color(i689[1], i689[2], i689[3], i689[4])
  return i688
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i692 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i693 = data
  i692.name = i693[0]
  i692.value = new pc.Vec4( i693[1], i693[2], i693[3], i693[4] )
  return i692
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i696 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i697 = data
  i696.name = i697[0]
  request.r(i697[1], i697[2], 0, i696, 'value')
  return i696
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i700 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i701 = data
  i700.name = i701[0]
  i700.enabled = !!i701[1]
  return i700
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i702 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i703 = data
  i702.name = i703[0]
  i702.width = i703[1]
  i702.height = i703[2]
  i702.mipmapCount = i703[3]
  i702.anisoLevel = i703[4]
  i702.filterMode = i703[5]
  i702.hdr = !!i703[6]
  i702.format = i703[7]
  i702.wrapMode = i703[8]
  i702.alphaIsTransparency = !!i703[9]
  i702.alphaSource = i703[10]
  i702.graphicsFormat = i703[11]
  i702.sRGBTexture = !!i703[12]
  i702.desiredColorSpace = i703[13]
  i702.wrapU = i703[14]
  i702.wrapV = i703[15]
  return i702
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i704 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i705 = data
  i704.name = i705[0]
  i704.halfPrecision = !!i705[1]
  i704.useSimplification = !!i705[2]
  i704.useUInt32IndexFormat = !!i705[3]
  i704.vertexCount = i705[4]
  i704.aabb = i705[5]
  var i707 = i705[6]
  var i706 = []
  for(var i = 0; i < i707.length; i += 1) {
    i706.push( !!i707[i + 0] );
  }
  i704.streams = i706
  i704.vertices = i705[7]
  var i709 = i705[8]
  var i708 = []
  for(var i = 0; i < i709.length; i += 1) {
    i708.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i709[i + 0]) );
  }
  i704.subMeshes = i708
  var i711 = i705[9]
  var i710 = []
  for(var i = 0; i < i711.length; i += 16) {
    i710.push( new pc.Mat4().setData(i711[i + 0], i711[i + 1], i711[i + 2], i711[i + 3],  i711[i + 4], i711[i + 5], i711[i + 6], i711[i + 7],  i711[i + 8], i711[i + 9], i711[i + 10], i711[i + 11],  i711[i + 12], i711[i + 13], i711[i + 14], i711[i + 15]) );
  }
  i704.bindposes = i710
  var i713 = i705[10]
  var i712 = []
  for(var i = 0; i < i713.length; i += 1) {
    i712.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i713[i + 0]) );
  }
  i704.blendShapes = i712
  return i704
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i718 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i719 = data
  i718.triangles = i719[0]
  return i718
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i724 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i725 = data
  i724.name = i725[0]
  var i727 = i725[1]
  var i726 = []
  for(var i = 0; i < i727.length; i += 1) {
    i726.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i727[i + 0]) );
  }
  i724.frames = i726
  return i724
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i728 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i729 = data
  i728.name = i729[0]
  i728.index = i729[1]
  i728.startup = !!i729[2]
  return i728
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i730 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i731 = data
  i730.aspect = i731[0]
  i730.orthographic = !!i731[1]
  i730.orthographicSize = i731[2]
  i730.backgroundColor = new pc.Color(i731[3], i731[4], i731[5], i731[6])
  i730.nearClipPlane = i731[7]
  i730.farClipPlane = i731[8]
  i730.fieldOfView = i731[9]
  i730.depth = i731[10]
  i730.clearFlags = i731[11]
  i730.cullingMask = i731[12]
  i730.rect = i731[13]
  request.r(i731[14], i731[15], 0, i730, 'targetTexture')
  i730.usePhysicalProperties = !!i731[16]
  i730.focalLength = i731[17]
  i730.sensorSize = new pc.Vec2( i731[18], i731[19] )
  i730.lensShift = new pc.Vec2( i731[20], i731[21] )
  i730.gateFit = i731[22]
  i730.commandBufferCount = i731[23]
  i730.cameraType = i731[24]
  i730.enabled = !!i731[25]
  return i730
}

Deserializers["CameraFollow2D"] = function (request, data, root) {
  var i732 = root || request.c( 'CameraFollow2D' )
  var i733 = data
  request.r(i733[0], i733[1], 0, i732, 'target')
  i732.smoothSpeed = i733[2]
  i732.offset = new pc.Vec3( i733[3], i733[4], i733[5] )
  i732.followY = !!i733[6]
  return i732
}

Deserializers["AutoCameraFit"] = function (request, data, root) {
  var i734 = root || request.c( 'AutoCameraFit' )
  var i735 = data
  request.r(i735[0], i735[1], 0, i734, 'tallScreenObject')
  i734.tallScreenRatioThreshold = i735[2]
  i734.tallScreenYOffset = i735[3]
  request.r(i735[4], i735[5], 0, i734, 'canvasBtn')
  request.r(i735[6], i735[7], 0, i734, 'targetArea')
  i734.paddingLandscape = i735[8]
  i734.paddingPortrait = i735[9]
  i734.extraPaddingSmallScreen = i735[10]
  i734.smallScreenThreshold = i735[11]
  i734.autoUpdateOnResize = !!i735[12]
  i734.adjustInEditMode = !!i735[13]
  return i734
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i736 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i737 = data
  i736.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i737[0], i736.main)
  i736.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i737[1], i736.colorBySpeed)
  i736.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i737[2], i736.colorOverLifetime)
  i736.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i737[3], i736.emission)
  i736.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i737[4], i736.rotationBySpeed)
  i736.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i737[5], i736.rotationOverLifetime)
  i736.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i737[6], i736.shape)
  i736.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i737[7], i736.sizeBySpeed)
  i736.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i737[8], i736.sizeOverLifetime)
  i736.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i737[9], i736.textureSheetAnimation)
  i736.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i737[10], i736.velocityOverLifetime)
  i736.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i737[11], i736.noise)
  i736.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i737[12], i736.inheritVelocity)
  i736.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i737[13], i736.forceOverLifetime)
  i736.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i737[14], i736.limitVelocityOverLifetime)
  i736.useAutoRandomSeed = !!i737[15]
  i736.randomSeed = i737[16]
  return i736
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i738 = root || new pc.ParticleSystemMain()
  var i739 = data
  i738.duration = i739[0]
  i738.loop = !!i739[1]
  i738.prewarm = !!i739[2]
  i738.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i739[3], i738.startDelay)
  i738.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i739[4], i738.startLifetime)
  i738.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i739[5], i738.startSpeed)
  i738.startSize3D = !!i739[6]
  i738.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i739[7], i738.startSizeX)
  i738.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i739[8], i738.startSizeY)
  i738.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i739[9], i738.startSizeZ)
  i738.startRotation3D = !!i739[10]
  i738.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i739[11], i738.startRotationX)
  i738.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i739[12], i738.startRotationY)
  i738.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i739[13], i738.startRotationZ)
  i738.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i739[14], i738.startColor)
  i738.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i739[15], i738.gravityModifier)
  i738.simulationSpace = i739[16]
  request.r(i739[17], i739[18], 0, i738, 'customSimulationSpace')
  i738.simulationSpeed = i739[19]
  i738.useUnscaledTime = !!i739[20]
  i738.scalingMode = i739[21]
  i738.playOnAwake = !!i739[22]
  i738.maxParticles = i739[23]
  i738.emitterVelocityMode = i739[24]
  i738.stopAction = i739[25]
  return i738
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i740 = root || new pc.MinMaxCurve()
  var i741 = data
  i740.mode = i741[0]
  i740.curveMin = new pc.AnimationCurve( { keys_flow: i741[1] } )
  i740.curveMax = new pc.AnimationCurve( { keys_flow: i741[2] } )
  i740.curveMultiplier = i741[3]
  i740.constantMin = i741[4]
  i740.constantMax = i741[5]
  return i740
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i742 = root || new pc.MinMaxGradient()
  var i743 = data
  i742.mode = i743[0]
  i742.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i743[1], i742.gradientMin)
  i742.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i743[2], i742.gradientMax)
  i742.colorMin = new pc.Color(i743[3], i743[4], i743[5], i743[6])
  i742.colorMax = new pc.Color(i743[7], i743[8], i743[9], i743[10])
  return i742
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i744 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i745 = data
  i744.mode = i745[0]
  var i747 = i745[1]
  var i746 = []
  for(var i = 0; i < i747.length; i += 1) {
    i746.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i747[i + 0]) );
  }
  i744.colorKeys = i746
  var i749 = i745[2]
  var i748 = []
  for(var i = 0; i < i749.length; i += 1) {
    i748.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i749[i + 0]) );
  }
  i744.alphaKeys = i748
  return i744
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i750 = root || new pc.ParticleSystemColorBySpeed()
  var i751 = data
  i750.enabled = !!i751[0]
  i750.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i751[1], i750.color)
  i750.range = new pc.Vec2( i751[2], i751[3] )
  return i750
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i754 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i755 = data
  i754.color = new pc.Color(i755[0], i755[1], i755[2], i755[3])
  i754.time = i755[4]
  return i754
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i758 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i759 = data
  i758.alpha = i759[0]
  i758.time = i759[1]
  return i758
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i760 = root || new pc.ParticleSystemColorOverLifetime()
  var i761 = data
  i760.enabled = !!i761[0]
  i760.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i761[1], i760.color)
  return i760
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i762 = root || new pc.ParticleSystemEmitter()
  var i763 = data
  i762.enabled = !!i763[0]
  i762.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i763[1], i762.rateOverTime)
  i762.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i763[2], i762.rateOverDistance)
  var i765 = i763[3]
  var i764 = []
  for(var i = 0; i < i765.length; i += 1) {
    i764.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i765[i + 0]) );
  }
  i762.bursts = i764
  return i762
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i768 = root || new pc.ParticleSystemBurst()
  var i769 = data
  i768.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i769[0], i768.count)
  i768.cycleCount = i769[1]
  i768.minCount = i769[2]
  i768.maxCount = i769[3]
  i768.repeatInterval = i769[4]
  i768.time = i769[5]
  return i768
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i770 = root || new pc.ParticleSystemRotationBySpeed()
  var i771 = data
  i770.enabled = !!i771[0]
  i770.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i771[1], i770.x)
  i770.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i771[2], i770.y)
  i770.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i771[3], i770.z)
  i770.separateAxes = !!i771[4]
  i770.range = new pc.Vec2( i771[5], i771[6] )
  return i770
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i772 = root || new pc.ParticleSystemRotationOverLifetime()
  var i773 = data
  i772.enabled = !!i773[0]
  i772.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i773[1], i772.x)
  i772.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i773[2], i772.y)
  i772.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i773[3], i772.z)
  i772.separateAxes = !!i773[4]
  return i772
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i774 = root || new pc.ParticleSystemShape()
  var i775 = data
  i774.enabled = !!i775[0]
  i774.shapeType = i775[1]
  i774.randomDirectionAmount = i775[2]
  i774.sphericalDirectionAmount = i775[3]
  i774.randomPositionAmount = i775[4]
  i774.alignToDirection = !!i775[5]
  i774.radius = i775[6]
  i774.radiusMode = i775[7]
  i774.radiusSpread = i775[8]
  i774.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i775[9], i774.radiusSpeed)
  i774.radiusThickness = i775[10]
  i774.angle = i775[11]
  i774.length = i775[12]
  i774.boxThickness = new pc.Vec3( i775[13], i775[14], i775[15] )
  i774.meshShapeType = i775[16]
  request.r(i775[17], i775[18], 0, i774, 'mesh')
  request.r(i775[19], i775[20], 0, i774, 'meshRenderer')
  request.r(i775[21], i775[22], 0, i774, 'skinnedMeshRenderer')
  i774.useMeshMaterialIndex = !!i775[23]
  i774.meshMaterialIndex = i775[24]
  i774.useMeshColors = !!i775[25]
  i774.normalOffset = i775[26]
  i774.arc = i775[27]
  i774.arcMode = i775[28]
  i774.arcSpread = i775[29]
  i774.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i775[30], i774.arcSpeed)
  i774.donutRadius = i775[31]
  i774.position = new pc.Vec3( i775[32], i775[33], i775[34] )
  i774.rotation = new pc.Vec3( i775[35], i775[36], i775[37] )
  i774.scale = new pc.Vec3( i775[38], i775[39], i775[40] )
  return i774
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i776 = root || new pc.ParticleSystemSizeBySpeed()
  var i777 = data
  i776.enabled = !!i777[0]
  i776.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i777[1], i776.x)
  i776.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i777[2], i776.y)
  i776.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i777[3], i776.z)
  i776.separateAxes = !!i777[4]
  i776.range = new pc.Vec2( i777[5], i777[6] )
  return i776
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i778 = root || new pc.ParticleSystemSizeOverLifetime()
  var i779 = data
  i778.enabled = !!i779[0]
  i778.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i779[1], i778.x)
  i778.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i779[2], i778.y)
  i778.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i779[3], i778.z)
  i778.separateAxes = !!i779[4]
  return i778
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i780 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i781 = data
  i780.enabled = !!i781[0]
  i780.mode = i781[1]
  i780.animation = i781[2]
  i780.numTilesX = i781[3]
  i780.numTilesY = i781[4]
  i780.useRandomRow = !!i781[5]
  i780.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i781[6], i780.frameOverTime)
  i780.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i781[7], i780.startFrame)
  i780.cycleCount = i781[8]
  i780.rowIndex = i781[9]
  i780.flipU = i781[10]
  i780.flipV = i781[11]
  i780.spriteCount = i781[12]
  var i783 = i781[13]
  var i782 = []
  for(var i = 0; i < i783.length; i += 2) {
  request.r(i783[i + 0], i783[i + 1], 2, i782, '')
  }
  i780.sprites = i782
  return i780
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i786 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i787 = data
  i786.enabled = !!i787[0]
  i786.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i787[1], i786.x)
  i786.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i787[2], i786.y)
  i786.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i787[3], i786.z)
  i786.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i787[4], i786.radial)
  i786.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i787[5], i786.speedModifier)
  i786.space = i787[6]
  i786.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i787[7], i786.orbitalX)
  i786.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i787[8], i786.orbitalY)
  i786.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i787[9], i786.orbitalZ)
  i786.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i787[10], i786.orbitalOffsetX)
  i786.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i787[11], i786.orbitalOffsetY)
  i786.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i787[12], i786.orbitalOffsetZ)
  return i786
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i788 = root || new pc.ParticleSystemNoise()
  var i789 = data
  i788.enabled = !!i789[0]
  i788.separateAxes = !!i789[1]
  i788.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i789[2], i788.strengthX)
  i788.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i789[3], i788.strengthY)
  i788.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i789[4], i788.strengthZ)
  i788.frequency = i789[5]
  i788.damping = !!i789[6]
  i788.octaveCount = i789[7]
  i788.octaveMultiplier = i789[8]
  i788.octaveScale = i789[9]
  i788.quality = i789[10]
  i788.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i789[11], i788.scrollSpeed)
  i788.scrollSpeedMultiplier = i789[12]
  i788.remapEnabled = !!i789[13]
  i788.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i789[14], i788.remapX)
  i788.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i789[15], i788.remapY)
  i788.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i789[16], i788.remapZ)
  i788.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i789[17], i788.positionAmount)
  i788.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i789[18], i788.rotationAmount)
  i788.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i789[19], i788.sizeAmount)
  return i788
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i790 = root || new pc.ParticleSystemInheritVelocity()
  var i791 = data
  i790.enabled = !!i791[0]
  i790.mode = i791[1]
  i790.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i791[2], i790.curve)
  return i790
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i792 = root || new pc.ParticleSystemForceOverLifetime()
  var i793 = data
  i792.enabled = !!i793[0]
  i792.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i793[1], i792.x)
  i792.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i793[2], i792.y)
  i792.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i793[3], i792.z)
  i792.space = i793[4]
  i792.randomized = !!i793[5]
  return i792
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i794 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i795 = data
  i794.enabled = !!i795[0]
  i794.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i795[1], i794.limit)
  i794.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i795[2], i794.limitX)
  i794.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i795[3], i794.limitY)
  i794.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i795[4], i794.limitZ)
  i794.dampen = i795[5]
  i794.separateAxes = !!i795[6]
  i794.space = i795[7]
  i794.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i795[8], i794.drag)
  i794.multiplyDragByParticleSize = !!i795[9]
  i794.multiplyDragByParticleVelocity = !!i795[10]
  return i794
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i796 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i797 = data
  request.r(i797[0], i797[1], 0, i796, 'mesh')
  i796.meshCount = i797[2]
  i796.activeVertexStreamsCount = i797[3]
  i796.alignment = i797[4]
  i796.renderMode = i797[5]
  i796.sortMode = i797[6]
  i796.lengthScale = i797[7]
  i796.velocityScale = i797[8]
  i796.cameraVelocityScale = i797[9]
  i796.normalDirection = i797[10]
  i796.sortingFudge = i797[11]
  i796.minParticleSize = i797[12]
  i796.maxParticleSize = i797[13]
  i796.pivot = new pc.Vec3( i797[14], i797[15], i797[16] )
  request.r(i797[17], i797[18], 0, i796, 'trailMaterial')
  i796.applyActiveColorSpace = !!i797[19]
  i796.enabled = !!i797[20]
  request.r(i797[21], i797[22], 0, i796, 'sharedMaterial')
  var i799 = i797[23]
  var i798 = []
  for(var i = 0; i < i799.length; i += 2) {
  request.r(i799[i + 0], i799[i + 1], 2, i798, '')
  }
  i796.sharedMaterials = i798
  i796.receiveShadows = !!i797[24]
  i796.shadowCastingMode = i797[25]
  i796.sortingLayerID = i797[26]
  i796.sortingOrder = i797[27]
  i796.lightmapIndex = i797[28]
  i796.lightmapSceneIndex = i797[29]
  i796.lightmapScaleOffset = new pc.Vec4( i797[30], i797[31], i797[32], i797[33] )
  i796.lightProbeUsage = i797[34]
  i796.reflectionProbeUsage = i797[35]
  return i796
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i802 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i803 = data
  i802.name = i803[0]
  i802.tagId = i803[1]
  i802.enabled = !!i803[2]
  i802.isStatic = !!i803[3]
  i802.layer = i803[4]
  return i802
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i804 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i805 = data
  i804.color = new pc.Color(i805[0], i805[1], i805[2], i805[3])
  request.r(i805[4], i805[5], 0, i804, 'sprite')
  i804.flipX = !!i805[6]
  i804.flipY = !!i805[7]
  i804.drawMode = i805[8]
  i804.size = new pc.Vec2( i805[9], i805[10] )
  i804.tileMode = i805[11]
  i804.adaptiveModeThreshold = i805[12]
  i804.maskInteraction = i805[13]
  i804.spriteSortPoint = i805[14]
  i804.enabled = !!i805[15]
  request.r(i805[16], i805[17], 0, i804, 'sharedMaterial')
  var i807 = i805[18]
  var i806 = []
  for(var i = 0; i < i807.length; i += 2) {
  request.r(i807[i + 0], i807[i + 1], 2, i806, '')
  }
  i804.sharedMaterials = i806
  i804.receiveShadows = !!i805[19]
  i804.shadowCastingMode = i805[20]
  i804.sortingLayerID = i805[21]
  i804.sortingOrder = i805[22]
  i804.lightmapIndex = i805[23]
  i804.lightmapSceneIndex = i805[24]
  i804.lightmapScaleOffset = new pc.Vec4( i805[25], i805[26], i805[27], i805[28] )
  i804.lightProbeUsage = i805[29]
  i804.reflectionProbeUsage = i805[30]
  return i804
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i808 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i809 = data
  request.r(i809[0], i809[1], 0, i808, 'animatorController')
  request.r(i809[2], i809[3], 0, i808, 'avatar')
  i808.updateMode = i809[4]
  i808.hasTransformHierarchy = !!i809[5]
  i808.applyRootMotion = !!i809[6]
  var i811 = i809[7]
  var i810 = []
  for(var i = 0; i < i811.length; i += 2) {
  request.r(i811[i + 0], i811[i + 1], 2, i810, '')
  }
  i808.humanBones = i810
  i808.enabled = !!i809[8]
  return i808
}

Deserializers["MoveBetweenPoints"] = function (request, data, root) {
  var i814 = root || request.c( 'MoveBetweenPoints' )
  var i815 = data
  request.r(i815[0], i815[1], 0, i814, 'pointA')
  request.r(i815[2], i815[3], 0, i814, 'pointB')
  i814.duration = i815[4]
  return i814
}

Deserializers["ScreenHeightPositionAnchor"] = function (request, data, root) {
  var i816 = root || request.c( 'ScreenHeightPositionAnchor' )
  var i817 = data
  request.r(i817[0], i817[1], 0, i816, 'anchorPoint')
  request.r(i817[2], i817[3], 0, i816, 'targetCamera')
  i816.viewportYRatio = i817[4]
  i816.alignOnStart = !!i817[5]
  i816.alignOnEnable = !!i817[6]
  i816.realignOnScreenSizeChanged = !!i817[7]
  i816.drawGizmos = !!i817[8]
  i816.targetLineColor = new pc.Color(i817[9], i817[10], i817[11], i817[12])
  i816.anchorColor = new pc.Color(i817[13], i817[14], i817[15], i817[16])
  return i816
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i818 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i819 = data
  i818.usedByComposite = !!i819[0]
  i818.autoTiling = !!i819[1]
  i818.size = new pc.Vec2( i819[2], i819[3] )
  i818.edgeRadius = i819[4]
  i818.enabled = !!i819[5]
  i818.isTrigger = !!i819[6]
  i818.usedByEffector = !!i819[7]
  i818.density = i819[8]
  i818.offset = new pc.Vec2( i819[9], i819[10] )
  request.r(i819[11], i819[12], 0, i818, 'material')
  return i818
}

Deserializers["ClickToStore"] = function (request, data, root) {
  var i820 = root || request.c( 'ClickToStore' )
  var i821 = data
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
  request.r(i843[6], i843[7], 0, i842, 'playerNameText')
  request.r(i843[8], i843[9], 0, i842, 'playerImage')
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

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i858 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i859 = data
  request.r(i859[0], i859[1], 0, i858, 'clip')
  request.r(i859[2], i859[3], 0, i858, 'outputAudioMixerGroup')
  i858.playOnAwake = !!i859[4]
  i858.loop = !!i859[5]
  i858.time = i859[6]
  i858.volume = i859[7]
  i858.pitch = i859[8]
  i858.enabled = !!i859[9]
  return i858
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i860 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i861 = data
  i860.planeDistance = i861[0]
  i860.referencePixelsPerUnit = i861[1]
  i860.isFallbackOverlay = !!i861[2]
  i860.renderMode = i861[3]
  i860.renderOrder = i861[4]
  i860.sortingLayerName = i861[5]
  i860.sortingOrder = i861[6]
  i860.scaleFactor = i861[7]
  request.r(i861[8], i861[9], 0, i860, 'worldCamera')
  i860.overrideSorting = !!i861[10]
  i860.pixelPerfect = !!i861[11]
  i860.targetDisplay = i861[12]
  i860.overridePixelPerfect = !!i861[13]
  i860.enabled = !!i861[14]
  return i860
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i862 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i863 = data
  i862.m_UiScaleMode = i863[0]
  i862.m_ReferencePixelsPerUnit = i863[1]
  i862.m_ScaleFactor = i863[2]
  i862.m_ReferenceResolution = new pc.Vec2( i863[3], i863[4] )
  i862.m_ScreenMatchMode = i863[5]
  i862.m_MatchWidthOrHeight = i863[6]
  i862.m_PhysicalUnit = i863[7]
  i862.m_FallbackScreenDPI = i863[8]
  i862.m_DefaultSpriteDPI = i863[9]
  i862.m_DynamicPixelsPerUnit = i863[10]
  i862.m_PresetInfoIsWorld = !!i863[11]
  return i862
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i864 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i865 = data
  i864.m_IgnoreReversedGraphics = !!i865[0]
  i864.m_BlockingObjects = i865[1]
  i864.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i865[2] )
  return i864
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i866 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i867 = data
  i866.cullTransparentMesh = !!i867[0]
  return i866
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i868 = root || request.c( 'UnityEngine.UI.Image' )
  var i869 = data
  request.r(i869[0], i869[1], 0, i868, 'm_Sprite')
  i868.m_Type = i869[2]
  i868.m_PreserveAspect = !!i869[3]
  i868.m_FillCenter = !!i869[4]
  i868.m_FillMethod = i869[5]
  i868.m_FillAmount = i869[6]
  i868.m_FillClockwise = !!i869[7]
  i868.m_FillOrigin = i869[8]
  i868.m_UseSpriteMesh = !!i869[9]
  i868.m_PixelsPerUnitMultiplier = i869[10]
  request.r(i869[11], i869[12], 0, i868, 'm_Material')
  i868.m_Maskable = !!i869[13]
  i868.m_Color = new pc.Color(i869[14], i869[15], i869[16], i869[17])
  i868.m_RaycastTarget = !!i869[18]
  i868.m_RaycastPadding = new pc.Vec4( i869[19], i869[20], i869[21], i869[22] )
  return i868
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D"] = function (request, data, root) {
  var i870 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D' )
  var i871 = data
  i870.usedByComposite = !!i871[0]
  i870.autoTiling = !!i871[1]
  var i873 = i871[2]
  var i872 = []
  for(var i = 0; i < i873.length; i += 1) {
  var i875 = i873[i + 0]
  var i874 = []
  for(var i = 0; i < i875.length; i += 2) {
    i874.push( new pc.Vec2( i875[i + 0], i875[i + 1] ) );
  }
    i872.push( i874 );
  }
  i870.points = i872
  i870.enabled = !!i871[3]
  i870.isTrigger = !!i871[4]
  i870.usedByEffector = !!i871[5]
  i870.density = i871[6]
  i870.offset = new pc.Vec2( i871[7], i871[8] )
  request.r(i871[9], i871[10], 0, i870, 'material')
  return i870
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i882 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i883 = data
  i882.bodyType = i883[0]
  request.r(i883[1], i883[2], 0, i882, 'material')
  i882.simulated = !!i883[3]
  i882.useAutoMass = !!i883[4]
  i882.mass = i883[5]
  i882.drag = i883[6]
  i882.angularDrag = i883[7]
  i882.gravityScale = i883[8]
  i882.collisionDetectionMode = i883[9]
  i882.sleepMode = i883[10]
  i882.constraints = i883[11]
  return i882
}

Deserializers["BatStrikeController"] = function (request, data, root) {
  var i884 = root || request.c( 'BatStrikeController' )
  var i885 = data
  i884.pullSpeed = i885[0]
  i884.maxPullDistance = i885[1]
  i884.minHoldTime = i885[2]
  i884.strikeForce = i885[3]
  i884.targetTag = i885[4]
  return i884
}

Deserializers["CupCollision"] = function (request, data, root) {
  var i886 = root || request.c( 'CupCollision' )
  var i887 = data
  i886.baseTag = i887[0]
  request.r(i887[1], i887[2], 0, i886, 'objectToActivate')
  return i886
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider2D"] = function (request, data, root) {
  var i888 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider2D' )
  var i889 = data
  i888.size = new pc.Vec2( i889[0], i889[1] )
  i888.direction = i889[2]
  i888.enabled = !!i889[3]
  i888.isTrigger = !!i889[4]
  i888.usedByEffector = !!i889[5]
  i888.density = i889[6]
  i888.offset = new pc.Vec2( i889[7], i889[8] )
  request.r(i889[9], i889[10], 0, i888, 'material')
  return i888
}

Deserializers["SlotTrigger"] = function (request, data, root) {
  var i890 = root || request.c( 'SlotTrigger' )
  var i891 = data
  request.r(i891[0], i891[1], 0, i890, 'cardData')
  i890.targetTag = i891[2]
  request.r(i891[3], i891[4], 0, i890, 'yAnchor')
  i890.moveSpeed = i891[5]
  request.r(i891[6], i891[7], 0, i890, 'objectToMoveDown')
  i890.targetScreenYRatio = i891[8]
  return i890
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteMask"] = function (request, data, root) {
  var i892 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteMask' )
  var i893 = data
  i892.frontSortingLayerID = i893[0]
  i892.frontSortingOrder = i893[1]
  i892.backSortingLayerID = i893[2]
  i892.backSortingOrder = i893[3]
  i892.alphaCutoff = i893[4]
  request.r(i893[5], i893[6], 0, i892, 'sprite')
  i892.tileMode = i893[7]
  i892.isCustomRangeActive = !!i893[8]
  i892.spriteSortPoint = i893[9]
  i892.enabled = !!i893[10]
  request.r(i893[11], i893[12], 0, i892, 'sharedMaterial')
  var i895 = i893[13]
  var i894 = []
  for(var i = 0; i < i895.length; i += 2) {
  request.r(i895[i + 0], i895[i + 1], 2, i894, '')
  }
  i892.sharedMaterials = i894
  i892.receiveShadows = !!i893[14]
  i892.shadowCastingMode = i893[15]
  i892.sortingLayerID = i893[16]
  i892.sortingOrder = i893[17]
  i892.lightmapIndex = i893[18]
  i892.lightmapSceneIndex = i893[19]
  i892.lightmapScaleOffset = new pc.Vec4( i893[20], i893[21], i893[22], i893[23] )
  i892.lightProbeUsage = i893[24]
  i892.reflectionProbeUsage = i893[25]
  return i892
}

Deserializers["HideOnFirstClick"] = function (request, data, root) {
  var i896 = root || request.c( 'HideOnFirstClick' )
  var i897 = data
  request.r(i897[0], i897[1], 0, i896, 'objectToHide')
  return i896
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i898 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i899 = data
  request.r(i899[0], i899[1], 0, i898, 'm_FirstSelected')
  i898.m_sendNavigationEvents = !!i899[2]
  i898.m_DragThreshold = i899[3]
  return i898
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i900 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i901 = data
  i900.m_HorizontalAxis = i901[0]
  i900.m_VerticalAxis = i901[1]
  i900.m_SubmitButton = i901[2]
  i900.m_CancelButton = i901[3]
  i900.m_InputActionsPerSecond = i901[4]
  i900.m_RepeatDelay = i901[5]
  i900.m_ForceModuleActive = !!i901[6]
  i900.m_SendPointerHoverToParent = !!i901[7]
  return i900
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i902 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i903 = data
  i902.ambientIntensity = i903[0]
  i902.reflectionIntensity = i903[1]
  i902.ambientMode = i903[2]
  i902.ambientLight = new pc.Color(i903[3], i903[4], i903[5], i903[6])
  i902.ambientSkyColor = new pc.Color(i903[7], i903[8], i903[9], i903[10])
  i902.ambientGroundColor = new pc.Color(i903[11], i903[12], i903[13], i903[14])
  i902.ambientEquatorColor = new pc.Color(i903[15], i903[16], i903[17], i903[18])
  i902.fogColor = new pc.Color(i903[19], i903[20], i903[21], i903[22])
  i902.fogEndDistance = i903[23]
  i902.fogStartDistance = i903[24]
  i902.fogDensity = i903[25]
  i902.fog = !!i903[26]
  request.r(i903[27], i903[28], 0, i902, 'skybox')
  i902.fogMode = i903[29]
  var i905 = i903[30]
  var i904 = []
  for(var i = 0; i < i905.length; i += 1) {
    i904.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i905[i + 0]) );
  }
  i902.lightmaps = i904
  i902.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i903[31], i902.lightProbes)
  i902.lightmapsMode = i903[32]
  i902.mixedBakeMode = i903[33]
  i902.environmentLightingMode = i903[34]
  i902.ambientProbe = new pc.SphericalHarmonicsL2(i903[35])
  i902.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i903[36])
  i902.useReferenceAmbientProbe = !!i903[37]
  request.r(i903[38], i903[39], 0, i902, 'customReflection')
  request.r(i903[40], i903[41], 0, i902, 'defaultReflection')
  i902.defaultReflectionMode = i903[42]
  i902.defaultReflectionResolution = i903[43]
  i902.sunLightObjectId = i903[44]
  i902.pixelLightCount = i903[45]
  i902.defaultReflectionHDR = !!i903[46]
  i902.hasLightDataAsset = !!i903[47]
  i902.hasManualGenerate = !!i903[48]
  return i902
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i908 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i909 = data
  request.r(i909[0], i909[1], 0, i908, 'lightmapColor')
  request.r(i909[2], i909[3], 0, i908, 'lightmapDirection')
  request.r(i909[4], i909[5], 0, i908, 'shadowMask')
  return i908
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i910 = root || new UnityEngine.LightProbes()
  var i911 = data
  return i910
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.PhysicsMaterial2D"] = function (request, data, root) {
  var i918 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.PhysicsMaterial2D' )
  var i919 = data
  i918.name = i919[0]
  i918.bounciness = i919[1]
  i918.friction = i919[2]
  return i918
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i920 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i921 = data
  var i923 = i921[0]
  var i922 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i923.length; i += 1) {
    i922.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i923[i + 0]));
  }
  i920.ShaderCompilationErrors = i922
  i920.name = i921[1]
  i920.guid = i921[2]
  var i925 = i921[3]
  var i924 = []
  for(var i = 0; i < i925.length; i += 1) {
    i924.push( i925[i + 0] );
  }
  i920.shaderDefinedKeywords = i924
  var i927 = i921[4]
  var i926 = []
  for(var i = 0; i < i927.length; i += 1) {
    i926.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i927[i + 0]) );
  }
  i920.passes = i926
  var i929 = i921[5]
  var i928 = []
  for(var i = 0; i < i929.length; i += 1) {
    i928.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i929[i + 0]) );
  }
  i920.usePasses = i928
  var i931 = i921[6]
  var i930 = []
  for(var i = 0; i < i931.length; i += 1) {
    i930.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i931[i + 0]) );
  }
  i920.defaultParameterValues = i930
  request.r(i921[7], i921[8], 0, i920, 'unityFallbackShader')
  i920.readDepth = !!i921[9]
  i920.hasDepthOnlyPass = !!i921[10]
  i920.isCreatedByShaderGraph = !!i921[11]
  i920.disableBatching = !!i921[12]
  i920.compiled = !!i921[13]
  return i920
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i934 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i935 = data
  i934.shaderName = i935[0]
  i934.errorMessage = i935[1]
  return i934
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i940 = root || new pc.UnityShaderPass()
  var i941 = data
  i940.id = i941[0]
  i940.subShaderIndex = i941[1]
  i940.name = i941[2]
  i940.passType = i941[3]
  i940.grabPassTextureName = i941[4]
  i940.usePass = !!i941[5]
  i940.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i941[6], i940.zTest)
  i940.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i941[7], i940.zWrite)
  i940.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i941[8], i940.culling)
  i940.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i941[9], i940.blending)
  i940.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i941[10], i940.alphaBlending)
  i940.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i941[11], i940.colorWriteMask)
  i940.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i941[12], i940.offsetUnits)
  i940.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i941[13], i940.offsetFactor)
  i940.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i941[14], i940.stencilRef)
  i940.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i941[15], i940.stencilReadMask)
  i940.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i941[16], i940.stencilWriteMask)
  i940.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i941[17], i940.stencilOp)
  i940.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i941[18], i940.stencilOpFront)
  i940.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i941[19], i940.stencilOpBack)
  var i943 = i941[20]
  var i942 = []
  for(var i = 0; i < i943.length; i += 1) {
    i942.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i943[i + 0]) );
  }
  i940.tags = i942
  var i945 = i941[21]
  var i944 = []
  for(var i = 0; i < i945.length; i += 1) {
    i944.push( i945[i + 0] );
  }
  i940.passDefinedKeywords = i944
  var i947 = i941[22]
  var i946 = []
  for(var i = 0; i < i947.length; i += 1) {
    i946.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i947[i + 0]) );
  }
  i940.passDefinedKeywordGroups = i946
  var i949 = i941[23]
  var i948 = []
  for(var i = 0; i < i949.length; i += 1) {
    i948.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i949[i + 0]) );
  }
  i940.variants = i948
  var i951 = i941[24]
  var i950 = []
  for(var i = 0; i < i951.length; i += 1) {
    i950.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i951[i + 0]) );
  }
  i940.excludedVariants = i950
  i940.hasDepthReader = !!i941[25]
  return i940
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i952 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i953 = data
  i952.val = i953[0]
  i952.name = i953[1]
  return i952
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i954 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i955 = data
  i954.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i955[0], i954.src)
  i954.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i955[1], i954.dst)
  i954.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i955[2], i954.op)
  return i954
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i956 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i957 = data
  i956.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i957[0], i956.pass)
  i956.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i957[1], i956.fail)
  i956.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i957[2], i956.zFail)
  i956.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i957[3], i956.comp)
  return i956
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i960 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i961 = data
  i960.name = i961[0]
  i960.value = i961[1]
  return i960
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i964 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i965 = data
  var i967 = i965[0]
  var i966 = []
  for(var i = 0; i < i967.length; i += 1) {
    i966.push( i967[i + 0] );
  }
  i964.keywords = i966
  i964.hasDiscard = !!i965[1]
  return i964
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i970 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i971 = data
  i970.passId = i971[0]
  i970.subShaderIndex = i971[1]
  var i973 = i971[2]
  var i972 = []
  for(var i = 0; i < i973.length; i += 1) {
    i972.push( i973[i + 0] );
  }
  i970.keywords = i972
  i970.vertexProgram = i971[3]
  i970.fragmentProgram = i971[4]
  i970.exportedForWebGl2 = !!i971[5]
  i970.readDepth = !!i971[6]
  return i970
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i976 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i977 = data
  request.r(i977[0], i977[1], 0, i976, 'shader')
  i976.pass = i977[2]
  return i976
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i980 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i981 = data
  i980.name = i981[0]
  i980.type = i981[1]
  i980.value = new pc.Vec4( i981[2], i981[3], i981[4], i981[5] )
  i980.textureValue = i981[6]
  i980.shaderPropertyFlag = i981[7]
  return i980
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i982 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i983 = data
  i982.name = i983[0]
  request.r(i983[1], i983[2], 0, i982, 'texture')
  i982.aabb = i983[3]
  i982.vertices = i983[4]
  i982.triangles = i983[5]
  i982.textureRect = UnityEngine.Rect.MinMaxRect(i983[6], i983[7], i983[8], i983[9])
  i982.packedRect = UnityEngine.Rect.MinMaxRect(i983[10], i983[11], i983[12], i983[13])
  i982.border = new pc.Vec4( i983[14], i983[15], i983[16], i983[17] )
  i982.transparency = i983[18]
  i982.bounds = i983[19]
  i982.pixelsPerUnit = i983[20]
  i982.textureWidth = i983[21]
  i982.textureHeight = i983[22]
  i982.nativeSize = new pc.Vec2( i983[23], i983[24] )
  i982.pivot = new pc.Vec2( i983[25], i983[26] )
  i982.textureRectOffset = new pc.Vec2( i983[27], i983[28] )
  return i982
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i984 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i985 = data
  i984.name = i985[0]
  return i984
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i986 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i987 = data
  i986.name = i987[0]
  i986.wrapMode = i987[1]
  i986.isLooping = !!i987[2]
  i986.length = i987[3]
  var i989 = i987[4]
  var i988 = []
  for(var i = 0; i < i989.length; i += 1) {
    i988.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i989[i + 0]) );
  }
  i986.curves = i988
  var i991 = i987[5]
  var i990 = []
  for(var i = 0; i < i991.length; i += 1) {
    i990.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i991[i + 0]) );
  }
  i986.events = i990
  i986.halfPrecision = !!i987[6]
  i986._frameRate = i987[7]
  i986.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i987[8], i986.localBounds)
  i986.hasMuscleCurves = !!i987[9]
  var i993 = i987[10]
  var i992 = []
  for(var i = 0; i < i993.length; i += 1) {
    i992.push( i993[i + 0] );
  }
  i986.clipMuscleConstant = i992
  i986.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i987[11], i986.clipBindingConstant)
  return i986
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i996 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i997 = data
  i996.path = i997[0]
  i996.hash = i997[1]
  i996.componentType = i997[2]
  i996.property = i997[3]
  i996.keys = i997[4]
  var i999 = i997[5]
  var i998 = []
  for(var i = 0; i < i999.length; i += 1) {
    i998.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i999[i + 0]) );
  }
  i996.objectReferenceKeys = i998
  return i996
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i1002 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i1003 = data
  i1002.time = i1003[0]
  request.r(i1003[1], i1003[2], 0, i1002, 'value')
  return i1002
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i1006 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i1007 = data
  i1006.functionName = i1007[0]
  i1006.floatParameter = i1007[1]
  i1006.intParameter = i1007[2]
  i1006.stringParameter = i1007[3]
  request.r(i1007[4], i1007[5], 0, i1006, 'objectReferenceParameter')
  i1006.time = i1007[6]
  return i1006
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i1008 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i1009 = data
  i1008.center = new pc.Vec3( i1009[0], i1009[1], i1009[2] )
  i1008.extends = new pc.Vec3( i1009[3], i1009[4], i1009[5] )
  return i1008
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i1012 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i1013 = data
  var i1015 = i1013[0]
  var i1014 = []
  for(var i = 0; i < i1015.length; i += 1) {
    i1014.push( i1015[i + 0] );
  }
  i1012.genericBindings = i1014
  var i1017 = i1013[1]
  var i1016 = []
  for(var i = 0; i < i1017.length; i += 1) {
    i1016.push( i1017[i + 0] );
  }
  i1012.pptrCurveMapping = i1016
  return i1012
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1018 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1019 = data
  i1018.name = i1019[0]
  i1018.ascent = i1019[1]
  i1018.originalLineHeight = i1019[2]
  i1018.fontSize = i1019[3]
  var i1021 = i1019[4]
  var i1020 = []
  for(var i = 0; i < i1021.length; i += 1) {
    i1020.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1021[i + 0]) );
  }
  i1018.characterInfo = i1020
  request.r(i1019[5], i1019[6], 0, i1018, 'texture')
  i1018.originalFontSize = i1019[7]
  return i1018
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1024 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1025 = data
  i1024.index = i1025[0]
  i1024.advance = i1025[1]
  i1024.bearing = i1025[2]
  i1024.glyphWidth = i1025[3]
  i1024.glyphHeight = i1025[4]
  i1024.minX = i1025[5]
  i1024.maxX = i1025[6]
  i1024.minY = i1025[7]
  i1024.maxY = i1025[8]
  i1024.uvBottomLeftX = i1025[9]
  i1024.uvBottomLeftY = i1025[10]
  i1024.uvBottomRightX = i1025[11]
  i1024.uvBottomRightY = i1025[12]
  i1024.uvTopLeftX = i1025[13]
  i1024.uvTopLeftY = i1025[14]
  i1024.uvTopRightX = i1025[15]
  i1024.uvTopRightY = i1025[16]
  return i1024
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i1026 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i1027 = data
  i1026.name = i1027[0]
  var i1029 = i1027[1]
  var i1028 = []
  for(var i = 0; i < i1029.length; i += 1) {
    i1028.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i1029[i + 0]) );
  }
  i1026.layers = i1028
  var i1031 = i1027[2]
  var i1030 = []
  for(var i = 0; i < i1031.length; i += 1) {
    i1030.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i1031[i + 0]) );
  }
  i1026.parameters = i1030
  i1026.animationClips = i1027[3]
  i1026.avatarUnsupported = i1027[4]
  return i1026
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i1034 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i1035 = data
  i1034.name = i1035[0]
  i1034.defaultWeight = i1035[1]
  i1034.blendingMode = i1035[2]
  i1034.avatarMask = i1035[3]
  i1034.syncedLayerIndex = i1035[4]
  i1034.syncedLayerAffectsTiming = !!i1035[5]
  i1034.syncedLayers = i1035[6]
  i1034.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1035[7], i1034.stateMachine)
  return i1034
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i1036 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i1037 = data
  i1036.id = i1037[0]
  i1036.name = i1037[1]
  i1036.path = i1037[2]
  var i1039 = i1037[3]
  var i1038 = []
  for(var i = 0; i < i1039.length; i += 1) {
    i1038.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i1039[i + 0]) );
  }
  i1036.states = i1038
  var i1041 = i1037[4]
  var i1040 = []
  for(var i = 0; i < i1041.length; i += 1) {
    i1040.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1041[i + 0]) );
  }
  i1036.machines = i1040
  var i1043 = i1037[5]
  var i1042 = []
  for(var i = 0; i < i1043.length; i += 1) {
    i1042.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1043[i + 0]) );
  }
  i1036.entryStateTransitions = i1042
  var i1045 = i1037[6]
  var i1044 = []
  for(var i = 0; i < i1045.length; i += 1) {
    i1044.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1045[i + 0]) );
  }
  i1036.exitStateTransitions = i1044
  var i1047 = i1037[7]
  var i1046 = []
  for(var i = 0; i < i1047.length; i += 1) {
    i1046.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1047[i + 0]) );
  }
  i1036.anyStateTransitions = i1046
  i1036.defaultStateId = i1037[8]
  return i1036
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i1050 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i1051 = data
  i1050.id = i1051[0]
  i1050.name = i1051[1]
  i1050.cycleOffset = i1051[2]
  i1050.cycleOffsetParameter = i1051[3]
  i1050.cycleOffsetParameterActive = !!i1051[4]
  i1050.mirror = !!i1051[5]
  i1050.mirrorParameter = i1051[6]
  i1050.mirrorParameterActive = !!i1051[7]
  i1050.motionId = i1051[8]
  i1050.nameHash = i1051[9]
  i1050.fullPathHash = i1051[10]
  i1050.speed = i1051[11]
  i1050.speedParameter = i1051[12]
  i1050.speedParameterActive = !!i1051[13]
  i1050.tag = i1051[14]
  i1050.tagHash = i1051[15]
  i1050.writeDefaultValues = !!i1051[16]
  var i1053 = i1051[17]
  var i1052 = []
  for(var i = 0; i < i1053.length; i += 2) {
  request.r(i1053[i + 0], i1053[i + 1], 2, i1052, '')
  }
  i1050.behaviours = i1052
  var i1055 = i1051[18]
  var i1054 = []
  for(var i = 0; i < i1055.length; i += 1) {
    i1054.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1055[i + 0]) );
  }
  i1050.transitions = i1054
  return i1050
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1060 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1061 = data
  i1060.fullPath = i1061[0]
  i1060.canTransitionToSelf = !!i1061[1]
  i1060.duration = i1061[2]
  i1060.exitTime = i1061[3]
  i1060.hasExitTime = !!i1061[4]
  i1060.hasFixedDuration = !!i1061[5]
  i1060.interruptionSource = i1061[6]
  i1060.offset = i1061[7]
  i1060.orderedInterruption = !!i1061[8]
  i1060.destinationStateId = i1061[9]
  i1060.isExit = !!i1061[10]
  i1060.mute = !!i1061[11]
  i1060.solo = !!i1061[12]
  var i1063 = i1061[13]
  var i1062 = []
  for(var i = 0; i < i1063.length; i += 1) {
    i1062.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1063[i + 0]) );
  }
  i1060.conditions = i1062
  return i1060
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1068 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1069 = data
  i1068.destinationStateId = i1069[0]
  i1068.isExit = !!i1069[1]
  i1068.mute = !!i1069[2]
  i1068.solo = !!i1069[3]
  var i1071 = i1069[4]
  var i1070 = []
  for(var i = 0; i < i1071.length; i += 1) {
    i1070.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1071[i + 0]) );
  }
  i1068.conditions = i1070
  return i1068
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1074 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1075 = data
  i1074.defaultBool = !!i1075[0]
  i1074.defaultFloat = i1075[1]
  i1074.defaultInt = i1075[2]
  i1074.name = i1075[3]
  i1074.nameHash = i1075[4]
  i1074.type = i1075[5]
  return i1074
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1076 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1077 = data
  i1076.name = i1077[0]
  i1076.bytes64 = i1077[1]
  i1076.data = i1077[2]
  return i1076
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i1078 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i1079 = data
  i1078.normalStyle = i1079[0]
  i1078.normalSpacingOffset = i1079[1]
  i1078.boldStyle = i1079[2]
  i1078.boldSpacing = i1079[3]
  i1078.italicStyle = i1079[4]
  i1078.tabSize = i1079[5]
  request.r(i1079[6], i1079[7], 0, i1078, 'atlas')
  i1078.m_SourceFontFileGUID = i1079[8]
  i1078.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i1079[9], i1078.m_CreationSettings)
  request.r(i1079[10], i1079[11], 0, i1078, 'm_SourceFontFile')
  i1078.m_SourceFontFilePath = i1079[12]
  i1078.m_AtlasPopulationMode = i1079[13]
  i1078.InternalDynamicOS = !!i1079[14]
  var i1081 = i1079[15]
  var i1080 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i1081.length; i += 1) {
    i1080.add(request.d('UnityEngine.TextCore.Glyph', i1081[i + 0]));
  }
  i1078.m_GlyphTable = i1080
  var i1083 = i1079[16]
  var i1082 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i1083.length; i += 1) {
    i1082.add(request.d('TMPro.TMP_Character', i1083[i + 0]));
  }
  i1078.m_CharacterTable = i1082
  var i1085 = i1079[17]
  var i1084 = []
  for(var i = 0; i < i1085.length; i += 2) {
  request.r(i1085[i + 0], i1085[i + 1], 2, i1084, '')
  }
  i1078.m_AtlasTextures = i1084
  i1078.m_AtlasTextureIndex = i1079[18]
  i1078.m_IsMultiAtlasTexturesEnabled = !!i1079[19]
  i1078.m_GetFontFeatures = !!i1079[20]
  i1078.m_ClearDynamicDataOnBuild = !!i1079[21]
  i1078.m_AtlasWidth = i1079[22]
  i1078.m_AtlasHeight = i1079[23]
  i1078.m_AtlasPadding = i1079[24]
  i1078.m_AtlasRenderMode = i1079[25]
  var i1087 = i1079[26]
  var i1086 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1087.length; i += 1) {
    i1086.add(request.d('UnityEngine.TextCore.GlyphRect', i1087[i + 0]));
  }
  i1078.m_UsedGlyphRects = i1086
  var i1089 = i1079[27]
  var i1088 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1089.length; i += 1) {
    i1088.add(request.d('UnityEngine.TextCore.GlyphRect', i1089[i + 0]));
  }
  i1078.m_FreeGlyphRects = i1088
  i1078.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i1079[28], i1078.m_FontFeatureTable)
  i1078.m_ShouldReimportFontFeatures = !!i1079[29]
  var i1091 = i1079[30]
  var i1090 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1091.length; i += 2) {
  request.r(i1091[i + 0], i1091[i + 1], 1, i1090, '')
  }
  i1078.m_FallbackFontAssetTable = i1090
  var i1093 = i1079[31]
  var i1092 = []
  for(var i = 0; i < i1093.length; i += 1) {
    i1092.push( request.d('TMPro.TMP_FontWeightPair', i1093[i + 0]) );
  }
  i1078.m_FontWeightTable = i1092
  var i1095 = i1079[32]
  var i1094 = []
  for(var i = 0; i < i1095.length; i += 1) {
    i1094.push( request.d('TMPro.TMP_FontWeightPair', i1095[i + 0]) );
  }
  i1078.fontWeights = i1094
  i1078.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i1079[33], i1078.m_fontInfo)
  var i1097 = i1079[34]
  var i1096 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i1097.length; i += 1) {
    i1096.add(request.d('TMPro.TMP_Glyph', i1097[i + 0]));
  }
  i1078.m_glyphInfoList = i1096
  i1078.m_KerningTable = request.d('TMPro.KerningTable', i1079[35], i1078.m_KerningTable)
  var i1099 = i1079[36]
  var i1098 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1099.length; i += 2) {
  request.r(i1099[i + 0], i1099[i + 1], 1, i1098, '')
  }
  i1078.fallbackFontAssets = i1098
  i1078.m_Version = i1079[37]
  i1078.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1079[38], i1078.m_FaceInfo)
  request.r(i1079[39], i1079[40], 0, i1078, 'm_Material')
  return i1078
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i1100 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i1101 = data
  i1100.sourceFontFileName = i1101[0]
  i1100.sourceFontFileGUID = i1101[1]
  i1100.faceIndex = i1101[2]
  i1100.pointSizeSamplingMode = i1101[3]
  i1100.pointSize = i1101[4]
  i1100.padding = i1101[5]
  i1100.paddingMode = i1101[6]
  i1100.packingMode = i1101[7]
  i1100.atlasWidth = i1101[8]
  i1100.atlasHeight = i1101[9]
  i1100.characterSetSelectionMode = i1101[10]
  i1100.characterSequence = i1101[11]
  i1100.referencedFontAssetGUID = i1101[12]
  i1100.referencedTextAssetGUID = i1101[13]
  i1100.fontStyle = i1101[14]
  i1100.fontStyleModifier = i1101[15]
  i1100.renderMode = i1101[16]
  i1100.includeFontFeatures = !!i1101[17]
  return i1100
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i1104 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i1105 = data
  i1104.m_Index = i1105[0]
  i1104.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1105[1], i1104.m_Metrics)
  i1104.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1105[2], i1104.m_GlyphRect)
  i1104.m_Scale = i1105[3]
  i1104.m_AtlasIndex = i1105[4]
  i1104.m_ClassDefinitionType = i1105[5]
  return i1104
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1106 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1107 = data
  i1106.m_Width = i1107[0]
  i1106.m_Height = i1107[1]
  i1106.m_HorizontalBearingX = i1107[2]
  i1106.m_HorizontalBearingY = i1107[3]
  i1106.m_HorizontalAdvance = i1107[4]
  return i1106
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1108 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1109 = data
  i1108.m_X = i1109[0]
  i1108.m_Y = i1109[1]
  i1108.m_Width = i1109[2]
  i1108.m_Height = i1109[3]
  return i1108
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i1112 = root || request.c( 'TMPro.TMP_Character' )
  var i1113 = data
  i1112.m_ElementType = i1113[0]
  i1112.m_Unicode = i1113[1]
  i1112.m_GlyphIndex = i1113[2]
  i1112.m_Scale = i1113[3]
  return i1112
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i1118 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i1119 = data
  var i1121 = i1119[0]
  var i1120 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i1121.length; i += 1) {
    i1120.add(request.d('TMPro.MultipleSubstitutionRecord', i1121[i + 0]));
  }
  i1118.m_MultipleSubstitutionRecords = i1120
  var i1123 = i1119[1]
  var i1122 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i1123.length; i += 1) {
    i1122.add(request.d('TMPro.LigatureSubstitutionRecord', i1123[i + 0]));
  }
  i1118.m_LigatureSubstitutionRecords = i1122
  var i1125 = i1119[2]
  var i1124 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i1125.length; i += 1) {
    i1124.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i1125[i + 0]));
  }
  i1118.m_GlyphPairAdjustmentRecords = i1124
  var i1127 = i1119[3]
  var i1126 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i1127.length; i += 1) {
    i1126.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i1127[i + 0]));
  }
  i1118.m_MarkToBaseAdjustmentRecords = i1126
  var i1129 = i1119[4]
  var i1128 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i1129.length; i += 1) {
    i1128.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i1129[i + 0]));
  }
  i1118.m_MarkToMarkAdjustmentRecords = i1128
  return i1118
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i1132 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i1133 = data
  i1132.m_TargetGlyphID = i1133[0]
  i1132.m_SubstituteGlyphIDs = i1133[1]
  return i1132
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i1136 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i1137 = data
  i1136.m_ComponentGlyphIDs = i1137[0]
  i1136.m_LigatureGlyphID = i1137[1]
  return i1136
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i1140 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i1141 = data
  i1140.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i1141[0], i1140.m_FirstAdjustmentRecord)
  i1140.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i1141[1], i1140.m_SecondAdjustmentRecord)
  i1140.m_FeatureLookupFlags = i1141[2]
  return i1140
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1142 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i1143 = data
  i1142.m_GlyphIndex = i1143[0]
  i1142.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i1143[1], i1142.m_GlyphValueRecord)
  return i1142
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i1144 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i1145 = data
  i1144.m_XPlacement = i1145[0]
  i1144.m_YPlacement = i1145[1]
  i1144.m_XAdvance = i1145[2]
  i1144.m_YAdvance = i1145[3]
  return i1144
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i1148 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i1149 = data
  i1148.m_BaseGlyphID = i1149[0]
  i1148.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i1149[1], i1148.m_BaseGlyphAnchorPoint)
  i1148.m_MarkGlyphID = i1149[2]
  i1148.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i1149[3], i1148.m_MarkPositionAdjustment)
  return i1148
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i1152 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i1153 = data
  i1152.m_BaseMarkGlyphID = i1153[0]
  i1152.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i1153[1], i1152.m_BaseMarkGlyphAnchorPoint)
  i1152.m_CombiningMarkGlyphID = i1153[2]
  i1152.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i1153[3], i1152.m_CombiningMarkPositionAdjustment)
  return i1152
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i1158 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i1159 = data
  request.r(i1159[0], i1159[1], 0, i1158, 'regularTypeface')
  request.r(i1159[2], i1159[3], 0, i1158, 'italicTypeface')
  return i1158
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i1160 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i1161 = data
  i1160.Name = i1161[0]
  i1160.PointSize = i1161[1]
  i1160.Scale = i1161[2]
  i1160.CharacterCount = i1161[3]
  i1160.LineHeight = i1161[4]
  i1160.Baseline = i1161[5]
  i1160.Ascender = i1161[6]
  i1160.CapHeight = i1161[7]
  i1160.Descender = i1161[8]
  i1160.CenterLine = i1161[9]
  i1160.SuperscriptOffset = i1161[10]
  i1160.SubscriptOffset = i1161[11]
  i1160.SubSize = i1161[12]
  i1160.Underline = i1161[13]
  i1160.UnderlineThickness = i1161[14]
  i1160.strikethrough = i1161[15]
  i1160.strikethroughThickness = i1161[16]
  i1160.TabWidth = i1161[17]
  i1160.Padding = i1161[18]
  i1160.AtlasWidth = i1161[19]
  i1160.AtlasHeight = i1161[20]
  return i1160
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i1164 = root || request.c( 'TMPro.TMP_Glyph' )
  var i1165 = data
  i1164.id = i1165[0]
  i1164.x = i1165[1]
  i1164.y = i1165[2]
  i1164.width = i1165[3]
  i1164.height = i1165[4]
  i1164.xOffset = i1165[5]
  i1164.yOffset = i1165[6]
  i1164.xAdvance = i1165[7]
  i1164.scale = i1165[8]
  return i1164
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i1166 = root || request.c( 'TMPro.KerningTable' )
  var i1167 = data
  var i1169 = i1167[0]
  var i1168 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i1169.length; i += 1) {
    i1168.add(request.d('TMPro.KerningPair', i1169[i + 0]));
  }
  i1166.kerningPairs = i1168
  return i1166
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i1172 = root || request.c( 'TMPro.KerningPair' )
  var i1173 = data
  i1172.xOffset = i1173[0]
  i1172.m_FirstGlyph = i1173[1]
  i1172.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1173[2], i1172.m_FirstGlyphAdjustments)
  i1172.m_SecondGlyph = i1173[3]
  i1172.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1173[4], i1172.m_SecondGlyphAdjustments)
  i1172.m_IgnoreSpacingAdjustments = !!i1173[5]
  return i1172
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1174 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1175 = data
  i1174.m_FaceIndex = i1175[0]
  i1174.m_FamilyName = i1175[1]
  i1174.m_StyleName = i1175[2]
  i1174.m_PointSize = i1175[3]
  i1174.m_Scale = i1175[4]
  i1174.m_UnitsPerEM = i1175[5]
  i1174.m_LineHeight = i1175[6]
  i1174.m_AscentLine = i1175[7]
  i1174.m_CapLine = i1175[8]
  i1174.m_MeanLine = i1175[9]
  i1174.m_Baseline = i1175[10]
  i1174.m_DescentLine = i1175[11]
  i1174.m_SuperscriptOffset = i1175[12]
  i1174.m_SuperscriptSize = i1175[13]
  i1174.m_SubscriptOffset = i1175[14]
  i1174.m_SubscriptSize = i1175[15]
  i1174.m_UnderlineOffset = i1175[16]
  i1174.m_UnderlineThickness = i1175[17]
  i1174.m_StrikethroughOffset = i1175[18]
  i1174.m_StrikethroughThickness = i1175[19]
  i1174.m_TabWidth = i1175[20]
  return i1174
}

Deserializers["PlayerCardData"] = function (request, data, root) {
  var i1176 = root || request.c( 'PlayerCardData' )
  var i1177 = data
  i1176.playerName = i1177[0]
  request.r(i1177[1], i1177[2], 0, i1176, 'playerSprite')
  return i1176
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1178 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1179 = data
  i1178.useSafeMode = !!i1179[0]
  i1178.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1179[1], i1178.safeModeOptions)
  i1178.timeScale = i1179[2]
  i1178.unscaledTimeScale = i1179[3]
  i1178.useSmoothDeltaTime = !!i1179[4]
  i1178.maxSmoothUnscaledTime = i1179[5]
  i1178.rewindCallbackMode = i1179[6]
  i1178.showUnityEditorReport = !!i1179[7]
  i1178.logBehaviour = i1179[8]
  i1178.drawGizmos = !!i1179[9]
  i1178.defaultRecyclable = !!i1179[10]
  i1178.defaultAutoPlay = i1179[11]
  i1178.defaultUpdateType = i1179[12]
  i1178.defaultTimeScaleIndependent = !!i1179[13]
  i1178.defaultEaseType = i1179[14]
  i1178.defaultEaseOvershootOrAmplitude = i1179[15]
  i1178.defaultEasePeriod = i1179[16]
  i1178.defaultAutoKill = !!i1179[17]
  i1178.defaultLoopType = i1179[18]
  i1178.debugMode = !!i1179[19]
  i1178.debugStoreTargetId = !!i1179[20]
  i1178.showPreviewPanel = !!i1179[21]
  i1178.storeSettingsLocation = i1179[22]
  i1178.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1179[23], i1178.modules)
  i1178.createASMDEF = !!i1179[24]
  i1178.showPlayingTweens = !!i1179[25]
  i1178.showPausedTweens = !!i1179[26]
  return i1178
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1180 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1181 = data
  i1180.logBehaviour = i1181[0]
  i1180.nestedTweenFailureBehaviour = i1181[1]
  return i1180
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1182 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1183 = data
  i1182.showPanel = !!i1183[0]
  i1182.audioEnabled = !!i1183[1]
  i1182.physicsEnabled = !!i1183[2]
  i1182.physics2DEnabled = !!i1183[3]
  i1182.spriteEnabled = !!i1183[4]
  i1182.uiEnabled = !!i1183[5]
  i1182.uiToolkitEnabled = !!i1183[6]
  i1182.textMeshProEnabled = !!i1183[7]
  i1182.tk2DEnabled = !!i1183[8]
  i1182.deAudioEnabled = !!i1183[9]
  i1182.deUnityExtendedEnabled = !!i1183[10]
  i1182.epoOutlineEnabled = !!i1183[11]
  return i1182
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1184 = root || request.c( 'TMPro.TMP_Settings' )
  var i1185 = data
  i1184.assetVersion = i1185[0]
  i1184.m_TextWrappingMode = i1185[1]
  i1184.m_enableKerning = !!i1185[2]
  var i1187 = i1185[3]
  var i1186 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i1187.length; i += 1) {
    i1186.add(i1187[i + 0]);
  }
  i1184.m_ActiveFontFeatures = i1186
  i1184.m_enableExtraPadding = !!i1185[4]
  i1184.m_enableTintAllSprites = !!i1185[5]
  i1184.m_enableParseEscapeCharacters = !!i1185[6]
  i1184.m_EnableRaycastTarget = !!i1185[7]
  i1184.m_GetFontFeaturesAtRuntime = !!i1185[8]
  i1184.m_missingGlyphCharacter = i1185[9]
  i1184.m_ClearDynamicDataOnBuild = !!i1185[10]
  i1184.m_warningsDisabled = !!i1185[11]
  request.r(i1185[12], i1185[13], 0, i1184, 'm_defaultFontAsset')
  i1184.m_defaultFontAssetPath = i1185[14]
  i1184.m_defaultFontSize = i1185[15]
  i1184.m_defaultAutoSizeMinRatio = i1185[16]
  i1184.m_defaultAutoSizeMaxRatio = i1185[17]
  i1184.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1185[18], i1185[19] )
  i1184.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1185[20], i1185[21] )
  i1184.m_autoSizeTextContainer = !!i1185[22]
  i1184.m_IsTextObjectScaleStatic = !!i1185[23]
  var i1189 = i1185[24]
  var i1188 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1189.length; i += 2) {
  request.r(i1189[i + 0], i1189[i + 1], 1, i1188, '')
  }
  i1184.m_fallbackFontAssets = i1188
  i1184.m_matchMaterialPreset = !!i1185[25]
  i1184.m_HideSubTextObjects = !!i1185[26]
  request.r(i1185[27], i1185[28], 0, i1184, 'm_defaultSpriteAsset')
  i1184.m_defaultSpriteAssetPath = i1185[29]
  i1184.m_enableEmojiSupport = !!i1185[30]
  i1184.m_MissingCharacterSpriteUnicode = i1185[31]
  var i1191 = i1185[32]
  var i1190 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i1191.length; i += 2) {
  request.r(i1191[i + 0], i1191[i + 1], 1, i1190, '')
  }
  i1184.m_EmojiFallbackTextAssets = i1190
  i1184.m_defaultColorGradientPresetsPath = i1185[33]
  request.r(i1185[34], i1185[35], 0, i1184, 'm_defaultStyleSheet')
  i1184.m_StyleSheetsResourcePath = i1185[36]
  request.r(i1185[37], i1185[38], 0, i1184, 'm_leadingCharacters')
  request.r(i1185[39], i1185[40], 0, i1184, 'm_followingCharacters')
  i1184.m_UseModernHangulLineBreakingRules = !!i1185[41]
  return i1184
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1194 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1195 = data
  request.r(i1195[0], i1195[1], 0, i1194, 'spriteSheet')
  var i1197 = i1195[2]
  var i1196 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1197.length; i += 1) {
    i1196.add(request.d('TMPro.TMP_Sprite', i1197[i + 0]));
  }
  i1194.spriteInfoList = i1196
  var i1199 = i1195[3]
  var i1198 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1199.length; i += 2) {
  request.r(i1199[i + 0], i1199[i + 1], 1, i1198, '')
  }
  i1194.fallbackSpriteAssets = i1198
  var i1201 = i1195[4]
  var i1200 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1201.length; i += 1) {
    i1200.add(request.d('TMPro.TMP_SpriteCharacter', i1201[i + 0]));
  }
  i1194.m_SpriteCharacterTable = i1200
  var i1203 = i1195[5]
  var i1202 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1203.length; i += 1) {
    i1202.add(request.d('TMPro.TMP_SpriteGlyph', i1203[i + 0]));
  }
  i1194.m_GlyphTable = i1202
  i1194.m_Version = i1195[6]
  i1194.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1195[7], i1194.m_FaceInfo)
  request.r(i1195[8], i1195[9], 0, i1194, 'm_Material')
  return i1194
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1206 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1207 = data
  i1206.name = i1207[0]
  i1206.hashCode = i1207[1]
  i1206.unicode = i1207[2]
  i1206.pivot = new pc.Vec2( i1207[3], i1207[4] )
  request.r(i1207[5], i1207[6], 0, i1206, 'sprite')
  i1206.id = i1207[7]
  i1206.x = i1207[8]
  i1206.y = i1207[9]
  i1206.width = i1207[10]
  i1206.height = i1207[11]
  i1206.xOffset = i1207[12]
  i1206.yOffset = i1207[13]
  i1206.xAdvance = i1207[14]
  i1206.scale = i1207[15]
  return i1206
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1212 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1213 = data
  i1212.m_Name = i1213[0]
  i1212.m_ElementType = i1213[1]
  i1212.m_Unicode = i1213[2]
  i1212.m_GlyphIndex = i1213[3]
  i1212.m_Scale = i1213[4]
  return i1212
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1216 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1217 = data
  request.r(i1217[0], i1217[1], 0, i1216, 'sprite')
  i1216.m_Index = i1217[2]
  i1216.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1217[3], i1216.m_Metrics)
  i1216.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1217[4], i1216.m_GlyphRect)
  i1216.m_Scale = i1217[5]
  i1216.m_AtlasIndex = i1217[6]
  i1216.m_ClassDefinitionType = i1217[7]
  return i1216
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1218 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1219 = data
  var i1221 = i1219[0]
  var i1220 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1221.length; i += 1) {
    i1220.add(request.d('TMPro.TMP_Style', i1221[i + 0]));
  }
  i1218.m_StyleList = i1220
  return i1218
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1224 = root || request.c( 'TMPro.TMP_Style' )
  var i1225 = data
  i1224.m_Name = i1225[0]
  i1224.m_HashCode = i1225[1]
  i1224.m_OpeningDefinition = i1225[2]
  i1224.m_ClosingDefinition = i1225[3]
  i1224.m_OpeningTagArray = i1225[4]
  i1224.m_ClosingTagArray = i1225[5]
  return i1224
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1226 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1227 = data
  var i1229 = i1227[0]
  var i1228 = []
  for(var i = 0; i < i1229.length; i += 1) {
    i1228.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1229[i + 0]) );
  }
  i1226.files = i1228
  i1226.componentToPrefabIds = i1227[1]
  return i1226
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1232 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1233 = data
  i1232.path = i1233[0]
  request.r(i1233[1], i1233[2], 0, i1232, 'unityObject')
  return i1232
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1234 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1235 = data
  var i1237 = i1235[0]
  var i1236 = []
  for(var i = 0; i < i1237.length; i += 1) {
    i1236.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1237[i + 0]) );
  }
  i1234.scriptsExecutionOrder = i1236
  var i1239 = i1235[1]
  var i1238 = []
  for(var i = 0; i < i1239.length; i += 1) {
    i1238.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1239[i + 0]) );
  }
  i1234.sortingLayers = i1238
  var i1241 = i1235[2]
  var i1240 = []
  for(var i = 0; i < i1241.length; i += 1) {
    i1240.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1241[i + 0]) );
  }
  i1234.cullingLayers = i1240
  i1234.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1235[3], i1234.timeSettings)
  i1234.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1235[4], i1234.physicsSettings)
  i1234.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1235[5], i1234.physics2DSettings)
  i1234.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1235[6], i1234.qualitySettings)
  i1234.enableRealtimeShadows = !!i1235[7]
  i1234.enableAutoInstancing = !!i1235[8]
  i1234.enableStaticBatching = !!i1235[9]
  i1234.enableDynamicBatching = !!i1235[10]
  i1234.lightmapEncodingQuality = i1235[11]
  i1234.desiredColorSpace = i1235[12]
  var i1243 = i1235[13]
  var i1242 = []
  for(var i = 0; i < i1243.length; i += 1) {
    i1242.push( i1243[i + 0] );
  }
  i1234.allTags = i1242
  return i1234
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1246 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1247 = data
  i1246.name = i1247[0]
  i1246.value = i1247[1]
  return i1246
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1250 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1251 = data
  i1250.id = i1251[0]
  i1250.name = i1251[1]
  i1250.value = i1251[2]
  return i1250
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1254 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1255 = data
  i1254.id = i1255[0]
  i1254.name = i1255[1]
  return i1254
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1256 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1257 = data
  i1256.fixedDeltaTime = i1257[0]
  i1256.maximumDeltaTime = i1257[1]
  i1256.timeScale = i1257[2]
  i1256.maximumParticleTimestep = i1257[3]
  return i1256
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1258 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1259 = data
  i1258.gravity = new pc.Vec3( i1259[0], i1259[1], i1259[2] )
  i1258.defaultSolverIterations = i1259[3]
  i1258.bounceThreshold = i1259[4]
  i1258.autoSyncTransforms = !!i1259[5]
  i1258.autoSimulation = !!i1259[6]
  var i1261 = i1259[7]
  var i1260 = []
  for(var i = 0; i < i1261.length; i += 1) {
    i1260.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1261[i + 0]) );
  }
  i1258.collisionMatrix = i1260
  return i1258
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1264 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1265 = data
  i1264.enabled = !!i1265[0]
  i1264.layerId = i1265[1]
  i1264.otherLayerId = i1265[2]
  return i1264
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1266 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1267 = data
  request.r(i1267[0], i1267[1], 0, i1266, 'material')
  i1266.gravity = new pc.Vec2( i1267[2], i1267[3] )
  i1266.positionIterations = i1267[4]
  i1266.velocityIterations = i1267[5]
  i1266.velocityThreshold = i1267[6]
  i1266.maxLinearCorrection = i1267[7]
  i1266.maxAngularCorrection = i1267[8]
  i1266.maxTranslationSpeed = i1267[9]
  i1266.maxRotationSpeed = i1267[10]
  i1266.baumgarteScale = i1267[11]
  i1266.baumgarteTOIScale = i1267[12]
  i1266.timeToSleep = i1267[13]
  i1266.linearSleepTolerance = i1267[14]
  i1266.angularSleepTolerance = i1267[15]
  i1266.defaultContactOffset = i1267[16]
  i1266.autoSimulation = !!i1267[17]
  i1266.queriesHitTriggers = !!i1267[18]
  i1266.queriesStartInColliders = !!i1267[19]
  i1266.callbacksOnDisable = !!i1267[20]
  i1266.reuseCollisionCallbacks = !!i1267[21]
  i1266.autoSyncTransforms = !!i1267[22]
  var i1269 = i1267[23]
  var i1268 = []
  for(var i = 0; i < i1269.length; i += 1) {
    i1268.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1269[i + 0]) );
  }
  i1266.collisionMatrix = i1268
  return i1266
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1272 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1273 = data
  i1272.enabled = !!i1273[0]
  i1272.layerId = i1273[1]
  i1272.otherLayerId = i1273[2]
  return i1272
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1274 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1275 = data
  var i1277 = i1275[0]
  var i1276 = []
  for(var i = 0; i < i1277.length; i += 1) {
    i1276.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1277[i + 0]) );
  }
  i1274.qualityLevels = i1276
  var i1279 = i1275[1]
  var i1278 = []
  for(var i = 0; i < i1279.length; i += 1) {
    i1278.push( i1279[i + 0] );
  }
  i1274.names = i1278
  i1274.shadows = i1275[2]
  i1274.anisotropicFiltering = i1275[3]
  i1274.antiAliasing = i1275[4]
  i1274.lodBias = i1275[5]
  i1274.shadowCascades = i1275[6]
  i1274.shadowDistance = i1275[7]
  i1274.shadowmaskMode = i1275[8]
  i1274.shadowProjection = i1275[9]
  i1274.shadowResolution = i1275[10]
  i1274.softParticles = !!i1275[11]
  i1274.softVegetation = !!i1275[12]
  i1274.activeColorSpace = i1275[13]
  i1274.desiredColorSpace = i1275[14]
  i1274.masterTextureLimit = i1275[15]
  i1274.maxQueuedFrames = i1275[16]
  i1274.particleRaycastBudget = i1275[17]
  i1274.pixelLightCount = i1275[18]
  i1274.realtimeReflectionProbes = !!i1275[19]
  i1274.shadowCascade2Split = i1275[20]
  i1274.shadowCascade4Split = new pc.Vec3( i1275[21], i1275[22], i1275[23] )
  i1274.streamingMipmapsActive = !!i1275[24]
  i1274.vSyncCount = i1275[25]
  i1274.asyncUploadBufferSize = i1275[26]
  i1274.asyncUploadTimeSlice = i1275[27]
  i1274.billboardsFaceCameraPosition = !!i1275[28]
  i1274.shadowNearPlaneOffset = i1275[29]
  i1274.streamingMipmapsMemoryBudget = i1275[30]
  i1274.maximumLODLevel = i1275[31]
  i1274.streamingMipmapsAddAllCameras = !!i1275[32]
  i1274.streamingMipmapsMaxLevelReduction = i1275[33]
  i1274.streamingMipmapsRenderersPerFrame = i1275[34]
  i1274.resolutionScalingFixedDPIFactor = i1275[35]
  i1274.streamingMipmapsMaxFileIORequests = i1275[36]
  i1274.currentQualityLevel = i1275[37]
  return i1274
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1284 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1285 = data
  i1284.weight = i1285[0]
  i1284.vertices = i1285[1]
  i1284.normals = i1285[2]
  i1284.tangents = i1285[3]
  return i1284
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1288 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1289 = data
  i1288.mode = i1289[0]
  i1288.parameter = i1289[1]
  i1288.threshold = i1289[2]
  return i1288
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i1290 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i1291 = data
  i1290.m_XCoordinate = i1291[0]
  i1290.m_YCoordinate = i1291[1]
  return i1290
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i1292 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i1293 = data
  i1292.m_XPositionAdjustment = i1293[0]
  i1292.m_YPositionAdjustment = i1293[1]
  return i1292
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1294 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1295 = data
  i1294.xPlacement = i1295[0]
  i1294.yPlacement = i1295[1]
  i1294.xAdvance = i1295[2]
  i1294.yAdvance = i1295[3]
  return i1294
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D":{"usedByComposite":0,"autoTiling":1,"points":2,"enabled":3,"isTrigger":4,"usedByEffector":5,"density":6,"offset":7,"material":9},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider2D":{"size":0,"direction":2,"enabled":3,"isTrigger":4,"usedByEffector":5,"density":6,"offset":7,"material":9},"Luna.Unity.DTO.UnityEngine.Components.SpriteMask":{"frontSortingLayerID":0,"frontSortingOrder":1,"backSortingLayerID":2,"backSortingOrder":3,"alphaCutoff":4,"sprite":5,"tileMode":7,"isCustomRangeActive":8,"spriteSortPoint":9,"enabled":10,"sharedMaterial":11,"sharedMaterials":13,"receiveShadows":14,"shadowCastingMode":15,"sortingLayerID":16,"sortingOrder":17,"lightmapIndex":18,"lightmapSceneIndex":19,"lightmapScaleOffset":20,"lightProbeUsage":24,"reflectionProbeUsage":25},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.PhysicsMaterial2D":{"name":0,"bounciness":1,"friction":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2}}

Deserializers.requiredComponents = {"54":[55],"56":[55],"57":[55],"58":[55],"59":[55],"60":[55],"61":[62],"63":[2],"64":[65],"66":[65],"67":[65],"68":[65],"69":[65],"70":[65],"71":[38],"72":[38],"73":[38],"74":[38],"75":[38],"76":[38],"77":[38],"78":[38],"79":[38],"80":[38],"81":[38],"82":[38],"83":[38],"84":[2],"85":[21],"86":[87],"88":[87],"31":[20],"7":[2],"39":[38],"42":[18],"89":[12],"90":[2],"91":[92],"93":[46],"94":[31],"95":[20],"23":[21,20],"96":[20,34],"97":[20],"98":[34,20],"99":[21],"100":[34,20],"101":[20],"102":[103],"104":[103],"105":[103],"106":[20],"107":[20],"33":[31],"35":[34,20],"108":[20],"32":[31],"109":[20],"110":[20],"111":[20],"112":[20],"113":[20],"114":[20],"115":[20],"116":[20],"117":[20],"118":[34,20],"119":[20],"120":[20],"121":[20],"122":[20],"123":[34,20],"124":[20],"125":[46],"126":[46],"47":[46],"127":[46],"128":[2],"129":[2]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.MonoBehaviour","CameraFollow2D","UnityEngine.Transform","AutoCameraFit","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Mesh","UnityEngine.Material","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","MoveBetweenPoints","ScreenHeightPositionAnchor","UnityEngine.BoxCollider2D","ClickToStore","UnityEngine.RectTransform","UnityEngine.MeshRenderer","UnityEngine.EventSystems.UIBehaviour","TMPro.TextMeshPro","TMPro.TMP_FontAsset","UnityEngine.MeshFilter","PlayerCardUIManager","UnityEngine.GameObject","Ply_SoundManager","UnityEngine.AudioSource","UnityEngine.AudioClip","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.PolygonCollider2D","UnityEngine.PhysicsMaterial2D","UnityEngine.Rigidbody2D","BatStrikeController","CupCollision","UnityEngine.CapsuleCollider2D","SlotTrigger","PlayerCardData","UnityEngine.SpriteMask","HideOnFirstClick","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.Font","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.InputSystem.UI.InputSystemUIInputModule","UnityEngine.InputSystem.UI.TrackedDeviceRaycaster","TMPro.TextContainer","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.38f1";

Deserializers.productName = "PLY_MiniSoccer";

Deserializers.lunaInitializationTime = "07/15/2026 03:53:54";

Deserializers.lunaDaysRunning = "22.3";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1752";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4476";

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

Deserializers.buildID = "3e78df95-0982-441c-9aa2-d1c7272cbe26";

Deserializers.runtimeInitializeOnLoadInfos = [[["Unity","Services","Core","Internal","UnityServicesInitializer","EnableServicesInitializationAsync"],["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["DG","Tweening","DOTween","RuntimeOnLoad"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["Unity","Services","Core","Registration","CorePackageInitializer","InitializeOnLoad"],["Unity","Services","Core","Internal","TaskAsyncOperation","SetScheduler"],["Unity","Services","Core","Environments","Client","Scheduler","EngineStateHelper","Init"],["Unity","Services","Core","Environments","Client","Scheduler","ThreadHelper","Init"],["Ua2CoreInitializeCallback","Register"],["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["Unity","AI","Navigation","NavMeshLink","ClearTrackedList"],["Unity","AI","Navigation","NavMeshSurface","ClearNavMeshSurfaces"],["Unity","AI","Navigation","NavMeshModifierVolume","ClearNavMeshModifiers"],["Unity","AI","Navigation","NavMeshModifier","ClearNavMeshModifiers"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["Unity","Services","Core","Internal","UnityServicesInitializer","CreateStaticInstance"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[["Unity","Services","Core","Environments","Client","Http","JsonHelpers","RegisterTypesForAOT"]],[["Unity","Services","Core","UnityThreadUtils","CaptureUnityThreadInfo"],["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

