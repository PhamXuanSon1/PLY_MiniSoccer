var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i1866 = root || request.c( 'UnityEngine.JointSpring' )
  var i1867 = data
  i1866.spring = i1867[0]
  i1866.damper = i1867[1]
  i1866.targetPosition = i1867[2]
  return i1866
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i1868 = root || request.c( 'UnityEngine.JointMotor' )
  var i1869 = data
  i1868.m_TargetVelocity = i1869[0]
  i1868.m_Force = i1869[1]
  i1868.m_FreeSpin = i1869[2]
  return i1868
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i1870 = root || request.c( 'UnityEngine.JointLimits' )
  var i1871 = data
  i1870.m_Min = i1871[0]
  i1870.m_Max = i1871[1]
  i1870.m_Bounciness = i1871[2]
  i1870.m_BounceMinVelocity = i1871[3]
  i1870.m_ContactDistance = i1871[4]
  i1870.minBounce = i1871[5]
  i1870.maxBounce = i1871[6]
  return i1870
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i1872 = root || request.c( 'UnityEngine.JointDrive' )
  var i1873 = data
  i1872.m_PositionSpring = i1873[0]
  i1872.m_PositionDamper = i1873[1]
  i1872.m_MaximumForce = i1873[2]
  i1872.m_UseAcceleration = i1873[3]
  return i1872
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i1874 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i1875 = data
  i1874.m_Spring = i1875[0]
  i1874.m_Damper = i1875[1]
  return i1874
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i1876 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i1877 = data
  i1876.m_Limit = i1877[0]
  i1876.m_Bounciness = i1877[1]
  i1876.m_ContactDistance = i1877[2]
  return i1876
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i1878 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i1879 = data
  i1878.m_ExtremumSlip = i1879[0]
  i1878.m_ExtremumValue = i1879[1]
  i1878.m_AsymptoteSlip = i1879[2]
  i1878.m_AsymptoteValue = i1879[3]
  i1878.m_Stiffness = i1879[4]
  return i1878
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i1880 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i1881 = data
  i1880.m_LowerAngle = i1881[0]
  i1880.m_UpperAngle = i1881[1]
  return i1880
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i1882 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i1883 = data
  i1882.m_MotorSpeed = i1883[0]
  i1882.m_MaximumMotorTorque = i1883[1]
  return i1882
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i1884 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i1885 = data
  i1884.m_DampingRatio = i1885[0]
  i1884.m_Frequency = i1885[1]
  i1884.m_Angle = i1885[2]
  return i1884
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i1886 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i1887 = data
  i1886.m_LowerTranslation = i1887[0]
  i1886.m_UpperTranslation = i1887[1]
  return i1886
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i1888 = root || new pc.UnityMaterial()
  var i1889 = data
  i1888.name = i1889[0]
  request.r(i1889[1], i1889[2], 0, i1888, 'shader')
  i1888.renderQueue = i1889[3]
  i1888.enableInstancing = !!i1889[4]
  var i1891 = i1889[5]
  var i1890 = []
  for(var i = 0; i < i1891.length; i += 1) {
    i1890.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i1891[i + 0]) );
  }
  i1888.floatParameters = i1890
  var i1893 = i1889[6]
  var i1892 = []
  for(var i = 0; i < i1893.length; i += 1) {
    i1892.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i1893[i + 0]) );
  }
  i1888.colorParameters = i1892
  var i1895 = i1889[7]
  var i1894 = []
  for(var i = 0; i < i1895.length; i += 1) {
    i1894.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i1895[i + 0]) );
  }
  i1888.vectorParameters = i1894
  var i1897 = i1889[8]
  var i1896 = []
  for(var i = 0; i < i1897.length; i += 1) {
    i1896.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i1897[i + 0]) );
  }
  i1888.textureParameters = i1896
  var i1899 = i1889[9]
  var i1898 = []
  for(var i = 0; i < i1899.length; i += 1) {
    i1898.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i1899[i + 0]) );
  }
  i1888.materialFlags = i1898
  return i1888
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i1902 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i1903 = data
  i1902.name = i1903[0]
  i1902.value = i1903[1]
  return i1902
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i1906 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i1907 = data
  i1906.name = i1907[0]
  i1906.value = new pc.Color(i1907[1], i1907[2], i1907[3], i1907[4])
  return i1906
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i1910 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i1911 = data
  i1910.name = i1911[0]
  i1910.value = new pc.Vec4( i1911[1], i1911[2], i1911[3], i1911[4] )
  return i1910
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i1914 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i1915 = data
  i1914.name = i1915[0]
  request.r(i1915[1], i1915[2], 0, i1914, 'value')
  return i1914
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i1918 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i1919 = data
  i1918.name = i1919[0]
  i1918.enabled = !!i1919[1]
  return i1918
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i1920 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i1921 = data
  i1920.name = i1921[0]
  i1920.width = i1921[1]
  i1920.height = i1921[2]
  i1920.mipmapCount = i1921[3]
  i1920.anisoLevel = i1921[4]
  i1920.filterMode = i1921[5]
  i1920.hdr = !!i1921[6]
  i1920.format = i1921[7]
  i1920.wrapMode = i1921[8]
  i1920.alphaIsTransparency = !!i1921[9]
  i1920.alphaSource = i1921[10]
  i1920.graphicsFormat = i1921[11]
  i1920.sRGBTexture = !!i1921[12]
  i1920.desiredColorSpace = i1921[13]
  i1920.wrapU = i1921[14]
  i1920.wrapV = i1921[15]
  return i1920
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i1922 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i1923 = data
  i1922.name = i1923[0]
  i1922.halfPrecision = !!i1923[1]
  i1922.useSimplification = !!i1923[2]
  i1922.useUInt32IndexFormat = !!i1923[3]
  i1922.vertexCount = i1923[4]
  i1922.aabb = i1923[5]
  var i1925 = i1923[6]
  var i1924 = []
  for(var i = 0; i < i1925.length; i += 1) {
    i1924.push( !!i1925[i + 0] );
  }
  i1922.streams = i1924
  i1922.vertices = i1923[7]
  var i1927 = i1923[8]
  var i1926 = []
  for(var i = 0; i < i1927.length; i += 1) {
    i1926.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i1927[i + 0]) );
  }
  i1922.subMeshes = i1926
  var i1929 = i1923[9]
  var i1928 = []
  for(var i = 0; i < i1929.length; i += 16) {
    i1928.push( new pc.Mat4().setData(i1929[i + 0], i1929[i + 1], i1929[i + 2], i1929[i + 3],  i1929[i + 4], i1929[i + 5], i1929[i + 6], i1929[i + 7],  i1929[i + 8], i1929[i + 9], i1929[i + 10], i1929[i + 11],  i1929[i + 12], i1929[i + 13], i1929[i + 14], i1929[i + 15]) );
  }
  i1922.bindposes = i1928
  var i1931 = i1923[10]
  var i1930 = []
  for(var i = 0; i < i1931.length; i += 1) {
    i1930.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i1931[i + 0]) );
  }
  i1922.blendShapes = i1930
  return i1922
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i1936 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i1937 = data
  i1936.triangles = i1937[0]
  return i1936
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i1942 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i1943 = data
  i1942.name = i1943[0]
  var i1945 = i1943[1]
  var i1944 = []
  for(var i = 0; i < i1945.length; i += 1) {
    i1944.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i1945[i + 0]) );
  }
  i1942.frames = i1944
  return i1942
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i1946 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i1947 = data
  i1946.name = i1947[0]
  i1946.index = i1947[1]
  i1946.startup = !!i1947[2]
  return i1946
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1948 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1949 = data
  i1948.aspect = i1949[0]
  i1948.orthographic = !!i1949[1]
  i1948.orthographicSize = i1949[2]
  i1948.backgroundColor = new pc.Color(i1949[3], i1949[4], i1949[5], i1949[6])
  i1948.nearClipPlane = i1949[7]
  i1948.farClipPlane = i1949[8]
  i1948.fieldOfView = i1949[9]
  i1948.depth = i1949[10]
  i1948.clearFlags = i1949[11]
  i1948.cullingMask = i1949[12]
  i1948.rect = i1949[13]
  request.r(i1949[14], i1949[15], 0, i1948, 'targetTexture')
  i1948.usePhysicalProperties = !!i1949[16]
  i1948.focalLength = i1949[17]
  i1948.sensorSize = new pc.Vec2( i1949[18], i1949[19] )
  i1948.lensShift = new pc.Vec2( i1949[20], i1949[21] )
  i1948.gateFit = i1949[22]
  i1948.commandBufferCount = i1949[23]
  i1948.cameraType = i1949[24]
  i1948.enabled = !!i1949[25]
  return i1948
}

Deserializers["CameraFollow2D"] = function (request, data, root) {
  var i1950 = root || request.c( 'CameraFollow2D' )
  var i1951 = data
  request.r(i1951[0], i1951[1], 0, i1950, 'target')
  i1950.smoothSpeed = i1951[2]
  i1950.offset = new pc.Vec3( i1951[3], i1951[4], i1951[5] )
  i1950.followY = !!i1951[6]
  return i1950
}

Deserializers["AutoCameraFit"] = function (request, data, root) {
  var i1952 = root || request.c( 'AutoCameraFit' )
  var i1953 = data
  request.r(i1953[0], i1953[1], 0, i1952, 'tallScreenObject')
  i1952.tallScreenRatioThreshold = i1953[2]
  i1952.tallScreenYOffset = i1953[3]
  request.r(i1953[4], i1953[5], 0, i1952, 'canvasBtn')
  request.r(i1953[6], i1953[7], 0, i1952, 'targetArea')
  i1952.paddingLandscape = i1953[8]
  i1952.paddingPortrait = i1953[9]
  i1952.extraPaddingSmallScreen = i1953[10]
  i1952.smallScreenThreshold = i1953[11]
  i1952.autoUpdateOnResize = !!i1953[12]
  i1952.adjustInEditMode = !!i1953[13]
  return i1952
}

Deserializers["MoveBetweenPoints"] = function (request, data, root) {
  var i1954 = root || request.c( 'MoveBetweenPoints' )
  var i1955 = data
  request.r(i1955[0], i1955[1], 0, i1954, 'pointA')
  request.r(i1955[2], i1955[3], 0, i1954, 'pointB')
  i1954.duration = i1955[4]
  return i1954
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i1956 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i1957 = data
  i1956.color = new pc.Color(i1957[0], i1957[1], i1957[2], i1957[3])
  request.r(i1957[4], i1957[5], 0, i1956, 'sprite')
  i1956.flipX = !!i1957[6]
  i1956.flipY = !!i1957[7]
  i1956.drawMode = i1957[8]
  i1956.size = new pc.Vec2( i1957[9], i1957[10] )
  i1956.tileMode = i1957[11]
  i1956.adaptiveModeThreshold = i1957[12]
  i1956.maskInteraction = i1957[13]
  i1956.spriteSortPoint = i1957[14]
  i1956.enabled = !!i1957[15]
  request.r(i1957[16], i1957[17], 0, i1956, 'sharedMaterial')
  var i1959 = i1957[18]
  var i1958 = []
  for(var i = 0; i < i1959.length; i += 2) {
  request.r(i1959[i + 0], i1959[i + 1], 2, i1958, '')
  }
  i1956.sharedMaterials = i1958
  i1956.receiveShadows = !!i1957[19]
  i1956.shadowCastingMode = i1957[20]
  i1956.sortingLayerID = i1957[21]
  i1956.sortingOrder = i1957[22]
  i1956.lightmapIndex = i1957[23]
  i1956.lightmapSceneIndex = i1957[24]
  i1956.lightmapScaleOffset = new pc.Vec4( i1957[25], i1957[26], i1957[27], i1957[28] )
  i1956.lightProbeUsage = i1957[29]
  i1956.reflectionProbeUsage = i1957[30]
  return i1956
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i1962 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i1963 = data
  i1962.name = i1963[0]
  i1962.tagId = i1963[1]
  i1962.enabled = !!i1963[2]
  i1962.isStatic = !!i1963[3]
  i1962.layer = i1963[4]
  return i1962
}

