var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i4950 = root || request.c( 'UnityEngine.JointSpring' )
  var i4951 = data
  i4950.spring = i4951[0]
  i4950.damper = i4951[1]
  i4950.targetPosition = i4951[2]
  return i4950
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i4952 = root || request.c( 'UnityEngine.JointMotor' )
  var i4953 = data
  i4952.m_TargetVelocity = i4953[0]
  i4952.m_Force = i4953[1]
  i4952.m_FreeSpin = i4953[2]
  return i4952
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i4954 = root || request.c( 'UnityEngine.JointLimits' )
  var i4955 = data
  i4954.m_Min = i4955[0]
  i4954.m_Max = i4955[1]
  i4954.m_Bounciness = i4955[2]
  i4954.m_BounceMinVelocity = i4955[3]
  i4954.m_ContactDistance = i4955[4]
  i4954.minBounce = i4955[5]
  i4954.maxBounce = i4955[6]
  return i4954
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i4956 = root || request.c( 'UnityEngine.JointDrive' )
  var i4957 = data
  i4956.m_PositionSpring = i4957[0]
  i4956.m_PositionDamper = i4957[1]
  i4956.m_MaximumForce = i4957[2]
  i4956.m_UseAcceleration = i4957[3]
  return i4956
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i4958 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i4959 = data
  i4958.m_Spring = i4959[0]
  i4958.m_Damper = i4959[1]
  return i4958
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i4960 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i4961 = data
  i4960.m_Limit = i4961[0]
  i4960.m_Bounciness = i4961[1]
  i4960.m_ContactDistance = i4961[2]
  return i4960
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i4962 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i4963 = data
  i4962.m_ExtremumSlip = i4963[0]
  i4962.m_ExtremumValue = i4963[1]
  i4962.m_AsymptoteSlip = i4963[2]
  i4962.m_AsymptoteValue = i4963[3]
  i4962.m_Stiffness = i4963[4]
  return i4962
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i4964 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i4965 = data
  i4964.m_LowerAngle = i4965[0]
  i4964.m_UpperAngle = i4965[1]
  return i4964
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i4966 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i4967 = data
  i4966.m_MotorSpeed = i4967[0]
  i4966.m_MaximumMotorTorque = i4967[1]
  return i4966
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i4968 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i4969 = data
  i4968.m_DampingRatio = i4969[0]
  i4968.m_Frequency = i4969[1]
  i4968.m_Angle = i4969[2]
  return i4968
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i4970 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i4971 = data
  i4970.m_LowerTranslation = i4971[0]
  i4970.m_UpperTranslation = i4971[1]
  return i4970
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i4972 = root || new pc.UnityMaterial()
  var i4973 = data
  i4972.name = i4973[0]
  request.r(i4973[1], i4973[2], 0, i4972, 'shader')
  i4972.renderQueue = i4973[3]
  i4972.enableInstancing = !!i4973[4]
  var i4975 = i4973[5]
  var i4974 = []
  for(var i = 0; i < i4975.length; i += 1) {
    i4974.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i4975[i + 0]) );
  }
  i4972.floatParameters = i4974
  var i4977 = i4973[6]
  var i4976 = []
  for(var i = 0; i < i4977.length; i += 1) {
    i4976.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i4977[i + 0]) );
  }
  i4972.colorParameters = i4976
  var i4979 = i4973[7]
  var i4978 = []
  for(var i = 0; i < i4979.length; i += 1) {
    i4978.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i4979[i + 0]) );
  }
  i4972.vectorParameters = i4978
  var i4981 = i4973[8]
  var i4980 = []
  for(var i = 0; i < i4981.length; i += 1) {
    i4980.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i4981[i + 0]) );
  }
  i4972.textureParameters = i4980
  var i4983 = i4973[9]
  var i4982 = []
  for(var i = 0; i < i4983.length; i += 1) {
    i4982.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i4983[i + 0]) );
  }
  i4972.materialFlags = i4982
  return i4972
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i4986 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i4987 = data
  i4986.name = i4987[0]
  i4986.value = i4987[1]
  return i4986
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i4990 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i4991 = data
  i4990.name = i4991[0]
  i4990.value = new pc.Color(i4991[1], i4991[2], i4991[3], i4991[4])
  return i4990
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i4994 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i4995 = data
  i4994.name = i4995[0]
  i4994.value = new pc.Vec4( i4995[1], i4995[2], i4995[3], i4995[4] )
  return i4994
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i4998 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i4999 = data
  i4998.name = i4999[0]
  request.r(i4999[1], i4999[2], 0, i4998, 'value')
  return i4998
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i5002 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i5003 = data
  i5002.name = i5003[0]
  i5002.enabled = !!i5003[1]
  return i5002
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i5004 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i5005 = data
  i5004.name = i5005[0]
  i5004.width = i5005[1]
  i5004.height = i5005[2]
  i5004.mipmapCount = i5005[3]
  i5004.anisoLevel = i5005[4]
  i5004.filterMode = i5005[5]
  i5004.hdr = !!i5005[6]
  i5004.format = i5005[7]
  i5004.wrapMode = i5005[8]
  i5004.alphaIsTransparency = !!i5005[9]
  i5004.alphaSource = i5005[10]
  i5004.graphicsFormat = i5005[11]
  i5004.sRGBTexture = !!i5005[12]
  i5004.desiredColorSpace = i5005[13]
  i5004.wrapU = i5005[14]
  i5004.wrapV = i5005[15]
  return i5004
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i5006 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i5007 = data
  i5006.name = i5007[0]
  i5006.halfPrecision = !!i5007[1]
  i5006.useSimplification = !!i5007[2]
  i5006.useUInt32IndexFormat = !!i5007[3]
  i5006.vertexCount = i5007[4]
  i5006.aabb = i5007[5]
  var i5009 = i5007[6]
  var i5008 = []
  for(var i = 0; i < i5009.length; i += 1) {
    i5008.push( !!i5009[i + 0] );
  }
  i5006.streams = i5008
  i5006.vertices = i5007[7]
  var i5011 = i5007[8]
  var i5010 = []
  for(var i = 0; i < i5011.length; i += 1) {
    i5010.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i5011[i + 0]) );
  }
  i5006.subMeshes = i5010
  var i5013 = i5007[9]
  var i5012 = []
  for(var i = 0; i < i5013.length; i += 16) {
    i5012.push( new pc.Mat4().setData(i5013[i + 0], i5013[i + 1], i5013[i + 2], i5013[i + 3],  i5013[i + 4], i5013[i + 5], i5013[i + 6], i5013[i + 7],  i5013[i + 8], i5013[i + 9], i5013[i + 10], i5013[i + 11],  i5013[i + 12], i5013[i + 13], i5013[i + 14], i5013[i + 15]) );
  }
  i5006.bindposes = i5012
  var i5015 = i5007[10]
  var i5014 = []
  for(var i = 0; i < i5015.length; i += 1) {
    i5014.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i5015[i + 0]) );
  }
  i5006.blendShapes = i5014
  return i5006
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i5020 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i5021 = data
  i5020.triangles = i5021[0]
  return i5020
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i5026 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i5027 = data
  i5026.name = i5027[0]
  var i5029 = i5027[1]
  var i5028 = []
  for(var i = 0; i < i5029.length; i += 1) {
    i5028.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i5029[i + 0]) );
  }
  i5026.frames = i5028
  return i5026
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i5030 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i5031 = data
  i5030.name = i5031[0]
  i5030.index = i5031[1]
  i5030.startup = !!i5031[2]
  return i5030
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i5032 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i5033 = data
  i5032.aspect = i5033[0]
  i5032.orthographic = !!i5033[1]
  i5032.orthographicSize = i5033[2]
  i5032.backgroundColor = new pc.Color(i5033[3], i5033[4], i5033[5], i5033[6])
  i5032.nearClipPlane = i5033[7]
  i5032.farClipPlane = i5033[8]
  i5032.fieldOfView = i5033[9]
  i5032.depth = i5033[10]
  i5032.clearFlags = i5033[11]
  i5032.cullingMask = i5033[12]
  i5032.rect = i5033[13]
  request.r(i5033[14], i5033[15], 0, i5032, 'targetTexture')
  i5032.usePhysicalProperties = !!i5033[16]
  i5032.focalLength = i5033[17]
  i5032.sensorSize = new pc.Vec2( i5033[18], i5033[19] )
  i5032.lensShift = new pc.Vec2( i5033[20], i5033[21] )
  i5032.gateFit = i5033[22]
  i5032.commandBufferCount = i5033[23]
  i5032.cameraType = i5033[24]
  i5032.enabled = !!i5033[25]
  return i5032
}

Deserializers["CameraFollow2D"] = function (request, data, root) {
  var i5034 = root || request.c( 'CameraFollow2D' )
  var i5035 = data
  request.r(i5035[0], i5035[1], 0, i5034, 'target')
  i5034.smoothSpeed = i5035[2]
  i5034.offset = new pc.Vec3( i5035[3], i5035[4], i5035[5] )
  i5034.followY = !!i5035[6]
  return i5034
}

