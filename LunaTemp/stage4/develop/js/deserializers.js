var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i3220 = root || request.c( 'UnityEngine.JointSpring' )
  var i3221 = data
  i3220.spring = i3221[0]
  i3220.damper = i3221[1]
  i3220.targetPosition = i3221[2]
  return i3220
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i3222 = root || request.c( 'UnityEngine.JointMotor' )
  var i3223 = data
  i3222.m_TargetVelocity = i3223[0]
  i3222.m_Force = i3223[1]
  i3222.m_FreeSpin = i3223[2]
  return i3222
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i3224 = root || request.c( 'UnityEngine.JointLimits' )
  var i3225 = data
  i3224.m_Min = i3225[0]
  i3224.m_Max = i3225[1]
  i3224.m_Bounciness = i3225[2]
  i3224.m_BounceMinVelocity = i3225[3]
  i3224.m_ContactDistance = i3225[4]
  i3224.minBounce = i3225[5]
  i3224.maxBounce = i3225[6]
  return i3224
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i3226 = root || request.c( 'UnityEngine.JointDrive' )
  var i3227 = data
  i3226.m_PositionSpring = i3227[0]
  i3226.m_PositionDamper = i3227[1]
  i3226.m_MaximumForce = i3227[2]
  i3226.m_UseAcceleration = i3227[3]
  return i3226
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i3228 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i3229 = data
  i3228.m_Spring = i3229[0]
  i3228.m_Damper = i3229[1]
  return i3228
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i3230 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i3231 = data
  i3230.m_Limit = i3231[0]
  i3230.m_Bounciness = i3231[1]
  i3230.m_ContactDistance = i3231[2]
  return i3230
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i3232 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i3233 = data
  i3232.m_ExtremumSlip = i3233[0]
  i3232.m_ExtremumValue = i3233[1]
  i3232.m_AsymptoteSlip = i3233[2]
  i3232.m_AsymptoteValue = i3233[3]
  i3232.m_Stiffness = i3233[4]
  return i3232
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i3234 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i3235 = data
  i3234.m_LowerAngle = i3235[0]
  i3234.m_UpperAngle = i3235[1]
  return i3234
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i3236 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i3237 = data
  i3236.m_MotorSpeed = i3237[0]
  i3236.m_MaximumMotorTorque = i3237[1]
  return i3236
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i3238 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i3239 = data
  i3238.m_DampingRatio = i3239[0]
  i3238.m_Frequency = i3239[1]
  i3238.m_Angle = i3239[2]
  return i3238
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i3240 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i3241 = data
  i3240.m_LowerTranslation = i3241[0]
  i3240.m_UpperTranslation = i3241[1]
  return i3240
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i3242 = root || new pc.UnityMaterial()
  var i3243 = data
  i3242.name = i3243[0]
  request.r(i3243[1], i3243[2], 0, i3242, 'shader')
  i3242.renderQueue = i3243[3]
  i3242.enableInstancing = !!i3243[4]
  var i3245 = i3243[5]
  var i3244 = []
  for(var i = 0; i < i3245.length; i += 1) {
    i3244.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i3245[i + 0]) );
  }
  i3242.floatParameters = i3244
  var i3247 = i3243[6]
  var i3246 = []
  for(var i = 0; i < i3247.length; i += 1) {
    i3246.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i3247[i + 0]) );
  }
  i3242.colorParameters = i3246
  var i3249 = i3243[7]
  var i3248 = []
  for(var i = 0; i < i3249.length; i += 1) {
    i3248.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i3249[i + 0]) );
  }
  i3242.vectorParameters = i3248
  var i3251 = i3243[8]
  var i3250 = []
  for(var i = 0; i < i3251.length; i += 1) {
    i3250.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i3251[i + 0]) );
  }
  i3242.textureParameters = i3250
  var i3253 = i3243[9]
  var i3252 = []
  for(var i = 0; i < i3253.length; i += 1) {
    i3252.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i3253[i + 0]) );
  }
  i3242.materialFlags = i3252
  return i3242
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i3256 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i3257 = data
  i3256.name = i3257[0]
  i3256.value = i3257[1]
  return i3256
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i3260 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i3261 = data
  i3260.name = i3261[0]
  i3260.value = new pc.Color(i3261[1], i3261[2], i3261[3], i3261[4])
  return i3260
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i3264 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i3265 = data
  i3264.name = i3265[0]
  i3264.value = new pc.Vec4( i3265[1], i3265[2], i3265[3], i3265[4] )
  return i3264
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i3268 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i3269 = data
  i3268.name = i3269[0]
  request.r(i3269[1], i3269[2], 0, i3268, 'value')
  return i3268
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i3272 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i3273 = data
  i3272.name = i3273[0]
  i3272.enabled = !!i3273[1]
  return i3272
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i3274 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i3275 = data
  i3274.name = i3275[0]
  i3274.width = i3275[1]
  i3274.height = i3275[2]
  i3274.mipmapCount = i3275[3]
  i3274.anisoLevel = i3275[4]
  i3274.filterMode = i3275[5]
  i3274.hdr = !!i3275[6]
  i3274.format = i3275[7]
  i3274.wrapMode = i3275[8]
  i3274.alphaIsTransparency = !!i3275[9]
  i3274.alphaSource = i3275[10]
  i3274.graphicsFormat = i3275[11]
  i3274.sRGBTexture = !!i3275[12]
  i3274.desiredColorSpace = i3275[13]
  i3274.wrapU = i3275[14]
  i3274.wrapV = i3275[15]
  return i3274
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i3276 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i3277 = data
  i3276.name = i3277[0]
  i3276.halfPrecision = !!i3277[1]
  i3276.useSimplification = !!i3277[2]
  i3276.useUInt32IndexFormat = !!i3277[3]
  i3276.vertexCount = i3277[4]
  i3276.aabb = i3277[5]
  var i3279 = i3277[6]
  var i3278 = []
  for(var i = 0; i < i3279.length; i += 1) {
    i3278.push( !!i3279[i + 0] );
  }
  i3276.streams = i3278
  i3276.vertices = i3277[7]
  var i3281 = i3277[8]
  var i3280 = []
  for(var i = 0; i < i3281.length; i += 1) {
    i3280.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i3281[i + 0]) );
  }
  i3276.subMeshes = i3280
  var i3283 = i3277[9]
  var i3282 = []
  for(var i = 0; i < i3283.length; i += 16) {
    i3282.push( new pc.Mat4().setData(i3283[i + 0], i3283[i + 1], i3283[i + 2], i3283[i + 3],  i3283[i + 4], i3283[i + 5], i3283[i + 6], i3283[i + 7],  i3283[i + 8], i3283[i + 9], i3283[i + 10], i3283[i + 11],  i3283[i + 12], i3283[i + 13], i3283[i + 14], i3283[i + 15]) );
  }
  i3276.bindposes = i3282
  var i3285 = i3277[10]
  var i3284 = []
  for(var i = 0; i < i3285.length; i += 1) {
    i3284.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i3285[i + 0]) );
  }
  i3276.blendShapes = i3284
  return i3276
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i3290 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i3291 = data
  i3290.triangles = i3291[0]
  return i3290
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i3296 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i3297 = data
  i3296.name = i3297[0]
  var i3299 = i3297[1]
  var i3298 = []
  for(var i = 0; i < i3299.length; i += 1) {
    i3298.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i3299[i + 0]) );
  }
  i3296.frames = i3298
  return i3296
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i3300 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i3301 = data
  i3300.name = i3301[0]
  i3300.index = i3301[1]
  i3300.startup = !!i3301[2]
  return i3300
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i3302 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i3303 = data
  i3302.aspect = i3303[0]
  i3302.orthographic = !!i3303[1]
  i3302.orthographicSize = i3303[2]
  i3302.backgroundColor = new pc.Color(i3303[3], i3303[4], i3303[5], i3303[6])
  i3302.nearClipPlane = i3303[7]
  i3302.farClipPlane = i3303[8]
  i3302.fieldOfView = i3303[9]
  i3302.depth = i3303[10]
  i3302.clearFlags = i3303[11]
  i3302.cullingMask = i3303[12]
  i3302.rect = i3303[13]
  request.r(i3303[14], i3303[15], 0, i3302, 'targetTexture')
  i3302.usePhysicalProperties = !!i3303[16]
  i3302.focalLength = i3303[17]
  i3302.sensorSize = new pc.Vec2( i3303[18], i3303[19] )
  i3302.lensShift = new pc.Vec2( i3303[20], i3303[21] )
  i3302.gateFit = i3303[22]
  i3302.commandBufferCount = i3303[23]
  i3302.cameraType = i3303[24]
  i3302.enabled = !!i3303[25]
  return i3302
}

Deserializers["CameraFollow2D"] = function (request, data, root) {
  var i3304 = root || request.c( 'CameraFollow2D' )
  var i3305 = data
  request.r(i3305[0], i3305[1], 0, i3304, 'target')
  i3304.smoothSpeed = i3305[2]
  i3304.offset = new pc.Vec3( i3305[3], i3305[4], i3305[5] )
  i3304.followY = !!i3305[6]
  return i3304
}