Deserializers["ScreenHeightPositionAnchor"] = function (request, data, root) {
  var i1964 = root || request.c( 'ScreenHeightPositionAnchor' )
  var i1965 = data
  request.r(i1965[0], i1965[1], 0, i1964, 'anchorPoint')
  request.r(i1965[2], i1965[3], 0, i1964, 'targetCamera')
  i1964.viewportYRatio = i1965[4]
  i1964.alignOnStart = !!i1965[5]
  i1964.alignOnEnable = !!i1965[6]
  i1964.realignOnScreenSizeChanged = !!i1965[7]
  i1964.drawGizmos = !!i1965[8]
  i1964.targetLineColor = new pc.Color(i1965[9], i1965[10], i1965[11], i1965[12])
  i1964.anchorColor = new pc.Color(i1965[13], i1965[14], i1965[15], i1965[16])
  return i1964
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i1966 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i1967 = data
  i1966.center = new pc.Vec3( i1967[0], i1967[1], i1967[2] )
  i1966.size = new pc.Vec3( i1967[3], i1967[4], i1967[5] )
  i1966.enabled = !!i1967[6]
  i1966.isTrigger = !!i1967[7]
  request.r(i1967[8], i1967[9], 0, i1966, 'material')
  return i1966
}

Deserializers["ClickToStore"] = function (request, data, root) {
  var i1968 = root || request.c( 'ClickToStore' )
  var i1969 = data
  return i1968
}

Deserializers["Ply_SoundManager"] = function (request, data, root) {
  var i1970 = root || request.c( 'Ply_SoundManager' )
  var i1971 = data
  i1970.fxAudio = request.d('FxAudio', i1971[0], i1970.fxAudio)
  request.r(i1971[1], i1971[2], 0, i1970, 'bgm1')
  return i1970
}

Deserializers["FxAudio"] = function (request, data, root) {
  var i1972 = root || request.c( 'FxAudio' )
  var i1973 = data
  i1972.Angry = request.d('SoundData', i1973[0], i1972.Angry)
  i1972.Cry = request.d('SoundData', i1973[1], i1972.Cry)
  i1972.Hehe = request.d('SoundData', i1973[2], i1972.Hehe)
  i1972.Huh = request.d('SoundData', i1973[3], i1972.Huh)
  i1972.RoarTiger = request.d('SoundData', i1973[4], i1972.RoarTiger)
  i1972.Siuu = request.d('SoundData', i1973[5], i1972.Siuu)
  i1972.True = request.d('SoundData', i1973[6], i1972.True)
  i1972.False = request.d('SoundData', i1973[7], i1972.False)
  return i1972
}

Deserializers["SoundData"] = function (request, data, root) {
  var i1974 = root || request.c( 'SoundData' )
  var i1975 = data
  request.r(i1975[0], i1975[1], 0, i1974, 'clip')
  i1974.repeatCount = i1975[2]
  return i1974
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i1976 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i1977 = data
  request.r(i1977[0], i1977[1], 0, i1976, 'clip')
  request.r(i1977[2], i1977[3], 0, i1976, 'outputAudioMixerGroup')
  i1976.playOnAwake = !!i1977[4]
  i1976.loop = !!i1977[5]
  i1976.time = i1977[6]
  i1976.volume = i1977[7]
  i1976.pitch = i1977[8]
  i1976.enabled = !!i1977[9]
  return i1976
}

Deserializers["ItemSequenceManager"] = function (request, data, root) {
  var i1978 = root || request.c( 'ItemSequenceManager' )
  var i1979 = data
  var i1981 = i1979[0]
  var i1980 = new (System.Collections.Generic.List$1(Bridge.ns('DraggableItem')))
  for(var i = 0; i < i1981.length; i += 2) {
  request.r(i1981[i + 0], i1981[i + 1], 1, i1980, '')
  }
  i1978.itemList = i1980
  request.r(i1979[1], i1979[2], 0, i1978, 'spawnPoint')
  request.r(i1979[3], i1979[4], 0, i1978, 'targetPoint')
  i1978.moveDuration = i1979[5]
  i1978.moveEase = i1979[6]
  i1978.delayBetweenItems = i1979[7]
  var i1983 = i1979[8]
  var i1982 = new (System.Collections.Generic.List$1(Bridge.ns('CharacterDropZone')))
  for(var i = 0; i < i1983.length; i += 2) {
  request.r(i1983[i + 0], i1983[i + 1], 1, i1982, '')
  }
  i1978.characterList = i1982
  i1978.isWin = !!i1979[9]
  request.r(i1979[10], i1979[11], 0, i1978, 'winObject')
  i1978.winFxType = i1979[12]
  request.r(i1979[13], i1979[14], 0, i1978, 'loseObject')
  i1978.loseFxType = i1979[15]
  i1978.resultTextDelay = i1979[16]
  request.r(i1979[17], i1979[18], 0, i1978, 'gameplayObject')
  request.r(i1979[19], i1979[20], 0, i1978, 'endcardObject')
  request.r(i1979[21], i1979[22], 0, i1978, 'objectToHideOnFirstDrag')
  i1978.endcardDelay = i1979[23]
  i1978.isFailedMode = !!i1979[24]
  return i1978
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i1988 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i1989 = data
  i1988.pivot = new pc.Vec2( i1989[0], i1989[1] )
  i1988.anchorMin = new pc.Vec2( i1989[2], i1989[3] )
  i1988.anchorMax = new pc.Vec2( i1989[4], i1989[5] )
  i1988.sizeDelta = new pc.Vec2( i1989[6], i1989[7] )
  i1988.anchoredPosition3D = new pc.Vec3( i1989[8], i1989[9], i1989[10] )
  i1988.rotation = new pc.Quat(i1989[11], i1989[12], i1989[13], i1989[14])
  i1988.scale = new pc.Vec3( i1989[15], i1989[16], i1989[17] )
  return i1988
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i1990 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i1991 = data
  i1990.planeDistance = i1991[0]
  i1990.referencePixelsPerUnit = i1991[1]
  i1990.isFallbackOverlay = !!i1991[2]
  i1990.renderMode = i1991[3]
  i1990.renderOrder = i1991[4]
  i1990.sortingLayerName = i1991[5]
  i1990.sortingOrder = i1991[6]
  i1990.scaleFactor = i1991[7]
  request.r(i1991[8], i1991[9], 0, i1990, 'worldCamera')
  i1990.overrideSorting = !!i1991[10]
  i1990.pixelPerfect = !!i1991[11]
  i1990.targetDisplay = i1991[12]
  i1990.overridePixelPerfect = !!i1991[13]
  i1990.enabled = !!i1991[14]
  return i1990
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i1992 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i1993 = data
  i1992.m_UiScaleMode = i1993[0]
  i1992.m_ReferencePixelsPerUnit = i1993[1]
  i1992.m_ScaleFactor = i1993[2]
  i1992.m_ReferenceResolution = new pc.Vec2( i1993[3], i1993[4] )
  i1992.m_ScreenMatchMode = i1993[5]
  i1992.m_MatchWidthOrHeight = i1993[6]
  i1992.m_PhysicalUnit = i1993[7]
  i1992.m_FallbackScreenDPI = i1993[8]
  i1992.m_DefaultSpriteDPI = i1993[9]
  i1992.m_DynamicPixelsPerUnit = i1993[10]
  i1992.m_PresetInfoIsWorld = !!i1993[11]
  return i1992
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i1994 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i1995 = data
  i1994.m_IgnoreReversedGraphics = !!i1995[0]
  i1994.m_BlockingObjects = i1995[1]
  i1994.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i1995[2] )
  return i1994
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i1996 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i1997 = data
  i1996.cullTransparentMesh = !!i1997[0]
  return i1996
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i1998 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i1999 = data
  i1998.m_hasFontAssetChanged = !!i1999[0]
  request.r(i1999[1], i1999[2], 0, i1998, 'm_baseMaterial')
  i1998.m_maskOffset = new pc.Vec4( i1999[3], i1999[4], i1999[5], i1999[6] )
  i1998.m_text = i1999[7]
  i1998.m_isRightToLeft = !!i1999[8]
  request.r(i1999[9], i1999[10], 0, i1998, 'm_fontAsset')
  request.r(i1999[11], i1999[12], 0, i1998, 'm_sharedMaterial')
  var i2001 = i1999[13]
  var i2000 = []
  for(var i = 0; i < i2001.length; i += 2) {
  request.r(i2001[i + 0], i2001[i + 1], 2, i2000, '')
  }
  i1998.m_fontSharedMaterials = i2000
  request.r(i1999[14], i1999[15], 0, i1998, 'm_fontMaterial')
  var i2003 = i1999[16]
  var i2002 = []
  for(var i = 0; i < i2003.length; i += 2) {
  request.r(i2003[i + 0], i2003[i + 1], 2, i2002, '')
  }
  i1998.m_fontMaterials = i2002
  i1998.m_fontColor32 = UnityEngine.Color32.ConstructColor(i1999[17], i1999[18], i1999[19], i1999[20])
  i1998.m_fontColor = new pc.Color(i1999[21], i1999[22], i1999[23], i1999[24])
  i1998.m_enableVertexGradient = !!i1999[25]
  i1998.m_colorMode = i1999[26]
  i1998.m_fontColorGradient = request.d('TMPro.VertexGradient', i1999[27], i1998.m_fontColorGradient)
  request.r(i1999[28], i1999[29], 0, i1998, 'm_fontColorGradientPreset')
  request.r(i1999[30], i1999[31], 0, i1998, 'm_spriteAsset')
  i1998.m_tintAllSprites = !!i1999[32]
  request.r(i1999[33], i1999[34], 0, i1998, 'm_StyleSheet')
  i1998.m_TextStyleHashCode = i1999[35]
  i1998.m_overrideHtmlColors = !!i1999[36]
  i1998.m_faceColor = UnityEngine.Color32.ConstructColor(i1999[37], i1999[38], i1999[39], i1999[40])
  i1998.m_fontSize = i1999[41]
  i1998.m_fontSizeBase = i1999[42]
  i1998.m_fontWeight = i1999[43]
  i1998.m_enableAutoSizing = !!i1999[44]
  i1998.m_fontSizeMin = i1999[45]
  i1998.m_fontSizeMax = i1999[46]
  i1998.m_fontStyle = i1999[47]
  i1998.m_HorizontalAlignment = i1999[48]
  i1998.m_VerticalAlignment = i1999[49]
  i1998.m_textAlignment = i1999[50]
  i1998.m_characterSpacing = i1999[51]
  i1998.m_wordSpacing = i1999[52]
  i1998.m_lineSpacing = i1999[53]
  i1998.m_lineSpacingMax = i1999[54]
  i1998.m_paragraphSpacing = i1999[55]
  i1998.m_charWidthMaxAdj = i1999[56]
  i1998.m_TextWrappingMode = i1999[57]
  i1998.m_wordWrappingRatios = i1999[58]
  i1998.m_overflowMode = i1999[59]
  request.r(i1999[60], i1999[61], 0, i1998, 'm_linkedTextComponent')
  request.r(i1999[62], i1999[63], 0, i1998, 'parentLinkedComponent')
  i1998.m_enableKerning = !!i1999[64]
  var i2005 = i1999[65]
  var i2004 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i2005.length; i += 1) {
    i2004.add(i2005[i + 0]);
  }
  i1998.m_ActiveFontFeatures = i2004
  i1998.m_enableExtraPadding = !!i1999[66]
  i1998.checkPaddingRequired = !!i1999[67]
  i1998.m_isRichText = !!i1999[68]
  i1998.m_parseCtrlCharacters = !!i1999[69]
  i1998.m_isOrthographic = !!i1999[70]
  i1998.m_isCullingEnabled = !!i1999[71]
  i1998.m_horizontalMapping = i1999[72]
  i1998.m_verticalMapping = i1999[73]
  i1998.m_uvLineOffset = i1999[74]
  i1998.m_geometrySortingOrder = i1999[75]
  i1998.m_IsTextObjectScaleStatic = !!i1999[76]
  i1998.m_VertexBufferAutoSizeReduction = !!i1999[77]
  i1998.m_useMaxVisibleDescender = !!i1999[78]
  i1998.m_pageToDisplay = i1999[79]
  i1998.m_margin = new pc.Vec4( i1999[80], i1999[81], i1999[82], i1999[83] )
  i1998.m_isUsingLegacyAnimationComponent = !!i1999[84]
  i1998.m_isVolumetricText = !!i1999[85]
  request.r(i1999[86], i1999[87], 0, i1998, 'm_Material')
  i1998.m_EmojiFallbackSupport = !!i1999[88]
  i1998.m_Maskable = !!i1999[89]
  i1998.m_Color = new pc.Color(i1999[90], i1999[91], i1999[92], i1999[93])
  i1998.m_RaycastTarget = !!i1999[94]
  i1998.m_RaycastPadding = new pc.Vec4( i1999[95], i1999[96], i1999[97], i1999[98] )
  return i1998
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i2006 = root || request.c( 'TMPro.VertexGradient' )
  var i2007 = data
  i2006.topLeft = new pc.Color(i2007[0], i2007[1], i2007[2], i2007[3])
  i2006.topRight = new pc.Color(i2007[4], i2007[5], i2007[6], i2007[7])
  i2006.bottomLeft = new pc.Color(i2007[8], i2007[9], i2007[10], i2007[11])
  i2006.bottomRight = new pc.Color(i2007[12], i2007[13], i2007[14], i2007[15])
  return i2006
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i2010 = root || request.c( 'UnityEngine.UI.Image' )
  var i2011 = data
  request.r(i2011[0], i2011[1], 0, i2010, 'm_Sprite')
  i2010.m_Type = i2011[2]
  i2010.m_PreserveAspect = !!i2011[3]
  i2010.m_FillCenter = !!i2011[4]
  i2010.m_FillMethod = i2011[5]
  i2010.m_FillAmount = i2011[6]
  i2010.m_FillClockwise = !!i2011[7]
  i2010.m_FillOrigin = i2011[8]
  i2010.m_UseSpriteMesh = !!i2011[9]
  i2010.m_PixelsPerUnitMultiplier = i2011[10]
  request.r(i2011[11], i2011[12], 0, i2010, 'm_Material')
  i2010.m_Maskable = !!i2011[13]
  i2010.m_Color = new pc.Color(i2011[14], i2011[15], i2011[16], i2011[17])
  i2010.m_RaycastTarget = !!i2011[18]
  i2010.m_RaycastPadding = new pc.Vec4( i2011[19], i2011[20], i2011[21], i2011[22] )
  return i2010
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i2012 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i2013 = data
  request.r(i2013[0], i2013[1], 0, i2012, 'animatorController')
  request.r(i2013[2], i2013[3], 0, i2012, 'avatar')
  i2012.updateMode = i2013[4]
  i2012.hasTransformHierarchy = !!i2013[5]
  i2012.applyRootMotion = !!i2013[6]
  var i2015 = i2013[7]
  var i2014 = []
  for(var i = 0; i < i2015.length; i += 2) {
  request.r(i2015[i + 0], i2015[i + 1], 2, i2014, '')
  }
  i2012.humanBones = i2014
  i2012.enabled = !!i2013[8]
  return i2012
}

