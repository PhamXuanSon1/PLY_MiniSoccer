var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i4738 = root || request.c( 'UnityEngine.JointSpring' )
  var i4739 = data
  i4738.spring = i4739[0]
  i4738.damper = i4739[1]
  i4738.targetPosition = i4739[2]
  return i4738
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i4740 = root || request.c( 'UnityEngine.JointMotor' )
  var i4741 = data
  i4740.m_TargetVelocity = i4741[0]
  i4740.m_Force = i4741[1]
  i4740.m_FreeSpin = i4741[2]
  return i4740
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i4742 = root || request.c( 'UnityEngine.JointLimits' )
  var i4743 = data
  i4742.m_Min = i4743[0]
  i4742.m_Max = i4743[1]
  i4742.m_Bounciness = i4743[2]
  i4742.m_BounceMinVelocity = i4743[3]
  i4742.m_ContactDistance = i4743[4]
  i4742.minBounce = i4743[5]
  i4742.maxBounce = i4743[6]
  return i4742
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i4744 = root || request.c( 'UnityEngine.JointDrive' )
  var i4745 = data
  i4744.m_PositionSpring = i4745[0]
  i4744.m_PositionDamper = i4745[1]
  i4744.m_MaximumForce = i4745[2]
  i4744.m_UseAcceleration = i4745[3]
  return i4744
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i4746 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i4747 = data
  i4746.m_Spring = i4747[0]
  i4746.m_Damper = i4747[1]
  return i4746
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i4748 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i4749 = data
  i4748.m_Limit = i4749[0]
  i4748.m_Bounciness = i4749[1]
  i4748.m_ContactDistance = i4749[2]
  return i4748
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i4750 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i4751 = data
  i4750.m_ExtremumSlip = i4751[0]
  i4750.m_ExtremumValue = i4751[1]
  i4750.m_AsymptoteSlip = i4751[2]
  i4750.m_AsymptoteValue = i4751[3]
  i4750.m_Stiffness = i4751[4]
  return i4750
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i4752 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i4753 = data
  i4752.m_LowerAngle = i4753[0]
  i4752.m_UpperAngle = i4753[1]
  return i4752
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i4754 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i4755 = data
  i4754.m_MotorSpeed = i4755[0]
  i4754.m_MaximumMotorTorque = i4755[1]
  return i4754
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i4756 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i4757 = data
  i4756.m_DampingRatio = i4757[0]
  i4756.m_Frequency = i4757[1]
  i4756.m_Angle = i4757[2]
  return i4756
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i4758 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i4759 = data
  i4758.m_LowerTranslation = i4759[0]
  i4758.m_UpperTranslation = i4759[1]
  return i4758
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i4760 = root || new pc.UnityMaterial()
  var i4761 = data
  i4760.name = i4761[0]
  request.r(i4761[1], i4761[2], 0, i4760, 'shader')
  i4760.renderQueue = i4761[3]
  i4760.enableInstancing = !!i4761[4]
  var i4763 = i4761[5]
  var i4762 = []
  for(var i = 0; i < i4763.length; i += 1) {
    i4762.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i4763[i + 0]) );
  }
  i4760.floatParameters = i4762
  var i4765 = i4761[6]
  var i4764 = []
  for(var i = 0; i < i4765.length; i += 1) {
    i4764.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i4765[i + 0]) );
  }
  i4760.colorParameters = i4764
  var i4767 = i4761[7]
  var i4766 = []
  for(var i = 0; i < i4767.length; i += 1) {
    i4766.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i4767[i + 0]) );
  }
  i4760.vectorParameters = i4766
  var i4769 = i4761[8]
  var i4768 = []
  for(var i = 0; i < i4769.length; i += 1) {
    i4768.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i4769[i + 0]) );
  }
  i4760.textureParameters = i4768
  var i4771 = i4761[9]
  var i4770 = []
  for(var i = 0; i < i4771.length; i += 1) {
    i4770.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i4771[i + 0]) );
  }
  i4760.materialFlags = i4770
  return i4760
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i4774 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i4775 = data
  i4774.name = i4775[0]
  i4774.value = i4775[1]
  return i4774
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i4778 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i4779 = data
  i4778.name = i4779[0]
  i4778.value = new pc.Color(i4779[1], i4779[2], i4779[3], i4779[4])
  return i4778
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i4782 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i4783 = data
  i4782.name = i4783[0]
  i4782.value = new pc.Vec4( i4783[1], i4783[2], i4783[3], i4783[4] )
  return i4782
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i4786 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i4787 = data
  i4786.name = i4787[0]
  request.r(i4787[1], i4787[2], 0, i4786, 'value')
  return i4786
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i4790 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i4791 = data
  i4790.name = i4791[0]
  i4790.enabled = !!i4791[1]
  return i4790
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i4792 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i4793 = data
  i4792.name = i4793[0]
  i4792.width = i4793[1]
  i4792.height = i4793[2]
  i4792.mipmapCount = i4793[3]
  i4792.anisoLevel = i4793[4]
  i4792.filterMode = i4793[5]
  i4792.hdr = !!i4793[6]
  i4792.format = i4793[7]
  i4792.wrapMode = i4793[8]
  i4792.alphaIsTransparency = !!i4793[9]
  i4792.alphaSource = i4793[10]
  i4792.graphicsFormat = i4793[11]
  i4792.sRGBTexture = !!i4793[12]
  i4792.desiredColorSpace = i4793[13]
  i4792.wrapU = i4793[14]
  i4792.wrapV = i4793[15]
  return i4792
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i4794 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i4795 = data
  i4794.name = i4795[0]
  i4794.halfPrecision = !!i4795[1]
  i4794.useSimplification = !!i4795[2]
  i4794.useUInt32IndexFormat = !!i4795[3]
  i4794.vertexCount = i4795[4]
  i4794.aabb = i4795[5]
  var i4797 = i4795[6]
  var i4796 = []
  for(var i = 0; i < i4797.length; i += 1) {
    i4796.push( !!i4797[i + 0] );
  }
  i4794.streams = i4796
  i4794.vertices = i4795[7]
  var i4799 = i4795[8]
  var i4798 = []
  for(var i = 0; i < i4799.length; i += 1) {
    i4798.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i4799[i + 0]) );
  }
  i4794.subMeshes = i4798
  var i4801 = i4795[9]
  var i4800 = []
  for(var i = 0; i < i4801.length; i += 16) {
    i4800.push( new pc.Mat4().setData(i4801[i + 0], i4801[i + 1], i4801[i + 2], i4801[i + 3],  i4801[i + 4], i4801[i + 5], i4801[i + 6], i4801[i + 7],  i4801[i + 8], i4801[i + 9], i4801[i + 10], i4801[i + 11],  i4801[i + 12], i4801[i + 13], i4801[i + 14], i4801[i + 15]) );
  }
  i4794.bindposes = i4800
  var i4803 = i4795[10]
  var i4802 = []
  for(var i = 0; i < i4803.length; i += 1) {
    i4802.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i4803[i + 0]) );
  }
  i4794.blendShapes = i4802
  return i4794
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i4808 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i4809 = data
  i4808.triangles = i4809[0]
  return i4808
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i4814 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i4815 = data
  i4814.name = i4815[0]
  var i4817 = i4815[1]
  var i4816 = []
  for(var i = 0; i < i4817.length; i += 1) {
    i4816.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i4817[i + 0]) );
  }
  i4814.frames = i4816
  return i4814
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i4818 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i4819 = data
  i4818.name = i4819[0]
  i4818.index = i4819[1]
  i4818.startup = !!i4819[2]
  return i4818
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i4820 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i4821 = data
  i4820.aspect = i4821[0]
  i4820.orthographic = !!i4821[1]
  i4820.orthographicSize = i4821[2]
  i4820.backgroundColor = new pc.Color(i4821[3], i4821[4], i4821[5], i4821[6])
  i4820.nearClipPlane = i4821[7]
  i4820.farClipPlane = i4821[8]
  i4820.fieldOfView = i4821[9]
  i4820.depth = i4821[10]
  i4820.clearFlags = i4821[11]
  i4820.cullingMask = i4821[12]
  i4820.rect = i4821[13]
  request.r(i4821[14], i4821[15], 0, i4820, 'targetTexture')
  i4820.usePhysicalProperties = !!i4821[16]
  i4820.focalLength = i4821[17]
  i4820.sensorSize = new pc.Vec2( i4821[18], i4821[19] )
  i4820.lensShift = new pc.Vec2( i4821[20], i4821[21] )
  i4820.gateFit = i4821[22]
  i4820.commandBufferCount = i4821[23]
  i4820.cameraType = i4821[24]
  i4820.enabled = !!i4821[25]
  return i4820
}

Deserializers["CameraFollow2D"] = function (request, data, root) {
  var i4822 = root || request.c( 'CameraFollow2D' )
  var i4823 = data
  request.r(i4823[0], i4823[1], 0, i4822, 'target')
  i4822.smoothSpeed = i4823[2]
  i4822.offset = new pc.Vec3( i4823[3], i4823[4], i4823[5] )
  i4822.followY = !!i4823[6]
  return i4822
}