Deserializers["AutoCameraFit"] = function (request, data, root) {
  var i5036 = root || request.c( 'AutoCameraFit' )
  var i5037 = data
  request.r(i5037[0], i5037[1], 0, i5036, 'tallScreenObject')
  i5036.tallScreenRatioThreshold = i5037[2]
  i5036.tallScreenYOffset = i5037[3]
  request.r(i5037[4], i5037[5], 0, i5036, 'canvasBtn')
  request.r(i5037[6], i5037[7], 0, i5036, 'targetArea')
  i5036.paddingLandscape = i5037[8]
  i5036.paddingPortrait = i5037[9]
  i5036.extraPaddingSmallScreen = i5037[10]
  i5036.smallScreenThreshold = i5037[11]
  i5036.autoUpdateOnResize = !!i5037[12]
  i5036.adjustInEditMode = !!i5037[13]
  return i5036
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i5038 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i5039 = data
  i5038.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i5039[0], i5038.main)
  i5038.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i5039[1], i5038.colorBySpeed)
  i5038.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i5039[2], i5038.colorOverLifetime)
  i5038.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i5039[3], i5038.emission)
  i5038.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i5039[4], i5038.rotationBySpeed)
  i5038.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i5039[5], i5038.rotationOverLifetime)
  i5038.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i5039[6], i5038.shape)
  i5038.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i5039[7], i5038.sizeBySpeed)
  i5038.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i5039[8], i5038.sizeOverLifetime)
  i5038.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i5039[9], i5038.textureSheetAnimation)
  i5038.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i5039[10], i5038.velocityOverLifetime)
  i5038.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i5039[11], i5038.noise)
  i5038.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i5039[12], i5038.inheritVelocity)
  i5038.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i5039[13], i5038.forceOverLifetime)
  i5038.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i5039[14], i5038.limitVelocityOverLifetime)
  i5038.useAutoRandomSeed = !!i5039[15]
  i5038.randomSeed = i5039[16]
  return i5038
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i5040 = root || new pc.ParticleSystemMain()
  var i5041 = data
  i5040.duration = i5041[0]
  i5040.loop = !!i5041[1]
  i5040.prewarm = !!i5041[2]
  i5040.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5041[3], i5040.startDelay)
  i5040.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5041[4], i5040.startLifetime)
  i5040.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5041[5], i5040.startSpeed)
  i5040.startSize3D = !!i5041[6]
  i5040.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5041[7], i5040.startSizeX)
  i5040.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5041[8], i5040.startSizeY)
  i5040.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5041[9], i5040.startSizeZ)
  i5040.startRotation3D = !!i5041[10]
  i5040.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5041[11], i5040.startRotationX)
  i5040.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5041[12], i5040.startRotationY)
  i5040.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5041[13], i5040.startRotationZ)
  i5040.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i5041[14], i5040.startColor)
  i5040.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5041[15], i5040.gravityModifier)
  i5040.simulationSpace = i5041[16]
  request.r(i5041[17], i5041[18], 0, i5040, 'customSimulationSpace')
  i5040.simulationSpeed = i5041[19]
  i5040.useUnscaledTime = !!i5041[20]
  i5040.scalingMode = i5041[21]
  i5040.playOnAwake = !!i5041[22]
  i5040.maxParticles = i5041[23]
  i5040.emitterVelocityMode = i5041[24]
  i5040.stopAction = i5041[25]
  return i5040
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i5042 = root || new pc.MinMaxCurve()
  var i5043 = data
  i5042.mode = i5043[0]
  i5042.curveMin = new pc.AnimationCurve( { keys_flow: i5043[1] } )
  i5042.curveMax = new pc.AnimationCurve( { keys_flow: i5043[2] } )
  i5042.curveMultiplier = i5043[3]
  i5042.constantMin = i5043[4]
  i5042.constantMax = i5043[5]
  return i5042
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i5044 = root || new pc.MinMaxGradient()
  var i5045 = data
  i5044.mode = i5045[0]
  i5044.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i5045[1], i5044.gradientMin)
  i5044.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i5045[2], i5044.gradientMax)
  i5044.colorMin = new pc.Color(i5045[3], i5045[4], i5045[5], i5045[6])
  i5044.colorMax = new pc.Color(i5045[7], i5045[8], i5045[9], i5045[10])
  return i5044
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i5046 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i5047 = data
  i5046.mode = i5047[0]
  var i5049 = i5047[1]
  var i5048 = []
  for(var i = 0; i < i5049.length; i += 1) {
    i5048.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i5049[i + 0]) );
  }
  i5046.colorKeys = i5048
  var i5051 = i5047[2]
  var i5050 = []
  for(var i = 0; i < i5051.length; i += 1) {
    i5050.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i5051[i + 0]) );
  }
  i5046.alphaKeys = i5050
  return i5046
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i5052 = root || new pc.ParticleSystemColorBySpeed()
  var i5053 = data
  i5052.enabled = !!i5053[0]
  i5052.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i5053[1], i5052.color)
  i5052.range = new pc.Vec2( i5053[2], i5053[3] )
  return i5052
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i5056 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i5057 = data
  i5056.color = new pc.Color(i5057[0], i5057[1], i5057[2], i5057[3])
  i5056.time = i5057[4]
  return i5056
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i5060 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i5061 = data
  i5060.alpha = i5061[0]
  i5060.time = i5061[1]
  return i5060
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i5062 = root || new pc.ParticleSystemColorOverLifetime()
  var i5063 = data
  i5062.enabled = !!i5063[0]
  i5062.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i5063[1], i5062.color)
  return i5062
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i5064 = root || new pc.ParticleSystemEmitter()
  var i5065 = data
  i5064.enabled = !!i5065[0]
  i5064.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5065[1], i5064.rateOverTime)
  i5064.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5065[2], i5064.rateOverDistance)
  var i5067 = i5065[3]
  var i5066 = []
  for(var i = 0; i < i5067.length; i += 1) {
    i5066.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i5067[i + 0]) );
  }
  i5064.bursts = i5066
  return i5064
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i5070 = root || new pc.ParticleSystemBurst()
  var i5071 = data
  i5070.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5071[0], i5070.count)
  i5070.cycleCount = i5071[1]
  i5070.minCount = i5071[2]
  i5070.maxCount = i5071[3]
  i5070.repeatInterval = i5071[4]
  i5070.time = i5071[5]
  return i5070
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i5072 = root || new pc.ParticleSystemRotationBySpeed()
  var i5073 = data
  i5072.enabled = !!i5073[0]
  i5072.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5073[1], i5072.x)
  i5072.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5073[2], i5072.y)
  i5072.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5073[3], i5072.z)
  i5072.separateAxes = !!i5073[4]
  i5072.range = new pc.Vec2( i5073[5], i5073[6] )
  return i5072
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i5074 = root || new pc.ParticleSystemRotationOverLifetime()
  var i5075 = data
  i5074.enabled = !!i5075[0]
  i5074.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5075[1], i5074.x)
  i5074.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5075[2], i5074.y)
  i5074.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5075[3], i5074.z)
  i5074.separateAxes = !!i5075[4]
  return i5074
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i5076 = root || new pc.ParticleSystemShape()
  var i5077 = data
  i5076.enabled = !!i5077[0]
  i5076.shapeType = i5077[1]
  i5076.randomDirectionAmount = i5077[2]
  i5076.sphericalDirectionAmount = i5077[3]
  i5076.randomPositionAmount = i5077[4]
  i5076.alignToDirection = !!i5077[5]
  i5076.radius = i5077[6]
  i5076.radiusMode = i5077[7]
  i5076.radiusSpread = i5077[8]
  i5076.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5077[9], i5076.radiusSpeed)
  i5076.radiusThickness = i5077[10]
  i5076.angle = i5077[11]
  i5076.length = i5077[12]
  i5076.boxThickness = new pc.Vec3( i5077[13], i5077[14], i5077[15] )
  i5076.meshShapeType = i5077[16]
  request.r(i5077[17], i5077[18], 0, i5076, 'mesh')
  request.r(i5077[19], i5077[20], 0, i5076, 'meshRenderer')
  request.r(i5077[21], i5077[22], 0, i5076, 'skinnedMeshRenderer')
  i5076.useMeshMaterialIndex = !!i5077[23]
  i5076.meshMaterialIndex = i5077[24]
  i5076.useMeshColors = !!i5077[25]
  i5076.normalOffset = i5077[26]
  i5076.arc = i5077[27]
  i5076.arcMode = i5077[28]
  i5076.arcSpread = i5077[29]
  i5076.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5077[30], i5076.arcSpeed)
  i5076.donutRadius = i5077[31]
  i5076.position = new pc.Vec3( i5077[32], i5077[33], i5077[34] )
  i5076.rotation = new pc.Vec3( i5077[35], i5077[36], i5077[37] )
  i5076.scale = new pc.Vec3( i5077[38], i5077[39], i5077[40] )
  return i5076
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i5078 = root || new pc.ParticleSystemSizeBySpeed()
  var i5079 = data
  i5078.enabled = !!i5079[0]
  i5078.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5079[1], i5078.x)
  i5078.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5079[2], i5078.y)
  i5078.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5079[3], i5078.z)
  i5078.separateAxes = !!i5079[4]
  i5078.range = new pc.Vec2( i5079[5], i5079[6] )
  return i5078
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i5080 = root || new pc.ParticleSystemSizeOverLifetime()
  var i5081 = data
  i5080.enabled = !!i5081[0]
  i5080.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5081[1], i5080.x)
  i5080.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5081[2], i5080.y)
  i5080.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5081[3], i5080.z)
  i5080.separateAxes = !!i5081[4]
  return i5080
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i5082 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i5083 = data
  i5082.enabled = !!i5083[0]
  i5082.mode = i5083[1]
  i5082.animation = i5083[2]
  i5082.numTilesX = i5083[3]
  i5082.numTilesY = i5083[4]
  i5082.useRandomRow = !!i5083[5]
  i5082.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5083[6], i5082.frameOverTime)
  i5082.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5083[7], i5082.startFrame)
  i5082.cycleCount = i5083[8]
  i5082.rowIndex = i5083[9]
  i5082.flipU = i5083[10]
  i5082.flipV = i5083[11]
  i5082.spriteCount = i5083[12]
  var i5085 = i5083[13]
  var i5084 = []
  for(var i = 0; i < i5085.length; i += 2) {
  request.r(i5085[i + 0], i5085[i + 1], 2, i5084, '')
  }
  i5082.sprites = i5084
  return i5082
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i5088 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i5089 = data
  i5088.enabled = !!i5089[0]
  i5088.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5089[1], i5088.x)
  i5088.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5089[2], i5088.y)
  i5088.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5089[3], i5088.z)
  i5088.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5089[4], i5088.radial)
  i5088.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5089[5], i5088.speedModifier)
  i5088.space = i5089[6]
  i5088.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5089[7], i5088.orbitalX)
  i5088.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5089[8], i5088.orbitalY)
  i5088.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5089[9], i5088.orbitalZ)
  i5088.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5089[10], i5088.orbitalOffsetX)
  i5088.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5089[11], i5088.orbitalOffsetY)
  i5088.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5089[12], i5088.orbitalOffsetZ)
  return i5088
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i5090 = root || new pc.ParticleSystemNoise()
  var i5091 = data
  i5090.enabled = !!i5091[0]
  i5090.separateAxes = !!i5091[1]
  i5090.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5091[2], i5090.strengthX)
  i5090.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5091[3], i5090.strengthY)
  i5090.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5091[4], i5090.strengthZ)
  i5090.frequency = i5091[5]
  i5090.damping = !!i5091[6]
  i5090.octaveCount = i5091[7]
  i5090.octaveMultiplier = i5091[8]
  i5090.octaveScale = i5091[9]
  i5090.quality = i5091[10]
  i5090.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5091[11], i5090.scrollSpeed)
  i5090.scrollSpeedMultiplier = i5091[12]
  i5090.remapEnabled = !!i5091[13]
  i5090.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5091[14], i5090.remapX)
  i5090.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5091[15], i5090.remapY)
  i5090.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5091[16], i5090.remapZ)
  i5090.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5091[17], i5090.positionAmount)
  i5090.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5091[18], i5090.rotationAmount)
  i5090.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5091[19], i5090.sizeAmount)
  return i5090
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i5092 = root || new pc.ParticleSystemInheritVelocity()
  var i5093 = data
  i5092.enabled = !!i5093[0]
  i5092.mode = i5093[1]
  i5092.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5093[2], i5092.curve)
  return i5092
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i5094 = root || new pc.ParticleSystemForceOverLifetime()
  var i5095 = data
  i5094.enabled = !!i5095[0]
  i5094.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5095[1], i5094.x)
  i5094.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5095[2], i5094.y)
  i5094.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5095[3], i5094.z)
  i5094.space = i5095[4]
  i5094.randomized = !!i5095[5]
  return i5094
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i5096 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i5097 = data
  i5096.enabled = !!i5097[0]
  i5096.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5097[1], i5096.limit)
  i5096.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5097[2], i5096.limitX)
  i5096.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5097[3], i5096.limitY)
  i5096.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5097[4], i5096.limitZ)
  i5096.dampen = i5097[5]
  i5096.separateAxes = !!i5097[6]
  i5096.space = i5097[7]
  i5096.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5097[8], i5096.drag)
  i5096.multiplyDragByParticleSize = !!i5097[9]
  i5096.multiplyDragByParticleVelocity = !!i5097[10]
  return i5096
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i5098 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i5099 = data
  request.r(i5099[0], i5099[1], 0, i5098, 'mesh')
  i5098.meshCount = i5099[2]
  i5098.activeVertexStreamsCount = i5099[3]
  i5098.alignment = i5099[4]
  i5098.renderMode = i5099[5]
  i5098.sortMode = i5099[6]
  i5098.lengthScale = i5099[7]
  i5098.velocityScale = i5099[8]
  i5098.cameraVelocityScale = i5099[9]
  i5098.normalDirection = i5099[10]
  i5098.sortingFudge = i5099[11]
  i5098.minParticleSize = i5099[12]
  i5098.maxParticleSize = i5099[13]
  i5098.pivot = new pc.Vec3( i5099[14], i5099[15], i5099[16] )
  request.r(i5099[17], i5099[18], 0, i5098, 'trailMaterial')
  i5098.applyActiveColorSpace = !!i5099[19]
  i5098.enabled = !!i5099[20]
  request.r(i5099[21], i5099[22], 0, i5098, 'sharedMaterial')
  var i5101 = i5099[23]
  var i5100 = []
  for(var i = 0; i < i5101.length; i += 2) {
  request.r(i5101[i + 0], i5101[i + 1], 2, i5100, '')
  }
  i5098.sharedMaterials = i5100
  i5098.receiveShadows = !!i5099[24]
  i5098.shadowCastingMode = i5099[25]
  i5098.sortingLayerID = i5099[26]
  i5098.sortingOrder = i5099[27]
  i5098.lightmapIndex = i5099[28]
  i5098.lightmapSceneIndex = i5099[29]
  i5098.lightmapScaleOffset = new pc.Vec4( i5099[30], i5099[31], i5099[32], i5099[33] )
  i5098.lightProbeUsage = i5099[34]
  i5098.reflectionProbeUsage = i5099[35]
  return i5098
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i5104 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i5105 = data
  i5104.name = i5105[0]
  i5104.tagId = i5105[1]
  i5104.enabled = !!i5105[2]
  i5104.isStatic = !!i5105[3]
  i5104.layer = i5105[4]
  return i5104
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i5106 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i5107 = data
  i5106.color = new pc.Color(i5107[0], i5107[1], i5107[2], i5107[3])
  request.r(i5107[4], i5107[5], 0, i5106, 'sprite')
  i5106.flipX = !!i5107[6]
  i5106.flipY = !!i5107[7]
  i5106.drawMode = i5107[8]
  i5106.size = new pc.Vec2( i5107[9], i5107[10] )
  i5106.tileMode = i5107[11]
  i5106.adaptiveModeThreshold = i5107[12]
  i5106.maskInteraction = i5107[13]
  i5106.spriteSortPoint = i5107[14]
  i5106.enabled = !!i5107[15]
  request.r(i5107[16], i5107[17], 0, i5106, 'sharedMaterial')
  var i5109 = i5107[18]
  var i5108 = []
  for(var i = 0; i < i5109.length; i += 2) {
  request.r(i5109[i + 0], i5109[i + 1], 2, i5108, '')
  }
  i5106.sharedMaterials = i5108
  i5106.receiveShadows = !!i5107[19]
  i5106.shadowCastingMode = i5107[20]
  i5106.sortingLayerID = i5107[21]
  i5106.sortingOrder = i5107[22]
  i5106.lightmapIndex = i5107[23]
  i5106.lightmapSceneIndex = i5107[24]
  i5106.lightmapScaleOffset = new pc.Vec4( i5107[25], i5107[26], i5107[27], i5107[28] )
  i5106.lightProbeUsage = i5107[29]
  i5106.reflectionProbeUsage = i5107[30]
  return i5106
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i5110 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i5111 = data
  request.r(i5111[0], i5111[1], 0, i5110, 'animatorController')
  request.r(i5111[2], i5111[3], 0, i5110, 'avatar')
  i5110.updateMode = i5111[4]
  i5110.hasTransformHierarchy = !!i5111[5]
  i5110.applyRootMotion = !!i5111[6]
  var i5113 = i5111[7]
  var i5112 = []
  for(var i = 0; i < i5113.length; i += 2) {
  request.r(i5113[i + 0], i5113[i + 1], 2, i5112, '')
  }
  i5110.humanBones = i5112
  i5110.enabled = !!i5111[8]
  return i5110
}

