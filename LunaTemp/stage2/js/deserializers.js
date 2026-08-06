var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i3160 = root || request.c( 'UnityEngine.JointSpring' )
  var i3161 = data
  i3160.spring = i3161[0]
  i3160.damper = i3161[1]
  i3160.targetPosition = i3161[2]
  return i3160
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i3162 = root || request.c( 'UnityEngine.JointMotor' )
  var i3163 = data
  i3162.m_TargetVelocity = i3163[0]
  i3162.m_Force = i3163[1]
  i3162.m_FreeSpin = i3163[2]
  return i3162
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i3164 = root || request.c( 'UnityEngine.JointLimits' )
  var i3165 = data
  i3164.m_Min = i3165[0]
  i3164.m_Max = i3165[1]
  i3164.m_Bounciness = i3165[2]
  i3164.m_BounceMinVelocity = i3165[3]
  i3164.m_ContactDistance = i3165[4]
  i3164.minBounce = i3165[5]
  i3164.maxBounce = i3165[6]
  return i3164
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i3166 = root || request.c( 'UnityEngine.JointDrive' )
  var i3167 = data
  i3166.m_PositionSpring = i3167[0]
  i3166.m_PositionDamper = i3167[1]
  i3166.m_MaximumForce = i3167[2]
  i3166.m_UseAcceleration = i3167[3]
  return i3166
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i3168 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i3169 = data
  i3168.m_Spring = i3169[0]
  i3168.m_Damper = i3169[1]
  return i3168
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i3170 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i3171 = data
  i3170.m_Limit = i3171[0]
  i3170.m_Bounciness = i3171[1]
  i3170.m_ContactDistance = i3171[2]
  return i3170
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i3172 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i3173 = data
  i3172.m_ExtremumSlip = i3173[0]
  i3172.m_ExtremumValue = i3173[1]
  i3172.m_AsymptoteSlip = i3173[2]
  i3172.m_AsymptoteValue = i3173[3]
  i3172.m_Stiffness = i3173[4]
  return i3172
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i3174 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i3175 = data
  i3174.m_LowerAngle = i3175[0]
  i3174.m_UpperAngle = i3175[1]
  return i3174
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i3176 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i3177 = data
  i3176.m_MotorSpeed = i3177[0]
  i3176.m_MaximumMotorTorque = i3177[1]
  return i3176
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i3178 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i3179 = data
  i3178.m_DampingRatio = i3179[0]
  i3178.m_Frequency = i3179[1]
  i3178.m_Angle = i3179[2]
  return i3178
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i3180 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i3181 = data
  i3180.m_LowerTranslation = i3181[0]
  i3180.m_UpperTranslation = i3181[1]
  return i3180
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i3182 = root || new pc.UnityMaterial()
  var i3183 = data
  i3182.name = i3183[0]
  request.r(i3183[1], i3183[2], 0, i3182, 'shader')
  i3182.renderQueue = i3183[3]
  i3182.enableInstancing = !!i3183[4]
  var i3185 = i3183[5]
  var i3184 = []
  for(var i = 0; i < i3185.length; i += 1) {
    i3184.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i3185[i + 0]) );
  }
  i3182.floatParameters = i3184
  var i3187 = i3183[6]
  var i3186 = []
  for(var i = 0; i < i3187.length; i += 1) {
    i3186.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i3187[i + 0]) );
  }
  i3182.colorParameters = i3186
  var i3189 = i3183[7]
  var i3188 = []
  for(var i = 0; i < i3189.length; i += 1) {
    i3188.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i3189[i + 0]) );
  }
  i3182.vectorParameters = i3188
  var i3191 = i3183[8]
  var i3190 = []
  for(var i = 0; i < i3191.length; i += 1) {
    i3190.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i3191[i + 0]) );
  }
  i3182.textureParameters = i3190
  var i3193 = i3183[9]
  var i3192 = []
  for(var i = 0; i < i3193.length; i += 1) {
    i3192.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i3193[i + 0]) );
  }
  i3182.materialFlags = i3192
  return i3182
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i3196 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i3197 = data
  i3196.name = i3197[0]
  i3196.value = i3197[1]
  return i3196
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i3200 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i3201 = data
  i3200.name = i3201[0]
  i3200.value = new pc.Color(i3201[1], i3201[2], i3201[3], i3201[4])
  return i3200
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i3204 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i3205 = data
  i3204.name = i3205[0]
  i3204.value = new pc.Vec4( i3205[1], i3205[2], i3205[3], i3205[4] )
  return i3204
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i3208 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i3209 = data
  i3208.name = i3209[0]
  request.r(i3209[1], i3209[2], 0, i3208, 'value')
  return i3208
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i3212 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i3213 = data
  i3212.name = i3213[0]
  i3212.enabled = !!i3213[1]
  return i3212
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i3214 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i3215 = data
  i3214.name = i3215[0]
  i3214.width = i3215[1]
  i3214.height = i3215[2]
  i3214.mipmapCount = i3215[3]
  i3214.anisoLevel = i3215[4]
  i3214.filterMode = i3215[5]
  i3214.hdr = !!i3215[6]
  i3214.format = i3215[7]
  i3214.wrapMode = i3215[8]
  i3214.alphaIsTransparency = !!i3215[9]
  i3214.alphaSource = i3215[10]
  i3214.graphicsFormat = i3215[11]
  i3214.sRGBTexture = !!i3215[12]
  i3214.desiredColorSpace = i3215[13]
  i3214.wrapU = i3215[14]
  i3214.wrapV = i3215[15]
  return i3214
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i3216 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i3217 = data
  i3216.name = i3217[0]
  i3216.halfPrecision = !!i3217[1]
  i3216.useSimplification = !!i3217[2]
  i3216.useUInt32IndexFormat = !!i3217[3]
  i3216.vertexCount = i3217[4]
  i3216.aabb = i3217[5]
  var i3219 = i3217[6]
  var i3218 = []
  for(var i = 0; i < i3219.length; i += 1) {
    i3218.push( !!i3219[i + 0] );
  }
  i3216.streams = i3218
  i3216.vertices = i3217[7]
  var i3221 = i3217[8]
  var i3220 = []
  for(var i = 0; i < i3221.length; i += 1) {
    i3220.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i3221[i + 0]) );
  }
  i3216.subMeshes = i3220
  var i3223 = i3217[9]
  var i3222 = []
  for(var i = 0; i < i3223.length; i += 16) {
    i3222.push( new pc.Mat4().setData(i3223[i + 0], i3223[i + 1], i3223[i + 2], i3223[i + 3],  i3223[i + 4], i3223[i + 5], i3223[i + 6], i3223[i + 7],  i3223[i + 8], i3223[i + 9], i3223[i + 10], i3223[i + 11],  i3223[i + 12], i3223[i + 13], i3223[i + 14], i3223[i + 15]) );
  }
  i3216.bindposes = i3222
  var i3225 = i3217[10]
  var i3224 = []
  for(var i = 0; i < i3225.length; i += 1) {
    i3224.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i3225[i + 0]) );
  }
  i3216.blendShapes = i3224
  return i3216
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i3230 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i3231 = data
  i3230.triangles = i3231[0]
  return i3230
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i3236 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i3237 = data
  i3236.name = i3237[0]
  var i3239 = i3237[1]
  var i3238 = []
  for(var i = 0; i < i3239.length; i += 1) {
    i3238.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i3239[i + 0]) );
  }
  i3236.frames = i3238
  return i3236
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i3240 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i3241 = data
  i3240.name = i3241[0]
  i3240.index = i3241[1]
  i3240.startup = !!i3241[2]
  return i3240
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i3242 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i3243 = data
  i3242.aspect = i3243[0]
  i3242.orthographic = !!i3243[1]
  i3242.orthographicSize = i3243[2]
  i3242.backgroundColor = new pc.Color(i3243[3], i3243[4], i3243[5], i3243[6])
  i3242.nearClipPlane = i3243[7]
  i3242.farClipPlane = i3243[8]
  i3242.fieldOfView = i3243[9]
  i3242.depth = i3243[10]
  i3242.clearFlags = i3243[11]
  i3242.cullingMask = i3243[12]
  i3242.rect = i3243[13]
  request.r(i3243[14], i3243[15], 0, i3242, 'targetTexture')
  i3242.usePhysicalProperties = !!i3243[16]
  i3242.focalLength = i3243[17]
  i3242.sensorSize = new pc.Vec2( i3243[18], i3243[19] )
  i3242.lensShift = new pc.Vec2( i3243[20], i3243[21] )
  i3242.gateFit = i3243[22]
  i3242.commandBufferCount = i3243[23]
  i3242.cameraType = i3243[24]
  i3242.enabled = !!i3243[25]
  return i3242
}

Deserializers["CameraFollow2D"] = function (request, data, root) {
  var i3244 = root || request.c( 'CameraFollow2D' )
  var i3245 = data
  request.r(i3245[0], i3245[1], 0, i3244, 'target')
  i3244.smoothSpeed = i3245[2]
  i3244.offset = new pc.Vec3( i3245[3], i3245[4], i3245[5] )
  i3244.followY = !!i3245[6]
  return i3244
}

