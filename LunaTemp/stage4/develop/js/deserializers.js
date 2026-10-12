var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i3100 = root || request.c( 'UnityEngine.JointSpring' )
  var i3101 = data
  i3100.spring = i3101[0]
  i3100.damper = i3101[1]
  i3100.targetPosition = i3101[2]
  return i3100
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i3102 = root || request.c( 'UnityEngine.JointMotor' )
  var i3103 = data
  i3102.m_TargetVelocity = i3103[0]
  i3102.m_Force = i3103[1]
  i3102.m_FreeSpin = i3103[2]
  return i3102
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i3104 = root || request.c( 'UnityEngine.JointLimits' )
  var i3105 = data
  i3104.m_Min = i3105[0]
  i3104.m_Max = i3105[1]
  i3104.m_Bounciness = i3105[2]
  i3104.m_BounceMinVelocity = i3105[3]
  i3104.m_ContactDistance = i3105[4]
  i3104.minBounce = i3105[5]
  i3104.maxBounce = i3105[6]
  return i3104
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i3106 = root || request.c( 'UnityEngine.JointDrive' )
  var i3107 = data
  i3106.m_PositionSpring = i3107[0]
  i3106.m_PositionDamper = i3107[1]
  i3106.m_MaximumForce = i3107[2]
  i3106.m_UseAcceleration = i3107[3]
  return i3106
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i3108 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i3109 = data
  i3108.m_Spring = i3109[0]
  i3108.m_Damper = i3109[1]
  return i3108
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i3110 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i3111 = data
  i3110.m_Limit = i3111[0]
  i3110.m_Bounciness = i3111[1]
  i3110.m_ContactDistance = i3111[2]
  return i3110
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i3112 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i3113 = data
  i3112.m_ExtremumSlip = i3113[0]
  i3112.m_ExtremumValue = i3113[1]
  i3112.m_AsymptoteSlip = i3113[2]
  i3112.m_AsymptoteValue = i3113[3]
  i3112.m_Stiffness = i3113[4]
  return i3112
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i3114 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i3115 = data
  i3114.m_LowerAngle = i3115[0]
  i3114.m_UpperAngle = i3115[1]
  return i3114
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i3116 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i3117 = data
  i3116.m_MotorSpeed = i3117[0]
  i3116.m_MaximumMotorTorque = i3117[1]
  return i3116
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i3118 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i3119 = data
  i3118.m_DampingRatio = i3119[0]
  i3118.m_Frequency = i3119[1]
  i3118.m_Angle = i3119[2]
  return i3118
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i3120 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i3121 = data
  i3120.m_LowerTranslation = i3121[0]
  i3120.m_UpperTranslation = i3121[1]
  return i3120
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i3122 = root || new pc.UnityMaterial()
  var i3123 = data
  i3122.name = i3123[0]
  request.r(i3123[1], i3123[2], 0, i3122, 'shader')
  i3122.renderQueue = i3123[3]
  i3122.enableInstancing = !!i3123[4]
  var i3125 = i3123[5]
  var i3124 = []
  for(var i = 0; i < i3125.length; i += 1) {
    i3124.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i3125[i + 0]) );
  }
  i3122.floatParameters = i3124
  var i3127 = i3123[6]
  var i3126 = []
  for(var i = 0; i < i3127.length; i += 1) {
    i3126.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i3127[i + 0]) );
  }
  i3122.colorParameters = i3126
  var i3129 = i3123[7]
  var i3128 = []
  for(var i = 0; i < i3129.length; i += 1) {
    i3128.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i3129[i + 0]) );
  }
  i3122.vectorParameters = i3128
  var i3131 = i3123[8]
  var i3130 = []
  for(var i = 0; i < i3131.length; i += 1) {
    i3130.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i3131[i + 0]) );
  }
  i3122.textureParameters = i3130
  var i3133 = i3123[9]
  var i3132 = []
  for(var i = 0; i < i3133.length; i += 1) {
    i3132.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i3133[i + 0]) );
  }
  i3122.materialFlags = i3132
  return i3122
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i3136 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i3137 = data
  i3136.name = i3137[0]
  i3136.value = i3137[1]
  return i3136
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i3140 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i3141 = data
  i3140.name = i3141[0]
  i3140.value = new pc.Color(i3141[1], i3141[2], i3141[3], i3141[4])
  return i3140
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i3144 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i3145 = data
  i3144.name = i3145[0]
  i3144.value = new pc.Vec4( i3145[1], i3145[2], i3145[3], i3145[4] )
  return i3144
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i3148 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i3149 = data
  i3148.name = i3149[0]
  request.r(i3149[1], i3149[2], 0, i3148, 'value')
  return i3148
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i3152 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i3153 = data
  i3152.name = i3153[0]
  i3152.enabled = !!i3153[1]
  return i3152
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i3154 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i3155 = data
  i3154.name = i3155[0]
  i3154.width = i3155[1]
  i3154.height = i3155[2]
  i3154.mipmapCount = i3155[3]
  i3154.anisoLevel = i3155[4]
  i3154.filterMode = i3155[5]
  i3154.hdr = !!i3155[6]
  i3154.format = i3155[7]
  i3154.wrapMode = i3155[8]
  i3154.alphaIsTransparency = !!i3155[9]
  i3154.alphaSource = i3155[10]
  i3154.graphicsFormat = i3155[11]
  i3154.sRGBTexture = !!i3155[12]
  i3154.desiredColorSpace = i3155[13]
  i3154.wrapU = i3155[14]
  i3154.wrapV = i3155[15]
  return i3154
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i3156 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i3157 = data
  i3156.name = i3157[0]
  i3156.halfPrecision = !!i3157[1]
  i3156.useSimplification = !!i3157[2]
  i3156.useUInt32IndexFormat = !!i3157[3]
  i3156.vertexCount = i3157[4]
  i3156.aabb = i3157[5]
  var i3159 = i3157[6]
  var i3158 = []
  for(var i = 0; i < i3159.length; i += 1) {
    i3158.push( !!i3159[i + 0] );
  }
  i3156.streams = i3158
  i3156.vertices = i3157[7]
  var i3161 = i3157[8]
  var i3160 = []
  for(var i = 0; i < i3161.length; i += 1) {
    i3160.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i3161[i + 0]) );
  }
  i3156.subMeshes = i3160
  var i3163 = i3157[9]
  var i3162 = []
  for(var i = 0; i < i3163.length; i += 16) {
    i3162.push( new pc.Mat4().setData(i3163[i + 0], i3163[i + 1], i3163[i + 2], i3163[i + 3],  i3163[i + 4], i3163[i + 5], i3163[i + 6], i3163[i + 7],  i3163[i + 8], i3163[i + 9], i3163[i + 10], i3163[i + 11],  i3163[i + 12], i3163[i + 13], i3163[i + 14], i3163[i + 15]) );
  }
  i3156.bindposes = i3162
  var i3165 = i3157[10]
  var i3164 = []
  for(var i = 0; i < i3165.length; i += 1) {
    i3164.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i3165[i + 0]) );
  }
  i3156.blendShapes = i3164
  return i3156
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i3170 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i3171 = data
  i3170.triangles = i3171[0]
  return i3170
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i3176 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i3177 = data
  i3176.name = i3177[0]
  var i3179 = i3177[1]
  var i3178 = []
  for(var i = 0; i < i3179.length; i += 1) {
    i3178.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i3179[i + 0]) );
  }
  i3176.frames = i3178
  return i3176
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i3180 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i3181 = data
  i3180.name = i3181[0]
  i3180.index = i3181[1]
  i3180.startup = !!i3181[2]
  return i3180
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i3182 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i3183 = data
  i3182.aspect = i3183[0]
  i3182.orthographic = !!i3183[1]
  i3182.orthographicSize = i3183[2]
  i3182.backgroundColor = new pc.Color(i3183[3], i3183[4], i3183[5], i3183[6])
  i3182.nearClipPlane = i3183[7]
  i3182.farClipPlane = i3183[8]
  i3182.fieldOfView = i3183[9]
  i3182.depth = i3183[10]
  i3182.clearFlags = i3183[11]
  i3182.cullingMask = i3183[12]
  i3182.rect = i3183[13]
  request.r(i3183[14], i3183[15], 0, i3182, 'targetTexture')
  i3182.usePhysicalProperties = !!i3183[16]
  i3182.focalLength = i3183[17]
  i3182.sensorSize = new pc.Vec2( i3183[18], i3183[19] )
  i3182.lensShift = new pc.Vec2( i3183[20], i3183[21] )
  i3182.gateFit = i3183[22]
  i3182.commandBufferCount = i3183[23]
  i3182.cameraType = i3183[24]
  i3182.enabled = !!i3183[25]
  return i3182
}

Deserializers["CameraFollow2D"] = function (request, data, root) {
  var i3184 = root || request.c( 'CameraFollow2D' )
  var i3185 = data
  request.r(i3185[0], i3185[1], 0, i3184, 'target')
  i3184.smoothSpeed = i3185[2]
  i3184.offset = new pc.Vec3( i3185[3], i3185[4], i3185[5] )
  i3184.followY = !!i3185[6]
  return i3184
}

Deserializers["AutoCameraFit"] = function (request, data, root) {
  var i3186 = root || request.c( 'AutoCameraFit' )
  var i3187 = data
  request.r(i3187[0], i3187[1], 0, i3186, 'tallScreenObject')
  i3186.tallScreenRatioThreshold = i3187[2]
  i3186.tallScreenYOffset = i3187[3]
  request.r(i3187[4], i3187[5], 0, i3186, 'canvasBtn')
  request.r(i3187[6], i3187[7], 0, i3186, 'targetArea')
  i3186.paddingLandscape = i3187[8]
  i3186.paddingPortrait = i3187[9]
  i3186.extraPaddingSmallScreen = i3187[10]
  i3186.smallScreenThreshold = i3187[11]
  i3186.autoUpdateOnResize = !!i3187[12]
  i3186.adjustInEditMode = !!i3187[13]
  return i3186
}

Deserializers["MoveBetweenPoints"] = function (request, data, root) {
  var i3188 = root || request.c( 'MoveBetweenPoints' )
  var i3189 = data
  request.r(i3189[0], i3189[1], 0, i3188, 'pointA')
  request.r(i3189[2], i3189[3], 0, i3188, 'pointB')
  i3188.duration = i3189[4]
  return i3188
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i3190 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i3191 = data
  i3190.color = new pc.Color(i3191[0], i3191[1], i3191[2], i3191[3])
  request.r(i3191[4], i3191[5], 0, i3190, 'sprite')
  i3190.flipX = !!i3191[6]
  i3190.flipY = !!i3191[7]
  i3190.drawMode = i3191[8]
  i3190.size = new pc.Vec2( i3191[9], i3191[10] )
  i3190.tileMode = i3191[11]
  i3190.adaptiveModeThreshold = i3191[12]
  i3190.maskInteraction = i3191[13]
  i3190.spriteSortPoint = i3191[14]
  i3190.enabled = !!i3191[15]
  request.r(i3191[16], i3191[17], 0, i3190, 'sharedMaterial')
  var i3193 = i3191[18]
  var i3192 = []
  for(var i = 0; i < i3193.length; i += 2) {
  request.r(i3193[i + 0], i3193[i + 1], 2, i3192, '')
  }
  i3190.sharedMaterials = i3192
  i3190.receiveShadows = !!i3191[19]
  i3190.shadowCastingMode = i3191[20]
  i3190.sortingLayerID = i3191[21]
  i3190.sortingOrder = i3191[22]
  i3190.lightmapIndex = i3191[23]
  i3190.lightmapSceneIndex = i3191[24]
  i3190.lightmapScaleOffset = new pc.Vec4( i3191[25], i3191[26], i3191[27], i3191[28] )
  i3190.lightProbeUsage = i3191[29]
  i3190.reflectionProbeUsage = i3191[30]
  return i3190
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i3196 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i3197 = data
  i3196.name = i3197[0]
  i3196.tagId = i3197[1]
  i3196.enabled = !!i3197[2]
  i3196.isStatic = !!i3197[3]
  i3196.layer = i3197[4]
  return i3196
}

