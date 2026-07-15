var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i3170 = root || request.c( 'UnityEngine.JointSpring' )
  var i3171 = data
  i3170.spring = i3171[0]
  i3170.damper = i3171[1]
  i3170.targetPosition = i3171[2]
  return i3170
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i3172 = root || request.c( 'UnityEngine.JointMotor' )
  var i3173 = data
  i3172.m_TargetVelocity = i3173[0]
  i3172.m_Force = i3173[1]
  i3172.m_FreeSpin = i3173[2]
  return i3172
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i3174 = root || request.c( 'UnityEngine.JointLimits' )
  var i3175 = data
  i3174.m_Min = i3175[0]
  i3174.m_Max = i3175[1]
  i3174.m_Bounciness = i3175[2]
  i3174.m_BounceMinVelocity = i3175[3]
  i3174.m_ContactDistance = i3175[4]
  i3174.minBounce = i3175[5]
  i3174.maxBounce = i3175[6]
  return i3174
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i3176 = root || request.c( 'UnityEngine.JointDrive' )
  var i3177 = data
  i3176.m_PositionSpring = i3177[0]
  i3176.m_PositionDamper = i3177[1]
  i3176.m_MaximumForce = i3177[2]
  i3176.m_UseAcceleration = i3177[3]
  return i3176
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i3178 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i3179 = data
  i3178.m_Spring = i3179[0]
  i3178.m_Damper = i3179[1]
  return i3178
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i3180 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i3181 = data
  i3180.m_Limit = i3181[0]
  i3180.m_Bounciness = i3181[1]
  i3180.m_ContactDistance = i3181[2]
  return i3180
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i3182 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i3183 = data
  i3182.m_ExtremumSlip = i3183[0]
  i3182.m_ExtremumValue = i3183[1]
  i3182.m_AsymptoteSlip = i3183[2]
  i3182.m_AsymptoteValue = i3183[3]
  i3182.m_Stiffness = i3183[4]
  return i3182
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i3184 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i3185 = data
  i3184.m_LowerAngle = i3185[0]
  i3184.m_UpperAngle = i3185[1]
  return i3184
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i3186 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i3187 = data
  i3186.m_MotorSpeed = i3187[0]
  i3186.m_MaximumMotorTorque = i3187[1]
  return i3186
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i3188 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i3189 = data
  i3188.m_DampingRatio = i3189[0]
  i3188.m_Frequency = i3189[1]
  i3188.m_Angle = i3189[2]
  return i3188
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i3190 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i3191 = data
  i3190.m_LowerTranslation = i3191[0]
  i3190.m_UpperTranslation = i3191[1]
  return i3190
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i3192 = root || new pc.UnityMaterial()
  var i3193 = data
  i3192.name = i3193[0]
  request.r(i3193[1], i3193[2], 0, i3192, 'shader')
  i3192.renderQueue = i3193[3]
  i3192.enableInstancing = !!i3193[4]
  var i3195 = i3193[5]
  var i3194 = []
  for(var i = 0; i < i3195.length; i += 1) {
    i3194.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i3195[i + 0]) );
  }
  i3192.floatParameters = i3194
  var i3197 = i3193[6]
  var i3196 = []
  for(var i = 0; i < i3197.length; i += 1) {
    i3196.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i3197[i + 0]) );
  }
  i3192.colorParameters = i3196
  var i3199 = i3193[7]
  var i3198 = []
  for(var i = 0; i < i3199.length; i += 1) {
    i3198.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i3199[i + 0]) );
  }
  i3192.vectorParameters = i3198
  var i3201 = i3193[8]
  var i3200 = []
  for(var i = 0; i < i3201.length; i += 1) {
    i3200.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i3201[i + 0]) );
  }
  i3192.textureParameters = i3200
  var i3203 = i3193[9]
  var i3202 = []
  for(var i = 0; i < i3203.length; i += 1) {
    i3202.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i3203[i + 0]) );
  }
  i3192.materialFlags = i3202
  return i3192
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i3206 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i3207 = data
  i3206.name = i3207[0]
  i3206.value = i3207[1]
  return i3206
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i3210 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i3211 = data
  i3210.name = i3211[0]
  i3210.value = new pc.Color(i3211[1], i3211[2], i3211[3], i3211[4])
  return i3210
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i3214 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i3215 = data
  i3214.name = i3215[0]
  i3214.value = new pc.Vec4( i3215[1], i3215[2], i3215[3], i3215[4] )
  return i3214
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i3218 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i3219 = data
  i3218.name = i3219[0]
  request.r(i3219[1], i3219[2], 0, i3218, 'value')
  return i3218
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i3222 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i3223 = data
  i3222.name = i3223[0]
  i3222.enabled = !!i3223[1]
  return i3222
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i3224 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i3225 = data
  i3224.name = i3225[0]
  i3224.width = i3225[1]
  i3224.height = i3225[2]
  i3224.mipmapCount = i3225[3]
  i3224.anisoLevel = i3225[4]
  i3224.filterMode = i3225[5]
  i3224.hdr = !!i3225[6]
  i3224.format = i3225[7]
  i3224.wrapMode = i3225[8]
  i3224.alphaIsTransparency = !!i3225[9]
  i3224.alphaSource = i3225[10]
  i3224.graphicsFormat = i3225[11]
  i3224.sRGBTexture = !!i3225[12]
  i3224.desiredColorSpace = i3225[13]
  i3224.wrapU = i3225[14]
  i3224.wrapV = i3225[15]
  return i3224
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i3226 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i3227 = data
  i3226.name = i3227[0]
  i3226.halfPrecision = !!i3227[1]
  i3226.useSimplification = !!i3227[2]
  i3226.useUInt32IndexFormat = !!i3227[3]
  i3226.vertexCount = i3227[4]
  i3226.aabb = i3227[5]
  var i3229 = i3227[6]
  var i3228 = []
  for(var i = 0; i < i3229.length; i += 1) {
    i3228.push( !!i3229[i + 0] );
  }
  i3226.streams = i3228
  i3226.vertices = i3227[7]
  var i3231 = i3227[8]
  var i3230 = []
  for(var i = 0; i < i3231.length; i += 1) {
    i3230.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i3231[i + 0]) );
  }
  i3226.subMeshes = i3230
  var i3233 = i3227[9]
  var i3232 = []
  for(var i = 0; i < i3233.length; i += 16) {
    i3232.push( new pc.Mat4().setData(i3233[i + 0], i3233[i + 1], i3233[i + 2], i3233[i + 3],  i3233[i + 4], i3233[i + 5], i3233[i + 6], i3233[i + 7],  i3233[i + 8], i3233[i + 9], i3233[i + 10], i3233[i + 11],  i3233[i + 12], i3233[i + 13], i3233[i + 14], i3233[i + 15]) );
  }
  i3226.bindposes = i3232
  var i3235 = i3227[10]
  var i3234 = []
  for(var i = 0; i < i3235.length; i += 1) {
    i3234.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i3235[i + 0]) );
  }
  i3226.blendShapes = i3234
  return i3226
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i3240 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i3241 = data
  i3240.triangles = i3241[0]
  return i3240
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i3246 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i3247 = data
  i3246.name = i3247[0]
  var i3249 = i3247[1]
  var i3248 = []
  for(var i = 0; i < i3249.length; i += 1) {
    i3248.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i3249[i + 0]) );
  }
  i3246.frames = i3248
  return i3246
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i3250 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i3251 = data
  i3250.name = i3251[0]
  i3250.index = i3251[1]
  i3250.startup = !!i3251[2]
  return i3250
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i3252 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i3253 = data
  i3252.aspect = i3253[0]
  i3252.orthographic = !!i3253[1]
  i3252.orthographicSize = i3253[2]
  i3252.backgroundColor = new pc.Color(i3253[3], i3253[4], i3253[5], i3253[6])
  i3252.nearClipPlane = i3253[7]
  i3252.farClipPlane = i3253[8]
  i3252.fieldOfView = i3253[9]
  i3252.depth = i3253[10]
  i3252.clearFlags = i3253[11]
  i3252.cullingMask = i3253[12]
  i3252.rect = i3253[13]
  request.r(i3253[14], i3253[15], 0, i3252, 'targetTexture')
  i3252.usePhysicalProperties = !!i3253[16]
  i3252.focalLength = i3253[17]
  i3252.sensorSize = new pc.Vec2( i3253[18], i3253[19] )
  i3252.lensShift = new pc.Vec2( i3253[20], i3253[21] )
  i3252.gateFit = i3253[22]
  i3252.commandBufferCount = i3253[23]
  i3252.cameraType = i3253[24]
  i3252.enabled = !!i3253[25]
  return i3252
}

Deserializers["CameraFollow2D"] = function (request, data, root) {
  var i3254 = root || request.c( 'CameraFollow2D' )
  var i3255 = data
  request.r(i3255[0], i3255[1], 0, i3254, 'target')
  i3254.smoothSpeed = i3255[2]
  i3254.offset = new pc.Vec3( i3255[3], i3255[4], i3255[5] )
  i3254.followY = !!i3255[6]
  return i3254
}