Deserializers["AutoCameraFit"] = function (request, data, root) {
  var i3246 = root || request.c( 'AutoCameraFit' )
  var i3247 = data
  request.r(i3247[0], i3247[1], 0, i3246, 'tallScreenObject')
  i3246.tallScreenRatioThreshold = i3247[2]
  i3246.tallScreenYOffset = i3247[3]
  request.r(i3247[4], i3247[5], 0, i3246, 'canvasBtn')
  request.r(i3247[6], i3247[7], 0, i3246, 'targetArea')
  i3246.paddingLandscape = i3247[8]
  i3246.paddingPortrait = i3247[9]
  i3246.extraPaddingSmallScreen = i3247[10]
  i3246.smallScreenThreshold = i3247[11]
  i3246.autoUpdateOnResize = !!i3247[12]
  i3246.adjustInEditMode = !!i3247[13]
  return i3246
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i3248 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i3249 = data
  i3248.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i3249[0], i3248.main)
  i3248.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i3249[1], i3248.colorBySpeed)
  i3248.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i3249[2], i3248.colorOverLifetime)
  i3248.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i3249[3], i3248.emission)
  i3248.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i3249[4], i3248.rotationBySpeed)
  i3248.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i3249[5], i3248.rotationOverLifetime)
  i3248.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i3249[6], i3248.shape)
  i3248.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i3249[7], i3248.sizeBySpeed)
  i3248.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i3249[8], i3248.sizeOverLifetime)
  i3248.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i3249[9], i3248.textureSheetAnimation)
  i3248.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i3249[10], i3248.velocityOverLifetime)
  i3248.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i3249[11], i3248.noise)
  i3248.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i3249[12], i3248.inheritVelocity)
  i3248.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i3249[13], i3248.forceOverLifetime)
  i3248.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i3249[14], i3248.limitVelocityOverLifetime)
  i3248.useAutoRandomSeed = !!i3249[15]
  i3248.randomSeed = i3249[16]
  return i3248
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i3250 = root || new pc.ParticleSystemMain()
  var i3251 = data
  i3250.duration = i3251[0]
  i3250.loop = !!i3251[1]
  i3250.prewarm = !!i3251[2]
  i3250.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3251[3], i3250.startDelay)
  i3250.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3251[4], i3250.startLifetime)
  i3250.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3251[5], i3250.startSpeed)
  i3250.startSize3D = !!i3251[6]
  i3250.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3251[7], i3250.startSizeX)
  i3250.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3251[8], i3250.startSizeY)
  i3250.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3251[9], i3250.startSizeZ)
  i3250.startRotation3D = !!i3251[10]
  i3250.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3251[11], i3250.startRotationX)
  i3250.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3251[12], i3250.startRotationY)
  i3250.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3251[13], i3250.startRotationZ)
  i3250.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i3251[14], i3250.startColor)
  i3250.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3251[15], i3250.gravityModifier)
  i3250.simulationSpace = i3251[16]
  request.r(i3251[17], i3251[18], 0, i3250, 'customSimulationSpace')
  i3250.simulationSpeed = i3251[19]
  i3250.useUnscaledTime = !!i3251[20]
  i3250.scalingMode = i3251[21]
  i3250.playOnAwake = !!i3251[22]
  i3250.maxParticles = i3251[23]
  i3250.emitterVelocityMode = i3251[24]
  i3250.stopAction = i3251[25]
  return i3250
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i3252 = root || new pc.MinMaxCurve()
  var i3253 = data
  i3252.mode = i3253[0]
  i3252.curveMin = new pc.AnimationCurve( { keys_flow: i3253[1] } )
  i3252.curveMax = new pc.AnimationCurve( { keys_flow: i3253[2] } )
  i3252.curveMultiplier = i3253[3]
  i3252.constantMin = i3253[4]
  i3252.constantMax = i3253[5]
  return i3252
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i3254 = root || new pc.MinMaxGradient()
  var i3255 = data
  i3254.mode = i3255[0]
  i3254.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i3255[1], i3254.gradientMin)
  i3254.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i3255[2], i3254.gradientMax)
  i3254.colorMin = new pc.Color(i3255[3], i3255[4], i3255[5], i3255[6])
  i3254.colorMax = new pc.Color(i3255[7], i3255[8], i3255[9], i3255[10])
  return i3254
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i3256 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i3257 = data
  i3256.mode = i3257[0]
  var i3259 = i3257[1]
  var i3258 = []
  for(var i = 0; i < i3259.length; i += 1) {
    i3258.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i3259[i + 0]) );
  }
  i3256.colorKeys = i3258
  var i3261 = i3257[2]
  var i3260 = []
  for(var i = 0; i < i3261.length; i += 1) {
    i3260.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i3261[i + 0]) );
  }
  i3256.alphaKeys = i3260
  return i3256
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i3262 = root || new pc.ParticleSystemColorBySpeed()
  var i3263 = data
  i3262.enabled = !!i3263[0]
  i3262.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i3263[1], i3262.color)
  i3262.range = new pc.Vec2( i3263[2], i3263[3] )
  return i3262
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i3266 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i3267 = data
  i3266.color = new pc.Color(i3267[0], i3267[1], i3267[2], i3267[3])
  i3266.time = i3267[4]
  return i3266
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i3270 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i3271 = data
  i3270.alpha = i3271[0]
  i3270.time = i3271[1]
  return i3270
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i3272 = root || new pc.ParticleSystemColorOverLifetime()
  var i3273 = data
  i3272.enabled = !!i3273[0]
  i3272.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i3273[1], i3272.color)
  return i3272
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i3274 = root || new pc.ParticleSystemEmitter()
  var i3275 = data
  i3274.enabled = !!i3275[0]
  i3274.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3275[1], i3274.rateOverTime)
  i3274.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3275[2], i3274.rateOverDistance)
  var i3277 = i3275[3]
  var i3276 = []
  for(var i = 0; i < i3277.length; i += 1) {
    i3276.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i3277[i + 0]) );
  }
  i3274.bursts = i3276
  return i3274
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i3280 = root || new pc.ParticleSystemBurst()
  var i3281 = data
  i3280.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3281[0], i3280.count)
  i3280.cycleCount = i3281[1]
  i3280.minCount = i3281[2]
  i3280.maxCount = i3281[3]
  i3280.repeatInterval = i3281[4]
  i3280.time = i3281[5]
  return i3280
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i3282 = root || new pc.ParticleSystemRotationBySpeed()
  var i3283 = data
  i3282.enabled = !!i3283[0]
  i3282.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3283[1], i3282.x)
  i3282.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3283[2], i3282.y)
  i3282.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3283[3], i3282.z)
  i3282.separateAxes = !!i3283[4]
  i3282.range = new pc.Vec2( i3283[5], i3283[6] )
  return i3282
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i3284 = root || new pc.ParticleSystemRotationOverLifetime()
  var i3285 = data
  i3284.enabled = !!i3285[0]
  i3284.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3285[1], i3284.x)
  i3284.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3285[2], i3284.y)
  i3284.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3285[3], i3284.z)
  i3284.separateAxes = !!i3285[4]
  return i3284
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i3286 = root || new pc.ParticleSystemShape()
  var i3287 = data
  i3286.enabled = !!i3287[0]
  i3286.shapeType = i3287[1]
  i3286.randomDirectionAmount = i3287[2]
  i3286.sphericalDirectionAmount = i3287[3]
  i3286.randomPositionAmount = i3287[4]
  i3286.alignToDirection = !!i3287[5]
  i3286.radius = i3287[6]
  i3286.radiusMode = i3287[7]
  i3286.radiusSpread = i3287[8]
  i3286.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3287[9], i3286.radiusSpeed)
  i3286.radiusThickness = i3287[10]
  i3286.angle = i3287[11]
  i3286.length = i3287[12]
  i3286.boxThickness = new pc.Vec3( i3287[13], i3287[14], i3287[15] )
  i3286.meshShapeType = i3287[16]
  request.r(i3287[17], i3287[18], 0, i3286, 'mesh')
  request.r(i3287[19], i3287[20], 0, i3286, 'meshRenderer')
  request.r(i3287[21], i3287[22], 0, i3286, 'skinnedMeshRenderer')
  i3286.useMeshMaterialIndex = !!i3287[23]
  i3286.meshMaterialIndex = i3287[24]
  i3286.useMeshColors = !!i3287[25]
  i3286.normalOffset = i3287[26]
  i3286.arc = i3287[27]
  i3286.arcMode = i3287[28]
  i3286.arcSpread = i3287[29]
  i3286.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3287[30], i3286.arcSpeed)
  i3286.donutRadius = i3287[31]
  i3286.position = new pc.Vec3( i3287[32], i3287[33], i3287[34] )
  i3286.rotation = new pc.Vec3( i3287[35], i3287[36], i3287[37] )
  i3286.scale = new pc.Vec3( i3287[38], i3287[39], i3287[40] )
  return i3286
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i3288 = root || new pc.ParticleSystemSizeBySpeed()
  var i3289 = data
  i3288.enabled = !!i3289[0]
  i3288.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3289[1], i3288.x)
  i3288.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3289[2], i3288.y)
  i3288.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3289[3], i3288.z)
  i3288.separateAxes = !!i3289[4]
  i3288.range = new pc.Vec2( i3289[5], i3289[6] )
  return i3288
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i3290 = root || new pc.ParticleSystemSizeOverLifetime()
  var i3291 = data
  i3290.enabled = !!i3291[0]
  i3290.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3291[1], i3290.x)
  i3290.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3291[2], i3290.y)
  i3290.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3291[3], i3290.z)
  i3290.separateAxes = !!i3291[4]
  return i3290
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i3292 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i3293 = data
  i3292.enabled = !!i3293[0]
  i3292.mode = i3293[1]
  i3292.animation = i3293[2]
  i3292.numTilesX = i3293[3]
  i3292.numTilesY = i3293[4]
  i3292.useRandomRow = !!i3293[5]
  i3292.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3293[6], i3292.frameOverTime)
  i3292.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3293[7], i3292.startFrame)
  i3292.cycleCount = i3293[8]
  i3292.rowIndex = i3293[9]
  i3292.flipU = i3293[10]
  i3292.flipV = i3293[11]
  i3292.spriteCount = i3293[12]
  var i3295 = i3293[13]
  var i3294 = []
  for(var i = 0; i < i3295.length; i += 2) {
  request.r(i3295[i + 0], i3295[i + 1], 2, i3294, '')
  }
  i3292.sprites = i3294
  return i3292
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i3298 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i3299 = data
  i3298.enabled = !!i3299[0]
  i3298.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3299[1], i3298.x)
  i3298.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3299[2], i3298.y)
  i3298.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3299[3], i3298.z)
  i3298.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3299[4], i3298.radial)
  i3298.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3299[5], i3298.speedModifier)
  i3298.space = i3299[6]
  i3298.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3299[7], i3298.orbitalX)
  i3298.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3299[8], i3298.orbitalY)
  i3298.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3299[9], i3298.orbitalZ)
  i3298.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3299[10], i3298.orbitalOffsetX)
  i3298.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3299[11], i3298.orbitalOffsetY)
  i3298.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3299[12], i3298.orbitalOffsetZ)
  return i3298
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i3300 = root || new pc.ParticleSystemNoise()
  var i3301 = data
  i3300.enabled = !!i3301[0]
  i3300.separateAxes = !!i3301[1]
  i3300.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3301[2], i3300.strengthX)
  i3300.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3301[3], i3300.strengthY)
  i3300.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3301[4], i3300.strengthZ)
  i3300.frequency = i3301[5]
  i3300.damping = !!i3301[6]
  i3300.octaveCount = i3301[7]
  i3300.octaveMultiplier = i3301[8]
  i3300.octaveScale = i3301[9]
  i3300.quality = i3301[10]
  i3300.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3301[11], i3300.scrollSpeed)
  i3300.scrollSpeedMultiplier = i3301[12]
  i3300.remapEnabled = !!i3301[13]
  i3300.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3301[14], i3300.remapX)
  i3300.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3301[15], i3300.remapY)
  i3300.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3301[16], i3300.remapZ)
  i3300.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3301[17], i3300.positionAmount)
  i3300.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3301[18], i3300.rotationAmount)
  i3300.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3301[19], i3300.sizeAmount)
  return i3300
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i3302 = root || new pc.ParticleSystemInheritVelocity()
  var i3303 = data
  i3302.enabled = !!i3303[0]
  i3302.mode = i3303[1]
  i3302.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3303[2], i3302.curve)
  return i3302
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i3304 = root || new pc.ParticleSystemForceOverLifetime()
  var i3305 = data
  i3304.enabled = !!i3305[0]
  i3304.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3305[1], i3304.x)
  i3304.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3305[2], i3304.y)
  i3304.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3305[3], i3304.z)
  i3304.space = i3305[4]
  i3304.randomized = !!i3305[5]
  return i3304
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i3306 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i3307 = data
  i3306.enabled = !!i3307[0]
  i3306.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3307[1], i3306.limit)
  i3306.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3307[2], i3306.limitX)
  i3306.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3307[3], i3306.limitY)
  i3306.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3307[4], i3306.limitZ)
  i3306.dampen = i3307[5]
  i3306.separateAxes = !!i3307[6]
  i3306.space = i3307[7]
  i3306.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3307[8], i3306.drag)
  i3306.multiplyDragByParticleSize = !!i3307[9]
  i3306.multiplyDragByParticleVelocity = !!i3307[10]
  return i3306
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i3308 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i3309 = data
  request.r(i3309[0], i3309[1], 0, i3308, 'mesh')
  i3308.meshCount = i3309[2]
  i3308.activeVertexStreamsCount = i3309[3]
  i3308.alignment = i3309[4]
  i3308.renderMode = i3309[5]
  i3308.sortMode = i3309[6]
  i3308.lengthScale = i3309[7]
  i3308.velocityScale = i3309[8]
  i3308.cameraVelocityScale = i3309[9]
  i3308.normalDirection = i3309[10]
  i3308.sortingFudge = i3309[11]
  i3308.minParticleSize = i3309[12]
  i3308.maxParticleSize = i3309[13]
  i3308.pivot = new pc.Vec3( i3309[14], i3309[15], i3309[16] )
  request.r(i3309[17], i3309[18], 0, i3308, 'trailMaterial')
  i3308.applyActiveColorSpace = !!i3309[19]
  i3308.enabled = !!i3309[20]
  request.r(i3309[21], i3309[22], 0, i3308, 'sharedMaterial')
  var i3311 = i3309[23]
  var i3310 = []
  for(var i = 0; i < i3311.length; i += 2) {
  request.r(i3311[i + 0], i3311[i + 1], 2, i3310, '')
  }
  i3308.sharedMaterials = i3310
  i3308.receiveShadows = !!i3309[24]
  i3308.shadowCastingMode = i3309[25]
  i3308.sortingLayerID = i3309[26]
  i3308.sortingOrder = i3309[27]
  i3308.lightmapIndex = i3309[28]
  i3308.lightmapSceneIndex = i3309[29]
  i3308.lightmapScaleOffset = new pc.Vec4( i3309[30], i3309[31], i3309[32], i3309[33] )
  i3308.lightProbeUsage = i3309[34]
  i3308.reflectionProbeUsage = i3309[35]
  return i3308
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i3314 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i3315 = data
  i3314.name = i3315[0]
  i3314.tagId = i3315[1]
  i3314.enabled = !!i3315[2]
  i3314.isStatic = !!i3315[3]
  i3314.layer = i3315[4]
  return i3314
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i3316 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i3317 = data
  i3316.color = new pc.Color(i3317[0], i3317[1], i3317[2], i3317[3])
  request.r(i3317[4], i3317[5], 0, i3316, 'sprite')
  i3316.flipX = !!i3317[6]
  i3316.flipY = !!i3317[7]
  i3316.drawMode = i3317[8]
  i3316.size = new pc.Vec2( i3317[9], i3317[10] )
  i3316.tileMode = i3317[11]
  i3316.adaptiveModeThreshold = i3317[12]
  i3316.maskInteraction = i3317[13]
  i3316.spriteSortPoint = i3317[14]
  i3316.enabled = !!i3317[15]
  request.r(i3317[16], i3317[17], 0, i3316, 'sharedMaterial')
  var i3319 = i3317[18]
  var i3318 = []
  for(var i = 0; i < i3319.length; i += 2) {
  request.r(i3319[i + 0], i3319[i + 1], 2, i3318, '')
  }
  i3316.sharedMaterials = i3318
  i3316.receiveShadows = !!i3317[19]
  i3316.shadowCastingMode = i3317[20]
  i3316.sortingLayerID = i3317[21]
  i3316.sortingOrder = i3317[22]
  i3316.lightmapIndex = i3317[23]
  i3316.lightmapSceneIndex = i3317[24]
  i3316.lightmapScaleOffset = new pc.Vec4( i3317[25], i3317[26], i3317[27], i3317[28] )
  i3316.lightProbeUsage = i3317[29]
  i3316.reflectionProbeUsage = i3317[30]
  return i3316
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i3320 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i3321 = data
  request.r(i3321[0], i3321[1], 0, i3320, 'animatorController')
  request.r(i3321[2], i3321[3], 0, i3320, 'avatar')
  i3320.updateMode = i3321[4]
  i3320.hasTransformHierarchy = !!i3321[5]
  i3320.applyRootMotion = !!i3321[6]
  var i3323 = i3321[7]
  var i3322 = []
  for(var i = 0; i < i3323.length; i += 2) {
  request.r(i3323[i + 0], i3323[i + 1], 2, i3322, '')
  }
  i3320.humanBones = i3322
  i3320.enabled = !!i3321[8]
  return i3320
}