Deserializers["AutoCameraFit"] = function (request, data, root) {
  var i4824 = root || request.c( 'AutoCameraFit' )
  var i4825 = data
  request.r(i4825[0], i4825[1], 0, i4824, 'tallScreenObject')
  i4824.tallScreenRatioThreshold = i4825[2]
  i4824.tallScreenYOffset = i4825[3]
  request.r(i4825[4], i4825[5], 0, i4824, 'canvasBtn')
  request.r(i4825[6], i4825[7], 0, i4824, 'targetArea')
  i4824.paddingLandscape = i4825[8]
  i4824.paddingPortrait = i4825[9]
  i4824.extraPaddingSmallScreen = i4825[10]
  i4824.smallScreenThreshold = i4825[11]
  i4824.autoUpdateOnResize = !!i4825[12]
  i4824.adjustInEditMode = !!i4825[13]
  return i4824
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i4826 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i4827 = data
  i4826.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i4827[0], i4826.main)
  i4826.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i4827[1], i4826.colorBySpeed)
  i4826.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i4827[2], i4826.colorOverLifetime)
  i4826.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i4827[3], i4826.emission)
  i4826.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i4827[4], i4826.rotationBySpeed)
  i4826.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i4827[5], i4826.rotationOverLifetime)
  i4826.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i4827[6], i4826.shape)
  i4826.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i4827[7], i4826.sizeBySpeed)
  i4826.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i4827[8], i4826.sizeOverLifetime)
  i4826.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i4827[9], i4826.textureSheetAnimation)
  i4826.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i4827[10], i4826.velocityOverLifetime)
  i4826.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i4827[11], i4826.noise)
  i4826.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i4827[12], i4826.inheritVelocity)
  i4826.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i4827[13], i4826.forceOverLifetime)
  i4826.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i4827[14], i4826.limitVelocityOverLifetime)
  i4826.useAutoRandomSeed = !!i4827[15]
  i4826.randomSeed = i4827[16]
  return i4826
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i4828 = root || new pc.ParticleSystemMain()
  var i4829 = data
  i4828.duration = i4829[0]
  i4828.loop = !!i4829[1]
  i4828.prewarm = !!i4829[2]
  i4828.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4829[3], i4828.startDelay)
  i4828.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4829[4], i4828.startLifetime)
  i4828.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4829[5], i4828.startSpeed)
  i4828.startSize3D = !!i4829[6]
  i4828.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4829[7], i4828.startSizeX)
  i4828.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4829[8], i4828.startSizeY)
  i4828.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4829[9], i4828.startSizeZ)
  i4828.startRotation3D = !!i4829[10]
  i4828.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4829[11], i4828.startRotationX)
  i4828.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4829[12], i4828.startRotationY)
  i4828.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4829[13], i4828.startRotationZ)
  i4828.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i4829[14], i4828.startColor)
  i4828.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4829[15], i4828.gravityModifier)
  i4828.simulationSpace = i4829[16]
  request.r(i4829[17], i4829[18], 0, i4828, 'customSimulationSpace')
  i4828.simulationSpeed = i4829[19]
  i4828.useUnscaledTime = !!i4829[20]
  i4828.scalingMode = i4829[21]
  i4828.playOnAwake = !!i4829[22]
  i4828.maxParticles = i4829[23]
  i4828.emitterVelocityMode = i4829[24]
  i4828.stopAction = i4829[25]
  return i4828
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i4830 = root || new pc.MinMaxCurve()
  var i4831 = data
  i4830.mode = i4831[0]
  i4830.curveMin = new pc.AnimationCurve( { keys_flow: i4831[1] } )
  i4830.curveMax = new pc.AnimationCurve( { keys_flow: i4831[2] } )
  i4830.curveMultiplier = i4831[3]
  i4830.constantMin = i4831[4]
  i4830.constantMax = i4831[5]
  return i4830
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i4832 = root || new pc.MinMaxGradient()
  var i4833 = data
  i4832.mode = i4833[0]
  i4832.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i4833[1], i4832.gradientMin)
  i4832.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i4833[2], i4832.gradientMax)
  i4832.colorMin = new pc.Color(i4833[3], i4833[4], i4833[5], i4833[6])
  i4832.colorMax = new pc.Color(i4833[7], i4833[8], i4833[9], i4833[10])
  return i4832
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i4834 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i4835 = data
  i4834.mode = i4835[0]
  var i4837 = i4835[1]
  var i4836 = []
  for(var i = 0; i < i4837.length; i += 1) {
    i4836.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i4837[i + 0]) );
  }
  i4834.colorKeys = i4836
  var i4839 = i4835[2]
  var i4838 = []
  for(var i = 0; i < i4839.length; i += 1) {
    i4838.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i4839[i + 0]) );
  }
  i4834.alphaKeys = i4838
  return i4834
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i4840 = root || new pc.ParticleSystemColorBySpeed()
  var i4841 = data
  i4840.enabled = !!i4841[0]
  i4840.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i4841[1], i4840.color)
  i4840.range = new pc.Vec2( i4841[2], i4841[3] )
  return i4840
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i4844 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i4845 = data
  i4844.color = new pc.Color(i4845[0], i4845[1], i4845[2], i4845[3])
  i4844.time = i4845[4]
  return i4844
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i4848 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i4849 = data
  i4848.alpha = i4849[0]
  i4848.time = i4849[1]
  return i4848
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i4850 = root || new pc.ParticleSystemColorOverLifetime()
  var i4851 = data
  i4850.enabled = !!i4851[0]
  i4850.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i4851[1], i4850.color)
  return i4850
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i4852 = root || new pc.ParticleSystemEmitter()
  var i4853 = data
  i4852.enabled = !!i4853[0]
  i4852.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4853[1], i4852.rateOverTime)
  i4852.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4853[2], i4852.rateOverDistance)
  var i4855 = i4853[3]
  var i4854 = []
  for(var i = 0; i < i4855.length; i += 1) {
    i4854.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i4855[i + 0]) );
  }
  i4852.bursts = i4854
  return i4852
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i4858 = root || new pc.ParticleSystemBurst()
  var i4859 = data
  i4858.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4859[0], i4858.count)
  i4858.cycleCount = i4859[1]
  i4858.minCount = i4859[2]
  i4858.maxCount = i4859[3]
  i4858.repeatInterval = i4859[4]
  i4858.time = i4859[5]
  return i4858
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i4860 = root || new pc.ParticleSystemRotationBySpeed()
  var i4861 = data
  i4860.enabled = !!i4861[0]
  i4860.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4861[1], i4860.x)
  i4860.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4861[2], i4860.y)
  i4860.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4861[3], i4860.z)
  i4860.separateAxes = !!i4861[4]
  i4860.range = new pc.Vec2( i4861[5], i4861[6] )
  return i4860
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i4862 = root || new pc.ParticleSystemRotationOverLifetime()
  var i4863 = data
  i4862.enabled = !!i4863[0]
  i4862.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4863[1], i4862.x)
  i4862.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4863[2], i4862.y)
  i4862.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4863[3], i4862.z)
  i4862.separateAxes = !!i4863[4]
  return i4862
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i4864 = root || new pc.ParticleSystemShape()
  var i4865 = data
  i4864.enabled = !!i4865[0]
  i4864.shapeType = i4865[1]
  i4864.randomDirectionAmount = i4865[2]
  i4864.sphericalDirectionAmount = i4865[3]
  i4864.randomPositionAmount = i4865[4]
  i4864.alignToDirection = !!i4865[5]
  i4864.radius = i4865[6]
  i4864.radiusMode = i4865[7]
  i4864.radiusSpread = i4865[8]
  i4864.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4865[9], i4864.radiusSpeed)
  i4864.radiusThickness = i4865[10]
  i4864.angle = i4865[11]
  i4864.length = i4865[12]
  i4864.boxThickness = new pc.Vec3( i4865[13], i4865[14], i4865[15] )
  i4864.meshShapeType = i4865[16]
  request.r(i4865[17], i4865[18], 0, i4864, 'mesh')
  request.r(i4865[19], i4865[20], 0, i4864, 'meshRenderer')
  request.r(i4865[21], i4865[22], 0, i4864, 'skinnedMeshRenderer')
  i4864.useMeshMaterialIndex = !!i4865[23]
  i4864.meshMaterialIndex = i4865[24]
  i4864.useMeshColors = !!i4865[25]
  i4864.normalOffset = i4865[26]
  i4864.arc = i4865[27]
  i4864.arcMode = i4865[28]
  i4864.arcSpread = i4865[29]
  i4864.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4865[30], i4864.arcSpeed)
  i4864.donutRadius = i4865[31]
  i4864.position = new pc.Vec3( i4865[32], i4865[33], i4865[34] )
  i4864.rotation = new pc.Vec3( i4865[35], i4865[36], i4865[37] )
  i4864.scale = new pc.Vec3( i4865[38], i4865[39], i4865[40] )
  return i4864
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i4866 = root || new pc.ParticleSystemSizeBySpeed()
  var i4867 = data
  i4866.enabled = !!i4867[0]
  i4866.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4867[1], i4866.x)
  i4866.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4867[2], i4866.y)
  i4866.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4867[3], i4866.z)
  i4866.separateAxes = !!i4867[4]
  i4866.range = new pc.Vec2( i4867[5], i4867[6] )
  return i4866
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i4868 = root || new pc.ParticleSystemSizeOverLifetime()
  var i4869 = data
  i4868.enabled = !!i4869[0]
  i4868.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4869[1], i4868.x)
  i4868.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4869[2], i4868.y)
  i4868.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4869[3], i4868.z)
  i4868.separateAxes = !!i4869[4]
  return i4868
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i4870 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i4871 = data
  i4870.enabled = !!i4871[0]
  i4870.mode = i4871[1]
  i4870.animation = i4871[2]
  i4870.numTilesX = i4871[3]
  i4870.numTilesY = i4871[4]
  i4870.useRandomRow = !!i4871[5]
  i4870.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4871[6], i4870.frameOverTime)
  i4870.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4871[7], i4870.startFrame)
  i4870.cycleCount = i4871[8]
  i4870.rowIndex = i4871[9]
  i4870.flipU = i4871[10]
  i4870.flipV = i4871[11]
  i4870.spriteCount = i4871[12]
  var i4873 = i4871[13]
  var i4872 = []
  for(var i = 0; i < i4873.length; i += 2) {
  request.r(i4873[i + 0], i4873[i + 1], 2, i4872, '')
  }
  i4870.sprites = i4872
  return i4870
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i4876 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i4877 = data
  i4876.enabled = !!i4877[0]
  i4876.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4877[1], i4876.x)
  i4876.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4877[2], i4876.y)
  i4876.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4877[3], i4876.z)
  i4876.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4877[4], i4876.radial)
  i4876.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4877[5], i4876.speedModifier)
  i4876.space = i4877[6]
  i4876.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4877[7], i4876.orbitalX)
  i4876.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4877[8], i4876.orbitalY)
  i4876.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4877[9], i4876.orbitalZ)
  i4876.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4877[10], i4876.orbitalOffsetX)
  i4876.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4877[11], i4876.orbitalOffsetY)
  i4876.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4877[12], i4876.orbitalOffsetZ)
  return i4876
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i4878 = root || new pc.ParticleSystemNoise()
  var i4879 = data
  i4878.enabled = !!i4879[0]
  i4878.separateAxes = !!i4879[1]
  i4878.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4879[2], i4878.strengthX)
  i4878.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4879[3], i4878.strengthY)
  i4878.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4879[4], i4878.strengthZ)
  i4878.frequency = i4879[5]
  i4878.damping = !!i4879[6]
  i4878.octaveCount = i4879[7]
  i4878.octaveMultiplier = i4879[8]
  i4878.octaveScale = i4879[9]
  i4878.quality = i4879[10]
  i4878.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4879[11], i4878.scrollSpeed)
  i4878.scrollSpeedMultiplier = i4879[12]
  i4878.remapEnabled = !!i4879[13]
  i4878.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4879[14], i4878.remapX)
  i4878.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4879[15], i4878.remapY)
  i4878.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4879[16], i4878.remapZ)
  i4878.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4879[17], i4878.positionAmount)
  i4878.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4879[18], i4878.rotationAmount)
  i4878.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4879[19], i4878.sizeAmount)
  return i4878
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i4880 = root || new pc.ParticleSystemInheritVelocity()
  var i4881 = data
  i4880.enabled = !!i4881[0]
  i4880.mode = i4881[1]
  i4880.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4881[2], i4880.curve)
  return i4880
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i4882 = root || new pc.ParticleSystemForceOverLifetime()
  var i4883 = data
  i4882.enabled = !!i4883[0]
  i4882.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4883[1], i4882.x)
  i4882.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4883[2], i4882.y)
  i4882.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4883[3], i4882.z)
  i4882.space = i4883[4]
  i4882.randomized = !!i4883[5]
  return i4882
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i4884 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i4885 = data
  i4884.enabled = !!i4885[0]
  i4884.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4885[1], i4884.limit)
  i4884.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4885[2], i4884.limitX)
  i4884.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4885[3], i4884.limitY)
  i4884.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4885[4], i4884.limitZ)
  i4884.dampen = i4885[5]
  i4884.separateAxes = !!i4885[6]
  i4884.space = i4885[7]
  i4884.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4885[8], i4884.drag)
  i4884.multiplyDragByParticleSize = !!i4885[9]
  i4884.multiplyDragByParticleVelocity = !!i4885[10]
  return i4884
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i4886 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i4887 = data
  request.r(i4887[0], i4887[1], 0, i4886, 'mesh')
  i4886.meshCount = i4887[2]
  i4886.activeVertexStreamsCount = i4887[3]
  i4886.alignment = i4887[4]
  i4886.renderMode = i4887[5]
  i4886.sortMode = i4887[6]
  i4886.lengthScale = i4887[7]
  i4886.velocityScale = i4887[8]
  i4886.cameraVelocityScale = i4887[9]
  i4886.normalDirection = i4887[10]
  i4886.sortingFudge = i4887[11]
  i4886.minParticleSize = i4887[12]
  i4886.maxParticleSize = i4887[13]
  i4886.pivot = new pc.Vec3( i4887[14], i4887[15], i4887[16] )
  request.r(i4887[17], i4887[18], 0, i4886, 'trailMaterial')
  i4886.applyActiveColorSpace = !!i4887[19]
  i4886.enabled = !!i4887[20]
  request.r(i4887[21], i4887[22], 0, i4886, 'sharedMaterial')
  var i4889 = i4887[23]
  var i4888 = []
  for(var i = 0; i < i4889.length; i += 2) {
  request.r(i4889[i + 0], i4889[i + 1], 2, i4888, '')
  }
  i4886.sharedMaterials = i4888
  i4886.receiveShadows = !!i4887[24]
  i4886.shadowCastingMode = i4887[25]
  i4886.sortingLayerID = i4887[26]
  i4886.sortingOrder = i4887[27]
  i4886.lightmapIndex = i4887[28]
  i4886.lightmapSceneIndex = i4887[29]
  i4886.lightmapScaleOffset = new pc.Vec4( i4887[30], i4887[31], i4887[32], i4887[33] )
  i4886.lightProbeUsage = i4887[34]
  i4886.reflectionProbeUsage = i4887[35]
  return i4886
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i4892 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i4893 = data
  i4892.name = i4893[0]
  i4892.tagId = i4893[1]
  i4892.enabled = !!i4893[2]
  i4892.isStatic = !!i4893[3]
  i4892.layer = i4893[4]
  return i4892
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i4894 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i4895 = data
  i4894.color = new pc.Color(i4895[0], i4895[1], i4895[2], i4895[3])
  request.r(i4895[4], i4895[5], 0, i4894, 'sprite')
  i4894.flipX = !!i4895[6]
  i4894.flipY = !!i4895[7]
  i4894.drawMode = i4895[8]
  i4894.size = new pc.Vec2( i4895[9], i4895[10] )
  i4894.tileMode = i4895[11]
  i4894.adaptiveModeThreshold = i4895[12]
  i4894.maskInteraction = i4895[13]
  i4894.spriteSortPoint = i4895[14]
  i4894.enabled = !!i4895[15]
  request.r(i4895[16], i4895[17], 0, i4894, 'sharedMaterial')
  var i4897 = i4895[18]
  var i4896 = []
  for(var i = 0; i < i4897.length; i += 2) {
  request.r(i4897[i + 0], i4897[i + 1], 2, i4896, '')
  }
  i4894.sharedMaterials = i4896
  i4894.receiveShadows = !!i4895[19]
  i4894.shadowCastingMode = i4895[20]
  i4894.sortingLayerID = i4895[21]
  i4894.sortingOrder = i4895[22]
  i4894.lightmapIndex = i4895[23]
  i4894.lightmapSceneIndex = i4895[24]
  i4894.lightmapScaleOffset = new pc.Vec4( i4895[25], i4895[26], i4895[27], i4895[28] )
  i4894.lightProbeUsage = i4895[29]
  i4894.reflectionProbeUsage = i4895[30]
  return i4894
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i4898 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i4899 = data
  request.r(i4899[0], i4899[1], 0, i4898, 'animatorController')
  request.r(i4899[2], i4899[3], 0, i4898, 'avatar')
  i4898.updateMode = i4899[4]
  i4898.hasTransformHierarchy = !!i4899[5]
  i4898.applyRootMotion = !!i4899[6]
  var i4901 = i4899[7]
  var i4900 = []
  for(var i = 0; i < i4901.length; i += 2) {
  request.r(i4901[i + 0], i4901[i + 1], 2, i4900, '')
  }
  i4898.humanBones = i4900
  i4898.enabled = !!i4899[8]
  return i4898
}