Deserializers["AutoCameraFit"] = function (request, data, root) {
  var i3256 = root || request.c( 'AutoCameraFit' )
  var i3257 = data
  request.r(i3257[0], i3257[1], 0, i3256, 'tallScreenObject')
  i3256.tallScreenRatioThreshold = i3257[2]
  i3256.tallScreenYOffset = i3257[3]
  request.r(i3257[4], i3257[5], 0, i3256, 'canvasBtn')
  request.r(i3257[6], i3257[7], 0, i3256, 'targetArea')
  i3256.paddingLandscape = i3257[8]
  i3256.paddingPortrait = i3257[9]
  i3256.extraPaddingSmallScreen = i3257[10]
  i3256.smallScreenThreshold = i3257[11]
  i3256.autoUpdateOnResize = !!i3257[12]
  i3256.adjustInEditMode = !!i3257[13]
  return i3256
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i3258 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i3259 = data
  i3258.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i3259[0], i3258.main)
  i3258.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i3259[1], i3258.colorBySpeed)
  i3258.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i3259[2], i3258.colorOverLifetime)
  i3258.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i3259[3], i3258.emission)
  i3258.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i3259[4], i3258.rotationBySpeed)
  i3258.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i3259[5], i3258.rotationOverLifetime)
  i3258.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i3259[6], i3258.shape)
  i3258.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i3259[7], i3258.sizeBySpeed)
  i3258.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i3259[8], i3258.sizeOverLifetime)
  i3258.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i3259[9], i3258.textureSheetAnimation)
  i3258.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i3259[10], i3258.velocityOverLifetime)
  i3258.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i3259[11], i3258.noise)
  i3258.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i3259[12], i3258.inheritVelocity)
  i3258.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i3259[13], i3258.forceOverLifetime)
  i3258.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i3259[14], i3258.limitVelocityOverLifetime)
  i3258.useAutoRandomSeed = !!i3259[15]
  i3258.randomSeed = i3259[16]
  return i3258
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i3260 = root || new pc.ParticleSystemMain()
  var i3261 = data
  i3260.duration = i3261[0]
  i3260.loop = !!i3261[1]
  i3260.prewarm = !!i3261[2]
  i3260.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3261[3], i3260.startDelay)
  i3260.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3261[4], i3260.startLifetime)
  i3260.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3261[5], i3260.startSpeed)
  i3260.startSize3D = !!i3261[6]
  i3260.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3261[7], i3260.startSizeX)
  i3260.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3261[8], i3260.startSizeY)
  i3260.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3261[9], i3260.startSizeZ)
  i3260.startRotation3D = !!i3261[10]
  i3260.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3261[11], i3260.startRotationX)
  i3260.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3261[12], i3260.startRotationY)
  i3260.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3261[13], i3260.startRotationZ)
  i3260.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i3261[14], i3260.startColor)
  i3260.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3261[15], i3260.gravityModifier)
  i3260.simulationSpace = i3261[16]
  request.r(i3261[17], i3261[18], 0, i3260, 'customSimulationSpace')
  i3260.simulationSpeed = i3261[19]
  i3260.useUnscaledTime = !!i3261[20]
  i3260.scalingMode = i3261[21]
  i3260.playOnAwake = !!i3261[22]
  i3260.maxParticles = i3261[23]
  i3260.emitterVelocityMode = i3261[24]
  i3260.stopAction = i3261[25]
  return i3260
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i3262 = root || new pc.MinMaxCurve()
  var i3263 = data
  i3262.mode = i3263[0]
  i3262.curveMin = new pc.AnimationCurve( { keys_flow: i3263[1] } )
  i3262.curveMax = new pc.AnimationCurve( { keys_flow: i3263[2] } )
  i3262.curveMultiplier = i3263[3]
  i3262.constantMin = i3263[4]
  i3262.constantMax = i3263[5]
  return i3262
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i3264 = root || new pc.MinMaxGradient()
  var i3265 = data
  i3264.mode = i3265[0]
  i3264.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i3265[1], i3264.gradientMin)
  i3264.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i3265[2], i3264.gradientMax)
  i3264.colorMin = new pc.Color(i3265[3], i3265[4], i3265[5], i3265[6])
  i3264.colorMax = new pc.Color(i3265[7], i3265[8], i3265[9], i3265[10])
  return i3264
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i3266 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i3267 = data
  i3266.mode = i3267[0]
  var i3269 = i3267[1]
  var i3268 = []
  for(var i = 0; i < i3269.length; i += 1) {
    i3268.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i3269[i + 0]) );
  }
  i3266.colorKeys = i3268
  var i3271 = i3267[2]
  var i3270 = []
  for(var i = 0; i < i3271.length; i += 1) {
    i3270.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i3271[i + 0]) );
  }
  i3266.alphaKeys = i3270
  return i3266
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i3272 = root || new pc.ParticleSystemColorBySpeed()
  var i3273 = data
  i3272.enabled = !!i3273[0]
  i3272.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i3273[1], i3272.color)
  i3272.range = new pc.Vec2( i3273[2], i3273[3] )
  return i3272
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i3276 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i3277 = data
  i3276.color = new pc.Color(i3277[0], i3277[1], i3277[2], i3277[3])
  i3276.time = i3277[4]
  return i3276
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i3280 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i3281 = data
  i3280.alpha = i3281[0]
  i3280.time = i3281[1]
  return i3280
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i3282 = root || new pc.ParticleSystemColorOverLifetime()
  var i3283 = data
  i3282.enabled = !!i3283[0]
  i3282.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i3283[1], i3282.color)
  return i3282
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i3284 = root || new pc.ParticleSystemEmitter()
  var i3285 = data
  i3284.enabled = !!i3285[0]
  i3284.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3285[1], i3284.rateOverTime)
  i3284.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3285[2], i3284.rateOverDistance)
  var i3287 = i3285[3]
  var i3286 = []
  for(var i = 0; i < i3287.length; i += 1) {
    i3286.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i3287[i + 0]) );
  }
  i3284.bursts = i3286
  return i3284
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i3290 = root || new pc.ParticleSystemBurst()
  var i3291 = data
  i3290.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3291[0], i3290.count)
  i3290.cycleCount = i3291[1]
  i3290.minCount = i3291[2]
  i3290.maxCount = i3291[3]
  i3290.repeatInterval = i3291[4]
  i3290.time = i3291[5]
  return i3290
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i3292 = root || new pc.ParticleSystemRotationBySpeed()
  var i3293 = data
  i3292.enabled = !!i3293[0]
  i3292.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3293[1], i3292.x)
  i3292.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3293[2], i3292.y)
  i3292.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3293[3], i3292.z)
  i3292.separateAxes = !!i3293[4]
  i3292.range = new pc.Vec2( i3293[5], i3293[6] )
  return i3292
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i3294 = root || new pc.ParticleSystemRotationOverLifetime()
  var i3295 = data
  i3294.enabled = !!i3295[0]
  i3294.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3295[1], i3294.x)
  i3294.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3295[2], i3294.y)
  i3294.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3295[3], i3294.z)
  i3294.separateAxes = !!i3295[4]
  return i3294
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i3296 = root || new pc.ParticleSystemShape()
  var i3297 = data
  i3296.enabled = !!i3297[0]
  i3296.shapeType = i3297[1]
  i3296.randomDirectionAmount = i3297[2]
  i3296.sphericalDirectionAmount = i3297[3]
  i3296.randomPositionAmount = i3297[4]
  i3296.alignToDirection = !!i3297[5]
  i3296.radius = i3297[6]
  i3296.radiusMode = i3297[7]
  i3296.radiusSpread = i3297[8]
  i3296.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3297[9], i3296.radiusSpeed)
  i3296.radiusThickness = i3297[10]
  i3296.angle = i3297[11]
  i3296.length = i3297[12]
  i3296.boxThickness = new pc.Vec3( i3297[13], i3297[14], i3297[15] )
  i3296.meshShapeType = i3297[16]
  request.r(i3297[17], i3297[18], 0, i3296, 'mesh')
  request.r(i3297[19], i3297[20], 0, i3296, 'meshRenderer')
  request.r(i3297[21], i3297[22], 0, i3296, 'skinnedMeshRenderer')
  i3296.useMeshMaterialIndex = !!i3297[23]
  i3296.meshMaterialIndex = i3297[24]
  i3296.useMeshColors = !!i3297[25]
  i3296.normalOffset = i3297[26]
  i3296.arc = i3297[27]
  i3296.arcMode = i3297[28]
  i3296.arcSpread = i3297[29]
  i3296.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3297[30], i3296.arcSpeed)
  i3296.donutRadius = i3297[31]
  i3296.position = new pc.Vec3( i3297[32], i3297[33], i3297[34] )
  i3296.rotation = new pc.Vec3( i3297[35], i3297[36], i3297[37] )
  i3296.scale = new pc.Vec3( i3297[38], i3297[39], i3297[40] )
  return i3296
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i3298 = root || new pc.ParticleSystemSizeBySpeed()
  var i3299 = data
  i3298.enabled = !!i3299[0]
  i3298.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3299[1], i3298.x)
  i3298.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3299[2], i3298.y)
  i3298.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3299[3], i3298.z)
  i3298.separateAxes = !!i3299[4]
  i3298.range = new pc.Vec2( i3299[5], i3299[6] )
  return i3298
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i3300 = root || new pc.ParticleSystemSizeOverLifetime()
  var i3301 = data
  i3300.enabled = !!i3301[0]
  i3300.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3301[1], i3300.x)
  i3300.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3301[2], i3300.y)
  i3300.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3301[3], i3300.z)
  i3300.separateAxes = !!i3301[4]
  return i3300
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i3302 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i3303 = data
  i3302.enabled = !!i3303[0]
  i3302.mode = i3303[1]
  i3302.animation = i3303[2]
  i3302.numTilesX = i3303[3]
  i3302.numTilesY = i3303[4]
  i3302.useRandomRow = !!i3303[5]
  i3302.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3303[6], i3302.frameOverTime)
  i3302.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3303[7], i3302.startFrame)
  i3302.cycleCount = i3303[8]
  i3302.rowIndex = i3303[9]
  i3302.flipU = i3303[10]
  i3302.flipV = i3303[11]
  i3302.spriteCount = i3303[12]
  var i3305 = i3303[13]
  var i3304 = []
  for(var i = 0; i < i3305.length; i += 2) {
  request.r(i3305[i + 0], i3305[i + 1], 2, i3304, '')
  }
  i3302.sprites = i3304
  return i3302
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i3308 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i3309 = data
  i3308.enabled = !!i3309[0]
  i3308.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3309[1], i3308.x)
  i3308.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3309[2], i3308.y)
  i3308.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3309[3], i3308.z)
  i3308.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3309[4], i3308.radial)
  i3308.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3309[5], i3308.speedModifier)
  i3308.space = i3309[6]
  i3308.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3309[7], i3308.orbitalX)
  i3308.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3309[8], i3308.orbitalY)
  i3308.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3309[9], i3308.orbitalZ)
  i3308.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3309[10], i3308.orbitalOffsetX)
  i3308.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3309[11], i3308.orbitalOffsetY)
  i3308.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3309[12], i3308.orbitalOffsetZ)
  return i3308
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i3310 = root || new pc.ParticleSystemNoise()
  var i3311 = data
  i3310.enabled = !!i3311[0]
  i3310.separateAxes = !!i3311[1]
  i3310.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3311[2], i3310.strengthX)
  i3310.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3311[3], i3310.strengthY)
  i3310.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3311[4], i3310.strengthZ)
  i3310.frequency = i3311[5]
  i3310.damping = !!i3311[6]
  i3310.octaveCount = i3311[7]
  i3310.octaveMultiplier = i3311[8]
  i3310.octaveScale = i3311[9]
  i3310.quality = i3311[10]
  i3310.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3311[11], i3310.scrollSpeed)
  i3310.scrollSpeedMultiplier = i3311[12]
  i3310.remapEnabled = !!i3311[13]
  i3310.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3311[14], i3310.remapX)
  i3310.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3311[15], i3310.remapY)
  i3310.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3311[16], i3310.remapZ)
  i3310.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3311[17], i3310.positionAmount)
  i3310.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3311[18], i3310.rotationAmount)
  i3310.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3311[19], i3310.sizeAmount)
  return i3310
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i3312 = root || new pc.ParticleSystemInheritVelocity()
  var i3313 = data
  i3312.enabled = !!i3313[0]
  i3312.mode = i3313[1]
  i3312.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3313[2], i3312.curve)
  return i3312
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i3314 = root || new pc.ParticleSystemForceOverLifetime()
  var i3315 = data
  i3314.enabled = !!i3315[0]
  i3314.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3315[1], i3314.x)
  i3314.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3315[2], i3314.y)
  i3314.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3315[3], i3314.z)
  i3314.space = i3315[4]
  i3314.randomized = !!i3315[5]
  return i3314
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i3316 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i3317 = data
  i3316.enabled = !!i3317[0]
  i3316.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3317[1], i3316.limit)
  i3316.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3317[2], i3316.limitX)
  i3316.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3317[3], i3316.limitY)
  i3316.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3317[4], i3316.limitZ)
  i3316.dampen = i3317[5]
  i3316.separateAxes = !!i3317[6]
  i3316.space = i3317[7]
  i3316.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3317[8], i3316.drag)
  i3316.multiplyDragByParticleSize = !!i3317[9]
  i3316.multiplyDragByParticleVelocity = !!i3317[10]
  return i3316
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i3318 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i3319 = data
  request.r(i3319[0], i3319[1], 0, i3318, 'mesh')
  i3318.meshCount = i3319[2]
  i3318.activeVertexStreamsCount = i3319[3]
  i3318.alignment = i3319[4]
  i3318.renderMode = i3319[5]
  i3318.sortMode = i3319[6]
  i3318.lengthScale = i3319[7]
  i3318.velocityScale = i3319[8]
  i3318.cameraVelocityScale = i3319[9]
  i3318.normalDirection = i3319[10]
  i3318.sortingFudge = i3319[11]
  i3318.minParticleSize = i3319[12]
  i3318.maxParticleSize = i3319[13]
  i3318.pivot = new pc.Vec3( i3319[14], i3319[15], i3319[16] )
  request.r(i3319[17], i3319[18], 0, i3318, 'trailMaterial')
  i3318.applyActiveColorSpace = !!i3319[19]
  i3318.enabled = !!i3319[20]
  request.r(i3319[21], i3319[22], 0, i3318, 'sharedMaterial')
  var i3321 = i3319[23]
  var i3320 = []
  for(var i = 0; i < i3321.length; i += 2) {
  request.r(i3321[i + 0], i3321[i + 1], 2, i3320, '')
  }
  i3318.sharedMaterials = i3320
  i3318.receiveShadows = !!i3319[24]
  i3318.shadowCastingMode = i3319[25]
  i3318.sortingLayerID = i3319[26]
  i3318.sortingOrder = i3319[27]
  i3318.lightmapIndex = i3319[28]
  i3318.lightmapSceneIndex = i3319[29]
  i3318.lightmapScaleOffset = new pc.Vec4( i3319[30], i3319[31], i3319[32], i3319[33] )
  i3318.lightProbeUsage = i3319[34]
  i3318.reflectionProbeUsage = i3319[35]
  return i3318
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i3324 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i3325 = data
  i3324.name = i3325[0]
  i3324.tagId = i3325[1]
  i3324.enabled = !!i3325[2]
  i3324.isStatic = !!i3325[3]
  i3324.layer = i3325[4]
  return i3324
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i3326 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i3327 = data
  i3326.color = new pc.Color(i3327[0], i3327[1], i3327[2], i3327[3])
  request.r(i3327[4], i3327[5], 0, i3326, 'sprite')
  i3326.flipX = !!i3327[6]
  i3326.flipY = !!i3327[7]
  i3326.drawMode = i3327[8]
  i3326.size = new pc.Vec2( i3327[9], i3327[10] )
  i3326.tileMode = i3327[11]
  i3326.adaptiveModeThreshold = i3327[12]
  i3326.maskInteraction = i3327[13]
  i3326.spriteSortPoint = i3327[14]
  i3326.enabled = !!i3327[15]
  request.r(i3327[16], i3327[17], 0, i3326, 'sharedMaterial')
  var i3329 = i3327[18]
  var i3328 = []
  for(var i = 0; i < i3329.length; i += 2) {
  request.r(i3329[i + 0], i3329[i + 1], 2, i3328, '')
  }
  i3326.sharedMaterials = i3328
  i3326.receiveShadows = !!i3327[19]
  i3326.shadowCastingMode = i3327[20]
  i3326.sortingLayerID = i3327[21]
  i3326.sortingOrder = i3327[22]
  i3326.lightmapIndex = i3327[23]
  i3326.lightmapSceneIndex = i3327[24]
  i3326.lightmapScaleOffset = new pc.Vec4( i3327[25], i3327[26], i3327[27], i3327[28] )
  i3326.lightProbeUsage = i3327[29]
  i3326.reflectionProbeUsage = i3327[30]
  return i3326
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i3330 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i3331 = data
  request.r(i3331[0], i3331[1], 0, i3330, 'animatorController')
  request.r(i3331[2], i3331[3], 0, i3330, 'avatar')
  i3330.updateMode = i3331[4]
  i3330.hasTransformHierarchy = !!i3331[5]
  i3330.applyRootMotion = !!i3331[6]
  var i3333 = i3331[7]
  var i3332 = []
  for(var i = 0; i < i3333.length; i += 2) {
  request.r(i3333[i + 0], i3333[i + 1], 2, i3332, '')
  }
  i3330.humanBones = i3332
  i3330.enabled = !!i3331[8]
  return i3330
}

