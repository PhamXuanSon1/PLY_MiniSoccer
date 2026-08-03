var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i5782 = root || request.c( 'UnityEngine.JointSpring' )
  var i5783 = data
  i5782.spring = i5783[0]
  i5782.damper = i5783[1]
  i5782.targetPosition = i5783[2]
  return i5782
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i5784 = root || request.c( 'UnityEngine.JointMotor' )
  var i5785 = data
  i5784.m_TargetVelocity = i5785[0]
  i5784.m_Force = i5785[1]
  i5784.m_FreeSpin = i5785[2]
  return i5784
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i5786 = root || request.c( 'UnityEngine.JointLimits' )
  var i5787 = data
  i5786.m_Min = i5787[0]
  i5786.m_Max = i5787[1]
  i5786.m_Bounciness = i5787[2]
  i5786.m_BounceMinVelocity = i5787[3]
  i5786.m_ContactDistance = i5787[4]
  i5786.minBounce = i5787[5]
  i5786.maxBounce = i5787[6]
  return i5786
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i5788 = root || request.c( 'UnityEngine.JointDrive' )
  var i5789 = data
  i5788.m_PositionSpring = i5789[0]
  i5788.m_PositionDamper = i5789[1]
  i5788.m_MaximumForce = i5789[2]
  i5788.m_UseAcceleration = i5789[3]
  return i5788
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i5790 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i5791 = data
  i5790.m_Spring = i5791[0]
  i5790.m_Damper = i5791[1]
  return i5790
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i5792 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i5793 = data
  i5792.m_Limit = i5793[0]
  i5792.m_Bounciness = i5793[1]
  i5792.m_ContactDistance = i5793[2]
  return i5792
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i5794 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i5795 = data
  i5794.m_ExtremumSlip = i5795[0]
  i5794.m_ExtremumValue = i5795[1]
  i5794.m_AsymptoteSlip = i5795[2]
  i5794.m_AsymptoteValue = i5795[3]
  i5794.m_Stiffness = i5795[4]
  return i5794
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i5796 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i5797 = data
  i5796.m_LowerAngle = i5797[0]
  i5796.m_UpperAngle = i5797[1]
  return i5796
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i5798 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i5799 = data
  i5798.m_MotorSpeed = i5799[0]
  i5798.m_MaximumMotorTorque = i5799[1]
  return i5798
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i5800 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i5801 = data
  i5800.m_DampingRatio = i5801[0]
  i5800.m_Frequency = i5801[1]
  i5800.m_Angle = i5801[2]
  return i5800
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i5802 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i5803 = data
  i5802.m_LowerTranslation = i5803[0]
  i5802.m_UpperTranslation = i5803[1]
  return i5802
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i5804 = root || new pc.UnityMaterial()
  var i5805 = data
  i5804.name = i5805[0]
  request.r(i5805[1], i5805[2], 0, i5804, 'shader')
  i5804.renderQueue = i5805[3]
  i5804.enableInstancing = !!i5805[4]
  var i5807 = i5805[5]
  var i5806 = []
  for(var i = 0; i < i5807.length; i += 1) {
    i5806.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i5807[i + 0]) );
  }
  i5804.floatParameters = i5806
  var i5809 = i5805[6]
  var i5808 = []
  for(var i = 0; i < i5809.length; i += 1) {
    i5808.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i5809[i + 0]) );
  }
  i5804.colorParameters = i5808
  var i5811 = i5805[7]
  var i5810 = []
  for(var i = 0; i < i5811.length; i += 1) {
    i5810.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i5811[i + 0]) );
  }
  i5804.vectorParameters = i5810
  var i5813 = i5805[8]
  var i5812 = []
  for(var i = 0; i < i5813.length; i += 1) {
    i5812.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i5813[i + 0]) );
  }
  i5804.textureParameters = i5812
  var i5815 = i5805[9]
  var i5814 = []
  for(var i = 0; i < i5815.length; i += 1) {
    i5814.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i5815[i + 0]) );
  }
  i5804.materialFlags = i5814
  return i5804
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i5818 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i5819 = data
  i5818.name = i5819[0]
  i5818.value = i5819[1]
  return i5818
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i5822 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i5823 = data
  i5822.name = i5823[0]
  i5822.value = new pc.Color(i5823[1], i5823[2], i5823[3], i5823[4])
  return i5822
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i5826 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i5827 = data
  i5826.name = i5827[0]
  i5826.value = new pc.Vec4( i5827[1], i5827[2], i5827[3], i5827[4] )
  return i5826
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i5830 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i5831 = data
  i5830.name = i5831[0]
  request.r(i5831[1], i5831[2], 0, i5830, 'value')
  return i5830
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i5834 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i5835 = data
  i5834.name = i5835[0]
  i5834.enabled = !!i5835[1]
  return i5834
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i5836 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i5837 = data
  i5836.name = i5837[0]
  i5836.width = i5837[1]
  i5836.height = i5837[2]
  i5836.mipmapCount = i5837[3]
  i5836.anisoLevel = i5837[4]
  i5836.filterMode = i5837[5]
  i5836.hdr = !!i5837[6]
  i5836.format = i5837[7]
  i5836.wrapMode = i5837[8]
  i5836.alphaIsTransparency = !!i5837[9]
  i5836.alphaSource = i5837[10]
  i5836.graphicsFormat = i5837[11]
  i5836.sRGBTexture = !!i5837[12]
  i5836.desiredColorSpace = i5837[13]
  i5836.wrapU = i5837[14]
  i5836.wrapV = i5837[15]
  return i5836
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i5838 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i5839 = data
  i5838.name = i5839[0]
  i5838.halfPrecision = !!i5839[1]
  i5838.useSimplification = !!i5839[2]
  i5838.useUInt32IndexFormat = !!i5839[3]
  i5838.vertexCount = i5839[4]
  i5838.aabb = i5839[5]
  var i5841 = i5839[6]
  var i5840 = []
  for(var i = 0; i < i5841.length; i += 1) {
    i5840.push( !!i5841[i + 0] );
  }
  i5838.streams = i5840
  i5838.vertices = i5839[7]
  var i5843 = i5839[8]
  var i5842 = []
  for(var i = 0; i < i5843.length; i += 1) {
    i5842.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i5843[i + 0]) );
  }
  i5838.subMeshes = i5842
  var i5845 = i5839[9]
  var i5844 = []
  for(var i = 0; i < i5845.length; i += 16) {
    i5844.push( new pc.Mat4().setData(i5845[i + 0], i5845[i + 1], i5845[i + 2], i5845[i + 3],  i5845[i + 4], i5845[i + 5], i5845[i + 6], i5845[i + 7],  i5845[i + 8], i5845[i + 9], i5845[i + 10], i5845[i + 11],  i5845[i + 12], i5845[i + 13], i5845[i + 14], i5845[i + 15]) );
  }
  i5838.bindposes = i5844
  var i5847 = i5839[10]
  var i5846 = []
  for(var i = 0; i < i5847.length; i += 1) {
    i5846.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i5847[i + 0]) );
  }
  i5838.blendShapes = i5846
  return i5838
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i5852 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i5853 = data
  i5852.triangles = i5853[0]
  return i5852
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i5858 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i5859 = data
  i5858.name = i5859[0]
  var i5861 = i5859[1]
  var i5860 = []
  for(var i = 0; i < i5861.length; i += 1) {
    i5860.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i5861[i + 0]) );
  }
  i5858.frames = i5860
  return i5858
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i5862 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i5863 = data
  i5862.name = i5863[0]
  i5862.index = i5863[1]
  i5862.startup = !!i5863[2]
  return i5862
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i5864 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i5865 = data
  i5864.aspect = i5865[0]
  i5864.orthographic = !!i5865[1]
  i5864.orthographicSize = i5865[2]
  i5864.backgroundColor = new pc.Color(i5865[3], i5865[4], i5865[5], i5865[6])
  i5864.nearClipPlane = i5865[7]
  i5864.farClipPlane = i5865[8]
  i5864.fieldOfView = i5865[9]
  i5864.depth = i5865[10]
  i5864.clearFlags = i5865[11]
  i5864.cullingMask = i5865[12]
  i5864.rect = i5865[13]
  request.r(i5865[14], i5865[15], 0, i5864, 'targetTexture')
  i5864.usePhysicalProperties = !!i5865[16]
  i5864.focalLength = i5865[17]
  i5864.sensorSize = new pc.Vec2( i5865[18], i5865[19] )
  i5864.lensShift = new pc.Vec2( i5865[20], i5865[21] )
  i5864.gateFit = i5865[22]
  i5864.commandBufferCount = i5865[23]
  i5864.cameraType = i5865[24]
  i5864.enabled = !!i5865[25]
  return i5864
}

Deserializers["CameraFollow2D"] = function (request, data, root) {
  var i5866 = root || request.c( 'CameraFollow2D' )
  var i5867 = data
  request.r(i5867[0], i5867[1], 0, i5866, 'target')
  i5866.smoothSpeed = i5867[2]
  i5866.offset = new pc.Vec3( i5867[3], i5867[4], i5867[5] )
  i5866.followY = !!i5867[6]
  return i5866
}

