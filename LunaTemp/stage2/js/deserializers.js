var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i668 = root || request.c( 'UnityEngine.JointSpring' )
  var i669 = data
  i668.spring = i669[0]
  i668.damper = i669[1]
  i668.targetPosition = i669[2]
  return i668
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i670 = root || request.c( 'UnityEngine.JointMotor' )
  var i671 = data
  i670.m_TargetVelocity = i671[0]
  i670.m_Force = i671[1]
  i670.m_FreeSpin = i671[2]
  return i670
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i672 = root || request.c( 'UnityEngine.JointLimits' )
  var i673 = data
  i672.m_Min = i673[0]
  i672.m_Max = i673[1]
  i672.m_Bounciness = i673[2]
  i672.m_BounceMinVelocity = i673[3]
  i672.m_ContactDistance = i673[4]
  i672.minBounce = i673[5]
  i672.maxBounce = i673[6]
  return i672
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i674 = root || request.c( 'UnityEngine.JointDrive' )
  var i675 = data
  i674.m_PositionSpring = i675[0]
  i674.m_PositionDamper = i675[1]
  i674.m_MaximumForce = i675[2]
  i674.m_UseAcceleration = i675[3]
  return i674
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i676 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i677 = data
  i676.m_Spring = i677[0]
  i676.m_Damper = i677[1]
  return i676
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i678 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i679 = data
  i678.m_Limit = i679[0]
  i678.m_Bounciness = i679[1]
  i678.m_ContactDistance = i679[2]
  return i678
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i680 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i681 = data
  i680.m_ExtremumSlip = i681[0]
  i680.m_ExtremumValue = i681[1]
  i680.m_AsymptoteSlip = i681[2]
  i680.m_AsymptoteValue = i681[3]
  i680.m_Stiffness = i681[4]
  return i680
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i682 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i683 = data
  i682.m_LowerAngle = i683[0]
  i682.m_UpperAngle = i683[1]
  return i682
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i684 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i685 = data
  i684.m_MotorSpeed = i685[0]
  i684.m_MaximumMotorTorque = i685[1]
  return i684
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i686 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i687 = data
  i686.m_DampingRatio = i687[0]
  i686.m_Frequency = i687[1]
  i686.m_Angle = i687[2]
  return i686
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i688 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i689 = data
  i688.m_LowerTranslation = i689[0]
  i688.m_UpperTranslation = i689[1]
  return i688
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i690 = root || new pc.UnityMaterial()
  var i691 = data
  i690.name = i691[0]
  request.r(i691[1], i691[2], 0, i690, 'shader')
  i690.renderQueue = i691[3]
  i690.enableInstancing = !!i691[4]
  var i693 = i691[5]
  var i692 = []
  for(var i = 0; i < i693.length; i += 1) {
    i692.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i693[i + 0]) );
  }
  i690.floatParameters = i692
  var i695 = i691[6]
  var i694 = []
  for(var i = 0; i < i695.length; i += 1) {
    i694.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i695[i + 0]) );
  }
  i690.colorParameters = i694
  var i697 = i691[7]
  var i696 = []
  for(var i = 0; i < i697.length; i += 1) {
    i696.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i697[i + 0]) );
  }
  i690.vectorParameters = i696
  var i699 = i691[8]
  var i698 = []
  for(var i = 0; i < i699.length; i += 1) {
    i698.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i699[i + 0]) );
  }
  i690.textureParameters = i698
  var i701 = i691[9]
  var i700 = []
  for(var i = 0; i < i701.length; i += 1) {
    i700.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i701[i + 0]) );
  }
  i690.materialFlags = i700
  return i690
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i704 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i705 = data
  i704.name = i705[0]
  i704.value = i705[1]
  return i704
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i708 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i709 = data
  i708.name = i709[0]
  i708.value = new pc.Color(i709[1], i709[2], i709[3], i709[4])
  return i708
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i712 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i713 = data
  i712.name = i713[0]
  i712.value = new pc.Vec4( i713[1], i713[2], i713[3], i713[4] )
  return i712
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i716 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i717 = data
  i716.name = i717[0]
  request.r(i717[1], i717[2], 0, i716, 'value')
  return i716
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i720 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i721 = data
  i720.name = i721[0]
  i720.enabled = !!i721[1]
  return i720
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i722 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i723 = data
  i722.name = i723[0]
  i722.width = i723[1]
  i722.height = i723[2]
  i722.mipmapCount = i723[3]
  i722.anisoLevel = i723[4]
  i722.filterMode = i723[5]
  i722.hdr = !!i723[6]
  i722.format = i723[7]
  i722.wrapMode = i723[8]
  i722.alphaIsTransparency = !!i723[9]
  i722.alphaSource = i723[10]
  i722.graphicsFormat = i723[11]
  i722.sRGBTexture = !!i723[12]
  i722.desiredColorSpace = i723[13]
  i722.wrapU = i723[14]
  i722.wrapV = i723[15]
  return i722
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i724 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i725 = data
  i724.name = i725[0]
  i724.halfPrecision = !!i725[1]
  i724.useSimplification = !!i725[2]
  i724.useUInt32IndexFormat = !!i725[3]
  i724.vertexCount = i725[4]
  i724.aabb = i725[5]
  var i727 = i725[6]
  var i726 = []
  for(var i = 0; i < i727.length; i += 1) {
    i726.push( !!i727[i + 0] );
  }
  i724.streams = i726
  i724.vertices = i725[7]
  var i729 = i725[8]
  var i728 = []
  for(var i = 0; i < i729.length; i += 1) {
    i728.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i729[i + 0]) );
  }
  i724.subMeshes = i728
  var i731 = i725[9]
  var i730 = []
  for(var i = 0; i < i731.length; i += 16) {
    i730.push( new pc.Mat4().setData(i731[i + 0], i731[i + 1], i731[i + 2], i731[i + 3],  i731[i + 4], i731[i + 5], i731[i + 6], i731[i + 7],  i731[i + 8], i731[i + 9], i731[i + 10], i731[i + 11],  i731[i + 12], i731[i + 13], i731[i + 14], i731[i + 15]) );
  }
  i724.bindposes = i730
  var i733 = i725[10]
  var i732 = []
  for(var i = 0; i < i733.length; i += 1) {
    i732.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i733[i + 0]) );
  }
  i724.blendShapes = i732
  return i724
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i738 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i739 = data
  i738.triangles = i739[0]
  return i738
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i744 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i745 = data
  i744.name = i745[0]
  var i747 = i745[1]
  var i746 = []
  for(var i = 0; i < i747.length; i += 1) {
    i746.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i747[i + 0]) );
  }
  i744.frames = i746
  return i744
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i748 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i749 = data
  i748.name = i749[0]
  i748.index = i749[1]
  i748.startup = !!i749[2]
  return i748
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i750 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i751 = data
  i750.aspect = i751[0]
  i750.orthographic = !!i751[1]
  i750.orthographicSize = i751[2]
  i750.backgroundColor = new pc.Color(i751[3], i751[4], i751[5], i751[6])
  i750.nearClipPlane = i751[7]
  i750.farClipPlane = i751[8]
  i750.fieldOfView = i751[9]
  i750.depth = i751[10]
  i750.clearFlags = i751[11]
  i750.cullingMask = i751[12]
  i750.rect = i751[13]
  request.r(i751[14], i751[15], 0, i750, 'targetTexture')
  i750.usePhysicalProperties = !!i751[16]
  i750.focalLength = i751[17]
  i750.sensorSize = new pc.Vec2( i751[18], i751[19] )
  i750.lensShift = new pc.Vec2( i751[20], i751[21] )
  i750.gateFit = i751[22]
  i750.commandBufferCount = i751[23]
  i750.cameraType = i751[24]
  i750.enabled = !!i751[25]
  return i750
}

Deserializers["CameraFollow2D"] = function (request, data, root) {
  var i752 = root || request.c( 'CameraFollow2D' )
  var i753 = data
  request.r(i753[0], i753[1], 0, i752, 'target')
  i752.smoothSpeed = i753[2]
  i752.offset = new pc.Vec3( i753[3], i753[4], i753[5] )
  i752.followY = !!i753[6]
  return i752
}

