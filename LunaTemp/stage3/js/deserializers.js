var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i1932 = root || request.c( 'UnityEngine.JointSpring' )
  var i1933 = data
  i1932.spring = i1933[0]
  i1932.damper = i1933[1]
  i1932.targetPosition = i1933[2]
  return i1932
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i1934 = root || request.c( 'UnityEngine.JointMotor' )
  var i1935 = data
  i1934.m_TargetVelocity = i1935[0]
  i1934.m_Force = i1935[1]
  i1934.m_FreeSpin = i1935[2]
  return i1934
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i1936 = root || request.c( 'UnityEngine.JointLimits' )
  var i1937 = data
  i1936.m_Min = i1937[0]
  i1936.m_Max = i1937[1]
  i1936.m_Bounciness = i1937[2]
  i1936.m_BounceMinVelocity = i1937[3]
  i1936.m_ContactDistance = i1937[4]
  i1936.minBounce = i1937[5]
  i1936.maxBounce = i1937[6]
  return i1936
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i1938 = root || request.c( 'UnityEngine.JointDrive' )
  var i1939 = data
  i1938.m_PositionSpring = i1939[0]
  i1938.m_PositionDamper = i1939[1]
  i1938.m_MaximumForce = i1939[2]
  i1938.m_UseAcceleration = i1939[3]
  return i1938
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i1940 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i1941 = data
  i1940.m_Spring = i1941[0]
  i1940.m_Damper = i1941[1]
  return i1940
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i1942 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i1943 = data
  i1942.m_Limit = i1943[0]
  i1942.m_Bounciness = i1943[1]
  i1942.m_ContactDistance = i1943[2]
  return i1942
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i1944 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i1945 = data
  i1944.m_ExtremumSlip = i1945[0]
  i1944.m_ExtremumValue = i1945[1]
  i1944.m_AsymptoteSlip = i1945[2]
  i1944.m_AsymptoteValue = i1945[3]
  i1944.m_Stiffness = i1945[4]
  return i1944
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i1946 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i1947 = data
  i1946.m_LowerAngle = i1947[0]
  i1946.m_UpperAngle = i1947[1]
  return i1946
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i1948 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i1949 = data
  i1948.m_MotorSpeed = i1949[0]
  i1948.m_MaximumMotorTorque = i1949[1]
  return i1948
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i1950 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i1951 = data
  i1950.m_DampingRatio = i1951[0]
  i1950.m_Frequency = i1951[1]
  i1950.m_Angle = i1951[2]
  return i1950
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i1952 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i1953 = data
  i1952.m_LowerTranslation = i1953[0]
  i1952.m_UpperTranslation = i1953[1]
  return i1952
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i1954 = root || new pc.UnityMaterial()
  var i1955 = data
  i1954.name = i1955[0]
  request.r(i1955[1], i1955[2], 0, i1954, 'shader')
  i1954.renderQueue = i1955[3]
  i1954.enableInstancing = !!i1955[4]
  var i1957 = i1955[5]
  var i1956 = []
  for(var i = 0; i < i1957.length; i += 1) {
    i1956.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i1957[i + 0]) );
  }
  i1954.floatParameters = i1956
  var i1959 = i1955[6]
  var i1958 = []
  for(var i = 0; i < i1959.length; i += 1) {
    i1958.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i1959[i + 0]) );
  }
  i1954.colorParameters = i1958
  var i1961 = i1955[7]
  var i1960 = []
  for(var i = 0; i < i1961.length; i += 1) {
    i1960.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i1961[i + 0]) );
  }
  i1954.vectorParameters = i1960
  var i1963 = i1955[8]
  var i1962 = []
  for(var i = 0; i < i1963.length; i += 1) {
    i1962.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i1963[i + 0]) );
  }
  i1954.textureParameters = i1962
  var i1965 = i1955[9]
  var i1964 = []
  for(var i = 0; i < i1965.length; i += 1) {
    i1964.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i1965[i + 0]) );
  }
  i1954.materialFlags = i1964
  return i1954
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i1968 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i1969 = data
  i1968.name = i1969[0]
  i1968.value = i1969[1]
  return i1968
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i1972 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i1973 = data
  i1972.name = i1973[0]
  i1972.value = new pc.Color(i1973[1], i1973[2], i1973[3], i1973[4])
  return i1972
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i1976 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i1977 = data
  i1976.name = i1977[0]
  i1976.value = new pc.Vec4( i1977[1], i1977[2], i1977[3], i1977[4] )
  return i1976
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i1980 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i1981 = data
  i1980.name = i1981[0]
  request.r(i1981[1], i1981[2], 0, i1980, 'value')
  return i1980
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i1984 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i1985 = data
  i1984.name = i1985[0]
  i1984.enabled = !!i1985[1]
  return i1984
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i1986 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i1987 = data
  i1986.name = i1987[0]
  i1986.width = i1987[1]
  i1986.height = i1987[2]
  i1986.mipmapCount = i1987[3]
  i1986.anisoLevel = i1987[4]
  i1986.filterMode = i1987[5]
  i1986.hdr = !!i1987[6]
  i1986.format = i1987[7]
  i1986.wrapMode = i1987[8]
  i1986.alphaIsTransparency = !!i1987[9]
  i1986.alphaSource = i1987[10]
  i1986.graphicsFormat = i1987[11]
  i1986.sRGBTexture = !!i1987[12]
  i1986.desiredColorSpace = i1987[13]
  i1986.wrapU = i1987[14]
  i1986.wrapV = i1987[15]
  return i1986
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i1988 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i1989 = data
  i1988.name = i1989[0]
  i1988.halfPrecision = !!i1989[1]
  i1988.useSimplification = !!i1989[2]
  i1988.useUInt32IndexFormat = !!i1989[3]
  i1988.vertexCount = i1989[4]
  i1988.aabb = i1989[5]
  var i1991 = i1989[6]
  var i1990 = []
  for(var i = 0; i < i1991.length; i += 1) {
    i1990.push( !!i1991[i + 0] );
  }
  i1988.streams = i1990
  i1988.vertices = i1989[7]
  var i1993 = i1989[8]
  var i1992 = []
  for(var i = 0; i < i1993.length; i += 1) {
    i1992.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i1993[i + 0]) );
  }
  i1988.subMeshes = i1992
  var i1995 = i1989[9]
  var i1994 = []
  for(var i = 0; i < i1995.length; i += 16) {
    i1994.push( new pc.Mat4().setData(i1995[i + 0], i1995[i + 1], i1995[i + 2], i1995[i + 3],  i1995[i + 4], i1995[i + 5], i1995[i + 6], i1995[i + 7],  i1995[i + 8], i1995[i + 9], i1995[i + 10], i1995[i + 11],  i1995[i + 12], i1995[i + 13], i1995[i + 14], i1995[i + 15]) );
  }
  i1988.bindposes = i1994
  var i1997 = i1989[10]
  var i1996 = []
  for(var i = 0; i < i1997.length; i += 1) {
    i1996.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i1997[i + 0]) );
  }
  i1988.blendShapes = i1996
  return i1988
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i2002 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i2003 = data
  i2002.triangles = i2003[0]
  return i2002
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i2008 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i2009 = data
  i2008.name = i2009[0]
  var i2011 = i2009[1]
  var i2010 = []
  for(var i = 0; i < i2011.length; i += 1) {
    i2010.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i2011[i + 0]) );
  }
  i2008.frames = i2010
  return i2008
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i2012 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i2013 = data
  i2012.name = i2013[0]
  i2012.index = i2013[1]
  i2012.startup = !!i2013[2]
  return i2012
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i2014 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i2015 = data
  i2014.aspect = i2015[0]
  i2014.orthographic = !!i2015[1]
  i2014.orthographicSize = i2015[2]
  i2014.backgroundColor = new pc.Color(i2015[3], i2015[4], i2015[5], i2015[6])
  i2014.nearClipPlane = i2015[7]
  i2014.farClipPlane = i2015[8]
  i2014.fieldOfView = i2015[9]
  i2014.depth = i2015[10]
  i2014.clearFlags = i2015[11]
  i2014.cullingMask = i2015[12]
  i2014.rect = i2015[13]
  request.r(i2015[14], i2015[15], 0, i2014, 'targetTexture')
  i2014.usePhysicalProperties = !!i2015[16]
  i2014.focalLength = i2015[17]
  i2014.sensorSize = new pc.Vec2( i2015[18], i2015[19] )
  i2014.lensShift = new pc.Vec2( i2015[20], i2015[21] )
  i2014.gateFit = i2015[22]
  i2014.commandBufferCount = i2015[23]
  i2014.cameraType = i2015[24]
  i2014.enabled = !!i2015[25]
  return i2014
}

Deserializers["CameraFollow2D"] = function (request, data, root) {
  var i2016 = root || request.c( 'CameraFollow2D' )
  var i2017 = data
  request.r(i2017[0], i2017[1], 0, i2016, 'target')
  i2016.smoothSpeed = i2017[2]
  i2016.offset = new pc.Vec3( i2017[3], i2017[4], i2017[5] )
  i2016.followY = !!i2017[6]
  return i2016
}

