var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i1890 = root || request.c( 'UnityEngine.JointSpring' )
  var i1891 = data
  i1890.spring = i1891[0]
  i1890.damper = i1891[1]
  i1890.targetPosition = i1891[2]
  return i1890
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i1892 = root || request.c( 'UnityEngine.JointMotor' )
  var i1893 = data
  i1892.m_TargetVelocity = i1893[0]
  i1892.m_Force = i1893[1]
  i1892.m_FreeSpin = i1893[2]
  return i1892
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i1894 = root || request.c( 'UnityEngine.JointLimits' )
  var i1895 = data
  i1894.m_Min = i1895[0]
  i1894.m_Max = i1895[1]
  i1894.m_Bounciness = i1895[2]
  i1894.m_BounceMinVelocity = i1895[3]
  i1894.m_ContactDistance = i1895[4]
  i1894.minBounce = i1895[5]
  i1894.maxBounce = i1895[6]
  return i1894
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i1896 = root || request.c( 'UnityEngine.JointDrive' )
  var i1897 = data
  i1896.m_PositionSpring = i1897[0]
  i1896.m_PositionDamper = i1897[1]
  i1896.m_MaximumForce = i1897[2]
  i1896.m_UseAcceleration = i1897[3]
  return i1896
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i1898 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i1899 = data
  i1898.m_Spring = i1899[0]
  i1898.m_Damper = i1899[1]
  return i1898
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i1900 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i1901 = data
  i1900.m_Limit = i1901[0]
  i1900.m_Bounciness = i1901[1]
  i1900.m_ContactDistance = i1901[2]
  return i1900
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i1902 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i1903 = data
  i1902.m_ExtremumSlip = i1903[0]
  i1902.m_ExtremumValue = i1903[1]
  i1902.m_AsymptoteSlip = i1903[2]
  i1902.m_AsymptoteValue = i1903[3]
  i1902.m_Stiffness = i1903[4]
  return i1902
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i1904 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i1905 = data
  i1904.m_LowerAngle = i1905[0]
  i1904.m_UpperAngle = i1905[1]
  return i1904
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i1906 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i1907 = data
  i1906.m_MotorSpeed = i1907[0]
  i1906.m_MaximumMotorTorque = i1907[1]
  return i1906
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i1908 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i1909 = data
  i1908.m_DampingRatio = i1909[0]
  i1908.m_Frequency = i1909[1]
  i1908.m_Angle = i1909[2]
  return i1908
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i1910 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i1911 = data
  i1910.m_LowerTranslation = i1911[0]
  i1910.m_UpperTranslation = i1911[1]
  return i1910
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i1912 = root || new pc.UnityMaterial()
  var i1913 = data
  i1912.name = i1913[0]
  request.r(i1913[1], i1913[2], 0, i1912, 'shader')
  i1912.renderQueue = i1913[3]
  i1912.enableInstancing = !!i1913[4]
  var i1915 = i1913[5]
  var i1914 = []
  for(var i = 0; i < i1915.length; i += 1) {
    i1914.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i1915[i + 0]) );
  }
  i1912.floatParameters = i1914
  var i1917 = i1913[6]
  var i1916 = []
  for(var i = 0; i < i1917.length; i += 1) {
    i1916.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i1917[i + 0]) );
  }
  i1912.colorParameters = i1916
  var i1919 = i1913[7]
  var i1918 = []
  for(var i = 0; i < i1919.length; i += 1) {
    i1918.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i1919[i + 0]) );
  }
  i1912.vectorParameters = i1918
  var i1921 = i1913[8]
  var i1920 = []
  for(var i = 0; i < i1921.length; i += 1) {
    i1920.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i1921[i + 0]) );
  }
  i1912.textureParameters = i1920
  var i1923 = i1913[9]
  var i1922 = []
  for(var i = 0; i < i1923.length; i += 1) {
    i1922.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i1923[i + 0]) );
  }
  i1912.materialFlags = i1922
  return i1912
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i1926 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i1927 = data
  i1926.name = i1927[0]
  i1926.value = i1927[1]
  return i1926
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i1930 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i1931 = data
  i1930.name = i1931[0]
  i1930.value = new pc.Color(i1931[1], i1931[2], i1931[3], i1931[4])
  return i1930
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i1934 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i1935 = data
  i1934.name = i1935[0]
  i1934.value = new pc.Vec4( i1935[1], i1935[2], i1935[3], i1935[4] )
  return i1934
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i1938 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i1939 = data
  i1938.name = i1939[0]
  request.r(i1939[1], i1939[2], 0, i1938, 'value')
  return i1938
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i1942 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i1943 = data
  i1942.name = i1943[0]
  i1942.enabled = !!i1943[1]
  return i1942
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i1944 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i1945 = data
  i1944.name = i1945[0]
  i1944.width = i1945[1]
  i1944.height = i1945[2]
  i1944.mipmapCount = i1945[3]
  i1944.anisoLevel = i1945[4]
  i1944.filterMode = i1945[5]
  i1944.hdr = !!i1945[6]
  i1944.format = i1945[7]
  i1944.wrapMode = i1945[8]
  i1944.alphaIsTransparency = !!i1945[9]
  i1944.alphaSource = i1945[10]
  i1944.graphicsFormat = i1945[11]
  i1944.sRGBTexture = !!i1945[12]
  i1944.desiredColorSpace = i1945[13]
  i1944.wrapU = i1945[14]
  i1944.wrapV = i1945[15]
  return i1944
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i1946 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i1947 = data
  i1946.name = i1947[0]
  i1946.halfPrecision = !!i1947[1]
  i1946.useSimplification = !!i1947[2]
  i1946.useUInt32IndexFormat = !!i1947[3]
  i1946.vertexCount = i1947[4]
  i1946.aabb = i1947[5]
  var i1949 = i1947[6]
  var i1948 = []
  for(var i = 0; i < i1949.length; i += 1) {
    i1948.push( !!i1949[i + 0] );
  }
  i1946.streams = i1948
  i1946.vertices = i1947[7]
  var i1951 = i1947[8]
  var i1950 = []
  for(var i = 0; i < i1951.length; i += 1) {
    i1950.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i1951[i + 0]) );
  }
  i1946.subMeshes = i1950
  var i1953 = i1947[9]
  var i1952 = []
  for(var i = 0; i < i1953.length; i += 16) {
    i1952.push( new pc.Mat4().setData(i1953[i + 0], i1953[i + 1], i1953[i + 2], i1953[i + 3],  i1953[i + 4], i1953[i + 5], i1953[i + 6], i1953[i + 7],  i1953[i + 8], i1953[i + 9], i1953[i + 10], i1953[i + 11],  i1953[i + 12], i1953[i + 13], i1953[i + 14], i1953[i + 15]) );
  }
  i1946.bindposes = i1952
  var i1955 = i1947[10]
  var i1954 = []
  for(var i = 0; i < i1955.length; i += 1) {
    i1954.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i1955[i + 0]) );
  }
  i1946.blendShapes = i1954
  return i1946
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i1960 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i1961 = data
  i1960.triangles = i1961[0]
  return i1960
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i1966 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i1967 = data
  i1966.name = i1967[0]
  var i1969 = i1967[1]
  var i1968 = []
  for(var i = 0; i < i1969.length; i += 1) {
    i1968.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i1969[i + 0]) );
  }
  i1966.frames = i1968
  return i1966
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i1970 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i1971 = data
  i1970.name = i1971[0]
  i1970.index = i1971[1]
  i1970.startup = !!i1971[2]
  return i1970
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1972 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1973 = data
  i1972.aspect = i1973[0]
  i1972.orthographic = !!i1973[1]
  i1972.orthographicSize = i1973[2]
  i1972.backgroundColor = new pc.Color(i1973[3], i1973[4], i1973[5], i1973[6])
  i1972.nearClipPlane = i1973[7]
  i1972.farClipPlane = i1973[8]
  i1972.fieldOfView = i1973[9]
  i1972.depth = i1973[10]
  i1972.clearFlags = i1973[11]
  i1972.cullingMask = i1973[12]
  i1972.rect = i1973[13]
  request.r(i1973[14], i1973[15], 0, i1972, 'targetTexture')
  i1972.usePhysicalProperties = !!i1973[16]
  i1972.focalLength = i1973[17]
  i1972.sensorSize = new pc.Vec2( i1973[18], i1973[19] )
  i1972.lensShift = new pc.Vec2( i1973[20], i1973[21] )
  i1972.gateFit = i1973[22]
  i1972.commandBufferCount = i1973[23]
  i1972.cameraType = i1973[24]
  i1972.enabled = !!i1973[25]
  return i1972
}