Deserializers["ScreenHeightPositionAnchor"] = function (request, data, root) {
  var i3198 = root || request.c( 'ScreenHeightPositionAnchor' )
  var i3199 = data
  request.r(i3199[0], i3199[1], 0, i3198, 'anchorPoint')
  request.r(i3199[2], i3199[3], 0, i3198, 'targetCamera')
  i3198.viewportYRatio = i3199[4]
  i3198.alignOnStart = !!i3199[5]
  i3198.alignOnEnable = !!i3199[6]
  i3198.realignOnScreenSizeChanged = !!i3199[7]
  i3198.drawGizmos = !!i3199[8]
  i3198.targetLineColor = new pc.Color(i3199[9], i3199[10], i3199[11], i3199[12])
  i3198.anchorColor = new pc.Color(i3199[13], i3199[14], i3199[15], i3199[16])
  return i3198
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i3200 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i3201 = data
  i3200.center = new pc.Vec3( i3201[0], i3201[1], i3201[2] )
  i3200.size = new pc.Vec3( i3201[3], i3201[4], i3201[5] )
  i3200.enabled = !!i3201[6]
  i3200.isTrigger = !!i3201[7]
  request.r(i3201[8], i3201[9], 0, i3200, 'material')
  return i3200
}

Deserializers["ClickToStore"] = function (request, data, root) {
  var i3202 = root || request.c( 'ClickToStore' )
  var i3203 = data
  return i3202
}

Deserializers["Ply_SoundManager"] = function (request, data, root) {
  var i3204 = root || request.c( 'Ply_SoundManager' )
  var i3205 = data
  i3204.fxAudio = request.d('FxAudio', i3205[0], i3204.fxAudio)
  request.r(i3205[1], i3205[2], 0, i3204, 'bgm1')
  return i3204
}

Deserializers["FxAudio"] = function (request, data, root) {
  var i3206 = root || request.c( 'FxAudio' )
  var i3207 = data
  i3206.Angry = request.d('SoundData', i3207[0], i3206.Angry)
  i3206.Cry = request.d('SoundData', i3207[1], i3206.Cry)
  i3206.Hehe = request.d('SoundData', i3207[2], i3206.Hehe)
  i3206.Huh = request.d('SoundData', i3207[3], i3206.Huh)
  i3206.RoarTiger = request.d('SoundData', i3207[4], i3206.RoarTiger)
  i3206.Siuu = request.d('SoundData', i3207[5], i3206.Siuu)
  i3206.True = request.d('SoundData', i3207[6], i3206.True)
  i3206.False = request.d('SoundData', i3207[7], i3206.False)
  return i3206
}

Deserializers["SoundData"] = function (request, data, root) {
  var i3208 = root || request.c( 'SoundData' )
  var i3209 = data
  request.r(i3209[0], i3209[1], 0, i3208, 'clip')
  i3208.repeatCount = i3209[2]
  return i3208
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i3210 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i3211 = data
  request.r(i3211[0], i3211[1], 0, i3210, 'clip')
  request.r(i3211[2], i3211[3], 0, i3210, 'outputAudioMixerGroup')
  i3210.playOnAwake = !!i3211[4]
  i3210.loop = !!i3211[5]
  i3210.time = i3211[6]
  i3210.volume = i3211[7]
  i3210.pitch = i3211[8]
  i3210.enabled = !!i3211[9]
  return i3210
}

Deserializers["ItemSequenceManager"] = function (request, data, root) {
  var i3212 = root || request.c( 'ItemSequenceManager' )
  var i3213 = data
  var i3215 = i3213[0]
  var i3214 = new (System.Collections.Generic.List$1(Bridge.ns('DraggableItem')))
  for(var i = 0; i < i3215.length; i += 2) {
  request.r(i3215[i + 0], i3215[i + 1], 1, i3214, '')
  }
  i3212.itemList = i3214
  request.r(i3213[1], i3213[2], 0, i3212, 'spawnPoint')
  request.r(i3213[3], i3213[4], 0, i3212, 'targetPoint')
  i3212.moveDuration = i3213[5]
  i3212.moveEase = i3213[6]
  i3212.delayBetweenItems = i3213[7]
  var i3217 = i3213[8]
  var i3216 = new (System.Collections.Generic.List$1(Bridge.ns('CharacterSlot')))
  for(var i = 0; i < i3217.length; i += 2) {
  request.r(i3217[i + 0], i3217[i + 1], 1, i3216, '')
  }
  i3212.characterList = i3216
  i3212.isWin = !!i3213[9]
  request.r(i3213[10], i3213[11], 0, i3212, 'winObject')
  i3212.winFxType = i3213[12]
  request.r(i3213[13], i3213[14], 0, i3212, 'loseObject')
  i3212.loseFxType = i3213[15]
  i3212.resultTextDelay = i3213[16]
  request.r(i3213[17], i3213[18], 0, i3212, 'gameplayObject')
  request.r(i3213[19], i3213[20], 0, i3212, 'endcardObject')
  request.r(i3213[21], i3213[22], 0, i3212, 'objectToHideOnFirstDrag')
  i3212.endcardDelay = i3213[23]
  i3212.isFailedMode = !!i3213[24]
  return i3212
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i3222 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i3223 = data
  i3222.pivot = new pc.Vec2( i3223[0], i3223[1] )
  i3222.anchorMin = new pc.Vec2( i3223[2], i3223[3] )
  i3222.anchorMax = new pc.Vec2( i3223[4], i3223[5] )
  i3222.sizeDelta = new pc.Vec2( i3223[6], i3223[7] )
  i3222.anchoredPosition3D = new pc.Vec3( i3223[8], i3223[9], i3223[10] )
  i3222.rotation = new pc.Quat(i3223[11], i3223[12], i3223[13], i3223[14])
  i3222.scale = new pc.Vec3( i3223[15], i3223[16], i3223[17] )
  return i3222
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i3224 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i3225 = data
  i3224.planeDistance = i3225[0]
  i3224.referencePixelsPerUnit = i3225[1]
  i3224.isFallbackOverlay = !!i3225[2]
  i3224.renderMode = i3225[3]
  i3224.renderOrder = i3225[4]
  i3224.sortingLayerName = i3225[5]
  i3224.sortingOrder = i3225[6]
  i3224.scaleFactor = i3225[7]
  request.r(i3225[8], i3225[9], 0, i3224, 'worldCamera')
  i3224.overrideSorting = !!i3225[10]
  i3224.pixelPerfect = !!i3225[11]
  i3224.targetDisplay = i3225[12]
  i3224.overridePixelPerfect = !!i3225[13]
  i3224.enabled = !!i3225[14]
  return i3224
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i3226 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i3227 = data
  i3226.m_UiScaleMode = i3227[0]
  i3226.m_ReferencePixelsPerUnit = i3227[1]
  i3226.m_ScaleFactor = i3227[2]
  i3226.m_ReferenceResolution = new pc.Vec2( i3227[3], i3227[4] )
  i3226.m_ScreenMatchMode = i3227[5]
  i3226.m_MatchWidthOrHeight = i3227[6]
  i3226.m_PhysicalUnit = i3227[7]
  i3226.m_FallbackScreenDPI = i3227[8]
  i3226.m_DefaultSpriteDPI = i3227[9]
  i3226.m_DynamicPixelsPerUnit = i3227[10]
  i3226.m_PresetInfoIsWorld = !!i3227[11]
  return i3226
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i3228 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i3229 = data
  i3228.m_IgnoreReversedGraphics = !!i3229[0]
  i3228.m_BlockingObjects = i3229[1]
  i3228.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i3229[2] )
  return i3228
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i3230 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i3231 = data
  i3230.cullTransparentMesh = !!i3231[0]
  return i3230
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i3232 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i3233 = data
  i3232.m_hasFontAssetChanged = !!i3233[0]
  request.r(i3233[1], i3233[2], 0, i3232, 'm_baseMaterial')
  i3232.m_maskOffset = new pc.Vec4( i3233[3], i3233[4], i3233[5], i3233[6] )
  i3232.m_text = i3233[7]
  i3232.m_isRightToLeft = !!i3233[8]
  request.r(i3233[9], i3233[10], 0, i3232, 'm_fontAsset')
  request.r(i3233[11], i3233[12], 0, i3232, 'm_sharedMaterial')
  var i3235 = i3233[13]
  var i3234 = []
  for(var i = 0; i < i3235.length; i += 2) {
  request.r(i3235[i + 0], i3235[i + 1], 2, i3234, '')
  }
  i3232.m_fontSharedMaterials = i3234
  request.r(i3233[14], i3233[15], 0, i3232, 'm_fontMaterial')
  var i3237 = i3233[16]
  var i3236 = []
  for(var i = 0; i < i3237.length; i += 2) {
  request.r(i3237[i + 0], i3237[i + 1], 2, i3236, '')
  }
  i3232.m_fontMaterials = i3236
  i3232.m_fontColor32 = UnityEngine.Color32.ConstructColor(i3233[17], i3233[18], i3233[19], i3233[20])
  i3232.m_fontColor = new pc.Color(i3233[21], i3233[22], i3233[23], i3233[24])
  i3232.m_enableVertexGradient = !!i3233[25]
  i3232.m_colorMode = i3233[26]
  i3232.m_fontColorGradient = request.d('TMPro.VertexGradient', i3233[27], i3232.m_fontColorGradient)
  request.r(i3233[28], i3233[29], 0, i3232, 'm_fontColorGradientPreset')
  request.r(i3233[30], i3233[31], 0, i3232, 'm_spriteAsset')
  i3232.m_tintAllSprites = !!i3233[32]
  request.r(i3233[33], i3233[34], 0, i3232, 'm_StyleSheet')
  i3232.m_TextStyleHashCode = i3233[35]
  i3232.m_overrideHtmlColors = !!i3233[36]
  i3232.m_faceColor = UnityEngine.Color32.ConstructColor(i3233[37], i3233[38], i3233[39], i3233[40])
  i3232.m_fontSize = i3233[41]
  i3232.m_fontSizeBase = i3233[42]
  i3232.m_fontWeight = i3233[43]
  i3232.m_enableAutoSizing = !!i3233[44]
  i3232.m_fontSizeMin = i3233[45]
  i3232.m_fontSizeMax = i3233[46]
  i3232.m_fontStyle = i3233[47]
  i3232.m_HorizontalAlignment = i3233[48]
  i3232.m_VerticalAlignment = i3233[49]
  i3232.m_textAlignment = i3233[50]
  i3232.m_characterSpacing = i3233[51]
  i3232.m_wordSpacing = i3233[52]
  i3232.m_lineSpacing = i3233[53]
  i3232.m_lineSpacingMax = i3233[54]
  i3232.m_paragraphSpacing = i3233[55]
  i3232.m_charWidthMaxAdj = i3233[56]
  i3232.m_TextWrappingMode = i3233[57]
  i3232.m_wordWrappingRatios = i3233[58]
  i3232.m_overflowMode = i3233[59]
  request.r(i3233[60], i3233[61], 0, i3232, 'm_linkedTextComponent')
  request.r(i3233[62], i3233[63], 0, i3232, 'parentLinkedComponent')
  i3232.m_enableKerning = !!i3233[64]
  var i3239 = i3233[65]
  var i3238 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i3239.length; i += 1) {
    i3238.add(i3239[i + 0]);
  }
  i3232.m_ActiveFontFeatures = i3238
  i3232.m_enableExtraPadding = !!i3233[66]
  i3232.checkPaddingRequired = !!i3233[67]
  i3232.m_isRichText = !!i3233[68]
  i3232.m_parseCtrlCharacters = !!i3233[69]
  i3232.m_isOrthographic = !!i3233[70]
  i3232.m_isCullingEnabled = !!i3233[71]
  i3232.m_horizontalMapping = i3233[72]
  i3232.m_verticalMapping = i3233[73]
  i3232.m_uvLineOffset = i3233[74]
  i3232.m_geometrySortingOrder = i3233[75]
  i3232.m_IsTextObjectScaleStatic = !!i3233[76]
  i3232.m_VertexBufferAutoSizeReduction = !!i3233[77]
  i3232.m_useMaxVisibleDescender = !!i3233[78]
  i3232.m_pageToDisplay = i3233[79]
  i3232.m_margin = new pc.Vec4( i3233[80], i3233[81], i3233[82], i3233[83] )
  i3232.m_isUsingLegacyAnimationComponent = !!i3233[84]
  i3232.m_isVolumetricText = !!i3233[85]
  request.r(i3233[86], i3233[87], 0, i3232, 'm_Material')
  i3232.m_EmojiFallbackSupport = !!i3233[88]
  i3232.m_Maskable = !!i3233[89]
  i3232.m_Color = new pc.Color(i3233[90], i3233[91], i3233[92], i3233[93])
  i3232.m_RaycastTarget = !!i3233[94]
  i3232.m_RaycastPadding = new pc.Vec4( i3233[95], i3233[96], i3233[97], i3233[98] )
  return i3232
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i3240 = root || request.c( 'TMPro.VertexGradient' )
  var i3241 = data
  i3240.topLeft = new pc.Color(i3241[0], i3241[1], i3241[2], i3241[3])
  i3240.topRight = new pc.Color(i3241[4], i3241[5], i3241[6], i3241[7])
  i3240.bottomLeft = new pc.Color(i3241[8], i3241[9], i3241[10], i3241[11])
  i3240.bottomRight = new pc.Color(i3241[12], i3241[13], i3241[14], i3241[15])
  return i3240
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i3244 = root || request.c( 'UnityEngine.UI.Image' )
  var i3245 = data
  request.r(i3245[0], i3245[1], 0, i3244, 'm_Sprite')
  i3244.m_Type = i3245[2]
  i3244.m_PreserveAspect = !!i3245[3]
  i3244.m_FillCenter = !!i3245[4]
  i3244.m_FillMethod = i3245[5]
  i3244.m_FillAmount = i3245[6]
  i3244.m_FillClockwise = !!i3245[7]
  i3244.m_FillOrigin = i3245[8]
  i3244.m_UseSpriteMesh = !!i3245[9]
  i3244.m_PixelsPerUnitMultiplier = i3245[10]
  request.r(i3245[11], i3245[12], 0, i3244, 'm_Material')
  i3244.m_Maskable = !!i3245[13]
  i3244.m_Color = new pc.Color(i3245[14], i3245[15], i3245[16], i3245[17])
  i3244.m_RaycastTarget = !!i3245[18]
  i3244.m_RaycastPadding = new pc.Vec4( i3245[19], i3245[20], i3245[21], i3245[22] )
  return i3244
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i3246 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i3247 = data
  request.r(i3247[0], i3247[1], 0, i3246, 'animatorController')
  request.r(i3247[2], i3247[3], 0, i3246, 'avatar')
  i3246.updateMode = i3247[4]
  i3246.hasTransformHierarchy = !!i3247[5]
  i3246.applyRootMotion = !!i3247[6]
  var i3249 = i3247[7]
  var i3248 = []
  for(var i = 0; i < i3249.length; i += 2) {
  request.r(i3249[i + 0], i3249[i + 1], 2, i3248, '')
  }
  i3246.humanBones = i3248
  i3246.enabled = !!i3247[8]
  return i3246
}

