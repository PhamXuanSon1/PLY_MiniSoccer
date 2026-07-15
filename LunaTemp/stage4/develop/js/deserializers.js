var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i634 = root || request.c( 'UnityEngine.JointSpring' )
  var i635 = data
  i634.spring = i635[0]
  i634.damper = i635[1]
  i634.targetPosition = i635[2]
  return i634
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i636 = root || request.c( 'UnityEngine.JointMotor' )
  var i637 = data
  i636.m_TargetVelocity = i637[0]
  i636.m_Force = i637[1]
  i636.m_FreeSpin = i637[2]
  return i636
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i638 = root || request.c( 'UnityEngine.JointLimits' )
  var i639 = data
  i638.m_Min = i639[0]
  i638.m_Max = i639[1]
  i638.m_Bounciness = i639[2]
  i638.m_BounceMinVelocity = i639[3]
  i638.m_ContactDistance = i639[4]
  i638.minBounce = i639[5]
  i638.maxBounce = i639[6]
  return i638
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i640 = root || request.c( 'UnityEngine.JointDrive' )
  var i641 = data
  i640.m_PositionSpring = i641[0]
  i640.m_PositionDamper = i641[1]
  i640.m_MaximumForce = i641[2]
  i640.m_UseAcceleration = i641[3]
  return i640
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i642 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i643 = data
  i642.m_Spring = i643[0]
  i642.m_Damper = i643[1]
  return i642
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i644 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i645 = data
  i644.m_Limit = i645[0]
  i644.m_Bounciness = i645[1]
  i644.m_ContactDistance = i645[2]
  return i644
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i646 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i647 = data
  i646.m_ExtremumSlip = i647[0]
  i646.m_ExtremumValue = i647[1]
  i646.m_AsymptoteSlip = i647[2]
  i646.m_AsymptoteValue = i647[3]
  i646.m_Stiffness = i647[4]
  return i646
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i648 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i649 = data
  i648.m_LowerAngle = i649[0]
  i648.m_UpperAngle = i649[1]
  return i648
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i650 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i651 = data
  i650.m_MotorSpeed = i651[0]
  i650.m_MaximumMotorTorque = i651[1]
  return i650
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i652 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i653 = data
  i652.m_DampingRatio = i653[0]
  i652.m_Frequency = i653[1]
  i652.m_Angle = i653[2]
  return i652
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i654 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i655 = data
  i654.m_LowerTranslation = i655[0]
  i654.m_UpperTranslation = i655[1]
  return i654
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i656 = root || new pc.UnityMaterial()
  var i657 = data
  i656.name = i657[0]
  request.r(i657[1], i657[2], 0, i656, 'shader')
  i656.renderQueue = i657[3]
  i656.enableInstancing = !!i657[4]
  var i659 = i657[5]
  var i658 = []
  for(var i = 0; i < i659.length; i += 1) {
    i658.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i659[i + 0]) );
  }
  i656.floatParameters = i658
  var i661 = i657[6]
  var i660 = []
  for(var i = 0; i < i661.length; i += 1) {
    i660.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i661[i + 0]) );
  }
  i656.colorParameters = i660
  var i663 = i657[7]
  var i662 = []
  for(var i = 0; i < i663.length; i += 1) {
    i662.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i663[i + 0]) );
  }
  i656.vectorParameters = i662
  var i665 = i657[8]
  var i664 = []
  for(var i = 0; i < i665.length; i += 1) {
    i664.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i665[i + 0]) );
  }
  i656.textureParameters = i664
  var i667 = i657[9]
  var i666 = []
  for(var i = 0; i < i667.length; i += 1) {
    i666.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i667[i + 0]) );
  }
  i656.materialFlags = i666
  return i656
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i670 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i671 = data
  i670.name = i671[0]
  i670.value = i671[1]
  return i670
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i674 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i675 = data
  i674.name = i675[0]
  i674.value = new pc.Color(i675[1], i675[2], i675[3], i675[4])
  return i674
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i678 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i679 = data
  i678.name = i679[0]
  i678.value = new pc.Vec4( i679[1], i679[2], i679[3], i679[4] )
  return i678
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i682 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i683 = data
  i682.name = i683[0]
  request.r(i683[1], i683[2], 0, i682, 'value')
  return i682
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i686 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i687 = data
  i686.name = i687[0]
  i686.enabled = !!i687[1]
  return i686
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i688 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i689 = data
  i688.name = i689[0]
  i688.width = i689[1]
  i688.height = i689[2]
  i688.mipmapCount = i689[3]
  i688.anisoLevel = i689[4]
  i688.filterMode = i689[5]
  i688.hdr = !!i689[6]
  i688.format = i689[7]
  i688.wrapMode = i689[8]
  i688.alphaIsTransparency = !!i689[9]
  i688.alphaSource = i689[10]
  i688.graphicsFormat = i689[11]
  i688.sRGBTexture = !!i689[12]
  i688.desiredColorSpace = i689[13]
  i688.wrapU = i689[14]
  i688.wrapV = i689[15]
  return i688
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i690 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i691 = data
  i690.name = i691[0]
  i690.halfPrecision = !!i691[1]
  i690.useSimplification = !!i691[2]
  i690.useUInt32IndexFormat = !!i691[3]
  i690.vertexCount = i691[4]
  i690.aabb = i691[5]
  var i693 = i691[6]
  var i692 = []
  for(var i = 0; i < i693.length; i += 1) {
    i692.push( !!i693[i + 0] );
  }
  i690.streams = i692
  i690.vertices = i691[7]
  var i695 = i691[8]
  var i694 = []
  for(var i = 0; i < i695.length; i += 1) {
    i694.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i695[i + 0]) );
  }
  i690.subMeshes = i694
  var i697 = i691[9]
  var i696 = []
  for(var i = 0; i < i697.length; i += 16) {
    i696.push( new pc.Mat4().setData(i697[i + 0], i697[i + 1], i697[i + 2], i697[i + 3],  i697[i + 4], i697[i + 5], i697[i + 6], i697[i + 7],  i697[i + 8], i697[i + 9], i697[i + 10], i697[i + 11],  i697[i + 12], i697[i + 13], i697[i + 14], i697[i + 15]) );
  }
  i690.bindposes = i696
  var i699 = i691[10]
  var i698 = []
  for(var i = 0; i < i699.length; i += 1) {
    i698.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i699[i + 0]) );
  }
  i690.blendShapes = i698
  return i690
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i704 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i705 = data
  i704.triangles = i705[0]
  return i704
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i710 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i711 = data
  i710.name = i711[0]
  var i713 = i711[1]
  var i712 = []
  for(var i = 0; i < i713.length; i += 1) {
    i712.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i713[i + 0]) );
  }
  i710.frames = i712
  return i710
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i714 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i715 = data
  i714.name = i715[0]
  i714.index = i715[1]
  i714.startup = !!i715[2]
  return i714
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i716 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i717 = data
  i716.aspect = i717[0]
  i716.orthographic = !!i717[1]
  i716.orthographicSize = i717[2]
  i716.backgroundColor = new pc.Color(i717[3], i717[4], i717[5], i717[6])
  i716.nearClipPlane = i717[7]
  i716.farClipPlane = i717[8]
  i716.fieldOfView = i717[9]
  i716.depth = i717[10]
  i716.clearFlags = i717[11]
  i716.cullingMask = i717[12]
  i716.rect = i717[13]
  request.r(i717[14], i717[15], 0, i716, 'targetTexture')
  i716.usePhysicalProperties = !!i717[16]
  i716.focalLength = i717[17]
  i716.sensorSize = new pc.Vec2( i717[18], i717[19] )
  i716.lensShift = new pc.Vec2( i717[20], i717[21] )
  i716.gateFit = i717[22]
  i716.commandBufferCount = i717[23]
  i716.cameraType = i717[24]
  i716.enabled = !!i717[25]
  return i716
}

Deserializers["CameraFollow2D"] = function (request, data, root) {
  var i718 = root || request.c( 'CameraFollow2D' )
  var i719 = data
  request.r(i719[0], i719[1], 0, i718, 'target')
  i718.smoothSpeed = i719[2]
  i718.offset = new pc.Vec3( i719[3], i719[4], i719[5] )
  i718.followY = !!i719[6]
  return i718
}

