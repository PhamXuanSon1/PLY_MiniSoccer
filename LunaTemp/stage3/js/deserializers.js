var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i3180 = root || request.c( 'UnityEngine.JointSpring' )
  var i3181 = data
  i3180.spring = i3181[0]
  i3180.damper = i3181[1]
  i3180.targetPosition = i3181[2]
  return i3180
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i3182 = root || request.c( 'UnityEngine.JointMotor' )
  var i3183 = data
  i3182.m_TargetVelocity = i3183[0]
  i3182.m_Force = i3183[1]
  i3182.m_FreeSpin = i3183[2]
  return i3182
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i3184 = root || request.c( 'UnityEngine.JointLimits' )
  var i3185 = data
  i3184.m_Min = i3185[0]
  i3184.m_Max = i3185[1]
  i3184.m_Bounciness = i3185[2]
  i3184.m_BounceMinVelocity = i3185[3]
  i3184.m_ContactDistance = i3185[4]
  i3184.minBounce = i3185[5]
  i3184.maxBounce = i3185[6]
  return i3184
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i3186 = root || request.c( 'UnityEngine.JointDrive' )
  var i3187 = data
  i3186.m_PositionSpring = i3187[0]
  i3186.m_PositionDamper = i3187[1]
  i3186.m_MaximumForce = i3187[2]
  i3186.m_UseAcceleration = i3187[3]
  return i3186
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i3188 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i3189 = data
  i3188.m_Spring = i3189[0]
  i3188.m_Damper = i3189[1]
  return i3188
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i3190 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i3191 = data
  i3190.m_Limit = i3191[0]
  i3190.m_Bounciness = i3191[1]
  i3190.m_ContactDistance = i3191[2]
  return i3190
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i3192 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i3193 = data
  i3192.m_ExtremumSlip = i3193[0]
  i3192.m_ExtremumValue = i3193[1]
  i3192.m_AsymptoteSlip = i3193[2]
  i3192.m_AsymptoteValue = i3193[3]
  i3192.m_Stiffness = i3193[4]
  return i3192
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i3194 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i3195 = data
  i3194.m_LowerAngle = i3195[0]
  i3194.m_UpperAngle = i3195[1]
  return i3194
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i3196 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i3197 = data
  i3196.m_MotorSpeed = i3197[0]
  i3196.m_MaximumMotorTorque = i3197[1]
  return i3196
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i3198 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i3199 = data
  i3198.m_DampingRatio = i3199[0]
  i3198.m_Frequency = i3199[1]
  i3198.m_Angle = i3199[2]
  return i3198
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i3200 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i3201 = data
  i3200.m_LowerTranslation = i3201[0]
  i3200.m_UpperTranslation = i3201[1]
  return i3200
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i3202 = root || new pc.UnityMaterial()
  var i3203 = data
  i3202.name = i3203[0]
  request.r(i3203[1], i3203[2], 0, i3202, 'shader')
  i3202.renderQueue = i3203[3]
  i3202.enableInstancing = !!i3203[4]
  var i3205 = i3203[5]
  var i3204 = []
  for(var i = 0; i < i3205.length; i += 1) {
    i3204.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i3205[i + 0]) );
  }
  i3202.floatParameters = i3204
  var i3207 = i3203[6]
  var i3206 = []
  for(var i = 0; i < i3207.length; i += 1) {
    i3206.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i3207[i + 0]) );
  }
  i3202.colorParameters = i3206
  var i3209 = i3203[7]
  var i3208 = []
  for(var i = 0; i < i3209.length; i += 1) {
    i3208.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i3209[i + 0]) );
  }
  i3202.vectorParameters = i3208
  var i3211 = i3203[8]
  var i3210 = []
  for(var i = 0; i < i3211.length; i += 1) {
    i3210.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i3211[i + 0]) );
  }
  i3202.textureParameters = i3210
  var i3213 = i3203[9]
  var i3212 = []
  for(var i = 0; i < i3213.length; i += 1) {
    i3212.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i3213[i + 0]) );
  }
  i3202.materialFlags = i3212
  return i3202
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i3216 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i3217 = data
  i3216.name = i3217[0]
  i3216.value = i3217[1]
  return i3216
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i3220 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i3221 = data
  i3220.name = i3221[0]
  i3220.value = new pc.Color(i3221[1], i3221[2], i3221[3], i3221[4])
  return i3220
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i3224 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i3225 = data
  i3224.name = i3225[0]
  i3224.value = new pc.Vec4( i3225[1], i3225[2], i3225[3], i3225[4] )
  return i3224
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i3228 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i3229 = data
  i3228.name = i3229[0]
  request.r(i3229[1], i3229[2], 0, i3228, 'value')
  return i3228
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i3232 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i3233 = data
  i3232.name = i3233[0]
  i3232.enabled = !!i3233[1]
  return i3232
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i3234 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i3235 = data
  i3234.name = i3235[0]
  i3234.width = i3235[1]
  i3234.height = i3235[2]
  i3234.mipmapCount = i3235[3]
  i3234.anisoLevel = i3235[4]
  i3234.filterMode = i3235[5]
  i3234.hdr = !!i3235[6]
  i3234.format = i3235[7]
  i3234.wrapMode = i3235[8]
  i3234.alphaIsTransparency = !!i3235[9]
  i3234.alphaSource = i3235[10]
  i3234.graphicsFormat = i3235[11]
  i3234.sRGBTexture = !!i3235[12]
  i3234.desiredColorSpace = i3235[13]
  i3234.wrapU = i3235[14]
  i3234.wrapV = i3235[15]
  return i3234
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i3236 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i3237 = data
  i3236.name = i3237[0]
  i3236.halfPrecision = !!i3237[1]
  i3236.useSimplification = !!i3237[2]
  i3236.useUInt32IndexFormat = !!i3237[3]
  i3236.vertexCount = i3237[4]
  i3236.aabb = i3237[5]
  var i3239 = i3237[6]
  var i3238 = []
  for(var i = 0; i < i3239.length; i += 1) {
    i3238.push( !!i3239[i + 0] );
  }
  i3236.streams = i3238
  i3236.vertices = i3237[7]
  var i3241 = i3237[8]
  var i3240 = []
  for(var i = 0; i < i3241.length; i += 1) {
    i3240.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i3241[i + 0]) );
  }
  i3236.subMeshes = i3240
  var i3243 = i3237[9]
  var i3242 = []
  for(var i = 0; i < i3243.length; i += 16) {
    i3242.push( new pc.Mat4().setData(i3243[i + 0], i3243[i + 1], i3243[i + 2], i3243[i + 3],  i3243[i + 4], i3243[i + 5], i3243[i + 6], i3243[i + 7],  i3243[i + 8], i3243[i + 9], i3243[i + 10], i3243[i + 11],  i3243[i + 12], i3243[i + 13], i3243[i + 14], i3243[i + 15]) );
  }
  i3236.bindposes = i3242
  var i3245 = i3237[10]
  var i3244 = []
  for(var i = 0; i < i3245.length; i += 1) {
    i3244.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i3245[i + 0]) );
  }
  i3236.blendShapes = i3244
  return i3236
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i3250 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i3251 = data
  i3250.triangles = i3251[0]
  return i3250
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i3256 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i3257 = data
  i3256.name = i3257[0]
  var i3259 = i3257[1]
  var i3258 = []
  for(var i = 0; i < i3259.length; i += 1) {
    i3258.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i3259[i + 0]) );
  }
  i3256.frames = i3258
  return i3256
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i3260 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i3261 = data
  i3260.name = i3261[0]
  i3260.index = i3261[1]
  i3260.startup = !!i3261[2]
  return i3260
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i3262 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i3263 = data
  i3262.aspect = i3263[0]
  i3262.orthographic = !!i3263[1]
  i3262.orthographicSize = i3263[2]
  i3262.backgroundColor = new pc.Color(i3263[3], i3263[4], i3263[5], i3263[6])
  i3262.nearClipPlane = i3263[7]
  i3262.farClipPlane = i3263[8]
  i3262.fieldOfView = i3263[9]
  i3262.depth = i3263[10]
  i3262.clearFlags = i3263[11]
  i3262.cullingMask = i3263[12]
  i3262.rect = i3263[13]
  request.r(i3263[14], i3263[15], 0, i3262, 'targetTexture')
  i3262.usePhysicalProperties = !!i3263[16]
  i3262.focalLength = i3263[17]
  i3262.sensorSize = new pc.Vec2( i3263[18], i3263[19] )
  i3262.lensShift = new pc.Vec2( i3263[20], i3263[21] )
  i3262.gateFit = i3263[22]
  i3262.commandBufferCount = i3263[23]
  i3262.cameraType = i3263[24]
  i3262.enabled = !!i3263[25]
  return i3262
}

Deserializers["CameraFollow2D"] = function (request, data, root) {
  var i3264 = root || request.c( 'CameraFollow2D' )
  var i3265 = data
  request.r(i3265[0], i3265[1], 0, i3264, 'target')
  i3264.smoothSpeed = i3265[2]
  i3264.offset = new pc.Vec3( i3265[3], i3265[4], i3265[5] )
  i3264.followY = !!i3265[6]
  return i3264
}