Deserializers["CharacterSlot"] = function (request, data, root) {
  var i3252 = root || request.c( 'CharacterSlot' )
  var i3253 = data
  request.r(i3253[0], i3253[1], 0, i3252, 'normalVisual')
  var i3255 = i3253[2]
  var i3254 = new (System.Collections.Generic.List$1(Bridge.ns('CharacterItemVisual')))
  for(var i = 0; i < i3255.length; i += 1) {
    i3254.add(request.d('CharacterItemVisual', i3255[i + 0]));
  }
  i3252.itemVisuals = i3254
  i3252.correctItemID = i3253[3]
  i3252.defaultSound = i3253[4]
  request.r(i3253[5], i3253[6], 0, i3252, 'flyTarget')
  i3252.flyToCharacterDuration = i3253[7]
  i3252.flyEase = i3253[8]
  i3252.hasReceivedItem = !!i3253[9]
  i3252.isCorrectItemReceived = !!i3253[10]
  return i3252
}

Deserializers["CharacterItemVisual"] = function (request, data, root) {
  var i3258 = root || request.c( 'CharacterItemVisual' )
  var i3259 = data
  i3258.itemID = i3259[0]
  request.r(i3259[1], i3259[2], 0, i3258, 'visual')
  i3258.fxType = i3259[3]
  return i3258
}