Deserializers["AutoCameraFit"] = function (request, data, root) {
  var i720 = root || request.c( 'AutoCameraFit' )
  var i721 = data
  request.r(i721[0], i721[1], 0, i720, 'tallScreenObject')
  i720.tallScreenRatioThreshold = i721[2]
  i720.tallScreenYOffset = i721[3]
  request.r(i721[4], i721[5], 0, i720, 'canvasBtn')
  request.r(i721[6], i721[7], 0, i720, 'targetArea')
  i720.paddingLandscape = i721[8]
  i720.paddingPortrait = i721[9]
  i720.extraPaddingSmallScreen = i721[10]
  i720.smallScreenThreshold = i721[11]
  i720.autoUpdateOnResize = !!i721[12]
  i720.adjustInEditMode = !!i721[13]
  return i720
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i722 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i723 = data
  i722.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i723[0], i722.main)
  i722.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i723[1], i722.colorBySpeed)
  i722.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i723[2], i722.colorOverLifetime)
  i722.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i723[3], i722.emission)
  i722.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i723[4], i722.rotationBySpeed)
  i722.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i723[5], i722.rotationOverLifetime)
  i722.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i723[6], i722.shape)
  i722.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i723[7], i722.sizeBySpeed)
  i722.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i723[8], i722.sizeOverLifetime)
  i722.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i723[9], i722.textureSheetAnimation)
  i722.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i723[10], i722.velocityOverLifetime)
  i722.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i723[11], i722.noise)
  i722.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i723[12], i722.inheritVelocity)
  i722.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i723[13], i722.forceOverLifetime)
  i722.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i723[14], i722.limitVelocityOverLifetime)
  i722.useAutoRandomSeed = !!i723[15]
  i722.randomSeed = i723[16]
  return i722
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i724 = root || new pc.ParticleSystemMain()
  var i725 = data
  i724.duration = i725[0]
  i724.loop = !!i725[1]
  i724.prewarm = !!i725[2]
  i724.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i725[3], i724.startDelay)
  i724.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i725[4], i724.startLifetime)
  i724.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i725[5], i724.startSpeed)
  i724.startSize3D = !!i725[6]
  i724.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i725[7], i724.startSizeX)
  i724.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i725[8], i724.startSizeY)
  i724.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i725[9], i724.startSizeZ)
  i724.startRotation3D = !!i725[10]
  i724.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i725[11], i724.startRotationX)
  i724.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i725[12], i724.startRotationY)
  i724.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i725[13], i724.startRotationZ)
  i724.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i725[14], i724.startColor)
  i724.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i725[15], i724.gravityModifier)
  i724.simulationSpace = i725[16]
  request.r(i725[17], i725[18], 0, i724, 'customSimulationSpace')
  i724.simulationSpeed = i725[19]
  i724.useUnscaledTime = !!i725[20]
  i724.scalingMode = i725[21]
  i724.playOnAwake = !!i725[22]
  i724.maxParticles = i725[23]
  i724.emitterVelocityMode = i725[24]
  i724.stopAction = i725[25]
  return i724
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i726 = root || new pc.MinMaxCurve()
  var i727 = data
  i726.mode = i727[0]
  i726.curveMin = new pc.AnimationCurve( { keys_flow: i727[1] } )
  i726.curveMax = new pc.AnimationCurve( { keys_flow: i727[2] } )
  i726.curveMultiplier = i727[3]
  i726.constantMin = i727[4]
  i726.constantMax = i727[5]
  return i726
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i728 = root || new pc.MinMaxGradient()
  var i729 = data
  i728.mode = i729[0]
  i728.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i729[1], i728.gradientMin)
  i728.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i729[2], i728.gradientMax)
  i728.colorMin = new pc.Color(i729[3], i729[4], i729[5], i729[6])
  i728.colorMax = new pc.Color(i729[7], i729[8], i729[9], i729[10])
  return i728
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i730 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i731 = data
  i730.mode = i731[0]
  var i733 = i731[1]
  var i732 = []
  for(var i = 0; i < i733.length; i += 1) {
    i732.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i733[i + 0]) );
  }
  i730.colorKeys = i732
  var i735 = i731[2]
  var i734 = []
  for(var i = 0; i < i735.length; i += 1) {
    i734.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i735[i + 0]) );
  }
  i730.alphaKeys = i734
  return i730
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i736 = root || new pc.ParticleSystemColorBySpeed()
  var i737 = data
  i736.enabled = !!i737[0]
  i736.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i737[1], i736.color)
  i736.range = new pc.Vec2( i737[2], i737[3] )
  return i736
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i740 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i741 = data
  i740.color = new pc.Color(i741[0], i741[1], i741[2], i741[3])
  i740.time = i741[4]
  return i740
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i744 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i745 = data
  i744.alpha = i745[0]
  i744.time = i745[1]
  return i744
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i746 = root || new pc.ParticleSystemColorOverLifetime()
  var i747 = data
  i746.enabled = !!i747[0]
  i746.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i747[1], i746.color)
  return i746
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i748 = root || new pc.ParticleSystemEmitter()
  var i749 = data
  i748.enabled = !!i749[0]
  i748.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i749[1], i748.rateOverTime)
  i748.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i749[2], i748.rateOverDistance)
  var i751 = i749[3]
  var i750 = []
  for(var i = 0; i < i751.length; i += 1) {
    i750.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i751[i + 0]) );
  }
  i748.bursts = i750
  return i748
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i754 = root || new pc.ParticleSystemBurst()
  var i755 = data
  i754.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i755[0], i754.count)
  i754.cycleCount = i755[1]
  i754.minCount = i755[2]
  i754.maxCount = i755[3]
  i754.repeatInterval = i755[4]
  i754.time = i755[5]
  return i754
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i756 = root || new pc.ParticleSystemRotationBySpeed()
  var i757 = data
  i756.enabled = !!i757[0]
  i756.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i757[1], i756.x)
  i756.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i757[2], i756.y)
  i756.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i757[3], i756.z)
  i756.separateAxes = !!i757[4]
  i756.range = new pc.Vec2( i757[5], i757[6] )
  return i756
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i758 = root || new pc.ParticleSystemRotationOverLifetime()
  var i759 = data
  i758.enabled = !!i759[0]
  i758.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i759[1], i758.x)
  i758.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i759[2], i758.y)
  i758.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i759[3], i758.z)
  i758.separateAxes = !!i759[4]
  return i758
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i760 = root || new pc.ParticleSystemShape()
  var i761 = data
  i760.enabled = !!i761[0]
  i760.shapeType = i761[1]
  i760.randomDirectionAmount = i761[2]
  i760.sphericalDirectionAmount = i761[3]
  i760.randomPositionAmount = i761[4]
  i760.alignToDirection = !!i761[5]
  i760.radius = i761[6]
  i760.radiusMode = i761[7]
  i760.radiusSpread = i761[8]
  i760.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i761[9], i760.radiusSpeed)
  i760.radiusThickness = i761[10]
  i760.angle = i761[11]
  i760.length = i761[12]
  i760.boxThickness = new pc.Vec3( i761[13], i761[14], i761[15] )
  i760.meshShapeType = i761[16]
  request.r(i761[17], i761[18], 0, i760, 'mesh')
  request.r(i761[19], i761[20], 0, i760, 'meshRenderer')
  request.r(i761[21], i761[22], 0, i760, 'skinnedMeshRenderer')
  i760.useMeshMaterialIndex = !!i761[23]
  i760.meshMaterialIndex = i761[24]
  i760.useMeshColors = !!i761[25]
  i760.normalOffset = i761[26]
  i760.arc = i761[27]
  i760.arcMode = i761[28]
  i760.arcSpread = i761[29]
  i760.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i761[30], i760.arcSpeed)
  i760.donutRadius = i761[31]
  i760.position = new pc.Vec3( i761[32], i761[33], i761[34] )
  i760.rotation = new pc.Vec3( i761[35], i761[36], i761[37] )
  i760.scale = new pc.Vec3( i761[38], i761[39], i761[40] )
  return i760
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i762 = root || new pc.ParticleSystemSizeBySpeed()
  var i763 = data
  i762.enabled = !!i763[0]
  i762.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i763[1], i762.x)
  i762.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i763[2], i762.y)
  i762.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i763[3], i762.z)
  i762.separateAxes = !!i763[4]
  i762.range = new pc.Vec2( i763[5], i763[6] )
  return i762
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i764 = root || new pc.ParticleSystemSizeOverLifetime()
  var i765 = data
  i764.enabled = !!i765[0]
  i764.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i765[1], i764.x)
  i764.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i765[2], i764.y)
  i764.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i765[3], i764.z)
  i764.separateAxes = !!i765[4]
  return i764
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i766 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i767 = data
  i766.enabled = !!i767[0]
  i766.mode = i767[1]
  i766.animation = i767[2]
  i766.numTilesX = i767[3]
  i766.numTilesY = i767[4]
  i766.useRandomRow = !!i767[5]
  i766.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i767[6], i766.frameOverTime)
  i766.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i767[7], i766.startFrame)
  i766.cycleCount = i767[8]
  i766.rowIndex = i767[9]
  i766.flipU = i767[10]
  i766.flipV = i767[11]
  i766.spriteCount = i767[12]
  var i769 = i767[13]
  var i768 = []
  for(var i = 0; i < i769.length; i += 2) {
  request.r(i769[i + 0], i769[i + 1], 2, i768, '')
  }
  i766.sprites = i768
  return i766
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i772 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i773 = data
  i772.enabled = !!i773[0]
  i772.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i773[1], i772.x)
  i772.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i773[2], i772.y)
  i772.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i773[3], i772.z)
  i772.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i773[4], i772.radial)
  i772.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i773[5], i772.speedModifier)
  i772.space = i773[6]
  i772.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i773[7], i772.orbitalX)
  i772.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i773[8], i772.orbitalY)
  i772.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i773[9], i772.orbitalZ)
  i772.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i773[10], i772.orbitalOffsetX)
  i772.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i773[11], i772.orbitalOffsetY)
  i772.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i773[12], i772.orbitalOffsetZ)
  return i772
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i774 = root || new pc.ParticleSystemNoise()
  var i775 = data
  i774.enabled = !!i775[0]
  i774.separateAxes = !!i775[1]
  i774.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i775[2], i774.strengthX)
  i774.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i775[3], i774.strengthY)
  i774.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i775[4], i774.strengthZ)
  i774.frequency = i775[5]
  i774.damping = !!i775[6]
  i774.octaveCount = i775[7]
  i774.octaveMultiplier = i775[8]
  i774.octaveScale = i775[9]
  i774.quality = i775[10]
  i774.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i775[11], i774.scrollSpeed)
  i774.scrollSpeedMultiplier = i775[12]
  i774.remapEnabled = !!i775[13]
  i774.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i775[14], i774.remapX)
  i774.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i775[15], i774.remapY)
  i774.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i775[16], i774.remapZ)
  i774.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i775[17], i774.positionAmount)
  i774.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i775[18], i774.rotationAmount)
  i774.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i775[19], i774.sizeAmount)
  return i774
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i776 = root || new pc.ParticleSystemInheritVelocity()
  var i777 = data
  i776.enabled = !!i777[0]
  i776.mode = i777[1]
  i776.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i777[2], i776.curve)
  return i776
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i778 = root || new pc.ParticleSystemForceOverLifetime()
  var i779 = data
  i778.enabled = !!i779[0]
  i778.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i779[1], i778.x)
  i778.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i779[2], i778.y)
  i778.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i779[3], i778.z)
  i778.space = i779[4]
  i778.randomized = !!i779[5]
  return i778
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i780 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i781 = data
  i780.enabled = !!i781[0]
  i780.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i781[1], i780.limit)
  i780.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i781[2], i780.limitX)
  i780.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i781[3], i780.limitY)
  i780.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i781[4], i780.limitZ)
  i780.dampen = i781[5]
  i780.separateAxes = !!i781[6]
  i780.space = i781[7]
  i780.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i781[8], i780.drag)
  i780.multiplyDragByParticleSize = !!i781[9]
  i780.multiplyDragByParticleVelocity = !!i781[10]
  return i780
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i782 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i783 = data
  request.r(i783[0], i783[1], 0, i782, 'mesh')
  i782.meshCount = i783[2]
  i782.activeVertexStreamsCount = i783[3]
  i782.alignment = i783[4]
  i782.renderMode = i783[5]
  i782.sortMode = i783[6]
  i782.lengthScale = i783[7]
  i782.velocityScale = i783[8]
  i782.cameraVelocityScale = i783[9]
  i782.normalDirection = i783[10]
  i782.sortingFudge = i783[11]
  i782.minParticleSize = i783[12]
  i782.maxParticleSize = i783[13]
  i782.pivot = new pc.Vec3( i783[14], i783[15], i783[16] )
  request.r(i783[17], i783[18], 0, i782, 'trailMaterial')
  i782.applyActiveColorSpace = !!i783[19]
  i782.enabled = !!i783[20]
  request.r(i783[21], i783[22], 0, i782, 'sharedMaterial')
  var i785 = i783[23]
  var i784 = []
  for(var i = 0; i < i785.length; i += 2) {
  request.r(i785[i + 0], i785[i + 1], 2, i784, '')
  }
  i782.sharedMaterials = i784
  i782.receiveShadows = !!i783[24]
  i782.shadowCastingMode = i783[25]
  i782.sortingLayerID = i783[26]
  i782.sortingOrder = i783[27]
  i782.lightmapIndex = i783[28]
  i782.lightmapSceneIndex = i783[29]
  i782.lightmapScaleOffset = new pc.Vec4( i783[30], i783[31], i783[32], i783[33] )
  i782.lightProbeUsage = i783[34]
  i782.reflectionProbeUsage = i783[35]
  return i782
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i788 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i789 = data
  i788.name = i789[0]
  i788.tagId = i789[1]
  i788.enabled = !!i789[2]
  i788.isStatic = !!i789[3]
  i788.layer = i789[4]
  return i788
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i790 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i791 = data
  i790.color = new pc.Color(i791[0], i791[1], i791[2], i791[3])
  request.r(i791[4], i791[5], 0, i790, 'sprite')
  i790.flipX = !!i791[6]
  i790.flipY = !!i791[7]
  i790.drawMode = i791[8]
  i790.size = new pc.Vec2( i791[9], i791[10] )
  i790.tileMode = i791[11]
  i790.adaptiveModeThreshold = i791[12]
  i790.maskInteraction = i791[13]
  i790.spriteSortPoint = i791[14]
  i790.enabled = !!i791[15]
  request.r(i791[16], i791[17], 0, i790, 'sharedMaterial')
  var i793 = i791[18]
  var i792 = []
  for(var i = 0; i < i793.length; i += 2) {
  request.r(i793[i + 0], i793[i + 1], 2, i792, '')
  }
  i790.sharedMaterials = i792
  i790.receiveShadows = !!i791[19]
  i790.shadowCastingMode = i791[20]
  i790.sortingLayerID = i791[21]
  i790.sortingOrder = i791[22]
  i790.lightmapIndex = i791[23]
  i790.lightmapSceneIndex = i791[24]
  i790.lightmapScaleOffset = new pc.Vec4( i791[25], i791[26], i791[27], i791[28] )
  i790.lightProbeUsage = i791[29]
  i790.reflectionProbeUsage = i791[30]
  return i790
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i794 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i795 = data
  request.r(i795[0], i795[1], 0, i794, 'animatorController')
  request.r(i795[2], i795[3], 0, i794, 'avatar')
  i794.updateMode = i795[4]
  i794.hasTransformHierarchy = !!i795[5]
  i794.applyRootMotion = !!i795[6]
  var i797 = i795[7]
  var i796 = []
  for(var i = 0; i < i797.length; i += 2) {
  request.r(i797[i + 0], i797[i + 1], 2, i796, '')
  }
  i794.humanBones = i796
  i794.enabled = !!i795[8]
  return i794
}