Deserializers["MoveBetweenPoints"] = function (request, data, root) {
  var i4904 = root || request.c( 'MoveBetweenPoints' )
  var i4905 = data
  request.r(i4905[0], i4905[1], 0, i4904, 'pointA')
  request.r(i4905[2], i4905[3], 0, i4904, 'pointB')
  i4904.duration = i4905[4]
  return i4904
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i4906 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i4907 = data
  i4906.pivot = new pc.Vec2( i4907[0], i4907[1] )
  i4906.anchorMin = new pc.Vec2( i4907[2], i4907[3] )
  i4906.anchorMax = new pc.Vec2( i4907[4], i4907[5] )
  i4906.sizeDelta = new pc.Vec2( i4907[6], i4907[7] )
  i4906.anchoredPosition3D = new pc.Vec3( i4907[8], i4907[9], i4907[10] )
  i4906.rotation = new pc.Quat(i4907[11], i4907[12], i4907[13], i4907[14])
  i4906.scale = new pc.Vec3( i4907[15], i4907[16], i4907[17] )
  return i4906
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i4908 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i4909 = data
  request.r(i4909[0], i4909[1], 0, i4908, 'additionalVertexStreams')
  i4908.enabled = !!i4909[2]
  request.r(i4909[3], i4909[4], 0, i4908, 'sharedMaterial')
  var i4911 = i4909[5]
  var i4910 = []
  for(var i = 0; i < i4911.length; i += 2) {
  request.r(i4911[i + 0], i4911[i + 1], 2, i4910, '')
  }
  i4908.sharedMaterials = i4910
  i4908.receiveShadows = !!i4909[6]
  i4908.shadowCastingMode = i4909[7]
  i4908.sortingLayerID = i4909[8]
  i4908.sortingOrder = i4909[9]
  i4908.lightmapIndex = i4909[10]
  i4908.lightmapSceneIndex = i4909[11]
  i4908.lightmapScaleOffset = new pc.Vec4( i4909[12], i4909[13], i4909[14], i4909[15] )
  i4908.lightProbeUsage = i4909[16]
  i4908.reflectionProbeUsage = i4909[17]
  return i4908
}

Deserializers["TMPro.TextMeshPro"] = function (request, data, root) {
  var i4912 = root || request.c( 'TMPro.TextMeshPro' )
  var i4913 = data
  i4912._SortingLayer = i4913[0]
  i4912._SortingLayerID = i4913[1]
  i4912._SortingOrder = i4913[2]
  i4912.m_hasFontAssetChanged = !!i4913[3]
  request.r(i4913[4], i4913[5], 0, i4912, 'm_renderer')
  i4912.m_maskType = i4913[6]
  i4912.m_text = i4913[7]
  i4912.m_isRightToLeft = !!i4913[8]
  request.r(i4913[9], i4913[10], 0, i4912, 'm_fontAsset')
  request.r(i4913[11], i4913[12], 0, i4912, 'm_sharedMaterial')
  var i4915 = i4913[13]
  var i4914 = []
  for(var i = 0; i < i4915.length; i += 2) {
  request.r(i4915[i + 0], i4915[i + 1], 2, i4914, '')
  }
  i4912.m_fontSharedMaterials = i4914
  request.r(i4913[14], i4913[15], 0, i4912, 'm_fontMaterial')
  var i4917 = i4913[16]
  var i4916 = []
  for(var i = 0; i < i4917.length; i += 2) {
  request.r(i4917[i + 0], i4917[i + 1], 2, i4916, '')
  }
  i4912.m_fontMaterials = i4916
  i4912.m_fontColor32 = UnityEngine.Color32.ConstructColor(i4913[17], i4913[18], i4913[19], i4913[20])
  i4912.m_fontColor = new pc.Color(i4913[21], i4913[22], i4913[23], i4913[24])
  i4912.m_enableVertexGradient = !!i4913[25]
  i4912.m_colorMode = i4913[26]
  i4912.m_fontColorGradient = request.d('TMPro.VertexGradient', i4913[27], i4912.m_fontColorGradient)
  request.r(i4913[28], i4913[29], 0, i4912, 'm_fontColorGradientPreset')
  request.r(i4913[30], i4913[31], 0, i4912, 'm_spriteAsset')
  i4912.m_tintAllSprites = !!i4913[32]
  request.r(i4913[33], i4913[34], 0, i4912, 'm_StyleSheet')
  i4912.m_TextStyleHashCode = i4913[35]
  i4912.m_overrideHtmlColors = !!i4913[36]
  i4912.m_faceColor = UnityEngine.Color32.ConstructColor(i4913[37], i4913[38], i4913[39], i4913[40])
  i4912.m_fontSize = i4913[41]
  i4912.m_fontSizeBase = i4913[42]
  i4912.m_fontWeight = i4913[43]
  i4912.m_enableAutoSizing = !!i4913[44]
  i4912.m_fontSizeMin = i4913[45]
  i4912.m_fontSizeMax = i4913[46]
  i4912.m_fontStyle = i4913[47]
  i4912.m_HorizontalAlignment = i4913[48]
  i4912.m_VerticalAlignment = i4913[49]
  i4912.m_textAlignment = i4913[50]
  i4912.m_characterSpacing = i4913[51]
  i4912.m_wordSpacing = i4913[52]
  i4912.m_lineSpacing = i4913[53]
  i4912.m_lineSpacingMax = i4913[54]
  i4912.m_paragraphSpacing = i4913[55]
  i4912.m_charWidthMaxAdj = i4913[56]
  i4912.m_TextWrappingMode = i4913[57]
  i4912.m_wordWrappingRatios = i4913[58]
  i4912.m_overflowMode = i4913[59]
  request.r(i4913[60], i4913[61], 0, i4912, 'm_linkedTextComponent')
  request.r(i4913[62], i4913[63], 0, i4912, 'parentLinkedComponent')
  i4912.m_enableKerning = !!i4913[64]
  var i4919 = i4913[65]
  var i4918 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i4919.length; i += 1) {
    i4918.add(i4919[i + 0]);
  }
  i4912.m_ActiveFontFeatures = i4918
  i4912.m_enableExtraPadding = !!i4913[66]
  i4912.checkPaddingRequired = !!i4913[67]
  i4912.m_isRichText = !!i4913[68]
  i4912.m_parseCtrlCharacters = !!i4913[69]
  i4912.m_isOrthographic = !!i4913[70]
  i4912.m_isCullingEnabled = !!i4913[71]
  i4912.m_horizontalMapping = i4913[72]
  i4912.m_verticalMapping = i4913[73]
  i4912.m_uvLineOffset = i4913[74]
  i4912.m_geometrySortingOrder = i4913[75]
  i4912.m_IsTextObjectScaleStatic = !!i4913[76]
  i4912.m_VertexBufferAutoSizeReduction = !!i4913[77]
  i4912.m_useMaxVisibleDescender = !!i4913[78]
  i4912.m_pageToDisplay = i4913[79]
  i4912.m_margin = new pc.Vec4( i4913[80], i4913[81], i4913[82], i4913[83] )
  i4912.m_isUsingLegacyAnimationComponent = !!i4913[84]
  i4912.m_isVolumetricText = !!i4913[85]
  request.r(i4913[86], i4913[87], 0, i4912, 'm_Material')
  i4912.m_EmojiFallbackSupport = !!i4913[88]
  i4912.m_Maskable = !!i4913[89]
  i4912.m_Color = new pc.Color(i4913[90], i4913[91], i4913[92], i4913[93])
  i4912.m_RaycastTarget = !!i4913[94]
  i4912.m_RaycastPadding = new pc.Vec4( i4913[95], i4913[96], i4913[97], i4913[98] )
  return i4912
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i4920 = root || request.c( 'TMPro.VertexGradient' )
  var i4921 = data
  i4920.topLeft = new pc.Color(i4921[0], i4921[1], i4921[2], i4921[3])
  i4920.topRight = new pc.Color(i4921[4], i4921[5], i4921[6], i4921[7])
  i4920.bottomLeft = new pc.Color(i4921[8], i4921[9], i4921[10], i4921[11])
  i4920.bottomRight = new pc.Color(i4921[12], i4921[13], i4921[14], i4921[15])
  return i4920
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i4924 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i4925 = data
  request.r(i4925[0], i4925[1], 0, i4924, 'sharedMesh')
  return i4924
}

Deserializers["PlayerCardUIManager"] = function (request, data, root) {
  var i4926 = root || request.c( 'PlayerCardUIManager' )
  var i4927 = data
  request.r(i4927[0], i4927[1], 0, i4926, 'cardPanel')
  var i4929 = i4927[2]
  var i4928 = []
  for(var i = 0; i < i4929.length; i += 2) {
  request.r(i4929[i + 0], i4929[i + 1], 2, i4928, '')
  }
  i4926.extraObjectsToActivate = i4928
  i4926.waitTime = i4927[3]
  var i4931 = i4927[4]
  var i4930 = []
  for(var i = 0; i < i4931.length; i += 2) {
  request.r(i4931[i + 0], i4931[i + 1], 2, i4930, '')
  }
  i4926.objectsToTurnOnAfterWait = i4930
  var i4933 = i4927[5]
  var i4932 = []
  for(var i = 0; i < i4933.length; i += 2) {
  request.r(i4933[i + 0], i4933[i + 1], 2, i4932, '')
  }
  i4926.objectsToTurnOffAfterWait = i4932
  request.r(i4927[6], i4927[7], 0, i4926, 'nationalityText')
  request.r(i4927[8], i4927[9], 0, i4926, 'playerImage')
  request.r(i4927[10], i4927[11], 0, i4926, 'flagImage')
  return i4926
}

Deserializers["Ply_SoundManager"] = function (request, data, root) {
  var i4936 = root || request.c( 'Ply_SoundManager' )
  var i4937 = data
  i4936.fxAudio = request.d('FxAudio', i4937[0], i4936.fxAudio)
  request.r(i4937[1], i4937[2], 0, i4936, 'bgm1')
  return i4936
}

Deserializers["FxAudio"] = function (request, data, root) {
  var i4938 = root || request.c( 'FxAudio' )
  var i4939 = data
  i4938.ClickBox = request.d('SoundData', i4939[0], i4938.ClickBox)
  i4938.Happy = request.d('SoundData', i4939[1], i4938.Happy)
  i4938.Wrong = request.d('SoundData', i4939[2], i4938.Wrong)
  i4938.Spray = request.d('SoundData', i4939[3], i4938.Spray)
  i4938.Brush = request.d('SoundData', i4939[4], i4938.Brush)
  return i4938
}