Deserializers["AutoCameraFit"] = function (request, data, root) {
  var i754 = root || request.c( 'AutoCameraFit' )
  var i755 = data
  request.r(i755[0], i755[1], 0, i754, 'tallScreenObject')
  i754.tallScreenRatioThreshold = i755[2]
  i754.tallScreenYOffset = i755[3]
  request.r(i755[4], i755[5], 0, i754, 'canvasBtn')
  request.r(i755[6], i755[7], 0, i754, 'targetArea')
  i754.paddingLandscape = i755[8]
  i754.paddingPortrait = i755[9]
  i754.extraPaddingSmallScreen = i755[10]
  i754.smallScreenThreshold = i755[11]
  i754.autoUpdateOnResize = !!i755[12]
  i754.adjustInEditMode = !!i755[13]
  return i754
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i756 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i757 = data
  i756.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i757[0], i756.main)
  i756.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i757[1], i756.colorBySpeed)
  i756.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i757[2], i756.colorOverLifetime)
  i756.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i757[3], i756.emission)
  i756.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i757[4], i756.rotationBySpeed)
  i756.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i757[5], i756.rotationOverLifetime)
  i756.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i757[6], i756.shape)
  i756.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i757[7], i756.sizeBySpeed)
  i756.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i757[8], i756.sizeOverLifetime)
  i756.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i757[9], i756.textureSheetAnimation)
  i756.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i757[10], i756.velocityOverLifetime)
  i756.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i757[11], i756.noise)
  i756.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i757[12], i756.inheritVelocity)
  i756.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i757[13], i756.forceOverLifetime)
  i756.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i757[14], i756.limitVelocityOverLifetime)
  i756.useAutoRandomSeed = !!i757[15]
  i756.randomSeed = i757[16]
  return i756
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i758 = root || new pc.ParticleSystemMain()
  var i759 = data
  i758.duration = i759[0]
  i758.loop = !!i759[1]
  i758.prewarm = !!i759[2]
  i758.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i759[3], i758.startDelay)
  i758.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i759[4], i758.startLifetime)
  i758.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i759[5], i758.startSpeed)
  i758.startSize3D = !!i759[6]
  i758.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i759[7], i758.startSizeX)
  i758.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i759[8], i758.startSizeY)
  i758.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i759[9], i758.startSizeZ)
  i758.startRotation3D = !!i759[10]
  i758.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i759[11], i758.startRotationX)
  i758.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i759[12], i758.startRotationY)
  i758.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i759[13], i758.startRotationZ)
  i758.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i759[14], i758.startColor)
  i758.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i759[15], i758.gravityModifier)
  i758.simulationSpace = i759[16]
  request.r(i759[17], i759[18], 0, i758, 'customSimulationSpace')
  i758.simulationSpeed = i759[19]
  i758.useUnscaledTime = !!i759[20]
  i758.scalingMode = i759[21]
  i758.playOnAwake = !!i759[22]
  i758.maxParticles = i759[23]
  i758.emitterVelocityMode = i759[24]
  i758.stopAction = i759[25]
  return i758
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i760 = root || new pc.MinMaxCurve()
  var i761 = data
  i760.mode = i761[0]
  i760.curveMin = new pc.AnimationCurve( { keys_flow: i761[1] } )
  i760.curveMax = new pc.AnimationCurve( { keys_flow: i761[2] } )
  i760.curveMultiplier = i761[3]
  i760.constantMin = i761[4]
  i760.constantMax = i761[5]
  return i760
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i762 = root || new pc.MinMaxGradient()
  var i763 = data
  i762.mode = i763[0]
  i762.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i763[1], i762.gradientMin)
  i762.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i763[2], i762.gradientMax)
  i762.colorMin = new pc.Color(i763[3], i763[4], i763[5], i763[6])
  i762.colorMax = new pc.Color(i763[7], i763[8], i763[9], i763[10])
  return i762
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i764 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i765 = data
  i764.mode = i765[0]
  var i767 = i765[1]
  var i766 = []
  for(var i = 0; i < i767.length; i += 1) {
    i766.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i767[i + 0]) );
  }
  i764.colorKeys = i766
  var i769 = i765[2]
  var i768 = []
  for(var i = 0; i < i769.length; i += 1) {
    i768.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i769[i + 0]) );
  }
  i764.alphaKeys = i768
  return i764
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i770 = root || new pc.ParticleSystemColorBySpeed()
  var i771 = data
  i770.enabled = !!i771[0]
  i770.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i771[1], i770.color)
  i770.range = new pc.Vec2( i771[2], i771[3] )
  return i770
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i774 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i775 = data
  i774.color = new pc.Color(i775[0], i775[1], i775[2], i775[3])
  i774.time = i775[4]
  return i774
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i778 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i779 = data
  i778.alpha = i779[0]
  i778.time = i779[1]
  return i778
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i780 = root || new pc.ParticleSystemColorOverLifetime()
  var i781 = data
  i780.enabled = !!i781[0]
  i780.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i781[1], i780.color)
  return i780
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i782 = root || new pc.ParticleSystemEmitter()
  var i783 = data
  i782.enabled = !!i783[0]
  i782.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i783[1], i782.rateOverTime)
  i782.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i783[2], i782.rateOverDistance)
  var i785 = i783[3]
  var i784 = []
  for(var i = 0; i < i785.length; i += 1) {
    i784.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i785[i + 0]) );
  }
  i782.bursts = i784
  return i782
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i788 = root || new pc.ParticleSystemBurst()
  var i789 = data
  i788.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i789[0], i788.count)
  i788.cycleCount = i789[1]
  i788.minCount = i789[2]
  i788.maxCount = i789[3]
  i788.repeatInterval = i789[4]
  i788.time = i789[5]
  return i788
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i790 = root || new pc.ParticleSystemRotationBySpeed()
  var i791 = data
  i790.enabled = !!i791[0]
  i790.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i791[1], i790.x)
  i790.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i791[2], i790.y)
  i790.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i791[3], i790.z)
  i790.separateAxes = !!i791[4]
  i790.range = new pc.Vec2( i791[5], i791[6] )
  return i790
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i792 = root || new pc.ParticleSystemRotationOverLifetime()
  var i793 = data
  i792.enabled = !!i793[0]
  i792.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i793[1], i792.x)
  i792.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i793[2], i792.y)
  i792.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i793[3], i792.z)
  i792.separateAxes = !!i793[4]
  return i792
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i794 = root || new pc.ParticleSystemShape()
  var i795 = data
  i794.enabled = !!i795[0]
  i794.shapeType = i795[1]
  i794.randomDirectionAmount = i795[2]
  i794.sphericalDirectionAmount = i795[3]
  i794.randomPositionAmount = i795[4]
  i794.alignToDirection = !!i795[5]
  i794.radius = i795[6]
  i794.radiusMode = i795[7]
  i794.radiusSpread = i795[8]
  i794.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i795[9], i794.radiusSpeed)
  i794.radiusThickness = i795[10]
  i794.angle = i795[11]
  i794.length = i795[12]
  i794.boxThickness = new pc.Vec3( i795[13], i795[14], i795[15] )
  i794.meshShapeType = i795[16]
  request.r(i795[17], i795[18], 0, i794, 'mesh')
  request.r(i795[19], i795[20], 0, i794, 'meshRenderer')
  request.r(i795[21], i795[22], 0, i794, 'skinnedMeshRenderer')
  i794.useMeshMaterialIndex = !!i795[23]
  i794.meshMaterialIndex = i795[24]
  i794.useMeshColors = !!i795[25]
  i794.normalOffset = i795[26]
  i794.arc = i795[27]
  i794.arcMode = i795[28]
  i794.arcSpread = i795[29]
  i794.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i795[30], i794.arcSpeed)
  i794.donutRadius = i795[31]
  i794.position = new pc.Vec3( i795[32], i795[33], i795[34] )
  i794.rotation = new pc.Vec3( i795[35], i795[36], i795[37] )
  i794.scale = new pc.Vec3( i795[38], i795[39], i795[40] )
  return i794
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i796 = root || new pc.ParticleSystemSizeBySpeed()
  var i797 = data
  i796.enabled = !!i797[0]
  i796.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i797[1], i796.x)
  i796.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i797[2], i796.y)
  i796.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i797[3], i796.z)
  i796.separateAxes = !!i797[4]
  i796.range = new pc.Vec2( i797[5], i797[6] )
  return i796
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i798 = root || new pc.ParticleSystemSizeOverLifetime()
  var i799 = data
  i798.enabled = !!i799[0]
  i798.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i799[1], i798.x)
  i798.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i799[2], i798.y)
  i798.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i799[3], i798.z)
  i798.separateAxes = !!i799[4]
  return i798
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i800 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i801 = data
  i800.enabled = !!i801[0]
  i800.mode = i801[1]
  i800.animation = i801[2]
  i800.numTilesX = i801[3]
  i800.numTilesY = i801[4]
  i800.useRandomRow = !!i801[5]
  i800.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i801[6], i800.frameOverTime)
  i800.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i801[7], i800.startFrame)
  i800.cycleCount = i801[8]
  i800.rowIndex = i801[9]
  i800.flipU = i801[10]
  i800.flipV = i801[11]
  i800.spriteCount = i801[12]
  var i803 = i801[13]
  var i802 = []
  for(var i = 0; i < i803.length; i += 2) {
  request.r(i803[i + 0], i803[i + 1], 2, i802, '')
  }
  i800.sprites = i802
  return i800
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i806 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i807 = data
  i806.enabled = !!i807[0]
  i806.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i807[1], i806.x)
  i806.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i807[2], i806.y)
  i806.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i807[3], i806.z)
  i806.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i807[4], i806.radial)
  i806.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i807[5], i806.speedModifier)
  i806.space = i807[6]
  i806.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i807[7], i806.orbitalX)
  i806.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i807[8], i806.orbitalY)
  i806.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i807[9], i806.orbitalZ)
  i806.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i807[10], i806.orbitalOffsetX)
  i806.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i807[11], i806.orbitalOffsetY)
  i806.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i807[12], i806.orbitalOffsetZ)
  return i806
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i808 = root || new pc.ParticleSystemNoise()
  var i809 = data
  i808.enabled = !!i809[0]
  i808.separateAxes = !!i809[1]
  i808.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i809[2], i808.strengthX)
  i808.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i809[3], i808.strengthY)
  i808.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i809[4], i808.strengthZ)
  i808.frequency = i809[5]
  i808.damping = !!i809[6]
  i808.octaveCount = i809[7]
  i808.octaveMultiplier = i809[8]
  i808.octaveScale = i809[9]
  i808.quality = i809[10]
  i808.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i809[11], i808.scrollSpeed)
  i808.scrollSpeedMultiplier = i809[12]
  i808.remapEnabled = !!i809[13]
  i808.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i809[14], i808.remapX)
  i808.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i809[15], i808.remapY)
  i808.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i809[16], i808.remapZ)
  i808.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i809[17], i808.positionAmount)
  i808.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i809[18], i808.rotationAmount)
  i808.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i809[19], i808.sizeAmount)
  return i808
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i810 = root || new pc.ParticleSystemInheritVelocity()
  var i811 = data
  i810.enabled = !!i811[0]
  i810.mode = i811[1]
  i810.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i811[2], i810.curve)
  return i810
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i812 = root || new pc.ParticleSystemForceOverLifetime()
  var i813 = data
  i812.enabled = !!i813[0]
  i812.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i813[1], i812.x)
  i812.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i813[2], i812.y)
  i812.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i813[3], i812.z)
  i812.space = i813[4]
  i812.randomized = !!i813[5]
  return i812
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i814 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i815 = data
  i814.enabled = !!i815[0]
  i814.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i815[1], i814.limit)
  i814.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i815[2], i814.limitX)
  i814.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i815[3], i814.limitY)
  i814.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i815[4], i814.limitZ)
  i814.dampen = i815[5]
  i814.separateAxes = !!i815[6]
  i814.space = i815[7]
  i814.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i815[8], i814.drag)
  i814.multiplyDragByParticleSize = !!i815[9]
  i814.multiplyDragByParticleVelocity = !!i815[10]
  return i814
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i816 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i817 = data
  request.r(i817[0], i817[1], 0, i816, 'mesh')
  i816.meshCount = i817[2]
  i816.activeVertexStreamsCount = i817[3]
  i816.alignment = i817[4]
  i816.renderMode = i817[5]
  i816.sortMode = i817[6]
  i816.lengthScale = i817[7]
  i816.velocityScale = i817[8]
  i816.cameraVelocityScale = i817[9]
  i816.normalDirection = i817[10]
  i816.sortingFudge = i817[11]
  i816.minParticleSize = i817[12]
  i816.maxParticleSize = i817[13]
  i816.pivot = new pc.Vec3( i817[14], i817[15], i817[16] )
  request.r(i817[17], i817[18], 0, i816, 'trailMaterial')
  i816.applyActiveColorSpace = !!i817[19]
  i816.enabled = !!i817[20]
  request.r(i817[21], i817[22], 0, i816, 'sharedMaterial')
  var i819 = i817[23]
  var i818 = []
  for(var i = 0; i < i819.length; i += 2) {
  request.r(i819[i + 0], i819[i + 1], 2, i818, '')
  }
  i816.sharedMaterials = i818
  i816.receiveShadows = !!i817[24]
  i816.shadowCastingMode = i817[25]
  i816.sortingLayerID = i817[26]
  i816.sortingOrder = i817[27]
  i816.lightmapIndex = i817[28]
  i816.lightmapSceneIndex = i817[29]
  i816.lightmapScaleOffset = new pc.Vec4( i817[30], i817[31], i817[32], i817[33] )
  i816.lightProbeUsage = i817[34]
  i816.reflectionProbeUsage = i817[35]
  return i816
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i822 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i823 = data
  i822.name = i823[0]
  i822.tagId = i823[1]
  i822.enabled = !!i823[2]
  i822.isStatic = !!i823[3]
  i822.layer = i823[4]
  return i822
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i824 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i825 = data
  i824.color = new pc.Color(i825[0], i825[1], i825[2], i825[3])
  request.r(i825[4], i825[5], 0, i824, 'sprite')
  i824.flipX = !!i825[6]
  i824.flipY = !!i825[7]
  i824.drawMode = i825[8]
  i824.size = new pc.Vec2( i825[9], i825[10] )
  i824.tileMode = i825[11]
  i824.adaptiveModeThreshold = i825[12]
  i824.maskInteraction = i825[13]
  i824.spriteSortPoint = i825[14]
  i824.enabled = !!i825[15]
  request.r(i825[16], i825[17], 0, i824, 'sharedMaterial')
  var i827 = i825[18]
  var i826 = []
  for(var i = 0; i < i827.length; i += 2) {
  request.r(i827[i + 0], i827[i + 1], 2, i826, '')
  }
  i824.sharedMaterials = i826
  i824.receiveShadows = !!i825[19]
  i824.shadowCastingMode = i825[20]
  i824.sortingLayerID = i825[21]
  i824.sortingOrder = i825[22]
  i824.lightmapIndex = i825[23]
  i824.lightmapSceneIndex = i825[24]
  i824.lightmapScaleOffset = new pc.Vec4( i825[25], i825[26], i825[27], i825[28] )
  i824.lightProbeUsage = i825[29]
  i824.reflectionProbeUsage = i825[30]
  return i824
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

Deserializers["MoveBetweenPoints"] = function (request, data, root) {
  var i834 = root || request.c( 'MoveBetweenPoints' )
  var i835 = data
  request.r(i835[0], i835[1], 0, i834, 'pointA')
  request.r(i835[2], i835[3], 0, i834, 'pointB')
  i834.duration = i835[4]
  return i834
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i836 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i837 = data
  i836.pivot = new pc.Vec2( i837[0], i837[1] )
  i836.anchorMin = new pc.Vec2( i837[2], i837[3] )
  i836.anchorMax = new pc.Vec2( i837[4], i837[5] )
  i836.sizeDelta = new pc.Vec2( i837[6], i837[7] )
  i836.anchoredPosition3D = new pc.Vec3( i837[8], i837[9], i837[10] )
  i836.rotation = new pc.Quat(i837[11], i837[12], i837[13], i837[14])
  i836.scale = new pc.Vec3( i837[15], i837[16], i837[17] )
  return i836
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i838 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i839 = data
  request.r(i839[0], i839[1], 0, i838, 'additionalVertexStreams')
  i838.enabled = !!i839[2]
  request.r(i839[3], i839[4], 0, i838, 'sharedMaterial')
  var i841 = i839[5]
  var i840 = []
  for(var i = 0; i < i841.length; i += 2) {
  request.r(i841[i + 0], i841[i + 1], 2, i840, '')
  }
  i838.sharedMaterials = i840
  i838.receiveShadows = !!i839[6]
  i838.shadowCastingMode = i839[7]
  i838.sortingLayerID = i839[8]
  i838.sortingOrder = i839[9]
  i838.lightmapIndex = i839[10]
  i838.lightmapSceneIndex = i839[11]
  i838.lightmapScaleOffset = new pc.Vec4( i839[12], i839[13], i839[14], i839[15] )
  i838.lightProbeUsage = i839[16]
  i838.reflectionProbeUsage = i839[17]
  return i838
}