Deserializers["MoveBetweenPoints"] = function (request, data, root) {
  var i800 = root || request.c( 'MoveBetweenPoints' )
  var i801 = data
  request.r(i801[0], i801[1], 0, i800, 'pointA')
  request.r(i801[2], i801[3], 0, i800, 'pointB')
  i800.duration = i801[4]
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

Deserializers["ClickToStore"] = function (request, data, root) {
  var i804 = root || request.c( 'ClickToStore' )
  var i805 = data
  return i804
}

Deserializers["PlayerCardUIManager"] = function (request, data, root) {
  var i806 = root || request.c( 'PlayerCardUIManager' )
  var i807 = data
  request.r(i807[0], i807[1], 0, i806, 'cardPanel')
  var i809 = i807[2]
  var i808 = []
  for(var i = 0; i < i809.length; i += 2) {
  request.r(i809[i + 0], i809[i + 1], 2, i808, '')
  }
  i806.extraObjectsToActivate = i808
  i806.waitTime = i807[3]
  var i811 = i807[4]
  var i810 = []
  for(var i = 0; i < i811.length; i += 2) {
  request.r(i811[i + 0], i811[i + 1], 2, i810, '')
  }
  i806.objectsToTurnOnAfterWait = i810
  var i813 = i807[5]
  var i812 = []
  for(var i = 0; i < i813.length; i += 2) {
  request.r(i813[i + 0], i813[i + 1], 2, i812, '')
  }
  i806.objectsToTurnOffAfterWait = i812
  request.r(i807[6], i807[7], 0, i806, 'nationalityText')
  request.r(i807[8], i807[9], 0, i806, 'playerImage')
  request.r(i807[10], i807[11], 0, i806, 'flagImage')
  return i806
}

Deserializers["Ply_SoundManager"] = function (request, data, root) {
  var i816 = root || request.c( 'Ply_SoundManager' )
  var i817 = data
  i816.fxAudio = request.d('FxAudio', i817[0], i816.fxAudio)
  request.r(i817[1], i817[2], 0, i816, 'bgm1')
  return i816
}

Deserializers["FxAudio"] = function (request, data, root) {
  var i818 = root || request.c( 'FxAudio' )
  var i819 = data
  i818.ClickBox = request.d('SoundData', i819[0], i818.ClickBox)
  i818.Happy = request.d('SoundData', i819[1], i818.Happy)
  i818.Wrong = request.d('SoundData', i819[2], i818.Wrong)
  i818.Spray = request.d('SoundData', i819[3], i818.Spray)
  i818.Brush = request.d('SoundData', i819[4], i818.Brush)
  return i818
}

Deserializers["SoundData"] = function (request, data, root) {
  var i820 = root || request.c( 'SoundData' )
  var i821 = data
  request.r(i821[0], i821[1], 0, i820, 'clip')
  i820.repeatCount = i821[2]
  return i820
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i822 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i823 = data
  request.r(i823[0], i823[1], 0, i822, 'clip')
  request.r(i823[2], i823[3], 0, i822, 'outputAudioMixerGroup')
  i822.playOnAwake = !!i823[4]
  i822.loop = !!i823[5]
  i822.time = i823[6]
  i822.volume = i823[7]
  i822.pitch = i823[8]
  i822.enabled = !!i823[9]
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

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i826 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i827 = data
  i826.planeDistance = i827[0]
  i826.referencePixelsPerUnit = i827[1]
  i826.isFallbackOverlay = !!i827[2]
  i826.renderMode = i827[3]
  i826.renderOrder = i827[4]
  i826.sortingLayerName = i827[5]
  i826.sortingOrder = i827[6]
  i826.scaleFactor = i827[7]
  request.r(i827[8], i827[9], 0, i826, 'worldCamera')
  i826.overrideSorting = !!i827[10]
  i826.pixelPerfect = !!i827[11]
  i826.targetDisplay = i827[12]
  i826.overridePixelPerfect = !!i827[13]
  i826.enabled = !!i827[14]
  return i826
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i828 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i829 = data
  i828.m_UiScaleMode = i829[0]
  i828.m_ReferencePixelsPerUnit = i829[1]
  i828.m_ScaleFactor = i829[2]
  i828.m_ReferenceResolution = new pc.Vec2( i829[3], i829[4] )
  i828.m_ScreenMatchMode = i829[5]
  i828.m_MatchWidthOrHeight = i829[6]
  i828.m_PhysicalUnit = i829[7]
  i828.m_FallbackScreenDPI = i829[8]
  i828.m_DefaultSpriteDPI = i829[9]
  i828.m_DynamicPixelsPerUnit = i829[10]
  i828.m_PresetInfoIsWorld = !!i829[11]
  return i828
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i830 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i831 = data
  i830.m_IgnoreReversedGraphics = !!i831[0]
  i830.m_BlockingObjects = i831[1]
  i830.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i831[2] )
  return i830
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i832 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i833 = data
  i832.cullTransparentMesh = !!i833[0]
  return i832
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i834 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i835 = data
  i834.m_hasFontAssetChanged = !!i835[0]
  request.r(i835[1], i835[2], 0, i834, 'm_baseMaterial')
  i834.m_maskOffset = new pc.Vec4( i835[3], i835[4], i835[5], i835[6] )
  i834.m_text = i835[7]
  i834.m_isRightToLeft = !!i835[8]
  request.r(i835[9], i835[10], 0, i834, 'm_fontAsset')
  request.r(i835[11], i835[12], 0, i834, 'm_sharedMaterial')
  var i837 = i835[13]
  var i836 = []
  for(var i = 0; i < i837.length; i += 2) {
  request.r(i837[i + 0], i837[i + 1], 2, i836, '')
  }
  i834.m_fontSharedMaterials = i836
  request.r(i835[14], i835[15], 0, i834, 'm_fontMaterial')
  var i839 = i835[16]
  var i838 = []
  for(var i = 0; i < i839.length; i += 2) {
  request.r(i839[i + 0], i839[i + 1], 2, i838, '')
  }
  i834.m_fontMaterials = i838
  i834.m_fontColor32 = UnityEngine.Color32.ConstructColor(i835[17], i835[18], i835[19], i835[20])
  i834.m_fontColor = new pc.Color(i835[21], i835[22], i835[23], i835[24])
  i834.m_enableVertexGradient = !!i835[25]
  i834.m_colorMode = i835[26]
  i834.m_fontColorGradient = request.d('TMPro.VertexGradient', i835[27], i834.m_fontColorGradient)
  request.r(i835[28], i835[29], 0, i834, 'm_fontColorGradientPreset')
  request.r(i835[30], i835[31], 0, i834, 'm_spriteAsset')
  i834.m_tintAllSprites = !!i835[32]
  request.r(i835[33], i835[34], 0, i834, 'm_StyleSheet')
  i834.m_TextStyleHashCode = i835[35]
  i834.m_overrideHtmlColors = !!i835[36]
  i834.m_faceColor = UnityEngine.Color32.ConstructColor(i835[37], i835[38], i835[39], i835[40])
  i834.m_fontSize = i835[41]
  i834.m_fontSizeBase = i835[42]
  i834.m_fontWeight = i835[43]
  i834.m_enableAutoSizing = !!i835[44]
  i834.m_fontSizeMin = i835[45]
  i834.m_fontSizeMax = i835[46]
  i834.m_fontStyle = i835[47]
  i834.m_HorizontalAlignment = i835[48]
  i834.m_VerticalAlignment = i835[49]
  i834.m_textAlignment = i835[50]
  i834.m_characterSpacing = i835[51]
  i834.m_wordSpacing = i835[52]
  i834.m_lineSpacing = i835[53]
  i834.m_lineSpacingMax = i835[54]
  i834.m_paragraphSpacing = i835[55]
  i834.m_charWidthMaxAdj = i835[56]
  i834.m_TextWrappingMode = i835[57]
  i834.m_wordWrappingRatios = i835[58]
  i834.m_overflowMode = i835[59]
  request.r(i835[60], i835[61], 0, i834, 'm_linkedTextComponent')
  request.r(i835[62], i835[63], 0, i834, 'parentLinkedComponent')
  i834.m_enableKerning = !!i835[64]
  var i841 = i835[65]
  var i840 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i841.length; i += 1) {
    i840.add(i841[i + 0]);
  }
  i834.m_ActiveFontFeatures = i840
  i834.m_enableExtraPadding = !!i835[66]
  i834.checkPaddingRequired = !!i835[67]
  i834.m_isRichText = !!i835[68]
  i834.m_parseCtrlCharacters = !!i835[69]
  i834.m_isOrthographic = !!i835[70]
  i834.m_isCullingEnabled = !!i835[71]
  i834.m_horizontalMapping = i835[72]
  i834.m_verticalMapping = i835[73]
  i834.m_uvLineOffset = i835[74]
  i834.m_geometrySortingOrder = i835[75]
  i834.m_IsTextObjectScaleStatic = !!i835[76]
  i834.m_VertexBufferAutoSizeReduction = !!i835[77]
  i834.m_useMaxVisibleDescender = !!i835[78]
  i834.m_pageToDisplay = i835[79]
  i834.m_margin = new pc.Vec4( i835[80], i835[81], i835[82], i835[83] )
  i834.m_isUsingLegacyAnimationComponent = !!i835[84]
  i834.m_isVolumetricText = !!i835[85]
  request.r(i835[86], i835[87], 0, i834, 'm_Material')
  i834.m_EmojiFallbackSupport = !!i835[88]
  i834.m_Maskable = !!i835[89]
  i834.m_Color = new pc.Color(i835[90], i835[91], i835[92], i835[93])
  i834.m_RaycastTarget = !!i835[94]
  i834.m_RaycastPadding = new pc.Vec4( i835[95], i835[96], i835[97], i835[98] )
  return i834
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i842 = root || request.c( 'TMPro.VertexGradient' )
  var i843 = data
  i842.topLeft = new pc.Color(i843[0], i843[1], i843[2], i843[3])
  i842.topRight = new pc.Color(i843[4], i843[5], i843[6], i843[7])
  i842.bottomLeft = new pc.Color(i843[8], i843[9], i843[10], i843[11])
  i842.bottomRight = new pc.Color(i843[12], i843[13], i843[14], i843[15])
  return i842
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i846 = root || request.c( 'UnityEngine.UI.Image' )
  var i847 = data
  request.r(i847[0], i847[1], 0, i846, 'm_Sprite')
  i846.m_Type = i847[2]
  i846.m_PreserveAspect = !!i847[3]
  i846.m_FillCenter = !!i847[4]
  i846.m_FillMethod = i847[5]
  i846.m_FillAmount = i847[6]
  i846.m_FillClockwise = !!i847[7]
  i846.m_FillOrigin = i847[8]
  i846.m_UseSpriteMesh = !!i847[9]
  i846.m_PixelsPerUnitMultiplier = i847[10]
  request.r(i847[11], i847[12], 0, i846, 'm_Material')
  i846.m_Maskable = !!i847[13]
  i846.m_Color = new pc.Color(i847[14], i847[15], i847[16], i847[17])
  i846.m_RaycastTarget = !!i847[18]
  i846.m_RaycastPadding = new pc.Vec4( i847[19], i847[20], i847[21], i847[22] )
  return i846
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D"] = function (request, data, root) {
  var i848 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D' )
  var i849 = data
  i848.usedByComposite = !!i849[0]
  i848.autoTiling = !!i849[1]
  var i851 = i849[2]
  var i850 = []
  for(var i = 0; i < i851.length; i += 1) {
  var i853 = i851[i + 0]
  var i852 = []
  for(var i = 0; i < i853.length; i += 2) {
    i852.push( new pc.Vec2( i853[i + 0], i853[i + 1] ) );
  }
    i850.push( i852 );
  }
  i848.points = i850
  i848.enabled = !!i849[3]
  i848.isTrigger = !!i849[4]
  i848.usedByEffector = !!i849[5]
  i848.density = i849[6]
  i848.offset = new pc.Vec2( i849[7], i849[8] )
  request.r(i849[9], i849[10], 0, i848, 'material')
  return i848
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i860 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i861 = data
  i860.bodyType = i861[0]
  request.r(i861[1], i861[2], 0, i860, 'material')
  i860.simulated = !!i861[3]
  i860.useAutoMass = !!i861[4]
  i860.mass = i861[5]
  i860.drag = i861[6]
  i860.angularDrag = i861[7]
  i860.gravityScale = i861[8]
  i860.collisionDetectionMode = i861[9]
  i860.sleepMode = i861[10]
  i860.constraints = i861[11]
  return i860
}

