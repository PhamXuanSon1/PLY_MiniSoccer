var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i4340 = root || request.c( 'UnityEngine.JointSpring' )
  var i4341 = data
  i4340.spring = i4341[0]
  i4340.damper = i4341[1]
  i4340.targetPosition = i4341[2]
  return i4340
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i4342 = root || request.c( 'UnityEngine.JointMotor' )
  var i4343 = data
  i4342.m_TargetVelocity = i4343[0]
  i4342.m_Force = i4343[1]
  i4342.m_FreeSpin = i4343[2]
  return i4342
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i4344 = root || request.c( 'UnityEngine.JointLimits' )
  var i4345 = data
  i4344.m_Min = i4345[0]
  i4344.m_Max = i4345[1]
  i4344.m_Bounciness = i4345[2]
  i4344.m_BounceMinVelocity = i4345[3]
  i4344.m_ContactDistance = i4345[4]
  i4344.minBounce = i4345[5]
  i4344.maxBounce = i4345[6]
  return i4344
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i4346 = root || request.c( 'UnityEngine.JointDrive' )
  var i4347 = data
  i4346.m_PositionSpring = i4347[0]
  i4346.m_PositionDamper = i4347[1]
  i4346.m_MaximumForce = i4347[2]
  i4346.m_UseAcceleration = i4347[3]
  return i4346
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i4348 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i4349 = data
  i4348.m_Spring = i4349[0]
  i4348.m_Damper = i4349[1]
  return i4348
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i4350 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i4351 = data
  i4350.m_Limit = i4351[0]
  i4350.m_Bounciness = i4351[1]
  i4350.m_ContactDistance = i4351[2]
  return i4350
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i4352 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i4353 = data
  i4352.m_ExtremumSlip = i4353[0]
  i4352.m_ExtremumValue = i4353[1]
  i4352.m_AsymptoteSlip = i4353[2]
  i4352.m_AsymptoteValue = i4353[3]
  i4352.m_Stiffness = i4353[4]
  return i4352
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i4354 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i4355 = data
  i4354.m_LowerAngle = i4355[0]
  i4354.m_UpperAngle = i4355[1]
  return i4354
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i4356 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i4357 = data
  i4356.m_MotorSpeed = i4357[0]
  i4356.m_MaximumMotorTorque = i4357[1]
  return i4356
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i4358 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i4359 = data
  i4358.m_DampingRatio = i4359[0]
  i4358.m_Frequency = i4359[1]
  i4358.m_Angle = i4359[2]
  return i4358
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i4360 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i4361 = data
  i4360.m_LowerTranslation = i4361[0]
  i4360.m_UpperTranslation = i4361[1]
  return i4360
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i4362 = root || new pc.UnityMaterial()
  var i4363 = data
  i4362.name = i4363[0]
  request.r(i4363[1], i4363[2], 0, i4362, 'shader')
  i4362.renderQueue = i4363[3]
  i4362.enableInstancing = !!i4363[4]
  var i4365 = i4363[5]
  var i4364 = []
  for(var i = 0; i < i4365.length; i += 1) {
    i4364.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i4365[i + 0]) );
  }
  i4362.floatParameters = i4364
  var i4367 = i4363[6]
  var i4366 = []
  for(var i = 0; i < i4367.length; i += 1) {
    i4366.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i4367[i + 0]) );
  }
  i4362.colorParameters = i4366
  var i4369 = i4363[7]
  var i4368 = []
  for(var i = 0; i < i4369.length; i += 1) {
    i4368.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i4369[i + 0]) );
  }
  i4362.vectorParameters = i4368
  var i4371 = i4363[8]
  var i4370 = []
  for(var i = 0; i < i4371.length; i += 1) {
    i4370.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i4371[i + 0]) );
  }
  i4362.textureParameters = i4370
  var i4373 = i4363[9]
  var i4372 = []
  for(var i = 0; i < i4373.length; i += 1) {
    i4372.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i4373[i + 0]) );
  }
  i4362.materialFlags = i4372
  return i4362
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i4376 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i4377 = data
  i4376.name = i4377[0]
  i4376.value = i4377[1]
  return i4376
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i4380 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i4381 = data
  i4380.name = i4381[0]
  i4380.value = new pc.Color(i4381[1], i4381[2], i4381[3], i4381[4])
  return i4380
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i4384 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i4385 = data
  i4384.name = i4385[0]
  i4384.value = new pc.Vec4( i4385[1], i4385[2], i4385[3], i4385[4] )
  return i4384
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i4388 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i4389 = data
  i4388.name = i4389[0]
  request.r(i4389[1], i4389[2], 0, i4388, 'value')
  return i4388
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i4392 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i4393 = data
  i4392.name = i4393[0]
  i4392.enabled = !!i4393[1]
  return i4392
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i4394 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i4395 = data
  i4394.name = i4395[0]
  i4394.width = i4395[1]
  i4394.height = i4395[2]
  i4394.mipmapCount = i4395[3]
  i4394.anisoLevel = i4395[4]
  i4394.filterMode = i4395[5]
  i4394.hdr = !!i4395[6]
  i4394.format = i4395[7]
  i4394.wrapMode = i4395[8]
  i4394.alphaIsTransparency = !!i4395[9]
  i4394.alphaSource = i4395[10]
  i4394.graphicsFormat = i4395[11]
  i4394.sRGBTexture = !!i4395[12]
  i4394.desiredColorSpace = i4395[13]
  i4394.wrapU = i4395[14]
  i4394.wrapV = i4395[15]
  return i4394
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i4396 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i4397 = data
  i4396.name = i4397[0]
  i4396.halfPrecision = !!i4397[1]
  i4396.useSimplification = !!i4397[2]
  i4396.useUInt32IndexFormat = !!i4397[3]
  i4396.vertexCount = i4397[4]
  i4396.aabb = i4397[5]
  var i4399 = i4397[6]
  var i4398 = []
  for(var i = 0; i < i4399.length; i += 1) {
    i4398.push( !!i4399[i + 0] );
  }
  i4396.streams = i4398
  i4396.vertices = i4397[7]
  var i4401 = i4397[8]
  var i4400 = []
  for(var i = 0; i < i4401.length; i += 1) {
    i4400.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i4401[i + 0]) );
  }
  i4396.subMeshes = i4400
  var i4403 = i4397[9]
  var i4402 = []
  for(var i = 0; i < i4403.length; i += 16) {
    i4402.push( new pc.Mat4().setData(i4403[i + 0], i4403[i + 1], i4403[i + 2], i4403[i + 3],  i4403[i + 4], i4403[i + 5], i4403[i + 6], i4403[i + 7],  i4403[i + 8], i4403[i + 9], i4403[i + 10], i4403[i + 11],  i4403[i + 12], i4403[i + 13], i4403[i + 14], i4403[i + 15]) );
  }
  i4396.bindposes = i4402
  var i4405 = i4397[10]
  var i4404 = []
  for(var i = 0; i < i4405.length; i += 1) {
    i4404.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i4405[i + 0]) );
  }
  i4396.blendShapes = i4404
  return i4396
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i4410 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i4411 = data
  i4410.triangles = i4411[0]
  return i4410
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i4416 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i4417 = data
  i4416.name = i4417[0]
  var i4419 = i4417[1]
  var i4418 = []
  for(var i = 0; i < i4419.length; i += 1) {
    i4418.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i4419[i + 0]) );
  }
  i4416.frames = i4418
  return i4416
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i4420 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i4421 = data
  i4420.name = i4421[0]
  i4420.index = i4421[1]
  i4420.startup = !!i4421[2]
  return i4420
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i4422 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i4423 = data
  i4422.aspect = i4423[0]
  i4422.orthographic = !!i4423[1]
  i4422.orthographicSize = i4423[2]
  i4422.backgroundColor = new pc.Color(i4423[3], i4423[4], i4423[5], i4423[6])
  i4422.nearClipPlane = i4423[7]
  i4422.farClipPlane = i4423[8]
  i4422.fieldOfView = i4423[9]
  i4422.depth = i4423[10]
  i4422.clearFlags = i4423[11]
  i4422.cullingMask = i4423[12]
  i4422.rect = i4423[13]
  request.r(i4423[14], i4423[15], 0, i4422, 'targetTexture')
  i4422.usePhysicalProperties = !!i4423[16]
  i4422.focalLength = i4423[17]
  i4422.sensorSize = new pc.Vec2( i4423[18], i4423[19] )
  i4422.lensShift = new pc.Vec2( i4423[20], i4423[21] )
  i4422.gateFit = i4423[22]
  i4422.commandBufferCount = i4423[23]
  i4422.cameraType = i4423[24]
  i4422.enabled = !!i4423[25]
  return i4422
}

Deserializers["CameraFollow2D"] = function (request, data, root) {
  var i4424 = root || request.c( 'CameraFollow2D' )
  var i4425 = data
  request.r(i4425[0], i4425[1], 0, i4424, 'target')
  i4424.smoothSpeed = i4425[2]
  i4424.offset = new pc.Vec3( i4425[3], i4425[4], i4425[5] )
  i4424.followY = !!i4425[6]
  return i4424
}

Deserializers["AutoCameraFit"] = function (request, data, root) {
  var i4426 = root || request.c( 'AutoCameraFit' )
  var i4427 = data
  request.r(i4427[0], i4427[1], 0, i4426, 'tallScreenObject')
  i4426.tallScreenRatioThreshold = i4427[2]
  i4426.tallScreenYOffset = i4427[3]
  request.r(i4427[4], i4427[5], 0, i4426, 'canvasBtn')
  request.r(i4427[6], i4427[7], 0, i4426, 'targetArea')
  i4426.paddingLandscape = i4427[8]
  i4426.paddingPortrait = i4427[9]
  i4426.extraPaddingSmallScreen = i4427[10]
  i4426.smallScreenThreshold = i4427[11]
  i4426.autoUpdateOnResize = !!i4427[12]
  i4426.adjustInEditMode = !!i4427[13]
  return i4426
}

Deserializers["MoveBetweenPoints"] = function (request, data, root) {
  var i4428 = root || request.c( 'MoveBetweenPoints' )
  var i4429 = data
  request.r(i4429[0], i4429[1], 0, i4428, 'pointA')
  request.r(i4429[2], i4429[3], 0, i4428, 'pointB')
  i4428.duration = i4429[4]
  return i4428
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i4430 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i4431 = data
  i4430.color = new pc.Color(i4431[0], i4431[1], i4431[2], i4431[3])
  request.r(i4431[4], i4431[5], 0, i4430, 'sprite')
  i4430.flipX = !!i4431[6]
  i4430.flipY = !!i4431[7]
  i4430.drawMode = i4431[8]
  i4430.size = new pc.Vec2( i4431[9], i4431[10] )
  i4430.tileMode = i4431[11]
  i4430.adaptiveModeThreshold = i4431[12]
  i4430.maskInteraction = i4431[13]
  i4430.spriteSortPoint = i4431[14]
  i4430.enabled = !!i4431[15]
  request.r(i4431[16], i4431[17], 0, i4430, 'sharedMaterial')
  var i4433 = i4431[18]
  var i4432 = []
  for(var i = 0; i < i4433.length; i += 2) {
  request.r(i4433[i + 0], i4433[i + 1], 2, i4432, '')
  }
  i4430.sharedMaterials = i4432
  i4430.receiveShadows = !!i4431[19]
  i4430.shadowCastingMode = i4431[20]
  i4430.sortingLayerID = i4431[21]
  i4430.sortingOrder = i4431[22]
  i4430.lightmapIndex = i4431[23]
  i4430.lightmapSceneIndex = i4431[24]
  i4430.lightmapScaleOffset = new pc.Vec4( i4431[25], i4431[26], i4431[27], i4431[28] )
  i4430.lightProbeUsage = i4431[29]
  i4430.reflectionProbeUsage = i4431[30]
  return i4430
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i4436 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i4437 = data
  i4436.name = i4437[0]
  i4436.tagId = i4437[1]
  i4436.enabled = !!i4437[2]
  i4436.isStatic = !!i4437[3]
  i4436.layer = i4437[4]
  return i4436
}