Deserializers["AutoCameraFit"] = function (request, data, root) {
  var i3266 = root || request.c( 'AutoCameraFit' )
  var i3267 = data
  i3266.fitMode = i3267[0]
  i3266.referenceResolution = new pc.Vec2( i3267[1], i3267[2] )
  i3266.referenceOrthographicSize = i3267[3]
  i3266.widthMode = i3267[4]
  i3266.autoFitCanvases = !!i3267[5]
  var i3269 = i3267[6]
  var i3268 = []
  for(var i = 0; i < i3269.length; i += 2) {
  request.r(i3269[i + 0], i3269[i + 1], 2, i3268, '')
  }
  i3266.targetCanvasScalers = i3268
  request.r(i3267[7], i3267[8], 0, i3266, 'tallScreenObject')
  i3266.tallScreenRatioThreshold = i3267[9]
  i3266.tallScreenYOffset = i3267[10]
  request.r(i3267[11], i3267[12], 0, i3266, 'canvasBtn')
  request.r(i3267[13], i3267[14], 0, i3266, 'targetArea')
  i3266.paddingLandscape = i3267[15]
  i3266.paddingPortrait = i3267[16]
  i3266.extraPaddingSmallScreen = i3267[17]
  i3266.smallScreenThreshold = i3267[18]
  i3266.autoUpdateOnResize = !!i3267[19]
  i3266.adjustInEditMode = !!i3267[20]
  return i3266
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i3272 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i3273 = data
  i3272.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i3273[0], i3272.main)
  i3272.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i3273[1], i3272.colorBySpeed)
  i3272.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i3273[2], i3272.colorOverLifetime)
  i3272.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i3273[3], i3272.emission)
  i3272.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i3273[4], i3272.rotationBySpeed)
  i3272.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i3273[5], i3272.rotationOverLifetime)
  i3272.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i3273[6], i3272.shape)
  i3272.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i3273[7], i3272.sizeBySpeed)
  i3272.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i3273[8], i3272.sizeOverLifetime)
  i3272.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i3273[9], i3272.textureSheetAnimation)
  i3272.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i3273[10], i3272.velocityOverLifetime)
  i3272.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i3273[11], i3272.noise)
  i3272.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i3273[12], i3272.inheritVelocity)
  i3272.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i3273[13], i3272.forceOverLifetime)
  i3272.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i3273[14], i3272.limitVelocityOverLifetime)
  i3272.useAutoRandomSeed = !!i3273[15]
  i3272.randomSeed = i3273[16]
  return i3272
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i3274 = root || new pc.ParticleSystemMain()
  var i3275 = data
  i3274.duration = i3275[0]
  i3274.loop = !!i3275[1]
  i3274.prewarm = !!i3275[2]
  i3274.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3275[3], i3274.startDelay)
  i3274.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3275[4], i3274.startLifetime)
  i3274.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3275[5], i3274.startSpeed)
  i3274.startSize3D = !!i3275[6]
  i3274.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3275[7], i3274.startSizeX)
  i3274.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3275[8], i3274.startSizeY)
  i3274.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3275[9], i3274.startSizeZ)
  i3274.startRotation3D = !!i3275[10]
  i3274.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3275[11], i3274.startRotationX)
  i3274.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3275[12], i3274.startRotationY)
  i3274.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3275[13], i3274.startRotationZ)
  i3274.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i3275[14], i3274.startColor)
  i3274.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3275[15], i3274.gravityModifier)
  i3274.simulationSpace = i3275[16]
  request.r(i3275[17], i3275[18], 0, i3274, 'customSimulationSpace')
  i3274.simulationSpeed = i3275[19]
  i3274.useUnscaledTime = !!i3275[20]
  i3274.scalingMode = i3275[21]
  i3274.playOnAwake = !!i3275[22]
  i3274.maxParticles = i3275[23]
  i3274.emitterVelocityMode = i3275[24]
  i3274.stopAction = i3275[25]
  return i3274
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i3276 = root || new pc.MinMaxCurve()
  var i3277 = data
  i3276.mode = i3277[0]
  i3276.curveMin = new pc.AnimationCurve( { keys_flow: i3277[1] } )
  i3276.curveMax = new pc.AnimationCurve( { keys_flow: i3277[2] } )
  i3276.curveMultiplier = i3277[3]
  i3276.constantMin = i3277[4]
  i3276.constantMax = i3277[5]
  return i3276
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i3278 = root || new pc.MinMaxGradient()
  var i3279 = data
  i3278.mode = i3279[0]
  i3278.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i3279[1], i3278.gradientMin)
  i3278.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i3279[2], i3278.gradientMax)
  i3278.colorMin = new pc.Color(i3279[3], i3279[4], i3279[5], i3279[6])
  i3278.colorMax = new pc.Color(i3279[7], i3279[8], i3279[9], i3279[10])
  return i3278
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i3280 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i3281 = data
  i3280.mode = i3281[0]
  var i3283 = i3281[1]
  var i3282 = []
  for(var i = 0; i < i3283.length; i += 1) {
    i3282.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i3283[i + 0]) );
  }
  i3280.colorKeys = i3282
  var i3285 = i3281[2]
  var i3284 = []
  for(var i = 0; i < i3285.length; i += 1) {
    i3284.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i3285[i + 0]) );
  }
  i3280.alphaKeys = i3284
  return i3280
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i3286 = root || new pc.ParticleSystemColorBySpeed()
  var i3287 = data
  i3286.enabled = !!i3287[0]
  i3286.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i3287[1], i3286.color)
  i3286.range = new pc.Vec2( i3287[2], i3287[3] )
  return i3286
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i3290 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i3291 = data
  i3290.color = new pc.Color(i3291[0], i3291[1], i3291[2], i3291[3])
  i3290.time = i3291[4]
  return i3290
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i3294 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i3295 = data
  i3294.alpha = i3295[0]
  i3294.time = i3295[1]
  return i3294
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i3296 = root || new pc.ParticleSystemColorOverLifetime()
  var i3297 = data
  i3296.enabled = !!i3297[0]
  i3296.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i3297[1], i3296.color)
  return i3296
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i3298 = root || new pc.ParticleSystemEmitter()
  var i3299 = data
  i3298.enabled = !!i3299[0]
  i3298.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3299[1], i3298.rateOverTime)
  i3298.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3299[2], i3298.rateOverDistance)
  var i3301 = i3299[3]
  var i3300 = []
  for(var i = 0; i < i3301.length; i += 1) {
    i3300.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i3301[i + 0]) );
  }
  i3298.bursts = i3300
  return i3298
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i3304 = root || new pc.ParticleSystemBurst()
  var i3305 = data
  i3304.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3305[0], i3304.count)
  i3304.cycleCount = i3305[1]
  i3304.minCount = i3305[2]
  i3304.maxCount = i3305[3]
  i3304.repeatInterval = i3305[4]
  i3304.time = i3305[5]
  return i3304
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i3306 = root || new pc.ParticleSystemRotationBySpeed()
  var i3307 = data
  i3306.enabled = !!i3307[0]
  i3306.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3307[1], i3306.x)
  i3306.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3307[2], i3306.y)
  i3306.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3307[3], i3306.z)
  i3306.separateAxes = !!i3307[4]
  i3306.range = new pc.Vec2( i3307[5], i3307[6] )
  return i3306
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i3308 = root || new pc.ParticleSystemRotationOverLifetime()
  var i3309 = data
  i3308.enabled = !!i3309[0]
  i3308.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3309[1], i3308.x)
  i3308.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3309[2], i3308.y)
  i3308.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3309[3], i3308.z)
  i3308.separateAxes = !!i3309[4]
  return i3308
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i3310 = root || new pc.ParticleSystemShape()
  var i3311 = data
  i3310.enabled = !!i3311[0]
  i3310.shapeType = i3311[1]
  i3310.randomDirectionAmount = i3311[2]
  i3310.sphericalDirectionAmount = i3311[3]
  i3310.randomPositionAmount = i3311[4]
  i3310.alignToDirection = !!i3311[5]
  i3310.radius = i3311[6]
  i3310.radiusMode = i3311[7]
  i3310.radiusSpread = i3311[8]
  i3310.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3311[9], i3310.radiusSpeed)
  i3310.radiusThickness = i3311[10]
  i3310.angle = i3311[11]
  i3310.length = i3311[12]
  i3310.boxThickness = new pc.Vec3( i3311[13], i3311[14], i3311[15] )
  i3310.meshShapeType = i3311[16]
  request.r(i3311[17], i3311[18], 0, i3310, 'mesh')
  request.r(i3311[19], i3311[20], 0, i3310, 'meshRenderer')
  request.r(i3311[21], i3311[22], 0, i3310, 'skinnedMeshRenderer')
  i3310.useMeshMaterialIndex = !!i3311[23]
  i3310.meshMaterialIndex = i3311[24]
  i3310.useMeshColors = !!i3311[25]
  i3310.normalOffset = i3311[26]
  i3310.arc = i3311[27]
  i3310.arcMode = i3311[28]
  i3310.arcSpread = i3311[29]
  i3310.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3311[30], i3310.arcSpeed)
  i3310.donutRadius = i3311[31]
  i3310.position = new pc.Vec3( i3311[32], i3311[33], i3311[34] )
  i3310.rotation = new pc.Vec3( i3311[35], i3311[36], i3311[37] )
  i3310.scale = new pc.Vec3( i3311[38], i3311[39], i3311[40] )
  return i3310
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i3312 = root || new pc.ParticleSystemSizeBySpeed()
  var i3313 = data
  i3312.enabled = !!i3313[0]
  i3312.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3313[1], i3312.x)
  i3312.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3313[2], i3312.y)
  i3312.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3313[3], i3312.z)
  i3312.separateAxes = !!i3313[4]
  i3312.range = new pc.Vec2( i3313[5], i3313[6] )
  return i3312
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i3314 = root || new pc.ParticleSystemSizeOverLifetime()
  var i3315 = data
  i3314.enabled = !!i3315[0]
  i3314.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3315[1], i3314.x)
  i3314.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3315[2], i3314.y)
  i3314.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3315[3], i3314.z)
  i3314.separateAxes = !!i3315[4]
  return i3314
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i3316 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i3317 = data
  i3316.enabled = !!i3317[0]
  i3316.mode = i3317[1]
  i3316.animation = i3317[2]
  i3316.numTilesX = i3317[3]
  i3316.numTilesY = i3317[4]
  i3316.useRandomRow = !!i3317[5]
  i3316.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3317[6], i3316.frameOverTime)
  i3316.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3317[7], i3316.startFrame)
  i3316.cycleCount = i3317[8]
  i3316.rowIndex = i3317[9]
  i3316.flipU = i3317[10]
  i3316.flipV = i3317[11]
  i3316.spriteCount = i3317[12]
  var i3319 = i3317[13]
  var i3318 = []
  for(var i = 0; i < i3319.length; i += 2) {
  request.r(i3319[i + 0], i3319[i + 1], 2, i3318, '')
  }
  i3316.sprites = i3318
  return i3316
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i3322 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i3323 = data
  i3322.enabled = !!i3323[0]
  i3322.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3323[1], i3322.x)
  i3322.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3323[2], i3322.y)
  i3322.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3323[3], i3322.z)
  i3322.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3323[4], i3322.radial)
  i3322.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3323[5], i3322.speedModifier)
  i3322.space = i3323[6]
  i3322.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3323[7], i3322.orbitalX)
  i3322.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3323[8], i3322.orbitalY)
  i3322.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3323[9], i3322.orbitalZ)
  i3322.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3323[10], i3322.orbitalOffsetX)
  i3322.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3323[11], i3322.orbitalOffsetY)
  i3322.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3323[12], i3322.orbitalOffsetZ)
  return i3322
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i3324 = root || new pc.ParticleSystemNoise()
  var i3325 = data
  i3324.enabled = !!i3325[0]
  i3324.separateAxes = !!i3325[1]
  i3324.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3325[2], i3324.strengthX)
  i3324.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3325[3], i3324.strengthY)
  i3324.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3325[4], i3324.strengthZ)
  i3324.frequency = i3325[5]
  i3324.damping = !!i3325[6]
  i3324.octaveCount = i3325[7]
  i3324.octaveMultiplier = i3325[8]
  i3324.octaveScale = i3325[9]
  i3324.quality = i3325[10]
  i3324.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3325[11], i3324.scrollSpeed)
  i3324.scrollSpeedMultiplier = i3325[12]
  i3324.remapEnabled = !!i3325[13]
  i3324.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3325[14], i3324.remapX)
  i3324.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3325[15], i3324.remapY)
  i3324.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3325[16], i3324.remapZ)
  i3324.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3325[17], i3324.positionAmount)
  i3324.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3325[18], i3324.rotationAmount)
  i3324.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3325[19], i3324.sizeAmount)
  return i3324
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i3326 = root || new pc.ParticleSystemInheritVelocity()
  var i3327 = data
  i3326.enabled = !!i3327[0]
  i3326.mode = i3327[1]
  i3326.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3327[2], i3326.curve)
  return i3326
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i3328 = root || new pc.ParticleSystemForceOverLifetime()
  var i3329 = data
  i3328.enabled = !!i3329[0]
  i3328.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3329[1], i3328.x)
  i3328.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3329[2], i3328.y)
  i3328.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3329[3], i3328.z)
  i3328.space = i3329[4]
  i3328.randomized = !!i3329[5]
  return i3328
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i3330 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i3331 = data
  i3330.enabled = !!i3331[0]
  i3330.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3331[1], i3330.limit)
  i3330.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3331[2], i3330.limitX)
  i3330.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3331[3], i3330.limitY)
  i3330.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3331[4], i3330.limitZ)
  i3330.dampen = i3331[5]
  i3330.separateAxes = !!i3331[6]
  i3330.space = i3331[7]
  i3330.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3331[8], i3330.drag)
  i3330.multiplyDragByParticleSize = !!i3331[9]
  i3330.multiplyDragByParticleVelocity = !!i3331[10]
  return i3330
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i3332 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i3333 = data
  request.r(i3333[0], i3333[1], 0, i3332, 'mesh')
  i3332.meshCount = i3333[2]
  i3332.activeVertexStreamsCount = i3333[3]
  i3332.alignment = i3333[4]
  i3332.renderMode = i3333[5]
  i3332.sortMode = i3333[6]
  i3332.lengthScale = i3333[7]
  i3332.velocityScale = i3333[8]
  i3332.cameraVelocityScale = i3333[9]
  i3332.normalDirection = i3333[10]
  i3332.sortingFudge = i3333[11]
  i3332.minParticleSize = i3333[12]
  i3332.maxParticleSize = i3333[13]
  i3332.pivot = new pc.Vec3( i3333[14], i3333[15], i3333[16] )
  request.r(i3333[17], i3333[18], 0, i3332, 'trailMaterial')
  i3332.applyActiveColorSpace = !!i3333[19]
  i3332.enabled = !!i3333[20]
  request.r(i3333[21], i3333[22], 0, i3332, 'sharedMaterial')
  var i3335 = i3333[23]
  var i3334 = []
  for(var i = 0; i < i3335.length; i += 2) {
  request.r(i3335[i + 0], i3335[i + 1], 2, i3334, '')
  }
  i3332.sharedMaterials = i3334
  i3332.receiveShadows = !!i3333[24]
  i3332.shadowCastingMode = i3333[25]
  i3332.sortingLayerID = i3333[26]
  i3332.sortingOrder = i3333[27]
  i3332.lightmapIndex = i3333[28]
  i3332.lightmapSceneIndex = i3333[29]
  i3332.lightmapScaleOffset = new pc.Vec4( i3333[30], i3333[31], i3333[32], i3333[33] )
  i3332.lightProbeUsage = i3333[34]
  i3332.reflectionProbeUsage = i3333[35]
  return i3332
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i3338 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i3339 = data
  i3338.name = i3339[0]
  i3338.tagId = i3339[1]
  i3338.enabled = !!i3339[2]
  i3338.isStatic = !!i3339[3]
  i3338.layer = i3339[4]
  return i3338
}