Deserializers["BatStrikeController"] = function (request, data, root) {
  var i862 = root || request.c( 'BatStrikeController' )
  var i863 = data
  i862.pullSpeed = i863[0]
  i862.maxPullDistance = i863[1]
  i862.minHoldTime = i863[2]
  i862.strikeForce = i863[3]
  i862.targetTag = i863[4]
  return i862
}

Deserializers["CupCollision"] = function (request, data, root) {
  var i864 = root || request.c( 'CupCollision' )
  var i865 = data
  i864.baseTag = i865[0]
  request.r(i865[1], i865[2], 0, i864, 'objectToActivate')
  return i864
}

Deserializers["SlotTrigger"] = function (request, data, root) {
  var i866 = root || request.c( 'SlotTrigger' )
  var i867 = data
  request.r(i867[0], i867[1], 0, i866, 'cardData')
  i866.targetTag = i867[2]
  request.r(i867[3], i867[4], 0, i866, 'yAnchor')
  i866.moveSpeed = i867[5]
  request.r(i867[6], i867[7], 0, i866, 'objectToMoveDown')
  i866.targetScreenYRatio = i867[8]
  return i866
}

Deserializers["HideOnFirstClick"] = function (request, data, root) {
  var i868 = root || request.c( 'HideOnFirstClick' )
  var i869 = data
  request.r(i869[0], i869[1], 0, i868, 'objectToHide')
  return i868
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i870 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i871 = data
  request.r(i871[0], i871[1], 0, i870, 'm_FirstSelected')
  i870.m_sendNavigationEvents = !!i871[2]
  i870.m_DragThreshold = i871[3]
  return i870
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i872 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i873 = data
  i872.m_HorizontalAxis = i873[0]
  i872.m_VerticalAxis = i873[1]
  i872.m_SubmitButton = i873[2]
  i872.m_CancelButton = i873[3]
  i872.m_InputActionsPerSecond = i873[4]
  i872.m_RepeatDelay = i873[5]
  i872.m_ForceModuleActive = !!i873[6]
  i872.m_SendPointerHoverToParent = !!i873[7]
  return i872
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i874 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i875 = data
  i874.ambientIntensity = i875[0]
  i874.reflectionIntensity = i875[1]
  i874.ambientMode = i875[2]
  i874.ambientLight = new pc.Color(i875[3], i875[4], i875[5], i875[6])
  i874.ambientSkyColor = new pc.Color(i875[7], i875[8], i875[9], i875[10])
  i874.ambientGroundColor = new pc.Color(i875[11], i875[12], i875[13], i875[14])
  i874.ambientEquatorColor = new pc.Color(i875[15], i875[16], i875[17], i875[18])
  i874.fogColor = new pc.Color(i875[19], i875[20], i875[21], i875[22])
  i874.fogEndDistance = i875[23]
  i874.fogStartDistance = i875[24]
  i874.fogDensity = i875[25]
  i874.fog = !!i875[26]
  request.r(i875[27], i875[28], 0, i874, 'skybox')
  i874.fogMode = i875[29]
  var i877 = i875[30]
  var i876 = []
  for(var i = 0; i < i877.length; i += 1) {
    i876.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i877[i + 0]) );
  }
  i874.lightmaps = i876
  i874.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i875[31], i874.lightProbes)
  i874.lightmapsMode = i875[32]
  i874.mixedBakeMode = i875[33]
  i874.environmentLightingMode = i875[34]
  i874.ambientProbe = new pc.SphericalHarmonicsL2(i875[35])
  i874.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i875[36])
  i874.useReferenceAmbientProbe = !!i875[37]
  request.r(i875[38], i875[39], 0, i874, 'customReflection')
  request.r(i875[40], i875[41], 0, i874, 'defaultReflection')
  i874.defaultReflectionMode = i875[42]
  i874.defaultReflectionResolution = i875[43]
  i874.sunLightObjectId = i875[44]
  i874.pixelLightCount = i875[45]
  i874.defaultReflectionHDR = !!i875[46]
  i874.hasLightDataAsset = !!i875[47]
  i874.hasManualGenerate = !!i875[48]
  return i874
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i880 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i881 = data
  request.r(i881[0], i881[1], 0, i880, 'lightmapColor')
  request.r(i881[2], i881[3], 0, i880, 'lightmapDirection')
  request.r(i881[4], i881[5], 0, i880, 'shadowMask')
  return i880
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i882 = root || new UnityEngine.LightProbes()
  var i883 = data
  return i882
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.PhysicsMaterial2D"] = function (request, data, root) {
  var i890 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.PhysicsMaterial2D' )
  var i891 = data
  i890.name = i891[0]
  i890.bounciness = i891[1]
  i890.friction = i891[2]
  return i890
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i892 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i893 = data
  var i895 = i893[0]
  var i894 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i895.length; i += 1) {
    i894.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i895[i + 0]));
  }
  i892.ShaderCompilationErrors = i894
  i892.name = i893[1]
  i892.guid = i893[2]
  var i897 = i893[3]
  var i896 = []
  for(var i = 0; i < i897.length; i += 1) {
    i896.push( i897[i + 0] );
  }
  i892.shaderDefinedKeywords = i896
  var i899 = i893[4]
  var i898 = []
  for(var i = 0; i < i899.length; i += 1) {
    i898.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i899[i + 0]) );
  }
  i892.passes = i898
  var i901 = i893[5]
  var i900 = []
  for(var i = 0; i < i901.length; i += 1) {
    i900.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i901[i + 0]) );
  }
  i892.usePasses = i900
  var i903 = i893[6]
  var i902 = []
  for(var i = 0; i < i903.length; i += 1) {
    i902.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i903[i + 0]) );
  }
  i892.defaultParameterValues = i902
  request.r(i893[7], i893[8], 0, i892, 'unityFallbackShader')
  i892.readDepth = !!i893[9]
  i892.hasDepthOnlyPass = !!i893[10]
  i892.isCreatedByShaderGraph = !!i893[11]
  i892.disableBatching = !!i893[12]
  i892.compiled = !!i893[13]
  return i892
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i906 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i907 = data
  i906.shaderName = i907[0]
  i906.errorMessage = i907[1]
  return i906
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i912 = root || new pc.UnityShaderPass()
  var i913 = data
  i912.id = i913[0]
  i912.subShaderIndex = i913[1]
  i912.name = i913[2]
  i912.passType = i913[3]
  i912.grabPassTextureName = i913[4]
  i912.usePass = !!i913[5]
  i912.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i913[6], i912.zTest)
  i912.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i913[7], i912.zWrite)
  i912.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i913[8], i912.culling)
  i912.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i913[9], i912.blending)
  i912.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i913[10], i912.alphaBlending)
  i912.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i913[11], i912.colorWriteMask)
  i912.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i913[12], i912.offsetUnits)
  i912.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i913[13], i912.offsetFactor)
  i912.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i913[14], i912.stencilRef)
  i912.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i913[15], i912.stencilReadMask)
  i912.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i913[16], i912.stencilWriteMask)
  i912.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i913[17], i912.stencilOp)
  i912.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i913[18], i912.stencilOpFront)
  i912.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i913[19], i912.stencilOpBack)
  var i915 = i913[20]
  var i914 = []
  for(var i = 0; i < i915.length; i += 1) {
    i914.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i915[i + 0]) );
  }
  i912.tags = i914
  var i917 = i913[21]
  var i916 = []
  for(var i = 0; i < i917.length; i += 1) {
    i916.push( i917[i + 0] );
  }
  i912.passDefinedKeywords = i916
  var i919 = i913[22]
  var i918 = []
  for(var i = 0; i < i919.length; i += 1) {
    i918.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i919[i + 0]) );
  }
  i912.passDefinedKeywordGroups = i918
  var i921 = i913[23]
  var i920 = []
  for(var i = 0; i < i921.length; i += 1) {
    i920.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i921[i + 0]) );
  }
  i912.variants = i920
  var i923 = i913[24]
  var i922 = []
  for(var i = 0; i < i923.length; i += 1) {
    i922.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i923[i + 0]) );
  }
  i912.excludedVariants = i922
  i912.hasDepthReader = !!i913[25]
  return i912
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i924 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i925 = data
  i924.val = i925[0]
  i924.name = i925[1]
  return i924
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i926 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i927 = data
  i926.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i927[0], i926.src)
  i926.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i927[1], i926.dst)
  i926.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i927[2], i926.op)
  return i926
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i928 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i929 = data
  i928.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i929[0], i928.pass)
  i928.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i929[1], i928.fail)
  i928.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i929[2], i928.zFail)
  i928.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i929[3], i928.comp)
  return i928
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i932 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i933 = data
  i932.name = i933[0]
  i932.value = i933[1]
  return i932
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i936 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i937 = data
  var i939 = i937[0]
  var i938 = []
  for(var i = 0; i < i939.length; i += 1) {
    i938.push( i939[i + 0] );
  }
  i936.keywords = i938
  i936.hasDiscard = !!i937[1]
  return i936
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i942 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i943 = data
  i942.passId = i943[0]
  i942.subShaderIndex = i943[1]
  var i945 = i943[2]
  var i944 = []
  for(var i = 0; i < i945.length; i += 1) {
    i944.push( i945[i + 0] );
  }
  i942.keywords = i944
  i942.vertexProgram = i943[3]
  i942.fragmentProgram = i943[4]
  i942.exportedForWebGl2 = !!i943[5]
  i942.readDepth = !!i943[6]
  return i942
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i948 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i949 = data
  request.r(i949[0], i949[1], 0, i948, 'shader')
  i948.pass = i949[2]
  return i948
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i952 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i953 = data
  i952.name = i953[0]
  i952.type = i953[1]
  i952.value = new pc.Vec4( i953[2], i953[3], i953[4], i953[5] )
  i952.textureValue = i953[6]
  i952.shaderPropertyFlag = i953[7]
  return i952
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i954 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i955 = data
  i954.name = i955[0]
  request.r(i955[1], i955[2], 0, i954, 'texture')
  i954.aabb = i955[3]
  i954.vertices = i955[4]
  i954.triangles = i955[5]
  i954.textureRect = UnityEngine.Rect.MinMaxRect(i955[6], i955[7], i955[8], i955[9])
  i954.packedRect = UnityEngine.Rect.MinMaxRect(i955[10], i955[11], i955[12], i955[13])
  i954.border = new pc.Vec4( i955[14], i955[15], i955[16], i955[17] )
  i954.transparency = i955[18]
  i954.bounds = i955[19]
  i954.pixelsPerUnit = i955[20]
  i954.textureWidth = i955[21]
  i954.textureHeight = i955[22]
  i954.nativeSize = new pc.Vec2( i955[23], i955[24] )
  i954.pivot = new pc.Vec2( i955[25], i955[26] )
  i954.textureRectOffset = new pc.Vec2( i955[27], i955[28] )
  return i954
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i956 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i957 = data
  i956.name = i957[0]
  return i956
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i958 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i959 = data
  i958.name = i959[0]
  i958.wrapMode = i959[1]
  i958.isLooping = !!i959[2]
  i958.length = i959[3]
  var i961 = i959[4]
  var i960 = []
  for(var i = 0; i < i961.length; i += 1) {
    i960.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i961[i + 0]) );
  }
  i958.curves = i960
  var i963 = i959[5]
  var i962 = []
  for(var i = 0; i < i963.length; i += 1) {
    i962.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i963[i + 0]) );
  }
  i958.events = i962
  i958.halfPrecision = !!i959[6]
  i958._frameRate = i959[7]
  i958.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i959[8], i958.localBounds)
  i958.hasMuscleCurves = !!i959[9]
  var i965 = i959[10]
  var i964 = []
  for(var i = 0; i < i965.length; i += 1) {
    i964.push( i965[i + 0] );
  }
  i958.clipMuscleConstant = i964
  i958.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i959[11], i958.clipBindingConstant)
  return i958
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i968 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i969 = data
  i968.path = i969[0]
  i968.hash = i969[1]
  i968.componentType = i969[2]
  i968.property = i969[3]
  i968.keys = i969[4]
  var i971 = i969[5]
  var i970 = []
  for(var i = 0; i < i971.length; i += 1) {
    i970.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i971[i + 0]) );
  }
  i968.objectReferenceKeys = i970
  return i968
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i974 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i975 = data
  i974.time = i975[0]
  request.r(i975[1], i975[2], 0, i974, 'value')
  return i974
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i978 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i979 = data
  i978.functionName = i979[0]
  i978.floatParameter = i979[1]
  i978.intParameter = i979[2]
  i978.stringParameter = i979[3]
  request.r(i979[4], i979[5], 0, i978, 'objectReferenceParameter')
  i978.time = i979[6]
  return i978
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i980 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i981 = data
  i980.center = new pc.Vec3( i981[0], i981[1], i981[2] )
  i980.extends = new pc.Vec3( i981[3], i981[4], i981[5] )
  return i980
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i984 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i985 = data
  var i987 = i985[0]
  var i986 = []
  for(var i = 0; i < i987.length; i += 1) {
    i986.push( i987[i + 0] );
  }
  i984.genericBindings = i986
  var i989 = i985[1]
  var i988 = []
  for(var i = 0; i < i989.length; i += 1) {
    i988.push( i989[i + 0] );
  }
  i984.pptrCurveMapping = i988
  return i984
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i990 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i991 = data
  i990.name = i991[0]
  i990.ascent = i991[1]
  i990.originalLineHeight = i991[2]
  i990.fontSize = i991[3]
  var i993 = i991[4]
  var i992 = []
  for(var i = 0; i < i993.length; i += 1) {
    i992.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i993[i + 0]) );
  }
  i990.characterInfo = i992
  request.r(i991[5], i991[6], 0, i990, 'texture')
  i990.originalFontSize = i991[7]
  return i990
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i996 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i997 = data
  i996.index = i997[0]
  i996.advance = i997[1]
  i996.bearing = i997[2]
  i996.glyphWidth = i997[3]
  i996.glyphHeight = i997[4]
  i996.minX = i997[5]
  i996.maxX = i997[6]
  i996.minY = i997[7]
  i996.maxY = i997[8]
  i996.uvBottomLeftX = i997[9]
  i996.uvBottomLeftY = i997[10]
  i996.uvBottomRightX = i997[11]
  i996.uvBottomRightY = i997[12]
  i996.uvTopLeftX = i997[13]
  i996.uvTopLeftY = i997[14]
  i996.uvTopRightX = i997[15]
  i996.uvTopRightY = i997[16]
  return i996
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i998 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i999 = data
  i998.name = i999[0]
  var i1001 = i999[1]
  var i1000 = []
  for(var i = 0; i < i1001.length; i += 1) {
    i1000.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i1001[i + 0]) );
  }
  i998.layers = i1000
  var i1003 = i999[2]
  var i1002 = []
  for(var i = 0; i < i1003.length; i += 1) {
    i1002.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i1003[i + 0]) );
  }
  i998.parameters = i1002
  i998.animationClips = i999[3]
  i998.avatarUnsupported = i999[4]
  return i998
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i1006 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i1007 = data
  i1006.name = i1007[0]
  i1006.defaultWeight = i1007[1]
  i1006.blendingMode = i1007[2]
  i1006.avatarMask = i1007[3]
  i1006.syncedLayerIndex = i1007[4]
  i1006.syncedLayerAffectsTiming = !!i1007[5]
  i1006.syncedLayers = i1007[6]
  i1006.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1007[7], i1006.stateMachine)
  return i1006
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i1008 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i1009 = data
  i1008.id = i1009[0]
  i1008.name = i1009[1]
  i1008.path = i1009[2]
  var i1011 = i1009[3]
  var i1010 = []
  for(var i = 0; i < i1011.length; i += 1) {
    i1010.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i1011[i + 0]) );
  }
  i1008.states = i1010
  var i1013 = i1009[4]
  var i1012 = []
  for(var i = 0; i < i1013.length; i += 1) {
    i1012.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1013[i + 0]) );
  }
  i1008.machines = i1012
  var i1015 = i1009[5]
  var i1014 = []
  for(var i = 0; i < i1015.length; i += 1) {
    i1014.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1015[i + 0]) );
  }
  i1008.entryStateTransitions = i1014
  var i1017 = i1009[6]
  var i1016 = []
  for(var i = 0; i < i1017.length; i += 1) {
    i1016.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1017[i + 0]) );
  }
  i1008.exitStateTransitions = i1016
  var i1019 = i1009[7]
  var i1018 = []
  for(var i = 0; i < i1019.length; i += 1) {
    i1018.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1019[i + 0]) );
  }
  i1008.anyStateTransitions = i1018
  i1008.defaultStateId = i1009[8]
  return i1008
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i1022 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i1023 = data
  i1022.id = i1023[0]
  i1022.name = i1023[1]
  i1022.cycleOffset = i1023[2]
  i1022.cycleOffsetParameter = i1023[3]
  i1022.cycleOffsetParameterActive = !!i1023[4]
  i1022.mirror = !!i1023[5]
  i1022.mirrorParameter = i1023[6]
  i1022.mirrorParameterActive = !!i1023[7]
  i1022.motionId = i1023[8]
  i1022.nameHash = i1023[9]
  i1022.fullPathHash = i1023[10]
  i1022.speed = i1023[11]
  i1022.speedParameter = i1023[12]
  i1022.speedParameterActive = !!i1023[13]
  i1022.tag = i1023[14]
  i1022.tagHash = i1023[15]
  i1022.writeDefaultValues = !!i1023[16]
  var i1025 = i1023[17]
  var i1024 = []
  for(var i = 0; i < i1025.length; i += 2) {
  request.r(i1025[i + 0], i1025[i + 1], 2, i1024, '')
  }
  i1022.behaviours = i1024
  var i1027 = i1023[18]
  var i1026 = []
  for(var i = 0; i < i1027.length; i += 1) {
    i1026.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1027[i + 0]) );
  }
  i1022.transitions = i1026
  return i1022
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1032 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1033 = data
  i1032.fullPath = i1033[0]
  i1032.canTransitionToSelf = !!i1033[1]
  i1032.duration = i1033[2]
  i1032.exitTime = i1033[3]
  i1032.hasExitTime = !!i1033[4]
  i1032.hasFixedDuration = !!i1033[5]
  i1032.interruptionSource = i1033[6]
  i1032.offset = i1033[7]
  i1032.orderedInterruption = !!i1033[8]
  i1032.destinationStateId = i1033[9]
  i1032.isExit = !!i1033[10]
  i1032.mute = !!i1033[11]
  i1032.solo = !!i1033[12]
  var i1035 = i1033[13]
  var i1034 = []
  for(var i = 0; i < i1035.length; i += 1) {
    i1034.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1035[i + 0]) );
  }
  i1032.conditions = i1034
  return i1032
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1040 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1041 = data
  i1040.destinationStateId = i1041[0]
  i1040.isExit = !!i1041[1]
  i1040.mute = !!i1041[2]
  i1040.solo = !!i1041[3]
  var i1043 = i1041[4]
  var i1042 = []
  for(var i = 0; i < i1043.length; i += 1) {
    i1042.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1043[i + 0]) );
  }
  i1040.conditions = i1042
  return i1040
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1046 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1047 = data
  i1046.defaultBool = !!i1047[0]
  i1046.defaultFloat = i1047[1]
  i1046.defaultInt = i1047[2]
  i1046.name = i1047[3]
  i1046.nameHash = i1047[4]
  i1046.type = i1047[5]
  return i1046
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1048 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1049 = data
  i1048.name = i1049[0]
  i1048.bytes64 = i1049[1]
  i1048.data = i1049[2]
  return i1048
}

