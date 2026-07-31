var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i3110 = root || request.c( 'UnityEngine.JointSpring' )
  var i3111 = data
  i3110.spring = i3111[0]
  i3110.damper = i3111[1]
  i3110.targetPosition = i3111[2]
  return i3110
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i3112 = root || request.c( 'UnityEngine.JointMotor' )
  var i3113 = data
  i3112.m_TargetVelocity = i3113[0]
  i3112.m_Force = i3113[1]
  i3112.m_FreeSpin = i3113[2]
  return i3112
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i3114 = root || request.c( 'UnityEngine.JointLimits' )
  var i3115 = data
  i3114.m_Min = i3115[0]
  i3114.m_Max = i3115[1]
  i3114.m_Bounciness = i3115[2]
  i3114.m_BounceMinVelocity = i3115[3]
  i3114.m_ContactDistance = i3115[4]
  i3114.minBounce = i3115[5]
  i3114.maxBounce = i3115[6]
  return i3114
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i3116 = root || request.c( 'UnityEngine.JointDrive' )
  var i3117 = data
  i3116.m_PositionSpring = i3117[0]
  i3116.m_PositionDamper = i3117[1]
  i3116.m_MaximumForce = i3117[2]
  i3116.m_UseAcceleration = i3117[3]
  return i3116
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i3118 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i3119 = data
  i3118.m_Spring = i3119[0]
  i3118.m_Damper = i3119[1]
  return i3118
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i3120 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i3121 = data
  i3120.m_Limit = i3121[0]
  i3120.m_Bounciness = i3121[1]
  i3120.m_ContactDistance = i3121[2]
  return i3120
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i3122 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i3123 = data
  i3122.m_ExtremumSlip = i3123[0]
  i3122.m_ExtremumValue = i3123[1]
  i3122.m_AsymptoteSlip = i3123[2]
  i3122.m_AsymptoteValue = i3123[3]
  i3122.m_Stiffness = i3123[4]
  return i3122
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i3124 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i3125 = data
  i3124.m_LowerAngle = i3125[0]
  i3124.m_UpperAngle = i3125[1]
  return i3124
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i3126 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i3127 = data
  i3126.m_MotorSpeed = i3127[0]
  i3126.m_MaximumMotorTorque = i3127[1]
  return i3126
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i3128 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i3129 = data
  i3128.m_DampingRatio = i3129[0]
  i3128.m_Frequency = i3129[1]
  i3128.m_Angle = i3129[2]
  return i3128
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i3130 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i3131 = data
  i3130.m_LowerTranslation = i3131[0]
  i3130.m_UpperTranslation = i3131[1]
  return i3130
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i3132 = root || new pc.UnityMaterial()
  var i3133 = data
  i3132.name = i3133[0]
  request.r(i3133[1], i3133[2], 0, i3132, 'shader')
  i3132.renderQueue = i3133[3]
  i3132.enableInstancing = !!i3133[4]
  var i3135 = i3133[5]
  var i3134 = []
  for(var i = 0; i < i3135.length; i += 1) {
    i3134.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i3135[i + 0]) );
  }
  i3132.floatParameters = i3134
  var i3137 = i3133[6]
  var i3136 = []
  for(var i = 0; i < i3137.length; i += 1) {
    i3136.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i3137[i + 0]) );
  }
  i3132.colorParameters = i3136
  var i3139 = i3133[7]
  var i3138 = []
  for(var i = 0; i < i3139.length; i += 1) {
    i3138.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i3139[i + 0]) );
  }
  i3132.vectorParameters = i3138
  var i3141 = i3133[8]
  var i3140 = []
  for(var i = 0; i < i3141.length; i += 1) {
    i3140.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i3141[i + 0]) );
  }
  i3132.textureParameters = i3140
  var i3143 = i3133[9]
  var i3142 = []
  for(var i = 0; i < i3143.length; i += 1) {
    i3142.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i3143[i + 0]) );
  }
  i3132.materialFlags = i3142
  return i3132
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i3146 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i3147 = data
  i3146.name = i3147[0]
  i3146.value = i3147[1]
  return i3146
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i3150 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i3151 = data
  i3150.name = i3151[0]
  i3150.value = new pc.Color(i3151[1], i3151[2], i3151[3], i3151[4])
  return i3150
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i3154 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i3155 = data
  i3154.name = i3155[0]
  i3154.value = new pc.Vec4( i3155[1], i3155[2], i3155[3], i3155[4] )
  return i3154
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i3158 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i3159 = data
  i3158.name = i3159[0]
  request.r(i3159[1], i3159[2], 0, i3158, 'value')
  return i3158
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i3162 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i3163 = data
  i3162.name = i3163[0]
  i3162.enabled = !!i3163[1]
  return i3162
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i3164 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i3165 = data
  i3164.name = i3165[0]
  i3164.width = i3165[1]
  i3164.height = i3165[2]
  i3164.mipmapCount = i3165[3]
  i3164.anisoLevel = i3165[4]
  i3164.filterMode = i3165[5]
  i3164.hdr = !!i3165[6]
  i3164.format = i3165[7]
  i3164.wrapMode = i3165[8]
  i3164.alphaIsTransparency = !!i3165[9]
  i3164.alphaSource = i3165[10]
  i3164.graphicsFormat = i3165[11]
  i3164.sRGBTexture = !!i3165[12]
  i3164.desiredColorSpace = i3165[13]
  i3164.wrapU = i3165[14]
  i3164.wrapV = i3165[15]
  return i3164
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i3166 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i3167 = data
  i3166.name = i3167[0]
  i3166.halfPrecision = !!i3167[1]
  i3166.useSimplification = !!i3167[2]
  i3166.useUInt32IndexFormat = !!i3167[3]
  i3166.vertexCount = i3167[4]
  i3166.aabb = i3167[5]
  var i3169 = i3167[6]
  var i3168 = []
  for(var i = 0; i < i3169.length; i += 1) {
    i3168.push( !!i3169[i + 0] );
  }
  i3166.streams = i3168
  i3166.vertices = i3167[7]
  var i3171 = i3167[8]
  var i3170 = []
  for(var i = 0; i < i3171.length; i += 1) {
    i3170.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i3171[i + 0]) );
  }
  i3166.subMeshes = i3170
  var i3173 = i3167[9]
  var i3172 = []
  for(var i = 0; i < i3173.length; i += 16) {
    i3172.push( new pc.Mat4().setData(i3173[i + 0], i3173[i + 1], i3173[i + 2], i3173[i + 3],  i3173[i + 4], i3173[i + 5], i3173[i + 6], i3173[i + 7],  i3173[i + 8], i3173[i + 9], i3173[i + 10], i3173[i + 11],  i3173[i + 12], i3173[i + 13], i3173[i + 14], i3173[i + 15]) );
  }
  i3166.bindposes = i3172
  var i3175 = i3167[10]
  var i3174 = []
  for(var i = 0; i < i3175.length; i += 1) {
    i3174.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i3175[i + 0]) );
  }
  i3166.blendShapes = i3174
  return i3166
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i3180 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i3181 = data
  i3180.triangles = i3181[0]
  return i3180
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i3186 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i3187 = data
  i3186.name = i3187[0]
  var i3189 = i3187[1]
  var i3188 = []
  for(var i = 0; i < i3189.length; i += 1) {
    i3188.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i3189[i + 0]) );
  }
  i3186.frames = i3188
  return i3186
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i3190 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i3191 = data
  i3190.name = i3191[0]
  i3190.index = i3191[1]
  i3190.startup = !!i3191[2]
  return i3190
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i3192 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i3193 = data
  i3192.aspect = i3193[0]
  i3192.orthographic = !!i3193[1]
  i3192.orthographicSize = i3193[2]
  i3192.backgroundColor = new pc.Color(i3193[3], i3193[4], i3193[5], i3193[6])
  i3192.nearClipPlane = i3193[7]
  i3192.farClipPlane = i3193[8]
  i3192.fieldOfView = i3193[9]
  i3192.depth = i3193[10]
  i3192.clearFlags = i3193[11]
  i3192.cullingMask = i3193[12]
  i3192.rect = i3193[13]
  request.r(i3193[14], i3193[15], 0, i3192, 'targetTexture')
  i3192.usePhysicalProperties = !!i3193[16]
  i3192.focalLength = i3193[17]
  i3192.sensorSize = new pc.Vec2( i3193[18], i3193[19] )
  i3192.lensShift = new pc.Vec2( i3193[20], i3193[21] )
  i3192.gateFit = i3193[22]
  i3192.commandBufferCount = i3193[23]
  i3192.cameraType = i3193[24]
  i3192.enabled = !!i3193[25]
  return i3192
}

Deserializers["CameraFollow2D"] = function (request, data, root) {
  var i3194 = root || request.c( 'CameraFollow2D' )
  var i3195 = data
  request.r(i3195[0], i3195[1], 0, i3194, 'target')
  i3194.smoothSpeed = i3195[2]
  i3194.offset = new pc.Vec3( i3195[3], i3195[4], i3195[5] )
  i3194.followY = !!i3195[6]
  return i3194
}

Deserializers["AutoCameraFit"] = function (request, data, root) {
  var i3196 = root || request.c( 'AutoCameraFit' )
  var i3197 = data
  request.r(i3197[0], i3197[1], 0, i3196, 'tallScreenObject')
  i3196.tallScreenRatioThreshold = i3197[2]
  i3196.tallScreenYOffset = i3197[3]
  request.r(i3197[4], i3197[5], 0, i3196, 'canvasBtn')
  request.r(i3197[6], i3197[7], 0, i3196, 'targetArea')
  i3196.paddingLandscape = i3197[8]
  i3196.paddingPortrait = i3197[9]
  i3196.extraPaddingSmallScreen = i3197[10]
  i3196.smallScreenThreshold = i3197[11]
  i3196.autoUpdateOnResize = !!i3197[12]
  i3196.adjustInEditMode = !!i3197[13]
  return i3196
}

Deserializers["MoveBetweenPoints"] = function (request, data, root) {
  var i3198 = root || request.c( 'MoveBetweenPoints' )
  var i3199 = data
  request.r(i3199[0], i3199[1], 0, i3198, 'pointA')
  request.r(i3199[2], i3199[3], 0, i3198, 'pointB')
  i3198.duration = i3199[4]
  return i3198
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i3200 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i3201 = data
  i3200.color = new pc.Color(i3201[0], i3201[1], i3201[2], i3201[3])
  request.r(i3201[4], i3201[5], 0, i3200, 'sprite')
  i3200.flipX = !!i3201[6]
  i3200.flipY = !!i3201[7]
  i3200.drawMode = i3201[8]
  i3200.size = new pc.Vec2( i3201[9], i3201[10] )
  i3200.tileMode = i3201[11]
  i3200.adaptiveModeThreshold = i3201[12]
  i3200.maskInteraction = i3201[13]
  i3200.spriteSortPoint = i3201[14]
  i3200.enabled = !!i3201[15]
  request.r(i3201[16], i3201[17], 0, i3200, 'sharedMaterial')
  var i3203 = i3201[18]
  var i3202 = []
  for(var i = 0; i < i3203.length; i += 2) {
  request.r(i3203[i + 0], i3203[i + 1], 2, i3202, '')
  }
  i3200.sharedMaterials = i3202
  i3200.receiveShadows = !!i3201[19]
  i3200.shadowCastingMode = i3201[20]
  i3200.sortingLayerID = i3201[21]
  i3200.sortingOrder = i3201[22]
  i3200.lightmapIndex = i3201[23]
  i3200.lightmapSceneIndex = i3201[24]
  i3200.lightmapScaleOffset = new pc.Vec4( i3201[25], i3201[26], i3201[27], i3201[28] )
  i3200.lightProbeUsage = i3201[29]
  i3200.reflectionProbeUsage = i3201[30]
  return i3200
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i3206 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i3207 = data
  i3206.name = i3207[0]
  i3206.tagId = i3207[1]
  i3206.enabled = !!i3207[2]
  i3206.isStatic = !!i3207[3]
  i3206.layer = i3207[4]
  return i3206
}