Deserializers["AutoCameraFit"] = function (request, data, root) {
  var i3306 = root || request.c( 'AutoCameraFit' )
  var i3307 = data
  request.r(i3307[0], i3307[1], 0, i3306, 'tallScreenObject')
  i3306.tallScreenRatioThreshold = i3307[2]
  i3306.tallScreenYOffset = i3307[3]
  request.r(i3307[4], i3307[5], 0, i3306, 'canvasBtn')
  request.r(i3307[6], i3307[7], 0, i3306, 'targetArea')
  i3306.paddingLandscape = i3307[8]
  i3306.paddingPortrait = i3307[9]
  i3306.extraPaddingSmallScreen = i3307[10]
  i3306.smallScreenThreshold = i3307[11]
  i3306.autoUpdateOnResize = !!i3307[12]
  i3306.adjustInEditMode = !!i3307[13]
  return i3306
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i3308 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i3309 = data
  i3308.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i3309[0], i3308.main)
  i3308.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i3309[1], i3308.colorBySpeed)
  i3308.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i3309[2], i3308.colorOverLifetime)
  i3308.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i3309[3], i3308.emission)
  i3308.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i3309[4], i3308.rotationBySpeed)
  i3308.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i3309[5], i3308.rotationOverLifetime)
  i3308.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i3309[6], i3308.shape)
  i3308.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i3309[7], i3308.sizeBySpeed)
  i3308.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i3309[8], i3308.sizeOverLifetime)
  i3308.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i3309[9], i3308.textureSheetAnimation)
  i3308.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i3309[10], i3308.velocityOverLifetime)
  i3308.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i3309[11], i3308.noise)
  i3308.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i3309[12], i3308.inheritVelocity)
  i3308.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i3309[13], i3308.forceOverLifetime)
  i3308.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i3309[14], i3308.limitVelocityOverLifetime)
  i3308.useAutoRandomSeed = !!i3309[15]
  i3308.randomSeed = i3309[16]
  return i3308
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i3310 = root || new pc.ParticleSystemMain()
  var i3311 = data
  i3310.duration = i3311[0]
  i3310.loop = !!i3311[1]
  i3310.prewarm = !!i3311[2]
  i3310.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3311[3], i3310.startDelay)
  i3310.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3311[4], i3310.startLifetime)
  i3310.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3311[5], i3310.startSpeed)
  i3310.startSize3D = !!i3311[6]
  i3310.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3311[7], i3310.startSizeX)
  i3310.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3311[8], i3310.startSizeY)
  i3310.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3311[9], i3310.startSizeZ)
  i3310.startRotation3D = !!i3311[10]
  i3310.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3311[11], i3310.startRotationX)
  i3310.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3311[12], i3310.startRotationY)
  i3310.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3311[13], i3310.startRotationZ)
  i3310.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i3311[14], i3310.startColor)
  i3310.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3311[15], i3310.gravityModifier)
  i3310.simulationSpace = i3311[16]
  request.r(i3311[17], i3311[18], 0, i3310, 'customSimulationSpace')
  i3310.simulationSpeed = i3311[19]
  i3310.useUnscaledTime = !!i3311[20]
  i3310.scalingMode = i3311[21]
  i3310.playOnAwake = !!i3311[22]
  i3310.maxParticles = i3311[23]
  i3310.emitterVelocityMode = i3311[24]
  i3310.stopAction = i3311[25]
  return i3310
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i3312 = root || new pc.MinMaxCurve()
  var i3313 = data
  i3312.mode = i3313[0]
  i3312.curveMin = new pc.AnimationCurve( { keys_flow: i3313[1] } )
  i3312.curveMax = new pc.AnimationCurve( { keys_flow: i3313[2] } )
  i3312.curveMultiplier = i3313[3]
  i3312.constantMin = i3313[4]
  i3312.constantMax = i3313[5]
  return i3312
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i3314 = root || new pc.MinMaxGradient()
  var i3315 = data
  i3314.mode = i3315[0]
  i3314.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i3315[1], i3314.gradientMin)
  i3314.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i3315[2], i3314.gradientMax)
  i3314.colorMin = new pc.Color(i3315[3], i3315[4], i3315[5], i3315[6])
  i3314.colorMax = new pc.Color(i3315[7], i3315[8], i3315[9], i3315[10])
  return i3314
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i3316 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i3317 = data
  i3316.mode = i3317[0]
  var i3319 = i3317[1]
  var i3318 = []
  for(var i = 0; i < i3319.length; i += 1) {
    i3318.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i3319[i + 0]) );
  }
  i3316.colorKeys = i3318
  var i3321 = i3317[2]
  var i3320 = []
  for(var i = 0; i < i3321.length; i += 1) {
    i3320.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i3321[i + 0]) );
  }
  i3316.alphaKeys = i3320
  return i3316
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i3322 = root || new pc.ParticleSystemColorBySpeed()
  var i3323 = data
  i3322.enabled = !!i3323[0]
  i3322.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i3323[1], i3322.color)
  i3322.range = new pc.Vec2( i3323[2], i3323[3] )
  return i3322
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i3326 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i3327 = data
  i3326.color = new pc.Color(i3327[0], i3327[1], i3327[2], i3327[3])
  i3326.time = i3327[4]
  return i3326
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i3330 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i3331 = data
  i3330.alpha = i3331[0]
  i3330.time = i3331[1]
  return i3330
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i3332 = root || new pc.ParticleSystemColorOverLifetime()
  var i3333 = data
  i3332.enabled = !!i3333[0]
  i3332.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i3333[1], i3332.color)
  return i3332
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i3334 = root || new pc.ParticleSystemEmitter()
  var i3335 = data
  i3334.enabled = !!i3335[0]
  i3334.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3335[1], i3334.rateOverTime)
  i3334.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3335[2], i3334.rateOverDistance)
  var i3337 = i3335[3]
  var i3336 = []
  for(var i = 0; i < i3337.length; i += 1) {
    i3336.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i3337[i + 0]) );
  }
  i3334.bursts = i3336
  return i3334
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i3340 = root || new pc.ParticleSystemBurst()
  var i3341 = data
  i3340.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3341[0], i3340.count)
  i3340.cycleCount = i3341[1]
  i3340.minCount = i3341[2]
  i3340.maxCount = i3341[3]
  i3340.repeatInterval = i3341[4]
  i3340.time = i3341[5]
  return i3340
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i3342 = root || new pc.ParticleSystemRotationBySpeed()
  var i3343 = data
  i3342.enabled = !!i3343[0]
  i3342.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3343[1], i3342.x)
  i3342.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3343[2], i3342.y)
  i3342.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3343[3], i3342.z)
  i3342.separateAxes = !!i3343[4]
  i3342.range = new pc.Vec2( i3343[5], i3343[6] )
  return i3342
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i3344 = root || new pc.ParticleSystemRotationOverLifetime()
  var i3345 = data
  i3344.enabled = !!i3345[0]
  i3344.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3345[1], i3344.x)
  i3344.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3345[2], i3344.y)
  i3344.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3345[3], i3344.z)
  i3344.separateAxes = !!i3345[4]
  return i3344
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i3346 = root || new pc.ParticleSystemShape()
  var i3347 = data
  i3346.enabled = !!i3347[0]
  i3346.shapeType = i3347[1]
  i3346.randomDirectionAmount = i3347[2]
  i3346.sphericalDirectionAmount = i3347[3]
  i3346.randomPositionAmount = i3347[4]
  i3346.alignToDirection = !!i3347[5]
  i3346.radius = i3347[6]
  i3346.radiusMode = i3347[7]
  i3346.radiusSpread = i3347[8]
  i3346.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3347[9], i3346.radiusSpeed)
  i3346.radiusThickness = i3347[10]
  i3346.angle = i3347[11]
  i3346.length = i3347[12]
  i3346.boxThickness = new pc.Vec3( i3347[13], i3347[14], i3347[15] )
  i3346.meshShapeType = i3347[16]
  request.r(i3347[17], i3347[18], 0, i3346, 'mesh')
  request.r(i3347[19], i3347[20], 0, i3346, 'meshRenderer')
  request.r(i3347[21], i3347[22], 0, i3346, 'skinnedMeshRenderer')
  i3346.useMeshMaterialIndex = !!i3347[23]
  i3346.meshMaterialIndex = i3347[24]
  i3346.useMeshColors = !!i3347[25]
  i3346.normalOffset = i3347[26]
  i3346.arc = i3347[27]
  i3346.arcMode = i3347[28]
  i3346.arcSpread = i3347[29]
  i3346.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3347[30], i3346.arcSpeed)
  i3346.donutRadius = i3347[31]
  i3346.position = new pc.Vec3( i3347[32], i3347[33], i3347[34] )
  i3346.rotation = new pc.Vec3( i3347[35], i3347[36], i3347[37] )
  i3346.scale = new pc.Vec3( i3347[38], i3347[39], i3347[40] )
  return i3346
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i3348 = root || new pc.ParticleSystemSizeBySpeed()
  var i3349 = data
  i3348.enabled = !!i3349[0]
  i3348.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3349[1], i3348.x)
  i3348.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3349[2], i3348.y)
  i3348.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3349[3], i3348.z)
  i3348.separateAxes = !!i3349[4]
  i3348.range = new pc.Vec2( i3349[5], i3349[6] )
  return i3348
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i3350 = root || new pc.ParticleSystemSizeOverLifetime()
  var i3351 = data
  i3350.enabled = !!i3351[0]
  i3350.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3351[1], i3350.x)
  i3350.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3351[2], i3350.y)
  i3350.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3351[3], i3350.z)
  i3350.separateAxes = !!i3351[4]
  return i3350
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i3352 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i3353 = data
  i3352.enabled = !!i3353[0]
  i3352.mode = i3353[1]
  i3352.animation = i3353[2]
  i3352.numTilesX = i3353[3]
  i3352.numTilesY = i3353[4]
  i3352.useRandomRow = !!i3353[5]
  i3352.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3353[6], i3352.frameOverTime)
  i3352.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3353[7], i3352.startFrame)
  i3352.cycleCount = i3353[8]
  i3352.rowIndex = i3353[9]
  i3352.flipU = i3353[10]
  i3352.flipV = i3353[11]
  i3352.spriteCount = i3353[12]
  var i3355 = i3353[13]
  var i3354 = []
  for(var i = 0; i < i3355.length; i += 2) {
  request.r(i3355[i + 0], i3355[i + 1], 2, i3354, '')
  }
  i3352.sprites = i3354
  return i3352
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i3358 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i3359 = data
  i3358.enabled = !!i3359[0]
  i3358.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3359[1], i3358.x)
  i3358.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3359[2], i3358.y)
  i3358.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3359[3], i3358.z)
  i3358.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3359[4], i3358.radial)
  i3358.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3359[5], i3358.speedModifier)
  i3358.space = i3359[6]
  i3358.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3359[7], i3358.orbitalX)
  i3358.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3359[8], i3358.orbitalY)
  i3358.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3359[9], i3358.orbitalZ)
  i3358.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3359[10], i3358.orbitalOffsetX)
  i3358.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3359[11], i3358.orbitalOffsetY)
  i3358.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3359[12], i3358.orbitalOffsetZ)
  return i3358
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i3360 = root || new pc.ParticleSystemNoise()
  var i3361 = data
  i3360.enabled = !!i3361[0]
  i3360.separateAxes = !!i3361[1]
  i3360.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3361[2], i3360.strengthX)
  i3360.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3361[3], i3360.strengthY)
  i3360.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3361[4], i3360.strengthZ)
  i3360.frequency = i3361[5]
  i3360.damping = !!i3361[6]
  i3360.octaveCount = i3361[7]
  i3360.octaveMultiplier = i3361[8]
  i3360.octaveScale = i3361[9]
  i3360.quality = i3361[10]
  i3360.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3361[11], i3360.scrollSpeed)
  i3360.scrollSpeedMultiplier = i3361[12]
  i3360.remapEnabled = !!i3361[13]
  i3360.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3361[14], i3360.remapX)
  i3360.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3361[15], i3360.remapY)
  i3360.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3361[16], i3360.remapZ)
  i3360.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3361[17], i3360.positionAmount)
  i3360.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3361[18], i3360.rotationAmount)
  i3360.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3361[19], i3360.sizeAmount)
  return i3360
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i3362 = root || new pc.ParticleSystemInheritVelocity()
  var i3363 = data
  i3362.enabled = !!i3363[0]
  i3362.mode = i3363[1]
  i3362.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3363[2], i3362.curve)
  return i3362
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i3364 = root || new pc.ParticleSystemForceOverLifetime()
  var i3365 = data
  i3364.enabled = !!i3365[0]
  i3364.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3365[1], i3364.x)
  i3364.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3365[2], i3364.y)
  i3364.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3365[3], i3364.z)
  i3364.space = i3365[4]
  i3364.randomized = !!i3365[5]
  return i3364
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i3366 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i3367 = data
  i3366.enabled = !!i3367[0]
  i3366.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3367[1], i3366.limit)
  i3366.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3367[2], i3366.limitX)
  i3366.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3367[3], i3366.limitY)
  i3366.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3367[4], i3366.limitZ)
  i3366.dampen = i3367[5]
  i3366.separateAxes = !!i3367[6]
  i3366.space = i3367[7]
  i3366.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3367[8], i3366.drag)
  i3366.multiplyDragByParticleSize = !!i3367[9]
  i3366.multiplyDragByParticleVelocity = !!i3367[10]
  return i3366
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i3368 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i3369 = data
  request.r(i3369[0], i3369[1], 0, i3368, 'mesh')
  i3368.meshCount = i3369[2]
  i3368.activeVertexStreamsCount = i3369[3]
  i3368.alignment = i3369[4]
  i3368.renderMode = i3369[5]
  i3368.sortMode = i3369[6]
  i3368.lengthScale = i3369[7]
  i3368.velocityScale = i3369[8]
  i3368.cameraVelocityScale = i3369[9]
  i3368.normalDirection = i3369[10]
  i3368.sortingFudge = i3369[11]
  i3368.minParticleSize = i3369[12]
  i3368.maxParticleSize = i3369[13]
  i3368.pivot = new pc.Vec3( i3369[14], i3369[15], i3369[16] )
  request.r(i3369[17], i3369[18], 0, i3368, 'trailMaterial')
  i3368.applyActiveColorSpace = !!i3369[19]
  i3368.enabled = !!i3369[20]
  request.r(i3369[21], i3369[22], 0, i3368, 'sharedMaterial')
  var i3371 = i3369[23]
  var i3370 = []
  for(var i = 0; i < i3371.length; i += 2) {
  request.r(i3371[i + 0], i3371[i + 1], 2, i3370, '')
  }
  i3368.sharedMaterials = i3370
  i3368.receiveShadows = !!i3369[24]
  i3368.shadowCastingMode = i3369[25]
  i3368.sortingLayerID = i3369[26]
  i3368.sortingOrder = i3369[27]
  i3368.lightmapIndex = i3369[28]
  i3368.lightmapSceneIndex = i3369[29]
  i3368.lightmapScaleOffset = new pc.Vec4( i3369[30], i3369[31], i3369[32], i3369[33] )
  i3368.lightProbeUsage = i3369[34]
  i3368.reflectionProbeUsage = i3369[35]
  return i3368
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i3374 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i3375 = data
  i3374.name = i3375[0]
  i3374.tagId = i3375[1]
  i3374.enabled = !!i3375[2]
  i3374.isStatic = !!i3375[3]
  i3374.layer = i3375[4]
  return i3374
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i3376 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i3377 = data
  i3376.color = new pc.Color(i3377[0], i3377[1], i3377[2], i3377[3])
  request.r(i3377[4], i3377[5], 0, i3376, 'sprite')
  i3376.flipX = !!i3377[6]
  i3376.flipY = !!i3377[7]
  i3376.drawMode = i3377[8]
  i3376.size = new pc.Vec2( i3377[9], i3377[10] )
  i3376.tileMode = i3377[11]
  i3376.adaptiveModeThreshold = i3377[12]
  i3376.maskInteraction = i3377[13]
  i3376.spriteSortPoint = i3377[14]
  i3376.enabled = !!i3377[15]
  request.r(i3377[16], i3377[17], 0, i3376, 'sharedMaterial')
  var i3379 = i3377[18]
  var i3378 = []
  for(var i = 0; i < i3379.length; i += 2) {
  request.r(i3379[i + 0], i3379[i + 1], 2, i3378, '')
  }
  i3376.sharedMaterials = i3378
  i3376.receiveShadows = !!i3377[19]
  i3376.shadowCastingMode = i3377[20]
  i3376.sortingLayerID = i3377[21]
  i3376.sortingOrder = i3377[22]
  i3376.lightmapIndex = i3377[23]
  i3376.lightmapSceneIndex = i3377[24]
  i3376.lightmapScaleOffset = new pc.Vec4( i3377[25], i3377[26], i3377[27], i3377[28] )
  i3376.lightProbeUsage = i3377[29]
  i3376.reflectionProbeUsage = i3377[30]
  return i3376
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i3380 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i3381 = data
  request.r(i3381[0], i3381[1], 0, i3380, 'animatorController')
  request.r(i3381[2], i3381[3], 0, i3380, 'avatar')
  i3380.updateMode = i3381[4]
  i3380.hasTransformHierarchy = !!i3381[5]
  i3380.applyRootMotion = !!i3381[6]
  var i3383 = i3381[7]
  var i3382 = []
  for(var i = 0; i < i3383.length; i += 2) {
  request.r(i3383[i + 0], i3383[i + 1], 2, i3382, '')
  }
  i3380.humanBones = i3382
  i3380.enabled = !!i3381[8]
  return i3380
}

