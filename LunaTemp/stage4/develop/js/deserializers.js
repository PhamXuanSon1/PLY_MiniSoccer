var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i242 = root || request.c( 'UnityEngine.JointSpring' )
  var i243 = data
  i242.spring = i243[0]
  i242.damper = i243[1]
  i242.targetPosition = i243[2]
  return i242
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i244 = root || request.c( 'UnityEngine.JointMotor' )
  var i245 = data
  i244.m_TargetVelocity = i245[0]
  i244.m_Force = i245[1]
  i244.m_FreeSpin = i245[2]
  return i244
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i246 = root || request.c( 'UnityEngine.JointLimits' )
  var i247 = data
  i246.m_Min = i247[0]
  i246.m_Max = i247[1]
  i246.m_Bounciness = i247[2]
  i246.m_BounceMinVelocity = i247[3]
  i246.m_ContactDistance = i247[4]
  i246.minBounce = i247[5]
  i246.maxBounce = i247[6]
  return i246
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i248 = root || request.c( 'UnityEngine.JointDrive' )
  var i249 = data
  i248.m_PositionSpring = i249[0]
  i248.m_PositionDamper = i249[1]
  i248.m_MaximumForce = i249[2]
  i248.m_UseAcceleration = i249[3]
  return i248
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i250 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i251 = data
  i250.m_Spring = i251[0]
  i250.m_Damper = i251[1]
  return i250
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i252 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i253 = data
  i252.m_Limit = i253[0]
  i252.m_Bounciness = i253[1]
  i252.m_ContactDistance = i253[2]
  return i252
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i254 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i255 = data
  i254.m_ExtremumSlip = i255[0]
  i254.m_ExtremumValue = i255[1]
  i254.m_AsymptoteSlip = i255[2]
  i254.m_AsymptoteValue = i255[3]
  i254.m_Stiffness = i255[4]
  return i254
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i256 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i257 = data
  i256.m_LowerAngle = i257[0]
  i256.m_UpperAngle = i257[1]
  return i256
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i258 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i259 = data
  i258.m_MotorSpeed = i259[0]
  i258.m_MaximumMotorTorque = i259[1]
  return i258
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i260 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i261 = data
  i260.m_DampingRatio = i261[0]
  i260.m_Frequency = i261[1]
  i260.m_Angle = i261[2]
  return i260
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i262 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i263 = data
  i262.m_LowerTranslation = i263[0]
  i262.m_UpperTranslation = i263[1]
  return i262
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i264 = root || new pc.UnityMaterial()
  var i265 = data
  i264.name = i265[0]
  request.r(i265[1], i265[2], 0, i264, 'shader')
  i264.renderQueue = i265[3]
  i264.enableInstancing = !!i265[4]
  var i267 = i265[5]
  var i266 = []
  for(var i = 0; i < i267.length; i += 1) {
    i266.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i267[i + 0]) );
  }
  i264.floatParameters = i266
  var i269 = i265[6]
  var i268 = []
  for(var i = 0; i < i269.length; i += 1) {
    i268.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i269[i + 0]) );
  }
  i264.colorParameters = i268
  var i271 = i265[7]
  var i270 = []
  for(var i = 0; i < i271.length; i += 1) {
    i270.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i271[i + 0]) );
  }
  i264.vectorParameters = i270
  var i273 = i265[8]
  var i272 = []
  for(var i = 0; i < i273.length; i += 1) {
    i272.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i273[i + 0]) );
  }
  i264.textureParameters = i272
  var i275 = i265[9]
  var i274 = []
  for(var i = 0; i < i275.length; i += 1) {
    i274.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i275[i + 0]) );
  }
  i264.materialFlags = i274
  return i264
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i278 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i279 = data
  i278.name = i279[0]
  i278.value = i279[1]
  return i278
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i282 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i283 = data
  i282.name = i283[0]
  i282.value = new pc.Color(i283[1], i283[2], i283[3], i283[4])
  return i282
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i286 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i287 = data
  i286.name = i287[0]
  i286.value = new pc.Vec4( i287[1], i287[2], i287[3], i287[4] )
  return i286
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i290 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i291 = data
  i290.name = i291[0]
  request.r(i291[1], i291[2], 0, i290, 'value')
  return i290
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i294 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i295 = data
  i294.name = i295[0]
  i294.enabled = !!i295[1]
  return i294
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i296 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i297 = data
  i296.name = i297[0]
  i296.width = i297[1]
  i296.height = i297[2]
  i296.mipmapCount = i297[3]
  i296.anisoLevel = i297[4]
  i296.filterMode = i297[5]
  i296.hdr = !!i297[6]
  i296.format = i297[7]
  i296.wrapMode = i297[8]
  i296.alphaIsTransparency = !!i297[9]
  i296.alphaSource = i297[10]
  i296.graphicsFormat = i297[11]
  i296.sRGBTexture = !!i297[12]
  i296.desiredColorSpace = i297[13]
  i296.wrapU = i297[14]
  i296.wrapV = i297[15]
  return i296
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i298 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i299 = data
  i298.name = i299[0]
  i298.index = i299[1]
  i298.startup = !!i299[2]
  return i298
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i300 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i301 = data
  i300.aspect = i301[0]
  i300.orthographic = !!i301[1]
  i300.orthographicSize = i301[2]
  i300.backgroundColor = new pc.Color(i301[3], i301[4], i301[5], i301[6])
  i300.nearClipPlane = i301[7]
  i300.farClipPlane = i301[8]
  i300.fieldOfView = i301[9]
  i300.depth = i301[10]
  i300.clearFlags = i301[11]
  i300.cullingMask = i301[12]
  i300.rect = i301[13]
  request.r(i301[14], i301[15], 0, i300, 'targetTexture')
  i300.usePhysicalProperties = !!i301[16]
  i300.focalLength = i301[17]
  i300.sensorSize = new pc.Vec2( i301[18], i301[19] )
  i300.lensShift = new pc.Vec2( i301[20], i301[21] )
  i300.gateFit = i301[22]
  i300.commandBufferCount = i301[23]
  i300.cameraType = i301[24]
  i300.enabled = !!i301[25]
  return i300
}