Deserializers["MoveBetweenPoints"] = function (request, data, root) {
  var i3336 = root || request.c( 'MoveBetweenPoints' )
  var i3337 = data
  request.r(i3337[0], i3337[1], 0, i3336, 'pointA')
  request.r(i3337[2], i3337[3], 0, i3336, 'pointB')
  i3336.duration = i3337[4]
  return i3336
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i3338 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i3339 = data
  i3338.usedByComposite = !!i3339[0]
  i3338.autoTiling = !!i3339[1]
  i3338.size = new pc.Vec2( i3339[2], i3339[3] )
  i3338.edgeRadius = i3339[4]
  i3338.enabled = !!i3339[5]
  i3338.isTrigger = !!i3339[6]
  i3338.usedByEffector = !!i3339[7]
  i3338.density = i3339[8]
  i3338.offset = new pc.Vec2( i3339[9], i3339[10] )
  request.r(i3339[11], i3339[12], 0, i3338, 'material')
  return i3338
}

Deserializers["ClickToStore"] = function (request, data, root) {
  var i3340 = root || request.c( 'ClickToStore' )
  var i3341 = data
  return i3340
}

Deserializers["PlayerCardUIManager"] = function (request, data, root) {
  var i3342 = root || request.c( 'PlayerCardUIManager' )
  var i3343 = data
  request.r(i3343[0], i3343[1], 0, i3342, 'cardPanel')
  var i3345 = i3343[2]
  var i3344 = []
  for(var i = 0; i < i3345.length; i += 2) {
  request.r(i3345[i + 0], i3345[i + 1], 2, i3344, '')
  }
  i3342.extraObjectsToActivate = i3344
  i3342.waitTime = i3343[3]
  var i3347 = i3343[4]
  var i3346 = []
  for(var i = 0; i < i3347.length; i += 2) {
  request.r(i3347[i + 0], i3347[i + 1], 2, i3346, '')
  }
  i3342.objectsToTurnOnAfterWait = i3346
  var i3349 = i3343[5]
  var i3348 = []
  for(var i = 0; i < i3349.length; i += 2) {
  request.r(i3349[i + 0], i3349[i + 1], 2, i3348, '')
  }
  i3342.objectsToTurnOffAfterWait = i3348
  request.r(i3343[6], i3343[7], 0, i3342, 'nationalityText')
  request.r(i3343[8], i3343[9], 0, i3342, 'playerImage')
  request.r(i3343[10], i3343[11], 0, i3342, 'flagImage')
  return i3342
}

Deserializers["Ply_SoundManager"] = function (request, data, root) {
  var i3352 = root || request.c( 'Ply_SoundManager' )
  var i3353 = data
  i3352.fxAudio = request.d('FxAudio', i3353[0], i3352.fxAudio)
  request.r(i3353[1], i3353[2], 0, i3352, 'bgm1')
  return i3352
}

Deserializers["FxAudio"] = function (request, data, root) {
  var i3354 = root || request.c( 'FxAudio' )
  var i3355 = data
  i3354.ClickBox = request.d('SoundData', i3355[0], i3354.ClickBox)
  i3354.Happy = request.d('SoundData', i3355[1], i3354.Happy)
  i3354.Wrong = request.d('SoundData', i3355[2], i3354.Wrong)
  i3354.Spray = request.d('SoundData', i3355[3], i3354.Spray)
  i3354.Brush = request.d('SoundData', i3355[4], i3354.Brush)
  return i3354
}

Deserializers["SoundData"] = function (request, data, root) {
  var i3356 = root || request.c( 'SoundData' )
  var i3357 = data
  request.r(i3357[0], i3357[1], 0, i3356, 'clip')
  i3356.repeatCount = i3357[2]
  return i3356
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i3358 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i3359 = data
  request.r(i3359[0], i3359[1], 0, i3358, 'clip')
  request.r(i3359[2], i3359[3], 0, i3358, 'outputAudioMixerGroup')
  i3358.playOnAwake = !!i3359[4]
  i3358.loop = !!i3359[5]
  i3358.time = i3359[6]
  i3358.volume = i3359[7]
  i3358.pitch = i3359[8]
  i3358.enabled = !!i3359[9]
  return i3358
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i3360 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i3361 = data
  i3360.pivot = new pc.Vec2( i3361[0], i3361[1] )
  i3360.anchorMin = new pc.Vec2( i3361[2], i3361[3] )
  i3360.anchorMax = new pc.Vec2( i3361[4], i3361[5] )
  i3360.sizeDelta = new pc.Vec2( i3361[6], i3361[7] )
  i3360.anchoredPosition3D = new pc.Vec3( i3361[8], i3361[9], i3361[10] )
  i3360.rotation = new pc.Quat(i3361[11], i3361[12], i3361[13], i3361[14])
  i3360.scale = new pc.Vec3( i3361[15], i3361[16], i3361[17] )
  return i3360
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i3362 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i3363 = data
  i3362.planeDistance = i3363[0]
  i3362.referencePixelsPerUnit = i3363[1]
  i3362.isFallbackOverlay = !!i3363[2]
  i3362.renderMode = i3363[3]
  i3362.renderOrder = i3363[4]
  i3362.sortingLayerName = i3363[5]
  i3362.sortingOrder = i3363[6]
  i3362.scaleFactor = i3363[7]
  request.r(i3363[8], i3363[9], 0, i3362, 'worldCamera')
  i3362.overrideSorting = !!i3363[10]
  i3362.pixelPerfect = !!i3363[11]
  i3362.targetDisplay = i3363[12]
  i3362.overridePixelPerfect = !!i3363[13]
  i3362.enabled = !!i3363[14]
  return i3362
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i3364 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i3365 = data
  i3364.m_UiScaleMode = i3365[0]
  i3364.m_ReferencePixelsPerUnit = i3365[1]
  i3364.m_ScaleFactor = i3365[2]
  i3364.m_ReferenceResolution = new pc.Vec2( i3365[3], i3365[4] )
  i3364.m_ScreenMatchMode = i3365[5]
  i3364.m_MatchWidthOrHeight = i3365[6]
  i3364.m_PhysicalUnit = i3365[7]
  i3364.m_FallbackScreenDPI = i3365[8]
  i3364.m_DefaultSpriteDPI = i3365[9]
  i3364.m_DynamicPixelsPerUnit = i3365[10]
  i3364.m_PresetInfoIsWorld = !!i3365[11]
  return i3364
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i3366 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i3367 = data
  i3366.m_IgnoreReversedGraphics = !!i3367[0]
  i3366.m_BlockingObjects = i3367[1]
  i3366.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i3367[2] )
  return i3366
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i3368 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i3369 = data
  i3368.cullTransparentMesh = !!i3369[0]
  return i3368
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i3370 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i3371 = data
  i3370.m_hasFontAssetChanged = !!i3371[0]
  request.r(i3371[1], i3371[2], 0, i3370, 'm_baseMaterial')
  i3370.m_maskOffset = new pc.Vec4( i3371[3], i3371[4], i3371[5], i3371[6] )
  i3370.m_text = i3371[7]
  i3370.m_isRightToLeft = !!i3371[8]
  request.r(i3371[9], i3371[10], 0, i3370, 'm_fontAsset')
  request.r(i3371[11], i3371[12], 0, i3370, 'm_sharedMaterial')
  var i3373 = i3371[13]
  var i3372 = []
  for(var i = 0; i < i3373.length; i += 2) {
  request.r(i3373[i + 0], i3373[i + 1], 2, i3372, '')
  }
  i3370.m_fontSharedMaterials = i3372
  request.r(i3371[14], i3371[15], 0, i3370, 'm_fontMaterial')
  var i3375 = i3371[16]
  var i3374 = []
  for(var i = 0; i < i3375.length; i += 2) {
  request.r(i3375[i + 0], i3375[i + 1], 2, i3374, '')
  }
  i3370.m_fontMaterials = i3374
  i3370.m_fontColor32 = UnityEngine.Color32.ConstructColor(i3371[17], i3371[18], i3371[19], i3371[20])
  i3370.m_fontColor = new pc.Color(i3371[21], i3371[22], i3371[23], i3371[24])
  i3370.m_enableVertexGradient = !!i3371[25]
  i3370.m_colorMode = i3371[26]
  i3370.m_fontColorGradient = request.d('TMPro.VertexGradient', i3371[27], i3370.m_fontColorGradient)
  request.r(i3371[28], i3371[29], 0, i3370, 'm_fontColorGradientPreset')
  request.r(i3371[30], i3371[31], 0, i3370, 'm_spriteAsset')
  i3370.m_tintAllSprites = !!i3371[32]
  request.r(i3371[33], i3371[34], 0, i3370, 'm_StyleSheet')
  i3370.m_TextStyleHashCode = i3371[35]
  i3370.m_overrideHtmlColors = !!i3371[36]
  i3370.m_faceColor = UnityEngine.Color32.ConstructColor(i3371[37], i3371[38], i3371[39], i3371[40])
  i3370.m_fontSize = i3371[41]
  i3370.m_fontSizeBase = i3371[42]
  i3370.m_fontWeight = i3371[43]
  i3370.m_enableAutoSizing = !!i3371[44]
  i3370.m_fontSizeMin = i3371[45]
  i3370.m_fontSizeMax = i3371[46]
  i3370.m_fontStyle = i3371[47]
  i3370.m_HorizontalAlignment = i3371[48]
  i3370.m_VerticalAlignment = i3371[49]
  i3370.m_textAlignment = i3371[50]
  i3370.m_characterSpacing = i3371[51]
  i3370.m_wordSpacing = i3371[52]
  i3370.m_lineSpacing = i3371[53]
  i3370.m_lineSpacingMax = i3371[54]
  i3370.m_paragraphSpacing = i3371[55]
  i3370.m_charWidthMaxAdj = i3371[56]
  i3370.m_TextWrappingMode = i3371[57]
  i3370.m_wordWrappingRatios = i3371[58]
  i3370.m_overflowMode = i3371[59]
  request.r(i3371[60], i3371[61], 0, i3370, 'm_linkedTextComponent')
  request.r(i3371[62], i3371[63], 0, i3370, 'parentLinkedComponent')
  i3370.m_enableKerning = !!i3371[64]
  var i3377 = i3371[65]
  var i3376 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i3377.length; i += 1) {
    i3376.add(i3377[i + 0]);
  }
  i3370.m_ActiveFontFeatures = i3376
  i3370.m_enableExtraPadding = !!i3371[66]
  i3370.checkPaddingRequired = !!i3371[67]
  i3370.m_isRichText = !!i3371[68]
  i3370.m_parseCtrlCharacters = !!i3371[69]
  i3370.m_isOrthographic = !!i3371[70]
  i3370.m_isCullingEnabled = !!i3371[71]
  i3370.m_horizontalMapping = i3371[72]
  i3370.m_verticalMapping = i3371[73]
  i3370.m_uvLineOffset = i3371[74]
  i3370.m_geometrySortingOrder = i3371[75]
  i3370.m_IsTextObjectScaleStatic = !!i3371[76]
  i3370.m_VertexBufferAutoSizeReduction = !!i3371[77]
  i3370.m_useMaxVisibleDescender = !!i3371[78]
  i3370.m_pageToDisplay = i3371[79]
  i3370.m_margin = new pc.Vec4( i3371[80], i3371[81], i3371[82], i3371[83] )
  i3370.m_isUsingLegacyAnimationComponent = !!i3371[84]
  i3370.m_isVolumetricText = !!i3371[85]
  request.r(i3371[86], i3371[87], 0, i3370, 'm_Material')
  i3370.m_EmojiFallbackSupport = !!i3371[88]
  i3370.m_Maskable = !!i3371[89]
  i3370.m_Color = new pc.Color(i3371[90], i3371[91], i3371[92], i3371[93])
  i3370.m_RaycastTarget = !!i3371[94]
  i3370.m_RaycastPadding = new pc.Vec4( i3371[95], i3371[96], i3371[97], i3371[98] )
  return i3370
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i3378 = root || request.c( 'TMPro.VertexGradient' )
  var i3379 = data
  i3378.topLeft = new pc.Color(i3379[0], i3379[1], i3379[2], i3379[3])
  i3378.topRight = new pc.Color(i3379[4], i3379[5], i3379[6], i3379[7])
  i3378.bottomLeft = new pc.Color(i3379[8], i3379[9], i3379[10], i3379[11])
  i3378.bottomRight = new pc.Color(i3379[12], i3379[13], i3379[14], i3379[15])
  return i3378
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

