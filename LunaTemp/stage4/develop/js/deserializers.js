var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i2010 = root || request.c( 'UnityEngine.JointSpring' )
  var i2011 = data
  i2010.spring = i2011[0]
  i2010.damper = i2011[1]
  i2010.targetPosition = i2011[2]
  return i2010
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i2012 = root || request.c( 'UnityEngine.JointMotor' )
  var i2013 = data
  i2012.m_TargetVelocity = i2013[0]
  i2012.m_Force = i2013[1]
  i2012.m_FreeSpin = i2013[2]
  return i2012
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i2014 = root || request.c( 'UnityEngine.JointLimits' )
  var i2015 = data
  i2014.m_Min = i2015[0]
  i2014.m_Max = i2015[1]
  i2014.m_Bounciness = i2015[2]
  i2014.m_BounceMinVelocity = i2015[3]
  i2014.m_ContactDistance = i2015[4]
  i2014.minBounce = i2015[5]
  i2014.maxBounce = i2015[6]
  return i2014
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i2016 = root || request.c( 'UnityEngine.JointDrive' )
  var i2017 = data
  i2016.m_PositionSpring = i2017[0]
  i2016.m_PositionDamper = i2017[1]
  i2016.m_MaximumForce = i2017[2]
  i2016.m_UseAcceleration = i2017[3]
  return i2016
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i2018 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i2019 = data
  i2018.m_Spring = i2019[0]
  i2018.m_Damper = i2019[1]
  return i2018
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i2020 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i2021 = data
  i2020.m_Limit = i2021[0]
  i2020.m_Bounciness = i2021[1]
  i2020.m_ContactDistance = i2021[2]
  return i2020
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i2022 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i2023 = data
  i2022.m_ExtremumSlip = i2023[0]
  i2022.m_ExtremumValue = i2023[1]
  i2022.m_AsymptoteSlip = i2023[2]
  i2022.m_AsymptoteValue = i2023[3]
  i2022.m_Stiffness = i2023[4]
  return i2022
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i2024 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i2025 = data
  i2024.m_LowerAngle = i2025[0]
  i2024.m_UpperAngle = i2025[1]
  return i2024
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i2026 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i2027 = data
  i2026.m_MotorSpeed = i2027[0]
  i2026.m_MaximumMotorTorque = i2027[1]
  return i2026
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i2028 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i2029 = data
  i2028.m_DampingRatio = i2029[0]
  i2028.m_Frequency = i2029[1]
  i2028.m_Angle = i2029[2]
  return i2028
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i2030 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i2031 = data
  i2030.m_LowerTranslation = i2031[0]
  i2030.m_UpperTranslation = i2031[1]
  return i2030
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i2032 = root || new pc.UnityMaterial()
  var i2033 = data
  i2032.name = i2033[0]
  request.r(i2033[1], i2033[2], 0, i2032, 'shader')
  i2032.renderQueue = i2033[3]
  i2032.enableInstancing = !!i2033[4]
  var i2035 = i2033[5]
  var i2034 = []
  for(var i = 0; i < i2035.length; i += 1) {
    i2034.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i2035[i + 0]) );
  }
  i2032.floatParameters = i2034
  var i2037 = i2033[6]
  var i2036 = []
  for(var i = 0; i < i2037.length; i += 1) {
    i2036.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i2037[i + 0]) );
  }
  i2032.colorParameters = i2036
  var i2039 = i2033[7]
  var i2038 = []
  for(var i = 0; i < i2039.length; i += 1) {
    i2038.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i2039[i + 0]) );
  }
  i2032.vectorParameters = i2038
  var i2041 = i2033[8]
  var i2040 = []
  for(var i = 0; i < i2041.length; i += 1) {
    i2040.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i2041[i + 0]) );
  }
  i2032.textureParameters = i2040
  var i2043 = i2033[9]
  var i2042 = []
  for(var i = 0; i < i2043.length; i += 1) {
    i2042.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i2043[i + 0]) );
  }
  i2032.materialFlags = i2042
  return i2032
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i2046 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i2047 = data
  i2046.name = i2047[0]
  i2046.value = i2047[1]
  return i2046
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i2050 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i2051 = data
  i2050.name = i2051[0]
  i2050.value = new pc.Color(i2051[1], i2051[2], i2051[3], i2051[4])
  return i2050
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i2054 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i2055 = data
  i2054.name = i2055[0]
  i2054.value = new pc.Vec4( i2055[1], i2055[2], i2055[3], i2055[4] )
  return i2054
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i2058 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i2059 = data
  i2058.name = i2059[0]
  request.r(i2059[1], i2059[2], 0, i2058, 'value')
  return i2058
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i2062 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i2063 = data
  i2062.name = i2063[0]
  i2062.enabled = !!i2063[1]
  return i2062
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i2064 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i2065 = data
  i2064.name = i2065[0]
  i2064.width = i2065[1]
  i2064.height = i2065[2]
  i2064.mipmapCount = i2065[3]
  i2064.anisoLevel = i2065[4]
  i2064.filterMode = i2065[5]
  i2064.hdr = !!i2065[6]
  i2064.format = i2065[7]
  i2064.wrapMode = i2065[8]
  i2064.alphaIsTransparency = !!i2065[9]
  i2064.alphaSource = i2065[10]
  i2064.graphicsFormat = i2065[11]
  i2064.sRGBTexture = !!i2065[12]
  i2064.desiredColorSpace = i2065[13]
  i2064.wrapU = i2065[14]
  i2064.wrapV = i2065[15]
  return i2064
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i2066 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i2067 = data
  i2066.name = i2067[0]
  i2066.halfPrecision = !!i2067[1]
  i2066.useSimplification = !!i2067[2]
  i2066.useUInt32IndexFormat = !!i2067[3]
  i2066.vertexCount = i2067[4]
  i2066.aabb = i2067[5]
  var i2069 = i2067[6]
  var i2068 = []
  for(var i = 0; i < i2069.length; i += 1) {
    i2068.push( !!i2069[i + 0] );
  }
  i2066.streams = i2068
  i2066.vertices = i2067[7]
  var i2071 = i2067[8]
  var i2070 = []
  for(var i = 0; i < i2071.length; i += 1) {
    i2070.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i2071[i + 0]) );
  }
  i2066.subMeshes = i2070
  var i2073 = i2067[9]
  var i2072 = []
  for(var i = 0; i < i2073.length; i += 16) {
    i2072.push( new pc.Mat4().setData(i2073[i + 0], i2073[i + 1], i2073[i + 2], i2073[i + 3],  i2073[i + 4], i2073[i + 5], i2073[i + 6], i2073[i + 7],  i2073[i + 8], i2073[i + 9], i2073[i + 10], i2073[i + 11],  i2073[i + 12], i2073[i + 13], i2073[i + 14], i2073[i + 15]) );
  }
  i2066.bindposes = i2072
  var i2075 = i2067[10]
  var i2074 = []
  for(var i = 0; i < i2075.length; i += 1) {
    i2074.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i2075[i + 0]) );
  }
  i2066.blendShapes = i2074
  return i2066
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i2080 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i2081 = data
  i2080.triangles = i2081[0]
  return i2080
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i2086 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i2087 = data
  i2086.name = i2087[0]
  var i2089 = i2087[1]
  var i2088 = []
  for(var i = 0; i < i2089.length; i += 1) {
    i2088.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i2089[i + 0]) );
  }
  i2086.frames = i2088
  return i2086
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i2090 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i2091 = data
  i2090.name = i2091[0]
  i2090.index = i2091[1]
  i2090.startup = !!i2091[2]
  return i2090
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i2092 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i2093 = data
  i2092.aspect = i2093[0]
  i2092.orthographic = !!i2093[1]
  i2092.orthographicSize = i2093[2]
  i2092.backgroundColor = new pc.Color(i2093[3], i2093[4], i2093[5], i2093[6])
  i2092.nearClipPlane = i2093[7]
  i2092.farClipPlane = i2093[8]
  i2092.fieldOfView = i2093[9]
  i2092.depth = i2093[10]
  i2092.clearFlags = i2093[11]
  i2092.cullingMask = i2093[12]
  i2092.rect = i2093[13]
  request.r(i2093[14], i2093[15], 0, i2092, 'targetTexture')
  i2092.usePhysicalProperties = !!i2093[16]
  i2092.focalLength = i2093[17]
  i2092.sensorSize = new pc.Vec2( i2093[18], i2093[19] )
  i2092.lensShift = new pc.Vec2( i2093[20], i2093[21] )
  i2092.gateFit = i2093[22]
  i2092.commandBufferCount = i2093[23]
  i2092.cameraType = i2093[24]
  i2092.enabled = !!i2093[25]
  return i2092
}

Deserializers["CameraFollow2D"] = function (request, data, root) {
  var i2094 = root || request.c( 'CameraFollow2D' )
  var i2095 = data
  request.r(i2095[0], i2095[1], 0, i2094, 'target')
  i2094.smoothSpeed = i2095[2]
  i2094.offset = new pc.Vec3( i2095[3], i2095[4], i2095[5] )
  i2094.followY = !!i2095[6]
  return i2094
}