Deserializers["TMPro.TextMeshPro"] = function (request, data, root) {
  var i842 = root || request.c( 'TMPro.TextMeshPro' )
  var i843 = data
  i842._SortingLayer = i843[0]
  i842._SortingLayerID = i843[1]
  i842._SortingOrder = i843[2]
  i842.m_hasFontAssetChanged = !!i843[3]
  request.r(i843[4], i843[5], 0, i842, 'm_renderer')
  i842.m_maskType = i843[6]
  i842.m_text = i843[7]
  i842.m_isRightToLeft = !!i843[8]
  request.r(i843[9], i843[10], 0, i842, 'm_fontAsset')
  request.r(i843[11], i843[12], 0, i842, 'm_sharedMaterial')
  var i845 = i843[13]
  var i844 = []
  for(var i = 0; i < i845.length; i += 2) {
  request.r(i845[i + 0], i845[i + 1], 2, i844, '')
  }
  i842.m_fontSharedMaterials = i844
  request.r(i843[14], i843[15], 0, i842, 'm_fontMaterial')
  var i847 = i843[16]
  var i846 = []
  for(var i = 0; i < i847.length; i += 2) {
  request.r(i847[i + 0], i847[i + 1], 2, i846, '')
  }
  i842.m_fontMaterials = i846
  i842.m_fontColor32 = UnityEngine.Color32.ConstructColor(i843[17], i843[18], i843[19], i843[20])
  i842.m_fontColor = new pc.Color(i843[21], i843[22], i843[23], i843[24])
  i842.m_enableVertexGradient = !!i843[25]
  i842.m_colorMode = i843[26]
  i842.m_fontColorGradient = request.d('TMPro.VertexGradient', i843[27], i842.m_fontColorGradient)
  request.r(i843[28], i843[29], 0, i842, 'm_fontColorGradientPreset')
  request.r(i843[30], i843[31], 0, i842, 'm_spriteAsset')
  i842.m_tintAllSprites = !!i843[32]
  request.r(i843[33], i843[34], 0, i842, 'm_StyleSheet')
  i842.m_TextStyleHashCode = i843[35]
  i842.m_overrideHtmlColors = !!i843[36]
  i842.m_faceColor = UnityEngine.Color32.ConstructColor(i843[37], i843[38], i843[39], i843[40])
  i842.m_fontSize = i843[41]
  i842.m_fontSizeBase = i843[42]
  i842.m_fontWeight = i843[43]
  i842.m_enableAutoSizing = !!i843[44]
  i842.m_fontSizeMin = i843[45]
  i842.m_fontSizeMax = i843[46]
  i842.m_fontStyle = i843[47]
  i842.m_HorizontalAlignment = i843[48]
  i842.m_VerticalAlignment = i843[49]
  i842.m_textAlignment = i843[50]
  i842.m_characterSpacing = i843[51]
  i842.m_wordSpacing = i843[52]
  i842.m_lineSpacing = i843[53]
  i842.m_lineSpacingMax = i843[54]
  i842.m_paragraphSpacing = i843[55]
  i842.m_charWidthMaxAdj = i843[56]
  i842.m_TextWrappingMode = i843[57]
  i842.m_wordWrappingRatios = i843[58]
  i842.m_overflowMode = i843[59]
  request.r(i843[60], i843[61], 0, i842, 'm_linkedTextComponent')
  request.r(i843[62], i843[63], 0, i842, 'parentLinkedComponent')
  i842.m_enableKerning = !!i843[64]
  var i849 = i843[65]
  var i848 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i849.length; i += 1) {
    i848.add(i849[i + 0]);
  }
  i842.m_ActiveFontFeatures = i848
  i842.m_enableExtraPadding = !!i843[66]
  i842.checkPaddingRequired = !!i843[67]
  i842.m_isRichText = !!i843[68]
  i842.m_parseCtrlCharacters = !!i843[69]
  i842.m_isOrthographic = !!i843[70]
  i842.m_isCullingEnabled = !!i843[71]
  i842.m_horizontalMapping = i843[72]
  i842.m_verticalMapping = i843[73]
  i842.m_uvLineOffset = i843[74]
  i842.m_geometrySortingOrder = i843[75]
  i842.m_IsTextObjectScaleStatic = !!i843[76]
  i842.m_VertexBufferAutoSizeReduction = !!i843[77]
  i842.m_useMaxVisibleDescender = !!i843[78]
  i842.m_pageToDisplay = i843[79]
  i842.m_margin = new pc.Vec4( i843[80], i843[81], i843[82], i843[83] )
  i842.m_isUsingLegacyAnimationComponent = !!i843[84]
  i842.m_isVolumetricText = !!i843[85]
  request.r(i843[86], i843[87], 0, i842, 'm_Material')
  i842.m_EmojiFallbackSupport = !!i843[88]
  i842.m_Maskable = !!i843[89]
  i842.m_Color = new pc.Color(i843[90], i843[91], i843[92], i843[93])
  i842.m_RaycastTarget = !!i843[94]
  i842.m_RaycastPadding = new pc.Vec4( i843[95], i843[96], i843[97], i843[98] )
  return i842
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i850 = root || request.c( 'TMPro.VertexGradient' )
  var i851 = data
  i850.topLeft = new pc.Color(i851[0], i851[1], i851[2], i851[3])
  i850.topRight = new pc.Color(i851[4], i851[5], i851[6], i851[7])
  i850.bottomLeft = new pc.Color(i851[8], i851[9], i851[10], i851[11])
  i850.bottomRight = new pc.Color(i851[12], i851[13], i851[14], i851[15])
  return i850
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i854 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i855 = data
  request.r(i855[0], i855[1], 0, i854, 'sharedMesh')
  return i854
}

Deserializers["PlayerCardUIManager"] = function (request, data, root) {
  var i856 = root || request.c( 'PlayerCardUIManager' )
  var i857 = data
  request.r(i857[0], i857[1], 0, i856, 'cardPanel')
  var i859 = i857[2]
  var i858 = []
  for(var i = 0; i < i859.length; i += 2) {
  request.r(i859[i + 0], i859[i + 1], 2, i858, '')
  }
  i856.extraObjectsToActivate = i858
  i856.waitTime = i857[3]
  var i861 = i857[4]
  var i860 = []
  for(var i = 0; i < i861.length; i += 2) {
  request.r(i861[i + 0], i861[i + 1], 2, i860, '')
  }
  i856.objectsToTurnOnAfterWait = i860
  var i863 = i857[5]
  var i862 = []
  for(var i = 0; i < i863.length; i += 2) {
  request.r(i863[i + 0], i863[i + 1], 2, i862, '')
  }
  i856.objectsToTurnOffAfterWait = i862
  request.r(i857[6], i857[7], 0, i856, 'playerNameText')
  request.r(i857[8], i857[9], 0, i856, 'playerImage')
  return i856
}

Deserializers["Ply_SoundManager"] = function (request, data, root) {
  var i866 = root || request.c( 'Ply_SoundManager' )
  var i867 = data
  i866.fxAudio = request.d('FxAudio', i867[0], i866.fxAudio)
  request.r(i867[1], i867[2], 0, i866, 'bgm1')
  return i866
}

Deserializers["FxAudio"] = function (request, data, root) {
  var i868 = root || request.c( 'FxAudio' )
  var i869 = data
  i868.ClickBox = request.d('SoundData', i869[0], i868.ClickBox)
  i868.Happy = request.d('SoundData', i869[1], i868.Happy)
  i868.Wrong = request.d('SoundData', i869[2], i868.Wrong)
  i868.Spray = request.d('SoundData', i869[3], i868.Spray)
  i868.Brush = request.d('SoundData', i869[4], i868.Brush)
  return i868
}

Deserializers["SoundData"] = function (request, data, root) {
  var i870 = root || request.c( 'SoundData' )
  var i871 = data
  request.r(i871[0], i871[1], 0, i870, 'clip')
  i870.repeatCount = i871[2]
  return i870
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i872 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i873 = data
  request.r(i873[0], i873[1], 0, i872, 'clip')
  request.r(i873[2], i873[3], 0, i872, 'outputAudioMixerGroup')
  i872.playOnAwake = !!i873[4]
  i872.loop = !!i873[5]
  i872.time = i873[6]
  i872.volume = i873[7]
  i872.pitch = i873[8]
  i872.enabled = !!i873[9]
  return i872
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i874 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i875 = data
  i874.planeDistance = i875[0]
  i874.referencePixelsPerUnit = i875[1]
  i874.isFallbackOverlay = !!i875[2]
  i874.renderMode = i875[3]
  i874.renderOrder = i875[4]
  i874.sortingLayerName = i875[5]
  i874.sortingOrder = i875[6]
  i874.scaleFactor = i875[7]
  request.r(i875[8], i875[9], 0, i874, 'worldCamera')
  i874.overrideSorting = !!i875[10]
  i874.pixelPerfect = !!i875[11]
  i874.targetDisplay = i875[12]
  i874.overridePixelPerfect = !!i875[13]
  i874.enabled = !!i875[14]
  return i874
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i876 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i877 = data
  i876.m_UiScaleMode = i877[0]
  i876.m_ReferencePixelsPerUnit = i877[1]
  i876.m_ScaleFactor = i877[2]
  i876.m_ReferenceResolution = new pc.Vec2( i877[3], i877[4] )
  i876.m_ScreenMatchMode = i877[5]
  i876.m_MatchWidthOrHeight = i877[6]
  i876.m_PhysicalUnit = i877[7]
  i876.m_FallbackScreenDPI = i877[8]
  i876.m_DefaultSpriteDPI = i877[9]
  i876.m_DynamicPixelsPerUnit = i877[10]
  i876.m_PresetInfoIsWorld = !!i877[11]
  return i876
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i878 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i879 = data
  i878.m_IgnoreReversedGraphics = !!i879[0]
  i878.m_BlockingObjects = i879[1]
  i878.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i879[2] )
  return i878
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i880 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i881 = data
  i880.cullTransparentMesh = !!i881[0]
  return i880
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i882 = root || request.c( 'UnityEngine.UI.Image' )
  var i883 = data
  request.r(i883[0], i883[1], 0, i882, 'm_Sprite')
  i882.m_Type = i883[2]
  i882.m_PreserveAspect = !!i883[3]
  i882.m_FillCenter = !!i883[4]
  i882.m_FillMethod = i883[5]
  i882.m_FillAmount = i883[6]
  i882.m_FillClockwise = !!i883[7]
  i882.m_FillOrigin = i883[8]
  i882.m_UseSpriteMesh = !!i883[9]
  i882.m_PixelsPerUnitMultiplier = i883[10]
  request.r(i883[11], i883[12], 0, i882, 'm_Material')
  i882.m_Maskable = !!i883[13]
  i882.m_Color = new pc.Color(i883[14], i883[15], i883[16], i883[17])
  i882.m_RaycastTarget = !!i883[18]
  i882.m_RaycastPadding = new pc.Vec4( i883[19], i883[20], i883[21], i883[22] )
  return i882
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i884 = root || request.c( 'UnityEngine.UI.Button' )
  var i885 = data
  i884.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i885[0], i884.m_OnClick)
  i884.m_Navigation = request.d('UnityEngine.UI.Navigation', i885[1], i884.m_Navigation)
  i884.m_Transition = i885[2]
  i884.m_Colors = request.d('UnityEngine.UI.ColorBlock', i885[3], i884.m_Colors)
  i884.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i885[4], i884.m_SpriteState)
  i884.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i885[5], i884.m_AnimationTriggers)
  i884.m_Interactable = !!i885[6]
  request.r(i885[7], i885[8], 0, i884, 'm_TargetGraphic')
  return i884
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i886 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i887 = data
  i886.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i887[0], i886.m_PersistentCalls)
  return i886
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i888 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i889 = data
  var i891 = i889[0]
  var i890 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i891.length; i += 1) {
    i890.add(request.d('UnityEngine.Events.PersistentCall', i891[i + 0]));
  }
  i888.m_Calls = i890
  return i888
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i894 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i895 = data
  request.r(i895[0], i895[1], 0, i894, 'm_Target')
  i894.m_TargetAssemblyTypeName = i895[2]
  i894.m_MethodName = i895[3]
  i894.m_Mode = i895[4]
  i894.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i895[5], i894.m_Arguments)
  i894.m_CallState = i895[6]
  return i894
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i896 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i897 = data
  request.r(i897[0], i897[1], 0, i896, 'm_ObjectArgument')
  i896.m_ObjectArgumentAssemblyTypeName = i897[2]
  i896.m_IntArgument = i897[3]
  i896.m_FloatArgument = i897[4]
  i896.m_StringArgument = i897[5]
  i896.m_BoolArgument = !!i897[6]
  return i896
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i898 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i899 = data
  i898.m_Mode = i899[0]
  i898.m_WrapAround = !!i899[1]
  request.r(i899[2], i899[3], 0, i898, 'm_SelectOnUp')
  request.r(i899[4], i899[5], 0, i898, 'm_SelectOnDown')
  request.r(i899[6], i899[7], 0, i898, 'm_SelectOnLeft')
  request.r(i899[8], i899[9], 0, i898, 'm_SelectOnRight')
  return i898
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i900 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i901 = data
  i900.m_NormalColor = new pc.Color(i901[0], i901[1], i901[2], i901[3])
  i900.m_HighlightedColor = new pc.Color(i901[4], i901[5], i901[6], i901[7])
  i900.m_PressedColor = new pc.Color(i901[8], i901[9], i901[10], i901[11])
  i900.m_SelectedColor = new pc.Color(i901[12], i901[13], i901[14], i901[15])
  i900.m_DisabledColor = new pc.Color(i901[16], i901[17], i901[18], i901[19])
  i900.m_ColorMultiplier = i901[20]
  i900.m_FadeDuration = i901[21]
  return i900
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i902 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i903 = data
  request.r(i903[0], i903[1], 0, i902, 'm_HighlightedSprite')
  request.r(i903[2], i903[3], 0, i902, 'm_PressedSprite')
  request.r(i903[4], i903[5], 0, i902, 'm_SelectedSprite')
  request.r(i903[6], i903[7], 0, i902, 'm_DisabledSprite')
  return i902
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i904 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i905 = data
  i904.m_NormalTrigger = i905[0]
  i904.m_HighlightedTrigger = i905[1]
  i904.m_PressedTrigger = i905[2]
  i904.m_SelectedTrigger = i905[3]
  i904.m_DisabledTrigger = i905[4]
  return i904
}