Deserializers["AutoCameraFit"] = function (request, data, root) {
  var i2018 = root || request.c( 'AutoCameraFit' )
  var i2019 = data
  request.r(i2019[0], i2019[1], 0, i2018, 'tallScreenObject')
  i2018.tallScreenRatioThreshold = i2019[2]
  i2018.tallScreenYOffset = i2019[3]
  request.r(i2019[4], i2019[5], 0, i2018, 'canvasBtn')
  request.r(i2019[6], i2019[7], 0, i2018, 'targetArea')
  i2018.paddingLandscape = i2019[8]
  i2018.paddingPortrait = i2019[9]
  i2018.extraPaddingSmallScreen = i2019[10]
  i2018.smallScreenThreshold = i2019[11]
  i2018.autoUpdateOnResize = !!i2019[12]
  i2018.adjustInEditMode = !!i2019[13]
  return i2018
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i2020 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i2021 = data
  i2020.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i2021[0], i2020.main)
  i2020.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i2021[1], i2020.colorBySpeed)
  i2020.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i2021[2], i2020.colorOverLifetime)
  i2020.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i2021[3], i2020.emission)
  i2020.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i2021[4], i2020.rotationBySpeed)
  i2020.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i2021[5], i2020.rotationOverLifetime)
  i2020.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i2021[6], i2020.shape)
  i2020.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i2021[7], i2020.sizeBySpeed)
  i2020.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i2021[8], i2020.sizeOverLifetime)
  i2020.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i2021[9], i2020.textureSheetAnimation)
  i2020.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i2021[10], i2020.velocityOverLifetime)
  i2020.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i2021[11], i2020.noise)
  i2020.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i2021[12], i2020.inheritVelocity)
  i2020.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i2021[13], i2020.forceOverLifetime)
  i2020.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i2021[14], i2020.limitVelocityOverLifetime)
  i2020.useAutoRandomSeed = !!i2021[15]
  i2020.randomSeed = i2021[16]
  return i2020
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i2022 = root || new pc.ParticleSystemMain()
  var i2023 = data
  i2022.duration = i2023[0]
  i2022.loop = !!i2023[1]
  i2022.prewarm = !!i2023[2]
  i2022.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2023[3], i2022.startDelay)
  i2022.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2023[4], i2022.startLifetime)
  i2022.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2023[5], i2022.startSpeed)
  i2022.startSize3D = !!i2023[6]
  i2022.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2023[7], i2022.startSizeX)
  i2022.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2023[8], i2022.startSizeY)
  i2022.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2023[9], i2022.startSizeZ)
  i2022.startRotation3D = !!i2023[10]
  i2022.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2023[11], i2022.startRotationX)
  i2022.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2023[12], i2022.startRotationY)
  i2022.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2023[13], i2022.startRotationZ)
  i2022.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2023[14], i2022.startColor)
  i2022.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2023[15], i2022.gravityModifier)
  i2022.simulationSpace = i2023[16]
  request.r(i2023[17], i2023[18], 0, i2022, 'customSimulationSpace')
  i2022.simulationSpeed = i2023[19]
  i2022.useUnscaledTime = !!i2023[20]
  i2022.scalingMode = i2023[21]
  i2022.playOnAwake = !!i2023[22]
  i2022.maxParticles = i2023[23]
  i2022.emitterVelocityMode = i2023[24]
  i2022.stopAction = i2023[25]
  return i2022
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i2024 = root || new pc.MinMaxCurve()
  var i2025 = data
  i2024.mode = i2025[0]
  i2024.curveMin = new pc.AnimationCurve( { keys_flow: i2025[1] } )
  i2024.curveMax = new pc.AnimationCurve( { keys_flow: i2025[2] } )
  i2024.curveMultiplier = i2025[3]
  i2024.constantMin = i2025[4]
  i2024.constantMax = i2025[5]
  return i2024
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i2026 = root || new pc.MinMaxGradient()
  var i2027 = data
  i2026.mode = i2027[0]
  i2026.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2027[1], i2026.gradientMin)
  i2026.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2027[2], i2026.gradientMax)
  i2026.colorMin = new pc.Color(i2027[3], i2027[4], i2027[5], i2027[6])
  i2026.colorMax = new pc.Color(i2027[7], i2027[8], i2027[9], i2027[10])
  return i2026
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i2028 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i2029 = data
  i2028.mode = i2029[0]
  var i2031 = i2029[1]
  var i2030 = []
  for(var i = 0; i < i2031.length; i += 1) {
    i2030.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i2031[i + 0]) );
  }
  i2028.colorKeys = i2030
  var i2033 = i2029[2]
  var i2032 = []
  for(var i = 0; i < i2033.length; i += 1) {
    i2032.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i2033[i + 0]) );
  }
  i2028.alphaKeys = i2032
  return i2028
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i2034 = root || new pc.ParticleSystemColorBySpeed()
  var i2035 = data
  i2034.enabled = !!i2035[0]
  i2034.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2035[1], i2034.color)
  i2034.range = new pc.Vec2( i2035[2], i2035[3] )
  return i2034
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i2038 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i2039 = data
  i2038.color = new pc.Color(i2039[0], i2039[1], i2039[2], i2039[3])
  i2038.time = i2039[4]
  return i2038
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i2042 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i2043 = data
  i2042.alpha = i2043[0]
  i2042.time = i2043[1]
  return i2042
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i2044 = root || new pc.ParticleSystemColorOverLifetime()
  var i2045 = data
  i2044.enabled = !!i2045[0]
  i2044.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2045[1], i2044.color)
  return i2044
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i2046 = root || new pc.ParticleSystemEmitter()
  var i2047 = data
  i2046.enabled = !!i2047[0]
  i2046.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2047[1], i2046.rateOverTime)
  i2046.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2047[2], i2046.rateOverDistance)
  var i2049 = i2047[3]
  var i2048 = []
  for(var i = 0; i < i2049.length; i += 1) {
    i2048.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i2049[i + 0]) );
  }
  i2046.bursts = i2048
  return i2046
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i2052 = root || new pc.ParticleSystemBurst()
  var i2053 = data
  i2052.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2053[0], i2052.count)
  i2052.cycleCount = i2053[1]
  i2052.minCount = i2053[2]
  i2052.maxCount = i2053[3]
  i2052.repeatInterval = i2053[4]
  i2052.time = i2053[5]
  return i2052
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i2054 = root || new pc.ParticleSystemRotationBySpeed()
  var i2055 = data
  i2054.enabled = !!i2055[0]
  i2054.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2055[1], i2054.x)
  i2054.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2055[2], i2054.y)
  i2054.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2055[3], i2054.z)
  i2054.separateAxes = !!i2055[4]
  i2054.range = new pc.Vec2( i2055[5], i2055[6] )
  return i2054
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i2056 = root || new pc.ParticleSystemRotationOverLifetime()
  var i2057 = data
  i2056.enabled = !!i2057[0]
  i2056.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2057[1], i2056.x)
  i2056.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2057[2], i2056.y)
  i2056.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2057[3], i2056.z)
  i2056.separateAxes = !!i2057[4]
  return i2056
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i2058 = root || new pc.ParticleSystemShape()
  var i2059 = data
  i2058.enabled = !!i2059[0]
  i2058.shapeType = i2059[1]
  i2058.randomDirectionAmount = i2059[2]
  i2058.sphericalDirectionAmount = i2059[3]
  i2058.randomPositionAmount = i2059[4]
  i2058.alignToDirection = !!i2059[5]
  i2058.radius = i2059[6]
  i2058.radiusMode = i2059[7]
  i2058.radiusSpread = i2059[8]
  i2058.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2059[9], i2058.radiusSpeed)
  i2058.radiusThickness = i2059[10]
  i2058.angle = i2059[11]
  i2058.length = i2059[12]
  i2058.boxThickness = new pc.Vec3( i2059[13], i2059[14], i2059[15] )
  i2058.meshShapeType = i2059[16]
  request.r(i2059[17], i2059[18], 0, i2058, 'mesh')
  request.r(i2059[19], i2059[20], 0, i2058, 'meshRenderer')
  request.r(i2059[21], i2059[22], 0, i2058, 'skinnedMeshRenderer')
  i2058.useMeshMaterialIndex = !!i2059[23]
  i2058.meshMaterialIndex = i2059[24]
  i2058.useMeshColors = !!i2059[25]
  i2058.normalOffset = i2059[26]
  i2058.arc = i2059[27]
  i2058.arcMode = i2059[28]
  i2058.arcSpread = i2059[29]
  i2058.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2059[30], i2058.arcSpeed)
  i2058.donutRadius = i2059[31]
  i2058.position = new pc.Vec3( i2059[32], i2059[33], i2059[34] )
  i2058.rotation = new pc.Vec3( i2059[35], i2059[36], i2059[37] )
  i2058.scale = new pc.Vec3( i2059[38], i2059[39], i2059[40] )
  return i2058
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i2060 = root || new pc.ParticleSystemSizeBySpeed()
  var i2061 = data
  i2060.enabled = !!i2061[0]
  i2060.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2061[1], i2060.x)
  i2060.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2061[2], i2060.y)
  i2060.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2061[3], i2060.z)
  i2060.separateAxes = !!i2061[4]
  i2060.range = new pc.Vec2( i2061[5], i2061[6] )
  return i2060
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i2062 = root || new pc.ParticleSystemSizeOverLifetime()
  var i2063 = data
  i2062.enabled = !!i2063[0]
  i2062.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2063[1], i2062.x)
  i2062.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2063[2], i2062.y)
  i2062.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2063[3], i2062.z)
  i2062.separateAxes = !!i2063[4]
  return i2062
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i2064 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i2065 = data
  i2064.enabled = !!i2065[0]
  i2064.mode = i2065[1]
  i2064.animation = i2065[2]
  i2064.numTilesX = i2065[3]
  i2064.numTilesY = i2065[4]
  i2064.useRandomRow = !!i2065[5]
  i2064.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2065[6], i2064.frameOverTime)
  i2064.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2065[7], i2064.startFrame)
  i2064.cycleCount = i2065[8]
  i2064.rowIndex = i2065[9]
  i2064.flipU = i2065[10]
  i2064.flipV = i2065[11]
  i2064.spriteCount = i2065[12]
  var i2067 = i2065[13]
  var i2066 = []
  for(var i = 0; i < i2067.length; i += 2) {
  request.r(i2067[i + 0], i2067[i + 1], 2, i2066, '')
  }
  i2064.sprites = i2066
  return i2064
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i2070 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i2071 = data
  i2070.enabled = !!i2071[0]
  i2070.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2071[1], i2070.x)
  i2070.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2071[2], i2070.y)
  i2070.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2071[3], i2070.z)
  i2070.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2071[4], i2070.radial)
  i2070.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2071[5], i2070.speedModifier)
  i2070.space = i2071[6]
  i2070.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2071[7], i2070.orbitalX)
  i2070.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2071[8], i2070.orbitalY)
  i2070.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2071[9], i2070.orbitalZ)
  i2070.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2071[10], i2070.orbitalOffsetX)
  i2070.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2071[11], i2070.orbitalOffsetY)
  i2070.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2071[12], i2070.orbitalOffsetZ)
  return i2070
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i2072 = root || new pc.ParticleSystemNoise()
  var i2073 = data
  i2072.enabled = !!i2073[0]
  i2072.separateAxes = !!i2073[1]
  i2072.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2073[2], i2072.strengthX)
  i2072.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2073[3], i2072.strengthY)
  i2072.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2073[4], i2072.strengthZ)
  i2072.frequency = i2073[5]
  i2072.damping = !!i2073[6]
  i2072.octaveCount = i2073[7]
  i2072.octaveMultiplier = i2073[8]
  i2072.octaveScale = i2073[9]
  i2072.quality = i2073[10]
  i2072.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2073[11], i2072.scrollSpeed)
  i2072.scrollSpeedMultiplier = i2073[12]
  i2072.remapEnabled = !!i2073[13]
  i2072.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2073[14], i2072.remapX)
  i2072.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2073[15], i2072.remapY)
  i2072.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2073[16], i2072.remapZ)
  i2072.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2073[17], i2072.positionAmount)
  i2072.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2073[18], i2072.rotationAmount)
  i2072.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2073[19], i2072.sizeAmount)
  return i2072
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i2074 = root || new pc.ParticleSystemInheritVelocity()
  var i2075 = data
  i2074.enabled = !!i2075[0]
  i2074.mode = i2075[1]
  i2074.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2075[2], i2074.curve)
  return i2074
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i2076 = root || new pc.ParticleSystemForceOverLifetime()
  var i2077 = data
  i2076.enabled = !!i2077[0]
  i2076.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2077[1], i2076.x)
  i2076.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2077[2], i2076.y)
  i2076.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2077[3], i2076.z)
  i2076.space = i2077[4]
  i2076.randomized = !!i2077[5]
  return i2076
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i2078 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i2079 = data
  i2078.enabled = !!i2079[0]
  i2078.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2079[1], i2078.limit)
  i2078.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2079[2], i2078.limitX)
  i2078.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2079[3], i2078.limitY)
  i2078.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2079[4], i2078.limitZ)
  i2078.dampen = i2079[5]
  i2078.separateAxes = !!i2079[6]
  i2078.space = i2079[7]
  i2078.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2079[8], i2078.drag)
  i2078.multiplyDragByParticleSize = !!i2079[9]
  i2078.multiplyDragByParticleVelocity = !!i2079[10]
  return i2078
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i2080 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i2081 = data
  request.r(i2081[0], i2081[1], 0, i2080, 'mesh')
  i2080.meshCount = i2081[2]
  i2080.activeVertexStreamsCount = i2081[3]
  i2080.alignment = i2081[4]
  i2080.renderMode = i2081[5]
  i2080.sortMode = i2081[6]
  i2080.lengthScale = i2081[7]
  i2080.velocityScale = i2081[8]
  i2080.cameraVelocityScale = i2081[9]
  i2080.normalDirection = i2081[10]
  i2080.sortingFudge = i2081[11]
  i2080.minParticleSize = i2081[12]
  i2080.maxParticleSize = i2081[13]
  i2080.pivot = new pc.Vec3( i2081[14], i2081[15], i2081[16] )
  request.r(i2081[17], i2081[18], 0, i2080, 'trailMaterial')
  i2080.applyActiveColorSpace = !!i2081[19]
  i2080.enabled = !!i2081[20]
  request.r(i2081[21], i2081[22], 0, i2080, 'sharedMaterial')
  var i2083 = i2081[23]
  var i2082 = []
  for(var i = 0; i < i2083.length; i += 2) {
  request.r(i2083[i + 0], i2083[i + 1], 2, i2082, '')
  }
  i2080.sharedMaterials = i2082
  i2080.receiveShadows = !!i2081[24]
  i2080.shadowCastingMode = i2081[25]
  i2080.sortingLayerID = i2081[26]
  i2080.sortingOrder = i2081[27]
  i2080.lightmapIndex = i2081[28]
  i2080.lightmapSceneIndex = i2081[29]
  i2080.lightmapScaleOffset = new pc.Vec4( i2081[30], i2081[31], i2081[32], i2081[33] )
  i2080.lightProbeUsage = i2081[34]
  i2080.reflectionProbeUsage = i2081[35]
  return i2080
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i2086 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i2087 = data
  request.r(i2087[0], i2087[1], 0, i2086, 'clip')
  request.r(i2087[2], i2087[3], 0, i2086, 'outputAudioMixerGroup')
  i2086.playOnAwake = !!i2087[4]
  i2086.loop = !!i2087[5]
  i2086.time = i2087[6]
  i2086.volume = i2087[7]
  i2086.pitch = i2087[8]
  i2086.enabled = !!i2087[9]
  return i2086
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i2088 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i2089 = data
  i2088.name = i2089[0]
  i2088.tagId = i2089[1]
  i2088.enabled = !!i2089[2]
  i2088.isStatic = !!i2089[3]
  i2088.layer = i2089[4]
  return i2088
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i2090 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i2091 = data
  i2090.color = new pc.Color(i2091[0], i2091[1], i2091[2], i2091[3])
  request.r(i2091[4], i2091[5], 0, i2090, 'sprite')
  i2090.flipX = !!i2091[6]
  i2090.flipY = !!i2091[7]
  i2090.drawMode = i2091[8]
  i2090.size = new pc.Vec2( i2091[9], i2091[10] )
  i2090.tileMode = i2091[11]
  i2090.adaptiveModeThreshold = i2091[12]
  i2090.maskInteraction = i2091[13]
  i2090.spriteSortPoint = i2091[14]
  i2090.enabled = !!i2091[15]
  request.r(i2091[16], i2091[17], 0, i2090, 'sharedMaterial')
  var i2093 = i2091[18]
  var i2092 = []
  for(var i = 0; i < i2093.length; i += 2) {
  request.r(i2093[i + 0], i2093[i + 1], 2, i2092, '')
  }
  i2090.sharedMaterials = i2092
  i2090.receiveShadows = !!i2091[19]
  i2090.shadowCastingMode = i2091[20]
  i2090.sortingLayerID = i2091[21]
  i2090.sortingOrder = i2091[22]
  i2090.lightmapIndex = i2091[23]
  i2090.lightmapSceneIndex = i2091[24]
  i2090.lightmapScaleOffset = new pc.Vec4( i2091[25], i2091[26], i2091[27], i2091[28] )
  i2090.lightProbeUsage = i2091[29]
  i2090.reflectionProbeUsage = i2091[30]
  return i2090
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i2094 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i2095 = data
  request.r(i2095[0], i2095[1], 0, i2094, 'animatorController')
  request.r(i2095[2], i2095[3], 0, i2094, 'avatar')
  i2094.updateMode = i2095[4]
  i2094.hasTransformHierarchy = !!i2095[5]
  i2094.applyRootMotion = !!i2095[6]
  var i2097 = i2095[7]
  var i2096 = []
  for(var i = 0; i < i2097.length; i += 2) {
  request.r(i2097[i + 0], i2097[i + 1], 2, i2096, '')
  }
  i2094.humanBones = i2096
  i2094.enabled = !!i2095[8]
  return i2094
}