Deserializers["ScreenHeightPositionAnchor"] = function (request, data, root) {
  var i4438 = root || request.c( 'ScreenHeightPositionAnchor' )
  var i4439 = data
  request.r(i4439[0], i4439[1], 0, i4438, 'anchorPoint')
  request.r(i4439[2], i4439[3], 0, i4438, 'targetCamera')
  i4438.viewportYRatio = i4439[4]
  i4438.alignOnStart = !!i4439[5]
  i4438.alignOnEnable = !!i4439[6]
  i4438.realignOnScreenSizeChanged = !!i4439[7]
  i4438.drawGizmos = !!i4439[8]
  i4438.targetLineColor = new pc.Color(i4439[9], i4439[10], i4439[11], i4439[12])
  i4438.anchorColor = new pc.Color(i4439[13], i4439[14], i4439[15], i4439[16])
  return i4438
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i4440 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i4441 = data
  i4440.center = new pc.Vec3( i4441[0], i4441[1], i4441[2] )
  i4440.size = new pc.Vec3( i4441[3], i4441[4], i4441[5] )
  i4440.enabled = !!i4441[6]
  i4440.isTrigger = !!i4441[7]
  request.r(i4441[8], i4441[9], 0, i4440, 'material')
  return i4440
}

Deserializers["ClickToStore"] = function (request, data, root) {
  var i4442 = root || request.c( 'ClickToStore' )
  var i4443 = data
  return i4442
}

Deserializers["Ply_SoundManager"] = function (request, data, root) {
  var i4444 = root || request.c( 'Ply_SoundManager' )
  var i4445 = data
  i4444.fxAudio = request.d('FxAudio', i4445[0], i4444.fxAudio)
  request.r(i4445[1], i4445[2], 0, i4444, 'bgm1')
  return i4444
}

Deserializers["FxAudio"] = function (request, data, root) {
  var i4446 = root || request.c( 'FxAudio' )
  var i4447 = data
  i4446.Angry = request.d('SoundData', i4447[0], i4446.Angry)
  i4446.Cry = request.d('SoundData', i4447[1], i4446.Cry)
  i4446.Hehe = request.d('SoundData', i4447[2], i4446.Hehe)
  i4446.Huh = request.d('SoundData', i4447[3], i4446.Huh)
  i4446.RoarTiger = request.d('SoundData', i4447[4], i4446.RoarTiger)
  i4446.Siuu = request.d('SoundData', i4447[5], i4446.Siuu)
  i4446.True = request.d('SoundData', i4447[6], i4446.True)
  i4446.False = request.d('SoundData', i4447[7], i4446.False)
  return i4446
}

Deserializers["SoundData"] = function (request, data, root) {
  var i4448 = root || request.c( 'SoundData' )
  var i4449 = data
  request.r(i4449[0], i4449[1], 0, i4448, 'clip')
  i4448.repeatCount = i4449[2]
  return i4448
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i4450 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i4451 = data
  request.r(i4451[0], i4451[1], 0, i4450, 'clip')
  request.r(i4451[2], i4451[3], 0, i4450, 'outputAudioMixerGroup')
  i4450.playOnAwake = !!i4451[4]
  i4450.loop = !!i4451[5]
  i4450.time = i4451[6]
  i4450.volume = i4451[7]
  i4450.pitch = i4451[8]
  i4450.enabled = !!i4451[9]
  return i4450
}

Deserializers["ItemSequenceManager"] = function (request, data, root) {
  var i4452 = root || request.c( 'ItemSequenceManager' )
  var i4453 = data
  var i4455 = i4453[0]
  var i4454 = new (System.Collections.Generic.List$1(Bridge.ns('DraggableItem')))
  for(var i = 0; i < i4455.length; i += 2) {
  request.r(i4455[i + 0], i4455[i + 1], 1, i4454, '')
  }
  i4452.itemList = i4454
  request.r(i4453[1], i4453[2], 0, i4452, 'spawnPoint')
  request.r(i4453[3], i4453[4], 0, i4452, 'targetPoint')
  i4452.moveDuration = i4453[5]
  i4452.moveEase = i4453[6]
  i4452.delayBetweenItems = i4453[7]
  var i4457 = i4453[8]
  var i4456 = new (System.Collections.Generic.List$1(Bridge.ns('CharacterSlot')))
  for(var i = 0; i < i4457.length; i += 2) {
  request.r(i4457[i + 0], i4457[i + 1], 1, i4456, '')
  }
  i4452.characterList = i4456
  i4452.isWin = !!i4453[9]
  request.r(i4453[10], i4453[11], 0, i4452, 'winObject')
  i4452.winFxType = i4453[12]
  request.r(i4453[13], i4453[14], 0, i4452, 'loseObject')
  i4452.loseFxType = i4453[15]
  i4452.resultTextDelay = i4453[16]
  request.r(i4453[17], i4453[18], 0, i4452, 'gameplayObject')
  request.r(i4453[19], i4453[20], 0, i4452, 'endcardObject')
  request.r(i4453[21], i4453[22], 0, i4452, 'objectToHideOnFirstDrag')
  i4452.endcardDelay = i4453[23]
  i4452.isFailedMode = !!i4453[24]
  return i4452
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i4462 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i4463 = data
  i4462.pivot = new pc.Vec2( i4463[0], i4463[1] )
  i4462.anchorMin = new pc.Vec2( i4463[2], i4463[3] )
  i4462.anchorMax = new pc.Vec2( i4463[4], i4463[5] )
  i4462.sizeDelta = new pc.Vec2( i4463[6], i4463[7] )
  i4462.anchoredPosition3D = new pc.Vec3( i4463[8], i4463[9], i4463[10] )
  i4462.rotation = new pc.Quat(i4463[11], i4463[12], i4463[13], i4463[14])
  i4462.scale = new pc.Vec3( i4463[15], i4463[16], i4463[17] )
  return i4462
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i4464 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i4465 = data
  i4464.planeDistance = i4465[0]
  i4464.referencePixelsPerUnit = i4465[1]
  i4464.isFallbackOverlay = !!i4465[2]
  i4464.renderMode = i4465[3]
  i4464.renderOrder = i4465[4]
  i4464.sortingLayerName = i4465[5]
  i4464.sortingOrder = i4465[6]
  i4464.scaleFactor = i4465[7]
  request.r(i4465[8], i4465[9], 0, i4464, 'worldCamera')
  i4464.overrideSorting = !!i4465[10]
  i4464.pixelPerfect = !!i4465[11]
  i4464.targetDisplay = i4465[12]
  i4464.overridePixelPerfect = !!i4465[13]
  i4464.enabled = !!i4465[14]
  return i4464
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i4466 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i4467 = data
  i4466.m_UiScaleMode = i4467[0]
  i4466.m_ReferencePixelsPerUnit = i4467[1]
  i4466.m_ScaleFactor = i4467[2]
  i4466.m_ReferenceResolution = new pc.Vec2( i4467[3], i4467[4] )
  i4466.m_ScreenMatchMode = i4467[5]
  i4466.m_MatchWidthOrHeight = i4467[6]
  i4466.m_PhysicalUnit = i4467[7]
  i4466.m_FallbackScreenDPI = i4467[8]
  i4466.m_DefaultSpriteDPI = i4467[9]
  i4466.m_DynamicPixelsPerUnit = i4467[10]
  i4466.m_PresetInfoIsWorld = !!i4467[11]
  return i4466
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i4468 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i4469 = data
  i4468.m_IgnoreReversedGraphics = !!i4469[0]
  i4468.m_BlockingObjects = i4469[1]
  i4468.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i4469[2] )
  return i4468
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i4470 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i4471 = data
  i4470.cullTransparentMesh = !!i4471[0]
  return i4470
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i4472 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i4473 = data
  i4472.m_hasFontAssetChanged = !!i4473[0]
  request.r(i4473[1], i4473[2], 0, i4472, 'm_baseMaterial')
  i4472.m_maskOffset = new pc.Vec4( i4473[3], i4473[4], i4473[5], i4473[6] )
  i4472.m_text = i4473[7]
  i4472.m_isRightToLeft = !!i4473[8]
  request.r(i4473[9], i4473[10], 0, i4472, 'm_fontAsset')
  request.r(i4473[11], i4473[12], 0, i4472, 'm_sharedMaterial')
  var i4475 = i4473[13]
  var i4474 = []
  for(var i = 0; i < i4475.length; i += 2) {
  request.r(i4475[i + 0], i4475[i + 1], 2, i4474, '')
  }
  i4472.m_fontSharedMaterials = i4474
  request.r(i4473[14], i4473[15], 0, i4472, 'm_fontMaterial')
  var i4477 = i4473[16]
  var i4476 = []
  for(var i = 0; i < i4477.length; i += 2) {
  request.r(i4477[i + 0], i4477[i + 1], 2, i4476, '')
  }
  i4472.m_fontMaterials = i4476
  i4472.m_fontColor32 = UnityEngine.Color32.ConstructColor(i4473[17], i4473[18], i4473[19], i4473[20])
  i4472.m_fontColor = new pc.Color(i4473[21], i4473[22], i4473[23], i4473[24])
  i4472.m_enableVertexGradient = !!i4473[25]
  i4472.m_colorMode = i4473[26]
  i4472.m_fontColorGradient = request.d('TMPro.VertexGradient', i4473[27], i4472.m_fontColorGradient)
  request.r(i4473[28], i4473[29], 0, i4472, 'm_fontColorGradientPreset')
  request.r(i4473[30], i4473[31], 0, i4472, 'm_spriteAsset')
  i4472.m_tintAllSprites = !!i4473[32]
  request.r(i4473[33], i4473[34], 0, i4472, 'm_StyleSheet')
  i4472.m_TextStyleHashCode = i4473[35]
  i4472.m_overrideHtmlColors = !!i4473[36]
  i4472.m_faceColor = UnityEngine.Color32.ConstructColor(i4473[37], i4473[38], i4473[39], i4473[40])
  i4472.m_fontSize = i4473[41]
  i4472.m_fontSizeBase = i4473[42]
  i4472.m_fontWeight = i4473[43]
  i4472.m_enableAutoSizing = !!i4473[44]
  i4472.m_fontSizeMin = i4473[45]
  i4472.m_fontSizeMax = i4473[46]
  i4472.m_fontStyle = i4473[47]
  i4472.m_HorizontalAlignment = i4473[48]
  i4472.m_VerticalAlignment = i4473[49]
  i4472.m_textAlignment = i4473[50]
  i4472.m_characterSpacing = i4473[51]
  i4472.m_wordSpacing = i4473[52]
  i4472.m_lineSpacing = i4473[53]
  i4472.m_lineSpacingMax = i4473[54]
  i4472.m_paragraphSpacing = i4473[55]
  i4472.m_charWidthMaxAdj = i4473[56]
  i4472.m_TextWrappingMode = i4473[57]
  i4472.m_wordWrappingRatios = i4473[58]
  i4472.m_overflowMode = i4473[59]
  request.r(i4473[60], i4473[61], 0, i4472, 'm_linkedTextComponent')
  request.r(i4473[62], i4473[63], 0, i4472, 'parentLinkedComponent')
  i4472.m_enableKerning = !!i4473[64]
  var i4479 = i4473[65]
  var i4478 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i4479.length; i += 1) {
    i4478.add(i4479[i + 0]);
  }
  i4472.m_ActiveFontFeatures = i4478
  i4472.m_enableExtraPadding = !!i4473[66]
  i4472.checkPaddingRequired = !!i4473[67]
  i4472.m_isRichText = !!i4473[68]
  i4472.m_parseCtrlCharacters = !!i4473[69]
  i4472.m_isOrthographic = !!i4473[70]
  i4472.m_isCullingEnabled = !!i4473[71]
  i4472.m_horizontalMapping = i4473[72]
  i4472.m_verticalMapping = i4473[73]
  i4472.m_uvLineOffset = i4473[74]
  i4472.m_geometrySortingOrder = i4473[75]
  i4472.m_IsTextObjectScaleStatic = !!i4473[76]
  i4472.m_VertexBufferAutoSizeReduction = !!i4473[77]
  i4472.m_useMaxVisibleDescender = !!i4473[78]
  i4472.m_pageToDisplay = i4473[79]
  i4472.m_margin = new pc.Vec4( i4473[80], i4473[81], i4473[82], i4473[83] )
  i4472.m_isUsingLegacyAnimationComponent = !!i4473[84]
  i4472.m_isVolumetricText = !!i4473[85]
  request.r(i4473[86], i4473[87], 0, i4472, 'm_Material')
  i4472.m_EmojiFallbackSupport = !!i4473[88]
  i4472.m_Maskable = !!i4473[89]
  i4472.m_Color = new pc.Color(i4473[90], i4473[91], i4473[92], i4473[93])
  i4472.m_RaycastTarget = !!i4473[94]
  i4472.m_RaycastPadding = new pc.Vec4( i4473[95], i4473[96], i4473[97], i4473[98] )
  return i4472
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i4480 = root || request.c( 'TMPro.VertexGradient' )
  var i4481 = data
  i4480.topLeft = new pc.Color(i4481[0], i4481[1], i4481[2], i4481[3])
  i4480.topRight = new pc.Color(i4481[4], i4481[5], i4481[6], i4481[7])
  i4480.bottomLeft = new pc.Color(i4481[8], i4481[9], i4481[10], i4481[11])
  i4480.bottomRight = new pc.Color(i4481[12], i4481[13], i4481[14], i4481[15])
  return i4480
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i4484 = root || request.c( 'UnityEngine.UI.Image' )
  var i4485 = data
  request.r(i4485[0], i4485[1], 0, i4484, 'm_Sprite')
  i4484.m_Type = i4485[2]
  i4484.m_PreserveAspect = !!i4485[3]
  i4484.m_FillCenter = !!i4485[4]
  i4484.m_FillMethod = i4485[5]
  i4484.m_FillAmount = i4485[6]
  i4484.m_FillClockwise = !!i4485[7]
  i4484.m_FillOrigin = i4485[8]
  i4484.m_UseSpriteMesh = !!i4485[9]
  i4484.m_PixelsPerUnitMultiplier = i4485[10]
  request.r(i4485[11], i4485[12], 0, i4484, 'm_Material')
  i4484.m_Maskable = !!i4485[13]
  i4484.m_Color = new pc.Color(i4485[14], i4485[15], i4485[16], i4485[17])
  i4484.m_RaycastTarget = !!i4485[18]
  i4484.m_RaycastPadding = new pc.Vec4( i4485[19], i4485[20], i4485[21], i4485[22] )
  return i4484
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i4486 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i4487 = data
  request.r(i4487[0], i4487[1], 0, i4486, 'animatorController')
  request.r(i4487[2], i4487[3], 0, i4486, 'avatar')
  i4486.updateMode = i4487[4]
  i4486.hasTransformHierarchy = !!i4487[5]
  i4486.applyRootMotion = !!i4487[6]
  var i4489 = i4487[7]
  var i4488 = []
  for(var i = 0; i < i4489.length; i += 2) {
  request.r(i4489[i + 0], i4489[i + 1], 2, i4488, '')
  }
  i4486.humanBones = i4488
  i4486.enabled = !!i4487[8]
  return i4486
}

