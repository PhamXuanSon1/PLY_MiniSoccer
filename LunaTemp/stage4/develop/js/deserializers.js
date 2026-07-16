var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i1950 = root || request.c( 'UnityEngine.JointSpring' )
  var i1951 = data
  i1950.spring = i1951[0]
  i1950.damper = i1951[1]
  i1950.targetPosition = i1951[2]
  return i1950
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i1952 = root || request.c( 'UnityEngine.JointMotor' )
  var i1953 = data
  i1952.m_TargetVelocity = i1953[0]
  i1952.m_Force = i1953[1]
  i1952.m_FreeSpin = i1953[2]
  return i1952
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i1954 = root || request.c( 'UnityEngine.JointLimits' )
  var i1955 = data
  i1954.m_Min = i1955[0]
  i1954.m_Max = i1955[1]
  i1954.m_Bounciness = i1955[2]
  i1954.m_BounceMinVelocity = i1955[3]
  i1954.m_ContactDistance = i1955[4]
  i1954.minBounce = i1955[5]
  i1954.maxBounce = i1955[6]
  return i1954
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i1956 = root || request.c( 'UnityEngine.JointDrive' )
  var i1957 = data
  i1956.m_PositionSpring = i1957[0]
  i1956.m_PositionDamper = i1957[1]
  i1956.m_MaximumForce = i1957[2]
  i1956.m_UseAcceleration = i1957[3]
  return i1956
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i1958 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i1959 = data
  i1958.m_Spring = i1959[0]
  i1958.m_Damper = i1959[1]
  return i1958
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i1960 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i1961 = data
  i1960.m_Limit = i1961[0]
  i1960.m_Bounciness = i1961[1]
  i1960.m_ContactDistance = i1961[2]
  return i1960
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i1962 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i1963 = data
  i1962.m_ExtremumSlip = i1963[0]
  i1962.m_ExtremumValue = i1963[1]
  i1962.m_AsymptoteSlip = i1963[2]
  i1962.m_AsymptoteValue = i1963[3]
  i1962.m_Stiffness = i1963[4]
  return i1962
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i1964 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i1965 = data
  i1964.m_LowerAngle = i1965[0]
  i1964.m_UpperAngle = i1965[1]
  return i1964
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i1966 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i1967 = data
  i1966.m_MotorSpeed = i1967[0]
  i1966.m_MaximumMotorTorque = i1967[1]
  return i1966
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i1968 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i1969 = data
  i1968.m_DampingRatio = i1969[0]
  i1968.m_Frequency = i1969[1]
  i1968.m_Angle = i1969[2]
  return i1968
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i1970 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i1971 = data
  i1970.m_LowerTranslation = i1971[0]
  i1970.m_UpperTranslation = i1971[1]
  return i1970
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i1972 = root || new pc.UnityMaterial()
  var i1973 = data
  i1972.name = i1973[0]
  request.r(i1973[1], i1973[2], 0, i1972, 'shader')
  i1972.renderQueue = i1973[3]
  i1972.enableInstancing = !!i1973[4]
  var i1975 = i1973[5]
  var i1974 = []
  for(var i = 0; i < i1975.length; i += 1) {
    i1974.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i1975[i + 0]) );
  }
  i1972.floatParameters = i1974
  var i1977 = i1973[6]
  var i1976 = []
  for(var i = 0; i < i1977.length; i += 1) {
    i1976.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i1977[i + 0]) );
  }
  i1972.colorParameters = i1976
  var i1979 = i1973[7]
  var i1978 = []
  for(var i = 0; i < i1979.length; i += 1) {
    i1978.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i1979[i + 0]) );
  }
  i1972.vectorParameters = i1978
  var i1981 = i1973[8]
  var i1980 = []
  for(var i = 0; i < i1981.length; i += 1) {
    i1980.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i1981[i + 0]) );
  }
  i1972.textureParameters = i1980
  var i1983 = i1973[9]
  var i1982 = []
  for(var i = 0; i < i1983.length; i += 1) {
    i1982.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i1983[i + 0]) );
  }
  i1972.materialFlags = i1982
  return i1972
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i1986 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i1987 = data
  i1986.name = i1987[0]
  i1986.value = i1987[1]
  return i1986
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i1990 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i1991 = data
  i1990.name = i1991[0]
  i1990.value = new pc.Color(i1991[1], i1991[2], i1991[3], i1991[4])
  return i1990
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i1994 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i1995 = data
  i1994.name = i1995[0]
  i1994.value = new pc.Vec4( i1995[1], i1995[2], i1995[3], i1995[4] )
  return i1994
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i1998 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i1999 = data
  i1998.name = i1999[0]
  request.r(i1999[1], i1999[2], 0, i1998, 'value')
  return i1998
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i2002 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i2003 = data
  i2002.name = i2003[0]
  i2002.enabled = !!i2003[1]
  return i2002
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i2004 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i2005 = data
  i2004.name = i2005[0]
  i2004.width = i2005[1]
  i2004.height = i2005[2]
  i2004.mipmapCount = i2005[3]
  i2004.anisoLevel = i2005[4]
  i2004.filterMode = i2005[5]
  i2004.hdr = !!i2005[6]
  i2004.format = i2005[7]
  i2004.wrapMode = i2005[8]
  i2004.alphaIsTransparency = !!i2005[9]
  i2004.alphaSource = i2005[10]
  i2004.graphicsFormat = i2005[11]
  i2004.sRGBTexture = !!i2005[12]
  i2004.desiredColorSpace = i2005[13]
  i2004.wrapU = i2005[14]
  i2004.wrapV = i2005[15]
  return i2004
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i2006 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i2007 = data
  i2006.name = i2007[0]
  i2006.halfPrecision = !!i2007[1]
  i2006.useSimplification = !!i2007[2]
  i2006.useUInt32IndexFormat = !!i2007[3]
  i2006.vertexCount = i2007[4]
  i2006.aabb = i2007[5]
  var i2009 = i2007[6]
  var i2008 = []
  for(var i = 0; i < i2009.length; i += 1) {
    i2008.push( !!i2009[i + 0] );
  }
  i2006.streams = i2008
  i2006.vertices = i2007[7]
  var i2011 = i2007[8]
  var i2010 = []
  for(var i = 0; i < i2011.length; i += 1) {
    i2010.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i2011[i + 0]) );
  }
  i2006.subMeshes = i2010
  var i2013 = i2007[9]
  var i2012 = []
  for(var i = 0; i < i2013.length; i += 16) {
    i2012.push( new pc.Mat4().setData(i2013[i + 0], i2013[i + 1], i2013[i + 2], i2013[i + 3],  i2013[i + 4], i2013[i + 5], i2013[i + 6], i2013[i + 7],  i2013[i + 8], i2013[i + 9], i2013[i + 10], i2013[i + 11],  i2013[i + 12], i2013[i + 13], i2013[i + 14], i2013[i + 15]) );
  }
  i2006.bindposes = i2012
  var i2015 = i2007[10]
  var i2014 = []
  for(var i = 0; i < i2015.length; i += 1) {
    i2014.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i2015[i + 0]) );
  }
  i2006.blendShapes = i2014
  return i2006
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i2020 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i2021 = data
  i2020.triangles = i2021[0]
  return i2020
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i2026 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i2027 = data
  i2026.name = i2027[0]
  var i2029 = i2027[1]
  var i2028 = []
  for(var i = 0; i < i2029.length; i += 1) {
    i2028.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i2029[i + 0]) );
  }
  i2026.frames = i2028
  return i2026
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i2030 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i2031 = data
  i2030.name = i2031[0]
  i2030.index = i2031[1]
  i2030.startup = !!i2031[2]
  return i2030
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i2032 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i2033 = data
  i2032.aspect = i2033[0]
  i2032.orthographic = !!i2033[1]
  i2032.orthographicSize = i2033[2]
  i2032.backgroundColor = new pc.Color(i2033[3], i2033[4], i2033[5], i2033[6])
  i2032.nearClipPlane = i2033[7]
  i2032.farClipPlane = i2033[8]
  i2032.fieldOfView = i2033[9]
  i2032.depth = i2033[10]
  i2032.clearFlags = i2033[11]
  i2032.cullingMask = i2033[12]
  i2032.rect = i2033[13]
  request.r(i2033[14], i2033[15], 0, i2032, 'targetTexture')
  i2032.usePhysicalProperties = !!i2033[16]
  i2032.focalLength = i2033[17]
  i2032.sensorSize = new pc.Vec2( i2033[18], i2033[19] )
  i2032.lensShift = new pc.Vec2( i2033[20], i2033[21] )
  i2032.gateFit = i2033[22]
  i2032.commandBufferCount = i2033[23]
  i2032.cameraType = i2033[24]
  i2032.enabled = !!i2033[25]
  return i2032
}

Deserializers["CameraFollow2D"] = function (request, data, root) {
  var i2034 = root || request.c( 'CameraFollow2D' )
  var i2035 = data
  request.r(i2035[0], i2035[1], 0, i2034, 'target')
  i2034.smoothSpeed = i2035[2]
  i2034.offset = new pc.Vec3( i2035[3], i2035[4], i2035[5] )
  i2034.followY = !!i2035[6]
  return i2034
}