Deserializers["MoveBetweenPoints"] = function (request, data, root) {
  var i2100 = root || request.c( 'MoveBetweenPoints' )
  var i2101 = data
  request.r(i2101[0], i2101[1], 0, i2100, 'pointA')
  request.r(i2101[2], i2101[3], 0, i2100, 'pointB')
  i2100.duration = i2101[4]
  return i2100
}

Deserializers["ScreenHeightPositionAnchor"] = function (request, data, root) {
  var i2102 = root || request.c( 'ScreenHeightPositionAnchor' )
  var i2103 = data
  request.r(i2103[0], i2103[1], 0, i2102, 'anchorPoint')
  request.r(i2103[2], i2103[3], 0, i2102, 'targetCamera')
  i2102.viewportYRatio = i2103[4]
  i2102.alignOnStart = !!i2103[5]
  i2102.alignOnEnable = !!i2103[6]
  i2102.realignOnScreenSizeChanged = !!i2103[7]
  i2102.drawGizmos = !!i2103[8]
  i2102.targetLineColor = new pc.Color(i2103[9], i2103[10], i2103[11], i2103[12])
  i2102.anchorColor = new pc.Color(i2103[13], i2103[14], i2103[15], i2103[16])
  return i2102
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i2104 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i2105 = data
  i2104.center = new pc.Vec3( i2105[0], i2105[1], i2105[2] )
  i2104.size = new pc.Vec3( i2105[3], i2105[4], i2105[5] )
  i2104.enabled = !!i2105[6]
  i2104.isTrigger = !!i2105[7]
  request.r(i2105[8], i2105[9], 0, i2104, 'material')
  return i2104
}

Deserializers["ClickToStore"] = function (request, data, root) {
  var i2106 = root || request.c( 'ClickToStore' )
  var i2107 = data
  return i2106
}

Deserializers["FavoritePlayerEndcard"] = function (request, data, root) {
  var i2108 = root || request.c( 'FavoritePlayerEndcard' )
  var i2109 = data
  request.r(i2109[0], i2109[1], 0, i2108, 'fullBodyRenderer')
  request.r(i2109[2], i2109[3], 0, i2108, 'nameText')
  request.r(i2109[4], i2109[5], 0, i2108, 'endcardPanel')
  return i2108
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i2110 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i2111 = data
  i2110.pivot = new pc.Vec2( i2111[0], i2111[1] )
  i2110.anchorMin = new pc.Vec2( i2111[2], i2111[3] )
  i2110.anchorMax = new pc.Vec2( i2111[4], i2111[5] )
  i2110.sizeDelta = new pc.Vec2( i2111[6], i2111[7] )
  i2110.anchoredPosition3D = new pc.Vec3( i2111[8], i2111[9], i2111[10] )
  i2110.rotation = new pc.Quat(i2111[11], i2111[12], i2111[13], i2111[14])
  i2110.scale = new pc.Vec3( i2111[15], i2111[16], i2111[17] )
  return i2110
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i2112 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i2113 = data
  request.r(i2113[0], i2113[1], 0, i2112, 'additionalVertexStreams')
  i2112.enabled = !!i2113[2]
  request.r(i2113[3], i2113[4], 0, i2112, 'sharedMaterial')
  var i2115 = i2113[5]
  var i2114 = []
  for(var i = 0; i < i2115.length; i += 2) {
  request.r(i2115[i + 0], i2115[i + 1], 2, i2114, '')
  }
  i2112.sharedMaterials = i2114
  i2112.receiveShadows = !!i2113[6]
  i2112.shadowCastingMode = i2113[7]
  i2112.sortingLayerID = i2113[8]
  i2112.sortingOrder = i2113[9]
  i2112.lightmapIndex = i2113[10]
  i2112.lightmapSceneIndex = i2113[11]
  i2112.lightmapScaleOffset = new pc.Vec4( i2113[12], i2113[13], i2113[14], i2113[15] )
  i2112.lightProbeUsage = i2113[16]
  i2112.reflectionProbeUsage = i2113[17]
  return i2112
}

Deserializers["TMPro.TextMeshPro"] = function (request, data, root) {
  var i2116 = root || request.c( 'TMPro.TextMeshPro' )
  var i2117 = data
  i2116._SortingLayer = i2117[0]
  i2116._SortingLayerID = i2117[1]
  i2116._SortingOrder = i2117[2]
  i2116.m_hasFontAssetChanged = !!i2117[3]
  request.r(i2117[4], i2117[5], 0, i2116, 'm_renderer')
  i2116.m_maskType = i2117[6]
  i2116.m_text = i2117[7]
  i2116.m_isRightToLeft = !!i2117[8]
  request.r(i2117[9], i2117[10], 0, i2116, 'm_fontAsset')
  request.r(i2117[11], i2117[12], 0, i2116, 'm_sharedMaterial')
  var i2119 = i2117[13]
  var i2118 = []
  for(var i = 0; i < i2119.length; i += 2) {
  request.r(i2119[i + 0], i2119[i + 1], 2, i2118, '')
  }
  i2116.m_fontSharedMaterials = i2118
  request.r(i2117[14], i2117[15], 0, i2116, 'm_fontMaterial')
  var i2121 = i2117[16]
  var i2120 = []
  for(var i = 0; i < i2121.length; i += 2) {
  request.r(i2121[i + 0], i2121[i + 1], 2, i2120, '')
  }
  i2116.m_fontMaterials = i2120
  i2116.m_fontColor32 = UnityEngine.Color32.ConstructColor(i2117[17], i2117[18], i2117[19], i2117[20])
  i2116.m_fontColor = new pc.Color(i2117[21], i2117[22], i2117[23], i2117[24])
  i2116.m_enableVertexGradient = !!i2117[25]
  i2116.m_colorMode = i2117[26]
  i2116.m_fontColorGradient = request.d('TMPro.VertexGradient', i2117[27], i2116.m_fontColorGradient)
  request.r(i2117[28], i2117[29], 0, i2116, 'm_fontColorGradientPreset')
  request.r(i2117[30], i2117[31], 0, i2116, 'm_spriteAsset')
  i2116.m_tintAllSprites = !!i2117[32]
  request.r(i2117[33], i2117[34], 0, i2116, 'm_StyleSheet')
  i2116.m_TextStyleHashCode = i2117[35]
  i2116.m_overrideHtmlColors = !!i2117[36]
  i2116.m_faceColor = UnityEngine.Color32.ConstructColor(i2117[37], i2117[38], i2117[39], i2117[40])
  i2116.m_fontSize = i2117[41]
  i2116.m_fontSizeBase = i2117[42]
  i2116.m_fontWeight = i2117[43]
  i2116.m_enableAutoSizing = !!i2117[44]
  i2116.m_fontSizeMin = i2117[45]
  i2116.m_fontSizeMax = i2117[46]
  i2116.m_fontStyle = i2117[47]
  i2116.m_HorizontalAlignment = i2117[48]
  i2116.m_VerticalAlignment = i2117[49]
  i2116.m_textAlignment = i2117[50]
  i2116.m_characterSpacing = i2117[51]
  i2116.m_wordSpacing = i2117[52]
  i2116.m_lineSpacing = i2117[53]
  i2116.m_lineSpacingMax = i2117[54]
  i2116.m_paragraphSpacing = i2117[55]
  i2116.m_charWidthMaxAdj = i2117[56]
  i2116.m_TextWrappingMode = i2117[57]
  i2116.m_wordWrappingRatios = i2117[58]
  i2116.m_overflowMode = i2117[59]
  request.r(i2117[60], i2117[61], 0, i2116, 'm_linkedTextComponent')
  request.r(i2117[62], i2117[63], 0, i2116, 'parentLinkedComponent')
  i2116.m_enableKerning = !!i2117[64]
  var i2123 = i2117[65]
  var i2122 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i2123.length; i += 1) {
    i2122.add(i2123[i + 0]);
  }
  i2116.m_ActiveFontFeatures = i2122
  i2116.m_enableExtraPadding = !!i2117[66]
  i2116.checkPaddingRequired = !!i2117[67]
  i2116.m_isRichText = !!i2117[68]
  i2116.m_parseCtrlCharacters = !!i2117[69]
  i2116.m_isOrthographic = !!i2117[70]
  i2116.m_isCullingEnabled = !!i2117[71]
  i2116.m_horizontalMapping = i2117[72]
  i2116.m_verticalMapping = i2117[73]
  i2116.m_uvLineOffset = i2117[74]
  i2116.m_geometrySortingOrder = i2117[75]
  i2116.m_IsTextObjectScaleStatic = !!i2117[76]
  i2116.m_VertexBufferAutoSizeReduction = !!i2117[77]
  i2116.m_useMaxVisibleDescender = !!i2117[78]
  i2116.m_pageToDisplay = i2117[79]
  i2116.m_margin = new pc.Vec4( i2117[80], i2117[81], i2117[82], i2117[83] )
  i2116.m_isUsingLegacyAnimationComponent = !!i2117[84]
  i2116.m_isVolumetricText = !!i2117[85]
  request.r(i2117[86], i2117[87], 0, i2116, 'm_Material')
  i2116.m_EmojiFallbackSupport = !!i2117[88]
  i2116.m_Maskable = !!i2117[89]
  i2116.m_Color = new pc.Color(i2117[90], i2117[91], i2117[92], i2117[93])
  i2116.m_RaycastTarget = !!i2117[94]
  i2116.m_RaycastPadding = new pc.Vec4( i2117[95], i2117[96], i2117[97], i2117[98] )
  return i2116
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i2124 = root || request.c( 'TMPro.VertexGradient' )
  var i2125 = data
  i2124.topLeft = new pc.Color(i2125[0], i2125[1], i2125[2], i2125[3])
  i2124.topRight = new pc.Color(i2125[4], i2125[5], i2125[6], i2125[7])
  i2124.bottomLeft = new pc.Color(i2125[8], i2125[9], i2125[10], i2125[11])
  i2124.bottomRight = new pc.Color(i2125[12], i2125[13], i2125[14], i2125[15])
  return i2124
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i2128 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i2129 = data
  request.r(i2129[0], i2129[1], 0, i2128, 'sharedMesh')
  return i2128
}

Deserializers["PlayerCardUIManager"] = function (request, data, root) {
  var i2130 = root || request.c( 'PlayerCardUIManager' )
  var i2131 = data
  request.r(i2131[0], i2131[1], 0, i2130, 'cardPanel')
  var i2133 = i2131[2]
  var i2132 = []
  for(var i = 0; i < i2133.length; i += 2) {
  request.r(i2133[i + 0], i2133[i + 1], 2, i2132, '')
  }
  i2130.extraObjectsToActivate = i2132
  i2130.waitTime = i2131[3]
  var i2135 = i2131[4]
  var i2134 = []
  for(var i = 0; i < i2135.length; i += 2) {
  request.r(i2135[i + 0], i2135[i + 1], 2, i2134, '')
  }
  i2130.objectsToTurnOnAfterWait = i2134
  var i2137 = i2131[5]
  var i2136 = []
  for(var i = 0; i < i2137.length; i += 2) {
  request.r(i2137[i + 0], i2137[i + 1], 2, i2136, '')
  }
  i2130.objectsToTurnOffAfterWait = i2136
  request.r(i2131[6], i2131[7], 0, i2130, 'nationalityText')
  request.r(i2131[8], i2131[9], 0, i2130, 'playerImage')
  request.r(i2131[10], i2131[11], 0, i2130, 'flagImage')
  return i2130
}

Deserializers["Ply_SoundManager"] = function (request, data, root) {
  var i2140 = root || request.c( 'Ply_SoundManager' )
  var i2141 = data
  i2140.fxAudio = request.d('FxAudio', i2141[0], i2140.fxAudio)
  request.r(i2141[1], i2141[2], 0, i2140, 'bgm1')
  return i2140
}

Deserializers["FxAudio"] = function (request, data, root) {
  var i2142 = root || request.c( 'FxAudio' )
  var i2143 = data
  i2142.ClickBox = request.d('SoundData', i2143[0], i2142.ClickBox)
  i2142.Happy = request.d('SoundData', i2143[1], i2142.Happy)
  i2142.Wrong = request.d('SoundData', i2143[2], i2142.Wrong)
  i2142.Spray = request.d('SoundData', i2143[3], i2142.Spray)
  i2142.Brush = request.d('SoundData', i2143[4], i2142.Brush)
  return i2142
}