Deserializers["CharacterSlot"] = function (request, data, root) {
  var i4492 = root || request.c( 'CharacterSlot' )
  var i4493 = data
  request.r(i4493[0], i4493[1], 0, i4492, 'normalVisual')
  var i4495 = i4493[2]
  var i4494 = new (System.Collections.Generic.List$1(Bridge.ns('CharacterItemVisual')))
  for(var i = 0; i < i4495.length; i += 1) {
    i4494.add(request.d('CharacterItemVisual', i4495[i + 0]));
  }
  i4492.itemVisuals = i4494
  i4492.correctItemID = i4493[3]
  i4492.defaultSound = i4493[4]
  request.r(i4493[5], i4493[6], 0, i4492, 'flyTarget')
  i4492.flyToCharacterDuration = i4493[7]
  i4492.flyEase = i4493[8]
  i4492.hasReceivedItem = !!i4493[9]
  i4492.isCorrectItemReceived = !!i4493[10]
  return i4492
}

Deserializers["CharacterItemVisual"] = function (request, data, root) {
  var i4498 = root || request.c( 'CharacterItemVisual' )
  var i4499 = data
  i4498.itemID = i4499[0]
  request.r(i4499[1], i4499[2], 0, i4498, 'visual')
  i4498.fxType = i4499[3]
  return i4498
}