Deserializers["Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D"] = function (request, data, root) {
  var i3384 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D' )
  var i3385 = data
  i3384.usedByComposite = !!i3385[0]
  i3384.autoTiling = !!i3385[1]
  var i3387 = i3385[2]
  var i3386 = []
  for(var i = 0; i < i3387.length; i += 1) {
  var i3389 = i3387[i + 0]
  var i3388 = []
  for(var i = 0; i < i3389.length; i += 2) {
    i3388.push( new pc.Vec2( i3389[i + 0], i3389[i + 1] ) );
  }
    i3386.push( i3388 );
  }
  i3384.points = i3386
  i3384.enabled = !!i3385[3]
  i3384.isTrigger = !!i3385[4]
  i3384.usedByEffector = !!i3385[5]
  i3384.density = i3385[6]
  i3384.offset = new pc.Vec2( i3385[7], i3385[8] )
  request.r(i3385[9], i3385[10], 0, i3384, 'material')
  return i3384
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i3396 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i3397 = data
  i3396.bodyType = i3397[0]
  request.r(i3397[1], i3397[2], 0, i3396, 'material')
  i3396.simulated = !!i3397[3]
  i3396.useAutoMass = !!i3397[4]
  i3396.mass = i3397[5]
  i3396.drag = i3397[6]
  i3396.angularDrag = i3397[7]
  i3396.gravityScale = i3397[8]
  i3396.collisionDetectionMode = i3397[9]
  i3396.sleepMode = i3397[10]
  i3396.constraints = i3397[11]
  return i3396
}

Deserializers["BatStrikeController"] = function (request, data, root) {
  var i3398 = root || request.c( 'BatStrikeController' )
  var i3399 = data
  i3398.pullSpeed = i3399[0]
  i3398.maxPullDistance = i3399[1]
  i3398.minHoldTime = i3399[2]
  i3398.strikeForce = i3399[3]
  i3398.targetTag = i3399[4]
  return i3398
}

Deserializers["CupCollision"] = function (request, data, root) {
  var i3400 = root || request.c( 'CupCollision' )
  var i3401 = data
  i3400.baseTag = i3401[0]
  request.r(i3401[1], i3401[2], 0, i3400, 'objectToActivate')
  return i3400
}

Deserializers["SlotTrigger"] = function (request, data, root) {
  var i3402 = root || request.c( 'SlotTrigger' )
  var i3403 = data
  request.r(i3403[0], i3403[1], 0, i3402, 'cardData')
  i3402.targetTag = i3403[2]
  request.r(i3403[3], i3403[4], 0, i3402, 'yAnchor')
  i3402.moveSpeed = i3403[5]
  request.r(i3403[6], i3403[7], 0, i3402, 'objectToMoveDown')
  i3402.targetScreenYRatio = i3403[8]
  return i3402
}