Deserializers["AutoCameraFit"] = function (request, data, root) {
  var i5868 = root || request.c( 'AutoCameraFit' )
  var i5869 = data
  request.r(i5869[0], i5869[1], 0, i5868, 'tallScreenObject')
  i5868.tallScreenRatioThreshold = i5869[2]
  i5868.tallScreenYOffset = i5869[3]
  request.r(i5869[4], i5869[5], 0, i5868, 'canvasBtn')
  request.r(i5869[6], i5869[7], 0, i5868, 'targetArea')
  i5868.paddingLandscape = i5869[8]
  i5868.paddingPortrait = i5869[9]
  i5868.extraPaddingSmallScreen = i5869[10]
  i5868.smallScreenThreshold = i5869[11]
  i5868.autoUpdateOnResize = !!i5869[12]
  i5868.adjustInEditMode = !!i5869[13]
  return i5868
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i5870 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i5871 = data
  i5870.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i5871[0], i5870.main)
  i5870.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i5871[1], i5870.colorBySpeed)
  i5870.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i5871[2], i5870.colorOverLifetime)
  i5870.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i5871[3], i5870.emission)
  i5870.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i5871[4], i5870.rotationBySpeed)
  i5870.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i5871[5], i5870.rotationOverLifetime)
  i5870.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i5871[6], i5870.shape)
  i5870.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i5871[7], i5870.sizeBySpeed)
  i5870.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i5871[8], i5870.sizeOverLifetime)
  i5870.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i5871[9], i5870.textureSheetAnimation)
  i5870.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i5871[10], i5870.velocityOverLifetime)
  i5870.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i5871[11], i5870.noise)
  i5870.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i5871[12], i5870.inheritVelocity)
  i5870.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i5871[13], i5870.forceOverLifetime)
  i5870.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i5871[14], i5870.limitVelocityOverLifetime)
  i5870.useAutoRandomSeed = !!i5871[15]
  i5870.randomSeed = i5871[16]
  return i5870
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i5872 = root || new pc.ParticleSystemMain()
  var i5873 = data
  i5872.duration = i5873[0]
  i5872.loop = !!i5873[1]
  i5872.prewarm = !!i5873[2]
  i5872.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5873[3], i5872.startDelay)
  i5872.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5873[4], i5872.startLifetime)
  i5872.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5873[5], i5872.startSpeed)
  i5872.startSize3D = !!i5873[6]
  i5872.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5873[7], i5872.startSizeX)
  i5872.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5873[8], i5872.startSizeY)
  i5872.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5873[9], i5872.startSizeZ)
  i5872.startRotation3D = !!i5873[10]
  i5872.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5873[11], i5872.startRotationX)
  i5872.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5873[12], i5872.startRotationY)
  i5872.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5873[13], i5872.startRotationZ)
  i5872.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i5873[14], i5872.startColor)
  i5872.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5873[15], i5872.gravityModifier)
  i5872.simulationSpace = i5873[16]
  request.r(i5873[17], i5873[18], 0, i5872, 'customSimulationSpace')
  i5872.simulationSpeed = i5873[19]
  i5872.useUnscaledTime = !!i5873[20]
  i5872.scalingMode = i5873[21]
  i5872.playOnAwake = !!i5873[22]
  i5872.maxParticles = i5873[23]
  i5872.emitterVelocityMode = i5873[24]
  i5872.stopAction = i5873[25]
  return i5872
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i5874 = root || new pc.MinMaxCurve()
  var i5875 = data
  i5874.mode = i5875[0]
  i5874.curveMin = new pc.AnimationCurve( { keys_flow: i5875[1] } )
  i5874.curveMax = new pc.AnimationCurve( { keys_flow: i5875[2] } )
  i5874.curveMultiplier = i5875[3]
  i5874.constantMin = i5875[4]
  i5874.constantMax = i5875[5]
  return i5874
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i5876 = root || new pc.MinMaxGradient()
  var i5877 = data
  i5876.mode = i5877[0]
  i5876.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i5877[1], i5876.gradientMin)
  i5876.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i5877[2], i5876.gradientMax)
  i5876.colorMin = new pc.Color(i5877[3], i5877[4], i5877[5], i5877[6])
  i5876.colorMax = new pc.Color(i5877[7], i5877[8], i5877[9], i5877[10])
  return i5876
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i5878 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i5879 = data
  i5878.mode = i5879[0]
  var i5881 = i5879[1]
  var i5880 = []
  for(var i = 0; i < i5881.length; i += 1) {
    i5880.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i5881[i + 0]) );
  }
  i5878.colorKeys = i5880
  var i5883 = i5879[2]
  var i5882 = []
  for(var i = 0; i < i5883.length; i += 1) {
    i5882.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i5883[i + 0]) );
  }
  i5878.alphaKeys = i5882
  return i5878
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i5884 = root || new pc.ParticleSystemColorBySpeed()
  var i5885 = data
  i5884.enabled = !!i5885[0]
  i5884.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i5885[1], i5884.color)
  i5884.range = new pc.Vec2( i5885[2], i5885[3] )
  return i5884
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i5888 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i5889 = data
  i5888.color = new pc.Color(i5889[0], i5889[1], i5889[2], i5889[3])
  i5888.time = i5889[4]
  return i5888
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i5892 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i5893 = data
  i5892.alpha = i5893[0]
  i5892.time = i5893[1]
  return i5892
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i5894 = root || new pc.ParticleSystemColorOverLifetime()
  var i5895 = data
  i5894.enabled = !!i5895[0]
  i5894.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i5895[1], i5894.color)
  return i5894
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i5896 = root || new pc.ParticleSystemEmitter()
  var i5897 = data
  i5896.enabled = !!i5897[0]
  i5896.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5897[1], i5896.rateOverTime)
  i5896.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5897[2], i5896.rateOverDistance)
  var i5899 = i5897[3]
  var i5898 = []
  for(var i = 0; i < i5899.length; i += 1) {
    i5898.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i5899[i + 0]) );
  }
  i5896.bursts = i5898
  return i5896
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i5902 = root || new pc.ParticleSystemBurst()
  var i5903 = data
  i5902.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5903[0], i5902.count)
  i5902.cycleCount = i5903[1]
  i5902.minCount = i5903[2]
  i5902.maxCount = i5903[3]
  i5902.repeatInterval = i5903[4]
  i5902.time = i5903[5]
  return i5902
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i5904 = root || new pc.ParticleSystemRotationBySpeed()
  var i5905 = data
  i5904.enabled = !!i5905[0]
  i5904.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5905[1], i5904.x)
  i5904.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5905[2], i5904.y)
  i5904.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5905[3], i5904.z)
  i5904.separateAxes = !!i5905[4]
  i5904.range = new pc.Vec2( i5905[5], i5905[6] )
  return i5904
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i5906 = root || new pc.ParticleSystemRotationOverLifetime()
  var i5907 = data
  i5906.enabled = !!i5907[0]
  i5906.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5907[1], i5906.x)
  i5906.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5907[2], i5906.y)
  i5906.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5907[3], i5906.z)
  i5906.separateAxes = !!i5907[4]
  return i5906
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i5908 = root || new pc.ParticleSystemShape()
  var i5909 = data
  i5908.enabled = !!i5909[0]
  i5908.shapeType = i5909[1]
  i5908.randomDirectionAmount = i5909[2]
  i5908.sphericalDirectionAmount = i5909[3]
  i5908.randomPositionAmount = i5909[4]
  i5908.alignToDirection = !!i5909[5]
  i5908.radius = i5909[6]
  i5908.radiusMode = i5909[7]
  i5908.radiusSpread = i5909[8]
  i5908.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5909[9], i5908.radiusSpeed)
  i5908.radiusThickness = i5909[10]
  i5908.angle = i5909[11]
  i5908.length = i5909[12]
  i5908.boxThickness = new pc.Vec3( i5909[13], i5909[14], i5909[15] )
  i5908.meshShapeType = i5909[16]
  request.r(i5909[17], i5909[18], 0, i5908, 'mesh')
  request.r(i5909[19], i5909[20], 0, i5908, 'meshRenderer')
  request.r(i5909[21], i5909[22], 0, i5908, 'skinnedMeshRenderer')
  i5908.useMeshMaterialIndex = !!i5909[23]
  i5908.meshMaterialIndex = i5909[24]
  i5908.useMeshColors = !!i5909[25]
  i5908.normalOffset = i5909[26]
  i5908.arc = i5909[27]
  i5908.arcMode = i5909[28]
  i5908.arcSpread = i5909[29]
  i5908.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5909[30], i5908.arcSpeed)
  i5908.donutRadius = i5909[31]
  i5908.position = new pc.Vec3( i5909[32], i5909[33], i5909[34] )
  i5908.rotation = new pc.Vec3( i5909[35], i5909[36], i5909[37] )
  i5908.scale = new pc.Vec3( i5909[38], i5909[39], i5909[40] )
  return i5908
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i5910 = root || new pc.ParticleSystemSizeBySpeed()
  var i5911 = data
  i5910.enabled = !!i5911[0]
  i5910.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5911[1], i5910.x)
  i5910.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5911[2], i5910.y)
  i5910.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5911[3], i5910.z)
  i5910.separateAxes = !!i5911[4]
  i5910.range = new pc.Vec2( i5911[5], i5911[6] )
  return i5910
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i5912 = root || new pc.ParticleSystemSizeOverLifetime()
  var i5913 = data
  i5912.enabled = !!i5913[0]
  i5912.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5913[1], i5912.x)
  i5912.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5913[2], i5912.y)
  i5912.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5913[3], i5912.z)
  i5912.separateAxes = !!i5913[4]
  return i5912
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i5914 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i5915 = data
  i5914.enabled = !!i5915[0]
  i5914.mode = i5915[1]
  i5914.animation = i5915[2]
  i5914.numTilesX = i5915[3]
  i5914.numTilesY = i5915[4]
  i5914.useRandomRow = !!i5915[5]
  i5914.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5915[6], i5914.frameOverTime)
  i5914.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5915[7], i5914.startFrame)
  i5914.cycleCount = i5915[8]
  i5914.rowIndex = i5915[9]
  i5914.flipU = i5915[10]
  i5914.flipV = i5915[11]
  i5914.spriteCount = i5915[12]
  var i5917 = i5915[13]
  var i5916 = []
  for(var i = 0; i < i5917.length; i += 2) {
  request.r(i5917[i + 0], i5917[i + 1], 2, i5916, '')
  }
  i5914.sprites = i5916
  return i5914
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i5920 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i5921 = data
  i5920.enabled = !!i5921[0]
  i5920.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5921[1], i5920.x)
  i5920.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5921[2], i5920.y)
  i5920.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5921[3], i5920.z)
  i5920.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5921[4], i5920.radial)
  i5920.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5921[5], i5920.speedModifier)
  i5920.space = i5921[6]
  i5920.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5921[7], i5920.orbitalX)
  i5920.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5921[8], i5920.orbitalY)
  i5920.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5921[9], i5920.orbitalZ)
  i5920.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5921[10], i5920.orbitalOffsetX)
  i5920.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5921[11], i5920.orbitalOffsetY)
  i5920.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5921[12], i5920.orbitalOffsetZ)
  return i5920
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i5922 = root || new pc.ParticleSystemNoise()
  var i5923 = data
  i5922.enabled = !!i5923[0]
  i5922.separateAxes = !!i5923[1]
  i5922.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5923[2], i5922.strengthX)
  i5922.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5923[3], i5922.strengthY)
  i5922.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5923[4], i5922.strengthZ)
  i5922.frequency = i5923[5]
  i5922.damping = !!i5923[6]
  i5922.octaveCount = i5923[7]
  i5922.octaveMultiplier = i5923[8]
  i5922.octaveScale = i5923[9]
  i5922.quality = i5923[10]
  i5922.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5923[11], i5922.scrollSpeed)
  i5922.scrollSpeedMultiplier = i5923[12]
  i5922.remapEnabled = !!i5923[13]
  i5922.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5923[14], i5922.remapX)
  i5922.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5923[15], i5922.remapY)
  i5922.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5923[16], i5922.remapZ)
  i5922.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5923[17], i5922.positionAmount)
  i5922.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5923[18], i5922.rotationAmount)
  i5922.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5923[19], i5922.sizeAmount)
  return i5922
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i5924 = root || new pc.ParticleSystemInheritVelocity()
  var i5925 = data
  i5924.enabled = !!i5925[0]
  i5924.mode = i5925[1]
  i5924.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5925[2], i5924.curve)
  return i5924
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i5926 = root || new pc.ParticleSystemForceOverLifetime()
  var i5927 = data
  i5926.enabled = !!i5927[0]
  i5926.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5927[1], i5926.x)
  i5926.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5927[2], i5926.y)
  i5926.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5927[3], i5926.z)
  i5926.space = i5927[4]
  i5926.randomized = !!i5927[5]
  return i5926
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i5928 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i5929 = data
  i5928.enabled = !!i5929[0]
  i5928.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5929[1], i5928.limit)
  i5928.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5929[2], i5928.limitX)
  i5928.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5929[3], i5928.limitY)
  i5928.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5929[4], i5928.limitZ)
  i5928.dampen = i5929[5]
  i5928.separateAxes = !!i5929[6]
  i5928.space = i5929[7]
  i5928.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5929[8], i5928.drag)
  i5928.multiplyDragByParticleSize = !!i5929[9]
  i5928.multiplyDragByParticleVelocity = !!i5929[10]
  return i5928
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i5930 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i5931 = data
  request.r(i5931[0], i5931[1], 0, i5930, 'mesh')
  i5930.meshCount = i5931[2]
  i5930.activeVertexStreamsCount = i5931[3]
  i5930.alignment = i5931[4]
  i5930.renderMode = i5931[5]
  i5930.sortMode = i5931[6]
  i5930.lengthScale = i5931[7]
  i5930.velocityScale = i5931[8]
  i5930.cameraVelocityScale = i5931[9]
  i5930.normalDirection = i5931[10]
  i5930.sortingFudge = i5931[11]
  i5930.minParticleSize = i5931[12]
  i5930.maxParticleSize = i5931[13]
  i5930.pivot = new pc.Vec3( i5931[14], i5931[15], i5931[16] )
  request.r(i5931[17], i5931[18], 0, i5930, 'trailMaterial')
  i5930.applyActiveColorSpace = !!i5931[19]
  i5930.enabled = !!i5931[20]
  request.r(i5931[21], i5931[22], 0, i5930, 'sharedMaterial')
  var i5933 = i5931[23]
  var i5932 = []
  for(var i = 0; i < i5933.length; i += 2) {
  request.r(i5933[i + 0], i5933[i + 1], 2, i5932, '')
  }
  i5930.sharedMaterials = i5932
  i5930.receiveShadows = !!i5931[24]
  i5930.shadowCastingMode = i5931[25]
  i5930.sortingLayerID = i5931[26]
  i5930.sortingOrder = i5931[27]
  i5930.lightmapIndex = i5931[28]
  i5930.lightmapSceneIndex = i5931[29]
  i5930.lightmapScaleOffset = new pc.Vec4( i5931[30], i5931[31], i5931[32], i5931[33] )
  i5930.lightProbeUsage = i5931[34]
  i5930.reflectionProbeUsage = i5931[35]
  return i5930
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i5936 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i5937 = data
  request.r(i5937[0], i5937[1], 0, i5936, 'clip')
  request.r(i5937[2], i5937[3], 0, i5936, 'outputAudioMixerGroup')
  i5936.playOnAwake = !!i5937[4]
  i5936.loop = !!i5937[5]
  i5936.time = i5937[6]
  i5936.volume = i5937[7]
  i5936.pitch = i5937[8]
  i5936.enabled = !!i5937[9]
  return i5936
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i5938 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i5939 = data
  i5938.name = i5939[0]
  i5938.tagId = i5939[1]
  i5938.enabled = !!i5939[2]
  i5938.isStatic = !!i5939[3]
  i5938.layer = i5939[4]
  return i5938
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i5940 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i5941 = data
  i5940.color = new pc.Color(i5941[0], i5941[1], i5941[2], i5941[3])
  request.r(i5941[4], i5941[5], 0, i5940, 'sprite')
  i5940.flipX = !!i5941[6]
  i5940.flipY = !!i5941[7]
  i5940.drawMode = i5941[8]
  i5940.size = new pc.Vec2( i5941[9], i5941[10] )
  i5940.tileMode = i5941[11]
  i5940.adaptiveModeThreshold = i5941[12]
  i5940.maskInteraction = i5941[13]
  i5940.spriteSortPoint = i5941[14]
  i5940.enabled = !!i5941[15]
  request.r(i5941[16], i5941[17], 0, i5940, 'sharedMaterial')
  var i5943 = i5941[18]
  var i5942 = []
  for(var i = 0; i < i5943.length; i += 2) {
  request.r(i5943[i + 0], i5943[i + 1], 2, i5942, '')
  }
  i5940.sharedMaterials = i5942
  i5940.receiveShadows = !!i5941[19]
  i5940.shadowCastingMode = i5941[20]
  i5940.sortingLayerID = i5941[21]
  i5940.sortingOrder = i5941[22]
  i5940.lightmapIndex = i5941[23]
  i5940.lightmapSceneIndex = i5941[24]
  i5940.lightmapScaleOffset = new pc.Vec4( i5941[25], i5941[26], i5941[27], i5941[28] )
  i5940.lightProbeUsage = i5941[29]
  i5940.reflectionProbeUsage = i5941[30]
  return i5940
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i5944 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i5945 = data
  request.r(i5945[0], i5945[1], 0, i5944, 'animatorController')
  request.r(i5945[2], i5945[3], 0, i5944, 'avatar')
  i5944.updateMode = i5945[4]
  i5944.hasTransformHierarchy = !!i5945[5]
  i5944.applyRootMotion = !!i5945[6]
  var i5947 = i5945[7]
  var i5946 = []
  for(var i = 0; i < i5947.length; i += 2) {
  request.r(i5947[i + 0], i5947[i + 1], 2, i5946, '')
  }
  i5944.humanBones = i5946
  i5944.enabled = !!i5945[8]
  return i5944
}

