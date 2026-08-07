var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i6050 = root || request.c( 'UnityEngine.JointSpring' )
  var i6051 = data
  i6050.spring = i6051[0]
  i6050.damper = i6051[1]
  i6050.targetPosition = i6051[2]
  return i6050
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i6052 = root || request.c( 'UnityEngine.JointMotor' )
  var i6053 = data
  i6052.m_TargetVelocity = i6053[0]
  i6052.m_Force = i6053[1]
  i6052.m_FreeSpin = i6053[2]
  return i6052
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i6054 = root || request.c( 'UnityEngine.JointLimits' )
  var i6055 = data
  i6054.m_Min = i6055[0]
  i6054.m_Max = i6055[1]
  i6054.m_Bounciness = i6055[2]
  i6054.m_BounceMinVelocity = i6055[3]
  i6054.m_ContactDistance = i6055[4]
  i6054.minBounce = i6055[5]
  i6054.maxBounce = i6055[6]
  return i6054
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i6056 = root || request.c( 'UnityEngine.JointDrive' )
  var i6057 = data
  i6056.m_PositionSpring = i6057[0]
  i6056.m_PositionDamper = i6057[1]
  i6056.m_MaximumForce = i6057[2]
  i6056.m_UseAcceleration = i6057[3]
  return i6056
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i6058 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i6059 = data
  i6058.m_Spring = i6059[0]
  i6058.m_Damper = i6059[1]
  return i6058
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i6060 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i6061 = data
  i6060.m_Limit = i6061[0]
  i6060.m_Bounciness = i6061[1]
  i6060.m_ContactDistance = i6061[2]
  return i6060
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i6062 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i6063 = data
  i6062.m_ExtremumSlip = i6063[0]
  i6062.m_ExtremumValue = i6063[1]
  i6062.m_AsymptoteSlip = i6063[2]
  i6062.m_AsymptoteValue = i6063[3]
  i6062.m_Stiffness = i6063[4]
  return i6062
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i6064 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i6065 = data
  i6064.m_LowerAngle = i6065[0]
  i6064.m_UpperAngle = i6065[1]
  return i6064
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i6066 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i6067 = data
  i6066.m_MotorSpeed = i6067[0]
  i6066.m_MaximumMotorTorque = i6067[1]
  return i6066
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i6068 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i6069 = data
  i6068.m_DampingRatio = i6069[0]
  i6068.m_Frequency = i6069[1]
  i6068.m_Angle = i6069[2]
  return i6068
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i6070 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i6071 = data
  i6070.m_LowerTranslation = i6071[0]
  i6070.m_UpperTranslation = i6071[1]
  return i6070
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i6072 = root || new pc.UnityMaterial()
  var i6073 = data
  i6072.name = i6073[0]
  request.r(i6073[1], i6073[2], 0, i6072, 'shader')
  i6072.renderQueue = i6073[3]
  i6072.enableInstancing = !!i6073[4]
  var i6075 = i6073[5]
  var i6074 = []
  for(var i = 0; i < i6075.length; i += 1) {
    i6074.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i6075[i + 0]) );
  }
  i6072.floatParameters = i6074
  var i6077 = i6073[6]
  var i6076 = []
  for(var i = 0; i < i6077.length; i += 1) {
    i6076.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i6077[i + 0]) );
  }
  i6072.colorParameters = i6076
  var i6079 = i6073[7]
  var i6078 = []
  for(var i = 0; i < i6079.length; i += 1) {
    i6078.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i6079[i + 0]) );
  }
  i6072.vectorParameters = i6078
  var i6081 = i6073[8]
  var i6080 = []
  for(var i = 0; i < i6081.length; i += 1) {
    i6080.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i6081[i + 0]) );
  }
  i6072.textureParameters = i6080
  var i6083 = i6073[9]
  var i6082 = []
  for(var i = 0; i < i6083.length; i += 1) {
    i6082.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i6083[i + 0]) );
  }
  i6072.materialFlags = i6082
  return i6072
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i6086 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i6087 = data
  i6086.name = i6087[0]
  i6086.value = i6087[1]
  return i6086
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i6090 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i6091 = data
  i6090.name = i6091[0]
  i6090.value = new pc.Color(i6091[1], i6091[2], i6091[3], i6091[4])
  return i6090
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i6094 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i6095 = data
  i6094.name = i6095[0]
  i6094.value = new pc.Vec4( i6095[1], i6095[2], i6095[3], i6095[4] )
  return i6094
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i6098 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i6099 = data
  i6098.name = i6099[0]
  request.r(i6099[1], i6099[2], 0, i6098, 'value')
  return i6098
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i6102 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i6103 = data
  i6102.name = i6103[0]
  i6102.enabled = !!i6103[1]
  return i6102
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i6104 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i6105 = data
  i6104.name = i6105[0]
  i6104.width = i6105[1]
  i6104.height = i6105[2]
  i6104.mipmapCount = i6105[3]
  i6104.anisoLevel = i6105[4]
  i6104.filterMode = i6105[5]
  i6104.hdr = !!i6105[6]
  i6104.format = i6105[7]
  i6104.wrapMode = i6105[8]
  i6104.alphaIsTransparency = !!i6105[9]
  i6104.alphaSource = i6105[10]
  i6104.graphicsFormat = i6105[11]
  i6104.sRGBTexture = !!i6105[12]
  i6104.desiredColorSpace = i6105[13]
  i6104.wrapU = i6105[14]
  i6104.wrapV = i6105[15]
  return i6104
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i6106 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i6107 = data
  i6106.name = i6107[0]
  i6106.halfPrecision = !!i6107[1]
  i6106.useSimplification = !!i6107[2]
  i6106.useUInt32IndexFormat = !!i6107[3]
  i6106.vertexCount = i6107[4]
  i6106.aabb = i6107[5]
  var i6109 = i6107[6]
  var i6108 = []
  for(var i = 0; i < i6109.length; i += 1) {
    i6108.push( !!i6109[i + 0] );
  }
  i6106.streams = i6108
  i6106.vertices = i6107[7]
  var i6111 = i6107[8]
  var i6110 = []
  for(var i = 0; i < i6111.length; i += 1) {
    i6110.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i6111[i + 0]) );
  }
  i6106.subMeshes = i6110
  var i6113 = i6107[9]
  var i6112 = []
  for(var i = 0; i < i6113.length; i += 16) {
    i6112.push( new pc.Mat4().setData(i6113[i + 0], i6113[i + 1], i6113[i + 2], i6113[i + 3],  i6113[i + 4], i6113[i + 5], i6113[i + 6], i6113[i + 7],  i6113[i + 8], i6113[i + 9], i6113[i + 10], i6113[i + 11],  i6113[i + 12], i6113[i + 13], i6113[i + 14], i6113[i + 15]) );
  }
  i6106.bindposes = i6112
  var i6115 = i6107[10]
  var i6114 = []
  for(var i = 0; i < i6115.length; i += 1) {
    i6114.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i6115[i + 0]) );
  }
  i6106.blendShapes = i6114
  return i6106
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i6120 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i6121 = data
  i6120.triangles = i6121[0]
  return i6120
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i6126 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i6127 = data
  i6126.name = i6127[0]
  var i6129 = i6127[1]
  var i6128 = []
  for(var i = 0; i < i6129.length; i += 1) {
    i6128.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i6129[i + 0]) );
  }
  i6126.frames = i6128
  return i6126
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i6130 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i6131 = data
  i6130.name = i6131[0]
  i6130.index = i6131[1]
  i6130.startup = !!i6131[2]
  return i6130
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i6132 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i6133 = data
  i6132.aspect = i6133[0]
  i6132.orthographic = !!i6133[1]
  i6132.orthographicSize = i6133[2]
  i6132.backgroundColor = new pc.Color(i6133[3], i6133[4], i6133[5], i6133[6])
  i6132.nearClipPlane = i6133[7]
  i6132.farClipPlane = i6133[8]
  i6132.fieldOfView = i6133[9]
  i6132.depth = i6133[10]
  i6132.clearFlags = i6133[11]
  i6132.cullingMask = i6133[12]
  i6132.rect = i6133[13]
  request.r(i6133[14], i6133[15], 0, i6132, 'targetTexture')
  i6132.usePhysicalProperties = !!i6133[16]
  i6132.focalLength = i6133[17]
  i6132.sensorSize = new pc.Vec2( i6133[18], i6133[19] )
  i6132.lensShift = new pc.Vec2( i6133[20], i6133[21] )
  i6132.gateFit = i6133[22]
  i6132.commandBufferCount = i6133[23]
  i6132.cameraType = i6133[24]
  i6132.enabled = !!i6133[25]
  return i6132
}

Deserializers["CameraFollow2D"] = function (request, data, root) {
  var i6134 = root || request.c( 'CameraFollow2D' )
  var i6135 = data
  request.r(i6135[0], i6135[1], 0, i6134, 'target')
  i6134.smoothSpeed = i6135[2]
  i6134.offset = new pc.Vec3( i6135[3], i6135[4], i6135[5] )
  i6134.followY = !!i6135[6]
  return i6134
}

