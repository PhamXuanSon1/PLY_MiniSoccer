var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i636 = root || request.c( 'UnityEngine.JointSpring' )
  var i637 = data
  i636.spring = i637[0]
  i636.damper = i637[1]
  i636.targetPosition = i637[2]
  return i636
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i638 = root || request.c( 'UnityEngine.JointMotor' )
  var i639 = data
  i638.m_TargetVelocity = i639[0]
  i638.m_Force = i639[1]
  i638.m_FreeSpin = i639[2]
  return i638
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i640 = root || request.c( 'UnityEngine.JointLimits' )
  var i641 = data
  i640.m_Min = i641[0]
  i640.m_Max = i641[1]
  i640.m_Bounciness = i641[2]
  i640.m_BounceMinVelocity = i641[3]
  i640.m_ContactDistance = i641[4]
  i640.minBounce = i641[5]
  i640.maxBounce = i641[6]
  return i640
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i642 = root || request.c( 'UnityEngine.JointDrive' )
  var i643 = data
  i642.m_PositionSpring = i643[0]
  i642.m_PositionDamper = i643[1]
  i642.m_MaximumForce = i643[2]
  i642.m_UseAcceleration = i643[3]
  return i642
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i644 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i645 = data
  i644.m_Spring = i645[0]
  i644.m_Damper = i645[1]
  return i644
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i646 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i647 = data
  i646.m_Limit = i647[0]
  i646.m_Bounciness = i647[1]
  i646.m_ContactDistance = i647[2]
  return i646
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i648 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i649 = data
  i648.m_ExtremumSlip = i649[0]
  i648.m_ExtremumValue = i649[1]
  i648.m_AsymptoteSlip = i649[2]
  i648.m_AsymptoteValue = i649[3]
  i648.m_Stiffness = i649[4]
  return i648
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i650 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i651 = data
  i650.m_LowerAngle = i651[0]
  i650.m_UpperAngle = i651[1]
  return i650
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i652 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i653 = data
  i652.m_MotorSpeed = i653[0]
  i652.m_MaximumMotorTorque = i653[1]
  return i652
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i654 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i655 = data
  i654.m_DampingRatio = i655[0]
  i654.m_Frequency = i655[1]
  i654.m_Angle = i655[2]
  return i654
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i656 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i657 = data
  i656.m_LowerTranslation = i657[0]
  i656.m_UpperTranslation = i657[1]
  return i656
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i658 = root || new pc.UnityMaterial()
  var i659 = data
  i658.name = i659[0]
  request.r(i659[1], i659[2], 0, i658, 'shader')
  i658.renderQueue = i659[3]
  i658.enableInstancing = !!i659[4]
  var i661 = i659[5]
  var i660 = []
  for(var i = 0; i < i661.length; i += 1) {
    i660.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i661[i + 0]) );
  }
  i658.floatParameters = i660
  var i663 = i659[6]
  var i662 = []
  for(var i = 0; i < i663.length; i += 1) {
    i662.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i663[i + 0]) );
  }
  i658.colorParameters = i662
  var i665 = i659[7]
  var i664 = []
  for(var i = 0; i < i665.length; i += 1) {
    i664.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i665[i + 0]) );
  }
  i658.vectorParameters = i664
  var i667 = i659[8]
  var i666 = []
  for(var i = 0; i < i667.length; i += 1) {
    i666.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i667[i + 0]) );
  }
  i658.textureParameters = i666
  var i669 = i659[9]
  var i668 = []
  for(var i = 0; i < i669.length; i += 1) {
    i668.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i669[i + 0]) );
  }
  i658.materialFlags = i668
  return i658
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i672 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i673 = data
  i672.name = i673[0]
  i672.value = i673[1]
  return i672
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i676 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i677 = data
  i676.name = i677[0]
  i676.value = new pc.Color(i677[1], i677[2], i677[3], i677[4])
  return i676
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i680 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i681 = data
  i680.name = i681[0]
  i680.value = new pc.Vec4( i681[1], i681[2], i681[3], i681[4] )
  return i680
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i684 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i685 = data
  i684.name = i685[0]
  request.r(i685[1], i685[2], 0, i684, 'value')
  return i684
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i688 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i689 = data
  i688.name = i689[0]
  i688.enabled = !!i689[1]
  return i688
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i690 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i691 = data
  i690.name = i691[0]
  i690.width = i691[1]
  i690.height = i691[2]
  i690.mipmapCount = i691[3]
  i690.anisoLevel = i691[4]
  i690.filterMode = i691[5]
  i690.hdr = !!i691[6]
  i690.format = i691[7]
  i690.wrapMode = i691[8]
  i690.alphaIsTransparency = !!i691[9]
  i690.alphaSource = i691[10]
  i690.graphicsFormat = i691[11]
  i690.sRGBTexture = !!i691[12]
  i690.desiredColorSpace = i691[13]
  i690.wrapU = i691[14]
  i690.wrapV = i691[15]
  return i690
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i692 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i693 = data
  i692.name = i693[0]
  i692.halfPrecision = !!i693[1]
  i692.useSimplification = !!i693[2]
  i692.useUInt32IndexFormat = !!i693[3]
  i692.vertexCount = i693[4]
  i692.aabb = i693[5]
  var i695 = i693[6]
  var i694 = []
  for(var i = 0; i < i695.length; i += 1) {
    i694.push( !!i695[i + 0] );
  }
  i692.streams = i694
  i692.vertices = i693[7]
  var i697 = i693[8]
  var i696 = []
  for(var i = 0; i < i697.length; i += 1) {
    i696.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i697[i + 0]) );
  }
  i692.subMeshes = i696
  var i699 = i693[9]
  var i698 = []
  for(var i = 0; i < i699.length; i += 16) {
    i698.push( new pc.Mat4().setData(i699[i + 0], i699[i + 1], i699[i + 2], i699[i + 3],  i699[i + 4], i699[i + 5], i699[i + 6], i699[i + 7],  i699[i + 8], i699[i + 9], i699[i + 10], i699[i + 11],  i699[i + 12], i699[i + 13], i699[i + 14], i699[i + 15]) );
  }
  i692.bindposes = i698
  var i701 = i693[10]
  var i700 = []
  for(var i = 0; i < i701.length; i += 1) {
    i700.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i701[i + 0]) );
  }
  i692.blendShapes = i700
  return i692
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i706 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i707 = data
  i706.triangles = i707[0]
  return i706
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i712 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i713 = data
  i712.name = i713[0]
  var i715 = i713[1]
  var i714 = []
  for(var i = 0; i < i715.length; i += 1) {
    i714.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i715[i + 0]) );
  }
  i712.frames = i714
  return i712
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i716 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i717 = data
  i716.name = i717[0]
  i716.index = i717[1]
  i716.startup = !!i717[2]
  return i716
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i718 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i719 = data
  i718.aspect = i719[0]
  i718.orthographic = !!i719[1]
  i718.orthographicSize = i719[2]
  i718.backgroundColor = new pc.Color(i719[3], i719[4], i719[5], i719[6])
  i718.nearClipPlane = i719[7]
  i718.farClipPlane = i719[8]
  i718.fieldOfView = i719[9]
  i718.depth = i719[10]
  i718.clearFlags = i719[11]
  i718.cullingMask = i719[12]
  i718.rect = i719[13]
  request.r(i719[14], i719[15], 0, i718, 'targetTexture')
  i718.usePhysicalProperties = !!i719[16]
  i718.focalLength = i719[17]
  i718.sensorSize = new pc.Vec2( i719[18], i719[19] )
  i718.lensShift = new pc.Vec2( i719[20], i719[21] )
  i718.gateFit = i719[22]
  i718.commandBufferCount = i719[23]
  i718.cameraType = i719[24]
  i718.enabled = !!i719[25]
  return i718
}

Deserializers["CameraFollow2D"] = function (request, data, root) {
  var i720 = root || request.c( 'CameraFollow2D' )
  var i721 = data
  request.r(i721[0], i721[1], 0, i720, 'target')
  i720.smoothSpeed = i721[2]
  i720.offset = new pc.Vec3( i721[3], i721[4], i721[5] )
  i720.followY = !!i721[6]
  return i720
}

