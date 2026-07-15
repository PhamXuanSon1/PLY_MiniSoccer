var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i630 = root || request.c( 'UnityEngine.JointSpring' )
  var i631 = data
  i630.spring = i631[0]
  i630.damper = i631[1]
  i630.targetPosition = i631[2]
  return i630
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i632 = root || request.c( 'UnityEngine.JointMotor' )
  var i633 = data
  i632.m_TargetVelocity = i633[0]
  i632.m_Force = i633[1]
  i632.m_FreeSpin = i633[2]
  return i632
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i634 = root || request.c( 'UnityEngine.JointLimits' )
  var i635 = data
  i634.m_Min = i635[0]
  i634.m_Max = i635[1]
  i634.m_Bounciness = i635[2]
  i634.m_BounceMinVelocity = i635[3]
  i634.m_ContactDistance = i635[4]
  i634.minBounce = i635[5]
  i634.maxBounce = i635[6]
  return i634
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i636 = root || request.c( 'UnityEngine.JointDrive' )
  var i637 = data
  i636.m_PositionSpring = i637[0]
  i636.m_PositionDamper = i637[1]
  i636.m_MaximumForce = i637[2]
  i636.m_UseAcceleration = i637[3]
  return i636
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i638 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i639 = data
  i638.m_Spring = i639[0]
  i638.m_Damper = i639[1]
  return i638
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i640 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i641 = data
  i640.m_Limit = i641[0]
  i640.m_Bounciness = i641[1]
  i640.m_ContactDistance = i641[2]
  return i640
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i642 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i643 = data
  i642.m_ExtremumSlip = i643[0]
  i642.m_ExtremumValue = i643[1]
  i642.m_AsymptoteSlip = i643[2]
  i642.m_AsymptoteValue = i643[3]
  i642.m_Stiffness = i643[4]
  return i642
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i644 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i645 = data
  i644.m_LowerAngle = i645[0]
  i644.m_UpperAngle = i645[1]
  return i644
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i646 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i647 = data
  i646.m_MotorSpeed = i647[0]
  i646.m_MaximumMotorTorque = i647[1]
  return i646
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i648 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i649 = data
  i648.m_DampingRatio = i649[0]
  i648.m_Frequency = i649[1]
  i648.m_Angle = i649[2]
  return i648
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i650 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i651 = data
  i650.m_LowerTranslation = i651[0]
  i650.m_UpperTranslation = i651[1]
  return i650
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i652 = root || new pc.UnityMaterial()
  var i653 = data
  i652.name = i653[0]
  request.r(i653[1], i653[2], 0, i652, 'shader')
  i652.renderQueue = i653[3]
  i652.enableInstancing = !!i653[4]
  var i655 = i653[5]
  var i654 = []
  for(var i = 0; i < i655.length; i += 1) {
    i654.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i655[i + 0]) );
  }
  i652.floatParameters = i654
  var i657 = i653[6]
  var i656 = []
  for(var i = 0; i < i657.length; i += 1) {
    i656.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i657[i + 0]) );
  }
  i652.colorParameters = i656
  var i659 = i653[7]
  var i658 = []
  for(var i = 0; i < i659.length; i += 1) {
    i658.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i659[i + 0]) );
  }
  i652.vectorParameters = i658
  var i661 = i653[8]
  var i660 = []
  for(var i = 0; i < i661.length; i += 1) {
    i660.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i661[i + 0]) );
  }
  i652.textureParameters = i660
  var i663 = i653[9]
  var i662 = []
  for(var i = 0; i < i663.length; i += 1) {
    i662.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i663[i + 0]) );
  }
  i652.materialFlags = i662
  return i652
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i666 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i667 = data
  i666.name = i667[0]
  i666.value = i667[1]
  return i666
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i670 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i671 = data
  i670.name = i671[0]
  i670.value = new pc.Color(i671[1], i671[2], i671[3], i671[4])
  return i670
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i674 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i675 = data
  i674.name = i675[0]
  i674.value = new pc.Vec4( i675[1], i675[2], i675[3], i675[4] )
  return i674
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i678 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i679 = data
  i678.name = i679[0]
  request.r(i679[1], i679[2], 0, i678, 'value')
  return i678
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i682 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i683 = data
  i682.name = i683[0]
  i682.enabled = !!i683[1]
  return i682
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i684 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i685 = data
  i684.name = i685[0]
  i684.width = i685[1]
  i684.height = i685[2]
  i684.mipmapCount = i685[3]
  i684.anisoLevel = i685[4]
  i684.filterMode = i685[5]
  i684.hdr = !!i685[6]
  i684.format = i685[7]
  i684.wrapMode = i685[8]
  i684.alphaIsTransparency = !!i685[9]
  i684.alphaSource = i685[10]
  i684.graphicsFormat = i685[11]
  i684.sRGBTexture = !!i685[12]
  i684.desiredColorSpace = i685[13]
  i684.wrapU = i685[14]
  i684.wrapV = i685[15]
  return i684
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i686 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i687 = data
  i686.name = i687[0]
  i686.halfPrecision = !!i687[1]
  i686.useSimplification = !!i687[2]
  i686.useUInt32IndexFormat = !!i687[3]
  i686.vertexCount = i687[4]
  i686.aabb = i687[5]
  var i689 = i687[6]
  var i688 = []
  for(var i = 0; i < i689.length; i += 1) {
    i688.push( !!i689[i + 0] );
  }
  i686.streams = i688
  i686.vertices = i687[7]
  var i691 = i687[8]
  var i690 = []
  for(var i = 0; i < i691.length; i += 1) {
    i690.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i691[i + 0]) );
  }
  i686.subMeshes = i690
  var i693 = i687[9]
  var i692 = []
  for(var i = 0; i < i693.length; i += 16) {
    i692.push( new pc.Mat4().setData(i693[i + 0], i693[i + 1], i693[i + 2], i693[i + 3],  i693[i + 4], i693[i + 5], i693[i + 6], i693[i + 7],  i693[i + 8], i693[i + 9], i693[i + 10], i693[i + 11],  i693[i + 12], i693[i + 13], i693[i + 14], i693[i + 15]) );
  }
  i686.bindposes = i692
  var i695 = i687[10]
  var i694 = []
  for(var i = 0; i < i695.length; i += 1) {
    i694.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i695[i + 0]) );
  }
  i686.blendShapes = i694
  return i686
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i700 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i701 = data
  i700.triangles = i701[0]
  return i700
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i706 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i707 = data
  i706.name = i707[0]
  var i709 = i707[1]
  var i708 = []
  for(var i = 0; i < i709.length; i += 1) {
    i708.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i709[i + 0]) );
  }
  i706.frames = i708
  return i706
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i710 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i711 = data
  i710.name = i711[0]
  i710.index = i711[1]
  i710.startup = !!i711[2]
  return i710
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i712 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i713 = data
  i712.aspect = i713[0]
  i712.orthographic = !!i713[1]
  i712.orthographicSize = i713[2]
  i712.backgroundColor = new pc.Color(i713[3], i713[4], i713[5], i713[6])
  i712.nearClipPlane = i713[7]
  i712.farClipPlane = i713[8]
  i712.fieldOfView = i713[9]
  i712.depth = i713[10]
  i712.clearFlags = i713[11]
  i712.cullingMask = i713[12]
  i712.rect = i713[13]
  request.r(i713[14], i713[15], 0, i712, 'targetTexture')
  i712.usePhysicalProperties = !!i713[16]
  i712.focalLength = i713[17]
  i712.sensorSize = new pc.Vec2( i713[18], i713[19] )
  i712.lensShift = new pc.Vec2( i713[20], i713[21] )
  i712.gateFit = i713[22]
  i712.commandBufferCount = i713[23]
  i712.cameraType = i713[24]
  i712.enabled = !!i713[25]
  return i712
}

