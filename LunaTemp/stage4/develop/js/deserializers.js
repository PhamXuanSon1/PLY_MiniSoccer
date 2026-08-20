var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i1938 = root || request.c( 'UnityEngine.JointSpring' )
  var i1939 = data
  i1938.spring = i1939[0]
  i1938.damper = i1939[1]
  i1938.targetPosition = i1939[2]
  return i1938
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i1940 = root || request.c( 'UnityEngine.JointMotor' )
  var i1941 = data
  i1940.m_TargetVelocity = i1941[0]
  i1940.m_Force = i1941[1]
  i1940.m_FreeSpin = i1941[2]
  return i1940
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i1942 = root || request.c( 'UnityEngine.JointLimits' )
  var i1943 = data
  i1942.m_Min = i1943[0]
  i1942.m_Max = i1943[1]
  i1942.m_Bounciness = i1943[2]
  i1942.m_BounceMinVelocity = i1943[3]
  i1942.m_ContactDistance = i1943[4]
  i1942.minBounce = i1943[5]
  i1942.maxBounce = i1943[6]
  return i1942
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i1944 = root || request.c( 'UnityEngine.JointDrive' )
  var i1945 = data
  i1944.m_PositionSpring = i1945[0]
  i1944.m_PositionDamper = i1945[1]
  i1944.m_MaximumForce = i1945[2]
  i1944.m_UseAcceleration = i1945[3]
  return i1944
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i1946 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i1947 = data
  i1946.m_Spring = i1947[0]
  i1946.m_Damper = i1947[1]
  return i1946
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i1948 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i1949 = data
  i1948.m_Limit = i1949[0]
  i1948.m_Bounciness = i1949[1]
  i1948.m_ContactDistance = i1949[2]
  return i1948
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i1950 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i1951 = data
  i1950.m_ExtremumSlip = i1951[0]
  i1950.m_ExtremumValue = i1951[1]
  i1950.m_AsymptoteSlip = i1951[2]
  i1950.m_AsymptoteValue = i1951[3]
  i1950.m_Stiffness = i1951[4]
  return i1950
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i1952 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i1953 = data
  i1952.m_LowerAngle = i1953[0]
  i1952.m_UpperAngle = i1953[1]
  return i1952
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i1954 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i1955 = data
  i1954.m_MotorSpeed = i1955[0]
  i1954.m_MaximumMotorTorque = i1955[1]
  return i1954
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i1956 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i1957 = data
  i1956.m_DampingRatio = i1957[0]
  i1956.m_Frequency = i1957[1]
  i1956.m_Angle = i1957[2]
  return i1956
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i1958 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i1959 = data
  i1958.m_LowerTranslation = i1959[0]
  i1958.m_UpperTranslation = i1959[1]
  return i1958
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i1960 = root || new pc.UnityMaterial()
  var i1961 = data
  i1960.name = i1961[0]
  request.r(i1961[1], i1961[2], 0, i1960, 'shader')
  i1960.renderQueue = i1961[3]
  i1960.enableInstancing = !!i1961[4]
  var i1963 = i1961[5]
  var i1962 = []
  for(var i = 0; i < i1963.length; i += 1) {
    i1962.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i1963[i + 0]) );
  }
  i1960.floatParameters = i1962
  var i1965 = i1961[6]
  var i1964 = []
  for(var i = 0; i < i1965.length; i += 1) {
    i1964.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i1965[i + 0]) );
  }
  i1960.colorParameters = i1964
  var i1967 = i1961[7]
  var i1966 = []
  for(var i = 0; i < i1967.length; i += 1) {
    i1966.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i1967[i + 0]) );
  }
  i1960.vectorParameters = i1966
  var i1969 = i1961[8]
  var i1968 = []
  for(var i = 0; i < i1969.length; i += 1) {
    i1968.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i1969[i + 0]) );
  }
  i1960.textureParameters = i1968
  var i1971 = i1961[9]
  var i1970 = []
  for(var i = 0; i < i1971.length; i += 1) {
    i1970.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i1971[i + 0]) );
  }
  i1960.materialFlags = i1970
  return i1960
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i1974 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i1975 = data
  i1974.name = i1975[0]
  i1974.value = i1975[1]
  return i1974
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i1978 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i1979 = data
  i1978.name = i1979[0]
  i1978.value = new pc.Color(i1979[1], i1979[2], i1979[3], i1979[4])
  return i1978
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i1982 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i1983 = data
  i1982.name = i1983[0]
  i1982.value = new pc.Vec4( i1983[1], i1983[2], i1983[3], i1983[4] )
  return i1982
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i1986 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i1987 = data
  i1986.name = i1987[0]
  request.r(i1987[1], i1987[2], 0, i1986, 'value')
  return i1986
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i1990 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i1991 = data
  i1990.name = i1991[0]
  i1990.enabled = !!i1991[1]
  return i1990
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i1992 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i1993 = data
  i1992.name = i1993[0]
  i1992.width = i1993[1]
  i1992.height = i1993[2]
  i1992.mipmapCount = i1993[3]
  i1992.anisoLevel = i1993[4]
  i1992.filterMode = i1993[5]
  i1992.hdr = !!i1993[6]
  i1992.format = i1993[7]
  i1992.wrapMode = i1993[8]
  i1992.alphaIsTransparency = !!i1993[9]
  i1992.alphaSource = i1993[10]
  i1992.graphicsFormat = i1993[11]
  i1992.sRGBTexture = !!i1993[12]
  i1992.desiredColorSpace = i1993[13]
  i1992.wrapU = i1993[14]
  i1992.wrapV = i1993[15]
  return i1992
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i1994 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i1995 = data
  i1994.name = i1995[0]
  i1994.halfPrecision = !!i1995[1]
  i1994.useSimplification = !!i1995[2]
  i1994.useUInt32IndexFormat = !!i1995[3]
  i1994.vertexCount = i1995[4]
  i1994.aabb = i1995[5]
  var i1997 = i1995[6]
  var i1996 = []
  for(var i = 0; i < i1997.length; i += 1) {
    i1996.push( !!i1997[i + 0] );
  }
  i1994.streams = i1996
  i1994.vertices = i1995[7]
  var i1999 = i1995[8]
  var i1998 = []
  for(var i = 0; i < i1999.length; i += 1) {
    i1998.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i1999[i + 0]) );
  }
  i1994.subMeshes = i1998
  var i2001 = i1995[9]
  var i2000 = []
  for(var i = 0; i < i2001.length; i += 16) {
    i2000.push( new pc.Mat4().setData(i2001[i + 0], i2001[i + 1], i2001[i + 2], i2001[i + 3],  i2001[i + 4], i2001[i + 5], i2001[i + 6], i2001[i + 7],  i2001[i + 8], i2001[i + 9], i2001[i + 10], i2001[i + 11],  i2001[i + 12], i2001[i + 13], i2001[i + 14], i2001[i + 15]) );
  }
  i1994.bindposes = i2000
  var i2003 = i1995[10]
  var i2002 = []
  for(var i = 0; i < i2003.length; i += 1) {
    i2002.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i2003[i + 0]) );
  }
  i1994.blendShapes = i2002
  return i1994
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i2008 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i2009 = data
  i2008.triangles = i2009[0]
  return i2008
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i2014 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i2015 = data
  i2014.name = i2015[0]
  var i2017 = i2015[1]
  var i2016 = []
  for(var i = 0; i < i2017.length; i += 1) {
    i2016.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i2017[i + 0]) );
  }
  i2014.frames = i2016
  return i2014
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i2018 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i2019 = data
  i2018.name = i2019[0]
  i2018.index = i2019[1]
  i2018.startup = !!i2019[2]
  return i2018
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i2020 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i2021 = data
  i2020.aspect = i2021[0]
  i2020.orthographic = !!i2021[1]
  i2020.orthographicSize = i2021[2]
  i2020.backgroundColor = new pc.Color(i2021[3], i2021[4], i2021[5], i2021[6])
  i2020.nearClipPlane = i2021[7]
  i2020.farClipPlane = i2021[8]
  i2020.fieldOfView = i2021[9]
  i2020.depth = i2021[10]
  i2020.clearFlags = i2021[11]
  i2020.cullingMask = i2021[12]
  i2020.rect = i2021[13]
  request.r(i2021[14], i2021[15], 0, i2020, 'targetTexture')
  i2020.usePhysicalProperties = !!i2021[16]
  i2020.focalLength = i2021[17]
  i2020.sensorSize = new pc.Vec2( i2021[18], i2021[19] )
  i2020.lensShift = new pc.Vec2( i2021[20], i2021[21] )
  i2020.gateFit = i2021[22]
  i2020.commandBufferCount = i2021[23]
  i2020.cameraType = i2021[24]
  i2020.enabled = !!i2021[25]
  return i2020
}

Deserializers["CameraFollow2D"] = function (request, data, root) {
  var i2022 = root || request.c( 'CameraFollow2D' )
  var i2023 = data
  request.r(i2023[0], i2023[1], 0, i2022, 'target')
  i2022.smoothSpeed = i2023[2]
  i2022.offset = new pc.Vec3( i2023[3], i2023[4], i2023[5] )
  i2022.followY = !!i2023[6]
  return i2022
}