Deserializers["AutoCameraFit"] = function (request, data, root) {
  var i2036 = root || request.c( 'AutoCameraFit' )
  var i2037 = data
  request.r(i2037[0], i2037[1], 0, i2036, 'tallScreenObject')
  i2036.tallScreenRatioThreshold = i2037[2]
  i2036.tallScreenYOffset = i2037[3]
  request.r(i2037[4], i2037[5], 0, i2036, 'canvasBtn')
  request.r(i2037[6], i2037[7], 0, i2036, 'targetArea')
  i2036.paddingLandscape = i2037[8]
  i2036.paddingPortrait = i2037[9]
  i2036.extraPaddingSmallScreen = i2037[10]
  i2036.smallScreenThreshold = i2037[11]
  i2036.autoUpdateOnResize = !!i2037[12]
  i2036.adjustInEditMode = !!i2037[13]
  return i2036
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i2038 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i2039 = data
  i2038.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i2039[0], i2038.main)
  i2038.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i2039[1], i2038.colorBySpeed)
  i2038.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i2039[2], i2038.colorOverLifetime)
  i2038.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i2039[3], i2038.emission)
  i2038.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i2039[4], i2038.rotationBySpeed)
  i2038.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i2039[5], i2038.rotationOverLifetime)
  i2038.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i2039[6], i2038.shape)
  i2038.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i2039[7], i2038.sizeBySpeed)
  i2038.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i2039[8], i2038.sizeOverLifetime)
  i2038.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i2039[9], i2038.textureSheetAnimation)
  i2038.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i2039[10], i2038.velocityOverLifetime)
  i2038.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i2039[11], i2038.noise)
  i2038.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i2039[12], i2038.inheritVelocity)
  i2038.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i2039[13], i2038.forceOverLifetime)
  i2038.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i2039[14], i2038.limitVelocityOverLifetime)
  i2038.useAutoRandomSeed = !!i2039[15]
  i2038.randomSeed = i2039[16]
  return i2038
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i2040 = root || new pc.ParticleSystemMain()
  var i2041 = data
  i2040.duration = i2041[0]
  i2040.loop = !!i2041[1]
  i2040.prewarm = !!i2041[2]
  i2040.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2041[3], i2040.startDelay)
  i2040.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2041[4], i2040.startLifetime)
  i2040.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2041[5], i2040.startSpeed)
  i2040.startSize3D = !!i2041[6]
  i2040.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2041[7], i2040.startSizeX)
  i2040.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2041[8], i2040.startSizeY)
  i2040.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2041[9], i2040.startSizeZ)
  i2040.startRotation3D = !!i2041[10]
  i2040.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2041[11], i2040.startRotationX)
  i2040.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2041[12], i2040.startRotationY)
  i2040.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2041[13], i2040.startRotationZ)
  i2040.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2041[14], i2040.startColor)
  i2040.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2041[15], i2040.gravityModifier)
  i2040.simulationSpace = i2041[16]
  request.r(i2041[17], i2041[18], 0, i2040, 'customSimulationSpace')
  i2040.simulationSpeed = i2041[19]
  i2040.useUnscaledTime = !!i2041[20]
  i2040.scalingMode = i2041[21]
  i2040.playOnAwake = !!i2041[22]
  i2040.maxParticles = i2041[23]
  i2040.emitterVelocityMode = i2041[24]
  i2040.stopAction = i2041[25]
  return i2040
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i2042 = root || new pc.MinMaxCurve()
  var i2043 = data
  i2042.mode = i2043[0]
  i2042.curveMin = new pc.AnimationCurve( { keys_flow: i2043[1] } )
  i2042.curveMax = new pc.AnimationCurve( { keys_flow: i2043[2] } )
  i2042.curveMultiplier = i2043[3]
  i2042.constantMin = i2043[4]
  i2042.constantMax = i2043[5]
  return i2042
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i2044 = root || new pc.MinMaxGradient()
  var i2045 = data
  i2044.mode = i2045[0]
  i2044.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2045[1], i2044.gradientMin)
  i2044.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2045[2], i2044.gradientMax)
  i2044.colorMin = new pc.Color(i2045[3], i2045[4], i2045[5], i2045[6])
  i2044.colorMax = new pc.Color(i2045[7], i2045[8], i2045[9], i2045[10])
  return i2044
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i2046 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i2047 = data
  i2046.mode = i2047[0]
  var i2049 = i2047[1]
  var i2048 = []
  for(var i = 0; i < i2049.length; i += 1) {
    i2048.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i2049[i + 0]) );
  }
  i2046.colorKeys = i2048
  var i2051 = i2047[2]
  var i2050 = []
  for(var i = 0; i < i2051.length; i += 1) {
    i2050.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i2051[i + 0]) );
  }
  i2046.alphaKeys = i2050
  return i2046
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i2052 = root || new pc.ParticleSystemColorBySpeed()
  var i2053 = data
  i2052.enabled = !!i2053[0]
  i2052.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2053[1], i2052.color)
  i2052.range = new pc.Vec2( i2053[2], i2053[3] )
  return i2052
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i2056 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i2057 = data
  i2056.color = new pc.Color(i2057[0], i2057[1], i2057[2], i2057[3])
  i2056.time = i2057[4]
  return i2056
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i2060 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i2061 = data
  i2060.alpha = i2061[0]
  i2060.time = i2061[1]
  return i2060
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i2062 = root || new pc.ParticleSystemColorOverLifetime()
  var i2063 = data
  i2062.enabled = !!i2063[0]
  i2062.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2063[1], i2062.color)
  return i2062
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i2064 = root || new pc.ParticleSystemEmitter()
  var i2065 = data
  i2064.enabled = !!i2065[0]
  i2064.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2065[1], i2064.rateOverTime)
  i2064.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2065[2], i2064.rateOverDistance)
  var i2067 = i2065[3]
  var i2066 = []
  for(var i = 0; i < i2067.length; i += 1) {
    i2066.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i2067[i + 0]) );
  }
  i2064.bursts = i2066
  return i2064
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i2070 = root || new pc.ParticleSystemBurst()
  var i2071 = data
  i2070.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2071[0], i2070.count)
  i2070.cycleCount = i2071[1]
  i2070.minCount = i2071[2]
  i2070.maxCount = i2071[3]
  i2070.repeatInterval = i2071[4]
  i2070.time = i2071[5]
  return i2070
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i2072 = root || new pc.ParticleSystemRotationBySpeed()
  var i2073 = data
  i2072.enabled = !!i2073[0]
  i2072.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2073[1], i2072.x)
  i2072.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2073[2], i2072.y)
  i2072.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2073[3], i2072.z)
  i2072.separateAxes = !!i2073[4]
  i2072.range = new pc.Vec2( i2073[5], i2073[6] )
  return i2072
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i2074 = root || new pc.ParticleSystemRotationOverLifetime()
  var i2075 = data
  i2074.enabled = !!i2075[0]
  i2074.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2075[1], i2074.x)
  i2074.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2075[2], i2074.y)
  i2074.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2075[3], i2074.z)
  i2074.separateAxes = !!i2075[4]
  return i2074
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i2076 = root || new pc.ParticleSystemShape()
  var i2077 = data
  i2076.enabled = !!i2077[0]
  i2076.shapeType = i2077[1]
  i2076.randomDirectionAmount = i2077[2]
  i2076.sphericalDirectionAmount = i2077[3]
  i2076.randomPositionAmount = i2077[4]
  i2076.alignToDirection = !!i2077[5]
  i2076.radius = i2077[6]
  i2076.radiusMode = i2077[7]
  i2076.radiusSpread = i2077[8]
  i2076.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2077[9], i2076.radiusSpeed)
  i2076.radiusThickness = i2077[10]
  i2076.angle = i2077[11]
  i2076.length = i2077[12]
  i2076.boxThickness = new pc.Vec3( i2077[13], i2077[14], i2077[15] )
  i2076.meshShapeType = i2077[16]
  request.r(i2077[17], i2077[18], 0, i2076, 'mesh')
  request.r(i2077[19], i2077[20], 0, i2076, 'meshRenderer')
  request.r(i2077[21], i2077[22], 0, i2076, 'skinnedMeshRenderer')
  i2076.useMeshMaterialIndex = !!i2077[23]
  i2076.meshMaterialIndex = i2077[24]
  i2076.useMeshColors = !!i2077[25]
  i2076.normalOffset = i2077[26]
  i2076.arc = i2077[27]
  i2076.arcMode = i2077[28]
  i2076.arcSpread = i2077[29]
  i2076.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2077[30], i2076.arcSpeed)
  i2076.donutRadius = i2077[31]
  i2076.position = new pc.Vec3( i2077[32], i2077[33], i2077[34] )
  i2076.rotation = new pc.Vec3( i2077[35], i2077[36], i2077[37] )
  i2076.scale = new pc.Vec3( i2077[38], i2077[39], i2077[40] )
  return i2076
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i2078 = root || new pc.ParticleSystemSizeBySpeed()
  var i2079 = data
  i2078.enabled = !!i2079[0]
  i2078.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2079[1], i2078.x)
  i2078.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2079[2], i2078.y)
  i2078.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2079[3], i2078.z)
  i2078.separateAxes = !!i2079[4]
  i2078.range = new pc.Vec2( i2079[5], i2079[6] )
  return i2078
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i2080 = root || new pc.ParticleSystemSizeOverLifetime()
  var i2081 = data
  i2080.enabled = !!i2081[0]
  i2080.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2081[1], i2080.x)
  i2080.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2081[2], i2080.y)
  i2080.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2081[3], i2080.z)
  i2080.separateAxes = !!i2081[4]
  return i2080
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i2082 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i2083 = data
  i2082.enabled = !!i2083[0]
  i2082.mode = i2083[1]
  i2082.animation = i2083[2]
  i2082.numTilesX = i2083[3]
  i2082.numTilesY = i2083[4]
  i2082.useRandomRow = !!i2083[5]
  i2082.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2083[6], i2082.frameOverTime)
  i2082.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2083[7], i2082.startFrame)
  i2082.cycleCount = i2083[8]
  i2082.rowIndex = i2083[9]
  i2082.flipU = i2083[10]
  i2082.flipV = i2083[11]
  i2082.spriteCount = i2083[12]
  var i2085 = i2083[13]
  var i2084 = []
  for(var i = 0; i < i2085.length; i += 2) {
  request.r(i2085[i + 0], i2085[i + 1], 2, i2084, '')
  }
  i2082.sprites = i2084
  return i2082
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i2088 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i2089 = data
  i2088.enabled = !!i2089[0]
  i2088.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2089[1], i2088.x)
  i2088.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2089[2], i2088.y)
  i2088.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2089[3], i2088.z)
  i2088.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2089[4], i2088.radial)
  i2088.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2089[5], i2088.speedModifier)
  i2088.space = i2089[6]
  i2088.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2089[7], i2088.orbitalX)
  i2088.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2089[8], i2088.orbitalY)
  i2088.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2089[9], i2088.orbitalZ)
  i2088.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2089[10], i2088.orbitalOffsetX)
  i2088.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2089[11], i2088.orbitalOffsetY)
  i2088.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2089[12], i2088.orbitalOffsetZ)
  return i2088
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i2090 = root || new pc.ParticleSystemNoise()
  var i2091 = data
  i2090.enabled = !!i2091[0]
  i2090.separateAxes = !!i2091[1]
  i2090.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2091[2], i2090.strengthX)
  i2090.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2091[3], i2090.strengthY)
  i2090.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2091[4], i2090.strengthZ)
  i2090.frequency = i2091[5]
  i2090.damping = !!i2091[6]
  i2090.octaveCount = i2091[7]
  i2090.octaveMultiplier = i2091[8]
  i2090.octaveScale = i2091[9]
  i2090.quality = i2091[10]
  i2090.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2091[11], i2090.scrollSpeed)
  i2090.scrollSpeedMultiplier = i2091[12]
  i2090.remapEnabled = !!i2091[13]
  i2090.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2091[14], i2090.remapX)
  i2090.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2091[15], i2090.remapY)
  i2090.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2091[16], i2090.remapZ)
  i2090.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2091[17], i2090.positionAmount)
  i2090.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2091[18], i2090.rotationAmount)
  i2090.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2091[19], i2090.sizeAmount)
  return i2090
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i2092 = root || new pc.ParticleSystemInheritVelocity()
  var i2093 = data
  i2092.enabled = !!i2093[0]
  i2092.mode = i2093[1]
  i2092.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2093[2], i2092.curve)
  return i2092
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i2094 = root || new pc.ParticleSystemForceOverLifetime()
  var i2095 = data
  i2094.enabled = !!i2095[0]
  i2094.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2095[1], i2094.x)
  i2094.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2095[2], i2094.y)
  i2094.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2095[3], i2094.z)
  i2094.space = i2095[4]
  i2094.randomized = !!i2095[5]
  return i2094
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i2096 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i2097 = data
  i2096.enabled = !!i2097[0]
  i2096.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2097[1], i2096.limit)
  i2096.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2097[2], i2096.limitX)
  i2096.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2097[3], i2096.limitY)
  i2096.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2097[4], i2096.limitZ)
  i2096.dampen = i2097[5]
  i2096.separateAxes = !!i2097[6]
  i2096.space = i2097[7]
  i2096.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2097[8], i2096.drag)
  i2096.multiplyDragByParticleSize = !!i2097[9]
  i2096.multiplyDragByParticleVelocity = !!i2097[10]
  return i2096
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i2098 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i2099 = data
  request.r(i2099[0], i2099[1], 0, i2098, 'mesh')
  i2098.meshCount = i2099[2]
  i2098.activeVertexStreamsCount = i2099[3]
  i2098.alignment = i2099[4]
  i2098.renderMode = i2099[5]
  i2098.sortMode = i2099[6]
  i2098.lengthScale = i2099[7]
  i2098.velocityScale = i2099[8]
  i2098.cameraVelocityScale = i2099[9]
  i2098.normalDirection = i2099[10]
  i2098.sortingFudge = i2099[11]
  i2098.minParticleSize = i2099[12]
  i2098.maxParticleSize = i2099[13]
  i2098.pivot = new pc.Vec3( i2099[14], i2099[15], i2099[16] )
  request.r(i2099[17], i2099[18], 0, i2098, 'trailMaterial')
  i2098.applyActiveColorSpace = !!i2099[19]
  i2098.enabled = !!i2099[20]
  request.r(i2099[21], i2099[22], 0, i2098, 'sharedMaterial')
  var i2101 = i2099[23]
  var i2100 = []
  for(var i = 0; i < i2101.length; i += 2) {
  request.r(i2101[i + 0], i2101[i + 1], 2, i2100, '')
  }
  i2098.sharedMaterials = i2100
  i2098.receiveShadows = !!i2099[24]
  i2098.shadowCastingMode = i2099[25]
  i2098.sortingLayerID = i2099[26]
  i2098.sortingOrder = i2099[27]
  i2098.lightmapIndex = i2099[28]
  i2098.lightmapSceneIndex = i2099[29]
  i2098.lightmapScaleOffset = new pc.Vec4( i2099[30], i2099[31], i2099[32], i2099[33] )
  i2098.lightProbeUsage = i2099[34]
  i2098.reflectionProbeUsage = i2099[35]
  return i2098
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i2104 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i2105 = data
  i2104.name = i2105[0]
  i2104.tagId = i2105[1]
  i2104.enabled = !!i2105[2]
  i2104.isStatic = !!i2105[3]
  i2104.layer = i2105[4]
  return i2104
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i2106 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i2107 = data
  i2106.color = new pc.Color(i2107[0], i2107[1], i2107[2], i2107[3])
  request.r(i2107[4], i2107[5], 0, i2106, 'sprite')
  i2106.flipX = !!i2107[6]
  i2106.flipY = !!i2107[7]
  i2106.drawMode = i2107[8]
  i2106.size = new pc.Vec2( i2107[9], i2107[10] )
  i2106.tileMode = i2107[11]
  i2106.adaptiveModeThreshold = i2107[12]
  i2106.maskInteraction = i2107[13]
  i2106.spriteSortPoint = i2107[14]
  i2106.enabled = !!i2107[15]
  request.r(i2107[16], i2107[17], 0, i2106, 'sharedMaterial')
  var i2109 = i2107[18]
  var i2108 = []
  for(var i = 0; i < i2109.length; i += 2) {
  request.r(i2109[i + 0], i2109[i + 1], 2, i2108, '')
  }
  i2106.sharedMaterials = i2108
  i2106.receiveShadows = !!i2107[19]
  i2106.shadowCastingMode = i2107[20]
  i2106.sortingLayerID = i2107[21]
  i2106.sortingOrder = i2107[22]
  i2106.lightmapIndex = i2107[23]
  i2106.lightmapSceneIndex = i2107[24]
  i2106.lightmapScaleOffset = new pc.Vec4( i2107[25], i2107[26], i2107[27], i2107[28] )
  i2106.lightProbeUsage = i2107[29]
  i2106.reflectionProbeUsage = i2107[30]
  return i2106
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i2110 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i2111 = data
  request.r(i2111[0], i2111[1], 0, i2110, 'animatorController')
  request.r(i2111[2], i2111[3], 0, i2110, 'avatar')
  i2110.updateMode = i2111[4]
  i2110.hasTransformHierarchy = !!i2111[5]
  i2110.applyRootMotion = !!i2111[6]
  var i2113 = i2111[7]
  var i2112 = []
  for(var i = 0; i < i2113.length; i += 2) {
  request.r(i2113[i + 0], i2113[i + 1], 2, i2112, '')
  }
  i2110.humanBones = i2112
  i2110.enabled = !!i2111[8]
  return i2110
}