Deserializers["CameraFollow2D"] = function (request, data, root) {
  var i1974 = root || request.c( 'CameraFollow2D' )
  var i1975 = data
  request.r(i1975[0], i1975[1], 0, i1974, 'target')
  i1974.smoothTime = i1975[2]
  i1974.offset = new pc.Vec3( i1975[3], i1975[4], i1975[5] )
  i1974.followY = !!i1975[6]
  return i1974
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i1976 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i1977 = data
  i1976.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i1977[0], i1976.main)
  i1976.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i1977[1], i1976.colorBySpeed)
  i1976.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i1977[2], i1976.colorOverLifetime)
  i1976.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i1977[3], i1976.emission)
  i1976.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i1977[4], i1976.rotationBySpeed)
  i1976.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i1977[5], i1976.rotationOverLifetime)
  i1976.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i1977[6], i1976.shape)
  i1976.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i1977[7], i1976.sizeBySpeed)
  i1976.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i1977[8], i1976.sizeOverLifetime)
  i1976.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i1977[9], i1976.textureSheetAnimation)
  i1976.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i1977[10], i1976.velocityOverLifetime)
  i1976.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i1977[11], i1976.noise)
  i1976.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i1977[12], i1976.inheritVelocity)
  i1976.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i1977[13], i1976.forceOverLifetime)
  i1976.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i1977[14], i1976.limitVelocityOverLifetime)
  i1976.useAutoRandomSeed = !!i1977[15]
  i1976.randomSeed = i1977[16]
  return i1976
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i1978 = root || new pc.ParticleSystemMain()
  var i1979 = data
  i1978.duration = i1979[0]
  i1978.loop = !!i1979[1]
  i1978.prewarm = !!i1979[2]
  i1978.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1979[3], i1978.startDelay)
  i1978.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1979[4], i1978.startLifetime)
  i1978.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1979[5], i1978.startSpeed)
  i1978.startSize3D = !!i1979[6]
  i1978.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1979[7], i1978.startSizeX)
  i1978.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1979[8], i1978.startSizeY)
  i1978.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1979[9], i1978.startSizeZ)
  i1978.startRotation3D = !!i1979[10]
  i1978.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1979[11], i1978.startRotationX)
  i1978.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1979[12], i1978.startRotationY)
  i1978.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1979[13], i1978.startRotationZ)
  i1978.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1979[14], i1978.startColor)
  i1978.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1979[15], i1978.gravityModifier)
  i1978.simulationSpace = i1979[16]
  request.r(i1979[17], i1979[18], 0, i1978, 'customSimulationSpace')
  i1978.simulationSpeed = i1979[19]
  i1978.useUnscaledTime = !!i1979[20]
  i1978.scalingMode = i1979[21]
  i1978.playOnAwake = !!i1979[22]
  i1978.maxParticles = i1979[23]
  i1978.emitterVelocityMode = i1979[24]
  i1978.stopAction = i1979[25]
  return i1978
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i1980 = root || new pc.MinMaxCurve()
  var i1981 = data
  i1980.mode = i1981[0]
  i1980.curveMin = new pc.AnimationCurve( { keys_flow: i1981[1] } )
  i1980.curveMax = new pc.AnimationCurve( { keys_flow: i1981[2] } )
  i1980.curveMultiplier = i1981[3]
  i1980.constantMin = i1981[4]
  i1980.constantMax = i1981[5]
  return i1980
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i1982 = root || new pc.MinMaxGradient()
  var i1983 = data
  i1982.mode = i1983[0]
  i1982.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i1983[1], i1982.gradientMin)
  i1982.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i1983[2], i1982.gradientMax)
  i1982.colorMin = new pc.Color(i1983[3], i1983[4], i1983[5], i1983[6])
  i1982.colorMax = new pc.Color(i1983[7], i1983[8], i1983[9], i1983[10])
  return i1982
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i1984 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i1985 = data
  i1984.mode = i1985[0]
  var i1987 = i1985[1]
  var i1986 = []
  for(var i = 0; i < i1987.length; i += 1) {
    i1986.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i1987[i + 0]) );
  }
  i1984.colorKeys = i1986
  var i1989 = i1985[2]
  var i1988 = []
  for(var i = 0; i < i1989.length; i += 1) {
    i1988.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i1989[i + 0]) );
  }
  i1984.alphaKeys = i1988
  return i1984
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i1990 = root || new pc.ParticleSystemColorBySpeed()
  var i1991 = data
  i1990.enabled = !!i1991[0]
  i1990.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1991[1], i1990.color)
  i1990.range = new pc.Vec2( i1991[2], i1991[3] )
  return i1990
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i1994 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i1995 = data
  i1994.color = new pc.Color(i1995[0], i1995[1], i1995[2], i1995[3])
  i1994.time = i1995[4]
  return i1994
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i1998 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i1999 = data
  i1998.alpha = i1999[0]
  i1998.time = i1999[1]
  return i1998
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i2000 = root || new pc.ParticleSystemColorOverLifetime()
  var i2001 = data
  i2000.enabled = !!i2001[0]
  i2000.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2001[1], i2000.color)
  return i2000
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i2002 = root || new pc.ParticleSystemEmitter()
  var i2003 = data
  i2002.enabled = !!i2003[0]
  i2002.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2003[1], i2002.rateOverTime)
  i2002.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2003[2], i2002.rateOverDistance)
  var i2005 = i2003[3]
  var i2004 = []
  for(var i = 0; i < i2005.length; i += 1) {
    i2004.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i2005[i + 0]) );
  }
  i2002.bursts = i2004
  return i2002
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i2008 = root || new pc.ParticleSystemBurst()
  var i2009 = data
  i2008.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2009[0], i2008.count)
  i2008.cycleCount = i2009[1]
  i2008.minCount = i2009[2]
  i2008.maxCount = i2009[3]
  i2008.repeatInterval = i2009[4]
  i2008.time = i2009[5]
  return i2008
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i2010 = root || new pc.ParticleSystemRotationBySpeed()
  var i2011 = data
  i2010.enabled = !!i2011[0]
  i2010.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2011[1], i2010.x)
  i2010.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2011[2], i2010.y)
  i2010.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2011[3], i2010.z)
  i2010.separateAxes = !!i2011[4]
  i2010.range = new pc.Vec2( i2011[5], i2011[6] )
  return i2010
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i2012 = root || new pc.ParticleSystemRotationOverLifetime()
  var i2013 = data
  i2012.enabled = !!i2013[0]
  i2012.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2013[1], i2012.x)
  i2012.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2013[2], i2012.y)
  i2012.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2013[3], i2012.z)
  i2012.separateAxes = !!i2013[4]
  return i2012
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i2014 = root || new pc.ParticleSystemShape()
  var i2015 = data
  i2014.enabled = !!i2015[0]
  i2014.shapeType = i2015[1]
  i2014.randomDirectionAmount = i2015[2]
  i2014.sphericalDirectionAmount = i2015[3]
  i2014.randomPositionAmount = i2015[4]
  i2014.alignToDirection = !!i2015[5]
  i2014.radius = i2015[6]
  i2014.radiusMode = i2015[7]
  i2014.radiusSpread = i2015[8]
  i2014.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2015[9], i2014.radiusSpeed)
  i2014.radiusThickness = i2015[10]
  i2014.angle = i2015[11]
  i2014.length = i2015[12]
  i2014.boxThickness = new pc.Vec3( i2015[13], i2015[14], i2015[15] )
  i2014.meshShapeType = i2015[16]
  request.r(i2015[17], i2015[18], 0, i2014, 'mesh')
  request.r(i2015[19], i2015[20], 0, i2014, 'meshRenderer')
  request.r(i2015[21], i2015[22], 0, i2014, 'skinnedMeshRenderer')
  i2014.useMeshMaterialIndex = !!i2015[23]
  i2014.meshMaterialIndex = i2015[24]
  i2014.useMeshColors = !!i2015[25]
  i2014.normalOffset = i2015[26]
  i2014.arc = i2015[27]
  i2014.arcMode = i2015[28]
  i2014.arcSpread = i2015[29]
  i2014.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2015[30], i2014.arcSpeed)
  i2014.donutRadius = i2015[31]
  i2014.position = new pc.Vec3( i2015[32], i2015[33], i2015[34] )
  i2014.rotation = new pc.Vec3( i2015[35], i2015[36], i2015[37] )
  i2014.scale = new pc.Vec3( i2015[38], i2015[39], i2015[40] )
  return i2014
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i2016 = root || new pc.ParticleSystemSizeBySpeed()
  var i2017 = data
  i2016.enabled = !!i2017[0]
  i2016.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2017[1], i2016.x)
  i2016.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2017[2], i2016.y)
  i2016.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2017[3], i2016.z)
  i2016.separateAxes = !!i2017[4]
  i2016.range = new pc.Vec2( i2017[5], i2017[6] )
  return i2016
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i2018 = root || new pc.ParticleSystemSizeOverLifetime()
  var i2019 = data
  i2018.enabled = !!i2019[0]
  i2018.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2019[1], i2018.x)
  i2018.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2019[2], i2018.y)
  i2018.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2019[3], i2018.z)
  i2018.separateAxes = !!i2019[4]
  return i2018
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i2020 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i2021 = data
  i2020.enabled = !!i2021[0]
  i2020.mode = i2021[1]
  i2020.animation = i2021[2]
  i2020.numTilesX = i2021[3]
  i2020.numTilesY = i2021[4]
  i2020.useRandomRow = !!i2021[5]
  i2020.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2021[6], i2020.frameOverTime)
  i2020.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2021[7], i2020.startFrame)
  i2020.cycleCount = i2021[8]
  i2020.rowIndex = i2021[9]
  i2020.flipU = i2021[10]
  i2020.flipV = i2021[11]
  i2020.spriteCount = i2021[12]
  var i2023 = i2021[13]
  var i2022 = []
  for(var i = 0; i < i2023.length; i += 2) {
  request.r(i2023[i + 0], i2023[i + 1], 2, i2022, '')
  }
  i2020.sprites = i2022
  return i2020
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i2026 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i2027 = data
  i2026.enabled = !!i2027[0]
  i2026.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2027[1], i2026.x)
  i2026.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2027[2], i2026.y)
  i2026.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2027[3], i2026.z)
  i2026.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2027[4], i2026.radial)
  i2026.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2027[5], i2026.speedModifier)
  i2026.space = i2027[6]
  i2026.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2027[7], i2026.orbitalX)
  i2026.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2027[8], i2026.orbitalY)
  i2026.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2027[9], i2026.orbitalZ)
  i2026.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2027[10], i2026.orbitalOffsetX)
  i2026.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2027[11], i2026.orbitalOffsetY)
  i2026.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2027[12], i2026.orbitalOffsetZ)
  return i2026
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i2028 = root || new pc.ParticleSystemNoise()
  var i2029 = data
  i2028.enabled = !!i2029[0]
  i2028.separateAxes = !!i2029[1]
  i2028.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2029[2], i2028.strengthX)
  i2028.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2029[3], i2028.strengthY)
  i2028.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2029[4], i2028.strengthZ)
  i2028.frequency = i2029[5]
  i2028.damping = !!i2029[6]
  i2028.octaveCount = i2029[7]
  i2028.octaveMultiplier = i2029[8]
  i2028.octaveScale = i2029[9]
  i2028.quality = i2029[10]
  i2028.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2029[11], i2028.scrollSpeed)
  i2028.scrollSpeedMultiplier = i2029[12]
  i2028.remapEnabled = !!i2029[13]
  i2028.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2029[14], i2028.remapX)
  i2028.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2029[15], i2028.remapY)
  i2028.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2029[16], i2028.remapZ)
  i2028.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2029[17], i2028.positionAmount)
  i2028.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2029[18], i2028.rotationAmount)
  i2028.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2029[19], i2028.sizeAmount)
  return i2028
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i2030 = root || new pc.ParticleSystemInheritVelocity()
  var i2031 = data
  i2030.enabled = !!i2031[0]
  i2030.mode = i2031[1]
  i2030.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2031[2], i2030.curve)
  return i2030
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i2032 = root || new pc.ParticleSystemForceOverLifetime()
  var i2033 = data
  i2032.enabled = !!i2033[0]
  i2032.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2033[1], i2032.x)
  i2032.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2033[2], i2032.y)
  i2032.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2033[3], i2032.z)
  i2032.space = i2033[4]
  i2032.randomized = !!i2033[5]
  return i2032
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i2034 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i2035 = data
  i2034.enabled = !!i2035[0]
  i2034.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2035[1], i2034.limit)
  i2034.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2035[2], i2034.limitX)
  i2034.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2035[3], i2034.limitY)
  i2034.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2035[4], i2034.limitZ)
  i2034.dampen = i2035[5]
  i2034.separateAxes = !!i2035[6]
  i2034.space = i2035[7]
  i2034.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2035[8], i2034.drag)
  i2034.multiplyDragByParticleSize = !!i2035[9]
  i2034.multiplyDragByParticleVelocity = !!i2035[10]
  return i2034
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i2036 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i2037 = data
  request.r(i2037[0], i2037[1], 0, i2036, 'mesh')
  i2036.meshCount = i2037[2]
  i2036.activeVertexStreamsCount = i2037[3]
  i2036.alignment = i2037[4]
  i2036.renderMode = i2037[5]
  i2036.sortMode = i2037[6]
  i2036.lengthScale = i2037[7]
  i2036.velocityScale = i2037[8]
  i2036.cameraVelocityScale = i2037[9]
  i2036.normalDirection = i2037[10]
  i2036.sortingFudge = i2037[11]
  i2036.minParticleSize = i2037[12]
  i2036.maxParticleSize = i2037[13]
  i2036.pivot = new pc.Vec3( i2037[14], i2037[15], i2037[16] )
  request.r(i2037[17], i2037[18], 0, i2036, 'trailMaterial')
  i2036.applyActiveColorSpace = !!i2037[19]
  i2036.enabled = !!i2037[20]
  request.r(i2037[21], i2037[22], 0, i2036, 'sharedMaterial')
  var i2039 = i2037[23]
  var i2038 = []
  for(var i = 0; i < i2039.length; i += 2) {
  request.r(i2039[i + 0], i2039[i + 1], 2, i2038, '')
  }
  i2036.sharedMaterials = i2038
  i2036.receiveShadows = !!i2037[24]
  i2036.shadowCastingMode = i2037[25]
  i2036.sortingLayerID = i2037[26]
  i2036.sortingOrder = i2037[27]
  i2036.lightmapIndex = i2037[28]
  i2036.lightmapSceneIndex = i2037[29]
  i2036.lightmapScaleOffset = new pc.Vec4( i2037[30], i2037[31], i2037[32], i2037[33] )
  i2036.lightProbeUsage = i2037[34]
  i2036.reflectionProbeUsage = i2037[35]
  return i2036
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i2042 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i2043 = data
  i2042.name = i2043[0]
  i2042.tagId = i2043[1]
  i2042.enabled = !!i2043[2]
  i2042.isStatic = !!i2043[3]
  i2042.layer = i2043[4]
  return i2042
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i2044 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i2045 = data
  i2044.color = new pc.Color(i2045[0], i2045[1], i2045[2], i2045[3])
  request.r(i2045[4], i2045[5], 0, i2044, 'sprite')
  i2044.flipX = !!i2045[6]
  i2044.flipY = !!i2045[7]
  i2044.drawMode = i2045[8]
  i2044.size = new pc.Vec2( i2045[9], i2045[10] )
  i2044.tileMode = i2045[11]
  i2044.adaptiveModeThreshold = i2045[12]
  i2044.maskInteraction = i2045[13]
  i2044.spriteSortPoint = i2045[14]
  i2044.enabled = !!i2045[15]
  request.r(i2045[16], i2045[17], 0, i2044, 'sharedMaterial')
  var i2047 = i2045[18]
  var i2046 = []
  for(var i = 0; i < i2047.length; i += 2) {
  request.r(i2047[i + 0], i2047[i + 1], 2, i2046, '')
  }
  i2044.sharedMaterials = i2046
  i2044.receiveShadows = !!i2045[19]
  i2044.shadowCastingMode = i2045[20]
  i2044.sortingLayerID = i2045[21]
  i2044.sortingOrder = i2045[22]
  i2044.lightmapIndex = i2045[23]
  i2044.lightmapSceneIndex = i2045[24]
  i2044.lightmapScaleOffset = new pc.Vec4( i2045[25], i2045[26], i2045[27], i2045[28] )
  i2044.lightProbeUsage = i2045[29]
  i2044.reflectionProbeUsage = i2045[30]
  return i2044
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i2048 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i2049 = data
  request.r(i2049[0], i2049[1], 0, i2048, 'animatorController')
  request.r(i2049[2], i2049[3], 0, i2048, 'avatar')
  i2048.updateMode = i2049[4]
  i2048.hasTransformHierarchy = !!i2049[5]
  i2048.applyRootMotion = !!i2049[6]
  var i2051 = i2049[7]
  var i2050 = []
  for(var i = 0; i < i2051.length; i += 2) {
  request.r(i2051[i + 0], i2051[i + 1], 2, i2050, '')
  }
  i2048.humanBones = i2050
  i2048.enabled = !!i2049[8]
  return i2048
}