Deserializers["AutoCameraFit"] = function (request, data, root) {
  var i2024 = root || request.c( 'AutoCameraFit' )
  var i2025 = data
  request.r(i2025[0], i2025[1], 0, i2024, 'tallScreenObject')
  i2024.tallScreenRatioThreshold = i2025[2]
  i2024.tallScreenYOffset = i2025[3]
  request.r(i2025[4], i2025[5], 0, i2024, 'canvasBtn')
  request.r(i2025[6], i2025[7], 0, i2024, 'targetArea')
  i2024.paddingLandscape = i2025[8]
  i2024.paddingPortrait = i2025[9]
  i2024.extraPaddingSmallScreen = i2025[10]
  i2024.smallScreenThreshold = i2025[11]
  i2024.autoUpdateOnResize = !!i2025[12]
  i2024.adjustInEditMode = !!i2025[13]
  return i2024
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i2026 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i2027 = data
  i2026.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i2027[0], i2026.main)
  i2026.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i2027[1], i2026.colorBySpeed)
  i2026.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i2027[2], i2026.colorOverLifetime)
  i2026.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i2027[3], i2026.emission)
  i2026.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i2027[4], i2026.rotationBySpeed)
  i2026.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i2027[5], i2026.rotationOverLifetime)
  i2026.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i2027[6], i2026.shape)
  i2026.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i2027[7], i2026.sizeBySpeed)
  i2026.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i2027[8], i2026.sizeOverLifetime)
  i2026.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i2027[9], i2026.textureSheetAnimation)
  i2026.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i2027[10], i2026.velocityOverLifetime)
  i2026.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i2027[11], i2026.noise)
  i2026.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i2027[12], i2026.inheritVelocity)
  i2026.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i2027[13], i2026.forceOverLifetime)
  i2026.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i2027[14], i2026.limitVelocityOverLifetime)
  i2026.useAutoRandomSeed = !!i2027[15]
  i2026.randomSeed = i2027[16]
  return i2026
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i2028 = root || new pc.ParticleSystemMain()
  var i2029 = data
  i2028.duration = i2029[0]
  i2028.loop = !!i2029[1]
  i2028.prewarm = !!i2029[2]
  i2028.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2029[3], i2028.startDelay)
  i2028.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2029[4], i2028.startLifetime)
  i2028.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2029[5], i2028.startSpeed)
  i2028.startSize3D = !!i2029[6]
  i2028.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2029[7], i2028.startSizeX)
  i2028.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2029[8], i2028.startSizeY)
  i2028.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2029[9], i2028.startSizeZ)
  i2028.startRotation3D = !!i2029[10]
  i2028.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2029[11], i2028.startRotationX)
  i2028.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2029[12], i2028.startRotationY)
  i2028.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2029[13], i2028.startRotationZ)
  i2028.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2029[14], i2028.startColor)
  i2028.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2029[15], i2028.gravityModifier)
  i2028.simulationSpace = i2029[16]
  request.r(i2029[17], i2029[18], 0, i2028, 'customSimulationSpace')
  i2028.simulationSpeed = i2029[19]
  i2028.useUnscaledTime = !!i2029[20]
  i2028.scalingMode = i2029[21]
  i2028.playOnAwake = !!i2029[22]
  i2028.maxParticles = i2029[23]
  i2028.emitterVelocityMode = i2029[24]
  i2028.stopAction = i2029[25]
  return i2028
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i2030 = root || new pc.MinMaxCurve()
  var i2031 = data
  i2030.mode = i2031[0]
  i2030.curveMin = new pc.AnimationCurve( { keys_flow: i2031[1] } )
  i2030.curveMax = new pc.AnimationCurve( { keys_flow: i2031[2] } )
  i2030.curveMultiplier = i2031[3]
  i2030.constantMin = i2031[4]
  i2030.constantMax = i2031[5]
  return i2030
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i2032 = root || new pc.MinMaxGradient()
  var i2033 = data
  i2032.mode = i2033[0]
  i2032.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2033[1], i2032.gradientMin)
  i2032.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2033[2], i2032.gradientMax)
  i2032.colorMin = new pc.Color(i2033[3], i2033[4], i2033[5], i2033[6])
  i2032.colorMax = new pc.Color(i2033[7], i2033[8], i2033[9], i2033[10])
  return i2032
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i2034 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i2035 = data
  i2034.mode = i2035[0]
  var i2037 = i2035[1]
  var i2036 = []
  for(var i = 0; i < i2037.length; i += 1) {
    i2036.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i2037[i + 0]) );
  }
  i2034.colorKeys = i2036
  var i2039 = i2035[2]
  var i2038 = []
  for(var i = 0; i < i2039.length; i += 1) {
    i2038.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i2039[i + 0]) );
  }
  i2034.alphaKeys = i2038
  return i2034
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i2040 = root || new pc.ParticleSystemColorBySpeed()
  var i2041 = data
  i2040.enabled = !!i2041[0]
  i2040.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2041[1], i2040.color)
  i2040.range = new pc.Vec2( i2041[2], i2041[3] )
  return i2040
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i2044 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i2045 = data
  i2044.color = new pc.Color(i2045[0], i2045[1], i2045[2], i2045[3])
  i2044.time = i2045[4]
  return i2044
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i2048 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i2049 = data
  i2048.alpha = i2049[0]
  i2048.time = i2049[1]
  return i2048
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i2050 = root || new pc.ParticleSystemColorOverLifetime()
  var i2051 = data
  i2050.enabled = !!i2051[0]
  i2050.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2051[1], i2050.color)
  return i2050
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i2052 = root || new pc.ParticleSystemEmitter()
  var i2053 = data
  i2052.enabled = !!i2053[0]
  i2052.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2053[1], i2052.rateOverTime)
  i2052.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2053[2], i2052.rateOverDistance)
  var i2055 = i2053[3]
  var i2054 = []
  for(var i = 0; i < i2055.length; i += 1) {
    i2054.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i2055[i + 0]) );
  }
  i2052.bursts = i2054
  return i2052
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i2058 = root || new pc.ParticleSystemBurst()
  var i2059 = data
  i2058.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2059[0], i2058.count)
  i2058.cycleCount = i2059[1]
  i2058.minCount = i2059[2]
  i2058.maxCount = i2059[3]
  i2058.repeatInterval = i2059[4]
  i2058.time = i2059[5]
  return i2058
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i2060 = root || new pc.ParticleSystemRotationBySpeed()
  var i2061 = data
  i2060.enabled = !!i2061[0]
  i2060.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2061[1], i2060.x)
  i2060.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2061[2], i2060.y)
  i2060.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2061[3], i2060.z)
  i2060.separateAxes = !!i2061[4]
  i2060.range = new pc.Vec2( i2061[5], i2061[6] )
  return i2060
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i2062 = root || new pc.ParticleSystemRotationOverLifetime()
  var i2063 = data
  i2062.enabled = !!i2063[0]
  i2062.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2063[1], i2062.x)
  i2062.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2063[2], i2062.y)
  i2062.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2063[3], i2062.z)
  i2062.separateAxes = !!i2063[4]
  return i2062
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i2064 = root || new pc.ParticleSystemShape()
  var i2065 = data
  i2064.enabled = !!i2065[0]
  i2064.shapeType = i2065[1]
  i2064.randomDirectionAmount = i2065[2]
  i2064.sphericalDirectionAmount = i2065[3]
  i2064.randomPositionAmount = i2065[4]
  i2064.alignToDirection = !!i2065[5]
  i2064.radius = i2065[6]
  i2064.radiusMode = i2065[7]
  i2064.radiusSpread = i2065[8]
  i2064.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2065[9], i2064.radiusSpeed)
  i2064.radiusThickness = i2065[10]
  i2064.angle = i2065[11]
  i2064.length = i2065[12]
  i2064.boxThickness = new pc.Vec3( i2065[13], i2065[14], i2065[15] )
  i2064.meshShapeType = i2065[16]
  request.r(i2065[17], i2065[18], 0, i2064, 'mesh')
  request.r(i2065[19], i2065[20], 0, i2064, 'meshRenderer')
  request.r(i2065[21], i2065[22], 0, i2064, 'skinnedMeshRenderer')
  i2064.useMeshMaterialIndex = !!i2065[23]
  i2064.meshMaterialIndex = i2065[24]
  i2064.useMeshColors = !!i2065[25]
  i2064.normalOffset = i2065[26]
  i2064.arc = i2065[27]
  i2064.arcMode = i2065[28]
  i2064.arcSpread = i2065[29]
  i2064.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2065[30], i2064.arcSpeed)
  i2064.donutRadius = i2065[31]
  i2064.position = new pc.Vec3( i2065[32], i2065[33], i2065[34] )
  i2064.rotation = new pc.Vec3( i2065[35], i2065[36], i2065[37] )
  i2064.scale = new pc.Vec3( i2065[38], i2065[39], i2065[40] )
  return i2064
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i2066 = root || new pc.ParticleSystemSizeBySpeed()
  var i2067 = data
  i2066.enabled = !!i2067[0]
  i2066.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2067[1], i2066.x)
  i2066.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2067[2], i2066.y)
  i2066.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2067[3], i2066.z)
  i2066.separateAxes = !!i2067[4]
  i2066.range = new pc.Vec2( i2067[5], i2067[6] )
  return i2066
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i2068 = root || new pc.ParticleSystemSizeOverLifetime()
  var i2069 = data
  i2068.enabled = !!i2069[0]
  i2068.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2069[1], i2068.x)
  i2068.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2069[2], i2068.y)
  i2068.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2069[3], i2068.z)
  i2068.separateAxes = !!i2069[4]
  return i2068
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i2070 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i2071 = data
  i2070.enabled = !!i2071[0]
  i2070.mode = i2071[1]
  i2070.animation = i2071[2]
  i2070.numTilesX = i2071[3]
  i2070.numTilesY = i2071[4]
  i2070.useRandomRow = !!i2071[5]
  i2070.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2071[6], i2070.frameOverTime)
  i2070.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2071[7], i2070.startFrame)
  i2070.cycleCount = i2071[8]
  i2070.rowIndex = i2071[9]
  i2070.flipU = i2071[10]
  i2070.flipV = i2071[11]
  i2070.spriteCount = i2071[12]
  var i2073 = i2071[13]
  var i2072 = []
  for(var i = 0; i < i2073.length; i += 2) {
  request.r(i2073[i + 0], i2073[i + 1], 2, i2072, '')
  }
  i2070.sprites = i2072
  return i2070
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i2076 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i2077 = data
  i2076.enabled = !!i2077[0]
  i2076.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2077[1], i2076.x)
  i2076.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2077[2], i2076.y)
  i2076.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2077[3], i2076.z)
  i2076.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2077[4], i2076.radial)
  i2076.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2077[5], i2076.speedModifier)
  i2076.space = i2077[6]
  i2076.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2077[7], i2076.orbitalX)
  i2076.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2077[8], i2076.orbitalY)
  i2076.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2077[9], i2076.orbitalZ)
  i2076.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2077[10], i2076.orbitalOffsetX)
  i2076.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2077[11], i2076.orbitalOffsetY)
  i2076.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2077[12], i2076.orbitalOffsetZ)
  return i2076
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i2078 = root || new pc.ParticleSystemNoise()
  var i2079 = data
  i2078.enabled = !!i2079[0]
  i2078.separateAxes = !!i2079[1]
  i2078.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2079[2], i2078.strengthX)
  i2078.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2079[3], i2078.strengthY)
  i2078.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2079[4], i2078.strengthZ)
  i2078.frequency = i2079[5]
  i2078.damping = !!i2079[6]
  i2078.octaveCount = i2079[7]
  i2078.octaveMultiplier = i2079[8]
  i2078.octaveScale = i2079[9]
  i2078.quality = i2079[10]
  i2078.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2079[11], i2078.scrollSpeed)
  i2078.scrollSpeedMultiplier = i2079[12]
  i2078.remapEnabled = !!i2079[13]
  i2078.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2079[14], i2078.remapX)
  i2078.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2079[15], i2078.remapY)
  i2078.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2079[16], i2078.remapZ)
  i2078.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2079[17], i2078.positionAmount)
  i2078.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2079[18], i2078.rotationAmount)
  i2078.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2079[19], i2078.sizeAmount)
  return i2078
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i2080 = root || new pc.ParticleSystemInheritVelocity()
  var i2081 = data
  i2080.enabled = !!i2081[0]
  i2080.mode = i2081[1]
  i2080.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2081[2], i2080.curve)
  return i2080
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i2082 = root || new pc.ParticleSystemForceOverLifetime()
  var i2083 = data
  i2082.enabled = !!i2083[0]
  i2082.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2083[1], i2082.x)
  i2082.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2083[2], i2082.y)
  i2082.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2083[3], i2082.z)
  i2082.space = i2083[4]
  i2082.randomized = !!i2083[5]
  return i2082
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i2084 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i2085 = data
  i2084.enabled = !!i2085[0]
  i2084.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2085[1], i2084.limit)
  i2084.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2085[2], i2084.limitX)
  i2084.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2085[3], i2084.limitY)
  i2084.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2085[4], i2084.limitZ)
  i2084.dampen = i2085[5]
  i2084.separateAxes = !!i2085[6]
  i2084.space = i2085[7]
  i2084.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2085[8], i2084.drag)
  i2084.multiplyDragByParticleSize = !!i2085[9]
  i2084.multiplyDragByParticleVelocity = !!i2085[10]
  return i2084
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i2086 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i2087 = data
  request.r(i2087[0], i2087[1], 0, i2086, 'mesh')
  i2086.meshCount = i2087[2]
  i2086.activeVertexStreamsCount = i2087[3]
  i2086.alignment = i2087[4]
  i2086.renderMode = i2087[5]
  i2086.sortMode = i2087[6]
  i2086.lengthScale = i2087[7]
  i2086.velocityScale = i2087[8]
  i2086.cameraVelocityScale = i2087[9]
  i2086.normalDirection = i2087[10]
  i2086.sortingFudge = i2087[11]
  i2086.minParticleSize = i2087[12]
  i2086.maxParticleSize = i2087[13]
  i2086.pivot = new pc.Vec3( i2087[14], i2087[15], i2087[16] )
  request.r(i2087[17], i2087[18], 0, i2086, 'trailMaterial')
  i2086.applyActiveColorSpace = !!i2087[19]
  i2086.enabled = !!i2087[20]
  request.r(i2087[21], i2087[22], 0, i2086, 'sharedMaterial')
  var i2089 = i2087[23]
  var i2088 = []
  for(var i = 0; i < i2089.length; i += 2) {
  request.r(i2089[i + 0], i2089[i + 1], 2, i2088, '')
  }
  i2086.sharedMaterials = i2088
  i2086.receiveShadows = !!i2087[24]
  i2086.shadowCastingMode = i2087[25]
  i2086.sortingLayerID = i2087[26]
  i2086.sortingOrder = i2087[27]
  i2086.lightmapIndex = i2087[28]
  i2086.lightmapSceneIndex = i2087[29]
  i2086.lightmapScaleOffset = new pc.Vec4( i2087[30], i2087[31], i2087[32], i2087[33] )
  i2086.lightProbeUsage = i2087[34]
  i2086.reflectionProbeUsage = i2087[35]
  return i2086
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i2092 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i2093 = data
  request.r(i2093[0], i2093[1], 0, i2092, 'clip')
  request.r(i2093[2], i2093[3], 0, i2092, 'outputAudioMixerGroup')
  i2092.playOnAwake = !!i2093[4]
  i2092.loop = !!i2093[5]
  i2092.time = i2093[6]
  i2092.volume = i2093[7]
  i2092.pitch = i2093[8]
  i2092.enabled = !!i2093[9]
  return i2092
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i2094 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i2095 = data
  i2094.name = i2095[0]
  i2094.tagId = i2095[1]
  i2094.enabled = !!i2095[2]
  i2094.isStatic = !!i2095[3]
  i2094.layer = i2095[4]
  return i2094
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i2096 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i2097 = data
  i2096.color = new pc.Color(i2097[0], i2097[1], i2097[2], i2097[3])
  request.r(i2097[4], i2097[5], 0, i2096, 'sprite')
  i2096.flipX = !!i2097[6]
  i2096.flipY = !!i2097[7]
  i2096.drawMode = i2097[8]
  i2096.size = new pc.Vec2( i2097[9], i2097[10] )
  i2096.tileMode = i2097[11]
  i2096.adaptiveModeThreshold = i2097[12]
  i2096.maskInteraction = i2097[13]
  i2096.spriteSortPoint = i2097[14]
  i2096.enabled = !!i2097[15]
  request.r(i2097[16], i2097[17], 0, i2096, 'sharedMaterial')
  var i2099 = i2097[18]
  var i2098 = []
  for(var i = 0; i < i2099.length; i += 2) {
  request.r(i2099[i + 0], i2099[i + 1], 2, i2098, '')
  }
  i2096.sharedMaterials = i2098
  i2096.receiveShadows = !!i2097[19]
  i2096.shadowCastingMode = i2097[20]
  i2096.sortingLayerID = i2097[21]
  i2096.sortingOrder = i2097[22]
  i2096.lightmapIndex = i2097[23]
  i2096.lightmapSceneIndex = i2097[24]
  i2096.lightmapScaleOffset = new pc.Vec4( i2097[25], i2097[26], i2097[27], i2097[28] )
  i2096.lightProbeUsage = i2097[29]
  i2096.reflectionProbeUsage = i2097[30]
  return i2096
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i2100 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i2101 = data
  request.r(i2101[0], i2101[1], 0, i2100, 'animatorController')
  request.r(i2101[2], i2101[3], 0, i2100, 'avatar')
  i2100.updateMode = i2101[4]
  i2100.hasTransformHierarchy = !!i2101[5]
  i2100.applyRootMotion = !!i2101[6]
  var i2103 = i2101[7]
  var i2102 = []
  for(var i = 0; i < i2103.length; i += 2) {
  request.r(i2103[i + 0], i2103[i + 1], 2, i2102, '')
  }
  i2100.humanBones = i2102
  i2100.enabled = !!i2101[8]
  return i2100
}

