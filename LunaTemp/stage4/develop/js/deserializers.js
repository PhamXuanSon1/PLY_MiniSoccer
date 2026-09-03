var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i1908 = root || request.c( 'UnityEngine.JointSpring' )
  var i1909 = data
  i1908.spring = i1909[0]
  i1908.damper = i1909[1]
  i1908.targetPosition = i1909[2]
  return i1908
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i1910 = root || request.c( 'UnityEngine.JointMotor' )
  var i1911 = data
  i1910.m_TargetVelocity = i1911[0]
  i1910.m_Force = i1911[1]
  i1910.m_FreeSpin = i1911[2]
  return i1910
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i1912 = root || request.c( 'UnityEngine.JointLimits' )
  var i1913 = data
  i1912.m_Min = i1913[0]
  i1912.m_Max = i1913[1]
  i1912.m_Bounciness = i1913[2]
  i1912.m_BounceMinVelocity = i1913[3]
  i1912.m_ContactDistance = i1913[4]
  i1912.minBounce = i1913[5]
  i1912.maxBounce = i1913[6]
  return i1912
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i1914 = root || request.c( 'UnityEngine.JointDrive' )
  var i1915 = data
  i1914.m_PositionSpring = i1915[0]
  i1914.m_PositionDamper = i1915[1]
  i1914.m_MaximumForce = i1915[2]
  i1914.m_UseAcceleration = i1915[3]
  return i1914
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i1916 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i1917 = data
  i1916.m_Spring = i1917[0]
  i1916.m_Damper = i1917[1]
  return i1916
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i1918 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i1919 = data
  i1918.m_Limit = i1919[0]
  i1918.m_Bounciness = i1919[1]
  i1918.m_ContactDistance = i1919[2]
  return i1918
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i1920 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i1921 = data
  i1920.m_ExtremumSlip = i1921[0]
  i1920.m_ExtremumValue = i1921[1]
  i1920.m_AsymptoteSlip = i1921[2]
  i1920.m_AsymptoteValue = i1921[3]
  i1920.m_Stiffness = i1921[4]
  return i1920
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i1922 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i1923 = data
  i1922.m_LowerAngle = i1923[0]
  i1922.m_UpperAngle = i1923[1]
  return i1922
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i1924 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i1925 = data
  i1924.m_MotorSpeed = i1925[0]
  i1924.m_MaximumMotorTorque = i1925[1]
  return i1924
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i1926 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i1927 = data
  i1926.m_DampingRatio = i1927[0]
  i1926.m_Frequency = i1927[1]
  i1926.m_Angle = i1927[2]
  return i1926
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i1928 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i1929 = data
  i1928.m_LowerTranslation = i1929[0]
  i1928.m_UpperTranslation = i1929[1]
  return i1928
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i1930 = root || new pc.UnityMaterial()
  var i1931 = data
  i1930.name = i1931[0]
  request.r(i1931[1], i1931[2], 0, i1930, 'shader')
  i1930.renderQueue = i1931[3]
  i1930.enableInstancing = !!i1931[4]
  var i1933 = i1931[5]
  var i1932 = []
  for(var i = 0; i < i1933.length; i += 1) {
    i1932.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i1933[i + 0]) );
  }
  i1930.floatParameters = i1932
  var i1935 = i1931[6]
  var i1934 = []
  for(var i = 0; i < i1935.length; i += 1) {
    i1934.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i1935[i + 0]) );
  }
  i1930.colorParameters = i1934
  var i1937 = i1931[7]
  var i1936 = []
  for(var i = 0; i < i1937.length; i += 1) {
    i1936.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i1937[i + 0]) );
  }
  i1930.vectorParameters = i1936
  var i1939 = i1931[8]
  var i1938 = []
  for(var i = 0; i < i1939.length; i += 1) {
    i1938.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i1939[i + 0]) );
  }
  i1930.textureParameters = i1938
  var i1941 = i1931[9]
  var i1940 = []
  for(var i = 0; i < i1941.length; i += 1) {
    i1940.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i1941[i + 0]) );
  }
  i1930.materialFlags = i1940
  return i1930
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i1944 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i1945 = data
  i1944.name = i1945[0]
  i1944.value = i1945[1]
  return i1944
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i1948 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i1949 = data
  i1948.name = i1949[0]
  i1948.value = new pc.Color(i1949[1], i1949[2], i1949[3], i1949[4])
  return i1948
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i1952 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i1953 = data
  i1952.name = i1953[0]
  i1952.value = new pc.Vec4( i1953[1], i1953[2], i1953[3], i1953[4] )
  return i1952
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i1956 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i1957 = data
  i1956.name = i1957[0]
  request.r(i1957[1], i1957[2], 0, i1956, 'value')
  return i1956
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i1960 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i1961 = data
  i1960.name = i1961[0]
  i1960.enabled = !!i1961[1]
  return i1960
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i1962 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i1963 = data
  i1962.name = i1963[0]
  i1962.width = i1963[1]
  i1962.height = i1963[2]
  i1962.mipmapCount = i1963[3]
  i1962.anisoLevel = i1963[4]
  i1962.filterMode = i1963[5]
  i1962.hdr = !!i1963[6]
  i1962.format = i1963[7]
  i1962.wrapMode = i1963[8]
  i1962.alphaIsTransparency = !!i1963[9]
  i1962.alphaSource = i1963[10]
  i1962.graphicsFormat = i1963[11]
  i1962.sRGBTexture = !!i1963[12]
  i1962.desiredColorSpace = i1963[13]
  i1962.wrapU = i1963[14]
  i1962.wrapV = i1963[15]
  return i1962
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i1964 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i1965 = data
  i1964.name = i1965[0]
  i1964.halfPrecision = !!i1965[1]
  i1964.useSimplification = !!i1965[2]
  i1964.useUInt32IndexFormat = !!i1965[3]
  i1964.vertexCount = i1965[4]
  i1964.aabb = i1965[5]
  var i1967 = i1965[6]
  var i1966 = []
  for(var i = 0; i < i1967.length; i += 1) {
    i1966.push( !!i1967[i + 0] );
  }
  i1964.streams = i1966
  i1964.vertices = i1965[7]
  var i1969 = i1965[8]
  var i1968 = []
  for(var i = 0; i < i1969.length; i += 1) {
    i1968.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i1969[i + 0]) );
  }
  i1964.subMeshes = i1968
  var i1971 = i1965[9]
  var i1970 = []
  for(var i = 0; i < i1971.length; i += 16) {
    i1970.push( new pc.Mat4().setData(i1971[i + 0], i1971[i + 1], i1971[i + 2], i1971[i + 3],  i1971[i + 4], i1971[i + 5], i1971[i + 6], i1971[i + 7],  i1971[i + 8], i1971[i + 9], i1971[i + 10], i1971[i + 11],  i1971[i + 12], i1971[i + 13], i1971[i + 14], i1971[i + 15]) );
  }
  i1964.bindposes = i1970
  var i1973 = i1965[10]
  var i1972 = []
  for(var i = 0; i < i1973.length; i += 1) {
    i1972.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i1973[i + 0]) );
  }
  i1964.blendShapes = i1972
  return i1964
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i1978 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i1979 = data
  i1978.triangles = i1979[0]
  return i1978
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i1984 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i1985 = data
  i1984.name = i1985[0]
  var i1987 = i1985[1]
  var i1986 = []
  for(var i = 0; i < i1987.length; i += 1) {
    i1986.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i1987[i + 0]) );
  }
  i1984.frames = i1986
  return i1984
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i1988 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i1989 = data
  i1988.name = i1989[0]
  i1988.index = i1989[1]
  i1988.startup = !!i1989[2]
  return i1988
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1990 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1991 = data
  i1990.aspect = i1991[0]
  i1990.orthographic = !!i1991[1]
  i1990.orthographicSize = i1991[2]
  i1990.backgroundColor = new pc.Color(i1991[3], i1991[4], i1991[5], i1991[6])
  i1990.nearClipPlane = i1991[7]
  i1990.farClipPlane = i1991[8]
  i1990.fieldOfView = i1991[9]
  i1990.depth = i1991[10]
  i1990.clearFlags = i1991[11]
  i1990.cullingMask = i1991[12]
  i1990.rect = i1991[13]
  request.r(i1991[14], i1991[15], 0, i1990, 'targetTexture')
  i1990.usePhysicalProperties = !!i1991[16]
  i1990.focalLength = i1991[17]
  i1990.sensorSize = new pc.Vec2( i1991[18], i1991[19] )
  i1990.lensShift = new pc.Vec2( i1991[20], i1991[21] )
  i1990.gateFit = i1991[22]
  i1990.commandBufferCount = i1991[23]
  i1990.cameraType = i1991[24]
  i1990.enabled = !!i1991[25]
  return i1990
}

Deserializers["CameraFollow2D"] = function (request, data, root) {
  var i1992 = root || request.c( 'CameraFollow2D' )
  var i1993 = data
  request.r(i1993[0], i1993[1], 0, i1992, 'target')
  i1992.smoothSpeed = i1993[2]
  i1992.offset = new pc.Vec3( i1993[3], i1993[4], i1993[5] )
  i1992.followY = !!i1993[6]
  return i1992
}

