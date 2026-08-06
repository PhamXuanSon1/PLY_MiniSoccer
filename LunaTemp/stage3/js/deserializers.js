var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i3240 = root || request.c( 'UnityEngine.JointSpring' )
  var i3241 = data
  i3240.spring = i3241[0]
  i3240.damper = i3241[1]
  i3240.targetPosition = i3241[2]
  return i3240
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i3242 = root || request.c( 'UnityEngine.JointMotor' )
  var i3243 = data
  i3242.m_TargetVelocity = i3243[0]
  i3242.m_Force = i3243[1]
  i3242.m_FreeSpin = i3243[2]
  return i3242
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i3244 = root || request.c( 'UnityEngine.JointLimits' )
  var i3245 = data
  i3244.m_Min = i3245[0]
  i3244.m_Max = i3245[1]
  i3244.m_Bounciness = i3245[2]
  i3244.m_BounceMinVelocity = i3245[3]
  i3244.m_ContactDistance = i3245[4]
  i3244.minBounce = i3245[5]
  i3244.maxBounce = i3245[6]
  return i3244
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i3246 = root || request.c( 'UnityEngine.JointDrive' )
  var i3247 = data
  i3246.m_PositionSpring = i3247[0]
  i3246.m_PositionDamper = i3247[1]
  i3246.m_MaximumForce = i3247[2]
  i3246.m_UseAcceleration = i3247[3]
  return i3246
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i3248 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i3249 = data
  i3248.m_Spring = i3249[0]
  i3248.m_Damper = i3249[1]
  return i3248
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i3250 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i3251 = data
  i3250.m_Limit = i3251[0]
  i3250.m_Bounciness = i3251[1]
  i3250.m_ContactDistance = i3251[2]
  return i3250
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i3252 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i3253 = data
  i3252.m_ExtremumSlip = i3253[0]
  i3252.m_ExtremumValue = i3253[1]
  i3252.m_AsymptoteSlip = i3253[2]
  i3252.m_AsymptoteValue = i3253[3]
  i3252.m_Stiffness = i3253[4]
  return i3252
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i3254 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i3255 = data
  i3254.m_LowerAngle = i3255[0]
  i3254.m_UpperAngle = i3255[1]
  return i3254
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i3256 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i3257 = data
  i3256.m_MotorSpeed = i3257[0]
  i3256.m_MaximumMotorTorque = i3257[1]
  return i3256
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i3258 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i3259 = data
  i3258.m_DampingRatio = i3259[0]
  i3258.m_Frequency = i3259[1]
  i3258.m_Angle = i3259[2]
  return i3258
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i3260 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i3261 = data
  i3260.m_LowerTranslation = i3261[0]
  i3260.m_UpperTranslation = i3261[1]
  return i3260
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i3262 = root || new pc.UnityMaterial()
  var i3263 = data
  i3262.name = i3263[0]
  request.r(i3263[1], i3263[2], 0, i3262, 'shader')
  i3262.renderQueue = i3263[3]
  i3262.enableInstancing = !!i3263[4]
  var i3265 = i3263[5]
  var i3264 = []
  for(var i = 0; i < i3265.length; i += 1) {
    i3264.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i3265[i + 0]) );
  }
  i3262.floatParameters = i3264
  var i3267 = i3263[6]
  var i3266 = []
  for(var i = 0; i < i3267.length; i += 1) {
    i3266.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i3267[i + 0]) );
  }
  i3262.colorParameters = i3266
  var i3269 = i3263[7]
  var i3268 = []
  for(var i = 0; i < i3269.length; i += 1) {
    i3268.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i3269[i + 0]) );
  }
  i3262.vectorParameters = i3268
  var i3271 = i3263[8]
  var i3270 = []
  for(var i = 0; i < i3271.length; i += 1) {
    i3270.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i3271[i + 0]) );
  }
  i3262.textureParameters = i3270
  var i3273 = i3263[9]
  var i3272 = []
  for(var i = 0; i < i3273.length; i += 1) {
    i3272.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i3273[i + 0]) );
  }
  i3262.materialFlags = i3272
  return i3262
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i3276 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i3277 = data
  i3276.name = i3277[0]
  i3276.value = i3277[1]
  return i3276
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i3280 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i3281 = data
  i3280.name = i3281[0]
  i3280.value = new pc.Color(i3281[1], i3281[2], i3281[3], i3281[4])
  return i3280
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i3284 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i3285 = data
  i3284.name = i3285[0]
  i3284.value = new pc.Vec4( i3285[1], i3285[2], i3285[3], i3285[4] )
  return i3284
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i3288 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i3289 = data
  i3288.name = i3289[0]
  request.r(i3289[1], i3289[2], 0, i3288, 'value')
  return i3288
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i3292 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i3293 = data
  i3292.name = i3293[0]
  i3292.enabled = !!i3293[1]
  return i3292
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i3294 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i3295 = data
  i3294.name = i3295[0]
  i3294.width = i3295[1]
  i3294.height = i3295[2]
  i3294.mipmapCount = i3295[3]
  i3294.anisoLevel = i3295[4]
  i3294.filterMode = i3295[5]
  i3294.hdr = !!i3295[6]
  i3294.format = i3295[7]
  i3294.wrapMode = i3295[8]
  i3294.alphaIsTransparency = !!i3295[9]
  i3294.alphaSource = i3295[10]
  i3294.graphicsFormat = i3295[11]
  i3294.sRGBTexture = !!i3295[12]
  i3294.desiredColorSpace = i3295[13]
  i3294.wrapU = i3295[14]
  i3294.wrapV = i3295[15]
  return i3294
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i3296 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i3297 = data
  i3296.name = i3297[0]
  i3296.halfPrecision = !!i3297[1]
  i3296.useSimplification = !!i3297[2]
  i3296.useUInt32IndexFormat = !!i3297[3]
  i3296.vertexCount = i3297[4]
  i3296.aabb = i3297[5]
  var i3299 = i3297[6]
  var i3298 = []
  for(var i = 0; i < i3299.length; i += 1) {
    i3298.push( !!i3299[i + 0] );
  }
  i3296.streams = i3298
  i3296.vertices = i3297[7]
  var i3301 = i3297[8]
  var i3300 = []
  for(var i = 0; i < i3301.length; i += 1) {
    i3300.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i3301[i + 0]) );
  }
  i3296.subMeshes = i3300
  var i3303 = i3297[9]
  var i3302 = []
  for(var i = 0; i < i3303.length; i += 16) {
    i3302.push( new pc.Mat4().setData(i3303[i + 0], i3303[i + 1], i3303[i + 2], i3303[i + 3],  i3303[i + 4], i3303[i + 5], i3303[i + 6], i3303[i + 7],  i3303[i + 8], i3303[i + 9], i3303[i + 10], i3303[i + 11],  i3303[i + 12], i3303[i + 13], i3303[i + 14], i3303[i + 15]) );
  }
  i3296.bindposes = i3302
  var i3305 = i3297[10]
  var i3304 = []
  for(var i = 0; i < i3305.length; i += 1) {
    i3304.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i3305[i + 0]) );
  }
  i3296.blendShapes = i3304
  return i3296
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i3310 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i3311 = data
  i3310.triangles = i3311[0]
  return i3310
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i3316 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i3317 = data
  i3316.name = i3317[0]
  var i3319 = i3317[1]
  var i3318 = []
  for(var i = 0; i < i3319.length; i += 1) {
    i3318.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i3319[i + 0]) );
  }
  i3316.frames = i3318
  return i3316
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i3320 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i3321 = data
  i3320.name = i3321[0]
  i3320.index = i3321[1]
  i3320.startup = !!i3321[2]
  return i3320
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i3322 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i3323 = data
  i3322.aspect = i3323[0]
  i3322.orthographic = !!i3323[1]
  i3322.orthographicSize = i3323[2]
  i3322.backgroundColor = new pc.Color(i3323[3], i3323[4], i3323[5], i3323[6])
  i3322.nearClipPlane = i3323[7]
  i3322.farClipPlane = i3323[8]
  i3322.fieldOfView = i3323[9]
  i3322.depth = i3323[10]
  i3322.clearFlags = i3323[11]
  i3322.cullingMask = i3323[12]
  i3322.rect = i3323[13]
  request.r(i3323[14], i3323[15], 0, i3322, 'targetTexture')
  i3322.usePhysicalProperties = !!i3323[16]
  i3322.focalLength = i3323[17]
  i3322.sensorSize = new pc.Vec2( i3323[18], i3323[19] )
  i3322.lensShift = new pc.Vec2( i3323[20], i3323[21] )
  i3322.gateFit = i3323[22]
  i3322.commandBufferCount = i3323[23]
  i3322.cameraType = i3323[24]
  i3322.enabled = !!i3323[25]
  return i3322
}

Deserializers["CameraFollow2D"] = function (request, data, root) {
  var i3324 = root || request.c( 'CameraFollow2D' )
  var i3325 = data
  request.r(i3325[0], i3325[1], 0, i3324, 'target')
  i3324.smoothSpeed = i3325[2]
  i3324.offset = new pc.Vec3( i3325[3], i3325[4], i3325[5] )
  i3324.followY = !!i3325[6]
  return i3324
}