Deserializers["MoveBetweenPoints"] = function (request, data, root) {
  var i2116 = root || request.c( 'MoveBetweenPoints' )
  var i2117 = data
  request.r(i2117[0], i2117[1], 0, i2116, 'pointA')
  request.r(i2117[2], i2117[3], 0, i2116, 'pointB')
  i2116.duration = i2117[4]
  return i2116
}

Deserializers["ScreenHeightPositionAnchor"] = function (request, data, root) {
  var i2118 = root || request.c( 'ScreenHeightPositionAnchor' )
  var i2119 = data
  request.r(i2119[0], i2119[1], 0, i2118, 'anchorPoint')
  request.r(i2119[2], i2119[3], 0, i2118, 'targetCamera')
  i2118.viewportYRatio = i2119[4]
  i2118.alignOnStart = !!i2119[5]
  i2118.alignOnEnable = !!i2119[6]
  i2118.realignOnScreenSizeChanged = !!i2119[7]
  i2118.drawGizmos = !!i2119[8]
  i2118.targetLineColor = new pc.Color(i2119[9], i2119[10], i2119[11], i2119[12])
  i2118.anchorColor = new pc.Color(i2119[13], i2119[14], i2119[15], i2119[16])
  return i2118
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i2120 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i2121 = data
  i2120.usedByComposite = !!i2121[0]
  i2120.autoTiling = !!i2121[1]
  i2120.size = new pc.Vec2( i2121[2], i2121[3] )
  i2120.edgeRadius = i2121[4]
  i2120.enabled = !!i2121[5]
  i2120.isTrigger = !!i2121[6]
  i2120.usedByEffector = !!i2121[7]
  i2120.density = i2121[8]
  i2120.offset = new pc.Vec2( i2121[9], i2121[10] )
  request.r(i2121[11], i2121[12], 0, i2120, 'material')
  return i2120
}

Deserializers["ClickToStore"] = function (request, data, root) {
  var i2122 = root || request.c( 'ClickToStore' )
  var i2123 = data
  return i2122
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i2124 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i2125 = data
  i2124.pivot = new pc.Vec2( i2125[0], i2125[1] )
  i2124.anchorMin = new pc.Vec2( i2125[2], i2125[3] )
  i2124.anchorMax = new pc.Vec2( i2125[4], i2125[5] )
  i2124.sizeDelta = new pc.Vec2( i2125[6], i2125[7] )
  i2124.anchoredPosition3D = new pc.Vec3( i2125[8], i2125[9], i2125[10] )
  i2124.rotation = new pc.Quat(i2125[11], i2125[12], i2125[13], i2125[14])
  i2124.scale = new pc.Vec3( i2125[15], i2125[16], i2125[17] )
  return i2124
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i2126 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i2127 = data
  request.r(i2127[0], i2127[1], 0, i2126, 'additionalVertexStreams')
  i2126.enabled = !!i2127[2]
  request.r(i2127[3], i2127[4], 0, i2126, 'sharedMaterial')
  var i2129 = i2127[5]
  var i2128 = []
  for(var i = 0; i < i2129.length; i += 2) {
  request.r(i2129[i + 0], i2129[i + 1], 2, i2128, '')
  }
  i2126.sharedMaterials = i2128
  i2126.receiveShadows = !!i2127[6]
  i2126.shadowCastingMode = i2127[7]
  i2126.sortingLayerID = i2127[8]
  i2126.sortingOrder = i2127[9]
  i2126.lightmapIndex = i2127[10]
  i2126.lightmapSceneIndex = i2127[11]
  i2126.lightmapScaleOffset = new pc.Vec4( i2127[12], i2127[13], i2127[14], i2127[15] )
  i2126.lightProbeUsage = i2127[16]
  i2126.reflectionProbeUsage = i2127[17]
  return i2126
}

Deserializers["TMPro.TextMeshPro"] = function (request, data, root) {
  var i2130 = root || request.c( 'TMPro.TextMeshPro' )
  var i2131 = data
  i2130._SortingLayer = i2131[0]
  i2130._SortingLayerID = i2131[1]
  i2130._SortingOrder = i2131[2]
  i2130.m_hasFontAssetChanged = !!i2131[3]
  request.r(i2131[4], i2131[5], 0, i2130, 'm_renderer')
  i2130.m_maskType = i2131[6]
  i2130.m_text = i2131[7]
  i2130.m_isRightToLeft = !!i2131[8]
  request.r(i2131[9], i2131[10], 0, i2130, 'm_fontAsset')
  request.r(i2131[11], i2131[12], 0, i2130, 'm_sharedMaterial')
  var i2133 = i2131[13]
  var i2132 = []
  for(var i = 0; i < i2133.length; i += 2) {
  request.r(i2133[i + 0], i2133[i + 1], 2, i2132, '')
  }
  i2130.m_fontSharedMaterials = i2132
  request.r(i2131[14], i2131[15], 0, i2130, 'm_fontMaterial')
  var i2135 = i2131[16]
  var i2134 = []
  for(var i = 0; i < i2135.length; i += 2) {
  request.r(i2135[i + 0], i2135[i + 1], 2, i2134, '')
  }
  i2130.m_fontMaterials = i2134
  i2130.m_fontColor32 = UnityEngine.Color32.ConstructColor(i2131[17], i2131[18], i2131[19], i2131[20])
  i2130.m_fontColor = new pc.Color(i2131[21], i2131[22], i2131[23], i2131[24])
  i2130.m_enableVertexGradient = !!i2131[25]
  i2130.m_colorMode = i2131[26]
  i2130.m_fontColorGradient = request.d('TMPro.VertexGradient', i2131[27], i2130.m_fontColorGradient)
  request.r(i2131[28], i2131[29], 0, i2130, 'm_fontColorGradientPreset')
  request.r(i2131[30], i2131[31], 0, i2130, 'm_spriteAsset')
  i2130.m_tintAllSprites = !!i2131[32]
  request.r(i2131[33], i2131[34], 0, i2130, 'm_StyleSheet')
  i2130.m_TextStyleHashCode = i2131[35]
  i2130.m_overrideHtmlColors = !!i2131[36]
  i2130.m_faceColor = UnityEngine.Color32.ConstructColor(i2131[37], i2131[38], i2131[39], i2131[40])
  i2130.m_fontSize = i2131[41]
  i2130.m_fontSizeBase = i2131[42]
  i2130.m_fontWeight = i2131[43]
  i2130.m_enableAutoSizing = !!i2131[44]
  i2130.m_fontSizeMin = i2131[45]
  i2130.m_fontSizeMax = i2131[46]
  i2130.m_fontStyle = i2131[47]
  i2130.m_HorizontalAlignment = i2131[48]
  i2130.m_VerticalAlignment = i2131[49]
  i2130.m_textAlignment = i2131[50]
  i2130.m_characterSpacing = i2131[51]
  i2130.m_wordSpacing = i2131[52]
  i2130.m_lineSpacing = i2131[53]
  i2130.m_lineSpacingMax = i2131[54]
  i2130.m_paragraphSpacing = i2131[55]
  i2130.m_charWidthMaxAdj = i2131[56]
  i2130.m_TextWrappingMode = i2131[57]
  i2130.m_wordWrappingRatios = i2131[58]
  i2130.m_overflowMode = i2131[59]
  request.r(i2131[60], i2131[61], 0, i2130, 'm_linkedTextComponent')
  request.r(i2131[62], i2131[63], 0, i2130, 'parentLinkedComponent')
  i2130.m_enableKerning = !!i2131[64]
  var i2137 = i2131[65]
  var i2136 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i2137.length; i += 1) {
    i2136.add(i2137[i + 0]);
  }
  i2130.m_ActiveFontFeatures = i2136
  i2130.m_enableExtraPadding = !!i2131[66]
  i2130.checkPaddingRequired = !!i2131[67]
  i2130.m_isRichText = !!i2131[68]
  i2130.m_parseCtrlCharacters = !!i2131[69]
  i2130.m_isOrthographic = !!i2131[70]
  i2130.m_isCullingEnabled = !!i2131[71]
  i2130.m_horizontalMapping = i2131[72]
  i2130.m_verticalMapping = i2131[73]
  i2130.m_uvLineOffset = i2131[74]
  i2130.m_geometrySortingOrder = i2131[75]
  i2130.m_IsTextObjectScaleStatic = !!i2131[76]
  i2130.m_VertexBufferAutoSizeReduction = !!i2131[77]
  i2130.m_useMaxVisibleDescender = !!i2131[78]
  i2130.m_pageToDisplay = i2131[79]
  i2130.m_margin = new pc.Vec4( i2131[80], i2131[81], i2131[82], i2131[83] )
  i2130.m_isUsingLegacyAnimationComponent = !!i2131[84]
  i2130.m_isVolumetricText = !!i2131[85]
  request.r(i2131[86], i2131[87], 0, i2130, 'm_Material')
  i2130.m_EmojiFallbackSupport = !!i2131[88]
  i2130.m_Maskable = !!i2131[89]
  i2130.m_Color = new pc.Color(i2131[90], i2131[91], i2131[92], i2131[93])
  i2130.m_RaycastTarget = !!i2131[94]
  i2130.m_RaycastPadding = new pc.Vec4( i2131[95], i2131[96], i2131[97], i2131[98] )
  return i2130
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i2138 = root || request.c( 'TMPro.VertexGradient' )
  var i2139 = data
  i2138.topLeft = new pc.Color(i2139[0], i2139[1], i2139[2], i2139[3])
  i2138.topRight = new pc.Color(i2139[4], i2139[5], i2139[6], i2139[7])
  i2138.bottomLeft = new pc.Color(i2139[8], i2139[9], i2139[10], i2139[11])
  i2138.bottomRight = new pc.Color(i2139[12], i2139[13], i2139[14], i2139[15])
  return i2138
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i2142 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i2143 = data
  request.r(i2143[0], i2143[1], 0, i2142, 'sharedMesh')
  return i2142
}

Deserializers["PlayerCardUIManager"] = function (request, data, root) {
  var i2144 = root || request.c( 'PlayerCardUIManager' )
  var i2145 = data
  request.r(i2145[0], i2145[1], 0, i2144, 'cardPanel')
  var i2147 = i2145[2]
  var i2146 = []
  for(var i = 0; i < i2147.length; i += 2) {
  request.r(i2147[i + 0], i2147[i + 1], 2, i2146, '')
  }
  i2144.extraObjectsToActivate = i2146
  i2144.waitTime = i2145[3]
  var i2149 = i2145[4]
  var i2148 = []
  for(var i = 0; i < i2149.length; i += 2) {
  request.r(i2149[i + 0], i2149[i + 1], 2, i2148, '')
  }
  i2144.objectsToTurnOnAfterWait = i2148
  var i2151 = i2145[5]
  var i2150 = []
  for(var i = 0; i < i2151.length; i += 2) {
  request.r(i2151[i + 0], i2151[i + 1], 2, i2150, '')
  }
  i2144.objectsToTurnOffAfterWait = i2150
  request.r(i2145[6], i2145[7], 0, i2144, 'nationalityText')
  request.r(i2145[8], i2145[9], 0, i2144, 'playerImage')
  request.r(i2145[10], i2145[11], 0, i2144, 'flagImage')
  return i2144
}

Deserializers["Ply_SoundManager"] = function (request, data, root) {
  var i2154 = root || request.c( 'Ply_SoundManager' )
  var i2155 = data
  i2154.fxAudio = request.d('FxAudio', i2155[0], i2154.fxAudio)
  request.r(i2155[1], i2155[2], 0, i2154, 'bgm1')
  return i2154
}

Deserializers["FxAudio"] = function (request, data, root) {
  var i2156 = root || request.c( 'FxAudio' )
  var i2157 = data
  i2156.ClickBox = request.d('SoundData', i2157[0], i2156.ClickBox)
  i2156.Happy = request.d('SoundData', i2157[1], i2156.Happy)
  i2156.Wrong = request.d('SoundData', i2157[2], i2156.Wrong)
  i2156.Spray = request.d('SoundData', i2157[3], i2156.Spray)
  i2156.Brush = request.d('SoundData', i2157[4], i2156.Brush)
  return i2156
}