Deserializers["MoveBetweenPoints"] = function (request, data, root) {
  var i5950 = root || request.c( 'MoveBetweenPoints' )
  var i5951 = data
  request.r(i5951[0], i5951[1], 0, i5950, 'pointA')
  request.r(i5951[2], i5951[3], 0, i5950, 'pointB')
  i5950.duration = i5951[4]
  return i5950
}

Deserializers["ScreenHeightPositionAnchor"] = function (request, data, root) {
  var i5952 = root || request.c( 'ScreenHeightPositionAnchor' )
  var i5953 = data
  request.r(i5953[0], i5953[1], 0, i5952, 'anchorPoint')
  request.r(i5953[2], i5953[3], 0, i5952, 'targetCamera')
  i5952.viewportYRatio = i5953[4]
  i5952.alignOnStart = !!i5953[5]
  i5952.alignOnEnable = !!i5953[6]
  i5952.realignOnScreenSizeChanged = !!i5953[7]
  i5952.drawGizmos = !!i5953[8]
  i5952.targetLineColor = new pc.Color(i5953[9], i5953[10], i5953[11], i5953[12])
  i5952.anchorColor = new pc.Color(i5953[13], i5953[14], i5953[15], i5953[16])
  return i5952
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i5954 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i5955 = data
  i5954.center = new pc.Vec3( i5955[0], i5955[1], i5955[2] )
  i5954.size = new pc.Vec3( i5955[3], i5955[4], i5955[5] )
  i5954.enabled = !!i5955[6]
  i5954.isTrigger = !!i5955[7]
  request.r(i5955[8], i5955[9], 0, i5954, 'material')
  return i5954
}

Deserializers["ClickToStore"] = function (request, data, root) {
  var i5956 = root || request.c( 'ClickToStore' )
  var i5957 = data
  return i5956
}

Deserializers["FavoritePlayerEndcard"] = function (request, data, root) {
  var i5958 = root || request.c( 'FavoritePlayerEndcard' )
  var i5959 = data
  request.r(i5959[0], i5959[1], 0, i5958, 'fullBodyRenderer')
  request.r(i5959[2], i5959[3], 0, i5958, 'nameText')
  request.r(i5959[4], i5959[5], 0, i5958, 'endcardPanel')
  return i5958
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i5960 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i5961 = data
  i5960.pivot = new pc.Vec2( i5961[0], i5961[1] )
  i5960.anchorMin = new pc.Vec2( i5961[2], i5961[3] )
  i5960.anchorMax = new pc.Vec2( i5961[4], i5961[5] )
  i5960.sizeDelta = new pc.Vec2( i5961[6], i5961[7] )
  i5960.anchoredPosition3D = new pc.Vec3( i5961[8], i5961[9], i5961[10] )
  i5960.rotation = new pc.Quat(i5961[11], i5961[12], i5961[13], i5961[14])
  i5960.scale = new pc.Vec3( i5961[15], i5961[16], i5961[17] )
  return i5960
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i5962 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i5963 = data
  request.r(i5963[0], i5963[1], 0, i5962, 'additionalVertexStreams')
  i5962.enabled = !!i5963[2]
  request.r(i5963[3], i5963[4], 0, i5962, 'sharedMaterial')
  var i5965 = i5963[5]
  var i5964 = []
  for(var i = 0; i < i5965.length; i += 2) {
  request.r(i5965[i + 0], i5965[i + 1], 2, i5964, '')
  }
  i5962.sharedMaterials = i5964
  i5962.receiveShadows = !!i5963[6]
  i5962.shadowCastingMode = i5963[7]
  i5962.sortingLayerID = i5963[8]
  i5962.sortingOrder = i5963[9]
  i5962.lightmapIndex = i5963[10]
  i5962.lightmapSceneIndex = i5963[11]
  i5962.lightmapScaleOffset = new pc.Vec4( i5963[12], i5963[13], i5963[14], i5963[15] )
  i5962.lightProbeUsage = i5963[16]
  i5962.reflectionProbeUsage = i5963[17]
  return i5962
}

Deserializers["TMPro.TextMeshPro"] = function (request, data, root) {
  var i5966 = root || request.c( 'TMPro.TextMeshPro' )
  var i5967 = data
  i5966._SortingLayer = i5967[0]
  i5966._SortingLayerID = i5967[1]
  i5966._SortingOrder = i5967[2]
  i5966.m_hasFontAssetChanged = !!i5967[3]
  request.r(i5967[4], i5967[5], 0, i5966, 'm_renderer')
  i5966.m_maskType = i5967[6]
  i5966.m_text = i5967[7]
  i5966.m_isRightToLeft = !!i5967[8]
  request.r(i5967[9], i5967[10], 0, i5966, 'm_fontAsset')
  request.r(i5967[11], i5967[12], 0, i5966, 'm_sharedMaterial')
  var i5969 = i5967[13]
  var i5968 = []
  for(var i = 0; i < i5969.length; i += 2) {
  request.r(i5969[i + 0], i5969[i + 1], 2, i5968, '')
  }
  i5966.m_fontSharedMaterials = i5968
  request.r(i5967[14], i5967[15], 0, i5966, 'm_fontMaterial')
  var i5971 = i5967[16]
  var i5970 = []
  for(var i = 0; i < i5971.length; i += 2) {
  request.r(i5971[i + 0], i5971[i + 1], 2, i5970, '')
  }
  i5966.m_fontMaterials = i5970
  i5966.m_fontColor32 = UnityEngine.Color32.ConstructColor(i5967[17], i5967[18], i5967[19], i5967[20])
  i5966.m_fontColor = new pc.Color(i5967[21], i5967[22], i5967[23], i5967[24])
  i5966.m_enableVertexGradient = !!i5967[25]
  i5966.m_colorMode = i5967[26]
  i5966.m_fontColorGradient = request.d('TMPro.VertexGradient', i5967[27], i5966.m_fontColorGradient)
  request.r(i5967[28], i5967[29], 0, i5966, 'm_fontColorGradientPreset')
  request.r(i5967[30], i5967[31], 0, i5966, 'm_spriteAsset')
  i5966.m_tintAllSprites = !!i5967[32]
  request.r(i5967[33], i5967[34], 0, i5966, 'm_StyleSheet')
  i5966.m_TextStyleHashCode = i5967[35]
  i5966.m_overrideHtmlColors = !!i5967[36]
  i5966.m_faceColor = UnityEngine.Color32.ConstructColor(i5967[37], i5967[38], i5967[39], i5967[40])
  i5966.m_fontSize = i5967[41]
  i5966.m_fontSizeBase = i5967[42]
  i5966.m_fontWeight = i5967[43]
  i5966.m_enableAutoSizing = !!i5967[44]
  i5966.m_fontSizeMin = i5967[45]
  i5966.m_fontSizeMax = i5967[46]
  i5966.m_fontStyle = i5967[47]
  i5966.m_HorizontalAlignment = i5967[48]
  i5966.m_VerticalAlignment = i5967[49]
  i5966.m_textAlignment = i5967[50]
  i5966.m_characterSpacing = i5967[51]
  i5966.m_wordSpacing = i5967[52]
  i5966.m_lineSpacing = i5967[53]
  i5966.m_lineSpacingMax = i5967[54]
  i5966.m_paragraphSpacing = i5967[55]
  i5966.m_charWidthMaxAdj = i5967[56]
  i5966.m_TextWrappingMode = i5967[57]
  i5966.m_wordWrappingRatios = i5967[58]
  i5966.m_overflowMode = i5967[59]
  request.r(i5967[60], i5967[61], 0, i5966, 'm_linkedTextComponent')
  request.r(i5967[62], i5967[63], 0, i5966, 'parentLinkedComponent')
  i5966.m_enableKerning = !!i5967[64]
  var i5973 = i5967[65]
  var i5972 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i5973.length; i += 1) {
    i5972.add(i5973[i + 0]);
  }
  i5966.m_ActiveFontFeatures = i5972
  i5966.m_enableExtraPadding = !!i5967[66]
  i5966.checkPaddingRequired = !!i5967[67]
  i5966.m_isRichText = !!i5967[68]
  i5966.m_parseCtrlCharacters = !!i5967[69]
  i5966.m_isOrthographic = !!i5967[70]
  i5966.m_isCullingEnabled = !!i5967[71]
  i5966.m_horizontalMapping = i5967[72]
  i5966.m_verticalMapping = i5967[73]
  i5966.m_uvLineOffset = i5967[74]
  i5966.m_geometrySortingOrder = i5967[75]
  i5966.m_IsTextObjectScaleStatic = !!i5967[76]
  i5966.m_VertexBufferAutoSizeReduction = !!i5967[77]
  i5966.m_useMaxVisibleDescender = !!i5967[78]
  i5966.m_pageToDisplay = i5967[79]
  i5966.m_margin = new pc.Vec4( i5967[80], i5967[81], i5967[82], i5967[83] )
  i5966.m_isUsingLegacyAnimationComponent = !!i5967[84]
  i5966.m_isVolumetricText = !!i5967[85]
  request.r(i5967[86], i5967[87], 0, i5966, 'm_Material')
  i5966.m_EmojiFallbackSupport = !!i5967[88]
  i5966.m_Maskable = !!i5967[89]
  i5966.m_Color = new pc.Color(i5967[90], i5967[91], i5967[92], i5967[93])
  i5966.m_RaycastTarget = !!i5967[94]
  i5966.m_RaycastPadding = new pc.Vec4( i5967[95], i5967[96], i5967[97], i5967[98] )
  return i5966
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i5974 = root || request.c( 'TMPro.VertexGradient' )
  var i5975 = data
  i5974.topLeft = new pc.Color(i5975[0], i5975[1], i5975[2], i5975[3])
  i5974.topRight = new pc.Color(i5975[4], i5975[5], i5975[6], i5975[7])
  i5974.bottomLeft = new pc.Color(i5975[8], i5975[9], i5975[10], i5975[11])
  i5974.bottomRight = new pc.Color(i5975[12], i5975[13], i5975[14], i5975[15])
  return i5974
}

Deserializers["PlayerCardUIManager"] = function (request, data, root) {
  var i5978 = root || request.c( 'PlayerCardUIManager' )
  var i5979 = data
  request.r(i5979[0], i5979[1], 0, i5978, 'cardPanel')
  var i5981 = i5979[2]
  var i5980 = []
  for(var i = 0; i < i5981.length; i += 2) {
  request.r(i5981[i + 0], i5981[i + 1], 2, i5980, '')
  }
  i5978.extraObjectsToActivate = i5980
  i5978.waitTime = i5979[3]
  var i5983 = i5979[4]
  var i5982 = []
  for(var i = 0; i < i5983.length; i += 2) {
  request.r(i5983[i + 0], i5983[i + 1], 2, i5982, '')
  }
  i5978.objectsToTurnOnAfterWait = i5982
  var i5985 = i5979[5]
  var i5984 = []
  for(var i = 0; i < i5985.length; i += 2) {
  request.r(i5985[i + 0], i5985[i + 1], 2, i5984, '')
  }
  i5978.objectsToTurnOffAfterWait = i5984
  request.r(i5979[6], i5979[7], 0, i5978, 'nationalityText')
  request.r(i5979[8], i5979[9], 0, i5978, 'playerImage')
  request.r(i5979[10], i5979[11], 0, i5978, 'flagImage')
  return i5978
}

Deserializers["Ply_SoundManager"] = function (request, data, root) {
  var i5988 = root || request.c( 'Ply_SoundManager' )
  var i5989 = data
  i5988.fxAudio = request.d('FxAudio', i5989[0], i5988.fxAudio)
  request.r(i5989[1], i5989[2], 0, i5988, 'bgm1')
  return i5988
}

Deserializers["FxAudio"] = function (request, data, root) {
  var i5990 = root || request.c( 'FxAudio' )
  var i5991 = data
  i5990.ClickBox = request.d('SoundData', i5991[0], i5990.ClickBox)
  i5990.Happy = request.d('SoundData', i5991[1], i5990.Happy)
  i5990.Wrong = request.d('SoundData', i5991[2], i5990.Wrong)
  i5990.Spray = request.d('SoundData', i5991[3], i5990.Spray)
  i5990.Brush = request.d('SoundData', i5991[4], i5990.Brush)
  return i5990
}