Deserializers["SoundData"] = function (request, data, root) {
  var i2144 = root || request.c( 'SoundData' )
  var i2145 = data
  request.r(i2145[0], i2145[1], 0, i2144, 'clip')
  i2144.repeatCount = i2145[2]
  return i2144
}

Deserializers["FavoritePlayerManager"] = function (request, data, root) {
  var i2146 = root || request.c( 'FavoritePlayerManager' )
  var i2147 = data
  i2146.slotLayerMask = UnityEngine.LayerMask.FromIntegerValue( i2147[0] )
  request.r(i2147[1], i2147[2], 0, i2146, 'slotA')
  request.r(i2147[3], i2147[4], 0, i2146, 'slotB')
  request.r(i2147[5], i2147[6], 0, i2146, 'audioSource')
  request.r(i2147[7], i2147[8], 0, i2146, 'orAudio')
  request.r(i2147[9], i2147[10], 0, i2146, 'clickAudio')
  var i2149 = i2147[11]
  var i2148 = new (System.Collections.Generic.List$1(Bridge.ns('FavoritePlayerCard')))
  for(var i = 0; i < i2149.length; i += 2) {
  request.r(i2149[i + 0], i2149[i + 1], 1, i2148, '')
  }
  i2146.playerList = i2148
  request.r(i2147[12], i2147[13], 0, i2146, 'endcardUI')
  request.r(i2147[14], i2147[15], 0, i2146, 'discardTarget')
  i2146.moveDuration = i2147[16]
  i2146.arcHeight = i2147[17]
  i2146.scaleUpSize = i2147[18]
  i2146.scaleUpDuration = i2147[19]
  i2146.scaleDownDuration = i2147[20]
  i2146.appearStartScale = i2147[21]
  i2146.appearMaxScale = i2147[22]
  i2146.appearUpDuration = i2147[23]
  i2146.appearDownDuration = i2147[24]
  i2146.clickScaleSize = i2147[25]
  i2146.clickDownDuration = i2147[26]
  i2146.clickUpDuration = i2147[27]
  var i2151 = i2147[28]
  var i2150 = []
  for(var i = 0; i < i2151.length; i += 2) {
  request.r(i2151[i + 0], i2151[i + 1], 2, i2150, '')
  }
  i2146.extraObjectsToActivate = i2150
  var i2153 = i2147[29]
  var i2152 = []
  for(var i = 0; i < i2153.length; i += 2) {
  request.r(i2153[i + 0], i2153[i + 1], 2, i2152, '')
  }
  i2146.extraObjectsToDeactivate = i2152
  i2146.waitTime = i2147[30]
  var i2155 = i2147[31]
  var i2154 = []
  for(var i = 0; i < i2155.length; i += 2) {
  request.r(i2155[i + 0], i2155[i + 1], 2, i2154, '')
  }
  i2146.objectsToTurnOnAfterWait = i2154
  var i2157 = i2147[32]
  var i2156 = []
  for(var i = 0; i < i2157.length; i += 2) {
  request.r(i2157[i + 0], i2157[i + 1], 2, i2156, '')
  }
  i2146.objectsToTurnOffAfterWait = i2156
  return i2146
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i2160 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i2161 = data
  i2160.planeDistance = i2161[0]
  i2160.referencePixelsPerUnit = i2161[1]
  i2160.isFallbackOverlay = !!i2161[2]
  i2160.renderMode = i2161[3]
  i2160.renderOrder = i2161[4]
  i2160.sortingLayerName = i2161[5]
  i2160.sortingOrder = i2161[6]
  i2160.scaleFactor = i2161[7]
  request.r(i2161[8], i2161[9], 0, i2160, 'worldCamera')
  i2160.overrideSorting = !!i2161[10]
  i2160.pixelPerfect = !!i2161[11]
  i2160.targetDisplay = i2161[12]
  i2160.overridePixelPerfect = !!i2161[13]
  i2160.enabled = !!i2161[14]
  return i2160
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i2162 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i2163 = data
  i2162.m_UiScaleMode = i2163[0]
  i2162.m_ReferencePixelsPerUnit = i2163[1]
  i2162.m_ScaleFactor = i2163[2]
  i2162.m_ReferenceResolution = new pc.Vec2( i2163[3], i2163[4] )
  i2162.m_ScreenMatchMode = i2163[5]
  i2162.m_MatchWidthOrHeight = i2163[6]
  i2162.m_PhysicalUnit = i2163[7]
  i2162.m_FallbackScreenDPI = i2163[8]
  i2162.m_DefaultSpriteDPI = i2163[9]
  i2162.m_DynamicPixelsPerUnit = i2163[10]
  i2162.m_PresetInfoIsWorld = !!i2163[11]
  return i2162
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i2164 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i2165 = data
  i2164.m_IgnoreReversedGraphics = !!i2165[0]
  i2164.m_BlockingObjects = i2165[1]
  i2164.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i2165[2] )
  return i2164
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i2166 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i2167 = data
  i2166.cullTransparentMesh = !!i2167[0]
  return i2166
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i2168 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i2169 = data
  i2168.m_hasFontAssetChanged = !!i2169[0]
  request.r(i2169[1], i2169[2], 0, i2168, 'm_baseMaterial')
  i2168.m_maskOffset = new pc.Vec4( i2169[3], i2169[4], i2169[5], i2169[6] )
  i2168.m_text = i2169[7]
  i2168.m_isRightToLeft = !!i2169[8]
  request.r(i2169[9], i2169[10], 0, i2168, 'm_fontAsset')
  request.r(i2169[11], i2169[12], 0, i2168, 'm_sharedMaterial')
  var i2171 = i2169[13]
  var i2170 = []
  for(var i = 0; i < i2171.length; i += 2) {
  request.r(i2171[i + 0], i2171[i + 1], 2, i2170, '')
  }
  i2168.m_fontSharedMaterials = i2170
  request.r(i2169[14], i2169[15], 0, i2168, 'm_fontMaterial')
  var i2173 = i2169[16]
  var i2172 = []
  for(var i = 0; i < i2173.length; i += 2) {
  request.r(i2173[i + 0], i2173[i + 1], 2, i2172, '')
  }
  i2168.m_fontMaterials = i2172
  i2168.m_fontColor32 = UnityEngine.Color32.ConstructColor(i2169[17], i2169[18], i2169[19], i2169[20])
  i2168.m_fontColor = new pc.Color(i2169[21], i2169[22], i2169[23], i2169[24])
  i2168.m_enableVertexGradient = !!i2169[25]
  i2168.m_colorMode = i2169[26]
  i2168.m_fontColorGradient = request.d('TMPro.VertexGradient', i2169[27], i2168.m_fontColorGradient)
  request.r(i2169[28], i2169[29], 0, i2168, 'm_fontColorGradientPreset')
  request.r(i2169[30], i2169[31], 0, i2168, 'm_spriteAsset')
  i2168.m_tintAllSprites = !!i2169[32]
  request.r(i2169[33], i2169[34], 0, i2168, 'm_StyleSheet')
  i2168.m_TextStyleHashCode = i2169[35]
  i2168.m_overrideHtmlColors = !!i2169[36]
  i2168.m_faceColor = UnityEngine.Color32.ConstructColor(i2169[37], i2169[38], i2169[39], i2169[40])
  i2168.m_fontSize = i2169[41]
  i2168.m_fontSizeBase = i2169[42]
  i2168.m_fontWeight = i2169[43]
  i2168.m_enableAutoSizing = !!i2169[44]
  i2168.m_fontSizeMin = i2169[45]
  i2168.m_fontSizeMax = i2169[46]
  i2168.m_fontStyle = i2169[47]
  i2168.m_HorizontalAlignment = i2169[48]
  i2168.m_VerticalAlignment = i2169[49]
  i2168.m_textAlignment = i2169[50]
  i2168.m_characterSpacing = i2169[51]
  i2168.m_wordSpacing = i2169[52]
  i2168.m_lineSpacing = i2169[53]
  i2168.m_lineSpacingMax = i2169[54]
  i2168.m_paragraphSpacing = i2169[55]
  i2168.m_charWidthMaxAdj = i2169[56]
  i2168.m_TextWrappingMode = i2169[57]
  i2168.m_wordWrappingRatios = i2169[58]
  i2168.m_overflowMode = i2169[59]
  request.r(i2169[60], i2169[61], 0, i2168, 'm_linkedTextComponent')
  request.r(i2169[62], i2169[63], 0, i2168, 'parentLinkedComponent')
  i2168.m_enableKerning = !!i2169[64]
  var i2175 = i2169[65]
  var i2174 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i2175.length; i += 1) {
    i2174.add(i2175[i + 0]);
  }
  i2168.m_ActiveFontFeatures = i2174
  i2168.m_enableExtraPadding = !!i2169[66]
  i2168.checkPaddingRequired = !!i2169[67]
  i2168.m_isRichText = !!i2169[68]
  i2168.m_parseCtrlCharacters = !!i2169[69]
  i2168.m_isOrthographic = !!i2169[70]
  i2168.m_isCullingEnabled = !!i2169[71]
  i2168.m_horizontalMapping = i2169[72]
  i2168.m_verticalMapping = i2169[73]
  i2168.m_uvLineOffset = i2169[74]
  i2168.m_geometrySortingOrder = i2169[75]
  i2168.m_IsTextObjectScaleStatic = !!i2169[76]
  i2168.m_VertexBufferAutoSizeReduction = !!i2169[77]
  i2168.m_useMaxVisibleDescender = !!i2169[78]
  i2168.m_pageToDisplay = i2169[79]
  i2168.m_margin = new pc.Vec4( i2169[80], i2169[81], i2169[82], i2169[83] )
  i2168.m_isUsingLegacyAnimationComponent = !!i2169[84]
  i2168.m_isVolumetricText = !!i2169[85]
  request.r(i2169[86], i2169[87], 0, i2168, 'm_Material')
  i2168.m_EmojiFallbackSupport = !!i2169[88]
  i2168.m_Maskable = !!i2169[89]
  i2168.m_Color = new pc.Color(i2169[90], i2169[91], i2169[92], i2169[93])
  i2168.m_RaycastTarget = !!i2169[94]
  i2168.m_RaycastPadding = new pc.Vec4( i2169[95], i2169[96], i2169[97], i2169[98] )
  return i2168
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i2176 = root || request.c( 'UnityEngine.UI.Image' )
  var i2177 = data
  request.r(i2177[0], i2177[1], 0, i2176, 'm_Sprite')
  i2176.m_Type = i2177[2]
  i2176.m_PreserveAspect = !!i2177[3]
  i2176.m_FillCenter = !!i2177[4]
  i2176.m_FillMethod = i2177[5]
  i2176.m_FillAmount = i2177[6]
  i2176.m_FillClockwise = !!i2177[7]
  i2176.m_FillOrigin = i2177[8]
  i2176.m_UseSpriteMesh = !!i2177[9]
  i2176.m_PixelsPerUnitMultiplier = i2177[10]
  request.r(i2177[11], i2177[12], 0, i2176, 'm_Material')
  i2176.m_Maskable = !!i2177[13]
  i2176.m_Color = new pc.Color(i2177[14], i2177[15], i2177[16], i2177[17])
  i2176.m_RaycastTarget = !!i2177[18]
  i2176.m_RaycastPadding = new pc.Vec4( i2177[19], i2177[20], i2177[21], i2177[22] )
  return i2176
}