Deserializers["CameraFollow2D"] = function (request, data, root) {
  var i302 = root || request.c( 'CameraFollow2D' )
  var i303 = data
  request.r(i303[0], i303[1], 0, i302, 'target')
  i302.smoothTime = i303[2]
  i302.offset = new pc.Vec3( i303[3], i303[4], i303[5] )
  return i302
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i304 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i305 = data
  i304.name = i305[0]
  i304.tagId = i305[1]
  i304.enabled = !!i305[2]
  i304.isStatic = !!i305[3]
  i304.layer = i305[4]
  return i304
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i306 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i307 = data
  i306.color = new pc.Color(i307[0], i307[1], i307[2], i307[3])
  request.r(i307[4], i307[5], 0, i306, 'sprite')
  i306.flipX = !!i307[6]
  i306.flipY = !!i307[7]
  i306.drawMode = i307[8]
  i306.size = new pc.Vec2( i307[9], i307[10] )
  i306.tileMode = i307[11]
  i306.adaptiveModeThreshold = i307[12]
  i306.maskInteraction = i307[13]
  i306.spriteSortPoint = i307[14]
  i306.enabled = !!i307[15]
  request.r(i307[16], i307[17], 0, i306, 'sharedMaterial')
  var i309 = i307[18]
  var i308 = []
  for(var i = 0; i < i309.length; i += 2) {
  request.r(i309[i + 0], i309[i + 1], 2, i308, '')
  }
  i306.sharedMaterials = i308
  i306.receiveShadows = !!i307[19]
  i306.shadowCastingMode = i307[20]
  i306.sortingLayerID = i307[21]
  i306.sortingOrder = i307[22]
  i306.lightmapIndex = i307[23]
  i306.lightmapSceneIndex = i307[24]
  i306.lightmapScaleOffset = new pc.Vec4( i307[25], i307[26], i307[27], i307[28] )
  i306.lightProbeUsage = i307[29]
  i306.reflectionProbeUsage = i307[30]
  return i306
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D"] = function (request, data, root) {
  var i312 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D' )
  var i313 = data
  i312.usedByComposite = !!i313[0]
  i312.autoTiling = !!i313[1]
  var i315 = i313[2]
  var i314 = []
  for(var i = 0; i < i315.length; i += 1) {
  var i317 = i315[i + 0]
  var i316 = []
  for(var i = 0; i < i317.length; i += 2) {
    i316.push( new pc.Vec2( i317[i + 0], i317[i + 1] ) );
  }
    i314.push( i316 );
  }
  i312.points = i314
  i312.enabled = !!i313[3]
  i312.isTrigger = !!i313[4]
  i312.usedByEffector = !!i313[5]
  i312.density = i313[6]
  i312.offset = new pc.Vec2( i313[7], i313[8] )
  request.r(i313[9], i313[10], 0, i312, 'material')
  return i312
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i324 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i325 = data
  i324.usedByComposite = !!i325[0]
  i324.autoTiling = !!i325[1]
  i324.size = new pc.Vec2( i325[2], i325[3] )
  i324.edgeRadius = i325[4]
  i324.enabled = !!i325[5]
  i324.isTrigger = !!i325[6]
  i324.usedByEffector = !!i325[7]
  i324.density = i325[8]
  i324.offset = new pc.Vec2( i325[9], i325[10] )
  request.r(i325[11], i325[12], 0, i324, 'material')
  return i324
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i326 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i327 = data
  i326.bodyType = i327[0]
  request.r(i327[1], i327[2], 0, i326, 'material')
  i326.simulated = !!i327[3]
  i326.useAutoMass = !!i327[4]
  i326.mass = i327[5]
  i326.drag = i327[6]
  i326.angularDrag = i327[7]
  i326.gravityScale = i327[8]
  i326.collisionDetectionMode = i327[9]
  i326.sleepMode = i327[10]
  i326.constraints = i327[11]
  return i326
}