Deserializers["AutoCameraFit"] = function (request, data, root) {
  var i3326 = root || request.c( 'AutoCameraFit' )
  var i3327 = data
  request.r(i3327[0], i3327[1], 0, i3326, 'tallScreenObject')
  i3326.tallScreenRatioThreshold = i3327[2]
  i3326.tallScreenYOffset = i3327[3]
  request.r(i3327[4], i3327[5], 0, i3326, 'canvasBtn')
  request.r(i3327[6], i3327[7], 0, i3326, 'targetArea')
  i3326.paddingLandscape = i3327[8]
  i3326.paddingPortrait = i3327[9]
  i3326.extraPaddingSmallScreen = i3327[10]
  i3326.smallScreenThreshold = i3327[11]
  i3326.autoUpdateOnResize = !!i3327[12]
  i3326.adjustInEditMode = !!i3327[13]
  return i3326
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i3328 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i3329 = data
  i3328.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i3329[0], i3328.main)
  i3328.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i3329[1], i3328.colorBySpeed)
  i3328.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i3329[2], i3328.colorOverLifetime)
  i3328.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i3329[3], i3328.emission)
  i3328.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i3329[4], i3328.rotationBySpeed)
  i3328.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i3329[5], i3328.rotationOverLifetime)
  i3328.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i3329[6], i3328.shape)
  i3328.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i3329[7], i3328.sizeBySpeed)
  i3328.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i3329[8], i3328.sizeOverLifetime)
  i3328.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i3329[9], i3328.textureSheetAnimation)
  i3328.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i3329[10], i3328.velocityOverLifetime)
  i3328.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i3329[11], i3328.noise)
  i3328.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i3329[12], i3328.inheritVelocity)
  i3328.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i3329[13], i3328.forceOverLifetime)
  i3328.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i3329[14], i3328.limitVelocityOverLifetime)
  i3328.useAutoRandomSeed = !!i3329[15]
  i3328.randomSeed = i3329[16]
  return i3328
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i3330 = root || new pc.ParticleSystemMain()
  var i3331 = data
  i3330.duration = i3331[0]
  i3330.loop = !!i3331[1]
  i3330.prewarm = !!i3331[2]
  i3330.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3331[3], i3330.startDelay)
  i3330.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3331[4], i3330.startLifetime)
  i3330.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3331[5], i3330.startSpeed)
  i3330.startSize3D = !!i3331[6]
  i3330.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3331[7], i3330.startSizeX)
  i3330.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3331[8], i3330.startSizeY)
  i3330.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3331[9], i3330.startSizeZ)
  i3330.startRotation3D = !!i3331[10]
  i3330.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3331[11], i3330.startRotationX)
  i3330.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3331[12], i3330.startRotationY)
  i3330.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3331[13], i3330.startRotationZ)
  i3330.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i3331[14], i3330.startColor)
  i3330.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3331[15], i3330.gravityModifier)
  i3330.simulationSpace = i3331[16]
  request.r(i3331[17], i3331[18], 0, i3330, 'customSimulationSpace')
  i3330.simulationSpeed = i3331[19]
  i3330.useUnscaledTime = !!i3331[20]
  i3330.scalingMode = i3331[21]
  i3330.playOnAwake = !!i3331[22]
  i3330.maxParticles = i3331[23]
  i3330.emitterVelocityMode = i3331[24]
  i3330.stopAction = i3331[25]
  return i3330
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i3332 = root || new pc.MinMaxCurve()
  var i3333 = data
  i3332.mode = i3333[0]
  i3332.curveMin = new pc.AnimationCurve( { keys_flow: i3333[1] } )
  i3332.curveMax = new pc.AnimationCurve( { keys_flow: i3333[2] } )
  i3332.curveMultiplier = i3333[3]
  i3332.constantMin = i3333[4]
  i3332.constantMax = i3333[5]
  return i3332
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i3334 = root || new pc.MinMaxGradient()
  var i3335 = data
  i3334.mode = i3335[0]
  i3334.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i3335[1], i3334.gradientMin)
  i3334.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i3335[2], i3334.gradientMax)
  i3334.colorMin = new pc.Color(i3335[3], i3335[4], i3335[5], i3335[6])
  i3334.colorMax = new pc.Color(i3335[7], i3335[8], i3335[9], i3335[10])
  return i3334
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i3336 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i3337 = data
  i3336.mode = i3337[0]
  var i3339 = i3337[1]
  var i3338 = []
  for(var i = 0; i < i3339.length; i += 1) {
    i3338.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i3339[i + 0]) );
  }
  i3336.colorKeys = i3338
  var i3341 = i3337[2]
  var i3340 = []
  for(var i = 0; i < i3341.length; i += 1) {
    i3340.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i3341[i + 0]) );
  }
  i3336.alphaKeys = i3340
  return i3336
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i3342 = root || new pc.ParticleSystemColorBySpeed()
  var i3343 = data
  i3342.enabled = !!i3343[0]
  i3342.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i3343[1], i3342.color)
  i3342.range = new pc.Vec2( i3343[2], i3343[3] )
  return i3342
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i3346 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i3347 = data
  i3346.color = new pc.Color(i3347[0], i3347[1], i3347[2], i3347[3])
  i3346.time = i3347[4]
  return i3346
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i3350 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i3351 = data
  i3350.alpha = i3351[0]
  i3350.time = i3351[1]
  return i3350
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i3352 = root || new pc.ParticleSystemColorOverLifetime()
  var i3353 = data
  i3352.enabled = !!i3353[0]
  i3352.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i3353[1], i3352.color)
  return i3352
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i3354 = root || new pc.ParticleSystemEmitter()
  var i3355 = data
  i3354.enabled = !!i3355[0]
  i3354.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3355[1], i3354.rateOverTime)
  i3354.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3355[2], i3354.rateOverDistance)
  var i3357 = i3355[3]
  var i3356 = []
  for(var i = 0; i < i3357.length; i += 1) {
    i3356.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i3357[i + 0]) );
  }
  i3354.bursts = i3356
  return i3354
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i3360 = root || new pc.ParticleSystemBurst()
  var i3361 = data
  i3360.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3361[0], i3360.count)
  i3360.cycleCount = i3361[1]
  i3360.minCount = i3361[2]
  i3360.maxCount = i3361[3]
  i3360.repeatInterval = i3361[4]
  i3360.time = i3361[5]
  return i3360
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i3362 = root || new pc.ParticleSystemRotationBySpeed()
  var i3363 = data
  i3362.enabled = !!i3363[0]
  i3362.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3363[1], i3362.x)
  i3362.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3363[2], i3362.y)
  i3362.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3363[3], i3362.z)
  i3362.separateAxes = !!i3363[4]
  i3362.range = new pc.Vec2( i3363[5], i3363[6] )
  return i3362
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i3364 = root || new pc.ParticleSystemRotationOverLifetime()
  var i3365 = data
  i3364.enabled = !!i3365[0]
  i3364.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3365[1], i3364.x)
  i3364.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3365[2], i3364.y)
  i3364.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3365[3], i3364.z)
  i3364.separateAxes = !!i3365[4]
  return i3364
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i3366 = root || new pc.ParticleSystemShape()
  var i3367 = data
  i3366.enabled = !!i3367[0]
  i3366.shapeType = i3367[1]
  i3366.randomDirectionAmount = i3367[2]
  i3366.sphericalDirectionAmount = i3367[3]
  i3366.randomPositionAmount = i3367[4]
  i3366.alignToDirection = !!i3367[5]
  i3366.radius = i3367[6]
  i3366.radiusMode = i3367[7]
  i3366.radiusSpread = i3367[8]
  i3366.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3367[9], i3366.radiusSpeed)
  i3366.radiusThickness = i3367[10]
  i3366.angle = i3367[11]
  i3366.length = i3367[12]
  i3366.boxThickness = new pc.Vec3( i3367[13], i3367[14], i3367[15] )
  i3366.meshShapeType = i3367[16]
  request.r(i3367[17], i3367[18], 0, i3366, 'mesh')
  request.r(i3367[19], i3367[20], 0, i3366, 'meshRenderer')
  request.r(i3367[21], i3367[22], 0, i3366, 'skinnedMeshRenderer')
  i3366.useMeshMaterialIndex = !!i3367[23]
  i3366.meshMaterialIndex = i3367[24]
  i3366.useMeshColors = !!i3367[25]
  i3366.normalOffset = i3367[26]
  i3366.arc = i3367[27]
  i3366.arcMode = i3367[28]
  i3366.arcSpread = i3367[29]
  i3366.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3367[30], i3366.arcSpeed)
  i3366.donutRadius = i3367[31]
  i3366.position = new pc.Vec3( i3367[32], i3367[33], i3367[34] )
  i3366.rotation = new pc.Vec3( i3367[35], i3367[36], i3367[37] )
  i3366.scale = new pc.Vec3( i3367[38], i3367[39], i3367[40] )
  return i3366
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i3368 = root || new pc.ParticleSystemSizeBySpeed()
  var i3369 = data
  i3368.enabled = !!i3369[0]
  i3368.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3369[1], i3368.x)
  i3368.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3369[2], i3368.y)
  i3368.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3369[3], i3368.z)
  i3368.separateAxes = !!i3369[4]
  i3368.range = new pc.Vec2( i3369[5], i3369[6] )
  return i3368
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i3370 = root || new pc.ParticleSystemSizeOverLifetime()
  var i3371 = data
  i3370.enabled = !!i3371[0]
  i3370.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3371[1], i3370.x)
  i3370.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3371[2], i3370.y)
  i3370.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3371[3], i3370.z)
  i3370.separateAxes = !!i3371[4]
  return i3370
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i3372 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i3373 = data
  i3372.enabled = !!i3373[0]
  i3372.mode = i3373[1]
  i3372.animation = i3373[2]
  i3372.numTilesX = i3373[3]
  i3372.numTilesY = i3373[4]
  i3372.useRandomRow = !!i3373[5]
  i3372.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3373[6], i3372.frameOverTime)
  i3372.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3373[7], i3372.startFrame)
  i3372.cycleCount = i3373[8]
  i3372.rowIndex = i3373[9]
  i3372.flipU = i3373[10]
  i3372.flipV = i3373[11]
  i3372.spriteCount = i3373[12]
  var i3375 = i3373[13]
  var i3374 = []
  for(var i = 0; i < i3375.length; i += 2) {
  request.r(i3375[i + 0], i3375[i + 1], 2, i3374, '')
  }
  i3372.sprites = i3374
  return i3372
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i3378 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i3379 = data
  i3378.enabled = !!i3379[0]
  i3378.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3379[1], i3378.x)
  i3378.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3379[2], i3378.y)
  i3378.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3379[3], i3378.z)
  i3378.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3379[4], i3378.radial)
  i3378.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3379[5], i3378.speedModifier)
  i3378.space = i3379[6]
  i3378.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3379[7], i3378.orbitalX)
  i3378.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3379[8], i3378.orbitalY)
  i3378.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3379[9], i3378.orbitalZ)
  i3378.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3379[10], i3378.orbitalOffsetX)
  i3378.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3379[11], i3378.orbitalOffsetY)
  i3378.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3379[12], i3378.orbitalOffsetZ)
  return i3378
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i3380 = root || new pc.ParticleSystemNoise()
  var i3381 = data
  i3380.enabled = !!i3381[0]
  i3380.separateAxes = !!i3381[1]
  i3380.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3381[2], i3380.strengthX)
  i3380.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3381[3], i3380.strengthY)
  i3380.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3381[4], i3380.strengthZ)
  i3380.frequency = i3381[5]
  i3380.damping = !!i3381[6]
  i3380.octaveCount = i3381[7]
  i3380.octaveMultiplier = i3381[8]
  i3380.octaveScale = i3381[9]
  i3380.quality = i3381[10]
  i3380.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3381[11], i3380.scrollSpeed)
  i3380.scrollSpeedMultiplier = i3381[12]
  i3380.remapEnabled = !!i3381[13]
  i3380.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3381[14], i3380.remapX)
  i3380.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3381[15], i3380.remapY)
  i3380.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3381[16], i3380.remapZ)
  i3380.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3381[17], i3380.positionAmount)
  i3380.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3381[18], i3380.rotationAmount)
  i3380.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3381[19], i3380.sizeAmount)
  return i3380
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i3382 = root || new pc.ParticleSystemInheritVelocity()
  var i3383 = data
  i3382.enabled = !!i3383[0]
  i3382.mode = i3383[1]
  i3382.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3383[2], i3382.curve)
  return i3382
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i3384 = root || new pc.ParticleSystemForceOverLifetime()
  var i3385 = data
  i3384.enabled = !!i3385[0]
  i3384.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3385[1], i3384.x)
  i3384.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3385[2], i3384.y)
  i3384.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3385[3], i3384.z)
  i3384.space = i3385[4]
  i3384.randomized = !!i3385[5]
  return i3384
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i3386 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i3387 = data
  i3386.enabled = !!i3387[0]
  i3386.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3387[1], i3386.limit)
  i3386.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3387[2], i3386.limitX)
  i3386.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3387[3], i3386.limitY)
  i3386.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3387[4], i3386.limitZ)
  i3386.dampen = i3387[5]
  i3386.separateAxes = !!i3387[6]
  i3386.space = i3387[7]
  i3386.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3387[8], i3386.drag)
  i3386.multiplyDragByParticleSize = !!i3387[9]
  i3386.multiplyDragByParticleVelocity = !!i3387[10]
  return i3386
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i3388 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i3389 = data
  request.r(i3389[0], i3389[1], 0, i3388, 'mesh')
  i3388.meshCount = i3389[2]
  i3388.activeVertexStreamsCount = i3389[3]
  i3388.alignment = i3389[4]
  i3388.renderMode = i3389[5]
  i3388.sortMode = i3389[6]
  i3388.lengthScale = i3389[7]
  i3388.velocityScale = i3389[8]
  i3388.cameraVelocityScale = i3389[9]
  i3388.normalDirection = i3389[10]
  i3388.sortingFudge = i3389[11]
  i3388.minParticleSize = i3389[12]
  i3388.maxParticleSize = i3389[13]
  i3388.pivot = new pc.Vec3( i3389[14], i3389[15], i3389[16] )
  request.r(i3389[17], i3389[18], 0, i3388, 'trailMaterial')
  i3388.applyActiveColorSpace = !!i3389[19]
  i3388.enabled = !!i3389[20]
  request.r(i3389[21], i3389[22], 0, i3388, 'sharedMaterial')
  var i3391 = i3389[23]
  var i3390 = []
  for(var i = 0; i < i3391.length; i += 2) {
  request.r(i3391[i + 0], i3391[i + 1], 2, i3390, '')
  }
  i3388.sharedMaterials = i3390
  i3388.receiveShadows = !!i3389[24]
  i3388.shadowCastingMode = i3389[25]
  i3388.sortingLayerID = i3389[26]
  i3388.sortingOrder = i3389[27]
  i3388.lightmapIndex = i3389[28]
  i3388.lightmapSceneIndex = i3389[29]
  i3388.lightmapScaleOffset = new pc.Vec4( i3389[30], i3389[31], i3389[32], i3389[33] )
  i3388.lightProbeUsage = i3389[34]
  i3388.reflectionProbeUsage = i3389[35]
  return i3388
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i3394 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i3395 = data
  i3394.name = i3395[0]
  i3394.tagId = i3395[1]
  i3394.enabled = !!i3395[2]
  i3394.isStatic = !!i3395[3]
  i3394.layer = i3395[4]
  return i3394
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i3396 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i3397 = data
  i3396.color = new pc.Color(i3397[0], i3397[1], i3397[2], i3397[3])
  request.r(i3397[4], i3397[5], 0, i3396, 'sprite')
  i3396.flipX = !!i3397[6]
  i3396.flipY = !!i3397[7]
  i3396.drawMode = i3397[8]
  i3396.size = new pc.Vec2( i3397[9], i3397[10] )
  i3396.tileMode = i3397[11]
  i3396.adaptiveModeThreshold = i3397[12]
  i3396.maskInteraction = i3397[13]
  i3396.spriteSortPoint = i3397[14]
  i3396.enabled = !!i3397[15]
  request.r(i3397[16], i3397[17], 0, i3396, 'sharedMaterial')
  var i3399 = i3397[18]
  var i3398 = []
  for(var i = 0; i < i3399.length; i += 2) {
  request.r(i3399[i + 0], i3399[i + 1], 2, i3398, '')
  }
  i3396.sharedMaterials = i3398
  i3396.receiveShadows = !!i3397[19]
  i3396.shadowCastingMode = i3397[20]
  i3396.sortingLayerID = i3397[21]
  i3396.sortingOrder = i3397[22]
  i3396.lightmapIndex = i3397[23]
  i3396.lightmapSceneIndex = i3397[24]
  i3396.lightmapScaleOffset = new pc.Vec4( i3397[25], i3397[26], i3397[27], i3397[28] )
  i3396.lightProbeUsage = i3397[29]
  i3396.reflectionProbeUsage = i3397[30]
  return i3396
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i3400 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i3401 = data
  request.r(i3401[0], i3401[1], 0, i3400, 'animatorController')
  request.r(i3401[2], i3401[3], 0, i3400, 'avatar')
  i3400.updateMode = i3401[4]
  i3400.hasTransformHierarchy = !!i3401[5]
  i3400.applyRootMotion = !!i3401[6]
  var i3403 = i3401[7]
  var i3402 = []
  for(var i = 0; i < i3403.length; i += 2) {
  request.r(i3403[i + 0], i3403[i + 1], 2, i3402, '')
  }
  i3400.humanBones = i3402
  i3400.enabled = !!i3401[8]
  return i3400
}