Deserializers["SoundData"] = function (request, data, root) {
  var i2158 = root || request.c( 'SoundData' )
  var i2159 = data
  request.r(i2159[0], i2159[1], 0, i2158, 'clip')
  i2158.repeatCount = i2159[2]
  return i2158
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i2160 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i2161 = data
  request.r(i2161[0], i2161[1], 0, i2160, 'clip')
  request.r(i2161[2], i2161[3], 0, i2160, 'outputAudioMixerGroup')
  i2160.playOnAwake = !!i2161[4]
  i2160.loop = !!i2161[5]
  i2160.time = i2161[6]
  i2160.volume = i2161[7]
  i2160.pitch = i2161[8]
  i2160.enabled = !!i2161[9]
  return i2160
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i2162 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i2163 = data
  i2162.planeDistance = i2163[0]
  i2162.referencePixelsPerUnit = i2163[1]
  i2162.isFallbackOverlay = !!i2163[2]
  i2162.renderMode = i2163[3]
  i2162.renderOrder = i2163[4]
  i2162.sortingLayerName = i2163[5]
  i2162.sortingOrder = i2163[6]
  i2162.scaleFactor = i2163[7]
  request.r(i2163[8], i2163[9], 0, i2162, 'worldCamera')
  i2162.overrideSorting = !!i2163[10]
  i2162.pixelPerfect = !!i2163[11]
  i2162.targetDisplay = i2163[12]
  i2162.overridePixelPerfect = !!i2163[13]
  i2162.enabled = !!i2163[14]
  return i2162
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i2164 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i2165 = data
  i2164.m_UiScaleMode = i2165[0]
  i2164.m_ReferencePixelsPerUnit = i2165[1]
  i2164.m_ScaleFactor = i2165[2]
  i2164.m_ReferenceResolution = new pc.Vec2( i2165[3], i2165[4] )
  i2164.m_ScreenMatchMode = i2165[5]
  i2164.m_MatchWidthOrHeight = i2165[6]
  i2164.m_PhysicalUnit = i2165[7]
  i2164.m_FallbackScreenDPI = i2165[8]
  i2164.m_DefaultSpriteDPI = i2165[9]
  i2164.m_DynamicPixelsPerUnit = i2165[10]
  i2164.m_PresetInfoIsWorld = !!i2165[11]
  return i2164
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i2166 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i2167 = data
  i2166.m_IgnoreReversedGraphics = !!i2167[0]
  i2166.m_BlockingObjects = i2167[1]
  i2166.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i2167[2] )
  return i2166
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i2168 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i2169 = data
  i2168.cullTransparentMesh = !!i2169[0]
  return i2168
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i2170 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i2171 = data
  i2170.m_hasFontAssetChanged = !!i2171[0]
  request.r(i2171[1], i2171[2], 0, i2170, 'm_baseMaterial')
  i2170.m_maskOffset = new pc.Vec4( i2171[3], i2171[4], i2171[5], i2171[6] )
  i2170.m_text = i2171[7]
  i2170.m_isRightToLeft = !!i2171[8]
  request.r(i2171[9], i2171[10], 0, i2170, 'm_fontAsset')
  request.r(i2171[11], i2171[12], 0, i2170, 'm_sharedMaterial')
  var i2173 = i2171[13]
  var i2172 = []
  for(var i = 0; i < i2173.length; i += 2) {
  request.r(i2173[i + 0], i2173[i + 1], 2, i2172, '')
  }
  i2170.m_fontSharedMaterials = i2172
  request.r(i2171[14], i2171[15], 0, i2170, 'm_fontMaterial')
  var i2175 = i2171[16]
  var i2174 = []
  for(var i = 0; i < i2175.length; i += 2) {
  request.r(i2175[i + 0], i2175[i + 1], 2, i2174, '')
  }
  i2170.m_fontMaterials = i2174
  i2170.m_fontColor32 = UnityEngine.Color32.ConstructColor(i2171[17], i2171[18], i2171[19], i2171[20])
  i2170.m_fontColor = new pc.Color(i2171[21], i2171[22], i2171[23], i2171[24])
  i2170.m_enableVertexGradient = !!i2171[25]
  i2170.m_colorMode = i2171[26]
  i2170.m_fontColorGradient = request.d('TMPro.VertexGradient', i2171[27], i2170.m_fontColorGradient)
  request.r(i2171[28], i2171[29], 0, i2170, 'm_fontColorGradientPreset')
  request.r(i2171[30], i2171[31], 0, i2170, 'm_spriteAsset')
  i2170.m_tintAllSprites = !!i2171[32]
  request.r(i2171[33], i2171[34], 0, i2170, 'm_StyleSheet')
  i2170.m_TextStyleHashCode = i2171[35]
  i2170.m_overrideHtmlColors = !!i2171[36]
  i2170.m_faceColor = UnityEngine.Color32.ConstructColor(i2171[37], i2171[38], i2171[39], i2171[40])
  i2170.m_fontSize = i2171[41]
  i2170.m_fontSizeBase = i2171[42]
  i2170.m_fontWeight = i2171[43]
  i2170.m_enableAutoSizing = !!i2171[44]
  i2170.m_fontSizeMin = i2171[45]
  i2170.m_fontSizeMax = i2171[46]
  i2170.m_fontStyle = i2171[47]
  i2170.m_HorizontalAlignment = i2171[48]
  i2170.m_VerticalAlignment = i2171[49]
  i2170.m_textAlignment = i2171[50]
  i2170.m_characterSpacing = i2171[51]
  i2170.m_wordSpacing = i2171[52]
  i2170.m_lineSpacing = i2171[53]
  i2170.m_lineSpacingMax = i2171[54]
  i2170.m_paragraphSpacing = i2171[55]
  i2170.m_charWidthMaxAdj = i2171[56]
  i2170.m_TextWrappingMode = i2171[57]
  i2170.m_wordWrappingRatios = i2171[58]
  i2170.m_overflowMode = i2171[59]
  request.r(i2171[60], i2171[61], 0, i2170, 'm_linkedTextComponent')
  request.r(i2171[62], i2171[63], 0, i2170, 'parentLinkedComponent')
  i2170.m_enableKerning = !!i2171[64]
  var i2177 = i2171[65]
  var i2176 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i2177.length; i += 1) {
    i2176.add(i2177[i + 0]);
  }
  i2170.m_ActiveFontFeatures = i2176
  i2170.m_enableExtraPadding = !!i2171[66]
  i2170.checkPaddingRequired = !!i2171[67]
  i2170.m_isRichText = !!i2171[68]
  i2170.m_parseCtrlCharacters = !!i2171[69]
  i2170.m_isOrthographic = !!i2171[70]
  i2170.m_isCullingEnabled = !!i2171[71]
  i2170.m_horizontalMapping = i2171[72]
  i2170.m_verticalMapping = i2171[73]
  i2170.m_uvLineOffset = i2171[74]
  i2170.m_geometrySortingOrder = i2171[75]
  i2170.m_IsTextObjectScaleStatic = !!i2171[76]
  i2170.m_VertexBufferAutoSizeReduction = !!i2171[77]
  i2170.m_useMaxVisibleDescender = !!i2171[78]
  i2170.m_pageToDisplay = i2171[79]
  i2170.m_margin = new pc.Vec4( i2171[80], i2171[81], i2171[82], i2171[83] )
  i2170.m_isUsingLegacyAnimationComponent = !!i2171[84]
  i2170.m_isVolumetricText = !!i2171[85]
  request.r(i2171[86], i2171[87], 0, i2170, 'm_Material')
  i2170.m_EmojiFallbackSupport = !!i2171[88]
  i2170.m_Maskable = !!i2171[89]
  i2170.m_Color = new pc.Color(i2171[90], i2171[91], i2171[92], i2171[93])
  i2170.m_RaycastTarget = !!i2171[94]
  i2170.m_RaycastPadding = new pc.Vec4( i2171[95], i2171[96], i2171[97], i2171[98] )
  return i2170
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i2178 = root || request.c( 'UnityEngine.UI.Image' )
  var i2179 = data
  request.r(i2179[0], i2179[1], 0, i2178, 'm_Sprite')
  i2178.m_Type = i2179[2]
  i2178.m_PreserveAspect = !!i2179[3]
  i2178.m_FillCenter = !!i2179[4]
  i2178.m_FillMethod = i2179[5]
  i2178.m_FillAmount = i2179[6]
  i2178.m_FillClockwise = !!i2179[7]
  i2178.m_FillOrigin = i2179[8]
  i2178.m_UseSpriteMesh = !!i2179[9]
  i2178.m_PixelsPerUnitMultiplier = i2179[10]
  request.r(i2179[11], i2179[12], 0, i2178, 'm_Material')
  i2178.m_Maskable = !!i2179[13]
  i2178.m_Color = new pc.Color(i2179[14], i2179[15], i2179[16], i2179[17])
  i2178.m_RaycastTarget = !!i2179[18]
  i2178.m_RaycastPadding = new pc.Vec4( i2179[19], i2179[20], i2179[21], i2179[22] )
  return i2178
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D"] = function (request, data, root) {
  var i2180 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D' )
  var i2181 = data
  i2180.usedByComposite = !!i2181[0]
  i2180.autoTiling = !!i2181[1]
  var i2183 = i2181[2]
  var i2182 = []
  for(var i = 0; i < i2183.length; i += 1) {
  var i2185 = i2183[i + 0]
  var i2184 = []
  for(var i = 0; i < i2185.length; i += 2) {
    i2184.push( new pc.Vec2( i2185[i + 0], i2185[i + 1] ) );
  }
    i2182.push( i2184 );
  }
  i2180.points = i2182
  i2180.enabled = !!i2181[3]
  i2180.isTrigger = !!i2181[4]
  i2180.usedByEffector = !!i2181[5]
  i2180.density = i2181[6]
  i2180.offset = new pc.Vec2( i2181[7], i2181[8] )
  request.r(i2181[9], i2181[10], 0, i2180, 'material')
  return i2180
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i2192 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i2193 = data
  i2192.bodyType = i2193[0]
  request.r(i2193[1], i2193[2], 0, i2192, 'material')
  i2192.simulated = !!i2193[3]
  i2192.useAutoMass = !!i2193[4]
  i2192.mass = i2193[5]
  i2192.drag = i2193[6]
  i2192.angularDrag = i2193[7]
  i2192.gravityScale = i2193[8]
  i2192.collisionDetectionMode = i2193[9]
  i2192.sleepMode = i2193[10]
  i2192.constraints = i2193[11]
  return i2192
}

Deserializers["BatStrikeController"] = function (request, data, root) {
  var i2194 = root || request.c( 'BatStrikeController' )
  var i2195 = data
  i2194.pullSpeed = i2195[0]
  i2194.maxPullDistance = i2195[1]
  i2194.minHoldTime = i2195[2]
  i2194.strikeForce = i2195[3]
  i2194.targetTag = i2195[4]
  return i2194
}

Deserializers["CupCollision"] = function (request, data, root) {
  var i2196 = root || request.c( 'CupCollision' )
  var i2197 = data
  i2196.baseTag = i2197[0]
  request.r(i2197[1], i2197[2], 0, i2196, 'objectToActivate')
  return i2196
}

Deserializers["SlotTrigger"] = function (request, data, root) {
  var i2198 = root || request.c( 'SlotTrigger' )
  var i2199 = data
  request.r(i2199[0], i2199[1], 0, i2198, 'cardData')
  i2198.targetTag = i2199[2]
  request.r(i2199[3], i2199[4], 0, i2198, 'yAnchor')
  i2198.moveSpeed = i2199[5]
  request.r(i2199[6], i2199[7], 0, i2198, 'objectToMoveDown')
  i2198.targetScreenYRatio = i2199[8]
  return i2198
}