Deserializers["AutoCameraFit"] = function (request, data, root) {
  var i1994 = root || request.c( 'AutoCameraFit' )
  var i1995 = data
  i1994.fitMode = i1995[0]
  i1994.referenceResolution = new pc.Vec2( i1995[1], i1995[2] )
  i1994.referenceOrthographicSize = i1995[3]
  i1994.widthMode = i1995[4]
  i1994.autoFitCanvases = !!i1995[5]
  var i1997 = i1995[6]
  var i1996 = []
  for(var i = 0; i < i1997.length; i += 2) {
  request.r(i1997[i + 0], i1997[i + 1], 2, i1996, '')
  }
  i1994.targetCanvasScalers = i1996
  request.r(i1995[7], i1995[8], 0, i1994, 'tallScreenObject')
  i1994.tallScreenRatioThreshold = i1995[9]
  i1994.tallScreenYOffset = i1995[10]
  request.r(i1995[11], i1995[12], 0, i1994, 'canvasBtn')
  request.r(i1995[13], i1995[14], 0, i1994, 'targetArea')
  i1994.paddingLandscape = i1995[15]
  i1994.paddingPortrait = i1995[16]
  i1994.extraPaddingSmallScreen = i1995[17]
  i1994.smallScreenThreshold = i1995[18]
  i1994.autoUpdateOnResize = !!i1995[19]
  i1994.adjustInEditMode = !!i1995[20]
  return i1994
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i2000 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i2001 = data
  i2000.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i2001[0], i2000.main)
  i2000.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i2001[1], i2000.colorBySpeed)
  i2000.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i2001[2], i2000.colorOverLifetime)
  i2000.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i2001[3], i2000.emission)
  i2000.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i2001[4], i2000.rotationBySpeed)
  i2000.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i2001[5], i2000.rotationOverLifetime)
  i2000.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i2001[6], i2000.shape)
  i2000.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i2001[7], i2000.sizeBySpeed)
  i2000.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i2001[8], i2000.sizeOverLifetime)
  i2000.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i2001[9], i2000.textureSheetAnimation)
  i2000.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i2001[10], i2000.velocityOverLifetime)
  i2000.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i2001[11], i2000.noise)
  i2000.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i2001[12], i2000.inheritVelocity)
  i2000.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i2001[13], i2000.forceOverLifetime)
  i2000.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i2001[14], i2000.limitVelocityOverLifetime)
  i2000.useAutoRandomSeed = !!i2001[15]
  i2000.randomSeed = i2001[16]
  return i2000
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i2002 = root || new pc.ParticleSystemMain()
  var i2003 = data
  i2002.duration = i2003[0]
  i2002.loop = !!i2003[1]
  i2002.prewarm = !!i2003[2]
  i2002.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2003[3], i2002.startDelay)
  i2002.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2003[4], i2002.startLifetime)
  i2002.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2003[5], i2002.startSpeed)
  i2002.startSize3D = !!i2003[6]
  i2002.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2003[7], i2002.startSizeX)
  i2002.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2003[8], i2002.startSizeY)
  i2002.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2003[9], i2002.startSizeZ)
  i2002.startRotation3D = !!i2003[10]
  i2002.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2003[11], i2002.startRotationX)
  i2002.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2003[12], i2002.startRotationY)
  i2002.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2003[13], i2002.startRotationZ)
  i2002.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2003[14], i2002.startColor)
  i2002.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2003[15], i2002.gravityModifier)
  i2002.simulationSpace = i2003[16]
  request.r(i2003[17], i2003[18], 0, i2002, 'customSimulationSpace')
  i2002.simulationSpeed = i2003[19]
  i2002.useUnscaledTime = !!i2003[20]
  i2002.scalingMode = i2003[21]
  i2002.playOnAwake = !!i2003[22]
  i2002.maxParticles = i2003[23]
  i2002.emitterVelocityMode = i2003[24]
  i2002.stopAction = i2003[25]
  return i2002
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i2004 = root || new pc.MinMaxCurve()
  var i2005 = data
  i2004.mode = i2005[0]
  i2004.curveMin = new pc.AnimationCurve( { keys_flow: i2005[1] } )
  i2004.curveMax = new pc.AnimationCurve( { keys_flow: i2005[2] } )
  i2004.curveMultiplier = i2005[3]
  i2004.constantMin = i2005[4]
  i2004.constantMax = i2005[5]
  return i2004
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i2006 = root || new pc.MinMaxGradient()
  var i2007 = data
  i2006.mode = i2007[0]
  i2006.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2007[1], i2006.gradientMin)
  i2006.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2007[2], i2006.gradientMax)
  i2006.colorMin = new pc.Color(i2007[3], i2007[4], i2007[5], i2007[6])
  i2006.colorMax = new pc.Color(i2007[7], i2007[8], i2007[9], i2007[10])
  return i2006
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i2008 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i2009 = data
  i2008.mode = i2009[0]
  var i2011 = i2009[1]
  var i2010 = []
  for(var i = 0; i < i2011.length; i += 1) {
    i2010.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i2011[i + 0]) );
  }
  i2008.colorKeys = i2010
  var i2013 = i2009[2]
  var i2012 = []
  for(var i = 0; i < i2013.length; i += 1) {
    i2012.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i2013[i + 0]) );
  }
  i2008.alphaKeys = i2012
  return i2008
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i2014 = root || new pc.ParticleSystemColorBySpeed()
  var i2015 = data
  i2014.enabled = !!i2015[0]
  i2014.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2015[1], i2014.color)
  i2014.range = new pc.Vec2( i2015[2], i2015[3] )
  return i2014
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i2018 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i2019 = data
  i2018.color = new pc.Color(i2019[0], i2019[1], i2019[2], i2019[3])
  i2018.time = i2019[4]
  return i2018
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i2022 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i2023 = data
  i2022.alpha = i2023[0]
  i2022.time = i2023[1]
  return i2022
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i2024 = root || new pc.ParticleSystemColorOverLifetime()
  var i2025 = data
  i2024.enabled = !!i2025[0]
  i2024.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2025[1], i2024.color)
  return i2024
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i2026 = root || new pc.ParticleSystemEmitter()
  var i2027 = data
  i2026.enabled = !!i2027[0]
  i2026.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2027[1], i2026.rateOverTime)
  i2026.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2027[2], i2026.rateOverDistance)
  var i2029 = i2027[3]
  var i2028 = []
  for(var i = 0; i < i2029.length; i += 1) {
    i2028.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i2029[i + 0]) );
  }
  i2026.bursts = i2028
  return i2026
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i2032 = root || new pc.ParticleSystemBurst()
  var i2033 = data
  i2032.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2033[0], i2032.count)
  i2032.cycleCount = i2033[1]
  i2032.minCount = i2033[2]
  i2032.maxCount = i2033[3]
  i2032.repeatInterval = i2033[4]
  i2032.time = i2033[5]
  return i2032
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i2034 = root || new pc.ParticleSystemRotationBySpeed()
  var i2035 = data
  i2034.enabled = !!i2035[0]
  i2034.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2035[1], i2034.x)
  i2034.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2035[2], i2034.y)
  i2034.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2035[3], i2034.z)
  i2034.separateAxes = !!i2035[4]
  i2034.range = new pc.Vec2( i2035[5], i2035[6] )
  return i2034
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i2036 = root || new pc.ParticleSystemRotationOverLifetime()
  var i2037 = data
  i2036.enabled = !!i2037[0]
  i2036.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2037[1], i2036.x)
  i2036.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2037[2], i2036.y)
  i2036.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2037[3], i2036.z)
  i2036.separateAxes = !!i2037[4]
  return i2036
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i2038 = root || new pc.ParticleSystemShape()
  var i2039 = data
  i2038.enabled = !!i2039[0]
  i2038.shapeType = i2039[1]
  i2038.randomDirectionAmount = i2039[2]
  i2038.sphericalDirectionAmount = i2039[3]
  i2038.randomPositionAmount = i2039[4]
  i2038.alignToDirection = !!i2039[5]
  i2038.radius = i2039[6]
  i2038.radiusMode = i2039[7]
  i2038.radiusSpread = i2039[8]
  i2038.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2039[9], i2038.radiusSpeed)
  i2038.radiusThickness = i2039[10]
  i2038.angle = i2039[11]
  i2038.length = i2039[12]
  i2038.boxThickness = new pc.Vec3( i2039[13], i2039[14], i2039[15] )
  i2038.meshShapeType = i2039[16]
  request.r(i2039[17], i2039[18], 0, i2038, 'mesh')
  request.r(i2039[19], i2039[20], 0, i2038, 'meshRenderer')
  request.r(i2039[21], i2039[22], 0, i2038, 'skinnedMeshRenderer')
  i2038.useMeshMaterialIndex = !!i2039[23]
  i2038.meshMaterialIndex = i2039[24]
  i2038.useMeshColors = !!i2039[25]
  i2038.normalOffset = i2039[26]
  i2038.arc = i2039[27]
  i2038.arcMode = i2039[28]
  i2038.arcSpread = i2039[29]
  i2038.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2039[30], i2038.arcSpeed)
  i2038.donutRadius = i2039[31]
  i2038.position = new pc.Vec3( i2039[32], i2039[33], i2039[34] )
  i2038.rotation = new pc.Vec3( i2039[35], i2039[36], i2039[37] )
  i2038.scale = new pc.Vec3( i2039[38], i2039[39], i2039[40] )
  return i2038
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i2040 = root || new pc.ParticleSystemSizeBySpeed()
  var i2041 = data
  i2040.enabled = !!i2041[0]
  i2040.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2041[1], i2040.x)
  i2040.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2041[2], i2040.y)
  i2040.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2041[3], i2040.z)
  i2040.separateAxes = !!i2041[4]
  i2040.range = new pc.Vec2( i2041[5], i2041[6] )
  return i2040
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i2042 = root || new pc.ParticleSystemSizeOverLifetime()
  var i2043 = data
  i2042.enabled = !!i2043[0]
  i2042.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2043[1], i2042.x)
  i2042.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2043[2], i2042.y)
  i2042.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2043[3], i2042.z)
  i2042.separateAxes = !!i2043[4]
  return i2042
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i2044 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i2045 = data
  i2044.enabled = !!i2045[0]
  i2044.mode = i2045[1]
  i2044.animation = i2045[2]
  i2044.numTilesX = i2045[3]
  i2044.numTilesY = i2045[4]
  i2044.useRandomRow = !!i2045[5]
  i2044.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2045[6], i2044.frameOverTime)
  i2044.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2045[7], i2044.startFrame)
  i2044.cycleCount = i2045[8]
  i2044.rowIndex = i2045[9]
  i2044.flipU = i2045[10]
  i2044.flipV = i2045[11]
  i2044.spriteCount = i2045[12]
  var i2047 = i2045[13]
  var i2046 = []
  for(var i = 0; i < i2047.length; i += 2) {
  request.r(i2047[i + 0], i2047[i + 1], 2, i2046, '')
  }
  i2044.sprites = i2046
  return i2044
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i2050 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i2051 = data
  i2050.enabled = !!i2051[0]
  i2050.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2051[1], i2050.x)
  i2050.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2051[2], i2050.y)
  i2050.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2051[3], i2050.z)
  i2050.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2051[4], i2050.radial)
  i2050.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2051[5], i2050.speedModifier)
  i2050.space = i2051[6]
  i2050.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2051[7], i2050.orbitalX)
  i2050.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2051[8], i2050.orbitalY)
  i2050.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2051[9], i2050.orbitalZ)
  i2050.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2051[10], i2050.orbitalOffsetX)
  i2050.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2051[11], i2050.orbitalOffsetY)
  i2050.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2051[12], i2050.orbitalOffsetZ)
  return i2050
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i2052 = root || new pc.ParticleSystemNoise()
  var i2053 = data
  i2052.enabled = !!i2053[0]
  i2052.separateAxes = !!i2053[1]
  i2052.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2053[2], i2052.strengthX)
  i2052.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2053[3], i2052.strengthY)
  i2052.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2053[4], i2052.strengthZ)
  i2052.frequency = i2053[5]
  i2052.damping = !!i2053[6]
  i2052.octaveCount = i2053[7]
  i2052.octaveMultiplier = i2053[8]
  i2052.octaveScale = i2053[9]
  i2052.quality = i2053[10]
  i2052.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2053[11], i2052.scrollSpeed)
  i2052.scrollSpeedMultiplier = i2053[12]
  i2052.remapEnabled = !!i2053[13]
  i2052.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2053[14], i2052.remapX)
  i2052.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2053[15], i2052.remapY)
  i2052.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2053[16], i2052.remapZ)
  i2052.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2053[17], i2052.positionAmount)
  i2052.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2053[18], i2052.rotationAmount)
  i2052.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2053[19], i2052.sizeAmount)
  return i2052
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i2054 = root || new pc.ParticleSystemInheritVelocity()
  var i2055 = data
  i2054.enabled = !!i2055[0]
  i2054.mode = i2055[1]
  i2054.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2055[2], i2054.curve)
  return i2054
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i2056 = root || new pc.ParticleSystemForceOverLifetime()
  var i2057 = data
  i2056.enabled = !!i2057[0]
  i2056.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2057[1], i2056.x)
  i2056.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2057[2], i2056.y)
  i2056.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2057[3], i2056.z)
  i2056.space = i2057[4]
  i2056.randomized = !!i2057[5]
  return i2056
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i2058 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i2059 = data
  i2058.enabled = !!i2059[0]
  i2058.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2059[1], i2058.limit)
  i2058.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2059[2], i2058.limitX)
  i2058.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2059[3], i2058.limitY)
  i2058.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2059[4], i2058.limitZ)
  i2058.dampen = i2059[5]
  i2058.separateAxes = !!i2059[6]
  i2058.space = i2059[7]
  i2058.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2059[8], i2058.drag)
  i2058.multiplyDragByParticleSize = !!i2059[9]
  i2058.multiplyDragByParticleVelocity = !!i2059[10]
  return i2058
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i2060 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i2061 = data
  request.r(i2061[0], i2061[1], 0, i2060, 'mesh')
  i2060.meshCount = i2061[2]
  i2060.activeVertexStreamsCount = i2061[3]
  i2060.alignment = i2061[4]
  i2060.renderMode = i2061[5]
  i2060.sortMode = i2061[6]
  i2060.lengthScale = i2061[7]
  i2060.velocityScale = i2061[8]
  i2060.cameraVelocityScale = i2061[9]
  i2060.normalDirection = i2061[10]
  i2060.sortingFudge = i2061[11]
  i2060.minParticleSize = i2061[12]
  i2060.maxParticleSize = i2061[13]
  i2060.pivot = new pc.Vec3( i2061[14], i2061[15], i2061[16] )
  request.r(i2061[17], i2061[18], 0, i2060, 'trailMaterial')
  i2060.applyActiveColorSpace = !!i2061[19]
  i2060.enabled = !!i2061[20]
  request.r(i2061[21], i2061[22], 0, i2060, 'sharedMaterial')
  var i2063 = i2061[23]
  var i2062 = []
  for(var i = 0; i < i2063.length; i += 2) {
  request.r(i2063[i + 0], i2063[i + 1], 2, i2062, '')
  }
  i2060.sharedMaterials = i2062
  i2060.receiveShadows = !!i2061[24]
  i2060.shadowCastingMode = i2061[25]
  i2060.sortingLayerID = i2061[26]
  i2060.sortingOrder = i2061[27]
  i2060.lightmapIndex = i2061[28]
  i2060.lightmapSceneIndex = i2061[29]
  i2060.lightmapScaleOffset = new pc.Vec4( i2061[30], i2061[31], i2061[32], i2061[33] )
  i2060.lightProbeUsage = i2061[34]
  i2060.reflectionProbeUsage = i2061[35]
  return i2060
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i2066 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i2067 = data
  i2066.name = i2067[0]
  i2066.tagId = i2067[1]
  i2066.enabled = !!i2067[2]
  i2066.isStatic = !!i2067[3]
  i2066.layer = i2067[4]
  return i2066
}