Deserializers["AutoCameraFit"] = function (request, data, root) {
  var i2096 = root || request.c( 'AutoCameraFit' )
  var i2097 = data
  request.r(i2097[0], i2097[1], 0, i2096, 'tallScreenObject')
  i2096.tallScreenRatioThreshold = i2097[2]
  i2096.tallScreenYOffset = i2097[3]
  request.r(i2097[4], i2097[5], 0, i2096, 'canvasBtn')
  request.r(i2097[6], i2097[7], 0, i2096, 'targetArea')
  i2096.paddingLandscape = i2097[8]
  i2096.paddingPortrait = i2097[9]
  i2096.extraPaddingSmallScreen = i2097[10]
  i2096.smallScreenThreshold = i2097[11]
  i2096.autoUpdateOnResize = !!i2097[12]
  i2096.adjustInEditMode = !!i2097[13]
  return i2096
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i2098 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i2099 = data
  i2098.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i2099[0], i2098.main)
  i2098.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i2099[1], i2098.colorBySpeed)
  i2098.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i2099[2], i2098.colorOverLifetime)
  i2098.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i2099[3], i2098.emission)
  i2098.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i2099[4], i2098.rotationBySpeed)
  i2098.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i2099[5], i2098.rotationOverLifetime)
  i2098.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i2099[6], i2098.shape)
  i2098.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i2099[7], i2098.sizeBySpeed)
  i2098.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i2099[8], i2098.sizeOverLifetime)
  i2098.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i2099[9], i2098.textureSheetAnimation)
  i2098.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i2099[10], i2098.velocityOverLifetime)
  i2098.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i2099[11], i2098.noise)
  i2098.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i2099[12], i2098.inheritVelocity)
  i2098.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i2099[13], i2098.forceOverLifetime)
  i2098.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i2099[14], i2098.limitVelocityOverLifetime)
  i2098.useAutoRandomSeed = !!i2099[15]
  i2098.randomSeed = i2099[16]
  return i2098
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i2100 = root || new pc.ParticleSystemMain()
  var i2101 = data
  i2100.duration = i2101[0]
  i2100.loop = !!i2101[1]
  i2100.prewarm = !!i2101[2]
  i2100.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2101[3], i2100.startDelay)
  i2100.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2101[4], i2100.startLifetime)
  i2100.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2101[5], i2100.startSpeed)
  i2100.startSize3D = !!i2101[6]
  i2100.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2101[7], i2100.startSizeX)
  i2100.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2101[8], i2100.startSizeY)
  i2100.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2101[9], i2100.startSizeZ)
  i2100.startRotation3D = !!i2101[10]
  i2100.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2101[11], i2100.startRotationX)
  i2100.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2101[12], i2100.startRotationY)
  i2100.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2101[13], i2100.startRotationZ)
  i2100.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2101[14], i2100.startColor)
  i2100.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2101[15], i2100.gravityModifier)
  i2100.simulationSpace = i2101[16]
  request.r(i2101[17], i2101[18], 0, i2100, 'customSimulationSpace')
  i2100.simulationSpeed = i2101[19]
  i2100.useUnscaledTime = !!i2101[20]
  i2100.scalingMode = i2101[21]
  i2100.playOnAwake = !!i2101[22]
  i2100.maxParticles = i2101[23]
  i2100.emitterVelocityMode = i2101[24]
  i2100.stopAction = i2101[25]
  return i2100
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i2102 = root || new pc.MinMaxCurve()
  var i2103 = data
  i2102.mode = i2103[0]
  i2102.curveMin = new pc.AnimationCurve( { keys_flow: i2103[1] } )
  i2102.curveMax = new pc.AnimationCurve( { keys_flow: i2103[2] } )
  i2102.curveMultiplier = i2103[3]
  i2102.constantMin = i2103[4]
  i2102.constantMax = i2103[5]
  return i2102
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i2104 = root || new pc.MinMaxGradient()
  var i2105 = data
  i2104.mode = i2105[0]
  i2104.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2105[1], i2104.gradientMin)
  i2104.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2105[2], i2104.gradientMax)
  i2104.colorMin = new pc.Color(i2105[3], i2105[4], i2105[5], i2105[6])
  i2104.colorMax = new pc.Color(i2105[7], i2105[8], i2105[9], i2105[10])
  return i2104
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i2106 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i2107 = data
  i2106.mode = i2107[0]
  var i2109 = i2107[1]
  var i2108 = []
  for(var i = 0; i < i2109.length; i += 1) {
    i2108.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i2109[i + 0]) );
  }
  i2106.colorKeys = i2108
  var i2111 = i2107[2]
  var i2110 = []
  for(var i = 0; i < i2111.length; i += 1) {
    i2110.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i2111[i + 0]) );
  }
  i2106.alphaKeys = i2110
  return i2106
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i2112 = root || new pc.ParticleSystemColorBySpeed()
  var i2113 = data
  i2112.enabled = !!i2113[0]
  i2112.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2113[1], i2112.color)
  i2112.range = new pc.Vec2( i2113[2], i2113[3] )
  return i2112
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i2116 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i2117 = data
  i2116.color = new pc.Color(i2117[0], i2117[1], i2117[2], i2117[3])
  i2116.time = i2117[4]
  return i2116
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i2120 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i2121 = data
  i2120.alpha = i2121[0]
  i2120.time = i2121[1]
  return i2120
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i2122 = root || new pc.ParticleSystemColorOverLifetime()
  var i2123 = data
  i2122.enabled = !!i2123[0]
  i2122.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2123[1], i2122.color)
  return i2122
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i2124 = root || new pc.ParticleSystemEmitter()
  var i2125 = data
  i2124.enabled = !!i2125[0]
  i2124.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2125[1], i2124.rateOverTime)
  i2124.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2125[2], i2124.rateOverDistance)
  var i2127 = i2125[3]
  var i2126 = []
  for(var i = 0; i < i2127.length; i += 1) {
    i2126.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i2127[i + 0]) );
  }
  i2124.bursts = i2126
  return i2124
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i2130 = root || new pc.ParticleSystemBurst()
  var i2131 = data
  i2130.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2131[0], i2130.count)
  i2130.cycleCount = i2131[1]
  i2130.minCount = i2131[2]
  i2130.maxCount = i2131[3]
  i2130.repeatInterval = i2131[4]
  i2130.time = i2131[5]
  return i2130
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i2132 = root || new pc.ParticleSystemRotationBySpeed()
  var i2133 = data
  i2132.enabled = !!i2133[0]
  i2132.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2133[1], i2132.x)
  i2132.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2133[2], i2132.y)
  i2132.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2133[3], i2132.z)
  i2132.separateAxes = !!i2133[4]
  i2132.range = new pc.Vec2( i2133[5], i2133[6] )
  return i2132
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i2134 = root || new pc.ParticleSystemRotationOverLifetime()
  var i2135 = data
  i2134.enabled = !!i2135[0]
  i2134.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2135[1], i2134.x)
  i2134.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2135[2], i2134.y)
  i2134.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2135[3], i2134.z)
  i2134.separateAxes = !!i2135[4]
  return i2134
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i2136 = root || new pc.ParticleSystemShape()
  var i2137 = data
  i2136.enabled = !!i2137[0]
  i2136.shapeType = i2137[1]
  i2136.randomDirectionAmount = i2137[2]
  i2136.sphericalDirectionAmount = i2137[3]
  i2136.randomPositionAmount = i2137[4]
  i2136.alignToDirection = !!i2137[5]
  i2136.radius = i2137[6]
  i2136.radiusMode = i2137[7]
  i2136.radiusSpread = i2137[8]
  i2136.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2137[9], i2136.radiusSpeed)
  i2136.radiusThickness = i2137[10]
  i2136.angle = i2137[11]
  i2136.length = i2137[12]
  i2136.boxThickness = new pc.Vec3( i2137[13], i2137[14], i2137[15] )
  i2136.meshShapeType = i2137[16]
  request.r(i2137[17], i2137[18], 0, i2136, 'mesh')
  request.r(i2137[19], i2137[20], 0, i2136, 'meshRenderer')
  request.r(i2137[21], i2137[22], 0, i2136, 'skinnedMeshRenderer')
  i2136.useMeshMaterialIndex = !!i2137[23]
  i2136.meshMaterialIndex = i2137[24]
  i2136.useMeshColors = !!i2137[25]
  i2136.normalOffset = i2137[26]
  i2136.arc = i2137[27]
  i2136.arcMode = i2137[28]
  i2136.arcSpread = i2137[29]
  i2136.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2137[30], i2136.arcSpeed)
  i2136.donutRadius = i2137[31]
  i2136.position = new pc.Vec3( i2137[32], i2137[33], i2137[34] )
  i2136.rotation = new pc.Vec3( i2137[35], i2137[36], i2137[37] )
  i2136.scale = new pc.Vec3( i2137[38], i2137[39], i2137[40] )
  return i2136
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i2138 = root || new pc.ParticleSystemSizeBySpeed()
  var i2139 = data
  i2138.enabled = !!i2139[0]
  i2138.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2139[1], i2138.x)
  i2138.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2139[2], i2138.y)
  i2138.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2139[3], i2138.z)
  i2138.separateAxes = !!i2139[4]
  i2138.range = new pc.Vec2( i2139[5], i2139[6] )
  return i2138
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i2140 = root || new pc.ParticleSystemSizeOverLifetime()
  var i2141 = data
  i2140.enabled = !!i2141[0]
  i2140.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2141[1], i2140.x)
  i2140.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2141[2], i2140.y)
  i2140.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2141[3], i2140.z)
  i2140.separateAxes = !!i2141[4]
  return i2140
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i2142 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i2143 = data
  i2142.enabled = !!i2143[0]
  i2142.mode = i2143[1]
  i2142.animation = i2143[2]
  i2142.numTilesX = i2143[3]
  i2142.numTilesY = i2143[4]
  i2142.useRandomRow = !!i2143[5]
  i2142.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2143[6], i2142.frameOverTime)
  i2142.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2143[7], i2142.startFrame)
  i2142.cycleCount = i2143[8]
  i2142.rowIndex = i2143[9]
  i2142.flipU = i2143[10]
  i2142.flipV = i2143[11]
  i2142.spriteCount = i2143[12]
  var i2145 = i2143[13]
  var i2144 = []
  for(var i = 0; i < i2145.length; i += 2) {
  request.r(i2145[i + 0], i2145[i + 1], 2, i2144, '')
  }
  i2142.sprites = i2144
  return i2142
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i2148 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i2149 = data
  i2148.enabled = !!i2149[0]
  i2148.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2149[1], i2148.x)
  i2148.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2149[2], i2148.y)
  i2148.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2149[3], i2148.z)
  i2148.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2149[4], i2148.radial)
  i2148.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2149[5], i2148.speedModifier)
  i2148.space = i2149[6]
  i2148.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2149[7], i2148.orbitalX)
  i2148.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2149[8], i2148.orbitalY)
  i2148.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2149[9], i2148.orbitalZ)
  i2148.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2149[10], i2148.orbitalOffsetX)
  i2148.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2149[11], i2148.orbitalOffsetY)
  i2148.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2149[12], i2148.orbitalOffsetZ)
  return i2148
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i2150 = root || new pc.ParticleSystemNoise()
  var i2151 = data
  i2150.enabled = !!i2151[0]
  i2150.separateAxes = !!i2151[1]
  i2150.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2151[2], i2150.strengthX)
  i2150.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2151[3], i2150.strengthY)
  i2150.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2151[4], i2150.strengthZ)
  i2150.frequency = i2151[5]
  i2150.damping = !!i2151[6]
  i2150.octaveCount = i2151[7]
  i2150.octaveMultiplier = i2151[8]
  i2150.octaveScale = i2151[9]
  i2150.quality = i2151[10]
  i2150.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2151[11], i2150.scrollSpeed)
  i2150.scrollSpeedMultiplier = i2151[12]
  i2150.remapEnabled = !!i2151[13]
  i2150.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2151[14], i2150.remapX)
  i2150.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2151[15], i2150.remapY)
  i2150.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2151[16], i2150.remapZ)
  i2150.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2151[17], i2150.positionAmount)
  i2150.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2151[18], i2150.rotationAmount)
  i2150.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2151[19], i2150.sizeAmount)
  return i2150
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i2152 = root || new pc.ParticleSystemInheritVelocity()
  var i2153 = data
  i2152.enabled = !!i2153[0]
  i2152.mode = i2153[1]
  i2152.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2153[2], i2152.curve)
  return i2152
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i2154 = root || new pc.ParticleSystemForceOverLifetime()
  var i2155 = data
  i2154.enabled = !!i2155[0]
  i2154.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2155[1], i2154.x)
  i2154.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2155[2], i2154.y)
  i2154.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2155[3], i2154.z)
  i2154.space = i2155[4]
  i2154.randomized = !!i2155[5]
  return i2154
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i2156 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i2157 = data
  i2156.enabled = !!i2157[0]
  i2156.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2157[1], i2156.limit)
  i2156.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2157[2], i2156.limitX)
  i2156.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2157[3], i2156.limitY)
  i2156.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2157[4], i2156.limitZ)
  i2156.dampen = i2157[5]
  i2156.separateAxes = !!i2157[6]
  i2156.space = i2157[7]
  i2156.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2157[8], i2156.drag)
  i2156.multiplyDragByParticleSize = !!i2157[9]
  i2156.multiplyDragByParticleVelocity = !!i2157[10]
  return i2156
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i2158 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i2159 = data
  request.r(i2159[0], i2159[1], 0, i2158, 'mesh')
  i2158.meshCount = i2159[2]
  i2158.activeVertexStreamsCount = i2159[3]
  i2158.alignment = i2159[4]
  i2158.renderMode = i2159[5]
  i2158.sortMode = i2159[6]
  i2158.lengthScale = i2159[7]
  i2158.velocityScale = i2159[8]
  i2158.cameraVelocityScale = i2159[9]
  i2158.normalDirection = i2159[10]
  i2158.sortingFudge = i2159[11]
  i2158.minParticleSize = i2159[12]
  i2158.maxParticleSize = i2159[13]
  i2158.pivot = new pc.Vec3( i2159[14], i2159[15], i2159[16] )
  request.r(i2159[17], i2159[18], 0, i2158, 'trailMaterial')
  i2158.applyActiveColorSpace = !!i2159[19]
  i2158.enabled = !!i2159[20]
  request.r(i2159[21], i2159[22], 0, i2158, 'sharedMaterial')
  var i2161 = i2159[23]
  var i2160 = []
  for(var i = 0; i < i2161.length; i += 2) {
  request.r(i2161[i + 0], i2161[i + 1], 2, i2160, '')
  }
  i2158.sharedMaterials = i2160
  i2158.receiveShadows = !!i2159[24]
  i2158.shadowCastingMode = i2159[25]
  i2158.sortingLayerID = i2159[26]
  i2158.sortingOrder = i2159[27]
  i2158.lightmapIndex = i2159[28]
  i2158.lightmapSceneIndex = i2159[29]
  i2158.lightmapScaleOffset = new pc.Vec4( i2159[30], i2159[31], i2159[32], i2159[33] )
  i2158.lightProbeUsage = i2159[34]
  i2158.reflectionProbeUsage = i2159[35]
  return i2158
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i2164 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i2165 = data
  i2164.name = i2165[0]
  i2164.tagId = i2165[1]
  i2164.enabled = !!i2165[2]
  i2164.isStatic = !!i2165[3]
  i2164.layer = i2165[4]
  return i2164
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i2166 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i2167 = data
  i2166.color = new pc.Color(i2167[0], i2167[1], i2167[2], i2167[3])
  request.r(i2167[4], i2167[5], 0, i2166, 'sprite')
  i2166.flipX = !!i2167[6]
  i2166.flipY = !!i2167[7]
  i2166.drawMode = i2167[8]
  i2166.size = new pc.Vec2( i2167[9], i2167[10] )
  i2166.tileMode = i2167[11]
  i2166.adaptiveModeThreshold = i2167[12]
  i2166.maskInteraction = i2167[13]
  i2166.spriteSortPoint = i2167[14]
  i2166.enabled = !!i2167[15]
  request.r(i2167[16], i2167[17], 0, i2166, 'sharedMaterial')
  var i2169 = i2167[18]
  var i2168 = []
  for(var i = 0; i < i2169.length; i += 2) {
  request.r(i2169[i + 0], i2169[i + 1], 2, i2168, '')
  }
  i2166.sharedMaterials = i2168
  i2166.receiveShadows = !!i2167[19]
  i2166.shadowCastingMode = i2167[20]
  i2166.sortingLayerID = i2167[21]
  i2166.sortingOrder = i2167[22]
  i2166.lightmapIndex = i2167[23]
  i2166.lightmapSceneIndex = i2167[24]
  i2166.lightmapScaleOffset = new pc.Vec4( i2167[25], i2167[26], i2167[27], i2167[28] )
  i2166.lightProbeUsage = i2167[29]
  i2166.reflectionProbeUsage = i2167[30]
  return i2166
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i2170 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i2171 = data
  request.r(i2171[0], i2171[1], 0, i2170, 'animatorController')
  request.r(i2171[2], i2171[3], 0, i2170, 'avatar')
  i2170.updateMode = i2171[4]
  i2170.hasTransformHierarchy = !!i2171[5]
  i2170.applyRootMotion = !!i2171[6]
  var i2173 = i2171[7]
  var i2172 = []
  for(var i = 0; i < i2173.length; i += 2) {
  request.r(i2173[i + 0], i2173[i + 1], 2, i2172, '')
  }
  i2170.humanBones = i2172
  i2170.enabled = !!i2171[8]
  return i2170
}