Deserializers["HideOnFirstClick"] = function (request, data, root) {
  var i2200 = root || request.c( 'HideOnFirstClick' )
  var i2201 = data
  request.r(i2201[0], i2201[1], 0, i2200, 'objectToHide')
  return i2200
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i2202 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i2203 = data
  request.r(i2203[0], i2203[1], 0, i2202, 'm_FirstSelected')
  i2202.m_sendNavigationEvents = !!i2203[2]
  i2202.m_DragThreshold = i2203[3]
  return i2202
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i2204 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i2205 = data
  i2204.m_HorizontalAxis = i2205[0]
  i2204.m_VerticalAxis = i2205[1]
  i2204.m_SubmitButton = i2205[2]
  i2204.m_CancelButton = i2205[3]
  i2204.m_InputActionsPerSecond = i2205[4]
  i2204.m_RepeatDelay = i2205[5]
  i2204.m_ForceModuleActive = !!i2205[6]
  i2204.m_SendPointerHoverToParent = !!i2205[7]
  return i2204
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i2206 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i2207 = data
  i2206.ambientIntensity = i2207[0]
  i2206.reflectionIntensity = i2207[1]
  i2206.ambientMode = i2207[2]
  i2206.ambientLight = new pc.Color(i2207[3], i2207[4], i2207[5], i2207[6])
  i2206.ambientSkyColor = new pc.Color(i2207[7], i2207[8], i2207[9], i2207[10])
  i2206.ambientGroundColor = new pc.Color(i2207[11], i2207[12], i2207[13], i2207[14])
  i2206.ambientEquatorColor = new pc.Color(i2207[15], i2207[16], i2207[17], i2207[18])
  i2206.fogColor = new pc.Color(i2207[19], i2207[20], i2207[21], i2207[22])
  i2206.fogEndDistance = i2207[23]
  i2206.fogStartDistance = i2207[24]
  i2206.fogDensity = i2207[25]
  i2206.fog = !!i2207[26]
  request.r(i2207[27], i2207[28], 0, i2206, 'skybox')
  i2206.fogMode = i2207[29]
  var i2209 = i2207[30]
  var i2208 = []
  for(var i = 0; i < i2209.length; i += 1) {
    i2208.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i2209[i + 0]) );
  }
  i2206.lightmaps = i2208
  i2206.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i2207[31], i2206.lightProbes)
  i2206.lightmapsMode = i2207[32]
  i2206.mixedBakeMode = i2207[33]
  i2206.environmentLightingMode = i2207[34]
  i2206.ambientProbe = new pc.SphericalHarmonicsL2(i2207[35])
  i2206.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i2207[36])
  i2206.useReferenceAmbientProbe = !!i2207[37]
  request.r(i2207[38], i2207[39], 0, i2206, 'customReflection')
  request.r(i2207[40], i2207[41], 0, i2206, 'defaultReflection')
  i2206.defaultReflectionMode = i2207[42]
  i2206.defaultReflectionResolution = i2207[43]
  i2206.sunLightObjectId = i2207[44]
  i2206.pixelLightCount = i2207[45]
  i2206.defaultReflectionHDR = !!i2207[46]
  i2206.hasLightDataAsset = !!i2207[47]
  i2206.hasManualGenerate = !!i2207[48]
  return i2206
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i2212 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i2213 = data
  request.r(i2213[0], i2213[1], 0, i2212, 'lightmapColor')
  request.r(i2213[2], i2213[3], 0, i2212, 'lightmapDirection')
  request.r(i2213[4], i2213[5], 0, i2212, 'shadowMask')
  return i2212
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i2214 = root || new UnityEngine.LightProbes()
  var i2215 = data
  return i2214
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.PhysicsMaterial2D"] = function (request, data, root) {
  var i2222 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.PhysicsMaterial2D' )
  var i2223 = data
  i2222.name = i2223[0]
  i2222.bounciness = i2223[1]
  i2222.friction = i2223[2]
  return i2222
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i2224 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i2225 = data
  var i2227 = i2225[0]
  var i2226 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i2227.length; i += 1) {
    i2226.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i2227[i + 0]));
  }
  i2224.ShaderCompilationErrors = i2226
  i2224.name = i2225[1]
  i2224.guid = i2225[2]
  var i2229 = i2225[3]
  var i2228 = []
  for(var i = 0; i < i2229.length; i += 1) {
    i2228.push( i2229[i + 0] );
  }
  i2224.shaderDefinedKeywords = i2228
  var i2231 = i2225[4]
  var i2230 = []
  for(var i = 0; i < i2231.length; i += 1) {
    i2230.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i2231[i + 0]) );
  }
  i2224.passes = i2230
  var i2233 = i2225[5]
  var i2232 = []
  for(var i = 0; i < i2233.length; i += 1) {
    i2232.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i2233[i + 0]) );
  }
  i2224.usePasses = i2232
  var i2235 = i2225[6]
  var i2234 = []
  for(var i = 0; i < i2235.length; i += 1) {
    i2234.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i2235[i + 0]) );
  }
  i2224.defaultParameterValues = i2234
  request.r(i2225[7], i2225[8], 0, i2224, 'unityFallbackShader')
  i2224.readDepth = !!i2225[9]
  i2224.hasDepthOnlyPass = !!i2225[10]
  i2224.isCreatedByShaderGraph = !!i2225[11]
  i2224.disableBatching = !!i2225[12]
  i2224.compiled = !!i2225[13]
  return i2224
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i2238 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i2239 = data
  i2238.shaderName = i2239[0]
  i2238.errorMessage = i2239[1]
  return i2238
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i2244 = root || new pc.UnityShaderPass()
  var i2245 = data
  i2244.id = i2245[0]
  i2244.subShaderIndex = i2245[1]
  i2244.name = i2245[2]
  i2244.passType = i2245[3]
  i2244.grabPassTextureName = i2245[4]
  i2244.usePass = !!i2245[5]
  i2244.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2245[6], i2244.zTest)
  i2244.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2245[7], i2244.zWrite)
  i2244.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2245[8], i2244.culling)
  i2244.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2245[9], i2244.blending)
  i2244.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2245[10], i2244.alphaBlending)
  i2244.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2245[11], i2244.colorWriteMask)
  i2244.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2245[12], i2244.offsetUnits)
  i2244.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2245[13], i2244.offsetFactor)
  i2244.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2245[14], i2244.stencilRef)
  i2244.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2245[15], i2244.stencilReadMask)
  i2244.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2245[16], i2244.stencilWriteMask)
  i2244.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2245[17], i2244.stencilOp)
  i2244.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2245[18], i2244.stencilOpFront)
  i2244.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2245[19], i2244.stencilOpBack)
  var i2247 = i2245[20]
  var i2246 = []
  for(var i = 0; i < i2247.length; i += 1) {
    i2246.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i2247[i + 0]) );
  }
  i2244.tags = i2246
  var i2249 = i2245[21]
  var i2248 = []
  for(var i = 0; i < i2249.length; i += 1) {
    i2248.push( i2249[i + 0] );
  }
  i2244.passDefinedKeywords = i2248
  var i2251 = i2245[22]
  var i2250 = []
  for(var i = 0; i < i2251.length; i += 1) {
    i2250.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i2251[i + 0]) );
  }
  i2244.passDefinedKeywordGroups = i2250
  var i2253 = i2245[23]
  var i2252 = []
  for(var i = 0; i < i2253.length; i += 1) {
    i2252.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2253[i + 0]) );
  }
  i2244.variants = i2252
  var i2255 = i2245[24]
  var i2254 = []
  for(var i = 0; i < i2255.length; i += 1) {
    i2254.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2255[i + 0]) );
  }
  i2244.excludedVariants = i2254
  i2244.hasDepthReader = !!i2245[25]
  return i2244
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i2256 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i2257 = data
  i2256.val = i2257[0]
  i2256.name = i2257[1]
  return i2256
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i2258 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i2259 = data
  i2258.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2259[0], i2258.src)
  i2258.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2259[1], i2258.dst)
  i2258.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2259[2], i2258.op)
  return i2258
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i2260 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i2261 = data
  i2260.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2261[0], i2260.pass)
  i2260.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2261[1], i2260.fail)
  i2260.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2261[2], i2260.zFail)
  i2260.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2261[3], i2260.comp)
  return i2260
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i2264 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i2265 = data
  i2264.name = i2265[0]
  i2264.value = i2265[1]
  return i2264
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i2268 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i2269 = data
  var i2271 = i2269[0]
  var i2270 = []
  for(var i = 0; i < i2271.length; i += 1) {
    i2270.push( i2271[i + 0] );
  }
  i2268.keywords = i2270
  i2268.hasDiscard = !!i2269[1]
  return i2268
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i2274 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i2275 = data
  i2274.passId = i2275[0]
  i2274.subShaderIndex = i2275[1]
  var i2277 = i2275[2]
  var i2276 = []
  for(var i = 0; i < i2277.length; i += 1) {
    i2276.push( i2277[i + 0] );
  }
  i2274.keywords = i2276
  i2274.vertexProgram = i2275[3]
  i2274.fragmentProgram = i2275[4]
  i2274.exportedForWebGl2 = !!i2275[5]
  i2274.readDepth = !!i2275[6]
  return i2274
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i2280 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i2281 = data
  request.r(i2281[0], i2281[1], 0, i2280, 'shader')
  i2280.pass = i2281[2]
  return i2280
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i2284 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i2285 = data
  i2284.name = i2285[0]
  i2284.type = i2285[1]
  i2284.value = new pc.Vec4( i2285[2], i2285[3], i2285[4], i2285[5] )
  i2284.textureValue = i2285[6]
  i2284.shaderPropertyFlag = i2285[7]
  return i2284
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i2286 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i2287 = data
  i2286.name = i2287[0]
  request.r(i2287[1], i2287[2], 0, i2286, 'texture')
  i2286.aabb = i2287[3]
  i2286.vertices = i2287[4]
  i2286.triangles = i2287[5]
  i2286.textureRect = UnityEngine.Rect.MinMaxRect(i2287[6], i2287[7], i2287[8], i2287[9])
  i2286.packedRect = UnityEngine.Rect.MinMaxRect(i2287[10], i2287[11], i2287[12], i2287[13])
  i2286.border = new pc.Vec4( i2287[14], i2287[15], i2287[16], i2287[17] )
  i2286.transparency = i2287[18]
  i2286.bounds = i2287[19]
  i2286.pixelsPerUnit = i2287[20]
  i2286.textureWidth = i2287[21]
  i2286.textureHeight = i2287[22]
  i2286.nativeSize = new pc.Vec2( i2287[23], i2287[24] )
  i2286.pivot = new pc.Vec2( i2287[25], i2287[26] )
  i2286.textureRectOffset = new pc.Vec2( i2287[27], i2287[28] )
  return i2286
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i2288 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i2289 = data
  i2288.name = i2289[0]
  return i2288
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i2290 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i2291 = data
  i2290.name = i2291[0]
  i2290.wrapMode = i2291[1]
  i2290.isLooping = !!i2291[2]
  i2290.length = i2291[3]
  var i2293 = i2291[4]
  var i2292 = []
  for(var i = 0; i < i2293.length; i += 1) {
    i2292.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i2293[i + 0]) );
  }
  i2290.curves = i2292
  var i2295 = i2291[5]
  var i2294 = []
  for(var i = 0; i < i2295.length; i += 1) {
    i2294.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i2295[i + 0]) );
  }
  i2290.events = i2294
  i2290.halfPrecision = !!i2291[6]
  i2290._frameRate = i2291[7]
  i2290.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i2291[8], i2290.localBounds)
  i2290.hasMuscleCurves = !!i2291[9]
  var i2297 = i2291[10]
  var i2296 = []
  for(var i = 0; i < i2297.length; i += 1) {
    i2296.push( i2297[i + 0] );
  }
  i2290.clipMuscleConstant = i2296
  i2290.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i2291[11], i2290.clipBindingConstant)
  return i2290
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i2300 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i2301 = data
  i2300.path = i2301[0]
  i2300.hash = i2301[1]
  i2300.componentType = i2301[2]
  i2300.property = i2301[3]
  i2300.keys = i2301[4]
  var i2303 = i2301[5]
  var i2302 = []
  for(var i = 0; i < i2303.length; i += 1) {
    i2302.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i2303[i + 0]) );
  }
  i2300.objectReferenceKeys = i2302
  return i2300
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i2306 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i2307 = data
  i2306.time = i2307[0]
  request.r(i2307[1], i2307[2], 0, i2306, 'value')
  return i2306
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i2310 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i2311 = data
  i2310.functionName = i2311[0]
  i2310.floatParameter = i2311[1]
  i2310.intParameter = i2311[2]
  i2310.stringParameter = i2311[3]
  request.r(i2311[4], i2311[5], 0, i2310, 'objectReferenceParameter')
  i2310.time = i2311[6]
  return i2310
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i2312 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i2313 = data
  i2312.center = new pc.Vec3( i2313[0], i2313[1], i2313[2] )
  i2312.extends = new pc.Vec3( i2313[3], i2313[4], i2313[5] )
  return i2312
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i2316 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i2317 = data
  var i2319 = i2317[0]
  var i2318 = []
  for(var i = 0; i < i2319.length; i += 1) {
    i2318.push( i2319[i + 0] );
  }
  i2316.genericBindings = i2318
  var i2321 = i2317[1]
  var i2320 = []
  for(var i = 0; i < i2321.length; i += 1) {
    i2320.push( i2321[i + 0] );
  }
  i2316.pptrCurveMapping = i2320
  return i2316
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i2322 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i2323 = data
  i2322.name = i2323[0]
  i2322.ascent = i2323[1]
  i2322.originalLineHeight = i2323[2]
  i2322.fontSize = i2323[3]
  var i2325 = i2323[4]
  var i2324 = []
  for(var i = 0; i < i2325.length; i += 1) {
    i2324.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i2325[i + 0]) );
  }
  i2322.characterInfo = i2324
  request.r(i2323[5], i2323[6], 0, i2322, 'texture')
  i2322.originalFontSize = i2323[7]
  return i2322
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i2328 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i2329 = data
  i2328.index = i2329[0]
  i2328.advance = i2329[1]
  i2328.bearing = i2329[2]
  i2328.glyphWidth = i2329[3]
  i2328.glyphHeight = i2329[4]
  i2328.minX = i2329[5]
  i2328.maxX = i2329[6]
  i2328.minY = i2329[7]
  i2328.maxY = i2329[8]
  i2328.uvBottomLeftX = i2329[9]
  i2328.uvBottomLeftY = i2329[10]
  i2328.uvBottomRightX = i2329[11]
  i2328.uvBottomRightY = i2329[12]
  i2328.uvTopLeftX = i2329[13]
  i2328.uvTopLeftY = i2329[14]
  i2328.uvTopRightX = i2329[15]
  i2328.uvTopRightY = i2329[16]
  return i2328
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i2330 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i2331 = data
  i2330.name = i2331[0]
  var i2333 = i2331[1]
  var i2332 = []
  for(var i = 0; i < i2333.length; i += 1) {
    i2332.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i2333[i + 0]) );
  }
  i2330.layers = i2332
  var i2335 = i2331[2]
  var i2334 = []
  for(var i = 0; i < i2335.length; i += 1) {
    i2334.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i2335[i + 0]) );
  }
  i2330.parameters = i2334
  i2330.animationClips = i2331[3]
  i2330.avatarUnsupported = i2331[4]
  return i2330
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i2338 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i2339 = data
  i2338.name = i2339[0]
  i2338.defaultWeight = i2339[1]
  i2338.blendingMode = i2339[2]
  i2338.avatarMask = i2339[3]
  i2338.syncedLayerIndex = i2339[4]
  i2338.syncedLayerAffectsTiming = !!i2339[5]
  i2338.syncedLayers = i2339[6]
  i2338.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2339[7], i2338.stateMachine)
  return i2338
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i2340 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i2341 = data
  i2340.id = i2341[0]
  i2340.name = i2341[1]
  i2340.path = i2341[2]
  var i2343 = i2341[3]
  var i2342 = []
  for(var i = 0; i < i2343.length; i += 1) {
    i2342.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i2343[i + 0]) );
  }
  i2340.states = i2342
  var i2345 = i2341[4]
  var i2344 = []
  for(var i = 0; i < i2345.length; i += 1) {
    i2344.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2345[i + 0]) );
  }
  i2340.machines = i2344
  var i2347 = i2341[5]
  var i2346 = []
  for(var i = 0; i < i2347.length; i += 1) {
    i2346.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2347[i + 0]) );
  }
  i2340.entryStateTransitions = i2346
  var i2349 = i2341[6]
  var i2348 = []
  for(var i = 0; i < i2349.length; i += 1) {
    i2348.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2349[i + 0]) );
  }
  i2340.exitStateTransitions = i2348
  var i2351 = i2341[7]
  var i2350 = []
  for(var i = 0; i < i2351.length; i += 1) {
    i2350.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2351[i + 0]) );
  }
  i2340.anyStateTransitions = i2350
  i2340.defaultStateId = i2341[8]
  return i2340
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i2354 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i2355 = data
  i2354.id = i2355[0]
  i2354.name = i2355[1]
  i2354.cycleOffset = i2355[2]
  i2354.cycleOffsetParameter = i2355[3]
  i2354.cycleOffsetParameterActive = !!i2355[4]
  i2354.mirror = !!i2355[5]
  i2354.mirrorParameter = i2355[6]
  i2354.mirrorParameterActive = !!i2355[7]
  i2354.motionId = i2355[8]
  i2354.nameHash = i2355[9]
  i2354.fullPathHash = i2355[10]
  i2354.speed = i2355[11]
  i2354.speedParameter = i2355[12]
  i2354.speedParameterActive = !!i2355[13]
  i2354.tag = i2355[14]
  i2354.tagHash = i2355[15]
  i2354.writeDefaultValues = !!i2355[16]
  var i2357 = i2355[17]
  var i2356 = []
  for(var i = 0; i < i2357.length; i += 2) {
  request.r(i2357[i + 0], i2357[i + 1], 2, i2356, '')
  }
  i2354.behaviours = i2356
  var i2359 = i2355[18]
  var i2358 = []
  for(var i = 0; i < i2359.length; i += 1) {
    i2358.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2359[i + 0]) );
  }
  i2354.transitions = i2358
  return i2354
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i2364 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i2365 = data
  i2364.fullPath = i2365[0]
  i2364.canTransitionToSelf = !!i2365[1]
  i2364.duration = i2365[2]
  i2364.exitTime = i2365[3]
  i2364.hasExitTime = !!i2365[4]
  i2364.hasFixedDuration = !!i2365[5]
  i2364.interruptionSource = i2365[6]
  i2364.offset = i2365[7]
  i2364.orderedInterruption = !!i2365[8]
  i2364.destinationStateId = i2365[9]
  i2364.isExit = !!i2365[10]
  i2364.mute = !!i2365[11]
  i2364.solo = !!i2365[12]
  var i2367 = i2365[13]
  var i2366 = []
  for(var i = 0; i < i2367.length; i += 1) {
    i2366.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2367[i + 0]) );
  }
  i2364.conditions = i2366
  return i2364
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i2372 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i2373 = data
  i2372.destinationStateId = i2373[0]
  i2372.isExit = !!i2373[1]
  i2372.mute = !!i2373[2]
  i2372.solo = !!i2373[3]
  var i2375 = i2373[4]
  var i2374 = []
  for(var i = 0; i < i2375.length; i += 1) {
    i2374.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2375[i + 0]) );
  }
  i2372.conditions = i2374
  return i2372
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i2378 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i2379 = data
  i2378.defaultBool = !!i2379[0]
  i2378.defaultFloat = i2379[1]
  i2378.defaultInt = i2379[2]
  i2378.name = i2379[3]
  i2378.nameHash = i2379[4]
  i2378.type = i2379[5]
  return i2378
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i2380 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i2381 = data
  i2380.name = i2381[0]
  i2380.bytes64 = i2381[1]
  i2380.data = i2381[2]
  return i2380
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i2382 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i2383 = data
  i2382.normalStyle = i2383[0]
  i2382.normalSpacingOffset = i2383[1]
  i2382.boldStyle = i2383[2]
  i2382.boldSpacing = i2383[3]
  i2382.italicStyle = i2383[4]
  i2382.tabSize = i2383[5]
  request.r(i2383[6], i2383[7], 0, i2382, 'atlas')
  i2382.m_SourceFontFileGUID = i2383[8]
  i2382.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i2383[9], i2382.m_CreationSettings)
  request.r(i2383[10], i2383[11], 0, i2382, 'm_SourceFontFile')
  i2382.m_SourceFontFilePath = i2383[12]
  i2382.m_AtlasPopulationMode = i2383[13]
  i2382.InternalDynamicOS = !!i2383[14]
  var i2385 = i2383[15]
  var i2384 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i2385.length; i += 1) {
    i2384.add(request.d('UnityEngine.TextCore.Glyph', i2385[i + 0]));
  }
  i2382.m_GlyphTable = i2384
  var i2387 = i2383[16]
  var i2386 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i2387.length; i += 1) {
    i2386.add(request.d('TMPro.TMP_Character', i2387[i + 0]));
  }
  i2382.m_CharacterTable = i2386
  var i2389 = i2383[17]
  var i2388 = []
  for(var i = 0; i < i2389.length; i += 2) {
  request.r(i2389[i + 0], i2389[i + 1], 2, i2388, '')
  }
  i2382.m_AtlasTextures = i2388
  i2382.m_AtlasTextureIndex = i2383[18]
  i2382.m_IsMultiAtlasTexturesEnabled = !!i2383[19]
  i2382.m_GetFontFeatures = !!i2383[20]
  i2382.m_ClearDynamicDataOnBuild = !!i2383[21]
  i2382.m_AtlasWidth = i2383[22]
  i2382.m_AtlasHeight = i2383[23]
  i2382.m_AtlasPadding = i2383[24]
  i2382.m_AtlasRenderMode = i2383[25]
  var i2391 = i2383[26]
  var i2390 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2391.length; i += 1) {
    i2390.add(request.d('UnityEngine.TextCore.GlyphRect', i2391[i + 0]));
  }
  i2382.m_UsedGlyphRects = i2390
  var i2393 = i2383[27]
  var i2392 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2393.length; i += 1) {
    i2392.add(request.d('UnityEngine.TextCore.GlyphRect', i2393[i + 0]));
  }
  i2382.m_FreeGlyphRects = i2392
  i2382.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i2383[28], i2382.m_FontFeatureTable)
  i2382.m_ShouldReimportFontFeatures = !!i2383[29]
  var i2395 = i2383[30]
  var i2394 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2395.length; i += 2) {
  request.r(i2395[i + 0], i2395[i + 1], 1, i2394, '')
  }
  i2382.m_FallbackFontAssetTable = i2394
  var i2397 = i2383[31]
  var i2396 = []
  for(var i = 0; i < i2397.length; i += 1) {
    i2396.push( request.d('TMPro.TMP_FontWeightPair', i2397[i + 0]) );
  }
  i2382.m_FontWeightTable = i2396
  var i2399 = i2383[32]
  var i2398 = []
  for(var i = 0; i < i2399.length; i += 1) {
    i2398.push( request.d('TMPro.TMP_FontWeightPair', i2399[i + 0]) );
  }
  i2382.fontWeights = i2398
  i2382.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i2383[33], i2382.m_fontInfo)
  var i2401 = i2383[34]
  var i2400 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i2401.length; i += 1) {
    i2400.add(request.d('TMPro.TMP_Glyph', i2401[i + 0]));
  }
  i2382.m_glyphInfoList = i2400
  i2382.m_KerningTable = request.d('TMPro.KerningTable', i2383[35], i2382.m_KerningTable)
  var i2403 = i2383[36]
  var i2402 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2403.length; i += 2) {
  request.r(i2403[i + 0], i2403[i + 1], 1, i2402, '')
  }
  i2382.fallbackFontAssets = i2402
  i2382.m_Version = i2383[37]
  i2382.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2383[38], i2382.m_FaceInfo)
  request.r(i2383[39], i2383[40], 0, i2382, 'm_Material')
  return i2382
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i2404 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i2405 = data
  i2404.sourceFontFileName = i2405[0]
  i2404.sourceFontFileGUID = i2405[1]
  i2404.faceIndex = i2405[2]
  i2404.pointSizeSamplingMode = i2405[3]
  i2404.pointSize = i2405[4]
  i2404.padding = i2405[5]
  i2404.paddingMode = i2405[6]
  i2404.packingMode = i2405[7]
  i2404.atlasWidth = i2405[8]
  i2404.atlasHeight = i2405[9]
  i2404.characterSetSelectionMode = i2405[10]
  i2404.characterSequence = i2405[11]
  i2404.referencedFontAssetGUID = i2405[12]
  i2404.referencedTextAssetGUID = i2405[13]
  i2404.fontStyle = i2405[14]
  i2404.fontStyleModifier = i2405[15]
  i2404.renderMode = i2405[16]
  i2404.includeFontFeatures = !!i2405[17]
  return i2404
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i2408 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i2409 = data
  i2408.m_Index = i2409[0]
  i2408.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2409[1], i2408.m_Metrics)
  i2408.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2409[2], i2408.m_GlyphRect)
  i2408.m_Scale = i2409[3]
  i2408.m_AtlasIndex = i2409[4]
  i2408.m_ClassDefinitionType = i2409[5]
  return i2408
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i2410 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i2411 = data
  i2410.m_Width = i2411[0]
  i2410.m_Height = i2411[1]
  i2410.m_HorizontalBearingX = i2411[2]
  i2410.m_HorizontalBearingY = i2411[3]
  i2410.m_HorizontalAdvance = i2411[4]
  return i2410
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i2412 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i2413 = data
  i2412.m_X = i2413[0]
  i2412.m_Y = i2413[1]
  i2412.m_Width = i2413[2]
  i2412.m_Height = i2413[3]
  return i2412
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i2416 = root || request.c( 'TMPro.TMP_Character' )
  var i2417 = data
  i2416.m_ElementType = i2417[0]
  i2416.m_Unicode = i2417[1]
  i2416.m_GlyphIndex = i2417[2]
  i2416.m_Scale = i2417[3]
  return i2416
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i2422 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i2423 = data
  var i2425 = i2423[0]
  var i2424 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i2425.length; i += 1) {
    i2424.add(request.d('TMPro.MultipleSubstitutionRecord', i2425[i + 0]));
  }
  i2422.m_MultipleSubstitutionRecords = i2424
  var i2427 = i2423[1]
  var i2426 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i2427.length; i += 1) {
    i2426.add(request.d('TMPro.LigatureSubstitutionRecord', i2427[i + 0]));
  }
  i2422.m_LigatureSubstitutionRecords = i2426
  var i2429 = i2423[2]
  var i2428 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i2429.length; i += 1) {
    i2428.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i2429[i + 0]));
  }
  i2422.m_GlyphPairAdjustmentRecords = i2428
  var i2431 = i2423[3]
  var i2430 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i2431.length; i += 1) {
    i2430.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i2431[i + 0]));
  }
  i2422.m_MarkToBaseAdjustmentRecords = i2430
  var i2433 = i2423[4]
  var i2432 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i2433.length; i += 1) {
    i2432.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i2433[i + 0]));
  }
  i2422.m_MarkToMarkAdjustmentRecords = i2432
  return i2422
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i2436 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i2437 = data
  i2436.m_TargetGlyphID = i2437[0]
  i2436.m_SubstituteGlyphIDs = i2437[1]
  return i2436
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i2440 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i2441 = data
  i2440.m_ComponentGlyphIDs = i2441[0]
  i2440.m_LigatureGlyphID = i2441[1]
  return i2440
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i2444 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i2445 = data
  i2444.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i2445[0], i2444.m_FirstAdjustmentRecord)
  i2444.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i2445[1], i2444.m_SecondAdjustmentRecord)
  i2444.m_FeatureLookupFlags = i2445[2]
  return i2444
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i2446 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i2447 = data
  i2446.m_GlyphIndex = i2447[0]
  i2446.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i2447[1], i2446.m_GlyphValueRecord)
  return i2446
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i2448 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i2449 = data
  i2448.m_XPlacement = i2449[0]
  i2448.m_YPlacement = i2449[1]
  i2448.m_XAdvance = i2449[2]
  i2448.m_YAdvance = i2449[3]
  return i2448
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i2452 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i2453 = data
  i2452.m_BaseGlyphID = i2453[0]
  i2452.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i2453[1], i2452.m_BaseGlyphAnchorPoint)
  i2452.m_MarkGlyphID = i2453[2]
  i2452.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i2453[3], i2452.m_MarkPositionAdjustment)
  return i2452
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i2456 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i2457 = data
  i2456.m_BaseMarkGlyphID = i2457[0]
  i2456.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i2457[1], i2456.m_BaseMarkGlyphAnchorPoint)
  i2456.m_CombiningMarkGlyphID = i2457[2]
  i2456.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i2457[3], i2456.m_CombiningMarkPositionAdjustment)
  return i2456
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i2462 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i2463 = data
  request.r(i2463[0], i2463[1], 0, i2462, 'regularTypeface')
  request.r(i2463[2], i2463[3], 0, i2462, 'italicTypeface')
  return i2462
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i2464 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i2465 = data
  i2464.Name = i2465[0]
  i2464.PointSize = i2465[1]
  i2464.Scale = i2465[2]
  i2464.CharacterCount = i2465[3]
  i2464.LineHeight = i2465[4]
  i2464.Baseline = i2465[5]
  i2464.Ascender = i2465[6]
  i2464.CapHeight = i2465[7]
  i2464.Descender = i2465[8]
  i2464.CenterLine = i2465[9]
  i2464.SuperscriptOffset = i2465[10]
  i2464.SubscriptOffset = i2465[11]
  i2464.SubSize = i2465[12]
  i2464.Underline = i2465[13]
  i2464.UnderlineThickness = i2465[14]
  i2464.strikethrough = i2465[15]
  i2464.strikethroughThickness = i2465[16]
  i2464.TabWidth = i2465[17]
  i2464.Padding = i2465[18]
  i2464.AtlasWidth = i2465[19]
  i2464.AtlasHeight = i2465[20]
  return i2464
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i2468 = root || request.c( 'TMPro.TMP_Glyph' )
  var i2469 = data
  i2468.id = i2469[0]
  i2468.x = i2469[1]
  i2468.y = i2469[2]
  i2468.width = i2469[3]
  i2468.height = i2469[4]
  i2468.xOffset = i2469[5]
  i2468.yOffset = i2469[6]
  i2468.xAdvance = i2469[7]
  i2468.scale = i2469[8]
  return i2468
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i2470 = root || request.c( 'TMPro.KerningTable' )
  var i2471 = data
  var i2473 = i2471[0]
  var i2472 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i2473.length; i += 1) {
    i2472.add(request.d('TMPro.KerningPair', i2473[i + 0]));
  }
  i2470.kerningPairs = i2472
  return i2470
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i2476 = root || request.c( 'TMPro.KerningPair' )
  var i2477 = data
  i2476.xOffset = i2477[0]
  i2476.m_FirstGlyph = i2477[1]
  i2476.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2477[2], i2476.m_FirstGlyphAdjustments)
  i2476.m_SecondGlyph = i2477[3]
  i2476.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2477[4], i2476.m_SecondGlyphAdjustments)
  i2476.m_IgnoreSpacingAdjustments = !!i2477[5]
  return i2476
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i2478 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i2479 = data
  i2478.m_FaceIndex = i2479[0]
  i2478.m_FamilyName = i2479[1]
  i2478.m_StyleName = i2479[2]
  i2478.m_PointSize = i2479[3]
  i2478.m_Scale = i2479[4]
  i2478.m_UnitsPerEM = i2479[5]
  i2478.m_LineHeight = i2479[6]
  i2478.m_AscentLine = i2479[7]
  i2478.m_CapLine = i2479[8]
  i2478.m_MeanLine = i2479[9]
  i2478.m_Baseline = i2479[10]
  i2478.m_DescentLine = i2479[11]
  i2478.m_SuperscriptOffset = i2479[12]
  i2478.m_SuperscriptSize = i2479[13]
  i2478.m_SubscriptOffset = i2479[14]
  i2478.m_SubscriptSize = i2479[15]
  i2478.m_UnderlineOffset = i2479[16]
  i2478.m_UnderlineThickness = i2479[17]
  i2478.m_StrikethroughOffset = i2479[18]
  i2478.m_StrikethroughThickness = i2479[19]
  i2478.m_TabWidth = i2479[20]
  return i2478
}