Deserializers["BatStrikeController"] = function (request, data, root) {
  var i328 = root || request.c( 'BatStrikeController' )
  var i329 = data
  i328.pullSpeed = i329[0]
  i328.maxPullDistance = i329[1]
  i328.strikeForce = i329[2]
  i328.targetTag = i329[3]
  return i328
}

Deserializers["CupCollision"] = function (request, data, root) {
  var i330 = root || request.c( 'CupCollision' )
  var i331 = data
  i330.baseTag = i331[0]
  request.r(i331[1], i331[2], 0, i330, 'objectToActivate')
  return i330
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider2D"] = function (request, data, root) {
  var i332 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider2D' )
  var i333 = data
  i332.size = new pc.Vec2( i333[0], i333[1] )
  i332.direction = i333[2]
  i332.enabled = !!i333[3]
  i332.isTrigger = !!i333[4]
  i332.usedByEffector = !!i333[5]
  i332.density = i333[6]
  i332.offset = new pc.Vec2( i333[7], i333[8] )
  request.r(i333[9], i333[10], 0, i332, 'material')
  return i332
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i334 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i335 = data
  i334.pivot = new pc.Vec2( i335[0], i335[1] )
  i334.anchorMin = new pc.Vec2( i335[2], i335[3] )
  i334.anchorMax = new pc.Vec2( i335[4], i335[5] )
  i334.sizeDelta = new pc.Vec2( i335[6], i335[7] )
  i334.anchoredPosition3D = new pc.Vec3( i335[8], i335[9], i335[10] )
  i334.rotation = new pc.Quat(i335[11], i335[12], i335[13], i335[14])
  i334.scale = new pc.Vec3( i335[15], i335[16], i335[17] )
  return i334
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i336 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i337 = data
  i336.planeDistance = i337[0]
  i336.referencePixelsPerUnit = i337[1]
  i336.isFallbackOverlay = !!i337[2]
  i336.renderMode = i337[3]
  i336.renderOrder = i337[4]
  i336.sortingLayerName = i337[5]
  i336.sortingOrder = i337[6]
  i336.scaleFactor = i337[7]
  request.r(i337[8], i337[9], 0, i336, 'worldCamera')
  i336.overrideSorting = !!i337[10]
  i336.pixelPerfect = !!i337[11]
  i336.targetDisplay = i337[12]
  i336.overridePixelPerfect = !!i337[13]
  i336.enabled = !!i337[14]
  return i336
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i338 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i339 = data
  i338.m_UiScaleMode = i339[0]
  i338.m_ReferencePixelsPerUnit = i339[1]
  i338.m_ScaleFactor = i339[2]
  i338.m_ReferenceResolution = new pc.Vec2( i339[3], i339[4] )
  i338.m_ScreenMatchMode = i339[5]
  i338.m_MatchWidthOrHeight = i339[6]
  i338.m_PhysicalUnit = i339[7]
  i338.m_FallbackScreenDPI = i339[8]
  i338.m_DefaultSpriteDPI = i339[9]
  i338.m_DynamicPixelsPerUnit = i339[10]
  i338.m_PresetInfoIsWorld = !!i339[11]
  return i338
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i340 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i341 = data
  i340.m_IgnoreReversedGraphics = !!i341[0]
  i340.m_BlockingObjects = i341[1]
  i340.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i341[2] )
  return i340
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i342 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i343 = data
  request.r(i343[0], i343[1], 0, i342, 'm_FirstSelected')
  i342.m_sendNavigationEvents = !!i343[2]
  i342.m_DragThreshold = i343[3]
  return i342
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i344 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i345 = data
  i344.m_HorizontalAxis = i345[0]
  i344.m_VerticalAxis = i345[1]
  i344.m_SubmitButton = i345[2]
  i344.m_CancelButton = i345[3]
  i344.m_InputActionsPerSecond = i345[4]
  i344.m_RepeatDelay = i345[5]
  i344.m_ForceModuleActive = !!i345[6]
  i344.m_SendPointerHoverToParent = !!i345[7]
  return i344
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i346 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i347 = data
  i346.ambientIntensity = i347[0]
  i346.reflectionIntensity = i347[1]
  i346.ambientMode = i347[2]
  i346.ambientLight = new pc.Color(i347[3], i347[4], i347[5], i347[6])
  i346.ambientSkyColor = new pc.Color(i347[7], i347[8], i347[9], i347[10])
  i346.ambientGroundColor = new pc.Color(i347[11], i347[12], i347[13], i347[14])
  i346.ambientEquatorColor = new pc.Color(i347[15], i347[16], i347[17], i347[18])
  i346.fogColor = new pc.Color(i347[19], i347[20], i347[21], i347[22])
  i346.fogEndDistance = i347[23]
  i346.fogStartDistance = i347[24]
  i346.fogDensity = i347[25]
  i346.fog = !!i347[26]
  request.r(i347[27], i347[28], 0, i346, 'skybox')
  i346.fogMode = i347[29]
  var i349 = i347[30]
  var i348 = []
  for(var i = 0; i < i349.length; i += 1) {
    i348.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i349[i + 0]) );
  }
  i346.lightmaps = i348
  i346.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i347[31], i346.lightProbes)
  i346.lightmapsMode = i347[32]
  i346.mixedBakeMode = i347[33]
  i346.environmentLightingMode = i347[34]
  i346.ambientProbe = new pc.SphericalHarmonicsL2(i347[35])
  i346.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i347[36])
  i346.useReferenceAmbientProbe = !!i347[37]
  request.r(i347[38], i347[39], 0, i346, 'customReflection')
  request.r(i347[40], i347[41], 0, i346, 'defaultReflection')
  i346.defaultReflectionMode = i347[42]
  i346.defaultReflectionResolution = i347[43]
  i346.sunLightObjectId = i347[44]
  i346.pixelLightCount = i347[45]
  i346.defaultReflectionHDR = !!i347[46]
  i346.hasLightDataAsset = !!i347[47]
  i346.hasManualGenerate = !!i347[48]
  return i346
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i352 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i353 = data
  request.r(i353[0], i353[1], 0, i352, 'lightmapColor')
  request.r(i353[2], i353[3], 0, i352, 'lightmapDirection')
  request.r(i353[4], i353[5], 0, i352, 'shadowMask')
  return i352
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i354 = root || new UnityEngine.LightProbes()
  var i355 = data
  return i354
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.PhysicsMaterial2D"] = function (request, data, root) {
  var i362 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.PhysicsMaterial2D' )
  var i363 = data
  i362.name = i363[0]
  i362.bounciness = i363[1]
  i362.friction = i363[2]
  return i362
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i364 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i365 = data
  var i367 = i365[0]
  var i366 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i367.length; i += 1) {
    i366.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i367[i + 0]));
  }
  i364.ShaderCompilationErrors = i366
  i364.name = i365[1]
  i364.guid = i365[2]
  var i369 = i365[3]
  var i368 = []
  for(var i = 0; i < i369.length; i += 1) {
    i368.push( i369[i + 0] );
  }
  i364.shaderDefinedKeywords = i368
  var i371 = i365[4]
  var i370 = []
  for(var i = 0; i < i371.length; i += 1) {
    i370.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i371[i + 0]) );
  }
  i364.passes = i370
  var i373 = i365[5]
  var i372 = []
  for(var i = 0; i < i373.length; i += 1) {
    i372.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i373[i + 0]) );
  }
  i364.usePasses = i372
  var i375 = i365[6]
  var i374 = []
  for(var i = 0; i < i375.length; i += 1) {
    i374.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i375[i + 0]) );
  }
  i364.defaultParameterValues = i374
  request.r(i365[7], i365[8], 0, i364, 'unityFallbackShader')
  i364.readDepth = !!i365[9]
  i364.hasDepthOnlyPass = !!i365[10]
  i364.isCreatedByShaderGraph = !!i365[11]
  i364.disableBatching = !!i365[12]
  i364.compiled = !!i365[13]
  return i364
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i378 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i379 = data
  i378.shaderName = i379[0]
  i378.errorMessage = i379[1]
  return i378
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i384 = root || new pc.UnityShaderPass()
  var i385 = data
  i384.id = i385[0]
  i384.subShaderIndex = i385[1]
  i384.name = i385[2]
  i384.passType = i385[3]
  i384.grabPassTextureName = i385[4]
  i384.usePass = !!i385[5]
  i384.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i385[6], i384.zTest)
  i384.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i385[7], i384.zWrite)
  i384.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i385[8], i384.culling)
  i384.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i385[9], i384.blending)
  i384.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i385[10], i384.alphaBlending)
  i384.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i385[11], i384.colorWriteMask)
  i384.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i385[12], i384.offsetUnits)
  i384.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i385[13], i384.offsetFactor)
  i384.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i385[14], i384.stencilRef)
  i384.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i385[15], i384.stencilReadMask)
  i384.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i385[16], i384.stencilWriteMask)
  i384.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i385[17], i384.stencilOp)
  i384.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i385[18], i384.stencilOpFront)
  i384.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i385[19], i384.stencilOpBack)
  var i387 = i385[20]
  var i386 = []
  for(var i = 0; i < i387.length; i += 1) {
    i386.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i387[i + 0]) );
  }
  i384.tags = i386
  var i389 = i385[21]
  var i388 = []
  for(var i = 0; i < i389.length; i += 1) {
    i388.push( i389[i + 0] );
  }
  i384.passDefinedKeywords = i388
  var i391 = i385[22]
  var i390 = []
  for(var i = 0; i < i391.length; i += 1) {
    i390.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i391[i + 0]) );
  }
  i384.passDefinedKeywordGroups = i390
  var i393 = i385[23]
  var i392 = []
  for(var i = 0; i < i393.length; i += 1) {
    i392.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i393[i + 0]) );
  }
  i384.variants = i392
  var i395 = i385[24]
  var i394 = []
  for(var i = 0; i < i395.length; i += 1) {
    i394.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i395[i + 0]) );
  }
  i384.excludedVariants = i394
  i384.hasDepthReader = !!i385[25]
  return i384
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i396 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i397 = data
  i396.val = i397[0]
  i396.name = i397[1]
  return i396
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i398 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i399 = data
  i398.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i399[0], i398.src)
  i398.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i399[1], i398.dst)
  i398.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i399[2], i398.op)
  return i398
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i400 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i401 = data
  i400.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i401[0], i400.pass)
  i400.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i401[1], i400.fail)
  i400.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i401[2], i400.zFail)
  i400.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i401[3], i400.comp)
  return i400
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i404 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i405 = data
  i404.name = i405[0]
  i404.value = i405[1]
  return i404
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i408 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i409 = data
  var i411 = i409[0]
  var i410 = []
  for(var i = 0; i < i411.length; i += 1) {
    i410.push( i411[i + 0] );
  }
  i408.keywords = i410
  i408.hasDiscard = !!i409[1]
  return i408
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i414 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i415 = data
  i414.passId = i415[0]
  i414.subShaderIndex = i415[1]
  var i417 = i415[2]
  var i416 = []
  for(var i = 0; i < i417.length; i += 1) {
    i416.push( i417[i + 0] );
  }
  i414.keywords = i416
  i414.vertexProgram = i415[3]
  i414.fragmentProgram = i415[4]
  i414.exportedForWebGl2 = !!i415[5]
  i414.readDepth = !!i415[6]
  return i414
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i420 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i421 = data
  request.r(i421[0], i421[1], 0, i420, 'shader')
  i420.pass = i421[2]
  return i420
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i424 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i425 = data
  i424.name = i425[0]
  i424.type = i425[1]
  i424.value = new pc.Vec4( i425[2], i425[3], i425[4], i425[5] )
  i424.textureValue = i425[6]
  i424.shaderPropertyFlag = i425[7]
  return i424
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i426 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i427 = data
  i426.name = i427[0]
  request.r(i427[1], i427[2], 0, i426, 'texture')
  i426.aabb = i427[3]
  i426.vertices = i427[4]
  i426.triangles = i427[5]
  i426.textureRect = UnityEngine.Rect.MinMaxRect(i427[6], i427[7], i427[8], i427[9])
  i426.packedRect = UnityEngine.Rect.MinMaxRect(i427[10], i427[11], i427[12], i427[13])
  i426.border = new pc.Vec4( i427[14], i427[15], i427[16], i427[17] )
  i426.transparency = i427[18]
  i426.bounds = i427[19]
  i426.pixelsPerUnit = i427[20]
  i426.textureWidth = i427[21]
  i426.textureHeight = i427[22]
  i426.nativeSize = new pc.Vec2( i427[23], i427[24] )
  i426.pivot = new pc.Vec2( i427[25], i427[26] )
  i426.textureRectOffset = new pc.Vec2( i427[27], i427[28] )
  return i426
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i428 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i429 = data
  var i431 = i429[0]
  var i430 = []
  for(var i = 0; i < i431.length; i += 1) {
    i430.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i431[i + 0]) );
  }
  i428.files = i430
  i428.componentToPrefabIds = i429[1]
  return i428
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i434 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i435 = data
  i434.path = i435[0]
  request.r(i435[1], i435[2], 0, i434, 'unityObject')
  return i434
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i436 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i437 = data
  var i439 = i437[0]
  var i438 = []
  for(var i = 0; i < i439.length; i += 1) {
    i438.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i439[i + 0]) );
  }
  i436.scriptsExecutionOrder = i438
  var i441 = i437[1]
  var i440 = []
  for(var i = 0; i < i441.length; i += 1) {
    i440.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i441[i + 0]) );
  }
  i436.sortingLayers = i440
  var i443 = i437[2]
  var i442 = []
  for(var i = 0; i < i443.length; i += 1) {
    i442.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i443[i + 0]) );
  }
  i436.cullingLayers = i442
  i436.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i437[3], i436.timeSettings)
  i436.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i437[4], i436.physicsSettings)
  i436.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i437[5], i436.physics2DSettings)
  i436.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i437[6], i436.qualitySettings)
  i436.enableRealtimeShadows = !!i437[7]
  i436.enableAutoInstancing = !!i437[8]
  i436.enableStaticBatching = !!i437[9]
  i436.enableDynamicBatching = !!i437[10]
  i436.lightmapEncodingQuality = i437[11]
  i436.desiredColorSpace = i437[12]
  var i445 = i437[13]
  var i444 = []
  for(var i = 0; i < i445.length; i += 1) {
    i444.push( i445[i + 0] );
  }
  i436.allTags = i444
  return i436
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i448 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i449 = data
  i448.name = i449[0]
  i448.value = i449[1]
  return i448
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i452 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i453 = data
  i452.id = i453[0]
  i452.name = i453[1]
  i452.value = i453[2]
  return i452
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i456 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i457 = data
  i456.id = i457[0]
  i456.name = i457[1]
  return i456
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i458 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i459 = data
  i458.fixedDeltaTime = i459[0]
  i458.maximumDeltaTime = i459[1]
  i458.timeScale = i459[2]
  i458.maximumParticleTimestep = i459[3]
  return i458
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i460 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i461 = data
  i460.gravity = new pc.Vec3( i461[0], i461[1], i461[2] )
  i460.defaultSolverIterations = i461[3]
  i460.bounceThreshold = i461[4]
  i460.autoSyncTransforms = !!i461[5]
  i460.autoSimulation = !!i461[6]
  var i463 = i461[7]
  var i462 = []
  for(var i = 0; i < i463.length; i += 1) {
    i462.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i463[i + 0]) );
  }
  i460.collisionMatrix = i462
  return i460
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i466 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i467 = data
  i466.enabled = !!i467[0]
  i466.layerId = i467[1]
  i466.otherLayerId = i467[2]
  return i466
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i468 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i469 = data
  request.r(i469[0], i469[1], 0, i468, 'material')
  i468.gravity = new pc.Vec2( i469[2], i469[3] )
  i468.positionIterations = i469[4]
  i468.velocityIterations = i469[5]
  i468.velocityThreshold = i469[6]
  i468.maxLinearCorrection = i469[7]
  i468.maxAngularCorrection = i469[8]
  i468.maxTranslationSpeed = i469[9]
  i468.maxRotationSpeed = i469[10]
  i468.baumgarteScale = i469[11]
  i468.baumgarteTOIScale = i469[12]
  i468.timeToSleep = i469[13]
  i468.linearSleepTolerance = i469[14]
  i468.angularSleepTolerance = i469[15]
  i468.defaultContactOffset = i469[16]
  i468.autoSimulation = !!i469[17]
  i468.queriesHitTriggers = !!i469[18]
  i468.queriesStartInColliders = !!i469[19]
  i468.callbacksOnDisable = !!i469[20]
  i468.reuseCollisionCallbacks = !!i469[21]
  i468.autoSyncTransforms = !!i469[22]
  var i471 = i469[23]
  var i470 = []
  for(var i = 0; i < i471.length; i += 1) {
    i470.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i471[i + 0]) );
  }
  i468.collisionMatrix = i470
  return i468
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i474 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i475 = data
  i474.enabled = !!i475[0]
  i474.layerId = i475[1]
  i474.otherLayerId = i475[2]
  return i474
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i476 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i477 = data
  var i479 = i477[0]
  var i478 = []
  for(var i = 0; i < i479.length; i += 1) {
    i478.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i479[i + 0]) );
  }
  i476.qualityLevels = i478
  var i481 = i477[1]
  var i480 = []
  for(var i = 0; i < i481.length; i += 1) {
    i480.push( i481[i + 0] );
  }
  i476.names = i480
  i476.shadows = i477[2]
  i476.anisotropicFiltering = i477[3]
  i476.antiAliasing = i477[4]
  i476.lodBias = i477[5]
  i476.shadowCascades = i477[6]
  i476.shadowDistance = i477[7]
  i476.shadowmaskMode = i477[8]
  i476.shadowProjection = i477[9]
  i476.shadowResolution = i477[10]
  i476.softParticles = !!i477[11]
  i476.softVegetation = !!i477[12]
  i476.activeColorSpace = i477[13]
  i476.desiredColorSpace = i477[14]
  i476.masterTextureLimit = i477[15]
  i476.maxQueuedFrames = i477[16]
  i476.particleRaycastBudget = i477[17]
  i476.pixelLightCount = i477[18]
  i476.realtimeReflectionProbes = !!i477[19]
  i476.shadowCascade2Split = i477[20]
  i476.shadowCascade4Split = new pc.Vec3( i477[21], i477[22], i477[23] )
  i476.streamingMipmapsActive = !!i477[24]
  i476.vSyncCount = i477[25]
  i476.asyncUploadBufferSize = i477[26]
  i476.asyncUploadTimeSlice = i477[27]
  i476.billboardsFaceCameraPosition = !!i477[28]
  i476.shadowNearPlaneOffset = i477[29]
  i476.streamingMipmapsMemoryBudget = i477[30]
  i476.maximumLODLevel = i477[31]
  i476.streamingMipmapsAddAllCameras = !!i477[32]
  i476.streamingMipmapsMaxLevelReduction = i477[33]
  i476.streamingMipmapsRenderersPerFrame = i477[34]
  i476.resolutionScalingFixedDPIFactor = i477[35]
  i476.streamingMipmapsMaxFileIORequests = i477[36]
  i476.currentQualityLevel = i477[37]
  return i476
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D":{"usedByComposite":0,"autoTiling":1,"points":2,"enabled":3,"isTrigger":4,"usedByEffector":5,"density":6,"offset":7,"material":9},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider2D":{"size":0,"direction":2,"enabled":3,"isTrigger":4,"usedByEffector":5,"density":6,"offset":7,"material":9},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.PhysicsMaterial2D":{"name":0,"bounciness":1,"friction":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"25":[26],"27":[26],"28":[26],"29":[26],"30":[26],"31":[26],"32":[33],"34":[1],"35":[36],"37":[36],"38":[36],"39":[36],"40":[36],"41":[36],"42":[12],"43":[12],"44":[12],"45":[12],"46":[12],"47":[12],"48":[12],"49":[12],"50":[12],"51":[12],"52":[12],"53":[12],"54":[12],"55":[1],"56":[57],"58":[59],"60":[59],"18":[17],"13":[12],"61":[6],"62":[1],"63":[64],"65":[22],"66":[18],"67":[17],"68":[57,17],"69":[17,70],"71":[17],"72":[70,17],"73":[57],"74":[70,17],"75":[17],"76":[77],"78":[77],"79":[77],"80":[17],"81":[17],"21":[18],"82":[70,17],"83":[17],"20":[18],"84":[17],"85":[17],"86":[17],"87":[17],"88":[17],"89":[17],"90":[17],"91":[17],"92":[17],"93":[70,17],"94":[17],"95":[17],"96":[17],"97":[17],"98":[70,17],"99":[17],"100":[22],"101":[22],"23":[22],"102":[22],"103":[1],"104":[1]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.MonoBehaviour","CameraFollow2D","UnityEngine.Transform","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.Material","UnityEngine.PolygonCollider2D","UnityEngine.PhysicsMaterial2D","UnityEngine.BoxCollider2D","UnityEngine.Rigidbody2D","BatStrikeController","CupCollision","UnityEngine.GameObject","UnityEngine.CapsuleCollider2D","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.Texture2D","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.InputSystem.UI.InputSystemUIInputModule","UnityEngine.InputSystem.UI.TrackedDeviceRaycaster","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","UnityEngine.CanvasRenderer","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.Image","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.38f1";