Deserializers["MoveBetweenPoints"] = function (request, data, root) {
  var i3406 = root || request.c( 'MoveBetweenPoints' )
  var i3407 = data
  request.r(i3407[0], i3407[1], 0, i3406, 'pointA')
  request.r(i3407[2], i3407[3], 0, i3406, 'pointB')
  i3406.duration = i3407[4]
  return i3406
}

Deserializers["ScreenHeightPositionAnchor"] = function (request, data, root) {
  var i3408 = root || request.c( 'ScreenHeightPositionAnchor' )
  var i3409 = data
  request.r(i3409[0], i3409[1], 0, i3408, 'anchorPoint')
  request.r(i3409[2], i3409[3], 0, i3408, 'targetCamera')
  i3408.viewportYRatio = i3409[4]
  i3408.alignOnStart = !!i3409[5]
  i3408.alignOnEnable = !!i3409[6]
  i3408.realignOnScreenSizeChanged = !!i3409[7]
  i3408.drawGizmos = !!i3409[8]
  i3408.targetLineColor = new pc.Color(i3409[9], i3409[10], i3409[11], i3409[12])
  i3408.anchorColor = new pc.Color(i3409[13], i3409[14], i3409[15], i3409[16])
  return i3408
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i3410 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i3411 = data
  i3410.usedByComposite = !!i3411[0]
  i3410.autoTiling = !!i3411[1]
  i3410.size = new pc.Vec2( i3411[2], i3411[3] )
  i3410.edgeRadius = i3411[4]
  i3410.enabled = !!i3411[5]
  i3410.isTrigger = !!i3411[6]
  i3410.usedByEffector = !!i3411[7]
  i3410.density = i3411[8]
  i3410.offset = new pc.Vec2( i3411[9], i3411[10] )
  request.r(i3411[11], i3411[12], 0, i3410, 'material')
  return i3410
}

Deserializers["ClickToStore"] = function (request, data, root) {
  var i3412 = root || request.c( 'ClickToStore' )
  var i3413 = data
  return i3412
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i3414 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i3415 = data
  i3414.pivot = new pc.Vec2( i3415[0], i3415[1] )
  i3414.anchorMin = new pc.Vec2( i3415[2], i3415[3] )
  i3414.anchorMax = new pc.Vec2( i3415[4], i3415[5] )
  i3414.sizeDelta = new pc.Vec2( i3415[6], i3415[7] )
  i3414.anchoredPosition3D = new pc.Vec3( i3415[8], i3415[9], i3415[10] )
  i3414.rotation = new pc.Quat(i3415[11], i3415[12], i3415[13], i3415[14])
  i3414.scale = new pc.Vec3( i3415[15], i3415[16], i3415[17] )
  return i3414
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i3416 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i3417 = data
  request.r(i3417[0], i3417[1], 0, i3416, 'additionalVertexStreams')
  i3416.enabled = !!i3417[2]
  request.r(i3417[3], i3417[4], 0, i3416, 'sharedMaterial')
  var i3419 = i3417[5]
  var i3418 = []
  for(var i = 0; i < i3419.length; i += 2) {
  request.r(i3419[i + 0], i3419[i + 1], 2, i3418, '')
  }
  i3416.sharedMaterials = i3418
  i3416.receiveShadows = !!i3417[6]
  i3416.shadowCastingMode = i3417[7]
  i3416.sortingLayerID = i3417[8]
  i3416.sortingOrder = i3417[9]
  i3416.lightmapIndex = i3417[10]
  i3416.lightmapSceneIndex = i3417[11]
  i3416.lightmapScaleOffset = new pc.Vec4( i3417[12], i3417[13], i3417[14], i3417[15] )
  i3416.lightProbeUsage = i3417[16]
  i3416.reflectionProbeUsage = i3417[17]
  return i3416
}

Deserializers["TMPro.TextMeshPro"] = function (request, data, root) {
  var i3420 = root || request.c( 'TMPro.TextMeshPro' )
  var i3421 = data
  i3420._SortingLayer = i3421[0]
  i3420._SortingLayerID = i3421[1]
  i3420._SortingOrder = i3421[2]
  i3420.m_hasFontAssetChanged = !!i3421[3]
  request.r(i3421[4], i3421[5], 0, i3420, 'm_renderer')
  i3420.m_maskType = i3421[6]
  i3420.m_text = i3421[7]
  i3420.m_isRightToLeft = !!i3421[8]
  request.r(i3421[9], i3421[10], 0, i3420, 'm_fontAsset')
  request.r(i3421[11], i3421[12], 0, i3420, 'm_sharedMaterial')
  var i3423 = i3421[13]
  var i3422 = []
  for(var i = 0; i < i3423.length; i += 2) {
  request.r(i3423[i + 0], i3423[i + 1], 2, i3422, '')
  }
  i3420.m_fontSharedMaterials = i3422
  request.r(i3421[14], i3421[15], 0, i3420, 'm_fontMaterial')
  var i3425 = i3421[16]
  var i3424 = []
  for(var i = 0; i < i3425.length; i += 2) {
  request.r(i3425[i + 0], i3425[i + 1], 2, i3424, '')
  }
  i3420.m_fontMaterials = i3424
  i3420.m_fontColor32 = UnityEngine.Color32.ConstructColor(i3421[17], i3421[18], i3421[19], i3421[20])
  i3420.m_fontColor = new pc.Color(i3421[21], i3421[22], i3421[23], i3421[24])
  i3420.m_enableVertexGradient = !!i3421[25]
  i3420.m_colorMode = i3421[26]
  i3420.m_fontColorGradient = request.d('TMPro.VertexGradient', i3421[27], i3420.m_fontColorGradient)
  request.r(i3421[28], i3421[29], 0, i3420, 'm_fontColorGradientPreset')
  request.r(i3421[30], i3421[31], 0, i3420, 'm_spriteAsset')
  i3420.m_tintAllSprites = !!i3421[32]
  request.r(i3421[33], i3421[34], 0, i3420, 'm_StyleSheet')
  i3420.m_TextStyleHashCode = i3421[35]
  i3420.m_overrideHtmlColors = !!i3421[36]
  i3420.m_faceColor = UnityEngine.Color32.ConstructColor(i3421[37], i3421[38], i3421[39], i3421[40])
  i3420.m_fontSize = i3421[41]
  i3420.m_fontSizeBase = i3421[42]
  i3420.m_fontWeight = i3421[43]
  i3420.m_enableAutoSizing = !!i3421[44]
  i3420.m_fontSizeMin = i3421[45]
  i3420.m_fontSizeMax = i3421[46]
  i3420.m_fontStyle = i3421[47]
  i3420.m_HorizontalAlignment = i3421[48]
  i3420.m_VerticalAlignment = i3421[49]
  i3420.m_textAlignment = i3421[50]
  i3420.m_characterSpacing = i3421[51]
  i3420.m_wordSpacing = i3421[52]
  i3420.m_lineSpacing = i3421[53]
  i3420.m_lineSpacingMax = i3421[54]
  i3420.m_paragraphSpacing = i3421[55]
  i3420.m_charWidthMaxAdj = i3421[56]
  i3420.m_TextWrappingMode = i3421[57]
  i3420.m_wordWrappingRatios = i3421[58]
  i3420.m_overflowMode = i3421[59]
  request.r(i3421[60], i3421[61], 0, i3420, 'm_linkedTextComponent')
  request.r(i3421[62], i3421[63], 0, i3420, 'parentLinkedComponent')
  i3420.m_enableKerning = !!i3421[64]
  var i3427 = i3421[65]
  var i3426 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i3427.length; i += 1) {
    i3426.add(i3427[i + 0]);
  }
  i3420.m_ActiveFontFeatures = i3426
  i3420.m_enableExtraPadding = !!i3421[66]
  i3420.checkPaddingRequired = !!i3421[67]
  i3420.m_isRichText = !!i3421[68]
  i3420.m_parseCtrlCharacters = !!i3421[69]
  i3420.m_isOrthographic = !!i3421[70]
  i3420.m_isCullingEnabled = !!i3421[71]
  i3420.m_horizontalMapping = i3421[72]
  i3420.m_verticalMapping = i3421[73]
  i3420.m_uvLineOffset = i3421[74]
  i3420.m_geometrySortingOrder = i3421[75]
  i3420.m_IsTextObjectScaleStatic = !!i3421[76]
  i3420.m_VertexBufferAutoSizeReduction = !!i3421[77]
  i3420.m_useMaxVisibleDescender = !!i3421[78]
  i3420.m_pageToDisplay = i3421[79]
  i3420.m_margin = new pc.Vec4( i3421[80], i3421[81], i3421[82], i3421[83] )
  i3420.m_isUsingLegacyAnimationComponent = !!i3421[84]
  i3420.m_isVolumetricText = !!i3421[85]
  request.r(i3421[86], i3421[87], 0, i3420, 'm_Material')
  i3420.m_EmojiFallbackSupport = !!i3421[88]
  i3420.m_Maskable = !!i3421[89]
  i3420.m_Color = new pc.Color(i3421[90], i3421[91], i3421[92], i3421[93])
  i3420.m_RaycastTarget = !!i3421[94]
  i3420.m_RaycastPadding = new pc.Vec4( i3421[95], i3421[96], i3421[97], i3421[98] )
  return i3420
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i3428 = root || request.c( 'TMPro.VertexGradient' )
  var i3429 = data
  i3428.topLeft = new pc.Color(i3429[0], i3429[1], i3429[2], i3429[3])
  i3428.topRight = new pc.Color(i3429[4], i3429[5], i3429[6], i3429[7])
  i3428.bottomLeft = new pc.Color(i3429[8], i3429[9], i3429[10], i3429[11])
  i3428.bottomRight = new pc.Color(i3429[12], i3429[13], i3429[14], i3429[15])
  return i3428
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i3432 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i3433 = data
  request.r(i3433[0], i3433[1], 0, i3432, 'sharedMesh')
  return i3432
}

Deserializers["PlayerCardUIManager"] = function (request, data, root) {
  var i3434 = root || request.c( 'PlayerCardUIManager' )
  var i3435 = data
  request.r(i3435[0], i3435[1], 0, i3434, 'cardPanel')
  var i3437 = i3435[2]
  var i3436 = []
  for(var i = 0; i < i3437.length; i += 2) {
  request.r(i3437[i + 0], i3437[i + 1], 2, i3436, '')
  }
  i3434.extraObjectsToActivate = i3436
  i3434.waitTime = i3435[3]
  var i3439 = i3435[4]
  var i3438 = []
  for(var i = 0; i < i3439.length; i += 2) {
  request.r(i3439[i + 0], i3439[i + 1], 2, i3438, '')
  }
  i3434.objectsToTurnOnAfterWait = i3438
  var i3441 = i3435[5]
  var i3440 = []
  for(var i = 0; i < i3441.length; i += 2) {
  request.r(i3441[i + 0], i3441[i + 1], 2, i3440, '')
  }
  i3434.objectsToTurnOffAfterWait = i3440
  request.r(i3435[6], i3435[7], 0, i3434, 'playerNameText')
  request.r(i3435[8], i3435[9], 0, i3434, 'playerImage')
  return i3434
}

Deserializers["Ply_SoundManager"] = function (request, data, root) {
  var i3444 = root || request.c( 'Ply_SoundManager' )
  var i3445 = data
  i3444.fxAudio = request.d('FxAudio', i3445[0], i3444.fxAudio)
  request.r(i3445[1], i3445[2], 0, i3444, 'bgm1')
  return i3444
}