Deserializers["SoundData"] = function (request, data, root) {
  var i5992 = root || request.c( 'SoundData' )
  var i5993 = data
  request.r(i5993[0], i5993[1], 0, i5992, 'clip')
  i5992.repeatCount = i5993[2]
  return i5992
}

Deserializers["FavoritePlayerManager"] = function (request, data, root) {
  var i5994 = root || request.c( 'FavoritePlayerManager' )
  var i5995 = data
  i5994.slotLayerMask = UnityEngine.LayerMask.FromIntegerValue( i5995[0] )
  request.r(i5995[1], i5995[2], 0, i5994, 'slotA')
  request.r(i5995[3], i5995[4], 0, i5994, 'slotB')
  request.r(i5995[5], i5995[6], 0, i5994, 'audioSource')
  request.r(i5995[7], i5995[8], 0, i5994, 'orAudio')
  request.r(i5995[9], i5995[10], 0, i5994, 'clickAudio')
  var i5997 = i5995[11]
  var i5996 = new (System.Collections.Generic.List$1(Bridge.ns('FavoritePlayerCard')))
  for(var i = 0; i < i5997.length; i += 2) {
  request.r(i5997[i + 0], i5997[i + 1], 1, i5996, '')
  }
  i5994.playerList = i5996
  request.r(i5995[12], i5995[13], 0, i5994, 'endcardUI')
  request.r(i5995[14], i5995[15], 0, i5994, 'discardTarget')
  i5994.moveDuration = i5995[16]
  i5994.arcHeight = i5995[17]
  i5994.scaleUpSize = i5995[18]
  i5994.scaleUpDuration = i5995[19]
  i5994.scaleDownDuration = i5995[20]
  i5994.appearStartScale = i5995[21]
  i5994.appearMaxScale = i5995[22]
  i5994.appearUpDuration = i5995[23]
  i5994.appearDownDuration = i5995[24]
  i5994.clickScaleSize = i5995[25]
  i5994.clickDownDuration = i5995[26]
  i5994.clickUpDuration = i5995[27]
  var i5999 = i5995[28]
  var i5998 = []
  for(var i = 0; i < i5999.length; i += 2) {
  request.r(i5999[i + 0], i5999[i + 1], 2, i5998, '')
  }
  i5994.extraObjectsToActivate = i5998
  var i6001 = i5995[29]
  var i6000 = []
  for(var i = 0; i < i6001.length; i += 2) {
  request.r(i6001[i + 0], i6001[i + 1], 2, i6000, '')
  }
  i5994.extraObjectsToDeactivate = i6000
  i5994.waitTime = i5995[30]
  var i6003 = i5995[31]
  var i6002 = []
  for(var i = 0; i < i6003.length; i += 2) {
  request.r(i6003[i + 0], i6003[i + 1], 2, i6002, '')
  }
  i5994.objectsToTurnOnAfterWait = i6002
  var i6005 = i5995[32]
  var i6004 = []
  for(var i = 0; i < i6005.length; i += 2) {
  request.r(i6005[i + 0], i6005[i + 1], 2, i6004, '')
  }
  i5994.objectsToTurnOffAfterWait = i6004
  return i5994
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i6008 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i6009 = data
  i6008.planeDistance = i6009[0]
  i6008.referencePixelsPerUnit = i6009[1]
  i6008.isFallbackOverlay = !!i6009[2]
  i6008.renderMode = i6009[3]
  i6008.renderOrder = i6009[4]
  i6008.sortingLayerName = i6009[5]
  i6008.sortingOrder = i6009[6]
  i6008.scaleFactor = i6009[7]
  request.r(i6009[8], i6009[9], 0, i6008, 'worldCamera')
  i6008.overrideSorting = !!i6009[10]
  i6008.pixelPerfect = !!i6009[11]
  i6008.targetDisplay = i6009[12]
  i6008.overridePixelPerfect = !!i6009[13]
  i6008.enabled = !!i6009[14]
  return i6008
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i6010 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i6011 = data
  i6010.m_UiScaleMode = i6011[0]
  i6010.m_ReferencePixelsPerUnit = i6011[1]
  i6010.m_ScaleFactor = i6011[2]
  i6010.m_ReferenceResolution = new pc.Vec2( i6011[3], i6011[4] )
  i6010.m_ScreenMatchMode = i6011[5]
  i6010.m_MatchWidthOrHeight = i6011[6]
  i6010.m_PhysicalUnit = i6011[7]
  i6010.m_FallbackScreenDPI = i6011[8]
  i6010.m_DefaultSpriteDPI = i6011[9]
  i6010.m_DynamicPixelsPerUnit = i6011[10]
  i6010.m_PresetInfoIsWorld = !!i6011[11]
  return i6010
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i6012 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i6013 = data
  i6012.m_IgnoreReversedGraphics = !!i6013[0]
  i6012.m_BlockingObjects = i6013[1]
  i6012.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i6013[2] )
  return i6012
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i6014 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i6015 = data
  i6014.cullTransparentMesh = !!i6015[0]
  return i6014
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i6016 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i6017 = data
  i6016.m_hasFontAssetChanged = !!i6017[0]
  request.r(i6017[1], i6017[2], 0, i6016, 'm_baseMaterial')
  i6016.m_maskOffset = new pc.Vec4( i6017[3], i6017[4], i6017[5], i6017[6] )
  i6016.m_text = i6017[7]
  i6016.m_isRightToLeft = !!i6017[8]
  request.r(i6017[9], i6017[10], 0, i6016, 'm_fontAsset')
  request.r(i6017[11], i6017[12], 0, i6016, 'm_sharedMaterial')
  var i6019 = i6017[13]
  var i6018 = []
  for(var i = 0; i < i6019.length; i += 2) {
  request.r(i6019[i + 0], i6019[i + 1], 2, i6018, '')
  }
  i6016.m_fontSharedMaterials = i6018
  request.r(i6017[14], i6017[15], 0, i6016, 'm_fontMaterial')
  var i6021 = i6017[16]
  var i6020 = []
  for(var i = 0; i < i6021.length; i += 2) {
  request.r(i6021[i + 0], i6021[i + 1], 2, i6020, '')
  }
  i6016.m_fontMaterials = i6020
  i6016.m_fontColor32 = UnityEngine.Color32.ConstructColor(i6017[17], i6017[18], i6017[19], i6017[20])
  i6016.m_fontColor = new pc.Color(i6017[21], i6017[22], i6017[23], i6017[24])
  i6016.m_enableVertexGradient = !!i6017[25]
  i6016.m_colorMode = i6017[26]
  i6016.m_fontColorGradient = request.d('TMPro.VertexGradient', i6017[27], i6016.m_fontColorGradient)
  request.r(i6017[28], i6017[29], 0, i6016, 'm_fontColorGradientPreset')
  request.r(i6017[30], i6017[31], 0, i6016, 'm_spriteAsset')
  i6016.m_tintAllSprites = !!i6017[32]
  request.r(i6017[33], i6017[34], 0, i6016, 'm_StyleSheet')
  i6016.m_TextStyleHashCode = i6017[35]
  i6016.m_overrideHtmlColors = !!i6017[36]
  i6016.m_faceColor = UnityEngine.Color32.ConstructColor(i6017[37], i6017[38], i6017[39], i6017[40])
  i6016.m_fontSize = i6017[41]
  i6016.m_fontSizeBase = i6017[42]
  i6016.m_fontWeight = i6017[43]
  i6016.m_enableAutoSizing = !!i6017[44]
  i6016.m_fontSizeMin = i6017[45]
  i6016.m_fontSizeMax = i6017[46]
  i6016.m_fontStyle = i6017[47]
  i6016.m_HorizontalAlignment = i6017[48]
  i6016.m_VerticalAlignment = i6017[49]
  i6016.m_textAlignment = i6017[50]
  i6016.m_characterSpacing = i6017[51]
  i6016.m_wordSpacing = i6017[52]
  i6016.m_lineSpacing = i6017[53]
  i6016.m_lineSpacingMax = i6017[54]
  i6016.m_paragraphSpacing = i6017[55]
  i6016.m_charWidthMaxAdj = i6017[56]
  i6016.m_TextWrappingMode = i6017[57]
  i6016.m_wordWrappingRatios = i6017[58]
  i6016.m_overflowMode = i6017[59]
  request.r(i6017[60], i6017[61], 0, i6016, 'm_linkedTextComponent')
  request.r(i6017[62], i6017[63], 0, i6016, 'parentLinkedComponent')
  i6016.m_enableKerning = !!i6017[64]
  var i6023 = i6017[65]
  var i6022 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i6023.length; i += 1) {
    i6022.add(i6023[i + 0]);
  }
  i6016.m_ActiveFontFeatures = i6022
  i6016.m_enableExtraPadding = !!i6017[66]
  i6016.checkPaddingRequired = !!i6017[67]
  i6016.m_isRichText = !!i6017[68]
  i6016.m_parseCtrlCharacters = !!i6017[69]
  i6016.m_isOrthographic = !!i6017[70]
  i6016.m_isCullingEnabled = !!i6017[71]
  i6016.m_horizontalMapping = i6017[72]
  i6016.m_verticalMapping = i6017[73]
  i6016.m_uvLineOffset = i6017[74]
  i6016.m_geometrySortingOrder = i6017[75]
  i6016.m_IsTextObjectScaleStatic = !!i6017[76]
  i6016.m_VertexBufferAutoSizeReduction = !!i6017[77]
  i6016.m_useMaxVisibleDescender = !!i6017[78]
  i6016.m_pageToDisplay = i6017[79]
  i6016.m_margin = new pc.Vec4( i6017[80], i6017[81], i6017[82], i6017[83] )
  i6016.m_isUsingLegacyAnimationComponent = !!i6017[84]
  i6016.m_isVolumetricText = !!i6017[85]
  request.r(i6017[86], i6017[87], 0, i6016, 'm_Material')
  i6016.m_EmojiFallbackSupport = !!i6017[88]
  i6016.m_Maskable = !!i6017[89]
  i6016.m_Color = new pc.Color(i6017[90], i6017[91], i6017[92], i6017[93])
  i6016.m_RaycastTarget = !!i6017[94]
  i6016.m_RaycastPadding = new pc.Vec4( i6017[95], i6017[96], i6017[97], i6017[98] )
  return i6016
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i6024 = root || request.c( 'UnityEngine.UI.Image' )
  var i6025 = data
  request.r(i6025[0], i6025[1], 0, i6024, 'm_Sprite')
  i6024.m_Type = i6025[2]
  i6024.m_PreserveAspect = !!i6025[3]
  i6024.m_FillCenter = !!i6025[4]
  i6024.m_FillMethod = i6025[5]
  i6024.m_FillAmount = i6025[6]
  i6024.m_FillClockwise = !!i6025[7]
  i6024.m_FillOrigin = i6025[8]
  i6024.m_UseSpriteMesh = !!i6025[9]
  i6024.m_PixelsPerUnitMultiplier = i6025[10]
  request.r(i6025[11], i6025[12], 0, i6024, 'm_Material')
  i6024.m_Maskable = !!i6025[13]
  i6024.m_Color = new pc.Color(i6025[14], i6025[15], i6025[16], i6025[17])
  i6024.m_RaycastTarget = !!i6025[18]
  i6024.m_RaycastPadding = new pc.Vec4( i6025[19], i6025[20], i6025[21], i6025[22] )
  return i6024
}