Deserializers["Ply_SoundManager"] = function (request, data, root) {
  var i2068 = root || request.c( 'Ply_SoundManager' )
  var i2069 = data
  i2068.fxAudio = request.d('FxAudio', i2069[0], i2068.fxAudio)
  request.r(i2069[1], i2069[2], 0, i2068, 'bgm1')
  return i2068
}

Deserializers["FxAudio"] = function (request, data, root) {
  var i2070 = root || request.c( 'FxAudio' )
  var i2071 = data
  i2070.ClickBox = request.d('SoundData', i2071[0], i2070.ClickBox)
  i2070.Happy = request.d('SoundData', i2071[1], i2070.Happy)
  i2070.Wrong = request.d('SoundData', i2071[2], i2070.Wrong)
  i2070.Spray = request.d('SoundData', i2071[3], i2070.Spray)
  i2070.Brush = request.d('SoundData', i2071[4], i2070.Brush)
  i2070.Keo = request.d('SoundData', i2071[5], i2070.Keo)
  i2070.Confetti = request.d('SoundData', i2071[6], i2070.Confetti)
  i2070.Lose2 = request.d('SoundData', i2071[7], i2070.Lose2)
  i2070.SelectVini = request.d('SoundData', i2071[8], i2070.SelectVini)
  i2070.SelectMessiMbappe = request.d('SoundData', i2071[9], i2070.SelectMessiMbappe)
  i2070.Tackle = request.d('SoundData', i2071[10], i2070.Tackle)
  i2070.HaalandHurt = request.d('SoundData', i2071[11], i2070.HaalandHurt)
  return i2070
}

Deserializers["SoundData"] = function (request, data, root) {
  var i2072 = root || request.c( 'SoundData' )
  var i2073 = data
  request.r(i2073[0], i2073[1], 0, i2072, 'clip')
  i2072.repeatCount = i2073[2]
  return i2072
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i2074 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i2075 = data
  request.r(i2075[0], i2075[1], 0, i2074, 'clip')
  request.r(i2075[2], i2075[3], 0, i2074, 'outputAudioMixerGroup')
  i2074.playOnAwake = !!i2075[4]
  i2074.loop = !!i2075[5]
  i2074.time = i2075[6]
  i2074.volume = i2075[7]
  i2074.pitch = i2075[8]
  i2074.enabled = !!i2075[9]
  return i2074
}

Deserializers["HaalandGame.HaalandGameManager"] = function (request, data, root) {
  var i2076 = root || request.c( 'HaalandGame.HaalandGameManager' )
  var i2077 = data
  request.r(i2077[0], i2077[1], 0, i2076, 'tutUI')
  request.r(i2077[2], i2077[3], 0, i2076, 'ronaldoTackle')
  request.r(i2077[4], i2077[5], 0, i2076, 'ronaldoTackleAnimator')
  i2076.startRonaldoTackleTrigger = i2077[6]
  request.r(i2077[7], i2077[8], 0, i2076, 'messiTackle')
  request.r(i2077[9], i2077[10], 0, i2076, 'messiTackleAnimator')
  i2076.startMessiTackleTrigger = i2077[11]
  i2076.messiTackleSpeed = i2077[12]
  i2076.tackleAnimDelay = i2077[13]
  request.r(i2077[14], i2077[15], 0, i2076, 'haalandDribbleImage')
  request.r(i2077[16], i2077[17], 0, i2076, 'haalandDribbleAnimator')
  i2076.startHaalandDribbleTrigger = i2077[18]
  request.r(i2077[19], i2077[20], 0, i2076, 'fightingCloud')
  request.r(i2077[21], i2077[22], 0, i2076, 'haalandHurt')
  request.r(i2077[23], i2077[24], 0, i2076, 'haalandWinOnCorrect')
  request.r(i2077[25], i2077[26], 0, i2076, 'haalandWin')
  i2076.winPlayerDelay = i2077[27]
  request.r(i2077[28], i2077[29], 0, i2076, 'standPlayers')
  request.r(i2077[30], i2077[31], 0, i2076, 'standPlayersAnimator')
  i2076.standPlayerEnterTrigger = i2077[32]
  request.r(i2077[33], i2077[34], 0, i2076, 'questionUI')
  request.r(i2077[35], i2077[36], 0, i2076, 'wrongChoiceUI')
  request.r(i2077[37], i2077[38], 0, i2076, 'winChoiceUI')
  request.r(i2077[39], i2077[40], 0, i2076, 'winExtraObj1')
  request.r(i2077[41], i2077[42], 0, i2076, 'winExtraObj2')
  request.r(i2077[43], i2077[44], 0, i2076, 'iconListUI')
  request.r(i2077[45], i2077[46], 0, i2076, 'refereeAnimator')
  i2076.refereeLookAroundTrigger = i2077[47]
  i2076.useAutoTimers = !!i2077[48]
  i2076.tackleHideDelay = i2077[49]
  i2076.impactCloudDelay = i2077[50]
  i2076.messiTackleHideDelay = i2077[51]
  i2076.messiImpactCloudDelay = i2077[52]
  i2076.haalandHurtDelay = i2077[53]
  i2076.cloudDuration = i2077[54]
  i2076.refereeAnimDelay = i2077[55]
  i2076.nextActionDelay = i2077[56]
  i2076.dribbleToTackleDelay = i2077[57]
  i2076.tackleSoundDelay = i2077[58]
  request.r(i2077[59], i2077[60], 0, i2076, 'ronaldoChatBubble')
  request.r(i2077[61], i2077[62], 0, i2076, 'messiChatBubble')
  request.r(i2077[63], i2077[64], 0, i2076, 'viniChatBubble')
  request.r(i2077[65], i2077[66], 0, i2076, 'mbappeChatBubble')
  request.r(i2077[67], i2077[68], 0, i2076, 'ronaldoSpriteRenderer')
  request.r(i2077[69], i2077[70], 0, i2076, 'ronaldoSadSprite')
  request.r(i2077[71], i2077[72], 0, i2076, 'ronaldoEvilLaughSprite')
  request.r(i2077[73], i2077[74], 0, i2076, 'messiSpriteRenderer')
  request.r(i2077[75], i2077[76], 0, i2076, 'messiSadSprite')
  request.r(i2077[77], i2077[78], 0, i2076, 'viniSpriteRenderer')
  request.r(i2077[79], i2077[80], 0, i2076, 'viniSadSprite')
  request.r(i2077[81], i2077[82], 0, i2076, 'mbappeSpriteRenderer')
  request.r(i2077[83], i2077[84], 0, i2076, 'mbappeSadSprite')
  request.r(i2077[85], i2077[86], 0, i2076, 'refereeSpriteRenderer')
  request.r(i2077[87], i2077[88], 0, i2076, 'refereeReactionSprite')
  request.r(i2077[89], i2077[90], 0, i2076, 'iconListAnimator')
  request.r(i2077[91], i2077[92], 0, i2076, 'postWinAudioClip')
  var i2079 = i2077[93]
  var i2078 = new (System.Collections.Generic.List$1(Bridge.ns('HaalandGame.PostWinTimedObject')))
  for(var i = 0; i < i2079.length; i += 1) {
    i2078.add(request.d('HaalandGame.PostWinTimedObject', i2079[i + 0]));
  }
  i2076.postWinTimeline = i2078
  i2076.onPostWinTriggered = request.d('UnityEngine.Events.UnityEvent', i2077[94], i2076.onPostWinTriggered)
  i2076.postWinDelay = i2077[95]
  var i2081 = i2077[96]
  var i2080 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i2081.length; i += 2) {
  request.r(i2081[i + 0], i2081[i + 1], 1, i2080, '')
  }
  i2076.postWinObjects = i2080
  i2076.currentLevel = i2077[97]
  return i2076
}