Deserializers["AutoCameraFit"] = function (request, data, root) {
  var i722 = root || request.c( 'AutoCameraFit' )
  var i723 = data
  i722.fitMode = i723[0]
  i722.referenceResolution = new pc.Vec2( i723[1], i723[2] )
  i722.referenceOrthographicSize = i723[3]
  i722.widthMode = i723[4]
  i722.autoFitCanvases = !!i723[5]
  var i725 = i723[6]
  var i724 = []
  for(var i = 0; i < i725.length; i += 2) {
  request.r(i725[i + 0], i725[i + 1], 2, i724, '')
  }
  i722.targetCanvasScalers = i724
  request.r(i723[7], i723[8], 0, i722, 'tallScreenObject')
  i722.tallScreenRatioThreshold = i723[9]
  i722.tallScreenYOffset = i723[10]
  request.r(i723[11], i723[12], 0, i722, 'canvasBtn')
  request.r(i723[13], i723[14], 0, i722, 'targetArea')
  i722.paddingLandscape = i723[15]
  i722.paddingPortrait = i723[16]
  i722.extraPaddingSmallScreen = i723[17]
  i722.smallScreenThreshold = i723[18]
  i722.autoUpdateOnResize = !!i723[19]
  i722.adjustInEditMode = !!i723[20]
  return i722
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i728 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i729 = data
  i728.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i729[0], i728.main)
  i728.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i729[1], i728.colorBySpeed)
  i728.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i729[2], i728.colorOverLifetime)
  i728.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i729[3], i728.emission)
  i728.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i729[4], i728.rotationBySpeed)
  i728.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i729[5], i728.rotationOverLifetime)
  i728.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i729[6], i728.shape)
  i728.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i729[7], i728.sizeBySpeed)
  i728.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i729[8], i728.sizeOverLifetime)
  i728.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i729[9], i728.textureSheetAnimation)
  i728.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i729[10], i728.velocityOverLifetime)
  i728.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i729[11], i728.noise)
  i728.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i729[12], i728.inheritVelocity)
  i728.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i729[13], i728.forceOverLifetime)
  i728.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i729[14], i728.limitVelocityOverLifetime)
  i728.useAutoRandomSeed = !!i729[15]
  i728.randomSeed = i729[16]
  return i728
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i730 = root || new pc.ParticleSystemMain()
  var i731 = data
  i730.duration = i731[0]
  i730.loop = !!i731[1]
  i730.prewarm = !!i731[2]
  i730.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i731[3], i730.startDelay)
  i730.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i731[4], i730.startLifetime)
  i730.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i731[5], i730.startSpeed)
  i730.startSize3D = !!i731[6]
  i730.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i731[7], i730.startSizeX)
  i730.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i731[8], i730.startSizeY)
  i730.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i731[9], i730.startSizeZ)
  i730.startRotation3D = !!i731[10]
  i730.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i731[11], i730.startRotationX)
  i730.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i731[12], i730.startRotationY)
  i730.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i731[13], i730.startRotationZ)
  i730.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i731[14], i730.startColor)
  i730.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i731[15], i730.gravityModifier)
  i730.simulationSpace = i731[16]
  request.r(i731[17], i731[18], 0, i730, 'customSimulationSpace')
  i730.simulationSpeed = i731[19]
  i730.useUnscaledTime = !!i731[20]
  i730.scalingMode = i731[21]
  i730.playOnAwake = !!i731[22]
  i730.maxParticles = i731[23]
  i730.emitterVelocityMode = i731[24]
  i730.stopAction = i731[25]
  return i730
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i732 = root || new pc.MinMaxCurve()
  var i733 = data
  i732.mode = i733[0]
  i732.curveMin = new pc.AnimationCurve( { keys_flow: i733[1] } )
  i732.curveMax = new pc.AnimationCurve( { keys_flow: i733[2] } )
  i732.curveMultiplier = i733[3]
  i732.constantMin = i733[4]
  i732.constantMax = i733[5]
  return i732
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i734 = root || new pc.MinMaxGradient()
  var i735 = data
  i734.mode = i735[0]
  i734.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i735[1], i734.gradientMin)
  i734.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i735[2], i734.gradientMax)
  i734.colorMin = new pc.Color(i735[3], i735[4], i735[5], i735[6])
  i734.colorMax = new pc.Color(i735[7], i735[8], i735[9], i735[10])
  return i734
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i736 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i737 = data
  i736.mode = i737[0]
  var i739 = i737[1]
  var i738 = []
  for(var i = 0; i < i739.length; i += 1) {
    i738.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i739[i + 0]) );
  }
  i736.colorKeys = i738
  var i741 = i737[2]
  var i740 = []
  for(var i = 0; i < i741.length; i += 1) {
    i740.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i741[i + 0]) );
  }
  i736.alphaKeys = i740
  return i736
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i742 = root || new pc.ParticleSystemColorBySpeed()
  var i743 = data
  i742.enabled = !!i743[0]
  i742.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i743[1], i742.color)
  i742.range = new pc.Vec2( i743[2], i743[3] )
  return i742
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i746 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i747 = data
  i746.color = new pc.Color(i747[0], i747[1], i747[2], i747[3])
  i746.time = i747[4]
  return i746
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i750 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i751 = data
  i750.alpha = i751[0]
  i750.time = i751[1]
  return i750
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i752 = root || new pc.ParticleSystemColorOverLifetime()
  var i753 = data
  i752.enabled = !!i753[0]
  i752.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i753[1], i752.color)
  return i752
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i754 = root || new pc.ParticleSystemEmitter()
  var i755 = data
  i754.enabled = !!i755[0]
  i754.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i755[1], i754.rateOverTime)
  i754.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i755[2], i754.rateOverDistance)
  var i757 = i755[3]
  var i756 = []
  for(var i = 0; i < i757.length; i += 1) {
    i756.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i757[i + 0]) );
  }
  i754.bursts = i756
  return i754
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i760 = root || new pc.ParticleSystemBurst()
  var i761 = data
  i760.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i761[0], i760.count)
  i760.cycleCount = i761[1]
  i760.minCount = i761[2]
  i760.maxCount = i761[3]
  i760.repeatInterval = i761[4]
  i760.time = i761[5]
  return i760
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i762 = root || new pc.ParticleSystemRotationBySpeed()
  var i763 = data
  i762.enabled = !!i763[0]
  i762.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i763[1], i762.x)
  i762.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i763[2], i762.y)
  i762.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i763[3], i762.z)
  i762.separateAxes = !!i763[4]
  i762.range = new pc.Vec2( i763[5], i763[6] )
  return i762
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i764 = root || new pc.ParticleSystemRotationOverLifetime()
  var i765 = data
  i764.enabled = !!i765[0]
  i764.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i765[1], i764.x)
  i764.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i765[2], i764.y)
  i764.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i765[3], i764.z)
  i764.separateAxes = !!i765[4]
  return i764
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i766 = root || new pc.ParticleSystemShape()
  var i767 = data
  i766.enabled = !!i767[0]
  i766.shapeType = i767[1]
  i766.randomDirectionAmount = i767[2]
  i766.sphericalDirectionAmount = i767[3]
  i766.randomPositionAmount = i767[4]
  i766.alignToDirection = !!i767[5]
  i766.radius = i767[6]
  i766.radiusMode = i767[7]
  i766.radiusSpread = i767[8]
  i766.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i767[9], i766.radiusSpeed)
  i766.radiusThickness = i767[10]
  i766.angle = i767[11]
  i766.length = i767[12]
  i766.boxThickness = new pc.Vec3( i767[13], i767[14], i767[15] )
  i766.meshShapeType = i767[16]
  request.r(i767[17], i767[18], 0, i766, 'mesh')
  request.r(i767[19], i767[20], 0, i766, 'meshRenderer')
  request.r(i767[21], i767[22], 0, i766, 'skinnedMeshRenderer')
  i766.useMeshMaterialIndex = !!i767[23]
  i766.meshMaterialIndex = i767[24]
  i766.useMeshColors = !!i767[25]
  i766.normalOffset = i767[26]
  i766.arc = i767[27]
  i766.arcMode = i767[28]
  i766.arcSpread = i767[29]
  i766.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i767[30], i766.arcSpeed)
  i766.donutRadius = i767[31]
  i766.position = new pc.Vec3( i767[32], i767[33], i767[34] )
  i766.rotation = new pc.Vec3( i767[35], i767[36], i767[37] )
  i766.scale = new pc.Vec3( i767[38], i767[39], i767[40] )
  return i766
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i768 = root || new pc.ParticleSystemSizeBySpeed()
  var i769 = data
  i768.enabled = !!i769[0]
  i768.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i769[1], i768.x)
  i768.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i769[2], i768.y)
  i768.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i769[3], i768.z)
  i768.separateAxes = !!i769[4]
  i768.range = new pc.Vec2( i769[5], i769[6] )
  return i768
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i770 = root || new pc.ParticleSystemSizeOverLifetime()
  var i771 = data
  i770.enabled = !!i771[0]
  i770.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i771[1], i770.x)
  i770.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i771[2], i770.y)
  i770.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i771[3], i770.z)
  i770.separateAxes = !!i771[4]
  return i770
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i772 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i773 = data
  i772.enabled = !!i773[0]
  i772.mode = i773[1]
  i772.animation = i773[2]
  i772.numTilesX = i773[3]
  i772.numTilesY = i773[4]
  i772.useRandomRow = !!i773[5]
  i772.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i773[6], i772.frameOverTime)
  i772.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i773[7], i772.startFrame)
  i772.cycleCount = i773[8]
  i772.rowIndex = i773[9]
  i772.flipU = i773[10]
  i772.flipV = i773[11]
  i772.spriteCount = i773[12]
  var i775 = i773[13]
  var i774 = []
  for(var i = 0; i < i775.length; i += 2) {
  request.r(i775[i + 0], i775[i + 1], 2, i774, '')
  }
  i772.sprites = i774
  return i772
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i778 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i779 = data
  i778.enabled = !!i779[0]
  i778.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i779[1], i778.x)
  i778.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i779[2], i778.y)
  i778.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i779[3], i778.z)
  i778.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i779[4], i778.radial)
  i778.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i779[5], i778.speedModifier)
  i778.space = i779[6]
  i778.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i779[7], i778.orbitalX)
  i778.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i779[8], i778.orbitalY)
  i778.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i779[9], i778.orbitalZ)
  i778.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i779[10], i778.orbitalOffsetX)
  i778.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i779[11], i778.orbitalOffsetY)
  i778.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i779[12], i778.orbitalOffsetZ)
  return i778
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i780 = root || new pc.ParticleSystemNoise()
  var i781 = data
  i780.enabled = !!i781[0]
  i780.separateAxes = !!i781[1]
  i780.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i781[2], i780.strengthX)
  i780.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i781[3], i780.strengthY)
  i780.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i781[4], i780.strengthZ)
  i780.frequency = i781[5]
  i780.damping = !!i781[6]
  i780.octaveCount = i781[7]
  i780.octaveMultiplier = i781[8]
  i780.octaveScale = i781[9]
  i780.quality = i781[10]
  i780.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i781[11], i780.scrollSpeed)
  i780.scrollSpeedMultiplier = i781[12]
  i780.remapEnabled = !!i781[13]
  i780.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i781[14], i780.remapX)
  i780.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i781[15], i780.remapY)
  i780.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i781[16], i780.remapZ)
  i780.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i781[17], i780.positionAmount)
  i780.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i781[18], i780.rotationAmount)
  i780.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i781[19], i780.sizeAmount)
  return i780
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i782 = root || new pc.ParticleSystemInheritVelocity()
  var i783 = data
  i782.enabled = !!i783[0]
  i782.mode = i783[1]
  i782.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i783[2], i782.curve)
  return i782
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i784 = root || new pc.ParticleSystemForceOverLifetime()
  var i785 = data
  i784.enabled = !!i785[0]
  i784.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i785[1], i784.x)
  i784.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i785[2], i784.y)
  i784.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i785[3], i784.z)
  i784.space = i785[4]
  i784.randomized = !!i785[5]
  return i784
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i786 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i787 = data
  i786.enabled = !!i787[0]
  i786.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i787[1], i786.limit)
  i786.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i787[2], i786.limitX)
  i786.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i787[3], i786.limitY)
  i786.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i787[4], i786.limitZ)
  i786.dampen = i787[5]
  i786.separateAxes = !!i787[6]
  i786.space = i787[7]
  i786.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i787[8], i786.drag)
  i786.multiplyDragByParticleSize = !!i787[9]
  i786.multiplyDragByParticleVelocity = !!i787[10]
  return i786
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i788 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i789 = data
  request.r(i789[0], i789[1], 0, i788, 'mesh')
  i788.meshCount = i789[2]
  i788.activeVertexStreamsCount = i789[3]
  i788.alignment = i789[4]
  i788.renderMode = i789[5]
  i788.sortMode = i789[6]
  i788.lengthScale = i789[7]
  i788.velocityScale = i789[8]
  i788.cameraVelocityScale = i789[9]
  i788.normalDirection = i789[10]
  i788.sortingFudge = i789[11]
  i788.minParticleSize = i789[12]
  i788.maxParticleSize = i789[13]
  i788.pivot = new pc.Vec3( i789[14], i789[15], i789[16] )
  request.r(i789[17], i789[18], 0, i788, 'trailMaterial')
  i788.applyActiveColorSpace = !!i789[19]
  i788.enabled = !!i789[20]
  request.r(i789[21], i789[22], 0, i788, 'sharedMaterial')
  var i791 = i789[23]
  var i790 = []
  for(var i = 0; i < i791.length; i += 2) {
  request.r(i791[i + 0], i791[i + 1], 2, i790, '')
  }
  i788.sharedMaterials = i790
  i788.receiveShadows = !!i789[24]
  i788.shadowCastingMode = i789[25]
  i788.sortingLayerID = i789[26]
  i788.sortingOrder = i789[27]
  i788.lightmapIndex = i789[28]
  i788.lightmapSceneIndex = i789[29]
  i788.lightmapScaleOffset = new pc.Vec4( i789[30], i789[31], i789[32], i789[33] )
  i788.lightProbeUsage = i789[34]
  i788.reflectionProbeUsage = i789[35]
  return i788
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i794 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i795 = data
  i794.name = i795[0]
  i794.tagId = i795[1]
  i794.enabled = !!i795[2]
  i794.isStatic = !!i795[3]
  i794.layer = i795[4]
  return i794
}

Deserializers["Ply_SoundManager"] = function (request, data, root) {
  var i796 = root || request.c( 'Ply_SoundManager' )
  var i797 = data
  i796.fxAudio = request.d('FxAudio', i797[0], i796.fxAudio)
  request.r(i797[1], i797[2], 0, i796, 'bgm1')
  return i796
}