Deserializers["Ply_SoundManager"] = function (request, data, root) {
  var i3340 = root || request.c( 'Ply_SoundManager' )
  var i3341 = data
  i3340.fxAudio = request.d('FxAudio', i3341[0], i3340.fxAudio)
  request.r(i3341[1], i3341[2], 0, i3340, 'bgm1')
  return i3340
}

Deserializers["FxAudio"] = function (request, data, root) {
  var i3342 = root || request.c( 'FxAudio' )
  var i3343 = data
  i3342.ClickBox = request.d('SoundData', i3343[0], i3342.ClickBox)
  i3342.Happy = request.d('SoundData', i3343[1], i3342.Happy)
  i3342.Wrong = request.d('SoundData', i3343[2], i3342.Wrong)
  i3342.Spray = request.d('SoundData', i3343[3], i3342.Spray)
  i3342.Brush = request.d('SoundData', i3343[4], i3342.Brush)
  i3342.Keo = request.d('SoundData', i3343[5], i3342.Keo)
  i3342.Confetti = request.d('SoundData', i3343[6], i3342.Confetti)
  i3342.Lose2 = request.d('SoundData', i3343[7], i3342.Lose2)
  i3342.SelectVini = request.d('SoundData', i3343[8], i3342.SelectVini)
  i3342.SelectMessiMbappe = request.d('SoundData', i3343[9], i3342.SelectMessiMbappe)
  i3342.Tackle = request.d('SoundData', i3343[10], i3342.Tackle)
  i3342.HaalandHurt = request.d('SoundData', i3343[11], i3342.HaalandHurt)
  return i3342
}

Deserializers["SoundData"] = function (request, data, root) {
  var i3344 = root || request.c( 'SoundData' )
  var i3345 = data
  request.r(i3345[0], i3345[1], 0, i3344, 'clip')
  i3344.repeatCount = i3345[2]
  return i3344
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i3346 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i3347 = data
  request.r(i3347[0], i3347[1], 0, i3346, 'clip')
  request.r(i3347[2], i3347[3], 0, i3346, 'outputAudioMixerGroup')
  i3346.playOnAwake = !!i3347[4]
  i3346.loop = !!i3347[5]
  i3346.time = i3347[6]
  i3346.volume = i3347[7]
  i3346.pitch = i3347[8]
  i3346.enabled = !!i3347[9]
  return i3346
}

Deserializers["HaalandGame.HaalandGameManager"] = function (request, data, root) {
  var i3348 = root || request.c( 'HaalandGame.HaalandGameManager' )
  var i3349 = data
  request.r(i3349[0], i3349[1], 0, i3348, 'tutUI')
  request.r(i3349[2], i3349[3], 0, i3348, 'ronaldoTackle')
  request.r(i3349[4], i3349[5], 0, i3348, 'ronaldoTackleAnimator')
  i3348.startRonaldoTackleTrigger = i3349[6]
  request.r(i3349[7], i3349[8], 0, i3348, 'messiTackle')
  request.r(i3349[9], i3349[10], 0, i3348, 'messiTackleAnimator')
  i3348.startMessiTackleTrigger = i3349[11]
  i3348.messiTackleSpeed = i3349[12]
  i3348.tackleAnimDelay = i3349[13]
  request.r(i3349[14], i3349[15], 0, i3348, 'haalandDribbleImage')
  request.r(i3349[16], i3349[17], 0, i3348, 'haalandDribbleAnimator')
  i3348.startHaalandDribbleTrigger = i3349[18]
  request.r(i3349[19], i3349[20], 0, i3348, 'fightingCloud')
  request.r(i3349[21], i3349[22], 0, i3348, 'haalandHurt')
  request.r(i3349[23], i3349[24], 0, i3348, 'haalandWinOnCorrect')
  request.r(i3349[25], i3349[26], 0, i3348, 'haalandWin')
  i3348.winPlayerDelay = i3349[27]
  request.r(i3349[28], i3349[29], 0, i3348, 'standPlayers')
  request.r(i3349[30], i3349[31], 0, i3348, 'standPlayersAnimator')
  i3348.standPlayerEnterTrigger = i3349[32]
  request.r(i3349[33], i3349[34], 0, i3348, 'questionUI')
  request.r(i3349[35], i3349[36], 0, i3348, 'wrongChoiceUI')
  request.r(i3349[37], i3349[38], 0, i3348, 'winChoiceUI')
  request.r(i3349[39], i3349[40], 0, i3348, 'winExtraObj1')
  request.r(i3349[41], i3349[42], 0, i3348, 'winExtraObj2')
  request.r(i3349[43], i3349[44], 0, i3348, 'iconListUI')
  request.r(i3349[45], i3349[46], 0, i3348, 'refereeAnimator')
  i3348.refereeLookAroundTrigger = i3349[47]
  i3348.useAutoTimers = !!i3349[48]
  i3348.tackleHideDelay = i3349[49]
  i3348.impactCloudDelay = i3349[50]
  i3348.messiTackleHideDelay = i3349[51]
  i3348.messiImpactCloudDelay = i3349[52]
  i3348.haalandHurtDelay = i3349[53]
  i3348.cloudDuration = i3349[54]
  i3348.refereeAnimDelay = i3349[55]
  i3348.nextActionDelay = i3349[56]
  i3348.dribbleToTackleDelay = i3349[57]
  i3348.tackleSoundDelay = i3349[58]
  request.r(i3349[59], i3349[60], 0, i3348, 'ronaldoChatBubble')
  request.r(i3349[61], i3349[62], 0, i3348, 'messiChatBubble')
  request.r(i3349[63], i3349[64], 0, i3348, 'viniChatBubble')
  request.r(i3349[65], i3349[66], 0, i3348, 'mbappeChatBubble')
  request.r(i3349[67], i3349[68], 0, i3348, 'ronaldoSpriteRenderer')
  request.r(i3349[69], i3349[70], 0, i3348, 'ronaldoSadSprite')
  request.r(i3349[71], i3349[72], 0, i3348, 'ronaldoEvilLaughSprite')
  request.r(i3349[73], i3349[74], 0, i3348, 'messiSpriteRenderer')
  request.r(i3349[75], i3349[76], 0, i3348, 'messiSadSprite')
  request.r(i3349[77], i3349[78], 0, i3348, 'viniSpriteRenderer')
  request.r(i3349[79], i3349[80], 0, i3348, 'viniSadSprite')
  request.r(i3349[81], i3349[82], 0, i3348, 'mbappeSpriteRenderer')
  request.r(i3349[83], i3349[84], 0, i3348, 'mbappeSadSprite')
  request.r(i3349[85], i3349[86], 0, i3348, 'refereeSpriteRenderer')
  request.r(i3349[87], i3349[88], 0, i3348, 'refereeReactionSprite')
  request.r(i3349[89], i3349[90], 0, i3348, 'iconListAnimator')
  request.r(i3349[91], i3349[92], 0, i3348, 'postWinAudioClip')
  var i3351 = i3349[93]
  var i3350 = new (System.Collections.Generic.List$1(Bridge.ns('HaalandGame.PostWinTimedObject')))
  for(var i = 0; i < i3351.length; i += 1) {
    i3350.add(request.d('HaalandGame.PostWinTimedObject', i3351[i + 0]));
  }
  i3348.postWinTimeline = i3350
  i3348.onPostWinTriggered = request.d('UnityEngine.Events.UnityEvent', i3349[94], i3348.onPostWinTriggered)
  i3348.postWinDelay = i3349[95]
  var i3353 = i3349[96]
  var i3352 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i3353.length; i += 2) {
  request.r(i3353[i + 0], i3353[i + 1], 1, i3352, '')
  }
  i3348.postWinObjects = i3352
  i3348.currentLevel = i3349[97]
  return i3348
}