Deserializers["AutoCameraFit"] = function (request, data, root) {
  var i6136 = root || request.c( 'AutoCameraFit' )
  var i6137 = data
  request.r(i6137[0], i6137[1], 0, i6136, 'tallScreenObject')
  i6136.tallScreenRatioThreshold = i6137[2]
  i6136.tallScreenYOffset = i6137[3]
  request.r(i6137[4], i6137[5], 0, i6136, 'canvasBtn')
  request.r(i6137[6], i6137[7], 0, i6136, 'targetArea')
  i6136.paddingLandscape = i6137[8]
  i6136.paddingPortrait = i6137[9]
  i6136.extraPaddingSmallScreen = i6137[10]
  i6136.smallScreenThreshold = i6137[11]
  i6136.autoUpdateOnResize = !!i6137[12]
  i6136.adjustInEditMode = !!i6137[13]
  return i6136
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i6138 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i6139 = data
  i6138.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i6139[0], i6138.main)
  i6138.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i6139[1], i6138.colorBySpeed)
  i6138.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i6139[2], i6138.colorOverLifetime)
  i6138.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i6139[3], i6138.emission)
  i6138.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i6139[4], i6138.rotationBySpeed)
  i6138.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i6139[5], i6138.rotationOverLifetime)
  i6138.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i6139[6], i6138.shape)
  i6138.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i6139[7], i6138.sizeBySpeed)
  i6138.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i6139[8], i6138.sizeOverLifetime)
  i6138.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i6139[9], i6138.textureSheetAnimation)
  i6138.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i6139[10], i6138.velocityOverLifetime)
  i6138.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i6139[11], i6138.noise)
  i6138.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i6139[12], i6138.inheritVelocity)
  i6138.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i6139[13], i6138.forceOverLifetime)
  i6138.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i6139[14], i6138.limitVelocityOverLifetime)
  i6138.useAutoRandomSeed = !!i6139[15]
  i6138.randomSeed = i6139[16]
  return i6138
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i6140 = root || new pc.ParticleSystemMain()
  var i6141 = data
  i6140.duration = i6141[0]
  i6140.loop = !!i6141[1]
  i6140.prewarm = !!i6141[2]
  i6140.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6141[3], i6140.startDelay)
  i6140.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6141[4], i6140.startLifetime)
  i6140.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6141[5], i6140.startSpeed)
  i6140.startSize3D = !!i6141[6]
  i6140.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6141[7], i6140.startSizeX)
  i6140.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6141[8], i6140.startSizeY)
  i6140.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6141[9], i6140.startSizeZ)
  i6140.startRotation3D = !!i6141[10]
  i6140.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6141[11], i6140.startRotationX)
  i6140.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6141[12], i6140.startRotationY)
  i6140.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6141[13], i6140.startRotationZ)
  i6140.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i6141[14], i6140.startColor)
  i6140.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6141[15], i6140.gravityModifier)
  i6140.simulationSpace = i6141[16]
  request.r(i6141[17], i6141[18], 0, i6140, 'customSimulationSpace')
  i6140.simulationSpeed = i6141[19]
  i6140.useUnscaledTime = !!i6141[20]
  i6140.scalingMode = i6141[21]
  i6140.playOnAwake = !!i6141[22]
  i6140.maxParticles = i6141[23]
  i6140.emitterVelocityMode = i6141[24]
  i6140.stopAction = i6141[25]
  return i6140
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i6142 = root || new pc.MinMaxCurve()
  var i6143 = data
  i6142.mode = i6143[0]
  i6142.curveMin = new pc.AnimationCurve( { keys_flow: i6143[1] } )
  i6142.curveMax = new pc.AnimationCurve( { keys_flow: i6143[2] } )
  i6142.curveMultiplier = i6143[3]
  i6142.constantMin = i6143[4]
  i6142.constantMax = i6143[5]
  return i6142
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i6144 = root || new pc.MinMaxGradient()
  var i6145 = data
  i6144.mode = i6145[0]
  i6144.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i6145[1], i6144.gradientMin)
  i6144.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i6145[2], i6144.gradientMax)
  i6144.colorMin = new pc.Color(i6145[3], i6145[4], i6145[5], i6145[6])
  i6144.colorMax = new pc.Color(i6145[7], i6145[8], i6145[9], i6145[10])
  return i6144
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i6146 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i6147 = data
  i6146.mode = i6147[0]
  var i6149 = i6147[1]
  var i6148 = []
  for(var i = 0; i < i6149.length; i += 1) {
    i6148.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i6149[i + 0]) );
  }
  i6146.colorKeys = i6148
  var i6151 = i6147[2]
  var i6150 = []
  for(var i = 0; i < i6151.length; i += 1) {
    i6150.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i6151[i + 0]) );
  }
  i6146.alphaKeys = i6150
  return i6146
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i6152 = root || new pc.ParticleSystemColorBySpeed()
  var i6153 = data
  i6152.enabled = !!i6153[0]
  i6152.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i6153[1], i6152.color)
  i6152.range = new pc.Vec2( i6153[2], i6153[3] )
  return i6152
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i6156 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i6157 = data
  i6156.color = new pc.Color(i6157[0], i6157[1], i6157[2], i6157[3])
  i6156.time = i6157[4]
  return i6156
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i6160 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i6161 = data
  i6160.alpha = i6161[0]
  i6160.time = i6161[1]
  return i6160
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i6162 = root || new pc.ParticleSystemColorOverLifetime()
  var i6163 = data
  i6162.enabled = !!i6163[0]
  i6162.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i6163[1], i6162.color)
  return i6162
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i6164 = root || new pc.ParticleSystemEmitter()
  var i6165 = data
  i6164.enabled = !!i6165[0]
  i6164.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6165[1], i6164.rateOverTime)
  i6164.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6165[2], i6164.rateOverDistance)
  var i6167 = i6165[3]
  var i6166 = []
  for(var i = 0; i < i6167.length; i += 1) {
    i6166.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i6167[i + 0]) );
  }
  i6164.bursts = i6166
  return i6164
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i6170 = root || new pc.ParticleSystemBurst()
  var i6171 = data
  i6170.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6171[0], i6170.count)
  i6170.cycleCount = i6171[1]
  i6170.minCount = i6171[2]
  i6170.maxCount = i6171[3]
  i6170.repeatInterval = i6171[4]
  i6170.time = i6171[5]
  return i6170
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i6172 = root || new pc.ParticleSystemRotationBySpeed()
  var i6173 = data
  i6172.enabled = !!i6173[0]
  i6172.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6173[1], i6172.x)
  i6172.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6173[2], i6172.y)
  i6172.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6173[3], i6172.z)
  i6172.separateAxes = !!i6173[4]
  i6172.range = new pc.Vec2( i6173[5], i6173[6] )
  return i6172
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i6174 = root || new pc.ParticleSystemRotationOverLifetime()
  var i6175 = data
  i6174.enabled = !!i6175[0]
  i6174.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6175[1], i6174.x)
  i6174.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6175[2], i6174.y)
  i6174.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6175[3], i6174.z)
  i6174.separateAxes = !!i6175[4]
  return i6174
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i6176 = root || new pc.ParticleSystemShape()
  var i6177 = data
  i6176.enabled = !!i6177[0]
  i6176.shapeType = i6177[1]
  i6176.randomDirectionAmount = i6177[2]
  i6176.sphericalDirectionAmount = i6177[3]
  i6176.randomPositionAmount = i6177[4]
  i6176.alignToDirection = !!i6177[5]
  i6176.radius = i6177[6]
  i6176.radiusMode = i6177[7]
  i6176.radiusSpread = i6177[8]
  i6176.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6177[9], i6176.radiusSpeed)
  i6176.radiusThickness = i6177[10]
  i6176.angle = i6177[11]
  i6176.length = i6177[12]
  i6176.boxThickness = new pc.Vec3( i6177[13], i6177[14], i6177[15] )
  i6176.meshShapeType = i6177[16]
  request.r(i6177[17], i6177[18], 0, i6176, 'mesh')
  request.r(i6177[19], i6177[20], 0, i6176, 'meshRenderer')
  request.r(i6177[21], i6177[22], 0, i6176, 'skinnedMeshRenderer')
  i6176.useMeshMaterialIndex = !!i6177[23]
  i6176.meshMaterialIndex = i6177[24]
  i6176.useMeshColors = !!i6177[25]
  i6176.normalOffset = i6177[26]
  i6176.arc = i6177[27]
  i6176.arcMode = i6177[28]
  i6176.arcSpread = i6177[29]
  i6176.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6177[30], i6176.arcSpeed)
  i6176.donutRadius = i6177[31]
  i6176.position = new pc.Vec3( i6177[32], i6177[33], i6177[34] )
  i6176.rotation = new pc.Vec3( i6177[35], i6177[36], i6177[37] )
  i6176.scale = new pc.Vec3( i6177[38], i6177[39], i6177[40] )
  return i6176
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i6178 = root || new pc.ParticleSystemSizeBySpeed()
  var i6179 = data
  i6178.enabled = !!i6179[0]
  i6178.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6179[1], i6178.x)
  i6178.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6179[2], i6178.y)
  i6178.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6179[3], i6178.z)
  i6178.separateAxes = !!i6179[4]
  i6178.range = new pc.Vec2( i6179[5], i6179[6] )
  return i6178
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i6180 = root || new pc.ParticleSystemSizeOverLifetime()
  var i6181 = data
  i6180.enabled = !!i6181[0]
  i6180.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6181[1], i6180.x)
  i6180.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6181[2], i6180.y)
  i6180.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6181[3], i6180.z)
  i6180.separateAxes = !!i6181[4]
  return i6180
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i6182 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i6183 = data
  i6182.enabled = !!i6183[0]
  i6182.mode = i6183[1]
  i6182.animation = i6183[2]
  i6182.numTilesX = i6183[3]
  i6182.numTilesY = i6183[4]
  i6182.useRandomRow = !!i6183[5]
  i6182.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6183[6], i6182.frameOverTime)
  i6182.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6183[7], i6182.startFrame)
  i6182.cycleCount = i6183[8]
  i6182.rowIndex = i6183[9]
  i6182.flipU = i6183[10]
  i6182.flipV = i6183[11]
  i6182.spriteCount = i6183[12]
  var i6185 = i6183[13]
  var i6184 = []
  for(var i = 0; i < i6185.length; i += 2) {
  request.r(i6185[i + 0], i6185[i + 1], 2, i6184, '')
  }
  i6182.sprites = i6184
  return i6182
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i6188 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i6189 = data
  i6188.enabled = !!i6189[0]
  i6188.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6189[1], i6188.x)
  i6188.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6189[2], i6188.y)
  i6188.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6189[3], i6188.z)
  i6188.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6189[4], i6188.radial)
  i6188.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6189[5], i6188.speedModifier)
  i6188.space = i6189[6]
  i6188.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6189[7], i6188.orbitalX)
  i6188.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6189[8], i6188.orbitalY)
  i6188.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6189[9], i6188.orbitalZ)
  i6188.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6189[10], i6188.orbitalOffsetX)
  i6188.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6189[11], i6188.orbitalOffsetY)
  i6188.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6189[12], i6188.orbitalOffsetZ)
  return i6188
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i6190 = root || new pc.ParticleSystemNoise()
  var i6191 = data
  i6190.enabled = !!i6191[0]
  i6190.separateAxes = !!i6191[1]
  i6190.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6191[2], i6190.strengthX)
  i6190.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6191[3], i6190.strengthY)
  i6190.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6191[4], i6190.strengthZ)
  i6190.frequency = i6191[5]
  i6190.damping = !!i6191[6]
  i6190.octaveCount = i6191[7]
  i6190.octaveMultiplier = i6191[8]
  i6190.octaveScale = i6191[9]
  i6190.quality = i6191[10]
  i6190.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6191[11], i6190.scrollSpeed)
  i6190.scrollSpeedMultiplier = i6191[12]
  i6190.remapEnabled = !!i6191[13]
  i6190.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6191[14], i6190.remapX)
  i6190.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6191[15], i6190.remapY)
  i6190.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6191[16], i6190.remapZ)
  i6190.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6191[17], i6190.positionAmount)
  i6190.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6191[18], i6190.rotationAmount)
  i6190.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6191[19], i6190.sizeAmount)
  return i6190
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i6192 = root || new pc.ParticleSystemInheritVelocity()
  var i6193 = data
  i6192.enabled = !!i6193[0]
  i6192.mode = i6193[1]
  i6192.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6193[2], i6192.curve)
  return i6192
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i6194 = root || new pc.ParticleSystemForceOverLifetime()
  var i6195 = data
  i6194.enabled = !!i6195[0]
  i6194.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6195[1], i6194.x)
  i6194.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6195[2], i6194.y)
  i6194.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6195[3], i6194.z)
  i6194.space = i6195[4]
  i6194.randomized = !!i6195[5]
  return i6194
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i6196 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i6197 = data
  i6196.enabled = !!i6197[0]
  i6196.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6197[1], i6196.limit)
  i6196.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6197[2], i6196.limitX)
  i6196.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6197[3], i6196.limitY)
  i6196.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6197[4], i6196.limitZ)
  i6196.dampen = i6197[5]
  i6196.separateAxes = !!i6197[6]
  i6196.space = i6197[7]
  i6196.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6197[8], i6196.drag)
  i6196.multiplyDragByParticleSize = !!i6197[9]
  i6196.multiplyDragByParticleVelocity = !!i6197[10]
  return i6196
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i6198 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i6199 = data
  request.r(i6199[0], i6199[1], 0, i6198, 'mesh')
  i6198.meshCount = i6199[2]
  i6198.activeVertexStreamsCount = i6199[3]
  i6198.alignment = i6199[4]
  i6198.renderMode = i6199[5]
  i6198.sortMode = i6199[6]
  i6198.lengthScale = i6199[7]
  i6198.velocityScale = i6199[8]
  i6198.cameraVelocityScale = i6199[9]
  i6198.normalDirection = i6199[10]
  i6198.sortingFudge = i6199[11]
  i6198.minParticleSize = i6199[12]
  i6198.maxParticleSize = i6199[13]
  i6198.pivot = new pc.Vec3( i6199[14], i6199[15], i6199[16] )
  request.r(i6199[17], i6199[18], 0, i6198, 'trailMaterial')
  i6198.applyActiveColorSpace = !!i6199[19]
  i6198.enabled = !!i6199[20]
  request.r(i6199[21], i6199[22], 0, i6198, 'sharedMaterial')
  var i6201 = i6199[23]
  var i6200 = []
  for(var i = 0; i < i6201.length; i += 2) {
  request.r(i6201[i + 0], i6201[i + 1], 2, i6200, '')
  }
  i6198.sharedMaterials = i6200
  i6198.receiveShadows = !!i6199[24]
  i6198.shadowCastingMode = i6199[25]
  i6198.sortingLayerID = i6199[26]
  i6198.sortingOrder = i6199[27]
  i6198.lightmapIndex = i6199[28]
  i6198.lightmapSceneIndex = i6199[29]
  i6198.lightmapScaleOffset = new pc.Vec4( i6199[30], i6199[31], i6199[32], i6199[33] )
  i6198.lightProbeUsage = i6199[34]
  i6198.reflectionProbeUsage = i6199[35]
  return i6198
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i6204 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i6205 = data
  i6204.name = i6205[0]
  i6204.tagId = i6205[1]
  i6204.enabled = !!i6205[2]
  i6204.isStatic = !!i6205[3]
  i6204.layer = i6205[4]
  return i6204
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i6206 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i6207 = data
  i6206.color = new pc.Color(i6207[0], i6207[1], i6207[2], i6207[3])
  request.r(i6207[4], i6207[5], 0, i6206, 'sprite')
  i6206.flipX = !!i6207[6]
  i6206.flipY = !!i6207[7]
  i6206.drawMode = i6207[8]
  i6206.size = new pc.Vec2( i6207[9], i6207[10] )
  i6206.tileMode = i6207[11]
  i6206.adaptiveModeThreshold = i6207[12]
  i6206.maskInteraction = i6207[13]
  i6206.spriteSortPoint = i6207[14]
  i6206.enabled = !!i6207[15]
  request.r(i6207[16], i6207[17], 0, i6206, 'sharedMaterial')
  var i6209 = i6207[18]
  var i6208 = []
  for(var i = 0; i < i6209.length; i += 2) {
  request.r(i6209[i + 0], i6209[i + 1], 2, i6208, '')
  }
  i6206.sharedMaterials = i6208
  i6206.receiveShadows = !!i6207[19]
  i6206.shadowCastingMode = i6207[20]
  i6206.sortingLayerID = i6207[21]
  i6206.sortingOrder = i6207[22]
  i6206.lightmapIndex = i6207[23]
  i6206.lightmapSceneIndex = i6207[24]
  i6206.lightmapScaleOffset = new pc.Vec4( i6207[25], i6207[26], i6207[27], i6207[28] )
  i6206.lightProbeUsage = i6207[29]
  i6206.reflectionProbeUsage = i6207[30]
  return i6206
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i6210 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i6211 = data
  request.r(i6211[0], i6211[1], 0, i6210, 'animatorController')
  request.r(i6211[2], i6211[3], 0, i6210, 'avatar')
  i6210.updateMode = i6211[4]
  i6210.hasTransformHierarchy = !!i6211[5]
  i6210.applyRootMotion = !!i6211[6]
  var i6213 = i6211[7]
  var i6212 = []
  for(var i = 0; i < i6213.length; i += 2) {
  request.r(i6213[i + 0], i6213[i + 1], 2, i6212, '')
  }
  i6210.humanBones = i6212
  i6210.enabled = !!i6211[8]
  return i6210
}