Deserializers["MoveBetweenPoints"] = function (request, data, root) {
  var i2176 = root || request.c( 'MoveBetweenPoints' )
  var i2177 = data
  request.r(i2177[0], i2177[1], 0, i2176, 'pointA')
  request.r(i2177[2], i2177[3], 0, i2176, 'pointB')
  i2176.duration = i2177[4]
  return i2176
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i2178 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i2179 = data
  i2178.pivot = new pc.Vec2( i2179[0], i2179[1] )
  i2178.anchorMin = new pc.Vec2( i2179[2], i2179[3] )
  i2178.anchorMax = new pc.Vec2( i2179[4], i2179[5] )
  i2178.sizeDelta = new pc.Vec2( i2179[6], i2179[7] )
  i2178.anchoredPosition3D = new pc.Vec3( i2179[8], i2179[9], i2179[10] )
  i2178.rotation = new pc.Quat(i2179[11], i2179[12], i2179[13], i2179[14])
  i2178.scale = new pc.Vec3( i2179[15], i2179[16], i2179[17] )
  return i2178
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i2180 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i2181 = data
  request.r(i2181[0], i2181[1], 0, i2180, 'additionalVertexStreams')
  i2180.enabled = !!i2181[2]
  request.r(i2181[3], i2181[4], 0, i2180, 'sharedMaterial')
  var i2183 = i2181[5]
  var i2182 = []
  for(var i = 0; i < i2183.length; i += 2) {
  request.r(i2183[i + 0], i2183[i + 1], 2, i2182, '')
  }
  i2180.sharedMaterials = i2182
  i2180.receiveShadows = !!i2181[6]
  i2180.shadowCastingMode = i2181[7]
  i2180.sortingLayerID = i2181[8]
  i2180.sortingOrder = i2181[9]
  i2180.lightmapIndex = i2181[10]
  i2180.lightmapSceneIndex = i2181[11]
  i2180.lightmapScaleOffset = new pc.Vec4( i2181[12], i2181[13], i2181[14], i2181[15] )
  i2180.lightProbeUsage = i2181[16]
  i2180.reflectionProbeUsage = i2181[17]
  return i2180
}

Deserializers["TMPro.TextMeshPro"] = function (request, data, root) {
  var i2184 = root || request.c( 'TMPro.TextMeshPro' )
  var i2185 = data
  i2184._SortingLayer = i2185[0]
  i2184._SortingLayerID = i2185[1]
  i2184._SortingOrder = i2185[2]
  i2184.m_hasFontAssetChanged = !!i2185[3]
  request.r(i2185[4], i2185[5], 0, i2184, 'm_renderer')
  i2184.m_maskType = i2185[6]
  i2184.m_text = i2185[7]
  i2184.m_isRightToLeft = !!i2185[8]
  request.r(i2185[9], i2185[10], 0, i2184, 'm_fontAsset')
  request.r(i2185[11], i2185[12], 0, i2184, 'm_sharedMaterial')
  var i2187 = i2185[13]
  var i2186 = []
  for(var i = 0; i < i2187.length; i += 2) {
  request.r(i2187[i + 0], i2187[i + 1], 2, i2186, '')
  }
  i2184.m_fontSharedMaterials = i2186
  request.r(i2185[14], i2185[15], 0, i2184, 'm_fontMaterial')
  var i2189 = i2185[16]
  var i2188 = []
  for(var i = 0; i < i2189.length; i += 2) {
  request.r(i2189[i + 0], i2189[i + 1], 2, i2188, '')
  }
  i2184.m_fontMaterials = i2188
  i2184.m_fontColor32 = UnityEngine.Color32.ConstructColor(i2185[17], i2185[18], i2185[19], i2185[20])
  i2184.m_fontColor = new pc.Color(i2185[21], i2185[22], i2185[23], i2185[24])
  i2184.m_enableVertexGradient = !!i2185[25]
  i2184.m_colorMode = i2185[26]
  i2184.m_fontColorGradient = request.d('TMPro.VertexGradient', i2185[27], i2184.m_fontColorGradient)
  request.r(i2185[28], i2185[29], 0, i2184, 'm_fontColorGradientPreset')
  request.r(i2185[30], i2185[31], 0, i2184, 'm_spriteAsset')
  i2184.m_tintAllSprites = !!i2185[32]
  request.r(i2185[33], i2185[34], 0, i2184, 'm_StyleSheet')
  i2184.m_TextStyleHashCode = i2185[35]
  i2184.m_overrideHtmlColors = !!i2185[36]
  i2184.m_faceColor = UnityEngine.Color32.ConstructColor(i2185[37], i2185[38], i2185[39], i2185[40])
  i2184.m_fontSize = i2185[41]
  i2184.m_fontSizeBase = i2185[42]
  i2184.m_fontWeight = i2185[43]
  i2184.m_enableAutoSizing = !!i2185[44]
  i2184.m_fontSizeMin = i2185[45]
  i2184.m_fontSizeMax = i2185[46]
  i2184.m_fontStyle = i2185[47]
  i2184.m_HorizontalAlignment = i2185[48]
  i2184.m_VerticalAlignment = i2185[49]
  i2184.m_textAlignment = i2185[50]
  i2184.m_characterSpacing = i2185[51]
  i2184.m_wordSpacing = i2185[52]
  i2184.m_lineSpacing = i2185[53]
  i2184.m_lineSpacingMax = i2185[54]
  i2184.m_paragraphSpacing = i2185[55]
  i2184.m_charWidthMaxAdj = i2185[56]
  i2184.m_TextWrappingMode = i2185[57]
  i2184.m_wordWrappingRatios = i2185[58]
  i2184.m_overflowMode = i2185[59]
  request.r(i2185[60], i2185[61], 0, i2184, 'm_linkedTextComponent')
  request.r(i2185[62], i2185[63], 0, i2184, 'parentLinkedComponent')
  i2184.m_enableKerning = !!i2185[64]
  var i2191 = i2185[65]
  var i2190 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i2191.length; i += 1) {
    i2190.add(i2191[i + 0]);
  }
  i2184.m_ActiveFontFeatures = i2190
  i2184.m_enableExtraPadding = !!i2185[66]
  i2184.checkPaddingRequired = !!i2185[67]
  i2184.m_isRichText = !!i2185[68]
  i2184.m_parseCtrlCharacters = !!i2185[69]
  i2184.m_isOrthographic = !!i2185[70]
  i2184.m_isCullingEnabled = !!i2185[71]
  i2184.m_horizontalMapping = i2185[72]
  i2184.m_verticalMapping = i2185[73]
  i2184.m_uvLineOffset = i2185[74]
  i2184.m_geometrySortingOrder = i2185[75]
  i2184.m_IsTextObjectScaleStatic = !!i2185[76]
  i2184.m_VertexBufferAutoSizeReduction = !!i2185[77]
  i2184.m_useMaxVisibleDescender = !!i2185[78]
  i2184.m_pageToDisplay = i2185[79]
  i2184.m_margin = new pc.Vec4( i2185[80], i2185[81], i2185[82], i2185[83] )
  i2184.m_isUsingLegacyAnimationComponent = !!i2185[84]
  i2184.m_isVolumetricText = !!i2185[85]
  request.r(i2185[86], i2185[87], 0, i2184, 'm_Material')
  i2184.m_EmojiFallbackSupport = !!i2185[88]
  i2184.m_Maskable = !!i2185[89]
  i2184.m_Color = new pc.Color(i2185[90], i2185[91], i2185[92], i2185[93])
  i2184.m_RaycastTarget = !!i2185[94]
  i2184.m_RaycastPadding = new pc.Vec4( i2185[95], i2185[96], i2185[97], i2185[98] )
  return i2184
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i2192 = root || request.c( 'TMPro.VertexGradient' )
  var i2193 = data
  i2192.topLeft = new pc.Color(i2193[0], i2193[1], i2193[2], i2193[3])
  i2192.topRight = new pc.Color(i2193[4], i2193[5], i2193[6], i2193[7])
  i2192.bottomLeft = new pc.Color(i2193[8], i2193[9], i2193[10], i2193[11])
  i2192.bottomRight = new pc.Color(i2193[12], i2193[13], i2193[14], i2193[15])
  return i2192
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i2196 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i2197 = data
  request.r(i2197[0], i2197[1], 0, i2196, 'sharedMesh')
  return i2196
}

Deserializers["PlayerCardUIManager"] = function (request, data, root) {
  var i2198 = root || request.c( 'PlayerCardUIManager' )
  var i2199 = data
  request.r(i2199[0], i2199[1], 0, i2198, 'cardPanel')
  var i2201 = i2199[2]
  var i2200 = []
  for(var i = 0; i < i2201.length; i += 2) {
  request.r(i2201[i + 0], i2201[i + 1], 2, i2200, '')
  }
  i2198.extraObjectsToActivate = i2200
  i2198.waitTime = i2199[3]
  var i2203 = i2199[4]
  var i2202 = []
  for(var i = 0; i < i2203.length; i += 2) {
  request.r(i2203[i + 0], i2203[i + 1], 2, i2202, '')
  }
  i2198.objectsToTurnOnAfterWait = i2202
  var i2205 = i2199[5]
  var i2204 = []
  for(var i = 0; i < i2205.length; i += 2) {
  request.r(i2205[i + 0], i2205[i + 1], 2, i2204, '')
  }
  i2198.objectsToTurnOffAfterWait = i2204
  request.r(i2199[6], i2199[7], 0, i2198, 'nationalityText')
  request.r(i2199[8], i2199[9], 0, i2198, 'playerImage')
  request.r(i2199[10], i2199[11], 0, i2198, 'flagImage')
  return i2198
}

Deserializers["Ply_SoundManager"] = function (request, data, root) {
  var i2208 = root || request.c( 'Ply_SoundManager' )
  var i2209 = data
  i2208.fxAudio = request.d('FxAudio', i2209[0], i2208.fxAudio)
  request.r(i2209[1], i2209[2], 0, i2208, 'bgm1')
  return i2208
}

Deserializers["FxAudio"] = function (request, data, root) {
  var i2210 = root || request.c( 'FxAudio' )
  var i2211 = data
  i2210.ClickBox = request.d('SoundData', i2211[0], i2210.ClickBox)
  i2210.Happy = request.d('SoundData', i2211[1], i2210.Happy)
  i2210.Wrong = request.d('SoundData', i2211[2], i2210.Wrong)
  i2210.Spray = request.d('SoundData', i2211[3], i2210.Spray)
  i2210.Brush = request.d('SoundData', i2211[4], i2210.Brush)
  return i2210
}

