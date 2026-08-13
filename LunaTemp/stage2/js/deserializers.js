var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i1884 = root || request.c( 'UnityEngine.JointSpring' )
  var i1885 = data
  i1884.spring = i1885[0]
  i1884.damper = i1885[1]
  i1884.targetPosition = i1885[2]
  return i1884
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i1886 = root || request.c( 'UnityEngine.JointMotor' )
  var i1887 = data
  i1886.m_TargetVelocity = i1887[0]
  i1886.m_Force = i1887[1]
  i1886.m_FreeSpin = i1887[2]
  return i1886
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i1888 = root || request.c( 'UnityEngine.JointLimits' )
  var i1889 = data
  i1888.m_Min = i1889[0]
  i1888.m_Max = i1889[1]
  i1888.m_Bounciness = i1889[2]
  i1888.m_BounceMinVelocity = i1889[3]
  i1888.m_ContactDistance = i1889[4]
  i1888.minBounce = i1889[5]
  i1888.maxBounce = i1889[6]
  return i1888
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i1890 = root || request.c( 'UnityEngine.JointDrive' )
  var i1891 = data
  i1890.m_PositionSpring = i1891[0]
  i1890.m_PositionDamper = i1891[1]
  i1890.m_MaximumForce = i1891[2]
  i1890.m_UseAcceleration = i1891[3]
  return i1890
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i1892 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i1893 = data
  i1892.m_Spring = i1893[0]
  i1892.m_Damper = i1893[1]
  return i1892
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i1894 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i1895 = data
  i1894.m_Limit = i1895[0]
  i1894.m_Bounciness = i1895[1]
  i1894.m_ContactDistance = i1895[2]
  return i1894
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i1896 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i1897 = data
  i1896.m_ExtremumSlip = i1897[0]
  i1896.m_ExtremumValue = i1897[1]
  i1896.m_AsymptoteSlip = i1897[2]
  i1896.m_AsymptoteValue = i1897[3]
  i1896.m_Stiffness = i1897[4]
  return i1896
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i1898 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i1899 = data
  i1898.m_LowerAngle = i1899[0]
  i1898.m_UpperAngle = i1899[1]
  return i1898
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i1900 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i1901 = data
  i1900.m_MotorSpeed = i1901[0]
  i1900.m_MaximumMotorTorque = i1901[1]
  return i1900
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i1902 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i1903 = data
  i1902.m_DampingRatio = i1903[0]
  i1902.m_Frequency = i1903[1]
  i1902.m_Angle = i1903[2]
  return i1902
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i1904 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i1905 = data
  i1904.m_LowerTranslation = i1905[0]
  i1904.m_UpperTranslation = i1905[1]
  return i1904
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i1906 = root || new pc.UnityMaterial()
  var i1907 = data
  i1906.name = i1907[0]
  request.r(i1907[1], i1907[2], 0, i1906, 'shader')
  i1906.renderQueue = i1907[3]
  i1906.enableInstancing = !!i1907[4]
  var i1909 = i1907[5]
  var i1908 = []
  for(var i = 0; i < i1909.length; i += 1) {
    i1908.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i1909[i + 0]) );
  }
  i1906.floatParameters = i1908
  var i1911 = i1907[6]
  var i1910 = []
  for(var i = 0; i < i1911.length; i += 1) {
    i1910.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i1911[i + 0]) );
  }
  i1906.colorParameters = i1910
  var i1913 = i1907[7]
  var i1912 = []
  for(var i = 0; i < i1913.length; i += 1) {
    i1912.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i1913[i + 0]) );
  }
  i1906.vectorParameters = i1912
  var i1915 = i1907[8]
  var i1914 = []
  for(var i = 0; i < i1915.length; i += 1) {
    i1914.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i1915[i + 0]) );
  }
  i1906.textureParameters = i1914
  var i1917 = i1907[9]
  var i1916 = []
  for(var i = 0; i < i1917.length; i += 1) {
    i1916.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i1917[i + 0]) );
  }
  i1906.materialFlags = i1916
  return i1906
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i1920 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i1921 = data
  i1920.name = i1921[0]
  i1920.value = i1921[1]
  return i1920
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i1924 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i1925 = data
  i1924.name = i1925[0]
  i1924.value = new pc.Color(i1925[1], i1925[2], i1925[3], i1925[4])
  return i1924
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i1928 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i1929 = data
  i1928.name = i1929[0]
  i1928.value = new pc.Vec4( i1929[1], i1929[2], i1929[3], i1929[4] )
  return i1928
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i1932 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i1933 = data
  i1932.name = i1933[0]
  request.r(i1933[1], i1933[2], 0, i1932, 'value')
  return i1932
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i1936 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i1937 = data
  i1936.name = i1937[0]
  i1936.enabled = !!i1937[1]
  return i1936
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i1938 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i1939 = data
  i1938.name = i1939[0]
  i1938.width = i1939[1]
  i1938.height = i1939[2]
  i1938.mipmapCount = i1939[3]
  i1938.anisoLevel = i1939[4]
  i1938.filterMode = i1939[5]
  i1938.hdr = !!i1939[6]
  i1938.format = i1939[7]
  i1938.wrapMode = i1939[8]
  i1938.alphaIsTransparency = !!i1939[9]
  i1938.alphaSource = i1939[10]
  i1938.graphicsFormat = i1939[11]
  i1938.sRGBTexture = !!i1939[12]
  i1938.desiredColorSpace = i1939[13]
  i1938.wrapU = i1939[14]
  i1938.wrapV = i1939[15]
  return i1938
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i1940 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i1941 = data
  i1940.name = i1941[0]
  i1940.halfPrecision = !!i1941[1]
  i1940.useSimplification = !!i1941[2]
  i1940.useUInt32IndexFormat = !!i1941[3]
  i1940.vertexCount = i1941[4]
  i1940.aabb = i1941[5]
  var i1943 = i1941[6]
  var i1942 = []
  for(var i = 0; i < i1943.length; i += 1) {
    i1942.push( !!i1943[i + 0] );
  }
  i1940.streams = i1942
  i1940.vertices = i1941[7]
  var i1945 = i1941[8]
  var i1944 = []
  for(var i = 0; i < i1945.length; i += 1) {
    i1944.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i1945[i + 0]) );
  }
  i1940.subMeshes = i1944
  var i1947 = i1941[9]
  var i1946 = []
  for(var i = 0; i < i1947.length; i += 16) {
    i1946.push( new pc.Mat4().setData(i1947[i + 0], i1947[i + 1], i1947[i + 2], i1947[i + 3],  i1947[i + 4], i1947[i + 5], i1947[i + 6], i1947[i + 7],  i1947[i + 8], i1947[i + 9], i1947[i + 10], i1947[i + 11],  i1947[i + 12], i1947[i + 13], i1947[i + 14], i1947[i + 15]) );
  }
  i1940.bindposes = i1946
  var i1949 = i1941[10]
  var i1948 = []
  for(var i = 0; i < i1949.length; i += 1) {
    i1948.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i1949[i + 0]) );
  }
  i1940.blendShapes = i1948
  return i1940
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i1954 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i1955 = data
  i1954.triangles = i1955[0]
  return i1954
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i1960 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i1961 = data
  i1960.name = i1961[0]
  var i1963 = i1961[1]
  var i1962 = []
  for(var i = 0; i < i1963.length; i += 1) {
    i1962.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i1963[i + 0]) );
  }
  i1960.frames = i1962
  return i1960
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i1964 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i1965 = data
  i1964.name = i1965[0]
  i1964.index = i1965[1]
  i1964.startup = !!i1965[2]
  return i1964
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1966 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1967 = data
  i1966.aspect = i1967[0]
  i1966.orthographic = !!i1967[1]
  i1966.orthographicSize = i1967[2]
  i1966.backgroundColor = new pc.Color(i1967[3], i1967[4], i1967[5], i1967[6])
  i1966.nearClipPlane = i1967[7]
  i1966.farClipPlane = i1967[8]
  i1966.fieldOfView = i1967[9]
  i1966.depth = i1967[10]
  i1966.clearFlags = i1967[11]
  i1966.cullingMask = i1967[12]
  i1966.rect = i1967[13]
  request.r(i1967[14], i1967[15], 0, i1966, 'targetTexture')
  i1966.usePhysicalProperties = !!i1967[16]
  i1966.focalLength = i1967[17]
  i1966.sensorSize = new pc.Vec2( i1967[18], i1967[19] )
  i1966.lensShift = new pc.Vec2( i1967[20], i1967[21] )
  i1966.gateFit = i1967[22]
  i1966.commandBufferCount = i1967[23]
  i1966.cameraType = i1967[24]
  i1966.enabled = !!i1967[25]
  return i1966
}

Deserializers["CameraFollow2D"] = function (request, data, root) {
  var i1968 = root || request.c( 'CameraFollow2D' )
  var i1969 = data
  request.r(i1969[0], i1969[1], 0, i1968, 'target')
  i1968.smoothSpeed = i1969[2]
  i1968.offset = new pc.Vec3( i1969[3], i1969[4], i1969[5] )
  i1968.followY = !!i1969[6]
  return i1968
}