Deserializers["MoveBetweenPoints"] = function (request, data, root) {
  var i2106 = root || request.c( 'MoveBetweenPoints' )
  var i2107 = data
  request.r(i2107[0], i2107[1], 0, i2106, 'pointA')
  request.r(i2107[2], i2107[3], 0, i2106, 'pointB')
  i2106.duration = i2107[4]
  return i2106
}

Deserializers["ScreenHeightPositionAnchor"] = function (request, data, root) {
  var i2108 = root || request.c( 'ScreenHeightPositionAnchor' )
  var i2109 = data
  request.r(i2109[0], i2109[1], 0, i2108, 'anchorPoint')
  request.r(i2109[2], i2109[3], 0, i2108, 'targetCamera')
  i2108.viewportYRatio = i2109[4]
  i2108.alignOnStart = !!i2109[5]
  i2108.alignOnEnable = !!i2109[6]
  i2108.realignOnScreenSizeChanged = !!i2109[7]
  i2108.drawGizmos = !!i2109[8]
  i2108.targetLineColor = new pc.Color(i2109[9], i2109[10], i2109[11], i2109[12])
  i2108.anchorColor = new pc.Color(i2109[13], i2109[14], i2109[15], i2109[16])
  return i2108
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i2110 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i2111 = data
  i2110.center = new pc.Vec3( i2111[0], i2111[1], i2111[2] )
  i2110.size = new pc.Vec3( i2111[3], i2111[4], i2111[5] )
  i2110.enabled = !!i2111[6]
  i2110.isTrigger = !!i2111[7]
  request.r(i2111[8], i2111[9], 0, i2110, 'material')
  return i2110
}

Deserializers["ClickToStore"] = function (request, data, root) {
  var i2112 = root || request.c( 'ClickToStore' )
  var i2113 = data
  return i2112
}

Deserializers["FavoritePlayerEndcard"] = function (request, data, root) {
  var i2114 = root || request.c( 'FavoritePlayerEndcard' )
  var i2115 = data
  request.r(i2115[0], i2115[1], 0, i2114, 'fullBodyRenderer')
  request.r(i2115[2], i2115[3], 0, i2114, 'nameText')
  request.r(i2115[4], i2115[5], 0, i2114, 'endcardPanel')
  return i2114
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i2116 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i2117 = data
  i2116.pivot = new pc.Vec2( i2117[0], i2117[1] )
  i2116.anchorMin = new pc.Vec2( i2117[2], i2117[3] )
  i2116.anchorMax = new pc.Vec2( i2117[4], i2117[5] )
  i2116.sizeDelta = new pc.Vec2( i2117[6], i2117[7] )
  i2116.anchoredPosition3D = new pc.Vec3( i2117[8], i2117[9], i2117[10] )
  i2116.rotation = new pc.Quat(i2117[11], i2117[12], i2117[13], i2117[14])
  i2116.scale = new pc.Vec3( i2117[15], i2117[16], i2117[17] )
  return i2116
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i2118 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i2119 = data
  request.r(i2119[0], i2119[1], 0, i2118, 'additionalVertexStreams')
  i2118.enabled = !!i2119[2]
  request.r(i2119[3], i2119[4], 0, i2118, 'sharedMaterial')
  var i2121 = i2119[5]
  var i2120 = []
  for(var i = 0; i < i2121.length; i += 2) {
  request.r(i2121[i + 0], i2121[i + 1], 2, i2120, '')
  }
  i2118.sharedMaterials = i2120
  i2118.receiveShadows = !!i2119[6]
  i2118.shadowCastingMode = i2119[7]
  i2118.sortingLayerID = i2119[8]
  i2118.sortingOrder = i2119[9]
  i2118.lightmapIndex = i2119[10]
  i2118.lightmapSceneIndex = i2119[11]
  i2118.lightmapScaleOffset = new pc.Vec4( i2119[12], i2119[13], i2119[14], i2119[15] )
  i2118.lightProbeUsage = i2119[16]
  i2118.reflectionProbeUsage = i2119[17]
  return i2118
}

Deserializers["TMPro.TextMeshPro"] = function (request, data, root) {
  var i2122 = root || request.c( 'TMPro.TextMeshPro' )
  var i2123 = data
  i2122._SortingLayer = i2123[0]
  i2122._SortingLayerID = i2123[1]
  i2122._SortingOrder = i2123[2]
  i2122.m_hasFontAssetChanged = !!i2123[3]
  request.r(i2123[4], i2123[5], 0, i2122, 'm_renderer')
  i2122.m_maskType = i2123[6]
  i2122.m_text = i2123[7]
  i2122.m_isRightToLeft = !!i2123[8]
  request.r(i2123[9], i2123[10], 0, i2122, 'm_fontAsset')
  request.r(i2123[11], i2123[12], 0, i2122, 'm_sharedMaterial')
  var i2125 = i2123[13]
  var i2124 = []
  for(var i = 0; i < i2125.length; i += 2) {
  request.r(i2125[i + 0], i2125[i + 1], 2, i2124, '')
  }
  i2122.m_fontSharedMaterials = i2124
  request.r(i2123[14], i2123[15], 0, i2122, 'm_fontMaterial')
  var i2127 = i2123[16]
  var i2126 = []
  for(var i = 0; i < i2127.length; i += 2) {
  request.r(i2127[i + 0], i2127[i + 1], 2, i2126, '')
  }
  i2122.m_fontMaterials = i2126
  i2122.m_fontColor32 = UnityEngine.Color32.ConstructColor(i2123[17], i2123[18], i2123[19], i2123[20])
  i2122.m_fontColor = new pc.Color(i2123[21], i2123[22], i2123[23], i2123[24])
  i2122.m_enableVertexGradient = !!i2123[25]
  i2122.m_colorMode = i2123[26]
  i2122.m_fontColorGradient = request.d('TMPro.VertexGradient', i2123[27], i2122.m_fontColorGradient)
  request.r(i2123[28], i2123[29], 0, i2122, 'm_fontColorGradientPreset')
  request.r(i2123[30], i2123[31], 0, i2122, 'm_spriteAsset')
  i2122.m_tintAllSprites = !!i2123[32]
  request.r(i2123[33], i2123[34], 0, i2122, 'm_StyleSheet')
  i2122.m_TextStyleHashCode = i2123[35]
  i2122.m_overrideHtmlColors = !!i2123[36]
  i2122.m_faceColor = UnityEngine.Color32.ConstructColor(i2123[37], i2123[38], i2123[39], i2123[40])
  i2122.m_fontSize = i2123[41]
  i2122.m_fontSizeBase = i2123[42]
  i2122.m_fontWeight = i2123[43]
  i2122.m_enableAutoSizing = !!i2123[44]
  i2122.m_fontSizeMin = i2123[45]
  i2122.m_fontSizeMax = i2123[46]
  i2122.m_fontStyle = i2123[47]
  i2122.m_HorizontalAlignment = i2123[48]
  i2122.m_VerticalAlignment = i2123[49]
  i2122.m_textAlignment = i2123[50]
  i2122.m_characterSpacing = i2123[51]
  i2122.m_wordSpacing = i2123[52]
  i2122.m_lineSpacing = i2123[53]
  i2122.m_lineSpacingMax = i2123[54]
  i2122.m_paragraphSpacing = i2123[55]
  i2122.m_charWidthMaxAdj = i2123[56]
  i2122.m_TextWrappingMode = i2123[57]
  i2122.m_wordWrappingRatios = i2123[58]
  i2122.m_overflowMode = i2123[59]
  request.r(i2123[60], i2123[61], 0, i2122, 'm_linkedTextComponent')
  request.r(i2123[62], i2123[63], 0, i2122, 'parentLinkedComponent')
  i2122.m_enableKerning = !!i2123[64]
  var i2129 = i2123[65]
  var i2128 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i2129.length; i += 1) {
    i2128.add(i2129[i + 0]);
  }
  i2122.m_ActiveFontFeatures = i2128
  i2122.m_enableExtraPadding = !!i2123[66]
  i2122.checkPaddingRequired = !!i2123[67]
  i2122.m_isRichText = !!i2123[68]
  i2122.m_parseCtrlCharacters = !!i2123[69]
  i2122.m_isOrthographic = !!i2123[70]
  i2122.m_isCullingEnabled = !!i2123[71]
  i2122.m_horizontalMapping = i2123[72]
  i2122.m_verticalMapping = i2123[73]
  i2122.m_uvLineOffset = i2123[74]
  i2122.m_geometrySortingOrder = i2123[75]
  i2122.m_IsTextObjectScaleStatic = !!i2123[76]
  i2122.m_VertexBufferAutoSizeReduction = !!i2123[77]
  i2122.m_useMaxVisibleDescender = !!i2123[78]
  i2122.m_pageToDisplay = i2123[79]
  i2122.m_margin = new pc.Vec4( i2123[80], i2123[81], i2123[82], i2123[83] )
  i2122.m_isUsingLegacyAnimationComponent = !!i2123[84]
  i2122.m_isVolumetricText = !!i2123[85]
  request.r(i2123[86], i2123[87], 0, i2122, 'm_Material')
  i2122.m_EmojiFallbackSupport = !!i2123[88]
  i2122.m_Maskable = !!i2123[89]
  i2122.m_Color = new pc.Color(i2123[90], i2123[91], i2123[92], i2123[93])
  i2122.m_RaycastTarget = !!i2123[94]
  i2122.m_RaycastPadding = new pc.Vec4( i2123[95], i2123[96], i2123[97], i2123[98] )
  return i2122
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i2130 = root || request.c( 'TMPro.VertexGradient' )
  var i2131 = data
  i2130.topLeft = new pc.Color(i2131[0], i2131[1], i2131[2], i2131[3])
  i2130.topRight = new pc.Color(i2131[4], i2131[5], i2131[6], i2131[7])
  i2130.bottomLeft = new pc.Color(i2131[8], i2131[9], i2131[10], i2131[11])
  i2130.bottomRight = new pc.Color(i2131[12], i2131[13], i2131[14], i2131[15])
  return i2130
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i2134 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i2135 = data
  request.r(i2135[0], i2135[1], 0, i2134, 'sharedMesh')
  return i2134
}

Deserializers["SpriteSizeAdapter"] = function (request, data, root) {
  var i2136 = root || request.c( 'SpriteSizeAdapter' )
  var i2137 = data
  i2136.targetSize = new pc.Vec2( i2137[0], i2137[1] )
  i2136.fitMode = i2137[2]
  i2136.autoFitOnStart = !!i2137[3]
  i2136.showGizmos = !!i2137[4]
  i2136.gizmoColor = new pc.Color(i2137[5], i2137[6], i2137[7], i2137[8])
  return i2136
}

Deserializers["PlayerCardUIManager"] = function (request, data, root) {
  var i2138 = root || request.c( 'PlayerCardUIManager' )
  var i2139 = data
  request.r(i2139[0], i2139[1], 0, i2138, 'cardPanel')
  var i2141 = i2139[2]
  var i2140 = []
  for(var i = 0; i < i2141.length; i += 2) {
  request.r(i2141[i + 0], i2141[i + 1], 2, i2140, '')
  }
  i2138.extraObjectsToActivate = i2140
  i2138.waitTime = i2139[3]
  var i2143 = i2139[4]
  var i2142 = []
  for(var i = 0; i < i2143.length; i += 2) {
  request.r(i2143[i + 0], i2143[i + 1], 2, i2142, '')
  }
  i2138.objectsToTurnOnAfterWait = i2142
  var i2145 = i2139[5]
  var i2144 = []
  for(var i = 0; i < i2145.length; i += 2) {
  request.r(i2145[i + 0], i2145[i + 1], 2, i2144, '')
  }
  i2138.objectsToTurnOffAfterWait = i2144
  request.r(i2139[6], i2139[7], 0, i2138, 'nationalityText')
  request.r(i2139[8], i2139[9], 0, i2138, 'playerImage')
  request.r(i2139[10], i2139[11], 0, i2138, 'flagImage')
  return i2138
}

Deserializers["Ply_SoundManager"] = function (request, data, root) {
  var i2148 = root || request.c( 'Ply_SoundManager' )
  var i2149 = data
  i2148.fxAudio = request.d('FxAudio', i2149[0], i2148.fxAudio)
  request.r(i2149[1], i2149[2], 0, i2148, 'bgm1')
  return i2148
}