Deserializers["HaalandGame.PostWinTimedObject"] = function (request, data, root) {
  var i2084 = root || request.c( 'HaalandGame.PostWinTimedObject' )
  var i2085 = data
  i2084.label = i2085[0]
  request.r(i2085[1], i2085[2], 0, i2084, 'targetObject')
  i2084.enableDelay = i2085[3]
  i2084.disableDelay = i2085[4]
  request.r(i2085[5], i2085[6], 0, i2084, 'soundClip')
  i2084.onEnabled = request.d('UnityEngine.Events.UnityEvent', i2085[7], i2084.onEnabled)
  i2084.onDisabled = request.d('UnityEngine.Events.UnityEvent', i2085[8], i2084.onDisabled)
  return i2084
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i2086 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i2087 = data
  i2086.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2087[0], i2086.m_PersistentCalls)
  return i2086
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i2088 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i2089 = data
  var i2091 = i2089[0]
  var i2090 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i2091.length; i += 1) {
    i2090.add(request.d('UnityEngine.Events.PersistentCall', i2091[i + 0]));
  }
  i2088.m_Calls = i2090
  return i2088
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i2094 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i2095 = data
  request.r(i2095[0], i2095[1], 0, i2094, 'm_Target')
  i2094.m_TargetAssemblyTypeName = i2095[2]
  i2094.m_MethodName = i2095[3]
  i2094.m_Mode = i2095[4]
  i2094.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i2095[5], i2094.m_Arguments)
  i2094.m_CallState = i2095[6]
  return i2094
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i2096 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i2097 = data
  request.r(i2097[0], i2097[1], 0, i2096, 'm_ObjectArgument')
  i2096.m_ObjectArgumentAssemblyTypeName = i2097[2]
  i2096.m_IntArgument = i2097[3]
  i2096.m_FloatArgument = i2097[4]
  i2096.m_StringArgument = i2097[5]
  i2096.m_BoolArgument = !!i2097[6]
  return i2096
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i2100 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i2101 = data
  i2100.pivot = new pc.Vec2( i2101[0], i2101[1] )
  i2100.anchorMin = new pc.Vec2( i2101[2], i2101[3] )
  i2100.anchorMax = new pc.Vec2( i2101[4], i2101[5] )
  i2100.sizeDelta = new pc.Vec2( i2101[6], i2101[7] )
  i2100.anchoredPosition3D = new pc.Vec3( i2101[8], i2101[9], i2101[10] )
  i2100.rotation = new pc.Quat(i2101[11], i2101[12], i2101[13], i2101[14])
  i2100.scale = new pc.Vec3( i2101[15], i2101[16], i2101[17] )
  return i2100
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i2102 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i2103 = data
  i2102.planeDistance = i2103[0]
  i2102.referencePixelsPerUnit = i2103[1]
  i2102.isFallbackOverlay = !!i2103[2]
  i2102.renderMode = i2103[3]
  i2102.renderOrder = i2103[4]
  i2102.sortingLayerName = i2103[5]
  i2102.sortingOrder = i2103[6]
  i2102.scaleFactor = i2103[7]
  request.r(i2103[8], i2103[9], 0, i2102, 'worldCamera')
  i2102.overrideSorting = !!i2103[10]
  i2102.pixelPerfect = !!i2103[11]
  i2102.targetDisplay = i2103[12]
  i2102.overridePixelPerfect = !!i2103[13]
  i2102.enabled = !!i2103[14]
  return i2102
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i2104 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i2105 = data
  i2104.m_UiScaleMode = i2105[0]
  i2104.m_ReferencePixelsPerUnit = i2105[1]
  i2104.m_ScaleFactor = i2105[2]
  i2104.m_ReferenceResolution = new pc.Vec2( i2105[3], i2105[4] )
  i2104.m_ScreenMatchMode = i2105[5]
  i2104.m_MatchWidthOrHeight = i2105[6]
  i2104.m_PhysicalUnit = i2105[7]
  i2104.m_FallbackScreenDPI = i2105[8]
  i2104.m_DefaultSpriteDPI = i2105[9]
  i2104.m_DynamicPixelsPerUnit = i2105[10]
  i2104.m_PresetInfoIsWorld = !!i2105[11]
  return i2104
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i2106 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i2107 = data
  i2106.m_IgnoreReversedGraphics = !!i2107[0]
  i2106.m_BlockingObjects = i2107[1]
  i2106.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i2107[2] )
  return i2106
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i2108 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i2109 = data
  i2108.cullTransparentMesh = !!i2109[0]
  return i2108
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i2110 = root || request.c( 'UnityEngine.UI.Image' )
  var i2111 = data
  request.r(i2111[0], i2111[1], 0, i2110, 'm_Sprite')
  i2110.m_Type = i2111[2]
  i2110.m_PreserveAspect = !!i2111[3]
  i2110.m_FillCenter = !!i2111[4]
  i2110.m_FillMethod = i2111[5]
  i2110.m_FillAmount = i2111[6]
  i2110.m_FillClockwise = !!i2111[7]
  i2110.m_FillOrigin = i2111[8]
  i2110.m_UseSpriteMesh = !!i2111[9]
  i2110.m_PixelsPerUnitMultiplier = i2111[10]
  request.r(i2111[11], i2111[12], 0, i2110, 'm_Material')
  i2110.m_Maskable = !!i2111[13]
  i2110.m_Color = new pc.Color(i2111[14], i2111[15], i2111[16], i2111[17])
  i2110.m_RaycastTarget = !!i2111[18]
  i2110.m_RaycastPadding = new pc.Vec4( i2111[19], i2111[20], i2111[21], i2111[22] )
  return i2110
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i2112 = root || request.c( 'UnityEngine.UI.Button' )
  var i2113 = data
  i2112.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i2113[0], i2112.m_OnClick)
  i2112.m_Navigation = request.d('UnityEngine.UI.Navigation', i2113[1], i2112.m_Navigation)
  i2112.m_Transition = i2113[2]
  i2112.m_Colors = request.d('UnityEngine.UI.ColorBlock', i2113[3], i2112.m_Colors)
  i2112.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i2113[4], i2112.m_SpriteState)
  i2112.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i2113[5], i2112.m_AnimationTriggers)
  i2112.m_Interactable = !!i2113[6]
  request.r(i2113[7], i2113[8], 0, i2112, 'm_TargetGraphic')
  return i2112
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i2114 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i2115 = data
  i2114.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2115[0], i2114.m_PersistentCalls)
  return i2114
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i2116 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i2117 = data
  i2116.m_Mode = i2117[0]
  i2116.m_WrapAround = !!i2117[1]
  request.r(i2117[2], i2117[3], 0, i2116, 'm_SelectOnUp')
  request.r(i2117[4], i2117[5], 0, i2116, 'm_SelectOnDown')
  request.r(i2117[6], i2117[7], 0, i2116, 'm_SelectOnLeft')
  request.r(i2117[8], i2117[9], 0, i2116, 'm_SelectOnRight')
  return i2116
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i2118 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i2119 = data
  i2118.m_NormalColor = new pc.Color(i2119[0], i2119[1], i2119[2], i2119[3])
  i2118.m_HighlightedColor = new pc.Color(i2119[4], i2119[5], i2119[6], i2119[7])
  i2118.m_PressedColor = new pc.Color(i2119[8], i2119[9], i2119[10], i2119[11])
  i2118.m_SelectedColor = new pc.Color(i2119[12], i2119[13], i2119[14], i2119[15])
  i2118.m_DisabledColor = new pc.Color(i2119[16], i2119[17], i2119[18], i2119[19])
  i2118.m_ColorMultiplier = i2119[20]
  i2118.m_FadeDuration = i2119[21]
  return i2118
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i2120 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i2121 = data
  request.r(i2121[0], i2121[1], 0, i2120, 'm_HighlightedSprite')
  request.r(i2121[2], i2121[3], 0, i2120, 'm_PressedSprite')
  request.r(i2121[4], i2121[5], 0, i2120, 'm_SelectedSprite')
  request.r(i2121[6], i2121[7], 0, i2120, 'm_DisabledSprite')
  return i2120
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i2122 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i2123 = data
  i2122.m_NormalTrigger = i2123[0]
  i2122.m_HighlightedTrigger = i2123[1]
  i2122.m_PressedTrigger = i2123[2]
  i2122.m_SelectedTrigger = i2123[3]
  i2122.m_DisabledTrigger = i2123[4]
  return i2122
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i2124 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i2125 = data
  request.r(i2125[0], i2125[1], 0, i2124, 'animatorController')
  request.r(i2125[2], i2125[3], 0, i2124, 'avatar')
  i2124.updateMode = i2125[4]
  i2124.hasTransformHierarchy = !!i2125[5]
  i2124.applyRootMotion = !!i2125[6]
  var i2127 = i2125[7]
  var i2126 = []
  for(var i = 0; i < i2127.length; i += 2) {
  request.r(i2127[i + 0], i2127[i + 1], 2, i2126, '')
  }
  i2124.humanBones = i2126
  i2124.enabled = !!i2125[8]
  return i2124
}

Deserializers["HaalandGame.IconListAnimator"] = function (request, data, root) {
  var i2130 = root || request.c( 'HaalandGame.IconListAnimator' )
  var i2131 = data
  var i2133 = i2131[0]
  var i2132 = []
  for(var i = 0; i < i2133.length; i += 2) {
  request.r(i2133[i + 0], i2133[i + 1], 2, i2132, '')
  }
  i2130.iconTransforms = i2132
  i2130.initialDelay = i2131[1]
  i2130.targetScaleMult = i2131[2]
  i2130.pulseDuration = i2131[3]
  i2130.delayBetweenIcons = i2131[4]
  i2130.delayBetweenLoops = i2131[5]
  return i2130
}

Deserializers["HideOnFirstClick"] = function (request, data, root) {
  var i2136 = root || request.c( 'HideOnFirstClick' )
  var i2137 = data
  request.r(i2137[0], i2137[1], 0, i2136, 'objectToHide')
  return i2136
}

Deserializers["ScreenHeightPositionAnchor"] = function (request, data, root) {
  var i2138 = root || request.c( 'ScreenHeightPositionAnchor' )
  var i2139 = data
  request.r(i2139[0], i2139[1], 0, i2138, 'anchorPoint')
  request.r(i2139[2], i2139[3], 0, i2138, 'targetCamera')
  i2138.viewportYRatio = i2139[4]
  i2138.alignOnStart = !!i2139[5]
  i2138.alignOnEnable = !!i2139[6]
  i2138.realignOnScreenSizeChanged = !!i2139[7]
  i2138.drawGizmos = !!i2139[8]
  i2138.targetLineColor = new pc.Color(i2139[9], i2139[10], i2139[11], i2139[12])
  i2138.anchorColor = new pc.Color(i2139[13], i2139[14], i2139[15], i2139[16])
  return i2138
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i2140 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i2141 = data
  i2140.center = new pc.Vec3( i2141[0], i2141[1], i2141[2] )
  i2140.size = new pc.Vec3( i2141[3], i2141[4], i2141[5] )
  i2140.enabled = !!i2141[6]
  i2140.isTrigger = !!i2141[7]
  request.r(i2141[8], i2141[9], 0, i2140, 'material')
  return i2140
}