Deserializers["CharacterDropZone"] = function (request, data, root) {
  var i2018 = root || request.c( 'CharacterDropZone' )
  var i2019 = data
  request.r(i2019[0], i2019[1], 0, i2018, 'characterData')
  i2018.flyToCharacterDuration = i2019[2]
  i2018.flyEase = i2019[3]
  i2018.hasReceivedItem = !!i2019[4]
  i2018.isCorrectItemReceived = !!i2019[5]
  return i2018
}

Deserializers["DraggableItem"] = function (request, data, root) {
  var i2020 = root || request.c( 'DraggableItem' )
  var i2021 = data
  i2020.itemID = i2021[0]
  i2020.itemLayer = UnityEngine.LayerMask.FromIntegerValue( i2021[1] )
  return i2020
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i2022 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i2023 = data
  i2022.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i2023[0], i2022.main)
  i2022.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i2023[1], i2022.colorBySpeed)
  i2022.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i2023[2], i2022.colorOverLifetime)
  i2022.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i2023[3], i2022.emission)
  i2022.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i2023[4], i2022.rotationBySpeed)
  i2022.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i2023[5], i2022.rotationOverLifetime)
  i2022.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i2023[6], i2022.shape)
  i2022.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i2023[7], i2022.sizeBySpeed)
  i2022.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i2023[8], i2022.sizeOverLifetime)
  i2022.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i2023[9], i2022.textureSheetAnimation)
  i2022.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i2023[10], i2022.velocityOverLifetime)
  i2022.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i2023[11], i2022.noise)
  i2022.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i2023[12], i2022.inheritVelocity)
  i2022.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i2023[13], i2022.forceOverLifetime)
  i2022.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i2023[14], i2022.limitVelocityOverLifetime)
  i2022.useAutoRandomSeed = !!i2023[15]
  i2022.randomSeed = i2023[16]
  return i2022
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i2024 = root || new pc.ParticleSystemMain()
  var i2025 = data
  i2024.duration = i2025[0]
  i2024.loop = !!i2025[1]
  i2024.prewarm = !!i2025[2]
  i2024.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2025[3], i2024.startDelay)
  i2024.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2025[4], i2024.startLifetime)
  i2024.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2025[5], i2024.startSpeed)
  i2024.startSize3D = !!i2025[6]
  i2024.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2025[7], i2024.startSizeX)
  i2024.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2025[8], i2024.startSizeY)
  i2024.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2025[9], i2024.startSizeZ)
  i2024.startRotation3D = !!i2025[10]
  i2024.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2025[11], i2024.startRotationX)
  i2024.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2025[12], i2024.startRotationY)
  i2024.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2025[13], i2024.startRotationZ)
  i2024.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2025[14], i2024.startColor)
  i2024.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2025[15], i2024.gravityModifier)
  i2024.simulationSpace = i2025[16]
  request.r(i2025[17], i2025[18], 0, i2024, 'customSimulationSpace')
  i2024.simulationSpeed = i2025[19]
  i2024.useUnscaledTime = !!i2025[20]
  i2024.scalingMode = i2025[21]
  i2024.playOnAwake = !!i2025[22]
  i2024.maxParticles = i2025[23]
  i2024.emitterVelocityMode = i2025[24]
  i2024.stopAction = i2025[25]
  return i2024
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i2026 = root || new pc.MinMaxCurve()
  var i2027 = data
  i2026.mode = i2027[0]
  i2026.curveMin = new pc.AnimationCurve( { keys_flow: i2027[1] } )
  i2026.curveMax = new pc.AnimationCurve( { keys_flow: i2027[2] } )
  i2026.curveMultiplier = i2027[3]
  i2026.constantMin = i2027[4]
  i2026.constantMax = i2027[5]
  return i2026
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i2028 = root || new pc.MinMaxGradient()
  var i2029 = data
  i2028.mode = i2029[0]
  i2028.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2029[1], i2028.gradientMin)
  i2028.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2029[2], i2028.gradientMax)
  i2028.colorMin = new pc.Color(i2029[3], i2029[4], i2029[5], i2029[6])
  i2028.colorMax = new pc.Color(i2029[7], i2029[8], i2029[9], i2029[10])
  return i2028
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i2030 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i2031 = data
  i2030.mode = i2031[0]
  var i2033 = i2031[1]
  var i2032 = []
  for(var i = 0; i < i2033.length; i += 1) {
    i2032.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i2033[i + 0]) );
  }
  i2030.colorKeys = i2032
  var i2035 = i2031[2]
  var i2034 = []
  for(var i = 0; i < i2035.length; i += 1) {
    i2034.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i2035[i + 0]) );
  }
  i2030.alphaKeys = i2034
  return i2030
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i2036 = root || new pc.ParticleSystemColorBySpeed()
  var i2037 = data
  i2036.enabled = !!i2037[0]
  i2036.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2037[1], i2036.color)
  i2036.range = new pc.Vec2( i2037[2], i2037[3] )
  return i2036
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i2040 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i2041 = data
  i2040.color = new pc.Color(i2041[0], i2041[1], i2041[2], i2041[3])
  i2040.time = i2041[4]
  return i2040
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i2044 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i2045 = data
  i2044.alpha = i2045[0]
  i2044.time = i2045[1]
  return i2044
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i2046 = root || new pc.ParticleSystemColorOverLifetime()
  var i2047 = data
  i2046.enabled = !!i2047[0]
  i2046.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2047[1], i2046.color)
  return i2046
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i2048 = root || new pc.ParticleSystemEmitter()
  var i2049 = data
  i2048.enabled = !!i2049[0]
  i2048.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2049[1], i2048.rateOverTime)
  i2048.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2049[2], i2048.rateOverDistance)
  var i2051 = i2049[3]
  var i2050 = []
  for(var i = 0; i < i2051.length; i += 1) {
    i2050.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i2051[i + 0]) );
  }
  i2048.bursts = i2050
  return i2048
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i2054 = root || new pc.ParticleSystemBurst()
  var i2055 = data
  i2054.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2055[0], i2054.count)
  i2054.cycleCount = i2055[1]
  i2054.minCount = i2055[2]
  i2054.maxCount = i2055[3]
  i2054.repeatInterval = i2055[4]
  i2054.time = i2055[5]
  return i2054
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i2056 = root || new pc.ParticleSystemRotationBySpeed()
  var i2057 = data
  i2056.enabled = !!i2057[0]
  i2056.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2057[1], i2056.x)
  i2056.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2057[2], i2056.y)
  i2056.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2057[3], i2056.z)
  i2056.separateAxes = !!i2057[4]
  i2056.range = new pc.Vec2( i2057[5], i2057[6] )
  return i2056
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i2058 = root || new pc.ParticleSystemRotationOverLifetime()
  var i2059 = data
  i2058.enabled = !!i2059[0]
  i2058.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2059[1], i2058.x)
  i2058.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2059[2], i2058.y)
  i2058.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2059[3], i2058.z)
  i2058.separateAxes = !!i2059[4]
  return i2058
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i2060 = root || new pc.ParticleSystemShape()
  var i2061 = data
  i2060.enabled = !!i2061[0]
  i2060.shapeType = i2061[1]
  i2060.randomDirectionAmount = i2061[2]
  i2060.sphericalDirectionAmount = i2061[3]
  i2060.randomPositionAmount = i2061[4]
  i2060.alignToDirection = !!i2061[5]
  i2060.radius = i2061[6]
  i2060.radiusMode = i2061[7]
  i2060.radiusSpread = i2061[8]
  i2060.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2061[9], i2060.radiusSpeed)
  i2060.radiusThickness = i2061[10]
  i2060.angle = i2061[11]
  i2060.length = i2061[12]
  i2060.boxThickness = new pc.Vec3( i2061[13], i2061[14], i2061[15] )
  i2060.meshShapeType = i2061[16]
  request.r(i2061[17], i2061[18], 0, i2060, 'mesh')
  request.r(i2061[19], i2061[20], 0, i2060, 'meshRenderer')
  request.r(i2061[21], i2061[22], 0, i2060, 'skinnedMeshRenderer')
  i2060.useMeshMaterialIndex = !!i2061[23]
  i2060.meshMaterialIndex = i2061[24]
  i2060.useMeshColors = !!i2061[25]
  i2060.normalOffset = i2061[26]
  i2060.arc = i2061[27]
  i2060.arcMode = i2061[28]
  i2060.arcSpread = i2061[29]
  i2060.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2061[30], i2060.arcSpeed)
  i2060.donutRadius = i2061[31]
  i2060.position = new pc.Vec3( i2061[32], i2061[33], i2061[34] )
  i2060.rotation = new pc.Vec3( i2061[35], i2061[36], i2061[37] )
  i2060.scale = new pc.Vec3( i2061[38], i2061[39], i2061[40] )
  return i2060
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i2062 = root || new pc.ParticleSystemSizeBySpeed()
  var i2063 = data
  i2062.enabled = !!i2063[0]
  i2062.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2063[1], i2062.x)
  i2062.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2063[2], i2062.y)
  i2062.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2063[3], i2062.z)
  i2062.separateAxes = !!i2063[4]
  i2062.range = new pc.Vec2( i2063[5], i2063[6] )
  return i2062
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i2064 = root || new pc.ParticleSystemSizeOverLifetime()
  var i2065 = data
  i2064.enabled = !!i2065[0]
  i2064.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2065[1], i2064.x)
  i2064.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2065[2], i2064.y)
  i2064.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2065[3], i2064.z)
  i2064.separateAxes = !!i2065[4]
  return i2064
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i2066 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i2067 = data
  i2066.enabled = !!i2067[0]
  i2066.mode = i2067[1]
  i2066.animation = i2067[2]
  i2066.numTilesX = i2067[3]
  i2066.numTilesY = i2067[4]
  i2066.useRandomRow = !!i2067[5]
  i2066.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2067[6], i2066.frameOverTime)
  i2066.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2067[7], i2066.startFrame)
  i2066.cycleCount = i2067[8]
  i2066.rowIndex = i2067[9]
  i2066.flipU = i2067[10]
  i2066.flipV = i2067[11]
  i2066.spriteCount = i2067[12]
  var i2069 = i2067[13]
  var i2068 = []
  for(var i = 0; i < i2069.length; i += 2) {
  request.r(i2069[i + 0], i2069[i + 1], 2, i2068, '')
  }
  i2066.sprites = i2068
  return i2066
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i2072 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i2073 = data
  i2072.enabled = !!i2073[0]
  i2072.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2073[1], i2072.x)
  i2072.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2073[2], i2072.y)
  i2072.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2073[3], i2072.z)
  i2072.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2073[4], i2072.radial)
  i2072.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2073[5], i2072.speedModifier)
  i2072.space = i2073[6]
  i2072.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2073[7], i2072.orbitalX)
  i2072.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2073[8], i2072.orbitalY)
  i2072.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2073[9], i2072.orbitalZ)
  i2072.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2073[10], i2072.orbitalOffsetX)
  i2072.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2073[11], i2072.orbitalOffsetY)
  i2072.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2073[12], i2072.orbitalOffsetZ)
  return i2072
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i2074 = root || new pc.ParticleSystemNoise()
  var i2075 = data
  i2074.enabled = !!i2075[0]
  i2074.separateAxes = !!i2075[1]
  i2074.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2075[2], i2074.strengthX)
  i2074.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2075[3], i2074.strengthY)
  i2074.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2075[4], i2074.strengthZ)
  i2074.frequency = i2075[5]
  i2074.damping = !!i2075[6]
  i2074.octaveCount = i2075[7]
  i2074.octaveMultiplier = i2075[8]
  i2074.octaveScale = i2075[9]
  i2074.quality = i2075[10]
  i2074.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2075[11], i2074.scrollSpeed)
  i2074.scrollSpeedMultiplier = i2075[12]
  i2074.remapEnabled = !!i2075[13]
  i2074.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2075[14], i2074.remapX)
  i2074.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2075[15], i2074.remapY)
  i2074.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2075[16], i2074.remapZ)
  i2074.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2075[17], i2074.positionAmount)
  i2074.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2075[18], i2074.rotationAmount)
  i2074.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2075[19], i2074.sizeAmount)
  return i2074
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i2076 = root || new pc.ParticleSystemInheritVelocity()
  var i2077 = data
  i2076.enabled = !!i2077[0]
  i2076.mode = i2077[1]
  i2076.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2077[2], i2076.curve)
  return i2076
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i2078 = root || new pc.ParticleSystemForceOverLifetime()
  var i2079 = data
  i2078.enabled = !!i2079[0]
  i2078.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2079[1], i2078.x)
  i2078.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2079[2], i2078.y)
  i2078.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2079[3], i2078.z)
  i2078.space = i2079[4]
  i2078.randomized = !!i2079[5]
  return i2078
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i2080 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i2081 = data
  i2080.enabled = !!i2081[0]
  i2080.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2081[1], i2080.limit)
  i2080.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2081[2], i2080.limitX)
  i2080.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2081[3], i2080.limitY)
  i2080.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2081[4], i2080.limitZ)
  i2080.dampen = i2081[5]
  i2080.separateAxes = !!i2081[6]
  i2080.space = i2081[7]
  i2080.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2081[8], i2080.drag)
  i2080.multiplyDragByParticleSize = !!i2081[9]
  i2080.multiplyDragByParticleVelocity = !!i2081[10]
  return i2080
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i2082 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i2083 = data
  request.r(i2083[0], i2083[1], 0, i2082, 'mesh')
  i2082.meshCount = i2083[2]
  i2082.activeVertexStreamsCount = i2083[3]
  i2082.alignment = i2083[4]
  i2082.renderMode = i2083[5]
  i2082.sortMode = i2083[6]
  i2082.lengthScale = i2083[7]
  i2082.velocityScale = i2083[8]
  i2082.cameraVelocityScale = i2083[9]
  i2082.normalDirection = i2083[10]
  i2082.sortingFudge = i2083[11]
  i2082.minParticleSize = i2083[12]
  i2082.maxParticleSize = i2083[13]
  i2082.pivot = new pc.Vec3( i2083[14], i2083[15], i2083[16] )
  request.r(i2083[17], i2083[18], 0, i2082, 'trailMaterial')
  i2082.applyActiveColorSpace = !!i2083[19]
  i2082.enabled = !!i2083[20]
  request.r(i2083[21], i2083[22], 0, i2082, 'sharedMaterial')
  var i2085 = i2083[23]
  var i2084 = []
  for(var i = 0; i < i2085.length; i += 2) {
  request.r(i2085[i + 0], i2085[i + 1], 2, i2084, '')
  }
  i2082.sharedMaterials = i2084
  i2082.receiveShadows = !!i2083[24]
  i2082.shadowCastingMode = i2083[25]
  i2082.sortingLayerID = i2083[26]
  i2082.sortingOrder = i2083[27]
  i2082.lightmapIndex = i2083[28]
  i2082.lightmapSceneIndex = i2083[29]
  i2082.lightmapScaleOffset = new pc.Vec4( i2083[30], i2083[31], i2083[32], i2083[33] )
  i2082.lightProbeUsage = i2083[34]
  i2082.reflectionProbeUsage = i2083[35]
  return i2082
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i2086 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i2087 = data
  request.r(i2087[0], i2087[1], 0, i2086, 'm_FirstSelected')
  i2086.m_sendNavigationEvents = !!i2087[2]
  i2086.m_DragThreshold = i2087[3]
  return i2086
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i2088 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i2089 = data
  i2088.m_HorizontalAxis = i2089[0]
  i2088.m_VerticalAxis = i2089[1]
  i2088.m_SubmitButton = i2089[2]
  i2088.m_CancelButton = i2089[3]
  i2088.m_InputActionsPerSecond = i2089[4]
  i2088.m_RepeatDelay = i2089[5]
  i2088.m_ForceModuleActive = !!i2089[6]
  i2088.m_SendPointerHoverToParent = !!i2089[7]
  return i2088
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i2090 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i2091 = data
  i2090.ambientIntensity = i2091[0]
  i2090.reflectionIntensity = i2091[1]
  i2090.ambientMode = i2091[2]
  i2090.ambientLight = new pc.Color(i2091[3], i2091[4], i2091[5], i2091[6])
  i2090.ambientSkyColor = new pc.Color(i2091[7], i2091[8], i2091[9], i2091[10])
  i2090.ambientGroundColor = new pc.Color(i2091[11], i2091[12], i2091[13], i2091[14])
  i2090.ambientEquatorColor = new pc.Color(i2091[15], i2091[16], i2091[17], i2091[18])
  i2090.fogColor = new pc.Color(i2091[19], i2091[20], i2091[21], i2091[22])
  i2090.fogEndDistance = i2091[23]
  i2090.fogStartDistance = i2091[24]
  i2090.fogDensity = i2091[25]
  i2090.fog = !!i2091[26]
  request.r(i2091[27], i2091[28], 0, i2090, 'skybox')
  i2090.fogMode = i2091[29]
  var i2093 = i2091[30]
  var i2092 = []
  for(var i = 0; i < i2093.length; i += 1) {
    i2092.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i2093[i + 0]) );
  }
  i2090.lightmaps = i2092
  i2090.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i2091[31], i2090.lightProbes)
  i2090.lightmapsMode = i2091[32]
  i2090.mixedBakeMode = i2091[33]
  i2090.environmentLightingMode = i2091[34]
  i2090.ambientProbe = new pc.SphericalHarmonicsL2(i2091[35])
  i2090.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i2091[36])
  i2090.useReferenceAmbientProbe = !!i2091[37]
  request.r(i2091[38], i2091[39], 0, i2090, 'customReflection')
  request.r(i2091[40], i2091[41], 0, i2090, 'defaultReflection')
  i2090.defaultReflectionMode = i2091[42]
  i2090.defaultReflectionResolution = i2091[43]
  i2090.sunLightObjectId = i2091[44]
  i2090.pixelLightCount = i2091[45]
  i2090.defaultReflectionHDR = !!i2091[46]
  i2090.hasLightDataAsset = !!i2091[47]
  i2090.hasManualGenerate = !!i2091[48]
  return i2090
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i2096 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i2097 = data
  request.r(i2097[0], i2097[1], 0, i2096, 'lightmapColor')
  request.r(i2097[2], i2097[3], 0, i2096, 'lightmapDirection')
  request.r(i2097[4], i2097[5], 0, i2096, 'shadowMask')
  return i2096
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i2098 = root || new UnityEngine.LightProbes()
  var i2099 = data
  return i2098
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i2106 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i2107 = data
  var i2109 = i2107[0]
  var i2108 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i2109.length; i += 1) {
    i2108.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i2109[i + 0]));
  }
  i2106.ShaderCompilationErrors = i2108
  i2106.name = i2107[1]
  i2106.guid = i2107[2]
  var i2111 = i2107[3]
  var i2110 = []
  for(var i = 0; i < i2111.length; i += 1) {
    i2110.push( i2111[i + 0] );
  }
  i2106.shaderDefinedKeywords = i2110
  var i2113 = i2107[4]
  var i2112 = []
  for(var i = 0; i < i2113.length; i += 1) {
    i2112.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i2113[i + 0]) );
  }
  i2106.passes = i2112
  var i2115 = i2107[5]
  var i2114 = []
  for(var i = 0; i < i2115.length; i += 1) {
    i2114.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i2115[i + 0]) );
  }
  i2106.usePasses = i2114
  var i2117 = i2107[6]
  var i2116 = []
  for(var i = 0; i < i2117.length; i += 1) {
    i2116.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i2117[i + 0]) );
  }
  i2106.defaultParameterValues = i2116
  request.r(i2107[7], i2107[8], 0, i2106, 'unityFallbackShader')
  i2106.readDepth = !!i2107[9]
  i2106.hasDepthOnlyPass = !!i2107[10]
  i2106.isCreatedByShaderGraph = !!i2107[11]
  i2106.disableBatching = !!i2107[12]
  i2106.compiled = !!i2107[13]
  return i2106
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i2120 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i2121 = data
  i2120.shaderName = i2121[0]
  i2120.errorMessage = i2121[1]
  return i2120
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i2126 = root || new pc.UnityShaderPass()
  var i2127 = data
  i2126.id = i2127[0]
  i2126.subShaderIndex = i2127[1]
  i2126.name = i2127[2]
  i2126.passType = i2127[3]
  i2126.grabPassTextureName = i2127[4]
  i2126.usePass = !!i2127[5]
  i2126.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2127[6], i2126.zTest)
  i2126.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2127[7], i2126.zWrite)
  i2126.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2127[8], i2126.culling)
  i2126.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2127[9], i2126.blending)
  i2126.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2127[10], i2126.alphaBlending)
  i2126.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2127[11], i2126.colorWriteMask)
  i2126.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2127[12], i2126.offsetUnits)
  i2126.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2127[13], i2126.offsetFactor)
  i2126.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2127[14], i2126.stencilRef)
  i2126.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2127[15], i2126.stencilReadMask)
  i2126.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2127[16], i2126.stencilWriteMask)
  i2126.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2127[17], i2126.stencilOp)
  i2126.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2127[18], i2126.stencilOpFront)
  i2126.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2127[19], i2126.stencilOpBack)
  var i2129 = i2127[20]
  var i2128 = []
  for(var i = 0; i < i2129.length; i += 1) {
    i2128.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i2129[i + 0]) );
  }
  i2126.tags = i2128
  var i2131 = i2127[21]
  var i2130 = []
  for(var i = 0; i < i2131.length; i += 1) {
    i2130.push( i2131[i + 0] );
  }
  i2126.passDefinedKeywords = i2130
  var i2133 = i2127[22]
  var i2132 = []
  for(var i = 0; i < i2133.length; i += 1) {
    i2132.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i2133[i + 0]) );
  }
  i2126.passDefinedKeywordGroups = i2132
  var i2135 = i2127[23]
  var i2134 = []
  for(var i = 0; i < i2135.length; i += 1) {
    i2134.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2135[i + 0]) );
  }
  i2126.variants = i2134
  var i2137 = i2127[24]
  var i2136 = []
  for(var i = 0; i < i2137.length; i += 1) {
    i2136.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2137[i + 0]) );
  }
  i2126.excludedVariants = i2136
  i2126.hasDepthReader = !!i2127[25]
  return i2126
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i2138 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i2139 = data
  i2138.val = i2139[0]
  i2138.name = i2139[1]
  return i2138
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i2140 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i2141 = data
  i2140.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2141[0], i2140.src)
  i2140.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2141[1], i2140.dst)
  i2140.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2141[2], i2140.op)
  return i2140
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i2142 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i2143 = data
  i2142.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2143[0], i2142.pass)
  i2142.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2143[1], i2142.fail)
  i2142.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2143[2], i2142.zFail)
  i2142.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2143[3], i2142.comp)
  return i2142
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i2146 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i2147 = data
  i2146.name = i2147[0]
  i2146.value = i2147[1]
  return i2146
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i2150 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i2151 = data
  var i2153 = i2151[0]
  var i2152 = []
  for(var i = 0; i < i2153.length; i += 1) {
    i2152.push( i2153[i + 0] );
  }
  i2150.keywords = i2152
  i2150.hasDiscard = !!i2151[1]
  return i2150
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i2156 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i2157 = data
  i2156.passId = i2157[0]
  i2156.subShaderIndex = i2157[1]
  var i2159 = i2157[2]
  var i2158 = []
  for(var i = 0; i < i2159.length; i += 1) {
    i2158.push( i2159[i + 0] );
  }
  i2156.keywords = i2158
  i2156.vertexProgram = i2157[3]
  i2156.fragmentProgram = i2157[4]
  i2156.exportedForWebGl2 = !!i2157[5]
  i2156.readDepth = !!i2157[6]
  return i2156
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i2162 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i2163 = data
  request.r(i2163[0], i2163[1], 0, i2162, 'shader')
  i2162.pass = i2163[2]
  return i2162
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i2166 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i2167 = data
  i2166.name = i2167[0]
  i2166.type = i2167[1]
  i2166.value = new pc.Vec4( i2167[2], i2167[3], i2167[4], i2167[5] )
  i2166.textureValue = i2167[6]
  i2166.shaderPropertyFlag = i2167[7]
  return i2166
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i2168 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i2169 = data
  i2168.name = i2169[0]
  request.r(i2169[1], i2169[2], 0, i2168, 'texture')
  i2168.aabb = i2169[3]
  i2168.vertices = i2169[4]
  i2168.triangles = i2169[5]
  i2168.textureRect = UnityEngine.Rect.MinMaxRect(i2169[6], i2169[7], i2169[8], i2169[9])
  i2168.packedRect = UnityEngine.Rect.MinMaxRect(i2169[10], i2169[11], i2169[12], i2169[13])
  i2168.border = new pc.Vec4( i2169[14], i2169[15], i2169[16], i2169[17] )
  i2168.transparency = i2169[18]
  i2168.bounds = i2169[19]
  i2168.pixelsPerUnit = i2169[20]
  i2168.textureWidth = i2169[21]
  i2168.textureHeight = i2169[22]
  i2168.nativeSize = new pc.Vec2( i2169[23], i2169[24] )
  i2168.pivot = new pc.Vec2( i2169[25], i2169[26] )
  i2168.textureRectOffset = new pc.Vec2( i2169[27], i2169[28] )
  return i2168
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i2170 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i2171 = data
  i2170.name = i2171[0]
  return i2170
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i2172 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i2173 = data
  i2172.name = i2173[0]
  i2172.wrapMode = i2173[1]
  i2172.isLooping = !!i2173[2]
  i2172.length = i2173[3]
  var i2175 = i2173[4]
  var i2174 = []
  for(var i = 0; i < i2175.length; i += 1) {
    i2174.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i2175[i + 0]) );
  }
  i2172.curves = i2174
  var i2177 = i2173[5]
  var i2176 = []
  for(var i = 0; i < i2177.length; i += 1) {
    i2176.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i2177[i + 0]) );
  }
  i2172.events = i2176
  i2172.halfPrecision = !!i2173[6]
  i2172._frameRate = i2173[7]
  i2172.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i2173[8], i2172.localBounds)
  i2172.hasMuscleCurves = !!i2173[9]
  var i2179 = i2173[10]
  var i2178 = []
  for(var i = 0; i < i2179.length; i += 1) {
    i2178.push( i2179[i + 0] );
  }
  i2172.clipMuscleConstant = i2178
  i2172.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i2173[11], i2172.clipBindingConstant)
  return i2172
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i2182 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i2183 = data
  i2182.path = i2183[0]
  i2182.hash = i2183[1]
  i2182.componentType = i2183[2]
  i2182.property = i2183[3]
  i2182.keys = i2183[4]
  var i2185 = i2183[5]
  var i2184 = []
  for(var i = 0; i < i2185.length; i += 1) {
    i2184.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i2185[i + 0]) );
  }
  i2182.objectReferenceKeys = i2184
  return i2182
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i2188 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i2189 = data
  i2188.time = i2189[0]
  request.r(i2189[1], i2189[2], 0, i2188, 'value')
  return i2188
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i2192 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i2193 = data
  i2192.functionName = i2193[0]
  i2192.floatParameter = i2193[1]
  i2192.intParameter = i2193[2]
  i2192.stringParameter = i2193[3]
  request.r(i2193[4], i2193[5], 0, i2192, 'objectReferenceParameter')
  i2192.time = i2193[6]
  return i2192
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i2194 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i2195 = data
  i2194.center = new pc.Vec3( i2195[0], i2195[1], i2195[2] )
  i2194.extends = new pc.Vec3( i2195[3], i2195[4], i2195[5] )
  return i2194
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i2198 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i2199 = data
  var i2201 = i2199[0]
  var i2200 = []
  for(var i = 0; i < i2201.length; i += 1) {
    i2200.push( i2201[i + 0] );
  }
  i2198.genericBindings = i2200
  var i2203 = i2199[1]
  var i2202 = []
  for(var i = 0; i < i2203.length; i += 1) {
    i2202.push( i2203[i + 0] );
  }
  i2198.pptrCurveMapping = i2202
  return i2198
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i2204 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i2205 = data
  i2204.name = i2205[0]
  i2204.ascent = i2205[1]
  i2204.originalLineHeight = i2205[2]
  i2204.fontSize = i2205[3]
  var i2207 = i2205[4]
  var i2206 = []
  for(var i = 0; i < i2207.length; i += 1) {
    i2206.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i2207[i + 0]) );
  }
  i2204.characterInfo = i2206
  request.r(i2205[5], i2205[6], 0, i2204, 'texture')
  i2204.originalFontSize = i2205[7]
  return i2204
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i2210 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i2211 = data
  i2210.index = i2211[0]
  i2210.advance = i2211[1]
  i2210.bearing = i2211[2]
  i2210.glyphWidth = i2211[3]
  i2210.glyphHeight = i2211[4]
  i2210.minX = i2211[5]
  i2210.maxX = i2211[6]
  i2210.minY = i2211[7]
  i2210.maxY = i2211[8]
  i2210.uvBottomLeftX = i2211[9]
  i2210.uvBottomLeftY = i2211[10]
  i2210.uvBottomRightX = i2211[11]
  i2210.uvBottomRightY = i2211[12]
  i2210.uvTopLeftX = i2211[13]
  i2210.uvTopLeftY = i2211[14]
  i2210.uvTopRightX = i2211[15]
  i2210.uvTopRightY = i2211[16]
  return i2210
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i2212 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i2213 = data
  i2212.name = i2213[0]
  var i2215 = i2213[1]
  var i2214 = []
  for(var i = 0; i < i2215.length; i += 1) {
    i2214.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i2215[i + 0]) );
  }
  i2212.layers = i2214
  var i2217 = i2213[2]
  var i2216 = []
  for(var i = 0; i < i2217.length; i += 1) {
    i2216.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i2217[i + 0]) );
  }
  i2212.parameters = i2216
  i2212.animationClips = i2213[3]
  i2212.avatarUnsupported = i2213[4]
  return i2212
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i2220 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i2221 = data
  i2220.name = i2221[0]
  i2220.defaultWeight = i2221[1]
  i2220.blendingMode = i2221[2]
  i2220.avatarMask = i2221[3]
  i2220.syncedLayerIndex = i2221[4]
  i2220.syncedLayerAffectsTiming = !!i2221[5]
  i2220.syncedLayers = i2221[6]
  i2220.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2221[7], i2220.stateMachine)
  return i2220
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i2222 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i2223 = data
  i2222.id = i2223[0]
  i2222.name = i2223[1]
  i2222.path = i2223[2]
  var i2225 = i2223[3]
  var i2224 = []
  for(var i = 0; i < i2225.length; i += 1) {
    i2224.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i2225[i + 0]) );
  }
  i2222.states = i2224
  var i2227 = i2223[4]
  var i2226 = []
  for(var i = 0; i < i2227.length; i += 1) {
    i2226.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2227[i + 0]) );
  }
  i2222.machines = i2226
  var i2229 = i2223[5]
  var i2228 = []
  for(var i = 0; i < i2229.length; i += 1) {
    i2228.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2229[i + 0]) );
  }
  i2222.entryStateTransitions = i2228
  var i2231 = i2223[6]
  var i2230 = []
  for(var i = 0; i < i2231.length; i += 1) {
    i2230.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2231[i + 0]) );
  }
  i2222.exitStateTransitions = i2230
  var i2233 = i2223[7]
  var i2232 = []
  for(var i = 0; i < i2233.length; i += 1) {
    i2232.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2233[i + 0]) );
  }
  i2222.anyStateTransitions = i2232
  i2222.defaultStateId = i2223[8]
  return i2222
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i2236 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i2237 = data
  i2236.id = i2237[0]
  i2236.name = i2237[1]
  i2236.cycleOffset = i2237[2]
  i2236.cycleOffsetParameter = i2237[3]
  i2236.cycleOffsetParameterActive = !!i2237[4]
  i2236.mirror = !!i2237[5]
  i2236.mirrorParameter = i2237[6]
  i2236.mirrorParameterActive = !!i2237[7]
  i2236.motionId = i2237[8]
  i2236.nameHash = i2237[9]
  i2236.fullPathHash = i2237[10]
  i2236.speed = i2237[11]
  i2236.speedParameter = i2237[12]
  i2236.speedParameterActive = !!i2237[13]
  i2236.tag = i2237[14]
  i2236.tagHash = i2237[15]
  i2236.writeDefaultValues = !!i2237[16]
  var i2239 = i2237[17]
  var i2238 = []
  for(var i = 0; i < i2239.length; i += 2) {
  request.r(i2239[i + 0], i2239[i + 1], 2, i2238, '')
  }
  i2236.behaviours = i2238
  var i2241 = i2237[18]
  var i2240 = []
  for(var i = 0; i < i2241.length; i += 1) {
    i2240.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2241[i + 0]) );
  }
  i2236.transitions = i2240
  return i2236
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i2246 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i2247 = data
  i2246.fullPath = i2247[0]
  i2246.canTransitionToSelf = !!i2247[1]
  i2246.duration = i2247[2]
  i2246.exitTime = i2247[3]
  i2246.hasExitTime = !!i2247[4]
  i2246.hasFixedDuration = !!i2247[5]
  i2246.interruptionSource = i2247[6]
  i2246.offset = i2247[7]
  i2246.orderedInterruption = !!i2247[8]
  i2246.destinationStateId = i2247[9]
  i2246.isExit = !!i2247[10]
  i2246.mute = !!i2247[11]
  i2246.solo = !!i2247[12]
  var i2249 = i2247[13]
  var i2248 = []
  for(var i = 0; i < i2249.length; i += 1) {
    i2248.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2249[i + 0]) );
  }
  i2246.conditions = i2248
  return i2246
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i2254 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i2255 = data
  i2254.destinationStateId = i2255[0]
  i2254.isExit = !!i2255[1]
  i2254.mute = !!i2255[2]
  i2254.solo = !!i2255[3]
  var i2257 = i2255[4]
  var i2256 = []
  for(var i = 0; i < i2257.length; i += 1) {
    i2256.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2257[i + 0]) );
  }
  i2254.conditions = i2256
  return i2254
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i2260 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i2261 = data
  i2260.defaultBool = !!i2261[0]
  i2260.defaultFloat = i2261[1]
  i2260.defaultInt = i2261[2]
  i2260.name = i2261[3]
  i2260.nameHash = i2261[4]
  i2260.type = i2261[5]
  return i2260
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i2262 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i2263 = data
  i2262.name = i2263[0]
  i2262.bytes64 = i2263[1]
  i2262.data = i2263[2]
  return i2262
}