Deserializers["ScreenHeightPositionAnchor"] = function (request, data, root) {
  var i3208 = root || request.c( 'ScreenHeightPositionAnchor' )
  var i3209 = data
  request.r(i3209[0], i3209[1], 0, i3208, 'anchorPoint')
  request.r(i3209[2], i3209[3], 0, i3208, 'targetCamera')
  i3208.viewportYRatio = i3209[4]
  i3208.alignOnStart = !!i3209[5]
  i3208.alignOnEnable = !!i3209[6]
  i3208.realignOnScreenSizeChanged = !!i3209[7]
  i3208.drawGizmos = !!i3209[8]
  i3208.targetLineColor = new pc.Color(i3209[9], i3209[10], i3209[11], i3209[12])
  i3208.anchorColor = new pc.Color(i3209[13], i3209[14], i3209[15], i3209[16])
  return i3208
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i3210 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i3211 = data
  i3210.center = new pc.Vec3( i3211[0], i3211[1], i3211[2] )
  i3210.size = new pc.Vec3( i3211[3], i3211[4], i3211[5] )
  i3210.enabled = !!i3211[6]
  i3210.isTrigger = !!i3211[7]
  request.r(i3211[8], i3211[9], 0, i3210, 'material')
  return i3210
}

Deserializers["ClickToStore"] = function (request, data, root) {
  var i3212 = root || request.c( 'ClickToStore' )
  var i3213 = data
  return i3212
}

Deserializers["Ply_SoundManager"] = function (request, data, root) {
  var i3214 = root || request.c( 'Ply_SoundManager' )
  var i3215 = data
  i3214.fxAudio = request.d('FxAudio', i3215[0], i3214.fxAudio)
  request.r(i3215[1], i3215[2], 0, i3214, 'bgm1')
  return i3214
}

Deserializers["FxAudio"] = function (request, data, root) {
  var i3216 = root || request.c( 'FxAudio' )
  var i3217 = data
  i3216.Angry = request.d('SoundData', i3217[0], i3216.Angry)
  i3216.Cry = request.d('SoundData', i3217[1], i3216.Cry)
  i3216.Hehe = request.d('SoundData', i3217[2], i3216.Hehe)
  i3216.Huh = request.d('SoundData', i3217[3], i3216.Huh)
  i3216.RoarTiger = request.d('SoundData', i3217[4], i3216.RoarTiger)
  i3216.Siuu = request.d('SoundData', i3217[5], i3216.Siuu)
  i3216.True = request.d('SoundData', i3217[6], i3216.True)
  i3216.False = request.d('SoundData', i3217[7], i3216.False)
  return i3216
}

Deserializers["SoundData"] = function (request, data, root) {
  var i3218 = root || request.c( 'SoundData' )
  var i3219 = data
  request.r(i3219[0], i3219[1], 0, i3218, 'clip')
  i3218.repeatCount = i3219[2]
  return i3218
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i3220 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i3221 = data
  request.r(i3221[0], i3221[1], 0, i3220, 'clip')
  request.r(i3221[2], i3221[3], 0, i3220, 'outputAudioMixerGroup')
  i3220.playOnAwake = !!i3221[4]
  i3220.loop = !!i3221[5]
  i3220.time = i3221[6]
  i3220.volume = i3221[7]
  i3220.pitch = i3221[8]
  i3220.enabled = !!i3221[9]
  return i3220
}

Deserializers["ItemSequenceManager"] = function (request, data, root) {
  var i3222 = root || request.c( 'ItemSequenceManager' )
  var i3223 = data
  var i3225 = i3223[0]
  var i3224 = new (System.Collections.Generic.List$1(Bridge.ns('DraggableItem')))
  for(var i = 0; i < i3225.length; i += 2) {
  request.r(i3225[i + 0], i3225[i + 1], 1, i3224, '')
  }
  i3222.itemList = i3224
  request.r(i3223[1], i3223[2], 0, i3222, 'spawnPoint')
  request.r(i3223[3], i3223[4], 0, i3222, 'targetPoint')
  i3222.moveDuration = i3223[5]
  i3222.moveEase = i3223[6]
  i3222.delayBetweenItems = i3223[7]
  var i3227 = i3223[8]
  var i3226 = new (System.Collections.Generic.List$1(Bridge.ns('CharacterDropZone')))
  for(var i = 0; i < i3227.length; i += 2) {
  request.r(i3227[i + 0], i3227[i + 1], 1, i3226, '')
  }
  i3222.characterList = i3226
  i3222.isWin = !!i3223[9]
  request.r(i3223[10], i3223[11], 0, i3222, 'winObject')
  i3222.winFxType = i3223[12]
  request.r(i3223[13], i3223[14], 0, i3222, 'loseObject')
  i3222.loseFxType = i3223[15]
  i3222.resultTextDelay = i3223[16]
  request.r(i3223[17], i3223[18], 0, i3222, 'gameplayObject')
  request.r(i3223[19], i3223[20], 0, i3222, 'endcardObject')
  request.r(i3223[21], i3223[22], 0, i3222, 'objectToHideOnFirstDrag')
  i3222.endcardDelay = i3223[23]
  i3222.isFailedMode = !!i3223[24]
  return i3222
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i3232 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i3233 = data
  i3232.pivot = new pc.Vec2( i3233[0], i3233[1] )
  i3232.anchorMin = new pc.Vec2( i3233[2], i3233[3] )
  i3232.anchorMax = new pc.Vec2( i3233[4], i3233[5] )
  i3232.sizeDelta = new pc.Vec2( i3233[6], i3233[7] )
  i3232.anchoredPosition3D = new pc.Vec3( i3233[8], i3233[9], i3233[10] )
  i3232.rotation = new pc.Quat(i3233[11], i3233[12], i3233[13], i3233[14])
  i3232.scale = new pc.Vec3( i3233[15], i3233[16], i3233[17] )
  return i3232
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i3234 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i3235 = data
  i3234.planeDistance = i3235[0]
  i3234.referencePixelsPerUnit = i3235[1]
  i3234.isFallbackOverlay = !!i3235[2]
  i3234.renderMode = i3235[3]
  i3234.renderOrder = i3235[4]
  i3234.sortingLayerName = i3235[5]
  i3234.sortingOrder = i3235[6]
  i3234.scaleFactor = i3235[7]
  request.r(i3235[8], i3235[9], 0, i3234, 'worldCamera')
  i3234.overrideSorting = !!i3235[10]
  i3234.pixelPerfect = !!i3235[11]
  i3234.targetDisplay = i3235[12]
  i3234.overridePixelPerfect = !!i3235[13]
  i3234.enabled = !!i3235[14]
  return i3234
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i3236 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i3237 = data
  i3236.m_UiScaleMode = i3237[0]
  i3236.m_ReferencePixelsPerUnit = i3237[1]
  i3236.m_ScaleFactor = i3237[2]
  i3236.m_ReferenceResolution = new pc.Vec2( i3237[3], i3237[4] )
  i3236.m_ScreenMatchMode = i3237[5]
  i3236.m_MatchWidthOrHeight = i3237[6]
  i3236.m_PhysicalUnit = i3237[7]
  i3236.m_FallbackScreenDPI = i3237[8]
  i3236.m_DefaultSpriteDPI = i3237[9]
  i3236.m_DynamicPixelsPerUnit = i3237[10]
  i3236.m_PresetInfoIsWorld = !!i3237[11]
  return i3236
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i3238 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i3239 = data
  i3238.m_IgnoreReversedGraphics = !!i3239[0]
  i3238.m_BlockingObjects = i3239[1]
  i3238.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i3239[2] )
  return i3238
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i3240 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i3241 = data
  i3240.cullTransparentMesh = !!i3241[0]
  return i3240
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i3242 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i3243 = data
  i3242.m_hasFontAssetChanged = !!i3243[0]
  request.r(i3243[1], i3243[2], 0, i3242, 'm_baseMaterial')
  i3242.m_maskOffset = new pc.Vec4( i3243[3], i3243[4], i3243[5], i3243[6] )
  i3242.m_text = i3243[7]
  i3242.m_isRightToLeft = !!i3243[8]
  request.r(i3243[9], i3243[10], 0, i3242, 'm_fontAsset')
  request.r(i3243[11], i3243[12], 0, i3242, 'm_sharedMaterial')
  var i3245 = i3243[13]
  var i3244 = []
  for(var i = 0; i < i3245.length; i += 2) {
  request.r(i3245[i + 0], i3245[i + 1], 2, i3244, '')
  }
  i3242.m_fontSharedMaterials = i3244
  request.r(i3243[14], i3243[15], 0, i3242, 'm_fontMaterial')
  var i3247 = i3243[16]
  var i3246 = []
  for(var i = 0; i < i3247.length; i += 2) {
  request.r(i3247[i + 0], i3247[i + 1], 2, i3246, '')
  }
  i3242.m_fontMaterials = i3246
  i3242.m_fontColor32 = UnityEngine.Color32.ConstructColor(i3243[17], i3243[18], i3243[19], i3243[20])
  i3242.m_fontColor = new pc.Color(i3243[21], i3243[22], i3243[23], i3243[24])
  i3242.m_enableVertexGradient = !!i3243[25]
  i3242.m_colorMode = i3243[26]
  i3242.m_fontColorGradient = request.d('TMPro.VertexGradient', i3243[27], i3242.m_fontColorGradient)
  request.r(i3243[28], i3243[29], 0, i3242, 'm_fontColorGradientPreset')
  request.r(i3243[30], i3243[31], 0, i3242, 'm_spriteAsset')
  i3242.m_tintAllSprites = !!i3243[32]
  request.r(i3243[33], i3243[34], 0, i3242, 'm_StyleSheet')
  i3242.m_TextStyleHashCode = i3243[35]
  i3242.m_overrideHtmlColors = !!i3243[36]
  i3242.m_faceColor = UnityEngine.Color32.ConstructColor(i3243[37], i3243[38], i3243[39], i3243[40])
  i3242.m_fontSize = i3243[41]
  i3242.m_fontSizeBase = i3243[42]
  i3242.m_fontWeight = i3243[43]
  i3242.m_enableAutoSizing = !!i3243[44]
  i3242.m_fontSizeMin = i3243[45]
  i3242.m_fontSizeMax = i3243[46]
  i3242.m_fontStyle = i3243[47]
  i3242.m_HorizontalAlignment = i3243[48]
  i3242.m_VerticalAlignment = i3243[49]
  i3242.m_textAlignment = i3243[50]
  i3242.m_characterSpacing = i3243[51]
  i3242.m_wordSpacing = i3243[52]
  i3242.m_lineSpacing = i3243[53]
  i3242.m_lineSpacingMax = i3243[54]
  i3242.m_paragraphSpacing = i3243[55]
  i3242.m_charWidthMaxAdj = i3243[56]
  i3242.m_TextWrappingMode = i3243[57]
  i3242.m_wordWrappingRatios = i3243[58]
  i3242.m_overflowMode = i3243[59]
  request.r(i3243[60], i3243[61], 0, i3242, 'm_linkedTextComponent')
  request.r(i3243[62], i3243[63], 0, i3242, 'parentLinkedComponent')
  i3242.m_enableKerning = !!i3243[64]
  var i3249 = i3243[65]
  var i3248 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i3249.length; i += 1) {
    i3248.add(i3249[i + 0]);
  }
  i3242.m_ActiveFontFeatures = i3248
  i3242.m_enableExtraPadding = !!i3243[66]
  i3242.checkPaddingRequired = !!i3243[67]
  i3242.m_isRichText = !!i3243[68]
  i3242.m_parseCtrlCharacters = !!i3243[69]
  i3242.m_isOrthographic = !!i3243[70]
  i3242.m_isCullingEnabled = !!i3243[71]
  i3242.m_horizontalMapping = i3243[72]
  i3242.m_verticalMapping = i3243[73]
  i3242.m_uvLineOffset = i3243[74]
  i3242.m_geometrySortingOrder = i3243[75]
  i3242.m_IsTextObjectScaleStatic = !!i3243[76]
  i3242.m_VertexBufferAutoSizeReduction = !!i3243[77]
  i3242.m_useMaxVisibleDescender = !!i3243[78]
  i3242.m_pageToDisplay = i3243[79]
  i3242.m_margin = new pc.Vec4( i3243[80], i3243[81], i3243[82], i3243[83] )
  i3242.m_isUsingLegacyAnimationComponent = !!i3243[84]
  i3242.m_isVolumetricText = !!i3243[85]
  request.r(i3243[86], i3243[87], 0, i3242, 'm_Material')
  i3242.m_EmojiFallbackSupport = !!i3243[88]
  i3242.m_Maskable = !!i3243[89]
  i3242.m_Color = new pc.Color(i3243[90], i3243[91], i3243[92], i3243[93])
  i3242.m_RaycastTarget = !!i3243[94]
  i3242.m_RaycastPadding = new pc.Vec4( i3243[95], i3243[96], i3243[97], i3243[98] )
  return i3242
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i3250 = root || request.c( 'TMPro.VertexGradient' )
  var i3251 = data
  i3250.topLeft = new pc.Color(i3251[0], i3251[1], i3251[2], i3251[3])
  i3250.topRight = new pc.Color(i3251[4], i3251[5], i3251[6], i3251[7])
  i3250.bottomLeft = new pc.Color(i3251[8], i3251[9], i3251[10], i3251[11])
  i3250.bottomRight = new pc.Color(i3251[12], i3251[13], i3251[14], i3251[15])
  return i3250
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i3254 = root || request.c( 'UnityEngine.UI.Image' )
  var i3255 = data
  request.r(i3255[0], i3255[1], 0, i3254, 'm_Sprite')
  i3254.m_Type = i3255[2]
  i3254.m_PreserveAspect = !!i3255[3]
  i3254.m_FillCenter = !!i3255[4]
  i3254.m_FillMethod = i3255[5]
  i3254.m_FillAmount = i3255[6]
  i3254.m_FillClockwise = !!i3255[7]
  i3254.m_FillOrigin = i3255[8]
  i3254.m_UseSpriteMesh = !!i3255[9]
  i3254.m_PixelsPerUnitMultiplier = i3255[10]
  request.r(i3255[11], i3255[12], 0, i3254, 'm_Material')
  i3254.m_Maskable = !!i3255[13]
  i3254.m_Color = new pc.Color(i3255[14], i3255[15], i3255[16], i3255[17])
  i3254.m_RaycastTarget = !!i3255[18]
  i3254.m_RaycastPadding = new pc.Vec4( i3255[19], i3255[20], i3255[21], i3255[22] )
  return i3254
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i3256 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i3257 = data
  request.r(i3257[0], i3257[1], 0, i3256, 'animatorController')
  request.r(i3257[2], i3257[3], 0, i3256, 'avatar')
  i3256.updateMode = i3257[4]
  i3256.hasTransformHierarchy = !!i3257[5]
  i3256.applyRootMotion = !!i3257[6]
  var i3259 = i3257[7]
  var i3258 = []
  for(var i = 0; i < i3259.length; i += 2) {
  request.r(i3259[i + 0], i3259[i + 1], 2, i3258, '')
  }
  i3256.humanBones = i3258
  i3256.enabled = !!i3257[8]
  return i3256
}