Deserializers["FxAudio"] = function (request, data, root) {
  var i2150 = root || request.c( 'FxAudio' )
  var i2151 = data
  i2150.ClickBox = request.d('SoundData', i2151[0], i2150.ClickBox)
  i2150.Happy = request.d('SoundData', i2151[1], i2150.Happy)
  i2150.Wrong = request.d('SoundData', i2151[2], i2150.Wrong)
  i2150.Spray = request.d('SoundData', i2151[3], i2150.Spray)
  i2150.Brush = request.d('SoundData', i2151[4], i2150.Brush)
  return i2150
}

Deserializers["SoundData"] = function (request, data, root) {
  var i2152 = root || request.c( 'SoundData' )
  var i2153 = data
  request.r(i2153[0], i2153[1], 0, i2152, 'clip')
  i2152.repeatCount = i2153[2]
  return i2152
}

Deserializers["FavoritePlayerManager"] = function (request, data, root) {
  var i2154 = root || request.c( 'FavoritePlayerManager' )
  var i2155 = data
  i2154.slotLayerMask = UnityEngine.LayerMask.FromIntegerValue( i2155[0] )
  request.r(i2155[1], i2155[2], 0, i2154, 'slotA')
  request.r(i2155[3], i2155[4], 0, i2154, 'slotB')
  request.r(i2155[5], i2155[6], 0, i2154, 'audioSource')
  request.r(i2155[7], i2155[8], 0, i2154, 'orAudio')
  request.r(i2155[9], i2155[10], 0, i2154, 'clickAudio')
  var i2157 = i2155[11]
  var i2156 = new (System.Collections.Generic.List$1(Bridge.ns('FavoritePlayerCard')))
  for(var i = 0; i < i2157.length; i += 2) {
  request.r(i2157[i + 0], i2157[i + 1], 1, i2156, '')
  }
  i2154.playerList = i2156
  request.r(i2155[12], i2155[13], 0, i2154, 'endcardUI')
  request.r(i2155[14], i2155[15], 0, i2154, 'discardTarget')
  i2154.moveDuration = i2155[16]
  i2154.arcHeight = i2155[17]
  i2154.scaleUpSize = i2155[18]
  i2154.scaleUpDuration = i2155[19]
  i2154.scaleDownDuration = i2155[20]
  i2154.appearStartScale = i2155[21]
  i2154.appearMaxScale = i2155[22]
  i2154.appearUpDuration = i2155[23]
  i2154.appearDownDuration = i2155[24]
  i2154.clickScaleSize = i2155[25]
  i2154.clickDownDuration = i2155[26]
  i2154.clickUpDuration = i2155[27]
  var i2159 = i2155[28]
  var i2158 = []
  for(var i = 0; i < i2159.length; i += 2) {
  request.r(i2159[i + 0], i2159[i + 1], 2, i2158, '')
  }
  i2154.extraObjectsToActivate = i2158
  var i2161 = i2155[29]
  var i2160 = []
  for(var i = 0; i < i2161.length; i += 2) {
  request.r(i2161[i + 0], i2161[i + 1], 2, i2160, '')
  }
  i2154.extraObjectsToDeactivate = i2160
  i2154.waitTime = i2155[30]
  var i2163 = i2155[31]
  var i2162 = []
  for(var i = 0; i < i2163.length; i += 2) {
  request.r(i2163[i + 0], i2163[i + 1], 2, i2162, '')
  }
  i2154.objectsToTurnOnAfterWait = i2162
  var i2165 = i2155[32]
  var i2164 = []
  for(var i = 0; i < i2165.length; i += 2) {
  request.r(i2165[i + 0], i2165[i + 1], 2, i2164, '')
  }
  i2154.objectsToTurnOffAfterWait = i2164
  return i2154
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i2168 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i2169 = data
  i2168.planeDistance = i2169[0]
  i2168.referencePixelsPerUnit = i2169[1]
  i2168.isFallbackOverlay = !!i2169[2]
  i2168.renderMode = i2169[3]
  i2168.renderOrder = i2169[4]
  i2168.sortingLayerName = i2169[5]
  i2168.sortingOrder = i2169[6]
  i2168.scaleFactor = i2169[7]
  request.r(i2169[8], i2169[9], 0, i2168, 'worldCamera')
  i2168.overrideSorting = !!i2169[10]
  i2168.pixelPerfect = !!i2169[11]
  i2168.targetDisplay = i2169[12]
  i2168.overridePixelPerfect = !!i2169[13]
  i2168.enabled = !!i2169[14]
  return i2168
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i2170 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i2171 = data
  i2170.m_UiScaleMode = i2171[0]
  i2170.m_ReferencePixelsPerUnit = i2171[1]
  i2170.m_ScaleFactor = i2171[2]
  i2170.m_ReferenceResolution = new pc.Vec2( i2171[3], i2171[4] )
  i2170.m_ScreenMatchMode = i2171[5]
  i2170.m_MatchWidthOrHeight = i2171[6]
  i2170.m_PhysicalUnit = i2171[7]
  i2170.m_FallbackScreenDPI = i2171[8]
  i2170.m_DefaultSpriteDPI = i2171[9]
  i2170.m_DynamicPixelsPerUnit = i2171[10]
  i2170.m_PresetInfoIsWorld = !!i2171[11]
  return i2170
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i2172 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i2173 = data
  i2172.m_IgnoreReversedGraphics = !!i2173[0]
  i2172.m_BlockingObjects = i2173[1]
  i2172.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i2173[2] )
  return i2172
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i2174 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i2175 = data
  i2174.cullTransparentMesh = !!i2175[0]
  return i2174
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i2176 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i2177 = data
  i2176.m_hasFontAssetChanged = !!i2177[0]
  request.r(i2177[1], i2177[2], 0, i2176, 'm_baseMaterial')
  i2176.m_maskOffset = new pc.Vec4( i2177[3], i2177[4], i2177[5], i2177[6] )
  i2176.m_text = i2177[7]
  i2176.m_isRightToLeft = !!i2177[8]
  request.r(i2177[9], i2177[10], 0, i2176, 'm_fontAsset')
  request.r(i2177[11], i2177[12], 0, i2176, 'm_sharedMaterial')
  var i2179 = i2177[13]
  var i2178 = []
  for(var i = 0; i < i2179.length; i += 2) {
  request.r(i2179[i + 0], i2179[i + 1], 2, i2178, '')
  }
  i2176.m_fontSharedMaterials = i2178
  request.r(i2177[14], i2177[15], 0, i2176, 'm_fontMaterial')
  var i2181 = i2177[16]
  var i2180 = []
  for(var i = 0; i < i2181.length; i += 2) {
  request.r(i2181[i + 0], i2181[i + 1], 2, i2180, '')
  }
  i2176.m_fontMaterials = i2180
  i2176.m_fontColor32 = UnityEngine.Color32.ConstructColor(i2177[17], i2177[18], i2177[19], i2177[20])
  i2176.m_fontColor = new pc.Color(i2177[21], i2177[22], i2177[23], i2177[24])
  i2176.m_enableVertexGradient = !!i2177[25]
  i2176.m_colorMode = i2177[26]
  i2176.m_fontColorGradient = request.d('TMPro.VertexGradient', i2177[27], i2176.m_fontColorGradient)
  request.r(i2177[28], i2177[29], 0, i2176, 'm_fontColorGradientPreset')
  request.r(i2177[30], i2177[31], 0, i2176, 'm_spriteAsset')
  i2176.m_tintAllSprites = !!i2177[32]
  request.r(i2177[33], i2177[34], 0, i2176, 'm_StyleSheet')
  i2176.m_TextStyleHashCode = i2177[35]
  i2176.m_overrideHtmlColors = !!i2177[36]
  i2176.m_faceColor = UnityEngine.Color32.ConstructColor(i2177[37], i2177[38], i2177[39], i2177[40])
  i2176.m_fontSize = i2177[41]
  i2176.m_fontSizeBase = i2177[42]
  i2176.m_fontWeight = i2177[43]
  i2176.m_enableAutoSizing = !!i2177[44]
  i2176.m_fontSizeMin = i2177[45]
  i2176.m_fontSizeMax = i2177[46]
  i2176.m_fontStyle = i2177[47]
  i2176.m_HorizontalAlignment = i2177[48]
  i2176.m_VerticalAlignment = i2177[49]
  i2176.m_textAlignment = i2177[50]
  i2176.m_characterSpacing = i2177[51]
  i2176.m_wordSpacing = i2177[52]
  i2176.m_lineSpacing = i2177[53]
  i2176.m_lineSpacingMax = i2177[54]
  i2176.m_paragraphSpacing = i2177[55]
  i2176.m_charWidthMaxAdj = i2177[56]
  i2176.m_TextWrappingMode = i2177[57]
  i2176.m_wordWrappingRatios = i2177[58]
  i2176.m_overflowMode = i2177[59]
  request.r(i2177[60], i2177[61], 0, i2176, 'm_linkedTextComponent')
  request.r(i2177[62], i2177[63], 0, i2176, 'parentLinkedComponent')
  i2176.m_enableKerning = !!i2177[64]
  var i2183 = i2177[65]
  var i2182 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i2183.length; i += 1) {
    i2182.add(i2183[i + 0]);
  }
  i2176.m_ActiveFontFeatures = i2182
  i2176.m_enableExtraPadding = !!i2177[66]
  i2176.checkPaddingRequired = !!i2177[67]
  i2176.m_isRichText = !!i2177[68]
  i2176.m_parseCtrlCharacters = !!i2177[69]
  i2176.m_isOrthographic = !!i2177[70]
  i2176.m_isCullingEnabled = !!i2177[71]
  i2176.m_horizontalMapping = i2177[72]
  i2176.m_verticalMapping = i2177[73]
  i2176.m_uvLineOffset = i2177[74]
  i2176.m_geometrySortingOrder = i2177[75]
  i2176.m_IsTextObjectScaleStatic = !!i2177[76]
  i2176.m_VertexBufferAutoSizeReduction = !!i2177[77]
  i2176.m_useMaxVisibleDescender = !!i2177[78]
  i2176.m_pageToDisplay = i2177[79]
  i2176.m_margin = new pc.Vec4( i2177[80], i2177[81], i2177[82], i2177[83] )
  i2176.m_isUsingLegacyAnimationComponent = !!i2177[84]
  i2176.m_isVolumetricText = !!i2177[85]
  request.r(i2177[86], i2177[87], 0, i2176, 'm_Material')
  i2176.m_EmojiFallbackSupport = !!i2177[88]
  i2176.m_Maskable = !!i2177[89]
  i2176.m_Color = new pc.Color(i2177[90], i2177[91], i2177[92], i2177[93])
  i2176.m_RaycastTarget = !!i2177[94]
  i2176.m_RaycastPadding = new pc.Vec4( i2177[95], i2177[96], i2177[97], i2177[98] )
  return i2176
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i2184 = root || request.c( 'UnityEngine.UI.Image' )
  var i2185 = data
  request.r(i2185[0], i2185[1], 0, i2184, 'm_Sprite')
  i2184.m_Type = i2185[2]
  i2184.m_PreserveAspect = !!i2185[3]
  i2184.m_FillCenter = !!i2185[4]
  i2184.m_FillMethod = i2185[5]
  i2184.m_FillAmount = i2185[6]
  i2184.m_FillClockwise = !!i2185[7]
  i2184.m_FillOrigin = i2185[8]
  i2184.m_UseSpriteMesh = !!i2185[9]
  i2184.m_PixelsPerUnitMultiplier = i2185[10]
  request.r(i2185[11], i2185[12], 0, i2184, 'm_Material')
  i2184.m_Maskable = !!i2185[13]
  i2184.m_Color = new pc.Color(i2185[14], i2185[15], i2185[16], i2185[17])
  i2184.m_RaycastTarget = !!i2185[18]
  i2184.m_RaycastPadding = new pc.Vec4( i2185[19], i2185[20], i2185[21], i2185[22] )
  return i2184
}