Deserializers["MoveBetweenPoints"] = function (request, data, root) {
  var i5116 = root || request.c( 'MoveBetweenPoints' )
  var i5117 = data
  request.r(i5117[0], i5117[1], 0, i5116, 'pointA')
  request.r(i5117[2], i5117[3], 0, i5116, 'pointB')
  i5116.duration = i5117[4]
  return i5116
}

Deserializers["PlayerCardUIManager"] = function (request, data, root) {
  var i5118 = root || request.c( 'PlayerCardUIManager' )
  var i5119 = data
  request.r(i5119[0], i5119[1], 0, i5118, 'cardPanel')
  var i5121 = i5119[2]
  var i5120 = []
  for(var i = 0; i < i5121.length; i += 2) {
  request.r(i5121[i + 0], i5121[i + 1], 2, i5120, '')
  }
  i5118.extraObjectsToActivate = i5120
  i5118.waitTime = i5119[3]
  var i5123 = i5119[4]
  var i5122 = []
  for(var i = 0; i < i5123.length; i += 2) {
  request.r(i5123[i + 0], i5123[i + 1], 2, i5122, '')
  }
  i5118.objectsToTurnOnAfterWait = i5122
  var i5125 = i5119[5]
  var i5124 = []
  for(var i = 0; i < i5125.length; i += 2) {
  request.r(i5125[i + 0], i5125[i + 1], 2, i5124, '')
  }
  i5118.objectsToTurnOffAfterWait = i5124
  request.r(i5119[6], i5119[7], 0, i5118, 'playerNameText')
  request.r(i5119[8], i5119[9], 0, i5118, 'playerImage')
  return i5118
}

Deserializers["Ply_SoundManager"] = function (request, data, root) {
  var i5128 = root || request.c( 'Ply_SoundManager' )
  var i5129 = data
  i5128.fxAudio = request.d('FxAudio', i5129[0], i5128.fxAudio)
  request.r(i5129[1], i5129[2], 0, i5128, 'bgm1')
  return i5128
}

Deserializers["FxAudio"] = function (request, data, root) {
  var i5130 = root || request.c( 'FxAudio' )
  var i5131 = data
  i5130.ClickBox = request.d('SoundData', i5131[0], i5130.ClickBox)
  i5130.Happy = request.d('SoundData', i5131[1], i5130.Happy)
  i5130.Wrong = request.d('SoundData', i5131[2], i5130.Wrong)
  i5130.Spray = request.d('SoundData', i5131[3], i5130.Spray)
  i5130.Brush = request.d('SoundData', i5131[4], i5130.Brush)
  i5130.Keo = request.d('SoundData', i5131[5], i5130.Keo)
  i5130.Confetti = request.d('SoundData', i5131[6], i5130.Confetti)
  i5130.Lose2 = request.d('SoundData', i5131[7], i5130.Lose2)
  return i5130
}