Deserializers["MoveBetweenPoints"] = function (request, data, root) {
  var i2054 = root || request.c( 'MoveBetweenPoints' )
  var i2055 = data
  request.r(i2055[0], i2055[1], 0, i2054, 'pointA')
  request.r(i2055[2], i2055[3], 0, i2054, 'pointB')
  i2054.duration = i2055[4]
  return i2054
}

Deserializers["PlayerCardUIManager"] = function (request, data, root) {
  var i2056 = root || request.c( 'PlayerCardUIManager' )
  var i2057 = data
  request.r(i2057[0], i2057[1], 0, i2056, 'cardPanel')
  var i2059 = i2057[2]
  var i2058 = []
  for(var i = 0; i < i2059.length; i += 2) {
  request.r(i2059[i + 0], i2059[i + 1], 2, i2058, '')
  }
  i2056.extraObjectsToActivate = i2058
  i2056.waitTime = i2057[3]
  var i2061 = i2057[4]
  var i2060 = []
  for(var i = 0; i < i2061.length; i += 2) {
  request.r(i2061[i + 0], i2061[i + 1], 2, i2060, '')
  }
  i2056.objectsToTurnOnAfterWait = i2060
  var i2063 = i2057[5]
  var i2062 = []
  for(var i = 0; i < i2063.length; i += 2) {
  request.r(i2063[i + 0], i2063[i + 1], 2, i2062, '')
  }
  i2056.objectsToTurnOffAfterWait = i2062
  request.r(i2057[6], i2057[7], 0, i2056, 'nationalityText')
  request.r(i2057[8], i2057[9], 0, i2056, 'playerImage')
  request.r(i2057[10], i2057[11], 0, i2056, 'flagImage')
  return i2056
}

Deserializers["Ply_SoundManager"] = function (request, data, root) {
  var i2066 = root || request.c( 'Ply_SoundManager' )
  var i2067 = data
  i2066.fxAudio = request.d('FxAudio', i2067[0], i2066.fxAudio)
  request.r(i2067[1], i2067[2], 0, i2066, 'bgm1')
  return i2066
}

Deserializers["FxAudio"] = function (request, data, root) {
  var i2068 = root || request.c( 'FxAudio' )
  var i2069 = data
  i2068.ClickBox = request.d('SoundData', i2069[0], i2068.ClickBox)
  i2068.Happy = request.d('SoundData', i2069[1], i2068.Happy)
  i2068.Wrong = request.d('SoundData', i2069[2], i2068.Wrong)
  i2068.Spray = request.d('SoundData', i2069[3], i2068.Spray)
  i2068.Brush = request.d('SoundData', i2069[4], i2068.Brush)
  return i2068
}

Deserializers["SoundData"] = function (request, data, root) {
  var i2070 = root || request.c( 'SoundData' )
  var i2071 = data
  request.r(i2071[0], i2071[1], 0, i2070, 'clip')
  i2070.repeatCount = i2071[2]
  return i2070
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i2072 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i2073 = data
  request.r(i2073[0], i2073[1], 0, i2072, 'clip')
  request.r(i2073[2], i2073[3], 0, i2072, 'outputAudioMixerGroup')
  i2072.playOnAwake = !!i2073[4]
  i2072.loop = !!i2073[5]
  i2072.time = i2073[6]
  i2072.volume = i2073[7]
  i2072.pitch = i2073[8]
  i2072.enabled = !!i2073[9]
  return i2072
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i2074 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i2075 = data
  i2074.pivot = new pc.Vec2( i2075[0], i2075[1] )
  i2074.anchorMin = new pc.Vec2( i2075[2], i2075[3] )
  i2074.anchorMax = new pc.Vec2( i2075[4], i2075[5] )
  i2074.sizeDelta = new pc.Vec2( i2075[6], i2075[7] )
  i2074.anchoredPosition3D = new pc.Vec3( i2075[8], i2075[9], i2075[10] )
  i2074.rotation = new pc.Quat(i2075[11], i2075[12], i2075[13], i2075[14])
  i2074.scale = new pc.Vec3( i2075[15], i2075[16], i2075[17] )
  return i2074
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i2076 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i2077 = data
  i2076.planeDistance = i2077[0]
  i2076.referencePixelsPerUnit = i2077[1]
  i2076.isFallbackOverlay = !!i2077[2]
  i2076.renderMode = i2077[3]
  i2076.renderOrder = i2077[4]
  i2076.sortingLayerName = i2077[5]
  i2076.sortingOrder = i2077[6]
  i2076.scaleFactor = i2077[7]
  request.r(i2077[8], i2077[9], 0, i2076, 'worldCamera')
  i2076.overrideSorting = !!i2077[10]
  i2076.pixelPerfect = !!i2077[11]
  i2076.targetDisplay = i2077[12]
  i2076.overridePixelPerfect = !!i2077[13]
  i2076.enabled = !!i2077[14]
  return i2076
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i2078 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i2079 = data
  i2078.m_UiScaleMode = i2079[0]
  i2078.m_ReferencePixelsPerUnit = i2079[1]
  i2078.m_ScaleFactor = i2079[2]
  i2078.m_ReferenceResolution = new pc.Vec2( i2079[3], i2079[4] )
  i2078.m_ScreenMatchMode = i2079[5]
  i2078.m_MatchWidthOrHeight = i2079[6]
  i2078.m_PhysicalUnit = i2079[7]
  i2078.m_FallbackScreenDPI = i2079[8]
  i2078.m_DefaultSpriteDPI = i2079[9]
  i2078.m_DynamicPixelsPerUnit = i2079[10]
  i2078.m_PresetInfoIsWorld = !!i2079[11]
  return i2078
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i2080 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i2081 = data
  i2080.m_IgnoreReversedGraphics = !!i2081[0]
  i2080.m_BlockingObjects = i2081[1]
  i2080.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i2081[2] )
  return i2080
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i2082 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i2083 = data
  i2082.cullTransparentMesh = !!i2083[0]
  return i2082
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i2084 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i2085 = data
  i2084.m_hasFontAssetChanged = !!i2085[0]
  request.r(i2085[1], i2085[2], 0, i2084, 'm_baseMaterial')
  i2084.m_maskOffset = new pc.Vec4( i2085[3], i2085[4], i2085[5], i2085[6] )
  i2084.m_text = i2085[7]
  i2084.m_isRightToLeft = !!i2085[8]
  request.r(i2085[9], i2085[10], 0, i2084, 'm_fontAsset')
  request.r(i2085[11], i2085[12], 0, i2084, 'm_sharedMaterial')
  var i2087 = i2085[13]
  var i2086 = []
  for(var i = 0; i < i2087.length; i += 2) {
  request.r(i2087[i + 0], i2087[i + 1], 2, i2086, '')
  }
  i2084.m_fontSharedMaterials = i2086
  request.r(i2085[14], i2085[15], 0, i2084, 'm_fontMaterial')
  var i2089 = i2085[16]
  var i2088 = []
  for(var i = 0; i < i2089.length; i += 2) {
  request.r(i2089[i + 0], i2089[i + 1], 2, i2088, '')
  }
  i2084.m_fontMaterials = i2088
  i2084.m_fontColor32 = UnityEngine.Color32.ConstructColor(i2085[17], i2085[18], i2085[19], i2085[20])
  i2084.m_fontColor = new pc.Color(i2085[21], i2085[22], i2085[23], i2085[24])
  i2084.m_enableVertexGradient = !!i2085[25]
  i2084.m_colorMode = i2085[26]
  i2084.m_fontColorGradient = request.d('TMPro.VertexGradient', i2085[27], i2084.m_fontColorGradient)
  request.r(i2085[28], i2085[29], 0, i2084, 'm_fontColorGradientPreset')
  request.r(i2085[30], i2085[31], 0, i2084, 'm_spriteAsset')
  i2084.m_tintAllSprites = !!i2085[32]
  request.r(i2085[33], i2085[34], 0, i2084, 'm_StyleSheet')
  i2084.m_TextStyleHashCode = i2085[35]
  i2084.m_overrideHtmlColors = !!i2085[36]
  i2084.m_faceColor = UnityEngine.Color32.ConstructColor(i2085[37], i2085[38], i2085[39], i2085[40])
  i2084.m_fontSize = i2085[41]
  i2084.m_fontSizeBase = i2085[42]
  i2084.m_fontWeight = i2085[43]
  i2084.m_enableAutoSizing = !!i2085[44]
  i2084.m_fontSizeMin = i2085[45]
  i2084.m_fontSizeMax = i2085[46]
  i2084.m_fontStyle = i2085[47]
  i2084.m_HorizontalAlignment = i2085[48]
  i2084.m_VerticalAlignment = i2085[49]
  i2084.m_textAlignment = i2085[50]
  i2084.m_characterSpacing = i2085[51]
  i2084.m_wordSpacing = i2085[52]
  i2084.m_lineSpacing = i2085[53]
  i2084.m_lineSpacingMax = i2085[54]
  i2084.m_paragraphSpacing = i2085[55]
  i2084.m_charWidthMaxAdj = i2085[56]
  i2084.m_TextWrappingMode = i2085[57]
  i2084.m_wordWrappingRatios = i2085[58]
  i2084.m_overflowMode = i2085[59]
  request.r(i2085[60], i2085[61], 0, i2084, 'm_linkedTextComponent')
  request.r(i2085[62], i2085[63], 0, i2084, 'parentLinkedComponent')
  i2084.m_enableKerning = !!i2085[64]
  var i2091 = i2085[65]
  var i2090 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i2091.length; i += 1) {
    i2090.add(i2091[i + 0]);
  }
  i2084.m_ActiveFontFeatures = i2090
  i2084.m_enableExtraPadding = !!i2085[66]
  i2084.checkPaddingRequired = !!i2085[67]
  i2084.m_isRichText = !!i2085[68]
  i2084.m_parseCtrlCharacters = !!i2085[69]
  i2084.m_isOrthographic = !!i2085[70]
  i2084.m_isCullingEnabled = !!i2085[71]
  i2084.m_horizontalMapping = i2085[72]
  i2084.m_verticalMapping = i2085[73]
  i2084.m_uvLineOffset = i2085[74]
  i2084.m_geometrySortingOrder = i2085[75]
  i2084.m_IsTextObjectScaleStatic = !!i2085[76]
  i2084.m_VertexBufferAutoSizeReduction = !!i2085[77]
  i2084.m_useMaxVisibleDescender = !!i2085[78]
  i2084.m_pageToDisplay = i2085[79]
  i2084.m_margin = new pc.Vec4( i2085[80], i2085[81], i2085[82], i2085[83] )
  i2084.m_isUsingLegacyAnimationComponent = !!i2085[84]
  i2084.m_isVolumetricText = !!i2085[85]
  request.r(i2085[86], i2085[87], 0, i2084, 'm_Material')
  i2084.m_EmojiFallbackSupport = !!i2085[88]
  i2084.m_Maskable = !!i2085[89]
  i2084.m_Color = new pc.Color(i2085[90], i2085[91], i2085[92], i2085[93])
  i2084.m_RaycastTarget = !!i2085[94]
  i2084.m_RaycastPadding = new pc.Vec4( i2085[95], i2085[96], i2085[97], i2085[98] )
  return i2084
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i2092 = root || request.c( 'TMPro.VertexGradient' )
  var i2093 = data
  i2092.topLeft = new pc.Color(i2093[0], i2093[1], i2093[2], i2093[3])
  i2092.topRight = new pc.Color(i2093[4], i2093[5], i2093[6], i2093[7])
  i2092.bottomLeft = new pc.Color(i2093[8], i2093[9], i2093[10], i2093[11])
  i2092.bottomRight = new pc.Color(i2093[12], i2093[13], i2093[14], i2093[15])
  return i2092
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i2096 = root || request.c( 'UnityEngine.UI.Image' )
  var i2097 = data
  request.r(i2097[0], i2097[1], 0, i2096, 'm_Sprite')
  i2096.m_Type = i2097[2]
  i2096.m_PreserveAspect = !!i2097[3]
  i2096.m_FillCenter = !!i2097[4]
  i2096.m_FillMethod = i2097[5]
  i2096.m_FillAmount = i2097[6]
  i2096.m_FillClockwise = !!i2097[7]
  i2096.m_FillOrigin = i2097[8]
  i2096.m_UseSpriteMesh = !!i2097[9]
  i2096.m_PixelsPerUnitMultiplier = i2097[10]
  request.r(i2097[11], i2097[12], 0, i2096, 'm_Material')
  i2096.m_Maskable = !!i2097[13]
  i2096.m_Color = new pc.Color(i2097[14], i2097[15], i2097[16], i2097[17])
  i2096.m_RaycastTarget = !!i2097[18]
  i2096.m_RaycastPadding = new pc.Vec4( i2097[19], i2097[20], i2097[21], i2097[22] )
  return i2096
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D"] = function (request, data, root) {
  var i2098 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D' )
  var i2099 = data
  i2098.usedByComposite = !!i2099[0]
  i2098.autoTiling = !!i2099[1]
  var i2101 = i2099[2]
  var i2100 = []
  for(var i = 0; i < i2101.length; i += 1) {
  var i2103 = i2101[i + 0]
  var i2102 = []
  for(var i = 0; i < i2103.length; i += 2) {
    i2102.push( new pc.Vec2( i2103[i + 0], i2103[i + 1] ) );
  }
    i2100.push( i2102 );
  }
  i2098.points = i2100
  i2098.enabled = !!i2099[3]
  i2098.isTrigger = !!i2099[4]
  i2098.usedByEffector = !!i2099[5]
  i2098.density = i2099[6]
  i2098.offset = new pc.Vec2( i2099[7], i2099[8] )
  request.r(i2099[9], i2099[10], 0, i2098, 'material')
  return i2098
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i2110 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i2111 = data
  i2110.usedByComposite = !!i2111[0]
  i2110.autoTiling = !!i2111[1]
  i2110.size = new pc.Vec2( i2111[2], i2111[3] )
  i2110.edgeRadius = i2111[4]
  i2110.enabled = !!i2111[5]
  i2110.isTrigger = !!i2111[6]
  i2110.usedByEffector = !!i2111[7]
  i2110.density = i2111[8]
  i2110.offset = new pc.Vec2( i2111[9], i2111[10] )
  request.r(i2111[11], i2111[12], 0, i2110, 'material')
  return i2110
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i2112 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i2113 = data
  i2112.bodyType = i2113[0]
  request.r(i2113[1], i2113[2], 0, i2112, 'material')
  i2112.simulated = !!i2113[3]
  i2112.useAutoMass = !!i2113[4]
  i2112.mass = i2113[5]
  i2112.drag = i2113[6]
  i2112.angularDrag = i2113[7]
  i2112.gravityScale = i2113[8]
  i2112.collisionDetectionMode = i2113[9]
  i2112.sleepMode = i2113[10]
  i2112.constraints = i2113[11]
  return i2112
}