Deserializers["FxAudio"] = function (request, data, root) {
  var i798 = root || request.c( 'FxAudio' )
  var i799 = data
  i798.ClickBox = request.d('SoundData', i799[0], i798.ClickBox)
  i798.Happy = request.d('SoundData', i799[1], i798.Happy)
  i798.Wrong = request.d('SoundData', i799[2], i798.Wrong)
  i798.Spray = request.d('SoundData', i799[3], i798.Spray)
  i798.Brush = request.d('SoundData', i799[4], i798.Brush)
  i798.Keo = request.d('SoundData', i799[5], i798.Keo)
  i798.Confetti = request.d('SoundData', i799[6], i798.Confetti)
  i798.Lose2 = request.d('SoundData', i799[7], i798.Lose2)
  i798.SelectVini = request.d('SoundData', i799[8], i798.SelectVini)
  i798.SelectMessiMbappe = request.d('SoundData', i799[9], i798.SelectMessiMbappe)
  i798.Tackle = request.d('SoundData', i799[10], i798.Tackle)
  i798.HaalandHurt = request.d('SoundData', i799[11], i798.HaalandHurt)
  return i798
}

Deserializers["SoundData"] = function (request, data, root) {
  var i800 = root || request.c( 'SoundData' )
  var i801 = data
  request.r(i801[0], i801[1], 0, i800, 'clip')
  i800.repeatCount = i801[2]
  return i800
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i802 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i803 = data
  request.r(i803[0], i803[1], 0, i802, 'clip')
  request.r(i803[2], i803[3], 0, i802, 'outputAudioMixerGroup')
  i802.playOnAwake = !!i803[4]
  i802.loop = !!i803[5]
  i802.time = i803[6]
  i802.volume = i803[7]
  i802.pitch = i803[8]
  i802.enabled = !!i803[9]
  return i802
}

Deserializers["HaalandGame.HaalandGameManager"] = function (request, data, root) {
  var i804 = root || request.c( 'HaalandGame.HaalandGameManager' )
  var i805 = data
  request.r(i805[0], i805[1], 0, i804, 'tutUI')
  request.r(i805[2], i805[3], 0, i804, 'ronaldoTackle')
  request.r(i805[4], i805[5], 0, i804, 'ronaldoTackleAnimator')
  i804.startRonaldoTackleTrigger = i805[6]
  request.r(i805[7], i805[8], 0, i804, 'messiTackle')
  request.r(i805[9], i805[10], 0, i804, 'messiTackleAnimator')
  i804.startMessiTackleTrigger = i805[11]
  i804.messiTackleSpeed = i805[12]
  i804.tackleAnimDelay = i805[13]
  request.r(i805[14], i805[15], 0, i804, 'haalandDribbleImage')
  request.r(i805[16], i805[17], 0, i804, 'haalandDribbleAnimator')
  i804.startHaalandDribbleTrigger = i805[18]
  request.r(i805[19], i805[20], 0, i804, 'fightingCloud')
  request.r(i805[21], i805[22], 0, i804, 'haalandHurt')
  request.r(i805[23], i805[24], 0, i804, 'haalandWinOnCorrect')
  request.r(i805[25], i805[26], 0, i804, 'haalandWin')
  i804.winPlayerDelay = i805[27]
  request.r(i805[28], i805[29], 0, i804, 'standPlayers')
  request.r(i805[30], i805[31], 0, i804, 'standPlayersAnimator')
  i804.standPlayerEnterTrigger = i805[32]
  request.r(i805[33], i805[34], 0, i804, 'questionUI')
  request.r(i805[35], i805[36], 0, i804, 'wrongChoiceUI')
  request.r(i805[37], i805[38], 0, i804, 'winChoiceUI')
  request.r(i805[39], i805[40], 0, i804, 'winExtraObj1')
  request.r(i805[41], i805[42], 0, i804, 'winExtraObj2')
  request.r(i805[43], i805[44], 0, i804, 'iconListUI')
  request.r(i805[45], i805[46], 0, i804, 'refereeAnimator')
  i804.refereeLookAroundTrigger = i805[47]
  i804.useAutoTimers = !!i805[48]
  i804.tackleHideDelay = i805[49]
  i804.impactCloudDelay = i805[50]
  i804.messiTackleHideDelay = i805[51]
  i804.messiImpactCloudDelay = i805[52]
  i804.haalandHurtDelay = i805[53]
  i804.cloudDuration = i805[54]
  i804.refereeAnimDelay = i805[55]
  i804.nextActionDelay = i805[56]
  i804.dribbleToTackleDelay = i805[57]
  i804.tackleSoundDelay = i805[58]
  request.r(i805[59], i805[60], 0, i804, 'ronaldoChatBubble')
  request.r(i805[61], i805[62], 0, i804, 'messiChatBubble')
  request.r(i805[63], i805[64], 0, i804, 'viniChatBubble')
  request.r(i805[65], i805[66], 0, i804, 'mbappeChatBubble')
  request.r(i805[67], i805[68], 0, i804, 'ronaldoSpriteRenderer')
  request.r(i805[69], i805[70], 0, i804, 'ronaldoSadSprite')
  request.r(i805[71], i805[72], 0, i804, 'ronaldoEvilLaughSprite')
  request.r(i805[73], i805[74], 0, i804, 'messiSpriteRenderer')
  request.r(i805[75], i805[76], 0, i804, 'messiSadSprite')
  request.r(i805[77], i805[78], 0, i804, 'viniSpriteRenderer')
  request.r(i805[79], i805[80], 0, i804, 'viniSadSprite')
  request.r(i805[81], i805[82], 0, i804, 'mbappeSpriteRenderer')
  request.r(i805[83], i805[84], 0, i804, 'mbappeSadSprite')
  request.r(i805[85], i805[86], 0, i804, 'refereeSpriteRenderer')
  request.r(i805[87], i805[88], 0, i804, 'refereeReactionSprite')
  request.r(i805[89], i805[90], 0, i804, 'iconListAnimator')
  request.r(i805[91], i805[92], 0, i804, 'postWinAudioClip')
  var i807 = i805[93]
  var i806 = new (System.Collections.Generic.List$1(Bridge.ns('HaalandGame.PostWinTimedObject')))
  for(var i = 0; i < i807.length; i += 1) {
    i806.add(request.d('HaalandGame.PostWinTimedObject', i807[i + 0]));
  }
  i804.postWinTimeline = i806
  i804.onPostWinTriggered = request.d('UnityEngine.Events.UnityEvent', i805[94], i804.onPostWinTriggered)
  i804.postWinDelay = i805[95]
  var i809 = i805[96]
  var i808 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i809.length; i += 2) {
  request.r(i809[i + 0], i809[i + 1], 1, i808, '')
  }
  i804.postWinObjects = i808
  i804.currentLevel = i805[97]
  return i804
}

Deserializers["HaalandGame.PostWinTimedObject"] = function (request, data, root) {
  var i812 = root || request.c( 'HaalandGame.PostWinTimedObject' )
  var i813 = data
  i812.label = i813[0]
  request.r(i813[1], i813[2], 0, i812, 'targetObject')
  i812.enableDelay = i813[3]
  i812.disableDelay = i813[4]
  request.r(i813[5], i813[6], 0, i812, 'soundClip')
  i812.onEnabled = request.d('UnityEngine.Events.UnityEvent', i813[7], i812.onEnabled)
  i812.onDisabled = request.d('UnityEngine.Events.UnityEvent', i813[8], i812.onDisabled)
  return i812
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i814 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i815 = data
  i814.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i815[0], i814.m_PersistentCalls)
  return i814
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i816 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i817 = data
  var i819 = i817[0]
  var i818 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i819.length; i += 1) {
    i818.add(request.d('UnityEngine.Events.PersistentCall', i819[i + 0]));
  }
  i816.m_Calls = i818
  return i816
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i822 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i823 = data
  request.r(i823[0], i823[1], 0, i822, 'm_Target')
  i822.m_TargetAssemblyTypeName = i823[2]
  i822.m_MethodName = i823[3]
  i822.m_Mode = i823[4]
  i822.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i823[5], i822.m_Arguments)
  i822.m_CallState = i823[6]
  return i822
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i824 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i825 = data
  request.r(i825[0], i825[1], 0, i824, 'm_ObjectArgument')
  i824.m_ObjectArgumentAssemblyTypeName = i825[2]
  i824.m_IntArgument = i825[3]
  i824.m_FloatArgument = i825[4]
  i824.m_StringArgument = i825[5]
  i824.m_BoolArgument = !!i825[6]
  return i824
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i828 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i829 = data
  i828.pivot = new pc.Vec2( i829[0], i829[1] )
  i828.anchorMin = new pc.Vec2( i829[2], i829[3] )
  i828.anchorMax = new pc.Vec2( i829[4], i829[5] )
  i828.sizeDelta = new pc.Vec2( i829[6], i829[7] )
  i828.anchoredPosition3D = new pc.Vec3( i829[8], i829[9], i829[10] )
  i828.rotation = new pc.Quat(i829[11], i829[12], i829[13], i829[14])
  i828.scale = new pc.Vec3( i829[15], i829[16], i829[17] )
  return i828
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i830 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i831 = data
  i830.planeDistance = i831[0]
  i830.referencePixelsPerUnit = i831[1]
  i830.isFallbackOverlay = !!i831[2]
  i830.renderMode = i831[3]
  i830.renderOrder = i831[4]
  i830.sortingLayerName = i831[5]
  i830.sortingOrder = i831[6]
  i830.scaleFactor = i831[7]
  request.r(i831[8], i831[9], 0, i830, 'worldCamera')
  i830.overrideSorting = !!i831[10]
  i830.pixelPerfect = !!i831[11]
  i830.targetDisplay = i831[12]
  i830.overridePixelPerfect = !!i831[13]
  i830.enabled = !!i831[14]
  return i830
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i832 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i833 = data
  i832.m_UiScaleMode = i833[0]
  i832.m_ReferencePixelsPerUnit = i833[1]
  i832.m_ScaleFactor = i833[2]
  i832.m_ReferenceResolution = new pc.Vec2( i833[3], i833[4] )
  i832.m_ScreenMatchMode = i833[5]
  i832.m_MatchWidthOrHeight = i833[6]
  i832.m_PhysicalUnit = i833[7]
  i832.m_FallbackScreenDPI = i833[8]
  i832.m_DefaultSpriteDPI = i833[9]
  i832.m_DynamicPixelsPerUnit = i833[10]
  i832.m_PresetInfoIsWorld = !!i833[11]
  return i832
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i834 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i835 = data
  i834.m_IgnoreReversedGraphics = !!i835[0]
  i834.m_BlockingObjects = i835[1]
  i834.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i835[2] )
  return i834
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i836 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i837 = data
  i836.cullTransparentMesh = !!i837[0]
  return i836
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i838 = root || request.c( 'UnityEngine.UI.Image' )
  var i839 = data
  request.r(i839[0], i839[1], 0, i838, 'm_Sprite')
  i838.m_Type = i839[2]
  i838.m_PreserveAspect = !!i839[3]
  i838.m_FillCenter = !!i839[4]
  i838.m_FillMethod = i839[5]
  i838.m_FillAmount = i839[6]
  i838.m_FillClockwise = !!i839[7]
  i838.m_FillOrigin = i839[8]
  i838.m_UseSpriteMesh = !!i839[9]
  i838.m_PixelsPerUnitMultiplier = i839[10]
  request.r(i839[11], i839[12], 0, i838, 'm_Material')
  i838.m_Maskable = !!i839[13]
  i838.m_Color = new pc.Color(i839[14], i839[15], i839[16], i839[17])
  i838.m_RaycastTarget = !!i839[18]
  i838.m_RaycastPadding = new pc.Vec4( i839[19], i839[20], i839[21], i839[22] )
  return i838
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i840 = root || request.c( 'UnityEngine.UI.Button' )
  var i841 = data
  i840.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i841[0], i840.m_OnClick)
  i840.m_Navigation = request.d('UnityEngine.UI.Navigation', i841[1], i840.m_Navigation)
  i840.m_Transition = i841[2]
  i840.m_Colors = request.d('UnityEngine.UI.ColorBlock', i841[3], i840.m_Colors)
  i840.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i841[4], i840.m_SpriteState)
  i840.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i841[5], i840.m_AnimationTriggers)
  i840.m_Interactable = !!i841[6]
  request.r(i841[7], i841[8], 0, i840, 'm_TargetGraphic')
  return i840
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i842 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i843 = data
  i842.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i843[0], i842.m_PersistentCalls)
  return i842
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i844 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i845 = data
  i844.m_Mode = i845[0]
  i844.m_WrapAround = !!i845[1]
  request.r(i845[2], i845[3], 0, i844, 'm_SelectOnUp')
  request.r(i845[4], i845[5], 0, i844, 'm_SelectOnDown')
  request.r(i845[6], i845[7], 0, i844, 'm_SelectOnLeft')
  request.r(i845[8], i845[9], 0, i844, 'm_SelectOnRight')
  return i844
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i846 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i847 = data
  i846.m_NormalColor = new pc.Color(i847[0], i847[1], i847[2], i847[3])
  i846.m_HighlightedColor = new pc.Color(i847[4], i847[5], i847[6], i847[7])
  i846.m_PressedColor = new pc.Color(i847[8], i847[9], i847[10], i847[11])
  i846.m_SelectedColor = new pc.Color(i847[12], i847[13], i847[14], i847[15])
  i846.m_DisabledColor = new pc.Color(i847[16], i847[17], i847[18], i847[19])
  i846.m_ColorMultiplier = i847[20]
  i846.m_FadeDuration = i847[21]
  return i846
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i848 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i849 = data
  request.r(i849[0], i849[1], 0, i848, 'm_HighlightedSprite')
  request.r(i849[2], i849[3], 0, i848, 'm_PressedSprite')
  request.r(i849[4], i849[5], 0, i848, 'm_SelectedSprite')
  request.r(i849[6], i849[7], 0, i848, 'm_DisabledSprite')
  return i848
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i850 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i851 = data
  i850.m_NormalTrigger = i851[0]
  i850.m_HighlightedTrigger = i851[1]
  i850.m_PressedTrigger = i851[2]
  i850.m_SelectedTrigger = i851[3]
  i850.m_DisabledTrigger = i851[4]
  return i850
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i852 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i853 = data
  request.r(i853[0], i853[1], 0, i852, 'animatorController')
  request.r(i853[2], i853[3], 0, i852, 'avatar')
  i852.updateMode = i853[4]
  i852.hasTransformHierarchy = !!i853[5]
  i852.applyRootMotion = !!i853[6]
  var i855 = i853[7]
  var i854 = []
  for(var i = 0; i < i855.length; i += 2) {
  request.r(i855[i + 0], i855[i + 1], 2, i854, '')
  }
  i852.humanBones = i854
  i852.enabled = !!i853[8]
  return i852
}