Deserializers["CameraFollow2D"] = function (request, data, root) {
  var i714 = root || request.c( 'CameraFollow2D' )
  var i715 = data
  request.r(i715[0], i715[1], 0, i714, 'target')
  i714.smoothTime = i715[2]
  i714.offset = new pc.Vec3( i715[3], i715[4], i715[5] )
  i714.followY = !!i715[6]
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

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i784 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i785 = data
  i784.color = new pc.Color(i785[0], i785[1], i785[2], i785[3])
  request.r(i785[4], i785[5], 0, i784, 'sprite')
  i784.flipX = !!i785[6]
  i784.flipY = !!i785[7]
  i784.drawMode = i785[8]
  i784.size = new pc.Vec2( i785[9], i785[10] )
  i784.tileMode = i785[11]
  i784.adaptiveModeThreshold = i785[12]
  i784.maskInteraction = i785[13]
  i784.spriteSortPoint = i785[14]
  i784.enabled = !!i785[15]
  request.r(i785[16], i785[17], 0, i784, 'sharedMaterial')
  var i787 = i785[18]
  var i786 = []
  for(var i = 0; i < i787.length; i += 2) {
  request.r(i787[i + 0], i787[i + 1], 2, i786, '')
  }
  i784.sharedMaterials = i786
  i784.receiveShadows = !!i785[19]
  i784.shadowCastingMode = i785[20]
  i784.sortingLayerID = i785[21]
  i784.sortingOrder = i785[22]
  i784.lightmapIndex = i785[23]
  i784.lightmapSceneIndex = i785[24]
  i784.lightmapScaleOffset = new pc.Vec4( i785[25], i785[26], i785[27], i785[28] )
  i784.lightProbeUsage = i785[29]
  i784.reflectionProbeUsage = i785[30]
  return i784
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i788 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i789 = data
  request.r(i789[0], i789[1], 0, i788, 'animatorController')
  request.r(i789[2], i789[3], 0, i788, 'avatar')
  i788.updateMode = i789[4]
  i788.hasTransformHierarchy = !!i789[5]
  i788.applyRootMotion = !!i789[6]
  var i791 = i789[7]
  var i790 = []
  for(var i = 0; i < i791.length; i += 2) {
  request.r(i791[i + 0], i791[i + 1], 2, i790, '')
  }
  i788.humanBones = i790
  i788.enabled = !!i789[8]
  return i788
}

Deserializers["MoveBetweenPoints"] = function (request, data, root) {
  var i794 = root || request.c( 'MoveBetweenPoints' )
  var i795 = data
  request.r(i795[0], i795[1], 0, i794, 'pointA')
  request.r(i795[2], i795[3], 0, i794, 'pointB')
  i794.duration = i795[4]
  return i794
}

Deserializers["PlayerCardUIManager"] = function (request, data, root) {
  var i796 = root || request.c( 'PlayerCardUIManager' )
  var i797 = data
  request.r(i797[0], i797[1], 0, i796, 'cardPanel')
  var i799 = i797[2]
  var i798 = []
  for(var i = 0; i < i799.length; i += 2) {
  request.r(i799[i + 0], i799[i + 1], 2, i798, '')
  }
  i796.extraObjectsToActivate = i798
  i796.waitTime = i797[3]
  var i801 = i797[4]
  var i800 = []
  for(var i = 0; i < i801.length; i += 2) {
  request.r(i801[i + 0], i801[i + 1], 2, i800, '')
  }
  i796.objectsToTurnOnAfterWait = i800
  var i803 = i797[5]
  var i802 = []
  for(var i = 0; i < i803.length; i += 2) {
  request.r(i803[i + 0], i803[i + 1], 2, i802, '')
  }
  i796.objectsToTurnOffAfterWait = i802
  request.r(i797[6], i797[7], 0, i796, 'nationalityText')
  request.r(i797[8], i797[9], 0, i796, 'playerImage')
  request.r(i797[10], i797[11], 0, i796, 'flagImage')
  return i796
}