Deserializers["BatStrikeController"] = function (request, data, root) {
  var i2114 = root || request.c( 'BatStrikeController' )
  var i2115 = data
  i2114.pullSpeed = i2115[0]
  i2114.maxPullDistance = i2115[1]
  i2114.minHoldTime = i2115[2]
  i2114.strikeForce = i2115[3]
  i2114.targetTag = i2115[4]
  return i2114
}

Deserializers["CupCollision"] = function (request, data, root) {
  var i2116 = root || request.c( 'CupCollision' )
  var i2117 = data
  i2116.baseTag = i2117[0]
  request.r(i2117[1], i2117[2], 0, i2116, 'objectToActivate')
  return i2116
}

Deserializers["SlotTrigger"] = function (request, data, root) {
  var i2118 = root || request.c( 'SlotTrigger' )
  var i2119 = data
  request.r(i2119[0], i2119[1], 0, i2118, 'cardData')
  i2118.targetTag = i2119[2]
  request.r(i2119[3], i2119[4], 0, i2118, 'yAnchor')
  i2118.moveSpeed = i2119[5]
  return i2118
}

Deserializers["HideOnFirstClick"] = function (request, data, root) {
  var i2120 = root || request.c( 'HideOnFirstClick' )
  var i2121 = data
  request.r(i2121[0], i2121[1], 0, i2120, 'objectToHide')
  return i2120
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i2122 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i2123 = data
  request.r(i2123[0], i2123[1], 0, i2122, 'm_FirstSelected')
  i2122.m_sendNavigationEvents = !!i2123[2]
  i2122.m_DragThreshold = i2123[3]
  return i2122
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i2124 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i2125 = data
  i2124.m_HorizontalAxis = i2125[0]
  i2124.m_VerticalAxis = i2125[1]
  i2124.m_SubmitButton = i2125[2]
  i2124.m_CancelButton = i2125[3]
  i2124.m_InputActionsPerSecond = i2125[4]
  i2124.m_RepeatDelay = i2125[5]
  i2124.m_ForceModuleActive = !!i2125[6]
  i2124.m_SendPointerHoverToParent = !!i2125[7]
  return i2124
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i2126 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i2127 = data
  i2126.ambientIntensity = i2127[0]
  i2126.reflectionIntensity = i2127[1]
  i2126.ambientMode = i2127[2]
  i2126.ambientLight = new pc.Color(i2127[3], i2127[4], i2127[5], i2127[6])
  i2126.ambientSkyColor = new pc.Color(i2127[7], i2127[8], i2127[9], i2127[10])
  i2126.ambientGroundColor = new pc.Color(i2127[11], i2127[12], i2127[13], i2127[14])
  i2126.ambientEquatorColor = new pc.Color(i2127[15], i2127[16], i2127[17], i2127[18])
  i2126.fogColor = new pc.Color(i2127[19], i2127[20], i2127[21], i2127[22])
  i2126.fogEndDistance = i2127[23]
  i2126.fogStartDistance = i2127[24]
  i2126.fogDensity = i2127[25]
  i2126.fog = !!i2127[26]
  request.r(i2127[27], i2127[28], 0, i2126, 'skybox')
  i2126.fogMode = i2127[29]
  var i2129 = i2127[30]
  var i2128 = []
  for(var i = 0; i < i2129.length; i += 1) {
    i2128.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i2129[i + 0]) );
  }
  i2126.lightmaps = i2128
  i2126.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i2127[31], i2126.lightProbes)
  i2126.lightmapsMode = i2127[32]
  i2126.mixedBakeMode = i2127[33]
  i2126.environmentLightingMode = i2127[34]
  i2126.ambientProbe = new pc.SphericalHarmonicsL2(i2127[35])
  i2126.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i2127[36])
  i2126.useReferenceAmbientProbe = !!i2127[37]
  request.r(i2127[38], i2127[39], 0, i2126, 'customReflection')
  request.r(i2127[40], i2127[41], 0, i2126, 'defaultReflection')
  i2126.defaultReflectionMode = i2127[42]
  i2126.defaultReflectionResolution = i2127[43]
  i2126.sunLightObjectId = i2127[44]
  i2126.pixelLightCount = i2127[45]
  i2126.defaultReflectionHDR = !!i2127[46]
  i2126.hasLightDataAsset = !!i2127[47]
  i2126.hasManualGenerate = !!i2127[48]
  return i2126
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i2132 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i2133 = data
  request.r(i2133[0], i2133[1], 0, i2132, 'lightmapColor')
  request.r(i2133[2], i2133[3], 0, i2132, 'lightmapDirection')
  request.r(i2133[4], i2133[5], 0, i2132, 'shadowMask')
  return i2132
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i2134 = root || new UnityEngine.LightProbes()
  var i2135 = data
  return i2134
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.PhysicsMaterial2D"] = function (request, data, root) {
  var i2142 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.PhysicsMaterial2D' )
  var i2143 = data
  i2142.name = i2143[0]
  i2142.bounciness = i2143[1]
  i2142.friction = i2143[2]
  return i2142
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i2144 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i2145 = data
  var i2147 = i2145[0]
  var i2146 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i2147.length; i += 1) {
    i2146.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i2147[i + 0]));
  }
  i2144.ShaderCompilationErrors = i2146
  i2144.name = i2145[1]
  i2144.guid = i2145[2]
  var i2149 = i2145[3]
  var i2148 = []
  for(var i = 0; i < i2149.length; i += 1) {
    i2148.push( i2149[i + 0] );
  }
  i2144.shaderDefinedKeywords = i2148
  var i2151 = i2145[4]
  var i2150 = []
  for(var i = 0; i < i2151.length; i += 1) {
    i2150.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i2151[i + 0]) );
  }
  i2144.passes = i2150
  var i2153 = i2145[5]
  var i2152 = []
  for(var i = 0; i < i2153.length; i += 1) {
    i2152.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i2153[i + 0]) );
  }
  i2144.usePasses = i2152
  var i2155 = i2145[6]
  var i2154 = []
  for(var i = 0; i < i2155.length; i += 1) {
    i2154.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i2155[i + 0]) );
  }
  i2144.defaultParameterValues = i2154
  request.r(i2145[7], i2145[8], 0, i2144, 'unityFallbackShader')
  i2144.readDepth = !!i2145[9]
  i2144.hasDepthOnlyPass = !!i2145[10]
  i2144.isCreatedByShaderGraph = !!i2145[11]
  i2144.disableBatching = !!i2145[12]
  i2144.compiled = !!i2145[13]
  return i2144
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i2158 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i2159 = data
  i2158.shaderName = i2159[0]
  i2158.errorMessage = i2159[1]
  return i2158
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i2164 = root || new pc.UnityShaderPass()
  var i2165 = data
  i2164.id = i2165[0]
  i2164.subShaderIndex = i2165[1]
  i2164.name = i2165[2]
  i2164.passType = i2165[3]
  i2164.grabPassTextureName = i2165[4]
  i2164.usePass = !!i2165[5]
  i2164.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2165[6], i2164.zTest)
  i2164.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2165[7], i2164.zWrite)
  i2164.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2165[8], i2164.culling)
  i2164.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2165[9], i2164.blending)
  i2164.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2165[10], i2164.alphaBlending)
  i2164.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2165[11], i2164.colorWriteMask)
  i2164.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2165[12], i2164.offsetUnits)
  i2164.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2165[13], i2164.offsetFactor)
  i2164.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2165[14], i2164.stencilRef)
  i2164.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2165[15], i2164.stencilReadMask)
  i2164.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2165[16], i2164.stencilWriteMask)
  i2164.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2165[17], i2164.stencilOp)
  i2164.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2165[18], i2164.stencilOpFront)
  i2164.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2165[19], i2164.stencilOpBack)
  var i2167 = i2165[20]
  var i2166 = []
  for(var i = 0; i < i2167.length; i += 1) {
    i2166.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i2167[i + 0]) );
  }
  i2164.tags = i2166
  var i2169 = i2165[21]
  var i2168 = []
  for(var i = 0; i < i2169.length; i += 1) {
    i2168.push( i2169[i + 0] );
  }
  i2164.passDefinedKeywords = i2168
  var i2171 = i2165[22]
  var i2170 = []
  for(var i = 0; i < i2171.length; i += 1) {
    i2170.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i2171[i + 0]) );
  }
  i2164.passDefinedKeywordGroups = i2170
  var i2173 = i2165[23]
  var i2172 = []
  for(var i = 0; i < i2173.length; i += 1) {
    i2172.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2173[i + 0]) );
  }
  i2164.variants = i2172
  var i2175 = i2165[24]
  var i2174 = []
  for(var i = 0; i < i2175.length; i += 1) {
    i2174.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2175[i + 0]) );
  }
  i2164.excludedVariants = i2174
  i2164.hasDepthReader = !!i2165[25]
  return i2164
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i2176 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i2177 = data
  i2176.val = i2177[0]
  i2176.name = i2177[1]
  return i2176
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i2178 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i2179 = data
  i2178.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2179[0], i2178.src)
  i2178.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2179[1], i2178.dst)
  i2178.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2179[2], i2178.op)
  return i2178
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i2180 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i2181 = data
  i2180.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2181[0], i2180.pass)
  i2180.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2181[1], i2180.fail)
  i2180.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2181[2], i2180.zFail)
  i2180.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2181[3], i2180.comp)
  return i2180
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i2184 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i2185 = data
  i2184.name = i2185[0]
  i2184.value = i2185[1]
  return i2184
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i2188 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i2189 = data
  var i2191 = i2189[0]
  var i2190 = []
  for(var i = 0; i < i2191.length; i += 1) {
    i2190.push( i2191[i + 0] );
  }
  i2188.keywords = i2190
  i2188.hasDiscard = !!i2189[1]
  return i2188
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i2194 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i2195 = data
  i2194.passId = i2195[0]
  i2194.subShaderIndex = i2195[1]
  var i2197 = i2195[2]
  var i2196 = []
  for(var i = 0; i < i2197.length; i += 1) {
    i2196.push( i2197[i + 0] );
  }
  i2194.keywords = i2196
  i2194.vertexProgram = i2195[3]
  i2194.fragmentProgram = i2195[4]
  i2194.exportedForWebGl2 = !!i2195[5]
  i2194.readDepth = !!i2195[6]
  return i2194
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i2200 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i2201 = data
  request.r(i2201[0], i2201[1], 0, i2200, 'shader')
  i2200.pass = i2201[2]
  return i2200
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i2204 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i2205 = data
  i2204.name = i2205[0]
  i2204.type = i2205[1]
  i2204.value = new pc.Vec4( i2205[2], i2205[3], i2205[4], i2205[5] )
  i2204.textureValue = i2205[6]
  i2204.shaderPropertyFlag = i2205[7]
  return i2204
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i2206 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i2207 = data
  i2206.name = i2207[0]
  request.r(i2207[1], i2207[2], 0, i2206, 'texture')
  i2206.aabb = i2207[3]
  i2206.vertices = i2207[4]
  i2206.triangles = i2207[5]
  i2206.textureRect = UnityEngine.Rect.MinMaxRect(i2207[6], i2207[7], i2207[8], i2207[9])
  i2206.packedRect = UnityEngine.Rect.MinMaxRect(i2207[10], i2207[11], i2207[12], i2207[13])
  i2206.border = new pc.Vec4( i2207[14], i2207[15], i2207[16], i2207[17] )
  i2206.transparency = i2207[18]
  i2206.bounds = i2207[19]
  i2206.pixelsPerUnit = i2207[20]
  i2206.textureWidth = i2207[21]
  i2206.textureHeight = i2207[22]
  i2206.nativeSize = new pc.Vec2( i2207[23], i2207[24] )
  i2206.pivot = new pc.Vec2( i2207[25], i2207[26] )
  i2206.textureRectOffset = new pc.Vec2( i2207[27], i2207[28] )
  return i2206
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i2208 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i2209 = data
  i2208.name = i2209[0]
  return i2208
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i2210 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i2211 = data
  i2210.name = i2211[0]
  i2210.wrapMode = i2211[1]
  i2210.isLooping = !!i2211[2]
  i2210.length = i2211[3]
  var i2213 = i2211[4]
  var i2212 = []
  for(var i = 0; i < i2213.length; i += 1) {
    i2212.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i2213[i + 0]) );
  }
  i2210.curves = i2212
  var i2215 = i2211[5]
  var i2214 = []
  for(var i = 0; i < i2215.length; i += 1) {
    i2214.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i2215[i + 0]) );
  }
  i2210.events = i2214
  i2210.halfPrecision = !!i2211[6]
  i2210._frameRate = i2211[7]
  i2210.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i2211[8], i2210.localBounds)
  i2210.hasMuscleCurves = !!i2211[9]
  var i2217 = i2211[10]
  var i2216 = []
  for(var i = 0; i < i2217.length; i += 1) {
    i2216.push( i2217[i + 0] );
  }
  i2210.clipMuscleConstant = i2216
  i2210.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i2211[11], i2210.clipBindingConstant)
  return i2210
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i2220 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i2221 = data
  i2220.path = i2221[0]
  i2220.hash = i2221[1]
  i2220.componentType = i2221[2]
  i2220.property = i2221[3]
  i2220.keys = i2221[4]
  var i2223 = i2221[5]
  var i2222 = []
  for(var i = 0; i < i2223.length; i += 1) {
    i2222.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i2223[i + 0]) );
  }
  i2220.objectReferenceKeys = i2222
  return i2220
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i2226 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i2227 = data
  i2226.time = i2227[0]
  request.r(i2227[1], i2227[2], 0, i2226, 'value')
  return i2226
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i2230 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i2231 = data
  i2230.functionName = i2231[0]
  i2230.floatParameter = i2231[1]
  i2230.intParameter = i2231[2]
  i2230.stringParameter = i2231[3]
  request.r(i2231[4], i2231[5], 0, i2230, 'objectReferenceParameter')
  i2230.time = i2231[6]
  return i2230
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i2232 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i2233 = data
  i2232.center = new pc.Vec3( i2233[0], i2233[1], i2233[2] )
  i2232.extends = new pc.Vec3( i2233[3], i2233[4], i2233[5] )
  return i2232
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i2236 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i2237 = data
  var i2239 = i2237[0]
  var i2238 = []
  for(var i = 0; i < i2239.length; i += 1) {
    i2238.push( i2239[i + 0] );
  }
  i2236.genericBindings = i2238
  var i2241 = i2237[1]
  var i2240 = []
  for(var i = 0; i < i2241.length; i += 1) {
    i2240.push( i2241[i + 0] );
  }
  i2236.pptrCurveMapping = i2240
  return i2236
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i2242 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i2243 = data
  i2242.name = i2243[0]
  i2242.ascent = i2243[1]
  i2242.originalLineHeight = i2243[2]
  i2242.fontSize = i2243[3]
  var i2245 = i2243[4]
  var i2244 = []
  for(var i = 0; i < i2245.length; i += 1) {
    i2244.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i2245[i + 0]) );
  }
  i2242.characterInfo = i2244
  request.r(i2243[5], i2243[6], 0, i2242, 'texture')
  i2242.originalFontSize = i2243[7]
  return i2242
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i2248 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i2249 = data
  i2248.index = i2249[0]
  i2248.advance = i2249[1]
  i2248.bearing = i2249[2]
  i2248.glyphWidth = i2249[3]
  i2248.glyphHeight = i2249[4]
  i2248.minX = i2249[5]
  i2248.maxX = i2249[6]
  i2248.minY = i2249[7]
  i2248.maxY = i2249[8]
  i2248.uvBottomLeftX = i2249[9]
  i2248.uvBottomLeftY = i2249[10]
  i2248.uvBottomRightX = i2249[11]
  i2248.uvBottomRightY = i2249[12]
  i2248.uvTopLeftX = i2249[13]
  i2248.uvTopLeftY = i2249[14]
  i2248.uvTopRightX = i2249[15]
  i2248.uvTopRightY = i2249[16]
  return i2248
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i2250 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i2251 = data
  i2250.name = i2251[0]
  var i2253 = i2251[1]
  var i2252 = []
  for(var i = 0; i < i2253.length; i += 1) {
    i2252.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i2253[i + 0]) );
  }
  i2250.layers = i2252
  var i2255 = i2251[2]
  var i2254 = []
  for(var i = 0; i < i2255.length; i += 1) {
    i2254.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i2255[i + 0]) );
  }
  i2250.parameters = i2254
  i2250.animationClips = i2251[3]
  i2250.avatarUnsupported = i2251[4]
  return i2250
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i2258 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i2259 = data
  i2258.name = i2259[0]
  i2258.defaultWeight = i2259[1]
  i2258.blendingMode = i2259[2]
  i2258.avatarMask = i2259[3]
  i2258.syncedLayerIndex = i2259[4]
  i2258.syncedLayerAffectsTiming = !!i2259[5]
  i2258.syncedLayers = i2259[6]
  i2258.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2259[7], i2258.stateMachine)
  return i2258
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i2260 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i2261 = data
  i2260.id = i2261[0]
  i2260.name = i2261[1]
  i2260.path = i2261[2]
  var i2263 = i2261[3]
  var i2262 = []
  for(var i = 0; i < i2263.length; i += 1) {
    i2262.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i2263[i + 0]) );
  }
  i2260.states = i2262
  var i2265 = i2261[4]
  var i2264 = []
  for(var i = 0; i < i2265.length; i += 1) {
    i2264.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2265[i + 0]) );
  }
  i2260.machines = i2264
  var i2267 = i2261[5]
  var i2266 = []
  for(var i = 0; i < i2267.length; i += 1) {
    i2266.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2267[i + 0]) );
  }
  i2260.entryStateTransitions = i2266
  var i2269 = i2261[6]
  var i2268 = []
  for(var i = 0; i < i2269.length; i += 1) {
    i2268.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2269[i + 0]) );
  }
  i2260.exitStateTransitions = i2268
  var i2271 = i2261[7]
  var i2270 = []
  for(var i = 0; i < i2271.length; i += 1) {
    i2270.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2271[i + 0]) );
  }
  i2260.anyStateTransitions = i2270
  i2260.defaultStateId = i2261[8]
  return i2260
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i2274 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i2275 = data
  i2274.id = i2275[0]
  i2274.name = i2275[1]
  i2274.cycleOffset = i2275[2]
  i2274.cycleOffsetParameter = i2275[3]
  i2274.cycleOffsetParameterActive = !!i2275[4]
  i2274.mirror = !!i2275[5]
  i2274.mirrorParameter = i2275[6]
  i2274.mirrorParameterActive = !!i2275[7]
  i2274.motionId = i2275[8]
  i2274.nameHash = i2275[9]
  i2274.fullPathHash = i2275[10]
  i2274.speed = i2275[11]
  i2274.speedParameter = i2275[12]
  i2274.speedParameterActive = !!i2275[13]
  i2274.tag = i2275[14]
  i2274.tagHash = i2275[15]
  i2274.writeDefaultValues = !!i2275[16]
  var i2277 = i2275[17]
  var i2276 = []
  for(var i = 0; i < i2277.length; i += 2) {
  request.r(i2277[i + 0], i2277[i + 1], 2, i2276, '')
  }
  i2274.behaviours = i2276
  var i2279 = i2275[18]
  var i2278 = []
  for(var i = 0; i < i2279.length; i += 1) {
    i2278.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2279[i + 0]) );
  }
  i2274.transitions = i2278
  return i2274
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i2284 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i2285 = data
  i2284.fullPath = i2285[0]
  i2284.canTransitionToSelf = !!i2285[1]
  i2284.duration = i2285[2]
  i2284.exitTime = i2285[3]
  i2284.hasExitTime = !!i2285[4]
  i2284.hasFixedDuration = !!i2285[5]
  i2284.interruptionSource = i2285[6]
  i2284.offset = i2285[7]
  i2284.orderedInterruption = !!i2285[8]
  i2284.destinationStateId = i2285[9]
  i2284.isExit = !!i2285[10]
  i2284.mute = !!i2285[11]
  i2284.solo = !!i2285[12]
  var i2287 = i2285[13]
  var i2286 = []
  for(var i = 0; i < i2287.length; i += 1) {
    i2286.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2287[i + 0]) );
  }
  i2284.conditions = i2286
  return i2284
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i2292 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i2293 = data
  i2292.destinationStateId = i2293[0]
  i2292.isExit = !!i2293[1]
  i2292.mute = !!i2293[2]
  i2292.solo = !!i2293[3]
  var i2295 = i2293[4]
  var i2294 = []
  for(var i = 0; i < i2295.length; i += 1) {
    i2294.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2295[i + 0]) );
  }
  i2292.conditions = i2294
  return i2292
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i2298 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i2299 = data
  i2298.defaultBool = !!i2299[0]
  i2298.defaultFloat = i2299[1]
  i2298.defaultInt = i2299[2]
  i2298.name = i2299[3]
  i2298.nameHash = i2299[4]
  i2298.type = i2299[5]
  return i2298
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i2300 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i2301 = data
  i2300.name = i2301[0]
  i2300.bytes64 = i2301[1]
  i2300.data = i2301[2]
  return i2300
}