Deserializers["PlayerSlot"] = function (request, data, root) {
  var i6026 = root || request.c( 'PlayerSlot' )
  var i6027 = data
  request.r(i6027[0], i6027[1], 0, i6026, 'spriteRenderer')
  request.r(i6027[2], i6027[3], 0, i6026, 'lightEffect')
  i6026.idleScale = i6027[4]
  i6026.idleDuration = i6027[5]
  i6026.originalPosition = new pc.Vec3( i6027[6], i6027[7], i6027[8] )
  i6026.originalScale = new pc.Vec3( i6027[9], i6027[10], i6027[11] )
  request.r(i6027[12], i6027[13], 0, i6026, 'currentData')
  return i6026
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i6028 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i6029 = data
  request.r(i6029[0], i6029[1], 0, i6028, 'm_FirstSelected')
  i6028.m_sendNavigationEvents = !!i6029[2]
  i6028.m_DragThreshold = i6029[3]
  return i6028
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i6030 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i6031 = data
  i6030.m_HorizontalAxis = i6031[0]
  i6030.m_VerticalAxis = i6031[1]
  i6030.m_SubmitButton = i6031[2]
  i6030.m_CancelButton = i6031[3]
  i6030.m_InputActionsPerSecond = i6031[4]
  i6030.m_RepeatDelay = i6031[5]
  i6030.m_ForceModuleActive = !!i6031[6]
  i6030.m_SendPointerHoverToParent = !!i6031[7]
  return i6030
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i6032 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i6033 = data
  i6032.ambientIntensity = i6033[0]
  i6032.reflectionIntensity = i6033[1]
  i6032.ambientMode = i6033[2]
  i6032.ambientLight = new pc.Color(i6033[3], i6033[4], i6033[5], i6033[6])
  i6032.ambientSkyColor = new pc.Color(i6033[7], i6033[8], i6033[9], i6033[10])
  i6032.ambientGroundColor = new pc.Color(i6033[11], i6033[12], i6033[13], i6033[14])
  i6032.ambientEquatorColor = new pc.Color(i6033[15], i6033[16], i6033[17], i6033[18])
  i6032.fogColor = new pc.Color(i6033[19], i6033[20], i6033[21], i6033[22])
  i6032.fogEndDistance = i6033[23]
  i6032.fogStartDistance = i6033[24]
  i6032.fogDensity = i6033[25]
  i6032.fog = !!i6033[26]
  request.r(i6033[27], i6033[28], 0, i6032, 'skybox')
  i6032.fogMode = i6033[29]
  var i6035 = i6033[30]
  var i6034 = []
  for(var i = 0; i < i6035.length; i += 1) {
    i6034.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i6035[i + 0]) );
  }
  i6032.lightmaps = i6034
  i6032.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i6033[31], i6032.lightProbes)
  i6032.lightmapsMode = i6033[32]
  i6032.mixedBakeMode = i6033[33]
  i6032.environmentLightingMode = i6033[34]
  i6032.ambientProbe = new pc.SphericalHarmonicsL2(i6033[35])
  i6032.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i6033[36])
  i6032.useReferenceAmbientProbe = !!i6033[37]
  request.r(i6033[38], i6033[39], 0, i6032, 'customReflection')
  request.r(i6033[40], i6033[41], 0, i6032, 'defaultReflection')
  i6032.defaultReflectionMode = i6033[42]
  i6032.defaultReflectionResolution = i6033[43]
  i6032.sunLightObjectId = i6033[44]
  i6032.pixelLightCount = i6033[45]
  i6032.defaultReflectionHDR = !!i6033[46]
  i6032.hasLightDataAsset = !!i6033[47]
  i6032.hasManualGenerate = !!i6033[48]
  return i6032
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i6038 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i6039 = data
  request.r(i6039[0], i6039[1], 0, i6038, 'lightmapColor')
  request.r(i6039[2], i6039[3], 0, i6038, 'lightmapDirection')
  request.r(i6039[4], i6039[5], 0, i6038, 'shadowMask')
  return i6038
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i6040 = root || new UnityEngine.LightProbes()
  var i6041 = data
  return i6040
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i6048 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i6049 = data
  var i6051 = i6049[0]
  var i6050 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i6051.length; i += 1) {
    i6050.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i6051[i + 0]));
  }
  i6048.ShaderCompilationErrors = i6050
  i6048.name = i6049[1]
  i6048.guid = i6049[2]
  var i6053 = i6049[3]
  var i6052 = []
  for(var i = 0; i < i6053.length; i += 1) {
    i6052.push( i6053[i + 0] );
  }
  i6048.shaderDefinedKeywords = i6052
  var i6055 = i6049[4]
  var i6054 = []
  for(var i = 0; i < i6055.length; i += 1) {
    i6054.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i6055[i + 0]) );
  }
  i6048.passes = i6054
  var i6057 = i6049[5]
  var i6056 = []
  for(var i = 0; i < i6057.length; i += 1) {
    i6056.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i6057[i + 0]) );
  }
  i6048.usePasses = i6056
  var i6059 = i6049[6]
  var i6058 = []
  for(var i = 0; i < i6059.length; i += 1) {
    i6058.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i6059[i + 0]) );
  }
  i6048.defaultParameterValues = i6058
  request.r(i6049[7], i6049[8], 0, i6048, 'unityFallbackShader')
  i6048.readDepth = !!i6049[9]
  i6048.hasDepthOnlyPass = !!i6049[10]
  i6048.isCreatedByShaderGraph = !!i6049[11]
  i6048.disableBatching = !!i6049[12]
  i6048.compiled = !!i6049[13]
  return i6048
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i6062 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i6063 = data
  i6062.shaderName = i6063[0]
  i6062.errorMessage = i6063[1]
  return i6062
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i6068 = root || new pc.UnityShaderPass()
  var i6069 = data
  i6068.id = i6069[0]
  i6068.subShaderIndex = i6069[1]
  i6068.name = i6069[2]
  i6068.passType = i6069[3]
  i6068.grabPassTextureName = i6069[4]
  i6068.usePass = !!i6069[5]
  i6068.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6069[6], i6068.zTest)
  i6068.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6069[7], i6068.zWrite)
  i6068.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6069[8], i6068.culling)
  i6068.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i6069[9], i6068.blending)
  i6068.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i6069[10], i6068.alphaBlending)
  i6068.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6069[11], i6068.colorWriteMask)
  i6068.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6069[12], i6068.offsetUnits)
  i6068.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6069[13], i6068.offsetFactor)
  i6068.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6069[14], i6068.stencilRef)
  i6068.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6069[15], i6068.stencilReadMask)
  i6068.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6069[16], i6068.stencilWriteMask)
  i6068.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i6069[17], i6068.stencilOp)
  i6068.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i6069[18], i6068.stencilOpFront)
  i6068.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i6069[19], i6068.stencilOpBack)
  var i6071 = i6069[20]
  var i6070 = []
  for(var i = 0; i < i6071.length; i += 1) {
    i6070.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i6071[i + 0]) );
  }
  i6068.tags = i6070
  var i6073 = i6069[21]
  var i6072 = []
  for(var i = 0; i < i6073.length; i += 1) {
    i6072.push( i6073[i + 0] );
  }
  i6068.passDefinedKeywords = i6072
  var i6075 = i6069[22]
  var i6074 = []
  for(var i = 0; i < i6075.length; i += 1) {
    i6074.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i6075[i + 0]) );
  }
  i6068.passDefinedKeywordGroups = i6074
  var i6077 = i6069[23]
  var i6076 = []
  for(var i = 0; i < i6077.length; i += 1) {
    i6076.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i6077[i + 0]) );
  }
  i6068.variants = i6076
  var i6079 = i6069[24]
  var i6078 = []
  for(var i = 0; i < i6079.length; i += 1) {
    i6078.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i6079[i + 0]) );
  }
  i6068.excludedVariants = i6078
  i6068.hasDepthReader = !!i6069[25]
  return i6068
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i6080 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i6081 = data
  i6080.val = i6081[0]
  i6080.name = i6081[1]
  return i6080
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i6082 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i6083 = data
  i6082.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6083[0], i6082.src)
  i6082.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6083[1], i6082.dst)
  i6082.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6083[2], i6082.op)
  return i6082
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i6084 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i6085 = data
  i6084.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6085[0], i6084.pass)
  i6084.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6085[1], i6084.fail)
  i6084.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6085[2], i6084.zFail)
  i6084.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6085[3], i6084.comp)
  return i6084
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i6088 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i6089 = data
  i6088.name = i6089[0]
  i6088.value = i6089[1]
  return i6088
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i6092 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i6093 = data
  var i6095 = i6093[0]
  var i6094 = []
  for(var i = 0; i < i6095.length; i += 1) {
    i6094.push( i6095[i + 0] );
  }
  i6092.keywords = i6094
  i6092.hasDiscard = !!i6093[1]
  return i6092
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i6098 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i6099 = data
  i6098.passId = i6099[0]
  i6098.subShaderIndex = i6099[1]
  var i6101 = i6099[2]
  var i6100 = []
  for(var i = 0; i < i6101.length; i += 1) {
    i6100.push( i6101[i + 0] );
  }
  i6098.keywords = i6100
  i6098.vertexProgram = i6099[3]
  i6098.fragmentProgram = i6099[4]
  i6098.exportedForWebGl2 = !!i6099[5]
  i6098.readDepth = !!i6099[6]
  return i6098
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i6104 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i6105 = data
  request.r(i6105[0], i6105[1], 0, i6104, 'shader')
  i6104.pass = i6105[2]
  return i6104
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i6108 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i6109 = data
  i6108.name = i6109[0]
  i6108.type = i6109[1]
  i6108.value = new pc.Vec4( i6109[2], i6109[3], i6109[4], i6109[5] )
  i6108.textureValue = i6109[6]
  i6108.shaderPropertyFlag = i6109[7]
  return i6108
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i6110 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i6111 = data
  i6110.name = i6111[0]
  request.r(i6111[1], i6111[2], 0, i6110, 'texture')
  i6110.aabb = i6111[3]
  i6110.vertices = i6111[4]
  i6110.triangles = i6111[5]
  i6110.textureRect = UnityEngine.Rect.MinMaxRect(i6111[6], i6111[7], i6111[8], i6111[9])
  i6110.packedRect = UnityEngine.Rect.MinMaxRect(i6111[10], i6111[11], i6111[12], i6111[13])
  i6110.border = new pc.Vec4( i6111[14], i6111[15], i6111[16], i6111[17] )
  i6110.transparency = i6111[18]
  i6110.bounds = i6111[19]
  i6110.pixelsPerUnit = i6111[20]
  i6110.textureWidth = i6111[21]
  i6110.textureHeight = i6111[22]
  i6110.nativeSize = new pc.Vec2( i6111[23], i6111[24] )
  i6110.pivot = new pc.Vec2( i6111[25], i6111[26] )
  i6110.textureRectOffset = new pc.Vec2( i6111[27], i6111[28] )
  return i6110
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i6112 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i6113 = data
  i6112.name = i6113[0]
  return i6112
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i6114 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i6115 = data
  i6114.name = i6115[0]
  i6114.wrapMode = i6115[1]
  i6114.isLooping = !!i6115[2]
  i6114.length = i6115[3]
  var i6117 = i6115[4]
  var i6116 = []
  for(var i = 0; i < i6117.length; i += 1) {
    i6116.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i6117[i + 0]) );
  }
  i6114.curves = i6116
  var i6119 = i6115[5]
  var i6118 = []
  for(var i = 0; i < i6119.length; i += 1) {
    i6118.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i6119[i + 0]) );
  }
  i6114.events = i6118
  i6114.halfPrecision = !!i6115[6]
  i6114._frameRate = i6115[7]
  i6114.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i6115[8], i6114.localBounds)
  i6114.hasMuscleCurves = !!i6115[9]
  var i6121 = i6115[10]
  var i6120 = []
  for(var i = 0; i < i6121.length; i += 1) {
    i6120.push( i6121[i + 0] );
  }
  i6114.clipMuscleConstant = i6120
  i6114.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i6115[11], i6114.clipBindingConstant)
  return i6114
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i6124 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i6125 = data
  i6124.path = i6125[0]
  i6124.hash = i6125[1]
  i6124.componentType = i6125[2]
  i6124.property = i6125[3]
  i6124.keys = i6125[4]
  var i6127 = i6125[5]
  var i6126 = []
  for(var i = 0; i < i6127.length; i += 1) {
    i6126.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i6127[i + 0]) );
  }
  i6124.objectReferenceKeys = i6126
  return i6124
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i6130 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i6131 = data
  i6130.time = i6131[0]
  request.r(i6131[1], i6131[2], 0, i6130, 'value')
  return i6130
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i6134 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i6135 = data
  i6134.functionName = i6135[0]
  i6134.floatParameter = i6135[1]
  i6134.intParameter = i6135[2]
  i6134.stringParameter = i6135[3]
  request.r(i6135[4], i6135[5], 0, i6134, 'objectReferenceParameter')
  i6134.time = i6135[6]
  return i6134
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i6136 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i6137 = data
  i6136.center = new pc.Vec3( i6137[0], i6137[1], i6137[2] )
  i6136.extends = new pc.Vec3( i6137[3], i6137[4], i6137[5] )
  return i6136
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i6140 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i6141 = data
  var i6143 = i6141[0]
  var i6142 = []
  for(var i = 0; i < i6143.length; i += 1) {
    i6142.push( i6143[i + 0] );
  }
  i6140.genericBindings = i6142
  var i6145 = i6141[1]
  var i6144 = []
  for(var i = 0; i < i6145.length; i += 1) {
    i6144.push( i6145[i + 0] );
  }
  i6140.pptrCurveMapping = i6144
  return i6140
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i6146 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i6147 = data
  i6146.name = i6147[0]
  i6146.ascent = i6147[1]
  i6146.originalLineHeight = i6147[2]
  i6146.fontSize = i6147[3]
  var i6149 = i6147[4]
  var i6148 = []
  for(var i = 0; i < i6149.length; i += 1) {
    i6148.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i6149[i + 0]) );
  }
  i6146.characterInfo = i6148
  request.r(i6147[5], i6147[6], 0, i6146, 'texture')
  i6146.originalFontSize = i6147[7]
  return i6146
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i6152 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i6153 = data
  i6152.index = i6153[0]
  i6152.advance = i6153[1]
  i6152.bearing = i6153[2]
  i6152.glyphWidth = i6153[3]
  i6152.glyphHeight = i6153[4]
  i6152.minX = i6153[5]
  i6152.maxX = i6153[6]
  i6152.minY = i6153[7]
  i6152.maxY = i6153[8]
  i6152.uvBottomLeftX = i6153[9]
  i6152.uvBottomLeftY = i6153[10]
  i6152.uvBottomRightX = i6153[11]
  i6152.uvBottomRightY = i6153[12]
  i6152.uvTopLeftX = i6153[13]
  i6152.uvTopLeftY = i6153[14]
  i6152.uvTopRightX = i6153[15]
  i6152.uvTopRightY = i6153[16]
  return i6152
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i6154 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i6155 = data
  i6154.name = i6155[0]
  var i6157 = i6155[1]
  var i6156 = []
  for(var i = 0; i < i6157.length; i += 1) {
    i6156.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i6157[i + 0]) );
  }
  i6154.layers = i6156
  var i6159 = i6155[2]
  var i6158 = []
  for(var i = 0; i < i6159.length; i += 1) {
    i6158.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i6159[i + 0]) );
  }
  i6154.parameters = i6158
  i6154.animationClips = i6155[3]
  i6154.avatarUnsupported = i6155[4]
  return i6154
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i6162 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i6163 = data
  i6162.name = i6163[0]
  i6162.defaultWeight = i6163[1]
  i6162.blendingMode = i6163[2]
  i6162.avatarMask = i6163[3]
  i6162.syncedLayerIndex = i6163[4]
  i6162.syncedLayerAffectsTiming = !!i6163[5]
  i6162.syncedLayers = i6163[6]
  i6162.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i6163[7], i6162.stateMachine)
  return i6162
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i6164 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i6165 = data
  i6164.id = i6165[0]
  i6164.name = i6165[1]
  i6164.path = i6165[2]
  var i6167 = i6165[3]
  var i6166 = []
  for(var i = 0; i < i6167.length; i += 1) {
    i6166.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i6167[i + 0]) );
  }
  i6164.states = i6166
  var i6169 = i6165[4]
  var i6168 = []
  for(var i = 0; i < i6169.length; i += 1) {
    i6168.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i6169[i + 0]) );
  }
  i6164.machines = i6168
  var i6171 = i6165[5]
  var i6170 = []
  for(var i = 0; i < i6171.length; i += 1) {
    i6170.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i6171[i + 0]) );
  }
  i6164.entryStateTransitions = i6170
  var i6173 = i6165[6]
  var i6172 = []
  for(var i = 0; i < i6173.length; i += 1) {
    i6172.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i6173[i + 0]) );
  }
  i6164.exitStateTransitions = i6172
  var i6175 = i6165[7]
  var i6174 = []
  for(var i = 0; i < i6175.length; i += 1) {
    i6174.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i6175[i + 0]) );
  }
  i6164.anyStateTransitions = i6174
  i6164.defaultStateId = i6165[8]
  return i6164
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i6178 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i6179 = data
  i6178.id = i6179[0]
  i6178.name = i6179[1]
  i6178.cycleOffset = i6179[2]
  i6178.cycleOffsetParameter = i6179[3]
  i6178.cycleOffsetParameterActive = !!i6179[4]
  i6178.mirror = !!i6179[5]
  i6178.mirrorParameter = i6179[6]
  i6178.mirrorParameterActive = !!i6179[7]
  i6178.motionId = i6179[8]
  i6178.nameHash = i6179[9]
  i6178.fullPathHash = i6179[10]
  i6178.speed = i6179[11]
  i6178.speedParameter = i6179[12]
  i6178.speedParameterActive = !!i6179[13]
  i6178.tag = i6179[14]
  i6178.tagHash = i6179[15]
  i6178.writeDefaultValues = !!i6179[16]
  var i6181 = i6179[17]
  var i6180 = []
  for(var i = 0; i < i6181.length; i += 2) {
  request.r(i6181[i + 0], i6181[i + 1], 2, i6180, '')
  }
  i6178.behaviours = i6180
  var i6183 = i6179[18]
  var i6182 = []
  for(var i = 0; i < i6183.length; i += 1) {
    i6182.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i6183[i + 0]) );
  }
  i6178.transitions = i6182
  return i6178
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i6188 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i6189 = data
  i6188.fullPath = i6189[0]
  i6188.canTransitionToSelf = !!i6189[1]
  i6188.duration = i6189[2]
  i6188.exitTime = i6189[3]
  i6188.hasExitTime = !!i6189[4]
  i6188.hasFixedDuration = !!i6189[5]
  i6188.interruptionSource = i6189[6]
  i6188.offset = i6189[7]
  i6188.orderedInterruption = !!i6189[8]
  i6188.destinationStateId = i6189[9]
  i6188.isExit = !!i6189[10]
  i6188.mute = !!i6189[11]
  i6188.solo = !!i6189[12]
  var i6191 = i6189[13]
  var i6190 = []
  for(var i = 0; i < i6191.length; i += 1) {
    i6190.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i6191[i + 0]) );
  }
  i6188.conditions = i6190
  return i6188
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i6196 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i6197 = data
  i6196.destinationStateId = i6197[0]
  i6196.isExit = !!i6197[1]
  i6196.mute = !!i6197[2]
  i6196.solo = !!i6197[3]
  var i6199 = i6197[4]
  var i6198 = []
  for(var i = 0; i < i6199.length; i += 1) {
    i6198.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i6199[i + 0]) );
  }
  i6196.conditions = i6198
  return i6196
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i6202 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i6203 = data
  i6202.defaultBool = !!i6203[0]
  i6202.defaultFloat = i6203[1]
  i6202.defaultInt = i6203[2]
  i6202.name = i6203[3]
  i6202.nameHash = i6203[4]
  i6202.type = i6203[5]
  return i6202
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i6204 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i6205 = data
  i6204.name = i6205[0]
  i6204.bytes64 = i6205[1]
  i6204.data = i6205[2]
  return i6204
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i6206 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i6207 = data
  i6206.normalStyle = i6207[0]
  i6206.normalSpacingOffset = i6207[1]
  i6206.boldStyle = i6207[2]
  i6206.boldSpacing = i6207[3]
  i6206.italicStyle = i6207[4]
  i6206.tabSize = i6207[5]
  request.r(i6207[6], i6207[7], 0, i6206, 'atlas')
  i6206.m_SourceFontFileGUID = i6207[8]
  i6206.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i6207[9], i6206.m_CreationSettings)
  request.r(i6207[10], i6207[11], 0, i6206, 'm_SourceFontFile')
  i6206.m_SourceFontFilePath = i6207[12]
  i6206.m_AtlasPopulationMode = i6207[13]
  i6206.InternalDynamicOS = !!i6207[14]
  var i6209 = i6207[15]
  var i6208 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i6209.length; i += 1) {
    i6208.add(request.d('UnityEngine.TextCore.Glyph', i6209[i + 0]));
  }
  i6206.m_GlyphTable = i6208
  var i6211 = i6207[16]
  var i6210 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i6211.length; i += 1) {
    i6210.add(request.d('TMPro.TMP_Character', i6211[i + 0]));
  }
  i6206.m_CharacterTable = i6210
  var i6213 = i6207[17]
  var i6212 = []
  for(var i = 0; i < i6213.length; i += 2) {
  request.r(i6213[i + 0], i6213[i + 1], 2, i6212, '')
  }
  i6206.m_AtlasTextures = i6212
  i6206.m_AtlasTextureIndex = i6207[18]
  i6206.m_IsMultiAtlasTexturesEnabled = !!i6207[19]
  i6206.m_GetFontFeatures = !!i6207[20]
  i6206.m_ClearDynamicDataOnBuild = !!i6207[21]
  i6206.m_AtlasWidth = i6207[22]
  i6206.m_AtlasHeight = i6207[23]
  i6206.m_AtlasPadding = i6207[24]
  i6206.m_AtlasRenderMode = i6207[25]
  var i6215 = i6207[26]
  var i6214 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i6215.length; i += 1) {
    i6214.add(request.d('UnityEngine.TextCore.GlyphRect', i6215[i + 0]));
  }
  i6206.m_UsedGlyphRects = i6214
  var i6217 = i6207[27]
  var i6216 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i6217.length; i += 1) {
    i6216.add(request.d('UnityEngine.TextCore.GlyphRect', i6217[i + 0]));
  }
  i6206.m_FreeGlyphRects = i6216
  i6206.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i6207[28], i6206.m_FontFeatureTable)
  i6206.m_ShouldReimportFontFeatures = !!i6207[29]
  var i6219 = i6207[30]
  var i6218 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i6219.length; i += 2) {
  request.r(i6219[i + 0], i6219[i + 1], 1, i6218, '')
  }
  i6206.m_FallbackFontAssetTable = i6218
  var i6221 = i6207[31]
  var i6220 = []
  for(var i = 0; i < i6221.length; i += 1) {
    i6220.push( request.d('TMPro.TMP_FontWeightPair', i6221[i + 0]) );
  }
  i6206.m_FontWeightTable = i6220
  var i6223 = i6207[32]
  var i6222 = []
  for(var i = 0; i < i6223.length; i += 1) {
    i6222.push( request.d('TMPro.TMP_FontWeightPair', i6223[i + 0]) );
  }
  i6206.fontWeights = i6222
  i6206.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i6207[33], i6206.m_fontInfo)
  var i6225 = i6207[34]
  var i6224 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i6225.length; i += 1) {
    i6224.add(request.d('TMPro.TMP_Glyph', i6225[i + 0]));
  }
  i6206.m_glyphInfoList = i6224
  i6206.m_KerningTable = request.d('TMPro.KerningTable', i6207[35], i6206.m_KerningTable)
  var i6227 = i6207[36]
  var i6226 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i6227.length; i += 2) {
  request.r(i6227[i + 0], i6227[i + 1], 1, i6226, '')
  }
  i6206.fallbackFontAssets = i6226
  i6206.m_Version = i6207[37]
  i6206.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i6207[38], i6206.m_FaceInfo)
  request.r(i6207[39], i6207[40], 0, i6206, 'm_Material')
  return i6206
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i6228 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i6229 = data
  i6228.sourceFontFileName = i6229[0]
  i6228.sourceFontFileGUID = i6229[1]
  i6228.faceIndex = i6229[2]
  i6228.pointSizeSamplingMode = i6229[3]
  i6228.pointSize = i6229[4]
  i6228.padding = i6229[5]
  i6228.paddingMode = i6229[6]
  i6228.packingMode = i6229[7]
  i6228.atlasWidth = i6229[8]
  i6228.atlasHeight = i6229[9]
  i6228.characterSetSelectionMode = i6229[10]
  i6228.characterSequence = i6229[11]
  i6228.referencedFontAssetGUID = i6229[12]
  i6228.referencedTextAssetGUID = i6229[13]
  i6228.fontStyle = i6229[14]
  i6228.fontStyleModifier = i6229[15]
  i6228.renderMode = i6229[16]
  i6228.includeFontFeatures = !!i6229[17]
  return i6228
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i6232 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i6233 = data
  i6232.m_Index = i6233[0]
  i6232.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i6233[1], i6232.m_Metrics)
  i6232.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i6233[2], i6232.m_GlyphRect)
  i6232.m_Scale = i6233[3]
  i6232.m_AtlasIndex = i6233[4]
  i6232.m_ClassDefinitionType = i6233[5]
  return i6232
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i6234 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i6235 = data
  i6234.m_Width = i6235[0]
  i6234.m_Height = i6235[1]
  i6234.m_HorizontalBearingX = i6235[2]
  i6234.m_HorizontalBearingY = i6235[3]
  i6234.m_HorizontalAdvance = i6235[4]
  return i6234
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i6236 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i6237 = data
  i6236.m_X = i6237[0]
  i6236.m_Y = i6237[1]
  i6236.m_Width = i6237[2]
  i6236.m_Height = i6237[3]
  return i6236
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i6240 = root || request.c( 'TMPro.TMP_Character' )
  var i6241 = data
  i6240.m_ElementType = i6241[0]
  i6240.m_Unicode = i6241[1]
  i6240.m_GlyphIndex = i6241[2]
  i6240.m_Scale = i6241[3]
  return i6240
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i6246 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i6247 = data
  var i6249 = i6247[0]
  var i6248 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i6249.length; i += 1) {
    i6248.add(request.d('TMPro.MultipleSubstitutionRecord', i6249[i + 0]));
  }
  i6246.m_MultipleSubstitutionRecords = i6248
  var i6251 = i6247[1]
  var i6250 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i6251.length; i += 1) {
    i6250.add(request.d('TMPro.LigatureSubstitutionRecord', i6251[i + 0]));
  }
  i6246.m_LigatureSubstitutionRecords = i6250
  var i6253 = i6247[2]
  var i6252 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i6253.length; i += 1) {
    i6252.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i6253[i + 0]));
  }
  i6246.m_GlyphPairAdjustmentRecords = i6252
  var i6255 = i6247[3]
  var i6254 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i6255.length; i += 1) {
    i6254.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i6255[i + 0]));
  }
  i6246.m_MarkToBaseAdjustmentRecords = i6254
  var i6257 = i6247[4]
  var i6256 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i6257.length; i += 1) {
    i6256.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i6257[i + 0]));
  }
  i6246.m_MarkToMarkAdjustmentRecords = i6256
  return i6246
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i6260 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i6261 = data
  i6260.m_TargetGlyphID = i6261[0]
  i6260.m_SubstituteGlyphIDs = i6261[1]
  return i6260
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i6264 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i6265 = data
  i6264.m_ComponentGlyphIDs = i6265[0]
  i6264.m_LigatureGlyphID = i6265[1]
  return i6264
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i6268 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i6269 = data
  i6268.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i6269[0], i6268.m_FirstAdjustmentRecord)
  i6268.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i6269[1], i6268.m_SecondAdjustmentRecord)
  i6268.m_FeatureLookupFlags = i6269[2]
  return i6268
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i6270 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i6271 = data
  i6270.m_GlyphIndex = i6271[0]
  i6270.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i6271[1], i6270.m_GlyphValueRecord)
  return i6270
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i6272 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i6273 = data
  i6272.m_XPlacement = i6273[0]
  i6272.m_YPlacement = i6273[1]
  i6272.m_XAdvance = i6273[2]
  i6272.m_YAdvance = i6273[3]
  return i6272
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i6276 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i6277 = data
  i6276.m_BaseGlyphID = i6277[0]
  i6276.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i6277[1], i6276.m_BaseGlyphAnchorPoint)
  i6276.m_MarkGlyphID = i6277[2]
  i6276.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i6277[3], i6276.m_MarkPositionAdjustment)
  return i6276
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i6280 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i6281 = data
  i6280.m_BaseMarkGlyphID = i6281[0]
  i6280.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i6281[1], i6280.m_BaseMarkGlyphAnchorPoint)
  i6280.m_CombiningMarkGlyphID = i6281[2]
  i6280.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i6281[3], i6280.m_CombiningMarkPositionAdjustment)
  return i6280
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i6286 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i6287 = data
  request.r(i6287[0], i6287[1], 0, i6286, 'regularTypeface')
  request.r(i6287[2], i6287[3], 0, i6286, 'italicTypeface')
  return i6286
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i6288 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i6289 = data
  i6288.Name = i6289[0]
  i6288.PointSize = i6289[1]
  i6288.Scale = i6289[2]
  i6288.CharacterCount = i6289[3]
  i6288.LineHeight = i6289[4]
  i6288.Baseline = i6289[5]
  i6288.Ascender = i6289[6]
  i6288.CapHeight = i6289[7]
  i6288.Descender = i6289[8]
  i6288.CenterLine = i6289[9]
  i6288.SuperscriptOffset = i6289[10]
  i6288.SubscriptOffset = i6289[11]
  i6288.SubSize = i6289[12]
  i6288.Underline = i6289[13]
  i6288.UnderlineThickness = i6289[14]
  i6288.strikethrough = i6289[15]
  i6288.strikethroughThickness = i6289[16]
  i6288.TabWidth = i6289[17]
  i6288.Padding = i6289[18]
  i6288.AtlasWidth = i6289[19]
  i6288.AtlasHeight = i6289[20]
  return i6288
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i6292 = root || request.c( 'TMPro.TMP_Glyph' )
  var i6293 = data
  i6292.id = i6293[0]
  i6292.x = i6293[1]
  i6292.y = i6293[2]
  i6292.width = i6293[3]
  i6292.height = i6293[4]
  i6292.xOffset = i6293[5]
  i6292.yOffset = i6293[6]
  i6292.xAdvance = i6293[7]
  i6292.scale = i6293[8]
  return i6292
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i6294 = root || request.c( 'TMPro.KerningTable' )
  var i6295 = data
  var i6297 = i6295[0]
  var i6296 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i6297.length; i += 1) {
    i6296.add(request.d('TMPro.KerningPair', i6297[i + 0]));
  }
  i6294.kerningPairs = i6296
  return i6294
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i6300 = root || request.c( 'TMPro.KerningPair' )
  var i6301 = data
  i6300.xOffset = i6301[0]
  i6300.m_FirstGlyph = i6301[1]
  i6300.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i6301[2], i6300.m_FirstGlyphAdjustments)
  i6300.m_SecondGlyph = i6301[3]
  i6300.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i6301[4], i6300.m_SecondGlyphAdjustments)
  i6300.m_IgnoreSpacingAdjustments = !!i6301[5]
  return i6300
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i6302 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i6303 = data
  i6302.m_FaceIndex = i6303[0]
  i6302.m_FamilyName = i6303[1]
  i6302.m_StyleName = i6303[2]
  i6302.m_PointSize = i6303[3]
  i6302.m_Scale = i6303[4]
  i6302.m_UnitsPerEM = i6303[5]
  i6302.m_LineHeight = i6303[6]
  i6302.m_AscentLine = i6303[7]
  i6302.m_CapLine = i6303[8]
  i6302.m_MeanLine = i6303[9]
  i6302.m_Baseline = i6303[10]
  i6302.m_DescentLine = i6303[11]
  i6302.m_SuperscriptOffset = i6303[12]
  i6302.m_SuperscriptSize = i6303[13]
  i6302.m_SubscriptOffset = i6303[14]
  i6302.m_SubscriptSize = i6303[15]
  i6302.m_UnderlineOffset = i6303[16]
  i6302.m_UnderlineThickness = i6303[17]
  i6302.m_StrikethroughOffset = i6303[18]
  i6302.m_StrikethroughThickness = i6303[19]
  i6302.m_TabWidth = i6303[20]
  return i6302
}