Deserializers["Ply_SoundManager"] = function (request, data, root) {
  var i806 = root || request.c( 'Ply_SoundManager' )
  var i807 = data
  i806.fxAudio = request.d('FxAudio', i807[0], i806.fxAudio)
  request.r(i807[1], i807[2], 0, i806, 'bgm1')
  return i806
}

Deserializers["FxAudio"] = function (request, data, root) {
  var i808 = root || request.c( 'FxAudio' )
  var i809 = data
  i808.ClickBox = request.d('SoundData', i809[0], i808.ClickBox)
  i808.Happy = request.d('SoundData', i809[1], i808.Happy)
  i808.Wrong = request.d('SoundData', i809[2], i808.Wrong)
  i808.Spray = request.d('SoundData', i809[3], i808.Spray)
  i808.Brush = request.d('SoundData', i809[4], i808.Brush)
  return i808
}

Deserializers["SoundData"] = function (request, data, root) {
  var i810 = root || request.c( 'SoundData' )
  var i811 = data
  request.r(i811[0], i811[1], 0, i810, 'clip')
  i810.repeatCount = i811[2]
  return i810
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i812 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i813 = data
  request.r(i813[0], i813[1], 0, i812, 'clip')
  request.r(i813[2], i813[3], 0, i812, 'outputAudioMixerGroup')
  i812.playOnAwake = !!i813[4]
  i812.loop = !!i813[5]
  i812.time = i813[6]
  i812.volume = i813[7]
  i812.pitch = i813[8]
  i812.enabled = !!i813[9]
  return i812
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i814 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i815 = data
  i814.pivot = new pc.Vec2( i815[0], i815[1] )
  i814.anchorMin = new pc.Vec2( i815[2], i815[3] )
  i814.anchorMax = new pc.Vec2( i815[4], i815[5] )
  i814.sizeDelta = new pc.Vec2( i815[6], i815[7] )
  i814.anchoredPosition3D = new pc.Vec3( i815[8], i815[9], i815[10] )
  i814.rotation = new pc.Quat(i815[11], i815[12], i815[13], i815[14])
  i814.scale = new pc.Vec3( i815[15], i815[16], i815[17] )
  return i814
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i816 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i817 = data
  i816.planeDistance = i817[0]
  i816.referencePixelsPerUnit = i817[1]
  i816.isFallbackOverlay = !!i817[2]
  i816.renderMode = i817[3]
  i816.renderOrder = i817[4]
  i816.sortingLayerName = i817[5]
  i816.sortingOrder = i817[6]
  i816.scaleFactor = i817[7]
  request.r(i817[8], i817[9], 0, i816, 'worldCamera')
  i816.overrideSorting = !!i817[10]
  i816.pixelPerfect = !!i817[11]
  i816.targetDisplay = i817[12]
  i816.overridePixelPerfect = !!i817[13]
  i816.enabled = !!i817[14]
  return i816
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i818 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i819 = data
  i818.m_UiScaleMode = i819[0]
  i818.m_ReferencePixelsPerUnit = i819[1]
  i818.m_ScaleFactor = i819[2]
  i818.m_ReferenceResolution = new pc.Vec2( i819[3], i819[4] )
  i818.m_ScreenMatchMode = i819[5]
  i818.m_MatchWidthOrHeight = i819[6]
  i818.m_PhysicalUnit = i819[7]
  i818.m_FallbackScreenDPI = i819[8]
  i818.m_DefaultSpriteDPI = i819[9]
  i818.m_DynamicPixelsPerUnit = i819[10]
  i818.m_PresetInfoIsWorld = !!i819[11]
  return i818
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i820 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i821 = data
  i820.m_IgnoreReversedGraphics = !!i821[0]
  i820.m_BlockingObjects = i821[1]
  i820.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i821[2] )
  return i820
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i822 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i823 = data
  i822.cullTransparentMesh = !!i823[0]
  return i822
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i824 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i825 = data
  i824.m_hasFontAssetChanged = !!i825[0]
  request.r(i825[1], i825[2], 0, i824, 'm_baseMaterial')
  i824.m_maskOffset = new pc.Vec4( i825[3], i825[4], i825[5], i825[6] )
  i824.m_text = i825[7]
  i824.m_isRightToLeft = !!i825[8]
  request.r(i825[9], i825[10], 0, i824, 'm_fontAsset')
  request.r(i825[11], i825[12], 0, i824, 'm_sharedMaterial')
  var i827 = i825[13]
  var i826 = []
  for(var i = 0; i < i827.length; i += 2) {
  request.r(i827[i + 0], i827[i + 1], 2, i826, '')
  }
  i824.m_fontSharedMaterials = i826
  request.r(i825[14], i825[15], 0, i824, 'm_fontMaterial')
  var i829 = i825[16]
  var i828 = []
  for(var i = 0; i < i829.length; i += 2) {
  request.r(i829[i + 0], i829[i + 1], 2, i828, '')
  }
  i824.m_fontMaterials = i828
  i824.m_fontColor32 = UnityEngine.Color32.ConstructColor(i825[17], i825[18], i825[19], i825[20])
  i824.m_fontColor = new pc.Color(i825[21], i825[22], i825[23], i825[24])
  i824.m_enableVertexGradient = !!i825[25]
  i824.m_colorMode = i825[26]
  i824.m_fontColorGradient = request.d('TMPro.VertexGradient', i825[27], i824.m_fontColorGradient)
  request.r(i825[28], i825[29], 0, i824, 'm_fontColorGradientPreset')
  request.r(i825[30], i825[31], 0, i824, 'm_spriteAsset')
  i824.m_tintAllSprites = !!i825[32]
  request.r(i825[33], i825[34], 0, i824, 'm_StyleSheet')
  i824.m_TextStyleHashCode = i825[35]
  i824.m_overrideHtmlColors = !!i825[36]
  i824.m_faceColor = UnityEngine.Color32.ConstructColor(i825[37], i825[38], i825[39], i825[40])
  i824.m_fontSize = i825[41]
  i824.m_fontSizeBase = i825[42]
  i824.m_fontWeight = i825[43]
  i824.m_enableAutoSizing = !!i825[44]
  i824.m_fontSizeMin = i825[45]
  i824.m_fontSizeMax = i825[46]
  i824.m_fontStyle = i825[47]
  i824.m_HorizontalAlignment = i825[48]
  i824.m_VerticalAlignment = i825[49]
  i824.m_textAlignment = i825[50]
  i824.m_characterSpacing = i825[51]
  i824.m_wordSpacing = i825[52]
  i824.m_lineSpacing = i825[53]
  i824.m_lineSpacingMax = i825[54]
  i824.m_paragraphSpacing = i825[55]
  i824.m_charWidthMaxAdj = i825[56]
  i824.m_TextWrappingMode = i825[57]
  i824.m_wordWrappingRatios = i825[58]
  i824.m_overflowMode = i825[59]
  request.r(i825[60], i825[61], 0, i824, 'm_linkedTextComponent')
  request.r(i825[62], i825[63], 0, i824, 'parentLinkedComponent')
  i824.m_enableKerning = !!i825[64]
  var i831 = i825[65]
  var i830 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i831.length; i += 1) {
    i830.add(i831[i + 0]);
  }
  i824.m_ActiveFontFeatures = i830
  i824.m_enableExtraPadding = !!i825[66]
  i824.checkPaddingRequired = !!i825[67]
  i824.m_isRichText = !!i825[68]
  i824.m_parseCtrlCharacters = !!i825[69]
  i824.m_isOrthographic = !!i825[70]
  i824.m_isCullingEnabled = !!i825[71]
  i824.m_horizontalMapping = i825[72]
  i824.m_verticalMapping = i825[73]
  i824.m_uvLineOffset = i825[74]
  i824.m_geometrySortingOrder = i825[75]
  i824.m_IsTextObjectScaleStatic = !!i825[76]
  i824.m_VertexBufferAutoSizeReduction = !!i825[77]
  i824.m_useMaxVisibleDescender = !!i825[78]
  i824.m_pageToDisplay = i825[79]
  i824.m_margin = new pc.Vec4( i825[80], i825[81], i825[82], i825[83] )
  i824.m_isUsingLegacyAnimationComponent = !!i825[84]
  i824.m_isVolumetricText = !!i825[85]
  request.r(i825[86], i825[87], 0, i824, 'm_Material')
  i824.m_EmojiFallbackSupport = !!i825[88]
  i824.m_Maskable = !!i825[89]
  i824.m_Color = new pc.Color(i825[90], i825[91], i825[92], i825[93])
  i824.m_RaycastTarget = !!i825[94]
  i824.m_RaycastPadding = new pc.Vec4( i825[95], i825[96], i825[97], i825[98] )
  return i824
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i832 = root || request.c( 'TMPro.VertexGradient' )
  var i833 = data
  i832.topLeft = new pc.Color(i833[0], i833[1], i833[2], i833[3])
  i832.topRight = new pc.Color(i833[4], i833[5], i833[6], i833[7])
  i832.bottomLeft = new pc.Color(i833[8], i833[9], i833[10], i833[11])
  i832.bottomRight = new pc.Color(i833[12], i833[13], i833[14], i833[15])
  return i832
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i836 = root || request.c( 'UnityEngine.UI.Image' )
  var i837 = data
  request.r(i837[0], i837[1], 0, i836, 'm_Sprite')
  i836.m_Type = i837[2]
  i836.m_PreserveAspect = !!i837[3]
  i836.m_FillCenter = !!i837[4]
  i836.m_FillMethod = i837[5]
  i836.m_FillAmount = i837[6]
  i836.m_FillClockwise = !!i837[7]
  i836.m_FillOrigin = i837[8]
  i836.m_UseSpriteMesh = !!i837[9]
  i836.m_PixelsPerUnitMultiplier = i837[10]
  request.r(i837[11], i837[12], 0, i836, 'm_Material')
  i836.m_Maskable = !!i837[13]
  i836.m_Color = new pc.Color(i837[14], i837[15], i837[16], i837[17])
  i836.m_RaycastTarget = !!i837[18]
  i836.m_RaycastPadding = new pc.Vec4( i837[19], i837[20], i837[21], i837[22] )
  return i836
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D"] = function (request, data, root) {
  var i838 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D' )
  var i839 = data
  i838.usedByComposite = !!i839[0]
  i838.autoTiling = !!i839[1]
  var i841 = i839[2]
  var i840 = []
  for(var i = 0; i < i841.length; i += 1) {
  var i843 = i841[i + 0]
  var i842 = []
  for(var i = 0; i < i843.length; i += 2) {
    i842.push( new pc.Vec2( i843[i + 0], i843[i + 1] ) );
  }
    i840.push( i842 );
  }
  i838.points = i840
  i838.enabled = !!i839[3]
  i838.isTrigger = !!i839[4]
  i838.usedByEffector = !!i839[5]
  i838.density = i839[6]
  i838.offset = new pc.Vec2( i839[7], i839[8] )
  request.r(i839[9], i839[10], 0, i838, 'material')
  return i838
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i850 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i851 = data
  i850.usedByComposite = !!i851[0]
  i850.autoTiling = !!i851[1]
  i850.size = new pc.Vec2( i851[2], i851[3] )
  i850.edgeRadius = i851[4]
  i850.enabled = !!i851[5]
  i850.isTrigger = !!i851[6]
  i850.usedByEffector = !!i851[7]
  i850.density = i851[8]
  i850.offset = new pc.Vec2( i851[9], i851[10] )
  request.r(i851[11], i851[12], 0, i850, 'material')
  return i850
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i852 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i853 = data
  i852.bodyType = i853[0]
  request.r(i853[1], i853[2], 0, i852, 'material')
  i852.simulated = !!i853[3]
  i852.useAutoMass = !!i853[4]
  i852.mass = i853[5]
  i852.drag = i853[6]
  i852.angularDrag = i853[7]
  i852.gravityScale = i853[8]
  i852.collisionDetectionMode = i853[9]
  i852.sleepMode = i853[10]
  i852.constraints = i853[11]
  return i852
}