Deserializers.productName = "PLY_MiniSoccer";

Deserializers.lunaInitializationTime = "07/15/2026 03:53:54";

Deserializers.lunaDaysRunning = "0.0";

Deserializers.lunaVersion = "7.1.0";

Deserializers.lunaSHA = "cf93782349542fe0b84ad13951a26809f8419628";

Deserializers.creativeName = "";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "0";

Deserializers.runtimeAnalysisExcludedMethodsCount = "0";

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

Deserializers.buildID = "4ddcd821-0485-4fcf-8066-2f6f3292ac7e";

Deserializers.runtimeInitializeOnLoadInfos = [[["Unity","Services","Core","Internal","UnityServicesInitializer","EnableServicesInitializationAsync"],["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["Unity","Services","Core","Registration","CorePackageInitializer","InitializeOnLoad"],["Unity","Services","Core","Internal","TaskAsyncOperation","SetScheduler"],["Unity","Services","Core","Environments","Client","Scheduler","EngineStateHelper","Init"],["Unity","Services","Core","Environments","Client","Scheduler","ThreadHelper","Init"],["Ua2CoreInitializeCallback","Register"],["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["Unity","AI","Navigation","NavMeshLink","ClearTrackedList"],["Unity","AI","Navigation","NavMeshSurface","ClearNavMeshSurfaces"],["Unity","AI","Navigation","NavMeshModifierVolume","ClearNavMeshModifiers"],["Unity","AI","Navigation","NavMeshModifier","ClearNavMeshModifiers"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["Unity","Services","Core","Internal","UnityServicesInitializer","CreateStaticInstance"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[["Unity","Services","Core","Environments","Client","Http","JsonHelpers","RegisterTypesForAOT"]],[["Unity","Services","Core","UnityThreadUtils","CaptureUnityThreadInfo"],["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