Deserializers["HaalandGame.PlayerSelectable"] = function (request, data, root) {
  var i2142 = root || request.c( 'HaalandGame.PlayerSelectable' )
  var i2143 = data
  i2142.playerType = i2143[0]
  i2142.targetLayerName = i2143[1]
  return i2142
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i2144 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i2145 = data
  i2144.color = new pc.Color(i2145[0], i2145[1], i2145[2], i2145[3])
  request.r(i2145[4], i2145[5], 0, i2144, 'sprite')
  i2144.flipX = !!i2145[6]
  i2144.flipY = !!i2145[7]
  i2144.drawMode = i2145[8]
  i2144.size = new pc.Vec2( i2145[9], i2145[10] )
  i2144.tileMode = i2145[11]
  i2144.adaptiveModeThreshold = i2145[12]
  i2144.maskInteraction = i2145[13]
  i2144.spriteSortPoint = i2145[14]
  i2144.enabled = !!i2145[15]
  request.r(i2145[16], i2145[17], 0, i2144, 'sharedMaterial')
  var i2147 = i2145[18]
  var i2146 = []
  for(var i = 0; i < i2147.length; i += 2) {
  request.r(i2147[i + 0], i2147[i + 1], 2, i2146, '')
  }
  i2144.sharedMaterials = i2146
  i2144.receiveShadows = !!i2145[19]
  i2144.shadowCastingMode = i2145[20]
  i2144.sortingLayerID = i2145[21]
  i2144.sortingOrder = i2145[22]
  i2144.lightmapIndex = i2145[23]
  i2144.lightmapSceneIndex = i2145[24]
  i2144.lightmapScaleOffset = new pc.Vec4( i2145[25], i2145[26], i2145[27], i2145[28] )
  i2144.lightProbeUsage = i2145[29]
  i2144.reflectionProbeUsage = i2145[30]
  return i2144
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i2148 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i2149 = data
  request.r(i2149[0], i2149[1], 0, i2148, 'm_FirstSelected')
  i2148.m_sendNavigationEvents = !!i2149[2]
  i2148.m_DragThreshold = i2149[3]
  return i2148
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i2150 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i2151 = data
  i2150.m_HorizontalAxis = i2151[0]
  i2150.m_VerticalAxis = i2151[1]
  i2150.m_SubmitButton = i2151[2]
  i2150.m_CancelButton = i2151[3]
  i2150.m_InputActionsPerSecond = i2151[4]
  i2150.m_RepeatDelay = i2151[5]
  i2150.m_ForceModuleActive = !!i2151[6]
  i2150.m_SendPointerHoverToParent = !!i2151[7]
  return i2150
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i2152 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i2153 = data
  i2152.ambientIntensity = i2153[0]
  i2152.reflectionIntensity = i2153[1]
  i2152.ambientMode = i2153[2]
  i2152.ambientLight = new pc.Color(i2153[3], i2153[4], i2153[5], i2153[6])
  i2152.ambientSkyColor = new pc.Color(i2153[7], i2153[8], i2153[9], i2153[10])
  i2152.ambientGroundColor = new pc.Color(i2153[11], i2153[12], i2153[13], i2153[14])
  i2152.ambientEquatorColor = new pc.Color(i2153[15], i2153[16], i2153[17], i2153[18])
  i2152.fogColor = new pc.Color(i2153[19], i2153[20], i2153[21], i2153[22])
  i2152.fogEndDistance = i2153[23]
  i2152.fogStartDistance = i2153[24]
  i2152.fogDensity = i2153[25]
  i2152.fog = !!i2153[26]
  request.r(i2153[27], i2153[28], 0, i2152, 'skybox')
  i2152.fogMode = i2153[29]
  var i2155 = i2153[30]
  var i2154 = []
  for(var i = 0; i < i2155.length; i += 1) {
    i2154.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i2155[i + 0]) );
  }
  i2152.lightmaps = i2154
  i2152.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i2153[31], i2152.lightProbes)
  i2152.lightmapsMode = i2153[32]
  i2152.mixedBakeMode = i2153[33]
  i2152.environmentLightingMode = i2153[34]
  i2152.ambientProbe = new pc.SphericalHarmonicsL2(i2153[35])
  i2152.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i2153[36])
  i2152.useReferenceAmbientProbe = !!i2153[37]
  request.r(i2153[38], i2153[39], 0, i2152, 'customReflection')
  request.r(i2153[40], i2153[41], 0, i2152, 'defaultReflection')
  i2152.defaultReflectionMode = i2153[42]
  i2152.defaultReflectionResolution = i2153[43]
  i2152.sunLightObjectId = i2153[44]
  i2152.pixelLightCount = i2153[45]
  i2152.defaultReflectionHDR = !!i2153[46]
  i2152.hasLightDataAsset = !!i2153[47]
  i2152.hasManualGenerate = !!i2153[48]
  return i2152
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i2158 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i2159 = data
  request.r(i2159[0], i2159[1], 0, i2158, 'lightmapColor')
  request.r(i2159[2], i2159[3], 0, i2158, 'lightmapDirection')
  request.r(i2159[4], i2159[5], 0, i2158, 'shadowMask')
  return i2158
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i2160 = root || new UnityEngine.LightProbes()
  var i2161 = data
  return i2160
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i2168 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i2169 = data
  var i2171 = i2169[0]
  var i2170 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i2171.length; i += 1) {
    i2170.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i2171[i + 0]));
  }
  i2168.ShaderCompilationErrors = i2170
  i2168.name = i2169[1]
  i2168.guid = i2169[2]
  var i2173 = i2169[3]
  var i2172 = []
  for(var i = 0; i < i2173.length; i += 1) {
    i2172.push( i2173[i + 0] );
  }
  i2168.shaderDefinedKeywords = i2172
  var i2175 = i2169[4]
  var i2174 = []
  for(var i = 0; i < i2175.length; i += 1) {
    i2174.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i2175[i + 0]) );
  }
  i2168.passes = i2174
  var i2177 = i2169[5]
  var i2176 = []
  for(var i = 0; i < i2177.length; i += 1) {
    i2176.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i2177[i + 0]) );
  }
  i2168.usePasses = i2176
  var i2179 = i2169[6]
  var i2178 = []
  for(var i = 0; i < i2179.length; i += 1) {
    i2178.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i2179[i + 0]) );
  }
  i2168.defaultParameterValues = i2178
  request.r(i2169[7], i2169[8], 0, i2168, 'unityFallbackShader')
  i2168.readDepth = !!i2169[9]
  i2168.hasDepthOnlyPass = !!i2169[10]
  i2168.isCreatedByShaderGraph = !!i2169[11]
  i2168.disableBatching = !!i2169[12]
  i2168.compiled = !!i2169[13]
  return i2168
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i2182 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i2183 = data
  i2182.shaderName = i2183[0]
  i2182.errorMessage = i2183[1]
  return i2182
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i2188 = root || new pc.UnityShaderPass()
  var i2189 = data
  i2188.id = i2189[0]
  i2188.subShaderIndex = i2189[1]
  i2188.name = i2189[2]
  i2188.passType = i2189[3]
  i2188.grabPassTextureName = i2189[4]
  i2188.usePass = !!i2189[5]
  i2188.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2189[6], i2188.zTest)
  i2188.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2189[7], i2188.zWrite)
  i2188.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2189[8], i2188.culling)
  i2188.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2189[9], i2188.blending)
  i2188.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2189[10], i2188.alphaBlending)
  i2188.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2189[11], i2188.colorWriteMask)
  i2188.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2189[12], i2188.offsetUnits)
  i2188.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2189[13], i2188.offsetFactor)
  i2188.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2189[14], i2188.stencilRef)
  i2188.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2189[15], i2188.stencilReadMask)
  i2188.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2189[16], i2188.stencilWriteMask)
  i2188.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2189[17], i2188.stencilOp)
  i2188.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2189[18], i2188.stencilOpFront)
  i2188.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2189[19], i2188.stencilOpBack)
  var i2191 = i2189[20]
  var i2190 = []
  for(var i = 0; i < i2191.length; i += 1) {
    i2190.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i2191[i + 0]) );
  }
  i2188.tags = i2190
  var i2193 = i2189[21]
  var i2192 = []
  for(var i = 0; i < i2193.length; i += 1) {
    i2192.push( i2193[i + 0] );
  }
  i2188.passDefinedKeywords = i2192
  var i2195 = i2189[22]
  var i2194 = []
  for(var i = 0; i < i2195.length; i += 1) {
    i2194.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i2195[i + 0]) );
  }
  i2188.passDefinedKeywordGroups = i2194
  var i2197 = i2189[23]
  var i2196 = []
  for(var i = 0; i < i2197.length; i += 1) {
    i2196.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2197[i + 0]) );
  }
  i2188.variants = i2196
  var i2199 = i2189[24]
  var i2198 = []
  for(var i = 0; i < i2199.length; i += 1) {
    i2198.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2199[i + 0]) );
  }
  i2188.excludedVariants = i2198
  i2188.hasDepthReader = !!i2189[25]
  return i2188
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i2200 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i2201 = data
  i2200.val = i2201[0]
  i2200.name = i2201[1]
  return i2200
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i2202 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i2203 = data
  i2202.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2203[0], i2202.src)
  i2202.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2203[1], i2202.dst)
  i2202.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2203[2], i2202.op)
  return i2202
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i2204 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i2205 = data
  i2204.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2205[0], i2204.pass)
  i2204.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2205[1], i2204.fail)
  i2204.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2205[2], i2204.zFail)
  i2204.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2205[3], i2204.comp)
  return i2204
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i2208 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i2209 = data
  i2208.name = i2209[0]
  i2208.value = i2209[1]
  return i2208
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i2212 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i2213 = data
  var i2215 = i2213[0]
  var i2214 = []
  for(var i = 0; i < i2215.length; i += 1) {
    i2214.push( i2215[i + 0] );
  }
  i2212.keywords = i2214
  i2212.hasDiscard = !!i2213[1]
  return i2212
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i2218 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i2219 = data
  i2218.passId = i2219[0]
  i2218.subShaderIndex = i2219[1]
  var i2221 = i2219[2]
  var i2220 = []
  for(var i = 0; i < i2221.length; i += 1) {
    i2220.push( i2221[i + 0] );
  }
  i2218.keywords = i2220
  i2218.vertexProgram = i2219[3]
  i2218.fragmentProgram = i2219[4]
  i2218.exportedForWebGl2 = !!i2219[5]
  i2218.readDepth = !!i2219[6]
  return i2218
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i2224 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i2225 = data
  request.r(i2225[0], i2225[1], 0, i2224, 'shader')
  i2224.pass = i2225[2]
  return i2224
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i2228 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i2229 = data
  i2228.name = i2229[0]
  i2228.type = i2229[1]
  i2228.value = new pc.Vec4( i2229[2], i2229[3], i2229[4], i2229[5] )
  i2228.textureValue = i2229[6]
  i2228.shaderPropertyFlag = i2229[7]
  return i2228
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i2230 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i2231 = data
  i2230.name = i2231[0]
  request.r(i2231[1], i2231[2], 0, i2230, 'texture')
  i2230.aabb = i2231[3]
  i2230.vertices = i2231[4]
  i2230.triangles = i2231[5]
  i2230.textureRect = UnityEngine.Rect.MinMaxRect(i2231[6], i2231[7], i2231[8], i2231[9])
  i2230.packedRect = UnityEngine.Rect.MinMaxRect(i2231[10], i2231[11], i2231[12], i2231[13])
  i2230.border = new pc.Vec4( i2231[14], i2231[15], i2231[16], i2231[17] )
  i2230.transparency = i2231[18]
  i2230.bounds = i2231[19]
  i2230.pixelsPerUnit = i2231[20]
  i2230.textureWidth = i2231[21]
  i2230.textureHeight = i2231[22]
  i2230.nativeSize = new pc.Vec2( i2231[23], i2231[24] )
  i2230.pivot = new pc.Vec2( i2231[25], i2231[26] )
  i2230.textureRectOffset = new pc.Vec2( i2231[27], i2231[28] )
  return i2230
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i2232 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i2233 = data
  i2232.name = i2233[0]
  return i2232
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i2234 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i2235 = data
  i2234.name = i2235[0]
  i2234.wrapMode = i2235[1]
  i2234.isLooping = !!i2235[2]
  i2234.length = i2235[3]
  var i2237 = i2235[4]
  var i2236 = []
  for(var i = 0; i < i2237.length; i += 1) {
    i2236.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i2237[i + 0]) );
  }
  i2234.curves = i2236
  var i2239 = i2235[5]
  var i2238 = []
  for(var i = 0; i < i2239.length; i += 1) {
    i2238.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i2239[i + 0]) );
  }
  i2234.events = i2238
  i2234.halfPrecision = !!i2235[6]
  i2234._frameRate = i2235[7]
  i2234.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i2235[8], i2234.localBounds)
  i2234.hasMuscleCurves = !!i2235[9]
  var i2241 = i2235[10]
  var i2240 = []
  for(var i = 0; i < i2241.length; i += 1) {
    i2240.push( i2241[i + 0] );
  }
  i2234.clipMuscleConstant = i2240
  i2234.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i2235[11], i2234.clipBindingConstant)
  return i2234
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i2244 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i2245 = data
  i2244.path = i2245[0]
  i2244.hash = i2245[1]
  i2244.componentType = i2245[2]
  i2244.property = i2245[3]
  i2244.keys = i2245[4]
  var i2247 = i2245[5]
  var i2246 = []
  for(var i = 0; i < i2247.length; i += 1) {
    i2246.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i2247[i + 0]) );
  }
  i2244.objectReferenceKeys = i2246
  return i2244
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i2250 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i2251 = data
  i2250.time = i2251[0]
  request.r(i2251[1], i2251[2], 0, i2250, 'value')
  return i2250
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i2254 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i2255 = data
  i2254.functionName = i2255[0]
  i2254.floatParameter = i2255[1]
  i2254.intParameter = i2255[2]
  i2254.stringParameter = i2255[3]
  request.r(i2255[4], i2255[5], 0, i2254, 'objectReferenceParameter')
  i2254.time = i2255[6]
  return i2254
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i2256 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i2257 = data
  i2256.center = new pc.Vec3( i2257[0], i2257[1], i2257[2] )
  i2256.extends = new pc.Vec3( i2257[3], i2257[4], i2257[5] )
  return i2256
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i2260 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i2261 = data
  var i2263 = i2261[0]
  var i2262 = []
  for(var i = 0; i < i2263.length; i += 1) {
    i2262.push( i2263[i + 0] );
  }
  i2260.genericBindings = i2262
  var i2265 = i2261[1]
  var i2264 = []
  for(var i = 0; i < i2265.length; i += 1) {
    i2264.push( i2265[i + 0] );
  }
  i2260.pptrCurveMapping = i2264
  return i2260
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i2266 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i2267 = data
  i2266.name = i2267[0]
  i2266.ascent = i2267[1]
  i2266.originalLineHeight = i2267[2]
  i2266.fontSize = i2267[3]
  var i2269 = i2267[4]
  var i2268 = []
  for(var i = 0; i < i2269.length; i += 1) {
    i2268.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i2269[i + 0]) );
  }
  i2266.characterInfo = i2268
  request.r(i2267[5], i2267[6], 0, i2266, 'texture')
  i2266.originalFontSize = i2267[7]
  return i2266
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i2272 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i2273 = data
  i2272.index = i2273[0]
  i2272.advance = i2273[1]
  i2272.bearing = i2273[2]
  i2272.glyphWidth = i2273[3]
  i2272.glyphHeight = i2273[4]
  i2272.minX = i2273[5]
  i2272.maxX = i2273[6]
  i2272.minY = i2273[7]
  i2272.maxY = i2273[8]
  i2272.uvBottomLeftX = i2273[9]
  i2272.uvBottomLeftY = i2273[10]
  i2272.uvBottomRightX = i2273[11]
  i2272.uvBottomRightY = i2273[12]
  i2272.uvTopLeftX = i2273[13]
  i2272.uvTopLeftY = i2273[14]
  i2272.uvTopRightX = i2273[15]
  i2272.uvTopRightY = i2273[16]
  return i2272
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i2274 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i2275 = data
  i2274.name = i2275[0]
  var i2277 = i2275[1]
  var i2276 = []
  for(var i = 0; i < i2277.length; i += 1) {
    i2276.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i2277[i + 0]) );
  }
  i2274.layers = i2276
  var i2279 = i2275[2]
  var i2278 = []
  for(var i = 0; i < i2279.length; i += 1) {
    i2278.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i2279[i + 0]) );
  }
  i2274.parameters = i2278
  i2274.animationClips = i2275[3]
  i2274.avatarUnsupported = i2275[4]
  return i2274
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i2282 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i2283 = data
  i2282.name = i2283[0]
  i2282.defaultWeight = i2283[1]
  i2282.blendingMode = i2283[2]
  i2282.avatarMask = i2283[3]
  i2282.syncedLayerIndex = i2283[4]
  i2282.syncedLayerAffectsTiming = !!i2283[5]
  i2282.syncedLayers = i2283[6]
  i2282.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2283[7], i2282.stateMachine)
  return i2282
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i2284 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i2285 = data
  i2284.id = i2285[0]
  i2284.name = i2285[1]
  i2284.path = i2285[2]
  var i2287 = i2285[3]
  var i2286 = []
  for(var i = 0; i < i2287.length; i += 1) {
    i2286.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i2287[i + 0]) );
  }
  i2284.states = i2286
  var i2289 = i2285[4]
  var i2288 = []
  for(var i = 0; i < i2289.length; i += 1) {
    i2288.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2289[i + 0]) );
  }
  i2284.machines = i2288
  var i2291 = i2285[5]
  var i2290 = []
  for(var i = 0; i < i2291.length; i += 1) {
    i2290.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2291[i + 0]) );
  }
  i2284.entryStateTransitions = i2290
  var i2293 = i2285[6]
  var i2292 = []
  for(var i = 0; i < i2293.length; i += 1) {
    i2292.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2293[i + 0]) );
  }
  i2284.exitStateTransitions = i2292
  var i2295 = i2285[7]
  var i2294 = []
  for(var i = 0; i < i2295.length; i += 1) {
    i2294.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2295[i + 0]) );
  }
  i2284.anyStateTransitions = i2294
  i2284.defaultStateId = i2285[8]
  return i2284
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i2298 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i2299 = data
  i2298.id = i2299[0]
  i2298.name = i2299[1]
  i2298.cycleOffset = i2299[2]
  i2298.cycleOffsetParameter = i2299[3]
  i2298.cycleOffsetParameterActive = !!i2299[4]
  i2298.mirror = !!i2299[5]
  i2298.mirrorParameter = i2299[6]
  i2298.mirrorParameterActive = !!i2299[7]
  i2298.motionId = i2299[8]
  i2298.nameHash = i2299[9]
  i2298.fullPathHash = i2299[10]
  i2298.speed = i2299[11]
  i2298.speedParameter = i2299[12]
  i2298.speedParameterActive = !!i2299[13]
  i2298.tag = i2299[14]
  i2298.tagHash = i2299[15]
  i2298.writeDefaultValues = !!i2299[16]
  var i2301 = i2299[17]
  var i2300 = []
  for(var i = 0; i < i2301.length; i += 2) {
  request.r(i2301[i + 0], i2301[i + 1], 2, i2300, '')
  }
  i2298.behaviours = i2300
  var i2303 = i2299[18]
  var i2302 = []
  for(var i = 0; i < i2303.length; i += 1) {
    i2302.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2303[i + 0]) );
  }
  i2298.transitions = i2302
  return i2298
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i2308 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i2309 = data
  i2308.fullPath = i2309[0]
  i2308.canTransitionToSelf = !!i2309[1]
  i2308.duration = i2309[2]
  i2308.exitTime = i2309[3]
  i2308.hasExitTime = !!i2309[4]
  i2308.hasFixedDuration = !!i2309[5]
  i2308.interruptionSource = i2309[6]
  i2308.offset = i2309[7]
  i2308.orderedInterruption = !!i2309[8]
  i2308.destinationStateId = i2309[9]
  i2308.isExit = !!i2309[10]
  i2308.mute = !!i2309[11]
  i2308.solo = !!i2309[12]
  var i2311 = i2309[13]
  var i2310 = []
  for(var i = 0; i < i2311.length; i += 1) {
    i2310.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2311[i + 0]) );
  }
  i2308.conditions = i2310
  return i2308
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i2316 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i2317 = data
  i2316.destinationStateId = i2317[0]
  i2316.isExit = !!i2317[1]
  i2316.mute = !!i2317[2]
  i2316.solo = !!i2317[3]
  var i2319 = i2317[4]
  var i2318 = []
  for(var i = 0; i < i2319.length; i += 1) {
    i2318.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2319[i + 0]) );
  }
  i2316.conditions = i2318
  return i2316
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i2322 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i2323 = data
  i2322.mode = i2323[0]
  i2322.parameter = i2323[1]
  i2322.threshold = i2323[2]
  return i2322
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i2326 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i2327 = data
  i2326.defaultBool = !!i2327[0]
  i2326.defaultFloat = i2327[1]
  i2326.defaultInt = i2327[2]
  i2326.name = i2327[3]
  i2326.nameHash = i2327[4]
  i2326.type = i2327[5]
  return i2326
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i2328 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i2329 = data
  i2328.name = i2329[0]
  i2328.bytes64 = i2329[1]
  i2328.data = i2329[2]
  return i2328
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i2330 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i2331 = data
  i2330.useSafeMode = !!i2331[0]
  i2330.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i2331[1], i2330.safeModeOptions)
  i2330.timeScale = i2331[2]
  i2330.unscaledTimeScale = i2331[3]
  i2330.useSmoothDeltaTime = !!i2331[4]
  i2330.maxSmoothUnscaledTime = i2331[5]
  i2330.rewindCallbackMode = i2331[6]
  i2330.showUnityEditorReport = !!i2331[7]
  i2330.logBehaviour = i2331[8]
  i2330.drawGizmos = !!i2331[9]
  i2330.defaultRecyclable = !!i2331[10]
  i2330.defaultAutoPlay = i2331[11]
  i2330.defaultUpdateType = i2331[12]
  i2330.defaultTimeScaleIndependent = !!i2331[13]
  i2330.defaultEaseType = i2331[14]
  i2330.defaultEaseOvershootOrAmplitude = i2331[15]
  i2330.defaultEasePeriod = i2331[16]
  i2330.defaultAutoKill = !!i2331[17]
  i2330.defaultLoopType = i2331[18]
  i2330.debugMode = !!i2331[19]
  i2330.debugStoreTargetId = !!i2331[20]
  i2330.showPreviewPanel = !!i2331[21]
  i2330.storeSettingsLocation = i2331[22]
  i2330.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i2331[23], i2330.modules)
  i2330.createASMDEF = !!i2331[24]
  i2330.showPlayingTweens = !!i2331[25]
  i2330.showPausedTweens = !!i2331[26]
  return i2330
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i2332 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i2333 = data
  i2332.logBehaviour = i2333[0]
  i2332.nestedTweenFailureBehaviour = i2333[1]
  return i2332
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i2334 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i2335 = data
  i2334.showPanel = !!i2335[0]
  i2334.audioEnabled = !!i2335[1]
  i2334.physicsEnabled = !!i2335[2]
  i2334.physics2DEnabled = !!i2335[3]
  i2334.spriteEnabled = !!i2335[4]
  i2334.uiEnabled = !!i2335[5]
  i2334.uiToolkitEnabled = !!i2335[6]
  i2334.textMeshProEnabled = !!i2335[7]
  i2334.tk2DEnabled = !!i2335[8]
  i2334.deAudioEnabled = !!i2335[9]
  i2334.deUnityExtendedEnabled = !!i2335[10]
  i2334.epoOutlineEnabled = !!i2335[11]
  return i2334
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i2336 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i2337 = data
  i2336.normalStyle = i2337[0]
  i2336.normalSpacingOffset = i2337[1]
  i2336.boldStyle = i2337[2]
  i2336.boldSpacing = i2337[3]
  i2336.italicStyle = i2337[4]
  i2336.tabSize = i2337[5]
  request.r(i2337[6], i2337[7], 0, i2336, 'atlas')
  i2336.m_SourceFontFileGUID = i2337[8]
  i2336.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i2337[9], i2336.m_CreationSettings)
  request.r(i2337[10], i2337[11], 0, i2336, 'm_SourceFontFile')
  i2336.m_SourceFontFilePath = i2337[12]
  i2336.m_AtlasPopulationMode = i2337[13]
  i2336.InternalDynamicOS = !!i2337[14]
  var i2339 = i2337[15]
  var i2338 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i2339.length; i += 1) {
    i2338.add(request.d('UnityEngine.TextCore.Glyph', i2339[i + 0]));
  }
  i2336.m_GlyphTable = i2338
  var i2341 = i2337[16]
  var i2340 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i2341.length; i += 1) {
    i2340.add(request.d('TMPro.TMP_Character', i2341[i + 0]));
  }
  i2336.m_CharacterTable = i2340
  var i2343 = i2337[17]
  var i2342 = []
  for(var i = 0; i < i2343.length; i += 2) {
  request.r(i2343[i + 0], i2343[i + 1], 2, i2342, '')
  }
  i2336.m_AtlasTextures = i2342
  i2336.m_AtlasTextureIndex = i2337[18]
  i2336.m_IsMultiAtlasTexturesEnabled = !!i2337[19]
  i2336.m_GetFontFeatures = !!i2337[20]
  i2336.m_ClearDynamicDataOnBuild = !!i2337[21]
  i2336.m_AtlasWidth = i2337[22]
  i2336.m_AtlasHeight = i2337[23]
  i2336.m_AtlasPadding = i2337[24]
  i2336.m_AtlasRenderMode = i2337[25]
  var i2345 = i2337[26]
  var i2344 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2345.length; i += 1) {
    i2344.add(request.d('UnityEngine.TextCore.GlyphRect', i2345[i + 0]));
  }
  i2336.m_UsedGlyphRects = i2344
  var i2347 = i2337[27]
  var i2346 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2347.length; i += 1) {
    i2346.add(request.d('UnityEngine.TextCore.GlyphRect', i2347[i + 0]));
  }
  i2336.m_FreeGlyphRects = i2346
  i2336.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i2337[28], i2336.m_FontFeatureTable)
  i2336.m_ShouldReimportFontFeatures = !!i2337[29]
  var i2349 = i2337[30]
  var i2348 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2349.length; i += 2) {
  request.r(i2349[i + 0], i2349[i + 1], 1, i2348, '')
  }
  i2336.m_FallbackFontAssetTable = i2348
  var i2351 = i2337[31]
  var i2350 = []
  for(var i = 0; i < i2351.length; i += 1) {
    i2350.push( request.d('TMPro.TMP_FontWeightPair', i2351[i + 0]) );
  }
  i2336.m_FontWeightTable = i2350
  var i2353 = i2337[32]
  var i2352 = []
  for(var i = 0; i < i2353.length; i += 1) {
    i2352.push( request.d('TMPro.TMP_FontWeightPair', i2353[i + 0]) );
  }
  i2336.fontWeights = i2352
  i2336.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i2337[33], i2336.m_fontInfo)
  var i2355 = i2337[34]
  var i2354 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i2355.length; i += 1) {
    i2354.add(request.d('TMPro.TMP_Glyph', i2355[i + 0]));
  }
  i2336.m_glyphInfoList = i2354
  i2336.m_KerningTable = request.d('TMPro.KerningTable', i2337[35], i2336.m_KerningTable)
  var i2357 = i2337[36]
  var i2356 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2357.length; i += 2) {
  request.r(i2357[i + 0], i2357[i + 1], 1, i2356, '')
  }
  i2336.fallbackFontAssets = i2356
  i2336.m_Version = i2337[37]
  i2336.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2337[38], i2336.m_FaceInfo)
  request.r(i2337[39], i2337[40], 0, i2336, 'm_Material')
  return i2336
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i2358 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i2359 = data
  i2358.sourceFontFileName = i2359[0]
  i2358.sourceFontFileGUID = i2359[1]
  i2358.faceIndex = i2359[2]
  i2358.pointSizeSamplingMode = i2359[3]
  i2358.pointSize = i2359[4]
  i2358.padding = i2359[5]
  i2358.paddingMode = i2359[6]
  i2358.packingMode = i2359[7]
  i2358.atlasWidth = i2359[8]
  i2358.atlasHeight = i2359[9]
  i2358.characterSetSelectionMode = i2359[10]
  i2358.characterSequence = i2359[11]
  i2358.referencedFontAssetGUID = i2359[12]
  i2358.referencedTextAssetGUID = i2359[13]
  i2358.fontStyle = i2359[14]
  i2358.fontStyleModifier = i2359[15]
  i2358.renderMode = i2359[16]
  i2358.includeFontFeatures = !!i2359[17]
  return i2358
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i2362 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i2363 = data
  i2362.m_Index = i2363[0]
  i2362.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2363[1], i2362.m_Metrics)
  i2362.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2363[2], i2362.m_GlyphRect)
  i2362.m_Scale = i2363[3]
  i2362.m_AtlasIndex = i2363[4]
  i2362.m_ClassDefinitionType = i2363[5]
  return i2362
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i2366 = root || request.c( 'TMPro.TMP_Character' )
  var i2367 = data
  i2366.m_ElementType = i2367[0]
  i2366.m_Unicode = i2367[1]
  i2366.m_GlyphIndex = i2367[2]
  i2366.m_Scale = i2367[3]
  return i2366
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i2372 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i2373 = data
  i2372.m_X = i2373[0]
  i2372.m_Y = i2373[1]
  i2372.m_Width = i2373[2]
  i2372.m_Height = i2373[3]
  return i2372
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i2374 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i2375 = data
  var i2377 = i2375[0]
  var i2376 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i2377.length; i += 1) {
    i2376.add(request.d('TMPro.MultipleSubstitutionRecord', i2377[i + 0]));
  }
  i2374.m_MultipleSubstitutionRecords = i2376
  var i2379 = i2375[1]
  var i2378 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i2379.length; i += 1) {
    i2378.add(request.d('TMPro.LigatureSubstitutionRecord', i2379[i + 0]));
  }
  i2374.m_LigatureSubstitutionRecords = i2378
  var i2381 = i2375[2]
  var i2380 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i2381.length; i += 1) {
    i2380.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i2381[i + 0]));
  }
  i2374.m_GlyphPairAdjustmentRecords = i2380
  var i2383 = i2375[3]
  var i2382 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i2383.length; i += 1) {
    i2382.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i2383[i + 0]));
  }
  i2374.m_MarkToBaseAdjustmentRecords = i2382
  var i2385 = i2375[4]
  var i2384 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i2385.length; i += 1) {
    i2384.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i2385[i + 0]));
  }
  i2374.m_MarkToMarkAdjustmentRecords = i2384
  return i2374
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i2388 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i2389 = data
  i2388.m_TargetGlyphID = i2389[0]
  i2388.m_SubstituteGlyphIDs = i2389[1]
  return i2388
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i2392 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i2393 = data
  i2392.m_ComponentGlyphIDs = i2393[0]
  i2392.m_LigatureGlyphID = i2393[1]
  return i2392
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i2396 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i2397 = data
  i2396.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i2397[0], i2396.m_FirstAdjustmentRecord)
  i2396.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i2397[1], i2396.m_SecondAdjustmentRecord)
  i2396.m_FeatureLookupFlags = i2397[2]
  return i2396
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i2398 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i2399 = data
  i2398.m_GlyphIndex = i2399[0]
  i2398.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i2399[1], i2398.m_GlyphValueRecord)
  return i2398
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i2400 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i2401 = data
  i2400.m_XPlacement = i2401[0]
  i2400.m_YPlacement = i2401[1]
  i2400.m_XAdvance = i2401[2]
  i2400.m_YAdvance = i2401[3]
  return i2400
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i2404 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i2405 = data
  i2404.m_BaseGlyphID = i2405[0]
  i2404.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i2405[1], i2404.m_BaseGlyphAnchorPoint)
  i2404.m_MarkGlyphID = i2405[2]
  i2404.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i2405[3], i2404.m_MarkPositionAdjustment)
  return i2404
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i2408 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i2409 = data
  i2408.m_BaseMarkGlyphID = i2409[0]
  i2408.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i2409[1], i2408.m_BaseMarkGlyphAnchorPoint)
  i2408.m_CombiningMarkGlyphID = i2409[2]
  i2408.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i2409[3], i2408.m_CombiningMarkPositionAdjustment)
  return i2408
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i2414 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i2415 = data
  request.r(i2415[0], i2415[1], 0, i2414, 'regularTypeface')
  request.r(i2415[2], i2415[3], 0, i2414, 'italicTypeface')
  return i2414
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i2416 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i2417 = data
  i2416.Name = i2417[0]
  i2416.PointSize = i2417[1]
  i2416.Scale = i2417[2]
  i2416.CharacterCount = i2417[3]
  i2416.LineHeight = i2417[4]
  i2416.Baseline = i2417[5]
  i2416.Ascender = i2417[6]
  i2416.CapHeight = i2417[7]
  i2416.Descender = i2417[8]
  i2416.CenterLine = i2417[9]
  i2416.SuperscriptOffset = i2417[10]
  i2416.SubscriptOffset = i2417[11]
  i2416.SubSize = i2417[12]
  i2416.Underline = i2417[13]
  i2416.UnderlineThickness = i2417[14]
  i2416.strikethrough = i2417[15]
  i2416.strikethroughThickness = i2417[16]
  i2416.TabWidth = i2417[17]
  i2416.Padding = i2417[18]
  i2416.AtlasWidth = i2417[19]
  i2416.AtlasHeight = i2417[20]
  return i2416
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i2420 = root || request.c( 'TMPro.TMP_Glyph' )
  var i2421 = data
  i2420.id = i2421[0]
  i2420.x = i2421[1]
  i2420.y = i2421[2]
  i2420.width = i2421[3]
  i2420.height = i2421[4]
  i2420.xOffset = i2421[5]
  i2420.yOffset = i2421[6]
  i2420.xAdvance = i2421[7]
  i2420.scale = i2421[8]
  return i2420
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i2422 = root || request.c( 'TMPro.KerningTable' )
  var i2423 = data
  var i2425 = i2423[0]
  var i2424 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i2425.length; i += 1) {
    i2424.add(request.d('TMPro.KerningPair', i2425[i + 0]));
  }
  i2422.kerningPairs = i2424
  return i2422
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i2428 = root || request.c( 'TMPro.KerningPair' )
  var i2429 = data
  i2428.xOffset = i2429[0]
  i2428.m_FirstGlyph = i2429[1]
  i2428.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2429[2], i2428.m_FirstGlyphAdjustments)
  i2428.m_SecondGlyph = i2429[3]
  i2428.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2429[4], i2428.m_SecondGlyphAdjustments)
  i2428.m_IgnoreSpacingAdjustments = !!i2429[5]
  return i2428
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i2430 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i2431 = data
  i2430.m_FaceIndex = i2431[0]
  i2430.m_FamilyName = i2431[1]
  i2430.m_StyleName = i2431[2]
  i2430.m_PointSize = i2431[3]
  i2430.m_Scale = i2431[4]
  i2430.m_UnitsPerEM = i2431[5]
  i2430.m_LineHeight = i2431[6]
  i2430.m_AscentLine = i2431[7]
  i2430.m_CapLine = i2431[8]
  i2430.m_MeanLine = i2431[9]
  i2430.m_Baseline = i2431[10]
  i2430.m_DescentLine = i2431[11]
  i2430.m_SuperscriptOffset = i2431[12]
  i2430.m_SuperscriptSize = i2431[13]
  i2430.m_SubscriptOffset = i2431[14]
  i2430.m_SubscriptSize = i2431[15]
  i2430.m_UnderlineOffset = i2431[16]
  i2430.m_UnderlineThickness = i2431[17]
  i2430.m_StrikethroughOffset = i2431[18]
  i2430.m_StrikethroughThickness = i2431[19]
  i2430.m_TabWidth = i2431[20]
  return i2430
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i2432 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i2433 = data
  i2432.m_Width = i2433[0]
  i2432.m_Height = i2433[1]
  i2432.m_HorizontalBearingX = i2433[2]
  i2432.m_HorizontalBearingY = i2433[3]
  i2432.m_HorizontalAdvance = i2433[4]
  return i2432
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i2434 = root || request.c( 'TMPro.TMP_Settings' )
  var i2435 = data
  i2434.assetVersion = i2435[0]
  i2434.m_TextWrappingMode = i2435[1]
  i2434.m_enableKerning = !!i2435[2]
  var i2437 = i2435[3]
  var i2436 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i2437.length; i += 1) {
    i2436.add(i2437[i + 0]);
  }
  i2434.m_ActiveFontFeatures = i2436
  i2434.m_enableExtraPadding = !!i2435[4]
  i2434.m_enableTintAllSprites = !!i2435[5]
  i2434.m_enableParseEscapeCharacters = !!i2435[6]
  i2434.m_EnableRaycastTarget = !!i2435[7]
  i2434.m_GetFontFeaturesAtRuntime = !!i2435[8]
  i2434.m_missingGlyphCharacter = i2435[9]
  i2434.m_ClearDynamicDataOnBuild = !!i2435[10]
  i2434.m_warningsDisabled = !!i2435[11]
  request.r(i2435[12], i2435[13], 0, i2434, 'm_defaultFontAsset')
  i2434.m_defaultFontAssetPath = i2435[14]
  i2434.m_defaultFontSize = i2435[15]
  i2434.m_defaultAutoSizeMinRatio = i2435[16]
  i2434.m_defaultAutoSizeMaxRatio = i2435[17]
  i2434.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i2435[18], i2435[19] )
  i2434.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i2435[20], i2435[21] )
  i2434.m_autoSizeTextContainer = !!i2435[22]
  i2434.m_IsTextObjectScaleStatic = !!i2435[23]
  var i2439 = i2435[24]
  var i2438 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2439.length; i += 2) {
  request.r(i2439[i + 0], i2439[i + 1], 1, i2438, '')
  }
  i2434.m_fallbackFontAssets = i2438
  i2434.m_matchMaterialPreset = !!i2435[25]
  i2434.m_HideSubTextObjects = !!i2435[26]
  request.r(i2435[27], i2435[28], 0, i2434, 'm_defaultSpriteAsset')
  i2434.m_defaultSpriteAssetPath = i2435[29]
  i2434.m_enableEmojiSupport = !!i2435[30]
  i2434.m_MissingCharacterSpriteUnicode = i2435[31]
  var i2441 = i2435[32]
  var i2440 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i2441.length; i += 2) {
  request.r(i2441[i + 0], i2441[i + 1], 1, i2440, '')
  }
  i2434.m_EmojiFallbackTextAssets = i2440
  i2434.m_defaultColorGradientPresetsPath = i2435[33]
  request.r(i2435[34], i2435[35], 0, i2434, 'm_defaultStyleSheet')
  i2434.m_StyleSheetsResourcePath = i2435[36]
  request.r(i2435[37], i2435[38], 0, i2434, 'm_leadingCharacters')
  request.r(i2435[39], i2435[40], 0, i2434, 'm_followingCharacters')
  i2434.m_UseModernHangulLineBreakingRules = !!i2435[41]
  return i2434
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i2446 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i2447 = data
  request.r(i2447[0], i2447[1], 0, i2446, 'spriteSheet')
  var i2449 = i2447[2]
  var i2448 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i2449.length; i += 1) {
    i2448.add(request.d('TMPro.TMP_Sprite', i2449[i + 0]));
  }
  i2446.spriteInfoList = i2448
  var i2451 = i2447[3]
  var i2450 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i2451.length; i += 2) {
  request.r(i2451[i + 0], i2451[i + 1], 1, i2450, '')
  }
  i2446.fallbackSpriteAssets = i2450
  var i2453 = i2447[4]
  var i2452 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i2453.length; i += 1) {
    i2452.add(request.d('TMPro.TMP_SpriteCharacter', i2453[i + 0]));
  }
  i2446.m_SpriteCharacterTable = i2452
  var i2455 = i2447[5]
  var i2454 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i2455.length; i += 1) {
    i2454.add(request.d('TMPro.TMP_SpriteGlyph', i2455[i + 0]));
  }
  i2446.m_GlyphTable = i2454
  i2446.m_Version = i2447[6]
  i2446.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2447[7], i2446.m_FaceInfo)
  request.r(i2447[8], i2447[9], 0, i2446, 'm_Material')
  return i2446
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i2458 = root || request.c( 'TMPro.TMP_Sprite' )
  var i2459 = data
  i2458.name = i2459[0]
  i2458.hashCode = i2459[1]
  i2458.unicode = i2459[2]
  i2458.pivot = new pc.Vec2( i2459[3], i2459[4] )
  request.r(i2459[5], i2459[6], 0, i2458, 'sprite')
  i2458.id = i2459[7]
  i2458.x = i2459[8]
  i2458.y = i2459[9]
  i2458.width = i2459[10]
  i2458.height = i2459[11]
  i2458.xOffset = i2459[12]
  i2458.yOffset = i2459[13]
  i2458.xAdvance = i2459[14]
  i2458.scale = i2459[15]
  return i2458
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i2464 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i2465 = data
  i2464.m_Name = i2465[0]
  i2464.m_ElementType = i2465[1]
  i2464.m_Unicode = i2465[2]
  i2464.m_GlyphIndex = i2465[3]
  i2464.m_Scale = i2465[4]
  return i2464
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i2468 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i2469 = data
  request.r(i2469[0], i2469[1], 0, i2468, 'sprite')
  i2468.m_Index = i2469[2]
  i2468.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2469[3], i2468.m_Metrics)
  i2468.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2469[4], i2468.m_GlyphRect)
  i2468.m_Scale = i2469[5]
  i2468.m_AtlasIndex = i2469[6]
  i2468.m_ClassDefinitionType = i2469[7]
  return i2468
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i2470 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i2471 = data
  var i2473 = i2471[0]
  var i2472 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i2473.length; i += 1) {
    i2472.add(request.d('TMPro.TMP_Style', i2473[i + 0]));
  }
  i2470.m_StyleList = i2472
  return i2470
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i2476 = root || request.c( 'TMPro.TMP_Style' )
  var i2477 = data
  i2476.m_Name = i2477[0]
  i2476.m_HashCode = i2477[1]
  i2476.m_OpeningDefinition = i2477[2]
  i2476.m_ClosingDefinition = i2477[3]
  i2476.m_OpeningTagArray = i2477[4]
  i2476.m_ClosingTagArray = i2477[5]
  return i2476
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i2478 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i2479 = data
  var i2481 = i2479[0]
  var i2480 = []
  for(var i = 0; i < i2481.length; i += 1) {
    i2480.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i2481[i + 0]) );
  }
  i2478.files = i2480
  i2478.componentToPrefabIds = i2479[1]
  return i2478
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i2484 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i2485 = data
  i2484.path = i2485[0]
  request.r(i2485[1], i2485[2], 0, i2484, 'unityObject')
  return i2484
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i2486 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i2487 = data
  var i2489 = i2487[0]
  var i2488 = []
  for(var i = 0; i < i2489.length; i += 1) {
    i2488.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i2489[i + 0]) );
  }
  i2486.scriptsExecutionOrder = i2488
  var i2491 = i2487[1]
  var i2490 = []
  for(var i = 0; i < i2491.length; i += 1) {
    i2490.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i2491[i + 0]) );
  }
  i2486.sortingLayers = i2490
  var i2493 = i2487[2]
  var i2492 = []
  for(var i = 0; i < i2493.length; i += 1) {
    i2492.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i2493[i + 0]) );
  }
  i2486.cullingLayers = i2492
  i2486.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i2487[3], i2486.timeSettings)
  i2486.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i2487[4], i2486.physicsSettings)
  i2486.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i2487[5], i2486.physics2DSettings)
  i2486.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2487[6], i2486.qualitySettings)
  i2486.enableRealtimeShadows = !!i2487[7]
  i2486.enableAutoInstancing = !!i2487[8]
  i2486.enableStaticBatching = !!i2487[9]
  i2486.enableDynamicBatching = !!i2487[10]
  i2486.lightmapEncodingQuality = i2487[11]
  i2486.desiredColorSpace = i2487[12]
  var i2495 = i2487[13]
  var i2494 = []
  for(var i = 0; i < i2495.length; i += 1) {
    i2494.push( i2495[i + 0] );
  }
  i2486.allTags = i2494
  return i2486
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i2498 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i2499 = data
  i2498.name = i2499[0]
  i2498.value = i2499[1]
  return i2498
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i2502 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i2503 = data
  i2502.id = i2503[0]
  i2502.name = i2503[1]
  i2502.value = i2503[2]
  return i2502
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i2506 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i2507 = data
  i2506.id = i2507[0]
  i2506.name = i2507[1]
  return i2506
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i2508 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i2509 = data
  i2508.fixedDeltaTime = i2509[0]
  i2508.maximumDeltaTime = i2509[1]
  i2508.timeScale = i2509[2]
  i2508.maximumParticleTimestep = i2509[3]
  return i2508
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i2510 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i2511 = data
  i2510.gravity = new pc.Vec3( i2511[0], i2511[1], i2511[2] )
  i2510.defaultSolverIterations = i2511[3]
  i2510.bounceThreshold = i2511[4]
  i2510.autoSyncTransforms = !!i2511[5]
  i2510.autoSimulation = !!i2511[6]
  var i2513 = i2511[7]
  var i2512 = []
  for(var i = 0; i < i2513.length; i += 1) {
    i2512.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i2513[i + 0]) );
  }
  i2510.collisionMatrix = i2512
  return i2510
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i2516 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i2517 = data
  i2516.enabled = !!i2517[0]
  i2516.layerId = i2517[1]
  i2516.otherLayerId = i2517[2]
  return i2516
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i2518 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i2519 = data
  request.r(i2519[0], i2519[1], 0, i2518, 'material')
  i2518.gravity = new pc.Vec2( i2519[2], i2519[3] )
  i2518.positionIterations = i2519[4]
  i2518.velocityIterations = i2519[5]
  i2518.velocityThreshold = i2519[6]
  i2518.maxLinearCorrection = i2519[7]
  i2518.maxAngularCorrection = i2519[8]
  i2518.maxTranslationSpeed = i2519[9]
  i2518.maxRotationSpeed = i2519[10]
  i2518.baumgarteScale = i2519[11]
  i2518.baumgarteTOIScale = i2519[12]
  i2518.timeToSleep = i2519[13]
  i2518.linearSleepTolerance = i2519[14]
  i2518.angularSleepTolerance = i2519[15]
  i2518.defaultContactOffset = i2519[16]
  i2518.autoSimulation = !!i2519[17]
  i2518.queriesHitTriggers = !!i2519[18]
  i2518.queriesStartInColliders = !!i2519[19]
  i2518.callbacksOnDisable = !!i2519[20]
  i2518.reuseCollisionCallbacks = !!i2519[21]
  i2518.autoSyncTransforms = !!i2519[22]
  var i2521 = i2519[23]
  var i2520 = []
  for(var i = 0; i < i2521.length; i += 1) {
    i2520.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i2521[i + 0]) );
  }
  i2518.collisionMatrix = i2520
  return i2518
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i2524 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i2525 = data
  i2524.enabled = !!i2525[0]
  i2524.layerId = i2525[1]
  i2524.otherLayerId = i2525[2]
  return i2524
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i2526 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i2527 = data
  var i2529 = i2527[0]
  var i2528 = []
  for(var i = 0; i < i2529.length; i += 1) {
    i2528.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2529[i + 0]) );
  }
  i2526.qualityLevels = i2528
  var i2531 = i2527[1]
  var i2530 = []
  for(var i = 0; i < i2531.length; i += 1) {
    i2530.push( i2531[i + 0] );
  }
  i2526.names = i2530
  i2526.shadows = i2527[2]
  i2526.anisotropicFiltering = i2527[3]
  i2526.antiAliasing = i2527[4]
  i2526.lodBias = i2527[5]
  i2526.shadowCascades = i2527[6]
  i2526.shadowDistance = i2527[7]
  i2526.shadowmaskMode = i2527[8]
  i2526.shadowProjection = i2527[9]
  i2526.shadowResolution = i2527[10]
  i2526.softParticles = !!i2527[11]
  i2526.softVegetation = !!i2527[12]
  i2526.activeColorSpace = i2527[13]
  i2526.desiredColorSpace = i2527[14]
  i2526.masterTextureLimit = i2527[15]
  i2526.maxQueuedFrames = i2527[16]
  i2526.particleRaycastBudget = i2527[17]
  i2526.pixelLightCount = i2527[18]
  i2526.realtimeReflectionProbes = !!i2527[19]
  i2526.shadowCascade2Split = i2527[20]
  i2526.shadowCascade4Split = new pc.Vec3( i2527[21], i2527[22], i2527[23] )
  i2526.streamingMipmapsActive = !!i2527[24]
  i2526.vSyncCount = i2527[25]
  i2526.asyncUploadBufferSize = i2527[26]
  i2526.asyncUploadTimeSlice = i2527[27]
  i2526.billboardsFaceCameraPosition = !!i2527[28]
  i2526.shadowNearPlaneOffset = i2527[29]
  i2526.streamingMipmapsMemoryBudget = i2527[30]
  i2526.maximumLODLevel = i2527[31]
  i2526.streamingMipmapsAddAllCameras = !!i2527[32]
  i2526.streamingMipmapsMaxLevelReduction = i2527[33]
  i2526.streamingMipmapsRenderersPerFrame = i2527[34]
  i2526.resolutionScalingFixedDPIFactor = i2527[35]
  i2526.streamingMipmapsMaxFileIORequests = i2527[36]
  i2526.currentQualityLevel = i2527[37]
  return i2526
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i2536 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i2537 = data
  i2536.weight = i2537[0]
  i2536.vertices = i2537[1]
  i2536.normals = i2537[2]
  i2536.tangents = i2537[3]
  return i2536
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i2538 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i2539 = data
  i2538.m_XCoordinate = i2539[0]
  i2538.m_YCoordinate = i2539[1]
  return i2538
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i2540 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i2541 = data
  i2540.m_XPositionAdjustment = i2541[0]
  i2540.m_YPositionAdjustment = i2541[1]
  return i2540
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i2542 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i2543 = data
  i2542.xPlacement = i2543[0]
  i2542.yPlacement = i2543[1]
  i2542.xAdvance = i2543[2]
  i2542.yAdvance = i2543[3]
  return i2542
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"43":[44],"45":[44],"46":[44],"47":[44],"48":[44],"49":[44],"50":[51],"52":[2],"53":[54],"55":[54],"56":[54],"57":[54],"58":[54],"59":[54],"60":[61],"62":[61],"63":[61],"64":[61],"65":[61],"66":[61],"67":[61],"68":[61],"69":[61],"70":[61],"71":[61],"72":[61],"73":[61],"74":[2],"75":[76],"77":[78],"79":[78],"22":[21],"6":[2],"80":[61],"81":[82],"83":[19],"84":[2],"85":[86],"87":[34],"88":[22],"89":[21],"90":[76,21],"91":[21,25],"92":[21],"93":[25,21],"94":[76],"95":[25,21],"96":[21],"97":[98],"99":[98],"100":[98],"101":[21],"102":[21],"24":[22],"26":[25,21],"103":[21],"7":[22],"104":[21],"105":[21],"106":[21],"107":[21],"108":[21],"109":[21],"110":[21],"111":[21],"112":[21],"113":[25,21],"114":[21],"115":[21],"116":[21],"117":[21],"118":[25,21],"119":[21],"120":[34],"121":[34],"35":[34],"122":[34],"123":[2],"124":[2]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.MonoBehaviour","CameraFollow2D","AutoCameraFit","UnityEngine.UI.CanvasScaler","UnityEngine.Transform","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Mesh","UnityEngine.Material","Ply_SoundManager","UnityEngine.AudioClip","UnityEngine.AudioSource","HaalandGame.HaalandGameManager","UnityEngine.GameObject","UnityEngine.Animator","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.UI.Button","UnityEditor.Animations.AnimatorController","HaalandGame.IconListAnimator","HideOnFirstClick","ScreenHeightPositionAnchor","UnityEngine.BoxCollider","HaalandGame.PlayerSelectable","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_FontAsset","UnityEngine.Font","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","BatStrikeController","SlotTrigger","UnityEngine.BoxCollider2D","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.InputSystem.UI.InputSystemUIInputModule","UnityEngine.InputSystem.UI.TrackedDeviceRaycaster","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.38f1";