Deserializers["DraggableItem"] = function (request, data, root) {
  var i4500 = root || request.c( 'DraggableItem' )
  var i4501 = data
  i4500.itemID = i4501[0]
  i4500.itemLayer = UnityEngine.LayerMask.FromIntegerValue( i4501[1] )
  return i4500
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i4502 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i4503 = data
  i4502.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i4503[0], i4502.main)
  i4502.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i4503[1], i4502.colorBySpeed)
  i4502.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i4503[2], i4502.colorOverLifetime)
  i4502.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i4503[3], i4502.emission)
  i4502.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i4503[4], i4502.rotationBySpeed)
  i4502.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i4503[5], i4502.rotationOverLifetime)
  i4502.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i4503[6], i4502.shape)
  i4502.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i4503[7], i4502.sizeBySpeed)
  i4502.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i4503[8], i4502.sizeOverLifetime)
  i4502.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i4503[9], i4502.textureSheetAnimation)
  i4502.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i4503[10], i4502.velocityOverLifetime)
  i4502.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i4503[11], i4502.noise)
  i4502.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i4503[12], i4502.inheritVelocity)
  i4502.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i4503[13], i4502.forceOverLifetime)
  i4502.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i4503[14], i4502.limitVelocityOverLifetime)
  i4502.useAutoRandomSeed = !!i4503[15]
  i4502.randomSeed = i4503[16]
  return i4502
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i4504 = root || new pc.ParticleSystemMain()
  var i4505 = data
  i4504.duration = i4505[0]
  i4504.loop = !!i4505[1]
  i4504.prewarm = !!i4505[2]
  i4504.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4505[3], i4504.startDelay)
  i4504.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4505[4], i4504.startLifetime)
  i4504.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4505[5], i4504.startSpeed)
  i4504.startSize3D = !!i4505[6]
  i4504.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4505[7], i4504.startSizeX)
  i4504.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4505[8], i4504.startSizeY)
  i4504.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4505[9], i4504.startSizeZ)
  i4504.startRotation3D = !!i4505[10]
  i4504.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4505[11], i4504.startRotationX)
  i4504.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4505[12], i4504.startRotationY)
  i4504.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4505[13], i4504.startRotationZ)
  i4504.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i4505[14], i4504.startColor)
  i4504.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4505[15], i4504.gravityModifier)
  i4504.simulationSpace = i4505[16]
  request.r(i4505[17], i4505[18], 0, i4504, 'customSimulationSpace')
  i4504.simulationSpeed = i4505[19]
  i4504.useUnscaledTime = !!i4505[20]
  i4504.scalingMode = i4505[21]
  i4504.playOnAwake = !!i4505[22]
  i4504.maxParticles = i4505[23]
  i4504.emitterVelocityMode = i4505[24]
  i4504.stopAction = i4505[25]
  return i4504
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i4506 = root || new pc.MinMaxCurve()
  var i4507 = data
  i4506.mode = i4507[0]
  i4506.curveMin = new pc.AnimationCurve( { keys_flow: i4507[1] } )
  i4506.curveMax = new pc.AnimationCurve( { keys_flow: i4507[2] } )
  i4506.curveMultiplier = i4507[3]
  i4506.constantMin = i4507[4]
  i4506.constantMax = i4507[5]
  return i4506
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i4508 = root || new pc.MinMaxGradient()
  var i4509 = data
  i4508.mode = i4509[0]
  i4508.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i4509[1], i4508.gradientMin)
  i4508.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i4509[2], i4508.gradientMax)
  i4508.colorMin = new pc.Color(i4509[3], i4509[4], i4509[5], i4509[6])
  i4508.colorMax = new pc.Color(i4509[7], i4509[8], i4509[9], i4509[10])
  return i4508
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i4510 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i4511 = data
  i4510.mode = i4511[0]
  var i4513 = i4511[1]
  var i4512 = []
  for(var i = 0; i < i4513.length; i += 1) {
    i4512.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i4513[i + 0]) );
  }
  i4510.colorKeys = i4512
  var i4515 = i4511[2]
  var i4514 = []
  for(var i = 0; i < i4515.length; i += 1) {
    i4514.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i4515[i + 0]) );
  }
  i4510.alphaKeys = i4514
  return i4510
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i4516 = root || new pc.ParticleSystemColorBySpeed()
  var i4517 = data
  i4516.enabled = !!i4517[0]
  i4516.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i4517[1], i4516.color)
  i4516.range = new pc.Vec2( i4517[2], i4517[3] )
  return i4516
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i4520 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i4521 = data
  i4520.color = new pc.Color(i4521[0], i4521[1], i4521[2], i4521[3])
  i4520.time = i4521[4]
  return i4520
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i4524 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i4525 = data
  i4524.alpha = i4525[0]
  i4524.time = i4525[1]
  return i4524
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i4526 = root || new pc.ParticleSystemColorOverLifetime()
  var i4527 = data
  i4526.enabled = !!i4527[0]
  i4526.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i4527[1], i4526.color)
  return i4526
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i4528 = root || new pc.ParticleSystemEmitter()
  var i4529 = data
  i4528.enabled = !!i4529[0]
  i4528.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4529[1], i4528.rateOverTime)
  i4528.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4529[2], i4528.rateOverDistance)
  var i4531 = i4529[3]
  var i4530 = []
  for(var i = 0; i < i4531.length; i += 1) {
    i4530.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i4531[i + 0]) );
  }
  i4528.bursts = i4530
  return i4528
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i4534 = root || new pc.ParticleSystemBurst()
  var i4535 = data
  i4534.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4535[0], i4534.count)
  i4534.cycleCount = i4535[1]
  i4534.minCount = i4535[2]
  i4534.maxCount = i4535[3]
  i4534.repeatInterval = i4535[4]
  i4534.time = i4535[5]
  return i4534
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i4536 = root || new pc.ParticleSystemRotationBySpeed()
  var i4537 = data
  i4536.enabled = !!i4537[0]
  i4536.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4537[1], i4536.x)
  i4536.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4537[2], i4536.y)
  i4536.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4537[3], i4536.z)
  i4536.separateAxes = !!i4537[4]
  i4536.range = new pc.Vec2( i4537[5], i4537[6] )
  return i4536
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i4538 = root || new pc.ParticleSystemRotationOverLifetime()
  var i4539 = data
  i4538.enabled = !!i4539[0]
  i4538.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4539[1], i4538.x)
  i4538.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4539[2], i4538.y)
  i4538.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4539[3], i4538.z)
  i4538.separateAxes = !!i4539[4]
  return i4538
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i4540 = root || new pc.ParticleSystemShape()
  var i4541 = data
  i4540.enabled = !!i4541[0]
  i4540.shapeType = i4541[1]
  i4540.randomDirectionAmount = i4541[2]
  i4540.sphericalDirectionAmount = i4541[3]
  i4540.randomPositionAmount = i4541[4]
  i4540.alignToDirection = !!i4541[5]
  i4540.radius = i4541[6]
  i4540.radiusMode = i4541[7]
  i4540.radiusSpread = i4541[8]
  i4540.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4541[9], i4540.radiusSpeed)
  i4540.radiusThickness = i4541[10]
  i4540.angle = i4541[11]
  i4540.length = i4541[12]
  i4540.boxThickness = new pc.Vec3( i4541[13], i4541[14], i4541[15] )
  i4540.meshShapeType = i4541[16]
  request.r(i4541[17], i4541[18], 0, i4540, 'mesh')
  request.r(i4541[19], i4541[20], 0, i4540, 'meshRenderer')
  request.r(i4541[21], i4541[22], 0, i4540, 'skinnedMeshRenderer')
  i4540.useMeshMaterialIndex = !!i4541[23]
  i4540.meshMaterialIndex = i4541[24]
  i4540.useMeshColors = !!i4541[25]
  i4540.normalOffset = i4541[26]
  i4540.arc = i4541[27]
  i4540.arcMode = i4541[28]
  i4540.arcSpread = i4541[29]
  i4540.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4541[30], i4540.arcSpeed)
  i4540.donutRadius = i4541[31]
  i4540.position = new pc.Vec3( i4541[32], i4541[33], i4541[34] )
  i4540.rotation = new pc.Vec3( i4541[35], i4541[36], i4541[37] )
  i4540.scale = new pc.Vec3( i4541[38], i4541[39], i4541[40] )
  return i4540
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i4542 = root || new pc.ParticleSystemSizeBySpeed()
  var i4543 = data
  i4542.enabled = !!i4543[0]
  i4542.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4543[1], i4542.x)
  i4542.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4543[2], i4542.y)
  i4542.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4543[3], i4542.z)
  i4542.separateAxes = !!i4543[4]
  i4542.range = new pc.Vec2( i4543[5], i4543[6] )
  return i4542
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i4544 = root || new pc.ParticleSystemSizeOverLifetime()
  var i4545 = data
  i4544.enabled = !!i4545[0]
  i4544.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4545[1], i4544.x)
  i4544.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4545[2], i4544.y)
  i4544.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4545[3], i4544.z)
  i4544.separateAxes = !!i4545[4]
  return i4544
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i4546 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i4547 = data
  i4546.enabled = !!i4547[0]
  i4546.mode = i4547[1]
  i4546.animation = i4547[2]
  i4546.numTilesX = i4547[3]
  i4546.numTilesY = i4547[4]
  i4546.useRandomRow = !!i4547[5]
  i4546.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4547[6], i4546.frameOverTime)
  i4546.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4547[7], i4546.startFrame)
  i4546.cycleCount = i4547[8]
  i4546.rowIndex = i4547[9]
  i4546.flipU = i4547[10]
  i4546.flipV = i4547[11]
  i4546.spriteCount = i4547[12]
  var i4549 = i4547[13]
  var i4548 = []
  for(var i = 0; i < i4549.length; i += 2) {
  request.r(i4549[i + 0], i4549[i + 1], 2, i4548, '')
  }
  i4546.sprites = i4548
  return i4546
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i4552 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i4553 = data
  i4552.enabled = !!i4553[0]
  i4552.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4553[1], i4552.x)
  i4552.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4553[2], i4552.y)
  i4552.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4553[3], i4552.z)
  i4552.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4553[4], i4552.radial)
  i4552.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4553[5], i4552.speedModifier)
  i4552.space = i4553[6]
  i4552.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4553[7], i4552.orbitalX)
  i4552.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4553[8], i4552.orbitalY)
  i4552.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4553[9], i4552.orbitalZ)
  i4552.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4553[10], i4552.orbitalOffsetX)
  i4552.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4553[11], i4552.orbitalOffsetY)
  i4552.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4553[12], i4552.orbitalOffsetZ)
  return i4552
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i4554 = root || new pc.ParticleSystemNoise()
  var i4555 = data
  i4554.enabled = !!i4555[0]
  i4554.separateAxes = !!i4555[1]
  i4554.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4555[2], i4554.strengthX)
  i4554.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4555[3], i4554.strengthY)
  i4554.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4555[4], i4554.strengthZ)
  i4554.frequency = i4555[5]
  i4554.damping = !!i4555[6]
  i4554.octaveCount = i4555[7]
  i4554.octaveMultiplier = i4555[8]
  i4554.octaveScale = i4555[9]
  i4554.quality = i4555[10]
  i4554.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4555[11], i4554.scrollSpeed)
  i4554.scrollSpeedMultiplier = i4555[12]
  i4554.remapEnabled = !!i4555[13]
  i4554.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4555[14], i4554.remapX)
  i4554.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4555[15], i4554.remapY)
  i4554.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4555[16], i4554.remapZ)
  i4554.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4555[17], i4554.positionAmount)
  i4554.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4555[18], i4554.rotationAmount)
  i4554.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4555[19], i4554.sizeAmount)
  return i4554
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i4556 = root || new pc.ParticleSystemInheritVelocity()
  var i4557 = data
  i4556.enabled = !!i4557[0]
  i4556.mode = i4557[1]
  i4556.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4557[2], i4556.curve)
  return i4556
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i4558 = root || new pc.ParticleSystemForceOverLifetime()
  var i4559 = data
  i4558.enabled = !!i4559[0]
  i4558.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4559[1], i4558.x)
  i4558.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4559[2], i4558.y)
  i4558.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4559[3], i4558.z)
  i4558.space = i4559[4]
  i4558.randomized = !!i4559[5]
  return i4558
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i4560 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i4561 = data
  i4560.enabled = !!i4561[0]
  i4560.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4561[1], i4560.limit)
  i4560.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4561[2], i4560.limitX)
  i4560.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4561[3], i4560.limitY)
  i4560.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4561[4], i4560.limitZ)
  i4560.dampen = i4561[5]
  i4560.separateAxes = !!i4561[6]
  i4560.space = i4561[7]
  i4560.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4561[8], i4560.drag)
  i4560.multiplyDragByParticleSize = !!i4561[9]
  i4560.multiplyDragByParticleVelocity = !!i4561[10]
  return i4560
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i4562 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i4563 = data
  request.r(i4563[0], i4563[1], 0, i4562, 'mesh')
  i4562.meshCount = i4563[2]
  i4562.activeVertexStreamsCount = i4563[3]
  i4562.alignment = i4563[4]
  i4562.renderMode = i4563[5]
  i4562.sortMode = i4563[6]
  i4562.lengthScale = i4563[7]
  i4562.velocityScale = i4563[8]
  i4562.cameraVelocityScale = i4563[9]
  i4562.normalDirection = i4563[10]
  i4562.sortingFudge = i4563[11]
  i4562.minParticleSize = i4563[12]
  i4562.maxParticleSize = i4563[13]
  i4562.pivot = new pc.Vec3( i4563[14], i4563[15], i4563[16] )
  request.r(i4563[17], i4563[18], 0, i4562, 'trailMaterial')
  i4562.applyActiveColorSpace = !!i4563[19]
  i4562.enabled = !!i4563[20]
  request.r(i4563[21], i4563[22], 0, i4562, 'sharedMaterial')
  var i4565 = i4563[23]
  var i4564 = []
  for(var i = 0; i < i4565.length; i += 2) {
  request.r(i4565[i + 0], i4565[i + 1], 2, i4564, '')
  }
  i4562.sharedMaterials = i4564
  i4562.receiveShadows = !!i4563[24]
  i4562.shadowCastingMode = i4563[25]
  i4562.sortingLayerID = i4563[26]
  i4562.sortingOrder = i4563[27]
  i4562.lightmapIndex = i4563[28]
  i4562.lightmapSceneIndex = i4563[29]
  i4562.lightmapScaleOffset = new pc.Vec4( i4563[30], i4563[31], i4563[32], i4563[33] )
  i4562.lightProbeUsage = i4563[34]
  i4562.reflectionProbeUsage = i4563[35]
  return i4562
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i4566 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i4567 = data
  request.r(i4567[0], i4567[1], 0, i4566, 'm_FirstSelected')
  i4566.m_sendNavigationEvents = !!i4567[2]
  i4566.m_DragThreshold = i4567[3]
  return i4566
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i4568 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i4569 = data
  i4568.m_HorizontalAxis = i4569[0]
  i4568.m_VerticalAxis = i4569[1]
  i4568.m_SubmitButton = i4569[2]
  i4568.m_CancelButton = i4569[3]
  i4568.m_InputActionsPerSecond = i4569[4]
  i4568.m_RepeatDelay = i4569[5]
  i4568.m_ForceModuleActive = !!i4569[6]
  i4568.m_SendPointerHoverToParent = !!i4569[7]
  return i4568
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i4570 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i4571 = data
  i4570.ambientIntensity = i4571[0]
  i4570.reflectionIntensity = i4571[1]
  i4570.ambientMode = i4571[2]
  i4570.ambientLight = new pc.Color(i4571[3], i4571[4], i4571[5], i4571[6])
  i4570.ambientSkyColor = new pc.Color(i4571[7], i4571[8], i4571[9], i4571[10])
  i4570.ambientGroundColor = new pc.Color(i4571[11], i4571[12], i4571[13], i4571[14])
  i4570.ambientEquatorColor = new pc.Color(i4571[15], i4571[16], i4571[17], i4571[18])
  i4570.fogColor = new pc.Color(i4571[19], i4571[20], i4571[21], i4571[22])
  i4570.fogEndDistance = i4571[23]
  i4570.fogStartDistance = i4571[24]
  i4570.fogDensity = i4571[25]
  i4570.fog = !!i4571[26]
  request.r(i4571[27], i4571[28], 0, i4570, 'skybox')
  i4570.fogMode = i4571[29]
  var i4573 = i4571[30]
  var i4572 = []
  for(var i = 0; i < i4573.length; i += 1) {
    i4572.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i4573[i + 0]) );
  }
  i4570.lightmaps = i4572
  i4570.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i4571[31], i4570.lightProbes)
  i4570.lightmapsMode = i4571[32]
  i4570.mixedBakeMode = i4571[33]
  i4570.environmentLightingMode = i4571[34]
  i4570.ambientProbe = new pc.SphericalHarmonicsL2(i4571[35])
  i4570.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i4571[36])
  i4570.useReferenceAmbientProbe = !!i4571[37]
  request.r(i4571[38], i4571[39], 0, i4570, 'customReflection')
  request.r(i4571[40], i4571[41], 0, i4570, 'defaultReflection')
  i4570.defaultReflectionMode = i4571[42]
  i4570.defaultReflectionResolution = i4571[43]
  i4570.sunLightObjectId = i4571[44]
  i4570.pixelLightCount = i4571[45]
  i4570.defaultReflectionHDR = !!i4571[46]
  i4570.hasLightDataAsset = !!i4571[47]
  i4570.hasManualGenerate = !!i4571[48]
  return i4570
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i4576 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i4577 = data
  request.r(i4577[0], i4577[1], 0, i4576, 'lightmapColor')
  request.r(i4577[2], i4577[3], 0, i4576, 'lightmapDirection')
  request.r(i4577[4], i4577[5], 0, i4576, 'shadowMask')
  return i4576
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i4578 = root || new UnityEngine.LightProbes()
  var i4579 = data
  return i4578
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i4586 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i4587 = data
  var i4589 = i4587[0]
  var i4588 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i4589.length; i += 1) {
    i4588.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i4589[i + 0]));
  }
  i4586.ShaderCompilationErrors = i4588
  i4586.name = i4587[1]
  i4586.guid = i4587[2]
  var i4591 = i4587[3]
  var i4590 = []
  for(var i = 0; i < i4591.length; i += 1) {
    i4590.push( i4591[i + 0] );
  }
  i4586.shaderDefinedKeywords = i4590
  var i4593 = i4587[4]
  var i4592 = []
  for(var i = 0; i < i4593.length; i += 1) {
    i4592.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i4593[i + 0]) );
  }
  i4586.passes = i4592
  var i4595 = i4587[5]
  var i4594 = []
  for(var i = 0; i < i4595.length; i += 1) {
    i4594.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i4595[i + 0]) );
  }
  i4586.usePasses = i4594
  var i4597 = i4587[6]
  var i4596 = []
  for(var i = 0; i < i4597.length; i += 1) {
    i4596.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i4597[i + 0]) );
  }
  i4586.defaultParameterValues = i4596
  request.r(i4587[7], i4587[8], 0, i4586, 'unityFallbackShader')
  i4586.readDepth = !!i4587[9]
  i4586.hasDepthOnlyPass = !!i4587[10]
  i4586.isCreatedByShaderGraph = !!i4587[11]
  i4586.disableBatching = !!i4587[12]
  i4586.compiled = !!i4587[13]
  return i4586
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i4600 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i4601 = data
  i4600.shaderName = i4601[0]
  i4600.errorMessage = i4601[1]
  return i4600
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i4606 = root || new pc.UnityShaderPass()
  var i4607 = data
  i4606.id = i4607[0]
  i4606.subShaderIndex = i4607[1]
  i4606.name = i4607[2]
  i4606.passType = i4607[3]
  i4606.grabPassTextureName = i4607[4]
  i4606.usePass = !!i4607[5]
  i4606.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4607[6], i4606.zTest)
  i4606.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4607[7], i4606.zWrite)
  i4606.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4607[8], i4606.culling)
  i4606.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i4607[9], i4606.blending)
  i4606.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i4607[10], i4606.alphaBlending)
  i4606.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4607[11], i4606.colorWriteMask)
  i4606.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4607[12], i4606.offsetUnits)
  i4606.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4607[13], i4606.offsetFactor)
  i4606.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4607[14], i4606.stencilRef)
  i4606.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4607[15], i4606.stencilReadMask)
  i4606.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4607[16], i4606.stencilWriteMask)
  i4606.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i4607[17], i4606.stencilOp)
  i4606.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i4607[18], i4606.stencilOpFront)
  i4606.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i4607[19], i4606.stencilOpBack)
  var i4609 = i4607[20]
  var i4608 = []
  for(var i = 0; i < i4609.length; i += 1) {
    i4608.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i4609[i + 0]) );
  }
  i4606.tags = i4608
  var i4611 = i4607[21]
  var i4610 = []
  for(var i = 0; i < i4611.length; i += 1) {
    i4610.push( i4611[i + 0] );
  }
  i4606.passDefinedKeywords = i4610
  var i4613 = i4607[22]
  var i4612 = []
  for(var i = 0; i < i4613.length; i += 1) {
    i4612.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i4613[i + 0]) );
  }
  i4606.passDefinedKeywordGroups = i4612
  var i4615 = i4607[23]
  var i4614 = []
  for(var i = 0; i < i4615.length; i += 1) {
    i4614.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i4615[i + 0]) );
  }
  i4606.variants = i4614
  var i4617 = i4607[24]
  var i4616 = []
  for(var i = 0; i < i4617.length; i += 1) {
    i4616.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i4617[i + 0]) );
  }
  i4606.excludedVariants = i4616
  i4606.hasDepthReader = !!i4607[25]
  return i4606
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i4618 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i4619 = data
  i4618.val = i4619[0]
  i4618.name = i4619[1]
  return i4618
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i4620 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i4621 = data
  i4620.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4621[0], i4620.src)
  i4620.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4621[1], i4620.dst)
  i4620.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4621[2], i4620.op)
  return i4620
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i4622 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i4623 = data
  i4622.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4623[0], i4622.pass)
  i4622.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4623[1], i4622.fail)
  i4622.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4623[2], i4622.zFail)
  i4622.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4623[3], i4622.comp)
  return i4622
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i4626 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i4627 = data
  i4626.name = i4627[0]
  i4626.value = i4627[1]
  return i4626
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i4630 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i4631 = data
  var i4633 = i4631[0]
  var i4632 = []
  for(var i = 0; i < i4633.length; i += 1) {
    i4632.push( i4633[i + 0] );
  }
  i4630.keywords = i4632
  i4630.hasDiscard = !!i4631[1]
  return i4630
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i4636 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i4637 = data
  i4636.passId = i4637[0]
  i4636.subShaderIndex = i4637[1]
  var i4639 = i4637[2]
  var i4638 = []
  for(var i = 0; i < i4639.length; i += 1) {
    i4638.push( i4639[i + 0] );
  }
  i4636.keywords = i4638
  i4636.vertexProgram = i4637[3]
  i4636.fragmentProgram = i4637[4]
  i4636.exportedForWebGl2 = !!i4637[5]
  i4636.readDepth = !!i4637[6]
  return i4636
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i4642 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i4643 = data
  request.r(i4643[0], i4643[1], 0, i4642, 'shader')
  i4642.pass = i4643[2]
  return i4642
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i4646 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i4647 = data
  i4646.name = i4647[0]
  i4646.type = i4647[1]
  i4646.value = new pc.Vec4( i4647[2], i4647[3], i4647[4], i4647[5] )
  i4646.textureValue = i4647[6]
  i4646.shaderPropertyFlag = i4647[7]
  return i4646
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i4648 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i4649 = data
  i4648.name = i4649[0]
  request.r(i4649[1], i4649[2], 0, i4648, 'texture')
  i4648.aabb = i4649[3]
  i4648.vertices = i4649[4]
  i4648.triangles = i4649[5]
  i4648.textureRect = UnityEngine.Rect.MinMaxRect(i4649[6], i4649[7], i4649[8], i4649[9])
  i4648.packedRect = UnityEngine.Rect.MinMaxRect(i4649[10], i4649[11], i4649[12], i4649[13])
  i4648.border = new pc.Vec4( i4649[14], i4649[15], i4649[16], i4649[17] )
  i4648.transparency = i4649[18]
  i4648.bounds = i4649[19]
  i4648.pixelsPerUnit = i4649[20]
  i4648.textureWidth = i4649[21]
  i4648.textureHeight = i4649[22]
  i4648.nativeSize = new pc.Vec2( i4649[23], i4649[24] )
  i4648.pivot = new pc.Vec2( i4649[25], i4649[26] )
  i4648.textureRectOffset = new pc.Vec2( i4649[27], i4649[28] )
  return i4648
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i4650 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i4651 = data
  i4650.name = i4651[0]
  return i4650
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i4652 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i4653 = data
  i4652.name = i4653[0]
  i4652.wrapMode = i4653[1]
  i4652.isLooping = !!i4653[2]
  i4652.length = i4653[3]
  var i4655 = i4653[4]
  var i4654 = []
  for(var i = 0; i < i4655.length; i += 1) {
    i4654.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i4655[i + 0]) );
  }
  i4652.curves = i4654
  var i4657 = i4653[5]
  var i4656 = []
  for(var i = 0; i < i4657.length; i += 1) {
    i4656.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i4657[i + 0]) );
  }
  i4652.events = i4656
  i4652.halfPrecision = !!i4653[6]
  i4652._frameRate = i4653[7]
  i4652.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i4653[8], i4652.localBounds)
  i4652.hasMuscleCurves = !!i4653[9]
  var i4659 = i4653[10]
  var i4658 = []
  for(var i = 0; i < i4659.length; i += 1) {
    i4658.push( i4659[i + 0] );
  }
  i4652.clipMuscleConstant = i4658
  i4652.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i4653[11], i4652.clipBindingConstant)
  return i4652
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i4662 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i4663 = data
  i4662.path = i4663[0]
  i4662.hash = i4663[1]
  i4662.componentType = i4663[2]
  i4662.property = i4663[3]
  i4662.keys = i4663[4]
  var i4665 = i4663[5]
  var i4664 = []
  for(var i = 0; i < i4665.length; i += 1) {
    i4664.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i4665[i + 0]) );
  }
  i4662.objectReferenceKeys = i4664
  return i4662
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i4668 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i4669 = data
  i4668.time = i4669[0]
  request.r(i4669[1], i4669[2], 0, i4668, 'value')
  return i4668
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i4672 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i4673 = data
  i4672.functionName = i4673[0]
  i4672.floatParameter = i4673[1]
  i4672.intParameter = i4673[2]
  i4672.stringParameter = i4673[3]
  request.r(i4673[4], i4673[5], 0, i4672, 'objectReferenceParameter')
  i4672.time = i4673[6]
  return i4672
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i4674 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i4675 = data
  i4674.center = new pc.Vec3( i4675[0], i4675[1], i4675[2] )
  i4674.extends = new pc.Vec3( i4675[3], i4675[4], i4675[5] )
  return i4674
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i4678 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i4679 = data
  var i4681 = i4679[0]
  var i4680 = []
  for(var i = 0; i < i4681.length; i += 1) {
    i4680.push( i4681[i + 0] );
  }
  i4678.genericBindings = i4680
  var i4683 = i4679[1]
  var i4682 = []
  for(var i = 0; i < i4683.length; i += 1) {
    i4682.push( i4683[i + 0] );
  }
  i4678.pptrCurveMapping = i4682
  return i4678
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i4684 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i4685 = data
  i4684.name = i4685[0]
  i4684.ascent = i4685[1]
  i4684.originalLineHeight = i4685[2]
  i4684.fontSize = i4685[3]
  var i4687 = i4685[4]
  var i4686 = []
  for(var i = 0; i < i4687.length; i += 1) {
    i4686.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i4687[i + 0]) );
  }
  i4684.characterInfo = i4686
  request.r(i4685[5], i4685[6], 0, i4684, 'texture')
  i4684.originalFontSize = i4685[7]
  return i4684
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i4690 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i4691 = data
  i4690.index = i4691[0]
  i4690.advance = i4691[1]
  i4690.bearing = i4691[2]
  i4690.glyphWidth = i4691[3]
  i4690.glyphHeight = i4691[4]
  i4690.minX = i4691[5]
  i4690.maxX = i4691[6]
  i4690.minY = i4691[7]
  i4690.maxY = i4691[8]
  i4690.uvBottomLeftX = i4691[9]
  i4690.uvBottomLeftY = i4691[10]
  i4690.uvBottomRightX = i4691[11]
  i4690.uvBottomRightY = i4691[12]
  i4690.uvTopLeftX = i4691[13]
  i4690.uvTopLeftY = i4691[14]
  i4690.uvTopRightX = i4691[15]
  i4690.uvTopRightY = i4691[16]
  return i4690
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i4692 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i4693 = data
  i4692.name = i4693[0]
  var i4695 = i4693[1]
  var i4694 = []
  for(var i = 0; i < i4695.length; i += 1) {
    i4694.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i4695[i + 0]) );
  }
  i4692.layers = i4694
  var i4697 = i4693[2]
  var i4696 = []
  for(var i = 0; i < i4697.length; i += 1) {
    i4696.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i4697[i + 0]) );
  }
  i4692.parameters = i4696
  i4692.animationClips = i4693[3]
  i4692.avatarUnsupported = i4693[4]
  return i4692
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i4700 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i4701 = data
  i4700.name = i4701[0]
  i4700.defaultWeight = i4701[1]
  i4700.blendingMode = i4701[2]
  i4700.avatarMask = i4701[3]
  i4700.syncedLayerIndex = i4701[4]
  i4700.syncedLayerAffectsTiming = !!i4701[5]
  i4700.syncedLayers = i4701[6]
  i4700.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i4701[7], i4700.stateMachine)
  return i4700
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i4702 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i4703 = data
  i4702.id = i4703[0]
  i4702.name = i4703[1]
  i4702.path = i4703[2]
  var i4705 = i4703[3]
  var i4704 = []
  for(var i = 0; i < i4705.length; i += 1) {
    i4704.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i4705[i + 0]) );
  }
  i4702.states = i4704
  var i4707 = i4703[4]
  var i4706 = []
  for(var i = 0; i < i4707.length; i += 1) {
    i4706.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i4707[i + 0]) );
  }
  i4702.machines = i4706
  var i4709 = i4703[5]
  var i4708 = []
  for(var i = 0; i < i4709.length; i += 1) {
    i4708.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i4709[i + 0]) );
  }
  i4702.entryStateTransitions = i4708
  var i4711 = i4703[6]
  var i4710 = []
  for(var i = 0; i < i4711.length; i += 1) {
    i4710.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i4711[i + 0]) );
  }
  i4702.exitStateTransitions = i4710
  var i4713 = i4703[7]
  var i4712 = []
  for(var i = 0; i < i4713.length; i += 1) {
    i4712.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i4713[i + 0]) );
  }
  i4702.anyStateTransitions = i4712
  i4702.defaultStateId = i4703[8]
  return i4702
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i4716 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i4717 = data
  i4716.id = i4717[0]
  i4716.name = i4717[1]
  i4716.cycleOffset = i4717[2]
  i4716.cycleOffsetParameter = i4717[3]
  i4716.cycleOffsetParameterActive = !!i4717[4]
  i4716.mirror = !!i4717[5]
  i4716.mirrorParameter = i4717[6]
  i4716.mirrorParameterActive = !!i4717[7]
  i4716.motionId = i4717[8]
  i4716.nameHash = i4717[9]
  i4716.fullPathHash = i4717[10]
  i4716.speed = i4717[11]
  i4716.speedParameter = i4717[12]
  i4716.speedParameterActive = !!i4717[13]
  i4716.tag = i4717[14]
  i4716.tagHash = i4717[15]
  i4716.writeDefaultValues = !!i4717[16]
  var i4719 = i4717[17]
  var i4718 = []
  for(var i = 0; i < i4719.length; i += 2) {
  request.r(i4719[i + 0], i4719[i + 1], 2, i4718, '')
  }
  i4716.behaviours = i4718
  var i4721 = i4717[18]
  var i4720 = []
  for(var i = 0; i < i4721.length; i += 1) {
    i4720.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i4721[i + 0]) );
  }
  i4716.transitions = i4720
  return i4716
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i4726 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i4727 = data
  i4726.fullPath = i4727[0]
  i4726.canTransitionToSelf = !!i4727[1]
  i4726.duration = i4727[2]
  i4726.exitTime = i4727[3]
  i4726.hasExitTime = !!i4727[4]
  i4726.hasFixedDuration = !!i4727[5]
  i4726.interruptionSource = i4727[6]
  i4726.offset = i4727[7]
  i4726.orderedInterruption = !!i4727[8]
  i4726.destinationStateId = i4727[9]
  i4726.isExit = !!i4727[10]
  i4726.mute = !!i4727[11]
  i4726.solo = !!i4727[12]
  var i4729 = i4727[13]
  var i4728 = []
  for(var i = 0; i < i4729.length; i += 1) {
    i4728.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i4729[i + 0]) );
  }
  i4726.conditions = i4728
  return i4726
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i4734 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i4735 = data
  i4734.destinationStateId = i4735[0]
  i4734.isExit = !!i4735[1]
  i4734.mute = !!i4735[2]
  i4734.solo = !!i4735[3]
  var i4737 = i4735[4]
  var i4736 = []
  for(var i = 0; i < i4737.length; i += 1) {
    i4736.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i4737[i + 0]) );
  }
  i4734.conditions = i4736
  return i4734
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i4740 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i4741 = data
  i4740.defaultBool = !!i4741[0]
  i4740.defaultFloat = i4741[1]
  i4740.defaultInt = i4741[2]
  i4740.name = i4741[3]
  i4740.nameHash = i4741[4]
  i4740.type = i4741[5]
  return i4740
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i4742 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i4743 = data
  i4742.name = i4743[0]
  i4742.bytes64 = i4743[1]
  i4742.data = i4743[2]
  return i4742
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i4744 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i4745 = data
  i4744.normalStyle = i4745[0]
  i4744.normalSpacingOffset = i4745[1]
  i4744.boldStyle = i4745[2]
  i4744.boldSpacing = i4745[3]
  i4744.italicStyle = i4745[4]
  i4744.tabSize = i4745[5]
  request.r(i4745[6], i4745[7], 0, i4744, 'atlas')
  i4744.m_SourceFontFileGUID = i4745[8]
  i4744.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i4745[9], i4744.m_CreationSettings)
  request.r(i4745[10], i4745[11], 0, i4744, 'm_SourceFontFile')
  i4744.m_SourceFontFilePath = i4745[12]
  i4744.m_AtlasPopulationMode = i4745[13]
  i4744.InternalDynamicOS = !!i4745[14]
  var i4747 = i4745[15]
  var i4746 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i4747.length; i += 1) {
    i4746.add(request.d('UnityEngine.TextCore.Glyph', i4747[i + 0]));
  }
  i4744.m_GlyphTable = i4746
  var i4749 = i4745[16]
  var i4748 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i4749.length; i += 1) {
    i4748.add(request.d('TMPro.TMP_Character', i4749[i + 0]));
  }
  i4744.m_CharacterTable = i4748
  var i4751 = i4745[17]
  var i4750 = []
  for(var i = 0; i < i4751.length; i += 2) {
  request.r(i4751[i + 0], i4751[i + 1], 2, i4750, '')
  }
  i4744.m_AtlasTextures = i4750
  i4744.m_AtlasTextureIndex = i4745[18]
  i4744.m_IsMultiAtlasTexturesEnabled = !!i4745[19]
  i4744.m_GetFontFeatures = !!i4745[20]
  i4744.m_ClearDynamicDataOnBuild = !!i4745[21]
  i4744.m_AtlasWidth = i4745[22]
  i4744.m_AtlasHeight = i4745[23]
  i4744.m_AtlasPadding = i4745[24]
  i4744.m_AtlasRenderMode = i4745[25]
  var i4753 = i4745[26]
  var i4752 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i4753.length; i += 1) {
    i4752.add(request.d('UnityEngine.TextCore.GlyphRect', i4753[i + 0]));
  }
  i4744.m_UsedGlyphRects = i4752
  var i4755 = i4745[27]
  var i4754 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i4755.length; i += 1) {
    i4754.add(request.d('UnityEngine.TextCore.GlyphRect', i4755[i + 0]));
  }
  i4744.m_FreeGlyphRects = i4754
  i4744.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i4745[28], i4744.m_FontFeatureTable)
  i4744.m_ShouldReimportFontFeatures = !!i4745[29]
  var i4757 = i4745[30]
  var i4756 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i4757.length; i += 2) {
  request.r(i4757[i + 0], i4757[i + 1], 1, i4756, '')
  }
  i4744.m_FallbackFontAssetTable = i4756
  var i4759 = i4745[31]
  var i4758 = []
  for(var i = 0; i < i4759.length; i += 1) {
    i4758.push( request.d('TMPro.TMP_FontWeightPair', i4759[i + 0]) );
  }
  i4744.m_FontWeightTable = i4758
  var i4761 = i4745[32]
  var i4760 = []
  for(var i = 0; i < i4761.length; i += 1) {
    i4760.push( request.d('TMPro.TMP_FontWeightPair', i4761[i + 0]) );
  }
  i4744.fontWeights = i4760
  i4744.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i4745[33], i4744.m_fontInfo)
  var i4763 = i4745[34]
  var i4762 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i4763.length; i += 1) {
    i4762.add(request.d('TMPro.TMP_Glyph', i4763[i + 0]));
  }
  i4744.m_glyphInfoList = i4762
  i4744.m_KerningTable = request.d('TMPro.KerningTable', i4745[35], i4744.m_KerningTable)
  var i4765 = i4745[36]
  var i4764 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i4765.length; i += 2) {
  request.r(i4765[i + 0], i4765[i + 1], 1, i4764, '')
  }
  i4744.fallbackFontAssets = i4764
  i4744.m_Version = i4745[37]
  i4744.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i4745[38], i4744.m_FaceInfo)
  request.r(i4745[39], i4745[40], 0, i4744, 'm_Material')
  return i4744
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i4766 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i4767 = data
  i4766.sourceFontFileName = i4767[0]
  i4766.sourceFontFileGUID = i4767[1]
  i4766.faceIndex = i4767[2]
  i4766.pointSizeSamplingMode = i4767[3]
  i4766.pointSize = i4767[4]
  i4766.padding = i4767[5]
  i4766.paddingMode = i4767[6]
  i4766.packingMode = i4767[7]
  i4766.atlasWidth = i4767[8]
  i4766.atlasHeight = i4767[9]
  i4766.characterSetSelectionMode = i4767[10]
  i4766.characterSequence = i4767[11]
  i4766.referencedFontAssetGUID = i4767[12]
  i4766.referencedTextAssetGUID = i4767[13]
  i4766.fontStyle = i4767[14]
  i4766.fontStyleModifier = i4767[15]
  i4766.renderMode = i4767[16]
  i4766.includeFontFeatures = !!i4767[17]
  return i4766
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i4770 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i4771 = data
  i4770.m_Index = i4771[0]
  i4770.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i4771[1], i4770.m_Metrics)
  i4770.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i4771[2], i4770.m_GlyphRect)
  i4770.m_Scale = i4771[3]
  i4770.m_AtlasIndex = i4771[4]
  i4770.m_ClassDefinitionType = i4771[5]
  return i4770
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i4774 = root || request.c( 'TMPro.TMP_Character' )
  var i4775 = data
  i4774.m_ElementType = i4775[0]
  i4774.m_Unicode = i4775[1]
  i4774.m_GlyphIndex = i4775[2]
  i4774.m_Scale = i4775[3]
  return i4774
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i4780 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i4781 = data
  i4780.m_X = i4781[0]
  i4780.m_Y = i4781[1]
  i4780.m_Width = i4781[2]
  i4780.m_Height = i4781[3]
  return i4780
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i4782 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i4783 = data
  var i4785 = i4783[0]
  var i4784 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i4785.length; i += 1) {
    i4784.add(request.d('TMPro.MultipleSubstitutionRecord', i4785[i + 0]));
  }
  i4782.m_MultipleSubstitutionRecords = i4784
  var i4787 = i4783[1]
  var i4786 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i4787.length; i += 1) {
    i4786.add(request.d('TMPro.LigatureSubstitutionRecord', i4787[i + 0]));
  }
  i4782.m_LigatureSubstitutionRecords = i4786
  var i4789 = i4783[2]
  var i4788 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i4789.length; i += 1) {
    i4788.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i4789[i + 0]));
  }
  i4782.m_GlyphPairAdjustmentRecords = i4788
  var i4791 = i4783[3]
  var i4790 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i4791.length; i += 1) {
    i4790.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i4791[i + 0]));
  }
  i4782.m_MarkToBaseAdjustmentRecords = i4790
  var i4793 = i4783[4]
  var i4792 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i4793.length; i += 1) {
    i4792.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i4793[i + 0]));
  }
  i4782.m_MarkToMarkAdjustmentRecords = i4792
  return i4782
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i4796 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i4797 = data
  i4796.m_TargetGlyphID = i4797[0]
  i4796.m_SubstituteGlyphIDs = i4797[1]
  return i4796
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i4800 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i4801 = data
  i4800.m_ComponentGlyphIDs = i4801[0]
  i4800.m_LigatureGlyphID = i4801[1]
  return i4800
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i4804 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i4805 = data
  i4804.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i4805[0], i4804.m_FirstAdjustmentRecord)
  i4804.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i4805[1], i4804.m_SecondAdjustmentRecord)
  i4804.m_FeatureLookupFlags = i4805[2]
  return i4804
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i4806 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i4807 = data
  i4806.m_GlyphIndex = i4807[0]
  i4806.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i4807[1], i4806.m_GlyphValueRecord)
  return i4806
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i4808 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i4809 = data
  i4808.m_XPlacement = i4809[0]
  i4808.m_YPlacement = i4809[1]
  i4808.m_XAdvance = i4809[2]
  i4808.m_YAdvance = i4809[3]
  return i4808
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i4812 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i4813 = data
  i4812.m_BaseGlyphID = i4813[0]
  i4812.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i4813[1], i4812.m_BaseGlyphAnchorPoint)
  i4812.m_MarkGlyphID = i4813[2]
  i4812.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i4813[3], i4812.m_MarkPositionAdjustment)
  return i4812
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i4816 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i4817 = data
  i4816.m_BaseMarkGlyphID = i4817[0]
  i4816.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i4817[1], i4816.m_BaseMarkGlyphAnchorPoint)
  i4816.m_CombiningMarkGlyphID = i4817[2]
  i4816.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i4817[3], i4816.m_CombiningMarkPositionAdjustment)
  return i4816
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i4822 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i4823 = data
  request.r(i4823[0], i4823[1], 0, i4822, 'regularTypeface')
  request.r(i4823[2], i4823[3], 0, i4822, 'italicTypeface')
  return i4822
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i4824 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i4825 = data
  i4824.Name = i4825[0]
  i4824.PointSize = i4825[1]
  i4824.Scale = i4825[2]
  i4824.CharacterCount = i4825[3]
  i4824.LineHeight = i4825[4]
  i4824.Baseline = i4825[5]
  i4824.Ascender = i4825[6]
  i4824.CapHeight = i4825[7]
  i4824.Descender = i4825[8]
  i4824.CenterLine = i4825[9]
  i4824.SuperscriptOffset = i4825[10]
  i4824.SubscriptOffset = i4825[11]
  i4824.SubSize = i4825[12]
  i4824.Underline = i4825[13]
  i4824.UnderlineThickness = i4825[14]
  i4824.strikethrough = i4825[15]
  i4824.strikethroughThickness = i4825[16]
  i4824.TabWidth = i4825[17]
  i4824.Padding = i4825[18]
  i4824.AtlasWidth = i4825[19]
  i4824.AtlasHeight = i4825[20]
  return i4824
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i4828 = root || request.c( 'TMPro.TMP_Glyph' )
  var i4829 = data
  i4828.id = i4829[0]
  i4828.x = i4829[1]
  i4828.y = i4829[2]
  i4828.width = i4829[3]
  i4828.height = i4829[4]
  i4828.xOffset = i4829[5]
  i4828.yOffset = i4829[6]
  i4828.xAdvance = i4829[7]
  i4828.scale = i4829[8]
  return i4828
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i4830 = root || request.c( 'TMPro.KerningTable' )
  var i4831 = data
  var i4833 = i4831[0]
  var i4832 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i4833.length; i += 1) {
    i4832.add(request.d('TMPro.KerningPair', i4833[i + 0]));
  }
  i4830.kerningPairs = i4832
  return i4830
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i4836 = root || request.c( 'TMPro.KerningPair' )
  var i4837 = data
  i4836.xOffset = i4837[0]
  i4836.m_FirstGlyph = i4837[1]
  i4836.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i4837[2], i4836.m_FirstGlyphAdjustments)
  i4836.m_SecondGlyph = i4837[3]
  i4836.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i4837[4], i4836.m_SecondGlyphAdjustments)
  i4836.m_IgnoreSpacingAdjustments = !!i4837[5]
  return i4836
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i4838 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i4839 = data
  i4838.m_FaceIndex = i4839[0]
  i4838.m_FamilyName = i4839[1]
  i4838.m_StyleName = i4839[2]
  i4838.m_PointSize = i4839[3]
  i4838.m_Scale = i4839[4]
  i4838.m_UnitsPerEM = i4839[5]
  i4838.m_LineHeight = i4839[6]
  i4838.m_AscentLine = i4839[7]
  i4838.m_CapLine = i4839[8]
  i4838.m_MeanLine = i4839[9]
  i4838.m_Baseline = i4839[10]
  i4838.m_DescentLine = i4839[11]
  i4838.m_SuperscriptOffset = i4839[12]
  i4838.m_SuperscriptSize = i4839[13]
  i4838.m_SubscriptOffset = i4839[14]
  i4838.m_SubscriptSize = i4839[15]
  i4838.m_UnderlineOffset = i4839[16]
  i4838.m_UnderlineThickness = i4839[17]
  i4838.m_StrikethroughOffset = i4839[18]
  i4838.m_StrikethroughThickness = i4839[19]
  i4838.m_TabWidth = i4839[20]
  return i4838
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i4840 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i4841 = data
  i4840.useSafeMode = !!i4841[0]
  i4840.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i4841[1], i4840.safeModeOptions)
  i4840.timeScale = i4841[2]
  i4840.unscaledTimeScale = i4841[3]
  i4840.useSmoothDeltaTime = !!i4841[4]
  i4840.maxSmoothUnscaledTime = i4841[5]
  i4840.rewindCallbackMode = i4841[6]
  i4840.showUnityEditorReport = !!i4841[7]
  i4840.logBehaviour = i4841[8]
  i4840.drawGizmos = !!i4841[9]
  i4840.defaultRecyclable = !!i4841[10]
  i4840.defaultAutoPlay = i4841[11]
  i4840.defaultUpdateType = i4841[12]
  i4840.defaultTimeScaleIndependent = !!i4841[13]
  i4840.defaultEaseType = i4841[14]
  i4840.defaultEaseOvershootOrAmplitude = i4841[15]
  i4840.defaultEasePeriod = i4841[16]
  i4840.defaultAutoKill = !!i4841[17]
  i4840.defaultLoopType = i4841[18]
  i4840.debugMode = !!i4841[19]
  i4840.debugStoreTargetId = !!i4841[20]
  i4840.showPreviewPanel = !!i4841[21]
  i4840.storeSettingsLocation = i4841[22]
  i4840.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i4841[23], i4840.modules)
  i4840.createASMDEF = !!i4841[24]
  i4840.showPlayingTweens = !!i4841[25]
  i4840.showPausedTweens = !!i4841[26]
  return i4840
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i4842 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i4843 = data
  i4842.logBehaviour = i4843[0]
  i4842.nestedTweenFailureBehaviour = i4843[1]
  return i4842
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i4844 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i4845 = data
  i4844.showPanel = !!i4845[0]
  i4844.audioEnabled = !!i4845[1]
  i4844.physicsEnabled = !!i4845[2]
  i4844.physics2DEnabled = !!i4845[3]
  i4844.spriteEnabled = !!i4845[4]
  i4844.uiEnabled = !!i4845[5]
  i4844.uiToolkitEnabled = !!i4845[6]
  i4844.textMeshProEnabled = !!i4845[7]
  i4844.tk2DEnabled = !!i4845[8]
  i4844.deAudioEnabled = !!i4845[9]
  i4844.deUnityExtendedEnabled = !!i4845[10]
  i4844.epoOutlineEnabled = !!i4845[11]
  return i4844
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i4846 = root || request.c( 'TMPro.TMP_Settings' )
  var i4847 = data
  i4846.assetVersion = i4847[0]
  i4846.m_TextWrappingMode = i4847[1]
  i4846.m_enableKerning = !!i4847[2]
  var i4849 = i4847[3]
  var i4848 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i4849.length; i += 1) {
    i4848.add(i4849[i + 0]);
  }
  i4846.m_ActiveFontFeatures = i4848
  i4846.m_enableExtraPadding = !!i4847[4]
  i4846.m_enableTintAllSprites = !!i4847[5]
  i4846.m_enableParseEscapeCharacters = !!i4847[6]
  i4846.m_EnableRaycastTarget = !!i4847[7]
  i4846.m_GetFontFeaturesAtRuntime = !!i4847[8]
  i4846.m_missingGlyphCharacter = i4847[9]
  i4846.m_ClearDynamicDataOnBuild = !!i4847[10]
  i4846.m_warningsDisabled = !!i4847[11]
  request.r(i4847[12], i4847[13], 0, i4846, 'm_defaultFontAsset')
  i4846.m_defaultFontAssetPath = i4847[14]
  i4846.m_defaultFontSize = i4847[15]
  i4846.m_defaultAutoSizeMinRatio = i4847[16]
  i4846.m_defaultAutoSizeMaxRatio = i4847[17]
  i4846.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i4847[18], i4847[19] )
  i4846.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i4847[20], i4847[21] )
  i4846.m_autoSizeTextContainer = !!i4847[22]
  i4846.m_IsTextObjectScaleStatic = !!i4847[23]
  var i4851 = i4847[24]
  var i4850 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i4851.length; i += 2) {
  request.r(i4851[i + 0], i4851[i + 1], 1, i4850, '')
  }
  i4846.m_fallbackFontAssets = i4850
  i4846.m_matchMaterialPreset = !!i4847[25]
  i4846.m_HideSubTextObjects = !!i4847[26]
  request.r(i4847[27], i4847[28], 0, i4846, 'm_defaultSpriteAsset')
  i4846.m_defaultSpriteAssetPath = i4847[29]
  i4846.m_enableEmojiSupport = !!i4847[30]
  i4846.m_MissingCharacterSpriteUnicode = i4847[31]
  var i4853 = i4847[32]
  var i4852 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i4853.length; i += 2) {
  request.r(i4853[i + 0], i4853[i + 1], 1, i4852, '')
  }
  i4846.m_EmojiFallbackTextAssets = i4852
  i4846.m_defaultColorGradientPresetsPath = i4847[33]
  request.r(i4847[34], i4847[35], 0, i4846, 'm_defaultStyleSheet')
  i4846.m_StyleSheetsResourcePath = i4847[36]
  request.r(i4847[37], i4847[38], 0, i4846, 'm_leadingCharacters')
  request.r(i4847[39], i4847[40], 0, i4846, 'm_followingCharacters')
  i4846.m_UseModernHangulLineBreakingRules = !!i4847[41]
  return i4846
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i4856 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i4857 = data
  request.r(i4857[0], i4857[1], 0, i4856, 'spriteSheet')
  var i4859 = i4857[2]
  var i4858 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i4859.length; i += 1) {
    i4858.add(request.d('TMPro.TMP_Sprite', i4859[i + 0]));
  }
  i4856.spriteInfoList = i4858
  var i4861 = i4857[3]
  var i4860 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i4861.length; i += 2) {
  request.r(i4861[i + 0], i4861[i + 1], 1, i4860, '')
  }
  i4856.fallbackSpriteAssets = i4860
  var i4863 = i4857[4]
  var i4862 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i4863.length; i += 1) {
    i4862.add(request.d('TMPro.TMP_SpriteCharacter', i4863[i + 0]));
  }
  i4856.m_SpriteCharacterTable = i4862
  var i4865 = i4857[5]
  var i4864 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i4865.length; i += 1) {
    i4864.add(request.d('TMPro.TMP_SpriteGlyph', i4865[i + 0]));
  }
  i4856.m_GlyphTable = i4864
  i4856.m_Version = i4857[6]
  i4856.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i4857[7], i4856.m_FaceInfo)
  request.r(i4857[8], i4857[9], 0, i4856, 'm_Material')
  return i4856
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i4868 = root || request.c( 'TMPro.TMP_Sprite' )
  var i4869 = data
  i4868.name = i4869[0]
  i4868.hashCode = i4869[1]
  i4868.unicode = i4869[2]
  i4868.pivot = new pc.Vec2( i4869[3], i4869[4] )
  request.r(i4869[5], i4869[6], 0, i4868, 'sprite')
  i4868.id = i4869[7]
  i4868.x = i4869[8]
  i4868.y = i4869[9]
  i4868.width = i4869[10]
  i4868.height = i4869[11]
  i4868.xOffset = i4869[12]
  i4868.yOffset = i4869[13]
  i4868.xAdvance = i4869[14]
  i4868.scale = i4869[15]
  return i4868
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i4874 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i4875 = data
  i4874.m_Name = i4875[0]
  i4874.m_ElementType = i4875[1]
  i4874.m_Unicode = i4875[2]
  i4874.m_GlyphIndex = i4875[3]
  i4874.m_Scale = i4875[4]
  return i4874
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i4878 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i4879 = data
  request.r(i4879[0], i4879[1], 0, i4878, 'sprite')
  i4878.m_Index = i4879[2]
  i4878.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i4879[3], i4878.m_Metrics)
  i4878.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i4879[4], i4878.m_GlyphRect)
  i4878.m_Scale = i4879[5]
  i4878.m_AtlasIndex = i4879[6]
  i4878.m_ClassDefinitionType = i4879[7]
  return i4878
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i4880 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i4881 = data
  i4880.m_Width = i4881[0]
  i4880.m_Height = i4881[1]
  i4880.m_HorizontalBearingX = i4881[2]
  i4880.m_HorizontalBearingY = i4881[3]
  i4880.m_HorizontalAdvance = i4881[4]
  return i4880
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i4882 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i4883 = data
  var i4885 = i4883[0]
  var i4884 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i4885.length; i += 1) {
    i4884.add(request.d('TMPro.TMP_Style', i4885[i + 0]));
  }
  i4882.m_StyleList = i4884
  return i4882
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i4888 = root || request.c( 'TMPro.TMP_Style' )
  var i4889 = data
  i4888.m_Name = i4889[0]
  i4888.m_HashCode = i4889[1]
  i4888.m_OpeningDefinition = i4889[2]
  i4888.m_ClosingDefinition = i4889[3]
  i4888.m_OpeningTagArray = i4889[4]
  i4888.m_ClosingTagArray = i4889[5]
  return i4888
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i4890 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i4891 = data
  var i4893 = i4891[0]
  var i4892 = []
  for(var i = 0; i < i4893.length; i += 1) {
    i4892.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i4893[i + 0]) );
  }
  i4890.files = i4892
  i4890.componentToPrefabIds = i4891[1]
  return i4890
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i4896 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i4897 = data
  i4896.path = i4897[0]
  request.r(i4897[1], i4897[2], 0, i4896, 'unityObject')
  return i4896
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i4898 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i4899 = data
  var i4901 = i4899[0]
  var i4900 = []
  for(var i = 0; i < i4901.length; i += 1) {
    i4900.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i4901[i + 0]) );
  }
  i4898.scriptsExecutionOrder = i4900
  var i4903 = i4899[1]
  var i4902 = []
  for(var i = 0; i < i4903.length; i += 1) {
    i4902.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i4903[i + 0]) );
  }
  i4898.sortingLayers = i4902
  var i4905 = i4899[2]
  var i4904 = []
  for(var i = 0; i < i4905.length; i += 1) {
    i4904.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i4905[i + 0]) );
  }
  i4898.cullingLayers = i4904
  i4898.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i4899[3], i4898.timeSettings)
  i4898.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i4899[4], i4898.physicsSettings)
  i4898.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i4899[5], i4898.physics2DSettings)
  i4898.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i4899[6], i4898.qualitySettings)
  i4898.enableRealtimeShadows = !!i4899[7]
  i4898.enableAutoInstancing = !!i4899[8]
  i4898.enableStaticBatching = !!i4899[9]
  i4898.enableDynamicBatching = !!i4899[10]
  i4898.lightmapEncodingQuality = i4899[11]
  i4898.desiredColorSpace = i4899[12]
  var i4907 = i4899[13]
  var i4906 = []
  for(var i = 0; i < i4907.length; i += 1) {
    i4906.push( i4907[i + 0] );
  }
  i4898.allTags = i4906
  return i4898
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i4910 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i4911 = data
  i4910.name = i4911[0]
  i4910.value = i4911[1]
  return i4910
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i4914 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i4915 = data
  i4914.id = i4915[0]
  i4914.name = i4915[1]
  i4914.value = i4915[2]
  return i4914
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i4918 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i4919 = data
  i4918.id = i4919[0]
  i4918.name = i4919[1]
  return i4918
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i4920 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i4921 = data
  i4920.fixedDeltaTime = i4921[0]
  i4920.maximumDeltaTime = i4921[1]
  i4920.timeScale = i4921[2]
  i4920.maximumParticleTimestep = i4921[3]
  return i4920
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i4922 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i4923 = data
  i4922.gravity = new pc.Vec3( i4923[0], i4923[1], i4923[2] )
  i4922.defaultSolverIterations = i4923[3]
  i4922.bounceThreshold = i4923[4]
  i4922.autoSyncTransforms = !!i4923[5]
  i4922.autoSimulation = !!i4923[6]
  var i4925 = i4923[7]
  var i4924 = []
  for(var i = 0; i < i4925.length; i += 1) {
    i4924.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i4925[i + 0]) );
  }
  i4922.collisionMatrix = i4924
  return i4922
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i4928 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i4929 = data
  i4928.enabled = !!i4929[0]
  i4928.layerId = i4929[1]
  i4928.otherLayerId = i4929[2]
  return i4928
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i4930 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i4931 = data
  request.r(i4931[0], i4931[1], 0, i4930, 'material')
  i4930.gravity = new pc.Vec2( i4931[2], i4931[3] )
  i4930.positionIterations = i4931[4]
  i4930.velocityIterations = i4931[5]
  i4930.velocityThreshold = i4931[6]
  i4930.maxLinearCorrection = i4931[7]
  i4930.maxAngularCorrection = i4931[8]
  i4930.maxTranslationSpeed = i4931[9]
  i4930.maxRotationSpeed = i4931[10]
  i4930.baumgarteScale = i4931[11]
  i4930.baumgarteTOIScale = i4931[12]
  i4930.timeToSleep = i4931[13]
  i4930.linearSleepTolerance = i4931[14]
  i4930.angularSleepTolerance = i4931[15]
  i4930.defaultContactOffset = i4931[16]
  i4930.autoSimulation = !!i4931[17]
  i4930.queriesHitTriggers = !!i4931[18]
  i4930.queriesStartInColliders = !!i4931[19]
  i4930.callbacksOnDisable = !!i4931[20]
  i4930.reuseCollisionCallbacks = !!i4931[21]
  i4930.autoSyncTransforms = !!i4931[22]
  var i4933 = i4931[23]
  var i4932 = []
  for(var i = 0; i < i4933.length; i += 1) {
    i4932.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i4933[i + 0]) );
  }
  i4930.collisionMatrix = i4932
  return i4930
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i4936 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i4937 = data
  i4936.enabled = !!i4937[0]
  i4936.layerId = i4937[1]
  i4936.otherLayerId = i4937[2]
  return i4936
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i4938 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i4939 = data
  var i4941 = i4939[0]
  var i4940 = []
  for(var i = 0; i < i4941.length; i += 1) {
    i4940.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i4941[i + 0]) );
  }
  i4938.qualityLevels = i4940
  var i4943 = i4939[1]
  var i4942 = []
  for(var i = 0; i < i4943.length; i += 1) {
    i4942.push( i4943[i + 0] );
  }
  i4938.names = i4942
  i4938.shadows = i4939[2]
  i4938.anisotropicFiltering = i4939[3]
  i4938.antiAliasing = i4939[4]
  i4938.lodBias = i4939[5]
  i4938.shadowCascades = i4939[6]
  i4938.shadowDistance = i4939[7]
  i4938.shadowmaskMode = i4939[8]
  i4938.shadowProjection = i4939[9]
  i4938.shadowResolution = i4939[10]
  i4938.softParticles = !!i4939[11]
  i4938.softVegetation = !!i4939[12]
  i4938.activeColorSpace = i4939[13]
  i4938.desiredColorSpace = i4939[14]
  i4938.masterTextureLimit = i4939[15]
  i4938.maxQueuedFrames = i4939[16]
  i4938.particleRaycastBudget = i4939[17]
  i4938.pixelLightCount = i4939[18]
  i4938.realtimeReflectionProbes = !!i4939[19]
  i4938.shadowCascade2Split = i4939[20]
  i4938.shadowCascade4Split = new pc.Vec3( i4939[21], i4939[22], i4939[23] )
  i4938.streamingMipmapsActive = !!i4939[24]
  i4938.vSyncCount = i4939[25]
  i4938.asyncUploadBufferSize = i4939[26]
  i4938.asyncUploadTimeSlice = i4939[27]
  i4938.billboardsFaceCameraPosition = !!i4939[28]
  i4938.shadowNearPlaneOffset = i4939[29]
  i4938.streamingMipmapsMemoryBudget = i4939[30]
  i4938.maximumLODLevel = i4939[31]
  i4938.streamingMipmapsAddAllCameras = !!i4939[32]
  i4938.streamingMipmapsMaxLevelReduction = i4939[33]
  i4938.streamingMipmapsRenderersPerFrame = i4939[34]
  i4938.resolutionScalingFixedDPIFactor = i4939[35]
  i4938.streamingMipmapsMaxFileIORequests = i4939[36]
  i4938.currentQualityLevel = i4939[37]
  return i4938
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i4948 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i4949 = data
  i4948.weight = i4949[0]
  i4948.vertices = i4949[1]
  i4948.normals = i4949[2]
  i4948.tangents = i4949[3]
  return i4948
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i4952 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i4953 = data
  i4952.mode = i4953[0]
  i4952.parameter = i4953[1]
  i4952.threshold = i4953[2]
  return i4952
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i4954 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i4955 = data
  i4954.m_XCoordinate = i4955[0]
  i4954.m_YCoordinate = i4955[1]
  return i4954
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i4956 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i4957 = data
  i4956.m_XPositionAdjustment = i4957[0]
  i4956.m_YPositionAdjustment = i4957[1]
  return i4956
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i4958 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i4959 = data
  i4958.xPlacement = i4959[0]
  i4958.yPlacement = i4959[1]
  i4958.xAdvance = i4959[2]
  i4958.yAdvance = i4959[3]
  return i4958
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