Deserializers["AutoCameraFit"] = function (request, data, root) {
  var i1970 = root || request.c( 'AutoCameraFit' )
  var i1971 = data
  request.r(i1971[0], i1971[1], 0, i1970, 'tallScreenObject')
  i1970.tallScreenRatioThreshold = i1971[2]
  i1970.tallScreenYOffset = i1971[3]
  request.r(i1971[4], i1971[5], 0, i1970, 'canvasBtn')
  request.r(i1971[6], i1971[7], 0, i1970, 'targetArea')
  i1970.paddingLandscape = i1971[8]
  i1970.paddingPortrait = i1971[9]
  i1970.extraPaddingSmallScreen = i1971[10]
  i1970.smallScreenThreshold = i1971[11]
  i1970.autoUpdateOnResize = !!i1971[12]
  i1970.adjustInEditMode = !!i1971[13]
  return i1970
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i1972 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i1973 = data
  i1972.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i1973[0], i1972.main)
  i1972.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i1973[1], i1972.colorBySpeed)
  i1972.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i1973[2], i1972.colorOverLifetime)
  i1972.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i1973[3], i1972.emission)
  i1972.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i1973[4], i1972.rotationBySpeed)
  i1972.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i1973[5], i1972.rotationOverLifetime)
  i1972.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i1973[6], i1972.shape)
  i1972.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i1973[7], i1972.sizeBySpeed)
  i1972.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i1973[8], i1972.sizeOverLifetime)
  i1972.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i1973[9], i1972.textureSheetAnimation)
  i1972.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i1973[10], i1972.velocityOverLifetime)
  i1972.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i1973[11], i1972.noise)
  i1972.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i1973[12], i1972.inheritVelocity)
  i1972.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i1973[13], i1972.forceOverLifetime)
  i1972.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i1973[14], i1972.limitVelocityOverLifetime)
  i1972.useAutoRandomSeed = !!i1973[15]
  i1972.randomSeed = i1973[16]
  return i1972
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i1974 = root || new pc.ParticleSystemMain()
  var i1975 = data
  i1974.duration = i1975[0]
  i1974.loop = !!i1975[1]
  i1974.prewarm = !!i1975[2]
  i1974.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1975[3], i1974.startDelay)
  i1974.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1975[4], i1974.startLifetime)
  i1974.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1975[5], i1974.startSpeed)
  i1974.startSize3D = !!i1975[6]
  i1974.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1975[7], i1974.startSizeX)
  i1974.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1975[8], i1974.startSizeY)
  i1974.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1975[9], i1974.startSizeZ)
  i1974.startRotation3D = !!i1975[10]
  i1974.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1975[11], i1974.startRotationX)
  i1974.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1975[12], i1974.startRotationY)
  i1974.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1975[13], i1974.startRotationZ)
  i1974.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1975[14], i1974.startColor)
  i1974.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1975[15], i1974.gravityModifier)
  i1974.simulationSpace = i1975[16]
  request.r(i1975[17], i1975[18], 0, i1974, 'customSimulationSpace')
  i1974.simulationSpeed = i1975[19]
  i1974.useUnscaledTime = !!i1975[20]
  i1974.scalingMode = i1975[21]
  i1974.playOnAwake = !!i1975[22]
  i1974.maxParticles = i1975[23]
  i1974.emitterVelocityMode = i1975[24]
  i1974.stopAction = i1975[25]
  return i1974
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i1976 = root || new pc.MinMaxCurve()
  var i1977 = data
  i1976.mode = i1977[0]
  i1976.curveMin = new pc.AnimationCurve( { keys_flow: i1977[1] } )
  i1976.curveMax = new pc.AnimationCurve( { keys_flow: i1977[2] } )
  i1976.curveMultiplier = i1977[3]
  i1976.constantMin = i1977[4]
  i1976.constantMax = i1977[5]
  return i1976
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i1978 = root || new pc.MinMaxGradient()
  var i1979 = data
  i1978.mode = i1979[0]
  i1978.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i1979[1], i1978.gradientMin)
  i1978.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i1979[2], i1978.gradientMax)
  i1978.colorMin = new pc.Color(i1979[3], i1979[4], i1979[5], i1979[6])
  i1978.colorMax = new pc.Color(i1979[7], i1979[8], i1979[9], i1979[10])
  return i1978
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i1980 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i1981 = data
  i1980.mode = i1981[0]
  var i1983 = i1981[1]
  var i1982 = []
  for(var i = 0; i < i1983.length; i += 1) {
    i1982.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i1983[i + 0]) );
  }
  i1980.colorKeys = i1982
  var i1985 = i1981[2]
  var i1984 = []
  for(var i = 0; i < i1985.length; i += 1) {
    i1984.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i1985[i + 0]) );
  }
  i1980.alphaKeys = i1984
  return i1980
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i1986 = root || new pc.ParticleSystemColorBySpeed()
  var i1987 = data
  i1986.enabled = !!i1987[0]
  i1986.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1987[1], i1986.color)
  i1986.range = new pc.Vec2( i1987[2], i1987[3] )
  return i1986
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i1990 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i1991 = data
  i1990.color = new pc.Color(i1991[0], i1991[1], i1991[2], i1991[3])
  i1990.time = i1991[4]
  return i1990
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i1994 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i1995 = data
  i1994.alpha = i1995[0]
  i1994.time = i1995[1]
  return i1994
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i1996 = root || new pc.ParticleSystemColorOverLifetime()
  var i1997 = data
  i1996.enabled = !!i1997[0]
  i1996.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1997[1], i1996.color)
  return i1996
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i1998 = root || new pc.ParticleSystemEmitter()
  var i1999 = data
  i1998.enabled = !!i1999[0]
  i1998.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1999[1], i1998.rateOverTime)
  i1998.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1999[2], i1998.rateOverDistance)
  var i2001 = i1999[3]
  var i2000 = []
  for(var i = 0; i < i2001.length; i += 1) {
    i2000.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i2001[i + 0]) );
  }
  i1998.bursts = i2000
  return i1998
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i2004 = root || new pc.ParticleSystemBurst()
  var i2005 = data
  i2004.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2005[0], i2004.count)
  i2004.cycleCount = i2005[1]
  i2004.minCount = i2005[2]
  i2004.maxCount = i2005[3]
  i2004.repeatInterval = i2005[4]
  i2004.time = i2005[5]
  return i2004
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i2006 = root || new pc.ParticleSystemRotationBySpeed()
  var i2007 = data
  i2006.enabled = !!i2007[0]
  i2006.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2007[1], i2006.x)
  i2006.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2007[2], i2006.y)
  i2006.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2007[3], i2006.z)
  i2006.separateAxes = !!i2007[4]
  i2006.range = new pc.Vec2( i2007[5], i2007[6] )
  return i2006
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i2008 = root || new pc.ParticleSystemRotationOverLifetime()
  var i2009 = data
  i2008.enabled = !!i2009[0]
  i2008.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2009[1], i2008.x)
  i2008.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2009[2], i2008.y)
  i2008.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2009[3], i2008.z)
  i2008.separateAxes = !!i2009[4]
  return i2008
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i2010 = root || new pc.ParticleSystemShape()
  var i2011 = data
  i2010.enabled = !!i2011[0]
  i2010.shapeType = i2011[1]
  i2010.randomDirectionAmount = i2011[2]
  i2010.sphericalDirectionAmount = i2011[3]
  i2010.randomPositionAmount = i2011[4]
  i2010.alignToDirection = !!i2011[5]
  i2010.radius = i2011[6]
  i2010.radiusMode = i2011[7]
  i2010.radiusSpread = i2011[8]
  i2010.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2011[9], i2010.radiusSpeed)
  i2010.radiusThickness = i2011[10]
  i2010.angle = i2011[11]
  i2010.length = i2011[12]
  i2010.boxThickness = new pc.Vec3( i2011[13], i2011[14], i2011[15] )
  i2010.meshShapeType = i2011[16]
  request.r(i2011[17], i2011[18], 0, i2010, 'mesh')
  request.r(i2011[19], i2011[20], 0, i2010, 'meshRenderer')
  request.r(i2011[21], i2011[22], 0, i2010, 'skinnedMeshRenderer')
  i2010.useMeshMaterialIndex = !!i2011[23]
  i2010.meshMaterialIndex = i2011[24]
  i2010.useMeshColors = !!i2011[25]
  i2010.normalOffset = i2011[26]
  i2010.arc = i2011[27]
  i2010.arcMode = i2011[28]
  i2010.arcSpread = i2011[29]
  i2010.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2011[30], i2010.arcSpeed)
  i2010.donutRadius = i2011[31]
  i2010.position = new pc.Vec3( i2011[32], i2011[33], i2011[34] )
  i2010.rotation = new pc.Vec3( i2011[35], i2011[36], i2011[37] )
  i2010.scale = new pc.Vec3( i2011[38], i2011[39], i2011[40] )
  return i2010
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i2012 = root || new pc.ParticleSystemSizeBySpeed()
  var i2013 = data
  i2012.enabled = !!i2013[0]
  i2012.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2013[1], i2012.x)
  i2012.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2013[2], i2012.y)
  i2012.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2013[3], i2012.z)
  i2012.separateAxes = !!i2013[4]
  i2012.range = new pc.Vec2( i2013[5], i2013[6] )
  return i2012
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i2014 = root || new pc.ParticleSystemSizeOverLifetime()
  var i2015 = data
  i2014.enabled = !!i2015[0]
  i2014.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2015[1], i2014.x)
  i2014.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2015[2], i2014.y)
  i2014.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2015[3], i2014.z)
  i2014.separateAxes = !!i2015[4]
  return i2014
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i2016 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i2017 = data
  i2016.enabled = !!i2017[0]
  i2016.mode = i2017[1]
  i2016.animation = i2017[2]
  i2016.numTilesX = i2017[3]
  i2016.numTilesY = i2017[4]
  i2016.useRandomRow = !!i2017[5]
  i2016.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2017[6], i2016.frameOverTime)
  i2016.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2017[7], i2016.startFrame)
  i2016.cycleCount = i2017[8]
  i2016.rowIndex = i2017[9]
  i2016.flipU = i2017[10]
  i2016.flipV = i2017[11]
  i2016.spriteCount = i2017[12]
  var i2019 = i2017[13]
  var i2018 = []
  for(var i = 0; i < i2019.length; i += 2) {
  request.r(i2019[i + 0], i2019[i + 1], 2, i2018, '')
  }
  i2016.sprites = i2018
  return i2016
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i2022 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i2023 = data
  i2022.enabled = !!i2023[0]
  i2022.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2023[1], i2022.x)
  i2022.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2023[2], i2022.y)
  i2022.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2023[3], i2022.z)
  i2022.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2023[4], i2022.radial)
  i2022.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2023[5], i2022.speedModifier)
  i2022.space = i2023[6]
  i2022.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2023[7], i2022.orbitalX)
  i2022.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2023[8], i2022.orbitalY)
  i2022.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2023[9], i2022.orbitalZ)
  i2022.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2023[10], i2022.orbitalOffsetX)
  i2022.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2023[11], i2022.orbitalOffsetY)
  i2022.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2023[12], i2022.orbitalOffsetZ)
  return i2022
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i2024 = root || new pc.ParticleSystemNoise()
  var i2025 = data
  i2024.enabled = !!i2025[0]
  i2024.separateAxes = !!i2025[1]
  i2024.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2025[2], i2024.strengthX)
  i2024.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2025[3], i2024.strengthY)
  i2024.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2025[4], i2024.strengthZ)
  i2024.frequency = i2025[5]
  i2024.damping = !!i2025[6]
  i2024.octaveCount = i2025[7]
  i2024.octaveMultiplier = i2025[8]
  i2024.octaveScale = i2025[9]
  i2024.quality = i2025[10]
  i2024.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2025[11], i2024.scrollSpeed)
  i2024.scrollSpeedMultiplier = i2025[12]
  i2024.remapEnabled = !!i2025[13]
  i2024.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2025[14], i2024.remapX)
  i2024.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2025[15], i2024.remapY)
  i2024.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2025[16], i2024.remapZ)
  i2024.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2025[17], i2024.positionAmount)
  i2024.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2025[18], i2024.rotationAmount)
  i2024.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2025[19], i2024.sizeAmount)
  return i2024
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i2026 = root || new pc.ParticleSystemInheritVelocity()
  var i2027 = data
  i2026.enabled = !!i2027[0]
  i2026.mode = i2027[1]
  i2026.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2027[2], i2026.curve)
  return i2026
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i2028 = root || new pc.ParticleSystemForceOverLifetime()
  var i2029 = data
  i2028.enabled = !!i2029[0]
  i2028.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2029[1], i2028.x)
  i2028.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2029[2], i2028.y)
  i2028.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2029[3], i2028.z)
  i2028.space = i2029[4]
  i2028.randomized = !!i2029[5]
  return i2028
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i2030 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i2031 = data
  i2030.enabled = !!i2031[0]
  i2030.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2031[1], i2030.limit)
  i2030.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2031[2], i2030.limitX)
  i2030.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2031[3], i2030.limitY)
  i2030.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2031[4], i2030.limitZ)
  i2030.dampen = i2031[5]
  i2030.separateAxes = !!i2031[6]
  i2030.space = i2031[7]
  i2030.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2031[8], i2030.drag)
  i2030.multiplyDragByParticleSize = !!i2031[9]
  i2030.multiplyDragByParticleVelocity = !!i2031[10]
  return i2030
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i2032 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i2033 = data
  request.r(i2033[0], i2033[1], 0, i2032, 'mesh')
  i2032.meshCount = i2033[2]
  i2032.activeVertexStreamsCount = i2033[3]
  i2032.alignment = i2033[4]
  i2032.renderMode = i2033[5]
  i2032.sortMode = i2033[6]
  i2032.lengthScale = i2033[7]
  i2032.velocityScale = i2033[8]
  i2032.cameraVelocityScale = i2033[9]
  i2032.normalDirection = i2033[10]
  i2032.sortingFudge = i2033[11]
  i2032.minParticleSize = i2033[12]
  i2032.maxParticleSize = i2033[13]
  i2032.pivot = new pc.Vec3( i2033[14], i2033[15], i2033[16] )
  request.r(i2033[17], i2033[18], 0, i2032, 'trailMaterial')
  i2032.applyActiveColorSpace = !!i2033[19]
  i2032.enabled = !!i2033[20]
  request.r(i2033[21], i2033[22], 0, i2032, 'sharedMaterial')
  var i2035 = i2033[23]
  var i2034 = []
  for(var i = 0; i < i2035.length; i += 2) {
  request.r(i2035[i + 0], i2035[i + 1], 2, i2034, '')
  }
  i2032.sharedMaterials = i2034
  i2032.receiveShadows = !!i2033[24]
  i2032.shadowCastingMode = i2033[25]
  i2032.sortingLayerID = i2033[26]
  i2032.sortingOrder = i2033[27]
  i2032.lightmapIndex = i2033[28]
  i2032.lightmapSceneIndex = i2033[29]
  i2032.lightmapScaleOffset = new pc.Vec4( i2033[30], i2033[31], i2033[32], i2033[33] )
  i2032.lightProbeUsage = i2033[34]
  i2032.reflectionProbeUsage = i2033[35]
  return i2032
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i2038 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i2039 = data
  i2038.name = i2039[0]
  i2038.tagId = i2039[1]
  i2038.enabled = !!i2039[2]
  i2038.isStatic = !!i2039[3]
  i2038.layer = i2039[4]
  return i2038
}

Deserializers["Ply_SoundManager"] = function (request, data, root) {
  var i2040 = root || request.c( 'Ply_SoundManager' )
  var i2041 = data
  i2040.fxAudio = request.d('FxAudio', i2041[0], i2040.fxAudio)
  request.r(i2041[1], i2041[2], 0, i2040, 'bgm1')
  return i2040
}

Deserializers["FxAudio"] = function (request, data, root) {
  var i2042 = root || request.c( 'FxAudio' )
  var i2043 = data
  i2042.ClickBox = request.d('SoundData', i2043[0], i2042.ClickBox)
  i2042.Happy = request.d('SoundData', i2043[1], i2042.Happy)
  i2042.Wrong = request.d('SoundData', i2043[2], i2042.Wrong)
  i2042.Spray = request.d('SoundData', i2043[3], i2042.Spray)
  i2042.Brush = request.d('SoundData', i2043[4], i2042.Brush)
  i2042.Keo = request.d('SoundData', i2043[5], i2042.Keo)
  i2042.Confetti = request.d('SoundData', i2043[6], i2042.Confetti)
  i2042.Lose2 = request.d('SoundData', i2043[7], i2042.Lose2)
  return i2042
}