Deserializers["FxAudio"] = function (request, data, root) {
  var i3446 = root || request.c( 'FxAudio' )
  var i3447 = data
  i3446.ClickBox = request.d('SoundData', i3447[0], i3446.ClickBox)
  i3446.Happy = request.d('SoundData', i3447[1], i3446.Happy)
  i3446.Wrong = request.d('SoundData', i3447[2], i3446.Wrong)
  i3446.Spray = request.d('SoundData', i3447[3], i3446.Spray)
  i3446.Brush = request.d('SoundData', i3447[4], i3446.Brush)
  return i3446
}

Deserializers["SoundData"] = function (request, data, root) {
  var i3448 = root || request.c( 'SoundData' )
  var i3449 = data
  request.r(i3449[0], i3449[1], 0, i3448, 'clip')
  i3448.repeatCount = i3449[2]
  return i3448
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i3450 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i3451 = data
  request.r(i3451[0], i3451[1], 0, i3450, 'clip')
  request.r(i3451[2], i3451[3], 0, i3450, 'outputAudioMixerGroup')
  i3450.playOnAwake = !!i3451[4]
  i3450.loop = !!i3451[5]
  i3450.time = i3451[6]
  i3450.volume = i3451[7]
  i3450.pitch = i3451[8]
  i3450.enabled = !!i3451[9]
  return i3450
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i3452 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i3453 = data
  i3452.planeDistance = i3453[0]
  i3452.referencePixelsPerUnit = i3453[1]
  i3452.isFallbackOverlay = !!i3453[2]
  i3452.renderMode = i3453[3]
  i3452.renderOrder = i3453[4]
  i3452.sortingLayerName = i3453[5]
  i3452.sortingOrder = i3453[6]
  i3452.scaleFactor = i3453[7]
  request.r(i3453[8], i3453[9], 0, i3452, 'worldCamera')
  i3452.overrideSorting = !!i3453[10]
  i3452.pixelPerfect = !!i3453[11]
  i3452.targetDisplay = i3453[12]
  i3452.overridePixelPerfect = !!i3453[13]
  i3452.enabled = !!i3453[14]
  return i3452
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i3454 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i3455 = data
  i3454.m_UiScaleMode = i3455[0]
  i3454.m_ReferencePixelsPerUnit = i3455[1]
  i3454.m_ScaleFactor = i3455[2]
  i3454.m_ReferenceResolution = new pc.Vec2( i3455[3], i3455[4] )
  i3454.m_ScreenMatchMode = i3455[5]
  i3454.m_MatchWidthOrHeight = i3455[6]
  i3454.m_PhysicalUnit = i3455[7]
  i3454.m_FallbackScreenDPI = i3455[8]
  i3454.m_DefaultSpriteDPI = i3455[9]
  i3454.m_DynamicPixelsPerUnit = i3455[10]
  i3454.m_PresetInfoIsWorld = !!i3455[11]
  return i3454
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i3456 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i3457 = data
  i3456.m_IgnoreReversedGraphics = !!i3457[0]
  i3456.m_BlockingObjects = i3457[1]
  i3456.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i3457[2] )
  return i3456
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i3458 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i3459 = data
  i3458.cullTransparentMesh = !!i3459[0]
  return i3458
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i3460 = root || request.c( 'UnityEngine.UI.Image' )
  var i3461 = data
  request.r(i3461[0], i3461[1], 0, i3460, 'm_Sprite')
  i3460.m_Type = i3461[2]
  i3460.m_PreserveAspect = !!i3461[3]
  i3460.m_FillCenter = !!i3461[4]
  i3460.m_FillMethod = i3461[5]
  i3460.m_FillAmount = i3461[6]
  i3460.m_FillClockwise = !!i3461[7]
  i3460.m_FillOrigin = i3461[8]
  i3460.m_UseSpriteMesh = !!i3461[9]
  i3460.m_PixelsPerUnitMultiplier = i3461[10]
  request.r(i3461[11], i3461[12], 0, i3460, 'm_Material')
  i3460.m_Maskable = !!i3461[13]
  i3460.m_Color = new pc.Color(i3461[14], i3461[15], i3461[16], i3461[17])
  i3460.m_RaycastTarget = !!i3461[18]
  i3460.m_RaycastPadding = new pc.Vec4( i3461[19], i3461[20], i3461[21], i3461[22] )
  return i3460
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D"] = function (request, data, root) {
  var i3462 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D' )
  var i3463 = data
  i3462.usedByComposite = !!i3463[0]
  i3462.autoTiling = !!i3463[1]
  var i3465 = i3463[2]
  var i3464 = []
  for(var i = 0; i < i3465.length; i += 1) {
  var i3467 = i3465[i + 0]
  var i3466 = []
  for(var i = 0; i < i3467.length; i += 2) {
    i3466.push( new pc.Vec2( i3467[i + 0], i3467[i + 1] ) );
  }
    i3464.push( i3466 );
  }
  i3462.points = i3464
  i3462.enabled = !!i3463[3]
  i3462.isTrigger = !!i3463[4]
  i3462.usedByEffector = !!i3463[5]
  i3462.density = i3463[6]
  i3462.offset = new pc.Vec2( i3463[7], i3463[8] )
  request.r(i3463[9], i3463[10], 0, i3462, 'material')
  return i3462
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i3474 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i3475 = data
  i3474.bodyType = i3475[0]
  request.r(i3475[1], i3475[2], 0, i3474, 'material')
  i3474.simulated = !!i3475[3]
  i3474.useAutoMass = !!i3475[4]
  i3474.mass = i3475[5]
  i3474.drag = i3475[6]
  i3474.angularDrag = i3475[7]
  i3474.gravityScale = i3475[8]
  i3474.collisionDetectionMode = i3475[9]
  i3474.sleepMode = i3475[10]
  i3474.constraints = i3475[11]
  return i3474
}

Deserializers["BatStrikeController"] = function (request, data, root) {
  var i3476 = root || request.c( 'BatStrikeController' )
  var i3477 = data
  i3476.pullSpeed = i3477[0]
  i3476.maxPullDistance = i3477[1]
  i3476.minHoldTime = i3477[2]
  i3476.strikeForce = i3477[3]
  i3476.targetTag = i3477[4]
  return i3476
}

Deserializers["CupCollision"] = function (request, data, root) {
  var i3478 = root || request.c( 'CupCollision' )
  var i3479 = data
  i3478.baseTag = i3479[0]
  request.r(i3479[1], i3479[2], 0, i3478, 'objectToActivate')
  return i3478
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider2D"] = function (request, data, root) {
  var i3480 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider2D' )
  var i3481 = data
  i3480.size = new pc.Vec2( i3481[0], i3481[1] )
  i3480.direction = i3481[2]
  i3480.enabled = !!i3481[3]
  i3480.isTrigger = !!i3481[4]
  i3480.usedByEffector = !!i3481[5]
  i3480.density = i3481[6]
  i3480.offset = new pc.Vec2( i3481[7], i3481[8] )
  request.r(i3481[9], i3481[10], 0, i3480, 'material')
  return i3480
}

Deserializers["SlotTrigger"] = function (request, data, root) {
  var i3482 = root || request.c( 'SlotTrigger' )
  var i3483 = data
  request.r(i3483[0], i3483[1], 0, i3482, 'cardData')
  i3482.targetTag = i3483[2]
  request.r(i3483[3], i3483[4], 0, i3482, 'yAnchor')
  i3482.moveSpeed = i3483[5]
  request.r(i3483[6], i3483[7], 0, i3482, 'objectToMoveDown')
  i3482.targetScreenYRatio = i3483[8]
  return i3482
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteMask"] = function (request, data, root) {
  var i3484 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteMask' )
  var i3485 = data
  i3484.frontSortingLayerID = i3485[0]
  i3484.frontSortingOrder = i3485[1]
  i3484.backSortingLayerID = i3485[2]
  i3484.backSortingOrder = i3485[3]
  i3484.alphaCutoff = i3485[4]
  request.r(i3485[5], i3485[6], 0, i3484, 'sprite')
  i3484.tileMode = i3485[7]
  i3484.isCustomRangeActive = !!i3485[8]
  i3484.spriteSortPoint = i3485[9]
  i3484.enabled = !!i3485[10]
  request.r(i3485[11], i3485[12], 0, i3484, 'sharedMaterial')
  var i3487 = i3485[13]
  var i3486 = []
  for(var i = 0; i < i3487.length; i += 2) {
  request.r(i3487[i + 0], i3487[i + 1], 2, i3486, '')
  }
  i3484.sharedMaterials = i3486
  i3484.receiveShadows = !!i3485[14]
  i3484.shadowCastingMode = i3485[15]
  i3484.sortingLayerID = i3485[16]
  i3484.sortingOrder = i3485[17]
  i3484.lightmapIndex = i3485[18]
  i3484.lightmapSceneIndex = i3485[19]
  i3484.lightmapScaleOffset = new pc.Vec4( i3485[20], i3485[21], i3485[22], i3485[23] )
  i3484.lightProbeUsage = i3485[24]
  i3484.reflectionProbeUsage = i3485[25]
  return i3484
}