Deserializers["MoveBetweenPoints"] = function (request, data, root) {
  var i3326 = root || request.c( 'MoveBetweenPoints' )
  var i3327 = data
  request.r(i3327[0], i3327[1], 0, i3326, 'pointA')
  request.r(i3327[2], i3327[3], 0, i3326, 'pointB')
  i3326.duration = i3327[4]
  return i3326
}

Deserializers["ScreenHeightPositionAnchor"] = function (request, data, root) {
  var i3328 = root || request.c( 'ScreenHeightPositionAnchor' )
  var i3329 = data
  request.r(i3329[0], i3329[1], 0, i3328, 'anchorPoint')
  request.r(i3329[2], i3329[3], 0, i3328, 'targetCamera')
  i3328.viewportYRatio = i3329[4]
  i3328.alignOnStart = !!i3329[5]
  i3328.alignOnEnable = !!i3329[6]
  i3328.realignOnScreenSizeChanged = !!i3329[7]
  i3328.drawGizmos = !!i3329[8]
  i3328.targetLineColor = new pc.Color(i3329[9], i3329[10], i3329[11], i3329[12])
  i3328.anchorColor = new pc.Color(i3329[13], i3329[14], i3329[15], i3329[16])
  return i3328
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i3330 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i3331 = data
  i3330.usedByComposite = !!i3331[0]
  i3330.autoTiling = !!i3331[1]
  i3330.size = new pc.Vec2( i3331[2], i3331[3] )
  i3330.edgeRadius = i3331[4]
  i3330.enabled = !!i3331[5]
  i3330.isTrigger = !!i3331[6]
  i3330.usedByEffector = !!i3331[7]
  i3330.density = i3331[8]
  i3330.offset = new pc.Vec2( i3331[9], i3331[10] )
  request.r(i3331[11], i3331[12], 0, i3330, 'material')
  return i3330
}

Deserializers["ClickToStore"] = function (request, data, root) {
  var i3332 = root || request.c( 'ClickToStore' )
  var i3333 = data
  return i3332
}

Deserializers["PlayerCardUIManager"] = function (request, data, root) {
  var i3334 = root || request.c( 'PlayerCardUIManager' )
  var i3335 = data
  request.r(i3335[0], i3335[1], 0, i3334, 'cardPanel')
  var i3337 = i3335[2]
  var i3336 = []
  for(var i = 0; i < i3337.length; i += 2) {
  request.r(i3337[i + 0], i3337[i + 1], 2, i3336, '')
  }
  i3334.extraObjectsToActivate = i3336
  i3334.waitTime = i3335[3]
  var i3339 = i3335[4]
  var i3338 = []
  for(var i = 0; i < i3339.length; i += 2) {
  request.r(i3339[i + 0], i3339[i + 1], 2, i3338, '')
  }
  i3334.objectsToTurnOnAfterWait = i3338
  var i3341 = i3335[5]
  var i3340 = []
  for(var i = 0; i < i3341.length; i += 2) {
  request.r(i3341[i + 0], i3341[i + 1], 2, i3340, '')
  }
  i3334.objectsToTurnOffAfterWait = i3340
  request.r(i3335[6], i3335[7], 0, i3334, 'nationalityText')
  request.r(i3335[8], i3335[9], 0, i3334, 'playerImage')
  request.r(i3335[10], i3335[11], 0, i3334, 'flagImage')
  return i3334
}

Deserializers["Ply_SoundManager"] = function (request, data, root) {
  var i3344 = root || request.c( 'Ply_SoundManager' )
  var i3345 = data
  i3344.fxAudio = request.d('FxAudio', i3345[0], i3344.fxAudio)
  request.r(i3345[1], i3345[2], 0, i3344, 'bgm1')
  return i3344
}

Deserializers["FxAudio"] = function (request, data, root) {
  var i3346 = root || request.c( 'FxAudio' )
  var i3347 = data
  i3346.ClickBox = request.d('SoundData', i3347[0], i3346.ClickBox)
  i3346.Happy = request.d('SoundData', i3347[1], i3346.Happy)
  i3346.Wrong = request.d('SoundData', i3347[2], i3346.Wrong)
  i3346.Spray = request.d('SoundData', i3347[3], i3346.Spray)
  i3346.Brush = request.d('SoundData', i3347[4], i3346.Brush)
  return i3346
}

Deserializers["SoundData"] = function (request, data, root) {
  var i3348 = root || request.c( 'SoundData' )
  var i3349 = data
  request.r(i3349[0], i3349[1], 0, i3348, 'clip')
  i3348.repeatCount = i3349[2]
  return i3348
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i3350 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i3351 = data
  request.r(i3351[0], i3351[1], 0, i3350, 'clip')
  request.r(i3351[2], i3351[3], 0, i3350, 'outputAudioMixerGroup')
  i3350.playOnAwake = !!i3351[4]
  i3350.loop = !!i3351[5]
  i3350.time = i3351[6]
  i3350.volume = i3351[7]
  i3350.pitch = i3351[8]
  i3350.enabled = !!i3351[9]
  return i3350
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i3352 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i3353 = data
  i3352.pivot = new pc.Vec2( i3353[0], i3353[1] )
  i3352.anchorMin = new pc.Vec2( i3353[2], i3353[3] )
  i3352.anchorMax = new pc.Vec2( i3353[4], i3353[5] )
  i3352.sizeDelta = new pc.Vec2( i3353[6], i3353[7] )
  i3352.anchoredPosition3D = new pc.Vec3( i3353[8], i3353[9], i3353[10] )
  i3352.rotation = new pc.Quat(i3353[11], i3353[12], i3353[13], i3353[14])
  i3352.scale = new pc.Vec3( i3353[15], i3353[16], i3353[17] )
  return i3352
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i3354 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i3355 = data
  i3354.planeDistance = i3355[0]
  i3354.referencePixelsPerUnit = i3355[1]
  i3354.isFallbackOverlay = !!i3355[2]
  i3354.renderMode = i3355[3]
  i3354.renderOrder = i3355[4]
  i3354.sortingLayerName = i3355[5]
  i3354.sortingOrder = i3355[6]
  i3354.scaleFactor = i3355[7]
  request.r(i3355[8], i3355[9], 0, i3354, 'worldCamera')
  i3354.overrideSorting = !!i3355[10]
  i3354.pixelPerfect = !!i3355[11]
  i3354.targetDisplay = i3355[12]
  i3354.overridePixelPerfect = !!i3355[13]
  i3354.enabled = !!i3355[14]
  return i3354
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i3356 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i3357 = data
  i3356.m_UiScaleMode = i3357[0]
  i3356.m_ReferencePixelsPerUnit = i3357[1]
  i3356.m_ScaleFactor = i3357[2]
  i3356.m_ReferenceResolution = new pc.Vec2( i3357[3], i3357[4] )
  i3356.m_ScreenMatchMode = i3357[5]
  i3356.m_MatchWidthOrHeight = i3357[6]
  i3356.m_PhysicalUnit = i3357[7]
  i3356.m_FallbackScreenDPI = i3357[8]
  i3356.m_DefaultSpriteDPI = i3357[9]
  i3356.m_DynamicPixelsPerUnit = i3357[10]
  i3356.m_PresetInfoIsWorld = !!i3357[11]
  return i3356
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i3358 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i3359 = data
  i3358.m_IgnoreReversedGraphics = !!i3359[0]
  i3358.m_BlockingObjects = i3359[1]
  i3358.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i3359[2] )
  return i3358
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i3360 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i3361 = data
  i3360.cullTransparentMesh = !!i3361[0]
  return i3360
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i3362 = root || request.c( 'UnityEngine.UI.Image' )
  var i3363 = data
  request.r(i3363[0], i3363[1], 0, i3362, 'm_Sprite')
  i3362.m_Type = i3363[2]
  i3362.m_PreserveAspect = !!i3363[3]
  i3362.m_FillCenter = !!i3363[4]
  i3362.m_FillMethod = i3363[5]
  i3362.m_FillAmount = i3363[6]
  i3362.m_FillClockwise = !!i3363[7]
  i3362.m_FillOrigin = i3363[8]
  i3362.m_UseSpriteMesh = !!i3363[9]
  i3362.m_PixelsPerUnitMultiplier = i3363[10]
  request.r(i3363[11], i3363[12], 0, i3362, 'm_Material')
  i3362.m_Maskable = !!i3363[13]
  i3362.m_Color = new pc.Color(i3363[14], i3363[15], i3363[16], i3363[17])
  i3362.m_RaycastTarget = !!i3363[18]
  i3362.m_RaycastPadding = new pc.Vec4( i3363[19], i3363[20], i3363[21], i3363[22] )
  return i3362
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D"] = function (request, data, root) {
  var i3364 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D' )
  var i3365 = data
  i3364.usedByComposite = !!i3365[0]
  i3364.autoTiling = !!i3365[1]
  var i3367 = i3365[2]
  var i3366 = []
  for(var i = 0; i < i3367.length; i += 1) {
  var i3369 = i3367[i + 0]
  var i3368 = []
  for(var i = 0; i < i3369.length; i += 2) {
    i3368.push( new pc.Vec2( i3369[i + 0], i3369[i + 1] ) );
  }
    i3366.push( i3368 );
  }
  i3364.points = i3366
  i3364.enabled = !!i3365[3]
  i3364.isTrigger = !!i3365[4]
  i3364.usedByEffector = !!i3365[5]
  i3364.density = i3365[6]
  i3364.offset = new pc.Vec2( i3365[7], i3365[8] )
  request.r(i3365[9], i3365[10], 0, i3364, 'material')
  return i3364
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i3376 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i3377 = data
  i3376.bodyType = i3377[0]
  request.r(i3377[1], i3377[2], 0, i3376, 'material')
  i3376.simulated = !!i3377[3]
  i3376.useAutoMass = !!i3377[4]
  i3376.mass = i3377[5]
  i3376.drag = i3377[6]
  i3376.angularDrag = i3377[7]
  i3376.gravityScale = i3377[8]
  i3376.collisionDetectionMode = i3377[9]
  i3376.sleepMode = i3377[10]
  i3376.constraints = i3377[11]
  return i3376
}