Deserializers["HaalandGame.IconListAnimator"] = function (request, data, root) {
  var i858 = root || request.c( 'HaalandGame.IconListAnimator' )
  var i859 = data
  var i861 = i859[0]
  var i860 = []
  for(var i = 0; i < i861.length; i += 2) {
  request.r(i861[i + 0], i861[i + 1], 2, i860, '')
  }
  i858.iconTransforms = i860
  i858.initialDelay = i859[1]
  i858.targetScaleMult = i859[2]
  i858.pulseDuration = i859[3]
  i858.delayBetweenIcons = i859[4]
  i858.delayBetweenLoops = i859[5]
  return i858
}

Deserializers["HideOnFirstClick"] = function (request, data, root) {
  var i864 = root || request.c( 'HideOnFirstClick' )
  var i865 = data
  request.r(i865[0], i865[1], 0, i864, 'objectToHide')
  return i864
}

Deserializers["ScreenHeightPositionAnchor"] = function (request, data, root) {
  var i866 = root || request.c( 'ScreenHeightPositionAnchor' )
  var i867 = data
  request.r(i867[0], i867[1], 0, i866, 'anchorPoint')
  request.r(i867[2], i867[3], 0, i866, 'targetCamera')
  i866.viewportYRatio = i867[4]
  i866.alignOnStart = !!i867[5]
  i866.alignOnEnable = !!i867[6]
  i866.realignOnScreenSizeChanged = !!i867[7]
  i866.drawGizmos = !!i867[8]
  i866.targetLineColor = new pc.Color(i867[9], i867[10], i867[11], i867[12])
  i866.anchorColor = new pc.Color(i867[13], i867[14], i867[15], i867[16])
  return i866
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i868 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i869 = data
  i868.center = new pc.Vec3( i869[0], i869[1], i869[2] )
  i868.size = new pc.Vec3( i869[3], i869[4], i869[5] )
  i868.enabled = !!i869[6]
  i868.isTrigger = !!i869[7]
  request.r(i869[8], i869[9], 0, i868, 'material')
  return i868
}