Deserializers["PlayerCardData"] = function (request, data, root) {
  var i2480 = root || request.c( 'PlayerCardData' )
  var i2481 = data
  i2480.nationality = i2481[0]
  request.r(i2481[1], i2481[2], 0, i2480, 'playerSprite')
  request.r(i2481[3], i2481[4], 0, i2480, 'flagSprite')
  return i2480
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i2482 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i2483 = data
  i2482.useSafeMode = !!i2483[0]
  i2482.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i2483[1], i2482.safeModeOptions)
  i2482.timeScale = i2483[2]
  i2482.unscaledTimeScale = i2483[3]
  i2482.useSmoothDeltaTime = !!i2483[4]
  i2482.maxSmoothUnscaledTime = i2483[5]
  i2482.rewindCallbackMode = i2483[6]
  i2482.showUnityEditorReport = !!i2483[7]
  i2482.logBehaviour = i2483[8]
  i2482.drawGizmos = !!i2483[9]
  i2482.defaultRecyclable = !!i2483[10]
  i2482.defaultAutoPlay = i2483[11]
  i2482.defaultUpdateType = i2483[12]
  i2482.defaultTimeScaleIndependent = !!i2483[13]
  i2482.defaultEaseType = i2483[14]
  i2482.defaultEaseOvershootOrAmplitude = i2483[15]
  i2482.defaultEasePeriod = i2483[16]
  i2482.defaultAutoKill = !!i2483[17]
  i2482.defaultLoopType = i2483[18]
  i2482.debugMode = !!i2483[19]
  i2482.debugStoreTargetId = !!i2483[20]
  i2482.showPreviewPanel = !!i2483[21]
  i2482.storeSettingsLocation = i2483[22]
  i2482.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i2483[23], i2482.modules)
  i2482.createASMDEF = !!i2483[24]
  i2482.showPlayingTweens = !!i2483[25]
  i2482.showPausedTweens = !!i2483[26]
  return i2482
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i2484 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i2485 = data
  i2484.logBehaviour = i2485[0]
  i2484.nestedTweenFailureBehaviour = i2485[1]
  return i2484
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i2486 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i2487 = data
  i2486.showPanel = !!i2487[0]
  i2486.audioEnabled = !!i2487[1]
  i2486.physicsEnabled = !!i2487[2]
  i2486.physics2DEnabled = !!i2487[3]
  i2486.spriteEnabled = !!i2487[4]
  i2486.uiEnabled = !!i2487[5]
  i2486.uiToolkitEnabled = !!i2487[6]
  i2486.textMeshProEnabled = !!i2487[7]
  i2486.tk2DEnabled = !!i2487[8]
  i2486.deAudioEnabled = !!i2487[9]
  i2486.deUnityExtendedEnabled = !!i2487[10]
  i2486.epoOutlineEnabled = !!i2487[11]
  return i2486
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i2488 = root || request.c( 'TMPro.TMP_Settings' )
  var i2489 = data
  i2488.assetVersion = i2489[0]
  i2488.m_TextWrappingMode = i2489[1]
  i2488.m_enableKerning = !!i2489[2]
  var i2491 = i2489[3]
  var i2490 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i2491.length; i += 1) {
    i2490.add(i2491[i + 0]);
  }
  i2488.m_ActiveFontFeatures = i2490
  i2488.m_enableExtraPadding = !!i2489[4]
  i2488.m_enableTintAllSprites = !!i2489[5]
  i2488.m_enableParseEscapeCharacters = !!i2489[6]
  i2488.m_EnableRaycastTarget = !!i2489[7]
  i2488.m_GetFontFeaturesAtRuntime = !!i2489[8]
  i2488.m_missingGlyphCharacter = i2489[9]
  i2488.m_ClearDynamicDataOnBuild = !!i2489[10]
  i2488.m_warningsDisabled = !!i2489[11]
  request.r(i2489[12], i2489[13], 0, i2488, 'm_defaultFontAsset')
  i2488.m_defaultFontAssetPath = i2489[14]
  i2488.m_defaultFontSize = i2489[15]
  i2488.m_defaultAutoSizeMinRatio = i2489[16]
  i2488.m_defaultAutoSizeMaxRatio = i2489[17]
  i2488.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i2489[18], i2489[19] )
  i2488.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i2489[20], i2489[21] )
  i2488.m_autoSizeTextContainer = !!i2489[22]
  i2488.m_IsTextObjectScaleStatic = !!i2489[23]
  var i2493 = i2489[24]
  var i2492 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2493.length; i += 2) {
  request.r(i2493[i + 0], i2493[i + 1], 1, i2492, '')
  }
  i2488.m_fallbackFontAssets = i2492
  i2488.m_matchMaterialPreset = !!i2489[25]
  i2488.m_HideSubTextObjects = !!i2489[26]
  request.r(i2489[27], i2489[28], 0, i2488, 'm_defaultSpriteAsset')
  i2488.m_defaultSpriteAssetPath = i2489[29]
  i2488.m_enableEmojiSupport = !!i2489[30]
  i2488.m_MissingCharacterSpriteUnicode = i2489[31]
  var i2495 = i2489[32]
  var i2494 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i2495.length; i += 2) {
  request.r(i2495[i + 0], i2495[i + 1], 1, i2494, '')
  }
  i2488.m_EmojiFallbackTextAssets = i2494
  i2488.m_defaultColorGradientPresetsPath = i2489[33]
  request.r(i2489[34], i2489[35], 0, i2488, 'm_defaultStyleSheet')
  i2488.m_StyleSheetsResourcePath = i2489[36]
  request.r(i2489[37], i2489[38], 0, i2488, 'm_leadingCharacters')
  request.r(i2489[39], i2489[40], 0, i2488, 'm_followingCharacters')
  i2488.m_UseModernHangulLineBreakingRules = !!i2489[41]
  return i2488
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i2498 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i2499 = data
  request.r(i2499[0], i2499[1], 0, i2498, 'spriteSheet')
  var i2501 = i2499[2]
  var i2500 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i2501.length; i += 1) {
    i2500.add(request.d('TMPro.TMP_Sprite', i2501[i + 0]));
  }
  i2498.spriteInfoList = i2500
  var i2503 = i2499[3]
  var i2502 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i2503.length; i += 2) {
  request.r(i2503[i + 0], i2503[i + 1], 1, i2502, '')
  }
  i2498.fallbackSpriteAssets = i2502
  var i2505 = i2499[4]
  var i2504 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i2505.length; i += 1) {
    i2504.add(request.d('TMPro.TMP_SpriteCharacter', i2505[i + 0]));
  }
  i2498.m_SpriteCharacterTable = i2504
  var i2507 = i2499[5]
  var i2506 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i2507.length; i += 1) {
    i2506.add(request.d('TMPro.TMP_SpriteGlyph', i2507[i + 0]));
  }
  i2498.m_GlyphTable = i2506
  i2498.m_Version = i2499[6]
  i2498.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2499[7], i2498.m_FaceInfo)
  request.r(i2499[8], i2499[9], 0, i2498, 'm_Material')
  return i2498
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i2510 = root || request.c( 'TMPro.TMP_Sprite' )
  var i2511 = data
  i2510.name = i2511[0]
  i2510.hashCode = i2511[1]
  i2510.unicode = i2511[2]
  i2510.pivot = new pc.Vec2( i2511[3], i2511[4] )
  request.r(i2511[5], i2511[6], 0, i2510, 'sprite')
  i2510.id = i2511[7]
  i2510.x = i2511[8]
  i2510.y = i2511[9]
  i2510.width = i2511[10]
  i2510.height = i2511[11]
  i2510.xOffset = i2511[12]
  i2510.yOffset = i2511[13]
  i2510.xAdvance = i2511[14]
  i2510.scale = i2511[15]
  return i2510
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i2516 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i2517 = data
  i2516.m_Name = i2517[0]
  i2516.m_ElementType = i2517[1]
  i2516.m_Unicode = i2517[2]
  i2516.m_GlyphIndex = i2517[3]
  i2516.m_Scale = i2517[4]
  return i2516
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i2520 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i2521 = data
  request.r(i2521[0], i2521[1], 0, i2520, 'sprite')
  i2520.m_Index = i2521[2]
  i2520.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2521[3], i2520.m_Metrics)
  i2520.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2521[4], i2520.m_GlyphRect)
  i2520.m_Scale = i2521[5]
  i2520.m_AtlasIndex = i2521[6]
  i2520.m_ClassDefinitionType = i2521[7]
  return i2520
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i2522 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i2523 = data
  var i2525 = i2523[0]
  var i2524 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i2525.length; i += 1) {
    i2524.add(request.d('TMPro.TMP_Style', i2525[i + 0]));
  }
  i2522.m_StyleList = i2524
  return i2522
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i2528 = root || request.c( 'TMPro.TMP_Style' )
  var i2529 = data
  i2528.m_Name = i2529[0]
  i2528.m_HashCode = i2529[1]
  i2528.m_OpeningDefinition = i2529[2]
  i2528.m_ClosingDefinition = i2529[3]
  i2528.m_OpeningTagArray = i2529[4]
  i2528.m_ClosingTagArray = i2529[5]
  return i2528
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i2530 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i2531 = data
  var i2533 = i2531[0]
  var i2532 = []
  for(var i = 0; i < i2533.length; i += 1) {
    i2532.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i2533[i + 0]) );
  }
  i2530.files = i2532
  i2530.componentToPrefabIds = i2531[1]
  return i2530
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i2536 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i2537 = data
  i2536.path = i2537[0]
  request.r(i2537[1], i2537[2], 0, i2536, 'unityObject')
  return i2536
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i2538 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i2539 = data
  var i2541 = i2539[0]
  var i2540 = []
  for(var i = 0; i < i2541.length; i += 1) {
    i2540.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i2541[i + 0]) );
  }
  i2538.scriptsExecutionOrder = i2540
  var i2543 = i2539[1]
  var i2542 = []
  for(var i = 0; i < i2543.length; i += 1) {
    i2542.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i2543[i + 0]) );
  }
  i2538.sortingLayers = i2542
  var i2545 = i2539[2]
  var i2544 = []
  for(var i = 0; i < i2545.length; i += 1) {
    i2544.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i2545[i + 0]) );
  }
  i2538.cullingLayers = i2544
  i2538.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i2539[3], i2538.timeSettings)
  i2538.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i2539[4], i2538.physicsSettings)
  i2538.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i2539[5], i2538.physics2DSettings)
  i2538.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2539[6], i2538.qualitySettings)
  i2538.enableRealtimeShadows = !!i2539[7]
  i2538.enableAutoInstancing = !!i2539[8]
  i2538.enableStaticBatching = !!i2539[9]
  i2538.enableDynamicBatching = !!i2539[10]
  i2538.lightmapEncodingQuality = i2539[11]
  i2538.desiredColorSpace = i2539[12]
  var i2547 = i2539[13]
  var i2546 = []
  for(var i = 0; i < i2547.length; i += 1) {
    i2546.push( i2547[i + 0] );
  }
  i2538.allTags = i2546
  return i2538
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i2550 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i2551 = data
  i2550.name = i2551[0]
  i2550.value = i2551[1]
  return i2550
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i2554 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i2555 = data
  i2554.id = i2555[0]
  i2554.name = i2555[1]
  i2554.value = i2555[2]
  return i2554
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i2558 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i2559 = data
  i2558.id = i2559[0]
  i2558.name = i2559[1]
  return i2558
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i2560 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i2561 = data
  i2560.fixedDeltaTime = i2561[0]
  i2560.maximumDeltaTime = i2561[1]
  i2560.timeScale = i2561[2]
  i2560.maximumParticleTimestep = i2561[3]
  return i2560
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i2562 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i2563 = data
  i2562.gravity = new pc.Vec3( i2563[0], i2563[1], i2563[2] )
  i2562.defaultSolverIterations = i2563[3]
  i2562.bounceThreshold = i2563[4]
  i2562.autoSyncTransforms = !!i2563[5]
  i2562.autoSimulation = !!i2563[6]
  var i2565 = i2563[7]
  var i2564 = []
  for(var i = 0; i < i2565.length; i += 1) {
    i2564.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i2565[i + 0]) );
  }
  i2562.collisionMatrix = i2564
  return i2562
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i2568 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i2569 = data
  i2568.enabled = !!i2569[0]
  i2568.layerId = i2569[1]
  i2568.otherLayerId = i2569[2]
  return i2568
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i2570 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i2571 = data
  request.r(i2571[0], i2571[1], 0, i2570, 'material')
  i2570.gravity = new pc.Vec2( i2571[2], i2571[3] )
  i2570.positionIterations = i2571[4]
  i2570.velocityIterations = i2571[5]
  i2570.velocityThreshold = i2571[6]
  i2570.maxLinearCorrection = i2571[7]
  i2570.maxAngularCorrection = i2571[8]
  i2570.maxTranslationSpeed = i2571[9]
  i2570.maxRotationSpeed = i2571[10]
  i2570.baumgarteScale = i2571[11]
  i2570.baumgarteTOIScale = i2571[12]
  i2570.timeToSleep = i2571[13]
  i2570.linearSleepTolerance = i2571[14]
  i2570.angularSleepTolerance = i2571[15]
  i2570.defaultContactOffset = i2571[16]
  i2570.autoSimulation = !!i2571[17]
  i2570.queriesHitTriggers = !!i2571[18]
  i2570.queriesStartInColliders = !!i2571[19]
  i2570.callbacksOnDisable = !!i2571[20]
  i2570.reuseCollisionCallbacks = !!i2571[21]
  i2570.autoSyncTransforms = !!i2571[22]
  var i2573 = i2571[23]
  var i2572 = []
  for(var i = 0; i < i2573.length; i += 1) {
    i2572.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i2573[i + 0]) );
  }
  i2570.collisionMatrix = i2572
  return i2570
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i2576 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i2577 = data
  i2576.enabled = !!i2577[0]
  i2576.layerId = i2577[1]
  i2576.otherLayerId = i2577[2]
  return i2576
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i2578 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i2579 = data
  var i2581 = i2579[0]
  var i2580 = []
  for(var i = 0; i < i2581.length; i += 1) {
    i2580.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2581[i + 0]) );
  }
  i2578.qualityLevels = i2580
  var i2583 = i2579[1]
  var i2582 = []
  for(var i = 0; i < i2583.length; i += 1) {
    i2582.push( i2583[i + 0] );
  }
  i2578.names = i2582
  i2578.shadows = i2579[2]
  i2578.anisotropicFiltering = i2579[3]
  i2578.antiAliasing = i2579[4]
  i2578.lodBias = i2579[5]
  i2578.shadowCascades = i2579[6]
  i2578.shadowDistance = i2579[7]
  i2578.shadowmaskMode = i2579[8]
  i2578.shadowProjection = i2579[9]
  i2578.shadowResolution = i2579[10]
  i2578.softParticles = !!i2579[11]
  i2578.softVegetation = !!i2579[12]
  i2578.activeColorSpace = i2579[13]
  i2578.desiredColorSpace = i2579[14]
  i2578.masterTextureLimit = i2579[15]
  i2578.maxQueuedFrames = i2579[16]
  i2578.particleRaycastBudget = i2579[17]
  i2578.pixelLightCount = i2579[18]
  i2578.realtimeReflectionProbes = !!i2579[19]
  i2578.shadowCascade2Split = i2579[20]
  i2578.shadowCascade4Split = new pc.Vec3( i2579[21], i2579[22], i2579[23] )
  i2578.streamingMipmapsActive = !!i2579[24]
  i2578.vSyncCount = i2579[25]
  i2578.asyncUploadBufferSize = i2579[26]
  i2578.asyncUploadTimeSlice = i2579[27]
  i2578.billboardsFaceCameraPosition = !!i2579[28]
  i2578.shadowNearPlaneOffset = i2579[29]
  i2578.streamingMipmapsMemoryBudget = i2579[30]
  i2578.maximumLODLevel = i2579[31]
  i2578.streamingMipmapsAddAllCameras = !!i2579[32]
  i2578.streamingMipmapsMaxLevelReduction = i2579[33]
  i2578.streamingMipmapsRenderersPerFrame = i2579[34]
  i2578.resolutionScalingFixedDPIFactor = i2579[35]
  i2578.streamingMipmapsMaxFileIORequests = i2579[36]
  i2578.currentQualityLevel = i2579[37]
  return i2578
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i2588 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i2589 = data
  i2588.weight = i2589[0]
  i2588.vertices = i2589[1]
  i2588.normals = i2589[2]
  i2588.tangents = i2589[3]
  return i2588
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i2592 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i2593 = data
  i2592.mode = i2593[0]
  i2592.parameter = i2593[1]
  i2592.threshold = i2593[2]
  return i2592
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i2594 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i2595 = data
  i2594.m_XCoordinate = i2595[0]
  i2594.m_YCoordinate = i2595[1]
  return i2594
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i2596 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i2597 = data
  i2596.m_XPositionAdjustment = i2597[0]
  i2596.m_YPositionAdjustment = i2597[1]
  return i2596
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i2598 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i2599 = data
  i2598.xPlacement = i2599[0]
  i2598.yPlacement = i2599[1]
  i2598.xAdvance = i2599[2]
  i2598.yAdvance = i2599[3]
  return i2598
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D":{"usedByComposite":0,"autoTiling":1,"points":2,"enabled":3,"isTrigger":4,"usedByEffector":5,"density":6,"offset":7,"material":9},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.PhysicsMaterial2D":{"name":0,"bounciness":1,"friction":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2}}