Deserializers["SoundData"] = function (request, data, root) {
  var i4940 = root || request.c( 'SoundData' )
  var i4941 = data
  request.r(i4941[0], i4941[1], 0, i4940, 'clip')
  i4940.repeatCount = i4941[2]
  return i4940
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i4942 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i4943 = data
  request.r(i4943[0], i4943[1], 0, i4942, 'clip')
  request.r(i4943[2], i4943[3], 0, i4942, 'outputAudioMixerGroup')
  i4942.playOnAwake = !!i4943[4]
  i4942.loop = !!i4943[5]
  i4942.time = i4943[6]
  i4942.volume = i4943[7]
  i4942.pitch = i4943[8]
  i4942.enabled = !!i4943[9]
  return i4942
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i4944 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i4945 = data
  i4944.planeDistance = i4945[0]
  i4944.referencePixelsPerUnit = i4945[1]
  i4944.isFallbackOverlay = !!i4945[2]
  i4944.renderMode = i4945[3]
  i4944.renderOrder = i4945[4]
  i4944.sortingLayerName = i4945[5]
  i4944.sortingOrder = i4945[6]
  i4944.scaleFactor = i4945[7]
  request.r(i4945[8], i4945[9], 0, i4944, 'worldCamera')
  i4944.overrideSorting = !!i4945[10]
  i4944.pixelPerfect = !!i4945[11]
  i4944.targetDisplay = i4945[12]
  i4944.overridePixelPerfect = !!i4945[13]
  i4944.enabled = !!i4945[14]
  return i4944
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i4946 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i4947 = data
  i4946.m_UiScaleMode = i4947[0]
  i4946.m_ReferencePixelsPerUnit = i4947[1]
  i4946.m_ScaleFactor = i4947[2]
  i4946.m_ReferenceResolution = new pc.Vec2( i4947[3], i4947[4] )
  i4946.m_ScreenMatchMode = i4947[5]
  i4946.m_MatchWidthOrHeight = i4947[6]
  i4946.m_PhysicalUnit = i4947[7]
  i4946.m_FallbackScreenDPI = i4947[8]
  i4946.m_DefaultSpriteDPI = i4947[9]
  i4946.m_DynamicPixelsPerUnit = i4947[10]
  i4946.m_PresetInfoIsWorld = !!i4947[11]
  return i4946
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i4948 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i4949 = data
  i4948.m_IgnoreReversedGraphics = !!i4949[0]
  i4948.m_BlockingObjects = i4949[1]
  i4948.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i4949[2] )
  return i4948
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i4950 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i4951 = data
  i4950.cullTransparentMesh = !!i4951[0]
  return i4950
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i4952 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i4953 = data
  i4952.m_hasFontAssetChanged = !!i4953[0]
  request.r(i4953[1], i4953[2], 0, i4952, 'm_baseMaterial')
  i4952.m_maskOffset = new pc.Vec4( i4953[3], i4953[4], i4953[5], i4953[6] )
  i4952.m_text = i4953[7]
  i4952.m_isRightToLeft = !!i4953[8]
  request.r(i4953[9], i4953[10], 0, i4952, 'm_fontAsset')
  request.r(i4953[11], i4953[12], 0, i4952, 'm_sharedMaterial')
  var i4955 = i4953[13]
  var i4954 = []
  for(var i = 0; i < i4955.length; i += 2) {
  request.r(i4955[i + 0], i4955[i + 1], 2, i4954, '')
  }
  i4952.m_fontSharedMaterials = i4954
  request.r(i4953[14], i4953[15], 0, i4952, 'm_fontMaterial')
  var i4957 = i4953[16]
  var i4956 = []
  for(var i = 0; i < i4957.length; i += 2) {
  request.r(i4957[i + 0], i4957[i + 1], 2, i4956, '')
  }
  i4952.m_fontMaterials = i4956
  i4952.m_fontColor32 = UnityEngine.Color32.ConstructColor(i4953[17], i4953[18], i4953[19], i4953[20])
  i4952.m_fontColor = new pc.Color(i4953[21], i4953[22], i4953[23], i4953[24])
  i4952.m_enableVertexGradient = !!i4953[25]
  i4952.m_colorMode = i4953[26]
  i4952.m_fontColorGradient = request.d('TMPro.VertexGradient', i4953[27], i4952.m_fontColorGradient)
  request.r(i4953[28], i4953[29], 0, i4952, 'm_fontColorGradientPreset')
  request.r(i4953[30], i4953[31], 0, i4952, 'm_spriteAsset')
  i4952.m_tintAllSprites = !!i4953[32]
  request.r(i4953[33], i4953[34], 0, i4952, 'm_StyleSheet')
  i4952.m_TextStyleHashCode = i4953[35]
  i4952.m_overrideHtmlColors = !!i4953[36]
  i4952.m_faceColor = UnityEngine.Color32.ConstructColor(i4953[37], i4953[38], i4953[39], i4953[40])
  i4952.m_fontSize = i4953[41]
  i4952.m_fontSizeBase = i4953[42]
  i4952.m_fontWeight = i4953[43]
  i4952.m_enableAutoSizing = !!i4953[44]
  i4952.m_fontSizeMin = i4953[45]
  i4952.m_fontSizeMax = i4953[46]
  i4952.m_fontStyle = i4953[47]
  i4952.m_HorizontalAlignment = i4953[48]
  i4952.m_VerticalAlignment = i4953[49]
  i4952.m_textAlignment = i4953[50]
  i4952.m_characterSpacing = i4953[51]
  i4952.m_wordSpacing = i4953[52]
  i4952.m_lineSpacing = i4953[53]
  i4952.m_lineSpacingMax = i4953[54]
  i4952.m_paragraphSpacing = i4953[55]
  i4952.m_charWidthMaxAdj = i4953[56]
  i4952.m_TextWrappingMode = i4953[57]
  i4952.m_wordWrappingRatios = i4953[58]
  i4952.m_overflowMode = i4953[59]
  request.r(i4953[60], i4953[61], 0, i4952, 'm_linkedTextComponent')
  request.r(i4953[62], i4953[63], 0, i4952, 'parentLinkedComponent')
  i4952.m_enableKerning = !!i4953[64]
  var i4959 = i4953[65]
  var i4958 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i4959.length; i += 1) {
    i4958.add(i4959[i + 0]);
  }
  i4952.m_ActiveFontFeatures = i4958
  i4952.m_enableExtraPadding = !!i4953[66]
  i4952.checkPaddingRequired = !!i4953[67]
  i4952.m_isRichText = !!i4953[68]
  i4952.m_parseCtrlCharacters = !!i4953[69]
  i4952.m_isOrthographic = !!i4953[70]
  i4952.m_isCullingEnabled = !!i4953[71]
  i4952.m_horizontalMapping = i4953[72]
  i4952.m_verticalMapping = i4953[73]
  i4952.m_uvLineOffset = i4953[74]
  i4952.m_geometrySortingOrder = i4953[75]
  i4952.m_IsTextObjectScaleStatic = !!i4953[76]
  i4952.m_VertexBufferAutoSizeReduction = !!i4953[77]
  i4952.m_useMaxVisibleDescender = !!i4953[78]
  i4952.m_pageToDisplay = i4953[79]
  i4952.m_margin = new pc.Vec4( i4953[80], i4953[81], i4953[82], i4953[83] )
  i4952.m_isUsingLegacyAnimationComponent = !!i4953[84]
  i4952.m_isVolumetricText = !!i4953[85]
  request.r(i4953[86], i4953[87], 0, i4952, 'm_Material')
  i4952.m_EmojiFallbackSupport = !!i4953[88]
  i4952.m_Maskable = !!i4953[89]
  i4952.m_Color = new pc.Color(i4953[90], i4953[91], i4953[92], i4953[93])
  i4952.m_RaycastTarget = !!i4953[94]
  i4952.m_RaycastPadding = new pc.Vec4( i4953[95], i4953[96], i4953[97], i4953[98] )
  return i4952
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i4960 = root || request.c( 'UnityEngine.UI.Image' )
  var i4961 = data
  request.r(i4961[0], i4961[1], 0, i4960, 'm_Sprite')
  i4960.m_Type = i4961[2]
  i4960.m_PreserveAspect = !!i4961[3]
  i4960.m_FillCenter = !!i4961[4]
  i4960.m_FillMethod = i4961[5]
  i4960.m_FillAmount = i4961[6]
  i4960.m_FillClockwise = !!i4961[7]
  i4960.m_FillOrigin = i4961[8]
  i4960.m_UseSpriteMesh = !!i4961[9]
  i4960.m_PixelsPerUnitMultiplier = i4961[10]
  request.r(i4961[11], i4961[12], 0, i4960, 'm_Material')
  i4960.m_Maskable = !!i4961[13]
  i4960.m_Color = new pc.Color(i4961[14], i4961[15], i4961[16], i4961[17])
  i4960.m_RaycastTarget = !!i4961[18]
  i4960.m_RaycastPadding = new pc.Vec4( i4961[19], i4961[20], i4961[21], i4961[22] )
  return i4960
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i4962 = root || request.c( 'UnityEngine.UI.Button' )
  var i4963 = data
  i4962.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i4963[0], i4962.m_OnClick)
  i4962.m_Navigation = request.d('UnityEngine.UI.Navigation', i4963[1], i4962.m_Navigation)
  i4962.m_Transition = i4963[2]
  i4962.m_Colors = request.d('UnityEngine.UI.ColorBlock', i4963[3], i4962.m_Colors)
  i4962.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i4963[4], i4962.m_SpriteState)
  i4962.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i4963[5], i4962.m_AnimationTriggers)
  i4962.m_Interactable = !!i4963[6]
  request.r(i4963[7], i4963[8], 0, i4962, 'm_TargetGraphic')
  return i4962
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i4964 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i4965 = data
  i4964.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i4965[0], i4964.m_PersistentCalls)
  return i4964
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i4966 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i4967 = data
  var i4969 = i4967[0]
  var i4968 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i4969.length; i += 1) {
    i4968.add(request.d('UnityEngine.Events.PersistentCall', i4969[i + 0]));
  }
  i4966.m_Calls = i4968
  return i4966
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i4972 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i4973 = data
  request.r(i4973[0], i4973[1], 0, i4972, 'm_Target')
  i4972.m_TargetAssemblyTypeName = i4973[2]
  i4972.m_MethodName = i4973[3]
  i4972.m_Mode = i4973[4]
  i4972.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i4973[5], i4972.m_Arguments)
  i4972.m_CallState = i4973[6]
  return i4972
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i4974 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i4975 = data
  request.r(i4975[0], i4975[1], 0, i4974, 'm_ObjectArgument')
  i4974.m_ObjectArgumentAssemblyTypeName = i4975[2]
  i4974.m_IntArgument = i4975[3]
  i4974.m_FloatArgument = i4975[4]
  i4974.m_StringArgument = i4975[5]
  i4974.m_BoolArgument = !!i4975[6]
  return i4974
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i4976 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i4977 = data
  i4976.m_Mode = i4977[0]
  i4976.m_WrapAround = !!i4977[1]
  request.r(i4977[2], i4977[3], 0, i4976, 'm_SelectOnUp')
  request.r(i4977[4], i4977[5], 0, i4976, 'm_SelectOnDown')
  request.r(i4977[6], i4977[7], 0, i4976, 'm_SelectOnLeft')
  request.r(i4977[8], i4977[9], 0, i4976, 'm_SelectOnRight')
  return i4976
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i4978 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i4979 = data
  i4978.m_NormalColor = new pc.Color(i4979[0], i4979[1], i4979[2], i4979[3])
  i4978.m_HighlightedColor = new pc.Color(i4979[4], i4979[5], i4979[6], i4979[7])
  i4978.m_PressedColor = new pc.Color(i4979[8], i4979[9], i4979[10], i4979[11])
  i4978.m_SelectedColor = new pc.Color(i4979[12], i4979[13], i4979[14], i4979[15])
  i4978.m_DisabledColor = new pc.Color(i4979[16], i4979[17], i4979[18], i4979[19])
  i4978.m_ColorMultiplier = i4979[20]
  i4978.m_FadeDuration = i4979[21]
  return i4978
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i4980 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i4981 = data
  request.r(i4981[0], i4981[1], 0, i4980, 'm_HighlightedSprite')
  request.r(i4981[2], i4981[3], 0, i4980, 'm_PressedSprite')
  request.r(i4981[4], i4981[5], 0, i4980, 'm_SelectedSprite')
  request.r(i4981[6], i4981[7], 0, i4980, 'm_DisabledSprite')
  return i4980
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i4982 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i4983 = data
  i4982.m_NormalTrigger = i4983[0]
  i4982.m_HighlightedTrigger = i4983[1]
  i4982.m_PressedTrigger = i4983[2]
  i4982.m_SelectedTrigger = i4983[3]
  i4982.m_DisabledTrigger = i4983[4]
  return i4982
}

Deserializers["ScreenHeightPositionAnchor"] = function (request, data, root) {
  var i4984 = root || request.c( 'ScreenHeightPositionAnchor' )
  var i4985 = data
  request.r(i4985[0], i4985[1], 0, i4984, 'anchorPoint')
  request.r(i4985[2], i4985[3], 0, i4984, 'targetCamera')
  i4984.viewportYRatio = i4985[4]
  i4984.alignOnStart = !!i4985[5]
  i4984.alignOnEnable = !!i4985[6]
  i4984.realignOnScreenSizeChanged = !!i4985[7]
  i4984.drawGizmos = !!i4985[8]
  i4984.targetLineColor = new pc.Color(i4985[9], i4985[10], i4985[11], i4985[12])
  i4984.anchorColor = new pc.Color(i4985[13], i4985[14], i4985[15], i4985[16])
  return i4984
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D"] = function (request, data, root) {
  var i4986 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D' )
  var i4987 = data
  i4986.usedByComposite = !!i4987[0]
  i4986.autoTiling = !!i4987[1]
  var i4989 = i4987[2]
  var i4988 = []
  for(var i = 0; i < i4989.length; i += 1) {
  var i4991 = i4989[i + 0]
  var i4990 = []
  for(var i = 0; i < i4991.length; i += 2) {
    i4990.push( new pc.Vec2( i4991[i + 0], i4991[i + 1] ) );
  }
    i4988.push( i4990 );
  }
  i4986.points = i4988
  i4986.enabled = !!i4987[3]
  i4986.isTrigger = !!i4987[4]
  i4986.usedByEffector = !!i4987[5]
  i4986.density = i4987[6]
  i4986.offset = new pc.Vec2( i4987[7], i4987[8] )
  request.r(i4987[9], i4987[10], 0, i4986, 'material')
  return i4986
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i4998 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i4999 = data
  i4998.usedByComposite = !!i4999[0]
  i4998.autoTiling = !!i4999[1]
  i4998.size = new pc.Vec2( i4999[2], i4999[3] )
  i4998.edgeRadius = i4999[4]
  i4998.enabled = !!i4999[5]
  i4998.isTrigger = !!i4999[6]
  i4998.usedByEffector = !!i4999[7]
  i4998.density = i4999[8]
  i4998.offset = new pc.Vec2( i4999[9], i4999[10] )
  request.r(i4999[11], i4999[12], 0, i4998, 'material')
  return i4998
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i5000 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i5001 = data
  i5000.bodyType = i5001[0]
  request.r(i5001[1], i5001[2], 0, i5000, 'material')
  i5000.simulated = !!i5001[3]
  i5000.useAutoMass = !!i5001[4]
  i5000.mass = i5001[5]
  i5000.drag = i5001[6]
  i5000.angularDrag = i5001[7]
  i5000.gravityScale = i5001[8]
  i5000.collisionDetectionMode = i5001[9]
  i5000.sleepMode = i5001[10]
  i5000.constraints = i5001[11]
  return i5000
}

Deserializers["BatStrikeController"] = function (request, data, root) {
  var i5002 = root || request.c( 'BatStrikeController' )
  var i5003 = data
  i5002.pullSpeed = i5003[0]
  i5002.maxPullDistance = i5003[1]
  i5002.minHoldTime = i5003[2]
  i5002.strikeForce = i5003[3]
  i5002.targetTag = i5003[4]
  return i5002
}

Deserializers["CupCollision"] = function (request, data, root) {
  var i5004 = root || request.c( 'CupCollision' )
  var i5005 = data
  i5004.baseTag = i5005[0]
  request.r(i5005[1], i5005[2], 0, i5004, 'objectToActivate')
  return i5004
}

Deserializers["SlotTrigger"] = function (request, data, root) {
  var i5006 = root || request.c( 'SlotTrigger' )
  var i5007 = data
  request.r(i5007[0], i5007[1], 0, i5006, 'cardData')
  i5006.targetTag = i5007[2]
  request.r(i5007[3], i5007[4], 0, i5006, 'yAnchor')
  i5006.moveSpeed = i5007[5]
  request.r(i5007[6], i5007[7], 0, i5006, 'objectToMoveDown')
  i5006.targetScreenYRatio = i5007[8]
  return i5006
}