Deserializers["ScreenHeightPositionAnchor"] = function (request, data, root) {
  var i906 = root || request.c( 'ScreenHeightPositionAnchor' )
  var i907 = data
  request.r(i907[0], i907[1], 0, i906, 'anchorPoint')
  request.r(i907[2], i907[3], 0, i906, 'targetCamera')
  i906.viewportYRatio = i907[4]
  i906.alignOnStart = !!i907[5]
  i906.alignOnEnable = !!i907[6]
  i906.realignOnScreenSizeChanged = !!i907[7]
  i906.drawGizmos = !!i907[8]
  i906.targetLineColor = new pc.Color(i907[9], i907[10], i907[11], i907[12])
  i906.anchorColor = new pc.Color(i907[13], i907[14], i907[15], i907[16])
  return i906
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D"] = function (request, data, root) {
  var i908 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D' )
  var i909 = data
  i908.usedByComposite = !!i909[0]
  i908.autoTiling = !!i909[1]
  var i911 = i909[2]
  var i910 = []
  for(var i = 0; i < i911.length; i += 1) {
  var i913 = i911[i + 0]
  var i912 = []
  for(var i = 0; i < i913.length; i += 2) {
    i912.push( new pc.Vec2( i913[i + 0], i913[i + 1] ) );
  }
    i910.push( i912 );
  }
  i908.points = i910
  i908.enabled = !!i909[3]
  i908.isTrigger = !!i909[4]
  i908.usedByEffector = !!i909[5]
  i908.density = i909[6]
  i908.offset = new pc.Vec2( i909[7], i909[8] )
  request.r(i909[9], i909[10], 0, i908, 'material')
  return i908
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i920 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i921 = data
  i920.usedByComposite = !!i921[0]
  i920.autoTiling = !!i921[1]
  i920.size = new pc.Vec2( i921[2], i921[3] )
  i920.edgeRadius = i921[4]
  i920.enabled = !!i921[5]
  i920.isTrigger = !!i921[6]
  i920.usedByEffector = !!i921[7]
  i920.density = i921[8]
  i920.offset = new pc.Vec2( i921[9], i921[10] )
  request.r(i921[11], i921[12], 0, i920, 'material')
  return i920
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i922 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i923 = data
  i922.bodyType = i923[0]
  request.r(i923[1], i923[2], 0, i922, 'material')
  i922.simulated = !!i923[3]
  i922.useAutoMass = !!i923[4]
  i922.mass = i923[5]
  i922.drag = i923[6]
  i922.angularDrag = i923[7]
  i922.gravityScale = i923[8]
  i922.collisionDetectionMode = i923[9]
  i922.sleepMode = i923[10]
  i922.constraints = i923[11]
  return i922
}

Deserializers["BatStrikeController"] = function (request, data, root) {
  var i924 = root || request.c( 'BatStrikeController' )
  var i925 = data
  i924.pullSpeed = i925[0]
  i924.maxPullDistance = i925[1]
  i924.minHoldTime = i925[2]
  i924.strikeForce = i925[3]
  i924.targetTag = i925[4]
  return i924
}

Deserializers["CupCollision"] = function (request, data, root) {
  var i926 = root || request.c( 'CupCollision' )
  var i927 = data
  i926.baseTag = i927[0]
  request.r(i927[1], i927[2], 0, i926, 'objectToActivate')
  return i926
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider2D"] = function (request, data, root) {
  var i928 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider2D' )
  var i929 = data
  i928.size = new pc.Vec2( i929[0], i929[1] )
  i928.direction = i929[2]
  i928.enabled = !!i929[3]
  i928.isTrigger = !!i929[4]
  i928.usedByEffector = !!i929[5]
  i928.density = i929[6]
  i928.offset = new pc.Vec2( i929[7], i929[8] )
  request.r(i929[9], i929[10], 0, i928, 'material')
  return i928
}

Deserializers["SlotTrigger"] = function (request, data, root) {
  var i930 = root || request.c( 'SlotTrigger' )
  var i931 = data
  request.r(i931[0], i931[1], 0, i930, 'cardData')
  i930.targetTag = i931[2]
  request.r(i931[3], i931[4], 0, i930, 'yAnchor')
  i930.moveSpeed = i931[5]
  request.r(i931[6], i931[7], 0, i930, 'objectToMoveDown')
  i930.targetScreenYRatio = i931[8]
  return i930
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteMask"] = function (request, data, root) {
  var i932 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteMask' )
  var i933 = data
  i932.frontSortingLayerID = i933[0]
  i932.frontSortingOrder = i933[1]
  i932.backSortingLayerID = i933[2]
  i932.backSortingOrder = i933[3]
  i932.alphaCutoff = i933[4]
  request.r(i933[5], i933[6], 0, i932, 'sprite')
  i932.tileMode = i933[7]
  i932.isCustomRangeActive = !!i933[8]
  i932.spriteSortPoint = i933[9]
  i932.enabled = !!i933[10]
  request.r(i933[11], i933[12], 0, i932, 'sharedMaterial')
  var i935 = i933[13]
  var i934 = []
  for(var i = 0; i < i935.length; i += 2) {
  request.r(i935[i + 0], i935[i + 1], 2, i934, '')
  }
  i932.sharedMaterials = i934
  i932.receiveShadows = !!i933[14]
  i932.shadowCastingMode = i933[15]
  i932.sortingLayerID = i933[16]
  i932.sortingOrder = i933[17]
  i932.lightmapIndex = i933[18]
  i932.lightmapSceneIndex = i933[19]
  i932.lightmapScaleOffset = new pc.Vec4( i933[20], i933[21], i933[22], i933[23] )
  i932.lightProbeUsage = i933[24]
  i932.reflectionProbeUsage = i933[25]
  return i932
}