Deserializers["BatStrikeController"] = function (request, data, root) {
  var i854 = root || request.c( 'BatStrikeController' )
  var i855 = data
  i854.pullSpeed = i855[0]
  i854.maxPullDistance = i855[1]
  i854.minHoldTime = i855[2]
  i854.strikeForce = i855[3]
  i854.targetTag = i855[4]
  return i854
}

Deserializers["CupCollision"] = function (request, data, root) {
  var i856 = root || request.c( 'CupCollision' )
  var i857 = data
  i856.baseTag = i857[0]
  request.r(i857[1], i857[2], 0, i856, 'objectToActivate')
  return i856
}

Deserializers["SlotTrigger"] = function (request, data, root) {
  var i858 = root || request.c( 'SlotTrigger' )
  var i859 = data
  request.r(i859[0], i859[1], 0, i858, 'cardData')
  i858.targetTag = i859[2]
  request.r(i859[3], i859[4], 0, i858, 'yAnchor')
  i858.moveSpeed = i859[5]
  return i858
}

Deserializers["HideOnFirstClick"] = function (request, data, root) {
  var i860 = root || request.c( 'HideOnFirstClick' )
  var i861 = data
  request.r(i861[0], i861[1], 0, i860, 'objectToHide')
  return i860
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

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.PhysicsMaterial2D"] = function (request, data, root) {
  var i882 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.PhysicsMaterial2D' )
  var i883 = data
  i882.name = i883[0]
  i882.bounciness = i883[1]
  i882.friction = i883[2]
  return i882
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i884 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i885 = data
  var i887 = i885[0]
  var i886 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i887.length; i += 1) {
    i886.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i887[i + 0]));
  }
  i884.ShaderCompilationErrors = i886
  i884.name = i885[1]
  i884.guid = i885[2]
  var i889 = i885[3]
  var i888 = []
  for(var i = 0; i < i889.length; i += 1) {
    i888.push( i889[i + 0] );
  }
  i884.shaderDefinedKeywords = i888
  var i891 = i885[4]
  var i890 = []
  for(var i = 0; i < i891.length; i += 1) {
    i890.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i891[i + 0]) );
  }
  i884.passes = i890
  var i893 = i885[5]
  var i892 = []
  for(var i = 0; i < i893.length; i += 1) {
    i892.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i893[i + 0]) );
  }
  i884.usePasses = i892
  var i895 = i885[6]
  var i894 = []
  for(var i = 0; i < i895.length; i += 1) {
    i894.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i895[i + 0]) );
  }
  i884.defaultParameterValues = i894
  request.r(i885[7], i885[8], 0, i884, 'unityFallbackShader')
  i884.readDepth = !!i885[9]
  i884.hasDepthOnlyPass = !!i885[10]
  i884.isCreatedByShaderGraph = !!i885[11]
  i884.disableBatching = !!i885[12]
  i884.compiled = !!i885[13]
  return i884
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i898 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i899 = data
  i898.shaderName = i899[0]
  i898.errorMessage = i899[1]
  return i898
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i904 = root || new pc.UnityShaderPass()
  var i905 = data
  i904.id = i905[0]
  i904.subShaderIndex = i905[1]
  i904.name = i905[2]
  i904.passType = i905[3]
  i904.grabPassTextureName = i905[4]
  i904.usePass = !!i905[5]
  i904.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i905[6], i904.zTest)
  i904.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i905[7], i904.zWrite)
  i904.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i905[8], i904.culling)
  i904.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i905[9], i904.blending)
  i904.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i905[10], i904.alphaBlending)
  i904.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i905[11], i904.colorWriteMask)
  i904.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i905[12], i904.offsetUnits)
  i904.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i905[13], i904.offsetFactor)
  i904.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i905[14], i904.stencilRef)
  i904.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i905[15], i904.stencilReadMask)
  i904.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i905[16], i904.stencilWriteMask)
  i904.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i905[17], i904.stencilOp)
  i904.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i905[18], i904.stencilOpFront)
  i904.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i905[19], i904.stencilOpBack)
  var i907 = i905[20]
  var i906 = []
  for(var i = 0; i < i907.length; i += 1) {
    i906.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i907[i + 0]) );
  }
  i904.tags = i906
  var i909 = i905[21]
  var i908 = []
  for(var i = 0; i < i909.length; i += 1) {
    i908.push( i909[i + 0] );
  }
  i904.passDefinedKeywords = i908
  var i911 = i905[22]
  var i910 = []
  for(var i = 0; i < i911.length; i += 1) {
    i910.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i911[i + 0]) );
  }
  i904.passDefinedKeywordGroups = i910
  var i913 = i905[23]
  var i912 = []
  for(var i = 0; i < i913.length; i += 1) {
    i912.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i913[i + 0]) );
  }
  i904.variants = i912
  var i915 = i905[24]
  var i914 = []
  for(var i = 0; i < i915.length; i += 1) {
    i914.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i915[i + 0]) );
  }
  i904.excludedVariants = i914
  i904.hasDepthReader = !!i905[25]
  return i904
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i916 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i917 = data
  i916.val = i917[0]
  i916.name = i917[1]
  return i916
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i918 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i919 = data
  i918.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i919[0], i918.src)
  i918.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i919[1], i918.dst)
  i918.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i919[2], i918.op)
  return i918
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i920 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i921 = data
  i920.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i921[0], i920.pass)
  i920.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i921[1], i920.fail)
  i920.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i921[2], i920.zFail)
  i920.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i921[3], i920.comp)
  return i920
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i924 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i925 = data
  i924.name = i925[0]
  i924.value = i925[1]
  return i924
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i928 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i929 = data
  var i931 = i929[0]
  var i930 = []
  for(var i = 0; i < i931.length; i += 1) {
    i930.push( i931[i + 0] );
  }
  i928.keywords = i930
  i928.hasDiscard = !!i929[1]
  return i928
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i934 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i935 = data
  i934.passId = i935[0]
  i934.subShaderIndex = i935[1]
  var i937 = i935[2]
  var i936 = []
  for(var i = 0; i < i937.length; i += 1) {
    i936.push( i937[i + 0] );
  }
  i934.keywords = i936
  i934.vertexProgram = i935[3]
  i934.fragmentProgram = i935[4]
  i934.exportedForWebGl2 = !!i935[5]
  i934.readDepth = !!i935[6]
  return i934
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i940 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i941 = data
  request.r(i941[0], i941[1], 0, i940, 'shader')
  i940.pass = i941[2]
  return i940
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i944 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i945 = data
  i944.name = i945[0]
  i944.type = i945[1]
  i944.value = new pc.Vec4( i945[2], i945[3], i945[4], i945[5] )
  i944.textureValue = i945[6]
  i944.shaderPropertyFlag = i945[7]
  return i944
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i946 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i947 = data
  i946.name = i947[0]
  request.r(i947[1], i947[2], 0, i946, 'texture')
  i946.aabb = i947[3]
  i946.vertices = i947[4]
  i946.triangles = i947[5]
  i946.textureRect = UnityEngine.Rect.MinMaxRect(i947[6], i947[7], i947[8], i947[9])
  i946.packedRect = UnityEngine.Rect.MinMaxRect(i947[10], i947[11], i947[12], i947[13])
  i946.border = new pc.Vec4( i947[14], i947[15], i947[16], i947[17] )
  i946.transparency = i947[18]
  i946.bounds = i947[19]
  i946.pixelsPerUnit = i947[20]
  i946.textureWidth = i947[21]
  i946.textureHeight = i947[22]
  i946.nativeSize = new pc.Vec2( i947[23], i947[24] )
  i946.pivot = new pc.Vec2( i947[25], i947[26] )
  i946.textureRectOffset = new pc.Vec2( i947[27], i947[28] )
  return i946
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i948 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i949 = data
  i948.name = i949[0]
  return i948
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i950 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i951 = data
  i950.name = i951[0]
  i950.wrapMode = i951[1]
  i950.isLooping = !!i951[2]
  i950.length = i951[3]
  var i953 = i951[4]
  var i952 = []
  for(var i = 0; i < i953.length; i += 1) {
    i952.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i953[i + 0]) );
  }
  i950.curves = i952
  var i955 = i951[5]
  var i954 = []
  for(var i = 0; i < i955.length; i += 1) {
    i954.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i955[i + 0]) );
  }
  i950.events = i954
  i950.halfPrecision = !!i951[6]
  i950._frameRate = i951[7]
  i950.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i951[8], i950.localBounds)
  i950.hasMuscleCurves = !!i951[9]
  var i957 = i951[10]
  var i956 = []
  for(var i = 0; i < i957.length; i += 1) {
    i956.push( i957[i + 0] );
  }
  i950.clipMuscleConstant = i956
  i950.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i951[11], i950.clipBindingConstant)
  return i950
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i960 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i961 = data
  i960.path = i961[0]
  i960.hash = i961[1]
  i960.componentType = i961[2]
  i960.property = i961[3]
  i960.keys = i961[4]
  var i963 = i961[5]
  var i962 = []
  for(var i = 0; i < i963.length; i += 1) {
    i962.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i963[i + 0]) );
  }
  i960.objectReferenceKeys = i962
  return i960
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i966 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i967 = data
  i966.time = i967[0]
  request.r(i967[1], i967[2], 0, i966, 'value')
  return i966
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i970 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i971 = data
  i970.functionName = i971[0]
  i970.floatParameter = i971[1]
  i970.intParameter = i971[2]
  i970.stringParameter = i971[3]
  request.r(i971[4], i971[5], 0, i970, 'objectReferenceParameter')
  i970.time = i971[6]
  return i970
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i972 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i973 = data
  i972.center = new pc.Vec3( i973[0], i973[1], i973[2] )
  i972.extends = new pc.Vec3( i973[3], i973[4], i973[5] )
  return i972
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i976 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i977 = data
  var i979 = i977[0]
  var i978 = []
  for(var i = 0; i < i979.length; i += 1) {
    i978.push( i979[i + 0] );
  }
  i976.genericBindings = i978
  var i981 = i977[1]
  var i980 = []
  for(var i = 0; i < i981.length; i += 1) {
    i980.push( i981[i + 0] );
  }
  i976.pptrCurveMapping = i980
  return i976
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i982 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i983 = data
  i982.name = i983[0]
  i982.ascent = i983[1]
  i982.originalLineHeight = i983[2]
  i982.fontSize = i983[3]
  var i985 = i983[4]
  var i984 = []
  for(var i = 0; i < i985.length; i += 1) {
    i984.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i985[i + 0]) );
  }
  i982.characterInfo = i984
  request.r(i983[5], i983[6], 0, i982, 'texture')
  i982.originalFontSize = i983[7]
  return i982
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i988 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i989 = data
  i988.index = i989[0]
  i988.advance = i989[1]
  i988.bearing = i989[2]
  i988.glyphWidth = i989[3]
  i988.glyphHeight = i989[4]
  i988.minX = i989[5]
  i988.maxX = i989[6]
  i988.minY = i989[7]
  i988.maxY = i989[8]
  i988.uvBottomLeftX = i989[9]
  i988.uvBottomLeftY = i989[10]
  i988.uvBottomRightX = i989[11]
  i988.uvBottomRightY = i989[12]
  i988.uvTopLeftX = i989[13]
  i988.uvTopLeftY = i989[14]
  i988.uvTopRightX = i989[15]
  i988.uvTopRightY = i989[16]
  return i988
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i990 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i991 = data
  i990.name = i991[0]
  var i993 = i991[1]
  var i992 = []
  for(var i = 0; i < i993.length; i += 1) {
    i992.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i993[i + 0]) );
  }
  i990.layers = i992
  var i995 = i991[2]
  var i994 = []
  for(var i = 0; i < i995.length; i += 1) {
    i994.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i995[i + 0]) );
  }
  i990.parameters = i994
  i990.animationClips = i991[3]
  i990.avatarUnsupported = i991[4]
  return i990
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i998 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i999 = data
  i998.name = i999[0]
  i998.defaultWeight = i999[1]
  i998.blendingMode = i999[2]
  i998.avatarMask = i999[3]
  i998.syncedLayerIndex = i999[4]
  i998.syncedLayerAffectsTiming = !!i999[5]
  i998.syncedLayers = i999[6]
  i998.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i999[7], i998.stateMachine)
  return i998
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i1000 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i1001 = data
  i1000.id = i1001[0]
  i1000.name = i1001[1]
  i1000.path = i1001[2]
  var i1003 = i1001[3]
  var i1002 = []
  for(var i = 0; i < i1003.length; i += 1) {
    i1002.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i1003[i + 0]) );
  }
  i1000.states = i1002
  var i1005 = i1001[4]
  var i1004 = []
  for(var i = 0; i < i1005.length; i += 1) {
    i1004.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1005[i + 0]) );
  }
  i1000.machines = i1004
  var i1007 = i1001[5]
  var i1006 = []
  for(var i = 0; i < i1007.length; i += 1) {
    i1006.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1007[i + 0]) );
  }
  i1000.entryStateTransitions = i1006
  var i1009 = i1001[6]
  var i1008 = []
  for(var i = 0; i < i1009.length; i += 1) {
    i1008.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1009[i + 0]) );
  }
  i1000.exitStateTransitions = i1008
  var i1011 = i1001[7]
  var i1010 = []
  for(var i = 0; i < i1011.length; i += 1) {
    i1010.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1011[i + 0]) );
  }
  i1000.anyStateTransitions = i1010
  i1000.defaultStateId = i1001[8]
  return i1000
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i1014 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i1015 = data
  i1014.id = i1015[0]
  i1014.name = i1015[1]
  i1014.cycleOffset = i1015[2]
  i1014.cycleOffsetParameter = i1015[3]
  i1014.cycleOffsetParameterActive = !!i1015[4]
  i1014.mirror = !!i1015[5]
  i1014.mirrorParameter = i1015[6]
  i1014.mirrorParameterActive = !!i1015[7]
  i1014.motionId = i1015[8]
  i1014.nameHash = i1015[9]
  i1014.fullPathHash = i1015[10]
  i1014.speed = i1015[11]
  i1014.speedParameter = i1015[12]
  i1014.speedParameterActive = !!i1015[13]
  i1014.tag = i1015[14]
  i1014.tagHash = i1015[15]
  i1014.writeDefaultValues = !!i1015[16]
  var i1017 = i1015[17]
  var i1016 = []
  for(var i = 0; i < i1017.length; i += 2) {
  request.r(i1017[i + 0], i1017[i + 1], 2, i1016, '')
  }
  i1014.behaviours = i1016
  var i1019 = i1015[18]
  var i1018 = []
  for(var i = 0; i < i1019.length; i += 1) {
    i1018.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1019[i + 0]) );
  }
  i1014.transitions = i1018
  return i1014
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1024 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1025 = data
  i1024.fullPath = i1025[0]
  i1024.canTransitionToSelf = !!i1025[1]
  i1024.duration = i1025[2]
  i1024.exitTime = i1025[3]
  i1024.hasExitTime = !!i1025[4]
  i1024.hasFixedDuration = !!i1025[5]
  i1024.interruptionSource = i1025[6]
  i1024.offset = i1025[7]
  i1024.orderedInterruption = !!i1025[8]
  i1024.destinationStateId = i1025[9]
  i1024.isExit = !!i1025[10]
  i1024.mute = !!i1025[11]
  i1024.solo = !!i1025[12]
  var i1027 = i1025[13]
  var i1026 = []
  for(var i = 0; i < i1027.length; i += 1) {
    i1026.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1027[i + 0]) );
  }
  i1024.conditions = i1026
  return i1024
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1032 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1033 = data
  i1032.destinationStateId = i1033[0]
  i1032.isExit = !!i1033[1]
  i1032.mute = !!i1033[2]
  i1032.solo = !!i1033[3]
  var i1035 = i1033[4]
  var i1034 = []
  for(var i = 0; i < i1035.length; i += 1) {
    i1034.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1035[i + 0]) );
  }
  i1032.conditions = i1034
  return i1032
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1038 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1039 = data
  i1038.defaultBool = !!i1039[0]
  i1038.defaultFloat = i1039[1]
  i1038.defaultInt = i1039[2]
  i1038.name = i1039[3]
  i1038.nameHash = i1039[4]
  i1038.type = i1039[5]
  return i1038
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1040 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1041 = data
  i1040.name = i1041[0]
  i1040.bytes64 = i1041[1]
  i1040.data = i1041[2]
  return i1040
}