Deserializers["MoveBetweenPoints"] = function (request, data, root) {
  var i3386 = root || request.c( 'MoveBetweenPoints' )
  var i3387 = data
  request.r(i3387[0], i3387[1], 0, i3386, 'pointA')
  request.r(i3387[2], i3387[3], 0, i3386, 'pointB')
  i3386.duration = i3387[4]
  return i3386
}

Deserializers["ScreenHeightPositionAnchor"] = function (request, data, root) {
  var i3388 = root || request.c( 'ScreenHeightPositionAnchor' )
  var i3389 = data
  request.r(i3389[0], i3389[1], 0, i3388, 'anchorPoint')
  request.r(i3389[2], i3389[3], 0, i3388, 'targetCamera')
  i3388.viewportYRatio = i3389[4]
  i3388.alignOnStart = !!i3389[5]
  i3388.alignOnEnable = !!i3389[6]
  i3388.realignOnScreenSizeChanged = !!i3389[7]
  i3388.drawGizmos = !!i3389[8]
  i3388.targetLineColor = new pc.Color(i3389[9], i3389[10], i3389[11], i3389[12])
  i3388.anchorColor = new pc.Color(i3389[13], i3389[14], i3389[15], i3389[16])
  return i3388
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i3390 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i3391 = data
  i3390.center = new pc.Vec3( i3391[0], i3391[1], i3391[2] )
  i3390.size = new pc.Vec3( i3391[3], i3391[4], i3391[5] )
  i3390.enabled = !!i3391[6]
  i3390.isTrigger = !!i3391[7]
  request.r(i3391[8], i3391[9], 0, i3390, 'material')
  return i3390
}

Deserializers["ClickToStore"] = function (request, data, root) {
  var i3392 = root || request.c( 'ClickToStore' )
  var i3393 = data
  return i3392
}

Deserializers["FavoritePlayerEndcard"] = function (request, data, root) {
  var i3394 = root || request.c( 'FavoritePlayerEndcard' )
  var i3395 = data
  request.r(i3395[0], i3395[1], 0, i3394, 'fullBodyRenderer')
  request.r(i3395[2], i3395[3], 0, i3394, 'nameText')
  request.r(i3395[4], i3395[5], 0, i3394, 'endcardPanel')
  return i3394
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i3396 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i3397 = data
  i3396.pivot = new pc.Vec2( i3397[0], i3397[1] )
  i3396.anchorMin = new pc.Vec2( i3397[2], i3397[3] )
  i3396.anchorMax = new pc.Vec2( i3397[4], i3397[5] )
  i3396.sizeDelta = new pc.Vec2( i3397[6], i3397[7] )
  i3396.anchoredPosition3D = new pc.Vec3( i3397[8], i3397[9], i3397[10] )
  i3396.rotation = new pc.Quat(i3397[11], i3397[12], i3397[13], i3397[14])
  i3396.scale = new pc.Vec3( i3397[15], i3397[16], i3397[17] )
  return i3396
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i3398 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i3399 = data
  request.r(i3399[0], i3399[1], 0, i3398, 'additionalVertexStreams')
  i3398.enabled = !!i3399[2]
  request.r(i3399[3], i3399[4], 0, i3398, 'sharedMaterial')
  var i3401 = i3399[5]
  var i3400 = []
  for(var i = 0; i < i3401.length; i += 2) {
  request.r(i3401[i + 0], i3401[i + 1], 2, i3400, '')
  }
  i3398.sharedMaterials = i3400
  i3398.receiveShadows = !!i3399[6]
  i3398.shadowCastingMode = i3399[7]
  i3398.sortingLayerID = i3399[8]
  i3398.sortingOrder = i3399[9]
  i3398.lightmapIndex = i3399[10]
  i3398.lightmapSceneIndex = i3399[11]
  i3398.lightmapScaleOffset = new pc.Vec4( i3399[12], i3399[13], i3399[14], i3399[15] )
  i3398.lightProbeUsage = i3399[16]
  i3398.reflectionProbeUsage = i3399[17]
  return i3398
}

Deserializers["TMPro.TextMeshPro"] = function (request, data, root) {
  var i3402 = root || request.c( 'TMPro.TextMeshPro' )
  var i3403 = data
  i3402._SortingLayer = i3403[0]
  i3402._SortingLayerID = i3403[1]
  i3402._SortingOrder = i3403[2]
  i3402.m_hasFontAssetChanged = !!i3403[3]
  request.r(i3403[4], i3403[5], 0, i3402, 'm_renderer')
  i3402.m_maskType = i3403[6]
  i3402.m_text = i3403[7]
  i3402.m_isRightToLeft = !!i3403[8]
  request.r(i3403[9], i3403[10], 0, i3402, 'm_fontAsset')
  request.r(i3403[11], i3403[12], 0, i3402, 'm_sharedMaterial')
  var i3405 = i3403[13]
  var i3404 = []
  for(var i = 0; i < i3405.length; i += 2) {
  request.r(i3405[i + 0], i3405[i + 1], 2, i3404, '')
  }
  i3402.m_fontSharedMaterials = i3404
  request.r(i3403[14], i3403[15], 0, i3402, 'm_fontMaterial')
  var i3407 = i3403[16]
  var i3406 = []
  for(var i = 0; i < i3407.length; i += 2) {
  request.r(i3407[i + 0], i3407[i + 1], 2, i3406, '')
  }
  i3402.m_fontMaterials = i3406
  i3402.m_fontColor32 = UnityEngine.Color32.ConstructColor(i3403[17], i3403[18], i3403[19], i3403[20])
  i3402.m_fontColor = new pc.Color(i3403[21], i3403[22], i3403[23], i3403[24])
  i3402.m_enableVertexGradient = !!i3403[25]
  i3402.m_colorMode = i3403[26]
  i3402.m_fontColorGradient = request.d('TMPro.VertexGradient', i3403[27], i3402.m_fontColorGradient)
  request.r(i3403[28], i3403[29], 0, i3402, 'm_fontColorGradientPreset')
  request.r(i3403[30], i3403[31], 0, i3402, 'm_spriteAsset')
  i3402.m_tintAllSprites = !!i3403[32]
  request.r(i3403[33], i3403[34], 0, i3402, 'm_StyleSheet')
  i3402.m_TextStyleHashCode = i3403[35]
  i3402.m_overrideHtmlColors = !!i3403[36]
  i3402.m_faceColor = UnityEngine.Color32.ConstructColor(i3403[37], i3403[38], i3403[39], i3403[40])
  i3402.m_fontSize = i3403[41]
  i3402.m_fontSizeBase = i3403[42]
  i3402.m_fontWeight = i3403[43]
  i3402.m_enableAutoSizing = !!i3403[44]
  i3402.m_fontSizeMin = i3403[45]
  i3402.m_fontSizeMax = i3403[46]
  i3402.m_fontStyle = i3403[47]
  i3402.m_HorizontalAlignment = i3403[48]
  i3402.m_VerticalAlignment = i3403[49]
  i3402.m_textAlignment = i3403[50]
  i3402.m_characterSpacing = i3403[51]
  i3402.m_wordSpacing = i3403[52]
  i3402.m_lineSpacing = i3403[53]
  i3402.m_lineSpacingMax = i3403[54]
  i3402.m_paragraphSpacing = i3403[55]
  i3402.m_charWidthMaxAdj = i3403[56]
  i3402.m_TextWrappingMode = i3403[57]
  i3402.m_wordWrappingRatios = i3403[58]
  i3402.m_overflowMode = i3403[59]
  request.r(i3403[60], i3403[61], 0, i3402, 'm_linkedTextComponent')
  request.r(i3403[62], i3403[63], 0, i3402, 'parentLinkedComponent')
  i3402.m_enableKerning = !!i3403[64]
  var i3409 = i3403[65]
  var i3408 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i3409.length; i += 1) {
    i3408.add(i3409[i + 0]);
  }
  i3402.m_ActiveFontFeatures = i3408
  i3402.m_enableExtraPadding = !!i3403[66]
  i3402.checkPaddingRequired = !!i3403[67]
  i3402.m_isRichText = !!i3403[68]
  i3402.m_parseCtrlCharacters = !!i3403[69]
  i3402.m_isOrthographic = !!i3403[70]
  i3402.m_isCullingEnabled = !!i3403[71]
  i3402.m_horizontalMapping = i3403[72]
  i3402.m_verticalMapping = i3403[73]
  i3402.m_uvLineOffset = i3403[74]
  i3402.m_geometrySortingOrder = i3403[75]
  i3402.m_IsTextObjectScaleStatic = !!i3403[76]
  i3402.m_VertexBufferAutoSizeReduction = !!i3403[77]
  i3402.m_useMaxVisibleDescender = !!i3403[78]
  i3402.m_pageToDisplay = i3403[79]
  i3402.m_margin = new pc.Vec4( i3403[80], i3403[81], i3403[82], i3403[83] )
  i3402.m_isUsingLegacyAnimationComponent = !!i3403[84]
  i3402.m_isVolumetricText = !!i3403[85]
  request.r(i3403[86], i3403[87], 0, i3402, 'm_Material')
  i3402.m_EmojiFallbackSupport = !!i3403[88]
  i3402.m_Maskable = !!i3403[89]
  i3402.m_Color = new pc.Color(i3403[90], i3403[91], i3403[92], i3403[93])
  i3402.m_RaycastTarget = !!i3403[94]
  i3402.m_RaycastPadding = new pc.Vec4( i3403[95], i3403[96], i3403[97], i3403[98] )
  return i3402
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i3410 = root || request.c( 'TMPro.VertexGradient' )
  var i3411 = data
  i3410.topLeft = new pc.Color(i3411[0], i3411[1], i3411[2], i3411[3])
  i3410.topRight = new pc.Color(i3411[4], i3411[5], i3411[6], i3411[7])
  i3410.bottomLeft = new pc.Color(i3411[8], i3411[9], i3411[10], i3411[11])
  i3410.bottomRight = new pc.Color(i3411[12], i3411[13], i3411[14], i3411[15])
  return i3410
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i3414 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i3415 = data
  request.r(i3415[0], i3415[1], 0, i3414, 'sharedMesh')
  return i3414
}

Deserializers["PlayerCardUIManager"] = function (request, data, root) {
  var i3416 = root || request.c( 'PlayerCardUIManager' )
  var i3417 = data
  request.r(i3417[0], i3417[1], 0, i3416, 'cardPanel')
  var i3419 = i3417[2]
  var i3418 = []
  for(var i = 0; i < i3419.length; i += 2) {
  request.r(i3419[i + 0], i3419[i + 1], 2, i3418, '')
  }
  i3416.extraObjectsToActivate = i3418
  i3416.waitTime = i3417[3]
  var i3421 = i3417[4]
  var i3420 = []
  for(var i = 0; i < i3421.length; i += 2) {
  request.r(i3421[i + 0], i3421[i + 1], 2, i3420, '')
  }
  i3416.objectsToTurnOnAfterWait = i3420
  var i3423 = i3417[5]
  var i3422 = []
  for(var i = 0; i < i3423.length; i += 2) {
  request.r(i3423[i + 0], i3423[i + 1], 2, i3422, '')
  }
  i3416.objectsToTurnOffAfterWait = i3422
  request.r(i3417[6], i3417[7], 0, i3416, 'nationalityText')
  request.r(i3417[8], i3417[9], 0, i3416, 'playerImage')
  request.r(i3417[10], i3417[11], 0, i3416, 'flagImage')
  return i3416
}

Deserializers["Ply_SoundManager"] = function (request, data, root) {
  var i3426 = root || request.c( 'Ply_SoundManager' )
  var i3427 = data
  i3426.fxAudio = request.d('FxAudio', i3427[0], i3426.fxAudio)
  request.r(i3427[1], i3427[2], 0, i3426, 'bgm1')
  return i3426
}

Deserializers["FxAudio"] = function (request, data, root) {
  var i3428 = root || request.c( 'FxAudio' )
  var i3429 = data
  i3428.ClickBox = request.d('SoundData', i3429[0], i3428.ClickBox)
  i3428.Happy = request.d('SoundData', i3429[1], i3428.Happy)
  i3428.Wrong = request.d('SoundData', i3429[2], i3428.Wrong)
  i3428.Spray = request.d('SoundData', i3429[3], i3428.Spray)
  i3428.Brush = request.d('SoundData', i3429[4], i3428.Brush)
  return i3428
}