Deserializers["PlayerCardData"] = function (request, data, root) {
  var i1050 = root || request.c( 'PlayerCardData' )
  var i1051 = data
  i1050.nationality = i1051[0]
  request.r(i1051[1], i1051[2], 0, i1050, 'playerSprite')
  request.r(i1051[3], i1051[4], 0, i1050, 'flagSprite')
  return i1050
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i1052 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i1053 = data
  i1052.normalStyle = i1053[0]
  i1052.normalSpacingOffset = i1053[1]
  i1052.boldStyle = i1053[2]
  i1052.boldSpacing = i1053[3]
  i1052.italicStyle = i1053[4]
  i1052.tabSize = i1053[5]
  request.r(i1053[6], i1053[7], 0, i1052, 'atlas')
  i1052.m_SourceFontFileGUID = i1053[8]
  i1052.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i1053[9], i1052.m_CreationSettings)
  request.r(i1053[10], i1053[11], 0, i1052, 'm_SourceFontFile')
  i1052.m_SourceFontFilePath = i1053[12]
  i1052.m_AtlasPopulationMode = i1053[13]
  i1052.InternalDynamicOS = !!i1053[14]
  var i1055 = i1053[15]
  var i1054 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i1055.length; i += 1) {
    i1054.add(request.d('UnityEngine.TextCore.Glyph', i1055[i + 0]));
  }
  i1052.m_GlyphTable = i1054
  var i1057 = i1053[16]
  var i1056 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i1057.length; i += 1) {
    i1056.add(request.d('TMPro.TMP_Character', i1057[i + 0]));
  }
  i1052.m_CharacterTable = i1056
  var i1059 = i1053[17]
  var i1058 = []
  for(var i = 0; i < i1059.length; i += 2) {
  request.r(i1059[i + 0], i1059[i + 1], 2, i1058, '')
  }
  i1052.m_AtlasTextures = i1058
  i1052.m_AtlasTextureIndex = i1053[18]
  i1052.m_IsMultiAtlasTexturesEnabled = !!i1053[19]
  i1052.m_GetFontFeatures = !!i1053[20]
  i1052.m_ClearDynamicDataOnBuild = !!i1053[21]
  i1052.m_AtlasWidth = i1053[22]
  i1052.m_AtlasHeight = i1053[23]
  i1052.m_AtlasPadding = i1053[24]
  i1052.m_AtlasRenderMode = i1053[25]
  var i1061 = i1053[26]
  var i1060 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1061.length; i += 1) {
    i1060.add(request.d('UnityEngine.TextCore.GlyphRect', i1061[i + 0]));
  }
  i1052.m_UsedGlyphRects = i1060
  var i1063 = i1053[27]
  var i1062 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1063.length; i += 1) {
    i1062.add(request.d('UnityEngine.TextCore.GlyphRect', i1063[i + 0]));
  }
  i1052.m_FreeGlyphRects = i1062
  i1052.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i1053[28], i1052.m_FontFeatureTable)
  i1052.m_ShouldReimportFontFeatures = !!i1053[29]
  var i1065 = i1053[30]
  var i1064 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1065.length; i += 2) {
  request.r(i1065[i + 0], i1065[i + 1], 1, i1064, '')
  }
  i1052.m_FallbackFontAssetTable = i1064
  var i1067 = i1053[31]
  var i1066 = []
  for(var i = 0; i < i1067.length; i += 1) {
    i1066.push( request.d('TMPro.TMP_FontWeightPair', i1067[i + 0]) );
  }
  i1052.m_FontWeightTable = i1066
  var i1069 = i1053[32]
  var i1068 = []
  for(var i = 0; i < i1069.length; i += 1) {
    i1068.push( request.d('TMPro.TMP_FontWeightPair', i1069[i + 0]) );
  }
  i1052.fontWeights = i1068
  i1052.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i1053[33], i1052.m_fontInfo)
  var i1071 = i1053[34]
  var i1070 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i1071.length; i += 1) {
    i1070.add(request.d('TMPro.TMP_Glyph', i1071[i + 0]));
  }
  i1052.m_glyphInfoList = i1070
  i1052.m_KerningTable = request.d('TMPro.KerningTable', i1053[35], i1052.m_KerningTable)
  var i1073 = i1053[36]
  var i1072 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1073.length; i += 2) {
  request.r(i1073[i + 0], i1073[i + 1], 1, i1072, '')
  }
  i1052.fallbackFontAssets = i1072
  i1052.m_Version = i1053[37]
  i1052.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1053[38], i1052.m_FaceInfo)
  request.r(i1053[39], i1053[40], 0, i1052, 'm_Material')
  return i1052
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i1074 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i1075 = data
  i1074.sourceFontFileName = i1075[0]
  i1074.sourceFontFileGUID = i1075[1]
  i1074.faceIndex = i1075[2]
  i1074.pointSizeSamplingMode = i1075[3]
  i1074.pointSize = i1075[4]
  i1074.padding = i1075[5]
  i1074.paddingMode = i1075[6]
  i1074.packingMode = i1075[7]
  i1074.atlasWidth = i1075[8]
  i1074.atlasHeight = i1075[9]
  i1074.characterSetSelectionMode = i1075[10]
  i1074.characterSequence = i1075[11]
  i1074.referencedFontAssetGUID = i1075[12]
  i1074.referencedTextAssetGUID = i1075[13]
  i1074.fontStyle = i1075[14]
  i1074.fontStyleModifier = i1075[15]
  i1074.renderMode = i1075[16]
  i1074.includeFontFeatures = !!i1075[17]
  return i1074
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i1078 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i1079 = data
  i1078.m_Index = i1079[0]
  i1078.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1079[1], i1078.m_Metrics)
  i1078.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1079[2], i1078.m_GlyphRect)
  i1078.m_Scale = i1079[3]
  i1078.m_AtlasIndex = i1079[4]
  i1078.m_ClassDefinitionType = i1079[5]
  return i1078
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1080 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1081 = data
  i1080.m_Width = i1081[0]
  i1080.m_Height = i1081[1]
  i1080.m_HorizontalBearingX = i1081[2]
  i1080.m_HorizontalBearingY = i1081[3]
  i1080.m_HorizontalAdvance = i1081[4]
  return i1080
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1082 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1083 = data
  i1082.m_X = i1083[0]
  i1082.m_Y = i1083[1]
  i1082.m_Width = i1083[2]
  i1082.m_Height = i1083[3]
  return i1082
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i1086 = root || request.c( 'TMPro.TMP_Character' )
  var i1087 = data
  i1086.m_ElementType = i1087[0]
  i1086.m_Unicode = i1087[1]
  i1086.m_GlyphIndex = i1087[2]
  i1086.m_Scale = i1087[3]
  return i1086
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i1092 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i1093 = data
  var i1095 = i1093[0]
  var i1094 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i1095.length; i += 1) {
    i1094.add(request.d('TMPro.MultipleSubstitutionRecord', i1095[i + 0]));
  }
  i1092.m_MultipleSubstitutionRecords = i1094
  var i1097 = i1093[1]
  var i1096 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i1097.length; i += 1) {
    i1096.add(request.d('TMPro.LigatureSubstitutionRecord', i1097[i + 0]));
  }
  i1092.m_LigatureSubstitutionRecords = i1096
  var i1099 = i1093[2]
  var i1098 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i1099.length; i += 1) {
    i1098.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i1099[i + 0]));
  }
  i1092.m_GlyphPairAdjustmentRecords = i1098
  var i1101 = i1093[3]
  var i1100 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i1101.length; i += 1) {
    i1100.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i1101[i + 0]));
  }
  i1092.m_MarkToBaseAdjustmentRecords = i1100
  var i1103 = i1093[4]
  var i1102 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i1103.length; i += 1) {
    i1102.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i1103[i + 0]));
  }
  i1092.m_MarkToMarkAdjustmentRecords = i1102
  return i1092
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i1106 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i1107 = data
  i1106.m_TargetGlyphID = i1107[0]
  i1106.m_SubstituteGlyphIDs = i1107[1]
  return i1106
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i1110 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i1111 = data
  i1110.m_ComponentGlyphIDs = i1111[0]
  i1110.m_LigatureGlyphID = i1111[1]
  return i1110
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i1114 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i1115 = data
  i1114.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i1115[0], i1114.m_FirstAdjustmentRecord)
  i1114.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i1115[1], i1114.m_SecondAdjustmentRecord)
  i1114.m_FeatureLookupFlags = i1115[2]
  return i1114
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1116 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i1117 = data
  i1116.m_GlyphIndex = i1117[0]
  i1116.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i1117[1], i1116.m_GlyphValueRecord)
  return i1116
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i1118 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i1119 = data
  i1118.m_XPlacement = i1119[0]
  i1118.m_YPlacement = i1119[1]
  i1118.m_XAdvance = i1119[2]
  i1118.m_YAdvance = i1119[3]
  return i1118
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i1122 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i1123 = data
  i1122.m_BaseGlyphID = i1123[0]
  i1122.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i1123[1], i1122.m_BaseGlyphAnchorPoint)
  i1122.m_MarkGlyphID = i1123[2]
  i1122.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i1123[3], i1122.m_MarkPositionAdjustment)
  return i1122
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i1126 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i1127 = data
  i1126.m_BaseMarkGlyphID = i1127[0]
  i1126.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i1127[1], i1126.m_BaseMarkGlyphAnchorPoint)
  i1126.m_CombiningMarkGlyphID = i1127[2]
  i1126.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i1127[3], i1126.m_CombiningMarkPositionAdjustment)
  return i1126
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i1132 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i1133 = data
  request.r(i1133[0], i1133[1], 0, i1132, 'regularTypeface')
  request.r(i1133[2], i1133[3], 0, i1132, 'italicTypeface')
  return i1132
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i1134 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i1135 = data
  i1134.Name = i1135[0]
  i1134.PointSize = i1135[1]
  i1134.Scale = i1135[2]
  i1134.CharacterCount = i1135[3]
  i1134.LineHeight = i1135[4]
  i1134.Baseline = i1135[5]
  i1134.Ascender = i1135[6]
  i1134.CapHeight = i1135[7]
  i1134.Descender = i1135[8]
  i1134.CenterLine = i1135[9]
  i1134.SuperscriptOffset = i1135[10]
  i1134.SubscriptOffset = i1135[11]
  i1134.SubSize = i1135[12]
  i1134.Underline = i1135[13]
  i1134.UnderlineThickness = i1135[14]
  i1134.strikethrough = i1135[15]
  i1134.strikethroughThickness = i1135[16]
  i1134.TabWidth = i1135[17]
  i1134.Padding = i1135[18]
  i1134.AtlasWidth = i1135[19]
  i1134.AtlasHeight = i1135[20]
  return i1134
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i1138 = root || request.c( 'TMPro.TMP_Glyph' )
  var i1139 = data
  i1138.id = i1139[0]
  i1138.x = i1139[1]
  i1138.y = i1139[2]
  i1138.width = i1139[3]
  i1138.height = i1139[4]
  i1138.xOffset = i1139[5]
  i1138.yOffset = i1139[6]
  i1138.xAdvance = i1139[7]
  i1138.scale = i1139[8]
  return i1138
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i1140 = root || request.c( 'TMPro.KerningTable' )
  var i1141 = data
  var i1143 = i1141[0]
  var i1142 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i1143.length; i += 1) {
    i1142.add(request.d('TMPro.KerningPair', i1143[i + 0]));
  }
  i1140.kerningPairs = i1142
  return i1140
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i1146 = root || request.c( 'TMPro.KerningPair' )
  var i1147 = data
  i1146.xOffset = i1147[0]
  i1146.m_FirstGlyph = i1147[1]
  i1146.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1147[2], i1146.m_FirstGlyphAdjustments)
  i1146.m_SecondGlyph = i1147[3]
  i1146.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1147[4], i1146.m_SecondGlyphAdjustments)
  i1146.m_IgnoreSpacingAdjustments = !!i1147[5]
  return i1146
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1148 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1149 = data
  i1148.m_FaceIndex = i1149[0]
  i1148.m_FamilyName = i1149[1]
  i1148.m_StyleName = i1149[2]
  i1148.m_PointSize = i1149[3]
  i1148.m_Scale = i1149[4]
  i1148.m_UnitsPerEM = i1149[5]
  i1148.m_LineHeight = i1149[6]
  i1148.m_AscentLine = i1149[7]
  i1148.m_CapLine = i1149[8]
  i1148.m_MeanLine = i1149[9]
  i1148.m_Baseline = i1149[10]
  i1148.m_DescentLine = i1149[11]
  i1148.m_SuperscriptOffset = i1149[12]
  i1148.m_SuperscriptSize = i1149[13]
  i1148.m_SubscriptOffset = i1149[14]
  i1148.m_SubscriptSize = i1149[15]
  i1148.m_UnderlineOffset = i1149[16]
  i1148.m_UnderlineThickness = i1149[17]
  i1148.m_StrikethroughOffset = i1149[18]
  i1148.m_StrikethroughThickness = i1149[19]
  i1148.m_TabWidth = i1149[20]
  return i1148
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1150 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1151 = data
  i1150.useSafeMode = !!i1151[0]
  i1150.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1151[1], i1150.safeModeOptions)
  i1150.timeScale = i1151[2]
  i1150.unscaledTimeScale = i1151[3]
  i1150.useSmoothDeltaTime = !!i1151[4]
  i1150.maxSmoothUnscaledTime = i1151[5]
  i1150.rewindCallbackMode = i1151[6]
  i1150.showUnityEditorReport = !!i1151[7]
  i1150.logBehaviour = i1151[8]
  i1150.drawGizmos = !!i1151[9]
  i1150.defaultRecyclable = !!i1151[10]
  i1150.defaultAutoPlay = i1151[11]
  i1150.defaultUpdateType = i1151[12]
  i1150.defaultTimeScaleIndependent = !!i1151[13]
  i1150.defaultEaseType = i1151[14]
  i1150.defaultEaseOvershootOrAmplitude = i1151[15]
  i1150.defaultEasePeriod = i1151[16]
  i1150.defaultAutoKill = !!i1151[17]
  i1150.defaultLoopType = i1151[18]
  i1150.debugMode = !!i1151[19]
  i1150.debugStoreTargetId = !!i1151[20]
  i1150.showPreviewPanel = !!i1151[21]
  i1150.storeSettingsLocation = i1151[22]
  i1150.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1151[23], i1150.modules)
  i1150.createASMDEF = !!i1151[24]
  i1150.showPlayingTweens = !!i1151[25]
  i1150.showPausedTweens = !!i1151[26]
  return i1150
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1152 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1153 = data
  i1152.logBehaviour = i1153[0]
  i1152.nestedTweenFailureBehaviour = i1153[1]
  return i1152
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1154 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1155 = data
  i1154.showPanel = !!i1155[0]
  i1154.audioEnabled = !!i1155[1]
  i1154.physicsEnabled = !!i1155[2]
  i1154.physics2DEnabled = !!i1155[3]
  i1154.spriteEnabled = !!i1155[4]
  i1154.uiEnabled = !!i1155[5]
  i1154.uiToolkitEnabled = !!i1155[6]
  i1154.textMeshProEnabled = !!i1155[7]
  i1154.tk2DEnabled = !!i1155[8]
  i1154.deAudioEnabled = !!i1155[9]
  i1154.deUnityExtendedEnabled = !!i1155[10]
  i1154.epoOutlineEnabled = !!i1155[11]
  return i1154
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1156 = root || request.c( 'TMPro.TMP_Settings' )
  var i1157 = data
  i1156.assetVersion = i1157[0]
  i1156.m_TextWrappingMode = i1157[1]
  i1156.m_enableKerning = !!i1157[2]
  var i1159 = i1157[3]
  var i1158 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i1159.length; i += 1) {
    i1158.add(i1159[i + 0]);
  }
  i1156.m_ActiveFontFeatures = i1158
  i1156.m_enableExtraPadding = !!i1157[4]
  i1156.m_enableTintAllSprites = !!i1157[5]
  i1156.m_enableParseEscapeCharacters = !!i1157[6]
  i1156.m_EnableRaycastTarget = !!i1157[7]
  i1156.m_GetFontFeaturesAtRuntime = !!i1157[8]
  i1156.m_missingGlyphCharacter = i1157[9]
  i1156.m_ClearDynamicDataOnBuild = !!i1157[10]
  i1156.m_warningsDisabled = !!i1157[11]
  request.r(i1157[12], i1157[13], 0, i1156, 'm_defaultFontAsset')
  i1156.m_defaultFontAssetPath = i1157[14]
  i1156.m_defaultFontSize = i1157[15]
  i1156.m_defaultAutoSizeMinRatio = i1157[16]
  i1156.m_defaultAutoSizeMaxRatio = i1157[17]
  i1156.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1157[18], i1157[19] )
  i1156.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1157[20], i1157[21] )
  i1156.m_autoSizeTextContainer = !!i1157[22]
  i1156.m_IsTextObjectScaleStatic = !!i1157[23]
  var i1161 = i1157[24]
  var i1160 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1161.length; i += 2) {
  request.r(i1161[i + 0], i1161[i + 1], 1, i1160, '')
  }
  i1156.m_fallbackFontAssets = i1160
  i1156.m_matchMaterialPreset = !!i1157[25]
  i1156.m_HideSubTextObjects = !!i1157[26]
  request.r(i1157[27], i1157[28], 0, i1156, 'm_defaultSpriteAsset')
  i1156.m_defaultSpriteAssetPath = i1157[29]
  i1156.m_enableEmojiSupport = !!i1157[30]
  i1156.m_MissingCharacterSpriteUnicode = i1157[31]
  var i1163 = i1157[32]
  var i1162 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i1163.length; i += 2) {
  request.r(i1163[i + 0], i1163[i + 1], 1, i1162, '')
  }
  i1156.m_EmojiFallbackTextAssets = i1162
  i1156.m_defaultColorGradientPresetsPath = i1157[33]
  request.r(i1157[34], i1157[35], 0, i1156, 'm_defaultStyleSheet')
  i1156.m_StyleSheetsResourcePath = i1157[36]
  request.r(i1157[37], i1157[38], 0, i1156, 'm_leadingCharacters')
  request.r(i1157[39], i1157[40], 0, i1156, 'm_followingCharacters')
  i1156.m_UseModernHangulLineBreakingRules = !!i1157[41]
  return i1156
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1166 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1167 = data
  request.r(i1167[0], i1167[1], 0, i1166, 'spriteSheet')
  var i1169 = i1167[2]
  var i1168 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1169.length; i += 1) {
    i1168.add(request.d('TMPro.TMP_Sprite', i1169[i + 0]));
  }
  i1166.spriteInfoList = i1168
  var i1171 = i1167[3]
  var i1170 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1171.length; i += 2) {
  request.r(i1171[i + 0], i1171[i + 1], 1, i1170, '')
  }
  i1166.fallbackSpriteAssets = i1170
  var i1173 = i1167[4]
  var i1172 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1173.length; i += 1) {
    i1172.add(request.d('TMPro.TMP_SpriteCharacter', i1173[i + 0]));
  }
  i1166.m_SpriteCharacterTable = i1172
  var i1175 = i1167[5]
  var i1174 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1175.length; i += 1) {
    i1174.add(request.d('TMPro.TMP_SpriteGlyph', i1175[i + 0]));
  }
  i1166.m_GlyphTable = i1174
  i1166.m_Version = i1167[6]
  i1166.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1167[7], i1166.m_FaceInfo)
  request.r(i1167[8], i1167[9], 0, i1166, 'm_Material')
  return i1166
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1178 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1179 = data
  i1178.name = i1179[0]
  i1178.hashCode = i1179[1]
  i1178.unicode = i1179[2]
  i1178.pivot = new pc.Vec2( i1179[3], i1179[4] )
  request.r(i1179[5], i1179[6], 0, i1178, 'sprite')
  i1178.id = i1179[7]
  i1178.x = i1179[8]
  i1178.y = i1179[9]
  i1178.width = i1179[10]
  i1178.height = i1179[11]
  i1178.xOffset = i1179[12]
  i1178.yOffset = i1179[13]
  i1178.xAdvance = i1179[14]
  i1178.scale = i1179[15]
  return i1178
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1184 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1185 = data
  i1184.m_Name = i1185[0]
  i1184.m_ElementType = i1185[1]
  i1184.m_Unicode = i1185[2]
  i1184.m_GlyphIndex = i1185[3]
  i1184.m_Scale = i1185[4]
  return i1184
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1188 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1189 = data
  request.r(i1189[0], i1189[1], 0, i1188, 'sprite')
  i1188.m_Index = i1189[2]
  i1188.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1189[3], i1188.m_Metrics)
  i1188.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1189[4], i1188.m_GlyphRect)
  i1188.m_Scale = i1189[5]
  i1188.m_AtlasIndex = i1189[6]
  i1188.m_ClassDefinitionType = i1189[7]
  return i1188
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1190 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1191 = data
  var i1193 = i1191[0]
  var i1192 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1193.length; i += 1) {
    i1192.add(request.d('TMPro.TMP_Style', i1193[i + 0]));
  }
  i1190.m_StyleList = i1192
  return i1190
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1196 = root || request.c( 'TMPro.TMP_Style' )
  var i1197 = data
  i1196.m_Name = i1197[0]
  i1196.m_HashCode = i1197[1]
  i1196.m_OpeningDefinition = i1197[2]
  i1196.m_ClosingDefinition = i1197[3]
  i1196.m_OpeningTagArray = i1197[4]
  i1196.m_ClosingTagArray = i1197[5]
  return i1196
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1198 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1199 = data
  var i1201 = i1199[0]
  var i1200 = []
  for(var i = 0; i < i1201.length; i += 1) {
    i1200.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1201[i + 0]) );
  }
  i1198.files = i1200
  i1198.componentToPrefabIds = i1199[1]
  return i1198
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1204 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1205 = data
  i1204.path = i1205[0]
  request.r(i1205[1], i1205[2], 0, i1204, 'unityObject')
  return i1204
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1206 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1207 = data
  var i1209 = i1207[0]
  var i1208 = []
  for(var i = 0; i < i1209.length; i += 1) {
    i1208.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1209[i + 0]) );
  }
  i1206.scriptsExecutionOrder = i1208
  var i1211 = i1207[1]
  var i1210 = []
  for(var i = 0; i < i1211.length; i += 1) {
    i1210.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1211[i + 0]) );
  }
  i1206.sortingLayers = i1210
  var i1213 = i1207[2]
  var i1212 = []
  for(var i = 0; i < i1213.length; i += 1) {
    i1212.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1213[i + 0]) );
  }
  i1206.cullingLayers = i1212
  i1206.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1207[3], i1206.timeSettings)
  i1206.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1207[4], i1206.physicsSettings)
  i1206.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1207[5], i1206.physics2DSettings)
  i1206.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1207[6], i1206.qualitySettings)
  i1206.enableRealtimeShadows = !!i1207[7]
  i1206.enableAutoInstancing = !!i1207[8]
  i1206.enableStaticBatching = !!i1207[9]
  i1206.enableDynamicBatching = !!i1207[10]
  i1206.lightmapEncodingQuality = i1207[11]
  i1206.desiredColorSpace = i1207[12]
  var i1215 = i1207[13]
  var i1214 = []
  for(var i = 0; i < i1215.length; i += 1) {
    i1214.push( i1215[i + 0] );
  }
  i1206.allTags = i1214
  return i1206
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1218 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1219 = data
  i1218.name = i1219[0]
  i1218.value = i1219[1]
  return i1218
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1222 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1223 = data
  i1222.id = i1223[0]
  i1222.name = i1223[1]
  i1222.value = i1223[2]
  return i1222
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1226 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1227 = data
  i1226.id = i1227[0]
  i1226.name = i1227[1]
  return i1226
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1228 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1229 = data
  i1228.fixedDeltaTime = i1229[0]
  i1228.maximumDeltaTime = i1229[1]
  i1228.timeScale = i1229[2]
  i1228.maximumParticleTimestep = i1229[3]
  return i1228
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1230 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1231 = data
  i1230.gravity = new pc.Vec3( i1231[0], i1231[1], i1231[2] )
  i1230.defaultSolverIterations = i1231[3]
  i1230.bounceThreshold = i1231[4]
  i1230.autoSyncTransforms = !!i1231[5]
  i1230.autoSimulation = !!i1231[6]
  var i1233 = i1231[7]
  var i1232 = []
  for(var i = 0; i < i1233.length; i += 1) {
    i1232.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1233[i + 0]) );
  }
  i1230.collisionMatrix = i1232
  return i1230
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1236 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1237 = data
  i1236.enabled = !!i1237[0]
  i1236.layerId = i1237[1]
  i1236.otherLayerId = i1237[2]
  return i1236
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1238 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1239 = data
  request.r(i1239[0], i1239[1], 0, i1238, 'material')
  i1238.gravity = new pc.Vec2( i1239[2], i1239[3] )
  i1238.positionIterations = i1239[4]
  i1238.velocityIterations = i1239[5]
  i1238.velocityThreshold = i1239[6]
  i1238.maxLinearCorrection = i1239[7]
  i1238.maxAngularCorrection = i1239[8]
  i1238.maxTranslationSpeed = i1239[9]
  i1238.maxRotationSpeed = i1239[10]
  i1238.baumgarteScale = i1239[11]
  i1238.baumgarteTOIScale = i1239[12]
  i1238.timeToSleep = i1239[13]
  i1238.linearSleepTolerance = i1239[14]
  i1238.angularSleepTolerance = i1239[15]
  i1238.defaultContactOffset = i1239[16]
  i1238.autoSimulation = !!i1239[17]
  i1238.queriesHitTriggers = !!i1239[18]
  i1238.queriesStartInColliders = !!i1239[19]
  i1238.callbacksOnDisable = !!i1239[20]
  i1238.reuseCollisionCallbacks = !!i1239[21]
  i1238.autoSyncTransforms = !!i1239[22]
  var i1241 = i1239[23]
  var i1240 = []
  for(var i = 0; i < i1241.length; i += 1) {
    i1240.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1241[i + 0]) );
  }
  i1238.collisionMatrix = i1240
  return i1238
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1244 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1245 = data
  i1244.enabled = !!i1245[0]
  i1244.layerId = i1245[1]
  i1244.otherLayerId = i1245[2]
  return i1244
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1246 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1247 = data
  var i1249 = i1247[0]
  var i1248 = []
  for(var i = 0; i < i1249.length; i += 1) {
    i1248.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1249[i + 0]) );
  }
  i1246.qualityLevels = i1248
  var i1251 = i1247[1]
  var i1250 = []
  for(var i = 0; i < i1251.length; i += 1) {
    i1250.push( i1251[i + 0] );
  }
  i1246.names = i1250
  i1246.shadows = i1247[2]
  i1246.anisotropicFiltering = i1247[3]
  i1246.antiAliasing = i1247[4]
  i1246.lodBias = i1247[5]
  i1246.shadowCascades = i1247[6]
  i1246.shadowDistance = i1247[7]
  i1246.shadowmaskMode = i1247[8]
  i1246.shadowProjection = i1247[9]
  i1246.shadowResolution = i1247[10]
  i1246.softParticles = !!i1247[11]
  i1246.softVegetation = !!i1247[12]
  i1246.activeColorSpace = i1247[13]
  i1246.desiredColorSpace = i1247[14]
  i1246.masterTextureLimit = i1247[15]
  i1246.maxQueuedFrames = i1247[16]
  i1246.particleRaycastBudget = i1247[17]
  i1246.pixelLightCount = i1247[18]
  i1246.realtimeReflectionProbes = !!i1247[19]
  i1246.shadowCascade2Split = i1247[20]
  i1246.shadowCascade4Split = new pc.Vec3( i1247[21], i1247[22], i1247[23] )
  i1246.streamingMipmapsActive = !!i1247[24]
  i1246.vSyncCount = i1247[25]
  i1246.asyncUploadBufferSize = i1247[26]
  i1246.asyncUploadTimeSlice = i1247[27]
  i1246.billboardsFaceCameraPosition = !!i1247[28]
  i1246.shadowNearPlaneOffset = i1247[29]
  i1246.streamingMipmapsMemoryBudget = i1247[30]
  i1246.maximumLODLevel = i1247[31]
  i1246.streamingMipmapsAddAllCameras = !!i1247[32]
  i1246.streamingMipmapsMaxLevelReduction = i1247[33]
  i1246.streamingMipmapsRenderersPerFrame = i1247[34]
  i1246.resolutionScalingFixedDPIFactor = i1247[35]
  i1246.streamingMipmapsMaxFileIORequests = i1247[36]
  i1246.currentQualityLevel = i1247[37]
  return i1246
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1256 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1257 = data
  i1256.weight = i1257[0]
  i1256.vertices = i1257[1]
  i1256.normals = i1257[2]
  i1256.tangents = i1257[3]
  return i1256
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1260 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1261 = data
  i1260.mode = i1261[0]
  i1260.parameter = i1261[1]
  i1260.threshold = i1261[2]
  return i1260
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i1262 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i1263 = data
  i1262.m_XCoordinate = i1263[0]
  i1262.m_YCoordinate = i1263[1]
  return i1262
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i1264 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i1265 = data
  i1264.m_XPositionAdjustment = i1265[0]
  i1264.m_YPositionAdjustment = i1265[1]
  return i1264
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1266 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1267 = data
  i1266.xPlacement = i1267[0]
  i1266.yPlacement = i1267[1]
  i1266.xAdvance = i1267[2]
  i1266.yAdvance = i1267[3]
  return i1266
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D":{"usedByComposite":0,"autoTiling":1,"points":2,"enabled":3,"isTrigger":4,"usedByEffector":5,"density":6,"offset":7,"material":9},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.PhysicsMaterial2D":{"name":0,"bounciness":1,"friction":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2}}