Deserializers["SoundData"] = function (request, data, root) {
  var i2044 = root || request.c( 'SoundData' )
  var i2045 = data
  request.r(i2045[0], i2045[1], 0, i2044, 'clip')
  i2044.repeatCount = i2045[2]
  return i2044
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i2046 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i2047 = data
  request.r(i2047[0], i2047[1], 0, i2046, 'clip')
  request.r(i2047[2], i2047[3], 0, i2046, 'outputAudioMixerGroup')
  i2046.playOnAwake = !!i2047[4]
  i2046.loop = !!i2047[5]
  i2046.time = i2047[6]
  i2046.volume = i2047[7]
  i2046.pitch = i2047[8]
  i2046.enabled = !!i2047[9]
  return i2046
}

Deserializers["HaalandGame.HaalandGameManager"] = function (request, data, root) {
  var i2048 = root || request.c( 'HaalandGame.HaalandGameManager' )
  var i2049 = data
  request.r(i2049[0], i2049[1], 0, i2048, 'tutUI')
  request.r(i2049[2], i2049[3], 0, i2048, 'ronaldoTackle')
  request.r(i2049[4], i2049[5], 0, i2048, 'ronaldoTackleAnimator')
  i2048.startRonaldoTackleTrigger = i2049[6]
  request.r(i2049[7], i2049[8], 0, i2048, 'messiTackle')
  request.r(i2049[9], i2049[10], 0, i2048, 'messiTackleAnimator')
  i2048.startMessiTackleTrigger = i2049[11]
  request.r(i2049[12], i2049[13], 0, i2048, 'haalandDribbleImage')
  request.r(i2049[14], i2049[15], 0, i2048, 'fightingCloud')
  request.r(i2049[16], i2049[17], 0, i2048, 'haalandHurt')
  request.r(i2049[18], i2049[19], 0, i2048, 'standPlayers')
  request.r(i2049[20], i2049[21], 0, i2048, 'standPlayersAnimator')
  i2048.standPlayerEnterTrigger = i2049[22]
  request.r(i2049[23], i2049[24], 0, i2048, 'questionUI')
  request.r(i2049[25], i2049[26], 0, i2048, 'wrongChoiceUI')
  request.r(i2049[27], i2049[28], 0, i2048, 'winChoiceUI')
  request.r(i2049[29], i2049[30], 0, i2048, 'winExtraObj1')
  request.r(i2049[31], i2049[32], 0, i2048, 'winExtraObj2')
  request.r(i2049[33], i2049[34], 0, i2048, 'iconListUI')
  request.r(i2049[35], i2049[36], 0, i2048, 'refereeAnimator')
  i2048.refereeLookAroundTrigger = i2049[37]
  i2048.useAutoTimers = !!i2049[38]
  i2048.tackleHideDelay = i2049[39]
  i2048.impactCloudDelay = i2049[40]
  i2048.haalandHurtDelay = i2049[41]
  i2048.cloudDuration = i2049[42]
  i2048.refereeAnimDelay = i2049[43]
  request.r(i2049[44], i2049[45], 0, i2048, 'ronaldoStandAnimator')
  request.r(i2049[46], i2049[47], 0, i2048, 'viniStandAnimator')
  request.r(i2049[48], i2049[49], 0, i2048, 'messiStandAnimator')
  request.r(i2049[50], i2049[51], 0, i2048, 'mbappeStandAnimator')
  request.r(i2049[52], i2049[53], 0, i2048, 'ronaldoChatBubble')
  request.r(i2049[54], i2049[55], 0, i2048, 'messiChatBubble')
  request.r(i2049[56], i2049[57], 0, i2048, 'viniChatBubble')
  request.r(i2049[58], i2049[59], 0, i2048, 'mbappeChatBubble')
  request.r(i2049[60], i2049[61], 0, i2048, 'ronaldoSpriteRenderer')
  request.r(i2049[62], i2049[63], 0, i2048, 'ronaldoSadSprite')
  request.r(i2049[64], i2049[65], 0, i2048, 'ronaldoEvilLaughSprite')
  request.r(i2049[66], i2049[67], 0, i2048, 'messiSpriteRenderer')
  request.r(i2049[68], i2049[69], 0, i2048, 'messiSadSprite')
  request.r(i2049[70], i2049[71], 0, i2048, 'viniSpriteRenderer')
  request.r(i2049[72], i2049[73], 0, i2048, 'viniSadSprite')
  request.r(i2049[74], i2049[75], 0, i2048, 'mbappeSpriteRenderer')
  request.r(i2049[76], i2049[77], 0, i2048, 'mbappeSadSprite')
  i2048.currentLevel = i2049[78]
  return i2048
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i2050 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i2051 = data
  i2050.pivot = new pc.Vec2( i2051[0], i2051[1] )
  i2050.anchorMin = new pc.Vec2( i2051[2], i2051[3] )
  i2050.anchorMax = new pc.Vec2( i2051[4], i2051[5] )
  i2050.sizeDelta = new pc.Vec2( i2051[6], i2051[7] )
  i2050.anchoredPosition3D = new pc.Vec3( i2051[8], i2051[9], i2051[10] )
  i2050.rotation = new pc.Quat(i2051[11], i2051[12], i2051[13], i2051[14])
  i2050.scale = new pc.Vec3( i2051[15], i2051[16], i2051[17] )
  return i2050
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i2052 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i2053 = data
  i2052.planeDistance = i2053[0]
  i2052.referencePixelsPerUnit = i2053[1]
  i2052.isFallbackOverlay = !!i2053[2]
  i2052.renderMode = i2053[3]
  i2052.renderOrder = i2053[4]
  i2052.sortingLayerName = i2053[5]
  i2052.sortingOrder = i2053[6]
  i2052.scaleFactor = i2053[7]
  request.r(i2053[8], i2053[9], 0, i2052, 'worldCamera')
  i2052.overrideSorting = !!i2053[10]
  i2052.pixelPerfect = !!i2053[11]
  i2052.targetDisplay = i2053[12]
  i2052.overridePixelPerfect = !!i2053[13]
  i2052.enabled = !!i2053[14]
  return i2052
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i2054 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i2055 = data
  i2054.m_UiScaleMode = i2055[0]
  i2054.m_ReferencePixelsPerUnit = i2055[1]
  i2054.m_ScaleFactor = i2055[2]
  i2054.m_ReferenceResolution = new pc.Vec2( i2055[3], i2055[4] )
  i2054.m_ScreenMatchMode = i2055[5]
  i2054.m_MatchWidthOrHeight = i2055[6]
  i2054.m_PhysicalUnit = i2055[7]
  i2054.m_FallbackScreenDPI = i2055[8]
  i2054.m_DefaultSpriteDPI = i2055[9]
  i2054.m_DynamicPixelsPerUnit = i2055[10]
  i2054.m_PresetInfoIsWorld = !!i2055[11]
  return i2054
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i2056 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i2057 = data
  i2056.m_IgnoreReversedGraphics = !!i2057[0]
  i2056.m_BlockingObjects = i2057[1]
  i2056.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i2057[2] )
  return i2056
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i2058 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i2059 = data
  i2058.cullTransparentMesh = !!i2059[0]
  return i2058
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i2060 = root || request.c( 'UnityEngine.UI.Image' )
  var i2061 = data
  request.r(i2061[0], i2061[1], 0, i2060, 'm_Sprite')
  i2060.m_Type = i2061[2]
  i2060.m_PreserveAspect = !!i2061[3]
  i2060.m_FillCenter = !!i2061[4]
  i2060.m_FillMethod = i2061[5]
  i2060.m_FillAmount = i2061[6]
  i2060.m_FillClockwise = !!i2061[7]
  i2060.m_FillOrigin = i2061[8]
  i2060.m_UseSpriteMesh = !!i2061[9]
  i2060.m_PixelsPerUnitMultiplier = i2061[10]
  request.r(i2061[11], i2061[12], 0, i2060, 'm_Material')
  i2060.m_Maskable = !!i2061[13]
  i2060.m_Color = new pc.Color(i2061[14], i2061[15], i2061[16], i2061[17])
  i2060.m_RaycastTarget = !!i2061[18]
  i2060.m_RaycastPadding = new pc.Vec4( i2061[19], i2061[20], i2061[21], i2061[22] )
  return i2060
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i2062 = root || request.c( 'UnityEngine.UI.Button' )
  var i2063 = data
  i2062.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i2063[0], i2062.m_OnClick)
  i2062.m_Navigation = request.d('UnityEngine.UI.Navigation', i2063[1], i2062.m_Navigation)
  i2062.m_Transition = i2063[2]
  i2062.m_Colors = request.d('UnityEngine.UI.ColorBlock', i2063[3], i2062.m_Colors)
  i2062.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i2063[4], i2062.m_SpriteState)
  i2062.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i2063[5], i2062.m_AnimationTriggers)
  i2062.m_Interactable = !!i2063[6]
  request.r(i2063[7], i2063[8], 0, i2062, 'm_TargetGraphic')
  return i2062
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i2064 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i2065 = data
  i2064.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2065[0], i2064.m_PersistentCalls)
  return i2064
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i2066 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i2067 = data
  var i2069 = i2067[0]
  var i2068 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i2069.length; i += 1) {
    i2068.add(request.d('UnityEngine.Events.PersistentCall', i2069[i + 0]));
  }
  i2066.m_Calls = i2068
  return i2066
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i2072 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i2073 = data
  request.r(i2073[0], i2073[1], 0, i2072, 'm_Target')
  i2072.m_TargetAssemblyTypeName = i2073[2]
  i2072.m_MethodName = i2073[3]
  i2072.m_Mode = i2073[4]
  i2072.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i2073[5], i2072.m_Arguments)
  i2072.m_CallState = i2073[6]
  return i2072
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i2074 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i2075 = data
  request.r(i2075[0], i2075[1], 0, i2074, 'm_ObjectArgument')
  i2074.m_ObjectArgumentAssemblyTypeName = i2075[2]
  i2074.m_IntArgument = i2075[3]
  i2074.m_FloatArgument = i2075[4]
  i2074.m_StringArgument = i2075[5]
  i2074.m_BoolArgument = !!i2075[6]
  return i2074
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i2076 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i2077 = data
  i2076.m_Mode = i2077[0]
  i2076.m_WrapAround = !!i2077[1]
  request.r(i2077[2], i2077[3], 0, i2076, 'm_SelectOnUp')
  request.r(i2077[4], i2077[5], 0, i2076, 'm_SelectOnDown')
  request.r(i2077[6], i2077[7], 0, i2076, 'm_SelectOnLeft')
  request.r(i2077[8], i2077[9], 0, i2076, 'm_SelectOnRight')
  return i2076
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i2078 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i2079 = data
  i2078.m_NormalColor = new pc.Color(i2079[0], i2079[1], i2079[2], i2079[3])
  i2078.m_HighlightedColor = new pc.Color(i2079[4], i2079[5], i2079[6], i2079[7])
  i2078.m_PressedColor = new pc.Color(i2079[8], i2079[9], i2079[10], i2079[11])
  i2078.m_SelectedColor = new pc.Color(i2079[12], i2079[13], i2079[14], i2079[15])
  i2078.m_DisabledColor = new pc.Color(i2079[16], i2079[17], i2079[18], i2079[19])
  i2078.m_ColorMultiplier = i2079[20]
  i2078.m_FadeDuration = i2079[21]
  return i2078
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i2080 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i2081 = data
  request.r(i2081[0], i2081[1], 0, i2080, 'm_HighlightedSprite')
  request.r(i2081[2], i2081[3], 0, i2080, 'm_PressedSprite')
  request.r(i2081[4], i2081[5], 0, i2080, 'm_SelectedSprite')
  request.r(i2081[6], i2081[7], 0, i2080, 'm_DisabledSprite')
  return i2080
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i2082 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i2083 = data
  i2082.m_NormalTrigger = i2083[0]
  i2082.m_HighlightedTrigger = i2083[1]
  i2082.m_PressedTrigger = i2083[2]
  i2082.m_SelectedTrigger = i2083[3]
  i2082.m_DisabledTrigger = i2083[4]
  return i2082
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i2084 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i2085 = data
  request.r(i2085[0], i2085[1], 0, i2084, 'animatorController')
  request.r(i2085[2], i2085[3], 0, i2084, 'avatar')
  i2084.updateMode = i2085[4]
  i2084.hasTransformHierarchy = !!i2085[5]
  i2084.applyRootMotion = !!i2085[6]
  var i2087 = i2085[7]
  var i2086 = []
  for(var i = 0; i < i2087.length; i += 2) {
  request.r(i2087[i + 0], i2087[i + 1], 2, i2086, '')
  }
  i2084.humanBones = i2086
  i2084.enabled = !!i2085[8]
  return i2084
}