Deserializers["PlayerSlot"] = function (request, data, root) {
  var i2186 = root || request.c( 'PlayerSlot' )
  var i2187 = data
  request.r(i2187[0], i2187[1], 0, i2186, 'spriteRenderer')
  request.r(i2187[2], i2187[3], 0, i2186, 'lightEffect')
  i2186.idleScale = i2187[4]
  i2186.idleDuration = i2187[5]
  i2186.originalPosition = new pc.Vec3( i2187[6], i2187[7], i2187[8] )
  i2186.originalScale = new pc.Vec3( i2187[9], i2187[10], i2187[11] )
  request.r(i2187[12], i2187[13], 0, i2186, 'currentData')
  return i2186
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i2188 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i2189 = data
  request.r(i2189[0], i2189[1], 0, i2188, 'm_FirstSelected')
  i2188.m_sendNavigationEvents = !!i2189[2]
  i2188.m_DragThreshold = i2189[3]
  return i2188
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i2190 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i2191 = data
  i2190.m_HorizontalAxis = i2191[0]
  i2190.m_VerticalAxis = i2191[1]
  i2190.m_SubmitButton = i2191[2]
  i2190.m_CancelButton = i2191[3]
  i2190.m_InputActionsPerSecond = i2191[4]
  i2190.m_RepeatDelay = i2191[5]
  i2190.m_ForceModuleActive = !!i2191[6]
  i2190.m_SendPointerHoverToParent = !!i2191[7]
  return i2190
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i2192 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i2193 = data
  i2192.ambientIntensity = i2193[0]
  i2192.reflectionIntensity = i2193[1]
  i2192.ambientMode = i2193[2]
  i2192.ambientLight = new pc.Color(i2193[3], i2193[4], i2193[5], i2193[6])
  i2192.ambientSkyColor = new pc.Color(i2193[7], i2193[8], i2193[9], i2193[10])
  i2192.ambientGroundColor = new pc.Color(i2193[11], i2193[12], i2193[13], i2193[14])
  i2192.ambientEquatorColor = new pc.Color(i2193[15], i2193[16], i2193[17], i2193[18])
  i2192.fogColor = new pc.Color(i2193[19], i2193[20], i2193[21], i2193[22])
  i2192.fogEndDistance = i2193[23]
  i2192.fogStartDistance = i2193[24]
  i2192.fogDensity = i2193[25]
  i2192.fog = !!i2193[26]
  request.r(i2193[27], i2193[28], 0, i2192, 'skybox')
  i2192.fogMode = i2193[29]
  var i2195 = i2193[30]
  var i2194 = []
  for(var i = 0; i < i2195.length; i += 1) {
    i2194.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i2195[i + 0]) );
  }
  i2192.lightmaps = i2194
  i2192.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i2193[31], i2192.lightProbes)
  i2192.lightmapsMode = i2193[32]
  i2192.mixedBakeMode = i2193[33]
  i2192.environmentLightingMode = i2193[34]
  i2192.ambientProbe = new pc.SphericalHarmonicsL2(i2193[35])
  i2192.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i2193[36])
  i2192.useReferenceAmbientProbe = !!i2193[37]
  request.r(i2193[38], i2193[39], 0, i2192, 'customReflection')
  request.r(i2193[40], i2193[41], 0, i2192, 'defaultReflection')
  i2192.defaultReflectionMode = i2193[42]
  i2192.defaultReflectionResolution = i2193[43]
  i2192.sunLightObjectId = i2193[44]
  i2192.pixelLightCount = i2193[45]
  i2192.defaultReflectionHDR = !!i2193[46]
  i2192.hasLightDataAsset = !!i2193[47]
  i2192.hasManualGenerate = !!i2193[48]
  return i2192
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i2198 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i2199 = data
  request.r(i2199[0], i2199[1], 0, i2198, 'lightmapColor')
  request.r(i2199[2], i2199[3], 0, i2198, 'lightmapDirection')
  request.r(i2199[4], i2199[5], 0, i2198, 'shadowMask')
  return i2198
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i2200 = root || new UnityEngine.LightProbes()
  var i2201 = data
  return i2200
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i2208 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i2209 = data
  var i2211 = i2209[0]
  var i2210 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i2211.length; i += 1) {
    i2210.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i2211[i + 0]));
  }
  i2208.ShaderCompilationErrors = i2210
  i2208.name = i2209[1]
  i2208.guid = i2209[2]
  var i2213 = i2209[3]
  var i2212 = []
  for(var i = 0; i < i2213.length; i += 1) {
    i2212.push( i2213[i + 0] );
  }
  i2208.shaderDefinedKeywords = i2212
  var i2215 = i2209[4]
  var i2214 = []
  for(var i = 0; i < i2215.length; i += 1) {
    i2214.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i2215[i + 0]) );
  }
  i2208.passes = i2214
  var i2217 = i2209[5]
  var i2216 = []
  for(var i = 0; i < i2217.length; i += 1) {
    i2216.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i2217[i + 0]) );
  }
  i2208.usePasses = i2216
  var i2219 = i2209[6]
  var i2218 = []
  for(var i = 0; i < i2219.length; i += 1) {
    i2218.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i2219[i + 0]) );
  }
  i2208.defaultParameterValues = i2218
  request.r(i2209[7], i2209[8], 0, i2208, 'unityFallbackShader')
  i2208.readDepth = !!i2209[9]
  i2208.hasDepthOnlyPass = !!i2209[10]
  i2208.isCreatedByShaderGraph = !!i2209[11]
  i2208.disableBatching = !!i2209[12]
  i2208.compiled = !!i2209[13]
  return i2208
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i2222 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i2223 = data
  i2222.shaderName = i2223[0]
  i2222.errorMessage = i2223[1]
  return i2222
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i2228 = root || new pc.UnityShaderPass()
  var i2229 = data
  i2228.id = i2229[0]
  i2228.subShaderIndex = i2229[1]
  i2228.name = i2229[2]
  i2228.passType = i2229[3]
  i2228.grabPassTextureName = i2229[4]
  i2228.usePass = !!i2229[5]
  i2228.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2229[6], i2228.zTest)
  i2228.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2229[7], i2228.zWrite)
  i2228.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2229[8], i2228.culling)
  i2228.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2229[9], i2228.blending)
  i2228.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2229[10], i2228.alphaBlending)
  i2228.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2229[11], i2228.colorWriteMask)
  i2228.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2229[12], i2228.offsetUnits)
  i2228.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2229[13], i2228.offsetFactor)
  i2228.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2229[14], i2228.stencilRef)
  i2228.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2229[15], i2228.stencilReadMask)
  i2228.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2229[16], i2228.stencilWriteMask)
  i2228.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2229[17], i2228.stencilOp)
  i2228.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2229[18], i2228.stencilOpFront)
  i2228.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2229[19], i2228.stencilOpBack)
  var i2231 = i2229[20]
  var i2230 = []
  for(var i = 0; i < i2231.length; i += 1) {
    i2230.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i2231[i + 0]) );
  }
  i2228.tags = i2230
  var i2233 = i2229[21]
  var i2232 = []
  for(var i = 0; i < i2233.length; i += 1) {
    i2232.push( i2233[i + 0] );
  }
  i2228.passDefinedKeywords = i2232
  var i2235 = i2229[22]
  var i2234 = []
  for(var i = 0; i < i2235.length; i += 1) {
    i2234.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i2235[i + 0]) );
  }
  i2228.passDefinedKeywordGroups = i2234
  var i2237 = i2229[23]
  var i2236 = []
  for(var i = 0; i < i2237.length; i += 1) {
    i2236.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2237[i + 0]) );
  }
  i2228.variants = i2236
  var i2239 = i2229[24]
  var i2238 = []
  for(var i = 0; i < i2239.length; i += 1) {
    i2238.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2239[i + 0]) );
  }
  i2228.excludedVariants = i2238
  i2228.hasDepthReader = !!i2229[25]
  return i2228
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i2240 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i2241 = data
  i2240.val = i2241[0]
  i2240.name = i2241[1]
  return i2240
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i2242 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i2243 = data
  i2242.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2243[0], i2242.src)
  i2242.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2243[1], i2242.dst)
  i2242.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2243[2], i2242.op)
  return i2242
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i2244 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i2245 = data
  i2244.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2245[0], i2244.pass)
  i2244.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2245[1], i2244.fail)
  i2244.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2245[2], i2244.zFail)
  i2244.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2245[3], i2244.comp)
  return i2244
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i2248 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i2249 = data
  i2248.name = i2249[0]
  i2248.value = i2249[1]
  return i2248
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i2252 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i2253 = data
  var i2255 = i2253[0]
  var i2254 = []
  for(var i = 0; i < i2255.length; i += 1) {
    i2254.push( i2255[i + 0] );
  }
  i2252.keywords = i2254
  i2252.hasDiscard = !!i2253[1]
  return i2252
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i2258 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i2259 = data
  i2258.passId = i2259[0]
  i2258.subShaderIndex = i2259[1]
  var i2261 = i2259[2]
  var i2260 = []
  for(var i = 0; i < i2261.length; i += 1) {
    i2260.push( i2261[i + 0] );
  }
  i2258.keywords = i2260
  i2258.vertexProgram = i2259[3]
  i2258.fragmentProgram = i2259[4]
  i2258.exportedForWebGl2 = !!i2259[5]
  i2258.readDepth = !!i2259[6]
  return i2258
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i2264 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i2265 = data
  request.r(i2265[0], i2265[1], 0, i2264, 'shader')
  i2264.pass = i2265[2]
  return i2264
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i2268 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i2269 = data
  i2268.name = i2269[0]
  i2268.type = i2269[1]
  i2268.value = new pc.Vec4( i2269[2], i2269[3], i2269[4], i2269[5] )
  i2268.textureValue = i2269[6]
  i2268.shaderPropertyFlag = i2269[7]
  return i2268
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i2270 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i2271 = data
  i2270.name = i2271[0]
  request.r(i2271[1], i2271[2], 0, i2270, 'texture')
  i2270.aabb = i2271[3]
  i2270.vertices = i2271[4]
  i2270.triangles = i2271[5]
  i2270.textureRect = UnityEngine.Rect.MinMaxRect(i2271[6], i2271[7], i2271[8], i2271[9])
  i2270.packedRect = UnityEngine.Rect.MinMaxRect(i2271[10], i2271[11], i2271[12], i2271[13])
  i2270.border = new pc.Vec4( i2271[14], i2271[15], i2271[16], i2271[17] )
  i2270.transparency = i2271[18]
  i2270.bounds = i2271[19]
  i2270.pixelsPerUnit = i2271[20]
  i2270.textureWidth = i2271[21]
  i2270.textureHeight = i2271[22]
  i2270.nativeSize = new pc.Vec2( i2271[23], i2271[24] )
  i2270.pivot = new pc.Vec2( i2271[25], i2271[26] )
  i2270.textureRectOffset = new pc.Vec2( i2271[27], i2271[28] )
  return i2270
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i2272 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i2273 = data
  i2272.name = i2273[0]
  return i2272
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i2274 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i2275 = data
  i2274.name = i2275[0]
  i2274.wrapMode = i2275[1]
  i2274.isLooping = !!i2275[2]
  i2274.length = i2275[3]
  var i2277 = i2275[4]
  var i2276 = []
  for(var i = 0; i < i2277.length; i += 1) {
    i2276.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i2277[i + 0]) );
  }
  i2274.curves = i2276
  var i2279 = i2275[5]
  var i2278 = []
  for(var i = 0; i < i2279.length; i += 1) {
    i2278.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i2279[i + 0]) );
  }
  i2274.events = i2278
  i2274.halfPrecision = !!i2275[6]
  i2274._frameRate = i2275[7]
  i2274.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i2275[8], i2274.localBounds)
  i2274.hasMuscleCurves = !!i2275[9]
  var i2281 = i2275[10]
  var i2280 = []
  for(var i = 0; i < i2281.length; i += 1) {
    i2280.push( i2281[i + 0] );
  }
  i2274.clipMuscleConstant = i2280
  i2274.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i2275[11], i2274.clipBindingConstant)
  return i2274
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i2284 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i2285 = data
  i2284.path = i2285[0]
  i2284.hash = i2285[1]
  i2284.componentType = i2285[2]
  i2284.property = i2285[3]
  i2284.keys = i2285[4]
  var i2287 = i2285[5]
  var i2286 = []
  for(var i = 0; i < i2287.length; i += 1) {
    i2286.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i2287[i + 0]) );
  }
  i2284.objectReferenceKeys = i2286
  return i2284
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i2290 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i2291 = data
  i2290.time = i2291[0]
  request.r(i2291[1], i2291[2], 0, i2290, 'value')
  return i2290
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i2294 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i2295 = data
  i2294.functionName = i2295[0]
  i2294.floatParameter = i2295[1]
  i2294.intParameter = i2295[2]
  i2294.stringParameter = i2295[3]
  request.r(i2295[4], i2295[5], 0, i2294, 'objectReferenceParameter')
  i2294.time = i2295[6]
  return i2294
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i2296 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i2297 = data
  i2296.center = new pc.Vec3( i2297[0], i2297[1], i2297[2] )
  i2296.extends = new pc.Vec3( i2297[3], i2297[4], i2297[5] )
  return i2296
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i2300 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i2301 = data
  var i2303 = i2301[0]
  var i2302 = []
  for(var i = 0; i < i2303.length; i += 1) {
    i2302.push( i2303[i + 0] );
  }
  i2300.genericBindings = i2302
  var i2305 = i2301[1]
  var i2304 = []
  for(var i = 0; i < i2305.length; i += 1) {
    i2304.push( i2305[i + 0] );
  }
  i2300.pptrCurveMapping = i2304
  return i2300
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i2306 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i2307 = data
  i2306.name = i2307[0]
  i2306.ascent = i2307[1]
  i2306.originalLineHeight = i2307[2]
  i2306.fontSize = i2307[3]
  var i2309 = i2307[4]
  var i2308 = []
  for(var i = 0; i < i2309.length; i += 1) {
    i2308.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i2309[i + 0]) );
  }
  i2306.characterInfo = i2308
  request.r(i2307[5], i2307[6], 0, i2306, 'texture')
  i2306.originalFontSize = i2307[7]
  return i2306
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i2312 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i2313 = data
  i2312.index = i2313[0]
  i2312.advance = i2313[1]
  i2312.bearing = i2313[2]
  i2312.glyphWidth = i2313[3]
  i2312.glyphHeight = i2313[4]
  i2312.minX = i2313[5]
  i2312.maxX = i2313[6]
  i2312.minY = i2313[7]
  i2312.maxY = i2313[8]
  i2312.uvBottomLeftX = i2313[9]
  i2312.uvBottomLeftY = i2313[10]
  i2312.uvBottomRightX = i2313[11]
  i2312.uvBottomRightY = i2313[12]
  i2312.uvTopLeftX = i2313[13]
  i2312.uvTopLeftY = i2313[14]
  i2312.uvTopRightX = i2313[15]
  i2312.uvTopRightY = i2313[16]
  return i2312
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i2314 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i2315 = data
  i2314.name = i2315[0]
  var i2317 = i2315[1]
  var i2316 = []
  for(var i = 0; i < i2317.length; i += 1) {
    i2316.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i2317[i + 0]) );
  }
  i2314.layers = i2316
  var i2319 = i2315[2]
  var i2318 = []
  for(var i = 0; i < i2319.length; i += 1) {
    i2318.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i2319[i + 0]) );
  }
  i2314.parameters = i2318
  i2314.animationClips = i2315[3]
  i2314.avatarUnsupported = i2315[4]
  return i2314
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i2322 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i2323 = data
  i2322.name = i2323[0]
  i2322.defaultWeight = i2323[1]
  i2322.blendingMode = i2323[2]
  i2322.avatarMask = i2323[3]
  i2322.syncedLayerIndex = i2323[4]
  i2322.syncedLayerAffectsTiming = !!i2323[5]
  i2322.syncedLayers = i2323[6]
  i2322.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2323[7], i2322.stateMachine)
  return i2322
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i2324 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i2325 = data
  i2324.id = i2325[0]
  i2324.name = i2325[1]
  i2324.path = i2325[2]
  var i2327 = i2325[3]
  var i2326 = []
  for(var i = 0; i < i2327.length; i += 1) {
    i2326.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i2327[i + 0]) );
  }
  i2324.states = i2326
  var i2329 = i2325[4]
  var i2328 = []
  for(var i = 0; i < i2329.length; i += 1) {
    i2328.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2329[i + 0]) );
  }
  i2324.machines = i2328
  var i2331 = i2325[5]
  var i2330 = []
  for(var i = 0; i < i2331.length; i += 1) {
    i2330.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2331[i + 0]) );
  }
  i2324.entryStateTransitions = i2330
  var i2333 = i2325[6]
  var i2332 = []
  for(var i = 0; i < i2333.length; i += 1) {
    i2332.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2333[i + 0]) );
  }
  i2324.exitStateTransitions = i2332
  var i2335 = i2325[7]
  var i2334 = []
  for(var i = 0; i < i2335.length; i += 1) {
    i2334.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2335[i + 0]) );
  }
  i2324.anyStateTransitions = i2334
  i2324.defaultStateId = i2325[8]
  return i2324
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i2338 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i2339 = data
  i2338.id = i2339[0]
  i2338.name = i2339[1]
  i2338.cycleOffset = i2339[2]
  i2338.cycleOffsetParameter = i2339[3]
  i2338.cycleOffsetParameterActive = !!i2339[4]
  i2338.mirror = !!i2339[5]
  i2338.mirrorParameter = i2339[6]
  i2338.mirrorParameterActive = !!i2339[7]
  i2338.motionId = i2339[8]
  i2338.nameHash = i2339[9]
  i2338.fullPathHash = i2339[10]
  i2338.speed = i2339[11]
  i2338.speedParameter = i2339[12]
  i2338.speedParameterActive = !!i2339[13]
  i2338.tag = i2339[14]
  i2338.tagHash = i2339[15]
  i2338.writeDefaultValues = !!i2339[16]
  var i2341 = i2339[17]
  var i2340 = []
  for(var i = 0; i < i2341.length; i += 2) {
  request.r(i2341[i + 0], i2341[i + 1], 2, i2340, '')
  }
  i2338.behaviours = i2340
  var i2343 = i2339[18]
  var i2342 = []
  for(var i = 0; i < i2343.length; i += 1) {
    i2342.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2343[i + 0]) );
  }
  i2338.transitions = i2342
  return i2338
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i2348 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i2349 = data
  i2348.fullPath = i2349[0]
  i2348.canTransitionToSelf = !!i2349[1]
  i2348.duration = i2349[2]
  i2348.exitTime = i2349[3]
  i2348.hasExitTime = !!i2349[4]
  i2348.hasFixedDuration = !!i2349[5]
  i2348.interruptionSource = i2349[6]
  i2348.offset = i2349[7]
  i2348.orderedInterruption = !!i2349[8]
  i2348.destinationStateId = i2349[9]
  i2348.isExit = !!i2349[10]
  i2348.mute = !!i2349[11]
  i2348.solo = !!i2349[12]
  var i2351 = i2349[13]
  var i2350 = []
  for(var i = 0; i < i2351.length; i += 1) {
    i2350.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2351[i + 0]) );
  }
  i2348.conditions = i2350
  return i2348
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i2356 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i2357 = data
  i2356.destinationStateId = i2357[0]
  i2356.isExit = !!i2357[1]
  i2356.mute = !!i2357[2]
  i2356.solo = !!i2357[3]
  var i2359 = i2357[4]
  var i2358 = []
  for(var i = 0; i < i2359.length; i += 1) {
    i2358.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2359[i + 0]) );
  }
  i2356.conditions = i2358
  return i2356
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i2362 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i2363 = data
  i2362.defaultBool = !!i2363[0]
  i2362.defaultFloat = i2363[1]
  i2362.defaultInt = i2363[2]
  i2362.name = i2363[3]
  i2362.nameHash = i2363[4]
  i2362.type = i2363[5]
  return i2362
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i2364 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i2365 = data
  i2364.name = i2365[0]
  i2364.bytes64 = i2365[1]
  i2364.data = i2365[2]
  return i2364
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i2366 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i2367 = data
  i2366.normalStyle = i2367[0]
  i2366.normalSpacingOffset = i2367[1]
  i2366.boldStyle = i2367[2]
  i2366.boldSpacing = i2367[3]
  i2366.italicStyle = i2367[4]
  i2366.tabSize = i2367[5]
  request.r(i2367[6], i2367[7], 0, i2366, 'atlas')
  i2366.m_SourceFontFileGUID = i2367[8]
  i2366.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i2367[9], i2366.m_CreationSettings)
  request.r(i2367[10], i2367[11], 0, i2366, 'm_SourceFontFile')
  i2366.m_SourceFontFilePath = i2367[12]
  i2366.m_AtlasPopulationMode = i2367[13]
  i2366.InternalDynamicOS = !!i2367[14]
  var i2369 = i2367[15]
  var i2368 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i2369.length; i += 1) {
    i2368.add(request.d('UnityEngine.TextCore.Glyph', i2369[i + 0]));
  }
  i2366.m_GlyphTable = i2368
  var i2371 = i2367[16]
  var i2370 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i2371.length; i += 1) {
    i2370.add(request.d('TMPro.TMP_Character', i2371[i + 0]));
  }
  i2366.m_CharacterTable = i2370
  var i2373 = i2367[17]
  var i2372 = []
  for(var i = 0; i < i2373.length; i += 2) {
  request.r(i2373[i + 0], i2373[i + 1], 2, i2372, '')
  }
  i2366.m_AtlasTextures = i2372
  i2366.m_AtlasTextureIndex = i2367[18]
  i2366.m_IsMultiAtlasTexturesEnabled = !!i2367[19]
  i2366.m_GetFontFeatures = !!i2367[20]
  i2366.m_ClearDynamicDataOnBuild = !!i2367[21]
  i2366.m_AtlasWidth = i2367[22]
  i2366.m_AtlasHeight = i2367[23]
  i2366.m_AtlasPadding = i2367[24]
  i2366.m_AtlasRenderMode = i2367[25]
  var i2375 = i2367[26]
  var i2374 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2375.length; i += 1) {
    i2374.add(request.d('UnityEngine.TextCore.GlyphRect', i2375[i + 0]));
  }
  i2366.m_UsedGlyphRects = i2374
  var i2377 = i2367[27]
  var i2376 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2377.length; i += 1) {
    i2376.add(request.d('UnityEngine.TextCore.GlyphRect', i2377[i + 0]));
  }
  i2366.m_FreeGlyphRects = i2376
  i2366.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i2367[28], i2366.m_FontFeatureTable)
  i2366.m_ShouldReimportFontFeatures = !!i2367[29]
  var i2379 = i2367[30]
  var i2378 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2379.length; i += 2) {
  request.r(i2379[i + 0], i2379[i + 1], 1, i2378, '')
  }
  i2366.m_FallbackFontAssetTable = i2378
  var i2381 = i2367[31]
  var i2380 = []
  for(var i = 0; i < i2381.length; i += 1) {
    i2380.push( request.d('TMPro.TMP_FontWeightPair', i2381[i + 0]) );
  }
  i2366.m_FontWeightTable = i2380
  var i2383 = i2367[32]
  var i2382 = []
  for(var i = 0; i < i2383.length; i += 1) {
    i2382.push( request.d('TMPro.TMP_FontWeightPair', i2383[i + 0]) );
  }
  i2366.fontWeights = i2382
  i2366.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i2367[33], i2366.m_fontInfo)
  var i2385 = i2367[34]
  var i2384 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i2385.length; i += 1) {
    i2384.add(request.d('TMPro.TMP_Glyph', i2385[i + 0]));
  }
  i2366.m_glyphInfoList = i2384
  i2366.m_KerningTable = request.d('TMPro.KerningTable', i2367[35], i2366.m_KerningTable)
  var i2387 = i2367[36]
  var i2386 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2387.length; i += 2) {
  request.r(i2387[i + 0], i2387[i + 1], 1, i2386, '')
  }
  i2366.fallbackFontAssets = i2386
  i2366.m_Version = i2367[37]
  i2366.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2367[38], i2366.m_FaceInfo)
  request.r(i2367[39], i2367[40], 0, i2366, 'm_Material')
  return i2366
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i2388 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i2389 = data
  i2388.sourceFontFileName = i2389[0]
  i2388.sourceFontFileGUID = i2389[1]
  i2388.faceIndex = i2389[2]
  i2388.pointSizeSamplingMode = i2389[3]
  i2388.pointSize = i2389[4]
  i2388.padding = i2389[5]
  i2388.paddingMode = i2389[6]
  i2388.packingMode = i2389[7]
  i2388.atlasWidth = i2389[8]
  i2388.atlasHeight = i2389[9]
  i2388.characterSetSelectionMode = i2389[10]
  i2388.characterSequence = i2389[11]
  i2388.referencedFontAssetGUID = i2389[12]
  i2388.referencedTextAssetGUID = i2389[13]
  i2388.fontStyle = i2389[14]
  i2388.fontStyleModifier = i2389[15]
  i2388.renderMode = i2389[16]
  i2388.includeFontFeatures = !!i2389[17]
  return i2388
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i2392 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i2393 = data
  i2392.m_Index = i2393[0]
  i2392.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2393[1], i2392.m_Metrics)
  i2392.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2393[2], i2392.m_GlyphRect)
  i2392.m_Scale = i2393[3]
  i2392.m_AtlasIndex = i2393[4]
  i2392.m_ClassDefinitionType = i2393[5]
  return i2392
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i2394 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i2395 = data
  i2394.m_Width = i2395[0]
  i2394.m_Height = i2395[1]
  i2394.m_HorizontalBearingX = i2395[2]
  i2394.m_HorizontalBearingY = i2395[3]
  i2394.m_HorizontalAdvance = i2395[4]
  return i2394
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i2396 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i2397 = data
  i2396.m_X = i2397[0]
  i2396.m_Y = i2397[1]
  i2396.m_Width = i2397[2]
  i2396.m_Height = i2397[3]
  return i2396
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i2400 = root || request.c( 'TMPro.TMP_Character' )
  var i2401 = data
  i2400.m_ElementType = i2401[0]
  i2400.m_Unicode = i2401[1]
  i2400.m_GlyphIndex = i2401[2]
  i2400.m_Scale = i2401[3]
  return i2400
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i2406 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i2407 = data
  var i2409 = i2407[0]
  var i2408 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i2409.length; i += 1) {
    i2408.add(request.d('TMPro.MultipleSubstitutionRecord', i2409[i + 0]));
  }
  i2406.m_MultipleSubstitutionRecords = i2408
  var i2411 = i2407[1]
  var i2410 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i2411.length; i += 1) {
    i2410.add(request.d('TMPro.LigatureSubstitutionRecord', i2411[i + 0]));
  }
  i2406.m_LigatureSubstitutionRecords = i2410
  var i2413 = i2407[2]
  var i2412 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i2413.length; i += 1) {
    i2412.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i2413[i + 0]));
  }
  i2406.m_GlyphPairAdjustmentRecords = i2412
  var i2415 = i2407[3]
  var i2414 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i2415.length; i += 1) {
    i2414.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i2415[i + 0]));
  }
  i2406.m_MarkToBaseAdjustmentRecords = i2414
  var i2417 = i2407[4]
  var i2416 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i2417.length; i += 1) {
    i2416.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i2417[i + 0]));
  }
  i2406.m_MarkToMarkAdjustmentRecords = i2416
  return i2406
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i2420 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i2421 = data
  i2420.m_TargetGlyphID = i2421[0]
  i2420.m_SubstituteGlyphIDs = i2421[1]
  return i2420
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i2424 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i2425 = data
  i2424.m_ComponentGlyphIDs = i2425[0]
  i2424.m_LigatureGlyphID = i2425[1]
  return i2424
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i2428 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i2429 = data
  i2428.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i2429[0], i2428.m_FirstAdjustmentRecord)
  i2428.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i2429[1], i2428.m_SecondAdjustmentRecord)
  i2428.m_FeatureLookupFlags = i2429[2]
  return i2428
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i2430 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i2431 = data
  i2430.m_GlyphIndex = i2431[0]
  i2430.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i2431[1], i2430.m_GlyphValueRecord)
  return i2430
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i2432 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i2433 = data
  i2432.m_XPlacement = i2433[0]
  i2432.m_YPlacement = i2433[1]
  i2432.m_XAdvance = i2433[2]
  i2432.m_YAdvance = i2433[3]
  return i2432
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i2436 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i2437 = data
  i2436.m_BaseGlyphID = i2437[0]
  i2436.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i2437[1], i2436.m_BaseGlyphAnchorPoint)
  i2436.m_MarkGlyphID = i2437[2]
  i2436.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i2437[3], i2436.m_MarkPositionAdjustment)
  return i2436
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i2440 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i2441 = data
  i2440.m_BaseMarkGlyphID = i2441[0]
  i2440.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i2441[1], i2440.m_BaseMarkGlyphAnchorPoint)
  i2440.m_CombiningMarkGlyphID = i2441[2]
  i2440.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i2441[3], i2440.m_CombiningMarkPositionAdjustment)
  return i2440
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i2446 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i2447 = data
  request.r(i2447[0], i2447[1], 0, i2446, 'regularTypeface')
  request.r(i2447[2], i2447[3], 0, i2446, 'italicTypeface')
  return i2446
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i2448 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i2449 = data
  i2448.Name = i2449[0]
  i2448.PointSize = i2449[1]
  i2448.Scale = i2449[2]
  i2448.CharacterCount = i2449[3]
  i2448.LineHeight = i2449[4]
  i2448.Baseline = i2449[5]
  i2448.Ascender = i2449[6]
  i2448.CapHeight = i2449[7]
  i2448.Descender = i2449[8]
  i2448.CenterLine = i2449[9]
  i2448.SuperscriptOffset = i2449[10]
  i2448.SubscriptOffset = i2449[11]
  i2448.SubSize = i2449[12]
  i2448.Underline = i2449[13]
  i2448.UnderlineThickness = i2449[14]
  i2448.strikethrough = i2449[15]
  i2448.strikethroughThickness = i2449[16]
  i2448.TabWidth = i2449[17]
  i2448.Padding = i2449[18]
  i2448.AtlasWidth = i2449[19]
  i2448.AtlasHeight = i2449[20]
  return i2448
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i2452 = root || request.c( 'TMPro.TMP_Glyph' )
  var i2453 = data
  i2452.id = i2453[0]
  i2452.x = i2453[1]
  i2452.y = i2453[2]
  i2452.width = i2453[3]
  i2452.height = i2453[4]
  i2452.xOffset = i2453[5]
  i2452.yOffset = i2453[6]
  i2452.xAdvance = i2453[7]
  i2452.scale = i2453[8]
  return i2452
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i2454 = root || request.c( 'TMPro.KerningTable' )
  var i2455 = data
  var i2457 = i2455[0]
  var i2456 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i2457.length; i += 1) {
    i2456.add(request.d('TMPro.KerningPair', i2457[i + 0]));
  }
  i2454.kerningPairs = i2456
  return i2454
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i2460 = root || request.c( 'TMPro.KerningPair' )
  var i2461 = data
  i2460.xOffset = i2461[0]
  i2460.m_FirstGlyph = i2461[1]
  i2460.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2461[2], i2460.m_FirstGlyphAdjustments)
  i2460.m_SecondGlyph = i2461[3]
  i2460.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2461[4], i2460.m_SecondGlyphAdjustments)
  i2460.m_IgnoreSpacingAdjustments = !!i2461[5]
  return i2460
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i2462 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i2463 = data
  i2462.m_FaceIndex = i2463[0]
  i2462.m_FamilyName = i2463[1]
  i2462.m_StyleName = i2463[2]
  i2462.m_PointSize = i2463[3]
  i2462.m_Scale = i2463[4]
  i2462.m_UnitsPerEM = i2463[5]
  i2462.m_LineHeight = i2463[6]
  i2462.m_AscentLine = i2463[7]
  i2462.m_CapLine = i2463[8]
  i2462.m_MeanLine = i2463[9]
  i2462.m_Baseline = i2463[10]
  i2462.m_DescentLine = i2463[11]
  i2462.m_SuperscriptOffset = i2463[12]
  i2462.m_SuperscriptSize = i2463[13]
  i2462.m_SubscriptOffset = i2463[14]
  i2462.m_SubscriptSize = i2463[15]
  i2462.m_UnderlineOffset = i2463[16]
  i2462.m_UnderlineThickness = i2463[17]
  i2462.m_StrikethroughOffset = i2463[18]
  i2462.m_StrikethroughThickness = i2463[19]
  i2462.m_TabWidth = i2463[20]
  return i2462
}