Deserializers["CharacterItemData"] = function (request, data, root) {
  var i2264 = root || request.c( 'CharacterItemData' )
  var i2265 = data
  i2264.characterName = i2265[0]
  request.r(i2265[1], i2265[2], 0, i2264, 'normalSprite')
  i2264.characterSound = i2265[3]
  i2264.correctItemID = i2265[4]
  var i2267 = i2265[5]
  var i2266 = new (System.Collections.Generic.List$1(Bridge.ns('ItemSpriteMapping')))
  for(var i = 0; i < i2267.length; i += 1) {
    i2266.add(request.d('ItemSpriteMapping', i2267[i + 0]));
  }
  i2264.itemInteractions = i2266
  return i2264
}

Deserializers["ItemSpriteMapping"] = function (request, data, root) {
  var i2270 = root || request.c( 'ItemSpriteMapping' )
  var i2271 = data
  i2270.itemID = i2271[0]
  request.r(i2271[1], i2271[2], 0, i2270, 'spriteWithItem')
  i2270.fxType = i2271[3]
  return i2270
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i2272 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i2273 = data
  i2272.normalStyle = i2273[0]
  i2272.normalSpacingOffset = i2273[1]
  i2272.boldStyle = i2273[2]
  i2272.boldSpacing = i2273[3]
  i2272.italicStyle = i2273[4]
  i2272.tabSize = i2273[5]
  request.r(i2273[6], i2273[7], 0, i2272, 'atlas')
  i2272.m_SourceFontFileGUID = i2273[8]
  i2272.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i2273[9], i2272.m_CreationSettings)
  request.r(i2273[10], i2273[11], 0, i2272, 'm_SourceFontFile')
  i2272.m_SourceFontFilePath = i2273[12]
  i2272.m_AtlasPopulationMode = i2273[13]
  i2272.InternalDynamicOS = !!i2273[14]
  var i2275 = i2273[15]
  var i2274 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i2275.length; i += 1) {
    i2274.add(request.d('UnityEngine.TextCore.Glyph', i2275[i + 0]));
  }
  i2272.m_GlyphTable = i2274
  var i2277 = i2273[16]
  var i2276 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i2277.length; i += 1) {
    i2276.add(request.d('TMPro.TMP_Character', i2277[i + 0]));
  }
  i2272.m_CharacterTable = i2276
  var i2279 = i2273[17]
  var i2278 = []
  for(var i = 0; i < i2279.length; i += 2) {
  request.r(i2279[i + 0], i2279[i + 1], 2, i2278, '')
  }
  i2272.m_AtlasTextures = i2278
  i2272.m_AtlasTextureIndex = i2273[18]
  i2272.m_IsMultiAtlasTexturesEnabled = !!i2273[19]
  i2272.m_GetFontFeatures = !!i2273[20]
  i2272.m_ClearDynamicDataOnBuild = !!i2273[21]
  i2272.m_AtlasWidth = i2273[22]
  i2272.m_AtlasHeight = i2273[23]
  i2272.m_AtlasPadding = i2273[24]
  i2272.m_AtlasRenderMode = i2273[25]
  var i2281 = i2273[26]
  var i2280 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2281.length; i += 1) {
    i2280.add(request.d('UnityEngine.TextCore.GlyphRect', i2281[i + 0]));
  }
  i2272.m_UsedGlyphRects = i2280
  var i2283 = i2273[27]
  var i2282 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2283.length; i += 1) {
    i2282.add(request.d('UnityEngine.TextCore.GlyphRect', i2283[i + 0]));
  }
  i2272.m_FreeGlyphRects = i2282
  i2272.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i2273[28], i2272.m_FontFeatureTable)
  i2272.m_ShouldReimportFontFeatures = !!i2273[29]
  var i2285 = i2273[30]
  var i2284 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2285.length; i += 2) {
  request.r(i2285[i + 0], i2285[i + 1], 1, i2284, '')
  }
  i2272.m_FallbackFontAssetTable = i2284
  var i2287 = i2273[31]
  var i2286 = []
  for(var i = 0; i < i2287.length; i += 1) {
    i2286.push( request.d('TMPro.TMP_FontWeightPair', i2287[i + 0]) );
  }
  i2272.m_FontWeightTable = i2286
  var i2289 = i2273[32]
  var i2288 = []
  for(var i = 0; i < i2289.length; i += 1) {
    i2288.push( request.d('TMPro.TMP_FontWeightPair', i2289[i + 0]) );
  }
  i2272.fontWeights = i2288
  i2272.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i2273[33], i2272.m_fontInfo)
  var i2291 = i2273[34]
  var i2290 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i2291.length; i += 1) {
    i2290.add(request.d('TMPro.TMP_Glyph', i2291[i + 0]));
  }
  i2272.m_glyphInfoList = i2290
  i2272.m_KerningTable = request.d('TMPro.KerningTable', i2273[35], i2272.m_KerningTable)
  var i2293 = i2273[36]
  var i2292 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2293.length; i += 2) {
  request.r(i2293[i + 0], i2293[i + 1], 1, i2292, '')
  }
  i2272.fallbackFontAssets = i2292
  i2272.m_Version = i2273[37]
  i2272.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2273[38], i2272.m_FaceInfo)
  request.r(i2273[39], i2273[40], 0, i2272, 'm_Material')
  return i2272
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i2294 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i2295 = data
  i2294.sourceFontFileName = i2295[0]
  i2294.sourceFontFileGUID = i2295[1]
  i2294.faceIndex = i2295[2]
  i2294.pointSizeSamplingMode = i2295[3]
  i2294.pointSize = i2295[4]
  i2294.padding = i2295[5]
  i2294.paddingMode = i2295[6]
  i2294.packingMode = i2295[7]
  i2294.atlasWidth = i2295[8]
  i2294.atlasHeight = i2295[9]
  i2294.characterSetSelectionMode = i2295[10]
  i2294.characterSequence = i2295[11]
  i2294.referencedFontAssetGUID = i2295[12]
  i2294.referencedTextAssetGUID = i2295[13]
  i2294.fontStyle = i2295[14]
  i2294.fontStyleModifier = i2295[15]
  i2294.renderMode = i2295[16]
  i2294.includeFontFeatures = !!i2295[17]
  return i2294
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i2298 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i2299 = data
  i2298.m_Index = i2299[0]
  i2298.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2299[1], i2298.m_Metrics)
  i2298.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2299[2], i2298.m_GlyphRect)
  i2298.m_Scale = i2299[3]
  i2298.m_AtlasIndex = i2299[4]
  i2298.m_ClassDefinitionType = i2299[5]
  return i2298
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i2302 = root || request.c( 'TMPro.TMP_Character' )
  var i2303 = data
  i2302.m_ElementType = i2303[0]
  i2302.m_Unicode = i2303[1]
  i2302.m_GlyphIndex = i2303[2]
  i2302.m_Scale = i2303[3]
  return i2302
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i2308 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i2309 = data
  i2308.m_X = i2309[0]
  i2308.m_Y = i2309[1]
  i2308.m_Width = i2309[2]
  i2308.m_Height = i2309[3]
  return i2308
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i2310 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i2311 = data
  var i2313 = i2311[0]
  var i2312 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i2313.length; i += 1) {
    i2312.add(request.d('TMPro.MultipleSubstitutionRecord', i2313[i + 0]));
  }
  i2310.m_MultipleSubstitutionRecords = i2312
  var i2315 = i2311[1]
  var i2314 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i2315.length; i += 1) {
    i2314.add(request.d('TMPro.LigatureSubstitutionRecord', i2315[i + 0]));
  }
  i2310.m_LigatureSubstitutionRecords = i2314
  var i2317 = i2311[2]
  var i2316 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i2317.length; i += 1) {
    i2316.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i2317[i + 0]));
  }
  i2310.m_GlyphPairAdjustmentRecords = i2316
  var i2319 = i2311[3]
  var i2318 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i2319.length; i += 1) {
    i2318.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i2319[i + 0]));
  }
  i2310.m_MarkToBaseAdjustmentRecords = i2318
  var i2321 = i2311[4]
  var i2320 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i2321.length; i += 1) {
    i2320.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i2321[i + 0]));
  }
  i2310.m_MarkToMarkAdjustmentRecords = i2320
  return i2310
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i2324 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i2325 = data
  i2324.m_TargetGlyphID = i2325[0]
  i2324.m_SubstituteGlyphIDs = i2325[1]
  return i2324
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i2328 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i2329 = data
  i2328.m_ComponentGlyphIDs = i2329[0]
  i2328.m_LigatureGlyphID = i2329[1]
  return i2328
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i2332 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i2333 = data
  i2332.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i2333[0], i2332.m_FirstAdjustmentRecord)
  i2332.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i2333[1], i2332.m_SecondAdjustmentRecord)
  i2332.m_FeatureLookupFlags = i2333[2]
  return i2332
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i2334 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i2335 = data
  i2334.m_GlyphIndex = i2335[0]
  i2334.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i2335[1], i2334.m_GlyphValueRecord)
  return i2334
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i2336 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i2337 = data
  i2336.m_XPlacement = i2337[0]
  i2336.m_YPlacement = i2337[1]
  i2336.m_XAdvance = i2337[2]
  i2336.m_YAdvance = i2337[3]
  return i2336
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i2340 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i2341 = data
  i2340.m_BaseGlyphID = i2341[0]
  i2340.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i2341[1], i2340.m_BaseGlyphAnchorPoint)
  i2340.m_MarkGlyphID = i2341[2]
  i2340.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i2341[3], i2340.m_MarkPositionAdjustment)
  return i2340
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i2344 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i2345 = data
  i2344.m_BaseMarkGlyphID = i2345[0]
  i2344.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i2345[1], i2344.m_BaseMarkGlyphAnchorPoint)
  i2344.m_CombiningMarkGlyphID = i2345[2]
  i2344.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i2345[3], i2344.m_CombiningMarkPositionAdjustment)
  return i2344
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i2350 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i2351 = data
  request.r(i2351[0], i2351[1], 0, i2350, 'regularTypeface')
  request.r(i2351[2], i2351[3], 0, i2350, 'italicTypeface')
  return i2350
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i2352 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i2353 = data
  i2352.Name = i2353[0]
  i2352.PointSize = i2353[1]
  i2352.Scale = i2353[2]
  i2352.CharacterCount = i2353[3]
  i2352.LineHeight = i2353[4]
  i2352.Baseline = i2353[5]
  i2352.Ascender = i2353[6]
  i2352.CapHeight = i2353[7]
  i2352.Descender = i2353[8]
  i2352.CenterLine = i2353[9]
  i2352.SuperscriptOffset = i2353[10]
  i2352.SubscriptOffset = i2353[11]
  i2352.SubSize = i2353[12]
  i2352.Underline = i2353[13]
  i2352.UnderlineThickness = i2353[14]
  i2352.strikethrough = i2353[15]
  i2352.strikethroughThickness = i2353[16]
  i2352.TabWidth = i2353[17]
  i2352.Padding = i2353[18]
  i2352.AtlasWidth = i2353[19]
  i2352.AtlasHeight = i2353[20]
  return i2352
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i2356 = root || request.c( 'TMPro.TMP_Glyph' )
  var i2357 = data
  i2356.id = i2357[0]
  i2356.x = i2357[1]
  i2356.y = i2357[2]
  i2356.width = i2357[3]
  i2356.height = i2357[4]
  i2356.xOffset = i2357[5]
  i2356.yOffset = i2357[6]
  i2356.xAdvance = i2357[7]
  i2356.scale = i2357[8]
  return i2356
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i2358 = root || request.c( 'TMPro.KerningTable' )
  var i2359 = data
  var i2361 = i2359[0]
  var i2360 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i2361.length; i += 1) {
    i2360.add(request.d('TMPro.KerningPair', i2361[i + 0]));
  }
  i2358.kerningPairs = i2360
  return i2358
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i2364 = root || request.c( 'TMPro.KerningPair' )
  var i2365 = data
  i2364.xOffset = i2365[0]
  i2364.m_FirstGlyph = i2365[1]
  i2364.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2365[2], i2364.m_FirstGlyphAdjustments)
  i2364.m_SecondGlyph = i2365[3]
  i2364.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2365[4], i2364.m_SecondGlyphAdjustments)
  i2364.m_IgnoreSpacingAdjustments = !!i2365[5]
  return i2364
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i2366 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i2367 = data
  i2366.m_FaceIndex = i2367[0]
  i2366.m_FamilyName = i2367[1]
  i2366.m_StyleName = i2367[2]
  i2366.m_PointSize = i2367[3]
  i2366.m_Scale = i2367[4]
  i2366.m_UnitsPerEM = i2367[5]
  i2366.m_LineHeight = i2367[6]
  i2366.m_AscentLine = i2367[7]
  i2366.m_CapLine = i2367[8]
  i2366.m_MeanLine = i2367[9]
  i2366.m_Baseline = i2367[10]
  i2366.m_DescentLine = i2367[11]
  i2366.m_SuperscriptOffset = i2367[12]
  i2366.m_SuperscriptSize = i2367[13]
  i2366.m_SubscriptOffset = i2367[14]
  i2366.m_SubscriptSize = i2367[15]
  i2366.m_UnderlineOffset = i2367[16]
  i2366.m_UnderlineThickness = i2367[17]
  i2366.m_StrikethroughOffset = i2367[18]
  i2366.m_StrikethroughThickness = i2367[19]
  i2366.m_TabWidth = i2367[20]
  return i2366
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i2368 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i2369 = data
  i2368.useSafeMode = !!i2369[0]
  i2368.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i2369[1], i2368.safeModeOptions)
  i2368.timeScale = i2369[2]
  i2368.unscaledTimeScale = i2369[3]
  i2368.useSmoothDeltaTime = !!i2369[4]
  i2368.maxSmoothUnscaledTime = i2369[5]
  i2368.rewindCallbackMode = i2369[6]
  i2368.showUnityEditorReport = !!i2369[7]
  i2368.logBehaviour = i2369[8]
  i2368.drawGizmos = !!i2369[9]
  i2368.defaultRecyclable = !!i2369[10]
  i2368.defaultAutoPlay = i2369[11]
  i2368.defaultUpdateType = i2369[12]
  i2368.defaultTimeScaleIndependent = !!i2369[13]
  i2368.defaultEaseType = i2369[14]
  i2368.defaultEaseOvershootOrAmplitude = i2369[15]
  i2368.defaultEasePeriod = i2369[16]
  i2368.defaultAutoKill = !!i2369[17]
  i2368.defaultLoopType = i2369[18]
  i2368.debugMode = !!i2369[19]
  i2368.debugStoreTargetId = !!i2369[20]
  i2368.showPreviewPanel = !!i2369[21]
  i2368.storeSettingsLocation = i2369[22]
  i2368.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i2369[23], i2368.modules)
  i2368.createASMDEF = !!i2369[24]
  i2368.showPlayingTweens = !!i2369[25]
  i2368.showPausedTweens = !!i2369[26]
  return i2368
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i2370 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i2371 = data
  i2370.logBehaviour = i2371[0]
  i2370.nestedTweenFailureBehaviour = i2371[1]
  return i2370
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i2372 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i2373 = data
  i2372.showPanel = !!i2373[0]
  i2372.audioEnabled = !!i2373[1]
  i2372.physicsEnabled = !!i2373[2]
  i2372.physics2DEnabled = !!i2373[3]
  i2372.spriteEnabled = !!i2373[4]
  i2372.uiEnabled = !!i2373[5]
  i2372.uiToolkitEnabled = !!i2373[6]
  i2372.textMeshProEnabled = !!i2373[7]
  i2372.tk2DEnabled = !!i2373[8]
  i2372.deAudioEnabled = !!i2373[9]
  i2372.deUnityExtendedEnabled = !!i2373[10]
  i2372.epoOutlineEnabled = !!i2373[11]
  return i2372
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i2374 = root || request.c( 'TMPro.TMP_Settings' )
  var i2375 = data
  i2374.assetVersion = i2375[0]
  i2374.m_TextWrappingMode = i2375[1]
  i2374.m_enableKerning = !!i2375[2]
  var i2377 = i2375[3]
  var i2376 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i2377.length; i += 1) {
    i2376.add(i2377[i + 0]);
  }
  i2374.m_ActiveFontFeatures = i2376
  i2374.m_enableExtraPadding = !!i2375[4]
  i2374.m_enableTintAllSprites = !!i2375[5]
  i2374.m_enableParseEscapeCharacters = !!i2375[6]
  i2374.m_EnableRaycastTarget = !!i2375[7]
  i2374.m_GetFontFeaturesAtRuntime = !!i2375[8]
  i2374.m_missingGlyphCharacter = i2375[9]
  i2374.m_ClearDynamicDataOnBuild = !!i2375[10]
  i2374.m_warningsDisabled = !!i2375[11]
  request.r(i2375[12], i2375[13], 0, i2374, 'm_defaultFontAsset')
  i2374.m_defaultFontAssetPath = i2375[14]
  i2374.m_defaultFontSize = i2375[15]
  i2374.m_defaultAutoSizeMinRatio = i2375[16]
  i2374.m_defaultAutoSizeMaxRatio = i2375[17]
  i2374.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i2375[18], i2375[19] )
  i2374.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i2375[20], i2375[21] )
  i2374.m_autoSizeTextContainer = !!i2375[22]
  i2374.m_IsTextObjectScaleStatic = !!i2375[23]
  var i2379 = i2375[24]
  var i2378 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2379.length; i += 2) {
  request.r(i2379[i + 0], i2379[i + 1], 1, i2378, '')
  }
  i2374.m_fallbackFontAssets = i2378
  i2374.m_matchMaterialPreset = !!i2375[25]
  i2374.m_HideSubTextObjects = !!i2375[26]
  request.r(i2375[27], i2375[28], 0, i2374, 'm_defaultSpriteAsset')
  i2374.m_defaultSpriteAssetPath = i2375[29]
  i2374.m_enableEmojiSupport = !!i2375[30]
  i2374.m_MissingCharacterSpriteUnicode = i2375[31]
  var i2381 = i2375[32]
  var i2380 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i2381.length; i += 2) {
  request.r(i2381[i + 0], i2381[i + 1], 1, i2380, '')
  }
  i2374.m_EmojiFallbackTextAssets = i2380
  i2374.m_defaultColorGradientPresetsPath = i2375[33]
  request.r(i2375[34], i2375[35], 0, i2374, 'm_defaultStyleSheet')
  i2374.m_StyleSheetsResourcePath = i2375[36]
  request.r(i2375[37], i2375[38], 0, i2374, 'm_leadingCharacters')
  request.r(i2375[39], i2375[40], 0, i2374, 'm_followingCharacters')
  i2374.m_UseModernHangulLineBreakingRules = !!i2375[41]
  return i2374
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i2384 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i2385 = data
  request.r(i2385[0], i2385[1], 0, i2384, 'spriteSheet')
  var i2387 = i2385[2]
  var i2386 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i2387.length; i += 1) {
    i2386.add(request.d('TMPro.TMP_Sprite', i2387[i + 0]));
  }
  i2384.spriteInfoList = i2386
  var i2389 = i2385[3]
  var i2388 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i2389.length; i += 2) {
  request.r(i2389[i + 0], i2389[i + 1], 1, i2388, '')
  }
  i2384.fallbackSpriteAssets = i2388
  var i2391 = i2385[4]
  var i2390 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i2391.length; i += 1) {
    i2390.add(request.d('TMPro.TMP_SpriteCharacter', i2391[i + 0]));
  }
  i2384.m_SpriteCharacterTable = i2390
  var i2393 = i2385[5]
  var i2392 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i2393.length; i += 1) {
    i2392.add(request.d('TMPro.TMP_SpriteGlyph', i2393[i + 0]));
  }
  i2384.m_GlyphTable = i2392
  i2384.m_Version = i2385[6]
  i2384.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2385[7], i2384.m_FaceInfo)
  request.r(i2385[8], i2385[9], 0, i2384, 'm_Material')
  return i2384
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i2396 = root || request.c( 'TMPro.TMP_Sprite' )
  var i2397 = data
  i2396.name = i2397[0]
  i2396.hashCode = i2397[1]
  i2396.unicode = i2397[2]
  i2396.pivot = new pc.Vec2( i2397[3], i2397[4] )
  request.r(i2397[5], i2397[6], 0, i2396, 'sprite')
  i2396.id = i2397[7]
  i2396.x = i2397[8]
  i2396.y = i2397[9]
  i2396.width = i2397[10]
  i2396.height = i2397[11]
  i2396.xOffset = i2397[12]
  i2396.yOffset = i2397[13]
  i2396.xAdvance = i2397[14]
  i2396.scale = i2397[15]
  return i2396
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i2402 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i2403 = data
  i2402.m_Name = i2403[0]
  i2402.m_ElementType = i2403[1]
  i2402.m_Unicode = i2403[2]
  i2402.m_GlyphIndex = i2403[3]
  i2402.m_Scale = i2403[4]
  return i2402
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i2406 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i2407 = data
  request.r(i2407[0], i2407[1], 0, i2406, 'sprite')
  i2406.m_Index = i2407[2]
  i2406.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2407[3], i2406.m_Metrics)
  i2406.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2407[4], i2406.m_GlyphRect)
  i2406.m_Scale = i2407[5]
  i2406.m_AtlasIndex = i2407[6]
  i2406.m_ClassDefinitionType = i2407[7]
  return i2406
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i2408 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i2409 = data
  i2408.m_Width = i2409[0]
  i2408.m_Height = i2409[1]
  i2408.m_HorizontalBearingX = i2409[2]
  i2408.m_HorizontalBearingY = i2409[3]
  i2408.m_HorizontalAdvance = i2409[4]
  return i2408
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i2410 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i2411 = data
  var i2413 = i2411[0]
  var i2412 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i2413.length; i += 1) {
    i2412.add(request.d('TMPro.TMP_Style', i2413[i + 0]));
  }
  i2410.m_StyleList = i2412
  return i2410
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i2416 = root || request.c( 'TMPro.TMP_Style' )
  var i2417 = data
  i2416.m_Name = i2417[0]
  i2416.m_HashCode = i2417[1]
  i2416.m_OpeningDefinition = i2417[2]
  i2416.m_ClosingDefinition = i2417[3]
  i2416.m_OpeningTagArray = i2417[4]
  i2416.m_ClosingTagArray = i2417[5]
  return i2416
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i2418 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i2419 = data
  var i2421 = i2419[0]
  var i2420 = []
  for(var i = 0; i < i2421.length; i += 1) {
    i2420.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i2421[i + 0]) );
  }
  i2418.files = i2420
  i2418.componentToPrefabIds = i2419[1]
  return i2418
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i2424 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i2425 = data
  i2424.path = i2425[0]
  request.r(i2425[1], i2425[2], 0, i2424, 'unityObject')
  return i2424
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i2426 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i2427 = data
  var i2429 = i2427[0]
  var i2428 = []
  for(var i = 0; i < i2429.length; i += 1) {
    i2428.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i2429[i + 0]) );
  }
  i2426.scriptsExecutionOrder = i2428
  var i2431 = i2427[1]
  var i2430 = []
  for(var i = 0; i < i2431.length; i += 1) {
    i2430.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i2431[i + 0]) );
  }
  i2426.sortingLayers = i2430
  var i2433 = i2427[2]
  var i2432 = []
  for(var i = 0; i < i2433.length; i += 1) {
    i2432.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i2433[i + 0]) );
  }
  i2426.cullingLayers = i2432
  i2426.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i2427[3], i2426.timeSettings)
  i2426.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i2427[4], i2426.physicsSettings)
  i2426.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i2427[5], i2426.physics2DSettings)
  i2426.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2427[6], i2426.qualitySettings)
  i2426.enableRealtimeShadows = !!i2427[7]
  i2426.enableAutoInstancing = !!i2427[8]
  i2426.enableStaticBatching = !!i2427[9]
  i2426.enableDynamicBatching = !!i2427[10]
  i2426.lightmapEncodingQuality = i2427[11]
  i2426.desiredColorSpace = i2427[12]
  var i2435 = i2427[13]
  var i2434 = []
  for(var i = 0; i < i2435.length; i += 1) {
    i2434.push( i2435[i + 0] );
  }
  i2426.allTags = i2434
  return i2426
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i2438 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i2439 = data
  i2438.name = i2439[0]
  i2438.value = i2439[1]
  return i2438
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i2442 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i2443 = data
  i2442.id = i2443[0]
  i2442.name = i2443[1]
  i2442.value = i2443[2]
  return i2442
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i2446 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i2447 = data
  i2446.id = i2447[0]
  i2446.name = i2447[1]
  return i2446
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i2448 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i2449 = data
  i2448.fixedDeltaTime = i2449[0]
  i2448.maximumDeltaTime = i2449[1]
  i2448.timeScale = i2449[2]
  i2448.maximumParticleTimestep = i2449[3]
  return i2448
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i2450 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i2451 = data
  i2450.gravity = new pc.Vec3( i2451[0], i2451[1], i2451[2] )
  i2450.defaultSolverIterations = i2451[3]
  i2450.bounceThreshold = i2451[4]
  i2450.autoSyncTransforms = !!i2451[5]
  i2450.autoSimulation = !!i2451[6]
  var i2453 = i2451[7]
  var i2452 = []
  for(var i = 0; i < i2453.length; i += 1) {
    i2452.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i2453[i + 0]) );
  }
  i2450.collisionMatrix = i2452
  return i2450
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i2456 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i2457 = data
  i2456.enabled = !!i2457[0]
  i2456.layerId = i2457[1]
  i2456.otherLayerId = i2457[2]
  return i2456
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i2458 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i2459 = data
  request.r(i2459[0], i2459[1], 0, i2458, 'material')
  i2458.gravity = new pc.Vec2( i2459[2], i2459[3] )
  i2458.positionIterations = i2459[4]
  i2458.velocityIterations = i2459[5]
  i2458.velocityThreshold = i2459[6]
  i2458.maxLinearCorrection = i2459[7]
  i2458.maxAngularCorrection = i2459[8]
  i2458.maxTranslationSpeed = i2459[9]
  i2458.maxRotationSpeed = i2459[10]
  i2458.baumgarteScale = i2459[11]
  i2458.baumgarteTOIScale = i2459[12]
  i2458.timeToSleep = i2459[13]
  i2458.linearSleepTolerance = i2459[14]
  i2458.angularSleepTolerance = i2459[15]
  i2458.defaultContactOffset = i2459[16]
  i2458.autoSimulation = !!i2459[17]
  i2458.queriesHitTriggers = !!i2459[18]
  i2458.queriesStartInColliders = !!i2459[19]
  i2458.callbacksOnDisable = !!i2459[20]
  i2458.reuseCollisionCallbacks = !!i2459[21]
  i2458.autoSyncTransforms = !!i2459[22]
  var i2461 = i2459[23]
  var i2460 = []
  for(var i = 0; i < i2461.length; i += 1) {
    i2460.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i2461[i + 0]) );
  }
  i2458.collisionMatrix = i2460
  return i2458
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i2464 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i2465 = data
  i2464.enabled = !!i2465[0]
  i2464.layerId = i2465[1]
  i2464.otherLayerId = i2465[2]
  return i2464
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i2466 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i2467 = data
  var i2469 = i2467[0]
  var i2468 = []
  for(var i = 0; i < i2469.length; i += 1) {
    i2468.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2469[i + 0]) );
  }
  i2466.qualityLevels = i2468
  var i2471 = i2467[1]
  var i2470 = []
  for(var i = 0; i < i2471.length; i += 1) {
    i2470.push( i2471[i + 0] );
  }
  i2466.names = i2470
  i2466.shadows = i2467[2]
  i2466.anisotropicFiltering = i2467[3]
  i2466.antiAliasing = i2467[4]
  i2466.lodBias = i2467[5]
  i2466.shadowCascades = i2467[6]
  i2466.shadowDistance = i2467[7]
  i2466.shadowmaskMode = i2467[8]
  i2466.shadowProjection = i2467[9]
  i2466.shadowResolution = i2467[10]
  i2466.softParticles = !!i2467[11]
  i2466.softVegetation = !!i2467[12]
  i2466.activeColorSpace = i2467[13]
  i2466.desiredColorSpace = i2467[14]
  i2466.masterTextureLimit = i2467[15]
  i2466.maxQueuedFrames = i2467[16]
  i2466.particleRaycastBudget = i2467[17]
  i2466.pixelLightCount = i2467[18]
  i2466.realtimeReflectionProbes = !!i2467[19]
  i2466.shadowCascade2Split = i2467[20]
  i2466.shadowCascade4Split = new pc.Vec3( i2467[21], i2467[22], i2467[23] )
  i2466.streamingMipmapsActive = !!i2467[24]
  i2466.vSyncCount = i2467[25]
  i2466.asyncUploadBufferSize = i2467[26]
  i2466.asyncUploadTimeSlice = i2467[27]
  i2466.billboardsFaceCameraPosition = !!i2467[28]
  i2466.shadowNearPlaneOffset = i2467[29]
  i2466.streamingMipmapsMemoryBudget = i2467[30]
  i2466.maximumLODLevel = i2467[31]
  i2466.streamingMipmapsAddAllCameras = !!i2467[32]
  i2466.streamingMipmapsMaxLevelReduction = i2467[33]
  i2466.streamingMipmapsRenderersPerFrame = i2467[34]
  i2466.resolutionScalingFixedDPIFactor = i2467[35]
  i2466.streamingMipmapsMaxFileIORequests = i2467[36]
  i2466.currentQualityLevel = i2467[37]
  return i2466
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i2476 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i2477 = data
  i2476.weight = i2477[0]
  i2476.vertices = i2477[1]
  i2476.normals = i2477[2]
  i2476.tangents = i2477[3]
  return i2476
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i2480 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i2481 = data
  i2480.mode = i2481[0]
  i2480.parameter = i2481[1]
  i2480.threshold = i2481[2]
  return i2480
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i2482 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i2483 = data
  i2482.m_XCoordinate = i2483[0]
  i2482.m_YCoordinate = i2483[1]
  return i2482
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i2484 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i2485 = data
  i2484.m_XPositionAdjustment = i2485[0]
  i2484.m_YPositionAdjustment = i2485[1]
  return i2484
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i2486 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i2487 = data
  i2486.xPlacement = i2487[0]
  i2486.yPlacement = i2487[1]
  i2486.xAdvance = i2487[2]
  i2486.yAdvance = i2487[3]
  return i2486
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2}}