Deserializers.requiredComponents = {"53":[54],"55":[54],"56":[54],"57":[54],"58":[54],"59":[54],"60":[61],"62":[2],"63":[64],"65":[64],"66":[64],"67":[64],"68":[64],"69":[64],"70":[39],"71":[39],"72":[39],"73":[39],"74":[39],"75":[39],"76":[39],"77":[39],"78":[39],"79":[39],"80":[39],"81":[39],"82":[39],"83":[2],"84":[21],"85":[86],"87":[86],"31":[20],"7":[2],"40":[39],"42":[18],"88":[12],"89":[2],"90":[91],"92":[45],"93":[31],"94":[20],"23":[21,20],"35":[20,34],"95":[20],"96":[34,20],"97":[21],"98":[34,20],"99":[20],"100":[101],"102":[101],"103":[101],"104":[20],"105":[20],"33":[31],"36":[34,20],"106":[20],"32":[31],"107":[20],"108":[20],"109":[20],"110":[20],"111":[20],"112":[20],"113":[20],"114":[20],"115":[20],"116":[34,20],"117":[20],"118":[20],"119":[20],"120":[20],"121":[34,20],"122":[20],"123":[45],"124":[45],"46":[45],"125":[45],"126":[2],"127":[2]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.MonoBehaviour","CameraFollow2D","UnityEngine.Transform","AutoCameraFit","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Mesh","UnityEngine.Material","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","MoveBetweenPoints","ScreenHeightPositionAnchor","UnityEngine.BoxCollider2D","ClickToStore","UnityEngine.RectTransform","UnityEngine.MeshRenderer","UnityEngine.EventSystems.UIBehaviour","TMPro.TextMeshPro","TMPro.TMP_FontAsset","UnityEngine.MeshFilter","PlayerCardUIManager","UnityEngine.GameObject","Ply_SoundManager","UnityEngine.AudioSource","UnityEngine.AudioClip","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","TMPro.TextMeshProUGUI","UnityEngine.UI.Image","UnityEngine.PolygonCollider2D","UnityEngine.PhysicsMaterial2D","UnityEngine.Rigidbody2D","BatStrikeController","CupCollision","SlotTrigger","PlayerCardData","HideOnFirstClick","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.Font","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.InputSystem.UI.InputSystemUIInputModule","UnityEngine.InputSystem.UI.TrackedDeviceRaycaster","TMPro.TextContainer","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.38f1";

Deserializers.productName = "PLY_MiniSoccer";

Deserializers.lunaInitializationTime = "07/15/2026 03:53:54";

Deserializers.lunaDaysRunning = "0.9";

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

Deserializers.buildID = "9dd3986f-421f-43c3-b631-a46b686da38e";

Deserializers.runtimeInitializeOnLoadInfos = [[["Unity","Services","Core","Internal","UnityServicesInitializer","EnableServicesInitializationAsync"],["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["DG","Tweening","DOTween","RuntimeOnLoad"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["Unity","Services","Core","Registration","CorePackageInitializer","InitializeOnLoad"],["Unity","Services","Core","Internal","TaskAsyncOperation","SetScheduler"],["Unity","Services","Core","Environments","Client","Scheduler","EngineStateHelper","Init"],["Unity","Services","Core","Environments","Client","Scheduler","ThreadHelper","Init"],["Ua2CoreInitializeCallback","Register"],["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["Unity","AI","Navigation","NavMeshLink","ClearTrackedList"],["Unity","AI","Navigation","NavMeshSurface","ClearNavMeshSurfaces"],["Unity","AI","Navigation","NavMeshModifierVolume","ClearNavMeshModifiers"],["Unity","AI","Navigation","NavMeshModifier","ClearNavMeshModifiers"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["Unity","Services","Core","Internal","UnityServicesInitializer","CreateStaticInstance"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[["Unity","Services","Core","Environments","Client","Http","JsonHelpers","RegisterTypesForAOT"]],[["Unity","Services","Core","UnityThreadUtils","CaptureUnityThreadInfo"],["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