Deserializers["FavoritePlayerCard"] = function (request, data, root) {
  var i2464 = root || request.c( 'FavoritePlayerCard' )
  var i2465 = data
  i2464.playerName = i2465[0]
  request.r(i2465[1], i2465[2], 0, i2464, 'halfBodySprite')
  request.r(i2465[3], i2465[4], 0, i2464, 'fullBodySprite')
  request.r(i2465[5], i2465[6], 0, i2464, 'nameAudio')
  return i2464
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i2466 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i2467 = data
  i2466.useSafeMode = !!i2467[0]
  i2466.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i2467[1], i2466.safeModeOptions)
  i2466.timeScale = i2467[2]
  i2466.unscaledTimeScale = i2467[3]
  i2466.useSmoothDeltaTime = !!i2467[4]
  i2466.maxSmoothUnscaledTime = i2467[5]
  i2466.rewindCallbackMode = i2467[6]
  i2466.showUnityEditorReport = !!i2467[7]
  i2466.logBehaviour = i2467[8]
  i2466.drawGizmos = !!i2467[9]
  i2466.defaultRecyclable = !!i2467[10]
  i2466.defaultAutoPlay = i2467[11]
  i2466.defaultUpdateType = i2467[12]
  i2466.defaultTimeScaleIndependent = !!i2467[13]
  i2466.defaultEaseType = i2467[14]
  i2466.defaultEaseOvershootOrAmplitude = i2467[15]
  i2466.defaultEasePeriod = i2467[16]
  i2466.defaultAutoKill = !!i2467[17]
  i2466.defaultLoopType = i2467[18]
  i2466.debugMode = !!i2467[19]
  i2466.debugStoreTargetId = !!i2467[20]
  i2466.showPreviewPanel = !!i2467[21]
  i2466.storeSettingsLocation = i2467[22]
  i2466.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i2467[23], i2466.modules)
  i2466.createASMDEF = !!i2467[24]
  i2466.showPlayingTweens = !!i2467[25]
  i2466.showPausedTweens = !!i2467[26]
  return i2466
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i2468 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i2469 = data
  i2468.logBehaviour = i2469[0]
  i2468.nestedTweenFailureBehaviour = i2469[1]
  return i2468
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i2470 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i2471 = data
  i2470.showPanel = !!i2471[0]
  i2470.audioEnabled = !!i2471[1]
  i2470.physicsEnabled = !!i2471[2]
  i2470.physics2DEnabled = !!i2471[3]
  i2470.spriteEnabled = !!i2471[4]
  i2470.uiEnabled = !!i2471[5]
  i2470.uiToolkitEnabled = !!i2471[6]
  i2470.textMeshProEnabled = !!i2471[7]
  i2470.tk2DEnabled = !!i2471[8]
  i2470.deAudioEnabled = !!i2471[9]
  i2470.deUnityExtendedEnabled = !!i2471[10]
  i2470.epoOutlineEnabled = !!i2471[11]
  return i2470
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i2472 = root || request.c( 'TMPro.TMP_Settings' )
  var i2473 = data
  i2472.assetVersion = i2473[0]
  i2472.m_TextWrappingMode = i2473[1]
  i2472.m_enableKerning = !!i2473[2]
  var i2475 = i2473[3]
  var i2474 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i2475.length; i += 1) {
    i2474.add(i2475[i + 0]);
  }
  i2472.m_ActiveFontFeatures = i2474
  i2472.m_enableExtraPadding = !!i2473[4]
  i2472.m_enableTintAllSprites = !!i2473[5]
  i2472.m_enableParseEscapeCharacters = !!i2473[6]
  i2472.m_EnableRaycastTarget = !!i2473[7]
  i2472.m_GetFontFeaturesAtRuntime = !!i2473[8]
  i2472.m_missingGlyphCharacter = i2473[9]
  i2472.m_ClearDynamicDataOnBuild = !!i2473[10]
  i2472.m_warningsDisabled = !!i2473[11]
  request.r(i2473[12], i2473[13], 0, i2472, 'm_defaultFontAsset')
  i2472.m_defaultFontAssetPath = i2473[14]
  i2472.m_defaultFontSize = i2473[15]
  i2472.m_defaultAutoSizeMinRatio = i2473[16]
  i2472.m_defaultAutoSizeMaxRatio = i2473[17]
  i2472.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i2473[18], i2473[19] )
  i2472.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i2473[20], i2473[21] )
  i2472.m_autoSizeTextContainer = !!i2473[22]
  i2472.m_IsTextObjectScaleStatic = !!i2473[23]
  var i2477 = i2473[24]
  var i2476 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2477.length; i += 2) {
  request.r(i2477[i + 0], i2477[i + 1], 1, i2476, '')
  }
  i2472.m_fallbackFontAssets = i2476
  i2472.m_matchMaterialPreset = !!i2473[25]
  i2472.m_HideSubTextObjects = !!i2473[26]
  request.r(i2473[27], i2473[28], 0, i2472, 'm_defaultSpriteAsset')
  i2472.m_defaultSpriteAssetPath = i2473[29]
  i2472.m_enableEmojiSupport = !!i2473[30]
  i2472.m_MissingCharacterSpriteUnicode = i2473[31]
  var i2479 = i2473[32]
  var i2478 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i2479.length; i += 2) {
  request.r(i2479[i + 0], i2479[i + 1], 1, i2478, '')
  }
  i2472.m_EmojiFallbackTextAssets = i2478
  i2472.m_defaultColorGradientPresetsPath = i2473[33]
  request.r(i2473[34], i2473[35], 0, i2472, 'm_defaultStyleSheet')
  i2472.m_StyleSheetsResourcePath = i2473[36]
  request.r(i2473[37], i2473[38], 0, i2472, 'm_leadingCharacters')
  request.r(i2473[39], i2473[40], 0, i2472, 'm_followingCharacters')
  i2472.m_UseModernHangulLineBreakingRules = !!i2473[41]
  return i2472
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i2482 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i2483 = data
  request.r(i2483[0], i2483[1], 0, i2482, 'spriteSheet')
  var i2485 = i2483[2]
  var i2484 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i2485.length; i += 1) {
    i2484.add(request.d('TMPro.TMP_Sprite', i2485[i + 0]));
  }
  i2482.spriteInfoList = i2484
  var i2487 = i2483[3]
  var i2486 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i2487.length; i += 2) {
  request.r(i2487[i + 0], i2487[i + 1], 1, i2486, '')
  }
  i2482.fallbackSpriteAssets = i2486
  var i2489 = i2483[4]
  var i2488 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i2489.length; i += 1) {
    i2488.add(request.d('TMPro.TMP_SpriteCharacter', i2489[i + 0]));
  }
  i2482.m_SpriteCharacterTable = i2488
  var i2491 = i2483[5]
  var i2490 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i2491.length; i += 1) {
    i2490.add(request.d('TMPro.TMP_SpriteGlyph', i2491[i + 0]));
  }
  i2482.m_GlyphTable = i2490
  i2482.m_Version = i2483[6]
  i2482.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2483[7], i2482.m_FaceInfo)
  request.r(i2483[8], i2483[9], 0, i2482, 'm_Material')
  return i2482
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i2494 = root || request.c( 'TMPro.TMP_Sprite' )
  var i2495 = data
  i2494.name = i2495[0]
  i2494.hashCode = i2495[1]
  i2494.unicode = i2495[2]
  i2494.pivot = new pc.Vec2( i2495[3], i2495[4] )
  request.r(i2495[5], i2495[6], 0, i2494, 'sprite')
  i2494.id = i2495[7]
  i2494.x = i2495[8]
  i2494.y = i2495[9]
  i2494.width = i2495[10]
  i2494.height = i2495[11]
  i2494.xOffset = i2495[12]
  i2494.yOffset = i2495[13]
  i2494.xAdvance = i2495[14]
  i2494.scale = i2495[15]
  return i2494
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i2500 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i2501 = data
  i2500.m_Name = i2501[0]
  i2500.m_ElementType = i2501[1]
  i2500.m_Unicode = i2501[2]
  i2500.m_GlyphIndex = i2501[3]
  i2500.m_Scale = i2501[4]
  return i2500
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i2504 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i2505 = data
  request.r(i2505[0], i2505[1], 0, i2504, 'sprite')
  i2504.m_Index = i2505[2]
  i2504.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2505[3], i2504.m_Metrics)
  i2504.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2505[4], i2504.m_GlyphRect)
  i2504.m_Scale = i2505[5]
  i2504.m_AtlasIndex = i2505[6]
  i2504.m_ClassDefinitionType = i2505[7]
  return i2504
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i2506 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i2507 = data
  var i2509 = i2507[0]
  var i2508 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i2509.length; i += 1) {
    i2508.add(request.d('TMPro.TMP_Style', i2509[i + 0]));
  }
  i2506.m_StyleList = i2508
  return i2506
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i2512 = root || request.c( 'TMPro.TMP_Style' )
  var i2513 = data
  i2512.m_Name = i2513[0]
  i2512.m_HashCode = i2513[1]
  i2512.m_OpeningDefinition = i2513[2]
  i2512.m_ClosingDefinition = i2513[3]
  i2512.m_OpeningTagArray = i2513[4]
  i2512.m_ClosingTagArray = i2513[5]
  return i2512
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i2514 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i2515 = data
  var i2517 = i2515[0]
  var i2516 = []
  for(var i = 0; i < i2517.length; i += 1) {
    i2516.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i2517[i + 0]) );
  }
  i2514.files = i2516
  i2514.componentToPrefabIds = i2515[1]
  return i2514
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i2520 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i2521 = data
  i2520.path = i2521[0]
  request.r(i2521[1], i2521[2], 0, i2520, 'unityObject')
  return i2520
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i2522 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i2523 = data
  var i2525 = i2523[0]
  var i2524 = []
  for(var i = 0; i < i2525.length; i += 1) {
    i2524.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i2525[i + 0]) );
  }
  i2522.scriptsExecutionOrder = i2524
  var i2527 = i2523[1]
  var i2526 = []
  for(var i = 0; i < i2527.length; i += 1) {
    i2526.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i2527[i + 0]) );
  }
  i2522.sortingLayers = i2526
  var i2529 = i2523[2]
  var i2528 = []
  for(var i = 0; i < i2529.length; i += 1) {
    i2528.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i2529[i + 0]) );
  }
  i2522.cullingLayers = i2528
  i2522.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i2523[3], i2522.timeSettings)
  i2522.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i2523[4], i2522.physicsSettings)
  i2522.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i2523[5], i2522.physics2DSettings)
  i2522.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2523[6], i2522.qualitySettings)
  i2522.enableRealtimeShadows = !!i2523[7]
  i2522.enableAutoInstancing = !!i2523[8]
  i2522.enableStaticBatching = !!i2523[9]
  i2522.enableDynamicBatching = !!i2523[10]
  i2522.lightmapEncodingQuality = i2523[11]
  i2522.desiredColorSpace = i2523[12]
  var i2531 = i2523[13]
  var i2530 = []
  for(var i = 0; i < i2531.length; i += 1) {
    i2530.push( i2531[i + 0] );
  }
  i2522.allTags = i2530
  return i2522
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i2534 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i2535 = data
  i2534.name = i2535[0]
  i2534.value = i2535[1]
  return i2534
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i2538 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i2539 = data
  i2538.id = i2539[0]
  i2538.name = i2539[1]
  i2538.value = i2539[2]
  return i2538
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i2542 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i2543 = data
  i2542.id = i2543[0]
  i2542.name = i2543[1]
  return i2542
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i2544 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i2545 = data
  i2544.fixedDeltaTime = i2545[0]
  i2544.maximumDeltaTime = i2545[1]
  i2544.timeScale = i2545[2]
  i2544.maximumParticleTimestep = i2545[3]
  return i2544
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i2546 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i2547 = data
  i2546.gravity = new pc.Vec3( i2547[0], i2547[1], i2547[2] )
  i2546.defaultSolverIterations = i2547[3]
  i2546.bounceThreshold = i2547[4]
  i2546.autoSyncTransforms = !!i2547[5]
  i2546.autoSimulation = !!i2547[6]
  var i2549 = i2547[7]
  var i2548 = []
  for(var i = 0; i < i2549.length; i += 1) {
    i2548.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i2549[i + 0]) );
  }
  i2546.collisionMatrix = i2548
  return i2546
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i2552 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i2553 = data
  i2552.enabled = !!i2553[0]
  i2552.layerId = i2553[1]
  i2552.otherLayerId = i2553[2]
  return i2552
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i2554 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i2555 = data
  request.r(i2555[0], i2555[1], 0, i2554, 'material')
  i2554.gravity = new pc.Vec2( i2555[2], i2555[3] )
  i2554.positionIterations = i2555[4]
  i2554.velocityIterations = i2555[5]
  i2554.velocityThreshold = i2555[6]
  i2554.maxLinearCorrection = i2555[7]
  i2554.maxAngularCorrection = i2555[8]
  i2554.maxTranslationSpeed = i2555[9]
  i2554.maxRotationSpeed = i2555[10]
  i2554.baumgarteScale = i2555[11]
  i2554.baumgarteTOIScale = i2555[12]
  i2554.timeToSleep = i2555[13]
  i2554.linearSleepTolerance = i2555[14]
  i2554.angularSleepTolerance = i2555[15]
  i2554.defaultContactOffset = i2555[16]
  i2554.autoSimulation = !!i2555[17]
  i2554.queriesHitTriggers = !!i2555[18]
  i2554.queriesStartInColliders = !!i2555[19]
  i2554.callbacksOnDisable = !!i2555[20]
  i2554.reuseCollisionCallbacks = !!i2555[21]
  i2554.autoSyncTransforms = !!i2555[22]
  var i2557 = i2555[23]
  var i2556 = []
  for(var i = 0; i < i2557.length; i += 1) {
    i2556.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i2557[i + 0]) );
  }
  i2554.collisionMatrix = i2556
  return i2554
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i2560 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i2561 = data
  i2560.enabled = !!i2561[0]
  i2560.layerId = i2561[1]
  i2560.otherLayerId = i2561[2]
  return i2560
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i2562 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i2563 = data
  var i2565 = i2563[0]
  var i2564 = []
  for(var i = 0; i < i2565.length; i += 1) {
    i2564.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2565[i + 0]) );
  }
  i2562.qualityLevels = i2564
  var i2567 = i2563[1]
  var i2566 = []
  for(var i = 0; i < i2567.length; i += 1) {
    i2566.push( i2567[i + 0] );
  }
  i2562.names = i2566
  i2562.shadows = i2563[2]
  i2562.anisotropicFiltering = i2563[3]
  i2562.antiAliasing = i2563[4]
  i2562.lodBias = i2563[5]
  i2562.shadowCascades = i2563[6]
  i2562.shadowDistance = i2563[7]
  i2562.shadowmaskMode = i2563[8]
  i2562.shadowProjection = i2563[9]
  i2562.shadowResolution = i2563[10]
  i2562.softParticles = !!i2563[11]
  i2562.softVegetation = !!i2563[12]
  i2562.activeColorSpace = i2563[13]
  i2562.desiredColorSpace = i2563[14]
  i2562.masterTextureLimit = i2563[15]
  i2562.maxQueuedFrames = i2563[16]
  i2562.particleRaycastBudget = i2563[17]
  i2562.pixelLightCount = i2563[18]
  i2562.realtimeReflectionProbes = !!i2563[19]
  i2562.shadowCascade2Split = i2563[20]
  i2562.shadowCascade4Split = new pc.Vec3( i2563[21], i2563[22], i2563[23] )
  i2562.streamingMipmapsActive = !!i2563[24]
  i2562.vSyncCount = i2563[25]
  i2562.asyncUploadBufferSize = i2563[26]
  i2562.asyncUploadTimeSlice = i2563[27]
  i2562.billboardsFaceCameraPosition = !!i2563[28]
  i2562.shadowNearPlaneOffset = i2563[29]
  i2562.streamingMipmapsMemoryBudget = i2563[30]
  i2562.maximumLODLevel = i2563[31]
  i2562.streamingMipmapsAddAllCameras = !!i2563[32]
  i2562.streamingMipmapsMaxLevelReduction = i2563[33]
  i2562.streamingMipmapsRenderersPerFrame = i2563[34]
  i2562.resolutionScalingFixedDPIFactor = i2563[35]
  i2562.streamingMipmapsMaxFileIORequests = i2563[36]
  i2562.currentQualityLevel = i2563[37]
  return i2562
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i2572 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i2573 = data
  i2572.weight = i2573[0]
  i2572.vertices = i2573[1]
  i2572.normals = i2573[2]
  i2572.tangents = i2573[3]
  return i2572
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i2576 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i2577 = data
  i2576.mode = i2577[0]
  i2576.parameter = i2577[1]
  i2576.threshold = i2577[2]
  return i2576
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i2578 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i2579 = data
  i2578.m_XCoordinate = i2579[0]
  i2578.m_YCoordinate = i2579[1]
  return i2578
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i2580 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i2581 = data
  i2580.m_XPositionAdjustment = i2581[0]
  i2580.m_YPositionAdjustment = i2581[1]
  return i2580
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i2582 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i2583 = data
  i2582.xPlacement = i2583[0]
  i2582.yPlacement = i2583[1]
  i2582.xAdvance = i2583[2]
  i2582.yAdvance = i2583[3]
  return i2582
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2}}