Deserializers["HideOnFirstClick"] = function (request, data, root) {
  var i936 = root || request.c( 'HideOnFirstClick' )
  var i937 = data
  request.r(i937[0], i937[1], 0, i936, 'objectToHide')
  return i936
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i938 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i939 = data
  request.r(i939[0], i939[1], 0, i938, 'm_FirstSelected')
  i938.m_sendNavigationEvents = !!i939[2]
  i938.m_DragThreshold = i939[3]
  return i938
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i940 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i941 = data
  i940.m_HorizontalAxis = i941[0]
  i940.m_VerticalAxis = i941[1]
  i940.m_SubmitButton = i941[2]
  i940.m_CancelButton = i941[3]
  i940.m_InputActionsPerSecond = i941[4]
  i940.m_RepeatDelay = i941[5]
  i940.m_ForceModuleActive = !!i941[6]
  i940.m_SendPointerHoverToParent = !!i941[7]
  return i940
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i942 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i943 = data
  i942.ambientIntensity = i943[0]
  i942.reflectionIntensity = i943[1]
  i942.ambientMode = i943[2]
  i942.ambientLight = new pc.Color(i943[3], i943[4], i943[5], i943[6])
  i942.ambientSkyColor = new pc.Color(i943[7], i943[8], i943[9], i943[10])
  i942.ambientGroundColor = new pc.Color(i943[11], i943[12], i943[13], i943[14])
  i942.ambientEquatorColor = new pc.Color(i943[15], i943[16], i943[17], i943[18])
  i942.fogColor = new pc.Color(i943[19], i943[20], i943[21], i943[22])
  i942.fogEndDistance = i943[23]
  i942.fogStartDistance = i943[24]
  i942.fogDensity = i943[25]
  i942.fog = !!i943[26]
  request.r(i943[27], i943[28], 0, i942, 'skybox')
  i942.fogMode = i943[29]
  var i945 = i943[30]
  var i944 = []
  for(var i = 0; i < i945.length; i += 1) {
    i944.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i945[i + 0]) );
  }
  i942.lightmaps = i944
  i942.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i943[31], i942.lightProbes)
  i942.lightmapsMode = i943[32]
  i942.mixedBakeMode = i943[33]
  i942.environmentLightingMode = i943[34]
  i942.ambientProbe = new pc.SphericalHarmonicsL2(i943[35])
  i942.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i943[36])
  i942.useReferenceAmbientProbe = !!i943[37]
  request.r(i943[38], i943[39], 0, i942, 'customReflection')
  request.r(i943[40], i943[41], 0, i942, 'defaultReflection')
  i942.defaultReflectionMode = i943[42]
  i942.defaultReflectionResolution = i943[43]
  i942.sunLightObjectId = i943[44]
  i942.pixelLightCount = i943[45]
  i942.defaultReflectionHDR = !!i943[46]
  i942.hasLightDataAsset = !!i943[47]
  i942.hasManualGenerate = !!i943[48]
  return i942
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i948 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i949 = data
  request.r(i949[0], i949[1], 0, i948, 'lightmapColor')
  request.r(i949[2], i949[3], 0, i948, 'lightmapDirection')
  request.r(i949[4], i949[5], 0, i948, 'shadowMask')
  return i948
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i950 = root || new UnityEngine.LightProbes()
  var i951 = data
  return i950
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.PhysicsMaterial2D"] = function (request, data, root) {
  var i958 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.PhysicsMaterial2D' )
  var i959 = data
  i958.name = i959[0]
  i958.bounciness = i959[1]
  i958.friction = i959[2]
  return i958
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i960 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i961 = data
  var i963 = i961[0]
  var i962 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i963.length; i += 1) {
    i962.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i963[i + 0]));
  }
  i960.ShaderCompilationErrors = i962
  i960.name = i961[1]
  i960.guid = i961[2]
  var i965 = i961[3]
  var i964 = []
  for(var i = 0; i < i965.length; i += 1) {
    i964.push( i965[i + 0] );
  }
  i960.shaderDefinedKeywords = i964
  var i967 = i961[4]
  var i966 = []
  for(var i = 0; i < i967.length; i += 1) {
    i966.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i967[i + 0]) );
  }
  i960.passes = i966
  var i969 = i961[5]
  var i968 = []
  for(var i = 0; i < i969.length; i += 1) {
    i968.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i969[i + 0]) );
  }
  i960.usePasses = i968
  var i971 = i961[6]
  var i970 = []
  for(var i = 0; i < i971.length; i += 1) {
    i970.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i971[i + 0]) );
  }
  i960.defaultParameterValues = i970
  request.r(i961[7], i961[8], 0, i960, 'unityFallbackShader')
  i960.readDepth = !!i961[9]
  i960.hasDepthOnlyPass = !!i961[10]
  i960.isCreatedByShaderGraph = !!i961[11]
  i960.disableBatching = !!i961[12]
  i960.compiled = !!i961[13]
  return i960
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i974 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i975 = data
  i974.shaderName = i975[0]
  i974.errorMessage = i975[1]
  return i974
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i980 = root || new pc.UnityShaderPass()
  var i981 = data
  i980.id = i981[0]
  i980.subShaderIndex = i981[1]
  i980.name = i981[2]
  i980.passType = i981[3]
  i980.grabPassTextureName = i981[4]
  i980.usePass = !!i981[5]
  i980.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i981[6], i980.zTest)
  i980.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i981[7], i980.zWrite)
  i980.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i981[8], i980.culling)
  i980.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i981[9], i980.blending)
  i980.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i981[10], i980.alphaBlending)
  i980.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i981[11], i980.colorWriteMask)
  i980.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i981[12], i980.offsetUnits)
  i980.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i981[13], i980.offsetFactor)
  i980.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i981[14], i980.stencilRef)
  i980.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i981[15], i980.stencilReadMask)
  i980.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i981[16], i980.stencilWriteMask)
  i980.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i981[17], i980.stencilOp)
  i980.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i981[18], i980.stencilOpFront)
  i980.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i981[19], i980.stencilOpBack)
  var i983 = i981[20]
  var i982 = []
  for(var i = 0; i < i983.length; i += 1) {
    i982.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i983[i + 0]) );
  }
  i980.tags = i982
  var i985 = i981[21]
  var i984 = []
  for(var i = 0; i < i985.length; i += 1) {
    i984.push( i985[i + 0] );
  }
  i980.passDefinedKeywords = i984
  var i987 = i981[22]
  var i986 = []
  for(var i = 0; i < i987.length; i += 1) {
    i986.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i987[i + 0]) );
  }
  i980.passDefinedKeywordGroups = i986
  var i989 = i981[23]
  var i988 = []
  for(var i = 0; i < i989.length; i += 1) {
    i988.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i989[i + 0]) );
  }
  i980.variants = i988
  var i991 = i981[24]
  var i990 = []
  for(var i = 0; i < i991.length; i += 1) {
    i990.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i991[i + 0]) );
  }
  i980.excludedVariants = i990
  i980.hasDepthReader = !!i981[25]
  return i980
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i992 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i993 = data
  i992.val = i993[0]
  i992.name = i993[1]
  return i992
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i994 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i995 = data
  i994.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i995[0], i994.src)
  i994.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i995[1], i994.dst)
  i994.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i995[2], i994.op)
  return i994
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i996 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i997 = data
  i996.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i997[0], i996.pass)
  i996.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i997[1], i996.fail)
  i996.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i997[2], i996.zFail)
  i996.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i997[3], i996.comp)
  return i996
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1000 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1001 = data
  i1000.name = i1001[0]
  i1000.value = i1001[1]
  return i1000
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1004 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1005 = data
  var i1007 = i1005[0]
  var i1006 = []
  for(var i = 0; i < i1007.length; i += 1) {
    i1006.push( i1007[i + 0] );
  }
  i1004.keywords = i1006
  i1004.hasDiscard = !!i1005[1]
  return i1004
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1010 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1011 = data
  i1010.passId = i1011[0]
  i1010.subShaderIndex = i1011[1]
  var i1013 = i1011[2]
  var i1012 = []
  for(var i = 0; i < i1013.length; i += 1) {
    i1012.push( i1013[i + 0] );
  }
  i1010.keywords = i1012
  i1010.vertexProgram = i1011[3]
  i1010.fragmentProgram = i1011[4]
  i1010.exportedForWebGl2 = !!i1011[5]
  i1010.readDepth = !!i1011[6]
  return i1010
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1016 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1017 = data
  request.r(i1017[0], i1017[1], 0, i1016, 'shader')
  i1016.pass = i1017[2]
  return i1016
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1020 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1021 = data
  i1020.name = i1021[0]
  i1020.type = i1021[1]
  i1020.value = new pc.Vec4( i1021[2], i1021[3], i1021[4], i1021[5] )
  i1020.textureValue = i1021[6]
  i1020.shaderPropertyFlag = i1021[7]
  return i1020
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1022 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1023 = data
  i1022.name = i1023[0]
  request.r(i1023[1], i1023[2], 0, i1022, 'texture')
  i1022.aabb = i1023[3]
  i1022.vertices = i1023[4]
  i1022.triangles = i1023[5]
  i1022.textureRect = UnityEngine.Rect.MinMaxRect(i1023[6], i1023[7], i1023[8], i1023[9])
  i1022.packedRect = UnityEngine.Rect.MinMaxRect(i1023[10], i1023[11], i1023[12], i1023[13])
  i1022.border = new pc.Vec4( i1023[14], i1023[15], i1023[16], i1023[17] )
  i1022.transparency = i1023[18]
  i1022.bounds = i1023[19]
  i1022.pixelsPerUnit = i1023[20]
  i1022.textureWidth = i1023[21]
  i1022.textureHeight = i1023[22]
  i1022.nativeSize = new pc.Vec2( i1023[23], i1023[24] )
  i1022.pivot = new pc.Vec2( i1023[25], i1023[26] )
  i1022.textureRectOffset = new pc.Vec2( i1023[27], i1023[28] )
  return i1022
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1024 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1025 = data
  i1024.name = i1025[0]
  return i1024
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i1026 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i1027 = data
  i1026.name = i1027[0]
  i1026.wrapMode = i1027[1]
  i1026.isLooping = !!i1027[2]
  i1026.length = i1027[3]
  var i1029 = i1027[4]
  var i1028 = []
  for(var i = 0; i < i1029.length; i += 1) {
    i1028.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i1029[i + 0]) );
  }
  i1026.curves = i1028
  var i1031 = i1027[5]
  var i1030 = []
  for(var i = 0; i < i1031.length; i += 1) {
    i1030.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i1031[i + 0]) );
  }
  i1026.events = i1030
  i1026.halfPrecision = !!i1027[6]
  i1026._frameRate = i1027[7]
  i1026.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i1027[8], i1026.localBounds)
  i1026.hasMuscleCurves = !!i1027[9]
  var i1033 = i1027[10]
  var i1032 = []
  for(var i = 0; i < i1033.length; i += 1) {
    i1032.push( i1033[i + 0] );
  }
  i1026.clipMuscleConstant = i1032
  i1026.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i1027[11], i1026.clipBindingConstant)
  return i1026
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i1036 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i1037 = data
  i1036.path = i1037[0]
  i1036.hash = i1037[1]
  i1036.componentType = i1037[2]
  i1036.property = i1037[3]
  i1036.keys = i1037[4]
  var i1039 = i1037[5]
  var i1038 = []
  for(var i = 0; i < i1039.length; i += 1) {
    i1038.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i1039[i + 0]) );
  }
  i1036.objectReferenceKeys = i1038
  return i1036
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i1042 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i1043 = data
  i1042.time = i1043[0]
  request.r(i1043[1], i1043[2], 0, i1042, 'value')
  return i1042
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i1046 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i1047 = data
  i1046.functionName = i1047[0]
  i1046.floatParameter = i1047[1]
  i1046.intParameter = i1047[2]
  i1046.stringParameter = i1047[3]
  request.r(i1047[4], i1047[5], 0, i1046, 'objectReferenceParameter')
  i1046.time = i1047[6]
  return i1046
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i1048 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i1049 = data
  i1048.center = new pc.Vec3( i1049[0], i1049[1], i1049[2] )
  i1048.extends = new pc.Vec3( i1049[3], i1049[4], i1049[5] )
  return i1048
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i1052 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i1053 = data
  var i1055 = i1053[0]
  var i1054 = []
  for(var i = 0; i < i1055.length; i += 1) {
    i1054.push( i1055[i + 0] );
  }
  i1052.genericBindings = i1054
  var i1057 = i1053[1]
  var i1056 = []
  for(var i = 0; i < i1057.length; i += 1) {
    i1056.push( i1057[i + 0] );
  }
  i1052.pptrCurveMapping = i1056
  return i1052
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1058 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1059 = data
  i1058.name = i1059[0]
  i1058.ascent = i1059[1]
  i1058.originalLineHeight = i1059[2]
  i1058.fontSize = i1059[3]
  var i1061 = i1059[4]
  var i1060 = []
  for(var i = 0; i < i1061.length; i += 1) {
    i1060.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1061[i + 0]) );
  }
  i1058.characterInfo = i1060
  request.r(i1059[5], i1059[6], 0, i1058, 'texture')
  i1058.originalFontSize = i1059[7]
  return i1058
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1064 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1065 = data
  i1064.index = i1065[0]
  i1064.advance = i1065[1]
  i1064.bearing = i1065[2]
  i1064.glyphWidth = i1065[3]
  i1064.glyphHeight = i1065[4]
  i1064.minX = i1065[5]
  i1064.maxX = i1065[6]
  i1064.minY = i1065[7]
  i1064.maxY = i1065[8]
  i1064.uvBottomLeftX = i1065[9]
  i1064.uvBottomLeftY = i1065[10]
  i1064.uvBottomRightX = i1065[11]
  i1064.uvBottomRightY = i1065[12]
  i1064.uvTopLeftX = i1065[13]
  i1064.uvTopLeftY = i1065[14]
  i1064.uvTopRightX = i1065[15]
  i1064.uvTopRightY = i1065[16]
  return i1064
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i1066 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i1067 = data
  i1066.name = i1067[0]
  var i1069 = i1067[1]
  var i1068 = []
  for(var i = 0; i < i1069.length; i += 1) {
    i1068.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i1069[i + 0]) );
  }
  i1066.layers = i1068
  var i1071 = i1067[2]
  var i1070 = []
  for(var i = 0; i < i1071.length; i += 1) {
    i1070.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i1071[i + 0]) );
  }
  i1066.parameters = i1070
  i1066.animationClips = i1067[3]
  i1066.avatarUnsupported = i1067[4]
  return i1066
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i1074 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i1075 = data
  i1074.name = i1075[0]
  i1074.defaultWeight = i1075[1]
  i1074.blendingMode = i1075[2]
  i1074.avatarMask = i1075[3]
  i1074.syncedLayerIndex = i1075[4]
  i1074.syncedLayerAffectsTiming = !!i1075[5]
  i1074.syncedLayers = i1075[6]
  i1074.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1075[7], i1074.stateMachine)
  return i1074
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i1076 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i1077 = data
  i1076.id = i1077[0]
  i1076.name = i1077[1]
  i1076.path = i1077[2]
  var i1079 = i1077[3]
  var i1078 = []
  for(var i = 0; i < i1079.length; i += 1) {
    i1078.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i1079[i + 0]) );
  }
  i1076.states = i1078
  var i1081 = i1077[4]
  var i1080 = []
  for(var i = 0; i < i1081.length; i += 1) {
    i1080.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1081[i + 0]) );
  }
  i1076.machines = i1080
  var i1083 = i1077[5]
  var i1082 = []
  for(var i = 0; i < i1083.length; i += 1) {
    i1082.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1083[i + 0]) );
  }
  i1076.entryStateTransitions = i1082
  var i1085 = i1077[6]
  var i1084 = []
  for(var i = 0; i < i1085.length; i += 1) {
    i1084.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1085[i + 0]) );
  }
  i1076.exitStateTransitions = i1084
  var i1087 = i1077[7]
  var i1086 = []
  for(var i = 0; i < i1087.length; i += 1) {
    i1086.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1087[i + 0]) );
  }
  i1076.anyStateTransitions = i1086
  i1076.defaultStateId = i1077[8]
  return i1076
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i1090 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i1091 = data
  i1090.id = i1091[0]
  i1090.name = i1091[1]
  i1090.cycleOffset = i1091[2]
  i1090.cycleOffsetParameter = i1091[3]
  i1090.cycleOffsetParameterActive = !!i1091[4]
  i1090.mirror = !!i1091[5]
  i1090.mirrorParameter = i1091[6]
  i1090.mirrorParameterActive = !!i1091[7]
  i1090.motionId = i1091[8]
  i1090.nameHash = i1091[9]
  i1090.fullPathHash = i1091[10]
  i1090.speed = i1091[11]
  i1090.speedParameter = i1091[12]
  i1090.speedParameterActive = !!i1091[13]
  i1090.tag = i1091[14]
  i1090.tagHash = i1091[15]
  i1090.writeDefaultValues = !!i1091[16]
  var i1093 = i1091[17]
  var i1092 = []
  for(var i = 0; i < i1093.length; i += 2) {
  request.r(i1093[i + 0], i1093[i + 1], 2, i1092, '')
  }
  i1090.behaviours = i1092
  var i1095 = i1091[18]
  var i1094 = []
  for(var i = 0; i < i1095.length; i += 1) {
    i1094.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1095[i + 0]) );
  }
  i1090.transitions = i1094
  return i1090
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1100 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1101 = data
  i1100.fullPath = i1101[0]
  i1100.canTransitionToSelf = !!i1101[1]
  i1100.duration = i1101[2]
  i1100.exitTime = i1101[3]
  i1100.hasExitTime = !!i1101[4]
  i1100.hasFixedDuration = !!i1101[5]
  i1100.interruptionSource = i1101[6]
  i1100.offset = i1101[7]
  i1100.orderedInterruption = !!i1101[8]
  i1100.destinationStateId = i1101[9]
  i1100.isExit = !!i1101[10]
  i1100.mute = !!i1101[11]
  i1100.solo = !!i1101[12]
  var i1103 = i1101[13]
  var i1102 = []
  for(var i = 0; i < i1103.length; i += 1) {
    i1102.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1103[i + 0]) );
  }
  i1100.conditions = i1102
  return i1100
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1108 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1109 = data
  i1108.destinationStateId = i1109[0]
  i1108.isExit = !!i1109[1]
  i1108.mute = !!i1109[2]
  i1108.solo = !!i1109[3]
  var i1111 = i1109[4]
  var i1110 = []
  for(var i = 0; i < i1111.length; i += 1) {
    i1110.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1111[i + 0]) );
  }
  i1108.conditions = i1110
  return i1108
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1114 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1115 = data
  i1114.defaultBool = !!i1115[0]
  i1114.defaultFloat = i1115[1]
  i1114.defaultInt = i1115[2]
  i1114.name = i1115[3]
  i1114.nameHash = i1115[4]
  i1114.type = i1115[5]
  return i1114
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1116 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1117 = data
  i1116.name = i1117[0]
  i1116.bytes64 = i1117[1]
  i1116.data = i1117[2]
  return i1116
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i1118 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i1119 = data
  i1118.normalStyle = i1119[0]
  i1118.normalSpacingOffset = i1119[1]
  i1118.boldStyle = i1119[2]
  i1118.boldSpacing = i1119[3]
  i1118.italicStyle = i1119[4]
  i1118.tabSize = i1119[5]
  request.r(i1119[6], i1119[7], 0, i1118, 'atlas')
  i1118.m_SourceFontFileGUID = i1119[8]
  i1118.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i1119[9], i1118.m_CreationSettings)
  request.r(i1119[10], i1119[11], 0, i1118, 'm_SourceFontFile')
  i1118.m_SourceFontFilePath = i1119[12]
  i1118.m_AtlasPopulationMode = i1119[13]
  i1118.InternalDynamicOS = !!i1119[14]
  var i1121 = i1119[15]
  var i1120 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i1121.length; i += 1) {
    i1120.add(request.d('UnityEngine.TextCore.Glyph', i1121[i + 0]));
  }
  i1118.m_GlyphTable = i1120
  var i1123 = i1119[16]
  var i1122 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i1123.length; i += 1) {
    i1122.add(request.d('TMPro.TMP_Character', i1123[i + 0]));
  }
  i1118.m_CharacterTable = i1122
  var i1125 = i1119[17]
  var i1124 = []
  for(var i = 0; i < i1125.length; i += 2) {
  request.r(i1125[i + 0], i1125[i + 1], 2, i1124, '')
  }
  i1118.m_AtlasTextures = i1124
  i1118.m_AtlasTextureIndex = i1119[18]
  i1118.m_IsMultiAtlasTexturesEnabled = !!i1119[19]
  i1118.m_GetFontFeatures = !!i1119[20]
  i1118.m_ClearDynamicDataOnBuild = !!i1119[21]
  i1118.m_AtlasWidth = i1119[22]
  i1118.m_AtlasHeight = i1119[23]
  i1118.m_AtlasPadding = i1119[24]
  i1118.m_AtlasRenderMode = i1119[25]
  var i1127 = i1119[26]
  var i1126 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1127.length; i += 1) {
    i1126.add(request.d('UnityEngine.TextCore.GlyphRect', i1127[i + 0]));
  }
  i1118.m_UsedGlyphRects = i1126
  var i1129 = i1119[27]
  var i1128 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1129.length; i += 1) {
    i1128.add(request.d('UnityEngine.TextCore.GlyphRect', i1129[i + 0]));
  }
  i1118.m_FreeGlyphRects = i1128
  i1118.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i1119[28], i1118.m_FontFeatureTable)
  i1118.m_ShouldReimportFontFeatures = !!i1119[29]
  var i1131 = i1119[30]
  var i1130 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1131.length; i += 2) {
  request.r(i1131[i + 0], i1131[i + 1], 1, i1130, '')
  }
  i1118.m_FallbackFontAssetTable = i1130
  var i1133 = i1119[31]
  var i1132 = []
  for(var i = 0; i < i1133.length; i += 1) {
    i1132.push( request.d('TMPro.TMP_FontWeightPair', i1133[i + 0]) );
  }
  i1118.m_FontWeightTable = i1132
  var i1135 = i1119[32]
  var i1134 = []
  for(var i = 0; i < i1135.length; i += 1) {
    i1134.push( request.d('TMPro.TMP_FontWeightPair', i1135[i + 0]) );
  }
  i1118.fontWeights = i1134
  i1118.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i1119[33], i1118.m_fontInfo)
  var i1137 = i1119[34]
  var i1136 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i1137.length; i += 1) {
    i1136.add(request.d('TMPro.TMP_Glyph', i1137[i + 0]));
  }
  i1118.m_glyphInfoList = i1136
  i1118.m_KerningTable = request.d('TMPro.KerningTable', i1119[35], i1118.m_KerningTable)
  var i1139 = i1119[36]
  var i1138 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1139.length; i += 2) {
  request.r(i1139[i + 0], i1139[i + 1], 1, i1138, '')
  }
  i1118.fallbackFontAssets = i1138
  i1118.m_Version = i1119[37]
  i1118.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1119[38], i1118.m_FaceInfo)
  request.r(i1119[39], i1119[40], 0, i1118, 'm_Material')
  return i1118
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i1140 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i1141 = data
  i1140.sourceFontFileName = i1141[0]
  i1140.sourceFontFileGUID = i1141[1]
  i1140.faceIndex = i1141[2]
  i1140.pointSizeSamplingMode = i1141[3]
  i1140.pointSize = i1141[4]
  i1140.padding = i1141[5]
  i1140.paddingMode = i1141[6]
  i1140.packingMode = i1141[7]
  i1140.atlasWidth = i1141[8]
  i1140.atlasHeight = i1141[9]
  i1140.characterSetSelectionMode = i1141[10]
  i1140.characterSequence = i1141[11]
  i1140.referencedFontAssetGUID = i1141[12]
  i1140.referencedTextAssetGUID = i1141[13]
  i1140.fontStyle = i1141[14]
  i1140.fontStyleModifier = i1141[15]
  i1140.renderMode = i1141[16]
  i1140.includeFontFeatures = !!i1141[17]
  return i1140
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i1144 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i1145 = data
  i1144.m_Index = i1145[0]
  i1144.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1145[1], i1144.m_Metrics)
  i1144.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1145[2], i1144.m_GlyphRect)
  i1144.m_Scale = i1145[3]
  i1144.m_AtlasIndex = i1145[4]
  i1144.m_ClassDefinitionType = i1145[5]
  return i1144
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1146 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1147 = data
  i1146.m_Width = i1147[0]
  i1146.m_Height = i1147[1]
  i1146.m_HorizontalBearingX = i1147[2]
  i1146.m_HorizontalBearingY = i1147[3]
  i1146.m_HorizontalAdvance = i1147[4]
  return i1146
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1148 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1149 = data
  i1148.m_X = i1149[0]
  i1148.m_Y = i1149[1]
  i1148.m_Width = i1149[2]
  i1148.m_Height = i1149[3]
  return i1148
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i1152 = root || request.c( 'TMPro.TMP_Character' )
  var i1153 = data
  i1152.m_ElementType = i1153[0]
  i1152.m_Unicode = i1153[1]
  i1152.m_GlyphIndex = i1153[2]
  i1152.m_Scale = i1153[3]
  return i1152
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i1158 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i1159 = data
  var i1161 = i1159[0]
  var i1160 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i1161.length; i += 1) {
    i1160.add(request.d('TMPro.MultipleSubstitutionRecord', i1161[i + 0]));
  }
  i1158.m_MultipleSubstitutionRecords = i1160
  var i1163 = i1159[1]
  var i1162 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i1163.length; i += 1) {
    i1162.add(request.d('TMPro.LigatureSubstitutionRecord', i1163[i + 0]));
  }
  i1158.m_LigatureSubstitutionRecords = i1162
  var i1165 = i1159[2]
  var i1164 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i1165.length; i += 1) {
    i1164.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i1165[i + 0]));
  }
  i1158.m_GlyphPairAdjustmentRecords = i1164
  var i1167 = i1159[3]
  var i1166 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i1167.length; i += 1) {
    i1166.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i1167[i + 0]));
  }
  i1158.m_MarkToBaseAdjustmentRecords = i1166
  var i1169 = i1159[4]
  var i1168 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i1169.length; i += 1) {
    i1168.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i1169[i + 0]));
  }
  i1158.m_MarkToMarkAdjustmentRecords = i1168
  return i1158
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i1172 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i1173 = data
  i1172.m_TargetGlyphID = i1173[0]
  i1172.m_SubstituteGlyphIDs = i1173[1]
  return i1172
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i1176 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i1177 = data
  i1176.m_ComponentGlyphIDs = i1177[0]
  i1176.m_LigatureGlyphID = i1177[1]
  return i1176
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i1180 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i1181 = data
  i1180.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i1181[0], i1180.m_FirstAdjustmentRecord)
  i1180.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i1181[1], i1180.m_SecondAdjustmentRecord)
  i1180.m_FeatureLookupFlags = i1181[2]
  return i1180
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1182 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i1183 = data
  i1182.m_GlyphIndex = i1183[0]
  i1182.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i1183[1], i1182.m_GlyphValueRecord)
  return i1182
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i1184 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i1185 = data
  i1184.m_XPlacement = i1185[0]
  i1184.m_YPlacement = i1185[1]
  i1184.m_XAdvance = i1185[2]
  i1184.m_YAdvance = i1185[3]
  return i1184
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i1188 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i1189 = data
  i1188.m_BaseGlyphID = i1189[0]
  i1188.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i1189[1], i1188.m_BaseGlyphAnchorPoint)
  i1188.m_MarkGlyphID = i1189[2]
  i1188.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i1189[3], i1188.m_MarkPositionAdjustment)
  return i1188
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i1192 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i1193 = data
  i1192.m_BaseMarkGlyphID = i1193[0]
  i1192.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i1193[1], i1192.m_BaseMarkGlyphAnchorPoint)
  i1192.m_CombiningMarkGlyphID = i1193[2]
  i1192.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i1193[3], i1192.m_CombiningMarkPositionAdjustment)
  return i1192
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i1198 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i1199 = data
  request.r(i1199[0], i1199[1], 0, i1198, 'regularTypeface')
  request.r(i1199[2], i1199[3], 0, i1198, 'italicTypeface')
  return i1198
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i1200 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i1201 = data
  i1200.Name = i1201[0]
  i1200.PointSize = i1201[1]
  i1200.Scale = i1201[2]
  i1200.CharacterCount = i1201[3]
  i1200.LineHeight = i1201[4]
  i1200.Baseline = i1201[5]
  i1200.Ascender = i1201[6]
  i1200.CapHeight = i1201[7]
  i1200.Descender = i1201[8]
  i1200.CenterLine = i1201[9]
  i1200.SuperscriptOffset = i1201[10]
  i1200.SubscriptOffset = i1201[11]
  i1200.SubSize = i1201[12]
  i1200.Underline = i1201[13]
  i1200.UnderlineThickness = i1201[14]
  i1200.strikethrough = i1201[15]
  i1200.strikethroughThickness = i1201[16]
  i1200.TabWidth = i1201[17]
  i1200.Padding = i1201[18]
  i1200.AtlasWidth = i1201[19]
  i1200.AtlasHeight = i1201[20]
  return i1200
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i1204 = root || request.c( 'TMPro.TMP_Glyph' )
  var i1205 = data
  i1204.id = i1205[0]
  i1204.x = i1205[1]
  i1204.y = i1205[2]
  i1204.width = i1205[3]
  i1204.height = i1205[4]
  i1204.xOffset = i1205[5]
  i1204.yOffset = i1205[6]
  i1204.xAdvance = i1205[7]
  i1204.scale = i1205[8]
  return i1204
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i1206 = root || request.c( 'TMPro.KerningTable' )
  var i1207 = data
  var i1209 = i1207[0]
  var i1208 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i1209.length; i += 1) {
    i1208.add(request.d('TMPro.KerningPair', i1209[i + 0]));
  }
  i1206.kerningPairs = i1208
  return i1206
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i1212 = root || request.c( 'TMPro.KerningPair' )
  var i1213 = data
  i1212.xOffset = i1213[0]
  i1212.m_FirstGlyph = i1213[1]
  i1212.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1213[2], i1212.m_FirstGlyphAdjustments)
  i1212.m_SecondGlyph = i1213[3]
  i1212.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1213[4], i1212.m_SecondGlyphAdjustments)
  i1212.m_IgnoreSpacingAdjustments = !!i1213[5]
  return i1212
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1214 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1215 = data
  i1214.m_FaceIndex = i1215[0]
  i1214.m_FamilyName = i1215[1]
  i1214.m_StyleName = i1215[2]
  i1214.m_PointSize = i1215[3]
  i1214.m_Scale = i1215[4]
  i1214.m_UnitsPerEM = i1215[5]
  i1214.m_LineHeight = i1215[6]
  i1214.m_AscentLine = i1215[7]
  i1214.m_CapLine = i1215[8]
  i1214.m_MeanLine = i1215[9]
  i1214.m_Baseline = i1215[10]
  i1214.m_DescentLine = i1215[11]
  i1214.m_SuperscriptOffset = i1215[12]
  i1214.m_SuperscriptSize = i1215[13]
  i1214.m_SubscriptOffset = i1215[14]
  i1214.m_SubscriptSize = i1215[15]
  i1214.m_UnderlineOffset = i1215[16]
  i1214.m_UnderlineThickness = i1215[17]
  i1214.m_StrikethroughOffset = i1215[18]
  i1214.m_StrikethroughThickness = i1215[19]
  i1214.m_TabWidth = i1215[20]
  return i1214
}