Deserializers["HaalandGame.PlayerSelectable"] = function (request, data, root) {
  var i870 = root || request.c( 'HaalandGame.PlayerSelectable' )
  var i871 = data
  i870.playerType = i871[0]
  i870.targetLayerName = i871[1]
  return i870
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i872 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i873 = data
  i872.color = new pc.Color(i873[0], i873[1], i873[2], i873[3])
  request.r(i873[4], i873[5], 0, i872, 'sprite')
  i872.flipX = !!i873[6]
  i872.flipY = !!i873[7]
  i872.drawMode = i873[8]
  i872.size = new pc.Vec2( i873[9], i873[10] )
  i872.tileMode = i873[11]
  i872.adaptiveModeThreshold = i873[12]
  i872.maskInteraction = i873[13]
  i872.spriteSortPoint = i873[14]
  i872.enabled = !!i873[15]
  request.r(i873[16], i873[17], 0, i872, 'sharedMaterial')
  var i875 = i873[18]
  var i874 = []
  for(var i = 0; i < i875.length; i += 2) {
  request.r(i875[i + 0], i875[i + 1], 2, i874, '')
  }
  i872.sharedMaterials = i874
  i872.receiveShadows = !!i873[19]
  i872.shadowCastingMode = i873[20]
  i872.sortingLayerID = i873[21]
  i872.sortingOrder = i873[22]
  i872.lightmapIndex = i873[23]
  i872.lightmapSceneIndex = i873[24]
  i872.lightmapScaleOffset = new pc.Vec4( i873[25], i873[26], i873[27], i873[28] )
  i872.lightProbeUsage = i873[29]
  i872.reflectionProbeUsage = i873[30]
  return i872
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i876 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i877 = data
  request.r(i877[0], i877[1], 0, i876, 'm_FirstSelected')
  i876.m_sendNavigationEvents = !!i877[2]
  i876.m_DragThreshold = i877[3]
  return i876
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i878 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i879 = data
  i878.m_HorizontalAxis = i879[0]
  i878.m_VerticalAxis = i879[1]
  i878.m_SubmitButton = i879[2]
  i878.m_CancelButton = i879[3]
  i878.m_InputActionsPerSecond = i879[4]
  i878.m_RepeatDelay = i879[5]
  i878.m_ForceModuleActive = !!i879[6]
  i878.m_SendPointerHoverToParent = !!i879[7]
  return i878
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i880 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i881 = data
  i880.ambientIntensity = i881[0]
  i880.reflectionIntensity = i881[1]
  i880.ambientMode = i881[2]
  i880.ambientLight = new pc.Color(i881[3], i881[4], i881[5], i881[6])
  i880.ambientSkyColor = new pc.Color(i881[7], i881[8], i881[9], i881[10])
  i880.ambientGroundColor = new pc.Color(i881[11], i881[12], i881[13], i881[14])
  i880.ambientEquatorColor = new pc.Color(i881[15], i881[16], i881[17], i881[18])
  i880.fogColor = new pc.Color(i881[19], i881[20], i881[21], i881[22])
  i880.fogEndDistance = i881[23]
  i880.fogStartDistance = i881[24]
  i880.fogDensity = i881[25]
  i880.fog = !!i881[26]
  request.r(i881[27], i881[28], 0, i880, 'skybox')
  i880.fogMode = i881[29]
  var i883 = i881[30]
  var i882 = []
  for(var i = 0; i < i883.length; i += 1) {
    i882.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i883[i + 0]) );
  }
  i880.lightmaps = i882
  i880.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i881[31], i880.lightProbes)
  i880.lightmapsMode = i881[32]
  i880.mixedBakeMode = i881[33]
  i880.environmentLightingMode = i881[34]
  i880.ambientProbe = new pc.SphericalHarmonicsL2(i881[35])
  i880.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i881[36])
  i880.useReferenceAmbientProbe = !!i881[37]
  request.r(i881[38], i881[39], 0, i880, 'customReflection')
  request.r(i881[40], i881[41], 0, i880, 'defaultReflection')
  i880.defaultReflectionMode = i881[42]
  i880.defaultReflectionResolution = i881[43]
  i880.sunLightObjectId = i881[44]
  i880.pixelLightCount = i881[45]
  i880.defaultReflectionHDR = !!i881[46]
  i880.hasLightDataAsset = !!i881[47]
  i880.hasManualGenerate = !!i881[48]
  return i880
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i886 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i887 = data
  request.r(i887[0], i887[1], 0, i886, 'lightmapColor')
  request.r(i887[2], i887[3], 0, i886, 'lightmapDirection')
  request.r(i887[4], i887[5], 0, i886, 'shadowMask')
  return i886
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i888 = root || new UnityEngine.LightProbes()
  var i889 = data
  return i888
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i896 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i897 = data
  var i899 = i897[0]
  var i898 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i899.length; i += 1) {
    i898.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i899[i + 0]));
  }
  i896.ShaderCompilationErrors = i898
  i896.name = i897[1]
  i896.guid = i897[2]
  var i901 = i897[3]
  var i900 = []
  for(var i = 0; i < i901.length; i += 1) {
    i900.push( i901[i + 0] );
  }
  i896.shaderDefinedKeywords = i900
  var i903 = i897[4]
  var i902 = []
  for(var i = 0; i < i903.length; i += 1) {
    i902.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i903[i + 0]) );
  }
  i896.passes = i902
  var i905 = i897[5]
  var i904 = []
  for(var i = 0; i < i905.length; i += 1) {
    i904.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i905[i + 0]) );
  }
  i896.usePasses = i904
  var i907 = i897[6]
  var i906 = []
  for(var i = 0; i < i907.length; i += 1) {
    i906.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i907[i + 0]) );
  }
  i896.defaultParameterValues = i906
  request.r(i897[7], i897[8], 0, i896, 'unityFallbackShader')
  i896.readDepth = !!i897[9]
  i896.hasDepthOnlyPass = !!i897[10]
  i896.isCreatedByShaderGraph = !!i897[11]
  i896.disableBatching = !!i897[12]
  i896.compiled = !!i897[13]
  return i896
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i910 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i911 = data
  i910.shaderName = i911[0]
  i910.errorMessage = i911[1]
  return i910
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i916 = root || new pc.UnityShaderPass()
  var i917 = data
  i916.id = i917[0]
  i916.subShaderIndex = i917[1]
  i916.name = i917[2]
  i916.passType = i917[3]
  i916.grabPassTextureName = i917[4]
  i916.usePass = !!i917[5]
  i916.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i917[6], i916.zTest)
  i916.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i917[7], i916.zWrite)
  i916.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i917[8], i916.culling)
  i916.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i917[9], i916.blending)
  i916.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i917[10], i916.alphaBlending)
  i916.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i917[11], i916.colorWriteMask)
  i916.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i917[12], i916.offsetUnits)
  i916.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i917[13], i916.offsetFactor)
  i916.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i917[14], i916.stencilRef)
  i916.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i917[15], i916.stencilReadMask)
  i916.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i917[16], i916.stencilWriteMask)
  i916.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i917[17], i916.stencilOp)
  i916.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i917[18], i916.stencilOpFront)
  i916.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i917[19], i916.stencilOpBack)
  var i919 = i917[20]
  var i918 = []
  for(var i = 0; i < i919.length; i += 1) {
    i918.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i919[i + 0]) );
  }
  i916.tags = i918
  var i921 = i917[21]
  var i920 = []
  for(var i = 0; i < i921.length; i += 1) {
    i920.push( i921[i + 0] );
  }
  i916.passDefinedKeywords = i920
  var i923 = i917[22]
  var i922 = []
  for(var i = 0; i < i923.length; i += 1) {
    i922.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i923[i + 0]) );
  }
  i916.passDefinedKeywordGroups = i922
  var i925 = i917[23]
  var i924 = []
  for(var i = 0; i < i925.length; i += 1) {
    i924.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i925[i + 0]) );
  }
  i916.variants = i924
  var i927 = i917[24]
  var i926 = []
  for(var i = 0; i < i927.length; i += 1) {
    i926.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i927[i + 0]) );
  }
  i916.excludedVariants = i926
  i916.hasDepthReader = !!i917[25]
  return i916
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i928 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i929 = data
  i928.val = i929[0]
  i928.name = i929[1]
  return i928
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i930 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i931 = data
  i930.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i931[0], i930.src)
  i930.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i931[1], i930.dst)
  i930.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i931[2], i930.op)
  return i930
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i932 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i933 = data
  i932.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i933[0], i932.pass)
  i932.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i933[1], i932.fail)
  i932.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i933[2], i932.zFail)
  i932.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i933[3], i932.comp)
  return i932
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i936 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i937 = data
  i936.name = i937[0]
  i936.value = i937[1]
  return i936
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i940 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i941 = data
  var i943 = i941[0]
  var i942 = []
  for(var i = 0; i < i943.length; i += 1) {
    i942.push( i943[i + 0] );
  }
  i940.keywords = i942
  i940.hasDiscard = !!i941[1]
  return i940
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i946 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i947 = data
  i946.passId = i947[0]
  i946.subShaderIndex = i947[1]
  var i949 = i947[2]
  var i948 = []
  for(var i = 0; i < i949.length; i += 1) {
    i948.push( i949[i + 0] );
  }
  i946.keywords = i948
  i946.vertexProgram = i947[3]
  i946.fragmentProgram = i947[4]
  i946.exportedForWebGl2 = !!i947[5]
  i946.readDepth = !!i947[6]
  return i946
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i952 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i953 = data
  request.r(i953[0], i953[1], 0, i952, 'shader')
  i952.pass = i953[2]
  return i952
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i956 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i957 = data
  i956.name = i957[0]
  i956.type = i957[1]
  i956.value = new pc.Vec4( i957[2], i957[3], i957[4], i957[5] )
  i956.textureValue = i957[6]
  i956.shaderPropertyFlag = i957[7]
  return i956
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i958 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i959 = data
  i958.name = i959[0]
  request.r(i959[1], i959[2], 0, i958, 'texture')
  i958.aabb = i959[3]
  i958.vertices = i959[4]
  i958.triangles = i959[5]
  i958.textureRect = UnityEngine.Rect.MinMaxRect(i959[6], i959[7], i959[8], i959[9])
  i958.packedRect = UnityEngine.Rect.MinMaxRect(i959[10], i959[11], i959[12], i959[13])
  i958.border = new pc.Vec4( i959[14], i959[15], i959[16], i959[17] )
  i958.transparency = i959[18]
  i958.bounds = i959[19]
  i958.pixelsPerUnit = i959[20]
  i958.textureWidth = i959[21]
  i958.textureHeight = i959[22]
  i958.nativeSize = new pc.Vec2( i959[23], i959[24] )
  i958.pivot = new pc.Vec2( i959[25], i959[26] )
  i958.textureRectOffset = new pc.Vec2( i959[27], i959[28] )
  return i958
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i960 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i961 = data
  i960.name = i961[0]
  return i960
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i962 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i963 = data
  i962.name = i963[0]
  i962.wrapMode = i963[1]
  i962.isLooping = !!i963[2]
  i962.length = i963[3]
  var i965 = i963[4]
  var i964 = []
  for(var i = 0; i < i965.length; i += 1) {
    i964.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i965[i + 0]) );
  }
  i962.curves = i964
  var i967 = i963[5]
  var i966 = []
  for(var i = 0; i < i967.length; i += 1) {
    i966.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i967[i + 0]) );
  }
  i962.events = i966
  i962.halfPrecision = !!i963[6]
  i962._frameRate = i963[7]
  i962.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i963[8], i962.localBounds)
  i962.hasMuscleCurves = !!i963[9]
  var i969 = i963[10]
  var i968 = []
  for(var i = 0; i < i969.length; i += 1) {
    i968.push( i969[i + 0] );
  }
  i962.clipMuscleConstant = i968
  i962.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i963[11], i962.clipBindingConstant)
  return i962
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i972 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i973 = data
  i972.path = i973[0]
  i972.hash = i973[1]
  i972.componentType = i973[2]
  i972.property = i973[3]
  i972.keys = i973[4]
  var i975 = i973[5]
  var i974 = []
  for(var i = 0; i < i975.length; i += 1) {
    i974.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i975[i + 0]) );
  }
  i972.objectReferenceKeys = i974
  return i972
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i978 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i979 = data
  i978.time = i979[0]
  request.r(i979[1], i979[2], 0, i978, 'value')
  return i978
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i982 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i983 = data
  i982.functionName = i983[0]
  i982.floatParameter = i983[1]
  i982.intParameter = i983[2]
  i982.stringParameter = i983[3]
  request.r(i983[4], i983[5], 0, i982, 'objectReferenceParameter')
  i982.time = i983[6]
  return i982
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i984 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i985 = data
  i984.center = new pc.Vec3( i985[0], i985[1], i985[2] )
  i984.extends = new pc.Vec3( i985[3], i985[4], i985[5] )
  return i984
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i988 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i989 = data
  var i991 = i989[0]
  var i990 = []
  for(var i = 0; i < i991.length; i += 1) {
    i990.push( i991[i + 0] );
  }
  i988.genericBindings = i990
  var i993 = i989[1]
  var i992 = []
  for(var i = 0; i < i993.length; i += 1) {
    i992.push( i993[i + 0] );
  }
  i988.pptrCurveMapping = i992
  return i988
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i994 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i995 = data
  i994.name = i995[0]
  i994.ascent = i995[1]
  i994.originalLineHeight = i995[2]
  i994.fontSize = i995[3]
  var i997 = i995[4]
  var i996 = []
  for(var i = 0; i < i997.length; i += 1) {
    i996.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i997[i + 0]) );
  }
  i994.characterInfo = i996
  request.r(i995[5], i995[6], 0, i994, 'texture')
  i994.originalFontSize = i995[7]
  return i994
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1000 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1001 = data
  i1000.index = i1001[0]
  i1000.advance = i1001[1]
  i1000.bearing = i1001[2]
  i1000.glyphWidth = i1001[3]
  i1000.glyphHeight = i1001[4]
  i1000.minX = i1001[5]
  i1000.maxX = i1001[6]
  i1000.minY = i1001[7]
  i1000.maxY = i1001[8]
  i1000.uvBottomLeftX = i1001[9]
  i1000.uvBottomLeftY = i1001[10]
  i1000.uvBottomRightX = i1001[11]
  i1000.uvBottomRightY = i1001[12]
  i1000.uvTopLeftX = i1001[13]
  i1000.uvTopLeftY = i1001[14]
  i1000.uvTopRightX = i1001[15]
  i1000.uvTopRightY = i1001[16]
  return i1000
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i1002 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i1003 = data
  i1002.name = i1003[0]
  var i1005 = i1003[1]
  var i1004 = []
  for(var i = 0; i < i1005.length; i += 1) {
    i1004.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i1005[i + 0]) );
  }
  i1002.layers = i1004
  var i1007 = i1003[2]
  var i1006 = []
  for(var i = 0; i < i1007.length; i += 1) {
    i1006.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i1007[i + 0]) );
  }
  i1002.parameters = i1006
  i1002.animationClips = i1003[3]
  i1002.avatarUnsupported = i1003[4]
  return i1002
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i1010 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i1011 = data
  i1010.name = i1011[0]
  i1010.defaultWeight = i1011[1]
  i1010.blendingMode = i1011[2]
  i1010.avatarMask = i1011[3]
  i1010.syncedLayerIndex = i1011[4]
  i1010.syncedLayerAffectsTiming = !!i1011[5]
  i1010.syncedLayers = i1011[6]
  i1010.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1011[7], i1010.stateMachine)
  return i1010
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i1012 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i1013 = data
  i1012.id = i1013[0]
  i1012.name = i1013[1]
  i1012.path = i1013[2]
  var i1015 = i1013[3]
  var i1014 = []
  for(var i = 0; i < i1015.length; i += 1) {
    i1014.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i1015[i + 0]) );
  }
  i1012.states = i1014
  var i1017 = i1013[4]
  var i1016 = []
  for(var i = 0; i < i1017.length; i += 1) {
    i1016.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1017[i + 0]) );
  }
  i1012.machines = i1016
  var i1019 = i1013[5]
  var i1018 = []
  for(var i = 0; i < i1019.length; i += 1) {
    i1018.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1019[i + 0]) );
  }
  i1012.entryStateTransitions = i1018
  var i1021 = i1013[6]
  var i1020 = []
  for(var i = 0; i < i1021.length; i += 1) {
    i1020.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1021[i + 0]) );
  }
  i1012.exitStateTransitions = i1020
  var i1023 = i1013[7]
  var i1022 = []
  for(var i = 0; i < i1023.length; i += 1) {
    i1022.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1023[i + 0]) );
  }
  i1012.anyStateTransitions = i1022
  i1012.defaultStateId = i1013[8]
  return i1012
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i1026 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i1027 = data
  i1026.id = i1027[0]
  i1026.name = i1027[1]
  i1026.cycleOffset = i1027[2]
  i1026.cycleOffsetParameter = i1027[3]
  i1026.cycleOffsetParameterActive = !!i1027[4]
  i1026.mirror = !!i1027[5]
  i1026.mirrorParameter = i1027[6]
  i1026.mirrorParameterActive = !!i1027[7]
  i1026.motionId = i1027[8]
  i1026.nameHash = i1027[9]
  i1026.fullPathHash = i1027[10]
  i1026.speed = i1027[11]
  i1026.speedParameter = i1027[12]
  i1026.speedParameterActive = !!i1027[13]
  i1026.tag = i1027[14]
  i1026.tagHash = i1027[15]
  i1026.writeDefaultValues = !!i1027[16]
  var i1029 = i1027[17]
  var i1028 = []
  for(var i = 0; i < i1029.length; i += 2) {
  request.r(i1029[i + 0], i1029[i + 1], 2, i1028, '')
  }
  i1026.behaviours = i1028
  var i1031 = i1027[18]
  var i1030 = []
  for(var i = 0; i < i1031.length; i += 1) {
    i1030.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1031[i + 0]) );
  }
  i1026.transitions = i1030
  return i1026
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1036 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1037 = data
  i1036.fullPath = i1037[0]
  i1036.canTransitionToSelf = !!i1037[1]
  i1036.duration = i1037[2]
  i1036.exitTime = i1037[3]
  i1036.hasExitTime = !!i1037[4]
  i1036.hasFixedDuration = !!i1037[5]
  i1036.interruptionSource = i1037[6]
  i1036.offset = i1037[7]
  i1036.orderedInterruption = !!i1037[8]
  i1036.destinationStateId = i1037[9]
  i1036.isExit = !!i1037[10]
  i1036.mute = !!i1037[11]
  i1036.solo = !!i1037[12]
  var i1039 = i1037[13]
  var i1038 = []
  for(var i = 0; i < i1039.length; i += 1) {
    i1038.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1039[i + 0]) );
  }
  i1036.conditions = i1038
  return i1036
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1044 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1045 = data
  i1044.destinationStateId = i1045[0]
  i1044.isExit = !!i1045[1]
  i1044.mute = !!i1045[2]
  i1044.solo = !!i1045[3]
  var i1047 = i1045[4]
  var i1046 = []
  for(var i = 0; i < i1047.length; i += 1) {
    i1046.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1047[i + 0]) );
  }
  i1044.conditions = i1046
  return i1044
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1050 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1051 = data
  i1050.mode = i1051[0]
  i1050.parameter = i1051[1]
  i1050.threshold = i1051[2]
  return i1050
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1054 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1055 = data
  i1054.defaultBool = !!i1055[0]
  i1054.defaultFloat = i1055[1]
  i1054.defaultInt = i1055[2]
  i1054.name = i1055[3]
  i1054.nameHash = i1055[4]
  i1054.type = i1055[5]
  return i1054
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1056 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1057 = data
  i1056.name = i1057[0]
  i1056.bytes64 = i1057[1]
  i1056.data = i1057[2]
  return i1056
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1058 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1059 = data
  i1058.useSafeMode = !!i1059[0]
  i1058.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1059[1], i1058.safeModeOptions)
  i1058.timeScale = i1059[2]
  i1058.unscaledTimeScale = i1059[3]
  i1058.useSmoothDeltaTime = !!i1059[4]
  i1058.maxSmoothUnscaledTime = i1059[5]
  i1058.rewindCallbackMode = i1059[6]
  i1058.showUnityEditorReport = !!i1059[7]
  i1058.logBehaviour = i1059[8]
  i1058.drawGizmos = !!i1059[9]
  i1058.defaultRecyclable = !!i1059[10]
  i1058.defaultAutoPlay = i1059[11]
  i1058.defaultUpdateType = i1059[12]
  i1058.defaultTimeScaleIndependent = !!i1059[13]
  i1058.defaultEaseType = i1059[14]
  i1058.defaultEaseOvershootOrAmplitude = i1059[15]
  i1058.defaultEasePeriod = i1059[16]
  i1058.defaultAutoKill = !!i1059[17]
  i1058.defaultLoopType = i1059[18]
  i1058.debugMode = !!i1059[19]
  i1058.debugStoreTargetId = !!i1059[20]
  i1058.showPreviewPanel = !!i1059[21]
  i1058.storeSettingsLocation = i1059[22]
  i1058.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1059[23], i1058.modules)
  i1058.createASMDEF = !!i1059[24]
  i1058.showPlayingTweens = !!i1059[25]
  i1058.showPausedTweens = !!i1059[26]
  return i1058
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1060 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1061 = data
  i1060.logBehaviour = i1061[0]
  i1060.nestedTweenFailureBehaviour = i1061[1]
  return i1060
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1062 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1063 = data
  i1062.showPanel = !!i1063[0]
  i1062.audioEnabled = !!i1063[1]
  i1062.physicsEnabled = !!i1063[2]
  i1062.physics2DEnabled = !!i1063[3]
  i1062.spriteEnabled = !!i1063[4]
  i1062.uiEnabled = !!i1063[5]
  i1062.uiToolkitEnabled = !!i1063[6]
  i1062.textMeshProEnabled = !!i1063[7]
  i1062.tk2DEnabled = !!i1063[8]
  i1062.deAudioEnabled = !!i1063[9]
  i1062.deUnityExtendedEnabled = !!i1063[10]
  i1062.epoOutlineEnabled = !!i1063[11]
  return i1062
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i1064 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i1065 = data
  i1064.normalStyle = i1065[0]
  i1064.normalSpacingOffset = i1065[1]
  i1064.boldStyle = i1065[2]
  i1064.boldSpacing = i1065[3]
  i1064.italicStyle = i1065[4]
  i1064.tabSize = i1065[5]
  request.r(i1065[6], i1065[7], 0, i1064, 'atlas')
  i1064.m_SourceFontFileGUID = i1065[8]
  i1064.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i1065[9], i1064.m_CreationSettings)
  request.r(i1065[10], i1065[11], 0, i1064, 'm_SourceFontFile')
  i1064.m_SourceFontFilePath = i1065[12]
  i1064.m_AtlasPopulationMode = i1065[13]
  i1064.InternalDynamicOS = !!i1065[14]
  var i1067 = i1065[15]
  var i1066 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i1067.length; i += 1) {
    i1066.add(request.d('UnityEngine.TextCore.Glyph', i1067[i + 0]));
  }
  i1064.m_GlyphTable = i1066
  var i1069 = i1065[16]
  var i1068 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i1069.length; i += 1) {
    i1068.add(request.d('TMPro.TMP_Character', i1069[i + 0]));
  }
  i1064.m_CharacterTable = i1068
  var i1071 = i1065[17]
  var i1070 = []
  for(var i = 0; i < i1071.length; i += 2) {
  request.r(i1071[i + 0], i1071[i + 1], 2, i1070, '')
  }
  i1064.m_AtlasTextures = i1070
  i1064.m_AtlasTextureIndex = i1065[18]
  i1064.m_IsMultiAtlasTexturesEnabled = !!i1065[19]
  i1064.m_GetFontFeatures = !!i1065[20]
  i1064.m_ClearDynamicDataOnBuild = !!i1065[21]
  i1064.m_AtlasWidth = i1065[22]
  i1064.m_AtlasHeight = i1065[23]
  i1064.m_AtlasPadding = i1065[24]
  i1064.m_AtlasRenderMode = i1065[25]
  var i1073 = i1065[26]
  var i1072 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1073.length; i += 1) {
    i1072.add(request.d('UnityEngine.TextCore.GlyphRect', i1073[i + 0]));
  }
  i1064.m_UsedGlyphRects = i1072
  var i1075 = i1065[27]
  var i1074 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1075.length; i += 1) {
    i1074.add(request.d('UnityEngine.TextCore.GlyphRect', i1075[i + 0]));
  }
  i1064.m_FreeGlyphRects = i1074
  i1064.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i1065[28], i1064.m_FontFeatureTable)
  i1064.m_ShouldReimportFontFeatures = !!i1065[29]
  var i1077 = i1065[30]
  var i1076 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1077.length; i += 2) {
  request.r(i1077[i + 0], i1077[i + 1], 1, i1076, '')
  }
  i1064.m_FallbackFontAssetTable = i1076
  var i1079 = i1065[31]
  var i1078 = []
  for(var i = 0; i < i1079.length; i += 1) {
    i1078.push( request.d('TMPro.TMP_FontWeightPair', i1079[i + 0]) );
  }
  i1064.m_FontWeightTable = i1078
  var i1081 = i1065[32]
  var i1080 = []
  for(var i = 0; i < i1081.length; i += 1) {
    i1080.push( request.d('TMPro.TMP_FontWeightPair', i1081[i + 0]) );
  }
  i1064.fontWeights = i1080
  i1064.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i1065[33], i1064.m_fontInfo)
  var i1083 = i1065[34]
  var i1082 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i1083.length; i += 1) {
    i1082.add(request.d('TMPro.TMP_Glyph', i1083[i + 0]));
  }
  i1064.m_glyphInfoList = i1082
  i1064.m_KerningTable = request.d('TMPro.KerningTable', i1065[35], i1064.m_KerningTable)
  var i1085 = i1065[36]
  var i1084 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1085.length; i += 2) {
  request.r(i1085[i + 0], i1085[i + 1], 1, i1084, '')
  }
  i1064.fallbackFontAssets = i1084
  i1064.m_Version = i1065[37]
  i1064.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1065[38], i1064.m_FaceInfo)
  request.r(i1065[39], i1065[40], 0, i1064, 'm_Material')
  return i1064
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i1086 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i1087 = data
  i1086.sourceFontFileName = i1087[0]
  i1086.sourceFontFileGUID = i1087[1]
  i1086.faceIndex = i1087[2]
  i1086.pointSizeSamplingMode = i1087[3]
  i1086.pointSize = i1087[4]
  i1086.padding = i1087[5]
  i1086.paddingMode = i1087[6]
  i1086.packingMode = i1087[7]
  i1086.atlasWidth = i1087[8]
  i1086.atlasHeight = i1087[9]
  i1086.characterSetSelectionMode = i1087[10]
  i1086.characterSequence = i1087[11]
  i1086.referencedFontAssetGUID = i1087[12]
  i1086.referencedTextAssetGUID = i1087[13]
  i1086.fontStyle = i1087[14]
  i1086.fontStyleModifier = i1087[15]
  i1086.renderMode = i1087[16]
  i1086.includeFontFeatures = !!i1087[17]
  return i1086
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i1090 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i1091 = data
  i1090.m_Index = i1091[0]
  i1090.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1091[1], i1090.m_Metrics)
  i1090.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1091[2], i1090.m_GlyphRect)
  i1090.m_Scale = i1091[3]
  i1090.m_AtlasIndex = i1091[4]
  i1090.m_ClassDefinitionType = i1091[5]
  return i1090
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i1094 = root || request.c( 'TMPro.TMP_Character' )
  var i1095 = data
  i1094.m_ElementType = i1095[0]
  i1094.m_Unicode = i1095[1]
  i1094.m_GlyphIndex = i1095[2]
  i1094.m_Scale = i1095[3]
  return i1094
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

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i1102 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i1103 = data
  var i1105 = i1103[0]
  var i1104 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i1105.length; i += 1) {
    i1104.add(request.d('TMPro.MultipleSubstitutionRecord', i1105[i + 0]));
  }
  i1102.m_MultipleSubstitutionRecords = i1104
  var i1107 = i1103[1]
  var i1106 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i1107.length; i += 1) {
    i1106.add(request.d('TMPro.LigatureSubstitutionRecord', i1107[i + 0]));
  }
  i1102.m_LigatureSubstitutionRecords = i1106
  var i1109 = i1103[2]
  var i1108 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i1109.length; i += 1) {
    i1108.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i1109[i + 0]));
  }
  i1102.m_GlyphPairAdjustmentRecords = i1108
  var i1111 = i1103[3]
  var i1110 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i1111.length; i += 1) {
    i1110.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i1111[i + 0]));
  }
  i1102.m_MarkToBaseAdjustmentRecords = i1110
  var i1113 = i1103[4]
  var i1112 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i1113.length; i += 1) {
    i1112.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i1113[i + 0]));
  }
  i1102.m_MarkToMarkAdjustmentRecords = i1112
  return i1102
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i1116 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i1117 = data
  i1116.m_TargetGlyphID = i1117[0]
  i1116.m_SubstituteGlyphIDs = i1117[1]
  return i1116
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i1120 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i1121 = data
  i1120.m_ComponentGlyphIDs = i1121[0]
  i1120.m_LigatureGlyphID = i1121[1]
  return i1120
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i1124 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i1125 = data
  i1124.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i1125[0], i1124.m_FirstAdjustmentRecord)
  i1124.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i1125[1], i1124.m_SecondAdjustmentRecord)
  i1124.m_FeatureLookupFlags = i1125[2]
  return i1124
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1126 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i1127 = data
  i1126.m_GlyphIndex = i1127[0]
  i1126.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i1127[1], i1126.m_GlyphValueRecord)
  return i1126
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i1128 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i1129 = data
  i1128.m_XPlacement = i1129[0]
  i1128.m_YPlacement = i1129[1]
  i1128.m_XAdvance = i1129[2]
  i1128.m_YAdvance = i1129[3]
  return i1128
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i1132 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i1133 = data
  i1132.m_BaseGlyphID = i1133[0]
  i1132.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i1133[1], i1132.m_BaseGlyphAnchorPoint)
  i1132.m_MarkGlyphID = i1133[2]
  i1132.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i1133[3], i1132.m_MarkPositionAdjustment)
  return i1132
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i1136 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i1137 = data
  i1136.m_BaseMarkGlyphID = i1137[0]
  i1136.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i1137[1], i1136.m_BaseMarkGlyphAnchorPoint)
  i1136.m_CombiningMarkGlyphID = i1137[2]
  i1136.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i1137[3], i1136.m_CombiningMarkPositionAdjustment)
  return i1136
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i1142 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i1143 = data
  request.r(i1143[0], i1143[1], 0, i1142, 'regularTypeface')
  request.r(i1143[2], i1143[3], 0, i1142, 'italicTypeface')
  return i1142
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i1144 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i1145 = data
  i1144.Name = i1145[0]
  i1144.PointSize = i1145[1]
  i1144.Scale = i1145[2]
  i1144.CharacterCount = i1145[3]
  i1144.LineHeight = i1145[4]
  i1144.Baseline = i1145[5]
  i1144.Ascender = i1145[6]
  i1144.CapHeight = i1145[7]
  i1144.Descender = i1145[8]
  i1144.CenterLine = i1145[9]
  i1144.SuperscriptOffset = i1145[10]
  i1144.SubscriptOffset = i1145[11]
  i1144.SubSize = i1145[12]
  i1144.Underline = i1145[13]
  i1144.UnderlineThickness = i1145[14]
  i1144.strikethrough = i1145[15]
  i1144.strikethroughThickness = i1145[16]
  i1144.TabWidth = i1145[17]
  i1144.Padding = i1145[18]
  i1144.AtlasWidth = i1145[19]
  i1144.AtlasHeight = i1145[20]
  return i1144
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i1148 = root || request.c( 'TMPro.TMP_Glyph' )
  var i1149 = data
  i1148.id = i1149[0]
  i1148.x = i1149[1]
  i1148.y = i1149[2]
  i1148.width = i1149[3]
  i1148.height = i1149[4]
  i1148.xOffset = i1149[5]
  i1148.yOffset = i1149[6]
  i1148.xAdvance = i1149[7]
  i1148.scale = i1149[8]
  return i1148
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i1150 = root || request.c( 'TMPro.KerningTable' )
  var i1151 = data
  var i1153 = i1151[0]
  var i1152 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i1153.length; i += 1) {
    i1152.add(request.d('TMPro.KerningPair', i1153[i + 0]));
  }
  i1150.kerningPairs = i1152
  return i1150
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i1156 = root || request.c( 'TMPro.KerningPair' )
  var i1157 = data
  i1156.xOffset = i1157[0]
  i1156.m_FirstGlyph = i1157[1]
  i1156.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1157[2], i1156.m_FirstGlyphAdjustments)
  i1156.m_SecondGlyph = i1157[3]
  i1156.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1157[4], i1156.m_SecondGlyphAdjustments)
  i1156.m_IgnoreSpacingAdjustments = !!i1157[5]
  return i1156
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1158 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1159 = data
  i1158.m_FaceIndex = i1159[0]
  i1158.m_FamilyName = i1159[1]
  i1158.m_StyleName = i1159[2]
  i1158.m_PointSize = i1159[3]
  i1158.m_Scale = i1159[4]
  i1158.m_UnitsPerEM = i1159[5]
  i1158.m_LineHeight = i1159[6]
  i1158.m_AscentLine = i1159[7]
  i1158.m_CapLine = i1159[8]
  i1158.m_MeanLine = i1159[9]
  i1158.m_Baseline = i1159[10]
  i1158.m_DescentLine = i1159[11]
  i1158.m_SuperscriptOffset = i1159[12]
  i1158.m_SuperscriptSize = i1159[13]
  i1158.m_SubscriptOffset = i1159[14]
  i1158.m_SubscriptSize = i1159[15]
  i1158.m_UnderlineOffset = i1159[16]
  i1158.m_UnderlineThickness = i1159[17]
  i1158.m_StrikethroughOffset = i1159[18]
  i1158.m_StrikethroughThickness = i1159[19]
  i1158.m_TabWidth = i1159[20]
  return i1158
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1160 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1161 = data
  i1160.m_Width = i1161[0]
  i1160.m_Height = i1161[1]
  i1160.m_HorizontalBearingX = i1161[2]
  i1160.m_HorizontalBearingY = i1161[3]
  i1160.m_HorizontalAdvance = i1161[4]
  return i1160
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1162 = root || request.c( 'TMPro.TMP_Settings' )
  var i1163 = data
  i1162.assetVersion = i1163[0]
  i1162.m_TextWrappingMode = i1163[1]
  i1162.m_enableKerning = !!i1163[2]
  var i1165 = i1163[3]
  var i1164 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i1165.length; i += 1) {
    i1164.add(i1165[i + 0]);
  }
  i1162.m_ActiveFontFeatures = i1164
  i1162.m_enableExtraPadding = !!i1163[4]
  i1162.m_enableTintAllSprites = !!i1163[5]
  i1162.m_enableParseEscapeCharacters = !!i1163[6]
  i1162.m_EnableRaycastTarget = !!i1163[7]
  i1162.m_GetFontFeaturesAtRuntime = !!i1163[8]
  i1162.m_missingGlyphCharacter = i1163[9]
  i1162.m_ClearDynamicDataOnBuild = !!i1163[10]
  i1162.m_warningsDisabled = !!i1163[11]
  request.r(i1163[12], i1163[13], 0, i1162, 'm_defaultFontAsset')
  i1162.m_defaultFontAssetPath = i1163[14]
  i1162.m_defaultFontSize = i1163[15]
  i1162.m_defaultAutoSizeMinRatio = i1163[16]
  i1162.m_defaultAutoSizeMaxRatio = i1163[17]
  i1162.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1163[18], i1163[19] )
  i1162.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1163[20], i1163[21] )
  i1162.m_autoSizeTextContainer = !!i1163[22]
  i1162.m_IsTextObjectScaleStatic = !!i1163[23]
  var i1167 = i1163[24]
  var i1166 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1167.length; i += 2) {
  request.r(i1167[i + 0], i1167[i + 1], 1, i1166, '')
  }
  i1162.m_fallbackFontAssets = i1166
  i1162.m_matchMaterialPreset = !!i1163[25]
  i1162.m_HideSubTextObjects = !!i1163[26]
  request.r(i1163[27], i1163[28], 0, i1162, 'm_defaultSpriteAsset')
  i1162.m_defaultSpriteAssetPath = i1163[29]
  i1162.m_enableEmojiSupport = !!i1163[30]
  i1162.m_MissingCharacterSpriteUnicode = i1163[31]
  var i1169 = i1163[32]
  var i1168 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i1169.length; i += 2) {
  request.r(i1169[i + 0], i1169[i + 1], 1, i1168, '')
  }
  i1162.m_EmojiFallbackTextAssets = i1168
  i1162.m_defaultColorGradientPresetsPath = i1163[33]
  request.r(i1163[34], i1163[35], 0, i1162, 'm_defaultStyleSheet')
  i1162.m_StyleSheetsResourcePath = i1163[36]
  request.r(i1163[37], i1163[38], 0, i1162, 'm_leadingCharacters')
  request.r(i1163[39], i1163[40], 0, i1162, 'm_followingCharacters')
  i1162.m_UseModernHangulLineBreakingRules = !!i1163[41]
  return i1162
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1174 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1175 = data
  request.r(i1175[0], i1175[1], 0, i1174, 'spriteSheet')
  var i1177 = i1175[2]
  var i1176 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1177.length; i += 1) {
    i1176.add(request.d('TMPro.TMP_Sprite', i1177[i + 0]));
  }
  i1174.spriteInfoList = i1176
  var i1179 = i1175[3]
  var i1178 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1179.length; i += 2) {
  request.r(i1179[i + 0], i1179[i + 1], 1, i1178, '')
  }
  i1174.fallbackSpriteAssets = i1178
  var i1181 = i1175[4]
  var i1180 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1181.length; i += 1) {
    i1180.add(request.d('TMPro.TMP_SpriteCharacter', i1181[i + 0]));
  }
  i1174.m_SpriteCharacterTable = i1180
  var i1183 = i1175[5]
  var i1182 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1183.length; i += 1) {
    i1182.add(request.d('TMPro.TMP_SpriteGlyph', i1183[i + 0]));
  }
  i1174.m_GlyphTable = i1182
  i1174.m_Version = i1175[6]
  i1174.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1175[7], i1174.m_FaceInfo)
  request.r(i1175[8], i1175[9], 0, i1174, 'm_Material')
  return i1174
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1186 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1187 = data
  i1186.name = i1187[0]
  i1186.hashCode = i1187[1]
  i1186.unicode = i1187[2]
  i1186.pivot = new pc.Vec2( i1187[3], i1187[4] )
  request.r(i1187[5], i1187[6], 0, i1186, 'sprite')
  i1186.id = i1187[7]
  i1186.x = i1187[8]
  i1186.y = i1187[9]
  i1186.width = i1187[10]
  i1186.height = i1187[11]
  i1186.xOffset = i1187[12]
  i1186.yOffset = i1187[13]
  i1186.xAdvance = i1187[14]
  i1186.scale = i1187[15]
  return i1186
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1192 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1193 = data
  i1192.m_Name = i1193[0]
  i1192.m_ElementType = i1193[1]
  i1192.m_Unicode = i1193[2]
  i1192.m_GlyphIndex = i1193[3]
  i1192.m_Scale = i1193[4]
  return i1192
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1196 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1197 = data
  request.r(i1197[0], i1197[1], 0, i1196, 'sprite')
  i1196.m_Index = i1197[2]
  i1196.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1197[3], i1196.m_Metrics)
  i1196.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1197[4], i1196.m_GlyphRect)
  i1196.m_Scale = i1197[5]
  i1196.m_AtlasIndex = i1197[6]
  i1196.m_ClassDefinitionType = i1197[7]
  return i1196
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1198 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1199 = data
  var i1201 = i1199[0]
  var i1200 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1201.length; i += 1) {
    i1200.add(request.d('TMPro.TMP_Style', i1201[i + 0]));
  }
  i1198.m_StyleList = i1200
  return i1198
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1204 = root || request.c( 'TMPro.TMP_Style' )
  var i1205 = data
  i1204.m_Name = i1205[0]
  i1204.m_HashCode = i1205[1]
  i1204.m_OpeningDefinition = i1205[2]
  i1204.m_ClosingDefinition = i1205[3]
  i1204.m_OpeningTagArray = i1205[4]
  i1204.m_ClosingTagArray = i1205[5]
  return i1204
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1206 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1207 = data
  var i1209 = i1207[0]
  var i1208 = []
  for(var i = 0; i < i1209.length; i += 1) {
    i1208.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1209[i + 0]) );
  }
  i1206.files = i1208
  i1206.componentToPrefabIds = i1207[1]
  return i1206
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1212 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1213 = data
  i1212.path = i1213[0]
  request.r(i1213[1], i1213[2], 0, i1212, 'unityObject')
  return i1212
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1214 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1215 = data
  var i1217 = i1215[0]
  var i1216 = []
  for(var i = 0; i < i1217.length; i += 1) {
    i1216.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1217[i + 0]) );
  }
  i1214.scriptsExecutionOrder = i1216
  var i1219 = i1215[1]
  var i1218 = []
  for(var i = 0; i < i1219.length; i += 1) {
    i1218.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1219[i + 0]) );
  }
  i1214.sortingLayers = i1218
  var i1221 = i1215[2]
  var i1220 = []
  for(var i = 0; i < i1221.length; i += 1) {
    i1220.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1221[i + 0]) );
  }
  i1214.cullingLayers = i1220
  i1214.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1215[3], i1214.timeSettings)
  i1214.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1215[4], i1214.physicsSettings)
  i1214.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1215[5], i1214.physics2DSettings)
  i1214.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1215[6], i1214.qualitySettings)
  i1214.enableRealtimeShadows = !!i1215[7]
  i1214.enableAutoInstancing = !!i1215[8]
  i1214.enableStaticBatching = !!i1215[9]
  i1214.enableDynamicBatching = !!i1215[10]
  i1214.lightmapEncodingQuality = i1215[11]
  i1214.desiredColorSpace = i1215[12]
  var i1223 = i1215[13]
  var i1222 = []
  for(var i = 0; i < i1223.length; i += 1) {
    i1222.push( i1223[i + 0] );
  }
  i1214.allTags = i1222
  return i1214
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1226 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1227 = data
  i1226.name = i1227[0]
  i1226.value = i1227[1]
  return i1226
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1230 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1231 = data
  i1230.id = i1231[0]
  i1230.name = i1231[1]
  i1230.value = i1231[2]
  return i1230
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1234 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1235 = data
  i1234.id = i1235[0]
  i1234.name = i1235[1]
  return i1234
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1236 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1237 = data
  i1236.fixedDeltaTime = i1237[0]
  i1236.maximumDeltaTime = i1237[1]
  i1236.timeScale = i1237[2]
  i1236.maximumParticleTimestep = i1237[3]
  return i1236
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1238 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1239 = data
  i1238.gravity = new pc.Vec3( i1239[0], i1239[1], i1239[2] )
  i1238.defaultSolverIterations = i1239[3]
  i1238.bounceThreshold = i1239[4]
  i1238.autoSyncTransforms = !!i1239[5]
  i1238.autoSimulation = !!i1239[6]
  var i1241 = i1239[7]
  var i1240 = []
  for(var i = 0; i < i1241.length; i += 1) {
    i1240.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1241[i + 0]) );
  }
  i1238.collisionMatrix = i1240
  return i1238
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1244 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1245 = data
  i1244.enabled = !!i1245[0]
  i1244.layerId = i1245[1]
  i1244.otherLayerId = i1245[2]
  return i1244
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1246 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1247 = data
  request.r(i1247[0], i1247[1], 0, i1246, 'material')
  i1246.gravity = new pc.Vec2( i1247[2], i1247[3] )
  i1246.positionIterations = i1247[4]
  i1246.velocityIterations = i1247[5]
  i1246.velocityThreshold = i1247[6]
  i1246.maxLinearCorrection = i1247[7]
  i1246.maxAngularCorrection = i1247[8]
  i1246.maxTranslationSpeed = i1247[9]
  i1246.maxRotationSpeed = i1247[10]
  i1246.baumgarteScale = i1247[11]
  i1246.baumgarteTOIScale = i1247[12]
  i1246.timeToSleep = i1247[13]
  i1246.linearSleepTolerance = i1247[14]
  i1246.angularSleepTolerance = i1247[15]
  i1246.defaultContactOffset = i1247[16]
  i1246.autoSimulation = !!i1247[17]
  i1246.queriesHitTriggers = !!i1247[18]
  i1246.queriesStartInColliders = !!i1247[19]
  i1246.callbacksOnDisable = !!i1247[20]
  i1246.reuseCollisionCallbacks = !!i1247[21]
  i1246.autoSyncTransforms = !!i1247[22]
  var i1249 = i1247[23]
  var i1248 = []
  for(var i = 0; i < i1249.length; i += 1) {
    i1248.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1249[i + 0]) );
  }
  i1246.collisionMatrix = i1248
  return i1246
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1252 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1253 = data
  i1252.enabled = !!i1253[0]
  i1252.layerId = i1253[1]
  i1252.otherLayerId = i1253[2]
  return i1252
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1254 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1255 = data
  var i1257 = i1255[0]
  var i1256 = []
  for(var i = 0; i < i1257.length; i += 1) {
    i1256.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1257[i + 0]) );
  }
  i1254.qualityLevels = i1256
  var i1259 = i1255[1]
  var i1258 = []
  for(var i = 0; i < i1259.length; i += 1) {
    i1258.push( i1259[i + 0] );
  }
  i1254.names = i1258
  i1254.shadows = i1255[2]
  i1254.anisotropicFiltering = i1255[3]
  i1254.antiAliasing = i1255[4]
  i1254.lodBias = i1255[5]
  i1254.shadowCascades = i1255[6]
  i1254.shadowDistance = i1255[7]
  i1254.shadowmaskMode = i1255[8]
  i1254.shadowProjection = i1255[9]
  i1254.shadowResolution = i1255[10]
  i1254.softParticles = !!i1255[11]
  i1254.softVegetation = !!i1255[12]
  i1254.activeColorSpace = i1255[13]
  i1254.desiredColorSpace = i1255[14]
  i1254.masterTextureLimit = i1255[15]
  i1254.maxQueuedFrames = i1255[16]
  i1254.particleRaycastBudget = i1255[17]
  i1254.pixelLightCount = i1255[18]
  i1254.realtimeReflectionProbes = !!i1255[19]
  i1254.shadowCascade2Split = i1255[20]
  i1254.shadowCascade4Split = new pc.Vec3( i1255[21], i1255[22], i1255[23] )
  i1254.streamingMipmapsActive = !!i1255[24]
  i1254.vSyncCount = i1255[25]
  i1254.asyncUploadBufferSize = i1255[26]
  i1254.asyncUploadTimeSlice = i1255[27]
  i1254.billboardsFaceCameraPosition = !!i1255[28]
  i1254.shadowNearPlaneOffset = i1255[29]
  i1254.streamingMipmapsMemoryBudget = i1255[30]
  i1254.maximumLODLevel = i1255[31]
  i1254.streamingMipmapsAddAllCameras = !!i1255[32]
  i1254.streamingMipmapsMaxLevelReduction = i1255[33]
  i1254.streamingMipmapsRenderersPerFrame = i1255[34]
  i1254.resolutionScalingFixedDPIFactor = i1255[35]
  i1254.streamingMipmapsMaxFileIORequests = i1255[36]
  i1254.currentQualityLevel = i1255[37]
  return i1254
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1264 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1265 = data
  i1264.weight = i1265[0]
  i1264.vertices = i1265[1]
  i1264.normals = i1265[2]
  i1264.tangents = i1265[3]
  return i1264
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i1266 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i1267 = data
  i1266.m_XCoordinate = i1267[0]
  i1266.m_YCoordinate = i1267[1]
  return i1266
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i1268 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i1269 = data
  i1268.m_XPositionAdjustment = i1269[0]
  i1268.m_YPositionAdjustment = i1269[1]
  return i1268
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1270 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1271 = data
  i1270.xPlacement = i1271[0]
  i1270.yPlacement = i1271[1]
  i1270.xAdvance = i1271[2]
  i1270.yAdvance = i1271[3]
  return i1270
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"43":[44],"45":[44],"46":[44],"47":[44],"48":[44],"49":[44],"50":[51],"52":[2],"53":[54],"55":[54],"56":[54],"57":[54],"58":[54],"59":[54],"60":[61],"62":[61],"63":[61],"64":[61],"65":[61],"66":[61],"67":[61],"68":[61],"69":[61],"70":[61],"71":[61],"72":[61],"73":[61],"74":[2],"75":[76],"77":[78],"79":[78],"22":[21],"6":[2],"80":[61],"81":[82],"83":[19],"84":[2],"85":[86],"87":[34],"88":[22],"89":[21],"90":[76,21],"91":[21,25],"92":[21],"93":[25,21],"94":[76],"95":[25,21],"96":[21],"97":[98],"99":[98],"100":[98],"101":[21],"102":[21],"24":[22],"26":[25,21],"103":[21],"7":[22],"104":[21],"105":[21],"106":[21],"107":[21],"108":[21],"109":[21],"110":[21],"111":[21],"112":[21],"113":[25,21],"114":[21],"115":[21],"116":[21],"117":[21],"118":[25,21],"119":[21],"120":[34],"121":[34],"35":[34],"122":[34],"123":[2],"124":[2]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.MonoBehaviour","CameraFollow2D","AutoCameraFit","UnityEngine.UI.CanvasScaler","UnityEngine.Transform","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Mesh","UnityEngine.Material","Ply_SoundManager","UnityEngine.AudioClip","UnityEngine.AudioSource","HaalandGame.HaalandGameManager","UnityEngine.GameObject","UnityEngine.Animator","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.UI.Button","UnityEditor.Animations.AnimatorController","HaalandGame.IconListAnimator","HideOnFirstClick","ScreenHeightPositionAnchor","UnityEngine.BoxCollider","HaalandGame.PlayerSelectable","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_FontAsset","UnityEngine.Font","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","BatStrikeController","SlotTrigger","UnityEngine.BoxCollider2D","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.InputSystem.UI.InputSystemUIInputModule","UnityEngine.InputSystem.UI.TrackedDeviceRaycaster","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.38f1";