Deserializers["HaalandGame.PostWinTimedObject"] = function (request, data, root) {
  var i3356 = root || request.c( 'HaalandGame.PostWinTimedObject' )
  var i3357 = data
  i3356.label = i3357[0]
  request.r(i3357[1], i3357[2], 0, i3356, 'targetObject')
  i3356.enableDelay = i3357[3]
  i3356.disableDelay = i3357[4]
  request.r(i3357[5], i3357[6], 0, i3356, 'soundClip')
  i3356.onEnabled = request.d('UnityEngine.Events.UnityEvent', i3357[7], i3356.onEnabled)
  i3356.onDisabled = request.d('UnityEngine.Events.UnityEvent', i3357[8], i3356.onDisabled)
  return i3356
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i3358 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i3359 = data
  i3358.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i3359[0], i3358.m_PersistentCalls)
  return i3358
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i3360 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i3361 = data
  var i3363 = i3361[0]
  var i3362 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i3363.length; i += 1) {
    i3362.add(request.d('UnityEngine.Events.PersistentCall', i3363[i + 0]));
  }
  i3360.m_Calls = i3362
  return i3360
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i3366 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i3367 = data
  request.r(i3367[0], i3367[1], 0, i3366, 'm_Target')
  i3366.m_TargetAssemblyTypeName = i3367[2]
  i3366.m_MethodName = i3367[3]
  i3366.m_Mode = i3367[4]
  i3366.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i3367[5], i3366.m_Arguments)
  i3366.m_CallState = i3367[6]
  return i3366
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i3368 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i3369 = data
  request.r(i3369[0], i3369[1], 0, i3368, 'm_ObjectArgument')
  i3368.m_ObjectArgumentAssemblyTypeName = i3369[2]
  i3368.m_IntArgument = i3369[3]
  i3368.m_FloatArgument = i3369[4]
  i3368.m_StringArgument = i3369[5]
  i3368.m_BoolArgument = !!i3369[6]
  return i3368
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i3372 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i3373 = data
  i3372.pivot = new pc.Vec2( i3373[0], i3373[1] )
  i3372.anchorMin = new pc.Vec2( i3373[2], i3373[3] )
  i3372.anchorMax = new pc.Vec2( i3373[4], i3373[5] )
  i3372.sizeDelta = new pc.Vec2( i3373[6], i3373[7] )
  i3372.anchoredPosition3D = new pc.Vec3( i3373[8], i3373[9], i3373[10] )
  i3372.rotation = new pc.Quat(i3373[11], i3373[12], i3373[13], i3373[14])
  i3372.scale = new pc.Vec3( i3373[15], i3373[16], i3373[17] )
  return i3372
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i3374 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i3375 = data
  i3374.planeDistance = i3375[0]
  i3374.referencePixelsPerUnit = i3375[1]
  i3374.isFallbackOverlay = !!i3375[2]
  i3374.renderMode = i3375[3]
  i3374.renderOrder = i3375[4]
  i3374.sortingLayerName = i3375[5]
  i3374.sortingOrder = i3375[6]
  i3374.scaleFactor = i3375[7]
  request.r(i3375[8], i3375[9], 0, i3374, 'worldCamera')
  i3374.overrideSorting = !!i3375[10]
  i3374.pixelPerfect = !!i3375[11]
  i3374.targetDisplay = i3375[12]
  i3374.overridePixelPerfect = !!i3375[13]
  i3374.enabled = !!i3375[14]
  return i3374
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i3376 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i3377 = data
  i3376.m_UiScaleMode = i3377[0]
  i3376.m_ReferencePixelsPerUnit = i3377[1]
  i3376.m_ScaleFactor = i3377[2]
  i3376.m_ReferenceResolution = new pc.Vec2( i3377[3], i3377[4] )
  i3376.m_ScreenMatchMode = i3377[5]
  i3376.m_MatchWidthOrHeight = i3377[6]
  i3376.m_PhysicalUnit = i3377[7]
  i3376.m_FallbackScreenDPI = i3377[8]
  i3376.m_DefaultSpriteDPI = i3377[9]
  i3376.m_DynamicPixelsPerUnit = i3377[10]
  i3376.m_PresetInfoIsWorld = !!i3377[11]
  return i3376
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i3378 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i3379 = data
  i3378.m_IgnoreReversedGraphics = !!i3379[0]
  i3378.m_BlockingObjects = i3379[1]
  i3378.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i3379[2] )
  return i3378
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i3380 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i3381 = data
  i3380.cullTransparentMesh = !!i3381[0]
  return i3380
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i3382 = root || request.c( 'UnityEngine.UI.Image' )
  var i3383 = data
  request.r(i3383[0], i3383[1], 0, i3382, 'm_Sprite')
  i3382.m_Type = i3383[2]
  i3382.m_PreserveAspect = !!i3383[3]
  i3382.m_FillCenter = !!i3383[4]
  i3382.m_FillMethod = i3383[5]
  i3382.m_FillAmount = i3383[6]
  i3382.m_FillClockwise = !!i3383[7]
  i3382.m_FillOrigin = i3383[8]
  i3382.m_UseSpriteMesh = !!i3383[9]
  i3382.m_PixelsPerUnitMultiplier = i3383[10]
  request.r(i3383[11], i3383[12], 0, i3382, 'm_Material')
  i3382.m_Maskable = !!i3383[13]
  i3382.m_Color = new pc.Color(i3383[14], i3383[15], i3383[16], i3383[17])
  i3382.m_RaycastTarget = !!i3383[18]
  i3382.m_RaycastPadding = new pc.Vec4( i3383[19], i3383[20], i3383[21], i3383[22] )
  return i3382
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i3384 = root || request.c( 'UnityEngine.UI.Button' )
  var i3385 = data
  i3384.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i3385[0], i3384.m_OnClick)
  i3384.m_Navigation = request.d('UnityEngine.UI.Navigation', i3385[1], i3384.m_Navigation)
  i3384.m_Transition = i3385[2]
  i3384.m_Colors = request.d('UnityEngine.UI.ColorBlock', i3385[3], i3384.m_Colors)
  i3384.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i3385[4], i3384.m_SpriteState)
  i3384.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i3385[5], i3384.m_AnimationTriggers)
  i3384.m_Interactable = !!i3385[6]
  request.r(i3385[7], i3385[8], 0, i3384, 'm_TargetGraphic')
  return i3384
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i3386 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i3387 = data
  i3386.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i3387[0], i3386.m_PersistentCalls)
  return i3386
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i3388 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i3389 = data
  i3388.m_Mode = i3389[0]
  i3388.m_WrapAround = !!i3389[1]
  request.r(i3389[2], i3389[3], 0, i3388, 'm_SelectOnUp')
  request.r(i3389[4], i3389[5], 0, i3388, 'm_SelectOnDown')
  request.r(i3389[6], i3389[7], 0, i3388, 'm_SelectOnLeft')
  request.r(i3389[8], i3389[9], 0, i3388, 'm_SelectOnRight')
  return i3388
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i3390 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i3391 = data
  i3390.m_NormalColor = new pc.Color(i3391[0], i3391[1], i3391[2], i3391[3])
  i3390.m_HighlightedColor = new pc.Color(i3391[4], i3391[5], i3391[6], i3391[7])
  i3390.m_PressedColor = new pc.Color(i3391[8], i3391[9], i3391[10], i3391[11])
  i3390.m_SelectedColor = new pc.Color(i3391[12], i3391[13], i3391[14], i3391[15])
  i3390.m_DisabledColor = new pc.Color(i3391[16], i3391[17], i3391[18], i3391[19])
  i3390.m_ColorMultiplier = i3391[20]
  i3390.m_FadeDuration = i3391[21]
  return i3390
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i3392 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i3393 = data
  request.r(i3393[0], i3393[1], 0, i3392, 'm_HighlightedSprite')
  request.r(i3393[2], i3393[3], 0, i3392, 'm_PressedSprite')
  request.r(i3393[4], i3393[5], 0, i3392, 'm_SelectedSprite')
  request.r(i3393[6], i3393[7], 0, i3392, 'm_DisabledSprite')
  return i3392
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i3394 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i3395 = data
  i3394.m_NormalTrigger = i3395[0]
  i3394.m_HighlightedTrigger = i3395[1]
  i3394.m_PressedTrigger = i3395[2]
  i3394.m_SelectedTrigger = i3395[3]
  i3394.m_DisabledTrigger = i3395[4]
  return i3394
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i3396 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i3397 = data
  request.r(i3397[0], i3397[1], 0, i3396, 'animatorController')
  request.r(i3397[2], i3397[3], 0, i3396, 'avatar')
  i3396.updateMode = i3397[4]
  i3396.hasTransformHierarchy = !!i3397[5]
  i3396.applyRootMotion = !!i3397[6]
  var i3399 = i3397[7]
  var i3398 = []
  for(var i = 0; i < i3399.length; i += 2) {
  request.r(i3399[i + 0], i3399[i + 1], 2, i3398, '')
  }
  i3396.humanBones = i3398
  i3396.enabled = !!i3397[8]
  return i3396
}

Deserializers["HaalandGame.IconListAnimator"] = function (request, data, root) {
  var i3402 = root || request.c( 'HaalandGame.IconListAnimator' )
  var i3403 = data
  var i3405 = i3403[0]
  var i3404 = []
  for(var i = 0; i < i3405.length; i += 2) {
  request.r(i3405[i + 0], i3405[i + 1], 2, i3404, '')
  }
  i3402.iconTransforms = i3404
  i3402.initialDelay = i3403[1]
  i3402.targetScaleMult = i3403[2]
  i3402.pulseDuration = i3403[3]
  i3402.delayBetweenIcons = i3403[4]
  i3402.delayBetweenLoops = i3403[5]
  return i3402
}

Deserializers["HideOnFirstClick"] = function (request, data, root) {
  var i3408 = root || request.c( 'HideOnFirstClick' )
  var i3409 = data
  request.r(i3409[0], i3409[1], 0, i3408, 'objectToHide')
  return i3408
}

Deserializers["ScreenHeightPositionAnchor"] = function (request, data, root) {
  var i3410 = root || request.c( 'ScreenHeightPositionAnchor' )
  var i3411 = data
  request.r(i3411[0], i3411[1], 0, i3410, 'anchorPoint')
  request.r(i3411[2], i3411[3], 0, i3410, 'targetCamera')
  i3410.viewportYRatio = i3411[4]
  i3410.alignOnStart = !!i3411[5]
  i3410.alignOnEnable = !!i3411[6]
  i3410.realignOnScreenSizeChanged = !!i3411[7]
  i3410.drawGizmos = !!i3411[8]
  i3410.targetLineColor = new pc.Color(i3411[9], i3411[10], i3411[11], i3411[12])
  i3410.anchorColor = new pc.Color(i3411[13], i3411[14], i3411[15], i3411[16])
  return i3410
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i3412 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i3413 = data
  i3412.center = new pc.Vec3( i3413[0], i3413[1], i3413[2] )
  i3412.size = new pc.Vec3( i3413[3], i3413[4], i3413[5] )
  i3412.enabled = !!i3413[6]
  i3412.isTrigger = !!i3413[7]
  request.r(i3413[8], i3413[9], 0, i3412, 'material')
  return i3412
}