Deserializers["HideOnFirstClick"] = function (request, data, root) {
  var i3488 = root || request.c( 'HideOnFirstClick' )
  var i3489 = data
  request.r(i3489[0], i3489[1], 0, i3488, 'objectToHide')
  return i3488
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i3490 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i3491 = data
  request.r(i3491[0], i3491[1], 0, i3490, 'm_FirstSelected')
  i3490.m_sendNavigationEvents = !!i3491[2]
  i3490.m_DragThreshold = i3491[3]
  return i3490
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i3492 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i3493 = data
  i3492.m_HorizontalAxis = i3493[0]
  i3492.m_VerticalAxis = i3493[1]
  i3492.m_SubmitButton = i3493[2]
  i3492.m_CancelButton = i3493[3]
  i3492.m_InputActionsPerSecond = i3493[4]
  i3492.m_RepeatDelay = i3493[5]
  i3492.m_ForceModuleActive = !!i3493[6]
  i3492.m_SendPointerHoverToParent = !!i3493[7]
  return i3492
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i3494 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i3495 = data
  i3494.ambientIntensity = i3495[0]
  i3494.reflectionIntensity = i3495[1]
  i3494.ambientMode = i3495[2]
  i3494.ambientLight = new pc.Color(i3495[3], i3495[4], i3495[5], i3495[6])
  i3494.ambientSkyColor = new pc.Color(i3495[7], i3495[8], i3495[9], i3495[10])
  i3494.ambientGroundColor = new pc.Color(i3495[11], i3495[12], i3495[13], i3495[14])
  i3494.ambientEquatorColor = new pc.Color(i3495[15], i3495[16], i3495[17], i3495[18])
  i3494.fogColor = new pc.Color(i3495[19], i3495[20], i3495[21], i3495[22])
  i3494.fogEndDistance = i3495[23]
  i3494.fogStartDistance = i3495[24]
  i3494.fogDensity = i3495[25]
  i3494.fog = !!i3495[26]
  request.r(i3495[27], i3495[28], 0, i3494, 'skybox')
  i3494.fogMode = i3495[29]
  var i3497 = i3495[30]
  var i3496 = []
  for(var i = 0; i < i3497.length; i += 1) {
    i3496.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i3497[i + 0]) );
  }
  i3494.lightmaps = i3496
  i3494.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i3495[31], i3494.lightProbes)
  i3494.lightmapsMode = i3495[32]
  i3494.mixedBakeMode = i3495[33]
  i3494.environmentLightingMode = i3495[34]
  i3494.ambientProbe = new pc.SphericalHarmonicsL2(i3495[35])
  i3494.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i3495[36])
  i3494.useReferenceAmbientProbe = !!i3495[37]
  request.r(i3495[38], i3495[39], 0, i3494, 'customReflection')
  request.r(i3495[40], i3495[41], 0, i3494, 'defaultReflection')
  i3494.defaultReflectionMode = i3495[42]
  i3494.defaultReflectionResolution = i3495[43]
  i3494.sunLightObjectId = i3495[44]
  i3494.pixelLightCount = i3495[45]
  i3494.defaultReflectionHDR = !!i3495[46]
  i3494.hasLightDataAsset = !!i3495[47]
  i3494.hasManualGenerate = !!i3495[48]
  return i3494
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i3500 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i3501 = data
  request.r(i3501[0], i3501[1], 0, i3500, 'lightmapColor')
  request.r(i3501[2], i3501[3], 0, i3500, 'lightmapDirection')
  request.r(i3501[4], i3501[5], 0, i3500, 'shadowMask')
  return i3500
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i3502 = root || new UnityEngine.LightProbes()
  var i3503 = data
  return i3502
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.PhysicsMaterial2D"] = function (request, data, root) {
  var i3510 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.PhysicsMaterial2D' )
  var i3511 = data
  i3510.name = i3511[0]
  i3510.bounciness = i3511[1]
  i3510.friction = i3511[2]
  return i3510
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i3512 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i3513 = data
  var i3515 = i3513[0]
  var i3514 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i3515.length; i += 1) {
    i3514.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i3515[i + 0]));
  }
  i3512.ShaderCompilationErrors = i3514
  i3512.name = i3513[1]
  i3512.guid = i3513[2]
  var i3517 = i3513[3]
  var i3516 = []
  for(var i = 0; i < i3517.length; i += 1) {
    i3516.push( i3517[i + 0] );
  }
  i3512.shaderDefinedKeywords = i3516
  var i3519 = i3513[4]
  var i3518 = []
  for(var i = 0; i < i3519.length; i += 1) {
    i3518.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i3519[i + 0]) );
  }
  i3512.passes = i3518
  var i3521 = i3513[5]
  var i3520 = []
  for(var i = 0; i < i3521.length; i += 1) {
    i3520.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i3521[i + 0]) );
  }
  i3512.usePasses = i3520
  var i3523 = i3513[6]
  var i3522 = []
  for(var i = 0; i < i3523.length; i += 1) {
    i3522.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i3523[i + 0]) );
  }
  i3512.defaultParameterValues = i3522
  request.r(i3513[7], i3513[8], 0, i3512, 'unityFallbackShader')
  i3512.readDepth = !!i3513[9]
  i3512.hasDepthOnlyPass = !!i3513[10]
  i3512.isCreatedByShaderGraph = !!i3513[11]
  i3512.disableBatching = !!i3513[12]
  i3512.compiled = !!i3513[13]
  return i3512
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i3526 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i3527 = data
  i3526.shaderName = i3527[0]
  i3526.errorMessage = i3527[1]
  return i3526
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i3532 = root || new pc.UnityShaderPass()
  var i3533 = data
  i3532.id = i3533[0]
  i3532.subShaderIndex = i3533[1]
  i3532.name = i3533[2]
  i3532.passType = i3533[3]
  i3532.grabPassTextureName = i3533[4]
  i3532.usePass = !!i3533[5]
  i3532.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3533[6], i3532.zTest)
  i3532.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3533[7], i3532.zWrite)
  i3532.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3533[8], i3532.culling)
  i3532.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i3533[9], i3532.blending)
  i3532.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i3533[10], i3532.alphaBlending)
  i3532.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3533[11], i3532.colorWriteMask)
  i3532.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3533[12], i3532.offsetUnits)
  i3532.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3533[13], i3532.offsetFactor)
  i3532.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3533[14], i3532.stencilRef)
  i3532.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3533[15], i3532.stencilReadMask)
  i3532.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3533[16], i3532.stencilWriteMask)
  i3532.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3533[17], i3532.stencilOp)
  i3532.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3533[18], i3532.stencilOpFront)
  i3532.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3533[19], i3532.stencilOpBack)
  var i3535 = i3533[20]
  var i3534 = []
  for(var i = 0; i < i3535.length; i += 1) {
    i3534.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i3535[i + 0]) );
  }
  i3532.tags = i3534
  var i3537 = i3533[21]
  var i3536 = []
  for(var i = 0; i < i3537.length; i += 1) {
    i3536.push( i3537[i + 0] );
  }
  i3532.passDefinedKeywords = i3536
  var i3539 = i3533[22]
  var i3538 = []
  for(var i = 0; i < i3539.length; i += 1) {
    i3538.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i3539[i + 0]) );
  }
  i3532.passDefinedKeywordGroups = i3538
  var i3541 = i3533[23]
  var i3540 = []
  for(var i = 0; i < i3541.length; i += 1) {
    i3540.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i3541[i + 0]) );
  }
  i3532.variants = i3540
  var i3543 = i3533[24]
  var i3542 = []
  for(var i = 0; i < i3543.length; i += 1) {
    i3542.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i3543[i + 0]) );
  }
  i3532.excludedVariants = i3542
  i3532.hasDepthReader = !!i3533[25]
  return i3532
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i3544 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i3545 = data
  i3544.val = i3545[0]
  i3544.name = i3545[1]
  return i3544
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i3546 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i3547 = data
  i3546.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3547[0], i3546.src)
  i3546.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3547[1], i3546.dst)
  i3546.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3547[2], i3546.op)
  return i3546
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i3548 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i3549 = data
  i3548.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3549[0], i3548.pass)
  i3548.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3549[1], i3548.fail)
  i3548.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3549[2], i3548.zFail)
  i3548.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3549[3], i3548.comp)
  return i3548
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i3552 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i3553 = data
  i3552.name = i3553[0]
  i3552.value = i3553[1]
  return i3552
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i3556 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i3557 = data
  var i3559 = i3557[0]
  var i3558 = []
  for(var i = 0; i < i3559.length; i += 1) {
    i3558.push( i3559[i + 0] );
  }
  i3556.keywords = i3558
  i3556.hasDiscard = !!i3557[1]
  return i3556
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i3562 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i3563 = data
  i3562.passId = i3563[0]
  i3562.subShaderIndex = i3563[1]
  var i3565 = i3563[2]
  var i3564 = []
  for(var i = 0; i < i3565.length; i += 1) {
    i3564.push( i3565[i + 0] );
  }
  i3562.keywords = i3564
  i3562.vertexProgram = i3563[3]
  i3562.fragmentProgram = i3563[4]
  i3562.exportedForWebGl2 = !!i3563[5]
  i3562.readDepth = !!i3563[6]
  return i3562
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i3568 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i3569 = data
  request.r(i3569[0], i3569[1], 0, i3568, 'shader')
  i3568.pass = i3569[2]
  return i3568
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i3572 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i3573 = data
  i3572.name = i3573[0]
  i3572.type = i3573[1]
  i3572.value = new pc.Vec4( i3573[2], i3573[3], i3573[4], i3573[5] )
  i3572.textureValue = i3573[6]
  i3572.shaderPropertyFlag = i3573[7]
  return i3572
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i3574 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i3575 = data
  i3574.name = i3575[0]
  request.r(i3575[1], i3575[2], 0, i3574, 'texture')
  i3574.aabb = i3575[3]
  i3574.vertices = i3575[4]
  i3574.triangles = i3575[5]
  i3574.textureRect = UnityEngine.Rect.MinMaxRect(i3575[6], i3575[7], i3575[8], i3575[9])
  i3574.packedRect = UnityEngine.Rect.MinMaxRect(i3575[10], i3575[11], i3575[12], i3575[13])
  i3574.border = new pc.Vec4( i3575[14], i3575[15], i3575[16], i3575[17] )
  i3574.transparency = i3575[18]
  i3574.bounds = i3575[19]
  i3574.pixelsPerUnit = i3575[20]
  i3574.textureWidth = i3575[21]
  i3574.textureHeight = i3575[22]
  i3574.nativeSize = new pc.Vec2( i3575[23], i3575[24] )
  i3574.pivot = new pc.Vec2( i3575[25], i3575[26] )
  i3574.textureRectOffset = new pc.Vec2( i3575[27], i3575[28] )
  return i3574
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i3576 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i3577 = data
  i3576.name = i3577[0]
  return i3576
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i3578 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i3579 = data
  i3578.name = i3579[0]
  i3578.wrapMode = i3579[1]
  i3578.isLooping = !!i3579[2]
  i3578.length = i3579[3]
  var i3581 = i3579[4]
  var i3580 = []
  for(var i = 0; i < i3581.length; i += 1) {
    i3580.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i3581[i + 0]) );
  }
  i3578.curves = i3580
  var i3583 = i3579[5]
  var i3582 = []
  for(var i = 0; i < i3583.length; i += 1) {
    i3582.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i3583[i + 0]) );
  }
  i3578.events = i3582
  i3578.halfPrecision = !!i3579[6]
  i3578._frameRate = i3579[7]
  i3578.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i3579[8], i3578.localBounds)
  i3578.hasMuscleCurves = !!i3579[9]
  var i3585 = i3579[10]
  var i3584 = []
  for(var i = 0; i < i3585.length; i += 1) {
    i3584.push( i3585[i + 0] );
  }
  i3578.clipMuscleConstant = i3584
  i3578.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i3579[11], i3578.clipBindingConstant)
  return i3578
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i3588 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i3589 = data
  i3588.path = i3589[0]
  i3588.hash = i3589[1]
  i3588.componentType = i3589[2]
  i3588.property = i3589[3]
  i3588.keys = i3589[4]
  var i3591 = i3589[5]
  var i3590 = []
  for(var i = 0; i < i3591.length; i += 1) {
    i3590.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i3591[i + 0]) );
  }
  i3588.objectReferenceKeys = i3590
  return i3588
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i3594 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i3595 = data
  i3594.time = i3595[0]
  request.r(i3595[1], i3595[2], 0, i3594, 'value')
  return i3594
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i3598 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i3599 = data
  i3598.functionName = i3599[0]
  i3598.floatParameter = i3599[1]
  i3598.intParameter = i3599[2]
  i3598.stringParameter = i3599[3]
  request.r(i3599[4], i3599[5], 0, i3598, 'objectReferenceParameter')
  i3598.time = i3599[6]
  return i3598
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i3600 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i3601 = data
  i3600.center = new pc.Vec3( i3601[0], i3601[1], i3601[2] )
  i3600.extends = new pc.Vec3( i3601[3], i3601[4], i3601[5] )
  return i3600
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i3604 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i3605 = data
  var i3607 = i3605[0]
  var i3606 = []
  for(var i = 0; i < i3607.length; i += 1) {
    i3606.push( i3607[i + 0] );
  }
  i3604.genericBindings = i3606
  var i3609 = i3605[1]
  var i3608 = []
  for(var i = 0; i < i3609.length; i += 1) {
    i3608.push( i3609[i + 0] );
  }
  i3604.pptrCurveMapping = i3608
  return i3604
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i3610 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i3611 = data
  i3610.name = i3611[0]
  i3610.ascent = i3611[1]
  i3610.originalLineHeight = i3611[2]
  i3610.fontSize = i3611[3]
  var i3613 = i3611[4]
  var i3612 = []
  for(var i = 0; i < i3613.length; i += 1) {
    i3612.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i3613[i + 0]) );
  }
  i3610.characterInfo = i3612
  request.r(i3611[5], i3611[6], 0, i3610, 'texture')
  i3610.originalFontSize = i3611[7]
  return i3610
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i3616 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i3617 = data
  i3616.index = i3617[0]
  i3616.advance = i3617[1]
  i3616.bearing = i3617[2]
  i3616.glyphWidth = i3617[3]
  i3616.glyphHeight = i3617[4]
  i3616.minX = i3617[5]
  i3616.maxX = i3617[6]
  i3616.minY = i3617[7]
  i3616.maxY = i3617[8]
  i3616.uvBottomLeftX = i3617[9]
  i3616.uvBottomLeftY = i3617[10]
  i3616.uvBottomRightX = i3617[11]
  i3616.uvBottomRightY = i3617[12]
  i3616.uvTopLeftX = i3617[13]
  i3616.uvTopLeftY = i3617[14]
  i3616.uvTopRightX = i3617[15]
  i3616.uvTopRightY = i3617[16]
  return i3616
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i3618 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i3619 = data
  i3618.name = i3619[0]
  var i3621 = i3619[1]
  var i3620 = []
  for(var i = 0; i < i3621.length; i += 1) {
    i3620.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i3621[i + 0]) );
  }
  i3618.layers = i3620
  var i3623 = i3619[2]
  var i3622 = []
  for(var i = 0; i < i3623.length; i += 1) {
    i3622.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i3623[i + 0]) );
  }
  i3618.parameters = i3622
  i3618.animationClips = i3619[3]
  i3618.avatarUnsupported = i3619[4]
  return i3618
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i3626 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i3627 = data
  i3626.name = i3627[0]
  i3626.defaultWeight = i3627[1]
  i3626.blendingMode = i3627[2]
  i3626.avatarMask = i3627[3]
  i3626.syncedLayerIndex = i3627[4]
  i3626.syncedLayerAffectsTiming = !!i3627[5]
  i3626.syncedLayers = i3627[6]
  i3626.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i3627[7], i3626.stateMachine)
  return i3626
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i3628 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i3629 = data
  i3628.id = i3629[0]
  i3628.name = i3629[1]
  i3628.path = i3629[2]
  var i3631 = i3629[3]
  var i3630 = []
  for(var i = 0; i < i3631.length; i += 1) {
    i3630.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i3631[i + 0]) );
  }
  i3628.states = i3630
  var i3633 = i3629[4]
  var i3632 = []
  for(var i = 0; i < i3633.length; i += 1) {
    i3632.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i3633[i + 0]) );
  }
  i3628.machines = i3632
  var i3635 = i3629[5]
  var i3634 = []
  for(var i = 0; i < i3635.length; i += 1) {
    i3634.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i3635[i + 0]) );
  }
  i3628.entryStateTransitions = i3634
  var i3637 = i3629[6]
  var i3636 = []
  for(var i = 0; i < i3637.length; i += 1) {
    i3636.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i3637[i + 0]) );
  }
  i3628.exitStateTransitions = i3636
  var i3639 = i3629[7]
  var i3638 = []
  for(var i = 0; i < i3639.length; i += 1) {
    i3638.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i3639[i + 0]) );
  }
  i3628.anyStateTransitions = i3638
  i3628.defaultStateId = i3629[8]
  return i3628
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i3642 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i3643 = data
  i3642.id = i3643[0]
  i3642.name = i3643[1]
  i3642.cycleOffset = i3643[2]
  i3642.cycleOffsetParameter = i3643[3]
  i3642.cycleOffsetParameterActive = !!i3643[4]
  i3642.mirror = !!i3643[5]
  i3642.mirrorParameter = i3643[6]
  i3642.mirrorParameterActive = !!i3643[7]
  i3642.motionId = i3643[8]
  i3642.nameHash = i3643[9]
  i3642.fullPathHash = i3643[10]
  i3642.speed = i3643[11]
  i3642.speedParameter = i3643[12]
  i3642.speedParameterActive = !!i3643[13]
  i3642.tag = i3643[14]
  i3642.tagHash = i3643[15]
  i3642.writeDefaultValues = !!i3643[16]
  var i3645 = i3643[17]
  var i3644 = []
  for(var i = 0; i < i3645.length; i += 2) {
  request.r(i3645[i + 0], i3645[i + 1], 2, i3644, '')
  }
  i3642.behaviours = i3644
  var i3647 = i3643[18]
  var i3646 = []
  for(var i = 0; i < i3647.length; i += 1) {
    i3646.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i3647[i + 0]) );
  }
  i3642.transitions = i3646
  return i3642
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i3652 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i3653 = data
  i3652.fullPath = i3653[0]
  i3652.canTransitionToSelf = !!i3653[1]
  i3652.duration = i3653[2]
  i3652.exitTime = i3653[3]
  i3652.hasExitTime = !!i3653[4]
  i3652.hasFixedDuration = !!i3653[5]
  i3652.interruptionSource = i3653[6]
  i3652.offset = i3653[7]
  i3652.orderedInterruption = !!i3653[8]
  i3652.destinationStateId = i3653[9]
  i3652.isExit = !!i3653[10]
  i3652.mute = !!i3653[11]
  i3652.solo = !!i3653[12]
  var i3655 = i3653[13]
  var i3654 = []
  for(var i = 0; i < i3655.length; i += 1) {
    i3654.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i3655[i + 0]) );
  }
  i3652.conditions = i3654
  return i3652
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i3660 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i3661 = data
  i3660.destinationStateId = i3661[0]
  i3660.isExit = !!i3661[1]
  i3660.mute = !!i3661[2]
  i3660.solo = !!i3661[3]
  var i3663 = i3661[4]
  var i3662 = []
  for(var i = 0; i < i3663.length; i += 1) {
    i3662.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i3663[i + 0]) );
  }
  i3660.conditions = i3662
  return i3660
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i3666 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i3667 = data
  i3666.defaultBool = !!i3667[0]
  i3666.defaultFloat = i3667[1]
  i3666.defaultInt = i3667[2]
  i3666.name = i3667[3]
  i3666.nameHash = i3667[4]
  i3666.type = i3667[5]
  return i3666
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i3668 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i3669 = data
  i3668.name = i3669[0]
  i3668.bytes64 = i3669[1]
  i3668.data = i3669[2]
  return i3668
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i3670 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i3671 = data
  i3670.normalStyle = i3671[0]
  i3670.normalSpacingOffset = i3671[1]
  i3670.boldStyle = i3671[2]
  i3670.boldSpacing = i3671[3]
  i3670.italicStyle = i3671[4]
  i3670.tabSize = i3671[5]
  request.r(i3671[6], i3671[7], 0, i3670, 'atlas')
  i3670.m_SourceFontFileGUID = i3671[8]
  i3670.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i3671[9], i3670.m_CreationSettings)
  request.r(i3671[10], i3671[11], 0, i3670, 'm_SourceFontFile')
  i3670.m_SourceFontFilePath = i3671[12]
  i3670.m_AtlasPopulationMode = i3671[13]
  i3670.InternalDynamicOS = !!i3671[14]
  var i3673 = i3671[15]
  var i3672 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i3673.length; i += 1) {
    i3672.add(request.d('UnityEngine.TextCore.Glyph', i3673[i + 0]));
  }
  i3670.m_GlyphTable = i3672
  var i3675 = i3671[16]
  var i3674 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i3675.length; i += 1) {
    i3674.add(request.d('TMPro.TMP_Character', i3675[i + 0]));
  }
  i3670.m_CharacterTable = i3674
  var i3677 = i3671[17]
  var i3676 = []
  for(var i = 0; i < i3677.length; i += 2) {
  request.r(i3677[i + 0], i3677[i + 1], 2, i3676, '')
  }
  i3670.m_AtlasTextures = i3676
  i3670.m_AtlasTextureIndex = i3671[18]
  i3670.m_IsMultiAtlasTexturesEnabled = !!i3671[19]
  i3670.m_GetFontFeatures = !!i3671[20]
  i3670.m_ClearDynamicDataOnBuild = !!i3671[21]
  i3670.m_AtlasWidth = i3671[22]
  i3670.m_AtlasHeight = i3671[23]
  i3670.m_AtlasPadding = i3671[24]
  i3670.m_AtlasRenderMode = i3671[25]
  var i3679 = i3671[26]
  var i3678 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i3679.length; i += 1) {
    i3678.add(request.d('UnityEngine.TextCore.GlyphRect', i3679[i + 0]));
  }
  i3670.m_UsedGlyphRects = i3678
  var i3681 = i3671[27]
  var i3680 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i3681.length; i += 1) {
    i3680.add(request.d('UnityEngine.TextCore.GlyphRect', i3681[i + 0]));
  }
  i3670.m_FreeGlyphRects = i3680
  i3670.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i3671[28], i3670.m_FontFeatureTable)
  i3670.m_ShouldReimportFontFeatures = !!i3671[29]
  var i3683 = i3671[30]
  var i3682 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i3683.length; i += 2) {
  request.r(i3683[i + 0], i3683[i + 1], 1, i3682, '')
  }
  i3670.m_FallbackFontAssetTable = i3682
  var i3685 = i3671[31]
  var i3684 = []
  for(var i = 0; i < i3685.length; i += 1) {
    i3684.push( request.d('TMPro.TMP_FontWeightPair', i3685[i + 0]) );
  }
  i3670.m_FontWeightTable = i3684
  var i3687 = i3671[32]
  var i3686 = []
  for(var i = 0; i < i3687.length; i += 1) {
    i3686.push( request.d('TMPro.TMP_FontWeightPair', i3687[i + 0]) );
  }
  i3670.fontWeights = i3686
  i3670.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i3671[33], i3670.m_fontInfo)
  var i3689 = i3671[34]
  var i3688 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i3689.length; i += 1) {
    i3688.add(request.d('TMPro.TMP_Glyph', i3689[i + 0]));
  }
  i3670.m_glyphInfoList = i3688
  i3670.m_KerningTable = request.d('TMPro.KerningTable', i3671[35], i3670.m_KerningTable)
  var i3691 = i3671[36]
  var i3690 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i3691.length; i += 2) {
  request.r(i3691[i + 0], i3691[i + 1], 1, i3690, '')
  }
  i3670.fallbackFontAssets = i3690
  i3670.m_Version = i3671[37]
  i3670.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i3671[38], i3670.m_FaceInfo)
  request.r(i3671[39], i3671[40], 0, i3670, 'm_Material')
  return i3670
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i3692 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i3693 = data
  i3692.sourceFontFileName = i3693[0]
  i3692.sourceFontFileGUID = i3693[1]
  i3692.faceIndex = i3693[2]
  i3692.pointSizeSamplingMode = i3693[3]
  i3692.pointSize = i3693[4]
  i3692.padding = i3693[5]
  i3692.paddingMode = i3693[6]
  i3692.packingMode = i3693[7]
  i3692.atlasWidth = i3693[8]
  i3692.atlasHeight = i3693[9]
  i3692.characterSetSelectionMode = i3693[10]
  i3692.characterSequence = i3693[11]
  i3692.referencedFontAssetGUID = i3693[12]
  i3692.referencedTextAssetGUID = i3693[13]
  i3692.fontStyle = i3693[14]
  i3692.fontStyleModifier = i3693[15]
  i3692.renderMode = i3693[16]
  i3692.includeFontFeatures = !!i3693[17]
  return i3692
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i3696 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i3697 = data
  i3696.m_Index = i3697[0]
  i3696.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i3697[1], i3696.m_Metrics)
  i3696.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i3697[2], i3696.m_GlyphRect)
  i3696.m_Scale = i3697[3]
  i3696.m_AtlasIndex = i3697[4]
  i3696.m_ClassDefinitionType = i3697[5]
  return i3696
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i3698 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i3699 = data
  i3698.m_Width = i3699[0]
  i3698.m_Height = i3699[1]
  i3698.m_HorizontalBearingX = i3699[2]
  i3698.m_HorizontalBearingY = i3699[3]
  i3698.m_HorizontalAdvance = i3699[4]
  return i3698
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i3700 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i3701 = data
  i3700.m_X = i3701[0]
  i3700.m_Y = i3701[1]
  i3700.m_Width = i3701[2]
  i3700.m_Height = i3701[3]
  return i3700
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i3704 = root || request.c( 'TMPro.TMP_Character' )
  var i3705 = data
  i3704.m_ElementType = i3705[0]
  i3704.m_Unicode = i3705[1]
  i3704.m_GlyphIndex = i3705[2]
  i3704.m_Scale = i3705[3]
  return i3704
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i3710 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i3711 = data
  var i3713 = i3711[0]
  var i3712 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i3713.length; i += 1) {
    i3712.add(request.d('TMPro.MultipleSubstitutionRecord', i3713[i + 0]));
  }
  i3710.m_MultipleSubstitutionRecords = i3712
  var i3715 = i3711[1]
  var i3714 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i3715.length; i += 1) {
    i3714.add(request.d('TMPro.LigatureSubstitutionRecord', i3715[i + 0]));
  }
  i3710.m_LigatureSubstitutionRecords = i3714
  var i3717 = i3711[2]
  var i3716 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i3717.length; i += 1) {
    i3716.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i3717[i + 0]));
  }
  i3710.m_GlyphPairAdjustmentRecords = i3716
  var i3719 = i3711[3]
  var i3718 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i3719.length; i += 1) {
    i3718.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i3719[i + 0]));
  }
  i3710.m_MarkToBaseAdjustmentRecords = i3718
  var i3721 = i3711[4]
  var i3720 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i3721.length; i += 1) {
    i3720.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i3721[i + 0]));
  }
  i3710.m_MarkToMarkAdjustmentRecords = i3720
  return i3710
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i3724 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i3725 = data
  i3724.m_TargetGlyphID = i3725[0]
  i3724.m_SubstituteGlyphIDs = i3725[1]
  return i3724
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i3728 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i3729 = data
  i3728.m_ComponentGlyphIDs = i3729[0]
  i3728.m_LigatureGlyphID = i3729[1]
  return i3728
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i3732 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i3733 = data
  i3732.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i3733[0], i3732.m_FirstAdjustmentRecord)
  i3732.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i3733[1], i3732.m_SecondAdjustmentRecord)
  i3732.m_FeatureLookupFlags = i3733[2]
  return i3732
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i3734 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i3735 = data
  i3734.m_GlyphIndex = i3735[0]
  i3734.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i3735[1], i3734.m_GlyphValueRecord)
  return i3734
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i3736 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i3737 = data
  i3736.m_XPlacement = i3737[0]
  i3736.m_YPlacement = i3737[1]
  i3736.m_XAdvance = i3737[2]
  i3736.m_YAdvance = i3737[3]
  return i3736
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i3740 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i3741 = data
  i3740.m_BaseGlyphID = i3741[0]
  i3740.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i3741[1], i3740.m_BaseGlyphAnchorPoint)
  i3740.m_MarkGlyphID = i3741[2]
  i3740.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i3741[3], i3740.m_MarkPositionAdjustment)
  return i3740
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i3744 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i3745 = data
  i3744.m_BaseMarkGlyphID = i3745[0]
  i3744.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i3745[1], i3744.m_BaseMarkGlyphAnchorPoint)
  i3744.m_CombiningMarkGlyphID = i3745[2]
  i3744.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i3745[3], i3744.m_CombiningMarkPositionAdjustment)
  return i3744
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i3750 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i3751 = data
  request.r(i3751[0], i3751[1], 0, i3750, 'regularTypeface')
  request.r(i3751[2], i3751[3], 0, i3750, 'italicTypeface')
  return i3750
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i3752 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i3753 = data
  i3752.Name = i3753[0]
  i3752.PointSize = i3753[1]
  i3752.Scale = i3753[2]
  i3752.CharacterCount = i3753[3]
  i3752.LineHeight = i3753[4]
  i3752.Baseline = i3753[5]
  i3752.Ascender = i3753[6]
  i3752.CapHeight = i3753[7]
  i3752.Descender = i3753[8]
  i3752.CenterLine = i3753[9]
  i3752.SuperscriptOffset = i3753[10]
  i3752.SubscriptOffset = i3753[11]
  i3752.SubSize = i3753[12]
  i3752.Underline = i3753[13]
  i3752.UnderlineThickness = i3753[14]
  i3752.strikethrough = i3753[15]
  i3752.strikethroughThickness = i3753[16]
  i3752.TabWidth = i3753[17]
  i3752.Padding = i3753[18]
  i3752.AtlasWidth = i3753[19]
  i3752.AtlasHeight = i3753[20]
  return i3752
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i3756 = root || request.c( 'TMPro.TMP_Glyph' )
  var i3757 = data
  i3756.id = i3757[0]
  i3756.x = i3757[1]
  i3756.y = i3757[2]
  i3756.width = i3757[3]
  i3756.height = i3757[4]
  i3756.xOffset = i3757[5]
  i3756.yOffset = i3757[6]
  i3756.xAdvance = i3757[7]
  i3756.scale = i3757[8]
  return i3756
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i3758 = root || request.c( 'TMPro.KerningTable' )
  var i3759 = data
  var i3761 = i3759[0]
  var i3760 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i3761.length; i += 1) {
    i3760.add(request.d('TMPro.KerningPair', i3761[i + 0]));
  }
  i3758.kerningPairs = i3760
  return i3758
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i3764 = root || request.c( 'TMPro.KerningPair' )
  var i3765 = data
  i3764.xOffset = i3765[0]
  i3764.m_FirstGlyph = i3765[1]
  i3764.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i3765[2], i3764.m_FirstGlyphAdjustments)
  i3764.m_SecondGlyph = i3765[3]
  i3764.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i3765[4], i3764.m_SecondGlyphAdjustments)
  i3764.m_IgnoreSpacingAdjustments = !!i3765[5]
  return i3764
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i3766 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i3767 = data
  i3766.m_FaceIndex = i3767[0]
  i3766.m_FamilyName = i3767[1]
  i3766.m_StyleName = i3767[2]
  i3766.m_PointSize = i3767[3]
  i3766.m_Scale = i3767[4]
  i3766.m_UnitsPerEM = i3767[5]
  i3766.m_LineHeight = i3767[6]
  i3766.m_AscentLine = i3767[7]
  i3766.m_CapLine = i3767[8]
  i3766.m_MeanLine = i3767[9]
  i3766.m_Baseline = i3767[10]
  i3766.m_DescentLine = i3767[11]
  i3766.m_SuperscriptOffset = i3767[12]
  i3766.m_SuperscriptSize = i3767[13]
  i3766.m_SubscriptOffset = i3767[14]
  i3766.m_SubscriptSize = i3767[15]
  i3766.m_UnderlineOffset = i3767[16]
  i3766.m_UnderlineThickness = i3767[17]
  i3766.m_StrikethroughOffset = i3767[18]
  i3766.m_StrikethroughThickness = i3767[19]
  i3766.m_TabWidth = i3767[20]
  return i3766
}