Deserializers["PlayerSlot"] = function (request, data, root) {
  var i2178 = root || request.c( 'PlayerSlot' )
  var i2179 = data
  request.r(i2179[0], i2179[1], 0, i2178, 'spriteRenderer')
  request.r(i2179[2], i2179[3], 0, i2178, 'lightEffect')
  i2178.idleScale = i2179[4]
  i2178.idleDuration = i2179[5]
  i2178.originalPosition = new pc.Vec3( i2179[6], i2179[7], i2179[8] )
  i2178.originalScale = new pc.Vec3( i2179[9], i2179[10], i2179[11] )
  request.r(i2179[12], i2179[13], 0, i2178, 'currentData')
  return i2178
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i2180 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i2181 = data
  request.r(i2181[0], i2181[1], 0, i2180, 'm_FirstSelected')
  i2180.m_sendNavigationEvents = !!i2181[2]
  i2180.m_DragThreshold = i2181[3]
  return i2180
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i2182 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i2183 = data
  i2182.m_HorizontalAxis = i2183[0]
  i2182.m_VerticalAxis = i2183[1]
  i2182.m_SubmitButton = i2183[2]
  i2182.m_CancelButton = i2183[3]
  i2182.m_InputActionsPerSecond = i2183[4]
  i2182.m_RepeatDelay = i2183[5]
  i2182.m_ForceModuleActive = !!i2183[6]
  i2182.m_SendPointerHoverToParent = !!i2183[7]
  return i2182
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i2184 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i2185 = data
  i2184.ambientIntensity = i2185[0]
  i2184.reflectionIntensity = i2185[1]
  i2184.ambientMode = i2185[2]
  i2184.ambientLight = new pc.Color(i2185[3], i2185[4], i2185[5], i2185[6])
  i2184.ambientSkyColor = new pc.Color(i2185[7], i2185[8], i2185[9], i2185[10])
  i2184.ambientGroundColor = new pc.Color(i2185[11], i2185[12], i2185[13], i2185[14])
  i2184.ambientEquatorColor = new pc.Color(i2185[15], i2185[16], i2185[17], i2185[18])
  i2184.fogColor = new pc.Color(i2185[19], i2185[20], i2185[21], i2185[22])
  i2184.fogEndDistance = i2185[23]
  i2184.fogStartDistance = i2185[24]
  i2184.fogDensity = i2185[25]
  i2184.fog = !!i2185[26]
  request.r(i2185[27], i2185[28], 0, i2184, 'skybox')
  i2184.fogMode = i2185[29]
  var i2187 = i2185[30]
  var i2186 = []
  for(var i = 0; i < i2187.length; i += 1) {
    i2186.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i2187[i + 0]) );
  }
  i2184.lightmaps = i2186
  i2184.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i2185[31], i2184.lightProbes)
  i2184.lightmapsMode = i2185[32]
  i2184.mixedBakeMode = i2185[33]
  i2184.environmentLightingMode = i2185[34]
  i2184.ambientProbe = new pc.SphericalHarmonicsL2(i2185[35])
  i2184.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i2185[36])
  i2184.useReferenceAmbientProbe = !!i2185[37]
  request.r(i2185[38], i2185[39], 0, i2184, 'customReflection')
  request.r(i2185[40], i2185[41], 0, i2184, 'defaultReflection')
  i2184.defaultReflectionMode = i2185[42]
  i2184.defaultReflectionResolution = i2185[43]
  i2184.sunLightObjectId = i2185[44]
  i2184.pixelLightCount = i2185[45]
  i2184.defaultReflectionHDR = !!i2185[46]
  i2184.hasLightDataAsset = !!i2185[47]
  i2184.hasManualGenerate = !!i2185[48]
  return i2184
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i2190 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i2191 = data
  request.r(i2191[0], i2191[1], 0, i2190, 'lightmapColor')
  request.r(i2191[2], i2191[3], 0, i2190, 'lightmapDirection')
  request.r(i2191[4], i2191[5], 0, i2190, 'shadowMask')
  return i2190
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i2192 = root || new UnityEngine.LightProbes()
  var i2193 = data
  return i2192
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i2200 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i2201 = data
  var i2203 = i2201[0]
  var i2202 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i2203.length; i += 1) {
    i2202.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i2203[i + 0]));
  }
  i2200.ShaderCompilationErrors = i2202
  i2200.name = i2201[1]
  i2200.guid = i2201[2]
  var i2205 = i2201[3]
  var i2204 = []
  for(var i = 0; i < i2205.length; i += 1) {
    i2204.push( i2205[i + 0] );
  }
  i2200.shaderDefinedKeywords = i2204
  var i2207 = i2201[4]
  var i2206 = []
  for(var i = 0; i < i2207.length; i += 1) {
    i2206.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i2207[i + 0]) );
  }
  i2200.passes = i2206
  var i2209 = i2201[5]
  var i2208 = []
  for(var i = 0; i < i2209.length; i += 1) {
    i2208.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i2209[i + 0]) );
  }
  i2200.usePasses = i2208
  var i2211 = i2201[6]
  var i2210 = []
  for(var i = 0; i < i2211.length; i += 1) {
    i2210.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i2211[i + 0]) );
  }
  i2200.defaultParameterValues = i2210
  request.r(i2201[7], i2201[8], 0, i2200, 'unityFallbackShader')
  i2200.readDepth = !!i2201[9]
  i2200.hasDepthOnlyPass = !!i2201[10]
  i2200.isCreatedByShaderGraph = !!i2201[11]
  i2200.disableBatching = !!i2201[12]
  i2200.compiled = !!i2201[13]
  return i2200
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i2214 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i2215 = data
  i2214.shaderName = i2215[0]
  i2214.errorMessage = i2215[1]
  return i2214
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i2220 = root || new pc.UnityShaderPass()
  var i2221 = data
  i2220.id = i2221[0]
  i2220.subShaderIndex = i2221[1]
  i2220.name = i2221[2]
  i2220.passType = i2221[3]
  i2220.grabPassTextureName = i2221[4]
  i2220.usePass = !!i2221[5]
  i2220.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2221[6], i2220.zTest)
  i2220.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2221[7], i2220.zWrite)
  i2220.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2221[8], i2220.culling)
  i2220.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2221[9], i2220.blending)
  i2220.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2221[10], i2220.alphaBlending)
  i2220.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2221[11], i2220.colorWriteMask)
  i2220.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2221[12], i2220.offsetUnits)
  i2220.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2221[13], i2220.offsetFactor)
  i2220.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2221[14], i2220.stencilRef)
  i2220.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2221[15], i2220.stencilReadMask)
  i2220.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2221[16], i2220.stencilWriteMask)
  i2220.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2221[17], i2220.stencilOp)
  i2220.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2221[18], i2220.stencilOpFront)
  i2220.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2221[19], i2220.stencilOpBack)
  var i2223 = i2221[20]
  var i2222 = []
  for(var i = 0; i < i2223.length; i += 1) {
    i2222.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i2223[i + 0]) );
  }
  i2220.tags = i2222
  var i2225 = i2221[21]
  var i2224 = []
  for(var i = 0; i < i2225.length; i += 1) {
    i2224.push( i2225[i + 0] );
  }
  i2220.passDefinedKeywords = i2224
  var i2227 = i2221[22]
  var i2226 = []
  for(var i = 0; i < i2227.length; i += 1) {
    i2226.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i2227[i + 0]) );
  }
  i2220.passDefinedKeywordGroups = i2226
  var i2229 = i2221[23]
  var i2228 = []
  for(var i = 0; i < i2229.length; i += 1) {
    i2228.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2229[i + 0]) );
  }
  i2220.variants = i2228
  var i2231 = i2221[24]
  var i2230 = []
  for(var i = 0; i < i2231.length; i += 1) {
    i2230.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2231[i + 0]) );
  }
  i2220.excludedVariants = i2230
  i2220.hasDepthReader = !!i2221[25]
  return i2220
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i2232 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i2233 = data
  i2232.val = i2233[0]
  i2232.name = i2233[1]
  return i2232
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i2234 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i2235 = data
  i2234.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2235[0], i2234.src)
  i2234.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2235[1], i2234.dst)
  i2234.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2235[2], i2234.op)
  return i2234
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i2236 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i2237 = data
  i2236.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2237[0], i2236.pass)
  i2236.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2237[1], i2236.fail)
  i2236.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2237[2], i2236.zFail)
  i2236.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2237[3], i2236.comp)
  return i2236
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i2240 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i2241 = data
  i2240.name = i2241[0]
  i2240.value = i2241[1]
  return i2240
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i2244 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i2245 = data
  var i2247 = i2245[0]
  var i2246 = []
  for(var i = 0; i < i2247.length; i += 1) {
    i2246.push( i2247[i + 0] );
  }
  i2244.keywords = i2246
  i2244.hasDiscard = !!i2245[1]
  return i2244
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i2250 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i2251 = data
  i2250.passId = i2251[0]
  i2250.subShaderIndex = i2251[1]
  var i2253 = i2251[2]
  var i2252 = []
  for(var i = 0; i < i2253.length; i += 1) {
    i2252.push( i2253[i + 0] );
  }
  i2250.keywords = i2252
  i2250.vertexProgram = i2251[3]
  i2250.fragmentProgram = i2251[4]
  i2250.exportedForWebGl2 = !!i2251[5]
  i2250.readDepth = !!i2251[6]
  return i2250
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i2256 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i2257 = data
  request.r(i2257[0], i2257[1], 0, i2256, 'shader')
  i2256.pass = i2257[2]
  return i2256
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i2260 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i2261 = data
  i2260.name = i2261[0]
  i2260.type = i2261[1]
  i2260.value = new pc.Vec4( i2261[2], i2261[3], i2261[4], i2261[5] )
  i2260.textureValue = i2261[6]
  i2260.shaderPropertyFlag = i2261[7]
  return i2260
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i2262 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i2263 = data
  i2262.name = i2263[0]
  request.r(i2263[1], i2263[2], 0, i2262, 'texture')
  i2262.aabb = i2263[3]
  i2262.vertices = i2263[4]
  i2262.triangles = i2263[5]
  i2262.textureRect = UnityEngine.Rect.MinMaxRect(i2263[6], i2263[7], i2263[8], i2263[9])
  i2262.packedRect = UnityEngine.Rect.MinMaxRect(i2263[10], i2263[11], i2263[12], i2263[13])
  i2262.border = new pc.Vec4( i2263[14], i2263[15], i2263[16], i2263[17] )
  i2262.transparency = i2263[18]
  i2262.bounds = i2263[19]
  i2262.pixelsPerUnit = i2263[20]
  i2262.textureWidth = i2263[21]
  i2262.textureHeight = i2263[22]
  i2262.nativeSize = new pc.Vec2( i2263[23], i2263[24] )
  i2262.pivot = new pc.Vec2( i2263[25], i2263[26] )
  i2262.textureRectOffset = new pc.Vec2( i2263[27], i2263[28] )
  return i2262
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i2264 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i2265 = data
  i2264.name = i2265[0]
  return i2264
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i2266 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i2267 = data
  i2266.name = i2267[0]
  i2266.wrapMode = i2267[1]
  i2266.isLooping = !!i2267[2]
  i2266.length = i2267[3]
  var i2269 = i2267[4]
  var i2268 = []
  for(var i = 0; i < i2269.length; i += 1) {
    i2268.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i2269[i + 0]) );
  }
  i2266.curves = i2268
  var i2271 = i2267[5]
  var i2270 = []
  for(var i = 0; i < i2271.length; i += 1) {
    i2270.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i2271[i + 0]) );
  }
  i2266.events = i2270
  i2266.halfPrecision = !!i2267[6]
  i2266._frameRate = i2267[7]
  i2266.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i2267[8], i2266.localBounds)
  i2266.hasMuscleCurves = !!i2267[9]
  var i2273 = i2267[10]
  var i2272 = []
  for(var i = 0; i < i2273.length; i += 1) {
    i2272.push( i2273[i + 0] );
  }
  i2266.clipMuscleConstant = i2272
  i2266.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i2267[11], i2266.clipBindingConstant)
  return i2266
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i2276 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i2277 = data
  i2276.path = i2277[0]
  i2276.hash = i2277[1]
  i2276.componentType = i2277[2]
  i2276.property = i2277[3]
  i2276.keys = i2277[4]
  var i2279 = i2277[5]
  var i2278 = []
  for(var i = 0; i < i2279.length; i += 1) {
    i2278.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i2279[i + 0]) );
  }
  i2276.objectReferenceKeys = i2278
  return i2276
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i2282 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i2283 = data
  i2282.time = i2283[0]
  request.r(i2283[1], i2283[2], 0, i2282, 'value')
  return i2282
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i2286 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i2287 = data
  i2286.functionName = i2287[0]
  i2286.floatParameter = i2287[1]
  i2286.intParameter = i2287[2]
  i2286.stringParameter = i2287[3]
  request.r(i2287[4], i2287[5], 0, i2286, 'objectReferenceParameter')
  i2286.time = i2287[6]
  return i2286
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i2288 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i2289 = data
  i2288.center = new pc.Vec3( i2289[0], i2289[1], i2289[2] )
  i2288.extends = new pc.Vec3( i2289[3], i2289[4], i2289[5] )
  return i2288
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i2292 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i2293 = data
  var i2295 = i2293[0]
  var i2294 = []
  for(var i = 0; i < i2295.length; i += 1) {
    i2294.push( i2295[i + 0] );
  }
  i2292.genericBindings = i2294
  var i2297 = i2293[1]
  var i2296 = []
  for(var i = 0; i < i2297.length; i += 1) {
    i2296.push( i2297[i + 0] );
  }
  i2292.pptrCurveMapping = i2296
  return i2292
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i2298 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i2299 = data
  i2298.name = i2299[0]
  i2298.ascent = i2299[1]
  i2298.originalLineHeight = i2299[2]
  i2298.fontSize = i2299[3]
  var i2301 = i2299[4]
  var i2300 = []
  for(var i = 0; i < i2301.length; i += 1) {
    i2300.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i2301[i + 0]) );
  }
  i2298.characterInfo = i2300
  request.r(i2299[5], i2299[6], 0, i2298, 'texture')
  i2298.originalFontSize = i2299[7]
  return i2298
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i2304 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i2305 = data
  i2304.index = i2305[0]
  i2304.advance = i2305[1]
  i2304.bearing = i2305[2]
  i2304.glyphWidth = i2305[3]
  i2304.glyphHeight = i2305[4]
  i2304.minX = i2305[5]
  i2304.maxX = i2305[6]
  i2304.minY = i2305[7]
  i2304.maxY = i2305[8]
  i2304.uvBottomLeftX = i2305[9]
  i2304.uvBottomLeftY = i2305[10]
  i2304.uvBottomRightX = i2305[11]
  i2304.uvBottomRightY = i2305[12]
  i2304.uvTopLeftX = i2305[13]
  i2304.uvTopLeftY = i2305[14]
  i2304.uvTopRightX = i2305[15]
  i2304.uvTopRightY = i2305[16]
  return i2304
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i2306 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i2307 = data
  i2306.name = i2307[0]
  var i2309 = i2307[1]
  var i2308 = []
  for(var i = 0; i < i2309.length; i += 1) {
    i2308.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i2309[i + 0]) );
  }
  i2306.layers = i2308
  var i2311 = i2307[2]
  var i2310 = []
  for(var i = 0; i < i2311.length; i += 1) {
    i2310.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i2311[i + 0]) );
  }
  i2306.parameters = i2310
  i2306.animationClips = i2307[3]
  i2306.avatarUnsupported = i2307[4]
  return i2306
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i2314 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i2315 = data
  i2314.name = i2315[0]
  i2314.defaultWeight = i2315[1]
  i2314.blendingMode = i2315[2]
  i2314.avatarMask = i2315[3]
  i2314.syncedLayerIndex = i2315[4]
  i2314.syncedLayerAffectsTiming = !!i2315[5]
  i2314.syncedLayers = i2315[6]
  i2314.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2315[7], i2314.stateMachine)
  return i2314
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i2316 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i2317 = data
  i2316.id = i2317[0]
  i2316.name = i2317[1]
  i2316.path = i2317[2]
  var i2319 = i2317[3]
  var i2318 = []
  for(var i = 0; i < i2319.length; i += 1) {
    i2318.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i2319[i + 0]) );
  }
  i2316.states = i2318
  var i2321 = i2317[4]
  var i2320 = []
  for(var i = 0; i < i2321.length; i += 1) {
    i2320.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2321[i + 0]) );
  }
  i2316.machines = i2320
  var i2323 = i2317[5]
  var i2322 = []
  for(var i = 0; i < i2323.length; i += 1) {
    i2322.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2323[i + 0]) );
  }
  i2316.entryStateTransitions = i2322
  var i2325 = i2317[6]
  var i2324 = []
  for(var i = 0; i < i2325.length; i += 1) {
    i2324.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2325[i + 0]) );
  }
  i2316.exitStateTransitions = i2324
  var i2327 = i2317[7]
  var i2326 = []
  for(var i = 0; i < i2327.length; i += 1) {
    i2326.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2327[i + 0]) );
  }
  i2316.anyStateTransitions = i2326
  i2316.defaultStateId = i2317[8]
  return i2316
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i2330 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i2331 = data
  i2330.id = i2331[0]
  i2330.name = i2331[1]
  i2330.cycleOffset = i2331[2]
  i2330.cycleOffsetParameter = i2331[3]
  i2330.cycleOffsetParameterActive = !!i2331[4]
  i2330.mirror = !!i2331[5]
  i2330.mirrorParameter = i2331[6]
  i2330.mirrorParameterActive = !!i2331[7]
  i2330.motionId = i2331[8]
  i2330.nameHash = i2331[9]
  i2330.fullPathHash = i2331[10]
  i2330.speed = i2331[11]
  i2330.speedParameter = i2331[12]
  i2330.speedParameterActive = !!i2331[13]
  i2330.tag = i2331[14]
  i2330.tagHash = i2331[15]
  i2330.writeDefaultValues = !!i2331[16]
  var i2333 = i2331[17]
  var i2332 = []
  for(var i = 0; i < i2333.length; i += 2) {
  request.r(i2333[i + 0], i2333[i + 1], 2, i2332, '')
  }
  i2330.behaviours = i2332
  var i2335 = i2331[18]
  var i2334 = []
  for(var i = 0; i < i2335.length; i += 1) {
    i2334.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2335[i + 0]) );
  }
  i2330.transitions = i2334
  return i2330
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i2340 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i2341 = data
  i2340.fullPath = i2341[0]
  i2340.canTransitionToSelf = !!i2341[1]
  i2340.duration = i2341[2]
  i2340.exitTime = i2341[3]
  i2340.hasExitTime = !!i2341[4]
  i2340.hasFixedDuration = !!i2341[5]
  i2340.interruptionSource = i2341[6]
  i2340.offset = i2341[7]
  i2340.orderedInterruption = !!i2341[8]
  i2340.destinationStateId = i2341[9]
  i2340.isExit = !!i2341[10]
  i2340.mute = !!i2341[11]
  i2340.solo = !!i2341[12]
  var i2343 = i2341[13]
  var i2342 = []
  for(var i = 0; i < i2343.length; i += 1) {
    i2342.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2343[i + 0]) );
  }
  i2340.conditions = i2342
  return i2340
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i2348 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i2349 = data
  i2348.destinationStateId = i2349[0]
  i2348.isExit = !!i2349[1]
  i2348.mute = !!i2349[2]
  i2348.solo = !!i2349[3]
  var i2351 = i2349[4]
  var i2350 = []
  for(var i = 0; i < i2351.length; i += 1) {
    i2350.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2351[i + 0]) );
  }
  i2348.conditions = i2350
  return i2348
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i2354 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i2355 = data
  i2354.defaultBool = !!i2355[0]
  i2354.defaultFloat = i2355[1]
  i2354.defaultInt = i2355[2]
  i2354.name = i2355[3]
  i2354.nameHash = i2355[4]
  i2354.type = i2355[5]
  return i2354
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i2356 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i2357 = data
  i2356.name = i2357[0]
  i2356.bytes64 = i2357[1]
  i2356.data = i2357[2]
  return i2356
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i2358 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i2359 = data
  i2358.normalStyle = i2359[0]
  i2358.normalSpacingOffset = i2359[1]
  i2358.boldStyle = i2359[2]
  i2358.boldSpacing = i2359[3]
  i2358.italicStyle = i2359[4]
  i2358.tabSize = i2359[5]
  request.r(i2359[6], i2359[7], 0, i2358, 'atlas')
  i2358.m_SourceFontFileGUID = i2359[8]
  i2358.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i2359[9], i2358.m_CreationSettings)
  request.r(i2359[10], i2359[11], 0, i2358, 'm_SourceFontFile')
  i2358.m_SourceFontFilePath = i2359[12]
  i2358.m_AtlasPopulationMode = i2359[13]
  i2358.InternalDynamicOS = !!i2359[14]
  var i2361 = i2359[15]
  var i2360 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i2361.length; i += 1) {
    i2360.add(request.d('UnityEngine.TextCore.Glyph', i2361[i + 0]));
  }
  i2358.m_GlyphTable = i2360
  var i2363 = i2359[16]
  var i2362 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i2363.length; i += 1) {
    i2362.add(request.d('TMPro.TMP_Character', i2363[i + 0]));
  }
  i2358.m_CharacterTable = i2362
  var i2365 = i2359[17]
  var i2364 = []
  for(var i = 0; i < i2365.length; i += 2) {
  request.r(i2365[i + 0], i2365[i + 1], 2, i2364, '')
  }
  i2358.m_AtlasTextures = i2364
  i2358.m_AtlasTextureIndex = i2359[18]
  i2358.m_IsMultiAtlasTexturesEnabled = !!i2359[19]
  i2358.m_GetFontFeatures = !!i2359[20]
  i2358.m_ClearDynamicDataOnBuild = !!i2359[21]
  i2358.m_AtlasWidth = i2359[22]
  i2358.m_AtlasHeight = i2359[23]
  i2358.m_AtlasPadding = i2359[24]
  i2358.m_AtlasRenderMode = i2359[25]
  var i2367 = i2359[26]
  var i2366 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2367.length; i += 1) {
    i2366.add(request.d('UnityEngine.TextCore.GlyphRect', i2367[i + 0]));
  }
  i2358.m_UsedGlyphRects = i2366
  var i2369 = i2359[27]
  var i2368 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2369.length; i += 1) {
    i2368.add(request.d('UnityEngine.TextCore.GlyphRect', i2369[i + 0]));
  }
  i2358.m_FreeGlyphRects = i2368
  i2358.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i2359[28], i2358.m_FontFeatureTable)
  i2358.m_ShouldReimportFontFeatures = !!i2359[29]
  var i2371 = i2359[30]
  var i2370 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2371.length; i += 2) {
  request.r(i2371[i + 0], i2371[i + 1], 1, i2370, '')
  }
  i2358.m_FallbackFontAssetTable = i2370
  var i2373 = i2359[31]
  var i2372 = []
  for(var i = 0; i < i2373.length; i += 1) {
    i2372.push( request.d('TMPro.TMP_FontWeightPair', i2373[i + 0]) );
  }
  i2358.m_FontWeightTable = i2372
  var i2375 = i2359[32]
  var i2374 = []
  for(var i = 0; i < i2375.length; i += 1) {
    i2374.push( request.d('TMPro.TMP_FontWeightPair', i2375[i + 0]) );
  }
  i2358.fontWeights = i2374
  i2358.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i2359[33], i2358.m_fontInfo)
  var i2377 = i2359[34]
  var i2376 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i2377.length; i += 1) {
    i2376.add(request.d('TMPro.TMP_Glyph', i2377[i + 0]));
  }
  i2358.m_glyphInfoList = i2376
  i2358.m_KerningTable = request.d('TMPro.KerningTable', i2359[35], i2358.m_KerningTable)
  var i2379 = i2359[36]
  var i2378 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2379.length; i += 2) {
  request.r(i2379[i + 0], i2379[i + 1], 1, i2378, '')
  }
  i2358.fallbackFontAssets = i2378
  i2358.m_Version = i2359[37]
  i2358.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2359[38], i2358.m_FaceInfo)
  request.r(i2359[39], i2359[40], 0, i2358, 'm_Material')
  return i2358
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i2380 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i2381 = data
  i2380.sourceFontFileName = i2381[0]
  i2380.sourceFontFileGUID = i2381[1]
  i2380.faceIndex = i2381[2]
  i2380.pointSizeSamplingMode = i2381[3]
  i2380.pointSize = i2381[4]
  i2380.padding = i2381[5]
  i2380.paddingMode = i2381[6]
  i2380.packingMode = i2381[7]
  i2380.atlasWidth = i2381[8]
  i2380.atlasHeight = i2381[9]
  i2380.characterSetSelectionMode = i2381[10]
  i2380.characterSequence = i2381[11]
  i2380.referencedFontAssetGUID = i2381[12]
  i2380.referencedTextAssetGUID = i2381[13]
  i2380.fontStyle = i2381[14]
  i2380.fontStyleModifier = i2381[15]
  i2380.renderMode = i2381[16]
  i2380.includeFontFeatures = !!i2381[17]
  return i2380
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i2384 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i2385 = data
  i2384.m_Index = i2385[0]
  i2384.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2385[1], i2384.m_Metrics)
  i2384.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2385[2], i2384.m_GlyphRect)
  i2384.m_Scale = i2385[3]
  i2384.m_AtlasIndex = i2385[4]
  i2384.m_ClassDefinitionType = i2385[5]
  return i2384
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i2386 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i2387 = data
  i2386.m_Width = i2387[0]
  i2386.m_Height = i2387[1]
  i2386.m_HorizontalBearingX = i2387[2]
  i2386.m_HorizontalBearingY = i2387[3]
  i2386.m_HorizontalAdvance = i2387[4]
  return i2386
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i2388 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i2389 = data
  i2388.m_X = i2389[0]
  i2388.m_Y = i2389[1]
  i2388.m_Width = i2389[2]
  i2388.m_Height = i2389[3]
  return i2388
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i2392 = root || request.c( 'TMPro.TMP_Character' )
  var i2393 = data
  i2392.m_ElementType = i2393[0]
  i2392.m_Unicode = i2393[1]
  i2392.m_GlyphIndex = i2393[2]
  i2392.m_Scale = i2393[3]
  return i2392
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i2398 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i2399 = data
  var i2401 = i2399[0]
  var i2400 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i2401.length; i += 1) {
    i2400.add(request.d('TMPro.MultipleSubstitutionRecord', i2401[i + 0]));
  }
  i2398.m_MultipleSubstitutionRecords = i2400
  var i2403 = i2399[1]
  var i2402 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i2403.length; i += 1) {
    i2402.add(request.d('TMPro.LigatureSubstitutionRecord', i2403[i + 0]));
  }
  i2398.m_LigatureSubstitutionRecords = i2402
  var i2405 = i2399[2]
  var i2404 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i2405.length; i += 1) {
    i2404.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i2405[i + 0]));
  }
  i2398.m_GlyphPairAdjustmentRecords = i2404
  var i2407 = i2399[3]
  var i2406 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i2407.length; i += 1) {
    i2406.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i2407[i + 0]));
  }
  i2398.m_MarkToBaseAdjustmentRecords = i2406
  var i2409 = i2399[4]
  var i2408 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i2409.length; i += 1) {
    i2408.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i2409[i + 0]));
  }
  i2398.m_MarkToMarkAdjustmentRecords = i2408
  return i2398
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i2412 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i2413 = data
  i2412.m_TargetGlyphID = i2413[0]
  i2412.m_SubstituteGlyphIDs = i2413[1]
  return i2412
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i2416 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i2417 = data
  i2416.m_ComponentGlyphIDs = i2417[0]
  i2416.m_LigatureGlyphID = i2417[1]
  return i2416
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i2420 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i2421 = data
  i2420.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i2421[0], i2420.m_FirstAdjustmentRecord)
  i2420.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i2421[1], i2420.m_SecondAdjustmentRecord)
  i2420.m_FeatureLookupFlags = i2421[2]
  return i2420
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i2422 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i2423 = data
  i2422.m_GlyphIndex = i2423[0]
  i2422.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i2423[1], i2422.m_GlyphValueRecord)
  return i2422
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i2424 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i2425 = data
  i2424.m_XPlacement = i2425[0]
  i2424.m_YPlacement = i2425[1]
  i2424.m_XAdvance = i2425[2]
  i2424.m_YAdvance = i2425[3]
  return i2424
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i2428 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i2429 = data
  i2428.m_BaseGlyphID = i2429[0]
  i2428.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i2429[1], i2428.m_BaseGlyphAnchorPoint)
  i2428.m_MarkGlyphID = i2429[2]
  i2428.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i2429[3], i2428.m_MarkPositionAdjustment)
  return i2428
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i2432 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i2433 = data
  i2432.m_BaseMarkGlyphID = i2433[0]
  i2432.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i2433[1], i2432.m_BaseMarkGlyphAnchorPoint)
  i2432.m_CombiningMarkGlyphID = i2433[2]
  i2432.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i2433[3], i2432.m_CombiningMarkPositionAdjustment)
  return i2432
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i2438 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i2439 = data
  request.r(i2439[0], i2439[1], 0, i2438, 'regularTypeface')
  request.r(i2439[2], i2439[3], 0, i2438, 'italicTypeface')
  return i2438
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i2440 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i2441 = data
  i2440.Name = i2441[0]
  i2440.PointSize = i2441[1]
  i2440.Scale = i2441[2]
  i2440.CharacterCount = i2441[3]
  i2440.LineHeight = i2441[4]
  i2440.Baseline = i2441[5]
  i2440.Ascender = i2441[6]
  i2440.CapHeight = i2441[7]
  i2440.Descender = i2441[8]
  i2440.CenterLine = i2441[9]
  i2440.SuperscriptOffset = i2441[10]
  i2440.SubscriptOffset = i2441[11]
  i2440.SubSize = i2441[12]
  i2440.Underline = i2441[13]
  i2440.UnderlineThickness = i2441[14]
  i2440.strikethrough = i2441[15]
  i2440.strikethroughThickness = i2441[16]
  i2440.TabWidth = i2441[17]
  i2440.Padding = i2441[18]
  i2440.AtlasWidth = i2441[19]
  i2440.AtlasHeight = i2441[20]
  return i2440
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i2444 = root || request.c( 'TMPro.TMP_Glyph' )
  var i2445 = data
  i2444.id = i2445[0]
  i2444.x = i2445[1]
  i2444.y = i2445[2]
  i2444.width = i2445[3]
  i2444.height = i2445[4]
  i2444.xOffset = i2445[5]
  i2444.yOffset = i2445[6]
  i2444.xAdvance = i2445[7]
  i2444.scale = i2445[8]
  return i2444
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i2446 = root || request.c( 'TMPro.KerningTable' )
  var i2447 = data
  var i2449 = i2447[0]
  var i2448 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i2449.length; i += 1) {
    i2448.add(request.d('TMPro.KerningPair', i2449[i + 0]));
  }
  i2446.kerningPairs = i2448
  return i2446
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i2452 = root || request.c( 'TMPro.KerningPair' )
  var i2453 = data
  i2452.xOffset = i2453[0]
  i2452.m_FirstGlyph = i2453[1]
  i2452.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2453[2], i2452.m_FirstGlyphAdjustments)
  i2452.m_SecondGlyph = i2453[3]
  i2452.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2453[4], i2452.m_SecondGlyphAdjustments)
  i2452.m_IgnoreSpacingAdjustments = !!i2453[5]
  return i2452
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i2454 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i2455 = data
  i2454.m_FaceIndex = i2455[0]
  i2454.m_FamilyName = i2455[1]
  i2454.m_StyleName = i2455[2]
  i2454.m_PointSize = i2455[3]
  i2454.m_Scale = i2455[4]
  i2454.m_UnitsPerEM = i2455[5]
  i2454.m_LineHeight = i2455[6]
  i2454.m_AscentLine = i2455[7]
  i2454.m_CapLine = i2455[8]
  i2454.m_MeanLine = i2455[9]
  i2454.m_Baseline = i2455[10]
  i2454.m_DescentLine = i2455[11]
  i2454.m_SuperscriptOffset = i2455[12]
  i2454.m_SuperscriptSize = i2455[13]
  i2454.m_SubscriptOffset = i2455[14]
  i2454.m_SubscriptSize = i2455[15]
  i2454.m_UnderlineOffset = i2455[16]
  i2454.m_UnderlineThickness = i2455[17]
  i2454.m_StrikethroughOffset = i2455[18]
  i2454.m_StrikethroughThickness = i2455[19]
  i2454.m_TabWidth = i2455[20]
  return i2454
}