Deserializers["HaalandGame.PlayerSelectable"] = function (request, data, root) {
  var i3414 = root || request.c( 'HaalandGame.PlayerSelectable' )
  var i3415 = data
  i3414.playerType = i3415[0]
  i3414.targetLayerName = i3415[1]
  return i3414
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i3416 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i3417 = data
  i3416.color = new pc.Color(i3417[0], i3417[1], i3417[2], i3417[3])
  request.r(i3417[4], i3417[5], 0, i3416, 'sprite')
  i3416.flipX = !!i3417[6]
  i3416.flipY = !!i3417[7]
  i3416.drawMode = i3417[8]
  i3416.size = new pc.Vec2( i3417[9], i3417[10] )
  i3416.tileMode = i3417[11]
  i3416.adaptiveModeThreshold = i3417[12]
  i3416.maskInteraction = i3417[13]
  i3416.spriteSortPoint = i3417[14]
  i3416.enabled = !!i3417[15]
  request.r(i3417[16], i3417[17], 0, i3416, 'sharedMaterial')
  var i3419 = i3417[18]
  var i3418 = []
  for(var i = 0; i < i3419.length; i += 2) {
  request.r(i3419[i + 0], i3419[i + 1], 2, i3418, '')
  }
  i3416.sharedMaterials = i3418
  i3416.receiveShadows = !!i3417[19]
  i3416.shadowCastingMode = i3417[20]
  i3416.sortingLayerID = i3417[21]
  i3416.sortingOrder = i3417[22]
  i3416.lightmapIndex = i3417[23]
  i3416.lightmapSceneIndex = i3417[24]
  i3416.lightmapScaleOffset = new pc.Vec4( i3417[25], i3417[26], i3417[27], i3417[28] )
  i3416.lightProbeUsage = i3417[29]
  i3416.reflectionProbeUsage = i3417[30]
  return i3416
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i3420 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i3421 = data
  request.r(i3421[0], i3421[1], 0, i3420, 'm_FirstSelected')
  i3420.m_sendNavigationEvents = !!i3421[2]
  i3420.m_DragThreshold = i3421[3]
  return i3420
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i3422 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i3423 = data
  i3422.m_HorizontalAxis = i3423[0]
  i3422.m_VerticalAxis = i3423[1]
  i3422.m_SubmitButton = i3423[2]
  i3422.m_CancelButton = i3423[3]
  i3422.m_InputActionsPerSecond = i3423[4]
  i3422.m_RepeatDelay = i3423[5]
  i3422.m_ForceModuleActive = !!i3423[6]
  i3422.m_SendPointerHoverToParent = !!i3423[7]
  return i3422
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i3424 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i3425 = data
  i3424.ambientIntensity = i3425[0]
  i3424.reflectionIntensity = i3425[1]
  i3424.ambientMode = i3425[2]
  i3424.ambientLight = new pc.Color(i3425[3], i3425[4], i3425[5], i3425[6])
  i3424.ambientSkyColor = new pc.Color(i3425[7], i3425[8], i3425[9], i3425[10])
  i3424.ambientGroundColor = new pc.Color(i3425[11], i3425[12], i3425[13], i3425[14])
  i3424.ambientEquatorColor = new pc.Color(i3425[15], i3425[16], i3425[17], i3425[18])
  i3424.fogColor = new pc.Color(i3425[19], i3425[20], i3425[21], i3425[22])
  i3424.fogEndDistance = i3425[23]
  i3424.fogStartDistance = i3425[24]
  i3424.fogDensity = i3425[25]
  i3424.fog = !!i3425[26]
  request.r(i3425[27], i3425[28], 0, i3424, 'skybox')
  i3424.fogMode = i3425[29]
  var i3427 = i3425[30]
  var i3426 = []
  for(var i = 0; i < i3427.length; i += 1) {
    i3426.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i3427[i + 0]) );
  }
  i3424.lightmaps = i3426
  i3424.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i3425[31], i3424.lightProbes)
  i3424.lightmapsMode = i3425[32]
  i3424.mixedBakeMode = i3425[33]
  i3424.environmentLightingMode = i3425[34]
  i3424.ambientProbe = new pc.SphericalHarmonicsL2(i3425[35])
  i3424.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i3425[36])
  i3424.useReferenceAmbientProbe = !!i3425[37]
  request.r(i3425[38], i3425[39], 0, i3424, 'customReflection')
  request.r(i3425[40], i3425[41], 0, i3424, 'defaultReflection')
  i3424.defaultReflectionMode = i3425[42]
  i3424.defaultReflectionResolution = i3425[43]
  i3424.sunLightObjectId = i3425[44]
  i3424.pixelLightCount = i3425[45]
  i3424.defaultReflectionHDR = !!i3425[46]
  i3424.hasLightDataAsset = !!i3425[47]
  i3424.hasManualGenerate = !!i3425[48]
  return i3424
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i3430 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i3431 = data
  request.r(i3431[0], i3431[1], 0, i3430, 'lightmapColor')
  request.r(i3431[2], i3431[3], 0, i3430, 'lightmapDirection')
  request.r(i3431[4], i3431[5], 0, i3430, 'shadowMask')
  return i3430
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i3432 = root || new UnityEngine.LightProbes()
  var i3433 = data
  return i3432
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i3440 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i3441 = data
  var i3443 = i3441[0]
  var i3442 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i3443.length; i += 1) {
    i3442.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i3443[i + 0]));
  }
  i3440.ShaderCompilationErrors = i3442
  i3440.name = i3441[1]
  i3440.guid = i3441[2]
  var i3445 = i3441[3]
  var i3444 = []
  for(var i = 0; i < i3445.length; i += 1) {
    i3444.push( i3445[i + 0] );
  }
  i3440.shaderDefinedKeywords = i3444
  var i3447 = i3441[4]
  var i3446 = []
  for(var i = 0; i < i3447.length; i += 1) {
    i3446.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i3447[i + 0]) );
  }
  i3440.passes = i3446
  var i3449 = i3441[5]
  var i3448 = []
  for(var i = 0; i < i3449.length; i += 1) {
    i3448.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i3449[i + 0]) );
  }
  i3440.usePasses = i3448
  var i3451 = i3441[6]
  var i3450 = []
  for(var i = 0; i < i3451.length; i += 1) {
    i3450.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i3451[i + 0]) );
  }
  i3440.defaultParameterValues = i3450
  request.r(i3441[7], i3441[8], 0, i3440, 'unityFallbackShader')
  i3440.readDepth = !!i3441[9]
  i3440.hasDepthOnlyPass = !!i3441[10]
  i3440.isCreatedByShaderGraph = !!i3441[11]
  i3440.disableBatching = !!i3441[12]
  i3440.compiled = !!i3441[13]
  return i3440
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i3454 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i3455 = data
  i3454.shaderName = i3455[0]
  i3454.errorMessage = i3455[1]
  return i3454
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i3460 = root || new pc.UnityShaderPass()
  var i3461 = data
  i3460.id = i3461[0]
  i3460.subShaderIndex = i3461[1]
  i3460.name = i3461[2]
  i3460.passType = i3461[3]
  i3460.grabPassTextureName = i3461[4]
  i3460.usePass = !!i3461[5]
  i3460.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3461[6], i3460.zTest)
  i3460.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3461[7], i3460.zWrite)
  i3460.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3461[8], i3460.culling)
  i3460.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i3461[9], i3460.blending)
  i3460.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i3461[10], i3460.alphaBlending)
  i3460.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3461[11], i3460.colorWriteMask)
  i3460.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3461[12], i3460.offsetUnits)
  i3460.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3461[13], i3460.offsetFactor)
  i3460.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3461[14], i3460.stencilRef)
  i3460.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3461[15], i3460.stencilReadMask)
  i3460.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3461[16], i3460.stencilWriteMask)
  i3460.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3461[17], i3460.stencilOp)
  i3460.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3461[18], i3460.stencilOpFront)
  i3460.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3461[19], i3460.stencilOpBack)
  var i3463 = i3461[20]
  var i3462 = []
  for(var i = 0; i < i3463.length; i += 1) {
    i3462.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i3463[i + 0]) );
  }
  i3460.tags = i3462
  var i3465 = i3461[21]
  var i3464 = []
  for(var i = 0; i < i3465.length; i += 1) {
    i3464.push( i3465[i + 0] );
  }
  i3460.passDefinedKeywords = i3464
  var i3467 = i3461[22]
  var i3466 = []
  for(var i = 0; i < i3467.length; i += 1) {
    i3466.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i3467[i + 0]) );
  }
  i3460.passDefinedKeywordGroups = i3466
  var i3469 = i3461[23]
  var i3468 = []
  for(var i = 0; i < i3469.length; i += 1) {
    i3468.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i3469[i + 0]) );
  }
  i3460.variants = i3468
  var i3471 = i3461[24]
  var i3470 = []
  for(var i = 0; i < i3471.length; i += 1) {
    i3470.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i3471[i + 0]) );
  }
  i3460.excludedVariants = i3470
  i3460.hasDepthReader = !!i3461[25]
  return i3460
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i3472 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i3473 = data
  i3472.val = i3473[0]
  i3472.name = i3473[1]
  return i3472
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i3474 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i3475 = data
  i3474.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3475[0], i3474.src)
  i3474.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3475[1], i3474.dst)
  i3474.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3475[2], i3474.op)
  return i3474
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i3476 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i3477 = data
  i3476.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3477[0], i3476.pass)
  i3476.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3477[1], i3476.fail)
  i3476.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3477[2], i3476.zFail)
  i3476.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3477[3], i3476.comp)
  return i3476
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i3480 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i3481 = data
  i3480.name = i3481[0]
  i3480.value = i3481[1]
  return i3480
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i3484 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i3485 = data
  var i3487 = i3485[0]
  var i3486 = []
  for(var i = 0; i < i3487.length; i += 1) {
    i3486.push( i3487[i + 0] );
  }
  i3484.keywords = i3486
  i3484.hasDiscard = !!i3485[1]
  return i3484
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i3490 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i3491 = data
  i3490.passId = i3491[0]
  i3490.subShaderIndex = i3491[1]
  var i3493 = i3491[2]
  var i3492 = []
  for(var i = 0; i < i3493.length; i += 1) {
    i3492.push( i3493[i + 0] );
  }
  i3490.keywords = i3492
  i3490.vertexProgram = i3491[3]
  i3490.fragmentProgram = i3491[4]
  i3490.exportedForWebGl2 = !!i3491[5]
  i3490.readDepth = !!i3491[6]
  return i3490
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i3496 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i3497 = data
  request.r(i3497[0], i3497[1], 0, i3496, 'shader')
  i3496.pass = i3497[2]
  return i3496
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i3500 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i3501 = data
  i3500.name = i3501[0]
  i3500.type = i3501[1]
  i3500.value = new pc.Vec4( i3501[2], i3501[3], i3501[4], i3501[5] )
  i3500.textureValue = i3501[6]
  i3500.shaderPropertyFlag = i3501[7]
  return i3500
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i3502 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i3503 = data
  i3502.name = i3503[0]
  request.r(i3503[1], i3503[2], 0, i3502, 'texture')
  i3502.aabb = i3503[3]
  i3502.vertices = i3503[4]
  i3502.triangles = i3503[5]
  i3502.textureRect = UnityEngine.Rect.MinMaxRect(i3503[6], i3503[7], i3503[8], i3503[9])
  i3502.packedRect = UnityEngine.Rect.MinMaxRect(i3503[10], i3503[11], i3503[12], i3503[13])
  i3502.border = new pc.Vec4( i3503[14], i3503[15], i3503[16], i3503[17] )
  i3502.transparency = i3503[18]
  i3502.bounds = i3503[19]
  i3502.pixelsPerUnit = i3503[20]
  i3502.textureWidth = i3503[21]
  i3502.textureHeight = i3503[22]
  i3502.nativeSize = new pc.Vec2( i3503[23], i3503[24] )
  i3502.pivot = new pc.Vec2( i3503[25], i3503[26] )
  i3502.textureRectOffset = new pc.Vec2( i3503[27], i3503[28] )
  return i3502
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i3504 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i3505 = data
  i3504.name = i3505[0]
  return i3504
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i3506 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i3507 = data
  i3506.name = i3507[0]
  i3506.wrapMode = i3507[1]
  i3506.isLooping = !!i3507[2]
  i3506.length = i3507[3]
  var i3509 = i3507[4]
  var i3508 = []
  for(var i = 0; i < i3509.length; i += 1) {
    i3508.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i3509[i + 0]) );
  }
  i3506.curves = i3508
  var i3511 = i3507[5]
  var i3510 = []
  for(var i = 0; i < i3511.length; i += 1) {
    i3510.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i3511[i + 0]) );
  }
  i3506.events = i3510
  i3506.halfPrecision = !!i3507[6]
  i3506._frameRate = i3507[7]
  i3506.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i3507[8], i3506.localBounds)
  i3506.hasMuscleCurves = !!i3507[9]
  var i3513 = i3507[10]
  var i3512 = []
  for(var i = 0; i < i3513.length; i += 1) {
    i3512.push( i3513[i + 0] );
  }
  i3506.clipMuscleConstant = i3512
  i3506.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i3507[11], i3506.clipBindingConstant)
  return i3506
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i3516 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i3517 = data
  i3516.path = i3517[0]
  i3516.hash = i3517[1]
  i3516.componentType = i3517[2]
  i3516.property = i3517[3]
  i3516.keys = i3517[4]
  var i3519 = i3517[5]
  var i3518 = []
  for(var i = 0; i < i3519.length; i += 1) {
    i3518.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i3519[i + 0]) );
  }
  i3516.objectReferenceKeys = i3518
  return i3516
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i3522 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i3523 = data
  i3522.time = i3523[0]
  request.r(i3523[1], i3523[2], 0, i3522, 'value')
  return i3522
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i3526 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i3527 = data
  i3526.functionName = i3527[0]
  i3526.floatParameter = i3527[1]
  i3526.intParameter = i3527[2]
  i3526.stringParameter = i3527[3]
  request.r(i3527[4], i3527[5], 0, i3526, 'objectReferenceParameter')
  i3526.time = i3527[6]
  return i3526
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i3528 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i3529 = data
  i3528.center = new pc.Vec3( i3529[0], i3529[1], i3529[2] )
  i3528.extends = new pc.Vec3( i3529[3], i3529[4], i3529[5] )
  return i3528
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i3532 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i3533 = data
  var i3535 = i3533[0]
  var i3534 = []
  for(var i = 0; i < i3535.length; i += 1) {
    i3534.push( i3535[i + 0] );
  }
  i3532.genericBindings = i3534
  var i3537 = i3533[1]
  var i3536 = []
  for(var i = 0; i < i3537.length; i += 1) {
    i3536.push( i3537[i + 0] );
  }
  i3532.pptrCurveMapping = i3536
  return i3532
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i3538 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i3539 = data
  i3538.name = i3539[0]
  i3538.ascent = i3539[1]
  i3538.originalLineHeight = i3539[2]
  i3538.fontSize = i3539[3]
  var i3541 = i3539[4]
  var i3540 = []
  for(var i = 0; i < i3541.length; i += 1) {
    i3540.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i3541[i + 0]) );
  }
  i3538.characterInfo = i3540
  request.r(i3539[5], i3539[6], 0, i3538, 'texture')
  i3538.originalFontSize = i3539[7]
  return i3538
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i3544 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i3545 = data
  i3544.index = i3545[0]
  i3544.advance = i3545[1]
  i3544.bearing = i3545[2]
  i3544.glyphWidth = i3545[3]
  i3544.glyphHeight = i3545[4]
  i3544.minX = i3545[5]
  i3544.maxX = i3545[6]
  i3544.minY = i3545[7]
  i3544.maxY = i3545[8]
  i3544.uvBottomLeftX = i3545[9]
  i3544.uvBottomLeftY = i3545[10]
  i3544.uvBottomRightX = i3545[11]
  i3544.uvBottomRightY = i3545[12]
  i3544.uvTopLeftX = i3545[13]
  i3544.uvTopLeftY = i3545[14]
  i3544.uvTopRightX = i3545[15]
  i3544.uvTopRightY = i3545[16]
  return i3544
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i3546 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i3547 = data
  i3546.name = i3547[0]
  var i3549 = i3547[1]
  var i3548 = []
  for(var i = 0; i < i3549.length; i += 1) {
    i3548.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i3549[i + 0]) );
  }
  i3546.layers = i3548
  var i3551 = i3547[2]
  var i3550 = []
  for(var i = 0; i < i3551.length; i += 1) {
    i3550.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i3551[i + 0]) );
  }
  i3546.parameters = i3550
  i3546.animationClips = i3547[3]
  i3546.avatarUnsupported = i3547[4]
  return i3546
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i3554 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i3555 = data
  i3554.name = i3555[0]
  i3554.defaultWeight = i3555[1]
  i3554.blendingMode = i3555[2]
  i3554.avatarMask = i3555[3]
  i3554.syncedLayerIndex = i3555[4]
  i3554.syncedLayerAffectsTiming = !!i3555[5]
  i3554.syncedLayers = i3555[6]
  i3554.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i3555[7], i3554.stateMachine)
  return i3554
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i3556 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i3557 = data
  i3556.id = i3557[0]
  i3556.name = i3557[1]
  i3556.path = i3557[2]
  var i3559 = i3557[3]
  var i3558 = []
  for(var i = 0; i < i3559.length; i += 1) {
    i3558.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i3559[i + 0]) );
  }
  i3556.states = i3558
  var i3561 = i3557[4]
  var i3560 = []
  for(var i = 0; i < i3561.length; i += 1) {
    i3560.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i3561[i + 0]) );
  }
  i3556.machines = i3560
  var i3563 = i3557[5]
  var i3562 = []
  for(var i = 0; i < i3563.length; i += 1) {
    i3562.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i3563[i + 0]) );
  }
  i3556.entryStateTransitions = i3562
  var i3565 = i3557[6]
  var i3564 = []
  for(var i = 0; i < i3565.length; i += 1) {
    i3564.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i3565[i + 0]) );
  }
  i3556.exitStateTransitions = i3564
  var i3567 = i3557[7]
  var i3566 = []
  for(var i = 0; i < i3567.length; i += 1) {
    i3566.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i3567[i + 0]) );
  }
  i3556.anyStateTransitions = i3566
  i3556.defaultStateId = i3557[8]
  return i3556
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i3570 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i3571 = data
  i3570.id = i3571[0]
  i3570.name = i3571[1]
  i3570.cycleOffset = i3571[2]
  i3570.cycleOffsetParameter = i3571[3]
  i3570.cycleOffsetParameterActive = !!i3571[4]
  i3570.mirror = !!i3571[5]
  i3570.mirrorParameter = i3571[6]
  i3570.mirrorParameterActive = !!i3571[7]
  i3570.motionId = i3571[8]
  i3570.nameHash = i3571[9]
  i3570.fullPathHash = i3571[10]
  i3570.speed = i3571[11]
  i3570.speedParameter = i3571[12]
  i3570.speedParameterActive = !!i3571[13]
  i3570.tag = i3571[14]
  i3570.tagHash = i3571[15]
  i3570.writeDefaultValues = !!i3571[16]
  var i3573 = i3571[17]
  var i3572 = []
  for(var i = 0; i < i3573.length; i += 2) {
  request.r(i3573[i + 0], i3573[i + 1], 2, i3572, '')
  }
  i3570.behaviours = i3572
  var i3575 = i3571[18]
  var i3574 = []
  for(var i = 0; i < i3575.length; i += 1) {
    i3574.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i3575[i + 0]) );
  }
  i3570.transitions = i3574
  return i3570
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i3580 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i3581 = data
  i3580.fullPath = i3581[0]
  i3580.canTransitionToSelf = !!i3581[1]
  i3580.duration = i3581[2]
  i3580.exitTime = i3581[3]
  i3580.hasExitTime = !!i3581[4]
  i3580.hasFixedDuration = !!i3581[5]
  i3580.interruptionSource = i3581[6]
  i3580.offset = i3581[7]
  i3580.orderedInterruption = !!i3581[8]
  i3580.destinationStateId = i3581[9]
  i3580.isExit = !!i3581[10]
  i3580.mute = !!i3581[11]
  i3580.solo = !!i3581[12]
  var i3583 = i3581[13]
  var i3582 = []
  for(var i = 0; i < i3583.length; i += 1) {
    i3582.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i3583[i + 0]) );
  }
  i3580.conditions = i3582
  return i3580
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i3588 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i3589 = data
  i3588.destinationStateId = i3589[0]
  i3588.isExit = !!i3589[1]
  i3588.mute = !!i3589[2]
  i3588.solo = !!i3589[3]
  var i3591 = i3589[4]
  var i3590 = []
  for(var i = 0; i < i3591.length; i += 1) {
    i3590.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i3591[i + 0]) );
  }
  i3588.conditions = i3590
  return i3588
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i3594 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i3595 = data
  i3594.mode = i3595[0]
  i3594.parameter = i3595[1]
  i3594.threshold = i3595[2]
  return i3594
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i3598 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i3599 = data
  i3598.defaultBool = !!i3599[0]
  i3598.defaultFloat = i3599[1]
  i3598.defaultInt = i3599[2]
  i3598.name = i3599[3]
  i3598.nameHash = i3599[4]
  i3598.type = i3599[5]
  return i3598
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i3600 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i3601 = data
  i3600.name = i3601[0]
  i3600.bytes64 = i3601[1]
  i3600.data = i3601[2]
  return i3600
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i3602 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i3603 = data
  i3602.useSafeMode = !!i3603[0]
  i3602.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i3603[1], i3602.safeModeOptions)
  i3602.timeScale = i3603[2]
  i3602.unscaledTimeScale = i3603[3]
  i3602.useSmoothDeltaTime = !!i3603[4]
  i3602.maxSmoothUnscaledTime = i3603[5]
  i3602.rewindCallbackMode = i3603[6]
  i3602.showUnityEditorReport = !!i3603[7]
  i3602.logBehaviour = i3603[8]
  i3602.drawGizmos = !!i3603[9]
  i3602.defaultRecyclable = !!i3603[10]
  i3602.defaultAutoPlay = i3603[11]
  i3602.defaultUpdateType = i3603[12]
  i3602.defaultTimeScaleIndependent = !!i3603[13]
  i3602.defaultEaseType = i3603[14]
  i3602.defaultEaseOvershootOrAmplitude = i3603[15]
  i3602.defaultEasePeriod = i3603[16]
  i3602.defaultAutoKill = !!i3603[17]
  i3602.defaultLoopType = i3603[18]
  i3602.debugMode = !!i3603[19]
  i3602.debugStoreTargetId = !!i3603[20]
  i3602.showPreviewPanel = !!i3603[21]
  i3602.storeSettingsLocation = i3603[22]
  i3602.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i3603[23], i3602.modules)
  i3602.createASMDEF = !!i3603[24]
  i3602.showPlayingTweens = !!i3603[25]
  i3602.showPausedTweens = !!i3603[26]
  return i3602
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i3604 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i3605 = data
  i3604.logBehaviour = i3605[0]
  i3604.nestedTweenFailureBehaviour = i3605[1]
  return i3604
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i3606 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i3607 = data
  i3606.showPanel = !!i3607[0]
  i3606.audioEnabled = !!i3607[1]
  i3606.physicsEnabled = !!i3607[2]
  i3606.physics2DEnabled = !!i3607[3]
  i3606.spriteEnabled = !!i3607[4]
  i3606.uiEnabled = !!i3607[5]
  i3606.uiToolkitEnabled = !!i3607[6]
  i3606.textMeshProEnabled = !!i3607[7]
  i3606.tk2DEnabled = !!i3607[8]
  i3606.deAudioEnabled = !!i3607[9]
  i3606.deUnityExtendedEnabled = !!i3607[10]
  i3606.epoOutlineEnabled = !!i3607[11]
  return i3606
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i3608 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i3609 = data
  i3608.normalStyle = i3609[0]
  i3608.normalSpacingOffset = i3609[1]
  i3608.boldStyle = i3609[2]
  i3608.boldSpacing = i3609[3]
  i3608.italicStyle = i3609[4]
  i3608.tabSize = i3609[5]
  request.r(i3609[6], i3609[7], 0, i3608, 'atlas')
  i3608.m_SourceFontFileGUID = i3609[8]
  i3608.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i3609[9], i3608.m_CreationSettings)
  request.r(i3609[10], i3609[11], 0, i3608, 'm_SourceFontFile')
  i3608.m_SourceFontFilePath = i3609[12]
  i3608.m_AtlasPopulationMode = i3609[13]
  i3608.InternalDynamicOS = !!i3609[14]
  var i3611 = i3609[15]
  var i3610 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i3611.length; i += 1) {
    i3610.add(request.d('UnityEngine.TextCore.Glyph', i3611[i + 0]));
  }
  i3608.m_GlyphTable = i3610
  var i3613 = i3609[16]
  var i3612 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i3613.length; i += 1) {
    i3612.add(request.d('TMPro.TMP_Character', i3613[i + 0]));
  }
  i3608.m_CharacterTable = i3612
  var i3615 = i3609[17]
  var i3614 = []
  for(var i = 0; i < i3615.length; i += 2) {
  request.r(i3615[i + 0], i3615[i + 1], 2, i3614, '')
  }
  i3608.m_AtlasTextures = i3614
  i3608.m_AtlasTextureIndex = i3609[18]
  i3608.m_IsMultiAtlasTexturesEnabled = !!i3609[19]
  i3608.m_GetFontFeatures = !!i3609[20]
  i3608.m_ClearDynamicDataOnBuild = !!i3609[21]
  i3608.m_AtlasWidth = i3609[22]
  i3608.m_AtlasHeight = i3609[23]
  i3608.m_AtlasPadding = i3609[24]
  i3608.m_AtlasRenderMode = i3609[25]
  var i3617 = i3609[26]
  var i3616 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i3617.length; i += 1) {
    i3616.add(request.d('UnityEngine.TextCore.GlyphRect', i3617[i + 0]));
  }
  i3608.m_UsedGlyphRects = i3616
  var i3619 = i3609[27]
  var i3618 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i3619.length; i += 1) {
    i3618.add(request.d('UnityEngine.TextCore.GlyphRect', i3619[i + 0]));
  }
  i3608.m_FreeGlyphRects = i3618
  i3608.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i3609[28], i3608.m_FontFeatureTable)
  i3608.m_ShouldReimportFontFeatures = !!i3609[29]
  var i3621 = i3609[30]
  var i3620 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i3621.length; i += 2) {
  request.r(i3621[i + 0], i3621[i + 1], 1, i3620, '')
  }
  i3608.m_FallbackFontAssetTable = i3620
  var i3623 = i3609[31]
  var i3622 = []
  for(var i = 0; i < i3623.length; i += 1) {
    i3622.push( request.d('TMPro.TMP_FontWeightPair', i3623[i + 0]) );
  }
  i3608.m_FontWeightTable = i3622
  var i3625 = i3609[32]
  var i3624 = []
  for(var i = 0; i < i3625.length; i += 1) {
    i3624.push( request.d('TMPro.TMP_FontWeightPair', i3625[i + 0]) );
  }
  i3608.fontWeights = i3624
  i3608.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i3609[33], i3608.m_fontInfo)
  var i3627 = i3609[34]
  var i3626 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i3627.length; i += 1) {
    i3626.add(request.d('TMPro.TMP_Glyph', i3627[i + 0]));
  }
  i3608.m_glyphInfoList = i3626
  i3608.m_KerningTable = request.d('TMPro.KerningTable', i3609[35], i3608.m_KerningTable)
  var i3629 = i3609[36]
  var i3628 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i3629.length; i += 2) {
  request.r(i3629[i + 0], i3629[i + 1], 1, i3628, '')
  }
  i3608.fallbackFontAssets = i3628
  i3608.m_Version = i3609[37]
  i3608.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i3609[38], i3608.m_FaceInfo)
  request.r(i3609[39], i3609[40], 0, i3608, 'm_Material')
  return i3608
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i3630 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i3631 = data
  i3630.sourceFontFileName = i3631[0]
  i3630.sourceFontFileGUID = i3631[1]
  i3630.faceIndex = i3631[2]
  i3630.pointSizeSamplingMode = i3631[3]
  i3630.pointSize = i3631[4]
  i3630.padding = i3631[5]
  i3630.paddingMode = i3631[6]
  i3630.packingMode = i3631[7]
  i3630.atlasWidth = i3631[8]
  i3630.atlasHeight = i3631[9]
  i3630.characterSetSelectionMode = i3631[10]
  i3630.characterSequence = i3631[11]
  i3630.referencedFontAssetGUID = i3631[12]
  i3630.referencedTextAssetGUID = i3631[13]
  i3630.fontStyle = i3631[14]
  i3630.fontStyleModifier = i3631[15]
  i3630.renderMode = i3631[16]
  i3630.includeFontFeatures = !!i3631[17]
  return i3630
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i3634 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i3635 = data
  i3634.m_Index = i3635[0]
  i3634.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i3635[1], i3634.m_Metrics)
  i3634.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i3635[2], i3634.m_GlyphRect)
  i3634.m_Scale = i3635[3]
  i3634.m_AtlasIndex = i3635[4]
  i3634.m_ClassDefinitionType = i3635[5]
  return i3634
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i3638 = root || request.c( 'TMPro.TMP_Character' )
  var i3639 = data
  i3638.m_ElementType = i3639[0]
  i3638.m_Unicode = i3639[1]
  i3638.m_GlyphIndex = i3639[2]
  i3638.m_Scale = i3639[3]
  return i3638
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i3644 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i3645 = data
  i3644.m_X = i3645[0]
  i3644.m_Y = i3645[1]
  i3644.m_Width = i3645[2]
  i3644.m_Height = i3645[3]
  return i3644
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i3646 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i3647 = data
  var i3649 = i3647[0]
  var i3648 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i3649.length; i += 1) {
    i3648.add(request.d('TMPro.MultipleSubstitutionRecord', i3649[i + 0]));
  }
  i3646.m_MultipleSubstitutionRecords = i3648
  var i3651 = i3647[1]
  var i3650 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i3651.length; i += 1) {
    i3650.add(request.d('TMPro.LigatureSubstitutionRecord', i3651[i + 0]));
  }
  i3646.m_LigatureSubstitutionRecords = i3650
  var i3653 = i3647[2]
  var i3652 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i3653.length; i += 1) {
    i3652.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i3653[i + 0]));
  }
  i3646.m_GlyphPairAdjustmentRecords = i3652
  var i3655 = i3647[3]
  var i3654 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i3655.length; i += 1) {
    i3654.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i3655[i + 0]));
  }
  i3646.m_MarkToBaseAdjustmentRecords = i3654
  var i3657 = i3647[4]
  var i3656 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i3657.length; i += 1) {
    i3656.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i3657[i + 0]));
  }
  i3646.m_MarkToMarkAdjustmentRecords = i3656
  return i3646
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i3660 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i3661 = data
  i3660.m_TargetGlyphID = i3661[0]
  i3660.m_SubstituteGlyphIDs = i3661[1]
  return i3660
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i3664 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i3665 = data
  i3664.m_ComponentGlyphIDs = i3665[0]
  i3664.m_LigatureGlyphID = i3665[1]
  return i3664
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i3668 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i3669 = data
  i3668.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i3669[0], i3668.m_FirstAdjustmentRecord)
  i3668.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i3669[1], i3668.m_SecondAdjustmentRecord)
  i3668.m_FeatureLookupFlags = i3669[2]
  return i3668
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i3670 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i3671 = data
  i3670.m_GlyphIndex = i3671[0]
  i3670.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i3671[1], i3670.m_GlyphValueRecord)
  return i3670
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i3672 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i3673 = data
  i3672.m_XPlacement = i3673[0]
  i3672.m_YPlacement = i3673[1]
  i3672.m_XAdvance = i3673[2]
  i3672.m_YAdvance = i3673[3]
  return i3672
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i3676 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i3677 = data
  i3676.m_BaseGlyphID = i3677[0]
  i3676.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i3677[1], i3676.m_BaseGlyphAnchorPoint)
  i3676.m_MarkGlyphID = i3677[2]
  i3676.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i3677[3], i3676.m_MarkPositionAdjustment)
  return i3676
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i3680 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i3681 = data
  i3680.m_BaseMarkGlyphID = i3681[0]
  i3680.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i3681[1], i3680.m_BaseMarkGlyphAnchorPoint)
  i3680.m_CombiningMarkGlyphID = i3681[2]
  i3680.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i3681[3], i3680.m_CombiningMarkPositionAdjustment)
  return i3680
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i3686 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i3687 = data
  request.r(i3687[0], i3687[1], 0, i3686, 'regularTypeface')
  request.r(i3687[2], i3687[3], 0, i3686, 'italicTypeface')
  return i3686
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i3688 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i3689 = data
  i3688.Name = i3689[0]
  i3688.PointSize = i3689[1]
  i3688.Scale = i3689[2]
  i3688.CharacterCount = i3689[3]
  i3688.LineHeight = i3689[4]
  i3688.Baseline = i3689[5]
  i3688.Ascender = i3689[6]
  i3688.CapHeight = i3689[7]
  i3688.Descender = i3689[8]
  i3688.CenterLine = i3689[9]
  i3688.SuperscriptOffset = i3689[10]
  i3688.SubscriptOffset = i3689[11]
  i3688.SubSize = i3689[12]
  i3688.Underline = i3689[13]
  i3688.UnderlineThickness = i3689[14]
  i3688.strikethrough = i3689[15]
  i3688.strikethroughThickness = i3689[16]
  i3688.TabWidth = i3689[17]
  i3688.Padding = i3689[18]
  i3688.AtlasWidth = i3689[19]
  i3688.AtlasHeight = i3689[20]
  return i3688
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i3692 = root || request.c( 'TMPro.TMP_Glyph' )
  var i3693 = data
  i3692.id = i3693[0]
  i3692.x = i3693[1]
  i3692.y = i3693[2]
  i3692.width = i3693[3]
  i3692.height = i3693[4]
  i3692.xOffset = i3693[5]
  i3692.yOffset = i3693[6]
  i3692.xAdvance = i3693[7]
  i3692.scale = i3693[8]
  return i3692
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i3694 = root || request.c( 'TMPro.KerningTable' )
  var i3695 = data
  var i3697 = i3695[0]
  var i3696 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i3697.length; i += 1) {
    i3696.add(request.d('TMPro.KerningPair', i3697[i + 0]));
  }
  i3694.kerningPairs = i3696
  return i3694
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i3700 = root || request.c( 'TMPro.KerningPair' )
  var i3701 = data
  i3700.xOffset = i3701[0]
  i3700.m_FirstGlyph = i3701[1]
  i3700.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i3701[2], i3700.m_FirstGlyphAdjustments)
  i3700.m_SecondGlyph = i3701[3]
  i3700.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i3701[4], i3700.m_SecondGlyphAdjustments)
  i3700.m_IgnoreSpacingAdjustments = !!i3701[5]
  return i3700
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i3702 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i3703 = data
  i3702.m_FaceIndex = i3703[0]
  i3702.m_FamilyName = i3703[1]
  i3702.m_StyleName = i3703[2]
  i3702.m_PointSize = i3703[3]
  i3702.m_Scale = i3703[4]
  i3702.m_UnitsPerEM = i3703[5]
  i3702.m_LineHeight = i3703[6]
  i3702.m_AscentLine = i3703[7]
  i3702.m_CapLine = i3703[8]
  i3702.m_MeanLine = i3703[9]
  i3702.m_Baseline = i3703[10]
  i3702.m_DescentLine = i3703[11]
  i3702.m_SuperscriptOffset = i3703[12]
  i3702.m_SuperscriptSize = i3703[13]
  i3702.m_SubscriptOffset = i3703[14]
  i3702.m_SubscriptSize = i3703[15]
  i3702.m_UnderlineOffset = i3703[16]
  i3702.m_UnderlineThickness = i3703[17]
  i3702.m_StrikethroughOffset = i3703[18]
  i3702.m_StrikethroughThickness = i3703[19]
  i3702.m_TabWidth = i3703[20]
  return i3702
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i3704 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i3705 = data
  i3704.m_Width = i3705[0]
  i3704.m_Height = i3705[1]
  i3704.m_HorizontalBearingX = i3705[2]
  i3704.m_HorizontalBearingY = i3705[3]
  i3704.m_HorizontalAdvance = i3705[4]
  return i3704
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i3706 = root || request.c( 'TMPro.TMP_Settings' )
  var i3707 = data
  i3706.assetVersion = i3707[0]
  i3706.m_TextWrappingMode = i3707[1]
  i3706.m_enableKerning = !!i3707[2]
  var i3709 = i3707[3]
  var i3708 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i3709.length; i += 1) {
    i3708.add(i3709[i + 0]);
  }
  i3706.m_ActiveFontFeatures = i3708
  i3706.m_enableExtraPadding = !!i3707[4]
  i3706.m_enableTintAllSprites = !!i3707[5]
  i3706.m_enableParseEscapeCharacters = !!i3707[6]
  i3706.m_EnableRaycastTarget = !!i3707[7]
  i3706.m_GetFontFeaturesAtRuntime = !!i3707[8]
  i3706.m_missingGlyphCharacter = i3707[9]
  i3706.m_ClearDynamicDataOnBuild = !!i3707[10]
  i3706.m_warningsDisabled = !!i3707[11]
  request.r(i3707[12], i3707[13], 0, i3706, 'm_defaultFontAsset')
  i3706.m_defaultFontAssetPath = i3707[14]
  i3706.m_defaultFontSize = i3707[15]
  i3706.m_defaultAutoSizeMinRatio = i3707[16]
  i3706.m_defaultAutoSizeMaxRatio = i3707[17]
  i3706.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i3707[18], i3707[19] )
  i3706.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i3707[20], i3707[21] )
  i3706.m_autoSizeTextContainer = !!i3707[22]
  i3706.m_IsTextObjectScaleStatic = !!i3707[23]
  var i3711 = i3707[24]
  var i3710 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i3711.length; i += 2) {
  request.r(i3711[i + 0], i3711[i + 1], 1, i3710, '')
  }
  i3706.m_fallbackFontAssets = i3710
  i3706.m_matchMaterialPreset = !!i3707[25]
  i3706.m_HideSubTextObjects = !!i3707[26]
  request.r(i3707[27], i3707[28], 0, i3706, 'm_defaultSpriteAsset')
  i3706.m_defaultSpriteAssetPath = i3707[29]
  i3706.m_enableEmojiSupport = !!i3707[30]
  i3706.m_MissingCharacterSpriteUnicode = i3707[31]
  var i3713 = i3707[32]
  var i3712 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i3713.length; i += 2) {
  request.r(i3713[i + 0], i3713[i + 1], 1, i3712, '')
  }
  i3706.m_EmojiFallbackTextAssets = i3712
  i3706.m_defaultColorGradientPresetsPath = i3707[33]
  request.r(i3707[34], i3707[35], 0, i3706, 'm_defaultStyleSheet')
  i3706.m_StyleSheetsResourcePath = i3707[36]
  request.r(i3707[37], i3707[38], 0, i3706, 'm_leadingCharacters')
  request.r(i3707[39], i3707[40], 0, i3706, 'm_followingCharacters')
  i3706.m_UseModernHangulLineBreakingRules = !!i3707[41]
  return i3706
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i3718 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i3719 = data
  request.r(i3719[0], i3719[1], 0, i3718, 'spriteSheet')
  var i3721 = i3719[2]
  var i3720 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i3721.length; i += 1) {
    i3720.add(request.d('TMPro.TMP_Sprite', i3721[i + 0]));
  }
  i3718.spriteInfoList = i3720
  var i3723 = i3719[3]
  var i3722 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i3723.length; i += 2) {
  request.r(i3723[i + 0], i3723[i + 1], 1, i3722, '')
  }
  i3718.fallbackSpriteAssets = i3722
  var i3725 = i3719[4]
  var i3724 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i3725.length; i += 1) {
    i3724.add(request.d('TMPro.TMP_SpriteCharacter', i3725[i + 0]));
  }
  i3718.m_SpriteCharacterTable = i3724
  var i3727 = i3719[5]
  var i3726 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i3727.length; i += 1) {
    i3726.add(request.d('TMPro.TMP_SpriteGlyph', i3727[i + 0]));
  }
  i3718.m_GlyphTable = i3726
  i3718.m_Version = i3719[6]
  i3718.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i3719[7], i3718.m_FaceInfo)
  request.r(i3719[8], i3719[9], 0, i3718, 'm_Material')
  return i3718
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i3730 = root || request.c( 'TMPro.TMP_Sprite' )
  var i3731 = data
  i3730.name = i3731[0]
  i3730.hashCode = i3731[1]
  i3730.unicode = i3731[2]
  i3730.pivot = new pc.Vec2( i3731[3], i3731[4] )
  request.r(i3731[5], i3731[6], 0, i3730, 'sprite')
  i3730.id = i3731[7]
  i3730.x = i3731[8]
  i3730.y = i3731[9]
  i3730.width = i3731[10]
  i3730.height = i3731[11]
  i3730.xOffset = i3731[12]
  i3730.yOffset = i3731[13]
  i3730.xAdvance = i3731[14]
  i3730.scale = i3731[15]
  return i3730
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i3736 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i3737 = data
  i3736.m_Name = i3737[0]
  i3736.m_ElementType = i3737[1]
  i3736.m_Unicode = i3737[2]
  i3736.m_GlyphIndex = i3737[3]
  i3736.m_Scale = i3737[4]
  return i3736
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i3740 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i3741 = data
  request.r(i3741[0], i3741[1], 0, i3740, 'sprite')
  i3740.m_Index = i3741[2]
  i3740.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i3741[3], i3740.m_Metrics)
  i3740.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i3741[4], i3740.m_GlyphRect)
  i3740.m_Scale = i3741[5]
  i3740.m_AtlasIndex = i3741[6]
  i3740.m_ClassDefinitionType = i3741[7]
  return i3740
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i3742 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i3743 = data
  var i3745 = i3743[0]
  var i3744 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i3745.length; i += 1) {
    i3744.add(request.d('TMPro.TMP_Style', i3745[i + 0]));
  }
  i3742.m_StyleList = i3744
  return i3742
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i3748 = root || request.c( 'TMPro.TMP_Style' )
  var i3749 = data
  i3748.m_Name = i3749[0]
  i3748.m_HashCode = i3749[1]
  i3748.m_OpeningDefinition = i3749[2]
  i3748.m_ClosingDefinition = i3749[3]
  i3748.m_OpeningTagArray = i3749[4]
  i3748.m_ClosingTagArray = i3749[5]
  return i3748
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i3750 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i3751 = data
  var i3753 = i3751[0]
  var i3752 = []
  for(var i = 0; i < i3753.length; i += 1) {
    i3752.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i3753[i + 0]) );
  }
  i3750.files = i3752
  i3750.componentToPrefabIds = i3751[1]
  return i3750
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i3756 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i3757 = data
  i3756.path = i3757[0]
  request.r(i3757[1], i3757[2], 0, i3756, 'unityObject')
  return i3756
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i3758 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i3759 = data
  var i3761 = i3759[0]
  var i3760 = []
  for(var i = 0; i < i3761.length; i += 1) {
    i3760.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i3761[i + 0]) );
  }
  i3758.scriptsExecutionOrder = i3760
  var i3763 = i3759[1]
  var i3762 = []
  for(var i = 0; i < i3763.length; i += 1) {
    i3762.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i3763[i + 0]) );
  }
  i3758.sortingLayers = i3762
  var i3765 = i3759[2]
  var i3764 = []
  for(var i = 0; i < i3765.length; i += 1) {
    i3764.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i3765[i + 0]) );
  }
  i3758.cullingLayers = i3764
  i3758.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i3759[3], i3758.timeSettings)
  i3758.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i3759[4], i3758.physicsSettings)
  i3758.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i3759[5], i3758.physics2DSettings)
  i3758.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i3759[6], i3758.qualitySettings)
  i3758.enableRealtimeShadows = !!i3759[7]
  i3758.enableAutoInstancing = !!i3759[8]
  i3758.enableStaticBatching = !!i3759[9]
  i3758.enableDynamicBatching = !!i3759[10]
  i3758.lightmapEncodingQuality = i3759[11]
  i3758.desiredColorSpace = i3759[12]
  var i3767 = i3759[13]
  var i3766 = []
  for(var i = 0; i < i3767.length; i += 1) {
    i3766.push( i3767[i + 0] );
  }
  i3758.allTags = i3766
  return i3758
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i3770 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i3771 = data
  i3770.name = i3771[0]
  i3770.value = i3771[1]
  return i3770
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i3774 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i3775 = data
  i3774.id = i3775[0]
  i3774.name = i3775[1]
  i3774.value = i3775[2]
  return i3774
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i3778 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i3779 = data
  i3778.id = i3779[0]
  i3778.name = i3779[1]
  return i3778
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i3780 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i3781 = data
  i3780.fixedDeltaTime = i3781[0]
  i3780.maximumDeltaTime = i3781[1]
  i3780.timeScale = i3781[2]
  i3780.maximumParticleTimestep = i3781[3]
  return i3780
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i3782 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i3783 = data
  i3782.gravity = new pc.Vec3( i3783[0], i3783[1], i3783[2] )
  i3782.defaultSolverIterations = i3783[3]
  i3782.bounceThreshold = i3783[4]
  i3782.autoSyncTransforms = !!i3783[5]
  i3782.autoSimulation = !!i3783[6]
  var i3785 = i3783[7]
  var i3784 = []
  for(var i = 0; i < i3785.length; i += 1) {
    i3784.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i3785[i + 0]) );
  }
  i3782.collisionMatrix = i3784
  return i3782
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i3788 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i3789 = data
  i3788.enabled = !!i3789[0]
  i3788.layerId = i3789[1]
  i3788.otherLayerId = i3789[2]
  return i3788
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i3790 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i3791 = data
  request.r(i3791[0], i3791[1], 0, i3790, 'material')
  i3790.gravity = new pc.Vec2( i3791[2], i3791[3] )
  i3790.positionIterations = i3791[4]
  i3790.velocityIterations = i3791[5]
  i3790.velocityThreshold = i3791[6]
  i3790.maxLinearCorrection = i3791[7]
  i3790.maxAngularCorrection = i3791[8]
  i3790.maxTranslationSpeed = i3791[9]
  i3790.maxRotationSpeed = i3791[10]
  i3790.baumgarteScale = i3791[11]
  i3790.baumgarteTOIScale = i3791[12]
  i3790.timeToSleep = i3791[13]
  i3790.linearSleepTolerance = i3791[14]
  i3790.angularSleepTolerance = i3791[15]
  i3790.defaultContactOffset = i3791[16]
  i3790.autoSimulation = !!i3791[17]
  i3790.queriesHitTriggers = !!i3791[18]
  i3790.queriesStartInColliders = !!i3791[19]
  i3790.callbacksOnDisable = !!i3791[20]
  i3790.reuseCollisionCallbacks = !!i3791[21]
  i3790.autoSyncTransforms = !!i3791[22]
  var i3793 = i3791[23]
  var i3792 = []
  for(var i = 0; i < i3793.length; i += 1) {
    i3792.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i3793[i + 0]) );
  }
  i3790.collisionMatrix = i3792
  return i3790
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i3796 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i3797 = data
  i3796.enabled = !!i3797[0]
  i3796.layerId = i3797[1]
  i3796.otherLayerId = i3797[2]
  return i3796
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i3798 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i3799 = data
  var i3801 = i3799[0]
  var i3800 = []
  for(var i = 0; i < i3801.length; i += 1) {
    i3800.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i3801[i + 0]) );
  }
  i3798.qualityLevels = i3800
  var i3803 = i3799[1]
  var i3802 = []
  for(var i = 0; i < i3803.length; i += 1) {
    i3802.push( i3803[i + 0] );
  }
  i3798.names = i3802
  i3798.shadows = i3799[2]
  i3798.anisotropicFiltering = i3799[3]
  i3798.antiAliasing = i3799[4]
  i3798.lodBias = i3799[5]
  i3798.shadowCascades = i3799[6]
  i3798.shadowDistance = i3799[7]
  i3798.shadowmaskMode = i3799[8]
  i3798.shadowProjection = i3799[9]
  i3798.shadowResolution = i3799[10]
  i3798.softParticles = !!i3799[11]
  i3798.softVegetation = !!i3799[12]
  i3798.activeColorSpace = i3799[13]
  i3798.desiredColorSpace = i3799[14]
  i3798.masterTextureLimit = i3799[15]
  i3798.maxQueuedFrames = i3799[16]
  i3798.particleRaycastBudget = i3799[17]
  i3798.pixelLightCount = i3799[18]
  i3798.realtimeReflectionProbes = !!i3799[19]
  i3798.shadowCascade2Split = i3799[20]
  i3798.shadowCascade4Split = new pc.Vec3( i3799[21], i3799[22], i3799[23] )
  i3798.streamingMipmapsActive = !!i3799[24]
  i3798.vSyncCount = i3799[25]
  i3798.asyncUploadBufferSize = i3799[26]
  i3798.asyncUploadTimeSlice = i3799[27]
  i3798.billboardsFaceCameraPosition = !!i3799[28]
  i3798.shadowNearPlaneOffset = i3799[29]
  i3798.streamingMipmapsMemoryBudget = i3799[30]
  i3798.maximumLODLevel = i3799[31]
  i3798.streamingMipmapsAddAllCameras = !!i3799[32]
  i3798.streamingMipmapsMaxLevelReduction = i3799[33]
  i3798.streamingMipmapsRenderersPerFrame = i3799[34]
  i3798.resolutionScalingFixedDPIFactor = i3799[35]
  i3798.streamingMipmapsMaxFileIORequests = i3799[36]
  i3798.currentQualityLevel = i3799[37]
  return i3798
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i3808 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i3809 = data
  i3808.weight = i3809[0]
  i3808.vertices = i3809[1]
  i3808.normals = i3809[2]
  i3808.tangents = i3809[3]
  return i3808
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i3810 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i3811 = data
  i3810.m_XCoordinate = i3811[0]
  i3810.m_YCoordinate = i3811[1]
  return i3810
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i3812 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i3813 = data
  i3812.m_XPositionAdjustment = i3813[0]
  i3812.m_YPositionAdjustment = i3813[1]
  return i3812
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i3814 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i3815 = data
  i3814.xPlacement = i3815[0]
  i3814.yPlacement = i3815[1]
  i3814.xAdvance = i3815[2]
  i3814.yAdvance = i3815[3]
  return i3814
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