Deserializers["CharacterDropZone"] = function (request, data, root) {
  var i3262 = root || request.c( 'CharacterDropZone' )
  var i3263 = data
  request.r(i3263[0], i3263[1], 0, i3262, 'characterData')
  i3262.flyToCharacterDuration = i3263[2]
  i3262.flyEase = i3263[3]
  i3262.hasReceivedItem = !!i3263[4]
  i3262.isCorrectItemReceived = !!i3263[5]
  return i3262
}

Deserializers["DraggableItem"] = function (request, data, root) {
  var i3264 = root || request.c( 'DraggableItem' )
  var i3265 = data
  i3264.itemID = i3265[0]
  i3264.itemLayer = UnityEngine.LayerMask.FromIntegerValue( i3265[1] )
  return i3264
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i3266 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i3267 = data
  i3266.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i3267[0], i3266.main)
  i3266.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i3267[1], i3266.colorBySpeed)
  i3266.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i3267[2], i3266.colorOverLifetime)
  i3266.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i3267[3], i3266.emission)
  i3266.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i3267[4], i3266.rotationBySpeed)
  i3266.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i3267[5], i3266.rotationOverLifetime)
  i3266.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i3267[6], i3266.shape)
  i3266.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i3267[7], i3266.sizeBySpeed)
  i3266.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i3267[8], i3266.sizeOverLifetime)
  i3266.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i3267[9], i3266.textureSheetAnimation)
  i3266.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i3267[10], i3266.velocityOverLifetime)
  i3266.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i3267[11], i3266.noise)
  i3266.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i3267[12], i3266.inheritVelocity)
  i3266.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i3267[13], i3266.forceOverLifetime)
  i3266.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i3267[14], i3266.limitVelocityOverLifetime)
  i3266.useAutoRandomSeed = !!i3267[15]
  i3266.randomSeed = i3267[16]
  return i3266
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i3268 = root || new pc.ParticleSystemMain()
  var i3269 = data
  i3268.duration = i3269[0]
  i3268.loop = !!i3269[1]
  i3268.prewarm = !!i3269[2]
  i3268.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3269[3], i3268.startDelay)
  i3268.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3269[4], i3268.startLifetime)
  i3268.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3269[5], i3268.startSpeed)
  i3268.startSize3D = !!i3269[6]
  i3268.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3269[7], i3268.startSizeX)
  i3268.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3269[8], i3268.startSizeY)
  i3268.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3269[9], i3268.startSizeZ)
  i3268.startRotation3D = !!i3269[10]
  i3268.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3269[11], i3268.startRotationX)
  i3268.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3269[12], i3268.startRotationY)
  i3268.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3269[13], i3268.startRotationZ)
  i3268.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i3269[14], i3268.startColor)
  i3268.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3269[15], i3268.gravityModifier)
  i3268.simulationSpace = i3269[16]
  request.r(i3269[17], i3269[18], 0, i3268, 'customSimulationSpace')
  i3268.simulationSpeed = i3269[19]
  i3268.useUnscaledTime = !!i3269[20]
  i3268.scalingMode = i3269[21]
  i3268.playOnAwake = !!i3269[22]
  i3268.maxParticles = i3269[23]
  i3268.emitterVelocityMode = i3269[24]
  i3268.stopAction = i3269[25]
  return i3268
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i3270 = root || new pc.MinMaxCurve()
  var i3271 = data
  i3270.mode = i3271[0]
  i3270.curveMin = new pc.AnimationCurve( { keys_flow: i3271[1] } )
  i3270.curveMax = new pc.AnimationCurve( { keys_flow: i3271[2] } )
  i3270.curveMultiplier = i3271[3]
  i3270.constantMin = i3271[4]
  i3270.constantMax = i3271[5]
  return i3270
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i3272 = root || new pc.MinMaxGradient()
  var i3273 = data
  i3272.mode = i3273[0]
  i3272.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i3273[1], i3272.gradientMin)
  i3272.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i3273[2], i3272.gradientMax)
  i3272.colorMin = new pc.Color(i3273[3], i3273[4], i3273[5], i3273[6])
  i3272.colorMax = new pc.Color(i3273[7], i3273[8], i3273[9], i3273[10])
  return i3272
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i3274 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i3275 = data
  i3274.mode = i3275[0]
  var i3277 = i3275[1]
  var i3276 = []
  for(var i = 0; i < i3277.length; i += 1) {
    i3276.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i3277[i + 0]) );
  }
  i3274.colorKeys = i3276
  var i3279 = i3275[2]
  var i3278 = []
  for(var i = 0; i < i3279.length; i += 1) {
    i3278.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i3279[i + 0]) );
  }
  i3274.alphaKeys = i3278
  return i3274
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i3280 = root || new pc.ParticleSystemColorBySpeed()
  var i3281 = data
  i3280.enabled = !!i3281[0]
  i3280.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i3281[1], i3280.color)
  i3280.range = new pc.Vec2( i3281[2], i3281[3] )
  return i3280
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i3284 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i3285 = data
  i3284.color = new pc.Color(i3285[0], i3285[1], i3285[2], i3285[3])
  i3284.time = i3285[4]
  return i3284
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i3288 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i3289 = data
  i3288.alpha = i3289[0]
  i3288.time = i3289[1]
  return i3288
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i3290 = root || new pc.ParticleSystemColorOverLifetime()
  var i3291 = data
  i3290.enabled = !!i3291[0]
  i3290.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i3291[1], i3290.color)
  return i3290
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i3292 = root || new pc.ParticleSystemEmitter()
  var i3293 = data
  i3292.enabled = !!i3293[0]
  i3292.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3293[1], i3292.rateOverTime)
  i3292.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3293[2], i3292.rateOverDistance)
  var i3295 = i3293[3]
  var i3294 = []
  for(var i = 0; i < i3295.length; i += 1) {
    i3294.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i3295[i + 0]) );
  }
  i3292.bursts = i3294
  return i3292
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i3298 = root || new pc.ParticleSystemBurst()
  var i3299 = data
  i3298.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3299[0], i3298.count)
  i3298.cycleCount = i3299[1]
  i3298.minCount = i3299[2]
  i3298.maxCount = i3299[3]
  i3298.repeatInterval = i3299[4]
  i3298.time = i3299[5]
  return i3298
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i3300 = root || new pc.ParticleSystemRotationBySpeed()
  var i3301 = data
  i3300.enabled = !!i3301[0]
  i3300.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3301[1], i3300.x)
  i3300.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3301[2], i3300.y)
  i3300.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3301[3], i3300.z)
  i3300.separateAxes = !!i3301[4]
  i3300.range = new pc.Vec2( i3301[5], i3301[6] )
  return i3300
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i3302 = root || new pc.ParticleSystemRotationOverLifetime()
  var i3303 = data
  i3302.enabled = !!i3303[0]
  i3302.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3303[1], i3302.x)
  i3302.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3303[2], i3302.y)
  i3302.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3303[3], i3302.z)
  i3302.separateAxes = !!i3303[4]
  return i3302
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i3304 = root || new pc.ParticleSystemShape()
  var i3305 = data
  i3304.enabled = !!i3305[0]
  i3304.shapeType = i3305[1]
  i3304.randomDirectionAmount = i3305[2]
  i3304.sphericalDirectionAmount = i3305[3]
  i3304.randomPositionAmount = i3305[4]
  i3304.alignToDirection = !!i3305[5]
  i3304.radius = i3305[6]
  i3304.radiusMode = i3305[7]
  i3304.radiusSpread = i3305[8]
  i3304.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3305[9], i3304.radiusSpeed)
  i3304.radiusThickness = i3305[10]
  i3304.angle = i3305[11]
  i3304.length = i3305[12]
  i3304.boxThickness = new pc.Vec3( i3305[13], i3305[14], i3305[15] )
  i3304.meshShapeType = i3305[16]
  request.r(i3305[17], i3305[18], 0, i3304, 'mesh')
  request.r(i3305[19], i3305[20], 0, i3304, 'meshRenderer')
  request.r(i3305[21], i3305[22], 0, i3304, 'skinnedMeshRenderer')
  i3304.useMeshMaterialIndex = !!i3305[23]
  i3304.meshMaterialIndex = i3305[24]
  i3304.useMeshColors = !!i3305[25]
  i3304.normalOffset = i3305[26]
  i3304.arc = i3305[27]
  i3304.arcMode = i3305[28]
  i3304.arcSpread = i3305[29]
  i3304.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3305[30], i3304.arcSpeed)
  i3304.donutRadius = i3305[31]
  i3304.position = new pc.Vec3( i3305[32], i3305[33], i3305[34] )
  i3304.rotation = new pc.Vec3( i3305[35], i3305[36], i3305[37] )
  i3304.scale = new pc.Vec3( i3305[38], i3305[39], i3305[40] )
  return i3304
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i3306 = root || new pc.ParticleSystemSizeBySpeed()
  var i3307 = data
  i3306.enabled = !!i3307[0]
  i3306.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3307[1], i3306.x)
  i3306.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3307[2], i3306.y)
  i3306.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3307[3], i3306.z)
  i3306.separateAxes = !!i3307[4]
  i3306.range = new pc.Vec2( i3307[5], i3307[6] )
  return i3306
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i3308 = root || new pc.ParticleSystemSizeOverLifetime()
  var i3309 = data
  i3308.enabled = !!i3309[0]
  i3308.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3309[1], i3308.x)
  i3308.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3309[2], i3308.y)
  i3308.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3309[3], i3308.z)
  i3308.separateAxes = !!i3309[4]
  return i3308
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i3310 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i3311 = data
  i3310.enabled = !!i3311[0]
  i3310.mode = i3311[1]
  i3310.animation = i3311[2]
  i3310.numTilesX = i3311[3]
  i3310.numTilesY = i3311[4]
  i3310.useRandomRow = !!i3311[5]
  i3310.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3311[6], i3310.frameOverTime)
  i3310.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3311[7], i3310.startFrame)
  i3310.cycleCount = i3311[8]
  i3310.rowIndex = i3311[9]
  i3310.flipU = i3311[10]
  i3310.flipV = i3311[11]
  i3310.spriteCount = i3311[12]
  var i3313 = i3311[13]
  var i3312 = []
  for(var i = 0; i < i3313.length; i += 2) {
  request.r(i3313[i + 0], i3313[i + 1], 2, i3312, '')
  }
  i3310.sprites = i3312
  return i3310
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i3316 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i3317 = data
  i3316.enabled = !!i3317[0]
  i3316.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3317[1], i3316.x)
  i3316.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3317[2], i3316.y)
  i3316.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3317[3], i3316.z)
  i3316.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3317[4], i3316.radial)
  i3316.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3317[5], i3316.speedModifier)
  i3316.space = i3317[6]
  i3316.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3317[7], i3316.orbitalX)
  i3316.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3317[8], i3316.orbitalY)
  i3316.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3317[9], i3316.orbitalZ)
  i3316.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3317[10], i3316.orbitalOffsetX)
  i3316.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3317[11], i3316.orbitalOffsetY)
  i3316.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3317[12], i3316.orbitalOffsetZ)
  return i3316
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i3318 = root || new pc.ParticleSystemNoise()
  var i3319 = data
  i3318.enabled = !!i3319[0]
  i3318.separateAxes = !!i3319[1]
  i3318.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3319[2], i3318.strengthX)
  i3318.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3319[3], i3318.strengthY)
  i3318.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3319[4], i3318.strengthZ)
  i3318.frequency = i3319[5]
  i3318.damping = !!i3319[6]
  i3318.octaveCount = i3319[7]
  i3318.octaveMultiplier = i3319[8]
  i3318.octaveScale = i3319[9]
  i3318.quality = i3319[10]
  i3318.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3319[11], i3318.scrollSpeed)
  i3318.scrollSpeedMultiplier = i3319[12]
  i3318.remapEnabled = !!i3319[13]
  i3318.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3319[14], i3318.remapX)
  i3318.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3319[15], i3318.remapY)
  i3318.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3319[16], i3318.remapZ)
  i3318.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3319[17], i3318.positionAmount)
  i3318.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3319[18], i3318.rotationAmount)
  i3318.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3319[19], i3318.sizeAmount)
  return i3318
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i3320 = root || new pc.ParticleSystemInheritVelocity()
  var i3321 = data
  i3320.enabled = !!i3321[0]
  i3320.mode = i3321[1]
  i3320.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3321[2], i3320.curve)
  return i3320
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i3322 = root || new pc.ParticleSystemForceOverLifetime()
  var i3323 = data
  i3322.enabled = !!i3323[0]
  i3322.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3323[1], i3322.x)
  i3322.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3323[2], i3322.y)
  i3322.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3323[3], i3322.z)
  i3322.space = i3323[4]
  i3322.randomized = !!i3323[5]
  return i3322
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i3324 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i3325 = data
  i3324.enabled = !!i3325[0]
  i3324.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3325[1], i3324.limit)
  i3324.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3325[2], i3324.limitX)
  i3324.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3325[3], i3324.limitY)
  i3324.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3325[4], i3324.limitZ)
  i3324.dampen = i3325[5]
  i3324.separateAxes = !!i3325[6]
  i3324.space = i3325[7]
  i3324.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3325[8], i3324.drag)
  i3324.multiplyDragByParticleSize = !!i3325[9]
  i3324.multiplyDragByParticleVelocity = !!i3325[10]
  return i3324
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i3326 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i3327 = data
  request.r(i3327[0], i3327[1], 0, i3326, 'mesh')
  i3326.meshCount = i3327[2]
  i3326.activeVertexStreamsCount = i3327[3]
  i3326.alignment = i3327[4]
  i3326.renderMode = i3327[5]
  i3326.sortMode = i3327[6]
  i3326.lengthScale = i3327[7]
  i3326.velocityScale = i3327[8]
  i3326.cameraVelocityScale = i3327[9]
  i3326.normalDirection = i3327[10]
  i3326.sortingFudge = i3327[11]
  i3326.minParticleSize = i3327[12]
  i3326.maxParticleSize = i3327[13]
  i3326.pivot = new pc.Vec3( i3327[14], i3327[15], i3327[16] )
  request.r(i3327[17], i3327[18], 0, i3326, 'trailMaterial')
  i3326.applyActiveColorSpace = !!i3327[19]
  i3326.enabled = !!i3327[20]
  request.r(i3327[21], i3327[22], 0, i3326, 'sharedMaterial')
  var i3329 = i3327[23]
  var i3328 = []
  for(var i = 0; i < i3329.length; i += 2) {
  request.r(i3329[i + 0], i3329[i + 1], 2, i3328, '')
  }
  i3326.sharedMaterials = i3328
  i3326.receiveShadows = !!i3327[24]
  i3326.shadowCastingMode = i3327[25]
  i3326.sortingLayerID = i3327[26]
  i3326.sortingOrder = i3327[27]
  i3326.lightmapIndex = i3327[28]
  i3326.lightmapSceneIndex = i3327[29]
  i3326.lightmapScaleOffset = new pc.Vec4( i3327[30], i3327[31], i3327[32], i3327[33] )
  i3326.lightProbeUsage = i3327[34]
  i3326.reflectionProbeUsage = i3327[35]
  return i3326
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i3330 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i3331 = data
  request.r(i3331[0], i3331[1], 0, i3330, 'm_FirstSelected')
  i3330.m_sendNavigationEvents = !!i3331[2]
  i3330.m_DragThreshold = i3331[3]
  return i3330
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i3332 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i3333 = data
  i3332.m_HorizontalAxis = i3333[0]
  i3332.m_VerticalAxis = i3333[1]
  i3332.m_SubmitButton = i3333[2]
  i3332.m_CancelButton = i3333[3]
  i3332.m_InputActionsPerSecond = i3333[4]
  i3332.m_RepeatDelay = i3333[5]
  i3332.m_ForceModuleActive = !!i3333[6]
  i3332.m_SendPointerHoverToParent = !!i3333[7]
  return i3332
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i3334 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i3335 = data
  i3334.ambientIntensity = i3335[0]
  i3334.reflectionIntensity = i3335[1]
  i3334.ambientMode = i3335[2]
  i3334.ambientLight = new pc.Color(i3335[3], i3335[4], i3335[5], i3335[6])
  i3334.ambientSkyColor = new pc.Color(i3335[7], i3335[8], i3335[9], i3335[10])
  i3334.ambientGroundColor = new pc.Color(i3335[11], i3335[12], i3335[13], i3335[14])
  i3334.ambientEquatorColor = new pc.Color(i3335[15], i3335[16], i3335[17], i3335[18])
  i3334.fogColor = new pc.Color(i3335[19], i3335[20], i3335[21], i3335[22])
  i3334.fogEndDistance = i3335[23]
  i3334.fogStartDistance = i3335[24]
  i3334.fogDensity = i3335[25]
  i3334.fog = !!i3335[26]
  request.r(i3335[27], i3335[28], 0, i3334, 'skybox')
  i3334.fogMode = i3335[29]
  var i3337 = i3335[30]
  var i3336 = []
  for(var i = 0; i < i3337.length; i += 1) {
    i3336.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i3337[i + 0]) );
  }
  i3334.lightmaps = i3336
  i3334.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i3335[31], i3334.lightProbes)
  i3334.lightmapsMode = i3335[32]
  i3334.mixedBakeMode = i3335[33]
  i3334.environmentLightingMode = i3335[34]
  i3334.ambientProbe = new pc.SphericalHarmonicsL2(i3335[35])
  i3334.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i3335[36])
  i3334.useReferenceAmbientProbe = !!i3335[37]
  request.r(i3335[38], i3335[39], 0, i3334, 'customReflection')
  request.r(i3335[40], i3335[41], 0, i3334, 'defaultReflection')
  i3334.defaultReflectionMode = i3335[42]
  i3334.defaultReflectionResolution = i3335[43]
  i3334.sunLightObjectId = i3335[44]
  i3334.pixelLightCount = i3335[45]
  i3334.defaultReflectionHDR = !!i3335[46]
  i3334.hasLightDataAsset = !!i3335[47]
  i3334.hasManualGenerate = !!i3335[48]
  return i3334
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i3340 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i3341 = data
  request.r(i3341[0], i3341[1], 0, i3340, 'lightmapColor')
  request.r(i3341[2], i3341[3], 0, i3340, 'lightmapDirection')
  request.r(i3341[4], i3341[5], 0, i3340, 'shadowMask')
  return i3340
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i3342 = root || new UnityEngine.LightProbes()
  var i3343 = data
  return i3342
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i3350 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i3351 = data
  var i3353 = i3351[0]
  var i3352 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i3353.length; i += 1) {
    i3352.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i3353[i + 0]));
  }
  i3350.ShaderCompilationErrors = i3352
  i3350.name = i3351[1]
  i3350.guid = i3351[2]
  var i3355 = i3351[3]
  var i3354 = []
  for(var i = 0; i < i3355.length; i += 1) {
    i3354.push( i3355[i + 0] );
  }
  i3350.shaderDefinedKeywords = i3354
  var i3357 = i3351[4]
  var i3356 = []
  for(var i = 0; i < i3357.length; i += 1) {
    i3356.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i3357[i + 0]) );
  }
  i3350.passes = i3356
  var i3359 = i3351[5]
  var i3358 = []
  for(var i = 0; i < i3359.length; i += 1) {
    i3358.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i3359[i + 0]) );
  }
  i3350.usePasses = i3358
  var i3361 = i3351[6]
  var i3360 = []
  for(var i = 0; i < i3361.length; i += 1) {
    i3360.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i3361[i + 0]) );
  }
  i3350.defaultParameterValues = i3360
  request.r(i3351[7], i3351[8], 0, i3350, 'unityFallbackShader')
  i3350.readDepth = !!i3351[9]
  i3350.hasDepthOnlyPass = !!i3351[10]
  i3350.isCreatedByShaderGraph = !!i3351[11]
  i3350.disableBatching = !!i3351[12]
  i3350.compiled = !!i3351[13]
  return i3350
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i3364 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i3365 = data
  i3364.shaderName = i3365[0]
  i3364.errorMessage = i3365[1]
  return i3364
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i3370 = root || new pc.UnityShaderPass()
  var i3371 = data
  i3370.id = i3371[0]
  i3370.subShaderIndex = i3371[1]
  i3370.name = i3371[2]
  i3370.passType = i3371[3]
  i3370.grabPassTextureName = i3371[4]
  i3370.usePass = !!i3371[5]
  i3370.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3371[6], i3370.zTest)
  i3370.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3371[7], i3370.zWrite)
  i3370.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3371[8], i3370.culling)
  i3370.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i3371[9], i3370.blending)
  i3370.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i3371[10], i3370.alphaBlending)
  i3370.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3371[11], i3370.colorWriteMask)
  i3370.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3371[12], i3370.offsetUnits)
  i3370.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3371[13], i3370.offsetFactor)
  i3370.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3371[14], i3370.stencilRef)
  i3370.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3371[15], i3370.stencilReadMask)
  i3370.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3371[16], i3370.stencilWriteMask)
  i3370.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3371[17], i3370.stencilOp)
  i3370.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3371[18], i3370.stencilOpFront)
  i3370.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3371[19], i3370.stencilOpBack)
  var i3373 = i3371[20]
  var i3372 = []
  for(var i = 0; i < i3373.length; i += 1) {
    i3372.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i3373[i + 0]) );
  }
  i3370.tags = i3372
  var i3375 = i3371[21]
  var i3374 = []
  for(var i = 0; i < i3375.length; i += 1) {
    i3374.push( i3375[i + 0] );
  }
  i3370.passDefinedKeywords = i3374
  var i3377 = i3371[22]
  var i3376 = []
  for(var i = 0; i < i3377.length; i += 1) {
    i3376.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i3377[i + 0]) );
  }
  i3370.passDefinedKeywordGroups = i3376
  var i3379 = i3371[23]
  var i3378 = []
  for(var i = 0; i < i3379.length; i += 1) {
    i3378.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i3379[i + 0]) );
  }
  i3370.variants = i3378
  var i3381 = i3371[24]
  var i3380 = []
  for(var i = 0; i < i3381.length; i += 1) {
    i3380.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i3381[i + 0]) );
  }
  i3370.excludedVariants = i3380
  i3370.hasDepthReader = !!i3371[25]
  return i3370
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i3382 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i3383 = data
  i3382.val = i3383[0]
  i3382.name = i3383[1]
  return i3382
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i3384 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i3385 = data
  i3384.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3385[0], i3384.src)
  i3384.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3385[1], i3384.dst)
  i3384.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3385[2], i3384.op)
  return i3384
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i3386 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i3387 = data
  i3386.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3387[0], i3386.pass)
  i3386.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3387[1], i3386.fail)
  i3386.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3387[2], i3386.zFail)
  i3386.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3387[3], i3386.comp)
  return i3386
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i3390 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i3391 = data
  i3390.name = i3391[0]
  i3390.value = i3391[1]
  return i3390
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i3394 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i3395 = data
  var i3397 = i3395[0]
  var i3396 = []
  for(var i = 0; i < i3397.length; i += 1) {
    i3396.push( i3397[i + 0] );
  }
  i3394.keywords = i3396
  i3394.hasDiscard = !!i3395[1]
  return i3394
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i3400 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i3401 = data
  i3400.passId = i3401[0]
  i3400.subShaderIndex = i3401[1]
  var i3403 = i3401[2]
  var i3402 = []
  for(var i = 0; i < i3403.length; i += 1) {
    i3402.push( i3403[i + 0] );
  }
  i3400.keywords = i3402
  i3400.vertexProgram = i3401[3]
  i3400.fragmentProgram = i3401[4]
  i3400.exportedForWebGl2 = !!i3401[5]
  i3400.readDepth = !!i3401[6]
  return i3400
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i3406 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i3407 = data
  request.r(i3407[0], i3407[1], 0, i3406, 'shader')
  i3406.pass = i3407[2]
  return i3406
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i3410 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i3411 = data
  i3410.name = i3411[0]
  i3410.type = i3411[1]
  i3410.value = new pc.Vec4( i3411[2], i3411[3], i3411[4], i3411[5] )
  i3410.textureValue = i3411[6]
  i3410.shaderPropertyFlag = i3411[7]
  return i3410
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i3412 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i3413 = data
  i3412.name = i3413[0]
  request.r(i3413[1], i3413[2], 0, i3412, 'texture')
  i3412.aabb = i3413[3]
  i3412.vertices = i3413[4]
  i3412.triangles = i3413[5]
  i3412.textureRect = UnityEngine.Rect.MinMaxRect(i3413[6], i3413[7], i3413[8], i3413[9])
  i3412.packedRect = UnityEngine.Rect.MinMaxRect(i3413[10], i3413[11], i3413[12], i3413[13])
  i3412.border = new pc.Vec4( i3413[14], i3413[15], i3413[16], i3413[17] )
  i3412.transparency = i3413[18]
  i3412.bounds = i3413[19]
  i3412.pixelsPerUnit = i3413[20]
  i3412.textureWidth = i3413[21]
  i3412.textureHeight = i3413[22]
  i3412.nativeSize = new pc.Vec2( i3413[23], i3413[24] )
  i3412.pivot = new pc.Vec2( i3413[25], i3413[26] )
  i3412.textureRectOffset = new pc.Vec2( i3413[27], i3413[28] )
  return i3412
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i3414 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i3415 = data
  i3414.name = i3415[0]
  return i3414
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i3416 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i3417 = data
  i3416.name = i3417[0]
  i3416.wrapMode = i3417[1]
  i3416.isLooping = !!i3417[2]
  i3416.length = i3417[3]
  var i3419 = i3417[4]
  var i3418 = []
  for(var i = 0; i < i3419.length; i += 1) {
    i3418.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i3419[i + 0]) );
  }
  i3416.curves = i3418
  var i3421 = i3417[5]
  var i3420 = []
  for(var i = 0; i < i3421.length; i += 1) {
    i3420.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i3421[i + 0]) );
  }
  i3416.events = i3420
  i3416.halfPrecision = !!i3417[6]
  i3416._frameRate = i3417[7]
  i3416.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i3417[8], i3416.localBounds)
  i3416.hasMuscleCurves = !!i3417[9]
  var i3423 = i3417[10]
  var i3422 = []
  for(var i = 0; i < i3423.length; i += 1) {
    i3422.push( i3423[i + 0] );
  }
  i3416.clipMuscleConstant = i3422
  i3416.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i3417[11], i3416.clipBindingConstant)
  return i3416
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i3426 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i3427 = data
  i3426.path = i3427[0]
  i3426.hash = i3427[1]
  i3426.componentType = i3427[2]
  i3426.property = i3427[3]
  i3426.keys = i3427[4]
  var i3429 = i3427[5]
  var i3428 = []
  for(var i = 0; i < i3429.length; i += 1) {
    i3428.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i3429[i + 0]) );
  }
  i3426.objectReferenceKeys = i3428
  return i3426
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i3432 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i3433 = data
  i3432.time = i3433[0]
  request.r(i3433[1], i3433[2], 0, i3432, 'value')
  return i3432
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i3436 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i3437 = data
  i3436.functionName = i3437[0]
  i3436.floatParameter = i3437[1]
  i3436.intParameter = i3437[2]
  i3436.stringParameter = i3437[3]
  request.r(i3437[4], i3437[5], 0, i3436, 'objectReferenceParameter')
  i3436.time = i3437[6]
  return i3436
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i3438 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i3439 = data
  i3438.center = new pc.Vec3( i3439[0], i3439[1], i3439[2] )
  i3438.extends = new pc.Vec3( i3439[3], i3439[4], i3439[5] )
  return i3438
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i3442 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i3443 = data
  var i3445 = i3443[0]
  var i3444 = []
  for(var i = 0; i < i3445.length; i += 1) {
    i3444.push( i3445[i + 0] );
  }
  i3442.genericBindings = i3444
  var i3447 = i3443[1]
  var i3446 = []
  for(var i = 0; i < i3447.length; i += 1) {
    i3446.push( i3447[i + 0] );
  }
  i3442.pptrCurveMapping = i3446
  return i3442
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i3448 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i3449 = data
  i3448.name = i3449[0]
  i3448.ascent = i3449[1]
  i3448.originalLineHeight = i3449[2]
  i3448.fontSize = i3449[3]
  var i3451 = i3449[4]
  var i3450 = []
  for(var i = 0; i < i3451.length; i += 1) {
    i3450.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i3451[i + 0]) );
  }
  i3448.characterInfo = i3450
  request.r(i3449[5], i3449[6], 0, i3448, 'texture')
  i3448.originalFontSize = i3449[7]
  return i3448
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i3454 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i3455 = data
  i3454.index = i3455[0]
  i3454.advance = i3455[1]
  i3454.bearing = i3455[2]
  i3454.glyphWidth = i3455[3]
  i3454.glyphHeight = i3455[4]
  i3454.minX = i3455[5]
  i3454.maxX = i3455[6]
  i3454.minY = i3455[7]
  i3454.maxY = i3455[8]
  i3454.uvBottomLeftX = i3455[9]
  i3454.uvBottomLeftY = i3455[10]
  i3454.uvBottomRightX = i3455[11]
  i3454.uvBottomRightY = i3455[12]
  i3454.uvTopLeftX = i3455[13]
  i3454.uvTopLeftY = i3455[14]
  i3454.uvTopRightX = i3455[15]
  i3454.uvTopRightY = i3455[16]
  return i3454
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i3456 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i3457 = data
  i3456.name = i3457[0]
  var i3459 = i3457[1]
  var i3458 = []
  for(var i = 0; i < i3459.length; i += 1) {
    i3458.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i3459[i + 0]) );
  }
  i3456.layers = i3458
  var i3461 = i3457[2]
  var i3460 = []
  for(var i = 0; i < i3461.length; i += 1) {
    i3460.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i3461[i + 0]) );
  }
  i3456.parameters = i3460
  i3456.animationClips = i3457[3]
  i3456.avatarUnsupported = i3457[4]
  return i3456
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i3464 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i3465 = data
  i3464.name = i3465[0]
  i3464.defaultWeight = i3465[1]
  i3464.blendingMode = i3465[2]
  i3464.avatarMask = i3465[3]
  i3464.syncedLayerIndex = i3465[4]
  i3464.syncedLayerAffectsTiming = !!i3465[5]
  i3464.syncedLayers = i3465[6]
  i3464.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i3465[7], i3464.stateMachine)
  return i3464
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i3466 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i3467 = data
  i3466.id = i3467[0]
  i3466.name = i3467[1]
  i3466.path = i3467[2]
  var i3469 = i3467[3]
  var i3468 = []
  for(var i = 0; i < i3469.length; i += 1) {
    i3468.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i3469[i + 0]) );
  }
  i3466.states = i3468
  var i3471 = i3467[4]
  var i3470 = []
  for(var i = 0; i < i3471.length; i += 1) {
    i3470.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i3471[i + 0]) );
  }
  i3466.machines = i3470
  var i3473 = i3467[5]
  var i3472 = []
  for(var i = 0; i < i3473.length; i += 1) {
    i3472.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i3473[i + 0]) );
  }
  i3466.entryStateTransitions = i3472
  var i3475 = i3467[6]
  var i3474 = []
  for(var i = 0; i < i3475.length; i += 1) {
    i3474.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i3475[i + 0]) );
  }
  i3466.exitStateTransitions = i3474
  var i3477 = i3467[7]
  var i3476 = []
  for(var i = 0; i < i3477.length; i += 1) {
    i3476.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i3477[i + 0]) );
  }
  i3466.anyStateTransitions = i3476
  i3466.defaultStateId = i3467[8]
  return i3466
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i3480 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i3481 = data
  i3480.id = i3481[0]
  i3480.name = i3481[1]
  i3480.cycleOffset = i3481[2]
  i3480.cycleOffsetParameter = i3481[3]
  i3480.cycleOffsetParameterActive = !!i3481[4]
  i3480.mirror = !!i3481[5]
  i3480.mirrorParameter = i3481[6]
  i3480.mirrorParameterActive = !!i3481[7]
  i3480.motionId = i3481[8]
  i3480.nameHash = i3481[9]
  i3480.fullPathHash = i3481[10]
  i3480.speed = i3481[11]
  i3480.speedParameter = i3481[12]
  i3480.speedParameterActive = !!i3481[13]
  i3480.tag = i3481[14]
  i3480.tagHash = i3481[15]
  i3480.writeDefaultValues = !!i3481[16]
  var i3483 = i3481[17]
  var i3482 = []
  for(var i = 0; i < i3483.length; i += 2) {
  request.r(i3483[i + 0], i3483[i + 1], 2, i3482, '')
  }
  i3480.behaviours = i3482
  var i3485 = i3481[18]
  var i3484 = []
  for(var i = 0; i < i3485.length; i += 1) {
    i3484.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i3485[i + 0]) );
  }
  i3480.transitions = i3484
  return i3480
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i3490 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i3491 = data
  i3490.fullPath = i3491[0]
  i3490.canTransitionToSelf = !!i3491[1]
  i3490.duration = i3491[2]
  i3490.exitTime = i3491[3]
  i3490.hasExitTime = !!i3491[4]
  i3490.hasFixedDuration = !!i3491[5]
  i3490.interruptionSource = i3491[6]
  i3490.offset = i3491[7]
  i3490.orderedInterruption = !!i3491[8]
  i3490.destinationStateId = i3491[9]
  i3490.isExit = !!i3491[10]
  i3490.mute = !!i3491[11]
  i3490.solo = !!i3491[12]
  var i3493 = i3491[13]
  var i3492 = []
  for(var i = 0; i < i3493.length; i += 1) {
    i3492.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i3493[i + 0]) );
  }
  i3490.conditions = i3492
  return i3490
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i3498 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i3499 = data
  i3498.destinationStateId = i3499[0]
  i3498.isExit = !!i3499[1]
  i3498.mute = !!i3499[2]
  i3498.solo = !!i3499[3]
  var i3501 = i3499[4]
  var i3500 = []
  for(var i = 0; i < i3501.length; i += 1) {
    i3500.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i3501[i + 0]) );
  }
  i3498.conditions = i3500
  return i3498
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i3504 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i3505 = data
  i3504.defaultBool = !!i3505[0]
  i3504.defaultFloat = i3505[1]
  i3504.defaultInt = i3505[2]
  i3504.name = i3505[3]
  i3504.nameHash = i3505[4]
  i3504.type = i3505[5]
  return i3504
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i3506 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i3507 = data
  i3506.name = i3507[0]
  i3506.bytes64 = i3507[1]
  i3506.data = i3507[2]
  return i3506
}