Deserializers["BatStrikeController"] = function (request, data, root) {
  var i3378 = root || request.c( 'BatStrikeController' )
  var i3379 = data
  i3378.pullSpeed = i3379[0]
  i3378.maxPullDistance = i3379[1]
  i3378.minHoldTime = i3379[2]
  i3378.strikeForce = i3379[3]
  i3378.targetTag = i3379[4]
  return i3378
}

Deserializers["CupCollision"] = function (request, data, root) {
  var i3380 = root || request.c( 'CupCollision' )
  var i3381 = data
  i3380.baseTag = i3381[0]
  request.r(i3381[1], i3381[2], 0, i3380, 'objectToActivate')
  return i3380
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider2D"] = function (request, data, root) {
  var i3382 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider2D' )
  var i3383 = data
  i3382.size = new pc.Vec2( i3383[0], i3383[1] )
  i3382.direction = i3383[2]
  i3382.enabled = !!i3383[3]
  i3382.isTrigger = !!i3383[4]
  i3382.usedByEffector = !!i3383[5]
  i3382.density = i3383[6]
  i3382.offset = new pc.Vec2( i3383[7], i3383[8] )
  request.r(i3383[9], i3383[10], 0, i3382, 'material')
  return i3382
}

Deserializers["SlotTrigger"] = function (request, data, root) {
  var i3384 = root || request.c( 'SlotTrigger' )
  var i3385 = data
  request.r(i3385[0], i3385[1], 0, i3384, 'cardData')
  i3384.targetTag = i3385[2]
  request.r(i3385[3], i3385[4], 0, i3384, 'yAnchor')
  i3384.moveSpeed = i3385[5]
  request.r(i3385[6], i3385[7], 0, i3384, 'objectToMoveDown')
  i3384.targetScreenYRatio = i3385[8]
  return i3384
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteMask"] = function (request, data, root) {
  var i3386 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteMask' )
  var i3387 = data
  i3386.frontSortingLayerID = i3387[0]
  i3386.frontSortingOrder = i3387[1]
  i3386.backSortingLayerID = i3387[2]
  i3386.backSortingOrder = i3387[3]
  i3386.alphaCutoff = i3387[4]
  request.r(i3387[5], i3387[6], 0, i3386, 'sprite')
  i3386.tileMode = i3387[7]
  i3386.isCustomRangeActive = !!i3387[8]
  i3386.spriteSortPoint = i3387[9]
  i3386.enabled = !!i3387[10]
  request.r(i3387[11], i3387[12], 0, i3386, 'sharedMaterial')
  var i3389 = i3387[13]
  var i3388 = []
  for(var i = 0; i < i3389.length; i += 2) {
  request.r(i3389[i + 0], i3389[i + 1], 2, i3388, '')
  }
  i3386.sharedMaterials = i3388
  i3386.receiveShadows = !!i3387[14]
  i3386.shadowCastingMode = i3387[15]
  i3386.sortingLayerID = i3387[16]
  i3386.sortingOrder = i3387[17]
  i3386.lightmapIndex = i3387[18]
  i3386.lightmapSceneIndex = i3387[19]
  i3386.lightmapScaleOffset = new pc.Vec4( i3387[20], i3387[21], i3387[22], i3387[23] )
  i3386.lightProbeUsage = i3387[24]
  i3386.reflectionProbeUsage = i3387[25]
  return i3386
}