Deserializers["HideOnFirstClick"] = function (request, data, root) {
  var i5008 = root || request.c( 'HideOnFirstClick' )
  var i5009 = data
  request.r(i5009[0], i5009[1], 0, i5008, 'objectToHide')
  return i5008
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i5010 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i5011 = data
  request.r(i5011[0], i5011[1], 0, i5010, 'm_FirstSelected')
  i5010.m_sendNavigationEvents = !!i5011[2]
  i5010.m_DragThreshold = i5011[3]
  return i5010
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i5012 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i5013 = data
  i5012.m_HorizontalAxis = i5013[0]
  i5012.m_VerticalAxis = i5013[1]
  i5012.m_SubmitButton = i5013[2]
  i5012.m_CancelButton = i5013[3]
  i5012.m_InputActionsPerSecond = i5013[4]
  i5012.m_RepeatDelay = i5013[5]
  i5012.m_ForceModuleActive = !!i5013[6]
  i5012.m_SendPointerHoverToParent = !!i5013[7]
  return i5012
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i5014 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i5015 = data
  i5014.ambientIntensity = i5015[0]
  i5014.reflectionIntensity = i5015[1]
  i5014.ambientMode = i5015[2]
  i5014.ambientLight = new pc.Color(i5015[3], i5015[4], i5015[5], i5015[6])
  i5014.ambientSkyColor = new pc.Color(i5015[7], i5015[8], i5015[9], i5015[10])
  i5014.ambientGroundColor = new pc.Color(i5015[11], i5015[12], i5015[13], i5015[14])
  i5014.ambientEquatorColor = new pc.Color(i5015[15], i5015[16], i5015[17], i5015[18])
  i5014.fogColor = new pc.Color(i5015[19], i5015[20], i5015[21], i5015[22])
  i5014.fogEndDistance = i5015[23]
  i5014.fogStartDistance = i5015[24]
  i5014.fogDensity = i5015[25]
  i5014.fog = !!i5015[26]
  request.r(i5015[27], i5015[28], 0, i5014, 'skybox')
  i5014.fogMode = i5015[29]
  var i5017 = i5015[30]
  var i5016 = []
  for(var i = 0; i < i5017.length; i += 1) {
    i5016.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i5017[i + 0]) );
  }
  i5014.lightmaps = i5016
  i5014.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i5015[31], i5014.lightProbes)
  i5014.lightmapsMode = i5015[32]
  i5014.mixedBakeMode = i5015[33]
  i5014.environmentLightingMode = i5015[34]
  i5014.ambientProbe = new pc.SphericalHarmonicsL2(i5015[35])
  i5014.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i5015[36])
  i5014.useReferenceAmbientProbe = !!i5015[37]
  request.r(i5015[38], i5015[39], 0, i5014, 'customReflection')
  request.r(i5015[40], i5015[41], 0, i5014, 'defaultReflection')
  i5014.defaultReflectionMode = i5015[42]
  i5014.defaultReflectionResolution = i5015[43]
  i5014.sunLightObjectId = i5015[44]
  i5014.pixelLightCount = i5015[45]
  i5014.defaultReflectionHDR = !!i5015[46]
  i5014.hasLightDataAsset = !!i5015[47]
  i5014.hasManualGenerate = !!i5015[48]
  return i5014
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i5020 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i5021 = data
  request.r(i5021[0], i5021[1], 0, i5020, 'lightmapColor')
  request.r(i5021[2], i5021[3], 0, i5020, 'lightmapDirection')
  request.r(i5021[4], i5021[5], 0, i5020, 'shadowMask')
  return i5020
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i5022 = root || new UnityEngine.LightProbes()
  var i5023 = data
  return i5022
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.PhysicsMaterial2D"] = function (request, data, root) {
  var i5030 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.PhysicsMaterial2D' )
  var i5031 = data
  i5030.name = i5031[0]
  i5030.bounciness = i5031[1]
  i5030.friction = i5031[2]
  return i5030
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i5032 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i5033 = data
  var i5035 = i5033[0]
  var i5034 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i5035.length; i += 1) {
    i5034.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i5035[i + 0]));
  }
  i5032.ShaderCompilationErrors = i5034
  i5032.name = i5033[1]
  i5032.guid = i5033[2]
  var i5037 = i5033[3]
  var i5036 = []
  for(var i = 0; i < i5037.length; i += 1) {
    i5036.push( i5037[i + 0] );
  }
  i5032.shaderDefinedKeywords = i5036
  var i5039 = i5033[4]
  var i5038 = []
  for(var i = 0; i < i5039.length; i += 1) {
    i5038.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i5039[i + 0]) );
  }
  i5032.passes = i5038
  var i5041 = i5033[5]
  var i5040 = []
  for(var i = 0; i < i5041.length; i += 1) {
    i5040.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i5041[i + 0]) );
  }
  i5032.usePasses = i5040
  var i5043 = i5033[6]
  var i5042 = []
  for(var i = 0; i < i5043.length; i += 1) {
    i5042.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i5043[i + 0]) );
  }
  i5032.defaultParameterValues = i5042
  request.r(i5033[7], i5033[8], 0, i5032, 'unityFallbackShader')
  i5032.readDepth = !!i5033[9]
  i5032.hasDepthOnlyPass = !!i5033[10]
  i5032.isCreatedByShaderGraph = !!i5033[11]
  i5032.disableBatching = !!i5033[12]
  i5032.compiled = !!i5033[13]
  return i5032
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i5046 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i5047 = data
  i5046.shaderName = i5047[0]
  i5046.errorMessage = i5047[1]
  return i5046
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i5052 = root || new pc.UnityShaderPass()
  var i5053 = data
  i5052.id = i5053[0]
  i5052.subShaderIndex = i5053[1]
  i5052.name = i5053[2]
  i5052.passType = i5053[3]
  i5052.grabPassTextureName = i5053[4]
  i5052.usePass = !!i5053[5]
  i5052.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5053[6], i5052.zTest)
  i5052.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5053[7], i5052.zWrite)
  i5052.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5053[8], i5052.culling)
  i5052.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i5053[9], i5052.blending)
  i5052.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i5053[10], i5052.alphaBlending)
  i5052.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5053[11], i5052.colorWriteMask)
  i5052.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5053[12], i5052.offsetUnits)
  i5052.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5053[13], i5052.offsetFactor)
  i5052.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5053[14], i5052.stencilRef)
  i5052.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5053[15], i5052.stencilReadMask)
  i5052.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5053[16], i5052.stencilWriteMask)
  i5052.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i5053[17], i5052.stencilOp)
  i5052.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i5053[18], i5052.stencilOpFront)
  i5052.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i5053[19], i5052.stencilOpBack)
  var i5055 = i5053[20]
  var i5054 = []
  for(var i = 0; i < i5055.length; i += 1) {
    i5054.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i5055[i + 0]) );
  }
  i5052.tags = i5054
  var i5057 = i5053[21]
  var i5056 = []
  for(var i = 0; i < i5057.length; i += 1) {
    i5056.push( i5057[i + 0] );
  }
  i5052.passDefinedKeywords = i5056
  var i5059 = i5053[22]
  var i5058 = []
  for(var i = 0; i < i5059.length; i += 1) {
    i5058.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i5059[i + 0]) );
  }
  i5052.passDefinedKeywordGroups = i5058
  var i5061 = i5053[23]
  var i5060 = []
  for(var i = 0; i < i5061.length; i += 1) {
    i5060.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i5061[i + 0]) );
  }
  i5052.variants = i5060
  var i5063 = i5053[24]
  var i5062 = []
  for(var i = 0; i < i5063.length; i += 1) {
    i5062.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i5063[i + 0]) );
  }
  i5052.excludedVariants = i5062
  i5052.hasDepthReader = !!i5053[25]
  return i5052
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i5064 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i5065 = data
  i5064.val = i5065[0]
  i5064.name = i5065[1]
  return i5064
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i5066 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i5067 = data
  i5066.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5067[0], i5066.src)
  i5066.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5067[1], i5066.dst)
  i5066.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5067[2], i5066.op)
  return i5066
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i5068 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i5069 = data
  i5068.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5069[0], i5068.pass)
  i5068.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5069[1], i5068.fail)
  i5068.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5069[2], i5068.zFail)
  i5068.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5069[3], i5068.comp)
  return i5068
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i5072 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i5073 = data
  i5072.name = i5073[0]
  i5072.value = i5073[1]
  return i5072
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i5076 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i5077 = data
  var i5079 = i5077[0]
  var i5078 = []
  for(var i = 0; i < i5079.length; i += 1) {
    i5078.push( i5079[i + 0] );
  }
  i5076.keywords = i5078
  i5076.hasDiscard = !!i5077[1]
  return i5076
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i5082 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i5083 = data
  i5082.passId = i5083[0]
  i5082.subShaderIndex = i5083[1]
  var i5085 = i5083[2]
  var i5084 = []
  for(var i = 0; i < i5085.length; i += 1) {
    i5084.push( i5085[i + 0] );
  }
  i5082.keywords = i5084
  i5082.vertexProgram = i5083[3]
  i5082.fragmentProgram = i5083[4]
  i5082.exportedForWebGl2 = !!i5083[5]
  i5082.readDepth = !!i5083[6]
  return i5082
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i5088 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i5089 = data
  request.r(i5089[0], i5089[1], 0, i5088, 'shader')
  i5088.pass = i5089[2]
  return i5088
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i5092 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i5093 = data
  i5092.name = i5093[0]
  i5092.type = i5093[1]
  i5092.value = new pc.Vec4( i5093[2], i5093[3], i5093[4], i5093[5] )
  i5092.textureValue = i5093[6]
  i5092.shaderPropertyFlag = i5093[7]
  return i5092
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i5094 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i5095 = data
  i5094.name = i5095[0]
  request.r(i5095[1], i5095[2], 0, i5094, 'texture')
  i5094.aabb = i5095[3]
  i5094.vertices = i5095[4]
  i5094.triangles = i5095[5]
  i5094.textureRect = UnityEngine.Rect.MinMaxRect(i5095[6], i5095[7], i5095[8], i5095[9])
  i5094.packedRect = UnityEngine.Rect.MinMaxRect(i5095[10], i5095[11], i5095[12], i5095[13])
  i5094.border = new pc.Vec4( i5095[14], i5095[15], i5095[16], i5095[17] )
  i5094.transparency = i5095[18]
  i5094.bounds = i5095[19]
  i5094.pixelsPerUnit = i5095[20]
  i5094.textureWidth = i5095[21]
  i5094.textureHeight = i5095[22]
  i5094.nativeSize = new pc.Vec2( i5095[23], i5095[24] )
  i5094.pivot = new pc.Vec2( i5095[25], i5095[26] )
  i5094.textureRectOffset = new pc.Vec2( i5095[27], i5095[28] )
  return i5094
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i5096 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i5097 = data
  i5096.name = i5097[0]
  return i5096
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i5098 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i5099 = data
  i5098.name = i5099[0]
  i5098.wrapMode = i5099[1]
  i5098.isLooping = !!i5099[2]
  i5098.length = i5099[3]
  var i5101 = i5099[4]
  var i5100 = []
  for(var i = 0; i < i5101.length; i += 1) {
    i5100.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i5101[i + 0]) );
  }
  i5098.curves = i5100
  var i5103 = i5099[5]
  var i5102 = []
  for(var i = 0; i < i5103.length; i += 1) {
    i5102.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i5103[i + 0]) );
  }
  i5098.events = i5102
  i5098.halfPrecision = !!i5099[6]
  i5098._frameRate = i5099[7]
  i5098.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i5099[8], i5098.localBounds)
  i5098.hasMuscleCurves = !!i5099[9]
  var i5105 = i5099[10]
  var i5104 = []
  for(var i = 0; i < i5105.length; i += 1) {
    i5104.push( i5105[i + 0] );
  }
  i5098.clipMuscleConstant = i5104
  i5098.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i5099[11], i5098.clipBindingConstant)
  return i5098
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i5108 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i5109 = data
  i5108.path = i5109[0]
  i5108.hash = i5109[1]
  i5108.componentType = i5109[2]
  i5108.property = i5109[3]
  i5108.keys = i5109[4]
  var i5111 = i5109[5]
  var i5110 = []
  for(var i = 0; i < i5111.length; i += 1) {
    i5110.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i5111[i + 0]) );
  }
  i5108.objectReferenceKeys = i5110
  return i5108
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i5114 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i5115 = data
  i5114.time = i5115[0]
  request.r(i5115[1], i5115[2], 0, i5114, 'value')
  return i5114
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i5118 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i5119 = data
  i5118.functionName = i5119[0]
  i5118.floatParameter = i5119[1]
  i5118.intParameter = i5119[2]
  i5118.stringParameter = i5119[3]
  request.r(i5119[4], i5119[5], 0, i5118, 'objectReferenceParameter')
  i5118.time = i5119[6]
  return i5118
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i5120 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i5121 = data
  i5120.center = new pc.Vec3( i5121[0], i5121[1], i5121[2] )
  i5120.extends = new pc.Vec3( i5121[3], i5121[4], i5121[5] )
  return i5120
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i5124 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i5125 = data
  var i5127 = i5125[0]
  var i5126 = []
  for(var i = 0; i < i5127.length; i += 1) {
    i5126.push( i5127[i + 0] );
  }
  i5124.genericBindings = i5126
  var i5129 = i5125[1]
  var i5128 = []
  for(var i = 0; i < i5129.length; i += 1) {
    i5128.push( i5129[i + 0] );
  }
  i5124.pptrCurveMapping = i5128
  return i5124
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i5130 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i5131 = data
  i5130.name = i5131[0]
  i5130.ascent = i5131[1]
  i5130.originalLineHeight = i5131[2]
  i5130.fontSize = i5131[3]
  var i5133 = i5131[4]
  var i5132 = []
  for(var i = 0; i < i5133.length; i += 1) {
    i5132.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i5133[i + 0]) );
  }
  i5130.characterInfo = i5132
  request.r(i5131[5], i5131[6], 0, i5130, 'texture')
  i5130.originalFontSize = i5131[7]
  return i5130
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i5136 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i5137 = data
  i5136.index = i5137[0]
  i5136.advance = i5137[1]
  i5136.bearing = i5137[2]
  i5136.glyphWidth = i5137[3]
  i5136.glyphHeight = i5137[4]
  i5136.minX = i5137[5]
  i5136.maxX = i5137[6]
  i5136.minY = i5137[7]
  i5136.maxY = i5137[8]
  i5136.uvBottomLeftX = i5137[9]
  i5136.uvBottomLeftY = i5137[10]
  i5136.uvBottomRightX = i5137[11]
  i5136.uvBottomRightY = i5137[12]
  i5136.uvTopLeftX = i5137[13]
  i5136.uvTopLeftY = i5137[14]
  i5136.uvTopRightX = i5137[15]
  i5136.uvTopRightY = i5137[16]
  return i5136
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i5138 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i5139 = data
  i5138.name = i5139[0]
  var i5141 = i5139[1]
  var i5140 = []
  for(var i = 0; i < i5141.length; i += 1) {
    i5140.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i5141[i + 0]) );
  }
  i5138.layers = i5140
  var i5143 = i5139[2]
  var i5142 = []
  for(var i = 0; i < i5143.length; i += 1) {
    i5142.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i5143[i + 0]) );
  }
  i5138.parameters = i5142
  i5138.animationClips = i5139[3]
  i5138.avatarUnsupported = i5139[4]
  return i5138
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i5146 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i5147 = data
  i5146.name = i5147[0]
  i5146.defaultWeight = i5147[1]
  i5146.blendingMode = i5147[2]
  i5146.avatarMask = i5147[3]
  i5146.syncedLayerIndex = i5147[4]
  i5146.syncedLayerAffectsTiming = !!i5147[5]
  i5146.syncedLayers = i5147[6]
  i5146.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i5147[7], i5146.stateMachine)
  return i5146
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i5148 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i5149 = data
  i5148.id = i5149[0]
  i5148.name = i5149[1]
  i5148.path = i5149[2]
  var i5151 = i5149[3]
  var i5150 = []
  for(var i = 0; i < i5151.length; i += 1) {
    i5150.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i5151[i + 0]) );
  }
  i5148.states = i5150
  var i5153 = i5149[4]
  var i5152 = []
  for(var i = 0; i < i5153.length; i += 1) {
    i5152.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i5153[i + 0]) );
  }
  i5148.machines = i5152
  var i5155 = i5149[5]
  var i5154 = []
  for(var i = 0; i < i5155.length; i += 1) {
    i5154.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i5155[i + 0]) );
  }
  i5148.entryStateTransitions = i5154
  var i5157 = i5149[6]
  var i5156 = []
  for(var i = 0; i < i5157.length; i += 1) {
    i5156.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i5157[i + 0]) );
  }
  i5148.exitStateTransitions = i5156
  var i5159 = i5149[7]
  var i5158 = []
  for(var i = 0; i < i5159.length; i += 1) {
    i5158.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i5159[i + 0]) );
  }
  i5148.anyStateTransitions = i5158
  i5148.defaultStateId = i5149[8]
  return i5148
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i5162 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i5163 = data
  i5162.id = i5163[0]
  i5162.name = i5163[1]
  i5162.cycleOffset = i5163[2]
  i5162.cycleOffsetParameter = i5163[3]
  i5162.cycleOffsetParameterActive = !!i5163[4]
  i5162.mirror = !!i5163[5]
  i5162.mirrorParameter = i5163[6]
  i5162.mirrorParameterActive = !!i5163[7]
  i5162.motionId = i5163[8]
  i5162.nameHash = i5163[9]
  i5162.fullPathHash = i5163[10]
  i5162.speed = i5163[11]
  i5162.speedParameter = i5163[12]
  i5162.speedParameterActive = !!i5163[13]
  i5162.tag = i5163[14]
  i5162.tagHash = i5163[15]
  i5162.writeDefaultValues = !!i5163[16]
  var i5165 = i5163[17]
  var i5164 = []
  for(var i = 0; i < i5165.length; i += 2) {
  request.r(i5165[i + 0], i5165[i + 1], 2, i5164, '')
  }
  i5162.behaviours = i5164
  var i5167 = i5163[18]
  var i5166 = []
  for(var i = 0; i < i5167.length; i += 1) {
    i5166.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i5167[i + 0]) );
  }
  i5162.transitions = i5166
  return i5162
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i5172 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i5173 = data
  i5172.fullPath = i5173[0]
  i5172.canTransitionToSelf = !!i5173[1]
  i5172.duration = i5173[2]
  i5172.exitTime = i5173[3]
  i5172.hasExitTime = !!i5173[4]
  i5172.hasFixedDuration = !!i5173[5]
  i5172.interruptionSource = i5173[6]
  i5172.offset = i5173[7]
  i5172.orderedInterruption = !!i5173[8]
  i5172.destinationStateId = i5173[9]
  i5172.isExit = !!i5173[10]
  i5172.mute = !!i5173[11]
  i5172.solo = !!i5173[12]
  var i5175 = i5173[13]
  var i5174 = []
  for(var i = 0; i < i5175.length; i += 1) {
    i5174.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i5175[i + 0]) );
  }
  i5172.conditions = i5174
  return i5172
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i5180 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i5181 = data
  i5180.destinationStateId = i5181[0]
  i5180.isExit = !!i5181[1]
  i5180.mute = !!i5181[2]
  i5180.solo = !!i5181[3]
  var i5183 = i5181[4]
  var i5182 = []
  for(var i = 0; i < i5183.length; i += 1) {
    i5182.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i5183[i + 0]) );
  }
  i5180.conditions = i5182
  return i5180
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i5186 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i5187 = data
  i5186.defaultBool = !!i5187[0]
  i5186.defaultFloat = i5187[1]
  i5186.defaultInt = i5187[2]
  i5186.name = i5187[3]
  i5186.nameHash = i5187[4]
  i5186.type = i5187[5]
  return i5186
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i5188 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i5189 = data
  i5188.name = i5189[0]
  i5188.bytes64 = i5189[1]
  i5188.data = i5189[2]
  return i5188
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i5190 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i5191 = data
  i5190.normalStyle = i5191[0]
  i5190.normalSpacingOffset = i5191[1]
  i5190.boldStyle = i5191[2]
  i5190.boldSpacing = i5191[3]
  i5190.italicStyle = i5191[4]
  i5190.tabSize = i5191[5]
  request.r(i5191[6], i5191[7], 0, i5190, 'atlas')
  i5190.m_SourceFontFileGUID = i5191[8]
  i5190.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i5191[9], i5190.m_CreationSettings)
  request.r(i5191[10], i5191[11], 0, i5190, 'm_SourceFontFile')
  i5190.m_SourceFontFilePath = i5191[12]
  i5190.m_AtlasPopulationMode = i5191[13]
  i5190.InternalDynamicOS = !!i5191[14]
  var i5193 = i5191[15]
  var i5192 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i5193.length; i += 1) {
    i5192.add(request.d('UnityEngine.TextCore.Glyph', i5193[i + 0]));
  }
  i5190.m_GlyphTable = i5192
  var i5195 = i5191[16]
  var i5194 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i5195.length; i += 1) {
    i5194.add(request.d('TMPro.TMP_Character', i5195[i + 0]));
  }
  i5190.m_CharacterTable = i5194
  var i5197 = i5191[17]
  var i5196 = []
  for(var i = 0; i < i5197.length; i += 2) {
  request.r(i5197[i + 0], i5197[i + 1], 2, i5196, '')
  }
  i5190.m_AtlasTextures = i5196
  i5190.m_AtlasTextureIndex = i5191[18]
  i5190.m_IsMultiAtlasTexturesEnabled = !!i5191[19]
  i5190.m_GetFontFeatures = !!i5191[20]
  i5190.m_ClearDynamicDataOnBuild = !!i5191[21]
  i5190.m_AtlasWidth = i5191[22]
  i5190.m_AtlasHeight = i5191[23]
  i5190.m_AtlasPadding = i5191[24]
  i5190.m_AtlasRenderMode = i5191[25]
  var i5199 = i5191[26]
  var i5198 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i5199.length; i += 1) {
    i5198.add(request.d('UnityEngine.TextCore.GlyphRect', i5199[i + 0]));
  }
  i5190.m_UsedGlyphRects = i5198
  var i5201 = i5191[27]
  var i5200 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i5201.length; i += 1) {
    i5200.add(request.d('UnityEngine.TextCore.GlyphRect', i5201[i + 0]));
  }
  i5190.m_FreeGlyphRects = i5200
  i5190.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i5191[28], i5190.m_FontFeatureTable)
  i5190.m_ShouldReimportFontFeatures = !!i5191[29]
  var i5203 = i5191[30]
  var i5202 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i5203.length; i += 2) {
  request.r(i5203[i + 0], i5203[i + 1], 1, i5202, '')
  }
  i5190.m_FallbackFontAssetTable = i5202
  var i5205 = i5191[31]
  var i5204 = []
  for(var i = 0; i < i5205.length; i += 1) {
    i5204.push( request.d('TMPro.TMP_FontWeightPair', i5205[i + 0]) );
  }
  i5190.m_FontWeightTable = i5204
  var i5207 = i5191[32]
  var i5206 = []
  for(var i = 0; i < i5207.length; i += 1) {
    i5206.push( request.d('TMPro.TMP_FontWeightPair', i5207[i + 0]) );
  }
  i5190.fontWeights = i5206
  i5190.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i5191[33], i5190.m_fontInfo)
  var i5209 = i5191[34]
  var i5208 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i5209.length; i += 1) {
    i5208.add(request.d('TMPro.TMP_Glyph', i5209[i + 0]));
  }
  i5190.m_glyphInfoList = i5208
  i5190.m_KerningTable = request.d('TMPro.KerningTable', i5191[35], i5190.m_KerningTable)
  var i5211 = i5191[36]
  var i5210 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i5211.length; i += 2) {
  request.r(i5211[i + 0], i5211[i + 1], 1, i5210, '')
  }
  i5190.fallbackFontAssets = i5210
  i5190.m_Version = i5191[37]
  i5190.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i5191[38], i5190.m_FaceInfo)
  request.r(i5191[39], i5191[40], 0, i5190, 'm_Material')
  return i5190
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i5212 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i5213 = data
  i5212.sourceFontFileName = i5213[0]
  i5212.sourceFontFileGUID = i5213[1]
  i5212.faceIndex = i5213[2]
  i5212.pointSizeSamplingMode = i5213[3]
  i5212.pointSize = i5213[4]
  i5212.padding = i5213[5]
  i5212.paddingMode = i5213[6]
  i5212.packingMode = i5213[7]
  i5212.atlasWidth = i5213[8]
  i5212.atlasHeight = i5213[9]
  i5212.characterSetSelectionMode = i5213[10]
  i5212.characterSequence = i5213[11]
  i5212.referencedFontAssetGUID = i5213[12]
  i5212.referencedTextAssetGUID = i5213[13]
  i5212.fontStyle = i5213[14]
  i5212.fontStyleModifier = i5213[15]
  i5212.renderMode = i5213[16]
  i5212.includeFontFeatures = !!i5213[17]
  return i5212
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i5216 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i5217 = data
  i5216.m_Index = i5217[0]
  i5216.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i5217[1], i5216.m_Metrics)
  i5216.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i5217[2], i5216.m_GlyphRect)
  i5216.m_Scale = i5217[3]
  i5216.m_AtlasIndex = i5217[4]
  i5216.m_ClassDefinitionType = i5217[5]
  return i5216
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i5218 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i5219 = data
  i5218.m_Width = i5219[0]
  i5218.m_Height = i5219[1]
  i5218.m_HorizontalBearingX = i5219[2]
  i5218.m_HorizontalBearingY = i5219[3]
  i5218.m_HorizontalAdvance = i5219[4]
  return i5218
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i5220 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i5221 = data
  i5220.m_X = i5221[0]
  i5220.m_Y = i5221[1]
  i5220.m_Width = i5221[2]
  i5220.m_Height = i5221[3]
  return i5220
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i5224 = root || request.c( 'TMPro.TMP_Character' )
  var i5225 = data
  i5224.m_ElementType = i5225[0]
  i5224.m_Unicode = i5225[1]
  i5224.m_GlyphIndex = i5225[2]
  i5224.m_Scale = i5225[3]
  return i5224
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i5230 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i5231 = data
  var i5233 = i5231[0]
  var i5232 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i5233.length; i += 1) {
    i5232.add(request.d('TMPro.MultipleSubstitutionRecord', i5233[i + 0]));
  }
  i5230.m_MultipleSubstitutionRecords = i5232
  var i5235 = i5231[1]
  var i5234 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i5235.length; i += 1) {
    i5234.add(request.d('TMPro.LigatureSubstitutionRecord', i5235[i + 0]));
  }
  i5230.m_LigatureSubstitutionRecords = i5234
  var i5237 = i5231[2]
  var i5236 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i5237.length; i += 1) {
    i5236.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i5237[i + 0]));
  }
  i5230.m_GlyphPairAdjustmentRecords = i5236
  var i5239 = i5231[3]
  var i5238 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i5239.length; i += 1) {
    i5238.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i5239[i + 0]));
  }
  i5230.m_MarkToBaseAdjustmentRecords = i5238
  var i5241 = i5231[4]
  var i5240 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i5241.length; i += 1) {
    i5240.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i5241[i + 0]));
  }
  i5230.m_MarkToMarkAdjustmentRecords = i5240
  return i5230
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i5244 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i5245 = data
  i5244.m_TargetGlyphID = i5245[0]
  i5244.m_SubstituteGlyphIDs = i5245[1]
  return i5244
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i5248 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i5249 = data
  i5248.m_ComponentGlyphIDs = i5249[0]
  i5248.m_LigatureGlyphID = i5249[1]
  return i5248
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i5252 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i5253 = data
  i5252.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i5253[0], i5252.m_FirstAdjustmentRecord)
  i5252.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i5253[1], i5252.m_SecondAdjustmentRecord)
  i5252.m_FeatureLookupFlags = i5253[2]
  return i5252
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i5254 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i5255 = data
  i5254.m_GlyphIndex = i5255[0]
  i5254.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i5255[1], i5254.m_GlyphValueRecord)
  return i5254
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i5256 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i5257 = data
  i5256.m_XPlacement = i5257[0]
  i5256.m_YPlacement = i5257[1]
  i5256.m_XAdvance = i5257[2]
  i5256.m_YAdvance = i5257[3]
  return i5256
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i5260 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i5261 = data
  i5260.m_BaseGlyphID = i5261[0]
  i5260.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i5261[1], i5260.m_BaseGlyphAnchorPoint)
  i5260.m_MarkGlyphID = i5261[2]
  i5260.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i5261[3], i5260.m_MarkPositionAdjustment)
  return i5260
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i5264 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i5265 = data
  i5264.m_BaseMarkGlyphID = i5265[0]
  i5264.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i5265[1], i5264.m_BaseMarkGlyphAnchorPoint)
  i5264.m_CombiningMarkGlyphID = i5265[2]
  i5264.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i5265[3], i5264.m_CombiningMarkPositionAdjustment)
  return i5264
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i5270 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i5271 = data
  request.r(i5271[0], i5271[1], 0, i5270, 'regularTypeface')
  request.r(i5271[2], i5271[3], 0, i5270, 'italicTypeface')
  return i5270
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i5272 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i5273 = data
  i5272.Name = i5273[0]
  i5272.PointSize = i5273[1]
  i5272.Scale = i5273[2]
  i5272.CharacterCount = i5273[3]
  i5272.LineHeight = i5273[4]
  i5272.Baseline = i5273[5]
  i5272.Ascender = i5273[6]
  i5272.CapHeight = i5273[7]
  i5272.Descender = i5273[8]
  i5272.CenterLine = i5273[9]
  i5272.SuperscriptOffset = i5273[10]
  i5272.SubscriptOffset = i5273[11]
  i5272.SubSize = i5273[12]
  i5272.Underline = i5273[13]
  i5272.UnderlineThickness = i5273[14]
  i5272.strikethrough = i5273[15]
  i5272.strikethroughThickness = i5273[16]
  i5272.TabWidth = i5273[17]
  i5272.Padding = i5273[18]
  i5272.AtlasWidth = i5273[19]
  i5272.AtlasHeight = i5273[20]
  return i5272
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i5276 = root || request.c( 'TMPro.TMP_Glyph' )
  var i5277 = data
  i5276.id = i5277[0]
  i5276.x = i5277[1]
  i5276.y = i5277[2]
  i5276.width = i5277[3]
  i5276.height = i5277[4]
  i5276.xOffset = i5277[5]
  i5276.yOffset = i5277[6]
  i5276.xAdvance = i5277[7]
  i5276.scale = i5277[8]
  return i5276
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i5278 = root || request.c( 'TMPro.KerningTable' )
  var i5279 = data
  var i5281 = i5279[0]
  var i5280 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i5281.length; i += 1) {
    i5280.add(request.d('TMPro.KerningPair', i5281[i + 0]));
  }
  i5278.kerningPairs = i5280
  return i5278
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i5284 = root || request.c( 'TMPro.KerningPair' )
  var i5285 = data
  i5284.xOffset = i5285[0]
  i5284.m_FirstGlyph = i5285[1]
  i5284.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i5285[2], i5284.m_FirstGlyphAdjustments)
  i5284.m_SecondGlyph = i5285[3]
  i5284.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i5285[4], i5284.m_SecondGlyphAdjustments)
  i5284.m_IgnoreSpacingAdjustments = !!i5285[5]
  return i5284
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i5286 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i5287 = data
  i5286.m_FaceIndex = i5287[0]
  i5286.m_FamilyName = i5287[1]
  i5286.m_StyleName = i5287[2]
  i5286.m_PointSize = i5287[3]
  i5286.m_Scale = i5287[4]
  i5286.m_UnitsPerEM = i5287[5]
  i5286.m_LineHeight = i5287[6]
  i5286.m_AscentLine = i5287[7]
  i5286.m_CapLine = i5287[8]
  i5286.m_MeanLine = i5287[9]
  i5286.m_Baseline = i5287[10]
  i5286.m_DescentLine = i5287[11]
  i5286.m_SuperscriptOffset = i5287[12]
  i5286.m_SuperscriptSize = i5287[13]
  i5286.m_SubscriptOffset = i5287[14]
  i5286.m_SubscriptSize = i5287[15]
  i5286.m_UnderlineOffset = i5287[16]
  i5286.m_UnderlineThickness = i5287[17]
  i5286.m_StrikethroughOffset = i5287[18]
  i5286.m_StrikethroughThickness = i5287[19]
  i5286.m_TabWidth = i5287[20]
  return i5286
}