Deserializers["FavoritePlayerCard"] = function (request, data, root) {
  var i6304 = root || request.c( 'FavoritePlayerCard' )
  var i6305 = data
  i6304.playerName = i6305[0]
  request.r(i6305[1], i6305[2], 0, i6304, 'halfBodySprite')
  request.r(i6305[3], i6305[4], 0, i6304, 'fullBodySprite')
  request.r(i6305[5], i6305[6], 0, i6304, 'nameAudio')
  request.r(i6305[7], i6305[8], 0, i6304, 'lightEffectSprite')
  return i6304
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i6306 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i6307 = data
  i6306.useSafeMode = !!i6307[0]
  i6306.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i6307[1], i6306.safeModeOptions)
  i6306.timeScale = i6307[2]
  i6306.unscaledTimeScale = i6307[3]
  i6306.useSmoothDeltaTime = !!i6307[4]
  i6306.maxSmoothUnscaledTime = i6307[5]
  i6306.rewindCallbackMode = i6307[6]
  i6306.showUnityEditorReport = !!i6307[7]
  i6306.logBehaviour = i6307[8]
  i6306.drawGizmos = !!i6307[9]
  i6306.defaultRecyclable = !!i6307[10]
  i6306.defaultAutoPlay = i6307[11]
  i6306.defaultUpdateType = i6307[12]
  i6306.defaultTimeScaleIndependent = !!i6307[13]
  i6306.defaultEaseType = i6307[14]
  i6306.defaultEaseOvershootOrAmplitude = i6307[15]
  i6306.defaultEasePeriod = i6307[16]
  i6306.defaultAutoKill = !!i6307[17]
  i6306.defaultLoopType = i6307[18]
  i6306.debugMode = !!i6307[19]
  i6306.debugStoreTargetId = !!i6307[20]
  i6306.showPreviewPanel = !!i6307[21]
  i6306.storeSettingsLocation = i6307[22]
  i6306.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i6307[23], i6306.modules)
  i6306.createASMDEF = !!i6307[24]
  i6306.showPlayingTweens = !!i6307[25]
  i6306.showPausedTweens = !!i6307[26]
  return i6306
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i6308 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i6309 = data
  i6308.logBehaviour = i6309[0]
  i6308.nestedTweenFailureBehaviour = i6309[1]
  return i6308
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i6310 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i6311 = data
  i6310.showPanel = !!i6311[0]
  i6310.audioEnabled = !!i6311[1]
  i6310.physicsEnabled = !!i6311[2]
  i6310.physics2DEnabled = !!i6311[3]
  i6310.spriteEnabled = !!i6311[4]
  i6310.uiEnabled = !!i6311[5]
  i6310.uiToolkitEnabled = !!i6311[6]
  i6310.textMeshProEnabled = !!i6311[7]
  i6310.tk2DEnabled = !!i6311[8]
  i6310.deAudioEnabled = !!i6311[9]
  i6310.deUnityExtendedEnabled = !!i6311[10]
  i6310.epoOutlineEnabled = !!i6311[11]
  return i6310
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i6312 = root || request.c( 'TMPro.TMP_Settings' )
  var i6313 = data
  i6312.assetVersion = i6313[0]
  i6312.m_TextWrappingMode = i6313[1]
  i6312.m_enableKerning = !!i6313[2]
  var i6315 = i6313[3]
  var i6314 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i6315.length; i += 1) {
    i6314.add(i6315[i + 0]);
  }
  i6312.m_ActiveFontFeatures = i6314
  i6312.m_enableExtraPadding = !!i6313[4]
  i6312.m_enableTintAllSprites = !!i6313[5]
  i6312.m_enableParseEscapeCharacters = !!i6313[6]
  i6312.m_EnableRaycastTarget = !!i6313[7]
  i6312.m_GetFontFeaturesAtRuntime = !!i6313[8]
  i6312.m_missingGlyphCharacter = i6313[9]
  i6312.m_ClearDynamicDataOnBuild = !!i6313[10]
  i6312.m_warningsDisabled = !!i6313[11]
  request.r(i6313[12], i6313[13], 0, i6312, 'm_defaultFontAsset')
  i6312.m_defaultFontAssetPath = i6313[14]
  i6312.m_defaultFontSize = i6313[15]
  i6312.m_defaultAutoSizeMinRatio = i6313[16]
  i6312.m_defaultAutoSizeMaxRatio = i6313[17]
  i6312.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i6313[18], i6313[19] )
  i6312.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i6313[20], i6313[21] )
  i6312.m_autoSizeTextContainer = !!i6313[22]
  i6312.m_IsTextObjectScaleStatic = !!i6313[23]
  var i6317 = i6313[24]
  var i6316 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i6317.length; i += 2) {
  request.r(i6317[i + 0], i6317[i + 1], 1, i6316, '')
  }
  i6312.m_fallbackFontAssets = i6316
  i6312.m_matchMaterialPreset = !!i6313[25]
  i6312.m_HideSubTextObjects = !!i6313[26]
  request.r(i6313[27], i6313[28], 0, i6312, 'm_defaultSpriteAsset')
  i6312.m_defaultSpriteAssetPath = i6313[29]
  i6312.m_enableEmojiSupport = !!i6313[30]
  i6312.m_MissingCharacterSpriteUnicode = i6313[31]
  var i6319 = i6313[32]
  var i6318 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i6319.length; i += 2) {
  request.r(i6319[i + 0], i6319[i + 1], 1, i6318, '')
  }
  i6312.m_EmojiFallbackTextAssets = i6318
  i6312.m_defaultColorGradientPresetsPath = i6313[33]
  request.r(i6313[34], i6313[35], 0, i6312, 'm_defaultStyleSheet')
  i6312.m_StyleSheetsResourcePath = i6313[36]
  request.r(i6313[37], i6313[38], 0, i6312, 'm_leadingCharacters')
  request.r(i6313[39], i6313[40], 0, i6312, 'm_followingCharacters')
  i6312.m_UseModernHangulLineBreakingRules = !!i6313[41]
  return i6312
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i6322 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i6323 = data
  request.r(i6323[0], i6323[1], 0, i6322, 'spriteSheet')
  var i6325 = i6323[2]
  var i6324 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i6325.length; i += 1) {
    i6324.add(request.d('TMPro.TMP_Sprite', i6325[i + 0]));
  }
  i6322.spriteInfoList = i6324
  var i6327 = i6323[3]
  var i6326 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i6327.length; i += 2) {
  request.r(i6327[i + 0], i6327[i + 1], 1, i6326, '')
  }
  i6322.fallbackSpriteAssets = i6326
  var i6329 = i6323[4]
  var i6328 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i6329.length; i += 1) {
    i6328.add(request.d('TMPro.TMP_SpriteCharacter', i6329[i + 0]));
  }
  i6322.m_SpriteCharacterTable = i6328
  var i6331 = i6323[5]
  var i6330 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i6331.length; i += 1) {
    i6330.add(request.d('TMPro.TMP_SpriteGlyph', i6331[i + 0]));
  }
  i6322.m_GlyphTable = i6330
  i6322.m_Version = i6323[6]
  i6322.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i6323[7], i6322.m_FaceInfo)
  request.r(i6323[8], i6323[9], 0, i6322, 'm_Material')
  return i6322
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i6334 = root || request.c( 'TMPro.TMP_Sprite' )
  var i6335 = data
  i6334.name = i6335[0]
  i6334.hashCode = i6335[1]
  i6334.unicode = i6335[2]
  i6334.pivot = new pc.Vec2( i6335[3], i6335[4] )
  request.r(i6335[5], i6335[6], 0, i6334, 'sprite')
  i6334.id = i6335[7]
  i6334.x = i6335[8]
  i6334.y = i6335[9]
  i6334.width = i6335[10]
  i6334.height = i6335[11]
  i6334.xOffset = i6335[12]
  i6334.yOffset = i6335[13]
  i6334.xAdvance = i6335[14]
  i6334.scale = i6335[15]
  return i6334
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i6340 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i6341 = data
  i6340.m_Name = i6341[0]
  i6340.m_ElementType = i6341[1]
  i6340.m_Unicode = i6341[2]
  i6340.m_GlyphIndex = i6341[3]
  i6340.m_Scale = i6341[4]
  return i6340
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i6344 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i6345 = data
  request.r(i6345[0], i6345[1], 0, i6344, 'sprite')
  i6344.m_Index = i6345[2]
  i6344.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i6345[3], i6344.m_Metrics)
  i6344.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i6345[4], i6344.m_GlyphRect)
  i6344.m_Scale = i6345[5]
  i6344.m_AtlasIndex = i6345[6]
  i6344.m_ClassDefinitionType = i6345[7]
  return i6344
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i6346 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i6347 = data
  var i6349 = i6347[0]
  var i6348 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i6349.length; i += 1) {
    i6348.add(request.d('TMPro.TMP_Style', i6349[i + 0]));
  }
  i6346.m_StyleList = i6348
  return i6346
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i6352 = root || request.c( 'TMPro.TMP_Style' )
  var i6353 = data
  i6352.m_Name = i6353[0]
  i6352.m_HashCode = i6353[1]
  i6352.m_OpeningDefinition = i6353[2]
  i6352.m_ClosingDefinition = i6353[3]
  i6352.m_OpeningTagArray = i6353[4]
  i6352.m_ClosingTagArray = i6353[5]
  return i6352
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i6354 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i6355 = data
  var i6357 = i6355[0]
  var i6356 = []
  for(var i = 0; i < i6357.length; i += 1) {
    i6356.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i6357[i + 0]) );
  }
  i6354.files = i6356
  i6354.componentToPrefabIds = i6355[1]
  return i6354
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i6360 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i6361 = data
  i6360.path = i6361[0]
  request.r(i6361[1], i6361[2], 0, i6360, 'unityObject')
  return i6360
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i6362 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i6363 = data
  var i6365 = i6363[0]
  var i6364 = []
  for(var i = 0; i < i6365.length; i += 1) {
    i6364.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i6365[i + 0]) );
  }
  i6362.scriptsExecutionOrder = i6364
  var i6367 = i6363[1]
  var i6366 = []
  for(var i = 0; i < i6367.length; i += 1) {
    i6366.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i6367[i + 0]) );
  }
  i6362.sortingLayers = i6366
  var i6369 = i6363[2]
  var i6368 = []
  for(var i = 0; i < i6369.length; i += 1) {
    i6368.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i6369[i + 0]) );
  }
  i6362.cullingLayers = i6368
  i6362.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i6363[3], i6362.timeSettings)
  i6362.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i6363[4], i6362.physicsSettings)
  i6362.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i6363[5], i6362.physics2DSettings)
  i6362.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i6363[6], i6362.qualitySettings)
  i6362.enableRealtimeShadows = !!i6363[7]
  i6362.enableAutoInstancing = !!i6363[8]
  i6362.enableStaticBatching = !!i6363[9]
  i6362.enableDynamicBatching = !!i6363[10]
  i6362.lightmapEncodingQuality = i6363[11]
  i6362.desiredColorSpace = i6363[12]
  var i6371 = i6363[13]
  var i6370 = []
  for(var i = 0; i < i6371.length; i += 1) {
    i6370.push( i6371[i + 0] );
  }
  i6362.allTags = i6370
  return i6362
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i6374 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i6375 = data
  i6374.name = i6375[0]
  i6374.value = i6375[1]
  return i6374
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i6378 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i6379 = data
  i6378.id = i6379[0]
  i6378.name = i6379[1]
  i6378.value = i6379[2]
  return i6378
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i6382 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i6383 = data
  i6382.id = i6383[0]
  i6382.name = i6383[1]
  return i6382
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i6384 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i6385 = data
  i6384.fixedDeltaTime = i6385[0]
  i6384.maximumDeltaTime = i6385[1]
  i6384.timeScale = i6385[2]
  i6384.maximumParticleTimestep = i6385[3]
  return i6384
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i6386 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i6387 = data
  i6386.gravity = new pc.Vec3( i6387[0], i6387[1], i6387[2] )
  i6386.defaultSolverIterations = i6387[3]
  i6386.bounceThreshold = i6387[4]
  i6386.autoSyncTransforms = !!i6387[5]
  i6386.autoSimulation = !!i6387[6]
  var i6389 = i6387[7]
  var i6388 = []
  for(var i = 0; i < i6389.length; i += 1) {
    i6388.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i6389[i + 0]) );
  }
  i6386.collisionMatrix = i6388
  return i6386
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i6392 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i6393 = data
  i6392.enabled = !!i6393[0]
  i6392.layerId = i6393[1]
  i6392.otherLayerId = i6393[2]
  return i6392
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i6394 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i6395 = data
  request.r(i6395[0], i6395[1], 0, i6394, 'material')
  i6394.gravity = new pc.Vec2( i6395[2], i6395[3] )
  i6394.positionIterations = i6395[4]
  i6394.velocityIterations = i6395[5]
  i6394.velocityThreshold = i6395[6]
  i6394.maxLinearCorrection = i6395[7]
  i6394.maxAngularCorrection = i6395[8]
  i6394.maxTranslationSpeed = i6395[9]
  i6394.maxRotationSpeed = i6395[10]
  i6394.baumgarteScale = i6395[11]
  i6394.baumgarteTOIScale = i6395[12]
  i6394.timeToSleep = i6395[13]
  i6394.linearSleepTolerance = i6395[14]
  i6394.angularSleepTolerance = i6395[15]
  i6394.defaultContactOffset = i6395[16]
  i6394.autoSimulation = !!i6395[17]
  i6394.queriesHitTriggers = !!i6395[18]
  i6394.queriesStartInColliders = !!i6395[19]
  i6394.callbacksOnDisable = !!i6395[20]
  i6394.reuseCollisionCallbacks = !!i6395[21]
  i6394.autoSyncTransforms = !!i6395[22]
  var i6397 = i6395[23]
  var i6396 = []
  for(var i = 0; i < i6397.length; i += 1) {
    i6396.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i6397[i + 0]) );
  }
  i6394.collisionMatrix = i6396
  return i6394
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i6400 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i6401 = data
  i6400.enabled = !!i6401[0]
  i6400.layerId = i6401[1]
  i6400.otherLayerId = i6401[2]
  return i6400
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i6402 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i6403 = data
  var i6405 = i6403[0]
  var i6404 = []
  for(var i = 0; i < i6405.length; i += 1) {
    i6404.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i6405[i + 0]) );
  }
  i6402.qualityLevels = i6404
  var i6407 = i6403[1]
  var i6406 = []
  for(var i = 0; i < i6407.length; i += 1) {
    i6406.push( i6407[i + 0] );
  }
  i6402.names = i6406
  i6402.shadows = i6403[2]
  i6402.anisotropicFiltering = i6403[3]
  i6402.antiAliasing = i6403[4]
  i6402.lodBias = i6403[5]
  i6402.shadowCascades = i6403[6]
  i6402.shadowDistance = i6403[7]
  i6402.shadowmaskMode = i6403[8]
  i6402.shadowProjection = i6403[9]
  i6402.shadowResolution = i6403[10]
  i6402.softParticles = !!i6403[11]
  i6402.softVegetation = !!i6403[12]
  i6402.activeColorSpace = i6403[13]
  i6402.desiredColorSpace = i6403[14]
  i6402.masterTextureLimit = i6403[15]
  i6402.maxQueuedFrames = i6403[16]
  i6402.particleRaycastBudget = i6403[17]
  i6402.pixelLightCount = i6403[18]
  i6402.realtimeReflectionProbes = !!i6403[19]
  i6402.shadowCascade2Split = i6403[20]
  i6402.shadowCascade4Split = new pc.Vec3( i6403[21], i6403[22], i6403[23] )
  i6402.streamingMipmapsActive = !!i6403[24]
  i6402.vSyncCount = i6403[25]
  i6402.asyncUploadBufferSize = i6403[26]
  i6402.asyncUploadTimeSlice = i6403[27]
  i6402.billboardsFaceCameraPosition = !!i6403[28]
  i6402.shadowNearPlaneOffset = i6403[29]
  i6402.streamingMipmapsMemoryBudget = i6403[30]
  i6402.maximumLODLevel = i6403[31]
  i6402.streamingMipmapsAddAllCameras = !!i6403[32]
  i6402.streamingMipmapsMaxLevelReduction = i6403[33]
  i6402.streamingMipmapsRenderersPerFrame = i6403[34]
  i6402.resolutionScalingFixedDPIFactor = i6403[35]
  i6402.streamingMipmapsMaxFileIORequests = i6403[36]
  i6402.currentQualityLevel = i6403[37]
  return i6402
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i6412 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i6413 = data
  i6412.weight = i6413[0]
  i6412.vertices = i6413[1]
  i6412.normals = i6413[2]
  i6412.tangents = i6413[3]
  return i6412
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i6416 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i6417 = data
  i6416.mode = i6417[0]
  i6416.parameter = i6417[1]
  i6416.threshold = i6417[2]
  return i6416
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i6418 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i6419 = data
  i6418.m_XCoordinate = i6419[0]
  i6418.m_YCoordinate = i6419[1]
  return i6418
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i6420 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i6421 = data
  i6420.m_XPositionAdjustment = i6421[0]
  i6420.m_YPositionAdjustment = i6421[1]
  return i6420
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i6422 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i6423 = data
  i6422.xPlacement = i6423[0]
  i6422.yPlacement = i6423[1]
  i6422.xAdvance = i6423[2]
  i6422.yAdvance = i6423[3]
  return i6422
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2}}