Deserializers["HideOnFirstClick"] = function (request, data, root) {
  var i3404 = root || request.c( 'HideOnFirstClick' )
  var i3405 = data
  request.r(i3405[0], i3405[1], 0, i3404, 'objectToHide')
  return i3404
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i3406 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i3407 = data
  request.r(i3407[0], i3407[1], 0, i3406, 'm_FirstSelected')
  i3406.m_sendNavigationEvents = !!i3407[2]
  i3406.m_DragThreshold = i3407[3]
  return i3406
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i3408 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i3409 = data
  i3408.m_HorizontalAxis = i3409[0]
  i3408.m_VerticalAxis = i3409[1]
  i3408.m_SubmitButton = i3409[2]
  i3408.m_CancelButton = i3409[3]
  i3408.m_InputActionsPerSecond = i3409[4]
  i3408.m_RepeatDelay = i3409[5]
  i3408.m_ForceModuleActive = !!i3409[6]
  i3408.m_SendPointerHoverToParent = !!i3409[7]
  return i3408
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i3410 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i3411 = data
  i3410.ambientIntensity = i3411[0]
  i3410.reflectionIntensity = i3411[1]
  i3410.ambientMode = i3411[2]
  i3410.ambientLight = new pc.Color(i3411[3], i3411[4], i3411[5], i3411[6])
  i3410.ambientSkyColor = new pc.Color(i3411[7], i3411[8], i3411[9], i3411[10])
  i3410.ambientGroundColor = new pc.Color(i3411[11], i3411[12], i3411[13], i3411[14])
  i3410.ambientEquatorColor = new pc.Color(i3411[15], i3411[16], i3411[17], i3411[18])
  i3410.fogColor = new pc.Color(i3411[19], i3411[20], i3411[21], i3411[22])
  i3410.fogEndDistance = i3411[23]
  i3410.fogStartDistance = i3411[24]
  i3410.fogDensity = i3411[25]
  i3410.fog = !!i3411[26]
  request.r(i3411[27], i3411[28], 0, i3410, 'skybox')
  i3410.fogMode = i3411[29]
  var i3413 = i3411[30]
  var i3412 = []
  for(var i = 0; i < i3413.length; i += 1) {
    i3412.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i3413[i + 0]) );
  }
  i3410.lightmaps = i3412
  i3410.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i3411[31], i3410.lightProbes)
  i3410.lightmapsMode = i3411[32]
  i3410.mixedBakeMode = i3411[33]
  i3410.environmentLightingMode = i3411[34]
  i3410.ambientProbe = new pc.SphericalHarmonicsL2(i3411[35])
  i3410.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i3411[36])
  i3410.useReferenceAmbientProbe = !!i3411[37]
  request.r(i3411[38], i3411[39], 0, i3410, 'customReflection')
  request.r(i3411[40], i3411[41], 0, i3410, 'defaultReflection')
  i3410.defaultReflectionMode = i3411[42]
  i3410.defaultReflectionResolution = i3411[43]
  i3410.sunLightObjectId = i3411[44]
  i3410.pixelLightCount = i3411[45]
  i3410.defaultReflectionHDR = !!i3411[46]
  i3410.hasLightDataAsset = !!i3411[47]
  i3410.hasManualGenerate = !!i3411[48]
  return i3410
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i3416 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i3417 = data
  request.r(i3417[0], i3417[1], 0, i3416, 'lightmapColor')
  request.r(i3417[2], i3417[3], 0, i3416, 'lightmapDirection')
  request.r(i3417[4], i3417[5], 0, i3416, 'shadowMask')
  return i3416
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i3418 = root || new UnityEngine.LightProbes()
  var i3419 = data
  return i3418
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.PhysicsMaterial2D"] = function (request, data, root) {
  var i3426 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.PhysicsMaterial2D' )
  var i3427 = data
  i3426.name = i3427[0]
  i3426.bounciness = i3427[1]
  i3426.friction = i3427[2]
  return i3426
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i3428 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i3429 = data
  var i3431 = i3429[0]
  var i3430 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i3431.length; i += 1) {
    i3430.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i3431[i + 0]));
  }
  i3428.ShaderCompilationErrors = i3430
  i3428.name = i3429[1]
  i3428.guid = i3429[2]
  var i3433 = i3429[3]
  var i3432 = []
  for(var i = 0; i < i3433.length; i += 1) {
    i3432.push( i3433[i + 0] );
  }
  i3428.shaderDefinedKeywords = i3432
  var i3435 = i3429[4]
  var i3434 = []
  for(var i = 0; i < i3435.length; i += 1) {
    i3434.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i3435[i + 0]) );
  }
  i3428.passes = i3434
  var i3437 = i3429[5]
  var i3436 = []
  for(var i = 0; i < i3437.length; i += 1) {
    i3436.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i3437[i + 0]) );
  }
  i3428.usePasses = i3436
  var i3439 = i3429[6]
  var i3438 = []
  for(var i = 0; i < i3439.length; i += 1) {
    i3438.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i3439[i + 0]) );
  }
  i3428.defaultParameterValues = i3438
  request.r(i3429[7], i3429[8], 0, i3428, 'unityFallbackShader')
  i3428.readDepth = !!i3429[9]
  i3428.hasDepthOnlyPass = !!i3429[10]
  i3428.isCreatedByShaderGraph = !!i3429[11]
  i3428.disableBatching = !!i3429[12]
  i3428.compiled = !!i3429[13]
  return i3428
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i3442 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i3443 = data
  i3442.shaderName = i3443[0]
  i3442.errorMessage = i3443[1]
  return i3442
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i3448 = root || new pc.UnityShaderPass()
  var i3449 = data
  i3448.id = i3449[0]
  i3448.subShaderIndex = i3449[1]
  i3448.name = i3449[2]
  i3448.passType = i3449[3]
  i3448.grabPassTextureName = i3449[4]
  i3448.usePass = !!i3449[5]
  i3448.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3449[6], i3448.zTest)
  i3448.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3449[7], i3448.zWrite)
  i3448.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3449[8], i3448.culling)
  i3448.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i3449[9], i3448.blending)
  i3448.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i3449[10], i3448.alphaBlending)
  i3448.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3449[11], i3448.colorWriteMask)
  i3448.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3449[12], i3448.offsetUnits)
  i3448.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3449[13], i3448.offsetFactor)
  i3448.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3449[14], i3448.stencilRef)
  i3448.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3449[15], i3448.stencilReadMask)
  i3448.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3449[16], i3448.stencilWriteMask)
  i3448.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3449[17], i3448.stencilOp)
  i3448.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3449[18], i3448.stencilOpFront)
  i3448.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3449[19], i3448.stencilOpBack)
  var i3451 = i3449[20]
  var i3450 = []
  for(var i = 0; i < i3451.length; i += 1) {
    i3450.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i3451[i + 0]) );
  }
  i3448.tags = i3450
  var i3453 = i3449[21]
  var i3452 = []
  for(var i = 0; i < i3453.length; i += 1) {
    i3452.push( i3453[i + 0] );
  }
  i3448.passDefinedKeywords = i3452
  var i3455 = i3449[22]
  var i3454 = []
  for(var i = 0; i < i3455.length; i += 1) {
    i3454.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i3455[i + 0]) );
  }
  i3448.passDefinedKeywordGroups = i3454
  var i3457 = i3449[23]
  var i3456 = []
  for(var i = 0; i < i3457.length; i += 1) {
    i3456.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i3457[i + 0]) );
  }
  i3448.variants = i3456
  var i3459 = i3449[24]
  var i3458 = []
  for(var i = 0; i < i3459.length; i += 1) {
    i3458.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i3459[i + 0]) );
  }
  i3448.excludedVariants = i3458
  i3448.hasDepthReader = !!i3449[25]
  return i3448
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i3460 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i3461 = data
  i3460.val = i3461[0]
  i3460.name = i3461[1]
  return i3460
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i3462 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i3463 = data
  i3462.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3463[0], i3462.src)
  i3462.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3463[1], i3462.dst)
  i3462.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3463[2], i3462.op)
  return i3462
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i3464 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i3465 = data
  i3464.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3465[0], i3464.pass)
  i3464.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3465[1], i3464.fail)
  i3464.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3465[2], i3464.zFail)
  i3464.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3465[3], i3464.comp)
  return i3464
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i3468 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i3469 = data
  i3468.name = i3469[0]
  i3468.value = i3469[1]
  return i3468
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i3472 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i3473 = data
  var i3475 = i3473[0]
  var i3474 = []
  for(var i = 0; i < i3475.length; i += 1) {
    i3474.push( i3475[i + 0] );
  }
  i3472.keywords = i3474
  i3472.hasDiscard = !!i3473[1]
  return i3472
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i3478 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i3479 = data
  i3478.passId = i3479[0]
  i3478.subShaderIndex = i3479[1]
  var i3481 = i3479[2]
  var i3480 = []
  for(var i = 0; i < i3481.length; i += 1) {
    i3480.push( i3481[i + 0] );
  }
  i3478.keywords = i3480
  i3478.vertexProgram = i3479[3]
  i3478.fragmentProgram = i3479[4]
  i3478.exportedForWebGl2 = !!i3479[5]
  i3478.readDepth = !!i3479[6]
  return i3478
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i3484 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i3485 = data
  request.r(i3485[0], i3485[1], 0, i3484, 'shader')
  i3484.pass = i3485[2]
  return i3484
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i3488 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i3489 = data
  i3488.name = i3489[0]
  i3488.type = i3489[1]
  i3488.value = new pc.Vec4( i3489[2], i3489[3], i3489[4], i3489[5] )
  i3488.textureValue = i3489[6]
  i3488.shaderPropertyFlag = i3489[7]
  return i3488
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i3490 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i3491 = data
  i3490.name = i3491[0]
  request.r(i3491[1], i3491[2], 0, i3490, 'texture')
  i3490.aabb = i3491[3]
  i3490.vertices = i3491[4]
  i3490.triangles = i3491[5]
  i3490.textureRect = UnityEngine.Rect.MinMaxRect(i3491[6], i3491[7], i3491[8], i3491[9])
  i3490.packedRect = UnityEngine.Rect.MinMaxRect(i3491[10], i3491[11], i3491[12], i3491[13])
  i3490.border = new pc.Vec4( i3491[14], i3491[15], i3491[16], i3491[17] )
  i3490.transparency = i3491[18]
  i3490.bounds = i3491[19]
  i3490.pixelsPerUnit = i3491[20]
  i3490.textureWidth = i3491[21]
  i3490.textureHeight = i3491[22]
  i3490.nativeSize = new pc.Vec2( i3491[23], i3491[24] )
  i3490.pivot = new pc.Vec2( i3491[25], i3491[26] )
  i3490.textureRectOffset = new pc.Vec2( i3491[27], i3491[28] )
  return i3490
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i3492 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i3493 = data
  i3492.name = i3493[0]
  return i3492
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i3494 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i3495 = data
  i3494.name = i3495[0]
  i3494.wrapMode = i3495[1]
  i3494.isLooping = !!i3495[2]
  i3494.length = i3495[3]
  var i3497 = i3495[4]
  var i3496 = []
  for(var i = 0; i < i3497.length; i += 1) {
    i3496.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i3497[i + 0]) );
  }
  i3494.curves = i3496
  var i3499 = i3495[5]
  var i3498 = []
  for(var i = 0; i < i3499.length; i += 1) {
    i3498.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i3499[i + 0]) );
  }
  i3494.events = i3498
  i3494.halfPrecision = !!i3495[6]
  i3494._frameRate = i3495[7]
  i3494.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i3495[8], i3494.localBounds)
  i3494.hasMuscleCurves = !!i3495[9]
  var i3501 = i3495[10]
  var i3500 = []
  for(var i = 0; i < i3501.length; i += 1) {
    i3500.push( i3501[i + 0] );
  }
  i3494.clipMuscleConstant = i3500
  i3494.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i3495[11], i3494.clipBindingConstant)
  return i3494
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i3504 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i3505 = data
  i3504.path = i3505[0]
  i3504.hash = i3505[1]
  i3504.componentType = i3505[2]
  i3504.property = i3505[3]
  i3504.keys = i3505[4]
  var i3507 = i3505[5]
  var i3506 = []
  for(var i = 0; i < i3507.length; i += 1) {
    i3506.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i3507[i + 0]) );
  }
  i3504.objectReferenceKeys = i3506
  return i3504
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i3510 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i3511 = data
  i3510.time = i3511[0]
  request.r(i3511[1], i3511[2], 0, i3510, 'value')
  return i3510
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i3514 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i3515 = data
  i3514.functionName = i3515[0]
  i3514.floatParameter = i3515[1]
  i3514.intParameter = i3515[2]
  i3514.stringParameter = i3515[3]
  request.r(i3515[4], i3515[5], 0, i3514, 'objectReferenceParameter')
  i3514.time = i3515[6]
  return i3514
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i3516 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i3517 = data
  i3516.center = new pc.Vec3( i3517[0], i3517[1], i3517[2] )
  i3516.extends = new pc.Vec3( i3517[3], i3517[4], i3517[5] )
  return i3516
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i3520 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i3521 = data
  var i3523 = i3521[0]
  var i3522 = []
  for(var i = 0; i < i3523.length; i += 1) {
    i3522.push( i3523[i + 0] );
  }
  i3520.genericBindings = i3522
  var i3525 = i3521[1]
  var i3524 = []
  for(var i = 0; i < i3525.length; i += 1) {
    i3524.push( i3525[i + 0] );
  }
  i3520.pptrCurveMapping = i3524
  return i3520
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i3526 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i3527 = data
  i3526.name = i3527[0]
  i3526.ascent = i3527[1]
  i3526.originalLineHeight = i3527[2]
  i3526.fontSize = i3527[3]
  var i3529 = i3527[4]
  var i3528 = []
  for(var i = 0; i < i3529.length; i += 1) {
    i3528.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i3529[i + 0]) );
  }
  i3526.characterInfo = i3528
  request.r(i3527[5], i3527[6], 0, i3526, 'texture')
  i3526.originalFontSize = i3527[7]
  return i3526
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i3532 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i3533 = data
  i3532.index = i3533[0]
  i3532.advance = i3533[1]
  i3532.bearing = i3533[2]
  i3532.glyphWidth = i3533[3]
  i3532.glyphHeight = i3533[4]
  i3532.minX = i3533[5]
  i3532.maxX = i3533[6]
  i3532.minY = i3533[7]
  i3532.maxY = i3533[8]
  i3532.uvBottomLeftX = i3533[9]
  i3532.uvBottomLeftY = i3533[10]
  i3532.uvBottomRightX = i3533[11]
  i3532.uvBottomRightY = i3533[12]
  i3532.uvTopLeftX = i3533[13]
  i3532.uvTopLeftY = i3533[14]
  i3532.uvTopRightX = i3533[15]
  i3532.uvTopRightY = i3533[16]
  return i3532
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i3534 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i3535 = data
  i3534.name = i3535[0]
  var i3537 = i3535[1]
  var i3536 = []
  for(var i = 0; i < i3537.length; i += 1) {
    i3536.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i3537[i + 0]) );
  }
  i3534.layers = i3536
  var i3539 = i3535[2]
  var i3538 = []
  for(var i = 0; i < i3539.length; i += 1) {
    i3538.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i3539[i + 0]) );
  }
  i3534.parameters = i3538
  i3534.animationClips = i3535[3]
  i3534.avatarUnsupported = i3535[4]
  return i3534
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i3542 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i3543 = data
  i3542.name = i3543[0]
  i3542.defaultWeight = i3543[1]
  i3542.blendingMode = i3543[2]
  i3542.avatarMask = i3543[3]
  i3542.syncedLayerIndex = i3543[4]
  i3542.syncedLayerAffectsTiming = !!i3543[5]
  i3542.syncedLayers = i3543[6]
  i3542.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i3543[7], i3542.stateMachine)
  return i3542
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i3544 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i3545 = data
  i3544.id = i3545[0]
  i3544.name = i3545[1]
  i3544.path = i3545[2]
  var i3547 = i3545[3]
  var i3546 = []
  for(var i = 0; i < i3547.length; i += 1) {
    i3546.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i3547[i + 0]) );
  }
  i3544.states = i3546
  var i3549 = i3545[4]
  var i3548 = []
  for(var i = 0; i < i3549.length; i += 1) {
    i3548.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i3549[i + 0]) );
  }
  i3544.machines = i3548
  var i3551 = i3545[5]
  var i3550 = []
  for(var i = 0; i < i3551.length; i += 1) {
    i3550.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i3551[i + 0]) );
  }
  i3544.entryStateTransitions = i3550
  var i3553 = i3545[6]
  var i3552 = []
  for(var i = 0; i < i3553.length; i += 1) {
    i3552.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i3553[i + 0]) );
  }
  i3544.exitStateTransitions = i3552
  var i3555 = i3545[7]
  var i3554 = []
  for(var i = 0; i < i3555.length; i += 1) {
    i3554.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i3555[i + 0]) );
  }
  i3544.anyStateTransitions = i3554
  i3544.defaultStateId = i3545[8]
  return i3544
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i3558 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i3559 = data
  i3558.id = i3559[0]
  i3558.name = i3559[1]
  i3558.cycleOffset = i3559[2]
  i3558.cycleOffsetParameter = i3559[3]
  i3558.cycleOffsetParameterActive = !!i3559[4]
  i3558.mirror = !!i3559[5]
  i3558.mirrorParameter = i3559[6]
  i3558.mirrorParameterActive = !!i3559[7]
  i3558.motionId = i3559[8]
  i3558.nameHash = i3559[9]
  i3558.fullPathHash = i3559[10]
  i3558.speed = i3559[11]
  i3558.speedParameter = i3559[12]
  i3558.speedParameterActive = !!i3559[13]
  i3558.tag = i3559[14]
  i3558.tagHash = i3559[15]
  i3558.writeDefaultValues = !!i3559[16]
  var i3561 = i3559[17]
  var i3560 = []
  for(var i = 0; i < i3561.length; i += 2) {
  request.r(i3561[i + 0], i3561[i + 1], 2, i3560, '')
  }
  i3558.behaviours = i3560
  var i3563 = i3559[18]
  var i3562 = []
  for(var i = 0; i < i3563.length; i += 1) {
    i3562.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i3563[i + 0]) );
  }
  i3558.transitions = i3562
  return i3558
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i3568 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i3569 = data
  i3568.fullPath = i3569[0]
  i3568.canTransitionToSelf = !!i3569[1]
  i3568.duration = i3569[2]
  i3568.exitTime = i3569[3]
  i3568.hasExitTime = !!i3569[4]
  i3568.hasFixedDuration = !!i3569[5]
  i3568.interruptionSource = i3569[6]
  i3568.offset = i3569[7]
  i3568.orderedInterruption = !!i3569[8]
  i3568.destinationStateId = i3569[9]
  i3568.isExit = !!i3569[10]
  i3568.mute = !!i3569[11]
  i3568.solo = !!i3569[12]
  var i3571 = i3569[13]
  var i3570 = []
  for(var i = 0; i < i3571.length; i += 1) {
    i3570.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i3571[i + 0]) );
  }
  i3568.conditions = i3570
  return i3568
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i3576 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i3577 = data
  i3576.destinationStateId = i3577[0]
  i3576.isExit = !!i3577[1]
  i3576.mute = !!i3577[2]
  i3576.solo = !!i3577[3]
  var i3579 = i3577[4]
  var i3578 = []
  for(var i = 0; i < i3579.length; i += 1) {
    i3578.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i3579[i + 0]) );
  }
  i3576.conditions = i3578
  return i3576
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i3582 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i3583 = data
  i3582.defaultBool = !!i3583[0]
  i3582.defaultFloat = i3583[1]
  i3582.defaultInt = i3583[2]
  i3582.name = i3583[3]
  i3582.nameHash = i3583[4]
  i3582.type = i3583[5]
  return i3582
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i3584 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i3585 = data
  i3584.name = i3585[0]
  i3584.bytes64 = i3585[1]
  i3584.data = i3585[2]
  return i3584
}