Deserializers["PlayerCardData"] = function (request, data, root) {
  var i2302 = root || request.c( 'PlayerCardData' )
  var i2303 = data
  i2302.nationality = i2303[0]
  request.r(i2303[1], i2303[2], 0, i2302, 'playerSprite')
  request.r(i2303[3], i2303[4], 0, i2302, 'flagSprite')
  return i2302
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i2304 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i2305 = data
  i2304.normalStyle = i2305[0]
  i2304.normalSpacingOffset = i2305[1]
  i2304.boldStyle = i2305[2]
  i2304.boldSpacing = i2305[3]
  i2304.italicStyle = i2305[4]
  i2304.tabSize = i2305[5]
  request.r(i2305[6], i2305[7], 0, i2304, 'atlas')
  i2304.m_SourceFontFileGUID = i2305[8]
  i2304.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i2305[9], i2304.m_CreationSettings)
  request.r(i2305[10], i2305[11], 0, i2304, 'm_SourceFontFile')
  i2304.m_SourceFontFilePath = i2305[12]
  i2304.m_AtlasPopulationMode = i2305[13]
  i2304.InternalDynamicOS = !!i2305[14]
  var i2307 = i2305[15]
  var i2306 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i2307.length; i += 1) {
    i2306.add(request.d('UnityEngine.TextCore.Glyph', i2307[i + 0]));
  }
  i2304.m_GlyphTable = i2306
  var i2309 = i2305[16]
  var i2308 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i2309.length; i += 1) {
    i2308.add(request.d('TMPro.TMP_Character', i2309[i + 0]));
  }
  i2304.m_CharacterTable = i2308
  var i2311 = i2305[17]
  var i2310 = []
  for(var i = 0; i < i2311.length; i += 2) {
  request.r(i2311[i + 0], i2311[i + 1], 2, i2310, '')
  }
  i2304.m_AtlasTextures = i2310
  i2304.m_AtlasTextureIndex = i2305[18]
  i2304.m_IsMultiAtlasTexturesEnabled = !!i2305[19]
  i2304.m_GetFontFeatures = !!i2305[20]
  i2304.m_ClearDynamicDataOnBuild = !!i2305[21]
  i2304.m_AtlasWidth = i2305[22]
  i2304.m_AtlasHeight = i2305[23]
  i2304.m_AtlasPadding = i2305[24]
  i2304.m_AtlasRenderMode = i2305[25]
  var i2313 = i2305[26]
  var i2312 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2313.length; i += 1) {
    i2312.add(request.d('UnityEngine.TextCore.GlyphRect', i2313[i + 0]));
  }
  i2304.m_UsedGlyphRects = i2312
  var i2315 = i2305[27]
  var i2314 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2315.length; i += 1) {
    i2314.add(request.d('UnityEngine.TextCore.GlyphRect', i2315[i + 0]));
  }
  i2304.m_FreeGlyphRects = i2314
  i2304.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i2305[28], i2304.m_FontFeatureTable)
  i2304.m_ShouldReimportFontFeatures = !!i2305[29]
  var i2317 = i2305[30]
  var i2316 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2317.length; i += 2) {
  request.r(i2317[i + 0], i2317[i + 1], 1, i2316, '')
  }
  i2304.m_FallbackFontAssetTable = i2316
  var i2319 = i2305[31]
  var i2318 = []
  for(var i = 0; i < i2319.length; i += 1) {
    i2318.push( request.d('TMPro.TMP_FontWeightPair', i2319[i + 0]) );
  }
  i2304.m_FontWeightTable = i2318
  var i2321 = i2305[32]
  var i2320 = []
  for(var i = 0; i < i2321.length; i += 1) {
    i2320.push( request.d('TMPro.TMP_FontWeightPair', i2321[i + 0]) );
  }
  i2304.fontWeights = i2320
  i2304.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i2305[33], i2304.m_fontInfo)
  var i2323 = i2305[34]
  var i2322 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i2323.length; i += 1) {
    i2322.add(request.d('TMPro.TMP_Glyph', i2323[i + 0]));
  }
  i2304.m_glyphInfoList = i2322
  i2304.m_KerningTable = request.d('TMPro.KerningTable', i2305[35], i2304.m_KerningTable)
  var i2325 = i2305[36]
  var i2324 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2325.length; i += 2) {
  request.r(i2325[i + 0], i2325[i + 1], 1, i2324, '')
  }
  i2304.fallbackFontAssets = i2324
  i2304.m_Version = i2305[37]
  i2304.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2305[38], i2304.m_FaceInfo)
  request.r(i2305[39], i2305[40], 0, i2304, 'm_Material')
  return i2304
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i2326 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i2327 = data
  i2326.sourceFontFileName = i2327[0]
  i2326.sourceFontFileGUID = i2327[1]
  i2326.faceIndex = i2327[2]
  i2326.pointSizeSamplingMode = i2327[3]
  i2326.pointSize = i2327[4]
  i2326.padding = i2327[5]
  i2326.paddingMode = i2327[6]
  i2326.packingMode = i2327[7]
  i2326.atlasWidth = i2327[8]
  i2326.atlasHeight = i2327[9]
  i2326.characterSetSelectionMode = i2327[10]
  i2326.characterSequence = i2327[11]
  i2326.referencedFontAssetGUID = i2327[12]
  i2326.referencedTextAssetGUID = i2327[13]
  i2326.fontStyle = i2327[14]
  i2326.fontStyleModifier = i2327[15]
  i2326.renderMode = i2327[16]
  i2326.includeFontFeatures = !!i2327[17]
  return i2326
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i2330 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i2331 = data
  i2330.m_Index = i2331[0]
  i2330.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2331[1], i2330.m_Metrics)
  i2330.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2331[2], i2330.m_GlyphRect)
  i2330.m_Scale = i2331[3]
  i2330.m_AtlasIndex = i2331[4]
  i2330.m_ClassDefinitionType = i2331[5]
  return i2330
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i2332 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i2333 = data
  i2332.m_Width = i2333[0]
  i2332.m_Height = i2333[1]
  i2332.m_HorizontalBearingX = i2333[2]
  i2332.m_HorizontalBearingY = i2333[3]
  i2332.m_HorizontalAdvance = i2333[4]
  return i2332
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i2334 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i2335 = data
  i2334.m_X = i2335[0]
  i2334.m_Y = i2335[1]
  i2334.m_Width = i2335[2]
  i2334.m_Height = i2335[3]
  return i2334
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i2338 = root || request.c( 'TMPro.TMP_Character' )
  var i2339 = data
  i2338.m_ElementType = i2339[0]
  i2338.m_Unicode = i2339[1]
  i2338.m_GlyphIndex = i2339[2]
  i2338.m_Scale = i2339[3]
  return i2338
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i2344 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i2345 = data
  var i2347 = i2345[0]
  var i2346 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i2347.length; i += 1) {
    i2346.add(request.d('TMPro.MultipleSubstitutionRecord', i2347[i + 0]));
  }
  i2344.m_MultipleSubstitutionRecords = i2346
  var i2349 = i2345[1]
  var i2348 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i2349.length; i += 1) {
    i2348.add(request.d('TMPro.LigatureSubstitutionRecord', i2349[i + 0]));
  }
  i2344.m_LigatureSubstitutionRecords = i2348
  var i2351 = i2345[2]
  var i2350 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i2351.length; i += 1) {
    i2350.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i2351[i + 0]));
  }
  i2344.m_GlyphPairAdjustmentRecords = i2350
  var i2353 = i2345[3]
  var i2352 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i2353.length; i += 1) {
    i2352.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i2353[i + 0]));
  }
  i2344.m_MarkToBaseAdjustmentRecords = i2352
  var i2355 = i2345[4]
  var i2354 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i2355.length; i += 1) {
    i2354.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i2355[i + 0]));
  }
  i2344.m_MarkToMarkAdjustmentRecords = i2354
  return i2344
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i2358 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i2359 = data
  i2358.m_TargetGlyphID = i2359[0]
  i2358.m_SubstituteGlyphIDs = i2359[1]
  return i2358
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i2362 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i2363 = data
  i2362.m_ComponentGlyphIDs = i2363[0]
  i2362.m_LigatureGlyphID = i2363[1]
  return i2362
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i2366 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i2367 = data
  i2366.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i2367[0], i2366.m_FirstAdjustmentRecord)
  i2366.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i2367[1], i2366.m_SecondAdjustmentRecord)
  i2366.m_FeatureLookupFlags = i2367[2]
  return i2366
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i2368 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i2369 = data
  i2368.m_GlyphIndex = i2369[0]
  i2368.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i2369[1], i2368.m_GlyphValueRecord)
  return i2368
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i2370 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i2371 = data
  i2370.m_XPlacement = i2371[0]
  i2370.m_YPlacement = i2371[1]
  i2370.m_XAdvance = i2371[2]
  i2370.m_YAdvance = i2371[3]
  return i2370
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i2374 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i2375 = data
  i2374.m_BaseGlyphID = i2375[0]
  i2374.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i2375[1], i2374.m_BaseGlyphAnchorPoint)
  i2374.m_MarkGlyphID = i2375[2]
  i2374.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i2375[3], i2374.m_MarkPositionAdjustment)
  return i2374
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i2378 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i2379 = data
  i2378.m_BaseMarkGlyphID = i2379[0]
  i2378.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i2379[1], i2378.m_BaseMarkGlyphAnchorPoint)
  i2378.m_CombiningMarkGlyphID = i2379[2]
  i2378.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i2379[3], i2378.m_CombiningMarkPositionAdjustment)
  return i2378
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i2384 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i2385 = data
  request.r(i2385[0], i2385[1], 0, i2384, 'regularTypeface')
  request.r(i2385[2], i2385[3], 0, i2384, 'italicTypeface')
  return i2384
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i2386 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i2387 = data
  i2386.Name = i2387[0]
  i2386.PointSize = i2387[1]
  i2386.Scale = i2387[2]
  i2386.CharacterCount = i2387[3]
  i2386.LineHeight = i2387[4]
  i2386.Baseline = i2387[5]
  i2386.Ascender = i2387[6]
  i2386.CapHeight = i2387[7]
  i2386.Descender = i2387[8]
  i2386.CenterLine = i2387[9]
  i2386.SuperscriptOffset = i2387[10]
  i2386.SubscriptOffset = i2387[11]
  i2386.SubSize = i2387[12]
  i2386.Underline = i2387[13]
  i2386.UnderlineThickness = i2387[14]
  i2386.strikethrough = i2387[15]
  i2386.strikethroughThickness = i2387[16]
  i2386.TabWidth = i2387[17]
  i2386.Padding = i2387[18]
  i2386.AtlasWidth = i2387[19]
  i2386.AtlasHeight = i2387[20]
  return i2386
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i2390 = root || request.c( 'TMPro.TMP_Glyph' )
  var i2391 = data
  i2390.id = i2391[0]
  i2390.x = i2391[1]
  i2390.y = i2391[2]
  i2390.width = i2391[3]
  i2390.height = i2391[4]
  i2390.xOffset = i2391[5]
  i2390.yOffset = i2391[6]
  i2390.xAdvance = i2391[7]
  i2390.scale = i2391[8]
  return i2390
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i2392 = root || request.c( 'TMPro.KerningTable' )
  var i2393 = data
  var i2395 = i2393[0]
  var i2394 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i2395.length; i += 1) {
    i2394.add(request.d('TMPro.KerningPair', i2395[i + 0]));
  }
  i2392.kerningPairs = i2394
  return i2392
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i2398 = root || request.c( 'TMPro.KerningPair' )
  var i2399 = data
  i2398.xOffset = i2399[0]
  i2398.m_FirstGlyph = i2399[1]
  i2398.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2399[2], i2398.m_FirstGlyphAdjustments)
  i2398.m_SecondGlyph = i2399[3]
  i2398.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2399[4], i2398.m_SecondGlyphAdjustments)
  i2398.m_IgnoreSpacingAdjustments = !!i2399[5]
  return i2398
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i2400 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i2401 = data
  i2400.m_FaceIndex = i2401[0]
  i2400.m_FamilyName = i2401[1]
  i2400.m_StyleName = i2401[2]
  i2400.m_PointSize = i2401[3]
  i2400.m_Scale = i2401[4]
  i2400.m_UnitsPerEM = i2401[5]
  i2400.m_LineHeight = i2401[6]
  i2400.m_AscentLine = i2401[7]
  i2400.m_CapLine = i2401[8]
  i2400.m_MeanLine = i2401[9]
  i2400.m_Baseline = i2401[10]
  i2400.m_DescentLine = i2401[11]
  i2400.m_SuperscriptOffset = i2401[12]
  i2400.m_SuperscriptSize = i2401[13]
  i2400.m_SubscriptOffset = i2401[14]
  i2400.m_SubscriptSize = i2401[15]
  i2400.m_UnderlineOffset = i2401[16]
  i2400.m_UnderlineThickness = i2401[17]
  i2400.m_StrikethroughOffset = i2401[18]
  i2400.m_StrikethroughThickness = i2401[19]
  i2400.m_TabWidth = i2401[20]
  return i2400
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i2402 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i2403 = data
  i2402.useSafeMode = !!i2403[0]
  i2402.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i2403[1], i2402.safeModeOptions)
  i2402.timeScale = i2403[2]
  i2402.unscaledTimeScale = i2403[3]
  i2402.useSmoothDeltaTime = !!i2403[4]
  i2402.maxSmoothUnscaledTime = i2403[5]
  i2402.rewindCallbackMode = i2403[6]
  i2402.showUnityEditorReport = !!i2403[7]
  i2402.logBehaviour = i2403[8]
  i2402.drawGizmos = !!i2403[9]
  i2402.defaultRecyclable = !!i2403[10]
  i2402.defaultAutoPlay = i2403[11]
  i2402.defaultUpdateType = i2403[12]
  i2402.defaultTimeScaleIndependent = !!i2403[13]
  i2402.defaultEaseType = i2403[14]
  i2402.defaultEaseOvershootOrAmplitude = i2403[15]
  i2402.defaultEasePeriod = i2403[16]
  i2402.defaultAutoKill = !!i2403[17]
  i2402.defaultLoopType = i2403[18]
  i2402.debugMode = !!i2403[19]
  i2402.debugStoreTargetId = !!i2403[20]
  i2402.showPreviewPanel = !!i2403[21]
  i2402.storeSettingsLocation = i2403[22]
  i2402.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i2403[23], i2402.modules)
  i2402.createASMDEF = !!i2403[24]
  i2402.showPlayingTweens = !!i2403[25]
  i2402.showPausedTweens = !!i2403[26]
  return i2402
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i2404 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i2405 = data
  i2404.logBehaviour = i2405[0]
  i2404.nestedTweenFailureBehaviour = i2405[1]
  return i2404
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i2406 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i2407 = data
  i2406.showPanel = !!i2407[0]
  i2406.audioEnabled = !!i2407[1]
  i2406.physicsEnabled = !!i2407[2]
  i2406.physics2DEnabled = !!i2407[3]
  i2406.spriteEnabled = !!i2407[4]
  i2406.uiEnabled = !!i2407[5]
  i2406.uiToolkitEnabled = !!i2407[6]
  i2406.textMeshProEnabled = !!i2407[7]
  i2406.tk2DEnabled = !!i2407[8]
  i2406.deAudioEnabled = !!i2407[9]
  i2406.deUnityExtendedEnabled = !!i2407[10]
  i2406.epoOutlineEnabled = !!i2407[11]
  return i2406
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i2408 = root || request.c( 'TMPro.TMP_Settings' )
  var i2409 = data
  i2408.assetVersion = i2409[0]
  i2408.m_TextWrappingMode = i2409[1]
  i2408.m_enableKerning = !!i2409[2]
  var i2411 = i2409[3]
  var i2410 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i2411.length; i += 1) {
    i2410.add(i2411[i + 0]);
  }
  i2408.m_ActiveFontFeatures = i2410
  i2408.m_enableExtraPadding = !!i2409[4]
  i2408.m_enableTintAllSprites = !!i2409[5]
  i2408.m_enableParseEscapeCharacters = !!i2409[6]
  i2408.m_EnableRaycastTarget = !!i2409[7]
  i2408.m_GetFontFeaturesAtRuntime = !!i2409[8]
  i2408.m_missingGlyphCharacter = i2409[9]
  i2408.m_ClearDynamicDataOnBuild = !!i2409[10]
  i2408.m_warningsDisabled = !!i2409[11]
  request.r(i2409[12], i2409[13], 0, i2408, 'm_defaultFontAsset')
  i2408.m_defaultFontAssetPath = i2409[14]
  i2408.m_defaultFontSize = i2409[15]
  i2408.m_defaultAutoSizeMinRatio = i2409[16]
  i2408.m_defaultAutoSizeMaxRatio = i2409[17]
  i2408.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i2409[18], i2409[19] )
  i2408.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i2409[20], i2409[21] )
  i2408.m_autoSizeTextContainer = !!i2409[22]
  i2408.m_IsTextObjectScaleStatic = !!i2409[23]
  var i2413 = i2409[24]
  var i2412 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2413.length; i += 2) {
  request.r(i2413[i + 0], i2413[i + 1], 1, i2412, '')
  }
  i2408.m_fallbackFontAssets = i2412
  i2408.m_matchMaterialPreset = !!i2409[25]
  i2408.m_HideSubTextObjects = !!i2409[26]
  request.r(i2409[27], i2409[28], 0, i2408, 'm_defaultSpriteAsset')
  i2408.m_defaultSpriteAssetPath = i2409[29]
  i2408.m_enableEmojiSupport = !!i2409[30]
  i2408.m_MissingCharacterSpriteUnicode = i2409[31]
  var i2415 = i2409[32]
  var i2414 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i2415.length; i += 2) {
  request.r(i2415[i + 0], i2415[i + 1], 1, i2414, '')
  }
  i2408.m_EmojiFallbackTextAssets = i2414
  i2408.m_defaultColorGradientPresetsPath = i2409[33]
  request.r(i2409[34], i2409[35], 0, i2408, 'm_defaultStyleSheet')
  i2408.m_StyleSheetsResourcePath = i2409[36]
  request.r(i2409[37], i2409[38], 0, i2408, 'm_leadingCharacters')
  request.r(i2409[39], i2409[40], 0, i2408, 'm_followingCharacters')
  i2408.m_UseModernHangulLineBreakingRules = !!i2409[41]
  return i2408
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i2418 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i2419 = data
  request.r(i2419[0], i2419[1], 0, i2418, 'spriteSheet')
  var i2421 = i2419[2]
  var i2420 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i2421.length; i += 1) {
    i2420.add(request.d('TMPro.TMP_Sprite', i2421[i + 0]));
  }
  i2418.spriteInfoList = i2420
  var i2423 = i2419[3]
  var i2422 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i2423.length; i += 2) {
  request.r(i2423[i + 0], i2423[i + 1], 1, i2422, '')
  }
  i2418.fallbackSpriteAssets = i2422
  var i2425 = i2419[4]
  var i2424 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i2425.length; i += 1) {
    i2424.add(request.d('TMPro.TMP_SpriteCharacter', i2425[i + 0]));
  }
  i2418.m_SpriteCharacterTable = i2424
  var i2427 = i2419[5]
  var i2426 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i2427.length; i += 1) {
    i2426.add(request.d('TMPro.TMP_SpriteGlyph', i2427[i + 0]));
  }
  i2418.m_GlyphTable = i2426
  i2418.m_Version = i2419[6]
  i2418.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2419[7], i2418.m_FaceInfo)
  request.r(i2419[8], i2419[9], 0, i2418, 'm_Material')
  return i2418
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i2430 = root || request.c( 'TMPro.TMP_Sprite' )
  var i2431 = data
  i2430.name = i2431[0]
  i2430.hashCode = i2431[1]
  i2430.unicode = i2431[2]
  i2430.pivot = new pc.Vec2( i2431[3], i2431[4] )
  request.r(i2431[5], i2431[6], 0, i2430, 'sprite')
  i2430.id = i2431[7]
  i2430.x = i2431[8]
  i2430.y = i2431[9]
  i2430.width = i2431[10]
  i2430.height = i2431[11]
  i2430.xOffset = i2431[12]
  i2430.yOffset = i2431[13]
  i2430.xAdvance = i2431[14]
  i2430.scale = i2431[15]
  return i2430
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i2436 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i2437 = data
  i2436.m_Name = i2437[0]
  i2436.m_ElementType = i2437[1]
  i2436.m_Unicode = i2437[2]
  i2436.m_GlyphIndex = i2437[3]
  i2436.m_Scale = i2437[4]
  return i2436
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i2440 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i2441 = data
  request.r(i2441[0], i2441[1], 0, i2440, 'sprite')
  i2440.m_Index = i2441[2]
  i2440.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2441[3], i2440.m_Metrics)
  i2440.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2441[4], i2440.m_GlyphRect)
  i2440.m_Scale = i2441[5]
  i2440.m_AtlasIndex = i2441[6]
  i2440.m_ClassDefinitionType = i2441[7]
  return i2440
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i2442 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i2443 = data
  var i2445 = i2443[0]
  var i2444 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i2445.length; i += 1) {
    i2444.add(request.d('TMPro.TMP_Style', i2445[i + 0]));
  }
  i2442.m_StyleList = i2444
  return i2442
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i2448 = root || request.c( 'TMPro.TMP_Style' )
  var i2449 = data
  i2448.m_Name = i2449[0]
  i2448.m_HashCode = i2449[1]
  i2448.m_OpeningDefinition = i2449[2]
  i2448.m_ClosingDefinition = i2449[3]
  i2448.m_OpeningTagArray = i2449[4]
  i2448.m_ClosingTagArray = i2449[5]
  return i2448
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i2450 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i2451 = data
  var i2453 = i2451[0]
  var i2452 = []
  for(var i = 0; i < i2453.length; i += 1) {
    i2452.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i2453[i + 0]) );
  }
  i2450.files = i2452
  i2450.componentToPrefabIds = i2451[1]
  return i2450
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i2456 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i2457 = data
  i2456.path = i2457[0]
  request.r(i2457[1], i2457[2], 0, i2456, 'unityObject')
  return i2456
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i2458 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i2459 = data
  var i2461 = i2459[0]
  var i2460 = []
  for(var i = 0; i < i2461.length; i += 1) {
    i2460.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i2461[i + 0]) );
  }
  i2458.scriptsExecutionOrder = i2460
  var i2463 = i2459[1]
  var i2462 = []
  for(var i = 0; i < i2463.length; i += 1) {
    i2462.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i2463[i + 0]) );
  }
  i2458.sortingLayers = i2462
  var i2465 = i2459[2]
  var i2464 = []
  for(var i = 0; i < i2465.length; i += 1) {
    i2464.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i2465[i + 0]) );
  }
  i2458.cullingLayers = i2464
  i2458.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i2459[3], i2458.timeSettings)
  i2458.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i2459[4], i2458.physicsSettings)
  i2458.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i2459[5], i2458.physics2DSettings)
  i2458.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2459[6], i2458.qualitySettings)
  i2458.enableRealtimeShadows = !!i2459[7]
  i2458.enableAutoInstancing = !!i2459[8]
  i2458.enableStaticBatching = !!i2459[9]
  i2458.enableDynamicBatching = !!i2459[10]
  i2458.lightmapEncodingQuality = i2459[11]
  i2458.desiredColorSpace = i2459[12]
  var i2467 = i2459[13]
  var i2466 = []
  for(var i = 0; i < i2467.length; i += 1) {
    i2466.push( i2467[i + 0] );
  }
  i2458.allTags = i2466
  return i2458
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i2470 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i2471 = data
  i2470.name = i2471[0]
  i2470.value = i2471[1]
  return i2470
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i2474 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i2475 = data
  i2474.id = i2475[0]
  i2474.name = i2475[1]
  i2474.value = i2475[2]
  return i2474
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i2478 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i2479 = data
  i2478.id = i2479[0]
  i2478.name = i2479[1]
  return i2478
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i2480 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i2481 = data
  i2480.fixedDeltaTime = i2481[0]
  i2480.maximumDeltaTime = i2481[1]
  i2480.timeScale = i2481[2]
  i2480.maximumParticleTimestep = i2481[3]
  return i2480
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i2482 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i2483 = data
  i2482.gravity = new pc.Vec3( i2483[0], i2483[1], i2483[2] )
  i2482.defaultSolverIterations = i2483[3]
  i2482.bounceThreshold = i2483[4]
  i2482.autoSyncTransforms = !!i2483[5]
  i2482.autoSimulation = !!i2483[6]
  var i2485 = i2483[7]
  var i2484 = []
  for(var i = 0; i < i2485.length; i += 1) {
    i2484.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i2485[i + 0]) );
  }
  i2482.collisionMatrix = i2484
  return i2482
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i2488 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i2489 = data
  i2488.enabled = !!i2489[0]
  i2488.layerId = i2489[1]
  i2488.otherLayerId = i2489[2]
  return i2488
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i2490 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i2491 = data
  request.r(i2491[0], i2491[1], 0, i2490, 'material')
  i2490.gravity = new pc.Vec2( i2491[2], i2491[3] )
  i2490.positionIterations = i2491[4]
  i2490.velocityIterations = i2491[5]
  i2490.velocityThreshold = i2491[6]
  i2490.maxLinearCorrection = i2491[7]
  i2490.maxAngularCorrection = i2491[8]
  i2490.maxTranslationSpeed = i2491[9]
  i2490.maxRotationSpeed = i2491[10]
  i2490.baumgarteScale = i2491[11]
  i2490.baumgarteTOIScale = i2491[12]
  i2490.timeToSleep = i2491[13]
  i2490.linearSleepTolerance = i2491[14]
  i2490.angularSleepTolerance = i2491[15]
  i2490.defaultContactOffset = i2491[16]
  i2490.autoSimulation = !!i2491[17]
  i2490.queriesHitTriggers = !!i2491[18]
  i2490.queriesStartInColliders = !!i2491[19]
  i2490.callbacksOnDisable = !!i2491[20]
  i2490.reuseCollisionCallbacks = !!i2491[21]
  i2490.autoSyncTransforms = !!i2491[22]
  var i2493 = i2491[23]
  var i2492 = []
  for(var i = 0; i < i2493.length; i += 1) {
    i2492.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i2493[i + 0]) );
  }
  i2490.collisionMatrix = i2492
  return i2490
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i2496 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i2497 = data
  i2496.enabled = !!i2497[0]
  i2496.layerId = i2497[1]
  i2496.otherLayerId = i2497[2]
  return i2496
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i2498 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i2499 = data
  var i2501 = i2499[0]
  var i2500 = []
  for(var i = 0; i < i2501.length; i += 1) {
    i2500.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2501[i + 0]) );
  }
  i2498.qualityLevels = i2500
  var i2503 = i2499[1]
  var i2502 = []
  for(var i = 0; i < i2503.length; i += 1) {
    i2502.push( i2503[i + 0] );
  }
  i2498.names = i2502
  i2498.shadows = i2499[2]
  i2498.anisotropicFiltering = i2499[3]
  i2498.antiAliasing = i2499[4]
  i2498.lodBias = i2499[5]
  i2498.shadowCascades = i2499[6]
  i2498.shadowDistance = i2499[7]
  i2498.shadowmaskMode = i2499[8]
  i2498.shadowProjection = i2499[9]
  i2498.shadowResolution = i2499[10]
  i2498.softParticles = !!i2499[11]
  i2498.softVegetation = !!i2499[12]
  i2498.activeColorSpace = i2499[13]
  i2498.desiredColorSpace = i2499[14]
  i2498.masterTextureLimit = i2499[15]
  i2498.maxQueuedFrames = i2499[16]
  i2498.particleRaycastBudget = i2499[17]
  i2498.pixelLightCount = i2499[18]
  i2498.realtimeReflectionProbes = !!i2499[19]
  i2498.shadowCascade2Split = i2499[20]
  i2498.shadowCascade4Split = new pc.Vec3( i2499[21], i2499[22], i2499[23] )
  i2498.streamingMipmapsActive = !!i2499[24]
  i2498.vSyncCount = i2499[25]
  i2498.asyncUploadBufferSize = i2499[26]
  i2498.asyncUploadTimeSlice = i2499[27]
  i2498.billboardsFaceCameraPosition = !!i2499[28]
  i2498.shadowNearPlaneOffset = i2499[29]
  i2498.streamingMipmapsMemoryBudget = i2499[30]
  i2498.maximumLODLevel = i2499[31]
  i2498.streamingMipmapsAddAllCameras = !!i2499[32]
  i2498.streamingMipmapsMaxLevelReduction = i2499[33]
  i2498.streamingMipmapsRenderersPerFrame = i2499[34]
  i2498.resolutionScalingFixedDPIFactor = i2499[35]
  i2498.streamingMipmapsMaxFileIORequests = i2499[36]
  i2498.currentQualityLevel = i2499[37]
  return i2498
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i2508 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i2509 = data
  i2508.weight = i2509[0]
  i2508.vertices = i2509[1]
  i2508.normals = i2509[2]
  i2508.tangents = i2509[3]
  return i2508
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i2512 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i2513 = data
  i2512.mode = i2513[0]
  i2512.parameter = i2513[1]
  i2512.threshold = i2513[2]
  return i2512
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i2514 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i2515 = data
  i2514.m_XCoordinate = i2515[0]
  i2514.m_YCoordinate = i2515[1]
  return i2514
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i2516 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i2517 = data
  i2516.m_XPositionAdjustment = i2517[0]
  i2516.m_YPositionAdjustment = i2517[1]
  return i2516
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i2518 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i2519 = data
  i2518.xPlacement = i2519[0]
  i2518.yPlacement = i2519[1]
  i2518.xAdvance = i2519[2]
  i2518.yAdvance = i2519[3]
  return i2518
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