Deserializers.productName = "PLY_MiniSoccer";

Deserializers.lunaInitializationTime = "07/15/2026 03:53:54";

Deserializers.lunaDaysRunning = "50.2";

Deserializers.lunaVersion = "7.1.0";

Deserializers.lunaSHA = "cf93782349542fe0b84ad13951a26809f8419628";

Deserializers.creativeName = "PLY_V22";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1735";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4593";

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

Deserializers.buildID = "b5fc22ef-867b-45a5-bf63-d936f8c5a264";

Deserializers.runtimeInitializeOnLoadInfos = [[["Unity","Services","Core","Internal","UnityServicesInitializer","EnableServicesInitializationAsync"],["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["DG","Tweening","DOTween","RuntimeOnLoad"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["Unity","Services","Core","Registration","CorePackageInitializer","InitializeOnLoad"],["Unity","Services","Core","Internal","TaskAsyncOperation","SetScheduler"],["Unity","Services","Core","Environments","Client","Scheduler","EngineStateHelper","Init"],["Unity","Services","Core","Environments","Client","Scheduler","ThreadHelper","Init"],["Ua2CoreInitializeCallback","Register"],["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["Unity","AI","Navigation","NavMeshLink","ClearTrackedList"],["Unity","AI","Navigation","NavMeshSurface","ClearNavMeshSurfaces"],["Unity","AI","Navigation","NavMeshModifierVolume","ClearNavMeshModifiers"],["Unity","AI","Navigation","NavMeshModifier","ClearNavMeshModifiers"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["Unity","Services","Core","Internal","UnityServicesInitializer","CreateStaticInstance"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[["Unity","Services","Core","Environments","Client","Http","JsonHelpers","RegisterTypesForAOT"]],[["Unity","Services","Core","UnityThreadUtils","CaptureUnityThreadInfo"],["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