Deserializers["PlayerCardData"] = function (request, data, root) {
  var i5288 = root || request.c( 'PlayerCardData' )
  var i5289 = data
  i5288.nationality = i5289[0]
  request.r(i5289[1], i5289[2], 0, i5288, 'playerSprite')
  request.r(i5289[3], i5289[4], 0, i5288, 'flagSprite')
  return i5288
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i5290 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i5291 = data
  i5290.useSafeMode = !!i5291[0]
  i5290.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i5291[1], i5290.safeModeOptions)
  i5290.timeScale = i5291[2]
  i5290.unscaledTimeScale = i5291[3]
  i5290.useSmoothDeltaTime = !!i5291[4]
  i5290.maxSmoothUnscaledTime = i5291[5]
  i5290.rewindCallbackMode = i5291[6]
  i5290.showUnityEditorReport = !!i5291[7]
  i5290.logBehaviour = i5291[8]
  i5290.drawGizmos = !!i5291[9]
  i5290.defaultRecyclable = !!i5291[10]
  i5290.defaultAutoPlay = i5291[11]
  i5290.defaultUpdateType = i5291[12]
  i5290.defaultTimeScaleIndependent = !!i5291[13]
  i5290.defaultEaseType = i5291[14]
  i5290.defaultEaseOvershootOrAmplitude = i5291[15]
  i5290.defaultEasePeriod = i5291[16]
  i5290.defaultAutoKill = !!i5291[17]
  i5290.defaultLoopType = i5291[18]
  i5290.debugMode = !!i5291[19]
  i5290.debugStoreTargetId = !!i5291[20]
  i5290.showPreviewPanel = !!i5291[21]
  i5290.storeSettingsLocation = i5291[22]
  i5290.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i5291[23], i5290.modules)
  i5290.createASMDEF = !!i5291[24]
  i5290.showPlayingTweens = !!i5291[25]
  i5290.showPausedTweens = !!i5291[26]
  return i5290
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i5292 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i5293 = data
  i5292.logBehaviour = i5293[0]
  i5292.nestedTweenFailureBehaviour = i5293[1]
  return i5292
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i5294 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i5295 = data
  i5294.showPanel = !!i5295[0]
  i5294.audioEnabled = !!i5295[1]
  i5294.physicsEnabled = !!i5295[2]
  i5294.physics2DEnabled = !!i5295[3]
  i5294.spriteEnabled = !!i5295[4]
  i5294.uiEnabled = !!i5295[5]
  i5294.uiToolkitEnabled = !!i5295[6]
  i5294.textMeshProEnabled = !!i5295[7]
  i5294.tk2DEnabled = !!i5295[8]
  i5294.deAudioEnabled = !!i5295[9]
  i5294.deUnityExtendedEnabled = !!i5295[10]
  i5294.epoOutlineEnabled = !!i5295[11]
  return i5294
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i5296 = root || request.c( 'TMPro.TMP_Settings' )
  var i5297 = data
  i5296.assetVersion = i5297[0]
  i5296.m_TextWrappingMode = i5297[1]
  i5296.m_enableKerning = !!i5297[2]
  var i5299 = i5297[3]
  var i5298 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i5299.length; i += 1) {
    i5298.add(i5299[i + 0]);
  }
  i5296.m_ActiveFontFeatures = i5298
  i5296.m_enableExtraPadding = !!i5297[4]
  i5296.m_enableTintAllSprites = !!i5297[5]
  i5296.m_enableParseEscapeCharacters = !!i5297[6]
  i5296.m_EnableRaycastTarget = !!i5297[7]
  i5296.m_GetFontFeaturesAtRuntime = !!i5297[8]
  i5296.m_missingGlyphCharacter = i5297[9]
  i5296.m_ClearDynamicDataOnBuild = !!i5297[10]
  i5296.m_warningsDisabled = !!i5297[11]
  request.r(i5297[12], i5297[13], 0, i5296, 'm_defaultFontAsset')
  i5296.m_defaultFontAssetPath = i5297[14]
  i5296.m_defaultFontSize = i5297[15]
  i5296.m_defaultAutoSizeMinRatio = i5297[16]
  i5296.m_defaultAutoSizeMaxRatio = i5297[17]
  i5296.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i5297[18], i5297[19] )
  i5296.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i5297[20], i5297[21] )
  i5296.m_autoSizeTextContainer = !!i5297[22]
  i5296.m_IsTextObjectScaleStatic = !!i5297[23]
  var i5301 = i5297[24]
  var i5300 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i5301.length; i += 2) {
  request.r(i5301[i + 0], i5301[i + 1], 1, i5300, '')
  }
  i5296.m_fallbackFontAssets = i5300
  i5296.m_matchMaterialPreset = !!i5297[25]
  i5296.m_HideSubTextObjects = !!i5297[26]
  request.r(i5297[27], i5297[28], 0, i5296, 'm_defaultSpriteAsset')
  i5296.m_defaultSpriteAssetPath = i5297[29]
  i5296.m_enableEmojiSupport = !!i5297[30]
  i5296.m_MissingCharacterSpriteUnicode = i5297[31]
  var i5303 = i5297[32]
  var i5302 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i5303.length; i += 2) {
  request.r(i5303[i + 0], i5303[i + 1], 1, i5302, '')
  }
  i5296.m_EmojiFallbackTextAssets = i5302
  i5296.m_defaultColorGradientPresetsPath = i5297[33]
  request.r(i5297[34], i5297[35], 0, i5296, 'm_defaultStyleSheet')
  i5296.m_StyleSheetsResourcePath = i5297[36]
  request.r(i5297[37], i5297[38], 0, i5296, 'm_leadingCharacters')
  request.r(i5297[39], i5297[40], 0, i5296, 'm_followingCharacters')
  i5296.m_UseModernHangulLineBreakingRules = !!i5297[41]
  return i5296
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i5306 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i5307 = data
  request.r(i5307[0], i5307[1], 0, i5306, 'spriteSheet')
  var i5309 = i5307[2]
  var i5308 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i5309.length; i += 1) {
    i5308.add(request.d('TMPro.TMP_Sprite', i5309[i + 0]));
  }
  i5306.spriteInfoList = i5308
  var i5311 = i5307[3]
  var i5310 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i5311.length; i += 2) {
  request.r(i5311[i + 0], i5311[i + 1], 1, i5310, '')
  }
  i5306.fallbackSpriteAssets = i5310
  var i5313 = i5307[4]
  var i5312 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i5313.length; i += 1) {
    i5312.add(request.d('TMPro.TMP_SpriteCharacter', i5313[i + 0]));
  }
  i5306.m_SpriteCharacterTable = i5312
  var i5315 = i5307[5]
  var i5314 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i5315.length; i += 1) {
    i5314.add(request.d('TMPro.TMP_SpriteGlyph', i5315[i + 0]));
  }
  i5306.m_GlyphTable = i5314
  i5306.m_Version = i5307[6]
  i5306.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i5307[7], i5306.m_FaceInfo)
  request.r(i5307[8], i5307[9], 0, i5306, 'm_Material')
  return i5306
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i5318 = root || request.c( 'TMPro.TMP_Sprite' )
  var i5319 = data
  i5318.name = i5319[0]
  i5318.hashCode = i5319[1]
  i5318.unicode = i5319[2]
  i5318.pivot = new pc.Vec2( i5319[3], i5319[4] )
  request.r(i5319[5], i5319[6], 0, i5318, 'sprite')
  i5318.id = i5319[7]
  i5318.x = i5319[8]
  i5318.y = i5319[9]
  i5318.width = i5319[10]
  i5318.height = i5319[11]
  i5318.xOffset = i5319[12]
  i5318.yOffset = i5319[13]
  i5318.xAdvance = i5319[14]
  i5318.scale = i5319[15]
  return i5318
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i5324 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i5325 = data
  i5324.m_Name = i5325[0]
  i5324.m_ElementType = i5325[1]
  i5324.m_Unicode = i5325[2]
  i5324.m_GlyphIndex = i5325[3]
  i5324.m_Scale = i5325[4]
  return i5324
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i5328 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i5329 = data
  request.r(i5329[0], i5329[1], 0, i5328, 'sprite')
  i5328.m_Index = i5329[2]
  i5328.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i5329[3], i5328.m_Metrics)
  i5328.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i5329[4], i5328.m_GlyphRect)
  i5328.m_Scale = i5329[5]
  i5328.m_AtlasIndex = i5329[6]
  i5328.m_ClassDefinitionType = i5329[7]
  return i5328
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i5330 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i5331 = data
  var i5333 = i5331[0]
  var i5332 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i5333.length; i += 1) {
    i5332.add(request.d('TMPro.TMP_Style', i5333[i + 0]));
  }
  i5330.m_StyleList = i5332
  return i5330
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i5336 = root || request.c( 'TMPro.TMP_Style' )
  var i5337 = data
  i5336.m_Name = i5337[0]
  i5336.m_HashCode = i5337[1]
  i5336.m_OpeningDefinition = i5337[2]
  i5336.m_ClosingDefinition = i5337[3]
  i5336.m_OpeningTagArray = i5337[4]
  i5336.m_ClosingTagArray = i5337[5]
  return i5336
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i5338 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i5339 = data
  var i5341 = i5339[0]
  var i5340 = []
  for(var i = 0; i < i5341.length; i += 1) {
    i5340.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i5341[i + 0]) );
  }
  i5338.files = i5340
  i5338.componentToPrefabIds = i5339[1]
  return i5338
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i5344 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i5345 = data
  i5344.path = i5345[0]
  request.r(i5345[1], i5345[2], 0, i5344, 'unityObject')
  return i5344
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i5346 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i5347 = data
  var i5349 = i5347[0]
  var i5348 = []
  for(var i = 0; i < i5349.length; i += 1) {
    i5348.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i5349[i + 0]) );
  }
  i5346.scriptsExecutionOrder = i5348
  var i5351 = i5347[1]
  var i5350 = []
  for(var i = 0; i < i5351.length; i += 1) {
    i5350.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i5351[i + 0]) );
  }
  i5346.sortingLayers = i5350
  var i5353 = i5347[2]
  var i5352 = []
  for(var i = 0; i < i5353.length; i += 1) {
    i5352.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i5353[i + 0]) );
  }
  i5346.cullingLayers = i5352
  i5346.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i5347[3], i5346.timeSettings)
  i5346.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i5347[4], i5346.physicsSettings)
  i5346.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i5347[5], i5346.physics2DSettings)
  i5346.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i5347[6], i5346.qualitySettings)
  i5346.enableRealtimeShadows = !!i5347[7]
  i5346.enableAutoInstancing = !!i5347[8]
  i5346.enableStaticBatching = !!i5347[9]
  i5346.enableDynamicBatching = !!i5347[10]
  i5346.lightmapEncodingQuality = i5347[11]
  i5346.desiredColorSpace = i5347[12]
  var i5355 = i5347[13]
  var i5354 = []
  for(var i = 0; i < i5355.length; i += 1) {
    i5354.push( i5355[i + 0] );
  }
  i5346.allTags = i5354
  return i5346
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i5358 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i5359 = data
  i5358.name = i5359[0]
  i5358.value = i5359[1]
  return i5358
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i5362 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i5363 = data
  i5362.id = i5363[0]
  i5362.name = i5363[1]
  i5362.value = i5363[2]
  return i5362
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i5366 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i5367 = data
  i5366.id = i5367[0]
  i5366.name = i5367[1]
  return i5366
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i5368 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i5369 = data
  i5368.fixedDeltaTime = i5369[0]
  i5368.maximumDeltaTime = i5369[1]
  i5368.timeScale = i5369[2]
  i5368.maximumParticleTimestep = i5369[3]
  return i5368
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i5370 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i5371 = data
  i5370.gravity = new pc.Vec3( i5371[0], i5371[1], i5371[2] )
  i5370.defaultSolverIterations = i5371[3]
  i5370.bounceThreshold = i5371[4]
  i5370.autoSyncTransforms = !!i5371[5]
  i5370.autoSimulation = !!i5371[6]
  var i5373 = i5371[7]
  var i5372 = []
  for(var i = 0; i < i5373.length; i += 1) {
    i5372.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i5373[i + 0]) );
  }
  i5370.collisionMatrix = i5372
  return i5370
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i5376 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i5377 = data
  i5376.enabled = !!i5377[0]
  i5376.layerId = i5377[1]
  i5376.otherLayerId = i5377[2]
  return i5376
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i5378 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i5379 = data
  request.r(i5379[0], i5379[1], 0, i5378, 'material')
  i5378.gravity = new pc.Vec2( i5379[2], i5379[3] )
  i5378.positionIterations = i5379[4]
  i5378.velocityIterations = i5379[5]
  i5378.velocityThreshold = i5379[6]
  i5378.maxLinearCorrection = i5379[7]
  i5378.maxAngularCorrection = i5379[8]
  i5378.maxTranslationSpeed = i5379[9]
  i5378.maxRotationSpeed = i5379[10]
  i5378.baumgarteScale = i5379[11]
  i5378.baumgarteTOIScale = i5379[12]
  i5378.timeToSleep = i5379[13]
  i5378.linearSleepTolerance = i5379[14]
  i5378.angularSleepTolerance = i5379[15]
  i5378.defaultContactOffset = i5379[16]
  i5378.autoSimulation = !!i5379[17]
  i5378.queriesHitTriggers = !!i5379[18]
  i5378.queriesStartInColliders = !!i5379[19]
  i5378.callbacksOnDisable = !!i5379[20]
  i5378.reuseCollisionCallbacks = !!i5379[21]
  i5378.autoSyncTransforms = !!i5379[22]
  var i5381 = i5379[23]
  var i5380 = []
  for(var i = 0; i < i5381.length; i += 1) {
    i5380.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i5381[i + 0]) );
  }
  i5378.collisionMatrix = i5380
  return i5378
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i5384 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i5385 = data
  i5384.enabled = !!i5385[0]
  i5384.layerId = i5385[1]
  i5384.otherLayerId = i5385[2]
  return i5384
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i5386 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i5387 = data
  var i5389 = i5387[0]
  var i5388 = []
  for(var i = 0; i < i5389.length; i += 1) {
    i5388.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i5389[i + 0]) );
  }
  i5386.qualityLevels = i5388
  var i5391 = i5387[1]
  var i5390 = []
  for(var i = 0; i < i5391.length; i += 1) {
    i5390.push( i5391[i + 0] );
  }
  i5386.names = i5390
  i5386.shadows = i5387[2]
  i5386.anisotropicFiltering = i5387[3]
  i5386.antiAliasing = i5387[4]
  i5386.lodBias = i5387[5]
  i5386.shadowCascades = i5387[6]
  i5386.shadowDistance = i5387[7]
  i5386.shadowmaskMode = i5387[8]
  i5386.shadowProjection = i5387[9]
  i5386.shadowResolution = i5387[10]
  i5386.softParticles = !!i5387[11]
  i5386.softVegetation = !!i5387[12]
  i5386.activeColorSpace = i5387[13]
  i5386.desiredColorSpace = i5387[14]
  i5386.masterTextureLimit = i5387[15]
  i5386.maxQueuedFrames = i5387[16]
  i5386.particleRaycastBudget = i5387[17]
  i5386.pixelLightCount = i5387[18]
  i5386.realtimeReflectionProbes = !!i5387[19]
  i5386.shadowCascade2Split = i5387[20]
  i5386.shadowCascade4Split = new pc.Vec3( i5387[21], i5387[22], i5387[23] )
  i5386.streamingMipmapsActive = !!i5387[24]
  i5386.vSyncCount = i5387[25]
  i5386.asyncUploadBufferSize = i5387[26]
  i5386.asyncUploadTimeSlice = i5387[27]
  i5386.billboardsFaceCameraPosition = !!i5387[28]
  i5386.shadowNearPlaneOffset = i5387[29]
  i5386.streamingMipmapsMemoryBudget = i5387[30]
  i5386.maximumLODLevel = i5387[31]
  i5386.streamingMipmapsAddAllCameras = !!i5387[32]
  i5386.streamingMipmapsMaxLevelReduction = i5387[33]
  i5386.streamingMipmapsRenderersPerFrame = i5387[34]
  i5386.resolutionScalingFixedDPIFactor = i5387[35]
  i5386.streamingMipmapsMaxFileIORequests = i5387[36]
  i5386.currentQualityLevel = i5387[37]
  return i5386
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i5396 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i5397 = data
  i5396.weight = i5397[0]
  i5396.vertices = i5397[1]
  i5396.normals = i5397[2]
  i5396.tangents = i5397[3]
  return i5396
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i5400 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i5401 = data
  i5400.mode = i5401[0]
  i5400.parameter = i5401[1]
  i5400.threshold = i5401[2]
  return i5400
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i5402 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i5403 = data
  i5402.m_XCoordinate = i5403[0]
  i5402.m_YCoordinate = i5403[1]
  return i5402
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i5404 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i5405 = data
  i5404.m_XPositionAdjustment = i5405[0]
  i5404.m_YPositionAdjustment = i5405[1]
  return i5404
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i5406 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i5407 = data
  i5406.xPlacement = i5407[0]
  i5406.yPlacement = i5407[1]
  i5406.xAdvance = i5407[2]
  i5406.yAdvance = i5407[3]
  return i5406
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D":{"usedByComposite":0,"autoTiling":1,"points":2,"enabled":3,"isTrigger":4,"usedByEffector":5,"density":6,"offset":7,"material":9},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.PhysicsMaterial2D":{"name":0,"bounciness":1,"friction":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2}}