Deserializers["PlayerCardData"] = function (request, data, root) {
  var i1216 = root || request.c( 'PlayerCardData' )
  var i1217 = data
  i1216.playerName = i1217[0]
  request.r(i1217[1], i1217[2], 0, i1216, 'playerSprite')
  return i1216
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1218 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1219 = data
  i1218.useSafeMode = !!i1219[0]
  i1218.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1219[1], i1218.safeModeOptions)
  i1218.timeScale = i1219[2]
  i1218.unscaledTimeScale = i1219[3]
  i1218.useSmoothDeltaTime = !!i1219[4]
  i1218.maxSmoothUnscaledTime = i1219[5]
  i1218.rewindCallbackMode = i1219[6]
  i1218.showUnityEditorReport = !!i1219[7]
  i1218.logBehaviour = i1219[8]
  i1218.drawGizmos = !!i1219[9]
  i1218.defaultRecyclable = !!i1219[10]
  i1218.defaultAutoPlay = i1219[11]
  i1218.defaultUpdateType = i1219[12]
  i1218.defaultTimeScaleIndependent = !!i1219[13]
  i1218.defaultEaseType = i1219[14]
  i1218.defaultEaseOvershootOrAmplitude = i1219[15]
  i1218.defaultEasePeriod = i1219[16]
  i1218.defaultAutoKill = !!i1219[17]
  i1218.defaultLoopType = i1219[18]
  i1218.debugMode = !!i1219[19]
  i1218.debugStoreTargetId = !!i1219[20]
  i1218.showPreviewPanel = !!i1219[21]
  i1218.storeSettingsLocation = i1219[22]
  i1218.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1219[23], i1218.modules)
  i1218.createASMDEF = !!i1219[24]
  i1218.showPlayingTweens = !!i1219[25]
  i1218.showPausedTweens = !!i1219[26]
  return i1218
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1220 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1221 = data
  i1220.logBehaviour = i1221[0]
  i1220.nestedTweenFailureBehaviour = i1221[1]
  return i1220
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1222 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1223 = data
  i1222.showPanel = !!i1223[0]
  i1222.audioEnabled = !!i1223[1]
  i1222.physicsEnabled = !!i1223[2]
  i1222.physics2DEnabled = !!i1223[3]
  i1222.spriteEnabled = !!i1223[4]
  i1222.uiEnabled = !!i1223[5]
  i1222.uiToolkitEnabled = !!i1223[6]
  i1222.textMeshProEnabled = !!i1223[7]
  i1222.tk2DEnabled = !!i1223[8]
  i1222.deAudioEnabled = !!i1223[9]
  i1222.deUnityExtendedEnabled = !!i1223[10]
  i1222.epoOutlineEnabled = !!i1223[11]
  return i1222
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1224 = root || request.c( 'TMPro.TMP_Settings' )
  var i1225 = data
  i1224.assetVersion = i1225[0]
  i1224.m_TextWrappingMode = i1225[1]
  i1224.m_enableKerning = !!i1225[2]
  var i1227 = i1225[3]
  var i1226 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i1227.length; i += 1) {
    i1226.add(i1227[i + 0]);
  }
  i1224.m_ActiveFontFeatures = i1226
  i1224.m_enableExtraPadding = !!i1225[4]
  i1224.m_enableTintAllSprites = !!i1225[5]
  i1224.m_enableParseEscapeCharacters = !!i1225[6]
  i1224.m_EnableRaycastTarget = !!i1225[7]
  i1224.m_GetFontFeaturesAtRuntime = !!i1225[8]
  i1224.m_missingGlyphCharacter = i1225[9]
  i1224.m_ClearDynamicDataOnBuild = !!i1225[10]
  i1224.m_warningsDisabled = !!i1225[11]
  request.r(i1225[12], i1225[13], 0, i1224, 'm_defaultFontAsset')
  i1224.m_defaultFontAssetPath = i1225[14]
  i1224.m_defaultFontSize = i1225[15]
  i1224.m_defaultAutoSizeMinRatio = i1225[16]
  i1224.m_defaultAutoSizeMaxRatio = i1225[17]
  i1224.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1225[18], i1225[19] )
  i1224.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1225[20], i1225[21] )
  i1224.m_autoSizeTextContainer = !!i1225[22]
  i1224.m_IsTextObjectScaleStatic = !!i1225[23]
  var i1229 = i1225[24]
  var i1228 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1229.length; i += 2) {
  request.r(i1229[i + 0], i1229[i + 1], 1, i1228, '')
  }
  i1224.m_fallbackFontAssets = i1228
  i1224.m_matchMaterialPreset = !!i1225[25]
  i1224.m_HideSubTextObjects = !!i1225[26]
  request.r(i1225[27], i1225[28], 0, i1224, 'm_defaultSpriteAsset')
  i1224.m_defaultSpriteAssetPath = i1225[29]
  i1224.m_enableEmojiSupport = !!i1225[30]
  i1224.m_MissingCharacterSpriteUnicode = i1225[31]
  var i1231 = i1225[32]
  var i1230 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i1231.length; i += 2) {
  request.r(i1231[i + 0], i1231[i + 1], 1, i1230, '')
  }
  i1224.m_EmojiFallbackTextAssets = i1230
  i1224.m_defaultColorGradientPresetsPath = i1225[33]
  request.r(i1225[34], i1225[35], 0, i1224, 'm_defaultStyleSheet')
  i1224.m_StyleSheetsResourcePath = i1225[36]
  request.r(i1225[37], i1225[38], 0, i1224, 'm_leadingCharacters')
  request.r(i1225[39], i1225[40], 0, i1224, 'm_followingCharacters')
  i1224.m_UseModernHangulLineBreakingRules = !!i1225[41]
  return i1224
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1234 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1235 = data
  request.r(i1235[0], i1235[1], 0, i1234, 'spriteSheet')
  var i1237 = i1235[2]
  var i1236 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1237.length; i += 1) {
    i1236.add(request.d('TMPro.TMP_Sprite', i1237[i + 0]));
  }
  i1234.spriteInfoList = i1236
  var i1239 = i1235[3]
  var i1238 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1239.length; i += 2) {
  request.r(i1239[i + 0], i1239[i + 1], 1, i1238, '')
  }
  i1234.fallbackSpriteAssets = i1238
  var i1241 = i1235[4]
  var i1240 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1241.length; i += 1) {
    i1240.add(request.d('TMPro.TMP_SpriteCharacter', i1241[i + 0]));
  }
  i1234.m_SpriteCharacterTable = i1240
  var i1243 = i1235[5]
  var i1242 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1243.length; i += 1) {
    i1242.add(request.d('TMPro.TMP_SpriteGlyph', i1243[i + 0]));
  }
  i1234.m_GlyphTable = i1242
  i1234.m_Version = i1235[6]
  i1234.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1235[7], i1234.m_FaceInfo)
  request.r(i1235[8], i1235[9], 0, i1234, 'm_Material')
  return i1234
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1246 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1247 = data
  i1246.name = i1247[0]
  i1246.hashCode = i1247[1]
  i1246.unicode = i1247[2]
  i1246.pivot = new pc.Vec2( i1247[3], i1247[4] )
  request.r(i1247[5], i1247[6], 0, i1246, 'sprite')
  i1246.id = i1247[7]
  i1246.x = i1247[8]
  i1246.y = i1247[9]
  i1246.width = i1247[10]
  i1246.height = i1247[11]
  i1246.xOffset = i1247[12]
  i1246.yOffset = i1247[13]
  i1246.xAdvance = i1247[14]
  i1246.scale = i1247[15]
  return i1246
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1252 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1253 = data
  i1252.m_Name = i1253[0]
  i1252.m_ElementType = i1253[1]
  i1252.m_Unicode = i1253[2]
  i1252.m_GlyphIndex = i1253[3]
  i1252.m_Scale = i1253[4]
  return i1252
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1256 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1257 = data
  request.r(i1257[0], i1257[1], 0, i1256, 'sprite')
  i1256.m_Index = i1257[2]
  i1256.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1257[3], i1256.m_Metrics)
  i1256.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1257[4], i1256.m_GlyphRect)
  i1256.m_Scale = i1257[5]
  i1256.m_AtlasIndex = i1257[6]
  i1256.m_ClassDefinitionType = i1257[7]
  return i1256
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1258 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1259 = data
  var i1261 = i1259[0]
  var i1260 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1261.length; i += 1) {
    i1260.add(request.d('TMPro.TMP_Style', i1261[i + 0]));
  }
  i1258.m_StyleList = i1260
  return i1258
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1264 = root || request.c( 'TMPro.TMP_Style' )
  var i1265 = data
  i1264.m_Name = i1265[0]
  i1264.m_HashCode = i1265[1]
  i1264.m_OpeningDefinition = i1265[2]
  i1264.m_ClosingDefinition = i1265[3]
  i1264.m_OpeningTagArray = i1265[4]
  i1264.m_ClosingTagArray = i1265[5]
  return i1264
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1266 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1267 = data
  var i1269 = i1267[0]
  var i1268 = []
  for(var i = 0; i < i1269.length; i += 1) {
    i1268.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1269[i + 0]) );
  }
  i1266.files = i1268
  i1266.componentToPrefabIds = i1267[1]
  return i1266
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1272 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1273 = data
  i1272.path = i1273[0]
  request.r(i1273[1], i1273[2], 0, i1272, 'unityObject')
  return i1272
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1274 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1275 = data
  var i1277 = i1275[0]
  var i1276 = []
  for(var i = 0; i < i1277.length; i += 1) {
    i1276.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1277[i + 0]) );
  }
  i1274.scriptsExecutionOrder = i1276
  var i1279 = i1275[1]
  var i1278 = []
  for(var i = 0; i < i1279.length; i += 1) {
    i1278.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1279[i + 0]) );
  }
  i1274.sortingLayers = i1278
  var i1281 = i1275[2]
  var i1280 = []
  for(var i = 0; i < i1281.length; i += 1) {
    i1280.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1281[i + 0]) );
  }
  i1274.cullingLayers = i1280
  i1274.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1275[3], i1274.timeSettings)
  i1274.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1275[4], i1274.physicsSettings)
  i1274.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1275[5], i1274.physics2DSettings)
  i1274.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1275[6], i1274.qualitySettings)
  i1274.enableRealtimeShadows = !!i1275[7]
  i1274.enableAutoInstancing = !!i1275[8]
  i1274.enableStaticBatching = !!i1275[9]
  i1274.enableDynamicBatching = !!i1275[10]
  i1274.lightmapEncodingQuality = i1275[11]
  i1274.desiredColorSpace = i1275[12]
  var i1283 = i1275[13]
  var i1282 = []
  for(var i = 0; i < i1283.length; i += 1) {
    i1282.push( i1283[i + 0] );
  }
  i1274.allTags = i1282
  return i1274
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1286 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1287 = data
  i1286.name = i1287[0]
  i1286.value = i1287[1]
  return i1286
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1290 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1291 = data
  i1290.id = i1291[0]
  i1290.name = i1291[1]
  i1290.value = i1291[2]
  return i1290
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1294 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1295 = data
  i1294.id = i1295[0]
  i1294.name = i1295[1]
  return i1294
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1296 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1297 = data
  i1296.fixedDeltaTime = i1297[0]
  i1296.maximumDeltaTime = i1297[1]
  i1296.timeScale = i1297[2]
  i1296.maximumParticleTimestep = i1297[3]
  return i1296
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1298 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1299 = data
  i1298.gravity = new pc.Vec3( i1299[0], i1299[1], i1299[2] )
  i1298.defaultSolverIterations = i1299[3]
  i1298.bounceThreshold = i1299[4]
  i1298.autoSyncTransforms = !!i1299[5]
  i1298.autoSimulation = !!i1299[6]
  var i1301 = i1299[7]
  var i1300 = []
  for(var i = 0; i < i1301.length; i += 1) {
    i1300.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1301[i + 0]) );
  }
  i1298.collisionMatrix = i1300
  return i1298
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1304 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1305 = data
  i1304.enabled = !!i1305[0]
  i1304.layerId = i1305[1]
  i1304.otherLayerId = i1305[2]
  return i1304
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1306 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1307 = data
  request.r(i1307[0], i1307[1], 0, i1306, 'material')
  i1306.gravity = new pc.Vec2( i1307[2], i1307[3] )
  i1306.positionIterations = i1307[4]
  i1306.velocityIterations = i1307[5]
  i1306.velocityThreshold = i1307[6]
  i1306.maxLinearCorrection = i1307[7]
  i1306.maxAngularCorrection = i1307[8]
  i1306.maxTranslationSpeed = i1307[9]
  i1306.maxRotationSpeed = i1307[10]
  i1306.baumgarteScale = i1307[11]
  i1306.baumgarteTOIScale = i1307[12]
  i1306.timeToSleep = i1307[13]
  i1306.linearSleepTolerance = i1307[14]
  i1306.angularSleepTolerance = i1307[15]
  i1306.defaultContactOffset = i1307[16]
  i1306.autoSimulation = !!i1307[17]
  i1306.queriesHitTriggers = !!i1307[18]
  i1306.queriesStartInColliders = !!i1307[19]
  i1306.callbacksOnDisable = !!i1307[20]
  i1306.reuseCollisionCallbacks = !!i1307[21]
  i1306.autoSyncTransforms = !!i1307[22]
  var i1309 = i1307[23]
  var i1308 = []
  for(var i = 0; i < i1309.length; i += 1) {
    i1308.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1309[i + 0]) );
  }
  i1306.collisionMatrix = i1308
  return i1306
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1312 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1313 = data
  i1312.enabled = !!i1313[0]
  i1312.layerId = i1313[1]
  i1312.otherLayerId = i1313[2]
  return i1312
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1314 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1315 = data
  var i1317 = i1315[0]
  var i1316 = []
  for(var i = 0; i < i1317.length; i += 1) {
    i1316.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1317[i + 0]) );
  }
  i1314.qualityLevels = i1316
  var i1319 = i1315[1]
  var i1318 = []
  for(var i = 0; i < i1319.length; i += 1) {
    i1318.push( i1319[i + 0] );
  }
  i1314.names = i1318
  i1314.shadows = i1315[2]
  i1314.anisotropicFiltering = i1315[3]
  i1314.antiAliasing = i1315[4]
  i1314.lodBias = i1315[5]
  i1314.shadowCascades = i1315[6]
  i1314.shadowDistance = i1315[7]
  i1314.shadowmaskMode = i1315[8]
  i1314.shadowProjection = i1315[9]
  i1314.shadowResolution = i1315[10]
  i1314.softParticles = !!i1315[11]
  i1314.softVegetation = !!i1315[12]
  i1314.activeColorSpace = i1315[13]
  i1314.desiredColorSpace = i1315[14]
  i1314.masterTextureLimit = i1315[15]
  i1314.maxQueuedFrames = i1315[16]
  i1314.particleRaycastBudget = i1315[17]
  i1314.pixelLightCount = i1315[18]
  i1314.realtimeReflectionProbes = !!i1315[19]
  i1314.shadowCascade2Split = i1315[20]
  i1314.shadowCascade4Split = new pc.Vec3( i1315[21], i1315[22], i1315[23] )
  i1314.streamingMipmapsActive = !!i1315[24]
  i1314.vSyncCount = i1315[25]
  i1314.asyncUploadBufferSize = i1315[26]
  i1314.asyncUploadTimeSlice = i1315[27]
  i1314.billboardsFaceCameraPosition = !!i1315[28]
  i1314.shadowNearPlaneOffset = i1315[29]
  i1314.streamingMipmapsMemoryBudget = i1315[30]
  i1314.maximumLODLevel = i1315[31]
  i1314.streamingMipmapsAddAllCameras = !!i1315[32]
  i1314.streamingMipmapsMaxLevelReduction = i1315[33]
  i1314.streamingMipmapsRenderersPerFrame = i1315[34]
  i1314.resolutionScalingFixedDPIFactor = i1315[35]
  i1314.streamingMipmapsMaxFileIORequests = i1315[36]
  i1314.currentQualityLevel = i1315[37]
  return i1314
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1324 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1325 = data
  i1324.weight = i1325[0]
  i1324.vertices = i1325[1]
  i1324.normals = i1325[2]
  i1324.tangents = i1325[3]
  return i1324
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1328 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1329 = data
  i1328.mode = i1329[0]
  i1328.parameter = i1329[1]
  i1328.threshold = i1329[2]
  return i1328
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i1330 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i1331 = data
  i1330.m_XCoordinate = i1331[0]
  i1330.m_YCoordinate = i1331[1]
  return i1330
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i1332 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i1333 = data
  i1332.m_XPositionAdjustment = i1333[0]
  i1332.m_YPositionAdjustment = i1333[1]
  return i1332
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1334 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1335 = data
  i1334.xPlacement = i1335[0]
  i1334.yPlacement = i1335[1]
  i1334.xAdvance = i1335[2]
  i1334.yAdvance = i1335[3]
  return i1334
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D":{"usedByComposite":0,"autoTiling":1,"points":2,"enabled":3,"isTrigger":4,"usedByEffector":5,"density":6,"offset":7,"material":9},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider2D":{"size":0,"direction":2,"enabled":3,"isTrigger":4,"usedByEffector":5,"density":6,"offset":7,"material":9},"Luna.Unity.DTO.UnityEngine.Components.SpriteMask":{"frontSortingLayerID":0,"frontSortingOrder":1,"backSortingLayerID":2,"backSortingOrder":3,"alphaCutoff":4,"sprite":5,"tileMode":7,"isCustomRangeActive":8,"spriteSortPoint":9,"enabled":10,"sharedMaterial":11,"sharedMaterials":13,"receiveShadows":14,"shadowCastingMode":15,"sortingLayerID":16,"sortingOrder":17,"lightmapIndex":18,"lightmapSceneIndex":19,"lightmapScaleOffset":20,"lightProbeUsage":24,"reflectionProbeUsage":25},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.PhysicsMaterial2D":{"name":0,"bounciness":1,"friction":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2}}