Deserializers["MoveBetweenPoints"] = function (request, data, root) {
  var i6216 = root || request.c( 'MoveBetweenPoints' )
  var i6217 = data
  request.r(i6217[0], i6217[1], 0, i6216, 'pointA')
  request.r(i6217[2], i6217[3], 0, i6216, 'pointB')
  i6216.duration = i6217[4]
  return i6216
}

Deserializers["PlayerCardUIManager"] = function (request, data, root) {
  var i6218 = root || request.c( 'PlayerCardUIManager' )
  var i6219 = data
  request.r(i6219[0], i6219[1], 0, i6218, 'cardPanel')
  var i6221 = i6219[2]
  var i6220 = []
  for(var i = 0; i < i6221.length; i += 2) {
  request.r(i6221[i + 0], i6221[i + 1], 2, i6220, '')
  }
  i6218.extraObjectsToActivate = i6220
  i6218.waitTime = i6219[3]
  var i6223 = i6219[4]
  var i6222 = []
  for(var i = 0; i < i6223.length; i += 2) {
  request.r(i6223[i + 0], i6223[i + 1], 2, i6222, '')
  }
  i6218.objectsToTurnOnAfterWait = i6222
  var i6225 = i6219[5]
  var i6224 = []
  for(var i = 0; i < i6225.length; i += 2) {
  request.r(i6225[i + 0], i6225[i + 1], 2, i6224, '')
  }
  i6218.objectsToTurnOffAfterWait = i6224
  request.r(i6219[6], i6219[7], 0, i6218, 'playerNameText')
  request.r(i6219[8], i6219[9], 0, i6218, 'playerImage')
  return i6218
}

Deserializers["Ply_SoundManager"] = function (request, data, root) {
  var i6228 = root || request.c( 'Ply_SoundManager' )
  var i6229 = data
  i6228.fxAudio = request.d('FxAudio', i6229[0], i6228.fxAudio)
  request.r(i6229[1], i6229[2], 0, i6228, 'bgm1')
  return i6228
}

Deserializers["FxAudio"] = function (request, data, root) {
  var i6230 = root || request.c( 'FxAudio' )
  var i6231 = data
  i6230.ClickBox = request.d('SoundData', i6231[0], i6230.ClickBox)
  i6230.Happy = request.d('SoundData', i6231[1], i6230.Happy)
  i6230.Wrong = request.d('SoundData', i6231[2], i6230.Wrong)
  i6230.Spray = request.d('SoundData', i6231[3], i6230.Spray)
  i6230.Brush = request.d('SoundData', i6231[4], i6230.Brush)
  i6230.Keo = request.d('SoundData', i6231[5], i6230.Keo)
  i6230.Confetti = request.d('SoundData', i6231[6], i6230.Confetti)
  i6230.Lose2 = request.d('SoundData', i6231[7], i6230.Lose2)
  return i6230
}