Deserializers["PlayerCardData"] = function (request, data, root) {
  var i3768 = root || request.c( 'PlayerCardData' )
  var i3769 = data
  i3768.playerName = i3769[0]
  request.r(i3769[1], i3769[2], 0, i3768, 'playerSprite')
  return i3768
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i3770 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i3771 = data
  i3770.useSafeMode = !!i3771[0]
  i3770.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i3771[1], i3770.safeModeOptions)
  i3770.timeScale = i3771[2]
  i3770.unscaledTimeScale = i3771[3]
  i3770.useSmoothDeltaTime = !!i3771[4]
  i3770.maxSmoothUnscaledTime = i3771[5]
  i3770.rewindCallbackMode = i3771[6]
  i3770.showUnityEditorReport = !!i3771[7]
  i3770.logBehaviour = i3771[8]
  i3770.drawGizmos = !!i3771[9]
  i3770.defaultRecyclable = !!i3771[10]
  i3770.defaultAutoPlay = i3771[11]
  i3770.defaultUpdateType = i3771[12]
  i3770.defaultTimeScaleIndependent = !!i3771[13]
  i3770.defaultEaseType = i3771[14]
  i3770.defaultEaseOvershootOrAmplitude = i3771[15]
  i3770.defaultEasePeriod = i3771[16]
  i3770.defaultAutoKill = !!i3771[17]
  i3770.defaultLoopType = i3771[18]
  i3770.debugMode = !!i3771[19]
  i3770.debugStoreTargetId = !!i3771[20]
  i3770.showPreviewPanel = !!i3771[21]
  i3770.storeSettingsLocation = i3771[22]
  i3770.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i3771[23], i3770.modules)
  i3770.createASMDEF = !!i3771[24]
  i3770.showPlayingTweens = !!i3771[25]
  i3770.showPausedTweens = !!i3771[26]
  return i3770
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i3772 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i3773 = data
  i3772.logBehaviour = i3773[0]
  i3772.nestedTweenFailureBehaviour = i3773[1]
  return i3772
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i3774 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i3775 = data
  i3774.showPanel = !!i3775[0]
  i3774.audioEnabled = !!i3775[1]
  i3774.physicsEnabled = !!i3775[2]
  i3774.physics2DEnabled = !!i3775[3]
  i3774.spriteEnabled = !!i3775[4]
  i3774.uiEnabled = !!i3775[5]
  i3774.uiToolkitEnabled = !!i3775[6]
  i3774.textMeshProEnabled = !!i3775[7]
  i3774.tk2DEnabled = !!i3775[8]
  i3774.deAudioEnabled = !!i3775[9]
  i3774.deUnityExtendedEnabled = !!i3775[10]
  i3774.epoOutlineEnabled = !!i3775[11]
  return i3774
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i3776 = root || request.c( 'TMPro.TMP_Settings' )
  var i3777 = data
  i3776.assetVersion = i3777[0]
  i3776.m_TextWrappingMode = i3777[1]
  i3776.m_enableKerning = !!i3777[2]
  var i3779 = i3777[3]
  var i3778 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i3779.length; i += 1) {
    i3778.add(i3779[i + 0]);
  }
  i3776.m_ActiveFontFeatures = i3778
  i3776.m_enableExtraPadding = !!i3777[4]
  i3776.m_enableTintAllSprites = !!i3777[5]
  i3776.m_enableParseEscapeCharacters = !!i3777[6]
  i3776.m_EnableRaycastTarget = !!i3777[7]
  i3776.m_GetFontFeaturesAtRuntime = !!i3777[8]
  i3776.m_missingGlyphCharacter = i3777[9]
  i3776.m_ClearDynamicDataOnBuild = !!i3777[10]
  i3776.m_warningsDisabled = !!i3777[11]
  request.r(i3777[12], i3777[13], 0, i3776, 'm_defaultFontAsset')
  i3776.m_defaultFontAssetPath = i3777[14]
  i3776.m_defaultFontSize = i3777[15]
  i3776.m_defaultAutoSizeMinRatio = i3777[16]
  i3776.m_defaultAutoSizeMaxRatio = i3777[17]
  i3776.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i3777[18], i3777[19] )
  i3776.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i3777[20], i3777[21] )
  i3776.m_autoSizeTextContainer = !!i3777[22]
  i3776.m_IsTextObjectScaleStatic = !!i3777[23]
  var i3781 = i3777[24]
  var i3780 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i3781.length; i += 2) {
  request.r(i3781[i + 0], i3781[i + 1], 1, i3780, '')
  }
  i3776.m_fallbackFontAssets = i3780
  i3776.m_matchMaterialPreset = !!i3777[25]
  i3776.m_HideSubTextObjects = !!i3777[26]
  request.r(i3777[27], i3777[28], 0, i3776, 'm_defaultSpriteAsset')
  i3776.m_defaultSpriteAssetPath = i3777[29]
  i3776.m_enableEmojiSupport = !!i3777[30]
  i3776.m_MissingCharacterSpriteUnicode = i3777[31]
  var i3783 = i3777[32]
  var i3782 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i3783.length; i += 2) {
  request.r(i3783[i + 0], i3783[i + 1], 1, i3782, '')
  }
  i3776.m_EmojiFallbackTextAssets = i3782
  i3776.m_defaultColorGradientPresetsPath = i3777[33]
  request.r(i3777[34], i3777[35], 0, i3776, 'm_defaultStyleSheet')
  i3776.m_StyleSheetsResourcePath = i3777[36]
  request.r(i3777[37], i3777[38], 0, i3776, 'm_leadingCharacters')
  request.r(i3777[39], i3777[40], 0, i3776, 'm_followingCharacters')
  i3776.m_UseModernHangulLineBreakingRules = !!i3777[41]
  return i3776
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i3786 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i3787 = data
  request.r(i3787[0], i3787[1], 0, i3786, 'spriteSheet')
  var i3789 = i3787[2]
  var i3788 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i3789.length; i += 1) {
    i3788.add(request.d('TMPro.TMP_Sprite', i3789[i + 0]));
  }
  i3786.spriteInfoList = i3788
  var i3791 = i3787[3]
  var i3790 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i3791.length; i += 2) {
  request.r(i3791[i + 0], i3791[i + 1], 1, i3790, '')
  }
  i3786.fallbackSpriteAssets = i3790
  var i3793 = i3787[4]
  var i3792 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i3793.length; i += 1) {
    i3792.add(request.d('TMPro.TMP_SpriteCharacter', i3793[i + 0]));
  }
  i3786.m_SpriteCharacterTable = i3792
  var i3795 = i3787[5]
  var i3794 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i3795.length; i += 1) {
    i3794.add(request.d('TMPro.TMP_SpriteGlyph', i3795[i + 0]));
  }
  i3786.m_GlyphTable = i3794
  i3786.m_Version = i3787[6]
  i3786.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i3787[7], i3786.m_FaceInfo)
  request.r(i3787[8], i3787[9], 0, i3786, 'm_Material')
  return i3786
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i3798 = root || request.c( 'TMPro.TMP_Sprite' )
  var i3799 = data
  i3798.name = i3799[0]
  i3798.hashCode = i3799[1]
  i3798.unicode = i3799[2]
  i3798.pivot = new pc.Vec2( i3799[3], i3799[4] )
  request.r(i3799[5], i3799[6], 0, i3798, 'sprite')
  i3798.id = i3799[7]
  i3798.x = i3799[8]
  i3798.y = i3799[9]
  i3798.width = i3799[10]
  i3798.height = i3799[11]
  i3798.xOffset = i3799[12]
  i3798.yOffset = i3799[13]
  i3798.xAdvance = i3799[14]
  i3798.scale = i3799[15]
  return i3798
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i3804 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i3805 = data
  i3804.m_Name = i3805[0]
  i3804.m_ElementType = i3805[1]
  i3804.m_Unicode = i3805[2]
  i3804.m_GlyphIndex = i3805[3]
  i3804.m_Scale = i3805[4]
  return i3804
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i3808 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i3809 = data
  request.r(i3809[0], i3809[1], 0, i3808, 'sprite')
  i3808.m_Index = i3809[2]
  i3808.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i3809[3], i3808.m_Metrics)
  i3808.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i3809[4], i3808.m_GlyphRect)
  i3808.m_Scale = i3809[5]
  i3808.m_AtlasIndex = i3809[6]
  i3808.m_ClassDefinitionType = i3809[7]
  return i3808
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i3810 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i3811 = data
  var i3813 = i3811[0]
  var i3812 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i3813.length; i += 1) {
    i3812.add(request.d('TMPro.TMP_Style', i3813[i + 0]));
  }
  i3810.m_StyleList = i3812
  return i3810
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i3816 = root || request.c( 'TMPro.TMP_Style' )
  var i3817 = data
  i3816.m_Name = i3817[0]
  i3816.m_HashCode = i3817[1]
  i3816.m_OpeningDefinition = i3817[2]
  i3816.m_ClosingDefinition = i3817[3]
  i3816.m_OpeningTagArray = i3817[4]
  i3816.m_ClosingTagArray = i3817[5]
  return i3816
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i3818 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i3819 = data
  var i3821 = i3819[0]
  var i3820 = []
  for(var i = 0; i < i3821.length; i += 1) {
    i3820.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i3821[i + 0]) );
  }
  i3818.files = i3820
  i3818.componentToPrefabIds = i3819[1]
  return i3818
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i3824 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i3825 = data
  i3824.path = i3825[0]
  request.r(i3825[1], i3825[2], 0, i3824, 'unityObject')
  return i3824
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i3826 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i3827 = data
  var i3829 = i3827[0]
  var i3828 = []
  for(var i = 0; i < i3829.length; i += 1) {
    i3828.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i3829[i + 0]) );
  }
  i3826.scriptsExecutionOrder = i3828
  var i3831 = i3827[1]
  var i3830 = []
  for(var i = 0; i < i3831.length; i += 1) {
    i3830.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i3831[i + 0]) );
  }
  i3826.sortingLayers = i3830
  var i3833 = i3827[2]
  var i3832 = []
  for(var i = 0; i < i3833.length; i += 1) {
    i3832.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i3833[i + 0]) );
  }
  i3826.cullingLayers = i3832
  i3826.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i3827[3], i3826.timeSettings)
  i3826.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i3827[4], i3826.physicsSettings)
  i3826.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i3827[5], i3826.physics2DSettings)
  i3826.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i3827[6], i3826.qualitySettings)
  i3826.enableRealtimeShadows = !!i3827[7]
  i3826.enableAutoInstancing = !!i3827[8]
  i3826.enableStaticBatching = !!i3827[9]
  i3826.enableDynamicBatching = !!i3827[10]
  i3826.lightmapEncodingQuality = i3827[11]
  i3826.desiredColorSpace = i3827[12]
  var i3835 = i3827[13]
  var i3834 = []
  for(var i = 0; i < i3835.length; i += 1) {
    i3834.push( i3835[i + 0] );
  }
  i3826.allTags = i3834
  return i3826
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i3838 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i3839 = data
  i3838.name = i3839[0]
  i3838.value = i3839[1]
  return i3838
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i3842 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i3843 = data
  i3842.id = i3843[0]
  i3842.name = i3843[1]
  i3842.value = i3843[2]
  return i3842
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i3846 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i3847 = data
  i3846.id = i3847[0]
  i3846.name = i3847[1]
  return i3846
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i3848 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i3849 = data
  i3848.fixedDeltaTime = i3849[0]
  i3848.maximumDeltaTime = i3849[1]
  i3848.timeScale = i3849[2]
  i3848.maximumParticleTimestep = i3849[3]
  return i3848
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i3850 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i3851 = data
  i3850.gravity = new pc.Vec3( i3851[0], i3851[1], i3851[2] )
  i3850.defaultSolverIterations = i3851[3]
  i3850.bounceThreshold = i3851[4]
  i3850.autoSyncTransforms = !!i3851[5]
  i3850.autoSimulation = !!i3851[6]
  var i3853 = i3851[7]
  var i3852 = []
  for(var i = 0; i < i3853.length; i += 1) {
    i3852.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i3853[i + 0]) );
  }
  i3850.collisionMatrix = i3852
  return i3850
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i3856 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i3857 = data
  i3856.enabled = !!i3857[0]
  i3856.layerId = i3857[1]
  i3856.otherLayerId = i3857[2]
  return i3856
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i3858 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i3859 = data
  request.r(i3859[0], i3859[1], 0, i3858, 'material')
  i3858.gravity = new pc.Vec2( i3859[2], i3859[3] )
  i3858.positionIterations = i3859[4]
  i3858.velocityIterations = i3859[5]
  i3858.velocityThreshold = i3859[6]
  i3858.maxLinearCorrection = i3859[7]
  i3858.maxAngularCorrection = i3859[8]
  i3858.maxTranslationSpeed = i3859[9]
  i3858.maxRotationSpeed = i3859[10]
  i3858.baumgarteScale = i3859[11]
  i3858.baumgarteTOIScale = i3859[12]
  i3858.timeToSleep = i3859[13]
  i3858.linearSleepTolerance = i3859[14]
  i3858.angularSleepTolerance = i3859[15]
  i3858.defaultContactOffset = i3859[16]
  i3858.autoSimulation = !!i3859[17]
  i3858.queriesHitTriggers = !!i3859[18]
  i3858.queriesStartInColliders = !!i3859[19]
  i3858.callbacksOnDisable = !!i3859[20]
  i3858.reuseCollisionCallbacks = !!i3859[21]
  i3858.autoSyncTransforms = !!i3859[22]
  var i3861 = i3859[23]
  var i3860 = []
  for(var i = 0; i < i3861.length; i += 1) {
    i3860.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i3861[i + 0]) );
  }
  i3858.collisionMatrix = i3860
  return i3858
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i3864 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i3865 = data
  i3864.enabled = !!i3865[0]
  i3864.layerId = i3865[1]
  i3864.otherLayerId = i3865[2]
  return i3864
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i3866 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i3867 = data
  var i3869 = i3867[0]
  var i3868 = []
  for(var i = 0; i < i3869.length; i += 1) {
    i3868.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i3869[i + 0]) );
  }
  i3866.qualityLevels = i3868
  var i3871 = i3867[1]
  var i3870 = []
  for(var i = 0; i < i3871.length; i += 1) {
    i3870.push( i3871[i + 0] );
  }
  i3866.names = i3870
  i3866.shadows = i3867[2]
  i3866.anisotropicFiltering = i3867[3]
  i3866.antiAliasing = i3867[4]
  i3866.lodBias = i3867[5]
  i3866.shadowCascades = i3867[6]
  i3866.shadowDistance = i3867[7]
  i3866.shadowmaskMode = i3867[8]
  i3866.shadowProjection = i3867[9]
  i3866.shadowResolution = i3867[10]
  i3866.softParticles = !!i3867[11]
  i3866.softVegetation = !!i3867[12]
  i3866.activeColorSpace = i3867[13]
  i3866.desiredColorSpace = i3867[14]
  i3866.masterTextureLimit = i3867[15]
  i3866.maxQueuedFrames = i3867[16]
  i3866.particleRaycastBudget = i3867[17]
  i3866.pixelLightCount = i3867[18]
  i3866.realtimeReflectionProbes = !!i3867[19]
  i3866.shadowCascade2Split = i3867[20]
  i3866.shadowCascade4Split = new pc.Vec3( i3867[21], i3867[22], i3867[23] )
  i3866.streamingMipmapsActive = !!i3867[24]
  i3866.vSyncCount = i3867[25]
  i3866.asyncUploadBufferSize = i3867[26]
  i3866.asyncUploadTimeSlice = i3867[27]
  i3866.billboardsFaceCameraPosition = !!i3867[28]
  i3866.shadowNearPlaneOffset = i3867[29]
  i3866.streamingMipmapsMemoryBudget = i3867[30]
  i3866.maximumLODLevel = i3867[31]
  i3866.streamingMipmapsAddAllCameras = !!i3867[32]
  i3866.streamingMipmapsMaxLevelReduction = i3867[33]
  i3866.streamingMipmapsRenderersPerFrame = i3867[34]
  i3866.resolutionScalingFixedDPIFactor = i3867[35]
  i3866.streamingMipmapsMaxFileIORequests = i3867[36]
  i3866.currentQualityLevel = i3867[37]
  return i3866
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i3876 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i3877 = data
  i3876.weight = i3877[0]
  i3876.vertices = i3877[1]
  i3876.normals = i3877[2]
  i3876.tangents = i3877[3]
  return i3876
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i3880 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i3881 = data
  i3880.mode = i3881[0]
  i3880.parameter = i3881[1]
  i3880.threshold = i3881[2]
  return i3880
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i3882 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i3883 = data
  i3882.m_XCoordinate = i3883[0]
  i3882.m_YCoordinate = i3883[1]
  return i3882
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i3884 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i3885 = data
  i3884.m_XPositionAdjustment = i3885[0]
  i3884.m_YPositionAdjustment = i3885[1]
  return i3884
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i3886 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i3887 = data
  i3886.xPlacement = i3887[0]
  i3886.yPlacement = i3887[1]
  i3886.xAdvance = i3887[2]
  i3886.yAdvance = i3887[3]
  return i3886
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D":{"usedByComposite":0,"autoTiling":1,"points":2,"enabled":3,"isTrigger":4,"usedByEffector":5,"density":6,"offset":7,"material":9},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider2D":{"size":0,"direction":2,"enabled":3,"isTrigger":4,"usedByEffector":5,"density":6,"offset":7,"material":9},"Luna.Unity.DTO.UnityEngine.Components.SpriteMask":{"frontSortingLayerID":0,"frontSortingOrder":1,"backSortingLayerID":2,"backSortingOrder":3,"alphaCutoff":4,"sprite":5,"tileMode":7,"isCustomRangeActive":8,"spriteSortPoint":9,"enabled":10,"sharedMaterial":11,"sharedMaterials":13,"receiveShadows":14,"shadowCastingMode":15,"sortingLayerID":16,"sortingOrder":17,"lightmapIndex":18,"lightmapSceneIndex":19,"lightmapScaleOffset":20,"lightProbeUsage":24,"reflectionProbeUsage":25},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.PhysicsMaterial2D":{"name":0,"bounciness":1,"friction":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2}}