Deserializers["HideOnFirstClick"] = function (request, data, root) {
  var i3390 = root || request.c( 'HideOnFirstClick' )
  var i3391 = data
  request.r(i3391[0], i3391[1], 0, i3390, 'objectToHide')
  return i3390
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i3392 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i3393 = data
  request.r(i3393[0], i3393[1], 0, i3392, 'm_FirstSelected')
  i3392.m_sendNavigationEvents = !!i3393[2]
  i3392.m_DragThreshold = i3393[3]
  return i3392
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i3394 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i3395 = data
  i3394.m_HorizontalAxis = i3395[0]
  i3394.m_VerticalAxis = i3395[1]
  i3394.m_SubmitButton = i3395[2]
  i3394.m_CancelButton = i3395[3]
  i3394.m_InputActionsPerSecond = i3395[4]
  i3394.m_RepeatDelay = i3395[5]
  i3394.m_ForceModuleActive = !!i3395[6]
  i3394.m_SendPointerHoverToParent = !!i3395[7]
  return i3394
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i3396 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i3397 = data
  i3396.ambientIntensity = i3397[0]
  i3396.reflectionIntensity = i3397[1]
  i3396.ambientMode = i3397[2]
  i3396.ambientLight = new pc.Color(i3397[3], i3397[4], i3397[5], i3397[6])
  i3396.ambientSkyColor = new pc.Color(i3397[7], i3397[8], i3397[9], i3397[10])
  i3396.ambientGroundColor = new pc.Color(i3397[11], i3397[12], i3397[13], i3397[14])
  i3396.ambientEquatorColor = new pc.Color(i3397[15], i3397[16], i3397[17], i3397[18])
  i3396.fogColor = new pc.Color(i3397[19], i3397[20], i3397[21], i3397[22])
  i3396.fogEndDistance = i3397[23]
  i3396.fogStartDistance = i3397[24]
  i3396.fogDensity = i3397[25]
  i3396.fog = !!i3397[26]
  request.r(i3397[27], i3397[28], 0, i3396, 'skybox')
  i3396.fogMode = i3397[29]
  var i3399 = i3397[30]
  var i3398 = []
  for(var i = 0; i < i3399.length; i += 1) {
    i3398.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i3399[i + 0]) );
  }
  i3396.lightmaps = i3398
  i3396.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i3397[31], i3396.lightProbes)
  i3396.lightmapsMode = i3397[32]
  i3396.mixedBakeMode = i3397[33]
  i3396.environmentLightingMode = i3397[34]
  i3396.ambientProbe = new pc.SphericalHarmonicsL2(i3397[35])
  i3396.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i3397[36])
  i3396.useReferenceAmbientProbe = !!i3397[37]
  request.r(i3397[38], i3397[39], 0, i3396, 'customReflection')
  request.r(i3397[40], i3397[41], 0, i3396, 'defaultReflection')
  i3396.defaultReflectionMode = i3397[42]
  i3396.defaultReflectionResolution = i3397[43]
  i3396.sunLightObjectId = i3397[44]
  i3396.pixelLightCount = i3397[45]
  i3396.defaultReflectionHDR = !!i3397[46]
  i3396.hasLightDataAsset = !!i3397[47]
  i3396.hasManualGenerate = !!i3397[48]
  return i3396
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i3402 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i3403 = data
  request.r(i3403[0], i3403[1], 0, i3402, 'lightmapColor')
  request.r(i3403[2], i3403[3], 0, i3402, 'lightmapDirection')
  request.r(i3403[4], i3403[5], 0, i3402, 'shadowMask')
  return i3402
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i3404 = root || new UnityEngine.LightProbes()
  var i3405 = data
  return i3404
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.PhysicsMaterial2D"] = function (request, data, root) {
  var i3412 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.PhysicsMaterial2D' )
  var i3413 = data
  i3412.name = i3413[0]
  i3412.bounciness = i3413[1]
  i3412.friction = i3413[2]
  return i3412
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i3414 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i3415 = data
  var i3417 = i3415[0]
  var i3416 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i3417.length; i += 1) {
    i3416.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i3417[i + 0]));
  }
  i3414.ShaderCompilationErrors = i3416
  i3414.name = i3415[1]
  i3414.guid = i3415[2]
  var i3419 = i3415[3]
  var i3418 = []
  for(var i = 0; i < i3419.length; i += 1) {
    i3418.push( i3419[i + 0] );
  }
  i3414.shaderDefinedKeywords = i3418
  var i3421 = i3415[4]
  var i3420 = []
  for(var i = 0; i < i3421.length; i += 1) {
    i3420.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i3421[i + 0]) );
  }
  i3414.passes = i3420
  var i3423 = i3415[5]
  var i3422 = []
  for(var i = 0; i < i3423.length; i += 1) {
    i3422.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i3423[i + 0]) );
  }
  i3414.usePasses = i3422
  var i3425 = i3415[6]
  var i3424 = []
  for(var i = 0; i < i3425.length; i += 1) {
    i3424.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i3425[i + 0]) );
  }
  i3414.defaultParameterValues = i3424
  request.r(i3415[7], i3415[8], 0, i3414, 'unityFallbackShader')
  i3414.readDepth = !!i3415[9]
  i3414.hasDepthOnlyPass = !!i3415[10]
  i3414.isCreatedByShaderGraph = !!i3415[11]
  i3414.disableBatching = !!i3415[12]
  i3414.compiled = !!i3415[13]
  return i3414
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i3428 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i3429 = data
  i3428.shaderName = i3429[0]
  i3428.errorMessage = i3429[1]
  return i3428
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i3434 = root || new pc.UnityShaderPass()
  var i3435 = data
  i3434.id = i3435[0]
  i3434.subShaderIndex = i3435[1]
  i3434.name = i3435[2]
  i3434.passType = i3435[3]
  i3434.grabPassTextureName = i3435[4]
  i3434.usePass = !!i3435[5]
  i3434.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3435[6], i3434.zTest)
  i3434.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3435[7], i3434.zWrite)
  i3434.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3435[8], i3434.culling)
  i3434.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i3435[9], i3434.blending)
  i3434.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i3435[10], i3434.alphaBlending)
  i3434.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3435[11], i3434.colorWriteMask)
  i3434.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3435[12], i3434.offsetUnits)
  i3434.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3435[13], i3434.offsetFactor)
  i3434.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3435[14], i3434.stencilRef)
  i3434.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3435[15], i3434.stencilReadMask)
  i3434.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3435[16], i3434.stencilWriteMask)
  i3434.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3435[17], i3434.stencilOp)
  i3434.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3435[18], i3434.stencilOpFront)
  i3434.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3435[19], i3434.stencilOpBack)
  var i3437 = i3435[20]
  var i3436 = []
  for(var i = 0; i < i3437.length; i += 1) {
    i3436.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i3437[i + 0]) );
  }
  i3434.tags = i3436
  var i3439 = i3435[21]
  var i3438 = []
  for(var i = 0; i < i3439.length; i += 1) {
    i3438.push( i3439[i + 0] );
  }
  i3434.passDefinedKeywords = i3438
  var i3441 = i3435[22]
  var i3440 = []
  for(var i = 0; i < i3441.length; i += 1) {
    i3440.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i3441[i + 0]) );
  }
  i3434.passDefinedKeywordGroups = i3440
  var i3443 = i3435[23]
  var i3442 = []
  for(var i = 0; i < i3443.length; i += 1) {
    i3442.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i3443[i + 0]) );
  }
  i3434.variants = i3442
  var i3445 = i3435[24]
  var i3444 = []
  for(var i = 0; i < i3445.length; i += 1) {
    i3444.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i3445[i + 0]) );
  }
  i3434.excludedVariants = i3444
  i3434.hasDepthReader = !!i3435[25]
  return i3434
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i3446 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i3447 = data
  i3446.val = i3447[0]
  i3446.name = i3447[1]
  return i3446
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i3448 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i3449 = data
  i3448.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3449[0], i3448.src)
  i3448.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3449[1], i3448.dst)
  i3448.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3449[2], i3448.op)
  return i3448
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i3450 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i3451 = data
  i3450.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3451[0], i3450.pass)
  i3450.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3451[1], i3450.fail)
  i3450.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3451[2], i3450.zFail)
  i3450.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3451[3], i3450.comp)
  return i3450
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i3454 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i3455 = data
  i3454.name = i3455[0]
  i3454.value = i3455[1]
  return i3454
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i3458 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i3459 = data
  var i3461 = i3459[0]
  var i3460 = []
  for(var i = 0; i < i3461.length; i += 1) {
    i3460.push( i3461[i + 0] );
  }
  i3458.keywords = i3460
  i3458.hasDiscard = !!i3459[1]
  return i3458
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i3464 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i3465 = data
  i3464.passId = i3465[0]
  i3464.subShaderIndex = i3465[1]
  var i3467 = i3465[2]
  var i3466 = []
  for(var i = 0; i < i3467.length; i += 1) {
    i3466.push( i3467[i + 0] );
  }
  i3464.keywords = i3466
  i3464.vertexProgram = i3465[3]
  i3464.fragmentProgram = i3465[4]
  i3464.exportedForWebGl2 = !!i3465[5]
  i3464.readDepth = !!i3465[6]
  return i3464
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i3470 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i3471 = data
  request.r(i3471[0], i3471[1], 0, i3470, 'shader')
  i3470.pass = i3471[2]
  return i3470
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i3474 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i3475 = data
  i3474.name = i3475[0]
  i3474.type = i3475[1]
  i3474.value = new pc.Vec4( i3475[2], i3475[3], i3475[4], i3475[5] )
  i3474.textureValue = i3475[6]
  i3474.shaderPropertyFlag = i3475[7]
  return i3474
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i3476 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i3477 = data
  i3476.name = i3477[0]
  request.r(i3477[1], i3477[2], 0, i3476, 'texture')
  i3476.aabb = i3477[3]
  i3476.vertices = i3477[4]
  i3476.triangles = i3477[5]
  i3476.textureRect = UnityEngine.Rect.MinMaxRect(i3477[6], i3477[7], i3477[8], i3477[9])
  i3476.packedRect = UnityEngine.Rect.MinMaxRect(i3477[10], i3477[11], i3477[12], i3477[13])
  i3476.border = new pc.Vec4( i3477[14], i3477[15], i3477[16], i3477[17] )
  i3476.transparency = i3477[18]
  i3476.bounds = i3477[19]
  i3476.pixelsPerUnit = i3477[20]
  i3476.textureWidth = i3477[21]
  i3476.textureHeight = i3477[22]
  i3476.nativeSize = new pc.Vec2( i3477[23], i3477[24] )
  i3476.pivot = new pc.Vec2( i3477[25], i3477[26] )
  i3476.textureRectOffset = new pc.Vec2( i3477[27], i3477[28] )
  return i3476
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i3478 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i3479 = data
  i3478.name = i3479[0]
  return i3478
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i3480 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i3481 = data
  i3480.name = i3481[0]
  i3480.wrapMode = i3481[1]
  i3480.isLooping = !!i3481[2]
  i3480.length = i3481[3]
  var i3483 = i3481[4]
  var i3482 = []
  for(var i = 0; i < i3483.length; i += 1) {
    i3482.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i3483[i + 0]) );
  }
  i3480.curves = i3482
  var i3485 = i3481[5]
  var i3484 = []
  for(var i = 0; i < i3485.length; i += 1) {
    i3484.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i3485[i + 0]) );
  }
  i3480.events = i3484
  i3480.halfPrecision = !!i3481[6]
  i3480._frameRate = i3481[7]
  i3480.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i3481[8], i3480.localBounds)
  i3480.hasMuscleCurves = !!i3481[9]
  var i3487 = i3481[10]
  var i3486 = []
  for(var i = 0; i < i3487.length; i += 1) {
    i3486.push( i3487[i + 0] );
  }
  i3480.clipMuscleConstant = i3486
  i3480.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i3481[11], i3480.clipBindingConstant)
  return i3480
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i3490 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i3491 = data
  i3490.path = i3491[0]
  i3490.hash = i3491[1]
  i3490.componentType = i3491[2]
  i3490.property = i3491[3]
  i3490.keys = i3491[4]
  var i3493 = i3491[5]
  var i3492 = []
  for(var i = 0; i < i3493.length; i += 1) {
    i3492.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i3493[i + 0]) );
  }
  i3490.objectReferenceKeys = i3492
  return i3490
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i3496 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i3497 = data
  i3496.time = i3497[0]
  request.r(i3497[1], i3497[2], 0, i3496, 'value')
  return i3496
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i3500 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i3501 = data
  i3500.functionName = i3501[0]
  i3500.floatParameter = i3501[1]
  i3500.intParameter = i3501[2]
  i3500.stringParameter = i3501[3]
  request.r(i3501[4], i3501[5], 0, i3500, 'objectReferenceParameter')
  i3500.time = i3501[6]
  return i3500
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i3502 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i3503 = data
  i3502.center = new pc.Vec3( i3503[0], i3503[1], i3503[2] )
  i3502.extends = new pc.Vec3( i3503[3], i3503[4], i3503[5] )
  return i3502
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i3506 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i3507 = data
  var i3509 = i3507[0]
  var i3508 = []
  for(var i = 0; i < i3509.length; i += 1) {
    i3508.push( i3509[i + 0] );
  }
  i3506.genericBindings = i3508
  var i3511 = i3507[1]
  var i3510 = []
  for(var i = 0; i < i3511.length; i += 1) {
    i3510.push( i3511[i + 0] );
  }
  i3506.pptrCurveMapping = i3510
  return i3506
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i3512 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i3513 = data
  i3512.name = i3513[0]
  i3512.ascent = i3513[1]
  i3512.originalLineHeight = i3513[2]
  i3512.fontSize = i3513[3]
  var i3515 = i3513[4]
  var i3514 = []
  for(var i = 0; i < i3515.length; i += 1) {
    i3514.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i3515[i + 0]) );
  }
  i3512.characterInfo = i3514
  request.r(i3513[5], i3513[6], 0, i3512, 'texture')
  i3512.originalFontSize = i3513[7]
  return i3512
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i3518 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i3519 = data
  i3518.index = i3519[0]
  i3518.advance = i3519[1]
  i3518.bearing = i3519[2]
  i3518.glyphWidth = i3519[3]
  i3518.glyphHeight = i3519[4]
  i3518.minX = i3519[5]
  i3518.maxX = i3519[6]
  i3518.minY = i3519[7]
  i3518.maxY = i3519[8]
  i3518.uvBottomLeftX = i3519[9]
  i3518.uvBottomLeftY = i3519[10]
  i3518.uvBottomRightX = i3519[11]
  i3518.uvBottomRightY = i3519[12]
  i3518.uvTopLeftX = i3519[13]
  i3518.uvTopLeftY = i3519[14]
  i3518.uvTopRightX = i3519[15]
  i3518.uvTopRightY = i3519[16]
  return i3518
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i3520 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i3521 = data
  i3520.name = i3521[0]
  var i3523 = i3521[1]
  var i3522 = []
  for(var i = 0; i < i3523.length; i += 1) {
    i3522.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i3523[i + 0]) );
  }
  i3520.layers = i3522
  var i3525 = i3521[2]
  var i3524 = []
  for(var i = 0; i < i3525.length; i += 1) {
    i3524.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i3525[i + 0]) );
  }
  i3520.parameters = i3524
  i3520.animationClips = i3521[3]
  i3520.avatarUnsupported = i3521[4]
  return i3520
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i3528 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i3529 = data
  i3528.name = i3529[0]
  i3528.defaultWeight = i3529[1]
  i3528.blendingMode = i3529[2]
  i3528.avatarMask = i3529[3]
  i3528.syncedLayerIndex = i3529[4]
  i3528.syncedLayerAffectsTiming = !!i3529[5]
  i3528.syncedLayers = i3529[6]
  i3528.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i3529[7], i3528.stateMachine)
  return i3528
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i3530 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i3531 = data
  i3530.id = i3531[0]
  i3530.name = i3531[1]
  i3530.path = i3531[2]
  var i3533 = i3531[3]
  var i3532 = []
  for(var i = 0; i < i3533.length; i += 1) {
    i3532.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i3533[i + 0]) );
  }
  i3530.states = i3532
  var i3535 = i3531[4]
  var i3534 = []
  for(var i = 0; i < i3535.length; i += 1) {
    i3534.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i3535[i + 0]) );
  }
  i3530.machines = i3534
  var i3537 = i3531[5]
  var i3536 = []
  for(var i = 0; i < i3537.length; i += 1) {
    i3536.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i3537[i + 0]) );
  }
  i3530.entryStateTransitions = i3536
  var i3539 = i3531[6]
  var i3538 = []
  for(var i = 0; i < i3539.length; i += 1) {
    i3538.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i3539[i + 0]) );
  }
  i3530.exitStateTransitions = i3538
  var i3541 = i3531[7]
  var i3540 = []
  for(var i = 0; i < i3541.length; i += 1) {
    i3540.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i3541[i + 0]) );
  }
  i3530.anyStateTransitions = i3540
  i3530.defaultStateId = i3531[8]
  return i3530
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i3544 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i3545 = data
  i3544.id = i3545[0]
  i3544.name = i3545[1]
  i3544.cycleOffset = i3545[2]
  i3544.cycleOffsetParameter = i3545[3]
  i3544.cycleOffsetParameterActive = !!i3545[4]
  i3544.mirror = !!i3545[5]
  i3544.mirrorParameter = i3545[6]
  i3544.mirrorParameterActive = !!i3545[7]
  i3544.motionId = i3545[8]
  i3544.nameHash = i3545[9]
  i3544.fullPathHash = i3545[10]
  i3544.speed = i3545[11]
  i3544.speedParameter = i3545[12]
  i3544.speedParameterActive = !!i3545[13]
  i3544.tag = i3545[14]
  i3544.tagHash = i3545[15]
  i3544.writeDefaultValues = !!i3545[16]
  var i3547 = i3545[17]
  var i3546 = []
  for(var i = 0; i < i3547.length; i += 2) {
  request.r(i3547[i + 0], i3547[i + 1], 2, i3546, '')
  }
  i3544.behaviours = i3546
  var i3549 = i3545[18]
  var i3548 = []
  for(var i = 0; i < i3549.length; i += 1) {
    i3548.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i3549[i + 0]) );
  }
  i3544.transitions = i3548
  return i3544
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i3554 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i3555 = data
  i3554.fullPath = i3555[0]
  i3554.canTransitionToSelf = !!i3555[1]
  i3554.duration = i3555[2]
  i3554.exitTime = i3555[3]
  i3554.hasExitTime = !!i3555[4]
  i3554.hasFixedDuration = !!i3555[5]
  i3554.interruptionSource = i3555[6]
  i3554.offset = i3555[7]
  i3554.orderedInterruption = !!i3555[8]
  i3554.destinationStateId = i3555[9]
  i3554.isExit = !!i3555[10]
  i3554.mute = !!i3555[11]
  i3554.solo = !!i3555[12]
  var i3557 = i3555[13]
  var i3556 = []
  for(var i = 0; i < i3557.length; i += 1) {
    i3556.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i3557[i + 0]) );
  }
  i3554.conditions = i3556
  return i3554
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i3562 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i3563 = data
  i3562.destinationStateId = i3563[0]
  i3562.isExit = !!i3563[1]
  i3562.mute = !!i3563[2]
  i3562.solo = !!i3563[3]
  var i3565 = i3563[4]
  var i3564 = []
  for(var i = 0; i < i3565.length; i += 1) {
    i3564.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i3565[i + 0]) );
  }
  i3562.conditions = i3564
  return i3562
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i3568 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i3569 = data
  i3568.defaultBool = !!i3569[0]
  i3568.defaultFloat = i3569[1]
  i3568.defaultInt = i3569[2]
  i3568.name = i3569[3]
  i3568.nameHash = i3569[4]
  i3568.type = i3569[5]
  return i3568
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i3570 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i3571 = data
  i3570.name = i3571[0]
  i3570.bytes64 = i3571[1]
  i3570.data = i3571[2]
  return i3570
}