Deserializers["PlayerCardData"] = function (request, data, root) {
  var i1042 = root || request.c( 'PlayerCardData' )
  var i1043 = data
  i1042.nationality = i1043[0]
  request.r(i1043[1], i1043[2], 0, i1042, 'playerSprite')
  request.r(i1043[3], i1043[4], 0, i1042, 'flagSprite')
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

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1252 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1253 = data
  i1252.mode = i1253[0]
  i1252.parameter = i1253[1]
  i1252.threshold = i1253[2]
  return i1252
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i1254 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i1255 = data
  i1254.m_XCoordinate = i1255[0]
  i1254.m_YCoordinate = i1255[1]
  return i1254
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i1256 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i1257 = data
  i1256.m_XPositionAdjustment = i1257[0]
  i1256.m_YPositionAdjustment = i1257[1]
  return i1256
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1258 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1259 = data
  i1258.xPlacement = i1259[0]
  i1258.yPlacement = i1259[1]
  i1258.xAdvance = i1259[2]
  i1258.yAdvance = i1259[3]
  return i1258
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D":{"usedByComposite":0,"autoTiling":1,"points":2,"enabled":3,"isTrigger":4,"usedByEffector":5,"density":6,"offset":7,"material":9},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.PhysicsMaterial2D":{"name":0,"bounciness":1,"friction":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2}}