Deserializers.productName = "PLY_MiniSoccer";

Deserializers.lunaInitializationTime = "07/15/2026 03:53:54";

Deserializers.lunaDaysRunning = "50.2";

Deserializers.lunaVersion = "7.1.0";

Deserializers.lunaSHA = "cf93782349542fe0b84ad13951a26809f8419628";

Deserializers.creativeName = "PLY_V22";

Deserializers.lunaAppID = "27599";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1735";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4593";

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

Deserializers.buildID = "04d83b31-3745-464c-bf38-e3908b43c724";

Deserializers.runtimeInitializeOnLoadInfos = [[["Unity","Services","Core","Internal","UnityServicesInitializer","EnableServicesInitializationAsync"],["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["DG","Tweening","DOTween","RuntimeOnLoad"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["Unity","Services","Core","Registration","CorePackageInitializer","InitializeOnLoad"],["Unity","Services","Core","Internal","TaskAsyncOperation","SetScheduler"],["Unity","Services","Core","Environments","Client","Scheduler","EngineStateHelper","Init"],["Unity","Services","Core","Environments","Client","Scheduler","ThreadHelper","Init"],["Ua2CoreInitializeCallback","Register"],["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["Unity","AI","Navigation","NavMeshLink","ClearTrackedList"],["Unity","AI","Navigation","NavMeshSurface","ClearNavMeshSurfaces"],["Unity","AI","Navigation","NavMeshModifierVolume","ClearNavMeshModifiers"],["Unity","AI","Navigation","NavMeshModifier","ClearNavMeshModifiers"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["Unity","Services","Core","Internal","UnityServicesInitializer","CreateStaticInstance"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[["Unity","Services","Core","Environments","Client","Http","JsonHelpers","RegisterTypesForAOT"]],[["Unity","Services","Core","UnityThreadUtils","CaptureUnityThreadInfo"],["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