Deserializers.requiredComponents = {"54":[55],"56":[55],"57":[55],"58":[55],"59":[55],"60":[55],"61":[62],"63":[2],"64":[65],"66":[65],"67":[65],"68":[65],"69":[65],"70":[65],"71":[38],"72":[38],"73":[38],"74":[38],"75":[38],"76":[38],"77":[38],"78":[38],"79":[38],"80":[38],"81":[38],"82":[38],"83":[38],"84":[2],"85":[21],"86":[87],"88":[87],"31":[20],"7":[2],"39":[38],"42":[18],"89":[12],"90":[2],"91":[92],"93":[46],"94":[31],"95":[20],"23":[21,20],"96":[20,34],"97":[20],"98":[34,20],"99":[21],"100":[34,20],"101":[20],"102":[103],"104":[103],"105":[103],"106":[20],"107":[20],"33":[31],"35":[34,20],"108":[20],"32":[31],"109":[20],"110":[20],"111":[20],"112":[20],"113":[20],"114":[20],"115":[20],"116":[20],"117":[20],"118":[34,20],"119":[20],"120":[20],"121":[20],"122":[20],"123":[34,20],"124":[20],"125":[46],"126":[46],"47":[46],"127":[46],"128":[2],"129":[2]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.MonoBehaviour","CameraFollow2D","UnityEngine.Transform","AutoCameraFit","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Mesh","UnityEngine.Material","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","MoveBetweenPoints","ScreenHeightPositionAnchor","UnityEngine.BoxCollider2D","ClickToStore","UnityEngine.RectTransform","UnityEngine.MeshRenderer","UnityEngine.EventSystems.UIBehaviour","TMPro.TextMeshPro","TMPro.TMP_FontAsset","UnityEngine.MeshFilter","PlayerCardUIManager","UnityEngine.GameObject","Ply_SoundManager","UnityEngine.AudioSource","UnityEngine.AudioClip","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.PolygonCollider2D","UnityEngine.PhysicsMaterial2D","UnityEngine.Rigidbody2D","BatStrikeController","CupCollision","UnityEngine.CapsuleCollider2D","SlotTrigger","PlayerCardData","UnityEngine.SpriteMask","HideOnFirstClick","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.Font","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.InputSystem.UI.InputSystemUIInputModule","UnityEngine.InputSystem.UI.TrackedDeviceRaycaster","TMPro.TextContainer","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.38f1";

Deserializers.productName = "PLY_MiniSoccer";

Deserializers.lunaInitializationTime = "07/15/2026 03:53:54";

Deserializers.lunaDaysRunning = "22.3";

Deserializers.lunaVersion = "7.1.0";

Deserializers.lunaSHA = "cf93782349542fe0b84ad13951a26809f8419628";

Deserializers.creativeName = "PLY_V18";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1748";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4553";

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

Deserializers.buildID = "8e4e9d75-2a69-406b-b72c-8425472bca17";

Deserializers.runtimeInitializeOnLoadInfos = [[["Unity","Services","Core","Internal","UnityServicesInitializer","EnableServicesInitializationAsync"],["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["DG","Tweening","DOTween","RuntimeOnLoad"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["Unity","Services","Core","Registration","CorePackageInitializer","InitializeOnLoad"],["Unity","Services","Core","Internal","TaskAsyncOperation","SetScheduler"],["Unity","Services","Core","Environments","Client","Scheduler","EngineStateHelper","Init"],["Unity","Services","Core","Environments","Client","Scheduler","ThreadHelper","Init"],["Ua2CoreInitializeCallback","Register"],["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["Unity","AI","Navigation","NavMeshLink","ClearTrackedList"],["Unity","AI","Navigation","NavMeshSurface","ClearNavMeshSurfaces"],["Unity","AI","Navigation","NavMeshModifierVolume","ClearNavMeshModifiers"],["Unity","AI","Navigation","NavMeshModifier","ClearNavMeshModifiers"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["Unity","Services","Core","Internal","UnityServicesInitializer","CreateStaticInstance"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[["Unity","Services","Core","Environments","Client","Http","JsonHelpers","RegisterTypesForAOT"]],[["Unity","Services","Core","UnityThreadUtils","CaptureUnityThreadInfo"],["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