Deserializers.buildID = "cc4eed0d-e12d-4b07-bc90-31670a7dbdfe";

Deserializers.runtimeInitializeOnLoadInfos = [[["Unity","Services","Core","Internal","UnityServicesInitializer","EnableServicesInitializationAsync"],["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["DG","Tweening","DOTween","RuntimeOnLoad"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["Unity","Services","Core","Registration","CorePackageInitializer","InitializeOnLoad"],["Unity","Services","Core","Internal","TaskAsyncOperation","SetScheduler"],["Unity","Services","Core","Environments","Client","Scheduler","EngineStateHelper","Init"],["Unity","Services","Core","Environments","Client","Scheduler","ThreadHelper","Init"],["Ua2CoreInitializeCallback","Register"],["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["Unity","AI","Navigation","NavMeshLink","ClearTrackedList"],["Unity","AI","Navigation","NavMeshSurface","ClearNavMeshSurfaces"],["Unity","AI","Navigation","NavMeshModifierVolume","ClearNavMeshModifiers"],["Unity","AI","Navigation","NavMeshModifier","ClearNavMeshModifiers"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["Unity","Services","Core","Internal","UnityServicesInitializer","CreateStaticInstance"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[["Unity","Services","Core","Environments","Client","Http","JsonHelpers","RegisterTypesForAOT"]],[["Unity","Services","Core","UnityThreadUtils","CaptureUnityThreadInfo"],["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