Deserializers.requiredComponents = {"53":[54],"55":[54],"56":[54],"57":[54],"58":[54],"59":[54],"60":[61],"62":[2],"63":[64],"65":[64],"66":[64],"67":[64],"68":[64],"69":[64],"70":[39],"71":[39],"72":[39],"73":[39],"74":[39],"75":[39],"76":[39],"77":[39],"78":[39],"79":[39],"80":[39],"81":[39],"82":[39],"83":[2],"84":[18],"85":[86],"87":[86],"28":[17],"7":[2],"40":[39],"42":[38],"88":[12],"89":[2],"90":[91],"92":[45],"93":[28],"94":[17],"20":[18,17],"32":[17,31],"95":[17],"96":[31,17],"97":[18],"98":[31,17],"99":[17],"100":[101],"102":[101],"103":[101],"104":[17],"105":[17],"30":[28],"33":[31,17],"106":[17],"29":[28],"107":[17],"108":[17],"109":[17],"110":[17],"111":[17],"112":[17],"113":[17],"114":[17],"115":[17],"116":[31,17],"117":[17],"118":[17],"119":[17],"120":[17],"121":[31,17],"122":[17],"123":[45],"124":[45],"46":[45],"125":[45],"126":[2],"127":[2]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.MonoBehaviour","CameraFollow2D","UnityEngine.Transform","AutoCameraFit","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Mesh","UnityEngine.Material","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","MoveBetweenPoints","UnityEngine.RectTransform","UnityEngine.MeshRenderer","UnityEngine.EventSystems.UIBehaviour","TMPro.TextMeshPro","TMPro.TMP_FontAsset","UnityEngine.MeshFilter","PlayerCardUIManager","UnityEngine.GameObject","Ply_SoundManager","UnityEngine.AudioSource","UnityEngine.AudioClip","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","TMPro.TextMeshProUGUI","UnityEngine.UI.Image","UnityEngine.UI.Button","ScreenHeightPositionAnchor","UnityEngine.PolygonCollider2D","UnityEngine.PhysicsMaterial2D","UnityEngine.BoxCollider2D","UnityEngine.Rigidbody2D","BatStrikeController","CupCollision","SlotTrigger","PlayerCardData","HideOnFirstClick","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.Font","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.InputSystem.UI.InputSystemUIInputModule","UnityEngine.InputSystem.UI.TrackedDeviceRaycaster","TMPro.TextContainer","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.38f1";

Deserializers.productName = "PLY_MiniSoccer";

Deserializers.lunaInitializationTime = "07/15/2026 03:53:54";

Deserializers.lunaDaysRunning = "75.0";

Deserializers.lunaVersion = "7.1.0";

Deserializers.lunaSHA = "cf93782349542fe0b84ad13951a26809f8419628";

Deserializers.creativeName = "PLY_V11";

Deserializers.lunaAppID = "33920";

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

Deserializers.runtimeAnalysisExcludedMethodsCount = "4602";

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

Deserializers.buildID = "f8da7246-53b9-4b68-8d81-31e30568f9e9";

Deserializers.runtimeInitializeOnLoadInfos = [[["Unity","Services","Core","Internal","UnityServicesInitializer","EnableServicesInitializationAsync"],["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["DG","Tweening","DOTween","RuntimeOnLoad"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["Unity","Services","Core","Registration","CorePackageInitializer","InitializeOnLoad"],["Unity","Services","Core","Internal","TaskAsyncOperation","SetScheduler"],["Unity","Services","Core","Environments","Client","Scheduler","EngineStateHelper","Init"],["Unity","Services","Core","Environments","Client","Scheduler","ThreadHelper","Init"],["Ua2CoreInitializeCallback","Register"],["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["Unity","AI","Navigation","NavMeshLink","ClearTrackedList"],["Unity","AI","Navigation","NavMeshSurface","ClearNavMeshSurfaces"],["Unity","AI","Navigation","NavMeshModifierVolume","ClearNavMeshModifiers"],["Unity","AI","Navigation","NavMeshModifier","ClearNavMeshModifiers"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["Unity","Services","Core","Internal","UnityServicesInitializer","CreateStaticInstance"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[["Unity","Services","Core","Environments","Client","Http","JsonHelpers","RegisterTypesForAOT"]],[["Unity","Services","Core","UnityThreadUtils","CaptureUnityThreadInfo"],["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