Deserializers.buildID = "e9ce74d0-8f11-4b40-9b38-95db1140b954";

Deserializers.runtimeInitializeOnLoadInfos = [[["Unity","Services","Core","Internal","UnityServicesInitializer","EnableServicesInitializationAsync"],["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["DG","Tweening","DOTween","RuntimeOnLoad"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["Unity","Services","Core","Registration","CorePackageInitializer","InitializeOnLoad"],["Unity","Services","Core","Internal","TaskAsyncOperation","SetScheduler"],["Unity","Services","Core","Environments","Client","Scheduler","EngineStateHelper","Init"],["Unity","Services","Core","Environments","Client","Scheduler","ThreadHelper","Init"],["Ua2CoreInitializeCallback","Register"],["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["Unity","AI","Navigation","NavMeshLink","ClearTrackedList"],["Unity","AI","Navigation","NavMeshSurface","ClearNavMeshSurfaces"],["Unity","AI","Navigation","NavMeshModifierVolume","ClearNavMeshModifiers"],["Unity","AI","Navigation","NavMeshModifier","ClearNavMeshModifiers"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["Unity","Services","Core","Internal","UnityServicesInitializer","CreateStaticInstance"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[["Unity","Services","Core","Environments","Client","Http","JsonHelpers","RegisterTypesForAOT"]],[["Unity","Services","Core","UnityThreadUtils","CaptureUnityThreadInfo"],["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