Deserializers["SoundData"] = function (request, data, root) {
  var i2212 = root || request.c( 'SoundData' )
  var i2213 = data
  request.r(i2213[0], i2213[1], 0, i2212, 'clip')
  i2212.repeatCount = i2213[2]
  return i2212
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i2214 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i2215 = data
  request.r(i2215[0], i2215[1], 0, i2214, 'clip')
  request.r(i2215[2], i2215[3], 0, i2214, 'outputAudioMixerGroup')
  i2214.playOnAwake = !!i2215[4]
  i2214.loop = !!i2215[5]
  i2214.time = i2215[6]
  i2214.volume = i2215[7]
  i2214.pitch = i2215[8]
  i2214.enabled = !!i2215[9]
  return i2214
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i2216 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i2217 = data
  i2216.planeDistance = i2217[0]
  i2216.referencePixelsPerUnit = i2217[1]
  i2216.isFallbackOverlay = !!i2217[2]
  i2216.renderMode = i2217[3]
  i2216.renderOrder = i2217[4]
  i2216.sortingLayerName = i2217[5]
  i2216.sortingOrder = i2217[6]
  i2216.scaleFactor = i2217[7]
  request.r(i2217[8], i2217[9], 0, i2216, 'worldCamera')
  i2216.overrideSorting = !!i2217[10]
  i2216.pixelPerfect = !!i2217[11]
  i2216.targetDisplay = i2217[12]
  i2216.overridePixelPerfect = !!i2217[13]
  i2216.enabled = !!i2217[14]
  return i2216
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i2218 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i2219 = data
  i2218.m_UiScaleMode = i2219[0]
  i2218.m_ReferencePixelsPerUnit = i2219[1]
  i2218.m_ScaleFactor = i2219[2]
  i2218.m_ReferenceResolution = new pc.Vec2( i2219[3], i2219[4] )
  i2218.m_ScreenMatchMode = i2219[5]
  i2218.m_MatchWidthOrHeight = i2219[6]
  i2218.m_PhysicalUnit = i2219[7]
  i2218.m_FallbackScreenDPI = i2219[8]
  i2218.m_DefaultSpriteDPI = i2219[9]
  i2218.m_DynamicPixelsPerUnit = i2219[10]
  i2218.m_PresetInfoIsWorld = !!i2219[11]
  return i2218
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i2220 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i2221 = data
  i2220.m_IgnoreReversedGraphics = !!i2221[0]
  i2220.m_BlockingObjects = i2221[1]
  i2220.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i2221[2] )
  return i2220
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i2222 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i2223 = data
  i2222.cullTransparentMesh = !!i2223[0]
  return i2222
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i2224 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i2225 = data
  i2224.m_hasFontAssetChanged = !!i2225[0]
  request.r(i2225[1], i2225[2], 0, i2224, 'm_baseMaterial')
  i2224.m_maskOffset = new pc.Vec4( i2225[3], i2225[4], i2225[5], i2225[6] )
  i2224.m_text = i2225[7]
  i2224.m_isRightToLeft = !!i2225[8]
  request.r(i2225[9], i2225[10], 0, i2224, 'm_fontAsset')
  request.r(i2225[11], i2225[12], 0, i2224, 'm_sharedMaterial')
  var i2227 = i2225[13]
  var i2226 = []
  for(var i = 0; i < i2227.length; i += 2) {
  request.r(i2227[i + 0], i2227[i + 1], 2, i2226, '')
  }
  i2224.m_fontSharedMaterials = i2226
  request.r(i2225[14], i2225[15], 0, i2224, 'm_fontMaterial')
  var i2229 = i2225[16]
  var i2228 = []
  for(var i = 0; i < i2229.length; i += 2) {
  request.r(i2229[i + 0], i2229[i + 1], 2, i2228, '')
  }
  i2224.m_fontMaterials = i2228
  i2224.m_fontColor32 = UnityEngine.Color32.ConstructColor(i2225[17], i2225[18], i2225[19], i2225[20])
  i2224.m_fontColor = new pc.Color(i2225[21], i2225[22], i2225[23], i2225[24])
  i2224.m_enableVertexGradient = !!i2225[25]
  i2224.m_colorMode = i2225[26]
  i2224.m_fontColorGradient = request.d('TMPro.VertexGradient', i2225[27], i2224.m_fontColorGradient)
  request.r(i2225[28], i2225[29], 0, i2224, 'm_fontColorGradientPreset')
  request.r(i2225[30], i2225[31], 0, i2224, 'm_spriteAsset')
  i2224.m_tintAllSprites = !!i2225[32]
  request.r(i2225[33], i2225[34], 0, i2224, 'm_StyleSheet')
  i2224.m_TextStyleHashCode = i2225[35]
  i2224.m_overrideHtmlColors = !!i2225[36]
  i2224.m_faceColor = UnityEngine.Color32.ConstructColor(i2225[37], i2225[38], i2225[39], i2225[40])
  i2224.m_fontSize = i2225[41]
  i2224.m_fontSizeBase = i2225[42]
  i2224.m_fontWeight = i2225[43]
  i2224.m_enableAutoSizing = !!i2225[44]
  i2224.m_fontSizeMin = i2225[45]
  i2224.m_fontSizeMax = i2225[46]
  i2224.m_fontStyle = i2225[47]
  i2224.m_HorizontalAlignment = i2225[48]
  i2224.m_VerticalAlignment = i2225[49]
  i2224.m_textAlignment = i2225[50]
  i2224.m_characterSpacing = i2225[51]
  i2224.m_wordSpacing = i2225[52]
  i2224.m_lineSpacing = i2225[53]
  i2224.m_lineSpacingMax = i2225[54]
  i2224.m_paragraphSpacing = i2225[55]
  i2224.m_charWidthMaxAdj = i2225[56]
  i2224.m_TextWrappingMode = i2225[57]
  i2224.m_wordWrappingRatios = i2225[58]
  i2224.m_overflowMode = i2225[59]
  request.r(i2225[60], i2225[61], 0, i2224, 'm_linkedTextComponent')
  request.r(i2225[62], i2225[63], 0, i2224, 'parentLinkedComponent')
  i2224.m_enableKerning = !!i2225[64]
  var i2231 = i2225[65]
  var i2230 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i2231.length; i += 1) {
    i2230.add(i2231[i + 0]);
  }
  i2224.m_ActiveFontFeatures = i2230
  i2224.m_enableExtraPadding = !!i2225[66]
  i2224.checkPaddingRequired = !!i2225[67]
  i2224.m_isRichText = !!i2225[68]
  i2224.m_parseCtrlCharacters = !!i2225[69]
  i2224.m_isOrthographic = !!i2225[70]
  i2224.m_isCullingEnabled = !!i2225[71]
  i2224.m_horizontalMapping = i2225[72]
  i2224.m_verticalMapping = i2225[73]
  i2224.m_uvLineOffset = i2225[74]
  i2224.m_geometrySortingOrder = i2225[75]
  i2224.m_IsTextObjectScaleStatic = !!i2225[76]
  i2224.m_VertexBufferAutoSizeReduction = !!i2225[77]
  i2224.m_useMaxVisibleDescender = !!i2225[78]
  i2224.m_pageToDisplay = i2225[79]
  i2224.m_margin = new pc.Vec4( i2225[80], i2225[81], i2225[82], i2225[83] )
  i2224.m_isUsingLegacyAnimationComponent = !!i2225[84]
  i2224.m_isVolumetricText = !!i2225[85]
  request.r(i2225[86], i2225[87], 0, i2224, 'm_Material')
  i2224.m_EmojiFallbackSupport = !!i2225[88]
  i2224.m_Maskable = !!i2225[89]
  i2224.m_Color = new pc.Color(i2225[90], i2225[91], i2225[92], i2225[93])
  i2224.m_RaycastTarget = !!i2225[94]
  i2224.m_RaycastPadding = new pc.Vec4( i2225[95], i2225[96], i2225[97], i2225[98] )
  return i2224
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i2232 = root || request.c( 'UnityEngine.UI.Image' )
  var i2233 = data
  request.r(i2233[0], i2233[1], 0, i2232, 'm_Sprite')
  i2232.m_Type = i2233[2]
  i2232.m_PreserveAspect = !!i2233[3]
  i2232.m_FillCenter = !!i2233[4]
  i2232.m_FillMethod = i2233[5]
  i2232.m_FillAmount = i2233[6]
  i2232.m_FillClockwise = !!i2233[7]
  i2232.m_FillOrigin = i2233[8]
  i2232.m_UseSpriteMesh = !!i2233[9]
  i2232.m_PixelsPerUnitMultiplier = i2233[10]
  request.r(i2233[11], i2233[12], 0, i2232, 'm_Material')
  i2232.m_Maskable = !!i2233[13]
  i2232.m_Color = new pc.Color(i2233[14], i2233[15], i2233[16], i2233[17])
  i2232.m_RaycastTarget = !!i2233[18]
  i2232.m_RaycastPadding = new pc.Vec4( i2233[19], i2233[20], i2233[21], i2233[22] )
  return i2232
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i2234 = root || request.c( 'UnityEngine.UI.Button' )
  var i2235 = data
  i2234.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i2235[0], i2234.m_OnClick)
  i2234.m_Navigation = request.d('UnityEngine.UI.Navigation', i2235[1], i2234.m_Navigation)
  i2234.m_Transition = i2235[2]
  i2234.m_Colors = request.d('UnityEngine.UI.ColorBlock', i2235[3], i2234.m_Colors)
  i2234.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i2235[4], i2234.m_SpriteState)
  i2234.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i2235[5], i2234.m_AnimationTriggers)
  i2234.m_Interactable = !!i2235[6]
  request.r(i2235[7], i2235[8], 0, i2234, 'm_TargetGraphic')
  return i2234
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i2236 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i2237 = data
  i2236.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2237[0], i2236.m_PersistentCalls)
  return i2236
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i2238 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i2239 = data
  var i2241 = i2239[0]
  var i2240 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i2241.length; i += 1) {
    i2240.add(request.d('UnityEngine.Events.PersistentCall', i2241[i + 0]));
  }
  i2238.m_Calls = i2240
  return i2238
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i2244 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i2245 = data
  request.r(i2245[0], i2245[1], 0, i2244, 'm_Target')
  i2244.m_TargetAssemblyTypeName = i2245[2]
  i2244.m_MethodName = i2245[3]
  i2244.m_Mode = i2245[4]
  i2244.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i2245[5], i2244.m_Arguments)
  i2244.m_CallState = i2245[6]
  return i2244
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i2246 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i2247 = data
  request.r(i2247[0], i2247[1], 0, i2246, 'm_ObjectArgument')
  i2246.m_ObjectArgumentAssemblyTypeName = i2247[2]
  i2246.m_IntArgument = i2247[3]
  i2246.m_FloatArgument = i2247[4]
  i2246.m_StringArgument = i2247[5]
  i2246.m_BoolArgument = !!i2247[6]
  return i2246
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i2248 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i2249 = data
  i2248.m_Mode = i2249[0]
  i2248.m_WrapAround = !!i2249[1]
  request.r(i2249[2], i2249[3], 0, i2248, 'm_SelectOnUp')
  request.r(i2249[4], i2249[5], 0, i2248, 'm_SelectOnDown')
  request.r(i2249[6], i2249[7], 0, i2248, 'm_SelectOnLeft')
  request.r(i2249[8], i2249[9], 0, i2248, 'm_SelectOnRight')
  return i2248
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i2250 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i2251 = data
  i2250.m_NormalColor = new pc.Color(i2251[0], i2251[1], i2251[2], i2251[3])
  i2250.m_HighlightedColor = new pc.Color(i2251[4], i2251[5], i2251[6], i2251[7])
  i2250.m_PressedColor = new pc.Color(i2251[8], i2251[9], i2251[10], i2251[11])
  i2250.m_SelectedColor = new pc.Color(i2251[12], i2251[13], i2251[14], i2251[15])
  i2250.m_DisabledColor = new pc.Color(i2251[16], i2251[17], i2251[18], i2251[19])
  i2250.m_ColorMultiplier = i2251[20]
  i2250.m_FadeDuration = i2251[21]
  return i2250
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i2252 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i2253 = data
  request.r(i2253[0], i2253[1], 0, i2252, 'm_HighlightedSprite')
  request.r(i2253[2], i2253[3], 0, i2252, 'm_PressedSprite')
  request.r(i2253[4], i2253[5], 0, i2252, 'm_SelectedSprite')
  request.r(i2253[6], i2253[7], 0, i2252, 'm_DisabledSprite')
  return i2252
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i2254 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i2255 = data
  i2254.m_NormalTrigger = i2255[0]
  i2254.m_HighlightedTrigger = i2255[1]
  i2254.m_PressedTrigger = i2255[2]
  i2254.m_SelectedTrigger = i2255[3]
  i2254.m_DisabledTrigger = i2255[4]
  return i2254
}

Deserializers["ScreenHeightPositionAnchor"] = function (request, data, root) {
  var i2256 = root || request.c( 'ScreenHeightPositionAnchor' )
  var i2257 = data
  request.r(i2257[0], i2257[1], 0, i2256, 'anchorPoint')
  request.r(i2257[2], i2257[3], 0, i2256, 'targetCamera')
  i2256.viewportYRatio = i2257[4]
  i2256.alignOnStart = !!i2257[5]
  i2256.alignOnEnable = !!i2257[6]
  i2256.realignOnScreenSizeChanged = !!i2257[7]
  i2256.drawGizmos = !!i2257[8]
  i2256.targetLineColor = new pc.Color(i2257[9], i2257[10], i2257[11], i2257[12])
  i2256.anchorColor = new pc.Color(i2257[13], i2257[14], i2257[15], i2257[16])
  return i2256
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D"] = function (request, data, root) {
  var i2258 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D' )
  var i2259 = data
  i2258.usedByComposite = !!i2259[0]
  i2258.autoTiling = !!i2259[1]
  var i2261 = i2259[2]
  var i2260 = []
  for(var i = 0; i < i2261.length; i += 1) {
  var i2263 = i2261[i + 0]
  var i2262 = []
  for(var i = 0; i < i2263.length; i += 2) {
    i2262.push( new pc.Vec2( i2263[i + 0], i2263[i + 1] ) );
  }
    i2260.push( i2262 );
  }
  i2258.points = i2260
  i2258.enabled = !!i2259[3]
  i2258.isTrigger = !!i2259[4]
  i2258.usedByEffector = !!i2259[5]
  i2258.density = i2259[6]
  i2258.offset = new pc.Vec2( i2259[7], i2259[8] )
  request.r(i2259[9], i2259[10], 0, i2258, 'material')
  return i2258
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i2270 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i2271 = data
  i2270.usedByComposite = !!i2271[0]
  i2270.autoTiling = !!i2271[1]
  i2270.size = new pc.Vec2( i2271[2], i2271[3] )
  i2270.edgeRadius = i2271[4]
  i2270.enabled = !!i2271[5]
  i2270.isTrigger = !!i2271[6]
  i2270.usedByEffector = !!i2271[7]
  i2270.density = i2271[8]
  i2270.offset = new pc.Vec2( i2271[9], i2271[10] )
  request.r(i2271[11], i2271[12], 0, i2270, 'material')
  return i2270
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i2272 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i2273 = data
  i2272.bodyType = i2273[0]
  request.r(i2273[1], i2273[2], 0, i2272, 'material')
  i2272.simulated = !!i2273[3]
  i2272.useAutoMass = !!i2273[4]
  i2272.mass = i2273[5]
  i2272.drag = i2273[6]
  i2272.angularDrag = i2273[7]
  i2272.gravityScale = i2273[8]
  i2272.collisionDetectionMode = i2273[9]
  i2272.sleepMode = i2273[10]
  i2272.constraints = i2273[11]
  return i2272
}

Deserializers["BatStrikeController"] = function (request, data, root) {
  var i2274 = root || request.c( 'BatStrikeController' )
  var i2275 = data
  i2274.pullSpeed = i2275[0]
  i2274.maxPullDistance = i2275[1]
  i2274.minHoldTime = i2275[2]
  i2274.strikeForce = i2275[3]
  i2274.targetTag = i2275[4]
  return i2274
}

Deserializers["CupCollision"] = function (request, data, root) {
  var i2276 = root || request.c( 'CupCollision' )
  var i2277 = data
  i2276.baseTag = i2277[0]
  request.r(i2277[1], i2277[2], 0, i2276, 'objectToActivate')
  return i2276
}

Deserializers["SlotTrigger"] = function (request, data, root) {
  var i2278 = root || request.c( 'SlotTrigger' )
  var i2279 = data
  request.r(i2279[0], i2279[1], 0, i2278, 'cardData')
  i2278.targetTag = i2279[2]
  request.r(i2279[3], i2279[4], 0, i2278, 'yAnchor')
  i2278.moveSpeed = i2279[5]
  request.r(i2279[6], i2279[7], 0, i2278, 'objectToMoveDown')
  i2278.targetScreenYRatio = i2279[8]
  return i2278
}