Deserializers["PlayerCardData"] = function (request, data, root) {
  var i3572 = root || request.c( 'PlayerCardData' )
  var i3573 = data
  i3572.nationality = i3573[0]
  request.r(i3573[1], i3573[2], 0, i3572, 'playerSprite')
  request.r(i3573[3], i3573[4], 0, i3572, 'flagSprite')
  return i3572
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i3574 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i3575 = data
  i3574.useSafeMode = !!i3575[0]
  i3574.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i3575[1], i3574.safeModeOptions)
  i3574.timeScale = i3575[2]
  i3574.unscaledTimeScale = i3575[3]
  i3574.useSmoothDeltaTime = !!i3575[4]
  i3574.maxSmoothUnscaledTime = i3575[5]
  i3574.rewindCallbackMode = i3575[6]
  i3574.showUnityEditorReport = !!i3575[7]
  i3574.logBehaviour = i3575[8]
  i3574.drawGizmos = !!i3575[9]
  i3574.defaultRecyclable = !!i3575[10]
  i3574.defaultAutoPlay = i3575[11]
  i3574.defaultUpdateType = i3575[12]
  i3574.defaultTimeScaleIndependent = !!i3575[13]
  i3574.defaultEaseType = i3575[14]
  i3574.defaultEaseOvershootOrAmplitude = i3575[15]
  i3574.defaultEasePeriod = i3575[16]
  i3574.defaultAutoKill = !!i3575[17]
  i3574.defaultLoopType = i3575[18]
  i3574.debugMode = !!i3575[19]
  i3574.debugStoreTargetId = !!i3575[20]
  i3574.showPreviewPanel = !!i3575[21]
  i3574.storeSettingsLocation = i3575[22]
  i3574.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i3575[23], i3574.modules)
  i3574.createASMDEF = !!i3575[24]
  i3574.showPlayingTweens = !!i3575[25]
  i3574.showPausedTweens = !!i3575[26]
  return i3574
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i3576 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i3577 = data
  i3576.logBehaviour = i3577[0]
  i3576.nestedTweenFailureBehaviour = i3577[1]
  return i3576
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i3578 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i3579 = data
  i3578.showPanel = !!i3579[0]
  i3578.audioEnabled = !!i3579[1]
  i3578.physicsEnabled = !!i3579[2]
  i3578.physics2DEnabled = !!i3579[3]
  i3578.spriteEnabled = !!i3579[4]
  i3578.uiEnabled = !!i3579[5]
  i3578.uiToolkitEnabled = !!i3579[6]
  i3578.textMeshProEnabled = !!i3579[7]
  i3578.tk2DEnabled = !!i3579[8]
  i3578.deAudioEnabled = !!i3579[9]
  i3578.deUnityExtendedEnabled = !!i3579[10]
  i3578.epoOutlineEnabled = !!i3579[11]
  return i3578
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i3580 = root || request.c( 'TMPro.TMP_Settings' )
  var i3581 = data
  i3580.assetVersion = i3581[0]
  i3580.m_TextWrappingMode = i3581[1]
  i3580.m_enableKerning = !!i3581[2]
  var i3583 = i3581[3]
  var i3582 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i3583.length; i += 1) {
    i3582.add(i3583[i + 0]);
  }
  i3580.m_ActiveFontFeatures = i3582
  i3580.m_enableExtraPadding = !!i3581[4]
  i3580.m_enableTintAllSprites = !!i3581[5]
  i3580.m_enableParseEscapeCharacters = !!i3581[6]
  i3580.m_EnableRaycastTarget = !!i3581[7]
  i3580.m_GetFontFeaturesAtRuntime = !!i3581[8]
  i3580.m_missingGlyphCharacter = i3581[9]
  i3580.m_ClearDynamicDataOnBuild = !!i3581[10]
  i3580.m_warningsDisabled = !!i3581[11]
  request.r(i3581[12], i3581[13], 0, i3580, 'm_defaultFontAsset')
  i3580.m_defaultFontAssetPath = i3581[14]
  i3580.m_defaultFontSize = i3581[15]
  i3580.m_defaultAutoSizeMinRatio = i3581[16]
  i3580.m_defaultAutoSizeMaxRatio = i3581[17]
  i3580.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i3581[18], i3581[19] )
  i3580.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i3581[20], i3581[21] )
  i3580.m_autoSizeTextContainer = !!i3581[22]
  i3580.m_IsTextObjectScaleStatic = !!i3581[23]
  var i3585 = i3581[24]
  var i3584 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i3585.length; i += 2) {
  request.r(i3585[i + 0], i3585[i + 1], 1, i3584, '')
  }
  i3580.m_fallbackFontAssets = i3584
  i3580.m_matchMaterialPreset = !!i3581[25]
  i3580.m_HideSubTextObjects = !!i3581[26]
  request.r(i3581[27], i3581[28], 0, i3580, 'm_defaultSpriteAsset')
  i3580.m_defaultSpriteAssetPath = i3581[29]
  i3580.m_enableEmojiSupport = !!i3581[30]
  i3580.m_MissingCharacterSpriteUnicode = i3581[31]
  var i3587 = i3581[32]
  var i3586 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i3587.length; i += 2) {
  request.r(i3587[i + 0], i3587[i + 1], 1, i3586, '')
  }
  i3580.m_EmojiFallbackTextAssets = i3586
  i3580.m_defaultColorGradientPresetsPath = i3581[33]
  request.r(i3581[34], i3581[35], 0, i3580, 'm_defaultStyleSheet')
  i3580.m_StyleSheetsResourcePath = i3581[36]
  request.r(i3581[37], i3581[38], 0, i3580, 'm_leadingCharacters')
  request.r(i3581[39], i3581[40], 0, i3580, 'm_followingCharacters')
  i3580.m_UseModernHangulLineBreakingRules = !!i3581[41]
  return i3580
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i3594 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i3595 = data
  i3594.normalStyle = i3595[0]
  i3594.normalSpacingOffset = i3595[1]
  i3594.boldStyle = i3595[2]
  i3594.boldSpacing = i3595[3]
  i3594.italicStyle = i3595[4]
  i3594.tabSize = i3595[5]
  request.r(i3595[6], i3595[7], 0, i3594, 'atlas')
  i3594.m_SourceFontFileGUID = i3595[8]
  i3594.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i3595[9], i3594.m_CreationSettings)
  request.r(i3595[10], i3595[11], 0, i3594, 'm_SourceFontFile')
  i3594.m_SourceFontFilePath = i3595[12]
  i3594.m_AtlasPopulationMode = i3595[13]
  i3594.InternalDynamicOS = !!i3595[14]
  var i3597 = i3595[15]
  var i3596 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i3597.length; i += 1) {
    i3596.add(request.d('UnityEngine.TextCore.Glyph', i3597[i + 0]));
  }
  i3594.m_GlyphTable = i3596
  var i3599 = i3595[16]
  var i3598 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i3599.length; i += 1) {
    i3598.add(request.d('TMPro.TMP_Character', i3599[i + 0]));
  }
  i3594.m_CharacterTable = i3598
  var i3601 = i3595[17]
  var i3600 = []
  for(var i = 0; i < i3601.length; i += 2) {
  request.r(i3601[i + 0], i3601[i + 1], 2, i3600, '')
  }
  i3594.m_AtlasTextures = i3600
  i3594.m_AtlasTextureIndex = i3595[18]
  i3594.m_IsMultiAtlasTexturesEnabled = !!i3595[19]
  i3594.m_GetFontFeatures = !!i3595[20]
  i3594.m_ClearDynamicDataOnBuild = !!i3595[21]
  i3594.m_AtlasWidth = i3595[22]
  i3594.m_AtlasHeight = i3595[23]
  i3594.m_AtlasPadding = i3595[24]
  i3594.m_AtlasRenderMode = i3595[25]
  var i3603 = i3595[26]
  var i3602 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i3603.length; i += 1) {
    i3602.add(request.d('UnityEngine.TextCore.GlyphRect', i3603[i + 0]));
  }
  i3594.m_UsedGlyphRects = i3602
  var i3605 = i3595[27]
  var i3604 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i3605.length; i += 1) {
    i3604.add(request.d('UnityEngine.TextCore.GlyphRect', i3605[i + 0]));
  }
  i3594.m_FreeGlyphRects = i3604
  i3594.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i3595[28], i3594.m_FontFeatureTable)
  i3594.m_ShouldReimportFontFeatures = !!i3595[29]
  var i3607 = i3595[30]
  var i3606 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i3607.length; i += 2) {
  request.r(i3607[i + 0], i3607[i + 1], 1, i3606, '')
  }
  i3594.m_FallbackFontAssetTable = i3606
  var i3609 = i3595[31]
  var i3608 = []
  for(var i = 0; i < i3609.length; i += 1) {
    i3608.push( request.d('TMPro.TMP_FontWeightPair', i3609[i + 0]) );
  }
  i3594.m_FontWeightTable = i3608
  var i3611 = i3595[32]
  var i3610 = []
  for(var i = 0; i < i3611.length; i += 1) {
    i3610.push( request.d('TMPro.TMP_FontWeightPair', i3611[i + 0]) );
  }
  i3594.fontWeights = i3610
  i3594.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i3595[33], i3594.m_fontInfo)
  var i3613 = i3595[34]
  var i3612 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i3613.length; i += 1) {
    i3612.add(request.d('TMPro.TMP_Glyph', i3613[i + 0]));
  }
  i3594.m_glyphInfoList = i3612
  i3594.m_KerningTable = request.d('TMPro.KerningTable', i3595[35], i3594.m_KerningTable)
  var i3615 = i3595[36]
  var i3614 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i3615.length; i += 2) {
  request.r(i3615[i + 0], i3615[i + 1], 1, i3614, '')
  }
  i3594.fallbackFontAssets = i3614
  i3594.m_Version = i3595[37]
  i3594.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i3595[38], i3594.m_FaceInfo)
  request.r(i3595[39], i3595[40], 0, i3594, 'm_Material')
  return i3594
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i3616 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i3617 = data
  i3616.sourceFontFileName = i3617[0]
  i3616.sourceFontFileGUID = i3617[1]
  i3616.faceIndex = i3617[2]
  i3616.pointSizeSamplingMode = i3617[3]
  i3616.pointSize = i3617[4]
  i3616.padding = i3617[5]
  i3616.paddingMode = i3617[6]
  i3616.packingMode = i3617[7]
  i3616.atlasWidth = i3617[8]
  i3616.atlasHeight = i3617[9]
  i3616.characterSetSelectionMode = i3617[10]
  i3616.characterSequence = i3617[11]
  i3616.referencedFontAssetGUID = i3617[12]
  i3616.referencedTextAssetGUID = i3617[13]
  i3616.fontStyle = i3617[14]
  i3616.fontStyleModifier = i3617[15]
  i3616.renderMode = i3617[16]
  i3616.includeFontFeatures = !!i3617[17]
  return i3616
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i3620 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i3621 = data
  i3620.m_Index = i3621[0]
  i3620.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i3621[1], i3620.m_Metrics)
  i3620.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i3621[2], i3620.m_GlyphRect)
  i3620.m_Scale = i3621[3]
  i3620.m_AtlasIndex = i3621[4]
  i3620.m_ClassDefinitionType = i3621[5]
  return i3620
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i3622 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i3623 = data
  i3622.m_Width = i3623[0]
  i3622.m_Height = i3623[1]
  i3622.m_HorizontalBearingX = i3623[2]
  i3622.m_HorizontalBearingY = i3623[3]
  i3622.m_HorizontalAdvance = i3623[4]
  return i3622
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i3624 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i3625 = data
  i3624.m_X = i3625[0]
  i3624.m_Y = i3625[1]
  i3624.m_Width = i3625[2]
  i3624.m_Height = i3625[3]
  return i3624
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i3628 = root || request.c( 'TMPro.TMP_Character' )
  var i3629 = data
  i3628.m_ElementType = i3629[0]
  i3628.m_Unicode = i3629[1]
  i3628.m_GlyphIndex = i3629[2]
  i3628.m_Scale = i3629[3]
  return i3628
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i3634 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i3635 = data
  var i3637 = i3635[0]
  var i3636 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i3637.length; i += 1) {
    i3636.add(request.d('TMPro.MultipleSubstitutionRecord', i3637[i + 0]));
  }
  i3634.m_MultipleSubstitutionRecords = i3636
  var i3639 = i3635[1]
  var i3638 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i3639.length; i += 1) {
    i3638.add(request.d('TMPro.LigatureSubstitutionRecord', i3639[i + 0]));
  }
  i3634.m_LigatureSubstitutionRecords = i3638
  var i3641 = i3635[2]
  var i3640 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i3641.length; i += 1) {
    i3640.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i3641[i + 0]));
  }
  i3634.m_GlyphPairAdjustmentRecords = i3640
  var i3643 = i3635[3]
  var i3642 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i3643.length; i += 1) {
    i3642.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i3643[i + 0]));
  }
  i3634.m_MarkToBaseAdjustmentRecords = i3642
  var i3645 = i3635[4]
  var i3644 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i3645.length; i += 1) {
    i3644.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i3645[i + 0]));
  }
  i3634.m_MarkToMarkAdjustmentRecords = i3644
  return i3634
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i3648 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i3649 = data
  i3648.m_TargetGlyphID = i3649[0]
  i3648.m_SubstituteGlyphIDs = i3649[1]
  return i3648
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i3652 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i3653 = data
  i3652.m_ComponentGlyphIDs = i3653[0]
  i3652.m_LigatureGlyphID = i3653[1]
  return i3652
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i3656 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i3657 = data
  i3656.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i3657[0], i3656.m_FirstAdjustmentRecord)
  i3656.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i3657[1], i3656.m_SecondAdjustmentRecord)
  i3656.m_FeatureLookupFlags = i3657[2]
  return i3656
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i3658 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i3659 = data
  i3658.m_GlyphIndex = i3659[0]
  i3658.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i3659[1], i3658.m_GlyphValueRecord)
  return i3658
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i3660 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i3661 = data
  i3660.m_XPlacement = i3661[0]
  i3660.m_YPlacement = i3661[1]
  i3660.m_XAdvance = i3661[2]
  i3660.m_YAdvance = i3661[3]
  return i3660
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i3664 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i3665 = data
  i3664.m_BaseGlyphID = i3665[0]
  i3664.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i3665[1], i3664.m_BaseGlyphAnchorPoint)
  i3664.m_MarkGlyphID = i3665[2]
  i3664.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i3665[3], i3664.m_MarkPositionAdjustment)
  return i3664
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i3668 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i3669 = data
  i3668.m_BaseMarkGlyphID = i3669[0]
  i3668.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i3669[1], i3668.m_BaseMarkGlyphAnchorPoint)
  i3668.m_CombiningMarkGlyphID = i3669[2]
  i3668.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i3669[3], i3668.m_CombiningMarkPositionAdjustment)
  return i3668
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i3672 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i3673 = data
  request.r(i3673[0], i3673[1], 0, i3672, 'regularTypeface')
  request.r(i3673[2], i3673[3], 0, i3672, 'italicTypeface')
  return i3672
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i3674 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i3675 = data
  i3674.Name = i3675[0]
  i3674.PointSize = i3675[1]
  i3674.Scale = i3675[2]
  i3674.CharacterCount = i3675[3]
  i3674.LineHeight = i3675[4]
  i3674.Baseline = i3675[5]
  i3674.Ascender = i3675[6]
  i3674.CapHeight = i3675[7]
  i3674.Descender = i3675[8]
  i3674.CenterLine = i3675[9]
  i3674.SuperscriptOffset = i3675[10]
  i3674.SubscriptOffset = i3675[11]
  i3674.SubSize = i3675[12]
  i3674.Underline = i3675[13]
  i3674.UnderlineThickness = i3675[14]
  i3674.strikethrough = i3675[15]
  i3674.strikethroughThickness = i3675[16]
  i3674.TabWidth = i3675[17]
  i3674.Padding = i3675[18]
  i3674.AtlasWidth = i3675[19]
  i3674.AtlasHeight = i3675[20]
  return i3674
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i3678 = root || request.c( 'TMPro.TMP_Glyph' )
  var i3679 = data
  i3678.id = i3679[0]
  i3678.x = i3679[1]
  i3678.y = i3679[2]
  i3678.width = i3679[3]
  i3678.height = i3679[4]
  i3678.xOffset = i3679[5]
  i3678.yOffset = i3679[6]
  i3678.xAdvance = i3679[7]
  i3678.scale = i3679[8]
  return i3678
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i3680 = root || request.c( 'TMPro.KerningTable' )
  var i3681 = data
  var i3683 = i3681[0]
  var i3682 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i3683.length; i += 1) {
    i3682.add(request.d('TMPro.KerningPair', i3683[i + 0]));
  }
  i3680.kerningPairs = i3682
  return i3680
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i3686 = root || request.c( 'TMPro.KerningPair' )
  var i3687 = data
  i3686.xOffset = i3687[0]
  i3686.m_FirstGlyph = i3687[1]
  i3686.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i3687[2], i3686.m_FirstGlyphAdjustments)
  i3686.m_SecondGlyph = i3687[3]
  i3686.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i3687[4], i3686.m_SecondGlyphAdjustments)
  i3686.m_IgnoreSpacingAdjustments = !!i3687[5]
  return i3686
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i3688 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i3689 = data
  i3688.m_FaceIndex = i3689[0]
  i3688.m_FamilyName = i3689[1]
  i3688.m_StyleName = i3689[2]
  i3688.m_PointSize = i3689[3]
  i3688.m_Scale = i3689[4]
  i3688.m_UnitsPerEM = i3689[5]
  i3688.m_LineHeight = i3689[6]
  i3688.m_AscentLine = i3689[7]
  i3688.m_CapLine = i3689[8]
  i3688.m_MeanLine = i3689[9]
  i3688.m_Baseline = i3689[10]
  i3688.m_DescentLine = i3689[11]
  i3688.m_SuperscriptOffset = i3689[12]
  i3688.m_SuperscriptSize = i3689[13]
  i3688.m_SubscriptOffset = i3689[14]
  i3688.m_SubscriptSize = i3689[15]
  i3688.m_UnderlineOffset = i3689[16]
  i3688.m_UnderlineThickness = i3689[17]
  i3688.m_StrikethroughOffset = i3689[18]
  i3688.m_StrikethroughThickness = i3689[19]
  i3688.m_TabWidth = i3689[20]
  return i3688
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i3690 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i3691 = data
  request.r(i3691[0], i3691[1], 0, i3690, 'spriteSheet')
  var i3693 = i3691[2]
  var i3692 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i3693.length; i += 1) {
    i3692.add(request.d('TMPro.TMP_Sprite', i3693[i + 0]));
  }
  i3690.spriteInfoList = i3692
  var i3695 = i3691[3]
  var i3694 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i3695.length; i += 2) {
  request.r(i3695[i + 0], i3695[i + 1], 1, i3694, '')
  }
  i3690.fallbackSpriteAssets = i3694
  var i3697 = i3691[4]
  var i3696 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i3697.length; i += 1) {
    i3696.add(request.d('TMPro.TMP_SpriteCharacter', i3697[i + 0]));
  }
  i3690.m_SpriteCharacterTable = i3696
  var i3699 = i3691[5]
  var i3698 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i3699.length; i += 1) {
    i3698.add(request.d('TMPro.TMP_SpriteGlyph', i3699[i + 0]));
  }
  i3690.m_GlyphTable = i3698
  i3690.m_Version = i3691[6]
  i3690.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i3691[7], i3690.m_FaceInfo)
  request.r(i3691[8], i3691[9], 0, i3690, 'm_Material')
  return i3690
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i3702 = root || request.c( 'TMPro.TMP_Sprite' )
  var i3703 = data
  i3702.name = i3703[0]
  i3702.hashCode = i3703[1]
  i3702.unicode = i3703[2]
  i3702.pivot = new pc.Vec2( i3703[3], i3703[4] )
  request.r(i3703[5], i3703[6], 0, i3702, 'sprite')
  i3702.id = i3703[7]
  i3702.x = i3703[8]
  i3702.y = i3703[9]
  i3702.width = i3703[10]
  i3702.height = i3703[11]
  i3702.xOffset = i3703[12]
  i3702.yOffset = i3703[13]
  i3702.xAdvance = i3703[14]
  i3702.scale = i3703[15]
  return i3702
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i3708 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i3709 = data
  i3708.m_Name = i3709[0]
  i3708.m_ElementType = i3709[1]
  i3708.m_Unicode = i3709[2]
  i3708.m_GlyphIndex = i3709[3]
  i3708.m_Scale = i3709[4]
  return i3708
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i3712 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i3713 = data
  request.r(i3713[0], i3713[1], 0, i3712, 'sprite')
  i3712.m_Index = i3713[2]
  i3712.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i3713[3], i3712.m_Metrics)
  i3712.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i3713[4], i3712.m_GlyphRect)
  i3712.m_Scale = i3713[5]
  i3712.m_AtlasIndex = i3713[6]
  i3712.m_ClassDefinitionType = i3713[7]
  return i3712
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i3714 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i3715 = data
  var i3717 = i3715[0]
  var i3716 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i3717.length; i += 1) {
    i3716.add(request.d('TMPro.TMP_Style', i3717[i + 0]));
  }
  i3714.m_StyleList = i3716
  return i3714
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i3720 = root || request.c( 'TMPro.TMP_Style' )
  var i3721 = data
  i3720.m_Name = i3721[0]
  i3720.m_HashCode = i3721[1]
  i3720.m_OpeningDefinition = i3721[2]
  i3720.m_ClosingDefinition = i3721[3]
  i3720.m_OpeningTagArray = i3721[4]
  i3720.m_ClosingTagArray = i3721[5]
  return i3720
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i3722 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i3723 = data
  var i3725 = i3723[0]
  var i3724 = []
  for(var i = 0; i < i3725.length; i += 1) {
    i3724.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i3725[i + 0]) );
  }
  i3722.files = i3724
  i3722.componentToPrefabIds = i3723[1]
  return i3722
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i3728 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i3729 = data
  i3728.path = i3729[0]
  request.r(i3729[1], i3729[2], 0, i3728, 'unityObject')
  return i3728
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i3730 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i3731 = data
  var i3733 = i3731[0]
  var i3732 = []
  for(var i = 0; i < i3733.length; i += 1) {
    i3732.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i3733[i + 0]) );
  }
  i3730.scriptsExecutionOrder = i3732
  var i3735 = i3731[1]
  var i3734 = []
  for(var i = 0; i < i3735.length; i += 1) {
    i3734.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i3735[i + 0]) );
  }
  i3730.sortingLayers = i3734
  var i3737 = i3731[2]
  var i3736 = []
  for(var i = 0; i < i3737.length; i += 1) {
    i3736.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i3737[i + 0]) );
  }
  i3730.cullingLayers = i3736
  i3730.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i3731[3], i3730.timeSettings)
  i3730.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i3731[4], i3730.physicsSettings)
  i3730.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i3731[5], i3730.physics2DSettings)
  i3730.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i3731[6], i3730.qualitySettings)
  i3730.enableRealtimeShadows = !!i3731[7]
  i3730.enableAutoInstancing = !!i3731[8]
  i3730.enableStaticBatching = !!i3731[9]
  i3730.enableDynamicBatching = !!i3731[10]
  i3730.lightmapEncodingQuality = i3731[11]
  i3730.desiredColorSpace = i3731[12]
  var i3739 = i3731[13]
  var i3738 = []
  for(var i = 0; i < i3739.length; i += 1) {
    i3738.push( i3739[i + 0] );
  }
  i3730.allTags = i3738
  return i3730
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i3742 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i3743 = data
  i3742.name = i3743[0]
  i3742.value = i3743[1]
  return i3742
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i3746 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i3747 = data
  i3746.id = i3747[0]
  i3746.name = i3747[1]
  i3746.value = i3747[2]
  return i3746
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i3750 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i3751 = data
  i3750.id = i3751[0]
  i3750.name = i3751[1]
  return i3750
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i3752 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i3753 = data
  i3752.fixedDeltaTime = i3753[0]
  i3752.maximumDeltaTime = i3753[1]
  i3752.timeScale = i3753[2]
  i3752.maximumParticleTimestep = i3753[3]
  return i3752
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i3754 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i3755 = data
  i3754.gravity = new pc.Vec3( i3755[0], i3755[1], i3755[2] )
  i3754.defaultSolverIterations = i3755[3]
  i3754.bounceThreshold = i3755[4]
  i3754.autoSyncTransforms = !!i3755[5]
  i3754.autoSimulation = !!i3755[6]
  var i3757 = i3755[7]
  var i3756 = []
  for(var i = 0; i < i3757.length; i += 1) {
    i3756.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i3757[i + 0]) );
  }
  i3754.collisionMatrix = i3756
  return i3754
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i3760 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i3761 = data
  i3760.enabled = !!i3761[0]
  i3760.layerId = i3761[1]
  i3760.otherLayerId = i3761[2]
  return i3760
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i3762 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i3763 = data
  request.r(i3763[0], i3763[1], 0, i3762, 'material')
  i3762.gravity = new pc.Vec2( i3763[2], i3763[3] )
  i3762.positionIterations = i3763[4]
  i3762.velocityIterations = i3763[5]
  i3762.velocityThreshold = i3763[6]
  i3762.maxLinearCorrection = i3763[7]
  i3762.maxAngularCorrection = i3763[8]
  i3762.maxTranslationSpeed = i3763[9]
  i3762.maxRotationSpeed = i3763[10]
  i3762.baumgarteScale = i3763[11]
  i3762.baumgarteTOIScale = i3763[12]
  i3762.timeToSleep = i3763[13]
  i3762.linearSleepTolerance = i3763[14]
  i3762.angularSleepTolerance = i3763[15]
  i3762.defaultContactOffset = i3763[16]
  i3762.autoSimulation = !!i3763[17]
  i3762.queriesHitTriggers = !!i3763[18]
  i3762.queriesStartInColliders = !!i3763[19]
  i3762.callbacksOnDisable = !!i3763[20]
  i3762.reuseCollisionCallbacks = !!i3763[21]
  i3762.autoSyncTransforms = !!i3763[22]
  var i3765 = i3763[23]
  var i3764 = []
  for(var i = 0; i < i3765.length; i += 1) {
    i3764.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i3765[i + 0]) );
  }
  i3762.collisionMatrix = i3764
  return i3762
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i3768 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i3769 = data
  i3768.enabled = !!i3769[0]
  i3768.layerId = i3769[1]
  i3768.otherLayerId = i3769[2]
  return i3768
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i3770 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i3771 = data
  var i3773 = i3771[0]
  var i3772 = []
  for(var i = 0; i < i3773.length; i += 1) {
    i3772.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i3773[i + 0]) );
  }
  i3770.qualityLevels = i3772
  var i3775 = i3771[1]
  var i3774 = []
  for(var i = 0; i < i3775.length; i += 1) {
    i3774.push( i3775[i + 0] );
  }
  i3770.names = i3774
  i3770.shadows = i3771[2]
  i3770.anisotropicFiltering = i3771[3]
  i3770.antiAliasing = i3771[4]
  i3770.lodBias = i3771[5]
  i3770.shadowCascades = i3771[6]
  i3770.shadowDistance = i3771[7]
  i3770.shadowmaskMode = i3771[8]
  i3770.shadowProjection = i3771[9]
  i3770.shadowResolution = i3771[10]
  i3770.softParticles = !!i3771[11]
  i3770.softVegetation = !!i3771[12]
  i3770.activeColorSpace = i3771[13]
  i3770.desiredColorSpace = i3771[14]
  i3770.masterTextureLimit = i3771[15]
  i3770.maxQueuedFrames = i3771[16]
  i3770.particleRaycastBudget = i3771[17]
  i3770.pixelLightCount = i3771[18]
  i3770.realtimeReflectionProbes = !!i3771[19]
  i3770.shadowCascade2Split = i3771[20]
  i3770.shadowCascade4Split = new pc.Vec3( i3771[21], i3771[22], i3771[23] )
  i3770.streamingMipmapsActive = !!i3771[24]
  i3770.vSyncCount = i3771[25]
  i3770.asyncUploadBufferSize = i3771[26]
  i3770.asyncUploadTimeSlice = i3771[27]
  i3770.billboardsFaceCameraPosition = !!i3771[28]
  i3770.shadowNearPlaneOffset = i3771[29]
  i3770.streamingMipmapsMemoryBudget = i3771[30]
  i3770.maximumLODLevel = i3771[31]
  i3770.streamingMipmapsAddAllCameras = !!i3771[32]
  i3770.streamingMipmapsMaxLevelReduction = i3771[33]
  i3770.streamingMipmapsRenderersPerFrame = i3771[34]
  i3770.resolutionScalingFixedDPIFactor = i3771[35]
  i3770.streamingMipmapsMaxFileIORequests = i3771[36]
  i3770.currentQualityLevel = i3771[37]
  return i3770
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i3780 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i3781 = data
  i3780.weight = i3781[0]
  i3780.vertices = i3781[1]
  i3780.normals = i3781[2]
  i3780.tangents = i3781[3]
  return i3780
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i3784 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i3785 = data
  i3784.mode = i3785[0]
  i3784.parameter = i3785[1]
  i3784.threshold = i3785[2]
  return i3784
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i3786 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i3787 = data
  i3786.m_XCoordinate = i3787[0]
  i3786.m_YCoordinate = i3787[1]
  return i3786
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i3788 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i3789 = data
  i3788.m_XPositionAdjustment = i3789[0]
  i3788.m_YPositionAdjustment = i3789[1]
  return i3788
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i3790 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i3791 = data
  i3790.xPlacement = i3791[0]
  i3790.yPlacement = i3791[1]
  i3790.xAdvance = i3791[2]
  i3790.yAdvance = i3791[3]
  return i3790
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D":{"usedByComposite":0,"autoTiling":1,"points":2,"enabled":3,"isTrigger":4,"usedByEffector":5,"density":6,"offset":7,"material":9},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider2D":{"size":0,"direction":2,"enabled":3,"isTrigger":4,"usedByEffector":5,"density":6,"offset":7,"material":9},"Luna.Unity.DTO.UnityEngine.Components.SpriteMask":{"frontSortingLayerID":0,"frontSortingOrder":1,"backSortingLayerID":2,"backSortingOrder":3,"alphaCutoff":4,"sprite":5,"tileMode":7,"isCustomRangeActive":8,"spriteSortPoint":9,"enabled":10,"sharedMaterial":11,"sharedMaterials":13,"receiveShadows":14,"shadowCastingMode":15,"sortingLayerID":16,"sortingOrder":17,"lightmapIndex":18,"lightmapSceneIndex":19,"lightmapScaleOffset":20,"lightProbeUsage":24,"reflectionProbeUsage":25},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.PhysicsMaterial2D":{"name":0,"bounciness":1,"friction":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2}}