Deserializers["SoundData"] = function (request, data, root) {
  var i6232 = root || request.c( 'SoundData' )
  var i6233 = data
  request.r(i6233[0], i6233[1], 0, i6232, 'clip')
  i6232.repeatCount = i6233[2]
  return i6232
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i6234 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i6235 = data
  request.r(i6235[0], i6235[1], 0, i6234, 'clip')
  request.r(i6235[2], i6235[3], 0, i6234, 'outputAudioMixerGroup')
  i6234.playOnAwake = !!i6235[4]
  i6234.loop = !!i6235[5]
  i6234.time = i6235[6]
  i6234.volume = i6235[7]
  i6234.pitch = i6235[8]
  i6234.enabled = !!i6235[9]
  return i6234
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i6236 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i6237 = data
  i6236.pivot = new pc.Vec2( i6237[0], i6237[1] )
  i6236.anchorMin = new pc.Vec2( i6237[2], i6237[3] )
  i6236.anchorMax = new pc.Vec2( i6237[4], i6237[5] )
  i6236.sizeDelta = new pc.Vec2( i6237[6], i6237[7] )
  i6236.anchoredPosition3D = new pc.Vec3( i6237[8], i6237[9], i6237[10] )
  i6236.rotation = new pc.Quat(i6237[11], i6237[12], i6237[13], i6237[14])
  i6236.scale = new pc.Vec3( i6237[15], i6237[16], i6237[17] )
  return i6236
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i6238 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i6239 = data
  i6238.planeDistance = i6239[0]
  i6238.referencePixelsPerUnit = i6239[1]
  i6238.isFallbackOverlay = !!i6239[2]
  i6238.renderMode = i6239[3]
  i6238.renderOrder = i6239[4]
  i6238.sortingLayerName = i6239[5]
  i6238.sortingOrder = i6239[6]
  i6238.scaleFactor = i6239[7]
  request.r(i6239[8], i6239[9], 0, i6238, 'worldCamera')
  i6238.overrideSorting = !!i6239[10]
  i6238.pixelPerfect = !!i6239[11]
  i6238.targetDisplay = i6239[12]
  i6238.overridePixelPerfect = !!i6239[13]
  i6238.enabled = !!i6239[14]
  return i6238
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i6240 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i6241 = data
  i6240.m_UiScaleMode = i6241[0]
  i6240.m_ReferencePixelsPerUnit = i6241[1]
  i6240.m_ScaleFactor = i6241[2]
  i6240.m_ReferenceResolution = new pc.Vec2( i6241[3], i6241[4] )
  i6240.m_ScreenMatchMode = i6241[5]
  i6240.m_MatchWidthOrHeight = i6241[6]
  i6240.m_PhysicalUnit = i6241[7]
  i6240.m_FallbackScreenDPI = i6241[8]
  i6240.m_DefaultSpriteDPI = i6241[9]
  i6240.m_DynamicPixelsPerUnit = i6241[10]
  i6240.m_PresetInfoIsWorld = !!i6241[11]
  return i6240
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i6242 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i6243 = data
  i6242.m_IgnoreReversedGraphics = !!i6243[0]
  i6242.m_BlockingObjects = i6243[1]
  i6242.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i6243[2] )
  return i6242
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i6244 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i6245 = data
  i6244.cullTransparentMesh = !!i6245[0]
  return i6244
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i6246 = root || request.c( 'UnityEngine.UI.Image' )
  var i6247 = data
  request.r(i6247[0], i6247[1], 0, i6246, 'm_Sprite')
  i6246.m_Type = i6247[2]
  i6246.m_PreserveAspect = !!i6247[3]
  i6246.m_FillCenter = !!i6247[4]
  i6246.m_FillMethod = i6247[5]
  i6246.m_FillAmount = i6247[6]
  i6246.m_FillClockwise = !!i6247[7]
  i6246.m_FillOrigin = i6247[8]
  i6246.m_UseSpriteMesh = !!i6247[9]
  i6246.m_PixelsPerUnitMultiplier = i6247[10]
  request.r(i6247[11], i6247[12], 0, i6246, 'm_Material')
  i6246.m_Maskable = !!i6247[13]
  i6246.m_Color = new pc.Color(i6247[14], i6247[15], i6247[16], i6247[17])
  i6246.m_RaycastTarget = !!i6247[18]
  i6246.m_RaycastPadding = new pc.Vec4( i6247[19], i6247[20], i6247[21], i6247[22] )
  return i6246
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i6248 = root || request.c( 'UnityEngine.UI.Button' )
  var i6249 = data
  i6248.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i6249[0], i6248.m_OnClick)
  i6248.m_Navigation = request.d('UnityEngine.UI.Navigation', i6249[1], i6248.m_Navigation)
  i6248.m_Transition = i6249[2]
  i6248.m_Colors = request.d('UnityEngine.UI.ColorBlock', i6249[3], i6248.m_Colors)
  i6248.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i6249[4], i6248.m_SpriteState)
  i6248.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i6249[5], i6248.m_AnimationTriggers)
  i6248.m_Interactable = !!i6249[6]
  request.r(i6249[7], i6249[8], 0, i6248, 'm_TargetGraphic')
  return i6248
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i6250 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i6251 = data
  i6250.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i6251[0], i6250.m_PersistentCalls)
  return i6250
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i6252 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i6253 = data
  var i6255 = i6253[0]
  var i6254 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i6255.length; i += 1) {
    i6254.add(request.d('UnityEngine.Events.PersistentCall', i6255[i + 0]));
  }
  i6252.m_Calls = i6254
  return i6252
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i6258 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i6259 = data
  request.r(i6259[0], i6259[1], 0, i6258, 'm_Target')
  i6258.m_TargetAssemblyTypeName = i6259[2]
  i6258.m_MethodName = i6259[3]
  i6258.m_Mode = i6259[4]
  i6258.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i6259[5], i6258.m_Arguments)
  i6258.m_CallState = i6259[6]
  return i6258
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i6260 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i6261 = data
  request.r(i6261[0], i6261[1], 0, i6260, 'm_ObjectArgument')
  i6260.m_ObjectArgumentAssemblyTypeName = i6261[2]
  i6260.m_IntArgument = i6261[3]
  i6260.m_FloatArgument = i6261[4]
  i6260.m_StringArgument = i6261[5]
  i6260.m_BoolArgument = !!i6261[6]
  return i6260
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i6262 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i6263 = data
  i6262.m_Mode = i6263[0]
  i6262.m_WrapAround = !!i6263[1]
  request.r(i6263[2], i6263[3], 0, i6262, 'm_SelectOnUp')
  request.r(i6263[4], i6263[5], 0, i6262, 'm_SelectOnDown')
  request.r(i6263[6], i6263[7], 0, i6262, 'm_SelectOnLeft')
  request.r(i6263[8], i6263[9], 0, i6262, 'm_SelectOnRight')
  return i6262
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i6264 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i6265 = data
  i6264.m_NormalColor = new pc.Color(i6265[0], i6265[1], i6265[2], i6265[3])
  i6264.m_HighlightedColor = new pc.Color(i6265[4], i6265[5], i6265[6], i6265[7])
  i6264.m_PressedColor = new pc.Color(i6265[8], i6265[9], i6265[10], i6265[11])
  i6264.m_SelectedColor = new pc.Color(i6265[12], i6265[13], i6265[14], i6265[15])
  i6264.m_DisabledColor = new pc.Color(i6265[16], i6265[17], i6265[18], i6265[19])
  i6264.m_ColorMultiplier = i6265[20]
  i6264.m_FadeDuration = i6265[21]
  return i6264
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i6266 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i6267 = data
  request.r(i6267[0], i6267[1], 0, i6266, 'm_HighlightedSprite')
  request.r(i6267[2], i6267[3], 0, i6266, 'm_PressedSprite')
  request.r(i6267[4], i6267[5], 0, i6266, 'm_SelectedSprite')
  request.r(i6267[6], i6267[7], 0, i6266, 'm_DisabledSprite')
  return i6266
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i6268 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i6269 = data
  i6268.m_NormalTrigger = i6269[0]
  i6268.m_HighlightedTrigger = i6269[1]
  i6268.m_PressedTrigger = i6269[2]
  i6268.m_SelectedTrigger = i6269[3]
  i6268.m_DisabledTrigger = i6269[4]
  return i6268
}

Deserializers["HairCutController"] = function (request, data, root) {
  var i6270 = root || request.c( 'HairCutController' )
  var i6271 = data
  request.r(i6271[0], i6271[1], 0, i6270, 'scissors')
  request.r(i6271[2], i6271[3], 0, i6270, 'scissorsAnimator')
  request.r(i6271[4], i6271[5], 0, i6270, 'targetAnimatorToDisable')
  request.r(i6271[6], i6271[7], 0, i6270, 'linePointA')
  request.r(i6271[8], i6271[9], 0, i6270, 'linePointB')
  i6270.scissorMoveDuration = i6271[10]
  var i6273 = i6271[11]
  var i6272 = []
  for(var i = 0; i < i6273.length; i += 2) {
  request.r(i6273[i + 0], i6273[i + 1], 2, i6272, '')
  }
  i6270.allMasks = i6272
  request.r(i6271[12], i6271[13], 0, i6270, 'fallingHairParent')
  var i6275 = i6271[14]
  var i6274 = []
  for(var i = 0; i < i6275.length; i += 2) {
  request.r(i6275[i + 0], i6275[i + 1], 2, i6274, '')
  }
  i6270.fallingHairRenderers = i6274
  request.r(i6271[15], i6271[16], 0, i6270, 'scissorsCollider')
  var i6277 = i6271[17]
  var i6276 = []
  for(var i = 0; i < i6277.length; i += 1) {
    i6276.push( request.d('TargetColliderData', i6277[i + 0]) );
  }
  i6270.targetColliders = i6276
  request.r(i6271[18], i6271[19], 0, i6270, 'targetCollider')
  request.r(i6271[20], i6271[21], 0, i6270, 'winObjectToEnable')
  var i6279 = i6271[22]
  var i6278 = []
  for(var i = 0; i < i6279.length; i += 2) {
  request.r(i6279[i + 0], i6279[i + 1], 2, i6278, '')
  }
  i6270.winObjectsToEnable = i6278
  request.r(i6271[23], i6271[24], 0, i6270, 'winObjectToDisable')
  var i6281 = i6271[25]
  var i6280 = []
  for(var i = 0; i < i6281.length; i += 2) {
  request.r(i6281[i + 0], i6281[i + 1], 2, i6280, '')
  }
  i6270.winObjectsToDisable = i6280
  request.r(i6271[26], i6271[27], 0, i6270, 'lossSpriteRenderer')
  request.r(i6271[28], i6271[29], 0, i6270, 'lossObjectToEnable')
  var i6283 = i6271[30]
  var i6282 = []
  for(var i = 0; i < i6283.length; i += 2) {
  request.r(i6283[i + 0], i6283[i + 1], 2, i6282, '')
  }
  i6270.lossObjectsToEnable = i6282
  request.r(i6271[31], i6271[32], 0, i6270, 'lossObjectToDisable')
  var i6285 = i6271[33]
  var i6284 = []
  for(var i = 0; i < i6285.length; i += 2) {
  request.r(i6285[i + 0], i6285[i + 1], 2, i6284, '')
  }
  i6270.lossObjectsToDisable = i6284
  i6270.endDelay = i6271[34]
  var i6287 = i6271[35]
  var i6286 = []
  for(var i = 0; i < i6287.length; i += 2) {
  request.r(i6287[i + 0], i6287[i + 1], 2, i6286, '')
  }
  i6270.afterEndDisableObjects = i6286
  var i6289 = i6271[36]
  var i6288 = []
  for(var i = 0; i < i6289.length; i += 2) {
  request.r(i6289[i + 0], i6289[i + 1], 2, i6288, '')
  }
  i6270.afterEndEnableObjects = i6288
  request.r(i6271[37], i6271[38], 0, i6270, 'tutObject')
  request.r(i6271[39], i6271[40], 0, i6270, 'animatorToEnableOnFirstTap')
  i6270.firstTapTriggerName = i6271[41]
  request.r(i6271[42], i6271[43], 0, i6270, 'objectToDisableOnComplete')
  var i6291 = i6271[44]
  var i6290 = []
  for(var i = 0; i < i6291.length; i += 2) {
  request.r(i6291[i + 0], i6291[i + 1], 2, i6290, '')
  }
  i6270.objectsToDisableOnComplete = i6290
  i6270.fallDistance = i6271[45]
  i6270.fallDuration = i6271[46]
  i6270.fadeDuration = i6271[47]
  return i6270
}