Deserializers.requiredComponents = {"45":[46],"47":[46],"48":[46],"49":[46],"50":[46],"51":[46],"52":[53],"54":[2],"55":[56],"57":[56],"58":[56],"59":[56],"60":[56],"61":[56],"62":[63],"64":[63],"65":[63],"66":[63],"67":[63],"68":[63],"69":[63],"70":[63],"71":[63],"72":[63],"73":[63],"74":[63],"75":[63],"76":[2],"77":[78],"79":[80],"81":[80],"23":[22],"6":[2],"14":[82],"20":[9,82],"19":[82],"83":[63],"84":[85],"86":[82],"87":[9],"88":[2],"89":[90],"91":[37],"92":[23],"93":[22],"94":[78,22],"28":[22,27],"95":[22],"96":[27,22],"97":[78],"98":[27,22],"99":[22],"100":[101],"102":[101],"103":[101],"104":[22],"105":[22],"26":[23],"30":[27,22],"106":[22],"25":[23],"107":[22],"108":[22],"109":[22],"110":[22],"111":[22],"112":[22],"113":[22],"114":[22],"115":[22],"116":[27,22],"117":[22],"118":[22],"119":[22],"120":[22],"121":[27,22],"122":[22],"123":[37],"124":[37],"38":[37],"125":[37],"126":[2],"127":[2]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.MonoBehaviour","CameraFollow2D","AutoCameraFit","UnityEngine.Transform","MoveBetweenPoints","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.Material","ScreenHeightPositionAnchor","UnityEngine.BoxCollider","ClickToStore","Ply_SoundManager","UnityEngine.AudioClip","UnityEngine.AudioSource","ItemSequenceManager","DraggableItem","CharacterDropZone","UnityEngine.GameObject","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","UnityEngine.UI.Image","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","CharacterItemData","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Mesh","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.Font","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.Collider","BatStrikeController","SlotTrigger","UnityEngine.BoxCollider2D","PlayerSlot","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.InputSystem.UI.InputSystemUIInputModule","UnityEngine.InputSystem.UI.TrackedDeviceRaycaster","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.38f1";

Deserializers.productName = "PLY_MiniSoccer";

Deserializers.lunaInitializationTime = "07/15/2026 03:53:54";

Deserializers.lunaDaysRunning = "16.2";

Deserializers.lunaVersion = "7.1.0";

Deserializers.lunaSHA = "cf93782349542fe0b84ad13951a26809f8419628";

Deserializers.creativeName = "MiniSoccer_PLY14";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1759";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4739";

Deserializers.runtimeAnalysisExcludedModules = "prefabs";

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

Deserializers.buildID = "91fb1e93-2e1a-4187-804c-fbf54611bbff";

Deserializers.runtimeInitializeOnLoadInfos = [[["Unity","Services","Core","Internal","UnityServicesInitializer","EnableServicesInitializationAsync"],["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["DG","Tweening","DOTween","RuntimeOnLoad"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["Unity","Services","Core","Registration","CorePackageInitializer","InitializeOnLoad"],["Unity","Services","Core","Internal","TaskAsyncOperation","SetScheduler"],["Unity","Services","Core","Environments","Client","Scheduler","EngineStateHelper","Init"],["Unity","Services","Core","Environments","Client","Scheduler","ThreadHelper","Init"],["Ua2CoreInitializeCallback","Register"],["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["Unity","AI","Navigation","NavMeshLink","ClearTrackedList"],["Unity","AI","Navigation","NavMeshSurface","ClearNavMeshSurfaces"],["Unity","AI","Navigation","NavMeshModifierVolume","ClearNavMeshModifiers"],["Unity","AI","Navigation","NavMeshModifier","ClearNavMeshModifiers"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["Unity","Services","Core","Internal","UnityServicesInitializer","CreateStaticInstance"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[["Unity","Services","Core","Environments","Client","Http","JsonHelpers","RegisterTypesForAOT"]],[["Unity","Services","Core","UnityThreadUtils","CaptureUnityThreadInfo"],["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