Deserializers["FavoritePlayerCard"] = function (request, data, root) {
  var i2456 = root || request.c( 'FavoritePlayerCard' )
  var i2457 = data
  i2456.playerName = i2457[0]
  request.r(i2457[1], i2457[2], 0, i2456, 'halfBodySprite')
  request.r(i2457[3], i2457[4], 0, i2456, 'fullBodySprite')
  request.r(i2457[5], i2457[6], 0, i2456, 'nameAudio')
  return i2456
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i2458 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i2459 = data
  i2458.useSafeMode = !!i2459[0]
  i2458.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i2459[1], i2458.safeModeOptions)
  i2458.timeScale = i2459[2]
  i2458.unscaledTimeScale = i2459[3]
  i2458.useSmoothDeltaTime = !!i2459[4]
  i2458.maxSmoothUnscaledTime = i2459[5]
  i2458.rewindCallbackMode = i2459[6]
  i2458.showUnityEditorReport = !!i2459[7]
  i2458.logBehaviour = i2459[8]
  i2458.drawGizmos = !!i2459[9]
  i2458.defaultRecyclable = !!i2459[10]
  i2458.defaultAutoPlay = i2459[11]
  i2458.defaultUpdateType = i2459[12]
  i2458.defaultTimeScaleIndependent = !!i2459[13]
  i2458.defaultEaseType = i2459[14]
  i2458.defaultEaseOvershootOrAmplitude = i2459[15]
  i2458.defaultEasePeriod = i2459[16]
  i2458.defaultAutoKill = !!i2459[17]
  i2458.defaultLoopType = i2459[18]
  i2458.debugMode = !!i2459[19]
  i2458.debugStoreTargetId = !!i2459[20]
  i2458.showPreviewPanel = !!i2459[21]
  i2458.storeSettingsLocation = i2459[22]
  i2458.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i2459[23], i2458.modules)
  i2458.createASMDEF = !!i2459[24]
  i2458.showPlayingTweens = !!i2459[25]
  i2458.showPausedTweens = !!i2459[26]
  return i2458
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i2460 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i2461 = data
  i2460.logBehaviour = i2461[0]
  i2460.nestedTweenFailureBehaviour = i2461[1]
  return i2460
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i2462 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i2463 = data
  i2462.showPanel = !!i2463[0]
  i2462.audioEnabled = !!i2463[1]
  i2462.physicsEnabled = !!i2463[2]
  i2462.physics2DEnabled = !!i2463[3]
  i2462.spriteEnabled = !!i2463[4]
  i2462.uiEnabled = !!i2463[5]
  i2462.uiToolkitEnabled = !!i2463[6]
  i2462.textMeshProEnabled = !!i2463[7]
  i2462.tk2DEnabled = !!i2463[8]
  i2462.deAudioEnabled = !!i2463[9]
  i2462.deUnityExtendedEnabled = !!i2463[10]
  i2462.epoOutlineEnabled = !!i2463[11]
  return i2462
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i2464 = root || request.c( 'TMPro.TMP_Settings' )
  var i2465 = data
  i2464.assetVersion = i2465[0]
  i2464.m_TextWrappingMode = i2465[1]
  i2464.m_enableKerning = !!i2465[2]
  var i2467 = i2465[3]
  var i2466 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i2467.length; i += 1) {
    i2466.add(i2467[i + 0]);
  }
  i2464.m_ActiveFontFeatures = i2466
  i2464.m_enableExtraPadding = !!i2465[4]
  i2464.m_enableTintAllSprites = !!i2465[5]
  i2464.m_enableParseEscapeCharacters = !!i2465[6]
  i2464.m_EnableRaycastTarget = !!i2465[7]
  i2464.m_GetFontFeaturesAtRuntime = !!i2465[8]
  i2464.m_missingGlyphCharacter = i2465[9]
  i2464.m_ClearDynamicDataOnBuild = !!i2465[10]
  i2464.m_warningsDisabled = !!i2465[11]
  request.r(i2465[12], i2465[13], 0, i2464, 'm_defaultFontAsset')
  i2464.m_defaultFontAssetPath = i2465[14]
  i2464.m_defaultFontSize = i2465[15]
  i2464.m_defaultAutoSizeMinRatio = i2465[16]
  i2464.m_defaultAutoSizeMaxRatio = i2465[17]
  i2464.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i2465[18], i2465[19] )
  i2464.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i2465[20], i2465[21] )
  i2464.m_autoSizeTextContainer = !!i2465[22]
  i2464.m_IsTextObjectScaleStatic = !!i2465[23]
  var i2469 = i2465[24]
  var i2468 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2469.length; i += 2) {
  request.r(i2469[i + 0], i2469[i + 1], 1, i2468, '')
  }
  i2464.m_fallbackFontAssets = i2468
  i2464.m_matchMaterialPreset = !!i2465[25]
  i2464.m_HideSubTextObjects = !!i2465[26]
  request.r(i2465[27], i2465[28], 0, i2464, 'm_defaultSpriteAsset')
  i2464.m_defaultSpriteAssetPath = i2465[29]
  i2464.m_enableEmojiSupport = !!i2465[30]
  i2464.m_MissingCharacterSpriteUnicode = i2465[31]
  var i2471 = i2465[32]
  var i2470 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i2471.length; i += 2) {
  request.r(i2471[i + 0], i2471[i + 1], 1, i2470, '')
  }
  i2464.m_EmojiFallbackTextAssets = i2470
  i2464.m_defaultColorGradientPresetsPath = i2465[33]
  request.r(i2465[34], i2465[35], 0, i2464, 'm_defaultStyleSheet')
  i2464.m_StyleSheetsResourcePath = i2465[36]
  request.r(i2465[37], i2465[38], 0, i2464, 'm_leadingCharacters')
  request.r(i2465[39], i2465[40], 0, i2464, 'm_followingCharacters')
  i2464.m_UseModernHangulLineBreakingRules = !!i2465[41]
  return i2464
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i2474 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i2475 = data
  request.r(i2475[0], i2475[1], 0, i2474, 'spriteSheet')
  var i2477 = i2475[2]
  var i2476 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i2477.length; i += 1) {
    i2476.add(request.d('TMPro.TMP_Sprite', i2477[i + 0]));
  }
  i2474.spriteInfoList = i2476
  var i2479 = i2475[3]
  var i2478 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i2479.length; i += 2) {
  request.r(i2479[i + 0], i2479[i + 1], 1, i2478, '')
  }
  i2474.fallbackSpriteAssets = i2478
  var i2481 = i2475[4]
  var i2480 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i2481.length; i += 1) {
    i2480.add(request.d('TMPro.TMP_SpriteCharacter', i2481[i + 0]));
  }
  i2474.m_SpriteCharacterTable = i2480
  var i2483 = i2475[5]
  var i2482 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i2483.length; i += 1) {
    i2482.add(request.d('TMPro.TMP_SpriteGlyph', i2483[i + 0]));
  }
  i2474.m_GlyphTable = i2482
  i2474.m_Version = i2475[6]
  i2474.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2475[7], i2474.m_FaceInfo)
  request.r(i2475[8], i2475[9], 0, i2474, 'm_Material')
  return i2474
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i2486 = root || request.c( 'TMPro.TMP_Sprite' )
  var i2487 = data
  i2486.name = i2487[0]
  i2486.hashCode = i2487[1]
  i2486.unicode = i2487[2]
  i2486.pivot = new pc.Vec2( i2487[3], i2487[4] )
  request.r(i2487[5], i2487[6], 0, i2486, 'sprite')
  i2486.id = i2487[7]
  i2486.x = i2487[8]
  i2486.y = i2487[9]
  i2486.width = i2487[10]
  i2486.height = i2487[11]
  i2486.xOffset = i2487[12]
  i2486.yOffset = i2487[13]
  i2486.xAdvance = i2487[14]
  i2486.scale = i2487[15]
  return i2486
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i2492 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i2493 = data
  i2492.m_Name = i2493[0]
  i2492.m_ElementType = i2493[1]
  i2492.m_Unicode = i2493[2]
  i2492.m_GlyphIndex = i2493[3]
  i2492.m_Scale = i2493[4]
  return i2492
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i2496 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i2497 = data
  request.r(i2497[0], i2497[1], 0, i2496, 'sprite')
  i2496.m_Index = i2497[2]
  i2496.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2497[3], i2496.m_Metrics)
  i2496.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2497[4], i2496.m_GlyphRect)
  i2496.m_Scale = i2497[5]
  i2496.m_AtlasIndex = i2497[6]
  i2496.m_ClassDefinitionType = i2497[7]
  return i2496
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i2498 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i2499 = data
  var i2501 = i2499[0]
  var i2500 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i2501.length; i += 1) {
    i2500.add(request.d('TMPro.TMP_Style', i2501[i + 0]));
  }
  i2498.m_StyleList = i2500
  return i2498
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i2504 = root || request.c( 'TMPro.TMP_Style' )
  var i2505 = data
  i2504.m_Name = i2505[0]
  i2504.m_HashCode = i2505[1]
  i2504.m_OpeningDefinition = i2505[2]
  i2504.m_ClosingDefinition = i2505[3]
  i2504.m_OpeningTagArray = i2505[4]
  i2504.m_ClosingTagArray = i2505[5]
  return i2504
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i2506 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i2507 = data
  var i2509 = i2507[0]
  var i2508 = []
  for(var i = 0; i < i2509.length; i += 1) {
    i2508.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i2509[i + 0]) );
  }
  i2506.files = i2508
  i2506.componentToPrefabIds = i2507[1]
  return i2506
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i2512 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i2513 = data
  i2512.path = i2513[0]
  request.r(i2513[1], i2513[2], 0, i2512, 'unityObject')
  return i2512
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i2514 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i2515 = data
  var i2517 = i2515[0]
  var i2516 = []
  for(var i = 0; i < i2517.length; i += 1) {
    i2516.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i2517[i + 0]) );
  }
  i2514.scriptsExecutionOrder = i2516
  var i2519 = i2515[1]
  var i2518 = []
  for(var i = 0; i < i2519.length; i += 1) {
    i2518.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i2519[i + 0]) );
  }
  i2514.sortingLayers = i2518
  var i2521 = i2515[2]
  var i2520 = []
  for(var i = 0; i < i2521.length; i += 1) {
    i2520.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i2521[i + 0]) );
  }
  i2514.cullingLayers = i2520
  i2514.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i2515[3], i2514.timeSettings)
  i2514.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i2515[4], i2514.physicsSettings)
  i2514.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i2515[5], i2514.physics2DSettings)
  i2514.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2515[6], i2514.qualitySettings)
  i2514.enableRealtimeShadows = !!i2515[7]
  i2514.enableAutoInstancing = !!i2515[8]
  i2514.enableStaticBatching = !!i2515[9]
  i2514.enableDynamicBatching = !!i2515[10]
  i2514.lightmapEncodingQuality = i2515[11]
  i2514.desiredColorSpace = i2515[12]
  var i2523 = i2515[13]
  var i2522 = []
  for(var i = 0; i < i2523.length; i += 1) {
    i2522.push( i2523[i + 0] );
  }
  i2514.allTags = i2522
  return i2514
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i2526 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i2527 = data
  i2526.name = i2527[0]
  i2526.value = i2527[1]
  return i2526
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i2530 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i2531 = data
  i2530.id = i2531[0]
  i2530.name = i2531[1]
  i2530.value = i2531[2]
  return i2530
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i2534 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i2535 = data
  i2534.id = i2535[0]
  i2534.name = i2535[1]
  return i2534
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i2536 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i2537 = data
  i2536.fixedDeltaTime = i2537[0]
  i2536.maximumDeltaTime = i2537[1]
  i2536.timeScale = i2537[2]
  i2536.maximumParticleTimestep = i2537[3]
  return i2536
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i2538 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i2539 = data
  i2538.gravity = new pc.Vec3( i2539[0], i2539[1], i2539[2] )
  i2538.defaultSolverIterations = i2539[3]
  i2538.bounceThreshold = i2539[4]
  i2538.autoSyncTransforms = !!i2539[5]
  i2538.autoSimulation = !!i2539[6]
  var i2541 = i2539[7]
  var i2540 = []
  for(var i = 0; i < i2541.length; i += 1) {
    i2540.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i2541[i + 0]) );
  }
  i2538.collisionMatrix = i2540
  return i2538
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i2544 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i2545 = data
  i2544.enabled = !!i2545[0]
  i2544.layerId = i2545[1]
  i2544.otherLayerId = i2545[2]
  return i2544
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i2546 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i2547 = data
  request.r(i2547[0], i2547[1], 0, i2546, 'material')
  i2546.gravity = new pc.Vec2( i2547[2], i2547[3] )
  i2546.positionIterations = i2547[4]
  i2546.velocityIterations = i2547[5]
  i2546.velocityThreshold = i2547[6]
  i2546.maxLinearCorrection = i2547[7]
  i2546.maxAngularCorrection = i2547[8]
  i2546.maxTranslationSpeed = i2547[9]
  i2546.maxRotationSpeed = i2547[10]
  i2546.baumgarteScale = i2547[11]
  i2546.baumgarteTOIScale = i2547[12]
  i2546.timeToSleep = i2547[13]
  i2546.linearSleepTolerance = i2547[14]
  i2546.angularSleepTolerance = i2547[15]
  i2546.defaultContactOffset = i2547[16]
  i2546.autoSimulation = !!i2547[17]
  i2546.queriesHitTriggers = !!i2547[18]
  i2546.queriesStartInColliders = !!i2547[19]
  i2546.callbacksOnDisable = !!i2547[20]
  i2546.reuseCollisionCallbacks = !!i2547[21]
  i2546.autoSyncTransforms = !!i2547[22]
  var i2549 = i2547[23]
  var i2548 = []
  for(var i = 0; i < i2549.length; i += 1) {
    i2548.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i2549[i + 0]) );
  }
  i2546.collisionMatrix = i2548
  return i2546
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i2552 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i2553 = data
  i2552.enabled = !!i2553[0]
  i2552.layerId = i2553[1]
  i2552.otherLayerId = i2553[2]
  return i2552
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i2554 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i2555 = data
  var i2557 = i2555[0]
  var i2556 = []
  for(var i = 0; i < i2557.length; i += 1) {
    i2556.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2557[i + 0]) );
  }
  i2554.qualityLevels = i2556
  var i2559 = i2555[1]
  var i2558 = []
  for(var i = 0; i < i2559.length; i += 1) {
    i2558.push( i2559[i + 0] );
  }
  i2554.names = i2558
  i2554.shadows = i2555[2]
  i2554.anisotropicFiltering = i2555[3]
  i2554.antiAliasing = i2555[4]
  i2554.lodBias = i2555[5]
  i2554.shadowCascades = i2555[6]
  i2554.shadowDistance = i2555[7]
  i2554.shadowmaskMode = i2555[8]
  i2554.shadowProjection = i2555[9]
  i2554.shadowResolution = i2555[10]
  i2554.softParticles = !!i2555[11]
  i2554.softVegetation = !!i2555[12]
  i2554.activeColorSpace = i2555[13]
  i2554.desiredColorSpace = i2555[14]
  i2554.masterTextureLimit = i2555[15]
  i2554.maxQueuedFrames = i2555[16]
  i2554.particleRaycastBudget = i2555[17]
  i2554.pixelLightCount = i2555[18]
  i2554.realtimeReflectionProbes = !!i2555[19]
  i2554.shadowCascade2Split = i2555[20]
  i2554.shadowCascade4Split = new pc.Vec3( i2555[21], i2555[22], i2555[23] )
  i2554.streamingMipmapsActive = !!i2555[24]
  i2554.vSyncCount = i2555[25]
  i2554.asyncUploadBufferSize = i2555[26]
  i2554.asyncUploadTimeSlice = i2555[27]
  i2554.billboardsFaceCameraPosition = !!i2555[28]
  i2554.shadowNearPlaneOffset = i2555[29]
  i2554.streamingMipmapsMemoryBudget = i2555[30]
  i2554.maximumLODLevel = i2555[31]
  i2554.streamingMipmapsAddAllCameras = !!i2555[32]
  i2554.streamingMipmapsMaxLevelReduction = i2555[33]
  i2554.streamingMipmapsRenderersPerFrame = i2555[34]
  i2554.resolutionScalingFixedDPIFactor = i2555[35]
  i2554.streamingMipmapsMaxFileIORequests = i2555[36]
  i2554.currentQualityLevel = i2555[37]
  return i2554
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i2564 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i2565 = data
  i2564.weight = i2565[0]
  i2564.vertices = i2565[1]
  i2564.normals = i2565[2]
  i2564.tangents = i2565[3]
  return i2564
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i2568 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i2569 = data
  i2568.mode = i2569[0]
  i2568.parameter = i2569[1]
  i2568.threshold = i2569[2]
  return i2568
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i2570 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i2571 = data
  i2570.m_XCoordinate = i2571[0]
  i2570.m_YCoordinate = i2571[1]
  return i2570
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i2572 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i2573 = data
  i2572.m_XPositionAdjustment = i2573[0]
  i2572.m_YPositionAdjustment = i2573[1]
  return i2572
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i2574 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i2575 = data
  i2574.xPlacement = i2575[0]
  i2574.yPlacement = i2575[1]
  i2574.xAdvance = i2575[2]
  i2574.yAdvance = i2575[3]
  return i2574
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2}}