Deserializers["TargetColliderData"] = function (request, data, root) {
  var i6298 = root || request.c( 'TargetColliderData' )
  var i6299 = data
  request.r(i6299[0], i6299[1], 0, i6298, 'collider')
  request.r(i6299[2], i6299[3], 0, i6298, 'resultSprite')
  i6298.isWin = !!i6299[4]
  return i6298
}

Deserializers["HideOnFirstClick"] = function (request, data, root) {
  var i6300 = root || request.c( 'HideOnFirstClick' )
  var i6301 = data
  request.r(i6301[0], i6301[1], 0, i6300, 'objectToHide')
  return i6300
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i6302 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i6303 = data
  i6302.usedByComposite = !!i6303[0]
  i6302.autoTiling = !!i6303[1]
  i6302.size = new pc.Vec2( i6303[2], i6303[3] )
  i6302.edgeRadius = i6303[4]
  i6302.enabled = !!i6303[5]
  i6302.isTrigger = !!i6303[6]
  i6302.usedByEffector = !!i6303[7]
  i6302.density = i6303[8]
  i6302.offset = new pc.Vec2( i6303[9], i6303[10] )
  request.r(i6303[11], i6303[12], 0, i6302, 'material')
  return i6302
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteMask"] = function (request, data, root) {
  var i6304 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteMask' )
  var i6305 = data
  i6304.frontSortingLayerID = i6305[0]
  i6304.frontSortingOrder = i6305[1]
  i6304.backSortingLayerID = i6305[2]
  i6304.backSortingOrder = i6305[3]
  i6304.alphaCutoff = i6305[4]
  request.r(i6305[5], i6305[6], 0, i6304, 'sprite')
  i6304.tileMode = i6305[7]
  i6304.isCustomRangeActive = !!i6305[8]
  i6304.spriteSortPoint = i6305[9]
  i6304.enabled = !!i6305[10]
  request.r(i6305[11], i6305[12], 0, i6304, 'sharedMaterial')
  var i6307 = i6305[13]
  var i6306 = []
  for(var i = 0; i < i6307.length; i += 2) {
  request.r(i6307[i + 0], i6307[i + 1], 2, i6306, '')
  }
  i6304.sharedMaterials = i6306
  i6304.receiveShadows = !!i6305[14]
  i6304.shadowCastingMode = i6305[15]
  i6304.sortingLayerID = i6305[16]
  i6304.sortingOrder = i6305[17]
  i6304.lightmapIndex = i6305[18]
  i6304.lightmapSceneIndex = i6305[19]
  i6304.lightmapScaleOffset = new pc.Vec4( i6305[20], i6305[21], i6305[22], i6305[23] )
  i6304.lightProbeUsage = i6305[24]
  i6304.reflectionProbeUsage = i6305[25]
  return i6304
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i6308 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i6309 = data
  request.r(i6309[0], i6309[1], 0, i6308, 'm_FirstSelected')
  i6308.m_sendNavigationEvents = !!i6309[2]
  i6308.m_DragThreshold = i6309[3]
  return i6308
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i6310 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i6311 = data
  i6310.m_HorizontalAxis = i6311[0]
  i6310.m_VerticalAxis = i6311[1]
  i6310.m_SubmitButton = i6311[2]
  i6310.m_CancelButton = i6311[3]
  i6310.m_InputActionsPerSecond = i6311[4]
  i6310.m_RepeatDelay = i6311[5]
  i6310.m_ForceModuleActive = !!i6311[6]
  i6310.m_SendPointerHoverToParent = !!i6311[7]
  return i6310
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i6312 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i6313 = data
  i6312.ambientIntensity = i6313[0]
  i6312.reflectionIntensity = i6313[1]
  i6312.ambientMode = i6313[2]
  i6312.ambientLight = new pc.Color(i6313[3], i6313[4], i6313[5], i6313[6])
  i6312.ambientSkyColor = new pc.Color(i6313[7], i6313[8], i6313[9], i6313[10])
  i6312.ambientGroundColor = new pc.Color(i6313[11], i6313[12], i6313[13], i6313[14])
  i6312.ambientEquatorColor = new pc.Color(i6313[15], i6313[16], i6313[17], i6313[18])
  i6312.fogColor = new pc.Color(i6313[19], i6313[20], i6313[21], i6313[22])
  i6312.fogEndDistance = i6313[23]
  i6312.fogStartDistance = i6313[24]
  i6312.fogDensity = i6313[25]
  i6312.fog = !!i6313[26]
  request.r(i6313[27], i6313[28], 0, i6312, 'skybox')
  i6312.fogMode = i6313[29]
  var i6315 = i6313[30]
  var i6314 = []
  for(var i = 0; i < i6315.length; i += 1) {
    i6314.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i6315[i + 0]) );
  }
  i6312.lightmaps = i6314
  i6312.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i6313[31], i6312.lightProbes)
  i6312.lightmapsMode = i6313[32]
  i6312.mixedBakeMode = i6313[33]
  i6312.environmentLightingMode = i6313[34]
  i6312.ambientProbe = new pc.SphericalHarmonicsL2(i6313[35])
  i6312.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i6313[36])
  i6312.useReferenceAmbientProbe = !!i6313[37]
  request.r(i6313[38], i6313[39], 0, i6312, 'customReflection')
  request.r(i6313[40], i6313[41], 0, i6312, 'defaultReflection')
  i6312.defaultReflectionMode = i6313[42]
  i6312.defaultReflectionResolution = i6313[43]
  i6312.sunLightObjectId = i6313[44]
  i6312.pixelLightCount = i6313[45]
  i6312.defaultReflectionHDR = !!i6313[46]
  i6312.hasLightDataAsset = !!i6313[47]
  i6312.hasManualGenerate = !!i6313[48]
  return i6312
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i6318 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i6319 = data
  request.r(i6319[0], i6319[1], 0, i6318, 'lightmapColor')
  request.r(i6319[2], i6319[3], 0, i6318, 'lightmapDirection')
  request.r(i6319[4], i6319[5], 0, i6318, 'shadowMask')
  return i6318
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i6320 = root || new UnityEngine.LightProbes()
  var i6321 = data
  return i6320
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i6328 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i6329 = data
  var i6331 = i6329[0]
  var i6330 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i6331.length; i += 1) {
    i6330.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i6331[i + 0]));
  }
  i6328.ShaderCompilationErrors = i6330
  i6328.name = i6329[1]
  i6328.guid = i6329[2]
  var i6333 = i6329[3]
  var i6332 = []
  for(var i = 0; i < i6333.length; i += 1) {
    i6332.push( i6333[i + 0] );
  }
  i6328.shaderDefinedKeywords = i6332
  var i6335 = i6329[4]
  var i6334 = []
  for(var i = 0; i < i6335.length; i += 1) {
    i6334.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i6335[i + 0]) );
  }
  i6328.passes = i6334
  var i6337 = i6329[5]
  var i6336 = []
  for(var i = 0; i < i6337.length; i += 1) {
    i6336.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i6337[i + 0]) );
  }
  i6328.usePasses = i6336
  var i6339 = i6329[6]
  var i6338 = []
  for(var i = 0; i < i6339.length; i += 1) {
    i6338.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i6339[i + 0]) );
  }
  i6328.defaultParameterValues = i6338
  request.r(i6329[7], i6329[8], 0, i6328, 'unityFallbackShader')
  i6328.readDepth = !!i6329[9]
  i6328.hasDepthOnlyPass = !!i6329[10]
  i6328.isCreatedByShaderGraph = !!i6329[11]
  i6328.disableBatching = !!i6329[12]
  i6328.compiled = !!i6329[13]
  return i6328
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i6342 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i6343 = data
  i6342.shaderName = i6343[0]
  i6342.errorMessage = i6343[1]
  return i6342
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i6348 = root || new pc.UnityShaderPass()
  var i6349 = data
  i6348.id = i6349[0]
  i6348.subShaderIndex = i6349[1]
  i6348.name = i6349[2]
  i6348.passType = i6349[3]
  i6348.grabPassTextureName = i6349[4]
  i6348.usePass = !!i6349[5]
  i6348.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6349[6], i6348.zTest)
  i6348.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6349[7], i6348.zWrite)
  i6348.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6349[8], i6348.culling)
  i6348.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i6349[9], i6348.blending)
  i6348.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i6349[10], i6348.alphaBlending)
  i6348.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6349[11], i6348.colorWriteMask)
  i6348.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6349[12], i6348.offsetUnits)
  i6348.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6349[13], i6348.offsetFactor)
  i6348.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6349[14], i6348.stencilRef)
  i6348.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6349[15], i6348.stencilReadMask)
  i6348.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6349[16], i6348.stencilWriteMask)
  i6348.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i6349[17], i6348.stencilOp)
  i6348.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i6349[18], i6348.stencilOpFront)
  i6348.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i6349[19], i6348.stencilOpBack)
  var i6351 = i6349[20]
  var i6350 = []
  for(var i = 0; i < i6351.length; i += 1) {
    i6350.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i6351[i + 0]) );
  }
  i6348.tags = i6350
  var i6353 = i6349[21]
  var i6352 = []
  for(var i = 0; i < i6353.length; i += 1) {
    i6352.push( i6353[i + 0] );
  }
  i6348.passDefinedKeywords = i6352
  var i6355 = i6349[22]
  var i6354 = []
  for(var i = 0; i < i6355.length; i += 1) {
    i6354.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i6355[i + 0]) );
  }
  i6348.passDefinedKeywordGroups = i6354
  var i6357 = i6349[23]
  var i6356 = []
  for(var i = 0; i < i6357.length; i += 1) {
    i6356.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i6357[i + 0]) );
  }
  i6348.variants = i6356
  var i6359 = i6349[24]
  var i6358 = []
  for(var i = 0; i < i6359.length; i += 1) {
    i6358.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i6359[i + 0]) );
  }
  i6348.excludedVariants = i6358
  i6348.hasDepthReader = !!i6349[25]
  return i6348
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i6360 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i6361 = data
  i6360.val = i6361[0]
  i6360.name = i6361[1]
  return i6360
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i6362 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i6363 = data
  i6362.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6363[0], i6362.src)
  i6362.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6363[1], i6362.dst)
  i6362.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6363[2], i6362.op)
  return i6362
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i6364 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i6365 = data
  i6364.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6365[0], i6364.pass)
  i6364.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6365[1], i6364.fail)
  i6364.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6365[2], i6364.zFail)
  i6364.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6365[3], i6364.comp)
  return i6364
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i6368 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i6369 = data
  i6368.name = i6369[0]
  i6368.value = i6369[1]
  return i6368
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i6372 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i6373 = data
  var i6375 = i6373[0]
  var i6374 = []
  for(var i = 0; i < i6375.length; i += 1) {
    i6374.push( i6375[i + 0] );
  }
  i6372.keywords = i6374
  i6372.hasDiscard = !!i6373[1]
  return i6372
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i6378 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i6379 = data
  i6378.passId = i6379[0]
  i6378.subShaderIndex = i6379[1]
  var i6381 = i6379[2]
  var i6380 = []
  for(var i = 0; i < i6381.length; i += 1) {
    i6380.push( i6381[i + 0] );
  }
  i6378.keywords = i6380
  i6378.vertexProgram = i6379[3]
  i6378.fragmentProgram = i6379[4]
  i6378.exportedForWebGl2 = !!i6379[5]
  i6378.readDepth = !!i6379[6]
  return i6378
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i6384 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i6385 = data
  request.r(i6385[0], i6385[1], 0, i6384, 'shader')
  i6384.pass = i6385[2]
  return i6384
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i6388 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i6389 = data
  i6388.name = i6389[0]
  i6388.type = i6389[1]
  i6388.value = new pc.Vec4( i6389[2], i6389[3], i6389[4], i6389[5] )
  i6388.textureValue = i6389[6]
  i6388.shaderPropertyFlag = i6389[7]
  return i6388
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i6390 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i6391 = data
  i6390.name = i6391[0]
  request.r(i6391[1], i6391[2], 0, i6390, 'texture')
  i6390.aabb = i6391[3]
  i6390.vertices = i6391[4]
  i6390.triangles = i6391[5]
  i6390.textureRect = UnityEngine.Rect.MinMaxRect(i6391[6], i6391[7], i6391[8], i6391[9])
  i6390.packedRect = UnityEngine.Rect.MinMaxRect(i6391[10], i6391[11], i6391[12], i6391[13])
  i6390.border = new pc.Vec4( i6391[14], i6391[15], i6391[16], i6391[17] )
  i6390.transparency = i6391[18]
  i6390.bounds = i6391[19]
  i6390.pixelsPerUnit = i6391[20]
  i6390.textureWidth = i6391[21]
  i6390.textureHeight = i6391[22]
  i6390.nativeSize = new pc.Vec2( i6391[23], i6391[24] )
  i6390.pivot = new pc.Vec2( i6391[25], i6391[26] )
  i6390.textureRectOffset = new pc.Vec2( i6391[27], i6391[28] )
  return i6390
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i6392 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i6393 = data
  i6392.name = i6393[0]
  return i6392
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i6394 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i6395 = data
  i6394.name = i6395[0]
  i6394.wrapMode = i6395[1]
  i6394.isLooping = !!i6395[2]
  i6394.length = i6395[3]
  var i6397 = i6395[4]
  var i6396 = []
  for(var i = 0; i < i6397.length; i += 1) {
    i6396.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i6397[i + 0]) );
  }
  i6394.curves = i6396
  var i6399 = i6395[5]
  var i6398 = []
  for(var i = 0; i < i6399.length; i += 1) {
    i6398.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i6399[i + 0]) );
  }
  i6394.events = i6398
  i6394.halfPrecision = !!i6395[6]
  i6394._frameRate = i6395[7]
  i6394.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i6395[8], i6394.localBounds)
  i6394.hasMuscleCurves = !!i6395[9]
  var i6401 = i6395[10]
  var i6400 = []
  for(var i = 0; i < i6401.length; i += 1) {
    i6400.push( i6401[i + 0] );
  }
  i6394.clipMuscleConstant = i6400
  i6394.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i6395[11], i6394.clipBindingConstant)
  return i6394
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i6404 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i6405 = data
  i6404.path = i6405[0]
  i6404.hash = i6405[1]
  i6404.componentType = i6405[2]
  i6404.property = i6405[3]
  i6404.keys = i6405[4]
  var i6407 = i6405[5]
  var i6406 = []
  for(var i = 0; i < i6407.length; i += 1) {
    i6406.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i6407[i + 0]) );
  }
  i6404.objectReferenceKeys = i6406
  return i6404
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i6410 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i6411 = data
  i6410.time = i6411[0]
  request.r(i6411[1], i6411[2], 0, i6410, 'value')
  return i6410
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i6414 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i6415 = data
  i6414.functionName = i6415[0]
  i6414.floatParameter = i6415[1]
  i6414.intParameter = i6415[2]
  i6414.stringParameter = i6415[3]
  request.r(i6415[4], i6415[5], 0, i6414, 'objectReferenceParameter')
  i6414.time = i6415[6]
  return i6414
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i6416 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i6417 = data
  i6416.center = new pc.Vec3( i6417[0], i6417[1], i6417[2] )
  i6416.extends = new pc.Vec3( i6417[3], i6417[4], i6417[5] )
  return i6416
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i6420 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i6421 = data
  var i6423 = i6421[0]
  var i6422 = []
  for(var i = 0; i < i6423.length; i += 1) {
    i6422.push( i6423[i + 0] );
  }
  i6420.genericBindings = i6422
  var i6425 = i6421[1]
  var i6424 = []
  for(var i = 0; i < i6425.length; i += 1) {
    i6424.push( i6425[i + 0] );
  }
  i6420.pptrCurveMapping = i6424
  return i6420
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i6426 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i6427 = data
  i6426.name = i6427[0]
  var i6429 = i6427[1]
  var i6428 = []
  for(var i = 0; i < i6429.length; i += 1) {
    i6428.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i6429[i + 0]) );
  }
  i6426.layers = i6428
  var i6431 = i6427[2]
  var i6430 = []
  for(var i = 0; i < i6431.length; i += 1) {
    i6430.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i6431[i + 0]) );
  }
  i6426.parameters = i6430
  i6426.animationClips = i6427[3]
  i6426.avatarUnsupported = i6427[4]
  return i6426
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i6434 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i6435 = data
  i6434.name = i6435[0]
  i6434.defaultWeight = i6435[1]
  i6434.blendingMode = i6435[2]
  i6434.avatarMask = i6435[3]
  i6434.syncedLayerIndex = i6435[4]
  i6434.syncedLayerAffectsTiming = !!i6435[5]
  i6434.syncedLayers = i6435[6]
  i6434.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i6435[7], i6434.stateMachine)
  return i6434
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i6436 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i6437 = data
  i6436.id = i6437[0]
  i6436.name = i6437[1]
  i6436.path = i6437[2]
  var i6439 = i6437[3]
  var i6438 = []
  for(var i = 0; i < i6439.length; i += 1) {
    i6438.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i6439[i + 0]) );
  }
  i6436.states = i6438
  var i6441 = i6437[4]
  var i6440 = []
  for(var i = 0; i < i6441.length; i += 1) {
    i6440.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i6441[i + 0]) );
  }
  i6436.machines = i6440
  var i6443 = i6437[5]
  var i6442 = []
  for(var i = 0; i < i6443.length; i += 1) {
    i6442.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i6443[i + 0]) );
  }
  i6436.entryStateTransitions = i6442
  var i6445 = i6437[6]
  var i6444 = []
  for(var i = 0; i < i6445.length; i += 1) {
    i6444.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i6445[i + 0]) );
  }
  i6436.exitStateTransitions = i6444
  var i6447 = i6437[7]
  var i6446 = []
  for(var i = 0; i < i6447.length; i += 1) {
    i6446.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i6447[i + 0]) );
  }
  i6436.anyStateTransitions = i6446
  i6436.defaultStateId = i6437[8]
  return i6436
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i6450 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i6451 = data
  i6450.id = i6451[0]
  i6450.name = i6451[1]
  i6450.cycleOffset = i6451[2]
  i6450.cycleOffsetParameter = i6451[3]
  i6450.cycleOffsetParameterActive = !!i6451[4]
  i6450.mirror = !!i6451[5]
  i6450.mirrorParameter = i6451[6]
  i6450.mirrorParameterActive = !!i6451[7]
  i6450.motionId = i6451[8]
  i6450.nameHash = i6451[9]
  i6450.fullPathHash = i6451[10]
  i6450.speed = i6451[11]
  i6450.speedParameter = i6451[12]
  i6450.speedParameterActive = !!i6451[13]
  i6450.tag = i6451[14]
  i6450.tagHash = i6451[15]
  i6450.writeDefaultValues = !!i6451[16]
  var i6453 = i6451[17]
  var i6452 = []
  for(var i = 0; i < i6453.length; i += 2) {
  request.r(i6453[i + 0], i6453[i + 1], 2, i6452, '')
  }
  i6450.behaviours = i6452
  var i6455 = i6451[18]
  var i6454 = []
  for(var i = 0; i < i6455.length; i += 1) {
    i6454.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i6455[i + 0]) );
  }
  i6450.transitions = i6454
  return i6450
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i6460 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i6461 = data
  i6460.fullPath = i6461[0]
  i6460.canTransitionToSelf = !!i6461[1]
  i6460.duration = i6461[2]
  i6460.exitTime = i6461[3]
  i6460.hasExitTime = !!i6461[4]
  i6460.hasFixedDuration = !!i6461[5]
  i6460.interruptionSource = i6461[6]
  i6460.offset = i6461[7]
  i6460.orderedInterruption = !!i6461[8]
  i6460.destinationStateId = i6461[9]
  i6460.isExit = !!i6461[10]
  i6460.mute = !!i6461[11]
  i6460.solo = !!i6461[12]
  var i6463 = i6461[13]
  var i6462 = []
  for(var i = 0; i < i6463.length; i += 1) {
    i6462.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i6463[i + 0]) );
  }
  i6460.conditions = i6462
  return i6460
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i6468 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i6469 = data
  i6468.destinationStateId = i6469[0]
  i6468.isExit = !!i6469[1]
  i6468.mute = !!i6469[2]
  i6468.solo = !!i6469[3]
  var i6471 = i6469[4]
  var i6470 = []
  for(var i = 0; i < i6471.length; i += 1) {
    i6470.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i6471[i + 0]) );
  }
  i6468.conditions = i6470
  return i6468
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i6474 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i6475 = data
  i6474.defaultBool = !!i6475[0]
  i6474.defaultFloat = i6475[1]
  i6474.defaultInt = i6475[2]
  i6474.name = i6475[3]
  i6474.nameHash = i6475[4]
  i6474.type = i6475[5]
  return i6474
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i6478 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i6479 = data
  i6478.mode = i6479[0]
  i6478.parameter = i6479[1]
  i6478.threshold = i6479[2]
  return i6478
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i6480 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i6481 = data
  i6480.name = i6481[0]
  i6480.bytes64 = i6481[1]
  i6480.data = i6481[2]
  return i6480
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i6482 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i6483 = data
  i6482.useSafeMode = !!i6483[0]
  i6482.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i6483[1], i6482.safeModeOptions)
  i6482.timeScale = i6483[2]
  i6482.unscaledTimeScale = i6483[3]
  i6482.useSmoothDeltaTime = !!i6483[4]
  i6482.maxSmoothUnscaledTime = i6483[5]
  i6482.rewindCallbackMode = i6483[6]
  i6482.showUnityEditorReport = !!i6483[7]
  i6482.logBehaviour = i6483[8]
  i6482.drawGizmos = !!i6483[9]
  i6482.defaultRecyclable = !!i6483[10]
  i6482.defaultAutoPlay = i6483[11]
  i6482.defaultUpdateType = i6483[12]
  i6482.defaultTimeScaleIndependent = !!i6483[13]
  i6482.defaultEaseType = i6483[14]
  i6482.defaultEaseOvershootOrAmplitude = i6483[15]
  i6482.defaultEasePeriod = i6483[16]
  i6482.defaultAutoKill = !!i6483[17]
  i6482.defaultLoopType = i6483[18]
  i6482.debugMode = !!i6483[19]
  i6482.debugStoreTargetId = !!i6483[20]
  i6482.showPreviewPanel = !!i6483[21]
  i6482.storeSettingsLocation = i6483[22]
  i6482.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i6483[23], i6482.modules)
  i6482.createASMDEF = !!i6483[24]
  i6482.showPlayingTweens = !!i6483[25]
  i6482.showPausedTweens = !!i6483[26]
  return i6482
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i6484 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i6485 = data
  i6484.logBehaviour = i6485[0]
  i6484.nestedTweenFailureBehaviour = i6485[1]
  return i6484
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i6486 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i6487 = data
  i6486.showPanel = !!i6487[0]
  i6486.audioEnabled = !!i6487[1]
  i6486.physicsEnabled = !!i6487[2]
  i6486.physics2DEnabled = !!i6487[3]
  i6486.spriteEnabled = !!i6487[4]
  i6486.uiEnabled = !!i6487[5]
  i6486.uiToolkitEnabled = !!i6487[6]
  i6486.textMeshProEnabled = !!i6487[7]
  i6486.tk2DEnabled = !!i6487[8]
  i6486.deAudioEnabled = !!i6487[9]
  i6486.deUnityExtendedEnabled = !!i6487[10]
  i6486.epoOutlineEnabled = !!i6487[11]
  return i6486
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i6488 = root || request.c( 'TMPro.TMP_Settings' )
  var i6489 = data
  i6488.assetVersion = i6489[0]
  i6488.m_TextWrappingMode = i6489[1]
  i6488.m_enableKerning = !!i6489[2]
  var i6491 = i6489[3]
  var i6490 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i6491.length; i += 1) {
    i6490.add(i6491[i + 0]);
  }
  i6488.m_ActiveFontFeatures = i6490
  i6488.m_enableExtraPadding = !!i6489[4]
  i6488.m_enableTintAllSprites = !!i6489[5]
  i6488.m_enableParseEscapeCharacters = !!i6489[6]
  i6488.m_EnableRaycastTarget = !!i6489[7]
  i6488.m_GetFontFeaturesAtRuntime = !!i6489[8]
  i6488.m_missingGlyphCharacter = i6489[9]
  i6488.m_ClearDynamicDataOnBuild = !!i6489[10]
  i6488.m_warningsDisabled = !!i6489[11]
  request.r(i6489[12], i6489[13], 0, i6488, 'm_defaultFontAsset')
  i6488.m_defaultFontAssetPath = i6489[14]
  i6488.m_defaultFontSize = i6489[15]
  i6488.m_defaultAutoSizeMinRatio = i6489[16]
  i6488.m_defaultAutoSizeMaxRatio = i6489[17]
  i6488.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i6489[18], i6489[19] )
  i6488.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i6489[20], i6489[21] )
  i6488.m_autoSizeTextContainer = !!i6489[22]
  i6488.m_IsTextObjectScaleStatic = !!i6489[23]
  var i6493 = i6489[24]
  var i6492 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i6493.length; i += 2) {
  request.r(i6493[i + 0], i6493[i + 1], 1, i6492, '')
  }
  i6488.m_fallbackFontAssets = i6492
  i6488.m_matchMaterialPreset = !!i6489[25]
  i6488.m_HideSubTextObjects = !!i6489[26]
  request.r(i6489[27], i6489[28], 0, i6488, 'm_defaultSpriteAsset')
  i6488.m_defaultSpriteAssetPath = i6489[29]
  i6488.m_enableEmojiSupport = !!i6489[30]
  i6488.m_MissingCharacterSpriteUnicode = i6489[31]
  var i6495 = i6489[32]
  var i6494 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i6495.length; i += 2) {
  request.r(i6495[i + 0], i6495[i + 1], 1, i6494, '')
  }
  i6488.m_EmojiFallbackTextAssets = i6494
  i6488.m_defaultColorGradientPresetsPath = i6489[33]
  request.r(i6489[34], i6489[35], 0, i6488, 'm_defaultStyleSheet')
  i6488.m_StyleSheetsResourcePath = i6489[36]
  request.r(i6489[37], i6489[38], 0, i6488, 'm_leadingCharacters')
  request.r(i6489[39], i6489[40], 0, i6488, 'm_followingCharacters')
  i6488.m_UseModernHangulLineBreakingRules = !!i6489[41]
  return i6488
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i6502 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i6503 = data
  request.r(i6503[0], i6503[1], 0, i6502, 'spriteSheet')
  var i6505 = i6503[2]
  var i6504 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i6505.length; i += 1) {
    i6504.add(request.d('TMPro.TMP_Sprite', i6505[i + 0]));
  }
  i6502.spriteInfoList = i6504
  var i6507 = i6503[3]
  var i6506 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i6507.length; i += 2) {
  request.r(i6507[i + 0], i6507[i + 1], 1, i6506, '')
  }
  i6502.fallbackSpriteAssets = i6506
  var i6509 = i6503[4]
  var i6508 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i6509.length; i += 1) {
    i6508.add(request.d('TMPro.TMP_SpriteCharacter', i6509[i + 0]));
  }
  i6502.m_SpriteCharacterTable = i6508
  var i6511 = i6503[5]
  var i6510 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i6511.length; i += 1) {
    i6510.add(request.d('TMPro.TMP_SpriteGlyph', i6511[i + 0]));
  }
  i6502.m_GlyphTable = i6510
  i6502.m_Version = i6503[6]
  i6502.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i6503[7], i6502.m_FaceInfo)
  request.r(i6503[8], i6503[9], 0, i6502, 'm_Material')
  return i6502
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i6514 = root || request.c( 'TMPro.TMP_Sprite' )
  var i6515 = data
  i6514.name = i6515[0]
  i6514.hashCode = i6515[1]
  i6514.unicode = i6515[2]
  i6514.pivot = new pc.Vec2( i6515[3], i6515[4] )
  request.r(i6515[5], i6515[6], 0, i6514, 'sprite')
  i6514.id = i6515[7]
  i6514.x = i6515[8]
  i6514.y = i6515[9]
  i6514.width = i6515[10]
  i6514.height = i6515[11]
  i6514.xOffset = i6515[12]
  i6514.yOffset = i6515[13]
  i6514.xAdvance = i6515[14]
  i6514.scale = i6515[15]
  return i6514
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i6520 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i6521 = data
  i6520.m_Name = i6521[0]
  i6520.m_ElementType = i6521[1]
  i6520.m_Unicode = i6521[2]
  i6520.m_GlyphIndex = i6521[3]
  i6520.m_Scale = i6521[4]
  return i6520
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i6524 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i6525 = data
  request.r(i6525[0], i6525[1], 0, i6524, 'sprite')
  i6524.m_Index = i6525[2]
  i6524.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i6525[3], i6524.m_Metrics)
  i6524.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i6525[4], i6524.m_GlyphRect)
  i6524.m_Scale = i6525[5]
  i6524.m_AtlasIndex = i6525[6]
  i6524.m_ClassDefinitionType = i6525[7]
  return i6524
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i6526 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i6527 = data
  i6526.m_Width = i6527[0]
  i6526.m_Height = i6527[1]
  i6526.m_HorizontalBearingX = i6527[2]
  i6526.m_HorizontalBearingY = i6527[3]
  i6526.m_HorizontalAdvance = i6527[4]
  return i6526
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i6528 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i6529 = data
  i6528.m_X = i6529[0]
  i6528.m_Y = i6529[1]
  i6528.m_Width = i6529[2]
  i6528.m_Height = i6529[3]
  return i6528
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i6530 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i6531 = data
  i6530.m_FaceIndex = i6531[0]
  i6530.m_FamilyName = i6531[1]
  i6530.m_StyleName = i6531[2]
  i6530.m_PointSize = i6531[3]
  i6530.m_Scale = i6531[4]
  i6530.m_UnitsPerEM = i6531[5]
  i6530.m_LineHeight = i6531[6]
  i6530.m_AscentLine = i6531[7]
  i6530.m_CapLine = i6531[8]
  i6530.m_MeanLine = i6531[9]
  i6530.m_Baseline = i6531[10]
  i6530.m_DescentLine = i6531[11]
  i6530.m_SuperscriptOffset = i6531[12]
  i6530.m_SuperscriptSize = i6531[13]
  i6530.m_SubscriptOffset = i6531[14]
  i6530.m_SubscriptSize = i6531[15]
  i6530.m_UnderlineOffset = i6531[16]
  i6530.m_UnderlineThickness = i6531[17]
  i6530.m_StrikethroughOffset = i6531[18]
  i6530.m_StrikethroughThickness = i6531[19]
  i6530.m_TabWidth = i6531[20]
  return i6530
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i6532 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i6533 = data
  var i6535 = i6533[0]
  var i6534 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i6535.length; i += 1) {
    i6534.add(request.d('TMPro.TMP_Style', i6535[i + 0]));
  }
  i6532.m_StyleList = i6534
  return i6532
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i6538 = root || request.c( 'TMPro.TMP_Style' )
  var i6539 = data
  i6538.m_Name = i6539[0]
  i6538.m_HashCode = i6539[1]
  i6538.m_OpeningDefinition = i6539[2]
  i6538.m_ClosingDefinition = i6539[3]
  i6538.m_OpeningTagArray = i6539[4]
  i6538.m_ClosingTagArray = i6539[5]
  return i6538
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i6540 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i6541 = data
  var i6543 = i6541[0]
  var i6542 = []
  for(var i = 0; i < i6543.length; i += 1) {
    i6542.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i6543[i + 0]) );
  }
  i6540.files = i6542
  i6540.componentToPrefabIds = i6541[1]
  return i6540
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i6546 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i6547 = data
  i6546.path = i6547[0]
  request.r(i6547[1], i6547[2], 0, i6546, 'unityObject')
  return i6546
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i6548 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i6549 = data
  var i6551 = i6549[0]
  var i6550 = []
  for(var i = 0; i < i6551.length; i += 1) {
    i6550.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i6551[i + 0]) );
  }
  i6548.scriptsExecutionOrder = i6550
  var i6553 = i6549[1]
  var i6552 = []
  for(var i = 0; i < i6553.length; i += 1) {
    i6552.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i6553[i + 0]) );
  }
  i6548.sortingLayers = i6552
  var i6555 = i6549[2]
  var i6554 = []
  for(var i = 0; i < i6555.length; i += 1) {
    i6554.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i6555[i + 0]) );
  }
  i6548.cullingLayers = i6554
  i6548.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i6549[3], i6548.timeSettings)
  i6548.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i6549[4], i6548.physicsSettings)
  i6548.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i6549[5], i6548.physics2DSettings)
  i6548.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i6549[6], i6548.qualitySettings)
  i6548.enableRealtimeShadows = !!i6549[7]
  i6548.enableAutoInstancing = !!i6549[8]
  i6548.enableStaticBatching = !!i6549[9]
  i6548.enableDynamicBatching = !!i6549[10]
  i6548.lightmapEncodingQuality = i6549[11]
  i6548.desiredColorSpace = i6549[12]
  var i6557 = i6549[13]
  var i6556 = []
  for(var i = 0; i < i6557.length; i += 1) {
    i6556.push( i6557[i + 0] );
  }
  i6548.allTags = i6556
  return i6548
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i6560 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i6561 = data
  i6560.name = i6561[0]
  i6560.value = i6561[1]
  return i6560
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i6564 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i6565 = data
  i6564.id = i6565[0]
  i6564.name = i6565[1]
  i6564.value = i6565[2]
  return i6564
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i6568 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i6569 = data
  i6568.id = i6569[0]
  i6568.name = i6569[1]
  return i6568
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i6570 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i6571 = data
  i6570.fixedDeltaTime = i6571[0]
  i6570.maximumDeltaTime = i6571[1]
  i6570.timeScale = i6571[2]
  i6570.maximumParticleTimestep = i6571[3]
  return i6570
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i6572 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i6573 = data
  i6572.gravity = new pc.Vec3( i6573[0], i6573[1], i6573[2] )
  i6572.defaultSolverIterations = i6573[3]
  i6572.bounceThreshold = i6573[4]
  i6572.autoSyncTransforms = !!i6573[5]
  i6572.autoSimulation = !!i6573[6]
  var i6575 = i6573[7]
  var i6574 = []
  for(var i = 0; i < i6575.length; i += 1) {
    i6574.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i6575[i + 0]) );
  }
  i6572.collisionMatrix = i6574
  return i6572
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i6578 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i6579 = data
  i6578.enabled = !!i6579[0]
  i6578.layerId = i6579[1]
  i6578.otherLayerId = i6579[2]
  return i6578
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i6580 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i6581 = data
  request.r(i6581[0], i6581[1], 0, i6580, 'material')
  i6580.gravity = new pc.Vec2( i6581[2], i6581[3] )
  i6580.positionIterations = i6581[4]
  i6580.velocityIterations = i6581[5]
  i6580.velocityThreshold = i6581[6]
  i6580.maxLinearCorrection = i6581[7]
  i6580.maxAngularCorrection = i6581[8]
  i6580.maxTranslationSpeed = i6581[9]
  i6580.maxRotationSpeed = i6581[10]
  i6580.baumgarteScale = i6581[11]
  i6580.baumgarteTOIScale = i6581[12]
  i6580.timeToSleep = i6581[13]
  i6580.linearSleepTolerance = i6581[14]
  i6580.angularSleepTolerance = i6581[15]
  i6580.defaultContactOffset = i6581[16]
  i6580.autoSimulation = !!i6581[17]
  i6580.queriesHitTriggers = !!i6581[18]
  i6580.queriesStartInColliders = !!i6581[19]
  i6580.callbacksOnDisable = !!i6581[20]
  i6580.reuseCollisionCallbacks = !!i6581[21]
  i6580.autoSyncTransforms = !!i6581[22]
  var i6583 = i6581[23]
  var i6582 = []
  for(var i = 0; i < i6583.length; i += 1) {
    i6582.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i6583[i + 0]) );
  }
  i6580.collisionMatrix = i6582
  return i6580
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i6586 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i6587 = data
  i6586.enabled = !!i6587[0]
  i6586.layerId = i6587[1]
  i6586.otherLayerId = i6587[2]
  return i6586
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i6588 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i6589 = data
  var i6591 = i6589[0]
  var i6590 = []
  for(var i = 0; i < i6591.length; i += 1) {
    i6590.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i6591[i + 0]) );
  }
  i6588.qualityLevels = i6590
  var i6593 = i6589[1]
  var i6592 = []
  for(var i = 0; i < i6593.length; i += 1) {
    i6592.push( i6593[i + 0] );
  }
  i6588.names = i6592
  i6588.shadows = i6589[2]
  i6588.anisotropicFiltering = i6589[3]
  i6588.antiAliasing = i6589[4]
  i6588.lodBias = i6589[5]
  i6588.shadowCascades = i6589[6]
  i6588.shadowDistance = i6589[7]
  i6588.shadowmaskMode = i6589[8]
  i6588.shadowProjection = i6589[9]
  i6588.shadowResolution = i6589[10]
  i6588.softParticles = !!i6589[11]
  i6588.softVegetation = !!i6589[12]
  i6588.activeColorSpace = i6589[13]
  i6588.desiredColorSpace = i6589[14]
  i6588.masterTextureLimit = i6589[15]
  i6588.maxQueuedFrames = i6589[16]
  i6588.particleRaycastBudget = i6589[17]
  i6588.pixelLightCount = i6589[18]
  i6588.realtimeReflectionProbes = !!i6589[19]
  i6588.shadowCascade2Split = i6589[20]
  i6588.shadowCascade4Split = new pc.Vec3( i6589[21], i6589[22], i6589[23] )
  i6588.streamingMipmapsActive = !!i6589[24]
  i6588.vSyncCount = i6589[25]
  i6588.asyncUploadBufferSize = i6589[26]
  i6588.asyncUploadTimeSlice = i6589[27]
  i6588.billboardsFaceCameraPosition = !!i6589[28]
  i6588.shadowNearPlaneOffset = i6589[29]
  i6588.streamingMipmapsMemoryBudget = i6589[30]
  i6588.maximumLODLevel = i6589[31]
  i6588.streamingMipmapsAddAllCameras = !!i6589[32]
  i6588.streamingMipmapsMaxLevelReduction = i6589[33]
  i6588.streamingMipmapsRenderersPerFrame = i6589[34]
  i6588.resolutionScalingFixedDPIFactor = i6589[35]
  i6588.streamingMipmapsMaxFileIORequests = i6589[36]
  i6588.currentQualityLevel = i6589[37]
  return i6588
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i6598 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i6599 = data
  i6598.weight = i6599[0]
  i6598.vertices = i6599[1]
  i6598.normals = i6599[2]
  i6598.tangents = i6599[3]
  return i6598
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