Deserializers.requiredComponents = {"50":[51],"52":[51],"53":[51],"54":[51],"55":[51],"56":[51],"57":[58],"59":[2],"60":[61],"62":[61],"63":[61],"64":[61],"65":[61],"66":[61],"67":[68],"69":[68],"70":[68],"71":[68],"72":[68],"73":[68],"74":[68],"75":[68],"76":[68],"77":[68],"78":[68],"79":[68],"80":[68],"81":[2],"82":[26],"83":[84],"85":[84],"36":[25],"6":[2],"21":[86],"87":[68],"88":[89],"34":[86],"90":[14],"91":[2],"92":[93],"94":[42],"95":[36],"96":[25],"23":[26,25],"40":[25,39],"97":[25],"98":[39,25],"99":[26],"100":[39,25],"101":[25],"102":[103],"104":[103],"105":[103],"106":[25],"107":[25],"38":[36],"41":[39,25],"108":[25],"37":[36],"109":[25],"110":[25],"111":[25],"112":[25],"113":[25],"114":[25],"115":[25],"116":[25],"117":[25],"118":[39,25],"119":[25],"120":[25],"121":[25],"122":[25],"123":[39,25],"124":[25],"125":[42],"126":[42],"43":[42],"127":[42],"128":[2],"129":[2]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.MonoBehaviour","CameraFollow2D","AutoCameraFit","UnityEngine.Transform","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Mesh","UnityEngine.Material","UnityEngine.AudioSource","UnityEngine.AudioClip","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","MoveBetweenPoints","ScreenHeightPositionAnchor","UnityEngine.BoxCollider","ClickToStore","FavoritePlayerEndcard","TMPro.TextMeshPro","UnityEngine.GameObject","UnityEngine.RectTransform","UnityEngine.MeshRenderer","UnityEngine.EventSystems.UIBehaviour","TMPro.TMP_FontAsset","UnityEngine.MeshFilter","SpriteSizeAdapter","PlayerCardUIManager","Ply_SoundManager","FavoritePlayerManager","PlayerSlot","FavoritePlayerCard","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","TMPro.TextMeshProUGUI","UnityEngine.UI.Image","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.Font","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.Collider","BatStrikeController","SlotTrigger","UnityEngine.BoxCollider2D","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.InputSystem.UI.InputSystemUIInputModule","UnityEngine.InputSystem.UI.TrackedDeviceRaycaster","TMPro.TextContainer","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.38f1";

Deserializers.productName = "PLY_MiniSoccer";

Deserializers.lunaInitializationTime = "07/15/2026 03:53:54";

Deserializers.lunaDaysRunning = "36.2";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1732";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4769";

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

Deserializers.buildID = "01e57902-c7c9-477f-806b-3344c0c5168c";

Deserializers.runtimeInitializeOnLoadInfos = [[["Unity","Services","Core","Internal","UnityServicesInitializer","EnableServicesInitializationAsync"],["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["DG","Tweening","DOTween","RuntimeOnLoad"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["Unity","Services","Core","Registration","CorePackageInitializer","InitializeOnLoad"],["Unity","Services","Core","Internal","TaskAsyncOperation","SetScheduler"],["Unity","Services","Core","Environments","Client","Scheduler","EngineStateHelper","Init"],["Unity","Services","Core","Environments","Client","Scheduler","ThreadHelper","Init"],["Ua2CoreInitializeCallback","Register"],["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["Unity","AI","Navigation","NavMeshLink","ClearTrackedList"],["Unity","AI","Navigation","NavMeshSurface","ClearNavMeshSurfaces"],["Unity","AI","Navigation","NavMeshModifierVolume","ClearNavMeshModifiers"],["Unity","AI","Navigation","NavMeshModifier","ClearNavMeshModifiers"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["Unity","Services","Core","Internal","UnityServicesInitializer","CreateStaticInstance"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[["Unity","Services","Core","Environments","Client","Http","JsonHelpers","RegisterTypesForAOT"]],[["Unity","Services","Core","UnityThreadUtils","CaptureUnityThreadInfo"],["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