Deserializers["HideOnFirstClick"] = function (request, data, root) {
  var i2280 = root || request.c( 'HideOnFirstClick' )
  var i2281 = data
  request.r(i2281[0], i2281[1], 0, i2280, 'objectToHide')
  return i2280
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i2282 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i2283 = data
  request.r(i2283[0], i2283[1], 0, i2282, 'm_FirstSelected')
  i2282.m_sendNavigationEvents = !!i2283[2]
  i2282.m_DragThreshold = i2283[3]
  return i2282
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i2284 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i2285 = data
  i2284.m_HorizontalAxis = i2285[0]
  i2284.m_VerticalAxis = i2285[1]
  i2284.m_SubmitButton = i2285[2]
  i2284.m_CancelButton = i2285[3]
  i2284.m_InputActionsPerSecond = i2285[4]
  i2284.m_RepeatDelay = i2285[5]
  i2284.m_ForceModuleActive = !!i2285[6]
  i2284.m_SendPointerHoverToParent = !!i2285[7]
  return i2284
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i2286 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i2287 = data
  i2286.ambientIntensity = i2287[0]
  i2286.reflectionIntensity = i2287[1]
  i2286.ambientMode = i2287[2]
  i2286.ambientLight = new pc.Color(i2287[3], i2287[4], i2287[5], i2287[6])
  i2286.ambientSkyColor = new pc.Color(i2287[7], i2287[8], i2287[9], i2287[10])
  i2286.ambientGroundColor = new pc.Color(i2287[11], i2287[12], i2287[13], i2287[14])
  i2286.ambientEquatorColor = new pc.Color(i2287[15], i2287[16], i2287[17], i2287[18])
  i2286.fogColor = new pc.Color(i2287[19], i2287[20], i2287[21], i2287[22])
  i2286.fogEndDistance = i2287[23]
  i2286.fogStartDistance = i2287[24]
  i2286.fogDensity = i2287[25]
  i2286.fog = !!i2287[26]
  request.r(i2287[27], i2287[28], 0, i2286, 'skybox')
  i2286.fogMode = i2287[29]
  var i2289 = i2287[30]
  var i2288 = []
  for(var i = 0; i < i2289.length; i += 1) {
    i2288.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i2289[i + 0]) );
  }
  i2286.lightmaps = i2288
  i2286.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i2287[31], i2286.lightProbes)
  i2286.lightmapsMode = i2287[32]
  i2286.mixedBakeMode = i2287[33]
  i2286.environmentLightingMode = i2287[34]
  i2286.ambientProbe = new pc.SphericalHarmonicsL2(i2287[35])
  i2286.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i2287[36])
  i2286.useReferenceAmbientProbe = !!i2287[37]
  request.r(i2287[38], i2287[39], 0, i2286, 'customReflection')
  request.r(i2287[40], i2287[41], 0, i2286, 'defaultReflection')
  i2286.defaultReflectionMode = i2287[42]
  i2286.defaultReflectionResolution = i2287[43]
  i2286.sunLightObjectId = i2287[44]
  i2286.pixelLightCount = i2287[45]
  i2286.defaultReflectionHDR = !!i2287[46]
  i2286.hasLightDataAsset = !!i2287[47]
  i2286.hasManualGenerate = !!i2287[48]
  return i2286
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i2292 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i2293 = data
  request.r(i2293[0], i2293[1], 0, i2292, 'lightmapColor')
  request.r(i2293[2], i2293[3], 0, i2292, 'lightmapDirection')
  request.r(i2293[4], i2293[5], 0, i2292, 'shadowMask')
  return i2292
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i2294 = root || new UnityEngine.LightProbes()
  var i2295 = data
  return i2294
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.PhysicsMaterial2D"] = function (request, data, root) {
  var i2302 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.PhysicsMaterial2D' )
  var i2303 = data
  i2302.name = i2303[0]
  i2302.bounciness = i2303[1]
  i2302.friction = i2303[2]
  return i2302
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i2304 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i2305 = data
  var i2307 = i2305[0]
  var i2306 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i2307.length; i += 1) {
    i2306.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i2307[i + 0]));
  }
  i2304.ShaderCompilationErrors = i2306
  i2304.name = i2305[1]
  i2304.guid = i2305[2]
  var i2309 = i2305[3]
  var i2308 = []
  for(var i = 0; i < i2309.length; i += 1) {
    i2308.push( i2309[i + 0] );
  }
  i2304.shaderDefinedKeywords = i2308
  var i2311 = i2305[4]
  var i2310 = []
  for(var i = 0; i < i2311.length; i += 1) {
    i2310.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i2311[i + 0]) );
  }
  i2304.passes = i2310
  var i2313 = i2305[5]
  var i2312 = []
  for(var i = 0; i < i2313.length; i += 1) {
    i2312.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i2313[i + 0]) );
  }
  i2304.usePasses = i2312
  var i2315 = i2305[6]
  var i2314 = []
  for(var i = 0; i < i2315.length; i += 1) {
    i2314.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i2315[i + 0]) );
  }
  i2304.defaultParameterValues = i2314
  request.r(i2305[7], i2305[8], 0, i2304, 'unityFallbackShader')
  i2304.readDepth = !!i2305[9]
  i2304.hasDepthOnlyPass = !!i2305[10]
  i2304.isCreatedByShaderGraph = !!i2305[11]
  i2304.disableBatching = !!i2305[12]
  i2304.compiled = !!i2305[13]
  return i2304
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i2318 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i2319 = data
  i2318.shaderName = i2319[0]
  i2318.errorMessage = i2319[1]
  return i2318
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i2324 = root || new pc.UnityShaderPass()
  var i2325 = data
  i2324.id = i2325[0]
  i2324.subShaderIndex = i2325[1]
  i2324.name = i2325[2]
  i2324.passType = i2325[3]
  i2324.grabPassTextureName = i2325[4]
  i2324.usePass = !!i2325[5]
  i2324.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2325[6], i2324.zTest)
  i2324.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2325[7], i2324.zWrite)
  i2324.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2325[8], i2324.culling)
  i2324.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2325[9], i2324.blending)
  i2324.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2325[10], i2324.alphaBlending)
  i2324.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2325[11], i2324.colorWriteMask)
  i2324.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2325[12], i2324.offsetUnits)
  i2324.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2325[13], i2324.offsetFactor)
  i2324.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2325[14], i2324.stencilRef)
  i2324.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2325[15], i2324.stencilReadMask)
  i2324.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2325[16], i2324.stencilWriteMask)
  i2324.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2325[17], i2324.stencilOp)
  i2324.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2325[18], i2324.stencilOpFront)
  i2324.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2325[19], i2324.stencilOpBack)
  var i2327 = i2325[20]
  var i2326 = []
  for(var i = 0; i < i2327.length; i += 1) {
    i2326.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i2327[i + 0]) );
  }
  i2324.tags = i2326
  var i2329 = i2325[21]
  var i2328 = []
  for(var i = 0; i < i2329.length; i += 1) {
    i2328.push( i2329[i + 0] );
  }
  i2324.passDefinedKeywords = i2328
  var i2331 = i2325[22]
  var i2330 = []
  for(var i = 0; i < i2331.length; i += 1) {
    i2330.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i2331[i + 0]) );
  }
  i2324.passDefinedKeywordGroups = i2330
  var i2333 = i2325[23]
  var i2332 = []
  for(var i = 0; i < i2333.length; i += 1) {
    i2332.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2333[i + 0]) );
  }
  i2324.variants = i2332
  var i2335 = i2325[24]
  var i2334 = []
  for(var i = 0; i < i2335.length; i += 1) {
    i2334.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2335[i + 0]) );
  }
  i2324.excludedVariants = i2334
  i2324.hasDepthReader = !!i2325[25]
  return i2324
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i2336 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i2337 = data
  i2336.val = i2337[0]
  i2336.name = i2337[1]
  return i2336
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i2338 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i2339 = data
  i2338.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2339[0], i2338.src)
  i2338.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2339[1], i2338.dst)
  i2338.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2339[2], i2338.op)
  return i2338
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i2340 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i2341 = data
  i2340.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2341[0], i2340.pass)
  i2340.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2341[1], i2340.fail)
  i2340.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2341[2], i2340.zFail)
  i2340.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2341[3], i2340.comp)
  return i2340
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i2344 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i2345 = data
  i2344.name = i2345[0]
  i2344.value = i2345[1]
  return i2344
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i2348 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i2349 = data
  var i2351 = i2349[0]
  var i2350 = []
  for(var i = 0; i < i2351.length; i += 1) {
    i2350.push( i2351[i + 0] );
  }
  i2348.keywords = i2350
  i2348.hasDiscard = !!i2349[1]
  return i2348
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i2354 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i2355 = data
  i2354.passId = i2355[0]
  i2354.subShaderIndex = i2355[1]
  var i2357 = i2355[2]
  var i2356 = []
  for(var i = 0; i < i2357.length; i += 1) {
    i2356.push( i2357[i + 0] );
  }
  i2354.keywords = i2356
  i2354.vertexProgram = i2355[3]
  i2354.fragmentProgram = i2355[4]
  i2354.exportedForWebGl2 = !!i2355[5]
  i2354.readDepth = !!i2355[6]
  return i2354
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i2360 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i2361 = data
  request.r(i2361[0], i2361[1], 0, i2360, 'shader')
  i2360.pass = i2361[2]
  return i2360
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i2364 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i2365 = data
  i2364.name = i2365[0]
  i2364.type = i2365[1]
  i2364.value = new pc.Vec4( i2365[2], i2365[3], i2365[4], i2365[5] )
  i2364.textureValue = i2365[6]
  i2364.shaderPropertyFlag = i2365[7]
  return i2364
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i2366 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i2367 = data
  i2366.name = i2367[0]
  request.r(i2367[1], i2367[2], 0, i2366, 'texture')
  i2366.aabb = i2367[3]
  i2366.vertices = i2367[4]
  i2366.triangles = i2367[5]
  i2366.textureRect = UnityEngine.Rect.MinMaxRect(i2367[6], i2367[7], i2367[8], i2367[9])
  i2366.packedRect = UnityEngine.Rect.MinMaxRect(i2367[10], i2367[11], i2367[12], i2367[13])
  i2366.border = new pc.Vec4( i2367[14], i2367[15], i2367[16], i2367[17] )
  i2366.transparency = i2367[18]
  i2366.bounds = i2367[19]
  i2366.pixelsPerUnit = i2367[20]
  i2366.textureWidth = i2367[21]
  i2366.textureHeight = i2367[22]
  i2366.nativeSize = new pc.Vec2( i2367[23], i2367[24] )
  i2366.pivot = new pc.Vec2( i2367[25], i2367[26] )
  i2366.textureRectOffset = new pc.Vec2( i2367[27], i2367[28] )
  return i2366
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i2368 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i2369 = data
  i2368.name = i2369[0]
  return i2368
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i2370 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i2371 = data
  i2370.name = i2371[0]
  i2370.wrapMode = i2371[1]
  i2370.isLooping = !!i2371[2]
  i2370.length = i2371[3]
  var i2373 = i2371[4]
  var i2372 = []
  for(var i = 0; i < i2373.length; i += 1) {
    i2372.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i2373[i + 0]) );
  }
  i2370.curves = i2372
  var i2375 = i2371[5]
  var i2374 = []
  for(var i = 0; i < i2375.length; i += 1) {
    i2374.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i2375[i + 0]) );
  }
  i2370.events = i2374
  i2370.halfPrecision = !!i2371[6]
  i2370._frameRate = i2371[7]
  i2370.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i2371[8], i2370.localBounds)
  i2370.hasMuscleCurves = !!i2371[9]
  var i2377 = i2371[10]
  var i2376 = []
  for(var i = 0; i < i2377.length; i += 1) {
    i2376.push( i2377[i + 0] );
  }
  i2370.clipMuscleConstant = i2376
  i2370.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i2371[11], i2370.clipBindingConstant)
  return i2370
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i2380 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i2381 = data
  i2380.path = i2381[0]
  i2380.hash = i2381[1]
  i2380.componentType = i2381[2]
  i2380.property = i2381[3]
  i2380.keys = i2381[4]
  var i2383 = i2381[5]
  var i2382 = []
  for(var i = 0; i < i2383.length; i += 1) {
    i2382.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i2383[i + 0]) );
  }
  i2380.objectReferenceKeys = i2382
  return i2380
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i2386 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i2387 = data
  i2386.time = i2387[0]
  request.r(i2387[1], i2387[2], 0, i2386, 'value')
  return i2386
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i2390 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i2391 = data
  i2390.functionName = i2391[0]
  i2390.floatParameter = i2391[1]
  i2390.intParameter = i2391[2]
  i2390.stringParameter = i2391[3]
  request.r(i2391[4], i2391[5], 0, i2390, 'objectReferenceParameter')
  i2390.time = i2391[6]
  return i2390
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i2392 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i2393 = data
  i2392.center = new pc.Vec3( i2393[0], i2393[1], i2393[2] )
  i2392.extends = new pc.Vec3( i2393[3], i2393[4], i2393[5] )
  return i2392
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i2396 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i2397 = data
  var i2399 = i2397[0]
  var i2398 = []
  for(var i = 0; i < i2399.length; i += 1) {
    i2398.push( i2399[i + 0] );
  }
  i2396.genericBindings = i2398
  var i2401 = i2397[1]
  var i2400 = []
  for(var i = 0; i < i2401.length; i += 1) {
    i2400.push( i2401[i + 0] );
  }
  i2396.pptrCurveMapping = i2400
  return i2396
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i2402 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i2403 = data
  i2402.name = i2403[0]
  i2402.ascent = i2403[1]
  i2402.originalLineHeight = i2403[2]
  i2402.fontSize = i2403[3]
  var i2405 = i2403[4]
  var i2404 = []
  for(var i = 0; i < i2405.length; i += 1) {
    i2404.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i2405[i + 0]) );
  }
  i2402.characterInfo = i2404
  request.r(i2403[5], i2403[6], 0, i2402, 'texture')
  i2402.originalFontSize = i2403[7]
  return i2402
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i2408 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i2409 = data
  i2408.index = i2409[0]
  i2408.advance = i2409[1]
  i2408.bearing = i2409[2]
  i2408.glyphWidth = i2409[3]
  i2408.glyphHeight = i2409[4]
  i2408.minX = i2409[5]
  i2408.maxX = i2409[6]
  i2408.minY = i2409[7]
  i2408.maxY = i2409[8]
  i2408.uvBottomLeftX = i2409[9]
  i2408.uvBottomLeftY = i2409[10]
  i2408.uvBottomRightX = i2409[11]
  i2408.uvBottomRightY = i2409[12]
  i2408.uvTopLeftX = i2409[13]
  i2408.uvTopLeftY = i2409[14]
  i2408.uvTopRightX = i2409[15]
  i2408.uvTopRightY = i2409[16]
  return i2408
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i2410 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i2411 = data
  i2410.name = i2411[0]
  var i2413 = i2411[1]
  var i2412 = []
  for(var i = 0; i < i2413.length; i += 1) {
    i2412.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i2413[i + 0]) );
  }
  i2410.layers = i2412
  var i2415 = i2411[2]
  var i2414 = []
  for(var i = 0; i < i2415.length; i += 1) {
    i2414.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i2415[i + 0]) );
  }
  i2410.parameters = i2414
  i2410.animationClips = i2411[3]
  i2410.avatarUnsupported = i2411[4]
  return i2410
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i2418 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i2419 = data
  i2418.name = i2419[0]
  i2418.defaultWeight = i2419[1]
  i2418.blendingMode = i2419[2]
  i2418.avatarMask = i2419[3]
  i2418.syncedLayerIndex = i2419[4]
  i2418.syncedLayerAffectsTiming = !!i2419[5]
  i2418.syncedLayers = i2419[6]
  i2418.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2419[7], i2418.stateMachine)
  return i2418
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i2420 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i2421 = data
  i2420.id = i2421[0]
  i2420.name = i2421[1]
  i2420.path = i2421[2]
  var i2423 = i2421[3]
  var i2422 = []
  for(var i = 0; i < i2423.length; i += 1) {
    i2422.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i2423[i + 0]) );
  }
  i2420.states = i2422
  var i2425 = i2421[4]
  var i2424 = []
  for(var i = 0; i < i2425.length; i += 1) {
    i2424.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2425[i + 0]) );
  }
  i2420.machines = i2424
  var i2427 = i2421[5]
  var i2426 = []
  for(var i = 0; i < i2427.length; i += 1) {
    i2426.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2427[i + 0]) );
  }
  i2420.entryStateTransitions = i2426
  var i2429 = i2421[6]
  var i2428 = []
  for(var i = 0; i < i2429.length; i += 1) {
    i2428.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2429[i + 0]) );
  }
  i2420.exitStateTransitions = i2428
  var i2431 = i2421[7]
  var i2430 = []
  for(var i = 0; i < i2431.length; i += 1) {
    i2430.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2431[i + 0]) );
  }
  i2420.anyStateTransitions = i2430
  i2420.defaultStateId = i2421[8]
  return i2420
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i2434 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i2435 = data
  i2434.id = i2435[0]
  i2434.name = i2435[1]
  i2434.cycleOffset = i2435[2]
  i2434.cycleOffsetParameter = i2435[3]
  i2434.cycleOffsetParameterActive = !!i2435[4]
  i2434.mirror = !!i2435[5]
  i2434.mirrorParameter = i2435[6]
  i2434.mirrorParameterActive = !!i2435[7]
  i2434.motionId = i2435[8]
  i2434.nameHash = i2435[9]
  i2434.fullPathHash = i2435[10]
  i2434.speed = i2435[11]
  i2434.speedParameter = i2435[12]
  i2434.speedParameterActive = !!i2435[13]
  i2434.tag = i2435[14]
  i2434.tagHash = i2435[15]
  i2434.writeDefaultValues = !!i2435[16]
  var i2437 = i2435[17]
  var i2436 = []
  for(var i = 0; i < i2437.length; i += 2) {
  request.r(i2437[i + 0], i2437[i + 1], 2, i2436, '')
  }
  i2434.behaviours = i2436
  var i2439 = i2435[18]
  var i2438 = []
  for(var i = 0; i < i2439.length; i += 1) {
    i2438.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2439[i + 0]) );
  }
  i2434.transitions = i2438
  return i2434
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i2444 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i2445 = data
  i2444.fullPath = i2445[0]
  i2444.canTransitionToSelf = !!i2445[1]
  i2444.duration = i2445[2]
  i2444.exitTime = i2445[3]
  i2444.hasExitTime = !!i2445[4]
  i2444.hasFixedDuration = !!i2445[5]
  i2444.interruptionSource = i2445[6]
  i2444.offset = i2445[7]
  i2444.orderedInterruption = !!i2445[8]
  i2444.destinationStateId = i2445[9]
  i2444.isExit = !!i2445[10]
  i2444.mute = !!i2445[11]
  i2444.solo = !!i2445[12]
  var i2447 = i2445[13]
  var i2446 = []
  for(var i = 0; i < i2447.length; i += 1) {
    i2446.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2447[i + 0]) );
  }
  i2444.conditions = i2446
  return i2444
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i2452 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i2453 = data
  i2452.destinationStateId = i2453[0]
  i2452.isExit = !!i2453[1]
  i2452.mute = !!i2453[2]
  i2452.solo = !!i2453[3]
  var i2455 = i2453[4]
  var i2454 = []
  for(var i = 0; i < i2455.length; i += 1) {
    i2454.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2455[i + 0]) );
  }
  i2452.conditions = i2454
  return i2452
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i2458 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i2459 = data
  i2458.defaultBool = !!i2459[0]
  i2458.defaultFloat = i2459[1]
  i2458.defaultInt = i2459[2]
  i2458.name = i2459[3]
  i2458.nameHash = i2459[4]
  i2458.type = i2459[5]
  return i2458
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i2460 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i2461 = data
  i2460.name = i2461[0]
  i2460.bytes64 = i2461[1]
  i2460.data = i2461[2]
  return i2460
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i2462 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i2463 = data
  i2462.normalStyle = i2463[0]
  i2462.normalSpacingOffset = i2463[1]
  i2462.boldStyle = i2463[2]
  i2462.boldSpacing = i2463[3]
  i2462.italicStyle = i2463[4]
  i2462.tabSize = i2463[5]
  request.r(i2463[6], i2463[7], 0, i2462, 'atlas')
  i2462.m_SourceFontFileGUID = i2463[8]
  i2462.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i2463[9], i2462.m_CreationSettings)
  request.r(i2463[10], i2463[11], 0, i2462, 'm_SourceFontFile')
  i2462.m_SourceFontFilePath = i2463[12]
  i2462.m_AtlasPopulationMode = i2463[13]
  i2462.InternalDynamicOS = !!i2463[14]
  var i2465 = i2463[15]
  var i2464 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i2465.length; i += 1) {
    i2464.add(request.d('UnityEngine.TextCore.Glyph', i2465[i + 0]));
  }
  i2462.m_GlyphTable = i2464
  var i2467 = i2463[16]
  var i2466 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i2467.length; i += 1) {
    i2466.add(request.d('TMPro.TMP_Character', i2467[i + 0]));
  }
  i2462.m_CharacterTable = i2466
  var i2469 = i2463[17]
  var i2468 = []
  for(var i = 0; i < i2469.length; i += 2) {
  request.r(i2469[i + 0], i2469[i + 1], 2, i2468, '')
  }
  i2462.m_AtlasTextures = i2468
  i2462.m_AtlasTextureIndex = i2463[18]
  i2462.m_IsMultiAtlasTexturesEnabled = !!i2463[19]
  i2462.m_GetFontFeatures = !!i2463[20]
  i2462.m_ClearDynamicDataOnBuild = !!i2463[21]
  i2462.m_AtlasWidth = i2463[22]
  i2462.m_AtlasHeight = i2463[23]
  i2462.m_AtlasPadding = i2463[24]
  i2462.m_AtlasRenderMode = i2463[25]
  var i2471 = i2463[26]
  var i2470 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2471.length; i += 1) {
    i2470.add(request.d('UnityEngine.TextCore.GlyphRect', i2471[i + 0]));
  }
  i2462.m_UsedGlyphRects = i2470
  var i2473 = i2463[27]
  var i2472 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2473.length; i += 1) {
    i2472.add(request.d('UnityEngine.TextCore.GlyphRect', i2473[i + 0]));
  }
  i2462.m_FreeGlyphRects = i2472
  i2462.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i2463[28], i2462.m_FontFeatureTable)
  i2462.m_ShouldReimportFontFeatures = !!i2463[29]
  var i2475 = i2463[30]
  var i2474 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2475.length; i += 2) {
  request.r(i2475[i + 0], i2475[i + 1], 1, i2474, '')
  }
  i2462.m_FallbackFontAssetTable = i2474
  var i2477 = i2463[31]
  var i2476 = []
  for(var i = 0; i < i2477.length; i += 1) {
    i2476.push( request.d('TMPro.TMP_FontWeightPair', i2477[i + 0]) );
  }
  i2462.m_FontWeightTable = i2476
  var i2479 = i2463[32]
  var i2478 = []
  for(var i = 0; i < i2479.length; i += 1) {
    i2478.push( request.d('TMPro.TMP_FontWeightPair', i2479[i + 0]) );
  }
  i2462.fontWeights = i2478
  i2462.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i2463[33], i2462.m_fontInfo)
  var i2481 = i2463[34]
  var i2480 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i2481.length; i += 1) {
    i2480.add(request.d('TMPro.TMP_Glyph', i2481[i + 0]));
  }
  i2462.m_glyphInfoList = i2480
  i2462.m_KerningTable = request.d('TMPro.KerningTable', i2463[35], i2462.m_KerningTable)
  var i2483 = i2463[36]
  var i2482 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2483.length; i += 2) {
  request.r(i2483[i + 0], i2483[i + 1], 1, i2482, '')
  }
  i2462.fallbackFontAssets = i2482
  i2462.m_Version = i2463[37]
  i2462.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2463[38], i2462.m_FaceInfo)
  request.r(i2463[39], i2463[40], 0, i2462, 'm_Material')
  return i2462
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i2484 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i2485 = data
  i2484.sourceFontFileName = i2485[0]
  i2484.sourceFontFileGUID = i2485[1]
  i2484.faceIndex = i2485[2]
  i2484.pointSizeSamplingMode = i2485[3]
  i2484.pointSize = i2485[4]
  i2484.padding = i2485[5]
  i2484.paddingMode = i2485[6]
  i2484.packingMode = i2485[7]
  i2484.atlasWidth = i2485[8]
  i2484.atlasHeight = i2485[9]
  i2484.characterSetSelectionMode = i2485[10]
  i2484.characterSequence = i2485[11]
  i2484.referencedFontAssetGUID = i2485[12]
  i2484.referencedTextAssetGUID = i2485[13]
  i2484.fontStyle = i2485[14]
  i2484.fontStyleModifier = i2485[15]
  i2484.renderMode = i2485[16]
  i2484.includeFontFeatures = !!i2485[17]
  return i2484
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i2488 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i2489 = data
  i2488.m_Index = i2489[0]
  i2488.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2489[1], i2488.m_Metrics)
  i2488.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2489[2], i2488.m_GlyphRect)
  i2488.m_Scale = i2489[3]
  i2488.m_AtlasIndex = i2489[4]
  i2488.m_ClassDefinitionType = i2489[5]
  return i2488
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i2490 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i2491 = data
  i2490.m_Width = i2491[0]
  i2490.m_Height = i2491[1]
  i2490.m_HorizontalBearingX = i2491[2]
  i2490.m_HorizontalBearingY = i2491[3]
  i2490.m_HorizontalAdvance = i2491[4]
  return i2490
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i2492 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i2493 = data
  i2492.m_X = i2493[0]
  i2492.m_Y = i2493[1]
  i2492.m_Width = i2493[2]
  i2492.m_Height = i2493[3]
  return i2492
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i2496 = root || request.c( 'TMPro.TMP_Character' )
  var i2497 = data
  i2496.m_ElementType = i2497[0]
  i2496.m_Unicode = i2497[1]
  i2496.m_GlyphIndex = i2497[2]
  i2496.m_Scale = i2497[3]
  return i2496
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i2502 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i2503 = data
  var i2505 = i2503[0]
  var i2504 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i2505.length; i += 1) {
    i2504.add(request.d('TMPro.MultipleSubstitutionRecord', i2505[i + 0]));
  }
  i2502.m_MultipleSubstitutionRecords = i2504
  var i2507 = i2503[1]
  var i2506 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i2507.length; i += 1) {
    i2506.add(request.d('TMPro.LigatureSubstitutionRecord', i2507[i + 0]));
  }
  i2502.m_LigatureSubstitutionRecords = i2506
  var i2509 = i2503[2]
  var i2508 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i2509.length; i += 1) {
    i2508.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i2509[i + 0]));
  }
  i2502.m_GlyphPairAdjustmentRecords = i2508
  var i2511 = i2503[3]
  var i2510 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i2511.length; i += 1) {
    i2510.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i2511[i + 0]));
  }
  i2502.m_MarkToBaseAdjustmentRecords = i2510
  var i2513 = i2503[4]
  var i2512 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i2513.length; i += 1) {
    i2512.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i2513[i + 0]));
  }
  i2502.m_MarkToMarkAdjustmentRecords = i2512
  return i2502
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i2516 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i2517 = data
  i2516.m_TargetGlyphID = i2517[0]
  i2516.m_SubstituteGlyphIDs = i2517[1]
  return i2516
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i2520 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i2521 = data
  i2520.m_ComponentGlyphIDs = i2521[0]
  i2520.m_LigatureGlyphID = i2521[1]
  return i2520
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i2524 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i2525 = data
  i2524.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i2525[0], i2524.m_FirstAdjustmentRecord)
  i2524.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i2525[1], i2524.m_SecondAdjustmentRecord)
  i2524.m_FeatureLookupFlags = i2525[2]
  return i2524
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i2526 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i2527 = data
  i2526.m_GlyphIndex = i2527[0]
  i2526.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i2527[1], i2526.m_GlyphValueRecord)
  return i2526
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i2528 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i2529 = data
  i2528.m_XPlacement = i2529[0]
  i2528.m_YPlacement = i2529[1]
  i2528.m_XAdvance = i2529[2]
  i2528.m_YAdvance = i2529[3]
  return i2528
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i2532 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i2533 = data
  i2532.m_BaseGlyphID = i2533[0]
  i2532.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i2533[1], i2532.m_BaseGlyphAnchorPoint)
  i2532.m_MarkGlyphID = i2533[2]
  i2532.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i2533[3], i2532.m_MarkPositionAdjustment)
  return i2532
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i2536 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i2537 = data
  i2536.m_BaseMarkGlyphID = i2537[0]
  i2536.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i2537[1], i2536.m_BaseMarkGlyphAnchorPoint)
  i2536.m_CombiningMarkGlyphID = i2537[2]
  i2536.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i2537[3], i2536.m_CombiningMarkPositionAdjustment)
  return i2536
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i2542 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i2543 = data
  request.r(i2543[0], i2543[1], 0, i2542, 'regularTypeface')
  request.r(i2543[2], i2543[3], 0, i2542, 'italicTypeface')
  return i2542
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i2544 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i2545 = data
  i2544.Name = i2545[0]
  i2544.PointSize = i2545[1]
  i2544.Scale = i2545[2]
  i2544.CharacterCount = i2545[3]
  i2544.LineHeight = i2545[4]
  i2544.Baseline = i2545[5]
  i2544.Ascender = i2545[6]
  i2544.CapHeight = i2545[7]
  i2544.Descender = i2545[8]
  i2544.CenterLine = i2545[9]
  i2544.SuperscriptOffset = i2545[10]
  i2544.SubscriptOffset = i2545[11]
  i2544.SubSize = i2545[12]
  i2544.Underline = i2545[13]
  i2544.UnderlineThickness = i2545[14]
  i2544.strikethrough = i2545[15]
  i2544.strikethroughThickness = i2545[16]
  i2544.TabWidth = i2545[17]
  i2544.Padding = i2545[18]
  i2544.AtlasWidth = i2545[19]
  i2544.AtlasHeight = i2545[20]
  return i2544
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i2548 = root || request.c( 'TMPro.TMP_Glyph' )
  var i2549 = data
  i2548.id = i2549[0]
  i2548.x = i2549[1]
  i2548.y = i2549[2]
  i2548.width = i2549[3]
  i2548.height = i2549[4]
  i2548.xOffset = i2549[5]
  i2548.yOffset = i2549[6]
  i2548.xAdvance = i2549[7]
  i2548.scale = i2549[8]
  return i2548
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i2550 = root || request.c( 'TMPro.KerningTable' )
  var i2551 = data
  var i2553 = i2551[0]
  var i2552 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i2553.length; i += 1) {
    i2552.add(request.d('TMPro.KerningPair', i2553[i + 0]));
  }
  i2550.kerningPairs = i2552
  return i2550
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i2556 = root || request.c( 'TMPro.KerningPair' )
  var i2557 = data
  i2556.xOffset = i2557[0]
  i2556.m_FirstGlyph = i2557[1]
  i2556.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2557[2], i2556.m_FirstGlyphAdjustments)
  i2556.m_SecondGlyph = i2557[3]
  i2556.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2557[4], i2556.m_SecondGlyphAdjustments)
  i2556.m_IgnoreSpacingAdjustments = !!i2557[5]
  return i2556
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i2558 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i2559 = data
  i2558.m_FaceIndex = i2559[0]
  i2558.m_FamilyName = i2559[1]
  i2558.m_StyleName = i2559[2]
  i2558.m_PointSize = i2559[3]
  i2558.m_Scale = i2559[4]
  i2558.m_UnitsPerEM = i2559[5]
  i2558.m_LineHeight = i2559[6]
  i2558.m_AscentLine = i2559[7]
  i2558.m_CapLine = i2559[8]
  i2558.m_MeanLine = i2559[9]
  i2558.m_Baseline = i2559[10]
  i2558.m_DescentLine = i2559[11]
  i2558.m_SuperscriptOffset = i2559[12]
  i2558.m_SuperscriptSize = i2559[13]
  i2558.m_SubscriptOffset = i2559[14]
  i2558.m_SubscriptSize = i2559[15]
  i2558.m_UnderlineOffset = i2559[16]
  i2558.m_UnderlineThickness = i2559[17]
  i2558.m_StrikethroughOffset = i2559[18]
  i2558.m_StrikethroughThickness = i2559[19]
  i2558.m_TabWidth = i2559[20]
  return i2558
}