Deserializers["SoundData"] = function (request, data, root) {
  var i3430 = root || request.c( 'SoundData' )
  var i3431 = data
  request.r(i3431[0], i3431[1], 0, i3430, 'clip')
  i3430.repeatCount = i3431[2]
  return i3430
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i3432 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i3433 = data
  request.r(i3433[0], i3433[1], 0, i3432, 'clip')
  request.r(i3433[2], i3433[3], 0, i3432, 'outputAudioMixerGroup')
  i3432.playOnAwake = !!i3433[4]
  i3432.loop = !!i3433[5]
  i3432.time = i3433[6]
  i3432.volume = i3433[7]
  i3432.pitch = i3433[8]
  i3432.enabled = !!i3433[9]
  return i3432
}

Deserializers["FavoritePlayerManager"] = function (request, data, root) {
  var i3434 = root || request.c( 'FavoritePlayerManager' )
  var i3435 = data
  i3434.slotLayerMask = UnityEngine.LayerMask.FromIntegerValue( i3435[0] )
  request.r(i3435[1], i3435[2], 0, i3434, 'slotA')
  request.r(i3435[3], i3435[4], 0, i3434, 'slotB')
  request.r(i3435[5], i3435[6], 0, i3434, 'audioSource')
  request.r(i3435[7], i3435[8], 0, i3434, 'orAudio')
  request.r(i3435[9], i3435[10], 0, i3434, 'clickAudio')
  var i3437 = i3435[11]
  var i3436 = new (System.Collections.Generic.List$1(Bridge.ns('FavoritePlayerCard')))
  for(var i = 0; i < i3437.length; i += 2) {
  request.r(i3437[i + 0], i3437[i + 1], 1, i3436, '')
  }
  i3434.playerList = i3436
  request.r(i3435[12], i3435[13], 0, i3434, 'endcardUI')
  request.r(i3435[14], i3435[15], 0, i3434, 'discardTarget')
  i3434.moveDuration = i3435[16]
  i3434.arcHeight = i3435[17]
  i3434.scaleUpSize = i3435[18]
  i3434.scaleUpDuration = i3435[19]
  i3434.scaleDownDuration = i3435[20]
  i3434.appearStartScale = i3435[21]
  i3434.appearMaxScale = i3435[22]
  i3434.appearUpDuration = i3435[23]
  i3434.appearDownDuration = i3435[24]
  i3434.clickScaleSize = i3435[25]
  i3434.clickDownDuration = i3435[26]
  i3434.clickUpDuration = i3435[27]
  var i3439 = i3435[28]
  var i3438 = []
  for(var i = 0; i < i3439.length; i += 2) {
  request.r(i3439[i + 0], i3439[i + 1], 2, i3438, '')
  }
  i3434.extraObjectsToActivate = i3438
  var i3441 = i3435[29]
  var i3440 = []
  for(var i = 0; i < i3441.length; i += 2) {
  request.r(i3441[i + 0], i3441[i + 1], 2, i3440, '')
  }
  i3434.extraObjectsToDeactivate = i3440
  i3434.waitTime = i3435[30]
  var i3443 = i3435[31]
  var i3442 = []
  for(var i = 0; i < i3443.length; i += 2) {
  request.r(i3443[i + 0], i3443[i + 1], 2, i3442, '')
  }
  i3434.objectsToTurnOnAfterWait = i3442
  var i3445 = i3435[32]
  var i3444 = []
  for(var i = 0; i < i3445.length; i += 2) {
  request.r(i3445[i + 0], i3445[i + 1], 2, i3444, '')
  }
  i3434.objectsToTurnOffAfterWait = i3444
  return i3434
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i3448 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i3449 = data
  i3448.planeDistance = i3449[0]
  i3448.referencePixelsPerUnit = i3449[1]
  i3448.isFallbackOverlay = !!i3449[2]
  i3448.renderMode = i3449[3]
  i3448.renderOrder = i3449[4]
  i3448.sortingLayerName = i3449[5]
  i3448.sortingOrder = i3449[6]
  i3448.scaleFactor = i3449[7]
  request.r(i3449[8], i3449[9], 0, i3448, 'worldCamera')
  i3448.overrideSorting = !!i3449[10]
  i3448.pixelPerfect = !!i3449[11]
  i3448.targetDisplay = i3449[12]
  i3448.overridePixelPerfect = !!i3449[13]
  i3448.enabled = !!i3449[14]
  return i3448
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i3450 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i3451 = data
  i3450.m_UiScaleMode = i3451[0]
  i3450.m_ReferencePixelsPerUnit = i3451[1]
  i3450.m_ScaleFactor = i3451[2]
  i3450.m_ReferenceResolution = new pc.Vec2( i3451[3], i3451[4] )
  i3450.m_ScreenMatchMode = i3451[5]
  i3450.m_MatchWidthOrHeight = i3451[6]
  i3450.m_PhysicalUnit = i3451[7]
  i3450.m_FallbackScreenDPI = i3451[8]
  i3450.m_DefaultSpriteDPI = i3451[9]
  i3450.m_DynamicPixelsPerUnit = i3451[10]
  i3450.m_PresetInfoIsWorld = !!i3451[11]
  return i3450
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i3452 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i3453 = data
  i3452.m_IgnoreReversedGraphics = !!i3453[0]
  i3452.m_BlockingObjects = i3453[1]
  i3452.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i3453[2] )
  return i3452
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i3454 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i3455 = data
  i3454.cullTransparentMesh = !!i3455[0]
  return i3454
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i3456 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i3457 = data
  i3456.m_hasFontAssetChanged = !!i3457[0]
  request.r(i3457[1], i3457[2], 0, i3456, 'm_baseMaterial')
  i3456.m_maskOffset = new pc.Vec4( i3457[3], i3457[4], i3457[5], i3457[6] )
  i3456.m_text = i3457[7]
  i3456.m_isRightToLeft = !!i3457[8]
  request.r(i3457[9], i3457[10], 0, i3456, 'm_fontAsset')
  request.r(i3457[11], i3457[12], 0, i3456, 'm_sharedMaterial')
  var i3459 = i3457[13]
  var i3458 = []
  for(var i = 0; i < i3459.length; i += 2) {
  request.r(i3459[i + 0], i3459[i + 1], 2, i3458, '')
  }
  i3456.m_fontSharedMaterials = i3458
  request.r(i3457[14], i3457[15], 0, i3456, 'm_fontMaterial')
  var i3461 = i3457[16]
  var i3460 = []
  for(var i = 0; i < i3461.length; i += 2) {
  request.r(i3461[i + 0], i3461[i + 1], 2, i3460, '')
  }
  i3456.m_fontMaterials = i3460
  i3456.m_fontColor32 = UnityEngine.Color32.ConstructColor(i3457[17], i3457[18], i3457[19], i3457[20])
  i3456.m_fontColor = new pc.Color(i3457[21], i3457[22], i3457[23], i3457[24])
  i3456.m_enableVertexGradient = !!i3457[25]
  i3456.m_colorMode = i3457[26]
  i3456.m_fontColorGradient = request.d('TMPro.VertexGradient', i3457[27], i3456.m_fontColorGradient)
  request.r(i3457[28], i3457[29], 0, i3456, 'm_fontColorGradientPreset')
  request.r(i3457[30], i3457[31], 0, i3456, 'm_spriteAsset')
  i3456.m_tintAllSprites = !!i3457[32]
  request.r(i3457[33], i3457[34], 0, i3456, 'm_StyleSheet')
  i3456.m_TextStyleHashCode = i3457[35]
  i3456.m_overrideHtmlColors = !!i3457[36]
  i3456.m_faceColor = UnityEngine.Color32.ConstructColor(i3457[37], i3457[38], i3457[39], i3457[40])
  i3456.m_fontSize = i3457[41]
  i3456.m_fontSizeBase = i3457[42]
  i3456.m_fontWeight = i3457[43]
  i3456.m_enableAutoSizing = !!i3457[44]
  i3456.m_fontSizeMin = i3457[45]
  i3456.m_fontSizeMax = i3457[46]
  i3456.m_fontStyle = i3457[47]
  i3456.m_HorizontalAlignment = i3457[48]
  i3456.m_VerticalAlignment = i3457[49]
  i3456.m_textAlignment = i3457[50]
  i3456.m_characterSpacing = i3457[51]
  i3456.m_wordSpacing = i3457[52]
  i3456.m_lineSpacing = i3457[53]
  i3456.m_lineSpacingMax = i3457[54]
  i3456.m_paragraphSpacing = i3457[55]
  i3456.m_charWidthMaxAdj = i3457[56]
  i3456.m_TextWrappingMode = i3457[57]
  i3456.m_wordWrappingRatios = i3457[58]
  i3456.m_overflowMode = i3457[59]
  request.r(i3457[60], i3457[61], 0, i3456, 'm_linkedTextComponent')
  request.r(i3457[62], i3457[63], 0, i3456, 'parentLinkedComponent')
  i3456.m_enableKerning = !!i3457[64]
  var i3463 = i3457[65]
  var i3462 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i3463.length; i += 1) {
    i3462.add(i3463[i + 0]);
  }
  i3456.m_ActiveFontFeatures = i3462
  i3456.m_enableExtraPadding = !!i3457[66]
  i3456.checkPaddingRequired = !!i3457[67]
  i3456.m_isRichText = !!i3457[68]
  i3456.m_parseCtrlCharacters = !!i3457[69]
  i3456.m_isOrthographic = !!i3457[70]
  i3456.m_isCullingEnabled = !!i3457[71]
  i3456.m_horizontalMapping = i3457[72]
  i3456.m_verticalMapping = i3457[73]
  i3456.m_uvLineOffset = i3457[74]
  i3456.m_geometrySortingOrder = i3457[75]
  i3456.m_IsTextObjectScaleStatic = !!i3457[76]
  i3456.m_VertexBufferAutoSizeReduction = !!i3457[77]
  i3456.m_useMaxVisibleDescender = !!i3457[78]
  i3456.m_pageToDisplay = i3457[79]
  i3456.m_margin = new pc.Vec4( i3457[80], i3457[81], i3457[82], i3457[83] )
  i3456.m_isUsingLegacyAnimationComponent = !!i3457[84]
  i3456.m_isVolumetricText = !!i3457[85]
  request.r(i3457[86], i3457[87], 0, i3456, 'm_Material')
  i3456.m_EmojiFallbackSupport = !!i3457[88]
  i3456.m_Maskable = !!i3457[89]
  i3456.m_Color = new pc.Color(i3457[90], i3457[91], i3457[92], i3457[93])
  i3456.m_RaycastTarget = !!i3457[94]
  i3456.m_RaycastPadding = new pc.Vec4( i3457[95], i3457[96], i3457[97], i3457[98] )
  return i3456
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i3464 = root || request.c( 'UnityEngine.UI.Image' )
  var i3465 = data
  request.r(i3465[0], i3465[1], 0, i3464, 'm_Sprite')
  i3464.m_Type = i3465[2]
  i3464.m_PreserveAspect = !!i3465[3]
  i3464.m_FillCenter = !!i3465[4]
  i3464.m_FillMethod = i3465[5]
  i3464.m_FillAmount = i3465[6]
  i3464.m_FillClockwise = !!i3465[7]
  i3464.m_FillOrigin = i3465[8]
  i3464.m_UseSpriteMesh = !!i3465[9]
  i3464.m_PixelsPerUnitMultiplier = i3465[10]
  request.r(i3465[11], i3465[12], 0, i3464, 'm_Material')
  i3464.m_Maskable = !!i3465[13]
  i3464.m_Color = new pc.Color(i3465[14], i3465[15], i3465[16], i3465[17])
  i3464.m_RaycastTarget = !!i3465[18]
  i3464.m_RaycastPadding = new pc.Vec4( i3465[19], i3465[20], i3465[21], i3465[22] )
  return i3464
}