Deserializers.requiredComponents = {"51":[52],"53":[52],"54":[52],"55":[52],"56":[52],"57":[52],"58":[59],"60":[2],"61":[62],"63":[62],"64":[62],"65":[62],"66":[62],"67":[62],"68":[34],"69":[34],"70":[34],"71":[34],"72":[34],"73":[34],"74":[34],"75":[34],"76":[34],"77":[34],"78":[34],"79":[34],"80":[34],"81":[2],"82":[83],"84":[85],"86":[85],"26":[25],"7":[2],"35":[34],"38":[18],"87":[12],"88":[2],"89":[90],"91":[42],"92":[26],"93":[25],"94":[83,25],"95":[25,30],"96":[25],"97":[30,25],"98":[83],"99":[30,25],"100":[25],"101":[102],"103":[102],"104":[102],"105":[25],"106":[25],"29":[26],"31":[30,25],"107":[25],"28":[26],"108":[25],"109":[25],"110":[25],"111":[25],"112":[25],"113":[25],"114":[25],"115":[25],"116":[25],"117":[30,25],"118":[25],"119":[25],"120":[25],"121":[25],"122":[30,25],"123":[25],"124":[42],"125":[42],"43":[42],"126":[42],"127":[2],"128":[2]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.MonoBehaviour","CameraFollow2D","UnityEngine.Transform","AutoCameraFit","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Mesh","UnityEngine.Material","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","MoveBetweenPoints","ScreenHeightPositionAnchor","UnityEngine.BoxCollider2D","ClickToStore","PlayerCardUIManager","UnityEngine.GameObject","Ply_SoundManager","UnityEngine.AudioSource","UnityEngine.AudioClip","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.PolygonCollider2D","UnityEngine.PhysicsMaterial2D","UnityEngine.Rigidbody2D","BatStrikeController","CupCollision","UnityEngine.CapsuleCollider2D","SlotTrigger","PlayerCardData","UnityEngine.SpriteMask","HideOnFirstClick","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_FontAsset","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.Font","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.InputSystem.UI.InputSystemUIInputModule","UnityEngine.InputSystem.UI.TrackedDeviceRaycaster","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.38f1";

Deserializers.productName = "PLY_MiniSoccer";

Deserializers.lunaInitializationTime = "07/15/2026 03:53:54";

Deserializers.lunaDaysRunning = "22.2";

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

Deserializers.buildID = "c431e73b-e9c6-4250-a7b2-cb35ae1dbd38";

Deserializers.runtimeInitializeOnLoadInfos = [[["Unity","Services","Core","Internal","UnityServicesInitializer","EnableServicesInitializationAsync"],["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["DG","Tweening","DOTween","RuntimeOnLoad"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["Unity","Services","Core","Registration","CorePackageInitializer","InitializeOnLoad"],["Unity","Services","Core","Internal","TaskAsyncOperation","SetScheduler"],["Unity","Services","Core","Environments","Client","Scheduler","EngineStateHelper","Init"],["Unity","Services","Core","Environments","Client","Scheduler","ThreadHelper","Init"],["Ua2CoreInitializeCallback","Register"],["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["Unity","AI","Navigation","NavMeshLink","ClearTrackedList"],["Unity","AI","Navigation","NavMeshSurface","ClearNavMeshSurfaces"],["Unity","AI","Navigation","NavMeshModifierVolume","ClearNavMeshModifiers"],["Unity","AI","Navigation","NavMeshModifier","ClearNavMeshModifiers"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["Unity","Services","Core","Internal","UnityServicesInitializer","CreateStaticInstance"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[["Unity","Services","Core","Environments","Client","Http","JsonHelpers","RegisterTypesForAOT"]],[["Unity","Services","Core","UnityThreadUtils","CaptureUnityThreadInfo"],["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