Deserializers["CharacterItemData"] = function (request, data, root) {
  var i3508 = root || request.c( 'CharacterItemData' )
  var i3509 = data
  i3508.characterName = i3509[0]
  request.r(i3509[1], i3509[2], 0, i3508, 'normalSprite')
  i3508.characterSound = i3509[3]
  i3508.correctItemID = i3509[4]
  var i3511 = i3509[5]
  var i3510 = new (System.Collections.Generic.List$1(Bridge.ns('ItemSpriteMapping')))
  for(var i = 0; i < i3511.length; i += 1) {
    i3510.add(request.d('ItemSpriteMapping', i3511[i + 0]));
  }
  i3508.itemInteractions = i3510
  return i3508
}

Deserializers["ItemSpriteMapping"] = function (request, data, root) {
  var i3514 = root || request.c( 'ItemSpriteMapping' )
  var i3515 = data
  i3514.itemID = i3515[0]
  request.r(i3515[1], i3515[2], 0, i3514, 'spriteWithItem')
  i3514.fxType = i3515[3]
  return i3514
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i3516 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i3517 = data
  i3516.normalStyle = i3517[0]
  i3516.normalSpacingOffset = i3517[1]
  i3516.boldStyle = i3517[2]
  i3516.boldSpacing = i3517[3]
  i3516.italicStyle = i3517[4]
  i3516.tabSize = i3517[5]
  request.r(i3517[6], i3517[7], 0, i3516, 'atlas')
  i3516.m_SourceFontFileGUID = i3517[8]
  i3516.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i3517[9], i3516.m_CreationSettings)
  request.r(i3517[10], i3517[11], 0, i3516, 'm_SourceFontFile')
  i3516.m_SourceFontFilePath = i3517[12]
  i3516.m_AtlasPopulationMode = i3517[13]
  i3516.InternalDynamicOS = !!i3517[14]
  var i3519 = i3517[15]
  var i3518 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i3519.length; i += 1) {
    i3518.add(request.d('UnityEngine.TextCore.Glyph', i3519[i + 0]));
  }
  i3516.m_GlyphTable = i3518
  var i3521 = i3517[16]
  var i3520 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i3521.length; i += 1) {
    i3520.add(request.d('TMPro.TMP_Character', i3521[i + 0]));
  }
  i3516.m_CharacterTable = i3520
  var i3523 = i3517[17]
  var i3522 = []
  for(var i = 0; i < i3523.length; i += 2) {
  request.r(i3523[i + 0], i3523[i + 1], 2, i3522, '')
  }
  i3516.m_AtlasTextures = i3522
  i3516.m_AtlasTextureIndex = i3517[18]
  i3516.m_IsMultiAtlasTexturesEnabled = !!i3517[19]
  i3516.m_GetFontFeatures = !!i3517[20]
  i3516.m_ClearDynamicDataOnBuild = !!i3517[21]
  i3516.m_AtlasWidth = i3517[22]
  i3516.m_AtlasHeight = i3517[23]
  i3516.m_AtlasPadding = i3517[24]
  i3516.m_AtlasRenderMode = i3517[25]
  var i3525 = i3517[26]
  var i3524 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i3525.length; i += 1) {
    i3524.add(request.d('UnityEngine.TextCore.GlyphRect', i3525[i + 0]));
  }
  i3516.m_UsedGlyphRects = i3524
  var i3527 = i3517[27]
  var i3526 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i3527.length; i += 1) {
    i3526.add(request.d('UnityEngine.TextCore.GlyphRect', i3527[i + 0]));
  }
  i3516.m_FreeGlyphRects = i3526
  i3516.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i3517[28], i3516.m_FontFeatureTable)
  i3516.m_ShouldReimportFontFeatures = !!i3517[29]
  var i3529 = i3517[30]
  var i3528 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i3529.length; i += 2) {
  request.r(i3529[i + 0], i3529[i + 1], 1, i3528, '')
  }
  i3516.m_FallbackFontAssetTable = i3528
  var i3531 = i3517[31]
  var i3530 = []
  for(var i = 0; i < i3531.length; i += 1) {
    i3530.push( request.d('TMPro.TMP_FontWeightPair', i3531[i + 0]) );
  }
  i3516.m_FontWeightTable = i3530
  var i3533 = i3517[32]
  var i3532 = []
  for(var i = 0; i < i3533.length; i += 1) {
    i3532.push( request.d('TMPro.TMP_FontWeightPair', i3533[i + 0]) );
  }
  i3516.fontWeights = i3532
  i3516.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i3517[33], i3516.m_fontInfo)
  var i3535 = i3517[34]
  var i3534 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i3535.length; i += 1) {
    i3534.add(request.d('TMPro.TMP_Glyph', i3535[i + 0]));
  }
  i3516.m_glyphInfoList = i3534
  i3516.m_KerningTable = request.d('TMPro.KerningTable', i3517[35], i3516.m_KerningTable)
  var i3537 = i3517[36]
  var i3536 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i3537.length; i += 2) {
  request.r(i3537[i + 0], i3537[i + 1], 1, i3536, '')
  }
  i3516.fallbackFontAssets = i3536
  i3516.m_Version = i3517[37]
  i3516.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i3517[38], i3516.m_FaceInfo)
  request.r(i3517[39], i3517[40], 0, i3516, 'm_Material')
  return i3516
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i3538 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i3539 = data
  i3538.sourceFontFileName = i3539[0]
  i3538.sourceFontFileGUID = i3539[1]
  i3538.faceIndex = i3539[2]
  i3538.pointSizeSamplingMode = i3539[3]
  i3538.pointSize = i3539[4]
  i3538.padding = i3539[5]
  i3538.paddingMode = i3539[6]
  i3538.packingMode = i3539[7]
  i3538.atlasWidth = i3539[8]
  i3538.atlasHeight = i3539[9]
  i3538.characterSetSelectionMode = i3539[10]
  i3538.characterSequence = i3539[11]
  i3538.referencedFontAssetGUID = i3539[12]
  i3538.referencedTextAssetGUID = i3539[13]
  i3538.fontStyle = i3539[14]
  i3538.fontStyleModifier = i3539[15]
  i3538.renderMode = i3539[16]
  i3538.includeFontFeatures = !!i3539[17]
  return i3538
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i3542 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i3543 = data
  i3542.m_Index = i3543[0]
  i3542.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i3543[1], i3542.m_Metrics)
  i3542.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i3543[2], i3542.m_GlyphRect)
  i3542.m_Scale = i3543[3]
  i3542.m_AtlasIndex = i3543[4]
  i3542.m_ClassDefinitionType = i3543[5]
  return i3542
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i3546 = root || request.c( 'TMPro.TMP_Character' )
  var i3547 = data
  i3546.m_ElementType = i3547[0]
  i3546.m_Unicode = i3547[1]
  i3546.m_GlyphIndex = i3547[2]
  i3546.m_Scale = i3547[3]
  return i3546
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i3552 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i3553 = data
  i3552.m_X = i3553[0]
  i3552.m_Y = i3553[1]
  i3552.m_Width = i3553[2]
  i3552.m_Height = i3553[3]
  return i3552
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i3554 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i3555 = data
  var i3557 = i3555[0]
  var i3556 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i3557.length; i += 1) {
    i3556.add(request.d('TMPro.MultipleSubstitutionRecord', i3557[i + 0]));
  }
  i3554.m_MultipleSubstitutionRecords = i3556
  var i3559 = i3555[1]
  var i3558 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i3559.length; i += 1) {
    i3558.add(request.d('TMPro.LigatureSubstitutionRecord', i3559[i + 0]));
  }
  i3554.m_LigatureSubstitutionRecords = i3558
  var i3561 = i3555[2]
  var i3560 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i3561.length; i += 1) {
    i3560.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i3561[i + 0]));
  }
  i3554.m_GlyphPairAdjustmentRecords = i3560
  var i3563 = i3555[3]
  var i3562 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i3563.length; i += 1) {
    i3562.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i3563[i + 0]));
  }
  i3554.m_MarkToBaseAdjustmentRecords = i3562
  var i3565 = i3555[4]
  var i3564 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i3565.length; i += 1) {
    i3564.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i3565[i + 0]));
  }
  i3554.m_MarkToMarkAdjustmentRecords = i3564
  return i3554
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i3568 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i3569 = data
  i3568.m_TargetGlyphID = i3569[0]
  i3568.m_SubstituteGlyphIDs = i3569[1]
  return i3568
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i3572 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i3573 = data
  i3572.m_ComponentGlyphIDs = i3573[0]
  i3572.m_LigatureGlyphID = i3573[1]
  return i3572
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i3576 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i3577 = data
  i3576.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i3577[0], i3576.m_FirstAdjustmentRecord)
  i3576.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i3577[1], i3576.m_SecondAdjustmentRecord)
  i3576.m_FeatureLookupFlags = i3577[2]
  return i3576
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i3578 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i3579 = data
  i3578.m_GlyphIndex = i3579[0]
  i3578.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i3579[1], i3578.m_GlyphValueRecord)
  return i3578
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i3580 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i3581 = data
  i3580.m_XPlacement = i3581[0]
  i3580.m_YPlacement = i3581[1]
  i3580.m_XAdvance = i3581[2]
  i3580.m_YAdvance = i3581[3]
  return i3580
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i3584 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i3585 = data
  i3584.m_BaseGlyphID = i3585[0]
  i3584.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i3585[1], i3584.m_BaseGlyphAnchorPoint)
  i3584.m_MarkGlyphID = i3585[2]
  i3584.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i3585[3], i3584.m_MarkPositionAdjustment)
  return i3584
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i3588 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i3589 = data
  i3588.m_BaseMarkGlyphID = i3589[0]
  i3588.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i3589[1], i3588.m_BaseMarkGlyphAnchorPoint)
  i3588.m_CombiningMarkGlyphID = i3589[2]
  i3588.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i3589[3], i3588.m_CombiningMarkPositionAdjustment)
  return i3588
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i3594 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i3595 = data
  request.r(i3595[0], i3595[1], 0, i3594, 'regularTypeface')
  request.r(i3595[2], i3595[3], 0, i3594, 'italicTypeface')
  return i3594
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i3596 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i3597 = data
  i3596.Name = i3597[0]
  i3596.PointSize = i3597[1]
  i3596.Scale = i3597[2]
  i3596.CharacterCount = i3597[3]
  i3596.LineHeight = i3597[4]
  i3596.Baseline = i3597[5]
  i3596.Ascender = i3597[6]
  i3596.CapHeight = i3597[7]
  i3596.Descender = i3597[8]
  i3596.CenterLine = i3597[9]
  i3596.SuperscriptOffset = i3597[10]
  i3596.SubscriptOffset = i3597[11]
  i3596.SubSize = i3597[12]
  i3596.Underline = i3597[13]
  i3596.UnderlineThickness = i3597[14]
  i3596.strikethrough = i3597[15]
  i3596.strikethroughThickness = i3597[16]
  i3596.TabWidth = i3597[17]
  i3596.Padding = i3597[18]
  i3596.AtlasWidth = i3597[19]
  i3596.AtlasHeight = i3597[20]
  return i3596
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i3600 = root || request.c( 'TMPro.TMP_Glyph' )
  var i3601 = data
  i3600.id = i3601[0]
  i3600.x = i3601[1]
  i3600.y = i3601[2]
  i3600.width = i3601[3]
  i3600.height = i3601[4]
  i3600.xOffset = i3601[5]
  i3600.yOffset = i3601[6]
  i3600.xAdvance = i3601[7]
  i3600.scale = i3601[8]
  return i3600
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i3602 = root || request.c( 'TMPro.KerningTable' )
  var i3603 = data
  var i3605 = i3603[0]
  var i3604 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i3605.length; i += 1) {
    i3604.add(request.d('TMPro.KerningPair', i3605[i + 0]));
  }
  i3602.kerningPairs = i3604
  return i3602
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i3608 = root || request.c( 'TMPro.KerningPair' )
  var i3609 = data
  i3608.xOffset = i3609[0]
  i3608.m_FirstGlyph = i3609[1]
  i3608.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i3609[2], i3608.m_FirstGlyphAdjustments)
  i3608.m_SecondGlyph = i3609[3]
  i3608.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i3609[4], i3608.m_SecondGlyphAdjustments)
  i3608.m_IgnoreSpacingAdjustments = !!i3609[5]
  return i3608
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i3610 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i3611 = data
  i3610.m_FaceIndex = i3611[0]
  i3610.m_FamilyName = i3611[1]
  i3610.m_StyleName = i3611[2]
  i3610.m_PointSize = i3611[3]
  i3610.m_Scale = i3611[4]
  i3610.m_UnitsPerEM = i3611[5]
  i3610.m_LineHeight = i3611[6]
  i3610.m_AscentLine = i3611[7]
  i3610.m_CapLine = i3611[8]
  i3610.m_MeanLine = i3611[9]
  i3610.m_Baseline = i3611[10]
  i3610.m_DescentLine = i3611[11]
  i3610.m_SuperscriptOffset = i3611[12]
  i3610.m_SuperscriptSize = i3611[13]
  i3610.m_SubscriptOffset = i3611[14]
  i3610.m_SubscriptSize = i3611[15]
  i3610.m_UnderlineOffset = i3611[16]
  i3610.m_UnderlineThickness = i3611[17]
  i3610.m_StrikethroughOffset = i3611[18]
  i3610.m_StrikethroughThickness = i3611[19]
  i3610.m_TabWidth = i3611[20]
  return i3610
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i3612 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i3613 = data
  i3612.useSafeMode = !!i3613[0]
  i3612.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i3613[1], i3612.safeModeOptions)
  i3612.timeScale = i3613[2]
  i3612.unscaledTimeScale = i3613[3]
  i3612.useSmoothDeltaTime = !!i3613[4]
  i3612.maxSmoothUnscaledTime = i3613[5]
  i3612.rewindCallbackMode = i3613[6]
  i3612.showUnityEditorReport = !!i3613[7]
  i3612.logBehaviour = i3613[8]
  i3612.drawGizmos = !!i3613[9]
  i3612.defaultRecyclable = !!i3613[10]
  i3612.defaultAutoPlay = i3613[11]
  i3612.defaultUpdateType = i3613[12]
  i3612.defaultTimeScaleIndependent = !!i3613[13]
  i3612.defaultEaseType = i3613[14]
  i3612.defaultEaseOvershootOrAmplitude = i3613[15]
  i3612.defaultEasePeriod = i3613[16]
  i3612.defaultAutoKill = !!i3613[17]
  i3612.defaultLoopType = i3613[18]
  i3612.debugMode = !!i3613[19]
  i3612.debugStoreTargetId = !!i3613[20]
  i3612.showPreviewPanel = !!i3613[21]
  i3612.storeSettingsLocation = i3613[22]
  i3612.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i3613[23], i3612.modules)
  i3612.createASMDEF = !!i3613[24]
  i3612.showPlayingTweens = !!i3613[25]
  i3612.showPausedTweens = !!i3613[26]
  return i3612
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i3614 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i3615 = data
  i3614.logBehaviour = i3615[0]
  i3614.nestedTweenFailureBehaviour = i3615[1]
  return i3614
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i3616 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i3617 = data
  i3616.showPanel = !!i3617[0]
  i3616.audioEnabled = !!i3617[1]
  i3616.physicsEnabled = !!i3617[2]
  i3616.physics2DEnabled = !!i3617[3]
  i3616.spriteEnabled = !!i3617[4]
  i3616.uiEnabled = !!i3617[5]
  i3616.uiToolkitEnabled = !!i3617[6]
  i3616.textMeshProEnabled = !!i3617[7]
  i3616.tk2DEnabled = !!i3617[8]
  i3616.deAudioEnabled = !!i3617[9]
  i3616.deUnityExtendedEnabled = !!i3617[10]
  i3616.epoOutlineEnabled = !!i3617[11]
  return i3616
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i3618 = root || request.c( 'TMPro.TMP_Settings' )
  var i3619 = data
  i3618.assetVersion = i3619[0]
  i3618.m_TextWrappingMode = i3619[1]
  i3618.m_enableKerning = !!i3619[2]
  var i3621 = i3619[3]
  var i3620 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i3621.length; i += 1) {
    i3620.add(i3621[i + 0]);
  }
  i3618.m_ActiveFontFeatures = i3620
  i3618.m_enableExtraPadding = !!i3619[4]
  i3618.m_enableTintAllSprites = !!i3619[5]
  i3618.m_enableParseEscapeCharacters = !!i3619[6]
  i3618.m_EnableRaycastTarget = !!i3619[7]
  i3618.m_GetFontFeaturesAtRuntime = !!i3619[8]
  i3618.m_missingGlyphCharacter = i3619[9]
  i3618.m_ClearDynamicDataOnBuild = !!i3619[10]
  i3618.m_warningsDisabled = !!i3619[11]
  request.r(i3619[12], i3619[13], 0, i3618, 'm_defaultFontAsset')
  i3618.m_defaultFontAssetPath = i3619[14]
  i3618.m_defaultFontSize = i3619[15]
  i3618.m_defaultAutoSizeMinRatio = i3619[16]
  i3618.m_defaultAutoSizeMaxRatio = i3619[17]
  i3618.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i3619[18], i3619[19] )
  i3618.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i3619[20], i3619[21] )
  i3618.m_autoSizeTextContainer = !!i3619[22]
  i3618.m_IsTextObjectScaleStatic = !!i3619[23]
  var i3623 = i3619[24]
  var i3622 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i3623.length; i += 2) {
  request.r(i3623[i + 0], i3623[i + 1], 1, i3622, '')
  }
  i3618.m_fallbackFontAssets = i3622
  i3618.m_matchMaterialPreset = !!i3619[25]
  i3618.m_HideSubTextObjects = !!i3619[26]
  request.r(i3619[27], i3619[28], 0, i3618, 'm_defaultSpriteAsset')
  i3618.m_defaultSpriteAssetPath = i3619[29]
  i3618.m_enableEmojiSupport = !!i3619[30]
  i3618.m_MissingCharacterSpriteUnicode = i3619[31]
  var i3625 = i3619[32]
  var i3624 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i3625.length; i += 2) {
  request.r(i3625[i + 0], i3625[i + 1], 1, i3624, '')
  }
  i3618.m_EmojiFallbackTextAssets = i3624
  i3618.m_defaultColorGradientPresetsPath = i3619[33]
  request.r(i3619[34], i3619[35], 0, i3618, 'm_defaultStyleSheet')
  i3618.m_StyleSheetsResourcePath = i3619[36]
  request.r(i3619[37], i3619[38], 0, i3618, 'm_leadingCharacters')
  request.r(i3619[39], i3619[40], 0, i3618, 'm_followingCharacters')
  i3618.m_UseModernHangulLineBreakingRules = !!i3619[41]
  return i3618
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i3628 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i3629 = data
  request.r(i3629[0], i3629[1], 0, i3628, 'spriteSheet')
  var i3631 = i3629[2]
  var i3630 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i3631.length; i += 1) {
    i3630.add(request.d('TMPro.TMP_Sprite', i3631[i + 0]));
  }
  i3628.spriteInfoList = i3630
  var i3633 = i3629[3]
  var i3632 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i3633.length; i += 2) {
  request.r(i3633[i + 0], i3633[i + 1], 1, i3632, '')
  }
  i3628.fallbackSpriteAssets = i3632
  var i3635 = i3629[4]
  var i3634 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i3635.length; i += 1) {
    i3634.add(request.d('TMPro.TMP_SpriteCharacter', i3635[i + 0]));
  }
  i3628.m_SpriteCharacterTable = i3634
  var i3637 = i3629[5]
  var i3636 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i3637.length; i += 1) {
    i3636.add(request.d('TMPro.TMP_SpriteGlyph', i3637[i + 0]));
  }
  i3628.m_GlyphTable = i3636
  i3628.m_Version = i3629[6]
  i3628.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i3629[7], i3628.m_FaceInfo)
  request.r(i3629[8], i3629[9], 0, i3628, 'm_Material')
  return i3628
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i3640 = root || request.c( 'TMPro.TMP_Sprite' )
  var i3641 = data
  i3640.name = i3641[0]
  i3640.hashCode = i3641[1]
  i3640.unicode = i3641[2]
  i3640.pivot = new pc.Vec2( i3641[3], i3641[4] )
  request.r(i3641[5], i3641[6], 0, i3640, 'sprite')
  i3640.id = i3641[7]
  i3640.x = i3641[8]
  i3640.y = i3641[9]
  i3640.width = i3641[10]
  i3640.height = i3641[11]
  i3640.xOffset = i3641[12]
  i3640.yOffset = i3641[13]
  i3640.xAdvance = i3641[14]
  i3640.scale = i3641[15]
  return i3640
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i3646 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i3647 = data
  i3646.m_Name = i3647[0]
  i3646.m_ElementType = i3647[1]
  i3646.m_Unicode = i3647[2]
  i3646.m_GlyphIndex = i3647[3]
  i3646.m_Scale = i3647[4]
  return i3646
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i3650 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i3651 = data
  request.r(i3651[0], i3651[1], 0, i3650, 'sprite')
  i3650.m_Index = i3651[2]
  i3650.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i3651[3], i3650.m_Metrics)
  i3650.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i3651[4], i3650.m_GlyphRect)
  i3650.m_Scale = i3651[5]
  i3650.m_AtlasIndex = i3651[6]
  i3650.m_ClassDefinitionType = i3651[7]
  return i3650
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i3652 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i3653 = data
  i3652.m_Width = i3653[0]
  i3652.m_Height = i3653[1]
  i3652.m_HorizontalBearingX = i3653[2]
  i3652.m_HorizontalBearingY = i3653[3]
  i3652.m_HorizontalAdvance = i3653[4]
  return i3652
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i3654 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i3655 = data
  var i3657 = i3655[0]
  var i3656 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i3657.length; i += 1) {
    i3656.add(request.d('TMPro.TMP_Style', i3657[i + 0]));
  }
  i3654.m_StyleList = i3656
  return i3654
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i3660 = root || request.c( 'TMPro.TMP_Style' )
  var i3661 = data
  i3660.m_Name = i3661[0]
  i3660.m_HashCode = i3661[1]
  i3660.m_OpeningDefinition = i3661[2]
  i3660.m_ClosingDefinition = i3661[3]
  i3660.m_OpeningTagArray = i3661[4]
  i3660.m_ClosingTagArray = i3661[5]
  return i3660
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i3662 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i3663 = data
  var i3665 = i3663[0]
  var i3664 = []
  for(var i = 0; i < i3665.length; i += 1) {
    i3664.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i3665[i + 0]) );
  }
  i3662.files = i3664
  i3662.componentToPrefabIds = i3663[1]
  return i3662
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i3668 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i3669 = data
  i3668.path = i3669[0]
  request.r(i3669[1], i3669[2], 0, i3668, 'unityObject')
  return i3668
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i3670 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i3671 = data
  var i3673 = i3671[0]
  var i3672 = []
  for(var i = 0; i < i3673.length; i += 1) {
    i3672.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i3673[i + 0]) );
  }
  i3670.scriptsExecutionOrder = i3672
  var i3675 = i3671[1]
  var i3674 = []
  for(var i = 0; i < i3675.length; i += 1) {
    i3674.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i3675[i + 0]) );
  }
  i3670.sortingLayers = i3674
  var i3677 = i3671[2]
  var i3676 = []
  for(var i = 0; i < i3677.length; i += 1) {
    i3676.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i3677[i + 0]) );
  }
  i3670.cullingLayers = i3676
  i3670.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i3671[3], i3670.timeSettings)
  i3670.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i3671[4], i3670.physicsSettings)
  i3670.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i3671[5], i3670.physics2DSettings)
  i3670.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i3671[6], i3670.qualitySettings)
  i3670.enableRealtimeShadows = !!i3671[7]
  i3670.enableAutoInstancing = !!i3671[8]
  i3670.enableStaticBatching = !!i3671[9]
  i3670.enableDynamicBatching = !!i3671[10]
  i3670.lightmapEncodingQuality = i3671[11]
  i3670.desiredColorSpace = i3671[12]
  var i3679 = i3671[13]
  var i3678 = []
  for(var i = 0; i < i3679.length; i += 1) {
    i3678.push( i3679[i + 0] );
  }
  i3670.allTags = i3678
  return i3670
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i3682 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i3683 = data
  i3682.name = i3683[0]
  i3682.value = i3683[1]
  return i3682
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i3686 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i3687 = data
  i3686.id = i3687[0]
  i3686.name = i3687[1]
  i3686.value = i3687[2]
  return i3686
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i3690 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i3691 = data
  i3690.id = i3691[0]
  i3690.name = i3691[1]
  return i3690
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i3692 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i3693 = data
  i3692.fixedDeltaTime = i3693[0]
  i3692.maximumDeltaTime = i3693[1]
  i3692.timeScale = i3693[2]
  i3692.maximumParticleTimestep = i3693[3]
  return i3692
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i3694 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i3695 = data
  i3694.gravity = new pc.Vec3( i3695[0], i3695[1], i3695[2] )
  i3694.defaultSolverIterations = i3695[3]
  i3694.bounceThreshold = i3695[4]
  i3694.autoSyncTransforms = !!i3695[5]
  i3694.autoSimulation = !!i3695[6]
  var i3697 = i3695[7]
  var i3696 = []
  for(var i = 0; i < i3697.length; i += 1) {
    i3696.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i3697[i + 0]) );
  }
  i3694.collisionMatrix = i3696
  return i3694
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i3700 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i3701 = data
  i3700.enabled = !!i3701[0]
  i3700.layerId = i3701[1]
  i3700.otherLayerId = i3701[2]
  return i3700
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i3702 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i3703 = data
  request.r(i3703[0], i3703[1], 0, i3702, 'material')
  i3702.gravity = new pc.Vec2( i3703[2], i3703[3] )
  i3702.positionIterations = i3703[4]
  i3702.velocityIterations = i3703[5]
  i3702.velocityThreshold = i3703[6]
  i3702.maxLinearCorrection = i3703[7]
  i3702.maxAngularCorrection = i3703[8]
  i3702.maxTranslationSpeed = i3703[9]
  i3702.maxRotationSpeed = i3703[10]
  i3702.baumgarteScale = i3703[11]
  i3702.baumgarteTOIScale = i3703[12]
  i3702.timeToSleep = i3703[13]
  i3702.linearSleepTolerance = i3703[14]
  i3702.angularSleepTolerance = i3703[15]
  i3702.defaultContactOffset = i3703[16]
  i3702.autoSimulation = !!i3703[17]
  i3702.queriesHitTriggers = !!i3703[18]
  i3702.queriesStartInColliders = !!i3703[19]
  i3702.callbacksOnDisable = !!i3703[20]
  i3702.reuseCollisionCallbacks = !!i3703[21]
  i3702.autoSyncTransforms = !!i3703[22]
  var i3705 = i3703[23]
  var i3704 = []
  for(var i = 0; i < i3705.length; i += 1) {
    i3704.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i3705[i + 0]) );
  }
  i3702.collisionMatrix = i3704
  return i3702
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i3708 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i3709 = data
  i3708.enabled = !!i3709[0]
  i3708.layerId = i3709[1]
  i3708.otherLayerId = i3709[2]
  return i3708
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i3710 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i3711 = data
  var i3713 = i3711[0]
  var i3712 = []
  for(var i = 0; i < i3713.length; i += 1) {
    i3712.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i3713[i + 0]) );
  }
  i3710.qualityLevels = i3712
  var i3715 = i3711[1]
  var i3714 = []
  for(var i = 0; i < i3715.length; i += 1) {
    i3714.push( i3715[i + 0] );
  }
  i3710.names = i3714
  i3710.shadows = i3711[2]
  i3710.anisotropicFiltering = i3711[3]
  i3710.antiAliasing = i3711[4]
  i3710.lodBias = i3711[5]
  i3710.shadowCascades = i3711[6]
  i3710.shadowDistance = i3711[7]
  i3710.shadowmaskMode = i3711[8]
  i3710.shadowProjection = i3711[9]
  i3710.shadowResolution = i3711[10]
  i3710.softParticles = !!i3711[11]
  i3710.softVegetation = !!i3711[12]
  i3710.activeColorSpace = i3711[13]
  i3710.desiredColorSpace = i3711[14]
  i3710.masterTextureLimit = i3711[15]
  i3710.maxQueuedFrames = i3711[16]
  i3710.particleRaycastBudget = i3711[17]
  i3710.pixelLightCount = i3711[18]
  i3710.realtimeReflectionProbes = !!i3711[19]
  i3710.shadowCascade2Split = i3711[20]
  i3710.shadowCascade4Split = new pc.Vec3( i3711[21], i3711[22], i3711[23] )
  i3710.streamingMipmapsActive = !!i3711[24]
  i3710.vSyncCount = i3711[25]
  i3710.asyncUploadBufferSize = i3711[26]
  i3710.asyncUploadTimeSlice = i3711[27]
  i3710.billboardsFaceCameraPosition = !!i3711[28]
  i3710.shadowNearPlaneOffset = i3711[29]
  i3710.streamingMipmapsMemoryBudget = i3711[30]
  i3710.maximumLODLevel = i3711[31]
  i3710.streamingMipmapsAddAllCameras = !!i3711[32]
  i3710.streamingMipmapsMaxLevelReduction = i3711[33]
  i3710.streamingMipmapsRenderersPerFrame = i3711[34]
  i3710.resolutionScalingFixedDPIFactor = i3711[35]
  i3710.streamingMipmapsMaxFileIORequests = i3711[36]
  i3710.currentQualityLevel = i3711[37]
  return i3710
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i3720 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i3721 = data
  i3720.weight = i3721[0]
  i3720.vertices = i3721[1]
  i3720.normals = i3721[2]
  i3720.tangents = i3721[3]
  return i3720
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i3724 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i3725 = data
  i3724.mode = i3725[0]
  i3724.parameter = i3725[1]
  i3724.threshold = i3725[2]
  return i3724
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i3726 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i3727 = data
  i3726.m_XCoordinate = i3727[0]
  i3726.m_YCoordinate = i3727[1]
  return i3726
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i3728 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i3729 = data
  i3728.m_XPositionAdjustment = i3729[0]
  i3728.m_YPositionAdjustment = i3729[1]
  return i3728
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i3730 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i3731 = data
  i3730.xPlacement = i3731[0]
  i3730.yPlacement = i3731[1]
  i3730.xAdvance = i3731[2]
  i3730.yAdvance = i3731[3]
  return i3730
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