Deserializers["HideOnFirstClick"] = function (request, data, root) {
  var i2090 = root || request.c( 'HideOnFirstClick' )
  var i2091 = data
  request.r(i2091[0], i2091[1], 0, i2090, 'objectToHide')
  return i2090
}

Deserializers["ScreenHeightPositionAnchor"] = function (request, data, root) {
  var i2092 = root || request.c( 'ScreenHeightPositionAnchor' )
  var i2093 = data
  request.r(i2093[0], i2093[1], 0, i2092, 'anchorPoint')
  request.r(i2093[2], i2093[3], 0, i2092, 'targetCamera')
  i2092.viewportYRatio = i2093[4]
  i2092.alignOnStart = !!i2093[5]
  i2092.alignOnEnable = !!i2093[6]
  i2092.realignOnScreenSizeChanged = !!i2093[7]
  i2092.drawGizmos = !!i2093[8]
  i2092.targetLineColor = new pc.Color(i2093[9], i2093[10], i2093[11], i2093[12])
  i2092.anchorColor = new pc.Color(i2093[13], i2093[14], i2093[15], i2093[16])
  return i2092
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i2094 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i2095 = data
  i2094.color = new pc.Color(i2095[0], i2095[1], i2095[2], i2095[3])
  request.r(i2095[4], i2095[5], 0, i2094, 'sprite')
  i2094.flipX = !!i2095[6]
  i2094.flipY = !!i2095[7]
  i2094.drawMode = i2095[8]
  i2094.size = new pc.Vec2( i2095[9], i2095[10] )
  i2094.tileMode = i2095[11]
  i2094.adaptiveModeThreshold = i2095[12]
  i2094.maskInteraction = i2095[13]
  i2094.spriteSortPoint = i2095[14]
  i2094.enabled = !!i2095[15]
  request.r(i2095[16], i2095[17], 0, i2094, 'sharedMaterial')
  var i2097 = i2095[18]
  var i2096 = []
  for(var i = 0; i < i2097.length; i += 2) {
  request.r(i2097[i + 0], i2097[i + 1], 2, i2096, '')
  }
  i2094.sharedMaterials = i2096
  i2094.receiveShadows = !!i2095[19]
  i2094.shadowCastingMode = i2095[20]
  i2094.sortingLayerID = i2095[21]
  i2094.sortingOrder = i2095[22]
  i2094.lightmapIndex = i2095[23]
  i2094.lightmapSceneIndex = i2095[24]
  i2094.lightmapScaleOffset = new pc.Vec4( i2095[25], i2095[26], i2095[27], i2095[28] )
  i2094.lightProbeUsage = i2095[29]
  i2094.reflectionProbeUsage = i2095[30]
  return i2094
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i2098 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i2099 = data
  i2098.center = new pc.Vec3( i2099[0], i2099[1], i2099[2] )
  i2098.size = new pc.Vec3( i2099[3], i2099[4], i2099[5] )
  i2098.enabled = !!i2099[6]
  i2098.isTrigger = !!i2099[7]
  request.r(i2099[8], i2099[9], 0, i2098, 'material')
  return i2098
}

Deserializers["HaalandGame.PlayerSelectable"] = function (request, data, root) {
  var i2100 = root || request.c( 'HaalandGame.PlayerSelectable' )
  var i2101 = data
  i2100.playerType = i2101[0]
  i2100.targetLayerName = i2101[1]
  return i2100
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i2102 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i2103 = data
  request.r(i2103[0], i2103[1], 0, i2102, 'additionalVertexStreams')
  i2102.enabled = !!i2103[2]
  request.r(i2103[3], i2103[4], 0, i2102, 'sharedMaterial')
  var i2105 = i2103[5]
  var i2104 = []
  for(var i = 0; i < i2105.length; i += 2) {
  request.r(i2105[i + 0], i2105[i + 1], 2, i2104, '')
  }
  i2102.sharedMaterials = i2104
  i2102.receiveShadows = !!i2103[6]
  i2102.shadowCastingMode = i2103[7]
  i2102.sortingLayerID = i2103[8]
  i2102.sortingOrder = i2103[9]
  i2102.lightmapIndex = i2103[10]
  i2102.lightmapSceneIndex = i2103[11]
  i2102.lightmapScaleOffset = new pc.Vec4( i2103[12], i2103[13], i2103[14], i2103[15] )
  i2102.lightProbeUsage = i2103[16]
  i2102.reflectionProbeUsage = i2103[17]
  return i2102
}