Deserializers["SoundData"] = function (request, data, root) {
  var i5132 = root || request.c( 'SoundData' )
  var i5133 = data
  request.r(i5133[0], i5133[1], 0, i5132, 'clip')
  i5132.repeatCount = i5133[2]
  return i5132
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i5134 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i5135 = data
  request.r(i5135[0], i5135[1], 0, i5134, 'clip')
  request.r(i5135[2], i5135[3], 0, i5134, 'outputAudioMixerGroup')
  i5134.playOnAwake = !!i5135[4]
  i5134.loop = !!i5135[5]
  i5134.time = i5135[6]
  i5134.volume = i5135[7]
  i5134.pitch = i5135[8]
  i5134.enabled = !!i5135[9]
  return i5134
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i5136 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i5137 = data
  i5136.pivot = new pc.Vec2( i5137[0], i5137[1] )
  i5136.anchorMin = new pc.Vec2( i5137[2], i5137[3] )
  i5136.anchorMax = new pc.Vec2( i5137[4], i5137[5] )
  i5136.sizeDelta = new pc.Vec2( i5137[6], i5137[7] )
  i5136.anchoredPosition3D = new pc.Vec3( i5137[8], i5137[9], i5137[10] )
  i5136.rotation = new pc.Quat(i5137[11], i5137[12], i5137[13], i5137[14])
  i5136.scale = new pc.Vec3( i5137[15], i5137[16], i5137[17] )
  return i5136
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i5138 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i5139 = data
  i5138.planeDistance = i5139[0]
  i5138.referencePixelsPerUnit = i5139[1]
  i5138.isFallbackOverlay = !!i5139[2]
  i5138.renderMode = i5139[3]
  i5138.renderOrder = i5139[4]
  i5138.sortingLayerName = i5139[5]
  i5138.sortingOrder = i5139[6]
  i5138.scaleFactor = i5139[7]
  request.r(i5139[8], i5139[9], 0, i5138, 'worldCamera')
  i5138.overrideSorting = !!i5139[10]
  i5138.pixelPerfect = !!i5139[11]
  i5138.targetDisplay = i5139[12]
  i5138.overridePixelPerfect = !!i5139[13]
  i5138.enabled = !!i5139[14]
  return i5138
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i5140 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i5141 = data
  i5140.m_UiScaleMode = i5141[0]
  i5140.m_ReferencePixelsPerUnit = i5141[1]
  i5140.m_ScaleFactor = i5141[2]
  i5140.m_ReferenceResolution = new pc.Vec2( i5141[3], i5141[4] )
  i5140.m_ScreenMatchMode = i5141[5]
  i5140.m_MatchWidthOrHeight = i5141[6]
  i5140.m_PhysicalUnit = i5141[7]
  i5140.m_FallbackScreenDPI = i5141[8]
  i5140.m_DefaultSpriteDPI = i5141[9]
  i5140.m_DynamicPixelsPerUnit = i5141[10]
  i5140.m_PresetInfoIsWorld = !!i5141[11]
  return i5140
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i5142 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i5143 = data
  i5142.m_IgnoreReversedGraphics = !!i5143[0]
  i5142.m_BlockingObjects = i5143[1]
  i5142.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i5143[2] )
  return i5142
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i5144 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i5145 = data
  i5144.cullTransparentMesh = !!i5145[0]
  return i5144
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i5146 = root || request.c( 'UnityEngine.UI.Image' )
  var i5147 = data
  request.r(i5147[0], i5147[1], 0, i5146, 'm_Sprite')
  i5146.m_Type = i5147[2]
  i5146.m_PreserveAspect = !!i5147[3]
  i5146.m_FillCenter = !!i5147[4]
  i5146.m_FillMethod = i5147[5]
  i5146.m_FillAmount = i5147[6]
  i5146.m_FillClockwise = !!i5147[7]
  i5146.m_FillOrigin = i5147[8]
  i5146.m_UseSpriteMesh = !!i5147[9]
  i5146.m_PixelsPerUnitMultiplier = i5147[10]
  request.r(i5147[11], i5147[12], 0, i5146, 'm_Material')
  i5146.m_Maskable = !!i5147[13]
  i5146.m_Color = new pc.Color(i5147[14], i5147[15], i5147[16], i5147[17])
  i5146.m_RaycastTarget = !!i5147[18]
  i5146.m_RaycastPadding = new pc.Vec4( i5147[19], i5147[20], i5147[21], i5147[22] )
  return i5146
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i5148 = root || request.c( 'UnityEngine.UI.Button' )
  var i5149 = data
  i5148.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i5149[0], i5148.m_OnClick)
  i5148.m_Navigation = request.d('UnityEngine.UI.Navigation', i5149[1], i5148.m_Navigation)
  i5148.m_Transition = i5149[2]
  i5148.m_Colors = request.d('UnityEngine.UI.ColorBlock', i5149[3], i5148.m_Colors)
  i5148.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i5149[4], i5148.m_SpriteState)
  i5148.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i5149[5], i5148.m_AnimationTriggers)
  i5148.m_Interactable = !!i5149[6]
  request.r(i5149[7], i5149[8], 0, i5148, 'm_TargetGraphic')
  return i5148
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i5150 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i5151 = data
  i5150.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i5151[0], i5150.m_PersistentCalls)
  return i5150
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i5152 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i5153 = data
  var i5155 = i5153[0]
  var i5154 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i5155.length; i += 1) {
    i5154.add(request.d('UnityEngine.Events.PersistentCall', i5155[i + 0]));
  }
  i5152.m_Calls = i5154
  return i5152
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i5158 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i5159 = data
  request.r(i5159[0], i5159[1], 0, i5158, 'm_Target')
  i5158.m_TargetAssemblyTypeName = i5159[2]
  i5158.m_MethodName = i5159[3]
  i5158.m_Mode = i5159[4]
  i5158.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i5159[5], i5158.m_Arguments)
  i5158.m_CallState = i5159[6]
  return i5158
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i5160 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i5161 = data
  request.r(i5161[0], i5161[1], 0, i5160, 'm_ObjectArgument')
  i5160.m_ObjectArgumentAssemblyTypeName = i5161[2]
  i5160.m_IntArgument = i5161[3]
  i5160.m_FloatArgument = i5161[4]
  i5160.m_StringArgument = i5161[5]
  i5160.m_BoolArgument = !!i5161[6]
  return i5160
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i5162 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i5163 = data
  i5162.m_Mode = i5163[0]
  i5162.m_WrapAround = !!i5163[1]
  request.r(i5163[2], i5163[3], 0, i5162, 'm_SelectOnUp')
  request.r(i5163[4], i5163[5], 0, i5162, 'm_SelectOnDown')
  request.r(i5163[6], i5163[7], 0, i5162, 'm_SelectOnLeft')
  request.r(i5163[8], i5163[9], 0, i5162, 'm_SelectOnRight')
  return i5162
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i5164 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i5165 = data
  i5164.m_NormalColor = new pc.Color(i5165[0], i5165[1], i5165[2], i5165[3])
  i5164.m_HighlightedColor = new pc.Color(i5165[4], i5165[5], i5165[6], i5165[7])
  i5164.m_PressedColor = new pc.Color(i5165[8], i5165[9], i5165[10], i5165[11])
  i5164.m_SelectedColor = new pc.Color(i5165[12], i5165[13], i5165[14], i5165[15])
  i5164.m_DisabledColor = new pc.Color(i5165[16], i5165[17], i5165[18], i5165[19])
  i5164.m_ColorMultiplier = i5165[20]
  i5164.m_FadeDuration = i5165[21]
  return i5164
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i5166 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i5167 = data
  request.r(i5167[0], i5167[1], 0, i5166, 'm_HighlightedSprite')
  request.r(i5167[2], i5167[3], 0, i5166, 'm_PressedSprite')
  request.r(i5167[4], i5167[5], 0, i5166, 'm_SelectedSprite')
  request.r(i5167[6], i5167[7], 0, i5166, 'm_DisabledSprite')
  return i5166
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i5168 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i5169 = data
  i5168.m_NormalTrigger = i5169[0]
  i5168.m_HighlightedTrigger = i5169[1]
  i5168.m_PressedTrigger = i5169[2]
  i5168.m_SelectedTrigger = i5169[3]
  i5168.m_DisabledTrigger = i5169[4]
  return i5168
}

Deserializers["HairCutController"] = function (request, data, root) {
  var i5170 = root || request.c( 'HairCutController' )
  var i5171 = data
  request.r(i5171[0], i5171[1], 0, i5170, 'scissors')
  request.r(i5171[2], i5171[3], 0, i5170, 'scissorsAnimator')
  request.r(i5171[4], i5171[5], 0, i5170, 'targetAnimatorToDisable')
  request.r(i5171[6], i5171[7], 0, i5170, 'linePointA')
  request.r(i5171[8], i5171[9], 0, i5170, 'linePointB')
  i5170.scissorMoveDuration = i5171[10]
  var i5173 = i5171[11]
  var i5172 = []
  for(var i = 0; i < i5173.length; i += 2) {
  request.r(i5173[i + 0], i5173[i + 1], 2, i5172, '')
  }
  i5170.allMasks = i5172
  request.r(i5171[12], i5171[13], 0, i5170, 'fallingHairParent')
  var i5175 = i5171[14]
  var i5174 = []
  for(var i = 0; i < i5175.length; i += 2) {
  request.r(i5175[i + 0], i5175[i + 1], 2, i5174, '')
  }
  i5170.fallingHairRenderers = i5174
  request.r(i5171[15], i5171[16], 0, i5170, 'scissorsCollider')
  var i5177 = i5171[17]
  var i5176 = []
  for(var i = 0; i < i5177.length; i += 1) {
    i5176.push( request.d('TargetColliderData', i5177[i + 0]) );
  }
  i5170.targetColliders = i5176
  request.r(i5171[18], i5171[19], 0, i5170, 'targetCollider')
  request.r(i5171[20], i5171[21], 0, i5170, 'winObjectToEnable')
  var i5179 = i5171[22]
  var i5178 = []
  for(var i = 0; i < i5179.length; i += 2) {
  request.r(i5179[i + 0], i5179[i + 1], 2, i5178, '')
  }
  i5170.winObjectsToEnable = i5178
  request.r(i5171[23], i5171[24], 0, i5170, 'winObjectToDisable')
  var i5181 = i5171[25]
  var i5180 = []
  for(var i = 0; i < i5181.length; i += 2) {
  request.r(i5181[i + 0], i5181[i + 1], 2, i5180, '')
  }
  i5170.winObjectsToDisable = i5180
  request.r(i5171[26], i5171[27], 0, i5170, 'lossSpriteRenderer')
  request.r(i5171[28], i5171[29], 0, i5170, 'lossObjectToEnable')
  var i5183 = i5171[30]
  var i5182 = []
  for(var i = 0; i < i5183.length; i += 2) {
  request.r(i5183[i + 0], i5183[i + 1], 2, i5182, '')
  }
  i5170.lossObjectsToEnable = i5182
  request.r(i5171[31], i5171[32], 0, i5170, 'lossObjectToDisable')
  var i5185 = i5171[33]
  var i5184 = []
  for(var i = 0; i < i5185.length; i += 2) {
  request.r(i5185[i + 0], i5185[i + 1], 2, i5184, '')
  }
  i5170.lossObjectsToDisable = i5184
  i5170.endDelay = i5171[34]
  var i5187 = i5171[35]
  var i5186 = []
  for(var i = 0; i < i5187.length; i += 2) {
  request.r(i5187[i + 0], i5187[i + 1], 2, i5186, '')
  }
  i5170.afterEndDisableObjects = i5186
  var i5189 = i5171[36]
  var i5188 = []
  for(var i = 0; i < i5189.length; i += 2) {
  request.r(i5189[i + 0], i5189[i + 1], 2, i5188, '')
  }
  i5170.afterEndEnableObjects = i5188
  request.r(i5171[37], i5171[38], 0, i5170, 'tutObject')
  request.r(i5171[39], i5171[40], 0, i5170, 'animatorToEnableOnFirstTap')
  i5170.firstTapTriggerName = i5171[41]
  request.r(i5171[42], i5171[43], 0, i5170, 'objectToDisableOnComplete')
  var i5191 = i5171[44]
  var i5190 = []
  for(var i = 0; i < i5191.length; i += 2) {
  request.r(i5191[i + 0], i5191[i + 1], 2, i5190, '')
  }
  i5170.objectsToDisableOnComplete = i5190
  i5170.fallDistance = i5171[45]
  i5170.fallDuration = i5171[46]
  i5170.fadeDuration = i5171[47]
  return i5170
}

Deserializers["TargetColliderData"] = function (request, data, root) {
  var i5198 = root || request.c( 'TargetColliderData' )
  var i5199 = data
  request.r(i5199[0], i5199[1], 0, i5198, 'collider')
  request.r(i5199[2], i5199[3], 0, i5198, 'resultSprite')
  i5198.isWin = !!i5199[4]
  return i5198
}