Deserializers["PlayerSlot"] = function (request, data, root) {
  var i3466 = root || request.c( 'PlayerSlot' )
  var i3467 = data
  request.r(i3467[0], i3467[1], 0, i3466, 'spriteRenderer')
  request.r(i3467[2], i3467[3], 0, i3466, 'lightEffect')
  i3466.idleScale = i3467[4]
  i3466.idleDuration = i3467[5]
  i3466.originalPosition = new pc.Vec3( i3467[6], i3467[7], i3467[8] )
  i3466.originalScale = new pc.Vec3( i3467[9], i3467[10], i3467[11] )
  request.r(i3467[12], i3467[13], 0, i3466, 'currentData')
  return i3466
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i3468 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i3469 = data
  request.r(i3469[0], i3469[1], 0, i3468, 'm_FirstSelected')
  i3468.m_sendNavigationEvents = !!i3469[2]
  i3468.m_DragThreshold = i3469[3]
  return i3468
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i3470 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i3471 = data
  i3470.m_HorizontalAxis = i3471[0]
  i3470.m_VerticalAxis = i3471[1]
  i3470.m_SubmitButton = i3471[2]
  i3470.m_CancelButton = i3471[3]
  i3470.m_InputActionsPerSecond = i3471[4]
  i3470.m_RepeatDelay = i3471[5]
  i3470.m_ForceModuleActive = !!i3471[6]
  i3470.m_SendPointerHoverToParent = !!i3471[7]
  return i3470
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i3472 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i3473 = data
  i3472.ambientIntensity = i3473[0]
  i3472.reflectionIntensity = i3473[1]
  i3472.ambientMode = i3473[2]
  i3472.ambientLight = new pc.Color(i3473[3], i3473[4], i3473[5], i3473[6])
  i3472.ambientSkyColor = new pc.Color(i3473[7], i3473[8], i3473[9], i3473[10])
  i3472.ambientGroundColor = new pc.Color(i3473[11], i3473[12], i3473[13], i3473[14])
  i3472.ambientEquatorColor = new pc.Color(i3473[15], i3473[16], i3473[17], i3473[18])
  i3472.fogColor = new pc.Color(i3473[19], i3473[20], i3473[21], i3473[22])
  i3472.fogEndDistance = i3473[23]
  i3472.fogStartDistance = i3473[24]
  i3472.fogDensity = i3473[25]
  i3472.fog = !!i3473[26]
  request.r(i3473[27], i3473[28], 0, i3472, 'skybox')
  i3472.fogMode = i3473[29]
  var i3475 = i3473[30]
  var i3474 = []
  for(var i = 0; i < i3475.length; i += 1) {
    i3474.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i3475[i + 0]) );
  }
  i3472.lightmaps = i3474
  i3472.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i3473[31], i3472.lightProbes)
  i3472.lightmapsMode = i3473[32]
  i3472.mixedBakeMode = i3473[33]
  i3472.environmentLightingMode = i3473[34]
  i3472.ambientProbe = new pc.SphericalHarmonicsL2(i3473[35])
  i3472.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i3473[36])
  i3472.useReferenceAmbientProbe = !!i3473[37]
  request.r(i3473[38], i3473[39], 0, i3472, 'customReflection')
  request.r(i3473[40], i3473[41], 0, i3472, 'defaultReflection')
  i3472.defaultReflectionMode = i3473[42]
  i3472.defaultReflectionResolution = i3473[43]
  i3472.sunLightObjectId = i3473[44]
  i3472.pixelLightCount = i3473[45]
  i3472.defaultReflectionHDR = !!i3473[46]
  i3472.hasLightDataAsset = !!i3473[47]
  i3472.hasManualGenerate = !!i3473[48]
  return i3472
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i3478 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i3479 = data
  request.r(i3479[0], i3479[1], 0, i3478, 'lightmapColor')
  request.r(i3479[2], i3479[3], 0, i3478, 'lightmapDirection')
  request.r(i3479[4], i3479[5], 0, i3478, 'shadowMask')
  return i3478
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i3480 = root || new UnityEngine.LightProbes()
  var i3481 = data
  return i3480
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i3488 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i3489 = data
  var i3491 = i3489[0]
  var i3490 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i3491.length; i += 1) {
    i3490.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i3491[i + 0]));
  }
  i3488.ShaderCompilationErrors = i3490
  i3488.name = i3489[1]
  i3488.guid = i3489[2]
  var i3493 = i3489[3]
  var i3492 = []
  for(var i = 0; i < i3493.length; i += 1) {
    i3492.push( i3493[i + 0] );
  }
  i3488.shaderDefinedKeywords = i3492
  var i3495 = i3489[4]
  var i3494 = []
  for(var i = 0; i < i3495.length; i += 1) {
    i3494.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i3495[i + 0]) );
  }
  i3488.passes = i3494
  var i3497 = i3489[5]
  var i3496 = []
  for(var i = 0; i < i3497.length; i += 1) {
    i3496.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i3497[i + 0]) );
  }
  i3488.usePasses = i3496
  var i3499 = i3489[6]
  var i3498 = []
  for(var i = 0; i < i3499.length; i += 1) {
    i3498.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i3499[i + 0]) );
  }
  i3488.defaultParameterValues = i3498
  request.r(i3489[7], i3489[8], 0, i3488, 'unityFallbackShader')
  i3488.readDepth = !!i3489[9]
  i3488.hasDepthOnlyPass = !!i3489[10]
  i3488.isCreatedByShaderGraph = !!i3489[11]
  i3488.disableBatching = !!i3489[12]
  i3488.compiled = !!i3489[13]
  return i3488
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i3502 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i3503 = data
  i3502.shaderName = i3503[0]
  i3502.errorMessage = i3503[1]
  return i3502
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i3508 = root || new pc.UnityShaderPass()
  var i3509 = data
  i3508.id = i3509[0]
  i3508.subShaderIndex = i3509[1]
  i3508.name = i3509[2]
  i3508.passType = i3509[3]
  i3508.grabPassTextureName = i3509[4]
  i3508.usePass = !!i3509[5]
  i3508.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3509[6], i3508.zTest)
  i3508.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3509[7], i3508.zWrite)
  i3508.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3509[8], i3508.culling)
  i3508.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i3509[9], i3508.blending)
  i3508.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i3509[10], i3508.alphaBlending)
  i3508.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3509[11], i3508.colorWriteMask)
  i3508.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3509[12], i3508.offsetUnits)
  i3508.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3509[13], i3508.offsetFactor)
  i3508.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3509[14], i3508.stencilRef)
  i3508.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3509[15], i3508.stencilReadMask)
  i3508.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3509[16], i3508.stencilWriteMask)
  i3508.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3509[17], i3508.stencilOp)
  i3508.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3509[18], i3508.stencilOpFront)
  i3508.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3509[19], i3508.stencilOpBack)
  var i3511 = i3509[20]
  var i3510 = []
  for(var i = 0; i < i3511.length; i += 1) {
    i3510.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i3511[i + 0]) );
  }
  i3508.tags = i3510
  var i3513 = i3509[21]
  var i3512 = []
  for(var i = 0; i < i3513.length; i += 1) {
    i3512.push( i3513[i + 0] );
  }
  i3508.passDefinedKeywords = i3512
  var i3515 = i3509[22]
  var i3514 = []
  for(var i = 0; i < i3515.length; i += 1) {
    i3514.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i3515[i + 0]) );
  }
  i3508.passDefinedKeywordGroups = i3514
  var i3517 = i3509[23]
  var i3516 = []
  for(var i = 0; i < i3517.length; i += 1) {
    i3516.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i3517[i + 0]) );
  }
  i3508.variants = i3516
  var i3519 = i3509[24]
  var i3518 = []
  for(var i = 0; i < i3519.length; i += 1) {
    i3518.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i3519[i + 0]) );
  }
  i3508.excludedVariants = i3518
  i3508.hasDepthReader = !!i3509[25]
  return i3508
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i3520 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i3521 = data
  i3520.val = i3521[0]
  i3520.name = i3521[1]
  return i3520
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i3522 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i3523 = data
  i3522.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3523[0], i3522.src)
  i3522.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3523[1], i3522.dst)
  i3522.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3523[2], i3522.op)
  return i3522
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i3524 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i3525 = data
  i3524.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3525[0], i3524.pass)
  i3524.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3525[1], i3524.fail)
  i3524.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3525[2], i3524.zFail)
  i3524.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3525[3], i3524.comp)
  return i3524
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i3528 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i3529 = data
  i3528.name = i3529[0]
  i3528.value = i3529[1]
  return i3528
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i3532 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i3533 = data
  var i3535 = i3533[0]
  var i3534 = []
  for(var i = 0; i < i3535.length; i += 1) {
    i3534.push( i3535[i + 0] );
  }
  i3532.keywords = i3534
  i3532.hasDiscard = !!i3533[1]
  return i3532
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i3538 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i3539 = data
  i3538.passId = i3539[0]
  i3538.subShaderIndex = i3539[1]
  var i3541 = i3539[2]
  var i3540 = []
  for(var i = 0; i < i3541.length; i += 1) {
    i3540.push( i3541[i + 0] );
  }
  i3538.keywords = i3540
  i3538.vertexProgram = i3539[3]
  i3538.fragmentProgram = i3539[4]
  i3538.exportedForWebGl2 = !!i3539[5]
  i3538.readDepth = !!i3539[6]
  return i3538
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i3544 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i3545 = data
  request.r(i3545[0], i3545[1], 0, i3544, 'shader')
  i3544.pass = i3545[2]
  return i3544
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i3548 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i3549 = data
  i3548.name = i3549[0]
  i3548.type = i3549[1]
  i3548.value = new pc.Vec4( i3549[2], i3549[3], i3549[4], i3549[5] )
  i3548.textureValue = i3549[6]
  i3548.shaderPropertyFlag = i3549[7]
  return i3548
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i3550 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i3551 = data
  i3550.name = i3551[0]
  request.r(i3551[1], i3551[2], 0, i3550, 'texture')
  i3550.aabb = i3551[3]
  i3550.vertices = i3551[4]
  i3550.triangles = i3551[5]
  i3550.textureRect = UnityEngine.Rect.MinMaxRect(i3551[6], i3551[7], i3551[8], i3551[9])
  i3550.packedRect = UnityEngine.Rect.MinMaxRect(i3551[10], i3551[11], i3551[12], i3551[13])
  i3550.border = new pc.Vec4( i3551[14], i3551[15], i3551[16], i3551[17] )
  i3550.transparency = i3551[18]
  i3550.bounds = i3551[19]
  i3550.pixelsPerUnit = i3551[20]
  i3550.textureWidth = i3551[21]
  i3550.textureHeight = i3551[22]
  i3550.nativeSize = new pc.Vec2( i3551[23], i3551[24] )
  i3550.pivot = new pc.Vec2( i3551[25], i3551[26] )
  i3550.textureRectOffset = new pc.Vec2( i3551[27], i3551[28] )
  return i3550
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i3552 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i3553 = data
  i3552.name = i3553[0]
  return i3552
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i3554 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i3555 = data
  i3554.name = i3555[0]
  i3554.wrapMode = i3555[1]
  i3554.isLooping = !!i3555[2]
  i3554.length = i3555[3]
  var i3557 = i3555[4]
  var i3556 = []
  for(var i = 0; i < i3557.length; i += 1) {
    i3556.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i3557[i + 0]) );
  }
  i3554.curves = i3556
  var i3559 = i3555[5]
  var i3558 = []
  for(var i = 0; i < i3559.length; i += 1) {
    i3558.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i3559[i + 0]) );
  }
  i3554.events = i3558
  i3554.halfPrecision = !!i3555[6]
  i3554._frameRate = i3555[7]
  i3554.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i3555[8], i3554.localBounds)
  i3554.hasMuscleCurves = !!i3555[9]
  var i3561 = i3555[10]
  var i3560 = []
  for(var i = 0; i < i3561.length; i += 1) {
    i3560.push( i3561[i + 0] );
  }
  i3554.clipMuscleConstant = i3560
  i3554.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i3555[11], i3554.clipBindingConstant)
  return i3554
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i3564 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i3565 = data
  i3564.path = i3565[0]
  i3564.hash = i3565[1]
  i3564.componentType = i3565[2]
  i3564.property = i3565[3]
  i3564.keys = i3565[4]
  var i3567 = i3565[5]
  var i3566 = []
  for(var i = 0; i < i3567.length; i += 1) {
    i3566.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i3567[i + 0]) );
  }
  i3564.objectReferenceKeys = i3566
  return i3564
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i3570 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i3571 = data
  i3570.time = i3571[0]
  request.r(i3571[1], i3571[2], 0, i3570, 'value')
  return i3570
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i3574 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i3575 = data
  i3574.functionName = i3575[0]
  i3574.floatParameter = i3575[1]
  i3574.intParameter = i3575[2]
  i3574.stringParameter = i3575[3]
  request.r(i3575[4], i3575[5], 0, i3574, 'objectReferenceParameter')
  i3574.time = i3575[6]
  return i3574
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i3576 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i3577 = data
  i3576.center = new pc.Vec3( i3577[0], i3577[1], i3577[2] )
  i3576.extends = new pc.Vec3( i3577[3], i3577[4], i3577[5] )
  return i3576
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i3580 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i3581 = data
  var i3583 = i3581[0]
  var i3582 = []
  for(var i = 0; i < i3583.length; i += 1) {
    i3582.push( i3583[i + 0] );
  }
  i3580.genericBindings = i3582
  var i3585 = i3581[1]
  var i3584 = []
  for(var i = 0; i < i3585.length; i += 1) {
    i3584.push( i3585[i + 0] );
  }
  i3580.pptrCurveMapping = i3584
  return i3580
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i3586 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i3587 = data
  i3586.name = i3587[0]
  i3586.ascent = i3587[1]
  i3586.originalLineHeight = i3587[2]
  i3586.fontSize = i3587[3]
  var i3589 = i3587[4]
  var i3588 = []
  for(var i = 0; i < i3589.length; i += 1) {
    i3588.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i3589[i + 0]) );
  }
  i3586.characterInfo = i3588
  request.r(i3587[5], i3587[6], 0, i3586, 'texture')
  i3586.originalFontSize = i3587[7]
  return i3586
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i3592 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i3593 = data
  i3592.index = i3593[0]
  i3592.advance = i3593[1]
  i3592.bearing = i3593[2]
  i3592.glyphWidth = i3593[3]
  i3592.glyphHeight = i3593[4]
  i3592.minX = i3593[5]
  i3592.maxX = i3593[6]
  i3592.minY = i3593[7]
  i3592.maxY = i3593[8]
  i3592.uvBottomLeftX = i3593[9]
  i3592.uvBottomLeftY = i3593[10]
  i3592.uvBottomRightX = i3593[11]
  i3592.uvBottomRightY = i3593[12]
  i3592.uvTopLeftX = i3593[13]
  i3592.uvTopLeftY = i3593[14]
  i3592.uvTopRightX = i3593[15]
  i3592.uvTopRightY = i3593[16]
  return i3592
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i3594 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i3595 = data
  i3594.name = i3595[0]
  var i3597 = i3595[1]
  var i3596 = []
  for(var i = 0; i < i3597.length; i += 1) {
    i3596.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i3597[i + 0]) );
  }
  i3594.layers = i3596
  var i3599 = i3595[2]
  var i3598 = []
  for(var i = 0; i < i3599.length; i += 1) {
    i3598.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i3599[i + 0]) );
  }
  i3594.parameters = i3598
  i3594.animationClips = i3595[3]
  i3594.avatarUnsupported = i3595[4]
  return i3594
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i3602 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i3603 = data
  i3602.name = i3603[0]
  i3602.defaultWeight = i3603[1]
  i3602.blendingMode = i3603[2]
  i3602.avatarMask = i3603[3]
  i3602.syncedLayerIndex = i3603[4]
  i3602.syncedLayerAffectsTiming = !!i3603[5]
  i3602.syncedLayers = i3603[6]
  i3602.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i3603[7], i3602.stateMachine)
  return i3602
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i3604 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i3605 = data
  i3604.id = i3605[0]
  i3604.name = i3605[1]
  i3604.path = i3605[2]
  var i3607 = i3605[3]
  var i3606 = []
  for(var i = 0; i < i3607.length; i += 1) {
    i3606.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i3607[i + 0]) );
  }
  i3604.states = i3606
  var i3609 = i3605[4]
  var i3608 = []
  for(var i = 0; i < i3609.length; i += 1) {
    i3608.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i3609[i + 0]) );
  }
  i3604.machines = i3608
  var i3611 = i3605[5]
  var i3610 = []
  for(var i = 0; i < i3611.length; i += 1) {
    i3610.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i3611[i + 0]) );
  }
  i3604.entryStateTransitions = i3610
  var i3613 = i3605[6]
  var i3612 = []
  for(var i = 0; i < i3613.length; i += 1) {
    i3612.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i3613[i + 0]) );
  }
  i3604.exitStateTransitions = i3612
  var i3615 = i3605[7]
  var i3614 = []
  for(var i = 0; i < i3615.length; i += 1) {
    i3614.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i3615[i + 0]) );
  }
  i3604.anyStateTransitions = i3614
  i3604.defaultStateId = i3605[8]
  return i3604
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i3618 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i3619 = data
  i3618.id = i3619[0]
  i3618.name = i3619[1]
  i3618.cycleOffset = i3619[2]
  i3618.cycleOffsetParameter = i3619[3]
  i3618.cycleOffsetParameterActive = !!i3619[4]
  i3618.mirror = !!i3619[5]
  i3618.mirrorParameter = i3619[6]
  i3618.mirrorParameterActive = !!i3619[7]
  i3618.motionId = i3619[8]
  i3618.nameHash = i3619[9]
  i3618.fullPathHash = i3619[10]
  i3618.speed = i3619[11]
  i3618.speedParameter = i3619[12]
  i3618.speedParameterActive = !!i3619[13]
  i3618.tag = i3619[14]
  i3618.tagHash = i3619[15]
  i3618.writeDefaultValues = !!i3619[16]
  var i3621 = i3619[17]
  var i3620 = []
  for(var i = 0; i < i3621.length; i += 2) {
  request.r(i3621[i + 0], i3621[i + 1], 2, i3620, '')
  }
  i3618.behaviours = i3620
  var i3623 = i3619[18]
  var i3622 = []
  for(var i = 0; i < i3623.length; i += 1) {
    i3622.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i3623[i + 0]) );
  }
  i3618.transitions = i3622
  return i3618
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i3628 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i3629 = data
  i3628.fullPath = i3629[0]
  i3628.canTransitionToSelf = !!i3629[1]
  i3628.duration = i3629[2]
  i3628.exitTime = i3629[3]
  i3628.hasExitTime = !!i3629[4]
  i3628.hasFixedDuration = !!i3629[5]
  i3628.interruptionSource = i3629[6]
  i3628.offset = i3629[7]
  i3628.orderedInterruption = !!i3629[8]
  i3628.destinationStateId = i3629[9]
  i3628.isExit = !!i3629[10]
  i3628.mute = !!i3629[11]
  i3628.solo = !!i3629[12]
  var i3631 = i3629[13]
  var i3630 = []
  for(var i = 0; i < i3631.length; i += 1) {
    i3630.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i3631[i + 0]) );
  }
  i3628.conditions = i3630
  return i3628
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i3636 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i3637 = data
  i3636.destinationStateId = i3637[0]
  i3636.isExit = !!i3637[1]
  i3636.mute = !!i3637[2]
  i3636.solo = !!i3637[3]
  var i3639 = i3637[4]
  var i3638 = []
  for(var i = 0; i < i3639.length; i += 1) {
    i3638.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i3639[i + 0]) );
  }
  i3636.conditions = i3638
  return i3636
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i3642 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i3643 = data
  i3642.defaultBool = !!i3643[0]
  i3642.defaultFloat = i3643[1]
  i3642.defaultInt = i3643[2]
  i3642.name = i3643[3]
  i3642.nameHash = i3643[4]
  i3642.type = i3643[5]
  return i3642
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i3644 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i3645 = data
  i3644.name = i3645[0]
  i3644.bytes64 = i3645[1]
  i3644.data = i3645[2]
  return i3644
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i3646 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i3647 = data
  i3646.normalStyle = i3647[0]
  i3646.normalSpacingOffset = i3647[1]
  i3646.boldStyle = i3647[2]
  i3646.boldSpacing = i3647[3]
  i3646.italicStyle = i3647[4]
  i3646.tabSize = i3647[5]
  request.r(i3647[6], i3647[7], 0, i3646, 'atlas')
  i3646.m_SourceFontFileGUID = i3647[8]
  i3646.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i3647[9], i3646.m_CreationSettings)
  request.r(i3647[10], i3647[11], 0, i3646, 'm_SourceFontFile')
  i3646.m_SourceFontFilePath = i3647[12]
  i3646.m_AtlasPopulationMode = i3647[13]
  i3646.InternalDynamicOS = !!i3647[14]
  var i3649 = i3647[15]
  var i3648 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i3649.length; i += 1) {
    i3648.add(request.d('UnityEngine.TextCore.Glyph', i3649[i + 0]));
  }
  i3646.m_GlyphTable = i3648
  var i3651 = i3647[16]
  var i3650 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i3651.length; i += 1) {
    i3650.add(request.d('TMPro.TMP_Character', i3651[i + 0]));
  }
  i3646.m_CharacterTable = i3650
  var i3653 = i3647[17]
  var i3652 = []
  for(var i = 0; i < i3653.length; i += 2) {
  request.r(i3653[i + 0], i3653[i + 1], 2, i3652, '')
  }
  i3646.m_AtlasTextures = i3652
  i3646.m_AtlasTextureIndex = i3647[18]
  i3646.m_IsMultiAtlasTexturesEnabled = !!i3647[19]
  i3646.m_GetFontFeatures = !!i3647[20]
  i3646.m_ClearDynamicDataOnBuild = !!i3647[21]
  i3646.m_AtlasWidth = i3647[22]
  i3646.m_AtlasHeight = i3647[23]
  i3646.m_AtlasPadding = i3647[24]
  i3646.m_AtlasRenderMode = i3647[25]
  var i3655 = i3647[26]
  var i3654 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i3655.length; i += 1) {
    i3654.add(request.d('UnityEngine.TextCore.GlyphRect', i3655[i + 0]));
  }
  i3646.m_UsedGlyphRects = i3654
  var i3657 = i3647[27]
  var i3656 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i3657.length; i += 1) {
    i3656.add(request.d('UnityEngine.TextCore.GlyphRect', i3657[i + 0]));
  }
  i3646.m_FreeGlyphRects = i3656
  i3646.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i3647[28], i3646.m_FontFeatureTable)
  i3646.m_ShouldReimportFontFeatures = !!i3647[29]
  var i3659 = i3647[30]
  var i3658 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i3659.length; i += 2) {
  request.r(i3659[i + 0], i3659[i + 1], 1, i3658, '')
  }
  i3646.m_FallbackFontAssetTable = i3658
  var i3661 = i3647[31]
  var i3660 = []
  for(var i = 0; i < i3661.length; i += 1) {
    i3660.push( request.d('TMPro.TMP_FontWeightPair', i3661[i + 0]) );
  }
  i3646.m_FontWeightTable = i3660
  var i3663 = i3647[32]
  var i3662 = []
  for(var i = 0; i < i3663.length; i += 1) {
    i3662.push( request.d('TMPro.TMP_FontWeightPair', i3663[i + 0]) );
  }
  i3646.fontWeights = i3662
  i3646.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i3647[33], i3646.m_fontInfo)
  var i3665 = i3647[34]
  var i3664 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i3665.length; i += 1) {
    i3664.add(request.d('TMPro.TMP_Glyph', i3665[i + 0]));
  }
  i3646.m_glyphInfoList = i3664
  i3646.m_KerningTable = request.d('TMPro.KerningTable', i3647[35], i3646.m_KerningTable)
  var i3667 = i3647[36]
  var i3666 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i3667.length; i += 2) {
  request.r(i3667[i + 0], i3667[i + 1], 1, i3666, '')
  }
  i3646.fallbackFontAssets = i3666
  i3646.m_Version = i3647[37]
  i3646.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i3647[38], i3646.m_FaceInfo)
  request.r(i3647[39], i3647[40], 0, i3646, 'm_Material')
  return i3646
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i3668 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i3669 = data
  i3668.sourceFontFileName = i3669[0]
  i3668.sourceFontFileGUID = i3669[1]
  i3668.faceIndex = i3669[2]
  i3668.pointSizeSamplingMode = i3669[3]
  i3668.pointSize = i3669[4]
  i3668.padding = i3669[5]
  i3668.paddingMode = i3669[6]
  i3668.packingMode = i3669[7]
  i3668.atlasWidth = i3669[8]
  i3668.atlasHeight = i3669[9]
  i3668.characterSetSelectionMode = i3669[10]
  i3668.characterSequence = i3669[11]
  i3668.referencedFontAssetGUID = i3669[12]
  i3668.referencedTextAssetGUID = i3669[13]
  i3668.fontStyle = i3669[14]
  i3668.fontStyleModifier = i3669[15]
  i3668.renderMode = i3669[16]
  i3668.includeFontFeatures = !!i3669[17]
  return i3668
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i3672 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i3673 = data
  i3672.m_Index = i3673[0]
  i3672.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i3673[1], i3672.m_Metrics)
  i3672.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i3673[2], i3672.m_GlyphRect)
  i3672.m_Scale = i3673[3]
  i3672.m_AtlasIndex = i3673[4]
  i3672.m_ClassDefinitionType = i3673[5]
  return i3672
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i3674 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i3675 = data
  i3674.m_Width = i3675[0]
  i3674.m_Height = i3675[1]
  i3674.m_HorizontalBearingX = i3675[2]
  i3674.m_HorizontalBearingY = i3675[3]
  i3674.m_HorizontalAdvance = i3675[4]
  return i3674
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i3676 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i3677 = data
  i3676.m_X = i3677[0]
  i3676.m_Y = i3677[1]
  i3676.m_Width = i3677[2]
  i3676.m_Height = i3677[3]
  return i3676
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i3680 = root || request.c( 'TMPro.TMP_Character' )
  var i3681 = data
  i3680.m_ElementType = i3681[0]
  i3680.m_Unicode = i3681[1]
  i3680.m_GlyphIndex = i3681[2]
  i3680.m_Scale = i3681[3]
  return i3680
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i3686 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i3687 = data
  var i3689 = i3687[0]
  var i3688 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i3689.length; i += 1) {
    i3688.add(request.d('TMPro.MultipleSubstitutionRecord', i3689[i + 0]));
  }
  i3686.m_MultipleSubstitutionRecords = i3688
  var i3691 = i3687[1]
  var i3690 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i3691.length; i += 1) {
    i3690.add(request.d('TMPro.LigatureSubstitutionRecord', i3691[i + 0]));
  }
  i3686.m_LigatureSubstitutionRecords = i3690
  var i3693 = i3687[2]
  var i3692 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i3693.length; i += 1) {
    i3692.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i3693[i + 0]));
  }
  i3686.m_GlyphPairAdjustmentRecords = i3692
  var i3695 = i3687[3]
  var i3694 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i3695.length; i += 1) {
    i3694.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i3695[i + 0]));
  }
  i3686.m_MarkToBaseAdjustmentRecords = i3694
  var i3697 = i3687[4]
  var i3696 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i3697.length; i += 1) {
    i3696.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i3697[i + 0]));
  }
  i3686.m_MarkToMarkAdjustmentRecords = i3696
  return i3686
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i3700 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i3701 = data
  i3700.m_TargetGlyphID = i3701[0]
  i3700.m_SubstituteGlyphIDs = i3701[1]
  return i3700
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i3704 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i3705 = data
  i3704.m_ComponentGlyphIDs = i3705[0]
  i3704.m_LigatureGlyphID = i3705[1]
  return i3704
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i3708 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i3709 = data
  i3708.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i3709[0], i3708.m_FirstAdjustmentRecord)
  i3708.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i3709[1], i3708.m_SecondAdjustmentRecord)
  i3708.m_FeatureLookupFlags = i3709[2]
  return i3708
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i3710 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i3711 = data
  i3710.m_GlyphIndex = i3711[0]
  i3710.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i3711[1], i3710.m_GlyphValueRecord)
  return i3710
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i3712 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i3713 = data
  i3712.m_XPlacement = i3713[0]
  i3712.m_YPlacement = i3713[1]
  i3712.m_XAdvance = i3713[2]
  i3712.m_YAdvance = i3713[3]
  return i3712
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i3716 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i3717 = data
  i3716.m_BaseGlyphID = i3717[0]
  i3716.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i3717[1], i3716.m_BaseGlyphAnchorPoint)
  i3716.m_MarkGlyphID = i3717[2]
  i3716.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i3717[3], i3716.m_MarkPositionAdjustment)
  return i3716
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i3720 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i3721 = data
  i3720.m_BaseMarkGlyphID = i3721[0]
  i3720.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i3721[1], i3720.m_BaseMarkGlyphAnchorPoint)
  i3720.m_CombiningMarkGlyphID = i3721[2]
  i3720.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i3721[3], i3720.m_CombiningMarkPositionAdjustment)
  return i3720
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i3726 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i3727 = data
  request.r(i3727[0], i3727[1], 0, i3726, 'regularTypeface')
  request.r(i3727[2], i3727[3], 0, i3726, 'italicTypeface')
  return i3726
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i3728 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i3729 = data
  i3728.Name = i3729[0]
  i3728.PointSize = i3729[1]
  i3728.Scale = i3729[2]
  i3728.CharacterCount = i3729[3]
  i3728.LineHeight = i3729[4]
  i3728.Baseline = i3729[5]
  i3728.Ascender = i3729[6]
  i3728.CapHeight = i3729[7]
  i3728.Descender = i3729[8]
  i3728.CenterLine = i3729[9]
  i3728.SuperscriptOffset = i3729[10]
  i3728.SubscriptOffset = i3729[11]
  i3728.SubSize = i3729[12]
  i3728.Underline = i3729[13]
  i3728.UnderlineThickness = i3729[14]
  i3728.strikethrough = i3729[15]
  i3728.strikethroughThickness = i3729[16]
  i3728.TabWidth = i3729[17]
  i3728.Padding = i3729[18]
  i3728.AtlasWidth = i3729[19]
  i3728.AtlasHeight = i3729[20]
  return i3728
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i3732 = root || request.c( 'TMPro.TMP_Glyph' )
  var i3733 = data
  i3732.id = i3733[0]
  i3732.x = i3733[1]
  i3732.y = i3733[2]
  i3732.width = i3733[3]
  i3732.height = i3733[4]
  i3732.xOffset = i3733[5]
  i3732.yOffset = i3733[6]
  i3732.xAdvance = i3733[7]
  i3732.scale = i3733[8]
  return i3732
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i3734 = root || request.c( 'TMPro.KerningTable' )
  var i3735 = data
  var i3737 = i3735[0]
  var i3736 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i3737.length; i += 1) {
    i3736.add(request.d('TMPro.KerningPair', i3737[i + 0]));
  }
  i3734.kerningPairs = i3736
  return i3734
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i3740 = root || request.c( 'TMPro.KerningPair' )
  var i3741 = data
  i3740.xOffset = i3741[0]
  i3740.m_FirstGlyph = i3741[1]
  i3740.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i3741[2], i3740.m_FirstGlyphAdjustments)
  i3740.m_SecondGlyph = i3741[3]
  i3740.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i3741[4], i3740.m_SecondGlyphAdjustments)
  i3740.m_IgnoreSpacingAdjustments = !!i3741[5]
  return i3740
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i3742 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i3743 = data
  i3742.m_FaceIndex = i3743[0]
  i3742.m_FamilyName = i3743[1]
  i3742.m_StyleName = i3743[2]
  i3742.m_PointSize = i3743[3]
  i3742.m_Scale = i3743[4]
  i3742.m_UnitsPerEM = i3743[5]
  i3742.m_LineHeight = i3743[6]
  i3742.m_AscentLine = i3743[7]
  i3742.m_CapLine = i3743[8]
  i3742.m_MeanLine = i3743[9]
  i3742.m_Baseline = i3743[10]
  i3742.m_DescentLine = i3743[11]
  i3742.m_SuperscriptOffset = i3743[12]
  i3742.m_SuperscriptSize = i3743[13]
  i3742.m_SubscriptOffset = i3743[14]
  i3742.m_SubscriptSize = i3743[15]
  i3742.m_UnderlineOffset = i3743[16]
  i3742.m_UnderlineThickness = i3743[17]
  i3742.m_StrikethroughOffset = i3743[18]
  i3742.m_StrikethroughThickness = i3743[19]
  i3742.m_TabWidth = i3743[20]
  return i3742
}