Deserializers.creativeName = "Ply2_Fix";

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

Deserializers.buildID = "24afd1d3-266b-44ad-9e49-e718aafea170";

Deserializers.runtimeInitializeOnLoadInfos = [[["Unity","Services","Core","Internal","UnityServicesInitializer","EnableServicesInitializationAsync"],["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["DG","Tweening","DOTween","RuntimeOnLoad"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["Unity","Services","Core","Registration","CorePackageInitializer","InitializeOnLoad"],["Unity","Services","Core","Internal","TaskAsyncOperation","SetScheduler"],["Unity","Services","Core","Environments","Client","Scheduler","EngineStateHelper","Init"],["Unity","Services","Core","Environments","Client","Scheduler","ThreadHelper","Init"],["Ua2CoreInitializeCallback","Register"],["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["Unity","AI","Navigation","NavMeshLink","ClearTrackedList"],["Unity","AI","Navigation","NavMeshSurface","ClearNavMeshSurfaces"],["Unity","AI","Navigation","NavMeshModifierVolume","ClearNavMeshModifiers"],["Unity","AI","Navigation","NavMeshModifier","ClearNavMeshModifiers"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["Unity","Services","Core","Internal","UnityServicesInitializer","CreateStaticInstance"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[["Unity","Services","Core","Environments","Client","Http","JsonHelpers","RegisterTypesForAOT"]],[["Unity","Services","Core","UnityThreadUtils","CaptureUnityThreadInfo"],["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