Deserializers["PlayerCardData"] = function (request, data, root) {
  var i3586 = root || request.c( 'PlayerCardData' )
  var i3587 = data
  i3586.nationality = i3587[0]
  request.r(i3587[1], i3587[2], 0, i3586, 'playerSprite')
  request.r(i3587[3], i3587[4], 0, i3586, 'flagSprite')
  return i3586
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i3588 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i3589 = data
  i3588.normalStyle = i3589[0]
  i3588.normalSpacingOffset = i3589[1]
  i3588.boldStyle = i3589[2]
  i3588.boldSpacing = i3589[3]
  i3588.italicStyle = i3589[4]
  i3588.tabSize = i3589[5]
  request.r(i3589[6], i3589[7], 0, i3588, 'atlas')
  i3588.m_SourceFontFileGUID = i3589[8]
  i3588.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i3589[9], i3588.m_CreationSettings)
  request.r(i3589[10], i3589[11], 0, i3588, 'm_SourceFontFile')
  i3588.m_SourceFontFilePath = i3589[12]
  i3588.m_AtlasPopulationMode = i3589[13]
  i3588.InternalDynamicOS = !!i3589[14]
  var i3591 = i3589[15]
  var i3590 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i3591.length; i += 1) {
    i3590.add(request.d('UnityEngine.TextCore.Glyph', i3591[i + 0]));
  }
  i3588.m_GlyphTable = i3590
  var i3593 = i3589[16]
  var i3592 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i3593.length; i += 1) {
    i3592.add(request.d('TMPro.TMP_Character', i3593[i + 0]));
  }
  i3588.m_CharacterTable = i3592
  var i3595 = i3589[17]
  var i3594 = []
  for(var i = 0; i < i3595.length; i += 2) {
  request.r(i3595[i + 0], i3595[i + 1], 2, i3594, '')
  }
  i3588.m_AtlasTextures = i3594
  i3588.m_AtlasTextureIndex = i3589[18]
  i3588.m_IsMultiAtlasTexturesEnabled = !!i3589[19]
  i3588.m_GetFontFeatures = !!i3589[20]
  i3588.m_ClearDynamicDataOnBuild = !!i3589[21]
  i3588.m_AtlasWidth = i3589[22]
  i3588.m_AtlasHeight = i3589[23]
  i3588.m_AtlasPadding = i3589[24]
  i3588.m_AtlasRenderMode = i3589[25]
  var i3597 = i3589[26]
  var i3596 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i3597.length; i += 1) {
    i3596.add(request.d('UnityEngine.TextCore.GlyphRect', i3597[i + 0]));
  }
  i3588.m_UsedGlyphRects = i3596
  var i3599 = i3589[27]
  var i3598 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i3599.length; i += 1) {
    i3598.add(request.d('UnityEngine.TextCore.GlyphRect', i3599[i + 0]));
  }
  i3588.m_FreeGlyphRects = i3598
  i3588.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i3589[28], i3588.m_FontFeatureTable)
  i3588.m_ShouldReimportFontFeatures = !!i3589[29]
  var i3601 = i3589[30]
  var i3600 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i3601.length; i += 2) {
  request.r(i3601[i + 0], i3601[i + 1], 1, i3600, '')
  }
  i3588.m_FallbackFontAssetTable = i3600
  var i3603 = i3589[31]
  var i3602 = []
  for(var i = 0; i < i3603.length; i += 1) {
    i3602.push( request.d('TMPro.TMP_FontWeightPair', i3603[i + 0]) );
  }
  i3588.m_FontWeightTable = i3602
  var i3605 = i3589[32]
  var i3604 = []
  for(var i = 0; i < i3605.length; i += 1) {
    i3604.push( request.d('TMPro.TMP_FontWeightPair', i3605[i + 0]) );
  }
  i3588.fontWeights = i3604
  i3588.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i3589[33], i3588.m_fontInfo)
  var i3607 = i3589[34]
  var i3606 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i3607.length; i += 1) {
    i3606.add(request.d('TMPro.TMP_Glyph', i3607[i + 0]));
  }
  i3588.m_glyphInfoList = i3606
  i3588.m_KerningTable = request.d('TMPro.KerningTable', i3589[35], i3588.m_KerningTable)
  var i3609 = i3589[36]
  var i3608 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i3609.length; i += 2) {
  request.r(i3609[i + 0], i3609[i + 1], 1, i3608, '')
  }
  i3588.fallbackFontAssets = i3608
  i3588.m_Version = i3589[37]
  i3588.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i3589[38], i3588.m_FaceInfo)
  request.r(i3589[39], i3589[40], 0, i3588, 'm_Material')
  return i3588
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i3610 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i3611 = data
  i3610.sourceFontFileName = i3611[0]
  i3610.sourceFontFileGUID = i3611[1]
  i3610.faceIndex = i3611[2]
  i3610.pointSizeSamplingMode = i3611[3]
  i3610.pointSize = i3611[4]
  i3610.padding = i3611[5]
  i3610.paddingMode = i3611[6]
  i3610.packingMode = i3611[7]
  i3610.atlasWidth = i3611[8]
  i3610.atlasHeight = i3611[9]
  i3610.characterSetSelectionMode = i3611[10]
  i3610.characterSequence = i3611[11]
  i3610.referencedFontAssetGUID = i3611[12]
  i3610.referencedTextAssetGUID = i3611[13]
  i3610.fontStyle = i3611[14]
  i3610.fontStyleModifier = i3611[15]
  i3610.renderMode = i3611[16]
  i3610.includeFontFeatures = !!i3611[17]
  return i3610
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i3614 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i3615 = data
  i3614.m_Index = i3615[0]
  i3614.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i3615[1], i3614.m_Metrics)
  i3614.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i3615[2], i3614.m_GlyphRect)
  i3614.m_Scale = i3615[3]
  i3614.m_AtlasIndex = i3615[4]
  i3614.m_ClassDefinitionType = i3615[5]
  return i3614
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i3616 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i3617 = data
  i3616.m_Width = i3617[0]
  i3616.m_Height = i3617[1]
  i3616.m_HorizontalBearingX = i3617[2]
  i3616.m_HorizontalBearingY = i3617[3]
  i3616.m_HorizontalAdvance = i3617[4]
  return i3616
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i3618 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i3619 = data
  i3618.m_X = i3619[0]
  i3618.m_Y = i3619[1]
  i3618.m_Width = i3619[2]
  i3618.m_Height = i3619[3]
  return i3618
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i3622 = root || request.c( 'TMPro.TMP_Character' )
  var i3623 = data
  i3622.m_ElementType = i3623[0]
  i3622.m_Unicode = i3623[1]
  i3622.m_GlyphIndex = i3623[2]
  i3622.m_Scale = i3623[3]
  return i3622
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i3628 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i3629 = data
  var i3631 = i3629[0]
  var i3630 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i3631.length; i += 1) {
    i3630.add(request.d('TMPro.MultipleSubstitutionRecord', i3631[i + 0]));
  }
  i3628.m_MultipleSubstitutionRecords = i3630
  var i3633 = i3629[1]
  var i3632 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i3633.length; i += 1) {
    i3632.add(request.d('TMPro.LigatureSubstitutionRecord', i3633[i + 0]));
  }
  i3628.m_LigatureSubstitutionRecords = i3632
  var i3635 = i3629[2]
  var i3634 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i3635.length; i += 1) {
    i3634.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i3635[i + 0]));
  }
  i3628.m_GlyphPairAdjustmentRecords = i3634
  var i3637 = i3629[3]
  var i3636 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i3637.length; i += 1) {
    i3636.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i3637[i + 0]));
  }
  i3628.m_MarkToBaseAdjustmentRecords = i3636
  var i3639 = i3629[4]
  var i3638 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i3639.length; i += 1) {
    i3638.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i3639[i + 0]));
  }
  i3628.m_MarkToMarkAdjustmentRecords = i3638
  return i3628
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i3642 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i3643 = data
  i3642.m_TargetGlyphID = i3643[0]
  i3642.m_SubstituteGlyphIDs = i3643[1]
  return i3642
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i3646 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i3647 = data
  i3646.m_ComponentGlyphIDs = i3647[0]
  i3646.m_LigatureGlyphID = i3647[1]
  return i3646
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i3650 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i3651 = data
  i3650.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i3651[0], i3650.m_FirstAdjustmentRecord)
  i3650.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i3651[1], i3650.m_SecondAdjustmentRecord)
  i3650.m_FeatureLookupFlags = i3651[2]
  return i3650
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i3652 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i3653 = data
  i3652.m_GlyphIndex = i3653[0]
  i3652.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i3653[1], i3652.m_GlyphValueRecord)
  return i3652
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i3654 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i3655 = data
  i3654.m_XPlacement = i3655[0]
  i3654.m_YPlacement = i3655[1]
  i3654.m_XAdvance = i3655[2]
  i3654.m_YAdvance = i3655[3]
  return i3654
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i3658 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i3659 = data
  i3658.m_BaseGlyphID = i3659[0]
  i3658.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i3659[1], i3658.m_BaseGlyphAnchorPoint)
  i3658.m_MarkGlyphID = i3659[2]
  i3658.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i3659[3], i3658.m_MarkPositionAdjustment)
  return i3658
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i3662 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i3663 = data
  i3662.m_BaseMarkGlyphID = i3663[0]
  i3662.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i3663[1], i3662.m_BaseMarkGlyphAnchorPoint)
  i3662.m_CombiningMarkGlyphID = i3663[2]
  i3662.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i3663[3], i3662.m_CombiningMarkPositionAdjustment)
  return i3662
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i3668 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i3669 = data
  request.r(i3669[0], i3669[1], 0, i3668, 'regularTypeface')
  request.r(i3669[2], i3669[3], 0, i3668, 'italicTypeface')
  return i3668
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i3670 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i3671 = data
  i3670.Name = i3671[0]
  i3670.PointSize = i3671[1]
  i3670.Scale = i3671[2]
  i3670.CharacterCount = i3671[3]
  i3670.LineHeight = i3671[4]
  i3670.Baseline = i3671[5]
  i3670.Ascender = i3671[6]
  i3670.CapHeight = i3671[7]
  i3670.Descender = i3671[8]
  i3670.CenterLine = i3671[9]
  i3670.SuperscriptOffset = i3671[10]
  i3670.SubscriptOffset = i3671[11]
  i3670.SubSize = i3671[12]
  i3670.Underline = i3671[13]
  i3670.UnderlineThickness = i3671[14]
  i3670.strikethrough = i3671[15]
  i3670.strikethroughThickness = i3671[16]
  i3670.TabWidth = i3671[17]
  i3670.Padding = i3671[18]
  i3670.AtlasWidth = i3671[19]
  i3670.AtlasHeight = i3671[20]
  return i3670
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i3674 = root || request.c( 'TMPro.TMP_Glyph' )
  var i3675 = data
  i3674.id = i3675[0]
  i3674.x = i3675[1]
  i3674.y = i3675[2]
  i3674.width = i3675[3]
  i3674.height = i3675[4]
  i3674.xOffset = i3675[5]
  i3674.yOffset = i3675[6]
  i3674.xAdvance = i3675[7]
  i3674.scale = i3675[8]
  return i3674
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i3676 = root || request.c( 'TMPro.KerningTable' )
  var i3677 = data
  var i3679 = i3677[0]
  var i3678 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i3679.length; i += 1) {
    i3678.add(request.d('TMPro.KerningPair', i3679[i + 0]));
  }
  i3676.kerningPairs = i3678
  return i3676
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i3682 = root || request.c( 'TMPro.KerningPair' )
  var i3683 = data
  i3682.xOffset = i3683[0]
  i3682.m_FirstGlyph = i3683[1]
  i3682.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i3683[2], i3682.m_FirstGlyphAdjustments)
  i3682.m_SecondGlyph = i3683[3]
  i3682.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i3683[4], i3682.m_SecondGlyphAdjustments)
  i3682.m_IgnoreSpacingAdjustments = !!i3683[5]
  return i3682
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i3684 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i3685 = data
  i3684.m_FaceIndex = i3685[0]
  i3684.m_FamilyName = i3685[1]
  i3684.m_StyleName = i3685[2]
  i3684.m_PointSize = i3685[3]
  i3684.m_Scale = i3685[4]
  i3684.m_UnitsPerEM = i3685[5]
  i3684.m_LineHeight = i3685[6]
  i3684.m_AscentLine = i3685[7]
  i3684.m_CapLine = i3685[8]
  i3684.m_MeanLine = i3685[9]
  i3684.m_Baseline = i3685[10]
  i3684.m_DescentLine = i3685[11]
  i3684.m_SuperscriptOffset = i3685[12]
  i3684.m_SuperscriptSize = i3685[13]
  i3684.m_SubscriptOffset = i3685[14]
  i3684.m_SubscriptSize = i3685[15]
  i3684.m_UnderlineOffset = i3685[16]
  i3684.m_UnderlineThickness = i3685[17]
  i3684.m_StrikethroughOffset = i3685[18]
  i3684.m_StrikethroughThickness = i3685[19]
  i3684.m_TabWidth = i3685[20]
  return i3684
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i3686 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i3687 = data
  i3686.useSafeMode = !!i3687[0]
  i3686.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i3687[1], i3686.safeModeOptions)
  i3686.timeScale = i3687[2]
  i3686.unscaledTimeScale = i3687[3]
  i3686.useSmoothDeltaTime = !!i3687[4]
  i3686.maxSmoothUnscaledTime = i3687[5]
  i3686.rewindCallbackMode = i3687[6]
  i3686.showUnityEditorReport = !!i3687[7]
  i3686.logBehaviour = i3687[8]
  i3686.drawGizmos = !!i3687[9]
  i3686.defaultRecyclable = !!i3687[10]
  i3686.defaultAutoPlay = i3687[11]
  i3686.defaultUpdateType = i3687[12]
  i3686.defaultTimeScaleIndependent = !!i3687[13]
  i3686.defaultEaseType = i3687[14]
  i3686.defaultEaseOvershootOrAmplitude = i3687[15]
  i3686.defaultEasePeriod = i3687[16]
  i3686.defaultAutoKill = !!i3687[17]
  i3686.defaultLoopType = i3687[18]
  i3686.debugMode = !!i3687[19]
  i3686.debugStoreTargetId = !!i3687[20]
  i3686.showPreviewPanel = !!i3687[21]
  i3686.storeSettingsLocation = i3687[22]
  i3686.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i3687[23], i3686.modules)
  i3686.createASMDEF = !!i3687[24]
  i3686.showPlayingTweens = !!i3687[25]
  i3686.showPausedTweens = !!i3687[26]
  return i3686
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i3688 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i3689 = data
  i3688.logBehaviour = i3689[0]
  i3688.nestedTweenFailureBehaviour = i3689[1]
  return i3688
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i3690 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i3691 = data
  i3690.showPanel = !!i3691[0]
  i3690.audioEnabled = !!i3691[1]
  i3690.physicsEnabled = !!i3691[2]
  i3690.physics2DEnabled = !!i3691[3]
  i3690.spriteEnabled = !!i3691[4]
  i3690.uiEnabled = !!i3691[5]
  i3690.uiToolkitEnabled = !!i3691[6]
  i3690.textMeshProEnabled = !!i3691[7]
  i3690.tk2DEnabled = !!i3691[8]
  i3690.deAudioEnabled = !!i3691[9]
  i3690.deUnityExtendedEnabled = !!i3691[10]
  i3690.epoOutlineEnabled = !!i3691[11]
  return i3690
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i3692 = root || request.c( 'TMPro.TMP_Settings' )
  var i3693 = data
  i3692.assetVersion = i3693[0]
  i3692.m_TextWrappingMode = i3693[1]
  i3692.m_enableKerning = !!i3693[2]
  var i3695 = i3693[3]
  var i3694 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i3695.length; i += 1) {
    i3694.add(i3695[i + 0]);
  }
  i3692.m_ActiveFontFeatures = i3694
  i3692.m_enableExtraPadding = !!i3693[4]
  i3692.m_enableTintAllSprites = !!i3693[5]
  i3692.m_enableParseEscapeCharacters = !!i3693[6]
  i3692.m_EnableRaycastTarget = !!i3693[7]
  i3692.m_GetFontFeaturesAtRuntime = !!i3693[8]
  i3692.m_missingGlyphCharacter = i3693[9]
  i3692.m_ClearDynamicDataOnBuild = !!i3693[10]
  i3692.m_warningsDisabled = !!i3693[11]
  request.r(i3693[12], i3693[13], 0, i3692, 'm_defaultFontAsset')
  i3692.m_defaultFontAssetPath = i3693[14]
  i3692.m_defaultFontSize = i3693[15]
  i3692.m_defaultAutoSizeMinRatio = i3693[16]
  i3692.m_defaultAutoSizeMaxRatio = i3693[17]
  i3692.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i3693[18], i3693[19] )
  i3692.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i3693[20], i3693[21] )
  i3692.m_autoSizeTextContainer = !!i3693[22]
  i3692.m_IsTextObjectScaleStatic = !!i3693[23]
  var i3697 = i3693[24]
  var i3696 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i3697.length; i += 2) {
  request.r(i3697[i + 0], i3697[i + 1], 1, i3696, '')
  }
  i3692.m_fallbackFontAssets = i3696
  i3692.m_matchMaterialPreset = !!i3693[25]
  i3692.m_HideSubTextObjects = !!i3693[26]
  request.r(i3693[27], i3693[28], 0, i3692, 'm_defaultSpriteAsset')
  i3692.m_defaultSpriteAssetPath = i3693[29]
  i3692.m_enableEmojiSupport = !!i3693[30]
  i3692.m_MissingCharacterSpriteUnicode = i3693[31]
  var i3699 = i3693[32]
  var i3698 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i3699.length; i += 2) {
  request.r(i3699[i + 0], i3699[i + 1], 1, i3698, '')
  }
  i3692.m_EmojiFallbackTextAssets = i3698
  i3692.m_defaultColorGradientPresetsPath = i3693[33]
  request.r(i3693[34], i3693[35], 0, i3692, 'm_defaultStyleSheet')
  i3692.m_StyleSheetsResourcePath = i3693[36]
  request.r(i3693[37], i3693[38], 0, i3692, 'm_leadingCharacters')
  request.r(i3693[39], i3693[40], 0, i3692, 'm_followingCharacters')
  i3692.m_UseModernHangulLineBreakingRules = !!i3693[41]
  return i3692
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i3702 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i3703 = data
  request.r(i3703[0], i3703[1], 0, i3702, 'spriteSheet')
  var i3705 = i3703[2]
  var i3704 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i3705.length; i += 1) {
    i3704.add(request.d('TMPro.TMP_Sprite', i3705[i + 0]));
  }
  i3702.spriteInfoList = i3704
  var i3707 = i3703[3]
  var i3706 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i3707.length; i += 2) {
  request.r(i3707[i + 0], i3707[i + 1], 1, i3706, '')
  }
  i3702.fallbackSpriteAssets = i3706
  var i3709 = i3703[4]
  var i3708 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i3709.length; i += 1) {
    i3708.add(request.d('TMPro.TMP_SpriteCharacter', i3709[i + 0]));
  }
  i3702.m_SpriteCharacterTable = i3708
  var i3711 = i3703[5]
  var i3710 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i3711.length; i += 1) {
    i3710.add(request.d('TMPro.TMP_SpriteGlyph', i3711[i + 0]));
  }
  i3702.m_GlyphTable = i3710
  i3702.m_Version = i3703[6]
  i3702.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i3703[7], i3702.m_FaceInfo)
  request.r(i3703[8], i3703[9], 0, i3702, 'm_Material')
  return i3702
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i3714 = root || request.c( 'TMPro.TMP_Sprite' )
  var i3715 = data
  i3714.name = i3715[0]
  i3714.hashCode = i3715[1]
  i3714.unicode = i3715[2]
  i3714.pivot = new pc.Vec2( i3715[3], i3715[4] )
  request.r(i3715[5], i3715[6], 0, i3714, 'sprite')
  i3714.id = i3715[7]
  i3714.x = i3715[8]
  i3714.y = i3715[9]
  i3714.width = i3715[10]
  i3714.height = i3715[11]
  i3714.xOffset = i3715[12]
  i3714.yOffset = i3715[13]
  i3714.xAdvance = i3715[14]
  i3714.scale = i3715[15]
  return i3714
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i3720 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i3721 = data
  i3720.m_Name = i3721[0]
  i3720.m_ElementType = i3721[1]
  i3720.m_Unicode = i3721[2]
  i3720.m_GlyphIndex = i3721[3]
  i3720.m_Scale = i3721[4]
  return i3720
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i3724 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i3725 = data
  request.r(i3725[0], i3725[1], 0, i3724, 'sprite')
  i3724.m_Index = i3725[2]
  i3724.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i3725[3], i3724.m_Metrics)
  i3724.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i3725[4], i3724.m_GlyphRect)
  i3724.m_Scale = i3725[5]
  i3724.m_AtlasIndex = i3725[6]
  i3724.m_ClassDefinitionType = i3725[7]
  return i3724
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i3726 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i3727 = data
  var i3729 = i3727[0]
  var i3728 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i3729.length; i += 1) {
    i3728.add(request.d('TMPro.TMP_Style', i3729[i + 0]));
  }
  i3726.m_StyleList = i3728
  return i3726
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i3732 = root || request.c( 'TMPro.TMP_Style' )
  var i3733 = data
  i3732.m_Name = i3733[0]
  i3732.m_HashCode = i3733[1]
  i3732.m_OpeningDefinition = i3733[2]
  i3732.m_ClosingDefinition = i3733[3]
  i3732.m_OpeningTagArray = i3733[4]
  i3732.m_ClosingTagArray = i3733[5]
  return i3732
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i3734 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i3735 = data
  var i3737 = i3735[0]
  var i3736 = []
  for(var i = 0; i < i3737.length; i += 1) {
    i3736.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i3737[i + 0]) );
  }
  i3734.files = i3736
  i3734.componentToPrefabIds = i3735[1]
  return i3734
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i3740 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i3741 = data
  i3740.path = i3741[0]
  request.r(i3741[1], i3741[2], 0, i3740, 'unityObject')
  return i3740
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i3742 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i3743 = data
  var i3745 = i3743[0]
  var i3744 = []
  for(var i = 0; i < i3745.length; i += 1) {
    i3744.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i3745[i + 0]) );
  }
  i3742.scriptsExecutionOrder = i3744
  var i3747 = i3743[1]
  var i3746 = []
  for(var i = 0; i < i3747.length; i += 1) {
    i3746.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i3747[i + 0]) );
  }
  i3742.sortingLayers = i3746
  var i3749 = i3743[2]
  var i3748 = []
  for(var i = 0; i < i3749.length; i += 1) {
    i3748.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i3749[i + 0]) );
  }
  i3742.cullingLayers = i3748
  i3742.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i3743[3], i3742.timeSettings)
  i3742.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i3743[4], i3742.physicsSettings)
  i3742.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i3743[5], i3742.physics2DSettings)
  i3742.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i3743[6], i3742.qualitySettings)
  i3742.enableRealtimeShadows = !!i3743[7]
  i3742.enableAutoInstancing = !!i3743[8]
  i3742.enableStaticBatching = !!i3743[9]
  i3742.enableDynamicBatching = !!i3743[10]
  i3742.lightmapEncodingQuality = i3743[11]
  i3742.desiredColorSpace = i3743[12]
  var i3751 = i3743[13]
  var i3750 = []
  for(var i = 0; i < i3751.length; i += 1) {
    i3750.push( i3751[i + 0] );
  }
  i3742.allTags = i3750
  return i3742
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i3754 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i3755 = data
  i3754.name = i3755[0]
  i3754.value = i3755[1]
  return i3754
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i3758 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i3759 = data
  i3758.id = i3759[0]
  i3758.name = i3759[1]
  i3758.value = i3759[2]
  return i3758
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i3762 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i3763 = data
  i3762.id = i3763[0]
  i3762.name = i3763[1]
  return i3762
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i3764 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i3765 = data
  i3764.fixedDeltaTime = i3765[0]
  i3764.maximumDeltaTime = i3765[1]
  i3764.timeScale = i3765[2]
  i3764.maximumParticleTimestep = i3765[3]
  return i3764
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i3766 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i3767 = data
  i3766.gravity = new pc.Vec3( i3767[0], i3767[1], i3767[2] )
  i3766.defaultSolverIterations = i3767[3]
  i3766.bounceThreshold = i3767[4]
  i3766.autoSyncTransforms = !!i3767[5]
  i3766.autoSimulation = !!i3767[6]
  var i3769 = i3767[7]
  var i3768 = []
  for(var i = 0; i < i3769.length; i += 1) {
    i3768.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i3769[i + 0]) );
  }
  i3766.collisionMatrix = i3768
  return i3766
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i3772 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i3773 = data
  i3772.enabled = !!i3773[0]
  i3772.layerId = i3773[1]
  i3772.otherLayerId = i3773[2]
  return i3772
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i3774 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i3775 = data
  request.r(i3775[0], i3775[1], 0, i3774, 'material')
  i3774.gravity = new pc.Vec2( i3775[2], i3775[3] )
  i3774.positionIterations = i3775[4]
  i3774.velocityIterations = i3775[5]
  i3774.velocityThreshold = i3775[6]
  i3774.maxLinearCorrection = i3775[7]
  i3774.maxAngularCorrection = i3775[8]
  i3774.maxTranslationSpeed = i3775[9]
  i3774.maxRotationSpeed = i3775[10]
  i3774.baumgarteScale = i3775[11]
  i3774.baumgarteTOIScale = i3775[12]
  i3774.timeToSleep = i3775[13]
  i3774.linearSleepTolerance = i3775[14]
  i3774.angularSleepTolerance = i3775[15]
  i3774.defaultContactOffset = i3775[16]
  i3774.autoSimulation = !!i3775[17]
  i3774.queriesHitTriggers = !!i3775[18]
  i3774.queriesStartInColliders = !!i3775[19]
  i3774.callbacksOnDisable = !!i3775[20]
  i3774.reuseCollisionCallbacks = !!i3775[21]
  i3774.autoSyncTransforms = !!i3775[22]
  var i3777 = i3775[23]
  var i3776 = []
  for(var i = 0; i < i3777.length; i += 1) {
    i3776.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i3777[i + 0]) );
  }
  i3774.collisionMatrix = i3776
  return i3774
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i3780 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i3781 = data
  i3780.enabled = !!i3781[0]
  i3780.layerId = i3781[1]
  i3780.otherLayerId = i3781[2]
  return i3780
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i3782 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i3783 = data
  var i3785 = i3783[0]
  var i3784 = []
  for(var i = 0; i < i3785.length; i += 1) {
    i3784.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i3785[i + 0]) );
  }
  i3782.qualityLevels = i3784
  var i3787 = i3783[1]
  var i3786 = []
  for(var i = 0; i < i3787.length; i += 1) {
    i3786.push( i3787[i + 0] );
  }
  i3782.names = i3786
  i3782.shadows = i3783[2]
  i3782.anisotropicFiltering = i3783[3]
  i3782.antiAliasing = i3783[4]
  i3782.lodBias = i3783[5]
  i3782.shadowCascades = i3783[6]
  i3782.shadowDistance = i3783[7]
  i3782.shadowmaskMode = i3783[8]
  i3782.shadowProjection = i3783[9]
  i3782.shadowResolution = i3783[10]
  i3782.softParticles = !!i3783[11]
  i3782.softVegetation = !!i3783[12]
  i3782.activeColorSpace = i3783[13]
  i3782.desiredColorSpace = i3783[14]
  i3782.masterTextureLimit = i3783[15]
  i3782.maxQueuedFrames = i3783[16]
  i3782.particleRaycastBudget = i3783[17]
  i3782.pixelLightCount = i3783[18]
  i3782.realtimeReflectionProbes = !!i3783[19]
  i3782.shadowCascade2Split = i3783[20]
  i3782.shadowCascade4Split = new pc.Vec3( i3783[21], i3783[22], i3783[23] )
  i3782.streamingMipmapsActive = !!i3783[24]
  i3782.vSyncCount = i3783[25]
  i3782.asyncUploadBufferSize = i3783[26]
  i3782.asyncUploadTimeSlice = i3783[27]
  i3782.billboardsFaceCameraPosition = !!i3783[28]
  i3782.shadowNearPlaneOffset = i3783[29]
  i3782.streamingMipmapsMemoryBudget = i3783[30]
  i3782.maximumLODLevel = i3783[31]
  i3782.streamingMipmapsAddAllCameras = !!i3783[32]
  i3782.streamingMipmapsMaxLevelReduction = i3783[33]
  i3782.streamingMipmapsRenderersPerFrame = i3783[34]
  i3782.resolutionScalingFixedDPIFactor = i3783[35]
  i3782.streamingMipmapsMaxFileIORequests = i3783[36]
  i3782.currentQualityLevel = i3783[37]
  return i3782
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i3792 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i3793 = data
  i3792.weight = i3793[0]
  i3792.vertices = i3793[1]
  i3792.normals = i3793[2]
  i3792.tangents = i3793[3]
  return i3792
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i3796 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i3797 = data
  i3796.mode = i3797[0]
  i3796.parameter = i3797[1]
  i3796.threshold = i3797[2]
  return i3796
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i3798 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i3799 = data
  i3798.m_XCoordinate = i3799[0]
  i3798.m_YCoordinate = i3799[1]
  return i3798
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i3800 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i3801 = data
  i3800.m_XPositionAdjustment = i3801[0]
  i3800.m_YPositionAdjustment = i3801[1]
  return i3800
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i3802 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i3803 = data
  i3802.xPlacement = i3803[0]
  i3802.yPlacement = i3803[1]
  i3802.xAdvance = i3803[2]
  i3802.yAdvance = i3803[3]
  return i3802
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D":{"usedByComposite":0,"autoTiling":1,"points":2,"enabled":3,"isTrigger":4,"usedByEffector":5,"density":6,"offset":7,"material":9},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.PhysicsMaterial2D":{"name":0,"bounciness":1,"friction":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2}}