Deserializers["TMPro.TextMeshPro"] = function (request, data, root) {
  var i2106 = root || request.c( 'TMPro.TextMeshPro' )
  var i2107 = data
  i2106._SortingLayer = i2107[0]
  i2106._SortingLayerID = i2107[1]
  i2106._SortingOrder = i2107[2]
  i2106.m_hasFontAssetChanged = !!i2107[3]
  request.r(i2107[4], i2107[5], 0, i2106, 'm_renderer')
  i2106.m_maskType = i2107[6]
  i2106.m_text = i2107[7]
  i2106.m_isRightToLeft = !!i2107[8]
  request.r(i2107[9], i2107[10], 0, i2106, 'm_fontAsset')
  request.r(i2107[11], i2107[12], 0, i2106, 'm_sharedMaterial')
  var i2109 = i2107[13]
  var i2108 = []
  for(var i = 0; i < i2109.length; i += 2) {
  request.r(i2109[i + 0], i2109[i + 1], 2, i2108, '')
  }
  i2106.m_fontSharedMaterials = i2108
  request.r(i2107[14], i2107[15], 0, i2106, 'm_fontMaterial')
  var i2111 = i2107[16]
  var i2110 = []
  for(var i = 0; i < i2111.length; i += 2) {
  request.r(i2111[i + 0], i2111[i + 1], 2, i2110, '')
  }
  i2106.m_fontMaterials = i2110
  i2106.m_fontColor32 = UnityEngine.Color32.ConstructColor(i2107[17], i2107[18], i2107[19], i2107[20])
  i2106.m_fontColor = new pc.Color(i2107[21], i2107[22], i2107[23], i2107[24])
  i2106.m_enableVertexGradient = !!i2107[25]
  i2106.m_colorMode = i2107[26]
  i2106.m_fontColorGradient = request.d('TMPro.VertexGradient', i2107[27], i2106.m_fontColorGradient)
  request.r(i2107[28], i2107[29], 0, i2106, 'm_fontColorGradientPreset')
  request.r(i2107[30], i2107[31], 0, i2106, 'm_spriteAsset')
  i2106.m_tintAllSprites = !!i2107[32]
  request.r(i2107[33], i2107[34], 0, i2106, 'm_StyleSheet')
  i2106.m_TextStyleHashCode = i2107[35]
  i2106.m_overrideHtmlColors = !!i2107[36]
  i2106.m_faceColor = UnityEngine.Color32.ConstructColor(i2107[37], i2107[38], i2107[39], i2107[40])
  i2106.m_fontSize = i2107[41]
  i2106.m_fontSizeBase = i2107[42]
  i2106.m_fontWeight = i2107[43]
  i2106.m_enableAutoSizing = !!i2107[44]
  i2106.m_fontSizeMin = i2107[45]
  i2106.m_fontSizeMax = i2107[46]
  i2106.m_fontStyle = i2107[47]
  i2106.m_HorizontalAlignment = i2107[48]
  i2106.m_VerticalAlignment = i2107[49]
  i2106.m_textAlignment = i2107[50]
  i2106.m_characterSpacing = i2107[51]
  i2106.m_wordSpacing = i2107[52]
  i2106.m_lineSpacing = i2107[53]
  i2106.m_lineSpacingMax = i2107[54]
  i2106.m_paragraphSpacing = i2107[55]
  i2106.m_charWidthMaxAdj = i2107[56]
  i2106.m_TextWrappingMode = i2107[57]
  i2106.m_wordWrappingRatios = i2107[58]
  i2106.m_overflowMode = i2107[59]
  request.r(i2107[60], i2107[61], 0, i2106, 'm_linkedTextComponent')
  request.r(i2107[62], i2107[63], 0, i2106, 'parentLinkedComponent')
  i2106.m_enableKerning = !!i2107[64]
  var i2113 = i2107[65]
  var i2112 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i2113.length; i += 1) {
    i2112.add(i2113[i + 0]);
  }
  i2106.m_ActiveFontFeatures = i2112
  i2106.m_enableExtraPadding = !!i2107[66]
  i2106.checkPaddingRequired = !!i2107[67]
  i2106.m_isRichText = !!i2107[68]
  i2106.m_parseCtrlCharacters = !!i2107[69]
  i2106.m_isOrthographic = !!i2107[70]
  i2106.m_isCullingEnabled = !!i2107[71]
  i2106.m_horizontalMapping = i2107[72]
  i2106.m_verticalMapping = i2107[73]
  i2106.m_uvLineOffset = i2107[74]
  i2106.m_geometrySortingOrder = i2107[75]
  i2106.m_IsTextObjectScaleStatic = !!i2107[76]
  i2106.m_VertexBufferAutoSizeReduction = !!i2107[77]
  i2106.m_useMaxVisibleDescender = !!i2107[78]
  i2106.m_pageToDisplay = i2107[79]
  i2106.m_margin = new pc.Vec4( i2107[80], i2107[81], i2107[82], i2107[83] )
  i2106.m_isUsingLegacyAnimationComponent = !!i2107[84]
  i2106.m_isVolumetricText = !!i2107[85]
  request.r(i2107[86], i2107[87], 0, i2106, 'm_Material')
  i2106.m_EmojiFallbackSupport = !!i2107[88]
  i2106.m_Maskable = !!i2107[89]
  i2106.m_Color = new pc.Color(i2107[90], i2107[91], i2107[92], i2107[93])
  i2106.m_RaycastTarget = !!i2107[94]
  i2106.m_RaycastPadding = new pc.Vec4( i2107[95], i2107[96], i2107[97], i2107[98] )
  return i2106
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i2114 = root || request.c( 'TMPro.VertexGradient' )
  var i2115 = data
  i2114.topLeft = new pc.Color(i2115[0], i2115[1], i2115[2], i2115[3])
  i2114.topRight = new pc.Color(i2115[4], i2115[5], i2115[6], i2115[7])
  i2114.bottomLeft = new pc.Color(i2115[8], i2115[9], i2115[10], i2115[11])
  i2114.bottomRight = new pc.Color(i2115[12], i2115[13], i2115[14], i2115[15])
  return i2114
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i2118 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i2119 = data
  request.r(i2119[0], i2119[1], 0, i2118, 'm_FirstSelected')
  i2118.m_sendNavigationEvents = !!i2119[2]
  i2118.m_DragThreshold = i2119[3]
  return i2118
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i2120 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i2121 = data
  i2120.m_HorizontalAxis = i2121[0]
  i2120.m_VerticalAxis = i2121[1]
  i2120.m_SubmitButton = i2121[2]
  i2120.m_CancelButton = i2121[3]
  i2120.m_InputActionsPerSecond = i2121[4]
  i2120.m_RepeatDelay = i2121[5]
  i2120.m_ForceModuleActive = !!i2121[6]
  i2120.m_SendPointerHoverToParent = !!i2121[7]
  return i2120
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i2122 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i2123 = data
  i2122.ambientIntensity = i2123[0]
  i2122.reflectionIntensity = i2123[1]
  i2122.ambientMode = i2123[2]
  i2122.ambientLight = new pc.Color(i2123[3], i2123[4], i2123[5], i2123[6])
  i2122.ambientSkyColor = new pc.Color(i2123[7], i2123[8], i2123[9], i2123[10])
  i2122.ambientGroundColor = new pc.Color(i2123[11], i2123[12], i2123[13], i2123[14])
  i2122.ambientEquatorColor = new pc.Color(i2123[15], i2123[16], i2123[17], i2123[18])
  i2122.fogColor = new pc.Color(i2123[19], i2123[20], i2123[21], i2123[22])
  i2122.fogEndDistance = i2123[23]
  i2122.fogStartDistance = i2123[24]
  i2122.fogDensity = i2123[25]
  i2122.fog = !!i2123[26]
  request.r(i2123[27], i2123[28], 0, i2122, 'skybox')
  i2122.fogMode = i2123[29]
  var i2125 = i2123[30]
  var i2124 = []
  for(var i = 0; i < i2125.length; i += 1) {
    i2124.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i2125[i + 0]) );
  }
  i2122.lightmaps = i2124
  i2122.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i2123[31], i2122.lightProbes)
  i2122.lightmapsMode = i2123[32]
  i2122.mixedBakeMode = i2123[33]
  i2122.environmentLightingMode = i2123[34]
  i2122.ambientProbe = new pc.SphericalHarmonicsL2(i2123[35])
  i2122.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i2123[36])
  i2122.useReferenceAmbientProbe = !!i2123[37]
  request.r(i2123[38], i2123[39], 0, i2122, 'customReflection')
  request.r(i2123[40], i2123[41], 0, i2122, 'defaultReflection')
  i2122.defaultReflectionMode = i2123[42]
  i2122.defaultReflectionResolution = i2123[43]
  i2122.sunLightObjectId = i2123[44]
  i2122.pixelLightCount = i2123[45]
  i2122.defaultReflectionHDR = !!i2123[46]
  i2122.hasLightDataAsset = !!i2123[47]
  i2122.hasManualGenerate = !!i2123[48]
  return i2122
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i2128 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i2129 = data
  request.r(i2129[0], i2129[1], 0, i2128, 'lightmapColor')
  request.r(i2129[2], i2129[3], 0, i2128, 'lightmapDirection')
  request.r(i2129[4], i2129[5], 0, i2128, 'shadowMask')
  return i2128
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i2130 = root || new UnityEngine.LightProbes()
  var i2131 = data
  return i2130
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i2138 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i2139 = data
  var i2141 = i2139[0]
  var i2140 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i2141.length; i += 1) {
    i2140.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i2141[i + 0]));
  }
  i2138.ShaderCompilationErrors = i2140
  i2138.name = i2139[1]
  i2138.guid = i2139[2]
  var i2143 = i2139[3]
  var i2142 = []
  for(var i = 0; i < i2143.length; i += 1) {
    i2142.push( i2143[i + 0] );
  }
  i2138.shaderDefinedKeywords = i2142
  var i2145 = i2139[4]
  var i2144 = []
  for(var i = 0; i < i2145.length; i += 1) {
    i2144.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i2145[i + 0]) );
  }
  i2138.passes = i2144
  var i2147 = i2139[5]
  var i2146 = []
  for(var i = 0; i < i2147.length; i += 1) {
    i2146.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i2147[i + 0]) );
  }
  i2138.usePasses = i2146
  var i2149 = i2139[6]
  var i2148 = []
  for(var i = 0; i < i2149.length; i += 1) {
    i2148.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i2149[i + 0]) );
  }
  i2138.defaultParameterValues = i2148
  request.r(i2139[7], i2139[8], 0, i2138, 'unityFallbackShader')
  i2138.readDepth = !!i2139[9]
  i2138.hasDepthOnlyPass = !!i2139[10]
  i2138.isCreatedByShaderGraph = !!i2139[11]
  i2138.disableBatching = !!i2139[12]
  i2138.compiled = !!i2139[13]
  return i2138
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i2152 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i2153 = data
  i2152.shaderName = i2153[0]
  i2152.errorMessage = i2153[1]
  return i2152
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i2158 = root || new pc.UnityShaderPass()
  var i2159 = data
  i2158.id = i2159[0]
  i2158.subShaderIndex = i2159[1]
  i2158.name = i2159[2]
  i2158.passType = i2159[3]
  i2158.grabPassTextureName = i2159[4]
  i2158.usePass = !!i2159[5]
  i2158.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2159[6], i2158.zTest)
  i2158.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2159[7], i2158.zWrite)
  i2158.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2159[8], i2158.culling)
  i2158.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2159[9], i2158.blending)
  i2158.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2159[10], i2158.alphaBlending)
  i2158.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2159[11], i2158.colorWriteMask)
  i2158.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2159[12], i2158.offsetUnits)
  i2158.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2159[13], i2158.offsetFactor)
  i2158.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2159[14], i2158.stencilRef)
  i2158.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2159[15], i2158.stencilReadMask)
  i2158.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2159[16], i2158.stencilWriteMask)
  i2158.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2159[17], i2158.stencilOp)
  i2158.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2159[18], i2158.stencilOpFront)
  i2158.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2159[19], i2158.stencilOpBack)
  var i2161 = i2159[20]
  var i2160 = []
  for(var i = 0; i < i2161.length; i += 1) {
    i2160.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i2161[i + 0]) );
  }
  i2158.tags = i2160
  var i2163 = i2159[21]
  var i2162 = []
  for(var i = 0; i < i2163.length; i += 1) {
    i2162.push( i2163[i + 0] );
  }
  i2158.passDefinedKeywords = i2162
  var i2165 = i2159[22]
  var i2164 = []
  for(var i = 0; i < i2165.length; i += 1) {
    i2164.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i2165[i + 0]) );
  }
  i2158.passDefinedKeywordGroups = i2164
  var i2167 = i2159[23]
  var i2166 = []
  for(var i = 0; i < i2167.length; i += 1) {
    i2166.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2167[i + 0]) );
  }
  i2158.variants = i2166
  var i2169 = i2159[24]
  var i2168 = []
  for(var i = 0; i < i2169.length; i += 1) {
    i2168.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2169[i + 0]) );
  }
  i2158.excludedVariants = i2168
  i2158.hasDepthReader = !!i2159[25]
  return i2158
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i2170 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i2171 = data
  i2170.val = i2171[0]
  i2170.name = i2171[1]
  return i2170
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i2172 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i2173 = data
  i2172.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2173[0], i2172.src)
  i2172.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2173[1], i2172.dst)
  i2172.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2173[2], i2172.op)
  return i2172
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i2174 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i2175 = data
  i2174.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2175[0], i2174.pass)
  i2174.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2175[1], i2174.fail)
  i2174.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2175[2], i2174.zFail)
  i2174.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2175[3], i2174.comp)
  return i2174
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i2178 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i2179 = data
  i2178.name = i2179[0]
  i2178.value = i2179[1]
  return i2178
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i2182 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i2183 = data
  var i2185 = i2183[0]
  var i2184 = []
  for(var i = 0; i < i2185.length; i += 1) {
    i2184.push( i2185[i + 0] );
  }
  i2182.keywords = i2184
  i2182.hasDiscard = !!i2183[1]
  return i2182
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i2188 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i2189 = data
  i2188.passId = i2189[0]
  i2188.subShaderIndex = i2189[1]
  var i2191 = i2189[2]
  var i2190 = []
  for(var i = 0; i < i2191.length; i += 1) {
    i2190.push( i2191[i + 0] );
  }
  i2188.keywords = i2190
  i2188.vertexProgram = i2189[3]
  i2188.fragmentProgram = i2189[4]
  i2188.exportedForWebGl2 = !!i2189[5]
  i2188.readDepth = !!i2189[6]
  return i2188
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i2194 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i2195 = data
  request.r(i2195[0], i2195[1], 0, i2194, 'shader')
  i2194.pass = i2195[2]
  return i2194
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i2198 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i2199 = data
  i2198.name = i2199[0]
  i2198.type = i2199[1]
  i2198.value = new pc.Vec4( i2199[2], i2199[3], i2199[4], i2199[5] )
  i2198.textureValue = i2199[6]
  i2198.shaderPropertyFlag = i2199[7]
  return i2198
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i2200 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i2201 = data
  i2200.name = i2201[0]
  request.r(i2201[1], i2201[2], 0, i2200, 'texture')
  i2200.aabb = i2201[3]
  i2200.vertices = i2201[4]
  i2200.triangles = i2201[5]
  i2200.textureRect = UnityEngine.Rect.MinMaxRect(i2201[6], i2201[7], i2201[8], i2201[9])
  i2200.packedRect = UnityEngine.Rect.MinMaxRect(i2201[10], i2201[11], i2201[12], i2201[13])
  i2200.border = new pc.Vec4( i2201[14], i2201[15], i2201[16], i2201[17] )
  i2200.transparency = i2201[18]
  i2200.bounds = i2201[19]
  i2200.pixelsPerUnit = i2201[20]
  i2200.textureWidth = i2201[21]
  i2200.textureHeight = i2201[22]
  i2200.nativeSize = new pc.Vec2( i2201[23], i2201[24] )
  i2200.pivot = new pc.Vec2( i2201[25], i2201[26] )
  i2200.textureRectOffset = new pc.Vec2( i2201[27], i2201[28] )
  return i2200
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i2202 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i2203 = data
  i2202.name = i2203[0]
  return i2202
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i2204 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i2205 = data
  i2204.name = i2205[0]
  i2204.wrapMode = i2205[1]
  i2204.isLooping = !!i2205[2]
  i2204.length = i2205[3]
  var i2207 = i2205[4]
  var i2206 = []
  for(var i = 0; i < i2207.length; i += 1) {
    i2206.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i2207[i + 0]) );
  }
  i2204.curves = i2206
  var i2209 = i2205[5]
  var i2208 = []
  for(var i = 0; i < i2209.length; i += 1) {
    i2208.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i2209[i + 0]) );
  }
  i2204.events = i2208
  i2204.halfPrecision = !!i2205[6]
  i2204._frameRate = i2205[7]
  i2204.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i2205[8], i2204.localBounds)
  i2204.hasMuscleCurves = !!i2205[9]
  var i2211 = i2205[10]
  var i2210 = []
  for(var i = 0; i < i2211.length; i += 1) {
    i2210.push( i2211[i + 0] );
  }
  i2204.clipMuscleConstant = i2210
  i2204.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i2205[11], i2204.clipBindingConstant)
  return i2204
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i2214 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i2215 = data
  i2214.path = i2215[0]
  i2214.hash = i2215[1]
  i2214.componentType = i2215[2]
  i2214.property = i2215[3]
  i2214.keys = i2215[4]
  var i2217 = i2215[5]
  var i2216 = []
  for(var i = 0; i < i2217.length; i += 1) {
    i2216.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i2217[i + 0]) );
  }
  i2214.objectReferenceKeys = i2216
  return i2214
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i2220 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i2221 = data
  i2220.time = i2221[0]
  request.r(i2221[1], i2221[2], 0, i2220, 'value')
  return i2220
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i2224 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i2225 = data
  i2224.functionName = i2225[0]
  i2224.floatParameter = i2225[1]
  i2224.intParameter = i2225[2]
  i2224.stringParameter = i2225[3]
  request.r(i2225[4], i2225[5], 0, i2224, 'objectReferenceParameter')
  i2224.time = i2225[6]
  return i2224
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i2226 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i2227 = data
  i2226.center = new pc.Vec3( i2227[0], i2227[1], i2227[2] )
  i2226.extends = new pc.Vec3( i2227[3], i2227[4], i2227[5] )
  return i2226
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i2230 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i2231 = data
  var i2233 = i2231[0]
  var i2232 = []
  for(var i = 0; i < i2233.length; i += 1) {
    i2232.push( i2233[i + 0] );
  }
  i2230.genericBindings = i2232
  var i2235 = i2231[1]
  var i2234 = []
  for(var i = 0; i < i2235.length; i += 1) {
    i2234.push( i2235[i + 0] );
  }
  i2230.pptrCurveMapping = i2234
  return i2230
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i2236 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i2237 = data
  i2236.name = i2237[0]
  i2236.ascent = i2237[1]
  i2236.originalLineHeight = i2237[2]
  i2236.fontSize = i2237[3]
  var i2239 = i2237[4]
  var i2238 = []
  for(var i = 0; i < i2239.length; i += 1) {
    i2238.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i2239[i + 0]) );
  }
  i2236.characterInfo = i2238
  request.r(i2237[5], i2237[6], 0, i2236, 'texture')
  i2236.originalFontSize = i2237[7]
  return i2236
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i2242 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i2243 = data
  i2242.index = i2243[0]
  i2242.advance = i2243[1]
  i2242.bearing = i2243[2]
  i2242.glyphWidth = i2243[3]
  i2242.glyphHeight = i2243[4]
  i2242.minX = i2243[5]
  i2242.maxX = i2243[6]
  i2242.minY = i2243[7]
  i2242.maxY = i2243[8]
  i2242.uvBottomLeftX = i2243[9]
  i2242.uvBottomLeftY = i2243[10]
  i2242.uvBottomRightX = i2243[11]
  i2242.uvBottomRightY = i2243[12]
  i2242.uvTopLeftX = i2243[13]
  i2242.uvTopLeftY = i2243[14]
  i2242.uvTopRightX = i2243[15]
  i2242.uvTopRightY = i2243[16]
  return i2242
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i2244 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i2245 = data
  i2244.name = i2245[0]
  var i2247 = i2245[1]
  var i2246 = []
  for(var i = 0; i < i2247.length; i += 1) {
    i2246.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i2247[i + 0]) );
  }
  i2244.layers = i2246
  var i2249 = i2245[2]
  var i2248 = []
  for(var i = 0; i < i2249.length; i += 1) {
    i2248.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i2249[i + 0]) );
  }
  i2244.parameters = i2248
  i2244.animationClips = i2245[3]
  i2244.avatarUnsupported = i2245[4]
  return i2244
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i2252 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i2253 = data
  i2252.name = i2253[0]
  i2252.defaultWeight = i2253[1]
  i2252.blendingMode = i2253[2]
  i2252.avatarMask = i2253[3]
  i2252.syncedLayerIndex = i2253[4]
  i2252.syncedLayerAffectsTiming = !!i2253[5]
  i2252.syncedLayers = i2253[6]
  i2252.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2253[7], i2252.stateMachine)
  return i2252
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i2254 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i2255 = data
  i2254.id = i2255[0]
  i2254.name = i2255[1]
  i2254.path = i2255[2]
  var i2257 = i2255[3]
  var i2256 = []
  for(var i = 0; i < i2257.length; i += 1) {
    i2256.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i2257[i + 0]) );
  }
  i2254.states = i2256
  var i2259 = i2255[4]
  var i2258 = []
  for(var i = 0; i < i2259.length; i += 1) {
    i2258.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2259[i + 0]) );
  }
  i2254.machines = i2258
  var i2261 = i2255[5]
  var i2260 = []
  for(var i = 0; i < i2261.length; i += 1) {
    i2260.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2261[i + 0]) );
  }
  i2254.entryStateTransitions = i2260
  var i2263 = i2255[6]
  var i2262 = []
  for(var i = 0; i < i2263.length; i += 1) {
    i2262.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2263[i + 0]) );
  }
  i2254.exitStateTransitions = i2262
  var i2265 = i2255[7]
  var i2264 = []
  for(var i = 0; i < i2265.length; i += 1) {
    i2264.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2265[i + 0]) );
  }
  i2254.anyStateTransitions = i2264
  i2254.defaultStateId = i2255[8]
  return i2254
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i2268 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i2269 = data
  i2268.id = i2269[0]
  i2268.name = i2269[1]
  i2268.cycleOffset = i2269[2]
  i2268.cycleOffsetParameter = i2269[3]
  i2268.cycleOffsetParameterActive = !!i2269[4]
  i2268.mirror = !!i2269[5]
  i2268.mirrorParameter = i2269[6]
  i2268.mirrorParameterActive = !!i2269[7]
  i2268.motionId = i2269[8]
  i2268.nameHash = i2269[9]
  i2268.fullPathHash = i2269[10]
  i2268.speed = i2269[11]
  i2268.speedParameter = i2269[12]
  i2268.speedParameterActive = !!i2269[13]
  i2268.tag = i2269[14]
  i2268.tagHash = i2269[15]
  i2268.writeDefaultValues = !!i2269[16]
  var i2271 = i2269[17]
  var i2270 = []
  for(var i = 0; i < i2271.length; i += 2) {
  request.r(i2271[i + 0], i2271[i + 1], 2, i2270, '')
  }
  i2268.behaviours = i2270
  var i2273 = i2269[18]
  var i2272 = []
  for(var i = 0; i < i2273.length; i += 1) {
    i2272.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2273[i + 0]) );
  }
  i2268.transitions = i2272
  return i2268
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i2278 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i2279 = data
  i2278.fullPath = i2279[0]
  i2278.canTransitionToSelf = !!i2279[1]
  i2278.duration = i2279[2]
  i2278.exitTime = i2279[3]
  i2278.hasExitTime = !!i2279[4]
  i2278.hasFixedDuration = !!i2279[5]
  i2278.interruptionSource = i2279[6]
  i2278.offset = i2279[7]
  i2278.orderedInterruption = !!i2279[8]
  i2278.destinationStateId = i2279[9]
  i2278.isExit = !!i2279[10]
  i2278.mute = !!i2279[11]
  i2278.solo = !!i2279[12]
  var i2281 = i2279[13]
  var i2280 = []
  for(var i = 0; i < i2281.length; i += 1) {
    i2280.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2281[i + 0]) );
  }
  i2278.conditions = i2280
  return i2278
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i2286 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i2287 = data
  i2286.destinationStateId = i2287[0]
  i2286.isExit = !!i2287[1]
  i2286.mute = !!i2287[2]
  i2286.solo = !!i2287[3]
  var i2289 = i2287[4]
  var i2288 = []
  for(var i = 0; i < i2289.length; i += 1) {
    i2288.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2289[i + 0]) );
  }
  i2286.conditions = i2288
  return i2286
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i2292 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i2293 = data
  i2292.mode = i2293[0]
  i2292.parameter = i2293[1]
  i2292.threshold = i2293[2]
  return i2292
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i2296 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i2297 = data
  i2296.defaultBool = !!i2297[0]
  i2296.defaultFloat = i2297[1]
  i2296.defaultInt = i2297[2]
  i2296.name = i2297[3]
  i2296.nameHash = i2297[4]
  i2296.type = i2297[5]
  return i2296
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i2298 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i2299 = data
  i2298.name = i2299[0]
  i2298.bytes64 = i2299[1]
  i2298.data = i2299[2]
  return i2298
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i2300 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i2301 = data
  i2300.normalStyle = i2301[0]
  i2300.normalSpacingOffset = i2301[1]
  i2300.boldStyle = i2301[2]
  i2300.boldSpacing = i2301[3]
  i2300.italicStyle = i2301[4]
  i2300.tabSize = i2301[5]
  request.r(i2301[6], i2301[7], 0, i2300, 'atlas')
  i2300.m_SourceFontFileGUID = i2301[8]
  i2300.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i2301[9], i2300.m_CreationSettings)
  request.r(i2301[10], i2301[11], 0, i2300, 'm_SourceFontFile')
  i2300.m_SourceFontFilePath = i2301[12]
  i2300.m_AtlasPopulationMode = i2301[13]
  i2300.InternalDynamicOS = !!i2301[14]
  var i2303 = i2301[15]
  var i2302 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i2303.length; i += 1) {
    i2302.add(request.d('UnityEngine.TextCore.Glyph', i2303[i + 0]));
  }
  i2300.m_GlyphTable = i2302
  var i2305 = i2301[16]
  var i2304 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i2305.length; i += 1) {
    i2304.add(request.d('TMPro.TMP_Character', i2305[i + 0]));
  }
  i2300.m_CharacterTable = i2304
  var i2307 = i2301[17]
  var i2306 = []
  for(var i = 0; i < i2307.length; i += 2) {
  request.r(i2307[i + 0], i2307[i + 1], 2, i2306, '')
  }
  i2300.m_AtlasTextures = i2306
  i2300.m_AtlasTextureIndex = i2301[18]
  i2300.m_IsMultiAtlasTexturesEnabled = !!i2301[19]
  i2300.m_GetFontFeatures = !!i2301[20]
  i2300.m_ClearDynamicDataOnBuild = !!i2301[21]
  i2300.m_AtlasWidth = i2301[22]
  i2300.m_AtlasHeight = i2301[23]
  i2300.m_AtlasPadding = i2301[24]
  i2300.m_AtlasRenderMode = i2301[25]
  var i2309 = i2301[26]
  var i2308 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2309.length; i += 1) {
    i2308.add(request.d('UnityEngine.TextCore.GlyphRect', i2309[i + 0]));
  }
  i2300.m_UsedGlyphRects = i2308
  var i2311 = i2301[27]
  var i2310 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2311.length; i += 1) {
    i2310.add(request.d('UnityEngine.TextCore.GlyphRect', i2311[i + 0]));
  }
  i2300.m_FreeGlyphRects = i2310
  i2300.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i2301[28], i2300.m_FontFeatureTable)
  i2300.m_ShouldReimportFontFeatures = !!i2301[29]
  var i2313 = i2301[30]
  var i2312 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2313.length; i += 2) {
  request.r(i2313[i + 0], i2313[i + 1], 1, i2312, '')
  }
  i2300.m_FallbackFontAssetTable = i2312
  var i2315 = i2301[31]
  var i2314 = []
  for(var i = 0; i < i2315.length; i += 1) {
    i2314.push( request.d('TMPro.TMP_FontWeightPair', i2315[i + 0]) );
  }
  i2300.m_FontWeightTable = i2314
  var i2317 = i2301[32]
  var i2316 = []
  for(var i = 0; i < i2317.length; i += 1) {
    i2316.push( request.d('TMPro.TMP_FontWeightPair', i2317[i + 0]) );
  }
  i2300.fontWeights = i2316
  i2300.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i2301[33], i2300.m_fontInfo)
  var i2319 = i2301[34]
  var i2318 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i2319.length; i += 1) {
    i2318.add(request.d('TMPro.TMP_Glyph', i2319[i + 0]));
  }
  i2300.m_glyphInfoList = i2318
  i2300.m_KerningTable = request.d('TMPro.KerningTable', i2301[35], i2300.m_KerningTable)
  var i2321 = i2301[36]
  var i2320 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2321.length; i += 2) {
  request.r(i2321[i + 0], i2321[i + 1], 1, i2320, '')
  }
  i2300.fallbackFontAssets = i2320
  i2300.m_Version = i2301[37]
  i2300.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2301[38], i2300.m_FaceInfo)
  request.r(i2301[39], i2301[40], 0, i2300, 'm_Material')
  return i2300
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i2322 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i2323 = data
  i2322.sourceFontFileName = i2323[0]
  i2322.sourceFontFileGUID = i2323[1]
  i2322.faceIndex = i2323[2]
  i2322.pointSizeSamplingMode = i2323[3]
  i2322.pointSize = i2323[4]
  i2322.padding = i2323[5]
  i2322.paddingMode = i2323[6]
  i2322.packingMode = i2323[7]
  i2322.atlasWidth = i2323[8]
  i2322.atlasHeight = i2323[9]
  i2322.characterSetSelectionMode = i2323[10]
  i2322.characterSequence = i2323[11]
  i2322.referencedFontAssetGUID = i2323[12]
  i2322.referencedTextAssetGUID = i2323[13]
  i2322.fontStyle = i2323[14]
  i2322.fontStyleModifier = i2323[15]
  i2322.renderMode = i2323[16]
  i2322.includeFontFeatures = !!i2323[17]
  return i2322
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i2326 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i2327 = data
  i2326.m_Index = i2327[0]
  i2326.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2327[1], i2326.m_Metrics)
  i2326.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2327[2], i2326.m_GlyphRect)
  i2326.m_Scale = i2327[3]
  i2326.m_AtlasIndex = i2327[4]
  i2326.m_ClassDefinitionType = i2327[5]
  return i2326
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i2328 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i2329 = data
  i2328.m_Width = i2329[0]
  i2328.m_Height = i2329[1]
  i2328.m_HorizontalBearingX = i2329[2]
  i2328.m_HorizontalBearingY = i2329[3]
  i2328.m_HorizontalAdvance = i2329[4]
  return i2328
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i2330 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i2331 = data
  i2330.m_X = i2331[0]
  i2330.m_Y = i2331[1]
  i2330.m_Width = i2331[2]
  i2330.m_Height = i2331[3]
  return i2330
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i2334 = root || request.c( 'TMPro.TMP_Character' )
  var i2335 = data
  i2334.m_ElementType = i2335[0]
  i2334.m_Unicode = i2335[1]
  i2334.m_GlyphIndex = i2335[2]
  i2334.m_Scale = i2335[3]
  return i2334
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i2340 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i2341 = data
  var i2343 = i2341[0]
  var i2342 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i2343.length; i += 1) {
    i2342.add(request.d('TMPro.MultipleSubstitutionRecord', i2343[i + 0]));
  }
  i2340.m_MultipleSubstitutionRecords = i2342
  var i2345 = i2341[1]
  var i2344 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i2345.length; i += 1) {
    i2344.add(request.d('TMPro.LigatureSubstitutionRecord', i2345[i + 0]));
  }
  i2340.m_LigatureSubstitutionRecords = i2344
  var i2347 = i2341[2]
  var i2346 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i2347.length; i += 1) {
    i2346.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i2347[i + 0]));
  }
  i2340.m_GlyphPairAdjustmentRecords = i2346
  var i2349 = i2341[3]
  var i2348 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i2349.length; i += 1) {
    i2348.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i2349[i + 0]));
  }
  i2340.m_MarkToBaseAdjustmentRecords = i2348
  var i2351 = i2341[4]
  var i2350 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i2351.length; i += 1) {
    i2350.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i2351[i + 0]));
  }
  i2340.m_MarkToMarkAdjustmentRecords = i2350
  return i2340
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i2354 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i2355 = data
  i2354.m_TargetGlyphID = i2355[0]
  i2354.m_SubstituteGlyphIDs = i2355[1]
  return i2354
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i2358 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i2359 = data
  i2358.m_ComponentGlyphIDs = i2359[0]
  i2358.m_LigatureGlyphID = i2359[1]
  return i2358
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i2362 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i2363 = data
  i2362.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i2363[0], i2362.m_FirstAdjustmentRecord)
  i2362.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i2363[1], i2362.m_SecondAdjustmentRecord)
  i2362.m_FeatureLookupFlags = i2363[2]
  return i2362
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i2364 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i2365 = data
  i2364.m_GlyphIndex = i2365[0]
  i2364.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i2365[1], i2364.m_GlyphValueRecord)
  return i2364
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i2366 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i2367 = data
  i2366.m_XPlacement = i2367[0]
  i2366.m_YPlacement = i2367[1]
  i2366.m_XAdvance = i2367[2]
  i2366.m_YAdvance = i2367[3]
  return i2366
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i2370 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i2371 = data
  i2370.m_BaseGlyphID = i2371[0]
  i2370.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i2371[1], i2370.m_BaseGlyphAnchorPoint)
  i2370.m_MarkGlyphID = i2371[2]
  i2370.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i2371[3], i2370.m_MarkPositionAdjustment)
  return i2370
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i2374 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i2375 = data
  i2374.m_BaseMarkGlyphID = i2375[0]
  i2374.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i2375[1], i2374.m_BaseMarkGlyphAnchorPoint)
  i2374.m_CombiningMarkGlyphID = i2375[2]
  i2374.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i2375[3], i2374.m_CombiningMarkPositionAdjustment)
  return i2374
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i2380 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i2381 = data
  request.r(i2381[0], i2381[1], 0, i2380, 'regularTypeface')
  request.r(i2381[2], i2381[3], 0, i2380, 'italicTypeface')
  return i2380
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i2382 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i2383 = data
  i2382.Name = i2383[0]
  i2382.PointSize = i2383[1]
  i2382.Scale = i2383[2]
  i2382.CharacterCount = i2383[3]
  i2382.LineHeight = i2383[4]
  i2382.Baseline = i2383[5]
  i2382.Ascender = i2383[6]
  i2382.CapHeight = i2383[7]
  i2382.Descender = i2383[8]
  i2382.CenterLine = i2383[9]
  i2382.SuperscriptOffset = i2383[10]
  i2382.SubscriptOffset = i2383[11]
  i2382.SubSize = i2383[12]
  i2382.Underline = i2383[13]
  i2382.UnderlineThickness = i2383[14]
  i2382.strikethrough = i2383[15]
  i2382.strikethroughThickness = i2383[16]
  i2382.TabWidth = i2383[17]
  i2382.Padding = i2383[18]
  i2382.AtlasWidth = i2383[19]
  i2382.AtlasHeight = i2383[20]
  return i2382
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i2386 = root || request.c( 'TMPro.TMP_Glyph' )
  var i2387 = data
  i2386.id = i2387[0]
  i2386.x = i2387[1]
  i2386.y = i2387[2]
  i2386.width = i2387[3]
  i2386.height = i2387[4]
  i2386.xOffset = i2387[5]
  i2386.yOffset = i2387[6]
  i2386.xAdvance = i2387[7]
  i2386.scale = i2387[8]
  return i2386
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i2388 = root || request.c( 'TMPro.KerningTable' )
  var i2389 = data
  var i2391 = i2389[0]
  var i2390 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i2391.length; i += 1) {
    i2390.add(request.d('TMPro.KerningPair', i2391[i + 0]));
  }
  i2388.kerningPairs = i2390
  return i2388
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i2394 = root || request.c( 'TMPro.KerningPair' )
  var i2395 = data
  i2394.xOffset = i2395[0]
  i2394.m_FirstGlyph = i2395[1]
  i2394.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2395[2], i2394.m_FirstGlyphAdjustments)
  i2394.m_SecondGlyph = i2395[3]
  i2394.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2395[4], i2394.m_SecondGlyphAdjustments)
  i2394.m_IgnoreSpacingAdjustments = !!i2395[5]
  return i2394
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i2396 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i2397 = data
  i2396.m_FaceIndex = i2397[0]
  i2396.m_FamilyName = i2397[1]
  i2396.m_StyleName = i2397[2]
  i2396.m_PointSize = i2397[3]
  i2396.m_Scale = i2397[4]
  i2396.m_UnitsPerEM = i2397[5]
  i2396.m_LineHeight = i2397[6]
  i2396.m_AscentLine = i2397[7]
  i2396.m_CapLine = i2397[8]
  i2396.m_MeanLine = i2397[9]
  i2396.m_Baseline = i2397[10]
  i2396.m_DescentLine = i2397[11]
  i2396.m_SuperscriptOffset = i2397[12]
  i2396.m_SuperscriptSize = i2397[13]
  i2396.m_SubscriptOffset = i2397[14]
  i2396.m_SubscriptSize = i2397[15]
  i2396.m_UnderlineOffset = i2397[16]
  i2396.m_UnderlineThickness = i2397[17]
  i2396.m_StrikethroughOffset = i2397[18]
  i2396.m_StrikethroughThickness = i2397[19]
  i2396.m_TabWidth = i2397[20]
  return i2396
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i2398 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i2399 = data
  i2398.useSafeMode = !!i2399[0]
  i2398.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i2399[1], i2398.safeModeOptions)
  i2398.timeScale = i2399[2]
  i2398.unscaledTimeScale = i2399[3]
  i2398.useSmoothDeltaTime = !!i2399[4]
  i2398.maxSmoothUnscaledTime = i2399[5]
  i2398.rewindCallbackMode = i2399[6]
  i2398.showUnityEditorReport = !!i2399[7]
  i2398.logBehaviour = i2399[8]
  i2398.drawGizmos = !!i2399[9]
  i2398.defaultRecyclable = !!i2399[10]
  i2398.defaultAutoPlay = i2399[11]
  i2398.defaultUpdateType = i2399[12]
  i2398.defaultTimeScaleIndependent = !!i2399[13]
  i2398.defaultEaseType = i2399[14]
  i2398.defaultEaseOvershootOrAmplitude = i2399[15]
  i2398.defaultEasePeriod = i2399[16]
  i2398.defaultAutoKill = !!i2399[17]
  i2398.defaultLoopType = i2399[18]
  i2398.debugMode = !!i2399[19]
  i2398.debugStoreTargetId = !!i2399[20]
  i2398.showPreviewPanel = !!i2399[21]
  i2398.storeSettingsLocation = i2399[22]
  i2398.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i2399[23], i2398.modules)
  i2398.createASMDEF = !!i2399[24]
  i2398.showPlayingTweens = !!i2399[25]
  i2398.showPausedTweens = !!i2399[26]
  return i2398
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i2400 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i2401 = data
  i2400.logBehaviour = i2401[0]
  i2400.nestedTweenFailureBehaviour = i2401[1]
  return i2400
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i2402 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i2403 = data
  i2402.showPanel = !!i2403[0]
  i2402.audioEnabled = !!i2403[1]
  i2402.physicsEnabled = !!i2403[2]
  i2402.physics2DEnabled = !!i2403[3]
  i2402.spriteEnabled = !!i2403[4]
  i2402.uiEnabled = !!i2403[5]
  i2402.uiToolkitEnabled = !!i2403[6]
  i2402.textMeshProEnabled = !!i2403[7]
  i2402.tk2DEnabled = !!i2403[8]
  i2402.deAudioEnabled = !!i2403[9]
  i2402.deUnityExtendedEnabled = !!i2403[10]
  i2402.epoOutlineEnabled = !!i2403[11]
  return i2402
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i2404 = root || request.c( 'TMPro.TMP_Settings' )
  var i2405 = data
  i2404.assetVersion = i2405[0]
  i2404.m_TextWrappingMode = i2405[1]
  i2404.m_enableKerning = !!i2405[2]
  var i2407 = i2405[3]
  var i2406 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i2407.length; i += 1) {
    i2406.add(i2407[i + 0]);
  }
  i2404.m_ActiveFontFeatures = i2406
  i2404.m_enableExtraPadding = !!i2405[4]
  i2404.m_enableTintAllSprites = !!i2405[5]
  i2404.m_enableParseEscapeCharacters = !!i2405[6]
  i2404.m_EnableRaycastTarget = !!i2405[7]
  i2404.m_GetFontFeaturesAtRuntime = !!i2405[8]
  i2404.m_missingGlyphCharacter = i2405[9]
  i2404.m_ClearDynamicDataOnBuild = !!i2405[10]
  i2404.m_warningsDisabled = !!i2405[11]
  request.r(i2405[12], i2405[13], 0, i2404, 'm_defaultFontAsset')
  i2404.m_defaultFontAssetPath = i2405[14]
  i2404.m_defaultFontSize = i2405[15]
  i2404.m_defaultAutoSizeMinRatio = i2405[16]
  i2404.m_defaultAutoSizeMaxRatio = i2405[17]
  i2404.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i2405[18], i2405[19] )
  i2404.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i2405[20], i2405[21] )
  i2404.m_autoSizeTextContainer = !!i2405[22]
  i2404.m_IsTextObjectScaleStatic = !!i2405[23]
  var i2409 = i2405[24]
  var i2408 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2409.length; i += 2) {
  request.r(i2409[i + 0], i2409[i + 1], 1, i2408, '')
  }
  i2404.m_fallbackFontAssets = i2408
  i2404.m_matchMaterialPreset = !!i2405[25]
  i2404.m_HideSubTextObjects = !!i2405[26]
  request.r(i2405[27], i2405[28], 0, i2404, 'm_defaultSpriteAsset')
  i2404.m_defaultSpriteAssetPath = i2405[29]
  i2404.m_enableEmojiSupport = !!i2405[30]
  i2404.m_MissingCharacterSpriteUnicode = i2405[31]
  var i2411 = i2405[32]
  var i2410 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i2411.length; i += 2) {
  request.r(i2411[i + 0], i2411[i + 1], 1, i2410, '')
  }
  i2404.m_EmojiFallbackTextAssets = i2410
  i2404.m_defaultColorGradientPresetsPath = i2405[33]
  request.r(i2405[34], i2405[35], 0, i2404, 'm_defaultStyleSheet')
  i2404.m_StyleSheetsResourcePath = i2405[36]
  request.r(i2405[37], i2405[38], 0, i2404, 'm_leadingCharacters')
  request.r(i2405[39], i2405[40], 0, i2404, 'm_followingCharacters')
  i2404.m_UseModernHangulLineBreakingRules = !!i2405[41]
  return i2404
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i2414 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i2415 = data
  request.r(i2415[0], i2415[1], 0, i2414, 'spriteSheet')
  var i2417 = i2415[2]
  var i2416 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i2417.length; i += 1) {
    i2416.add(request.d('TMPro.TMP_Sprite', i2417[i + 0]));
  }
  i2414.spriteInfoList = i2416
  var i2419 = i2415[3]
  var i2418 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i2419.length; i += 2) {
  request.r(i2419[i + 0], i2419[i + 1], 1, i2418, '')
  }
  i2414.fallbackSpriteAssets = i2418
  var i2421 = i2415[4]
  var i2420 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i2421.length; i += 1) {
    i2420.add(request.d('TMPro.TMP_SpriteCharacter', i2421[i + 0]));
  }
  i2414.m_SpriteCharacterTable = i2420
  var i2423 = i2415[5]
  var i2422 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i2423.length; i += 1) {
    i2422.add(request.d('TMPro.TMP_SpriteGlyph', i2423[i + 0]));
  }
  i2414.m_GlyphTable = i2422
  i2414.m_Version = i2415[6]
  i2414.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2415[7], i2414.m_FaceInfo)
  request.r(i2415[8], i2415[9], 0, i2414, 'm_Material')
  return i2414
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i2426 = root || request.c( 'TMPro.TMP_Sprite' )
  var i2427 = data
  i2426.name = i2427[0]
  i2426.hashCode = i2427[1]
  i2426.unicode = i2427[2]
  i2426.pivot = new pc.Vec2( i2427[3], i2427[4] )
  request.r(i2427[5], i2427[6], 0, i2426, 'sprite')
  i2426.id = i2427[7]
  i2426.x = i2427[8]
  i2426.y = i2427[9]
  i2426.width = i2427[10]
  i2426.height = i2427[11]
  i2426.xOffset = i2427[12]
  i2426.yOffset = i2427[13]
  i2426.xAdvance = i2427[14]
  i2426.scale = i2427[15]
  return i2426
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i2432 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i2433 = data
  i2432.m_Name = i2433[0]
  i2432.m_ElementType = i2433[1]
  i2432.m_Unicode = i2433[2]
  i2432.m_GlyphIndex = i2433[3]
  i2432.m_Scale = i2433[4]
  return i2432
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i2436 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i2437 = data
  request.r(i2437[0], i2437[1], 0, i2436, 'sprite')
  i2436.m_Index = i2437[2]
  i2436.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2437[3], i2436.m_Metrics)
  i2436.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2437[4], i2436.m_GlyphRect)
  i2436.m_Scale = i2437[5]
  i2436.m_AtlasIndex = i2437[6]
  i2436.m_ClassDefinitionType = i2437[7]
  return i2436
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i2438 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i2439 = data
  var i2441 = i2439[0]
  var i2440 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i2441.length; i += 1) {
    i2440.add(request.d('TMPro.TMP_Style', i2441[i + 0]));
  }
  i2438.m_StyleList = i2440
  return i2438
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i2444 = root || request.c( 'TMPro.TMP_Style' )
  var i2445 = data
  i2444.m_Name = i2445[0]
  i2444.m_HashCode = i2445[1]
  i2444.m_OpeningDefinition = i2445[2]
  i2444.m_ClosingDefinition = i2445[3]
  i2444.m_OpeningTagArray = i2445[4]
  i2444.m_ClosingTagArray = i2445[5]
  return i2444
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i2446 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i2447 = data
  var i2449 = i2447[0]
  var i2448 = []
  for(var i = 0; i < i2449.length; i += 1) {
    i2448.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i2449[i + 0]) );
  }
  i2446.files = i2448
  i2446.componentToPrefabIds = i2447[1]
  return i2446
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i2452 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i2453 = data
  i2452.path = i2453[0]
  request.r(i2453[1], i2453[2], 0, i2452, 'unityObject')
  return i2452
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i2454 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i2455 = data
  var i2457 = i2455[0]
  var i2456 = []
  for(var i = 0; i < i2457.length; i += 1) {
    i2456.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i2457[i + 0]) );
  }
  i2454.scriptsExecutionOrder = i2456
  var i2459 = i2455[1]
  var i2458 = []
  for(var i = 0; i < i2459.length; i += 1) {
    i2458.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i2459[i + 0]) );
  }
  i2454.sortingLayers = i2458
  var i2461 = i2455[2]
  var i2460 = []
  for(var i = 0; i < i2461.length; i += 1) {
    i2460.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i2461[i + 0]) );
  }
  i2454.cullingLayers = i2460
  i2454.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i2455[3], i2454.timeSettings)
  i2454.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i2455[4], i2454.physicsSettings)
  i2454.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i2455[5], i2454.physics2DSettings)
  i2454.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2455[6], i2454.qualitySettings)
  i2454.enableRealtimeShadows = !!i2455[7]
  i2454.enableAutoInstancing = !!i2455[8]
  i2454.enableStaticBatching = !!i2455[9]
  i2454.enableDynamicBatching = !!i2455[10]
  i2454.lightmapEncodingQuality = i2455[11]
  i2454.desiredColorSpace = i2455[12]
  var i2463 = i2455[13]
  var i2462 = []
  for(var i = 0; i < i2463.length; i += 1) {
    i2462.push( i2463[i + 0] );
  }
  i2454.allTags = i2462
  return i2454
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i2466 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i2467 = data
  i2466.name = i2467[0]
  i2466.value = i2467[1]
  return i2466
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i2470 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i2471 = data
  i2470.id = i2471[0]
  i2470.name = i2471[1]
  i2470.value = i2471[2]
  return i2470
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i2474 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i2475 = data
  i2474.id = i2475[0]
  i2474.name = i2475[1]
  return i2474
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i2476 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i2477 = data
  i2476.fixedDeltaTime = i2477[0]
  i2476.maximumDeltaTime = i2477[1]
  i2476.timeScale = i2477[2]
  i2476.maximumParticleTimestep = i2477[3]
  return i2476
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i2478 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i2479 = data
  i2478.gravity = new pc.Vec3( i2479[0], i2479[1], i2479[2] )
  i2478.defaultSolverIterations = i2479[3]
  i2478.bounceThreshold = i2479[4]
  i2478.autoSyncTransforms = !!i2479[5]
  i2478.autoSimulation = !!i2479[6]
  var i2481 = i2479[7]
  var i2480 = []
  for(var i = 0; i < i2481.length; i += 1) {
    i2480.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i2481[i + 0]) );
  }
  i2478.collisionMatrix = i2480
  return i2478
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i2484 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i2485 = data
  i2484.enabled = !!i2485[0]
  i2484.layerId = i2485[1]
  i2484.otherLayerId = i2485[2]
  return i2484
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i2486 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i2487 = data
  request.r(i2487[0], i2487[1], 0, i2486, 'material')
  i2486.gravity = new pc.Vec2( i2487[2], i2487[3] )
  i2486.positionIterations = i2487[4]
  i2486.velocityIterations = i2487[5]
  i2486.velocityThreshold = i2487[6]
  i2486.maxLinearCorrection = i2487[7]
  i2486.maxAngularCorrection = i2487[8]
  i2486.maxTranslationSpeed = i2487[9]
  i2486.maxRotationSpeed = i2487[10]
  i2486.baumgarteScale = i2487[11]
  i2486.baumgarteTOIScale = i2487[12]
  i2486.timeToSleep = i2487[13]
  i2486.linearSleepTolerance = i2487[14]
  i2486.angularSleepTolerance = i2487[15]
  i2486.defaultContactOffset = i2487[16]
  i2486.autoSimulation = !!i2487[17]
  i2486.queriesHitTriggers = !!i2487[18]
  i2486.queriesStartInColliders = !!i2487[19]
  i2486.callbacksOnDisable = !!i2487[20]
  i2486.reuseCollisionCallbacks = !!i2487[21]
  i2486.autoSyncTransforms = !!i2487[22]
  var i2489 = i2487[23]
  var i2488 = []
  for(var i = 0; i < i2489.length; i += 1) {
    i2488.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i2489[i + 0]) );
  }
  i2486.collisionMatrix = i2488
  return i2486
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i2492 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i2493 = data
  i2492.enabled = !!i2493[0]
  i2492.layerId = i2493[1]
  i2492.otherLayerId = i2493[2]
  return i2492
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i2494 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i2495 = data
  var i2497 = i2495[0]
  var i2496 = []
  for(var i = 0; i < i2497.length; i += 1) {
    i2496.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2497[i + 0]) );
  }
  i2494.qualityLevels = i2496
  var i2499 = i2495[1]
  var i2498 = []
  for(var i = 0; i < i2499.length; i += 1) {
    i2498.push( i2499[i + 0] );
  }
  i2494.names = i2498
  i2494.shadows = i2495[2]
  i2494.anisotropicFiltering = i2495[3]
  i2494.antiAliasing = i2495[4]
  i2494.lodBias = i2495[5]
  i2494.shadowCascades = i2495[6]
  i2494.shadowDistance = i2495[7]
  i2494.shadowmaskMode = i2495[8]
  i2494.shadowProjection = i2495[9]
  i2494.shadowResolution = i2495[10]
  i2494.softParticles = !!i2495[11]
  i2494.softVegetation = !!i2495[12]
  i2494.activeColorSpace = i2495[13]
  i2494.desiredColorSpace = i2495[14]
  i2494.masterTextureLimit = i2495[15]
  i2494.maxQueuedFrames = i2495[16]
  i2494.particleRaycastBudget = i2495[17]
  i2494.pixelLightCount = i2495[18]
  i2494.realtimeReflectionProbes = !!i2495[19]
  i2494.shadowCascade2Split = i2495[20]
  i2494.shadowCascade4Split = new pc.Vec3( i2495[21], i2495[22], i2495[23] )
  i2494.streamingMipmapsActive = !!i2495[24]
  i2494.vSyncCount = i2495[25]
  i2494.asyncUploadBufferSize = i2495[26]
  i2494.asyncUploadTimeSlice = i2495[27]
  i2494.billboardsFaceCameraPosition = !!i2495[28]
  i2494.shadowNearPlaneOffset = i2495[29]
  i2494.streamingMipmapsMemoryBudget = i2495[30]
  i2494.maximumLODLevel = i2495[31]
  i2494.streamingMipmapsAddAllCameras = !!i2495[32]
  i2494.streamingMipmapsMaxLevelReduction = i2495[33]
  i2494.streamingMipmapsRenderersPerFrame = i2495[34]
  i2494.resolutionScalingFixedDPIFactor = i2495[35]
  i2494.streamingMipmapsMaxFileIORequests = i2495[36]
  i2494.currentQualityLevel = i2495[37]
  return i2494
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i2504 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i2505 = data
  i2504.weight = i2505[0]
  i2504.vertices = i2505[1]
  i2504.normals = i2505[2]
  i2504.tangents = i2505[3]
  return i2504
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i2506 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i2507 = data
  i2506.m_XCoordinate = i2507[0]
  i2506.m_YCoordinate = i2507[1]
  return i2506
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i2508 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i2509 = data
  i2508.m_XPositionAdjustment = i2509[0]
  i2508.m_YPositionAdjustment = i2509[1]
  return i2508
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i2510 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i2511 = data
  i2510.xPlacement = i2511[0]
  i2510.yPlacement = i2511[1]
  i2510.xAdvance = i2511[2]
  i2510.yAdvance = i2511[3]
  return i2510
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"44":[45],"46":[45],"47":[45],"48":[45],"49":[45],"50":[45],"51":[52],"53":[2],"54":[55],"56":[55],"57":[55],"58":[55],"59":[55],"60":[55],"61":[62],"63":[62],"64":[62],"65":[62],"66":[62],"67":[62],"68":[62],"69":[62],"70":[62],"71":[62],"72":[62],"73":[62],"74":[62],"75":[2],"76":[33],"77":[78],"79":[78],"21":[20],"6":[2],"80":[62],"81":[82],"83":[18],"84":[2],"85":[86],"87":[36],"88":[21],"89":[20],"34":[33,20],"90":[20,25],"91":[20],"92":[25,20],"93":[33],"94":[25,20],"95":[20],"96":[97],"98":[97],"99":[97],"100":[20],"101":[20],"24":[21],"26":[25,20],"102":[20],"23":[21],"103":[20],"104":[20],"105":[20],"106":[20],"107":[20],"108":[20],"109":[20],"110":[20],"111":[20],"112":[25,20],"113":[20],"114":[20],"115":[20],"116":[20],"117":[25,20],"118":[20],"119":[36],"120":[36],"37":[36],"121":[36],"122":[2],"123":[2]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.MonoBehaviour","CameraFollow2D","AutoCameraFit","UnityEngine.Transform","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Mesh","UnityEngine.Material","Ply_SoundManager","UnityEngine.AudioClip","UnityEngine.AudioSource","HaalandGame.HaalandGameManager","UnityEngine.GameObject","UnityEngine.Animator","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.UI.Button","UnityEditor.Animations.AnimatorController","HideOnFirstClick","ScreenHeightPositionAnchor","UnityEngine.BoxCollider","HaalandGame.PlayerSelectable","UnityEngine.MeshRenderer","TMPro.TextMeshPro","TMPro.TMP_FontAsset","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.Font","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","BatStrikeController","SlotTrigger","UnityEngine.BoxCollider2D","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.InputSystem.UI.InputSystemUIInputModule","UnityEngine.InputSystem.UI.TrackedDeviceRaycaster","TMPro.TextContainer","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.38f1";