Deserializers.requiredComponents = {"49":[50],"51":[50],"52":[50],"53":[50],"54":[50],"55":[50],"56":[57],"58":[2],"59":[60],"61":[60],"62":[60],"63":[60],"64":[60],"65":[60],"66":[35],"67":[35],"68":[35],"69":[35],"70":[35],"71":[35],"72":[35],"73":[35],"74":[35],"75":[35],"76":[35],"77":[35],"78":[35],"79":[2],"80":[81],"82":[83],"84":[83],"27":[26],"7":[2],"36":[35],"38":[17],"85":[12],"86":[2],"87":[88],"89":[41],"90":[27],"91":[26],"92":[81,26],"21":[26,31],"93":[26],"94":[31,26],"95":[81],"96":[31,26],"97":[26],"98":[99],"100":[99],"101":[99],"102":[26],"103":[26],"30":[27],"22":[31,26],"104":[26],"29":[27],"105":[26],"106":[26],"107":[26],"108":[26],"109":[26],"110":[26],"111":[26],"112":[26],"113":[26],"114":[31,26],"115":[26],"116":[26],"117":[26],"118":[26],"119":[31,26],"120":[26],"121":[41],"122":[41],"42":[41],"123":[41],"124":[2],"125":[2]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.MonoBehaviour","CameraFollow2D","UnityEngine.Transform","AutoCameraFit","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Mesh","UnityEngine.Material","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","MoveBetweenPoints","UnityEngine.BoxCollider2D","ClickToStore","PlayerCardUIManager","UnityEngine.GameObject","TMPro.TextMeshProUGUI","UnityEngine.UI.Image","Ply_SoundManager","UnityEngine.AudioSource","UnityEngine.AudioClip","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","TMPro.TMP_FontAsset","UnityEngine.PolygonCollider2D","UnityEngine.PhysicsMaterial2D","UnityEngine.Rigidbody2D","BatStrikeController","CupCollision","SlotTrigger","PlayerCardData","HideOnFirstClick","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.Font","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.InputSystem.UI.InputSystemUIInputModule","UnityEngine.InputSystem.UI.TrackedDeviceRaycaster","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.38f1";

Deserializers.productName = "PLY_MiniSoccer";

Deserializers.lunaInitializationTime = "07/15/2026 03:53:54";

Deserializers.lunaDaysRunning = "0.3";

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

Deserializers.buildID = "32dae9d9-fe7e-40b3-975c-d0079f59d4ec";

Deserializers.runtimeInitializeOnLoadInfos = [[["Unity","Services","Core","Internal","UnityServicesInitializer","EnableServicesInitializationAsync"],["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["DG","Tweening","DOTween","RuntimeOnLoad"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["Unity","Services","Core","Registration","CorePackageInitializer","InitializeOnLoad"],["Unity","Services","Core","Internal","TaskAsyncOperation","SetScheduler"],["Unity","Services","Core","Environments","Client","Scheduler","EngineStateHelper","Init"],["Unity","Services","Core","Environments","Client","Scheduler","ThreadHelper","Init"],["Ua2CoreInitializeCallback","Register"],["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["Unity","AI","Navigation","NavMeshLink","ClearTrackedList"],["Unity","AI","Navigation","NavMeshSurface","ClearNavMeshSurfaces"],["Unity","AI","Navigation","NavMeshModifierVolume","ClearNavMeshModifiers"],["Unity","AI","Navigation","NavMeshModifier","ClearNavMeshModifiers"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["Unity","Services","Core","Internal","UnityServicesInitializer","CreateStaticInstance"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[["Unity","Services","Core","Environments","Client","Http","JsonHelpers","RegisterTypesForAOT"]],[["Unity","Services","Core","UnityThreadUtils","CaptureUnityThreadInfo"],["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