Deserializers.requiredComponents = {"49":[50],"51":[50],"52":[50],"53":[50],"54":[50],"55":[50],"56":[57],"58":[2],"59":[60],"61":[60],"62":[60],"63":[60],"64":[60],"65":[60],"66":[67],"68":[67],"69":[67],"70":[67],"71":[67],"72":[67],"73":[67],"74":[67],"75":[67],"76":[67],"77":[67],"78":[67],"79":[67],"80":[2],"81":[26],"82":[83],"84":[83],"35":[25],"6":[2],"21":[85],"86":[67],"87":[88],"33":[85],"89":[14],"90":[2],"91":[92],"93":[41],"94":[35],"95":[25],"23":[26,25],"39":[25,38],"96":[25],"97":[38,25],"98":[26],"99":[38,25],"100":[25],"101":[102],"103":[102],"104":[102],"105":[25],"106":[25],"37":[35],"40":[38,25],"107":[25],"36":[35],"108":[25],"109":[25],"110":[25],"111":[25],"112":[25],"113":[25],"114":[25],"115":[25],"116":[25],"117":[38,25],"118":[25],"119":[25],"120":[25],"121":[25],"122":[38,25],"123":[25],"124":[41],"125":[41],"42":[41],"126":[41],"127":[2],"128":[2]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.MonoBehaviour","CameraFollow2D","AutoCameraFit","UnityEngine.Transform","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Mesh","UnityEngine.Material","UnityEngine.AudioSource","UnityEngine.AudioClip","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","MoveBetweenPoints","ScreenHeightPositionAnchor","UnityEngine.BoxCollider","ClickToStore","FavoritePlayerEndcard","TMPro.TextMeshPro","UnityEngine.GameObject","UnityEngine.RectTransform","UnityEngine.MeshRenderer","UnityEngine.EventSystems.UIBehaviour","TMPro.TMP_FontAsset","UnityEngine.MeshFilter","PlayerCardUIManager","Ply_SoundManager","FavoritePlayerManager","PlayerSlot","FavoritePlayerCard","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","TMPro.TextMeshProUGUI","UnityEngine.UI.Image","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.Font","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.Collider","BatStrikeController","SlotTrigger","UnityEngine.BoxCollider2D","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.InputSystem.UI.InputSystemUIInputModule","UnityEngine.InputSystem.UI.TrackedDeviceRaycaster","TMPro.TextContainer","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.38f1";

Deserializers.productName = "PLY_MiniSoccer";

Deserializers.lunaInitializationTime = "07/15/2026 03:53:54";

Deserializers.lunaDaysRunning = "1.9";

Deserializers.lunaVersion = "7.1.0";

Deserializers.lunaSHA = "cf93782349542fe0b84ad13951a26809f8419628";

Deserializers.creativeName = "";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1776";

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

Deserializers.buildID = "d26b3e32-2332-4c6d-abae-ebfc16ae60dc";

Deserializers.runtimeInitializeOnLoadInfos = [[["Unity","Services","Core","Internal","UnityServicesInitializer","EnableServicesInitializationAsync"],["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["DG","Tweening","DOTween","RuntimeOnLoad"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["Unity","Services","Core","Registration","CorePackageInitializer","InitializeOnLoad"],["Unity","Services","Core","Internal","TaskAsyncOperation","SetScheduler"],["Unity","Services","Core","Environments","Client","Scheduler","EngineStateHelper","Init"],["Unity","Services","Core","Environments","Client","Scheduler","ThreadHelper","Init"],["Ua2CoreInitializeCallback","Register"],["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["Unity","AI","Navigation","NavMeshLink","ClearTrackedList"],["Unity","AI","Navigation","NavMeshSurface","ClearNavMeshSurfaces"],["Unity","AI","Navigation","NavMeshModifierVolume","ClearNavMeshModifiers"],["Unity","AI","Navigation","NavMeshModifier","ClearNavMeshModifiers"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["Unity","Services","Core","Internal","UnityServicesInitializer","CreateStaticInstance"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[["Unity","Services","Core","Environments","Client","Http","JsonHelpers","RegisterTypesForAOT"]],[["Unity","Services","Core","UnityThreadUtils","CaptureUnityThreadInfo"],["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