Deserializers.requiredComponents = {"49":[50],"51":[50],"52":[50],"53":[50],"54":[50],"55":[50],"56":[57],"58":[2],"59":[60],"61":[60],"62":[60],"63":[60],"64":[60],"65":[60],"66":[35],"67":[35],"68":[35],"69":[35],"70":[35],"71":[35],"72":[35],"73":[35],"74":[35],"75":[35],"76":[35],"77":[35],"78":[35],"79":[2],"80":[81],"82":[83],"84":[83],"27":[26],"7":[2],"36":[35],"38":[17],"85":[12],"86":[2],"87":[88],"89":[41],"90":[27],"91":[26],"92":[81,26],"21":[26,31],"93":[26],"94":[31,26],"95":[81],"96":[31,26],"97":[26],"98":[99],"100":[99],"101":[99],"102":[26],"103":[26],"30":[27],"22":[31,26],"104":[26],"29":[27],"105":[26],"106":[26],"107":[26],"108":[26],"109":[26],"110":[26],"111":[26],"112":[26],"113":[26],"114":[31,26],"115":[26],"116":[26],"117":[26],"118":[26],"119":[31,26],"120":[26],"121":[41],"122":[41],"42":[41],"123":[41],"124":[2],"125":[2]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.MonoBehaviour","CameraFollow2D","UnityEngine.Transform","AutoCameraFit","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Mesh","UnityEngine.Material","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","MoveBetweenPoints","UnityEngine.BoxCollider2D","ClickToStore","PlayerCardUIManager","UnityEngine.GameObject","TMPro.TextMeshProUGUI","UnityEngine.UI.Image","Ply_SoundManager","UnityEngine.AudioSource","UnityEngine.AudioClip","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","TMPro.TMP_FontAsset","UnityEngine.PolygonCollider2D","UnityEngine.PhysicsMaterial2D","UnityEngine.Rigidbody2D","BatStrikeController","CupCollision","SlotTrigger","PlayerCardData","HideOnFirstClick","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.Font","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.InputSystem.UI.InputSystemUIInputModule","UnityEngine.InputSystem.UI.TrackedDeviceRaycaster","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.38f1";

Deserializers.productName = "PLY_MiniSoccer";

Deserializers.lunaInitializationTime = "07/15/2026 03:53:54";

Deserializers.lunaDaysRunning = "0.3";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1753";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4466";

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

Deserializers.buildID = "aa1f6b05-1733-4e83-bae0-e881588285d5";

Deserializers.runtimeInitializeOnLoadInfos = [[["Unity","Services","Core","Internal","UnityServicesInitializer","EnableServicesInitializationAsync"],["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["DG","Tweening","DOTween","RuntimeOnLoad"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["Unity","Services","Core","Registration","CorePackageInitializer","InitializeOnLoad"],["Unity","Services","Core","Internal","TaskAsyncOperation","SetScheduler"],["Unity","Services","Core","Environments","Client","Scheduler","EngineStateHelper","Init"],["Unity","Services","Core","Environments","Client","Scheduler","ThreadHelper","Init"],["Ua2CoreInitializeCallback","Register"],["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["Unity","AI","Navigation","NavMeshLink","ClearTrackedList"],["Unity","AI","Navigation","NavMeshSurface","ClearNavMeshSurfaces"],["Unity","AI","Navigation","NavMeshModifierVolume","ClearNavMeshModifiers"],["Unity","AI","Navigation","NavMeshModifier","ClearNavMeshModifiers"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["Unity","Services","Core","Internal","UnityServicesInitializer","CreateStaticInstance"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[["Unity","Services","Core","Environments","Client","Http","JsonHelpers","RegisterTypesForAOT"]],[["Unity","Services","Core","UnityThreadUtils","CaptureUnityThreadInfo"],["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