Deserializers.requiredComponents = {"47":[48],"49":[48],"50":[48],"51":[48],"52":[48],"53":[48],"54":[55],"56":[2],"57":[58],"59":[58],"60":[58],"61":[58],"62":[58],"63":[58],"64":[33],"65":[33],"66":[33],"67":[33],"68":[33],"69":[33],"70":[33],"71":[33],"72":[33],"73":[33],"74":[33],"75":[33],"76":[33],"77":[2],"78":[79],"80":[81],"82":[81],"24":[23],"34":[33],"36":[32],"83":[11],"84":[2],"85":[86],"87":[39],"88":[24],"89":[23],"90":[79,23],"18":[23,28],"91":[23],"92":[28,23],"93":[79],"94":[28,23],"95":[23],"96":[97],"98":[97],"99":[97],"100":[23],"101":[23],"27":[24],"19":[28,23],"102":[23],"26":[24],"103":[23],"104":[23],"105":[23],"106":[23],"107":[23],"108":[23],"109":[23],"110":[23],"111":[23],"112":[28,23],"113":[23],"114":[23],"115":[23],"116":[23],"117":[28,23],"118":[23],"119":[39],"120":[39],"40":[39],"121":[39],"122":[2],"123":[2]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.MonoBehaviour","CameraFollow2D","UnityEngine.Transform","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Mesh","UnityEngine.Material","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","MoveBetweenPoints","PlayerCardUIManager","UnityEngine.GameObject","TMPro.TextMeshProUGUI","UnityEngine.UI.Image","Ply_SoundManager","UnityEngine.AudioSource","UnityEngine.AudioClip","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","TMPro.TMP_FontAsset","UnityEngine.PolygonCollider2D","UnityEngine.PhysicsMaterial2D","UnityEngine.BoxCollider2D","UnityEngine.Rigidbody2D","BatStrikeController","CupCollision","SlotTrigger","PlayerCardData","HideOnFirstClick","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.Font","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.InputSystem.UI.InputSystemUIInputModule","UnityEngine.InputSystem.UI.TrackedDeviceRaycaster","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.38f1";

Deserializers.productName = "PLY_MiniSoccer";

Deserializers.lunaInitializationTime = "07/15/2026 03:53:54";

Deserializers.lunaDaysRunning = "0.2";

Deserializers.lunaVersion = "7.1.0";

Deserializers.lunaSHA = "cf93782349542fe0b84ad13951a26809f8419628";

Deserializers.creativeName = "";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1765";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4448";

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

Deserializers.buildID = "806fbb36-0bfb-4d4a-b04f-93e7030ea5fc";

Deserializers.runtimeInitializeOnLoadInfos = [[["Unity","Services","Core","Internal","UnityServicesInitializer","EnableServicesInitializationAsync"],["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["DG","Tweening","DOTween","RuntimeOnLoad"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["Unity","Services","Core","Registration","CorePackageInitializer","InitializeOnLoad"],["Unity","Services","Core","Internal","TaskAsyncOperation","SetScheduler"],["Unity","Services","Core","Environments","Client","Scheduler","EngineStateHelper","Init"],["Unity","Services","Core","Environments","Client","Scheduler","ThreadHelper","Init"],["Ua2CoreInitializeCallback","Register"],["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["Unity","AI","Navigation","NavMeshLink","ClearTrackedList"],["Unity","AI","Navigation","NavMeshSurface","ClearNavMeshSurfaces"],["Unity","AI","Navigation","NavMeshModifierVolume","ClearNavMeshModifiers"],["Unity","AI","Navigation","NavMeshModifier","ClearNavMeshModifiers"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["Unity","Services","Core","Internal","UnityServicesInitializer","CreateStaticInstance"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[["Unity","Services","Core","Environments","Client","Http","JsonHelpers","RegisterTypesForAOT"]],[["Unity","Services","Core","UnityThreadUtils","CaptureUnityThreadInfo"],["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