Deserializers["FavoritePlayerCard"] = function (request, data, root) {
  var i3744 = root || request.c( 'FavoritePlayerCard' )
  var i3745 = data
  i3744.playerName = i3745[0]
  request.r(i3745[1], i3745[2], 0, i3744, 'halfBodySprite')
  request.r(i3745[3], i3745[4], 0, i3744, 'fullBodySprite')
  request.r(i3745[5], i3745[6], 0, i3744, 'nameAudio')
  return i3744
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i3746 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i3747 = data
  i3746.useSafeMode = !!i3747[0]
  i3746.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i3747[1], i3746.safeModeOptions)
  i3746.timeScale = i3747[2]
  i3746.unscaledTimeScale = i3747[3]
  i3746.useSmoothDeltaTime = !!i3747[4]
  i3746.maxSmoothUnscaledTime = i3747[5]
  i3746.rewindCallbackMode = i3747[6]
  i3746.showUnityEditorReport = !!i3747[7]
  i3746.logBehaviour = i3747[8]
  i3746.drawGizmos = !!i3747[9]
  i3746.defaultRecyclable = !!i3747[10]
  i3746.defaultAutoPlay = i3747[11]
  i3746.defaultUpdateType = i3747[12]
  i3746.defaultTimeScaleIndependent = !!i3747[13]
  i3746.defaultEaseType = i3747[14]
  i3746.defaultEaseOvershootOrAmplitude = i3747[15]
  i3746.defaultEasePeriod = i3747[16]
  i3746.defaultAutoKill = !!i3747[17]
  i3746.defaultLoopType = i3747[18]
  i3746.debugMode = !!i3747[19]
  i3746.debugStoreTargetId = !!i3747[20]
  i3746.showPreviewPanel = !!i3747[21]
  i3746.storeSettingsLocation = i3747[22]
  i3746.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i3747[23], i3746.modules)
  i3746.createASMDEF = !!i3747[24]
  i3746.showPlayingTweens = !!i3747[25]
  i3746.showPausedTweens = !!i3747[26]
  return i3746
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i3748 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i3749 = data
  i3748.logBehaviour = i3749[0]
  i3748.nestedTweenFailureBehaviour = i3749[1]
  return i3748
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i3750 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i3751 = data
  i3750.showPanel = !!i3751[0]
  i3750.audioEnabled = !!i3751[1]
  i3750.physicsEnabled = !!i3751[2]
  i3750.physics2DEnabled = !!i3751[3]
  i3750.spriteEnabled = !!i3751[4]
  i3750.uiEnabled = !!i3751[5]
  i3750.uiToolkitEnabled = !!i3751[6]
  i3750.textMeshProEnabled = !!i3751[7]
  i3750.tk2DEnabled = !!i3751[8]
  i3750.deAudioEnabled = !!i3751[9]
  i3750.deUnityExtendedEnabled = !!i3751[10]
  i3750.epoOutlineEnabled = !!i3751[11]
  return i3750
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i3752 = root || request.c( 'TMPro.TMP_Settings' )
  var i3753 = data
  i3752.assetVersion = i3753[0]
  i3752.m_TextWrappingMode = i3753[1]
  i3752.m_enableKerning = !!i3753[2]
  var i3755 = i3753[3]
  var i3754 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i3755.length; i += 1) {
    i3754.add(i3755[i + 0]);
  }
  i3752.m_ActiveFontFeatures = i3754
  i3752.m_enableExtraPadding = !!i3753[4]
  i3752.m_enableTintAllSprites = !!i3753[5]
  i3752.m_enableParseEscapeCharacters = !!i3753[6]
  i3752.m_EnableRaycastTarget = !!i3753[7]
  i3752.m_GetFontFeaturesAtRuntime = !!i3753[8]
  i3752.m_missingGlyphCharacter = i3753[9]
  i3752.m_ClearDynamicDataOnBuild = !!i3753[10]
  i3752.m_warningsDisabled = !!i3753[11]
  request.r(i3753[12], i3753[13], 0, i3752, 'm_defaultFontAsset')
  i3752.m_defaultFontAssetPath = i3753[14]
  i3752.m_defaultFontSize = i3753[15]
  i3752.m_defaultAutoSizeMinRatio = i3753[16]
  i3752.m_defaultAutoSizeMaxRatio = i3753[17]
  i3752.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i3753[18], i3753[19] )
  i3752.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i3753[20], i3753[21] )
  i3752.m_autoSizeTextContainer = !!i3753[22]
  i3752.m_IsTextObjectScaleStatic = !!i3753[23]
  var i3757 = i3753[24]
  var i3756 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i3757.length; i += 2) {
  request.r(i3757[i + 0], i3757[i + 1], 1, i3756, '')
  }
  i3752.m_fallbackFontAssets = i3756
  i3752.m_matchMaterialPreset = !!i3753[25]
  i3752.m_HideSubTextObjects = !!i3753[26]
  request.r(i3753[27], i3753[28], 0, i3752, 'm_defaultSpriteAsset')
  i3752.m_defaultSpriteAssetPath = i3753[29]
  i3752.m_enableEmojiSupport = !!i3753[30]
  i3752.m_MissingCharacterSpriteUnicode = i3753[31]
  var i3759 = i3753[32]
  var i3758 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i3759.length; i += 2) {
  request.r(i3759[i + 0], i3759[i + 1], 1, i3758, '')
  }
  i3752.m_EmojiFallbackTextAssets = i3758
  i3752.m_defaultColorGradientPresetsPath = i3753[33]
  request.r(i3753[34], i3753[35], 0, i3752, 'm_defaultStyleSheet')
  i3752.m_StyleSheetsResourcePath = i3753[36]
  request.r(i3753[37], i3753[38], 0, i3752, 'm_leadingCharacters')
  request.r(i3753[39], i3753[40], 0, i3752, 'm_followingCharacters')
  i3752.m_UseModernHangulLineBreakingRules = !!i3753[41]
  return i3752
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i3762 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i3763 = data
  request.r(i3763[0], i3763[1], 0, i3762, 'spriteSheet')
  var i3765 = i3763[2]
  var i3764 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i3765.length; i += 1) {
    i3764.add(request.d('TMPro.TMP_Sprite', i3765[i + 0]));
  }
  i3762.spriteInfoList = i3764
  var i3767 = i3763[3]
  var i3766 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i3767.length; i += 2) {
  request.r(i3767[i + 0], i3767[i + 1], 1, i3766, '')
  }
  i3762.fallbackSpriteAssets = i3766
  var i3769 = i3763[4]
  var i3768 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i3769.length; i += 1) {
    i3768.add(request.d('TMPro.TMP_SpriteCharacter', i3769[i + 0]));
  }
  i3762.m_SpriteCharacterTable = i3768
  var i3771 = i3763[5]
  var i3770 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i3771.length; i += 1) {
    i3770.add(request.d('TMPro.TMP_SpriteGlyph', i3771[i + 0]));
  }
  i3762.m_GlyphTable = i3770
  i3762.m_Version = i3763[6]
  i3762.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i3763[7], i3762.m_FaceInfo)
  request.r(i3763[8], i3763[9], 0, i3762, 'm_Material')
  return i3762
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i3774 = root || request.c( 'TMPro.TMP_Sprite' )
  var i3775 = data
  i3774.name = i3775[0]
  i3774.hashCode = i3775[1]
  i3774.unicode = i3775[2]
  i3774.pivot = new pc.Vec2( i3775[3], i3775[4] )
  request.r(i3775[5], i3775[6], 0, i3774, 'sprite')
  i3774.id = i3775[7]
  i3774.x = i3775[8]
  i3774.y = i3775[9]
  i3774.width = i3775[10]
  i3774.height = i3775[11]
  i3774.xOffset = i3775[12]
  i3774.yOffset = i3775[13]
  i3774.xAdvance = i3775[14]
  i3774.scale = i3775[15]
  return i3774
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i3780 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i3781 = data
  i3780.m_Name = i3781[0]
  i3780.m_ElementType = i3781[1]
  i3780.m_Unicode = i3781[2]
  i3780.m_GlyphIndex = i3781[3]
  i3780.m_Scale = i3781[4]
  return i3780
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i3784 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i3785 = data
  request.r(i3785[0], i3785[1], 0, i3784, 'sprite')
  i3784.m_Index = i3785[2]
  i3784.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i3785[3], i3784.m_Metrics)
  i3784.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i3785[4], i3784.m_GlyphRect)
  i3784.m_Scale = i3785[5]
  i3784.m_AtlasIndex = i3785[6]
  i3784.m_ClassDefinitionType = i3785[7]
  return i3784
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i3786 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i3787 = data
  var i3789 = i3787[0]
  var i3788 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i3789.length; i += 1) {
    i3788.add(request.d('TMPro.TMP_Style', i3789[i + 0]));
  }
  i3786.m_StyleList = i3788
  return i3786
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i3792 = root || request.c( 'TMPro.TMP_Style' )
  var i3793 = data
  i3792.m_Name = i3793[0]
  i3792.m_HashCode = i3793[1]
  i3792.m_OpeningDefinition = i3793[2]
  i3792.m_ClosingDefinition = i3793[3]
  i3792.m_OpeningTagArray = i3793[4]
  i3792.m_ClosingTagArray = i3793[5]
  return i3792
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i3794 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i3795 = data
  var i3797 = i3795[0]
  var i3796 = []
  for(var i = 0; i < i3797.length; i += 1) {
    i3796.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i3797[i + 0]) );
  }
  i3794.files = i3796
  i3794.componentToPrefabIds = i3795[1]
  return i3794
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i3800 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i3801 = data
  i3800.path = i3801[0]
  request.r(i3801[1], i3801[2], 0, i3800, 'unityObject')
  return i3800
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i3802 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i3803 = data
  var i3805 = i3803[0]
  var i3804 = []
  for(var i = 0; i < i3805.length; i += 1) {
    i3804.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i3805[i + 0]) );
  }
  i3802.scriptsExecutionOrder = i3804
  var i3807 = i3803[1]
  var i3806 = []
  for(var i = 0; i < i3807.length; i += 1) {
    i3806.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i3807[i + 0]) );
  }
  i3802.sortingLayers = i3806
  var i3809 = i3803[2]
  var i3808 = []
  for(var i = 0; i < i3809.length; i += 1) {
    i3808.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i3809[i + 0]) );
  }
  i3802.cullingLayers = i3808
  i3802.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i3803[3], i3802.timeSettings)
  i3802.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i3803[4], i3802.physicsSettings)
  i3802.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i3803[5], i3802.physics2DSettings)
  i3802.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i3803[6], i3802.qualitySettings)
  i3802.enableRealtimeShadows = !!i3803[7]
  i3802.enableAutoInstancing = !!i3803[8]
  i3802.enableStaticBatching = !!i3803[9]
  i3802.enableDynamicBatching = !!i3803[10]
  i3802.lightmapEncodingQuality = i3803[11]
  i3802.desiredColorSpace = i3803[12]
  var i3811 = i3803[13]
  var i3810 = []
  for(var i = 0; i < i3811.length; i += 1) {
    i3810.push( i3811[i + 0] );
  }
  i3802.allTags = i3810
  return i3802
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i3814 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i3815 = data
  i3814.name = i3815[0]
  i3814.value = i3815[1]
  return i3814
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i3818 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i3819 = data
  i3818.id = i3819[0]
  i3818.name = i3819[1]
  i3818.value = i3819[2]
  return i3818
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i3822 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i3823 = data
  i3822.id = i3823[0]
  i3822.name = i3823[1]
  return i3822
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i3824 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i3825 = data
  i3824.fixedDeltaTime = i3825[0]
  i3824.maximumDeltaTime = i3825[1]
  i3824.timeScale = i3825[2]
  i3824.maximumParticleTimestep = i3825[3]
  return i3824
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i3826 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i3827 = data
  i3826.gravity = new pc.Vec3( i3827[0], i3827[1], i3827[2] )
  i3826.defaultSolverIterations = i3827[3]
  i3826.bounceThreshold = i3827[4]
  i3826.autoSyncTransforms = !!i3827[5]
  i3826.autoSimulation = !!i3827[6]
  var i3829 = i3827[7]
  var i3828 = []
  for(var i = 0; i < i3829.length; i += 1) {
    i3828.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i3829[i + 0]) );
  }
  i3826.collisionMatrix = i3828
  return i3826
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i3832 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i3833 = data
  i3832.enabled = !!i3833[0]
  i3832.layerId = i3833[1]
  i3832.otherLayerId = i3833[2]
  return i3832
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i3834 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i3835 = data
  request.r(i3835[0], i3835[1], 0, i3834, 'material')
  i3834.gravity = new pc.Vec2( i3835[2], i3835[3] )
  i3834.positionIterations = i3835[4]
  i3834.velocityIterations = i3835[5]
  i3834.velocityThreshold = i3835[6]
  i3834.maxLinearCorrection = i3835[7]
  i3834.maxAngularCorrection = i3835[8]
  i3834.maxTranslationSpeed = i3835[9]
  i3834.maxRotationSpeed = i3835[10]
  i3834.baumgarteScale = i3835[11]
  i3834.baumgarteTOIScale = i3835[12]
  i3834.timeToSleep = i3835[13]
  i3834.linearSleepTolerance = i3835[14]
  i3834.angularSleepTolerance = i3835[15]
  i3834.defaultContactOffset = i3835[16]
  i3834.autoSimulation = !!i3835[17]
  i3834.queriesHitTriggers = !!i3835[18]
  i3834.queriesStartInColliders = !!i3835[19]
  i3834.callbacksOnDisable = !!i3835[20]
  i3834.reuseCollisionCallbacks = !!i3835[21]
  i3834.autoSyncTransforms = !!i3835[22]
  var i3837 = i3835[23]
  var i3836 = []
  for(var i = 0; i < i3837.length; i += 1) {
    i3836.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i3837[i + 0]) );
  }
  i3834.collisionMatrix = i3836
  return i3834
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i3840 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i3841 = data
  i3840.enabled = !!i3841[0]
  i3840.layerId = i3841[1]
  i3840.otherLayerId = i3841[2]
  return i3840
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i3842 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i3843 = data
  var i3845 = i3843[0]
  var i3844 = []
  for(var i = 0; i < i3845.length; i += 1) {
    i3844.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i3845[i + 0]) );
  }
  i3842.qualityLevels = i3844
  var i3847 = i3843[1]
  var i3846 = []
  for(var i = 0; i < i3847.length; i += 1) {
    i3846.push( i3847[i + 0] );
  }
  i3842.names = i3846
  i3842.shadows = i3843[2]
  i3842.anisotropicFiltering = i3843[3]
  i3842.antiAliasing = i3843[4]
  i3842.lodBias = i3843[5]
  i3842.shadowCascades = i3843[6]
  i3842.shadowDistance = i3843[7]
  i3842.shadowmaskMode = i3843[8]
  i3842.shadowProjection = i3843[9]
  i3842.shadowResolution = i3843[10]
  i3842.softParticles = !!i3843[11]
  i3842.softVegetation = !!i3843[12]
  i3842.activeColorSpace = i3843[13]
  i3842.desiredColorSpace = i3843[14]
  i3842.masterTextureLimit = i3843[15]
  i3842.maxQueuedFrames = i3843[16]
  i3842.particleRaycastBudget = i3843[17]
  i3842.pixelLightCount = i3843[18]
  i3842.realtimeReflectionProbes = !!i3843[19]
  i3842.shadowCascade2Split = i3843[20]
  i3842.shadowCascade4Split = new pc.Vec3( i3843[21], i3843[22], i3843[23] )
  i3842.streamingMipmapsActive = !!i3843[24]
  i3842.vSyncCount = i3843[25]
  i3842.asyncUploadBufferSize = i3843[26]
  i3842.asyncUploadTimeSlice = i3843[27]
  i3842.billboardsFaceCameraPosition = !!i3843[28]
  i3842.shadowNearPlaneOffset = i3843[29]
  i3842.streamingMipmapsMemoryBudget = i3843[30]
  i3842.maximumLODLevel = i3843[31]
  i3842.streamingMipmapsAddAllCameras = !!i3843[32]
  i3842.streamingMipmapsMaxLevelReduction = i3843[33]
  i3842.streamingMipmapsRenderersPerFrame = i3843[34]
  i3842.resolutionScalingFixedDPIFactor = i3843[35]
  i3842.streamingMipmapsMaxFileIORequests = i3843[36]
  i3842.currentQualityLevel = i3843[37]
  return i3842
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i3852 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i3853 = data
  i3852.weight = i3853[0]
  i3852.vertices = i3853[1]
  i3852.normals = i3853[2]
  i3852.tangents = i3853[3]
  return i3852
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i3856 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i3857 = data
  i3856.mode = i3857[0]
  i3856.parameter = i3857[1]
  i3856.threshold = i3857[2]
  return i3856
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i3858 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i3859 = data
  i3858.m_XCoordinate = i3859[0]
  i3858.m_YCoordinate = i3859[1]
  return i3858
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i3860 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i3861 = data
  i3860.m_XPositionAdjustment = i3861[0]
  i3860.m_YPositionAdjustment = i3861[1]
  return i3860
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i3862 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i3863 = data
  i3862.xPlacement = i3863[0]
  i3862.yPlacement = i3863[1]
  i3862.xAdvance = i3863[2]
  i3862.yAdvance = i3863[3]
  return i3862
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2}}