Deserializers.creativeName = "PLY_V15";

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

Deserializers.buildID = "23dc583e-eb2f-4324-9feb-730db2a20bbb";

Deserializers.runtimeInitializeOnLoadInfos = [[["Unity","Services","Core","Internal","UnityServicesInitializer","EnableServicesInitializationAsync"],["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["DG","Tweening","DOTween","RuntimeOnLoad"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["Unity","Services","Core","Registration","CorePackageInitializer","InitializeOnLoad"],["Unity","Services","Core","Internal","TaskAsyncOperation","SetScheduler"],["Unity","Services","Core","Environments","Client","Scheduler","EngineStateHelper","Init"],["Unity","Services","Core","Environments","Client","Scheduler","ThreadHelper","Init"],["Ua2CoreInitializeCallback","Register"],["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["Unity","AI","Navigation","NavMeshLink","ClearTrackedList"],["Unity","AI","Navigation","NavMeshSurface","ClearNavMeshSurfaces"],["Unity","AI","Navigation","NavMeshModifierVolume","ClearNavMeshModifiers"],["Unity","AI","Navigation","NavMeshModifier","ClearNavMeshModifiers"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["Unity","Services","Core","Internal","UnityServicesInitializer","CreateStaticInstance"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[["Unity","Services","Core","Environments","Client","Http","JsonHelpers","RegisterTypesForAOT"]],[["Unity","Services","Core","UnityThreadUtils","CaptureUnityThreadInfo"],["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