Deserializers["PlayerCardData"] = function (request, data, root) {
  var i2560 = root || request.c( 'PlayerCardData' )
  var i2561 = data
  i2560.nationality = i2561[0]
  request.r(i2561[1], i2561[2], 0, i2560, 'playerSprite')
  request.r(i2561[3], i2561[4], 0, i2560, 'flagSprite')
  return i2560
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i2562 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i2563 = data
  i2562.useSafeMode = !!i2563[0]
  i2562.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i2563[1], i2562.safeModeOptions)
  i2562.timeScale = i2563[2]
  i2562.unscaledTimeScale = i2563[3]
  i2562.useSmoothDeltaTime = !!i2563[4]
  i2562.maxSmoothUnscaledTime = i2563[5]
  i2562.rewindCallbackMode = i2563[6]
  i2562.showUnityEditorReport = !!i2563[7]
  i2562.logBehaviour = i2563[8]
  i2562.drawGizmos = !!i2563[9]
  i2562.defaultRecyclable = !!i2563[10]
  i2562.defaultAutoPlay = i2563[11]
  i2562.defaultUpdateType = i2563[12]
  i2562.defaultTimeScaleIndependent = !!i2563[13]
  i2562.defaultEaseType = i2563[14]
  i2562.defaultEaseOvershootOrAmplitude = i2563[15]
  i2562.defaultEasePeriod = i2563[16]
  i2562.defaultAutoKill = !!i2563[17]
  i2562.defaultLoopType = i2563[18]
  i2562.debugMode = !!i2563[19]
  i2562.debugStoreTargetId = !!i2563[20]
  i2562.showPreviewPanel = !!i2563[21]
  i2562.storeSettingsLocation = i2563[22]
  i2562.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i2563[23], i2562.modules)
  i2562.createASMDEF = !!i2563[24]
  i2562.showPlayingTweens = !!i2563[25]
  i2562.showPausedTweens = !!i2563[26]
  return i2562
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i2564 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i2565 = data
  i2564.logBehaviour = i2565[0]
  i2564.nestedTweenFailureBehaviour = i2565[1]
  return i2564
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i2566 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i2567 = data
  i2566.showPanel = !!i2567[0]
  i2566.audioEnabled = !!i2567[1]
  i2566.physicsEnabled = !!i2567[2]
  i2566.physics2DEnabled = !!i2567[3]
  i2566.spriteEnabled = !!i2567[4]
  i2566.uiEnabled = !!i2567[5]
  i2566.uiToolkitEnabled = !!i2567[6]
  i2566.textMeshProEnabled = !!i2567[7]
  i2566.tk2DEnabled = !!i2567[8]
  i2566.deAudioEnabled = !!i2567[9]
  i2566.deUnityExtendedEnabled = !!i2567[10]
  i2566.epoOutlineEnabled = !!i2567[11]
  return i2566
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i2568 = root || request.c( 'TMPro.TMP_Settings' )
  var i2569 = data
  i2568.assetVersion = i2569[0]
  i2568.m_TextWrappingMode = i2569[1]
  i2568.m_enableKerning = !!i2569[2]
  var i2571 = i2569[3]
  var i2570 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i2571.length; i += 1) {
    i2570.add(i2571[i + 0]);
  }
  i2568.m_ActiveFontFeatures = i2570
  i2568.m_enableExtraPadding = !!i2569[4]
  i2568.m_enableTintAllSprites = !!i2569[5]
  i2568.m_enableParseEscapeCharacters = !!i2569[6]
  i2568.m_EnableRaycastTarget = !!i2569[7]
  i2568.m_GetFontFeaturesAtRuntime = !!i2569[8]
  i2568.m_missingGlyphCharacter = i2569[9]
  i2568.m_ClearDynamicDataOnBuild = !!i2569[10]
  i2568.m_warningsDisabled = !!i2569[11]
  request.r(i2569[12], i2569[13], 0, i2568, 'm_defaultFontAsset')
  i2568.m_defaultFontAssetPath = i2569[14]
  i2568.m_defaultFontSize = i2569[15]
  i2568.m_defaultAutoSizeMinRatio = i2569[16]
  i2568.m_defaultAutoSizeMaxRatio = i2569[17]
  i2568.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i2569[18], i2569[19] )
  i2568.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i2569[20], i2569[21] )
  i2568.m_autoSizeTextContainer = !!i2569[22]
  i2568.m_IsTextObjectScaleStatic = !!i2569[23]
  var i2573 = i2569[24]
  var i2572 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2573.length; i += 2) {
  request.r(i2573[i + 0], i2573[i + 1], 1, i2572, '')
  }
  i2568.m_fallbackFontAssets = i2572
  i2568.m_matchMaterialPreset = !!i2569[25]
  i2568.m_HideSubTextObjects = !!i2569[26]
  request.r(i2569[27], i2569[28], 0, i2568, 'm_defaultSpriteAsset')
  i2568.m_defaultSpriteAssetPath = i2569[29]
  i2568.m_enableEmojiSupport = !!i2569[30]
  i2568.m_MissingCharacterSpriteUnicode = i2569[31]
  var i2575 = i2569[32]
  var i2574 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i2575.length; i += 2) {
  request.r(i2575[i + 0], i2575[i + 1], 1, i2574, '')
  }
  i2568.m_EmojiFallbackTextAssets = i2574
  i2568.m_defaultColorGradientPresetsPath = i2569[33]
  request.r(i2569[34], i2569[35], 0, i2568, 'm_defaultStyleSheet')
  i2568.m_StyleSheetsResourcePath = i2569[36]
  request.r(i2569[37], i2569[38], 0, i2568, 'm_leadingCharacters')
  request.r(i2569[39], i2569[40], 0, i2568, 'm_followingCharacters')
  i2568.m_UseModernHangulLineBreakingRules = !!i2569[41]
  return i2568
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i2578 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i2579 = data
  request.r(i2579[0], i2579[1], 0, i2578, 'spriteSheet')
  var i2581 = i2579[2]
  var i2580 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i2581.length; i += 1) {
    i2580.add(request.d('TMPro.TMP_Sprite', i2581[i + 0]));
  }
  i2578.spriteInfoList = i2580
  var i2583 = i2579[3]
  var i2582 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i2583.length; i += 2) {
  request.r(i2583[i + 0], i2583[i + 1], 1, i2582, '')
  }
  i2578.fallbackSpriteAssets = i2582
  var i2585 = i2579[4]
  var i2584 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i2585.length; i += 1) {
    i2584.add(request.d('TMPro.TMP_SpriteCharacter', i2585[i + 0]));
  }
  i2578.m_SpriteCharacterTable = i2584
  var i2587 = i2579[5]
  var i2586 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i2587.length; i += 1) {
    i2586.add(request.d('TMPro.TMP_SpriteGlyph', i2587[i + 0]));
  }
  i2578.m_GlyphTable = i2586
  i2578.m_Version = i2579[6]
  i2578.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2579[7], i2578.m_FaceInfo)
  request.r(i2579[8], i2579[9], 0, i2578, 'm_Material')
  return i2578
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i2590 = root || request.c( 'TMPro.TMP_Sprite' )
  var i2591 = data
  i2590.name = i2591[0]
  i2590.hashCode = i2591[1]
  i2590.unicode = i2591[2]
  i2590.pivot = new pc.Vec2( i2591[3], i2591[4] )
  request.r(i2591[5], i2591[6], 0, i2590, 'sprite')
  i2590.id = i2591[7]
  i2590.x = i2591[8]
  i2590.y = i2591[9]
  i2590.width = i2591[10]
  i2590.height = i2591[11]
  i2590.xOffset = i2591[12]
  i2590.yOffset = i2591[13]
  i2590.xAdvance = i2591[14]
  i2590.scale = i2591[15]
  return i2590
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i2596 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i2597 = data
  i2596.m_Name = i2597[0]
  i2596.m_ElementType = i2597[1]
  i2596.m_Unicode = i2597[2]
  i2596.m_GlyphIndex = i2597[3]
  i2596.m_Scale = i2597[4]
  return i2596
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i2600 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i2601 = data
  request.r(i2601[0], i2601[1], 0, i2600, 'sprite')
  i2600.m_Index = i2601[2]
  i2600.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2601[3], i2600.m_Metrics)
  i2600.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2601[4], i2600.m_GlyphRect)
  i2600.m_Scale = i2601[5]
  i2600.m_AtlasIndex = i2601[6]
  i2600.m_ClassDefinitionType = i2601[7]
  return i2600
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i2602 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i2603 = data
  var i2605 = i2603[0]
  var i2604 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i2605.length; i += 1) {
    i2604.add(request.d('TMPro.TMP_Style', i2605[i + 0]));
  }
  i2602.m_StyleList = i2604
  return i2602
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i2608 = root || request.c( 'TMPro.TMP_Style' )
  var i2609 = data
  i2608.m_Name = i2609[0]
  i2608.m_HashCode = i2609[1]
  i2608.m_OpeningDefinition = i2609[2]
  i2608.m_ClosingDefinition = i2609[3]
  i2608.m_OpeningTagArray = i2609[4]
  i2608.m_ClosingTagArray = i2609[5]
  return i2608
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i2610 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i2611 = data
  var i2613 = i2611[0]
  var i2612 = []
  for(var i = 0; i < i2613.length; i += 1) {
    i2612.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i2613[i + 0]) );
  }
  i2610.files = i2612
  i2610.componentToPrefabIds = i2611[1]
  return i2610
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i2616 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i2617 = data
  i2616.path = i2617[0]
  request.r(i2617[1], i2617[2], 0, i2616, 'unityObject')
  return i2616
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i2618 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i2619 = data
  var i2621 = i2619[0]
  var i2620 = []
  for(var i = 0; i < i2621.length; i += 1) {
    i2620.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i2621[i + 0]) );
  }
  i2618.scriptsExecutionOrder = i2620
  var i2623 = i2619[1]
  var i2622 = []
  for(var i = 0; i < i2623.length; i += 1) {
    i2622.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i2623[i + 0]) );
  }
  i2618.sortingLayers = i2622
  var i2625 = i2619[2]
  var i2624 = []
  for(var i = 0; i < i2625.length; i += 1) {
    i2624.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i2625[i + 0]) );
  }
  i2618.cullingLayers = i2624
  i2618.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i2619[3], i2618.timeSettings)
  i2618.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i2619[4], i2618.physicsSettings)
  i2618.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i2619[5], i2618.physics2DSettings)
  i2618.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2619[6], i2618.qualitySettings)
  i2618.enableRealtimeShadows = !!i2619[7]
  i2618.enableAutoInstancing = !!i2619[8]
  i2618.enableStaticBatching = !!i2619[9]
  i2618.enableDynamicBatching = !!i2619[10]
  i2618.lightmapEncodingQuality = i2619[11]
  i2618.desiredColorSpace = i2619[12]
  var i2627 = i2619[13]
  var i2626 = []
  for(var i = 0; i < i2627.length; i += 1) {
    i2626.push( i2627[i + 0] );
  }
  i2618.allTags = i2626
  return i2618
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i2630 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i2631 = data
  i2630.name = i2631[0]
  i2630.value = i2631[1]
  return i2630
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i2634 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i2635 = data
  i2634.id = i2635[0]
  i2634.name = i2635[1]
  i2634.value = i2635[2]
  return i2634
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i2638 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i2639 = data
  i2638.id = i2639[0]
  i2638.name = i2639[1]
  return i2638
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i2640 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i2641 = data
  i2640.fixedDeltaTime = i2641[0]
  i2640.maximumDeltaTime = i2641[1]
  i2640.timeScale = i2641[2]
  i2640.maximumParticleTimestep = i2641[3]
  return i2640
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i2642 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i2643 = data
  i2642.gravity = new pc.Vec3( i2643[0], i2643[1], i2643[2] )
  i2642.defaultSolverIterations = i2643[3]
  i2642.bounceThreshold = i2643[4]
  i2642.autoSyncTransforms = !!i2643[5]
  i2642.autoSimulation = !!i2643[6]
  var i2645 = i2643[7]
  var i2644 = []
  for(var i = 0; i < i2645.length; i += 1) {
    i2644.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i2645[i + 0]) );
  }
  i2642.collisionMatrix = i2644
  return i2642
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i2648 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i2649 = data
  i2648.enabled = !!i2649[0]
  i2648.layerId = i2649[1]
  i2648.otherLayerId = i2649[2]
  return i2648
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i2650 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i2651 = data
  request.r(i2651[0], i2651[1], 0, i2650, 'material')
  i2650.gravity = new pc.Vec2( i2651[2], i2651[3] )
  i2650.positionIterations = i2651[4]
  i2650.velocityIterations = i2651[5]
  i2650.velocityThreshold = i2651[6]
  i2650.maxLinearCorrection = i2651[7]
  i2650.maxAngularCorrection = i2651[8]
  i2650.maxTranslationSpeed = i2651[9]
  i2650.maxRotationSpeed = i2651[10]
  i2650.baumgarteScale = i2651[11]
  i2650.baumgarteTOIScale = i2651[12]
  i2650.timeToSleep = i2651[13]
  i2650.linearSleepTolerance = i2651[14]
  i2650.angularSleepTolerance = i2651[15]
  i2650.defaultContactOffset = i2651[16]
  i2650.autoSimulation = !!i2651[17]
  i2650.queriesHitTriggers = !!i2651[18]
  i2650.queriesStartInColliders = !!i2651[19]
  i2650.callbacksOnDisable = !!i2651[20]
  i2650.reuseCollisionCallbacks = !!i2651[21]
  i2650.autoSyncTransforms = !!i2651[22]
  var i2653 = i2651[23]
  var i2652 = []
  for(var i = 0; i < i2653.length; i += 1) {
    i2652.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i2653[i + 0]) );
  }
  i2650.collisionMatrix = i2652
  return i2650
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i2656 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i2657 = data
  i2656.enabled = !!i2657[0]
  i2656.layerId = i2657[1]
  i2656.otherLayerId = i2657[2]
  return i2656
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i2658 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i2659 = data
  var i2661 = i2659[0]
  var i2660 = []
  for(var i = 0; i < i2661.length; i += 1) {
    i2660.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2661[i + 0]) );
  }
  i2658.qualityLevels = i2660
  var i2663 = i2659[1]
  var i2662 = []
  for(var i = 0; i < i2663.length; i += 1) {
    i2662.push( i2663[i + 0] );
  }
  i2658.names = i2662
  i2658.shadows = i2659[2]
  i2658.anisotropicFiltering = i2659[3]
  i2658.antiAliasing = i2659[4]
  i2658.lodBias = i2659[5]
  i2658.shadowCascades = i2659[6]
  i2658.shadowDistance = i2659[7]
  i2658.shadowmaskMode = i2659[8]
  i2658.shadowProjection = i2659[9]
  i2658.shadowResolution = i2659[10]
  i2658.softParticles = !!i2659[11]
  i2658.softVegetation = !!i2659[12]
  i2658.activeColorSpace = i2659[13]
  i2658.desiredColorSpace = i2659[14]
  i2658.masterTextureLimit = i2659[15]
  i2658.maxQueuedFrames = i2659[16]
  i2658.particleRaycastBudget = i2659[17]
  i2658.pixelLightCount = i2659[18]
  i2658.realtimeReflectionProbes = !!i2659[19]
  i2658.shadowCascade2Split = i2659[20]
  i2658.shadowCascade4Split = new pc.Vec3( i2659[21], i2659[22], i2659[23] )
  i2658.streamingMipmapsActive = !!i2659[24]
  i2658.vSyncCount = i2659[25]
  i2658.asyncUploadBufferSize = i2659[26]
  i2658.asyncUploadTimeSlice = i2659[27]
  i2658.billboardsFaceCameraPosition = !!i2659[28]
  i2658.shadowNearPlaneOffset = i2659[29]
  i2658.streamingMipmapsMemoryBudget = i2659[30]
  i2658.maximumLODLevel = i2659[31]
  i2658.streamingMipmapsAddAllCameras = !!i2659[32]
  i2658.streamingMipmapsMaxLevelReduction = i2659[33]
  i2658.streamingMipmapsRenderersPerFrame = i2659[34]
  i2658.resolutionScalingFixedDPIFactor = i2659[35]
  i2658.streamingMipmapsMaxFileIORequests = i2659[36]
  i2658.currentQualityLevel = i2659[37]
  return i2658
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i2668 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i2669 = data
  i2668.weight = i2669[0]
  i2668.vertices = i2669[1]
  i2668.normals = i2669[2]
  i2668.tangents = i2669[3]
  return i2668
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i2672 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i2673 = data
  i2672.mode = i2673[0]
  i2672.parameter = i2673[1]
  i2672.threshold = i2673[2]
  return i2672
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i2674 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i2675 = data
  i2674.m_XCoordinate = i2675[0]
  i2674.m_YCoordinate = i2675[1]
  return i2674
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i2676 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i2677 = data
  i2676.m_XPositionAdjustment = i2677[0]
  i2676.m_YPositionAdjustment = i2677[1]
  return i2676
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i2678 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i2679 = data
  i2678.xPlacement = i2679[0]
  i2678.yPlacement = i2679[1]
  i2678.xAdvance = i2679[2]
  i2678.yAdvance = i2679[3]
  return i2678
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D":{"usedByComposite":0,"autoTiling":1,"points":2,"enabled":3,"isTrigger":4,"usedByEffector":5,"density":6,"offset":7,"material":9},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.PhysicsMaterial2D":{"name":0,"bounciness":1,"friction":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2}}