Deserializers["DraggableItem"] = function (request, data, root) {
  var i3260 = root || request.c( 'DraggableItem' )
  var i3261 = data
  i3260.itemID = i3261[0]
  i3260.itemLayer = UnityEngine.LayerMask.FromIntegerValue( i3261[1] )
  return i3260
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i3262 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i3263 = data
  i3262.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i3263[0], i3262.main)
  i3262.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i3263[1], i3262.colorBySpeed)
  i3262.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i3263[2], i3262.colorOverLifetime)
  i3262.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i3263[3], i3262.emission)
  i3262.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i3263[4], i3262.rotationBySpeed)
  i3262.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i3263[5], i3262.rotationOverLifetime)
  i3262.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i3263[6], i3262.shape)
  i3262.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i3263[7], i3262.sizeBySpeed)
  i3262.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i3263[8], i3262.sizeOverLifetime)
  i3262.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i3263[9], i3262.textureSheetAnimation)
  i3262.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i3263[10], i3262.velocityOverLifetime)
  i3262.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i3263[11], i3262.noise)
  i3262.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i3263[12], i3262.inheritVelocity)
  i3262.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i3263[13], i3262.forceOverLifetime)
  i3262.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i3263[14], i3262.limitVelocityOverLifetime)
  i3262.useAutoRandomSeed = !!i3263[15]
  i3262.randomSeed = i3263[16]
  return i3262
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i3264 = root || new pc.ParticleSystemMain()
  var i3265 = data
  i3264.duration = i3265[0]
  i3264.loop = !!i3265[1]
  i3264.prewarm = !!i3265[2]
  i3264.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3265[3], i3264.startDelay)
  i3264.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3265[4], i3264.startLifetime)
  i3264.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3265[5], i3264.startSpeed)
  i3264.startSize3D = !!i3265[6]
  i3264.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3265[7], i3264.startSizeX)
  i3264.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3265[8], i3264.startSizeY)
  i3264.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3265[9], i3264.startSizeZ)
  i3264.startRotation3D = !!i3265[10]
  i3264.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3265[11], i3264.startRotationX)
  i3264.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3265[12], i3264.startRotationY)
  i3264.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3265[13], i3264.startRotationZ)
  i3264.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i3265[14], i3264.startColor)
  i3264.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3265[15], i3264.gravityModifier)
  i3264.simulationSpace = i3265[16]
  request.r(i3265[17], i3265[18], 0, i3264, 'customSimulationSpace')
  i3264.simulationSpeed = i3265[19]
  i3264.useUnscaledTime = !!i3265[20]
  i3264.scalingMode = i3265[21]
  i3264.playOnAwake = !!i3265[22]
  i3264.maxParticles = i3265[23]
  i3264.emitterVelocityMode = i3265[24]
  i3264.stopAction = i3265[25]
  return i3264
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i3266 = root || new pc.MinMaxCurve()
  var i3267 = data
  i3266.mode = i3267[0]
  i3266.curveMin = new pc.AnimationCurve( { keys_flow: i3267[1] } )
  i3266.curveMax = new pc.AnimationCurve( { keys_flow: i3267[2] } )
  i3266.curveMultiplier = i3267[3]
  i3266.constantMin = i3267[4]
  i3266.constantMax = i3267[5]
  return i3266
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i3268 = root || new pc.MinMaxGradient()
  var i3269 = data
  i3268.mode = i3269[0]
  i3268.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i3269[1], i3268.gradientMin)
  i3268.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i3269[2], i3268.gradientMax)
  i3268.colorMin = new pc.Color(i3269[3], i3269[4], i3269[5], i3269[6])
  i3268.colorMax = new pc.Color(i3269[7], i3269[8], i3269[9], i3269[10])
  return i3268
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i3270 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i3271 = data
  i3270.mode = i3271[0]
  var i3273 = i3271[1]
  var i3272 = []
  for(var i = 0; i < i3273.length; i += 1) {
    i3272.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i3273[i + 0]) );
  }
  i3270.colorKeys = i3272
  var i3275 = i3271[2]
  var i3274 = []
  for(var i = 0; i < i3275.length; i += 1) {
    i3274.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i3275[i + 0]) );
  }
  i3270.alphaKeys = i3274
  return i3270
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i3276 = root || new pc.ParticleSystemColorBySpeed()
  var i3277 = data
  i3276.enabled = !!i3277[0]
  i3276.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i3277[1], i3276.color)
  i3276.range = new pc.Vec2( i3277[2], i3277[3] )
  return i3276
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i3280 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i3281 = data
  i3280.color = new pc.Color(i3281[0], i3281[1], i3281[2], i3281[3])
  i3280.time = i3281[4]
  return i3280
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i3284 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i3285 = data
  i3284.alpha = i3285[0]
  i3284.time = i3285[1]
  return i3284
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i3286 = root || new pc.ParticleSystemColorOverLifetime()
  var i3287 = data
  i3286.enabled = !!i3287[0]
  i3286.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i3287[1], i3286.color)
  return i3286
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i3288 = root || new pc.ParticleSystemEmitter()
  var i3289 = data
  i3288.enabled = !!i3289[0]
  i3288.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3289[1], i3288.rateOverTime)
  i3288.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3289[2], i3288.rateOverDistance)
  var i3291 = i3289[3]
  var i3290 = []
  for(var i = 0; i < i3291.length; i += 1) {
    i3290.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i3291[i + 0]) );
  }
  i3288.bursts = i3290
  return i3288
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i3294 = root || new pc.ParticleSystemBurst()
  var i3295 = data
  i3294.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3295[0], i3294.count)
  i3294.cycleCount = i3295[1]
  i3294.minCount = i3295[2]
  i3294.maxCount = i3295[3]
  i3294.repeatInterval = i3295[4]
  i3294.time = i3295[5]
  return i3294
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i3296 = root || new pc.ParticleSystemRotationBySpeed()
  var i3297 = data
  i3296.enabled = !!i3297[0]
  i3296.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3297[1], i3296.x)
  i3296.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3297[2], i3296.y)
  i3296.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3297[3], i3296.z)
  i3296.separateAxes = !!i3297[4]
  i3296.range = new pc.Vec2( i3297[5], i3297[6] )
  return i3296
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i3298 = root || new pc.ParticleSystemRotationOverLifetime()
  var i3299 = data
  i3298.enabled = !!i3299[0]
  i3298.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3299[1], i3298.x)
  i3298.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3299[2], i3298.y)
  i3298.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3299[3], i3298.z)
  i3298.separateAxes = !!i3299[4]
  return i3298
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i3300 = root || new pc.ParticleSystemShape()
  var i3301 = data
  i3300.enabled = !!i3301[0]
  i3300.shapeType = i3301[1]
  i3300.randomDirectionAmount = i3301[2]
  i3300.sphericalDirectionAmount = i3301[3]
  i3300.randomPositionAmount = i3301[4]
  i3300.alignToDirection = !!i3301[5]
  i3300.radius = i3301[6]
  i3300.radiusMode = i3301[7]
  i3300.radiusSpread = i3301[8]
  i3300.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3301[9], i3300.radiusSpeed)
  i3300.radiusThickness = i3301[10]
  i3300.angle = i3301[11]
  i3300.length = i3301[12]
  i3300.boxThickness = new pc.Vec3( i3301[13], i3301[14], i3301[15] )
  i3300.meshShapeType = i3301[16]
  request.r(i3301[17], i3301[18], 0, i3300, 'mesh')
  request.r(i3301[19], i3301[20], 0, i3300, 'meshRenderer')
  request.r(i3301[21], i3301[22], 0, i3300, 'skinnedMeshRenderer')
  i3300.useMeshMaterialIndex = !!i3301[23]
  i3300.meshMaterialIndex = i3301[24]
  i3300.useMeshColors = !!i3301[25]
  i3300.normalOffset = i3301[26]
  i3300.arc = i3301[27]
  i3300.arcMode = i3301[28]
  i3300.arcSpread = i3301[29]
  i3300.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3301[30], i3300.arcSpeed)
  i3300.donutRadius = i3301[31]
  i3300.position = new pc.Vec3( i3301[32], i3301[33], i3301[34] )
  i3300.rotation = new pc.Vec3( i3301[35], i3301[36], i3301[37] )
  i3300.scale = new pc.Vec3( i3301[38], i3301[39], i3301[40] )
  return i3300
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i3302 = root || new pc.ParticleSystemSizeBySpeed()
  var i3303 = data
  i3302.enabled = !!i3303[0]
  i3302.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3303[1], i3302.x)
  i3302.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3303[2], i3302.y)
  i3302.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3303[3], i3302.z)
  i3302.separateAxes = !!i3303[4]
  i3302.range = new pc.Vec2( i3303[5], i3303[6] )
  return i3302
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i3304 = root || new pc.ParticleSystemSizeOverLifetime()
  var i3305 = data
  i3304.enabled = !!i3305[0]
  i3304.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3305[1], i3304.x)
  i3304.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3305[2], i3304.y)
  i3304.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3305[3], i3304.z)
  i3304.separateAxes = !!i3305[4]
  return i3304
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i3306 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i3307 = data
  i3306.enabled = !!i3307[0]
  i3306.mode = i3307[1]
  i3306.animation = i3307[2]
  i3306.numTilesX = i3307[3]
  i3306.numTilesY = i3307[4]
  i3306.useRandomRow = !!i3307[5]
  i3306.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3307[6], i3306.frameOverTime)
  i3306.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3307[7], i3306.startFrame)
  i3306.cycleCount = i3307[8]
  i3306.rowIndex = i3307[9]
  i3306.flipU = i3307[10]
  i3306.flipV = i3307[11]
  i3306.spriteCount = i3307[12]
  var i3309 = i3307[13]
  var i3308 = []
  for(var i = 0; i < i3309.length; i += 2) {
  request.r(i3309[i + 0], i3309[i + 1], 2, i3308, '')
  }
  i3306.sprites = i3308
  return i3306
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i3312 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i3313 = data
  i3312.enabled = !!i3313[0]
  i3312.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3313[1], i3312.x)
  i3312.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3313[2], i3312.y)
  i3312.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3313[3], i3312.z)
  i3312.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3313[4], i3312.radial)
  i3312.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3313[5], i3312.speedModifier)
  i3312.space = i3313[6]
  i3312.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3313[7], i3312.orbitalX)
  i3312.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3313[8], i3312.orbitalY)
  i3312.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3313[9], i3312.orbitalZ)
  i3312.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3313[10], i3312.orbitalOffsetX)
  i3312.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3313[11], i3312.orbitalOffsetY)
  i3312.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3313[12], i3312.orbitalOffsetZ)
  return i3312
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i3314 = root || new pc.ParticleSystemNoise()
  var i3315 = data
  i3314.enabled = !!i3315[0]
  i3314.separateAxes = !!i3315[1]
  i3314.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3315[2], i3314.strengthX)
  i3314.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3315[3], i3314.strengthY)
  i3314.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3315[4], i3314.strengthZ)
  i3314.frequency = i3315[5]
  i3314.damping = !!i3315[6]
  i3314.octaveCount = i3315[7]
  i3314.octaveMultiplier = i3315[8]
  i3314.octaveScale = i3315[9]
  i3314.quality = i3315[10]
  i3314.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3315[11], i3314.scrollSpeed)
  i3314.scrollSpeedMultiplier = i3315[12]
  i3314.remapEnabled = !!i3315[13]
  i3314.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3315[14], i3314.remapX)
  i3314.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3315[15], i3314.remapY)
  i3314.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3315[16], i3314.remapZ)
  i3314.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3315[17], i3314.positionAmount)
  i3314.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3315[18], i3314.rotationAmount)
  i3314.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3315[19], i3314.sizeAmount)
  return i3314
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i3316 = root || new pc.ParticleSystemInheritVelocity()
  var i3317 = data
  i3316.enabled = !!i3317[0]
  i3316.mode = i3317[1]
  i3316.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3317[2], i3316.curve)
  return i3316
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i3318 = root || new pc.ParticleSystemForceOverLifetime()
  var i3319 = data
  i3318.enabled = !!i3319[0]
  i3318.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3319[1], i3318.x)
  i3318.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3319[2], i3318.y)
  i3318.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3319[3], i3318.z)
  i3318.space = i3319[4]
  i3318.randomized = !!i3319[5]
  return i3318
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i3320 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i3321 = data
  i3320.enabled = !!i3321[0]
  i3320.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3321[1], i3320.limit)
  i3320.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3321[2], i3320.limitX)
  i3320.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3321[3], i3320.limitY)
  i3320.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3321[4], i3320.limitZ)
  i3320.dampen = i3321[5]
  i3320.separateAxes = !!i3321[6]
  i3320.space = i3321[7]
  i3320.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3321[8], i3320.drag)
  i3320.multiplyDragByParticleSize = !!i3321[9]
  i3320.multiplyDragByParticleVelocity = !!i3321[10]
  return i3320
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i3322 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i3323 = data
  request.r(i3323[0], i3323[1], 0, i3322, 'mesh')
  i3322.meshCount = i3323[2]
  i3322.activeVertexStreamsCount = i3323[3]
  i3322.alignment = i3323[4]
  i3322.renderMode = i3323[5]
  i3322.sortMode = i3323[6]
  i3322.lengthScale = i3323[7]
  i3322.velocityScale = i3323[8]
  i3322.cameraVelocityScale = i3323[9]
  i3322.normalDirection = i3323[10]
  i3322.sortingFudge = i3323[11]
  i3322.minParticleSize = i3323[12]
  i3322.maxParticleSize = i3323[13]
  i3322.pivot = new pc.Vec3( i3323[14], i3323[15], i3323[16] )
  request.r(i3323[17], i3323[18], 0, i3322, 'trailMaterial')
  i3322.applyActiveColorSpace = !!i3323[19]
  i3322.enabled = !!i3323[20]
  request.r(i3323[21], i3323[22], 0, i3322, 'sharedMaterial')
  var i3325 = i3323[23]
  var i3324 = []
  for(var i = 0; i < i3325.length; i += 2) {
  request.r(i3325[i + 0], i3325[i + 1], 2, i3324, '')
  }
  i3322.sharedMaterials = i3324
  i3322.receiveShadows = !!i3323[24]
  i3322.shadowCastingMode = i3323[25]
  i3322.sortingLayerID = i3323[26]
  i3322.sortingOrder = i3323[27]
  i3322.lightmapIndex = i3323[28]
  i3322.lightmapSceneIndex = i3323[29]
  i3322.lightmapScaleOffset = new pc.Vec4( i3323[30], i3323[31], i3323[32], i3323[33] )
  i3322.lightProbeUsage = i3323[34]
  i3322.reflectionProbeUsage = i3323[35]
  return i3322
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i3326 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i3327 = data
  request.r(i3327[0], i3327[1], 0, i3326, 'm_FirstSelected')
  i3326.m_sendNavigationEvents = !!i3327[2]
  i3326.m_DragThreshold = i3327[3]
  return i3326
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i3328 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i3329 = data
  i3328.m_HorizontalAxis = i3329[0]
  i3328.m_VerticalAxis = i3329[1]
  i3328.m_SubmitButton = i3329[2]
  i3328.m_CancelButton = i3329[3]
  i3328.m_InputActionsPerSecond = i3329[4]
  i3328.m_RepeatDelay = i3329[5]
  i3328.m_ForceModuleActive = !!i3329[6]
  i3328.m_SendPointerHoverToParent = !!i3329[7]
  return i3328
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i3330 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i3331 = data
  i3330.ambientIntensity = i3331[0]
  i3330.reflectionIntensity = i3331[1]
  i3330.ambientMode = i3331[2]
  i3330.ambientLight = new pc.Color(i3331[3], i3331[4], i3331[5], i3331[6])
  i3330.ambientSkyColor = new pc.Color(i3331[7], i3331[8], i3331[9], i3331[10])
  i3330.ambientGroundColor = new pc.Color(i3331[11], i3331[12], i3331[13], i3331[14])
  i3330.ambientEquatorColor = new pc.Color(i3331[15], i3331[16], i3331[17], i3331[18])
  i3330.fogColor = new pc.Color(i3331[19], i3331[20], i3331[21], i3331[22])
  i3330.fogEndDistance = i3331[23]
  i3330.fogStartDistance = i3331[24]
  i3330.fogDensity = i3331[25]
  i3330.fog = !!i3331[26]
  request.r(i3331[27], i3331[28], 0, i3330, 'skybox')
  i3330.fogMode = i3331[29]
  var i3333 = i3331[30]
  var i3332 = []
  for(var i = 0; i < i3333.length; i += 1) {
    i3332.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i3333[i + 0]) );
  }
  i3330.lightmaps = i3332
  i3330.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i3331[31], i3330.lightProbes)
  i3330.lightmapsMode = i3331[32]
  i3330.mixedBakeMode = i3331[33]
  i3330.environmentLightingMode = i3331[34]
  i3330.ambientProbe = new pc.SphericalHarmonicsL2(i3331[35])
  i3330.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i3331[36])
  i3330.useReferenceAmbientProbe = !!i3331[37]
  request.r(i3331[38], i3331[39], 0, i3330, 'customReflection')
  request.r(i3331[40], i3331[41], 0, i3330, 'defaultReflection')
  i3330.defaultReflectionMode = i3331[42]
  i3330.defaultReflectionResolution = i3331[43]
  i3330.sunLightObjectId = i3331[44]
  i3330.pixelLightCount = i3331[45]
  i3330.defaultReflectionHDR = !!i3331[46]
  i3330.hasLightDataAsset = !!i3331[47]
  i3330.hasManualGenerate = !!i3331[48]
  return i3330
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i3336 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i3337 = data
  request.r(i3337[0], i3337[1], 0, i3336, 'lightmapColor')
  request.r(i3337[2], i3337[3], 0, i3336, 'lightmapDirection')
  request.r(i3337[4], i3337[5], 0, i3336, 'shadowMask')
  return i3336
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i3338 = root || new UnityEngine.LightProbes()
  var i3339 = data
  return i3338
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i3346 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i3347 = data
  var i3349 = i3347[0]
  var i3348 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i3349.length; i += 1) {
    i3348.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i3349[i + 0]));
  }
  i3346.ShaderCompilationErrors = i3348
  i3346.name = i3347[1]
  i3346.guid = i3347[2]
  var i3351 = i3347[3]
  var i3350 = []
  for(var i = 0; i < i3351.length; i += 1) {
    i3350.push( i3351[i + 0] );
  }
  i3346.shaderDefinedKeywords = i3350
  var i3353 = i3347[4]
  var i3352 = []
  for(var i = 0; i < i3353.length; i += 1) {
    i3352.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i3353[i + 0]) );
  }
  i3346.passes = i3352
  var i3355 = i3347[5]
  var i3354 = []
  for(var i = 0; i < i3355.length; i += 1) {
    i3354.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i3355[i + 0]) );
  }
  i3346.usePasses = i3354
  var i3357 = i3347[6]
  var i3356 = []
  for(var i = 0; i < i3357.length; i += 1) {
    i3356.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i3357[i + 0]) );
  }
  i3346.defaultParameterValues = i3356
  request.r(i3347[7], i3347[8], 0, i3346, 'unityFallbackShader')
  i3346.readDepth = !!i3347[9]
  i3346.hasDepthOnlyPass = !!i3347[10]
  i3346.isCreatedByShaderGraph = !!i3347[11]
  i3346.disableBatching = !!i3347[12]
  i3346.compiled = !!i3347[13]
  return i3346
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i3360 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i3361 = data
  i3360.shaderName = i3361[0]
  i3360.errorMessage = i3361[1]
  return i3360
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i3366 = root || new pc.UnityShaderPass()
  var i3367 = data
  i3366.id = i3367[0]
  i3366.subShaderIndex = i3367[1]
  i3366.name = i3367[2]
  i3366.passType = i3367[3]
  i3366.grabPassTextureName = i3367[4]
  i3366.usePass = !!i3367[5]
  i3366.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3367[6], i3366.zTest)
  i3366.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3367[7], i3366.zWrite)
  i3366.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3367[8], i3366.culling)
  i3366.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i3367[9], i3366.blending)
  i3366.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i3367[10], i3366.alphaBlending)
  i3366.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3367[11], i3366.colorWriteMask)
  i3366.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3367[12], i3366.offsetUnits)
  i3366.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3367[13], i3366.offsetFactor)
  i3366.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3367[14], i3366.stencilRef)
  i3366.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3367[15], i3366.stencilReadMask)
  i3366.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3367[16], i3366.stencilWriteMask)
  i3366.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3367[17], i3366.stencilOp)
  i3366.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3367[18], i3366.stencilOpFront)
  i3366.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3367[19], i3366.stencilOpBack)
  var i3369 = i3367[20]
  var i3368 = []
  for(var i = 0; i < i3369.length; i += 1) {
    i3368.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i3369[i + 0]) );
  }
  i3366.tags = i3368
  var i3371 = i3367[21]
  var i3370 = []
  for(var i = 0; i < i3371.length; i += 1) {
    i3370.push( i3371[i + 0] );
  }
  i3366.passDefinedKeywords = i3370
  var i3373 = i3367[22]
  var i3372 = []
  for(var i = 0; i < i3373.length; i += 1) {
    i3372.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i3373[i + 0]) );
  }
  i3366.passDefinedKeywordGroups = i3372
  var i3375 = i3367[23]
  var i3374 = []
  for(var i = 0; i < i3375.length; i += 1) {
    i3374.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i3375[i + 0]) );
  }
  i3366.variants = i3374
  var i3377 = i3367[24]
  var i3376 = []
  for(var i = 0; i < i3377.length; i += 1) {
    i3376.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i3377[i + 0]) );
  }
  i3366.excludedVariants = i3376
  i3366.hasDepthReader = !!i3367[25]
  return i3366
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i3378 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i3379 = data
  i3378.val = i3379[0]
  i3378.name = i3379[1]
  return i3378
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i3380 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i3381 = data
  i3380.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3381[0], i3380.src)
  i3380.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3381[1], i3380.dst)
  i3380.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3381[2], i3380.op)
  return i3380
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i3382 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i3383 = data
  i3382.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3383[0], i3382.pass)
  i3382.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3383[1], i3382.fail)
  i3382.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3383[2], i3382.zFail)
  i3382.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3383[3], i3382.comp)
  return i3382
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i3386 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i3387 = data
  i3386.name = i3387[0]
  i3386.value = i3387[1]
  return i3386
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i3390 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i3391 = data
  var i3393 = i3391[0]
  var i3392 = []
  for(var i = 0; i < i3393.length; i += 1) {
    i3392.push( i3393[i + 0] );
  }
  i3390.keywords = i3392
  i3390.hasDiscard = !!i3391[1]
  return i3390
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i3396 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i3397 = data
  i3396.passId = i3397[0]
  i3396.subShaderIndex = i3397[1]
  var i3399 = i3397[2]
  var i3398 = []
  for(var i = 0; i < i3399.length; i += 1) {
    i3398.push( i3399[i + 0] );
  }
  i3396.keywords = i3398
  i3396.vertexProgram = i3397[3]
  i3396.fragmentProgram = i3397[4]
  i3396.exportedForWebGl2 = !!i3397[5]
  i3396.readDepth = !!i3397[6]
  return i3396
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i3402 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i3403 = data
  request.r(i3403[0], i3403[1], 0, i3402, 'shader')
  i3402.pass = i3403[2]
  return i3402
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i3406 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i3407 = data
  i3406.name = i3407[0]
  i3406.type = i3407[1]
  i3406.value = new pc.Vec4( i3407[2], i3407[3], i3407[4], i3407[5] )
  i3406.textureValue = i3407[6]
  i3406.shaderPropertyFlag = i3407[7]
  return i3406
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i3408 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i3409 = data
  i3408.name = i3409[0]
  request.r(i3409[1], i3409[2], 0, i3408, 'texture')
  i3408.aabb = i3409[3]
  i3408.vertices = i3409[4]
  i3408.triangles = i3409[5]
  i3408.textureRect = UnityEngine.Rect.MinMaxRect(i3409[6], i3409[7], i3409[8], i3409[9])
  i3408.packedRect = UnityEngine.Rect.MinMaxRect(i3409[10], i3409[11], i3409[12], i3409[13])
  i3408.border = new pc.Vec4( i3409[14], i3409[15], i3409[16], i3409[17] )
  i3408.transparency = i3409[18]
  i3408.bounds = i3409[19]
  i3408.pixelsPerUnit = i3409[20]
  i3408.textureWidth = i3409[21]
  i3408.textureHeight = i3409[22]
  i3408.nativeSize = new pc.Vec2( i3409[23], i3409[24] )
  i3408.pivot = new pc.Vec2( i3409[25], i3409[26] )
  i3408.textureRectOffset = new pc.Vec2( i3409[27], i3409[28] )
  return i3408
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i3410 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i3411 = data
  i3410.name = i3411[0]
  return i3410
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i3412 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i3413 = data
  i3412.name = i3413[0]
  i3412.wrapMode = i3413[1]
  i3412.isLooping = !!i3413[2]
  i3412.length = i3413[3]
  var i3415 = i3413[4]
  var i3414 = []
  for(var i = 0; i < i3415.length; i += 1) {
    i3414.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i3415[i + 0]) );
  }
  i3412.curves = i3414
  var i3417 = i3413[5]
  var i3416 = []
  for(var i = 0; i < i3417.length; i += 1) {
    i3416.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i3417[i + 0]) );
  }
  i3412.events = i3416
  i3412.halfPrecision = !!i3413[6]
  i3412._frameRate = i3413[7]
  i3412.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i3413[8], i3412.localBounds)
  i3412.hasMuscleCurves = !!i3413[9]
  var i3419 = i3413[10]
  var i3418 = []
  for(var i = 0; i < i3419.length; i += 1) {
    i3418.push( i3419[i + 0] );
  }
  i3412.clipMuscleConstant = i3418
  i3412.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i3413[11], i3412.clipBindingConstant)
  return i3412
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i3422 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i3423 = data
  i3422.path = i3423[0]
  i3422.hash = i3423[1]
  i3422.componentType = i3423[2]
  i3422.property = i3423[3]
  i3422.keys = i3423[4]
  var i3425 = i3423[5]
  var i3424 = []
  for(var i = 0; i < i3425.length; i += 1) {
    i3424.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i3425[i + 0]) );
  }
  i3422.objectReferenceKeys = i3424
  return i3422
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i3428 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i3429 = data
  i3428.time = i3429[0]
  request.r(i3429[1], i3429[2], 0, i3428, 'value')
  return i3428
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i3432 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i3433 = data
  i3432.functionName = i3433[0]
  i3432.floatParameter = i3433[1]
  i3432.intParameter = i3433[2]
  i3432.stringParameter = i3433[3]
  request.r(i3433[4], i3433[5], 0, i3432, 'objectReferenceParameter')
  i3432.time = i3433[6]
  return i3432
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i3434 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i3435 = data
  i3434.center = new pc.Vec3( i3435[0], i3435[1], i3435[2] )
  i3434.extends = new pc.Vec3( i3435[3], i3435[4], i3435[5] )
  return i3434
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i3438 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i3439 = data
  var i3441 = i3439[0]
  var i3440 = []
  for(var i = 0; i < i3441.length; i += 1) {
    i3440.push( i3441[i + 0] );
  }
  i3438.genericBindings = i3440
  var i3443 = i3439[1]
  var i3442 = []
  for(var i = 0; i < i3443.length; i += 1) {
    i3442.push( i3443[i + 0] );
  }
  i3438.pptrCurveMapping = i3442
  return i3438
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i3444 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i3445 = data
  i3444.name = i3445[0]
  i3444.ascent = i3445[1]
  i3444.originalLineHeight = i3445[2]
  i3444.fontSize = i3445[3]
  var i3447 = i3445[4]
  var i3446 = []
  for(var i = 0; i < i3447.length; i += 1) {
    i3446.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i3447[i + 0]) );
  }
  i3444.characterInfo = i3446
  request.r(i3445[5], i3445[6], 0, i3444, 'texture')
  i3444.originalFontSize = i3445[7]
  return i3444
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i3450 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i3451 = data
  i3450.index = i3451[0]
  i3450.advance = i3451[1]
  i3450.bearing = i3451[2]
  i3450.glyphWidth = i3451[3]
  i3450.glyphHeight = i3451[4]
  i3450.minX = i3451[5]
  i3450.maxX = i3451[6]
  i3450.minY = i3451[7]
  i3450.maxY = i3451[8]
  i3450.uvBottomLeftX = i3451[9]
  i3450.uvBottomLeftY = i3451[10]
  i3450.uvBottomRightX = i3451[11]
  i3450.uvBottomRightY = i3451[12]
  i3450.uvTopLeftX = i3451[13]
  i3450.uvTopLeftY = i3451[14]
  i3450.uvTopRightX = i3451[15]
  i3450.uvTopRightY = i3451[16]
  return i3450
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i3452 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i3453 = data
  i3452.name = i3453[0]
  var i3455 = i3453[1]
  var i3454 = []
  for(var i = 0; i < i3455.length; i += 1) {
    i3454.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i3455[i + 0]) );
  }
  i3452.layers = i3454
  var i3457 = i3453[2]
  var i3456 = []
  for(var i = 0; i < i3457.length; i += 1) {
    i3456.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i3457[i + 0]) );
  }
  i3452.parameters = i3456
  i3452.animationClips = i3453[3]
  i3452.avatarUnsupported = i3453[4]
  return i3452
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i3460 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i3461 = data
  i3460.name = i3461[0]
  i3460.defaultWeight = i3461[1]
  i3460.blendingMode = i3461[2]
  i3460.avatarMask = i3461[3]
  i3460.syncedLayerIndex = i3461[4]
  i3460.syncedLayerAffectsTiming = !!i3461[5]
  i3460.syncedLayers = i3461[6]
  i3460.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i3461[7], i3460.stateMachine)
  return i3460
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i3462 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i3463 = data
  i3462.id = i3463[0]
  i3462.name = i3463[1]
  i3462.path = i3463[2]
  var i3465 = i3463[3]
  var i3464 = []
  for(var i = 0; i < i3465.length; i += 1) {
    i3464.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i3465[i + 0]) );
  }
  i3462.states = i3464
  var i3467 = i3463[4]
  var i3466 = []
  for(var i = 0; i < i3467.length; i += 1) {
    i3466.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i3467[i + 0]) );
  }
  i3462.machines = i3466
  var i3469 = i3463[5]
  var i3468 = []
  for(var i = 0; i < i3469.length; i += 1) {
    i3468.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i3469[i + 0]) );
  }
  i3462.entryStateTransitions = i3468
  var i3471 = i3463[6]
  var i3470 = []
  for(var i = 0; i < i3471.length; i += 1) {
    i3470.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i3471[i + 0]) );
  }
  i3462.exitStateTransitions = i3470
  var i3473 = i3463[7]
  var i3472 = []
  for(var i = 0; i < i3473.length; i += 1) {
    i3472.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i3473[i + 0]) );
  }
  i3462.anyStateTransitions = i3472
  i3462.defaultStateId = i3463[8]
  return i3462
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i3476 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i3477 = data
  i3476.id = i3477[0]
  i3476.name = i3477[1]
  i3476.cycleOffset = i3477[2]
  i3476.cycleOffsetParameter = i3477[3]
  i3476.cycleOffsetParameterActive = !!i3477[4]
  i3476.mirror = !!i3477[5]
  i3476.mirrorParameter = i3477[6]
  i3476.mirrorParameterActive = !!i3477[7]
  i3476.motionId = i3477[8]
  i3476.nameHash = i3477[9]
  i3476.fullPathHash = i3477[10]
  i3476.speed = i3477[11]
  i3476.speedParameter = i3477[12]
  i3476.speedParameterActive = !!i3477[13]
  i3476.tag = i3477[14]
  i3476.tagHash = i3477[15]
  i3476.writeDefaultValues = !!i3477[16]
  var i3479 = i3477[17]
  var i3478 = []
  for(var i = 0; i < i3479.length; i += 2) {
  request.r(i3479[i + 0], i3479[i + 1], 2, i3478, '')
  }
  i3476.behaviours = i3478
  var i3481 = i3477[18]
  var i3480 = []
  for(var i = 0; i < i3481.length; i += 1) {
    i3480.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i3481[i + 0]) );
  }
  i3476.transitions = i3480
  return i3476
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i3486 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i3487 = data
  i3486.fullPath = i3487[0]
  i3486.canTransitionToSelf = !!i3487[1]
  i3486.duration = i3487[2]
  i3486.exitTime = i3487[3]
  i3486.hasExitTime = !!i3487[4]
  i3486.hasFixedDuration = !!i3487[5]
  i3486.interruptionSource = i3487[6]
  i3486.offset = i3487[7]
  i3486.orderedInterruption = !!i3487[8]
  i3486.destinationStateId = i3487[9]
  i3486.isExit = !!i3487[10]
  i3486.mute = !!i3487[11]
  i3486.solo = !!i3487[12]
  var i3489 = i3487[13]
  var i3488 = []
  for(var i = 0; i < i3489.length; i += 1) {
    i3488.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i3489[i + 0]) );
  }
  i3486.conditions = i3488
  return i3486
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i3494 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i3495 = data
  i3494.destinationStateId = i3495[0]
  i3494.isExit = !!i3495[1]
  i3494.mute = !!i3495[2]
  i3494.solo = !!i3495[3]
  var i3497 = i3495[4]
  var i3496 = []
  for(var i = 0; i < i3497.length; i += 1) {
    i3496.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i3497[i + 0]) );
  }
  i3494.conditions = i3496
  return i3494
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i3500 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i3501 = data
  i3500.defaultBool = !!i3501[0]
  i3500.defaultFloat = i3501[1]
  i3500.defaultInt = i3501[2]
  i3500.name = i3501[3]
  i3500.nameHash = i3501[4]
  i3500.type = i3501[5]
  return i3500
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i3502 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i3503 = data
  i3502.name = i3503[0]
  i3502.bytes64 = i3503[1]
  i3502.data = i3503[2]
  return i3502
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i3504 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i3505 = data
  i3504.normalStyle = i3505[0]
  i3504.normalSpacingOffset = i3505[1]
  i3504.boldStyle = i3505[2]
  i3504.boldSpacing = i3505[3]
  i3504.italicStyle = i3505[4]
  i3504.tabSize = i3505[5]
  request.r(i3505[6], i3505[7], 0, i3504, 'atlas')
  i3504.m_SourceFontFileGUID = i3505[8]
  i3504.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i3505[9], i3504.m_CreationSettings)
  request.r(i3505[10], i3505[11], 0, i3504, 'm_SourceFontFile')
  i3504.m_SourceFontFilePath = i3505[12]
  i3504.m_AtlasPopulationMode = i3505[13]
  i3504.InternalDynamicOS = !!i3505[14]
  var i3507 = i3505[15]
  var i3506 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i3507.length; i += 1) {
    i3506.add(request.d('UnityEngine.TextCore.Glyph', i3507[i + 0]));
  }
  i3504.m_GlyphTable = i3506
  var i3509 = i3505[16]
  var i3508 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i3509.length; i += 1) {
    i3508.add(request.d('TMPro.TMP_Character', i3509[i + 0]));
  }
  i3504.m_CharacterTable = i3508
  var i3511 = i3505[17]
  var i3510 = []
  for(var i = 0; i < i3511.length; i += 2) {
  request.r(i3511[i + 0], i3511[i + 1], 2, i3510, '')
  }
  i3504.m_AtlasTextures = i3510
  i3504.m_AtlasTextureIndex = i3505[18]
  i3504.m_IsMultiAtlasTexturesEnabled = !!i3505[19]
  i3504.m_GetFontFeatures = !!i3505[20]
  i3504.m_ClearDynamicDataOnBuild = !!i3505[21]
  i3504.m_AtlasWidth = i3505[22]
  i3504.m_AtlasHeight = i3505[23]
  i3504.m_AtlasPadding = i3505[24]
  i3504.m_AtlasRenderMode = i3505[25]
  var i3513 = i3505[26]
  var i3512 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i3513.length; i += 1) {
    i3512.add(request.d('UnityEngine.TextCore.GlyphRect', i3513[i + 0]));
  }
  i3504.m_UsedGlyphRects = i3512
  var i3515 = i3505[27]
  var i3514 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i3515.length; i += 1) {
    i3514.add(request.d('UnityEngine.TextCore.GlyphRect', i3515[i + 0]));
  }
  i3504.m_FreeGlyphRects = i3514
  i3504.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i3505[28], i3504.m_FontFeatureTable)
  i3504.m_ShouldReimportFontFeatures = !!i3505[29]
  var i3517 = i3505[30]
  var i3516 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i3517.length; i += 2) {
  request.r(i3517[i + 0], i3517[i + 1], 1, i3516, '')
  }
  i3504.m_FallbackFontAssetTable = i3516
  var i3519 = i3505[31]
  var i3518 = []
  for(var i = 0; i < i3519.length; i += 1) {
    i3518.push( request.d('TMPro.TMP_FontWeightPair', i3519[i + 0]) );
  }
  i3504.m_FontWeightTable = i3518
  var i3521 = i3505[32]
  var i3520 = []
  for(var i = 0; i < i3521.length; i += 1) {
    i3520.push( request.d('TMPro.TMP_FontWeightPair', i3521[i + 0]) );
  }
  i3504.fontWeights = i3520
  i3504.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i3505[33], i3504.m_fontInfo)
  var i3523 = i3505[34]
  var i3522 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i3523.length; i += 1) {
    i3522.add(request.d('TMPro.TMP_Glyph', i3523[i + 0]));
  }
  i3504.m_glyphInfoList = i3522
  i3504.m_KerningTable = request.d('TMPro.KerningTable', i3505[35], i3504.m_KerningTable)
  var i3525 = i3505[36]
  var i3524 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i3525.length; i += 2) {
  request.r(i3525[i + 0], i3525[i + 1], 1, i3524, '')
  }
  i3504.fallbackFontAssets = i3524
  i3504.m_Version = i3505[37]
  i3504.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i3505[38], i3504.m_FaceInfo)
  request.r(i3505[39], i3505[40], 0, i3504, 'm_Material')
  return i3504
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i3526 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i3527 = data
  i3526.sourceFontFileName = i3527[0]
  i3526.sourceFontFileGUID = i3527[1]
  i3526.faceIndex = i3527[2]
  i3526.pointSizeSamplingMode = i3527[3]
  i3526.pointSize = i3527[4]
  i3526.padding = i3527[5]
  i3526.paddingMode = i3527[6]
  i3526.packingMode = i3527[7]
  i3526.atlasWidth = i3527[8]
  i3526.atlasHeight = i3527[9]
  i3526.characterSetSelectionMode = i3527[10]
  i3526.characterSequence = i3527[11]
  i3526.referencedFontAssetGUID = i3527[12]
  i3526.referencedTextAssetGUID = i3527[13]
  i3526.fontStyle = i3527[14]
  i3526.fontStyleModifier = i3527[15]
  i3526.renderMode = i3527[16]
  i3526.includeFontFeatures = !!i3527[17]
  return i3526
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i3530 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i3531 = data
  i3530.m_Index = i3531[0]
  i3530.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i3531[1], i3530.m_Metrics)
  i3530.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i3531[2], i3530.m_GlyphRect)
  i3530.m_Scale = i3531[3]
  i3530.m_AtlasIndex = i3531[4]
  i3530.m_ClassDefinitionType = i3531[5]
  return i3530
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i3534 = root || request.c( 'TMPro.TMP_Character' )
  var i3535 = data
  i3534.m_ElementType = i3535[0]
  i3534.m_Unicode = i3535[1]
  i3534.m_GlyphIndex = i3535[2]
  i3534.m_Scale = i3535[3]
  return i3534
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i3540 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i3541 = data
  i3540.m_X = i3541[0]
  i3540.m_Y = i3541[1]
  i3540.m_Width = i3541[2]
  i3540.m_Height = i3541[3]
  return i3540
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i3542 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i3543 = data
  var i3545 = i3543[0]
  var i3544 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i3545.length; i += 1) {
    i3544.add(request.d('TMPro.MultipleSubstitutionRecord', i3545[i + 0]));
  }
  i3542.m_MultipleSubstitutionRecords = i3544
  var i3547 = i3543[1]
  var i3546 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i3547.length; i += 1) {
    i3546.add(request.d('TMPro.LigatureSubstitutionRecord', i3547[i + 0]));
  }
  i3542.m_LigatureSubstitutionRecords = i3546
  var i3549 = i3543[2]
  var i3548 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i3549.length; i += 1) {
    i3548.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i3549[i + 0]));
  }
  i3542.m_GlyphPairAdjustmentRecords = i3548
  var i3551 = i3543[3]
  var i3550 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i3551.length; i += 1) {
    i3550.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i3551[i + 0]));
  }
  i3542.m_MarkToBaseAdjustmentRecords = i3550
  var i3553 = i3543[4]
  var i3552 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i3553.length; i += 1) {
    i3552.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i3553[i + 0]));
  }
  i3542.m_MarkToMarkAdjustmentRecords = i3552
  return i3542
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i3556 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i3557 = data
  i3556.m_TargetGlyphID = i3557[0]
  i3556.m_SubstituteGlyphIDs = i3557[1]
  return i3556
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i3560 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i3561 = data
  i3560.m_ComponentGlyphIDs = i3561[0]
  i3560.m_LigatureGlyphID = i3561[1]
  return i3560
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i3564 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i3565 = data
  i3564.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i3565[0], i3564.m_FirstAdjustmentRecord)
  i3564.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i3565[1], i3564.m_SecondAdjustmentRecord)
  i3564.m_FeatureLookupFlags = i3565[2]
  return i3564
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i3566 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i3567 = data
  i3566.m_GlyphIndex = i3567[0]
  i3566.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i3567[1], i3566.m_GlyphValueRecord)
  return i3566
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i3568 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i3569 = data
  i3568.m_XPlacement = i3569[0]
  i3568.m_YPlacement = i3569[1]
  i3568.m_XAdvance = i3569[2]
  i3568.m_YAdvance = i3569[3]
  return i3568
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i3572 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i3573 = data
  i3572.m_BaseGlyphID = i3573[0]
  i3572.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i3573[1], i3572.m_BaseGlyphAnchorPoint)
  i3572.m_MarkGlyphID = i3573[2]
  i3572.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i3573[3], i3572.m_MarkPositionAdjustment)
  return i3572
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i3576 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i3577 = data
  i3576.m_BaseMarkGlyphID = i3577[0]
  i3576.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i3577[1], i3576.m_BaseMarkGlyphAnchorPoint)
  i3576.m_CombiningMarkGlyphID = i3577[2]
  i3576.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i3577[3], i3576.m_CombiningMarkPositionAdjustment)
  return i3576
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i3582 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i3583 = data
  request.r(i3583[0], i3583[1], 0, i3582, 'regularTypeface')
  request.r(i3583[2], i3583[3], 0, i3582, 'italicTypeface')
  return i3582
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i3584 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i3585 = data
  i3584.Name = i3585[0]
  i3584.PointSize = i3585[1]
  i3584.Scale = i3585[2]
  i3584.CharacterCount = i3585[3]
  i3584.LineHeight = i3585[4]
  i3584.Baseline = i3585[5]
  i3584.Ascender = i3585[6]
  i3584.CapHeight = i3585[7]
  i3584.Descender = i3585[8]
  i3584.CenterLine = i3585[9]
  i3584.SuperscriptOffset = i3585[10]
  i3584.SubscriptOffset = i3585[11]
  i3584.SubSize = i3585[12]
  i3584.Underline = i3585[13]
  i3584.UnderlineThickness = i3585[14]
  i3584.strikethrough = i3585[15]
  i3584.strikethroughThickness = i3585[16]
  i3584.TabWidth = i3585[17]
  i3584.Padding = i3585[18]
  i3584.AtlasWidth = i3585[19]
  i3584.AtlasHeight = i3585[20]
  return i3584
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i3588 = root || request.c( 'TMPro.TMP_Glyph' )
  var i3589 = data
  i3588.id = i3589[0]
  i3588.x = i3589[1]
  i3588.y = i3589[2]
  i3588.width = i3589[3]
  i3588.height = i3589[4]
  i3588.xOffset = i3589[5]
  i3588.yOffset = i3589[6]
  i3588.xAdvance = i3589[7]
  i3588.scale = i3589[8]
  return i3588
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i3590 = root || request.c( 'TMPro.KerningTable' )
  var i3591 = data
  var i3593 = i3591[0]
  var i3592 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i3593.length; i += 1) {
    i3592.add(request.d('TMPro.KerningPair', i3593[i + 0]));
  }
  i3590.kerningPairs = i3592
  return i3590
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i3596 = root || request.c( 'TMPro.KerningPair' )
  var i3597 = data
  i3596.xOffset = i3597[0]
  i3596.m_FirstGlyph = i3597[1]
  i3596.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i3597[2], i3596.m_FirstGlyphAdjustments)
  i3596.m_SecondGlyph = i3597[3]
  i3596.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i3597[4], i3596.m_SecondGlyphAdjustments)
  i3596.m_IgnoreSpacingAdjustments = !!i3597[5]
  return i3596
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i3598 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i3599 = data
  i3598.m_FaceIndex = i3599[0]
  i3598.m_FamilyName = i3599[1]
  i3598.m_StyleName = i3599[2]
  i3598.m_PointSize = i3599[3]
  i3598.m_Scale = i3599[4]
  i3598.m_UnitsPerEM = i3599[5]
  i3598.m_LineHeight = i3599[6]
  i3598.m_AscentLine = i3599[7]
  i3598.m_CapLine = i3599[8]
  i3598.m_MeanLine = i3599[9]
  i3598.m_Baseline = i3599[10]
  i3598.m_DescentLine = i3599[11]
  i3598.m_SuperscriptOffset = i3599[12]
  i3598.m_SuperscriptSize = i3599[13]
  i3598.m_SubscriptOffset = i3599[14]
  i3598.m_SubscriptSize = i3599[15]
  i3598.m_UnderlineOffset = i3599[16]
  i3598.m_UnderlineThickness = i3599[17]
  i3598.m_StrikethroughOffset = i3599[18]
  i3598.m_StrikethroughThickness = i3599[19]
  i3598.m_TabWidth = i3599[20]
  return i3598
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i3600 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i3601 = data
  i3600.useSafeMode = !!i3601[0]
  i3600.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i3601[1], i3600.safeModeOptions)
  i3600.timeScale = i3601[2]
  i3600.unscaledTimeScale = i3601[3]
  i3600.useSmoothDeltaTime = !!i3601[4]
  i3600.maxSmoothUnscaledTime = i3601[5]
  i3600.rewindCallbackMode = i3601[6]
  i3600.showUnityEditorReport = !!i3601[7]
  i3600.logBehaviour = i3601[8]
  i3600.drawGizmos = !!i3601[9]
  i3600.defaultRecyclable = !!i3601[10]
  i3600.defaultAutoPlay = i3601[11]
  i3600.defaultUpdateType = i3601[12]
  i3600.defaultTimeScaleIndependent = !!i3601[13]
  i3600.defaultEaseType = i3601[14]
  i3600.defaultEaseOvershootOrAmplitude = i3601[15]
  i3600.defaultEasePeriod = i3601[16]
  i3600.defaultAutoKill = !!i3601[17]
  i3600.defaultLoopType = i3601[18]
  i3600.debugMode = !!i3601[19]
  i3600.debugStoreTargetId = !!i3601[20]
  i3600.showPreviewPanel = !!i3601[21]
  i3600.storeSettingsLocation = i3601[22]
  i3600.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i3601[23], i3600.modules)
  i3600.createASMDEF = !!i3601[24]
  i3600.showPlayingTweens = !!i3601[25]
  i3600.showPausedTweens = !!i3601[26]
  return i3600
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i3602 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i3603 = data
  i3602.logBehaviour = i3603[0]
  i3602.nestedTweenFailureBehaviour = i3603[1]
  return i3602
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i3604 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i3605 = data
  i3604.showPanel = !!i3605[0]
  i3604.audioEnabled = !!i3605[1]
  i3604.physicsEnabled = !!i3605[2]
  i3604.physics2DEnabled = !!i3605[3]
  i3604.spriteEnabled = !!i3605[4]
  i3604.uiEnabled = !!i3605[5]
  i3604.uiToolkitEnabled = !!i3605[6]
  i3604.textMeshProEnabled = !!i3605[7]
  i3604.tk2DEnabled = !!i3605[8]
  i3604.deAudioEnabled = !!i3605[9]
  i3604.deUnityExtendedEnabled = !!i3605[10]
  i3604.epoOutlineEnabled = !!i3605[11]
  return i3604
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i3606 = root || request.c( 'TMPro.TMP_Settings' )
  var i3607 = data
  i3606.assetVersion = i3607[0]
  i3606.m_TextWrappingMode = i3607[1]
  i3606.m_enableKerning = !!i3607[2]
  var i3609 = i3607[3]
  var i3608 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i3609.length; i += 1) {
    i3608.add(i3609[i + 0]);
  }
  i3606.m_ActiveFontFeatures = i3608
  i3606.m_enableExtraPadding = !!i3607[4]
  i3606.m_enableTintAllSprites = !!i3607[5]
  i3606.m_enableParseEscapeCharacters = !!i3607[6]
  i3606.m_EnableRaycastTarget = !!i3607[7]
  i3606.m_GetFontFeaturesAtRuntime = !!i3607[8]
  i3606.m_missingGlyphCharacter = i3607[9]
  i3606.m_ClearDynamicDataOnBuild = !!i3607[10]
  i3606.m_warningsDisabled = !!i3607[11]
  request.r(i3607[12], i3607[13], 0, i3606, 'm_defaultFontAsset')
  i3606.m_defaultFontAssetPath = i3607[14]
  i3606.m_defaultFontSize = i3607[15]
  i3606.m_defaultAutoSizeMinRatio = i3607[16]
  i3606.m_defaultAutoSizeMaxRatio = i3607[17]
  i3606.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i3607[18], i3607[19] )
  i3606.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i3607[20], i3607[21] )
  i3606.m_autoSizeTextContainer = !!i3607[22]
  i3606.m_IsTextObjectScaleStatic = !!i3607[23]
  var i3611 = i3607[24]
  var i3610 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i3611.length; i += 2) {
  request.r(i3611[i + 0], i3611[i + 1], 1, i3610, '')
  }
  i3606.m_fallbackFontAssets = i3610
  i3606.m_matchMaterialPreset = !!i3607[25]
  i3606.m_HideSubTextObjects = !!i3607[26]
  request.r(i3607[27], i3607[28], 0, i3606, 'm_defaultSpriteAsset')
  i3606.m_defaultSpriteAssetPath = i3607[29]
  i3606.m_enableEmojiSupport = !!i3607[30]
  i3606.m_MissingCharacterSpriteUnicode = i3607[31]
  var i3613 = i3607[32]
  var i3612 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i3613.length; i += 2) {
  request.r(i3613[i + 0], i3613[i + 1], 1, i3612, '')
  }
  i3606.m_EmojiFallbackTextAssets = i3612
  i3606.m_defaultColorGradientPresetsPath = i3607[33]
  request.r(i3607[34], i3607[35], 0, i3606, 'm_defaultStyleSheet')
  i3606.m_StyleSheetsResourcePath = i3607[36]
  request.r(i3607[37], i3607[38], 0, i3606, 'm_leadingCharacters')
  request.r(i3607[39], i3607[40], 0, i3606, 'm_followingCharacters')
  i3606.m_UseModernHangulLineBreakingRules = !!i3607[41]
  return i3606
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i3616 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i3617 = data
  request.r(i3617[0], i3617[1], 0, i3616, 'spriteSheet')
  var i3619 = i3617[2]
  var i3618 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i3619.length; i += 1) {
    i3618.add(request.d('TMPro.TMP_Sprite', i3619[i + 0]));
  }
  i3616.spriteInfoList = i3618
  var i3621 = i3617[3]
  var i3620 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i3621.length; i += 2) {
  request.r(i3621[i + 0], i3621[i + 1], 1, i3620, '')
  }
  i3616.fallbackSpriteAssets = i3620
  var i3623 = i3617[4]
  var i3622 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i3623.length; i += 1) {
    i3622.add(request.d('TMPro.TMP_SpriteCharacter', i3623[i + 0]));
  }
  i3616.m_SpriteCharacterTable = i3622
  var i3625 = i3617[5]
  var i3624 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i3625.length; i += 1) {
    i3624.add(request.d('TMPro.TMP_SpriteGlyph', i3625[i + 0]));
  }
  i3616.m_GlyphTable = i3624
  i3616.m_Version = i3617[6]
  i3616.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i3617[7], i3616.m_FaceInfo)
  request.r(i3617[8], i3617[9], 0, i3616, 'm_Material')
  return i3616
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i3628 = root || request.c( 'TMPro.TMP_Sprite' )
  var i3629 = data
  i3628.name = i3629[0]
  i3628.hashCode = i3629[1]
  i3628.unicode = i3629[2]
  i3628.pivot = new pc.Vec2( i3629[3], i3629[4] )
  request.r(i3629[5], i3629[6], 0, i3628, 'sprite')
  i3628.id = i3629[7]
  i3628.x = i3629[8]
  i3628.y = i3629[9]
  i3628.width = i3629[10]
  i3628.height = i3629[11]
  i3628.xOffset = i3629[12]
  i3628.yOffset = i3629[13]
  i3628.xAdvance = i3629[14]
  i3628.scale = i3629[15]
  return i3628
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i3634 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i3635 = data
  i3634.m_Name = i3635[0]
  i3634.m_ElementType = i3635[1]
  i3634.m_Unicode = i3635[2]
  i3634.m_GlyphIndex = i3635[3]
  i3634.m_Scale = i3635[4]
  return i3634
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i3638 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i3639 = data
  request.r(i3639[0], i3639[1], 0, i3638, 'sprite')
  i3638.m_Index = i3639[2]
  i3638.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i3639[3], i3638.m_Metrics)
  i3638.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i3639[4], i3638.m_GlyphRect)
  i3638.m_Scale = i3639[5]
  i3638.m_AtlasIndex = i3639[6]
  i3638.m_ClassDefinitionType = i3639[7]
  return i3638
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i3640 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i3641 = data
  i3640.m_Width = i3641[0]
  i3640.m_Height = i3641[1]
  i3640.m_HorizontalBearingX = i3641[2]
  i3640.m_HorizontalBearingY = i3641[3]
  i3640.m_HorizontalAdvance = i3641[4]
  return i3640
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i3642 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i3643 = data
  var i3645 = i3643[0]
  var i3644 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i3645.length; i += 1) {
    i3644.add(request.d('TMPro.TMP_Style', i3645[i + 0]));
  }
  i3642.m_StyleList = i3644
  return i3642
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i3648 = root || request.c( 'TMPro.TMP_Style' )
  var i3649 = data
  i3648.m_Name = i3649[0]
  i3648.m_HashCode = i3649[1]
  i3648.m_OpeningDefinition = i3649[2]
  i3648.m_ClosingDefinition = i3649[3]
  i3648.m_OpeningTagArray = i3649[4]
  i3648.m_ClosingTagArray = i3649[5]
  return i3648
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i3650 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i3651 = data
  var i3653 = i3651[0]
  var i3652 = []
  for(var i = 0; i < i3653.length; i += 1) {
    i3652.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i3653[i + 0]) );
  }
  i3650.files = i3652
  i3650.componentToPrefabIds = i3651[1]
  return i3650
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i3656 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i3657 = data
  i3656.path = i3657[0]
  request.r(i3657[1], i3657[2], 0, i3656, 'unityObject')
  return i3656
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i3658 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i3659 = data
  var i3661 = i3659[0]
  var i3660 = []
  for(var i = 0; i < i3661.length; i += 1) {
    i3660.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i3661[i + 0]) );
  }
  i3658.scriptsExecutionOrder = i3660
  var i3663 = i3659[1]
  var i3662 = []
  for(var i = 0; i < i3663.length; i += 1) {
    i3662.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i3663[i + 0]) );
  }
  i3658.sortingLayers = i3662
  var i3665 = i3659[2]
  var i3664 = []
  for(var i = 0; i < i3665.length; i += 1) {
    i3664.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i3665[i + 0]) );
  }
  i3658.cullingLayers = i3664
  i3658.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i3659[3], i3658.timeSettings)
  i3658.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i3659[4], i3658.physicsSettings)
  i3658.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i3659[5], i3658.physics2DSettings)
  i3658.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i3659[6], i3658.qualitySettings)
  i3658.enableRealtimeShadows = !!i3659[7]
  i3658.enableAutoInstancing = !!i3659[8]
  i3658.enableStaticBatching = !!i3659[9]
  i3658.enableDynamicBatching = !!i3659[10]
  i3658.lightmapEncodingQuality = i3659[11]
  i3658.desiredColorSpace = i3659[12]
  var i3667 = i3659[13]
  var i3666 = []
  for(var i = 0; i < i3667.length; i += 1) {
    i3666.push( i3667[i + 0] );
  }
  i3658.allTags = i3666
  return i3658
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i3670 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i3671 = data
  i3670.name = i3671[0]
  i3670.value = i3671[1]
  return i3670
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i3674 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i3675 = data
  i3674.id = i3675[0]
  i3674.name = i3675[1]
  i3674.value = i3675[2]
  return i3674
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i3678 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i3679 = data
  i3678.id = i3679[0]
  i3678.name = i3679[1]
  return i3678
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i3680 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i3681 = data
  i3680.fixedDeltaTime = i3681[0]
  i3680.maximumDeltaTime = i3681[1]
  i3680.timeScale = i3681[2]
  i3680.maximumParticleTimestep = i3681[3]
  return i3680
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i3682 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i3683 = data
  i3682.gravity = new pc.Vec3( i3683[0], i3683[1], i3683[2] )
  i3682.defaultSolverIterations = i3683[3]
  i3682.bounceThreshold = i3683[4]
  i3682.autoSyncTransforms = !!i3683[5]
  i3682.autoSimulation = !!i3683[6]
  var i3685 = i3683[7]
  var i3684 = []
  for(var i = 0; i < i3685.length; i += 1) {
    i3684.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i3685[i + 0]) );
  }
  i3682.collisionMatrix = i3684
  return i3682
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i3688 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i3689 = data
  i3688.enabled = !!i3689[0]
  i3688.layerId = i3689[1]
  i3688.otherLayerId = i3689[2]
  return i3688
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i3690 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i3691 = data
  request.r(i3691[0], i3691[1], 0, i3690, 'material')
  i3690.gravity = new pc.Vec2( i3691[2], i3691[3] )
  i3690.positionIterations = i3691[4]
  i3690.velocityIterations = i3691[5]
  i3690.velocityThreshold = i3691[6]
  i3690.maxLinearCorrection = i3691[7]
  i3690.maxAngularCorrection = i3691[8]
  i3690.maxTranslationSpeed = i3691[9]
  i3690.maxRotationSpeed = i3691[10]
  i3690.baumgarteScale = i3691[11]
  i3690.baumgarteTOIScale = i3691[12]
  i3690.timeToSleep = i3691[13]
  i3690.linearSleepTolerance = i3691[14]
  i3690.angularSleepTolerance = i3691[15]
  i3690.defaultContactOffset = i3691[16]
  i3690.autoSimulation = !!i3691[17]
  i3690.queriesHitTriggers = !!i3691[18]
  i3690.queriesStartInColliders = !!i3691[19]
  i3690.callbacksOnDisable = !!i3691[20]
  i3690.reuseCollisionCallbacks = !!i3691[21]
  i3690.autoSyncTransforms = !!i3691[22]
  var i3693 = i3691[23]
  var i3692 = []
  for(var i = 0; i < i3693.length; i += 1) {
    i3692.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i3693[i + 0]) );
  }
  i3690.collisionMatrix = i3692
  return i3690
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i3696 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i3697 = data
  i3696.enabled = !!i3697[0]
  i3696.layerId = i3697[1]
  i3696.otherLayerId = i3697[2]
  return i3696
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i3698 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i3699 = data
  var i3701 = i3699[0]
  var i3700 = []
  for(var i = 0; i < i3701.length; i += 1) {
    i3700.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i3701[i + 0]) );
  }
  i3698.qualityLevels = i3700
  var i3703 = i3699[1]
  var i3702 = []
  for(var i = 0; i < i3703.length; i += 1) {
    i3702.push( i3703[i + 0] );
  }
  i3698.names = i3702
  i3698.shadows = i3699[2]
  i3698.anisotropicFiltering = i3699[3]
  i3698.antiAliasing = i3699[4]
  i3698.lodBias = i3699[5]
  i3698.shadowCascades = i3699[6]
  i3698.shadowDistance = i3699[7]
  i3698.shadowmaskMode = i3699[8]
  i3698.shadowProjection = i3699[9]
  i3698.shadowResolution = i3699[10]
  i3698.softParticles = !!i3699[11]
  i3698.softVegetation = !!i3699[12]
  i3698.activeColorSpace = i3699[13]
  i3698.desiredColorSpace = i3699[14]
  i3698.masterTextureLimit = i3699[15]
  i3698.maxQueuedFrames = i3699[16]
  i3698.particleRaycastBudget = i3699[17]
  i3698.pixelLightCount = i3699[18]
  i3698.realtimeReflectionProbes = !!i3699[19]
  i3698.shadowCascade2Split = i3699[20]
  i3698.shadowCascade4Split = new pc.Vec3( i3699[21], i3699[22], i3699[23] )
  i3698.streamingMipmapsActive = !!i3699[24]
  i3698.vSyncCount = i3699[25]
  i3698.asyncUploadBufferSize = i3699[26]
  i3698.asyncUploadTimeSlice = i3699[27]
  i3698.billboardsFaceCameraPosition = !!i3699[28]
  i3698.shadowNearPlaneOffset = i3699[29]
  i3698.streamingMipmapsMemoryBudget = i3699[30]
  i3698.maximumLODLevel = i3699[31]
  i3698.streamingMipmapsAddAllCameras = !!i3699[32]
  i3698.streamingMipmapsMaxLevelReduction = i3699[33]
  i3698.streamingMipmapsRenderersPerFrame = i3699[34]
  i3698.resolutionScalingFixedDPIFactor = i3699[35]
  i3698.streamingMipmapsMaxFileIORequests = i3699[36]
  i3698.currentQualityLevel = i3699[37]
  return i3698
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i3708 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i3709 = data
  i3708.weight = i3709[0]
  i3708.vertices = i3709[1]
  i3708.normals = i3709[2]
  i3708.tangents = i3709[3]
  return i3708
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i3712 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i3713 = data
  i3712.mode = i3713[0]
  i3712.parameter = i3713[1]
  i3712.threshold = i3713[2]
  return i3712
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i3714 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i3715 = data
  i3714.m_XCoordinate = i3715[0]
  i3714.m_YCoordinate = i3715[1]
  return i3714
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i3716 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i3717 = data
  i3716.m_XPositionAdjustment = i3717[0]
  i3716.m_YPositionAdjustment = i3717[1]
  return i3716
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i3718 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i3719 = data
  i3718.xPlacement = i3719[0]
  i3718.yPlacement = i3719[1]
  i3718.xAdvance = i3719[2]
  i3718.yAdvance = i3719[3]
  return i3718
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2}}