Deserializers.requiredComponents = {"49":[50],"51":[50],"52":[50],"53":[50],"54":[50],"55":[50],"56":[57],"58":[2],"59":[60],"61":[60],"62":[60],"63":[60],"64":[60],"65":[60],"66":[67],"68":[67],"69":[67],"70":[67],"71":[67],"72":[67],"73":[67],"74":[67],"75":[67],"76":[67],"77":[67],"78":[67],"79":[67],"80":[2],"81":[24],"82":[83],"84":[83],"35":[23],"6":[2],"19":[85],"86":[67],"87":[88],"33":[85],"89":[12],"90":[2],"91":[92],"93":[41],"94":[35],"95":[23],"21":[24,23],"39":[23,38],"96":[23],"97":[38,23],"98":[24],"99":[38,23],"100":[23],"101":[102],"103":[102],"104":[102],"105":[23],"106":[23],"37":[35],"40":[38,23],"107":[23],"36":[35],"108":[23],"109":[23],"110":[23],"111":[23],"112":[23],"113":[23],"114":[23],"115":[23],"116":[23],"117":[38,23],"118":[23],"119":[23],"120":[23],"121":[23],"122":[38,23],"123":[23],"124":[41],"125":[41],"42":[41],"126":[41],"127":[2],"128":[2]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.MonoBehaviour","CameraFollow2D","AutoCameraFit","UnityEngine.Transform","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Mesh","UnityEngine.Material","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","MoveBetweenPoints","ScreenHeightPositionAnchor","UnityEngine.BoxCollider","ClickToStore","FavoritePlayerEndcard","TMPro.TextMeshPro","UnityEngine.GameObject","UnityEngine.RectTransform","UnityEngine.MeshRenderer","UnityEngine.EventSystems.UIBehaviour","TMPro.TMP_FontAsset","UnityEngine.MeshFilter","PlayerCardUIManager","Ply_SoundManager","UnityEngine.AudioSource","UnityEngine.AudioClip","FavoritePlayerManager","PlayerSlot","FavoritePlayerCard","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","TMPro.TextMeshProUGUI","UnityEngine.UI.Image","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.Font","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.Collider","BatStrikeController","SlotTrigger","UnityEngine.BoxCollider2D","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.InputSystem.UI.InputSystemUIInputModule","UnityEngine.InputSystem.UI.TrackedDeviceRaycaster","TMPro.TextContainer","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1786";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4678";

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

Deserializers.buildID = "f92d68a0-4f30-47e2-b995-cce98b20c7e1";

Deserializers.runtimeInitializeOnLoadInfos = [[["Unity","Services","Core","Internal","UnityServicesInitializer","EnableServicesInitializationAsync"],["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["DG","Tweening","DOTween","RuntimeOnLoad"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["Unity","Services","Core","Registration","CorePackageInitializer","InitializeOnLoad"],["Unity","Services","Core","Internal","TaskAsyncOperation","SetScheduler"],["Unity","Services","Core","Environments","Client","Scheduler","EngineStateHelper","Init"],["Unity","Services","Core","Environments","Client","Scheduler","ThreadHelper","Init"],["Ua2CoreInitializeCallback","Register"],["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["Unity","AI","Navigation","NavMeshLink","ClearTrackedList"],["Unity","AI","Navigation","NavMeshSurface","ClearNavMeshSurfaces"],["Unity","AI","Navigation","NavMeshModifierVolume","ClearNavMeshModifiers"],["Unity","AI","Navigation","NavMeshModifier","ClearNavMeshModifiers"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["Unity","Services","Core","Internal","UnityServicesInitializer","CreateStaticInstance"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[["Unity","Services","Core","Environments","Client","Http","JsonHelpers","RegisterTypesForAOT"]],[["Unity","Services","Core","UnityThreadUtils","CaptureUnityThreadInfo"],["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