Deserializers.productName = "PLY_MiniSoccer";

Deserializers.lunaInitializationTime = "07/15/2026 03:53:54";

Deserializers.lunaDaysRunning = "29.1";

Deserializers.lunaVersion = "7.1.0";

Deserializers.lunaSHA = "cf93782349542fe0b84ad13951a26809f8419628";

Deserializers.creativeName = "PLY_V19";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1736";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4568";

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

Deserializers.buildID = "dd05880b-0363-45de-adf3-4b8edd6e332a";

Deserializers.runtimeInitializeOnLoadInfos = [[["Unity","Services","Core","Internal","UnityServicesInitializer","EnableServicesInitializationAsync"],["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["DG","Tweening","DOTween","RuntimeOnLoad"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["Unity","Services","Core","Registration","CorePackageInitializer","InitializeOnLoad"],["Unity","Services","Core","Internal","TaskAsyncOperation","SetScheduler"],["Unity","Services","Core","Environments","Client","Scheduler","EngineStateHelper","Init"],["Unity","Services","Core","Environments","Client","Scheduler","ThreadHelper","Init"],["Ua2CoreInitializeCallback","Register"],["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["Unity","AI","Navigation","NavMeshLink","ClearTrackedList"],["Unity","AI","Navigation","NavMeshSurface","ClearNavMeshSurfaces"],["Unity","AI","Navigation","NavMeshModifierVolume","ClearNavMeshModifiers"],["Unity","AI","Navigation","NavMeshModifier","ClearNavMeshModifiers"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["Unity","Services","Core","Internal","UnityServicesInitializer","CreateStaticInstance"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[["Unity","Services","Core","Environments","Client","Http","JsonHelpers","RegisterTypesForAOT"]],[["Unity","Services","Core","UnityThreadUtils","CaptureUnityThreadInfo"],["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