Deserializers.requiredComponents = {"53":[54],"55":[54],"56":[54],"57":[54],"58":[54],"59":[54],"60":[61],"62":[2],"63":[64],"65":[64],"66":[64],"67":[64],"68":[64],"69":[64],"70":[39],"71":[39],"72":[39],"73":[39],"74":[39],"75":[39],"76":[39],"77":[39],"78":[39],"79":[39],"80":[39],"81":[39],"82":[39],"83":[2],"84":[18],"85":[86],"87":[86],"28":[17],"7":[2],"40":[39],"42":[38],"88":[12],"89":[2],"90":[91],"92":[45],"93":[28],"94":[17],"20":[18,17],"32":[17,31],"95":[17],"96":[31,17],"97":[18],"98":[31,17],"99":[17],"100":[101],"102":[101],"103":[101],"104":[17],"105":[17],"30":[28],"33":[31,17],"106":[17],"29":[28],"107":[17],"108":[17],"109":[17],"110":[17],"111":[17],"112":[17],"113":[17],"114":[17],"115":[17],"116":[31,17],"117":[17],"118":[17],"119":[17],"120":[17],"121":[31,17],"122":[17],"123":[45],"124":[45],"46":[45],"125":[45],"126":[2],"127":[2]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.MonoBehaviour","CameraFollow2D","UnityEngine.Transform","AutoCameraFit","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Mesh","UnityEngine.Material","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","MoveBetweenPoints","UnityEngine.RectTransform","UnityEngine.MeshRenderer","UnityEngine.EventSystems.UIBehaviour","TMPro.TextMeshPro","TMPro.TMP_FontAsset","UnityEngine.MeshFilter","PlayerCardUIManager","UnityEngine.GameObject","Ply_SoundManager","UnityEngine.AudioSource","UnityEngine.AudioClip","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","TMPro.TextMeshProUGUI","UnityEngine.UI.Image","UnityEngine.UI.Button","ScreenHeightPositionAnchor","UnityEngine.PolygonCollider2D","UnityEngine.PhysicsMaterial2D","UnityEngine.BoxCollider2D","UnityEngine.Rigidbody2D","BatStrikeController","CupCollision","SlotTrigger","PlayerCardData","HideOnFirstClick","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.Font","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.InputSystem.UI.InputSystemUIInputModule","UnityEngine.InputSystem.UI.TrackedDeviceRaycaster","TMPro.TextContainer","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.38f1";

Deserializers.productName = "PLY_MiniSoccer";

Deserializers.lunaInitializationTime = "07/15/2026 03:53:54";

Deserializers.lunaDaysRunning = "64.2";

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

Deserializers.buildID = "24819aea-e1e3-4524-8a0b-a2937602060e";

Deserializers.runtimeInitializeOnLoadInfos = [[["Unity","Services","Core","Internal","UnityServicesInitializer","EnableServicesInitializationAsync"],["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["DG","Tweening","DOTween","RuntimeOnLoad"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["Unity","Services","Core","Registration","CorePackageInitializer","InitializeOnLoad"],["Unity","Services","Core","Internal","TaskAsyncOperation","SetScheduler"],["Unity","Services","Core","Environments","Client","Scheduler","EngineStateHelper","Init"],["Unity","Services","Core","Environments","Client","Scheduler","ThreadHelper","Init"],["Ua2CoreInitializeCallback","Register"],["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["Unity","AI","Navigation","NavMeshLink","ClearTrackedList"],["Unity","AI","Navigation","NavMeshSurface","ClearNavMeshSurfaces"],["Unity","AI","Navigation","NavMeshModifierVolume","ClearNavMeshModifiers"],["Unity","AI","Navigation","NavMeshModifier","ClearNavMeshModifiers"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["Unity","Services","Core","Internal","UnityServicesInitializer","CreateStaticInstance"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[["Unity","Services","Core","Environments","Client","Http","JsonHelpers","RegisterTypesForAOT"]],[["Unity","Services","Core","UnityThreadUtils","CaptureUnityThreadInfo"],["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