Deserializers.requiredComponents = {"54":[55],"56":[55],"57":[55],"58":[55],"59":[55],"60":[55],"61":[62],"63":[2],"64":[65],"66":[65],"67":[65],"68":[65],"69":[65],"70":[65],"71":[38],"72":[38],"73":[38],"74":[38],"75":[38],"76":[38],"77":[38],"78":[38],"79":[38],"80":[38],"81":[38],"82":[38],"83":[38],"84":[2],"85":[18],"86":[87],"88":[87],"28":[17],"7":[2],"39":[38],"42":[37],"89":[12],"90":[2],"91":[92],"93":[46],"94":[28],"95":[17],"20":[18,17],"96":[17,31],"97":[17],"98":[31,17],"99":[18],"100":[31,17],"101":[17],"102":[103],"104":[103],"105":[103],"106":[17],"107":[17],"30":[28],"32":[31,17],"108":[17],"29":[28],"109":[17],"110":[17],"111":[17],"112":[17],"113":[17],"114":[17],"115":[17],"116":[17],"117":[17],"118":[31,17],"119":[17],"120":[17],"121":[17],"122":[17],"123":[31,17],"124":[17],"125":[46],"126":[46],"47":[46],"127":[46],"128":[2],"129":[2]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.MonoBehaviour","CameraFollow2D","UnityEngine.Transform","AutoCameraFit","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Mesh","UnityEngine.Material","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","MoveBetweenPoints","UnityEngine.RectTransform","UnityEngine.MeshRenderer","UnityEngine.EventSystems.UIBehaviour","TMPro.TextMeshPro","TMPro.TMP_FontAsset","UnityEngine.MeshFilter","PlayerCardUIManager","UnityEngine.GameObject","Ply_SoundManager","UnityEngine.AudioSource","UnityEngine.AudioClip","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.UI.Button","ScreenHeightPositionAnchor","UnityEngine.PolygonCollider2D","UnityEngine.PhysicsMaterial2D","UnityEngine.BoxCollider2D","UnityEngine.Rigidbody2D","BatStrikeController","CupCollision","UnityEngine.CapsuleCollider2D","SlotTrigger","PlayerCardData","UnityEngine.SpriteMask","HideOnFirstClick","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.Font","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.InputSystem.UI.InputSystemUIInputModule","UnityEngine.InputSystem.UI.TrackedDeviceRaycaster","TMPro.TextContainer","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.38f1";

Deserializers.productName = "PLY_MiniSoccer";

Deserializers.lunaInitializationTime = "07/15/2026 03:53:54";

Deserializers.lunaDaysRunning = "22.9";

Deserializers.lunaVersion = "7.1.0";

Deserializers.lunaSHA = "cf93782349542fe0b84ad13951a26809f8419628";

Deserializers.creativeName = "PLY_V18";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1742";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4550";

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

Deserializers.buildID = "30a5eb53-7f71-4741-9cd5-cc5b914ad9eb";

Deserializers.runtimeInitializeOnLoadInfos = [[["Unity","Services","Core","Internal","UnityServicesInitializer","EnableServicesInitializationAsync"],["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["DG","Tweening","DOTween","RuntimeOnLoad"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["Unity","Services","Core","Registration","CorePackageInitializer","InitializeOnLoad"],["Unity","Services","Core","Internal","TaskAsyncOperation","SetScheduler"],["Unity","Services","Core","Environments","Client","Scheduler","EngineStateHelper","Init"],["Unity","Services","Core","Environments","Client","Scheduler","ThreadHelper","Init"],["Ua2CoreInitializeCallback","Register"],["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["Unity","AI","Navigation","NavMeshLink","ClearTrackedList"],["Unity","AI","Navigation","NavMeshSurface","ClearNavMeshSurfaces"],["Unity","AI","Navigation","NavMeshModifierVolume","ClearNavMeshModifiers"],["Unity","AI","Navigation","NavMeshModifier","ClearNavMeshModifiers"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["Unity","Services","Core","Internal","UnityServicesInitializer","CreateStaticInstance"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[["Unity","Services","Core","Environments","Client","Http","JsonHelpers","RegisterTypesForAOT"]],[["Unity","Services","Core","UnityThreadUtils","CaptureUnityThreadInfo"],["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