Deserializers["HideOnFirstClick"] = function (request, data, root) {
  var i5200 = root || request.c( 'HideOnFirstClick' )
  var i5201 = data
  request.r(i5201[0], i5201[1], 0, i5200, 'objectToHide')
  return i5200
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i5202 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i5203 = data
  i5202.usedByComposite = !!i5203[0]
  i5202.autoTiling = !!i5203[1]
  i5202.size = new pc.Vec2( i5203[2], i5203[3] )
  i5202.edgeRadius = i5203[4]
  i5202.enabled = !!i5203[5]
  i5202.isTrigger = !!i5203[6]
  i5202.usedByEffector = !!i5203[7]
  i5202.density = i5203[8]
  i5202.offset = new pc.Vec2( i5203[9], i5203[10] )
  request.r(i5203[11], i5203[12], 0, i5202, 'material')
  return i5202
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteMask"] = function (request, data, root) {
  var i5204 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteMask' )
  var i5205 = data
  i5204.frontSortingLayerID = i5205[0]
  i5204.frontSortingOrder = i5205[1]
  i5204.backSortingLayerID = i5205[2]
  i5204.backSortingOrder = i5205[3]
  i5204.alphaCutoff = i5205[4]
  request.r(i5205[5], i5205[6], 0, i5204, 'sprite')
  i5204.tileMode = i5205[7]
  i5204.isCustomRangeActive = !!i5205[8]
  i5204.spriteSortPoint = i5205[9]
  i5204.enabled = !!i5205[10]
  request.r(i5205[11], i5205[12], 0, i5204, 'sharedMaterial')
  var i5207 = i5205[13]
  var i5206 = []
  for(var i = 0; i < i5207.length; i += 2) {
  request.r(i5207[i + 0], i5207[i + 1], 2, i5206, '')
  }
  i5204.sharedMaterials = i5206
  i5204.receiveShadows = !!i5205[14]
  i5204.shadowCastingMode = i5205[15]
  i5204.sortingLayerID = i5205[16]
  i5204.sortingOrder = i5205[17]
  i5204.lightmapIndex = i5205[18]
  i5204.lightmapSceneIndex = i5205[19]
  i5204.lightmapScaleOffset = new pc.Vec4( i5205[20], i5205[21], i5205[22], i5205[23] )
  i5204.lightProbeUsage = i5205[24]
  i5204.reflectionProbeUsage = i5205[25]
  return i5204
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i5208 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i5209 = data
  request.r(i5209[0], i5209[1], 0, i5208, 'm_FirstSelected')
  i5208.m_sendNavigationEvents = !!i5209[2]
  i5208.m_DragThreshold = i5209[3]
  return i5208
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i5210 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i5211 = data
  i5210.m_HorizontalAxis = i5211[0]
  i5210.m_VerticalAxis = i5211[1]
  i5210.m_SubmitButton = i5211[2]
  i5210.m_CancelButton = i5211[3]
  i5210.m_InputActionsPerSecond = i5211[4]
  i5210.m_RepeatDelay = i5211[5]
  i5210.m_ForceModuleActive = !!i5211[6]
  i5210.m_SendPointerHoverToParent = !!i5211[7]
  return i5210
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i5212 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i5213 = data
  i5212.ambientIntensity = i5213[0]
  i5212.reflectionIntensity = i5213[1]
  i5212.ambientMode = i5213[2]
  i5212.ambientLight = new pc.Color(i5213[3], i5213[4], i5213[5], i5213[6])
  i5212.ambientSkyColor = new pc.Color(i5213[7], i5213[8], i5213[9], i5213[10])
  i5212.ambientGroundColor = new pc.Color(i5213[11], i5213[12], i5213[13], i5213[14])
  i5212.ambientEquatorColor = new pc.Color(i5213[15], i5213[16], i5213[17], i5213[18])
  i5212.fogColor = new pc.Color(i5213[19], i5213[20], i5213[21], i5213[22])
  i5212.fogEndDistance = i5213[23]
  i5212.fogStartDistance = i5213[24]
  i5212.fogDensity = i5213[25]
  i5212.fog = !!i5213[26]
  request.r(i5213[27], i5213[28], 0, i5212, 'skybox')
  i5212.fogMode = i5213[29]
  var i5215 = i5213[30]
  var i5214 = []
  for(var i = 0; i < i5215.length; i += 1) {
    i5214.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i5215[i + 0]) );
  }
  i5212.lightmaps = i5214
  i5212.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i5213[31], i5212.lightProbes)
  i5212.lightmapsMode = i5213[32]
  i5212.mixedBakeMode = i5213[33]
  i5212.environmentLightingMode = i5213[34]
  i5212.ambientProbe = new pc.SphericalHarmonicsL2(i5213[35])
  i5212.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i5213[36])
  i5212.useReferenceAmbientProbe = !!i5213[37]
  request.r(i5213[38], i5213[39], 0, i5212, 'customReflection')
  request.r(i5213[40], i5213[41], 0, i5212, 'defaultReflection')
  i5212.defaultReflectionMode = i5213[42]
  i5212.defaultReflectionResolution = i5213[43]
  i5212.sunLightObjectId = i5213[44]
  i5212.pixelLightCount = i5213[45]
  i5212.defaultReflectionHDR = !!i5213[46]
  i5212.hasLightDataAsset = !!i5213[47]
  i5212.hasManualGenerate = !!i5213[48]
  return i5212
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i5218 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i5219 = data
  request.r(i5219[0], i5219[1], 0, i5218, 'lightmapColor')
  request.r(i5219[2], i5219[3], 0, i5218, 'lightmapDirection')
  request.r(i5219[4], i5219[5], 0, i5218, 'shadowMask')
  return i5218
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i5220 = root || new UnityEngine.LightProbes()
  var i5221 = data
  return i5220
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i5228 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i5229 = data
  var i5231 = i5229[0]
  var i5230 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i5231.length; i += 1) {
    i5230.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i5231[i + 0]));
  }
  i5228.ShaderCompilationErrors = i5230
  i5228.name = i5229[1]
  i5228.guid = i5229[2]
  var i5233 = i5229[3]
  var i5232 = []
  for(var i = 0; i < i5233.length; i += 1) {
    i5232.push( i5233[i + 0] );
  }
  i5228.shaderDefinedKeywords = i5232
  var i5235 = i5229[4]
  var i5234 = []
  for(var i = 0; i < i5235.length; i += 1) {
    i5234.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i5235[i + 0]) );
  }
  i5228.passes = i5234
  var i5237 = i5229[5]
  var i5236 = []
  for(var i = 0; i < i5237.length; i += 1) {
    i5236.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i5237[i + 0]) );
  }
  i5228.usePasses = i5236
  var i5239 = i5229[6]
  var i5238 = []
  for(var i = 0; i < i5239.length; i += 1) {
    i5238.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i5239[i + 0]) );
  }
  i5228.defaultParameterValues = i5238
  request.r(i5229[7], i5229[8], 0, i5228, 'unityFallbackShader')
  i5228.readDepth = !!i5229[9]
  i5228.hasDepthOnlyPass = !!i5229[10]
  i5228.isCreatedByShaderGraph = !!i5229[11]
  i5228.disableBatching = !!i5229[12]
  i5228.compiled = !!i5229[13]
  return i5228
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i5242 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i5243 = data
  i5242.shaderName = i5243[0]
  i5242.errorMessage = i5243[1]
  return i5242
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i5248 = root || new pc.UnityShaderPass()
  var i5249 = data
  i5248.id = i5249[0]
  i5248.subShaderIndex = i5249[1]
  i5248.name = i5249[2]
  i5248.passType = i5249[3]
  i5248.grabPassTextureName = i5249[4]
  i5248.usePass = !!i5249[5]
  i5248.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5249[6], i5248.zTest)
  i5248.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5249[7], i5248.zWrite)
  i5248.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5249[8], i5248.culling)
  i5248.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i5249[9], i5248.blending)
  i5248.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i5249[10], i5248.alphaBlending)
  i5248.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5249[11], i5248.colorWriteMask)
  i5248.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5249[12], i5248.offsetUnits)
  i5248.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5249[13], i5248.offsetFactor)
  i5248.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5249[14], i5248.stencilRef)
  i5248.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5249[15], i5248.stencilReadMask)
  i5248.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5249[16], i5248.stencilWriteMask)
  i5248.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i5249[17], i5248.stencilOp)
  i5248.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i5249[18], i5248.stencilOpFront)
  i5248.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i5249[19], i5248.stencilOpBack)
  var i5251 = i5249[20]
  var i5250 = []
  for(var i = 0; i < i5251.length; i += 1) {
    i5250.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i5251[i + 0]) );
  }
  i5248.tags = i5250
  var i5253 = i5249[21]
  var i5252 = []
  for(var i = 0; i < i5253.length; i += 1) {
    i5252.push( i5253[i + 0] );
  }
  i5248.passDefinedKeywords = i5252
  var i5255 = i5249[22]
  var i5254 = []
  for(var i = 0; i < i5255.length; i += 1) {
    i5254.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i5255[i + 0]) );
  }
  i5248.passDefinedKeywordGroups = i5254
  var i5257 = i5249[23]
  var i5256 = []
  for(var i = 0; i < i5257.length; i += 1) {
    i5256.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i5257[i + 0]) );
  }
  i5248.variants = i5256
  var i5259 = i5249[24]
  var i5258 = []
  for(var i = 0; i < i5259.length; i += 1) {
    i5258.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i5259[i + 0]) );
  }
  i5248.excludedVariants = i5258
  i5248.hasDepthReader = !!i5249[25]
  return i5248
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i5260 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i5261 = data
  i5260.val = i5261[0]
  i5260.name = i5261[1]
  return i5260
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i5262 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i5263 = data
  i5262.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5263[0], i5262.src)
  i5262.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5263[1], i5262.dst)
  i5262.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5263[2], i5262.op)
  return i5262
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i5264 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i5265 = data
  i5264.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5265[0], i5264.pass)
  i5264.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5265[1], i5264.fail)
  i5264.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5265[2], i5264.zFail)
  i5264.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5265[3], i5264.comp)
  return i5264
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i5268 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i5269 = data
  i5268.name = i5269[0]
  i5268.value = i5269[1]
  return i5268
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i5272 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i5273 = data
  var i5275 = i5273[0]
  var i5274 = []
  for(var i = 0; i < i5275.length; i += 1) {
    i5274.push( i5275[i + 0] );
  }
  i5272.keywords = i5274
  i5272.hasDiscard = !!i5273[1]
  return i5272
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i5278 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i5279 = data
  i5278.passId = i5279[0]
  i5278.subShaderIndex = i5279[1]
  var i5281 = i5279[2]
  var i5280 = []
  for(var i = 0; i < i5281.length; i += 1) {
    i5280.push( i5281[i + 0] );
  }
  i5278.keywords = i5280
  i5278.vertexProgram = i5279[3]
  i5278.fragmentProgram = i5279[4]
  i5278.exportedForWebGl2 = !!i5279[5]
  i5278.readDepth = !!i5279[6]
  return i5278
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i5284 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i5285 = data
  request.r(i5285[0], i5285[1], 0, i5284, 'shader')
  i5284.pass = i5285[2]
  return i5284
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i5288 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i5289 = data
  i5288.name = i5289[0]
  i5288.type = i5289[1]
  i5288.value = new pc.Vec4( i5289[2], i5289[3], i5289[4], i5289[5] )
  i5288.textureValue = i5289[6]
  i5288.shaderPropertyFlag = i5289[7]
  return i5288
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i5290 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i5291 = data
  i5290.name = i5291[0]
  request.r(i5291[1], i5291[2], 0, i5290, 'texture')
  i5290.aabb = i5291[3]
  i5290.vertices = i5291[4]
  i5290.triangles = i5291[5]
  i5290.textureRect = UnityEngine.Rect.MinMaxRect(i5291[6], i5291[7], i5291[8], i5291[9])
  i5290.packedRect = UnityEngine.Rect.MinMaxRect(i5291[10], i5291[11], i5291[12], i5291[13])
  i5290.border = new pc.Vec4( i5291[14], i5291[15], i5291[16], i5291[17] )
  i5290.transparency = i5291[18]
  i5290.bounds = i5291[19]
  i5290.pixelsPerUnit = i5291[20]
  i5290.textureWidth = i5291[21]
  i5290.textureHeight = i5291[22]
  i5290.nativeSize = new pc.Vec2( i5291[23], i5291[24] )
  i5290.pivot = new pc.Vec2( i5291[25], i5291[26] )
  i5290.textureRectOffset = new pc.Vec2( i5291[27], i5291[28] )
  return i5290
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i5292 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i5293 = data
  i5292.name = i5293[0]
  return i5292
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i5294 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i5295 = data
  i5294.name = i5295[0]
  i5294.wrapMode = i5295[1]
  i5294.isLooping = !!i5295[2]
  i5294.length = i5295[3]
  var i5297 = i5295[4]
  var i5296 = []
  for(var i = 0; i < i5297.length; i += 1) {
    i5296.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i5297[i + 0]) );
  }
  i5294.curves = i5296
  var i5299 = i5295[5]
  var i5298 = []
  for(var i = 0; i < i5299.length; i += 1) {
    i5298.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i5299[i + 0]) );
  }
  i5294.events = i5298
  i5294.halfPrecision = !!i5295[6]
  i5294._frameRate = i5295[7]
  i5294.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i5295[8], i5294.localBounds)
  i5294.hasMuscleCurves = !!i5295[9]
  var i5301 = i5295[10]
  var i5300 = []
  for(var i = 0; i < i5301.length; i += 1) {
    i5300.push( i5301[i + 0] );
  }
  i5294.clipMuscleConstant = i5300
  i5294.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i5295[11], i5294.clipBindingConstant)
  return i5294
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i5304 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i5305 = data
  i5304.path = i5305[0]
  i5304.hash = i5305[1]
  i5304.componentType = i5305[2]
  i5304.property = i5305[3]
  i5304.keys = i5305[4]
  var i5307 = i5305[5]
  var i5306 = []
  for(var i = 0; i < i5307.length; i += 1) {
    i5306.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i5307[i + 0]) );
  }
  i5304.objectReferenceKeys = i5306
  return i5304
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i5310 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i5311 = data
  i5310.time = i5311[0]
  request.r(i5311[1], i5311[2], 0, i5310, 'value')
  return i5310
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i5314 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i5315 = data
  i5314.functionName = i5315[0]
  i5314.floatParameter = i5315[1]
  i5314.intParameter = i5315[2]
  i5314.stringParameter = i5315[3]
  request.r(i5315[4], i5315[5], 0, i5314, 'objectReferenceParameter')
  i5314.time = i5315[6]
  return i5314
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i5316 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i5317 = data
  i5316.center = new pc.Vec3( i5317[0], i5317[1], i5317[2] )
  i5316.extends = new pc.Vec3( i5317[3], i5317[4], i5317[5] )
  return i5316
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i5320 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i5321 = data
  var i5323 = i5321[0]
  var i5322 = []
  for(var i = 0; i < i5323.length; i += 1) {
    i5322.push( i5323[i + 0] );
  }
  i5320.genericBindings = i5322
  var i5325 = i5321[1]
  var i5324 = []
  for(var i = 0; i < i5325.length; i += 1) {
    i5324.push( i5325[i + 0] );
  }
  i5320.pptrCurveMapping = i5324
  return i5320
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i5326 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i5327 = data
  i5326.name = i5327[0]
  var i5329 = i5327[1]
  var i5328 = []
  for(var i = 0; i < i5329.length; i += 1) {
    i5328.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i5329[i + 0]) );
  }
  i5326.layers = i5328
  var i5331 = i5327[2]
  var i5330 = []
  for(var i = 0; i < i5331.length; i += 1) {
    i5330.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i5331[i + 0]) );
  }
  i5326.parameters = i5330
  i5326.animationClips = i5327[3]
  i5326.avatarUnsupported = i5327[4]
  return i5326
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i5334 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i5335 = data
  i5334.name = i5335[0]
  i5334.defaultWeight = i5335[1]
  i5334.blendingMode = i5335[2]
  i5334.avatarMask = i5335[3]
  i5334.syncedLayerIndex = i5335[4]
  i5334.syncedLayerAffectsTiming = !!i5335[5]
  i5334.syncedLayers = i5335[6]
  i5334.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i5335[7], i5334.stateMachine)
  return i5334
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i5336 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i5337 = data
  i5336.id = i5337[0]
  i5336.name = i5337[1]
  i5336.path = i5337[2]
  var i5339 = i5337[3]
  var i5338 = []
  for(var i = 0; i < i5339.length; i += 1) {
    i5338.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i5339[i + 0]) );
  }
  i5336.states = i5338
  var i5341 = i5337[4]
  var i5340 = []
  for(var i = 0; i < i5341.length; i += 1) {
    i5340.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i5341[i + 0]) );
  }
  i5336.machines = i5340
  var i5343 = i5337[5]
  var i5342 = []
  for(var i = 0; i < i5343.length; i += 1) {
    i5342.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i5343[i + 0]) );
  }
  i5336.entryStateTransitions = i5342
  var i5345 = i5337[6]
  var i5344 = []
  for(var i = 0; i < i5345.length; i += 1) {
    i5344.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i5345[i + 0]) );
  }
  i5336.exitStateTransitions = i5344
  var i5347 = i5337[7]
  var i5346 = []
  for(var i = 0; i < i5347.length; i += 1) {
    i5346.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i5347[i + 0]) );
  }
  i5336.anyStateTransitions = i5346
  i5336.defaultStateId = i5337[8]
  return i5336
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i5350 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i5351 = data
  i5350.id = i5351[0]
  i5350.name = i5351[1]
  i5350.cycleOffset = i5351[2]
  i5350.cycleOffsetParameter = i5351[3]
  i5350.cycleOffsetParameterActive = !!i5351[4]
  i5350.mirror = !!i5351[5]
  i5350.mirrorParameter = i5351[6]
  i5350.mirrorParameterActive = !!i5351[7]
  i5350.motionId = i5351[8]
  i5350.nameHash = i5351[9]
  i5350.fullPathHash = i5351[10]
  i5350.speed = i5351[11]
  i5350.speedParameter = i5351[12]
  i5350.speedParameterActive = !!i5351[13]
  i5350.tag = i5351[14]
  i5350.tagHash = i5351[15]
  i5350.writeDefaultValues = !!i5351[16]
  var i5353 = i5351[17]
  var i5352 = []
  for(var i = 0; i < i5353.length; i += 2) {
  request.r(i5353[i + 0], i5353[i + 1], 2, i5352, '')
  }
  i5350.behaviours = i5352
  var i5355 = i5351[18]
  var i5354 = []
  for(var i = 0; i < i5355.length; i += 1) {
    i5354.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i5355[i + 0]) );
  }
  i5350.transitions = i5354
  return i5350
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i5360 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i5361 = data
  i5360.fullPath = i5361[0]
  i5360.canTransitionToSelf = !!i5361[1]
  i5360.duration = i5361[2]
  i5360.exitTime = i5361[3]
  i5360.hasExitTime = !!i5361[4]
  i5360.hasFixedDuration = !!i5361[5]
  i5360.interruptionSource = i5361[6]
  i5360.offset = i5361[7]
  i5360.orderedInterruption = !!i5361[8]
  i5360.destinationStateId = i5361[9]
  i5360.isExit = !!i5361[10]
  i5360.mute = !!i5361[11]
  i5360.solo = !!i5361[12]
  var i5363 = i5361[13]
  var i5362 = []
  for(var i = 0; i < i5363.length; i += 1) {
    i5362.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i5363[i + 0]) );
  }
  i5360.conditions = i5362
  return i5360
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i5368 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i5369 = data
  i5368.destinationStateId = i5369[0]
  i5368.isExit = !!i5369[1]
  i5368.mute = !!i5369[2]
  i5368.solo = !!i5369[3]
  var i5371 = i5369[4]
  var i5370 = []
  for(var i = 0; i < i5371.length; i += 1) {
    i5370.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i5371[i + 0]) );
  }
  i5368.conditions = i5370
  return i5368
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i5374 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i5375 = data
  i5374.defaultBool = !!i5375[0]
  i5374.defaultFloat = i5375[1]
  i5374.defaultInt = i5375[2]
  i5374.name = i5375[3]
  i5374.nameHash = i5375[4]
  i5374.type = i5375[5]
  return i5374
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i5378 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i5379 = data
  i5378.mode = i5379[0]
  i5378.parameter = i5379[1]
  i5378.threshold = i5379[2]
  return i5378
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i5380 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i5381 = data
  i5380.name = i5381[0]
  i5380.bytes64 = i5381[1]
  i5380.data = i5381[2]
  return i5380
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i5382 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i5383 = data
  i5382.useSafeMode = !!i5383[0]
  i5382.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i5383[1], i5382.safeModeOptions)
  i5382.timeScale = i5383[2]
  i5382.unscaledTimeScale = i5383[3]
  i5382.useSmoothDeltaTime = !!i5383[4]
  i5382.maxSmoothUnscaledTime = i5383[5]
  i5382.rewindCallbackMode = i5383[6]
  i5382.showUnityEditorReport = !!i5383[7]
  i5382.logBehaviour = i5383[8]
  i5382.drawGizmos = !!i5383[9]
  i5382.defaultRecyclable = !!i5383[10]
  i5382.defaultAutoPlay = i5383[11]
  i5382.defaultUpdateType = i5383[12]
  i5382.defaultTimeScaleIndependent = !!i5383[13]
  i5382.defaultEaseType = i5383[14]
  i5382.defaultEaseOvershootOrAmplitude = i5383[15]
  i5382.defaultEasePeriod = i5383[16]
  i5382.defaultAutoKill = !!i5383[17]
  i5382.defaultLoopType = i5383[18]
  i5382.debugMode = !!i5383[19]
  i5382.debugStoreTargetId = !!i5383[20]
  i5382.showPreviewPanel = !!i5383[21]
  i5382.storeSettingsLocation = i5383[22]
  i5382.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i5383[23], i5382.modules)
  i5382.createASMDEF = !!i5383[24]
  i5382.showPlayingTweens = !!i5383[25]
  i5382.showPausedTweens = !!i5383[26]
  return i5382
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i5384 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i5385 = data
  i5384.logBehaviour = i5385[0]
  i5384.nestedTweenFailureBehaviour = i5385[1]
  return i5384
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i5386 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i5387 = data
  i5386.showPanel = !!i5387[0]
  i5386.audioEnabled = !!i5387[1]
  i5386.physicsEnabled = !!i5387[2]
  i5386.physics2DEnabled = !!i5387[3]
  i5386.spriteEnabled = !!i5387[4]
  i5386.uiEnabled = !!i5387[5]
  i5386.uiToolkitEnabled = !!i5387[6]
  i5386.textMeshProEnabled = !!i5387[7]
  i5386.tk2DEnabled = !!i5387[8]
  i5386.deAudioEnabled = !!i5387[9]
  i5386.deUnityExtendedEnabled = !!i5387[10]
  i5386.epoOutlineEnabled = !!i5387[11]
  return i5386
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i5388 = root || request.c( 'TMPro.TMP_Settings' )
  var i5389 = data
  i5388.assetVersion = i5389[0]
  i5388.m_TextWrappingMode = i5389[1]
  i5388.m_enableKerning = !!i5389[2]
  var i5391 = i5389[3]
  var i5390 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i5391.length; i += 1) {
    i5390.add(i5391[i + 0]);
  }
  i5388.m_ActiveFontFeatures = i5390
  i5388.m_enableExtraPadding = !!i5389[4]
  i5388.m_enableTintAllSprites = !!i5389[5]
  i5388.m_enableParseEscapeCharacters = !!i5389[6]
  i5388.m_EnableRaycastTarget = !!i5389[7]
  i5388.m_GetFontFeaturesAtRuntime = !!i5389[8]
  i5388.m_missingGlyphCharacter = i5389[9]
  i5388.m_ClearDynamicDataOnBuild = !!i5389[10]
  i5388.m_warningsDisabled = !!i5389[11]
  request.r(i5389[12], i5389[13], 0, i5388, 'm_defaultFontAsset')
  i5388.m_defaultFontAssetPath = i5389[14]
  i5388.m_defaultFontSize = i5389[15]
  i5388.m_defaultAutoSizeMinRatio = i5389[16]
  i5388.m_defaultAutoSizeMaxRatio = i5389[17]
  i5388.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i5389[18], i5389[19] )
  i5388.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i5389[20], i5389[21] )
  i5388.m_autoSizeTextContainer = !!i5389[22]
  i5388.m_IsTextObjectScaleStatic = !!i5389[23]
  var i5393 = i5389[24]
  var i5392 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i5393.length; i += 2) {
  request.r(i5393[i + 0], i5393[i + 1], 1, i5392, '')
  }
  i5388.m_fallbackFontAssets = i5392
  i5388.m_matchMaterialPreset = !!i5389[25]
  i5388.m_HideSubTextObjects = !!i5389[26]
  request.r(i5389[27], i5389[28], 0, i5388, 'm_defaultSpriteAsset')
  i5388.m_defaultSpriteAssetPath = i5389[29]
  i5388.m_enableEmojiSupport = !!i5389[30]
  i5388.m_MissingCharacterSpriteUnicode = i5389[31]
  var i5395 = i5389[32]
  var i5394 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i5395.length; i += 2) {
  request.r(i5395[i + 0], i5395[i + 1], 1, i5394, '')
  }
  i5388.m_EmojiFallbackTextAssets = i5394
  i5388.m_defaultColorGradientPresetsPath = i5389[33]
  request.r(i5389[34], i5389[35], 0, i5388, 'm_defaultStyleSheet')
  i5388.m_StyleSheetsResourcePath = i5389[36]
  request.r(i5389[37], i5389[38], 0, i5388, 'm_leadingCharacters')
  request.r(i5389[39], i5389[40], 0, i5388, 'm_followingCharacters')
  i5388.m_UseModernHangulLineBreakingRules = !!i5389[41]
  return i5388
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i5402 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i5403 = data
  request.r(i5403[0], i5403[1], 0, i5402, 'spriteSheet')
  var i5405 = i5403[2]
  var i5404 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i5405.length; i += 1) {
    i5404.add(request.d('TMPro.TMP_Sprite', i5405[i + 0]));
  }
  i5402.spriteInfoList = i5404
  var i5407 = i5403[3]
  var i5406 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i5407.length; i += 2) {
  request.r(i5407[i + 0], i5407[i + 1], 1, i5406, '')
  }
  i5402.fallbackSpriteAssets = i5406
  var i5409 = i5403[4]
  var i5408 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i5409.length; i += 1) {
    i5408.add(request.d('TMPro.TMP_SpriteCharacter', i5409[i + 0]));
  }
  i5402.m_SpriteCharacterTable = i5408
  var i5411 = i5403[5]
  var i5410 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i5411.length; i += 1) {
    i5410.add(request.d('TMPro.TMP_SpriteGlyph', i5411[i + 0]));
  }
  i5402.m_GlyphTable = i5410
  i5402.m_Version = i5403[6]
  i5402.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i5403[7], i5402.m_FaceInfo)
  request.r(i5403[8], i5403[9], 0, i5402, 'm_Material')
  return i5402
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i5414 = root || request.c( 'TMPro.TMP_Sprite' )
  var i5415 = data
  i5414.name = i5415[0]
  i5414.hashCode = i5415[1]
  i5414.unicode = i5415[2]
  i5414.pivot = new pc.Vec2( i5415[3], i5415[4] )
  request.r(i5415[5], i5415[6], 0, i5414, 'sprite')
  i5414.id = i5415[7]
  i5414.x = i5415[8]
  i5414.y = i5415[9]
  i5414.width = i5415[10]
  i5414.height = i5415[11]
  i5414.xOffset = i5415[12]
  i5414.yOffset = i5415[13]
  i5414.xAdvance = i5415[14]
  i5414.scale = i5415[15]
  return i5414
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i5420 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i5421 = data
  i5420.m_Name = i5421[0]
  i5420.m_ElementType = i5421[1]
  i5420.m_Unicode = i5421[2]
  i5420.m_GlyphIndex = i5421[3]
  i5420.m_Scale = i5421[4]
  return i5420
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i5424 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i5425 = data
  request.r(i5425[0], i5425[1], 0, i5424, 'sprite')
  i5424.m_Index = i5425[2]
  i5424.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i5425[3], i5424.m_Metrics)
  i5424.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i5425[4], i5424.m_GlyphRect)
  i5424.m_Scale = i5425[5]
  i5424.m_AtlasIndex = i5425[6]
  i5424.m_ClassDefinitionType = i5425[7]
  return i5424
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i5426 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i5427 = data
  i5426.m_Width = i5427[0]
  i5426.m_Height = i5427[1]
  i5426.m_HorizontalBearingX = i5427[2]
  i5426.m_HorizontalBearingY = i5427[3]
  i5426.m_HorizontalAdvance = i5427[4]
  return i5426
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i5428 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i5429 = data
  i5428.m_X = i5429[0]
  i5428.m_Y = i5429[1]
  i5428.m_Width = i5429[2]
  i5428.m_Height = i5429[3]
  return i5428
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i5430 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i5431 = data
  i5430.m_FaceIndex = i5431[0]
  i5430.m_FamilyName = i5431[1]
  i5430.m_StyleName = i5431[2]
  i5430.m_PointSize = i5431[3]
  i5430.m_Scale = i5431[4]
  i5430.m_UnitsPerEM = i5431[5]
  i5430.m_LineHeight = i5431[6]
  i5430.m_AscentLine = i5431[7]
  i5430.m_CapLine = i5431[8]
  i5430.m_MeanLine = i5431[9]
  i5430.m_Baseline = i5431[10]
  i5430.m_DescentLine = i5431[11]
  i5430.m_SuperscriptOffset = i5431[12]
  i5430.m_SuperscriptSize = i5431[13]
  i5430.m_SubscriptOffset = i5431[14]
  i5430.m_SubscriptSize = i5431[15]
  i5430.m_UnderlineOffset = i5431[16]
  i5430.m_UnderlineThickness = i5431[17]
  i5430.m_StrikethroughOffset = i5431[18]
  i5430.m_StrikethroughThickness = i5431[19]
  i5430.m_TabWidth = i5431[20]
  return i5430
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i5432 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i5433 = data
  var i5435 = i5433[0]
  var i5434 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i5435.length; i += 1) {
    i5434.add(request.d('TMPro.TMP_Style', i5435[i + 0]));
  }
  i5432.m_StyleList = i5434
  return i5432
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i5438 = root || request.c( 'TMPro.TMP_Style' )
  var i5439 = data
  i5438.m_Name = i5439[0]
  i5438.m_HashCode = i5439[1]
  i5438.m_OpeningDefinition = i5439[2]
  i5438.m_ClosingDefinition = i5439[3]
  i5438.m_OpeningTagArray = i5439[4]
  i5438.m_ClosingTagArray = i5439[5]
  return i5438
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i5440 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i5441 = data
  var i5443 = i5441[0]
  var i5442 = []
  for(var i = 0; i < i5443.length; i += 1) {
    i5442.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i5443[i + 0]) );
  }
  i5440.files = i5442
  i5440.componentToPrefabIds = i5441[1]
  return i5440
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i5446 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i5447 = data
  i5446.path = i5447[0]
  request.r(i5447[1], i5447[2], 0, i5446, 'unityObject')
  return i5446
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i5448 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i5449 = data
  var i5451 = i5449[0]
  var i5450 = []
  for(var i = 0; i < i5451.length; i += 1) {
    i5450.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i5451[i + 0]) );
  }
  i5448.scriptsExecutionOrder = i5450
  var i5453 = i5449[1]
  var i5452 = []
  for(var i = 0; i < i5453.length; i += 1) {
    i5452.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i5453[i + 0]) );
  }
  i5448.sortingLayers = i5452
  var i5455 = i5449[2]
  var i5454 = []
  for(var i = 0; i < i5455.length; i += 1) {
    i5454.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i5455[i + 0]) );
  }
  i5448.cullingLayers = i5454
  i5448.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i5449[3], i5448.timeSettings)
  i5448.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i5449[4], i5448.physicsSettings)
  i5448.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i5449[5], i5448.physics2DSettings)
  i5448.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i5449[6], i5448.qualitySettings)
  i5448.enableRealtimeShadows = !!i5449[7]
  i5448.enableAutoInstancing = !!i5449[8]
  i5448.enableStaticBatching = !!i5449[9]
  i5448.enableDynamicBatching = !!i5449[10]
  i5448.lightmapEncodingQuality = i5449[11]
  i5448.desiredColorSpace = i5449[12]
  var i5457 = i5449[13]
  var i5456 = []
  for(var i = 0; i < i5457.length; i += 1) {
    i5456.push( i5457[i + 0] );
  }
  i5448.allTags = i5456
  return i5448
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i5460 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i5461 = data
  i5460.name = i5461[0]
  i5460.value = i5461[1]
  return i5460
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i5464 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i5465 = data
  i5464.id = i5465[0]
  i5464.name = i5465[1]
  i5464.value = i5465[2]
  return i5464
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i5468 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i5469 = data
  i5468.id = i5469[0]
  i5468.name = i5469[1]
  return i5468
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i5470 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i5471 = data
  i5470.fixedDeltaTime = i5471[0]
  i5470.maximumDeltaTime = i5471[1]
  i5470.timeScale = i5471[2]
  i5470.maximumParticleTimestep = i5471[3]
  return i5470
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i5472 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i5473 = data
  i5472.gravity = new pc.Vec3( i5473[0], i5473[1], i5473[2] )
  i5472.defaultSolverIterations = i5473[3]
  i5472.bounceThreshold = i5473[4]
  i5472.autoSyncTransforms = !!i5473[5]
  i5472.autoSimulation = !!i5473[6]
  var i5475 = i5473[7]
  var i5474 = []
  for(var i = 0; i < i5475.length; i += 1) {
    i5474.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i5475[i + 0]) );
  }
  i5472.collisionMatrix = i5474
  return i5472
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i5478 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i5479 = data
  i5478.enabled = !!i5479[0]
  i5478.layerId = i5479[1]
  i5478.otherLayerId = i5479[2]
  return i5478
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i5480 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i5481 = data
  request.r(i5481[0], i5481[1], 0, i5480, 'material')
  i5480.gravity = new pc.Vec2( i5481[2], i5481[3] )
  i5480.positionIterations = i5481[4]
  i5480.velocityIterations = i5481[5]
  i5480.velocityThreshold = i5481[6]
  i5480.maxLinearCorrection = i5481[7]
  i5480.maxAngularCorrection = i5481[8]
  i5480.maxTranslationSpeed = i5481[9]
  i5480.maxRotationSpeed = i5481[10]
  i5480.baumgarteScale = i5481[11]
  i5480.baumgarteTOIScale = i5481[12]
  i5480.timeToSleep = i5481[13]
  i5480.linearSleepTolerance = i5481[14]
  i5480.angularSleepTolerance = i5481[15]
  i5480.defaultContactOffset = i5481[16]
  i5480.autoSimulation = !!i5481[17]
  i5480.queriesHitTriggers = !!i5481[18]
  i5480.queriesStartInColliders = !!i5481[19]
  i5480.callbacksOnDisable = !!i5481[20]
  i5480.reuseCollisionCallbacks = !!i5481[21]
  i5480.autoSyncTransforms = !!i5481[22]
  var i5483 = i5481[23]
  var i5482 = []
  for(var i = 0; i < i5483.length; i += 1) {
    i5482.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i5483[i + 0]) );
  }
  i5480.collisionMatrix = i5482
  return i5480
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i5486 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i5487 = data
  i5486.enabled = !!i5487[0]
  i5486.layerId = i5487[1]
  i5486.otherLayerId = i5487[2]
  return i5486
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i5488 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i5489 = data
  var i5491 = i5489[0]
  var i5490 = []
  for(var i = 0; i < i5491.length; i += 1) {
    i5490.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i5491[i + 0]) );
  }
  i5488.qualityLevels = i5490
  var i5493 = i5489[1]
  var i5492 = []
  for(var i = 0; i < i5493.length; i += 1) {
    i5492.push( i5493[i + 0] );
  }
  i5488.names = i5492
  i5488.shadows = i5489[2]
  i5488.anisotropicFiltering = i5489[3]
  i5488.antiAliasing = i5489[4]
  i5488.lodBias = i5489[5]
  i5488.shadowCascades = i5489[6]
  i5488.shadowDistance = i5489[7]
  i5488.shadowmaskMode = i5489[8]
  i5488.shadowProjection = i5489[9]
  i5488.shadowResolution = i5489[10]
  i5488.softParticles = !!i5489[11]
  i5488.softVegetation = !!i5489[12]
  i5488.activeColorSpace = i5489[13]
  i5488.desiredColorSpace = i5489[14]
  i5488.masterTextureLimit = i5489[15]
  i5488.maxQueuedFrames = i5489[16]
  i5488.particleRaycastBudget = i5489[17]
  i5488.pixelLightCount = i5489[18]
  i5488.realtimeReflectionProbes = !!i5489[19]
  i5488.shadowCascade2Split = i5489[20]
  i5488.shadowCascade4Split = new pc.Vec3( i5489[21], i5489[22], i5489[23] )
  i5488.streamingMipmapsActive = !!i5489[24]
  i5488.vSyncCount = i5489[25]
  i5488.asyncUploadBufferSize = i5489[26]
  i5488.asyncUploadTimeSlice = i5489[27]
  i5488.billboardsFaceCameraPosition = !!i5489[28]
  i5488.shadowNearPlaneOffset = i5489[29]
  i5488.streamingMipmapsMemoryBudget = i5489[30]
  i5488.maximumLODLevel = i5489[31]
  i5488.streamingMipmapsAddAllCameras = !!i5489[32]
  i5488.streamingMipmapsMaxLevelReduction = i5489[33]
  i5488.streamingMipmapsRenderersPerFrame = i5489[34]
  i5488.resolutionScalingFixedDPIFactor = i5489[35]
  i5488.streamingMipmapsMaxFileIORequests = i5489[36]
  i5488.currentQualityLevel = i5489[37]
  return i5488
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i5498 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i5499 = data
  i5498.weight = i5499[0]
  i5498.vertices = i5499[1]
  i5498.normals = i5499[2]
  i5498.tangents = i5499[3]
  return i5498
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.SpriteMask":{"frontSortingLayerID":0,"frontSortingOrder":1,"backSortingLayerID":2,"backSortingOrder":3,"alphaCutoff":4,"sprite":5,"tileMode":7,"isCustomRangeActive":8,"spriteSortPoint":9,"enabled":10,"sharedMaterial":11,"sharedMaterials":13,"receiveShadows":14,"shadowCastingMode":15,"sortingLayerID":16,"sortingOrder":17,"lightmapIndex":18,"lightmapSceneIndex":19,"lightmapScaleOffset":20,"lightProbeUsage":24,"reflectionProbeUsage":25},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"42":[43],"44":[43],"45":[43],"46":[43],"47":[43],"48":[43],"49":[50],"51":[2],"52":[53],"54":[53],"55":[53],"56":[53],"57":[53],"58":[53],"59":[60],"61":[60],"62":[60],"63":[60],"64":[60],"65":[60],"66":[60],"67":[60],"68":[60],"69":[60],"70":[60],"71":[60],"72":[60],"73":[2],"74":[75],"76":[77],"78":[77],"23":[22],"6":[2],"79":[60],"80":[32],"81":[12],"82":[2],"83":[84],"85":[34],"86":[23],"87":[22],"88":[75,22],"89":[22,27],"90":[22],"91":[27,22],"92":[75],"93":[27,22],"94":[22],"95":[96],"97":[96],"98":[96],"99":[22],"100":[22],"26":[23],"28":[27,22],"101":[22],"25":[23],"102":[22],"103":[22],"104":[22],"105":[22],"106":[22],"107":[22],"108":[22],"109":[22],"110":[22],"111":[27,22],"112":[22],"113":[22],"114":[22],"115":[22],"116":[27,22],"117":[22],"118":[34],"119":[34],"35":[34],"120":[34],"121":[2],"122":[2]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.MonoBehaviour","CameraFollow2D","AutoCameraFit","UnityEngine.Transform","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Mesh","UnityEngine.Material","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","MoveBetweenPoints","PlayerCardUIManager","UnityEngine.GameObject","Ply_SoundManager","UnityEngine.AudioClip","UnityEngine.AudioSource","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.UI.Button","HairCutController","UnityEngine.SpriteMask","UnityEngine.BoxCollider2D","HideOnFirstClick","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_FontAsset","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","BatStrikeController","SlotTrigger","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.InputSystem.UI.InputSystemUIInputModule","UnityEngine.InputSystem.UI.TrackedDeviceRaycaster","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.38f1";