Deserializers.requiredComponents = {"44":[45],"46":[45],"47":[45],"48":[45],"49":[45],"50":[45],"51":[52],"53":[2],"54":[55],"56":[55],"57":[55],"58":[55],"59":[55],"60":[55],"61":[62],"63":[62],"64":[62],"65":[62],"66":[62],"67":[62],"68":[62],"69":[62],"70":[62],"71":[62],"72":[62],"73":[62],"74":[62],"75":[2],"76":[77],"78":[79],"80":[79],"23":[22],"6":[2],"14":[81],"20":[81],"19":[81],"82":[62],"83":[84],"85":[81],"86":[9],"87":[2],"88":[89],"90":[36],"91":[23],"92":[22],"93":[77,22],"28":[22,27],"94":[22],"95":[27,22],"96":[77],"97":[27,22],"98":[22],"99":[100],"101":[100],"102":[100],"103":[22],"104":[22],"26":[23],"30":[27,22],"105":[22],"25":[23],"106":[22],"107":[22],"108":[22],"109":[22],"110":[22],"111":[22],"112":[22],"113":[22],"114":[22],"115":[27,22],"116":[22],"117":[22],"118":[22],"119":[22],"120":[27,22],"121":[22],"122":[36],"123":[36],"37":[36],"124":[36],"125":[2],"126":[2]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.MonoBehaviour","CameraFollow2D","AutoCameraFit","UnityEngine.Transform","MoveBetweenPoints","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.Material","ScreenHeightPositionAnchor","UnityEngine.BoxCollider","ClickToStore","Ply_SoundManager","UnityEngine.AudioClip","UnityEngine.AudioSource","ItemSequenceManager","DraggableItem","CharacterSlot","UnityEngine.GameObject","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","UnityEngine.UI.Image","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Mesh","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.Font","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.Collider","BatStrikeController","SlotTrigger","UnityEngine.BoxCollider2D","PlayerSlot","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.InputSystem.UI.InputSystemUIInputModule","UnityEngine.InputSystem.UI.TrackedDeviceRaycaster","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.38f1";

Deserializers.productName = "PLY_MiniSoccer";

Deserializers.lunaInitializationTime = "07/15/2026 03:53:54";

Deserializers.lunaDaysRunning = "89.1";

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

Deserializers.runtimeAnalysisExcludedMethodsCount = "4732";

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

Deserializers.buildID = "efb10bdb-267a-4498-b8b8-0a885412af28";

Deserializers.runtimeInitializeOnLoadInfos = [[["Unity","Services","Core","Internal","UnityServicesInitializer","EnableServicesInitializationAsync"],["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["DG","Tweening","DOTween","RuntimeOnLoad"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["Unity","Services","Core","Registration","CorePackageInitializer","InitializeOnLoad"],["Unity","Services","Core","Internal","TaskAsyncOperation","SetScheduler"],["Unity","Services","Core","Environments","Client","Scheduler","EngineStateHelper","Init"],["Unity","Services","Core","Environments","Client","Scheduler","ThreadHelper","Init"],["Ua2CoreInitializeCallback","Register"],["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["Unity","AI","Navigation","NavMeshLink","ClearTrackedList"],["Unity","AI","Navigation","NavMeshSurface","ClearNavMeshSurfaces"],["Unity","AI","Navigation","NavMeshModifierVolume","ClearNavMeshModifiers"],["Unity","AI","Navigation","NavMeshModifier","ClearNavMeshModifiers"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["Unity","Services","Core","Internal","UnityServicesInitializer","CreateStaticInstance"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[["Unity","Services","Core","Environments","Client","Http","JsonHelpers","RegisterTypesForAOT"]],[["Unity","Services","Core","UnityThreadUtils","CaptureUnityThreadInfo"],["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