Deserializers.requiredComponents = {"48":[49],"50":[49],"51":[49],"52":[49],"53":[49],"54":[49],"55":[56],"57":[2],"58":[59],"60":[59],"61":[59],"62":[59],"63":[59],"64":[59],"65":[66],"67":[66],"68":[66],"69":[66],"70":[66],"71":[66],"72":[66],"73":[66],"74":[66],"75":[66],"76":[66],"77":[66],"78":[66],"79":[2],"80":[26],"81":[82],"83":[82],"34":[25],"6":[2],"21":[84],"85":[66],"86":[87],"32":[84],"88":[14],"89":[2],"90":[91],"92":[40],"93":[34],"94":[25],"23":[26,25],"38":[25,37],"95":[25],"96":[37,25],"97":[26],"98":[37,25],"99":[25],"100":[101],"102":[101],"103":[101],"104":[25],"105":[25],"36":[34],"39":[37,25],"106":[25],"35":[34],"107":[25],"108":[25],"109":[25],"110":[25],"111":[25],"112":[25],"113":[25],"114":[25],"115":[25],"116":[37,25],"117":[25],"118":[25],"119":[25],"120":[25],"121":[37,25],"122":[25],"123":[40],"124":[40],"41":[40],"125":[40],"126":[2],"127":[2]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.MonoBehaviour","CameraFollow2D","AutoCameraFit","UnityEngine.Transform","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Mesh","UnityEngine.Material","UnityEngine.AudioSource","UnityEngine.AudioClip","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","MoveBetweenPoints","ScreenHeightPositionAnchor","UnityEngine.BoxCollider","ClickToStore","FavoritePlayerEndcard","TMPro.TextMeshPro","UnityEngine.GameObject","UnityEngine.RectTransform","UnityEngine.MeshRenderer","UnityEngine.EventSystems.UIBehaviour","TMPro.TMP_FontAsset","PlayerCardUIManager","Ply_SoundManager","FavoritePlayerManager","PlayerSlot","FavoritePlayerCard","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","TMPro.TextMeshProUGUI","UnityEngine.UI.Image","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.Font","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.Collider","BatStrikeController","SlotTrigger","UnityEngine.BoxCollider2D","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.InputSystem.UI.InputSystemUIInputModule","UnityEngine.InputSystem.UI.TrackedDeviceRaycaster","TMPro.TextContainer","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.38f1";

Deserializers.productName = "PLY_MiniSoccer";

Deserializers.lunaInitializationTime = "07/15/2026 03:53:54";

Deserializers.lunaDaysRunning = "16.3";

Deserializers.lunaVersion = "7.1.0";

Deserializers.lunaSHA = "cf93782349542fe0b84ad13951a26809f8419628";

Deserializers.creativeName = "";

Deserializers.lunaAppID = "0";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1777";

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

Deserializers.buildID = "877deccd-2d2f-48a8-8780-7574affcfab8";

Deserializers.runtimeInitializeOnLoadInfos = [[["Unity","Services","Core","Internal","UnityServicesInitializer","EnableServicesInitializationAsync"],["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["DG","Tweening","DOTween","RuntimeOnLoad"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["Unity","Services","Core","Registration","CorePackageInitializer","InitializeOnLoad"],["Unity","Services","Core","Internal","TaskAsyncOperation","SetScheduler"],["Unity","Services","Core","Environments","Client","Scheduler","EngineStateHelper","Init"],["Unity","Services","Core","Environments","Client","Scheduler","ThreadHelper","Init"],["Ua2CoreInitializeCallback","Register"],["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["Unity","AI","Navigation","NavMeshLink","ClearTrackedList"],["Unity","AI","Navigation","NavMeshSurface","ClearNavMeshSurfaces"],["Unity","AI","Navigation","NavMeshModifierVolume","ClearNavMeshModifiers"],["Unity","AI","Navigation","NavMeshModifier","ClearNavMeshModifiers"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["Unity","Services","Core","Internal","UnityServicesInitializer","CreateStaticInstance"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[["Unity","Services","Core","Environments","Client","Http","JsonHelpers","RegisterTypesForAOT"]],[["Unity","Services","Core","UnityThreadUtils","CaptureUnityThreadInfo"],["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