Deserializers.productName = "PLY_MiniSoccer";

Deserializers.lunaInitializationTime = "07/15/2026 03:53:54";

Deserializers.lunaDaysRunning = "23.2";

Deserializers.lunaVersion = "7.1.0";

Deserializers.lunaSHA = "cf93782349542fe0b84ad13951a26809f8419628";

Deserializers.creativeName = "PLY_V16";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1800";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4461";

Deserializers.runtimeAnalysisExcludedModules = "physics3d";

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

Deserializers.buildID = "ea7e63da-ca00-4a26-944b-6f78a19ecc04";

Deserializers.runtimeInitializeOnLoadInfos = [[["Unity","Services","Core","Internal","UnityServicesInitializer","EnableServicesInitializationAsync"],["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["DG","Tweening","DOTween","RuntimeOnLoad"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["Unity","Services","Core","Registration","CorePackageInitializer","InitializeOnLoad"],["Unity","Services","Core","Internal","TaskAsyncOperation","SetScheduler"],["Unity","Services","Core","Environments","Client","Scheduler","EngineStateHelper","Init"],["Unity","Services","Core","Environments","Client","Scheduler","ThreadHelper","Init"],["Ua2CoreInitializeCallback","Register"],["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["Unity","AI","Navigation","NavMeshLink","ClearTrackedList"],["Unity","AI","Navigation","NavMeshSurface","ClearNavMeshSurfaces"],["Unity","AI","Navigation","NavMeshModifierVolume","ClearNavMeshModifiers"],["Unity","AI","Navigation","NavMeshModifier","ClearNavMeshModifiers"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["Unity","Services","Core","Internal","UnityServicesInitializer","CreateStaticInstance"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[["Unity","Services","Core","Environments","Client","Http","JsonHelpers","RegisterTypesForAOT"]],[["Unity","Services","Core","UnityThreadUtils","CaptureUnityThreadInfo"],["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