Deserializers.buildID = "f79abab6-3bbb-4db7-9f56-27bb020d2c9b";

Deserializers.runtimeInitializeOnLoadInfos = [[["Unity","Services","Core","Internal","UnityServicesInitializer","EnableServicesInitializationAsync"],["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["DG","Tweening","DOTween","RuntimeOnLoad"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["Unity","Services","Core","Registration","CorePackageInitializer","InitializeOnLoad"],["Unity","Services","Core","Internal","TaskAsyncOperation","SetScheduler"],["Unity","Services","Core","Environments","Client","Scheduler","EngineStateHelper","Init"],["Unity","Services","Core","Environments","Client","Scheduler","ThreadHelper","Init"],["Ua2CoreInitializeCallback","Register"],["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["Unity","AI","Navigation","NavMeshLink","ClearTrackedList"],["Unity","AI","Navigation","NavMeshSurface","ClearNavMeshSurfaces"],["Unity","AI","Navigation","NavMeshModifierVolume","ClearNavMeshModifiers"],["Unity","AI","Navigation","NavMeshModifier","ClearNavMeshModifiers"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["Unity","Services","Core","Internal","UnityServicesInitializer","CreateStaticInstance"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[["Unity","Services","Core","Environments","Client","Http","JsonHelpers","RegisterTypesForAOT"]],[["Unity","Services","Core","UnityThreadUtils","CaptureUnityThreadInfo"],["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

